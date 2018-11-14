<template>
    <div :class="isAlive ? 'cell alive' : 'cell'"></div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        isAlive: Boolean
    }
}
</script>

<style scoped>
.cell {
}
.alive {
  background-color: green;
}
</style>
