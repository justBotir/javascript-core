// // ! ARRAY METHODS

// // * Array ochishni 2 ta yoli bor:
// let arr = new Array();
// let arr = [];

// // * Array ichida istalgan type dagi qiymatlarni saqlash imkoniyati bor

// const array = [true, 1, "src", undefined, { name: "Ali" }];
// console.log(array);
// console.log(array[3]); // Massiv ni object dan farqi arrayni index bo'yicha murojat qilsa boladi

// array[5] = 12345n; //  yangi indexga qiymat qo'shsa yoki mavjud indexdagi qiymatni o'zgartirsa boladi
// console.log(array);
// console.log(array.length); // 6 -> array uzunligi
// console.log(array[-1]); // undefined -> Oxirgi indexdagi qiymatni olish uchun JS da bunday ishlatilmaydi
// console.log(array.at(-1)); // 12345n -> Oxirgi qiymatni olib berish (1- usul)

// array.pop(); // Oxirgi elementni o'chiradi
// console.log(array);

// array.push("Banana"); // array so'ngidan element qo'shadi
// console.log(array);

// let fruits = ["Apple", "Banana", "Plum"];
// fruits.shift(); // massive boshidagi elementni o'chiradi
// console.log(fruits); //  "Banana", "Plum"

// fruits.unshift("Orange"); // massive boshidan element qo'shadi
// console.log(fruits); // "Orange", "Banana", "Plum"

// // * Oddiy for
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// // * for of
// for (let array1 of array) {
//   console.log(array1);
// }

// let arr = ["Banana", "Apple", "Orange"];

// // arr.splice(0, 1); // Berilgan index bo'yicha qiymatni o'chiradi
// // console.log(arr);

// // * splice() formule
// // arr.splice(start[, deleteCount, elem1, ..., elemN])

// arr.splice(1, 2, "Grapes", "Lemon"); // Berilgan index bo'yicha eskisini o'chirib yangi qiymat qo'shadi
// console.log(arr);

// arr.splice(1, 0, "Grapes", "Lemon", "Apricos", "Malina"); // Berilgan indexdan qiymat qo'shadi
// console.log(arr);

// let arr = ["b", "a", "n", "a", "n", "a"];

// const arr2 = arr.slice(1, 3); // berilgan indexdan indexGACHA Bo'lganlarni olib chiqaradi consolga
// console.log(arr2); // "a", "n"

// const arr = [1, 2, 3];
// const newArr = arr.concat([4, 5, 6], [7, 8, 9], 10, false); // Biz massivga biriktirgan har qanday elementni bitta massiv qilib beradi
// console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, false]

// const cars = ["BMW", "Merc", "BYD"];

// // * .forEach()
// cars.forEach((item, index, array) => {
//   console.log(`${item} - ${index} - ${array}`);
// });
// // * .forEache() ni for dagi tushunchasi
// for (let i = 0; i < cars.length; i++) {
//   console.log(`${cars[i]} - ${i} - ${cars}`);
// }

// const animals = ["kengooru", "bear", "wolf", "wolf", "kengooru", "monkey"];

// console.log(animals.indexOf("wolf")); // 2 -> Berilgan item ni shu qiymatni indexini aniqlab beradi (birinchi uchraganini)
// console.log(animals.indexOf("horse")); // -1 -> Yo'q item berilsa -1 qaytaradi
// console.log(animals.lastIndexOf("wolf")); // 3 -> Berilgan bir xil qiymatga ega bo'lgan elementlarni eng oxirgisini indexini qaytaradi
// console.log(animals.includes("monkey")); // true -> Berilgan qiymat massiv ichida bor bo'lsa true yo'q bolsa false qaytadi

// // * .find() ==> Shartga to'g'ri kelgan birinchi item ni qaytaradi.
// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Diyor" },
// ];
// const user = users.find(function (item, index, array) {
//   if (item.id == 1) {
//     return item;
//   }
// });

// const user = users.find((item) => item.id == 1);
// console.log(user);

// // * .findIndex() ==> Shartga to'g'ri kelgan birinchi item ni indexini qaytaradi

// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Diyor" },
//   { id: 4, name: "Siroj" },
//   { id: 5, name: "Javohir" },
// ];

// const user = users.findIndex((item) => item.name == "Siroj");
// console.log(user);

// // * .findLastIndex() ==> Shartga to'g'ri kelgan oxirgi item ni indexini qaytaradi
// // * .findLast() ==> Shartga to'g'ri kelgan oxirgi item ni qaytaradi

// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Diyor" },
//   { id: 4, name: "Siroj" },
//   { id: 5, name: "Javohir" },
// ];

// const user = users.findLastIndex((item) => item.name == "Siroj");
// const user1 = users.findLast((item) => item.name == "Siroj");
// console.log(user);
// console.log(user1);

// // * .filter() ==> shartga to'g'ri kelgan barcha elementni yangi massive da qaytaradi

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filtered_array = array.filter((item) => item % 2 == 0);
// console.log(filtered_array);

// // * .map() ==> massiv ustidan har qanday amaliyot bajarish imkoniyatini beradi, o'zidan yangi massive qaytaradi

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mapped_array = array.map((item) => item ** 2);
// console.log(mapped_array);

// // ? Masala - 20 dan katta sonlarni olib, ularni 2 ga ko'paytirib beradigan kod
// const numbers = [10, 15, 20, 25, 30];

// const result = numbers.filter((item) => item > 20).map((item) => item * 2);
// console.log(result);

// // ? Masala - Narxi 100 dan baland mahsulotlarni topib, ularga 10% chegirma (skidka) qilib, yangi narxini chiqarib beruvchi kod
// const products = [
//   { name: "Telefon", price: 500 },
//   { name: "Quloqchin", price: 50 },
//   { name: "Monitor", price: 300 },
//   { name: "Sichqoncha", price: 20 },
// ];

// const result = products
//   .filter((item) => item.price > 100)
//   .map((item) => ({ ...item, price: item.price * 0.9 }));
// console.log(result);

// // ? Masala - O'zgaruvchan chegirma funksiyasi
// const calculateDiscount = (productList, minPrice, percent) => {
//   // percent masalan 15 bo'lsa, uni 0.15 ga aylantiramiz
//   const discountFactor = (100 - percent) / 100;

//   return productList
//     .filter((item) => item.price > minPrice)
//     .map((item) => {
//       return {
//         ...item, // Bu "Spread operator" - obyektning hamma bor narsasini ko'chirib beradi
//         oldPrice: item.price,
//         newPrice: item.price * discountFactor,
//       };
//     });
// };
// // Endi xohlagan foizda ishlatsak bo'ladi:
// console.log(calculateDiscount(products, 100, 15)); // 100 dan qimmatlarga 15% skidka

// // * filterni vazifasini map da qo'llaganimizda
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filtered_array = array.map((item) => item % 2 == 0);
// console.log(filtered_array);

// // * .sort() ==> sortlab beradi

// const arr = ["a", "b", "c", "d", "a", "u", "s", "w"];
// console.log(arr.sort());

// // * number sortlashda muammo bor u har doim birinchi raqamga qarab so'rtlaydi lekin buni yechimi bor

// const arr = [1, 3, 12, 76, 15, 90, 5, 33];

// const sorted_array = arr.sort((a, b) => a - b);
// console.log(sorted_array);

// // * Formula: array.sort((a, b) => a - b)
// // * Mantiq: a - b < 0  -> a oldinga.
// // * a - b > 0 -> b oldinga.
// // * a - b == 0  o'zgarishsiz.
// // * Oltin qoida: Agar a - b ishlatilsa — o'sish tartibi, b - a ishlatilsa — kamayish tartibi bo'ladi.

// // * .reverse() ==> massivni teksari qilib massiv sifatida qaytaradi

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// // * .split(*belgi) ==> stringni *belgi turgan joydan bo'laklarga bo'lib massive qilib qaytaradi, agar topmasa matnni butunligicha massive da qaytaradi

// const str = "banana, apple, orange";

// const arr = str.split(",");
// console.log(arr);

// // * .join() ==> massivni matn qiladi. Qavs ichiga nima yozsang, elementlar orasiga o'shani qo'yib chiqadi.

// const mevalar = ["Olma", "Anor", "Behi"];
// console.log(mevalar.join()); // "Olma,Anor,Behi"
// console.log(mevalar.join("")); // "OlmaAnorBehi"
// console.log(mevalar.join(" ")); // "Olma Anor Behi"
// // Agar massiv ichida faqat bitta element bo'lsa, .join() o'zi yoziladi

// const user = "ali valiyev";
// const parts = user.split(" "); // ["ali", "valiyev"]

// const capitalized = parts.map((name) => name[0].toUpperCase() + name.slice(1));
// // Natija: ["Ali", "Valiyev"]

// const result = capitalized.join(" "); // "Ali Valiyev" (Yana matnga qaytdi)

// // * .reduce() ==> Barcha elementlarni bitta qiymatga yig‘adi
// // Bunda maxsus accumuliator bor shu o'zgaruvchiga yig'ib yig'iindini qaytarish uchun ishlatiladi

// const arr = [1, 2, 3, 4, 5];

// const res = arr.reduce((acc, item) => acc + item, 0);
// console.log(res);

// let accum = 0;
// for (let i = 0; i < arr.length; i++) {
//   accum += arr[i];
// }
// console.log(accum);

// // masala
// const number = [10, 20, 30];

// const total = number.reduce((acc, curr) => {
//   return acc + curr;
// }, 0); // 0 -> bu idishning (acc) boshlang'ich qiymati

// console.log(total); // 60

// const cart = [
//   { name: "Non", price: 3000 },
//   { name: "Sut", price: 10000 },
//   { name: "Choy", price: 5000 },
// ];

// const totalSum = cart.reduce((sum, item) => sum + item.price, 0);
// console.log(totalSum); //18000

// // * .isArray()  ==> arrayligini tekshirish uchun

// console.log(Array.isArray({ name: "John" })); // false
// console.log(Array.isArray([1, 2, 3, 4, 5])); // true

// // * .some() ==> massive da berilgan shartga tushadigan YAGONA element bolsa ham true qaytaradi aks holda false

// const arr = [1, 2, 3, 4, 5];

// const somed = arr.some((item) => item % 2 == 0);
// console.log(somed);

// // * .every() ==> massive da berilgan shartga BARCHA elementlar tushsa true qaytaradi aks holda false

// const arr = [2, 4, 6, 8];

// const somed = arr.every((item) => item % 2 == 0);
// console.log(somed);

// // * .fill() ==> biz bergan qiymatni ko'rsatilgan start indexdan end indexgacha qo'shib qo'yadi (eski qiymatlarni o'chirgan holda)
// // .fill(qiymat, start index, end index)

// const arr = [1, 2, 3, 4, 5];

// arr.fill(0, 2, 4);
// console.log(arr);

// // * .copyWithin() ==> ko'rsatilgan indexga n indexdan boshlangan elementlarni barchasini joylashtiradi
// // .compywithin(qaysi indexdan boshlab paste qilib qo'yishi, qaysi indexdan keyingi elementlarni copy qilib olishi)

// const arr = [1, 2, 3, 4, 5, 6];

// arr.copyWithin(0, 2);
// console.log(arr);

// // * .flat() ==> massive o'chami bo'yicha asosiy massive ga yaxlitlab beradi
// // .flat(massive o'chovi)
// const arr = [1, [2, 3], [[4, 5]], [[[6, 7]]]];
// console.log(arr.flat(3));
// console.log(arr.flat(Infinity)); // cheksiz darajada ochib beradi

// // ! ARRAY ITERATION METHODS

// console.log([] + []); // "" → Bo‘sh string
// console.log([] + {}); // "[object Object]"
// console.log([1, 2] + [3, 4]); // "1,23,4"
