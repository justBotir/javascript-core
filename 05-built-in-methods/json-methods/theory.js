// ! JSON - bu Object ni string formatidagi ko'rinishi (JSON - JavaScript Object Notation)
// Frontend Backend bir biriga malumotlarni JSON sifatida yuboradi

// * Object dan JSONga o'girish
const obj = {
  name: "Ali",
  age: 22,
};

console.log(JSON.stringify(obj));

// * Agar malumot ko'p bo'lsa ularni ajratib tartiblash uchun
console.log(JSON.stringify(obj, null, 2)); // nul berilishi shart, 2 - boshidan qancha space tashlash kerakligi (odatda 2 yoki 4 beriladi)

// * JSON ni objectga qaytarish (JSON.parse)

const json = JSON.stringify(obj, null, 2);
console.log(JSON.parse(json));

// * massiv string ichida bolsa massiv holatiga qaytarish (JSON.parse bilan)
let numbers = "[1, 2, 3, 4, 5]";
numbers = JSON.parse(numbers);
console.log(typeof numbers);

// Teskari jarayon
const arr = [1, 2, 3];
const str = JSON.stringify(arr);
console.log(str); // "[1,2,3]"
