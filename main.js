// Target Page Switching Buttons
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");

var bouncePOPSound = document.querySelector("#bouncePOPSound");

var allpages = document.querySelectorAll(".page");

function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }
}

function show(pgno) {
    hideall();
    let onepage = document.querySelector("#page" + pgno);
    if (onepage) {
        onepage.style.display = "block";
    }
}

page1btn.addEventListener("click", function () { show(1); });
page2btn.addEventListener("click", function () { show(2); });
page3btn.addEventListener("click", function () { show(3); });
page4btn.addEventListener("click", function () { show(4); });
page5btn.addEventListener("click", function () { show(5); });

// Initial Page Setup
hideall();
show(1);

// Hamburger Menu 
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);

function toggleMenus() {
    menuItemsList.classList.toggle("menuShow");
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu";
    } else {
        hamBtn.innerHTML = "Open Menu";
    }
}

// Fullscreen Control Buttons
const btnFS = document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");

btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);

function enterFullscreen() {
    document.documentElement.requestFullscreen();
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Table Tennis Game
var ball = document.querySelector("#ball");
var gameBox = document.querySelector("#gameBox");
var scoreBox = document.querySelector("#scoreBox");

var ballX = 135;
var ballY = 50;
var ballSpeedX = 3;
var ballSpeedY = 4;
var gameScore = 0;

var mouseX = 0;
var mouseY = 0;

// Track mouse position inside the game box
gameBox.onmousemove = trackMouse;

function trackMouse(event) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
}

// Game loop
setInterval(updateGame, 15);

function updateGame() {
    // Update ball position
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    // Bounce off left and right walls
    if (ballX <= 0 || ballX >= 270) {
        ballSpeedX = -ballSpeedX;
    }

    // Bounce off top wall
    if (ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Check if ball touches mouse position
    if (ballY >= mouseY - 30 && ballY <= mouseY + 30) {
        if (ballX >= mouseX - 30 && ballX <= mouseX + 30) {
            if (ballSpeedY > 0) { // Only bounce if moving down

                if (bouncePOPSound) {
                    bouncePOPSound.currentTime = 0;
                    bouncePOPSound.play().catch(function (error) {
                        // User interaction required before audio play
                    });
                }

                gameScore = gameScore + 1;
                scoreBox.innerHTML = "Score: " + gameScore;

                // Every 5 points, increase speed values
                if (gameScore % 5 == 0) {
                    ballSpeedY = -ballSpeedY - 1; // Reverse direction AND add 1 speed
                } else {
                    ballSpeedY = -ballSpeedY; // Reverse direction at current speed
                }
            }
        }
    }

    // Reset ball if it falls past bottom
    if (ballY > 370) {
        ballX = 135;
        ballY = 50;
        ballSpeedX = 3;
        ballSpeedY = 4;
        gameScore = 0;
        scoreBox.innerHTML = "Score: " + gameScore;
    }

    // Move ball on screen
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
}

// Quiz
const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);

const scorebox = document.querySelector("#scorebox");
var q1, q2, q3, q4;

function CheckAns() {
    var quizScore = 0;

    // Question 1
    let q1Field = document.querySelector("#q1-field");
    let q1Selected = document.querySelector("input[name='q1']:checked");
    if (q1Selected) {
        q1 = q1Selected.value;
        if (q1 == "11") {
            quizScore++;
            q1Field.className = "correct-field";
        } else {
            q1Field.className = "wrong-field";
        }
    } else {
        q1Field.className = "wrong-field";
    }

    // Question 2
    let q2Field = document.querySelector("#q2-field");
    let q2Selected = document.querySelector("input[name='q2']:checked");
    if (q2Selected) {
        q2 = q2Selected.value;
        if (q2 == "Both") {
            quizScore++;
            q2Field.className = "correct-field";
        } else {
            q2Field.className = "wrong-field";
        }
    } else {
        q2Field.className = "wrong-field";
    }

    // Question 3
    let q3Field = document.querySelector("#q3-field");
    let q3Selected = document.querySelector("input[name='q3']:checked");
    if (q3Selected) {
        q3 = q3Selected.value;
        if (q3 == "2") {
            quizScore++;
            q3Field.className = "correct-field";
        } else {
            q3Field.className = "wrong-field";
        }
    } else {
        q3Field.className = "wrong-field";
    }

    // Question 4
    let q4Field = document.querySelector("#q4-field");
    let q4Selected = document.querySelector("input[name='q4']:checked");
    if (q4Selected) {
        q4 = q4Selected.value;
        if (q4 == "HandEye") {
            quizScore++;
            q4Field.className = "correct-field";
        } else {
            q4Field.className = "wrong-field";
        }
    } else {
        q4Field.className = "wrong-field";
    }

    scorebox.innerHTML = "Score: " + quizScore + " / 4";
}

function showContent(TimeLine) {
    var selectedContent = document.getElementById(TimeLine);

    if (selectedContent.style.display === "block") {
        selectedContent.style.display = "none";
    } else {
        selectedContent.style.display = "block";
    }
}