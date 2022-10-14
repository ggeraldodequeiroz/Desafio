<template>
    <div class="container">
        <div class="row">
            <div class="col sm-12">
                <h1 class="titulo">Adicionar Produto</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="id">Código</label>
                    <input id="id" type="text" disabled class="form-control" />
                </div>
            </div>

            <div class="col-sm-10">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" class="form-control" />
                </div>
            </div>

            <div class="col-sm-3">
                <div class="form-group">
                    <label for="quantidade">Quantidade</label>
                    <input id="quantidade" type="text" class="form-control" />
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="valor">Valor</label>
                    <input id="valor" type="text" class="form-control" />
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="data-cadastro">Data cadastro</label>
                    <input id="data-cadastro" type="date" class="form-control" />
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <label for="observacao">Observação</label>
                    <textarea id="observacao" type="date" class="form-control" rows="4"></textarea>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
textarea {
    resize: none;
}
</style>