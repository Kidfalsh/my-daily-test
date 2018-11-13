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


//城市组件--全局安装
import VueAreaLinkage from 'vue-area-linkage'
import 'vue-area-linkage/dist/index.css'
Vue.use(VueAreaLinkage)


//引入vue-amap  --高德地图
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'a88dd4fa4f41a209d806e908d8d615a2',
  // 插件集合
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});

/**
 * jsbarcode  条形码
 */
var JsBarcode = require('jsbarcode');
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

