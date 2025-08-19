เร
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("นักเรียนทั้งหมด:", students);


students.push("Frank");      
students.unshift("Zara");   

console.log("หลังเพิ่ม:", students);


students.pop();            
students.splice(2, 1);     

console.log("หลังลบ:", students);

let groupA = students.slice(0, 2); 
console.log("กลุ่ม A:", groupA);


let upperNames = students.map(name => name.toUpperCase());
console.log("ชื่อพิมพ์ใหญ่:", upperNames);

let longNames = students.filter(name => name.length > 3);
console.log("ชื่อที่ยาวกว่า 3 ตัว:", longNames);


let dName = students.find(name => name.startsWith("D"));
console.log("ชื่อที่ขึ้นต้นด้วย D:", dName);


if (students.includes("Alice")) {
  console.log("Alice อยู่ในรายชื่อที่ตำแหน่ง:", students.indexOf("Alice"));
}


function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

let studentGroups = chunkArray(students, 2);
console.log("กลุ่มที่แบ่งได้:", studentGroups);


students.forEach((name, index) => {
  console.log(`คนที่ ${index + 1}: ${name}`);
});
