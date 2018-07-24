<template>
  <div class='wave'>
    <my-header :title="title"></my-header>
    <div class="button">
      12315
      <div @click="reppleClick" class="cov-ripple" :class="repple_button.animate&&'animate'">
      </div>
      <canvas id="myCanvas" width="375" height="500">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
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
        },
        dataInfo:{
          waveWidth:375,
          offset:0,
          waveHeight:8,
          waveCount:7,
          startX:-100,
          startY:204,
          progress: 0,
          progressStep:1,
        },
        img:null,
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      this.$store.commit('setPageTitle','波浪效果') //设置页面标题
      //this.$store.commit('systemMessage','欢迎来到波浪效果页面！')
      this.init()
      this.tick()
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
      },
      init(){
        this.tick()
       
      },
      tick(){
        var offset = this.dataInfo.offset,
            progress =this.dataInfo.progress,
            progressStep = this.dataInfo.progressStep,
            startX = this.dataInfo.startX,
            startY = this.dataInfo.startY,
            waveWidth = this.dataInfo.waveWidth,
            waveHeight = this.dataInfo.waveHeight,
            waveCount = this.dataInfo.waveCount,
            d2 = waveWidth/waveCount,
            d = d2 / 2,
            hd = d / 2,
            c = document.getElementById("myCanvas"),
            ctx = c.getContext("2d");
        this.img = new Image();
        ctx.fillStyle = "#4BF6EE";
        offset -= 5;
        progress += progressStep;
        if (progress > 220 || progress < 0) progressStep *= -1;
        if (-1 * offset === d2) offset = 0;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        var offsetY = startY - progress;
        ctx.moveTo(startX - offset, offsetY);
        for (var i = 0; i < waveCount; i++) {
          var dx = i * d2;
          var offsetX = dx + startX - offset;
          ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
          ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
        }
        ctx.lineTo(startX + waveWidth, 300);
        ctx.lineTo(startX, 300);
        ctx.fill();
        //画布上已有的内容只会在它和新图形重叠的地方保留。新图形绘制于内容之后。
        ctx.globalCompositeOperation = "destination-atop";
        ctx.drawImage(this.img, 0, -1)
        requestAnimationFrame(this.tick);
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