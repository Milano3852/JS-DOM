// Появление текста при нажатии клавиши
const hiddenText = document.getElementById('hidden-text');

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'h') {
    hiddenText.style.opacity = hiddenText.style.opacity === '1' ? '0' : '1';
  }
});

// Анимация на Canvas
const canvas = document.getElementById('animated-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Создание частиц
class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function createParticle(x, y) {
  const size = Math.random() * 5 + 1;
  const color = 'white';
  const speedX = (Math.random() - 0.5) * 3;
  const speedY = (Math.random() - 0.5) * 3;
  particles.push(new Particle(x, y, size, color, speedX, speedY));
}

canvas.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 5; i++) {
    createParticle(e.clientX, e.clientY);
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
