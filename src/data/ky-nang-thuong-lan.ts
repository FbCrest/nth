import { GameItem } from '../types';

export const kyNangThuongLanData: GameItem[] = [
  {
    name: 'Thiên Ba Trảm',
    nameZh: '千波斩',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Sát Thương', 'Truy Kích', 'Cuồng Lan'],
    tags: ['Sát Thương', 'Truy Kích', 'Cuồng Lan'],
    details: `• Liên tục gây sát thương về phía trước.
• Truy Kích: Có thể nhấn lần nữa để truy kích kẻ địch trong phạm vi 15 ô.
• Cuồng Lan: Ở trạng thái Cuồng Lan, sát thương được tăng.
• Xung Lãng: Cường hóa kỹ năng Yến Hồi Phong.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương trảm kích: 55.200 ngoại công Thủy thương, tổng cộng 4 lần
• Sát thương kết liễu: 124.199 ngoại công Thủy thương
• Trạng thái Cuồng Lan: Sát thương tăng 20%
• Sát thương đối với quái: Tăng 150%
• Lân Nộ nhận được: 100 điểm
• Thời gian duy trì: 12 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/tbt.png',
  },
  {
    name: 'Cuồng Đào',
    nameZh: '狂涛',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Khống Chế', 'Đánh Bay'],
    tags: ['Bạo Phát', 'Khống Chế', 'ĐánhBay'],
    details: `Xích Khuyết hóa thành cự kiếm, chém về phía trước gây 2 đoạn sát thương.
• Liên Đoạn: Sau khi thi triển đủ 4 chiêu Phách Ba, Du Lân, Phách Ba, Đãng Cuồng Lan, trong một khoảng thời gian nhất định, khi thi triển sẽ trực tiếp gây sát thương đoạn 2, đồng thời sát thương lần này được tăng thêm.
• Đánh Bay: Đoạn 2 gây hiệu ứng đánh bay (với cùng một người chơi hoặc quái tinh anh, dùng chung hồi khống chế 12 giây với Phách Ba và Du Lân).
• Trấn Hải: Ở trạng thái Trấn Hải, dựa theo phòng ngự bản thân để gia tăng thêm lượng thù hận lên quái vật.
• Xung Lãng: Cường hóa kỹ năng Yến Hồi Phong.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương đoạn 1: 104.880 ngoại công Thủy thương
• Sát thương đoạn 2: 262.198 ngoại công Thủy thương
• Sát thương sau Liên Đoạn: 316.708 ngoại công Thủy thương
• Thời gian đánh bay: 1 giây
• Sát thương lên quái: Tăng 120%
• Sát thương lên quái (sau Liên Đoạn): Tăng 160%
• Hệ số thù hận cộng thêm: Tối thiểu 650%
• Lân Nộ nhận được: 80 điểm
• Thời gian hồi: 13 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/cd.png',
  },
  {
    name: 'Tật Lưu',
    nameZh: '疾流',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Dịch Chuyển'],
    tags: ['Nhóm', 'Dịch Chuyển'],
    details: `• Lao nhanh về phía trước một đoạn, gây sát thương lên kẻ địch trên đường đi và tại điểm kết thúc.
• Phách Ba: Đòn đánh thường được cường hóa thành Phách Ba.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương khi lao tới: 37.260 ngoại công Thủy thương
• Sát thương kết thúc: 52.440 ngoại công Thủy thương
• Sát thương lên quái: Tăng 200%
• Lân Nộ nhận được: 50 điểm
• Thời gian hồi: 8 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/tl.png',
  },
  {
    name: 'Đoạn Thương Lãng',
    nameZh: '断沧浪',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Phá Khiên'],
    tags: ['Nhóm', 'Phá Khiên'],
    details: `• Vung Xích Khuyết tấn công kẻ địch xung quanh, gây sát thương diện rộng.
• Xung Lãng: Cường hóa kỹ năng Yến Hồi Phong.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương: 193.199 ngoại công Thủy thương
• Sát thương lên quái: Tăng 200%
• Lân Nộ nhận được: 80 điểm
• Thời gian hồi: 14 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/dtl.png',
  },
  {
    name: 'Phệ Lãng',
    nameZh: '噬浪',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bộc Phát', 'Khống Chế', 'Đánh Bay'],
    tags: ['Bộc Phát', 'Khống Chế', 'ĐánhBay'],
    details: `• Dùng Xích Khuyết tạo đợt sóng dữ, gây sát thương lên kẻ địch trên đường đi, kéo chúng về trước mặt, sau đó tung đòn chém cuối cùng khiến mục tiêu bị đánh bay.
• Xung Lãng: Cường hóa kỹ năng Yến Hồi Phong.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương Cự Lãng: 86.563 ngoại công Thủy thương
• Sát thương kết thúc: 112.407 ngoại công Thủy thương
• Lân Nộ nhận được: 100 điểm
• Thời gian hồi: 16 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/pl.png',
  },
  {
    name: 'Du Lân',
    nameZh: '游麟',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Dịch Chuyển', 'Khống Chế', 'Miễn Khống Chế', 'Giảm Hồi Chiêu'],
    tags: ['Bạo Phát', 'Dịch Chuyển', 'Khống Chế', 'Miễn Khống Chế', 'Giảm Hồi Chiêu'],
    details: `Tiến vào trạng thái Du Lân, nhanh chóng di chuyển, nhận Lân Nộ và liên tục hấp thu các vật thể bay tới. Khi di chuyển về phía mục tiêu sẽ tăng thêm tốc độ di chuyển, mở rộng phạm vi truy kích và nhận miễn khống chế. Khi thi triển, nếu xung quanh có trên 6 người chơi địch, lập tức nhận miễn khống chế.
• Du Lân · Phách Ba: Sau khi thi triển, Phách Ba được cường hóa. Trong thời gian này bản thân được miễn khống chế và giảm sát thương, đồng thời gây sát thương và hiệu ứng hất tung. (Với cùng một người chơi hoặc quái tinh anh, hiệu ứng khống chế dùng chung hồi 12 giây với Phách Ba và Cuồng Đào.)
• Bôn Tập: Khi kỹ năng hệ phái đánh trúng mục tiêu ở khoảng cách xa bản thân, sẽ giảm thời gian hồi của Du Lân.`,
    detail: `• Tốc độ chạy nhanh: 9 - 13, duy trì 4 giây
• Sát thương Du Lân · Phách Ba: 137.999 ngoại công Thủy thương
• Sát thương tiếp theo: 41.400 ngoại công Thủy thương, tổng cộng 4 lần
• Ở trạng thái Cuồng Lan: Sát thương tăng 15%
• Giảm sát thương nhận vào: 40%
• Lân Nộ nhận được: Tối đa 160 điểm
• Thời gian hồi: 15 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/dl.png',
  },
  {
    name: 'Cộng Lãng',
    nameZh: '共浪',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Dịch Chuyển', 'Hỗ Trợ', 'Bá Thể', 'Khiên'],
    tags: ['Duy Trì', 'Dịch Chuyển', 'Hỗ Trợ', 'Bá Thể', 'Khiên'],
    details: `Đạp sóng lao nhanh về phía trước. Thành viên tổ đội nhận giảm sát thương, bản thân trong thời gian Đạp Sóng nhận Bá Thể, đồng thời dựa theo số lượng kẻ địch xung quanh để nhận thêm giảm sát thương và tăng tốc. Có thể nhấn lại kỹ năng để kết thúc trạng thái Đạp Sóng.
• Dũng Triều Lạc: Trong phạm vi 30 trượng, thành viên tổ đội có thể nhấn nút Đạp Sóng để theo chân Thương Lan (có thể nhấn khi đang bị khống chế), nhận Bá Thể và dựa theo số lượng địch xung quanh để nhận khiên. Có thể nhấn nút rời để thoát khỏi Đạp Sóng.
• Hoán Triều Sinh: Trong phạm vi 30 trượng, nếu thành viên tổ đội đủ điều kiện Đạp Sóng có HP dưới 30% và đang chịu khống chế cứng, sẽ tự động gia nhập Đạp Sóng. Trong thời gian Đạp Sóng, nếu khiên bị phá vỡ, sẽ bị buộc rời khỏi trạng thái này.
• Trục Lãng Hành: Trong thời gian Đạp Sóng có thể xuyên qua một số kỹ năng tạo chướng ngại như Thiên Phong Đoạn Vân.
• Trong Bang Hội Liên Đấu, sau khi thi triển sẽ xóa một phần hiệu ứng bất lợi dưới trụ cho tổ đội, và trong 5 giây không cộng dồn lại (hiệu quả chiến thuật của Liên Đấu vẫn có thể cộng dồn).`,
    detail: `• Số người Đạp Sóng tối đa: 5 người
• Mốc kích hoạt giảm thương / khiên: 0 / 3 / 6 kẻ địch xung quanh
• Giảm sát thương bản thân: 40% / 60% / 80%
• Tốc độ di chuyển: 15 - 8, duy trì 6 giây
• Khiên cho đồng đội: 30% / 50% / 70% tối đa HP
• Giảm sát thương đồng đội: 40% trong 4 giây
• Hồi chiêu chung tổ đội: 30 giây
• Dùng chung hồi chiêu với: Thiết Bích và Kình Nhạc của Thiết Y
• Thời gian hồi: 30 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/cl.png',
  },
  {
    name: 'Khiếu Hải',
    nameZh: '啸海',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Khiêu Khích', 'Giảm Tốc'],
    tags: ['Duy Trì', 'Khiêu Khích', 'Giảm Tốc'],
    details: `• Triệu hồi Kỳ Lân gây sát thương lên kẻ địch xung quanh và kèm hiệu ứng giảm tốc.
• Cuồng Lan: Ở trạng thái Cuồng Lan, sát thương được tăng.
• Trấn Hải: Ở trạng thái Trấn Hải, sẽ kéo và khiêu khích quái vật, đồng thời tạo hiệu ứng thù hận mạnh.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương: 48.300 ngoại công Thủy thương, tổng cộng 3 lần
• Sát thương lên quái: Tăng 80%
• Giảm tốc: 40%, duy trì 4 giây
• Trạng thái Cuồng Lan: Sát thương tăng 20%
• Lân Nộ nhận được: 45 điểm
• Thời gian hồi: 15 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/kh.png',
  },
  {
    name: 'Triều Dũng',
    nameZh: '潮涌',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Khống Chế', 'Bá Thể', 'Giảm Sát Thương', 'ĐánhBay'],
    tags: ['Duy Trì', 'Khống Chế', 'Bá Thể', 'Giảm Sát Thương', 'ĐánhBay'],
    details: `Dâng lên sóng nước, liên tục gây sát thương lên kẻ địch xung quanh và khiến chúng choáng. Đòn kết thúc gây hiệu ứng đánh bay. (Với cùng một người chơi, hiệu ứng khống chế có hồi nội bộ 12 giây.)
• Hộ Thể: Nhận Bá Thể, giảm sát thương và kháng sát thương tầm xa. Ở trạng thái Trấn Hải, hiệu quả giảm sát thương được tăng thêm.
• Xung Lãng: Cường hóa kỹ năng Yến Hồi Phong.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương: 62.100 ngoại công Thủy thương, tổng cộng 6 đoạn
• Sát thương kết thúc: 93.840 ngoại công Thủy thương
• Thời gian duy trì: 1,5 giây
• Thời gian khống chế: 1,5 giây mỗi lần gây sát thương
• Giảm sát thương: 25%
• Kháng sát thương tầm xa: 30%, duy trì 2,5 giây
• Trạng thái Trấn Hải: Giảm sát thương tăng lên 50%
• Lân Nộ nhận được: 130 điểm
• Thời gian hồi: 18 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/td.png',
  },
  {
    name: 'Thủy Khuyết Thiên Khuynh',
    nameZh: '水阙天倾',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Khiêu Khích', 'Tự Động Thi Triển'],
    tags: ['Nhóm', 'Khiêu Khích', 'Tự Động Thi Triển'],
    details: `Dâng lên vòi rồng nước, gây sát thương lên kẻ địch.
• Dẫn Đào: Khi mang theo kỹ năng này, mỗi lần thi triển kỹ năng thuộc hệ phái Thương Lan gây sát thương sẽ tích lũy hệ số sát thương. Khi hệ số tích lũy đạt ngưỡng nhất định, sẽ tự động thi triển một lần Thủy Khuyết Thiên Khuynh lên mục tiêu.
• Cuồng Lan: Ở trạng thái Cuồng Lan, sát thương được tăng.
• Trấn Hải: Ở trạng thái Trấn Hải: Chủ động thi triển sẽ giảm thời gian hồi. Khiêu khích quái được chọn và tạo hiệu ứng thù hận mạnh.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương: 18.091 ngoại công Thủy thương, tổng cộng 5 đoạn
• Hệ số cần để tích đầy Thủy Ý: 4000%
• Trạng thái Cuồng Lan: Sát thương tăng 25%
• Trạng thái Trấn Hải: Giảm 3 giây hồi chiêu
• Sát thương lên quái: Tăng 100%
• Lân Nộ nhận được: 50 điểm
• Thời gian hồi: 12 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/tktk.png',
  },
  {
    name: 'Lân Giáp',
    nameZh: '麟甲',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Tạo Khiên', 'Cường Hóa', 'Bá Thể', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    tags: ['Tạo Khiên', 'Cường Hóa', 'Bá Thể', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    details: `Nhận khiên, giảm sát thương, kháng sát thương tầm xa và 4 tầng Lân Giáp. Có thể thi triển ngay cả khi đang bị khống chế.
• Ấn Lân Giáp: Khi thi triển kỹ năng, nếu bản thân không ở trạng thái Bá Thể, sẽ tiêu hao 1 tầng để nhận Miễn khống chế, giảm sát thương và kháng tầm xa. Nếu đang ở trạng thái Miễn khống, sẽ nhận thêm Bá Thể. (Lưu ý: Đòn đánh thường và Khiếu Hải không kích hoạt hiệu ứng này.)
• Lân Giáp · Ngộ: Sau khi học kỹ năng, đồng đội xung quanh được tăng một lượng nhỏ Kháng Bạo Kích và Khắc chế Thủ Lĩnh. Trong các chế độ không phải đại chiến nhiều người, hiệu ứng sẽ bị xóa khi kỹ năng kết thúc.`,
    detail: `• Giá trị khiên: 99.569
• Giảm sát thương: 25%, duy trì 2,5 giây
• Trạng thái Trấn Hải: Giảm sát thương tăng lên 50%, duy trì 2,5 giây
• Thời gian Bá Thể / Miễn khống: Tối đa 2 giây
• Kháng sát thương tầm xa: 30%, duy trì 2,5 giây
• Kháng tầm xa có thể cộng dồn: Tối đa 10 giây
• Thời gian tồn tại: Tối đa 15 giây
• Lân Nộ nhận được: 50 điểm
• Kháng Bạo Kích tăng (Ngộ): +804
• Khắc chế Thủ Lĩnh tăng (Ngộ): +1,8%
• Thời gian hồi: 15 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/lg.png',
  },
  {
    name: 'Lập Khuyết Vi Lao',
    nameZh: '立阙为牢',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Chướng Ngại', 'Khiêu Khích'],
    tags: ['Duy Trì', 'Chướng Ngại', 'Khiêu Khích'],
    details: `Gây sát thương lên kẻ địch trong phạm vi kỹ năng.
• Khiêu khích: Ở trạng thái Trấn Hải, sẽ khiêu khích quái được chọn và tạo hiệu ứng thù hận mạnh.
• Lao Lung: Gây hiệu ứng Phong Bế lên người chơi địch được chọn, khiến mục tiêu không thể rời khỏi phạm vi kỹ năng, đồng thời phải chịu sát thương duy trì không thể né tránh. Đòn đánh thường được cường hóa thành Phách Ba. Nếu trong thời gian Phong Bế có hiệu lực mà mục tiêu lại tiến vào phạm vi kỹ năng, thời gian Phong Bế sẽ được kéo dài thêm.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương: 112.909 ngoại công Thủy thương
• Thời gian Phong Bế: 1,5 giây
• Thời gian kéo dài thêm: 2,5 giây
• Sát thương duy trì: 20.387 ngoại công Thủy thương mỗi 0,5 giây
• Thời gian sát thương duy trì: Bằng thời gian Phong Bế
• Lân Nộ nhận được: 50 điểm
• Hồi chiêu chung: 15 giây
• Thời gian hồi: 18 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/lkvl.png',
  },
  {
    name: 'Lộng Triều',
    nameZh: '弄潮',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Đơn Mục Tiêu', 'Khống Chế', 'Bá Thể', 'Dịch Chuyển'],
    tags: ['Đơn Mục Tiêu', 'Khống Chế', 'Bá Thể', 'Dịch Chuyển'],
    details: `Lao tới mục tiêu địch gây sát thương và khiến mục tiêu cứng đờ (choáng ngắn), sau đó tự động thi triển đoạn 2 hất tung và bắt giữ quật ngã mục tiêu. Nếu mục tiêu không chịu hiệu ứng khống chế cứng, sẽ tự động thi triển Lập Khuyết Vi Lao lên mục tiêu đó.
• Phược Giao: Sau khi bắt giữ thành công, bản thân nhận Bá Thể và giảm sát thương. Nếu hiệu ứng bắt giữ bị giải trừ trước thời hạn, sẽ hoàn trả một phần thời gian hồi kỹ năng.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.`,
    detail: `• Sát thương đoạn 1: 52.011 ngoại công Thủy thương
• Sát thương đoạn 2: 34.674 ngoại công Thủy thương
• Thời gian khống chế: Khoảng 2,5 giây
• Giảm sát thương: 50%
• Hoàn trả hồi chiêu khi bắt giữ bị hủy sớm: 10 giây
• Lân Nộ nhận được: 100 điểm
• Dùng chung hồi chiêu với Lập Khuyết Vi Lao: 15 giây
• Thời gian hồi: 15 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/lt.png',
  },
  {
    name: 'Tảo Lãng',
    nameZh: '扫浪',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Đơn Mục Tiêu', 'Cường Hóa', 'Khống Chế'],
    tags: ['Đơn Mục Tiêu', 'Cường Hóa', 'Khống Chế'],
    details: `Đòn đánh cơ bản gồm 3 thức, gây sát thương lên kẻ địch phía trước.
• Lân Nộ: Khi kỹ năng đánh trúng kẻ địch, nhận Lân Nộ.
• Phách Ba: Mỗi khi tích đủ 100 điểm Lân Nộ, đòn đánh thường sẽ được cường hóa thành Phách Ba, gây sát thương và kèm hiệu ứng đánh ngã. (Với cùng một người chơi hoặc quái tinh anh, hiệu ứng khống chế dùng chung hồi 12 giây với Cuồng Đào và Du Lân.) Trong thời gian thi triển Phách Ba, bản thân được miễn khống chế.
• Nếu xung quanh có trên 6 kẻ địch, Phách Ba nhận thêm giảm sát thương 40%.`,
    detail: `• Sát thương Tảo Lãng – Thức 1: 20.700 ngoại công Thủy thương
• Sát thương Tảo Lãng – Thức 2: 20.700 ngoại công Thủy thương
• Sát thương Tảo Lãng – Thức 3: 20.700 ngoại công Thủy thương, gồm 2 đoạn
• Sát thương Phách Ba: 69.000 ngoại công Thủy thương
• Thời gian đánh ngã (Phách Ba): 1,35 giây
• Lân Nộ nhận được mỗi lần Tảo Lãng: 40 điểm`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/tao-lang.png',
  },
  {
    name: 'Phá Ách',
    nameZh: '破厄',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Đơn Mục Tiêu', 'Giải Khống', 'Bá Thể', 'Giảm Sát Thương', 'Tăng Tốc'],
    tags: ['Đơn Mục Tiêu', 'Giải Khống', 'Bá Thể', 'Giảm Sát Thương', 'Tăng Tốc'],
    details: `Hất văng kẻ địch xung quanh gây sát thương, đồng thời giải trừ khống chế và loại bỏ toàn bộ trạng thái bất lợi trên bản thân.
• Nghịch Lân: Trong một khoảng thời gian nhất định, nhận: Giảm sát thương, Bá Thể, Tăng tốc độ di chuyển
• Trong thời gian hiệu lực, mỗi lần bị tấn công sẽ hồi Lân Nộ.`,
    detail: `• Sát thương: 15.175 ngoại công Thủy thương
• Thời gian Bá Thể: 2,5 giây
• Giảm sát thương: 40%, duy trì 5 giây
• Tăng tốc độ di chuyển: 35%, duy trì 3 giây
• Hồi Lân Nộ khi bị đánh: 20 điểm mỗi lần
• Số lần hồi tối đa: 5 lần
• Thời gian hồi: 20 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/pa.png',
  },
  {
    name: 'Hóa Lân · Cuồng Lan',
    nameZh: '化麟·狂澜',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Bá Thể', 'QTE', 'Giảm Sát Thương'],
    tags: ['Bạo Phát', 'Bá Thể', 'QTE', 'Giảm Sát Thương'],
    details: `Chọn nhánh này, Thương Lan chuyển sang trạng thái Cuồng Lan với năng lực đầu ra mạnh hơn.
• Hóa Lân: Khi Lân Nộ đạt tối đa 400 điểm có thể kích hoạt. Gây sát thương, trong thời gian thi triển nhận Bá Thể và giảm sát thương, đồng thời tiến vào trạng thái Hóa Lân · Cuồng Lan.
• Hóa Lân · Cuồng Lan: Có thể thi triển Đãng Cuồng Lan. Trong thời gian này không thể nhận thêm Lân Nộ. Khi tiêu hao hết Lân Nộ, trạng thái chuyển thành Hóa Lân · Tức, kết thúc cường hóa đánh thường và có thể tiếp tục nhận Lân Nộ.
• Trong trạng thái Cuồng Lan, khi ở Hóa Lân · Cuồng Lan hoặc Hóa Lân · Tức: Kỹ năng hệ phái Thương Lan có thể giảm kháng cận chiến của địch (không áp dụng với Boss phụ bản). Gây thêm hiệu ứng giảm phòng thủ công trình. Hiệu ứng giảm kháng cận chiến không có hiệu lực trong Luận Võ Công Bằng, và khi áp dụng lên người chơi địch thì hiệu quả được nhân đôi.`,
    detail: `• Sát thương: 138.055 ngoại công Thủy thương
• Sát thương lên quái: Tăng 100%
• Giảm sát thương: 25%
• Giảm kháng cận chiến: 5%, duy trì 10 giây
• Giảm phòng thủ công trình: 5%, duy trì 10 giây
• Hồi nội bộ hiệu ứng giảm kháng trên cùng mục tiêu: 12 giây
• Thời gian duy trì Hóa Lân: 10 giây
• Thời gian hồi: 15 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/hlcl.png',
  },
  {
    name: 'Liệt Nhận · Cuồng Lan',
    nameZh: '裂刃·狂澜',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Bá Thể', 'QTE', 'Giảm Sát Thương', 'Kháng Quái'],
    tags: ['Bạo Phát', 'Bá Thể', 'QTE', 'Giảm Sát Thương', 'Kháng Quái'],
    details: `Chọn nhánh này, Thương Lan chuyển sang trạng thái Cuồng Lan có năng lực đầu ra mạnh hơn.
• Khi Lân Nộ vượt quá 200 điểm có thể kích hoạt. Nhân vật tiến vào trạng thái Giá Đao, trong thời gian này nhận hiệu quả giảm sát thương và liên tục tiêu hao Lân Nộ. Khi Lân Nộ không đủ hoặc bị tấn công (một số đòn đánh của Boss được tính là đỡ đòn), sẽ thi triển Liệt Nhận lên địch.
• Liệt Nhận: Dựa theo lượng Lân Nộ tiêu hao, gây sát thương tầm xa. Tiến vào trạng thái Hóa Lân · Tức, nhận hiệu quả kháng quái. Trong thời gian thi triển Liệt Nhận, nhận Bá Thể và giảm sát thương.
• Trong trạng thái Cuồng Lan, khi ở trạng thái Hóa Lân · Tức, kỹ năng của lưu phái Thương Lan có thể giảm kháng cận chiến của địch (trừ Boss phụ bản), và giảm thêm phòng ngự công trình. Hiệu quả giảm kháng cận chiến không có tác dụng trong chế độ Luận Võ Công Bằng, nhưng khi áp dụng lên người chơi địch sẽ tăng gấp đôi hiệu quả.
• Cần tiêu hao 2 tầng Lân Giáp.
• Trong thời gian Giá Đao có thể dùng cần điều khiển để di chuyển vị trí. Sau khi Liệt Nhận kết thúc có thể nối combo Cuồng Đào.`,
    detail: `• Sát thương đoạn 1: 84.621 ngoại công Thủy thương
• Sát thương đoạn 2 (cần 300 điểm): 89.598 ngoại công Thủy thương
• Sát thương đoạn 3 (cần 400 điểm): 89.598 ngoại công Thủy thương
• Sát thương đao quang kết thúc: 31.111 ngoại công Thủy thương
• Sát thương nổ kết thúc: 63.466 ngoại công Thủy thương
• Sát thương lên quái tăng: 100%
• Mỗi 100 điểm Lân Nộ tiêu hao tăng sát thương kết thúc: 30%
• Giảm sát thương: 50%
• Kháng quái: 30%, duy trì 5 giây
• Giảm kháng cận chiến: 5%, duy trì 10 giây
• Giảm phòng ngự công trình: 5%, duy trì 10 giây
• Nội tại giảm kháng cận chiến của địch: hồi chiêu 12 giây
• Thời gian duy trì Hóa Lân · Tức: 5 giây
• Thời gian hồi: 5 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/lncl.png',
  },
  {
    name: 'Hóa Lân · Trấn Hải',
    nameZh: '化麟·镇海',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'QTE', 'Bá Thể', 'Giảm Sát Thương', 'Hỗ Trợ'],
    tags: ['Bạo Phát', 'QTE', 'Bá Thể', 'Giảm Sát Thương', 'Hỗ Trợ'],
    details: `Chọn nhánh này, Thương Lan chuyển sang trạng thái Trấn Hải với năng lực phòng ngự mạnh hơn.
• Hóa Lân: Khi Lân Nộ đạt tối đa 400 điểm có thể kích hoạt. Gây sát thương và tăng kháng cận chiến cho tổ đội, trong thời gian thi triển nhận Bá Thể và giảm sát thương, đồng thời tiến vào trạng thái Hóa Lân · Trấn Hải.
• Hóa Lân · Trấn Hải: Có thể thi triển Trấn Tứ Hải. Trong thời gian này không thể nhận thêm Lân Nộ. Khi tiêu hao hết Lân Nộ, trạng thái chuyển thành Hóa Lân · Tức, kết thúc cường hóa đánh thường và có thể tiếp tục nhận Lân Nộ.
• Hiệu ứng tăng kháng cận chiến không có hiệu lực trong Luận Võ Công Bằng.`,
    detail: `• Sát thương: 93.280 ngoại công Thủy thương
• Giảm sát thương: 50%
• Tăng kháng cận chiến: 5%, duy trì 10 giây
• Thời gian duy trì Hóa Lân: 10 giây
• Thời gian hồi: 15 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/hlth.png',
  },
  {
    name: 'Liệt Nhận · Trấn Hải',
    nameZh: '裂刃·镇海',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Bá Thể', 'QTE', 'Giảm Sát Thương', 'Kháng Quái', 'Hỗ Trợ'],
    tags: ['Bạo Phát', 'Bá Thể', 'QTE', 'Giảm Sát Thương', 'Kháng Quái', 'Hỗ Trợ'],
    details: `Chọn nhánh này, Thương Lan chuyển sang trạng thái Trấn Hải có năng lực phòng ngự mạnh hơn.
• Khi Lân Nộ vượt quá 200 điểm có thể kích hoạt. Nhân vật tiến vào trạng thái Giá Đao, trong thời gian này nhận hiệu quả giảm sát thương và liên tục tiêu hao Lân Nộ. Khi Lân Nộ không đủ hoặc bị tấn công (một số đòn đánh của Boss được tính là đạn đao), sẽ thi triển Liệt Nhận lên địch.
• Liệt Nhận: Dựa theo lượng Lân Nộ tiêu hao, gây sát thương tầm xa, đồng thời tăng kháng cận chiến cho tổ đội. Tiến vào trạng thái Hóa Lân · Tức, nhận hiệu quả kháng quái. Trong thời gian thi triển Liệt Nhận, nhận Bá Thể và giảm sát thương.
• Hiệu quả tăng kháng cận chiến không có tác dụng trong chế độ Luận Võ Công Bằng.
• Cần tiêu hao 2 tầng Lân Giáp.
• Trong thời gian Giá Đao có thể dùng cần điều khiển để di chuyển vị trí. Sau khi Liệt Nhận kết thúc có thể nối combo Cuồng Đào.`,
    detail: `• Sát thương đoạn 1: 38.080 ngoại công Thủy thương
• Sát thương đoạn 2 (cần 300 điểm): 40.320 ngoại công Thủy thương
• Sát thương đoạn 3 (cần 400 điểm): 40.320 ngoại công Thủy thương
• Sát thương đao quang kết thúc: 14.000 ngoại công Thủy thương
• Sát thương nổ kết thúc: 28.560 ngoại công Thủy thương
• Sát thương lên quái tăng: 100%
• Mỗi 100 điểm Lân Nộ tiêu hao tăng sát thương kết thúc: 30%
• Giảm sát thương: 50%
• Kháng quái: 30%, duy trì 5 giây
• Tăng kháng cận chiến: 5%, duy trì 10 giây
• Thời gian duy trì Hóa Lân · Tức: 5 giây
• Hệ số thù hận bổ sung: tối thiểu 650%
• Thời gian hồi: 5 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/lnth.png',
  },
  {
    name: 'Đãng Cuồng Lan',
    nameZh: '荡狂澜',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Miễn Khống Chế', 'Giảm Sát Thương', 'Phá Khiên', 'Cường Hóa'],
    tags: ['Bạo Phát', 'Miễn Khống Chế', 'Giảm Sát Thương', 'Phá Khiên', 'Cường Hóa'],
    details: `Là đòn đánh thường được cường hóa trong thời gian Hóa Lân · Cuồng Lan. Gây sát thương và kèm hiệu ứng Phá Khiên. Khi đánh trúng địch (trừ Boss phụ bản), sẽ giảm kháng cận chiến của mục tiêu, đồng thời giảm thêm phòng thủ công trình.
• Kỹ năng gồm 4 thức, trong thời gian thi triển nhận: Miễn khống chế, Không thể bị chọn làm mục tiêu, Giảm sát thương, Kháng quái vật. Thức 3 và 4 có thể tiêu hao tầng Lân Giáp.
• Hiệu ứng giảm kháng cận chiến không có hiệu lực trong Luận Võ Công Bằng, khi áp dụng lên người chơi địch thì hiệu quả nhân đôi.`,
    detail: `• Sát thương thức 1: 74.624 ngoại công Thủy thương
• Sát thương thức 2: 80.843 ngoại công Thủy thương
• Sát thương thức 3: 35.571 ngoại công Thủy thương, tổng cộng 4 đoạn
• Sát thương thức 4 – Trảm kích: 36.069 ngoại công Thủy thương, tổng cộng 3 đoạn
• Sát thương thức 4 – Kết thúc: 149.248 ngoại công Thủy thương
• Giới hạn Phá Khiên: Tối đa tương đương 8% HP tối đa của mục tiêu
• Sát thương lên quái: Tăng 120%
• Giảm kháng cận chiến: 5%, duy trì 10 giây
• Giảm phòng thủ công trình: 5%, duy trì 10 giây
• Hồi nội bộ hiệu ứng giảm kháng: 12 giây
• Giảm sát thương: 25%
• Nếu xung quanh có trên 6 kẻ địch, giảm sát thương tăng lên 50%
• Kháng quái: 30%
• Tiêu hao Lân Nộ: 100 điểm mỗi thức`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/dcl.png',
  },
  {
    name: 'Trấn Tứ Hải',
    nameZh: '镇四海',
    category: 'Kỹ năng',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Bá Thể', 'Suy Yếu', 'Trọng Thương', 'Giảm Tốc'],
    tags: ['Nhóm', 'Bá Thể', 'Suy Yếu', 'Trọng Thương', 'Giảm Tốc'],
    details: `Là đòn đánh thường được cường hóa trong thời gian Hóa Lân · Trấn Hải. Gây sát thương diện rộng và kèm hiệu ứng giảm tốc cùng Trọng Thương.
• Kỹ năng gồm 4 thức, trong thời gian thi triển nhận: Bá Thể, Giảm sát thương, Kháng quái
• Trấn Hải: Ở trạng thái Trấn Hải, dựa theo phòng ngự bản thân để gia tăng thêm thù hận lên quái vật.
• Tiêu hao Lân Nộ: 100 điểm mỗi thức.`,
    detail: `• Sát thương thức 1: 93.280 ngoại công Thủy thương
• Sát thương thức 2: 105.718 ngoại công Thủy thương
• Sát thương thức 3: 118.155 ngoại công Thủy thương
• Sát thương thức 4: 130.592 ngoại công Thủy thương
• Hiệu ứng Trọng Thương: 35%, duy trì 4 giây
• Giảm tốc: 40%, duy trì 3 giây
• Giảm sát thương: 50%
• Kháng quái: 30%
• Hệ số thù hận cộng thêm: Tối thiểu 650%`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/thuong-lan/tth.png',
  },
];
