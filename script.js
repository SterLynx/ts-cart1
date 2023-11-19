"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");

function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: [],
    };
}
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description,
    };
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter(function (cartItem) { return cartItem.id !== item.id; });
}
function removeQuantityFromCart(item, user, quantity) {
    var remainingQuantity = quantity;
    user.cart = user.cart.filter(function (cartItem) {
        if (cartItem.id === item.id && remainingQuantity > 0) {
            remainingQuantity--;
            return false;
        }
        return true;
    });
}
function cartTotal(user) {
    return user.cart.reduce(function (total, item) { return total + item.price; }, 0);
}
function printCart(user) {
    console.log("User's Cart:");
    user.cart.forEach(function (item) {
        console.log("- ".concat(item.name, ": $").concat(item.price));
    });
    console.log("Total: $".concat(cartTotal(user)));
}

var user = createUser('John', 30);
var itemA = createItem('Milk', 5, 'A carton of Milk');
var itemB = createItem('Eggs', 6, 'A carton of eggs');
var itemC = createItem('Bundle of bananas', 1, 'A large bundle of bananas');
addToCart(itemA, user);
printCart(user);
console.log('---');
addToCart(itemB, user);
addToCart(itemB, user);
addToCart(itemB, user);
printCart(user);
console.log('---');
addToCart(itemC, user);
addToCart(itemC, user);
addToCart(itemC, user);
printCart(user);
console.log('---');
removeFromCart(itemB, user);
printCart(user);
console.log('---');
removeQuantityFromCart(itemC, user, 2);
printCart(user);
console.log('---');
