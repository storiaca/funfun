console.log("Hello");

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
