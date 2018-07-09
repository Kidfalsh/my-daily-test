<template>
  <div class='homePage'>
    <my-header :title="title" :isHomePage="true"></my-header>
    <div>123</div>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header';
  export default{
    name:'homePage',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'首页'
      }
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
<style  scoped>

</style>