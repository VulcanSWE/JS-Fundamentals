// This code retrieves command line arguments and logs them to the console

const theArgs = process.argv.slice(2);

if (theArgs === undefined) {    
  console.log("No argument");
} else {
  console.log(theArgs);
}

// This code checks the number of command line arguments and logs a message accordingly