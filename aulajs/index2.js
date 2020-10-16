//Enviando mensagem personalizada para média

const aluno01 = 'Jefferson'
const notaAluno01 = 9.8

const aluno02 = 'Jéssica'
const notaAluno02 = 2

const aluno03 = 'Mayk Brito'
const notaAluno03 = 20

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//Se a média for maior que 5, parabenizar os alunos
if (media > 5) {
    console.log('A média foi de ${media}. Não fez mais que sua obrigação!')
}  else {
    console.log('Precisam estudar mais hein galera!!! Ficam fazendo o que em casa?')
}
//console.log(media > 5)

