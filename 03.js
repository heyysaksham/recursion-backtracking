// Q : factorial of a number using recursion

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

const fact = factorial(5);
console.log(`Fatorial : ${fact}`);
