function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

let answer = add(2, 3);
console.log(answer);

console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(isEven(10));
console.log(isValidEmail("justBotir.email.com"));
console.log(isValidEmail("justBotir@email.com"));

let app = (x, y) => x + y;

const result = app(2, 4);
console.log(result);
