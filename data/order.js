export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order); // add the order to the top/front of the array order
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

// URL parameters = let us save data directly in the URL
// key value pairs after the URL starting with "?"
// the question mark means we're adding a URL parameter to the URL
