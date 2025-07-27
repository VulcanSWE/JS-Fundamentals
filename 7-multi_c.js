//Write a script that prints x times “C is fun”

const args = process.argv[2]; // ingnore the first two elements (node and script path)

const number = parseInt(args);

i = 0;

if (isNaN(number)) {
  console.log("Missing number of occurrences");
} else {
    while (i < number){
    i++;
    console.log("C is fun");
  }
} 