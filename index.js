const music = document.getElementById("bg-music");

const startgamebtn = document.querySelector(".startgamebtn");
startgamebtn.addEventListener("click",() => {
    music.play();
    document.getElementById("start-page").classList.replace("start-page","hidden");
    document.getElementById("range-section").classList.remove("hidden");
});

let guesses = 10;
let gameactive = true;

const startbtn = document.querySelector(".startbtn");
startbtn.addEventListener("click", () => {
    document.getElementById("range-section").classList.replace("range-section","hidden");
    document.getElementById("guessing-section").classList.remove("hidden");
    let value1 = Number(document.querySelector(".range-input-1").value);
    let value2 = Number(document.querySelector(".range-input-2").value);
    const ran_num = Math.floor(Math.random() * (value2 - value1 + 1)) + value1;
    const guessbtn = document.querySelector(".guessbtn");
    guessbtn.addEventListener("click", () => {
        if (!gameactive) return;
        let user_guess = Number(document.querySelector(".user-guess-input").value);
        if (guesses > 0) {
            if (user_guess === ran_num) {
                guesses -=1 ;
                document.querySelector(".low-high-won").textContent = "You won🎉.";
                document.querySelector(".rem-guesses").textContent = `You won with ${guesses} guesses left.`;
                gameactive = false;
            } else if (user_guess > ran_num) {
                guesses -=1 ;
                document.querySelector(".low-high-won").textContent = "You guessed high.";
                document.querySelector(".rem-guesses").textContent = `You have ${guesses} guesses remaining.`;
            } else {
                guesses -=1 ;
                document.querySelector(".low-high-won").textContent = "You guessed low.";
                document.querySelector(".rem-guesses").textContent = `You have ${guesses} guesses remaining.`;
            }
        } else {
            document.querySelector(".low-high-won").textContent = "Game over❌.";
            document.querySelector(".rem-guesses").textContent = "You have 0 guesses remaining.";
        }
    });
});

const user_guess = document.querySelector(".user-guess-input");
const guessbtn = document.querySelector(".guessbtn");
user_guess.addEventListener("keydown",(event) => {
    if (event.key === "Enter"){
        guessbtn.click();
    }
});