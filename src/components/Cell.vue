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
  border: 1px solid black;
  background-color: white;
}
.alive {
  background-color: black;
}
</style>
