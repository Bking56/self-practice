
const r = {
    name: "chaibadin",
    ID: "67130500073",
    lastname: "saejew",
    getFullName() {
        return this.name + " " + this.lastname;
    }
};

console.log(r);
console.log(r.getFullName());
console.log("-----------------------------");


const t = {
    name: "boss",
    lastname: "za",
    Father: [
        { name: "boss", lastname: "za" }
    ]
};

console.log(t);
console.log(t.Father[0].name);
console.log("-----------------------------");

const book = {
    isbn: 12345678,
    title: 'Introduction to JS',
    authors: [
        { firstname: 'John' },
        { lastname: 'Smith' },
        { firstname: 'Danial' },
        { lastname: 'Doh' }
    ],
    versions: [1.0, 2.0, 3.0],
    isAvailable: true,
    getISBN() {
        return this.isbn;
    }
};

console.log(book);
console.log(book.getISBN());
console.log(book.authors[0].firstname);
console.log("-----------------------------");
console.log(book.authors);


book.publicDate = new Date(2025, 1, 1);
console.log(book);


delete book.isAvailable;
console.log(book);


console.log(book["publicDate"]);
console.log(book.publicDate);
console.log("-----------------------------");


for (const key in book) {
    console.log(book[key]);
}
console.log("-----------------------------");


function Book(isbn, title) {
    this.isbn = isbn;
    this.title = title;
}
const b1 = new Book(123, 'JS');
const b2 = new Book(456, 'CSS');
console.log(b1);
console.log(b2);


class BookClass {
    constructor(isbn, title) {
        this.isbn = isbn;
        this.title = title;
    }

    getISBN() {
        return this.isbn;
    }

    getTitle() {
        return this.title;
    }

    getBookInfo() {
        return `isbn: ${this.isbn}, title: ${this.title}`;
    }
}
const myBook = new BookClass(123, 'JS');
console.log(myBook.getBookInfo());
console.log(myBook.getISBN());


const journal = Object.create(myBook);
journal.isbn = "5678";
console.log(journal);
console.log(journal.isbn);
console.log(journal.title);
console.log("-----------------------------");


const a1 = { id: 1, title: 'js' };
function doSth(x) {
    x = { id: 1, title: 'js' }; 
    x.id = 555;
}
doSth(a1);
console.log(a1);


const m1 = { id: 1, title: 'JS' };
const m2 = { id: 1, title: 'JS' };
const m3 = m1;

console.log(m1 == m2);   
console.log(m1 === m2);   
console.log(m1 === m3);   

console.log("-----------------------------");


function Compared(b1, b2) {
    return b1.isbn === b2.isbn;
}

function Comp(x, y) {
    return x.isbn === y.isbn ? true : false;
}

const bb1 = { isbn: 123, title: "JS" };
const bb2 = { isbn: 123, title: "JS" };

console.log(Compared(bb1, bb2)); 
console.log(Comp(bb1, bb2));     
console.log("-----------------------------");

const keys = Object.keys(bb1); 
console.log(keys);


const colors = ['red', 'green', 'blue'];
const [, item2] = colors;
console.log(`item2 = ${item2}`);


const l1 = {
    isbn: 1234,
    title: 'java',
    authors: {
        firstname: 'Jon',
        lastname: 'Smith'
    }
};
const { isbn, title } = l1;
console.log(isbn);  
console.log(title);


const { authors: { firstname } } = l1;
console.log(firstname);
