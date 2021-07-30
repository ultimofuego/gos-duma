<template>
    <div class="grid2x2">
        <div class="box box1">
            <dropdown index="0"></dropdown>
        </div>
        <div class="box box2">
            <dropdown index="1"></dropdown>
        </div>
        <div class="box box3">
            <dropdown index="2"></dropdown>
        </div>
        <div class="box box4">
            <dropdown index="3"></dropdown>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Dropdown from '../AdminPageComponents/dropdown.vue'

export default defineComponent({
    name: 'template-2x2',
    components: { Dropdown }
})
</script>

<style scoped lang="scss">
    .grid2x2 {
        min-height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        height: 1400px;

        & > div {
            display: flex; 
            flex-basis: calc(50% - 40px);  
            justify-content: center;
            flex-direction: column;

            & > div {
                display: flex;
                justify-content: center;
                flex-direction: row;
            }
        }

        .box { position: relative; margin: 5px; border-radius: 10px; }
        .box1 { background: linear-gradient(#9dc7e7, #74afdd 50%, #6d96b8); }
        .box2 { background: linear-gradient(#9dc7e7, #74afdd 50%, #6d96b8); }
        .box3 { background: linear-gradient(#9dc7e7, #74afdd 50%, #6d96b8); }
        .box4 { background: linear-gradient(#9dc7e7, #74afdd 50%, #6d96b8); }
    }

    
</style>
