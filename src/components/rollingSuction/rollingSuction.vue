<template>
  <div class='rollingSuction'>
    <my-header :title="title"></my-header>
    <!-- way1 使用 position:sticky; -->
    <div class="content">
      <div class="body-top"></div>
      <div class="top">头部</div>
      <div class="body"></div>
      <div class="body" style="background:red;"></div>
      <div class="body" style="background:#fff;"></div>
      <div class="body" style="background:#ddd;"></div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
  export default{
    name:'rollingSuction',
    components:{myHeader},
    computed:{},
    data(){
      return {
        // titleFixed:false,
        title:"滚动吸顶"
      }
    },
    /**
     * activated钩子函数
     * @param {在vue对象存活的情况下}
     * @param {进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等}
     */
    // activated() {
    //   this.titleFixed = false;
    //   window.addEventListener('scroll', this.handleScroll)
    // },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      /**
       * handleScoll
       * @param {滚动监听，头部固定}
       */
      // handleScroll() {
      //   let offsetTop = this.$refs.pride_tab_fixed.getBoundingClientRect().top;
      //   this.titleFixed = offsetTop < 0;
      // },
    },
  }
</script>
<style lang="scss" scoped>
  .rollingSuction{
    // 方法1： 使用position:sticky;top:xxpx;实现
    height:100%;
    width:100%;
    .content{
      width:100%;
      height:100%;
      overflow: hidden;
      overflow-y: auto;
      .top{
        display: flex;
        align-items: center;
        height:40px;
        line-height:40px;
        color:#333;
        background: #ddd;
        position: -webkit-sticky;
        position: sticky;
        top:0;
      }
      .body{
        width:100%;
        min-height:100%;
      }
      .body-top{
        width:100%;
        min-height:50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background:seagreen;
      }
    }
    // 方法2 
    .pride_tab_fixed{
      min-height: 120%;
      width:100%;
    }
  }
</style>