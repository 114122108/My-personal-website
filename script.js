const rootElement = document.documentElement;
const themeToggleButton = document.getElementById('theme-toggle-button');
const navToggleButton = document.getElementById('nav-toggle');
const navPanel = document.getElementById('nav-panel');
const navLinks = document.querySelectorAll('.nav-links a');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  rootElement.classList.toggle('light', !isDark);
  rootElement.classList.toggle('dark', isDark);
  localStorage.setItem('theme', theme);

  if (themeToggleButton) {
    const icon = themeToggleButton.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
  }
}

const savedTheme = localStorage.getItem('theme');
const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(preferredTheme);

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const nextTheme = rootElement.classList.contains('light') ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

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

const currentPath = window.location.hash || '#top';
navLinks.forEach((link) => {
  const linkTarget = link.getAttribute('href');
  if (linkTarget === currentPath || (currentPath === '#top' && linkTarget === '#education')) {
    link.classList.add('active');
  }
});

window.addEventListener('hashchange', () => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === window.location.hash;
    link.classList.toggle('active', isActive);
  });
});

