const { json } = require('express');
const Aluno = require('../model/Aluno');
const connection = require('../model/connection');

async function obterTodos(){
    const aluno = await connection.execute('SELECT * FROM alunos');
    return aluno[0];
}

async function obterPorId(id){
    const query = 'SELECT * FROM alunos WHERE id = ?';

    const aluno = await connection.execute(query, [id]);
    return aluno[0];
}

async function cadastrar(obj) {
    const registroAcademico = obj.registroAcademico;
    const nome = obj.nome;
    const email = obj.email;
    const cpf = obj.cpf;

    const dataCadastro = new Date();
    const query = 'INSERT INTO alunos(registroAcademico, nome, email, cpf, dataCadastro) VALUES (?, ?, ?, ?, ?)';

    const [aluno] = await connection.execute(query, [registroAcademico, nome, email, cpf, dataCadastro]);

    return {aluno};
}

// function cadastrar(obj){
//     var aluno = new Aluno(obj);
//     idAtual++;
//     aluno.id = idAtual;
//     listaDeAlunos.push(aluno);

//     return aluno;
// }

function atualizar(aluno){
    var indice = listaDeAlunos.findIndex(p => p.id == aluno.id);
    
    if(indice < 0){
        return;
    }

    listaDeAlunos.splice(indice, 1, aluno);
    return aluno;
}

function deletar(id){
    var indice = listaDeAlunos.findIndex(p => p.id == id);
    if(indice < 0){
        return;
    }

    // Deleta de dentro do array a posicição especifica
    listaDeAlunos.splice(indice, 1);
}


module.exports = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}