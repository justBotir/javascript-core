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
