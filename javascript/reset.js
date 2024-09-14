function resetForms() {
    document.querySelector("#treForm").reset();
    document.querySelector("#teliaForm").reset();
    document.querySelector("#tele2Form").reset();
    document.querySelector("#telenorForm").reset();
    
    let inputField = document.querySelector("#world");
        inputField.value = "";
        inputField.placeholder = "3Världen";
        inputField.style.borderColor = '';
    calculateTotals();
}

document.querySelector("#resetButton").addEventListener("click", resetForms);