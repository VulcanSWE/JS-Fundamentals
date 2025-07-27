//A Script that prints the addition of 2 integers

const args = process.argv.slice(2); // ingnore the first two elements (node and script path)

const a = parseInt(args[0]);
const b = parseInt(args[1]);


function add(a, b) {
  return a + b;
}

console.log(add(a, b));

