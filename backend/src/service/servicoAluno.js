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

async function atualizar(aluno) {
    const { nome, email, cpf, id } = aluno;
    const query = 'UPDATE alunos SET nome = ?, email = ?, cpf = ?, dataCadastro = ? WHERE id = ?';
    const dataCadastro = new Date();
    const [alunoUpdate] = await connection.execute(query, [nome, email, cpf, dataCadastro, id]);
    return alunoUpdate;
}

async function deletar(id){
    const query = 'DELETE FROM alunos WHERE id = ?';
    const [alunoDelete] = await connection.execute(query, [id]);
    return alunoDelete;
}


module.exports = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}