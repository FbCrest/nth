import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { thienPhuAll, ThienPhuItem, ThienPhuTab } from '../data/thien-phu';

// Highlight {text|color} → hỗ trợ nhiều màu: red, purple, yellow
function HighlightText({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          const content = part.slice(1, -1);
          const [textPart, color] = content.split('|');
          const colorClass = color === 'purple' ? 'text-purple-600' : 
                             color === 'yellow' ? 'text-yellow-500' : 
                             'text-red-600';
          return <span key={i} className={`${colorClass} font-bold`}>{textPart}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// Badge tag — 1 màu đỏ đồng nhất giống DataGrid modal
function Tag({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 9px',
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 4,
      background: 'rgba(239,68,68,0.1)',
      color: '#dc2626',
      border: '1px solid rgba(239,68,68,0.25)',
      letterSpacing: '0.03em',
    }}>
      {label}
    </span>
  );
}

// Square avatar icon
function HexAvatar({ item, selected, onClick }: {
  item: ThienPhuItem; selected: boolean; onClick: () => void;
}) {
  const GOLD = '#c9a84c';
  const GLOW = 'rgba(201,168,76,0.5)';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
    }}>
      <button
        onClick={onClick}
        title={item.name}
        style={{
          width: 72, height: 72,
          padding: 0, border: 'none', background: 'transparent',
          cursor: 'pointer', flexShrink: 0, outline: 'none',
        }}
      >
        <div style={{
          width: 72, height: 72,
          borderRadius: 0,
          overflow: 'hidden',
          border: selected ? `2px solid ${GOLD}` : '2px solid var(--border)',
          background: 'var(--bg-sunken)',
          transition: 'transform 160ms, filter 160ms, border-color 160ms',
          transform: selected ? 'scale(1.08)' : 'scale(1)',
          filter: selected ? `drop-shadow(0 0 8px ${GLOW})` : 'none',
        }}>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { (e.target as HTMLImageElement).style.opacity = '0.3'; }}
          />
        </div>
      </button>
      {/* Label below — outside the button, không bị clipped */}
      <div style={{
        fontSize: 12, fontWeight: selected ? 700 : 500,
        color: selected ? 'var(--text-1)' : 'var(--text-3)',
        whiteSpace: 'nowrap',
        transition: 'color 160ms, font-weight 160ms',
        textAlign: 'center',
      }}>
        {item.name}
      </div>
    </div>
  );
}

const TABS: ThienPhuTab[] = ['DPS', 'Tank', 'Buff'];

export default function ThienPhu() {
  const [activeTab, setActiveTab] = useState<ThienPhuTab>('DPS');
  const [selected, setSelected] = useState<ThienPhuItem>(thienPhuAll['DPS'][0]);

  const handleTabChange = (tab: ThienPhuTab) => {
    setActiveTab(tab);
    setSelected(thienPhuAll[tab][0]);
  };

  const items = thienPhuAll[activeTab];

  return (
    <div style={{ maxWidth: 940, margin: '0 auto', padding: '24px 20px 60px' }}>

      {/* ── Tabs ── */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {TABS.map(tab => {
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              style={{
                padding: '7px 22px',
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 6,
                border: `1px solid ${active ? 'rgba(239,68,68,0.5)' : 'var(--border)'}`,
                background: active ? 'rgba(239,68,68,0.1)' : 'var(--bg-card)',
                color: active ? '#dc2626' : 'var(--text-2)',
                cursor: 'pointer',
                transition: 'all 160ms',
                letterSpacing: '0.04em',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* ── Main layout ── */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* RIGHT — detail card (order: 2) */}
        <div style={{ flex: '1 1 340px', minWidth: 280, order: 2 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 18px',
                  background: 'var(--bg-sunken)',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 54, height: 54, borderRadius: 4,
                    overflow: 'hidden', border: '1px solid var(--border)',
                    flexShrink: 0, background: 'var(--bg-page)',
                  }}>
                    <img src={selected.imageUrl} alt={selected.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 18, fontWeight: 100,
                      color: 'var(--text-1)',
                      fontFamily: 'var(--font-skill)',
                      lineHeight: 1.3,
                    }}>
                      {selected.name}
                    </div>
                    <div style={{
                      fontSize: 13, color: 'var(--text-2)',
                      fontFamily: 'var(--font-chinese)',
                      marginBottom: 6,
                    }}>
                      {selected.nameZh}
                    </div>
                    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                      {selected.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div style={{ padding: '14px 18px 16px' }}>
                  <p style={{
                    fontSize: 14, color: 'var(--text-2)',
                    lineHeight: 1.8, margin: 0,
                  }}>
                    <HighlightText text={selected.description} />
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT — avatar grid (order: 1) */}
        <div style={{ flex: '0 0 auto', order: 1 }}>
          {/* Divider label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ height: 1, flex: 1, background: 'linear-gradient(to right, transparent, var(--border))' }} />
            <span style={{
              fontSize: 11, fontWeight: 800, color: 'var(--text-3)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              {activeTab}
            </span>
            <span style={{ height: 1, flex: 1, background: 'linear-gradient(to left, transparent, var(--border))' }} />
          </div>

          {/* 4×2 hex grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 110px)',
                gap: '20px 16px',
                justifyItems: 'center',
                alignItems: 'start',
              }}
            >
              {items.map(item => (
                <HexAvatar
                  key={item.id}
                  item={item}
                  selected={selected.id === item.id}
                  onClick={() => setSelected(item)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
