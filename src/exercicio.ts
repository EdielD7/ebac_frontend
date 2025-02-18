// função que recebe como argumentos dois números e retorna a multiplicação deles
function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
}

// Função que recebe um nome e retorna a concatenação “Olá “ + nome
function saudacao(nome: string) {
    return "Olá, " + nome;
}

// Teste das funções
console.log(saudacao("Mundo"));
console.log(multiplicar(10, 20));