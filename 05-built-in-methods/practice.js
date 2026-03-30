// ! Nazariy savollar

// 1. Math.floor, Math.ceil, Math.round, Math.trunc — farqlarini o'z so'zing bilan tushuntir. Qachon qaysinisini ishlatamiz?
/*
math.floor() pastga yaxlitlaydi
math.ceil() yuqoriga yaxlitlaydi
math.round() matematik yaxlitlaydi
math.trunc() butun sonini qaytaradi
 */

// 2. parseInt va Number() farqi nima?

parseInt("45px"); // 45 songa aylantiradi harfini tushirib qoldiradi
Number("45px"); // NaN

// 3. slice va substring farqi nima?
// Ikkalasi ham string kesib oladi!
// Asosiy farq:

text.slice(0, 4); // manfiy index ishlaydi ✅
text.substring(0, 4); // manfiy index → 0 deb hisoblaydi

"JavaScript".slice(-4); // "ipt" → oxiridan kesadi
"JavaScript".substring(-4); // "JavaScript" → -4 ni 0 deb oladi

// 4. Nima uchun 0.1 + 0.2 === 0.3 → false?
// Orqa fonda uzun natija chiqaradi

// ! Amaliy masala

// 1. Bu kod nima chiqaradi?
console.log(Math.round(3.5)); // 4
console.log(Math.round(-3.5)); // -3 manfiy qiymat bolganligi uchun
console.log(Math.trunc(-3.9)); // -3
console.log(Math.floor(-3.1)); // -4

// 2. Bu kod nima chiqaradi?
let text = "JavaScript";
console.log(text.slice(0, 4)); // Java
console.log(text.slice(-6)); // Script (slice() manfiy index ni qabul qiladi — oxiridan hisoblaydi)
console.log(text.at(-1)); // t
console.log(text.indexOf("S")); // 4

// 3. Bu kod nima chiqaradi?
console.log(parseInt("10.9abc")); // 10
console.log(parseFloat("10.9abc")); // 10.9
console.log(Number("10.9abc")); // NaN
console.log(Number("  42  ")); // 42

// 4. masala:
/*
Foydalanuvchi kiritgan matnni olib:
1. Bosh va oxiridagi bo'shliqlarni olib tashla
2. Katta harfga o'tkazib chiqar
3. Undov belgisi(!) bilan tugaydi yoki yo'qligini tekshir
4. Nechta harf borligini chiqar
*/

const matn = "     Salom dunyo    ";

const trimmed = matn.trim(); // "Salom dunyo"
const upper = trimmed.toUpperCase(); // "SALOM DUNYO"
const hasExclamation = trimmed.endsWith("!"); // false
const length = trimmed.length; // 11

console.log(trimmed);
console.log(upper);
console.log(hasExclamation);
console.log(length);
