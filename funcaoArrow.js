// Arrow Function 01
// Função arrow e sempre anonima para utilizar depois precisa ser atribuida a uma variavel.


//Uso da função em uma variavel padrão
let dobro = function (a) {
    return 2 * a
}

//atribuindo a função arrow em uma variavel
dobro = (a) => {
    return 2 * a
}
 
//Simplificando corpo da função usada para funções de um unico parametro
dobro = a => 2 * a  // return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _=> 'Olá' // possui um param
console.log(ola())

// Arrow Function 02
// Em função arrow o this e fixo em um contexto na qual a função foi escrita

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

// Arrow Function 03

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

