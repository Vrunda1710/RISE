
// const dolphinsAvg = [96 + 108 + 89]/3;
// const koalasAvg = [88 + 91 + 110]/3;

//OUTPUT :- No winner!

const dolphinsAvg = [97 + 112 + 101]/3;
const koalasAvg = [109 + 95 + 123]/3;

//OUTPUT :- Koalas win the competition!

// const dolphinsAvg = [97 + 112 + 101]/3;
// const koalasAvg = [109 + 95 + 106]/3;

// //OUTPUT :- It's a tie!




if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    document.getElementById("winner").textContent = "Dolphins win the competition!";
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    document.getElementById("winner").textContent = "Koalas win the competition!";
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    document.getElementById("winner").textContent = "It's a tie!";
} else {
    document.getElementById("winner").textContent = "No winner!";
}
