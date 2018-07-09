<template>
  <div class='newList'>
    <my-header :title="title" :isHomePage="false"></my-header>
    <div>新闻中心</div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header';
  export default{
    name:'newList',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'新闻中心'
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