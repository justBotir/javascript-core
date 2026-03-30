// ! Nazariy

// 1. Shallow copy va Deep copy farqi nima? Qachon qaysinisini ishlatamiz?

// 2. Object.assign, spread (...), structuredClone — qaysi biri shallow, qaysi biri deep copy? Farqini tushuntir.

// 3. for...in va Object.keys() — ikkalasi ham objectni aylanadi. Farqi nima?

// 4. Bu kodda nima muammo bor va nima chiqadi?
const obj1 = { name: "John" };
const copy = obj1;
copy.name = "Ali";
console.log(obj1.name);

// ! Amaliy

// 5. Bu kod nima chiqaradi? Nima uchun?

const a = { info: { city: "Toshkent" } };
const b = { ...a };
b.info.city = "Samarqand";
console.log(a.info.city);
console.log(b.info.city);

// 6. Bu obyektdan faqat yoshi 18 dan katta bo'lgan userlarni yangi arrayga chiqar:

const users = {
  ali: { age: 15 },
  vali: { age: 22 },
  jasur: { age: 17 },
  sardor: { age: 25 },
};

// 7. Quyidagi obyektda qiymatlarning yig'indisini top:
const scores = {
  math: 85,
  english: 92,
  science: 78,
  history: 88,
};
// Natija: 343

// 8. Ikki obyektni solishtir — barcha key va value lari bir xil bo'lsa true, bo'lmasa false qaytarsin:
const obj1 = { name: "Ali", age: 20 };
const obj2 = { name: "Ali", age: 20 };
// === bilan solishtirib bo'lmaydi! Nima uchun?
// O'zing funksiya yoz!
