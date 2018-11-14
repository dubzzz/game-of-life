<template>
  <div id="game-of-life">
    <grid rows-count="10" columns-count="30" />
  </div>
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  name: 'GameOfLife',
  components: { Grid }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
</style>
