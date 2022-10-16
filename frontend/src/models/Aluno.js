import mascaraDeData from '../utils/conversor-data';
export default class Produto {
    constructor(obj){
        obj = obj || {};
        
        this.id = obj.id;
        this.nome = obj.nome;
        this.registroAcademico = obj.registroAcademico;
        this.email = obj.email;
        this.cpf = obj.cpf;
        this.dataCadastro = obj.dataCadastro && mascaraDeData.aplicarMascaraFormatoAmericanoEmDataISO(obj.dataCadastro);
    }

    validaNome() {
        return !!this.nome;
    }

    validaRegistroAcademico() {
        return !!this.registroAcademico;
    }

    validaEmail() {
        return !!this.email;
    }

    validaCpf() {
        return !!this.cpf;
    }

    modeloValidoParaAtualizar(){
        return !! (this.id && this.nome)
    }
}