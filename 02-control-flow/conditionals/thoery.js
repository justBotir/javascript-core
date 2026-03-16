// // ! Conditionals
// // * Conditional — Shartga qarab kod qaysi yo'nalishda ketishini belgilaydigan tuzilma.
// // Har bir dasturda qaror qabul qilish kerak bo'ladi — buning uchun conditionals ishlatiladi.

// // 📌 Conditionals ning vazifasi nima?
// // 1️⃣ Shartga qarab turli kod bloklarini ishlatish
// // 2️⃣ Dasturga "aql" berish — har xil holatlarga har xil javob
// // 3️⃣ Xatolarni oldini olish
// // 4️⃣ Foydalanuvchi harakatiga qarab natija berish

// // 📌 Qayerda ishlatiladi?
// // Login tekshirish, ruxsat berish/bermaslik,
// // foydalanuvchi yoshi, mahsulot narxi, o'yin holati va h.k.

// // =============================================================

// // ! if — Asosiy shart

// let yosh = 20;

// if (yosh >= 18) {
//   console.log("Voyaga yetgan"); // shart true bo'lsa ishlaydi
// }

// // Agar shart false bo'lsa hech narsa chiqmaydi

// // ! if / else

// let harorat = 35;

// if (harorat > 30) {
//   console.log("Issiq — konditsioner yoqing");
// } else {
//   console.log("Normal havo");
// }

// // * else — if sharti false bo'lganda ishlaydigan zaxira blok

// // ! else if — Ko'p shart

// let ball = 75;

// if (ball >= 90) {
//   console.log("A'lo — 5");
// } else if (ball >= 70) {
//   console.log("Yaxshi — 4"); // bu ishlaydi
// } else if (ball >= 50) {
//   console.log("Qoniqarli — 3");
// } else {
//   console.log("Qoniqarsiz — 2");
// }

// // * Shartlar YUQORIDAN PASTGA tekshiriladi
// // * Birinchi true bo'lgani ishlaydi, qolganlari o'tkazib yuboriladi

// // ! Nested if — if ichida if

// let login = true;
// let admin = false;

// if (login) {
//   if (admin) {
//     console.log("Admin paneliga xush kelibsiz");
//   } else {
//     console.log("Oddiy foydalanuvchi sahifasi");
//   }
// } else {
//   console.log("Avval tizimga kiring");
// }

// // =============================================================

// // ! switch / case — Aniq qiymat tekshirish

// let kun = "Juma";

// switch (kun) {
//   case "Dushanba":
//     console.log("Hafta boshlandi!");
//     break;
//   case "Juma":
//     console.log("Dam olish yaqin!"); // bu ishlaydi
//     break;
//   case "Yakshanba":
//     console.log("Dam olish kuni");
//     break;
//   default:
//     console.log("Oddiy ish kuni"); // hech bir case to'g'ri kelmasa
// }

// // * break — keyingi case ga o'tishni to'xtatadi
// // * Agar break yozilmasa — barcha quyidagi case lar ham ishlaydi! (fall-through)
// // * default — else ga o'xshaydi, oxirda yoziladi

// // ! switch — bir necha case uchun bir xil natija

// let rang = "yashil";

// switch (rang) {
//   case "qizil":
//   case "to'q sariq": // ikkalasi bir xil natija beradi
//     console.log("Issiq rang");
//     break;
//   case "yashil":
//   case "ko'k":
//     console.log("Sovuq rang"); // bu ishlaydi
//     break;
//   default:
//     console.log("Noma'lum rang");
// }

// // =============================================================

// // ! Ternary operator — ? : (Qisqa if/else)

// // * Formula: shart ? true_qiymat : false_qiymat

// let narx = 50000;
// let holat = narx > 100000 ? "Qimmat" : "Arzon";
// console.log(holat); // "Arzon"

// // * Bir qatorlik if/else — faqat oddiy shartlarda ishlating
// // * Murakkab shartlarda o'qilishi qiyinlashadi — u holda oddiy if/else yozing

// let saldo = 5000;
// let xabar = saldo > 0 ? "Hisob to'liq" : "Hisob bo'sh";
// console.log(xabar); // "Hisob to'liq"

// // ! Ternary zanjirlash — (ishlatishdan ehtiyot bo'ling, o'qilishi qiyinlashadi)

// let baho = 85;
// let daraja =
//   baho >= 90
//     ? "A'lo"
//     : baho >= 70
//       ? "Yaxshi"
//       : baho >= 50
//         ? "Qoniqarli"
//         : "Qoniqarsiz";

// console.log(daraja); // "Yaxshi"

// // =============================================================

// // ! Mantiqiy operatorlar — && || !

// // * && (AND) — Ikkalasi ham true bo'lishi kerak

// let yoshmi = true;
// let studentmi = true;

// if (yoshmi && studentmi) {
//   console.log("Talaba chegirmasi bor"); // ishlaydi
// }

// // * || (OR) — Bittasi true bo'lsa yetarli

// let naqd = false;
// let karta = true;

// if (naqd || karta) {
//   console.log("To'lov mumkin"); // ishlaydi
// }

// // * ! (NOT) — Teskari qiymat

// let bloklangan = false;

// if (!bloklangan) {
//   console.log("Foydalanuvchi faol"); // ishlaydi
// }

// // ! Kombinatsiyalash

// let loggedIn = true;
// let verified = true;
// let banned = false;

// if (loggedIn && verified && !banned) {
//   console.log("Xush kelibsiz!"); // ishlaydi
// }

// // =============================================================

// // ! Truthy va Falsy — JS ning o'ziga xos xususiyati

// // * Falsy qiymatlar — if da FALSE sifatida hisoblanadi:
// // false, 0, "", null, undefined, NaN

// // * Truthy qiymatlar — qolgan hamma narsa TRUE hisoblanadi

// let ism = "";
// if (ism) {
//   console.log("Ism bor");
// } else {
//   console.log("Ism kiritilmagan"); // ishlaydi — "" falsy
// }

// let raqam = 0;
// if (raqam) {
//   console.log("Raqam bor");
// } else {
//   console.log("Raqam 0 yoki yo'q"); // ishlaydi — 0 falsy
// }

// let arr = []; // Bo'sh array — TRUTHY!
// if (arr) {
//   console.log("Array mavjud"); // ishlaydi
// }

// // =============================================================

// // ! ?? (Nullish Coalescing) — faqat null yoki undefined bo'lsa ishlaydi

// let foydalanuvchi = null;
// let ko_rsatiladigan = foydalanuvchi ?? "Mehmon";
// console.log(ko_rsatiladigan); // "Mehmon"

// // * || bilan farqi:
// let nol = 0;
// console.log(nol || "standart"); // "standart" — chunki 0 falsy
// console.log(nol ?? "standart"); // 0 — chunki 0 null/undefined emas

// // ! ?. (Optional Chaining) — xavfsiz murojaat

// const user = {
//   name: "Ali",
//   // address yo'q
// };

// console.log(user.address?.city); // undefined — xato bermaydi
// console.log(user.address.city); // TypeError: Cannot read properties of undefined

// // * Ikki operatorni birga ishlatish
// const shahar = user?.address?.city ?? "Shahar ko'rsatilmagan";
// console.log(shahar); // "Shahar ko'rsatilmagan"

// // =============================================================

// // ! Amaliy misollar

// // * 1 — Login tekshirish
// function checkLogin(username, password) {
//   if (!username || !password) {
//     return "Username va parol kiriting";
//   }

//   if (username === "admin" && password === "1234") {
//     return "Xush kelibsiz, Admin!";
//   } else {
//     return "Username yoki parol noto'g'ri";
//   }
// }

// console.log(checkLogin("admin", "1234")); // Xush kelibsiz, Admin!
// console.log(checkLogin("", "1234")); // Username va parol kiriting

// // * 2 — Chegirma hisoblash
// function chegirma(narx, member) {
//   let discount = 0;

//   if (narx > 500000 && member) {
//     discount = 20; // 20% chegirma
//   } else if (narx > 500000 || member) {
//     discount = 10; // 10% chegirma
//   }

//   return narx - (narx * discount) / 100;
// }

// console.log(chegirma(600000, true)); // 480000
// console.log(chegirma(600000, false)); // 540000
// console.log(chegirma(300000, false)); // 300000

// // * 3 — Trafik chiroq
// function trafikChiroq(rang) {
//   switch (rang) {
//     case "qizil":
//       return "To'xtang!";
//     case "sariq":
//       return "Tayyor bo'ling";
//     case "yashil":
//       return "Yuring!";
//     default:
//       return "Noma'lum signal";
//   }
// }

// console.log(trafikChiroq("yashil")); // Yuring!
// console.log(trafikChiroq("qizil")); // To'xtang!

// // * 4 — Foydalanuvchi profili
// const profile = null;

// const profileName = profile?.name ?? "Noma'lum foydalanuvchi";
// const profileAge = profile?.age ?? "Yosh ko'rsatilmagan";

// console.log(profileName); // Noma'lum foydalanuvchi
// console.log(profileAge); // Yosh ko'rsatilmagan
