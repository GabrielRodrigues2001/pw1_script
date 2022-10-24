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

function recebePitagoras()
{
    let h = document.getElementById("h").value
    let ca = document.getElementById("ca").value
    let co = document.getElementById("co").value

    console.log("Resultado: " + TeoremaDePitagoras(h, ca, co))

    document.getElementById("resposta").innerHTML = TeoremaDePitagoras(h, ca, co)
}