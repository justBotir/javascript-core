// ! Data Structures
// Dasturlashda Data Structre(Ma'lumotlar tuzilari) - bu malumotlarni samarali saqlash va ularga ishlov berish usuli hisoblanadi.
// Data structure tanlash algoritmlarining tezligi va samaradorligiga katta tasir qiladi.
// Data struture 2 turga bo'linadi - Linear DS va Non-linear DS (chiziqli va chiziqsiz malumot tuzilmalari)
// * 1. Linear DS - malumotlar ketma-ket tartibda joylashgan bo'ladi. Va buni o'zi ham 4 turga bolinadi
// 1.1. Array(massiv) - elementlar index orqali tartib bilan saqlanadi
let number = [10, 20, 30, 40, 40];
console.log(number[2]); // 30

// 1.2. Linked list(bog'langan ro'yxat) - Elementlar zanjir shaklida bog'langan tugunlardan tashkil topgan bo'lib,
// har bir tugunda qiymat va keyingi elementga ishora mavjud.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let first = new Node(10);
let second = new Node(20);
first.next = second;
console.log(first.value); // 10
console.log(first.next.value); // 20

// 1.3. Stack - LIFO (Last In First Out - Oxirgi kirgan birinchi chiqadi) tamoyili asosida ishlaydi
class Stack {
  constructor() {
    this.item = [];
  }
  push(value) {
    this.item.push(value);
  }
  pop() {
    return this.item.pop();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// 1.4. Queue (Navbat) - FIFO (First In First Out - birinchi kirgan birinchi chiqadi) tamoyili asosida ishlaydi

class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(value) {
    this.item.push(value);
  }
  dequeue() {
    return this.item.shift();
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1

// * 2. Non-Linear DS - Elementlar tartibsiz yoki bog'langan shaklda saqlanadi
// 2.1. Hash table (hesh jadvali) - Kalit qiymat juftliklari shaklida malumotlarni saqlaydi.
let hashTable = new Map();
hashTable.set("name", "John");
hashTable.set("age", "30");
console.log(hashTable.get("name")); // 'John'

// 2.2 Tree - Daraxt tuzilmasi har bir tugun(node) bir nechta farzandga ega bo'lishi mumkin bo'lgan ierarxik tuzilmadir.
// Binary  search tree(BST) misol:
class Node1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node1(10);
root.left = new Node1(5);
root.right = new Node1(15);
console.log(root.left.value); // 5
console.log(root.left.value); // 15

// 2.3 Graph - Tugunlar va ularga boglangan yo'nalishlar toplamidan iborat.

let graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

console.log(graph["A"]); // [ 'B', 'C' ]
console.log(graph["D"]); // [ 'B', 'C' ]

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
