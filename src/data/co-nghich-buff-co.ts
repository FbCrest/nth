export interface BuffCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  do_hiem: string | null;
  mo_ta: string | null;
  image_url: string | null;
}

export const buffCoData: BuffCo[] = [
  {
    "ten": "Đồng Tâm Trận",
    "ten_zh": "同心阵",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, cứ mỗi quân cờ đồng minh đứng cạnh, quân cờ của bạn nhận thêm {4% Tấn Công} và {40/72/140 điểm lá chắn} (tùy theo bậc sao của quân cờ).",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/dong-tam-tran.png",
    "id": "1783964836700"
  },
  {
    "ten": "Bất Khuất Bất Náo",
    "ten_zh": "不屈不挠",
    "do_hiem": "Xanh",
    "mo_ta": "Sau khi thua 1 vòng đấu với kỳ thủ khác, ở vòng đấu với kỳ thủ tiếp theo, quân cờ của bạn nhận thêm {25% sát thương} gây ra. Nếu giành chiến thắng, bạn còn nhận ngẫu nhiên thêm {1–3 vàng}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/bat-khuat-bat-nao.png",
    "id": "1783965465934"
  },
  {
    "ten": "Lưỡng Nghi Song Tức",
    "ten_zh": "两仪双息",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, nếu số quân cờ ở 2 hàng trước của bạn là số lẻ, chúng nhận thêm {30% Phòng Thủ}, nếu là số chẵn, chúng nhận thêm {20% Khí Huyết}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/luong-nghi-song-tuc.png",
    "id": "1783965638178"
  },
  {
    "ten": "Chúng Chí Thành Thành",
    "ten_zh": "众志成城",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, hàng có nhiều quân cờ nhất của bạn sẽ nhận lá chắn bằng {240%/430%/800% Phòng Thủ} (tùy theo bậc sao của quân cờ).",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/chung-chi-thanh-thanh.png",
    "id": "1783965744854"
  },
  {
    "ten": "Thanh Phong Ngâm",
    "ten_zh": "清风吟",
    "do_hiem": "Xanh",
    "mo_ta": "Khi Khí Huyết của quân cờ lần đầu giảm xuống dưới {50%}, chúng sẽ hồi lại {20% Khí Huyết} trong vòng {2 giây}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/thanh-phong-ngam.png",
    "id": "1783965851574"
  },
  {
    "ten": "Vật Mỹ Giá Liêm",
    "ten_zh": "物美价廉",
    "do_hiem": "Xanh",
    "mo_ta": "Nhận {1/6/11 vàng}. Ở mỗi vòng đấu, lần đầu tiên dùng vàng để làm mới cửa hàng sẽ giảm tiêu hao {1 vàng}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/vat-my-gia-liem.png",
    "id": "1783965951368"
  },
  {
    "ten": "Kinh Nghiệm Chi Đàm",
    "ten_zh": "经验之谈",
    "do_hiem": "Xanh",
    "mo_ta": "Nhận {10/16 điểm kinh nghiệm}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/kinh-nghiem-chi-dam.png",
    "id": "1783966036494"
  },
  {
    "ten": "Hậu Cố Vô Ưu",
    "ten_zh": "后顾无忧",
    "do_hiem": "Xanh",
    "mo_ta": "Khi thua 1 vòng đấu với kỳ thủ khác, nhận {2 điểm kinh nghiệm}. Nếu đang trong chuỗi thua, nhận thêm {1 vàng}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/hau-co-vo-uu.png",
    "id": "1783966130509"
  },
  {
    "ten": "Bồi Nguyên Quyết",
    "ten_zh": "培元诀",
    "do_hiem": "Xanh",
    "mo_ta": "Tăng {25/23/20 điểm Khí Huyết} cho kỳ thủ.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/boi-nguyen-quyet.png",
    "id": "1783966223654"
  },
  {
    "ten": "Thủ Vệ Chi Thệ",
    "ten_zh": "戍卫之誓",
    "do_hiem": "Xanh",
    "mo_ta": "Khi quân cờ bị hạ gục, tạo Lá Chắn bằng {20%} Máu tối đa của bản thân, sau đó chia đều Lá Chắn này cho tối đa {3} quân cờ đồng minh ở gần nhất.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/the-uoc-thu-ve.png",
    "id": "1784007046239"
  },
  {
    "ten": "Hạnh Tồn Giả",
    "ten_zh": "幸存者",
    "do_hiem": "Xanh",
    "mo_ta": "Quân cờ sống sót cuối cùng của bạn nhận {40%} tăng sát thương và {40%} giảm sát thương.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/hanh-ton-gia.png",
    "id": "1784007314837"
  },
  {
    "ten": "Xuyên Vân Song Thỉ",
    "ten_zh": "穿云双矢",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, {2} quân cờ ngẫu nhiên ở hàng cuối cùng của bạn nhận {20%} Tốc Độ Tấn Công và {12%} Tấn Công.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xuyen-van-song-thi.png",
    "id": "1784007412238"
  },
  {
    "ten": "Quần Anh Tụ Thế",
    "ten_zh": "群英聚势",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, cứ mỗi quân cờ {1–2} vàng khác nhau được đưa ra trận, toàn bộ quân cờ của bạn nhận {1%} Toàn Thuộc Tính.\n• {Toàn Thuộc Tính}: Tấn Công, Phòng Thủ, Khí Huyết, Tốc Độ Tấn Công, Hồi Phục Nội Lực, Chí Mạng và Hút Máu.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/quan-anh-tu-the.png",
    "id": "1784007518993"
  },
  {
    "ten": "Hảo Sự Thành Song",
    "ten_zh": "好事成双",
    "do_hiem": "Xanh",
    "mo_ta": "Ngẫu nhiên nhận {2} quân cờ {1} hoặc {2} vàng đạt {2} sao và {2} vàng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/hao-su-thanh-song.png",
    "id": "1784007706661"
  },
  {
    "ten": "Tụ Nghĩa Như Vân",
    "ten_zh": "聚义如云",
    "do_hiem": "Xanh",
    "mo_ta": "Lập tức ngẫu nhiên nhận {1} quân cờ có liên quan đến {Liên Kết} trong đội hình hiện tại. Sau đó, vào đầu mỗi giai đoạn, tiếp tục ngẫu nhiên nhận thêm {1} quân cờ có liên quan.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/tu-nghia-như-van.png",
    "id": "1784007800835"
  },
  {
    "ten": "Hóa Vi Kỷ Dụng",
    "ten_zh": "化为己用",
    "do_hiem": "Xanh",
    "mo_ta": "Khi thắng một trận đấu với người chơi, ngẫu nhiên nhận {1} quân cờ {1} sao có giá {2} vàng trở xuống từ đội hình của đối thủ. Nếu không có quân cờ phù hợp, thay vào đó nhận {1} vàng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/hoa-vi-ky-dung.png",
    "id": "1784007967484"
  },
  {
    "ten": "Đầu Thạch Thành Kim",
    "ten_zh": "投石成金",
    "do_hiem": "Xanh",
    "mo_ta": "Nhận {5} vàng. Nếu sau {3} hiệp đối chiến, số vàng đang sở hữu đạt từ {30} trở lên, nhận thêm {8/12} vàng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/dau-thach-thanh-kim.png",
    "id": "1784008078045"
  },
  {
    "ten": "Chiến Đấu Kinh Nghiệm",
    "ten_zh": "战斗经验",
    "do_hiem": "Xanh",
    "mo_ta": "Trong mỗi hiệp đối chiến giữa {2} kỳ thủ, mỗi khi đánh bại {1} quân cờ của đối phương, nhận điểm kinh nghiệm bằng {2} × cấp sao của quân cờ đó.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/chien-dau-kinh-nghiem.png",
    "id": "1784008338629"
  },
  {
    "ten": "Thần Bí Bảo Hiệp",
    "ten_zh": "神秘宝匣",
    "do_hiem": "Xanh",
    "mo_ta": "Nhận {1} Thần Bí Bảo Hiệp, có cơ hội nhận được vàng, trang bị hoặc quân cờ. Lần {2} chọn Thần Bí Bảo Hiệp, phần thưởng được nhân đôi. Lần {3} chọn sẽ nhận được {Hồng Vận Bảo Hiệp}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/than-bi-bao-hiep.png",
    "id": "1784008479911"
  },
  {
    "ten": "Thiên Chuy Bách Luyện",
    "ten_zh": "千锤百炼",
    "do_hiem": "Xanh",
    "mo_ta": "Ngẫu nhiên nhận {4} trang bị trắng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/thien-chuy-bach-luyen.png",
    "id": "1784008568059"
  },
  {
    "ten": "Tàn Giáp Đoán Phong",
    "ten_zh": "残甲锻锋",
    "do_hiem": "Xanh",
    "mo_ta": "Khi khí huyết của kỳ thủ thấp hơn {50} điểm, nhận {1} Rương Cát Vận Trang Bị Tím và {1} trang bị tím ngẫu nhiên.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/tan-giap-doan-phong.png",
    "id": "1784008680024"
  },
  {
    "ten": "Độc Hành",
    "ten_zh": "独行",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu giao chiến, nếu xung quanh quân cờ của bạn không có đơn vị đồng minh, tăng {12%} Tấn công và {6%} Hút máu.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/doc-hanh.png",
    "id": "1784008778766"
  },
  {
    "ten": "Thân Tiên Sĩ Tốt",
    "ten_zh": "身先士卒",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu giao chiến, {2} quân cờ đầu tiên của bạn bị tấn công sẽ nhận {50%} Phòng thủ.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/than-tien-si-tot.png",
    "id": "1784008869842"
  },
  {
    "ten": "Bố Y Thiết Cốt",
    "ten_zh": "布衣铁骨",
    "do_hiem": "Xanh",
    "mo_ta": "Trong chiến đấu, các quân cờ không trang bị được tăng {20%} Khí huyết và {20%} Phòng thủ.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/bo-y-thiet-cot.png",
    "id": "1784008990275"
  },
  {
    "ten": "Tái Ông Thất Mã",
    "ten_zh": "塞翁失马",
    "do_hiem": "Xanh",
    "mo_ta": "• Khi quân cờ của bạn bị hạ gục, có {35%} xác suất nhận {1} vàng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xanh/tai-ong-that-ma.png",
    "id": "1785564336187"
  },
  {
    "ten": "Võ Lâm Tân Tú",
    "ten_zh": "武林新秀",
    "do_hiem": "Xanh",
    "mo_ta": "• Nhận ngẫu nhiên {2} quân cờ {1} vàng, {1} sao, đồng thời vĩnh viễn tăng {15%} Tấn công.\n• Khi thăng lên {2} sao, hiệu quả tăng Tấn công được nhân {300%}, đồng thời nhận {5} vàng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xanh/vo-lam-tan-tu.png",
    "id": "1785564779786"
  },
  {
    "ten": "Người Đông Thế Mạnh",
    "ten_zh": "人多势众",
    "do_hiem": "Xanh",
    "mo_ta": "• Trong các trận đối đầu giữa kỳ thủ, nếu số lượng quân cờ ra trận của bạn nhiều hơn đối thủ, nhận {2/4/6} điểm kinh nghiệm. Nếu chọn hiệu ứng này ở giai đoạn 2, sẽ nhận thêm {4} điểm kinh nghiệm.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xanh/nguoi-dong-the-manh.png",
    "id": "1785564888995"
  },
  {
    "ten": "Dưỡng Tinh Súc Nhuệ",
    "ten_zh": "养精蓄锐",
    "do_hiem": "Xanh",
    "mo_ta": "• Trong {3} hiệp tiếp theo, không được mua quân cờ hoặc nâng cấp kinh nghiệm. Sau đó, nhận {20} vàng.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xanh/duong-tinh-suc-nhe.png",
    "id": "1785565007288"
  },
  {
    "ten": "Thoát Thai Hoán Cốt",
    "ten_zh": "脱胎换骨",
    "do_hiem": "Xanh",
    "mo_ta": "• Toàn bộ quân cờ đang ra trận sẽ ngẫu nhiên biến thành quân cờ có giá cao hơn {1} bậc.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xanh/thoat-thai-hoan-cot.png",
    "id": "1785565094667"
  },
  {
    "ten": "Tiêu Dao Du Tâm",
    "ten_zh": "逍遥游心",
    "do_hiem": "Xanh",
    "mo_ta": "• Nhận {1} đồng minh viện trợ: Bộ Tiểu Hư. Cô ấy có thể triệu hồi Phi Kiếm, nhưng có thể rời trận bất cứ lúc nào.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/xanh/tieu-dao-du-tam.png",
    "id": "1785565234752"
  }
];
