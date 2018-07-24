
<template>
  <div class="canvas-wrap">
    <my-header :title="title"></my-header>
    <div ref="box" style="width:100%;height:calc(100% - 40px);background:#dcdcdc;z-index:999;padding-top:5px;box-sizing:border-box">
      <canvas id="canvas"></canvas>
      <div id="controller">
          <div id="clear_btn" @click="clearCanvas" class="op_btn">清 除</div>
          <div id="confirm_btn" @click="confirm" class="op_btn">确 认</div>
          <!-- <div id="cancle_btn" @click="cancle" class="op_btn">取 消</div> -->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import myHeader from '@/components/base/header/header'
let canvasWidth, canvasHeight;
let strokeColor = "black";
let lastLoc = { x: 0, y: 0 };
let lastTimestamp = 0;
let lastLineWidth = -1;
let maxLineWidth = 30;
let minLineWidth = 1;
let maxStrokeV = 2;
let minStrokeV = 0.2;
export default {
  props: {
    getImageData: {
      type: Function
    },
    signatureData:{
      type: String
    }
  },
  data() {
    return {
      title:'手写图片',
      isShow:false,
      isMouseDown: false,
      src: ""
    };
  },
  created() {
    //window.screen.orientation.lock("landscape");
  },
  mounted() {
    this.init();
  },
  methods: {
    confirm() {
      //this.context.rotate(-90*Math.PI/180)
      var dataURL = this.canvas.toDataURL("image/jpeg", 0.5);
      this.$emit("confirm", dataURL,this.isShow);
      //this.$store.commit("SET_CALLBACK", null);
      //window.screen.orientation.lock("portrait");
    },
    cancle() {
      this.$emit("cancle", "cancle");
      //this.$store.commit("SET_CALLBACK", null);
      //window.screen.orientation.lock("portrait");
    },
    dramGrid() {
      this.context.beginPath();
      this.context.moveTo(0, 0);
      this.context.lineTo(canvasWidth / 2, canvasHeight);
      this.context.moveTo(canvasWidth / 2, 0);
      this.context.lineTo(0, canvasHeight);
      this.context.moveTo(canvasWidth / 2, 0);
      this.context.lineTo(canvasWidth, canvasHeight);
      this.context.moveTo(canvasWidth, 0);
      this.context.lineTo(canvasWidth / 2, canvasHeight);
      this.context.moveTo(canvasWidth / 4, 0);
      this.context.lineTo(canvasWidth / 4, canvasHeight);
      this.context.moveTo(canvasWidth * 3 / 4, 0);
      this.context.lineTo(canvasWidth * 3 / 4, canvasHeight);
      this.context.moveTo(canvasWidth / 2, 0);
      this.context.lineTo(canvasWidth / 2, canvasHeight);
      this.context.moveTo(0, canvasHeight / 2);
      this.context.lineTo(canvasWidth, canvasHeight / 2);
      this.context.lineWidth = 1;
      this.context.strokeStyle = "#ccc";
      this.context.stroke();
    },
    clearCanvas() {
      this.isShow=false; //点击清除 置为false
      this.context.clearRect(0, 0, canvasWidth, canvasHeight);
      // this.dramGrid();
      this.context.fillStyle = "#fff";
      this.context.fillRect(0, 0, canvasWidth, canvasHeight);
    },
    bindEvents() {
      this.canvas.addEventListener("touchstart", e => {
        e.preventDefault();
        let touch = e.touches[0];
        this.beginStroke({ x: touch.pageX, y: touch.pageY });
      });
      this.canvas.addEventListener("touchmove", e => {
        e.preventDefault();
        this.isShow=true 
        if (this.isMouseDown) {
          let touch = e.touches[0];
          this.moveStroke({ x: touch.pageX, y: touch.pageY });
        }
      });
      this.canvas.addEventListener("touchend", e => {
        e.preventDefault();
        this.endStroke();
      });
    },
    init() {
      // if (this.$refs.box.scrollWidth < this.$refs.box.scrollHeight) {
      //   canvasWidth = this.$refs.box.scrollHeight - 50;  // 10
      //   canvasHeight = this.$refs.box.scrollWidth; // 125
      // } else {
      //   canvasWidth = this.$refs.box.scrollWidth - 50;
      //   canvasHeight = this.$refs.box.scrollHeight;
      // }
      canvasWidth = this.$refs.box.scrollWidth - 10;
      canvasHeight = this.$refs.box.scrollHeight -60;
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext("2d");
      this.canvas = canvas;
      this.context = context;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      this.bindEvents();
      //判断有图片base64 就渲染到画布上
      if(this.signatureData!=""){
        this.isShow=true
        const qrCode = this.signatureData;
        const qrCodeImg = new Image();
        qrCodeImg.src = qrCode;
        context.drawImage(qrCodeImg, 0, 0,canvasWidth, canvasHeight);
      }
      
    },
    beginStroke(point) {
      this.isMouseDown = true;
      lastLoc = this.windowToCanvas(point.x, point.y);
      lastTimestamp = new Date().getTime();
    },
    moveStroke(point) {
      let curLoc = this.windowToCanvas(point.x, point.y);
      let curTimestamp = new Date().getTime();
      let s = this.calcDistance(curLoc, lastLoc);
      let t = curTimestamp - lastTimestamp;
      let lineWidth = this.calcLineWidth(t, s);
      this.context.beginPath();
      this.context.moveTo(lastLoc.x, lastLoc.y);
      this.context.lineTo(curLoc.x, curLoc.y);

      this.context.strokeStyle = strokeColor;
      this.context.lineWidth = lineWidth;
      this.context.lineCap = "round";
      this.context.lineJoin = "round";
      this.context.stroke();

      lastLoc = curLoc;
      lastTimestamp = curTimestamp;
      lastLineWidth = lineWidth;
    },
    endStroke() {
      this.isMouseDown = false;
    },
    calcLineWidth(t, s) {
      let v = s / t;
      let resultLineWidth;
      if (v <= minStrokeV) resultLineWidth = maxLineWidth;
      else if (v >= maxStrokeV) resultLineWidth = minLineWidth;
      else {
        resultLineWidth =
          maxLineWidth -
          (v - minStrokeV) /
            (maxStrokeV - minStrokeV) *
            (maxLineWidth - minLineWidth);
      }

      if (lastLineWidth == -1) return resultLineWidth;

      return resultLineWidth * 1 / 5 + lastLineWidth * 3 / 5;
    },
    calcDistance(loc1, loc2) {
      return Math.sqrt(
        (loc1.x - loc2.x) * (loc1.x - loc2.x) +
          (loc1.y - loc2.y) * (loc1.y - loc2.y)
      );
    },
    windowToCanvas(x, y) {
      let box = this.canvas.getBoundingClientRect();
      return { x: Math.round(x - box.left), y: Math.round(y - box.top) };
    }
  },
  components: {myHeader},
  beforeDestroy() {
    //this.$store.commit("setCallBack", null);
    //window.screen.orientation.lock("portrait");
  }
};
</script>

<style  scoped>
.canvas-wrap {
  overflow: scroll;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
#canvas {
  display: block;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
}
#controller {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.op_btn {
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
  background-color: white;
  font-family: Microsoft Yahei, Arial;
}
#confirm_btn {
  background: #5a8bff;
}
.search-box {
  display: flex;
  width: 100%;
  height: 24px;
  padding-top: 35px;
  padding-bottom: 10px;
  line-height: 24px;
  background: -webkit-linear-gradient(left, #406fdd, #5a8bff);
  
}
.search-box .left-icon {
  width: 40px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
}
</style>
