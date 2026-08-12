const themeToggleButton = document.getElementById('theme-toggle-button');
const themeIcon = themeToggleButton?.querySelector('.material-symbols-outlined');
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

function applyTheme(theme) {
    if (theme === 'dark') {
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.textContent = 'light_mode';
    } else {
        rootElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.textContent = 'dark_mode';
    }
}

if (themeToggleButton) {
    applyTheme(initialTheme);
    themeToggleButton.addEventListener('click', () => {
        const nextTheme = rootElement.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(nextTheme);
    });
}
