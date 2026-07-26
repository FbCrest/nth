import { GameItem } from '../types';

export const kyNangTrieuQuangData: GameItem[] = [
{
  name: 'Châu Vũ',
  nameZh: '珠雨',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE',
  stats: ['Phó Bản', 'Hí Ngư'],
  tags: ['Phó Bản', 'Hí Ngư'],
  details: `Ngưng tụ hơi nước thành cơn {Châu Vũ} lấp lánh, liên tục phát động {2} đợt tấn công vào phạm vi mục tiêu, gây sát thương.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Sát thương đợt 1: {12003} sát thương nội công.
• Sát thương đợt 2: {8002} sát thương nội công.
• Sát thương gây lên quái vật tăng: {90%}.
• Hồi chiêu: {10 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/chau-vu.png',
},
{
  name: 'Kinh Đào',
  nameZh: '惊涛',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVP',
  stats: ['Thi Đấu', 'Hóa Nhận', 'Khống Chế Mềm'],
  tags: ['Thi Đấu', 'Hóa Nhận', 'Khống Chế Mềm'],
  details: `Dấy lên cơn sóng lớn đẩy lùi kẻ địch và gây sát thương.
• {Dũng Triều}: Kẻ địch càng ở gần thì khoảng cách đẩy lùi càng xa. Có thể đẩy lùi kẻ địch trong phạm vi tối đa {15}. Khi đánh trúng, ngoài mục tiêu được chọn chắc chắn sẽ bị đẩy lùi, còn có thể đẩy lùi thêm tối đa {3} kẻ địch. Nếu mục tiêu là quái vật trong phạm vi {12} thì sẽ bị {Hất Tung}.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Sát thương sóng biển: {14560} sát thương nội công.
• Số lượng mục tiêu đẩy lùi tối đa: {5}.
• Hồi chiêu: {8 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/kinh-dao.png',
},
{
  name: 'Kiếm Quang Như Triều',
  nameZh: '剑光如潮',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Bỏ Qua Giảm Sát Thương', 'Hóa Nhận'],
  tags: ['Thông Dụng', 'Bỏ Qua Giảm Sát Thương', 'Hóa Nhận'],
  details: `Vung kiếm chém về phía mục tiêu phía trước, sau một khoảng trễ gây sát thương lên một mục tiêu, {bỏ qua giảm sát thương}.
• {Vạn Nhận}: Sát thương không thể bị {Đỡ Đòn}, sát thương gây lên quái vật tăng. Sau khi tiêu diệt mục tiêu sẽ làm mới thời gian hồi chiêu.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu. Khi kích hoạt {Thương Minh Viễn}, ở trạng thái {Hí Ngư} sẽ kèm theo hiệu ứng {Chảy Máu}. Khi kích hoạt {Thương Minh Viễn}, ở trạng thái {Hóa Nhận}, mỗi lần kỹ năng môn phái của bản thân nhận {Tịch Lưu} sẽ rút ngắn thời gian hồi chiêu.`,
  detail: `• Tổng sát thương chém: {15663} sát thương nội công.
• Bỏ qua giảm sát thương: {30%}.
• Sát thương gây lên quái vật tăng: {80%}.
• Thời gian hồi chiêu giảm khi nhận Tịch Lưu: {1 giây}.
• Hiệu ứng Chảy Máu của Hí Ngư: {7828} sát thương nội công/{4 giây}.
• Hồi chiêu: {12 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/kiem-quang-nhu-trieu.png',
},
{
  name: 'Chú Kính',
  nameZh: '铸镜',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVP',
  stats: ['Thi Đấu Hạt Nhân', 'Hóa Nhận', 'Dịch Chuyển'],
  tags: ['Thi Đấu Hạt Nhân', 'Hóa Nhận', 'Dịch Chuyển'],
  details: `Đúc tạo {2} mặt {Thủy Kính} phía trước. Khi ở gần Thủy Kính, nhấn lại kỹ năng để xuyên qua đến mặt Thủy Kính còn lại.
• {Hóa Giao}: Khi kỹ năng chưa hồi chiêu, sau khi sử dụng Yến Hồi Phong hoặc xuyên qua Thủy Kính, đẩy cần điều khiển sẽ thi triển {Linh Giao Nhập Hải}, nhận {Bá Thể} và {Giảm Sát Thương}, đồng thời điều khiển nước hóa thành {Thủy Linh} mang hình thái giao nhân. Thi triển kỹ năng khác sẽ hủy Linh Giao Nhập Hải và đưa kỹ năng vào hồi chiêu.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.
• {Kính Trung Hoa}: Khi ở gần Thủy Kính, cứ mỗi {2 giây} nhận một lớp {Lá Chắn}.
• {Quần Chiến}: Khi xung quanh có không dưới {5} người chơi phe địch, thời gian hồi chiêu giảm {6 giây}.`,
  detail: `• Thời gian tồn tại của Chú Kính: {200 giây}.
• Thời gian duy trì Linh Giao Nhập Hải: {2.4/3.0 (Quần Chiến) giây}.
• Tốc độ di chuyển tăng lên: {14}, duy trì {1.5 giây}.
• Giảm sát thương của Linh Giao Nhập Hải: {25%}.
• Giá trị Lá Chắn: {3%/10% (Quần Chiến)} giới hạn khí huyết tối đa.
• Hồi chiêu: {18 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/chu-kinh.png',
},
{
  name: 'Thủy Nhận',
  nameZh: '水刃',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Hóa Nhận'],
  tags: ['Thông Dụng', 'Hóa Nhận'],
  details: `Hóa thành roi nước vung múa, tung ra những đòn tấn công sắc bén về phía trước gây sát thương. Trong thời gian thi triển có thể sử dụng tối đa {3} lần.
• {Vạn Quân}: Trong thời gian thi triển kỹ năng, nhận {Giảm Sát Thương}.
• {Kích Lưu}: Đòn tấn công kèm theo hiệu ứng {Phá Khiên}, hiệu ứng này không thể cộng dồn.
• {Tịch Lưu}: Sau mỗi đòn thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Sát thương đòn 1: {4160} sát thương nội công.
• Tổng sát thương đòn 2: {6656} sát thương nội công.
• Tổng sát thương đòn 3: {9263} sát thương nội công.
• Giảm sát thương: {35%}.
• Sát thương gây lên quái vật tăng: {50%}.
• Hiệu ứng Phá Khiên: {50%}.
• Hồi chiêu: {15 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/thuy-nhan.png',
},
{
  name: 'Phi Hoa Tiễn Lệ',
  nameZh: '飞花溅泪',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVP',
  stats: ['Thi Đấu', 'Hóa Nhận', 'Dịch Chuyển', 'Vô Địch'],
  tags: ['Thi Đấu', 'Hóa Nhận', 'Dịch Chuyển', 'Vô Địch'],
  details: `Triều Quang điều khiển nước che giấu thân hình, lao tới theo quỹ đạo hình cung về hướng chỉ định rồi vung kiếm chém, gây sát thương lên kẻ địch trên đường đi và mục tiêu bị chém. Trong thời gian thi triển nhận {Vô Địch}.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.
• {Quần Chiến}: Khi xung quanh có không dưới {5} người chơi phe địch, thời gian nạp giảm {2 giây}.`,
  detail: `• Sát thương trên đường đi: {2865} sát thương nội công.
• Sát thương chém: {3438} sát thương nội công.
• Thời gian Vô Địch: {1 giây}.
• Thời gian nạp: {14 giây}.
• Số lần tích lũy: {2}.
• Hồi chiêu: {0.4 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/phi-hoa-tien-le.png',
},
{
  name: 'Khuynh Hà',
  nameZh: '倾河',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Hóa Nhận', 'Khống Chế Cứng'],
  tags: ['Thông Dụng', 'Hóa Nhận', 'Khống Chế Cứng'],
  details: `Hội tụ dòng nước thành thủy đạn bắn về phía mục tiêu, liên tục gây sát thương và {Hất Tung} lên mục tiêu trúng chiêu.
Có thể thi triển đòn {2} để dùng {Thu Thủy Kiếm} chém vỡ thủy cầu, gây lượng lớn sát thương lên khu vực lân cận và cộng thêm tối đa {4 giây} sát thương chưa kết toán.
• {Thiên Hà Trụy}: Mỗi lần thủy đạn chịu đòn tấn công từ {Thủy Nhận} sẽ tăng kích thước và tăng sát thương. Đến lần thứ {3} sẽ phát nổ, gây lượng lớn sát thương lên khu vực lân cận.
• {Tố Lưu}: Khi đang ở trạng thái {Kiếm Phong} hoặc {Mộc Trạch}, hoặc khi thi triển lên người chơi, tốc độ thi triển tăng. Cùng một mục tiêu sẽ không thể bị Khuynh Hà {Hất Tung} nhiều lần trong thời gian hồi của hiệu ứng khống chế.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Sát thương duy trì của thủy đạn: {694} sát thương nội công.
• Sát thương tăng của thủy đạn cường hóa: {67%/133%/200%}.
• Tổng thời gian duy trì/Khoảng cách gây sát thương: {6 giây/0.2 giây}.
• Sát thương chém: {4841} sát thương nội công.
• Sát thương vụ nổ khi chém: {4841} sát thương nội công.
• Sát thương gây lên quái vật tăng: {35%}.
• Thời gian tụ lực: {1.2 giây}.
• Thời gian hồi hiệu ứng khống chế: {15 giây}.
• Hồi chiêu: {17 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/khuynh-ha.png',
},
{
  name: 'Phi Sa',
  nameZh: '飞鲨',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Hí Ngư', 'Khống Chế Cứng'],
  tags: ['Thông Dụng', 'Hí Ngư', 'Khống Chế Cứng'],
  details: `Triệu hồi {Phi Sa} truy kích mục tiêu chỉ định, sau một khoảng trễ sẽ gây sát thương và {Hất Tung}. Nếu mục tiêu không thể bị khống chế, {Phi Sa} sẽ tiếp tục truy đuổi cho đến khi hoàn thành đòn cắn kết liễu. Có thể nhanh chóng thi triển trong thời gian {Tịch Hải Dao Ca}.
• {Lợi Nhận}: Khi đòn kết liễu đánh trúng quái vật, hoàn trả một phần thời gian hồi chiêu.
• {Quần Chiến}: Khi xung quanh có không dưới {5} người chơi phe địch, đòn kết liễu sẽ không còn khoảng trễ.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Sát thương va chạm: {2005} sát thương nội công.
• Sát thương cắn: {3645} sát thương nội công.
• Số lần va chạm: {5}.
• Thời gian Hất Tung: {khoảng 1.5 giây}.
• Sát thương bổ sung lên quái vật: {100%}.
• Thời gian tồn tại tối đa của Phi Sa: {8 giây}.
• Thời gian hồi chiêu được hoàn trả: {5 giây}.
• Hồi chiêu: {15 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/phi-sa.png',
},
{
  name: 'Linh Đồn',
  nameZh: '灵豚',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Hí Ngư', 'Trọng Thương'],
  tags: ['Thông Dụng', 'Hí Ngư', 'Trọng Thương'],
  details: `Khi mang kỹ năng này, {Đồn Đồn Tử} sẽ tham gia hiệp chiến, định kỳ sử dụng {Thủy Cầu}, {Thủy Pháo} và {Thủy Thương} tấn công mục tiêu của người chơi, gây sát thương.
• {Hoán Cầu}: Chủ động thi triển sẽ khiến {Đồn Đồn Tử} triệu hồi {Thương Cầu} tham gia hiệp chiến, gây lượng lớn sát thương lên phía trước và kèm theo hiệu ứng {Trọng Thương}.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Sát thương tấn công thường: {1156} sát thương nội công.
• Sát thương tấn công mạnh: {1387} sát thương nội công.
• Tổng sát thương tấn công 3 lần: {2080} sát thương nội công.
• Tổng sát thương Thủy Thương: {3698} sát thương nội công.
• Sát thương của Thương Cầu: {8404} sát thương nội công.
• Sát thương gây lên quái vật tăng: {15%}.
• Hiệu ứng Trọng Thương: {35%/5 giây}.
• Giảm sát thương: {25%}.
• Hồi chiêu: {15 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/linh-don.png',
},
{
  name: 'Linh Đồn · Nộ Cầu',
  nameZh: '灵豚·怒虬',
  category: 'Kỹ năng',
  monPhai: 'Triều Quang',
  itemType: 'PVE - PVP',
  stats: ['Thông Dụng', 'Hí Ngư', 'Trọng Thương'],
  tags: ['Thông Dụng', 'Hí Ngư', 'Trọng Thương'],
  details: `Khi mang kỹ năng này, {Đồn Đồn Tử} sẽ tham gia hiệp chiến, định kỳ sử dụng {Thủy Cầu}, {Thủy Pháo} và {Thủy Thương} tấn công mục tiêu của người chơi.
{Đồn Đồn Tử} sẽ liên tục ghi nhận lượng hồi máu của người chơi phe địch bị {Triều Quang} khóa mục tiêu (có giới hạn nhất định, sẽ xóa khi đổi mục tiêu hoặc mục tiêu ở quá xa).
• {Nộ Cầu}: Chủ động thi triển sẽ triệu hồi {Thương Cầu} phun hơi dữ dội vào mục tiêu, gây lượng lớn sát thương và kèm hiệu ứng {Trọng Thương} phạm vi, đồng thời chuyển một phần lượng hồi máu mà {Đồn Đồn Tử} đã ghi nhận thành sát thương cộng thêm và trị liệu cho bản thân. Khi tấn công mục tiêu là quái vật sẽ kèm thêm sát thương bổ sung. Trong thời gian thi triển kỹ năng, nhận {Giảm Sát Thương}.
• {Tịch Lưu}: Sau khi thi triển, nhận {1} tầng Tịch Lưu.`,
  detail: `• Tổng sát thương hơi thở của Thương Cầu: {21487} sát thương nội công.
• Tỷ lệ ghi nhận: {35%} lượng hồi máu.
• Tỷ lệ trong Đại Hội Tỷ Võ/Luận Võ Công Bằng: {10%} lượng hồi máu.
• Giới hạn ghi nhận: {30%} giới hạn khí huyết tối đa của mục tiêu.
• Sát thương tấn công thường: {1156} sát thương nội công.
• Sát thương tấn công mạnh: {1387} sát thương nội công.
• Tổng sát thương tấn công 3 lần: {2080} sát thương nội công.
• Tổng sát thương Thủy Thương: {3698} sát thương nội công.
• Sát thương Thủy Đạn: {1156} sát thương nội công.
• Giảm sát thương: {30%}.
• Sát thương gây lên quái vật tăng: {15%}.
• Hiệu ứng Trọng Thương: {35%/5 giây}.
• Hồi chiêu: {17 giây}.`,
  upgrade: ``,
  imageUrl: '/images/ky-nang-mon-phai/trieu-quang/linh-don-no-cau.png',
},
];
