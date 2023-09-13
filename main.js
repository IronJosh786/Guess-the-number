let randomNumber = Math.floor(Math.random()*100) + 1;
let result = document.querySelector(".result");
let previous = document.querySelector(".previous");
let remaining = document.querySelector(".remaining");
let remainingCount = 10;
let previousString = "";

function checkNumber() {
    let user_guess = parseInt(document.querySelector("#user_guess").value);
    if(user_guess === randomNumber) {
        result.innerHTML = "Awesome! Correct Answer. Page will now reload.";
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
    else if(remainingCount==0) {
        result.innerHTML = `No more chances left! Original Answer was ${randomNumber}.  Page will now reload.`;
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
    else if(remainingCount==1 && user_guess !== randomNumber) {
        remainingCount -= 1;
        previousString += user_guess + " ";
        result.innerHTML = `No more chances left! Original Answer was ${randomNumber}.  Page will now reload.`;
        previous.innerHTML = `Previous Guesses: ${previousString}`;
        remaining.innerHTML = `Remaining Guesses: ${remainingCount}`;
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
    else if(user_guess !== randomNumber) {
        remainingCount -= 1;
        previousString += user_guess + " ";
        result.innerHTML = "OOPS! Try again";
        previous.innerHTML = `Previous Guesses: ${previousString}`;
        remaining.innerHTML = `Remaining Guesses: ${remainingCount}`;
    }
}