'use strict';

const products = Object.freeze([
  {name:'Botánica Nude',cat:'natural',tag:'Esencial',img:'assets/images/Uñas nude ombré con diseño botánico.png',desc:'Un degradado nude suave con inspiración botánica.'},
  {name:'Champagne Plata',cat:'brillo',tag:'Glam',img:'assets/images/Set de uñas Jumaré en tonos champagne y plata.png',desc:'Brillo refinado en tonos champagne y plata.'},
  {name:'Borgoña Dorado',cat:'color',tag:'Elegante',img:'assets/images/Uñas Borgoña con Detalles Dorados.png',desc:'Borgoña profundo con pequeños acentos dorados.'},
  {name:'Aurora Iridiscente',cat:'brillo',tag:'Nuevo',img:'assets/images/Uñas cromadas iridiscentes Jumaré.png',desc:'Efecto cromado que cambia con cada movimiento.'},
  {name:'Rosa Cat-Eye',cat:'color',tag:'Magnético',img:'assets/images/Uñas Magenta Cat-Eye Jumaré.png',desc:'Magenta luminoso con efecto cat-eye.'},
  {name:'Nude & Oro Rosa',cat:'natural',tag:'Romántico',img:'assets/images/Uñas Jumaré en tonos nude y oro rosa.png',desc:'Nude cálido con reflejos delicados de oro rosa.'},
  {name:'Invierno Azul',cat:'temporada',tag:'Temporada',img:'assets/images/Uñas de Invierno Azul y Escarcha.png',desc:'Azul de invierno con un acabado de escarcha.'},
  {name:'Botánica Mate',cat:'color',tag:'Editorial',img:'assets/images/Uñas mate Jumaré en tonos botánicos.png',desc:'Tonos botánicos con un acabado mate moderno.'},
  {name:'Constelación Dorada',cat:'brillo',tag:'Celestial',img:'assets/images/Uñas Jumaré_ constelación dorada.png',desc:'Detalles dorados inspirados en un cielo estrellado.'},
  {name:'Floral Degradado',cat:'natural',tag:'Delicado',img:'assets/images/Uñas Jumaré con flores y degradado.png',desc:'Flores sutiles sobre una base degradada.'},
  {name:'Navidad Roja',cat:'temporada',tag:'Festivo',img:'assets/images/Uñas navideñas rojas con copos de nieve.png',desc:'Rojo clásico y copos de nieve para celebrar.'},
  {name:'Playa Perlado',cat:'brillo',tag:'Perlado',img:'assets/images/Uñas de playa con brillo perlado.png',desc:'Reflejos perlados inspirados en arena y mar.'}
]);

const make = (tag, options = {}) => {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;
  return element;
};

const catalog = document.querySelector('#catalog');
const modal = document.querySelector('#modal');
const modalImage = document.querySelector('#modalImage');
const modalTitle = document.querySelector('#modalTitle');
const modalCategory = document.querySelector('#modalCategory');
const modalDescription = document.querySelector('#modalDescription');
const modalWhatsapp = document.querySelector('#modalWhatsapp');

function openProduct(index) {
  const product = products[index];
  if (!product) return;
  modalImage.src = product.img;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.tag;
  modalDescription.textContent = product.desc;
  modalWhatsapp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Hola Jumaré, quiero consultar disponibilidad del diseño ${product.name}`)}`;
  modal.classList.add('open');
  document.body.classList.add('menu-open');
  document.querySelector('#closeModal').focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('menu-open');
}

products.forEach((product, index) => {
  const article = make('article', {className:'product'});
  article.dataset.category = product.cat;
  const media = make('div', {className:'product-media'});
  media.tabIndex = 0;
  media.setAttribute('role', 'button');
  media.setAttribute('aria-label', `Ver ${product.name}`);
  const image = make('img');
  image.src = product.img;
  image.alt = `${product.name} de Jumaré`;
  image.loading = 'lazy';
  const tag = make('span', {className:'tag', text:product.tag});
  const quick = make('button', {className:'quick', text:'Vista rápida'});
  quick.type = 'button';
  const title = make('h3', {text:product.name});
  const meta = make('div', {className:'product-meta'});
  meta.append(make('span', {text:'Press-on reutilizable'}), make('span', {text:'♡'}));
  media.append(image, tag, quick);
  article.append(media, title, meta);
  media.addEventListener('click', () => openProduct(index));
  media.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProduct(index);
    }
  });
  catalog.append(article);
});

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.product').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
  });
}));

document.querySelector('#closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

const menuButton = document.querySelector('#menuBtn');
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

document.querySelector('#year').textContent = String(new Date().getFullYear());
