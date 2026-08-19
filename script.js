const navToggleButton = document.getElementById('nav-toggle');
const navPanel = document.getElementById('nav-panel');
const navLinks = document.querySelectorAll('.nav-links a');
const timelineItems = document.querySelectorAll('.timeline-item');
const contactForm = document.getElementById('contact-form');
const themeToggle = document.getElementById('theme-toggle');

const applyTheme = (theme) => {
  const isLight = theme === 'light';
  document.documentElement.classList.toggle('light', isLight);
  document.documentElement.classList.toggle('dark', !isLight);

  if (themeToggle) {
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.querySelector('span').textContent = isLight ? '◐' : '☼';
  }
};

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  localStorage.setItem('theme', nextTheme);
  applyTheme(nextTheme);
});

if (navToggleButton && navPanel) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navPanel.classList.toggle('is-open');
    navToggleButton.classList.toggle('is-open', isOpen);
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 820) {
      navPanel?.classList.remove('is-open');
      navToggleButton?.classList.remove('is-open');
      navToggleButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

const setActiveLink = () => {
  const hash = window.location.hash || '#top';
  navLinks.forEach((link) => {
    const match = link.getAttribute('href') === hash;
    link.classList.toggle('active', match);
  });
};

setActiveLink();
window.addEventListener('hashchange', setActiveLink);

timelineItems.forEach((item) => {
  const button = item.querySelector('.timeline-header');
  if (!button) return;

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    timelineItems.forEach((timelineItem) => {
      timelineItem.classList.remove('is-open');
    });

    if (!isOpen) {
      item.classList.add('is-open');
    }
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:114122108@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

const particleCount = Math.min(90, Math.max(45, Math.floor((window.innerWidth * window.innerHeight) / 18)));

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

  particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 2.4 + 1,
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7,
    alpha: Math.random() * 0.6 + 0.2
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

    const dx = pointer.x - particle.x;
    const dy = pointer.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (pointer.active && distance < 160) {
      const angle = Math.atan2(dy, dx);
      const force = (160 - distance) / 160;
      particle.x -= Math.cos(angle) * force * 1.5;
      particle.y -= Math.sin(angle) * force * 1.5;
    }

    const glow = pointer.active ? 1.5 : 1;
    ctx.beginPath();
    ctx.fillStyle = `rgba(127, 229, 255, ${particle.alpha})`;
    ctx.arc(particle.x, particle.y, particle.r * glow, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

window.addEventListener('pointermove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
});

window.addEventListener('pointerleave', () => {
  pointer.active = false;
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawParticles();

