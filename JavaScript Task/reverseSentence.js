
/*Task 1:
    Take a sentence as an input and reverse every word in that sentence. 
    Example - This is a sunny day > shiT si a ynnus yad.
*/


function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");
    
    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
      return word.split("").reverse().join("");
    });
    
    // Join the reversed words to form a new sentence
    const reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
  }
  
  function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question("Enter a sentence: ", function(inputSentence) {
      const reversedSentence = reverseWords(inputSentence);
      console.log("Reversed sentence: " + reversedSentence);
      rl.close();
    });
  }
  
  // Call the main function to start the program
  main();
  