<template>
  <div class='countTIME'>
    <div class="countDown">
      <div class="left">倒计时</div>
      <div class="progressBar">
        <div class="progressBar-active" :style="{width:timeStamp+'%'}"></div>
      </div>
      <div class="right">{{time}}S</div>
    </div>
  </div>
</template>
<script type='text/javascript'>
  export default{
    name:'countTIME',
    components:{},
    computed:{},
    data(){
      return {
        time:15,
        timeStamp:100,
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      this.countDown()
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      //倒计时
      countDown(){
        let count = 15
        let total = 15
        var timer = setInterval(()=>{
          count = parseFloat(count-0.01).toFixed(2)
          console.log(count)
          this.timeStamp = (count/total)*100
          if(count%1===0){
            this.time --
          }
          if(count<0){
            clearInterval(timer)
          }
        },10)
      }
    },
  }
</script>
<style lang="scss" scoped>
  .countTIME{
    width:100%;
    height:100%;
    
  }
  .countDown{
    height:40px;
    width:335px;
    margin:0 auto;
    display: flex;
    line-height:40px;
    text-align:center;
    margin-top:30px;
    justify-content: space-between;
  }
  /* 进度条 */
  .progressBar{
    width:225px;
    height:20px;
    background:#FAE5B3;
    border-radius:10px;
    margin:auto 0;
    position: relative;
  }
  /* 激活进度条 */
  .progressBar-Active{
    height:20px;
    background:#FDB918;
    border-radius:10px;
    margin:auto 0;
    z-index: 2;
    position: absolute;
  }
</style>