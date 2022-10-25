const express = require('express');
const alunoController = require('./controllers/alunoController');
const alunoMiddleware = require('./middlewares/alunoMiddleware');

const router = express.Router();

router.get('/alunos', alunoController.getAlunos);
router.post('/alunos', 
    alunoMiddleware.validateFieldRegistroAcademico, 
    alunoMiddleware.validateFieldNome, 
    alunoMiddleware.validateFieldEmail,
    alunoMiddleware.validateFieldCpf,
    alunoController.createAluno
);
router.delete('/alunos/:id', alunoController.deleteAluno);
router.put('/alunos/:id', 
    alunoMiddleware.validateFieldRegistroAcademico, 
    alunoMiddleware.validateFieldNome, 
    alunoMiddleware.validateFieldEmail,
    alunoMiddleware.validateFieldCpf,
    alunoController.updateAluno
);

module.exports = router;