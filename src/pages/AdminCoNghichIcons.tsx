import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, X, Upload, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

// ── IndexedDB cho icon dir ──
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

const inputStyle = {
  backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)',
  color: 'var(--text-1)', borderRadius: 10, border: '1px solid var(--border)',
  width: '100%', padding: '8px 14px', fontSize: 14, outline: 'none',
} as React.CSSProperties;

// ── Icon Uploader ──
function IconUploader({ preview, onChange }: { preview: string; onChange: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const [dirInfo, setDirInfo] = useState<{ name: string; publicPath: string } | null>(null);
  const [pendingHandle, setPendingHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [pathInput, setPathInput] = useState('images/co-nghich-thuy-han/icons');

  useEffect(() => {
    loadHandleData('icon-dir').then(d => {
      if (d) setDirInfo({ name: d.handle.name, publicPath: d.publicPath });
    }).catch(() => {});
  }, []);

  const pickDir = async () => {
    try {
      const handle = await (window as any).showDirectoryPicker({ mode: 'readwrite' });
      setPendingHandle(handle);
      setPathInput('images/co-nghich-thuy-han/icons');
    } catch { }
  };

  const confirmDir = async () => {
    if (!pendingHandle) return;
    await saveHandle('icon-dir', pendingHandle, pathInput.trim());
    setDirInfo({ name: pendingHandle.name, publicPath: pathInput.trim() });
    setPendingHandle(null);
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await loadHandleData('icon-dir').catch(() => null);
    if (!data) { alert('Vui lòng chọn thư mục lưu icon!'); return; }
    setUploading(true);
    try {
      const perm = await (data.handle as any).requestPermission({ mode: 'readwrite' });
      if (perm !== 'granted') throw new Error('Không có quyền ghi');
      const fileHandle = await data.handle.getFileHandle(file.name, { create: true });
      const writable = await (fileHandle as any).createWritable();
      await writable.write(file);
      await writable.close();
      const url = '/' + data.publicPath.replace(/^\//, '') + '/' + file.name;
      onChange(url);
    } catch (err: any) { alert('Lỗi: ' + err.message); }
    setUploading(false);
  };

  return (
    <div className="flex flex-col gap-2" style={{ width: 100 }}>
      <div style={{ width: 100, height: 100, borderRadius: 8, overflow: 'hidden', backgroundColor: 'var(--bg-sunken)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {preview ? <img src={preview} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <span style={{ opacity: 0.2, fontSize: 28 }}>🖼️</span>}
      </div>
      {pendingHandle ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <input value={pathInput} onChange={e => setPathInput(e.target.value)} style={{ ...inputStyle, fontSize: 11, padding: '4px 8px' }} />
          <button type="button" onClick={confirmDir} style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 8px', fontSize: 11, cursor: 'pointer', fontWeight: 700 }}>Xác nhận</button>
        </div>
      ) : (
        <button type="button" onClick={pickDir} style={{ fontSize: 11, padding: '4px 8px', borderRadius: 6, border: '1px solid var(--border)', background: dirInfo ? 'rgba(239,68,68,0.1)' : 'var(--bg-sunken)', color: dirInfo ? '#dc2626' : 'var(--text-2)', cursor: 'pointer', fontWeight: 700 }}>
          📁 {dirInfo ? dirInfo.name : 'Chọn thư mục'}
        </button>
      )}
      <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 11, padding: '4px 8px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--bg-sunken)', color: 'var(--text-2)', cursor: 'pointer', fontWeight: 700, opacity: dirInfo ? 1 : 0.4 }}>
        <Upload size={11} /> {uploading ? '...' : 'Upload'}
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading || !dirInfo} />
      </label>
    </div>
  );
}

// ── Main ──
export default function AdminCoNghichIcons() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [icons, setIcons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ slug: '', label: '', image_url: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setChecking(false); });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  const fetchIcons = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/co-nghich-icons');
      const { items } = await res.json();
      setIcons(items ?? []);
    } catch { setIcons([]); }
    setLoading(false);
  };

  useEffect(() => { if (session) fetchIcons(); }, [session]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.slug.trim() || !form.image_url) { setError('Cần slug và ảnh'); return; }
    setSaving(true); setError('');
    const res = await fetch('/api/co-nghich-icons', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: form.slug.trim(), label: form.label.trim(), image_url: form.image_url }),
    });
    setSaving(false);
    if (res.ok) { setForm({ slug: '', label: '', image_url: '' }); fetchIcons(); }
    else setError('Lỗi lưu');
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/co-nghich-icons', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    fetchIcons();
  };

  const copySlug = (slug: string) => {
    navigator.clipboard.writeText(`{${slug}}`);
    setCopied(slug);
    setTimeout(() => setCopied(null), 1500);
  };

  if (checking) return <div className="flex items-center justify-center h-screen"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>;

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="text-center">
          <p className="mb-4" style={{ color: 'var(--text-2)' }}>Vui lòng đăng nhập từ trang admin chính</p>
          <button onClick={() => navigate('/admin-co-nghich')} style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', borderRadius: 10, padding: '8px 20px', cursor: 'pointer', fontWeight: 700 }}>Đến Admin</button>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-4 sm:p-6 w-full">
      {/* Nav */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '2px solid var(--border)' }}>
        {[{ label: 'Trang Bị', path: '/admin-co-nghich' }, { label: 'Icon', path: '/admin-co-nghich-icons' }].map(t => (
          <button key={t.path} onClick={() => navigate(t.path)}
            style={{ padding: '8px 20px', fontSize: 13, fontWeight: 700, background: 'transparent', border: 'none',
              borderBottom: t.path === '/admin-co-nghich-icons' ? '2px solid #dc2626' : '2px solid transparent',
              marginBottom: -2, cursor: 'pointer', color: t.path === '/admin-co-nghich-icons' ? '#dc2626' : 'var(--text-2)', transition: 'all 160ms' }}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-black" style={{ color: 'var(--text-1)' }}>Quản lý Icon Inline</h1>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>Dùng cú pháp <code style={{ background: 'var(--bg-sunken)', padding: '1px 5px', borderRadius: 4 }}>{'{slug}'}</code> trong mô tả để hiển thị icon</p>
        </div>
        <button onClick={() => supabase.auth.signOut()} className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold border cursor-pointer"
          style={{ borderColor: 'var(--border)', color: 'var(--text-2)', backgroundColor: 'var(--bg-card)' }}>
          <LogOut size={15} /> Đăng xuất
        </button>
      </div>

      {/* Form thêm icon */}
      <form onSubmit={handleAdd} className="rounded-xl border p-5 mb-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <h2 className="font-black text-sm mb-4" style={{ color: 'var(--text-1)' }}>Thêm icon mới</h2>
        <div className="flex gap-5 items-start">
          <IconUploader preview={form.image_url} onChange={url => setForm(p => ({ ...p, image_url: url }))} />
          <div className="flex flex-col gap-3 flex-1">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Slug * (dùng trong {'{slug}'})</label>
              <input value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value }))}
                placeholder="tan-cong, khi-huyet, toc-danh..." style={inputStyle} />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: 'var(--text-3)' }}>Tên hiển thị (tooltip)</label>
              <input value={form.label} onChange={e => setForm(p => ({ ...p, label: e.target.value }))}
                placeholder="Tấn Công, Khí Huyết..." style={inputStyle} />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit" disabled={saving} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer w-fit"
              style={{ backgroundColor: '#dc2626', color: '#fff', opacity: saving ? 0.7 : 1 }}>
              <Plus size={15} /> {saving ? 'Đang lưu...' : 'Thêm icon'}
            </button>
          </div>
        </div>
      </form>

      {/* Danh sách icon */}
      <h2 className="font-black text-sm mb-3" style={{ color: 'var(--text-1)' }}>Danh sách icon ({icons.length})</h2>
      {loading ? (
        <div className="flex justify-center py-10"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--border)', borderTopColor: '#dc2626' }} /></div>
      ) : icons.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12">
          <span className="text-4xl opacity-20">🖼️</span>
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>Chưa có icon nào</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
          {icons.map(icon => (
            <div key={icon.id} className="rounded-xl border p-3 flex flex-col gap-2 items-center relative" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <button onClick={() => handleDelete(icon.id)} className="absolute top-2 right-2 p-1 rounded cursor-pointer" style={{ color: '#ef4444', background: 'none', border: 'none' }}><Trash2 size={13} /></button>
              <img src={icon.image_url} alt={icon.label} style={{ width: 48, height: 48, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.opacity = '0.2'; }} />
              <div className="text-center">
                <div className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>{icon.label || icon.slug}</div>
                <button onClick={() => copySlug(icon.slug)}
                  className="text-xs px-2 py-0.5 rounded-lg cursor-pointer mt-1 transition-colors font-mono"
                  style={{ backgroundColor: copied === icon.slug ? 'rgba(34,197,94,0.15)' : 'var(--bg-sunken)', color: copied === icon.slug ? '#15803d' : '#dc2626', border: `1px solid ${copied === icon.slug ? 'rgba(34,197,94,0.4)' : 'rgba(220,38,38,0.3)'}` }}>
                  {copied === icon.slug ? '✓ Đã copy' : `{${icon.slug}}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
