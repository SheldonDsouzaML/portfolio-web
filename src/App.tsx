import { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, Download, ArrowRight, ExternalLink,
  Brain, Cpu, Code2, Database, Wrench, Sparkles, Network,
  Bot, Eye, Boxes, Layers, Workflow, Rocket, GraduationCap,
  Briefcase, Trophy, Send, MapPin, ChevronRight,
} from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Typewriter } from "@/components/Typewriter";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

const SKILL_GROUPS = [
  { icon: Code2, title: "Programming", items: [["Python", 92], ["SQL", 82]] as [string, number][] },
  { icon: Brain, title: "Machine Learning", items: [["Scikit-Learn", 90], ["Pandas", 92], ["NumPy", 90], ["Feature Engineering", 85], ["Model Evaluation", 85]] as [string, number][] },
  { icon: Network, title: "Deep Learning", items: [["TensorFlow", 86], ["Keras", 85], ["PyTorch", 78], ["OpenCV", 82], ["Neural Networks", 84]] as [string, number][] },
  { icon: Cpu, title: "Backend", items: [["Flask", 82], ["REST APIs", 80]] as [string, number][] },
  { icon: Database, title: "Databases", items: [["MySQL", 80], ["MongoDB", 76]] as [string, number][] },
  { icon: Wrench, title: "Tools", items: [["Git / GitHub", 88], ["Jupyter", 90], ["Google Colab", 90], ["VS Code", 90], ["Streamlit", 82]] as [string, number][] },
];

const PROJECTS = [
  { title: "Deepfake Detection System", desc: "AI system that detects manipulated and synthetic media using Deep Learning and Computer Vision.", tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"], icon: Eye },
  { title: "AI Voice Assistant", desc: "Intelligent voice assistant that understands commands, responds naturally and automates tasks using NLP.", tech: ["Python", "NLP", "Speech Recognition"], icon: Bot },
  { title: "Machine Failure Prediction", desc: "Predictive maintenance system forecasting equipment failures from industrial sensor data.", tech: ["Python", "Scikit-Learn", "Pandas", "ML"], icon: Workflow },
  { title: "AI Sales Forecasting Dashboard", desc: "Forecasting dashboard for business analytics and sales prediction using ML techniques.", tech: ["Python", "ML", "Data Analytics"], icon: Layers },
  { title: "Customer Churn Prediction", desc: "Predictive analytics solution identifying customers likely to leave, improving retention.", tech: ["Machine Learning", "Data Science"], icon: Boxes },
  { title: "Employee Support Chatbot", desc: "AI chatbot that answers employee queries and automates workplace support.", tech: ["Python", "NLP", "Chatbot"], icon: Bot },
];

const INTERESTS = [
  { icon: Sparkles, title: "Large Language Models", desc: "Building, fine-tuning and prompting LLMs for real workflows." },
  { icon: Layers, title: "Retrieval Augmented Generation", desc: "Grounding LLMs with vector search and structured retrieval." },
  { icon: Boxes, title: "Digital Twin Technology", desc: "Simulating physical systems with intelligent models." },
  { icon: Network, title: "Neural Networks", desc: "Architecting deep models for perception and reasoning." },
  { icon: Brain, title: "Deep Learning", desc: "CNNs, RNNs and transformers for complex tasks." },
  { icon: Bot, title: "Agentic AI", desc: "Autonomous agents that plan, tool-use and execute." },
  { icon: Eye, title: "Computer Vision", desc: "Detection, recognition and visual understanding." },
  { icon: Sparkles, title: "Generative AI", desc: "Diffusion, generative models and creative AI." },
  { icon: Workflow, title: "MLOps", desc: "Reliable training, deployment and monitoring of ML." },
];

const EXPERIENCE = [
  {
    role: "AI Engineering Intern",
    org: "Electro Pneumatics and Hydraulics Pvt Ltd",
    period: "Current",
    bullets: [
      "Building AI-driven solutions for real industrial use cases",
      "Developing and iterating on machine learning models",
      "Data preprocessing and feature engineering pipelines",
      "Driving AI automation initiatives across workflows",
      "Researching and experimenting with intelligent systems",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    org: "Future Interns",
    period: "Previous",
    bullets: [
      "End-to-end data preprocessing and exploration",
      "Trained and tuned ML models for predictive tasks",
      "Model evaluation, validation and optimization",
      "Predictive analytics projects with measurable impact",
      "Built AI chatbot and data-driven solutions",
    ],
  },
];

const ACHIEVEMENTS = [
  { icon: Briefcase, label: "AI Engineering Intern" },
  { icon: Briefcase, label: "Machine Learning Engineer Intern" },
  { icon: Rocket, label: "Multiple AI/ML Projects Shipped" },
  { icon: GraduationCap, label: "Active Contributor to AI Learning" },
  { icon: Trophy, label: "Continuous Research in Emerging AI" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Interests />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet text-background">
              <Brain className="h-4 w-4" />
            </span>
            <span className="text-sm tracking-tight">Sheldon<span className="text-muted-foreground">.dev</span></span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-lg bg-gradient-to-r from-cyan to-violet px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex">
              Let's talk
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden rounded-lg border border-white/10 p-2">
              <div className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-foreground" />
                <span className="h-0.5 w-4 bg-foreground" />
                <span className="h-0.5 w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 grid gap-1 rounded-2xl glass-strong p-2 md:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
        {kicker}
      </div>
      <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-pretty text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10">
        <NeuralBackground />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="text-muted-foreground">Open to AI/ML opportunities</span>
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Sheldon Dsouza</span>
          </h1>
          <div className="mt-4 font-mono text-base text-muted-foreground sm:text-lg">
            <span className="text-foreground/70">&gt; </span>
            <Typewriter
              className="text-foreground"
              words={[
                "AI & Machine Learning Engineer",
                "Deep Learning Practitioner",
                "LLM & RAG Builder",
                "Digital Twin Explorer",
              ]}
            />
          </div>
          <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Building intelligent systems with Machine Learning, Deep Learning, LLMs, RAG, and Digital Twin technologies. I love turning research into real-world products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] glow-cyan">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-white/5">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-white/5">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <IconLink href="https://github.com/SheldonDsouzaML" label="GitHub"><Github className="h-4 w-4" /></IconLink>
            <IconLink href="https://www.linkedin.com/in/sheldon-dsouza-6b981a286" label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
            <IconLink href="mailto:sheldondsouza444@gmail.com" label="Email"><Mail className="h-4 w-4" /></IconLink>
          </div>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-all hover:scale-110 hover:text-foreground">
      {children}
    </a>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-float-slow">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/30 via-violet/20 to-emerald/20 blur-3xl" />
      <div className="rounded-3xl glass-strong p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">sheldon@ai:~</span>
        </div>
        <div className="mt-5 space-y-2 font-mono text-[13px] leading-relaxed">
          <p><span className="text-cyan">const</span> <span className="text-violet">engineer</span> = {"{"}</p>
          <p className="pl-5"><span className="text-emerald">name</span>: <span className="text-foreground/90">"Sheldon Dsouza"</span>,</p>
          <p className="pl-5"><span className="text-emerald">role</span>: <span className="text-foreground/90">"AI/ML Engineer"</span>,</p>
          <p className="pl-5"><span className="text-emerald">year</span>: <span className="text-foreground/90">"4th Year AIML"</span>,</p>
          <p className="pl-5"><span className="text-emerald">stack</span>: [<span className="text-foreground/90">"Python", "PyTorch", "TF"</span>],</p>
          <p className="pl-5"><span className="text-emerald">focus</span>: [<span className="text-foreground/90">"LLMs", "RAG", "DT"</span>],</p>
          <p className="pl-5"><span className="text-emerald">status</span>: <span className="text-foreground/90">"shipping"</span>,</p>
          <p>{"}"};</p>
          <p className="pt-1 text-muted-foreground">// always learning, always building</p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { k: "10+", v: "Projects" },
            { k: "2", v: "Internships" },
            { k: "4th", v: "Year AIML" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <div className="font-display text-xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="About" title="A future-focused AI Engineer" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-3xl glass p-8">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a <span className="text-foreground">4th year Artificial Intelligence and Machine Learning Engineering student</span> with a strong foundation in ML and Deep Learning. I've shipped AI-powered solutions across computer vision, NLP and predictive analytics, and I'm deeply curious about <span className="text-foreground">LLMs, RAG systems, Digital Twin technology, neural networks, and Agentic AI</span>.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I love solving real-world problems with AI and building scalable, impactful intelligent systems. I'm a continuous learner — always experimenting with the latest in the field and turning ideas into production-ready products.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Problem Solver", "Builder Mindset", "Research-Driven", "Production-Ready", "Continuous Learner"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: GraduationCap, k: "Education", v: "4th Year AIML Engineering" },
              { icon: MapPin, k: "Status", v: "Open to Roles & Internships" },
              { icon: Sparkles, k: "Focus", v: "LLMs · RAG · Digital Twins" },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl glass p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.k}</div>
                    <div className="truncate text-sm font-medium">{c.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Experience" title="Where I've been building" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-violet/40 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <div key={e.role} className={`relative grid gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`md:px-8 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className="hidden md:block" />
                  <div className="rounded-2xl glass p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-cyan">{e.period}</div>
                    <h3 className="mt-1 text-xl font-semibold">{e.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-left">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <span className="grid h-8 w-8 place-items-center rounded-full glass-strong">
                    <Briefcase className="h-4 w-4 text-cyan" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Skills" title="My technical toolbox" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="space-y-3">
                {g.items.map(([name, pct]) => (
                  <li key={name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-foreground/90">{name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan via-violet to-emerald" style={{ width: `${pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Projects" title="Featured AI/ML work" desc="A selection of intelligent systems I've built across vision, NLP and predictive analytics." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
          <div className="group relative overflow-hidden rounded-2xl border border-dashed border-white/15 p-6 transition-all hover:border-cyan/40">
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan">
                <Sparkles className="h-6 w-6 animate-pulse-glow" />
              </div>
              <h3 className="font-display text-lg font-semibold">More AI Projects Coming Soon</h3>
              <p className="text-sm text-muted-foreground">Continuously building innovative AI and Machine Learning projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tech, icon: Icon }: { title: string; desc: string; tech: string[]; icon: typeof Eye; index: number }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:glow-cyan">
      <div className="relative h-40 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-violet/15 to-emerald/15" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl glass-strong text-cyan transition-transform group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <a href="https://github.com/SheldonDsouzaML" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/5">
            <Github className="h-3.5 w-3.5" /> Code
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan to-violet px-3 py-1.5 text-xs font-semibold text-background">
            <ExternalLink className="h-3.5 w-3.5" /> Demo
          </a>
        </div>
      </div>
    </article>
  );
}

function Interests() {
  return (
    <section id="interests" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Interests" title="Where I'm exploring next" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTERESTS.map((it) => (
            <div key={it.title} className="group rounded-2xl glass p-5 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-violet transition-transform group-hover:rotate-6">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Achievements" title="Milestones so far" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="rounded-2xl glass p-5 text-center transition-all hover:-translate-y-1">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald/20 to-cyan/20 text-emerald">
                <a.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-medium">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Contact" title="Let's build something intelligent" desc="Open to AI/ML roles, internships, research collaborations and interesting problems." />
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <ContactRow icon={Mail} label="Email" value="sheldondsouza444@gmail.com" href="mailto:sheldondsouza444@gmail.com" />
            <ContactRow icon={Github} label="GitHub" value="SheldonDsouzaML" href="https://github.com/SheldonDsouzaML" />
            <ContactRow icon={Linkedin} label="LinkedIn" value="sheldon-dsouza" href="https://www.linkedin.com/in/sheldon-dsouza-6b981a286" />
            <div className="rounded-2xl glass p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Currently</div>
              <p className="mt-1 text-sm">AI Engineering Intern @ Electro Pneumatics and Hydraulics</p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = fd.get("name");
              const msg = fd.get("message");
              const subject = encodeURIComponent(`Portfolio contact from ${name}`);
              const body = encodeURIComponent(String(msg ?? ""));
              window.location.href = `mailto:sheldondsouza444@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="rounded-2xl glass p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Your name" required />
              <Field name="email" type="email" label="Email" placeholder="you@email.com" required />
            </div>
            <div className="mt-4">
              <Field name="subject" label="Subject" placeholder="What's this about?" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell me about the role, project or idea…"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/60" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]">
              <Send className="h-4 w-4" /> {sent ? "Opening mail…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:glow-cyan">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground" />
    </a>
  );
}

function Field({ name, label, placeholder, type = "text", required }: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/60" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 text-center sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:text-left">
        <p className="text-sm text-muted-foreground">
          Designed & developed by <span className="text-foreground">Sheldon Dsouza</span>
        </p>
        <div className="mx-auto flex items-center gap-2 sm:mx-0">
          <IconLink href="https://github.com/SheldonDsouzaML" label="GitHub"><Github className="h-4 w-4" /></IconLink>
          <IconLink href="https://www.linkedin.com/in/sheldon-dsouza-6b981a286" label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
          <IconLink href="mailto:sheldondsouza444@gmail.com" label="Email"><Mail className="h-4 w-4" /></IconLink>
        </div>
        <p className="text-sm text-muted-foreground sm:text-right">AI & Machine Learning Engineer</p>
      </div>
    </footer>
  );
}
