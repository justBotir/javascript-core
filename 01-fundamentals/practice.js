// // * Nazariy savollar:
// // 1 - masala
// // var hiostinga tushadi let va const tushmaydi, const o'zgarmas qiymat qabul qiladi

// // 2-masala - bilmadim

// // 3 - masala - null qiymat yoq undifined da qiymat boladi xotirada joy egallaydi.

// // 4- masala -
// console.log(typeof null); //  aniq bilmadim

// // 5 - masala ✅
// a = 3;
// b = "3";

// if (a == b) {
//   console.log("teng");
// }

// if (a === b) {
//   console.log("type lari ham teng");
// } else {
//   console.log("type teng emas");
// }

// // 6 - masala ->  || - yoki belgisi, ?? menimcha if o'rnida ternary operatorda ishlatiladi ❌

// let n = 0;
// n || "default"; // 'default' - falsy!
// n ?? "default"; // 0 - 0 null/undifined emas!

// // . || -> falsy qiymatda (0, ', false, null, undifined) = o'ng tomondagini qabul qilladi
// // . ?? -> FAQAT null va undifined da o'ng tomonga o'tadi

// // * Amaliy savollar

// // 1 - masala

// console.log(typeof null); // object ✅
// console.log(typeof undefined); // undifined ✅
// console.log(typeof NaN); // NuN ❌ number✅
// // NaN — "Not a Number" lekin typeof "number" qaytaradi!
// // Bu ham JSning o'ziga xos xususiyati

// // 2- masala

// console.log(5 + "3"); // 8 - ( + string ko'rsa, concatenation qiladi! )
// console.log(5 - "3"); // 2
// console.log(true + true); // true ❌ 2 ✅ ( true → 1 ga aylanadi, 1+1=2)
// console.log(null + 1); // 1

// // 3 - masala

// let a = 0;
// let b = a || "default";
// let c = a ?? "default";
// console.log(b); // 0 ❌ default ✅
// console.log(c); // default ❌ 0 ✅
// //  6-nazariy savolni to'g'ri tushunsang, bu ham to'g'ri bo'lardi!

// // 4 - masala

// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }
// const fn = outer();
// fn(); // 10 ✅
