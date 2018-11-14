<template>
  <div id="game-of-life">
    <cell v-bind:enabled="true"></cell>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  name: 'GameOfLife',
  components: { Cell }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
.logos-container {
  position: absolute;
  top: 0;
  left: 0;
}
.logos-container img {
  height: 40px;
}
.logos-container img + img {
  margin-left: 5px;
}
</style>
