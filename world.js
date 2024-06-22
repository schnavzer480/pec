const countriesList = [
    "Albanien", "Argentina", "Australien", "Azerbajdzjan", "Bangladesh", "Brasilien", "Chile", "Colombia", "Costa Rica", "Ecuador", 
    "El Salvador", "Färöarna", "Grönland", "Guatemala", "Hongkong", "Indien", "Indonesien", "Israel", "Japan", "Kanada", "Kenya", 
    "Kina", "Macao", "Malaysia", "Mexico", "Nicaragua", "Nigeria", "Nya Zeeland", "Oman", "Pakistan", "Panama", "Peru", "Puerto Rico", 
    "Ryssland", "San Marino", "Saudiarabien", "Schweiz", "Singapore", "Sri Lanka", "Sydkorea", "Taiwan", "Thailand", "Turkiet", 
    "Ukraina", "Uruguay", "USA", "Uzbekistan", "Vietnam", "Vitryssland", "Zambia", "Belgien", "Bulgarien", "Cypern", "Danmark", 
    "Estland", "Finland", "Åland", "Frankrike", "Martinique", "Guadeloupe", "Saint-Martin", "Franska Guyana", "Grekland", "Irland", 
    "Italien", "Kroatien", "Lettland", "Litauen", "Luxemburg", "Malta", "Nederländerna", "Saint-Martin", "Polen", "Portugal", 
    "Madeira", "Azorerna", "Rumänien", "Slovakien", "Slovenien", "Spanien", "Kanarieöarna", "Ceuta", "Melilla", "Sverige", 
    "Tjeckien", "Tyskland", "Ungern", "Österrike", "Storbritannien", "Gibraltar", "Jersey", "Guernsey", "Island", "Liechtenstein", 
    "Norge", "Svalbard"
];

let lastInputValue = '';

function suggestCountry() {
    const input = document.getElementById('world');
    let userInput = input.value.trim();

    const matchingCountries = countriesList.filter(country =>
        country.toLowerCase().startsWith(userInput.toLowerCase())
    );

    if (userInput === '') {
        input.placeholder = "3Världen";
        input.style.borderColor = '';
        input.classList.remove('valid', 'invalid');
    } else {
        if (matchingCountries.length > 0) {
            
            input.style.borderColor = 'green';
        } else {
            
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


document.getElementById('world').addEventListener('input', suggestCountry);

document.getElementById('world').addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' || event.keyCode === 8) {
        document.getElementById('world').value = lastInputValue;

        if (lastInputValue === '') {
            document.getElementById('world').classList.remove('valid', 'invalid');
        }
    }
});