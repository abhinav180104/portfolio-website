import { motion, useReducedMotion } from 'framer-motion'

type AnimatedHeadlineProps = {
  text: string
  className?: string
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
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
        <motion.span key={`${word}-${idx}`} variants={wordVariant} className="mr-2 inline-block headline-gradient bg-clip-text text-transparent">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
