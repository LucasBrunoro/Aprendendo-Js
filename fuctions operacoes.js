const mult = function (A,B) {
    let total = (A*B)
    return total
}
const divi = function(A,B){
    let total = (A/B)
    return total
}
const soma = function(A,B){
    let total = (A+B)
    return total
}
const sub = function(A,B){
    let total = (A-B)
    return total
}
var A = 90
var B = 2
console.log (`o valor de A é ${A}`)
console.log (`o valor de B é ${B}`)
console.log (`a multiplicação de A por B é  ${mult(A,B)}`)
console.log (`a divisão de A por B é ${divi(A,B)}`)
console.log (`a soma de A por B é ${soma(A,B)}`)
console.log (`a subtração de A por B é ${sub(A,B)}`)