// ! Iterable — bu for...of orqali aylantirib chiqish mumkin bo‘lgan obyekt.
// Ularga kiradi - Array [], String "", Map() va Set()

const arr = [1, 2, 3];

for (let i of arr) {
  console.log(i); // 1, 2, 3
}
// * Iterable = Symbol.iterator ga ega obyekt

// * Symbol.iterator — bu funksiya bo‘lib, obyektni bittalab (.next() orqali) qiymatlarini olishni ta’minlaydi
const massiv = [1, 2, 3];
console.log(massiv[Symbol.iterator]);

// ! Map va Set - malumotlarni saqlab turish uchun ishlatiladi

// ! Map - bu kalit (key) va qiymat (value) saqlovchi obyekt
// Object dan farqli ravishda keyga istalgan qiymat bersa bo'ladi

// 🔹 Xususiyatlari:
// har qanday tip key bo‘la oladi
// tartib saqlanadi
// .set(), .get(), .has()

const map = new Map();

map.set("1", "Ali"); // Objectdan farqli ravishda typeni taniydi va '1' ni alohida chiqaradi
map.set(1, "Ali");
map.set(1, "John"); // bir xil key ostida qiymat berilsa eng oxirgisidagini oladi
map.set("Doe", "Adam");

console.log(map);
console.log(map.get(1)); // * Key orqali chaqirilganda get orqali chaqiramiz
console.log(map.get("John")); // Value orqali chqirib bo'lmaydi
console.log(map.size); // size ni chiqaradi

// * Map ni katta ustunligi key sifatida object ham bersa bo'ladi
const obj = { name: "John" };
const map2 = new Map();

map2.set(obj, true);
console.log(map2);

map2.set(true, undefined).set("Ali", "Vali").set(5, 1n); // bittada qo'shib ketsa ham bo'ladi
console.log(map2);

// * Map ochishni boshqacha usuli
const map3 = new Map([
  ["Olma", 350],
  ["Olcha", 450],
  ["Banan", 550],
]);

console.log(map3);
for (let key of map3.keys()) {
  console.log(key);
} // Map iterable bo'ladi

map3.forEach(function (value, key, map) {
  console.log(value, key, map);
});

// * Object ni Map ga o'girish
const obj1 = {
  name: "Ali",
};

console.log(new Map(Object.entries(obj)));

// Massivni Object ga o'girish
let prices = Object.fromEntries([
  ["Olma", 350],
  ["Olcha", 450],
  ["Banan", 550],
]);

console.log(prices);

const map1 = new Map([
  ["Olma", 350],
  ["Olcha", 450],
  ["Banan", 550],
]);

console.log(map1.has("Olma")); // map keyini tekshiradi bor bolsa true aks holda false
map.clear(); // mapni tozalab tashlaydi
map.delete("Olma"); // aynan qaysidir key va value ni o'chirish uchun

// ! Set - bu faqat unique (takrorlanmaydigan) qiymatlar to‘plami

// 🔹 Xususiyatlari:
// takroriy qiymatlarni qabul qilmaydi
// .add(), .has(), .delete()

const set1 = new Set();

set1.add(1);
set1.add(1);
set1.add(true);
set1.add("string");

console.log(set1);
console.log(set1.size);
console.log(set1.has(1)); // value bor bosa true aks holda false
set1.delete(1); // berilgan valueni o'chirish
console.log(set1);
set1.clear(); // butunlay o'chirish
console.log(set1);

for (let item of set1) {
  console.log(item);
} // Iterable
