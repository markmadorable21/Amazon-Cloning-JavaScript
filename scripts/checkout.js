import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/car.js';
import '../data/backend-practice.js';
import { loadProducts } from '../data/products.js';

//importing all methods in a file
//import '../data/cart-class.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
