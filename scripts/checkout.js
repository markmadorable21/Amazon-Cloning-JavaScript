import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/car.js';
// import '../data/backend-practice.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//importing all methods in a file
//import '../data/cart-class.js';

// promise is a built-in function
// need function
//resolve is a function as parameter
// resolve let us control when to go to the next step

Promise.all([
  new Promise((resolve) => {
    console.log('start promise');
    loadProducts(() => {
      resolve('bahog oten'); // resolve means we wait for the products to be loaded
      console.log('finished loading');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('bahog belat');
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

new Promise((resolve) => {
  console.log('start promise');
  loadProducts(() => {
    resolve('value1'); // resolve means we wait for the products to be loaded
    console.log('finished loading');
  });
})
  .then((value) => {
    console.log(value);
    console.log('next step');
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

//Promise.all
//let us run multiple promises at the same time and wait for all of them to finish
//promises are better for callbacks bcoz nesting

// callback
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
