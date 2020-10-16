const usuario = {
    nome: 'Jefferson',
    cidade: 'Limeira',
    empresa: {
        nome: "Supersoft",
        cidade: "Rio Claro",
        foco: "Programação",
        endereco: {
            rua: "Rua Onde o rio faz a curva",
            numero: 550
    }
   }
}

console.log(`O funcionário ${usuario.nome}, morador da cidade de ${usuario.cidade}, trabalha na empresa ${usuario.empresa.nome} que está localizada em ${usuario.empresa.cidade}, ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)


// =========================*/
//   const alunosDaTurmaA = [
//     {
//         nome: "Jefferson",
//         nota: 9.8
//     }, 
