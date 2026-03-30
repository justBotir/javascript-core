// ! Call
// call metodi funksiyani darhol chaqiradi va unga birinchi argument sifatida kontekst (this), keyin esa odatiy argumentlar beriladi.
// Quyidagi funksiyani call yordamida ishlating:

const student = { name: "Zuhra" };

function introduce(age) {
  console.log(`Mening ismim ${this.name}, yoshim ${age}.`);
}

introduce.call(student, 19);

// ! Apply
// apply ham call kabi ishlaydi, lekin argumentlarni massiv sifatida qabul qiladi.

const car = { brand: "Tesla" };

function describe(model, year) {
  console.log(`${this.brand} - ${model}, ${year}-yil.`);
}

describe.apply(car, ["Tesla", 2025]);

// ! Bind
// bind metod call va apply dan farqli ravishda funksiyani darhol chaqirmaydi, balki yangi funksiya qaytaradi.

const animal = { type: "Mushuk" };

function sound(noise) {
  console.log(`${this.type} ovoz: ${noise}`);
}

const meowMeow = sound.bind(animal, "meow meow");
meowMeow();
