import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Lxz from './components/Lxz.vue'
import Lxz2 from './components/Lxz2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        // 当访问根路径时,渲染的是lxz组件
        { path: '/', component: Lxz },
        { path: '/2', component: Lxz2 }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
