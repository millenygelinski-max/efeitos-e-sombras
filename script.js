const themeToggleBtn = document.getElementById('theme-toggle');

// Alterna a classe dark-mode no body ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
