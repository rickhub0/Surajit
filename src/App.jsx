import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Globe,
  Instagram,
  Mail,
  Rocket,
  Shield,
  Sparkles,
  Workflow,
} from 'lucide-react'
import ThreeHeroScene from './components/ThreeHeroScene'
import LoaderScreen from './components/LoaderScreen'
import CustomCursor from './components/CustomCursor'

const skills = {
  Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma (UI/UX Design)'],
  Backend: ['Node.js', 'Express.js', 'Supabase (exploring)', 'Firebase (exploring)'],
  'AI & Advanced': [
    'Google AI Studio (Gemini)',
    'Prompt Engineering',
    'Multi-Agent Systems',
    'Automation Workflows',
  ],
  Tools: ['Vercel Deployment', 'GitHub Student Pack', 'Chrome Extension Development'],
}

const projects = [
  {
    title: 'Benglishify',
    description:
      'Real-time Benglish-to-English translator with AI-powered understanding, voice input, and a dataset-driven backend pipeline.',
    tech: ['React', 'Node.js', 'Gemini API', 'Speech Input'],
    icon: BrainCircuit,
  },
  {
    title: 'ReelsSaver Pro',
    description:
      'Premium reel downloader focused on fast media extraction and a frictionless, minimal workflow for creators.',
    tech: ['React', 'Express', 'Downloader APIs', 'Cloud Storage'],
    icon: Workflow,
  },
  {
    title: 'Clickors.tech',
    description:
      'Startup ecosystem for internet productivity tools, experimental platforms, and extensible digital services.',
    tech: ['Startup Ops', 'Web Apps', 'Automation', 'Product Strategy'],
    icon: Rocket,
  },
  {
    title: 'Clickors VPN',
    description:
      'Browser VPN extension focused on lightweight performance and simplified access to geo-restricted content.',
    tech: ['Chrome Extension', 'Networking', 'Security', 'Proxy Systems'],
    icon: Shield,
  },
  {
    title: 'NightFlow',
    description:
      'A premium glassmorphism dashboard UI system with SaaS-inspired information architecture and polished interactions.',
    tech: ['React', 'Tailwind', 'Auth Flows', 'Design System'],
    icon: Sparkles,
  },
  {
    title: 'AI Multi-Agent System',
    description:
      'An orchestration engine where multiple AI agents collaborate on extraction, routing, and automated workflows.',
    tech: ['Agentic AI', 'Pipelines', 'Data Processing', 'Prompt Ops'],
    icon: Bot,
  },
  {
    title: 'EduZingoTv',
    description:
      'Educational content platform for children with visual-first learning modules, scripts, and brand-led storytelling.',
    tech: ['Content Platform', 'Branding', 'Learning UX', 'Media'],
    icon: Globe,
  },
]

const floatingBadges = [
  { icon: Code2, label: 'React' },
  { icon: Database, label: 'Node' },
  { icon: BrainCircuit, label: 'AI' },
  { icon: Workflow, label: 'Automation' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({ tag, title, description }) {
  return (
    <motion.div
      className="mb-12 max-w-3xl"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">{tag}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">{description}</p>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  const particles = useMemo(
    () =>
      [...Array(24)].map((_, idx) => ({
        id: idx,
        size: Math.random() * 5 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 6,
      })),
    [],
  )

  return (
    <>
      <CustomCursor />
      <AnimatePresence>{loading && <LoaderScreen />}</AnimatePresence>

      <main className="relative isolate overflow-hidden bg-base">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(109,94,252,0.23),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(236,72,153,0.17),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />

        <section id="hero" className="relative min-h-screen">
          <div className="section-shell grid min-h-screen items-center gap-10 py-14 md:grid-cols-2 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Premium Developer Portfolio</p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Surajit Das
              </h1>
              <p className="mt-4 text-lg font-medium text-violet-200 md:text-xl">
                Full Stack Developer | AI Builder | Indie Maker
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                I build AI tools, automation systems, and modern web apps that solve real problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {floatingBadges.map((badge, idx) => (
                  <motion.div
                    key={badge.label}
                    className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-100"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.28 }}
                  >
                    <badge.icon size={16} className="text-cyan-300" />
                    {badge.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card relative h-[380px] overflow-hidden rounded-3xl border-white/15 shadow-glow md:h-[520px]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            >
              <ThreeHeroScene />
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative">
          <div className="section-shell">
            <SectionHeading
              tag="About Me"
              title="Building useful AI-first products with startup velocity"
              description="I am a self-driven developer from India focused on AI-powered applications, developer tools, and SaaS-style products. I actively experiment with real-world problems and ship quickly while keeping strong UI/UX and reliable backend architecture at the center."
            />
            <motion.div
              className="glass-card rounded-3xl p-8 text-slate-200 md:p-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <p className="leading-relaxed md:text-lg">
                From translators and VPN systems to multi-agent AI workflows, my journey is rooted in solving practical problems through software.
                I focus on creating intelligent, scalable, and design-forward products that feel premium and perform consistently.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="skills">
          <div className="section-shell">
            <SectionHeading
              tag="Skills"
              title="Full-spectrum product development stack"
              description="A blend of frontend craft, backend execution, AI experimentation, and practical tool-building that supports startup-scale ideas."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.article
                  key={category}
                  className="glass-card rounded-3xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ rotateX: 3, rotateY: -3, scale: 1.01 }}
                >
                  <h3 className="mb-4 text-xl font-semibold text-white">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="section-shell">
            <SectionHeading
              tag="Featured Projects"
              title="Products built at the intersection of AI, automation, and usability"
              description="Each project is designed as a premium digital product with purpose-driven UX, modern architecture, and scalable direction."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="group glass-card relative overflow-hidden rounded-3xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <project.icon className="mb-4 text-cyan-300" size={24} />
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-cyan-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="vision">
          <div className="section-shell">
            <SectionHeading
              tag="Vision"
              title="Creating a global AI SaaS ecosystem through Clickors"
              description="I am committed to building scalable AI products, launching globally useful tools, and evolving Clickors into a trusted ecosystem for productivity and automation."
            />
            <motion.div
              className="glass-card rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 text-cyan-300" /> Build powerful AI SaaS products.
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 text-cyan-300" /> Launch scalable tools globally.
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 text-cyan-300" /> Create a personal tech ecosystem under Clickors.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="contact">
          <div className="section-shell">
            <SectionHeading
              tag="Contact"
              title="Let’s collaborate on AI products and startup-grade systems"
              description="Open to building tools, platforms, and experiments that solve meaningful real-world problems."
            />

            <motion.div
              className="glass-card rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-300/60"
                  href="https://github.com/rickhub0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mb-2 flex items-center gap-2 text-sm text-cyan-200"><Github size={16} /> GitHub</p>
                  <p className="text-sm text-slate-300">github.com/rickhub0</p>
                </a>
                <a
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-300/60"
                  href="https://www.instagram.com/clickors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mb-2 flex items-center gap-2 text-sm text-cyan-200"><Instagram size={16} /> Instagram</p>
                  <p className="text-sm text-slate-300">@clickors</p>
                </a>
                <a
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-300/60"
                  href="mailto:surajit@clickors.tech"
                >
                  <p className="mb-2 flex items-center gap-2 text-sm text-cyan-200"><Mail size={16} /> Email</p>
                  <p className="text-sm text-slate-300">surajit@clickors.tech</p>
                </a>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="mb-2 text-sm text-cyan-200">Location</p>
                  <p className="text-sm text-slate-300">India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {particles.map((dot) => (
          <motion.span
            key={dot.id}
            className="pointer-events-none absolute -z-10 rounded-full bg-white/40"
            style={{ width: dot.size, height: dot.size, left: dot.left, top: dot.top }}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.75, 0.15] }}
            transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </main>
    </>
  )
}
