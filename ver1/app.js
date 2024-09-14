function calculateTotal(containerId) {
    const elements = [
        document.getElementById(containerId + '-first'),
        document.getElementById(containerId + '-second'),
        document.getElementById(containerId + '-third'),
        document.getElementById(containerId + '-fourth'),
        document.getElementById(containerId + '-fifth')
    ];
    return elements.reduce((sum, element) => {
        return sum + (element ? parseInt(element.value) : 0);
    }, 0);
}

function calculateTotals() {
const treTotal = calculateTotal('tre');
document.getElementById('tre-totalSum').textContent = treTotal;
document.getElementById('tre-totalSum-24').textContent = treTotal * 24;

const teliaTotal = calculateTotal('telia');
const teliaExtra = parseInt(document.getElementById('telia-extra').value) || 0;
const teliaTotalWithExtra = teliaTotal + teliaExtra;
const teliaDifference = teliaTotalWithExtra - treTotal;

document.getElementById('telia-totalSum').textContent = teliaTotalWithExtra;
document.getElementById('telia-difference-value').textContent = teliaDifference;
document.getElementById('telia-difference-value-24').textContent = teliaDifference * 24;

const tele2Total = calculateTotal('tele2');
const tele2Extra = parseInt(document.getElementById('tele2-extra').value) || 0;
const tele2TotalWithExtra = tele2Total + tele2Extra;
const tele2Difference = tele2TotalWithExtra - treTotal;

document.getElementById('tele2-totalSum').textContent = tele2TotalWithExtra;
document.getElementById('tele2-difference-value').textContent = tele2Difference;
document.getElementById('tele2-difference-value-24').textContent = tele2Difference * 24;

const telenorTotal = calculateTotal('telenor');
const telenorExtra = parseInt(document.getElementById('telenor-extra').value) || 0;
const telenorTotalWithExtra = telenorTotal + telenorExtra;
const telenorDifference = telenorTotalWithExtra - treTotal;

document.getElementById('telenor-totalSum').textContent = telenorTotalWithExtra;
document.getElementById('telenor-difference-value').textContent = telenorDifference;
document.getElementById('telenor-difference-value-24').textContent = telenorDifference * 24;
}



function resetForms() {
    document.getElementById('treForm').reset();
    document.getElementById('teliaForm').reset();
    document.getElementById('tele2Form').reset();
    document.getElementById('telenorForm').reset();
    calculateTotals();
}

function updateCost(provider) {
    const extraCostInput = document.getElementById(provider + '-extra');
    const extraCost = parseInt(extraCostInput.value);
    if (!isNaN(extraCost)) {
        const currentTotal = parseInt(document.getElementById(provider + '-totalSum').textContent);
        const newTotal = currentTotal + extraCost;
        document.getElementById(provider + '-totalSum').textContent = newTotal;
        calculateTotals();
    }
}

calculateTotals();