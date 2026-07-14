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
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ma-thien-van-chuc-thu.png",
    "id": "1783928282684"
  },
  {
    "ten": "Bạch Đế Thành Vạn Chức Thư",
    "ten_zh": "白帝城万职书",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận {Liên Kết Bạch Đế Thành}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/bach-de-thanh-van-chuc-thu.png",
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
  }
];
