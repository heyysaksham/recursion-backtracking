// Q : print array digits

function printArray(array, index = 0) {
  if (array.length === index) return;

  console.log(array[index]);
  printArray(array, index + 1);
}

printArray([10, 20, 30, 40, 50]);
