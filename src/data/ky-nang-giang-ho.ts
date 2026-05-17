import { GameItem } from '../types';

export const kyNangGiangHoData: GameItem[] = [
  {
    name: 'Thanh Quân Nhậm Kiếm',
    nameZh: '青筠任剑',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'PVP',
    stats: ['Duy Trì', 'Giải Khống', 'Dịch Chuyển', 'Đỡ Đòn', 'Hồi Máu'],
    tags: ['Duy Trì', 'Giải Khống', 'Dịch Chuyển', 'Đỡ Đòn', 'Hồi Máu'],
    details: `Nhảy bật lên và nhận trạng thái {đỡ đòn}, sau đó chém xuống vị trí mục tiêu và {hồi khí huyết} cho bản thân. Kết thúc bằng động tác tụ lực đập xuống, gây sát thương phạm vi và hồi một lượng lớn khí huyết. Có thể điều chỉnh vị trí đáp bằng cần điều khiển.
• Trong mùa Sa Hải Chi Ca, khi thi triển kỹ năng sẽ {giải trừ khống chế}.
• Khi trong đội có từ 2 người trở lên cùng sử dụng, thời gian hồi chiêu tăng thêm {20 giây}.`,
    detail: `• Sát thương chém: {202.365} nội công Phong thương, tổng cộng {2 lần}
• Hiệu quả hồi phục: {157.676} khí huyết, tổng cộng {2 lần}
• Sát thương kết liễu: {344.021} nội công thương
• Hiệu quả hồi phục cuối cùng: {394.188} khí huyết
• Hồi chiêu: {38 giây}`,
    upgrade: `• Cấp 1: Dựa theo thân pháp tăng sát thương và trị liệu khoảng {4%–7%}
• Cấp 2: Sát thương đòn kết liễu tăng {20%}
• Cấp 3: Khi ở trên không, tăng {40%} tốc độ di chuyển
• Cấp 4: Mỗi lần kỹ năng đánh trúng, lượng hồi máu cuối cùng tăng {3%}, tối đa {15%}
• Cấp 5: Thời gian hồi chiêu giảm {3 giây}`,
    imageUrl: '/images/ky-nang-quan-hiep/tqnk.png',
  },
  {
    name: 'Quy Vân Phá Phong',
    nameZh: '归云破锋',
    category: 'Kỹ năng',
    monPhai: 'Vô Phong Môn',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Dịch Chuyển', 'Phá Khiên', 'Đỡ Đòn'],
    tags: ['Đơn Thể', 'Dịch Chuyển', 'Phá Khiên', 'Đỡ Đòn'],
    details: `Sau khi tụ lực ngắn, lao tới phía sau mục tiêu, gây sát thương lên kẻ địch trên đường đi, đồng thời gây sát thương bổ sung, hiệu ứng {phá khiên} và gắn dấu {Phá Sơ Hở} lên mục tiêu. Trong thời gian thi triển, nhận trạng thái {đỡ đòn}.
• Phá Phong: Khi mục tiêu có dấu Phá Sơ Hở chịu sát thương từ Quần hiệp / Tuyệt kỹ, sẽ kích nổ gây thêm sát thương phạm vi và hiệu ứng phá khiên. Mỗi mục tiêu chỉ tồn tại {1} dấu Phá Sơ Hở.`,
    detail: `• Sát thương trên đường (Hỏa): {85.390} nội công Hỏa thương
• Sát thương trên đường (Băng): {85.390} nội công Băng thương
• Sát thương lên mục tiêu (Hỏa): {160.106} nội công Hỏa thương
• Sát thương lên mục tiêu (Băng): {160.106} nội công Băng thương
• Giới hạn phá khiên: tối đa bằng {8%} HP tối đa của mục tiêu
• Thời gian tồn tại dấu Phá Sơ Hở: {15 giây}
• Sát thương kích nổ: {172.915} nội công Hỏa thương
• Giới hạn phá khiên khi kích nổ: tối đa bằng {8%} HP tối đa của mục tiêu`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/qvpp.png',
  },
  {
    name: 'Sương Diễm Trảm Phong',
    nameZh: '霜焰斩锋',
    category: 'Kỹ năng',
    monPhai: 'Vô Phong Môn',
    itemType: 'PVE',
    stats: ['Bạo Phát', 'Tầm Xa'],
    tags: ['Bạo Phát', 'Tầm Xa'],
    details: `Vung song đao thực hiện nhiều lần trảm kích, mỗi đòn đều phóng ra Băng/Hỏa gây sát thương lên mục tiêu trúng đòn.
• Song Phong: Sát thương gây lên quái tăng. Đồng thời tăng khắc chế thủ lĩnh của bản thân.`,
    detail: `• Trảm kích 1: 110.473 nội công Hỏa thương
• Trảm kích 2: 110.473 nội công Băng thương
• Trảm kích 3: 110.473 nội công Hỏa thương
• Trảm kích 4: 110.473 nội công Băng thương
• Trảm kích 5 (Hỏa): 138.092 nội công Hỏa thương
• Trảm kích 5 (Băng): 138.092 nội công Băng thương
• Sát thương lên quái tăng: 200%
• Khắc chế thủ lĩnh tăng: 4%
• Thời gian duy trì buff: 40 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/sdtp.png',
  },
  {
    name: 'Khuynh Sa Lưu Kim',
    nameZh: '倾沙流金',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'PVE',
    stats: ['Quần Thể', 'Cường Hóa', 'Trị Liệu', 'Hỗ Trợ', 'Hội Tâm', 'Toàn Kỹ Năng Tăng Cường'],
    tags: ['Quần Thể', 'Cường Hóa', 'Trị Liệu', 'Hỗ Trợ', 'Hội Tâm', 'Toàn Kỹ Năng Tăng Cường'],
    details: `Triệu hồi bích họa và cùng với nó gây sát thương. Mỗi lần thi triển kỹ năng bất kỳ sẽ tiếp tục gây sát thương, tích lũy tối đa 10 lần sẽ kích hoạt sát thương kết thúc.
• Khi Tố Tâm / Diệu Âm thi triển: Tăng hội tâm và toàn kỹ năng tăng cường cho tổ đội. Hiệu ứng tấn công chuyển thành hồi máu cho đồng đội. Buff tổ đội (quần hiệp) chỉ có thể tồn tại 1 loại.
• Di Huyền: Có thể thi triển lần nữa để di chuyển bích họa đến vị trí chỉ định và kích hoạt 1 lần tấn công. Khi bật liên chiêu, bích họa sẽ tự động di chuyển đến mục tiêu.
• Hiệu ứng mùa: Trong mùa Kim Sa Di Mộng, gây thêm 20% sát thương.
• Kỹ năng gây thêm sát thương lên quái không phải kiến trúc.`,
    detail: `• Sát thương: 64.537 nội công Thổ thương × tối đa 10 lần
• Kết thúc: 204.877 nội công Thổ thương
• Tấn công (hồi máu): 5.548 HP × tối đa 10 lần
• Kết thúc (hồi máu): 16.644 HP
• Sát thương lên quái không phải kiến trúc: +300%
• Toàn kỹ năng tăng cường: +1560
• Hội tâm: +520
• Thời gian buff: 30 giây
• Phạm vi cộng minh: 15
• Thời gian tồn tại bích họa: 15 giây`,
    upgrade: `• Cấp 1: Dựa theo Sức mạnh / Khí Hải, tăng sát thương khoảng 4% ~ 7%. Khi Tố Tâm / Diệu Âm dùng → thời gian buff +5 giây
• Cấp 2: Khi thi triển, nhận 35% giảm sát thương và miễn khống chế 1 giây
• Cấp 3: Khi thi triển, nhận 500 điểm hội tâm trong 35 giây. Khi Tố Tâm / Diệu Âm dùng → phạm vi hồi máu +100%
• Cấp 4: Nếu sát thương kết thúc không trúng, hoàn lại 5 giây hồi chiêu. Khi Tố Tâm / Diệu Âm dùng → giảm 5 giây hồi chiêu
• Cấp 5: Sát thương kết thúc +30%. Đồng thời nhận 700 toàn kỹ năng tăng cường. Khi Tố Tâm / Diệu Âm dùng → hiệu quả buff tăng thêm 10%`,
    imageUrl: '/images/ky-nang-quan-hiep/kslk.png',
  },
  {
    name: 'Hiệp Cốt Thành Phong',
    nameZh: '侠骨成锋',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'PVE',
    stats: ['Duy Trì', 'Giảm Sát Thương'],
    tags: ['Duy Trì', 'Giảm Sát Thương'],
    details: `• Tụ lực xoay người rồi ném phi lai cốt gây sát thương. Trong thời gian này nhận được hiệu ứng giảm sát thương và tăng tốc độ. Phi lai cốt sau khi bay đến điểm cuối sẽ bay ngược trở lại, trong lúc quay về sẽ tiếp tục bay trúng mục tiêu, tối đa 3 lượt bay.
• Quy Hồng: Trong mùa giải Quan Sơn Phi Hồng, Hiệp Cốt Thành Phong gây thêm sát thương.
• Hổ Phong: Trong quá trình bay ra, cứ sau một khoảng thời gian ngắn sẽ đánh dấu Manh Hổ lên kẻ địch trúng chiêu, khi bay trở về, nếu trúng kẻ địch đang có dấu ấn Manh Hổ, sẽ gây thêm sát thương.
• Trấn Ác: Kỹ năng tăng sát thương lên quái vật, không phải kiến trúc.`,
    detail: `• Sát thương khi phi lai cốt bay ra: 85.219 nội công Kim thương.
• Sát thương khi phi lai cốt bay về: 76.697 nội công Kim thương.
• Tăng sát thương lên kẻ địch có dấu ấn Manh Hổ: 30%
• Số lần phi lai cốt bay tối đa: 4 lần.
• Tăng sát thương lên quái vật: 150%
• Giảm sát thương khi tụ lực: 30%
• Tăng tốc độ di chuyển khi tụ lực: 30%
• Tăng sát thương trong mùa giải Quan Sơn Phi Hồng: 20%`,
    upgrade: `• Cấp 1: tăng sát thương, khoảng 4% – 7% dựa theo Sức Mạnh, Khí Hải.
• Cấp 2: Khi phi lai cốt bay về, mỗi khi gây sát thương lên một kẻ địch có dấu ấn Manh Hổ, thời gian hồi chiêu của kỹ năng giảm 1 giây.
• Cấp 3: Sau khi thi triển kỹ năng, nhận 450 Hội Tâm, duy trì 30 giây.
• Cấp 4: Khi thi triển kỹ năng, nhận 20% Phòng Ngự Thủ Lĩnh, duy trì 3 giây, mỗi lần đánh ra phi lai cốt sẽ gia hạn thời gian hiệu lực, không cộng dồn.
• Cấp 5: Tăng 10% sát thương trong quá trình phi lai cốt bay về và tăng 10% sát thương khi kích hoạt dấu ấn Manh Hổ. Sau khi thi triển kỹ năng, nhận 600 điểm tăng cường toàn bộ kỹ năng, duy trì 30 giây.`,
    imageUrl: '/images/ky-nang-quan-hiep/hctp.png',
  },
  {
    name: 'Xích Đoạn Kinh Đào',
    nameZh: '尺断惊涛',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'PVE',
    stats: ['Kỹ Năng Bạo Phát', 'Giảm Sát Thương'],
    tags: ['Kỹ Năng Bạo Phát', 'Giảm Sát Thương'],
    details: `• Ngưng tụ sức mạnh trong từng tấc kiếm rồi tung ra đòn chém, đồng thời phát ra kiếm khí gây nhiều lần sát thương chém liên tục. Sau đó kỹ năng kích nổ, gây sát thương bạo phát. Trong thời gian thi triển, nhận hiệu quả giảm sát thương từ quái vật. Nếu không đánh trúng mục tiêu gây sát thương chém, sẽ được hoàn lại một phần thời gian hồi chiêu.
• Vấn Lan: Khi ở Tư thế Thiết Y là Ngự hoặc Tư thế Thương Lan là Trấn Hải, Thi triển kỹ năng sẽ nhận hiệu quả giảm sát thương từ Thủ Lĩnh, kéo dài trong một khoảng thời gian nhất định.
• Quán Thông: Trong thời gian thi triển kỹ năng, hồi lại mana của hệ phái (ví dụ: nội lực, khí, kiếm ý…).
• Thừa Phong: Tăng sát thương gây lên quái vật khi sử dụng kỹ năng.`,
    detail: `• Sát thương 6 lần cắt: 37.167 nội công Thuỷ thương.
• Sát thương nổ (bạo phát sau khi chém): 251.298 nội công Thuỷ thương.
• Hoàn trả hồi chiêu khi không trúng: 3 giây.
• Hiệu quả giảm sát thương từ Thủ Lĩnh: 6% + 3.000 điểm, kéo dài mỗi 3 giây
• Giảm sát thương nhận từ quái vật: 35% trong thời gian thi triển kỹ năng.
• Tăng sát thương gây lên quái vật: 60%.
• Giảm sát thương khi nhiều người trúng cùng một mục tiêu người chơi (PvP).`,
    upgrade: `• Cấp 1: Dựa trên Sức Mạnh hoặc Khí Hải để tăng sát thương khoảng 4$ đến 7%
• Cấp 2: Mỗi lần kiếm khí gây sát thương, sẽ tăng 3% sát thương của vụ nổ cuối cùng, cộng dồn tối đa 18%.
• Cấp 3: Sau khi thi triển kỹ năng, tăng thêm 350 Hội Tâm trong 30 giây.
• Cấp 4: Khi đòn chém không trúng, thời gian hồi chiêu hoàn trả tăng thêm 1 giây. Tổng cộng có thể hoàn lại tối đa 20 giây hồi chiêu.
• Cấp 5: Sau khi tung kỹ năng, tăng thêm 500 điểm sát thương toàn bộ kỹ năng trong 30 giây.`,
    imageUrl: '/images/ky-nang-quan-hiep/xdkd.png',
  },
  {
    name: 'Lưu Nguyệt Vô Ngân',
    nameZh: '流月无痕',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Vô Địch', 'Bá Thể', 'Kỹ Năng Di Chuyển', 'Khắc Chế Thủ Lĩnh', 'Giảm Sát Thương', 'Tăng Sát Thương'],
    tags: ['Nhóm', 'Vô Địch', 'Bá Thể', 'Kỹ Năng Di Chuyển', 'Khắc Chế Thủ Lĩnh', 'Giảm Sát Thương', 'Tăng Sát Thương'],
    details: `• Khi thi triển nhận được trạng thái bá thể ngắn hạn và giảm sát thương, liên tục phóng ám khí ra xung quanh gây sát thương. Sau đó nhận trạng thái vô địch và Khắc Chế Thủ Lĩnh, kết thúc chiêu có thể ấn Yến Hồi Phong để di chuyển một khoảng ngắn.
• Phất Y: Sau khi thi triển, trong một khoảng thời gian, nếu bản thân bị khống chế mạnh và xung quanh có ít nhất 2 người chơi địch, sẽ tự động né tránh, nhận được bá thể ngắn hạn, không thể bị chọn làm mục tiêu và giảm sát thương, đồng thời gây sát thương xung quanh và hồi một lượng nhỏ khí huyết. Trong thời gian hồi chiêu, toàn đội chỉ được kích hoạt tối đa 2 lần hiệu ứng này.
• Phong Duệ: Tăng sát thương gây lên quái (không phải kiến trúc) và người chơi đang ở trạng thái bá thể.`,
    detail: `• Sát thương ám khí: 24.781 nội công Lôi thương, tổng cộng 6 lần.
• Hiệu quả giảm sát thương: 35% trong 0.4 giây.
• Thời gian duy trì vô địch: 1,6 giây.
• Tăng tốc độ di chuyển khi thi triển: 100% trong 1.5 giây.
• Khắc Chế Thủ Lĩnh tăng: 2,5% + 540, kéo dài 40 giây.
• Sát thương khi lướt né: 34.417 nội công Lôi thương.
• Giảm sát thương sau khi lướt: 40% trong 3 giây.
• Hồi phục sau khi lướt: 2.000 điểm khí huyết.
• Tăng sát thương lên quái vật: 300%
• Tăng sát thương lên người chơi có bá thể: 50%
• Khi nhiều người chơi đánh trúng cùng một mục tiêu người chơi thì sát thương bị giảm mạnh.`,
    upgrade: `• Cấp 1: Tăng 50% tốc độ di chuyển sau khi lướt, duy trì 1 giây.
• Cấp 2: Giảm thời gian hồi chiêu đi 3 giây.
• Cấp 3: Dựa theo Thân Pháp, tăng sát thương kỹ năng khoảng 4% đến 7%.
• Cấp 4: Sau khi lướt, sát thương nhận vào từ mục tiêu có bá thể/miễn khống chế giảm thêm 25%.
• Cấp 5: Số lần lướt tăng lên thành 3 lần.`,
    imageUrl: '/images/ky-nang-quan-hiep/lnvn.png',
  },
  {
    name: 'Trục Luật Lưu Hoa',
    nameZh: '逐律流华',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'PVE - PVP',
    stats: ['Nhóm', 'Cường Hoá', 'Giảm Hồi Chiêu', 'Sát Thương Nguyên Tố', 'Khắc Chế Thủ Lĩnh', 'Tốc Độ Di Chuyển'],
    tags: ['Nhóm', 'Cường Hoá', 'Giảm Hồi Chiêu', 'Sát Thương Nguyên Tố', 'Khắc Chế Thủ Lĩnh', 'Tốc Độ Di Chuyển'],
    details: `• Mở bản phổ tăng Công Kích Nguyên Tố và Khắc Chế Thủ Lĩnh toàn đội. Hiệu quả tăng cường cho tổ đội (Quần Hiệp) chỉ có thể có hiệu lực một loại duy nhất.
• Hòa Khúc: Khi thành viên tổ đội đi qua bản phổ, tăng Tốc Độ Di Chuyển. Khi hiệu quả Hòa Khúc kết thúc, lập tức rút ngắn thời gian hồi còn lại của kỹ năng Quần Hiệp. Không thể giảm hồi của Trùng Luật Lưu Hoa, Cẩm Huyền Sinh Liên.
• Dư Âm: Hiệu quả Hòa Khúc trong 40 giây sẽ không thể kích hoạt lại lần nữa.`,
    detail: `• Khắc Chế Thủ Lĩnh tăng 349
• Tấn công toàn nguyên tố tăng 9
• Hiệu quả duy trì 30 giây
• Tốc độ di chuyển từ Hòa Khúc tăng 30% / 6 giây.
• Thời gian hồi kỹ năng Quần Hiệp từ Hòa Khúc giảm 4% (tối đa 1 giây).`,
    upgrade: `• Cấp 1: Thời gian duy trì hiệu quả tăng thêm 5 giây.
• Cấp 2: Thời gian hồi của kỹ năng và hiệu ứng "Dư Âm" giảm 5 giây.
• Cấp 3: Khi thành viên tổ đội kích hoạt Hòa Khúc, lập tức xóa 2 hiệu ứng bất lợi ngẫu nhiên và nhận hiệu quả giảm sát thương 15% trong 6 giây.
• Cấp 4: Khi Hòa Khúc kết thúc, giảm hồi chiêu kỹ năng Quần Hiệp tăng lên 7% (tối đa 1.5 giây). Không thể giảm hồi của Trục Luật Lưu Hoa và Cẩm Huyền Sinh Liên.
• Cấp 5: Hiệu quả tăng cường nhận được tăng thêm 10%.`,
    imageUrl: '/images/ky-nang-quan-hiep/tllh.png',
  },
  {
    name: 'Phượng Trán Chu Hoa',
    nameZh: '凤绽朱华',
    category: 'Kỹ năng',
    monPhai: 'Phượng Thành',
    itemType: 'PVP',
    stats: ['Nhóm', 'Dịch Chuyển', 'Phản Kích', 'Phong Mạch'],
    tags: ['Nhóm', 'Dịch Chuyển', 'Phản Kích', 'Phong Mạch'],
    details: `• Giương ám khí. Trong thời gian này, khi bị kẻ địch có Bá Thể, Vô Địch, Miễn Khống tấn công, sẽ lùi về sau và phóng ám khí, kèm hiệu ứng phản kích và phong mạch. Trong thời gian hiệu lực, nếu thi triển bất kỳ kỹ năng nào khác, hiệu ứng phản kích sẽ bị hủy.
• Phượng Vũ: Trong lúc phóng ám khí, né tránh các đòn tấn công của kẻ địch có Bá Thể, Vô Địch, Miễn Khống trong phạm vi nhất định. Nếu không kích hoạt phản kích, thời gian hồi chiêu giảm mạnh.
• Lẫm Phong: Khi bản thân mang trên 2 loại kỹ năng Bá Thể, Vô Địch, thời gian hồi chiêu sẽ tăng theo số lượng đang mang.
• Khinh Hồng: Khi trang bị động tác đi chậm "Phiến Ngữ - 扇语", trong thời gian kỹ năng, tư thế đi chậm sẽ được thay thế bằng Phiến Ngữ - 扇语.`,
    detail: `• Thời gian duy trì hiệu ứng phản kích: 4 giây.
• Khoảng cách phản kích: 9 trượng.
• Sát thương phi châm hất lên: 71.787 nội công Phong thương.
• Sát thương ám khí phi châm: 20.511 nội công Phong thương, tổng 6 lần.
• Sát thương kết liễu: 218.778 nội công Phong thương.
• Thời gian khống chế Phong Mạch: 3 giây.
• Giảm hồi chiêu khi không kích hoạt phản kích: 6 giây.
• Khi mang số kỹ năng Bá Thể, Vô Địch vượt quá 2.
• Tăng thời gian hồi chiêu: 5 giây/mỗi kỹ năng.`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/ptch.png',
  },
  {
    name: 'Thiên Ti Nhất Thoa',
    nameZh: '千丝一梭',
    category: 'Kỹ năng',
    monPhai: 'Phượng Thành',
    itemType: 'PVE',
    stats: ['Duy Trì', 'Tầm Xa'],
    tags: ['Duy Trì', 'Tầm Xa'],
    details: `Nhẹ nhàng múa và ném quạt về phía mục tiêu. Khi quạt đến vị trí mục tiêu, sẽ phóng ra phi châm liên tục gây sát thương, cuối cùng thu lại kim tuyến để gây sát thương kết liễu.`,
    detail: `• Sát thương quạt bay: 34.185 nội công Phong thương.
• Sát thương duy trì của phi châm: 25.639 nội công Phong thương, tổng 3 đoạn.
• Sát thương kết liễu của phi châm: 68.369 nội công Phong thương.
• Tăng sát thương lên quái vật: 300%`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/ttnt.png',
  },
  {
    name: 'Thiên Nhận Nhất Niệm',
    nameZh: '千刃一念',
    category: 'Kỹ năng',
    monPhai: 'Bách Gia',
    itemType: 'PVE',
    stats: ['Kỹ Năng Đơn Thể', 'Kỹ Năng Triệu Hồi'],
    tags: ['Kỹ Năng Đơn Thể', 'Kỹ Năng Triệu Hồi'],
    details: `• Triệu hồi Huyền Kiếm để phối hợp chiến đấu, định kỳ chém vào mục tiêu hiện tại.
• Trấn Sơn Trảm Nhạc: Khi người chơi sử dụng kỹ năng loại bạo phát hoặc duy trì, đòn đánh tiếp theo của Huyền Kiếm được cường hóa thành Quyển Tàn Vân. Khi sử dụng kỹ năng Nhóm hoặc đơn thể, đòn đánh tiếp theo của Huyền Kiếm được cường hóa thành Túng Hoành Đoạn. Khi thi triển kỹ năng loại khiêu khích, đòn tiếp theo được cường hóa thành Ngự Trùng Loan. Mỗi loại tấn công có thời gian hồi riêng biệt.
• Kiếm Quán Cửu Tiêu: Tăng mạnh sát thương của kỹ năng này lên quái vật. Khi Huyền Kiếm thực hiện ít nhất 3 đòn tấn công cường hóa, đòn tiếp theo sẽ được cường hóa thành Thiên Môn Trụy. Hiệu ứng này chỉ kích hoạt 1 lần trong mỗi lần thi triển kỹ năng.`,
    detail: `• Sát thương chém của Huyền Kiếm: 33.429 nội công Kim thương.
• Sát thương Quyển Tàn Vân: 78.655 nội công Kim thương. Thời gian hồi: 18 giây.
• Sát thương Túng Hoành Đoạn: 52.437 nội công Kim thương. Thời gian hồi: 8 giây.
• Sát thương Ngự Trùng Loan: 82.588 nội công Kim thương. Thời gian hồi: 40 giây.
• Sát thương Thiên Môn Trụy: 78.655 nội công Kim thương.
• Thiên Môn - Quy Tâm gây thêm: 55.059 nội công Kim thương.
• Thời gian tồn tại của Huyền Kiếm: 40 giây.
• Tăng sát thương lên quái vật: 300%`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/tnnn.png',
  },
  {
    name: 'Tứ Đại Giai Không',
    nameZh: '四大皆空',
    category: 'Kỹ năng',
    monPhai: 'Bách Gia',
    itemType: 'PVP',
    stats: ['Giảm Sát Thương'],
    tags: ['Giảm Sát Thương'],
    details: `Tạo ra một vùng sương mù ảo ảnh bao quanh bản thân, trong thời gian hiệu lực sẽ giảm nhẹ 15% sát thương nhận vào, đồng thời giảm mạnh 24% sát thương đến từ kẻ địch đang ở trạng thái Bá Thể hoặc Vô Địch. Khi mang theo kỹ năng này, sẽ tự động giảm nhẹ 10% sát thương nhận từ địch có trạng thái Bá Thể hoặc Vô Địch, kể cả khi không chủ động sử dụng chiêu. Có thể sử dụng ngay cả khi đang bị khống chế. Tuy nhiên, hiệu quả này có thể bị xóa bỏ (giải trừ hiệu ứng). Khi có từ 3 người trở lên trong tổ đội cùng sử dụng kỹ năng này, sẽ phát sinh thời gian hồi chiêu phụ thêm 20 giây (Chỉ áp dụng trong chế độ Tỷ Võ Đại Hội và Liên đấu Bang Hội).`,
    detail: `• Khi kích hoạt, giảm sát thương nhận vào: 15%
• Giảm sát thương từ kẻ địch ở trạng thái Bá Thể / Vô Địch: 24%
• Khi mang theo kỹ năng, tự động giảm sát thương từ kẻ địch có Bá Thể / Vô Địch: 10% (không cần kích hoạt).
• Thời gian hiệu lực: 12.5 giây.`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/tdgk.png',
  },
  {
    name: 'Thiện Ác Đoạn - Bạch',
    nameZh: '不攻',
    category: 'Kỹ năng',
    monPhai: 'Bách Gia',
    itemType: 'PVP',
    stats: ['Giảm Sát Thương'],
    tags: ['Giảm Sát Thương'],
    details: `Khi kích hoạt, nhận hiệu ứng giảm nhẹ 15% sát thương (hiệu ứng này có thể bị xóa bỏ). Khi mang theo kỹ năng, nếu bị khống chế sẽ nhận thêm 25% giảm sát thương. Nếu trong tổ đội có từ 3 người trở lên sử dụng kỹ năng này, sẽ bị tăng thêm 20 giây hồi chiêu (Chỉ áp dụng trong chế độ Tỷ Võ Đại Hội và Liên Đấu Bang Hội).`,
    detail: `• Khi mang theo kỹ năng, nếu bị khống chế sẽ nhận giảm sát thương 25%.
• Khi kích hoạt, nhận giảm sát thương 15%.
• Thời gian hiệu lực: 12.5 giây.`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/tadb.png',
  },
  {
    name: 'Bất Công',
    nameZh: '善恶断・白',
    category: 'Kỹ năng',
    monPhai: 'Long Môn Khách Sạn',
    itemType: 'PVP',
    stats: ['Nhóm', 'Bá Thể', 'Giảm Sát Thương'],
    tags: ['Nhóm', 'Bá Thể', 'Giảm Sát Thương'],
    details: `• Kích hoạt sẽ nhận hiệu quả giảm 60% sát thương và trạng thái Bá Thể tạm thời. Khi xung quanh có 2 người chơi địch trở lên, sẽ duy trì trạng thái Bá Thể liên tục. Sau một khoảng thời gian nhất định hoặc khi nhận đủ lượng sát thương tích lũy, sẽ kích phát một đòn vung đao trong trạng thái Bá Thể, đồng thời tiếp tục nhận hiệu quả giảm 60% sát thương
• Chuyển Thủ Vi Công: Dựa theo tổng sát thương hoặc chiêu thức đã chịu trong giai đoạn phòng thủ, sẽ tăng sát thương của đòn vung đao. Nếu đòn vung đao được kích hoạt do tích lũy sát thương, sẽ hất tung kẻ địch trúng phải.
• Quyết Thắng: Đòn vung đao có thể phá chiêu Bất Công của người chơi khác.
• Nếu tổ đội có từ 3 người trở lên sử dụng kỹ năng này, sẽ bị tăng thêm 20 giây thời gian hồi chiêu (Chỉ áp dụng trong các chế độ Tỷ Võ Đại Hội và Liên Đấu Bang Hội).`,
    detail: `• Giảm sát thương khi thủ đao: 60%
• Thời gian Bá Thể ban đầu: 1 giây.
• Sát thương tối đa của đòn vung đao: 234.621 nội công hỏa thương.
• Khoảng cách lao tới tối đa: 8  trượng (~26.6 mét).
• Thời gian hất tung khi kích hoạt sát thương tối đa: khoảng 1.2 giây.
• Giảm sát thương trong thời gian vung đao: 60%`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-bach-gia/bc.png',
  },
  {
    name: 'Giác · Kiếm Đãng Vân Tâm',
    nameZh: '觉·剑荡云心',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Duy trì · Dịch chuyển',
    stats: ['Duy Trì', 'Dịch Chuyển', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    tags: ['Duy Trì', 'Dịch Chuyển', 'Miễn Khống Chế', 'Giảm Sát Thương'],
    details: `• Nhận miễn khống chế trong thời gian ngắn và giảm sát thương, vung kiếm chém ngang. Khi trúng mục tiêu sẽ kích hoạt thêm một lần trảm kích, gây sát thương cao hơn.
• Bôn Lôi: Đòn giai đoạn 2 khi trúng kẻ địch sẽ gắn Ấn Lôi Đình. Mỗi lần thi triển kỹ năng khác nhau trúng mục tiêu có ấn sẽ kích hoạt thêm 1 lần sát thương phụ.
• Tàng Phong: Khi tấn công không trúng, hoàn trả một phần thời gian hồi chiêu.
• Nhiều người đánh trúng cùng một người chơi: sát thương sẽ giảm mạnh và không thể gắn ấn.`,
    detail: `• Sát thương kiếm khí đòn 1: 132.804 nội công Lôi thương
• Hoàn hồi CD khi đánh trượt: 20 giây
• Tổng sát thương đòn 2: 398.410 nội công Lôi thương
• Giảm sát thương bản thân: 25%
• Thời gian Ấn Lôi Đình (quái): 20 giây
• Thời gian Ấn Lôi Đình (người chơi): 10 giây
• Sát thương ấn: 59.762 nội công Lôi thương
• Thuộc nội công, không chịu ảnh hưởng bởi nhãn, chính xác hay chí mạng
• Số lần kích hoạt tối đa của ấn: 10 lần`,
    upgrade: `• Cấp 1: Ấn Lôi Đình với quái: số lần kích hoạt tối đa tăng lên 15 lần. Với người chơi: thêm hiệu ứng xuyên khiên
• Cấp 2: Trong thời gian mục tiêu người chơi bị gắn Ấn Lôi Đình, khi dùng kỹ năng Dịch Chuyển có thể tiêu hao 25 điểm khinh công để giảm 4,7 giây hồi chiêu, nhận giảm sát thương 20%, tồn tại ngắn và cộng dồn thêm 2 giây (Không kích hoạt nếu đang Bá Thể)
• Cấp 3: Sau khi thi triển, tăng 400 điểm sát thương cho kỹ năng duy trì và kỹ năng đơn mục tiêu, kéo dài 25 giây, không cộng hưởng với Đánh Thường
• Cấp 4: Trong phạm vi kỹ năng có từ 2 kẻ địch trở lên → nhận 0,7 giây vô địch
• Cấp 5: Khi tiêu hao hoàn toàn Ấn Lôi Đình, kích hoạt thêm 10 lần sát thương của ấn`,
    imageUrl: '/images/ky-nang-quan-hiep/gkdvt.png',
  },
  {
    name: 'Giác · Long Trì Lôi Uyên',
    nameZh: '觉·龙驰雷渊',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Diện rộng · Bá thể · Giảm sát thương',
    stats: ['Nhóm', 'Diện Rộng', 'Bá Thể', 'Vô Địch', 'Giảm Sát Thương', 'Dịch Chuyển'],
    tags: ['Nhóm', 'Diện Rộng', 'Bá Thể', 'Vô Địch', 'Giảm Sát Thương', 'Dịch Chuyển'],
    details: `• Lấy thế sấm sét, dịch chuyển đến vị trí chỉ định rồi xuyên lướt liên tục gây sát thương. Kẻ địch bị trúng lặp lại bởi kỹ năng này sẽ bị suy giảm sát thương. Không thể đánh trúng mục tiêu không thể chọn hoặc đang tàng hình.
• Đòn kết thúc gây một lần quét ngang lên kẻ địch xung quanh, đánh lùi mục tiêu.
• Kiếm Minh: Số kẻ địch khác nhau bị sét đánh càng nhiều, sát thương quét ngang càng cao.
• Hiệp Cốt: Khi thi triển kỹ năng, thành viên tổ đội nhận giảm sát thương từ triệu hồi phi nhân hình.
• Vô Úy: Trong thời gian thi triển, bản thân nhận Bá Thể, không thể bị chọn mục tiêu, đồng thời giảm sát thương. Mỗi lần sét đánh trúng kẻ địch, nếu xung quanh có đủ số lượng địch, sẽ nhận thêm hiệu ứng Vô Địch.`,
    detail: `• Sát thương sét: 215.806 nội công Lôi thương
• Số lần gây sát thương (đơn / nhiều mục tiêu): tối đa 6 / 9 lần
• Sát thương khi trúng lặp: suy giảm còn 10%
• Thời gian kiểm tra trúng lặp: 3 giây
• Sát thương kết thúc: 282.207 nội công Lôi thương
• Tăng sát thương kết thúc: +8% / mỗi địch khác nhau, tối đa 48%
• Giảm sát thương từ triệu hồi phi nhân hình: 70%, duy trì 8 giây
• Hồi hiệu ứng giảm sát thương triệu hồi: 15 giây
• Giảm sát thương giai đoạn khởi động: 25%
• Điều kiện kích hoạt Vô Địch: trong phạm vi 15 trượng có hơn 2 kẻ địch`,
    upgrade: `• Cấp 1: Tăng uy lực chiêu thức theo Sức Mạnh / Khí Hải, khoảng 4% – 7%
• Cấp 2: Sau khi trúng 3 kẻ địch khác nhau, mức suy giảm sát thương sét tăng lên 25%
• Cấp 3: Mỗi lần sét trúng kẻ địch khác nhau, hoàn trả 0,5 giây hồi chiêu, tối đa 2 giây
• Cấp 4: Đòn quét kết thúc nhận 25% giảm sát thương
• Cấp 5: Mỗi lần sét trúng kẻ địch khác nhau, mức tăng sát thương đòn kết thúc nâng lên 12% / địch, tối đa 72%`,
    imageUrl: '/images/ky-nang-quan-hiep/gltlu.png',
  },
  {
    name: 'Trạc Trần Trảm Lãng',
    nameZh: '浊尘斩浪',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Duy trì · Tầm xa',
    stats: ['Duy Trì', 'Tầm Xa'],
    tags: ['Duy Trì', 'Tầm Xa'],
    details: `• Vung kiếm điều khiển dòng nước, hóa thủy thành tàn ảnh, tung ra nhiều lần trảm kích lên mục tiêu trong phạm vi.
• Lan Khởi: Khi thi triển, nếu có 1 tầng nạp, sẽ tiêu hao 1 tầng, phát động 4 lần trảm kích, gây sát thương cao.
• Triều Khuynh: Khi thi triển, nếu có 2 tầng nạp, sẽ tiêu hao 2 tầng, phát động 5 lần trảm kích và kèm đòn kết thúc, gây lượng sát thương cộng thêm rất lớn.
• Liễm Ảnh: Sát thương lên quái không phải kiến trúc được tăng mạnh.
• Ngưng Phong: Với mục tiêu được chọn, gây tăng 10% sát thương.`,
    detail: `• Thời gian nạp: 17 giây
• Sát thương trảm kích: 60.470 nội công Thủy thương, 4 lần
• Sát thương trảm kích cường hóa: 60.470 nội công Thủy thương, 5 lần
• Sát thương trảm kích kết thúc: 73.743 nội công Thủy thương
• Tăng sát thương lên mục tiêu chọn: +10%
• Tăng sát thương lên quái: +300%`,
    upgrade: `• Cấp 1: Tăng sát thương theo Sức Mạnh / Khí Hải, khoảng 4% – 7%
• Cấp 2: Khi thi triển kỹ năng tấn công kèm di chuyển, giảm 0,5 giây thời gian nạp mỗi tầng, tối đa 2 giây
• Cấp 3: Sau khi thi triển, tăng 400 điểm sát thương cho kỹ năng duy trì và kỹ năng diện rộng, duy trì 30 giây
• Cấp 4: Sau khi thi triển, trong 6 giây tăng 40% tốc độ di chuyển và tốc độ hồi khinh công
• Cấp 5: Sau khi thi triển, tăng 200 điểm chính xác, duy trì 30 giây`,
    imageUrl: '/images/ky-nang-quan-hiep/tttl.png',
  },
  {
    name: 'Mật Ngữ Hàm Hương',
    nameZh: '密语含香',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Đơn mục tiêu · Giảm thù hận',
    stats: ['Đơn Thể', 'Giảm Thù Hận', 'Tăng Sát Thương'],
    tags: ['Đơn Thể', 'Giảm Thù Hận', 'Tăng Sát Thương'],
    details: `• Gắn Ấn Hoa Biện lên 1 thủ lĩnh hoặc quái tinh anh. Khi tấn công kẻ địch bị đánh dấu, sẽ tăng lực tấn công và sát thương gây ra.
• Hiệu ứng này có thể bị giải trừ.`,
    detail: `• Tăng lực tấn công mà quái phải chịu: +999
• Tăng sát thương mà quái phải chịu: +4%
• Thời gian hiệu lực: 30 giây`,
    upgrade: `• Cấp 1: Tăng thêm 35 điểm hiệu quả cộng lực tấn công
• Cấp 2: Trong thời gian ấn có hiệu lực, giảm 15% lượng thù hận tạo ra
• Cấp 3: Trong thời gian duy trì, giảm 20% sát thương của 1 lần trúng đòn sát thương lớn, chỉ áp dụng với kỹ năng có hệ số trên 300%
• Cấp 4: Tăng thêm 35 điểm hiệu quả cộng lực tấn công
• Cấp 5: Giảm 3 giây hồi chiêu của kỹ năng`,
    imageUrl: '/images/ky-nang-quan-hiep/mnhh.png',
  },
  {
    name: 'Binh Phong Hiện Thế',
    nameZh: '兵锋现世',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Duy trì · Cường hóa',
    stats: ['Duy Trì', 'Cường Hóa', 'Tăng Tấn Công'],
    tags: ['Duy Trì', 'Cường Hóa', 'Tăng Tấn Công'],
    details: `• Cường hóa binh khí bản thân, tăng tấn công nội công và ngoại công. Có thể liên tục sử dụng để nâng cấp hiệu quả cường hóa, tuy nhiên nếu vận may không tốt có thể thất bại, khiến giảm cấp cường hóa.
• Trung Can Nghĩa Đảm: Khi rơi vào trạng thái trọng thương – nguy kịch, cấp cường hóa không bị xóa. Tuy nhiên, nếu cấp cường hóa ≥ 5, cấp cường hóa sẽ giảm 2 cấp.`,
    detail: `• Cấp Cường Hóa – Thần Binh Đúc Tạo:
• Cấp 1: Tăng 309 điểm tấn công
• Cấp 2: Tăng 387 điểm tấn công
• Cấp 3: Tăng 464 điểm tấn công
• Cấp 4: Tăng 619 điểm tấn công
• Cấp 5: Tăng 774 điểm tấn công
• Cấp 6: Tăng 929 điểm tấn công
• Thời gian duy trì cường hóa: 40 giây
• Tỷ lệ thành công mỗi lần cường hóa: 90%
• Sau khi đạt +6, sẽ không còn thất bại`,
    upgrade: `• Cấp 1: Dựa trên Sức Mạnh / Khí Hải, tăng tỷ lệ thành công khoảng 4% – 7%
• Cấp 2: Khi cường hóa thành công, tăng 1%: Tốc độ tấn công, Tấn công, Phạm vi tấn công
• Cấp 3: Dựa trên thuộc tính May Mắn, tăng tỷ lệ thành công khoảng 1% – 6%
• Cấp 4: Giảm 3 giây hồi chiêu. Khi không trong trạng thái chiến đấu, hồi chiêu giảm xuống còn vài giây
• Cấp 5: Thời gian duy trì buff tăng mạnh. Nếu cường hóa đạt +6, thời gian duy trì tăng lên 3600 giây`,
    imageUrl: '/images/ky-nang-quan-hiep/bpht.png',
  },
  {
    name: 'Giác · Vân Ảnh Trạc Hương',
    nameZh: '觉·云影浊香',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Bạo phát · Giảm sát thương · Vô địch',
    stats: ['Bạo Phát', 'Vô Địch', 'Bá Thể', 'Giảm Sát Thương', 'Khống Chế'],
    tags: ['Bạo Phát', 'Vô Địch', 'Bá Thể', 'Giảm Sát Thương', 'Khống Chế'],
    details: `• Hóa thân thành phi hoa, thi triển nhiều đòn trảm hoa mỹ, để lại cánh hoa rồi kích nổ.
• Chưởng Kiếm: Trong thời gian thi triển, không thể bị chọn làm mục tiêu. Nếu trong phạm vi có từ 2 kẻ địch trở lên, nhận thêm Vô Địch. Sau khi thi triển, nhận Khắc Chế Thủ Lĩnh.
• Phá Kiếm Thức: Khi thi triển, sẽ cố gắng Khán Phá kỹ năng Quần Hiệp mà mục tiêu đang mang theo.
• Khán Phá thành công: Nhận Bá Thể, gây Choáng lên mục tiêu bị Khán Phá. Trong một khoảng thời gian, miễn nhiễm hiệu ứng khống chế từ Quần Hiệp đó và giảm sát thương nhận từ Quần Hiệp đó.
• Bất Khả Khán Phá: Vân Ảnh Trạc Hương, Giang Hồ Duyên Khởi, Các Quần Hiệp kỹ năng ra mắt sau mùa Thiên Cơ Kỷ Niên`,
    detail: `• Trảm Kích Sát Thương: 41.834 nội công Mộc thương, tổng 11 lần
• Dẫn Bạo Sát Thương: 250.999 nội công Mộc thương
• Vô Địch Phán Định: Trong 10 trượng, kẻ địch ≥ 2
• Sát Thương Giảm Miễn: 25%
• Khắc Chế Thủ Lĩnh Tăng: 5% + 549
• Liệt Bạch Hiệu Quả Duy Trì: 30 giây
• Khán Phá Mục Tiêu Choáng: 1,5 giây
• Khán Phá Duy Trì: 40 giây
• Khán Phá Quần Hiệp Sát Thương Giảm: 25%
• Khi nhiều người chơi trúng cùng một mục tiêu người chơi, sát thương giảm mạnh`,
    upgrade: `• Cấp 1: Khi Khán Phá Quần Hiệp, nếu trong đội đối phương có thành viên mang cùng Quần Hiệp kỹ năng, mỗi kỹ năng trùng nhau sẽ: Hồi ngay 2000 Khí Huyết cho bản thân và gây thêm 2000 sát thương lên mục tiêu bị Khán Phá
• Cấp 2: Sát thương nhận từ Quần Hiệp bị Khán Phá giảm thêm 30%
• Cấp 3: Trảm Kích Sát Thương tăng 10%, Dẫn Bạo Sát Thương tăng 15%
• Cấp 4: Tầm thi triển tăng 3. Đối với mục tiêu bị Khán Phá chưa chịu khống chế, sát thương tăng 20%
• Cấp 5: Khi Khán Phá hoặc đánh trúng quái vật, hoàn lại 3 giây hồi chiêu`,
    imageUrl: '/images/ky-nang-quan-hiep/gvath.png',
  },
  {
    name: 'Bích Vân Vấn Địch',
    nameZh: '碧云问笛',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Nhóm · Bá Thể · Trị Liệu · Hỗ Trợ',
    stats: ['Nhóm', 'Bá Thể', 'Trị Liệu', 'Hỗ Trợ', 'Giảm Sát Thương'],
    tags: ['Nhóm', 'Bá Thể', 'Trị Liệu', 'Hỗ Trợ', 'Giảm Sát Thương'],
    details: `• Khinh thân bay lên không trung, thổi sáo trúc, định kỳ trị liệu cho đồng minh xung quanh, đồng thời gây sát thương và đánh bật kẻ địch. Kỹ năng có thể kích hoạt khi đang trên không hoặc bị đánh bay.
• Địch Thanh: Trong thời gian thổi sáo, có thể nhấn lần nữa để bắn sóng âm vào mục tiêu địch. Sóng âm sẽ bật nảy theo chiều kim đồng hồ giữa các kẻ địch xung quanh, mỗi lần bật nảy sát thương giảm 50%. Tối đa chỉ có thể thi triển 1 lần Địch Thanh.`,
    detail: `• Tổng sát thương thổi sáo: 726.919 nội công Phong thương
• Tổng trị liệu thổi sáo: 454.293 khí huyết
• Phong Quyển giảm tốc: 35%, duy trì ngắn
• Sát thương ban đầu Hồi Âm Địch: 129.230 nội công Phong thương
• Giảm sát thương bản thân: 25%
• Tốc độ di chuyển bản thân: +20%`,
    upgrade: `• Cấp 1: Dựa theo Thân Pháp, tăng sát thương và trị liệu kỹ năng khoảng 4%–7%
• Cấp 2: Mỗi lần trị liệu tăng nội công & ngoại công của đồng minh 3%, cộng dồn tối đa 9%, duy trì 6 giây
• Cấp 3: Trong thời gian diễn tấu, tốc độ di chuyển +40%
• Cấp 4: Giảm sát thương +10%
• Cấp 5: Sau khi sóng âm bật nảy, sẽ quay về bản thân, cho phép hồi thêm 1 lần Địch Thanh`,
    imageUrl: '/images/ky-nang-quan-hiep/bvvd.png',
  },
  {
    name: 'Phi Ty Hí Ngẫu',
    nameZh: '飞丝戏偶',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Đơn thể · Tầm xa',
    stats: ['Đơn Thể', 'Tầm Xa', 'Miễn Khống Chế', 'Bạo Phát'],
    tags: ['Đơn Thể', 'Tầm Xa', 'Miễn Khống Chế', 'Bạo Phát'],
    details: `• Thúc động tơ tuyến, tạo ra hình nhân gỗ truy kích kẻ địch, khi thi triển nhận miễn khống chế. Hình nhân gỗ quấn chặt mục tiêu, gây nhiều đợt sát thương, đòn cuối cùng gây sát thương rất cao.
• Khiên Ty: Khi tung đòn sát thương cuối, nếu xung quanh có kẻ địch mang cùng kỹ năng quần hiệp với mục tiêu bị truy kích, tơ tuyến sẽ tái sinh, tách ra tối đa 2 hình nhân mới tấn công kẻ địch. Hiệu ứng này dùng thời gian hồi chung toàn đội.
• Trấn Tà: Có hiệu quả khắc chế đặc biệt với quái vật, tăng sát thương.
• Áp Trục: Trong mùa giải Thương Lan Phá Lãng, sát thương của Phi Ty Hí Ngẫu tăng thêm 10% (không hiển thị trực tiếp trong mô tả chỉ số)`,
    detail: `• Sát thương quấn quanh: 58.555 nội công Mộc thương, tổng 4 đoạn
• Sát thương bạo phát: 203.054 nội công Mộc thương
• Thời gian miễn khống: 0.3 giây
• Tỷ lệ kế thừa sát thương mộc ngẫu phân liệt: 35%
• Sát thương lên quái vật tăng: 250%
• Hồi chiêu hiệu ứng Khiên Ty: 21 giây
• Khi nhiều người cùng đánh trúng mục tiêu người chơi, sát thương giảm mạnh`,
    upgrade: `• Cấp 1: Dựa theo Sức Mạnh / Khí Hải, tăng sát thương khoảng 4%–7%
• Cấp 2: Sau khi thi triển, hồi 50% khinh công, tốc độ di chuyển +100%, duy trì 5 giây
• Cấp 3: Sau khi thi triển kỹ năng, toàn nguyên tố +210 (30 giây), công kích +330 (30 giây)
• Cấp 4: Sát thương nhận từ mục tiêu bị mộc ngẫu chính truy kích giảm: quái vật -20%, người chơi -10%, duy trì 5 giây
• Cấp 5: Đòn sát thương cuối tăng thêm 15%, sau khi thi triển kỹ năng tăng 300 điểm hội trong 30 giây`,
    imageUrl: '/images/ky-nang-quan-hiep/pthn.png',
  },
  {
    name: 'Quyền Hám Sơn Nhạc',
    nameZh: '拳撼山岳',
    category: 'Kỹ năng',
    monPhai: 'Quần Hiệp',
    itemType: 'Bạo phát · Khiên chắn · Khống chế mạnh · Vô địch',
    stats: ['Bạo Phát', 'Khiên Chắn', 'Vô Địch', 'Khống Chế', 'Giải Khống Chế'],
    tags: ['Bạo Phát', 'Khiên Chắn', 'Vô Địch', 'Khống Chế', 'Giải Khống Chế'],
    details: `• Liên tục nhận khiên chắn để đỡ một lượng sát thương nhất định, đồng thời giải 1 lần khống chế mạnh, hiệu lực cho đến khi khiên hấp thụ đủ sát thương tối đa (khiên bị phá vỡ không tính vào lượng hấp thụ).
• Trong thời gian khiên tồn tại, nhấn lần 2 có thể đánh tiếp một cú đấm lao tới, nhận vô địch ngắn và gây choáng.
• Không thể đỡ kỹ năng bạo phát và kỹ năng tuyệt chiêu của Boss.
• Triều Thiên Khuyết: Giải khống chế thành công sẽ nhận vô địch ngắn, đồng thời có thể tung lại cú đấm lao tới.`,
    detail: `• Sát thương được khiên đỡ mỗi lần trúng đòn: 6.000
• Giới hạn tổng sát thương khiên hấp thụ: 30.000
• Giới hạn hấp thụ (Liên đấu Bang hội): 50.000
• Sát thương được đỡ (Luận Võ): 3.500
• Giới hạn hấp thụ (Luận Võ): 8.000
• Thời gian tồn tại khiên: 8,5 giây
• Sát thương cú đấm lao tới: 133.885 nội công Thổ thương
• Sát thương lên quái vật: tăng đến 300%
• Thời gian choáng: 2 giây (cùng mục tiêu có hồi 15 giây)`,
    upgrade: `• Cấp 1: Giới hạn hấp thụ của khiên tăng 15%. Khi ở Tư thế Thiết Y (Phá) và mang đặc tính Nhật Chiếu Chinh Y, hoặc Thiết Y (Ngự)/Thương Lan – Trấn Hải, cú đấm lần 2 được cường hóa, duy trì 5 giây
• Cấp 2: Trong thời gian khiên tồn tại, nếu nhận sát thương từ người chơi, nhận cách đỡ kỹ năng và giảm 25% sát thương. Hiệu ứng giảm sát thương có hồi 180 giây
• Cấp 3: Khi tấn công quái không phải công trình, số lần dùng cú đấm lần 2 +1
• Cấp 4: Tầm lao tới của cú đấm lần 2 +3
• Cấp 5: Khi kích hoạt đòn đầu, nhận 2 giây vô địch. Trong thời gian này, nếu dùng bất kỳ kỹ năng nào, hiệu ứng vô địch sẽ kết thúc sớm`,
    imageUrl: '/images/ky-nang-quan-hiep/qhsn.png',
  },
];
