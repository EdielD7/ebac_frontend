// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Bruno', nota: 5.5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Diana', nota: 4 },
    { nome: 'Eduardo', nota: 6 }
];

// Função que filtra alunos com nota maior ou igual a 6
function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e armazenando o resultado em uma variável
const aprovados = filtrarAprovados(alunos);

console.log(aprovados);