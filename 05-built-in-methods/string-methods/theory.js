// ! STRING METHODS

let text = "JavaScript is powerful!";

console.log(text.length); // 22 → Matn uzunligini chiqaradi
console.log(text.toUpperCase()); // "JAVASCRIPT IS POWERFUL!" → Katta harflarga o‘tkazish
console.log(text.toLowerCase()); // "javascript is powerful!" → Kichik harflarga o‘tkazish
console.log(text.includes("powerful")); // true → So‘z mavjudligini tekshirish
console.log(text.startsWith("Java")); // true → "Java" bilan boshlanishini tekshirish
console.log(text.endsWith("!")); // true → "!" bilan tugashini tekshirish
console.log(text.indexOf("is")); // 11 → "is" so‘zi qaysi indexda ekanligini topish
console.log(text.replace("a", "4")); // "J4vaScript is powerful!" → Matn ichidagi birinchi uchraganni almashtirish
console.log(text.replaceAll("a", "4")); // "J4v4Script is powerful!" → Matn ichidagi hamma uchraganini almashtirish
console.log(text.split(" ")); // ["JavaScript", "is", "powerful!"] → Matnni bo‘lib, massivga aylantirish
console.log(text.split("")); // ["J","a", "v", "a" ...] → Matnni bo‘lib, harflardan iborat massivga aylantirish
console.log(text.slice(0, 10)); // "JavaScript" → index 0 dan 10-gacha kesib olish
console.log(text.charAt(0)); // "J" → index bo‘yicha harf olish
console.log(text.at(-1)); // "!" → oxirgi harfni olish
console.log(text.trim()); // bosh va oxiridagi bo‘sh joylarni olib tashlaydi

// ! TYPE CONVERSION

console.log(Number("123")); // 123 → string → number
console.log(String(123)); // "123" → number → string
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
