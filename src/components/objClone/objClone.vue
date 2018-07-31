<template>
  <div class='objClone'>
    <my-header :title="title"></my-header>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header'
  export default{
    name:'objClone',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'对象深浅拷贝'
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      let person = this.init()
      console.log(person)
      const clonePerson = this.simpleClone(person)
      console.log(clonePerson)
      //通过这个方法也能达到相同的效果
      const simpleClonePerson = Object.assign({}, person)
      console.log(simpleClonePerson)
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      //初始化一个构造函数并且给其赋值
      init(){
        function Person(name,age,job){
          this.name = name
          this.age = age
          this.job = job
          this.height=function(){};
          this.weidth = Symbol.for('weight')
          this.firend = {
            name:"lilei",
            age: 15 
          }
        }
        Person.prototype.hobby=function(){
          return ['football','basketball']
        }
        const person = new Person('mike', null, undefined)
        return person 
      },
      //浅拷贝  --遍历
      simpleClone(target){
        if (typeof target !== 'object') {
          throw new TypeError('arguments must be a Object!')
        }
        let obj = {}
        // 设置原型
        const prototype = Reflect.getPrototypeOf(target)
        Reflect.setPrototypeOf(obj, prototype)
        // 设置属性
        Reflect.ownKeys(target).forEach((key) => {
          obj[key] = target[key]
        })
        return obj
      },
      //深拷贝 --递归
      //递归拷贝其实也就是在浅拷贝的遍历拷贝上新增了一些东西
      deepClone(target){
        if (typeof target !== 'object') {
          throw new TypeError('arguments must be a Object!')
        }
        let obj = {}
        // 设置原型
        const prototype = Reflect.getPrototypeOf(target)
        Reflect.setPrototypeOf(obj, prototype)
        // 设置属性
        Reflect.ownKeys(target).forEach((key) => {
          const value = target[key]
          if (value !== null && typeof value === 'object') {
            obj[key] = deepClone(value)
          } else {
            obj[key] = value
          }
        })
        return obj
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>