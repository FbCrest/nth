export interface CoNghichIcon {
  slug: string;
  label: string;
  image_url: string;
}

export const coNghichIcons: CoNghichIcon[] = [
  {
    "slug": "tan-cong",
    "label": "Tấn Công",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/tan-cong.png",
    "id": "1783930510522"
  },
  {
    "slug": "toc-do-tan-cong",
    "label": "Tốc Độ Tấn Công",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/toc-do-tan-cong.png",
    "id": "1783932089036"
  },
  {
    "slug": "khi-huyet",
    "label": "Khí Huyết",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/khi-huyet.png",
    "id": "1783934633469"
  },
  {
    "slug": "phong-thu",
    "label": "Phòng Thủ",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/phong-thu.png",
    "id": "1783934899317"
  },
  {
    "slug": "hoi-phuc-noi-luc",
    "label": "Hồi Phục Nội Lực",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/hoi-phuc-noi-luc.png",
    "id": "1783936018371"
  },
  {
    "slug": "hut-mau",
    "label": "Hút Máu",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/hut-mau.png",
    "id": "1783965194822"
  },
  {
    "slug": "chi-mang",
    "label": "Chí Mạng",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/chi-mang.png",
    "id": "1783999355322"
  },
  {
    "slug": "sat-thuong-chi-mang",
    "label": "Sát Thương Chí Mạng",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/sat-thuong-chi-mang.png",
    "id": "1784009348950"
  },
  {
    "slug": "pha-phong",
    "label": "Phá Phòng",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/pha-phong.png",
    "id": "1784009855671"
  },
  {
    "slug": "ty-le-ne-tranh",
    "label": "Tỷ lệ Né Tránh",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/ty-le-ne-tranh.png",
    "id": "1784047711791"
  },
  {
    "slug": "tang-sat-thuong",
    "label": "Tăng Sát Thương",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/tang-sat-thuong.png",
    "id": "1784049022271"
  },
  {
    "slug": "giam-sat-thuong",
    "label": "Giảm Sát Thương",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/giam-sat-thuong.png",
    "id": "1784049180601"
  },
  {
    "slug": "tam-danh",
    "label": "Tầm Đánh",
    "image_url": "/images/co-nghich-thuy-han/icon-thuoc-tinh/tam-danh.png",
    "id": "1785227022451"
  }
];

export function getIcon(slug: string): CoNghichIcon | undefined {
  return coNghichIcons.find(i => i.slug === slug);
}
