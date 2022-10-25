<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">{{ modoCadastro ? "Cadastrar" : "Editar" }} Aluno</h1>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input id="id" v-model="aluno.id" type="text" disabled class="form-control" />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="nome">Registro Acadêmico</label>
          <input id="nome" v-model="aluno.registroAcademico" type="text" class="form-control" :disabled="modoCadastro ? false : true" />
        </div>
      </div>

      <div class="col-sm-8">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input id="nome" v-model="aluno.nome" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-8">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input id="email" v-model="aluno.email" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="CPF">CPF</label>
          <input 
            id="cpf" 
            v-model="aluno.cpf" 
            type="text" 
            class="form-control"
            v-mask="'###.###.###-##'"/>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="data-cadastro">Data cadastro</label>
          <input id="data-cadastro" v-model="aluno.dataCadastro" type="date" class="form-control" />
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>

      <div class="col-sm-12">
        <div v-show="modoCadastro" class="form-check-inline">
          <label class="form-check-label">
            <input v-model="continuarAdicionando" type="checkbox" class="form-check-input" />
            Continuar adicionando
          </label>
        </div>

        <button @click="cancelarAcao" class="btn btn-default float-right" type="button">
          Cancelar
        </button>
        <button @click="salvarAluno" class="btn btn-primary float-right mr-2" type="button">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import Aluno from '../models/Aluno';
import alunoService from '../services/aluno-service';
import conversorDeData from "../utils/conversor-data";

export default {
  name: "Aluno",
  data() {
    return {
      aluno: new Aluno(),
      modoCadastro: true,
      continuarAdicionando: false,
    }
  },
  mounted() {
    let id = this.$route.params.id;
    if (!id) return;

    this.modoCadastro = false;
    this.obterAlunoPorId(id);
  },
  methods: {
    obterAlunoPorId(id) {
      alunoService.obterPorId(id)
        .then(response => {
          this.aluno = new Aluno(response.data);
        })
        .catch(error => {
          console.log(error)
          this.$swal({
            icon: 'error',
            title: 'Não foi possível obter o aluno pelo id ' + id,
            confirmButtonColor: '#FF3D00',
            animate: true
          });
        })
    },

    cancelarAcao() {
      this.aluno = new Aluno();
      this.$router.push({ name: "ControleDeAlunos" })
    },
    cadastrarAluno() {
      if (!this.aluno.validaRegistroAcademico()) {
        this.$swal({
          icon: 'warning',
          title: 'O Registro Acadêmico do aluno é obrigatório para o cadastro.',
          confirmButtonColor: '#FF3D00',
          animate: true
        });
        return;
      }
      if (!this.aluno.validaNome()) {
        this.$swal({
          icon: 'warning',
          title: 'O nome do aluno é obrigatório para o cadastro.',
          confirmButtonColor: '#FF3D00',
          animate: true
        });
        return;
      }      
      if (!this.aluno.validaEmail()) {
        this.$swal({
          icon: 'warning',
          title: 'O e-mail do aluno é obrigatório para o cadastro.',
          confirmButtonColor: '#FF3D00',
          animate: true
        });
        return;
      }
      if (!this.aluno.validaCpf()) {
        this.$swal({
          icon: 'warning',
          title: 'O cpf do aluno é obrigatório para o cadastro.',
          confirmButtonColor: '#FF3D00',
          animate: true
        });
        return;
      }

      this.aluno.dataCadastro =
        conversorDeData.aplicarMascaraISOEmFormatoAmericano(this.aluno.dataCadastro);

      alunoService.cadastrar(this.aluno)
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'Aluno cadastrado com sucesso!',
            confirmButtonColor: '#FF3D00',
            animate: true
          });

          this.aluno = new Aluno();

          if (!this.continuarAdicionando) {
            this.$router.push({ name: "ControleDeAlunos" })
          }
        })
        .catch(error => {
          console.log(error);
          this.$swal({
            icon: 'error',
            title: 'Não foi possível cadastrar o aluno',
            confirmButtonColor: '#FF3D00',
            animate: true
          });
        });
    },

    atualizarAluno() {
      if (!this.aluno.modeloValidoParaAtualizar()) {
        this.$swal({
          icon: 'warning',
          title: 'O preenchimento dos campos nome, e-mail, CPF e data do cadastro são obrigatórios para realizar cadastro.',
          confirmButtonColor: '#FF3D00',
          animate: true
        });
        return;
      }

      this.aluno.dataCadastro =
        conversorDeData.aplicarMascaraISOEmFormatoAmericano(this.aluno.dataCadastro);

      alunoService.atualizar(this.aluno)
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'Aluno atualizado com sucesso!',
            confirmButtonColor: '#FF3D00',
            animate: true
          });
          this.$router.push({ name: "ControleDeAlunos" });
        })
        .catch(error => {
          console.log(error);
          this.$swal({
            icon: 'error',
            title: 'Não foi possível atualizar o aluno',
            confirmButtonColor: '#FF3D00',
            animate: true
          });
        });
    },

    salvarAluno() {
      (this.modoCadastro) ? this.cadastrarAluno() : this.atualizarAluno();
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>