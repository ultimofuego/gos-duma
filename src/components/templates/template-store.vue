<template>
<div class="main_container">
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
                    templatesName.value = res.data.component
                })
            })
            .catch(error => {
                console.log(error)
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
$templatestore-maincolor: #5A8AB8;
$templatestore-secondcolor: #9CC2E6;
$templatestore-textcolor: #749DC3;

.main_container {
    width: 80%;
    position: absolute;
    height: 90%;
    margin-left: -15px;
    margin-top: 33px;
    font-size: 28px;
    padding: 0 10px;
    color: $templatestore-textcolor;
    font-weight: 500;
}



</style>
