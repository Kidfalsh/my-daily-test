import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maskShow: false,//遮罩层 
  },
  mutations: {
    setMaskShow(state, value) {
      state.maskShow = value;
    },
    /**
     * 系统通知消息
     * @param {state} state 
     * @param {提示字符串} value 
     */
    systemMessage(state,value){
      Vue.$toast(value);
    },
    /**
     * 设置页面头部名称
     * @param {state} state 
     * @param {标题名称} value 
     */
    setPageTitle(state,value = '健康金牛') {
      document.title = value;
      var i = document.createElement('iframe');
      i.src = '//m.baidu.com/favicon.ico';
      i.style.display = 'none';
      i.onload = function () {
        setTimeout(function () {
          i.remove();
        }, 19)
      }
      document.body.appendChild(i);
    }
  },
  getters: {
    getMaskShow:state=>{
      return state.maskShow
    }
  }
})
export default store;
