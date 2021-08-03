<template>
    <div class="red_box">
        <div class="item">HELLO</div>
        <p>hello</p>
    </div>
</template>

<script>
export default {
    name: 'red'
}
</script>

<style scoped lang="scss">
.red_box {
    width: 100px;
    height: 100px;
}

.item {
    display: block;
    margin: 0 auto;
    background: red;
    width: 100px;
    height: 100px;
    z-index: 99999999;
}
    
</style>