// importing module
///////////////// Named Import
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('oranges', 10);
// console.log(price, tq);

// we can import everything at the same time
console.log('Importing module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('oranges', 10);
// console.log(ShoppingCart.totalPrice);

/////// Default import

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price);
// import add from './shoppingCart.js';
// add('Banana', 10);
// add('Apple', 5);
// add('Oranges', 10);

//////////// Imports have life connection to export(not the copy of export)
import add, { cart } from './shoppingCart.js';
add('Banana', 10);
add('Apple', 5);
add('Oranges', 10);

console.log(cart);
