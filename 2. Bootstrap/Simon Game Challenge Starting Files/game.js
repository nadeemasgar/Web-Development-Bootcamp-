var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;

$(".btn").click(function (e) {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function (e) {
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      // Not anle to understand this condition

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("#level-title").text("Game Over, Press Any Key to Restart");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  level++;
  $("#level-title").text(`Level ${level}`);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
