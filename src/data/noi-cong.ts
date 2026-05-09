import { GameItem } from '../types';

export const noiCongData: GameItem[] = [

  // ── HỎA ──

  {

    name: 'Khiếu Kim Ô',

    nameZh: '啸金乌',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Phá Phòng', 'Bỏ Qua Kháng Nguyên Tố', 'Trị Liệu'],

    details: 'Cường hóa hiệu quả {Chu Thiên Hỏa}: Mỗi lần cộng dồn, tăng thêm {0.6%} sát thương / trị liệu, đồng thời căn cứ theo bộ kỹ năng của bản thân tăng {960} điểm phá phòng hoặc {300} điểm bỏ qua kháng nguyên tố (tối đa {5 tầng}).',

    imageUrl: '/images/noi-cong/hoa/kko.png',

  },

  {

    name: 'Minh Địch Liệt Phong',

    nameZh: '鸣镝裂风',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Hiếm',

    stats: ['Tăng Sát Thương', 'Công Kích Nguyên Tố', 'Trị Liệu'],

    details: 'Tăng {3.5%} sát thương (hoặc trị liệu). Khi tấn công, cứ mỗi {2 giây} nhận {1 tầng} tăng {640 Tấn công} và {400 Công kích nguyên tố}, tối đa {4 tầng}. Khi đạt {4 tầng}, hiệu quả duy trì {6 giây} rồi xóa toàn bộ tầng (với {Tố Tâm} chuyển thành tăng cường trị liệu). Sau khi nhận hiệu ứng {Linh Vận}, tăng sát thương nâng lên {5%}, và khi kích hoạt sẽ nhận ngay đủ số tầng buff.',

    imageUrl: '/images/noi-cong/hoa/mdlp.png',

  },

  {

    name: 'Tịnh Vực Chước Phong',

    nameZh: '灼锋净域',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Hiếm',

    stats: ['Tấn Công', 'Sát Thương Nguyên Tố', 'Trị Liệu'],

    details: 'Sau khi tấn công trúng mục tiêu, trong 3 giây tiếp theo mỗi giây gây 90% tấn công thành sát thương Hỏa, thời gian hồi 6 giây. Đồng thời, tăng thêm 1200 tấn công hoặc 750 Sát Thương Nguyên Tố, hiệu quả kéo dài 8 giây (trong chế độ Luận Võ Công Bằng, chỉ số cố định bị giảm, đối với Tố Tâm, sẽ chuyển thành hồi phục duy trì và tăng cường hiệu quả trị liệu). Khi nhận được Linh Vận, tất cả hiệu ứng tăng cường và sát thương/hồi máu bổ sung đều được tăng 50%.',

    imageUrl: '/images/noi-cong/hoa/1.png',

  },

  {

    name: 'Nhật Nguyệt Lưỡng Nghi',

    nameZh: '日月两仪',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Hiếm',

    stats: ['Tăng Sát Thương', 'Giảm Sát Thương', 'Trị Liệu'],

    details: 'Khi khí huyết trên 50%: Tăng hiệu quả gây sát thương (hoặc hồi máu) lên 5%. Khi khí huyết dưới 50%: Giảm sát thương nhận vào 5%. Khi kích hoạt Linh Vận: Tăng hiệu quả của các hiệu ứng trên thêm 50%.',

    imageUrl: '/images/noi-cong/hoa/6.png',

  },

  {

    name: 'Côn Ngô Đoạn Ngọc',

    nameZh: '昆吾断玉',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Hiếm',

    stats: ['Sát Thương Chí Mạng'],

    details: 'Khi thi triển kỹ năng, xác suất gây sát thương chí mạng tăng thêm 20% trong 12 giây, thời gian hồi 20 giây. Trong thời gian hiệu lực, mỗi lần chí mạng sẽ nhận được 1 tầng tăng 1% sát thương chí mạng, tối đa 4 tầng. Khi đạt được Linh Vận, khi kích hoạt sẽ trực tiếp nhận được đầy đủ tầng tăng sát thương chí mạng và thời gian hiệu lực tăng thêm 4 giây.',

    imageUrl: '/images/noi-cong/hoa/7.png',

  },

  {

    name: 'Đãng Kiếm Dương Ba',

    nameZh: '荡剑扬波',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Hiếm',

    stats: ['Tỷ Lệ Bạo Kích', 'Trị Liệu'],

    details: 'Khi tấn công hoặc trị liệu, có 20% xác suất khiến tối đa 5 đòn tấn công kế tiếp trong 6 giây chắc chắn bạo kích. Thời gian hồi: 30 giây. Sau khi nhận hiệu quả Linh Vận, số lần chắc chắn bạo kích tăng lên 8 lần.',

    imageUrl: '/images/noi-cong/hoa/13.png',

  },

  {

    name: 'Phạn Linh Quyết',

    nameZh: '梵铃诀',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Thường',

    stats: ['Cường Hoá Kỹ Năng'],

    details: 'Tăng 4% cường hóa toàn bộ kỹ năng cho bản thân. Mỗi kẻ địch ở xung quanh sẽ cộng thêm 1 tầng, mỗi tầng tăng 400 điểm cường hóa toàn bộ kỹ năng, tối đa 3 tầng. (Trong chế độ Công Bằng Luận Võ, hiệu quả tăng chỉ số sẽ bị giảm).',

    imageUrl: '/images/noi-cong/hoa/plq.png',

  },

  {

    name: 'Dung Giáp',

    nameZh: '熔甲',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Thường',

    stats: ['Sát Thương Nguyên Tố', 'Bỏ Qua Kháng Nguyên Tố', 'Phá Phòng'],

    details: 'Sau khi trang bị, tùy theo phái của bản thân, sẽ nhận được một trong hai hiệu quả sau: Tăng 4% sát thương nguyên tố và 650 điểm xuyên kháng. Tăng 4% sát thương nội công/ngoại công và 2000 điểm phá phòng.',

    imageUrl: '/images/noi-cong/hoa/dg.png',

  },

  {

    name: 'Nhuệ Phong',

    nameZh: '锐锋',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Thường',

    stats: ['Khắc Chế Thủ Lĩnh', 'Trị Liệu'],

    details: 'Khi tấn công quái vật, mỗi 5 giây nhận 1 tầng tăng 2.7% Khắc Chế Thủ Lĩnh, tối đa cộng dồn 4 tầng. Sau khi đạt 4 tầng, hiệu quả sẽ duy trì trong 15 giây rồi xóa hết và bắt đầu cộng dồn lại từ đầu. (Nếu là Tố Tâm dùng trị liệu, sẽ chuyển thành hiệu quả tăng trị liệu).',

    imageUrl: '/images/noi-cong/hoa/np.png',

  },

  {

    name: 'Điểm Minh Lô',

    nameZh: '点明炉',

    category: 'Nội công',

    element: 'Hỏa',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Trị Liệu', 'Sát Thương Duy Trì'],

    details: 'Tăng 12% sát thương hoặc lượng hồi phục cho tất cả các kỹ năng gây sát thương duy trì hoặc hồi máu liên tục của nhân vật.',

    imageUrl: '/images/noi-cong/hoa/5.png',

  },

  // ── KIM ──

  {

    name: 'Tuyệt Điện Kinh Sa',

    nameZh: '绝电惊沙',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Hiếm',

    stats: ['Gây Sát Thương', 'Tăng Sát Thương', 'Trị Liệu'],

    details: 'Khi tấn công sẽ gọi sét, trong 4 giây gây sát thương Lôi mỗi giây bằng 145% công kích lên mục tiêu (sát thương lên quái gấp đôi), hồi 12 giây. Đối với mục tiêu có HP dưới 50%, sát thương tăng thêm 25% (trạng thái trị liệu sẽ chuyển thành hồi máu liên tục). Sau khi nhận hiệu ứng Linh Vận, thời gian hồi giảm còn 9 giây, sát thương tăng thêm nâng lên 35%.',

    imageUrl: '/images/noi-cong/kim/tdks.png',

  },

  {

    name: 'Phá Tiêu Thôi Tinh',

    nameZh: '破霄摧星',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Hiếm',

    stats: ['Hội Tâm', 'Tỷ Lệ Bạo Kích', 'Gây Sát Thương'],

    details: 'Sau khi thi triển kỹ năng, có xác suất vào trạng thái Phá Tiêu: khi tấn công hoặc hồi máu, gây thêm 110% sát thương Kim dựa trên tấn công (tối đa 4 lần, gây thêm sát thương với quái vật), đồng thời tăng 1800 Hội Tâm trong 10 giây. Thời gian hồi 15 giây. Khi có Linh Vận, trạng thái Phá Tiêu kéo dài 15 giây, số lần gây sát thương tăng lên 6 lần.',

    imageUrl: '/images/noi-cong/kim/pttt.png',

  },

  {

    name: 'Tuyệt Điện Phi Quang',

    nameZh: '绝电飞光',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Hiếm',

    stats: ['Gây Sát Thương', 'Trị Liệu'],

    details: 'Khi tấn công có xác suất dẫn sét, gây 210% sát thương dựa trên tấn công và gây 0.8 giây choáng lên người chơi. Đối với quái vật, sát thương tăng gấp 2 lần nhưng không gây choáng. Thời gian hồi 15 giây (Đối với Tố Tâm: hiệu quả kích hoạt chỉ tính theo lần trị liệu đơn cao nhất). Khi có Linh Vận, khi kích hoạt sẽ gọi sét thêm một lần, nhưng sát thương giảm 50% và không gây choáng.',

    imageUrl: '/images/noi-cong/kim/tdpq.png',

  },

  {

    name: 'Phủ Ngưỡng Thái Hư',

    nameZh: '俯仰太虚',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Hiếm',

    stats: ['Giảm Hồi Chiêu', 'Giảm Sát Thương'],

    details: 'Khi bị khống chế mà kỹ năng giải khống của hệ phái đều đang hồi chiêu, sẽ giảm 3 giây hồi chiêu kỹ năng giải khống của hệ phái, đồng thời nhận 15% giảm sát thương trong 3 giây. Thời gian hồi 12 giây. Khi có Linh Vận, thời gian giảm sát thương và giảm hồi chiêu tăng lên thành 4 giây.',

    imageUrl: '/images/noi-cong/kim/pnth.png',

  },

  {

    name: 'Đãng Kiếm Dương Ba',

    nameZh: '荡剑扬波',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Hiếm',

    stats: ['Tỷ Lệ Bạo Kích', 'Trị Liệu'],

    details: 'Khi tấn công hoặc trị liệu, có 20% xác suất khiến tối đa 5 đòn tấn công kế tiếp trong 6 giây chắc chắn bạo kích. Thời gian hồi: 30 giây. Sau khi nhận hiệu quả Linh Vận, số lần chắc chắn bạo kích tăng lên 8 lần.',

    imageUrl: '/images/noi-cong/kim/dkdb.png',

  },

  {

    name: 'Minh Sa Quyết',

    nameZh: '鸣沙诀',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Thường',

    stats: ['Hội Tâm', 'Sát Thương Bạo Kích'],

    details: 'Tăng cho bản thân 1800 Hội tâm. Cứ mỗi 2500 Hội tâm sẽ tăng thêm 0.8% sát thương bạo kích, tối đa 8%. Khi tấn công gây 150% sát thương trong 3 giây (trong Luận Võ Công Bằng, các chỉ số sẽ bị giảm).',

    imageUrl: '/images/noi-cong/kim/msq.png',

  },

  {

    name: 'Cập Xuyên',

    nameZh: '汲川',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Thường',

    stats: ['Hội Tâm', 'Sát Thương Chí Mạng'],

    details: 'Tăng 7% Hội Tâm bản thân (tối đa 1000 điểm). Khi tấn công quái vật, trong vòng 6 giây có thể nhận thêm 12% sát thương chí mạng. Thời gian hồi: 10 giây.',

    imageUrl: '/images/noi-cong/kim/cx.png',

  },

  {

    name: 'Phá Kích',

    nameZh: '破戟',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Thường',

    stats: ['Tấn Công', 'Sát Thương Nguyên Tố'],

    details: 'Tấn công và Sát Thương Nguyên Tố tăng 3%, nhưng sát thương phải chịu cũng tăng 3%. Khi tấn công hoặc trị liệu, dựa theo môn phái của bản thân, nhận thêm 3.5% tấn công (tối đa 1400 điểm) hoặc Sát Thương Nguyên Tố (tối đa 875 điểm).',

    imageUrl: '/images/noi-cong/kim/pk.png',

  },

  {

    name: 'Quán Sơn Nguyệt',

    nameZh: '贯山月',

    category: 'Nội công',

    element: 'Kim',

    itemType: 'Thường',

    stats: ['Khắc Chế Môn Phái'],

    details: 'Khi tấn công, trong 6 giây nhận được 10% khắc chế toàn bộ môn phái. Trong thời gian hiệu lực, nếu tham gia đánh bại người chơi địch, sẽ kéo dài thêm 3 giây thời gian buff. Thời gian hồi: 20 giây.',

    imageUrl: '/images/noi-cong/kim/qsn.png',

  },

  {

    name: 'Đoạn Kim Qua',

    nameZh: '断金戈',

    category: 'Nội công',

    element: 'Kim - Hoả',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Sát Thương Bạo Phát', 'Trị Liệu'],

    details: 'Tăng 12% sát thương/chữa trị từ kỹ năng Bạo phát. Có thể xem kỹ năng bạo phát trong mục chi tiết kỹ năng.',

    imageUrl: '/images/noi-cong/kim/dkq.png',

  },

  {

    name: 'Diệt Trận',

    nameZh: '灭阵',

    category: 'Nội công',

    element: 'Kim - Hoả',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Sát Thương Quần Thể', 'Trị Liệu'],

    details: 'Tăng 12% sát thương/chữa trị cho kỹ năng Quần thể. Có thể xem kỹ năng nhóm trong thẻ kỹ năng và mô tả kỹ năng.',

    imageUrl: '/images/noi-cong/kim/1.png',

  },

  {

    name: 'Xung Hư',

    nameZh: '冲虚',

    category: 'Nội công',

    element: 'Kim - Mộc',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Sát Thương Đơn Thể', 'Trị Liệu'],

    details: 'Sát thương/hồi phục của kỹ năng đơn thể tăng 12%. Có thể xem trong tag và mô tả của kỹ năng đơn thể.',

    imageUrl: '/images/noi-cong/kim/xh.png',

  },

  {

    name: 'Kích Suy',

    nameZh: '击衰',

    category: 'Nội công',

    element: 'Kim - Thổ',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Trị Liệu'],

    details: 'Khi tấn công mục tiêu có khí huyết dưới 40%, gây thêm 6% - 10% sát thương. Sát thương thêm cao hơn nếu tỷ lệ khí huyết của mục tiêu càng thấp. (đối với Tố Tâm, sẽ là hồi máu thêm).',

    imageUrl: '/images/noi-cong/kim/ks.png',

  },

  // ── MỘC ──

  {

    name: 'Tuyệt Điện Kinh Sa',

    nameZh: '绝电惊沙',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Gây Sát Thương', 'Tăng Sát Thương', 'Trị Liệu'],

    details: 'Khi tấn công sẽ gọi sét, trong 4 giây gây sát thương Lôi mỗi giây bằng 145% công kích lên mục tiêu (sát thương lên quái gấp đôi), hồi chiêu 12 giây. Đối với mục tiêu có HP dưới 50%, sát thương tăng thêm 25% (trạng thái trị liệu sẽ chuyển thành hồi máu liên tục). Sau khi nhận hiệu ứng Linh Vận, thời gian hồi chiêu giảm còn 9 giây, sát thương tăng thêm nâng lên 35%.',

    imageUrl: '/images/noi-cong/moc/tdks.png',

  },

  {

    name: 'Minh Địch Liệt Phong',

    nameZh: '鸣镝裂风',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Tăng Sát Thương', 'Công Kích Nguyên Tố', 'Trị Liệu'],

    details: 'Tăng 3.5% sát thương (hoặc trị liệu). Khi tấn công, cứ mỗi 2 giây nhận 1 tầng tăng 640 Tấn công và 400 Công kích nguyên tố, tối đa 4 tầng. Khi đạt 4 tầng, hiệu quả duy trì 6 giây rồi xóa toàn bộ tầng (với Tố Tâm chuyển thành tăng cường trị liệu). Sau khi nhận hiệu ứng Linh Vận, tăng sát thương nâng lên 5%, và khi kích hoạt sẽ nhận ngay đủ số tầng buff.',

    imageUrl: '/images/noi-cong/moc/mdlp.png',

  },

  {

    name: 'Phá Tiêu Thôi Tinh',

    nameZh: '破霄摧星',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Hội Tâm', 'Tỷ Lệ Bạo Kích', 'Gây Sát Thương'],

    details: 'Sau khi thi triển kỹ năng, có xác suất vào trạng thái Phá Tiêu: khi tấn công hoặc hồi máu, gây thêm 110% sát thương Kim dựa trên tấn công (tối đa 4 lần, gây thêm sát thương với quái vật), đồng thời tăng 1800 Hội Tâm trong 10 giây. Thời gian hồi 15 giây. Khi có Linh Vận, trạng thái Phá Tiêu kéo dài 15 giây, số lần gây sát thương tăng lên 6 lần.',

    imageUrl: '/images/noi-cong/moc/pttt.png',

  },

  {

    name: 'Tịnh Vực Chước Phong',

    nameZh: '灼锋净域',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Tấn Công', 'Sát Thương Nguyên Tố', 'Trị Liệu'],

    details: 'Sau khi tấn công trúng mục tiêu, trong 3 giây tiếp theo mỗi giây gây 90% tấn công thành sát thương Hỏa, thời gian hồi 6 giây. Đồng thời, tăng thêm 1200 tấn công hoặc 750 Sát Thương Nguyên Tố, hiệu quả kéo dài 8 giây (trong chế độ Luận Võ Công Bằng, chỉ số cố định bị giảm, đối với Tố Tâm, sẽ chuyển thành hồi phục duy trì và tăng cường hiệu quả trị liệu). Khi nhận được Linh Vận, tất cả hiệu ứng tăng cường và sát thương/hồi máu bổ sung đều được tăng 50%.',

    imageUrl: '/images/noi-cong/moc/tvcp.png',

  },

  {

    name: 'Tuyệt Điện Phi Quang',

    nameZh: '绝电飞光',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Gây Sát Thương', 'Trị Liệu'],

    details: 'Khi tấn công có xác suất dẫn sét, gây 210% sát thương dựa trên tấn công và gây 0.8 giây choáng lên người chơi. Đối với quái vật, sát thương tăng gấp 2 lần nhưng không gây choáng. Thời gian hồi 15 giây (Đối với Tố Tâm: hiệu quả kích hoạt chỉ tính theo lần trị liệu đơn cao nhất). Khi có Linh Vận, khi kích hoạt sẽ gọi sét thêm một lần, nhưng sát thương giảm 50% và không gây choáng.',

    imageUrl: '/images/noi-cong/moc/tdpq.png',

  },

  {

    name: 'Phủ Ngưỡng Thái Hư',

    nameZh: '俯仰太虚',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Giảm Hồi Chiêu', 'Giảm Sát Thương'],

    details: 'Khi bị khống chế mà kỹ năng giải khống của hệ phái đều đang hồi chiêu, sẽ giảm 3 giây hồi chiêu kỹ năng giải khống của hệ phái, đồng thời nhận 15% giảm sát thương trong 3 giây. Thời gian hồi 12 giây. Khi có Linh Vận, thời gian giảm sát thương và giảm hồi chiêu tăng lên thành 4 giây.',

    imageUrl: '/images/noi-cong/moc/pnth.png',

  },

  {

    name: 'Bất Động Minh Vương',

    nameZh: '不动明王',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Hiếm',

    stats: ['Giải Khống Chế', 'Giảm Sát Thương', 'Bá Thể'],

    details: 'Khi chịu khống chế mạnh, khí lực bộc phát giúp ngăn chặn hiệu ứng khống chế đó. Thời gian hồi 35 giây. Khi có Linh Vận, sau khi kích hoạt sẽ nhận thêm 2 giây Bá thể và 30% giảm sát thương.',

    imageUrl: '/images/noi-cong/moc/bdmv.png',

  },

  {

    name: 'Thư Diệu Quyển',

    nameZh: '舒妙卷',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Thường',

    stats: ['Khắc Chế Quái Vật', 'Tăng Sát Thương', 'Trị Liệu'],

    details: 'Khi 3 Mộc Chu Thiên được kích hoạt, tăng cho bản thân 2400 Khắc chế quái vật. Mộc Chu Thiên – sát thương thực khi tấn công quái (không phải công trình) hoặc trị liệu đồng đội sẽ tăng 20% hiệu quả và kích hoạt thêm 1 lần nữa.',

    imageUrl: '/images/noi-cong/moc/tdq.png',

  },

  {

    name: 'Lược Thời Văn',

    nameZh: '掠时纹',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Thường',

    stats: ['Gây Sát Thương', 'Khắc Chế Quái Vật', 'Khắc Chế Thủ Lĩnh', 'Trị Liệu'],

    details: 'Khi thi triển kỹ năng, có xác suất gây sát thương bằng 200% tấn công, đồng thời tăng 1600 điểm khắc chế quái vật (bao gồm cả khắc chế thủ lĩnh và công trình). Nếu mục tiêu là quái vật, đòn tấn công này sẽ kèm thêm lượng sát thương cố định cao. Hồi chiêu: 8 giây (với phái Tố Tâm thì tính theo từng lần trị liệu).',

    imageUrl: '/images/noi-cong/moc/ltv.png',

  },

  {

    name: 'Hống Lăng Vân',

    nameZh: '嘯凌雲',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Thường',

    stats: ['Gây Sát Thương', 'Khắc Chế Quái Vật', 'Khắc Chế Thủ Lĩnh'],

    details: 'Khi tấn công có xác suất gây 120% sát thương hệ Mộc diện rộng (sát thương với quái vật x2), đồng thời tăng 5.5% Khắc chế quái vật (bao gồm cả Khắc chế Thủ lĩnh và Khắc chế Kiến Trúc). Thời gian hồi: 12 giây. Nếu số mục tiêu trúng đòn trên 2, thì thời gian hồi giảm một nửa.',

    imageUrl: '/images/noi-cong/moc/hlv.png',

  },

  {

    name: 'Thú Khung',

    nameZh: '狩穹',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Thường',

    stats: ['Gây Sát Thương', 'Tăng Sát Thương', 'Trị Liệu'],

    details: 'Mỗi khi thi triển 5 kỹ năng, sẽ gây sát thương nguyên tố mộc đơn thể bằng 100% tấn công lên mục tiêu địch, đồng thời tăng 3% sát thương/trị liệu của bản thân. Thời gian hồi 4 giây. (Đối với Tố Tâm, hiệu quả sẽ chuyển thành trị liệu đơn thể).',

    imageUrl: '/images/noi-cong/moc/tk.png',

  },

  {

    name: 'Doanh Tế',

    nameZh: '盈济',

    category: 'Nội công',

    element: 'Mộc',

    itemType: 'Thường',

    stats: ['Gây Sát Thương', 'Tăng Sát Thương', 'Trị Liệu'],

    details: 'Gây sát thương/trị liệu tăng 1.1%. Mỗi khi có một kỹ năng môn phái đang trong thời gian hồi chiêu, sát thương/trị liệu gây ra được tăng thêm 1.4%, tối đa cộng dồn 3 tầng.',

    imageUrl: '/images/noi-cong/moc/dt.png',

  },

  // ── MỘC - THỔ ──

  {

    name: 'Di Tinh Chướng',

    nameZh: '移星障',

    category: 'Nội công',

    element: 'Mộc - Thổ',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Trị Liệu'],

    details: 'Tăng 12% sát thương đối với mục tiêu có khiên. Khi tấn công mục tiêu có khiên, khiến khiên của họ giảm 1.5% giới hạn khí huyết mỗi giây trong 5 giây. Thời gian hồi 15 giây.',

    imageUrl: '/images/noi-cong/moc/dtc.png',

  },

  // ── THỔ ──

  {

    name: 'Nhật Nguyệt Lưỡng Nghi',

    nameZh: '日月两仪',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Hiếm',

    stats: ['Tăng Sát Thương', 'Giảm Sát Thương', 'Trị Liệu'],

    details: 'Khi khí huyết trên 50%: Tăng hiệu quả gây sát thương (hoặc hồi máu) lên 5%. Khi khí huyết dưới 50%: Giảm sát thương nhận vào 5%. Khi kích hoạt Linh Vận: Tăng hiệu quả của các hiệu ứng trên thêm 50%.',

    imageUrl: '/images/noi-cong/tho/nnln.png',

  },

  {

    name: 'Vạn Hóa Minh Hợp',

    nameZh: '万化冥合',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Hiếm',

    stats: ['Hồi Máu'],

    details: 'Khi sắp tử vong, có 60% xác suất kích hoạt Chân Khí Hộ Thể, lập tức hồi 15% khí huyết tối đa. Thời gian hồi 90 giây. Khi có Linh Vận, xác suất kích hoạt tăng lên 100%.',

    imageUrl: '/images/noi-cong/tho/vhmh.png',

  },

  {

    name: 'Nạp Bách Quán',

    nameZh: '纳百观',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Thường',

    stats: ['Hồi Máu', 'Giảm Sát Thương'],

    details: 'Khi bị tấn công sẽ cộng dồn số tầng. Khi đạt 5 tầng, sẽ hồi 6% Khí Huyết tối đa, đồng thời trong 6 giây kế tiếp nhận được 4% Giảm sát thương. Thời gian hồi: 8 giây.',

    imageUrl: '/images/noi-cong/tho/nbq.png',

  },

  {

    name: 'Cố Kim Thang',

    nameZh: '固金汤',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Thường',

    stats: ['Phòng Ngự Quái Vật', 'Phòng Ngự Thủ Lĩnh'],

    details: 'Tăng 6% Kháng quái vật (bao gồm Kháng Thủ lĩnh và Kháng Kiến trúc). Khi bị quái vật tấn công, khiến chúng chịu thêm 2% sát thương.',

    imageUrl: '/images/noi-cong/tho/ckt.png',

  },

  {

    name: 'Ngự Thiên Chướng',

    nameZh: '御千嶂',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Thường',

    stats: ['Kháng Chí Mạng', 'Giảm Sát Thương'],

    details: 'Nhận 15% kháng chí mạng. Khi chịu một đòn sát thương đơn lẻ vượt quá 30% khí huyết tối đa của bản thân, sẽ giảm 30% sát thương của đòn đánh đó (lượng sát thương giảm không vượt quá 30% khí huyết tối đa), thời gian hồi 10 giây.',

    imageUrl: '/images/noi-cong/tho/ntc.png',

  },

  {

    name: 'Chỉ Thủy Khoái',

    nameZh: '止水快',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Thường',

    stats: ['Giảm Sát Thương'],

    details: 'Nhận 2% giảm sát thương, khi khí huyết dưới 70%, mỗi khi giảm 20% khí huyết sẽ nhận được 1 tầng giảm 4% sát thương, tối đa cộng dồn 3 tầng.',

    imageUrl: '/images/noi-cong/tho/ctk.png',

  },

  {

    name: 'Trầm Uyên',

    nameZh: '沉渊',

    category: 'Nội công',

    element: 'Thổ',

    itemType: 'Thường',

    stats: ['Phòng Ngự Môn Phái'],

    details: 'Khi có người chơi địch ở xung quanh, nhận được 5% hiệu quả phòng ngự môn phái tương ứng của người chơi đó. Đối với phái có số lượng nhiều nhất và có ít nhất 2 người, hiệu quả phòng ngự sẽ tăng lên 8% (hiệu quả cao chỉ áp dụng cho 1 phái).',

    imageUrl: '/images/noi-cong/tho/tu.png',

  },

  // ── THỦY ──

  {

    name: 'Bất Động Minh Vương',

    nameZh: '不动明王',

    category: 'Nội công',

    element: 'Thủy',

    itemType: 'Hiếm',

    stats: ['Giải Khống Chế', 'Giảm Sát Thương', 'Bá Thể'],

    details: 'Khi chịu khống chế mạnh, khí lực bộc phát giúp ngăn chặn hiệu ứng khống chế đó. Thời gian hồi 35 giây. Khi có Linh Vận, sau khi kích hoạt sẽ nhận thêm 2 giây Bá thể và 30% giảm sát thương.',

    imageUrl: '/images/noi-cong/thuy/bdmv.png',

  },

  {

    name: 'Vạn Hóa Minh Hợp',

    nameZh: '万化冥合',

    category: 'Nội công',

    element: 'Thủy',

    itemType: 'Hiếm',

    stats: ['Hồi Máu'],

    details: 'Khi sắp tử vong, có 60% xác suất kích hoạt Chân Khí Hộ Thể, lập tức hồi 15% khí huyết tối đa. Thời gian hồi 90 giây. Khi có Linh Vận, xác suất kích hoạt tăng lên 100%.',

    imageUrl: '/images/noi-cong/thuy/vhmh.png',

  },

  {

    name: 'Trầm Lãng',

    nameZh: '沉浪',

    category: 'Nội công',

    element: 'Thủy',

    itemType: 'Thường',

    stats: ['Tấn Công', 'Công Kích Nguyên Tố'],

    details: 'Chu Thiên Thủy (cấp 3): tăng 400 Tấn công và 320 Công kích nguyên tố (trong Luận Võ Công Bằng các chỉ số sẽ bị giảm). Khi thi triển Chu Thiên Thủy cho đồng đội, sẽ ngẫu nhiên thêm 1 đồng đội khác cũng nhận buff Chu Thiên Thủy (ưu tiên chọn đồng đội chưa có buff).',

    imageUrl: '/images/noi-cong/thuy/tl.png',

  },

  {

    name: 'Hãn Hải Môn',

    nameZh: '捍海门',

    category: 'Nội công',

    element: 'Thủy',

    itemType: 'Thường',

    stats: ['Khắc Chế Thủ Lĩnh', 'Sát Thương Nguyên Tố', 'Gây Sát Thương', 'Trị Liệu'],

    details: 'Khi thi triển kỹ năng, trong 10 giây sẽ tăng cho đồng đội 880 điểm Khắc Chế Thủ Lĩnh và 360 điểm tấn công nguyên tố (nếu không có đồng đội, hiệu quả sẽ áp dụng lên bản thân). Sau đó, 4 đòn tấn công kế tiếp sẽ kèm thêm sát thương nguyên tố thuỷ bằng 50% tấn công. Thời gian hồi 10 giây. (Đối với Tố Tâm, hiệu quả sẽ chuyển thành trị liệu bổ sung).',

    imageUrl: '/images/noi-cong/thuy/hhm.png',

  },

  {

    name: 'Hoán Tịch',

    nameZh: '唤汐',

    category: 'Nội công',

    element: 'Thủy',

    itemType: 'Thường',

    stats: ['Tạo Khiên', 'Trị Liệu'],

    details: 'Khi thi triển kỹ năng, có xác suất tạo lá chắn bằng 6% khí huyết tối đa cho bản thân và đồng đội có lượng máu thấp nhất, duy trì trong 10 giây. Nếu không có đồng đội, hiệu quả lên bản thân sẽ tăng gấp đôi (Cùng một mục tiêu chỉ có thể nhận lá chắn nước một lần trong 10 giây).',

    imageUrl: '/images/noi-cong/thuy/ht.png',

  },

  {

    name: 'Châu Minh',

    nameZh: '珠明',

    category: 'Nội công',

    element: 'Thủy',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Hồi Máu', 'Trị Liệu'],

    details: 'Khi thi triển kỹ năng, có xác suất nhận được hào quang hoàn trị liệu trong 10 giây, mỗi 2 giây sẽ hồi khí huyết cho đồng đội xung quanh bằng 55% tấn công, đồng thời nhận thêm 1.5% tăng sát thương/trị liệu. Thời gian hồi 20 giây.',

    imageUrl: '/images/noi-cong/thuy/cm.png',

  },

  {

    name: 'Linh Bình',

    nameZh: '灵屏',

    category: 'Nội công',

    element: 'Thủy - Kim',

    itemType: 'Thường',

    stats: ['Sát Thương Bạo Kích', 'Trị Liệu'],

    details: 'Tăng 4% sát thương bạo kích cho toàn đội, và bản thân nhận được hiệu ứng gấp đôi.',

    imageUrl: '/images/noi-cong/thuy/lb.png',

  },

  // ── LINH HOẠT ──

  {

    name: 'Phùng Hư',

    nameZh: '逢虛',

    category: 'Nội công',

    element: 'Linh Hoạt',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Tấn Công', 'Sát Thương Nguyên Tố', 'Trị Liệu'],

    details: 'Nhận 6 nguyên tố vạn năng, có thể tự động chuyển đổi thành bất kỳ nguyên tố nào, ưu tiên ghép thành tổ hợp Chu Thiên cấp cao. Tăng 2% sát thương/trị liệu, khi chiến đấu tăng thêm 1000 tấn công, 640 tấn công nguyên tố toàn hệ (Trong chế độ Luận Võ Công Bằng, mức tăng chỉ số bị giảm).',

    imageUrl: '/images/noi-cong/linh-hoat/ph.png',

  },

  {

    name: 'Ngũ Vận Dao',

    nameZh: '五韵谣',

    category: 'Nội công',

    element: 'Linh Hoạt',

    itemType: 'Thường',

    stats: ['Tăng Sát Thương', 'Tấn Công', 'Sát Thương Nguyên Tố', 'Trị Liệu'],

    details: 'Nhận 6 điểm nguyên tố vạn năng, có thể tự động chuyển đổi thành bất kỳ nguyên tố nào, ưu tiên kích hoạt Chu Thiên cấp cao. Tăng 2.5% sát thương / trị liệu, khi trong chiến đấu tăng 2000 công kích và 1280 toàn nguyên tố công kích. Không thể trang bị đồng thời với Phùng Hư, trong Luận Võ công bằng chỉ số sẽ bị giảm.',

    imageUrl: '/images/noi-cong/linh-hoat/nvd.png',

  },

  {

    name: 'Đãng Giang Đấu',

    nameZh: '荡江斗',

    category: 'Nội công',

    element: 'Linh Hoạt',

    itemType: 'Thường',

    stats: ['Tăng Hiệu Quả Chu Thiên'],

    details: 'Khi số Chu Thiên đang kích hoạt không vượt quá 2, nguyên tố có số lượng nhiều nhất (phải trên 12) sẽ được tăng cường đặc tính Chu Thiên. Hiệu quả tăng cường: Kim – Tăng sát thương bạo kích. Mộc – Tăng sát thương kỹ năng môn phái. Thủy – Tăng hiệu quả trị liệu. Hỏa – Tăng công/Tấn công nguyên tố. Thổ – Giảm sát thương nhận vào.',

    imageUrl: '/images/noi-cong/linh-hoat/dgd.png',

  },

];



