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
  stats: ['Phó Bản'],
  tags: ['Phó Bản'],
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
  stats: ['Thông Dụng', 'Bạo Phát'],
  tags: ['Thông Dụng', 'Bạo Phát'],
  details: `Tiến vào trạng thái {Chấn Linh}. Trong thời gian này, nhấn lại kỹ năng để thi triển {Phi Hồng}.
• {Phi Hồng}: Tiêu hao {30} điểm Thiên Xu, gây sát thương lên mục tiêu chính. Có thể sử dụng {3} lần. Khi kích hoạt {Chấn Linh}, sẽ tự động thi triển {1} lần {Phi Hồng} lên mục tiêu chính.
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
  stats: ['Thông Dụng', 'Trọng Thương'],
  tags: ['Thông Dụng', 'Trọng Thương'],
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
{
  name: 'Thiên Cơ Như Chí · Thỉ',
  nameZh: '千机如至·矢',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Phó Bản', 'Triệu Hồi'],
  tags: ['Phó Bản', 'Triệu Hồi'],
  details: `Triệu hồi {Dực Hỏa} tự động tấn công kẻ địch ở gần. {Dực Hỏa} gây sát thương cao hơn lên quái vật. Sau khi triệu hồi {Dực Hỏa}, sẽ tự động hồi {Thiên Cơ} theo chu kỳ. Nhấn lại kỹ năng để đổi vị trí với cơ quan đã được triển khai.`,
  detail: `• Sát thương phun lửa của Dực Hỏa: {90} sát thương ngoại công.
• Sát thương đạn pháo của Dực Hỏa: {90} sát thương ngoại công.
• Thời gian tồn tại của Dực Hỏa: {17 giây}.
• Sát thương lên quái vật: tăng lên {500%}.
• Tổng Thiên Cơ hồi phục: {4 điểm}.
• Sát thương Cửu Cung - Hỏa Ngự Cự Pháo: {525} sát thương ngoại công.
• Sát thương Cửu Cung - Hỏa Ngự Dực Hỏa: {11} sát thương ngoại công.
• Trong thời gian Cửu Cung - Hỏa Ngự Cự Pháo, thủ lĩnh nhận {50%} kháng hiệu ứng.
• Hồi chiêu: {24 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/thien-co-nhu-chi-thi.png',
},
{
  name: 'Thiên Cơ Như Chí · Khí',
  nameZh: '千机如至·器',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Đấu Trường', 'Giải Khống', 'Dịch Chuyển'],
  tags: ['Đấu Trường', 'Giải Khống', 'Dịch Chuyển'],
  details: `Triển khai {Thạch Trung Hỏa}. Khi mục tiêu phe địch giẫm lên sẽ phát nổ, gây sát thương và hiệu ứng {Choáng}. Nhấn lại kỹ năng để nhận {25%} {giảm sát thương} trong {3 giây}, đồng thời đổi vị trí với cơ quan đã triển khai. Có thể {Giải Khống} (nếu kích hoạt bằng cách giải khống thì thời gian hồi sẽ dài hơn). Khi kích hoạt {Giải Khống}, nhận {Bá Thể}.`,
  detail: `• Sát thương vụ nổ của Thạch Trung Hỏa: {145} sát thương ngoại công.
• Thời gian Choáng: {khoảng 1.3 giây}.
• Giảm sát thương của Không Thành: {25%}.
• Kích hoạt bằng Giải Khống tăng thời gian hồi thêm: {24 giây}.
• Sát thương mỗi vụ nổ của Thần Khí: {160} sát thương ngoại công.
• Hồi chiêu: {11 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/thien-co-nhu-chi-khi.png',
},
{
  name: 'Thiên Cơ Như Chí · Thiên Tập',
  nameZh: '千机如至·天袭',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Đấu Trường', 'Đỡ Đòn', 'Trên Không'],
  tags: ['Đấu Trường', 'Đỡ Đòn', 'Trên Không'],
  details: `Có thể thi triển khi {Thiên Xu} lớn hơn {20} điểm.
• {Thiên Cơ Phi Dực}: Nhận {Đỡ Đòn} và {Kháng Tấn Công Tầm Xa}, bay lên không triển khai đôi cánh, liên tục tiêu hao {Thiên Xu} để oanh kích mục tiêu đơn được chọn phía trước, gây sát thương và dần nâng cao độ cao bay.
• {Thiện Mưu}: Khi {Thiên Xu} thấp hơn {20} điểm hoặc nhấn lại kỹ năng, thực hiện đòn kết thúc, nhận {Bá Thể} và {Kháng Tấn Công Tầm Xa}, đồng thời bắn phát kết liễu vào mục tiêu gây sát thương.`,
  detail: `• Tiêu hao {80} điểm Thiên Xu mỗi giây.
• Sát thương mỗi lần oanh kích khi bay: {171} sát thương ngoại công.
• Tần suất oanh kích: {4 lần/giây}.
• Đòn bắn kết thúc nhận: {25%} giảm sát thương.
• Sát thương tối đa của đòn bắn kết thúc: {1287} sát thương ngoại công.
• Sát thương mỗi vụ nổ của Thần Khí: {132} sát thương ngoại công.
• Kháng tấn công tầm xa trong thời gian duy trì: {40%}.
• Hồi chiêu: {25 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/thien-co-nhu-chi-thien-tap.png',
},
{
  name: 'Thất Cầm Tác',
  nameZh: '七擒索',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Đấu Trường', 'Khống Chế Cứng', 'Bạo Phát'],
  tags: ['Đấu Trường', 'Khống Chế Cứng', 'Bạo Phát'],
  details: `Phóng dây móc gây sát thương {không thể Đỡ Đòn} lên một mục tiêu và gây hiệu ứng {Cứng Đờ}.
• {Cầm Thiên}: Gây hiệu ứng khống chế kéo dài hơn lên mục tiêu đang {Ngã}, {Đỡ Đòn} hoặc ở {Trên Không}.
• Sau khi mục tiêu bị {Thất Cầm Tác} khống chế, trong một khoảng thời gian sẽ không thể tiếp tục bị {Thất Cầm Tác} của người chơi khác khống chế.`,
  detail: `• Sát thương: {214} sát thương ngoại công.
• Sát thương lên mục tiêu trên không: {1185} sát thương ngoại công.
• Thời gian Cứng Đờ: {1.2 giây}.
• Thời gian Cứng Đờ lên mục tiêu đang Ngã hoặc Đỡ Đòn: {1.8 giây}.
• Thời gian Cứng Đờ lên mục tiêu trên không: {2.4 giây}.
• Thời gian miễn nhiễm khống chế từ Thất Cầm Tác: {16 giây}.
• Hồi chiêu: {16 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/that-cam-tac.png',
},
{
  name: 'Xích Bích Kim Ô',
  nameZh: '赤壁金乌',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Đấu Trường', 'Phá Khiên'],
  tags: ['Đấu Trường', 'Phá Khiên'],
  details: `Tiêu hao {Thiên Xu}, ném ra nhiều cơ quan {Kim Ô} gây nổ, gây sát thương và hiệu ứng {Phá Khiên}. Nhận {1} điểm Thiên Cơ.`,
  detail: `• Tiêu hao Thiên Xu: {50}.
• Sát thương mỗi vụ nổ: {225} sát thương ngoại công.
• Sát thương từ nhiều vụ nổ: giảm còn {20%}.
• Giới hạn Phá Khiên: tương đương {6%} Máu tối đa của mục tiêu.
• Sát thương lên quái vật: tăng {80%}.
• Hồi chiêu: {0.8 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/xich-bich-kim-o.png',
},
{
  name: 'Ly Huyền Tam Cố',
  nameZh: '离弦三顾',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Phó Bản', 'Bạo Phát'],
  tags: ['Phó Bản', 'Bạo Phát'],
  details: `Phi Nhận tổ hợp tiến vào trạng thái {Ly Huyền Tam Cố}, trong thời gian này tăng tốc độ di chuyển. Nhấn lại kỹ năng để liên tục bắn tên gây sát thương nổ phạm vi. Sát thương gây lên mục tiêu sẽ giảm dần theo khoảng cách từ mục tiêu đến tâm vụ nổ.
• Hai mũi tên đầu tiêu hao {10} điểm {Thiên Xu}, mũi tên thứ ba tiêu hao toàn bộ {Thiên Xu} để gây sát thương {không bị suy giảm}. Sau khi thi triển nhận {1} điểm Thiên Cơ.`,
  detail: `• Tổng sát thương hai mũi tên đầu: {390} sát thương ngoại công.
• Sát thương mũi tên thứ ba: {675} sát thương ngoại công.
• Sát thương lên quái vật: tăng {70%}.
• Số mũi tên tối đa có thể bắn: {3}.
• Tăng tốc độ di chuyển trong thời gian duy trì: {20%}.
• Hồi chiêu: {16 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/ly-huyen-tam-co.png',
},
{
  name: 'Phục Long Tiễn',
  nameZh: '伏龙箭',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Phó Bản', 'Bạo Phát'],
  tags: ['Phó Bản', 'Bạo Phát'],
  details: `Hóa ra hai tàn ảnh, sau một khoảng ngắn tụ lực sẽ bắn mạnh một mũi tên về vị trí mục tiêu. Tiêu hao toàn bộ {Thiên Xu} và gây sát thương tương ứng với lượng {Thiên Xu} đã tiêu hao. Ngay lập tức làm mới thời gian hồi của {Ưng Lược}, đồng thời trong thời gian tụ lực vẫn có thể thi triển {Ưng Lược}. Nhận {2} điểm Thiên Cơ.`,
  detail: `• Sát thương tối đa: {743} sát thương ngoại công.
• Tổng sát thương tối đa của tàn ảnh: {319} sát thương ngoại công.
• Sát thương lên quái vật: tăng {51%}.
• Hồi chiêu: {10 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/phuc-long-tien.png',
},
{
  name: 'Tán · Vô Giải',
  nameZh: '伞·无懈',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Đấu Trường', 'Giảm Sát Thương'],
  tags: ['Đấu Trường', 'Giảm Sát Thương'],
  details: `Tiến vào trạng thái {Mở Tán}, nhận {giảm sát thương}. Trong thời gian duy trì, liên tục hấp thụ các vật thể đang bay xung quanh bản thân, tối đa {6} vật thể.
• {Lai Khứ Tự Như}: Khi thi triển trên không, nhận {Bá Thể} trong thời gian ngắn và lao xuống theo hướng cần điều khiển.
• {Quần chiến}: Khi có từ {5} người chơi phe địch trở lên ở xung quanh, nhận {Kháng Tấn Công Tầm Xa}.`,
  detail: `• Giảm sát thương: {25%}.
• Kháng tấn công tầm xa: {25%}.
• Thời gian duy trì: {12 giây}.
• Sát thương Thần Khí - Thiên Phú Vạn Tượng Luân Chuyển: {1154} sát thương ngoại công.
• Thần Khí tăng thêm giảm sát thương: {50%}.
• Thần Khí tăng thêm tốc độ di chuyển: {100%}.
• Hồi chiêu: {18 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/tan-vo-giai.png',
},
{
  name: 'Cửu Cung Bát Quái',
  nameZh: '九宫八卦',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Phó Bản', 'Cường Hóa'],
  tags: ['Phó Bản', 'Cường Hóa'],
  details: `Nhận hiệu ứng tăng cường {Phi Đan Mãnh Diễm}, tăng {Khắc Chế Thủ Lĩnh} và {Kháng Thủ Lĩnh} của bản thân.
• {Cửu Cung Bát Quái · Ngộ}: Sau khi học kỹ năng, đồng đội xung quanh nhận một lượng nhỏ {Tăng Cường Toàn Kỹ Năng}.
• {Liệp Chuẩn}: Đồng thời triệu hồi {Liệp Chuẩn}. {Liệp Chuẩn} có thể bắn {Tật Vũ} nảy sang các mục tiêu đã khóa trong một phạm vi nhất định.`,
  detail: `• Kháng Thủ Lĩnh / Khắc Chế Thủ Lĩnh: {10%}/{5%}.
• Thời gian duy trì: {18 giây}.
• Khoảng cách nảy tối đa của Liệp Chuẩn: {23 trượng}.
• Tăng Cường Toàn Kỹ Năng (Ngộ): {28}.
• Sát thương Phi Nhận cộng thêm từ Thần Khí: {375} sát thương ngoại công.
• Sát thương lên quái vật: tăng {100%}.
• Hồi chiêu: {18 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/cuu-cung-bat-quai.png',
},
{
  name: 'Tật Vũ',
  nameZh: '疾羽',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Đánh Thường'],
  tags: ['Thông Dụng', 'Đánh Thường'],
  details: `Chiêu thức cơ bản nổi tiếng với tốc độ và sự linh hoạt, gồm {3} đòn với tổng cộng {4} thức. Sau khi thi triển đòn thứ ba sẽ nhận {1} điểm Thiên Cơ.
• {Ưng Kích}: Trong một khoảng thời gian ngắn sau khi sử dụng {Ưng Lược}, có thể ném ra {Tật Vũ} cường hóa với sát thương và tầm bắn cao hơn.`,
  detail: `• Sát thương đòn 1: {94} sát thương ngoại công.
• Sát thương đòn 2: tổng cộng {154} sát thương ngoại công.
• Sát thương đòn 3: {150} sát thương ngoại công.
• Sát thương Tật Vũ cường hóa: {180} sát thương ngoại công.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/tat-vu.png',
},
{
  name: 'Tá Đông Phong',
  nameZh: '借东风',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Dịch Chuyển', 'Giải Khống'],
  tags: ['Thông Dụng', 'Dịch Chuyển', 'Giải Khống'],
  details: `Giải trừ hiệu ứng khống chế và trạng thái bất lợi trên bản thân, nhận {Bá Thể}, {Giảm Sát Thương} và {Kháng Thủ Lĩnh}, sau đó dịch chuyển tức thời theo hướng cần điều khiển. Đồng thời tạo ra một vụ nổ âm thanh tại vị trí ban đầu, gây sát thương và làm giảm tầm đánh của mục tiêu.
• {Đông Phong}: Khi thi triển trên không, thời gian hồi của {Tá Đông Phong} được giảm.
• {Lưu Phong}: Trong {Phó Bản}, nếu không có thao tác điều khiển hướng thì sẽ không kích hoạt hiệu ứng dịch chuyển tức thời.`,
  detail: `• Sát thương vụ nổ âm thanh: {171} sát thương ngoại công.
• Giảm sát thương: {30%}.
• Kháng Thủ Lĩnh: {12%}.
• Thời gian duy trì: {2.5 giây}.
• Giảm thời gian hồi khi thi triển trên không: {4 giây}.
• Giảm tầm đánh của mục tiêu: {50%}, duy trì {3 giây}.
• Hồi chiêu: {20 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/ta-dong-phong.png',
},
{
  name: 'Vạn Tượng Huyền Xu',
  nameZh: '万象玄枢',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Bạo Phát', 'QTE'],
  tags: ['Thông Dụng', 'Bạo Phát', 'QTE'],
  details: `Liên tục bắn Phi Tiễn vào mục tiêu đã khóa, gây sát thương. Trong thời gian thi triển, tăng {tốc độ di chuyển}.
• Trong thời gian thi triển kỹ năng, có thể điều khiển hướng di chuyển bằng cần điều khiển.`,
  detail: `• Tổng sát thương Phi Tiễn liên tục: {809} sát thương ngoại công.
• Sát thương đòn kết thúc: {834} sát thương ngoại công.
• Sát thương lên quái vật: tăng {50%}.
• Tăng tốc độ di chuyển trong thời gian duy trì: {50%}.
• Hồi chiêu: {15 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/van-tuong-huyen-xu.png',
},
{
  name: 'Xuyên Vân Diệt',
  nameZh: '穿云灭',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng'],
  tags: ['Thông Dụng'],
  details: `Huyền Cơ tăng {Tỷ Lệ Chí Mạng} và {Tăng Cường Toàn Kỹ Năng}. Khi tấn công kẻ địch nếu gây {Chí Mạng}, sẽ tiếp tục tăng thêm {Tỷ Lệ Chí Mạng} và {Tăng Cường Toàn Kỹ Năng}, duy trì {5 giây}, thời gian hồi {5 giây}.
• Kỹ năng bị động của Huyền Cơ, không cần trang bị.`,
  detail: `• Tăng Tỷ Lệ Chí Mạng: {3%}.
• Tăng Cường Toàn Kỹ Năng: {2%}.
• Thời gian duy trì: {5 giây}.
• Thời gian hồi: {5 giây}.
• Tăng thêm Tỷ Lệ Chí Mạng: {3%}.
• Tăng thêm Tăng Cường Toàn Kỹ Năng: {2%}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/xuyen-van-diet.png',
},
{
  name: 'Hóa Vật Du Tâm',
  nameZh: '化物游心',
  category: 'Kỹ năng',
  monPhai: 'Huyền Cơ',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng'],
  tags: ['Thông Dụng'],
  details: `Huyền Cơ sử dụng một số kỹ năng sẽ nhận {điểm Thiên Cơ}. Khi tích lũy đủ {5} điểm Thiên Cơ, {Phi Nhận} sẽ vận hành theo quỹ đạo tinh tượng và tự động tấn công kẻ địch xung quanh. Sát thương từ {Phi Nhận} lên cùng một mục tiêu trong một khoảng thời gian sẽ bị suy giảm đáng kể.
• Sau khi sử dụng một số kỹ năng, Huyền Cơ có thể lập tức sử dụng {Nhảy}. Tuy nhiên, nếu thực hiện ở trên không sẽ tiêu hao thêm điểm {Khinh Công}.
• Kỹ năng bị động của Huyền Cơ, không cần trang bị.`,
  detail: `• Sát thương Hóa Vật Du Tâm: {417} sát thương ngoại công.
• Sát thương sau khi suy giảm: {17} sát thương ngoại công.
• Sát thương lên quái vật: tăng {60%}.
• Thời gian suy giảm sát thương: {9 giây}.
• Kỹ năng nhận điểm Thiên Cơ: {Ưng Lược}, {Quy Yến}, {Thiên Kích Điệp}, {Sậu Vũ Cuồng Lan}, {Tật Vũ (đòn 3)}, {Phục Long Tiễn}, {Xích Bích Kim Ô}, {Thiên Cơ Như Chí · Thỉ}, {Ly Huyền Tam Cố}.
• Khi sử dụng Nhảy ở độ cao trên {4 trượng}, tiêu hao thêm {15} điểm Khinh Công.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/huyen-co/hoa-vat-du-tam.png',
},
];
