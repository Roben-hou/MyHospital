//引入清除默认样式
import '@/style/reset.scss'
//VUE3提供的方法create方法，可以用来创建应用实例方法
import { createApp } from 'vue'
//引入Element Plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入根组件App
import App from './App.vue'
import HospitalTop from './components/hospital_top/HospitalTop.vue'
import HospitalBottom from './components/hospital_bottom/HospitalBottom.vue'
//引入自定义的路由文件
import { router } from './router'
//创建应用实例
const app = createApp(App)
app.use(router)
//全局注册Element Plus组件库
app.use(ElementPlus)
//全局状态
// 2. 挂载应用
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.mount('#app')

