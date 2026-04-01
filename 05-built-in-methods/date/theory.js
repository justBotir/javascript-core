// ! Date object - vaqtlarni olish uchun ishlatiladi

const now = new Date(); // Date ichida vaqt UTC asosida saqlanadi
console.log(now); // ko‘pincha ISO format (UTC) da chiqadi

console.log(now.toString()); // ✅ Lokal vaqt (timezone bilan)
console.log(now.toLocaleString()); // ✅ Lokal vaqt (user-friendly format)

// * Date 01.01.1970 UTC+0 sanasidan hisoblab boshlangan

const first_date = new Date(0);
console.log(first_date); // 1970-01-01T00:00:00.000Z

// * Ichiga istalgan sana yozib chiqarish mumkin

const default_date = new Date("2026-05-22"); // birinchi yil, oy, sana ko'rinishida berish kerak
console.log(default_date); // 2026-05-22T00:00:00.000Z

// * Oyni hisobini index bo'yicha hisoblaydi ya'ni 0 dan boshlab

const date_with_number = new Date(2026, 2, 30, 0, 0, 0, 0);
console.log(date_with_number); // 2026-03-29T19:00:00.000Z

// * faqat kerak bo'lgan malumotni olish

const date = new Date();

console.log(date.getFullYear()); // 2026
console.log(date.getMonth()); // 2
console.log(date.getDate()); // 30
console.log(date.getHours()); // 18
console.log(date.getMinutes()); // 27
console.log(date.getSeconds()); // 38
console.log(date.getMilliseconds()); // 297
console.log(date.getTimezoneOffset()); // -300 -
console.log(date.getDay()); // 1
console.log(date.getTime());
