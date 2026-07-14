import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Pencil, Trash2, X, Upload, LogOut, Eye, EyeOff, Tag, GripVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, type CoNghichTrangBiRow, type CoNghichBuffRow, type CoNghichQuanCoRow } from '../lib/supabase';
import { coNghichIcons } from '../data/co-nghich-icons';
import { quanCoRoles as initialRoles, type QuanCoRole } from '../data/co-nghich-roles';
import { lienKetPheData as initialPhe, type LienKetPhe } from '../data/co-nghich-lien-ket-phe';
import { lienKetPhaiData as initialPhai, type LienKetPhai } from '../data/co-nghich-lien-ket-phai';

// ── Role color helpers (dynamic, loaded from /api/roles) ──
// Converts hex color to rgba bg/border
function hexToRoleStyle(color: string) {
  return {
    color,
    bg: color + '1a',    // ~10% opacity
    border: color + '59', // ~35% opacity
  };
}
function getLoaiStyle(loai: string, roles?: QuanCoRole[]) {
  const list = roles ?? initialRoles;
  const role = list.find(r => r.label === loai);
  if (role) return hexToRoleStyle(role.color);
  return { color: '#7c3aed', bg: '#7c3aed1a', border: '#7c3aed59' };
}

// ── Lien ket phe/phai - loaded from data files ──
const LIEN_KET_PHE_LIST = initialPhe.map(p => ({ ten: p.ten, slug: p.slug }));
const LIEN_KET_PHAI_LIST = initialPhai.map(p => ({ ten: p.ten, slug: p.slug }));

// ── Admin Nav Tabs (dùng chung) ──
function AdminNavTabs({ active }: { active: 'trang-bi' | 'co-nghich' }) {
  const navigate = useNavigate();
  const TABS = [
    { key: 'trang-bi',  label: 'Trang Bị',           path: '/admin'           },
    { key: 'co-nghich', label: 'Cờ Nghịch Thủy Hàn', path: '/admin-co-nghich' },
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

// ── Login ──
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    const { data: emailData, error: lookupErr } = await supabase.rpc('get_email_by_username', { p_username: username.trim() });
    if (lookupErr || !emailData) { setError('Tên đăng nhập không tồn tại'); setLoading(false); return; }
    const { error: signInErr } = await supabase.auth.signInWithPassword({ email: emailData, password });
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
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} required
              className="w-full rounded-xl px-4 py-2.5 text-sm border outline-none"
              style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)', color: 'var(--text-1)' }} />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: 'var(--text-3)' }}>Mật khẩu</label>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                className="w-full rounded-xl px-4 py-2.5 pr-10 text-sm border outline-none"
                style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)', color: 'var(--text-1)' }} />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }}>
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full rounded-xl py-2.5 text-sm font-bold cursor-pointer"
            style={{ backgroundColor: '#dc2626', color: '#fff', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// ── Shared input style ──
const inputStyle = {
  backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)',
  color: 'var(--text-1)', borderRadius: 10, border: '1px solid var(--border)',
  width: '100%', padding: '8px 14px', fontSize: 14, outline: 'none',
} as React.CSSProperties;

// ── IndexedDB helpers để lưu/lấy DirectoryHandle ──
const DB_NAME = 'nth-wiki-dirs';
const DB_STORE = 'dir-handles';

async function saveHandle(key: string, handle: FileSystemDirectoryHandle, publicPath: string) {
  return new Promise<void>((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
    req.onsuccess = () => {
      const tx = req.result.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).put({ handle, publicPath }, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    req.onerror = () => reject(req.error);
  });
}

async function loadHandleData(key: string): Promise<{ handle: FileSystemDirectoryHandle; publicPath: string } | null> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
    req.onsuccess = () => {
      const tx = req.result.transaction(DB_STORE, 'readonly');
      const get = tx.objectStore(DB_STORE).get(key);
      get.onsuccess = () => resolve(get.result ?? null);
      get.onerror = () => reject(get.error);
    };
    req.onerror = () => reject(req.error);
  });
}

// ── Local Image Uploader — dùng File System Access API ──
function LocalImageUploader({ preview, onChange, dirKey = 'default' }: {
  preview: string; onChange: (url: string, fileName: string) => void; dirKey?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [dirInfo, setDirInfo] = useState<{ name: string; publicPath: string } | null>(null);
  const [pendingHandle, setPendingHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [pathInput, setPathInput] = useState('images/co-nghich-thuy-han');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadHandleData(dirKey).then(d => {
      if (d) setDirInfo({ name: d.handle.name, publicPath: d.publicPath });
    }).catch(() => {});
  }, [dirKey]);

  const pickDir = async () => {
    try {
      const handle = await (window as any).showDirectoryPicker({ mode: 'readwrite' });
      setPendingHandle(handle);
      setPathInput('images/co-nghich-thuy-han/' + handle.name);
    } catch { /* hủy */ }
  };

  const confirmDir = async () => {
    if (!pendingHandle) return;
    await saveHandle(dirKey, pendingHandle, pathInput.trim());
    setDirInfo({ name: pendingHandle.name, publicPath: pathInput.trim() });
    setPendingHandle(null);
  };

  // Gọi requestPermission trực tiếp trong click handler (user gesture) rồi mới mở file picker
  const handleClickUpload = async () => {
    if (uploading || !dirInfo || !!pendingHandle) return;
    const data = await loadHandleData(dirKey).catch(() => null);
    if (!data) { alert('Vui lòng chọn thư mục lưu trước!'); return; }
    try {
      // requestPermission phải được gọi trong user gesture — đây là click handler nên hợp lệ
      const perm = await (data.handle as any).requestPermission({ mode: 'readwrite' });
      if (perm !== 'granted') { alert('Không có quyền ghi vào thư mục này.'); return; }
    } catch (err: any) { alert('Lỗi xin quyền: ' + err.message); return; }
    // Sau khi có quyền, mở file picker
    fileInputRef.current?.click();
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await loadHandleData(dirKey).catch(() => null);
    if (!data) { alert('Vui lòng chọn thư mục lưu trước!'); return; }
    setUploading(true);
    try {
      const fileHandle = await data.handle.getFileHandle(file.name, { create: true });
      const writable = await (fileHandle as any).createWritable();
      await writable.write(file);
      await writable.close();
      const url = '/' + data.publicPath.replace(/^\//, '') + '/' + file.name;
      onChange(url, file.name);
    } catch (err: any) { alert('Lỗi ghi file: ' + err.message); }
    setUploading(false);
    // Reset input để có thể chọn lại cùng file
    e.target.value = '';
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Preview */}
      <div style={{ width: '100%', aspectRatio: '1', borderRadius: 10, overflow: 'hidden', backgroundColor: 'var(--bg-sunken)', border: '1px solid var(--border)' }}>
        {preview
          ? <img src={preview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, opacity: 0.15 }}>🖼️</div>
        }
      </div>

      {/* Confirm path inline khi vừa pick xong */}
      {pendingHandle ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '6px 8px', borderRadius: 8, border: '1px solid rgba(239,68,68,0.4)', background: 'rgba(239,68,68,0.06)' }}>
          <span style={{ fontSize: 11, color: 'var(--text-3)' }}>Đường dẫn public:</span>
          <input value={pathInput} onChange={e => setPathInput(e.target.value)}
            style={{ ...inputStyle, fontSize: 11, padding: '4px 8px' }} />
          <button type="button" onClick={confirmDir}
            className="px-2 py-1 rounded-lg text-xs font-bold cursor-pointer"
            style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xác nhận</button>
        </div>
      ) : (
        <button type="button" onClick={pickDir}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-xs font-semibold justify-center"
          style={{ borderColor: dirInfo ? 'rgba(239,68,68,0.4)' : 'var(--border)', color: dirInfo ? '#dc2626' : 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>
          📁 {dirInfo ? dirInfo.name : 'Chọn thư mục'}
        </button>
      )}

      {/* Chọn ảnh & copy — dùng button thay vì label để gọi requestPermission trước */}
      <button
        type="button"
        onClick={handleClickUpload}
        disabled={uploading || !dirInfo || !!pendingHandle}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-xs font-semibold justify-center"
        style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)', opacity: (dirInfo && !pendingHandle) ? 1 : 0.4 }}
      >
        <Upload size={13} /> {uploading ? 'Đang sao chép...' : 'Chọn ảnh & sao chép'}
      </button>
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
}

// ── Wrapper tương thích với code cũ dùng ImageUploader ──
function ImageUploader({ preview, onChange }: { bucket?: string; preview: string; onChange: (url: string) => void; }) {
  return <LocalImageUploader dirKey="default" preview={preview} onChange={(url) => onChange(url)} />;
}

// ── Modal Trang Bị ──
// Helper: chèn "• " tại vị trí con trỏ trong textarea
function insertBullet(
  ref: React.RefObject<HTMLTextAreaElement>,
  value: string,
  onChange: (v: string) => void
) {
  const pos = ref.current?.selectionStart ?? value.length;
  const { newValue, newCaret } = insertAtCaret(value, '• ', pos);
  onChange(newValue);
  requestAnimationFrame(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.selectionStart = ref.current.selectionEnd = newCaret;
    }
  });
}
// Helper: chèn token tại vị trí con trỏ
function insertAtCaret(value: string, token: string, caretPos: number | null): { newValue: string; newCaret: number } {
  const pos = caretPos ?? value.length;
  const newValue = value.slice(0, pos) + token + value.slice(pos);
  return { newValue, newCaret: pos + token.length };
}

type TBForm = { ten: string; ten_zh: string; danh_muc: string; hieu_qua: string; dac_hieu: string; image_url: string; };
const EMPTY_TB: TBForm = { ten: '', ten_zh: '', danh_muc: 'Tấn công', hieu_qua: '', dac_hieu: '', image_url: '' };
const DANH_MUC_LIST = ['Tấn công', 'Phòng thủ', 'Đặc biệt'];

function ModalTrangBi({ item, onClose, onSaved }: { item: CoNghichTrangBiRow | null; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState<TBForm>(item ? {
    ten: item.ten, ten_zh: item.ten_zh ?? '', danh_muc: item.danh_muc ?? 'Tấn công',
    hieu_qua: item.hieu_qua ?? '', dac_hieu: (item as any).dac_hieu ?? '', image_url: item.image_url ?? '',
  } : EMPTY_TB);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const hieu_quaRef = React.useRef<HTMLTextAreaElement>(null);
  const dac_hieuRef = React.useRef<HTMLTextAreaElement>(null);
  const f = (k: keyof TBForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.ten.trim()) { setError('Tên không được trống'); return; }
    setSaving(true); setError('');
    const payload = { ten: form.ten.trim(), ten_zh: form.ten_zh.trim() || null, danh_muc: form.danh_muc, hieu_qua: form.hieu_qua.trim() || null, dac_hieu: form.dac_hieu.trim() || null, image_url: form.image_url || null };
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit ? { ...payload, id: item!.id } : payload;
      const res = await window.fetch('/api/trang-bi-co', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('Lỗi lưu dữ liệu');
    } catch (e: any) { setError(e.message); setSaving(false); return; }
    setSaving(false);
    onSaved(); onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 680, backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa trang bị' : 'Thêm trang bị mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}><X size={17} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 p-5">
            {/* Ảnh */}
            <div style={{ width: 160, flexShrink: 0 }}>
              <ImageUploader bucket="co-nghich-images" preview={form.image_url} onChange={url => setForm(p => ({ ...p, image_url: url }))} />
            </div>
            {/* Fields */}
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên *</label>
                <input value={form.ten} onChange={f('ten')} placeholder="Tinh Thiết Trường Kiếm" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên chữ Hán</label>
                <input value={form.ten_zh} onChange={f('ten_zh')} placeholder="精铁长剑" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Danh mục</label>
                <select value={form.danh_muc} onChange={f('danh_muc')} style={inputStyle}>
                  {DANH_MUC_LIST.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="flex-1">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Thuộc Tính</label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <IconQuickInsert textareaRef={hieu_quaRef} onInsert={(token, pos) => setForm(p => ({ ...p, hieu_qua: insertAtCaret(p.hieu_qua, token, pos).newValue }))} />
                    <button type="button" onClick={() => insertBullet(hieu_quaRef, form.hieu_qua, v => setForm(p => ({ ...p, hieu_qua: v })))}
                      style={{ fontSize: 13, padding: '1px 8px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--bg-sunken)', cursor: 'pointer', color: 'var(--text-2)', fontWeight: 700 }}>
                      + •
                    </button>
                  </div>
                </div>
                <textarea ref={hieu_quaRef} value={form.hieu_qua} onChange={f('hieu_qua')} rows={3}
                  placeholder={"Tấn công ✗: +20%\nXuyên giáp: +5%"} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <div className="flex-1">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Hiệu Ứng</label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <IconQuickInsert textareaRef={dac_hieuRef} onInsert={(token, pos) => setForm(p => ({ ...p, dac_hieu: insertAtCaret(p.dac_hieu, token, pos).newValue }))} />
                    <button type="button" onClick={() => insertBullet(dac_hieuRef, form.dac_hieu, v => setForm(p => ({ ...p, dac_hieu: v })))}
                      style={{ fontSize: 13, padding: '1px 8px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--bg-sunken)', cursor: 'pointer', color: 'var(--text-2)', fontWeight: 700 }}>
                      + •
                    </button>
                  </div>
                </div>
                <textarea ref={dac_hieuRef} value={form.dac_hieu} onChange={f('dac_hieu')} rows={3}
                  placeholder={"• Sử dụng được trang bị này sẽ nhận hiệu ứng..."} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 px-5 pb-2">{error}</p>}
          <div className="flex gap-2 px-5 pb-5">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
              style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
              style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Đang lưu...' : isEdit ? 'Lưu' : 'Thêm'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ── Modal Buff ──
type BuffForm = { ten: string; ten_zh: string; do_hiem: string; mo_ta: string; image_url: string; };
const EMPTY_BUFF: BuffForm = { ten: '', ten_zh: '', do_hiem: 'Xanh', mo_ta: '', image_url: '' };
const DO_HIEM_LIST = ['Xanh', 'Tím', 'Vàng'];

function ModalBuff({ item, onClose, onSaved }: { item: CoNghichBuffRow | null; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState<BuffForm>(item ? {
    ten: item.ten, ten_zh: item.ten_zh ?? '', do_hiem: item.do_hiem ?? 'Xanh',
    mo_ta: item.mo_ta ?? '', image_url: item.image_url ?? '',
  } : EMPTY_BUFF);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const mo_taRef = React.useRef<HTMLTextAreaElement>(null);
  const f = (k: keyof BuffForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.ten.trim()) { setError('Tên không được trống'); return; }
    setSaving(true); setError('');
    const payload = { ten: form.ten.trim(), ten_zh: form.ten_zh.trim() || null, do_hiem: form.do_hiem, mo_ta: form.mo_ta.trim() || null, image_url: form.image_url || null };
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit ? { ...payload, id: item!.id } : payload;
      const res = await window.fetch('/api/buff-co', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('Lỗi lưu dữ liệu');
    } catch (e: any) { setError(e.message); setSaving(false); return; }
    setSaving(false);
    onSaved(); onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 680, backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa tâm ngộ' : 'Thêm tâm ngộ mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}><X size={17} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 p-5">
            <div style={{ width: 160, flexShrink: 0 }}>
              <ImageUploader bucket="co-nghich-images" preview={form.image_url} onChange={url => setForm(p => ({ ...p, image_url: url }))} />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên *</label>
                <input value={form.ten} onChange={f('ten')} placeholder="Đồng Tâm Trận" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên chữ Hán</label>
                <input value={form.ten_zh} onChange={f('ten_zh')} placeholder="同心阵" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Độ hiếm</label>
                <select value={form.do_hiem} onChange={f('do_hiem')} style={inputStyle}>
                  {DO_HIEM_LIST.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="flex-1">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Mô tả hiệu quả</label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <IconQuickInsert textareaRef={mo_taRef} onInsert={(token, pos) => setForm(p => ({ ...p, mo_ta: insertAtCaret(p.mo_ta, token, pos).newValue }))} />
                    <button type="button" onClick={() => insertBullet(mo_taRef, form.mo_ta, v => setForm(p => ({ ...p, mo_ta: v })))}
                      style={{ fontSize: 13, padding: '1px 8px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--bg-sunken)', cursor: 'pointer', color: 'var(--text-2)', fontWeight: 700 }}>
                      + •
                    </button>
                  </div>
                </div>
                <textarea ref={mo_taRef} value={form.mo_ta} onChange={f('mo_ta')} rows={5}
                  placeholder="Khi khai chiến, cứ mỗi 1 quân cờ đồng đội..." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 px-5 pb-2">{error}</p>}
          <div className="flex gap-2 px-5 pb-5">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
              style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
              style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Đang lưu...' : isEdit ? 'Lưu' : 'Thêm'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ── Section quan ly trang bi (local API) ──
function SectionTrangBi({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<CoNghichTrangBiRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<CoNghichTrangBiRow | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const dragId = React.useRef<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await window.fetch('/api/trang-bi-co');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    onAddNew(() => { setEditItem(null); setModalOpen(true); });
  }, []);

  const handleDelete = async (id: string) => {
    await window.fetch('/api/trang-bi-co', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetchData();
  };

  const handleDrop = async (targetId: string) => {
    const fromId = dragId.current;
    if (!fromId || fromId === targetId) { setDragOverId(null); return; }
    const ids = items.map(i => i.id);
    const fromIdx = ids.indexOf(fromId);
    const toIdx = ids.indexOf(targetId);
    const newIds = [...ids];
    newIds.splice(fromIdx, 1);
    newIds.splice(toIdx, 0, fromId);
    const map = new Map(items.map(i => [i.id, i]));
    setItems(newIds.map(id => map.get(id)!));
    setDragOverId(null);
    await window.fetch('/api/reorder/trang-bi-co', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: newIds }) });
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Trang Bi</h2>
      </div>
      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <span className="text-4xl opacity-20">&#9876;</span>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chua co trang bi nao.</p>
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: 36 }} />
                  <col style={{ width: 100 }} />
                  <col />
                  <col style={{ width: 130 }} />
                  <col style={{ width: 80 }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['', 'Hinh anh', 'Ten', 'Danh Muc', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-xs font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-3)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}
                      draggable
                      onDragStart={() => { dragId.current = item.id; }}
                      onDragOver={e => { e.preventDefault(); setDragOverId(item.id); }}
                      onDragLeave={() => setDragOverId(null)}
                      onDrop={() => handleDrop(item.id)}
                      style={{ borderBottom: '1px solid var(--border)', transition: 'background 120ms',
                        backgroundColor: dragOverId === item.id ? 'rgba(220,38,38,0.06)' : 'transparent',
                        outline: dragOverId === item.id ? '2px solid rgba(220,38,38,0.3)' : 'none',
                      }}
                      onMouseEnter={e => { if (dragOverId !== item.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-sunken)'; }}
                      onMouseLeave={e => { if (dragOverId !== item.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}>
                      <td style={{ borderRight: '1px solid var(--border)', textAlign: 'center', cursor: 'grab', padding: '0 4px' }}>
                        <GripVertical size={14} style={{ color: 'var(--text-3)', opacity: 0.5, margin: 'auto' }} />
                      </td>
                      <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                        <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                          className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                          style={{ transition: 'transform 0.4s ease' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                          {item.image_url
                            ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-contain" />
                            : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>&#9876;</div>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        <div className="flex flex-col items-center gap-0.5">
                          <span style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400, fontSize: 16 }}>{item.ten}</span>
                          {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 13 }}>{item.ten_zh}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        {item.danh_muc
                          ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                              style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>
                              {item.danh_muc}
                            </span>
                          : <span style={{ color: 'var(--text-3)' }}>&#8212;</span>}
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
        </div>
      )}
      <AnimatePresence>
        {modalOpen && <ModalTrangBi item={editItem} onClose={() => setModalOpen(false)} onSaved={fetchData} />}
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}
              className="rounded-2xl border p-6 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>Xác nhận xóa trang bị này?</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
                <button onClick={() => handleDelete(deleteId!)} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xoa</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Section quản lý buff (local API) ──
function SectionBuff({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<CoNghichBuffRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<CoNghichBuffRow | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const dragId = React.useRef<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await window.fetch('/api/buff-co');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    onAddNew(() => { setEditItem(null); setModalOpen(true); });
  }, []);

  const handleDelete = async (id: string) => {
    await window.fetch('/api/buff-co', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetchData();
  };

  const handleDrop = async (targetId: string) => {
    const fromId = dragId.current;
    if (!fromId || fromId === targetId) { setDragOverId(null); return; }
    const ids = items.map(i => i.id);
    const fromIdx = ids.indexOf(fromId);
    const toIdx = ids.indexOf(targetId);
    const newIds = [...ids];
    newIds.splice(fromIdx, 1);
    newIds.splice(toIdx, 0, fromId);
    const map = new Map(items.map(i => [i.id, i]));
    setItems(newIds.map(id => map.get(id)!));
    setDragOverId(null);
    await window.fetch('/api/reorder/buff-co', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: newIds }) });
  };

  const rarityColor = (r: string | null) => {
    if (r === 'Xanh') return '#1d4ed8';
    if (r === 'Tim')  return '#7c3aed';
    if (r === 'Vang') return '#b45309';
    return '#6b7280';
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Tam Ngo ({items.length})</h2>
      </div>
      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <span className="text-4xl opacity-20">&#10022;</span>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chua co tam ngo nao.</p>
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: 36 }} />
                  <col style={{ width: 100 }} />
                  <col />
                  <col style={{ width: 130 }} />
                  <col style={{ width: 80 }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['', 'Hinh anh', 'Ten', 'Do Hiem', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-xs font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-3)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => {
                    const rc = rarityColor(item.do_hiem);
                    return (
                      <tr key={item.id}
                        draggable
                        onDragStart={() => { dragId.current = item.id; }}
                        onDragOver={e => { e.preventDefault(); setDragOverId(item.id); }}
                        onDragLeave={() => setDragOverId(null)}
                        onDrop={() => handleDrop(item.id)}
                        style={{ borderBottom: '1px solid var(--border)', transition: 'background 120ms',
                          backgroundColor: dragOverId === item.id ? 'rgba(220,38,38,0.06)' : 'transparent',
                          outline: dragOverId === item.id ? '2px solid rgba(220,38,38,0.3)' : 'none',
                        }}
                        onMouseEnter={e => { if (dragOverId !== item.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-sunken)'; }}
                        onMouseLeave={e => { if (dragOverId !== item.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}>
                        <td style={{ borderRight: '1px solid var(--border)', textAlign: 'center', cursor: 'grab', padding: '0 4px' }}>
                          <GripVertical size={14} style={{ color: 'var(--text-3)', opacity: 0.5, margin: 'auto' }} />
                        </td>
                        <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                          <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                            className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                            style={{ transition: 'transform 0.4s ease' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                            {item.image_url
                              ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-contain" />
                              : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>&#10022;</div>}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          <div className="flex flex-col items-center gap-0.5">
                            <span style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400, fontSize: 16 }}>{item.ten}</span>
                            {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 13 }}>{item.ten_zh}</span>}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          {item.do_hiem
                            ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                                style={{ backgroundColor: `${rc}18`, color: rc, border: `1px solid ${rc}44` }}>
                                {item.do_hiem}
                              </span>
                            : <span style={{ color: 'var(--text-3)' }}>&#8212;</span>}
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <AnimatePresence>
        {modalOpen && <ModalBuff item={editItem} onClose={() => setModalOpen(false)} onSaved={fetchData} />}
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}
              className="rounded-2xl border p-6 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>Xác nhận xóa tâm ngộ này?</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
                <button onClick={() => handleDelete(deleteId!)} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xoa</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// ── Image tab picker cho ModalQuanCo ──
function ImgTabPicker({ imageUrl, kyNangUrl, onChangeImage, onChangeKyNang }: {
  imageUrl: string; kyNangUrl: string;
  onChangeImage: (url: string) => void; onChangeKyNang: (url: string) => void;
}) {
  const [imgTab, setImgTab] = useState<'tuong' | 'ky-nang'>('tuong');
  return (
    <div style={{ width: 150, flexShrink: 0 }}>
      <div style={{ display: 'flex', gap: 0, marginBottom: 8, borderBottom: '1px solid var(--border)' }}>
        {(['tuong', 'ky-nang'] as const).map(t => (
          <button key={t} type="button" onClick={() => setImgTab(t)}
            style={{ flex: 1, padding: '5px 4px', fontSize: 11, fontWeight: 700, cursor: 'pointer',
              background: 'transparent', border: 'none',
              borderBottom: imgTab === t ? '2px solid #dc2626' : '2px solid transparent',
              marginBottom: -1, color: imgTab === t ? '#dc2626' : 'var(--text-3)',
            }}>
            {t === 'tuong' ? 'Tướng' : 'Kỹ năng'}
          </button>
        ))}
      </div>
      {imgTab === 'tuong'
        ? <LocalImageUploader key="tuong" dirKey="quan-co-tuong" preview={imageUrl} onChange={(url) => onChangeImage(url)} />
        : <LocalImageUploader key="ky-nang" dirKey="quan-co-ky-nang" preview={kyNangUrl} onChange={(url) => onChangeKyNang(url)} />
      }
    </div>
  );
}
type QCForm = { ten: string; ten_zh: string; gia_vang: string; loai: string; tags: string[]; lien_ket_phe: string[]; lien_ket_phai: string[]; ky_nang_ten: string; ky_nang_icon: string; ky_nang_icon_url: string; ky_nang_mo_ta: string; chi_so: string; image_url: string; };
const EMPTY_QC: QCForm = { ten: '', ten_zh: '', gia_vang: '5', loai: '', tags: [], lien_ket_phe: [], lien_ket_phai: [], ky_nang_ten: '', ky_nang_icon: '', ky_nang_icon_url: '', ky_nang_mo_ta: '', chi_so: '', image_url: '' };

function ModalQuanCo({ item, onClose, onSaved }: { item: CoNghichQuanCoRow | null; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState<QCForm>(item ? {
    ten: item.ten, ten_zh: item.ten_zh ?? '',
    gia_vang: String(item.gia_xu ?? '5'), loai: item.loai ?? '',
    tags: item.tags ?? [],
    lien_ket_phe: item.lien_ket_phe ?? [],
    lien_ket_phai: item.lien_ket_phai ?? [],
    ky_nang_ten: item.ky_nang_ten ?? '',
    ky_nang_icon: item.ky_nang_icon ?? '',
    ky_nang_icon_url: item.ky_nang_icon ?? '',
    ky_nang_mo_ta: item.ky_nang_mo_ta ?? '',
    chi_so: item.chi_so ? JSON.stringify(item.chi_so, null, 2) : '',
    image_url: item.image_url ?? '',
  } : EMPTY_QC);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [tagsModalOpen, setTagsModalOpen] = useState(false);
  const [roles, setRoles] = useState<QuanCoRole[]>(initialRoles);
  const [pheList, setPheList] = useState(initialPhe);
  const [phaiList, setPhaiList] = useState(initialPhai);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [newRoleLabel, setNewRoleLabel] = useState('');
  const [newRoleColor, setNewRoleColor] = useState('#7c3aed');
  const [editingRole, setEditingRole] = useState<QuanCoRole | null>(null);
  const ky_nang_mo_taRef = React.useRef<HTMLTextAreaElement>(null);
  const f = (k: keyof QCForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));

  useEffect(() => {
    window.fetch('/api/roles').then(r => r.json()).then(d => { if (d.items) setRoles(d.items); }).catch(() => {});
    window.fetch('/api/lien-ket-phe').then(r => r.json()).then(d => { if (d.items) setPheList(d.items); }).catch(() => {});
    window.fetch('/api/lien-ket-phai').then(r => r.json()).then(d => { if (d.items) setPhaiList(d.items); }).catch(() => {});
  }, []);

  const handleCreateRole = async () => {
    if (!newRoleLabel.trim()) return;
    const res = await window.fetch('/api/roles', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ label: newRoleLabel.trim(), color: newRoleColor }),
    });
    const { item: created } = await res.json();
    if (created) { setRoles(p => [...p, created]); setForm(p => ({ ...p, loai: created.label })); }
    setNewRoleLabel(''); setNewRoleColor('#7c3aed');
  };

  const handleUpdateRole = async (role: QuanCoRole) => {
    await window.fetch('/api/roles', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(role) });
    setRoles(p => p.map(r => r.id === role.id ? role : r));
    if (form.loai === editingRole?.label) setForm(p => ({ ...p, loai: role.label }));
    setEditingRole(null);
  };

  const handleDeleteRole = async (id: string, label: string) => {
    await window.fetch('/api/roles', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setRoles(p => p.filter(r => r.id !== id));
    if (form.loai === label) setForm(p => ({ ...p, loai: '' }));
  };

  const toggleTag = (label: string) => {
    setForm(p => ({
      ...p,
      tags: p.tags.includes(label) ? p.tags.filter(t => t !== label) : [...p.tags, label],
    }));
  };

  const toggleSlug = (field: 'lien_ket_phe' | 'lien_ket_phai', slug: string) => {
    setForm(p => ({
      ...p,
      [field]: p[field].includes(slug) ? p[field].filter(s => s !== slug) : [...p[field], slug],
    }));
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.ten.trim()) { setError('Tên không được trống'); return; }
    setSaving(true); setError('');
    let chi_so = null;
    try { if (form.chi_so.trim()) chi_so = JSON.parse(form.chi_so); } catch { setError('JSON chỉ số không hợp lệ'); setSaving(false); return; }
    const payload = {
      ten: form.ten.trim(), ten_zh: form.ten_zh.trim() || null,
      so_sao: null,
      gia_xu: parseInt(form.gia_vang) || null,
      loai: form.loai.trim() || null,
      tags: form.tags,
      lien_ket_phe: form.lien_ket_phe,
      lien_ket_phai: form.lien_ket_phai,
      ky_nang_ten: form.ky_nang_ten.trim() || null,
      ky_nang_icon: form.ky_nang_icon_url.trim() || null,
      ky_nang_mo_ta: form.ky_nang_mo_ta.trim() || null,
      chi_so, image_url: form.image_url || null,
    };
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit ? { ...payload, id: item!.id } : payload;
      const res = await fetch('/api/quan-co', {
        method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) { setError(e.message); setSaving(false); return; }
    setSaving(false);
    onSaved(); onClose();
  };

  // Helper: toggle button style
  const toggleBtn = (active: boolean) => ({
    display: 'flex', alignItems: 'center', gap: 4,
    padding: '3px 8px 3px 4px', borderRadius: 20, cursor: 'pointer',
    background: active ? 'rgba(220,38,38,0.10)' : 'var(--bg-sunken)',
    border: `1px solid ${active ? 'rgba(220,38,38,0.40)' : 'var(--border)'}`,
    transition: 'all 120ms',
  } as React.CSSProperties);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 1260, maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa quân cờ' : 'Thêm quân cờ mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}><X size={17} /></button>
        </div>
        <form onSubmit={handleSubmit} style={{ flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div className="flex gap-4 p-3">
            {/* Cột ảnh — 2 tab */}
            <ImgTabPicker
              imageUrl={form.image_url}
              kyNangUrl={form.ky_nang_icon_url}
              onChangeImage={url => setForm(p => ({ ...p, image_url: url }))}
              onChangeKyNang={url => setForm(p => ({ ...p, ky_nang_icon_url: url }))}
            />
            {/* Cột thông tin cơ bản */}
            <div className="flex flex-col gap-3" style={{ width: 210, flexShrink: 0 }}>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên *</label><input value={form.ten} onChange={f('ten')} placeholder="Phương Thừa Ý" style={inputStyle} /></div>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên chữ Hán</label><input value={form.ten_zh} onChange={f('ten_zh')} placeholder="方承意" style={inputStyle} /></div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Giá vàng 🪙</label>
                <select value={form.gia_vang} onChange={f('gia_vang')} style={inputStyle}>
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} vàng</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Loại</label>
                <div style={{ display: 'flex', gap: 5 }}>
                  <select value={form.loai} onChange={f('loai')} style={{ ...inputStyle, flex: 1 }}>
                    <option value="">-- Không có loại --</option>
                    {roles.map(r => (
                      <option key={r.id} value={r.label} style={{ color: r.color }}>{r.label}</option>
                    ))}
                  </select>
                  <button type="button" onClick={() => setRoleModalOpen(true)}
                    title="Tao role moi"
                    style={{ flexShrink: 0, padding: '0 10px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-sunken)', cursor: 'pointer', fontSize: 16, color: 'var(--text-2)' }}>
                    +
                  </button>
                </div>
                {form.loai && (() => { const s = getLoaiStyle(form.loai, roles); return (
                  <span style={{ marginTop: 5, display: 'inline-flex', alignItems: 'center', borderRadius: 4, padding: '2px 10px', fontSize: 11, fontWeight: 700, backgroundColor: s.bg, color: s.color, border: `1px solid ${s.border}` }}>{form.loai}</span>
                ); })()}
                <AnimatePresence>
                  {roleModalOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
                      onClick={() => { setRoleModalOpen(false); setEditingRole(null); }}>
                      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
                        style={{ maxWidth: 480, width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
                        onClick={e => e.stopPropagation()}>
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                          <span style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-1)' }}>Quan ly Role</span>
                          <button type="button" onClick={() => { setRoleModalOpen(false); setEditingRole(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)' }}><X size={16} /></button>
                        </div>
                        {/* Danh sach roles */}
                        <div style={{ padding: '12px 20px', maxHeight: 260, overflowY: 'auto' }}>
                          {roles.length === 0 && <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', padding: '20px 0' }}>Chua co role nao.</p>}
                          {roles.map(r => (
                            <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                              {editingRole?.id === r.id ? (
                                <>
                                  <input type="color" value={editingRole.color} onChange={e => setEditingRole(p => p ? { ...p, color: e.target.value } : p)}
                                    style={{ width: 32, height: 28, padding: 2, borderRadius: 4, border: '1px solid var(--border)', cursor: 'pointer' }} />
                                  <input value={editingRole.label} onChange={e => setEditingRole(p => p ? { ...p, label: e.target.value } : p)}
                                    style={{ ...inputStyle, flex: 1, fontSize: 12, padding: '4px 8px' }}
                                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleUpdateRole(editingRole!); } }} />
                                  <button type="button" onClick={() => handleUpdateRole(editingRole!)}
                                    style={{ padding: '3px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: 'pointer', background: '#dc2626', color: '#fff', border: 'none' }}>Luu</button>
                                  <button type="button" onClick={() => setEditingRole(null)}
                                    style={{ padding: '3px 8px', borderRadius: 6, fontSize: 11, cursor: 'pointer', background: 'var(--bg-sunken)', color: 'var(--text-2)', border: '1px solid var(--border)' }}>Hủy</button>
                                </>
                              ) : (
                                <>
                                  <div style={{ width: 18, height: 18, borderRadius: 4, background: r.color, flexShrink: 0 }} />
                                  <span style={{ flex: 1, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: r.color + '1a', color: r.color, border: `1px solid ${r.color}59` }}>{r.label}</span>
                                  </span>
                                  <button type="button" onClick={() => setEditingRole({ ...r })}
                                    style={{ padding: '3px 8px', borderRadius: 6, fontSize: 11, cursor: 'pointer', background: 'rgba(29,78,216,0.08)', color: '#1d4ed8', border: '1px solid rgba(29,78,216,0.25)' }}><Pencil size={12} /></button>
                                  <button type="button" onClick={() => handleDeleteRole(r.id, r.label)}
                                    style={{ padding: '3px 8px', borderRadius: 6, fontSize: 11, cursor: 'pointer', background: 'rgba(220,38,38,0.08)', color: '#dc2626', border: '1px solid rgba(220,38,38,0.25)' }}><Trash2 size={12} /></button>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Form them moi */}
                        <div style={{ padding: '12px 20px 18px', borderTop: '1px solid var(--border)', background: 'var(--bg-sunken)' }}>
                          <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Them role moi</div>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <input type="color" value={newRoleColor} onChange={e => setNewRoleColor(e.target.value)}
                              style={{ width: 36, height: 32, padding: 2, borderRadius: 6, border: '1px solid var(--border)', cursor: 'pointer', flexShrink: 0 }} />
                            <input value={newRoleLabel} onChange={e => setNewRoleLabel(e.target.value)}
                              placeholder="Ten role..."
                              style={{ ...inputStyle, flex: 1, fontSize: 12 }}
                              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleCreateRole(); } }} />
                            {newRoleLabel.trim() && <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: newRoleColor + '1a', color: newRoleColor, border: `1px solid ${newRoleColor}59`, flexShrink: 0 }}>{newRoleLabel}</span>}
                            <button type="button" onClick={handleCreateRole}
                              style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', background: '#dc2626', color: '#fff', border: 'none', flexShrink: 0 }}>Them</button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tags</label>
                {/* Nút mở modal */}
                <button type="button" onClick={() => setTagsModalOpen(true)}
                  style={{ ...inputStyle, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', justifyContent: 'space-between', paddingRight: 8 }}>
                  <span style={{ color: 'var(--text-3)', fontSize: 12 }}>Chọn tags...</span>
                  <Tag size={13} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                </button>
                {/* Tags đã chọn hiển thị bên dưới */}
                {form.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 6 }}>
                    {form.tags.map(tag => {
                      const icon = coNghichIcons.find(ic => ic.label === tag);
                      return (
                        <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 8px 2px 5px', borderRadius: 4, background: 'rgba(220,38,38,0.10)', border: '1px solid rgba(220,38,38,0.35)', cursor: 'pointer' }}
                          onClick={() => toggleTag(tag)} title="Bỏ chọn">
                          {icon && <img src={icon.image_url} alt={icon.label} style={{ width: 16, height: 16, objectFit: 'contain' }} />}
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#dc2626' }}>{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                )}
                {/* Tags modal overlay */}
                <AnimatePresence>
                  {tagsModalOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
                      onClick={() => setTagsModalOpen(false)}>
                      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
                        className="rounded-2xl border shadow-2xl" style={{ maxWidth: 420, width: '100%', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                        onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                          <h3 className="font-black text-sm" style={{ color: 'var(--text-1)' }}>Chọn Tags</h3>
                          <button type="button" onClick={() => setTagsModalOpen(false)} style={{ color: 'var(--text-3)', background: 'none', border: 'none', cursor: 'pointer' }}><X size={16} /></button>
                        </div>
                        <div style={{ padding: '14px 20px 18px', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                          {coNghichIcons.map(icon => {
                            const active = form.tags.includes(icon.label);
                            return (
                              <button key={icon.slug} type="button" onClick={() => toggleTag(icon.label)}
                                style={{
                                  display: 'flex', alignItems: 'center', gap: 6,
                                  padding: '5px 12px 5px 6px', borderRadius: 20, cursor: 'pointer',
                                  background: active ? 'rgba(220,38,38,0.12)' : 'var(--bg-sunken)',
                                  border: `1px solid ${active ? 'rgba(220,38,38,0.50)' : 'var(--border)'}`,
                                  transition: 'all 120ms',
                                }}>
                                {icon.image_url && <img src={icon.image_url} alt={icon.label} style={{ width: 22, height: 22, objectFit: 'contain' }} />}
                                <span style={{ fontSize: 12, fontWeight: 700, color: active ? '#dc2626' : 'var(--text-2)' }}>{icon.label}</span>
                              </button>
                            );
                          })}
                        </div>
                        <div style={{ padding: '0 20px 16px', display: 'flex', justifyContent: 'flex-end' }}>
                          <button type="button" onClick={() => setTagsModalOpen(false)}
                            style={{ padding: '6px 20px', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', backgroundColor: '#dc2626', color: '#fff', border: 'none' }}>
                            Xong
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Cột liên kết + kỹ năng + chỉ số */}
            <div className="flex flex-col gap-3 flex-1 min-w-0" style={{ minHeight: 0 }}>
              {/* Liên kết phe */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)', flexShrink: 0, paddingTop: 4, minWidth: 80 }}>Thế Lực</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {pheList.map(p => {
                    const active = form.lien_ket_phe.includes(p.slug);
                    return (
                      <button key={p.slug} type="button" onClick={() => toggleSlug('lien_ket_phe', p.slug)} style={toggleBtn(active)}>
                        <img src={p.image_url ?? `/images/co-nghich-thuy-han/lien-ket-phe/${p.slug}.png`} alt={p.ten} style={{ width: 24, height: 24, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <span style={{ fontSize: 11, fontWeight: 700, color: active ? '#dc2626' : 'var(--text-2)' }}>{p.ten}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Liên kết phái */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)', flexShrink: 0, paddingTop: 4, minWidth: 80 }}>Chức Nghiệp</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {phaiList.map(p => {
                    const active = form.lien_ket_phai.includes(p.slug);
                    return (
                      <button key={p.slug} type="button" onClick={() => toggleSlug('lien_ket_phai', p.slug)} style={toggleBtn(active)}>
                        <img src={p.image_url ?? `/images/co-nghich-thuy-han/lien-ket-phai/${p.slug}.png`} alt={p.ten} style={{ width: 24, height: 24, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <span style={{ fontSize: 11, fontWeight: 700, color: active ? '#dc2626' : 'var(--text-2)' }}>{p.ten}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên kỹ năng</label><input value={form.ky_nang_ten} onChange={f('ky_nang_ten')} placeholder="Thương Diệm Liệt Tâm" style={inputStyle} /></div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Mô tả kỹ năng</label>
                  <IconQuickInsert textareaRef={ky_nang_mo_taRef} onInsert={(token, pos) => setForm(p => ({ ...p, ky_nang_mo_ta: insertAtCaret(p.ky_nang_mo_ta, token, pos).newValue }))} />
                </div>
                <textarea ref={ky_nang_mo_taRef} value={form.ky_nang_mo_ta} onChange={f('ky_nang_mo_ta')}
                  style={{ ...inputStyle, resize: 'none', flex: 1, minHeight: 120 }} />
              </div>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 px-5 pb-2">{error}</p>}
          <div className="flex gap-2 px-5 pb-5">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer" style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer" style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>{saving ? 'Đang lưu...' : isEdit ? 'Lưu' : 'Thêm'}</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ── Section Quân Cờ (gọi API local) ──
function SectionQuanCo({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<CoNghichQuanCoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<CoNghichQuanCoRow | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [pheList, setPheList] = useState(initialPhe);
  const [phaiList, setPhaiList] = useState(initialPhai);
  const dragId = React.useRef<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quan-co');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => {
    fetchItems();
    onAddNew(() => { setEditItem(null); setModalOpen(true); });
    window.fetch('/api/lien-ket-phe').then(r => r.json()).then(d => { if (d.items) setPheList(d.items); }).catch(() => {});
    window.fetch('/api/lien-ket-phai').then(r => r.json()).then(d => { if (d.items) setPhaiList(d.items); }).catch(() => {});
  }, []);

  const handleDelete = async (id: string) => {
    await fetch('/api/quan-co', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetchItems();
  };

  const handleDrop = async (targetId: string) => {
    const fromId = dragId.current;
    if (!fromId || fromId === targetId) { setDragOverId(null); return; }
    const ids = items.map(i => i.id);
    const fromIdx = ids.indexOf(fromId);
    const toIdx = ids.indexOf(targetId);
    const newIds = [...ids];
    newIds.splice(fromIdx, 1);
    newIds.splice(toIdx, 0, fromId);
    // Optimistic update
    const map = new Map(items.map(i => [i.id, i]));
    setItems(newIds.map(id => map.get(id)!));
    setDragOverId(null);
    await fetch('/api/reorder/quan-co', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: newIds }) });
  };

  return (
    <div>
      <div className="flex items-center mb-4"><h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Quân Cờ</h2></div>
      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16"><span className="text-4xl opacity-20">♟️</span><p className="text-sm" style={{ color: 'var(--text-3)' }}>Chưa có quân cờ nào. Nhấn "Thêm mới" để bắt đầu.</p></div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: 36 }} />
                  <col style={{ width: 260 }} />
                  <col style={{ width: 180 }} />
                  <col style={{ width: 160 }} />
                  <col />
                  <col style={{ width: 220 }} />
                  <col style={{ width: 64 }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['', 'Hình ảnh', 'Tên', 'Loại', 'Tags', 'Liên kết', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-xs font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-3)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}
                      draggable
                      onDragStart={() => { dragId.current = item.id; }}
                      onDragOver={e => { e.preventDefault(); setDragOverId(item.id); }}
                      onDragLeave={() => setDragOverId(null)}
                      onDrop={() => handleDrop(item.id)}
                      style={{ borderBottom: '1px solid var(--border)', transition: 'background 120ms',
                        backgroundColor: dragOverId === item.id ? 'rgba(220,38,38,0.06)' : 'transparent',
                        outline: dragOverId === item.id ? '2px solid rgba(220,38,38,0.3)' : 'none',
                      }}
                      onMouseEnter={e => { if (dragOverId !== item.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-sunken)'; }}
                      onMouseLeave={e => { if (dragOverId !== item.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}>
                      {/* Drag handle */}
                      <td style={{ borderRight: '1px solid var(--border)', textAlign: 'center', cursor: 'grab', padding: '0 4px' }}>
                        <GripVertical size={14} style={{ color: 'var(--text-3)', opacity: 0.5, margin: 'auto' }} />
                      </td>
                      {/* Ảnh full width, không cắt */}
                      <td style={{ borderRight: '1px solid var(--border)', padding: 0, overflow: 'hidden' }}>
                        <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                          style={{ width: '100%', aspectRatio: '4/3', cursor: 'pointer', overflow: 'hidden', backgroundColor: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          onMouseEnter={e => { const img = (e.currentTarget as HTMLElement).querySelector('img'); if (img) img.style.transform = 'scale(1.06)'; }}
                          onMouseLeave={e => { const img = (e.currentTarget as HTMLElement).querySelector('img'); if (img) img.style.transform = 'scale(1)'; }}>
                          {item.image_url
                            ? <img src={item.image_url} alt={item.ten} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.4s ease' }} />
                            : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, opacity: 0.15 }}>♟️</div>}
                        </div>
                      </td>
                      {/* Tên + tên Hán + giá vàng */}
                      <td className="px-4 py-3" style={{ borderRight: '1px solid var(--border)', verticalAlign: 'middle' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400, fontSize: 18 }}>{item.ten}</span>
                          {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 12 }}>{item.ten_zh}</span>}
                          {item.gia_xu && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                              <img src="/images/co-nghich-thuy-han/icon-vang.png" alt="vàng" style={{ width: 14, height: 14, objectFit: 'contain' }} />
                              <span style={{ fontSize: 12, color: '#d97706', fontWeight: 700 }}>{item.gia_xu}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      {/* Loại */}
                      <td className="px-4 py-3 text-center" style={{ borderRight: '1px solid var(--border)', verticalAlign: 'middle' }}>
                        {item.loai ? (() => { const s = getLoaiStyle(item.loai!); return (
                          <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 4, padding: '3px 10px', fontSize: 11, fontWeight: 700, backgroundColor: s.bg, color: s.color, border: `1px solid ${s.border}`, whiteSpace: 'nowrap' }}>{item.loai}</span>
                        ); })() : <span style={{ color: 'var(--text-3)' }}>—</span>}
                      </td>
                      {/* Tags */}
                      <td className="px-4 py-3" style={{ borderRight: '1px solid var(--border)', verticalAlign: 'middle' }}>
                        {item.tags && item.tags.length > 0 ? (
                          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                            {item.tags.map(tag => {
                              const icon = coNghichIcons.find(ic => ic.label === tag);
                              return (
                                <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, padding: '2px 7px 2px 4px', borderRadius: 4, background: 'rgba(220,38,38,0.08)', color: '#dc2626', border: '1px solid rgba(220,38,38,0.25)' }}>
                                  {icon && <img src={icon.image_url} alt={icon.label} style={{ width: 14, height: 14, objectFit: 'contain' }} />}
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        ) : <span style={{ color: 'var(--text-3)' }}>—</span>}
                      </td>
                      {/* Liên kết phe + phái */}
                      <td className="px-4 py-3" style={{ borderRight: '1px solid var(--border)', verticalAlign: 'middle' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                          {item.lien_ket_phe && item.lien_ket_phe.length > 0 && (
                            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                              {item.lien_ket_phe.map(slug => {
                                const info = pheList.find(p => p.slug === slug);
                                if (!info) return null;
                                return (
                                  <div key={slug} style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '2px 7px 2px 3px', borderRadius: 20, background: 'var(--bg-sunken)', border: '1px solid var(--border)' }}>
                                    <img src={info?.image_url ?? `/images/co-nghich-thuy-han/lien-ket-phe/${slug}.png`} alt={slug}
                                      style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }}
                                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>{info?.ten ?? slug}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {item.lien_ket_phai && item.lien_ket_phai.length > 0 && (
                            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                              {item.lien_ket_phai.map(slug => {
                                const info = phaiList.find(p => p.slug === slug);
                                if (!info) return null;
                                return (
                                  <div key={slug} style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '2px 7px 2px 3px', borderRadius: 20, background: 'var(--bg-sunken)', border: '1px solid var(--border)' }}>
                                    <img src={info?.image_url ?? `/images/co-nghich-thuy-han/lien-ket-phai/${slug}.png`} alt={slug}
                                      style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }}
                                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>{info?.ten ?? slug}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {(!item.lien_ket_phe?.length && !item.lien_ket_phai?.length) && <span style={{ color: 'var(--text-3)' }}>—</span>}
                        </div>
                      </td>
                      {/* Actions */}
                      <td className="px-2 py-3" style={{ verticalAlign: 'middle' }}>
                        <div className="flex flex-col items-center gap-1">
                          <button onClick={() => { setEditItem(item); setModalOpen(true); }} className="p-1.5 rounded-lg cursor-pointer transition-colors" style={{ color: '#1d4ed8' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(29,78,216,0.1)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}><Pencil size={14} /></button>
                          <button onClick={() => setDeleteId(item.id)} className="p-1.5 rounded-lg cursor-pointer transition-colors" style={{ color: '#dc2626' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.1)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <AnimatePresence>
        {modalOpen && <ModalQuanCo item={editItem} onClose={() => setModalOpen(false)} onSaved={fetchItems} />}
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}
              className="rounded-2xl border p-6 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>Xác nhận xóa quân cờ này?</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer" style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
                <button onClick={() => handleDelete(deleteId!)} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer" style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xóa</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Section Buff Kiếm (giống SectionBuff) ──
function SectionBuffKiem({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await window.fetch('/api/buff-kiem');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => { fetchData(); onAddNew(() => { setEditItem(null); setModalOpen(true); }); }, []);

  const handleDelete = async (id: string) => {
    await window.fetch('/api/buff-kiem', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetchData();
  };

  const rarityColor = (r: string | null) => {
    if (r === 'Xanh') return '#1d4ed8';
    if (r === 'Tím')  return '#7c3aed';
    if (r === 'Vàng') return '#b45309';
    return '#6b7280';
  };

  return (
    <div>
      <div className="flex items-center mb-4"><h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Buff Kiếm</h2></div>
      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <span className="text-4xl opacity-20">⚔️</span>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chưa có buff kiếm nào. Nhấn "Thêm mới" để bắt đầu.</p>
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup><col style={{ width: 100 }} /><col /><col style={{ width: 80 }} /></colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['Hình ảnh', 'Tên', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-1)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => {
                    return (
                      <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                          <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                            className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                            style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                            {item.image_url ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-contain" />
                              : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>⚔️</div>}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="text-base tracking-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400 }}>{item.ten}</span>
                            {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 13 }}>{item.ten_zh}</span>}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex justify-center gap-1">
                            <button onClick={() => { setEditItem(item); setModalOpen(true); }} className="p-1.5 rounded-lg cursor-pointer transition-colors" style={{ color: '#1d4ed8' }}
                              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(29,78,216,0.1)'}
                              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}><Pencil size={14} /></button>
                            <button onClick={() => setDeleteId(item.id)} className="p-1.5 rounded-lg cursor-pointer transition-colors" style={{ color: '#dc2626' }}
                              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.1)'}
                              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <AnimatePresence>
        {modalOpen && (
          <ModalBuffKiem item={editItem} onClose={() => setModalOpen(false)} onSaved={fetchData} />
        )}
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}
              className="rounded-2xl border p-6 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>Xác nhận xóa buff kiếm này?</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
                <button onClick={() => handleDelete(deleteId!)} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xóa</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Modal Buff Kiếm ──
function ModalBuffKiem({ item, onClose, onSaved }: { item: any; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState({ ten: item?.ten ?? '', ten_zh: item?.ten_zh ?? '', do_hiem: item?.do_hiem ?? 'Xanh', mo_ta: item?.mo_ta ?? '', image_url: item?.image_url ?? '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const mo_taRef = React.useRef<HTMLTextAreaElement>(null);
  const f = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.ten.trim()) { setError('Tên không được trống'); return; }
    setSaving(true); setError('');
    const payload = { ten: form.ten.trim(), ten_zh: form.ten_zh.trim() || null, do_hiem: form.do_hiem, mo_ta: form.mo_ta.trim() || null, image_url: form.image_url || null };
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit ? { ...payload, id: item.id } : payload;
      const res = await window.fetch('/api/buff-kiem', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('Lỗi lưu dữ liệu');
    } catch (e: any) { setError(e.message); setSaving(false); return; }
    setSaving(false); onSaved(); onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 680, backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa buff kiếm' : 'Thêm buff kiếm mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}><X size={17} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 p-5">
            <div style={{ width: 160, flexShrink: 0 }}>
              <ImageUploader preview={form.image_url} onChange={url => setForm(p => ({ ...p, image_url: url }))} />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên *</label><input value={form.ten} onChange={f('ten')} placeholder="Tên buff kiếm" style={inputStyle} /></div>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên chữ Hán</label><input value={form.ten_zh} onChange={f('ten_zh')} style={inputStyle} /></div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Độ hiếm</label>
                <select value={form.do_hiem} onChange={f('do_hiem')} style={inputStyle}>
                  <option value="">— Không hiếm —</option>
                  <option value="Truyền Thuyết">Truyền Thuyết</option>
                  <option value="Cái Thế Tuyệt Luân">Cái Thế Tuyệt Luân</option>
                  <option value="Thiên Hạ Vô Song">Thiên Hạ Vô Song</option>
                </select>
              </div>
              <div className="flex-1">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Mô tả hiệu quả</label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <IconQuickInsert textareaRef={mo_taRef} onInsert={(token, pos) => setForm(p => ({ ...p, mo_ta: insertAtCaret(p.mo_ta, token, pos).newValue }))} />
                    <button type="button" onClick={() => setForm(p => ({ ...p, mo_ta: p.mo_ta + (p.mo_ta && !p.mo_ta.endsWith('\n') ? '\n' : '') + '• ' }))}
                      style={{ fontSize: 13, padding: '1px 8px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--bg-sunken)', cursor: 'pointer', color: 'var(--text-2)', fontWeight: 700 }}>
                      + •
                    </button>
                  </div>
                </div>
                <textarea ref={mo_taRef} value={form.mo_ta} onChange={f('mo_ta')} rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 px-5 pb-2">{error}</p>}
          <div className="flex gap-2 px-5 pb-5">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer" style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer" style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>{saving ? 'Đang lưu...' : isEdit ? 'Lưu' : 'Thêm'}</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ── IconQuickInsert ──
// textareaRef: ref đến textarea cần chèn; onInsert nhận token + vị trí con trỏ
function IconQuickInsert({ textareaRef, onInsert }: {
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  onInsert: (token: string, caretPos: number | null) => void;
}) {
  const [icons, setIcons] = useState<{ id: string; slug: string; label: string; image_url: string }[]>([]);
  const [open, setOpen] = useState(false);
  // Lưu vị trí con trỏ ngay khi bấm nút mở modal (trước khi textarea mất focus)
  const savedCaret = React.useRef<number | null>(null);

  useEffect(() => {
    window.fetch('/api/icons').then(r => r.json()).then(d => setIcons(d.items ?? [])).catch(() => {});
  }, []);

  if (icons.length === 0) return null;

  const handleOpen = () => {
    // Lưu vị trí con trỏ trước khi mở modal
    if (textareaRef?.current) {
      savedCaret.current = textareaRef.current.selectionStart ?? null;
    } else {
      savedCaret.current = null;
    }
    setOpen(true);
  };

  const handlePick = (icon: { slug: string }) => {
    onInsert('{icon:' + icon.slug + '}', savedCaret.current);
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}
        style={{ padding: '3px 9px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--bg-sunken)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-2)', fontWeight: 700 }}>
        <span style={{ fontSize: 13, lineHeight: 1 }}>⊕</span> Icon
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setOpen(false)}>
            <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
              className="rounded-2xl border shadow-2xl" style={{ maxWidth: 420, width: '100%', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-black text-sm" style={{ color: 'var(--text-1)' }}>Chèn Icon</h3>
                <button type="button" onClick={() => setOpen(false)} style={{ color: 'var(--text-3)', background: 'none', border: 'none', cursor: 'pointer' }}><X size={16} /></button>
              </div>
              <div style={{ padding: '14px 20px 18px', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {icons.map(icon => (
                  <button key={icon.slug} type="button" onClick={() => handlePick(icon)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px 5px 6px', borderRadius: 20, cursor: 'pointer', background: 'var(--bg-sunken)', border: '1px solid var(--border)', transition: 'all 120ms' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(220,38,38,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,38,38,0.4)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-sunken)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}>
                    {icon.image_url && <img src={icon.image_url} alt={icon.label} style={{ width: 22, height: 22, objectFit: 'contain' }} />}
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>{icon.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Modal Icon ──
function ModalIcon({ item, onClose, onSaved }: { item: { id: string; slug: string; label: string; image_url: string } | null; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState({ slug: item?.slug ?? '', label: item?.label ?? '', image_url: item?.image_url ?? '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.slug.trim() || !form.label.trim()) { setError('Slug và tên hiển thị không được trống'); return; }
    setSaving(true); setError('');
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit ? { ...form, id: item!.id } : form;
      const res = await window.fetch('/api/icons', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('Lỗi lưu dữ liệu');
    } catch (e: any) { setError(e.message); setSaving(false); return; }
    setSaving(false);
    onSaved(); onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 480, backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa icon' : 'Thêm icon mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}><X size={17} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 p-5">
            {/* LEFT: image uploader */}
            <div style={{ width: 160, flexShrink: 0 }}>
              <LocalImageUploader dirKey="icons" preview={form.image_url} onChange={(url) => setForm(p => ({ ...p, image_url: url }))} />
            </div>
            {/* RIGHT: slug + label */}
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Slug (key gọi)</label>
                <input value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value }))}
                  placeholder="tan-cong" style={inputStyle} required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên hiển thị</label>
                <input value={form.label} onChange={e => setForm(p => ({ ...p, label: e.target.value }))}
                  placeholder="Tấn Công" style={inputStyle} required />
              </div>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 px-5 pb-2">{error}</p>}
          <div className="flex gap-2 px-5 pb-5">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
              style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
              style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Đang lưu...' : isEdit ? 'Lưu' : 'Thêm'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ── Section Icons ──
function SectionIcons({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<{ id: string; slug: string; label: string; image_url: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<{ id: string; slug: string; label: string; image_url: string } | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await window.fetch('/api/icons');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => { fetchData(); onAddNew(() => { setEditItem(null); setModalOpen(true); }); }, []);

  const handleDelete = async (id: string) => {
    await window.fetch('/api/icons', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null);
    fetchData();
  };

  return (
    <div>
      <div className="flex items-center mb-4"><h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Quản lý Icon</h2></div>
      <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 12 }}>
        Cú pháp dùng trong text: <code style={{ background: 'var(--bg-sunken)', padding: '1px 6px', borderRadius: 4 }}>{'{icon:slug}'}</code>
        — VD: <code style={{ background: 'var(--bg-sunken)', padding: '1px 6px', borderRadius: 4 }}>{'{icon:tan-cong}'}</code>
      </p>

      {loading ? (
        <div className="flex justify-center py-8"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : items.length === 0 ? (
        <div className="flex flex-col items-center py-12 gap-2"><span style={{ fontSize: 32, opacity: 0.15 }}>🖼️</span><p style={{ fontSize: 13, color: 'var(--text-3)' }}>Chưa có icon nào</p></div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
          {items.map(item => (
            <div key={item.id} onClick={() => { setEditItem(item); setModalOpen(true); }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,38,38,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}>
              {item.image_url
                ? <img src={item.image_url} alt={item.label} style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
                : <div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--bg-sunken)', flexShrink: 0 }} />
              }
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'monospace' }}>{'{icon:' + item.slug + '}'}</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }} onClick={e => e.stopPropagation()}>
                <button onClick={() => { setEditItem(item); setModalOpen(true); }} style={{ padding: '4px', borderRadius: 6, border: 'none', background: 'none', cursor: 'pointer', color: '#1d4ed8' }}><Pencil size={13} /></button>
                <button onClick={() => setDeleteId(item.id)} style={{ padding: '4px', borderRadius: 6, border: 'none', background: 'none', cursor: 'pointer', color: '#dc2626' }}><Trash2 size={13} /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {modalOpen && <ModalIcon item={editItem} onClose={() => setModalOpen(false)} onSaved={fetchData} />}
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}
              className="rounded-2xl border p-6 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>Xác nhận xóa icon này?</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
                <button onClick={() => handleDelete(deleteId!)} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xóa</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Section Lien Ket Phe / Phai ──
type LienKetItem = { id: string; ten: string; slug: string; image_url: string | null };

function ModalLienKetItem({ item, type, onClose, onSaved }: {
  item: LienKetItem | null; type: 'phe' | 'phai'; onClose: () => void; onSaved: () => void;
}) {
  const isEdit = !!item;
  const [form, setForm] = useState({ ten: item?.ten ?? '', slug: item?.slug ?? '', image_url: item?.image_url ?? '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const api = type === 'phe' ? '/api/lien-ket-phe' : '/api/lien-ket-phai';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.ten.trim() || !form.slug.trim()) { setError('Ten va slug khong duoc trong'); return; }
    setSaving(true); setError('');
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit ? { ...form, id: item!.id } : form;
      const res = await window.fetch(api, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('Loi luu');
    } catch (e: any) { setError(e.message); setSaving(false); return; }
    setSaving(false); onSaved(); onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.96, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 8 }}
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 420, backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-sm" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa' : 'Thêm'} {type === 'phe' ? 'thế lực' : 'chức nghiệp'}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)' }}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 p-5">
            {/* Ảnh uploader bên trái */}
            <div style={{ width: 120, flexShrink: 0 }}>
              <LocalImageUploader
                dirKey={type === 'phe' ? 'lien-ket-phe' : 'lien-ket-phai'}
                preview={form.image_url}
                onChange={(url) => setForm(p => ({ ...p, image_url: url }))}
              />
            </div>
            {/* Fields bên phải */}
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên hiển thị *</label>
                <input value={form.ten} onChange={e => setForm(p => ({ ...p, ten: e.target.value }))} placeholder="Bạch Đế Thành" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Slug *</label>
                <input value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value }))} placeholder="bach-de-thanh" style={inputStyle} />
                <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 3 }}>Dùng để map với file ảnh (bach-de-thanh.png)</p>
              </div>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 px-5 pb-2">{error}</p>}
          <div className="flex gap-2 px-5 pb-5">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
              style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
              style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>{saving ? 'Đang lưu...' : isEdit ? 'Lưu' : 'Thêm'}</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

function LienKetSubSection({ type, onAddNew }: { type: 'phe' | 'phai'; onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<LienKetItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<LienKetItem | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const api = type === 'phe' ? '/api/lien-ket-phe' : '/api/lien-ket-phai';
  const label = type === 'phe' ? 'Phe' : 'Phai';

  const fetchData = async () => {
    setLoading(true);
    try { const r = await window.fetch(api); const { items: d } = await r.json(); setItems(d ?? []); } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => { fetchData(); onAddNew(() => { setEditItem(null); setModalOpen(true); }); }, []);

  const handleDelete = async (id: string) => {
    await window.fetch(api, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetchData();
  };

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h3 className="font-black text-sm" style={{ color: 'var(--text-1)' }}>{type === 'phe' ? 'Thế Lực' : 'Chức Nghiệp'} ({items.length})</h3>
        <button type="button" onClick={() => { setEditItem(null); setModalOpen(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', background: '#dc2626', color: '#fff', border: 'none' }}>
          <Plus size={13} /> Thêm mới
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center py-8"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-10">
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chưa có dữ liệu.</p>
            </div>
          ) : (
            <table className="border-collapse text-left" style={{ width: '100%' }}>
              <colgroup><col style={{ width: 60 }} /><col /><col style={{ width: 160 }} /><col style={{ width: 60 }} /></colgroup>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                  {['Ảnh', 'Tên', 'Slug', ''].map((h, i, arr) => (
                    <th key={i} className="px-4 py-3 text-xs font-black uppercase tracking-wider"
                      style={{ color: 'var(--text-3)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-sunken)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
                    <td style={{ borderRight: '1px solid var(--border)', padding: '8px 12px', textAlign: 'center' }}>
                      {item.image_url
                        ? <img src={item.image_url} alt={item.ten} style={{ width: 36, height: 36, objectFit: 'contain', margin: 'auto' }} onError={e => { (e.target as HTMLImageElement).style.opacity = '0.3'; }} />
                        : <div style={{ width: 36, height: 36, background: 'var(--bg-sunken)', borderRadius: 6, margin: 'auto' }} />}
                    </td>
                    <td className="px-4 py-3" style={{ borderRight: '1px solid var(--border)' }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)' }}>{item.ten}</span>
                    </td>
                    <td className="px-4 py-3" style={{ borderRight: '1px solid var(--border)' }}>
                      <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--text-3)', background: 'var(--bg-sunken)', padding: '2px 6px', borderRadius: 4 }}>{item.slug}</span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex justify-center gap-1">
                        <button onClick={() => { setEditItem(item); setModalOpen(true); }}
                          className="p-1.5 rounded-lg cursor-pointer" style={{ color: '#1d4ed8' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(29,78,216,0.1)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}><Pencil size={13} /></button>
                        <button onClick={() => setDeleteId(item.id)}
                          className="p-1.5 rounded-lg cursor-pointer" style={{ color: '#dc2626' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.1)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}><Trash2 size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      <AnimatePresence>
        {modalOpen && <ModalLienKetItem item={editItem} type={type} onClose={() => setModalOpen(false)} onSaved={fetchData} />}
        {deleteId && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}
              className="rounded-2xl border p-6 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>Xác nhận xóa?</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)' }}>Hủy</button>
                <button onClick={() => handleDelete(deleteId!)} className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xóa</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionLienKet({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const pheRef = React.useRef<(() => void) | null>(null);
  const phaiRef = React.useRef<(() => void) | null>(null);
  useEffect(() => { onAddNew(() => pheRef.current?.()); }, []);
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <LienKetSubSection type="phe" onAddNew={fn => { pheRef.current = fn; }} />
      <LienKetSubSection type="phai" onAddNew={fn => { phaiRef.current = fn; }} />
    </div>
  );
}

// ── Main Admin ──
type AdminTab = 'trang-bi' | 'tam-ngo' | 'quan-co' | 'buff-kiem' | 'icons' | 'lien-ket';

export default function AdminCoNghich() {
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>('trang-bi');
  const addNewRef = React.useRef<(() => void) | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setChecking(false); });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  if (checking) return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: 'var(--bg-page)' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} />
    </div>
  );

  if (!session) return <LoginForm onLogin={() => supabase.auth.getSession().then(({ data }) => setSession(data.session))} />;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 w-full">
      {/* Nav tabs */}
      <AdminNavTabs active="co-nghich" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-black" style={{ color: 'var(--text-1)' }}>Admin · Cờ Nghịch Thủy Hàn</h1>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{session.user.email}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => addNewRef.current?.()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
            style={{ backgroundColor: '#dc2626', color: '#fff' }}>
            <Plus size={15} /> Thêm mới
          </button>
          <button onClick={() => supabase.auth.signOut()}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
            style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-card)' }}>
            <LogOut size={15} /> Đăng xuất
          </button>
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '2px solid var(--border)' }}>
        {(['quan-co', 'trang-bi', 'tam-ngo', 'buff-kiem', 'icons', 'lien-ket'] as AdminTab[]).map(tab => {
          const labels: Record<AdminTab, string> = { 'quan-co': 'Quân Cờ', 'trang-bi': 'Trang Bị', 'tam-ngo': 'Tâm Ngộ', 'buff-kiem': 'Buff Kiếm', 'icons': 'Icons', 'lien-ket': 'Liên Kết' };
          const isActive = activeTab === tab;
          return (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '9px 22px', fontSize: 14, fontWeight: 700,
              color: isActive ? '#dc2626' : 'var(--text-2)',
              background: 'transparent', border: 'none',
              borderBottom: isActive ? '2px solid #dc2626' : '2px solid transparent',
              marginBottom: -2, cursor: 'pointer', transition: 'all 160ms',
            }}>{labels[tab]}</button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
          {activeTab === 'quan-co'   && <SectionQuanCo   onAddNew={fn => { addNewRef.current = fn; }} />}
          {activeTab === 'trang-bi'  && <SectionTrangBi  onAddNew={fn => { addNewRef.current = fn; }} />}
          {activeTab === 'tam-ngo'   && <SectionBuff     onAddNew={fn => { addNewRef.current = fn; }} />}
          {activeTab === 'buff-kiem' && <SectionBuffKiem onAddNew={fn => { addNewRef.current = fn; }} />}
          {activeTab === 'icons'     && <SectionIcons    onAddNew={fn => { addNewRef.current = fn; }} />}
          {activeTab === 'lien-ket'  && <SectionLienKet  onAddNew={fn => { addNewRef.current = fn; }} />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
