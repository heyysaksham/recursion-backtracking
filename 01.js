// Q : print n to 1 using recursion

function printNto1(num) {
  if (num === 0) return;

  console.log(num);
  printNto1(num - 1);
}

printNto1(5);
