// Seleciona o botão de alternância de tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Alterna a classe 'dark' no body ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
