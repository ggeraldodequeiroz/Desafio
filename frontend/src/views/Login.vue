<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>

        <Input label="E-mail:" placeHolder="exemplo@gmail.com"></Input>
        <Input label="Senha:"  placeHolder="123456" type="password"></Input>
    </div>
</template>

<script>

import Input from '@/components/input/Input.vue';

export default {
    name: "Login",
    components: {
        Input
    },
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
    .box-login {
        width: 300px;
        margin: auto;
        border: 1px solid #ddd;
        margin-top: 70px;
        padding: 20px;
    }
    .logo {
        text-align: center;
        color: var(--cor-primaria);
    }
</style>