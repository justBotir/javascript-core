// 1. Massiv ichidan birinchi uchragan juft sonni aniqlang. Agar topilmasa, undefined qaytsin.

const arr = [1, 2, 3, 4];

const result = arr.find((item) => item % 2 === 0);

console.log(result);

// 2. Massiv ichidan birinchi uchragan musbat sonning indeksini qaytaring. Agar bunday son bo'lmasa, -1 chiqsin.

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.findIndex((item) => item >= 0);
console.log(result1);

// 3. Massiv ichidagi oxirgi uchragan toq sonning indeksini toping. Agar bunday son bo'lmasa, -1 chiqsin.

const arr2 = [1, 2, 3, 4, 5];

const result2 = arr2.findLastIndex((item) => item % 2 !== 0);
console.log(result2);

// 4. Massiv ichidan faqat 0 dan katta elementlarni ajratib oling va yangi massiv qaytaring.

const arr3 = [-3, -2, -1, 0, 1, 2, 3];

const result3 = arr3.filter((item) => item > 0);
console.log(result3);

// 5. Massiv elementlarining kvadratlarini hisoblab, yangi massiv hosil qiling.

const arr4 = [1, 2, 3, 4, 5];

const result4 = arr4.map((item) => item ** 2);
console.log(result4);

// 6. Berilgan massivni o'sish tartibida tartiblang.

const arr5 = [1, 4, 2, 6, 8, 3, 10, 9, 5, 7];

const result5 = arr5.sort((a, b) => a - b);
console.log(result5);

// 7. Massiv elementlarini orqaga qarab joylashtiring.

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result6 = arr6.reverse();
console.log(result6);

// 8. Berilgan gapni har bir so‘zini alohida massiv elementiga ajratib oling.

const str = "Assalomu alaykum";

const result7 = str.split(" ");
console.log(result7);

// 9. Massiv elementlarini bo‘sh joy bilan ajratib, bitta matn sifatida chiqarib bering.

const arr7 = ["Assalomu", "Alaykum", "Hammaga"];

const result8 = arr7.join(" ");
console.log(result8);

// 10. Berilgan sonlar massivining yig‘indisini toping.

const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result9 = arr8.reduce((acc, item) => acc + item, 0);
console.log(result9);

// ! Map bilan ishlash misollari
/* 
* 1. Talabalarning baholarini saqlovchi Map yarating. Keyin quyidagi amallarni bajaring:
1.set yordamida 3 ta talabaning baholarini qo‘shing.
2.get yordamida ma’lum bir talabani bahosini olib ko‘ring.
3.size yordamida nechta talaba borligini aniqlang.
4.delete yordamida bitta talabani ro‘yxatdan olib tashlang.
5.clear bilan barcha talabalarni o‘chiring.
*/

const talabalar = new Map();

talabalar.set("Ali", 5).set("Vali", 4).set("Behruz", 3);
console.log(talabalar);
console.log(talabalar.get("Ali"));
console.log(talabalar.size);
talabalar.delete("Vali");
console.log(talabalar);
talabalar.clear();
console.log(talabalar);

/*
* 2. Mahsulotlarning narxlarini saqlovchi Map yarating. Keyin quyidagi amallarni bajaring:
1.set yordamida mahsulotlarni qo‘shing.
2.get yordamida mahsulot narxini oling.
3.has yordamida mahsulot mavjudligini tekshiring.
4.forEach yordamida barcha mahsulotlarni ekranga chiqaring.
5.size yordamida nechta mahsulot borligini ko‘rsating.
*/

const products = new Map();

products.set("Apple", 15000).set("Grapes", 18000).set("Banana", 27000);
console.log(products.get("Banana"));
console.log(products.has("Orange"));
products.forEach((price, product) => {
  console.log(product);
});
console.log(products.size);

// ! Set bilan ishlash misollari

/* 
* 1. Setdan foydalanib noyob sonlarni saqlang. Quyidagi amallarni bajaring:
1.add yordamida 5 ta raqam qo‘shing.
2.has bilan ma’lum bir son borligini tekshiring.
3.delete yordamida bitta elementni o‘chiring.
4.size bilan elementlar sonini tekshiring.
5.clear yordamida barcha elementlarni o‘chiring.
*/

const numbers = new Set();

numbers.add(1).add(2).add(3).add(4).add(5).add(6);
console.log(numbers);
console.log(numbers.has(5));
numbers.delete(2);
console.log(numbers);
console.log(numbers.size);
numbers.clear();
console.log(numbers);

/*
* 2. Takrorlanmagan ismlar ro‘yxatini Set yordamida tuzing va quyidagi amallarni bajaring:
1.add yordamida 4 ta ism qo‘shing.
2.has yordamida ma’lum ism borligini tekshiring.
3.forEach yordamida barcha ismlarni ekranga chiqaring.
4.size bilan umumiy sonni ko‘rsating.
*/

const names = new Set();

names.add("Ali").add("Vali").add("Javohir").add("Behuz");
console.log(names.has("Ali"));
names.forEach((values) => {
  console.log(values);
});
console.log(names.size);
