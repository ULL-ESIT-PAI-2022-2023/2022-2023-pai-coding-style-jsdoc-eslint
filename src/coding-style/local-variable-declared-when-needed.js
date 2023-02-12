function sumHighersThanLimit(arrayNumbers, limit){

  let total = 0;
  let initialValue = 0;
  let arrayHighers = [];

  for (let index = 0; index < arrayNumbers.length; index++) {
      if(arrayNumbers[index] >= limit)
      arrayHighers.push(arrayNumbers[index]);
  }
  total = arrayHighers.reduce(
    (accumulator,  currentValue) => accumulator + currentValue,
    initialValue);
}
