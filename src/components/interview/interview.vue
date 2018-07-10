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
        /** 1.0.0面试中的用原生方法实现数组反序*/
        firstArr:[1,2,3,4,5,6],
        /** 1.0.1假设现在有对象A、B，A对象绑定了S事件，如何对B对象也绑定S事件？ */
        objA:{},
        objB:{}
      }
    },
    created(){ 
    },
    mounted(){
      let res = this.resoveArr(this.firstArr)
      console.log(res)
    },
    methods:{
      /** 1.0.0 数组反序的原生方法*/
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
      },
      /** 1.0.1 A对象绑定了S事件，如何对B对象也绑定S事件？*/
      s(){
        //1.首先获取三个要绑定事件的对象，用JQuery的add方法实现： 
          //var a = $("#a"), b = $("#b"),c = $("#c");
          //a.add(b).add(c).bind("event",function(e,data){ alert("bind success");})
          //当然事先你应该trigger一个“event”事件.这里可以用click事件测试而无须trigger:
          // a.add(b).add(c).click(function () { alert("test"); }
        //2.通过JQuery的each方法遍历添加，将事件绑定在所有被遍历的对象上：
          //$("div").each(function(){ $(this).click(function(){alert('test');}); });
          //each方法描述：以每一个匹配的元素作为上下文来执行一个函数。
        //3.也可以使用原始的循环方法进行多对象绑定，创建一个对象数组然后循环添加
          //var array = [a,b,c];
          //for(var i=0;i<array.length;i++) { array[i].bind("event",function(e,data){ alert("bind success");)})  
      },
      
      
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
