// ===== Dados do portfólio =====
// Troque pelos seus projetos reais: title, tag, desc, url (aparece na barra do navegador)
const PROJECTS = [
  {
    title: "Padaria Trigo Dourado",
    tag: "Site institucional",
    desc: "Página para padaria de bairro com cardápio, horários e localização.",
    url: "trigodourado.com.br"
  },
  {
    title: "Camila Reis — Beauty",
    tag: "Link na bio",
    desc: "Mini-site com todos os links da influenciadora e portfólio de trabalhos.",
    url: "camilareis.link"
  },
  {
    title: "Estúdio Vértice",
    tag: "Landing page",
    desc: "Página de captação de leads para estúdio de tatuagem.",
    url: "estudiovertice.com.br"
  },
  {
    title: "João Mendes Fitness",
    tag: "Site institucional",
    desc: "Site para personal trainer com planos, depoimentos e agendamento.",
    url: "joaomendes.fit"
  }
];

const grid = document.getElementById('workGrid');
PROJECTS.forEach(p => {
  const card = document.createElement('article');
  card.className = 'work-card';
  card.innerHTML = `
    <div class="browser-bar">
      <span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span>
      <span class="b-url">${p.url}</span>
    </div>
    <div class="work-thumb">${p.title.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
    <div class="work-info">
      <span class="work-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `;
  grid.appendChild(card);
});

// ===== Menu mobile =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== Ano no rodapé =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll spy: destaca o link/ponto da seção visível =====
const sections = document.querySelectorAll('main section, main#top');
const topLinks = document.querySelectorAll('.nav-links a[data-section]');
const dotLinks = document.querySelectorAll('.dot-nav a[data-section]');

const setActive = (id) => {
  topLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
  dotLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id || 'top');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));
