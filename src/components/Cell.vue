<template>
    <div v-bind:class="isAlive ? 'cell alive' : 'cell'"></div>
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
  height: 10px;
  width: 10px;
  border: 1px solid black;
}
.alive {
  background-color: black;
}
</style>
