// 1. Import the readline-sync library
// Make sure you have installed it first: npm install readline-sync
const input = require('readline-sync');

/**
 * Character Checker Application
 * This program prompts the user for a word/phrase, then an index,
 * and prints the character at that specific index.
 */
function runCharacterChecker() {
    console.log("--- Character Checker ---");

    // 1. Prompt the user for a word or phrase
    const phrase = input.question("Please enter a word or phrase: ");

    // Basic validation for empty phrase
    if (phrase.trim() === '') {
        console.log("Error: You must enter a word or phrase.");
        return; // Exit the function if input is empty
    }

    let index;
    let isValidIndex = false;

    // Loop until a valid integer index is provided
    while (!isValidIndex) {
        // 2. Prompt the user for an index number
        const indexInput = input.question("Enter an index number to find the character (e.g., 0 for the first character): ");

        // Convert the input to an integer
        index = parseInt(indexInput, 10);

        // Validate if the input is a number and within bounds
        if (isNaN(index)) {
            console.log("Error: That is not a valid number. Please enter an integer.");
        } else if (index < 0 || index >= phrase.length) {
            console.log(`Error: Index ${index} is out of bounds for the phrase "${phrase}".`);
            console.log(`Please enter an index between 0 and ${phrase.length - 1}.`);
        } else {
            isValidIndex = true; // Input is valid, exit loop
        }
    }

    // 3. Use bracket notation to access the character
    const character = phrase[index];

    // 4. Print out the character
    console.log(`\nThe phrase you entered is: "${phrase}"`);
    console.log(`The character at index ${index} is: "${character}"`);
    console.log("-------------------------");
}

// Run the application
runCharacterChecker();
