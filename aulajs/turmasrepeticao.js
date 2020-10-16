/* USANDO FOR
laço de repetição, caso seja adicionado um novo aluno, para q ele
nao fique fora da formula

let = uma constante que pode variar de valor
alunos.length = quantidade de alunos, faz a contagem por turma
*/

const alunosDaTurmaA = [
    {
        nome: "Jefferson0",
        nota: 1.8
    },
    {
        nome: "Jefferson1",
        nota: 10
    },
    {
        nome: "Jefferson2",
        nota: 2
    }
]
// const alunosDaTurmaB = [
//     {
//         nome: "Hellena0",
//         nota: 10
//     },
//     {
//         nome: "Hellena1",
//         nota: 10
//     },
//     {
//         nome: "Hellena2",
//         nota: 0
//     },
//     {
//         nome: "Novo aluno",
//         nota: 5
//     }
// ]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
        return soma  //- se for colocado dentro da function, a função retorna o resultado e para a função
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
//const media2 = calculaMedia(alunosDaTurmaB)

console.log(media1)

function enviaMensagem(media, turma) {
    //Se a média da turma for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
