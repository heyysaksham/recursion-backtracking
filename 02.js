// Q : print 1 to n using recursion

function print1ToN(num) {
  if (num === 0) return;

  print1ToN(num - 1);
  console.log(num);
}

print1ToN(5);
