import { useState, useRef, useEffect } from 'react';

const EDGE_GAP = 20;
const PLAYLIST_ID = 'PL5O5CYQ6VzT5AAwGxxK0AJNOG8NMXq6cN';

// ── Màu NTH Mobile ──
const C = {
  red:      '#c0392b',
  redLight: '#e74c3c',
  gold:     '#d4a055',
  text:     'rgba(255,245,230,0.90)',
  textSub:  'rgba(255,235,210,0.55)',
  border:   'rgba(192,57,43,0.40)',
  borderTop:'rgba(192,57,43,0.60)',
  bg:       'rgba(8,3,3,0.55)',        // trong suốt hơn
  track:    'rgba(192,57,43,0.15)',
};

// Khai báo kiểu cho YouTube IFrame API
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}
declare namespace YT {
  class Player {
    constructor(el: HTMLElement, opts: object);
    playVideo(): void;
    pauseVideo(): void;
    nextVideo(): void;
    previousVideo(): void;
    playVideoAt(index: number): void;
    setVolume(v: number): void;
    mute(): void;
    unMute(): void;
    isMuted(): boolean;
    getVolume(): number;
    getCurrentTime(): number;
    getDuration(): number;
    getPlayerState(): number;
    getPlaylistIndex(): number;
    getPlaylist(): string[];
    getVideoData(): { title: string; author: string };
    seekTo(s: number, allowSeekAhead: boolean): void;
    destroy(): void;
  }
  const PlayerState: { PLAYING: number; PAUSED: number; ENDED: number; BUFFERING: number; UNSTARTED: number; CUED: number };
}

// Load YouTube IFrame API script một lần
function loadYTScript(): Promise<void> {
  return new Promise(resolve => {
    if (window.YT && window.YT.Player) { resolve(); return; }
    const existing = document.getElementById('yt-iframe-api');
    if (!existing) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
    window.onYouTubeIframeAPIReady = () => resolve();
  });
}

const YOUTUBE_PLAYER_ID = 'nth-yt-player-iframe';

export default function MusicPlayer() {
  const playerRef        = useRef<YT.Player | null>(null);
  const tickRef          = useRef<ReturnType<typeof setInterval> | null>(null);
  const animRef          = useRef<number>(0);
  const seekingRef       = useRef(false);
  const playlistLen      = useRef(0);
  const currentIdx       = useRef(0);
  const wasPlayingRef    = useRef(false);
  const initialMetaLoaded = useRef(false);

  const [ready,       setReady]       = useState(false);
  const [playing,     setPlaying]     = useState(false);
  const [shuffle,     setShuffle]     = useState(false);
  const [repeat,      setRepeat]      = useState(false);
  const [volume,      setVolume]      = useState<number>(() => {
    const s = localStorage.getItem('nth-volume');
    return s !== null ? Number(s) : 35;
  });
  const [muted,       setMuted]       = useState<boolean>(() =>
    localStorage.getItem('nth-muted') === 'true'
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);
  const [title,       setTitle]       = useState('Đang tải...');
  const [artist,      setArtist]      = useState('OST Nghịch Thủy Hàn');
  const [thumbnail,   setThumbnail]   = useState('');
  const [vizBars,     setVizBars]     = useState([0.2, 0.2, 0.2, 0.2, 0.2]);

  // Khởi tạo YouTube Player — đúng pattern của meodibui:
  // KHÔNG truyền list/listType vào constructor, gọi loadPlaylist() trong onReady
  useEffect(() => {
    let destroyed = false;
    loadYTScript().then(() => {
      if (destroyed) return;
      // Đảm bảo element tồn tại (dùng id string như meodibui)
      const el = document.getElementById(YOUTUBE_PLAYER_ID);
      if (!el) return;
      playerRef.current = new window.YT.Player(YOUTUBE_PLAYER_ID, {
        height: '200',
        width: '200',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (e: { target: YT.Player }) => {
            if (destroyed) return;
            // loadPlaylist sau khi ready — đây là cách đúng
            e.target.loadPlaylist({ listType: 'playlist', list: PLAYLIST_ID });
            e.target.stopVideo(); // load playlist nhưng chưa play
            // khôi phục volume/muted từ localStorage
            const savedVol = localStorage.getItem('nth-volume');
            const savedMuted = localStorage.getItem('nth-muted') === 'true';
            const vol = savedVol !== null ? Number(savedVol) : 35;
            e.target.setVolume(vol);
            if (savedMuted) e.target.mute();
            try {
              const pl = e.target.getPlaylist();
              if (pl) playlistLen.current = pl.length;
            } catch { /* ignore */ }
            setReady(true);
            setTimeout(() => { if (!destroyed) updateMeta(e.target); }, 800);
          },
          onStateChange: (e: { data: number; target: YT.Player }) => {
            if (destroyed) return;
            const S = window.YT.PlayerState;
            console.log('[YT] state:', e.data, '| wasPlaying:', wasPlayingRef.current);

            if (e.data === S.PLAYING) {
              wasPlayingRef.current = true;
              setPlaying(true);
              try { currentIdx.current = e.target.getPlaylistIndex(); } catch { /* ignore */ }
              updateMeta(e.target);
              startTick(e.target);

            } else if (e.data === S.PAUSED) {
              wasPlayingRef.current = false;
              setPlaying(false);
              stopTick();

            } else if (e.data === S.ENDED) {
              wasPlayingRef.current = false;
              setPlaying(false);
              stopTick();
              if (repeat) { e.target.seekTo(0, true); e.target.playVideo(); }
              else e.target.nextVideo();

            } else if (e.data === S.UNSTARTED || e.data === 5 /* CUED */) {
              // UNSTARTED(-1) hoặc CUED(5) sau nextVideo — nếu trước đó đang play thì tự play lại
              if (wasPlayingRef.current) {
                console.log('[YT] auto-play after track change');
                e.target.playVideo();
              }
              if (!initialMetaLoaded.current) {
                initialMetaLoaded.current = true;
                setTimeout(() => { if (!destroyed) updateMeta(e.target); }, 300);
              }
            }
          },
        },
      });
    });
    return () => {
      destroyed = true;
      stopTick();
      cancelAnimationFrame(animRef.current);
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Viz bars animation
  useEffect(() => {
    if (!playing) {
      cancelAnimationFrame(animRef.current);
      setVizBars([0.2, 0.2, 0.2, 0.2, 0.2]);
      return;
    }
    let t = 0;
    const loop = () => {
      t += 0.07;
      setVizBars([
        0.25 + 0.55 * Math.abs(Math.sin(t * 1.1)),
        0.25 + 0.55 * Math.abs(Math.sin(t * 1.7 + 0.5)),
        0.25 + 0.55 * Math.abs(Math.sin(t * 1.3 + 1.0)),
        0.25 + 0.55 * Math.abs(Math.sin(t * 1.9 + 1.5)),
        0.25 + 0.55 * Math.abs(Math.sin(t * 1.5 + 2.0)),
      ]);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [playing]);

  function updateMeta(p: YT.Player) {
    try {
      const data = p.getVideoData() as { title: string; author: string; video_id: string };
      if (data?.title) setTitle(data.title);
      if (data?.author) setArtist(data.author);
      if (data?.video_id) setThumbnail(`https://i.ytimg.com/vi/${data.video_id}/mqdefault.jpg`);
      const dur = p.getDuration();
      if (dur) setDuration(dur);
      try {
        currentIdx.current = p.getPlaylistIndex();
        const pl = p.getPlaylist();
        if (pl?.length) playlistLen.current = pl.length;
      } catch { /* ignore */ }
    } catch { /* ignore */ }
  }

  function startTick(p: YT.Player) {
    stopTick();
    tickRef.current = setInterval(() => {
      if (seekingRef.current) return;
      try {
        setCurrentTime(p.getCurrentTime());
        setDuration(p.getDuration());
      } catch { /* ignore */ }
    }, 500);
  }

  function stopTick() {
    if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null; }
  }

  const togglePlay = () => {
    if (!playerRef.current || !ready) return;
    const state = playerRef.current.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const goNext = () => {
    if (!playerRef.current || !ready) return;
    if (shuffle) {
      const len = playlistLen.current || 1;
      let next = Math.floor(Math.random() * len);
      if (len > 1 && next === currentIdx.current) next = (next + 1) % len;
      playerRef.current.playVideoAt(next);
    } else {
      playerRef.current.nextVideo();
    }
  };

  const goPrev = () => {
    if (!playerRef.current || !ready) return;
    try {
      const cur = playerRef.current.getCurrentTime();
      if (cur > 3) {
        playerRef.current.seekTo(0, true);
      } else {
        playerRef.current.previousVideo();
      }
    } catch { /* ignore */ }
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    setMuted(false);
    localStorage.setItem('nth-volume', String(v));
    localStorage.setItem('nth-muted', 'false');
    playerRef.current?.setVolume(v);
    try { playerRef.current?.unMute(); } catch { /* ignore */ }
  };

  const handleMute = () => {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume);
      setMuted(false);
      localStorage.setItem('nth-muted', 'false');
    } else {
      playerRef.current.mute();
      setMuted(true);
      localStorage.setItem('nth-muted', 'true');
    }
  };

  const handleRepeat = () => setRepeat(r => !r);
  const handleShuffle = () => {
    setShuffle(s => {
      // YouTube Player API có setShuffle nhưng không phải lúc nào cũng expose
      // ta chỉ toggle state, next/prev vẫn dùng nextVideo
      return !s;
    });
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const t = ratio * duration;
    seekingRef.current = true;
    setCurrentTime(t);
    playerRef.current.seekTo(t, true);
    setTimeout(() => { seekingRef.current = false; }, 300);
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  };

  const fillPct    = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volFillPct = muted ? 0 : volume;

  const SmBtn = ({ onClick, title, children, active }: { onClick: () => void; title: string; children: React.ReactNode; active?: boolean }) => (
    <button onClick={onClick} title={title}
      style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: active ? C.red : 'rgba(255,255,255,0.35)', transition: 'color 180ms' }}
      onMouseEnter={e => (e.currentTarget.style.color = C.redLight)}
      onMouseLeave={e => (e.currentTarget.style.color = active ? C.red : 'rgba(255,255,255,0.35)')}
    >{children}</button>
  );

  const MidBtn = ({ onClick, title, children }: { onClick: () => void; title: string; children: React.ReactNode }) => (
    <button onClick={onClick} title={title}
      style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,245,230,0.60)', transition: 'color 180ms' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,245,230,0.60)')}
    >{children}</button>
  );

  return (
    <div
      id="nth-music-player"
      style={{
        position: 'fixed',
        left: EDGE_GAP,
        bottom: EDGE_GAP + 44,
        zIndex: 200,
        width: 310,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        background: C.bg,
        backdropFilter: 'blur(20px) saturate(150%)',
        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
        border: `1px solid ${C.border}`,
        borderTop: `1px solid ${C.borderTop}`,
        boxShadow: `0 4px 28px rgba(0,0,0,0.80), 0 0 16px rgba(192,57,43,0.15)`,
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
      }}
    >
      {/* YouTube player ẩn — dùng id string như meodibui */}
      <div
        id={YOUTUBE_PLAYER_ID}
        style={{ position: 'absolute', top: -9999, left: -9999, width: 1, height: 1, pointerEvents: 'none' }}
      />

      {/* Album art / viz */}
      <div style={{
        flexShrink: 0, width: 54, height: 54,
        background: 'rgba(192,57,43,0.06)',
        border: `1px solid rgba(192,57,43,${playing ? '0.55' : '0.25'})`,
        clipPath: 'polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px)',
        overflow: 'hidden', position: 'relative',
        transition: 'border-color 300ms',
        boxShadow: playing ? `0 0 10px rgba(192,57,43,0.2)` : 'none',
      }}>
        {/* Thumbnail */}
        {thumbnail
          ? <img
              src={thumbnail}
              alt="thumbnail"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: playing ? 1 : 0.6, transition: 'opacity 300ms' }}
            />
          : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width={22} height={22} style={{ opacity: 0.3 }}>
                <path fill={C.red} d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
          )
        }
        {/* Viz bars overlay khi đang phát */}
        {playing && (
          <div style={{
            position: 'absolute', bottom: 5, left: 0, right: 0,
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            gap: 2, padding: '0 7px',
          }}>
            {vizBars.map((h, i) => (
              <div key={i} style={{
                width: 3, height: `${Math.round(h * 18)}px`,
                background: i === 2 ? '#fff' : 'rgba(255,255,255,0.7)',
                borderRadius: 1,
                transition: 'height 80ms ease',
                alignSelf: 'flex-end',
                boxShadow: '0 0 4px rgba(0,0,0,0.8)',
              }} />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>

        {/* Track info */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: '0.02em', fontFamily: 'var(--font-chinese, serif)' }}>
            {title}
          </div>
          <div style={{ fontSize: 10, color: C.textSub, fontStyle: 'italic', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {artist}
          </div>
        </div>

        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: 9, color: C.textSub, minWidth: 22, fontVariantNumeric: 'tabular-nums' }}>{fmt(currentTime)}</span>
          <div style={{ flex: 1, position: 'relative', height: 20, display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, height: 3, background: C.track, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${fillPct}%`, background: `linear-gradient(90deg, ${C.red}, ${C.redLight})` }} />
            </div>
            <input
              type="range"
              min={0} max={duration || 100} step={0.5}
              value={currentTime}
              onChange={e => {
                const t = Number(e.target.value);
                setCurrentTime(t);
                seekingRef.current = true;
                playerRef.current?.seekTo(t, true);
                setTimeout(() => { seekingRef.current = false; }, 300);
              }}
              style={{ position: 'absolute', left: 0, right: 0, width: '100%', opacity: 0, cursor: 'pointer', height: 20, margin: 0, padding: 0 }}
            />
          </div>
          <span style={{ fontSize: 9, color: C.textSub, minWidth: 22, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{fmt(duration)}</span>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <SmBtn onClick={handleShuffle} title="Ngẫu nhiên" active={shuffle}>
            <svg viewBox="0 0 24 24" width={13} height={13}><path fill="currentColor" d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" /></svg>
          </SmBtn>
          <MidBtn onClick={goPrev} title="Bài trước">
            <svg viewBox="0 0 24 24" width={15} height={15}><path fill="currentColor" d="M6 6h2v12H6zm3.5 6 8.5 6V6z" /></svg>
          </MidBtn>

          {/* Play/Pause */}
          <button onClick={togglePlay} title={playing ? 'Dừng' : 'Phát'}
            style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', background: ready ? C.red : 'rgba(192,57,43,0.2)', border: 'none', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)', cursor: ready ? 'pointer' : 'default', color: '#fff', boxShadow: ready ? `0 0 14px rgba(192,57,43,0.45)` : 'none', transition: 'background 180ms' }}
            onMouseEnter={e => ready && (e.currentTarget.style.background = C.redLight)}
            onMouseLeave={e => (e.currentTarget.style.background = ready ? C.red : 'rgba(192,57,43,0.2)')}
          >
            {!ready
              ? <svg viewBox="0 0 24 24" width={16} height={16} style={{ animation: 'spin 1s linear infinite' }}><path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" /></svg>
              : playing
                ? <svg viewBox="0 0 24 24" width={18} height={18}><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                : <svg viewBox="0 0 24 24" width={18} height={18}><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
            }
          </button>

          <MidBtn onClick={goNext} title="Bài tiếp">
            <svg viewBox="0 0 24 24" width={15} height={15}><path fill="currentColor" d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
          </MidBtn>
          <SmBtn onClick={handleRepeat} title="Lặp lại" active={repeat}>
            <svg viewBox="0 0 24 24" width={13} height={13}><path fill="currentColor" d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" /></svg>
          </SmBtn>
        </div>

        {/* Volume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <button onClick={handleMute} title="Tắt/Bật tiếng"
            style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,245,230,0.45)', flexShrink: 0 }}
          >
            {muted || volume === 0
              ? <svg viewBox="0 0 24 24" width={12} height={12}><path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
              : <svg viewBox="0 0 24 24" width={12} height={12}><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
            }
          </button>
          <div style={{ flex: 1, position: 'relative', height: 20, display: 'flex', alignItems: 'center' }}>
            {/* Track background */}
            <div style={{
              position: 'absolute', left: 0, right: 0, height: 3,
              background: C.track, pointerEvents: 'none',
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: `${volFillPct}%`,
                background: C.red,
              }} />
            </div>
            {/* Native range input — trong suốt, nằm trên track */}
            <input
              type="range"
              min={0} max={100} step={1}
              value={muted ? 0 : volume}
              onChange={e => handleVolumeChange(Number(e.target.value))}
              style={{
                position: 'absolute', left: 0, right: 0,
                width: '100%', opacity: 0, cursor: 'pointer',
                height: 20, margin: 0, padding: 0,
              }}
            />
          </div>
          <span style={{ fontSize: 9, color: C.textSub, minWidth: 18, textAlign: 'right' }}>{muted ? 0 : volume}</span>
        </div>
      </div>
    </div>
  );
}
