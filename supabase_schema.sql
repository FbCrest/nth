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
