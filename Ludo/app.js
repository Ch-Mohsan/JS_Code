let boxes = document.querySelectorAll(".box");
let gammer = document.querySelector(".gammer");
let rPlayer = document.querySelector("#red");
let gPlayer = document.querySelector("#green");
let newbtn = document.querySelector("#new");
let resetbtn = document.querySelector("#reset");
let body = document.querySelector("body");
let startBox = document.querySelector("#position");
let masage = document.querySelector(".masage");
let winnertext = document.querySelector("#winner");
let laderBox=document.querySelector(".laderdiv");
let sanakBox=document.querySelector(".sanakdiv");

let rIndex;
let turn = true;
let redScore = 0;
let greenScore = 0;
let secore;
let turnNumber = 0;


// Layout 
function layout() {
    let index = 100;
    for (box of boxes) {
        box.innerText = index;
        if ((index >= 11 && index <= 20) || (index >= 31 && index <= 40) ||
            (index >= 51 && index <= 60) || (index >= 71 && index <= 80) ||
            (index >= 91 && index <= 100)) {
            box.classList.add("reverse")
        }
        index--;
    }
}

layout();

// Check score
let checkSecore = () => {
    let arr = ["*", "**", "**\t*", "**\t**", "***\t**", "***\t***"];
    rIndex = Math.floor(Math.random() * 6);
    secore = rIndex + 1;
    return arr[rIndex];
}

// Detect score and prevent exceeding 100
function detectsecore(currentScore) {
    if (currentScore >= 95 && currentScore + secore > 100) {
        secore = 0;
    }
}

// Turn of players
let playerTurn = () => {
    if (turn) {
        detectsecore(redScore);  
        redScore += secore;
        masage.innerText = `Turn of Red: Score ${redScore}`;
        gammer.style.backgroundColor = "#770000";

        if (secore == 6) {
            masage.innerText = `Again, Red's turn: Score ${redScore}`;
            turnNumber++;
        } else {
            turn = false;
        }
    } else {
        detectsecore(greenScore); 
        greenScore += secore;
        masage.innerText = `Turn of Green: Score ${greenScore}`;
        gammer.style.backgroundColor = "rgba(0, 100, 0, 0.847)";

        if (secore == 6) {
            masage.innerText = `Again Green turn Score ${greenScore}`;
        } else {
            turn = true;
        }
    }
    winner();  // Check for a winner after the turn
}

// Winner function
let winner = () => {
    if (redScore == 100) {
        winnertext.innerText = "Winner: RED";
        winnertext.classList.remove("hide");
        End();
    } else if (greenScore == 100) {
        winnertext.innerText = "Winner: GREEN";
        winnertext.classList.remove("hide");
        End();
    }
}

// Animation
let animation = () => {
    gammer.classList.add("anima");
    setTimeout(() => {
        gammer.classList.remove("anima");
    }, 3000);
}

// Player rings
rPlayer.addEventListener("click", () => {
    if (redScore === 0) {
        return;
    }
    boxes[99 - (redScore - 1)].append(rPlayer);
})

gPlayer.addEventListener("click", () => {
    if (greenScore === 0) {
        return;
    }
    boxes[99 - (greenScore - 1)].prepend(gPlayer);
})

// Background image of gammer
let imge = (rIndex) => {
    let className = `lodo${rIndex + 1}`;
    gammer.classList.add(className);
    setTimeout(() => {
        gammer.classList.remove(className);
    }, 3000);
}

// End game
let End = () => {
    startBox.appendChild(rPlayer);
    startBox.appendChild(gPlayer);
    masage.innerText="start"
    gammer.style.pointerEvents = 'none'; 
}

// Gammer click event
gammer.addEventListener("click", () => {
    animation();
    checkSecore();
    playerTurn();
    imge(rIndex);
})

// New game
function newGame() {
    redScore = 0;
    secore = 0;
    greenScore = 0;
    if (greenScore == 0 && redScore == 0) {
        winnertext.innerText = "start";  
    }
    
    turn = true;
    startBox.appendChild(rPlayer);
    startBox.appendChild(gPlayer);
    gammer.style.pointerEvents = ''; 
    gammer.style.backgroundColor = "";
    winnertext.classList.add("hide");
}


// New and reset game buttons
newbtn.addEventListener("click", () => {
    newGame();
});
resetbtn.addEventListener("click", () => {
    newGame();
});

