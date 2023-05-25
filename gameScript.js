var chance;

var turn = document.getElementById("turn");
var count = 0;

var grid1 = document.getElementById("11");
var grid2 = document.getElementById("12");
var grid3 = document.getElementById("13");
var grid4 = document.getElementById("21");
var grid5 = document.getElementById("22");
var grid6 = document.getElementById("23");
var grid7 = document.getElementById("31");
var grid8 = document.getElementById("32");
var grid9 = document.getElementById("33");


function checkWin() {

    if (   (grid1.innerText == "O" && grid2.innerText == "O" && grid3.innerText == "O")
        || (grid1.innerText == "X" && grid2.innerText == "X" && grid3.innerText == "X")
        || (grid4.innerText == "O" && grid5.innerText == "O" && grid6.innerText == "O")
        || (grid4.innerText == "X" && grid5.innerText == "X" && grid6.innerText == "X")
        || (grid7.innerText == "X" && grid8.innerText == "X" && grid9.innerText == "X")
        || (grid7.innerText == "O" && grid8.innerText == "O" && grid9.innerText == "O")


        || (grid1.innerText == "X" && grid4.innerText == "X" && grid7.innerText == "X")
        || (grid1.innerText == "O" && grid4.innerText == "O" && grid7.innerText == "O")
        || (grid2.innerText == "X" && grid5.innerText == "X" && grid8.innerText == "X")
        || (grid2.innerText == "O" && grid5.innerText == "O" && grid8.innerText == "O")
        || (grid3.innerText == "O" && grid6.innerText == "O" && grid9.innerText == "O")
        || (grid3.innerText == "X" && grid6.innerText == "X" && grid9.innerText == "X")

        || (grid1.innerText == "X" && grid5.innerText == "X" && grid9.innerText == "X")
        || (grid1.innerText == "O" && grid5.innerText == "O" && grid9.innerText == "O")
        || (grid3.innerText == "O" && grid5.innerText == "O" && grid7.innerText == "O")
        || (grid3.innerText == "X" && grid5.innerText == "X" && grid7.innerText == "X")
    ) {

        if (chance == 0) {
            var status = document.getElementById("s");
            status.style.opacity = 1;
            status.innerText = "Player 2 Wins!!";
            grid1.onclick = null;
            grid2.onclick = null;
            grid3.onclick = null;
            grid4.onclick = null;
            grid5.onclick = null;
            grid6.onclick = null;
            grid7.onclick = null;
            grid8.onclick = null;
            grid9.onclick = null;

        }
        else if (chance == 1) {
            var status = document.getElementById("s");
            status.style.opacity = 1;
            status.innerText = "Player 1 Wins!!";
            grid1.onclick = null;
            grid2.onclick = null;
            grid3.onclick = null;
            grid4.onclick = null;
            grid5.onclick = null;
            grid6.onclick = null;
            grid7.onclick = null;
            grid8.onclick = null;
            grid9.onclick = null;
        }
    }

}

function generateChance() {
    var a = document.getElementById("win");
    var b = document.getElementById("but");
    chance = Math.floor(Math.random() * 2);
    if (chance == 0) {
        turn.innerText = "Player 1";
        a.style.opacity = 1;
        a.innerText = "Player 1 Wins the toss"
        setTimeout(() => { a.innerText = "" }, 2000);
    }
    else {
        turn.innerText = "Player 2";
        a.style.opacity = 1;
        a.innerText = "Player 2 Wins the toss"
        setTimeout(() => { a.innerText = "" }, 2000);
    }
    b.style.opacity = 0;
}


function mark(div) {
    count++;
    console.log(count);
    if (count == 9) {
        var status = document.getElementById("s");
        status.style.opacity = 1;
        status.innerText = "Draw!! ";
        grid1.onclick = null;
        grid2.onclick = null;
        grid3.onclick = null;
        grid4.onclick = null;
        grid5.onclick = null;
        grid6.onclick = null;
        grid7.onclick = null;
        grid8.onclick = null;
        grid9.onclick = null;
    }

    var grid = document.getElementById(div);
    if (chance == 0) {
        grid.innerText = "O";
        turn.innerText = "Player 2";
        chance = 1;
        grid.onclick = null;
    }
    else if (chance == 1) {
        grid.innerText = "X";
        turn.innerText = "Player 1";
        chance = 0;
        grid.onclick = null;
    }
    checkWin();
}
 

function reset(){
    window.location.href = "TicTacToe.html";   
}