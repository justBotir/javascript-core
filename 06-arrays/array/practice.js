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
