<template>
  <div class='handWritten'>
    <my-header :title="title"></my-header>
    <img :src="imgData" alt="" class="img">
    <div class="button" @click="addSign">添加签名</div>
    <signature v-if="isSign" @cancle="cancle" @confirm="confirm"></signature>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
import signature from '@/components/base/signature/signature'
  export default{
    name:'handWritten',
    components:{myHeader,signature},
    computed:{},
    data(){
      return {
        title:'手写签名',
        isSign:false,
        imgData:'',
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
      cancle(){
        this.isSign = false
      },
      confirm(data){
        console.log(data)
        this.imgData = data
        this.isSign = false
      },
      addSign(){
        this.isSign = true 
      }
    },
  }
</script>
<style  scoped>
  .img{
    width:100%;
    height:200px;
    display:block;
  }
  .button{
    width:30%;
    height:30px;
    background-color:cornflowerblue;
    color:blanchedalmond;
    line-height: 30px;
    text-align: center;
    font-size:16px;
    font-family: 'weiruanyahei';
    border-radius: 8px;
    border:1px solid transparent;
    outline:none;
    margin:0 0 0 68%;
  }
</style>