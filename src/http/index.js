import axios from 'axios';
import cookie from 'js-cookie';
import nprogress from 'nprogress';
import { message } from 'ant-design-vue';
import router from '@router';

const $http = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 20000,
});

// 请求错误处理函数
function handleError(error) {
  console.log('error:%o, msg:%s', error, error.message);
  // 请求超时
  if (error.message.includes('timeout')) {
    // 忽略质量检测结果轮询接口超时异常
    if (error.response.config.url !== '/api/quality-analysis/task/get-result') {
      message.error({
        content: '请求超时，请稍后再试',
        key: 'http-error',
      });
      return Promise.reject(JSON.parse(JSON.stringify(error)));
    }
  }
  // status === 401 没有权限，用户未登录，返回登录页面
  if (error && error.response && error.response.status === 401) {
    router.replace('/login');
    return;
  }
  // TODO: 此处不能直接抛出，否则将吃掉服务端返回的异常信息
  // if(error.response.status===403){
  //   message.warn("权限不足");
  //   return;
  // }

  setTimeout(() => {
    if (
      error.response.data &&
      error.response.data.error &&
      !error.response.data.error.handled &&
      !error.config.hideErrorMessage
    ) {
      message.error({
        content: error.response.data.error.message,
        key: 'http-error',
      });
    } else {
      // 忽略登录接口403的提示
      if (error.response.config.url !== '/api/passport/login') {
        message.warn({
          content: '服务器异常',
          key: 'fuwuqiyichang',
        });
      }
    }
  }, 0);
  return Promise.reject(error.response.data && error.response.data.error);
}

$http.interceptors.request.use((config) => {
  const Authorization = cookie.get('Authorization');
  const __tenant = cookie.get('__tenant');
  Authorization && (config.headers.Authorization = `Bearer ${Authorization}`);
  __tenant && (config.headers.__tenant = __tenant);
  // 扫码结果轮询，不显示进度条
  if (config.url === '/api/weixin/QrcodeScan') return config;
  nprogress.start();
  return config;
});

$http.interceptors.response.use(
  (response) => {
    nprogress.done();
    return Promise.resolve(response.data);
  },
  (error) => {
    nprogress.done();
    return handleError(error);
  },
);

export default $http;
