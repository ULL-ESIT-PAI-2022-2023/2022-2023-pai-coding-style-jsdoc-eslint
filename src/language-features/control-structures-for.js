for (let count = 0; count < 5; count++) {
  console.log('Value of count: ', count);
}

let numbers = [11, 33, 55, 77, 99];

for (let index in numbers) {
  console.log(index); // log -> 0, 1, 2, 3, 4
}

for (let value of numbers) {
  console.log(value); // log -> 11, 33, 55, 77, 99
}
