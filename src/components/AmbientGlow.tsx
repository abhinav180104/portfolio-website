import { motion, useReducedMotion } from 'framer-motion'

const ORBS = [
  {
    size: 'w-[28rem] h-[28rem]',
    color: 'bg-azure/25',
    position: { top: '-6rem', left: '-4rem' },
    animate: {
      x: [-40, 20, -10],
      y: [-10, 10, -20],
      scale: [1, 1.1, 0.95],
      rotate: [0, 15, -10],
    },
  },
  {
    size: 'w-[32rem] h-[32rem]',
    color: 'bg-lime/15',
    position: { bottom: '-8rem', right: '-2rem' },
    animate: {
      x: [20, -30, 10],
      y: [0, -30, 15],
      scale: [0.95, 1.05, 1],
      rotate: [0, -12, 18],
    },
  },
  {
    size: 'w-[18rem] h-[18rem]',
    color: 'bg-purple-500/10',
    position: { top: '40%', left: '65%' },
    animate: {
      x: [0, 25, -15],
      y: [0, 20, -10],
      scale: [1, 1.08, 0.92],
      rotate: [0, 8, -6],
    },
  },
]

export function AmbientGlow() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      {ORBS.map((orb, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${orb.size} ${orb.color} blur-[140px] rounded-full mix-blend-screen`}
          style={orb.position}
          initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
          animate={shouldReduceMotion ? undefined : { ...orb.animate }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
