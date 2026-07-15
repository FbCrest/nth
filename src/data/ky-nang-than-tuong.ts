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
    details: `Chỉ kiếm đến đâu, hỏa phượng từ trời giáng xuống, gây sát thương lên kẻ địch trong phạm vi, đồng thời đánh ngã quái vật ở vị trí trung tâm, kèm hiệu ứng trọng thương và thiêu đốt.
• Phượng Cầu Hoàng: Sau khi thi triển có xác suất làm mới hồi chiêu của Bình Sa Lạc Nhạn; sau khi được làm mới, tốc độ ra chiêu nhanh hơn.
• Tấu Luật: Khi bật một phím liên chiêu và tấn công quái vật, Bình Sa Lạc Nhạn sẽ tự động thi triển Dương Quan Tam Điệp, đồng thời Dương Quan Tam Điệp cũng sẽ tự động thi triển Bình Sa Lạc Nhạn.
• Thiêu đốt: Thiêu cháy kẻ địch, khiến mục tiêu chịu nội công Hỏa thương duy trì theo thời gian.
• Dư Âm: Sau khi thi triển nhận được 1 Hỏa Âm Phù.`,
    detail: `• Sát thương: 186.697 nội công Hỏa thương
• Thời gian đánh ngã quái: Khoảng 1,1 giây
• Sát thương thiêu đốt: 9.150 nội công Hỏa thương/giây
• Thời gian thiêu đốt: 3 giây
• Trọng thương: 35% trong 5 giây
• Tăng sát thương lên quái: +5%
• Thời gian hồi chiêu: 4,85 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/bsln.png',
  },
  {
    name: 'Bách Điểu Triều Phượng',
    nameZh: '百鸟朝凤',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Tầm Xa'],
    tags: ['Bạo Phát', 'Tầm Xa'],
    details: `Thi triển 3 đoạn công kích gây sát thương lên kẻ địch phía trước và khiến mục tiêu bị thiêu đốt. Khi thi triển tầm xa, hai đoạn đầu nếu trong thời gian ngắn đánh trúng cùng một mục tiêu (quái hoặc người chơi) thì sát thương sẽ bị suy giảm. Khi thi triển cận chiến, kỹ năng gây sát thương phạm vi, có xác suất kèm hiệu ứng đẩy lùi, đồng thời tăng sát thương lên mục tiêu Thủ Lĩnh.
• Phượng Cầu Hoàng: Sau khi thi triển có xác suất làm mới hồi chiêu của Bình Sa Lạc Nhạn; sau khi làm mới, tốc độ ra chiêu nhanh hơn.
• Thiêu đốt: Thiêu cháy kẻ địch, khiến mục tiêu chịu nội công Hỏa thương liên tục theo thời gian.
• Dư Âm: Sau mỗi đoạn kỹ năng được thi triển sẽ nhận 1 Hỏa Âm Phù.`,
    detail: `• Sát thương đoạn 1 tầm xa: 110.710 nội công Hỏa thương
• Sát thương đoạn 2 tầm xa: 110.710 nội công Hỏa thương
• Sát thương đoạn 3 tầm xa: 147.613 nội công Hỏa thương
• Sát thương đoạn 1 cận chiến: 100.646 nội công Hỏa thương
• Sát thương đoạn 2 cận chiến: 134.194 nội công Hỏa thương
• Sát thương đoạn 3 cận chiến: 147.613 nội công Hỏa thương
• Khi cận chiến đánh trúng Thủ Lĩnh, tổng sát thương tăng 70%
• Hai đoạn đầu nếu nhiều hỏa điểu đánh trúng cùng mục tiêu → sát thương giảm 75%
• Sát thương thiêu đốt: 9.150 nội công Hỏa thương/giây
• Thời gian thiêu đốt: 3 giây
• Thời gian hồi chiêu: 11.64 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/bdtp.png',
  },
  {
    name: 'Hữu Phượng Lai Nghi',
    nameZh: '有凤来仪',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Tầm Xa'],
    tags: ['Bạo Phát', 'Tầm Xa'],
    details: `Thi triển nhiều đoạn công kích, gây sát thương lên kẻ địch phía trước. Đoạn công kích thứ nhất sẽ triệu hồi Băng Phượng, gây sát thương lên kẻ địch phía trước. Đoạn công kích thứ hai sẽ triệu hồi Hỏa Phượng, tấn công khiến kẻ địch bị thiêu đốt, đồng thời gây thêm sát thương lên những kẻ địch đã bị Băng Phượng đánh trúng. Đoạn công kích thứ ba triệu hồi Băng Điểu liên tục lao xuống mặt đất, sau đó Hỏa Phượng từ trên trời giáng xuống, gây lượng lớn sát thương lên kẻ địch trên mặt đất.
• Phượng Minh: Sát thương gây lên quái vật được tăng thêm.
• Cầm Âm: Khi thi triển Hữu Phượng Lai Nghi, sẽ dựa theo loại đòn đánh thường hiện tại để nhận âm phù nguyên tố tương ứng.
• Hòa Minh: Khi phượng hoàng do Lưỡng Nghi Loan Âm triệu hồi còn tồn tại, các đòn tấn công của Hữu Phượng Lai Nghi sẽ tiếp tục tăng sát thương lên quái vật, đồng thời cộng thêm hiệu ứng Sương Diễm (tối đa 30 tầng), gây sát thương chu kỳ.`,
    detail: `• Sát thương đoạn 1: 62.584 nội công Băng thương
• Sát thương đoạn 2: 62.584 nội công Hỏa thương
• Nếu Băng Phượng đánh trúng mục tiêu, sát thương đoạn 2 tăng: 50%
• Tổng sát thương Băng Điểu đoạn 3: 104.306 nội công Băng thương
• Tổng sát thương Hỏa Phượng đoạn 3: 166.889 nội công Hỏa thương
• Sát thương lên quái vật tăng: 100%
• Khi Phượng Hoàng tồn tại, sát thương lên quái vật tăng: 180%
• Số tầng Sương Diễm áp dụng: 18 tầng
• Thời gian hồi chiêu: 9,7 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/hpln.png',
  },
  {
    name: 'Quan Sơn Nguyệt',
    nameZh: '关山月',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Quần Thể', 'Khống Chế Mạnh', 'Tụ Quái'],
    tags: ['Quần Thể', 'Khống Chế Mạnh', 'Tụ Quái'],
    details: `Dùng nội lực tạo nhiễu động khí lưu tại vị trí mục tiêu, kéo các địch nhân trong phạm vi nhất định lại gần, sau đó gây hiệu ứng hất tung. Khi tụ quái và hất tung mỗi lần đều gây 1 lần sát thương.
• Dư Âm: Khi thi triển nhận 2 phù hiệu Phong âm.`,
    detail: `• Sát thương tụ quái: 41.936 nội công Phong thương
• Sát thương hất tung: 41.936 nội công Phong thương
• Thời gian hất tung: khoảng 2,1 giây
• Thời gian hồi chiêu: 13,58 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/qsn.png',
  },
  {
    name: 'Cấp Khúc',
    nameZh: '急曲',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Khống Chế Nhẹ'],
    tags: ['Duy Trì', 'Khống Chế Nhẹ'],
    details: `Khúc nhạc đạt đến cao trào, hóa thân cầm ma, nhanh chóng đàn tấu tấn công kẻ địch phía trước, gây sát thương và hiệu ứng đẩy lùi.
• Dư Âm: Khi thi triển nhận 2 phù hiệu Phong âm.
• Phiêu Nhiên: Sau khi thi triển, trong 3 giây có thể miễn phí dùng 1 lần Lăng Ba Vi Bộ; nếu Lăng Ba Vi Bộ đang trong thời gian hồi chiêu thì sẽ làm mới hồi chiêu.`,
    detail: `• Sát thương 4 đợt đầu: 187.872 nội công Phong thương
• Sát thương đòn cuối: 117.420 nội công Phong thương
• Thời gian hồi chiêu: 15,52 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ck.png',
  },
  {
    name: 'Kiếm Đảm Cầm Tâm',
    nameZh: '剑胆琴心',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Bạo Phát', 'Phản Kích', 'Dịch Chuyển', 'Trọng Thương'],
    tags: ['Bạo Phát', 'Phản Kích', 'Dịch Chuyển', 'Trọng Thương'],
    details: `Cầm kiếm trong đàn, thực hiện 4 đoạn trảm kích phạm vi về phía trước, gây sát thương không thể bị đỡ đòn và kèm hiệu ứng trọng thương.
• Cầm Tâm: Trong thời gian thi triển, nhận giảm sát thương, có thể né tránh công kích và hiệu ứng khống chế của kẻ địch bá thể / miễn khống trong phạm vi xung quanh, đồng thời không bị ảnh hưởng bởi khống chế tinh thần.
• Tàng Phong: Sau khi né thành công công kích của đối phương, trảm kích sẽ kèm hiệu ứng phản kích (đòn kết thúc kèm hất tung).
• Dư Âm: Mỗi đoạn thi triển nhận 1 phù hiệu Phong âm, khi dùng kỹ năng phái khác của Thần Tương vẫn giữ hiệu quả né tránh.
• Phiêu Nhiên: Sau khi thi triển, trong 3 giây có thể miễn phí dùng 1 lần Lăng Ba Vi Bộ; nếu đang hồi chiêu thì sẽ làm mới hồi chiêu.`,
    detail: `• Sát thương đoạn 1: 48.676 nội công Phong thương
• Sát thương đoạn 2: 70.928 nội công Phong thương
• Sát thương đoạn 3: 152.981 nội công Phong thương
• Sát thương đoạn 4: 292.055 nội công Phong thương
• Giảm sát thương: 25%
• Giảm sát thương tầm xa thêm: 25%
• Trọng thương: 35% trong 5 giây
• Cứng người khi phản kích: 1–2 giây
• Thời gian hất tung: khoảng 2 giây
• Thời gian hồi chiêu: 19,4 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/kdct.png',
  },
  {
    name: 'Lăng Ba Vi Bộ',
    nameZh: '凌波微步',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể', 'Giải Khống', 'Dịch Chuyển'],
    tags: ['Đơn Thể', 'Giải Khống', 'Dịch Chuyển'],
    details: `Thân pháp nhanh như gió, lập tức giải trừ toàn bộ trạng thái bất lợi, đồng thời dịch chuyển đến vị trí chỉ định.
• Dư Âm: Khi thi triển nhận 2 phù hiệu Phong âm.`,
    detail: `• Giải khống và dịch chuyển
• Khoảng cách tối đa: 15 trượng
• Thời gian hồi chiêu: 22,31 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/lbvb.png',
  },
  {
    name: 'Cao Sơn Lưu Thủy',
    nameZh: '高山流水',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Quần Thể', 'Khống Chế Mạnh'],
    tags: ['Quần Thể', 'Khống Chế Mạnh'],
    details: `Phóng thích hàn băng chân khí, ngưng tụ không khí thành tuyết, gây sát thương và hiệu ứng đóng băng lên kẻ địch trên đường thẳng phía trước (nếu đóng băng không thành công sẽ hoàn lại một phần hồi chiêu).
• Dư Âm: Sau khi thi triển nhận 2 phù hiệu Băng âm.`,
    detail: `• Sát thương: 67.097 nội công Băng thương
• Thời gian đóng băng: 2 giây
• Nếu đóng băng không có hiệu lực, hồi chiêu rút ngắn còn: 6 giây
• Thời gian hồi chiêu: 14,55 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/cslt.png',
  },
  {
    name: 'Vũ Toái',
    nameZh: '羽碎',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Đơn Thể'],
    tags: ['Đơn Thể'],
    details: `Phát ra một chuỗi sóng âm di chuyển nhanh, sóng âm sẽ bật nảy giữa kẻ địch, gây sát thương và phá vỡ khiên của mục tiêu. Khi vào trạng thái Cực Hàn, sẽ làm mới hồi chiêu và sát thương của Vũ Toái được tăng mạnh.
• Bật nảy: Trong thời gian ngắn nếu trúng cùng một mục tiêu, sát thương sẽ giảm. Mỗi khi cấp kỹ năng tăng 8 cấp, số lần bật nảy tăng thêm 1 lần.
• Dư Âm: Sau khi thi triển nhận 1 phù hiệu Băng âm.`,
    detail: `• Sát thương ban đầu: 64.413 nội công Băng thương
• Sát thương bật nảy: 32.207 nội công Băng thương
• Trạng thái Cực Hàn: sát thương tăng 40%
• Số lần bật nảy: 9 lần
• Giảm sát thương khi trúng lặp: 50%
• Tỷ lệ phá khiên tối đa: 8%
• Thời gian hồi chiêu: 3,49 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/vt.png',
  },
  {
    name: 'Bích Giản Lưu Tuyền',
    nameZh: '碧涧流泉',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Tầm Xa', 'Phong Mạch'],
    tags: ['Duy Trì', 'Tầm Xa', 'Phong Mạch'],
    details: `Đoạn 1 Nhanh chóng đàn tấu sóng âm tấn công kẻ địch phía trước, gây sát thương, giảm tốc, kèm hiệu ứng phong mạch, đồng thời tăng tốc độ di chuyển bản thân. Đoạn 2 Dựa theo hướng điều khiển, thực hiện dịch chuyển, đồng thời bắn ra 5 luồng sóng âm về phía trước, tự động truy đuổi kẻ địch trong phạm vi, gây sát thương và giảm tốc. Khi sóng âm trúng cùng một mục tiêu nhiều lần, sát thương sẽ bị suy giảm. Khi thi triển cả hai đoạn, đều nhận bá thể ngắn.
• Dư Âm: Sau mỗi đoạn thi triển đều nhận 1 phù hiệu Phong âm.`,
    detail: `• Sát thương mỗi lần (đoạn 1): 83.872 nội công Phong thương
• Thời gian phong mạch: 1,5 giây
• Tốc độ di chuyển tăng: 10%
• Sát thương mỗi lần (đoạn 2): 58.710 nội công Phong thương
• Hiệu ứng giảm tốc (cả 2 đoạn): 30%
• Sát thương khi trúng lặp giảm còn: 30%
• Thời gian bá thể: 0,5 giây
• Thời gian hồi chiêu: 7,76 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/bglt.png',
  },
  {
    name: 'Bích Giản · Lưu Huỳnh',
    nameZh: '碧涧·流荧',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Tầm Xa'],
    tags: ['Duy Trì', 'Tầm Xa'],
    details: `Đoạn 1 luân phiên đàn tấu sóng âm Băng/Hỏa gây sát thương, trong thời gian này bản thân nhận giảm sát thương và tăng kháng tầm xa, đồng thời nhận bá thể ngắn. Nếu trong phạm vi có mục tiêu, sẽ bắn thêm 2 phi đạn gây sát thương. Đoạn 2 dựa theo hướng điều khiển thực hiện dịch chuyển, đồng thời bắn ra 5 phi đạn vào kẻ địch trong phạm vi và gây thêm sát thương phạm vi. Trong thời gian đoạn 1, nếu bị khống chế mạnh, sẽ tự động thi triển đoạn 2.
• Chước Sương: Mỗi phi đạn khi trúng người chơi sẽ cộng 1 tầng Sương Diễm, gây sát thương theo chu kỳ, đồng thời dựa theo nguyên tố của phi đạn có xác suất vào trạng thái Sí Nhiệt hoặc Cực Hàn.
• Phi Vũ: Gây thêm sát thương lên người chơi ở khoảng cách trên 7 ô (không bao gồm sát thương Sương Diễm).
• Dư Âm: Sau khi thi triển nhận 2 phù hiệu Phong âm; nếu tự tay dùng đoạn 2, nhận thêm 2 phù hiệu cùng nguyên tố với đòn đánh thường.`,
    detail: `• Tổng sát thương âm ba: 164.693 nội công Hỏa thương
• Tổng sát thương phi đạn: 388.857 nội công Hỏa thương
• Sát thương nổ phạm vi (đoạn 2): 228.740 nội công Hỏa thương
• Sát thương thêm lên mục tiêu ngoài 7 ô: 30%
• Sát thương Sương Diễm mỗi giây: 22.874 nội công sát thương theo chu kỳ
• Giới hạn tầng Sương Diễm: 30 tầng
• Tốc độ di chuyển tăng: 25%
• Kháng tầm xa tăng: 20%
• Thời gian bá thể: 1 giây
• Thời gian hồi chiêu: 15,52 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/bglh.png',
  },
  {
    name: 'Ngự Phong',
    nameZh: '御风',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Duy Trì', 'Trọng Thương', 'Khống Chế Mạnh'],
    tags: ['Duy Trì', 'Trọng Thương', 'Khống Chế Mạnh'],
    details: `Sau khi sử dụng, tạo ra một cơn lốc xoáy, gây sát thương ban đầu cao và sát thương duy trì lên kẻ địch trúng phải, kèm hiệu ứng đánh ngã (chỉ có hiệu lực với người chơi trong phạm vi 7 trượng) và trọng thương.
• Băng/Hỏa Long Quyển: Sau khi dùng Tiêu Tương Thủy Vân, hoặc trong thời gian Phượng Hoàng Lửa tồn tại, nếu thi triển Ngự Phong sẽ tạo thành Băng Long Quyển, tăng mạnh sát thương. Sau khi dùng Phượng Hoàng Triển Sí, hoặc trong thời gian Phượng Hoàng Băng tồn tại, nếu thi triển Ngự Phong sẽ tạo thành Hỏa Long Quyển, tăng mạnh sát thương và gây thiêu đốt kẻ địch trên đường đi.
• Dư Âm: Sau khi thi triển nhận 2 phù hiệu Phong âm.`,
    detail: `• Sát thương ban đầu: 201.291 nội công Phong thương
• Sát thương duy trì: 33.549 nội công Phong thương
• Thời gian duy trì: 4 giây
• Khoảng cách giữa các lần gây sát thương: 0,3 giây
• Thời gian đánh ngã: 1,45 giây
• Trọng thương: 35% trong 5 giây
• Hỏa Long Quyển – Sát thương ban đầu: 268.388 nội công Hỏa thương
• Hỏa Long Quyển – Sát thương duy trì: 46.968 nội công Hỏa thương
• Hỏa Long Quyển – Thiêu đốt: tổng 27.449 nội công Hỏa thương
• Băng Long Quyển – Sát thương ban đầu: 268.388 nội công Băng thương
• Băng Long Quyển – Sát thương duy trì: 46.968 nội công Băng thương
• Thời gian hồi chiêu: 19,4 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/np.png',
  },
  {
    name: 'Nhập Trận Khúc',
    nameZh: '入阵曲',
    category: 'Kỹ năng',
    monPhai: 'Thần Tượng',
    itemType: 'PVE - PVP',
    stats: ['Quần Thể', 'Cường Hóa', 'Hỗ Trợ'],
    tags: ['Quần Thể', 'Cường Hóa', 'Hỗ Trợ'],
    details: `Sau khi kích hoạt, bản thân nhận cường hóa năng lực: tăng tốc độ di chuyển, các kỹ năng thuộc lưu phái Thần Tương sẽ được xem là kỹ năng quần thể, đồng thời Bách Điểu Triều Phượng, Hữu Phượng Lai Nghi, Phượng Hoàng Triển Sí, Tiêu Tương Thủy Vân, Ngự Phong có thể thi triển khi đang di chuyển.
• Diệu Âm: Mỗi lần thi triển kỹ năng thuộc lưu phái Thần Tướng sẽ dựa theo nguyên tố của kỹ năng, phát tán sóng âm nguyên tố tương ứng ra xung quanh.
• Dư Âm: Sau khi thi triển nhận 1 phù hiệu Hỏa, 1 phù hiệu Băng và 1 phù hiệu Phong.`,
    detail: `• Tốc độ di chuyển tăng: 20%
• Thời gian duy trì: 12 giây
• Sát thương sóng âm: 67.097 nội công Hỏa thương
• Số lần sóng âm tối đa: 10 lần
• Sát thương sóng âm lên người chơi trong phạm vi 7 ô giảm: 60%
• Thời gian hồi chiêu: 19,4 giây`,
    upgrade: ``,
    imageUrl: '/images/ky-nang-mon-phai/than-tuong/ntk.png',
  },
];
