const number = 5;

let sum = 0;
for (let i = 0; i <= number; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
console.log(sum);
