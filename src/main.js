// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App'
// 引入路由
// 如果引入的是 index.js，可以使用下面的简写，等价于 import router from './router/index.js'
import router from './router'
import './directives'
import './components'
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'

// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少
/* eslint-disable no-new */
// 创建一个新的 Vue 实例
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
