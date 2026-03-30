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

// ! Mustahkamlash savollari
/*
1. find va filter farqi nima?
- find shartga 1 tasi to'g'ri kelsa bas, filterda barchasi to'g'ri kelishi kerak.
2. map va forEach farqi nima? Qachon qaysinisini ishlatamiz?
- map barcha qiymatlar bilan amal bjarish uchun, forEach array ichidagi object lar bilan ham amal bajara oladi
3. reduce da acc va 0 nima vazifa o'taydi?
- acc sonlarni yigib boradi, 0 esa boshlang'ich qiymat
4. Map va oddiy Object farqi nima? Qachon Map ishlatamiz?
- Map ning asosiy farqi Non-Primitiv data type larni ham key sifatida qabul qiladi. umumiy type ni yaxshi farqlaydi
5. Set da takroriy qiymat qo'shsak nima bo'ladi?
- Birinchisini qabul qiladi qolganini olib tashaydi
*/
