// script.js
document.addEventListener('DOMContentLoaded', function () {
    const starfield = document.getElementById('starfield');
    const stars = 100; // Number of stars

    for (let i = 0; i < stars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        let xy = Math.random() * 100;
        let duration = Math.random() * (1.5 - 0.5) + 0.5;
        let delay = Math.random() * 0.5;

        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `-${delay}s`;

        starfield.appendChild(star);
    }
});
