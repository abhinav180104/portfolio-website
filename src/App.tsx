import { useEffect, useState } from 'react'
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

function Section({ id, title, lead, children }: { id: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section-container">
      <div className="flex flex-col gap-2 mb-10">
        <p className="text-azure text-sm font-semibold uppercase tracking-[0.3em]">{title}</p>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {children}
    </section>
  )
}

function StackPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="tag-chip">
          {item}
        </span>
      ))}
    </div>
  )
}

function CodeWindow({
  label,
  children,
  className = '',
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`surface-card ide-window ${className}`.trim()}>
      <div className="ide-toolbar">
        <div className="ide-dots" aria-hidden="true">
          <span className="ide-dot ide-dot-close" />
          <span className="ide-dot ide-dot-minimize" />
          <span className="ide-dot ide-dot-expand" />
        </div>
        <span className="ide-label">{label}</span>
      </div>
      <div className="ide-content">{children}</div>
    </div>
  )
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), LOADER_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsNavOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavToggle = () => setIsNavOpen((prev) => !prev)
  const closeNav = () => setIsNavOpen(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden theme-shell text-white">
      {showLoader && <LanguageLoader />}

      <div className="relative">
        <div className="sticky-nav mb-6">
          <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 sm:text-left">
            <div>
              <p className="text-lg sm:text-xl font-display font-semibold tracking-[0.3em] text-white">K SURYA SAI ABHINAV</p>
            </div>
            <div className="hidden sm:flex flex-wrap items-center gap-4 text-sm">
              <div className="flex flex-wrap gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>
            <div className="flex w-full items-center justify-between sm:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={handleNavToggle}
                className="inline-flex h-11 min-w-[3.2rem] items-center justify-center rounded-2xl"
                style={{ backgroundColor: 'var(--chip-bg)', border: `1px solid var(--anchor-border)`, color: 'var(--text-primary)' }}
                aria-expanded={isNavOpen}
                aria-controls="mobile-nav"
                aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                <span className="relative flex h-5 w-6 items-center justify-center">
                  {isNavOpen ? (
                    <>
                      <span className="absolute block h-0.5 w-full rotate-45 rounded-full bg-current transition-all duration-200" />
                      <span className="absolute block h-0.5 w-full -rotate-45 rounded-full bg-current transition-all duration-200" />
                    </>
                  ) : (
                    <span className="flex w-full flex-col gap-1.5">
                      <span className="block h-0.5 w-full rounded-full bg-current" />
                      <span className="block h-0.5 w-full rounded-full bg-current" />
                      <span className="block h-0.5 w-full rounded-full bg-current" />
                    </span>
                  )}
                </span>
              </button>
            </div>
          </nav>

          {isNavOpen && (
            <div id="mobile-nav" className="sm:hidden mx-auto max-w-6xl px-6 pb-6">
              <div className="surface-card flex flex-col gap-3 text-center">
                {navLinks.map((link) => (
                  <a
                    key={`mobile-${link.href}`}
                    href={link.href}
                    onClick={closeNav}
                    className="nav-link rounded-2xl py-2 text-lg font-medium"
                    style={{ backgroundColor: 'var(--chip-bg)' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <header id="about" className="section-container pt-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="text-xs tracking-[0.5em] uppercase text-slate-400 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-emerald-400" />
              Currently building resilient web platforms
            </p>
            <div className="space-y-3">
              <p className="text-[clamp(3rem,8vw,5.5rem)] font-display font-black leading-tight uppercase">Sai Abhinav</p>
              <p className="text-2xl sm:text-3xl font-display">
                <span className="headline-gradient">Full-stack Engineer &amp; Real-time Systems Builder</span>
                <span className="blink-cursor text-azure" aria-hidden="true">
                  _
                </span>
              </p>
            </div>
            <p className="max-w-3xl text-lg text-slate-300">{resumeData.summary}</p>
            <a className="anchor-button get-in-touch-btn font-semibold" href={`mailto:${resumeData.email}`}>
              Get in touch
            </a>
            <div className="info-line">
              <span className="uppercase tracking-[0.5em] text-xs">Visakhapatnam, India</span>
              <span className="bullet hidden sm:inline">•</span>
              <a className="underline-offset-4 hover:underline" href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}>
                {resumeData.phone}
              </a>
              <span className="bullet hidden sm:inline">•</span>
              <a className="underline-offset-4 hover:underline" href={`mailto:${resumeData.email}`}>
                {resumeData.email}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              {resumeData.socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="hover:text-azure">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <>
          <Section id="experience" title="Experience">
            <div className="space-y-6">
              {resumeData.experience.map((exp) => (
                <CodeWindow key={exp.title} label={`${exp.company.toLowerCase().replace(/\s+/g, '-')}.experience.ts`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold">{exp.title}</p>
                      <p className="text-slate-300">{exp.company}</p>
                    </div>
                    <p className="text-sm text-slate-400">{exp.period}</p>
                  </div>
                  <ul className="fancy-list text-slate-300">
                    <li>{exp.summary}</li>
                    {exp.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <StackPills items={exp.stack} />
                </CodeWindow>
              ))}
            </div>
          </Section>

          <Section id="education" title="Education" lead="Academic foundations that fuel my engineering mindset.">
            <CodeWindow label="education.json">
              <div>
                <p className="text-xl font-semibold">{resumeData.education.school}</p>
                <p className="text-slate-200">{resumeData.education.program}</p>
                <p className="text-slate-400 text-sm">{resumeData.education.period}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 uppercase tracking-[0.3em]">GPA</p>
                <p className="text-azure font-display text-4xl">{resumeData.education.gpa}</p>
              </div>
            </CodeWindow>
          </Section>

          <Section id="projects" title="Projects" lead="Full-stack builds that showcase how I reason about auth, data modelling, and delightful UI states.">
            <div className="grid gap-6 lg:grid-cols-2">
              {resumeData.projects.map((project, index) => (
                <CodeWindow key={project.name} label={`project-${index + 1}.tsx`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xl font-semibold">{project.name}</p>
                    </div>
                    {project.link && (
                      <a className="anchor-button px-4 py-1.5" href={project.link.url} target="_blank" rel="noreferrer">
                        {project.link.label}
                      </a>
                    )}
                  </div>
                  <ul className="fancy-list text-slate-300">
                    <li>{project.description}</li>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <StackPills items={project.stack} />
                </CodeWindow>
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills" lead="I enjoy picking the right abstraction for the job, here are the tools I reach for most often.">
            <div className="grid gap-5 md:grid-cols-3">
              {resumeData.skills.map((skill, index) => (
                <CodeWindow key={skill.label} label={`skills-${index + 1}.md`}>
                  <p className="text-lg font-semibold">{skill.label}</p>
                  <ul className="fancy-list text-slate-300">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CodeWindow>
              ))}
            </div>
          </Section>

          <Section id="achievements" title="Highlights" lead="Competitive programming and leadership roles that sharpened my decision-making under pressure.">
            <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
              <CodeWindow label="wins.log">
                <p className="text-lg font-semibold">Achievements</p>
                <ul className="fancy-list text-slate-300">
                  {resumeData.achievements.map((achievement) => (
                    <li key={achievement.title}>
                      <div>
                        <p className="font-medium text-white">{achievement.title}</p>
                        <p className="text-sm text-slate-400">{achievement.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CodeWindow>
              <CodeWindow label="leadership.md">
                <p className="text-lg font-semibold">Leadership</p>
                <ul className="fancy-list text-slate-300">
                  {resumeData.responsibilities.map((resp) => (
                    <li key={resp.role}>
                      <p className="font-medium text-white">{resp.role}</p>
                      <p className="text-sm text-slate-400">{resp.org}</p>
                    </li>
                  ))}
                </ul>
              </CodeWindow>
            </div>
          </Section>

          <Section id="contact" title="Next steps" lead="Available for full-time software engineering roles">
            <CodeWindow label="contact.sh">
              <div className="space-y-4">
                <p className="text-2xl font-semibold">Let&apos;s build something impactful</p>
                <div className="flex flex-wrap gap-3">
                  <a className="anchor-button bg-azure/10 border-azure text-azure" href={`mailto:${resumeData.email}`}>
                    Schedule a call
                  </a>
                  <a className="anchor-button" href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}>
                    Ring me directly
                  </a>
                </div>
              </div>
              <div className="space-y-3 text-slate-300">
                <p className="fancy-lead">
                  Whether it&apos;s backend heavy lifting, front-end craft, or full ownership of new features, I love shipping end-to-end.
                </p>
                <p className="fancy-lead">
                  <span className="text-white font-medium">Email:</span> {resumeData.email}
                </p>
                <p className="fancy-lead">
                  <span className="text-white font-medium">Phone:</span> {resumeData.phone}
                </p>
                <p className="fancy-lead">
                  <span className="text-white font-medium">Current city:</span> {resumeData.location}
                </p>
              </div>
            </CodeWindow>
          </Section>

          <footer className="section-container pt-0 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {resumeData.name}. Crafted with React + Vite.
          </footer>
        </>
      </div>
    </div>
  )
}
