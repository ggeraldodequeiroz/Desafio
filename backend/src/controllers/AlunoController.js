
const Aluno = require('../model/Aluno');
const serviceAluno = require('../service/servicoAluno');

module.exports = class AlunoController {
    
    async obterTodos(req, res) {
        try {
            let alunos = await serviceAluno.obterTodos();
            return res.status(200).json(alunos);
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }
    
    async obterPorId(req, res) {
        try {
            var id = req.params.id;

            let aluno = await serviceAluno.obterPorId(id);

            if(aluno.length === 0){
                return res.status(400).json({message: "Nenhum aluno foi encontrado."});
            }

            return res.status(200).json(aluno);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async cadastrar(req, res) {
        try {           
            let aluno = await serviceAluno.cadastrar(req.body);            
        } catch (error) {
            console.log(error);
            if(error.code === "ER_DUP_ENTRY") {
                return res.status(400).json({messagem: "Registro acadêmico não pode ser duplicado."});
            }
            return res.json({mensagem:error.message})
        }

        return res.status(201).json({mensagem: "Aluno criado com sucesso."});
    }

    async atualizar(req, res) {
        try {
            var id = req.params.id;
            var aluno = req.body || {};

            aluno.id = parseInt(id);

            let alunoAtualizado = serviceAluno.atualizar(aluno);
            return res.json(alunoAtualizado);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async deletar(req, res) {
        try {
            var id = req.params.id;
            let alunoAtualizado = serviceAluno.deletar(id);
            return res.json(alunoAtualizado);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }
}