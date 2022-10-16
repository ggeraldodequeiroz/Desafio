const express = require("express");
const routes = express.Router();

const usuarioService = require('./src/service/servicoUsuario');
const UsuarioController = require('./src/controllers/UsuarioController');
const AlunoController = require("./src/controllers/AlunoController");

const usuarioController = new UsuarioController();
const alunoController = new AlunoController();

routes.use(async (req, res, next) => {

    if(process.env.AUTENTICAR =="TRUE"){

        let { authorization } = req.headers;
        let autenticado = await usuarioService.validarAutenticacao(authorization);
      
        if(req.originalUrl != '/login' && !autenticado ) {
            return res.status(401).json({ mensagem:"Por segurança o seu login de acesso expirou, efetue-o novamente." })
        }
    }

    next();
});

//aluno
routes.get("/alunos", alunoController.obterTodos);
routes.get("/alunos/:id", alunoController.obterPorId);
routes.post('/alunos', alunoController.cadastrar);
routes.put("/alunos/:id", alunoController.atualizar);
routes.delete("/alunos/:id", alunoController.deletar);

//usuario
routes.get("/usuarios", usuarioController.obterTodos);
routes.get("/usuarios/:id", usuarioController.obterPorId);
routes.post("/login", usuarioController.login);
routes.delete("/logout", usuarioController.logout);

module.exports = routes;