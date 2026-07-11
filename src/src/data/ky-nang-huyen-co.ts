import { GameItem } from '../types';

export const kyNangHuyenCoData: GameItem[] = [
  {
  name: 'Ưng Lược',
  nameZh: '鹰掠',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Khống Chế Cứng', 'Dịch Chuyển'],
  tags: ['Thông Dụng', 'Khống Chế Cứng', 'Dịch Chuyển'],
  details: `Lập tức lướt một đoạn theo hướng cần điều khiển. Có thể thi triển kỹ năng khi đang ở trên không. Nhận {1} điểm Thiên Cơ.
• {Chấn Vũ}: Trong một khoảng thời gian ngắn sau khi sử dụng {Quy Yến}, {Ưng Lược} sẽ chuyển thành {Ưng Lược Tật Xung}. Khi thi triển sẽ lao nhanh về phía trước, gây sát thương lên một mục tiêu, nhận {Bá Thể} trong thời gian ngắn theo hiệu ứng của kỹ năng, sau một khoảng trễ ngắn sẽ hất tung mục tiêu và khiến toàn bộ Phi Nhận tấn công mục tiêu. Hiệu ứng hất tung có thời gian hồi riêng, nếu không hất tung thành công thì thời gian hồi sẽ ngắn hơn.
• {Hồi Tường}: Trong một khoảng thời gian ngắn sau khi sử dụng {Tật Vũ}, {Yến Hồi Phong} sẽ được tính là {Ưng Lược}. Khi thi triển {Ưng Lược}, sẽ tự động bắn Phi Nhận tấn công mục tiêu.`,
  detail: `• Khoảng cách dịch chuyển: {8 trượng}.
• Sát thương đòn 1 của Ưng Lược sau Tật Vũ: {30} sát thương ngoại công.
• Sát thương đòn 2 của Ưng Lược sau Tật Vũ: {45} sát thương ngoại công.
• Tăng tốc độ di chuyển: {50%}, duy trì {1 giây}.
• Sát thương Ưng Lược Tật Xung: {793} sát thương ngoại công.
• Sát thương Thần Khí - Tồi Vũ: {681} sát thương ngoại công.
• Thời gian hồi hiệu ứng hất tung của Tật Xung: {11 giây}.
• Thời gian hồi khi hất tung không thành công: {3 giây}.
• Hồi chiêu: {5 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/ung-luoc.png',
  },
  {
  name: 'Thiên Kích Điệp',
  nameZh: '千击蝶',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Lõi Phó Bản'],
  tags: ['Lõi Phó Bản'],
  details: `Điều khiển Phi Diệp chém liên tục với tốc độ cao tại vị trí mục tiêu, gây sát thương. Đòn chém có thể truy kích mục tiêu đang bị hất tung. Nhận {1} điểm Thiên Cơ.`,
  detail: `• Sát thương Thiên Kích Điệp: {378} sát thương ngoại công.
• Sát thương đòn kết thúc của Thiên Kích Điệp: {158} sát thương ngoại công.
• Sát thương lên quái vật: tăng {250%}.
• Hồi chiêu: {7 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/thien-kich-diep.png',
  },
  {
  name: 'Chấn Linh Vạn Phong',
  nameZh: '振翎万锋',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Lõi Thông Dụng', 'Bộc Phát'],
  tags: ['Lõi Thông Dụng', 'Bộc Phát'],
  details: `Tiến vào trạng thái {Chấn Linh}. Trong thời gian này, nhấn lại kỹ năng để thi triển {Phi Hồng}.
• {Phi Hồng}: Tiêu hao {30} điểm Thiên Khu, gây sát thương lên mục tiêu chính. Có thể sử dụng {3} lần. Khi kích hoạt {Chấn Linh}, sẽ tự động thi triển {1} lần {Phi Hồng} lên mục tiêu chính.
• {Vạn Phong}: Tăng sát thương lên người chơi đang ở trên không và có thể truy kích mục tiêu đang bị hất tung.`,
  detail: `• Tổng sát thương khi kích hoạt Chấn Linh: {423} sát thương ngoại công.
• Tổng sát thương Phi Hồng: {1039} sát thương ngoại công.
• Gây thêm {10%} sát thương lên người chơi ở trên không dưới {7 trượng}.
• Gây thêm {20%} sát thương lên người chơi ở trên không từ {7 trượng} trở lên.
• Thời gian duy trì tối đa của trạng thái Chấn Linh: {18 giây}.
• Hồi chiêu: {20 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/chan-linh-van-phong.png',
  },
{
  name: 'Sậu Vũ Cuồng Lan',
  nameZh: '骤雨狂澜',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Khống Chế Cứng', 'Vô Địch'],
  tags: ['Thông Dụng', 'Khống Chế Cứng', 'Vô Địch'],
  details: `Hóa giải trạng thái {Định Thân}, nhận {Vô Địch}, đồng thời lao nhanh đến khu vực mục tiêu. Sau đó phóng ra lượng lớn Phi Nhận về phía kẻ địch xung quanh gây sát thương và nhận {1} điểm Thiên Cơ.
• {Phong Sơ Vũ Sậu}: Đòn bắn kết thúc khi bay lên không sẽ gây hiệu ứng {Đánh Ngã} lên mục tiêu đã khóa trúng đòn. Có thể dùng cần điều khiển để điều chỉnh vị trí đáp xuống sau khi bay lên.`,
  detail: `• Tổng sát thương Phi Nhận giai đoạn đầu: {411} sát thương ngoại công.
• Sát thương đòn kết thúc: {614} sát thương ngoại công.
• Thời gian Vô Địch: {1.75 giây}.
• Sát thương Thần Khí - Sậu Vũ · Toái Vân: {829} sát thương ngoại công.
• Sát thương lên quái vật: tăng {100%}.
• Hồi chiêu: {18 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/sau-vu-cuong-lan.png',
},
{
  name: 'Quy Yến',
  nameZh: '归燕',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Lõi Thông Dụng', 'Trọng Thương'],
  tags: ['Lõi Thông Dụng', 'Trọng Thương'],
  details: `Triệu hồi Phi Nhận thực hiện đòn tấn công phạm vi rồi thu hồi, gây sát thương và hiệu ứng {Trọng Thương}. Sau khi thi triển, nhận {1} điểm Thiên Cơ và làm mới thời gian hồi của {Ưng Lược}.`,
  detail: `• Sát thương khi Phi Nhận bay đi: {62} sát thương ngoại công.
• Sát thương khi Phi Nhận quay về: {521} sát thương ngoại công.
• Nhiều Phi Nhận của Quy Yến cùng gây sát thương: giảm còn {12%}.
• Cùng một mục tiêu tối đa chịu hiệu lực đồng thời từ {4} Phi Nhận của Quy Yến.
• Sát thương lên quái vật: tăng {50%}.
• Hiệu ứng Trọng Thương: {28%}, duy trì {3 giây}.
• Thời gian hồi mỗi lần tích trữ: {9 giây}.
• Số lần tích trữ tối đa: {2 lần}.
• Hồi chiêu: {0.5 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/quy-yen.png',
},
];
