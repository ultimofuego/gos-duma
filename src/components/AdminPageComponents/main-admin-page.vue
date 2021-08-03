<template>
    <div class="sidenav">
        <h3>Личный кабинет</h3>
        <hr/>
        <a href="#">Мой профиль</a>
        <a href="#">Мои события</a>
        <a href="#">Мои документы</a>
        <a href="#">Мои пространства</a>
        <a href="#">Выйти</a>
    </div>
    <div class="main">
        <h3>Мои пространства</h3>
        <hr/>
        <div class="btn-container">
            <span>Добавить пространство</span>
            <button @click="showModal">+</button>
        </div>
        <ul class="list-of-spaces">
            <li
                v-for="(workspace, index) in $store.getters.all_list_items"
                :key="index">
                <a :href="workspace">{{workspace}}</a>
            </li>
        </ul>
        <template-2x2 v-if="$store.getters.all_list_items.length"></template-2x2>
    </div>
    <modal-window v-if="show" @closeModal="close"></modal-window>
</template>

<script>
import { defineComponent } from 'vue'
import ModalWindow from './modal-window.vue'
import Template2x2 from '../templates/template-2x2.vue'
import { ref, reactive } from 'vue'

export default defineComponent({
    name: "main-admin-page",
    components: {
        ModalWindow, Template2x2
    },
    setup() {
        const show = ref(false)

        const close = (val) => {
            show.value = val
        }
        const showModal = () => {
            show.value = true
        }

        return {
            show, close, showModal
        }
    }
})
</script>

<style scoped lang="scss">
    .sidenav {
        height: 100%;
        width: 300px;
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
        overflow-x: hidden;
        padding-top: 16px;

        h3 {
            padding: 6px 8px 8px 16px;
            color: white;
            font-size: 28px;
            font-weight: 400;
        }

        a {
            padding: 6px 8px 6px 16px;
            text-decoration: none;
            font-size: 25px;
            font-weight: 200;
            color: white;
            display: block;

            &:hover {
                color: #f1f1f1;
            }
        }
    }

    .main {
        margin-left: 360px;
        margin-top: 16px;
        font-size: 28px;
        padding: 0 10px;
        color: #0e2538;

        h3 {
            font-weight: 300;
        }

        hr {
            border: none;
            background-color: #0e2538;
            color: #0e2538;
            height: 2px;
        }

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
            padding-left: 150px;
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

    @media screen and (max-height: 450px) {
        .sidenav { padding-top: 15px; }
        .sidenav a { font-size: 18px; }
    }
</style>
