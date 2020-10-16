/*==========================
FORMA 1
Objeto é uma coleção de propriedade que recebem valores ou funcionalidades
console é um objeto, pois assim que escrevo a palavra CONSOLE. irá aparecer
algumas propriedades desse objeto
==========================*/

const aluno01 = {
    nome: "Jefferson",
    nota: 9.8,
    idade: 35
}

const aluno02 = {
    nome: "Jéssica",
    nota: 5,
    idade: 30
}

const aluno03 = {
    nome: "Hellena",
    nota: 3.5,
    idade: 1
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(media)

