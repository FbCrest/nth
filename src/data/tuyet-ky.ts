import { GameItem } from '../types';

export const tuyetKyData: GameItem[] = [
  {
    name: 'Thương Loan Kinh Vũ',
    nameZh: '苍峦惊羽',
    category: 'Tuyệt kỹ',
    monPhai: 'Gacha',
    itemType: 'PVE - PVP',
    stats: ['Thừa Ảnh Cung', 'Vô Địch'],
    tags: ['Thừa Ảnh Cung', 'Vô Địch'],
    details: `Gây nhiều đợt sát thương lên mục tiêu đã khóa, đòn kết thúc gây lượng lớn sát thương lên mục tiêu và kẻ địch xung quanh.
• {Kinh Vũ}: Khi sử dụng lên quái vật có máu dưới {40%} hoặc người chơi đối địch có máu dưới {20%}, chuyển sang trạng thái Bắn Cường Hóa và nhận Vô địch trong thời gian hiệu lực.
• {Thừa Ảnh Phá Cảnh}: Sau khi hoàn thành Phá Cảnh, triệu hồi tàn ảnh phối hợp thực hiện nhiều đợt bắn.
• {Giao Tranh}: Khi xung quanh có từ {5 người chơi} đối địch trở lên, Bắn Cường Hóa sẽ được kích hoạt khi tấn công người chơi có máu dưới {30%}, đồng thời sát thương tăng thêm.
• {Võ học Thừa Ảnh}: Sau khi thi triển, kích hoạt Thừa Ảnh Truy Kích của vũ khí đang trang bị.`,
    detail: `• Tổng sát thương Bắn Thường: {24.670} sát thương nội công.
• Tổng sát thương Bắn Cường Hóa: {32.610} sát thương nội công.
• Tăng sát thương khi giao tranh {15%}.
• Khi nhiều người cùng đánh trúng một mục tiêu người chơi, sát thương giảm mạnh.
• Bắn Cường Hóa nhận {Vô địch} trong {2 giây}.
• Sát thương lên quái vật không phải công trình tăng: {245%}.`,
    upgrade: `• Cấp 1: Tùy theo chỉ số Thân Pháp, sát thương tăng khoảng từ {4%} đến {7%}.
• Cấp 2: Lần gây sát thương đầu tiên khiến mục tiêu mất lượng khiên bằng {15%} giới hạn máu tối đa.
• Cấp 3: Sau khi thi triển kỹ năng, nhận {60 Chí mạng} và {2% khắc Boss} trong {40 giây}.
• Cấp 4: Khi đánh trúng mục tiêu, tùy theo khoảng cách giữa bản thân và mục tiêu, tối đa làm giảm {30% tốc độ di chuyển} của mục tiêu trong {2 giây}.
• Cấp 5: Sát thương của đòn kết liễu tăng {15%}.`,
    imageUrl: '/images/tuyet-ky/thuong-loan-kinh-vu.png',
  },
  // ── VÔ PHONG MÔN ──
{
  name: 'Vạn Nhận Quy Phong',
  nameZh: '万刃归锋',
  category: 'Tuyệt kỹ',
  monPhai: 'Vô Phong Môn',
  itemType: 'PVP',
  stats: ['Thông Dụng', 'Thừa Ảnh Song Đao', 'Bá Thể', 'Tầm Xa'],
  tags: ['Thông Dụng', 'Thừa Ảnh Song Đao', 'Bá Thể', 'Tầm Xa'],
  details: `Nhảy vọt lên không trung, nhận hiệu ứng {Khắc Chế Thủ Lĩnh}. Trong thời gian này, đòn đánh thường có thể luân phiên thi triển {Băng Trảm} và {Hỏa Trảm}, tối đa {3 lần}. Nhấn lần hai kỹ năng để lao xuống vị trí mục tiêu và thi triển {Vạn Nhận Trảm}.
• Khi sử dụng lên mục tiêu quái, sẽ trực tiếp thi triển {Vạn Nhận Trảm}.
• {Vạn Nhận Trảm}: Gây nhiều đợt chém tốc độ cao lên vị trí mục tiêu.
• {Quy Phong}: Có thể sử dụng bất kỳ kỹ năng nào để hạ xuống sớm. Nếu chưa thi triển {Vạn Nhận Trảm}, kỹ năng sẽ tự động được kích hoạt tại vị trí mục tiêu sau một khoảng thời gian.
• {Thừa Ảnh Phá Cảnh}: Sau khi hoàn thành Thừa Ảnh Phá Cảnh, triệu hồi thêm {Thừa Ảnh Song Đao} truy kích mục tiêu. Sát thương của Thừa Ảnh không thể đỡ đòn.
• {Võ học Thừa Ảnh}: Sau khi thi triển tuyệt kỹ sẽ kích hoạt đòn {Truy Kích Thừa Ảnh} của vũ khí đang trang bị.`,
  detail: `• Sát thương Băng Trảm trên không: {2.932} nội công thương.
• Sát thương Hỏa Trảm trên không: {2.932} nội công thương.
• Sát thương Băng của {Vạn Nhận Trảm}: {932} nội công thương mỗi đòn, tổng {5} đòn.
• Sát thương Hỏa của {Vạn Nhận Trảm}: {932} nội công thương mỗi đòn, tổng {5} đòn.
• Tổng sát thương từ {Thừa Ảnh Song Đao}: {7.780} nội công thương.
• Trong trạng thái trên không, nhận {25%} giảm sát thương.
• Sát thương lên quái không phải công trình tăng {200%}.
• Hiệu quả {Khắc Chế Thủ Lĩnh}: tăng {6%}.
• Khi nhiều người cùng đánh trúng một mục tiêu người chơi, sát thương sẽ giảm mạnh.`,
  upgrade: `• Cấp 1: Dựa theo {Sức Mạnh} hoặc {Khí Hải}, tăng sát thương khoảng {4% - 7%}.
• Cấp 2: Tốc độ di chuyển khi ở trên không tăng {16,7%}.
• Cấp 3: Sau khi thi triển kỹ năng, tăng {30} điểm tấn công trong {40 giây}.
• Cấp 4: Thời gian duy trì trạng thái trên không tăng {0,5 giây}; số lần chém trên không tối đa tăng thêm {1}.
• Cấp 5: Sát thương của {Vạn Nhận Trảm} tăng {20%}.`,
  imageUrl: '/images/tuyet-ky/van-nhan-quy-phong.png',
},
  // ── GIANG HỒ ──
  {
    name: 'Dạ Du Hoa Đăng',
    nameZh: '华灯夜游',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVP',
    stats: ['Đơn Thể', 'Bá Thể', 'Giảm Sát Thương'],
    tags: ['Đơn Thể', 'Bá Thể', 'Giảm Sát Thương'],
    details: `Nhảy lên không trung, nhận trạng thái {bá thể} và {giảm sát thương}, sau đó ném đèn hoa đăng, gây sát thương phạm vi.
• {Hiệu ứng mùa}: Trong mùa Sa Hải Chi Ca, gây thêm {10% ~ 30%} sát thương, mục tiêu có HP càng thấp thì hiệu quả càng mạnh (không hiển thị trực tiếp trong chỉ số).
• Gây thêm sát thương lên quái.`,
    detail: `• Sát thương đoạn đầu: {4 đợt}, mỗi đợt gây {213.475} nội công Hỏa thương.
• Sát thương kết thúc: {533.686} nội công Hỏa thương.
• Sát thương lên mục tiêu ngoài giảm còn {25%}.
• Giảm sát thương nhận: {25%}.
• Sát thương lên quái tăng: {100%}.
• Khi nhiều người cùng đánh trúng một mục tiêu người chơi, sát thương sẽ giảm mạnh.`,
    upgrade: `• Cấp 1: Dựa theo {Thân pháp}, tăng sát thương khoảng {4% ~ 7%}.
• Cấp 2: Nếu không trúng mục tiêu, hoàn lại tối đa {50} điểm năng lượng tuyệt kỹ.
• Cấp 3: Sau khi thi triển, tăng {1350} điểm hội tâm trong {40 giây}.
• Cấp 4: Sát thương lên quái kiến trúc tăng {30%}.
• Cấp 5: Sát thương đèn hoa đăng kết thúc tăng {25%}.`,
    imageUrl: '/images/tuyet-ky/ddhd.png',
  },
  {
    name: 'Minh Nhận Điệp Phong',
    nameZh: '鸣刃迭锋',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Triệu Hồi', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    tags: ['Bạo Phát', 'Triệu Hồi', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    details: `Triệu hồi kiếm hạp và mở ra vùng tấn công. Kiếm trong hạp lần lượt bay ra tấn công, chém kẻ địch trong khu vực 3 lần. Sau khi toàn bộ phi kiếm kết thúc tấn công, có thể kích hoạt kiếm hạp mang 6 kiếm đồng loạt xuất kích, gây đòn kết liễu tại vị trí mục tiêu. Trong thời gian thi triển, nhận {miễn khống chế} và {giảm sát thương}.
• {Tru Tà}: Tăng {90%} sát thương lên quái không phải kiến trúc, đồng thời tăng tốc độ ra đòn kết liễu.
• {Quy Hạp}: Thu thập danh kiếm để nhận Khắc chế thủ lĩnh và hiệu ứng cộng hưởng danh kiếm bổ sung.
• {Vô Phong}: Trong mùa Quan Sơn Tàng Phong, kỹ năng gây thêm {20%} sát thương (không hiển thị trực tiếp trong phần mô tả chỉ số).`,
    detail: `• Sát thương phi kiếm đợt 1: {148.511} nội công Phong Thương.
• Sát thương phi kiếm đợt 2: {150.987} nội công Phong Thương.
• Sát thương phi kiếm đợt 3: {154.699} nội công Phong Thương.
• Sát thương kết liễu: {853.938} nội công Phong Thương.
• Tăng sát thương lên quái không phải kiến trúc: {90%}
• Giảm sát thương trong quá trình thi triển: {25%}
• Thời gian tồn tại của kiếm trận: {8 giây}
• Nếu đòn đánh đợt 2 không trúng, hoàn trả: {45} điểm Tuyệt Kỹ
• Khi nhiều người cùng đánh trúng mục tiêu là người chơi, sát thương sẽ bị giảm mạnh`,
    upgrade: `• Cấp 1: Tăng sát thương dựa theo {Thân Pháp} khoảng {4%–7%}
• Cấp 2: 3 đợt phi kiếm đầu tăng {10%} sát thương
• Cấp 3: Sau khi triệu hồi kiếm hạp, bản thân được tăng {600} Hội tâm và {400} Mệnh trung, duy trì {45 giây}
• Cấp 4: Khi đứng trong kiếm vực, nhận {10%} kháng sát thương tầm xa và {20%} kháng quái vật
• Cấp 5: Đòn kết liễu tăng {15%} sát thương.`,
    imageUrl: '/images/tuyet-ky/mndp.png',
  },
  {
    name: 'Tẫn Hải Phần Liên',
    nameZh: '烬海焚莲',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVE - PVP',
    stats: ['Bá Thể', 'Khống Chế', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    tags: ['Nhóm', 'Dịch Chuyển', 'Khống Chế Cứng', 'Bá Thể', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    details: `Nhận hiệu ứng {bá thể} trong thời gian ngắn, ném Xích Khuyết về vị trí mục tiêu, liên tục gây sát thương. Sau đó, một đóa Hồng Liên Hỏa sẽ nở rộ, gây ra sát thương kết liễu. Kích hoạt kỹ năng lần thứ hai, bản thân sẽ lao nhanh tới vị trí mục tiêu, hất tung kẻ địch, sau đó Hồng Liên Hỏa tiếp tục nở rộ, gây thêm sát thương kết liễu. Trong suốt quá trình, người thi triển nhận được {miễn khống chế} và {giảm sát thương}.
• {Trụy Liên}: Tăng sát thương gây lên quái vật.
• {Quyển Lãng}: Trong mùa giải Thương Lam Phá Lãng, Tẫn Hải Phần Liên tăng {20%} sát thương gây ra (hiệu quả này không hiển thị trực tiếp trong mô tả chỉ số).`,
    detail: `• Sát thương trên đường đi của Xích Khuyết: {36.103} nội công Hỏa thương.
• Sát thương 5 đợt ở điểm cuối Xích Khuyết: {213.333} nội công Hỏa thương.
• Sát thương lao tới đâm lên: {82.052} nội công Hỏa thương.
• Sát thương nổ Hỏa Liên: {180.513} nội công Hỏa thương.
• Thời gian duy trì Xích Khuyết: {2.5 giây}.
• Thời gian có thể kích hoạt lần 2: {2 giây}.
• Giảm sát thương trong quá trình lần 2: {40%}
• Sát thương gây lên quái vật tăng: {140%}
• Khi nhiều người đánh trúng cùng một mục tiêu người chơi, sát thương sẽ giảm mạnh.`,
    upgrade: `• Cấp 1: Dựa trên {Sức mạnh} hoặc {Khí Hải} để tăng sát thương khoảng {4%} - {7%}
• Cấp 2: Khi kết thúc Hỏa Liên, dựa trên số lượng người chơi địch bị trúng chiêu sẽ nhận được lá chắn bằng tối đa {40%} máu tối đa. Trong chế độ Công Bằng Luận Võ, lá chắn nhận được sau khi đánh trúng người chơi địch cố định là {20%} máu tối đa của bản thân.
• Cấp 3: Sau khi Xích Khuyết đánh trúng kẻ địch, người thi triển được tăng {800} điểm Hội Tâm, duy trì {40 giây}.
• Cấp 4: Sát thương của Xích Khuyết tăng {8%}. Xích Khuyết gây sát thương sẽ đồng thời gắn {1 tầng} giảm tốc {10%}, tối đa cộng dồn {5 tầng}.
• Cấp 5: Sát thương của Hỏa Liên tăng {8%}. Chủ động sử dụng lần thứ 2 để nở hoa Hỏa Liên sẽ gây thêm {30%} sát thương lên kẻ địch thủ lĩnh đang ở trạng thái suy yếu.`,
    imageUrl: '/images/tuyet-ky/thpl.png',
  },
  {
    name: 'Bách Bộ Phi Kiếm',
    nameZh: '百步飞剑',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Tầm Xa', 'Định Thân'],
    tags: ['Đơn Thể', 'Tầm Xa', 'Định Thân'],
    details: `Nhận hiệu ứng {miễn khống chế}, ném Bách Bộ Phi Kiếm về vị trí mục tiêu, tạo trận kiếm liên tục tấn công. Sau đó kiếm khí tụ lại thành Bạch Long giáng xuống đất, gây sát thương kết liễu.
• {Tung Kiếm}: Trận kiếm gây {định thân} lên mục tiêu chính (mỗi mục tiêu chỉ có hiệu lực {1 lần} trong {15 giây}). Khi trúng đòn hoặc khi bản thân thi triển kỹ năng sẽ tích lũy {Kiếm Thế}, và tăng sát thương kết liễu dựa theo số tầng {Kiếm Thế}.
• {Hoành Quán}: Lượng điểm tuyệt kỹ cần để thi triển giảm mạnh. Mỗi lần đánh trúng sẽ tiêu hao điểm tuyệt kỹ, khi tiêu diệt mục tiêu sẽ hồi lại điểm tuyệt kỹ cho bản thân.
• {Duy Ngã}: Khi mang kỹ năng này và đang ở trạng thái thu chiêu, sẽ miễn nhiễm các hiệu ứng khống chế tinh thần.
• {Long Khiếu}: Trong mùa giải Nghịch Thủy Trục Triều, gây thêm {15%} sát thương.`,
    detail: `• Sát thương kiếm trận: {72.910} nội công Lôi thương, tổng {6 lần}.
• Sát thương kết liễu: {398.573} nội công Lôi thương.
• Mỗi tầng Kiếm Thế tăng {10%} sát thương kết liễu.
• Giới hạn tầng Kiếm Thế: {6 tầng}.
• Sát thương lên quái vật tăng {60%}
• Sát thương lên kẻ địch ngoài mục tiêu chính giảm còn {30%}
• Khi hạ gục mục tiêu hồi {25} điểm tuyệt kỹ.
• Khi nhiều người cùng đánh trúng mục tiêu là người chơi, sát thương sẽ giảm mạnh.`,
    upgrade: `• Cấp 1: Tăng sát thương khoảng {4%} – {7%} dựa theo Sức Mạnh/Khí Hải.
• Cấp 2: Sát thương kèm {15%} xuyên khiên; trong Luận Võ Công Bằng hiệu quả nhân đôi.
• Cấp 3: Sau khi thi triển, toàn bộ kỹ năng tăng {800} điểm sát thương.
• Cấp 4: Khi hạ gục, hồi tuyệt kỹ tăng lên {40} điểm.
• Cấp 5: Giới hạn Kiếm Thế tăng lên {10 tầng}, tốc độ tích lũy được tăng nhanh hơn.`,
    imageUrl: '/images/tuyet-ky/bbpk.png',
  },
  {
    name: 'Đại Náo Thiên Cung',
    nameZh: '大闹天宫',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVE - PVP',
    stats: ['Cường Hóa', 'Bạo Phát', 'Bá Thể', 'Đánh Ngã', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    tags: ['Cường Hóa', 'Bạo Phát', 'Bá Thể', 'Đánh Ngã', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    details: `Triệu hồi Như Ý Kim Cô Bổng để thay thế hình thái tấn công thường. Khi thi triển Yến Hồi Phong, có thể cưỡi Cân Đẩu Vân để lao nhanh về phía trước. Kích hoạt lần nữa sẽ kéo dài Kim Cô Bổng, bay lên không trung và liên tục gọi phân thân tấn công kẻ địch xung quanh. Sau đó có thể chớp thời cơ nhảy xuống tung ra Thiên Quân Nhất Bổng. (Khi bay lên đến độ cao tối đa sẽ tăng mạnh sát thương của Thiên Quân Nhất Bổng, sát thương có giới hạn và tăng theo cấp độ kỹ năng).
• {Thần Binh}: Sát thương {không thể bị đỡ đòn}, trong thời gian đánh thường nhận {miễn khống chế}, khi ở trên không nhận {bá thể}.
• {Trấn Ma}: Ba lần đánh thường đầu tiên, tấn công của phân thân và Thiên Quân Nhất Bổng gây sát thương lên quái vật tăng mạnh.
• {Tề Thiên}: Trong mùa giải Huyền Cơ Vạn Biến, khi tấn công kẻ địch có toàn bộ điểm yếu, gây thêm {15%} sát thương.`,
    detail: `• Thời gian duy trì Như Ý Kim Cô Bổng: {15 giây}.
• Sát thương đoạn 1: {168.404} nội công Kim thương.
• Sát thương đoạn 2: {251.348} nội công Kim thương.
• Sát thương đoạn 3: {377.022} nội công Kim thương.
• Số lần tấn công tối đa của phân thân: {15 lần} (đơn mục tiêu: {5 lần})
• Sát thương mỗi lần phân thân tấn công: {165.890 sát} nội công Kim thương.
• Sát thương cơ bản Thiên Quân Nhất Bổng: {377.022} nội công Kim thương.
• Sát thương Thiên Quân Nhất Bổng sau khi đánh bay lên không: {754.044} nội công Kim thương.
• Tăng sát thương lên quái vật: {100%}
• Đòn đánh thường tiếp theo – tăng sát thương lên quái vật: {66%}
• Giảm sát thương nhận vào trong thời gian tấn công: {25%}
• Khi nhiều người cùng đánh trúng một mục tiêu là người chơi, sát thương sẽ giảm mạnh.`,
    upgrade: `• Cấp 1: Sát thương tăng khoảng {4%} - {7%} dựa theo Thân Pháp.
• Cấp 2: Sát thương gây lên kẻ địch đang né tránh / phản kích / đỡ đòn tăng {50%}, đòn Thiên Quân Nhất Bổng được đính kèm hiệu ứng đánh ngã.
• Cấp 3: Khi đòn đánh thường trúng kẻ địch, nhận thêm {5%} giảm sát thương.
• Cấp 4: Trong thời gian bay lên không, có thể chặn các vật thể bay.
• Cấp 5: Mỗi lần triệu hồi một phân thân, sát thương Thiên Quân Nhất Bổng tăng {4%}, cộng dồn tối đa {5 lần}.`,
    imageUrl: '/images/tuyet-ky/dntc.png',
  },
  {
    name: 'Băng Hỏa Tuyệt Diệt',
    nameZh: '冰火绝灭',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVP',
    stats: ['Bá Thể', 'Giảm Sát Thương', 'Trọng Thương'],
    tags: ['Đơn Thể', 'Tầm Xa', 'Khống Chế', 'Bá Thể', 'Giảm Sát Thương', 'Hiệu Quả Trọng Thương'],
    details: `Nhận {bá thể} và {giảm sát thương}, tích tụ nội lực băng hỏa truy đuổi mục tiêu. Gây ra vụ nổ dung hợp, gây sát thương kèm hiệu quả {trọng thương}. Điểm Tuyệt Kỹ để thi triển giảm {33%}. Không thể gây {sát thương}, {trọng thương} hoặc {hất tung} lên mục tiêu không thể chọn.
• {Băng Hỏa Hội Thông}: Trong một thời gian ngắn, thi triển kỹ năng lần hai sẽ tăng mạnh sát thương và thời gian trọng thương, kèm hiệu ứng {hất tung} (chỉ có hiệu lực một lần với cùng mục tiêu trong {20 giây}).
• {Băng Phách Hàn Quang}: Trong mùa giải {Phù Sinh Vạn Tượng}, hiệu quả Băng Hỏa Hội Thông tăng {20%}; khi tấn công kẻ địch yếu với hệ Băng hoặc bản thân có hiệu ứng tăng cường nguyên tố yếu điểm, gây thêm {15%} sát thương.`,
    detail: `• Sát thương Hỏa từ Vụ Nổ Dung Hợp: {36.432} nội công Hỏa thương.
• Sát thương Băng từ Vụ Nổ Dung Hợp: {36.432} nội công Băng thương.
• Tổng sát thương Bão Tố: {139.887} nội công Hỏa thương.
• Khi nhiều người chơi đánh trúng cùng một mục tiêu, sát thương sẽ giảm mạnh.
• Giảm sát thương khi tụ lực: {25%}
• Hiệu quả trọng thương: {63%} / {3.75 giây}
• Hiệu quả Băng Hỏa Hội Thông tăng lên: {200%}
• Băng Hỏa Hội Thông bỏ qua giảm sát thương: {20%}
• Sát thương lên quái vật tăng lên: {112%}
• Sát thương lên kẻ địch ngoài mục tiêu chính giảm còn {30%}`,
    upgrade: `• Cấp 1: Tăng sát thương dựa theo {Sức Mạnh} hoặc {Khí Hải} khoảng {4% - 7%}
• Cấp 2: Hiệu quả {Băng Hỏa Hội Thông} tăng {7.5%}; khi đánh trúng mục tiêu đang ở trên không và sử dụng kỹ năng trị liệu ngoài hệ phái sẽ xem như kích hoạt {Băng Hỏa Hội Thông} và hồi thêm {24} điểm Tuyệt Kỹ.
• Cấp 3: Hiệu quả {giảm sát thương} tăng {10%}.
• Cấp 4: Sau khi thi triển tăng {0.5%} sát thương toàn bộ kỹ năng trong {10 giây}.
• Cấp 5: Khi Vụ Nổ Dung Hợp đánh trúng kẻ địch, hồi lại {6} điểm Tuyệt Kỹ.`,
    imageUrl: '/images/tuyet-ky/bhtd.png',
  },
  // ── PHƯỢNG THÀNH ──
  {
    name: 'Châm Dẫn Phong Loan',
    nameZh: '针引风鸾',
    category: 'Tuyệt kỹ',
    monPhai: 'Phượng Thành',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    tags: ['Duy Trì', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    details: `Nhận {miễn khống chế} và {giảm sát thương}, vung quạt tạo lốc xoáy truy đuổi mục tiêu, gây sát thương. Khi lốc xoáy trúng mục tiêu sẽ áp dấu ấn {Hoàng Âm}, tăng sát thương kết liễu. Đối với thủ lĩnh và tháp liên minh, kỹ năng được thi triển nhanh hơn.
• {Di Thế Độc Lập}: Khi mang theo kỹ năng này và đang ở trạng thái thu chiêu, miễn nhiễm khống chế tinh thần.
• {Loan Ý}: Trong mùa giải Thương Lan Phá Lãng, kỹ năng gây thêm {10%} sát thương (không hiển thị trực tiếp trong mô tả chỉ số).`,
    detail: `• Sát thương đoạn đầu: {1.384.267} Nội công Phong thương.
• Sát thương kết liễu: {496.917} Nội công Phong thương.
• Sát thương gây lên mục tiêu ngoài mục tiêu chính giảm xuống còn {30%}.
• Trong thời gian thi triển kỹ năng, nhận {25%} giảm sát thương.
• Mỗi tầng {Hoàng Âm} tăng {5%} sát thương kết liễu, tối đa {5 tầng}.
• Sát thương gây lên quái vật tăng {50%}.
• Khi nhiều người cùng đánh trúng một mục tiêu người chơi, sát thương bị giảm mạnh.`,
    upgrade: `• Sát thương tăng khoảng {4%} – {7%} dựa theo Sức Mạnh / Khí Hải.
• Cấp 2: Nếu không gây được sát thương, hoàn trả điểm tuyệt kỹ tối đa {50} điểm.
• Cấp 3: Sau khi thi triển kỹ năng, tăng {1000} Hội tâm trong {30 giây}.
• Cấp 4: Trong thời gian thi triển kỹ năng, tốc độ di chuyển bản thân tăng {20%}.
• Cấp 5: Mỗi tầng {Hoàng Âm} tăng thêm {5%} sát thương kết liễu.`,
    imageUrl: '/images/tuyet-ky/cdpl.png',
  },
  // ── TIÊU DAO ──
  {
    name: 'Kiếm Phá Càn Khôn',
    nameZh: '剑破乾坤',
    category: 'Tuyệt kỹ',
    monPhai: 'Tiêu Dao',
    itemType: 'PVE - PVP',
    stats: ['Thông Dụng', 'Thừa Ảnh Kiếm', 'Bá Thể'],
    tags: ['Thông Dụng', 'Thừa Ảnh Kiếm', 'Bá Thể'],
    details: `Nhận hiệu ứng {bá thể} trong thời gian ngắn, khóa mục tiêu đơn và áp dấu ấn {Vạn Quân}. Các tiểu kiếm hội tụ thành đại kiếm giáng xuống, gây một phần sát thương {bỏ qua giảm sát thương}.
• {Vạn Quân}: Trong thời gian tồn tại, mục tiêu sẽ ghi lại {50%} lượng sát thương đã nhận. Khi đại kiếm giáng xuống, dấu ấn sẽ phát nổ, gây lượng sát thương đã tích lũy lên mục tiêu. Sát thương này có giới hạn, không thể đỡ đòn và không thể bạo kích.
• {Thừa Ảnh Phá Cảnh}: Sau khi hoàn thành Thừa Ảnh Phá Cảnh, khi đại kiếm giáng xuống sẽ triệu hồi hàng loạt {Thừa Ảnh Kiếm} tiếp tục gây sát thương.
• {Võ học Thừa Ảnh}: Sau khi thi triển tuyệt kỹ sẽ kích hoạt đòn {Truy Kích Thừa Ảnh} của vũ khí đang trang bị.`,
    detail: `• Sát thương duy trì khi tiểu kiếm hội tụ: {9.860} nội công thương.
• Sát thương bùng nổ khi đại kiếm giáng xuống: {13.077} nội công thương.
• Tổng sát thương từ {Thừa Ảnh Kiếm}: {7.275} nội công thương.
• Khi nhiều người cùng đánh trúng một mục tiêu người chơi, sát thương sẽ giảm mạnh.
• Giới hạn sát thương của {Vạn Quân}: khoảng {900%} hệ số sát thương.
• Sát thương lên quái không phải công trình và sát thương {Vạn Quân}: tăng {100%}.
• Bỏ qua giảm sát thương: {15%}.
• Nhận {15%} giảm sát thương trong {1 giây}.
• Sát thương gây lên các mục tiêu khác ngoài mục tiêu đã khóa giảm còn {30%}.`,
    upgrade: `• Cấp 1: Dựa theo {Sức Mạnh} hoặc {Khí Hải}, tăng sát thương đại kiếm khoảng {8% - 14%}.
• Cấp 2: Đại kiếm gây thêm {12%} sát thương.
• Cấp 3: Hiệu quả giảm sát thương tăng thêm {10%}.
• Cấp 4: Sát thương của {Thừa Ảnh Kiếm} giáng xuống tăng thêm {75%}.
• Cấp 5: Sát thương {Vạn Quân} tăng theo lượng máu còn lại của mục tiêu – bắt đầu tăng khi máu dưới {75%}, và đạt tối đa khi máu dưới {30%} (tăng tối đa thêm {30%} sát thương).`,
    imageUrl: '/images/tuyet-ky/kiem-pha-can-khon.png',
  },
{
  name: 'Vạn Kiếm Quyết - Lạc Anh',
  nameZh: '万剑诀 落英',
  category: 'Tuyệt kỹ',
  monPhai: 'Tương Tư Môn',
  itemType: 'PVP',
  stats: ['Đấu Trường', 'Thừa Ảnh Kiếm', 'Trên Không'],
  tags: ['Đấu Trường', 'Thừa Ảnh Kiếm', 'Trên Không'],
  details: `Nhận hiệu ứng {đỡ đòn} và tiến vào trạng thái {lơ lửng trên không}, liên tục tiêu hao điểm khinh công. Trong thời gian này, gây sát thương sẽ hồi phục điểm khinh công.
• {Vạn Kiếm Phi Hoa}: Đòn đánh thường được thay thế bằng tối đa {3 thức phi kiếm}. Khi thi triển thức cuối sẽ nhận {bá thể} và kết thúc trạng thái lơ lửng. Có thể nhấn lần hai kỹ năng để kích hoạt sớm thức cuối.
• {Thừa Ảnh Phá Cảnh}: Sau khi hoàn thành Thừa Ảnh Phá Cảnh, mỗi thức sẽ triệu hồi hàng loạt {Thừa Ảnh Kiếm} tấn công.
• {Võ học Thừa Ảnh}: Sau khi kết thúc trạng thái lơ lửng sẽ kích hoạt đòn {Truy Kích Thừa Ảnh} của vũ khí đang trang bị.
• {Quần chiến}: Khi xung quanh có từ {5} người chơi phe địch trở lên, sát thương gây lên người chơi tăng lên, đồng thời có thể thi triển thêm một lượt {phi kiếm} nữa.`,
  detail: `• Sát thương khi kích hoạt Vạn Kiếm Quyết: {6.098} nội công thương.
• Sát thương Phi Kiếm thức 1: {2.183} nội công thương.
• Sát thương Phi Kiếm thức 2: {2.183} nội công thương.
• Sát thương Phi Kiếm thức 3: {8.614} nội công thương.
• Sát thương mỗi đòn của {Thừa Ảnh Kiếm}: {1.091} nội công thương.
• Trong quần chiến, sát thương gây lên người chơi tăng lên {256%}.
• Khi nhiều người cùng đánh trúng một mục tiêu người chơi, sát thương sẽ giảm mạnh.
• Tiêu hao khinh công khi lơ lửng: {40} điểm mỗi giây.`,
  upgrade: `• Cấp 1: Dựa theo {Thân Pháp}, tăng sát thương khoảng {4% - 7%}.
• Cấp 2: Khi kích hoạt kỹ năng, khiến mục tiêu nhận thêm {5%} sát thương trong {5 giây}. Mỗi lần phi kiếm đánh trúng mục tiêu đang chịu hiệu ứng sẽ làm mới thời gian duy trì lên {5 giây}.
• Cấp 3: Trong thời gian lơ lửng, tốc độ di chuyển tăng {25%}.
• Cấp 4: Sát thương của {Phi Kiếm} thức thứ ba tăng {10%}.
• Cấp 5: Tiêu hao khinh công khi lơ lửng giảm {5} điểm mỗi giây.`,
  imageUrl: '/images/tuyet-ky/van-kiem-quyet-lac-anh.png',
},
  // ── GIANG HỒ - HỖ TRỢ ──
{
  name: 'Tinh Hỏa Mạn Thiên',
  nameZh: '星火漫天',
  category: 'Tuyệt kỹ',
  monPhai: 'Giang Hồ',
  itemType: 'Hỗ Trợ',
  stats: ['Thông Dụng', 'Hỗ Trợ', 'Bá Thể'],
  tags: ['Thông Dụng', 'Hỗ Trợ', 'Bá Thể'],
  details: `Sau khi thi triển, tạo một {Kết Giới Tinh Hỏa} tồn tại trong một khoảng thời gian. Trong thời gian kết giới tồn tại, bản thân và các thành viên trong tổ đội được tăng {Tỷ Lệ Bạo Kích} và {Sát Thương Bạo Kích}.
• {Ly Thương}: Trong thời gian kết giới tồn tại, đòn đánh thường và tuyệt kỹ của bản thân cùng đồng đội gây thêm sát thương.
• {Điệp Bộ}: Trong thời gian kết giới tồn tại, liên tục triệu hồi {Ly Hỏa Điệp} trong phạm vi kết giới. Bản thân có thể thi triển {Điệp Bộ - Yến Hồi Phong} theo hướng của Ly Hỏa Điệp để lướt đến vị trí của nó.
• {Thiều Hoa}: Khi bản thân chạm vào {Ly Hỏa Điệp}, toàn đội nhận hiệu ứng tăng tốc độ hồi {điểm Tuyệt Kỹ} trong một khoảng thời gian. Trong mỗi lần sử dụng kỹ năng, hiệu ứng của Ly Hỏa Điệp chỉ kích hoạt {1 lần}. Nếu tốc độ hồi điểm Tuyệt Kỹ cộng thêm của bản thân hoặc đồng đội đã vượt quá {10%}, hiệu ứng {Thiều Hoa} sẽ không cộng thêm tốc độ hồi điểm Tuyệt Kỹ.
• Kỹ năng này dùng chung thời gian hồi với {Trường Ca Hiến Quân}, {Hoa Oanh Lăng Ba} và {Tịnh Thế Liên Hoa}.
• {Mãn Thiên}: Trong kỷ nguyên {Thiên Cơ}, hiệu quả tăng {Tỷ Lệ Bạo Kích}, {Sát Thương Bạo Kích} cùng sát thương cộng thêm từ đòn đánh thường và tuyệt kỹ của {Kết Giới Tinh Hỏa} tăng thêm {15%}.`,
  detail: `• Tăng {20} điểm Tỷ Lệ Bạo Kích.
• Tăng {15%} Sát Thương Bạo Kích.
• Thời gian duy trì kết giới: {12 giây}.
• Tốc độ hồi điểm Tuyệt Kỹ tăng {5%}.
• Thời gian hồi hiệu ứng {Khích Lệ}: {60 giây}.
• Thời gian hồi dùng chung của tổ đội: {60 giây}.
• Sát thương cộng thêm từ đòn đánh thường: {1.284} nội công thương.
• Thời gian hồi sát thương cộng thêm của đòn đánh thường: {3 giây}.
• Sát thương cộng thêm từ tuyệt kỹ: {1.926} nội công thương.
• Sát thương cộng thêm lên quái vật tăng {100%}.`,
  upgrade: `• Cấp 1: Hiệu quả của {Kết Giới Tinh Hỏa} tăng thêm {5} điểm {Tỷ Lệ Bạo Kích} và {2%} {Sát Thương Bạo Kích}.
• Cấp 2: Khi bản thân thi triển {Điệp Bộ}, nhận {30%} giảm sát thương và {bá thể}.
• Cấp 3: {Ly Hỏa Điệp} giúp đồng đội tăng thêm {10%} sát thương; toàn bộ hiệu ứng tăng cường không còn giới hạn phạm vi tác dụng.
• Cấp 4: Khi kết giới kết thúc, nếu vẫn còn {Ly Hỏa Điệp} chưa được chạm vào, bản thân nhận hiệu ứng {Ly Hỏa Điệp} trong {10 giây}. Hiệu ứng này chỉ có tác dụng với bản thân và cung cấp {20%} giảm sát thương.
• Cấp 5: Mỗi loại tuyệt kỹ khác nhau mà thành viên trong đội mang theo sẽ giúp sát thương cộng thêm của {Ly Thương} tăng thêm {10%}.`,
  imageUrl: '/images/tuyet-ky/tinh-hoa-man-thien.png',
},
  {
    name: 'Tịnh Thế Liên Hoa',
    nameZh: '净世莲华',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'Hỗ Trợ',
    stats: ['Nhóm', 'Hỗ Trợ', 'Bá Thể'],
    tags: ['Nhóm', 'Hỗ Trợ', 'Bá Thể'],
    details: `Triệu hồi một đóa Liên Hoa trước mặt và bay lơ lửng lên trên, tăng Tốc độ tấn công, Phá phòng, Bỏ qua kháng nguyên tố và Hội tâm cho bản thân và các thành viên trong đội trong phạm vi. Số lượng thành viên trong đội càng nhiều, hiệu quả tăng càng mạnh. Sau đó nhẹ nhàng bước về phía trước, liên tục hồi Khí huyết cho đồng minh xung quanh. Người chơi đã nhận được hiệu quả cường hóa sẽ không thể tiếp tục nhận hiệu quả này trong một thời gian dài.
• {Phiên Nhiên}: Nếu thi triển đoạn kỹ năng thứ hai theo nhịp độ đặc biệt, hiệu quả hồi Khí huyết sẽ được tăng cường, tổng cộng có thể kích hoạt 3 lần.
• {Phương Hoa}: Trong phụ bản tổ đội [Lục Đạo Minh Đồ], đồng đội chịu ảnh hưởng từ Tịnh Thế Liên Hoa sẽ gây thêm 10% sát thương lên mục tiêu thủ lĩnh bị phá vỡ.`,
    detail: `• Tăng Tốc độ Tấn công: {10% + 4%} mỗi thành viên trong đội
• Tăng Phá phòng: {1020} điểm.
• Bỏ qua Phòng thủ mục tiêu: {19% + 1%} mỗi thành viên trong đội.
• Tăng Bỏ qua Kháng Nguyên Tố: {306} điểm.
• Bỏ qua Kháng Nguyên Tố của mục tiêu: {19% + 1%} mỗi thành viên trong đội.
• Tăng Hội tâm: {1% + 408} điểm.
• Mỗi thành viên đội thêm: {1%} Hội tâm.
• Thời gian duy trì: {15 giây}.
• Thời gian hồi của hiệu ứng Cổ vũ: {60 giây}.
• Thời gian hồi chiêu dùng chung trong đội: {60 giây}.
• Lượng Khí huyết hồi mỗi lần: {22.630} điểm.`,
    upgrade: `• Cấp 1: Lượng hồi Khí huyết tăng theo Khí Hải từ {4% - 7%}
• Cấp 2: Giá trị cố định của các hiệu ứng: Phá phòng, Hội tâm, Bỏ qua kháng nguyên tố được tăng thêm {10%}.
• Cấp 3: Thời gian duy trì hiệu quả kỹ năng tăng thêm {3 giây}.
• Cấp 4: Thời gian hồi hiệu ứng Cổ Vũ giảm {10 giây}.
• Cấp 5: Đồng đội nhận được hiệu ứng Cổ vũ sẽ nhận thêm hiệu quả: Tăng {10%} Thủ Lĩnh Phòng Ngự trong {5 giây}. Bản thân nhận hiệu quả gấp đôi, và phạm vi tác dụng của hiệu ứng được mở rộng thành toàn bản đồ (không giới hạn phạm vi).`,
    imageUrl: '/images/tuyet-ky/ttlh.png',
  },
  {
    name: 'Trường Ca Hiến Quân',
    nameZh: '长歌献君',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'Hỗ Trợ',
    stats: ['Nhóm', 'Hỗ Trợ', 'Bá Thể'],
    tags: ['Nhóm', 'Hỗ Trợ', 'Bá Thể'],
    details: `Sau khi thi triển, bản thân và các thành viên trong tổ đội sẽ trong một khoảng thời gian ngắn nhận hiệu quả tăng tốc độ di chuyển, tốc độ đánh, sát thương nguyên tố và tấn công. Số người trong đội càng nhiều, hiệu quả tăng càng lớn. Sau đó, trong một khoảng thời gian dài sẽ không thể tiếp tục nhận hiệu quả cùng loại.
• {Hiến Khúc}: Hiệu quả trên bản thân sẽ được tăng cường.`,
    detail: `• Tốc độ đánh bản thân tăng {20% + 5%} mỗi đồng đội
• Tốc độ di chuyển bản thân tăng {45%}
• Tốc độ đánh đồng đội tăng {10% + 4%} mỗi đồng đội
• Tốc độ di chuyển tăng {30%}
• Công kích nguyên tố tăng {5%}
• Mỗi đồng đội tăng thêm công kích nguyên tố {1%}
• Tấn công tăng {5%}
• Mỗi đồng đội tăng thêm tấn công {1%}
• Thời gian duy trì hiệu quả {12 giây}
• Thời gian hồi của hiệu ứng Cổ Vũ {60 giây}
• Thời gian hồi chung của tổ đội {60 giây}`,
    upgrade: `• Cấp 1: Dựa theo Sức Mạnh, Khí Hải tăng Công Kích Nguyên Tố và Tấn Công từ {1% - 3%}
• Cấp 2: Hiệu ứng Cổ Vũ ngay lập tức xóa toàn bộ hiệu ứng xấu và giải trừ khống chế, đồng thời nhận Bá Thể trong {0.6 giây}.
• Cấp 3: Thời gian duy trì hiệu quả tăng thêm {1 giây}.
• Cấp 4: Thời gian hồi hiệu ứng Cổ Vũ giảm {10 giây}.
• Cấp 5: Nhận thêm Tốc độ Di chuyển {30%} / {3 giây}. Phạm vi hiệu lực mở rộng thành vô hạn.`,
    imageUrl: '/images/tuyet-ky/tchq.png',
  },
{
  name: 'Hoa Oanh Lăng Ba',
  nameZh: '花萦凌波',
  category: 'Tuyệt kỹ',
  monPhai: 'Giang Hồ',
  itemType: 'Hỗ Trợ',
  stats: ['Thông Dụng', 'Thừa Ảnh Cung', 'Hỗ Trợ', 'Bá Thể'],
  tags: ['Thông Dụng', 'Thừa Ảnh Cung', 'Hỗ Trợ', 'Bá Thể'],
  details: `Triệu hồi một {Biển Hoa}, tăng {Tấn Công} và {Phá Phòng} cho bản thân cùng các thành viên trong tổ đội ở trong phạm vi.
• {Phục Tô}: Khi mang theo kỹ năng này và hiệu ứng của kỹ năng chưa được kích hoạt, cứ sau mỗi {3} lần trị liệu sẽ tạo một {Hoa Điền} tại vị trí của bản thân, tăng tốc độ di chuyển cho đồng đội xung quanh. Chỉ có thể tồn tại tối đa {1} Hoa Điền và không thể tồn tại đồng thời với {Biển Hoa}.
• {Thừa Ảnh Phá Cảnh}: Sau khi hoàn thành Thừa Ảnh Phá Cảnh, lần thi triển {Yến Hồi Phong} tiếp theo của bản thân sẽ được cường hóa trong một khoảng thời gian.
• {Hồi chiêu dùng chung}: Kỹ năng này dùng chung thời gian hồi với {Trường Ca Hiến Quân}, {Tinh Hỏa Mãn Thiên}/{Điệp Vũ Thanh Mộng} và {Tịnh Thế Liên Hoa}.
• {Võ học Thừa Ảnh}: Sau khi thi triển tuyệt kỹ sẽ kích hoạt đòn {Truy Kích Thừa Ảnh} của vũ khí đang trang bị.`,
  detail: `• Tăng {226} điểm Tấn Công.
• Tăng {226} điểm Phá Phòng.
• Thời gian duy trì {Biển Hoa}: {20 giây}.
• Tốc độ di chuyển trong {Hoa Điền}: tăng {15%}.
• Thời gian duy trì hiệu ứng của {Hoa Điền}: {2,5 giây}.
• Thời gian tồn tại của {Hoa Điền}: {5 giây}.
• Thời gian hồi hiệu ứng {Khích Lệ}: {60 giây}.
• Thời gian hồi dùng chung của tổ đội: {60 giây}.`,
  upgrade: `• Cấp 1: Hiệu quả tăng {Tấn Công} và {Phá Phòng} từ {Biển Hoa} tăng thêm {10%}.
• Cấp 2: {Biển Hoa} tăng thêm {3%} {Kháng Chế Lưu Phái}.
• Cấp 3: Phạm vi hiệu lực của {Biển Hoa} mở rộng thành {không giới hạn}.
• Cấp 4: Thời gian hồi của hiệu ứng {Khích Lệ} giảm {10 giây}.
• Cấp 5: {Biển Hoa} tăng thêm {3%} {Khắc Chế Lưu Phái}.`,
  imageUrl: '/images/tuyet-ky/hoa-oanh-lang-ba.png',
},
  // ── GIANG HỒ - PVP ──
  {
    name: 'Cửu Thiên Lôi Dẫn',
    nameZh: '九天雷引',
    category: 'Tuyệt kỹ',
    monPhai: 'Giang Hồ',
    itemType: 'PVP',
    stats: ['Duy Trì', 'Bá Thể', 'Khống Chế', 'Tốc Độ Di Chuyển'],
    tags: ['Duy Trì', 'Bá Thể', 'Khống Chế Mạnh', 'Tốc Độ Di Chuyển'],
    details: `Kích hoạt Dẫn Lôi Trận, gây sát thương liên tục, đồng thời nhận được {tăng tốc độ di chuyển}, {bá thể} và {1 tầng} {Ấn Chế Điện}. Khi kết thúc, gây thêm một đợt sát thương. Thi triển các kỹ năng tấn công khi di chuyển hoặc tụ lực sẽ nhận thêm {Ấn Chế Điện} và kéo dài thời gian {bá thể}. Trong quá trình thi triển một số kỹ năng tấn công khi di chuyển, có thể thi triển kỹ năng này và nhận trực tiếp {Ấn Chế Điện}. Trong thời gian ngắn nếu bị trúng nhiều lần Thiên Lôi, sát thương sẽ giảm dần.
• {Ấn Chế Điện}: Tiêu hao {1 tầng} {Ấn Chế Điện} để triệu hồi Thiên Lôi, gây {sát thương} và {gây choáng} lên người chơi. Tuy nhiên, Thiên Lôi không có hiệu lực đối với người chơi đang thi triển kỹ năng tấn công khi di chuyển hoặc tụ lực.`,
    detail: `• Thời gian hiệu quả: {5 giây}.
• Sát thương duy trì: {8.249} nội công Lôi thương mỗi {0.5 giây}.
• Sát thương Thiên Lôi: {86.605} nội công Lôi thương.
• Thời gian hồi ngắn nhất của Thiên Lôi: {1 giây}.
• Nếu người chơi bị đánh trúng nhiều lần trong {1 giây}, sát thương Thiên Lôi giảm còn {20%}
• Số lần thi triển Thiên Lôi tối đa: {4 lần}.
• Mỗi lần thi triển kỹ năng di chuyển tấn công hoặc tụ lực (mỗi {1.5 giây}) nhận {2 tầng} {Ấn Chế Điện} (thời gian hồi {1 giây}).
• Thời gian choáng: {1 giây} / Thời gian hồi chiêu cộng dồn: {10 giây}.
• Sát thương kết thúc: {41.241} nội công Lôi thương.
• Tăng tốc độ di chuyển: {40%}, kéo dài {5 giây}.
• Thời gian bá thể: {2 giây} / Kéo dài theo thời gian thi triển kỹ năng.`,
    upgrade: `• Cấp 1: Dựa theo {Sức Mạnh} hoặc {Khí Hải}, tăng uy lực chiêu thức khoảng {4% - 7%}
• Cấp 2: Nhận thêm {1 tầng} {Ấn Chế Điện}
• Cấp 3: Giảm {8 giây} hồi chiêu cho kỹ năng tấn công khi di chuyển hoặc tụ lực có thời gian hồi ngắn nhất.
• Cấp 4: Trong thời gian kỹ năng duy trì, tốc độ hồi khinh công tăng {20%}.
• Cấp 5: Mỗi lần trúng Thiên Lôi sát thương nhận vào tăng {15%} (tăng dần theo từng lần trúng).`,
    imageUrl: '/images/tuyet-ky/ctld.png',
  },
  // ── VÔ NIỆM MÔN ──
  {
    name: 'Đoạt Phách Bảo Điển',
    nameZh: '夺魄宝典',
    category: 'Tuyệt kỹ',
    monPhai: 'Vô Niệm Môn',
    itemType: 'PVP',
    stats: ['Đơn Thể', 'Tầm xa', 'Khống Chế Mạnh'],
    tags: ['Đơn Thể', 'Tầm xa', 'Khống Chế Mạnh'],
    details: `• {Đoạt Phách Anh}: Gây sát thương và cưỡng chế kéo mục tiêu chậm rãi về phía bản thân. Trạng thái này không thể bị giải bằng kỹ năng giải khống chế.
• {Si Tâm}: Đoạt Phách Anh không thể thi triển lên mục tiêu không thể chọn hoặc đang Bá thể. Sau khi đã tung ra, dù mục tiêu có không thể chọn hoặc Bá thể thì vẫn không thể miễn nhiễm hiệu ứng khống chế. Khi trúng đòn không làm gián đoạn trạng thái {Di Bộ Sinh Trần}. Giảm sát thương mục tiêu gây lên bản thân, duy trì trong một khoảng thời gian. Trong một thời gian nhất định, mục tiêu không thể tiếp tục bị Đoạt Phách lần nữa.`,
    detail: `• Thời gian Đoạt Phách: {2,5 giây}.
• Sát thương Đoạt Phách Anh: {429.287} nội công Phong thương.
• Sát thương mục tiêu gây lên bản thân giảm: {60%}.
• Thời gian duy trì giảm sát thương lên bản thân: {5 giây}.
• Thời gian hồi chiêu Đoạt Phách: {60 giây}.`,
    upgrade: `• Cấp 1: Dựa theo Khí Hải để tăng sát thương, khoảng {4%} – {7%}.
• Cấp 2: Giảm sát thương nhận vào của bản thân, chuyển thành giảm toàn bộ sát thương với cùng giá trị.
• Cấp 3: Tăng tốc độ bay của đạn.
• Cấp 4: Thời gian mê hoặc kéo dài thêm 0,3 giây.
• Cấp 5: Tăng tầm thi triển thêm 2 trượng, khi mục tiêu ở trạng thái mê hoặc, tốc độ di chuyển tăng {30%}.`,
    imageUrl: '/images/tuyet-ky/dpbd.png',
  },
  // ── LONG NGÂM ──
  {
    name: 'Thần Long Cửu Hiện',
    nameZh: '神龙九现',
    category: 'Tuyệt kỹ',
    monPhai: 'Long Ngâm',
    itemType: 'PVP',
    stats: ['Khống Chế'],
    tags: ['Khống Chế'],
    details: `Tựa như rồng sấm xé trời lao ra, bố trí Kiếm Trận, kiếm khí xuyên qua giữa các điểm kiếm gây sát thương duy trì liên tục. Kết thúc Long Ngâm sẽ kích nổ Kiếm Trận, chém ra một kiếm xé rách không gian, gây sát thương cao và kèm hiệu ứng {hất tung}.
• {Vô Chấp}: Trong thời gian nhân vật di chuyển ẩn thân giữa các kiếm, sẽ ở trạng thái vô địch.`,
    detail: `• Sát thương khi triển khai Kiếm Trận: {103.101} nội công Lôi thương.
• Sát thương xuyên qua (khi nhân vật di chuyển trong kiếm khí): {123.721} nội công Lôi thương.
• Sát thương kết thúc: {226.821} nội công Lôi thương
• Thời gian duy trì: {3.8 giây}.
• Thời gian hất tung: khoảng {1.9 giây}.`,
    upgrade: `• Cấp 1: Dựa theo {Khí Hải}, tăng sát thương khoảng {4% - 7%}
• Cấp 2: Mỗi giây hồi thêm {10} điểm Kiếm Ý, kéo dài {10 giây}.
• Cấp 3: Khi thi triển kỹ năng, hoàn trả {10} điểm Tuyệt Kỹ.
• Cấp 4: Sát thương kết thúc tăng {15%}.
• Cấp 5: Khi kết thúc thi triển, cắm xuống thêm {4} thanh Khí Kiếm.`,
    imageUrl: '/images/tuyet-ky/tlch.png',
  },
  // ── CỬU LINH ──
  {
    name: 'Bích Lạc Ngưng Châu',
    nameZh: '碧落凝珠',
    category: 'Tuyệt kỹ',
    monPhai: 'Cửu Linh',
    itemType: 'PVP',
    stats: ['Duy Trì', 'Khống Chế Mạnh'],
    tags: ['Duy Trì', 'Khống Chế Mạnh'],
    details: `Tại vị trí chỉ định, triệu hồi xoáy Cổ Linh, gây sát thương và hiệu ứng kéo hút kẻ địch vào trung tâm.`,
    detail: `• Sát thương tạo thành ban đầu: {53.794} nội công Mộc thương
• Sát thương kéo hút duy trì: {23.055} nội công Mộc thương, tổng {4 đợt}
• Sát thương nổ kết thúc: {118.347} nội công Mộc thương`,
    upgrade: `• Cấp 1: Sát thương tăng theo Khí Hải, khoảng {+4%} đến {+7%}
• Cấp 2: Kẻ địch trong phạm vi, nếu kỹ năng giải khống chế đang hồi, thì thời gian hồi còn lại không thể thấp hơn {3 giây}
• Cấp 3: Tăng phạm vi thi triển thêm {2 trượng}
• Cấp 4: Sau khi thi triển, hồi {100} điểm Cổ Linh
• Cấp 5: Liên tục hút tuyệt kỹ điểm của người chơi trong phạm vi, {3 điểm} mỗi giây`,
    imageUrl: '/images/tuyet-ky/blnc.png',
  },
  // ── HỒNG ÂM ──
  {
    name: 'Đại Âm Hi Thanh',
    nameZh: '大音希声',
    category: 'Tuyệt kỹ',
    monPhai: 'Hồng Âm',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Bá Thể', 'Tạo Khiên', 'Giảm Thương', 'Trị Liệu', 'Đa Nhân'],
    tags: ['Duy Trì', 'Bá Thể', 'Tạo Khiên', 'Giảm Thương', 'Trị Liệu', 'Đa Nhân'],
    details: `Tiến vào trạng thái {Đãi Huyền}. Khi thi triển kỹ năng lần nữa sẽ nhận {Bá Thể}, {Giảm Sát Thương} và lượng lớn {Khiên}, đồng thời căn cứ theo dạng Kinh Hồng hay Diệu Âm hiện tại gây sát thương hoặc tạo hiệu quả trị liệu lên khu vực xung quanh.
• Trong thời gian Đãi Huyền, nếu thành viên khác trong đội nhấn nút tham gia, có thể {Cộng Tấu}, nhận cùng mức Khiên và giảm sát thương tương ứng.
• {Độc Ca}: Nếu trong tổ đội có thành viên mang kỹ năng có thẻ Đa Nhân khác, sẽ không thể kích hoạt hiệu quả Cộng Tấu.`,
    detail: `• {Dạng Diệu Âm} - Trị liệu: {283.857} khí huyết
• {Dạng Diệu Âm} - Khiên: {63.302} (duy trì {4 giây})
• {Dạng Kinh Hồng} - Sát thương: {492.467} nội công Thổ thương
• {Dạng Kinh Hồng} - Khiên: {126.604} (duy trì {4 giây})
• Giảm Sát Thương khi thi triển: {35%}`,
    upgrade: `• Cấp 1: Căn cứ thuộc tính {Khí Hải}, tăng sát thương và lượng trị liệu khoảng {4%–7%}
• Cấp 2: Khi thi triển kỹ năng, hồi cho bản thân {15%} khí huyết tối đa
• Cấp 3: Giá trị Khiên do kỹ năng tạo ra tăng {10%}
• Cấp 4: Sau khi thi triển đoạn hai, hồi {50 điểm} Huyền Nhạc
• Cấp 5: Sát thương gây ra và lượng hồi khí huyết của kỹ năng tăng {10%}`,
    imageUrl: '/images/tuyet-ky/daht.png',
  },
  // ── THƯƠNG LAN ──
  {
    name: 'Vân Hạm Chinh Độ',
    nameZh: '云舰征渡',
    category: 'Tuyệt kỹ',
    monPhai: 'Thương Lan',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Bá Thể', 'Giảm Sát Thương'],
    tags: ['Nhóm', 'Bá Thể', 'Giảm Sát Thương'],
    details: `Kéo chiến hạm ném về phía trước. Chiến hạm sẽ lao đến vị trí mục tiêu, sau đó vỡ tan và phát nổ, gây đòn kết liễu.
• {Kiên Thuyền}: Trong thời gian thi triển kỹ năng, bản thân nhận: {Bá Thể}, {Giảm sát thương}`,
    detail: `• Sát thương va chạm chiến hạm: {87.818} ngoại công Thủy thương
• Sát thương nổ chiến hạm: {219.293} ngoại công Thủy thương
• Thời gian Bá Thể: {2 giây}
• Giảm sát thương: {40%}, duy trì {2 giây}`,
    upgrade: `• Cấp 1: Dựa theo chỉ số {Sức Mạnh}, sát thương tăng khoảng {4% ~ 7%}
• Cấp 2: Sau khi thi triển, hồi {10 điểm Tuyệt Kỹ}
• Cấp 3: Trong thời gian chiến hạm lao đi, sẽ {đẩy lùi} kẻ địch trên đường bay
• Cấp 4: Sau khi thi triển, hồi {50 điểm Nộ khí}
• Cấp 5: Sát thương nổ chiến hạm tăng thêm {10%}`,
    imageUrl: '/images/tuyet-ky/vhcd.png',
  },
];
