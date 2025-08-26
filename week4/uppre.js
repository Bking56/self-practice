// // const words = ['mango','apple','mangosteen','orange']
// // let upper = words.map((word) => word.toUpperCase())
// // console.log(upper);

// // 073 จุดต่ำสุด
 
// // const students = [
// //   { id: 1, name: "Somchai Jaidee" },
// //   { id: 2, name: "Suda Deejai" },
// //   { id: 3, name: "John Smith" },
// // ]
 
// // const result = students.map((value) => value.id) 
// // const result1 = map.filter(map => map % 2 == 0)
// // console.log(result)

// // console.log(result1);

// const items = ["Apple", "Banana", "Cherry", "Date", "Fig"];
// items.unshift("Mango", "Papaya");
// console.log(items.shift("5555"));
// console.log(items.push("bossza","67130500073"));
// console.log(items.pop());
// console.log(items.length);
// console.log(items);


// // const result = items
// //   .filter(item => item.toLowerCase().includes("a"))
// //   .map(item => item.toUpperCase());

// // console.log(result); 
// // // ผลลัพธ์: ["APPLE", "BANANA", "DATE"]


 
// const words = ['mango', 'apple', 'mangosteen', 'orange','mangoes'];
// const mangoWords = words.filter(word => word.includes('mango'));
// const upper = mangoWords.map(word => word.toUpperCase());
//     if (words.includes("apple")) {
//          console.log("มีเเอปเปิ้ล");
        
//     }else{
//        console.log("ไม่มีเเอปเปิ้ล");
//           }
// console.log(upper);
// const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
// console.log(words1.includes("Apple")) 
// console.log(words1.includes("apple"))
// console.log(words1.includes("app")) 




// const cart = [
//     {productId: 1001, price: 500, quantity: 2 },
//     {productId: 1002, price: 10, quantity: 3},
//     {productId: 1003, price: 5, quantity: 10}
// ]
 
// console.log({"total" : cart.reduce((sum, value) => (value.price * value.quantity) + sum, 0)})


const words = ['mango','apple','mangosteen','orange']
words.splice(2,1,"banana")
console.log(words)
words.splice(3,2)
console.log(words);
words.splice(2,0,"melon","cherry")
console.log(words);


