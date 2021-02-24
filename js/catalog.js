/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
const selectElement = document.getElementById('items');

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  
  let optionEl;
  for (let i in Product.allProducts) {
    optionEl = document.createElement('option');
    selectElement.appendChild(optionEl);
    optionEl.textContent = Product.allProducts[i].name;
    optionEl.setAttribute('value',Product.allProducts[i].name);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...

  cart.items = JSON.parse(localStorage.getItem('cart'));
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  //console.log(event);

}
let optionName;
let quantity;
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let index ;
  for (let i = 0; i < selectElement.options.length; i++) {

    let variable = selectElement.options[i].selected;
    if(variable){
      index = i;
      break;
    }
  }
  optionName = selectElement.options[index].value;
  //console.log(optionName);
  // TODO: get the quantity
  quantity = document.getElementById('quantity').value;
  //console.log(quantity);
  // TODO: using those, add one item to the Cart
  cart.addItem(optionName,quantity);
  //console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCountEl = document.getElementById('itemCount');
  itemCountEl.textContent = `(${cart.items.length})`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  
  let cardReview = document.getElementById('cartContents')
  let paraEl = document.createElement('p');
  cardReview.appendChild(paraEl);
  paraEl.textContent = `Item : ${optionName} | Quantinty: ${quantity}`;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
