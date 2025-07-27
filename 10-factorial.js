// Script to calculate the factorial of a number passed as an argument
// The script retrieves the first command line argument, converts it to an integer, and calculates its
// factorial using recursion. If the argument is not a valid number, it returns 1.

const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));