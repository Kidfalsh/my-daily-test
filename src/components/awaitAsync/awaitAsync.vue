<template>
  <div class='awaitAsync'>
    <my-header :title="'awaitAsync'"></my-header>
    <div class="mes">
      <div class="button">获取信息</div>
      <div class="button">获取信息</div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
  export default{
    name:'awaitAsync',
    components:{myHeader},
    computed:{},
    data(){
      return {}
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      //console.log(this.getData())  //Promise {<resolved>: "Hello Mr D"}
      //this.getData().then(res=>{console.log(res)})  //  Hello Mr D
      this.test()   //something 
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      async getData(){
        return "Hello Mr D"
      },
      getSomething(){
        return 'something'
      },
      async testAsync(){
        return Promise.resolve('hello async')
      },
      async test(){
        const v1 = this.getSomething()
        const v2 = this.testAsync()
        console.log(v1,v2)
      }
    },
  }
</script>
<style lang="scss" scoped>
  .awaitAsync{
    .mes{
      display:flex;
      width:100%;
    }
    .button{
      width:42.5%;
      height:40px;
      text-align:center;
      background-color: bisque;
      color:#ccc;
      font-size:16px;
      line-height:40px;
      border:none;
      border-radius:5px;
      margin-left:5%;
      margin-top:1%;
    }
  }
</style>