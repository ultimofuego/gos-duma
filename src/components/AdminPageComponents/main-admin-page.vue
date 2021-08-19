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
        <content-page></content-page>
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import ContentPage from './content-page.vue'

export default defineComponent({
    name: "main-admin-page",
    components: {
        ContentPage, 
    }
})
</script>

<style scoped lang="scss">
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
    }

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


    @media screen and (max-height: 450px) {
        .sidenav { padding-top: 15px; }
        .sidenav a { font-size: 18px; }
    }
</style>
