<template>
    <p>I'm a Cell {{enabled}}</p>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        enabled: Boolean
    }
}
</script>

<style scoped>
</style>
