const programadores = [
    {
        nome: 'Jefferson', tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jessica', tecnologias: ['javascript', 'CSS']
    },
    {
        nome: 'Hellena', tecnologias: ['HTML', 'Node.js']
    },
    {
        nome: 'Julia', tecnologias: ['CSHARP', 'CSS']
    }
]

//percorrer o array de tecnologias do programador até encontrar aonde tem CSS
function checaProgramadorUsaCSS(programador) {
    for (let tecnologia of programador.tecnologias) {
        if (tecnologia == 'CSS')
            return true
    }
    return false //fica fora 
}

//Retorna o nome do array que possui CSS como tecnologia
for (let i = 0; i < programadores.length; i++) {
    const variavelChecagem = checaProgramadorUsaCSS(programadores[i])

    if (variavelChecagem) {
        console.log(`O programador ${programadores[i].nome} trabalha com CSS`)
    }
}