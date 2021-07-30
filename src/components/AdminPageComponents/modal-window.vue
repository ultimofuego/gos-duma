<template>
    <div class="modal-backdrop" @click.self="closeModal">
        <div class="modal">
            <slot name="header" class="header">
                <button class="closeBtn" @click="closeModal">x</button>
            </slot>
            <slot name="body">
                <form class="modalForm" @submit.prevent="addSpaceName">
                    <label>Введите название пространства</label>
                    <input type="string" v-model="workspace" id="spacename" required>
                    <button type="submit" class="addBtn">Добавить</button>
                </form>
            </slot>
            <slot name="footer">
                
            </slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default defineComponent({
    name: 'modal-window',
    emits: ['closeModal'],
    setup(props, {emit}) {
        const workspace = ref('')
        const store = useStore()

        const addSpaceName = () => {
            store.commit('addListItem', workspace.value)
            store.commit('updateWorkspaces', toObject())
            closeModal()
        }
        const toObject = () => {
            let rv = {}
            store.getters.all_list_items.forEach(item => {
                rv[item] = {}
            })
            return rv
        }
        const closeModal = () => {
            emit('closeModal', false);
        }

        return {
            workspace,
            all_list_items: store.getters.all_list_items,
            all_workspaces: store.getters.all_workspaces,
            addSpaceName,
            toObject,
            closeModal
        }

    }
})
</script>

<style scoped lang="scss">
    .modal-backdrop {
        background: rgba(0, 0, 0, 0.767);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
        .modal {
            padding: 16px;
            position: fixed;
            top: 40%;
            left: 40%;
            width: 500px;
            background: rgba(221, 228, 238, 0.933);
            border-radius: 10px;
            .header { 
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    .modalForm {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        label {
            margin-bottom: 20px;
        }
        input {
            width: 80%;
            margin-bottom: 20px;
            border-radius: 10px;
            border: 1px solid #60a3d8;
        }
        button {
            display: inline-block;
            width: 30%;
            font-weight: 400;
            font-size: 18px;
            text-transform: uppercase;
            color: rgba(255,255,255,.9);
            background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
            outline: none;
            border-radius: 6px;
            border: 0;
            box-shadow: inset rgba(255,255,255,.5) 1px 1px;

        }
    }

    .closeBtn {
        display: inline-block;
        width: 1.7em;
        font-weight: 700;
        color: rgba(255,255,255,.9);
        background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
        outline: none;
        border-radius: 6px;
        border: 0;
        box-shadow: inset rgba(255,255,255,.5) 1px 1px;
    }

</style>
