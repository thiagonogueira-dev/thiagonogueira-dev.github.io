let btMarcar = document.getElementById("marcar");

btMarcar.onclick = function () 
{
    let frase = document.getElementById("frase").value;
    let vogais = document.getElementById("vgMarcadas");
    let fraseArray = frase.split('');
    for(let i = 0; i < fraseArray.length; ++i)
    {
        switch(fraseArray[i].charCodeAt(0))
        {
            case 97:
            case 101:
            case 105:
            case 111:
            case 117:
            case 65:
            case 69:
            case 73:
            case 79:
            case 85:
                fraseArray[i] = `<b>${fraseArray[i]}</b>`;
        }
    }
    vogais.innerHTML = fraseArray.join('');
}