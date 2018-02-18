var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event){
    
    var userGuess = event.key;

    var letter = String.fromCharCode(event.lettersGuessed);
    
    if ((userGuess === computerGuess)){
        wins++;
        }
        else if ((userGuess !== computerGuess)){
            guessesLeft--;
        }
        else if ((guessesLeft === "0")){
            losses++
        }
        else if ((losses++) || (wins++) || (guessesLeft = "0")){
            function restart(){
                document.getElementById(guessesLeft, lettersGuesssed, computerGuess).reset();
            }
            }
        
        console.log(userGuess);
        console.log(computerGuess);
        console.log(wins);
        console.log(losses);
        console.log(guessesLeft);
        console.log(lettersGuessed);
    }
    

var game=
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" + 
    "<p>Guesses Left: " + guessesLeft + "</p>";

document.querySelector(".game").innerHTML = game;
