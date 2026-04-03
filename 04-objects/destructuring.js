// // ! Destructure - bu MASSIV va OBJECT value larini boshqa o'zgaruvchilarga alohida nusxalash

// const arr = ["banana", "apple"];

// let [fruit1, fruit2] = arr;
// console.log(fruit1);
// console.log(fruit2);
// console.log(arr); // eski arr ga tasiri yoq

// const [first_name, last_name] = "John Doe".split(" ");
// console.log(first_name);
// console.log(last_name);

// // *
// const fruit = ["banana", "apple", "orange"];

// const [a, , c] = fruit;
// console.log(c);

// // *Stringda ishlashi
// const [a, b, c] = "hallo";
// console.log(b);

// // *Set da
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(two);

// // *

// let user = {};
// [user.name, user.surname] = "John Doe".split(" ");
// console.log(user.name);

// // * .entries()

// let user1 = {
//   name: "John",
//   age: 30,
// };

// for (let [key, value] of Object.entries(user1)) {
//   console.log(key, value);
// }

// // * Map

// let user2 = new Map();
// user2.set("name", "John");
// user2.set("age", "29");

// for (let [key, value] of user2) {
//   console.log(`${key}: ${value}`);
// }

// // * nimadir usul
// let toshmat = "Toshmat";
// let eshmat = "Eshmat";

// [eshmat, toshmat] = [toshmat, eshmat];

// console.log(eshmat);

// // * rest operator (... operatori)

// const arr = ["Valverde", "Arda", "Bellingham", "Vinisius", "Rodrygo", "Mbappe"];

// const [valverde, arda, bellingham, ...forwards] = arr;

// console.log(forwards);

// const [firsName, lastName = "Ergashev"] = ["Ali"];
// console.log(firsName);

// // * ...rest operatorini funksiya ichida ishlatish - funcsiyada birnechta qiymatlar berilsa uni massivga yig'ib beradi

// function func(...args) {
//   console.log(args);
// }

// func(1, 2, 3, 4, 5);

// //
// function func1(a, b, ...args) {
//   console.log(args);
// }

// func1(1, 2, 3, 4, 5);

// // * function ichida arguments kalit sozi argumentlarni olib beradi, xatto parametrlar berilmagan bo'lsa ham

// function func2() {
//   console.log(arguments);
// }
// func2("Hala", "Madrid");

// // Math.max array qabul qilmaydi lekin rest operatori orqali qulay ishlasa boladi

// const arr = [1, 2, 3, 4, 5];
// console.log(Math.max(...arr));

// // ...rest va spread operators
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// console.log(Math.max(...arr1, ...arr2));

// // Array.from() metodi massive ga o'girish uchun ishlatiladi
// const str = "Hala Madrid";
// console.log(Array.from(str));

// // * Block code - JS’da { } ichidagi kod — block (blok) deyiladi
// {
//   let message = "Hallo";
//   console.log(message);
// }

// console.log(message);

// // ! Nested function

// function outerFunc(firstName, lastName) {
//   function innnerFunc() {
//     return `${firstName} ${lastName}`;
//   }
//   console.log(`Hallo ${innnerFunc()}`);
// }

// outerFunc("John", "Doe");

// // * var

// // var bilan bir xil o'zgaruvchilar error bermaydi lekin ishlatish mumkin emas
// var message = "Hallo";
// var message = "Hallo";

// // window da global object ochish ( JS da window ishlamaydi )
// window.user = {
//   name: "John",
// };
// console.log(window.user.name);

// // * function - object

// function halalMadrid() {}
// console.log(halalMadrid.name);

// // function property
// function func3() {
//   func3.counter++;
// }
// func3.counter = 0;
// func3();
// func3();
// console.log(func3.counter);

// // * new Function - constructor orqali fuunction yaratish

// let sum = new Function("a", "b", "return a + b");
// console.log(sum(1, 2));
