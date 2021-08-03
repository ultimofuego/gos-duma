<template>
    <div class="dropdown">
        <button class="btn" type="button" @click="toggleDropdown(indexOfDropdown)">
            Добавить виджет
        </button>
        <div v-if="isOpen[index]" class="dropdown-menu">
            <button class="dropdown-item" type="button" value="Red" @click="chooseOption(indexOfDropdown, $event)">Red</button>
            <button class="dropdown-item" type="button" value="Yellow" @click="chooseOption(indexOfDropdown, $event)">Yellow</button>
            <button class="dropdown-item" type="button" value="Green" @click="chooseOption(indexOfDropdown, $event)">Green</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'dropdown',
    props: ['index'],
    setup(props) {
        const indexOfDropdown = ref(props.index)
        const isOpen = ref([false, false, false, false])
        const store = useStore()

        const toggleDropdown = (index) => {
            isOpen.value[index] = !isOpen.value[index]
        }

        const chooseOption = (index, e) => {
            const rv = store.getters.all_workspaces
            for(let key in rv) {
                rv[key].placeholders[index].component = e.target.value
            }
            store.commit('updateWorkspaces', rv)
            console.log(store.getters.all_workspaces)
        }

        return {
            indexOfDropdown, isOpen, store, toggleDropdown, chooseOption,
            all_workspaces: store.getters.all_workspaces
        }
    }
})
</script>

<style scoped lang="scss">
    .btn {
        display: block;
        width: 30px;
        height: 30px;
        font-size: 10px;
        min-width: 150px;
        border-radius: 5px;
        border: none;
        position: absolute;
        top: 10px;
        left: 10px;

        &:hover {
            background-color: rgb(219, 217, 217);
        }
    }

    .dropdown-menu {
        font-size: 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: #fff;
        width: 21%;
        margin-top: 1px;
        box-shadow: 0 1px 2px rgb(204,204,204);
        border-radius: 10px;
        overflow: hidden;
        max-height: 144px;
        overflow-y: auto;
        z-index: 1;
        top: 50px;
        left: 10px;
        

        .dropdown-item {
            padding: 10px;
            transition: all .2s ease-in-out;
            cursor: pointer;
            border: 0;
            &:hover {
                background: rgb(212, 212, 212);
            }
        }
    }
</style>
