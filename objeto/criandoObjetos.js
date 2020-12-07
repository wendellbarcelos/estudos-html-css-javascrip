//Criando objetos em js

// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        },
        getValorDia() {
            return (salarioBase / 30)
        },
        getSalarioBase() {
            return salarioBase
        }
    }
}

const f1 = criarFuncionario('João', 1500, 4)
const f2 = criarFuncionario('Marcia', 2200, 9)
const f3 = criarFuncionario('Max', 4500, 2)

// Retornando valor diario, mensal e com o desconto de falta do funcionario
console.log(f1.getValorDia().toFixed(2), f1.getSalarioBase().toFixed(2), f1.getSalario().toFixed(2))
console.log(f2.getValorDia().toFixed(2), f2.getSalarioBase().toFixed(2), f2.getSalario().toFixed(2))
console.log(f3.getValorDia().toFixed(2), f3.getSalarioBase().toFixed(2), f3.getSalario().toFixed(2))

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Objeto ...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)