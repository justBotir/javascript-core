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

const [firsName, lastName = "Ergashev"] = ["Ali"];
console.log(firsName);
