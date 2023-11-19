import { v4 as uuidv4 } from 'uuid';


type Item = {
id: string;
name: string;
price: number;
description: string;
};

type User = {
id: string;
name: string;
age: number;
cart: Item[];
};


function createUser(name: string, age: number): User {
return {
    id: uuidv4(),
    name,
    age,
    cart: [],
};
}

function createItem(name: string, price: number, description: string): Item {
return {
    id: uuidv4(),
    name,
    price,
    description,
};
}

function addToCart(item: Item, user: User): void {
user.cart.push(item);
}

function removeFromCart(item: Item, user: User): void {
user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
let remainingQuantity = quantity;
user.cart = user.cart.filter((cartItem) => {
    if (cartItem.id === item.id && remainingQuantity > 0) {
    remainingQuantity--;
    return false;
    }
    return true;
});
}

function cartTotal(user: User): number {
return user.cart.reduce((total, item) => total + item.price, 0);
}

function printCart(user: User): void {
console.log("User's Cart:");
user.cart.forEach((item) => {
    console.log(`- ${item.name}: $${item.price}`);
});
console.log(`Total: $${cartTotal(user)}`);
}


const user = createUser('John', 30);
const itemA = createItem('Milk', 5, 'A carton of Milk');
const itemB = createItem('Eggs', 6, 'A carton of eggs');
const itemC = createItem('Bundle of bananas', 1, 'A large bundle of bananas');

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
