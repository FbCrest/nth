/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DataGrid from './components/DataGrid';
import ClassChangeCommand from './components/cau-lenh-doi-phai';
import DungeonGuide from './components/huong-dan-pho-ban';
import CauLenhDoiGioi from './components/cau-lenh-doi-gioi';
import { GameItem } from './types';
import { noiCongData } from './data/noi-cong';
import { dacTinhData } from './data/dac-tinh';
import { tuyetKyData } from './data/tuyet-ky';
import { kyNangCuuLinhData } from './data/ky-nang-cuu-linh';
import { kyNangGiangHoData } from './data/ky-nang-giang-ho';
import { kyNangHongAmData } from './data/ky-nang-hong-am';
import { kyNangLongNgamData } from './data/ky-nang-long-ngam';
import { kyNangThanTuongData } from './data/ky-nang-than-tuong';
import { kyNangThuongLanData } from './data/ky-nang-thuong-lan';
import { kyNangToaiMongData } from './data/ky-nang-toai-mong';

const mockData: Record<string, GameItem[]> = {
  'noi-cong': noiCongData,
  'dac-tinh': dacTinhData,
  'tuyet-ky': tuyetKyData,
  'ky-nang-cuu-linh': kyNangCuuLinhData,
  'ky-nang-hong-am': kyNangHongAmData,
  'ky-nang-long-ngam': kyNangLongNgamData,
  'ky-nang-than-tuong': kyNangThanTuongData,
  'ky-nang-thuong-lan': kyNangThuongLanData,
  'ky-nang-toai-mong': kyNangToaiMongData,
  'ky-nang-quan-hiep': [
    { id: 'qh1', name: 'Bát Quái Chưởng', category: 'Quần hiệp', details: 'Kỹ năng từ giang hồ, biến hóa khôn lường.', icon: '🖐️' },
  ],
  'ky-nang-bach-gia': kyNangGiangHoData,
};

const categoryTitles: Record<string, string> = {
  'noi-cong': 'Nội công',
  'dac-tinh': 'Đặc tính',
  'tuyet-ky': 'Tuyệt kỹ',
  'ky-nang-cuu-linh': 'Kỹ năng Cửu Linh',
  'ky-nang-hong-am': 'Kỹ năng Hồng Âm',
  'ky-nang-long-ngam': 'Kỹ năng Long Ngâm',
  'ky-nang-than-tuong': 'Kỹ năng Thần Tượng',
  'ky-nang-thuong-lan': 'Kỹ năng Thương Lan',
  'ky-nang-toai-mong': 'Kỹ năng Toái Mộng',
  'ky-nang-quan-hiep': 'Kỹ năng quần hiệp',
  'ky-nang-bach-gia': 'Kỹ Năng Giang Hồ',
};

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const isHome = currentPage === 'home';

  const handleNavigate = (page: string) => {
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ backgroundColor: '#333333' }}>
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      {isHome ? (
        <>
          <main className="flex-1 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            <Home />
          </main>
          <Footer />
        </>
      ) : (
        <main className="flex-1 overflow-y-auto" style={{ backgroundColor: 'var(--bg-page)', height: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/cau-lenh-doi-phai" element={<ClassChangeCommand />} />
                <Route path="/cau-lenh-doi-gioi" element={<CauLenhDoiGioi />} />
                <Route path="/pho-ban-12" element={<DungeonGuide type="12-player" />} />
                <Route path="/pho-ban-6" element={<DungeonGuide type="6-player" />} />
                {Object.keys(mockData).map(key => (
                  <Route
                    key={key}
                    path={`/${key}`}
                    element={
                      <DataGrid
                        title={categoryTitles[key] || 'Kỹ năng'}
                        items={mockData[key] as GameItem[]}
                        isNoiCong={key === 'noi-cong'}
                        isTuyetKy={key === 'tuyet-ky'}
                      />
                    }
                  />
                ))}
              </Routes>
            </div>
            <Footer />
          </div>
        </main>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
