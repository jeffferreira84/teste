const alunosDaTurmaA = [
    {
        nome: 'Jefferson0',
        nota: 9.8,
    },
    {
        nome: 'Jefferson1',
        nota: 0,
    },
    {
        nome: 'Jefferson2',
        nota: 12,
    },
    {
        nome: 'Jefferson3',
        nota: 2,
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Hellena0',
        nota: 3
    },
    {
        nome: 'Hellena1',
        nota: 7
    },
    {
        nome: 'Hellena2',
        nota: 11.9
    },
    {
        nome: 'Hellena3',
        nota: 15
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

function enviaMensagem(media, turma) {
    //Se a média da turma for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

function marcarComoReprovado(alunos) {
    for (let aluno of alunos) {
        aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;

        }
    }
    //console.table(alunos)
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(alunos)
        enviarMensagemReprovado(aluno)
    }
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)