export type BuffRarity = 'Tất cả' | 'Xanh' | 'Tím' | 'Vàng';

export interface CoNghichBuff {
  id: string;
  name: string;
  nameZh: string;
  rarity: Exclude<BuffRarity, 'Tất cả'>;
  imageUrl: string;
  /** Mô tả hiệu quả buff */
  description: string;
}

export const coNghichBuffData: CoNghichBuff[] = [
  // ── XANH ──
  {
    id: 'dong-tam-tran',
    name: 'Đồng Tâm Trận',
    nameZh: '同心阵',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi khai chiến, cứ mỗi 1 quân cờ đồng đội xung quanh quân cờ của bạn, nhận được 4% tấn công và 40/72/140 điểm hộ thuẫn (dựa theo sao của quân cờ).',
  },
  {
    id: 'bat-kuat-bat-nao',
    name: 'Bất Khuất Bất Nao',
    nameZh: '不屈不挠',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi máu dưới 50%, nhận 15% giảm sát thương nhận vào. Hồi chiêu 12 giây.',
  },
  {
    id: 'luong-nghi-song-tuc',
    name: 'Lưỡng Nghi Song Tức',
    nameZh: '两仪双息',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Tăng 8% hiệu quả hồi phục và 8% sát thương kỹ năng trong 10 giây sau khi thi triển kỹ năng.',
  },
  {
    id: 'chung-chi-thanh-thanh',
    name: 'Chúng Chí Thành Thành',
    nameZh: '众志成城',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Cứ mỗi 2 quân cờ đồng đội cùng phe, toàn đội nhận thêm 3% giảm sát thương.',
  },
  {
    id: 'thanh-phong-ngam',
    name: 'Thanh Phong Ngâm',
    nameZh: '清风吟',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Sau khi thi triển kỹ năng, hồi 3% máu tối đa trong 3 giây. Hồi chiêu 10 giây.',
  },
  {
    id: 'vat-my-gia-lien',
    name: 'Vật Mỹ Giá Liêm',
    nameZh: '物美价廉',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Giảm 15% chi phí triệu hồi quân cờ. Tất cả quân cờ nhận thêm 5% kinh nghiệm.',
  },
  {
    id: 'kinh-nghiem-chi-dam',
    name: 'Kinh Nghiệm Chi Đàm',
    nameZh: '经验之谈',
    rarity: 'Xanh',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Quân cờ nhận thêm 20% kinh nghiệm từ trận đấu. Khi lên cấp, hồi 10% máu tối đa.',
  },

  // ── TÍM ──
  {
    id: 'hau-co-vo-uu',
    name: 'Hậu Cố Vô Ưu',
    nameZh: '后顾无忧',
    rarity: 'Tím',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi quân cờ đứng sau hàng ngũ, nhận 20% tăng tấn công và miễn nhiễm với hiệu ứng kéo lùi trong 8 giây đầu chiến đấu.',
  },
  {
    id: 'boi-nguyen-quyet',
    name: 'Bồi Nguyên Quyết',
    nameZh: '培元诀',
    rarity: 'Tím',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Mỗi 5 giây hồi 2% máu tối đa. Khi máu dưới 30%, tốc độ hồi phục tăng gấp đôi.',
  },
  {
    id: 'chien-ve-chi-the',
    name: 'Chiến Vệ Chi Thệ',
    nameZh: '戍卫之誓',
    rarity: 'Tím',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi quân cờ đồng đội bị tấn công, tự động chặn 25% sát thương cho đồng đội gần nhất. Hồi chiêu 15 giây.',
  },
  {
    id: 'hanh-ton-gia',
    name: 'Hạnh Tồn Giả',
    nameZh: '幸存者',
    rarity: 'Tím',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi máu lần đầu xuống dưới 20%, nhận khiên hấp thụ 30% máu tối đa và tăng 15% tốc độ di chuyển trong 5 giây.',
  },
  {
    id: 'xuyen-van-song-mat',
    name: 'Xuyên Vân Song Mũi',
    nameZh: '穿云双矢',
    rarity: 'Tím',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Tấn công tầm xa bắn thêm 1 mũi tên, gây 60% sát thương. Tấn công tới quân cờ xa nhất trên chiến trường.',
  },
  {
    id: 'quan-anh-tuu-the',
    name: 'Quần Anh Tụ Thế',
    nameZh: '群英聚势',
    rarity: 'Tím',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi có từ 5 quân cờ trở lên trên chiến trường, toàn đội nhận 10% tăng tấn công và 5% giảm sát thương.',
  },

  // ── VÀNG ──
  {
    id: 'hao-su-thanh-song',
    name: 'Hảo Sự Thành Song',
    nameZh: '好事成双',
    rarity: 'Vàng',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Mỗi khi tiêu diệt quân cờ địch, nhận hiệu ứng tăng 8% tấn công và 5% tốc độ tấn công, cộng dồn tối đa 5 tầng. Duy trì đến hết trận.',
  },
  {
    id: 'tuu-nghia-nhu-van',
    name: 'Tụ Nghĩa Như Vân',
    nameZh: '聚义如云',
    rarity: 'Vàng',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi triệu hồi quân cờ mới, toàn đội nhận 12% tăng tấn công trong 8 giây. Hiệu ứng không cộng dồn.',
  },
  {
    id: 'hoa-vi-ki-dung',
    name: 'Hóa Vi Kỷ Dụng',
    nameZh: '化为己用',
    rarity: 'Vàng',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Khi tiêu diệt quân cờ địch, hấp thụ 50% chỉ số tăng cường của mục tiêu trong 12 giây.',
  },
  {
    id: 'dau-thach-thanh-kim',
    name: 'Đầu Thạch Thành Kim',
    nameZh: '投石成金',
    rarity: 'Vàng',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Mỗi 3 giây, ném 1 phiến đá vào quân địch ngẫu nhiên gây sát thương bằng 8% máu tối đa của mục tiêu.',
  },
  {
    id: 'chien-dau-kinh-nghiem',
    name: 'Chiến Đấu Kinh Nghiệm',
    nameZh: '战斗经验',
    rarity: 'Vàng',
    imageUrl: '/images/co-nghịch-thuy-han/buff/Untitled-1.png',
    description: 'Mỗi khi gây sát thương bạo kích, tăng thêm 2% sát thương bạo kích vĩnh viễn trong trận (tối đa 20 tầng).',
  },
];
