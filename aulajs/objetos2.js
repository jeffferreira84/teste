/*==========================
FORMA 2
Objeto é uma coleção de propriedade que recebem valores ou funcionalidades
console é um objeto, pois assim que escrevo a palavra CONSOLE. irá aparecer
algumas propriedades desse objeto

Dessa forma nós temos ARRAYS ou VETORES e tratamos arrays por posições começando do zero
então fica: 0,1,2,3,...50
==========================*/

const alunos = [
    {
        nome: "Jefferson",
        nota: 9.5,
        idade: 35
    }, 

    {
        nome: "Jéssica",
        nota: 5,
        idade: 30 
    }, 

    {
        nome: "Hellena",
        nota: 3.5,
        idade: 1
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log(media)

