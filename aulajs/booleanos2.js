const alunosDaTurmaA = [
    {
        nome: 'Jefferson0',
        nota: 8,
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
        nota: 12,  
    }
]

// const alunosDaTurmaB = [
//     {
//         nome: 'Hellena0',
//         nota: 13
//     },
//     {
//         nome: 'Hellena1',
//         nota: 17
//     },
//     {
//         nome: 'Hellena2',
//         nota: 11.9
//     },
//     {
//         nome: 'Hellena3',
//         nota: 15
//     }
// ]

function calculaMedia(alunos) {
   let soma = 0;
   for(let i = 0; i < alunos.length; i++){
       soma = soma + alunos[i].nota
   }

  const media = soma / alunos.length
  return media
}

const media1 = calculaMedia(alunosDaTurmaA)
//const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    //Se a média da turma for maior que 5, parabenizar a turma
    if (media > 5) {
       console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}
 
enviaMensagem(media1, 'turmaA')
//enviaMensagem(media2, 'turmaB')

//console.log(typeof alunosDaTurmaA[0].nota)
//UPGRADE NAS NOSSAS FUNÇÕES!!!!
//MARCAR ALUNO COMO REPROVADO SE A NOTA FOR MENOR QUE 5 E ENVIAR UMA MENSAGEM

function marcarComoReprovado(alunos){
    for (let aluno of alunos){
        alunos.reprovado = false;
        if(aluno.nota < 5){
            aluno.reprovado = true;
        }
    }

    console.table(alunos)

}

marcarComoReprovado(alunosDaTurmaA)
//marcarComoReprovado(alunosDaTurmaB)
