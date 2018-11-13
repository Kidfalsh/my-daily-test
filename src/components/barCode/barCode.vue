<template>
  <div class='barCode'>
    <my-header :title='title' style="position:relative;width:100%;"></my-header>
    <div class="main">
      <div class="headerb">
        <div class="header-left">
          <img :src="avatorSrc" alt="">
        </div>
        <div class="header-right">
            <div style="color:#999"> 
                <span style="color:#333;font-size:16px">{{user.xm}}</span> 
                <span style="font-size:13px">{{user.xb}}</span> 
                <span style="font-size:13px">{{user.nl?user.nl:''}}</span> 
            </div>
            <div class="header-main-body">
            <div>
                <span class="icon">
                <icon style="color:#333;" name="shenfenzheng" :scale="2"></icon>
                </span>
                <span>{{user.sfzh}}</span>
            </div>
            <div>
                <span class="icon">
                <icon style="color:#333" name="dianhua" :scale="2"></icon>
                </span>
                <span>{{user.lxdh}}</span>
            </div>
        <div style="display:flex;flex-wrap:nowrap;overflow:hidden">
                <span class="icon">
                <icon style="color:#333" name="dizhi" :scale="2"></icon>
                </span>
                <span>{{user.jtdz}}</span>
            </div>
            </div>
        </div>
      </div>
      <div class="contain">
          <div class="contain-body">
              <svg id="bar"></svg> 
          </div>
      </div>
      <div class="footer">
          <p>就诊时出示以上专有就诊码</p>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
  export default{
    name:'barCode',
    components:{myHeader},
    computed:{},
    data(){
      return {
        avatorSrc:'./static/img/man.svg',
        title:'barCode',
        user:{
          jtdz:"123",
          lxdh:'15680543404',
          nl:'18',
          sfzh:"510122200011017124",
          xb:"女",
          xm:"许斯琪"
        }
      }
    },
    beforeCreate(){},
    created(){
      this.$store.commit('setPageTitle','就诊码')
    },
    beforeMount(){},
    mounted(){
      this.initBarCode()
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      initBarCode(){
        JsBarcode("#bar",this.user.sfzh,{
          height:140, //高度
          background:'#f4f4f4',
          fontSize:15,
          marginTop:20,
          //format: "CODE39",//选择要使用的条形码类型
          //width:2,//设置条之间的宽度
          displayValue:true,//是否在条形码下方显示文字
          //text:"万达信息技术支持",//覆盖显示的文本
          //fontOptions:"bold italic",//使文字加粗体或变斜体
          //font:"fantasy",//设置文本的字体
          textAlign:"left",//设置文本的水平对齐方式
          textPosition:"bottom",//设置文本的垂直位置
          textMargin:5,//设置条形码和文本之间的间距
          //fontSize:15,//设置文本的大小
          //background:"#eee",//设置条形码的背景
          //lineColor:"#2196f3",//设置条和文本的颜色。
          //margin:15//设置条形码周围的空白边距
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  .barCode{
    width:100%;
    height:calc(100% - 40px);
    background:rgba(0,0,0,0.75);
    position:relative;
  }
  .main{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    width: 350px;
    height: 385px;
    border-radius: 10px;
    overflow: hidden;
  }
  .headerb {
    display: flex;
    height: 100px;
    background: #fff;
  }
  .header-left {
    margin-top: 15px;
    margin-left: 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #b2e1be;
    overflow: hidden;
  }
  .header-left img{
    height: 70px;
    width: 60px;
  }
  .header-right {
    flex: 1;
    margin-top: 15px;
    margin-left: 15px;
  }
  .header-main-body {
    /* display: flex; */
    font-size: 0;
    color: #999;
  }
  .header-main-body > div {
    margin-top: 2px;
    height: 20px;
    line-height: 20px;
    width: 100%;
  }
  .header-main-body span {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    vertical-align: top;
    font-size: 13px;
  }
  .header-main-body .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .contain {
    height: 200px;
    width: 300px;
    background: #f4f4f4;
    margin: 10px auto;
  }
  .contain-body {
    width: 280px;
    height: 200px;
    margin: 10px auto;
  }
  .contain-body svg {
    margin-left: -5px;
  }
  .footer {
    text-align: center;
    color: #999;
    margin-top: 25px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>