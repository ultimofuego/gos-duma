import axios from 'axios'
import {ref, Ref} from 'vue'

type FetchRequest = () => Promise<void>

interface UsableFetch<T> {
    request: FetchRequest,
    response: Ref<T | undefined>
}

export function getWidget<T>(item: string): UsableFetch<T> {
    const response = ref<T>()

    const request = () => {
        const res = axios.get(`/back/${item}`)
        response.value = res
    }

    return {response, request}
}