// Q : calculate power

function calcPower(num, exp) {
  if (exp === 1) {
    return num;
  }
  if (exp === 0) {
    return 1;
  }

  const halfPower = calcPower(num, Math.floor(exp / 2));

  if (exp % 2 === 0) {
    return halfPower * halfPower;
  } else return halfPower * halfPower * num;
}

console.log(calcPower(2, 4));
