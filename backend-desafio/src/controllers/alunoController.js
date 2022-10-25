const alunoModel = require('../models/alunoModel');

const getAlunos = async (request, response) => {    
    const aluno = await alunoModel.getAlunos();    
    return response.status(200).json(aluno);
};

const createAluno = async (request, response) => {
    try {
        const createdAluno = await alunoModel.createAluno(request.body);
    } catch(erro) {
        if(erro.code === "ER_DUP_ENTRY") {
            return response.status(400).json({message: "Registro acadêmico não pode ser duplicado."});
        }
        return response.status(400).json({message: erro.message});
    }
    
    return response.status(201).json({message: "Aluno criado com sucesso."});
};

const deleteAluno = async (request, response) => {
    const { id } = request.params;

    await alunoModel.deleteAluno(id);
    return response.status(204).json();
};

const updateAluno = async (request, response) => {
    const { id } = request.params;

    await alunoModel.updateAluno(id, request.body);
    return response.status(204).json();
};


module.exports = {
    getAlunos,
    createAluno,
    deleteAluno,
    updateAluno
}