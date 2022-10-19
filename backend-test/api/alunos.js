module.exports = (app) => {

    const obterTodosAlunos = (req, res) => {
        
        const alunos = [
            {
                "id": 1,
                "nome": "Guilherme Queiroz"
            },
            {
                "id": 2,
                "nome": "Tiago Wilson"
            }
        ];

        return res.json(alunos);
    }

    const salvarAluno = (req, res) => {
        
        const aluno = { ...req.body };

        if(!aluno.registroAcademico){
            return res.json({error: "Registro acadêmico é um campo obrigatório"});
        }

        if(!aluno.nome){
            return res.json({error: "Nome é um campo obrigatório"});
        }

        if(!aluno.email){
            return res.json({error: "E-mail é um campo obrigatório"});
        }

        if(!aluno.cpf){
            return res.json({error: "CPF é um campo obrigatório"});
        }

        app
            .database("alunos")
            .insert(aluno)
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err));

        return res.json(aluno);
    }

    return { obterTodosAlunos, salvarAluno }
    
}

