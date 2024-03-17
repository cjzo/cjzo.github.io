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
let orbitRadius = 30; // The initial radius of the orbit
let angle = 0;
let isClicked = false; // Flag to indicate if there is an active click effect
let rotationSpeed = 0.015;

let lastX = 0;
let lastY = 0;
let lastTime = Date.now();

document.addEventListener('pointermove', (event) => {
  const { clientX, clientY } = event;

  // Update blob position
  blob.style.left = clientX + 'px';
  blob.style.top = clientY + 'px';

  if (!isClicked) {
    // Calculate mouse speed
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const dx = clientX - lastX;
    const dy = clientY - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = distance / deltaTime;

    // Update the orbit radius and rotation speed based on mouse speed
    orbitRadius = 30 + speed * 10; // Adjust the multiplier for sensitivity
    rotationSpeed = 0.015 + speed * 0.01; // Adjust the speed of rotation based on mouse speed

    lastX = clientX;
    lastY = clientY;
    lastTime = currentTime;
  }
});

document.addEventListener('click', () => {
  isClicked = true;
  let clickTime = Date.now();
  let clickDuration = 500; // Duration of the entire click effect
  let maxOrbitRadius = 60; // Maximum orbit radius on click
  let maxRotationSpeed = 0.06; // Maximum rotation speed on click

  function updateOnClick() {
    let elapsedTime = Date.now() - clickTime;
    if (elapsedTime < clickDuration) {
      let ratio = elapsedTime / clickDuration;
      orbitRadius = 30 + (maxOrbitRadius - 30) * Math.sin(ratio * Math.PI);
      rotationSpeed = 0.015 + (maxRotationSpeed - 0.015) * Math.sin(ratio * Math.PI);
      requestAnimationFrame(updateOnClick);
    } else {
      orbitRadius = 30; // Reset to the initial orbit radius
      rotationSpeed = 0.015; // Reset to the initial rotation speed
      isClicked = false;
    }
  }

  updateOnClick();
});

function rotateOrbiters() {
  let orbiters = blob.querySelectorAll('.orbiter'); // Get the current list of orbiters
  const angleIncrement = 2 * Math.PI / orbiters.length;

  orbiters.forEach((orbiter, index) => {
    const orbiterAngle = angle + index * angleIncrement;
    const x = Math.cos(orbiterAngle) * orbitRadius;
    const y = Math.sin(orbiterAngle) * orbitRadius;
    orbiter.style.transform = `translate(${x}px, ${y}px)`;
  });

  angle += rotationSpeed;
  requestAnimationFrame(rotateOrbiters);
}

rotateOrbiters();