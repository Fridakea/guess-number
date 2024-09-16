// document.querySelector("#tal").value
let randomNumber = Math.round(Math.random()*100);

window.addEventListener("DOMContentLoaded", guessNumber)

function guessNumber() {
    document.querySelector("#submit-button").addEventListener("mousedown", checkNumber);
    document.querySelector("#emoji").classList.add("hide");

    console.log(randomNumber);
}

function checkNumber() {
    document.querySelector("#number").value;
    console.log("tal", document.querySelector("#number").value);

    if (document.querySelector("#number").value > randomNumber) {
        document.querySelector(".guess-message").textContent = "Du gættede desværre for højt. Skriv et nyt tal for at prøve igen";
    } else if (document.querySelector("#number").value < randomNumber) {
        document.querySelector(".guess-message").textContent = "Du gættede desværre for lavt. Skriv et nyt tal for at prøve igen";
    } else if (document.querySelector("#number").value = randomNumber) {
        rightGuess();
    }
}

function rightGuess() {
    document.querySelector(".guess-message").innerHTML = "Tillykke du gættede rigtigt! Vil du prøve igen?"
    document.querySelector("#emoji").classList.remove("hide");
    randomNumber = Math.round(Math.random()*100); // Nyt tal - gæt igen
}