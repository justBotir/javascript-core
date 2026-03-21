// ! Nazariy

// ? 1. function declaration va function expression ning asosiy farqi nima?
// function expression da funcsiya biror bir ozgaruvchiga olinadi declaration da function deb yozib ketaveramiz
// Declaration → hoisting ga tushadi (tepada chaqirsa bo'ladi)
// Expression  → hoisting ga tushmaydi (tepada chaqirib bo'lmaydi)

// ? 2. Closure nima? O'z so'zing bilan tushuntir.
// Ichki funskiya tashqi tashqi function ni ishlata olishi

// ? 3. Callback funksiya nima? Qachon kerak bo'ladi?
// hoistinga tushadi. xohlagan joyda ishlatsa boladi

// ? 4. Constructor function da new operatori nima qiladi? new yozilmasa nima bo'ladi?
// new qilganda 3 ta ish bo'ladi:
// 1. Bo'sh object yaratiladi{}
// 2. this -> shu objectga bog'lanadi
// 3. Object qaytariladi

// new yozilmasa: this -> global object (window) bo'ladi

// ? 5. Arrow function va oddiy funksiyaning farqi nima?
// function sozi bomaydi

// Arrow function -> o'zining this i yo'q!
// Oddiy function -> o'zining this i bor.

// ! Amaliyot

// ? 1. Bu kod nima chiqaradi?

function outer() {
  let x = 10;
  return function () {
    x += 5;
    console.log(x);
  };
}
const fn = outer();
fn(); // 15
fn(); // 20
fn(); // 25

// ? 2. Bu kod nima chiqaradi?

sayHi(); // Hi!
greet(); // ReferenceError

function sayHi() {
  console.log("Hi!");
}

let greet = function () {
  console.log("greet!");
};

// ? 3. Shu vazifani yech: counter funksiyasini yoz. Har chaqirilganda 1 ga oshsin. reset() chaqirilganda 0 ga qaytsin.

// To'g'ri yechim — Closure bilan:
function createCounter() {
  let x = 0;
  return {
    counter: function () {
      x += 1;
      console.log(x);
    },
    reset: function () {
      x = 0;
      console.log(x);
    },
  };
}

const c = createCounter();
c.counter(); // 1
c.counter(); // 2
c.reset(); // 0

// ? 4. multiplyBy(n) funksiyasini yoz. U funksiya qaytarsin. Qaytgan funksiya sonni n ga ko'paytirsin.
// multiplyBy(3)(5) → 15
// multiplyBy(2)(10) → 20

function multiplyBy(n) {
  return function outer(x) {
    console.log(n * x);
  };
}

multiplyBy(3)(5);
multiplyBy(2)(10);
// tugadi
