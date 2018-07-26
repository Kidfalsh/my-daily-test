// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'



import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
Vue.config.productionTip = false

//使用icon  svg图标
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon)

//使用axios 
import axios from 'axios'
Vue.prototype.axios = axios

//引入api 作为对象添加到Vue原型链上去   ---页面中用 this.api.xxx 直接调用
import api from '@/fetch/api.js'; 
Vue.prototype.api = api 

//使用城市选择组件
import Addressmap from 'adc-addressmap'
Vue.component('Addressmap', Addressmap)


/**
 * 初始化服务器地址
 */
/* eslint-disable no-new */
axios.get('static/sysConfig/config.json?random=' + +new Date(), {}).then(function (res) {
  // 初始化配置
  //console.log(res)
  api.initConfig(res.data);
  if (res.data.devMode == 'true') {
    // vConsole = new VConsole();
  }
  init();
}).catch(function (res) {
  alert('数据初始化出错！');
});
function init(){
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}

