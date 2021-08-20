<template>
    <div class="container">
        <component :is="templatesName"></component>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Template2x2 from './template-2x2.vue'
import Template2x1 from './template-2x1.vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
    props: ['id'],
    components: {
        Template2x1, Template2x2
    },
    setup(props) {
        const store = useStore()
        const id = ref(props.id)
        const templatesName = ref('')
        
        onMounted(() => {
            console.log(id.value)
            axios.get(`/back/workspace/${id.value}`).then(response => {
                axios.get(`/back/template/${response.data.templateId}`).then(res => {
                    console.log(res.data)
                    templatesName.value = res.data.component
                })
            })
            /*axios.get(`/back/template/${id}`).then(response => {
                
            })*/
        })

        /*const findTemplate = (id: number) => {
            isLoading.value = true
            console.log(id)
            console.log(store.state.workspaces)
            store.state.workspaces.forEach(workspace => {
                if(workspace.id == id) {
                    let templateId = workspace.templateId
                    store.state.template.forEach(template => {
                        if(template.id == templateId) {
                            return template.component
                        }
                    })
                }
            })
            isLoading.value = false
        }*/

        return { store, templatesName }
    }
    
})
</script>

<style scoped lang="scss">

</style>
