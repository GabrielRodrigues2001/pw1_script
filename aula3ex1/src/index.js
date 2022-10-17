//Funções de cálculo
function calculaA(b, c, d) 
{
    return (b * c) / d
}

function calculaB(a, c, d) 
{
    return (a * d) / c
}

function calculaC(a, b, d) 
{
    return (a * d) / b
}

function calculaD(a, b, c) 
{
    return (b * c) / a
}

//Função regra de três
function regraDeTres(a, b, c, d)
{
    if (a == 0) 
    {
        return calculaA(b, c, d)
    }

    else if (b == 0)
    {
        return calculaB(a, c, d)
    }

    else if (c == 0)
    {
        return calculaC(a, b, d)
    }

    else
    {
        return calculaD(a, b, c)
    }
}

console.log(regraDeTres(0, 320, 40, 128))