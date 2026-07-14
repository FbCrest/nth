import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Highlight các chỉ số quan trọng trong text
function HighlightText({ text, color }: { text: string; color: string }) {
  // Pattern: số có %, giây, tầng, trượng, cấp, hoặc X/Y/Z dạng chuỗi
  const parts = text.split(/([\d,]+(?:[,.][\d]+)*(?:%|[\s]?giây|[\s]?tầng|[\s]?trượng|[\s]?giây)?(?:[\s]?\/[\s]?[\d,]+(?:[,.][\d]+)*(?:%|[\s]?giây|[\s]?tầng|[\s]?trượng)?)*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const isNum = /[\d,]+/.test(part) && part.trim().length > 0;
        return isNum ? (
          <strong key={i} style={{ color, fontWeight: 700 }}>{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

const ELEMENT_CONFIG = [
  { key: 'kim',  label: 'Kim',  labelZh: '金', color: '#b45309', colorLight: 'rgba(180,83,9,0.10)',   colorBorder: 'rgba(180,83,9,0.50)',   colorGlow: 'rgba(180,83,9,0.25)',   image: '/images/chu-thien/kim.png',
    content: [
      {
        title: 'Điều kiện kích hoạt',
        items: [
          'Khi số lượng Nguyên Tố đạt 4 → kích hoạt Chu Thiên Nội Công cấp 1',
          'Khi số lượng Nguyên Tố đạt 8 → kích hoạt Chu Thiên Nội Công cấp 2',
          'Khi số lượng Nguyên Tố đạt 12 → kích hoạt Chu Thiên Nội Công cấp 3',
        ],
      },
      {
        title: 'Hiệu ứng',
        items: [
          'Khi tấn công hoặc hồi máu, Sát thương Bạo Kích tăng 6% / 12% / 20% trong 8 giây.',
          'Trong thời gian hiệu ứng, mỗi lần Bạo Kích gây thêm 1 đòn sát thương / trị liệu với hệ số 70% / 150% / 240%.',
          'Đòn này luôn Bạo Kích (sát thương lên quái vật được tăng). Tối đa kích hoạt 3 lần.',
          'Hồi chiêu 20 giây.',
        ],
      },
    ],
  },
  {
    key: 'moc', label: 'Mộc', labelZh: '木',
    color: '#15803d',
    colorLight: 'rgba(21,128,61,0.10)',
    colorBorder: 'rgba(21,128,61,0.50)',
    colorGlow: 'rgba(21,128,61,0.25)',
    image: '/images/chu-thien/moc.png',
    content: [
      {
        title: 'Điều kiện kích hoạt',
        items: [
          'Khi số lượng Nguyên Tố đạt 4 → kích hoạt Chu Thiên Nội Công cấp 1',
          'Khi số lượng Nguyên Tố đạt 8 → kích hoạt Chu Thiên Nội Công cấp 2',
          'Khi số lượng Nguyên Tố đạt 12 → kích hoạt Chu Thiên Nội Công cấp 3',
        ],
      },
      {
        title: 'Hiệu ứng',
        items: [
          'Khi thi triển kỹ năng, giảm 7% / 15% / 25% thời gian hồi của một kỹ năng môn phái đang trong thời gian hồi (tối đa 1 / 2.5 / 5 giây).',
          'Hiệu ứng của mỗi kỹ năng có thời gian kích hoạt độc lập, bằng đúng thời gian hồi của kỹ năng đó.',
        ],
      },
    ],
  },
  {
    key: 'thuy',
    label: 'Thủy', labelZh: '水',
    color: '#1d4ed8',
    colorLight: 'rgba(29,78,216,0.10)',
    colorBorder: 'rgba(29,78,216,0.50)',
    colorGlow: 'rgba(29,78,216,0.25)',
    image: '/images/chu-thien/thuy.png',
    content: [
      {
        title: 'Điều kiện kích hoạt',
        items: [
          'Khi số lượng Nguyên Tố đạt 4 → kích hoạt Chu Thiên Nội Công cấp 1',
          'Khi số lượng Nguyên Tố đạt 8 → kích hoạt Chu Thiên Nội Công cấp 2',
          'Khi số lượng Nguyên Tố đạt 12 → kích hoạt Chu Thiên Nội Công cấp 3',
        ],
      },
      {
        title: 'Hiệu ứng',
        items: [
          'Khi thi triển kỹ năng, nhận hiệu ứng tăng 0.7% / 1.5% / 2.5% sát thương, trị liệu và giảm sát thương phải chịu trong 10 giây.',
          'Nếu là kỹ năng cường hóa hoặc kỹ năng hỗ trợ, toàn bộ đồng đội trong phạm vi 20 trượng cũng nhận hiệu ứng tăng cường tương tự.',
        ],
      },
    ],
  },
  {
    key: 'hoa',
    label: 'Hỏa', labelZh: '火',
    color: '#dc2626',
    colorLight: 'rgba(220,38,38,0.10)',
    colorBorder: 'rgba(220,38,38,0.50)',
    colorGlow: 'rgba(220,38,38,0.30)',
    image: '/images/chu-thien/hoa.png',
    content: [
      {
        title: 'Điều kiện kích hoạt',
        items: [
          'Khi số lượng Nguyên Tố đạt 4 → kích hoạt Chu Thiên Nội Công cấp 1',
          'Khi số lượng Nguyên Tố đạt 8 → kích hoạt Chu Thiên Nội Công cấp 2',
          'Khi số lượng Nguyên Tố đạt 12 → kích hoạt Chu Thiên Nội Công cấp 3',
        ],
      },
      {
        title: 'Hiệu ứng',
        items: [
          'Sát thương và Trị liệu tăng 1.2% / 2.4% / 4%.',
          'Khi tấn công hoặc trị liệu, cứ mỗi 5 giây tăng thêm 0.4% / 0.8% / 1.6% Sát thương và Trị liệu, cộng dồn tối đa 5 tầng.',
          'Hiệu ứng sẽ bị xóa khi thoát chiến đấu.',
        ],
      },
    ],
  },
  {
    key: 'tho',
    label: 'Thổ', labelZh: '土',
    color: '#92400e',
    colorLight: 'rgba(146,64,14,0.10)',
    colorBorder: 'rgba(146,64,14,0.50)',
    colorGlow: 'rgba(146,64,14,0.25)',
    image: '/images/chu-thien/tho.png',
    content: [
      {
        title: 'Điều kiện kích hoạt',
        items: [
          'Khi số lượng Nguyên Tố đạt 4 → kích hoạt Chu Thiên Nội Công cấp 1',
          'Khi số lượng Nguyên Tố đạt 8 → kích hoạt Chu Thiên Nội Công cấp 2',
          'Khi số lượng Nguyên Tố đạt 12 → kích hoạt Chu Thiên Nội Công cấp 3',
        ],
      },
      {
        title: 'Hiệu ứng',
        items: [
          'Tăng 1,5% / 3% / 6% Giới hạn Khí Huyết.',
          'Cứ mỗi khi Khí Huyết giảm 10%, nhận 0.6% / 1.2% / 2% Giảm sát thương.',
          'Khi Khí Huyết dưới 50%, hiệu ứng đạt tối đa 3% / 6% / 10%.',
        ],
      },
    ],
  },
];

export default function ChuThien() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = sang phải, -1 = sang trái

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + ELEMENT_CONFIG.length) % ELEMENT_CONFIG.length);
  const next = () => go((current + 1) % ELEMENT_CONFIG.length);

  const el = ELEMENT_CONFIG[current];

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '28px 20px 40px' }}>

      {/* Slider container */}
      <div style={{ position: 'relative' }}>

        {/* Tabs ngũ hành */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
          {ELEMENT_CONFIG.map((e, i) => (
            <button
              key={e.key}
              onClick={() => go(i)}
              style={{
                padding: '5px 16px',
                fontSize: 13,
                fontWeight: 700,
                fontFamily: 'var(--font-chinese, serif)',
                color: i === current ? '#fff' : e.color,
                background: i === current ? e.color : e.colorLight,
                border: `1px solid ${e.colorBorder}`,
                borderRadius: 5,
                cursor: 'pointer',
                transition: 'all 180ms',
                boxShadow: i === current ? `0 0 10px ${e.colorGlow}` : 'none',
              }}
            >
              {e.label} {e.labelZh}
            </button>
          ))}
        </div>

        {/* Card slider */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={el.key}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div style={{
                background: 'var(--bg-card)',
                border: `2px solid ${el.colorBorder}`,
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: `0 4px 20px rgba(0,0,0,0.10), 0 0 0 1px ${el.colorBorder}`,
              }}>
                {/* Card header — ảnh căn giữa, không viền */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px 24px 16px',
                  background: el.colorLight,
                  borderBottom: `1px solid ${el.colorBorder}`,
                }}>
                  <img
                    src={el.image}
                    alt={el.label}
                    style={{ display: 'block', maxHeight: 140, width: 'auto' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>

                {/* Card body */}
                <div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {el.content.map((section, si) => (
                    <div key={si}>
                      <div style={{
                        fontSize: 12, fontWeight: 800, color: el.color,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        marginBottom: 8,
                        display: 'flex', alignItems: 'center', gap: 6,
                      }}>
                        <span style={{ display: 'inline-block', width: 3, height: 14, background: el.color, borderRadius: 2, flexShrink: 0 }} />
                        {section.title}
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {section.items.map((item, ii) => (
                          <li key={ii} style={{ display: 'flex', gap: 8, fontSize: 13.5, color: 'var(--text-1)', lineHeight: 1.7, alignItems: 'flex-start' }}>
                            <span style={{ color: el.color, fontWeight: 900, fontSize: 11, marginTop: 4, flexShrink: 0 }}>◆</span>
                            <span><HighlightText text={item} color={el.color} /></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          style={{
            position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%',
            background: 'var(--bg-card)', border: `1px solid ${el.colorBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: el.color,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'background 180ms, box-shadow 180ms',
            zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = el.colorLight)}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-card)')}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          style={{
            position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%',
            background: 'var(--bg-card)', border: `1px solid ${el.colorBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: el.color,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'background 180ms, box-shadow 180ms',
            zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = el.colorLight)}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-card)')}
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          {ELEMENT_CONFIG.map((e, i) => (
            <button
              key={e.key}
              onClick={() => go(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background: i === current ? e.color : 'var(--border)',
                cursor: 'pointer',
                transition: 'all 220ms',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
