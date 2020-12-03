//Curso Web Moderno - Exercícios Javascript

//Exe-01
valores = (a, b) => {
    console.log(`Soma: ${a+b}\n\Multiplicação: ${a*b}\n\Subtração: ${a-b}\n\Divisão: ${a/b}`)
}
valores(2, 2)

//Exe-02
triangulo = (base, alt, comp) => {
    baseAlt = base;
    equilatero = (base * baseAlt)/2;
    isosceles = (base * alt)/2;
    escaleno = (base + alt + comp)/2;
    console.log(`Equilatero: ${equilatero}cm\n\Isosceles: ${isosceles}cm\n\Escaleno: ${escaleno}cm`)
}

triangulo(5, 8, 6)

//Exe-03
calc = (base, expo) => {
    console.log(`${base} elevado a ${expo}: ${base**expo}`)
}
calc(2, 10)

//Exe-04
doisValores = (dividendo, divisor) => {
    resto = dividendo%divisor;
    console.log(`Divisão: ${dividendo/divisor}\n\Resto: ${resto}`)
}
doisValores(10, 4)

//Exe-05
dinheiro = (din1, din2) => {
    valor = din1 + din2
    console.log(`R$ ${valor.toFixed(2)}`)
}
dinheiro(0.1, 0.2)

//Exe-06
jurosSimples = (capInicial, taxJuros, tempoAplic) => {
    simples = capInicial*(1+taxJuros)**tempoAplic
    console.log(`Montante da aplicação juros simples: ${simples.toFixed(2)}`)
    jurosComposto = (capInicial, taxJuros, tempoAplic) => {
        composto = simples - capInicial
        console.log(`Valor da aplicação juros composto: ${composto.toFixed(2)}`)
    }
}
jurosSimples(2000,0.10,4)
jurosComposto(2000,0.10,4)

//Exe-07
