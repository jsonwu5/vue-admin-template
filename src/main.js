import Vue from 'vue';
import Antd, { Icon } from 'ant-design-vue';
import nprogress from 'nprogress';
import echarts from 'echarts';
import App from "./App.vue";
import router from '@router';
import store from '@store';
import $http from '@http';
import filters from '@tools/filters.js';
import bus from '@tools/bus';

// 引入css
import '@styles/common.less';
import 'nprogress/nprogress.css';
import '@styles/global.less';

// 注册插件
Vue.use(Antd);

// 注册全局过滤器
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]));

// iconfont
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: 'http://at.alicdn.com/t/font_1726689_dpj8nsolobd.js',
});

// 注册自定义组件
Vue.component('my-icon', MyIcon); // iconfont

// 添加原型方法
Vue.prototype.$http = $http;
Vue.prototype.$nprogress = nprogress;
Vue.prototype.$bus = bus;
Vue.prototype.$echarts = echarts;

// Vue全局配置
Vue.config.productionTip = false;

// 启动App
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
