import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Pencil, Trash2, X, Upload, LogOut, Eye, EyeOff, ChevronDown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, TrangBi } from '../lib/supabase';

// ── Admin Nav Tabs ──
function AdminNavTabs({ active }: { active: 'trang-bi' | 'co-nghich' }) {
  const navigate = useNavigate();
  const TABS = [
    { key: 'trang-bi',  label: 'Trang Bị',              path: '/admin'           },
    { key: 'co-nghich', label: 'Cờ Nghịch Thủy Hàn',    path: '/admin-co-nghich' },
  ] as const;
  return (
    <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '2px solid var(--border)' }}>
      {TABS.map(tab => {
        const isActive = active === tab.key;
        return (
          <button key={tab.key} onClick={() => navigate(tab.path)}
            style={{
              padding: '8px 20px', fontSize: 13, fontWeight: 700,
              color: isActive ? '#dc2626' : 'var(--text-2)',
              background: 'transparent', border: 'none',
              borderBottom: isActive ? '2px solid #dc2626' : '2px solid transparent',
              marginBottom: -2, cursor: 'pointer', transition: 'all 160ms',
            }}
            onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = '#dc2626'; }}
            onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)'; }}
          >{tab.label}</button>
        );
      })}
    </div>
  );
}

// ── Login form ──
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);

    // Lookup email từ username qua Supabase function
    const { data: emailData, error: lookupErr } = await supabase
      .rpc('get_email_by_username', { p_username: email.trim() });

    if (lookupErr || !emailData) {
      setError('Tên đăng nhập không tồn tại');
      setLoading(false);
      return;
    }

    const { error: signInErr } = await supabase.auth.signInWithPassword({
      email: emailData,
      password,
    });

    setLoading(false);
    if (signInErr) setError('Mật khẩu không đúng');
    else onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--bg-page)' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
        className="w-full max-w-sm rounded-2xl border p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <h1 className="text-xl font-black mb-6" style={{ color: 'var(--text-1)' }}>Đăng nhập Admin</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Tên đăng nhập</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required
              placeholder="Tên đăng nhập"
              className="w-full rounded-xl px-4 py-2.5 text-sm border outline-none transition-colors"
              style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)', color: 'var(--text-1)' }} />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Mật khẩu</label>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                className="w-full rounded-xl px-4 py-2.5 pr-10 text-sm border outline-none transition-colors"
                style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)', color: 'var(--text-1)' }} />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }}>
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full rounded-xl py-2.5 text-sm font-bold cursor-pointer transition-colors"
            style={{ backgroundColor: '#dc2626', color: '#fff', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

const LOAI_LIST = ['PVE', 'PVP', 'Hỗ Trợ', 'Phòng Ngự'];

function LoaiDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(256);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const handleOpen = () => {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom - 8;
      setMaxHeight(Math.min(256, Math.max(80, spaceBelow)));
      setPos({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    }
    setOpen(o => !o);
  };

  return (
    <div ref={ref} className="relative">
      <button ref={btnRef} type="button" onClick={handleOpen}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left"
        style={{
          borderColor: open ? '#ef4444' : value ? 'rgba(239,68,68,0.4)' : 'var(--border)',
          borderStyle: value || open ? 'solid' : 'dashed',
          backgroundColor: open || value ? 'rgba(239,68,68,0.08)' : 'var(--bg-sunken)',
        }}>
        {value
          ? <span className="text-sm font-black flex-1" style={{ color: '#dc2626' }}>{value}</span>
          : <span className="text-sm font-medium flex-1 text-center" style={{ color: 'var(--text-3)' }}>-- Chọn loại --</span>
        }
        <ChevronDown size={14} className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--text-3)' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.14, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: pos.top, left: pos.left, width: pos.width,
              zIndex: 9999, borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', overflow: 'hidden',
            }}>
            <div className="p-1.5 overflow-y-auto custom-scrollbar" style={{ maxHeight }}>
              {LOAI_LIST.map(loai => {
                const isActive = value === loai;
                return (
                  <button key={loai} type="button" onClick={() => { onChange(loai); setOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-100 text-sm font-bold"
                    style={{ backgroundColor: isActive ? 'rgba(239,68,68,0.1)' : 'transparent', color: isActive ? '#dc2626' : 'var(--text-2)' }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = isActive ? 'rgba(239,68,68,0.1)' : 'transparent'; }}>
                    {loai}
                    {isActive && <Check size={13} strokeWidth={3} className="shrink-0 ml-auto" style={{ color: '#dc2626' }} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SLOT_LIST = ['Mũ', 'Áo', 'Đai', 'Bao tay', 'Hộ uyển', 'Giày', 'Trạc', 'Nhẫn', 'Dây chuyền', 'Vũ khí'];

function SlotDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(256);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const handleOpen = () => {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom - 8;
      setMaxHeight(Math.min(280, Math.max(80, spaceBelow)));
      setPos({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    }
    setOpen(o => !o);
  };

  return (
    <div ref={ref} className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={handleOpen}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left"
        style={{
          borderColor: open ? '#ef4444' : value ? 'rgba(239,68,68,0.4)' : 'var(--border)',
          borderStyle: value || open ? 'solid' : 'dashed',
          backgroundColor: open || value ? 'rgba(239,68,68,0.08)' : 'var(--bg-sunken)',
        }}
      >
        {value
          ? <span className="text-sm font-black flex-1" style={{ color: '#dc2626' }}>{value}</span>
          : <span className="text-sm font-medium flex-1 text-center" style={{ color: 'var(--text-3)' }}>-- Chọn vị trí --</span>
        }
        <ChevronDown size={14} className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--text-3)' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: pos.top, left: pos.left, width: pos.width,
              zIndex: 9999, borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <div className="p-1.5 overflow-y-auto custom-scrollbar" style={{ maxHeight }}>
              {SLOT_LIST.map(slot => {
                const isActive = value === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => { onChange(slot); setOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-100 text-sm font-bold"
                    style={{ backgroundColor: isActive ? 'rgba(239,68,68,0.1)' : 'transparent', color: isActive ? '#dc2626' : 'var(--text-2)' }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = isActive ? 'rgba(239,68,68,0.1)' : 'transparent'; }}
                  >
                    {slot}
                    {isActive && <Check size={13} strokeWidth={3} className="shrink-0 ml-auto" style={{ color: '#dc2626' }} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Item form modal ──
type FormData = { ten: string; ten_zh: string; mo_ta: string; chi_tiet: string; slot: string; loai: string; cap: string; mua_giai: string; };
const EMPTY_FORM: FormData = { ten: '', ten_zh: '', mo_ta: '', chi_tiet: '', slot: '', loai: '', cap: '', mua_giai: '' };

function ItemModal({ item, onClose, onSaved, seasons, caps }: {
  item: TrangBi | null; onClose: () => void; onSaved: () => void; seasons: string[]; caps: string[];
}) {
  const isEdit = !!item;
  const [form, setForm] = useState<FormData>(item ? {
    ten: item.ten, ten_zh: item.ten_zh ?? '', mo_ta: item.mo_ta ?? '',
    chi_tiet: item.chi_tiet ?? '', slot: item.slot ?? '', loai: item.loai ?? '',
    cap: (item as any).cap ?? '', mua_giai: (item as any).mua_giai ?? '',
  } : EMPTY_FORM);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(item?.image_url ?? '');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.ten.trim()) { setError('Tên trang bị không được trống'); return; }
    setUploading(true); setError('');

    let image_url = item?.image_url ?? null;

    // Upload ảnh nếu có file mới
    if (imageFile) {
      const ext = imageFile.name.split('.').pop();
      const path = `${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from('trang-bi-images').upload(path, imageFile, { upsert: true });
      if (upErr) { setError('Lỗi upload ảnh: ' + upErr.message); setUploading(false); return; }
      const { data: urlData } = supabase.storage.from('trang-bi-images').getPublicUrl(path);
      image_url = urlData.publicUrl;
    }

    const payload = {
      ten: form.ten.trim(),
      ten_zh: form.ten_zh.trim() || null,
      mo_ta: form.mo_ta.trim() || null,
      chi_tiet: form.chi_tiet.trim() || null,
      slot: form.slot.trim() || null,
      loai: form.loai.trim() || null,
      cap: form.cap.trim() || null,
      mua_giai: form.mua_giai.trim() || null,
      tags: [],
      image_url,
    };

    if (isEdit) {
      const { error: dbErr } = await supabase.from('trang_bi').update(payload).eq('id', item!.id);
      if (dbErr) { setError(dbErr.message); setUploading(false); return; }
    } else {
      const { error: dbErr } = await supabase.from('trang_bi').insert(payload);
      if (dbErr) { setError(dbErr.message); setUploading(false); return; }
    }

    setUploading(false);
    onSaved();
    onClose();
  };

  const inputStyle = {
    backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)',
    color: 'var(--text-1)', borderRadius: 10, border: '1px solid var(--border)',
    width: '100%', padding: '8px 14px', fontSize: 14, outline: 'none',
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl border shadow-2xl w-full overflow-visible"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', maxWidth: 1000, maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa trang bị' : 'Thêm trang bị mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.1)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
            <X size={17} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          {/* 3 cột */}
          <div className="flex" style={{ overflow: 'visible', flex: 1, minHeight: 0 }}>

            {/* CỘT 1 — ảnh */}
            <div className="flex flex-col gap-3 p-5 border-r" style={{ borderColor: 'var(--border)', width: 200, flexShrink: 0 }}>
              <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Hình ảnh</label>
              <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-sunken)', border: '1px solid var(--border)' }}>
                {imagePreview
                  ? <img src={imagePreview} alt="" className="w-full h-full object-cover" />
                  : <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">🛡️</div>}
              </div>
              <label className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-xs font-semibold transition-colors justify-center"
                style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#dc2626'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}>
                <Upload size={13} /> Chọn ảnh
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>

              {/* Gợi ý mùa giải */}
              {seasons.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-3)' }}>Mùa giải</p>
                  <div className="flex flex-col gap-1.5">
                    {seasons.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm(p => ({ ...p, mua_giai: s }))}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                        style={{
                          backgroundColor: form.mua_giai === s ? 'rgba(239,68,68,0.1)' : 'var(--bg-sunken)',
                          color: form.mua_giai === s ? '#dc2626' : 'var(--text-2)',
                          border: `1px solid ${form.mua_giai === s ? 'rgba(239,68,68,0.3)' : 'var(--border)'}`,
                        }}
                        onMouseEnter={e => { if (form.mua_giai !== s) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = form.mua_giai === s ? 'rgba(239,68,68,0.1)' : 'var(--bg-sunken)'; }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Gợi ý cấp trang bị */}
              {caps.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-3)' }}>Cấp</p>
                  <div className="flex flex-wrap gap-1.5">
                    {caps.map(c => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setForm(p => ({ ...p, cap: c }))}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors"
                        style={{
                          backgroundColor: form.cap === c ? 'rgba(239,68,68,0.1)' : 'var(--bg-sunken)',
                          color: form.cap === c ? '#dc2626' : 'var(--text-2)',
                          border: `1px solid ${form.cap === c ? 'rgba(239,68,68,0.3)' : 'var(--border)'}`,
                        }}
                        onMouseEnter={e => { if (form.cap !== c) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = form.cap === c ? 'rgba(239,68,68,0.1)' : 'var(--bg-sunken)'; }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CỘT 2 — tên + vị trí + loại + cấp */}
            <div className="flex flex-col gap-3 p-5 border-r custom-scrollbar" style={{ borderColor: 'var(--border)', width: 340, flexShrink: 0, overflow: 'auto' }}>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Tên trang bị *</label>
                <input value={form.ten} onChange={e => setForm(p => ({ ...p, ten: e.target.value }))}
                  placeholder="Ví dụ: Thiên Hà Kiếm Giáp" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Tên chữ Hán</label>
                <input value={form.ten_zh} onChange={e => setForm(p => ({ ...p, ten_zh: e.target.value }))}
                  placeholder="天河剑甲" style={inputStyle} />
              </div>
              <div className="flex flex-col gap-3" style={{ overflow: 'visible' }}>
                <div style={{ overflow: 'visible' }}>
                  <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Vị trí</label>
                  <SlotDropdown value={form.slot} onChange={v => setForm(p => ({ ...p, slot: v }))} />
                </div>
                <div style={{ overflow: 'visible' }}>
                  <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Loại</label>
                  <LoaiDropdown value={form.loai} onChange={v => setForm(p => ({ ...p, loai: v }))} />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Cấp trang bị</label>
                <input value={form.cap} onChange={e => setForm(p => ({ ...p, cap: e.target.value }))}
                  placeholder="Ví dụ: 76, 80, 85..." style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Mùa giải</label>
                <input value={form.mua_giai} onChange={e => setForm(p => ({ ...p, mua_giai: e.target.value }))}
                  placeholder="Ví dụ: Lục Đạo Minh Đồ..." style={inputStyle} />
              </div>
            </div>

            {/* CỘT 3 — mô tả + chi tiết + actions */}
            <div className="flex flex-col gap-3 p-5 flex-1 min-w-0 min-h-0">
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Mô tả</label>
                <textarea value={form.mo_ta} onChange={e => setForm(p => ({ ...p, mo_ta: e.target.value }))}
                  placeholder="Mô tả hiệu quả trang bị..."
                  style={{ ...inputStyle, resize: 'vertical', flex: 1, minHeight: 80 }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Chi tiết chỉ số</label>
                <textarea value={form.chi_tiet} onChange={e => setForm(p => ({ ...p, chi_tiet: e.target.value }))}
                  placeholder="• Chỉ số 1&#10;• Chỉ số 2..."
                  style={{ ...inputStyle, resize: 'vertical', flex: 1, minHeight: 80 }} />
              </div>
              {error && <p className="text-xs text-red-500">{error}</p>}
              <div className="flex gap-2 mt-auto">
                <button type="button" onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer transition-colors"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>
                  Hủy
                </button>
                <button type="submit" disabled={uploading}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff', opacity: uploading ? 0.7 : 1 }}>
                  {uploading ? 'Đang lưu...' : isEdit ? 'Lưu thay đổi' : 'Thêm trang bị'}
                </button>
              </div>
            </div>

          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

const SLOTS = ['Tất cả', 'Mũ', 'Áo', 'Đai', 'Bao tay', 'Hộ uyển', 'Giày', 'Trạc', 'Nhẫn', 'Dây chuyền', 'Vũ khí'];

// ── Main Admin page ──
export default function AdminTrangBi() {
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [items, setItems] = useState<TrangBi[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeSlot, setActiveSlot] = useState('Tất cả');
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<TrangBi | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Check session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from('trang_bi').select('*').order('created_at', { ascending: false });
    setItems(data ?? []);
    setLoading(false);
  };

  // Chỉ fetch lần đầu khi session được set, dùng ref để tránh fetch lại khi session refresh
  const hasFetchedRef = React.useRef(false);
  useEffect(() => {
    if (session && !hasFetchedRef.current) {
      hasFetchedRef.current = true;
      fetchItems();
    }
  }, [session]);

  const handleLogout = async () => { await supabase.auth.signOut(); };

  const handleDelete = async (id: string) => {
    await supabase.from('trang_bi').delete().eq('id', id);
    setDeleteId(null);
    fetchItems();
  };

  const filteredItems = useMemo(() => {
    const base = activeSlot === 'Tất cả' ? items : items.filter(i => i.slot === activeSlot);
    return base.sort((a, b) => {
      const ca = parseInt((a as any).cap ?? '0') || 0;
      const cb = parseInt((b as any).cap ?? '0') || 0;
      return cb - ca;
    });
  }, [items, activeSlot]);

  if (checking) return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: 'var(--bg-page)' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className="w-6 h-6 rounded-full border-2" style={{ borderColor: 'var(--border)', borderTopColor: '#dc2626' }} />
    </div>
  );

  if (!session) return <LoginForm onLogin={() => supabase.auth.getSession().then(({ data }) => setSession(data.session))} />;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 w-full">
      {/* Nav tabs — chuyển giữa các trang admin */}
      <AdminNavTabs active="trang-bi" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-black" style={{ color: 'var(--text-1)' }}>Quản lý Trang Bị</h1>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{session.user.email}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { setEditItem(null); setModalOpen(true); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors"
            style={{ backgroundColor: '#dc2626', color: '#fff' }}>
            <Plus size={15} /> Thêm mới
          </button>
          <button onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-card)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ef4444'; (e.currentTarget as HTMLElement).style.color = '#ef4444'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'; }}>
            <LogOut size={15} /> Đăng xuất
          </button>
        </div>
      </div>

      {/* Tab slots */}
      <div className="flex flex-wrap gap-2 mb-5">
        {SLOTS.map(slot => (
          <button
            key={slot}
            onClick={() => setActiveSlot(slot)}
            style={{
              padding: '6px 16px', fontSize: 13, fontWeight: 700, borderRadius: 6,
              border: `1px solid ${activeSlot === slot ? 'rgba(239,68,68,0.5)' : 'var(--border)'}`,
              background: activeSlot === slot ? 'rgba(239,68,68,0.1)' : 'var(--bg-card)',
              color: activeSlot === slot ? '#dc2626' : 'var(--text-2)',
              cursor: 'pointer', transition: 'all 160ms',
              boxShadow: activeSlot === slot ? '0 0 8px rgba(239,68,68,0.3)' : 'none',
            }}
          >{slot}</button>
        ))}
      </div>

      {/* Table */}
      <AnimatePresence mode="wait">
        <motion.div key={activeSlot}
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}
          className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-5 h-5 rounded-full border-2" style={{ borderColor: 'var(--border)', borderTopColor: '#dc2626' }} />
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-16">
            <span className="text-4xl opacity-20">🛡️</span>
            <p className="text-sm" style={{ color: 'var(--text-3)' }}>
              {activeSlot === 'Tất cả' ? 'Chưa có trang bị nào. Nhấn "Thêm mới" để bắt đầu.' : `Chưa có trang bị nào cho slot "${activeSlot}".`}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: 100 }} />
                <col style={{ width: 220 }} />
                <col style={{ width: 110 }} />
                <col style={{ width: 110 }} />
                <col style={{ width: 150 }} />
                <col style={{ width: 80 }} />
              </colgroup>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                  {['Hình ảnh', 'Tên', 'Vị trí', 'Loại', 'Mùa giải', ''].map((h, i, arr) => (
                    <th key={i}
                      className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                      style={{ color: 'var(--text-1)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                      <div
                        onClick={() => { setEditItem(item); setModalOpen(true); }}
                        className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                        style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                      >
                        {item.image_url
                          ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-cover" />
                          : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>🛡️</div>}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-base tracking-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 100 }}>{item.ten}</span>
                        {item.ten_zh && <span className="text-sm font-chinese" style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)' }}>{item.ten_zh}</span>}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                      {item.slot
                        ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                            style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>
                            {item.slot}
                          </span>
                        : <span style={{ color: 'var(--text-3)' }}>—</span>
                      }
                    </td>
                    <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                      {item.loai
                        ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                            style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>
                            {item.loai}
                          </span>
                        : <span style={{ color: 'var(--text-3)' }}>—</span>
                      }
                    </td>
                    <td className="px-4 py-4 text-center text-sm" style={{ borderRight: '1px solid var(--border)', color: 'var(--text-2)' }}>
                      {(item as any).mua_giai || '—'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-center gap-1">
                        <button onClick={() => { setEditItem(item); setModalOpen(true); }}
                          className="p-1.5 rounded-lg cursor-pointer transition-colors" style={{ color: '#1d4ed8' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(29,78,216,0.1)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
                          <Pencil size={14} />
                        </button>
                        <button onClick={() => setDeleteId(item.id)}
                          className="p-1.5 rounded-lg cursor-pointer transition-colors" style={{ color: '#dc2626' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.1)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
      </AnimatePresence>

      {/* Add/Edit modal */}
      <AnimatePresence>
        {modalOpen && (
          <ItemModal item={editItem} onClose={() => { setModalOpen(false); setEditItem(null); }} onSaved={fetchItems}
            seasons={Array.from(new Set(items.map(i => (i as any).mua_giai).filter(Boolean))).sort()}
            caps={Array.from(new Set(items.map(i => (i as any).cap).filter(Boolean)))
              .sort((a, b) => parseInt(b) - parseInt(a))} />
        )}
      </AnimatePresence>

      {/* Delete confirm */}
      <AnimatePresence>
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl border p-6 w-full max-w-sm"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <h3 className="font-black text-base mb-2" style={{ color: 'var(--text-1)' }}>Xóa trang bị?</h3>
              <p className="text-sm mb-5" style={{ color: 'var(--text-3)' }}>Hành động này không thể hoàn tác.</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>
                  Hủy
                </button>
                <button onClick={() => handleDelete(deleteId)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>
                  Xóa
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
