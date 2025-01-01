// Анимация курсора
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.transform = 'scale(1)';
});

document.addEventListener('mousedown', () => {
  cursor.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'scale(1)';
});


// Анимация текста при нажатии клавиши
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    alert('Вы нажали Enter! Добро пожаловать!');
  }
});

const sections = document.querySelectorAll('section');

// пЛАВНАЯ АНИМАЦИЯ
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});
