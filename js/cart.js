/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
const tBodyEl = document.getElementById('tb');


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  for (let i = 0; i < tBodyEl.length; i++) {
    tBodyEl.deleteRow(-1);
    
  }
  console.log(tBodyEl);
  
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  let trEl;
  let tdEl;

  // for (let i = 0; i < cart.items.length; i++) {
  //   trEl = document.createElement('tr');
  //   tBodyEl.appendChild(trEl);
  //   let pointer = 0;
  //   while (pointer < 3) {
  //     tdEl = document.createElement('td');
  //     trEl.appendChild(tdEl);
  //     console.log(pointer);
  //     console.log(tBodyEl);
  //     switch (pointer) {
  //       case 0:
  //         tdEl.textContent = 'X';
  //         break;
  //       case 1:
  //         console.log(cart)
  //         tdEl.textContent = cart.items[i].product.name;
  //         break;
  //         case 2:
  //           tdEl.textContent = cart.items[i].product.quantity;
  //     }
  //     pointer++;
  //   }
  // }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();


