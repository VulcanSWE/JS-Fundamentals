// Script to print a message to the console depending on the number of arguments

const args = process.argv.slice(2); // ingnore the first two elements (node and script path)


if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}