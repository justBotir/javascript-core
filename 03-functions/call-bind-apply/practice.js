// ! Nazariy savollar

// 1. call, apply, bind uchalasining asosiy farqi nima? Qachon qaysinisini ishlatamiz?
/*
call() - kontekt (this) ga argument berganda. massive qabul qilmaydi birma bir agrument beriladi
apply() - bunda ham shunday faqat asosiy farqi bunda massiv qabul qiladi
bind() - boshqalardan farqi boshqa funcsiyaga o'zlashtirib xohlagan payt chaqirib ishlatishimiz mumkin
*/

// 2. this kalit so'zi nima? Quyidagi kodda this nimaga teng?
const obj1 = {
  name: "Ali",
  sayHi: function () {
    console.log(this.name);
  },
};
obj1.sayHi();
// this bu tashqaridan malumot olish uchun ishlatiladi. uni call bind apply orqali qayerdan olganligini argument sifatida beramiz.
// bu kodda this "Ali" ga teng lekin pastda call bilan chaqirilmadi.

// 3. Arrow function da call/apply/bind ishlaydi? Nima uchun?
// Arrow function o'zining this i YO'Q!
// U yaratilgan joyning this ini oladi
// Shuning uchun call/apply/bind ta'sir qilmaydi!

const obj2 = {
  name: "Ali",
  sayHi: () => {
    console.log(this.name); // undefined!
    // Arrow function → this = global (window/undefined)
    // call bilan chaqirsang ham o'zgarmaydi!
  },
};

// Shuning uchun methodlarda arrow function ishlatma!

// ! Amaliy

// 1. Bu kod nima chiqaradi?
const person = { name: "Jasur" };

function greet(city, country) {
  console.log(`${this.name} - ${city}, ${country}`);
}

greet.call(person, "Toshkent", "Uzbekistan"); // Jasur - Toshkent Uzbekistan
greet.apply(person, ["Toshkent", "Uzbekistan"]); // Jasur - Toshkent Uzbekistan

const bound = greet.bind(person, "Toshkent");
bound("Uzbekistan"); // Jasur - Toshkent Uzbekistan

// 2. Bu kod nima chiqaradi? Nima uchun?
const obj = {
  name: "Laptop",
  getPrice: function (price, discount) {
    return `${this.name}: ${price - discount} so'm`;
  },
};

const phone = { name: "Phone" };

console.log(obj.getPrice.call(phone, 5000000, 500000)); // Phone: 4500000 so'm
console.log(obj.getPrice.apply(phone, [5000000, 500000])); // Phone: 4500000 so'm
// Chunki obj.getPrice.call -> bunda objdagi funksiyaga kirish ko'rsatilgan va argument sifatida tashqaridagi phone berilgan.

// 3. masala:
/*
user obyekti bor: { name: "Sardor", balance: 1000000 }
withdraw(amount) funksiyasi yoz:
  - balancedan amount ni ayirsin
  - "Sardor ning balansi: 800000 so'm" deb chiqarsin
bind yordamida yangi funksiya yaratib chaqir
*/

const user = { name: "Sardor", balance: 1000000 };

function withdraw(amount) {
  this.balance -= amount;
  return `${this.name} ning balansi: ${this.balance} so'm`;
}

const sardorWithdraw = withdraw.bind(user);
console.log(sardorWithdraw(200000));

// 4. Nima uchun bu kod noto'g'ri ishlaydi?
const obj3 = {
  name: "Ali",
  sayHi: () => {
    console.log(this.name);
  },
};
obj3.sayHi();
// Nima uchun: arrow function o'zining this i yo'q!
// Global this → window (browserda) yoki {} (Node.js da)
// this.name → undefined
