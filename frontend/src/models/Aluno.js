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

    modeloValidoParaCadastro(){
        return !!this.nome;
    }

    modeloValidoParaAtualizar(){
        return !! (this.id && this.nome)
    }
}