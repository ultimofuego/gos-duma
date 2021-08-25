<template>
    <div class="dropdown">
        <button class="btn" type="button" @click="toggleDropdown(indexOfDropdown)">
            Добавить виджет
        </button>
        <div v-if="isOpen[indexOfDropdown]" class="dropdown-menu">
            <button
            class="dropdown-item"
            type="button"
            v-for="(widget, index) in store.state.widgets"
            :key="index"
            @click="chooseOption($event)">
                {{widget.name}}
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
    name: 'dropdown',
    props: ['code', 'space_id'],
    setup(props) {
        const indexOfDropdown = ref(props.code)
        const workspaceId = ref(props.space_id)
        const isOpen = ref([false, false, false, false])

        const store = useStore()

        const wplaceholder = reactive({
            workspaceId: '',
            widgetId: '',
            code: ''
        })

        onMounted(() => {
            axios.get('back/widget').then(res => {
                store.commit('updateWidgets', res.data.content)
            })
        })

        const toggleDropdown = (index) => {
            isOpen.value[index] = !isOpen.value[index]
        }

        const chooseOption = (e) => {
            store.state.widgets.forEach(widget => {
                if(widget.name == e.target.textContent) {
                    wplaceholder.workspaceId = workspaceId.value
                    wplaceholder.widgetId = widget.id
                    wplaceholder.code = indexOfDropdown.value
                }
            })
            console.log(wplaceholder)
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
