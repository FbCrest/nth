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
  }
];

export function getIcon(slug: string): CoNghichIcon | undefined {
  return coNghichIcons.find(i => i.slug === slug);
}
