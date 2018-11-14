<template>
    <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
        <cell v-for="(_, idx) in cellsCount" :key="idx" :is-alive="isCellAlive(idx)"></cell>
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
    }
}
</script>

<style scoped>
.grid__container {
    width: 90vw;
    height: 30vw;
    margin: auto;
    display: grid;
    background-color: yellowgreen;
    grid-gap: 1px;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
}
</style>
