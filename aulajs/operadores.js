/*=========================================
OPERADORES DE COMPARAÇÃO

> Maior
< Menor
>= Maior igual a
<= Menor igual a
== Igual a
=== Igual e do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo
=========================================*/

console.log(5 > 4) //true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //false

console.log(4 == "4") //true aqui valor igual independente do tipo (number e string)
console.log(4 === "4") //false aqui valor é igual, porem o tipo é diferente
console.log(4 != "5") //true aqui valor é diferente
console.log(4 !== "5") //true aqui o valor é diferente, inclusive o tipo

/*============================
OPERADORES LÓGICOS

&& "E" As duas condições devem ser verdadeiras 
    para que a condição final seja verdadeira

|| "OU" uma das condições deve ser verdadeira

para que a condição final seja verdadeira
! "NÃO" nega uma condição
============================*/

console.log(5 == 5 && 6 == 6) //true as duas condições são verdadeiras
console.log(5 == 5 && 5 == 6) //false 5 não é igual a 6
console.log(5 == 5 && 6 != 6) //false pois estou negando a segunda condição

console.log(5 != 5 || 6 == 6) //true uma ou outra atendida
console.log(5 == 5 || 6 != 6) //true

//console.log(5 > 6 || 5 < 6) //true outra forma de fazer comparando 2 condições
console.log(!(5 > 6)) //true era verdadeira, mas estou negando a condição
console.log(!(5 < 6)) //false era falso, mas estou negando a condição

/*===================================
OPERADORES ARITMÉTICOS

* Multiplicação
/ Divisão
% Resto da divisão
+ Adição
- Subtração
===================================*/

console.log(2 * 2) //4
console.log(2 / 2) //1
console.log(2 % 1.5) //1
console.log(2 + 2) // 4
console.log(2 - 2) //0