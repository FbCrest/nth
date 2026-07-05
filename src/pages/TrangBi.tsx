import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronDown, Check } from 'lucide-react';
import { supabase, TrangBi } from '../lib/supabase';

const rareBadge = (loai?: string | null) => {
  if (loai === 'PVP') return { bg: 'rgba(239,68,68,0.1)', color: '#dc2626', border: 'rgba(239,68,68,0.25)' };
  if (loai === 'PVE') return { bg: 'rgba(34,197,94,0.1)', color: '#15803d', border: 'rgba(34,197,94,0.25)' };
  if (loai === 'Hỗ Trợ') return { bg: 'rgba(59,130,246,0.1)', color: '#1d4ed8', border: 'rgba(59,130,246,0.25)' };
  return { bg: 'rgba(107,114,128,0.1)', color: '#374151', border: 'rgba(107,114,128,0.2)' };
};

function highlightText(text: string): React.ReactNode[] {
  if (!text) return [text];
  const parts = text.split(/(\{[^}]+\})/g);
  const result: React.ReactNode[] = [];
  parts.forEach((p, i) => {
    if (p.startsWith('{') && p.endsWith('}')) {
      const content = p.slice(1, -1);
      const [textPart, color] = content.split('|');
      if (color === 'purple') {
        result.push(<span key={i} style={{ color: '#7c3aed', fontWeight: 'bold' }}>{textPart}</span>);
      } else if (color === 'yellow') {
        result.push(<span key={i} style={{ color: '#d97706', fontWeight: 'bold' }}>{textPart}</span>);
      } else if (color === 'blue') {
        result.push(<span key={i} style={{ color: '#2563eb', fontWeight: 'bold' }}>{textPart}</span>);
      } else {
        // Không có color hoặc color=red → đỏ
        result.push(<span key={i} className="text-red-600 font-bold">{textPart}</span>);
      }
    } else {
      const normalized = p.replace(/([^\n])•/g, '$1\n•');
      normalized.split('\n').forEach((line, li) => {
        if (li > 0) result.push(<br key={`${i}-${li}`} />);
        if (line) result.push(line);
      });
    }
  });
  return result;
}

const SLOTS = ['Tất cả', 'Mũ', 'Áo', 'Bao tay', 'Hộ uyển', 'Giày', 'Trạc', 'Nhẫn', 'Dây chuyền', 'Vũ khí'];

export default function TrangBiPage() {
  const [items, setItems] = useState<TrangBi[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<TrangBi | null>(null);
  const [activeSlot, setActiveSlot] = useState('Tất cả');
  const [search, setSearch] = useState('');
  const [filterLoai, setFilterLoai] = useState('Tất Cả');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('trang_bi')
        .select('*')
        .order('created_at', { ascending: false });
      setItems(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  const loais = useMemo(() => ['Tất Cả', ...Array.from(new Set(items.map(i => i.loai).filter(Boolean))) as string[]], [items]);

  const filtered = useMemo(() => items.filter(item => {
    const s = search.toLowerCase();
    const matchSearch = !s || item.ten.toLowerCase().includes(s) || (item.ten_zh ?? '').toLowerCase().includes(s);
    const matchSlot = activeSlot === 'Tất cả' || item.slot === activeSlot;
    const matchLoai = filterLoai === 'Tất Cả' || item.loai === filterLoai;
    return matchSearch && matchSlot && matchLoai;
  }).sort((a, b) => {
    const ca = parseInt(a.cap ?? '0') || 0;
    const cb = parseInt(b.cap ?? '0') || 0;
    return cb - ca;
  }), [items, search, activeSlot, filterLoai]);

  const hasFilter = search || filterLoai !== 'Tất Cả';

  // Close dropdown on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest('[data-dropdown]')) setOpenDropdown(null);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const Dropdown = ({ id, label, value, options, onChange }: {
    id: string; label: string; value: string; options: string[]; onChange: (v: string) => void;
  }) => {
    const active = value !== 'Tất Cả';
    const isOpen = openDropdown === id;
    return (
      <div className="relative" data-dropdown>
        <button
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold border cursor-pointer transition-colors"
          style={{
            backgroundColor: active ? 'rgba(245,158,11,0.1)' : 'var(--bg-card)',
            borderColor: active ? 'rgba(245,158,11,0.4)' : 'var(--border)',
            color: active ? '#b45309' : 'var(--text-2)',
            minWidth: 148,
          }}
        >
          <span className="flex-1 truncate text-left">{value === 'Tất Cả' ? label : value}</span>
          <ChevronDown size={14} className={`opacity-50 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -6, height: 0 }} transition={{ duration: 0.15 }}
              className="absolute left-0 z-50 mt-1.5 rounded-2xl border shadow-xl overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', minWidth: '100%' }}
            >
              <div className="max-h-64 overflow-y-auto custom-scrollbar">
                {options.map((opt, i) => (
                  <button key={opt} onClick={() => { onChange(opt); setOpenDropdown(null); }}
                    className="w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors"
                    style={{
                      backgroundColor: value === opt ? 'rgba(59,130,246,0.08)' : 'transparent',
                      color: value === opt ? '#1d4ed8' : 'var(--text-2)',
                      fontWeight: value === opt ? 600 : 400,
                      borderBottom: i < options.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                    onMouseEnter={e => { if (value !== opt) (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(59,130,246,0.05)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = value === opt ? 'rgba(59,130,246,0.08)' : 'transparent'; }}
                  >{opt}</button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 w-full">
      {/* Tab slots + Search + Filter cùng hàng */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {/* Tabs */}
        {SLOTS.map(slot => (
          <button
            key={slot}
            onClick={() => { setActiveSlot(slot); setSelected(null); }}
            style={{
              padding: '6px 16px', fontSize: 13, fontWeight: 700, borderRadius: 6,
              border: `1px solid ${activeSlot === slot ? 'rgba(239,68,68,0.5)' : 'var(--border)'}`,
              background: activeSlot === slot ? 'rgba(239,68,68,0.1)' : 'var(--bg-card)',
              color: activeSlot === slot ? '#dc2626' : 'var(--text-2)',
              cursor: 'pointer', transition: 'all 160ms',
              boxShadow: activeSlot === slot ? '0 0 8px rgba(239,68,68,0.25)' : 'none',
            }}
          >{slot}</button>
        ))}

        {/* Separator */}
        <div style={{ width: 1, height: 24, backgroundColor: 'var(--border)', margin: '0 4px' }} />

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--text-3)' }} />
          <input
            type="text" placeholder="Tìm kiếm..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 pr-8 py-2 rounded-xl text-sm outline-none border transition-colors"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-1)', width: 160 }}
            onFocus={e => (e.currentTarget.style.borderColor = '#dc2626')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
          {search && <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }}><X size={13} /></button>}
        </div>

        {/* Dropdown Loại */}
        <div className="relative" data-dropdown>
          <button
            onClick={() => setOpenDropdown(openDropdown === 'loai' ? null : 'loai')}
            className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold border cursor-pointer transition-colors"
            style={{
              backgroundColor: filterLoai !== 'Tất Cả' ? 'rgba(239,68,68,0.1)' : 'var(--bg-card)',
              borderColor: filterLoai !== 'Tất Cả' ? 'rgba(239,68,68,0.4)' : 'var(--border)',
              color: filterLoai !== 'Tất Cả' ? '#dc2626' : 'var(--text-2)',
              minWidth: 120,
            }}
          >
            <span className="flex-1 truncate text-left">{filterLoai === 'Tất Cả' ? 'Loại' : filterLoai}</span>
            <ChevronDown size={14} className={`opacity-50 shrink-0 transition-transform ${openDropdown === 'loai' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === 'loai' && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -6, height: 0 }} transition={{ duration: 0.15 }}
                className="absolute left-0 z-50 mt-1.5 rounded-2xl border shadow-xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', minWidth: '100%' }}
              >
                <div className="p-1.5">
                  {['Tất Cả', ...loais.filter(l => l !== 'Tất Cả')].map(opt => {
                    const isActive = filterLoai === opt;
                    return (
                      <button key={opt} onClick={() => { setFilterLoai(opt); setOpenDropdown(null); }}
                        className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer transition-colors text-sm font-bold"
                        style={{ backgroundColor: isActive ? 'rgba(239,68,68,0.1)' : 'transparent', color: isActive ? '#dc2626' : 'var(--text-2)' }}
                        onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = isActive ? 'rgba(239,68,68,0.1)' : 'transparent'; }}>
                        {opt}
                        {isActive && <Check size={13} strokeWidth={3} className="ml-auto shrink-0" style={{ color: '#dc2626' }} />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {hasFilter && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => { setSearch(''); setFilterLoai('Tất Cả'); }}
              className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-xl cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ef4444'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.06)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
            ><X size={13} /> Xóa</motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-24" style={{ color: 'var(--text-3)' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="w-6 h-6 rounded-full border-2 border-t-transparent" style={{ borderColor: 'var(--border)', borderTopColor: '#dc2626' }} />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-24">
          <span className="text-4xl opacity-20">🛡️</span>
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>Không tìm thấy trang bị phù hợp</p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlot}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 15, justifyContent: 'center' }}
          >
          {filtered.map(item => {
            const isSelected = selected?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelected(isSelected ? null : item)}
                className="item-card-trangbi"
                style={{
                  borderRadius: 16,
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 16px rgba(230,126,34,0.73)' : '0 2px 12px rgba(0,0,0,0.1)',
                  padding: '18px 10px 14px',
                  cursor: 'pointer',
                  border: isSelected ? '2.5px solid #e67e22' : '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  width: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
                }}
              >
                {/* Rotating gradient overlay */}
                <div className="item-card-overlay" style={{
                  position: 'absolute', top: '-50%', left: '-50%',
                  width: '200%', height: '200%',
                  background: 'linear-gradient(120deg, #a18cd1, #fbc2eb, #a6c0fe, #fbc2eb)',
                  animation: 'trangbi-rotate 6s linear infinite',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none', zIndex: 0,
                }} />

                {/* Ảnh */}
                <div className="item-card-img-wrap" style={{
                  width: 120, height: 120, borderRadius: 10, overflow: 'hidden',
                  marginBottom: 8, position: 'relative', zIndex: 1,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  backgroundColor: 'var(--bg-sunken)',
                  transition: 'transform 0.3s ease',
                }}>
                  {item.image_url
                    ? <img src={item.image_url} alt={item.ten} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, opacity: 0.2 }}>🛡️</div>
                  }
                </div>

                {/* Info */}
                <div style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}>
                  {/* Cấp + Loại cùng hàng */}
                  <div style={{ fontSize: 14, marginBottom: 6 }}>
                    {item.cap && <><span style={{ color: 'var(--text-2)' }}>Cấp: </span><b style={{ color: '#dc2626' }}>{item.cap}</b></>}
                    {item.cap && item.loai && <span style={{ margin: '0 6px', color: 'var(--text-3)', opacity: 0.4 }}>|</span>}
                    {item.loai && <><span style={{ color: 'var(--text-2)' }}>Loại: </span><b style={{ color: '#dc2626' }}>{item.loai}</b></>}
                  </div>
                  {item.chi_tiet && (
                    <ul style={{ listStyle: 'disc', padding: '0 0 0 18px', margin: '4px 0 0', textAlign: 'left' }}>
                      {item.chi_tiet.split('\n').filter(Boolean).slice(0, 5).map((line, i) => {
                        // Tách tên chỉ số : số
                        const parts = line.replace(/^•\s*/, '').split(':');
                        const label = parts[0];
                        const value = parts.slice(1).join(':').trim();
                        return (
                          <li key={i}
                            className="item-stat-row"
                            style={{ fontSize: 14, marginBottom: 3, color: 'var(--text-1)', cursor: 'pointer', transition: 'color 0.15s, transform 0.15s' }}>
                            {value
                              ? <>{label}: <b style={{ color: '#dc2626' }}>{value}</b></>
                              : label
                            }
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
        </AnimatePresence>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 8, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 8, opacity: 0 }} transition={{ duration: 0.2 }}
              className="rounded-2xl shadow-2xl border w-full max-w-lg"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <div className="relative p-5">
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer transition-all text-xl font-bold"
                  style={{ color: 'var(--text-3)', background: 'none', border: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e67e22'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.15) rotate(8deg)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLElement).style.transform = ''; }}>
                  ×
                </button>

                {/* Ảnh centered */}
                <div className="flex justify-center mb-2">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: 120, height: 120, borderRadius: 10, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 12px rgba(178,190,195,0.5)', backgroundColor: 'var(--bg-sunken)' }}>
                    {selected.image_url
                      ? <img src={selected.image_url} alt={selected.ten} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, opacity: 0.2 }}>🛡️</div>
                    }
                  </motion.div>
                </div>

                {/* Tên */}
                <div className="text-center" style={{ fontSize: 20, fontWeight: 100, color: 'var(--text-1)', fontFamily: 'var(--font-skill, inherit)', fontStyle: 'normal', marginBottom: 2 }}>
                  {selected.ten}
                </div>
                {selected.ten_zh && (
                  <div className="text-center" style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', marginBottom: 4 }}>{selected.ten_zh}</div>
                )}

                {/* Meta row — Loại | Cấp | Mùa giải */}
                <div className="text-center" style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 8 }}>
                  {selected.loai && <><span>Loại: </span><b style={{ color: '#dc2626' }}>{selected.loai}</b></>}
                  {selected.loai && selected.cap && <span style={{ margin: '0 8px', color: 'var(--border)' }}>|</span>}
                  {selected.cap && <><span>Cấp: </span><b style={{ color: '#dc2626' }}>{selected.cap}</b></>}
                  {(selected.loai || selected.cap) && (selected as any).mua_giai && <span style={{ margin: '0 8px', color: 'var(--border)' }}>|</span>}
                  {(selected as any).mua_giai && <><span>Mùa giải: </span><b style={{ color: '#dc2626' }}>{(selected as any).mua_giai}</b></>}
                </div>

                {/* Mô tả ngay dưới meta */}
                {selected.mo_ta && (
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 8 }}>
                    {highlightText(selected.mo_ta)}
                  </div>
                )}

                {/* Chi tiết stats */}
                {selected.chi_tiet && (
                  <ul style={{ listStyle: 'disc', padding: '0 0 0 18px', margin: 0 }}>
                    {selected.chi_tiet.split('\n').filter(Boolean).map((line, i) => {
                      const parts = line.replace(/^•\s*/, '').split(':');
                      const label = parts[0];
                      const value = parts.slice(1).join(':').trim();
                      return (
                        <motion.li key={i}
                          whileHover={{ x: 4, color: '#4a90e2' }}
                          transition={{ duration: 0.15 }}
                          style={{ marginBottom: 3, fontSize: 14, color: 'var(--text-1)', lineHeight: 1.6, cursor: 'pointer' }}>
                          {value
                            ? <><span>{label}:</span> <b style={{ color: '#dc2626' }}>{value}</b></>
                            : label
                          }
                        </motion.li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
