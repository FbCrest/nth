export interface BuffKiem {
  id: string;
  ten: string;
  ten_zh: string | null;
  do_hiem: string | null;
  mo_ta: string | null;
  image_url: string | null;
}

export const buffKiemData: BuffKiem[] = [
  {
    "ten": "Thắng Tà",
    "ten_zh": "胜邪",
    "do_hiem": "Xanh",
    "mo_ta": "• Mỗi hiệp đấu, mất {2} điểm Sinh Lực Kỳ Thủ.\n• {Mở Khóa}: Khi Sinh Lực Kỳ Thủ dưới {30} điểm, mở khóa {Vũ Khí Cam - Thắng Tà}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/thang-ta.png",
    "id": "1783883536401"
  },
  {
    "ten": "Ngư Trường",
    "ten_zh": "鱼肠",
    "do_hiem": "Xanh",
    "mo_ta": "• Sinh Lực Kỳ Thủ ban đầu và sát thương phải chịu khi thua trận giảm {50%}.\n• {Mở Khóa}: Khi tích lũy đạt {30} lần hạ gục, mở khóa {Vũ Khí Cam - Ngư Trường}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/ngu-truong.png",
    "id": "1783884510383"
  },
  {
    "ten": "Can Tương",
    "ten_zh": "干将",
    "do_hiem": "Xanh",
    "mo_ta": "• Mỗi khi tích lũy mất {1} điểm Sinh Lực Kỳ Thủ, toàn bộ quân cờ phe ta nhận cộng dồn {0.2% Tấn Công}.\n• {Mở Khóa}: Khi Sinh Lực Kỳ Thủ dưới {60} điểm, mở khóa {Vũ Khí Cam - Can Tương}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/can-tuong.png",
    "id": "1783884771225"
  }
];
