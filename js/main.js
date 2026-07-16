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

// Categories filter on Home page

const newBtn = document.querySelector(".title__new");
const hitsBtn = document.querySelector(".title__hits");
const saleBtn = document.querySelector(".title__sale");

const products = document.querySelectorAll(".product");

if (newBtn && hitsBtn && saleBtn && products.length) {
  function showProducts(filter) {
    products.forEach(product => {
      const hasNewBadge = product.querySelector(".badge__new");
      const hasSaleBadge = product.querySelector(".badge__sale");

      let shouldShow = false;

      if (filter === "new") {
        shouldShow = hasNewBadge;
      }

      if (filter === "sale") {
        shouldShow = hasSaleBadge;
      }

      if (filter === "hits") {
        shouldShow = !hasNewBadge && !hasSaleBadge;
      }

      product.style.display = shouldShow ? "block" : "none";
    });
  }

  newBtn.addEventListener("click", event => {
    event.preventDefault();
    showProducts("new");
  });

  saleBtn.addEventListener("click", event => {
    event.preventDefault();
    showProducts("sale");
  });

  hitsBtn.addEventListener("click", event => {
    event.preventDefault();
    showProducts("hits");
  });
}

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