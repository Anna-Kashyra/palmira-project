// Catalog filtres

const button = document.querySelector('.common__btn[name="choice__button"]');
const filtersBlock = document.querySelector(".filters");

button?.addEventListener("click", event => {
  event.preventDefault();

  filtersBlock?.classList.toggle("open");
});

const filterForm = document.querySelector("#filter");
const sortSelect = document.querySelector(".sort__select");

const filters = {
  textile: "all",
  special: null,
  colors: [],
  types: [],
  sort: "default"
};

const params = new URLSearchParams(window.location.search);

const textileFromUrl = params.get("textile");

if (textileFromUrl) {
  filters.textile = textileFromUrl;
}


// Catalog aside

const categoriesContainer = document.querySelector(".aside__categories");

const textiles = getTextiles(products);

if (categoriesContainer) {
  categoriesContainer.innerHTML = `
    <li class="aside__categories-common">
      <a href="#" data-filter="sale">Акції</a>
    </li>
    <li class="aside__categories-common">
      <a href="#" data-filter="new">Новинки</a>
    </li>
    <li class="aside__categories-common">
      <a href="#" data-filter="popular">Хіти продаж</a>
    </li>

    ${textiles.map(textile => `
      <li>
        <a href="#" data-textile="${textile}">
          ${textile.charAt(0).toUpperCase() + textile.slice(1)}
        </a>
      </li>
    `).join("")}
  `;
}

function applyFiltersAndSort() {
  let result = [...products];

  // Textile
  if (filters.textile !== "all") {
    result = result.filter(
      product => product.textile === filters.textile
    );
  }

  // Sale / New / Popular
  if (filters.special === "sale") {
    result = result.filter(
      product => product.badge?.bg === "sale"
    );
  }

  if (filters.special === "new") {
    result = result.filter(
      product => product.badge?.bg === "new"
    );
  }

  if (filters.special === "popular") {
    result = result.filter(
      product => product.popular === "popular"
    );
  }

  // Colors
  if (filters.colors.length) {
    result = result.filter(product =>
      filters.colors.some(color =>
        product.colors.includes(color)
      )
    );
  }

  // Purposes / Seasons
  if (filters.types.length) {
    result = result.filter(product =>
      filters.types.some(type =>
        product.seasons.includes(type) ||
        product.purposes.includes(type)
      )
    );
  }

  // Sort
  switch (filters.sort) {
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

  filters.colors = [
    ...document.querySelectorAll(
      'input[name="color"]:checked'
    )
  ].map(item => item.value);

  filters.types = [
    ...document.querySelectorAll(
      'input[name="textil-type"]:checked'
    )
  ].map(item => item.value);

  applyFiltersAndSort();

  filtersBlock?.classList.remove("open");
});

sortSelect?.addEventListener("change", () => {
  filters.sort = sortSelect.value;

  applyFiltersAndSort();
});

function filterProducts(link) {
  const textile = link.dataset.textile;
  const filter = link.dataset.filter;

  filters.special = null;

  if (textile) {
    filters.textile = textile;
  }

  if (filter) {
    filters.textile = "all";
    filters.special = filter;
  }

  applyFiltersAndSort();
}

if (categoriesContainer) {
  categoriesContainer.addEventListener("click", e => {
    const link = e.target.closest("a");

    if (!link) return;

    e.preventDefault();

    filterProducts(link);
  });
}

const allProductsLink = document.querySelector(
  '.section__title a[data-textile="all"]'
);

if (allProductsLink) {
  allProductsLink.addEventListener("click", e => {
    e.preventDefault();

    renderProducts(products);
  });
}

applyFiltersAndSort();