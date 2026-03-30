// ! Nazariy

// ? 1. Creation phase da nima bo'ladi? var va let da farq bormi?
// Ichki funksiya tashqi funksiyani o'qiy olishi va amal bajara olishi. var hoistinga tushadi

// ? 2. Call Stack nima? Execution Context u bilan qanday bog'liq?
// Call Stack — bu funksiyalar navbati.
// Har funksiya chaqirilganda Stack ga qo'shiladi, tugaganda Stack dan chiqariladi.
/*
first() → [first]
  second() → [first, second]
    third() → [first, second, third]
    third tugadi → [first, second]
  second tugadi → [first]
first tugadi → []
*/

// ? 3. Bu kod qanday tartibda ishlaydi? Creation va Execution phase larni tushuntir:

console.log(a); // undifined
var a = 5;
console.log(a); // 5

// ? 4. Global Execution Context da this nimaga teng?
console.log(this); // {}
// Browserda:
// Global execution context da this → window

// Node.jsda:
// this → module object ({}), global emas

// ! Amaliy

// ? 1. Bu kod nima chiqaradi va nima uchun?

console.log(b);
console.log(c);

var b = 10; // undifined // var hoistinga tushadi va error bermaydi
let c = 20; // ReferenceError // let hoistinga tushmaydi

// ? 2. Bu kod nima chiqaradi?

function first() {
  console.log("first");
  second();
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
}

first(); // first second third

// ? 3. Bu kod nima chiqaradi va nima uchun?

var x = 1;

function outer() {
  var x = 2;
  function inner() {
    var x = 3;
    console.log(x);
  }
  inner();
  console.log(x);
}

outer();
console.log(x);

// 3 2 1   // oldin ichki keyin tashqi va oxirida global o'zgaruvchilar console ga chiqadi
