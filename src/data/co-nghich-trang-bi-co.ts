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
  }
];
