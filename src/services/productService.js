const PRODUCT_KEY = "products";

export function getProducts() {
  return JSON.parse(localStorage.getItem(PRODUCT_KEY)) || [];
}

export function saveProducts(products) {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
}

export function initProducts(defaultProducts) {
  if (!localStorage.getItem(PRODUCT_KEY)) {
    saveProducts(defaultProducts);
  }
}
