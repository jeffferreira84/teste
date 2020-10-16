const usuarios = [
    {
        nome: 'Jefferson',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Jessica',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Hellena',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }

]

// Soma tudo o que está no array e depois faz receitas - despesas e retorna valor
function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

//define o inicio da variavel soma igual a 0 e depois começa a incrementar os valores que estão no array
function somaNumeros(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma = soma + numeros
    }
    return soma
}

//chama usuario de usuarios e a constante SALDO guarda o resultado da função de somar das variáveis despesas e receitas
for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo Positivo de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo Negativo de ${saldo.toFixed(2)}`)
    }
}       