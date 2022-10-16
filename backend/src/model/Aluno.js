module.exports = class Aluno {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.registroAcademico = obj.registroAcademico;
        this.email = obj.email;
        this.cpf = obj.cpf;
        this.dataCadastro = obj.dataCadastro;
    }
}