import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check } from 'lucide-react';

const COMMAND = '我已知转换规则,返还染色材料需在30天内使用';

const notes = [
  'Vật phẩm nhuộm màu được hoàn trả cần sử dụng trong vòng {30 ngày} kể từ khi nhận.',
  'Sau khi chuyển giới, một số vật phẩm gắn liền với giới tính cũ có thể không còn sử dụng được.',
  'Vui lòng cân nhắc kỹ trước khi thực hiện chuyển giới.',
];

export default function CauLenhDoiGioi() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 sm:p-6 max-w-2xl mx-auto space-y-6"
    >
      {/* Câu lệnh */}
      <div className="rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>Câu lệnh chuyển giới</p>
        </div>
        <div className="p-4 space-y-3">
          {/* Command box */}
          <div
            onClick={handleCopy}
            title="Click để sao chép"
            className="p-4 rounded-xl border text-center cursor-pointer transition-colors"
            style={{ backgroundColor: 'var(--bg-sunken)', borderColor: 'var(--border)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.4)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
          >
            <p className="text-base sm:text-lg font-chinese leading-relaxed tracking-wide select-all" style={{ color: 'var(--text-1)' }}>
              {COMMAND}
            </p>
          </div>

          {/* Copy button */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm cursor-pointer transition-colors ${
                copied ? 'bg-green-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'ok' : 'cp'}
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center gap-1.5"
                >
                  {copied
                    ? <><Check size={14} strokeWidth={3} />Đã sao chép!</>
                    : <><Copy size={14} />Sao chép câu lệnh</>
                  }
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          <p className="text-center text-[11px]" style={{ color: 'var(--text-3)' }}>
            Dán câu lệnh vào ô xác nhận trong trò chơi để chuyển giới thành công.
          </p>
        </div>
      </div>

      {/* Lưu ý */}
      <div className="rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>Lưu ý quan trọng</p>
        </div>
        <div className="p-4 space-y-2.5">
          {notes.map((note, i) => {
            // Highlight text trong {}
            const parts = note.split(/\{([^}]+)\}/g);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.2 }}
                className="flex items-start gap-2.5"
              >
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white bg-amber-500">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {parts.map((p, j) =>
                    j % 2 === 1
                      ? <span key={j} className="font-bold text-red-600">{p}</span>
                      : p
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
