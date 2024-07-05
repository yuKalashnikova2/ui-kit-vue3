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