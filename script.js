// ===== Dados do portfólio =====
// title, tag, desc, shots (prints do projeto)
const PROJECTS = [
  {
    title: "Helper.log",
    tag: "Sistema web",
    desc: "Painel para registrar e acompanhar ocorrências de entregas (NF, transportadora, status), com login e importação/exportação de planilhas XLS.",
    shots: [
      { label: "Painel",   src: "images/helperlog-painel.png",   alt: "Painel de ocorrências do Helper.log",   fit: "cover",   pos: "left top" },
      { label: "Login",    src: "images/helperlog-login.png",    alt: "Tela de login do Helper.log",           fit: "cover",   pos: "center" },
      { label: "Planilha", src: "images/helperlog-planilha.png", alt: "Planilha exportada pelo Helper.log",    fit: "contain", pos: "center" }
    ]
  }
];

const grid = document.getElementById('workGrid');
PROJECTS.forEach(p => {
  const first = p.shots[0];
  const card = document.createElement('article');
  card.className = 'work-card';
  card.innerHTML = `
    <div class="work-media">
      <div class="browser-bar">
        <span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span>
        <span class="b-url">${p.title}</span>
      </div>
      <div class="work-shot">
        <img src="${first.src}" alt="${first.alt}" loading="lazy" style="object-fit:${first.fit};object-position:${first.pos}">
      </div>
      <div class="work-tabs">
        ${p.shots.map((s, i) => `<button type="button" class="work-tab${i === 0 ? ' active' : ''}" data-i="${i}">${s.label}</button>`).join('')}
      </div>
    </div>
    <div class="work-info">
      <span class="work-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `;
  const img = card.querySelector('.work-shot img');
  const tabs = card.querySelectorAll('.work-tab');
  tabs.forEach(btn => btn.addEventListener('click', () => {
    const s = p.shots[btn.dataset.i];
    img.src = s.src; img.alt = s.alt;
    img.style.objectFit = s.fit; img.style.objectPosition = s.pos;
    tabs.forEach(b => b.classList.toggle('active', b === btn));
  }));
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
