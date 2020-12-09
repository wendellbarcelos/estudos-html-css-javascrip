let aprovados = new Array('Bia', 'Carlos', 'Ana')  
console.log(aprovados) //Cria um array de forma construtora

aprovados = ['Bia', 'Carlos', 'Ana'] //Cria um array de forma literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados.push('Lucas')  //Adiciona valor dentro de um array
console.log(aprovados)
console.log(aprovados.length)  //Retorna o tamanho do array

aprovados[7] = 'José' //Adiciona valor a partir do indice 7 deixando vazio 3 indices
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()
console.log(aprovados) //Coloca todos os valores em ordem numerica e alfabetica

delete aprovados[4]  //Deleta valor do indice 4 (Lucas)
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados) 
aprovados.splice(4,4)  //A partir do indice 4 exclua 4 valores
console.log(aprovados)
aprovados.splice(4, 'Bruno', 'Juca', 'Marcus')  //A partir do indice 4 adicione 4 valores
console.log(aprovados)

//Metodos Importantes

//Sempre que for criada uma variavel sendo const não altera seu valor

const pilotos = ['Vettel', 'Alonso', 'Raikkone', 'Massa']
pilotos.pop() // Exclui o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento da lista
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona o primeiro elemento da lista
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') //Adicionando atraves do spline
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Cria novo array a partir do indice 1 ate o indice 4
console.log(algunsPilotos2)

// Usando object como array

const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray.toString())