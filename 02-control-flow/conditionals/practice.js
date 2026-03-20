// // ! Nazariy takrorlash

// // ? 1 - masala - switch da break yozilmasa nima bo'ladi? Misol bilan.
// // To'gri keladigan case dan keyingi hammasini qabul qiladi

// let a = 1 + 2;

// switch (a) {
//   case 3:
//     console.log("1 To'gri");
//   case 2:
//     console.log("2 To'gri");
//   case 3:
//     console.log("3 To'gri");
//   case 4:
//     console.log("4 To'gri");
// }

// // ? 2. Bo'sh array [] va bo'sh string "" — ikkalasi ham falsy emasmi? Farqi nima?
// // String falsy qiymat, array truthy qiymat.

// // ? 3. ?. (Optional Chaining) nima uchun kerak? Usiz nima muammo bo'ladi?
// // Optionat chaining elon qilinmagan o'zgaruvchini chaqirganda error chiqmasligi uchun ishlatiladi.

// // ? 4. && va || operatorlari faqat true/false qaytaradimi? Quyidagi natija nima?
// console.log(0 || "salom"); // false
// console.log(5 && "dunyo"); // false

// // ! Amaliy takrorlash

// // ? 1. Bu kod nima chiqaradi?

// let a1 = null;
// let b = (a1 ?? 0) || "default";
// console.log(b); // default

// // ? 2. Bu switch da nima chiqaradi va nima uchun?

// let x = 2;
// switch (x) {
//   case 1:
//     console.log("bir");
//   case 2:
//     console.log("ikki");
//   case 3:
//     console.log("uch");
//   default:
//     console.log("default");
// } // ikki, uch, default  => chunki break yoq bittasi to'g'ri kesa toxtaydigan

// // ? *3.** Shu funksiyani yoz: Foydalanuvchi yoshini qabul qiladi. 18 dan kichik — "Kino ko'rib bo'lmaydi" 18-65 — "Xush kelibsiz" 65 dan katta — "Pensioner chegirmasi bor"
// const age1 = 66;

// if (age1 > 0 && age1 < 18) {
//   console.log("Kino ko'rib bo'lmaydi");
// } else if (age1 >= 18 && age1 <= 65) {
//   console.log("Xush kelibsiz");
// } else {
//   console.log("Pensioner chegirmasi bor");
// }

// // ! XATOLARNI TUZATISH

// console.log(0 || "salom"); // "salom" ❌ (sen: false)
// console.log(5 && "dunyo"); // "dunyo" ❌ (sen: false)

// // Muhim qoida:
// // || → birinchi TRUTHY qiymatni qaytaradi
// // && → birinchi FALSY yoki oxirgi qiymatni qaytaradi
// // true/false emas — qiymatning o'zini qaytaradi!
