var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var firstImg = document.querySelector(".img1");
var secondImg = document.querySelector(".img2");

var title = document.querySelector("h1");

firstImg.setAttribute("src", "./images/dice"+randomNumber1+".png");
secondImg.setAttribute("src", "./images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    title.textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 Wins";
} else {
    title.textContent = "Draw";
}