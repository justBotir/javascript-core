// ! Execution Context - bu JavaScript kodini ishga tushirib beruvchi muhit

//! JS ishga tushganda eng birinchi yaratiladigan muhit
//! hamma kod shu yerda boshlanadi

// * Execution context 2 turga bo'linadi:
// Global execution context
// Function execution context

// * Execution context 2 bosqichda ishga tushadi.
// 1. Creation phase - Execution muhiti yaratiladi, ya'ni o'zgaruvchilar va boshqalar xotirada paydo bo'ladi.
// 2. Execution phase - Execution muhitdagi barcha amallar ketma-ketlikda bajariladi.

// * Execution context 2 turga bo'linadi:
// Global execution context
let a = 10;
console.log(a);

// Function execution context
function test() {
  console.log("hello");
}

test(); // Har safar function chaqirilsa, yangi execution context yaratiladi.

// * Execution context 2 bosqichda ishga tushadi.
// 1. Creation phase - Execution muhiti yaratiladi, ya'ni o'zgaruvchilar va boshqalar xotirada paydo bo'ladi.
console.log(b); // b → undefined
var b = 10;

// 2. Execution phase - Execution muhitdagi barcha amallar ketma-ketlikda bajariladi.
var c = 10;
console.log(c); // 10

// ! Scope — variable qayerda ishlatilishi mumkinligini bildiradi.

let d = 10;

function test() {
  let e = 20;
}
// d → global scope
// e → function scope

// ! Closure - bu funksiya tashqi scope dagi o'zgaruvchini eslab qolishi

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn(); // 1
fn(); // 2

// ! Qisqa xulosa

//* Execution Context:
// JS kod ishlaydigan muhit

//* Bosqichlari:
// 1 Creation phase
// 2 Execution phase

//* Closure:
// funksiya tashqi scope dagi variable ni eslab qoladi
