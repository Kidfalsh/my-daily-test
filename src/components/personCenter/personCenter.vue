<template>
  <div class='personCenter'>
    <my-header :title="title"></my-header>
    <div>个人中心</div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header';
  export default{
    name:'personCenter',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'个人中心'
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