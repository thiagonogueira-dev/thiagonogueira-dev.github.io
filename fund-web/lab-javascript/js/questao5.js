function numPrimo(num)
{
    for(let i = 2; i < num; ++i)
    {
        if (num % i == 0) return false;
    }
    return true;
}

let firstNumber = 2;
let lastNumber = 1000;

console.log(`Números primos entre ${firstNumber} e ${lastNumber}:`);

while(firstNumber <= lastNumber)
{
    if(numPrimo(firstNumber)) console.log(firstNumber);
    ++firstNumber;
}
