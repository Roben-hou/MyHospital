//对于axios函数库进行二次封装
//目的1:利用axios请求，响应拦截器功能
//目的2:请求拦截器，一般可以在请求头中携带统一的公共参数，例如：token
//目的3：响应拦截器，可以简化服务器返回的数据格式，简化数据的获取，一般可以在响应后处理一些错误信息
import axios from "axios";

//1.利用axios实例对象提供的方法create（）方法，创建axios实例对象
const request = axios.create({
    baseURL: '/api',//基础地址
    timeout: 5000,//超时时间
})

request.interceptors.request.use((config) => {
    //请求拦截器
    return config
})
request.interceptors.response.use((response) => {
    //响应拦截器
    return response.data
}, (error) => {
    //响应失败
    return Promise.reject(error)
})
export default request;
