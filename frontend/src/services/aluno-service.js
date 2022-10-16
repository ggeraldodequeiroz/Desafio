import api from './api';

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/alunos')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/alunos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function cadastrar(aluno){
    return new Promise((resolve, reject) => {
        return api.post(`/alunos`, aluno)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function atualizar(aluno){
    return new Promise((resolve, reject) => {
        return api.put(`/alunos/${aluno.id}`, aluno)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function deletar(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/alunos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

export default {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}