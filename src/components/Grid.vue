<template>
    <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
        <cell v-for="(line, idx) in grid" :key="idx" :is-alive="false"></cell>
    </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
    name: 'Grid',
    props: {
        rowsCount: Number.required,
        columnsCount: Number.required
    },
    components: { Cell },
    data: function() {
        return {
            cellsCount: this.rowsCount * this.columnsCount
        };
    },
    computed: {
        grid: function() {
            const g = [];
            for (let j = 0 ; j !== this.cellsCount ; ++j) {
                g.push(false);
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
