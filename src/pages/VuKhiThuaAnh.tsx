import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X } from 'lucide-react';
import { GameItem } from '../types';

const WEAPON_TABS = [
  { key: 'cung',     label: 'Thừa Ảnh Cung',     color: '#b45309', colorLight: 'rgba(180,83,9,0.10)',  colorBorder: 'rgba(180,83,9,0.40)'  },
  { key: 'song-dao', label: 'Thừa Ảnh Song Đao',  color: '#dc2626', colorLight: 'rgba(220,38,38,0.10)', colorBorder: 'rgba(220,38,38,0.40)' },
  { key: 'kiem',     label: 'Thừa Ảnh Kiếm',      color: '#1d4ed8', colorLight: 'rgba(29,78,216,0.10)', colorBorder: 'rgba(29,78,216,0.40)' },
] as const;
type WeaponKey = typeof WEAPON_TABS[number]['key'];

// ── Data kỹ năng vũ khí ──
const vuKhiData: GameItem[] = [
  {
    name: 'Cộng Hưởng · Cung',
    nameZh: '共鸣·弓',
    category: '',
    monPhai: '',
    itemType: '',
    stats: ['Thừa Ảnh Cung'],
    tags: ['Thừa Ảnh Cung', 'Dùng chung'],
    details: `Khi thi triển kỹ năng, Cung Thừa Ảnh sẽ phối hợp tấn công, gây sát thương lên mục tiêu. Hiệu ứng này tối đa chỉ kích hoạt {1 lần} mỗi {12 giây}.`,
    detail: `• Sát thương Cung Thừa Ảnh: Gây {3.970} sát thương Nội Công.
• Sát thương lên quái: Tăng {185%}.
• Hồi chiêu: {12 giây}`,
    imageUrl: '/images/vu-khi-thua-anh/cong-huong-cung.png',
  },
  {
    name: 'Đỡ Đòn · Cung',
    nameZh: '格挡·弓',
    category: '',
    monPhai: '',
    itemType: '',
    stats: ['Thừa Ảnh Cung'],
    tags: ['Thừa Ảnh Cung', 'Phó bản'],
    details: `Sau khi trang bị Cung Thừa Ảnh, khi đối đầu với Boss, có thể giương cung tụ lực về phía trước. Trong thời gian tụ lực, liên tục đỡ đòn các đòn tấn công của kẻ địch. Khi kết thúc tụ lực, sẽ bắn mũi tên về phía mục tiêu.
• {Đỡ thành công đòn đánh thường}: Bỏ qua giai đoạn tụ lực, lập tức bắn tên phản kích và nhận trạng thái {Tàng Phong}, tăng sức tấn công.
• {Đỡ thành công đòn đánh mạnh}: Bỏ qua giai đoạn tụ lực và kích hoạt Phản Kích Đỡ Đòn, bắn thêm nhiều mũi tên, gây lượng lớn sát thương.
• {Trấn Ảnh}: Trong thời gian phản kích, nhận giảm sát thương và Bá Thể.`,
    detail: `• Tổng sát thương khi phản kích đỡ đòn đòn đánh mạnh: {106.619} sát thương Nội Công.
• Sát thương mũi tên sau khi kết thúc tụ lực: {1.382} sát thương Nội Công.
• Giảm sát thương: {40%}.
• Tăng công kích mỗi tầng Tàng Phong: {1%}.
• Thời gian duy trì Tàng Phong: {30 giây}.
• Số tầng Tàng Phong tối đa: {3 tầng}.
• Khi sử dụng Liên Chiêu Tự Động, nếu hệ thống tự động đỡ đòn thì Tàng Phong chỉ có thể cộng dồn tối đa {1 tầng}.
• Hồi chiêu: {0 giây}.`,
    imageUrl: '/images/vu-khi-thua-anh/do-don-cung.png',
  },
  {
    name: 'Đỡ Đòn · Chấn Vũ Thức',
    nameZh: '格挡·震羽式',
    category: '',
    monPhai: '',
    itemType: '',
    stats: ['Thừa Ảnh Cung'],
    tags: ['Thừa Ảnh Cung', 'Phó bản', 'Đỡ đòn'],
    details: `Tự động đỡ đòn, dễ dàng ứng phó. Sau khi trang bị Cung Thừa Ảnh, khi đối đầu mục tiêu Boss có thể triệu hồi Linh Điểu. Trong thời gian Linh Điểu hộ thể sẽ tự động đỡ đòn các đòn tấn công của kẻ địch. Nếu đỡ đòn thành công sẽ hoàn trả toàn bộ thời gian hồi chiêu. Khi đỡ thành công chiêu thức sẽ bắn tên phản kích tấn công kẻ địch, nhận trạng thái {Tàng Phong}, tăng Công Kích. Khi đỡ thành công chiêu thức cường lực sẽ kích hoạt phản kích đỡ đòn, bắn thêm nhiều mũi tên gây lượng lớn sát thương.
• {Ảnh Thích}: Có thể sử dụng khi đang thi triển kỹ năng khác.
• {Trấn Ảnh}: Trong thời gian phản kích nhận hiệu ứng giảm sát thương và Bá Thể.`,
    detail: `• Tổng sát thương khi đỡ chiêu thường: Gây {1.377} sát thương Nội Công.
• Tổng sát thương khi đỡ chiêu cường lực: Gây {95.601} sát thương Nội Công.
• Thời gian Linh Điểu hộ thể: {6 giây}.
• Giảm sát thương khi phản kích: {40%}.
• Tăng Công Kích mỗi tầng Tàng Phong: {1%}.
• Thời gian duy trì Tàng Phong: {30 giây}.
• Số tầng Tàng Phong tối đa: {2}.
• Khi dùng chế độ một phím tự động đỡ đòn, Tàng Phong chỉ cộng dồn tối đa {1 tầng}.
• Hồi chiêu: {5.5 giây}.`,
    imageUrl: '/images/vu-khi-thua-anh/do-don-chau-vu-thuc.png',
  },
  {
    name: 'Né Tránh Chuẩn Xác · Cung',
    nameZh: '精准闪避·弓',
    category: '',
    monPhai: '',
    itemType: '',
    stats: ['Thừa Ảnh Cung'],
    tags: ['Thừa Ảnh Cung', 'Phó bản', 'Né tránh'],
    details: `Sau khi trang bị Thừa Ảnh Cung, trong phó bản, nếu thi triển {Yến Hồi Phong} ngay vào khoảnh khắc sắp trúng đòn sẽ kích hoạt {Né Tránh Chuẩn Xác}, bắn một mũi tên về phía mục tiêu, đồng thời nhận hiệu ứng {vô địch} trong thời gian ngắn và {tăng tấn công}.`,
    detail: `• Sát thương: Gây {4145} sát thương nội công.
• Tăng tấn công: {2%}.
• Số tầng tăng tấn công tối đa: 1.
• Thời gian vô địch: {0,8 giây}.`,
    imageUrl: '/images/vu-khi-thua-anh/ne-tranh-chuan-xac-cung.png',
  },
  {
    name: 'Truy Kích Liên Kích · Cung',
    nameZh: '精准闪避·弓',
    category: '',
    monPhai: '',
    itemType: '',
    stats: ['Thừa Ảnh Cung'],
    tags: ['Thừa Ảnh Cung', 'Phó bản'],
    details: `Trong trận chiến với Boss, khi đỡ đòn thành công hoặc xử lý thành công cơ chế đặc biệt, sẽ tích lũy điểm Liên Kích. Khi điểm Liên Kích đạt tối đa, Boss sẽ rơi vào trạng thái suy yếu. Lúc này, có thể cùng đồng đội phát động Truy Kích Liên Kích, gây lượng lớn sát thương. Mỗi người chơi tham gia Truy Kích Liên Kích sẽ tăng {10%} tổng sát thương của đòn liên kích, tối đa {80%}.`,
    detail: `• Sát thương cơ bản: Bằng {3,5%{ máu tối đa của Boss.
• Sát thương cộng thêm: Bằng {30%} tổng sát thương mà Boss phải chịu trong trạng thái suy yếu.
• Mức tăng tổng sát thương mỗi người tham gia: {10%}.
• Số người tối đa được tính tăng sát thương: {8}.`,
    imageUrl: '/images/vu-khi-thua-anh/truy-kich-lien-kich-cung.png',
  },
  // ── Thừa Ảnh Song Đao ──
  {
    name: 'Cộng Hưởng · Song Đao',
    nameZh: '',
    category: '',
    monPhai: '',
    itemType: '',
    stats: ['Thừa Ảnh Song Đao'],
    tags: ['Thừa Ảnh Song Đao', 'Dùng chung'],
    details: '(Coming soon)',
    imageUrl: '',
  },
  {
    name: 'Đỡ Đòn · Song Đao',
    nameZh: '',
    category: 'Kỹ năng vũ khí',
    monPhai: 'Thừa Ảnh',
    itemType: 'Phó bản',
    stats: ['Thừa Ảnh Song Đao'],
    tags: ['Thừa Ảnh Song Đao', 'Phó bản'],
    details: '(Coming soon)',
    imageUrl: '',
  },
  // ── Thừa Ảnh Kiếm ──
  {
    name: 'Cộng Hưởng · Kiếm',
    nameZh: '',
    category: 'Kỹ năng vũ khí',
    monPhai: 'Thừa Ảnh',
    itemType: 'Dùng chung',
    stats: ['Thừa Ảnh Kiếm'],
    tags: ['Thừa Ảnh Kiếm', 'Dùng chung'],
    details: '(Coming soon)',
    imageUrl: '',
  },
  {
    name: 'Đỡ Đòn · Kiếm',
    nameZh: '',
    category: 'Kỹ năng vũ khí',
    monPhai: 'Thừa Ảnh',
    itemType: 'Phó bản',
    stats: ['Thừa Ảnh Kiếm'],
    tags: ['Thừa Ảnh Kiếm', 'Phó bản'],
    details: '(Coming soon)',
    imageUrl: '',
  },
];

const rareBadge = (type?: string): { bg: string; color: string } => {
  if (type === 'Hiếm') return { bg: 'rgba(168,85,247,0.15)', color: '#6b21a8' };
  return { bg: 'rgba(239,68,68,0.1)', color: '#dc2626' };
};

function ScrollableContent({ children, label }: { children: React.ReactNode; label: string }) {
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
  }, [children]);

  return (
    <div className="lg:col-span-2">
      <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--text-3)' }}>{label}</p>
      <div className="relative rounded-xl border" style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)' }}>
        <div ref={scrollRef} className="p-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: '280px' }}>
          {children}
        </div>
        <AnimatePresence>
          {canScrollDown && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 flex justify-center pb-1 pt-8 rounded-b-xl pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-sunken))' }}
            >
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }} className="flex flex-col items-center">
                <ChevronDown size={14} style={{ color: 'var(--text-3)', opacity: 0.35, marginBottom: '-8px' }} />
                <ChevronDown size={16} style={{ color: 'var(--text-3)', opacity: 0.6, marginBottom: '-8px' }} />
                <ChevronDown size={18} style={{ color: 'var(--text-3)', opacity: 1 }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function VuKhiThuaAnh() {
  const items: GameItem[] = vuKhiData;
  const [activeWeapon, setActiveWeapon] = useState<WeaponKey>('cung');
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<'detail' | 'stats' | 'upgrade'>('detail');

  const weapon = WEAPON_TABS.find(w => w.key === activeWeapon)!;

  // Mỗi tab lọc theo stats chứa tên vũ khí tương ứng
  const WEAPON_STAT_MAP: Record<WeaponKey, string> = {
    'cung':     'Thừa Ảnh Cung',
    'song-dao': 'Thừa Ảnh Song Đao',
    'kiem':     'Thừa Ảnh Kiếm',
  };

  const filteredItems = useMemo(() =>
    items.filter(item => item.stats?.includes(WEAPON_STAT_MAP[activeWeapon])),
    [items, activeWeapon]
  );

  useEffect(() => { setActiveModalTab('detail'); }, [selectedItem]);
  useEffect(() => { setSelectedItem(null); }, [activeWeapon]);

  const highlightText = (text: string) => {
    if (!text) return text;
    const pattern = /\{([^}]+)\}/g;
    const parts = text.split(pattern);
    const result: React.ReactNode[] = [];
    parts.forEach((p, i) => {
      if (i % 2 === 1) {
        result.push(<span key={i} className="text-red-600 font-bold">{p}</span>);
      } else {
        const normalized = p.replace(/([^\n])•/g, '$1\n•');
        const lines = normalized.split('\n');
        lines.forEach((line, li) => {
          if (li > 0) result.push(<br key={`${i}-br-${li}`} />);
          if (line) result.push(line);
        });
      }
    });
    return result;
  };

  const colWidths = useMemo(() => {
    const measure = (text: string, font = '14px Nunito, sans-serif') => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return text.length * 8;
      ctx.font = font;
      return ctx.measureText(text).width;
    };
    const pad = 40;
    const nameW = Math.max(measure('TÊN', 'bold 14px Nunito'), ...filteredItems.map(i => measure(i.name, 'bold 16px Nunito')), ...filteredItems.map(i => measure(i.nameZh || '', '16px serif'))) + pad;
    return { img: 100, name: Math.ceil(nameW) };
  }, [filteredItems]);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 w-full">

      {/* 3 tab vũ khí */}
      <div className="flex gap-2 mb-6">
        {WEAPON_TABS.map(w => (
          <button
            key={w.key}
            onClick={() => setActiveWeapon(w.key)}
            style={{
              padding: '7px 20px',
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 6,
              border: `1px solid ${activeWeapon === w.key ? w.colorBorder : 'var(--border)'}`,
              background: activeWeapon === w.key ? w.colorLight : 'var(--bg-card)',
              color: activeWeapon === w.key ? w.color : 'var(--text-2)',
              cursor: 'pointer',
              transition: 'all 160ms',
              boxShadow: activeWeapon === w.key ? `0 0 10px ${w.colorBorder}` : 'none',
            }}
          >{w.label}</button>
        ))}
      </div>

      {/* Table */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeWeapon}
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="overflow-hidden border"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="overflow-x-auto custom-scrollbar">
            <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: `${colWidths.img}px` }} />
                <col style={{ width: `${colWidths.name}px` }} />
                <col />
              </colgroup>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                  {['Hình ảnh', 'Tên', 'Chi tiết'].map((h, idx, arr) => (
                    <th key={h} className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                      style={{ color: 'var(--text-1)', borderRight: idx < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? filteredItems.map(item => {
                  return (
                    <tr key={item.name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                        <div onClick={() => setSelectedItem(item)}
                          className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                          style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                          {item.imageUrl ? <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" /> : <span className="text-3xl">📜</span>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-xl tracking-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 100 }}>{item.name}</span>
                          {item.nameZh && <span className="text-base font-chinese" style={{ color: 'var(--text-1)' }}>{item.nameZh}</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium leading-relaxed max-w-md" style={{ color: 'var(--text-2)', fontSize: '14px' }}>
                        {highlightText(item.details)}
                      </td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl opacity-20">�</span>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-3)' }}>Chưa có dữ liệu cho vũ khí này</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 8, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.96, y: 8, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-start gap-5 p-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden shrink-0"
                  style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                  {selectedItem.imageUrl ? <img src={selectedItem.imageUrl} alt={selectedItem.name} className="w-full h-full object-contain" /> : <span className="text-4xl">📜</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl leading-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 'normal' }}>{selectedItem.name}</h3>
                  {selectedItem.nameZh && <span className="text-base font-chinese" style={{ color: 'var(--text-3)' }}>{selectedItem.nameZh}</span>}
                  <div className="mt-2.5 flex gap-1.5 flex-wrap">
                    {(selectedItem.monPhai || selectedItem.category) && (
                      <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                        style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626' }}>
                        {selectedItem.monPhai || selectedItem.category}
                      </span>
                    )}
                    {selectedItem.itemType && (
                      <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                        style={{ backgroundColor: rareBadge(selectedItem.itemType).bg, color: rareBadge(selectedItem.itemType).color }}>
                        {selectedItem.itemType}
                      </span>
                    )}
                    {selectedItem.tags?.filter(t => t).map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                        style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button onClick={() => setSelectedItem(null)} className="p-1.5 rounded-lg cursor-pointer transition-colors shrink-0" style={{ color: '#dc2626' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.1)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
                  <X size={18} />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6 overflow-hidden">
                {(selectedItem.detail || selectedItem.upgrade) && (
                  <div className="flex gap-2 mb-4">
                    {(['detail', 'stats', 'upgrade'] as const).map(tab => {
                      const labels = { detail: 'Mô tả', stats: 'Chi tiết', upgrade: 'Nâng cấp' };
                      const hidden = (tab === 'stats' && !selectedItem.detail) || (tab === 'upgrade' && !selectedItem.upgrade);
                      if (hidden) return null;
                      return (
                        <button key={tab} onClick={() => setActiveModalTab(tab)}
                          className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                          style={{
                            backgroundColor: activeModalTab === tab ? 'var(--bg-sunken)' : 'transparent',
                            color: activeModalTab === tab ? 'var(--text-1)' : 'var(--text-3)',
                            border: activeModalTab === tab ? '1px solid var(--border)' : '1px solid transparent',
                            transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
                          }}
                          onMouseEnter={e => { if (activeModalTab !== tab) { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-1)'; } }}
                          onMouseLeave={e => { if (activeModalTab !== tab) { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; } }}
                        >{labels[tab]}</button>
                      );
                    })}
                  </div>
                )}
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeModalTab}
                    initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  >
                    {activeModalTab === 'detail' && (
                      <ScrollableContent label="Mô tả chi tiết">
                        <p className="font-medium leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '14px' }}>
                          {highlightText(selectedItem.details)}
                        </p>
                      </ScrollableContent>
                    )}
                    {activeModalTab === 'stats' && selectedItem.detail && (
                      <ScrollableContent label="Chỉ số chi tiết">
                        <p className="font-medium leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '14px' }}>
                          {highlightText(selectedItem.detail)}
                        </p>
                      </ScrollableContent>
                    )}
                    {activeModalTab === 'upgrade' && selectedItem.upgrade && (
                      <ScrollableContent label="Nâng cấp">
                        <p className="font-medium leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '14px' }}>
                          {highlightText(selectedItem.upgrade)}
                        </p>
                      </ScrollableContent>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
