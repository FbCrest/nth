import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Check, X } from 'lucide-react';
import { GameItem } from '../types';

interface DataGridProps { title: string; items: GameItem[]; }

// Element badge colors — softer, works on both light/dark
const elBadge = (el?: string): { bg: string; color: string; rainbow?: boolean } => {
  if (!el) return { bg: 'rgba(107,114,128,0.12)', color: '#374151' };
  if (el === 'Linh Hoạt') return { bg: '', color: '', rainbow: true };
  // Lấy hệ đầu tiên nếu là hệ kép (Kim - Hoả → Kim)
  const primary = el.split(/[-–]/)[0].trim();
  if (primary === 'Hỏa')  return { bg: 'rgba(239,68,68,0.15)',   color: '#b91c1c' };
  if (primary === 'Kim')  return { bg: 'rgba(234,179,8,0.15)',   color: '#854d0e' };
  if (primary === 'Mộc')  return { bg: 'rgba(34,197,94,0.15)',   color: '#15803d' };
  if (primary === 'Thủy') return { bg: 'rgba(59,130,246,0.15)',  color: '#1e40af' };
  if (primary === 'Thổ')  return { bg: 'rgba(180,120,60,0.15)',  color: '#78350f' };
  return { bg: 'rgba(107,114,128,0.12)', color: '#374151' };
};

const rareBadge = (type?: string): { bg: string; color: string } => {
  if (type === 'Hiếm')   return { bg: 'rgba(168,85,247,0.15)', color: '#6b21a8' };  // tím
  if (type === 'Thường') return { bg: 'rgba(59,130,246,0.12)', color: '#1e40af' };  // xanh dương nhạt
  return                        { bg: 'rgba(107,114,128,0.12)', color: '#374151' };
};

export default function DataGrid({ title, items }: DataGridProps) {
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({ name: 'Tất Cả', element: 'Tất Cả', type: 'Tất Cả', stat: 'Tất Cả' });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpenDropdown(null); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const isNoiCong = title === 'Nội công';
  const statsList = ['Tất Cả','Bá Thể','Bỏ Qua Kháng Nguyên Tố','Công Kích Nguyên Tố','Cường Hoá Kỹ Năng','Gây Sát Thương','Giải Khống Chế','Giảm Hồi Chiêu','Giảm Sát Thương','Trị Liệu','Tăng Công','Linh Vận'];

  const highlightText = (text: string) => {
    if (!text) return text;
    const parts = text.split(/(\d+(?:\.\d+)?%?|\b(?:tối đa|tầng|điểm|phá phòng|bỏ qua|Tấn công|Công kích|Linh Vận|giây|HP|Quần thể)\b)/gi);
    return parts.map((p, i) =>
      /(\d+(?:\.\d+)?%?|\b(?:tối đa|tầng|điểm|phá phòng|bỏ qua|Tấn công|Công kích|Linh Vận|giây|HP|Quần thể)\b)/gi.test(p)
        ? <span key={i} className="text-amber-600 dark:text-amber-400 font-bold">{p}</span>
        : p
    );
  };

  const filteredItems = useMemo(() => items.filter(item => {
    const s = searchTerm.toLowerCase();
    return (item.name.toLowerCase().includes(s) || item.nameZh?.toLowerCase().includes(s) || item.sect?.toLowerCase().includes(s) || item.element?.toLowerCase().includes(s) || item.itemType?.toLowerCase().includes(s))
      && (activeFilters.name === 'Tất Cả' || item.name === activeFilters.name)
      && (activeFilters.element === 'Tất Cả' || item.element === activeFilters.element)
      && (activeFilters.type === 'Tất Cả' || item.itemType === activeFilters.type)
      && (activeFilters.stat === 'Tất Cả' || item.details.toLowerCase().includes(activeFilters.stat.toLowerCase()));
  }), [items, searchTerm, activeFilters]);

  const uniqueValues = useMemo(() => {
    if (!isNoiCong) return null;
    const grp = (list: string[]) => {
      const g: Record<string, string[]> = {};
      list.forEach(v => { if (v === '—') return; const k = v[0].toUpperCase(); (g[k] ??= []).push(v); });
      return g;
    };
    return {
      names: grp(Array.from(new Set(items.map(i => i.name))).sort((a, b) => a.localeCompare(b, 'vi'))),
      elements: grp(Array.from(new Set(items.map(i => i.element || '—'))).sort()),
      types: grp(Array.from(new Set(items.map(i => i.itemType || '—'))).sort()),
      stats: grp(statsList.slice(1)),
    };
  }, [items, isNoiCong]);

  const hasFilters = Object.values(activeFilters).some(v => v !== 'Tất Cả');

  // Tính width các cột dựa trên nội dung thực tế
  const colWidths = useMemo(() => {
    const measure = (text: string, font = '14px Nunito, sans-serif') => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return text.length * 8;
      ctx.font = font;
      return ctx.measureText(text).width;
    };
    const pad = 40; // px-5 * 2

    // Cột Tên: tên VN dài nhất
    const nameW = Math.max(
      measure('TÊN', 'bold 14px Nunito, sans-serif'),
      ...filteredItems.map(i => measure(i.name, 'bold 16px Nunito, sans-serif')),
      ...filteredItems.map(i => measure(i.nameZh || '', '16px FZSSKSJ, serif')),
    ) + pad;

    // Cột Hệ
    const elW = Math.max(
      measure('HỆ', 'bold 14px Nunito, sans-serif'),
      ...filteredItems.map(i => measure(i.element || '—', 'bold 12px Nunito, sans-serif')),
    ) + pad + 16; // badge padding

    // Cột Loại
    const typeW = Math.max(
      measure('LOẠI', 'bold 14px Nunito, sans-serif'),
      ...filteredItems.map(i => measure(i.itemType || i.sect || i.category || '—', 'bold 12px Nunito, sans-serif')),
    ) + pad + 16;

    return { img: 100, name: Math.ceil(nameW), el: Math.ceil(elW), type: Math.ceil(typeW) };
  }, [filteredItems]);

  const DropdownFilter = ({ label, value, options, onSelect, id }: {
    label: string; value: string; options: Record<string, string[]> | null; onSelect: (v: string) => void; id: string;
  }) => {
    const isOpen = openDropdown === id;
    const active = value !== 'Tất Cả';

    // Tính width vừa đủ với text dài nhất trong options
    const dropdownWidth = useMemo(() => {
      if (!options) return undefined;
      const allItems = ['Tất Cả', ...Object.values(options).flat()];
      const longest = allItems.reduce((a, b) => a.length > b.length ? a : b, '');
      // Đo text bằng canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return undefined;
      ctx.font = '14px Nunito, sans-serif';
      const textWidth = ctx.measureText(longest).width;
      // + padding left/right (px-4 = 16px * 2) + scrollbar (8px) + buffer (8px)
      return Math.ceil(textWidth) + 48;
    }, [options]);
    return (
      <div className="relative inline-block w-full sm:w-auto">
        <button
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          className="inline-flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold border min-w-[148px] cursor-pointer transition-colors duration-150"
          style={{
            backgroundColor: active ? 'rgba(245,158,11,0.1)' : 'var(--bg-card)',
            borderColor: active ? 'rgba(245,158,11,0.4)' : 'var(--border)',
            color: active ? '#b45309' : 'var(--text-2)',
          }}
        >
          <span className="truncate">{value === 'Tất Cả' ? label : value}</span>
          <ChevronDown size={14} className={`opacity-50 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && options && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute left-0 z-50 mt-1.5 origin-top rounded-2xl shadow-xl border overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', minWidth: '100%', width: dropdownWidth ? `${dropdownWidth}px` : 'max-content' }}
            >
              <div className="max-h-[360px] overflow-y-auto custom-scrollbar">
                {/* Tất Cả */}
                <button
                  onClick={() => { onSelect('Tất Cả'); setOpenDropdown(null); }}
                  className="w-full text-left px-4 py-3 text-sm font-medium cursor-pointer transition-colors border-b"
                  style={{
                    backgroundColor: value === 'Tất Cả' ? 'rgba(59,130,246,0.06)' : 'transparent',
                    color: value === 'Tất Cả' ? '#1d4ed8' : 'var(--text-1)',
                    fontWeight: value === 'Tất Cả' ? 600 : 400,
                    borderColor: 'var(--border)',
                  }}
                  onMouseEnter={e => {
                    if (value !== 'Tất Cả') {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(59,130,246,0.06)';
                      (e.currentTarget as HTMLElement).style.color = '#1d4ed8';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = value === 'Tất Cả' ? 'rgba(59,130,246,0.06)' : 'transparent';
                    (e.currentTarget as HTMLElement).style.color = value === 'Tất Cả' ? '#1d4ed8' : 'var(--text-1)';
                  }}
                >
                  Tất Cả
                </button>
                {/* Groups */}
                {Object.keys(options).sort().map(letter => (
                  <div key={letter}>
                    {/* Group header */}
                    <div
                      className="px-4 py-2 text-sm font-black uppercase tracking-wider"
                      style={{ backgroundColor: 'var(--bg-sunken)', color: '#2563eb' }}
                    >
                      {letter}
                    </div>
                    {/* Group items */}
                    {options[letter].map((opt, idx, arr) => {
                      const sel = value === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => { onSelect(opt); setOpenDropdown(null); }}
                          className="w-full text-left px-4 py-3 text-sm cursor-pointer transition-colors"
                          style={{
                            backgroundColor: sel ? 'rgba(59,130,246,0.08)' : 'transparent',
                            color: sel ? '#1d4ed8' : 'var(--text-2)',
                            fontWeight: sel ? 600 : 400,
                            borderBottom: idx < arr.length - 1 ? '1px solid var(--border)' : 'none',
                          }}
                          onMouseEnter={e => {
                            if (!sel) {
                              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(59,130,246,0.06)';
                              (e.currentTarget as HTMLElement).style.color = '#1d4ed8';
                            }
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = sel ? 'rgba(59,130,246,0.08)' : 'transparent';
                            (e.currentTarget as HTMLElement).style.color = sel ? '#1d4ed8' : 'var(--text-2)';
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 w-full max-w-[1600px] mx-auto">
      {/* Filters + Search cùng hàng */}
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--text-3)' }} />
            <input
              type="text" placeholder="Tìm kiếm..." value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 pr-9 py-2.5 rounded-xl text-sm outline-none border transition-colors"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-1)', width: '180px' }}
              onFocus={e => (e.currentTarget.style.borderColor = '#f59e0b')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" style={{ color: 'var(--text-3)' }}>
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filters */}
          {isNoiCong && uniqueValues && (
            <div ref={dropdownRef} className="flex flex-wrap items-center gap-2">
              <DropdownFilter id="name" label="Tên Nội Công" value={activeFilters.name} options={uniqueValues.names} onSelect={v => setActiveFilters(p => ({ ...p, name: v }))} />
              <DropdownFilter id="element" label="Hệ Nội Công" value={activeFilters.element} options={uniqueValues.elements} onSelect={v => setActiveFilters(p => ({ ...p, element: v }))} />
              <DropdownFilter id="type" label="Loại Nội Công" value={activeFilters.type} options={uniqueValues.types} onSelect={v => setActiveFilters(p => ({ ...p, type: v }))} />
              <DropdownFilter id="stat" label="Chỉ Số" value={activeFilters.stat} options={uniqueValues.stats} onSelect={v => setActiveFilters(p => ({ ...p, stat: v }))} />
              <AnimatePresence>
                {hasFilters && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => setActiveFilters({ name: 'Tất Cả', element: 'Tất Cả', type: 'Tất Cả', stat: 'Tất Cả' })}
                    className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2.5 rounded-xl cursor-pointer transition-colors"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ef4444'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.06)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    <X size={13} /> Xóa bộ lọc
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: `${colWidths.img}px` }} />
              <col style={{ width: `${colWidths.name}px` }} />
              {isNoiCong ? (
                <>
                  <col style={{ width: `${colWidths.el}px` }} />
                  <col style={{ width: `${colWidths.type}px` }} />
                </>
              ) : (
                <col style={{ width: `${colWidths.type}px` }} />
              )}
              <col /> {/* Chi tiết: chiếm phần còn lại */}
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: `1px solid var(--border)` }}>
                {['Hình ảnh', 'Tên', ...(isNoiCong ? ['Hệ', 'Loại'] : ['Môn phái / Loại']), 'Chi tiết'].map((h, idx, arr) => (
                  <th
                    key={h}
                    className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                    style={{
                      color: 'var(--text-1)',
                      borderRight: idx < arr.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? filteredItems.map((item) => {
                const el = elBadge(item.element);
                const rr = rareBadge(item.itemType);
                return (
                  <tr key={item.id} style={{ borderBottom: `1px solid var(--border)` }}>
                    <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                      <div
                        onClick={() => setSelectedItem(item)}
                        className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                        style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                      >
                        {item.imageUrl ? <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" /> : <span className="text-3xl">{item.icon || '📜'}</span>}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="font-bold text-base tracking-tight" style={{ color: 'var(--text-1)' }}>{item.name}</span>
                        {item.nameZh && <span className="text-base font-chinese" style={{ color: 'var(--text-1)' }}>{item.nameZh}</span>}
                      </div>
                    </td>
                    {isNoiCong ? (
                      <>
                        <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          {el.rainbow ? (
                            <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap text-white"
                              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
                              {item.element}
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap" style={{ backgroundColor: el.bg, color: el.color }}>{item.element || '—'}</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap" style={{ backgroundColor: rr.bg, color: rr.color }}>{item.itemType || '—'}</span>
                        </td>
                      </>
                    ) : (
                      <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap" style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#b45309' }}>{item.sect || item.category}</span>
                      </td>
                    )}
                    <td className="px-6 py-4 text-sm leading-relaxed max-w-md" style={{ color: 'var(--text-3)' }}>{highlightText(item.details)}</td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan={isNoiCong ? 5 : 4} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-3xl opacity-20">🔍</span>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-3)' }}>Không tìm thấy kết quả phù hợp</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 14, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.94, y: 14, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start gap-5 p-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="w-20 h-20 flex items-center justify-center rounded-xl border overflow-hidden shrink-0" style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)' }}>
                  {selectedItem.imageUrl ? <img src={selectedItem.imageUrl} alt={selectedItem.name} className="w-full h-full object-contain p-1.5" /> : <span className="text-4xl">{selectedItem.icon || '📜'}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold leading-tight" style={{ color: 'var(--text-1)' }}>{selectedItem.name}</h3>
                  {selectedItem.nameZh && <span className="text-base font-chinese" style={{ color: 'var(--text-3)' }}>{selectedItem.nameZh}</span>}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {isNoiCong ? (
                      <>
                        {(() => { const s = elBadge(selectedItem.element); return s.rainbow ? (
                          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>Hệ {selectedItem.element}</span>
                        ) : (
                          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold" style={{ backgroundColor: s.bg, color: s.color }}>Hệ {selectedItem.element}</span>
                        ); })()}
                        {(() => { const s = rareBadge(selectedItem.itemType); return <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold" style={{ backgroundColor: s.bg, color: s.color }}>{selectedItem.itemType}</span>; })()}
                      </>
                    ) : (
                      <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold" style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#b45309' }}>{selectedItem.sect || selectedItem.category}</span>
                    )}
                  </div>
                </div>
                <button onClick={() => setSelectedItem(null)} className="p-1.5 rounded-lg cursor-pointer transition-colors shrink-0" style={{ color: 'var(--text-3)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--text-3)' }}>Mô tả chi tiết</p>
                <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{highlightText(selectedItem.details)}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20 text-sm cursor-pointer"
                  onClick={() => setSelectedItem(null)}
                >Đóng lại</motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
