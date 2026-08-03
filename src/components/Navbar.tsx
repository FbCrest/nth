import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { Menu, X, Home, BookOpen, Swords, ChevronRight, Video, Monitor, ShieldAlert } from 'lucide-react';

const ACCENT = '#00FFAA';

const monPhaiItems = [
  { id: 'ky-nang-cuu-linh',    label: 'Cửu Linh',    icon: '/images/icon-phai/cuu-linh.png',    color: '#8663aa' },
  { id: 'ky-nang-hong-am',     label: 'Hồng Âm',     icon: '/images/icon-phai/hong-am.png',     color: '#f4c70a' },
  { id: 'ky-nang-huyet-ha',    label: 'Huyết Hà',    icon: '/images/icon-phai/huyet-ha.png',    color: '#ea6b66' },
  { id: 'ky-nang-huyen-co',    label: 'Huyền Cơ',    icon: '/images/icon-phai/huyen-co.png',    color: '#ece69d' },
  { id: 'ky-nang-long-ngam',   label: 'Long Ngâm',   icon: '/images/icon-phai/long-ngam.png',   color: '#52bc9d' },
  { id: 'ky-nang-than-tuong',  label: 'Thần Tương',  icon: '/images/icon-phai/than-tuong.png',  color: '#446fb5' },
  { id: 'ky-nang-thiet-y',     label: 'Thiết Y',     icon: '/images/icon-phai/thiet-y.png',     color: '#fdd47d' },
  { id: 'ky-nang-thuong-lan',  label: 'Thương Lan',  icon: '/images/icon-phai/thuong-lang.png', color: '#756fb0' },
  { id: 'ky-nang-toai-mong',   label: 'Toái Mộng',   icon: '/images/icon-phai/toai-mong.png',   color: '#94cbd2' },
  { id: 'ky-nang-to-van',      label: 'Tố Vấn',      icon: '/images/icon-phai/to-van.png',      color: '#e5acaa' },
  { id: 'ky-nang-trieu-quang', label: 'Triều Quang', icon: '/images/icon-phai/trieu-quang.png', color: '#88b1de' },
];

const leftItems = [
  { id: 'chu-thien',          label: 'Chu Thiên Nội Công',  isLabel: false },
  { id: 'co-nghich-thuy-han', label: 'Cờ Nghịch Thủy Hàn', isLabel: false },
  { id: 'noi-cong',           label: 'Nội Công',            isLabel: false },
  { id: 'trang-bi',           label: 'Trang Bị',            isLabel: false },
  { id: 'thien-phu',          label: 'Thiên Phú Lĩnh Ngộ', isLabel: false },
  { id: 'vu-khi-thua-anh',    label: 'Vũ Khí Thừa Ảnh',    isLabel: false },
  { id: 'tuyet-ky',           label: 'Tuyệt Kỹ',           isLabel: false },
  { id: 'ky-nang-bach-gia',   label: 'Kỹ Năng Giang Hồ',   isLabel: false },
  { id: 'ky-nang-mon-phai',   label: 'Kỹ Năng Môn Phái',   isLabel: true  },
  { id: 'cau-lenh-doi-phai',  label: 'Câu Lệnh Đổi Phái',  isLabel: false },
  { id: 'cau-lenh-doi-gioi',  label: 'Câu Lệnh Đổi Giới',  isLabel: false },
];

const dungeonItems = [
  { id: 'pho-ban-12', label: 'Phó Bản 12 Người' },
  { id: 'pho-ban-6',  label: 'Phó Bản 6 Người'  },
];

const toolItems = [
  { label: 'Web Dịch Video Douyin',      url: 'https://nyra-translate.vercel.app/', icon: <Video size={14} /> },
  { label: 'Tool Quét & Dịch Màn Hình', url: 'https://drive.google.com/file/d/1RuzDaoPWJpOuszTlAeVhIrw0qAoNaNzJ/view?usp=sharing', icon: <Monitor size={14} /> },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.13, ease: 'easeIn' } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.035, duration: 0.18, ease: 'easeOut' } }),
};

const submenuVariants = {
  hidden: { opacity: 0, x: -8, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, x: -6, scale: 0.97, transition: { duration: 0.13, ease: 'easeIn' } },
};

function DropdownItem({ children, onClick, custom, isActive = false }: {
  children: React.ReactNode; onClick?: () => void; custom: number; isActive?: boolean;
}) {
  return (
    <motion.button
      custom={custom} variants={itemVariants} onClick={onClick}
      className="w-full text-left px-4 py-2 text-sm cursor-pointer flex items-center gap-2 rounded-md relative overflow-hidden"
      style={{
        color: isActive ? ACCENT : 'rgba(255,255,255,0.72)',
        backgroundColor: isActive ? 'rgba(0,255,170,0.10)' : 'transparent',
        transition: 'background-color 0.15s, color 0.15s',
      }}
      whileHover={{ x: 4, color: ACCENT, backgroundColor: 'rgba(0,255,170,0.08)' } as never}
      transition={{ duration: 0.15 }}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full" style={{ backgroundColor: ACCENT }} />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

function NavButton({ children, onClick, isActive = false }: {
  children: React.ReactNode; onClick?: () => void; isActive?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="nav-btn relative flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer"
      style={{ color: isActive ? ACCENT : 'white' }}
    >
      {children}
      {/* Active underline — luôn hiển thị khi đang ở trang này */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            key="active-line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute bottom-1.5 left-1/2 pointer-events-none"
            style={{
              width: '60%', height: '2px', borderRadius: '999px',
              background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
              translateX: '-50%',
            }}
          />
        )}
      </AnimatePresence>
    </button>
  );
}

/* ── General dropdown + submenu ── */
function GeneralDropdown({ openDropdown, leftItems, monPhaiItems, isActive, handleNavigate,
  cancelCloseDropdown, closeDropdownDelayed, openDropdownNow }: {
  openDropdown: string | null;
  leftItems: Array<{ id: string; label: string; isLabel: boolean }>;
  monPhaiItems: Array<{ id: string; label: string; icon: string; color: string }>;
  isActive: (id: string) => boolean;
  handleNavigate: (id: string) => void;
  cancelCloseDropdown: () => void;
  closeDropdownDelayed: () => void;
  openDropdownNow: (key: string) => void;
}) {
  const [monPhaiOpen, setMonPhaiOpen] = useState(false);
  const monPhaiTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMP   = () => { if (monPhaiTimer.current) clearTimeout(monPhaiTimer.current); setMonPhaiOpen(true); };
  const closeMP  = () => { monPhaiTimer.current = setTimeout(() => setMonPhaiOpen(false), 100); };
  const cancelMP = () => { if (monPhaiTimer.current) clearTimeout(monPhaiTimer.current); };

  return (
    <div className="relative"
      onMouseEnter={() => { cancelCloseDropdown(); openDropdownNow('general'); }}
      onMouseLeave={() => { closeDropdownDelayed(); closeMP(); }}
    >
      <NavButton isActive={leftItems.some(i => !i.isLabel && isActive(i.id)) || monPhaiItems.some(i => isActive(i.id))}>
        <BookOpen size={14} className="opacity-75 shrink-0" />
        Tổng Hợp
      </NavButton>

      <AnimatePresence>
        {openDropdown === 'general' && (
          /* Wrapper flex: hai panel nằm cạnh nhau, cùng top, cùng bottom */
          <motion.div
            variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
            className="absolute left-0 z-[400] flex items-stretch"
            style={{ top: 'calc(100% + 6px)', gap: '6px' }}
          >
            {/* Panel trái */}
            <div
              className="rounded-xl flex flex-col"
              style={{ backgroundColor: 'rgba(22,23,28,0.95)', backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.6)', padding: '8px', minWidth: '210px' }}
              onMouseEnter={cancelCloseDropdown} onMouseLeave={closeDropdownDelayed}
            >
              <motion.div initial="hidden" animate="visible" className="flex flex-col gap-0.5 flex-1">
                {leftItems.map((item, i) => {
                  if (item.isLabel) return (
                    <div key={item.id}>
                      <div className="my-1.5 mx-1" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
                      <motion.div custom={i} variants={itemVariants}
                        className="flex items-center justify-between px-4 py-2 text-sm font-semibold rounded-md cursor-pointer select-none relative"
                        style={{ color: monPhaiOpen ? ACCENT : 'rgba(255,255,255,0.82)' }}
                        onMouseEnter={openMP} onMouseLeave={closeMP}
                      >
                        <motion.span className="absolute inset-0 rounded-md" style={{ backgroundColor: 'rgba(0,255,170,0.08)' }}
                          initial={{ opacity: 0 }} animate={{ opacity: monPhaiOpen ? 1 : 0 }} transition={{ duration: 0.15 }} />
                        <span className="relative z-10">{item.label}</span>
                        <motion.span className="relative z-10" animate={{ x: monPhaiOpen ? 2 : 0 }} transition={{ duration: 0.15 }}>
                          <ChevronRight size={13} style={{ color: monPhaiOpen ? ACCENT : 'rgba(255,255,255,0.35)' }} />
                        </motion.span>
                      </motion.div>
                      <div className="my-1.5 mx-1" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
                    </div>
                  );
                  return (
                    <DropdownItem key={item.id} custom={i} onClick={() => handleNavigate(item.id)} isActive={isActive(item.id)}>
                      {item.label}
                    </DropdownItem>
                  );
                })}
              </motion.div>
            </div>

            {/* Panel phải — môn phái, cùng chiều cao panel trái nhờ items-stretch */}
            <AnimatePresence>
              {monPhaiOpen && (
                <motion.div
                  variants={submenuVariants} initial="hidden" animate="visible" exit="exit"
                  className="rounded-xl flex flex-col"
                  style={{ backgroundColor: 'rgba(22,23,28,0.97)', backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.65)', padding: '8px', width: '160px' }}
                  onMouseEnter={() => { cancelMP(); cancelCloseDropdown(); }} onMouseLeave={closeMP}
                >
                  <div className="px-2 pb-2 flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>Môn Phái</span>
                    <div className="flex-1" style={{ height: 1, backgroundColor: 'rgba(0,255,170,0.18)' }} />
                  </div>
                  <motion.div initial="hidden" animate="visible" className="flex flex-col gap-0.5">
                    {monPhaiItems.map((mp, mi) => (
                      <motion.button
                        key={mp.id} custom={mi} variants={itemVariants}
                        onClick={() => handleNavigate(mp.id)}
                        className="w-full text-left px-3 py-1.5 text-sm cursor-pointer flex items-center gap-2.5 rounded-md relative overflow-hidden"
                        style={{
                          color: isActive(mp.id) ? mp.color : 'rgba(255,255,255,0.72)',
                          backgroundColor: isActive(mp.id) ? `${mp.color}18` : 'transparent',
                          transition: 'background-color 0.15s, color 0.15s',
                        }}
                        whileHover={{ x: 4, color: mp.color, backgroundColor: `${mp.color}18` } as never}
                        transition={{ duration: 0.15 }}
                      >
                        {isActive(mp.id) && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full"
                            style={{ backgroundColor: mp.color }} />
                        )}
                        <img src={mp.icon} alt={mp.label} className="relative z-10 shrink-0 rounded-sm"
                          style={{ width: 22, height: 22, objectFit: 'contain',
                            filter: isActive(mp.id) ? `drop-shadow(0 0 4px ${mp.color}99)` : 'brightness(0.85)' }} />
                        <span className="relative z-10">{mp.label}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile helper components ── */
function MobileGroupLabel({ label }: { label: string }) {
  return (
    <p className="px-3 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest"
      style={{ color: ACCENT, opacity: 0.7 }}>
      {label}
    </p>
  );
}

function MobileItem({ label, icon, isActive, onClick }: {
  label: string; icon?: React.ReactNode; isActive: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 rounded-xl text-left transition-colors"
      style={{
        minHeight: 44,
        color: isActive ? ACCENT : 'rgba(255,255,255,0.82)',
        backgroundColor: isActive ? 'rgba(0,255,170,0.08)' : 'transparent',
        borderLeft: isActive ? `2px solid ${ACCENT}` : '2px solid transparent',
      }}
    >
      {icon && <span style={{ opacity: isActive ? 1 : 0.55, flexShrink: 0 }}>{icon}</span>}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

export default function Navbar({ onNavigate, currentPage }: {
  onNavigate: (page: string) => void; currentPage: string;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMonPhaiOpen, setMobileMonPhaiOpen] = useState(false);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  const bgOpacity   = useTransform(scrollY, [0, 60], [0.55, 0.82]);
  const borderAlpha = useTransform(scrollY, [0, 60], [0.06, 0.14]);

  const openDropdownNow = (key: string) => { if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current); setOpenDropdown(key); };
  const closeDropdownDelayed = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };
  const cancelCloseDropdown = () => { if (dropdownTimerRef.current) { clearTimeout(dropdownTimerRef.current); dropdownTimerRef.current = null; } };

  const handleNavigate = (id: string) => {
    onNavigate(id); setOpenDropdown(null); setMobileOpen(false); setMobileMonPhaiOpen(false);
  };
  const isActive = (id: string) => currentPage === id || (id === 'home' && currentPage === 'home');

  return (
    <>
      <motion.nav className="sticky top-0 z-[300] w-full"
        style={{ backgroundColor: `rgba(28,29,34,${bgOpacity})`, backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)', borderBottom: `1px solid rgba(255,255,255,${borderAlpha})`,
          boxShadow: '0 4px 24px rgba(0,0,0,0.35)' }}
      >
        <div className="max-w-[1400px] mx-auto px-4 flex items-center">

          <div className="hidden md:flex items-center flex-1 justify-center">
            <NavButton onClick={() => handleNavigate('home')} isActive={isActive('home')}>
              <Home size={14} className="opacity-75 shrink-0" />Trang Chủ
            </NavButton>
            <GeneralDropdown openDropdown={openDropdown} leftItems={leftItems} monPhaiItems={monPhaiItems}
              isActive={isActive} handleNavigate={handleNavigate} cancelCloseDropdown={cancelCloseDropdown}
              closeDropdownDelayed={closeDropdownDelayed} openDropdownNow={openDropdownNow} />
            <div className="relative" onMouseEnter={() => { cancelCloseDropdown(); openDropdownNow('dungeon'); }} onMouseLeave={closeDropdownDelayed}>
              <NavButton isActive={dungeonItems.some(i => isActive(i.id))}>
                <Swords size={14} className="opacity-75 shrink-0" />Cơ Chế Phó Bản
              </NavButton>
              <AnimatePresence>
                {openDropdown === 'dungeon' && (
                  <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                    className="absolute left-0 z-[400] rounded-xl"
                    style={{ top: 'calc(100% + 6px)', backgroundColor: 'rgba(22,23,28,0.92)', backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.09)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.55)', padding: '8px', minWidth: '200px' }}
                    onMouseEnter={cancelCloseDropdown} onMouseLeave={closeDropdownDelayed}
                  >
                    <motion.div initial="hidden" animate="visible" className="flex flex-col gap-0.5">
                      {dungeonItems.map((item, i) => (
                        <DropdownItem key={item.id} custom={i} onClick={() => handleNavigate(item.id)} isActive={isActive(item.id)}>
                          {item.label}
                        </DropdownItem>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="https://raid-titanic.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="nav-btn relative flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer" style={{ color: 'white' }}>
              <ShieldAlert size={14} style={{ opacity: 0.75, flexShrink: 0 }} />Web Xếp Team Phó Bản
            </a>
            {toolItems.map(item => (
              <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer"
                className="nav-btn flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer" style={{ color: 'white' }}>
                <span style={{ opacity: 0.75, flexShrink: 0 }}>{item.icon}</span>{item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center ml-auto">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-link md:hidden p-2 cursor-pointer" aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mobileOpen ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.14 }}>
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden sticky top-14 z-[290]"
            style={{
              backgroundColor: 'rgba(18,19,24,0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
              maxHeight: 'calc(100dvh - 56px)',
              overflowY: 'auto',
              overflowX: 'hidden',
              paddingBottom: 'env(safe-area-inset-bottom, 8px)',
            }}
          >
            <div className="px-3 py-2">

              {/* Trang Chủ */}
              <MobileItem
                label="Trang Chủ"
                icon={<Home size={16} />}
                isActive={isActive('home')}
                onClick={() => handleNavigate('home')}
              />

              {/* ── Tổng Hợp ── */}
              <MobileGroupLabel label="Tổng Hợp" />
              {leftItems.filter(i => !i.isLabel).map(item => (
                <MobileItem
                  key={item.id}
                  label={item.label}
                  isActive={isActive(item.id)}
                  onClick={() => handleNavigate(item.id)}
                />
              ))}

              {/* Kỹ Năng Môn Phái — accordion */}
              <div>
                <button
                  onClick={() => setMobileMonPhaiOpen(o => !o)}
                  className="w-full flex items-center justify-between px-3 rounded-xl transition-colors"
                  style={{
                    minHeight: 44,
                    color: mobileMonPhaiOpen ? ACCENT : 'rgba(255,255,255,0.82)',
                    backgroundColor: mobileMonPhaiOpen ? 'rgba(0,255,170,0.07)' : 'transparent',
                  }}
                >
                  <span className="text-sm font-medium">Kỹ Năng Môn Phái</span>
                  <motion.span
                    animate={{ rotate: mobileMonPhaiOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: ACCENT, opacity: 0.7 }}
                  >
                    <ChevronRight size={15} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileMonPhaiOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {/* Grid 2 cột môn phái với icon + màu phái */}
                      <div className="grid grid-cols-2 gap-1 px-1 py-1.5">
                        {monPhaiItems.map(mp => (
                          <button
                            key={mp.id}
                            onClick={() => handleNavigate(mp.id)}
                            className="flex items-center gap-2 px-3 rounded-xl text-left transition-colors"
                            style={{
                              minHeight: 40,
                              color: isActive(mp.id) ? mp.color : 'rgba(255,255,255,0.72)',
                              backgroundColor: isActive(mp.id) ? `${mp.color}18` : 'rgba(255,255,255,0.04)',
                              border: isActive(mp.id) ? `1px solid ${mp.color}40` : '1px solid transparent',
                            }}
                          >
                            <img src={mp.icon} alt={mp.label}
                              style={{ width: 20, height: 20, objectFit: 'contain', flexShrink: 0,
                                filter: isActive(mp.id) ? `drop-shadow(0 0 3px ${mp.color}99)` : 'brightness(0.85)' }} />
                            <span className="text-xs font-medium leading-tight">{mp.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Cơ Chế Phó Bản ── */}
              <MobileGroupLabel label="Cơ Chế Phó Bản" />
              {dungeonItems.map(item => (
                <MobileItem
                  key={item.id}
                  label={item.label}
                  icon={<Swords size={15} />}
                  isActive={isActive(item.id)}
                  onClick={() => handleNavigate(item.id)}
                />
              ))}

              {/* ── Xếp Team & Công Cụ ── */}
              <MobileGroupLabel label="Xếp Team & Công Cụ" />
              <a href="https://raid-titanic.vercel.app/" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 rounded-xl transition-colors"
                style={{ minHeight: 44, color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}>
                <span style={{ opacity: 0.7, flexShrink: 0 }}><ShieldAlert size={15} /></span>
                <span className="text-sm">Web Xếp Team Phó Bản</span>
              </a>
              {toolItems.map(item => (
                <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 rounded-xl transition-colors"
                  style={{ minHeight: 44, color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}>
                  <span style={{ opacity: 0.7, flexShrink: 0 }}>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}

              <div className="h-3" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
