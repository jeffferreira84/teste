/*  
CÁLCULO DE INDICE DE MASSA CORPOREA (IMC)
*/

const nome = "Carlos";
const peso = 90;
const altura = 1.70;

const imc = peso / (altura * altura)
console.log(imc) 

if (imc >= 30) {
    console.log('Carlos você está acima do peso')
}  else {
    console.log('Carlos você não está acima do peso')
}

