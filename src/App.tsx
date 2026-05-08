/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DataGrid from './components/DataGrid';
import ClassChangeCommand from './components/ClassChangeCommand';
import DungeonGuide from './components/DungeonGuide';
import { GameItem } from './types';
import { noiCongData } from './data/noi-cong';

const mockData: Record<string, GameItem[]> = {
  'noi-cong': noiCongData,
  'dac-tinh': [
    { id: 'dt1', name: 'Bất Khuất', category: 'Đặc tính', details: 'Khi máu thấp sẽ tăng phòng thủ.', icon: '🛡️' },
  ],
  'tuyet-ky': [
    { id: 'tk1', name: 'Hồng Liên Chưởng', category: 'Tuyệt kỹ', details: 'Kỹ năng tuyệt thế gây sát thương hỏa cực lớn.', icon: '🔥' },
  ],
  'ky-nang-mon-phai': [
    { id: 'mp1', name: 'Vạn Kiếm Quy Tông', category: 'Môn phái', sect: 'Kiếm Phái', details: 'Vạn kiếm tề phát, uy lực vô song.', icon: '⚔️' },
  ],
  'ky-nang-quan-hiep': [
    { id: 'qh1', name: 'Bát Quái Chưởng', category: 'Quần hiệp', details: 'Kỹ năng từ giang hồ, biến hóa khôn lường.', icon: '🖐️' },
  ],
  'ky-nang-bach-gia': [
    { id: 'bg1', name: 'Liên Hoàn Cước', category: 'Bách gia', details: 'Kỹ năng dân gian, tốc độ thần sầu.', icon: '👣' },
  ],
};

const categoryTitles: Record<string, string> = {
  'noi-cong': 'Nội công',
  'dac-tinh': 'Đặc tính',
  'tuyet-ky': 'Tuyệt kỹ',
  'ky-nang-mon-phai': 'Kỹ năng môn phái',
  'ky-nang-quan-hiep': 'Kỹ năng quần hiệp',
  'ky-nang-bach-gia': 'Kỹ năng bách gia',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#333333' }}>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow" style={{ backgroundColor: currentPage === 'home' ? 'transparent' : 'var(--bg-page)' }}>
        {currentPage === 'home' ? (
          <Home />
        ) : currentPage === 'cau-lenh-doi-phai' ? (
          <ClassChangeCommand />
        ) : currentPage === 'pho-ban-12' ? (
          <DungeonGuide type="12-player" />
        ) : currentPage === 'pho-ban-6' ? (
          <DungeonGuide type="6-player" />
        ) : (
          <DataGrid
            title={categoryTitles[currentPage] || 'Kỹ năng'}
            items={mockData[currentPage] || []}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
