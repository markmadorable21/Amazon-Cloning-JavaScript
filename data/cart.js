export const cart = [];
// export means to outside, so other classes or outside this file can access this cart variable

export function addToCart(productId) {
  let matchingItem;

  let quantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  );

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }

  console.log(`Quantity Selected: ${quantity}`);
}
