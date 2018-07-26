<template>
  <div class='newList'>
    <!-- <my-header :title="title" :isHomePage="false"></my-header> -->
    <div class="header" ref="header">
      <div @click="changeNewsType(item,index)" v-for="item,index in headerList"
         class="header-item" :class="{active:headerCkList[index]}">
        {{item}}
      </div>
    </div>
    <div>新闻中心</div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header';
  export default{
    name:'newList',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'新闻中心',
        headerList:['最新',"国内","军事","体育","NBA","娱乐","更多"],//初始化头部新闻类型 --先写死
        headerCkList:[1,0,0,0,0,0,0],//初始化默认选中第一个
        headerWidth:'',//header宽度
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){
      this.$store.commit('setPageTitle','新闻中心')
    },
    mounted(){
      /**
       * 获取header 高度保存进 vuex里面的 newsWidth
       */
      console.log(this.$refs.header.getBoundingClientRect().width)  //屏幕的宽度
      this.headerWidth = this.$refs.header.scrollWidth //class为header的宽度
      this.$store.commit("setNewsWidth",this.headerWidth)
      this.loadNews(0)
      
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      /**
       * 切换新闻类型
       */
      changeNewsType(item,index){
        this.headerCkList=[0,0,0,0,0,0,0] //初始化headerCklist
        //设置当前点击的item  index把headerCklist[index]值设为1
        this.$set(this.headerCkList,index,1)
        this.loadNews(index)
      },
      //加载新闻
      loadNews(index){
        if(index=='0'){
          this.api.getNews().then(res=>{
            console.log(res)
          })
        }
        this.$store.getters.getNewsWidth //拿到宽度
      }
    },
  }
</script>
<style lang="scss" scoped>
  .newList{
    height:100%;
    width:100%;
    .header{
      overflow-x:auto;
      overflow-y:hidden;
      z-index: 2;
      height: 44px;
      white-space: nowrap;
      position: relative;color:#666666;
      .header-item{
        display: inline-block;width:80px;
        padding: 1%;text-align: center;height:30px;
        line-height: 30px;margin: 5px 0px;
        color:#666666;font-size: 15px;
      }
    }
    .header:after{
      height: 1px;content: "";width:100%;border-top: 1px solid #e6e6e6;
      position: absolute;bottom: -1px;
      right: 0;transform: scaleY(0.5);-webkit-transform: scaleY(0.5);
    }
    /* 激活选项卡的样式 */
    .active{position: relative;color:#00b678 !important;}
    .active:after{
      height:2px;content:"";width:40px;
      border-top:4px solid #00b678;
      position:absolute;bottom:-4px;left:25%;
      transform:scaleY(0.5);-webkit-transform:scaleY(0.5);
    }
  }
</style>