function potencia(num1, num2)
{
    for(let i = 1; i <= num2; ++i)
    {
        let resultado = 1;
        for(let j = 1; j <= i; ++j)
        {
            resultado *= num1;
        }
        console.log(`${num1} elevado a ${i} = ${resultado}`);
    }
}

potencia(4, 30);