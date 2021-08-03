<template>
    <div class="grid2x2">
        <div class="box box1">
            <dropdown index="0"></dropdown>
            <div v-if="flagComponentName(0)">
                <component class="first_component" :is="getComponentName(0)"></component>
            </div>
        </div>
        <div class="box box2">
            <dropdown index="1"></dropdown>
            <div v-if="flagComponentName(1)">
                <component class="first_component" :is="getComponentName(1)"></component>
            </div>
        </div>
        <div class="box box3">
            <dropdown index="2"></dropdown>
            <div v-if="flagComponentName(2)">
                <component class="first_component" :is="getComponentName(2)"></component>
            </div>
        </div>
        <div class="box box4">
            <dropdown index="3"></dropdown>
            <div v-if="flagComponentName(3)">
                <component class="first_component" :is="getComponentName(3)"></component>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import Dropdown from '../AdminPageComponents/dropdown.vue'
import Red from '../widgets/red.vue'
import Yellow from '../widgets/yellow.vue'
import Green from '../widgets/green.vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'template-2x2',
    components: { Dropdown, Red, Yellow, Green },
    setup() {
        const placeholders = ref([])
        const store = useStore()

        const flagComponentName = (index) => {
            //console.log(store.getters.all_workspaces[store.getters.all_list_items[0]])
            if(typeof store.getters.all_workspaces[store.getters.all_list_items[0]].placeholders[index].component == "undefined") {
                return false
            }
            else { return true }
        }

        const getComponentName = (index) => {
            return store.getters.all_workspaces[store.getters.all_list_items[0]].placeholders[index].component
        }
    
        return {
            placeholders, store, getComponentName, flagComponentName
        }
    }
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
