import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maskShow: false,
    backBtn: true,
    backPage: -1,
  },
  mutations: {
    maskShow(state, value) {
      state.maskShow = value;
    },
    backPage(state, value) {
      state.backPage = value
    },
    setBackBtn(state, value) {
      state.backBtn = value;
    },
    setPageTitle(state, value = '健康金牛') {
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
    getBackBtn(state, getters) {
      return state.backBtn;
    },
    backPage(state, getters) {
      return state.backPage;
    },
    systemMessage(state, value) {
      Vue.$toast(value);
    },
  }
})
export default store;
