<template>
    <div class="grid2x2">
        <div class="box box1">
            <dropdown :space_id="id" :id="0" :component_name="x"></dropdown>
        </div>
        <div class="box box2">
            <dropdown :space_id="id" :id="1" :component_name="x"></dropdown>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive} from 'vue'
import { useStore } from 'vuex'
import Dropdown from '../AdminPageComponents/dropdown.vue'
import axios from 'axios'

export default defineComponent({
    name: 'template-2x2',
    components: { Dropdown },
    props: ['workspace_id'],
    setup(props) {
        const component_name = ref('')
        const id = ref(props.workspace_id)

        return { component_name, id }
    }
})
</script>

<style scoped lang="scss">
    .grid2x2 {
        min-height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        min-height: 600px;

        & > div {
            display: flex; 
            flex-basis: calc(50% - 10px);  
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
