document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.querySelector('.close-btn');

  // Відкрити мобільне меню
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.showModal(); // Використовуємо showModal() для відкриття
  });

  // Закрити мобільне меню
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.close(); // Закриваємо діалог
  });
});
