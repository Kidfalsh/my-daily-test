import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import test from '@/components/test/test'
import index from '@/components/index/index'
import homePage from '@/components/homePage/homePage'
import newList from '@/components/newList/newList'
import weatherForecast from '@/components/weatherForecast/weatherForecast'
import personCenter from '@/components/personCenter/personCenter'
import interview from '@/components/interview/interview'
import uploadFile from '@/components/uploadFile/uploadFile' //文件上传页面
import yunhe from '@/components/yunhe/yunhe' //云鹤
import wave from '@/components/wave/wave' //波浪页面
import handWritten from '@/components/handWritten/handWritten' //手写签名
import fireWorks from '@/components/fireWorks/fireWorks' //烟花效果
import forbidden from '@/components/404/404'
import barrage from '@/components/barrageSet/barrageSet' //弹幕页面
import arrayClone from '@/components/arrayClone/arrayClone' // 数组/对象克隆
import objClone from '@/components/objClone/objClone' // 对象深浅拷贝
import gadMap from "@/components/gadMap/gadMap" // 高德地图
import awaitAsync from "@/components/awaitAsync/awaitAsync"
import particle from '@/components/particle/particle'
import barCode from '@/components/barCode/barCode'
import payOnline from '@/components/payOnline/payOnline'
import hammerJs from '@/components/hammerJs/hammerJs'
import newBarrage from '@/components/newBarrage/newBarrage'
import typing from '@/components/typing/typing'
import countTIME from '@/components/countTIME/countTIME'
import rollingSuction from '@/components/rollingSuction/rollingSuction'
import loadingStyle from '@/components/loadingStyle/loadingStyle'
import timeFollow from '@/components/timeFollow/timeFollow'
// auto add components

export default new Router({
  routes: [
    {
      name:'homePage',
      path:'/',
      redirect:'index/homePage'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/index/homePage',
          name: 'homePage',
          component: homePage
        }, {
          path: '/index/newList',
          name: 'newList',
          component: newList
        }, {
          path: '/index/weatherForecast',
          name: 'weatherForecast',
          component: weatherForecast
        }, {
          path: '/index/personCenter',
          name: 'personCenter',
          component: personCenter
        }
      ]
    },{
      path:'/index/test',
      name: 'test',
      component:test
    },{
      path:'/index/interview',
      name:'interview',
      component:interview
    },{
      path:'/index/uploadFile',
      name:'uploadFile',
      component:uploadFile
    }, {
      path: '/index/yunhe',
      name: 'yunhe',
      component: yunhe
    }, {
      path: '/index/wave',
      name: 'wave',
      component: wave
    }, {
      path: '/index/handWritten',
      name: 'handWritten',
      component: handWritten
    }, {
      path: '/index/fireWorks',
      name: 'fireWorks',
      component: fireWorks
    },{
      path:'/index/barrageSet',
      name:'barrage',
      component:barrage,
    },{
      path: '/index/objClone',
      name: 'objClone',
      component: objClone
    },{
      path: '/index/arrayClone',
      name: 'arrayClone',
      component: arrayClone
    },{
      path: '/index/gadMap',
      name: 'gadMap',
      component: gadMap
    },{
      path:'/index/awaitAsync',
      name:'awaitAsync',
      component:awaitAsync
    },{
      name:'particle',
      path:'/index/particle',
      component: particle
    },{
      path: '/404',
      name: '404',
      component: forbidden
    }, {
      path: '*',    // 此处需特别注意至于最底部
      redirect: '/404'
    },
        {
          name: 'barCode',
          path: '/index/barCode',
          component: barCode
        },
        {
          name: 'payOnline',
          path: '/index/payOnline',
          component: payOnline
        },
        {
          name: 'hammerJs',
          path: '/index/hammerJs',
          component: hammerJs
        },
        {
          name: 'newBarrage',
          path: '/index/newBarrage',
          component: newBarrage
        },
        {
          name: 'typing',
          path: '/index/typing',
          component: typing
        },
        {
          name: 'countTIME',
          path: '/index/countTIME',
          component: countTIME
        },
        {
          name: 'rollingSuction',
          path: '/index/rollingSuction',
          component: rollingSuction
        },
        {
          name: 'loadingStyle',
          path: '/index/loadingStyle',
          component: loadingStyle
        },
        {
          name: 'timeFollow',
          path: '/index/timeFollow',
          component: timeFollow
        }// auto add routePath
  ]
})
