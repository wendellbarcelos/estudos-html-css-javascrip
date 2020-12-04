//Funções Factory 01
//Função factory e uma função que retorna um objeto.

//Factory simples
function criarPessoa() {
    return {
        nome: 'Wendell',
        sobrenome: 'Barcelos'
    }
}

console.log(criarPessoa())

//Criando um produto atraves dos parametros
function criarProdutos(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.10
    }
}

console.log(criarProdutos('Notebook', 1499.99))
console.log(criarProdutos('iPad', 1199.99))


//Class x Factory
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
    
    const p2 = criarPessoa('João')
    p2.falar()