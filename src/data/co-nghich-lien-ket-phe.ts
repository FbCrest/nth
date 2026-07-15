export interface LienKetPhe {
  id: string;
  ten: string;
  ten_zh: string | null;
  slug: string;
  image_url: string | null;
  phan_thuong: string | null;
  hieu_ung_lien_ket: string | null;
  quan_co_images: string[] | null;
}

export const lienKetPheData: LienKetPhe[] = [
  {
    "ten": "Bạch Đế Thành",
    "slug": "bach-de-thanh",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/bach-de-thanh.png",
    "id": "lkp-1"
  },
  {
    "ten": "Bích Huyết Doanh",
    "slug": "bich-huyet-doanh",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/bich-huyet-doanh.png",
    "id": "lkp-2"
  },
  {
    "ten": "Kính Thiên Các",
    "slug": "kinh-thien-cac",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/kinh-thien-cac.png",
    "id": "lkp-3"
  },
  {
    "ten": "Ma Thiên",
    "slug": "ma-thien",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/ma-thien.png",
    "id": "lkp-4"
  },
  {
    "ten": "Minh Chiêu Hầu",
    "slug": "minh-chieu-hau",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/minh-chieu-hau.png",
    "id": "lkp-5"
  },
  {
    "ten": "Minh Uyên",
    "slug": "minh-uyen",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/minh-uyen.png",
    "id": "lkp-6"
  },
  {
    "ten": "Phượng Thành",
    "slug": "phuong-thanh",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/phuong-thanh.png",
    "id": "lkp-7"
  },
  {
    "ten": "Sơ Thiệp Giang Hồ",
    "ten_zh": "初涉江湖",
    "slug": "so-thiep-giang-ho",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/so-thiep-giang-ho.png",
    "phan_thuong": "Quân cờ thuộc {Sơ Thiệp Giang Hồ} nhận các hiệu ứng tăng cường liên quan đến thăng sao.",
    "hieu_ung_lien_ket": "{2} Nhận 17% tăng sát thương và giảm sát thương. Có 50% xác suất xuất hiện ở ô ngoài cùng bên trái của Cửa Hàng.\n{6} Chỉ cần 8 bản sao để thăng lên 3 sao.\n{8}Nhận 3%~9% tăng sát thương và giảm sát thương dựa trên tổng số sao.\n{10}Các quân cờ 3 sao thuộc liên kết này được thăng lên 4 sao.",
    "quan_co_images": [
      "/images/co-nghich-thuy-han/danh-sach-quan-co-lien-ket/phuong-thua-y-icon.png"
    ],
    "id": "lkp-8"
  },
  {
    "ten": "Thiên Hạ Song Thế",
    "slug": "thien-ha-song-the",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/thien-ha-song-the.png",
    "id": "lkp-9"
  },
  {
    "ten": "Tiểu Sủng Liên Manh",
    "slug": "tieu-sung-lien-manh",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/tieu-sung-lien-manh.png",
    "id": "lkp-10"
  },
  {
    "ten": "Võ Lâm Phong Vân Lục",
    "slug": "vo-lam-phong-van-luc",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-the-luc/vo-lam-phong-van-luc.png",
    "id": "lkp-11"
  }
];
