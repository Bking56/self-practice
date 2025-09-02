// // const studentScores = [
// //     {name: 'Alice', score: 85},
// //     {name: 'Bob', score: 92},
// //     {name: 'Charlie', score: 68},
// //     {name: 'David', score: 55},
// //     {name: 'Eve', score: 78},
// // ];
 
// // function getPassingNames(scores) {
// //     return scores
// //         .filter(student => student.score >= 70)  
// //         .map(student => student.name.toUpperCase());  
// // }
 
// // const passingNames = getPassingNames(studentScores);
// // console.log(passingNames);
 
// // const array14 = [1,30,4,21,100000]
// // console.log(array14.sort((a,b) => a - b))

// // const stds = [
// //   { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
// //   { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
// //   { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
// // ];

// // stds.sort((a, b) => b.name.length - a.name.length);

// // console.log("ชื่อนักเรียนที่ยาวที่สุดคือ:", stds[0].name);


// const stds = [
//   { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
//   { id: 5, name: "pornchai", email: "pornchai@sit.kmutt.ac.th" },
//   { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
// ];

// stds.sort((a, b) => {
//   const nameA = a.name;
//   const nameB = b.name;
//     if (nameA > nameB) {
//         return -1
//     }else if (nameB>nameA) {
//         return 1
        
//     }else {
//         return 0
//     }

// });

// console.log(stds);

function echo(value) {
  return value
}
function getLength(str) {
  return str.length
}
const TAX = 0.07
let x = 1
class books {
    constructor(isbn,title) {
        this.isbn =isbn
        this.title =title
        
    }
}
//export list
export { books,echo, getLength as default, TAX as VAT }
 