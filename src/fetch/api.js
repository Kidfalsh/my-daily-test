import axios from 'axios'
import store from '@/store'

////POST传参序列化
axios.interceptors.request.use((config)=>{
  store.commit('maskShow', true)
  return config;
}, (error) => {
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
  store.commit('maskShow', false)
  return res;
}, (error) => {
  return Promise.reject(error);
});

export function get(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        store.commit('maskShow', false)
        if (error.message.indexOf('timeout') >= 0) {
          store.commit('systemMessage', '连接超时，请检查网络。');
        }
        reject(error);
      });
  })
}
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: {
        data: JSON.stringify(params)
      },
      timeout: 8000,
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        store.commit('maskShow', false)
        if (error.message.indexOf('timeout') >= 0) {
          store.commit('systemMessage', '连接超时，请检查网络。');
        }
        reject(error);
      });
  })
}


export default{
  get,
  fetch
}