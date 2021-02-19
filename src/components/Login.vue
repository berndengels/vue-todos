<template>
    <div>
        <h3>Login</h3>
        <b-form @submit.prevent>
            <b-form-group>
                <label>Email</label>
                <b-input type="email" v-model="user.email" placeholder="Email" required/>
            </b-form-group>
            <b-form-group>
                <label>Passwort</label>
                <b-input type="password" v-model="user.password" placeholder="Passwort" required/>
            </b-form-group>
            <b-button @click="login(user)">Login</b-button>
        </b-form>
    </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            user: {
                email: null,
                password: null,
            }
        }
    },
    methods: mapActions({login: 'auth/login'})
}
</script>

<style scoped>
label {
    text-align: left;
}
</style>
