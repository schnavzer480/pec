const countriesList = [
    'Sweden', 'Norway', 'Denmark', 'Finland', 'Iceland', 
    'Germany', 'France', 'Italy', 'Spain', 'Switzerland'
];

let lastInputValue = ''; // To keep track of the last valid input value

function suggestCountry() {
    const input = document.getElementById('world');
    let userInput = input.value.trim(); // Get and trim user input

    // Find matching countries based on user input
    const matchingCountries = countriesList.filter(country =>
        country.toLowerCase().startsWith(userInput.toLowerCase())
    );

    if (userInput === '') {
        input.placeholder = "3Världen";
        input.style.borderColor = ''; // Reset border color if input is empty
        input.classList.remove('valid', 'invalid'); // Remove valid and invalid classes
    } else {
        if (matchingCountries.length > 0) {
            // Change border color to green
            input.style.borderColor = 'green';
        } else {
            // Change border color to red (or any other color) for invalid input
            input.style.borderColor = 'red';
        }

        if (matchingCountries.length > 0) {
            let suggestedCountry = matchingCountries[0];

            if (suggestedCountry.toLowerCase().startsWith(userInput.toLowerCase())) {
                input.classList.remove('invalid');
                input.classList.add('valid');
                lastInputValue = userInput;

                input.value = suggestedCountry;
                input.setSelectionRange(userInput.length, input.value.length);
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
            }
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }

        input.placeholder = '';
    }
}

// Event listener for input changes
document.getElementById('world').addEventListener('input', suggestCountry);

// Event listener for handling key press events
document.getElementById('world').addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' || event.keyCode === 8) {
        document.getElementById('world').value = lastInputValue;

        if (lastInputValue === '') {
            document.getElementById('world').classList.remove('valid', 'invalid');
        }
    }
});
