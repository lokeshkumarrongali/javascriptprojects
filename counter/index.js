// window.alert("Welcome to the age checker!");


// let age =18;
// if (age >= 18) {
//     console.log(`You are an adult age ${age}.`);
// } else {
//     console.log(`You are a minor age ${age}.`);
// }

// document.getElementById("myP").textContent = "You are an adult age " + age + ".";
//  let username;
// document.getElementById("button").onclick = function() {
//      username = document.getElementById("user").value;

//     document.getElementById("myP").textContent ="Welcome " + username  + " to the website!";
// }

let counter = 0;

function updateCounter() {
    document.getElementById("counter").textContent = counter;
}
document.getElementById("in").onclick = function() {
    counter++;
    updateCounter();
}

document.getElementById("re").onclick = function() {
    counter = 0;
    updateCounter();
}

document.getElementById("de").onclick = function() {
    counter--;
    updateCounter();
}