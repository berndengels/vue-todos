<template>
    <div>
        <h3>Login</h3>
        <b-form @submit.prevent>
            Email: <input type="email" required>
            <br>
            Passwort: <input type="password" required>
            <br>
            <b-button>Login</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                email: null,
                password: null,
            }
        }
    }
}
</script>

<style scoped>

</style>
