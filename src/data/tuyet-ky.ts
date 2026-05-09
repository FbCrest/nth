import { GameItem } from '../types';

export const tuyetKyData: GameItem[] = [
  // ── VÔ PHONG MÔN ──
  {
    name: 'Vạn Nhẫn Quy Phong',
    nameZh: '万刃归锋',
    category: 'Tuyệt kỹ',
    monPhai: 'Vô Phong Môn',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Bá Thể', 'Tầm Xa'],
    tags: ['Duy Trì', 'Bá Thể', 'Tầm Xa'],
    details: `Nhảy lên không trung, nhận hiệu quả {khắc chế thủ lĩnh}. Trong thời gian này, đòn đánh thường có thể luân phiên tung ra trảm kích Băng/Hỏa, tối đa {3 lần}. Mỗi lần trảm kích sẽ gây thêm dấu {Phá Sơ Hở} lên mục tiêu đã chọn, đồng thời có thể dùng kỹ năng đoạn 2 lao xuống vị trí mục tiêu, thi triển {Vạn Nhẫn Trảm}.
• Khi dùng lên mục tiêu quái, sẽ nhanh chóng thi triển {Vạn Nhẫn Trảm}, bỏ qua trạng thái bay lên.
• {Vạn Nhẫn Trảm}: Gây nhiều đợt trảm kích tốc độ cao tại vị trí mục tiêu.
• {Quy Phong}: Trong lúc đang trên không, dùng kỹ năng khác sẽ hạ xuống sớm. Nếu hạ xuống theo cách này, hoặc không dùng Vạn Nhẫn Trảm khi đang bay, sẽ tự động thi triển Vạn Nhẫn Trảm trễ tại vị trí mục tiêu.
• {Hiệu ứng mùa}: Trong mùa Sa Hải Chi Ca, hiệu quả khắc chế thủ lĩnh tăng thêm {4%} (không hiển thị trong chỉ số).`,
    detail: `• Trảm kích Băng trên không: {127.163} nội công Băng thương.
• Trảm kích Hỏa trên không: {127.163} nội công Hỏa thương.
• Vạn Nhẫn Trảm (Băng): {54.209} nội công Băng thương × {5 lần}.
• Vạn Nhẫn Trảm (Hỏa): {54.209} nội công Hỏa thương × {5 lần}.
• Giảm sát thương khi đang trên không (bá thể): {25%}.
• Vạn Nhẫn Trảm gây thêm {400%} sát thương lên quái (không phải kiến trúc).
• Tăng hiệu quả khắc chế thủ lĩnh: {6%}.
• Khi nhiều người cùng đánh trúng mục tiêu người chơi, sát thương sẽ giảm mạnh.`,
    upgrade: `• Cấp 1: Dựa theo {Sức mạnh / Khí Hải}, tăng sát thương khoảng {4% ~ 7%}.
• Cấp 2: Tốc độ di chuyển trên không tăng {16.7%}.
• Cấp 3: Sau khi thi triển, tăng {1200} điểm tấn công trong {40 giây} và tăng {650} toàn nguyên tố trong {40 giây}.
• Cấp 4: Thời gian trên không tăng {0.5 giây}, giới hạn số lần trảm kích trên không +{1}.
• Cấp 5: Sát thương Vạn Nhẫn Trảm tăng {20%}.`,
    imageUrl: '/images/tuyet-ky/vnqp.png',
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
    itemType: 'PVP',
    stats: ['Nhóm', 'Bạo Phát', 'Bá Thể', 'Giảm Sát Thương'],
    tags: ['Nhóm', 'Bạo Phát', 'Bá Thể', 'Giảm Sát Thương'],
    details: `Nhận hiệu ứng {bá thể} và {giảm sát thương} trong thời gian ngắn. Các thanh tiểu kiếm tụ lại, kéo nhẹ kẻ địch xung quanh lại gần và áp dấu ấn {Vạn Quân} lên người chơi và quái Thủ lĩnh. Sau đó, Tiểu Kiếm hội tụ thành đại kiếm rơi xuống gây sát thương cực lớn.
• {Vạn Quân}: Trong thời gian bị đánh dấu, mục tiêu sẽ ghi lại một phần sát thương đã nhận. Khi đại kiếm rơi xuống, toàn bộ dấu ấn {Vạn Quân} sẽ bị kích nổ, gây sát thương tích lũy tương ứng lên từng mục tiêu. Sát thương này có giới hạn, không thể đỡ đòn hoặc bạo kích. Với kẻ địch có yếu điểm hệ Kim, gây thêm lượng lớn sát thương phụ. Giới hạn sát thương được xác định bởi tấn công nội công và ngoại công của người thi triển.`,
    detail: `• Sát thương duy trì từ tiểu kiếm hội tụ: {64.752} nội công Kim thương.
• Sát thương bùng nổ khi đại kiếm rơi xuống: {223.142} nội công Kim thương.
• Giảm sát thương ban đầu: {25%}
• Thời gian bá thể và giảm sát thương ban đầu: {1.5 giây}.
• Tỷ lệ tích lũy sát thương mỗi lần từ Vạn Quân: {50%}
• Giới hạn sát thương Vạn Quân lên Thủ Lĩnh: {812.422}
• Giới hạn sát thương Vạn Quân lên mục tiêu thường: {295.068}
• Sát thương Vạn Quân không thể vượt quá {30%} giới hạn sinh lực của mục tiêu.
• Sát thương Vạn Quân lên kẻ địch có điểm yếu hệ Kim: tăng {50%}`,
    upgrade: `• Cấp 1: Dựa theo {Sức Mạnh} hoặc {Khí Hải}, tăng sát thương đại kiếm khoảng {8% - 14%}
• Cấp 2: Khi kéo kẻ địch ban đầu, gây thêm hiệu ứng {Phong Mạch} trong {2 giây}. Đại kiếm gây thêm {12%} sát thương lên mục tiêu trung tâm.
• Cấp 3: Hiệu quả {giảm sát thương} tăng thêm {10%}.
• Cấp 4: Sau khi thi triển kỹ năng, tăng {3%} sát thương kỹ năng {Nhóm} trong {8 giây}.
• Cấp 5: Sát thương Vạn Quân tăng dần theo lượng máu còn lại của mục tiêu – bắt đầu tăng khi máu dưới {75%}, và đạt tối đa khi máu dưới {30%} (tăng tối đa thêm {30%} sát thương).`,
    imageUrl: '/images/tuyet-ky/kpck.png',
  },
  // ── GIANG HỒ - HỖ TRỢ ──
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
