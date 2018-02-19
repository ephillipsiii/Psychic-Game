var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = [];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];


document.onkeyup = function(event){
    
    
    var guesses = String.fromCharCode(event.keyCode);
    userGuess.push(guesses);

    for(var i = 0; i++;){
        userGuess[i] = "_";
    }
    
    
    if ((userGuess === computerGuess)){
        wins++;
        guessesLeft = 10;
        }
        else if ((userGuess !== computerGuess)){
            guessesLeft--;
        }
        else if ((guessesLeft === "0")){
            losses++
        }
        else if ((losses++) || (wins++) || (guessesLeft = "0")){
            function restart(){
                document.getElementById(guessesLeft, userGuess, computerGuess).reset();
            }
            }
        
        console.log(computerGuess);
        console.log(wins);
        console.log(losses);
        console.log(guessesLeft);
        console.log(userGuess);
    }
    

var game=
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" + 
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters Guessed: " + [userGuess] + "</p>";

document.querySelector(".game").innerHTML = game;
