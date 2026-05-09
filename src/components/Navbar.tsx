import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
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
  { id: 'ky-nang-than-tuong',  label: 'Thần Tượng' },
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
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMonPhaiOpen, setMobileMonPhaiOpen] = useState(false);

  const subMenuItems = [
    { id: 'noi-cong', label: 'Nội Công' },
    { id: 'dac-tinh', label: 'Đặc Tính' },
    { id: 'tuyet-ky', label: 'Tuyệt Kỹ' },
    { id: 'ky-nang-quan-hiep', label: 'Kỹ Năng Quần Hiệp' },
    { id: 'ky-nang-bach-gia', label: 'Kỹ Năng Giang Hồ' },
    { id: 'ky-nang-mon-phai', label: 'Kỹ Năng Môn Phái', hasChildren: true },
    { id: 'cau-lenh-doi-phai', label: 'Câu Lệnh Đổi Phái' },
    { id: 'cau-lenh-doi-gioi', label: 'Câu Lệnh Đổi Giới' },
  ];

  const dungeonItems = [
    { id: 'pho-ban-12', label: 'Phó Bản 12 Người' },
    { id: 'pho-ban-6', label: 'Phó Bản 6 Người' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setOpenDropdown(null);
    setOpenSubMenu(null);
    setMobileOpen(false);
    setMobileMonPhaiOpen(false);
  };

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

            {/* Tổng Hợp */}
            <div
              className="relative"
              onMouseEnter={() => { setOpenDropdown('general'); }}
              onMouseLeave={() => { setOpenDropdown(null); setOpenSubMenu(null); }}
            >
              <button className="nav-link flex items-center gap-1.5 px-4 py-3 text-sm font-medium cursor-pointer">
                <BookOpen size={15} className="opacity-80 shrink-0" />
                Tổng Hợp
              </button>
              <AnimatePresence>
                {openDropdown === 'general' && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 top-full z-[100] min-w-[200px] list-none shadow-lg"
                    style={{ backgroundColor: SUBMENU_BG }}
                  >
                    {subMenuItems.map(item => (
                      <li key={item.id} className="relative">
                        {item.hasChildren ? (
                          <div
                            onMouseEnter={() => setOpenSubMenu('mon-phai')}
                            onMouseLeave={() => setOpenSubMenu(null)}
                          >
                            <button
                              className="nav-link w-full text-left px-4 py-2.5 text-sm cursor-pointer flex items-center justify-between gap-2"
                              style={{ color: openSubMenu === 'mon-phai' ? ACCENT : undefined }}
                            >
                              {item.label}
                              <ChevronRight size={13} className="opacity-50 shrink-0" />
                            </button>
                            <AnimatePresence>
                              {openSubMenu === 'mon-phai' && (
                                <motion.ul
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -6 }}
                                  transition={{ duration: 0.13, ease: 'easeOut' }}
                                  className="absolute left-full top-0 z-[110] shadow-lg grid grid-cols-2"
                                  style={{ backgroundColor: SUBMENU_BG, minWidth: '320px' }}
                                >
                                  {monPhaiItems.map(mp => (
                                    <li key={mp.id}>
                                      <button
                                        onClick={() => handleNavigate(mp.id)}
                                        className="nav-link w-full text-left px-4 py-2.5 text-sm cursor-pointer block"
                                      >
                                        {mp.label}
                                      </button>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleNavigate(item.id)}
                            className="nav-link w-full text-left px-4 py-2.5 text-sm cursor-pointer block"
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Cơ Chế Phó Bản */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('dungeon')}
              onMouseLeave={() => setOpenDropdown(null)}
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
                { id: 'home', label: 'Trang Chủ', group: '', hasChildren: false },
                ...dungeonItems.map(i => ({ ...i, group: 'Cơ Chế Phó Bản', hasChildren: false })),
                ...subMenuItems.map(i => ({ ...i, group: 'Tổng Hợp', hasChildren: i.hasChildren || false })),
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
                    {item.hasChildren ? (
                      <div>
                        <button
                          onClick={() => setMobileMonPhaiOpen(o => !o)}
                          className="nav-link w-full text-left px-3 py-2.5 text-sm cursor-pointer flex items-center justify-between"
                        >
                          {item.label}
                          <ChevronRight size={13} className={`opacity-50 transition-transform duration-200 ${mobileMonPhaiOpen ? 'rotate-90' : ''}`} />
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
