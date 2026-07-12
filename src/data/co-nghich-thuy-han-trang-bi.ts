export type TrangBiCategory = 'Tất cả' | 'Tấn công' | 'Phòng thủ' | 'Đặc biệt';

export interface CoNghichTrangBi {
  id: string;
  name: string;
  nameZh: string;
  category: Exclude<TrangBiCategory, 'Tất cả'>;
  imageUrl: string;
  /** Danh sách từ điều khoản (词条), mỗi phần tử là 1 dòng */
  effects: string[];
  /** Mô tả thêm nếu có */
  description?: string;
}

export const coNghichTrangBiData: CoNghichTrangBi[] = [
  // ── TẤN CÔNG ──
  {
    id: 'tinh-thiet-truong-kiem',
    name: 'Tinh Thiết Trường Kiếm',
    nameZh: '精铁长剑',
    category: 'Tấn công',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Tấn công ✗: +20%',
    ],
    description: 'Thanh kiếm rèn từ tinh thiết, lưỡi sắc bén chứa đựng sát khí.',
  },
  {
    id: 'bich-ngoc-ngon-cu',
    name: 'Bích Ngọc Ngón Cự',
    nameZh: '碧玉戒指',
    category: 'Tấn công',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Tấn công ✗: +15%',
      'Tốc độ tấn công: +8%',
    ],
  },
  {
    id: 'van-chuc-thu',
    name: 'Vạn Chức Thư',
    nameZh: '武林风云万职书',
    category: 'Tấn công',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Tấn công ✗: +12%',
      'Xuyên giáp: +5%',
    ],
  },
  {
    id: 'pho-sat-lien',
    name: 'Phổ Sát Liên',
    nameZh: '傾杀链',
    category: 'Tấn công',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Tấn công ✗: +25%',
      'Bạo kích: +10%',
    ],
    description: 'Dây xích mang theo sát khí kinh người.',
  },
  {
    id: 'tuoc-ba-kiem',
    name: 'Tước Bá Kiếm',
    nameZh: '撮跋剑',
    category: 'Tấn công',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Tấn công ✗: +18%',
      'Tỉ lệ bạo kích: +12%',
    ],
  },

  // ── PHÒNG THỦ ──
  {
    id: 'tinh-thiet-xa-giap',
    name: 'Tinh Thiết Xà Giáp',
    nameZh: '精铁蛇甲',
    category: 'Phòng thủ',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Phòng thủ: +20%',
      'Giảm sát thương: +5%',
    ],
    description: 'Giáp làm từ vảy rắn, bền chắc và linh hoạt.',
  },
  {
    id: 'tinh-thiet-ho-van',
    name: 'Tinh Thiết Hộ Vân',
    nameZh: '精铁护腕',
    category: 'Phòng thủ',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Phòng thủ: +14%',
      'Khí huyết tối đa: +8%',
    ],
  },
  {
    id: 'cuong-phong-van-chuc',
    name: 'Cường Phòng Vạn Chức Thư',
    nameZh: '固守万职书',
    category: 'Phòng thủ',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Giảm sát thương: +10%',
      'Phòng thủ: +8%',
    ],
  },
  {
    id: 'chien-si-van-chuc',
    name: 'Chiến Sĩ Vạn Chức Thư',
    nameZh: '战士万职书',
    category: 'Phòng thủ',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Khí huyết: +15%',
      'Giảm sát thương diện rộng: +8%',
    ],
  },
  {
    id: 'trong-minh-van-chuc',
    name: 'Trọng Minh Vạn Chức Thư',
    nameZh: '重鸣万职书',
    category: 'Phòng thủ',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Phòng thủ: +18%',
      'Chống gián đoạn: +20%',
    ],
  },

  // ── ĐẶC BIỆT ──
  {
    id: 'bich-ngoc-hang-chuyen',
    name: 'Bích Ngọc Hạng Xuyến',
    nameZh: '翠玉项链',
    category: 'Đặc biệt',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Hồi phục khí huyết: +15%',
      'Tốc độ di chuyển: +5%',
    ],
    description: 'Vòng cổ ngọc bích mang linh khí thiên nhiên.',
  },
  {
    id: 'ma-thien-van-chuc',
    name: 'Ma Thiên Vạn Chức Thư',
    nameZh: '魔天万职书',
    category: 'Đặc biệt',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Giảm hồi chiêu: +8%',
      'Tấn công + Phòng thủ: +6%',
    ],
  },
  {
    id: 'mo-lien-van-chuc',
    name: 'Mưu Lược Vạn Chức Thư',
    nameZh: '谋士万职书',
    category: 'Đặc biệt',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Tăng hiệu quả kỹ năng: +12%',
      'Hút máu kỹ năng: +5%',
    ],
  },
  {
    id: 'nhan-thuc-chi-hoan',
    name: 'Nhẫn Thực Chỉ Hoàn',
    nameZh: '植家指环',
    category: 'Đặc biệt',
    imageUrl: '/images/co-nghịch-thuy-han/trang-bi/Untitled-1.png',
    effects: [
      'Hồi phục theo thời gian: +20%',
      'Khí huyết tối đa: +10%',
    ],
    description: 'Chiếc nhẫn ẩn chứa sinh lực mạnh mẽ của đất trời.',
  },
];
