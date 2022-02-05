let escreverData = document.getElementById("escreverData");
let dataEscrita = document.getElementById("dataEscrita");

escreverData.onclick = ()=>{
    let data = document.getElementById("data").value;
    let mes = parseInt(data[5] + data[6]);
    dataEscrita.innerHTML = data[8] + data[9] + " de " + qualMes(mes) + " de " + data[0] + data[1] + data[2] + data[3];
}

function qualMes(num)
{
    switch(num)
    {
        case 1: return "janeiro";
        case 2: return "fevereiro";
        case 3: return "março";
        case 4: return "abril";
        case 5: return "maio";
        case 6: return "junho";
        case 7: return "julho";
        case 8: return "agosto";
        case 9: return "setembro";
        case 10: return "outubro";
        case 11: return "novembro";
        case 12: return "dezembro";
    }
}