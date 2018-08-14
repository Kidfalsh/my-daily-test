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
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{},
  }
</script>
<style lang="scss" scoped>
  .awaitAsync{
    .button{
      width:30%;
      height:40px;
      text-align:center;
      background-color: bisque;
      color:#ccc;
      font-size:16px;
      line-height:40px;
      border:none;
      border-radius:5px;
    }
  }
</style>