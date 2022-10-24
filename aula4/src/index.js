function cumprimentoNeutro(entrada)
{
    switch(entrada)
    {
        case "good morning":
            return "Bom dia"
            break

        case "good afternoon":
            return "Boa tarde"
            break

        case "good night":
            return "Boa noite"
            break
    }
}

console.log(cumprimentoNeutro("good morning"))