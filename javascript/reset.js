function resetForms() {
    
    document.querySelector("#treForm").reset();
    document.querySelector("#teliaForm").reset();
    document.querySelector("#tele2Form").reset();
    document.querySelector("#telenorForm").reset();

    document.querySelector("#extra-user-price").value = "";
    document.querySelector("#extra-user-amount").value = "";

    document.querySelector("#telia-extra").value = "";
    document.querySelector("#tele2-extra").value = "";
    document.querySelector("#telenor-extra").value = "";


    document.querySelector("#tre-extra-user-cost").style.display = "none";
    document.querySelector("#tre-extra-user-cost").textContent = "0";

    let inputField = document.querySelector("#world");
    inputField.value = "";
    inputField.placeholder = "3Världen";
    inputField.style.borderColor = '';

    document.querySelector("#tre-totalSum").textContent = "0";
    document.querySelector("#tre-totalSum-24").textContent = "0";
    document.querySelector("#telia-totalSum").textContent = "0";
    document.querySelector("#telia-difference-value").textContent = "0";
    document.querySelector("#telia-difference-value-24").textContent = "0";
    document.querySelector("#tele2-totalSum").textContent = "0";
    document.querySelector("#tele2-difference-value").textContent = "0";
    document.querySelector("#tele2-difference-value-24").textContent = "0";
    document.querySelector("#telenor-totalSum").textContent = "0";
    document.querySelector("#telenor-difference-value").textContent = "0";
    document.querySelector("#telenor-difference-value-24").textContent = "0";

    calculateTotals();
}

document.querySelector("#resetButton").addEventListener("click", resetForms);
