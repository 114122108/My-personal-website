import { useEffect, useState } from 'react'
import LiquidEther from './LiquidEther'
import './styles.css'

const journeyItems = [
  {
    year: '2023',
    title: 'Completed secondary education in Mozambique',
    text: 'This was a foundation year of academics, discipline, and self-discovery. It marked the beginning of a stronger commitment to learning and personal direction, and it helped me see my goals more clearly.'
  },
  {
    year: '2024',
    title: 'Began developing academic and professional interests',
    text: 'I began exploring the paths that would shape my future, including technology, communication, service, and international opportunities.'
  },
  {
    year: '2025',
    title: 'Started my journey in Taiwan and joined Tzu Chi University',
    text: 'This was the start of a new chapter—studying abroad, adapting to a new environment, and discovering the value of community, culture, and perseverance in my own life.'
  },
  {
    year: '2025–Present',
    title: 'University studies, Mandarin learning, volunteering, and personal development',
    text: 'Life in Taiwan has become a space for growth—through study, service, community activities, project work, and learning how to navigate a new culture with confidence.'
  },
  {
    year: '2026',
    title: 'Continued professional, technological, language, and leadership growth',
    text: 'This period is focused on building practical skills, connecting with others, and becoming more prepared to serve communities in meaningful ways through my work, learning, and values.'
  },
  {
    year: 'Future',
    title: 'Continue learning, gaining experience, and contributing to communities',
    text: 'I hope to keep learning, growing, and creating impact in Mozambique and beyond—bringing together values of service, leadership, empathy, and innovation in a meaningful way.'
  }
]

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [openJourney, setOpenJourney] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem('theme')
    const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    const applyTheme = (theme) => {
      const isDark = theme === 'dark'
      root.classList.toggle('light', !isDark)
      root.classList.toggle('dark', isDark)
      localStorage.setItem('theme', theme)

      const icon = document.querySelector('#theme-toggle-button .material-symbols-outlined')
      if (icon) {
        icon.textContent = isDark ? 'light_mode' : 'dark_mode'
      }
    }

    applyTheme(preferredTheme)

    const handleHashChange = () => {
      const links = document.querySelectorAll('.nav-links a')
      links.forEach((link) => {
        const isActive = link.getAttribute('href') === window.location.hash
        link.classList.toggle('active', isActive)
      })
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const nextTheme = root.classList.contains('light') ? 'dark' : 'light'
    root.classList.toggle('light', nextTheme === 'light')
    root.classList.toggle('dark', nextTheme === 'dark')
    localStorage.setItem('theme', nextTheme)

    const icon = document.querySelector('#theme-toggle-button .material-symbols-outlined')
    if (icon) {
      icon.textContent = nextTheme === 'dark' ? 'light_mode' : 'dark_mode'
    }
  }

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Yola Maganha home">Yola</a>

          <button
            className={`nav-toggle ${isNavOpen ? 'is-open' : ''}`}
            id="nav-toggle"
            aria-label="Open menu"
            aria-expanded={isNavOpen}
            type="button"
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-panel ${isNavOpen ? 'is-open' : ''}`} id="nav-panel">
            <div className="nav-links">
              <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
              <a href="#journey" onClick={() => setIsNavOpen(false)}>Journey</a>
              <a href="#education" onClick={() => setIsNavOpen(false)}>Education</a>
              <a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
            </div>
            <button type="button" className="theme-toggle" id="theme-toggle-button" aria-label="Toggle color theme" onClick={toggleTheme}>
              <span className="material-symbols-outlined" aria-hidden="true">light_mode</span>
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="container page-shell">
        <section className="hero section-block">
          <div className="webthreads-background" aria-hidden="true">
            <LiquidEther
              colors={['#FF69D3', '#7EE7FF', '#FFFFFF']}
              mouseForce={20}
              cursorSize={100}
              resolution={0.5}
              isViscous={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          <div className="hero-layout">
            <div className="hero-copy-wrap">
              <div className="eyebrow">
                <span className="pulse-dot" />
                International student journey
              </div>

              <h1>
                Yola Maganha
                <span className="subtitle">From Mozambique 🇲🇿 to Taiwan 🇹🇼</span>
              </h1>

              <p className="lead">Learning. Serving. Creating. Growing.</p>

              <div className="cta-row">
                <a href="#journey" className="button primary">Explore My Journey</a>
                <a href="#experience" className="button secondary">View My Experience</a>
              </div>

              <div className="hero-meta">
                <span>Student at Tzu Chi University</span>
                <span>International Service Industry Management</span>
              </div>
            </div>

            <div className="profile-visual" aria-label="Yola profile picture">
              <img className="profile-image" src="/yola.jpeg" alt="Yola Maganha portrait" />
            </div>
          </div>
        </section>

        <section id="about" className="section-block info-panel">
          <div className="section-heading">
            <p className="overline">About Me</p>
            <h2>Growing across cultures, learning with purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="about-card glass-card">
              <p>
                I am Yola Lizzy Maganha, a Mozambican international student studying in Taiwan. My journey combines education, service,
                technology, and cross-cultural growth.
              </p>
            </div>

            <div className="about-card glass-card accent-card">
              <ul>
                <li>International education</li>
                <li>Community service</li>
                <li>Technology and creativity</li>
                <li>Learning Mandarin</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="journey" className="section-block">
          <div className="section-heading">
            <p className="overline">My Journey</p>
            <h2>Small steps, meaningful growth.</h2>
          </div>

          <div className="timeline" aria-label="My journey timeline">
            {journeyItems.map((item, index) => (
              <article className={`timeline-item ${openJourney === index ? 'is-open' : ''}`} key={item.year}>
                <button className="timeline-header" type="button" onClick={() => setOpenJourney(openJourney === index ? -1 : index)}>
                  <span className="timeline-year">{item.year}</span>
                  <span>{item.title}</span>
                  <span className="timeline-toggle">{openJourney === index ? '−' : '+'}</span>
                </button>
                <div className="timeline-content">
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-block">
          <div className="section-heading">
            <p className="overline">Education</p>
            <h2>Building a future with purpose and knowledge.</h2>
          </div>

          <div className="education-panel glass-card">
            <div className="edu-main">
              <span className="edu-badge">🇹🇼 Taiwan</span>
              <h3>Tzu Chi University</h3>
              <p className="edu-degree">Bachelor’s Degree in International Service Industry Management</p>
              <p className="edu-date">2025–Present</p>
            </div>

            <div className="edu-secondary">
              <h4>Previous education in Mozambique</h4>
              <p>
                My earlier academic experience in Mozambique shaped my foundation in discipline, language, and ambition. It laid the ground for
                my continued academic journey in Taiwan and my growing interest in international service and professional development.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <p className="overline">Projects</p>
            <h2>Ideas shaped by care, culture, and community.</h2>
          </div>

          <div className="project-grid">
            <article className="project-card glass-card">
              <div className="project-tag">🌱 Eco-Minds</div>
              <h3>Eco-Minds</h3>
              <p>
                A project related to waste management in Mozambique and sustainable development, connecting environmental awareness with community
                responsibility and the Sustainable Development Goals.
              </p>
            </article>

            <article className="project-card glass-card">
              <div className="project-tag">🎙️ 異客日記</div>
              <h3>異客日記 — Stranger’s Diary</h3>
              <p>
                An international student media and storytelling project focused on cultural exchange, personal experiences, and the stories of students
                navigating new worlds.
              </p>
            </article>

            <article className="project-card glass-card">
              <div className="project-tag">💻 Personal Website</div>
              <h3>Personal Website</h3>
              <p>
                This portfolio is itself a project demonstrating my interest in technology, creativity, and digital communication.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section-block contact-section">
          <div className="section-heading">
            <p className="overline">Contact</p>
            <h2>Let’s connect.</h2>
          </div>

          <div className="contact-card glass-card">
            <p>Email</p>
            <a href="mailto:114122108@gmail.com">114122108@gmail.com</a>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2025 Yola Maganha</p>
          <span>Learning. Serving. Creating. Growing.</span>
        </div>
      </footer>
    </>
  )
}
