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
    "loai": null,
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
    "ky_nang_mo_ta": "• {Chủ động}: Đâm vào mục tiêu hiện tại, gây {107} sát thương. Sau đó xoay trường thương, gây {539} sát thương chia đều lên các mục tiêu trong phạm vi {1 ô} xung quanh. Cuối cùng đâm mạnh về phía trước, gây {115} sát thương chia đều.\n• {Bị động}: Với mỗi chỉ số của mục tiêu thấp hơn {Phương Thừa Ý}, kỹ năng sẽ được cường hóa thêm một hiệu ứng.\n• {Khí huyết}: Sau khi đâm, hồi {323} Khí Huyết và hất mục tiêu lên đầu thương.\n• {Tấn công}: Trong thời gian thi triển kỹ năng, {Phương Thừa Ý} nhận {20% tăng sát thương kỹ năng}.\n• {Phòng thủ}: Sau cú đâm, nhận {235 (1)} lá chắn, đồng thời gây thêm {15% Khí Huyết của mục tiêu} dưới dạng {Sát thương Chuẩn}.\n• {Tốc đánh}: Khi xoay thương, phóng ra {Hỏa Long}, tăng phạm vi sát thương lên {3/6 ô} (dựa trên chênh lệch tốc đánh giữa hai bên).\n• {Hồi Nội lực}: Sau khi kết thúc kỹ năng, {Phương Thừa Ý} nhận {50% giảm sát thương} trong {2 giây}.\n• {Chí mạng}: Nhận trạng thái {Không thể bị chọn làm mục tiêu} trong thời gian ngắn; khi hạ gục mục tiêu có {50%} xác suất nhận {1 Vàng}.\n• {Hút máu}: Sau khi kết thúc kỹ năng, nhận {Miễn khống chế} trong {5 giây}.",
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/phuong-thua-y.png",
    "id": "1783878603881"
  },
  {
    "ten": "Trương Thúc Dạ",
    "ten_zh": "张叔夜",
    "so_sao": null,
    "gia_xu": 5,
    "loai": "Đấu Sĩ Toàn Năng",
    "tags": [
      "Phòng Thủ",
      "Khí Huyết",
      "Hồi Phục Nội Lực"
    ],
    "lien_ket_phe": [
      "bich-huyet-doanh"
    ],
    "lien_ket_phai": [
      "phong-thu"
    ],
    "ky_nang_ten": null,
    "ky_nang_icon": null,
    "ky_nang_mo_ta": null,
    "chi_so": null,
    "image_url": "/images/co-nghich-thuy-han/quan-co/truong-thuc-da.png",
    "id": "1783937034216"
  }
];
