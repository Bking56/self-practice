// StringFormatter
// Create a function stringFormatter that takes a string and a format type ("uppercase", "lowercase", "capitalize") with 
// ignore case. The function should return the string formatted accordingly.
// "uppercase": Converts the entire string to uppercase.
// "lowercase": Converts the entire string to lowercase.
// "capitalize": Capitalizes the first letter of each word in the string.
// If the string is an empty, return an empty string.
// If the formatType is invalid, an error 'Invalid format type' is thrown.
// If an input is not a string, an error 'Input must be a string' is thrown.
// Examples:
// stringFormatter("hello world" "uppercase") // "HELLO WORLD"
// stringFormatter("hello world" "Uppercase") // "HELLO WORLD"
// stringFormatter("HELLO WORLD", "lowercase") // "hello world"
// stringFormatter("HELLO WORLD", "LOWERCASE") // "hello world"
// stringFormatter("hello world", "capitalize") // "Hello World"
// stringFormatter("hello world", "Capitalize") // "Hello World"
// stringFormatter("hEllo woRld", "CAPITALIZE") // "Hello World"
// stringFormatter('', 'uppercase') //''
// stringFormatter('hello world', 'invalid') //'Invalid format type'
// stringFormatter(12345, 'uppercase') //'Input must be a string'

function stringFormatter(str, format) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    if (str === '') {
        return '';
    }

    const formatType = format.toLowerCase();

    switch (formatType) {
        case 'uppercase':
            return str.toUpperCase();
        case 'lowercase':
            return str.toLowerCase();
        case 'capitalize':
            return str
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        default:
            throw new Error('Invalid format type');
    }
}


  

console.log(stringFormatter("hello world" ,"uppercase"));
console.log( stringFormatter("hello world", "Uppercase"));
console.log(stringFormatter("HELLO WORLD", "lowercase"));
console.log(stringFormatter("HELLO WORLD", "LOWERCASE") );
console.log(stringFormatter("hello world", "capitalize"));
console.log(stringFormatter("hello world", "Capitalize"));
console.log(stringFormatter("hEllo woRld", "CAPITALIZE"));
console.log(stringFormatter('', 'uppercase') );
console.log(stringFormatter('hello world', 'invalid'));
console.log(stringFormatter(12345, 'uppercase'));



 // "HELLO WORLD"
// // "HELLO WORLD"
//  // "hello world"
// // "hello world"
//  // "Hello World"
//  // "Hello World"
//  // "Hello World"
// //''
//  //'Invalid format type'
//  //'Input must be a string'



