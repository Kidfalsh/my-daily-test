<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 面试相关的所有信息-->
<template>
  <div class="test">
    <my-header :title="title" :isHomePage="true"></my-header>
    <div>{{msg}} </div>
    <div class="square"></div>
    <div id='square'></div>
  </div>
</template>

<script>
  import myHeader from "@/components/base/header/header";
  export default {
    name: 'test',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title:'interview',
        firstArr:[1,2,3,4,5,6],//面试中的用原生方法实现数组反序
      }
    },
    created(){ 
    },
    mounted(){
      let res = this.resoveArr(this.firstArr)
      console.log(res)
    },
    methods:{
      /**
       * 1.0.0数组反序的原生方法
       */
      resoveArr(arr){
        var result=[]
        // 法1
        /* arr.forEach(element => {
          result.unshift(element)
        }); */
        //法2
        arr.map(res=>{
          result.unshift(res)
        })
        return result
      }
    },
    components: {
      myHeader
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    /* css实现宽度为浏览器20% 的正方形 */
    /* 法1 */
    .square{
      width:20%;
      /* padding-top:20%; */
      padding-bottom:20%;
      height:0;
      background-color: aqua;
      margin:0 auto;
    }
    /* 法2 */
    #square{  
      width:20%;  
      height:20vw;  
      background:red;  
      margin:0 auto;
    }   
</style>
