// * 1. SyntaxError - Kod yozilishida grammatika xato bo‘lsa (yozish qoidasi buzilsa)
// let a = ; // ❌ qiymat yo‘q

// if (true {  // ❌ qavs yopilmagan
//   console.log("hello");
// }

// * 2. ReferenceError - O‘zgaruvchi (variable) mavjud bo‘lmasa
// console.log(x); // ❌ x yo‘q

// * 3. TypeError - Noto‘g‘ri type bilan ishlaganda
// let num = 10;
// num(); // ❌ numberni function qilib chaqiryapsan

// let a = null;
// console.log(a.name); // ❌ null’da property yo‘q

// * 4. RangeError - Qiymat ruxsat etilgan diapazondan chiqib ketsa
// let arr = new Array(-1); // ❌ minus length bo‘lmaydi

// let num = 1;
// num.toFixed(200); // ❌ juda katta qiymat

// * 5. EvalError - eval() bilan bog‘liq xatolar (deyarli ishlatilmaydi)
// eval("hello world"); // noto‘g‘ri kod

// * 6. URIError - URL decode/encode noto‘g‘ri bo‘lsa
// decodeURIComponent("%"); // ❌ noto‘g‘ri format

// * 7. InternalError (ba’zi browserlarda) - Juda chuqur recursion (cheksiz function)
// function test() {
//   test(); // ❌ cheksiz
// }
// test();
