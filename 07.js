// Q : Check for Fibonacci series (0 1 1 2 3 5 8 13 21)

function fib(num) {
  console.log("calling for n : ", n);
  if (num <= 1) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(8));
