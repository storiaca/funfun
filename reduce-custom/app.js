const numbers = [1, 2, 3];
const summingReducer = (accumulator, current) => {
  return current + accumulator;
};
const result =
  //numbers.reduce(summingReducer, 0); // 6
  customReducer(summingReducer, 0, numbers);

function customReducer(reducer, initialAccumulatorValue, array) {
  let accumulatorValue = initialAccumulatorValue;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    accumulatorValue = reducer(accumulatorValue, current);
  }
  return accumulatorValue;
}

console.log(result);
