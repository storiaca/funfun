/**
 * Map example
 */
const numbers = [2, 4, 8];

const addTwo = number => number + 2;

const result = mapArray(addTwo, numbers);

function mapArray(transform, array) {
  let transformedArray = [];
  for (let i = 0; i < array.length; i++) {
    // const currentItem = array[i];
    // const transformed = transform(currentItem);
    transformedArray.push(transform(array[i]));
  }
  return transformedArray;
}

console.log(result);

/**
 * Filter example
 */
const isMoreThan5 = number => number > 5;

const filterResult = filterArray(isMoreThan5, numbers);

function filterArray(predicate, array) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (predicate(currentItem)) {
      filteredArray.push(currentItem);
    }
  }
  return filteredArray;
}

console.log(filterResult);
