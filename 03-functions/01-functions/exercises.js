// ! Nazariy

//? 1. setTimeout va setInterval farqi nima? Ikkalasini qanday to'xtatamiz?
// setTimeout berilgan vaqtdan keyin ishlaydi, setInterval berilgan vaqt oraligida ishlaydi to'xtatamasdan.
// Uni to'xtatish uchun o'zgaruvchiga olib clearTimeout bilan to'xtatamiz.

// const set_timeout = setTimeout(
//   () => console.log("Bu funnksiya 3 sekunddan keyin ishlaydi"),
//   3000,
// );

// clearTimeout(set_timeout); // funksiya ishlashdan oldin to'xtatildi

setInterval(function () {
  console.log("Salom");
}, 3000); // buni to'xtatib bolmaydi

const set_interval = setInterval(() => {
  console.log("2 sekund");
}, 2000);

setTimeout(() => {
  clearInterval(set_interval);
  console.log(" 10 sekunddan keyin toxtaydi");
}, 10000);

//? 2. Higher-order function nima? Misol keltir.
// HOF - o'zida function qaytaradigan funksiyalar.

//? 3. Recursive function nima? Qachon ishlatiladi? Xavfi nima?
// Bilmadim

//? 4. Anonymous function nima? Qachon ishlatiladi?
// Faqat shu joyda ishlatsa bo'ladi. lekin nimaga foydali va nimaga kerakligini tushunmadim anglolmadim

//? 5. Returning function nima? Closure bilan qanday bog'liq?
// O'zini ichida o'zini chaqiradigan funksiya

// ! Amaliy
