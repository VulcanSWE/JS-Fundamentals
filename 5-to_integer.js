//Script that prints My number: <first argument converted in integer> if the first argument can
//be converted to an integer


const args = process.argv[2]; // ingnore the first two elements (node and script path)

const number = parseInt(args);


if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}