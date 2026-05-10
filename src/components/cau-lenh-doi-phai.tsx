import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, ArrowRight, ArrowLeftRight, RefreshCw, ChevronDown } from 'lucide-react';

const classes = [
  { vn: 'Thiết Y',     zh: '铁衣', icon: '/images/icon-phai/thiet-y.png' },
  { vn: 'Cửu Linh',   zh: '九灵', icon: '/images/icon-phai/cuu-linh.png' },
  { vn: 'Tố Vấn',     zh: '素问', icon: '/images/icon-phai/to-van.png' },
  { vn: 'Toái Mộng',  zh: '碎梦', icon: '/images/icon-phai/toai-mong.png' },
  { vn: 'Huyết Hà',   zh: '血河', icon: '/images/icon-phai/huyet-ha.png' },
  { vn: 'Thần Tương', zh: '神相', icon: '/images/icon-phai/than-tuong.png' },
  { vn: 'Long Ngâm',  zh: '龙吟', icon: '/images/icon-phai/long-ngam.png' },
  { vn: 'Huyền Cơ',   zh: '玄机', icon: '/images/icon-phai/huyen-co.png' },
  { vn: 'Triều Quang',zh: '潮光', icon: '/images/icon-phai/trieu-quang.png' },
  { vn: 'Thương Lan', zh: '沧澜', icon: '/images/icon-phai/thuong-lang.png' },
  { vn: 'Hồng Âm',   zh: '鸿音', icon: '/images/icon-phai/hong-am.png' },
];

type ClassType = typeof classes[0];

function ClassDropdown({ value, onChange, placeholder, accentColor }: {
  value: ClassType | null; onChange: (c: ClassType) => void; placeholder: string; accentColor: 'orange' | 'blue';
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const accent = accentColor === 'orange'
    ? { border: '#fb923c', bg: 'rgba(251,146,60,0.1)', text: '#c2410c', activeBg: 'rgba(251,146,60,0.1)', activeText: '#c2410c' }
    : { border: '#60a5fa', bg: 'rgba(96,165,250,0.1)',  text: '#1d4ed8', activeBg: 'rgba(96,165,250,0.1)',  activeText: '#1d4ed8' };

  return (
    <div ref={ref} className="relative flex-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left"
        style={{
          borderColor: open ? accent.border : value ? `${accent.border}60` : 'var(--border)',
          borderStyle: value || open ? 'solid' : 'dashed',
          backgroundColor: open || value ? accent.bg : 'var(--bg-card)',
        }}
      >
        {value ? (
          <>
            <img src={value.icon} alt={value.vn} className="w-7 h-7 object-contain shrink-0" referrerPolicy="no-referrer" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-black truncate leading-tight" style={{ color: accent.text }}>{value.vn}</div>
              <div className="text-xs font-chinese leading-tight" style={{ color: 'var(--text-3)' }}>{value.zh}</div>
            </div>
          </>
        ) : (
          <span className="text-sm font-medium flex-1 text-center" style={{ color: 'var(--text-3)' }}>{placeholder}</span>
        )}
        <ChevronDown size={14} className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--text-3)' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14, ease: 'easeOut' }}
            className="absolute top-full mt-1.5 left-0 right-0 z-50 rounded-2xl shadow-xl overflow-hidden border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="p-1.5 max-h-64 overflow-y-auto custom-scrollbar">
              {classes.map(c => {
                const isActive = value?.zh === c.zh;
                return (
                  <button
                    key={c.zh}
                    onClick={() => { onChange(c); setOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors duration-100"
                    style={{ backgroundColor: isActive ? accent.activeBg : 'transparent', color: isActive ? accent.activeText : 'var(--text-2)' }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = isActive ? accent.activeBg : 'transparent'; }}
                  >
                    <img src={c.icon} alt={c.vn} className="w-7 h-7 object-contain shrink-0" referrerPolicy="no-referrer" />
                    <span className="text-sm font-bold">{c.vn}</span>
                    <span className="font-chinese text-xs ml-auto" style={{ color: 'var(--text-3)' }}>{c.zh}</span>
                    {isActive && <Check size={13} strokeWidth={3} className="shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ClassChangeCommand() {
  const [oldClass, setOldClass] = useState<ClassType | null>(null);
  const [newClass, setNewClass] = useState<ClassType | null>(null);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const command = oldClass && newClass
    ? `我已知流派转换的相关规则，自愿承担从${oldClass.zh}转为${newClass.zh}带来的后果和风险`
    : null;

  const handleCopy = () => {
    if (!command) return;
    navigator.clipboard.writeText(command);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Tạo câu lệnh */}
      <div className="rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>Tạo câu lệnh đổi phái</p>
        </div>
        <div className="p-4 space-y-4">
          {/* Dropdowns */}
          <div className="flex items-center gap-2">
            <ClassDropdown value={oldClass} onChange={setOldClass} placeholder="Phái hiện tại" accentColor="orange" />
            <div className="flex flex-col items-center gap-1 shrink-0">
              <ArrowRight size={13} style={{ color: 'var(--border-strong)' }} />
              <button
                onClick={() => { const t = oldClass; setOldClass(newClass); setNewClass(t); }}
                disabled={!oldClass && !newClass}
                title="Hoán đổi"
                className="p-1.5 rounded-lg cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f59e0b'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(245,158,11,0.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
              >
                <ArrowLeftRight size={13} />
              </button>
            </div>
            <ClassDropdown value={newClass} onChange={setNewClass} placeholder="Phái muốn chuyển" accentColor="blue" />
          </div>

          {/* Output */}
          <AnimatePresence mode="wait">
            {command ? (
              <motion.div key="cmd" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="space-y-2.5">
                <div
                  onClick={handleCopy} title="Click để sao chép"
                  className="p-4 rounded-xl border text-center cursor-pointer transition-colors"
                  style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                >
                  <p className="text-sm sm:text-base font-chinese leading-relaxed tracking-wide select-all" style={{ color: 'var(--text-1)' }}>{command}</p>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }} onClick={handleCopy}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm cursor-pointer transition-colors ${copiedCmd ? 'bg-green-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white'}`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span key={copiedCmd ? 'ok' : 'cp'} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -5, opacity: 0 }} transition={{ duration: 0.12 }} className="flex items-center gap-1.5">
                        {copiedCmd ? <><Check size={14} strokeWidth={3} />Đã sao chép!</> : <><Copy size={14} />Sao chép câu lệnh</>}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                  <button
                    onClick={() => { setOldClass(null); setNewClass(null); }}
                    title="Chọn lại"
                    className="px-3 py-2.5 rounded-xl border cursor-pointer transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-3)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ef4444'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.3)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.05)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
                <p className="text-center text-[11px]" style={{ color: 'var(--text-3)' }}>Dán câu lệnh vào ô xác nhận trong trò chơi để chuyển phái thành công.</p>
              </motion.div>
            ) : (
              <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-sm py-1" style={{ color: 'var(--text-3)' }}>
                Chọn phái hiện tại và phái muốn chuyển để tạo câu lệnh.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Danh sách phái */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-3)' }}>Danh sách môn phái</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {classes.map((c, i) => (
            <motion.div
              key={c.zh}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03, duration: 0.2 }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl border transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-card)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
            >
              <img src={c.icon} alt={c.vn} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              <div className="text-center">
                <div className="text-[20px] leading-tight select-text" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 100, fontStyle: 'normal' }}>{c.vn}</div>
                <div className="font-chinese text-[16px] leading-tight mt-0.5 select-text" style={{ color: 'var(--text-1)' }}>{c.zh}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
