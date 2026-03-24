import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedHeadline } from './components/AnimatedHeadline'
import { AmbientGlow } from './components/AmbientGlow'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { LanguageLoader, LOADER_DURATION_MS } from './components/LanguageLoader'
import { ThemeToggle } from './components/ThemeToggle'
import { resumeData } from './content/resumeData'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Wins' },
  { href: '#contact', label: 'Contact' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

function Section({ id, title, lead, children }: { id: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="section-container"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-2 mb-10">
        <p className="text-azure text-sm font-semibold uppercase tracking-[0.3em]">{title}</p>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {children}
    </motion.section>
  )
}

function StackPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <motion.span
          key={item}
          className="tag-chip"
          whileHover={{ y: -3, backgroundColor: 'rgba(56, 189, 248, 0.25)', color: '#f8fafc' }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), LOADER_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [])

  if (showLoader) {
    return <LanguageLoader />
  }

  return (
    <div className="relative min-h-screen overflow-hidden theme-shell text-white">
      <ScrollProgressBar />
      <AmbientGlow />

      <div className="relative">
        <motion.nav
          className="section-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-10 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="text-sm text-slate-400 uppercase tracking-[0.5em]">Portfolio</p>
            <p className="text-xl font-display font-semibold tracking-[0.3em] text-white">K SURYA SAI ABHINAV</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link transition"
                  whileHover={{ y: -2, color: '#ffffff' }}
                  whileTap={{ scale: 0.96 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </motion.nav>

        <header id="about" className="section-container pt-8">
          <motion.div className="flex flex-col items-center text-center gap-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className="text-xs tracking-[0.5em] uppercase text-slate-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Currently building resilient web platforms
            </p>
            <div className="space-y-3">
              <p className="text-[clamp(3rem,8vw,5.5rem)] font-display font-black leading-tight uppercase">Sai Abhinav</p>
              <AnimatedHeadline text="Full-stack Engineer & Real-time Systems Builder" className="text-2xl sm:text-3xl font-display" />
            </div>
            <p className="max-w-3xl text-lg text-slate-300">{resumeData.summary}</p>
            <motion.a
              className="anchor-button get-in-touch-btn font-semibold"
              href={`mailto:${resumeData.email}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in touch
            </motion.a>
            <div className="info-line">
              <span className="uppercase tracking-[0.5em] text-xs">Visakhapatnam, India</span>
              <span className="bullet">•</span>
              <motion.a className="underline-offset-4 hover:underline" href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}>
                {resumeData.phone}
              </motion.a>
              <span className="bullet">•</span>
              <motion.a className="underline-offset-4 hover:underline" href={`mailto:${resumeData.email}`}>
                {resumeData.email}
              </motion.a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              {resumeData.socials.map((social) => (
                <motion.a key={social.label} href={social.url} target="_blank" rel="noreferrer" whileHover={{ color: '#38bdf8', y: -2 }}>
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </header>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {resumeData.experience.map((exp) => (
              <motion.div
                key={exp.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="surface-card p-8 space-y-5"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold">{exp.title}</p>
                    <p className="text-slate-300">{exp.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
                <p className="text-slate-200">{exp.summary}</p>
                <ul className="space-y-2 text-slate-300 list-disc list-inside">
                  {exp.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <StackPills items={exp.stack} />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" lead="Academic foundations that fuel my engineering mindset.">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="surface-card p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div>
              <p className="text-xl font-semibold">{resumeData.education.school}</p>
              <p className="text-slate-200">{resumeData.education.program}</p>
              <p className="text-slate-400 text-sm">{resumeData.education.period}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 uppercase tracking-[0.3em]">GPA</p>
              <p className="text-azure font-display text-4xl">{resumeData.education.gpa}</p>
            </div>
          </motion.div>
        </Section>

        <Section id="projects" title="Projects" lead="Full-stack builds that showcase how I reason about auth, data modelling, and delightful UI states.">
          <div className="grid gap-6 lg:grid-cols-2">
            {resumeData.projects.map((project) => (
              <motion.article
                key={project.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="surface-card p-7 flex flex-col gap-4"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold">{project.name}</p>
                    <p className="text-slate-300">{project.description}</p>
                  </div>
                  {project.link && (
                    <a className="anchor-button px-4 py-1.5" href={project.link.url} target="_blank" rel="noreferrer">
                      {project.link.label}
                    </a>
                  )}
                </div>
                <ul className="space-y-2 text-slate-300 list-disc list-inside">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <StackPills items={project.stack} />
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" lead="I enjoy picking the right abstraction for the job—here are the tools I reach for most often.">
          <div className="grid gap-5 md:grid-cols-3">
            {resumeData.skills.map((skill) => (
              <motion.div
                key={skill.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="surface-card p-6 space-y-4"
              >
                <p className="text-lg font-semibold">{skill.label}</p>
                <ul className="space-y-2 text-slate-300">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Highlights" lead="Competitive programming and leadership roles that sharpened my decision-making under pressure.">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="surface-card p-7 space-y-4"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <p className="text-lg font-semibold">Achievements</p>
              <ul className="space-y-3 text-slate-300">
                {resumeData.achievements.map((achievement) => (
                  <li key={achievement.title} className="flex items-start gap-3">
                    <span className="text-azure mt-1">●</span>
                    <div>
                      <p className="font-medium text-white">{achievement.title}</p>
                      <p className="text-sm text-slate-400">{achievement.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="surface-card p-7 space-y-4"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <p className="text-lg font-semibold">Leadership</p>
              <ul className="space-y-3 text-slate-300">
                {resumeData.responsibilities.map((resp) => (
                  <li key={resp.role}>
                    <p className="font-medium text-white">{resp.role}</p>
                    <p className="text-sm text-slate-400">{resp.org}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        <Section id="contact" title="Next steps" lead="Available for full-time software engineering roles">
          <motion.div
            className="surface-card p-8 grid gap-8 md:grid-cols-2"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Let&apos;s build something impactful</p>
              <p className="text-slate-300">
                Whether it&apos;s backend heavy lifting, front-end craft, or full ownership of new features, I love shipping end-to-end.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a className="anchor-button bg-azure/10 border-azure text-azure" href={`mailto:${resumeData.email}`} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                  Schedule a call
                </motion.a>
                <motion.a className="anchor-button" href={`tel:${resumeData.phone.replace(/\s+/g, '')}`} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                  Ring me directly
                </motion.a>
              </div>
            </div>
            <div className="space-y-3 text-slate-300">
              <p>
                <span className="text-white font-medium">Email:</span> {resumeData.email}
              </p>
              <p>
                <span className="text-white font-medium">Phone:</span> {resumeData.phone}
              </p>
              <p>
                <span className="text-white font-medium">Current city:</span> {resumeData.location}
              </p>
            </div>
          </motion.div>
        </Section>

        <footer className="section-container pt-0 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {resumeData.name}. Crafted with React + Vite.
        </footer>
      </div>
    </div>
  )
}
