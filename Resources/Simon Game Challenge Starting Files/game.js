const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userclickedPattern = [];
let level = 0;
let start = false;


function nextSequence() {
    userclickedPattern = [];      // updated line

    level++;
    $("h1").text(`level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
 
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function() {
     var userChosenColour = this.id;
     userclickedPattern.push(userChosenColour);
     console.log(userChosenColour);
     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userclickedPattern.length-1);
})

function playSound(colorName) {

    var audio = new Audio("sounds/"+colorName+".mp3");     // updated line
    audio.play();

    // switch(colorName) {
    //     case "red":
    //         var audio = new Audio("sounds/red.mp3");
    //         audio.play()
    //     break;

    //     case "blue":
    //         var audio = new Audio("sounds/blue.mp3");
    //         audio.play()
    //     break;

    //     case "green":
    //         var audio = new Audio("sounds/green.mp3");
    //         audio.play()
    //     break;

    //     case "yellow":
    //         var audio = new Audio("sounds/yellow.mp3");
    //         audio.play()
    //     break;

    //     default :
    //         var audio = new Audio("sounds/wrong.mp3");
    //         audio.play()
        
    // }

}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

$(document).keypress(function () {
    if (!start) {
        $("#level-title").text("Level " + level);  // updated line
        nextSequence();
        start = true;
    }
})

function checkAnswer(cureentLevel) {
    if(userclickedPattern[cureentLevel] === gamePattern[cureentLevel]) {
        if (userClickedPattern.length === gamePattern.length){  // updated line
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    } else {
        playSound("wrong");           // updated line
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userclickedPattern = [];
    start = false;
}