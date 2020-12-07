// IIFE -> Immediately Invoked Function Expression
//So executa o que tem dentro da função saindo do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()