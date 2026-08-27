document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('article.card');
  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  // Alternar Modo Escuro / Claro
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  });

  // Filtro por Categoria
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Expandir / Recolher Texto do Card
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('article.card');
      card.classList.toggle('expanded');
      btn.textContent = card.classList.contains('expanded') ? 'Recolher ←' : 'Ler mais →';
    });
  });
});
