import { cart, calculateCartQuantity } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import formatCurrency from '../utils/money.js';
import { addOrder } from '../../data/order.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;

  const taxCents = totalBeforeTaxCents * 0.1;

  const totalCents = totalBeforeTaxCents + taxCents;

  console.log(productPriceCents);
  console.log(shippingPriceCents);
  console.log(totalBeforeTaxCents);
  console.log(totalCents);

  const cartQty = calculateCartQuantity();

  const paymentSummaryHTML = `<div class="payment-summary-title">Order Summary</div>
    <div class="payment-summary-row">
      <div>Items (${cartQty}):</div>
      <div class="payment-summary-money">$${formatCurrency(
        productPriceCents,
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(
        shippingPriceCents,
      )}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(
        totalBeforeTaxCents,
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>`;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  document
    .querySelector('.js-place-order')
    .addEventListener('click', async () => {
      try {
        // using POST req to create an order
        // POST let us send data to the backend
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST', // property for type of req
          //object
          headers: {
            'Content-Type': 'application/json',
          }, // header property gives the backend more info about the req
          //object, actual data we send to the backend
          body: JSON.stringify({ cart: cart }),
        });
        const order = await response.json(); // json is promise so need await
        addOrder(order);
      } catch (error) {
        console.log('Naay error dicksucker');
        console.log(error);
      }

      window.location.href = 'orders.html'; //will open the orders page
    });

  // 4 TYPES OF REQUEST
  // GET = get something from the backend
  // POST = create something
  // PUT = update something
  // DELETE = delete something
}
