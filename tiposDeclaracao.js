console.log(soma(3, 2))

//Function declaration
//nao é obrigado aguardar a declaração da function
function soma(x, y) {
    return x + y
}

//Function expression
//é obrigado aguardar a declaração da function
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 2))

//named function expression
//é obrigado aguardar a declaração da function
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 2))
