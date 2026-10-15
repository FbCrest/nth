import { GameItem } from '../types';

export const kyNangHuyetHaData: GameItem[] = [
	{
		name: 'Tảo Lục Hợp',
		nameZh: '扫六合',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Cốt lõi dùng chung',
		stats: ['Đỡ Đòn', 'Khống Chế Mạnh'],
		tags: ['Đỡ Đòn', 'Khống Chế Mạnh'],
		details: `Quét liên tục trên phạm vi rộng qua nhiều đòn đánh; đòn cuối giáng mạnh, {đánh ngã} kẻ địch phía trước. Trong thời gian thi triển nhận {Đỡ đòn}; thời gian hồi chiêu tăng dần theo từng giai đoạn thi triển.
• {Vô Úy}: Khi đánh trúng hồi {Khí huyết} và nhận {Phòng ngự thủ lĩnh}.
• {Quét Ngang}: Sát thương kèm {Phá Thuẫn}, tối đa nhận được {2 điểm Thương Hồn}.
• {Quần Chiến}: Khi xung quanh có ít nhất {5 người chơi địch}, lượng {Khí huyết} hồi phục tăng lên.`,
		detail: `• Đòn 1: {5.599} sát thương Ngoại công
• Đòn 2: {12.094} sát thương Ngoại công
• Đòn 3: {14.599} sát thương Ngoại công
• Đòn 4: {15.795} sát thương Ngoại công
• Sát thương cộng thêm lên quái: {70%}
• Giảm hồi chiêu khi tấn công quái: {6 giây}
• Phòng ngự thủ lĩnh: {10%}
• Thời gian đánh ngã: khoảng {1,5 giây}
• Giới hạn Phá Thuẫn: tương đương {28%} Khí huyết tối đa của mục tiêu
• Hồi Khí huyết: tối đa {55%} Khí huyết
• Hồi Khí huyết trong Quần Chiến: tổng lượng hồi phục tăng {60%}
• Hồi chiêu: {15 giây}`,
		upgrade: '',
	imageUrl: '/images/ky-nang-mon-phai/huyet-ha/tlh.png',
		icon: '🛡️',
	},
	{
		name: 'Thiết Họa Ngân Câu',
		nameZh: '铁画银钩',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Cốt lõi phó bản',
		stats: ['Bạo Phát', 'Thương Hồn'],
		tags: ['Bạo Phát', 'Thương Hồn'],
		details: `Vung trường thương, chém hai nhát liên tiếp vào kẻ địch phía trước.
• {Thương Hồn}: Càng đánh càng mạnh. Liên chiêu {Thích Khiêu} và một số kỹ năng có thể cộng dồn tầng Thương Hồn, tối đa {3 tầng}.
• {Hồng Liên}: Tiêu hao toàn bộ Thương Hồn để tung đòn kết liễu chém vào kẻ địch phía trước. Tiêu hao càng nhiều Thương Hồn, sát thương càng cao, đồng thời gây thêm sát thương lên quái.`,
		detail: `• Đòn đánh thứ nhất: {3.001} sát thương Ngoại công
• Đòn đánh thứ hai: {7.501} sát thương Ngoại công
• Sát thương cộng thêm lên quái: {30%}
• Sát thương tăng thêm mỗi tầng Thương Hồn: {40%}
• Hồi chiêu: {13 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/thnc.png',
	},
	{
		name: 'Lăng Vân Dược',
		nameZh: '凌云跃',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Dùng chung',
		stats: ['Khống Chế Mạnh', 'Di Chuyển', 'Thương Hồn'],
		tags: ['Khống Chế Mạnh', 'Di Chuyển', 'Thương Hồn'],
		details: `Đá trường thương bay về phía trước, gây {Định Thân} và kéo kẻ địch về phía thương. Thi triển lần nữa để nhảy đến vị trí trường thương, gây {Hất Tung}. Hiệu ứng Hất Tung và chiêu thức {Khiêu} dùng chung thời gian hồi chiêu.
• {Lăng Vân}: Khi không Hất Tung được kẻ địch, thời gian hồi chiêu của {Khiêu} giảm.
• {Thương Hồn}: Khi thi triển kỹ năng trong chiến đấu sẽ nhận Thương Hồn.
• {Khiêu}: Khi Lăng Vân Dược Hất Tung được kẻ địch, số lần thi triển của chiêu thức Khiêu tăng thêm {1 lần}.`,
		detail: `• Đòn thứ nhất: {1.852} sát thương Ngoại công
• Thời gian Định Thân: {1,5 giây}
• Đòn thứ hai: {2.701} sát thương Ngoại công
• Thời gian lơ lửng: khoảng {2 giây}
• Thời gian hồi chiêu giảm khi không Hất Tung được mục tiêu: {6 giây}
• Hồi chiêu: {14 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/lvd.png',
	},
	{
		name: 'Đan Tâm Ẩm Ý',
		nameZh: '丹心饮意',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Dùng chung',
		stats: ['Hồi Phục', 'Tùy Thế', 'Phòng Ngự Thủ Lĩnh'],
		tags: ['Hồi Phục', 'Tùy Thế', 'Phòng Ngự Thủ Lĩnh'],
		details: `Kích hoạt sức mạnh {Khí huyết}, gây sát thương liên tục lên kẻ địch xung quanh và nhận {Phòng ngự thủ lĩnh}.
• {Ẩm Ý}: Đòn đánh cuối gây sát thương kết liễu dựa trên tổng số kẻ địch bị kỹ năng đánh trúng, đồng thời hồi phục {Khí huyết} cho bản thân.
• {Tùy Thế}: Có thể thi triển trong khi sử dụng các kỹ năng khác mà không làm gián đoạn kỹ năng đang thi triển.`,
		detail: `• Sát thương duy trì: {519} sát thương Ngoại công mỗi {0,5 giây}
• Sát thương kết liễu cơ bản: {2.158} sát thương Ngoại công
• Phòng ngự thủ lĩnh: {7,0%}
• Hồi Khí huyết: tối thiểu {5%} và tối đa {16%} Khí huyết
• Hồi Khí huyết trong Quần Chiến: tổng lượng hồi phục tăng {60%}
• Hồi chiêu: {14 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/dtay.png',
	},
	{
		name: 'Giao Long Chấn Hải',
		nameZh: '蛟龙震海',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Cốt lõi dùng chung',
		stats: ['Hồi Phục', 'Bá Thể', 'Khống Chế Mạnh'],
		tags: ['Hồi Phục', 'Bá Thể', 'Khống Chế Mạnh'],
		details: `Múa thương kéo và {khống chế mạnh} kẻ địch xung quanh, sau đó tung đòn kết thúc gây sát thương và {đánh ngã}. Trong thời gian thi triển nhận {Bá thể}.
• {Xích Liệt}: Hồi phục {Khí huyết} dựa trên số lượng kẻ địch bị đánh trúng.
• {Quần Chiến}: Khi xung quanh có ít nhất {5 người chơi địch}, nhận thêm hiệu quả {Giảm sát thương} và {Kháng tầm xa}.
• {Bất Khuất Hãm Trận}: Khi chọn quái làm mục tiêu, trong lúc múa thương nhấn {Khiêu} để vào trạng thái {Liệt Diễm Thương}. Tiêu hao điểm Bất Khuất để truy kích mục tiêu. Nhấn {Thích} hoặc khi kết thúc truy kích có thể tung đòn kết liễu.`,
		detail: `• Sát thương duy trì: {1.904} sát thương Ngoại công mỗi {0,2 giây}
• Sát thương kết liễu: {4.110} sát thương Ngoại công
• Giảm sát thương trong Quần Chiến: {60%}
• Kháng tầm xa trong Quần Chiến: {20,0%}
• Thời gian khống chế mạnh: {1,8 giây}
• Thời gian đánh ngã: khoảng {1,5 giây}
• Hồi Khí huyết: tối đa {50%} Khí huyết
• Hồi Khí huyết trong Quần Chiến: tổng lượng hồi phục tăng {60%}
• Sát thương Liệt Diễm Thương lên quái tăng: {60%}
• Tổng sát thương truy kích: {50.401} sát thương Ngoại công
• Thời gian hồi chiêu truy kích giảm: {5 giây}
• Thời gian hồi chiêu truy kích lên quái giảm thêm: {2 giây}
• Hồi chiêu: {24 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/glch.png',
	},
	{
		name: 'Truy',
		nameZh: '追',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Đấu trường',
		stats: ['Di Chuyển', 'Trọng Thương', 'Thương Hồn'],
		tags: ['Di Chuyển', 'Trọng Thương', 'Thương Hồn'],
		details: `Đòn thứ nhất đâm nhanh về phía trước, đòn thứ hai lao về phía mục tiêu rồi quét ngang.
• {Đoạn}: Khi đánh trúng gây hiệu quả {Trọng Thương}.
• {Thương Hồn}: Khi thi triển kỹ năng trong chiến đấu sẽ nhận Thương Hồn.
• {Thích}: Khi thi triển {Truy}, số lần thi triển của chiêu thức Thích tăng thêm {1 lần}.`,
		detail: `• Sát thương đòn thứ nhất: {1.876} sát thương Ngoại công
• Sát thương đòn thứ hai: {2.417} sát thương Ngoại công
• Hiệu quả Trọng Thương: {35%}, kéo dài {5 giây}
• Hồi chiêu: {10 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/T.png',
	},
	{
		name: 'Bá Giả Hoành Lan',
		nameZh: '霸者横栏',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Dùng chung',
		stats: ['Suy Yếu', 'Khiêu Khích'],
		tags: ['Suy Yếu', 'Khiêu Khích'],
		details: `Ngang thương chỉ về phía trước, nhận đầy {Thương Hồn} và đánh dấu mục tiêu.
• {Bá Giả}: Khi trang bị kỹ năng, sát thương gây ra lên quái giảm, đồng thời đòn đánh tạo thêm điểm thù hận với quái. Khi thi triển kỹ năng, khiêu khích quái đã bị đánh dấu.
• {Vô Úy}: Khi đánh dấu người chơi địch, sát thương của một số đòn tấn công tiếp theo của mục tiêu bị giảm. Khi xung quanh có nhiều kẻ địch, số lần hiệu ứng tăng lên.
• {Hoành Lan}: Khi tấn công người chơi địch đã bị đánh dấu ở cự ly gần, gây {Định Thân}. Hiệu ứng Định Thân chỉ kích hoạt một lần.`,
		detail: `• Sát thương: {2.251} sát thương Ngoại công
• Thời gian duy trì dấu ấn Hoành Lan: {6 giây}
• Sát thương nhận vào từ quái giảm: {10%}
• Sát thương của người chơi bị giảm: {50%}
• Số lần đòn đánh bị giảm sát thương khi đấu đơn: {3 lần}
• Số lần đòn đánh bị giảm sát thương khi có nhiều người: {6 lần}
• Thời gian Định Thân: {2 giây}
• Hồi chiêu: {18 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/bghl.png',
	},
	{
		name: 'Bất Khuất Thủ Hộ',
		nameZh: '不屈守护',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Phó bản',
		stats: ['Khiên Hộ Thuẫn', 'Hỗ Trợ', 'Thiên Thương'],
		tags: ['Khiên Hộ Thuẫn', 'Hỗ Trợ', 'Thiên Thương'],
		details: `Áp dụng dấu ấn bảo hộ, giúp bản thân và đồng đội được chọn nhận {Khiên hộ thuẫn} và {Thiên Thương}.
• {Thiên Thương}: Khi đồng đội được bảo hộ rơi vào trạng thái nguy cấp, Thiên Thương tự động kích hoạt để chống chịu sát thương và hồi phục một lượng {Khí huyết} nhất định.
• {Nghĩa Tâm}: Chỉ có thể áp dụng dấu ấn bảo hộ lên một mục tiêu duy nhất. Trong một khoảng thời gian, không thể thay đổi mục tiêu được bảo hộ.`,
		detail: `• Sát thương: {2.144} sát thương Ngoại công
• Khiên hộ thuẫn: {10%} Khí huyết tối đa
• Thời gian duy trì Khiên hộ thuẫn: {10 giây}
• Thời gian hồi chiêu khi đổi mục tiêu bảo hộ: {45 giây}
• Thời gian hồi chiêu của Khiên hộ thuẫn khi mục tiêu nguy cấp: {180 giây}
• Hồi chiêu: {15 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/bkth.png',
	},
	{
		name: 'Thiết Kỵ · Định Phong Ba',
		nameZh: '铁骑·定风波',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Cốt lõi đấu trường',
		stats: ['Bá Thể', 'Di Chuyển', 'Tăng Tốc'],
		tags: ['Bá Thể', 'Di Chuyển', 'Tăng Tốc'],
		details: `Ngựa sắt tung vó vượt núi sông, chuyển chiêu thức {Thích} và {Khiêu} sang phiên bản chiến đấu trên ngựa.
• {Thiết Kỵ · Thích}: Lao về phía trước, gây sát thương lên kẻ địch trên đường di chuyển.
• {Thiết Kỵ · Khiêu}: Vung trường thương, gây sát thương lên kẻ địch trong phạm vi.
• {Thần Tuấn}: Tốc độ hồi phục tự nhiên điểm {Bất Khuất} khi cưỡi ngựa tăng lên.
• {Kim Qua Thiết Mã}: Khi lên ngựa bằng Thiết Kỵ, nhận hiệu ứng tăng tốc và {Bá thể} trong thời gian ngắn. Ngoài chế độ Luận Võ Công Bằng, thời gian tăng tốc chuyển thành {vĩnh viễn}.
• {Quần Chiến}: Khi xung quanh có ít nhất {5 người chơi địch}, sau khi cưỡi ngựa nhận thêm {Kháng tầm xa} trong một khoảng thời gian.`,
		detail: `• Thiết Kỵ · Thích: {1.498} sát thương Ngoại công
• Thiết Kỵ · Khiêu: {3.242} sát thương Ngoại công
• Lượng Bất Khuất tăng thêm: {8 điểm/giây}
• Thời gian duy trì Bá thể trong Luận Võ: {2 giây}
• Thời gian duy trì Bá thể ngoài Luận Võ: {3 giây}
• Thời gian tăng tốc trong Luận Võ: {5 giây}
• Thời gian tăng tốc ngoài Luận Võ: {vĩnh viễn}
• Kháng tầm xa trong Quần Chiến: {20%}
• Hồi chiêu: {17 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/tkdpb.png',
	},
	{
		name: 'Bích Huyết Kỳ',
		nameZh: '碧血旗',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Phó bản',
		stats: ['Cường Hóa', 'Hỗ Trợ'],
		tags: ['Cường Hóa', 'Hỗ Trợ'],
		details: `Cắm cờ {Bích Huyết}, gây sát thương và tăng {Phòng thủ} cho đồng đội xung quanh.
• {Trường Thanh, Ngộ}: Sau khi học kỹ năng, đồng đội xung quanh được tăng một lượng {Khắc chế thủ lĩnh} và {Khắc chế môn phái}.
• {Quân Hồn}: Khi mang theo kỹ năng {Bá Giả Hoành Lan}, sẽ khiêu khích quái trong phạm vi cờ Bích Huyết.`,
		detail: `• Sát thương của cờ Bích Huyết: {1.769} sát thương Ngoại công
• Phòng thủ tăng: {14}
• Thời gian duy trì: {10 giây}
• Khắc chế thủ lĩnh tăng thêm từ Ngộ: {42}
• Khắc chế môn phái tăng thêm từ Ngộ: {42}
• Hồi chiêu: {16 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/bhk.png',
	},
	{
		name: 'Thích',
		nameZh: '刺',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Tài nguyên',
		stats: ['Tài Nguyên'],
		tags: ['Tài Nguyên'],
		details: `Đâm thương về phía trước, gây sát thương.
• Thương thức cơ bản, {Thích} và {Khiêu} có thể phối hợp sử dụng để tạo ra các chuỗi liên chiêu với hiệu quả khác nhau. Chi tiết liên chiêu được hiển thị trong giao diện {Bảng liên chiêu}.`,
		detail: `• Sát thương đâm thương về phía trước: {681} sát thương Ngoại công`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/thich.png',
	},
	{
		name: 'Khiêu',
		nameZh: '挑',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Tài nguyên',
		stats: ['Tài Nguyên', 'Khống Chế Mạnh'],
		tags: ['Tài Nguyên', 'Khống Chế Mạnh'],
		details: `Đâm thương hất lên, gây sát thương và hiệu ứng {Hất Tung}.
• Thương thức cơ bản, {Thích} và {Khiêu} có thể phối hợp sử dụng để tạo ra các chuỗi liên chiêu với hiệu quả khác nhau. Chi tiết liên chiêu được hiển thị trong giao diện {Bảng liên chiêu}.`,
		detail: `• Sát thương hất lên: {654} sát thương Ngoại công
• Thời gian hồi chiêu Hất Tung: {12 giây}
• Thời gian lơ lửng: khoảng {2 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/k.png',
	},
	{
		name: 'Định Hồn',
		nameZh: '定魂',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Dùng chung',
		stats: ['Giải Khống Chế', 'Giảm Sát Thương', 'Bá Thể'],
		tags: ['Giải Khống Chế', 'Giảm Sát Thương', 'Bá Thể'],
		details: `Đẩy lùi kẻ địch xung quanh và gây sát thương, {giải trừ khống chế} và loại bỏ toàn bộ trạng thái bất lợi. Trong một khoảng thời gian, Huyết Hà nhận hiệu quả {giảm sát thương} và {Bá thể}.`,
		detail: `• Sát thương: {649} sát thương Ngoại công
• Thời gian duy trì Bá thể: {2 giây}
• Hiệu quả giảm sát thương: {15%}, kéo dài {3 giây}
• Phòng ngự thủ lĩnh: {10%}
• Giảm sát thương cộng thêm trong Quần Chiến: {50%}
• Hồi chiêu: {20 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/dh.png',
	},
	{
		name: 'Thiên Thương',
		nameZh: '天伤',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Dùng chung',
		stats: ['Bị Động', 'Hồi Phục', 'Bất Khuất'],
		tags: ['Bị Động', 'Hồi Phục', 'Bất Khuất'],
		details: `Khi rơi vào trạng thái {nguy cấp}, nhận đầy điểm {Bất Khuất}, đồng thời hồi phục {Khí huyết} cho bản thân.
• {Quần Chiến}: Khi xung quanh có ít nhất {5 người chơi địch}, tổng lượng Khí huyết hồi phục tăng {60%}.
• Kỹ năng bị động của Huyết Hà, {không cần trang bị}.`,
		detail: `• Hồi Khí huyết khi nguy cấp: {10%}
• Hồi Khí huyết trong Quần Chiến: tổng lượng hồi phục tăng {60%}
• Hồi chiêu: {180 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/tt.png',
	},
	{
		name: 'Liệt Diễm Thương',
		nameZh: '烈焰枪',
		category: 'Kỹ năng',
		monPhai: 'Huyết Hà',
		itemType: 'Dùng chung',
		stats: ['Bị Động', 'Bất Khuất', 'Tấn Công', 'Tốc Độ Đánh'],
		tags: ['Bị Động', 'Bất Khuất', 'Tấn Công', 'Tốc Độ Đánh'],
		details: `Trong chiến đấu, Huyết Hà liên tục tích lũy điểm {Bất Khuất}. Khi điểm Bất Khuất đạt tối đa, kích hoạt {Liệt Diễm Thương}, tăng {Tấn công} và {Tốc độ đánh} trong {18 giây}. Trong thời gian Liệt Diễm Thương kích hoạt, điểm Bất Khuất liên tục suy giảm và không thể tiếp tục tích lũy.
• Kỹ năng bị động, {không cần trang bị}.`,
		detail: `• Tấn công tăng: {6%}
• Tốc độ đánh tăng: {5%}
• Thời gian duy trì: {18 giây}`,
		upgrade: '',
		imageUrl: '/images/ky-nang-mon-phai/huyet-ha/ldt.png',
	},
];