function calculateTotal(containerId) {
    const elements = [
        document.querySelector(`#${containerId}-first`),
        document.querySelector(`#${containerId}-second`),
        document.querySelector(`#${containerId}-third`),
        document.querySelector(`#${containerId}-fourth`),
        document.querySelector(`#${containerId}-fifth`)
    ];
    return elements.reduce((sum, element) => {
        return sum + (element ? parseInt(element.value) : 0);
    }, 0);
}

function calculateTotals() {
    const treTotal = calculateTotal('tre');
    document.querySelector('#tre-totalSum').textContent = treTotal;
    document.querySelector('#tre-totalSum-24').textContent = treTotal * 24;

    const teliaTotal = calculateTotal('telia');
    const teliaExtra = parseInt(document.querySelector('#telia-extra').value) || 0;
    const teliaTotalWithExtra = teliaTotal + teliaExtra;
    const teliaDifference = teliaTotalWithExtra - treTotal;

    document.querySelector('#telia-totalSum').textContent = teliaTotalWithExtra;
    document.querySelector('#telia-difference-value').textContent = teliaDifference;
    document.querySelector('#telia-difference-value-24').textContent = teliaDifference * 24;

    const tele2Total = calculateTotal('tele2');
    const tele2Extra = parseInt(document.querySelector('#tele2-extra').value) || 0;
    const tele2TotalWithExtra = tele2Total + tele2Extra;
    const tele2Difference = tele2TotalWithExtra - treTotal;

    document.querySelector('#tele2-totalSum').textContent = tele2TotalWithExtra;
    document.querySelector('#tele2-difference-value').textContent = tele2Difference;
    document.querySelector('#tele2-difference-value-24').textContent = tele2Difference * 24;

    const telenorTotal = calculateTotal('telenor');
    const telenorExtra = parseInt(document.querySelector('#telenor-extra').value) || 0;
    const telenorTotalWithExtra = telenorTotal + telenorExtra;
    const telenorDifference = telenorTotalWithExtra - treTotal;

    document.querySelector('#telenor-totalSum').textContent = telenorTotalWithExtra;
    document.querySelector('#telenor-difference-value').textContent = telenorDifference;
    document.querySelector('#telenor-difference-value-24').textContent = telenorDifference * 24;
}

function updateCost(provider) {
    const extraCostInput = document.querySelector(`#${provider}-extra`);
    const extraCost = parseInt(extraCostInput.value);
    if (!isNaN(extraCost)) {
        const currentTotal = parseInt(document.querySelector(`#${provider}-totalSum`).textContent);
        const newTotal = currentTotal + extraCost;
        document.querySelector(`#${provider}-totalSum`).textContent = newTotal;
        calculateTotals();
    }
}

calculateTotals();