

var min = 0;
var max = 9;
const button = document.getElementById("roll");
const output1 = document.getElementById("dice1");
const output2 = document.getElementById("dice2");
const output3 = document.getElementById("dice3");
button.onclick = function() {
    const roll1 = getrandom();
    const roll2 = getrandom();
    const roll3 = getrandom();
    output1.textContent = `${roll1}`;
    output2.textContent = `${roll2}`;
    output3.textContent = `${roll3}`;
};

function getrandom() {
    const roll = Math.floor(Math.random() * (max-min+1)+min);
    return roll;
}





