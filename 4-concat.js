// Script that prints two arguments passed to it, in the following format: “ is ”

const args = process.argv.slice(2); // ingnore the first two elements (node and script path)


if (args.length > 1) {
  console.log(`${args[0]} is ${args[1]}`);
} else if (args.length === 1) {
  console.log(`${args[0]} is undefined`);
} else {
  console.log("undefined is undefined");
}