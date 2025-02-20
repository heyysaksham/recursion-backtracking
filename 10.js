// Q : find subsets for a given set

function subset(array, outputArray, tempArray = [], index = 0) {
  if (index >= array.length) {
    // base condition
    outputArray.push([...tempArray]);
    return;
  }

  tempArray.push(array[index]);
  subset(array, outputArray, tempArray, index + 1);
  tempArray.pop();

  subset(array, outputArray, tempArray, index + 1);
}

const outputArray = [];
subset([1, 2, 3], outputArray);
console.log(outputArray);
