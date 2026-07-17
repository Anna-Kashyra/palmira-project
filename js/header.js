// Display textiles, seasons, and purposes in the header catalog menu

const textileMenu = getTextiles(products)
    .map(textile => `
    <li class="dropdown__item">
      <a href="${prefix}html/catalog.html?textile=${textile}">
        ${textile.charAt(0).toUpperCase() + textile.slice(1)}
      </a>
    </li>
  `)
    .join("");

const seasonTitles = {
    summer: "Весняно-літні тканини",
    winter: "Осінньо-зимові тканини"
};

const purposeTitles = {
    blouse: "Для блузок/сорочок",
    dress: "Для суконь",
    suit: "Для костюмів",
    skirt: "Для спідниць",
    pants: "Для брюк",
    coat: "Для пальто"
};

const seasonsMenu = getSeasons(products)
    .map(season => `
    <li class="dropdown__item">
      <a href="${prefix}html/catalog.html?season=${season}">
        ${seasonTitles[season]}
      </a>
    </li>
  `)
    .join("");

const purposesMenu = getPurposes(products)
    .map(purpose => `
    <li class="dropdown__item">
      <a href="${prefix}html/catalog.html?purpose=${purpose}">
        ${purposeTitles[purpose]}
      </a>
    </li>
  `)
    .join("");

// Highlight active page
const currentPage = window.location.pathname.split("/").pop();

function isActive(page) {
    return currentPage === page ? "active" : "";
}

// Header rendering
const headerTemplate = document.createElement("template");

const topMenu = `<div class="header__top">
          <div class="container">
            <div class="header__top-container">
              <nav class="header__top-menu">
                <ul class="menu__list">
                  <li class="menu__item ${isActive("index.html")}">
                    <a href="${prefix}index.html">Головна</a>
                  </li>
                  <li class="menu__item ${isActive("about.html")}">
                    <a href="${prefix}html/about.html">Про нас</a>
                  </li>
                  <li class="menu__item ${isActive("blog.html")}">
                    <a href="${prefix}html/blog.html">Блог</a>
                  </li>
                  <li class="menu__item ${isActive("delivery.html")}">
                    <a href="${prefix}html/delivery.html">Оплата і доставка</a>
                  </li>
                  <li class="menu__item ${isActive("faq.html")}">
                    <a href="${prefix}html/faq.html">Поширені питання</a>
                  </li>
                  <li class="menu__item ${isActive("responses.html")}">
                    <a href="${prefix}html/responses.html">Відгуки</a>
                  </li>
                </ul>
              </nav>

              <nav class="header__top-contacts">
                <ul class="contacts__list">
                  <li class="contacts__item">
                    <a
                      href="https://www.facebook.com/PalmiraTextile/"
                      target="_blank"
                      ><i class="fa-brands fa-facebook"></i
                    ></a>
                  </li>
                  <li class="contacts__item">
                    <a
                      href="https://www.instagram.com/tkani_palmiratextile/"
                      target="_blank"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                  <li class="contacts__item">
                    <a
                      href="https://www.youtube.com/@palmiratextile3853"
                      target="_blank"
                      ><i class="fa-brands fa-youtube"></i
                    ></a>
                  </li>
                  <li class="contacts__item">
                    <a href="https://vm.tiktok.com/ZMenAk5jX/" target="_blank"
                      ><i class="fa-brands fa-tiktok"></i
                    ></a>
                  </li>
                  <li class="contacts__item contacts__btn ${isActive("contacts.html")}">
                    <a href="${prefix}html/contacts.html">Контакти</a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- top-header__container -->
          </div>
          <!-- container -->
        </div>`;

const headerBody = `<div class="header__body">
          <div class="container">
            <div class="header__body-container">
              <div class="header__body-contacts">
                <a href="tel:+380962688839"
                  ><i class="fa-solid fa-phone"></i>+380 96 268 88 39</a
                >
                <a href="#"
                  ><i class="fa-brands fa-telegram"></i>Написати в Телеграм</a
                >
                <a href="#"
                  ><i class="fa-brands fa-viber"></i>Написати у Вайбер</a
                >
              </div>

              <div class="header__body-brand">
                <a href="${prefix}index.html" class="brand__logo">
                  <img src="${prefix}images/logo.svg" alt="Логотип Palmira Textile" />
                  <p class="brand__title">Оптовий постачальник тканин №1</p>
                </a>
              </div>

              <!-- Toolbar -->
              <div class="header__body-toolbar">
                <div class="toolbar__search">
                  <form id="search" name="search" action="#">
                    <button type="submit" class="toolbar__search-button">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                      class="toolbar__search-input"
                      type="search"
                      autocomplete="off"
                      name="search"
                      placeholder="Пошук"
                    />
                  </form>
                </div>

                <nav class="toolbar__account">
                  <ul class="toolbar__list">
                    <li class="toolbar__item">
                      <a href="#"
                        ><i class="fa-solid fa-heart" title="Обране"></i
                      ></a>
                    </li>
                    <li class="toolbar__item ${isActive("cart.html")}">
                      <a href="${prefix}html/cart.html"
                        ><i class="fa-solid fa-cart-shopping" title="Кошик"><span id="cart-amount">0</span></i
                      ></a>
                    </li>
                    <li class="toolbar__item ${isActive("account.html")}">
                      <a href="${prefix}html/account.html"
                        ><i class="fa-solid fa-user"></i
                        ><span class="item__account">Особистий кабінет</span></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <!-- container -->
        </div>`;

const headerCatalog = `
    <div class="header__catalog">
        <div class="container">
            <div class="header__catalog-container">
                <nav class="header__catalog-inner">
                    <div class="common__button dropdown__catalog">
                    <button class="common__btn" type="menu" name="menu__button">
                        Каталог
                    </button>
                    </div>

                    <ul class="header__catalog-menu">
                        <li class="menu__catalog catalog-textiles">
                            Всі товари
                            <ul class="menu__dropdown">
                            <li class="dropdown__item">
                                <a href="${prefix}html/catalog.html"
                                ><strong>Всі тканини</strong></a
                                >
                            </li>
                            ${textileMenu}
                            </ul>
                        </li>
                        <li class="menu__catalog catalog-purposes">
                            Тканини за призначенням
                            <ul class="menu__dropdown second__dropdown">
                            <li class="dropdown__item">
                                <a href="${prefix}html/catalog.html"
                                ><strong>Всі тканини</strong></a
                                >
                            </li>
                            ${seasonsMenu}
                            ${purposesMenu}
                            </ul>
                        </li>
                        <li class="menu__catalog">
                            <a href="${prefix}html/catalog.html?filter=new">Новинки</a>
                        </li>
                        <li class="menu__catalog">
                            <a href="${prefix}html/catalog.html?filter=popular">Хіти продаж</a>
                        </li>
                        <li class="menu__catalog">
                            <a href="${prefix}html/catalog.html?filter=sale">Акції</a>
                        </li>
                        <li class="menu__catalog ${isActive("contacts.html")}">
                            <a href="${prefix}html/contacts.html">Оптовим покупцям</a>
                        </li>
                    </ul>
                </nav>

                <div class="burger__menu">
                    <nav class="header__top-menu">
                        <ul class="menu__list">
                            <li class="menu__item">
                            <a href="index.html">Головна</a>
                            </li>
                            <li class="menu__item">
                            <a href="html/about.html">Про нас</a>
                            </li>
                            <li class="menu__item">
                            <a href="html/blog.html">Блог</a>
                            </li>
                            <li class="menu__item">
                            <a href="html/delivery.html">Оплата і доставка</a>
                            </li>
                            <li class="menu__item">
                            <a href="html/faq.html">Поширені питання</a>
                            </li>
                            <li class="menu__item">
                            <a href="html/responses.html">Відгуки</a>
                            </li>
                            <li class="menu__item active">
                            <a href="html/contacts.html">Контакти</a>
                            </li>
                        </ul>
                    </nav>

                    <button type="button" class="burger__menu-button">
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

headerTemplate.innerHTML = `
    <header class="header">
        ${topMenu}
        ${headerBody}
        ${headerCatalog}        
    </header>
`;

const headerClone = headerTemplate.content.cloneNode(true);

document.body.prepend(headerClone);

// Highlight active catalog menu item based on URL parameters
const currentParams = new URLSearchParams(
    window.location.search
);

const textile = currentParams.get("textile");
const season = currentParams.get("season");
const purpose = currentParams.get("purpose");
const filter = currentParams.get("filter");

if (
    currentPage === "catalog.html" &&
    (!currentParams.toString() || textile)
) {
    document
        .querySelector(".catalog-textiles")
        ?.classList.add("active");
}

if (season || purpose) {
    document
        .querySelector(".catalog-purposes")
        ?.classList.add("active");
}

if (filter) {
    document
        .querySelector(
            `.header__catalog a[href*="filter=${filter}"]`
        )
        ?.closest(".menu__catalog")
        ?.classList.add("active");
}

// Fix for header catalog menu on scroll
const fixedHeader =
  document.querySelector(".header__catalog");

window.addEventListener("scroll", () => {
  const triggerPoint =
    fixedHeader.offsetTop;

  document.body.classList.toggle(
    "fixed",
    window.scrollY > triggerPoint
  );
});

// Header menu toggle for mobile
const catalogButton = document.querySelector(
    '.dropdown__catalog .common__btn'
  );

  const catalogMenu = document.querySelector(
    ".header__catalog-menu"
  );

  const burgerButton = document.querySelector(
    ".burger__menu-button"
  );

  const burgerMenu = document.querySelector(
    ".burger__menu"
  );

  const MOBILE_BREAKPOINT = 992;

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function closeAllMenus() {
    catalogMenu?.classList.remove("active__drop");
    burgerMenu?.classList.remove("active__drop");
  }

  // Catalog
  catalogButton?.addEventListener("click", event => {
    if (!isMobile()) return;

    event.preventDefault();
    event.stopPropagation();

    burgerMenu?.classList.remove("active__drop");

    catalogMenu?.classList.toggle("active__drop");
  });

  // Burger menu
  burgerButton?.addEventListener("click", event => {
    if (!isMobile()) return;

    event.preventDefault();
    event.stopPropagation();

    catalogMenu?.classList.remove("active__drop");

    burgerMenu?.classList.toggle("active__drop");
  });

  // Close menus when clicking outside
  document.addEventListener("click", event => {
    if (!isMobile()) return;

    const insideCatalog =
      event.target.closest(".header__catalog-inner");

    const insideBurger =
      event.target.closest(".burger__menu");

    if (!insideCatalog && !insideBurger) {
      closeAllMenus();
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      closeAllMenus();
    }
  });
