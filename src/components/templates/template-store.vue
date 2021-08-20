<template>
    <div class="container">
        <component :is="templatesName"></component>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from 'vue'
import Template2x2 from './template-2x2.vue'
import Template2x1 from './template-2x1.vue'


export default defineComponent({
    props: ['templatesName'],
    components: {
        Template2x1, Template2x2
    },
    setup(props) {

        onUpdated(() => {
            const templatesName = ref(props.templatesName)
            return templatesName
        })

        //const templatesName = ref(props.templatesName)

        
    }
    
})
</script>

<style scoped lang="scss">

</style>
