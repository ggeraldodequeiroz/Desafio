const connection = require('./connection');

const getAlunos = async () => {
    const [aluno] = await connection.execute('SELECT * FROM alunos');
    return aluno;
};

const createAluno = async (aluno) => {
    const registroAcademico = aluno.registroAcademico;
    const nome = aluno.nome;
    const email = aluno.email;
    const cpf = aluno.cpf;
 
    const dataCadastro = new Date();
    
    const query = 'INSERT INTO alunos(registroAcademico, nome, email, cpf, dataCadastro) VALUES (?, ?, ?, ?, ?)';
    const [createAluno] = await connection.execute(query, [registroAcademico, nome, email, cpf, dataCadastro]);

    return { createAluno };
};

const deleteAluno = async (id) => {
    const removedTask = await connection.execute('DELETE FROM alunos WHERE id = ?', [id]);
    return removedTask;
};

const updateAluno = async (id, aluno) => {
    const { title, status } = aluno;

    const query = 'UPDATE alunos SET title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
};

module.exports = {
    getAlunos,
    createAluno,
    deleteAluno,
    updateAluno
}