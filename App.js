
//  console.log("hello");

let userScore = 0;
let compScore = 0;
// cashing the dom
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function compChoice() {
    const choices = ["r", "p", "s"];
    const randomnumber = (Math.floor(Math.random() * 3));
    return choices[randomnumber];
}
// convert function
function Convert(letter) {
    if (letter === "r")
        return "Rock"
    if (letter === "p")
        return "Paper"
    if (letter === "s")
        return "Scissors"
}
// compChoice();
function win(user, comp) {
    // win function 
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = Convert(user) + " beats " + Convert(comp) + "  You Win 🔥";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow');
    }, 750)
}


function lose(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = Convert(user) + " losses to " + Convert(comp) + "  You loose 😔";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('red-glow');
    }, 750)
}

function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = Convert(user) + " equals " + Convert(comp) + "  its a draw  🍎";
    document.getElementById(user).classList.add('brown-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('brown-glow');
    }, 750)

}

function game(userChoice) {
    const computerChoice = compChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissors_div.addEventListener('click', () => game('s'));
}
main();
