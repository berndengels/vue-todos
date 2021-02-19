<template>
    <b-alert v-if="errors" show fade>
        <div v-for="(err, index) in errors" :key="index">
            <span v-if="Array.isArray(err)">{{ err[0] }}</span>
            <span v-else>{{ err }}</span>
        </div>
    </b-alert>
</template>

<script>
export default {
    name: "AlertMsg",
    props: ['errors'],
}
</script>
