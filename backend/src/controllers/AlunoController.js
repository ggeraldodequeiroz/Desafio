
const Aluno = require('../model/Aluno');
const serviceAluno = require('../service/servicoAluno');

module.exports = class AlunoController {
    
    async obterTodos(req, res) {
        try {
            let alunos = serviceAluno.obterTodos();
            return res.json(alunos);
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }
    
    async obterPorId(req, res) {
        try {
            var id = req.params.id;

            let aluno = serviceAluno.obterPorId(id);
            return res.json(aluno);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async cadastrar(req, res) {
        try {           
            let aluno = serviceAluno.cadastrar(req.body);
            return res.json(aluno);
            
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
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