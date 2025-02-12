// Q : reverse an array (ascending order)

function reverseAnArray(array, leftIndex = 0, rightIndex = array.length - 1) {
  if (leftIndex >= rightIndex) return;

  const temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;

  reverseAnArray(array, leftIndex + 1, rightIndex - 1);
}

const array1 = [1, 2, 3, 4, 5];
reverseAnArray(array1);
console.log(array1);
