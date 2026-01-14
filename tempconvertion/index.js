

const input = document.getElementById("Input");
const tofar = document.getElementById("CtoF");
const tocel = document.getElementById("FtoC");
const btn = document.querySelector('button[type="submit"]');
const result = document.getElementById("result");

btn.addEventListener('click', function(e) {
    e.preventDefault();

    // basic validation
    if (input.value.trim() === '') {
        result.textContent = "Please enter a temperature.";
        return;
    }

    if (tofar.checked) {
        const celsius = Number(input.value);
        const fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (tocel.checked) {
        const fahrenheit = Number(input.value);
        const celsius = (fahrenheit - 32) * 5/9;
        result.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = "Please select a conversion type.";
    }
});


