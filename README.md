# amman-201d14-lab14-

This is **Malak Al-momani** , I worked with **Naji** , **Sara** and **Ibrahim** . I was the leader.

This is problem is about add orders in my cart , using forms and save it in local storage , then retrieve it whenever I want .
We met each other and clone the repo each one in his local machine , then try to understand and analyse what we have.
First , we checked the integration of CSS files in *index.html* & *cart.html* . Then we checked also the integration of JavaScript files if they are integrated correct way or not.
After that we analyse the *app.js* file.
We have three constructor functions which is :
- Product
- Cart Item
- Cart

Each `Cart` has a `CartItems`
each `CartItem` has a `Product` 

- `Product` has filepath which is image , and product name
- `CartItem` has product & quantity as proprities , product is an instance from `Product` constructor function 
- `Cart` has array of items we conclude that will be from `CartItem` type.

I spend more time than my group to understand first 10 lines in *cart.js*

`const cartItems = JSON.parse(localStorage.getItem('cart')) || [];`
this line above confused us because this notation >> `|| []`
Me & Naji seached about it in Google , we did't find clear or usefull things , but we conclude that if there is nothing in local storage return empty array []

we struggled in splice function but we skipped until we finish other requiremnts .

Then  , we started working in *catalog.js*
- `populateForm()` : inside form we have drop dowm list we must add options inside it , we did that using for loop looping inside AllProducts array to retrieve the name of product and add it inside drop down list using <option> tag. 

- `handleSubmit(event)`: after we run our code 2 times or more we notice that wen we refresh the page the local storge is working well until we add new item to our cart, so we must retrieve what inside our local storage before we handling clicking .

- `addSelectedItemToCart()` : here we spend time to solve it because we have to find the index of selected item from drop down list . so we make some searching about it and we slove it like that >> we looping inside drop down list and checked the option if it is selected using `selected` proprety , then store our index inside var called index , so break our loop , then we retrieve also the quantity from text field, after that we stored the item which selected and the quantity inside our cart.

- `updateCounter()` : this method count how many item inside my cart and show it behind my cart , we use cart.items.length to know how many item in my cart .

- `updateCartPreview()` : in this function we must add preview about what I select , so we just get div element which is already added in html , then just append child to it has an information from form.

After that we started working inside *cart.js* file :
this part of code we did it separately 
- `clearChart()`: I added for loop to looping inside tbody element and calling `deletRow(-1)` function
- `showCart()` : I looping inside tbody element to add table rows , and inside each table row I used while loop to agg three table data each time. here it cause some error and couldn't fix it .

- `removeItemFromCart(event)` : I haven't worked in it yet.


