// Filters options
function getTextiles(products) {
  return [
    ...new Set(
      products.map(product => product.textile)
    )
  ].sort();
}

// Products List

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

// Render products

function renderProducts(productsToRender) {
  if (!productContainer) return;

  productContainer.innerHTML = productsToRender
    .map(product => createProductCard(product))
    .join("");
}

// Cart functions

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();

  const existingItem = cart.find(
    item => item.id === productId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(
      item => item.id === productId
    );

    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);
  updateCartCounter();
}

function updateCartCounter() {
  const counter = document.querySelector("#cart-amount");

  if (!counter) return;

  const cart = getCart();

  counter.textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}