<template>
  <div class='arrayClone'>
    <my-header :title="title"></my-header>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header'
  export default{
    name:'arrayClone',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'の克隆'
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      //this.noReferenceTypeClone()
      //this.haveReferenceTypeClone()
      let obj = {
        name:'daiye',
        age:"18",
        sex:'man'
      }
      let newobj = this.cloneObj(obj)
      // newobj.name="flash"
      // console.log(obj)
      // console.log(newobj)
      let newobj1 = this.simpleClone(obj)
      // newobj1.name="flashkids"
      // console.log(obj)
      // console.log(newobj1)
      //两个方法都不会改变原始的对象的值
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      /**
       * 不含引用类型的数组
       */
      noReferenceTypeClone(){
        let arr1 = [1,2,3,4,5]
        let arr2 = arr1.slice(0) //slice
        let arr3 = [].concat(arr1) //concat克隆
        let arr4 = Object.assign({},arr1) //assign 克隆
        let arr5 = arr1  //直接赋值

        arr2[3]=6;
        console.log(arr1) //[1, 2, 3, 4, 5]
        console.log(arr2) //[1, 2, 3, 6, 5]   arr1不变

        arr3[3]=6;
        console.log(arr1) //[1, 2, 3, 4, 5]
        console.log(arr2) //[1, 2, 3, 6, 5]   arr1不变

        arr4[3]=6;
        console.log(arr1) //[1, 2, 3, 4, 5]
        console.log(arr2) //[1, 2, 3, 6, 5]   arr1不变

        arr5[3]=6;
        console.log(arr1) //[1, 2, 3, 6, 5]
        console.log(arr2) //[1, 2, 3, 6, 5]   arr1发生变化
        /**
         * 结论
         * 使用 slice() 方法拷贝数组，然后修改新数组，不会影响到旧数组的值。
         * 使用 concat() 方法拷贝数组，然后修改新数组，不会影响到旧数组的值
         * 使用 assign() 方法拷贝数组，然后修改新数组，不会影响到旧数组的值。
         * 使用数组简单赋值方法拷贝数组，然后修改新数组，会影响到旧数组的值。
         * 原因：这种简单赋值的方法属于数组的浅拷贝，数组arr1和数组arr5共用同一块内存，其中一个数组改变，另一个数组也会跟着改变。
         */
      },
      /**
       * 含引用类型的数组
       */
      haveReferenceTypeClone(){
        let arr1 = [1,2,3,{"name":"张一"},{"sex":"male"},{"age":"18"}]
        let arr2 = arr1.slice(0) //slice
        let arr3 = [].concat(arr1) //concat克隆
        let arr4 = Object.assign({},arr1) //assign 克隆
        let arr5 = arr1  //直接赋值

        arr2[3].name="张二"
        console.log(arr1) // [1, 2, 3, {"name":"张二"},{"sex":"male"},{"age":"18"}]
        console.log(arr2) // [1, 2, 3, {"name":"张二"},{"sex":"male"},{"age":"18"}] arr1发生变化

        arr3[3].name="张三"
        console.log(arr1) // [1, 2, 3, {"name":"张三"},{"sex":"male"},{"age":"18"}]
        console.log(arr2) // [1, 2, 3, {"name":"张三"},{"sex":"male"},{"age":"18"}] arr1发生变化

        arr4[3].name="张四"
        console.log(arr1) // [1, 2, 3, {"name":"张四"},{"sex":"male"},{"age":"18"}]
        console.log(arr2) // [1, 2, 3, {"name":"张四"},{"sex":"male"},{"age":"18"}] arr1发生变化

        /**
         * （1）数组的直接赋值属于数组的浅拷贝，JS存储对象都是存内存地址的，所以浅拷贝会导致新数组和旧数组共用同一块内存地址，其中一个数组变化，另一个数组也会相应的变化。
         * （2）数组内部不含有引用类型，使用slice() 、concat() 和 assign() 方法都属于数组的深拷贝，一个数组变化，另一个数组不受影响。
         * （3）数组内部含有引用类型，使用slice() 、concat() 和 assign() 方法，非引用类型的值属于深拷贝，引入类型的值属于浅拷贝，一个数组变化，另一个也会相应的变化。
         */
      },
      /**
       * 解决含有引用类型的数组克隆方法
       * 一、递归
       * 二、通过JSON解析解决
       */
      //递归
      cloneObj(obj){
        let str,newobj=obj.constructor===Array?[]:{}
        if(typeof obj !=='object'){
          return;
        }else if (window.JSON){
          str=JSON.stringify(obj)
          newobj = JSON.parse(str)
        }else{
          for(var i in obj){
            newobj[i]=typeof obj[i]==='object'? this.cloneObj(obj[i]):obj[i];
          }
        }
        return newobj
      },
      //通过JSON解析
      simpleClone(obj){
        return JSON.parse(JSON.stringify(obj))
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>