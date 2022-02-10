let senha = document.getElementById("senha");
let nivelSenha = document.getElementById("nivelSenha");

senha.onkeyup = ()=>
{
    nivelSenha.innerHTML = null;
    let senhaArray = senha.value.split('');
    if(maiusculaMinuscula(senhaArray))
    {
        nivelSenha.style.color = 'red';
        nivelSenha.innerHTML = `Senha fraca`;
    }
    if(maiusculaMinuscula(senhaArray) && numero(senhaArray))
    {
        nivelSenha.style.color = 'orange';
        nivelSenha.innerHTML = `Senha moderada`;
    }
    if(maiusculaMinuscula(senhaArray) && numero(senhaArray) && especiais(senhaArray))
    {
        nivelSenha.style.color = 'green';
        nivelSenha.innerHTML = `Senha forte`;
    }
}

function maiusculaMinuscula(senha)
{
    for(let i = 0; i <= senha.length; ++i)
    {
        let valor = senha[i].charCodeAt(0);
        if(valor >= 65 && valor <= 90 
        || valor >= 97 && valor <= 122)
            return true;
    }
    return false;
}

function numero(senha)
{
    for(let i = 0; i <= senha.length; ++i)
    {
        let valor = senha[i].charCodeAt(0);
        if(valor >= 48 && valor <= 57)
            return true;
    }
    return false;
}

function especiais(senha)
{
    for(let i = 0; i <= senha.length; ++i)
    {
        let valor = senha[i].charCodeAt(0);
        if(valor >= 33 && valor <= 47 
        || valor >= 58 && valor <= 64)
            return true;
    }
    return false;
}