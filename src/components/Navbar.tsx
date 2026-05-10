import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { Menu, X, Home, BookOpen, Swords, ChevronRight } from 'lucide-react';

const NAV_BG = '#333333';
const SUBMENU_BG = '#333333';
const ACCENT = '#00FFAA';

// Danh sách môn phái theo bảng chữ cái
const monPhaiItems = [
  { id: 'ky-nang-cuu-linh',    label: 'Cửu Linh' },
  { id: 'ky-nang-hong-am',     label: 'Hồng Âm' },
  { id: 'ky-nang-huyet-ha',    label: 'Huyết Hà' },
  { id: 'ky-nang-huyen-co',    label: 'Huyền Cơ' },
  { id: 'ky-nang-long-ngam',   label: 'Long Ngâm' },
  { id: 'ky-nang-than-tuong',  label: 'Thần Tương' },
  { id: 'ky-nang-thiet-y',     label: 'Thiết Y' },
  { id: 'ky-nang-thuong-lan',  label: 'Thương Lan' },
  { id: 'ky-nang-toai-mong',   label: 'Toái Mộng' },
  { id: 'ky-nang-to-van',      label: 'Tố Vấn' },
  { id: 'ky-nang-trieu-quang', label: 'Triều Quang' },
];

export default function Navbar({
  onNavigate, currentPage,
}: {
  onNavigate: (page: string) => void;
  currentPage: string;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [monPhaiHovered, setMonPhaiHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMonPhaiOpen, setMobileMonPhaiOpen] = useState(false);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const monPhaiTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdownDelayed = (key: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(key);
  };

  const closeDropdownDelayed = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setMonPhaiHovered(false);
    }, 120);
  };

  const cancelCloseDropdown = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
  };

  const openMonPhai = () => {
    if (monPhaiTimerRef.current) clearTimeout(monPhaiTimerRef.current);
    setMonPhaiHovered(true);
  };

  const closeMonPhai = () => {
    monPhaiTimerRef.current = setTimeout(() => {
      setMonPhaiHovered(false);
    }, 80);
  };

  const cancelCloseMonPhai = () => {
    if (monPhaiTimerRef.current) clearTimeout(monPhaiTimerRef.current);
  };

  // Các item bên trái — "Kỹ Năng Môn Phái" là separator/label, không navigate
  const leftItems = [
    { id: 'noi-cong',           label: 'Nội Công',            isLabel: false },
    { id: 'dac-tinh',           label: 'Đặc Tính',            isLabel: false },
    { id: 'tuyet-ky',           label: 'Tuyệt Kỹ',            isLabel: false },
    { id: 'ky-nang-quan-hiep',  label: 'Kỹ Năng Quần Hiệp',  isLabel: false },
    { id: 'ky-nang-bach-gia',   label: 'Kỹ Năng Giang Hồ',   isLabel: false },
    { id: 'ky-nang-mon-phai',   label: 'Kỹ Năng Môn Phái',   isLabel: true  },
    { id: 'cau-lenh-doi-phai',  label: 'Câu Lệnh Đổi Phái',  isLabel: false },
    { id: 'cau-lenh-doi-gioi',  label: 'Câu Lệnh Đổi Giới',  isLabel: false },
  ];

  const dungeonItems = [
    { id: 'pho-ban-12', label: 'Phó Bản 12 Người' },
    { id: 'pho-ban-6',  label: 'Phó Bản 6 Người'  },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setOpenDropdown(null);
    setMonPhaiHovered(false);
    setMobileOpen(false);
    setMobileMonPhaiOpen(false);
  };

  // chiều cao cố định mỗi hàng để alignment
  const ROW_H = 'h-[38px]';

  return (
    <>
      <nav className="sticky top-0 z-50 w-full" style={{ backgroundColor: NAV_BG }}>
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">

          {/* Desktop nav */}
          <div className="hidden md:flex items-center flex-1 justify-center">

            {/* Trang Chủ */}
            <button
              onClick={() => handleNavigate('home')}
              className="nav-link flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer"
            >
              <Home size={15} className="opacity-80 shrink-0" />
              Trang Chủ
            </button>

            {/* Tổng Hợp — dropdown 2 cột song song */}
            <div
              className="relative"
              onMouseEnter={() => { cancelCloseDropdown(); openDropdownDelayed('general'); }}
              onMouseLeave={closeDropdownDelayed}
            >
              <button className="nav-link flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer">
                <BookOpen size={15} className="opacity-80 shrink-0" />
                Tổng Hợp
              </button>
              <AnimatePresence>
                {openDropdown === 'general' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 top-full z-[100] shadow-lg"
                    style={{ backgroundColor: SUBMENU_BG }}
                    onMouseEnter={cancelCloseDropdown}
                    onMouseLeave={closeDropdownDelayed}
                  >
                    {/* Cột trái — kích thước cố định, không bị ảnh hưởng bởi cột phải */}
                    <div className="relative flex flex-col" style={{ minWidth: '190px' }}>
                      {leftItems.map(item => {
                        if (item.isLabel) {
                          return (
                            <div
                              key={item.id}
                              className={`${ROW_H} flex items-center justify-between px-4 text-sm font-semibold cursor-pointer select-none`}
                              style={{
                                color: monPhaiHovered ? ACCENT : 'white',
                                borderBottom: monPhaiHovered ? `2px solid ${ACCENT}` : '2px solid transparent',
                                transition: 'color 0.2s, border-color 0.2s',
                              }}
                              onMouseEnter={() => { cancelCloseMonPhai(); openMonPhai(); }}
                              onMouseLeave={closeMonPhai}
                            >
                              {item.label}
                              <ChevronRight
                                size={13}
                                className="opacity-60 shrink-0 transition-transform duration-200"
                                style={{ transform: monPhaiHovered ? 'rotate(0deg)' : 'rotate(0deg)', color: monPhaiHovered ? ACCENT : 'white' }}
                              />
                            </div>
                          );
                        }
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className={`nav-link ${ROW_H} w-full text-left px-4 text-sm cursor-pointer flex items-center`}
                            onMouseEnter={closeMonPhai}
                          >
                            {item.label}
                          </button>
                        );
                      })}

                      {/* Cột phải — absolute, không ảnh hưởng chiều cao cột trái */}
                      <AnimatePresence>
                        {monPhaiHovered && (
                          <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-0 left-full flex z-[110]"
                            style={{ backgroundColor: SUBMENU_BG }}
                            onMouseEnter={() => { cancelCloseMonPhai(); cancelCloseDropdown(); }}
                            onMouseLeave={closeMonPhai}
                          >
                            {/* Danh sách môn phái */}
                            <div className="flex flex-col" style={{ minWidth: '160px' }}>
                              {monPhaiItems.map((mp) => (
                                <button
                                  key={mp.id}
                                  onClick={() => handleNavigate(mp.id)}
                                  className={`nav-link ${ROW_H} w-full text-left px-4 text-sm cursor-pointer flex items-center`}
                                >
                                  {mp.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cơ Chế Phó Bản */}
            <div
              className="relative"
              onMouseEnter={() => { cancelCloseDropdown(); openDropdownDelayed('dungeon'); }}
              onMouseLeave={closeDropdownDelayed}
            >
              <button className="nav-link flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer">
                <Swords size={15} className="opacity-80 shrink-0" />
                Cơ Chế Phó Bản
              </button>
              <AnimatePresence>
                {openDropdown === 'dungeon' && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 top-full z-[100] min-w-[200px] list-none shadow-lg"
                    style={{ backgroundColor: SUBMENU_BG }}
                    onMouseEnter={cancelCloseDropdown}
                    onMouseLeave={closeDropdownDelayed}
                  >
                    {dungeonItems.map(item => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavigate(item.id)}
                          className="nav-link w-full text-left px-4 py-2.5 text-sm cursor-pointer block"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-link md:hidden p-2 cursor-pointer"
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
                { id: 'home', label: 'Trang Chủ', group: '', isLabel: false },
                ...dungeonItems.map(i => ({ ...i, group: 'Cơ Chế Phó Bản', isLabel: false })),
                ...leftItems.map(i => ({ ...i, group: 'Tổng Hợp' })),
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
                    {item.isLabel ? (
                      <div>
                        <button
                          onClick={() => setMobileMonPhaiOpen(o => !o)}
                          className="nav-link w-full text-left px-3 py-2.5 text-sm cursor-pointer flex items-center justify-between"
                          style={{ color: ACCENT }}
                        >
                          {item.label}
                          <span className={`text-xs opacity-50 transition-transform duration-200 inline-block ${mobileMonPhaiOpen ? 'rotate-90' : ''}`}>▶</span>
                        </button>
                        <AnimatePresence>
                          {mobileMonPhaiOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.15 }}
                              className="overflow-hidden"
                            >
                              {monPhaiItems.map(mp => (
                                <button
                                  key={mp.id}
                                  onClick={() => handleNavigate(mp.id)}
                                  className="nav-link w-full text-left pl-8 pr-3 py-2 text-sm cursor-pointer block"
                                  style={{ color: 'rgba(255,255,255,0.65)' }}
                                >
                                  {mp.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavigate(item.id)}
                        className="nav-link w-full text-left px-3 py-2.5 text-sm cursor-pointer"
                      >
                        {item.label}
                      </button>
                    )}
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

