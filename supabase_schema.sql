-- ============================================================
-- NTH WIKI — Supabase Schema
-- Chạy toàn bộ file này trong SQL Editor
-- Có thể chạy nhiều lần mà không bị lỗi (idempotent)
-- ============================================================

-- ── 1. BẢNG TRANG BỊ ────────────────────────────────────────
create table if not exists public.trang_bi (
  id         uuid default gen_random_uuid() primary key,
  ten        text not null,
  ten_zh     text,
  mo_ta      text,
  chi_tiet   text,
  slot       text,
  loai       text,
  cap        text,
  tags       text[],
  image_url  text,
  created_at timestamptz default now()
);

-- Migration an toàn nếu bảng đã tồn tại
alter table public.trang_bi add column if not exists cap text;
alter table public.trang_bi add column if not exists mua_giai text;

alter table public.trang_bi enable row level security;

drop policy if exists "trang_bi_select" on public.trang_bi;
drop policy if exists "trang_bi_insert" on public.trang_bi;
drop policy if exists "trang_bi_update" on public.trang_bi;
drop policy if exists "trang_bi_delete" on public.trang_bi;

create policy "trang_bi_select" on public.trang_bi for select using (true);
create policy "trang_bi_insert" on public.trang_bi for insert with check (auth.role() = 'authenticated');
create policy "trang_bi_update" on public.trang_bi for update using (auth.role() = 'authenticated');
create policy "trang_bi_delete" on public.trang_bi for delete using (auth.role() = 'authenticated');

-- ── 2. STORAGE BUCKET ───────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('trang-bi-images', 'trang-bi-images', true)
on conflict (id) do nothing;

drop policy if exists "storage_select" on storage.objects;
drop policy if exists "storage_insert" on storage.objects;
drop policy if exists "storage_delete" on storage.objects;

create policy "storage_select" on storage.objects for select
  using (bucket_id = 'trang-bi-images');

create policy "storage_insert" on storage.objects for insert
  with check (bucket_id = 'trang-bi-images' and auth.role() = 'authenticated');

create policy "storage_delete" on storage.objects for delete
  using (bucket_id = 'trang-bi-images' and auth.role() = 'authenticated');

-- ── 3. BẢNG ADMIN PROFILES (để đăng nhập bằng username) ────
create table if not exists public.admin_profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text unique not null,
  created_at  timestamptz default now()
);

alter table public.admin_profiles enable row level security;

drop policy if exists "admin_profiles_select" on public.admin_profiles;
create policy "admin_profiles_select" on public.admin_profiles for select using (true);

-- ── 4. FUNCTION: lookup email từ username ───────────────────
create or replace function public.get_email_by_username(p_username text)
returns text language plpgsql security definer as $$
declare
  v_email text;
begin
  select u.email into v_email
  from auth.users u
  join public.admin_profiles p on p.id = u.id
  where p.username = p_username;
  return v_email;
end;
$$;

-- ── 5. TẠO TÀI KHOẢN ADMIN ──────────────────────────────────
do $$
declare
  v_uid uuid;
begin
  -- Kiểm tra username đã tồn tại chưa
  if exists (select 1 from public.admin_profiles where username = '0rion24k') then
    raise notice 'User 0rion24k already exists, skipping.';
    return;
  end if;

  v_uid := gen_random_uuid();

  -- Tạo auth user
  insert into auth.users (
    id, instance_id, email, encrypted_password,
    email_confirmed_at, created_at, updated_at,
    raw_app_meta_data, raw_user_meta_data,
    is_super_admin, role
  ) values (
    v_uid,
    '00000000-0000-0000-0000-000000000000',
    '0rion24k@nth-wiki.internal',
    crypt('Khanghy123', gen_salt('bf')),
    now(), now(), now(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    false,
    'authenticated'
  );

  -- Tạo profile liên kết username
  insert into public.admin_profiles (id, username)
  values (v_uid, '0rion24k');

  raise notice 'Admin 0rion24k created successfully.';
end;
$$;

-- ── 6. BẢNG CỜ NGHỊCH THỦY HÀN — TRANG BỊ ──────────────────
create table if not exists public.co_nghich_trang_bi (
  id         uuid default gen_random_uuid() primary key,
  ten        text not null,
  ten_zh     text,
  danh_muc   text,        -- 'Tấn công' | 'Phòng thủ' | 'Đặc biệt'
  hieu_qua   text,        -- mỗi dòng 1 chỉ số: "Tên: +20%"
  image_url  text,
  created_at timestamptz default now()
);

alter table public.co_nghich_trang_bi enable row level security;

drop policy if exists "co_nghich_tb_select" on public.co_nghich_trang_bi;
drop policy if exists "co_nghich_tb_insert" on public.co_nghich_trang_bi;
drop policy if exists "co_nghich_tb_update" on public.co_nghich_trang_bi;
drop policy if exists "co_nghich_tb_delete" on public.co_nghich_trang_bi;

create policy "co_nghich_tb_select" on public.co_nghich_trang_bi for select using (true);
create policy "co_nghich_tb_insert" on public.co_nghich_trang_bi for insert with check (auth.role() = 'authenticated');
create policy "co_nghich_tb_update" on public.co_nghich_trang_bi for update using (auth.role() = 'authenticated');
create policy "co_nghich_tb_delete" on public.co_nghich_trang_bi for delete using (auth.role() = 'authenticated');

-- ── 7. BẢNG CỜ NGHỊCH THỦY HÀN — TÂM NGỘ (BUFF) ────────────
create table if not exists public.co_nghich_buff (
  id         uuid default gen_random_uuid() primary key,
  ten        text not null,
  ten_zh     text,
  do_hiem    text,        -- 'Xanh' | 'Tím' | 'Vàng'
  mo_ta      text,
  image_url  text,
  created_at timestamptz default now()
);

alter table public.co_nghich_buff enable row level security;

drop policy if exists "co_nghich_buff_select" on public.co_nghich_buff;
drop policy if exists "co_nghich_buff_insert" on public.co_nghich_buff;
drop policy if exists "co_nghich_buff_update" on public.co_nghich_buff;
drop policy if exists "co_nghich_buff_delete" on public.co_nghich_buff;

create policy "co_nghich_buff_select" on public.co_nghich_buff for select using (true);
create policy "co_nghich_buff_insert" on public.co_nghich_buff for insert with check (auth.role() = 'authenticated');
create policy "co_nghich_buff_update" on public.co_nghich_buff for update using (auth.role() = 'authenticated');
create policy "co_nghich_buff_delete" on public.co_nghich_buff for delete using (auth.role() = 'authenticated');

-- ── 8. STORAGE BUCKET — CỜ NGHỊCH ───────────────────────────
insert into storage.buckets (id, name, public)
values ('co-nghich-images', 'co-nghich-images', true)
on conflict (id) do nothing;

drop policy if exists "co_nghich_storage_select" on storage.objects;
drop policy if exists "co_nghich_storage_insert" on storage.objects;
drop policy if exists "co_nghich_storage_delete" on storage.objects;

create policy "co_nghich_storage_select" on storage.objects for select
  using (bucket_id = 'co-nghich-images');

create policy "co_nghich_storage_insert" on storage.objects for insert
  with check (bucket_id = 'co-nghich-images' and auth.role() = 'authenticated');

create policy "co_nghich_storage_delete" on storage.objects for delete
  using (bucket_id = 'co-nghich-images' and auth.role() = 'authenticated');

-- ── 9. BẢNG CỜ NGHỊCH THỦY HÀN — QUÂN CỜ ───────────────────
create table if not exists public.co_nghich_quan_co (
  id            uuid default gen_random_uuid() primary key,
  ten           text not null,
  ten_zh        text,
  so_sao        int default 5,          -- số sao (1-5)
  gia_xu        int,                     -- giá xu mua
  loai          text,                    -- 'Toàn Năng Chiến Sĩ', 'Kỹ Năng Sát Thủ'...
  tags          text[],                  -- ['Hấp Huyết', 'Phòng Ngự', 'Tấn Công']
  -- Kích hệ (synergy icons)
  kich_he       jsonb,                   -- [{"ten":"Minh Chiêu Hầu","icon_url":"..."}]
  -- Kỹ năng
  ky_nang_ten   text,
  ky_nang_icon  text,
  ky_nang_mo_ta text,                    -- hỗ trợ {text|color}
  -- Chỉ số theo sao: lưu dạng JSON array [1sao, 2sao, 3sao]
  chi_so        jsonb,
  -- {khi_huyet:[1470,2646,14288], noi_luc:[50,50,50], tan_cong:[59,89,199], phong_thu:[105,105,105], toc_do:[0.8,0.8,0.8]}
  image_url     text,                    -- ảnh full tướng
  created_at    timestamptz default now()
);

alter table public.co_nghich_quan_co enable row level security;

drop policy if exists "co_nghich_qc_select" on public.co_nghich_quan_co;
drop policy if exists "co_nghich_qc_insert" on public.co_nghich_quan_co;
drop policy if exists "co_nghich_qc_update" on public.co_nghich_quan_co;
drop policy if exists "co_nghich_qc_delete" on public.co_nghich_quan_co;

create policy "co_nghich_qc_select" on public.co_nghich_quan_co for select using (true);
create policy "co_nghich_qc_insert" on public.co_nghich_quan_co for insert with check (auth.role() = 'authenticated');
create policy "co_nghich_qc_update" on public.co_nghich_quan_co for update using (auth.role() = 'authenticated');
create policy "co_nghich_qc_delete" on public.co_nghich_quan_co for delete using (auth.role() = 'authenticated');

-- ── Migration: đổi kich_he → lien_ket_phe + lien_ket_phai ──
alter table public.co_nghich_quan_co add column if not exists lien_ket_phe  text[];
alter table public.co_nghich_quan_co add column if not exists lien_ket_phai text[];
-- Nếu bảng chưa tồn tại, các cột này đã có trong CREATE TABLE ở mục 9
-- Có thể xóa cột kich_he cũ nếu muốn: alter table public.co_nghich_quan_co drop column if exists kich_he;
