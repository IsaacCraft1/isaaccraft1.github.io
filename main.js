//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block";   //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
hideall();

/*JS for hamMenu */
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);

function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}

// Target the game elements
const ball = document.querySelector("#ball");
const scoreBox = document.getElementById("scoreBox");

// Audio object for the catch sound effect
const popAudio = new Audio("audio/hit.mp3");
var score = 0; // Track the total score

// Function to generate random positions
function GetRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// Function to move the ball to random coordinates
function MoveBall() {
    ball.style.left = GetRandom(0, 870) + "px";
    ball.style.top = GetRandom(0, 370) + "px";
}

// Automatically move the ball every 1 second
var moveBallItvId = setInterval(MoveBall, 1000);

// Function that runs when the ball is successfully clicked
function ballCatch() {
    score++; // Increase score by 1
    scoreBox.innerHTML = "Score: " + score; // Update the score display
    popAudio.play(); // Play the sound effect
}

// Attach the click event listener to the ball
ball.addEventListener("click", ballCatch);