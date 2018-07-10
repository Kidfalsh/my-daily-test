<template>
  <div class='homePage'>
    <!-- <my-header :title="title" :isHomePage="true"></my-header> -->
    <div class="header-img">
      <img src="" alt="">
    </div>
    <div class="mes">
      <div @click="sheetValue">选择下拉</div>
    </div>
    <div class="contain">
      <mt-actionsheet
        v-if="sheetShow"
        :actions="actions"
        v-model="sheetVisible"
        cancelText="cancle"
        closeOnClickModal=true></mt-actionsheet>
    </div>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header';
  //操作表，从屏幕下方移入。
  import { Actionsheet } from 'mint-ui';
  //Vue.component(Actionsheet.name, Actionsheet);
  export default{
    name:'homePage',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'首页',
        headerImg:[
          {},{},{}
        ],
        sheetShow:false,
        sheetVisible:'',
        actions:[
          {name:'环节'},
          {name:'测试'}
        ]
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