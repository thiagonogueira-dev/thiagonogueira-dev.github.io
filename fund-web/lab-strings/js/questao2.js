let btMarcar = document.getElementById("marcar");

btMarcar.onclick = function () 
{
    let frase = document.getElementById("frase").value;
    let vogais = document.getElementById("vgMarcadas");
    let fraseArray = frase.split('');
    for(let i = 0; i < fraseArray.length; ++i)
    {
        if (fraseArray[i].charCodeAt(0) == 97 || fraseArray[i].charCodeAt(0) == 101 || fraseArray[i].charCodeAt(0) == 105 || fraseArray[i].charCodeAt(0) == 111 || fraseArray[i].charCodeAt(0) == 117)
            fraseArray[i] = `<b>${fraseArray[i]}</b>`;
    }
    vogais.innerHTML = fraseArray.join('');
}