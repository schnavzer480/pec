function resetForms() {
    document.getElementById("treForm").reset();
    document.getElementById("teliaForm").reset();
    document.getElementById("tele2Form").reset();
    document.getElementById("telenorForm").reset();
    //document.getElementById("world").value = " ";
    let inputField = document.getElementById("world");
        inputField.value = "";
        inputField.placeholder = "3Världen";
        inputField.style.borderColor = '';
        inputField.classList.remove('valid', 'invalid');
    calculateTotals();
}