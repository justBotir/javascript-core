// ! PROTOTYPE - malum bir objectda bor property larni boshqa bir object ga nusxalash uchun ishlatiladi

// ! Proto
// const animal = {
//   eats: true,
// };

// const rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;
// console.log(rabbit.eats); // true

// // function nusxasi

// const animal1 = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// const rabbit1 = {
//   jumps: true,
//   __proto__: animal1,
// };

// rabbit1.walk();
// console.log(rabbit.eats);

// // zanjir sifatida bir biridan voris olib ketadi
// const whiteRabbit = {
//   color: "white",
//   __proto__: rabbit1,
// };

// whiteRabbit.walk();
// console.log(whiteRabbit.eats);

// // * function ichida hech qanday qiymat bolmasa tashqaridan qiymat bersa ham boladi

// const animal = {
//   eats: true,
//   walk() {},
// };

// const rabbit = {
//   jump: true,
//   __proto__: animal,
// };

// rabbit.walk = function () {
//   console.log("Animal walk");
// };
// rabbit.walk();
// animal.walk();

// //
// const user = {
//   firstName: "Adam",
//   lastName: "Smith",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set setFirstName(value) {
//     this.firstName = value;
//   },
// };

// const admin = {
//   isAdmin: true,
//   __proto__: user,
// };

// console.log(admin.fullName);
// admin.setFirstName = "Bill";
// console.log(admin.fullName);
// console.log(user.fullName); // Proto olgandna keyin faqat yagi object ga tasir qiladi eskisiga tasir qila olmaydi

// // __proto__ this
// const animall = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log("sleeping");
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// const bear = {
//   color: "white",
//   __proto__: animall,
// };

// bear.sleep();
// console.log(bear.isSleeping);
// console.log(animall.isSleeping);

// // * hasOwnProperty()

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// }

// ! Prototype

// * function prototype
const animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;
const rabbit = new Rabbit("Black rabbit");
console.log(rabbit.eats);

// Agar funksiyaga prototype berilsa yangi ochilgan objectga tasir qiladi eskilariga tasir qila olmaydi
function Tiger() {}

const tiger1 = new Tiger();
Tiger.prototype = { run: true };
const tiger2 = new Tiger();

console.log(tiger1.run);
console.log(tiger2.run);

//

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true -> bir xil proto eskirgan

// Massivda prototype

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // treu ->  massivni ham tagida object yotibdi

// * Funksiyada ham shunday chiqadi
