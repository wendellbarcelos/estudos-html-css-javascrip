const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) //funçao retorna o sempre a sequencia com maior valor, se colocar valor menor ele nao retorna
sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor)