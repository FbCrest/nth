import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type TrangBi = {
  id: string;
  ten: string;
  ten_zh: string | null;
  mo_ta: string | null;
  chi_tiet: string | null;
  slot: string | null;
  loai: string | null;
  cap: string | null;
  mua_giai: string | null;
  tags: string[] | null;
  image_url: string | null;
  created_at: string;
};

export type CoNghichTrangBiRow = {
  id: string;
  ten: string;
  ten_zh: string | null;
  danh_muc: string | null;   // 'Tấn công' | 'Phòng thủ' | 'Đặc biệt'
  hieu_qua: string | null;   // JSON array string hoặc newline-separated
  image_url: string | null;
  created_at: string;
};

export type CoNghichBuffRow = {
  id: string;
  ten: string;
  ten_zh: string | null;
  do_hiem: string | null;    // 'Xanh' | 'Tím' | 'Vàng'
  mo_ta: string | null;
  image_url: string | null;
  created_at: string;
};

export type KichHe = { ten: string; icon_url: string | null; };
export type ChiSo = {
  khi_huyet?: number[];
  noi_luc?: number[];
  tan_cong?: number[];
  phong_thu?: number[];
  toc_do?: number[];
};

export type CoNghichQuanCoRow = {
  id: string;
  ten: string;
  ten_zh: string | null;
  so_sao: number | null;
  gia_xu: number | null;
  loai: string | null;
  tags: string[] | null;
  lien_ket_phe: string[] | null;   // array of slug, vd: ['bach-de-thanh']
  lien_ket_phai: string[] | null;  // array of slug, vd: ['chien-binh']
  ky_nang_ten: string | null;
  ky_nang_icon: string | null;
  ky_nang_mo_ta: string | null;
  chi_so: ChiSo | null;
  image_url: string | null;
  created_at: string;
};
