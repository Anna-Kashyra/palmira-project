const headerTemplate = document.createElement("template");

const textileMenu = getTextiles(products)
  .map(textile => `
    <li class="dropdown__item">
      <a href="${prefix}html/catalog.html?textile=${textile}">
        ${textile.charAt(0).toUpperCase() + textile.slice(1)}
      </a>
    </li>
  `)
  .join("");

const topMenu = `<div class="header__top">
          <div class="container">
            <div class="header__top-container">
              <nav class="header__top-menu">
                <ul class="menu__list">
                  <li class="menu__item active">
                    <a href="${prefix}index.html">Головна</a>
                  </li>
                  <li class="menu__item">
                    <a href="${prefix}html/about.html">Про нас</a>
                  </li>
                  <li class="menu__item">
                    <a href="${prefix}html/blog.html">Блог</a>
                  </li>
                  <li class="menu__item">
                    <a href="${prefix}html/delivery.html">Оплата і доставка</a>
                  </li>
                  <li class="menu__item">
                    <a href="${prefix}html/faq.html">Поширені питання</a>
                  </li>
                  <li class="menu__item">
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
                  <li class="contacts__item contacts__btn">
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
                    <li class="toolbar__item">
                      <a href="${prefix}html/cart.html"
                        ><i class="fa-solid fa-cart-shopping" title="Кошик"><span id="cart-amount">0</span></i
                      ></a>
                    </li>
                    <li class="toolbar__item">
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

const headerCatalog = `<div class="header__catalog">
          <div class="container">
            <nav class="header__catalog-container">
              <div class="header__catalog-inner">
                <div class="common__button dropdown__catalog">
                  <button class="common__btn" type="menu" name="menu__button">
                    Каталог
                  </button>
                </div>

                <ul class="header__catalog-menu">
                  <li class="menu__catalog">
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
                  <li class="menu__catalog">
                    Тканини за призначенням
                    <ul class="menu__dropdown second__dropdown">
                      <li class="dropdown__item">
                        <a href="${prefix}html/catalog.html"
                          ><strong>Всі тканини</strong></a
                        >
                      </li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Весняно-літні тканини</a>
                      </li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Осінньо-зимові тканини</a>
                      </li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для блузок/сорочок</a>
                      </li>
                      <li class="dropdown__item"><a href="#">Для суконь</a></li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для костюмів</a>
                      </li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для спідниць</a>
                      </li>
                      <li class="dropdown__item"><a href="#">Для брюк</a></li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для курток/плащів</a>
                      </li>
                      <li class="dropdown__item"><a href="#">Для пальто</a></li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для святкового одягу</a>
                      </li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для дитячого одягу</a>
                      </li>
                      <li class="dropdown__item">
                        <a href="html/catalog.html">Для оздоблення</a>
                      </li>
                      <li class="dropdown__item"><a href="html/catalog.html">Підкладка</a></li>
                    </ul>
                  </li>
                  <li class="menu__catalog">
                    <a href="html/catalog.html">Новинки</a>
                  </li>
                  <li class="menu__catalog">
                    <a href="html/catalog.html">Хіти продаж</a>
                  </li>
                  <li class="menu__catalog">
                    <a href="html/catalog.html">Акції</a>
                  </li>
                  <li class="menu__catalog">
                    <a href="html/catalog.html">Оптовим покупцям</a>
                  </li>
                </ul>
              </div>

              <nav class="burger__menu">
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
              </nav>
            </nav>
          </div>
        </div>`;

headerTemplate.innerHTML = `
    <header class="header">
        ${topMenu}
        ${headerBody}
        ${headerCatalog}        
    </header>
`;

const headerClone = headerTemplate.content.cloneNode(true);

document.body.prepend(headerClone);