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
                <Button :callback="adicionarProduto" value="Adicionar"></Button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Data de cadastro</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in produtos" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.nome }}</td>
                            <td>{{ item.quantidadeEstoque }}</td>
                            <td>{{ item.valor | real}}</td>
                            <td>{{ item.dataCadastro | data }}</td>
                            <td>
                                <i @click="editarProduto" class="fas fa-pencil-alt icones-tabela"></i>
                                <i @click="excluirProduto" class="fas fa-trash-alt icones-tabela"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import Button from '@/components/button/Button.vue';
import produtoService from '@/services/produto-service';
import Produto from '@/models/Produto';
import conversorDeData from '@/utils/conversor-data';
import conversorMonetario from '@/utils/conversor-monetario';

export default {
    name: "ControleDeProdutos",
    components: {
        Button
    },
    filters: {
        data(data) {
            return conversorDeData.aplicarMascaraDataHoraEmDataIso(data);
        },
        real(valor) {
            return conversorMonetario.aplicarMarcaraParaRealComPreFixo(valor);
        }
    },
    data(){
        return {
           produtos: []
        }
    },
    methods: {
        adicionarProduto() {
            this.$router.push({ name: "NovoProduto" });
        },
        editarProduto() {
            alert('Editar produto');
        },
        excluirProduto() {
            alert('Excluir produto');
        },
        obterTodosOsProdutos() {
            produtoService.obterTodos()
            .then(response => {
                this.produtos = response.data.map(p => new Produto(p));
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.obterTodosOsProdutos();
    }

}
</script>

<style scoped>

    .icones-tabela {
        margin: 5px;
        cursor: pointer;
        color: var(--cor-primaria);
    }

    
</style>
