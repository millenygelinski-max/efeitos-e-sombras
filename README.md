# 🌟 Feed Interativo de Postagens — Desafio CSS & Dark Mode

Este projeto foi desenvolvido como parte de um desafio prático de Front-End para criar interfaces dinâmicas, modernas e responsivas utilizando **HTML5**, **CSS3** e **JavaScript vanilla**.

![Preview do Projeto](https://via.placeholder.com/800x400?text=Preview+do+Feed+Interativo) <!-- Substitua pela imagem real se desejar -->

---

## 🎯 Objetivos do Desafio

- [x] Criar uma regra utilizando o seletor `:hover` para as tags `<article>`.
- [x] Aplicar o efeito de escala leve (`transform: scale(1.02)`) ao passar o mouse.
- [x] Intensificar o efeito de sombra (`box-shadow`) durante o `:hover`.
- [x] Criar um **Modo Escuro (Dark Mode)** adaptável, utilizando sombras brilhantes em tons azuis/claros para manter o efeito de profundidade visual em fundos escuros.
- [x] Garantir uma transição suave entre os estados via CSS.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica utilizando `<header>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- **CSS3**:
  - CSS Grid para layout responsivo.
  - Variáveis CSS (`:root` e `body.dark`) para gerenciamento de temas.
  - Propriedades de animação: `transition`, `transform` e `box-shadow`.
  - Media Query `@media (prefers-color-scheme: dark)` para integração com as configurações do sistema operacional.
- **JavaScript**:
  - Alternância de classes no DOM.
  - Persistência de tema com `localStorage`.

---

## 📂 Estrutura de Arquivos

```text
├── index.html   # Estrutura e conteúdo da página
├── style.css    # Estilização, regras de hover e modo escuro
├── script.js    # Lógica de alternância e persistência do tema
└── README.md    # Documentação do projeto
