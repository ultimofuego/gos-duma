<template>
    
    <div class="main-container">
        <div class="btn-container">
            <span>Добавить пространство</span>
            <button @click="showModal">+</button>
        </div>
        <ul class="list-of-spaces">
            <li
                v-for="(workspace, index) in $store.state.workspaces"
                :key="index">
                <!-- <a :href="workspace.id">{{workspace.name}}</a> -->
                <router-link
                :to = " {
                    name: `template-2x2`,
                    path: `/${workspace.templateId}`
                } "
                >{{workspace.name}}</router-link>
                <button class="btn" @click="removeWorkspace({id: workspace.id, idx: index})">X</button>
            </li>
        </ul>
        <!-- <template-2x2 v-if="$store.getters.workspaces.content.length"></template-2x2> -->
        <modal-window v-if="show" @closeModal="close"></modal-window>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ModalWindow from './modal-window.vue'

export default defineComponent({
    components: {
        ModalWindow, 
    },
    setup() {
        const router = useRoute()
        const show = ref(false)
        const store = useStore()
        //const templatesName = ref('')

        onMounted(() => {
            store.dispatch('fetchWorkspaces')
            store.dispatch('fetchTemplates')
        })

        /*const findTemplate = (value: number) => {
            const temp = store.state.template
            temp.forEach(item => {
                if(item.id == value) {
                    templatesName.value = item.component
                }
            })
            console.log(templatesName.value)
        }*/

        const removeWorkspace = (obj: Record<string,unknown>) => {
            store.dispatch('removeWorkspace', obj)
        }

        const close = (val: boolean) => {
            show.value = val
        }
        const showModal = () => {
            show.value = true
        }

        return {
            show, store, close, showModal, removeWorkspace
        }
    },
})
</script>

<style scoped lang="scss">
    .main-container {
        margin-left: -10px;
        margin-top: 16px;
        font-size: 28px;
        padding: 0 10px;
        color: #0e2538;

        .btn-container {
            font-size: 20px;
            span {
                padding-right: 20px;
            }
            button {
                display: inline-block;
                width: 1.7em;
                font-weight: 700;
                color: rgba(255,255,255,.9);
                background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
                outline: none;
                border-radius: 6px;
                border: 0;
                box-shadow: inset rgba(255,255,255,.5) 1px 1px;
                &:hover {
                    color: rgb(255,255,255);
                    background-image: linear-gradient(#9dc7e7, #74afdd 50%, #378bce);
                }
                &:active {
                    color: rgb(255,255,255);
                    border-color: #2970a9;
                    background-image: linear-gradient(#5796c8, #6aa2ce);
                    box-shadow: none;
                }
            }
        }

        .list-of-spaces {
            padding-top: 30px;
            font-size: 20px;
            padding-left: 0px;
            list-style: none;
            font-weight: 400;
            color: black;
            li { 
            padding-bottom: 14px;
            display: flex;
            align-items: center;
            &:before {
                display: block;
                content: '';
                background: #5486D1;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                margin-right: 20px;
                }
            }

            a {
                text-decoration: none;
                &:visited {
                    color: rgb(36, 36, 36);
                }
            }
        }
    }

    .btn {
        display: inline-block;	
	    padding: 0px 7px;
        margin-left: 20px;
        outline: none;
	    border: none;  
	    border-radius: 4px;
	    height: 20px;
	    line-height: 8px;
	    font-size: 8px;
	    font-weight: 900;
	    text-decoration: none;
	    color: #fff;
	    background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
	    position: relative;
	    overflow:hidden;
	    vertical-align: top;
	    cursor: pointer;
	    user-select: none;
	    appearance: none;
	    touch-action: manipulation; 
	    z-index: 1;
    }
</style>
