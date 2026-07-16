const isInnerPage =
  window.location.pathname.includes("/html/") ||
  window.location.pathname.includes("\\html\\");

const prefix = isInnerPage ? "../" : "";

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