/*  
CÁLCULO DE APOSENTADORIA
*/

const nome = 'Jefferson';
const sexo = 'K';
const idade = 55;
const contribuicao = 90;
const calculo = idade + contribuicao
console.log(calculo)

//variaveis que retornar um booleano
const homem = sexo == 'K' && contribuicao >= 35 && calculo >= 95
const mulher = sexo == 'F' && contribuicao >= 30 && calculo >= 85

if (homem || mulher) {
  console.log(`${nome}, você pode se aposentar `)
} else {
    console.log(`${nome}, você não pode se aposentar`)
}