<template>
    <div>
        <h3>Login</h3>
        <b-form @submit.prevent>
            <b-form-group>
                <label>Email</label>
                <b-input type="email" placeholder="Email" required/>
            </b-form-group>
            <b-form-group>
                <label>Passwort</label>
                <b-input type="password" placeholder="Passwort" required/>
            </b-form-group>
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
