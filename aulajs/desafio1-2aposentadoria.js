/*  
CÁLCULO DE APOSENTADORIA
*/

const nome = 'Jéssica';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const calculo = idade + contribuicao
console.log(calculo)

if (calculo >= 85) {
    console.log('Jéssica, você pode se aposentar')
} else {
        console.log('Jéssica, ainda falta mais um pouco para se aposentar, aguente firme')
}