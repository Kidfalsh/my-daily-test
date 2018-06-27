<template>
  <div class='weatherForecast'>
    <my-header :title="title"></my-header>
    123123天气预报
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/header/header';
  export default{
    name:'weatherForecast',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'天气预报'
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
<style scoped>

</style>