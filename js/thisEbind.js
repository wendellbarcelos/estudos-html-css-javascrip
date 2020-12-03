//This e bind - ex2

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO gera um retorno undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//This e bind - ex2

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa