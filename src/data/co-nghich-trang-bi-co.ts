export interface TrangBiCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  danh_muc: string | null;
  hieu_qua: string | null;
  dac_hieu: string | null;
  image_url: string | null;
}

export const trangBiCoData: TrangBiCo[] = [
  {
    "ten": "Tinh Thiết Trường Kiếm",
    "ten_zh": "精铁长剑",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tinh-thiet-truong-kiem.png",
    "id": "1783927021329"
  },
  {
    "ten": "Thúy Ngọc Giới Chỉ",
    "ten_zh": "翠玉戒指",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tốc Độ Tấn Công{icon:toc-do-tan-cong}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thuy-ngon-gioi-chi.png",
    "id": "1783927205321"
  },
  {
    "ten": "Tinh Thiết Khải Giáp",
    "ten_zh": "精铁铠甲",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Khí Huyết{icon:khi-huyet}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tinh-thiet-khai-giap.png",
    "id": "1783927426157"
  },
  {
    "ten": "Tinh Thiết Hộ Uyển",
    "ten_zh": "精铁护腕",
    "danh_muc": "Phòng thủ",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/tinh-thiet-ho-uyen.png",
    "id": "1783927596348"
  },
  {
    "ten": "Thúy Ngọc Hạng Liên",
    "ten_zh": "翠玉项链",
    "danh_muc": "Đặc biệt",
    "hieu_qua": "• Hồi Phục Nội Lực{icon:hoi-phuc-noi-luc}: +20%",
    "dac_hieu": null,
    "image_url": "/images/co-nghich-thuy-han/trang-bi/thuy-ngoc-hang-lien.png",
    "id": "1783927735082"
  },
  {
    "ten": "Ma Thiên Vạn Chức Thư",
    "ten_zh": "魔天万职书",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Tấn Công{icon:tan-cong}: +20%",
    "dac_hieu": "• Quân cờ được trang bị nhận {Liên Kết Ma Thiên}. Khi tham gia hạ gục, nhận {tăng sát thương} và {giảm sát thương}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/ma-thien-van-chuc-thu.png",
    "id": "1783928282684"
  },
  {
    "ten": "Bạch Đế Thành Vạn Chức Thư",
    "ten_zh": "白帝城万职书",
    "danh_muc": "Tấn công",
    "hieu_qua": "• Phòng Thủ{icon:phong-thu}: +20%",
    "dac_hieu": "• Quân cờ trang bị nhận {Liên Kết Bạch Đế Thành}.",
    "image_url": "/images/co-nghich-thuy-han/trang-bi/bach-de-thanh-van-chuc-thu.png",
    "id": "1783935574730"
  }
];
