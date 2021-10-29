import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tab from './components/TabDemo.vue'
import Docdemo from './components/Docdemo.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        // 当访问根路径时,渲染的是lxz组件
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc,
            children: [
                { path: '', component: Docdemo },
                { path: 'switch', component: Switch },
                { path: 'dialog', component: Dialog },
                { path: 'button', component: Button },
                { path: 'tab', component: Tab }
            ]
        }
    ]
})

