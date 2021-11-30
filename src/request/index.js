import axios from "axios";

// create an axios instance
const service = axios.create({
    baseURL: '',
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000*5 // request timeout
  });

// request interceptor
service.interceptors.request.use(config => {
    // token
    // if (store.getters['user/token']) {
    //   config.headers['Authorization'] = "Bearer " + store.getters['user/token']
    // }
    // 后端追踪请求字段
    // let date = new Date();
    // let str = date.format("yyyyMMddhhmmss");
    // config.headers['x-traceId-header'] = str + randomString(16);
    // 用户标识
    //config.headers['X-User-Type-Header'] = '0';
    // 对get请求时的空格进行编码处理: https://juejin.cn/post/6925698989337772045
    // if (config.method === 'get' && config.params) {
    //   config.url = encodeURIParams(config)
    // }
    return config
  }, error => {
    console.log(`service.interceptors.request: `, error);
    return Promise.reject(error)
})
  
// response interceptor
service.interceptors.response.use(response => {
    return response
  }, error => {
    return Promise.reject(error)
})
  
export default service
