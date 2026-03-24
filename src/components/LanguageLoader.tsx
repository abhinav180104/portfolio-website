import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useTheme } from '../theme/ThemeProvider'
import earthConnections from '../assets/earth-connections.json'

const greetings = [
  { text: 'Welcome to my website', locale: 'English' },
  { text: 'Bienvenido a mi sitio web', locale: 'Español' },
  { text: 'Bienvenue sur mon site', locale: 'Français' },
  { text: 'Benvenuto nel mio sito', locale: 'Italiano' },
  { text: 'मेरी वेबसाइट पर आपका स्वागत है', locale: 'हिन्दी' },
  { text: 'నా వెబ్‌సైట్‌కు స్వాగతం', locale: 'తెలుగు' }
];

export const LOADER_DURATION_MS = 5600
const MESSAGE_INTERVAL = 600

export function LanguageLoader() {
  const [index, setIndex] = useState(0)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length)
    }, MESSAGE_INTERVAL)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 overflow-hidden ${
        isLight ? 'bg-gradient-to-b from-slate-50 via-white to-slate-200 text-slate-900' : 'bg-gradient-to-b from-slate-950 via-night to-slate-950 text-white'
      }`}
    >
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLight ? 0.35 : 0.45 }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      >
        <Lottie animationData={earthConnections} loop autoPlay className="h-full w-full object-cover" />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={greetings[index].text}
          initial={{ opacity: 0, y: -30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 1.02 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="relative z-10 text-2xl sm:text-4xl font-display tracking-tight text-center px-8"
        >
          {greetings[index].text}
        </motion.div>
      </AnimatePresence>
      <motion.div className={`relative z-10 mt-4 h-1 w-48 overflow-hidden rounded-full ${isLight ? 'bg-slate-200' : 'bg-white/10'}`}>
        <motion.div
          className={`h-full w-full origin-left ${isLight ? 'bg-slate-800' : 'bg-azure'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: LOADER_DURATION_MS / 1000, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}
