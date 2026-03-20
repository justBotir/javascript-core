// ! Functions
// * Funksiya — ma’lum vazifani bajarish uchun yozilgan va kerak bo‘lganda chaqiriladigan kod bo‘lagi.
// To'g'ri nom berish kerak

// 📌 Funksiyaning vazifasi nima?
// 1️⃣ Kodni takrorlamaslik
// 2️⃣ Tartibli yozish
// 3️⃣ Kodni qismlarga bo‘lish
// 4️⃣ Qayta-qayta ishlatish

// 📌 Qayerda ishlatiladi?
// Agar bir xil ishni bir necha marta qilish kerak bo‘lsa.

// Masalan:
// 3 ta joyda sonlarni qo‘shish kerak
// 5 ta joyda foydalanuvchini tekshirish kerak
// 10 ta joyda hisob-kitob qilish kerak
// Shunda funksiya yozasan va chaqirasan.

// ! Declaration function

function showMessage() {
  console.log("Varselona");
  return "Hala madrid"; // Js da har qanday funksiya o'zidan return qaytaradi. Agar return yozilmasa "undefined" qaytaradi
}

showMessage();

function showMessage(name) {
  // * Parameter
  console.log(`Hallo ${name}`);
}

showMessage("Varselona"); // * Argument

// ! Local variables

function showMessage(name) {
  let message = "Hello"; // * Local
  console.log(`${message} ${name}`);
}

showMessage("Varselona");

// ! Global variables

let message = "Hello"; // * Global

function showMessage(name) {
  console.log(`${message} ${name}`);
}

showMessage("Varselona");

// * Default value
function showMessage(from, to = "Adam") {
  console.log(`Hallo from ${from} to ${to}`);
}
showMessage("Ali");

// ! Funksiya ichida funksiya chaqirish

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
    return true;
  }
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) {
      continue;
    }
    console.log(i);
  }
}

showPrimes(20);

// ! Function expression

let showMessage = function () {
  console.log("Hallo world");
};
showMessage();

// ------------

function sayHi() {
  alert("Hallo");
}

let func = sayHi; // * Function expression

func(); // Hallo
sayHi(); // Hallo

//! Expression funksiya eng katta farqi - hyostinga tushadi yani tepada chaqira olamiz

showMessage();

function showMessage() {
  console.log("Hello");
}

// ! Ternary operator in Function
let trophies = 15;

let true_club =
  trophies < 15
    ? function () {
        console.log("Hala madrid");
      }
    : function () {
        console.log("Varselona");
      };
true_club();

// ! Arrow function

const showMessage = (param) => {
  console.log("hallo world");
};

showMessage();

//! Anonim functions - Nomsiz funksiya
// Faqat ishlatilgan joyda ishlatiladi boshqa joyda ishlatib bomaydi

(function () {
  console.log("Men bir martalik nomi yo'q bechora funksiyaman");
})();

// ! Recursive function
// O'zini ichida o'zini qayta chaqirishi

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1); // 5, 4, 3, 2, 1
}

console.log(factorial(5)); // output: 120

// !! Higher-order functions
// ! Callback function

function greet(name, callback) {
  console.log(`Hallo ${name}`);
  callback("Ali");
}

function sayGoodBye(name) {
  console.log(`GoodBye ${name}`);
}

greet("John", sayGoodBye);

// * masala
function squareCube(number, cube) {
  console.log(`Kvadrati: ${number ** 2}`);
  cube(number);
}

function cube(number) {
  console.log(`Kubi ${number ** 3}`);
}

squareCube(5, cube);

// ! Returning functions

function createGreet(greeting) {
  // Bu funksiya boshqa funksiya qaytaradi
  return function (name) {
    return `${greeting} ${name}`;
  };
}

// createGreet chaqirilganda greeting qiymati beriladi
// va u ichidagi funksiyani qaytaradi
const greetHello = createGreet("Hallo");

// Qaytgan funksiya chaqiriladi va name argument beriladi
console.log(greetHello("John"));

// !! SETTER FUNCTIONS - JavaScript da vaqt bilan boshqariladigan funksiyalar mavjud (2 xil)

// * setTimeout - Berilgan vaqt o'tgandan keyin funksiyani 1 marta ishga tushiradi
setTimeout(function () {
  console.log("Bu funksiya 3 sekunddan so'ng ishlaydi");
}, 3000);

// * Arrow function bilan yozish + bekor qilish
const time_out = setTimeout(
  () => console.log("Bu funksiya 3 sekunddan keyin ishlaydi"),
  3000,
); // ko'proq ishlatiladigan qisqa yozish usuli

clearTimeout(time_out); // setTimeout ni ishlashidan oldin bekor qiladi

// * setInterval - Berilgan vaqt oralig'ida funksiyani qayta-qayta ishlatadi
setInterval(function () {
  console.log("Bu funksiya har 2 sekundda ishga tushadi");
}, 2000);

// * setInterval ni to'xtatish
const set_interval = setInterval(() => {
  console.log("Bu funksiya ishlaydi");
}, 2000);

// 7 sekunddan keyin interval to'xtatiladi
setTimeout(() => {
  clearInterval(set_interval);
  console.log("setInterval to'xtadi");
}, 7000);

// * Misol
// Agar data mavjud bo'lsa, 2 sekunddan keyin funksiya ishlaydi
// Agar mavjud bo'lmasa timeout bekor qilinadi
let settimeout;

if (data != undefined) {
  settimeout = setTimeout(function () {
    console.log("Hallo world");
  }, 2000);
} else {
  clearTimeout(settimeout);
}

/*
! Closure function
* Ichki funksiya tashqi funksiyani o'zgaruvchisiga tasir qila olishi yani ishlata olishi va uni xotirada saqlab qolishi
*/

function externalFunc() {
  let count = 0;

  return function innerFunc() {
    count++;
    console.log(count);
  };
}

const counter = externalFunc();
counter(); // 1
counter(); // 2
counter(); // 3

// Sonni Oshirib kamaytirish
function summer() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    get: function () {
      return count;
    },
  };
}

const counter1 = summer();

counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1
counter1.get(); // 1

// ! Constructor function
// * Constructor function — Bu new operatori yordamida yangi object yaratish uchun ishlatiladigan mahsus funksiya

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const car = new Car("BYD", "Champion"); // new orqali yangi object yaratiladi
console.log(car); // { brand: "BYD", model: "Champion" }

// ! Murakkabroq misol
// Constructor ichida method ham yozish mumkin

function User(name) {
  this.name = name; // objectga name qo‘shiladi

  this.sayHi = function () {
    // object methodi
    alert("My name is " + this.name); // object name ni chiqaradi
  };
}

let john = new User("John"); // yangi object
john.sayHi(); // My name is John

// ! this — hozir qaysi object ishlayotgan bo‘lsa, o‘sha objectni bildiradi.

const user = {
  name: "Ali",
  age: 20,

  sayHi() {
    console.log(`Hallo ${this.name}`); // this = user object
  },
};

user.sayHi(); // Hallo Ali

// ! new - constructor function orqali yangi object yaratadigan operator.
// ! new.target — funksiya new bilan chaqirilgan yoki chaqirilmaganini tekshiradi.

function User() {
  alert(new.target);
}

User(); // undefined (new ishlatilmagan)
new User(); // function User() (new bilan chaqirilgan)

// ! new ishlatilmagan bo‘lsa ham object yaratish
function User(name) {
  // agar new ishlatilmagan bo‘lsa
  if (!new.target) {
    return new User(name); // o‘zi new bilan qayta chaqiradi
  }

  this.name = name; // objectga name qo‘shiladi
}

const ali = User("Ali"); // new yozilmagan
console.log(ali); // baribir object qaytadi

// Optional qilib chaqirish

const user1 = {
  name: "John",
};

console.log(user1.adress?.street); // ? ni vazifasi optional qiladi
