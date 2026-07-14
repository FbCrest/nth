export interface QuanCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  gia_xu: number | null;
  loai: string | null;
  tags: string[];
  lien_ket_phe: string[];
  lien_ket_phai: string[];
  ky_nang_ten: string | null;
  ky_nang_icon: string | null;
  ky_nang_mo_ta: string | null;
  image_url: string | null;
}

export const quanCoData: QuanCo[] = [
  {
    "ten": "Phương Thừa Ý",
    "ten_zh": "方承意",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Chiến Binh Toàn Năng",
    "tags": [
      "Hút Máu",
      "Phòng Thủ",
      "Tấn Công"
    ],
    "lien_ket_phe": [
      "minh-chieu-hau",
      "so-thiep-giang-ho"
    ],
    "lien_ket_phai": [],
    "ky_nang_ten": "Thương Diễm Liệt Tâm",
    "ky_nang_icon": "/images/co-nghich-thuy-han/ky-nang/thuong-diem-liet-tam.png",
    "ky_nang_mo_ta": "• {Chủ động}: Đâm vào mục tiêu hiện tại, gây {107 sát thương}{icon:tan-cong}. Sau đó xoay trường thương, gây {539 sát thương}{icon:tan-cong} chia đều lên các mục tiêu trong phạm vi {1 ô} xung quanh. Cuối cùng đâm mạnh về phía trước, gây {115 sát thương}{icon:tan-cong} chia đều.\n• {Bị động}: Với mỗi chỉ số của mục tiêu thấp hơn {Phương Thừa Ý}, kỹ năng sẽ được cường hóa thêm một hiệu ứng.\n• {Khí huyết}: Sau khi đâm, hồi {323 Khí Huyết}{icon:khi-huyet} và hất mục tiêu lên đầu thương.\n• {Tấn công}: Trong thời gian thi triển kỹ năng, {Phương Thừa Ý} nhận {20% tăng sát thương kỹ năng}.\n• {Phòng thủ}: Sau cú đâm, nhận {235 lá chắn}{icon:phong-thu}, đồng thời gây thêm {15% Khí Huyết của mục tiêu} dưới dạng {Sát thương Chuẩn}.\n• {Tốc đánh}: Khi xoay thương, phóng ra {Hỏa Long}, tăng phạm vi sát thương lên {3/6 ô} (dựa trên chênh lệch tốc đánh giữa hai bên).\n• {Hồi Nội lực}: Sau khi kết thúc kỹ năng, {Phương Thừa Ý} nhận {50% giảm sát thương} trong {2 giây}.\n• {Chí mạng}: Nhận trạng thái {Không thể bị chọn làm mục tiêu} trong thời gian ngắn; khi hạ gục mục tiêu có {50%} xác suất nhận {1 Vàng}.\n• {Hút máu}: Sau khi kết thúc kỹ năng, nhận {Miễn khống chế} trong {5 giây}.",
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/phuong-thua-y.png",
    "id": "1783878603881"
  },
  {
    "ten": "Trương Thúc Dạ",
    "ten_zh": "张叔夜",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Đỡ Đòn Toàn Năng",
    "tags": [
      "Phòng Thủ",
      "Khí Huyết",
      "Hồi Phục Nội Lực"
    ],
    "lien_ket_phe": [
      "bich-huyet-doanh"
    ],
    "lien_ket_phai": [
      "phong-thu",
      "co-thu"
    ],
    "ky_nang_ten": "Huyết Kỵ Đan Tâm",
    "ky_nang_icon": "/images/co-nghich-thuy-han/ky-nang/huyet-ky-dan-tam.png",
    "ky_nang_mo_ta": "{Bị động}: Khi bắt đầu chiến đấu, Trương Thúc Dạ nhận {700 lá chắn}{icon:phong-thu} và cưỡi chiến mã. Khi lá chắn bị phá vỡ hoặc sau {15 giây} kể từ khi giao chiến, Trương Thúc Dạ xuống ngựa và lập tức thi triển một lần {Đằng Long Dược Uyên}. Trương Thúc Dạ sẽ sở hữu bộ kỹ năng khác nhau khi ở {Trên Ngựa} và {Dưới Ngựa}.\n{Trên Ngựa}: Nhận {357 lá chắn}{icon:phong-thu}, nhảy đến phía sau mục tiêu và gây {288 sát thương}{icon:tan-cong} chia đều lên các mục tiêu trong phạm vi 1 ô xung quanh.\n{Dưới Ngựa}: Cường hóa đòn đánh thường trong {5 giây}, nhận thêm {50% tốc độ đánh}{icon:toc-do-tan-cong} cơ bản, mỗi đòn đánh thường gây thêm {255 sát thương}{icon:tan-cong}.\n{Đằng Long Dược Uyên}: Tung người lên không và di chuyển đến bên cạnh mục tiêu có Phòng Thủ thấp nhất trong phạm vi {3 ô} (không thể bị chọn làm mục tiêu trong thời gian này), sau đó giáng xuống gây {504 sát thương}{icon:tan-cong} chia đều lên các mục tiêu trong phạm vi {1 ô} và hất tung trong {1 giây}.",
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/truong-thuc-da.png",
    "id": "1783937034216"
  },
  {
    "ten": "Vu Nhã",
    "ten_zh": "巫雅",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Chiến Binh Toàn Năng",
    "tags": [
      "Tấn Công",
      "Hút Máu",
      "Tốc Độ Tấn Công"
    ],
    "lien_ket_phe": [
      "minh-uyen"
    ],
    "lien_ket_phai": [
      "Tri-lieu",
      "ho-tro",
      "hoi-nguyen"
    ],
    "ky_nang_ten": "Thần Nữ Hiện Thế",
    "ky_nang_icon": "/images/co-nghich-thuy-han/ky-nang/than-nu-hien-the.png",
    "ky_nang_mo_ta": "{Bị động}: Vu Nhã quyết tâm hoàn thành sự lột xác từ {Trảm Trần Duyên} sang {Khuy Thiên Đạo}. Trong quá trình lột xác, cô còn phải chịu trạng thái {Nội Lực Thất Thoát}.\n{Trảm Trần Duyên}: Vu Nhã chiến đấu bằng lưỡi hái. Đòn đánh thường gây sát thương chia đều lên tất cả mục tiêu trong phạm vi 1 ô xung quanh, đồng thời bản thân nhận thêm {4% toàn thuộc tính}{icon:tan-cong}{icon:phong-thu}{icon:khi-huyet}{icon:toc-do-tan-cong}{icon:hoi-phuc-noi-luc}, cộng dồn tối đa {10 tầng}.",
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/vu-nha.png",
    "id": "1783963058358"
  },
  {
    "ten": "Vô Tình",
    "ten_zh": "无情",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Đánh Thường Ưu Tiên Đứng Sau",
    "tags": [],
    "lien_ket_phe": [
      "bach-de-thanh"
    ],
    "lien_ket_phai": [
      "ngu-kiem"
    ],
    "ky_nang_ten": null,
    "ky_nang_icon": null,
    "ky_nang_mo_ta": null,
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/vo-tinh.png",
    "id": "1784012280660"
  },
  {
    "ten": "Kinh Kha",
    "ten_zh": "荆轲",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Kỹ Năng Sát Thủ",
    "tags": [
      "Chí Mạng",
      "Tấn Công",
      "Tốc Độ Tấn Công"
    ],
    "lien_ket_phe": [
      "vo-lam-phong-van-luc"
    ],
    "lien_ket_phai": [
      "sat-thu",
      "thich-khach"
    ],
    "ky_nang_ten": null,
    "ky_nang_icon": null,
    "ky_nang_mo_ta": null,
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/kinh-kha.png",
    "id": "1784013164204"
  },
  {
    "ten": "Phượng Triều Ca",
    "ten_zh": "凤朝歌",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Kỹ Năng Hỗ Trợ",
    "tags": [],
    "lien_ket_phe": [
      "phuong-thanh"
    ],
    "lien_ket_phai": [
      "xa-thu"
    ],
    "ky_nang_ten": null,
    "ky_nang_icon": null,
    "ky_nang_mo_ta": null,
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/phuong-trieu-ca.png",
    "id": "1784013670563"
  }
];
