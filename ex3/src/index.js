function intervaloRandomico(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function palpiteMegaSena()
{
    let palpite = []

    for (let index = 0; index < 6; index++) 
    {
        if (index >= 0 && index <= 2) 
        {
            let num = intervaloRandomico(1, 24)

            while (palpite.includes(num))
            {
                let num = intervaloRandomico(1, 24)
            }

            palpite.push(num)
        }
        else
        {
            let num = intervaloRandomico(25, 60)

            while (palpite.includes(num))
            {
                let num = intervaloRandomico(25, 60)
            }

            palpite.push(num)
        }
    }

    console.log(palpite.sort((a, b) => a - b).toString())
}

palpiteMegaSena()