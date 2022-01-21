function somaPares(num)
{
    let resultado = 0;
    for(let i = 1; i <= num; ++i)
    {
        if(i % 2 == 0) resultado += i;
    }
    return resultado;
}

console.log(`A soma de todos o números pares até 1000 é: ${somaPares(1000)}`)