// // ! JS Objects
// // * Obektlar key va value dan iborat

// // *  1- usuli
// let user = new Object({
//   name: "John",
//   age: 30,
// });

// console.log(user);

// // * Qulay usuli
// const key = "name";
// let user2 = {
//   name: "John",
//   age: 30,
//   "full name": "John Doe", //* Object ichida istalgan data typeni key sifatida ishlatish mumkun
// };

// console.log(user2);
// console.log(user2.name); //* Object keyiga murojat qilish

// user2.is_Admin = true; //* Object ichiga key va value qo'shish
// console.log(user2); // output: { name: 'John', age: 30, is_Admin: true }

// delete user2.is_Admin;
// console.log(user2); // output: { name: 'John', age: 30 }

// console.log(user2["full name"]); // output: John Doe

// delete user2["full name"];
// console.log(user2); // output: { name: 'John', age: 30 }

// user2[key] = true;
// console.log(user2); // output: { name: 'John', age: 30, name: true }

// // * Objectni qaytaruvchi funksiya
// function objTo(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// console.log(objTo("John", 30)); // output: { name: 'John', age: 30 }

// // * Object ichida key mavjudligini tekshirish
// const user3 = {
//   name: "Ali",
// };

// console.log("key" in user3); // output: true

// //* Object in for
// for (let key in user3) {
//   console.log(key); // output: name
// }

// // * Object keylari raqamlar bo'lsa consolga tartibli holda chiqadi
// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "United Kingdom",
//   1: "USA",
// };

// for (let code in codes) {
//   console.log(code); // output: 1, 41, 44, 49
//   console.log(codes[code]); // output: Germany, Switzerland, United Kingdom, USA
// }

// // * Object nusxalash

// // * 1-usul
// const obj = {
//   name: "John",
// };

// const copy_obj = obj;
// copy_obj.name = "Ali";
// console.log(copy_obj); // output: { name: 'Ali' }
// console.log(obj); // output: { name: 'Ali' }
// // ! bunaqa nusxalash tavsiya etilmaydi

// //* 2-usul
// const obj = {
//   name: "John",
// };

// const copy_obj = Object.assign({}, obj);
// copy_obj.name = "Ali";
// console.log(copy_obj); // output: { name: 'Ali' }
// console.log(obj); // output: { name: 'John' }

// // * 3-usul
// const obj = {
//   name: "John",
// };

// const copy_obj = { ...obj };
// copy_obj.name = "Ali";
// console.log(copy_obj); // output: { name: 'Ali' }
// console.log(obj); // output: { name: 'John' }

// // ! ======================================================================

// /*
// Agar obyekt ichida oddiy ma'lumotlar bo‘lsa ular to‘liq ko‘chiriladi.
// Lekin ichida boshqa obyekt bo‘lsa, u to‘liq ko‘chirilmaydi.
// Faqat uning xotiradagi manzili (linki) olinadi.
// Natijada eski va yangi obyekt bitta ichki obyektga ulanib qoladi.
//  */

// // * Shunday holat bo'laslik uchun DEEP COPY qo'llaniladi
// /*
// ! Deep copy — bu obyektni ichidagi barcha ma’lumotlari bilan,
// ! hatto ichki (nested) obyektlarini ham alohida yangi nusxa qilib ko‘chirish jarayoni.
// ! Natijada yangi obyekt eski obyektga bog‘liq bo‘lmaydi.
// */

// // Deep copy ni ham 2 xil turi bor

// const obj = {
//   name: "Ali",
//   age: 22,
//   sizes: {
//     height: 170,
//     weight: 70,
//   },
// };

// // * 1- usul
// const copy_obj1 = structuredClone(obj); // Bu zamonaviy eng yaxshi usuli

// copy_obj1.sizes.height = 180;
// console.log(copy_obj1.sizes.height);  // 180
// console.log(obj.sizes.height); // 170

// // * 2-usul
// const copy_obj2 = JSON.parse(JSON.stringify(obj)); // Bu eski usul html orqali saytda error berishi mumkin

// copy_obj2.sizes.height = 180;
// console.log(copy_obj2.sizes.height);  // 180
// console.log(obj.sizes.height); // 170

// // ! OBJECT METHODS

// let user = {
//   name: "Ali",
//   age: 20,
// };

// console.log(Object.keys(user)); // ["name","age"] → Object kalitlarini array qilib beradi
// console.log(Object.values(user)); // ["Ali",20] → Object qiymatlarini array qilib beradi
// console.log(Object.entries(user)); // [["name","Ali"],["age",20]] → Key-value juftlarini array qilib beradi
