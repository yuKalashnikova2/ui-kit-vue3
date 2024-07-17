<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'Header Component',
        },
    })
</script>

<template>
    <h2>{{ title }}</h2>
</template>

<style lang="scss" scoped>
    h2 {
        padding-bottom: 0.5rem;
        color:#1e293b;
    }
</style>