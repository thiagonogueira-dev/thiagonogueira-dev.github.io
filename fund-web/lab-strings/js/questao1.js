let btInverter = document.getElementById("inverter");
let tInvertido = document.getElementById("fraseInvertida");

btInverter.onclick = function() {
    let frase = document.getElementById("frase");
    tInvertido.innerHTML = frase.value.split('').reverse().join('');
}