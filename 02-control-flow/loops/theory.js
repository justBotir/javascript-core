// // ! While - shart tekshiriladi, agar shart rost bo‘lsa, kod ishlaydi. Shart yolg‘on bo‘lganda to‘xtaydi.

// let a = 3;

// // * O'sish
// while (a < 10) {
//   alert(a);
//   a++;
// }

// // * Kamayish
// while (a > 0) {
//   alert(a);
//   a--;
// }

// // * Ternery operator
// let a1 = 3;
// while (a1) alert(a1--);

// // ! Do While - bu kodni kamida bir marta bajarib, keyin shartni tekshiradigan sikl.

// let b = 0;

// do {
//   alert(b);
//   b++;
// } while (b < 3);

// // ! For - boshlang‘ich qiymat, shart va o‘zgarish orqali ma’lum miqdorda takrorlashni amalga oshiradigan sikl.

// for (let i = 0; i < 3; i++) {
//   alert(i);
// }

// let c = 0;
// for (; c < 3; c++) {
//   alert(c);
// }

// let d = 0;
// for (; d < 3; ) {
//   alert(d);
//   d++;
// }

// let i = 0;
// for (;;) {
//   // Cheksiz aylanadigan sikl
//   alert(i++);
// }

// // * Break

// let sum = 0;

// while (true) {
//   let value = +prompt("Raqam kiriting: ");
//   if (!value) break;
//   sum += value;
// }
// alert(`Summa: ` + sum);

// // * Continue

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   alert(i);
// }
