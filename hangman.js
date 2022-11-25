alert("Hello there! Welcome to the best hangman game!!");

const words = [
    "javascript",
    "code",
    "boolean",
    "integer",
    "string",
    "array"
];

let word = words[Math.floor(Math.random() * words.length)];


const answerArray = [];
const wrongLetterArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                answerArray[i] = guess;
                remainingLetters--;
            } 
        }
    }
}


alert(answerArray.join(" "));
alert("Good job! The answer was " + word);