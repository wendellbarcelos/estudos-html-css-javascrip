const cadastro = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(cadastro))
console.log(Object.values(cadastro))
console.log(Object.entries(cadastro))

Object.entries(cadastro).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(cadastro, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

cadastro.dataNascimento = '01/01/2017'
console.log(cadastro.dataNascimento)
console.log(Object.keys(cadastro))

// Object.assing (ECMAScrip 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)