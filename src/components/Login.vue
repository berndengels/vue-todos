<template>
    <div>
        <div class="container align-content-center">
            <h3>Login</h3>
            <b-form class="align-self-center m-5" @submit.prevent>
                <b-form-group>
                    <label for="email">Email: </label>
                    <b-input id="email" v-model="user.email" required type="email"/>
                </b-form-group>
                <b-form-group>
                    <label for="password">Passwort: </label>
                    <b-input id="password" v-model="user.password" required type="password"/>
                </b-form-group>
                <b-btn role="button" @click="handleLogin">Login</b-btn>
            </b-form>
        </div>
    </div>
</template>

<script>
import  Vue from "vue";
import "@/plugins/axios";

const axios = Vue.axios,
    apiURL = "/api/login";

export default {
    name: "Login",
    data() {
        return {
            user: {
                email: null,
                password: null,
            },
        }
    },
    methods: {
        handleLogin() {
            axios.post(apiURL, this.user)
                .then(resp => {
                    console.info(resp.data)
                    localStorage.setItem("username", resp.data.name)
                    localStorage.setItem("token", resp.data.token)
                })
                .catch(err => console.error(err))
        }
    }
}
</script>

<style scoped>

</style>
