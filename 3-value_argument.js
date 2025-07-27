// This code retrieves command line arguments and logs them to the console

const theArgs = process.argv[2]; // ignore the first two elements (node and script path)

if (theArgs === undefined) {    
  console.log("No argument");
} else {
  console.log(theArgs);
}

// This code checks the number of command line arguments and logs a message accordingly