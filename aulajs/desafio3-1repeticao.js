const usuarios = [
    {nome: 'Jefferson', tecnologias: ['HTML', 'CSS']},
    {nome: 'André', tecnologias: ['SQL', 'CSS']},
    {nome: 'Hellena', tecnologias: ['PHP', 'CSHARP']},
    {nome: 'Pedro', tecnologias: ['JAVASCRIPT', 'PYTHON', 'SQL']}
]

for (let usuario of usuarios) {
    // console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')} `)
}


  


// function calculaMedia(alunos) {
//     let soma = 0;
//     for(let i = 0; i < alunos.length; i++){
//         soma = soma + alunos[i].nota
//        // return soma // aqui ele retorna o resultado e para a função
//     }
 
//    const media = soma / alunos.length
//    return media
//  }