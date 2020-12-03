//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//Armazenar em uma variável
const fun2  = function() {}

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function () {console.log("Executando...") })

//Um função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)




//parametros de retorno
function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

area(5, 5)


