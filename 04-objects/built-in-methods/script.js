// // ! ============= JavaScript Built-in Methods & Type Conversion ==============

// // ! NUMBER METHODS

// let num = 123.456;

// console.log(num.toString()); // "123.456"
// console.log(num.toFixed(2)); // "123.46" → Ikki kasr xonali formatda chiqarish
// console.log(Math.round(num)); // 123 → Eng yaqin butun songa yaxlitlash
// console.log(Math.floor(num)); // 123 → Pastga yaxlitlash
// console.log(Math.ceil(num)); // 124 → Yuqoriga yaxlitlash
// console.log(Math.abs(-25)); // 25 → Absolyut qiymat
// console.log(Math.pow(2, 3)); // 8 → 2 ning 3-darajasi
// console.log(Math.sqrt(25)); // 5 → 25 ning kvadrat ildizi
// console.log(Math.random()); // 0 va 1 orasida tasodifiy son
// console.log(parseInt("45px")); // 45 → Butun songa aylantirish
// console.log(parseFloat("12.34px")); // 12.34 → Kasr songa aylantirish

// // * Sanoq sistemalariga o'tkazish
// let number = 255;
// console.log(number.toString(16)); // output: ff

// // ! Matematik amallar

// console.log(Math.floor(3.8)); // 3 -> Pastga yaxlitlaydi
// console.log(Math.ceil(3.1)); // 4 -> Yuqoriga yaxlitlaydi
// console.log(Math.round(3.4)); // 3 -> Matematik yaxlitlaydi o'ziga yaqin songa
// console.log(Math.trunc(3.9)); // 3 -> Yaqlitlamaydi shunchaki butun sondan qolgan qoldiqlarni olib tashaydi

// let number = 1.2345678;
// console.log(number.toFixed(2)); // 1.23 -> butun sondan keyin nechta qoldiq son qolishini belgilaydi
// console.log(1e500); // Infinity
// console.log(10000000n + 2); // TypeError
// console.log(0.1 + 0.2 == 0.3); // false
// console.log("1234ba" + 123); //

// // * musbat sonda 0 ni qisqa yozish
// let number1 = 1000;
// let number2 = 1e3; // 1 × 10^3 = 1000  --> e3 → 1000 ga ko‘paytiradi
// console.log(number1 == number2); // true

// // * juda kichik sonni qisqa yozish
// let num1 = 0.0005;
// let num2 = 5e-4; // 5 × 10^-4 = 0.0005  --> e-4 → 10000 ga bo‘ladi
// console.log(num1 == num2); // true

// // ! NUMBER EDGE CASES

// console.log(1e500); // Infinity → Juda katta son bo‘lgani uchun JavaScript uni Infinity ga aylantiradi
// console.log(10000000n + 2); // TypeError → BigInt ni oddiy number bilan qo‘shib bo‘lmaydi
// console.log(0.1 + 0.2 == 0.3); // false → Floating point xatolik
// console.log("1234ba" + 123); // "1234ba123" → String + number = string

// // =======================================================================

// // ! STRING METHODS

// let text = "JavaScript is powerful!";

// console.log(text.length); // 22 → Matn uzunligini chiqaradi
// console.log(text.toUpperCase()); // "JAVASCRIPT IS POWERFUL!" → Katta harflarga o‘tkazish
// console.log(text.toLowerCase()); // "javascript is powerful!" → Kichik harflarga o‘tkazish
// console.log(text.includes("powerful")); // true → So‘z mavjudligini tekshirish
// console.log(text.startsWith("Java")); // true → "Java" bilan boshlanishini tekshirish
// console.log(text.endsWith("!")); // true → "!" bilan tugashini tekshirish
// console.log(text.indexOf("is")); // 11 → "is" so‘zi qaysi indexda ekanligini topish
// console.log(text.replace("a", "4")); // "J4vaScript is powerful!" → Matn ichidagi birinchi uchraganni almashtirish
// console.log(text.replaceAll("a", "4")); // "J4v4Script is powerful!" → Matn ichidagi hamma uchraganini almashtirish
// console.log(text.split(" ")); // ["JavaScript", "is", "powerful!"] → Matnni bo‘lib, massivga aylantirish
// console.log(text.split("")); // ["J","a", "v", "a" ...] → Matnni bo‘lib, harflardan iborat massivga aylantirish
// console.log(text.slice(0, 10)); // "JavaScript" → index 0 dan 10-gacha kesib olish
// console.log(text.charAt(0)); // "J" → index bo‘yicha harf olish
// console.log(text.at(-1)); // "!" → oxirgi harfni olish
// console.log(text.trim()); // bosh va oxiridagi bo‘sh joylarni olib tashlaydi

// // ! TYPE CONVERSION

// console.log(Number("123")); // 123 → string → number
// console.log(String(123)); // "123" → number → string
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
