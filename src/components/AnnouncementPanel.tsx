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
  tag: 'Phiên Bản 4.0',
  date: '25/06/2026',
  content: `## Cập nhật trang chủ
- Cập nhật danh sách **nội công phiên bản 4.0** mới nhât
- Thêm trình chơi nhạc nền playlist **Nhạc Trung**
- Thêm menu **Web Dịch Video Douyin** và **Tool Quét & Dịch Màn Hình**

## Nội dung wiki
- Bổ sung kỹ năng môn phái **Thương Lan**
- Cập nhật hướng dẫn phó bản 12 người

---
Cảm ơn anh em đã đồng hành cùng wiki! 💙`,
};

function renderMarkdown(md: string) {
  const lines = md.split('\n');
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      result.push(
        <h3 key={i} style={{ fontWeight: 700, color: C.gold, fontSize: 11.5, margin: '10px 0 4px', paddingLeft: 8, borderLeft: `2px solid ${C.red}` }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      result.push(
        <h2 key={i} style={{ fontWeight: 700, color: C.gold, fontSize: 12, margin: '10px 0 4px', paddingLeft: 8, borderLeft: `2px solid ${C.red}` }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      result.push(
        <h1 key={i} style={{ fontWeight: 800, color: C.gold, fontSize: 13, margin: '10px 0 4px', paddingLeft: 8, borderLeft: `2px solid ${C.red}` }}>
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('- ')) {
      // thu thập tất cả dòng list liên tiếp
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      result.push(
        <ul key={`ul-${i}`} style={{ listStyle: 'none', padding: 0, margin: '2px 0 6px' }}>
          {items.map((it, j) => (
            <li key={j} style={{ display: 'flex', gap: 6, marginBottom: 3, alignItems: 'flex-start' }}>
              <span style={{ color: C.red, fontWeight: 900, fontSize: 11, lineHeight: 1.65, flexShrink: 0 }}>•</span>
              <span
                style={{ color: C.textMain, fontSize: 11.5, lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: it.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${C.gold};font-weight:700">$1</strong>`) }}
              />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() !== '') {
      const html = line.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${C.gold};font-weight:700">$1</strong>`);
      result.push(
        <p key={i} style={{ display: 'flex', gap: 6, marginBottom: 4, alignItems: 'flex-start' }}>
          <span style={{ color: C.red, fontWeight: 900, fontSize: 11, lineHeight: 1.65, flexShrink: 0 }}>•</span>
          <span style={{ color: C.textMain, fontSize: 11.5, lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: html }} />
        </p>
      );
    }
    i++;
  }
  return result;
}

export default function AnnouncementPanel() {
  const [collapsed, setCollapsed] = useState(false);
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
              fontFamily: 'FzGameBr, var(--font-skill, serif)',
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
              fontFamily: 'FzGameBr, var(--font-skill, serif)',
              lineHeight: 1,
            }}>
              THÔNG BÁO
            </span>
          </div>
          <span style={{ fontSize: 11, color: C.textSub, fontStyle: 'italic', whiteSpace: 'nowrap', lineHeight: 1 }}>
            {ANN.date}
          </span>
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
          <div className="nth-ann-md">
            {renderMarkdown(ANN.content.split('\n---\n')[0])}
          </div>
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
          dangerouslySetInnerHTML={{
            __html: (ANN.content.split('\n---\n')[1] ?? '')
              .replace(/\*\*(.+?)\*\*/g, `<strong style="color:${C.gold};font-weight:700">$1</strong>`)
              .replace(/([\u{1F300}-\u{1FAFF}]|[\u2600-\u27BF])/gu, '<span class="nth-heartbeat">$1</span>'),
          }}
        />
      </div>

      {/* ── Toggle button ── */}
      <button
        onClick={() => setCollapsed(c => !c)}
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
