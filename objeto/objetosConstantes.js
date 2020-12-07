// A variavel aponta para o entender de memoria e lá aponta para o objeto
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}

// quando se altera a variavel não altera o endereço de memoria apenas o objeto
pessoa.nome = 'Maria'

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}  //Ao criar e atribuir um novo objeto a variavel ela vai gerar um erro pois sendo uma constante sempre ira apontar para o endereço de memoria anterior.

Object.freeze(pessoa) // congelando um objeto na qual nao pode mudar o valor

pessoa.nome = "José"
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'wendell'})
pessoaConstante.nome = 'Lidia'
console.log(pessoaConstante)