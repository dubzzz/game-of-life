<template>
    <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
        <cell v-for="(state, idx) in grid" :key="idx" :is-alive="state"></cell>
    </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
    name: 'Grid',
    props: {
        initialGrid: Object,
        rowsCount: Number.required,
        columnsCount: Number.required
    },
    components: { Cell },
    data: function() {
        return {
            cellsCount: this.rowsCount * this.columnsCount
        };
    },
    methods: {
        isCellAlive: function(n) {
            const col = n % this.columnsCount;
            const row = (n / this.columnsCount) | 0;
            return !!this.initialGrid[`R${row}C${col}`];
        }
    },
    computed: {
        grid: function() {
            const g = [];
            for (let n = 0 ; n !== this.cellsCount ; ++n) {
                g.push(this.isCellAlive(n));
            }
            return g;
        }
    }
}
</script>

<style scoped>
.grid__container {
    width: 90vw;
    height: 30vw;
    margin: auto;
    display: grid;
    border: solid 1px black;
    background-color: black;
    grid-gap: 1px;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
}
</style>
