export interface LienKetPhai {
  id: string;
  ten: string;
  ten_zh: string | null;
  slug: string;
  image_url: string | null;
  phan_thuong: string | null;
  hieu_ung_lien_ket: string | null;
  quan_co_images: string[] | null;
}

export const lienKetPhaiData: LienKetPhai[] = [
  {
    "ten": "Cố Thủ",
    "slug": "co-thu",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/co-thu.png",
    "id": "1784017264252"
  },
  {
    "ten": "Phá Quân",
    "slug": "pha-quan",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/pha-quan.png",
    "id": "1784017302059"
  },
  {
    "ten": "Thích Khách",
    "slug": "thich-khach",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/thich-khach.png",
    "id": "1784017340532"
  },
  {
    "ten": "Hồi Nguyên",
    "slug": "hoi-nguyen",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/hoi-nguyen.png",
    "id": "1784017387329"
  },
  {
    "ten": "Ngự Kiếm",
    "slug": "ngu-kiem",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/ngu-kiem.png",
    "id": "1784017408963"
  },
  {
    "ten": "Phụ Trận",
    "slug": "phu-tran",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/phu-tran.png",
    "id": "1784017449812"
  },
  {
    "ten": "Lực Sĩ",
    "slug": "luc-si",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/luc-si.png",
    "id": "1784017486755"
  },
  {
    "ten": "Chiến Sĩ",
    "slug": "chien-si",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/chien-si.png",
    "id": "1784017501426"
  },
  {
    "ten": "Trong Minh",
    "slug": "trong-minh",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/trung-minh.png",
    "id": "1784017569662"
  },
  {
    "ten": "Mưu Sĩ",
    "slug": "muu-si",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/muu-si.png",
    "id": "1784017589397"
  },
  {
    "ten": "Xạ Thủ",
    "slug": "xa-thu",
    "image_url": "/images/co-nghich-thuy-han/lien-ket-chuc-nghiep/xa-thu.png",
    "id": "1784017598804"
  }
];
