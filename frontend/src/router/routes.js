import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import ControleDeAlunos from '@/views/ControleDeAlunos.vue'
import Aluno from '@/views/Aluno.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        meta: { requiredAuth: false }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        title: 'Home',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-alunos',
        name: 'ControleDeAlunos',
        component: ControleDeAlunos,
        title: 'Alunos',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-alunos/novo',
        name: 'NovoAluno',
        component: Aluno,
        title: 'Adicionar Aluno',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-alunos/editar',
        name: 'EditarAluno',
        component: Aluno,
        title: 'Editar Aluno',
        meta: { requiredAuth: true }
    }
];


export default routes;