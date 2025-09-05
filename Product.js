// // // StringFormatter
// // // Create a function stringFormatter that takes a string and a format type ("uppercase", "lowercase", "capitalize") with 
// // // ignore case. The function should return the string formatted accordingly.
// // // "uppercase": Converts the entire string to uppercase.
// // // "lowercase": Converts the entire string to lowercase.
// // // "capitalize": Capitalizes the first letter of each word in the string.
// // // If the string is an empty, return an empty string.
// // // If the formatType is invalid, an error 'Invalid format type' is thrown.
// // // If an input is not a string, an error 'Input must be a string' is thrown.
// // // Examples:
// // // stringFormatter("hello world" "uppercase") // "HELLO WORLD"
// // // stringFormatter("hello world" "Uppercase") // "HELLO WORLD"
// // // stringFormatter("HELLO WORLD", "lowercase") // "hello world"
// // // stringFormatter("HELLO WORLD", "LOWERCASE") // "hello world"
// // // stringFormatter("hello world", "capitalize") // "Hello World"
// // // stringFormatter("hello world", "Capitalize") // "Hello World"
// // // stringFormatter("hEllo woRld", "CAPITALIZE") // "Hello World"
// // // stringFormatter('', 'uppercase') //''
// // // stringFormatter('hello world', 'invalid') //'Invalid format type'
// // // stringFormatter(12345, 'uppercase') //'Input must be a string'

// // function stringFormatter(str, format) {
// //     if (typeof str !== 'string') {
// //         throw new Error('Input must be a string');
// //     }

// //     if (str === '') {
// //         return '';
// //     }

// //     const formatType = format.toLowerCase();

// //     switch (formatType) {
// //         case 'uppercase':
// //             return str.toUpperCase();
// //         case 'lowercase':
// //             return str.toLowerCase();
// //         case 'capitalize':
// //             return str
// //                 .toLowerCase()
// //                 .split(' ')
// //                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //                 .join(' ');
// //         default:
// //             throw new Error('Invalid format type');
// //     }
// // }


  

// // console.log(stringFormatter("hello world" ,"uppercase"));
// // console.log( stringFormatter("hello world", "Uppercase"));
// // console.log(stringFormatter("HELLO WORLD", "lowercase"));
// // console.log(stringFormatter("HELLO WORLD", "LOWERCASE") );
// // console.log(stringFormatter("hello world", "capitalize"));
// // console.log(stringFormatter("hello world", "Capitalize"));
// // console.log(stringFormatter("hEllo woRld", "CAPITALIZE"));
// // console.log(stringFormatter('', 'uppercase') );
// // console.log(stringFormatter('hello world', 'invalid'));
// // console.log(stringFormatter(12345, 'uppercase'));



// //  // "HELLO WORLD"
// // // // "HELLO WORLD"
// // //  // "hello world"
// // // // "hello world"
// // //  // "Hello World"
// // //  // "Hello World"
// // //  // "Hello World"
// // // //''
// // //  //'Invalid format type'
// // //  //'Input must be a string'







// A Simple Shopping Cart
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

class Product {
    constructor(name, price, quantity) {
        this.name =name
        this.price =price
        this.quantity=quantity
        
    }
    getNameproduct(){return this.name}
    getPrice(){return this.price}
    getQuantity(){return this.quantity}
    setNameproduct(name){this.name=name}
    setPriceProduct(price){this.price=price}
    setQuantity(quantity){this.quantity=quantity}

    }
    const pro1 =new Product("gold",1000,1)
    
    console.log(pro1.getNameproduct());
    pro1.setNameproduct("Boss")
    console.log(pro1.getNameproduct());
    
    // console.log(cart.getItems())
// // [
// //   Product { name: 'Item 1', price: 10, quantity: 1 },
// //   Product { name: 'Item 2', price: 20, quantity: 2 },
// //   Product { name: 'Item 3', price: 15, quantity: 1 }
// // ]











// let cart = new Cart()
// let product1 = new Product('Item 1', 10, 1)
// let product2 = new Product('Item 2', 20, 2)
// let product3 = new Product('Item 3', 15, 1)



// cart.addItem(product1)
// cart.addItem(product2)
// cart.addItem(product3)
// console.log(cart.calculateTotal()) // 65
// console.log(cart.getItems())
// // [
// //   Product { name: 'Item 1', price: 10, quantity: 1 },
// //   Product { name: 'Item 2', price: 20, quantity: 2 },
// //   Product { name: 'Item 3', price: 15, quantity: 1 }
// // ]

// cart.removeItem(product2)
// console.log(cart.calculateTotal()) // 25
// console.log(cart.getItems())
// // [
// //   Product { name: 'Item 1', price: 10, quantity: 1 },
// //   Product { name: 'Item 3', price: 15, quantity: 1 }
// // ]