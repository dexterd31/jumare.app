'use strict';

const products = Object.freeze([
  {
    "name": "Boo Halloween",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Boo.png",
    "desc": "Fantasmas, calabazas y detalles de Halloween sobre tonos rosa y nude."
  },
  {
    "name": "Champagne Plata",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Champagne.png",
    "desc": "Tonos champagne con detalles plateados y líneas delicadas."
  },
  {
    "name": "Nude Mármol",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Marmol.png",
    "desc": "Base nude con acentos de efecto mármol claro."
  },
  {
    "name": "Rosa Nude",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Nude Rosa.png",
    "desc": "Rosa nude de acabado suave y uniforme."
  },
  {
    "name": "Nude Clásico",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Nude.png",
    "desc": "Tono nude cálido para un look sencillo."
  },
  {
    "name": "Verde Botánico",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Set de uñas botánicas Jumaré.png",
    "desc": "Verde con uñas de acento claro y pequeños motivos vegetales."
  },
  {
    "name": "Invierno Turquesa",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Set de uñas invernal con brillo magnético.png",
    "desc": "Turquesa y tonos claros con detalles de invierno."
  },
  {
    "name": "Champagne Elegante",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Set de uñas Jumaré en tonos champagne y plata.png",
    "desc": "Champagne con detalles oscuros y acentos plateados."
  },
  {
    "name": "Nude Destellos",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Set de uñas Jumaré en tonos nude y plata.png",
    "desc": "Tonos nude con uñas de acento de brillo plateado."
  },
  {
    "name": "Café Degradado",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Set de uñas Jumaré en tonos nude.png",
    "desc": "Degradado en tonos café y nude con detalles delicados."
  },
  {
    "name": "Borgoña Floral",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Set de uñas Jumaré floral.png",
    "desc": "Borgoña con uñas de acento de inspiración floral."
  },
  {
    "name": "Rosa Floral",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Set de uñas Jumaré sobre fondo floral.png",
    "desc": "Rosa suave con flores claras como acento."
  },
  {
    "name": "Navidad Rosa",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Set de uñas navideñas Jumaré.png",
    "desc": "Diseño navideño en rosa con personajes y detalles festivos."
  },
  {
    "name": "Francesa Plata",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Set de uñas press-on Jumaré con brillo plata.png",
    "desc": "Base nude con puntas de brillo plateado."
  },
  {
    "name": "Café Dorado",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Set de uñas press-on Jumaré.png",
    "desc": "Tonos café y bronce con detalles de brillo dorado."
  },
  {
    "name": "Verde & Dorado",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Set de uñas verdes y doradas Jumaré.png",
    "desc": "Verde profundo con detalles dorados sobre bases claras."
  },
  {
    "name": "Borgoña & Nude",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Uñas Borgoña con Detalles Dorados.png",
    "desc": "Borgoña y nude con líneas de acento."
  },
  {
    "name": "Aurora Iridiscente",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Uñas cromadas iridiscentes Jumaré.png",
    "desc": "Acabado iridiscente con reflejos multicolor."
  },
  {
    "name": "Halloween Multicolor",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas de Halloween con calaveras y fantasmas.png",
    "desc": "Calaveras, fantasmas y motivos de Halloween sobre bases oscuras."
  },
  {
    "name": "Invierno Azul Escarcha",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas de Invierno Azul y Escarcha.png",
    "desc": "Azul oscuro con copos y detalles de escarcha."
  },
  {
    "name": "Noche de Invierno",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas de Invierno Jumaré.png",
    "desc": "Azul profundo con detalles blancos de invierno."
  },
  {
    "name": "Playa Perlada",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Uñas de playa con brillo perlado.png",
    "desc": "Azules y tonos claros con motivos marinos y reflejos perlados."
  },
  {
    "name": "Floral Dorado",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Uñas Jumaré con Brillo Dorado Floral.png",
    "desc": "Nude con destellos dorados y detalles florales."
  },
  {
    "name": "Rosa Brillo Floral",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Uñas Jumaré con brillo y flores encleaf.png",
    "desc": "Degradado rosa con brillo y acentos florales."
  },
  {
    "name": "Corazones & Moños",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas Jumaré con corazones y moños.png",
    "desc": "Base nude rosada con corazones y pequeños moños."
  },
  {
    "name": "Rosa Degradado Floral",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas Jumaré con flores y degradado.png",
    "desc": "Degradado rosado con detalles florales delicados."
  },
  {
    "name": "Nude & Oro Rosa",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Uñas Jumaré en tonos nude y oro rosa.png",
    "desc": "Base nude con detalles metálicos en tonos dorados."
  },
  {
    "name": "Nude Lunares",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas Jumaré nude con efecto cat-eye.png",
    "desc": "Base nude con lunares negros y pequeños acentos dorados."
  },
  {
    "name": "Constelación Dorada",
    "cat": "brillo",
    "tag": "Brillo",
    "img": "assets/images/Uñas Jumaré_ constelación dorada.png",
    "desc": "Tonos rosa y malva con detalles dorados de inspiración celestial."
  },
  {
    "name": "Magenta Cat-Eye",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Uñas Magenta Cat-Eye Jumaré.png",
    "desc": "Magenta intenso con reflejos de efecto ojo de gato."
  },
  {
    "name": "Botánica Mate",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Uñas mate Jumaré en tonos botánicos.png",
    "desc": "Verde suave y nude con motivos vegetales y acabado mate."
  },
  {
    "name": "Navidad Verde & Blanca",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas navideñas “Jumaré” con brillo festivo.png",
    "desc": "Verde, blanco y rojo con motivos navideños."
  },
  {
    "name": "Luces de Navidad",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas navideñas con luces de colores y flores.png",
    "desc": "Bases claras con guirnaldas de luces de colores."
  },
  {
    "name": "Navidad Muñecos de Nieve",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas navideñas con muñecos de nieve.png",
    "desc": "Rojo con muñecos de nieve y detalles blancos."
  },
  {
    "name": "Navidad Verde Festiva",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas navideñas Jumaré con brillo festivo.png",
    "desc": "Verde con personajes y detalles navideños en rojo y blanco."
  },
  {
    "name": "Navidad Mix",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas navideñas Jumaré en plano cenital.png",
    "desc": "Combinación de rojo, azul oscuro y motivos navideños."
  },
  {
    "name": "Navidad Roja",
    "cat": "temporada",
    "tag": "Temporada",
    "img": "assets/images/Uñas navideñas rojas con copos de nieve.png",
    "desc": "Rojo con copos de nieve blancos."
  },
  {
    "name": "Nude Estrellas",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas nude brillantes con detalles botánicos.png",
    "desc": "Nude cálido con pequeñas estrellas y detalles dorados."
  },
  {
    "name": "Ombré Rosa Suave",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas nude ombré con diseño botánico.png",
    "desc": "Degradado suave entre rosa nude y puntas claras."
  },
  {
    "name": "Ombré Café",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas nude ombré sobre tarjeta botánica.png",
    "desc": "Degradado en tonos café y nude."
  },
  {
    "name": "Ombré Nude Cálido",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas Ombre Nude con Detalles Botánicos.png",
    "desc": "Degradado nude cálido con puntas claras."
  },
  {
    "name": "Ombré Rosado",
    "cat": "natural",
    "tag": "Natural",
    "img": "assets/images/Uñas ombré rosadas Jumaré.png",
    "desc": "Degradado rosado de acabado suave."
  },
  {
    "name": "Romance Rosa & Rojo",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Uñas románticas en rosa y rojo.png",
    "desc": "Rosa y rojo con corazones y detalles románticos."
  },
  {
    "name": "Smile Multicolor",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Uñas Smile Jumaré.png",
    "desc": "Colores vivos, caritas y motivos divertidos."
  },
  {
    "name": "Violeta Elegante",
    "cat": "color",
    "tag": "Color",
    "img": "assets/images/Violet.png",
    "desc": "Tono violeta de acabado uniforme."
  }
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
  modalWhatsapp.href = `https://wa.me/573227308966?text=${encodeURIComponent(`Hola Jumaré, quiero consultar disponibilidad del diseño ${product.name}`)}`;
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
