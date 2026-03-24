import { motion, useReducedMotion } from 'framer-motion'

type AnimatedHeadlineProps = {
  text: string
  className?: string
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 26, rotateX: 60, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 200, damping: 24 },
  },
}

export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  if (shouldReduceMotion) {
    return <h1 className={className}>{text}</h1>
  }

  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
      {words.map((word, idx) => (
        <motion.span key={`${word}-${idx}`} variants={wordVariant} className="inline-block mr-2 headline-gradient bg-clip-text text-transparent" whileHover={{ y: -4 }}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
