<template>
  <div class='typing'>
    <my-header :title="title"></my-header>
    <p class="typings">大家好啊！我是魏琼琼。作者：魏大琼</p>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header'
  export default{
    name:'typing',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'打印特效'
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
  .typings{
    width: 100%;
    white-space: nowrap;
    border-right: 2px solid transparent;
    animation: typing 3.5s steps(17, end), blink-caret .75s step-end infinite;
    overflow: hidden;
  }
  /* 打印效果 */
  @keyframes typing {
    from {width: 0;}
    to {width: 17em;}
  }
  /* 光标闪啊闪 */
  @keyframes blink-caret {
    from, to { box-shadow: 1px 0 0 0 transparent; }
    50% { box-shadow: 1px 0 0 0; }
  }
</style>