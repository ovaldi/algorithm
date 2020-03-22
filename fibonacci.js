// 1, 1, 2, 3, 5, 8...

function fibonacci (n) {
  if (n < 1) {
    return 0;
  }
  if (n < 2) {
    reeturn 1;
  }

  return fibonacci(n - 1) + fibonacci(n-2);
}