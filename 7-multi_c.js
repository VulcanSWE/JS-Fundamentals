//Write a script that prints x times “C is fun”

const args = process.argv[2]; // ingnore the first two elements (node and script path)

const number = parseInt(args);

if (isNaN(number) || number <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < number; i++) {
    console.log("C is fun");
  }
} 