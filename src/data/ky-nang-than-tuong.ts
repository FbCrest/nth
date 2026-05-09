import { GameItem } from '../types';

export const kyNangThanTuongData: GameItem[] = [
  {
    name: 'Bình Sa Lạc Nhạn',
    nameZh: '平沙落雁',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Trọng Thương', 'Tầm Xa'],
    tags: ['Đơn Thể', 'Trọng Thương', 'Tầm Xa'],
    details: `Bắn tên gây sát thương lên mục tiêu. Nếu mục tiêu đang ở xa, sát thương tăng thêm.`,
    detail: `• Sát thương: 224.239 nội công Mộc thương
• Sát thương tăng khi mục tiêu ở xa: +20%
• Sát thương tăng thêm lên quái: +120%
• Hồi chiêu: 5.82 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/bsln.png',
  },
  {
    name: 'Kim Tiền Pháo',
    nameZh: '金钱炮',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Tầm Xa', 'Khống Chế Nhẹ'],
    tags: ['Duy Trì', 'Tầm Xa', 'Khống Chế Nhẹ'],
    details: `Nạp súng bắn đạn liên tục gây sát thương lên mục tiêu trong phạm vi, có thể gây khống chế nhẹ.`,
    detail: `• Sát thương mỗi phát: 31.884 nội công Kim thương
• Tổng sát thương tối đa: 254.272 nội công Kim thương
• Sát thương tăng thêm lên quái: +180%
• Hồi chiêu: 11.64 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/jtp.png',
  },
  {
    name: 'Thất Tinh Điệp',
    nameZh: '七星蝶',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Tăng Sát Thương', 'Cường Hóa'],
    tags: ['Đơn Thể', 'Tăng Sát Thương', 'Cường Hóa'],
    details: `Thả bướm bay về phía mục tiêu, gây sát thương và tăng sát thương bản thân gây ra trong thời gian ngắn.`,
    detail: `• Sát thương: 231.257 nội công Mộc thương
• Tăng sát thương: 10% trong 6 giây
• Sát thương tăng thêm lên quái: +175%
• Hồi chiêu: 15.52 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ttd.png',
  },
  {
    name: 'Thần Tượng Điên Phong',
    nameZh: '神象癫风',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Bạo Phát', 'Vô Địch', 'Tăng Sát Thương'],
    tags: ['Đơn Thể', 'Bạo Phát', 'Vô Địch', 'Tăng Sát Thương'],
    details: `Nhận trạng thái Vô Địch và tăng sát thương mạnh, sau đó lao tới mục tiêu gây sát thương bạo phát.`,
    detail: `• Sát thương: 392.874 nội công Mộc thương
• Tăng sát thương: 20% trong 5 giây
• Thời gian Vô Địch: 1 giây
• Sát thương tăng thêm lên quái: +30%
• Hồi chiêu: 19.4 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ttdf.png',
  },
  {
    name: 'Thần Tượng Điên Phong',
    nameZh: '神象癫风',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Bá Thể', 'Tạo Khiên', 'Tăng Sát Thương'],
    tags: ['Đơn Thể', 'Bá Thể', 'Tạo Khiên', 'Tăng Sát Thương'],
    details: `Nhận trạng thái Bá Thể và tăng sát thương mạnh, sau đó lao tới mục tiêu gây sát thương bạo phát. Kỹ năng tạo khiên cho bản thân.`,
    detail: `• Sát thương: 392.874 nội công Mộc thương
• Tăng sát thương: 20% trong 5 giây
• Khiên: 220.634 (tồn tại 6 giây)
• Thời gian Bá Thể: 1 giây
• Sát thương tăng thêm lên quái: +30%
• Hồi chiêu: 19.4 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ttdf-da.png',
  },
  {
    name: 'Thần Tâm',
    nameZh: '神心',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Tăng Sát Thương', 'Cường Hóa'],
    tags: ['Đơn Thể', 'Tăng Sát Thương', 'Cường Hóa'],
    details: `Kích hoạt Thần Tâm, tăng sát thương gây ra trong một khoảng thời gian. Trong thời gian này, mỗi khi thi triển kỹ năng sẽ gây thêm sát thương lên mục tiêu.`,
    detail: `• Tăng sát thương: 15% trong 12 giây
• Sát thương thêm: 46.251 nội công Mộc thương
• Sát thương tăng thêm lên quái: +100%
• Hồi chiêu: 9.7 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/tt-tam.png',
  },
  {
    name: 'Thần Động',
    nameZh: '神动',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Khống Chế Nhẹ', 'Giảm Tốc', 'Cường Hóa'],
    tags: ['Đơn Thể', 'Khống Chế Nhẹ', 'Giảm Tốc', 'Cường Hóa'],
    details: `Gọi thần lực từ trên trời rơi xuống mục tiêu, gây sát thương và giảm tốc độ di chuyển của mục tiêu. Kỹ năng có thể tích lũy lên đến 2 tầng.`,
    detail: `• Sát thương: 83.345 nội công Mộc thương mỗi tầng
• Tổng sát thương 2 tầng: 166.690 nội công Mộc thương
• Giảm tốc: 35% trong 3 giây
• Sát thương tăng thêm lên quái: +100%
• Hồi chiêu: 8.73 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/tdd.png',
  },
  {
    name: 'Thần Khiên',
    nameZh: '神盾',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Tạo Khiên', 'Giảm Thương', 'Cường Hóa'],
    tags: ['Đơn Thể', 'Tạo Khiên', 'Giảm Thương', 'Cường Hóa'],
    details: `Tạo khiên bảo vệ bản thân, trong thời gian khiên tồn tại, giảm sát thương nhận vào.`,
    detail: `• Khiên: 186.428 (tồn tại 12 giây)
• Giảm sát thương nhận vào: 15%
• Sát thương tăng thêm lên quái: +100%
• Hồi chiêu: 13.58 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/tt-khien.png',
  },
  {
    name: 'Thần Khiên · Phá Trận',
    nameZh: '神盾·破阵',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Tăng Sát Thương', 'Cường Hóa'],
    tags: ['Đơn Thể', 'Tăng Sát Thương', 'Cường Hóa'],
    details: `Tăng Khắc Chế Thủ Lĩnh và Kháng Thủ Lĩnh của bản thân, đồng thời triệu hồi Thần Linh liên tục công kích mục tiêu gây sát thương.`,
    detail: `• Sát thương kỹ năng: 13.552 nội công Mộc thương × 22 đoạn
• Sát thương lên quái tăng đến: 500%
• Tăng Khắc Chế Thủ Lĩnh: 5% trong 30 giây
• Tăng Kháng Thủ Lĩnh: 10% trong 30 giây
• Hồi chiêu: 24.25 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/tkpt.png',
  },
  {
    name: 'Thần Huyết',
    nameZh: '神血',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Hồi Máu', 'Cường Hóa'],
    tags: ['Duy Trì', 'Hồi Máu', 'Cường Hóa'],
    details: `Kích hoạt Thần Huyết, liên tục hồi Khí Huyết cho bản thân trong một khoảng thời gian.`,
    detail: `• Hồi Khí Huyết: Mỗi 3 giây hồi 15.698 Khí Huyết (kéo dài 30 giây)
• Hiệu quả hồi máu lên bản thân tăng: 200%
• Hồi chiêu: 15.52 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/th.png',
  },
  {
    name: 'Thần Hồn',
    nameZh: '神魂',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Bá Thể', 'Hỗ Trợ', 'Tạo Khiên', 'Hồi Máu', 'Giảm Thương', 'Cường Hóa'],
    tags: ['Bạo Phát', 'Bá Thể', 'Hỗ Trợ', 'Tạo Khiên', 'Hồi Máu', 'Giảm Thương', 'Cường Hóa'],
    details: `Nhận Bá Thể, lập tức hồi Khí Huyết cho bản thân, đồng thời cung cấp Giảm Thương và thêm lượng lớn Khiên cho bản thân, đồng thời liên tục hồi Khí Huyết cho bản thân.`,
    detail: `• Khiên: Tổng 793.584 (kéo dài 3.5 giây)
• Trị liệu: Tổng 145.569 Khí Huyết
• Hiệu quả Khiên và Trị liệu lên bản thân tăng: 25%
• Hiệu quả Giảm Thương: 25%
• Hồi chiêu: 33.95 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/tth.png',
  },
  {
    name: 'Thần Liên',
    nameZh: '神连',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Trị Liệu', 'Hỗ Trợ', 'Cường Hóa'],
    tags: ['Duy Trì', 'Trị Liệu', 'Hỗ Trợ', 'Cường Hóa'],
    details: `Chọn một đồng đội để áp dụng hiệu ứng Thần Liên, bản thân liên tục hồi Khí Huyết cho cả hai bên trong một khoảng thời gian nhất định.`,
    detail: `• Trị liệu duy trì: Mỗi 3 giây hồi 57.551 Khí Huyết (kéo dài 240 giây)
• Hiệu quả hồi máu lên bản thân tăng: 200%
• Hồi chiêu: 29.1 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ttl.png',
  },
  {
    name: 'Thần Ảnh',
    nameZh: '神影',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Dịch Chuyển', 'Miễn Khống', 'Giải Khống', 'Giảm Thương', 'Choáng', 'Hồi Máu', 'Cường Hóa'],
    tags: ['Duy Trì', 'Dịch Chuyển', 'Miễn Khống', 'Giải Khống', 'Giảm Thương', 'Choáng', 'Hồi Máu', 'Cường Hóa'],
    details: `Tiến vào trạng thái Thần Ảnh, nhận Miễn Khống và Giảm Thương (hiệu ứng sẽ mất khi thi triển kỹ năng khác), đồng thời triệu hồi Họa Ảnh đi theo khi di chuyển. Có thể chọn một trong hai nhánh Phá hoặc Quy để thi triển lần nữa, kết thúc trạng thái Thần Ảnh.
• Thần Ảnh · Phá: Thi triển lại kỹ năng, gây Choáng mục tiêu và gây sát thương dựa theo thời gian duy trì của Thần Ảnh.
• Thần Ảnh · Quy: Bình Sa Lạc Nhạn được thay thế bằng Thần Ảnh · Quy, giải trừ khống chế và trở về vị trí Họa Ảnh, đồng thời trị liệu bản thân.`,
    detail: `• Sát thương xuất hiện Khe Nứt: 329.091 nội công Mộc thương
• Sát thương nổ Khe Nứt: 329.091 nội công Mộc thương
• Tăng sát thương theo thời gian: 25% mỗi 5 giây
• Giải khống / Trị liệu khi kết thúc: 215.897 điểm
• Hiệu quả Giảm Thương: 25%
• Khi ≥ 5 địch – Giảm Thương: 35% (kéo dài 6 giây)
• Tăng Tốc Di Chuyển: 40%
• Hồi chiêu: 19.4 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ty.png',
  },
  {
    name: 'Thần Tỏa',
    nameZh: '神索',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Cường Hóa'],
    tags: ['Đơn Thể', 'Cường Hóa'],
    details: `Bắn dây thừng trói mục tiêu, gây sát thương lên mục tiêu. Kỹ năng có thể tích lũy lên đến 3 tầng.`,
    detail: `• Sát thương mỗi tầng: 29.021 nội công Mộc thương
• Tổng sát thương 3 tầng: 87.063 nội công Mộc thương
• Sát thương tăng thêm lên quái: +100%
• Hồi chiêu: 5 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/tts.png',
  },
  {
    name: 'Thần Di',
    nameZh: '神移',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Dịch Chuyển', 'Giải Khống', 'Bá Thể'],
    tags: ['Dịch Chuyển', 'Giải Khống', 'Bá Thể'],
    details: `Triệu hồi Thần Linh giải trừ toàn bộ hiệu ứng khống chế và trạng thái bất lợi cho bản thân, đồng thời nhận Bá Thể, Giảm Thương và trạng thái Không Thể Bị Chọn Làm Mục Tiêu.`,
    detail: `• Giải khống và hồi phục
• Thời gian Bá Thể: 1.5 giây
• Giảm sát thương: 30% trong 2 giây
• Trạng thái Không Thể Bị Chọn Làm Mục Tiêu: 1.5 giây
• Hồi chiêu: 17.46 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/td.png',
  },
];
