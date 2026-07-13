import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { supabase, type CoNghichTrangBiRow, type CoNghichBuffRow, type CoNghichQuanCoRow, type ChiSo } from '../lib/supabase';
import { quanCoData } from '../data/co-nghich-quan-co';
import { trangBiCoData } from '../data/co-nghich-trang-bi-co';
import { buffCoData } from '../data/co-nghich-buff-co';
import { buffKiemData } from '../data/co-nghich-buff-kiem';
import { coNghichIcons } from '../data/co-nghich-icons';

// ── Highlight {text|color} hoặc {icon:slug} để render icon inline ──
function HighlightText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <>
      {lines.map((line, li) => {
        // Pattern: {icon:slug} hoặc {text|color}
        const parts = line.split(/(\{[^}]+\})/g);
        return (
          <span key={li}>
            {li > 0 && <br />}
            {parts.map((part, i) => {
              if (part.startsWith('{') && part.endsWith('}')) {
                const content = part.slice(1, -1);
                // Check for icon syntax first: {icon:slug}
                if (content.startsWith('icon:')) {
                  const slug = content.slice(5);
                  const icon = coNghichIcons.find(ic => ic.slug === slug);
                  if (!icon) return <span key={i}></span>;
                  return <img key={i} src={icon.image_url} alt={icon.label} title={icon.label}
                    style={{ width: 20, height: 20, objectFit: 'contain', verticalAlign: 'middle', marginInline: 1, display: 'inline' }} />;
                }
                // existing color handling: {text|color}
                const [textPart, color] = content.split('|');
                const colorMap: Record<string, string> = {
                  red: '#dc2626', purple: '#7c3aed', yellow: '#d97706',
                  blue: '#2563eb', green: '#15803d',
                };
                const c = colorMap[color] ?? colorMap['red'];
                return <span key={i} style={{ color: c, fontWeight: 700 }}>{textPart}</span>;
              }
              return <span key={i}>{part}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}

// ── Màu accent ──
const ACCENT       = '#dc2626';
const ACCENT_LIGHT = 'rgba(239,68,68,0.10)';
const ACCENT_BORDER= 'rgba(239,68,68,0.50)';
const ACCENT_GLOW  = 'rgba(239,68,68,0.25)';

// ── Tabs danh mục trang bị ──
type TrangBiCat = 'Tất cả' | 'Tấn công' | 'Phòng thủ' | 'Đặc biệt';
const TRANG_BI_TABS: TrangBiCat[] = ['Tất cả', 'Tấn công', 'Phòng thủ', 'Đặc biệt'];

// ── Tabs độ hiếm tâm ngộ ──
type BuffRarity = 'Tất cả' | 'Xanh' | 'Tím' | 'Vàng';
const RARITY_TABS: { key: BuffRarity; color: string; bg: string; border: string }[] = [
  { key: 'Tất cả', color: ACCENT,    bg: ACCENT_LIGHT,            border: ACCENT_BORDER            },
  { key: 'Xanh',   color: '#1d4ed8', bg: 'rgba(29,78,216,0.10)',  border: 'rgba(29,78,216,0.45)'   },
  { key: 'Tím',    color: '#7c3aed', bg: 'rgba(124,58,237,0.10)', border: 'rgba(124,58,237,0.45)'  },
  { key: 'Vàng',   color: '#b45309', bg: 'rgba(180,83,9,0.10)',   border: 'rgba(180,83,9,0.45)'    },
];

const rarityColor = (r: string) => {
  if (r === 'Xanh') return '#1d4ed8';
  if (r === 'Tím')  return '#7c3aed';
  if (r === 'Vàng') return '#b45309';
  return ACCENT;
};

// ── Spinner ──
function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '48px 0' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: ACCENT }} />
    </div>
  );
}

// ── Icon button 128×128 ──
function ItemIcon({ imageUrl, name, isSelected, onClick }: {
  imageUrl: string | null; name: string; isSelected: boolean; onClick: () => void;
  selectedColor?: string; selectedGlow?: string;
}) {
  return (
    <button onClick={onClick} style={{
      width: 128, height: 128, padding: 0,
      border: 'none',
      borderRadius: 0, overflow: 'hidden', cursor: 'pointer',
      background: 'var(--bg-sunken)',
      flexShrink: 0,
    }}>
      {imageUrl
        ? <img src={imageUrl} alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
          />
        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, opacity: 0.15 }}>⚔️</div>
      }
    </button>
  );
}

// ── Panel header: ảnh + tên + tên Hán ──
function PanelHeader({ imageUrl, name, nameZh, badge, badgeColor }: {
  imageUrl: string | null; name: string; nameZh: string | null;
  badge?: string; badgeColor?: string;
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px 16px', background: 'var(--bg-sunken)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ width: 72, height: 72, flexShrink: 0, overflow: 'hidden', background: '#1a1a1a', border: '1px solid var(--border)' }}>
        {imageUrl
          ? <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, opacity: 0.15 }}>⚔️</div>
        }
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 400, color: 'var(--text-1)', fontFamily: 'var(--font-skill, inherit)', lineHeight: 1.4, marginBottom: 4 }}>
          {name}
        </div>
        {nameZh && (
          <div style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-chinese, serif)', letterSpacing: '0.05em', marginBottom: badge ? 6 : 0 }}>
            {nameZh}
          </div>
        )}
        {badge && badgeColor && (
          <span style={{
            fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
            color: badgeColor, background: `${badgeColor}18`, border: `1px solid ${badgeColor}55`,
          }}>
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Tab Trang Bị ──
function TrangBiTab() {
  const [items] = useState(trangBiCoData);
  const [activeCat, setActiveCat] = useState<TrangBiCat>('Tất cả');
  const [selected, setSelected] = useState<typeof trangBiCoData[0] | null>(null);
  const loading = false;

  const filtered = activeCat === 'Tất cả' ? items : items.filter(i => i.danh_muc === activeCat);

  // Parse hieu_qua: newline-separated "Tên: +giá trị"
  const parseEffects = (raw: string | null): { label: string; value: string }[] => {
    if (!raw) return [];
    return raw.split('\n').filter(Boolean).map(line => {
      const idx = line.lastIndexOf(':');
      if (idx === -1) return { label: line.trim(), value: '' };
      return { label: line.slice(0, idx).trim(), value: line.slice(idx + 1).trim() };
    });
  };

  return (
    <div style={{ padding: '16px 0 0' }}>
      {/* Category tabs — căn theo grid */}
      <div style={{ width: 1228, maxWidth: 1228, margin: '0 auto', display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
        {TRANG_BI_TABS.map(tab => {
          const isActive = activeCat === tab;
          return (
            <button key={tab} onClick={() => { setActiveCat(tab); setSelected(null); }}
              style={{
                padding: '6px 16px', fontSize: 13, fontWeight: 700,
                color: isActive ? '#fff' : ACCENT,
                background: isActive ? ACCENT : ACCENT_LIGHT,
                border: `1px solid ${ACCENT_BORDER}`,
                borderRadius: 6, cursor: 'pointer', transition: 'all 160ms',
                boxShadow: isActive ? `0 0 8px ${ACCENT_GLOW}` : 'none',
              }}
            >{tab}</button>
          );
        })}
      </div>

      {loading ? <Spinner /> : (
        <div style={{ width: 1228, maxWidth: 1228, margin: '0 auto', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          {/* Grid icon — 6×128px cố định */}
          <div style={{ flexShrink: 0, width: 808 }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeCat}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 128px)', gap: 8 }}
              >
                {filtered.map(item => (
                  <ItemIcon key={item.id} imageUrl={item.image_url} name={item.ten}
                    isSelected={selected?.id === item.id}
                    onClick={() => setSelected(p => p?.id === item.id ? null : item)} />
                ))}
              </motion.div>
            </AnimatePresence>
            {filtered.length === 0 && !loading && (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-3)' }}>Chưa có dữ liệu</div>
            )}
          </div>

          {/* Detail panel — TrangBi: chiếm phần còn lại = 300px */}
          <div style={{ flex: 1, minWidth: 0, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden', position: 'sticky', top: 16, alignSelf: 'flex-start' }}>
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div key={selected.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                  <PanelHeader imageUrl={selected.image_url} name={selected.ten} nameZh={selected.ten_zh} />
                  <div style={{ padding: '12px 16px' }}>
                    {/* Thuộc Tính */}
                    {selected.hieu_qua && (
                      <>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-1)', marginBottom: 10 }}>Thuộc Tính</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 12 }}>
                          {parseEffects(selected.hieu_qua).map((eff, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6, fontSize: 13.5, lineHeight: 1.7 }}>
                              <span style={{ color: 'var(--text-1)' }}><HighlightText text={eff.label} />{eff.value ? ':' : ''}</span>
                              {eff.value && <span style={{ color: '#dc2626', fontWeight: 700 }}><HighlightText text={eff.value} /></span>}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {/* Hiệu Ứng */}
                    {(selected as any).dac_hieu && (
                      <>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-1)', marginBottom: 10 }}>Hiệu Ứng</div>
                        <div style={{ fontSize: 13.5, color: 'var(--text-1)', lineHeight: 1.75 }}>
                          <HighlightText text={(selected as any).dac_hieu} />
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 180, gap: 8, padding: 20 }}>
                  <span style={{ fontSize: 36, opacity: 0.12 }}>⚔️</span>
                  <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', margin: 0 }}>Chọn một trang bị để xem chi tiết</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tab Tâm Ngộ ──
function TamNgoTab() {
  const [items] = useState(buffCoData);
  const [activeRarity, setActiveRarity] = useState<BuffRarity>('Tất cả');
  const [selected, setSelected] = useState<typeof buffCoData[0] | null>(null);
  const loading = false;

  const filtered = activeRarity === 'Tất cả' ? items : items.filter(b => b.do_hiem === activeRarity);

  return (
    <div style={{ padding: '16px 0 0' }}>
      {/* Rarity tabs — căn theo grid */}
      <div style={{ width: 1228, maxWidth: 1228, margin: '0 auto', display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
        {RARITY_TABS.map(tab => {
          const isActive = activeRarity === tab.key;
          return (
            <button key={tab.key} onClick={() => { setActiveRarity(tab.key); setSelected(null); }}
              style={{
                padding: '6px 16px', fontSize: 13, fontWeight: 700,
                color: isActive ? '#fff' : tab.color,
                background: isActive ? tab.color : tab.bg,
                border: `1px solid ${tab.border}`,
                borderRadius: 6, cursor: 'pointer', transition: 'all 160ms',
                boxShadow: isActive ? `0 0 8px ${tab.color}40` : 'none',
              }}
            >{tab.key}</button>
          );
        })}
      </div>

      {loading ? <Spinner /> : (
        <div style={{ width: 1228, maxWidth: 1228, margin: '0 auto', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          {/* Grid icon — 6×128px cố định */}
          <div style={{ flexShrink: 0, width: 808 }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeRarity}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 128px)', gap: 8 }}
              >
                {filtered.map(item => (
                  <ItemIcon key={item.id} imageUrl={item.image_url} name={item.ten}
                    isSelected={selected?.id === item.id}
                    onClick={() => setSelected(p => p?.id === item.id ? null : item)} />
                ))}
              </motion.div>
            </AnimatePresence>
            {filtered.length === 0 && !loading && (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-3)' }}>Chưa có dữ liệu</div>
            )}
          </div>

          {/* Detail panel — TamNgo: chiếm phần còn lại = 300px */}
          <div style={{ flex: 1, minWidth: 0, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden', position: 'sticky', top: 16, alignSelf: 'flex-start' }}>
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div key={selected.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                  <PanelHeader
                    imageUrl={selected.image_url} name={selected.ten} nameZh={selected.ten_zh}
                    badge={selected.do_hiem ?? undefined} badgeColor={rarityColor(selected.do_hiem ?? '')}
                  />
                  <div style={{ padding: '12px 16px' }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>Hiệu Quả</div>
                    <div style={{ fontSize: 13.5, color: 'var(--text-1)', lineHeight: 1.75 }}>
                      <HighlightText text={selected.mo_ta ?? ''} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 180, gap: 8, padding: 20 }}>
                  <span style={{ fontSize: 36, opacity: 0.12 }}>✦</span>
                  <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', margin: 0 }}>Chọn một tâm ngộ để xem chi tiết</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Scroll box kỹ năng với indicator mũi tên ──
function KyNangScrollBox({ text }: { text: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', checkScroll); ro.disconnect(); };
  }, [text]);

  return (
    <div style={{ position: 'relative', borderRadius: 10, border: '1px solid var(--border)', backgroundColor: 'var(--bg-sunken)' }}>
      <div ref={scrollRef} className="custom-scrollbar"
        style={{ padding: '12px 14px', overflowY: 'auto', maxHeight: 340, fontSize: 13.5, color: 'var(--text-1)', lineHeight: 1.8 }}>
        <HighlightText text={text} />
      </div>
      <AnimatePresence>
        {canScrollDown && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center',
              paddingBottom: 4, paddingTop: 28, borderRadius: '0 0 10px 10px',
              background: 'linear-gradient(to bottom, transparent, var(--bg-sunken))',
              pointerEvents: 'none' }}>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ChevronDown size={14} style={{ color: 'var(--text-3)', opacity: 0.35, marginBottom: -8 }} />
              <ChevronDown size={16} style={{ color: 'var(--text-3)', opacity: 0.6, marginBottom: -8 }} />
              <ChevronDown size={18} style={{ color: 'var(--text-3)', opacity: 1 }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Tab Quân Cờ ──

// Màu icon chỉ số
const CHI_SO_ICONS: { key: keyof ChiSo; label: string; color: string }[] = [
  { key: 'khi_huyet',  label: 'Khí Huyết',  color: '#dc2626' },
  { key: 'noi_luc',   label: 'Nội Lực',     color: '#2563eb' },
  { key: 'tan_cong',  label: 'Tấn Công',    color: '#d97706' },
  { key: 'phong_thu', label: 'Phòng Thủ',   color: '#7c3aed' },
  { key: 'toc_do',    label: 'Tốc Độ',      color: '#15803d' },
];

// Liên kết phe (cố định)
const LIEN_KET_PHE = [
  { ten: 'Bạch Đế Thành',        slug: 'bach-de-thanh'        },
  { ten: 'Bích Huyết Doanh',     slug: 'bich-huyet-doanh'     },
  { ten: 'Kính Thiên Các',       slug: 'kinh-thien-cac'       },
  { ten: 'Ma Thiên',             slug: 'ma-thien'             },
  { ten: 'Minh Chiêu Hầu',       slug: 'minh-chieu-hau'       },
  { ten: 'Minh Uyên',            slug: 'minh-uyen'            },
  { ten: 'Phượng Thành',         slug: 'phuong-thanh'         },
  { ten: 'Sơ Thiệp Giang Hồ',    slug: 'so-thiep-giang-ho'    },
  { ten: 'Thiên Hạ Song Thế',    slug: 'thien-ha-song-the'    },
  { ten: 'Tiểu Sủng Liên Manh',  slug: 'tieu-sung-lien-manh'  },
  { ten: 'Võ Lâm Phong Vân Lục', slug: 'vo-lam-phong-van-luc' },
];

// Liên kết phái (cố định)
const LIEN_KET_PHAI = [
  { ten: 'Chiến Binh', slug: 'chien-binh' },
  { ten: 'Hỗ Trợ',    slug: 'ho-tro'     },
  { ten: 'Kiếm Sĩ',   slug: 'kiem-si'    },
  { ten: 'Lực Sĩ',    slug: 'luc-si'     },
  { ten: 'Mưu Sĩ',    slug: 'muu-si'     },
  { ten: 'Phòng Thủ', slug: 'phong-thu'  },
  { ten: 'Sát Thủ',   slug: 'sat-thu'    },
  { ten: 'Tiên Phong',slug: 'tien-phong' },
  { ten: 'Trị Liệu',  slug: 'Tri-lieu'   },
  { ten: 'Trọng Minh',slug: 'trong-minh' },
  { ten: 'Xạ Thủ',    slug: 'xa-thu'     },
];

// ── Màu theo loại quân cờ ──
const LOAI_COLOR_MAP: Record<string, { color: string; bg: string; border: string; iconSlug?: string }> = {
  'Chiến Binh Toàn Năng': { color: '#dc2626', bg: 'rgba(220,38,38,0.10)', border: 'rgba(220,38,38,0.35)' },
  'Đấu Sĩ Toàn Năng':    { color: '#2563eb', bg: 'rgba(37,99,235,0.10)', border: 'rgba(37,99,235,0.35)' },
};
const DEFAULT_LOAI_COLOR: { color: string; bg: string; border: string; iconSlug?: string } = { color: '#7c3aed', bg: 'rgba(124,58,237,0.10)', border: 'rgba(124,58,237,0.35)' };
function getLoaiStyle(loai: string) {
  return LOAI_COLOR_MAP[loai] ?? DEFAULT_LOAI_COLOR;
}

function QuanCoModal({ item, onClose }: { item: typeof quanCoData[0]; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.95, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 12 }}
        transition={{ duration: 0.2 }}
        className="border shadow-2xl w-full"
        style={{ maxWidth: 960, maxHeight: '96vh', overflowY: 'auto', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', overflow: 'hidden', borderRadius: 16 }}
        onClick={e => e.stopPropagation()}>
        {/* Khu vực 1: Tên + xu + tags */}
        <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-sunken)', display: 'flex', alignItems: 'stretch', position: 'relative', maxHeight: 120 }}>
          {item.image_url && (
            <div style={{ width: 220, flexShrink: 0, overflow: 'hidden', background: '#1a1a1a', borderRadius: '16px 0 0 0' }}>
              <img src={item.image_url} alt={item.ten} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ flex: 1, padding: '20px 24px 16px' }}>
            {/* Tên tiếng Việt + giá vàng cùng hàng */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}>
              <span style={{ fontSize: 20, fontWeight: 400, color: 'var(--text-1)', fontFamily: 'var(--font-skill)' }}>{item.ten}</span>
              {item.gia_xu && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <img src="/images/co-nghich-thuy-han/icon-vang.png" alt="vàng" style={{ width: 20, height: 20, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  <span style={{ fontSize: 14, color: '#d97706', fontWeight: 700 }}>{item.gia_xu}</span>
                </div>
              )}
            </div>
            {/* Tên tiếng Trung */}
            {item.ten_zh && (
              <div style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', marginBottom: 10 }}>
                {item.ten_zh}
              </div>
            )}
            {/* Loại + Tags cùng 1 hàng: loại bên trái, tags canh phải */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, minHeight: 26 }}>
              <div style={{ flexShrink: 0 }}>
                {item.loai && (() => { const s = getLoaiStyle(item.loai); const ic = s.iconSlug ? coNghichIcons.find(i => i.slug === s.iconSlug) : null; return (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, padding: ic ? '2px 10px 2px 5px' : '2px 10px', borderRadius: 4, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                    {ic && <img src={ic.image_url} alt={ic.label} style={{ width: 20, height: 20, objectFit: 'contain' }} />}
                    {item.loai}
                  </span>
                ); })()}
              </div>
              {item.tags && item.tags.length > 0 && (
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {item.tags.map((tag, i) => {
                    const icon = coNghichIcons.find(ic => ic.label === tag);
                    return (
                      <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, padding: '2px 8px 2px 5px', borderRadius: 4, background: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.25)' }}>
                        {icon && <img src={icon.image_url} alt={icon.label} style={{ width: 22, height: 22, objectFit: 'contain' }} />}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <button onClick={onClose} style={{ color: 'var(--text-3)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, padding: 4, position: 'absolute', top: 12, right: 12 }}>×</button>
        </div>
        <div style={{ padding: '10px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Khu vực 2: Liên kết phe + phái — cùng 1 hàng */}
          {((item.lien_ket_phe && item.lien_ket_phe.length > 0) || (item.lien_ket_phai && item.lien_ket_phai.length > 0)) && (
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              {item.lien_ket_phe && item.lien_ket_phe.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', flexShrink: 0 }}>Liên kết phe:</span>
                  {item.lien_ket_phe.map(slug => {
                    const info = LIEN_KET_PHE.find(p => p.slug === slug);
                    if (!info) return null;
                    return (
                      <div key={slug} title={info.ten} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 8px 2px 4px', borderRadius: 20, background: 'var(--bg-sunken)', border: '1px solid var(--border)' }}>
                        <img src={`/images/co-nghich-thuy-han/lien-ket-phe/${slug}.png`} alt={info.ten} style={{ width: 32, height: 32, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>{info.ten}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {item.lien_ket_phe && item.lien_ket_phe.length > 0 && item.lien_ket_phai && item.lien_ket_phai.length > 0 && (
                <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--border)', flexShrink: 0 }} />
              )}
              {item.lien_ket_phai && item.lien_ket_phai.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', flexShrink: 0 }}>Liên kết phái:</span>
                  {item.lien_ket_phai.map(slug => {
                    const info = LIEN_KET_PHAI.find(p => p.slug === slug);
                    if (!info) return null;
                    return (
                      <div key={slug} title={info.ten} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 8px 2px 4px', borderRadius: 20, background: 'var(--bg-sunken)', border: '1px solid var(--border)' }}>
                        <img src={`/images/co-nghich-thuy-han/lien-ket-phai/${slug}.png`} alt={info.ten} style={{ width: 32, height: 32, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>{info.ten}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {/* Khu vực 3: Kỹ năng */}
          {item.ky_nang_ten && (
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8 }}>
              {/* Ảnh + label + tên */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                {item.ky_nang_icon && (
                  <div style={{ width: 52, height: 52, flexShrink: 0, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg-sunken)' }}>
                    <img src={item.ky_nang_icon} alt={item.ky_nang_ten} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Kỹ Năng</div>
                  <div style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-1)', fontFamily: 'var(--font-skill)' }}>{item.ky_nang_ten}</div>
                </div>
              </div>
              {/* Mô tả scroll box */}
              {item.ky_nang_mo_ta && <KyNangScrollBox text={item.ky_nang_mo_ta} />}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function QuanCoTab() {
  const [items, setItems] = useState(quanCoData);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<typeof quanCoData[0] | null>(null);
  const [goldFilter, setGoldFilter] = useState<number | null>(null); // null = tất cả

  useEffect(() => { setItems(quanCoData); }, []);

  const filtered = goldFilter === null ? items : items.filter(i => i.gia_xu === goldFilter);

  const GOLD_TABS: { label: string; value: number | null }[] = [
    { label: 'Tất cả', value: null },
    { label: '5', value: 5 },
    { label: '4', value: 4 },
    { label: '3', value: 3 },
    { label: '2', value: 2 },
    { label: '1', value: 1 },
  ];

  const ICON_VANG = '/images/co-nghich-thuy-han/icon-vang.png';

  return (
    <div style={{ padding: '16px 0 0' }}>
      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 16, borderBottom: '1px solid var(--border)' }}>
        {GOLD_TABS.map(tab => {
          const isActive = goldFilter === tab.value;
          return (
            <button key={String(tab.value)} onClick={() => setGoldFilter(tab.value)}
              style={{
                padding: '6px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                background: 'transparent', border: 'none',
                color: isActive ? ACCENT : 'var(--text-2)',
                borderBottom: isActive ? `2px solid ${ACCENT}` : '2px solid transparent',
                marginBottom: -1, transition: 'all 140ms',
                display: 'flex', alignItems: 'center', gap: 4,
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = ACCENT; }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)'; }}
            >
              {tab.label}
              {tab.value !== null && (
                <img src={ICON_VANG} alt="vàng" style={{ width: 20, height: 20, objectFit: 'contain', display: 'block' }} />
              )}
            </button>
          );
        })}
      </div>

      {loading ? <Spinner /> : filtered.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', gap: 12 }}>
          <span style={{ fontSize: 40, opacity: 0.12 }}>♟️</span>
          <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Không có quân cờ nào</p>
        </div>
      ) : (
        <motion.div key={String(goldFilter)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {filtered.map(item => (
            <button key={item.id} onClick={() => setSelected(item)}
              style={{
                padding: 0, border: 'none', borderRadius: 10,
                overflow: 'visible',
                cursor: 'pointer',
                background: 'var(--bg-sunken)',
                display: 'flex', flexDirection: 'column', width: '100%',
                position: 'relative',
              }}
              onMouseEnter={e => {
                const img = (e.currentTarget as HTMLElement).querySelector('img.card-img') as HTMLImageElement;
                if (img) img.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={e => {
                const img = (e.currentTarget as HTMLElement).querySelector('img.card-img') as HTMLImageElement;
                if (img) img.style.transform = 'scale(1)';
              }}>
              <div style={{ position: 'relative', height: 200, width: '100%', flexShrink: 0, overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                {item.image_url
                  ? <img className="card-img" src={item.image_url} alt={item.ten}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.4s ease' }} />
                  : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, opacity: 0.1 }}>♟️</div>
                }
                {/* Tag icons overlay — góc dưới phải ảnh */}
                {item.tags && item.tags.length > 0 && (
                  <div style={{
                    position: 'absolute', bottom: 10, right: 10,
                    display: 'flex', gap: 6,
                    background: 'rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: 8,
                    padding: '5px 7px',
                  }}>
                    {item.tags.map((tag, i) => {
                      const icon = coNghichIcons.find(ic => ic.label === tag);
                      if (!icon) return null;
                      return (
                        <img key={i} src={icon.image_url} alt={icon.label}
                          style={{ width: 28, height: 28, objectFit: 'contain', transition: 'transform 0.4s ease' }}
                          className="card-img" />
                      );
                    })}
                  </div>
                )}
              </div>
              {/* Tên quân cờ */}
              <div style={{ padding: '6px 10px 8px', textAlign: 'center', fontSize: 26, fontWeight: 400, color: 'var(--text-1)', fontFamily: 'var(--font-skill)', letterSpacing: '0.02em', lineHeight: 1.3 }}>
                {item.ten}
              </div>
            </button>
          ))}
        </motion.div>
      )}
      <AnimatePresence>
        {selected && <QuanCoModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}

// ── Tab Buff Kiếm — không có filter, tên hiển thị dưới ảnh ──
const BUFF_KIEM_HIEM_MAP: Record<string, { label: string; color: string; bg: string; border: string }> = {
  'Truyền Thuyết':      { label: 'Truyền Thuyết',      color: '#b45309', bg: 'rgba(180,83,9,0.15)',    border: 'rgba(180,83,9,0.5)'    },
  'Cái Thế Tuyệt Luân': { label: 'Cái Thế Tuyệt Luân', color: '#7c3aed', bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.5)'  },
  'Thiên Hạ Vô Song':   { label: 'Thiên Hạ Vô Song',   color: '#dc2626', bg: 'rgba(220,38,38,0.15)',   border: 'rgba(220,38,38,0.5)'   },
};

function BuffKiemTab() {
  const [items] = useState(buffKiemData);
  const [selected, setSelected] = useState<typeof buffKiemData[0] | null>(null);

  return (
    <div style={{ padding: '16px 0 0' }}>
      {items.length === 0 ? (
        <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--text-3)', fontSize: 13 }}>Chưa có dữ liệu</div>
      ) : (
        <div style={{ width: 1228, maxWidth: 1228, margin: '0 auto', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          {/* Grid icon + tên */}
          <div style={{ flexShrink: 0 }}>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 128px)', gap: 8 }}>
              {items.map(item => (
                <button key={item.id} onClick={() => setSelected(p => p?.id === item.id ? null : item)}
                  style={{ padding: 0, border: 'none', borderRadius: 0, overflow: 'hidden', cursor: 'pointer',
                    background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  {/* Ảnh full, không crop */}
                  <div style={{ width: 128, background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    {item.image_url
                      ? <img src={item.image_url} alt={item.ten}
                          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain',
                            transition: 'transform 0.3s ease' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }} />
                      : <div style={{ width: 128, height: 128, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, opacity: 0.1 }}>⚔️</div>
                    }
                    {/* Tag độ hiếm — góc trên trái */}
                    {item.do_hiem && BUFF_KIEM_HIEM_MAP[item.do_hiem] && (() => {
                      const h = BUFF_KIEM_HIEM_MAP[item.do_hiem!];
                      return (
                        <div style={{ position: 'absolute', top: 4, left: 4,
                          fontSize: 11, fontWeight: 800, padding: '3px 7px', borderRadius: 4,
                          background: h.bg, color: h.color, border: `1px solid ${h.border}`,
                          letterSpacing: '0.02em', lineHeight: 1.3,
                          backdropFilter: 'blur(4px)',
                        }}>
                          {h.label}
                        </div>
                      );
                    })()}
                  </div>
                  {/* Tên bên dưới ảnh */}
                  <div style={{ fontSize: 22, fontWeight: 400, color: 'var(--text-1)',
                    fontFamily: 'var(--font-skill)', textAlign: 'center', lineHeight: 1.4,
                    padding: '4px 4px 4px', width: '100%',
                    whiteSpace: 'nowrap',
                    marginTop: 4 }}>
                    {item.ten}
                  </div>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Panel chi tiết */}
          <div style={{ flex: 1, minWidth: 0, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden', position: 'sticky', top: 16, alignSelf: 'flex-start' }}>
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div key={selected.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                  <PanelHeader imageUrl={selected.image_url} name={selected.ten} nameZh={selected.ten_zh}
                    badge={selected.do_hiem && BUFF_KIEM_HIEM_MAP[selected.do_hiem] ? BUFF_KIEM_HIEM_MAP[selected.do_hiem].label : undefined}
                    badgeColor={selected.do_hiem && BUFF_KIEM_HIEM_MAP[selected.do_hiem] ? BUFF_KIEM_HIEM_MAP[selected.do_hiem].color : undefined}
                  />
                  <div style={{ padding: '12px 16px' }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>Hiệu Quả</div>
                    <div style={{ fontSize: 13.5, color: 'var(--text-1)', lineHeight: 1.75 }}>
                      <HighlightText text={selected.mo_ta ?? ''} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 180, gap: 8, padding: 20 }}>
                  <span style={{ fontSize: 36, opacity: 0.12 }}>⚔️</span>
                  <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', margin: 0 }}>Chọn một buff kiếm để xem chi tiết</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Coming Soon ──
function ComingSoon({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', gap: 12 }}>
      <div style={{ fontSize: 48, opacity: 0.12, filter: 'grayscale(1)', fontFamily: 'var(--font-skill, serif)' }}>逆水寒</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-3)', letterSpacing: '0.1em' }}>Coming Soon</div>
      <div style={{ fontSize: 13, color: 'var(--text-3)', opacity: 0.7 }}>{label} đang được cập nhật</div>
    </div>
  );
}

// ── Main tabs ──
const MAIN_TABS = [
  { key: 'quan-co',   label: 'Quân Cờ'   },
  { key: 'trang-bi',  label: 'Trang Bị'  },
  { key: 'tam-ngo',   label: 'Tâm Ngộ'   },
  { key: 'buff-kiem', label: 'Buff Kiếm'  },
] as const;
type MainTab = typeof MAIN_TABS[number]['key'];

export default function CoNghichThuyHan() {
  const [mainTab, setMainTab] = useState<MainTab>('quan-co');

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 20px 40px' }}>
      {/* Main tab bar */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '2px solid var(--border)' }}>
        {MAIN_TABS.map(tab => {
          const isActive = mainTab === tab.key;
          return (
            <button key={tab.key} onClick={() => setMainTab(tab.key)}
              style={{
                padding: '9px 22px', fontSize: 14, fontWeight: 700,
                color: isActive ? ACCENT : 'var(--text-2)',
                background: 'transparent', border: 'none',
                borderBottom: isActive ? `2px solid ${ACCENT}` : '2px solid transparent',
                marginBottom: -2, cursor: 'pointer', transition: 'all 160ms',
                boxShadow: isActive ? `0 2px 8px ${ACCENT_GLOW}` : 'none',
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = ACCENT; }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)'; }}
            >{tab.label}</button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={mainTab}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}>
          {mainTab === 'trang-bi'  && <TrangBiTab />}
          {mainTab === 'quan-co'   && <QuanCoTab />}
          {mainTab === 'tam-ngo'   && <TamNgoTab />}
          {mainTab === 'buff-kiem' && <BuffKiemTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
