/**
 * ytPlayer.ts — Vanilla JS YouTube player manager
 * Tách biệt hoàn toàn khỏi React để tránh re-render issues
 * Pattern giống meodibui-main/js/youtube.js
 */

const PLAYLIST_ID = 'PL5O5CYQ6VzT5AAwGxxK0AJNOG8NMXq6cN';

export type PlayerState = {
  playing: boolean;
  title: string;
  artist: string;
  thumbnail: string;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  ready: boolean;
};

type Listener = (state: PlayerState) => void;

// ── Singleton state ──
let _player: YT.Player | null = null;
let _ready = false;
let _progressTimer: ReturnType<typeof setInterval> | null = null;
let _listeners: Listener[] = [];

let _state: PlayerState = {
  playing: false,
  title: 'Đang tải...',
  artist: 'OST Nghịch Thủy Hàn',
  thumbnail: '',
  currentTime: 0,
  duration: 0,
  volume: Number(localStorage.getItem('nth-volume') ?? 35),
  muted: localStorage.getItem('nth-muted') === 'true',
  ready: false,
};

function emit() {
  _listeners.forEach(fn => fn({ ..._state }));
}

function updateMeta() {
  try {
    const data = (_player as any).getVideoData() as { title: string; author: string; video_id: string };
    if (data?.title)    _state.title     = data.title;
    if (data?.author)   _state.artist    = data.author;
    if (data?.video_id) _state.thumbnail = `https://i.ytimg.com/vi/${data.video_id}/mqdefault.jpg`;
    const dur = _player!.getDuration();
    if (dur) _state.duration = dur;
    emit();
  } catch { /* ignore */ }
}

function startProgress() {
  stopProgress();
  _progressTimer = setInterval(() => {
    try {
      _state.currentTime = _player!.getCurrentTime();
      _state.duration    = _player!.getDuration();
      emit();
    } catch { /* ignore */ }
  }, 500);
}

function stopProgress() {
  if (_progressTimer) { clearInterval(_progressTimer); _progressTimer = null; }
}

// ── Load YouTube API script ──
function loadScript(): Promise<void> {
  return new Promise(resolve => {
    if ((window as any).YT?.Player) { resolve(); return; }
    const existing = document.getElementById('yt-iframe-api');
    if (!existing) {
      const tag = document.createElement('script');
      tag.id  = 'yt-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
    (window as any).onYouTubeIframeAPIReady = () => resolve();
  });
}

// ── Init — gọi một lần khi component mount ──
export function initPlayer(elementId: string) {
  if (_player) return; // đã init rồi

  loadScript().then(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    // Đúng y hệt meodibui: CHỈ truyền events, không có playerVars/height/width
    _player = new (window as any).YT.Player(elementId, {
      events: {
        onReady: (e: any) => {
          _ready = true;
          _player = e.target;

          // load playlist sau khi ready, không autoplay
          e.target.loadPlaylist({ listType: 'playlist', list: PLAYLIST_ID });
          e.target.stopVideo();

          // restore volume
          const vol = Number(localStorage.getItem('nth-volume') ?? 35);
          const muted = localStorage.getItem('nth-muted') === 'true';
          e.target.setVolume(vol);
          if (muted) e.target.mute();

          _state.volume = vol;
          _state.muted  = muted;
          _state.ready  = true;
          emit();

          setTimeout(updateMeta, 800);
        },

        onStateChange: (e: any) => {
          const S = (window as any).YT.PlayerState;

          if (e.data === S.PLAYING) {
            _state.playing = true;
            updateMeta();
            startProgress();
            emit();

          } else if (e.data === S.PAUSED) {
            _state.playing = false;
            stopProgress();
            emit();

          } else if (e.data === S.ENDED) {
            _state.playing = false;
            stopProgress();
            // auto next
            try { e.target.nextVideo(); } catch { /* ignore */ }
            emit();

          } else if (e.data === S.UNSTARTED) {
            updateMeta();
            emit();
          }
        },
      },
    });
  });
}

// ── Controls — gọi trực tiếp trên _player ──
export function togglePlay() {
  if (!_player || !_ready) return;
  const S = (window as any).YT.PlayerState;
  const state = _player.getPlayerState();
  if (state === S.PLAYING) _player.pauseVideo();
  else _player.playVideo();
}

export function nextTrack() {
  if (!_player || !_ready) return;
  _player.nextVideo();
}

export function prevTrack() {
  if (!_player || !_ready) return;
  try {
    const cur = _player.getCurrentTime();
    if (cur > 3) _player.seekTo(0, true);
    else _player.previousVideo();
  } catch { /* ignore */ }
}

export function setVolume(v: number) {
  if (!_player) return;
  _player.setVolume(v);
  try { (_player as any).unMute(); } catch { /* ignore */ }
  _state.volume = v;
  _state.muted  = false;
  localStorage.setItem('nth-volume', String(v));
  localStorage.setItem('nth-muted', 'false');
  emit();
}

export function toggleMute() {
  if (!_player) return;
  if (_state.muted) {
    (_player as any).unMute();
    _player.setVolume(_state.volume);
    _state.muted = false;
    localStorage.setItem('nth-muted', 'false');
  } else {
    _player.mute();
    _state.muted = true;
    localStorage.setItem('nth-muted', 'true');
  }
  emit();
}

export function seekTo(t: number) {
  if (!_player) return;
  _player.seekTo(t, true);
  _state.currentTime = t;
  emit();
}

export function playVideoAt(index: number) {
  if (!_player || !_ready) return;
  (_player as any).playVideoAt(index);
}

export function getPlaylistLength(): number {
  try { return (_player as any).getPlaylist()?.length ?? 0; } catch { return 0; }
}

export function subscribe(fn: Listener): () => void {
  _listeners.push(fn);
  fn({ ..._state }); // emit current state ngay
  return () => { _listeners = _listeners.filter(l => l !== fn); };
}

export function getState(): PlayerState { return { ..._state }; }
