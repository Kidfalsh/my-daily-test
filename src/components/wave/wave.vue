<template>
  <div class='wave'>
    <my-header :title="title"></my-header>
    <div class="button">
      12315
      <div @click="reppleClick" class="cov-ripple" :class="repple_button.animate&&'animate'">
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header';
  export default{
    name:'wave',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'波浪效果',
        repple_button:{
          animate:false
        }
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      this.$store.commit('setPageTitle','波浪效果')
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      reppleClick (e) {
        this.repple_button.animate = true
        let button = e.target
        let ripple = document.querySelector('.cov-ripple')
        if (ripple) {
          //水波得是一个直径大于button最长边的正圆
          let d = Math.max(button.offsetHeight, button.offsetWidth)
          //设置它中心在鼠标点击的位置
          let x = e.layerX - ripple.offsetWidth / 2
          let y = e.layerY - ripple.offsetHeight / 2
          ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d + 'px; top: ' + y + 'px; left: ' + x + 'px;')
        }
        this.$nextTick(() => {
          //在动画结束后移除animate
          setTimeout(() => {
            this.repple_button.animate = false
          }, 660)
        })
      }
    },
  }
</script>
<style  scoped>
  /*
   *水波图点击效果css 
   */
  .button {
    width:50%;
    height:40px;
    line-height:40px;
    text-align: center;
    background: #eee;
    border:1px solid transparent;
    outline: none;
    position:relative;
  } 
  .cov-ripple{
    position:absolute;
    background: #999;
    top:0;
    left:0;
    bottom:0;
    right:0;
  }
  .animate {
    animation: ripple 0.65s linear;
  }
  @keyframes ripple {
    100% {opacity: 0; transform: scale(2.5);}
  }
</style>