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
