const form = document.getElementById('contact-form');

// Анимация полей ввода при фокусе
const inputs = form.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.style.backgroundColor = '#fffae6';
  });
  input.addEventListener('blur', () => {
    input.style.backgroundColor = '';
  });
});

// Обработка отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Форма успешно отправлена!');
});
