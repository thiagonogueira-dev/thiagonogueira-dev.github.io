function fibonacci(num)
{
    if (num == 1) return 1;
    return num == 2 ? 2 : fibonacci(num - 1) + fibonacci(num - 2); 
}

let fibo = 30;
console.log("Com 100 termos a página não estava carregando.")

for(let i = 1; i <= fibo; ++i)
{
    console.log(`Termo ${i} da sequência de fibonnaci: ${fibonacci(i)}`);
}

console.log("Com 100 termos a página não estava carregando.")