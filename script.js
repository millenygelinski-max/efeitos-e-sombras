document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const iconSpan = themeToggleBtn.querySelector('.icon');

  // Verifica se o usuário já possui uma preferência salva
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark');
    if (iconSpan) iconSpan.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    if (iconSpan) iconSpan.textContent = '🌙';
  }

  // Alterna o tema e salva a escolha no LocalStorage
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    const isDark = document.body.classList.contains('dark');
    
    // Atualiza o ícone do botão
    if (iconSpan) {
      iconSpan.textContent = isDark ? '☀️' : '🌙';
    }

    // Salva a preferência
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
