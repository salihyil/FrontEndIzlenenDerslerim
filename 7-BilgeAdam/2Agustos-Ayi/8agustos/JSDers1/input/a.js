/* *inputa yazılanı consola ve p tagına anlık ekleme:*/

let inputAra = document.querySelector('#ara');
let pInput = document.querySelector('#p-ara');

inputAra.addEventListener("input", updateValue);
function updateValue(e) {
    console.log(e.target.value);
    pInput.textContent = e.target.value;
}

/* *inputa yazılanı consola ve p tagına  ekleme onchange event'i ile:*/

function updateLog() {
    let inputMyInput = document.querySelector('#myInput');
    let pMyInput = document.querySelector('#p-myInput');
    console.log(inputMyInput.value);
    pMyInput.textContent = inputMyInput.value;
}
