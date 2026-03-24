import { motion } from 'framer-motion'
import { useTheme } from '../theme/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle relative inline-flex h-10 w-20 items-center rounded-full border px-1 text-base"
      whileTap={{ scale: 0.96 }}
      aria-label="Toggle color theme"
    >
      <motion.span
        className="absolute top-1 bottom-1 w-8 rounded-full bg-gradient-to-r from-azure to-lime shadow-2xl shadow-azure/50"
        animate={{ x: isDark ? 0 : 36 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <span className="relative z-10 flex-1 text-center text-white">🌙</span>
      <span className="relative z-10 flex-1 text-center text-slate-900">☀️</span>
    </motion.button>
  )
}
