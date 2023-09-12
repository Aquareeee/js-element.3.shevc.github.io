const choices = ["Камень", "Ножницы", "Бумага"];
const resultElement = document.getElementById("result");

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Ничья!";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        return "Вы победили!";
    } else {
        return "Компьютер победил!";
    }
}

function playGame(playerChoice) {
    const computer = computerChoice();
    const winner = determineWinner(playerChoice, computer);
    resultElement.textContent = `Вы выбрали: ${playerChoice}, Компьютер выбрал: ${computer}. ${winner}`;
}

document.getElementById("rock").addEventListener("click", function () {
    playGame("Камень");
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame("Ножницы");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("Бумага");
});