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