// export function sum(a, b) {
//   return a + b + 10;
// }

// console.log("🚀 ~ sum ~ sum:", sum(5, 3));
// // sum(5, 3);

// export function max(a, b) {
//   if (a > b) return a;
//   else if (a < b) return b;
// }

// export function FizBuz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "FizBuz";
//   } else if (num % 3 === 0) {
//     return "Fiz";
//   } else if (num % 5 === 0) {
//     return "Buz";
//   } else {
//     return num;
//   }
// }

// FizBuz(20);

export function Factorial(num) {
  if (num < 0) {
    return NaN; // or throw an Error
  } else if (num === 0) {
    return 1;
  } else {
    console.log("🚀 ~ Factorial ~ num:", num);
    return num * Factorial(num - 1);
  }
}

console.log("🚀 ~ Factorial ~ Factorial:", Factorial(4));
// Factorial(5);
