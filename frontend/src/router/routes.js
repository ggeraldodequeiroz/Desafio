import Dashboard from '@/views/Dashboard';
import ControleDeClientes from '@/views/ControleDeClientes';
import ControleDeProdutos from '@/views/ControleDeProdutos';
import Produto from '@/views/Produto';
import Login from '@/views/Login';

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
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: 'Produtos',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: 'Clientes',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/novo',
        name: 'NovoProduto',
        component: Produto,
        title: 'Adicionar Produto',
        meta: { requiredAuth: true }
    },

];

export default routes