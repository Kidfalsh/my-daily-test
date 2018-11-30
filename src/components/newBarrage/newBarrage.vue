<template>
    <div class="main">
      <my-header :title='"弹幕"'></my-header>
        <canvas ref="hiddenCanvas" width="0" height="0" style="display: none"></canvas>
        <div class="barrage-area">
            <canvas id="canvas" ref="canvas" :width="cWidth" :height="cHeight"
                    :style="{'width': cWidth/2 + 'px',
                'height': cHeight/2 + 'px', 'border': '1px solid #eee'}">
            </canvas>
        </div>
        <div class="bottom">
            <mt-switch
                v-model="dmStatus">
            </mt-switch>
            <div class="color-setting">
                <span class="placeholder">#</span>
                <input type="text" placeholder="设置颜色" v-model="color">
                <span class="color" :style="{'background': '#' + color}"></span>
            </div>
            <div class="input-wrap">
                <input type="text" @keyup.enter="sent" v-model="dmInput" maxlength="20">
                <button type="button" @click="sent">发射</button>
            </div>
        </div>
    </div>
</template>

<script>
import myHeader from '@/components/base/header/header'
export default {
    name: 'Main',
    data () {
        return {
            dmArr: [], // 缓存弹幕数据的数组
            dmInput: '',
            color: '',
            dmStatus: true,
            cWidth: 0,
            cHeight: 0,
            timer: null,
            canvas: null,
            speed: 8,
            gap: 80 // 弹幕间隙
        };
    },
    components:{myHeader},
    watch: {
      dmStatus: function (val) {
        if (val) {
          this.start();
        } else {
          this.stop();
        }
      }
    },
    methods: {
      start () {
        this.timer = setInterval(() => {
          this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
          this.ctx.save();
          this.ctx.font = '30px Microsoft YaHei';
          if (!this.dmArr.length) this.stop();
          for (let i = 0, len = this.dmArr.length; i < len; i++) {
            let dm = this.dmArr[i];
            let overRange = dm.text && -this.ctx.measureText(dm.text).width;
            dm.x -= dm.speed;
            if (dm.x < overRange) {
              this.dmArr.splice(i, 1);
              continue;
            }
            this.ctx.fillStyle = `#${dm.color}`;
            this.ctx.fillText(dm.text, dm.x, dm.y);
          }
          this.ctx.restore();
        }, 20);
      },
      getY () {
        let range = Math.floor(this.cHeight / this.gap); // 跑道数量
        return Math.floor(Math.random() * range + 1) * this.gap;
      },
      getSpeed () {
        // 8-12
        return this.speed;
        // return Math.floor(Math.random() * 5) + 8;
      },
      getColor () {
        return `${Math.floor(Math.random() * 16777215).toString(16)}`;
      },
      pushDm (text, color) {
        let y = this.getY(); // 先确定跑道
        let x = this.cWidth; // 初始位置
        let delayWidth = 0;
        for (let i = 0, len = this.dmArr.length; i < len; i++) {
          let dm = this.dmArr[i];
          if (y === dm.y) { // 如果是同跑道,则往后排
            delayWidth += Math.floor(this.$refs.hiddenCanvas.getContext('2d').measureText(dm.text).width * 4 + 50);
          }
        }
        this.dmArr.push({
          text: text,
          x: x + delayWidth,
          y: y,
          speed: this.getSpeed(),
          color: color || this.getColor()
        });
      },
      sent () {
        if (!this.dmInput) {
          return;
        } 
        this.stop();
        this.pushDm(this.dmInput, this.color);
        this.start();
        this.dmInput = '';
      },
      stop () {
        clearInterval(this.timer);
        this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
      },
      initData () {
        for (let i=0;i<30;i++){
          this.pushDm(`It's barrage ${i}`);
        }
      }
    },
    destroyed () {
      this.stop();
    },
    mounted () {
      this.cWidth = document.documentElement.clientWidth * window.devicePixelRatio;
      this.cHeight = (document.documentElement.clientHeight - 100) * window.devicePixelRatio;
      this.ctx = this.$refs.canvas.getContext('2d');
      this.initData();
      this.start();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    //@green: #3eaf7c;
    .barrage-area {
      width: 100vw;
      height: calc(100vh - 90px);
    }
    .main {
      .bottom {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 2;
        width: 100%;
        height: 50px;
        background: #3eaf7c;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .color-setting {
          margin:0 10px;
          position: relative;
          input {
            -webkit-appearance: none;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            border: none;
            outline: none;
            padding: 0 15px 0 18px;
            font-size: 14px;
          }
          .placeholder {
            position: absolute;
            left: 5px;
            top: 5px;
            z-index: 2;
          }
          .color {
            position: absolute;
            right: 5px;
            top: 9px;
            z-index: 2;
            width: 13px;
            height: 13px;
            border-radius: 100%;
          }
        }
        .input-wrap {
          flex: 1;
          height: 36px;
          border-radius: 50px;
          background: #256b4b;
          display: flex;
          align-items: center;
          input[type=text] {
            -webkit-appearance: none;
            height: 100%;
            line-height: 100%;
            border: none;
            outline: none;
            padding: 0 16px 0 30px;
            font-size: 16px;
            flex: 1;
            background: transparent;
          }
          button {
            width: 80px;
            border-radius: 0 50px 50px 0;
            height: 100%;
            border: none;
            padding: 0;
            font-size: 16px;
            background: #2a6148;
            color: #fff;
          }
        }
      }
    }
</style>