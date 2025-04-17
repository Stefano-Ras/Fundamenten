/*const quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"]
const authors = ["Author 1", "Author 2", "Author 3", "Author 4", "Author 5"]
const Button = document.getElementById("changecolourbutton");
const Quote = document.getElementById("quote");
const Author = document.getElementById("quoteauthor");

Button.addEventListener('click', function onClick(){
    var random = Math.floor(Math.random()*colours.length);
    document.body.style.backgroundColor = colours[random];
    Button.style.backgroundColor = colours[random - 1];

    var randomquote = random;
    Quote.innerHTML = quotes[randomquote];
    Quote.style.color = colours[random];

    Author.innerHTML = "- " + authors[randomquote];
    Author.style.color = colours[random];
});
*/


// Opbouw met  "" quotes (ook cijfers)
//const colours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const colours = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"]
const authors = ["Author 1", "Author 2", "Author 3", "Author 4", "Author 5"]
const Button = document.getElementById("changecolourbutton");
const Quote = document.getElementById("quote");
const Author = document.getElementById("quoteauthor");
/*
// Huidige versie
Button.addEventListener('click', function onClick(){
    let = "#";
    for (i = 0; i < 5; i++) {
        var random = Math.floor(Math.random()*colours.length);
    }
    document.getElementById("quote").innerHTML = let + random;
    document.body.style.backgroundColor = let + random;
    document.write(let + random);
});
*/

// function los van EventListener
Button.addEventListener("click", changeColor);
// eest de randomizer opzetten
let random = Math.floor(Math.random() * colours.length);
var randomquote = Math.floor(Math.random()*quotes.length);
//functie opbouw
function changeColor() {
    // vast element inbouwen
    let randomColour = '#';
    // de loop
    for (let i = 0; i < 6; i++) {
        // opbouw
        let random = Math.floor(Math.random() * colours.length);
        // var opzetten
        randomColour += colours[random];
    }
    // terug gegeven aan element (body)
    document.getElementById("hexcolour").innerHTML = randomColour;
    document.getElementById("hexcolour").style.color = randomColour;
    document.body.style.backgroundColor = randomColour;
    Quote.innerHTML = quotes[randomquote];
    Author.innerHTML = "- " + authors[randomquote];

    // snel uitlezen via console
    console.log(randomColour);
};