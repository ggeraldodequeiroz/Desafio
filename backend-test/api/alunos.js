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

        return res.json(aluno);
    }

    return { obterTodosAlunos, salvarAluno }
    
}

