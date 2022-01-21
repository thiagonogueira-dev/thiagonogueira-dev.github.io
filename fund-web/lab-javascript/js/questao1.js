function fatorial(num)
{
    if (num < 0) return "Número invalido"
    return num == 0 ? 1 : num * fatorial(num - 1);
}

console.log("O fatorial de 12 é: " + fatorial(12));