import { useTheme } from '../theme/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle relative inline-flex h-10 w-20 items-center rounded-full border px-1 text-base"
      aria-label="Toggle color theme"
    >
      <span
        className="absolute top-1 bottom-1 w-8 rounded-full bg-gradient-to-r from-azure to-lime shadow-2xl shadow-azure/50"
        style={{ transform: `translateX(${isDark ? 0 : 36}px)`, transition: 'transform 0.25s ease' }}
      />
      <span className="relative z-10 flex-1 text-center text-white">🌙</span>
      <span className="relative z-10 flex-1 text-center text-slate-900">☀️</span>
    </button>
  )
}
