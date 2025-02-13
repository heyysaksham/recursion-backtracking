// Q : Max number in an array

function biggerNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function maxInArray(array, startIndex = 0) {
  if (array.length === 0) return null;

  if (startIndex === array.length - 1) return array[startIndex];

  return biggerNum(array[startIndex], maxInArray(array, startIndex + 1));
}

const answer = maxInArray([12, 34, 54, 65, 70, 22]);
console.log(answer);
