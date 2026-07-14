export interface BuffCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  do_hiem: string | null;
  mo_ta: string | null;
  image_url: string | null;
}

export const buffCoData: BuffCo[] = [
  {
    "ten": "Đồng Tâm Trận",
    "ten_zh": "同心阵",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, cứ mỗi quân cờ đồng minh đứng cạnh, quân cờ của bạn nhận thêm {4% Tấn Công} và {40/72/140 điểm lá chắn} (tùy theo bậc sao của quân cờ).",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/dong-tam-tran.png",
    "id": "1783964836700"
  },
  {
    "ten": "Bất Khuất Bất Náo",
    "ten_zh": "不屈不挠",
    "do_hiem": "Xanh",
    "mo_ta": "Sau khi thua 1 vòng đấu với kỳ thủ khác, ở vòng đấu với kỳ thủ tiếp theo, quân cờ của bạn nhận thêm {25% sát thương} gây ra. Nếu giành chiến thắng, bạn còn nhận ngẫu nhiên thêm {1–3 vàng}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/bat-khuat-bat-nao.png",
    "id": "1783965465934"
  },
  {
    "ten": "Lưỡng Nghi Song Tức",
    "ten_zh": "两仪双息",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, nếu số quân cờ ở 2 hàng trước của bạn là số lẻ, chúng nhận thêm {30% Phòng Thủ}, nếu là số chẵn, chúng nhận thêm {20% Khí Huyết}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/luong-nghi-song-tuc.png",
    "id": "1783965638178"
  },
  {
    "ten": "Chúng Chí Thành Thành",
    "ten_zh": "众志成城",
    "do_hiem": "Xanh",
    "mo_ta": "Khi bắt đầu chiến đấu, hàng có nhiều quân cờ nhất của bạn sẽ nhận lá chắn bằng {240%/430%/800% Phòng Thủ} (tùy theo bậc sao của quân cờ).",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/chung-chi-thanh-thanh.png",
    "id": "1783965744854"
  },
  {
    "ten": "Thanh Phong Ngâm",
    "ten_zh": "清风吟",
    "do_hiem": "Xanh",
    "mo_ta": "Khi Khí Huyết của quân cờ lần đầu giảm xuống dưới {50%}, chúng sẽ hồi lại {20% Khí Huyết} trong vòng {2 giây}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/thanh-phong-ngam.png",
    "id": "1783965851574"
  },
  {
    "ten": "Vật Mỹ Giá Liêm",
    "ten_zh": null,
    "do_hiem": "Xanh",
    "mo_ta": "Nhận {1/6/11 vàng}. Ở mỗi vòng đấu, lần đầu tiên dùng vàng để làm mới cửa hàng sẽ giảm tiêu hao {1 vàng}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/vat-my-gia-liem.png",
    "id": "1783965951368"
  },
  {
    "ten": "Kinh Nghiệm Chi Đàm",
    "ten_zh": "经验之谈",
    "do_hiem": "Xanh",
    "mo_ta": "Nhận {10/16 điểm kinh nghiệm}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/kinh-nghiem-chi-dam.png",
    "id": "1783966036494"
  },
  {
    "ten": "Hậu Cố Vô Ưu",
    "ten_zh": "后顾无忧",
    "do_hiem": "Xanh",
    "mo_ta": "Khi thua 1 vòng đấu với kỳ thủ khác, nhận {2 điểm kinh nghiệm}. Nếu đang trong chuỗi thua, nhận thêm {1 vàng}.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/hau-co-vo-uu.png",
    "id": "1783966130509"
  },
  {
    "ten": "Bồi Nguyên Quyết",
    "ten_zh": "培元诀",
    "do_hiem": "Xanh",
    "mo_ta": "Tăng {25/23/20 điểm Khí Huyết} cho kỳ thủ.",
    "image_url": "/images/co-nghich-thuy-han/tam-ngo/boi-nguyen-quyet.png",
    "id": "1783966223654"
  }
];
