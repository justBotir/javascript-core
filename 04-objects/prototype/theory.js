// ! PROTOTYPE - malum bir objectda bor property larni boshqa bir object ga nusxalash uchun ishlatiladi

// ! Proto
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
console.log(rabbit.eats); // true

// function nusxasi

const animal1 = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

const rabbit1 = {
  jumps: true,
  __proto__: animal1,
};

rabbit1.walk();
console.log(rabbit.eats);

// zanjir sifatida bir biridan voris olib ketadi
const whiteRabbit = {
  color: "white",
  __proto__: rabbit1,
};

whiteRabbit.walk();
console.log(whiteRabbit.eats);

// * function ichida hech qanday qiymat bolmasa tashqaridan qiymat bersa ham boladi

const animal2 = {
  eats: true,
  walk() {},
};

const rabbit = {
  jump: true,
  __proto__: animal2,
};

rabbit.walk = function () {
  console.log("Animal walk");
};
rabbit.walk();
animal2.walk();

//
const user = {
  firstName: "Adam",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set setFirstName(value) {
    this.firstName = value;
  },
};

const admin = {
  isAdmin: true,
  __proto__: user,
};

console.log(admin.fullName);
admin.setFirstName = "Bill";
console.log(admin.fullName);
console.log(user.fullName); // Proto olgandna keyin faqat yagi object ga tasir qiladi eskisiga tasir qila olmaydi

// __proto__ this
const animall = {
  walk() {
    if (!this.isSleeping) {
      console.log("sleeping");
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

const bear = {
  color: "white",
  __proto__: animall,
};

bear.sleep();
console.log(bear.isSleeping);
console.log(animall.isSleeping);

// * hasOwnProperty()

let animal3 = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal3,
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}

// ! Prototype

// * function prototype
const animal4 = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal4;
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
console.log(arr.__proto__.__proto__ === Object.prototype); // true ->  massivni ham tagida object yotibdi
// * Funksiyada ham shunday chiqadi

// * Prototype show
String.prototype.show = function () {
  console.log(this);
};

"Hallo".show(); // [String: 'Hallo']

// * Array prototype join to Object
const obj1 = {
  0: "Halal",
  1: "Madrid",
  length: 2,
};

obj1.join = Array.prototype.join;
console.log(obj1.join(" "));

// ! Proto va Prototype ning tayyor metodlari

// * Object.create() - yangi objectga nusxalab beradi
let animal5 = {
  eats: true,
};

let rabbit = Object.create(animal5);
console.log(rabbit.eats); // true
// * Object.getPrototypeOf() - ichidagi propertylarni olib beradi
console.log(Object.getPrototypeOf(rabbit)); // { eats: true }
// * Object.setPrototypeOf() - yangi property qoshish
Object.setPrototypeOf(rabbit, { jumps: true });
console.log(Object.getPrototypeOf(rabbit));

// * Object.create() orqali property qoshib ketish

let bear1 = Object.create(animal5, {
  sleep: {
    value: true,
    enumerable: true,
  },
});

console.log(bear1); // { sleep: true }
