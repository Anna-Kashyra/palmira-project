// Render cart items

function renderCart() {
  const container = document.querySelector("#cart-items");

  if (!container) return;

  const cart = getCart();

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        Кошик порожній
      </div>
    `;

    return;
  }

  let total = 0;

  container.innerHTML = cart
    .map(item => {
      const sum = item.price * item.quantity;

      total += sum;

      return `
        <div class="row">
          <div class="cell cell__flex">
            <div class="cell__img">
              <img
                src="${item.cover}"
                alt="${item.name}"
              />
            </div>

            <div class="cell__text">
              <h3 class="cell__name">
                <a href="#">${item.name}</a>
              </h3>

              <div class="product__article">
                ${item.description}
              </div>
            </div>
          </div>

          <div class="cell">
            ${item.price.toFixed(2)} грн
          </div>

          <div class="cell">
            ${item.quantity}
          </div>

          <div class="cell">
            ${sum.toFixed(2)} грн
          </div>

          <div class="cell cell__del">
            <a href="#!" class="remove-item" data-id="${item.id}">
              <i class="fa-regular fa-circle-xmark"></i>
            </a>
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML += `
    <div class="row">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>

      <div class="cell">
        <strong>${total.toFixed(2)} грн</strong>
      </div>

      <div class="cell"></div>
    </div>
  `;
}

// Update cart counter

document.addEventListener("click", event => {
  const removeBtn = event.target.closest(".remove-item");

  if (!removeBtn) return;

  event.preventDefault();

  const id = Number(removeBtn.dataset.id);

  let cart = getCart();

  cart = cart.filter(item => item.id !== id);

  saveCart(cart);

  renderCart();
  updateCartCounter();
});

updateCartCounter();
renderCart();