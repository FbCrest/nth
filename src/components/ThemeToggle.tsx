import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggle}
      className="relative p-2 rounded-xl transition-colors cursor-pointer border"
      style={{
        backgroundColor: 'var(--bg-sunken)',
        borderColor: 'var(--border)',
        color: isDark ? '#f59e0b' : 'var(--text-3)',
      }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'sun' : 'moon'}
          initial={{ y: 10, opacity: 0, rotate: -20 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 20 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
