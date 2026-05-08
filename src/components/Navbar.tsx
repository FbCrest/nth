import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Home, BookOpen, Swords } from 'lucide-react';
const ACCENT = '#00FFAA';
const ACCENT_GLOW = 'rgba(0,255,170,0.7)';
const NAV_BG = '#333333';
const SUBMENU_BG = '#333333';

export default function Navbar({
  onNavigate, currentPage
}: {
  onNavigate: (page: string) => void;
  currentPage: string;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const subMenuItems = [
    { id: 'noi-cong', label: 'Nội Công' },
    { id: 'dac-tinh', label: 'Đặc Tính' },
    { id: 'tuyet-ky', label: 'Tuyệt Kỹ' },
    { id: 'ky-nang-quan-hiep', label: 'Kỹ Năng Quần Hiệp' },
    { id: 'ky-nang-bach-gia', label: 'Kỹ Năng Bách Gia' },
    { id: 'ky-nang-mon-phai', label: 'Kỹ Năng Môn Phái' },
    { id: 'cau-lenh-doi-phai', label: 'Câu Lệnh Đổi Phái' },
  ];
  const dungeonItems = [
    { id: 'pho-ban-12', label: 'Phó Bản 12 Người' },
    { id: 'pho-ban-6', label: 'Phó Bản 6 Người' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // Shared link style logic
  const linkStyle = (isActive: boolean) => ({
    color: isActive ? ACCENT : 'white',
    textShadow: isActive ? `0 0 10px ${ACCENT_GLOW}` : 'none',
  });

  const onLinkEnter = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.color = ACCENT;
    el.style.textShadow = `0 0 10px ${ACCENT_GLOW}`;
    const bar = el.querySelector('.underline-bar') as HTMLElement | null;
    if (bar) { bar.style.transform = 'scaleX(1)'; bar.style.transformOrigin = 'bottom left'; }
  };

  const onLinkLeave = (e: React.MouseEvent, isActive: boolean) => {
    const el = e.currentTarget as HTMLElement;
    if (!isActive) { el.style.color = 'white'; el.style.textShadow = 'none'; }
    const bar = el.querySelector('.underline-bar') as HTMLElement | null;
    if (bar && !isActive) { bar.style.transform = 'scaleX(0)'; bar.style.transformOrigin = 'bottom right'; }
  };

  const NavLink = ({ id, label, icon: Icon }: { id: string; label: string; icon?: React.ElementType }) => {
    const isActive = currentPage === id;
    return (
      <button
        onClick={() => handleNavigate(id)}
        className="relative flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer overflow-hidden transition-all duration-300 whitespace-nowrap"
        style={linkStyle(isActive)}
        onMouseEnter={onLinkEnter}
        onMouseLeave={e => onLinkLeave(e, isActive)}
      >
        {Icon && <Icon size={15} className="opacity-80 shrink-0" />}
        {label}
        <span className="underline-bar absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 ease-out"
          style={{ backgroundColor: ACCENT, transform: isActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: isActive ? 'bottom left' : 'bottom right' }} />
      </button>
    );
  };

  const NavDropdown = ({ label, items, id, icon: Icon }: { label: string; items: { id: string; label: string }[]; id: string; icon?: React.ElementType }) => {
    const isOpen = openDropdown === id;
    const isActive = items.some(i => i.id === currentPage);
    return (
      <div className="relative" onMouseEnter={() => setOpenDropdown(id)} onMouseLeave={() => setOpenDropdown(null)}>
        <button
          className="relative flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer overflow-hidden transition-all duration-300 whitespace-nowrap"
          style={linkStyle(isActive)}
          onMouseEnter={onLinkEnter}
          onMouseLeave={e => onLinkLeave(e, isActive)}
        >
          {Icon && <Icon size={15} className="opacity-80 shrink-0" />}
          {label}
          <span className="underline-bar absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 ease-out"
            style={{ backgroundColor: ACCENT, transform: isActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: isActive ? 'bottom left' : 'bottom right' }} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-0 top-full z-[100] min-w-[180px] list-none py-2 shadow-lg"
              style={{ backgroundColor: SUBMENU_BG }}
            >
              {items.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className="relative w-full text-left px-4 py-2.5 text-sm whitespace-nowrap cursor-pointer transition-all duration-200 overflow-hidden"
                    style={{ color: currentPage === item.id ? ACCENT : 'white', textShadow: currentPage === item.id ? `0 0 10px ${ACCENT_GLOW}` : 'none' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = ACCENT;
                      el.style.textShadow = `0 0 10px ${ACCENT_GLOW}`;
                      const bar = el.querySelector('.underline-bar') as HTMLElement | null;
                      if (bar) { bar.style.transform = 'scaleX(1)'; bar.style.transformOrigin = 'bottom left'; }
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      const isItemActive = currentPage === item.id;
                      el.style.color = isItemActive ? ACCENT : 'white';
                      el.style.textShadow = isItemActive ? `0 0 10px ${ACCENT_GLOW}` : 'none';
                      const bar = el.querySelector('.underline-bar') as HTMLElement | null;
                      if (bar && !isItemActive) { bar.style.transform = 'scaleX(0)'; bar.style.transformOrigin = 'bottom right'; }
                    }}
                  >
                    {item.label}
                    <span
                      className="underline-bar absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 ease-out"
                      style={{
                        backgroundColor: ACCENT,
                        transform: currentPage === item.id ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: currentPage === item.id ? 'bottom left' : 'bottom right',
                      }}
                    />
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full" style={{ backgroundColor: NAV_BG }}>
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigate('home')} className="flex items-center gap-2.5 cursor-pointer py-2 group">
            <div className="w-8 h-8 bg-linear-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm">N</span>
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-tight text-white group-hover:text-[#00FFAA] transition-colors duration-300">
              NGHỊCH THỦY HÀN
            </span>
          </button>

          {/* Desktop nav — centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <NavLink id="home" label="Trang Chủ" icon={Home} />
            <NavDropdown label="Tổng Hợp" items={subMenuItems} id="general" icon={BookOpen} />
            <NavDropdown label="Cơ Chế Phó Bản" items={dungeonItems} id="dungeon" icon={Swords} />
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 cursor-pointer text-white transition-colors duration-300"
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = ACCENT}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'white'}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mobileOpen ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.14 }}>
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden sticky top-14 z-40 overflow-hidden"
            style={{ backgroundColor: SUBMENU_BG }}
          >
            <div className="px-4 py-2 space-y-0.5">
              {[
                { id: 'home', label: 'Trang Chủ', group: '' },
                ...dungeonItems.map(i => ({ ...i, group: 'Cơ Chế Phó Bản' })),
                ...subMenuItems.map(i => ({ ...i, group: 'Tổng Hợp' })),
              ].map((item, idx, arr) => {
                const prev = arr[idx - 1];
                const showGroup = item.group && prev?.group !== item.group;
                return (
                  <div key={item.id}>
                    {showGroup && (
                      <p className="px-3 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>
                        {item.group}
                      </p>
                    )}
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className="w-full text-left px-3 py-2.5 text-sm cursor-pointer transition-all duration-200"
                      style={{ color: currentPage === item.id ? ACCENT : 'white', textShadow: currentPage === item.id ? `0 0 10px ${ACCENT_GLOW}` : 'none' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = ACCENT; (e.currentTarget as HTMLElement).style.textShadow = `0 0 10px ${ACCENT_GLOW}`; }}
                      onMouseLeave={e => {
                        const isActive = currentPage === item.id;
                        (e.currentTarget as HTMLElement).style.color = isActive ? ACCENT : 'white';
                        (e.currentTarget as HTMLElement).style.textShadow = isActive ? `0 0 10px ${ACCENT_GLOW}` : 'none';
                      }}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
