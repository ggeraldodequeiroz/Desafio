<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>

        <Input></Input>
    </div>
</template>

<script>

import Input from '@/components/input/Input.vue';

export default {
    name: "Login",
    data(){
        return {
            components: {
                Input
            }
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