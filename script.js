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

const blob = document.getElementById('blob');
const orbiters = document.querySelectorAll('.orbiter');
const orbitRadius = 30; // The radius of the orbit
let angle = 0;

document.addEventListener('pointermove', (event) => {
  const { clientX, clientY } = event;
  blob.style.left = clientX + 'px';
  blob.style.top = clientY + 'px';
});

function rotateOrbiters() {
  const angleIncrement = 2 * Math.PI / orbiters.length;
  orbiters.forEach((orbiter, index) => {
    const orbiterAngle = angle + index * angleIncrement;
    const x = Math.cos(orbiterAngle) * orbitRadius;
    const y = Math.sin(orbiterAngle) * orbitRadius;
    orbiter.style.transform = `translate(${x}px, ${y}px)`;
  });

  angle += 0.015; // Adjust the speed of rotation
  requestAnimationFrame(rotateOrbiters);
}

rotateOrbiters();
