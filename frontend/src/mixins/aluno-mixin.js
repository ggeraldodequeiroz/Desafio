import alunoService from "@/services/aluno-service";
import Aluno from "../models/Aluno";
import conversorMonetario from "../utils/conversor-monetario";
import conversorDeData from "../utils/conversor-data";

let AlunoMixin = {
    filters: {
        data(data) {
          return conversorDeData.aplicarMascaraEmDataIso(data);
        },
        real(valor) {
          return conversorMonetario.aplicarMascaraParaRealComPrefixo(valor);
        },
    },
    data(){
        return {
            alunos: [],
        }
    },

    mounted() {
        this.obterTodosOsAlunos();
    },

    methods: {    
        editarAluno(aluno) {
          this.$router.push({ name: "EditarAluno", params: { id: aluno.id } });
        },
    
        excluirAluno(aluno) {
          this.$swal({
            icon: "question",
            title: "Deseja excluir o aluno?",
            text: `CPF: ${aluno.cpf} | Nome: ${aluno.nome}`,
            showCancelButton: true,
            confirmButtonColor: "#FF3D00",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            animate: true,
          }).then((result) => {
            if (result.isConfirmed) {
              alunoService
                .deletar(aluno.id)
                .then(() => {
                  let indice = this.alunos.findIndex((p) => p.id == aluno.id);
                  this.alunos.splice(indice, 1);
    
                    this.$swal({
                      icon: 'success',
                      title: 'Aluno deletado com sucesso!',
                      confirmButtonColor: '#FF3D00',
                      animate: true
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          });
        },
    
        ordernarAlunos(a, b) {
          // A < B = -1
          // A > B = 1
          // A == B = 0
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        },
    
        obterTodosOsAlunos() {
          alunoService
            .obterTodos()
            .then((response) => {
              let alunos = response.data.map((p) => new Aluno(p));
              this.alunos = alunos.reverse();
            })
            .catch((error) => {
              console.log(error);
            });
        },
    },
}

export default AlunoMixin;