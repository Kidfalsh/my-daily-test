<template>
  <div class='barrageSet'>
    <my-header :title='title'></my-header>
    
    <div class="container">
      <div id="content" class="content"></div>
      <input id="text" type="text">
      <button id="send">发送</button>
      <!-- <div class="content-opt">
          <div id="content-text" class="content-text"></div>
          <div class="content-input">
            <input id="text" type="text">
            <button id="send">发送</button>
          </div>
      </div> -->
    </div>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header'
  export default{
    name:'barrageSet',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'弹幕',
        textList:[]
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      this.queryBarrage()
      this.init() 
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      /**
       * 随机颜色
       */
      randomColor(){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        let color = `rgb(${r},${g},${b})`
        return color 
      },
      /**
       * 设置随机速率
       */
      setRandomSpeed(speed){
        console.log(typeof(speed))
        if(typeof(speed)=='number'){
          return speed * +Math.random().toFixed(2)
        }else{
          this.$toast('Please input a number')
        }
      },
      /**
       * 
       */
      init(){
        class Barrage {
          constructor(id) {
            this.domList = [];
            this.dom = document.querySelector('#' + id);
            if (this.dom.style.position == '' || this.dom.style.position == 'static') {
                this.dom.style.position = 'relative';
            }
            this.dom.style.overflow = 'hidden';
            let rect = this.dom.getBoundingClientRect();
            this.domWidth = rect.right - rect.left;
            this.domHeight = rect.bottom - rect.top;
          }
          shoot(text) {
            let div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = this.domWidth + 'px';
            div.style.top = (this.domHeight - 20) * +Math.random().toFixed(2) + 'px';
            div.style.whiteSpace = 'nowrap';
            div.style.color = '#' + Math.floor(Math.random() * 256).toString(10);
            div.innerText = text;
            this.dom.appendChild(div);
            let roll = (timer) => {
              let now = +new Date();
              roll.last = roll.last || now;
              roll.timer = roll.timer || timer;
              let left = div.offsetLeft;
              let rect = div.getBoundingClientRect();
              if (left < (rect.left - rect.right)) {
                this.dom.removeChild(div);
              } else {
                if (now - roll.last >= roll.timer) {
                  roll.last = now;
                  left -= 3;
                  div.style.left = left + 'px';
                }
                requestAnimationFrame(roll);
              }
            }
            roll(50 * +Math.random().toFixed(2));
          }
        }
        let barage = new Barrage('content');
        function appendList(text) {
          let p = document.createElement('p');
          p.innerText = text;
          //document.querySelector('#content-text').appendChild(p);
        }
        document.querySelector('#send').onclick = () => {
          let text = document.querySelector('#text').value;
          barage.shoot(text);
          appendList(text);
        };
        const textList = this.textList
        textList.forEach((s) => {
          barage.shoot(s);
          appendList(s);
        })
      },
      /**
       * 查询现有的弹幕
       */
      queryBarrage(){
        let params={
          query:'mytext',
          id:'12351'
        }
        this.api.getBarrage(params).then(res=>{
          if(res.code==1&&res.data.length>0){
            this.textList = res.data
          }
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  .barrageSet{
    box-sizing: border-box;
    outline: none;
  }
  p {
    margin: .5em;
    word-break: break-all;
  }
  .container {
    position: relative;
    width: 100%;
    height: 80%;
    margin: auto;
  }
  .content {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
  }
  .content-opt {
    position: relative;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
  }
  .content-text {
    height: calc(100% - 30px);
    margin-bottom: 30px;
    border: 1px solid #ccc;
    overflow: auto;
  }
  .content-input {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
  }
  .content-input input {
    width: 70%;
    padding: 2px;
    border-radius: 5px;
  }
  .content-input button {
    padding: 3px 10px;
    border: none;
    border-radius: 5px;
    background: rgb(90, 154, 214);
  }
</style>