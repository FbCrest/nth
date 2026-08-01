export interface TrangBiCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  danh_muc: string | null;
  hieu_qua: string | null;
  dac_hieu: string | null;
  image_url: string | null;
}

export const trangBiCoData: TrangBiCo[] = [
  {
    "ten": "Tinh Thiết Trường Kiếm",
    "ten_zh": "精铁长剑",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tinh-thiet-truong-kiem.png",
    "id": "1783927021329"
  },
  {
    "ten": "Thúy Ngọc Giới Chỉ",
    "ten_zh": "翠玉戒指",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thuy-ngon-gioi-chi.png",
    "id": "1783927205321"
  },
  {
    "ten": "Tinh Thiết Khải Giáp",
    "ten_zh": "精铁铠甲",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tinh-thiet-khai-giap.png",
    "id": "1783927426157"
  },
  {
    "ten": "Tinh Thiết Hộ Uyển",
    "ten_zh": "精铁护腕",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tinh-thiet-ho-uyen.png",
    "id": "1783927596348"
  },
  {
    "ten": "Thúy Ngọc Hạng Liên",
    "ten_zh": "翠玉项链",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thuy-ngoc-hang-lien.png",
    "id": "1783927735082"
  },
  {
    "ten": "Ma Thiên Vạn Chức Thư",
    "ten_zh": "魔天万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ được trang bị nhận {Liên Kết Ma Thiên}. Khi tham gia hạ gục, nhận {tăng sát thương} và {giảm sát thương}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/ma-thien-van-chuc-thu.png",
    "id": "1783928282684"
  },
  {
    "ten": "Bạch Đế Thành Vạn Chức Thư",
    "ten_zh": "白帝城万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận {Liên Kết Bạch Đế Thành}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bach-de-thanh-van-chuc-thu.png",
    "id": "1783935574730"
  },
  {
    "ten": "Thôi Kiên Kiếm",
    "ten_zh": "摧坚剑",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +10%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +10%",
    "dac_hieu": "• Khi tấn công, gây lên mục tiêu hiệu ứng {Thoái Lực} và {Nội Thương} trong {5 giây}.\n• {Thoái Lực}: Giảm {10%} Tấn Công.\n• {Nội Thương}: Giảm {35%} hiệu quả Hút Máu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thoi-kien-kiem.png",
    "id": "1783998934449"
  },
  {
    "ten": "Khuynh Sát Liên",
    "ten_zh": "倾杀链",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Chí Mạng{icon:chi-mang}: +25%",
    "dac_hieu": "• Chí Mạng{icon:chi-mang}: {+25%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/khuynh-sat-lien.png",
    "id": "1783999193571"
  },
  {
    "ten": "Phá Trụ Đao",
    "ten_zh": "破胄刀",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Chí Mạng{icon:chi-mang}: +15%",
    "dac_hieu": "• Khi tấn công, bỏ qua {30%} Phòng Thủ của mục tiêu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/pha-tru-dao.png",
    "id": "1783999543972"
  },
  {
    "ten": "Trảm Ác Linh",
    "ten_zh": "斩恶翎",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Chí Mạng{icon:chi-mang}: +15%",
    "dac_hieu": "• Mỗi khi % Máu của mục tiêu cao hơn bản thân {10%}, sát thương gây lên mục tiêu tăng {4%} (tối đa tăng {40%}).",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tram-ac-linh.png",
    "id": "1783999610571"
  },
  {
    "ten": "Tố Lưu Giới",
    "ten_zh": "溯流戒",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +15%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +10%",
    "dac_hieu": "• Sau mỗi đòn đánh thường, hồi {3} điểm Nội Lực.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/to-luu-gioi.png",
    "id": "1783999737916"
  },
  {
    "ten": "Linh Tuyền Trụy",
    "ten_zh": "灵泉坠",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +15%",
    "dac_hieu": "• Trong chiến đấu, cứ mỗi {1 giây} sống sót, tăng {4%} Hồi Nội Lực (tối đa {80%}).",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/linh-tuyen-truy.png",
    "id": "1783999828537"
  },
  {
    "ten": "Ngự Phong Trạc",
    "ten_zh": "驭风镯",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong} : +15%",
    "dac_hieu": "• Trong chiến đấu, cứ mỗi {1 giây} sống sót, tăng {4%} Tốc Độ Tấn Công (tối đa {80%}).",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ngu-phong-trac.png",
    "id": "1784000100353"
  },
  {
    "ten": "Huyết Điện Thương",
    "ten_zh": "血奠枪",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +15%\n• Hút Máu{icon:hut-mau}: +10%",
    "dac_hieu": "• Khi thi triển kỹ năng, nhận hiệu ứng tăng {30%} Tấn Công và {30%} Phòng Thủ trong {3 giây}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/huyet-dien-thuong.png",
    "id": "1784000371980"
  },
  {
    "ten": "Ngạo Huyết Khải",
    "ten_zh": "傲血铠",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +15%\n• Hút Máu{icon:hut-mau}: +15%",
    "dac_hieu": "• Khi tấn công hoặc chịu tấn công, cộng dồn {2%} Tấn Công, tối đa {20 tầng}.\n• Khi đạt đủ {20 tầng}, nhận thêm {10%} Hút Máu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ngao-huyet-khai.png",
    "id": "1784000551972"
  },
  {
    "ten": "Ẩn Long Trụy",
    "ten_zh": "隐龙坠",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Chí Mạng{icon:chi-mang}: +25%",
    "dac_hieu": "• Khi Máu lần đầu tiên giảm xuống dưới {50%}, lập tức tiến vào trạng thái {Tàng Hình}, {Vô Địch} và {Miễn Khống} trong {1 giây}.\n• Đồng thời, nhận thêm {30%} Tấn Công trong suốt hiệp hiện tại.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/an-long-truy.png",
    "id": "1784000673233"
  },
  {
    "ten": "Tiềm Vân Trâm",
    "ten_zh": "潜云簪",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +20%",
    "dac_hieu": "• Khi bắt đầu chiến đấu, nhận trạng thái {Miễn Khống} kéo dài {20 giây}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tiem-van-tram.png",
    "id": "1784000802019"
  },
  {
    "ten": "Tuần Ảnh Bội",
    "ten_zh": "巡影佩",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +15%\n• Hút Máu{icon:hut-mau}: +15%",
    "dac_hieu": "• Sát thương từ kẻ địch ở ngoài phạm vi tấn công của bạn gây lên bạn giảm {25%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tuan-anh-boi.png",
    "id": "1784000913666"
  },
  {
    "ten": "Liên Tinh Cung",
    "ten_zh": "连星弓",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +15%\n• Chí Mạng{icon:chi-mang}: +20%",
    "dac_hieu": "• Sát thương đánh thường tăng {20%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/lien-tinh-cung.png",
    "id": "1784001007119"
  },
  {
    "ten": "Quán Nguyệt Nỏ",
    "ten_zh": "贯月弩",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +15%\n• Chí Mạng{icon:chi-mang}: +20%",
    "dac_hieu": "• Sát thương Kỹ Năng tăng {20%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/quan-nguyen-no.png",
    "id": "1784001104993"
  },
  {
    "ten": "Phệ Tà Đồng",
    "ten_zh": "噬邪铜",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +15%\n• Hút Máu{icon:hut-mau}: +15%",
    "dac_hieu": "• Cứ mỗi khi mất {4%} Máu, nhận thêm {1%} Tốc Độ Tấn Công và {1%} Hút Máu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phe-ta-dong.png",
    "id": "1784001202453"
  },
  {
    "ten": "Vạn Trọng Cung",
    "ten_zh": "万重弓",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%\n• Chí Mạng{icon:chi-mang}: +15%",
    "dac_hieu": "• Cứ mỗi {1 ô} khoảng cách giữa bạn và mục tiêu, sát thương gây ra tăng {2,5%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/van-trong-cung.png",
    "id": "1784001295969"
  },
  {
    "ten": "Điệp Lãng Phong",
    "ten_zh": "叠浪锋",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +15%",
    "dac_hieu": "• Trong chiến đấu, cứ mỗi {1 giây} sống sót, tăng {4%} Tấn Công (tối đa {80%}).",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/diep-lang-phong.png",
    "id": "1784001427113"
  },
  {
    "ten": "Phần Tâm Bàn",
    "ten_zh": "焚心盘",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +10%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +10%",
    "dac_hieu": "• Khi tấn công, gây lên mục tiêu hiệu ứng {Thiêu Đốt} và {Trọng Thương} trong {5 giây}.\n• {Thiêu Đốt}: Mỗi giây gây Sát Thương Chuẩn bằng {1.5%} Máu của mục tiêu.\n• {Trọng Thương}: Giảm {33%} hiệu quả hồi Máu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phan-tam-ban.png",
    "id": "1784001548520"
  },
  {
    "ten": "Phá Ma Phan",
    "ten_zh": "破魔幡",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +10%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +10%",
    "dac_hieu": "• Khi tấn công, gây lên mục tiêu hiệu ứng {Phá Giáp} và {Phá Thuẫn} trong {5 giây}.\n• {Phá Phòng}: Giảm {10%} Phòng Thủ.\n• {Phá Thuẫn}: Giảm {35%} hiệu quả Lá Chắn.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/pha-ma-phan.png",
    "id": "1784001698769"
  },
  {
    "ten": "Điệp Huyết Nhận",
    "ten_zh": "喋血刃",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hút Máu{icon:hut-mau}: +25%",
    "dac_hieu": "• Hút Máu{icon:hut-mau}: {+25%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/diep-huyet-nhan.png",
    "id": "1784001814335"
  },
  {
    "ten": "Lăng Ảnh Nhận",
    "ten_zh": "凌影刃",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Chí Mạng{icon:chi-mang}: +25%",
    "dac_hieu": "• Giảm {35%} sát thương nhận từ các quân cờ không chọn bản thân làm mục tiêu tấn công.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/lang-anh-nhan.png",
    "id": "1784001925753"
  },
  {
    "ten": "Gia Cát Lượng · Vạn Cổ Vân Tiêu Phiến",
    "ten_zh": "诸葛亮·万古云霄扇",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +30%",
    "dac_hieu": "• Tăng {2 ô} Phạm Vi Tấn Công.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/gia-cat-luong-van-co-van-tieu-phien.png",
    "id": "1784002015252"
  },
  {
    "ten": "Lục Tôn Sứ · Ngự Hạ Chi Giới",
    "ten_zh": "六尊使·驭下之戒",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%\n• Hút Máu{icon:hut-mau}: +20%",
    "dac_hieu": "• Sát thương gây lên kẻ địch có bậc sao thấp hơn bản thân tăng {50%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/luc-ton-su-ngu-ha-chi-gioi.png",
    "id": "1784002113798"
  },
  {
    "ten": "Thám U Minh · Đằng Long Thủ",
    "ten_zh": "探幽冥·腾龙手",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +25%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +25%",
    "dac_hieu": "• Khi đánh thường có {4%} xác suất, hoặc khi thi triển kỹ năng có {40%} xác suất nhận {1 Vàng}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tham-u-minh-dang-long-thu.png",
    "id": "1784002264290"
  },
  {
    "ten": "Đan Tâm · Bách Chiến Quy",
    "ten_zh": "丹心·百战归",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +25%\n• Chí Mạng{icon:chi-mang}: +25%",
    "dac_hieu": "• Phá Phòng: {+35%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dan-tam-bach-chien-quy.png",
    "id": "1784002353281"
  },
  {
    "ten": "Quan Tịch Trần · Kinh Trần Toái Nhận",
    "ten_zh": "关寂尘·惊尘碎刃",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +70%",
    "dac_hieu": "• Khi nhận trang bị này, nếu trong túi trang bị của bạn có thêm một trong hai trang bị {Đao Cuồng · Bại Giả Đoạn Nhận}, chúng sẽ được hợp thành {Đường Chú · Nhật Nguyệt Song Phong}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/quan-tich-tran-kinh-tran-toai-nhan.png",
    "id": "1784002621062"
  },
  {
    "ten": "Đao Cuồng · Bại Giả Đoạn Nhận",
    "ten_zh": "刀狂·败者断刃",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +70%",
    "dac_hieu": "• Khi nhận trang bị này, nếu trong túi trang bị của bạn có thêm một trong hai trang bị {Quan Tịch Trần · Kinh Trần Toái Nhận}, chúng sẽ được hợp thành {Đường Chú · Nhật Nguyệt Song Phong}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dao-cuong-bai-gia-doan-nhan.png",
    "id": "1784002713887"
  },
  {
    "ten": "Đường Chú · Nhật Nguyệt Song Phong",
    "ten_zh": "唐铸·日月双锋",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +150%",
    "dac_hieu": "\"Vân Long Phong Hổ, gặp đúng thời cơ\nmột đao hai lưỡi, vang danh ngàn thu.\"",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/duong-chu-nhat-nguyet-song-phong.png",
    "id": "1784002861885"
  },
  {
    "ten": "Ẩn Hiền · Đạp Trần Kịch",
    "ten_zh": "隐贤·踏尘屐",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +15%\n• Khí Huyết{icon:khi-huyet}: +15%",
    "dac_hieu": "• Giảm {30%} Tốc Độ Di Chuyển.\n• Khi đứng yên, mỗi giây tăng {3%} sát thương gây ra (cộng dồn tối đa {15 tầng}) và hồi {2} điểm Nội Lực. Hiệu ứng sẽ bị hủy khi di chuyển.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/an-hien-dap-tran-kich.png",
    "id": "1784003143543"
  },
  {
    "ten": "Liễu Tinh Văn · Thự Tinh Dực",
    "ten_zh": "柳星闻·曙星翼",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Chí Mạng{icon:chi-mang}: +30%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +30%",
    "dac_hieu": "• Trong chiến đấu, cứ mỗi {5 giây} nhận {1 lần} cường hóa sát thương kéo dài {5 giây}, mức cường hóa được tính theo quãng đường đã di chuyển.\n• Trong {5 giây} hiệu lực, cứ mỗi khi di chuyển {1 ô}, sát thương tăng thêm {5%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/lieu-tinh-van-thu-tinh-duc.png",
    "id": "1784003405455"
  },
  {
    "ten": "Trương Thúc Dạ · Xích Huyết Phi Phong",
    "ten_zh": "张叔夜·赤血披风",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hút Máu{icon:hut-mau}: +30%\n• Phòng Thủ{icon:phong-thu}: +30%",
    "dac_hieu": "• Khi bắt đầu chiến đấu, tăng {20%} Hút Máu và {20%} Phòng Thủ cho tất cả đồng minh cùng hàng với người mang trang bị này, hiệu lực kéo dài đến khi người mang bị hạ gục.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/truong-thuc-da-xich-huyet-phi-phong.png",
    "id": "1784003493122"
  },
  {
    "ten": "Nguyên Khinh Cương · Bát Chỉ Kiếm",
    "ten_zh": "源轻纲·八咫剑",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +40%",
    "dac_hieu": "• Sát thương Chí Mạng: {+50%}.\n• Khi Máu dưới {50%}, hiệu quả trên được tăng gấp đôi.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/nguyen-khinh-cuong.png",
    "id": "1784003662418"
  },
  {
    "ten": "Tâm Ma · Trích Tinh Dịch Thiên Thủ",
    "ten_zh": "心魔·摘星弈天手",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +25%\n• Khí Huyết{icon:khi-huyet}: +25%",
    "dac_hieu": "• Mỗi lần đánh thường, bản thân mất {5} điểm Nội Lực.\n• Mỗi đòn đánh thường giúp cộng dồn {5%} Tốc Độ Tấn Công.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tam-ma-trich-tinh-dich-thien-thu.png",
    "id": "1784003888027"
  },
  {
    "ten": "Dư Nhược Mộng · Kinh Hồng Hạc Vũ Đới",
    "ten_zh": "余若梦·惊鸿鹤羽带",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +25%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +25%",
    "dac_hieu": "• Khi gây sát thương, gây thêm {30/45/70} sát thương cố định (tăng theo bậc sao).\n• Hiệu ứng này tối đa kích hoạt {10} lần mỗi giây.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/du-nhuoc-mong-kinh-hong-hac-vu-doi.png",
    "id": "1784004013458"
  },
  {
    "ten": "Tước Ẩn · Khiên Ti Bạch Nhận Lý",
    "ten_zh": "雀隐·牵丝白刃履",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +30%\n• Phòng Thủ{icon:phong-thu}: +30%",
    "dac_hieu": "• Sau khi hạ gục mục tiêu, nhận trạng thái {Miễn Khống} trong {1 giây}, đồng thời dịch chuyển tức thời ra phía sau kẻ địch có phòng thủ thấp nhất trong phạm vi {3 ô}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tuoc-an-thien-ti-bach-nhan-ly.png",
    "id": "1784004119253"
  },
  {
    "ten": "Phong Thiếu Vi · Nộ Triều Trùng Lãng Thúc",
    "ten_zh": "风少微·怒潮重浪束",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +25%\n• Chí Mạng{icon:chi-mang}: +25%",
    "dac_hieu": "• Khi hạ gục mục tiêu, {90%} sát thương dư sẽ được chia đều cho tối đa {3} kẻ địch gần mục tiêu nhất.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thieu-vi-no-trieu-trung-lang-thuc.png",
    "id": "1784004306427"
  },
  {
    "ten": "Tô Chấn Y · Lưu Quang Thí Nguyệt",
    "ten_zh": "苏振衣·流光弑月",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +50%\n• Tỷ lệ Né Tránh{icon:ty-le-ne-tranh}: +30%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/to-chan-y-luu-quang-thi-nguyet.png",
    "id": "1784047647597"
  },
  {
    "ten": "Lỗ Ban · Càn Khôn Hóa Nhận",
    "ten_zh": "鲁班·乾坤化刃",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +40%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/lo-ban-can-khong-hoa-nhan.png",
    "id": "1784047893638"
  },
  {
    "ten": "Mục Quế Anh · Bạo Vũ Lê Hoa",
    "ten_zh": "穆桂英·暴雨梨花",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +30%\n• Khí Huyết{icon:khi-huyet}: +30%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/muc-que-anh-bao-vu-le-hoa.png",
    "id": "1784048016797"
  },
  {
    "ten": "Sư Khoáng · Huyền Phượng Lai Nghi",
    "ten_zh": "师旷·玄凤来仪",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +50%\n• Tiêu Hao Nội Lực: -40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/su-khoang-huyen-phuong-lai-nghi.png",
    "id": "1784048145264"
  },
  {
    "ten": "Lý Bạch · Thương Hải Hiệp Đào",
    "ten_zh": "李白·沧海挟涛",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +40%\n• Phá Phòng{icon:pha-phong}: +40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ly-bach-thuong-hai-hiep-dao.png",
    "id": "1784048277055"
  },
  {
    "ten": "Hồng Đà La · Vạn Kiếp Phần Nhụy",
    "ten_zh": "红陀罗·万劫焚蕊",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +40%\n• Sát Thương Chí Mạng{icon:sat-thuong-chi-mang}: +50%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/hong-da-la-van-kiep-phan-nhuy.png",
    "id": "1784048392985"
  },
  {
    "ten": "Lã Động Tân · Khuynh Ba Hám Lãng",
    "ten_zh": "吕洞宾·倾波撼浪",
    "danh_muc": "Tấn công",
    "hieu_qua": "Trong chiến đấu, cứ mỗi {6 giây} toàn bộ quân cờ nhận cộng dồn:\n• Tấn Công{icon:tan-cong}: +7%\n• Phòng Thủ{icon:phong-thu}: +7%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/la-dong-tan-khuynh-ba-ham-lang.png",
    "id": "1784048572753"
  },
  {
    "ten": "Phù Khảm · Thương Xuyên Quyển Lãng",
    "ten_zh": "符坎·沧川卷浪",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +50%\n• Phòng Thủ{icon:phong-thu}: +50%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phu-kham-thuong-xuyen-quyen-lang.png",
    "id": "1784048710223"
  },
  {
    "ten": "Trạm Lô",
    "ten_zh": "湛卢",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +5%",
    "dac_hieu": "• Toàn bộ quân cờ phe ta được tăng sát thương{icon:tang-sat-thuong} bằng {1% × tổng số sao của các quân cờ đang ra trận}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tram-lo.png",
    "id": "1784049000799"
  },
  {
    "ten": "Thuần Quân",
    "ten_zh": "纯钧",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Nhận {5% × bậc sao} tăng sát thương{icon:tang-sat-thuong} và giảm sát thương{icon:giam-sat-thuong}",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thuan-quan.png",
    "id": "1784049291199"
  },
  {
    "ten": "Can Tương",
    "ten_zh": "干将",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Đánh dấu kẻ địch có Khí Huyết cao nhất. Toàn bộ quân cờ phe ta gây thêm {20%} sát thương lên mục tiêu đó, riêng quân cờ trang bị {Can Tương} gây thêm {20%} sát thương nữa.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/can-tuong.png",
    "id": "1784050199030"
  },
  {
    "ten": "Thắng Tà",
    "ten_zh": "胜邪",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Mỗi giây giảm {5%} Tấn Công của mục tiêu và tăng {4%} Tấn Công cho bản thân. Khi thắng {1} vòng đấu, hồi {8} điểm Khí Huyết cho kỳ thủ.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thang-ta.png",
    "id": "1784050308549"
  },
  {
    "ten": "Mạc Tà",
    "ten_zh": null,
    "danh_muc": "Tấn công",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Cứ mỗi {10} Linh Hồn, toàn bộ quân cờ phe ta nhận {3%} Hút Máu{icon:hut-mau}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/mac-ta.png",
    "id": "1784050423708"
  },
  {
    "ten": "Tiêu Luyện",
    "ten_zh": "宵练",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Chí Mạng{icon:chi-mang}: +20%",
    "dac_hieu": "• Khi hạ gục một quân cờ, có {50%} xác suất nhận {1} vàng.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tieu-luyen.png",
    "id": "1784050556981"
  },
  {
    "ten": "Thái A",
    "ten_zh": "泰阿",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Nếu được trang bị cho quân cờ {5} vàng, nhận {15%} tăng sát thương{icon:tang-sat-thuong} và {15%} giảm sát thương{icon:giam-sat-thuong}",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thai-a.png",
    "id": "1784050934324"
  },
  {
    "ten": "Ngư Trường",
    "ten_zh": "鱼肠",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +10%\n• Chí Mạng{icon:chi-mang}: +10%",
    "dac_hieu": "• Khi hạ gục mục tiêu, hồi {10%} Khí Huyết cho bản thân. Nếu Khí Huyết của kỳ thủ đang thấp nhất trong tất cả người chơi, toàn bộ quân cờ phe ta hồi thêm {15%} Khí Huyết.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ngu-truong.png",
    "id": "1784051126083"
  },
  {
    "ten": "Thiên Ngoại Vẫn Thiết",
    "ten_zh": "天外陨铁",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Sau {5} vòng đấu với kỳ thủ, sẽ rèn thành {Long Tuyền Kiếm} dựa trên bên có số trận thắng hoặc thua nhiều hơn.\n• Thắng: {0}\n• Thua: {0}",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thien-ngoai-van-thiet.png",
    "id": "1784051252491"
  },
  {
    "ten": "Long Tuyền",
    "ten_zh": "龙泉",
    "danh_muc": "Tấn công",
    "hieu_qua": "Nếu số trận thắng nhiều hơn số trận thua, {Long Tuyền} trở nên sắc bén hơn:\n• Tăng sát thương{icon:tang-sat-thuong}: +30%\n• Khí Huyết{icon:khi-huyet}: -10%\n• Trong {3} vòng đấu tiếp theo, mỗi khi thắng nhận thêm {5} vàng.\nNếu số trận thua nhiều hơn số trận thắng, {Long Tuyền} trở nên ôn nhuận hơn:\n• Giảm sát thương{icon:giam-sat-thuong}: +30%\n• Tấn Công{icon:tan-cong}: -10%\n• Trong {3} vòng đấu tiếp theo, mỗi vòng hồi {4} điểm Khí Huyết cho kỳ thủ.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/long-tuyen.png",
    "id": "1784051596089"
  },
  {
    "ten": "Hàm Quang",
    "ten_zh": "含光",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Nhận {0,4% × số liên kết đã kích hoạt} Toàn Thuộc Tính.\n• Sau lần đầu tham gia chiến đấu, ngẫu nhiên nhận {1} Vạn Chức Thư phù hợp hơn với quân cờ trang bị.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ham-quang.png",
    "id": "1784051830170"
  },
  {
    "ten": "Xích Tiêu",
    "ten_zh": "赤霄",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/xich-tieu.png",
    "id": "1784051914856"
  },
  {
    "ten": "Thu Thủy",
    "ten_zh": "秋水",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thu-thuy.png",
    "id": "1784051987385"
  },
  {
    "ten": "Công Bố",
    "ten_zh": "工布",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Phá Phòng{icon:pha-phong}: +15%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/cong-bo.png",
    "id": "1784052062011"
  },
  {
    "ten": "Tru Tiên",
    "ten_zh": "诛仙",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +16%\n• Khí Huyết{icon:khi-huyet}: +16%\n• Phòng Thủ{icon:phong-thu}: +16%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +16%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +16%\n• Chí Mạng{icon:chi-mang}: +16%\n• Hút Máu{icon:hut-mau}: +16%",
    "dac_hieu": "• Người trang bị sẽ chịu sự phản phệ của {Sát Khí}.\n• Sát Khí hiện tại: {0}\n• Sát Thương Chuẩn mỗi giây: {0}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tru-tien.png",
    "id": "1784052236881"
  },
  {
    "ten": "Lục Tiên",
    "ten_zh": "戮仙",
    "danh_muc": "Tấn công",
    "hieu_qua": "Thôn phệ quân cờ và căn cứ vào liên kết chức nghiệp đầu tiên của quân cờ đó để tăng thuộc tính tương ứng cho người trang bị:\n• Lực Sĩ: +5% Khí Huyết{icon:khi-huyet}\n• Cố Thủ: +5% Phòng Thủ{icon:phong-thu}\n• Phá Quân, Chiến Sĩ: +5% Hút Máu{icon:hut-mau}\n• Thích Khách, Mưu Sĩ: +5% Chí Mạng{icon:chi-mang}\n• Trọng Minh, Hồi Nguyên: +5% Hồi PhụcNội Lực{icon:hoi-phuc-noi-luc}\n• Xạ Thủ, Phụ Trận: +5% Tấn Công{icon:tan-cong}\n• Ngự Kiếm: +5% Tốc Độ Tấn Công{icon:toc-do-tan-cong}",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/luc-tien.png",
    "id": "1784052376725"
  },
  {
    "ten": "Tuyệt Tiên",
    "ten_zh": "绝仙",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: -5%",
    "dac_hieu": "Khi quân cờ trang bị {Tuyệt Tiên} tích lũy hạ gục {7/14/28/52/70} quân cờ, sẽ ngẫu nhiên nhận {1} Tâm Ngộ.\n• Số lần hạ gục hiện tại: {0}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tuyet-tien.png",
    "id": "1784052925039"
  },
  {
    "ten": "Ỷ Thiên",
    "ten_zh": "倚天",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Toàn đội tăng sát thương{icon:tang-sat-thuong}: +10%\n• Toàn đội giảm sát thương{icon:giam-sat-thuong}: +10%",
    "dac_hieu": "• Tất cả các liên kết được tăng thêm {1} tầng.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/y-thien.png",
    "id": "1784053069960"
  },
  {
    "ten": "Hiên Viên",
    "ten_zh": "轩辕",
    "danh_muc": "Tấn công",
    "hieu_qua": "Khi trên sân có ít nhất {6} quân cờ phe ta có cùng mức phí với quân cờ trang bị, tất cả các quân cờ đó nhận:\n• Toàn Thuộc Tính: +10%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/hien-vien.png",
    "id": "1784053161736"
  },
  {
    "ten": "Tiểu Mộc Kiếm",
    "ten_zh": "小木剑",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "Quân cờ trang bị sau khi tham gia {1/3/9} vòng đấu (tùy theo bậc sao) sẽ ngẫu nhiên biến thành một quân cờ có mức phí cao hơn {1}.\n• Số vòng đã tích lũy: {0}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tieu-moc-kiem.png",
    "id": "1784053276142"
  },
  {
    "ten": "Lưỡng Nghi Bội",
    "ten_zh": "两仪佩",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Tốc Độ Tấn Công: +40%\n• Khí Huyết{icon:khi-huyet}: +20%\n• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Tấn Công{icon:tan-cong}: {-30%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/luong-nghi-boi.png",
    "id": "1784094211669"
  },
  {
    "ten": "Mệnh Hồi Bào",
    "ten_zh": "命洄袍",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +15%\n• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Khi Khí Huyết lần đầu giảm xuống dưới {35%}, nhận lá chắn bằng {300%} Tấn Công.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/menh-hoi-bao.png",
    "id": "1784100104285"
  },
  {
    "ten": "Quy Nguyên Hồ",
    "ten_zh": "归元壶",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +15%\n• Khí Huyết{icon:khi-huyet}: +10%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "• Hồi Phục Nội Lực khi chịu đòn: {+50%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/quy-nguyen-ho.png",
    "id": "1784100237022"
  },
  {
    "ten": "Trường Mệnh Tỏa",
    "ten_zh": "长命锁",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +25%",
    "dac_hieu": "• Khí Huyết{icon:khi-huyet}: {+25%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/truong-menh-toa.png",
    "id": "1784100328694"
  },
  {
    "ten": "Yên Quy Lý",
    "ten_zh": "焉归履",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "• Cứ mỗi {2 giây} trong chiến đấu, hồi {3%} Khí Huyết.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/yen-quy-ly.png",
    "id": "1784100452301"
  },
  {
    "ten": "Thương Ngọc Uyển",
    "ten_zh": "苍玉腕",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +15%\n• Hút Máu{icon:hut-mau}: +15%",
    "dac_hieu": "• Khi bắt đầu chiến đấu, nhận trạng thái {Miễn Khống Chế} kéo dài {20 giây}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/thuong-ngoc-uyen.png",
    "id": "1784101498241"
  },
  {
    "ten": "Chiếu Hồn Đăng",
    "ten_zh": "照魂灯",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "Trong chiến đấu, liên tục gây trạng thái {Phá Phòng} và {Phá Khiên} lên kẻ địch trong phạm vi {2} ô xung quanh.\n• {Phá Phòng}: Giảm {10%} Phòng Thủ.\n• {Phá Khiên}: Giảm {35%} hiệu quả của Khiên.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/chieu-hon-dang.png",
    "id": "1784101669963"
  },
  {
    "ten": "Càn Trạch Phù",
    "ten_zh": "乾泽符",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\nPhòng Thủ{icon:phong-thu}: +15%",
    "dac_hieu": "• Sát Thương Chí Mạng phải chịu: {-50%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/can-trach-phu.png",
    "id": "1784101786711"
  },
  {
    "ten": "Tí Trân Tán",
    "ten_zh": "庇珍伞",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +25%",
    "dac_hieu": "• Phòng Thủ{icon:phong-thu}: {+25%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/ti-tran-tan.png",
    "id": "1784101896454"
  },
  {
    "ten": "Cố Nguyệt Khải",
    "ten_zh": "固月铠",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\n• Phòng Thủ{icon:phong-thu}: +15%",
    "dac_hieu": "• Giảm sát thương từ kỹ năng: {+40%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/co-nguyet-khai.png",
    "id": "1784101982922"
  },
  {
    "ten": "Củng Tinh Giáp",
    "ten_zh": "拱星甲",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\n• Phòng Thủ{icon:phong-thu}: +15%",
    "dac_hieu": "• Giảm sát thương từ đòn đánh thường: {+40%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/cung-tinh-giap.png",
    "id": "1784102091191"
  },
  {
    "ten": "Chỉ Thương Thuẫn",
    "ten_zh": "止殇盾",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "Khi bị tấn công, gây trạng thái {Tiết Lực} và {Nội Thương} lên kẻ địch trong {5 giây}.\n• {Tiết Lực}: Giảm {10%} Tấn Công.\n• {Nội Thương}: Giảm {35%} hiệu quả Hút Máu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/chi-thuong-thuan.png",
    "id": "1784102206788"
  },
  {
    "ten": "Chước Diễm Sam",
    "ten_zh": "灼焰衫",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +15%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "Cứ mỗi {2 giây}, ngẫu nhiên gây trạng thái {Thiêu Đốt} và {Trọng Thương} lên {1} kẻ địch trong phạm vi {2} ô, kéo dài {10 giây}.\n• {Thiêu Đốt}: Mỗi giây chịu Sát Thương Chuẩn bằng {1,5%} Khí Huyết.\n• {Trọng Thương}: Giảm {33%} hiệu quả hồi phục Khí Huyết.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/chuoc-diem-sam.png",
    "id": "1784102363800"
  },
  {
    "ten": "Kinh Thích Thuẫn",
    "ten_zh": "荆刺盾",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +10%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "Trong chiến đấu, cứ mỗi {1 giây} còn sống sẽ cộng dồn Phản Thương {+4%} (tối đa {80%}).\n• {Phản Thương}: Mỗi giây phản lại cho mục tiêu hiện tại một phần sát thương ban đầu đã phải chịu.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/kinh-thich-thuan.png",
    "id": "1784102507801"
  },
  {
    "ten": "Chủng Sư Đạo · Long Hổ Câu Lạc Đai",
    "ten_zh": "种师道·龙虎钩络带",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +60%",
    "dac_hieu": "• Khi chịu sát thương, cộng dồn Đỡ Đòn {+0.5}. Khi đạt {60 tầng}, tiêu hao toàn bộ số tầng để triệu hồi thiên thạch, gây choáng kẻ địch xung quanh trong {1.5 giây}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/chung-su-dao-long-ho-cau-lac-dai.png",
    "id": "1784102689750"
  },
  {
    "ten": "Khương Khước · Giang Sơn Thác Kim Phù",
    "ten_zh": "姜却·江山错金符",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +60%",
    "dac_hieu": "• Khi bắt đầu chiến đấu, tạo Lá Chắn cho toàn bộ quân cờ phe ta bằng {100%/150%/225%} Phòng Thủ của người trang bị (tùy theo bậc sao), kéo dài {20 giây}. Trong thời gian Lá Chắn còn tồn tại, quân cờ được {Miễn Khống Chế}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/khuong-khuoc-giang-son-thac-kim-phu.png",
    "id": "1784102806141"
  },
  {
    "ten": "Thiết Thủ · Bát Phong Trúc Lạp",
    "ten_zh": "铁手·八风竹笠",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +25%\n• Phòng Thủ{icon:phong-thu}: +25%",
    "dac_hieu": "• Trong chiến đấu, cứ mỗi {0.5 giây} cộng dồn {8%} tăng sát thương. Mỗi lần gây sát thương, lượng tăng sát thương do trang bị này cung cấp sẽ giảm {10%}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/thiet-thu-bat-phong-truc-lap.png",
    "id": "1784102912753"
  },
  {
    "ten": "Mặc Bất Nghịch · Di Kiên Bạo Lân Trụ",
    "ten_zh": "墨不逆·弥坚暴鳞胄",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +60%",
    "dac_hieu": "• Hiệu quả hồi phục Khí Huyết nhận được: {+50%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/mac-bat-nghich-di-kien-bao-lan-tru.png",
    "id": "1784103002675"
  },
  {
    "ten": "Liễu Thương Hải · Vĩnh Dạ",
    "ten_zh": "柳沧海·永夜",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Không có.",
    "dac_hieu": "• Sau khi vào chiến đấu được {23 giây}, nhận Toàn Thuộc Tính {+50%}, Tỷ lệ Né Tránh: {+50%}",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/lieu-thuong-hai-vinh-da.png",
    "id": "1784103172038"
  },
  {
    "ten": "Mặc Bất Nghịch · Ách Khu",
    "ten_zh": "墨不逆·厄躯",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +60%",
    "dac_hieu": "• Khi quân cờ trang bị bị hạ gục, sẽ phát nổ, gây {20%~80%} Khí Huyết tối đa của bản thân dưới dạng sát thương chia đều lên kẻ địch trong phạm vi {3} ô (tỷ lệ tăng theo thời gian sống sót).",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/mac-bat-nghich-ach-khu.png",
    "id": "1784103313764"
  },
  {
    "ten": "Trương Phi · Tồi Nhạc Khuynh Phong",
    "ten_zh": "张飞·摧岳倾峰",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +40%\n• Phòng Thủ{icon:phong-thu}: +40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/phi-phong-toi-nhac-phi-phong.png",
    "id": "1784103409076"
  },
  {
    "ten": "Diệp Khinh Trần · Tiêm Vân Lộng Xảo",
    "ten_zh": "叶轻尘·纤云弄巧",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "Trong chiến đấu nhận:\n• Tấn Công{icon:tan-cong}: +40%\nSau {15 giây}, toàn bộ quân cờ nhận:\n• Khí Huyết{icon:khi-huyet}: +30%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/diep-khuynh-tran-tiem-van-long-xao.png",
    "id": "1784103532725"
  },
  {
    "ten": "Tịch Lư",
    "ten_zh": "辟闾",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/phong-thu/tich-lu.png",
    "id": "1784103640297"
  },
  {
    "ten": "Bích Huyết Doanh Vạn Chức Thư",
    "ten_zh": "碧血营万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-doanh-van-chuc-thu.png",
    "id": "1784183854386"
  },
  {
    "ten": "Minh Uyên Vạn Chức Thư",
    "ten_zh": "冥渊万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Minh Uyên}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/minh-uyen-van-chuc-thu.png",
    "id": "1784184035281"
  },
  {
    "ten": "Phượng Thành Vạn Chức Thư",
    "ten_zh": "凤城万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Phượng Thành}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/phuong-thanh-van-chuc-thu.png",
    "id": "1784184183267"
  },
  {
    "ten": "Võ Lâm Phong Vân Lục Vạn Chức Thư",
    "ten_zh": "武林风云录万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tốc Độ Đánh{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Võ Lâm Phong Vân Lục}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/vo-lam-phong-van-luc-van-chuc-thu.png",
    "id": "1784184308997"
  },
  {
    "ten": "Sơ Thiệp Giang Hồ Vạn Chức Thư",
    "ten_zh": "初涉江湖万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Sơ Thiệp Giang Hồ}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/so-thiep-giang-ho-van-chuc-thu.png",
    "id": "1784184421026"
  },
  {
    "ten": "Tiểu Sủng Liên Manh Vạn Chức Thư",
    "ten_zh": "小宠联萌万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Tiểu Sủng Liên Manh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/tieu-sung-lien-manh-van-chuc-thu.png",
    "id": "1784184511675"
  },
  {
    "ten": "Thiên Hạ Song Thế Vạn Chức Thư",
    "ten_zh": "天下双势万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Thiên Hạ Song Thế}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/thien-ha-song-the-van-chuc-thu.png",
    "id": "1784184596988"
  },
  {
    "ten": "Kính Thiên Các Vạn Chức Thư",
    "ten_zh": "镜天阁万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Kính Thiên Các}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/kinh-thien-cac-van-chuc-thu.png",
    "id": "1784184679076"
  },
  {
    "ten": "Cố Thủ Vạn Chức Thư",
    "ten_zh": "固守万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Cố Thủ}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/co-thu-van-chuc-thu.png",
    "id": "1784184811020"
  },
  {
    "ten": "Lực Sĩ Vạn Chức Thư",
    "ten_zh": "力士万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Lực Sĩ}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/luc-si-van-chuc-thu.png",
    "id": "1784184905197"
  },
  {
    "ten": "Phá Quân Vạn Chức Thư",
    "ten_zh": "破军万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "Quân cờ trang bị nhận liên kết {Phá Quân}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/pha-quan-van-chuc-thu.png",
    "id": "1784184993398"
  },
  {
    "ten": "Chiến Sĩ Vạn Chức Thư",
    "ten_zh": "战士万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Hút Máu{icon:hut-mau}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Chiến Sĩ}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/chien-si-van-chuc-thu.png",
    "id": "1784185077375"
  },
  {
    "ten": "Thích Khách Vạn Chức Thư",
    "ten_zh": "刺客万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Thích Khách}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/thich-khach-van-chuc-thu.png",
    "id": "1784185193325"
  },
  {
    "ten": "Trọng Minh Vạn Chức Thư",
    "ten_zh": "重鸣万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Trọng Minh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/trong-minh-van-chuc-thu.png",
    "id": "1784185340503"
  },
  {
    "ten": "Hồi Nguyên Vạn Chức Thư",
    "ten_zh": "回元万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Hồi Nguyên}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/hoi-nguyen-van-chuc-thu.png",
    "id": "1784185435205"
  },
  {
    "ten": "Mưu Sĩ Vạn Chức Thư",
    "ten_zh": "谋士万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Chí Mạng{icon:chi-mang}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Mưu Sĩ}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/muu-si-van-chuc-thu.png",
    "id": "1784185526141"
  },
  {
    "ten": "Ngự Kiếm Vạn Chức Thư",
    "ten_zh": "御剑万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tốc Độ Tấn Công: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Ngự Kiếm}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/ngu-kiem-van-chuc-thu.png",
    "id": "1784185618108"
  },
  {
    "ten": "Xạ Thủ Vạn Chức Thư",
    "ten_zh": "射手万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận liên kết {Xạ Thủ}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/xa-thu-van-chuc-thu.png",
    "id": "1784185711865"
  },
  {
    "ten": "Đàn Gia Chỉ Hoàn",
    "ten_zh": "檀家指环",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +5%\n• Phòng Thủ{icon:phong-thu}: +5%\n• Khí Huyết{icon:khi-huyet}: +5%",
    "dac_hieu": "• Chỉ {Đàn Thấm} có thể trang bị.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/dan-ga-chi-hoan.png",
    "id": "1784185892640"
  },
  {
    "ten": "Phổ Thông Đồng Tâm Kính",
    "ten_zh": "普通同心镜",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Kéo lên quân cờ bậc {1~3} phí để nhận {1} bản sao {1} sao của quân cờ đó.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/pho-thong-dong-tam-kinh.png",
    "id": "1784186001849"
  },
  {
    "ten": "Phúc Bảo Điệp Điệp Lạc",
    "ten_zh": "福宝叠叠乐",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "Sử dụng lên quân cờ để một {Phúc Bảo} ngẫu nhiên đứng trên đầu, cung cấp {8%} thuộc tính tương ứng. Các quân cờ đồng minh khác cũng nhận {50%} hiệu quả này.\n• Kim Sắc Truyền Thuyết: Tấn Công{icon:tan-cong}\n• Kim Tiểu Hoa: Phòng Thủ{icon:phong-thu}\n• Phúc Phúc: Khí Huyết{icon:khi-huyet}\n• Thảo Linh Đang: Tốc Độ Tấn Công{icon:toc-do-tan-cong}\n• Vân Thanh Thanh: Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}\n• Mộ Mộ Yên: Tăng Sát Thương{icon:tang-sat-thuong}\n• Tuyết Lạc Anh: Giảm Sát Thương{icon:giam-sat-thuong}",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/phuc-bao-diep-diep-lac.png",
    "id": "1784186242680"
  },
  {
    "ten": "Hỏa Linh Châu",
    "ten_zh": "火灵珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%\n• Hút Máu{icon:hut-mau}: +20%",
    "dac_hieu": "• Khi thu thập đủ {5} Linh Châu trong khu vực trang bị (cần tháo các Linh Châu khỏi quân cờ), sẽ tự động hợp thành {Ngũ Linh Bảo Châu}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/hoa-linh-chau.png",
    "id": "1784186356205"
  },
  {
    "ten": "Thủy Linh Châu",
    "ten_zh": "水灵珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +30%\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +20%",
    "dac_hieu": "• Khi thu thập đủ {5} Linh Châu trong khu vực trang bị (cần tháo các Linh Châu khỏi quân cờ), sẽ tự động hợp thành {Ngũ Linh Bảo Châu}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/thuy-linh-chau.png",
    "id": "1784186460950"
  },
  {
    "ten": "Thổ Linh Châu",
    "ten_zh": "土灵珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +50%\n• Phòng Thủ{icon:phong-thu}: +25%",
    "dac_hieu": "• Khi thu thập đủ {5} Linh Châu trong khu vực trang bị (cần tháo các Linh Châu khỏi quân cờ), sẽ tự động hợp thành {Ngũ Linh Bảo Châu}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/tho-linh-chau.png",
    "id": "1784186542988"
  },
  {
    "ten": "Phong Linh Châu",
    "ten_zh": "风灵珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +30%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +30%",
    "dac_hieu": "• Khi thu thập đủ {5} Linh Châu trong khu vực trang bị (cần tháo các Linh Châu khỏi quân cờ), sẽ tự động hợp thành {Ngũ Linh Bảo Châu}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/phong-linh-chau.png",
    "id": "1784186631130"
  },
  {
    "ten": "Lôi Linh Châu",
    "ten_zh": "雷灵珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +40%\n• Chí Mạng{icon:chi-mang}: +40%",
    "dac_hieu": "• Khi thu thập đủ {5} Linh Châu trong khu vực trang bị (cần tháo các Linh Châu khỏi quân cờ), sẽ tự động hợp thành {Ngũ Linh Bảo Châu}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/loi-linh-chau.png",
    "id": "1784186721805"
  },
  {
    "ten": "Dao Lâm Ngưng Trạch Cao",
    "ten_zh": "瑶林凝泽膏",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Ở hiệp kế tiếp, nhận Giảm Sát Thương{icon:giam-sat-thuong}: +40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/dao-lam-ngung-trach-cao.png",
    "id": "1784186904804"
  },
  {
    "ten": "Tiềm Uyên Diệu Dạ Châu",
    "ten_zh": "潜渊耀夜珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Ở hiệp kế tiếp, nhận Tăng Sát Thương{icon:tang-sat-thuong}: +40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/tiem-uyen-dieu-da-chau.png",
    "id": "1784187060467"
  },
  {
    "ten": "Võ Lâm Cựu Sự",
    "ten_zh": "武林旧事",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Kéo lên bất kỳ quân cờ nào để đọc, có thể làm mới hiệu ứng. Toàn bộ quân cờ thuộc liên kết {Võ Lâm Phong Vân Lục} nhận:",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/vo-lam-cuu-su.png",
    "id": "1784187347495"
  },
  {
    "ten": "Bách Biến Vạn Chức Thư",
    "ten_zh": "百变万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Sau khi quân cờ trang bị, khi trận đấu kết thúc, trang bị này sẽ biến thành một {Vạn Chức Thư} ngẫu nhiên (có xác suất cao hơn biến thành {Vạn Chức Thư} thuộc {Liên Kết} mà người trang bị đang sở hữu).",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bach-bien-van-chuc-thu.png",
    "id": "1785225364476"
  },
  {
    "ten": "Cao Cấp Đồng Tâm Kính",
    "ten_zh": "高级同心镜",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Kéo lên bất kỳ quân cờ nào để nhận 1 bản sao {1 Sao} của quân cờ đó.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/cao-cap-dong-tam-kinh.png",
    "id": "1785225560588"
  },
  {
    "ten": "Tố Phong Trọng Đoán Khí",
    "ten_zh": "塑锋重锻器",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Kéo lên quân cờ để ngẫu nhiên biến trang bị của quân cờ đó thành một trang bị khác có cùng {Phẩm Chất}.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/to-phong-trong-doan-khi.png",
    "id": "1785225694226"
  },
  {
    "ten": "Bích Huyết · Kim Điêu Yên Tiên",
    "ten_zh": "碧血·金雕鞍鞯",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +{30%}.",
    "dac_hieu": "• Tăng {20%} hiệu quả {Khiên}. Trong thời gian có {Khiên}, nhận {Miễn Khống}.\n• {Thần Binh Bích Huyết}: Tăng {7%} sát thương gây ra{icon:tang-sat-thuong} và giảm {7%} sát thương phải chịu{icon:giam-sat-thuong} cho các quân cờ thuộc {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-kim-dieu-yen-tien.png",
    "id": "1785225943974"
  },
  {
    "ten": "Bích Huyết · Phá Trận Chiến Kích",
    "ten_zh": "碧血·破阵战戟",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +{15%}.\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +{15%}.",
    "dac_hieu": "• Khi gây {Choáng}, gây thêm {10%} Sát thương chuẩn lên mục tiêu.\n• {Thần Binh Bích Huyết}: Tăng {7%} sát thương gây ra{icon:tang-sat-thuong} và giảm {7%} sát thương phải chịu{icon:giam-sat-thuong} cho các quân cờ thuộc {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-pha-tran-chien-kich.png",
    "id": "1785226160759"
  },
  {
    "ten": "Bích Huyết · Mạn Quyển Vân Đao",
    "ten_zh": "碧血·漫卷云刀",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +{30%}.",
    "dac_hieu": "• Tầm Đánh{icon:tam-danh}: +{1 ô}. Mỗi đòn {Đánh Thường} cộng dồn {1% Hút Máu}, tối đa {30} tầng.\n• {Thần Binh Bích Huyết}: Tăng {7%} sát thương gây ra{icon:tang-sat-thuong} và giảm {7%} sát thương phải chịu{icon:giam-sat-thuong} cho các quân cờ thuộc {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyen-man-quyen-van-dao.png",
    "id": "1785227102393"
  },
  {
    "ten": "Bích Huyết Đan Tâm Xí Kỳ",
    "ten_zh": "碧血丹心炽旗",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +{15%}.\n• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +{15%}.",
    "dac_hieu": "• Sau khi bắt đầu trận đấu, nhận {50%} Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc} trong {10 giây}.\n• {Thần Binh Bích Huyết}: Tăng {7%} sát thương gây ra{icon:tang-sat-thuong} và giảm {7%} sát thương phải chịu{icon:giam-sat-thuong} cho các quân cờ thuộc {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-dan-tam-xi-ky.png",
    "id": "1785227342611"
  },
  {
    "ten": "Bích Huyết · Hoàng Sa Chiến Giáp",
    "ten_zh": "碧血·黄沙战甲",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +{30%}.",
    "dac_hieu": "• Phá Phòng{icon:pha-phong}: +{25}.\n• {Thần Binh Bích Huyết}: Tăng {7%} sát thương gây ra{icon:tang-sat-thuong} và giảm {7%} sát thương phải chịu{icon:giam-sat-thuong} cho các quân cờ thuộc {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-hoang-sa-chien-giap.png",
    "id": "1785227454399"
  },
  {
    "ten": "Bích Huyết · Điều Binh Hổ Phù",
    "ten_zh": "碧血·调兵虎符",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +{15%}.\n• Chí Mạng{icon:chi-mang}: +{10%}.\n• Hút Máu{icon:hut-mau}: +{10%}.",
    "dac_hieu": "• Nhận {10%} Tăng sát thương{icon:tang-sat-thuong}. Mỗi quân cờ thuộc {Bích Huyết Doanh} bên phe ta sẽ tăng thêm {2%} hiệu ứng này.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-doanh-dieu-binh-ho-phu.png",
    "id": "1785227756040"
  },
  {
    "ten": "Bích Huyết · Vô Tồi Liên Bích",
    "ten_zh": "碧血·无摧连璧",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +{15%}.\n• Phòng Thủ{icon:phong-thu}: +{15%}.",
    "dac_hieu": "• Nhận {10%} Giảm Sát Thương{icon:giam-sat-thuong}. Mỗi quân cờ thuộc {Bích Huyết Doanh} bên phe ta sẽ tăng thêm {2%} hiệu ứng này.\n• {Thần Binh Bích Huyết}: Tăng {7%} sát thương gây ra{icon:tang-sat-thuong} và giảm {7%} sát thương phải chịu{icon:giam-sat-thuong} cho các quân cờ thuộc {Bích Huyết Doanh}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/bich-huyet-vo-toi-lien-bich.png",
    "id": "1785228047135"
  },
  {
    "ten": "Canh Mạnh Bà",
    "ten_zh": "孟婆汤",
    "danh_muc": "Đặc biệt",
    "hieu_qua": null,
    "dac_hieu": "Dùng lên quân cờ thuộc Minh Uyên, sẽ kích hoạt hiệu ứng khác nhau tùy theo Luân Hồi hiện tại.\n• {Thiên Thần Đạo}: Mất {2} điểm Khí Huyết Kỳ Thủ, quân cờ {Minh Uyên} nhận {20%} Tăng Sát Thương và {20%} Giảm Sát Thương.\n• {Địa Ngục Đạo}: Quân cờ {Minh Uyên} nhận {13%} Tăng sát thương và {13%} Giảm Sát Thương.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/canh-manh-ba.png",
    "id": "1785228239089"
  },
  {
    "ten": "Thiên Hoang Dị Văn",
    "ten_zh": "天荒异闻",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "Kéo lên bất kỳ quân cờ nào để xem lại, có thể làm mới hiệu ứng. Khiến quân cờ Võ Lâm Phong Vân Lục mạnh nhất nhận được:",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/thien-hoang-di-van.png",
    "id": "1785562416364"
  },
  {
    "ten": "Tương Ngộ",
    "ten_zh": "遇见",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": "• Nếu Đàn Thấm còn sống khi trận đấu kết thúc, nhận {1} vàng. Chỉ có thể trang bị cho Đàn Thấm.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/tuong-ngo.png",
    "id": "1785562536784"
  },
  {
    "ten": "Cô Tinh",
    "ten_zh": "孤星",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +10%\n• Phòng Thủ{icon:phong-thu}: +10%",
    "dac_hieu": "• Khi bắt đầu trận đấu, nếu trong phạm vi {2} ô xung quanh Đàn Thấm không có quân cờ đồng minh, nhận {10%} tăng sát thươn{icon:tang-sat-thuong} và {10%} giảm sát thương{icon:giam-sat-thuong}. Chỉ có thể trang bị cho Đàn Thấm.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/co-tinh.png",
    "id": "1785562743988"
  },
  {
    "ten": "Lệnh Chú Ma Cổ",
    "ten_zh": "魔蛊咒令",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Dùng lên quân cờ không thuộc Ma Thiên. Khi bắt đầu trận đấu, quân cờ đó sẽ nhận {300%} tăng trưởng thuộc tính của quân cờ Ma Thiên gần nhất với nó.",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/lenh-chu-ma-co.png",
    "id": "1785562827654"
  },
  {
    "ten": "Ma Chủ · Vạn Cổ Xà Trượng",
    "ten_zh": "魔主·万蛊蛇杖",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Người mang sẽ triển khai U Minh Độc Trì, mỗi giây gây {2%} sát thương chuẩn theo Khí huyết lên các mục tiêu trong phạm vi {2} ô, đồng thời hồi {2%} Khí huyết cho bản thân mỗi giây.\n• {Bích Huyết Thần Binh}: Cung cấp cho toàn bộ quân cờ Bích Huyết Doanh {7%} tăng sát thương{icon:tang-sat-thuong} và {7%} giảm sát thương{icon:giam-sat-thuong}",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/ma-chu-van-co-xa-truong.png",
    "id": "1785563024733"
  },
  {
    "ten": "Lệnh Bài Võ Lâm Minh Chủ",
    "ten_zh": "武林盟主令",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +50%\n• Chí Mạng{icon:chi-mang}: +50%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +30%\n• Hồi Phục Nội lực{icon:hoi-phuc-noi-luc}: +30%",
    "dac_hieu": "• Nếu quân cờ mang trang bị này bị hạ gục, kỳ thủ sẽ trực tiếp thua trận đấu của hiệp đó.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/lenh-bai-vo-lam-minh-chu.png",
    "id": "1785563159856"
  },
  {
    "ten": "Thừa Thương Khải",
    "ten_zh": "承殇铠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +50%\n• Phòng Thủ{icon:phong-thu}: +50%\n• Khí Huyết{icon:khi-huyet}: +50%",
    "dac_hieu": "• Khi quân cờ mang trang bị này bị hạ gục, quân cờ kết liễu sẽ nhận toàn bộ thuộc tính của trang bị này trong phần còn lại của hiệp đấu hiện tại.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/thua-thuong-khai.png",
    "id": "1785563265380"
  },
  {
    "ten": "Hiệp Ảnh Đan Tâm",
    "ten_zh": "侠影丹心",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Kéo lên bất kỳ quân cờ nào để xem lại, có thể làm mới hiệu ứng. Khiến tất cả quân cờ đang ra trận nhận được:",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/hiep-anh-dan-tam.png",
    "id": "1785563500275"
  },
  {
    "ten": "Chương Liệt Trận",
    "ten_zh": "列阵之章",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +10%\n• Tấn Công{icon:tan-cong}: +10%",
    "dac_hieu": "• Giới hạn số lượng quân cờ ra trận {+1}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/chuong-liet-tran.png",
    "id": "1785563590687"
  },
  {
    "ten": "Ngũ Linh Bảo Châu",
    "ten_zh": "五灵宝珠",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +40%\n• Khí Huyết{icon:khi-huyet}: +40%\n• Phòng Thủ{icon:phong-thu}: +40%\n• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +40%\n• Hồi Phục Nội lực{icon:hoi-phuc-noi-luc}: +40%\n• Chí Mạng{icon:chi-mang}: +40%\n• Hút Máu{icon:hut-mau}: +40%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/dac-biet/ngu-linh-bao-chau.png",
    "id": "1785563721119"
  }
];
