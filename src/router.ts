import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switch from './view/Switch.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        // 当访问根路径时,渲染的是lxz组件
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [{
                path: 'switch', component: Switch
            }]
        }
    ]
})

