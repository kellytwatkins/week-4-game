//Define variables
var score = 0;
var randomNumber = 0;
var crystalNumber1 = 0;
var crystalNumber2 = 0;
var crystalNumber3 = 0;
var crystalNumber4 = 0;
var wins = 0;
var losses = 0;


//Random number appears at start of game
function beginGame () {
    randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
    $("#randomNumber").html("<h1>" + randomNumber + "</h1>");
    
    crystalNumber1 = Math.floor(Math.random() * 12) + 1;
    console.log(crystalNumber1);
    crystalNumber2 = Math.floor(Math.random() * 12) + 1;
    console.log(crystalNumber2);
    crystalNumber3 = Math.floor(Math.random() * 12) + 1;
    console.log(crystalNumber3);
    crystalNumber4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystalNumber4);
};

//Player clicks crystal and players score is updated
$("#crystal1").click(function() {
    score = Number(score) + Number(crystalNumber1);
    $("#totalScore").empty();
    $("#totalScore").append(score);
    
    compare();
})

$("#crystal2").click(function() {
    score = score + crystalNumber2;
    $("#totalScore").empty();
    $("#totalScore").append(score);
    
    compare();
})

$("#crystal3").click(function() {
    score = score + crystalNumber3;
    $("#totalScore").empty();
    $("#totalScore").append(score);
    
    compare();
})

$("#crystal4").click(function() {
    score = score + crystalNumber4;
    $("#totalScore").empty();
    $("#totalScore").append(score);
    
    compare();
})

function compare() {
    if (score === randomNumber) {
        alert("You won! Let's play again.");
        wins = Number(wins) + 1;
        $("#wins").empty();
        $("#wins").append(wins)
        resetGame();
    }
    else if (score > randomNumber) {
        alert("You lost. Try again!");
        losses = Number(losses) + 1;
        $("#losses").empty();
        $("#losses").append(losses)
        resetGame();
    }
//    else {
//        console.log(score);
//    }
}


//Game restarts and new random number is shown & crystals will have new hidden values. Users score and score counter will reset to zero
function resetGame() {
    $("#totalScore").empty();
    score = 0;
    $("#totalScore").append(score);
    
    $("#randomNumber").empty();
    randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
    $("#randomNumber").html("<h1>" + randomNumber + "</h1>");
    
    crystalNumber1 = 0;
    crystalNumber1 = Math.floor(Math.random() * 12) + 1;
    
    
    crystalNumber2 = 0;
    crystalNumber2 = Math.floor(Math.random() * 12) + 1;
    
    
    crystalNumber3 = 0;
    crystalNumber3 = Math.floor(Math.random() * 12) + 1;
    
    
    crystalNumber4 = 0;
    crystalNumber4 = Math.floor(Math.random() * 12) + 1;
    
}

//Show the number of games player wins and loses


//MAIN PROCESS
beginGame();