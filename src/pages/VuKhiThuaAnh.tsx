import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ── Dữ liệu 3 vũ khí ──
const WEAPONS = [
  {
    key: 'bow',
    name: 'Thừa Ảnh Cung',
    nameZh: '承影弓',
    sub: 'Kích huyền phát thỉ, có thể xa cận',
    image: '/images/vu-khi-thua-anh/cung-bg.png',
    thumbnail: '/images/vu-khi-thua-anh/cung-thua-anh.png',
    color: '#b45309',
    colorLight: 'rgba(180,83,9,0.10)',
    colorBorder: 'rgba(180,83,9,0.40)',
    skills: [
      {
        key: 'core',
        label: 'Hạch Tâm',
        labelZh: '核心',
        icon: '/images/vu-khi-thua-anh/cung-core.png',
        pos: { top: '28.5%', left: '12.5%' },
        title: 'Thừa Ảnh Truy Kích · Cung',
        tags: ['Phạm vi sát thương', 'Tốc độ cao'],
        content: 'Sau khi trang bị, kích hoạt kỹ năng chuyên thuộc: Thừa Ảnh Truy Kích · Cung. Tính năng kỹ năng: Phạm vi sát thương, Tốc độ cao. Đặc tính thi triển thêm: Phá Thuẫn.',
      },
      {
        key: 'passive',
        label: 'Bị Động',
        labelZh: '被动',
        icon: '/images/vu-khi-thua-anh/cung-passive.png',
        pos: { top: '50%', left: '30%' },
        title: 'Cộng Minh · Cung',
        tags: ['Bị động'],
        content: 'Kích hoạt Cộng Minh · Cung: Triệu hoán Thừa Ảnh Cung hỗ trợ tấn công.',
      },
      {
        key: 'sub1',
        label: 'Phụ Bản',
        labelZh: '副本',
        icon: '/images/vu-khi-thua-anh/cung-sub1.png',
        pos: { top: '63%', left: '40%' },
        title: 'Cách Chỉ · Cung',
        tags: ['Phụ bản'],
        content: 'Kỹ năng Cách Chỉ có 2 nhánh có thể chọn. Mỗi lần cách chỉ thành công hoặc Tinh Chuẩn Nhấp Tránh sẽ bắn thêm mũi tên tấn công mục tiêu.',
      },
      {
        key: 'sub2',
        label: 'Phụ Bản',
        labelZh: '副本',
        icon: '/images/vu-khi-thua-anh/cung-sub2.png',
        pos: { top: '74%', left: '52%' },
        title: 'Tinh Chuẩn Nhấp Tránh · Cung',
        tags: ['Phụ bản'],
        content: '(Đang cập nhật nội dung chi tiết)',
      },
      {
        key: 'sub3',
        label: 'Phụ Bản',
        labelZh: '副本',
        icon: '/images/vu-khi-thua-anh/cung-sub3.png',
        pos: { top: '74%', left: '67%' },
        title: 'Liên Huề Truy Kích · Cung',
        tags: ['Phụ bản'],
        content: '(Đang cập nhật nội dung chi tiết)',
      },
    ],
  },
  {
    key: 'dual',
    name: 'Thừa Ảnh Song Đao',
    nameZh: '承影双刀',
    sub: 'Song đao liên hoàn, nhanh như chớp',
    image: '/images/vu-khi-thua-anh/song-dao.png',
    thumbnail: '/images/vu-khi-thua-anh/song-dao.png',
    color: '#dc2626',
    colorLight: 'rgba(220,38,38,0.10)',
    colorBorder: 'rgba(220,38,38,0.40)',
    skills: [
      { key: 'core',  label: 'Hạch Tâm', labelZh: '核心', icon: '', pos: { top: '28%', left: '28%' }, title: 'Thừa Ảnh Truy Kích · Song Đao', tags: ['Sát thương liên tục'], content: '(Đang cập nhật)' },
      { key: 'passive', label: 'Bị Động', labelZh: '被动', icon: '', pos: { top: '45%', left: '16%' }, title: 'Cộng Minh · Song Đao', tags: ['Bị động'], content: '(Đang cập nhật)' },
      { key: 'sub1', label: 'Phụ Bản', labelZh: '副本', icon: '', pos: { top: '62%', left: '24%' }, title: 'Kỹ năng phụ 1 · Song Đao', tags: ['Phụ bản'], content: '(Đang cập nhật)' },
      { key: 'sub2', label: 'Phụ Bản', labelZh: '副本', icon: '', pos: { top: '72%', left: '42%' }, title: 'Kỹ năng phụ 2 · Song Đao', tags: ['Phụ bản'], content: '(Đang cập nhật)' },
      { key: 'sub3', label: 'Phụ Bản', labelZh: '副本', icon: '', pos: { top: '72%', left: '58%' }, title: 'Kỹ năng phụ 3 · Song Đao', tags: ['Phụ bản'], content: '(Đang cập nhật)' },
    ],
  },
  {
    key: 'sword',
    name: 'Thừa Ảnh Kiếm',
    nameZh: '承影剑',
    sub: 'Kiếm pháp tinh diệu, công thủ toàn diện',
    image: '/images/vu-khi-thua-anh/kiem.png',
    thumbnail: '/images/vu-khi-thua-anh/kiem.png',
    color: '#1d4ed8',
    colorLight: 'rgba(29,78,216,0.10)',
    colorBorder: 'rgba(29,78,216,0.40)',
    skills: [
      { key: 'core',  label: 'Hạch Tâm', labelZh: '核心', icon: '', pos: { top: '28%', left: '28%' }, title: 'Thừa Ảnh Truy Kích · Kiếm', tags: ['Sát thương đơn thể'], content: '(Đang cập nhật)' },
      { key: 'passive', label: 'Bị Động', labelZh: '被动', icon: '', pos: { top: '45%', left: '16%' }, title: 'Cộng Minh · Kiếm', tags: ['Bị động'], content: '(Đang cập nhật)' },
      { key: 'sub1', label: 'Phụ Bản', labelZh: '副本', icon: '', pos: { top: '62%', left: '24%' }, title: 'Kỹ năng phụ 1 · Kiếm', tags: ['Phụ bản'], content: '(Đang cập nhật)' },
      { key: 'sub2', label: 'Phụ Bản', labelZh: '副本', icon: '', pos: { top: '72%', left: '42%' }, title: 'Kỹ năng phụ 2 · Kiếm', tags: ['Phụ bản'], content: '(Đang cập nhật)' },
      { key: 'sub3', label: 'Phụ Bản', labelZh: '副本', icon: '', pos: { top: '72%', left: '58%' }, title: 'Kỹ năng phụ 3 · Kiếm', tags: ['Phụ bản'], content: '(Đang cập nhật)' },
    ],
  },
];

export default function VuKhiThuaAnh() {
  const [weaponIdx, setWeaponIdx] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const weapon = WEAPONS[weaponIdx];
  const skill = weapon.skills.find(s => s.key === activeSkill) ?? null;

  const handleWeaponChange = (idx: number) => {
    setWeaponIdx(idx);
    setActiveSkill(null);
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 40px' }}>

      {/* Page title */}
      <div style={{ marginBottom: 20, borderLeft: '3px solid #b45309', paddingLeft: 14 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-1)', fontFamily: 'var(--font-chinese, serif)', letterSpacing: '0.04em', marginBottom: 2 }}>
          Vũ Khí Thừa Ảnh
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-3)' }}>
          Ba hình thái vũ khí của Thừa Ảnh — click vào icon kỹ năng để xem mô tả chi tiết.
        </p>
      </div>

      {/* 3 cột layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 320px', gap: 16, alignItems: 'start' }}>

        {/* ── CỘT TRÁI: tab vũ khí ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {WEAPONS.map((w, i) => (
            <button
              key={w.key}
              onClick={() => handleWeaponChange(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: '12px 8px',
                borderRadius: 6,
                border: `2px solid ${i === weaponIdx ? w.color : 'var(--border)'}`,
                background: i === weaponIdx ? w.colorLight : 'var(--bg-card)',
                cursor: 'pointer',
                transition: 'all 180ms',
                boxShadow: i === weaponIdx ? `0 0 12px ${w.colorBorder}` : 'none',
              }}
            >
              {/* Thumbnail vũ khí */}
              <div style={{
                width: 72, height: 72,
                borderRadius: 4,
                background: 'var(--bg-sunken)',
                border: `1px solid var(--border)`,
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {w.thumbnail
                  ? <img src={w.thumbnail} alt={w.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  : <span style={{ fontSize: 10, color: 'var(--text-3)', textAlign: 'center', padding: 4 }}>Chưa có ảnh</span>
                }
              </div>
              <span style={{
                fontSize: 12, fontWeight: 700,
                color: i === weaponIdx ? w.color : 'var(--text-2)',
                fontFamily: 'var(--font-chinese, serif)',
                textAlign: 'center', lineHeight: 1.3,
              }}>
                {w.name}
              </span>
            </button>
          ))}
        </div>

        {/* ── CỘT GIỮA: ảnh vũ khí + icon skill ── */}
        <div style={{ position: 'relative', minHeight: 420 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={weapon.key}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              {/* Ảnh vũ khí — full, không border riêng */}
              <div style={{
                width: '100%',
                minHeight: 420,
                borderRadius: 8,
                border: `1px solid ${weapon.colorBorder}`,
                overflow: 'hidden',
                position: 'relative',
              }}>
                {weapon.image
                  ? <img
                      src={weapon.image}
                      alt={weapon.name}
                      style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', minHeight: 420 }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  : <div style={{ minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-sunken)' }}>
                      <span style={{ color: 'var(--text-3)', fontSize: 13 }}>Chưa có ảnh vũ khí</span>
                    </div>
                }

                {/* Icon kỹ năng overlay */}
                {weapon.skills.map(sk => (
                  <button
                    key={sk.key}
                    onClick={() => setActiveSkill(activeSkill === sk.key ? null : sk.key)}
                    title={sk.title}
                    style={{
                      position: 'absolute',
                      top: sk.pos.top,
                      left: sk.pos.left,
                      width:75, height: 75,
                      borderRadius: '50%',
                      border: `2px solid ${activeSkill === sk.key ? weapon.color : 'rgba(255,255,255,0.5)'}`,
                      background: activeSkill === sk.key
                        ? weapon.colorLight
                        : 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(4px)',
                      cursor: 'pointer',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      gap: 2,
                      transition: 'all 180ms',
                      boxShadow: activeSkill === sk.key ? `0 0 12px ${weapon.color}` : '0 2px 8px rgba(0,0,0,0.4)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10,
                    }}
                  >
                    {sk.icon
                      ? <img src={sk.icon} alt={sk.label} style={{ width: 28, height: 28, objectFit: 'contain' }}
                          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      : <span style={{ fontSize: 16 }}>
                          {sk.key === 'core' ? '⚡' : sk.key === 'passive' ? '🔮' : '⚔️'}
                        </span>
                    }
                    <span style={{ fontSize: 8, color: '#fff', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {sk.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CỘT PHẢI: mô tả skill ── */}
        <div style={{
          background: 'var(--bg-card)',
          border: `1px solid ${skill ? weapon.colorBorder : 'var(--border)'}`,
          borderRadius: 8,
          minHeight: 420,
          overflow: 'hidden',
          transition: 'border-color 200ms',
        }}>
          <AnimatePresence mode="wait">
            {skill ? (
              <motion.div
                key={skill.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
                style={{ padding: '18px 16px' }}
              >
                {/* Skill header */}
                <div style={{
                  paddingBottom: 12,
                  marginBottom: 12,
                  borderBottom: `1px solid ${weapon.colorBorder}`,
                }}>
                  <div style={{
                    fontSize: 15, fontWeight: 800,
                    color: weapon.color,
                    fontFamily: 'var(--font-chinese, serif)',
                    marginBottom: 6,
                  }}>
                    {skill.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {skill.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 11, fontWeight: 600,
                        color: weapon.color,
                        background: weapon.colorLight,
                        border: `1px solid ${weapon.colorBorder}`,
                        borderRadius: 4,
                        padding: '1px 7px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill content */}
                <p style={{
                  fontSize: 13, color: 'var(--text-1)',
                  lineHeight: 1.75,
                  whiteSpace: 'pre-wrap',
                }}>
                  {skill.content}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  height: 420,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 8, padding: 20,
                }}
              >
                {/* Weapon info khi chưa chọn skill */}
                <div style={{
                  width: 64, height: 64,
                  borderRadius: 8,
                  background: weapon.colorLight,
                  border: `1px solid ${weapon.colorBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 4,
                }}>
                  <span style={{ fontSize: 28 }}>⚔️</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: weapon.color, fontFamily: 'var(--font-chinese, serif)', textAlign: 'center' }}>
                  {weapon.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', fontFamily: 'var(--font-chinese, serif)' }}>
                  {weapon.nameZh}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', marginTop: 8, lineHeight: 1.6 }}>
                  {weapon.sub}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 12, opacity: 0.7 }}>
                  ← Click icon kỹ năng để xem mô tả
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
