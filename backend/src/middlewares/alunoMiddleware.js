const validateFieldRegistroAcademico = (request, response, next) => {
    const { body } = request;

    if (body.registroAcademico === undefined) {
        return response.status(400).json({ message: 'O campo registro acadêmico é obrigatório.' });
    }

    if (body.registroAcademico === '') {
        return response.status(400).json({ message: 'O registro acadêmico não pode ser vazio.' });
    }

    next();
};

const validateFieldNome = (request, response, next) => {
    const { body } = request;

    if (body.nome === undefined) {
        return response.status(400).json({ message: 'O campo nome é obrigatório.' });
    }

    if (body.nome === '') {
        return response.status(400).json({ message: 'O nome não pode ser vazio.' });
    }

    next();
};

const validateFieldEmail = (request, response, next) => {
    const { body } = request;

    if (body.email === undefined) {
        return response.status(400).json({ message: 'O campo email é obrigatório.' });
    }

    if (body.email === '') {
        return response.status(400).json({ message: 'O email não pode ser vazio.' });
    }

    next();
};

const validateFieldCpf = (request, response, next) => {
    const { body } = request;

    if (body.cpf === undefined) {
        return response.status(400).json({ message: 'O campo CPF é obrigatório.' });
    }

    if (body.cpf === '') {
        return response.status(400).json({ message: 'O CPF não pode ser vazio.' });
    }

    next();
};



module.exports = {
    validateFieldRegistroAcademico,
    validateFieldNome,
    validateFieldEmail,
    validateFieldCpf
};