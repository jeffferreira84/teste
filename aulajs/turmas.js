/*=========================
Function dá pra vc fazer reaproveitamento de código, pra não ficar repetitivo
 Calcular media de turmas com alunos

=========================*/
  const alunosDaTurmaA = [
    {
        nome: "Jefferson",
        nota: 9.8
    }, 

    {
        nome: "Jéssica",
        nota: 10
    }, 

    {
        nome: "Hellena",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: "Fulano",
        nota: 10
        
    }, 

    {
        nome: "Ciclano",
        nota: 10
        
    }, 

    {
        nome: "Beltrano",
        nota: 10
      
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media) {
    if (media > 5) {
        console.log(`A media foi de ${media}. Parabéns`)
    } else {
        console.log('A media é menor que 5')
    }
}

enviaMensagem(media1)
enviaMensagem(media2)