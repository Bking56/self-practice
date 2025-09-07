//  A Simple Shopping Cart
// A simple shopping cart system using JavaScript classes and working with two separate classes:
// Product class in Product.js: represents individual products with properties like name, price, and quantity.
// Cart class in Cart.js: represents the shopping cart, which can hold multiple products and perform actions like adding, removing items, and calculating the total price.
// Classes:
// Product.js
// This file defines the Product class. Each product has:
// name: The name of the product (e.g., "Laptop").
// price: The cost of the product.
// quantity: How many units of the product are in the cart.
// Cart.js
// This file defines the Cart class, which holds the list of products and includes multiple methods for finding, getting, adding, removing, and calculating the total cost of the items in the cart.
// Properties:
// this.items: An array that holds all the Product objects added to the cart.
// Methods:
// findItemIndex(productName): Finds the index of a product by name with ignore cases in the cart.
// addItem(product): Adds a product to the cart or increases the quantity if the product already exists, and ensures that if the provided quantity is a negative value, it is set to zero. Calling findItemIndex method to find the index of the product to add.
// removeItem(product): Removes a product from the cart by calling findItemIndex method to find the index of the product to remove.
// calculateTotal(): Returns the total cost of all products in the cart by multiplying each product's price by its quantity.
// getItems(): Returns the list of products in the cart. Note that Do not returns the items array directly, any modifications to the returned array (outside the Cart class) would affect the original items array inside the cart. You need to copy each object inside the array, so changes to the objects won't affect the original cart.
// Example:


// Cart.js
import Product from './Product.js';

export default class Cart {
  constructor() {
    this.items = [];
  }

  findItemIndex(productName) {
    return this.items.findIndex(
      item => item.name.toLowerCase() === productName.toLowerCase()
    );
  }

  addItem(newProduct) {
    const index = this.findItemIndex(newProduct.name);
    const quantityToAdd = newProduct.quantity < 0 ? 0 : newProduct.quantity;

    if (index >= 0) {
      this.items[index].quantity += quantityToAdd;
    } else {
      this.items.push(new Product(newProduct.name, newProduct.price, quantityToAdd));
    }
  }

  removeItem(productName) {
    const index = this.findItemIndex(productName);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getItems() {
   
    return this.items.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));
  }
}


