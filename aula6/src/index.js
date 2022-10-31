function encontraMultiplos()
{
    let m = 0
    let multiplo = 0

    while (m < 1)
    {
        multiplo = Math.floor(Math.random() * 100)

        if (multiplo % 7 == 0) {
            m++
            console.log(multiplo + " é múltiplo de 7.")
        }
        else 
        {
            console.log(multiplo + " não é múltiplo de 7.")
        }
    }
}

function listaMultiplos(quantidade)
{
    let m = 0
    let multiplo = 0
    let vezes = 0

    while (m < quantidade)
    {
        vezes++
        multiplo = Math.floor(Math.random() * 100)

        if (multiplo % 7 == 0) {
            m++
            console.log(multiplo + " é múltiplo de 7.")
        }
    }
    console.log("Foram sorteados " + vezes + " números para encontrar " + quantidade + " múltiplos de 7.")
}

listaMultiplos(25)