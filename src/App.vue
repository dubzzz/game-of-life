<template>
  <div id="game-of-life">
    <grid rows-count="10" columns-count="30" :initial-grid="aliveCellsMap" />
  </div>
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  name: 'GameOfLife',
  components: { Grid },
  data: function() {
    return {
      aliveCellsMap: {
        R2C5: true,
        R1C2: true,
        R2C1: true,
        R7C2: true,
        R1C7: true,
        R0C29: true,
      }
    };
  }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
</style>
