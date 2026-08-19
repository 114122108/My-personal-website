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
                I am Yola Lizzy Maganha, a Mozambican international student in Taiwan, building my academic and professional journey with
                curiosity, perseverance, and heart. I am currently studying at Tzu Chi University, where I am learning not only in the
                classroom but also through daily experiences with language, service, community, and cross-cultural collaboration.
              </p>
              <p>
                My story is shaped by resilience and a strong desire to keep growing. Technology and programming became meaningful areas of
                interest to me because they connect creativity, problem-solving, and future possibilities. Through every challenge, I have
                learned to make the most of the opportunities around me and keep moving forward with purpose.
              </p>
            </div>

            <div className="about-card glass-card accent-card">
              <ul>
                <li>International education</li>
                <li>Personal growth</li>
                <li>Cross-cultural experiences</li>
                <li>Volunteering and service</li>
                <li>Technology and digital skills</li>
                <li>Learning Mandarin</li>
                <li>Project planning</li>
                <li>Community involvement</li>
                <li>Building a meaningful future</li>
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

        <section id="certifications" className="section-block">
          <div className="section-heading">
            <p className="overline">Language Certifications</p>
            <h2>Continuing to grow in communication and connection.</h2>
          </div>

          <div className="cert-grid">
            <article className="cert-card glass-card">
              <div className="cert-top">
                <span className="cert-icon">English</span>
                <span className="cert-badge">Certified</span>
              </div>
              <h3>TOEIC</h3>
              <p className="cert-value">CEFR Level: C1</p>
              <p>Advanced English proficiency with confidence in communication and academic expression.</p>
            </article>

            <article className="cert-card glass-card">
              <div className="cert-top">
                <span className="cert-icon">Mandarin</span>
                <span className="cert-badge">Learning</span>
              </div>
              <h3>TOCFL</h3>
              <p className="cert-value">Level: B1</p>
              <p>Intermediate Mandarin proficiency, supported by daily learning, cross-cultural communication, and community experience.</p>
            </article>
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-heading">
            <p className="overline">Experience</p>
            <h2>Learning through service and everyday effort.</h2>
          </div>

          <div className="experience-grid">
            <article className="experience-card glass-card">
              <h3>Volunteer &amp; Community Experience</h3>
              <ul>
                <li>Volunteering with Tzu Chi and Jing Si activities</li>
                <li>Environmental awareness and care</li>
                <li>Community service and outreach</li>
                <li>Cleaning and shared-space service activities</li>
                <li>Disaster recovery and service-oriented action</li>
                <li>Participation in international student activities</li>
              </ul>
              <p>
                Each experience helped me learn that service is not only about helping others—it is also about humility, empathy, and
                understanding what can be gained from caring for a community.
              </p>
            </article>

            <article className="experience-card glass-card">
              <h3>International Student Experience</h3>
              <ul>
                <li>Adapting to life in Taiwan</li>
                <li>Cross-cultural communication</li>
                <li>Mandarin learning and daily practice</li>
                <li>Working with students from many countries</li>
                <li>Building teamwork in a new environment</li>
              </ul>
              <p>
                Moving from Mozambique to Taiwan has strengthened my ability to adapt, connect, and grow across cultures while staying grounded in
                my identity and values.
              </p>
            </article>

            <article className="experience-card glass-card wide-card">
              <h3>Technology &amp; Learning</h3>
              <p>
                I became increasingly interested in technology and programming because I enjoy the way it combines creativity, logic, and problem-
                solving. I keep building my skills through consistent practice, curiosity, and a willingness to keep learning.
              </p>
              <p>
                This journey reflects perseverance in a practical way: I do not wait for perfect conditions, but I grow through effort, curiosity,
                and a steady desire to improve.
              </p>
            </article>
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

        <section id="skills" className="section-block">
          <div className="section-heading">
            <p className="overline">Skills</p>
            <h2>Strengths shaped by learning and service.</h2>
          </div>

          <div className="skills-layout">
            <div className="skill-group glass-card">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span>Portuguese</span>
                <span>English — C1</span>
                <span>Mandarin Chinese — B1</span>
              </div>
            </div>

            <div className="skill-group glass-card">
              <h3>Technology</h3>
              <div className="skill-tags">
                <span>Microsoft Word</span>
                <span>Microsoft PowerPoint</span>
                <span>Microsoft Excel</span>
                <span>Canva</span>
                <span>Information Management</span>
                <span>Programming fundamentals</span>
              </div>
            </div>

            <div className="skill-group glass-card">
              <h3>Professional Skills</h3>
              <div className="skill-tags">
                <span>Communication</span>
                <span>Presentation</span>
                <span>Teamwork</span>
                <span>Project Planning</span>
                <span>Problem Solving</span>
                <span>Cross-cultural Communication</span>
                <span>Adaptability</span>
                <span>Leadership</span>
                <span>Community Service</span>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="section-block">
          <div className="section-heading">
            <p className="overline">Volunteering &amp; Service</p>
            <h2>Service that teaches as much as it gives.</h2>
          </div>

          <blockquote>
            “Service is not only about what we give to others, but also about what we learn from serving.”
          </blockquote>
        </section>

        <section id="values" className="section-block">
          <div className="section-heading">
            <p className="overline">My Values</p>
            <h2>Living with purpose and heart.</h2>
          </div>

          <div className="values-grid">
            <span>Perseverance</span>
            <span>Service</span>
            <span>Learning</span>
            <span>Curiosity</span>
            <span>Responsibility</span>
            <span>Cross-cultural understanding</span>
            <span>Growth</span>
          </div>

          <div className="quote-placeholder glass-card">
            <p>Jing Si-inspired reflection space</p>
            <small>Authentic Jing Si Aphorism can be added later.</small>
          </div>
        </section>

        <section id="interests" className="section-block">
          <div className="section-heading">
            <p className="overline">Personal Interests</p>
            <h2>Life beyond the classroom.</h2>
          </div>

          <div className="interest-board">
            <div className="floating-card">🎨 Fashion sketching and drawing</div>
            <div className="floating-card">📚 Reading crime novels</div>
            <div className="floating-card">🏋️ Fitness and weight training</div>
            <div className="floating-card">🌏 Exploring different cultures</div>
            <div className="floating-card">🈶 Learning Mandarin</div>
            <div className="floating-card">💻 Technology and programming</div>
          </div>
        </section>

        <section id="future" className="section-block">
          <div className="section-heading">
            <p className="overline">Where I’m Going</p>
            <h2>Building a meaningful future with steady steps.</h2>
          </div>

          <div className="future-card glass-card">
            <p>
              I want to continue developing professionally, gaining practical experience, and contributing to my community in Mozambique. I hope
              to use the knowledge gained through international study and life abroad to create meaningful impact and grow in ways that serve not
              only myself but also the people around me.
            </p>
            <p>
              My future is guided by hope, realism, and responsibility. I am building a path that combines skill, service, and growth—one step at
              a time.
            </p>
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

        <section className="section-block closing-section">
          <div className="closing-card glass-card">
            <p className="overline">Let’s work together</p>
            <h2>Driven by learning, service, and meaningful growth.</h2>
            <div className="closing-email">
              <span>Email</span>
              <a href="mailto:114122108@gmail.com">114122108@gmail.com</a>
            </div>
            <a href="mailto:114122108@gmail.com" className="button primary">Get in touch</a>
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
