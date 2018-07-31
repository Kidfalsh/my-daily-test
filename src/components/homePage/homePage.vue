<template>
  <div class='homePage'>
    <my-header :title="title" :isHomePage="true"></my-header>
    <!-- banner -->
    <my-swipe></my-swipe>
    <div class="mes">
      <div v-for="item in mesArr" :style="{color:item.bgColor}" @click.stop="gotoPages(item)">
        {{item.name}}
      </div>
    </div>
    <div class="contain">
      
    </div>
  </div>
</template>
<script type='text/javascript'>
  import mySwipe from "@/components/base/mySwipe/mySwipe.vue";
  import myHeader from '@/components/base/header/header';
  //操作表，从屏幕下方移入。
  import { Actionsheet } from 'mint-ui';
  //Vue.component(Actionsheet.name, Actionsheet);
  export default{
    name:'homePage',
    components:{myHeader,mySwipe},
    computed:{},
    data(){
      return {
        title:'首页',
        mesArr:[
          { name: "文件上传",
            path: "/index/uploadFile",
            bgColor: "#35d587",
            query: { to: "/index/uploadFile" }
          },
          { name: "头部滑动伸缩效果",
            path: "/index/yunhe",
            bgColor: "#35d587",
            query: { to: "/index/yunhe" }
          },
          { name: "波纹效果展示",
            path: "/index/wave",
            bgColor: "#35d587",
            query: { to: "/index/wave" }
          },
          {
            name:'手写签名',
            path:'/index/handWritten',
            bgColor:"#35d587",
            query:{to:'/index/handWritten'}
          },
          {
            name:'fireWorks',
            path:'/index/fireWorks',
            bgColor:'#35d587',
            query:{to:'/index/fireWorks'}
          },
          {
            name:'barrage',
            path:'/index/barrageSet',
            bgColor:'#35d871',
            query:{to:'/index/barrage'}
          },
          {
            name:'数组/对象の克隆',
            path:'/index/arrayClone',
            bgColor:'#35d871',
            query:{to:'/index/arrayClone'}
          },
          {
            name:'对象浅拷贝/深拷贝',
            path:'/index/objClone',
            bgColor:'#35d871',
            query:{to:'/index/objClone'}
          },
          {
            name:"高德",
            path:'/index/gadMap',
            bgColor:'#35d871',
            query:{to:'/index/gadMap'}
          }
        ]
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      this.$store.commit('setPageTitle','首页') //设置页面标题
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      sheetValue(){
        this.sheetShow=true;
      },
      gotoPages(item){
        console.log(item)
        this.$router.push({
          path:item.path
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  .mes{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    /* justify-content: space-between; */
    text-align: center;
  }
  .mes div{
    width:45%;
    margin-left:3%;
    margin-top:10px;
    height:20px;
    line-height:20px;
    border:1px solid #ddd;
    border-radius:4px;
    background-color:#f0f0f0;
    color:#333;
  }
</style>