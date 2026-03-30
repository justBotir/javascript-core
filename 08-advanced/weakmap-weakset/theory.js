// Gabage collection - axlatlarni yigish yani bo'sh bolgan obektlarni xotiradan tozalab tashlaydi

let john = { name: "John" };
john = null;
console.log(john);

// Agar boshqa bir o'zgaruvchiga massiv sifatida yozsak malumot saq
let ali = { name: "Ali" };
let arr = [ali];
ali = null;
console.log(arr);

// Gabage collection bosh obektni o'chiradi qachonki o'zi mustaqil bo'lsa
let vali = { name: " Vali" };
let map = new Map();
map.set(vali, 123);
vali = null;
console.log(map);

// bo'sh object ni xotiradan o'chirib tashlash uchun bizga weakmap va weakset kerak bo'ladi

// ! WeakMap() - mapdan farqi key sifatida faqat object qabul qiladi. Gabage collection bunda ishlaydi

let obj = { name: "John" };

let weak_map = new WeakMap();
weak_map.set(obj, "hallo");
// obj = null;
console.log(weak_map.get(obj));
console.log(weak_map.has(obj));
weak_map.delete(obj);
console.log(weak_map.get(obj));

// * Vaqtinchalik xotirada saqlab turgani weakmap qulay, bo'sh objectni tozalaydi va tezligiga yaxshigina tasir qiladi

// ! WeakSet() - Xuddi WeakMap kabi lekin weakset da faqat objectlar saqlanadi

const weak_set = new WeakSet();
let obj1 = { name: "Eshmat" };
let obj2 = { name: "Toshmat" };

weak_set.add(obj1).add(obj2);

// obj1 = null;
console.log(weak_set.has(obj1));
weak_set.delete(obj1);
console.log(weak_set.has(obj1));
