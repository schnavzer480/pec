function allowOnlyNumbers(event) {
    const input = event.target;
    
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.querySelector('#telia-extra').addEventListener('input', allowOnlyNumbers);
document.querySelector('#tele2-extra').addEventListener('input', allowOnlyNumbers);
document.querySelector('#telenor-extra').addEventListener('input', allowOnlyNumbers);