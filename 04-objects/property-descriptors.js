// ! Object flags - object ichidagi ma’lumotni boshqarish va himoya qilish uchun kerak.

// value => ichidagi value
// writable => object ga yangi qiymat berish mumkin ekanligi
// enumerable => property ni korish imkoni bor yoqligi
// configurable => object qiymatini ozgartirish yoki ochirish imkoniyati

const user0 = {
  name: "Ali",
};

const descriptor = Object.getOwnPropertyDescriptor(user0, "name");
console.log(descriptor); // { value: 'Ali', writable: true, enumerable: true, configurable: true }

// * Object.defineProperty method - object ga yangi property qoshish va shu property descriptuorlarini o'zgartirish imkonini beradi

const user1 = {};
Object.defineProperty(user1, "name", {
  value: "John",
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, "name");
console.log(descriptor1);

// * writable descriptori property qiymatini o'zgartirishini boshqaradi (default true)

const user2 = {
  name: "John",
};

Object.defineProperty(user2, "name", {
  writable: false,
});

user2.name = "Ali";
console.log(user2.name);

// * enumerable: false - object propertysini for in va Object.keys() ichida ishlatish imkoniyatini cheklaydi

Object.defineProperty(user2, "name", {
  writable: false,
  enumerable: false,
});

console.log(user2.name); // Ishlaydi
console.log(user2); // {} -> chiqmaydi
console.log(Object.keys(user2)); // [] -> chiqmaydi
for (let key in user2.keys) {
  console.log(key); // Hech narsa qaytmaydi
}

// * configurable - object propertysini o'chirish imkoniyatini boshqaradi

Object.defineProperty(user2, "name", {
  configurable: false,
});

delete user2.name;
console.log(user2.name);

// * Object.defineProperties method - bir nechta propertylarni boshqaradi

const obj = {
  name: "Ali",
  age: 30,
};

Object.defineProperties(obj, {
  name: {
    writable: false,
  },
  age: {
    writable: false,
  },
});

obj.name = "Vali";
obj.age = 20;
console.log(obj);

// ! // OBJECT CONTROL METHODS

// * Object.preventExtensions() - Objectga yangi property qo'shishni taqiqlab qo'yadi

const user = {
  name: "John",
};

Object.preventExtensions(user);
user.age = 30;
console.log(user);
console.log(Object.isExtensible(user)); // Object.preventExtensions() qilingan bo'lsa false bo'lmasa true qaytaradi

// * Object.seal() - yangi qiymat qo'shishni va eski qiymatni o'chirishni taqiqlaydi

Object.seal(user);
user.age = 30;
delete user.name;
console.log(user);
console.log(Object.isSealed(user)); // Object.seal() qilingan bolsa true bo'lmasa false

// * Object.freeze() - Object ga yangi qiymat qo'shish, o'chirish va object hususiyatini o'zgartirishni taqiqlaydi

Object.freeze(user);
user.age = 30;
delete user.name;
user.name = "Doe";
console.log(user);
console.log(Object.isFrozen(user)); // Object.freeze() qilingan bo'lsa true bo'lmasa false

// ! GETTERS & SETTERS

//* Getter - o'qish uchun ishlailadi
//* Setter - yozish uchun ishlatiladi

// * Getter funksiyasini oddiy funksiya bilan farqi get keyword boladi va asosiy farqi getterni chaqirish shart emas (oddiy propertydek ishlaydi)
// * Getter o'zida parametr qabul qilmaydi, uning vazifasi o'qish olish
const user = {
  fristName: "Eshmat",
  lastName: "Toshmatov",
  get fullName() {
    return `Full name: ${this.fristName} ${this.lastName}`;
  },
  sayHi() {
    console.log("Visca Barsa");
  },
};

console.log(user.fullName); // getter funksiya
user.sayHi(); // oddiy funksiya

// * Setter - Object ichidagi propertylarni o'zgartirish qoshish va shunga o'xshash ishlar qilinadi. Faqat bitta property qabul qiladi!

const user1 = {
  fristName: "Eshmat",
  lastName: "Toshmatov",
  get fullName() {
    return `Full name: ${this.fristName} ${this.lastName}`;
  },
  set fullName(value) {
    this.fristName = value;
  },
};

user1.fullName = "G'ishmat"; // yangi qiymat berdimmi demak setter ga murojatligini biladi
console.log(user1.fullName);
