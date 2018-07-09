// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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

import api from '@/fetch/api.js';
Vue.prototype.api = api 

//使用城市选择组件
import Addressmap from 'adc-addressmap'
Vue.component('Addressmap', Addressmap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
