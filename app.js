const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const newBtn = document.querySelector(".new");
const winMsg = document.querySelector(".win");
const turnDisplay = document.querySelector("h2");
const winnerName = document.querySelector("#winner-name");

let turnO = true;
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && gameActive) {
            box.innerText = turnO ? "O" : "X";
            box.style.color = turnO ? "#4facfe" : "#f8d56b";
            turnO = !turnO;
            turnDisplay.innerText = `Player ${turnO ? "O" : "X"}'s turn`;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const boxA = boxes[a].innerText;
        const boxB = boxes[b].innerText;
        const boxC = boxes[c].innerText;

        if (boxA && boxA === boxB && boxB === boxC) {
            gameActive = false;
            winnerName.innerText = boxA;
            winMsg.classList.remove("hide");
            boxes[a].style.backgroundColor = "rgba(79, 172, 254, 0.3)";
            boxes[b].style.backgroundColor = "rgba(79, 172, 254, 0.3)";
            boxes[c].style.backgroundColor = "rgba(79, 172, 254, 0.3)";
            return;
        }
    }

    // Check for draw
    if ([...boxes].every(box => box.innerText !== "")) {
        gameActive = false;
        winnerName.innerText = "No one - It's a draw!";
        winMsg.classList.remove("hide");
    }
};

const resetGame = () => {
    turnO = true;
    gameActive = true;
    turnDisplay.innerText = "Player O's turn";
    boxes.forEach(box => {
        box.innerText = "";
        box.style.backgroundColor = "";
    });
    winMsg.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
