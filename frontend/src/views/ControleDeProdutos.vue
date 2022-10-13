<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="Titulo">Produtos</h2>
                <hr>
            </div> 
        </div>  

        <div class="row sub-container">
            <div class="col-sm-2">
                <Button value="Adicionar"></Button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Data de cadastro</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

    </div>
</template>

<script>

import Button from '../components/button/Button.vue';
export default {
    name: "ControleDeProdutos",
    components: {
        Button
    },
    data(){
        return {
            mensagem: 'Estou na tela Controle de produtos'
        }
    }
}
</script>

<style scoped>

    h1 {
        color: red;
    }

</style>
