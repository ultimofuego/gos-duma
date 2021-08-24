<template>
<div class="container">
    <div class="sidenav_wrapper">
        <div class="sidenav">
            <h3>Личный кабинет</h3>
            <a href="#">Мой профиль</a>
            <a href="#">Мои события</a>
            <a href="#">Мои документы</a>
            <a href="#">Мои пространства</a>
            <a href="#">Выйти</a>
        </div>
    </div>
   
    <div class="main">
        <h3>Мои пространства</h3>
        <router-view/>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'


export default defineComponent({
    name: "main-admin-page",
    
})
</script>

<style scoped lang="scss">
    $sidenav-maincolor: white;
    $sidenav-secondcolor: white;
    $sidenav-textcolor: #749DC3;

    .container {
        font-size: 20px;
        min-height: 100vh;
    }

    .main {
        padding-top: 25px;
        color: #0e2538;
        width: 100%;
        padding-left: 300px;
        min-height: 100vh;
        color: $sidenav-textcolor;
        h3 {
            font-weight: 400;
        }
    }
    
    .sidenav_wrapper {
        position: fixed;
        left: 0px;
        width: 300px;
        height: 100%;
    }

    .sidenav {
        width: 300px;
        z-index: 1;
        background: $sidenav-maincolor;
        background: linear-gradient(180deg, $sidenav-maincolor 50%, $sidenav-secondcolor 100%);
        overflow-x: hidden;
        padding-top: 25px;
        padding-left: 40px;
        color: $sidenav-textcolor;
        position: absolute;
        top: 0;
        h3 {
            font-weight: 500;
            padding-bottom: 25px;
        }

        a {
            padding-bottom: 10px;
            padding-top: 10px;
            text-decoration: none;
            font-size: 20px;
            font-weight: 500;
            display: block;
            color: $sidenav-textcolor;
            position: relative;
            width: 90%;
            transition: 0.1s;
            &:after {
                content: "";
                display: block;
                background-color: darken($sidenav-textcolor, 20%);
                width: 2px;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                opacity: 0;
            }
            &:hover {
                color: darken($sidenav-textcolor, 20%);
                &:after {
                    content: "";
                    display: block;
                    background-color: darken($sidenav-textcolor, 20%);
                    width: 2px;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    opacity: 1;
                    transition: 0.1s;
                }
            }
        }
    }


    @media screen and (max-height: 450px) {
        .sidenav { padding-top: 15px; }
        .sidenav a { font-size: 18px; }
    }
</style>
