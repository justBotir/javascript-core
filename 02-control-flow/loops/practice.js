// // ! Nazariy savollar

// // ? 1. while va do...while ning asosiy farqi nima? Qachon do...while ishlatish kerak?
// // While oldin shartni bajarib keyin ishlaydi, do While bir marta aylanib keyin shartga mos ishlaydi, aynan qachon do While ishlatish kerakligini bilmadim.

// // ? 2. break va continue ning farqi nima?
// // break - berilgan shartga mos bo'sa shu joyida to'xtaydi. contenue - berilgan shart ga mos bo'lsa shu javobni tashlab ketadi.

// // ? 3. for siklining 3 qismi (let i = 0; i < 3; i++) — har biri qachon ishlaydi?
// //  i - o'zgaruvchi, i < 3 - shart va i++ shartga qarab ortib boradi

// // ? 4. Bu for sikli to'g'rimi?
// for (let i = 0; ; i++) {
//   if (i > 5) break;
//   console.log(i);
// } // Ha to'g'ri sharti if da berilgan

// // ! Amaliy

// // ? 1. Bu kod nima chiqaradi?

// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue; // faqat 3 o'tkazib yuboriladi
//   console.log(i); // 0, 1, 2, 4
// }

// // ? 2. Bu kod nima chiqaradi?

// let i = 5;
// while (i) {
//   console.log(i);
//   i--; // 5, 4, 3, 2,1, 0
// }

// // ? 1 dan 100 gacha sonlarni qo'sh. Natijani console.log qil.
// // Lekin var ishlatma! — var ni unutib yubor

// sum = 0;
// for (i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// // * formula: S = n(n + 1) / 2 - Agar formula bn ishlansa

// // ? 1 dan 20 gacha sonlarni chiqar. Lekin 3 ga bo'linadigan sonlarda "Buzz" chiqar, son o'rniga.

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // ! Xato kamchiliklar from AI

// // 1

// // // Masalan: foydalanuvchidan input olish
// // // Kamida bir marta so'rash kerak!
// // do {
// //   parol = prompt("Parol kiriting:");
// // } while (parol !== "1234");
// // // Avval so'raydi, keyin tekshiradi — mantiqan to'g'ri!

// // 3
// for (let i = 0; i < 3; i++);
// //   1️⃣ BIR MARTA ishlaydi — boshida
// //   2️⃣ HAR AYLANISHDA tekshiriladi
// //   3️⃣ HAR AYLANISH OXIRIDA ishlaydi
