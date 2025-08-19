// // // function multiple(a,b) {
// // //     return a*b
    
// // // }
// // // function dosomething(x) {
// // //     return x
    
// // // }
// // // const y = dosomething(multiple)
// // // console.log(y(2,3));


// // function  saygoodbye() {
// //     return "good bye"
    
// // }
// // function dosomething() {
// //     return saygoodbye
    
// // }
// // let a = dosomething()
// // console.log(dosomething()());
// // console.log(a());
// // function myFunc(theObject) {
// //   theObject.model = "A9999"
// //   theObject.price =100
// // }
// // const product = { model: "A1001", price: 199 }
// // console.log(product.model)
// // myFunc(product);
// // console.log(product.model)
// // console.log(product.price);
// //  // "A9999"


// function getEverything(...params) {
//     return params;
// }

// let result = getEverything(1, "hello", true, { name: "B" }, [10, 20]);

// console.log(result);
// console.log(result.length);


// function getsum(...params){
//     total = 0
//     for (i of arguments) {
//         total = total + i
//     }
//     return total



// Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase and values representing 
// the frequency of occurrences of each word with ignore case in the sentence. If the input string is null or undefined, return undefined.
// // }
function getFreqOfWords(sentence){
    if (sentence===null || sentence === undefined) {
        return undefined  
        
    }
     const words = sentence.toLowerCase().split(/\s+/); 
     const read ={}
     for (const word of words) {
       if (word in read) {
          read[word]++;
      } else {
         read[word] = 1;
     }
  }

  return read;
}
    
   console.log(getFreqOfWords("Do your best just do it"));
   console.log(getFreqOfWords("Today is present and present is your gift"));
   console.log(getFreqOfWords(null));
   console.log(getFreqOfWords(undefined));
     
     
