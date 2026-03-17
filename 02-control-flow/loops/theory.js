// ! While - shart tekshiriladi, agar shart rost bo‘lsa, kod ishlaydi. Shart yolg‘on bo‘lganda to‘xtaydi.

let i = 3;

// * O'sish
while (i < 10) {
  alert(i);
  i++;
}

// * Kamayish
while (i > 0) {
  alert(i);
  i--;
}

// * Ternery operator
let i = 3;
while (i) alert(i--);

// ! Do While - bu kodni kamida bir marta bajarib, keyin shartni tekshiradigan sikl.

let i = 0;

do {
  alert(i);
  i++;
} while (i < 3);

// ! For - boshlang‘ich qiymat, shart va o‘zgarish orqali ma’lum miqdorda takrorlashni amalga oshiradigan sikl.

for (let i = 0; i < 3; i++) {
  alert(i);
}

let i = 0;
for (; i < 3; i++) {
  alert(i);
}

let i = 0;
for (; i < 3; ) {
  alert(i);
  i++;
}

let i = 0;
for (;;) {
  // Cheksiz aylanadigan sikl
  alert(i++);
}

// * Break

let sum = 0;

while (true) {
  let value = +prompt("Raqam kiriting: ");
  if (!value) break;
  sum += value;
}
alert(`Summa: ` + sum);

// * Continue

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}
