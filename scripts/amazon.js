import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';

//imports can import function as well
// we can write:

/*
import * as cartModule from '../data/cart.js';

cartModule.cart
cartModule.addToCart('id');
*/

//If you are in data/products.js and want another file in the same folder,
// you’d use:
// import something from './otherFile.js';

//double dots or .. means the main folder JAVASCRIPT-AMAZON-PROJECT

// import { cart as myCart } from '../data/cart.js';

// const cart =[]; declaring this cart will have a naming conflict with the imported cart variable, so we should rename is by adding 'as'

let productsHTML = ''; //forEach method will read each values in the array so everytime we access each array we will put it in the productsHTMl to combine all iterated objects of product

products.forEach((product) => {
  //accumulator pattern
  productsHTML += `<div class="product-container"> 
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  console.log(`Cart Quantity: ${cartQuantity}`);
}

const addedMessageTimeouts = {};
function makeAddedTextShow(productId) {
  //we can also use an object (new) to save each products timeoutid

  // We're going to use an object to save the timeout ids.
  // The reason we use an object is because each product
  // will have its own timeoutId. So an object lets us
  // save multiple timeout ids for different products.
  // For example:
  // {
  //   'product-id1': 2,
  //   'product-id2': 5,
  //   ...
  // }
  // (2 and 5 are ids that are returned when we call setTimeout).
  const previousTimeoutId = addedMessageTimeouts[productId];

  document
    .querySelector(`.js-added-to-cart-${productId}`)
    .classList.add('added-to-cart-show');

  if (previousTimeoutId) {
    clearTimeout(previousTimeoutId);
  }

  const timeoutId = setTimeout(() => {
    document
      .querySelector(`.js-added-to-cart-${productId}`)
      .classList.remove('added-to-cart-show');
  }, 2000);

  // Save the timeoutId for this product
  // so we can stop it later if we need to.
  addedMessageTimeouts[productId] = timeoutId;

  //ANOTHER METHOD SAME RESULTS
  // document
  //   .querySelector(`.js-added-to-cart-${productId}`)
  //   .classList.add('added-to-cart-show');

  // if (addedMessageTimeoutId) {
  //   clearTimeout(addedMessageTimeoutId);
  // }

  // const timeoutId = setTimeout(() => {
  //   document
  //     .querySelector(`.js-added-to-cart-${productId}`)
  //     .classList.remove('added-to-cart-show');
  // }, 2000);

  // addedMessageTimeoutId = timeoutId;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  // let addedMessageTimeoutId; THIS IS THE FOR 2ND METHOD WITH SAME RESULT OF FUNCTION makeAddedTextShow(productId);

  button.addEventListener('click', () => {
    // const productId = button.dataset.productId;
    const { productId } = button.dataset;

    addToCart(productId);

    updateCartQuantity();

    makeAddedTextShow(productId);

    console.log(cart);
  });
});
