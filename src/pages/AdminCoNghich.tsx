import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Pencil, Trash2, X, Upload, LogOut, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase, type CoNghichTrangBiRow, type CoNghichBuffRow, type CoNghichQuanCoRow } from '../lib/supabase';

// ── Liên kết phe/phái constants (dùng trong admin form) ──
const LIEN_KET_PHE_LIST = [
  { ten: 'Bạch Đế Thành',        slug: 'bach-de-thanh'        },
  { ten: 'Bích Huyết Doanh',     slug: 'bich-huyet-doanh'     },
  { ten: 'Kính Thiên Các',       slug: 'kinh-thien-cac'       },
  { ten: 'Ma Thiên',             slug: 'ma-thien'             },
  { ten: 'Minh Chiêu Hầu',       slug: 'minh-chieu-hau'       },
  { ten: 'Minh Uyên',            slug: 'minh-uyen'            },
  { ten: 'Phượng Thành',         slug: 'phuong-thanh'         },
  { ten: 'Sơ Thiệp Giang Hồ',    slug: 'so-thiep-giang-ho'    },
  { ten: 'Thiên Hạ Song Thế',    slug: 'thien-ha-song-the'    },
  { ten: 'Tiểu Sủng Liên Manh',  slug: 'tieu-sung-lien-manh'  },
  { ten: 'Võ Lâm Phong Vân Lục', slug: 'vo-lam-phong-van-luc' },
];
const LIEN_KET_PHAI_LIST = [
  { ten: 'Chiến Binh', slug: 'chien-binh' },
  { ten: 'Hỗ Trợ',    slug: 'ho-tro'     },
  { ten: 'Kiếm Sĩ',   slug: 'kiem-si'    },
  { ten: 'Lực Sĩ',    slug: 'luc-si'     },
  { ten: 'Mưu Sĩ',    slug: 'muu-si'     },
  { ten: 'Phòng Thủ', slug: 'phong-thu'  },
  { ten: 'Sát Thủ',   slug: 'sat-thu'    },
  { ten: 'Tiên Phong',slug: 'tien-phong' },
  { ten: 'Trị Liệu',  slug: 'Tri-lieu'   },
  { ten: 'Trọng Minh',slug: 'trong-minh' },
  { ten: 'Xạ Thủ',    slug: 'xa-thu'     },
];

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

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await loadHandleData(dirKey).catch(() => null);
    if (!data) { alert('Vui lòng chọn thư mục lưu trước!'); return; }
    setUploading(true);
    try {
      const perm = await (data.handle as any).requestPermission({ mode: 'readwrite' });
      if (perm !== 'granted') throw new Error('Không có quyền ghi');
      const fileHandle = await data.handle.getFileHandle(file.name, { create: true });
      const writable = await (fileHandle as any).createWritable();
      await writable.write(file);
      await writable.close();
      const url = '/' + data.publicPath.replace(/^\//, '') + '/' + file.name;
      onChange(url, file.name);
    } catch (err: any) { alert('Lỗi ghi file: ' + err.message); }
    setUploading(false);
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

      {/* Chọn ảnh & copy */}
      <label className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-xs font-semibold justify-center"
        style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-sunken)', opacity: (dirInfo && !pendingHandle) ? 1 : 0.4 }}>
        <Upload size={13} /> {uploading ? 'Đang sao chép...' : 'Chọn ảnh & sao chép'}
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading || !dirInfo || !!pendingHandle} />
      </label>
    </div>
  );
}

// ── Wrapper tương thích với code cũ dùng ImageUploader ──
function ImageUploader({ preview, onChange }: { bucket?: string; preview: string; onChange: (url: string) => void; }) {
  return <LocalImageUploader dirKey="default" preview={preview} onChange={(url) => onChange(url)} />;
}

// ── Modal Trang Bị ──
type TBForm = { ten: string; ten_zh: string; danh_muc: string; hieu_qua: string; image_url: string; };
const EMPTY_TB: TBForm = { ten: '', ten_zh: '', danh_muc: 'Tấn công', hieu_qua: '', image_url: '' };
const DANH_MUC_LIST = ['Tấn công', 'Phòng thủ', 'Đặc biệt'];

function ModalTrangBi({ item, onClose, onSaved }: { item: CoNghichTrangBiRow | null; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState<TBForm>(item ? {
    ten: item.ten, ten_zh: item.ten_zh ?? '', danh_muc: item.danh_muc ?? 'Tấn công',
    hieu_qua: item.hieu_qua ?? '', image_url: item.image_url ?? '',
  } : EMPTY_TB);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const f = (k: keyof TBForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.ten.trim()) { setError('Tên không được trống'); return; }
    setSaving(true); setError('');
    const payload = { ten: form.ten.trim(), ten_zh: form.ten_zh.trim() || null, danh_muc: form.danh_muc, hieu_qua: form.hieu_qua.trim() || null, image_url: form.image_url || null };
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
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Hiệu quả (mỗi dòng 1 chỉ số, dạng: Tên: +20%)</label>
                <textarea value={form.hieu_qua} onChange={f('hieu_qua')} rows={5}
                  placeholder={"Tấn công ✗: +20%\nXuyên giáp: +5%"} style={{ ...inputStyle, resize: 'vertical' }} />
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
                <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Mô tả hiệu quả</label>
                <textarea value={form.mo_ta} onChange={f('mo_ta')} rows={5}
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

// ── Section quản lý trang bị (local API) ──
function SectionTrangBi({ onAddNew }: { onAddNew: (trigger: () => void) => void }) {
  const [items, setItems] = useState<CoNghichTrangBiRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<CoNghichTrangBiRow | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await window.fetch('/api/trang-bi-co');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => {
    fetch();
    onAddNew(() => { setEditItem(null); setModalOpen(true); });
  }, []);

  const handleDelete = async (id: string) => {
    await window.fetch('/api/trang-bi-co', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetch();
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Trang Bị</h2>
      </div>

      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <span className="text-4xl opacity-20">⚔️</span>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chưa có trang bị nào. Nhấn "Thêm mới" để bắt đầu.</p>
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: 100 }} />
                  <col />
                  <col style={{ width: 130 }} />
                  <col style={{ width: 80 }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['Hình ảnh', 'Tên', 'Danh Mục', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-1)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                        <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                          className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                          style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                          {item.image_url
                            ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-cover" />
                            : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>⚔️</div>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-base tracking-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400 }}>{item.ten}</span>
                          {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 13 }}>{item.ten_zh}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        {item.danh_muc
                          ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                              style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>
                              {item.danh_muc}
                            </span>
                          : <span style={{ color: 'var(--text-3)' }}>—</span>}
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
        {modalOpen && <ModalTrangBi item={editItem} onClose={() => setModalOpen(false)} onSaved={fetch} />}
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
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xóa</button>
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

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await window.fetch('/api/buff-co');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => {
    fetch();
    onAddNew(() => { setEditItem(null); setModalOpen(true); });
  }, []);

  const handleDelete = async (id: string) => {
    await window.fetch('/api/buff-co', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetch();
  };

  const rarityColor = (r: string | null) => {
    if (r === 'Xanh') return '#1d4ed8';
    if (r === 'Tím')  return '#7c3aed';
    if (r === 'Vàng') return '#b45309';
    return '#6b7280';
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>Tâm Ngộ ({items.length})</h2>
      </div>

      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : (
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <span className="text-4xl opacity-20">✦</span>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chưa có tâm ngộ nào. Nhấn "Thêm mới" để bắt đầu.</p>
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="border-collapse text-left" style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: 100 }} />
                  <col />
                  <col style={{ width: 130 }} />
                  <col style={{ width: 80 }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['Hình ảnh', 'Tên', 'Độ Hiếm', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-1)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => {
                    const rc = rarityColor(item.do_hiem);
                    return (
                      <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                          <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                            className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                            style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                            {item.image_url
                              ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-cover" />
                              : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>✦</div>}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="text-base tracking-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400 }}>{item.ten}</span>
                            {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 13 }}>{item.ten_zh}</span>}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                          {item.do_hiem
                            ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap"
                                style={{ backgroundColor: `${rc}18`, color: rc, border: `1px solid ${rc}44` }}>
                                {item.do_hiem}
                              </span>
                            : <span style={{ color: 'var(--text-3)' }}>—</span>}
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
        {modalOpen && <ModalBuff item={editItem} onClose={() => setModalOpen(false)} onSaved={fetch} />}
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
                  style={{ backgroundColor: '#dc2626', color: '#fff' }}>Xóa</button>
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
type QCForm = { ten: string; ten_zh: string; gia_vang: string; loai: string; tags: string; lien_ket_phe: string[]; lien_ket_phai: string[]; ky_nang_ten: string; ky_nang_icon: string; ky_nang_icon_url: string; ky_nang_mo_ta: string; chi_so: string; image_url: string; };
const EMPTY_QC: QCForm = { ten: '', ten_zh: '', gia_vang: '5', loai: '', tags: '', lien_ket_phe: [], lien_ket_phai: [], ky_nang_ten: '', ky_nang_icon: '', ky_nang_icon_url: '', ky_nang_mo_ta: '', chi_so: '', image_url: '' };

function ModalQuanCo({ item, onClose, onSaved }: { item: CoNghichQuanCoRow | null; onClose: () => void; onSaved: () => void; }) {
  const isEdit = !!item;
  const [form, setForm] = useState<QCForm>(item ? {
    ten: item.ten, ten_zh: item.ten_zh ?? '',
    gia_vang: String(item.gia_xu ?? '5'), loai: item.loai ?? '',
    tags: (item.tags ?? []).join(', '),
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
  const f = (k: keyof QCForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));

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
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
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
        className="rounded-2xl border shadow-2xl w-full" style={{ maxWidth: 1100, maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-black text-base" style={{ color: 'var(--text-1)' }}>{isEdit ? 'Sửa quân cờ' : 'Thêm quân cờ mới'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg cursor-pointer" style={{ color: 'var(--text-3)' }}><X size={17} /></button>
        </div>
        <form onSubmit={handleSubmit} style={{ flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div className="flex gap-5 p-5">
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
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Loại</label><input value={form.loai} onChange={f('loai')} placeholder="Toàn Năng Chiến Sĩ" style={inputStyle} /></div>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tags</label><input value={form.tags} onChange={f('tags')} placeholder="Hấp Huyết, Phòng Ngự" style={inputStyle} /></div>
            </div>
            {/* Cột liên kết + kỹ năng + chỉ số */}
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              {/* Liên kết phe */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-3)' }}>Liên kết phe</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {LIEN_KET_PHE_LIST.map(p => {
                    const active = form.lien_ket_phe.includes(p.slug);
                    return (
                      <button key={p.slug} type="button" onClick={() => toggleSlug('lien_ket_phe', p.slug)} style={toggleBtn(active)}>
                        <img src={`/images/co-nghich-thuy-han/lien-ket-phe/${p.slug}.png`} alt={p.ten} style={{ width: 18, height: 18, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <span style={{ fontSize: 11, fontWeight: 700, color: active ? '#dc2626' : 'var(--text-2)' }}>{p.ten}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Liên kết phái */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-3)' }}>Liên kết phái</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {LIEN_KET_PHAI_LIST.map(p => {
                    const active = form.lien_ket_phai.includes(p.slug);
                    return (
                      <button key={p.slug} type="button" onClick={() => toggleSlug('lien_ket_phai', p.slug)} style={toggleBtn(active)}>
                        <img src={`/images/co-nghich-thuy-han/lien-ket-phai/${p.slug}.png`} alt={p.ten} style={{ width: 18, height: 18, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <span style={{ fontSize: 11, fontWeight: 700, color: active ? '#dc2626' : 'var(--text-2)' }}>{p.ten}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên kỹ năng</label><input value={form.ky_nang_ten} onChange={f('ky_nang_ten')} placeholder="Thương Diệm Liệt Tâm" style={inputStyle} /></div>
              <div><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Mô tả kỹ năng</label><textarea value={form.ky_nang_mo_ta} onChange={f('ky_nang_mo_ta')} rows={5} style={{ ...inputStyle, resize: 'vertical' }} /></div>
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

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quan-co');
      const { items: data } = await res.json();
      setItems(data ?? []);
    } catch { setItems([]); }
    setLoading(false);
  };
  useEffect(() => { fetchItems(); onAddNew(() => { setEditItem(null); setModalOpen(true); }); }, []);

  const handleDelete = async (id: string) => {
    await fetch('/api/quan-co', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setDeleteId(null); fetchItems();
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
                <colgroup><col style={{ width: 100 }} /><col /><col style={{ width: 100 }} /><col style={{ width: 100 }} /><col style={{ width: 80 }} /></colgroup>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                    {['Hình ảnh', 'Tên', 'Loại', 'Sao', ''].map((h, i, arr) => (
                      <th key={i} className="px-4 py-3.5 text-sm font-black uppercase tracking-wider text-center whitespace-nowrap"
                        style={{ color: 'var(--text-1)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="text-center" style={{ borderRight: '1px solid var(--border)', overflow: 'hidden' }}>
                        <div onClick={() => { setEditItem(item); setModalOpen(true); }}
                          className="w-24 h-24 mx-auto flex items-center justify-center cursor-pointer overflow-hidden"
                          style={{ transition: 'transform 1s cubic-bezier(.25,.8,.25,1)' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                          {item.image_url ? <img src={item.image_url} alt={item.ten} className="w-full h-full object-cover" />
                            : <div className="w-full h-full flex items-center justify-center text-3xl opacity-20" style={{ backgroundColor: 'var(--bg-sunken)' }}>♟️</div>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-base tracking-tight" style={{ color: 'var(--text-1)', fontFamily: 'var(--font-skill)', fontWeight: 400 }}>{item.ten}</span>
                          {item.ten_zh && <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-chinese)', fontSize: 13 }}>{item.ten_zh}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                        {item.loai ? <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold whitespace-nowrap" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }}>{item.loai}</span>
                          : <span style={{ color: 'var(--text-3)' }}>—</span>}
                      </td>
                      <td className="px-4 py-4 text-center" style={{ borderRight: '1px solid var(--border)', color: '#d97706', fontWeight: 700 }}>
                        {item.so_sao ? '★'.repeat(item.so_sao) : '—'}
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
              <div className="flex-1"><label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Mô tả hiệu quả</label>
                <textarea value={form.mo_ta} onChange={f('mo_ta')} rows={5} style={{ ...inputStyle, resize: 'vertical' }} /></div>
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

// ── Main Admin ──
type AdminTab = 'trang-bi' | 'tam-ngo' | 'quan-co' | 'buff-kiem';

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
        {(['quan-co', 'trang-bi', 'tam-ngo', 'buff-kiem'] as AdminTab[]).map(tab => {
          const labels: Record<AdminTab, string> = { 'quan-co': 'Quân Cờ', 'trang-bi': 'Trang Bị', 'tam-ngo': 'Tâm Ngộ', 'buff-kiem': 'Buff Kiếm' };
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
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
