import axios from 'axios';
// 创建一个拥有自己风格的请求方法
const request = axios.create({
    /*
    * baseURl:要向哪个地址发起请求
    * 例如 : http://localhost:3000/
    *
    * 作用: 在使用实例发起请求的时候可以简写请求地址
    * 例如: request.get('user/add',{...options})->request('http://localhost:3000/user/add',{...options})
    * */
    baseURL: '',
    withCredentials:true,
});

export default request;
