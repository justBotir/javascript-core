// ! OOP -> Object-Oriented Programming
// * Loyihani Object lardan foydalangan holatda takrorlanadigan kodni bitta objectga o'rab
// * bir nechta joyda ishlatish imkoniyatini beruvchi umumiy qoida

// ! Class - Bir nechta object larni yaratib olish uchun tayyor shablon

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const user = new User("Botir");
console.log(user); // User { name: 'Botir' }
user.sayHi(); // Hi, my name is Botir
console.log(typeof User); // function -> class bu contructor function
// User(); // TypeError

// * Class expression

const User2 = class {
  sayHi() {
    console.log("Hallo");
  }
};
const new_user = new User2();
new_user.sayHi();

// * Getter Setter in Class

class User3 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let user3 = new User3("John");
console.log(user3.name);

// * class property

class User4 {
  name = "John";

  sayHi() {
    console.log(`Hallo ${this.name}`);
  }
}

new User4().sayHi();

// ! ================== 1. CLASS (Sinflar) ==================
// * Class - bu obyekt yaratish uchun qolip (shablon) hisoblanadi.
// * constructor() - classdan yangi obyekt yaratilganda birinchi bo'lib avtomatik ishga tushadigan maxsus metod.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // * Class ichida metodlar 'function' so'zini yozmasdan yaratiladi
  greet() {
    console.log(`Salom, mening ismim ${this.name}, yoshim ${this.age} da.`);
  }
}

const user1 = new User("John", 30);
user1.greet(); // output: Salom, mening ismim John, yoshim 30 da.

// ! ================== 2. CLASS PRINCIPLES (OOP Tamoyillari) ==================

// * 1. INHERITANCE (Merosxo'rlik)
// * 'extends' kalit so'zi orqali boshqa classning barcha xususiyatlarini o'zlashtirish mumkin.
class Admin extends User {
  constructor(name, age, role) {
    super(name, age); // * super() -> ota class (User) ning constructorini ishga tushiradi
    this.role = role;
  }

  // * 2. POLYMORPHISM (Polimorfizm)
  // * Ota classdagi metodni ustidan qayta yozish (override qilish) qobiliyati.
  greet() {
    console.log(
      `Salom, men ${this.role} ${this.name}man. Barcha huquqlarga egaman!`,
    );
  }
}

const admin1 = new Admin("Ali", 25, "Super Admin");
admin1.greet(); // output: Salom, men Super Admin Aliman. Barcha huquqlarga egaman!

// * 3. ENCAPSULATION (Inkapsulyatsiya)
// * Ma'lumotlarni yashirish va ularga faqat ruxsat etilgan yo'llar (get/set) bilan murojaat qilish.
class BankAccount {
  #balance; // * '#' belgisi o'zgaruvchini PRIVATE (maxfiy) qiladi. Tashqaridan o'zgartirib bo'lmaydi.

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // * Getter: Maxfiy qiymatni o'qish uchun
  get getBalance() {
    return `${this.#balance} so'm`;
  }

  // * Setter: Maxfiy qiymatni tekshirib, xavfsiz o'zgartirish uchun
  set addMoney(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("Xato summa kiritildi!");
    }
  }
}

const myCard = new BankAccount("Hasan", 5000);
// console.log(myCard.#balance); // Error! Tashqaridan o'qish taqiqlangan
console.log(myCard.getBalance); // output: 5000 so'm
myCard.addMoney = 2000;
console.log(myCard.getBalance); // output: 7000 so'm

// ! ================== 3. instanceof OPERATORI ==================
// * Obyekt aynan qaysi classga tegishli ekanligini tekshiradi (true yoki false qaytaradi).

console.log(admin1 instanceof Admin); // output: true
console.log(admin1 instanceof User); // output: true (chunki Admin User'dan meros olgan)
console.log(user1 instanceof Admin); // output: false

// ! ================== 4. MIXIN (Miksinlar) ==================
// * JavaScript-da faqat bitta classdan meros (extends) olish mumkin.
// * Agar bizga boshqa mustaqil obyektning metodlari ham kerak bo'lsa, Mixin ishlatamiz.

const sayHiMixin = {
  sayHi() {
    console.log(`Salom, ${this.name}!`);
  },
  sayBye() {
    console.log(`Xayr, ${this.name}!`);
  },
};

class Student {
  constructor(name) {
    this.name = name;
  }
}

// * Mixin metodlarini Student class'ining prototype'iga nusxalaymiz
Object.assign(Student.prototype, sayHiMixin);

const student1 = new Student("Umid");
student1.sayHi(); // output: Salom, Umid!

// ! ================== 5. PROMISE (Vadalar) ==================
/*
 * Asinxron (vaqt talab qiladigan, masalan serverdan ma'lumot kutish) operatsiyalar uchun ishlatiladi.
 * 3 ta holati bor:
 * 1. Pending (Kutilmoqda)
 * 2. Fulfilled (Muvaffaqiyatli bajarildi) -> resolve() ishlaydi
 * 3. Rejected (Xatolik yuz berdi) -> reject() ishlaydi
 */

const fetchData = new Promise((resolve, reject) => {
  let isServerWorking = true; // * Buni false qilib ko'rsangiz catch() ishlaydi

  setTimeout(() => {
    if (isServerWorking) {
      resolve("Serverdan ma'lumotlar keldi!"); // * .then() ga boradi
    } else {
      reject("Serverda xatolik yuz berdi!"); // * .catch() ga boradi
    }
  }, 2000); // 2 soniya kutish imitatsiyasi
});

fetchData
  .then((data) => {
    console.log("Muvaffaqiyat:", data); // 2 sekundan keyin ishlaydi
  })
  .catch((err) => {
    console.log("Xato:", err);
  })
  .finally(() => {
    console.log("Promise yakunlandi (xato bo'lsa ham, bo'lmasa ham ishlaydi).");
  });

// ! ================== 6. TRY...CATCH (Xatoliklarni ushlash) ==================
// * Dasturda qandaydir xato chiqib qolsa, butun sayt/dastur qotib qolmasligi (buzilmasligi) uchun ishlatiladi.

try {
  console.log("1. Try bloki ishga tushdi...");

  // * Atayin xato keltirib chiqaramiz (mavjud bo'lmagan o'zgaruvchini chaqiramiz)
  // console.log(someUndefinedVariable);

  // * Yoki o'zimiz qo'lda xato yasashimiz mumkin:
  throw new Error("Bu mening maxsus xatoligim!");

  console.log(
    "Bu yozuv konsolga chiqmaydi, chunki tepada xato berdi va kod catch'ga sakradi.",
  );
} catch (error) {
  console.log("2. Xato ushlandi! Dastur qotib qolmadi.");
  console.log("Xatoning nomi:", error.name); // output: Error
  console.log("Xatoning xabari:", error.message); // output: Bu mening maxsus xatoligim!
} finally {
  console.log("3. Finally doim ishlaydi (Try-catch bloki tugadi).");
}
