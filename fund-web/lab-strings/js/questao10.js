let codificar = document.getElementById("codificar");
let textoCodificado = document.getElementById("textoCodificado")

codificar.onclick = ()=>
{
    let texto = document.getElementById("texto").value;
    let textoArray = texto.split('');
    for(let i = 0; i < textoArray.length; ++i)
    {
        switch(textoArray[i].charCodeAt(0))
        {
            case 84: textoArray[i] = 'P'; break;
            case 116: textoArray[i] = 'p'; break;
            case 69: textoArray[i] = 'O'; break;
            case 101: textoArray[i] = 'o'; break;
            case 78: textoArray[i] = 'L'; break;
            case 110: textoArray[i] = 'l'; break;
            case 73: textoArray[i] = 'A'; break;
            case 105: textoArray[i] = 'a'; break;
            case 83: textoArray[i] = 'R'; break;
            case 115: textoArray[i] = 'r'; break;
            case 80: textoArray[i] = 'T'; break;
            case 112: textoArray[i] = 't'; break;
            case 79: textoArray[i] = 'E'; break;
            case 111: textoArray[i] = 'e'; break;
            case 76: textoArray[i] = 'N'; break;
            case 108: textoArray[i] = 'n'; break;
            case 65: textoArray[i] = 'I'; break;
            case 97: textoArray[i] = 'i'; break;
            case 82: textoArray[i] = 'S'; break;
            case 114: textoArray[i] = 's'; break;
        }
    }
    textoCodificado.innerHTML = textoArray.join('');
}