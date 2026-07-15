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
    "ten": "Trạm Lô",
    "ten_zh": "湛卢",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Mỗi khi quân cờ thăng sao, nhận {1 vàng}.\n• {Mở khóa}: Khi tổng số sao của các quân cờ đang ra trận đạt {12 sao}, mở khóa {Cam Vũ Trạm Lô}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/tram-lo.png",
    "id": "1783966641530"
  },
  {
    "ten": "Thuần Quân",
    "ten_zh": "纯钧",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Tăng {50%} tỷ lệ xuất hiện của quân cờ {X vàng} trong Cửa Hàng (X tăng theo cấp của kỳ thủ, hiện tại: {1}).\n• {Mở khóa}: Khi kỳ thủ đạt {cấp 7}, mở khóa {Cam Vũ Thuần Quân}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/thuan-quan.png",
    "id": "1783966795068"
  },
  {
    "ten": "Can Tương",
    "ten_zh": "干将",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Mỗi khi kỳ thủ tích lũy mất {1 điểm Khí Huyết}, toàn bộ quân cờ phe ta nhận cộng dồn {0,2% Tấn Công}.\n• {Mở khóa}: Khi Khí Huyết của kỳ thủ giảm xuống dưới {60 điểm}, mở khóa {Cam Vũ Can Tương}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/cam-tuong.png",
    "id": "1783967173404"
  },
  {
    "ten": "Thắng Tà",
    "ten_zh": "胜邪",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Sau mỗi vòng đấu, kỳ thủ mất {2 điểm Khí Huyết}.\n• {Mở khóa}: Khi Khí Huyết của kỳ thủ giảm xuống dưới {30 điểm}, mở khóa {Cam Vũ Thắng Tà}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/thang-ta.png",
    "id": "1783967705497"
  },
  {
    "ten": "Mạc Tà",
    "ten_zh": "莫邪",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Mỗi quân cờ của cả 2 bên bị hạ gục sẽ ngưng tụ thành {1 Linh Hồn}. Hiện tại: {0}.\n• {Mở khóa}: Khi tích lũy đủ {50 Linh Hồn}, mở khóa {Cam Vũ Mạc Tà}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/mac-ta.png",
    "id": "1783967852802"
  },
  {
    "ten": "Tiêu Luyện",
    "ten_zh": "宵练",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Cứ mỗi khi tích lũy đủ {5 vàng lãi}, nhận thêm {1 vàng}.\n• {Mở khóa}: Sau khi tích lũy tổng cộng {30 vàng lãi} (hiện tại: {0}), mở khóa {Cam Vũ Tiêu Luyện}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/tieu-luyen.png",
    "id": "1783968085855"
  },
  {
    "ten": "Thái A",
    "ten_zh": "泰阿",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Khi kỳ thủ đạt {cấp 6}, nhận ngẫu nhiên {1 quân cờ 5 vàng}.\n• {Mở khóa}: Khi kỳ thủ đạt {cấp 8}, mở khóa {Cam Vũ Thái A}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/thai-a.png",
    "id": "1783968289847"
  },
  {
    "ten": "Tịch Lư",
    "ten_zh": "辟闾",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Mỗi khi kỳ thủ tăng {1 cấp}, nhận {1 phần thưởng tăng cấp}.\n• {Mở khóa}: Khi kỳ thủ đạt {cấp 8}, mở khóa {Cam Vũ Tịch Lư}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/tich-lu.png",
    "id": "1783968461559"
  },
  {
    "ten": "Tuyệt Tiên",
    "ten_zh": "绝仙",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Quân cờ trang bị {Tuyệt Tiên} sẽ liên tục tích lũy {Tâm Ngộ} khi hạ gục kẻ địch.\n• {Mở khóa}: Đến vòng {3-1}, mở khóa {Cam Vũ Tuyệt Tiên}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/tuyet-lien.png",
    "id": "1783968578019"
  },
  {
    "ten": "Tiểu Mộc Kiếm",
    "ten_zh": "小木剑",
    "do_hiem": "Xanh",
    "mo_ta": "• {Bị động}: Quân cờ trang bị {Tiểu Mộc Kiếm} sau {1/3/9} vòng đấu (tùy theo bậc sao) sẽ ngẫu nhiên biến thành 1 quân cờ có giá cao hơn {1 vàng}.\n• {Mở khóa}: Đến vòng {3-1}, mở khóa {Cam Vũ Tiểu Mộc Kiếm}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/tieu-moc-kiem.png",
    "id": "1783968755879"
  },
  {
    "ten": "Ngư Trường",
    "ten_zh": "鱼肠",
    "do_hiem": "Truyền Thuyết",
    "mo_ta": "• {Bị động} Khí Huyết ban đầu của kỳ thủ và sát thương phải chịu khi thua một vòng đấu giảm {50%}.\n• {Mở khóa}: Khi tích lũy đủ {30 lần hạ gục} (hiện tại: {0}), mở khóa {Cam Vũ Ngư Trường}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/ngu-truong.png",
    "id": "1783969034912"
  },
  {
    "ten": "Long Tuyền",
    "ten_zh": "龙泉",
    "do_hiem": "Truyền Thuyết",
    "mo_ta": "• {Bị động}: Nhận {1 khối Thiên Thạch}. Kết quả thắng hoặc thua của mỗi trận đấu sẽ được ghi lại trên đó.\n• {Mở khóa}: Sau {5 vòng đấu} với kỳ thủ, {Thiên Thạch} sẽ được rèn thành một loại {Long Tuyền} khác nhau tùy theo số trận thắng và thua.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/long-tuyen.png",
    "id": "1783969252159"
  },
  {
    "ten": "Hàm Quang",
    "ten_zh": "含光",
    "do_hiem": "Truyền Thuyết",
    "mo_ta": "• {Bị động}: Mỗi khi kích hoạt thêm {1 liên kết}, toàn bộ quân cờ phe ta nhận thêm {0,4% toàn thuộc tính}.\n• {Mở khóa}: Khi kích hoạt ít nhất {5 liên kết}, mở khóa {Cam Vũ Hàm Quang}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/ham-quang.png",
    "id": "1783969383272"
  },
  {
    "ten": "Xích Tiêu",
    "ten_zh": "赤霄",
    "do_hiem": "Cái Thế Tuyệt Luân",
    "mo_ta": "• {Bị động}: Sau mỗi vòng đấu, toàn bộ quân cờ đang ra trận của phe ta nhận cộng dồn {1% Khí Huyết}.\n• {Mở khóa}: Đến vòng {3-5}, mở khóa {Cam Vũ Xích Tiêu}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/xich-tieu.png",
    "id": "1783969526517"
  },
  {
    "ten": "Thu Thủy",
    "ten_zh": "秋水",
    "do_hiem": "Cái Thế Tuyệt Luân",
    "mo_ta": "• {Bị động}: Sau mỗi vòng đấu, toàn bộ quân cờ đang ra trận của phe ta nhận cộng dồn {1% Tốc Độ Đánh}.\n• {Mở khóa}: Đến vòng {3-5}, mở khóa {Cam Vũ Thu Thủy}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/thu-thuy.png",
    "id": "1783969646677"
  },
  {
    "ten": "Công Bố",
    "ten_zh": "工布",
    "do_hiem": "Cái Thế Tuyệt Luân",
    "mo_ta": "• {Bị động}: Sau mỗi vòng đấu, toàn bộ quân cờ đang ra trận của phe ta nhận cộng dồn {1% Phòng Thủ}.\n• {Mở khóa}: Đến vòng {3-5}, mở khóa {Cam Vũ Công Bố}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/cong-bo.png",
    "id": "1783969998019"
  },
  {
    "ten": "Tru Tiên",
    "ten_zh": "诛仙",
    "do_hiem": "Thiên Hạ Vô Song",
    "mo_ta": "• {Bị động}: Mỗi vòng đấu, nếu {Tru Tiên} đang được trang bị, sẽ tích lũy {20 điểm Sát Khí}, nếu không được trang bị, sẽ mất {50 điểm Sát Khí}.\n• {Mở khóa}: Đến vòng {3-1}, mở khóa {Cam Vũ Tru Tiên}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/tru-tien.png",
    "id": "1783970110742"
  },
  {
    "ten": "Lục Tiên",
    "ten_zh": "戮仙",
    "do_hiem": "Thiên Hạ Vô Song",
    "mo_ta": "• {Bị động}: Quân cờ trang bị {Lục Tiên} mỗi vòng đấu có thể thôn phệ {1 quân cờ} và hoàn trả số vàng tương ứng với quân cờ đó.\n• {Mở khóa}: Đến vòng {3-3}, mở khóa {Cam Vũ Lục Tiên}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/luc-tien.png",
    "id": "1783970235450"
  },
  {
    "ten": "Ỷ Thiên",
    "ten_zh": "倚天",
    "do_hiem": "Thiên Hạ Vô Song",
    "mo_ta": "• {Bị động}: Không có.\n• {Mở khóa}: Đến vòng {5-2}, mở khóa {Cam Vũ Ỷ Thiên}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/y-thien.png",
    "id": "1783970332131"
  },
  {
    "ten": "Hiên Viên",
    "ten_zh": "轩辕",
    "do_hiem": "Thiên Hạ Vô Song",
    "mo_ta": "• {Bị động}: Sau vòng {4-5}, số lượng quân cờ có thể ra trận tăng thêm {1}.\n• {Mở khóa}: Khi có ít nhất {6 quân cờ} cùng mức phí đang ra trận, mở khóa {Cam Vũ Hiên Viên}.",
    "image_url": "/images/co-nghich-thuy-han/buff-kiem/hien-vien.png",
    "id": "1783970912256"
  }
];
