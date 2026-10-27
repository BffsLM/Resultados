let n1 = 10
let n2 = 5

let resultadoSoma = somar(n1, n2)
let resultadoSubtrair = subtrair (n1, n2)
let resultadoMultiplicacao = multiplicacao (n1, n2)
let resultadoDivisao= divisao (n1, n2)
let resultadoPotencia = potencia (n1, n2)



function somar(n1, n2){
    return n1 + n2
}
function subtrair(n1, n2){
    return n1 - n2
}
function multiplicacao = (n1, n2){
    return n1 * n2
}

function divisao (n1, n2){
    return n1 / n2
}
function potencia (n1, n2){
    return n1 ** n2
}


console.log(`A Soma de ${n1} + ${n2} é ${resultadoSoma}`)
console.log(`A Subtração de ${n1} - ${n2} é ${resultadoSubtrair}`)
console.log(`A Multiplicação de ${n1} * ${n2} é ${resultadoMultiplicacao}`)
console.log(`A Potenciação de ${n1} ** ${n2} é ${resultadoPotencia}`)
