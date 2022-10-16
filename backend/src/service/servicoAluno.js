const Aluno = require('../model/Aluno');
var idAtual = 2;

var listaDeAlunos = [
    new Aluno({
        id:1,
        registroAcademico: "101235",
        nome: "Paulo Souza",
        email: "paulo@gmail.com",
        cpf: "103.667.976-46",
        dataCadastro: new Date().toISOString()
    }),
    new Aluno({
        id:2,
        registroAcademico: "101235",
        nome: "Paulo Souza",
        email: "paulo@gmail.com",
        cpf: "103.667.976-46",
        dataCadastro: new Date().toISOString()
    }),
    new Aluno({
        id:3,
        registroAcademico: "111236",
        nome: "João Silva",
        email: "joao@gmail.com",
        cpf: "173.687.973-56",
        dataCadastro: new Date().toISOString()
    }),
    new Aluno({
        id:4,
        registroAcademico: "101855",
        nome: "Mariana Gomes",
        email: "mariana@gmail.com",
        cpf: "143.677.876-36",
        dataCadastro: new Date().toISOString()
    }),
    new Aluno({
        id:5,
        registroAcademico: "172545",
        nome: "Marcos Paulo",
        email: "marcos@gmail.com",
        cpf: "133.666.878-49",
        dataCadastro: new Date().toISOString()
    })
];

function obterTodos(){
    return listaDeAlunos;
}

function obterPorId(id){
    return listaDeAlunos.find(p => p.id == id);
}

function cadastrar(obj){
    var aluno = new Aluno(obj);
    idAtual++;
    aluno.id = idAtual;
    listaDeAlunos.push(aluno);

    return aluno;
}

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