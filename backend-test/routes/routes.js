module.exports = (app) => {
    
    app.route("/alunos/obterTodosAlunos").get(app.api.alunos.obterTodosAlunos);
    app.route("/alunos/salvarAluno").post(app.api.alunos.salvarAluno);
}