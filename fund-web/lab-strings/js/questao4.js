let btSeparar = document.getElementById("separar");

btSeparar.onclick = ()=>
{
    let texto = document.getElementById("texto");
    let tabela = document.getElementById("tabela");
    let textoArray = texto.value.split(" "); 
    let textoDigitado = document.getElementById("textoDigitado");
    let listaPalavras = new Array()
    texto.value = '';

    for(let i = 0; i < textoArray.length; i++)
    {
        textoArray[i] = textoArray[i].replace(/[^a-z0-Z9-ãéçõíúê]/g , '').replace('-', '');
    }

    listaPalavras[0] = new Object();
    listaPalavras[0].palavra = textoArray[0];
    listaPalavras[0].ocorrencia = 1;

    let naoExiste, num;

    for(let i = 1; i < textoArray.length; i++)
    {
        naoExiste = true;
        for(let j = 0; j < listaPalavras.length; j++)
        {
            if(listaPalavras[j].palavra.toLowerCase() === textoArray[i].toLowerCase())
            {    
                listaPalavras[j].ocorrencia++;
                naoExiste = false;
                break;
            }
        }
        if(naoExiste)
        {
            num = listaPalavras.length;
            listaPalavras[num] = new Object();
            listaPalavras[num].palavra = textoArray[i]
            listaPalavras[num].ocorrencia = 1;
        }
    }

    for(let i = 0; i < listaPalavras.length; i++)
    {
        for(let j = 0; j < listaPalavras.length; j++)
        {
            if(listaPalavras[i].ocorrencia >= listaPalavras[j].ocorrencia)
            {
                let aux = listaPalavras[i];
                listaPalavras[i] = listaPalavras[j];
                listaPalavras[j] = aux;
            }
        }
    }

    textoDigitado.innerHTML = textoArray.join(' ');

    tabela.border = "1px solid";
    tabela.innerHTML = "<tr><th>Palavra</th><th>Ocorrência(s)</th></tr>";
    
    let i = 0;
    while(i < listaPalavras.length && listaPalavras[i].ocorrencia == listaPalavras[0].ocorrencia)
    {
        if(listaPalavras[i].palavra != '')
        {
            tabela.innerHTML += `<tr><td>${listaPalavras[i].palavra}</td>
            <td>${listaPalavras[i].ocorrencia}</td></tr>`;
        }
        i++
    }
}