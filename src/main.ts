//引入清除默认样式
import '@/style/reset.scss'
//VUE3提供的方法create方法，可以用来创建应用实例方法
import { createApp } from 'vue'
//引入根组件App
import App from './App.vue'
import HospitalTop from './components/hospital_top/index.vue'
//创建应用实例
const app = createApp(App)
//全局状态
// 2. 挂载应用
app.component('HospitalTop', HospitalTop)
app.mount('#app')

