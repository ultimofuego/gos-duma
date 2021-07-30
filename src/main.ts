import { createApp } from 'vue'
import App from './App.vue'
//import VueCompositionAPI from 'vue'
import { store } from './store'


createApp(App)
.use(store)
.mount('#app')
