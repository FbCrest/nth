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
