// export means to outside, so other classes or outside this file can access this cart variable

// object definition
// outer object cart
const cart = {
  cartItems: undefined,
  // the function definition below can be shorthanded with the function below it
  // loadFromStorage() {
  //   cart = JSON.parse(localStorage.getItem('cart'));

  //   if (!cart) {
  //     cart = [
  //       {
  //         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  //         quantity: 2,
  //         deliveryOptionId: '1',
  //       },

  //       {
  //         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  //         quantity: 2,
  //         deliveryOptionId: '3',
  //       },
  //     ];
  //   }
  // },

  //shortcut function
  loadFromStorage: function () {
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1',
        },

        {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 2,
          deliveryOptionId: '3',
        },
      ];
    }
  },
  saveToStorage: function () {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },
  addToCart: function (productId) {
    let matchingItem;

    let quantity = Number(
      document.querySelector(`.js-quantity-selector-${productId}`).value,
    );

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: '1',
      });
    }

    //adding this to access the cartIem saveToStorage
    this.saveToStorage();
    console.log(`Quantity Selected: ${quantity}`);
  },
  removeFromCart: function (productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  },
  calculateCartQuantity: function () {
    let cartQuantity = 0;

    this.cartItem.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
  },
  updateQuantity(productId, newQuantity) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }

      if (matchingItem) {
        matchingItem.quantity = newQuantity;
      }
    });
    this.saveToStorage();
    return matchingItem.quantity;
  },
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },
};

// "export let cart;" is equal to "export let cart = undefined;"

cart.loadFromStorage();

console.log(cart);

// cart.addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');

// NORMALIZING THE DATA OR DE-DUPLICATING THE DATA
//not including the other product details, the important is the productId so that we can reuse the product.js data

// Create test HTML elements for the tutorial
const testInput = document.createElement('input');
testInput.className =
  'js-quantity-selector-8c9c52b5-5a19-4bcb-a5d1-158a74287c53';
testInput.value = '2';
document.body.appendChild(testInput);

// NOW test addToCart
cart.addToCart('8c9c52b5-5a19-4bcb-a5d1-158a74287c53');
console.log('Cart after adding:', cart.cartItems);

// Clean up
document.body.removeChild(testInput);

export { cart };

//creating another cart object for business using the same code
const businessCart = {
  cartItems: undefined,
  // the function definition below can be shorthanded with the function below it
  // loadFromStorage() {
  //   cart = JSON.parse(localStorage.getItem('cart'));

  //   if (!cart) {
  //     cart = [
  //       {
  //         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  //         quantity: 2,
  //         deliveryOptionId: '1',
  //       },

  //       {
  //         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  //         quantity: 2,
  //         deliveryOptionId: '3',
  //       },
  //     ];
  //   }
  // },

  //shortcut function
  loadFromStorage: function () {
    this.cartItems = JSON.parse(localStorage.getItem('cart-business'));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1',
        },

        {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 2,
          deliveryOptionId: '3',
        },
      ];
    }
  },
  saveToStorage: function () {
    localStorage.setItem('cart-business', JSON.stringify(this.cartItems));
  },
  addToCart: function (productId) {
    let matchingItem;

    let quantity = Number(
      document.querySelector(`.js-quantity-selector-${productId}`).value,
    );

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: '1',
      });
    }

    //adding this to access the cartIem saveToStorage
    this.saveToStorage();
    console.log(`Quantity Selected: ${quantity}`);
  },
  removeFromCart: function (productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  },
  calculateCartQuantity: function () {
    let cartQuantity = 0;

    this.cartItem.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
  },
  updateQuantity(productId, newQuantity) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }

      if (matchingItem) {
        matchingItem.quantity = newQuantity;
      }
    });
    this.saveToStorage();
    return matchingItem.quantity;
  },
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },
};

// "export let cart;" is equal to "export let cart = undefined;"

businessCart.loadFromStorage();

console.log('business cart');
console.log(businessCart);
