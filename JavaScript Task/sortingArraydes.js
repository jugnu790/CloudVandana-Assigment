
/*Task 2:
    Take a list of numbers as an input and sort them in descending order. 
    Example - 1 5 3 2 4 > 5 4 3 2 1.
*/

function sortDescending(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }
  
  function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question("Enter numbers separated by spaces: ", function(input) {
      const inputNumbers = input.split(" ").map(Number);
  
      if (!inputNumbers.every(Number.isFinite)) {
        console.log("Invalid input. Please enter numbers separated by spaces.");
        rl.close();
        return;
      }
  
      const sortedArray = sortDescending(inputNumbers);
      console.log("Sorted in descending order: " + sortedArray.join(", "));
      rl.close();
    });
  }
  
  // Call the main function to start the program
  main();
  