"use strict";

// Hero slider on Home page

const slides = document.querySelectorAll(".hero__slider");

if (slides.length) {
  let currentSlide = 0;

  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  function renderSlide(index) {
    slides.forEach(slide => {
      slide.style.display = "none";
    });

    slides[index].style.display = "block";
  }

  renderSlide(currentSlide);

  nextBtn?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
  });

  prevBtn?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
  }, 5000);
}

// Products List on Home page

function createProductCard(product) {
  const badge =
    product.badge?.title
      ? `<div class="badge badge__${product.badge.bg}">
          ${product.badge.title}
        </div>`
      : "";

  return `
    <article class="product">
      <div class="product__img">
        ${badge}

        <a href="#">
          <img
            src="${product.cover}"
            alt="${product.name}"
          />
        </a>
        <div class="product__icons">
          <a href="" class="fas fa-heart"></a>
          <a href="" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="product__content">
        <p class="product__article">
          ${product.description}
        </p>

        <h3 class="product__name">
          <a href="#">
            ${product.name}
          </a>
        </h3>

        <div class="product__buy">
          <div class="product__price">
            <div class="product__price-retail">${product.price} грн/м</div>
            <div class="product__price-wholesale">${product.priceWholesale} грн/м</div>
            <span>від 10 м. пог.</span>
          </div>

          <div class="common__button">
            <a href="#!" class="common__btn add-to-cart" data-id="${product.id}">У кошик</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

const productContainer =
  document.querySelector(".product__container");

if (productContainer) {
  productContainer.innerHTML = products
    .map(product => createProductCard(product))
    .join("");
}

// Add to Cart functionality

document.addEventListener("click", event => {
  const btn = event.target.closest(".add-to-cart");

  if (!btn) return;

  event.preventDefault();

  const productId = Number(btn.dataset.id);

  addToCart(productId);
});

// Cart counter in header
function updateCartCounter() {
  const counter = document.querySelector("#cart-amount");

  if (!counter) return;

  const cart = getCart();

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  counter.textContent = totalQuantity;
}
updateCartCounter();

// Categories filter on Home page

function renderProducts(productsToRender) {
  if (!productContainer) return;

  productContainer.innerHTML = productsToRender
    .map(product => createProductCard(product))
    .join("");
}
renderProducts(products);

const newBtn = document.querySelector(".title__new");
const hitsBtn = document.querySelector(".title__hits");
const saleBtn = document.querySelector(".title__sale");

if (newBtn) {
  newBtn.addEventListener("click", () => {
    event.preventDefault();
    renderProducts(
      products.filter(
        product => product.badge.title === "New"
      )
    );
  });
}

if (saleBtn) {
  saleBtn.addEventListener("click", () => {
    event.preventDefault();
    renderProducts(
      products.filter(
        product => product.badge.title === "Sale"
      )
    );
  });
}

if (hitsBtn) {
  hitsBtn.addEventListener("click", () => {
    event.preventDefault();
    renderProducts(
      products.filter(
        product => !product.badge.title
      )
    );
  });
}

// Catalog filtres
const button = document.querySelector('.common__btn[name="choice__button"]');
const filtersBlock = document.querySelector(".filters");

button?.addEventListener("click", event => {
  event.preventDefault();

  filtersBlock?.classList.toggle("open");
});

const filterForm = document.querySelector("#filter");
const sortSelect = document.querySelector(".sort__select");

function applyFiltersAndSort() {
  let result = [...products];

  // Colors
  const selectedColors = [
    ...document.querySelectorAll(
      'input[name="color"]:checked'
    )
  ].map(item => item.value);

  // Purposes and Seasons
  const selectedTypes = [
    ...document.querySelectorAll(
      'input[name="textil-type"]:checked'
    )
  ].map(item => item.value);

  // Filter products based on selected colors, purposes, and seasons
  result = result.filter(product => {

    const colorMatch =
      selectedColors.length === 0 ||
      selectedColors.some(color =>
        product.colors.includes(color)
      );

    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.some(type =>
        product.seasons.includes(type) ||
        product.purposes.includes(type)
      );

    return colorMatch && typeMatch;
  });

  // Sort
  switch (sortSelect.value) {
    case "low-high":
      result.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      result.sort((a, b) => b.price - a.price);
      break;

    default:
      result.sort((a, b) => a.id - b.id);
  }

  renderProducts(result);
}

filterForm?.addEventListener("submit", event => {
  event.preventDefault();

  applyFiltersAndSort();
  filtersBlock?.classList.remove("open");
});

sortSelect?.addEventListener("change", applyFiltersAndSort);

// Accordion on FAQ page

const accordionItems = document.querySelectorAll(".accordion__item");

if (accordionItems.length) {
  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion__item-inner");
    const content = item.querySelector(".accordion__inner");

    header.addEventListener("click", () => {
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".accordion__inner")
            .classList.remove("active");
        }
      });

      content.classList.toggle("active");
    });
  });
}

// Tabs on Contact page

document.querySelectorAll(".tabs__container").forEach(container => {
  const tabs = container.querySelectorAll(".tabs li");
  const panels = container.querySelectorAll(".tabs__panel");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
      event.preventDefault();

      tabs.forEach(item => item.classList.remove("is__active"));
      panels.forEach(panel => panel.classList.remove("is__active"));

      tab.classList.add("is__active");
      panels[index].classList.add("is__active");
    });
  });
});

// Footer

const template = document.createElement("template");

template.innerHTML = `
  <footer class="footer">
    <div class="container">
      <section class="footer__top">
        <nav class="footer__menu">
          <ul class="footer__menu-list">
          <li class="footer__menu-item">
              <a href="${prefix}inner.html">Головна</a>
            </li>
            <li class="footer__menu-item">
              <a href="${prefix}html/about.html">Про нас</a>
            </li>
            <li class="footer__menu-item">
              <a href="${prefix}html/blog.html">Блог</a>
            </li>
            <li class="footer__menu-item">
              <a href="${prefix}html/delivery.html">Оплата і доставка</a>
            </li>
            <li class="footer__menu-item">
              <a href="${prefix}html/faq.html">Поширені питання</a>
            </li>
            <li class="footer__menu-item">
              <a href="${prefix}html/responses.html">Відгуки</a>
            </li>
          </ul>
        </nav>

        <nav class="footer__catalog">
          <ul class="footer__catalog-list">
            <li class="footer__catalog-item">
              <a href="${prefix}html/catalog.html">Всі товари</a>
            </li>
            <li class="footer__catalog-item">
              <a href="${prefix}html/catalog.html">Тканини за призначенням</a>
            </li>
            <li class="footer__catalog-item">
              <a href="${prefix}html/catalog.html">Новинки</a>
            </li>
            <li class="footer__catalog-item">
              <a href="${prefix}html/catalog.html">Хіти продаж</a>
            </li>
            <li class="footer__catalog-item">
              <a href="${prefix}html/catalog.html">Акції</a>
            </li>
            <li class="footer__catalog-item">
              <a href="${prefix}html/catalog.html">Оптовим покупцям</a>
            </li>
          </ul>
        </nav>

        <div class="footer__contacts">
          <ul class="footer__contacts-list">
            <li class="footer__contacts-item">
              <a href="${prefix}html/contacts.html">Зв'яжіться з нами</a>
            </li>
            <li class="footer__contacts-item">
              <a href="tel:+380962688839"
                ><i class="fa-solid fa-phone"></i>+380 96 268 88 39</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="#"
                ><i class="fa-brands fa-telegram"></i>Написати в Телеграм</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="#"
                ><i class="fa-brands fa-viber"></i>Написати у Вайбер</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="${prefix}html/account.html"
                ><i class="fa-solid fa-user"></i>Особистий кабінет</a
              >
            </li>
          </ul>
        </div>

        <div class="footer__address">
          <div class="address__list">
            <p class="address__list-title">
              <a href="${prefix}html/contacts.html">Наша адреса:</a>
            </p>
            <div class="address__list-item">
              м. Одеса, <br />
              ринок «7 км», маг. №4438
            </div>
            <div class="address__list-item">
              м. Хмельницький, <br />
              вул. Геологів 11
            </div>
          </div>

          <div class="social__list">
            <p class="social__list-title">Ми у соцмережах</p>
            <a
              href="https://www.facebook.com/PalmiraTextile/"
              target="_blank"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/tkani_palmiratextile/"
              target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              href="https://www.youtube.com/@palmiratextile3853"
              target="_blank"
              ><i class="fa-brands fa-youtube"></i
            ></a>
            <a href="https://vm.tiktok.com/ZMenAk5jX/" target="_blank"
              ><i class="fa-brands fa-tiktok"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
    <section class="footer__bottom">
      <a href="#"
        ><span class="footer__bottom-terms">Terms &amp; Conditions</span></a
      >
      <a href="#"
        ><span class="footer__bottom-privacy">Privacy Policy</span></a
      >
      <span class="footer__bottom-copy"
        >&copy; 2024 All rights reserve</span
      >
    </section>
  </footer>
`;

let clone = template.content.cloneNode(true);
document.body.appendChild(clone);