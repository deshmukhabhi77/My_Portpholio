// Typing Animation
var typed = new Typed('.typing', {
    strings: [
        'Python Developer',
        'Data Analyst',
        'Data Scientist',
        'Machine Learning Engineer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});

// Preloader hide on full load
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    preloader.classList.add('hide');
    // Remove from layout after fade animation
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 400);
});
