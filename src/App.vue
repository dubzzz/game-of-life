<template>
  <div id="game-of-life">
    <grid :rows-count="rows" :columns-count="cols" :initial-grid="aliveCellsMap" />
    <div id="buttons-container">
      <md-button class="md-raised" @click="randomizeMap()">Random</md-button>
      <md-button class="md-raised" :disabled="running != null" @click="nextMap()">Next</md-button>
      <md-button class="md-raised" v-if="running == null" @click="autoMap()">Run</md-button>
      <md-button class="md-raised" v-if="running != null" @click="autoMap()">Stop</md-button>
    </div>
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
      },
      rows: 30,
      cols: 90,
      running: null,
    };
  },
  methods: {
    randomizeMap: function() {
      this.aliveCellsMap = {};
      for (let j = 0 ; j !== this.rows ; ++j) {
        for (let i = 0 ; i !== this.cols ; ++i) {
          if (Math.random() < 0.2)
            this.aliveCellsMap[`R${j}C${i}`] = true;
        }
      }
    },
    nextMap: function() {
      const nextMap = {};
      for (let j = 0 ; j !== this.rows ; ++j) {
        for (let i = 0 ; i !== this.cols ; ++i) {
          let numAlives = 0;
          if (this.aliveCellsMap[`R${j-1}C${i-1}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j-1}C${i}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j-1}C${i+1}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j}C${i-1}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j}C${i+1}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j+1}C${i-1}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j+1}C${i}`]) ++numAlives;
          if (this.aliveCellsMap[`R${j+1}C${i+1}`]) ++numAlives;
          
          if (numAlives === 3) nextMap[`R${j}C${i}`] = true;
          else if (numAlives === 2) nextMap[`R${j}C${i}`] = this.aliveCellsMap[`R${j}C${i}`];
        }
      }
      this.aliveCellsMap = nextMap;
    },
    autoMapInternal: function() {
      this.nextMap();
      this.running = setTimeout(() => this.autoMapInternal(), 100);
    },
    autoMap: function() {
      if (this.running != null) {
        clearTimeout(this.running);
        this.running = null;
        return;
      }
      this.autoMapInternal();
    }
  }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
#buttons-container {
  text-align: center;
}
</style>
