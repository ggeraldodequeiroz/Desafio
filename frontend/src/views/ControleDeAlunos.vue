<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Lista de Alunos</h2>
        <hr />
      </div>
    </div>

    <div class="row sub-cointainer">
      <div class="col-sm-2">
        <Button :callback="adicionarAluno" value="Cadastrar"></Button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>RA</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th>Data de Cadastro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in alunos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.registroAcademico }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.cpf }}</td>
              <td>{{ item.dataCadastro | data }}</td>
              <td>
                <i
                  @click="editarAluno(item)"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
                <i
                  @click="excluirAluno(item)"
                  class="fas fa-trash-alt icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>
<script>
import Button from "../components/button/Button.vue";
import ProdutoMixin from '../mixins/aluno-mixin';

export default {
  name: "ControleDeAlunos",
  mixins:[ProdutoMixin],
  components: {
    Button,
  },

  data() {
    return {
    };
  },

  methods: {
    adicionarAluno() {
      this.$router.push({ name: "NovoAluno" });
    }
  },
};
</script>
<style scoped>

.icones-tabela,
.ver-em-cards {
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);
}

.ver-em-cards {
  margin-top: 25px;
}
</style>
