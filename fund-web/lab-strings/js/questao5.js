let procurar = document.getElementById("procurar");
let substituir = document.getElementById("substituir");
let textoNovo = document.getElementById("textoNovo");
let memProcurar = '';

procurar.onclick = () =>
{
    let texto = document.getElementById("texto");
    let textoArray = texto.textContent.split(" ");
    let paraProcurar = document.getElementById("paraProcurar").value;
    if(paraProcurar != '')
    {
        textoNovo.textContent= '';
        memProcurar = paraProcurar;
        for(let i = 0; i < textoArray.length; i++)
        {
            if(paraProcurar.toLowerCase() === textoArray[i].replace(/[^a-z0-Z9-ãéçõíúê]/g , '').replace('-', '')
            .replace('?', '').replace('\n', '').toLowerCase())
                textoArray[i] = `<mark>${textoArray[i]}</mark>`
        }
        
        texto.innerHTML = textoArray.join(" ");
    }
}

substituir.onclick = () =>
{
    let paraSubstituir = document.getElementById("paraSubstituir").value;

    if(paraSubstituir != '')
    {
        let texto = document.getElementById("texto");
        let textoArray = texto.textContent.split(" ");
        for(let i= 0; i < textoArray.length; i++)
        {
            if(memProcurar.toLowerCase() === textoArray[i].replace(/[^a-z0-Z9-ãéçõíúê]/g , '')
            .replace('-', '').replace('?', '').replace('\n', '').toLowerCase()) 
                textoArray[i] = paraSubstituir;
        }
        textoNovo.innerHTML = textoArray.join(" ");
    }
}