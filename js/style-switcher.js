const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector('.style-switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

styleSwitcherToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        styleSwitcherToggle.click();
    }
});

window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
}, { passive: true });

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
    try {
        localStorage.setItem('theme-color', color);
    } catch {}
}

const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = dayNight.querySelector('i');
    icon.classList.remove('ri-sun-fill', 'ri-moon-clear-fill');
    icon.classList.add(
        document.body.classList.contains('dark') ? 'ri-sun-fill' : 'ri-moon-clear-fill'
    );
    try {
        localStorage.setItem(
            'theme-mode',
            document.body.classList.contains('dark') ? 'dark' : 'light'
        );
    } catch {}
});

dayNight.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dayNight.click();
    }
});

window.addEventListener('load', () => {
    try {
        const savedMode = localStorage.getItem('theme-mode');
        if (savedMode === 'dark') {
            document.body.classList.add('dark');
        }
        const savedColor = localStorage.getItem('theme-color');
        if (savedColor) {
            setActiveStyle(savedColor);
        }
    } catch {}

    const icon = dayNight.querySelector('i');
    icon.classList.remove('ri-sun-fill', 'ri-moon-clear-fill');
    icon.classList.add(
        document.body.classList.contains('dark') ? 'ri-sun-fill' : 'ri-moon-clear-fill'
    );
});

const colors = document.querySelector('.colors');

colors.addEventListener('click', (e) => {
    const el = e.target.closest('button, span');
    if (!el) return;
    const cls = Array.from(el.classList).find((c) => c.startsWith('color-'));
    if (cls) setActiveStyle(cls);
});

colors.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target.closest('button, span');
    if (!el) return;
    e.preventDefault();
    const cls = Array.from(el.classList).find((c) => c.startsWith('color-'));
    if (cls) setActiveStyle(cls);
});
