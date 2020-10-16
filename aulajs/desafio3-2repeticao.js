const usuarios = [
    {nome: 'Jefferson', tecnologias: ['HTML', 'SQL']},
    {nome: 'André', tecnologias: ['SQL', 'SQL']},
    {nome: 'Hellena', tecnologias: ['PHP', 'CSHARP']},
    {nome: 'Pedro', tecnologias: ['JAVASCRIPT', 'PYTHON', 'SQL', 'CSS']}
]

//PRIMEIRO CHECO QUAIS TRABALHAM COM CSS
function checaUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia == 'CSS')
        return true
    }
    return false
}

//DEPOIS DE CHECAR, RETORNO OS USUÁRIOS QUE TRABALHAM COM CSS
for (let i = 0; i < usuarios.length; i++) {
    const variavelChecagem = checaUsuarioUsaCSS(usuarios[i])

    if(variavelChecagem){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }

}
