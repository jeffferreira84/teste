const alunosDaTurmaA = [
    {
        nome: 'Jefferson0',
        nota: 10
    },
    {
        nome: 'Jefferson1',
        nota: 7
    },
    {
        nome: 'Jefferson2',
        nota: 7
    },
]
const alunosDaTurmaB = [
    {
        nome: 'Hellena0',
        nota: 6
    },
    {
        nome: 'Hellena1',
        nota: 7
    },
    {
        nome: 'Hellena2',
        nota: 2
    }
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    if (media > 5){
       console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5. Estudem mais seus preguiçosos`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
