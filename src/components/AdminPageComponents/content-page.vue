<template>
    <div class="main-container">
        <div class="background">
            <div class="btn-container">
                <span>Добавить пространство</span>
                <button @click="showModal">+</button>
            </div>

            <ul class="list-of-spaces">
            <li
                v-for="(workspace, index) in $store.state.workspaces"
                :key="index"
            >
                <a @click="routeMeTo(workspace.id)">{{workspace.name}}</a>
                
                <!-- <router-link
                :to="{ name: 'template-store', path: `/${workspace.id}`, params: { id: workspace.id }}"
                >{{workspace.name}}
                </router-link> -->
                <button class="btn" @click="removeWorkspace({id: workspace.id, idx: index})">X</button>
            </li>
        </ul>
        </div>
    </div>
    <modal-window v-if="show" @closeModal="close"></modal-window>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import ModalWindow from './modal-window.vue'
import router from '@/router/index'
import axios from 'axios'

export default defineComponent({
    components: {
        ModalWindow
    },
    setup() {
        const show = ref(false)
        const store = useStore()
        const templatesName = ref('')

        onMounted(() => {
            store.dispatch('fetchWorkspaces')
            store.dispatch('fetchTemplates')
       
            axios.get('back/widget').then(res => store.commit('addWidget', res.data.content))
            console.log(store.state.widgets)
        })

        const routeMeTo = (workspace_id: string) => {
            console.log(workspace_id)
            router.push({
                name: 'template-store',
                path: `/${workspace_id}`,
                params: { id: workspace_id }
            })
        }

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
            templatesName, show, store, close, showModal, removeWorkspace, routeMeTo
        }
    },
})
</script>

<style scoped lang="scss">
    $admin-maincolor: #5A8AB8;
    $admin-secondcolor: #9CC2E6;
    $admin-textcolor: #749DC3;

    .main-container {
        width: 80%;
        position: absolute;
        height: 90%;
        margin-left: -10px;
        margin-top: 20px;
        font-size: 28px;
        padding: 0 10px;
        color: $admin-textcolor;
        font-weight: 500;
        .btn-container {
            font-size: 20px;
            display: flex;
            align-items: center;
            color: $admin-textcolor;
            margin-bottom: 20px;
            span {
                padding-right: 20px;
            }
            button {
                cursor: pointer;
                display: inline-block;
                width: 1.1em;
                line-height: 1.1em;
                font-weight: 700;
                color: rgba(255,255,255,.9);
                background: linear-gradient(0deg, $admin-maincolor 0%, $admin-secondcolor 100%);
                outline: none;
                border-radius: 6px;
                border: 0;
                box-shadow: inset rgba(255,255,255,.5) 1px 1px;
                &:hover {
                    color: rgb(255,255,255);
                    background-image: linear-gradient(0deg, $admin-secondcolor 0%, $admin-maincolor 100%);
                }
                &:active {
                    color: rgb(255,255,255);
                    border-color: #2970a9;
                    background-image: $admin-maincolor;
                    box-shadow: none;
                }
            }
        }

        .background {
            border-radius: 10px;
            background-color: lighten($admin-secondcolor, 20%);
            margin-right: -20px;
            margin-top: 20px;
            padding-top: 20px;
            padding-left: 40px;
            height: 90%;
            display: inline-block;
            flex-direction: column;
            min-width: 100%;
            .list-of-spaces {
                border-radius: 10px;
                padding: 40px;
                background-color: white;
                font-size: 20px;
                list-style: none;
                font-weight: 400;
                display: inline-block;
                vertical-align: center;
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
                    cursor: pointer;
                    &:visited {
                        color: rgb(36, 36, 36);
                    }
                    &:hover {
                        color: darken($admin-textcolor, 20%);
                    }
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
