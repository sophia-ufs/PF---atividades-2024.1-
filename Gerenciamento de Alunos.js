/*
1. Definição de Registro: Crie um registro chamado aluno com os seguintes campos:
nome: Nome do aluno(a) (string)
idade: Idade do aluno(a) (número inteiro)
matricula: Matrícula do aluno(a) (número inteiro)
curso: Código do curso do aluno(a) (string), por exemplo, EC, SI, CC, etc.
*/

const aluno = (nome, idade, matricula, curso) => {
    return {
        nome: nome,
        idade: idade,
        matrícula: matricula,
        curso: curso, 
    }
}

/*
2. Criação da Turma: Crie uma lista chamada turma que armazenará instâncias dos(as) alunos(as).
*/
const turma = []

/*
3. Adição de Alunos(as): 
Implemente uma função adicionarAluno(nome, idade, matricula, curso) que cria um novo registro aluno com os valores passados como argumentos e o adiciona à turma.
*/

const adicionarAluno = (turma) => (nome, idade, matricula, curso) => {
    return [...turma, aluno(nome, idade, matricula, curso)]
}

/*
4. Listagem de Alunos(as): 
Crie uma função listarAlunos() que percorre a turma e exibe os detalhes de cada aluno(a) (nome, idade, matricula e curso) no console.
*/

const listarAlunos = (turma) => console.log(turma)

/*
5. Busca por Curso: Implemente uma função buscarPorCurso(curso) que recebe um curso como argumento e 
retorna uma lista contendo todos os alunos do catálogo que pertencem ao curso especificado.
*/
const buscaPorCurso = (turma) => (curso) => {
    return turma.filter((x) => x.curso == curso)
}

/*
6. Remoção de Alunos: Crie uma função removerAluno(nome) que recebe o nome de um aluno(a) como argumento e 
remove o aluno(a) correspondente da turma.
*/ 

const removerAluno = (nome) => {
    return turma.filter((x) => x.nome != nome)
}

/*
7. Ordenação: Implemente uma função para ordenar os alunos(as) na turma 
por número de matrícula, do mais antigo ao mais recente.
*/ 

const ordenar = (turma) => {
    return [...turma].sort((a,b) => a.matricula - b.matricula)   
}

/* 
8. Contagem de Alunos por Curso: Crie uma função que retorna a contagem de alunos(as) 
para cada curso presente na turma.
*/
const contagem = () => {
    return turma.map()
}

/*
9. Edição de Alunos: Permita a edição dos detalhes de um(a) aluno(a), como nome, matricula, idade ou curso. 
*/
const editar = (turma) => (old_matricula) => (novosDados) => {
    return turma.map((x) => x.matricula == old_matricula? novosDados : x)
}
