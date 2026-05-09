import { GameItem } from '../types';

export const kyNangCuuLinhData: GameItem[] = [
  // ── CỬU LINH ──
  {
    name: 'Linh Tê Tam Hiện',
    nameZh: '灵犀三现',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Triệu Hồi'],
    tags: ['Duy Trì', 'Triệu Hồi'],
    details: `Liên tục đánh Cổ Chủng vào các yếu huyệt của mục tiêu, gây sát thương theo chu kỳ. Đòn kết thúc gây sát thương phạm vi nhỏ, đồng thời Dược Nhân phối hợp tấn công.
• Tăng sát thương lên quái vật, kẻ địch đang trong trạng thái khống chế mạnh, người chơi địch đang dùng kỹ năng dịch chuyển hoặc di chuyển tốc độ cao.`,
    detail: `• Sát thương Cổ Chủng liên hoàn: {35%} hệ số sát thương, {8 lần}
• Truy kích khi người chơi bị đánh bay: thời gian ngắn
• Sát thương nổ kết thúc: {157%} hệ số sát thương
• Đẩy lùi nổ kết thúc: {0.65 – 1.25 giây}
• Hồi Cổ Linh (tùy Dược Nhân): {171 – 221 điểm}
• Quỷ Diên hợp kích: {87%} hệ số sát thương Quỷ Diên, {7 lần}
• Vô Mộng hợp kích: Uy lực chiêu thức tăng {50%}
• Tu La loạn vũ: {157%} hệ số sát thương Tu La, {5 lần}
• Tu La loạn vũ – đẩy lùi: {0.35 giây}
• Tu La xung kích: {204%} hệ số sát thương Tu La
• Thời gian sát thương theo chu kỳ: {10 giây}
• Sát thương duy trì mỗi giây: {37%} hệ số sát thương
• Tăng sát thương lên quái vật: {60%}
• Tăng sát thương lên mục tiêu đang chịu khống chế mạnh, dùng kỹ năng dịch chuyển hoặc di chuyển tốc độ cao: {50%}
• Hồi chiêu: {7.76 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/ltth.png',
  },
  {
    name: 'Hoàn Linh Quyết',
    nameZh: '环灵诀',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Triệu Hồi', 'Phong Mạch', 'Đỡ Đòn'],
    tags: ['Triệu Hồi', 'Phong Mạch', 'Đỡ Đòn'],
    details: `Triệu hồi 3 Linh Châu Cổ Linh xoay quanh bản thân. Khi thi triển đòn đánh thường, có thể bắn Linh Châu ra gây sát thương và hồi Cổ Linh.
• Quỷ Diên & Vô Mộng: quay về và hợp lực tấn công.
• Tu La: Linh Châu xoay quanh bảo hộ thân thể, tăng khả năng đỡ đòn cho Cửu Linh.
• Thanh Đăng Phần Cốt: Khi thi triển kỹ năng, thiêu diệt người chơi địch trong phạm vi đang ở trạng thái trọng thương, đồng thời áp đặt hiệu ứng bất lợi khiến họ không thể hồi sinh tại chỗ.`,
    detail: `• Tổng sát thương Linh Châu: {291%} hệ số sát thương
• Đẩy lùi Linh Châu: {0.25 giây}
• Hồi Cổ Linh (tùy Dược Nhân): {64 – 79 điểm}
• Quỷ Diên hợp kích: {490%} hệ số sát thương Quỷ Diên
• Vô Mộng hợp kích: {485%} hệ số sát thương Vô Mộng
• Giảm sát thương khi Tu La đỡ đòn: {50%}
• Hiệu ứng bất lợi – Thanh Đăng Phần Cốt: Giảm giới hạn Khí Huyết tối đa & Tấn Công {30%}
• Thời gian duy trì hiệu ứng bất lợi: {19.5 giây}
• Hồi chiêu: {4.85 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/hlq.png',
  },
  {
    name: 'Thích Hồn Kích',
    nameZh: '刺魂击',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Khống Chế Mạnh', 'Triệu Hồi', 'Trọng Thương', 'Đánh Bay'],
    tags: ['Khống Chế Mạnh', 'Triệu Hồi', 'Trọng Thương', 'Đánh Bay'],
    details: `Phóng về phía trước một làn sóng hồn lực, gây sát thương lên kẻ địch trên đường đi, đồng thời gây hiệu ứng đánh bay và trọng thương. Dược Nhân sẽ phối hợp tấn công. Nếu không đánh bay mục tiêu, sẽ hoàn trả một phần thời gian hồi chiêu.`,
    detail: `• Sát thương Sóng Hồn: {60%} hệ số sát thương
• Hiệu ứng Trọng Thương: {35%}, duy trì {5 giây}
• Quỷ Diên hợp kích: {147%} hệ số sát thương Quỷ Diên
• Vô Mộng hợp kích: {147%} hệ số sát thương Vô Mộng
• Tu La hợp kích: {147%} hệ số sát thương Tu La
• Hoàn trả hồi chiêu khi không đánh bay mục tiêu: {8 giây}
• Hồi Cổ Linh: {100 điểm}
• Hồi chiêu: {14.55 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/thk.png',
  },
  {
    name: 'Thích Hồn Kích · Quy Hồn',
    nameZh: '刺魂击·归魄',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Triệu Hồi', 'Giảm Hồi Chiêu', 'Di Chuyển'],
    tags: ['Triệu Hồi', 'Giảm Hồi Chiêu', 'Di Chuyển'],
    details: `Phóng về phía mục tiêu một làn sóng hồn lực, gây sát thương lên kẻ địch trên đường đi. Trong thời gian thi triển có thể di chuyển. Dược Nhân sẽ phối hợp tấn công. Sau khi thi triển, nhận trạng thái Quy Hồn.
• Thích Hồn: gây sát thương bổ sung lên quái vật.
• Quy Hồn: Tăng sát thương lên quái vật và giảm thời gian hồi chiêu của các kỹ năng: Linh Tê Tam Hiện, Trường Phong Tán Phách, Phá Mộng. Nếu các kỹ năng trên đánh trúng người chơi, trạng thái Quy Hồn sẽ bị xóa và không kích hoạt giảm hồi chiêu.`,
    detail: `• Sát thương Sóng Hồn: {171%} hệ số sát thương
• Quỷ Diên hợp kích: {147%} hệ số sát thương Quỷ Diên
• Vô Mộng hợp kích: {245%} hệ số sát thương Vô Mộng
• Tu La hợp kích: {147%} hệ số sát thương Tu La
• Sát thương bổ sung lên quái vật: {90%}
• Quy Hồn – tăng sát thương lên quái: {5%}
• Quy Hồn – Giảm hồi chiêu Linh Tê Tam Hiện: {3.6 giây}
• Quy Hồn – Giảm hồi chiêu Trường Phong Tán Phách: {5.6 giây}
• Hồi chiêu: {7.76 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/thkqh.png',
  },
  {
    name: 'Phá Mộng',
    nameZh: '破梦',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Triệu Hồi', 'Trọng Thương', 'Làm Chậm'],
    tags: ['Bạo Phát', 'Triệu Hồi', 'Trọng Thương', 'Làm Chậm'],
    details: `Vận Hồn Đăng ngưng tụ hồn phách giáng xuống vị trí mục tiêu, gây lượng lớn sát thương lên kẻ địch trong phạm vi, đồng thời gây hiệu ứng Trọng Thương. Dược Nhân sẽ phối hợp tấn công.`,
    detail: `• Sát thương Phá Mộng: {296%} hệ số sát thương
• Trọng Thương: {35%}, duy trì {6 giây}
• Hồi Cổ Linh: {24 điểm}
• Quỷ Diên làm chậm: {45%}, duy trì {0.3 giây}
• Vô Mộng hợp kích: Uy lực kỹ năng tăng {36%}
• Tu La hợp kích: {485%} hệ số sát thương Tu La
• Sát thương gây lên người chơi giảm: {20%}
• Hồi chiêu: {8.73 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/pm.png',
  },
  {
    name: 'Như Mộng Lệnh',
    nameZh: '如梦令',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Dịch Chuyển', 'Bá Thể', 'Triệu Hồi', 'Giải Khống', 'Làm Chậm', 'Đỡ Đòn'],
    tags: ['Dịch Chuyển', 'Bá Thể', 'Triệu Hồi', 'Giải Khống', 'Làm Chậm', 'Đỡ Đòn'],
    details: `Cưỡi Hồn Đăng bay lượn một vòng quanh bản thân, nhận Bá Thể (sẽ bị hủy khi thi triển kỹ năng khác). Trong thời gian này liên tục hồi Cổ Linh. Nhấn lại kỹ năng để kết thúc trạng thái bay.
• Khi đánh trúng kẻ địch, gây làm chậm nhẹ và hồi thêm Cổ Linh.
• Có thể sử dụng khi đang bị đánh bay hoặc hất lên không trung, giải trừ khống chế, nhưng thời gian hồi chiêu sẽ bị tăng thêm.
• Nếu va chạm chướng ngại vật trong lúc bay, trạng thái bay sẽ bị ngắt và hoàn trả một phần hồi chiêu.`,
    detail: `• Thời gian Bá Thể: {2.5 giây}
• Làm chậm: {30 điểm}
• Vô Mộng hợp kích: hồi thêm {20%} Cổ Linh
• Tu La hợp kích: kích hoạt hộ thể xoay quanh, nhận Đỡ đòn
• Tăng hồi chiêu khi giải khống chế: {10 giây}
• Hồi chiêu: {13.58 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/nml.png',
  },
  {
    name: 'Như Mộng Lệnh · Diên Mộng',
    nameZh: '如梦令·鸢梦',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Dịch Chuyển', 'Bá Thể', 'Giải Khống', 'Khiên', 'Hồi Máu'],
    tags: ['Dịch Chuyển', 'Bá Thể', 'Giải Khống', 'Khiên', 'Hồi Máu'],
    details: `Hóa thân thành Quỷ Diên để bay lượn (bị hủy khi thi triển kỹ năng khác). Trong thời gian bay, nhận Bá Thể, giảm sát thương và không thể bị chọn làm mục tiêu.
• Khi kỹ năng kết thúc, hồi Cổ Linh và nhận Khiên Cổ Thân (nếu đang kích hoạt Cổ Thân, không có Vô Tung và Khí Huyết dưới {65%}, thì hiệu ứng này sẽ chuyển thành hồi Khí Huyết).
• Thập Mộng: Trong quá trình bay, khi va chạm kẻ địch sẽ nhận Trần Mộng, giúp tăng giá trị khiên hoặc lượng hồi Khí Huyết.
• Có thể sử dụng khi đang chịu mọi trạng thái khống chế, ngoại trừ Đánh bay và Hất lên không trung.`,
    detail: `• Thời gian bay: {2.5 giây}
• Tốc độ di chuyển tăng lên: {13} (sau 2 giây sẽ suy giảm)
• Giảm sát thương: {30%}
• Hồi Cổ Linh: tối đa {400 điểm}
• Khiên Cổ Thân: {18,979}
• Hồi Khí Huyết: {73,450}
• Trần Mộng: mỗi điểm tăng {5%} giá trị khiên hoặc hồi Khí Huyết
• Giới hạn Trần Mộng: {9 điểm}
• Sát thương va chạm: {100%} hệ số sát thương
• Hồi chiêu: {17.46 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/nmldm.png',
  },
  {
    name: 'Trường Phong Tán Phách',
    nameZh: '长风散魄',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Triệu Hồi', 'Khống Chế Nhẹ', 'Kéo Hút', 'Làm Chậm', 'Miễn Khống'],
    tags: ['Duy Trì', 'Triệu Hồi', 'Khống Chế Nhẹ', 'Kéo Hút', 'Làm Chậm', 'Miễn Khống'],
    details: `Vung Hồn Đăng, tạo ra một luồng lốc gió duy trì trước mặt, gây sát thương lên kẻ địch và hiệu ứng kéo hút. Dược Nhân sẽ phối hợp tấn công.
• Có thể nhấn lại kỹ năng để kết thúc sớm. Trong thời gian thi triển, có thể điều chỉnh hướng kỹ năng.
• Trong thời gian này miễn nhiễm 1 lần khống chế mạnh; nếu miễn nhiễm thành công, sẽ lập tức kích hoạt kỹ năng giai đoạn 2.`,
    detail: `• Sát thương Lốc Gió: {86%} hệ số sát thương, {10 lần}
• Truy kích người chơi bị hất lên không trung: thời gian ngắn
• Hồi Cổ Linh (tùy Dược Nhân & số lần trúng): {120 – 240 điểm}
• Vô Mộng hợp kích: {86%} hệ số sát thương Vô Mộng, {10 lần}
• Tu La loạn vũ: {98%} hệ số sát thương Tu La, thời gian hồi {0.3 giây}
• Loạn vũ – làm chậm: {30%}, duy trì {1.5 giây}
• Tu La xung quyền: {734%} hệ số sát thương Tu La
• Hồi chiêu: {15.52 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/tptp.png',
  },
  {
    name: 'Trường Phong · Phệ Hồn',
    nameZh: '长风·噬魂',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Triệu Hồi', 'Khống Chế Nhẹ', 'Kéo Hút', 'Trọng Thương', 'Đỡ Đòn'],
    tags: ['Duy Trì', 'Triệu Hồi', 'Khống Chế Nhẹ', 'Kéo Hút', 'Trọng Thương', 'Đỡ Đòn'],
    details: `Vung Hồn Đăng tạo ra một lốc gió trước mặt, hấp thu hồn phách của kẻ địch phía trước, sau đó Dược Nhân đánh tan, gây sát thương và hiệu ứng kéo hút. Dược Nhân sẽ phối hợp tấn công.
• Sau khi trang bị kỹ năng, sát thương theo chu kỳ sẽ kèm hiệu ứng Trọng Thương.
• Phệ Hồn: Kết toán sớm một phần sát thương theo chu kỳ đang tồn tại trên mục tiêu.
• Tán Phách: Khuếch tán phần sát thương theo chu kỳ đã kết toán sang kẻ địch xung quanh.
• Vô Mộng: Tăng phạm vi kỹ năng.
• Tu La: Tăng đỡ đòn cho Cửu Linh.`,
    detail: `• Sát thương Lốc Gió: {98%} hệ số sát thương
• Sát thương nổ: {122%} hệ số sát thương
• Thời gian sát thương theo chu kỳ: {10 giây}
• Sát thương theo chu kỳ mỗi giây: {48%} hệ số sát thương
• Truy kích người chơi bị hất lên không trung: thời gian ngắn
• Hiệu ứng Trọng Thương: {35%}
• Hồi Cổ Linh (theo số mục tiêu trúng): {84 – 156 điểm}
• Vô Mộng hợp kích: tăng {25%} phạm vi kỹ năng
• Giảm sát thương khi Tu La đỡ đòn: {50%}
• Kỹ năng có thể kết toán sớm & khuếch tán sát thương theo chu kỳ: Linh Tê Tam Hiện, Trường Phong · Phệ Hồn, Bách Cổ Phệ Tâm
• Hồi chiêu: {7.76 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/tpph.png',
  },
  {
    name: 'Dẫn Linh Trận',
    nameZh: '引灵阵',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Phạm Vi', 'Tăng Cường', 'Hỗ Trợ', 'Tốc Độ Di Chuyển', 'Tốc Độ Tấn Công'],
    tags: ['Phạm Vi', 'Tăng Cường', 'Hỗ Trợ', 'Tốc Độ Di Chuyển', 'Tốc Độ Tấn Công'],
    details: `• Dẫn Linh · Ngộ: Sau khi học kỹ năng, đồng đội xung quanh được tăng một lượng nhỏ sát thương chí mạng.
• Chủ động sử dụng: Tăng tốc độ di chuyển và tốc độ tấn công cho tổ đội và Dược Nhân, đồng thời bản thân Cửu Linh được tăng thêm sát thương chí mạng và tấn công.
• Nếu khi thi triển, hiệu ứng tăng tốc vẫn đang trong thời gian hồi nội bộ, thì hồi chiêu của Dẫn Linh Trận sẽ giảm xuống còn 4 giây.
• Khi đánh bại một số loại quái, có thể nhấn vào quái để thi triển Giáng Hồn Chú, biến chúng thành Dược Nhân, chiến đấu cho Cửu Linh trong một khoảng thời gian. Kỹ năng Vọng Khí cho phép xem trước mục tiêu có thể thi triển Giáng Hồn Chú hay không (chỉ có thể dùng lên mục tiêu có dấu ấn tử khí).`,
    detail: `• Dẫn Linh · Ngộ – Tăng sát thương chí mạng: {5.0%}
• Tăng tốc di chuyển & tốc độ tấn công: {15%}, duy trì {8 giây}
• Hồi nội bộ hiệu ứng tăng tốc: {20 giây}
• Bản thân tăng thêm sát thương chí mạng: {10.8%}
• Bản thân tăng thêm tấn công: {415}
• Thời gian hiệu lực buff cá nhân: {300 giây}
• Thời gian Giáng Hồn Chú: {360 giây}
• Hồi chiêu: {23.28 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/dlt.png',
  },
  {
    name: 'Nhiếp Thần Truy Mệnh',
    nameZh: '摄神追命',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Triệu Hồi', 'Tầm Xa', 'Đơn Mục Tiêu', 'Khống Chế Mạnh'],
    tags: ['Triệu Hồi', 'Tầm Xa', 'Đơn Mục Tiêu', 'Khống Chế Mạnh'],
    details: `Chỉ huy Dược Nhân lao nhanh tới mục tiêu và phát động tấn công.
• Quỷ Diên: Gây khống chế mục tiêu.
• Vô Mộng: Làm choáng và đánh bật lùi mục tiêu, đồng thời khiến mục tiêu chịu sát thương tăng lên (hiệu ứng tăng sát thương nhận phải có hồi nội bộ, không được hoàn lại).
• Tu La: Lao tới khu vực mục tiêu, vung tóc dài tấn công, gây khống chế, đánh bật lùi, đồng thời giảm tấn công của các mục tiêu trong phạm vi.`,
    detail: `• Thời gian khống chế của Quỷ Diên: {1.5 giây}
• Thời gian khống chế của Vô Mộng: {2 giây}
• Sát thương kết liễu của Vô Mộng: {490%} hệ số sát thương Vô Mộng
• Vô Mộng – tăng sát thương nhận vào: {12%}, duy trì {8 giây}
• Thời gian khống chế của Tu La: {2.5 giây}
• Tu La – sát thương cuồng vũ: {832%} hệ số sát thương Tu La
• Tu La – giảm tấn công: {15.8%}, duy trì {8 giây}
• Không khống chế được mục tiêu: hoàn lại {8 giây} hồi chiêu
• Hồi chiêu: {17.46 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/nttm.png',
  },
  {
    name: 'Cổ Thân Tế Mệnh',
    nameZh: '蛊身祭命',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Khiên', 'Hồi Máu'],
    tags: ['Khiên', 'Hồi Máu'],
    details: `Tạo Khiên Cổ Thân cho bản thân, hấp thụ một lượng sát thương nhất định. Đồng thời hồi Cổ Linh và hồi máu cho các Dược Nhân.
• Có thể sử dụng khi đang bị khống chế.
• Nếu Tu La và Vô Mộng không có mặt trên chiến trường, xóa hồi chiêu triệu hồi.
• Nếu Khiên Cổ Thân bị phá vỡ, giảm một phần hồi chiêu của Cổ Thân Tế Mệnh.`,
    detail: `• Khiên Cổ Thân: {132,030}
• Hồi Cổ Linh: {144 điểm}
• Hồi máu Dược Nhân: {35%} khí huyết tối đa của Cửu Linh
• Khiên bị phá – giảm hồi chiêu: {5 giây}
• Hồi chiêu: {14.55 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/cttm.png',
  },
  {
    name: 'Cổ Tế · Vô Tung',
    nameZh: '蛊祭·无纵',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Khiên', 'Hồi Máu'],
    tags: ['Khiên', 'Hồi Máu'],
    details: `Tạo Khiên Cổ Thân cho bản thân, hấp thụ một lượng sát thương nhất định. Đồng thời hồi Cổ Linh và hồi máu cho các Dược Nhân.
• Có thể sử dụng khi đang bị khống chế.
• Khi khí huyết của bản thân thấp hơn một ngưỡng nhất định, kỹ năng không tạo khiên, mà chuyển sang hồi máu trực tiếp cho bản thân.
• Nếu Tu La và Vô Mộng không có mặt trên chiến trường, xóa hồi chiêu triệu hồi.
• Kỹ năng này kế thừa các hiệu ứng nâng cao và Hóa Cảnh của Cổ Thân Tế Mệnh.`,
    detail: `• Khiên Cổ Thân: {18,979}
• Hồi Cổ Linh: {144 điểm}
• Hồi máu Dược Nhân: {35%} khí huyết tối đa của Cửu Linh
• Điều kiện kích hoạt hồi máu: khí huyết dưới {65%}
• Lượng hồi máu: {73,450}
• Hồi chiêu: {9.7 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/ctvt.png',
  },
  {
    name: 'Tụ Cổ',
    nameZh: '聚蛊',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Đơn Mục Tiêu'],
    tags: ['Đơn Mục Tiêu'],
    details: `Lập tức hồi đầy Cổ Linh và tiến vào trạng thái Bạo Linh. Lượng Cổ Linh được hồi càng ít, thì thời gian hồi chiêu của kỹ năng càng ngắn.
• Sau khi trang bị kỹ năng, khi tiến vào trạng thái Bạo Linh, sẽ tự động triệu hồi Cổ Chủng từ trên không giáng xuống, tấn công mục tiêu đang được chọn.`,
    detail: `• Mức giảm hồi chiêu tối đa: {60%}
• Sát thương Cổ Chủng giáng xuống: {40%}
• Số lần tấn công tối đa: {6 lần}
• Không ở trạng thái thu chiêu: số lần tấn công tăng lên {20 lần}
• Hồi chiêu: {58.2 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/tc.png',
  },
  {
    name: 'Thực Cốt Tiêu Hồn',
    nameZh: '蚀骨销魂',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Đơn Mục Tiêu', 'Triệu Hồi', 'Làm Chậm'],
    tags: ['Đơn Mục Tiêu', 'Triệu Hồi', 'Làm Chậm'],
    details: `Vận nội kình, đánh Cổ Chủng về phía trước, gây sát thương lên mục tiêu trúng đòn. Dược Nhân sẽ phối hợp tấn công. Đòn đánh kèm hiệu ứng đẩy lùi nhẹ.`,
    detail: `• Tổng sát thương 3 đòn: {143%} hệ số sát thương
• Hồi Cổ Linh (theo Dược Nhân): {10 – 21 điểm}
• Quỷ Diên hợp kích (xác suất): tổng {490%} hệ số sát thương Quỷ Diên
• Vô Mộng hợp kích: {143%} hệ số sát thương Vô Mộng
• Tu La hợp kích (khoảng cách xa): {414%} hệ số sát thương Tu La
• Vuốt Tu La – làm chậm: {30%}, duy trì ngắn
• Vuốt / xung phong – đẩy lùi: {0.25 giây}
• Hồi chiêu: {0 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/tcth.png',
  },
  {
    name: 'Trục Ảnh Đồng Trần',
    nameZh: '逐影同尘',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Đơn Mục Tiêu', 'Giải Khống', 'Bá Thể', 'Tốc Độ Di Chuyển', 'Dịch Chuyển'],
    tags: ['Đơn Mục Tiêu', 'Giải Khống', 'Bá Thể', 'Tốc Độ Di Chuyển', 'Dịch Chuyển'],
    details: `Phối hợp cùng Dược Nhân thi triển thân pháp linh hoạt:
• Loại bỏ toàn bộ hiệu ứng khống chế và trạng thái bất lợi trên bản thân, nhận Bá Thể, giảm sát thương và tăng tốc độ di chuyển.
• Nếu Tu La và Vô Mộng không có mặt trên chiến trường, xóa hồi chiêu triệu hồi.`,
    detail: `• Thời gian Bá Thể: {1.5 giây}
• Giảm sát thương: {30%}, duy trì {2 giây}
• Tăng tốc độ di chuyển: {30%}, duy trì {2 giây}
• Quỷ Diên – tăng tốc: {50%}, duy trì {4 giây}
• Tu La – choáng: {1.5 giây}
• Hồi chiêu: {17.46 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/tadt.png',
  },
  {
    name: 'Đồng Chiến · Quỷ Diên',
    nameZh: '同战·鬼鸢',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Triệu Hồi', 'Tốc Độ Di Chuyển'],
    tags: ['Triệu Hồi', 'Tốc Độ Di Chuyển'],
    details: `Triệu hồi Quỷ Diên cùng Cửu Linh hành tẩu giang hồ. Quỷ Diên luôn theo sát Cửu Linh, ở trạng thái bất tử, không thể bị tấn công.
• Khi Quỷ Diên không có mặt trên chiến trường, thi triển Thực Cốt Tiêu Hồn hoặc triệu hồi Vô Mộng / Tu La sẽ gọi Quỷ Diên xuất hiện.
• Trong chiến đấu, khi sử dụng Yến Hồi Phong sẽ nhận tăng tốc trong thời gian ngắn, hiệu ứng này có hồi nội bộ.`,
    detail: `• Tỷ lệ sát thương Quỷ Diên: {27%}
• Tăng tốc độ di chuyển: {0.65 – 1.35 giây}
• Hồi nội bộ tăng tốc: {10 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/dcqd.png',
  },
  {
    name: 'Đồng Chiến · Vô Mộng',
    nameZh: '同战·无梦',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Triệu Hồi', 'Tầm Xa'],
    tags: ['Triệu Hồi', 'Tầm Xa'],
    details: `Triệu hồi Vô Mộng chiến đấu tầm xa cùng Cửu Linh. Vô Mộng không thể bị chọn làm mục tiêu.
• Vô Mộng có sát thương cao nhưng khá mỏng, có thể phối hợp với chủ nhân thi triển phần lớn kỹ năng. Khi gây sát thương, Vô Mộng hồi lại một lượng khí huyết nhất định cho bản thân.
• Nhấn vào biểu tượng Vô Mộng trong thanh triệu hồi để thu hồi Vô Mộng.
• Trong chiến đấu, khi sử dụng Yến Hồi Phong, có thể điều chỉnh vị trí của Vô Mộng, đồng thời giúp nó nhận một số lần giảm sát thương.`,
    detail: `• Tỷ lệ sát thương Vô Mộng: {36%}
• Tỷ lệ khí huyết Vô Mộng: {50%}
• Tỷ lệ phòng ngự Vô Mộng: {100%}
• Giảm sát thương: {30%}
• Số lần giảm sát thương: {4 lần}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/dcvm.png',
  },
  {
    name: 'Đồng Chiến · Tu La',
    nameZh: '同战·修罗',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Triệu Hồi', 'Cận Chiến', 'Đỡ Đòn', 'Khiên'],
    tags: ['Triệu Hồi', 'Cận Chiến', 'Đỡ Đòn', 'Khiên'],
    details: `Triệu hồi Tu La chiến đấu cận chiến cùng Cửu Linh. Tu La không thể bị chọn làm mục tiêu.
• Tu La có thể phách mạnh mẽ nhưng sát thương thấp, có thể đỡ đòn / gánh sát thương cho Cửu Linh.
• Nhấn vào biểu tượng Tu La trong thanh triệu hồi để thu hồi Tu La.
• Trong chiến đấu, khi khí huyết của Cửu Linh thấp hơn một tỷ lệ nhất định, Tu La sẽ tạo Khiên Cổ Thân cho Cửu Linh.`,
    detail: `• Tỷ lệ sát thương Tu La: {23%}
• Tỷ lệ khí huyết Tu La: {80%}
• Tỷ lệ phòng ngự Tu La: {100%}
• Tăng sát thương đòn kế tiếp sau "Hộ Thể Quấn Thân": {100%}
• Điều kiện nhận khiên: khí huyết dưới {50%}
• Hồi nội bộ nhận khiên: {30 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/dctl.png',
  },
  {
    name: 'U Hỏa Như Trú',
    nameZh: '幽火如昼',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Bá Thể', 'Trên Không', 'Bạo Linh'],
    tags: ['Bạo Phát', 'Bá Thể', 'Trên Không', 'Bạo Linh'],
    details: `Gọi lượng lớn Cổ Chủng rơi xuống xung quanh, gây sát thương liên tục. Khi kết thúc chiêu hoặc nhấn kỹ năng lần nữa, trạng thái sẽ chấm dứt và gây sát thương diện rộng. Nếu mục tiêu rơi vào trạng thái nguy kịch, đòn kết thúc sẽ gây sát thương cực lớn.
• Trong suốt quá trình thi triển, nhân vật nhận Bá Thể.
• Sát thương gây ra cho người chơi ở khoảng cách xa sẽ bị suy giảm.
• Chỉ có thể sử dụng khi đang ở trạng thái Bạo Linh.`,
    detail: `• Sát thương Cổ Chủng oanh kích: {100%} hệ số sát thương
• Sát thương Cổ Chủng khi bay: {24%} hệ số sát thương
• Sát thương bạo phát khi kết thúc chiêu: {350%} hệ số sát thương
• Sát thương bạo phát khi mục tiêu nguy kịch: {1077%} hệ số sát thương
• Suy giảm sát thương với người chơi ở xa: thấp nhất còn {50%}
• Vô Mộng hợp kích: tăng {40%} uy lực kỹ năng
• Tu La hợp kích: tạo Khiên Cổ Thân và nhận hiệu ứng đỡ đòn
• Hồi chiêu: {17.46 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/uhnt.png',
  },
  {
    name: 'U Hỏa Phần Thiên',
    nameZh: '幽火焚天',
    category: 'Kỹ năng',
    monPhai: 'Cửu Linh',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Triệu Hồi', 'Trên Không', 'Bạo Linh', 'Khiên'],
    tags: ['Bạo Phát', 'Triệu Hồi', 'Trên Không', 'Bạo Linh', 'Khiên'],
    details: `Triệu hồi Dược Nhân kết ấn, đồng thời tạo Khiên Cổ Thân cho bản thân. Tại vị trí dưới chân mục tiêu hình thành Trận Pháp, liên tục gây sát thương cực lớn lên mục tiêu trong thời gian tồn tại. Kỹ năng này gây thêm 50% sát thương lên quái vật.
• Phần Thiên: Trong thời gian Trận Pháp đang tồn tại, có thể lao thân vào trận, bay lên phía trên Trận Pháp và liên tục kích nổ Trận Pháp, gây sát thương diện rộng lên mục tiêu.
• Đọa Thiên: Khi kết thúc kích nổ Trận Pháp, có thể từ trên không giáng xuống (điều chỉnh vị trí bằng phím hướng), gây một lần sát thương Trận Pháp cực lớn tại vị trí mục tiêu. Có thể kết thúc kích nổ sớm, nếu kết thúc sớm thì sát thương chỉ còn 30%.
• Tử Ngục: Nếu mục tiêu rời khỏi phạm vi Trận Pháp, sẽ kích hoạt sát thương phạm vi tại vị trí người thi triển.
• Chỉ có thể sử dụng khi đang ở trạng thái Bạo Linh.`,
    detail: `• Khiên Cổ Thân: {18,979}
• Sát thương Trận Pháp / nổ ban đầu: {392%} hệ số sát thương / lần
• Sát thương kích nổ Phần Thiên: {245%} hệ số sát thương / lần
• Khoảng cách giữa các lần kích nổ Phần Thiên: {0.5 giây}
• Sát thương Trận Pháp / nổ Đọa Thiên: {392%} hệ số sát thương
• Sát thương cộng thêm lên quái: {+50%}
• Hồi chiêu: {17.46 giây}`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/cuu-linh/uhpt.png',
  },
];
