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
        //4.用call apply 绑定或许能行
          //s.test().call(b) --->强行把b绑定到s的test中去
      },
      //symbol 测试
      //promise 测试 
      //红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次，
      //意思就是3秒，执行一次 red 函数，2秒执行一次 green 函数，1秒执行一次 yellow 函数，
      //不断交替重复亮灯，意思就是按照这个顺序一直执行这3个函数，这步可以就利用递归来实现。
      red(){
        console.log('red')
      },
      green(){
        console.log('green')
      },
      yellow(){
        console.log('yellow')
      },
      light(timmer, cb) {
        let cd = cb
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            cd()
            resolve()
          }, timmer)
        })
      },
      step() {
        var that = this
        Promise.resolve().then(function () {
          return that.light(3000, that.red);
        }).then(function () {
          return that.light(2000, that.green);
        }).then(function () {
          return that.light(1000, that.yellow);
        }).then(function () {
          that.step();
        });
      },
      //arr 操作方法
      arrDealWays(){
        let arr = [1,2,3,4]
        const brr = arr.concat(1,{name:'false'},[2,3])
        // for(let i in brr){
        //   console.log(i+"--->"+brr[i])
        // }
        //8. map forEach  //判断是否为数组
          /* let brr1 = brr.map((i)=>{
            console.log(i)
          })
          try{
            brr.map(i=>i)&&console.log('brr is arr')
          }catch(err){
            console.error('brr is obj')
          } */
        // 9.filter
          /* let brr2 =[1,2,3,45,'ajsdhkajs']
          let brr3 = arr.filter(item=>{
            return item<3
          }) */
        //console.log(brr3)
        // 10.every() some()
          /*let brr4 = [2,'asjdh',5,8]
          let brr4n = brr4.every(i=>{
            i==2
          })
          console.log(brr4n) */
        //11.reduce() reduceRight()
          /* let brr5=[1,2,3,4,5,666]
          //求和
          let brr6 = brr5.reduceRight((x,y)=>x+y)
          console.log(brr5)
          console.log(brr6) 
          //找最大值
          console.log(brr5.reduce((x,y)=>x>y?x:y)) */
        //12.indexOf() lastIndexOf()
          let brr7 = [1,3,5,5,5,7,1,7,9]
          let brr8=this.uniq(brr7)
          console.log(brr7)
          console.log(brr8)
      },
      //数组去重
      uniq(arr){
        let _arr = [];
        arr.map(item=>_arr.indexOf(item)===-1&&_arr.push(item))
        return _arr
      },
      //粒子 数字
      
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
