import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/car.js';
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//importing all methods in a file
//import '../data/cart-class.js';

// promise is a built-in function
// need function
//resolve is a function as parameter
// resolve let us control when to go to the next step

//async await = shortcut for promises cox it removes extra codes .then, resolve
// async await = even better way than promises to handle asynchronous

//async = makes a function return a promise

//await = lets us wait for a promise to finish, before going to the next line
async function loadPage() {
  try {
    // throw = can be used to manually create error/s
    // throw = creates an error that will be catched later or be thrown in catch part

    //throw 'error1'; // error1 is the error value
    // when we get an error, it will skip the rest of the code inside the curly braces
    // the error value 'error1' will be saved in error value in catch parameter
    console.log('load page');
    await loadProductsFetch(); // await is equal to .then, it waits to finish fetching/executing the line/method b4 going down to the next line
    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        //throw does not work asynchronously or it does not create an error in the future
        // we will use reject() as a parameter
     //   reject('error');
        // resolve(';bahog belat');
      });
    });
  } catch (e) {
    console.log(`Error cocksucker: ${e}`);
    console.log(e);
  }

  renderOrderSummary();
  renderPaymentSummary();

  return 'value3'; // equals to resolve('value3') and will be saved to value below in .then
}

loadPage().then((value) => {
  console.log('next bitch');
  console.log(value);
});

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve('bahog belat');
//     });
//   }),
// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   console.log('start promise');
//   loadProducts(() => {
//     resolve('value1'); // resolve means we wait for the products to be loaded
//     console.log('finished loading');
//   });
// })
//   .then((value) => {
//     console.log(value);
//     console.log('next step');
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

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
