<template>
  <div class='homePage'>
    <my-header :title="title" :isHomePage="true"></my-header>
    <!-- banner -->
    <my-swipe></my-swipe>
    <div class="mes">
      
    </div>
    <div class="contain">
      
    </div>
  </div>
</template>
<script type='text/javascript'>
  import mySwipe from "@/components/base/mySwipe/mySwipe.vue";
  import myHeader from '@/components/base/header/header';
  //操作表，从屏幕下方移入。
  import { Actionsheet } from 'mint-ui';
  //Vue.component(Actionsheet.name, Actionsheet);
  export default{
    name:'homePage',
    components:{myHeader,mySwipe},
    computed:{},
    data(){
      return {
        title:'个人监控系统',
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
    methods:{
      sheetValue(){
        this.sheetShow=true;
      }
    },
  }
</script>
<style  scoped>

</style>