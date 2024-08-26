function resetForms() {
    document.querySelector("#treForm").reset();
    document.querySelector("#teliaForm").reset();
    document.querySelector("#tele2Form").reset();
    document.querySelector("#telenorForm").reset();
    //document.getElementById("world").value = " ";
    let inputField = document.querySelector("#world");
        inputField.value = "";
        inputField.placeholder = "3Världen";
        inputField.style.borderColor = '';
        //inputField.classList.remove('valid', 'invalid');
    calculateTotals();
}