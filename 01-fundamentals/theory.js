// //* Scope in JavaScript

// //! global scope
// // Global scope - bu o'zgaruvchilar va funksiyalar global scope da e'lon qilingan bo'lsa, ular butun dastur bo'ylab mavjud bo'ladi.

// let global_variable = "hello";

// function func() {
//   global_variable = "world";
//   console.log(global_variable);
// }

// func();
// // console.log(global_variable); // world

// //! function scope
// // Function scope - bu funktsiyalar ichida e'lon qilingan o'zgaruvchilar faqat shu funktsiya ichida mavjud bo'ladi.

// function func() {
//   let function_variable = "hello";
//   console.log(function_variable);
// }

// func();
// // console.log(function_variable); // ReferenceError: function_variable is not defined

// //! block scope
// // Block scope - bu if, for, while kabi bloklar ichida e'lon qilingan o'zgaruvchilar faqat shu blok ichida mavjud bo'ladi.

// if (true) {
//   let block_variable = "true";
//   console.log(block_variable);
// }
// // console.log(block_variable); // ReferenceError: block_variable is not defined

// //! lexical scope
// // Lexical scope - bu funktsiyalar ichida boshqa funktsiyalar bo'lishi mumkin va ichki funktsiyalar tashqi funktsiyalarning o'zgaruvchilariga kirish imkoniyatiga ega bo'ladi.

// function outer() {
//   let outer_variable = "hello";
//   function inner() {
//     let inner_variable = "world";
//     console.log(outer_variable);
//     console.log(inner_variable);
//   }
//   inner();
// }

// outer();
// // console.log(outer_variable); // ReferenceError: outer_variable is not defined
// // console.log(inner_variable); // ReferenceError: inner_variable is not defined

// //* Data types in JavaScript

// //! Primitive data types: string, number, bigint, boolean, null, undefined, symbol - 7 ta
// let string = "Hallo"; // string
// let number = 42; // number
// let bigint = 9007199254740991n; // bigint
// let boolean = true; // boolean
// let null_value = null; // null
// let undefined_value = undefined; // undefined
// let symbol = Symbol("symbol"); // symbol

// //! Non-primitive data types: object, array, function, class, date, map, set...
// let object = { name: "John", age: 30 }; // object
// let array = [1, 2, 3, 4, 5]; // array
// let function_value = function () {}; // function
// class MyClass {} // class
// let date = new Date(); // date
// let map = new Map(); // map
// let set = new Set(); // set

// // * Operators in JavaScript

// console.log(5 + "5"); // 55 (string qo'shiladi)
// console.log(5 - "5"); // 0 (string number ga aylanadi)
// console.log(5 * "5"); // 25 (string number ga aylanadi)
// console.log(5 / "5"); // 1 (string number ga aylanadi)
// console.log(5 % "5"); // 0 (string number ga aylanadi)
// console.log(5 ** "5"); // 3125 (string number ga aylanadi)

// // * Variables in JavaScript
// // Variables - bu ma'lumotlarni saqlash uchun ishlatiladigan konteynerlardir. JavaScriptda 3 ta variable declaration mavjud: var, let, const.

// let name = "John"; // let
// const age = 30; // const
// var city = "New York"; // var

// let number = prompt("Enter a number:"); // tashqaridan qiymat qabul qilish
// console.log(number);

// //* Ternary operator
// // Ternary operator - bu shartli ifoda bo'lib, u shartga qarab ikki xil natija qaytaradi.

// const club = 15;
// const is_true = club >= 15 ? "Real madrid is won UCL 15 times" : "Halal Madrid";
// console.log(is_true);

// // * Nullish operator
// // Null yoki undefined o'rniga boshqa qiymat berish uchun ishlatiladi.

// let club;
// let best_club = club ?? "Real Madrid";
// console.log(best_club); // Real Madrid

// // * String konvertatsiyasi
// // String() - bu qiymatni stringga aylantiradi.

// let value = true;
// alert(typeof value);
// value = String(value);
// alert(typeof value);

// // * Number konvertatsiyasi
// // Number() - bu qiymatni numberga aylantiradi.

// let value = "123";
// alert(typeof value);
// value = Number(value);
// alert(typeof value);

// // * Numberda Istisnolar
// // har xil type dagi qiymatni numberga aytlantirishdagi sitisnolar

// let value = "123";
// alert(Number("   123   ")); // 123
// alert(Number("123z")); // NaN
// alert(Number(true)); // 1
// alert(Number(false)); // 0

// // * Booleanda Istisnolar
// // har xil type dagi qiymatni booleanga aytlantirishdagi isitisnolar

// let value = "123";
// alert(Boolean(1)); // true
// alert(Boolean(0)); // false
// alert(Boolean("Salom")); // true
// alert(Boolean()); // false
