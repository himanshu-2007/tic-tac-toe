let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let turnO = true;
let win = document.querySelector(".win");
let h2 = document.querySelector("h2");
let cong = document.querySelector(".cong");
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            h2.innerText = "Player X turn";
            box.innerText = "O";
            turnO = false;
        } else {
            h2.innerText = "Player O turn";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showwinner = () => {
    cong.innerText = `Winner is player ${posval1}`;
    win.classList.remove("hide");
};

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
};

const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "", posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                disable();
                cong.innerText = `Winner is player ${posval1}`;
                win.classList.remove("hide");
            }
        }
    }
};

const resetgame = () => {
    turnO = true;
    enable();
    win.classList.add("hide");
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);