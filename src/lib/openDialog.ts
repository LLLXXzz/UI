import dialog from './dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
    const { title, content, ok } = options
    //将dialog放入页面中
    //1 创建一个临时div 不能直接放到body中 会让影响之前的
    const div = document.createElement('div')
    //将临时div放在body上
    document.body.appendChild(div)
    //将dialog挂载到div中
    //createApp渲染dialog挂载到div上
    // createApp(dialog).mount(div)
    const close = () => {
        //卸载应用实例的根组件
        //@ts-ignore
        app.unmount(div)
        //删除临时div
        div.remove()
    }
    const app = createApp({
        render() {
            //在渲染dialog 传一个参数visible为true 
            return h(dialog, {
                visible: true,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close()
                    }
                },
                ok,
            },
                //title content是插槽 所以再写一个对象
                {
                    title: title,
                    content: content
                })
        }
    })
    app.mount(div)

}


