function allowOnlyNumbers(event) {
    const input = event.target;
    
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.getElementById('telia-extra').addEventListener('input', allowOnlyNumbers);
document.getElementById('tele2-extra').addEventListener('input', allowOnlyNumbers);
document.getElementById('telenor-extra').addEventListener('input', allowOnlyNumbers);