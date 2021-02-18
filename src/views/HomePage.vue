<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Home msg="Willkommen auf unseren Todos"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home";

export default {
    name: 'HomePage',
    components: {Home},
}
</script>
