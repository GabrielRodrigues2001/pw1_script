//Funções de cálculo
function calculaH(co, ca) 
{
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2))
}

function calculaCO(h, ca) 
{
    return Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2))
}

function calculaCA(h, co) 
{
    return Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2))
}

//Função teorêma de pitágoras
function TeoremaDePitagoras(h, ca, co)
{
    if (h == 0) 
    {
        return calculaH(co, ca)
    }

    else if (co == 0)
    {
        return calculaCO(h, ca)
    }

    else
    {
        return calculaCA(h, co)
    }
}

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

//Calculadora
function calculadora(n1, n2, op)
{
    if(op == "+")
    {
        return (n1 + n2)
    }
    if(op == "-")
    {
        return (n1 - n2)
    }
    if(op == "*")
    {
        return (n1 * n2)
    }
    if(op == "/")
    {
        return (n1 / n2)
    }
    if(op == "potência")
    {
        return Math.pow(n1, n2)
    }
    if(op == "raiz")
    {
        return Math.sqrt((n1 + n2))
    }
}

function escolheOperacao(opcao, p1, p2, p3, p4)
{
    switch(opcao)
    {
        case "pitágoras":
            return TeoremaDePitagoras(p1, p2, p3)
            break

        case "regra de três":
            return regraDeTres(p1, p2, p3, p4)
            break

        case "calculadora":
            return calculadora(p1, p2, p3)
            break

        default:
            return "Fora do escopo."
            break
    }
}

function recebeParametros()
{
    let op = document.getElementById("op").value
    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value
    let p4 = document.getElementById("p4").value

    console.log("Resultado: " + escolheOperacao(op, p1, p2, p3, p4))

    document.getElementById("resposta").innerHTML = escolheOperacao(op, p1, p2, p3, p4)
}