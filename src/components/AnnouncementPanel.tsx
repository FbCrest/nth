import { useState, useEffect, useRef } from 'react';

const EDGE_GAP = 20;
const FOOTER_H = 44;
const PANEL_GAP = 16;
const PANEL_HEIGHT = 360;
const PANEL_W = 310; // panel nội dung = đúng bằng width MusicPlayer
// toggle button 16px nằm ngoài → wrapper tổng = 326px

// ── Màu sắc cổ trang NTH Mobile ──
const C = {
  red:       '#c0392b',
  redLight:  '#e74c3c',
  redBorder: 'rgba(192,57,43,0.45)',
  redGlow:   'rgba(192,57,43,0.18)',
  redFaint:  'rgba(192,57,43,0.08)',
  gold:      '#d4a055',
  textMain:  'rgba(255,245,230,0.88)',
  textSub:   'rgba(255,235,210,0.55)',
  bg:        'rgba(8,3,3,0.55)',       // trong suốt hơn
  bgHeader:  'rgba(192,57,43,0.10)',
  sep:       'rgba(192,57,43,0.35)',
  bullet:    '#c0392b',
};

const ANN = {
  tag: 'CẬP NHẬT',
  events: [
    {
      date: '15/10/2026',
      category: 'NỘI DUNG WIKI',
      title: 'Bổ sung kỹ năng môn phái Huyết Hà',
      detail: 'Thêm danh sách kỹ năng, mô tả hiệu ứng và chỉ số cho phái Huyết Hà.',
    },
    {
      date: '26/07/2026',
      category: 'NỘI DUNG WIKI',
      title: 'Bổ sung kỹ năng môn phái Thương Lan',
      detail: 'Mở rộng dữ liệu kỹ năng và hiệu ứng cho phái Thương Lan.',
    },
    {
      date: '26/07/2026',
      category: 'PHÓ BẢN',
      title: 'Cập nhật hướng dẫn phó bản 12 người',
      detail: 'Bổ sung và chỉnh sửa nội dung hướng dẫn phó bản.',
    },
    {
      date: '26/07/2026',
      category: 'TRANG CHỦ',
      title: 'Cập nhật kỹ năng phái Triều Quang',
      detail: 'Bổ sung nội dung kỹ năng mới cho Triều Quang.',
    },
    {
      date: '26/07/2026',
      category: 'NỘI CÔNG · PHIÊN BẢN 4.0',
      title: 'Cập nhật danh sách nội công',
      detail: 'Bổ sung danh sách nội công phiên bản 4.0.',
    },
    {
      date: '26/07/2026',
      category: 'TRANG CHỦ',
      title: 'Thêm playlist Nhạc Trung',
      detail: 'Bổ sung trình phát nhạc nền playlist Nhạc Trung.',
    },
    {
      date: '26/07/2026',
      category: 'CÔNG CỤ',
      title: 'Thêm công cụ dịch và quét màn hình',
      detail: 'Bổ sung Web Dịch Video Douyin và Tool Quét & Dịch Màn Hình.',
    },
  ],
  footer: 'Cảm ơn anh em đã đồng hành cùng wiki! 💙',
};

function renderTimeline() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {ANN.events.map((event, index) => (
        <article key={`${event.date}-${event.title}`} style={{ display: 'grid', gridTemplateColumns: '58px minmax(0, 1fr)', gap: 8 }}>
          <time style={{ color: C.textSub, fontSize: 10, fontWeight: 700, lineHeight: 1.4, paddingTop: 2, whiteSpace: 'nowrap' }}>
            {event.date}
          </time>
          <div style={{ position: 'relative', borderLeft: `1px solid ${C.sep}`, padding: '0 0 12px 11px' }}>
            <span style={{ position: 'absolute', left: -4, top: 3, width: 7, height: 7, borderRadius: '50%', background: index === 0 ? C.redLight : C.gold, boxShadow: `0 0 8px ${C.redGlow}` }} />
            <div style={{ color: C.gold, fontSize: 9.5, fontWeight: 800, letterSpacing: '0.08em', lineHeight: 1.4, marginBottom: 2 }}>
              {event.category}
            </div>
            <div style={{ color: C.textMain, fontSize: 12.5, fontWeight: 700, lineHeight: 1.45, marginBottom: 2 }}>
              {event.title}
            </div>
            <p style={{ color: C.textSub, fontSize: 11.5, lineHeight: 1.5, margin: 0 }}>
              {event.detail}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function AnnouncementPanel() {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    // Lần đầu vào web (chưa có key) → hiện panel (false)
    // Các lần sau → đọc từ localStorage
    const saved = localStorage.getItem('nth-ann-collapsed');
    return saved === null ? false : saved === 'true';
  });
  const [panelBottom, setPanelBottom] = useState(FOOTER_H + EDGE_GAP + 120 + PANEL_GAP);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const player = document.getElementById('nth-music-player');
      if (player) {
        const h = player.getBoundingClientRect().height;
        setPanelBottom(FOOTER_H + EDGE_GAP + h + PANEL_GAP);
      }
    };
    measure();
    // thử lại sau 500ms để chắc player đã render
    const t = setTimeout(measure, 500);
    const ro = new ResizeObserver(measure);
    const player = document.getElementById('nth-music-player');
    if (player) ro.observe(player);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, []);

  const tagBg: Record<string, string> = {
    'CẬP NHẬT': C.red,
    'THÔNG BÁO': '#8b1a1a',
    'MỚI': '#2d6a2d',
  };

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      bottom: panelBottom,
      width: 310 + 16,  // panel 310px + toggle 16px
      height: PANEL_HEIGHT,
      zIndex: 200,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      transform: collapsed ? `translateX(-${PANEL_W}px)` : `translateX(${EDGE_GAP}px)`,
      transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1)',
    }}>

      {/* ── Panel nội dung ── */}
      <div style={{
        width: PANEL_W,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(8,3,3,0.55)',
        backdropFilter: 'blur(20px) saturate(150%)',
        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
        border: `1px solid ${C.redBorder}`,
        borderRight: 'none',
        boxShadow: `0 8px 32px rgba(0,0,0,0.85), 0 0 20px ${C.redGlow}`,
        // góc cắt cổ trang
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)',
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          padding: '0 12px',
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          background: C.bgHeader,
          borderBottom: `1px solid ${C.sep}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: '100%' }}>
            {/* Tag */}
            <span style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: '0.06em',
              color: '#fff',
              background: tagBg[ANN.tag] ?? C.red,
              padding: '0 12px 0 8px',
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
              whiteSpace: 'nowrap',
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
              fontFamily: 'var(--font-skill, sans-serif)',
              height: 24,
              display: 'inline-flex',
              alignItems: 'center',
            }}>
              {ANN.tag}
            </span>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: C.textSub,
              textTransform: 'uppercase',
              fontFamily: 'var(--font-skill, sans-serif)',
              lineHeight: 1,
            }}>
              THÔNG BÁO
            </span>
          </div>
        </div>

        {/* Separator */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${C.red}, transparent)`,
          margin: '0 12px',
          flexShrink: 0,
          opacity: 0.6,
        }} />

        {/* Body — scroll */}
        <div
          ref={bodyRef}
          className="nth-ann-body"
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '8px 12px 4px',
            lineHeight: 1.65,
            wordBreak: 'break-word',
          }}
        >
          {renderTimeline()}
        </div>

        {/* Closing — cố định phía dưới, không scroll */}
        <div style={{
          flexShrink: 0,
          borderTop: `1px solid rgba(192,57,43,0.3)`,
          padding: '7px 12px 9px',
          textAlign: 'center',
          fontSize: 11,
          color: C.gold,
          fontStyle: 'italic',
          letterSpacing: '0.03em',
        }}
        >
          {ANN.footer}
        </div>
      </div>

      {/* ── Toggle button ── */}
      <button
        onClick={() => setCollapsed(c => {
          const next = !c;
          localStorage.setItem('nth-ann-collapsed', String(next));
          return next;
        })}
        title={collapsed ? 'Mở thông báo' : 'Thu gọn'}
        style={{
          width: 16,
          height: 52,
          marginTop: 18,
          marginLeft: -1,
          flexShrink: 0,
          background: C.red,
          border: 'none',
          clipPath: 'polygon(0 0, 100% 4px, 100% calc(100% - 4px), 0 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          boxShadow: `3px 1px 8px rgba(0,0,0,0.5)`,
          transition: 'filter 180ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.25)')}
        onMouseLeave={e => (e.currentTarget.style.filter = '')}
      >
        <svg
          viewBox="0 0 24 24" width="10" height="10"
          style={{ transition: 'transform 280ms', transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    </div>
  );
}
