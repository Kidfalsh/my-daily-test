<template>
  <div class='fireWorks'>
    <my-header :title="title"></my-header>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
  export default{
    name:'fireWorks',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'烟花'
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
<style lang="scss" scoped>

</style>