import {getWidget} from '@/use/fetch'
import { ref, Ref } from 'vue'

export function useWidgets() {
    const loading: Ref<boolean> = ref<boolean>(false)
    const {response: widgets, request} = getWidget('widget')

    if(!loading.value) {
        request()
        loading.value = true
    }

    return {widgets}
}