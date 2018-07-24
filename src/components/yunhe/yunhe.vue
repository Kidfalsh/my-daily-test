<template>
  <div class='yunhe'>
    <my-header :title="title" class="header123"></my-header>
    <div class="all-contain">
      <div class="mes" :class="isMove&&'animate'">
        <div class="arc" :class="isMove&&'animate'"></div>  
      </div> 
      <div class="container" ref="container" >
        <div class="list-wrap">
          <div class="list" v-for="item in tempList" @touchmove="touchMove" @touchstart="touchStart" @touchend="touchEnd">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
  export default{
    name:'yunhe',
    components:{myHeader},
    computed:{},
    watch:{
      top(val){
        console.log(val)
        if(val<90&&val>40){
          this.isMove=true
        }else if(val==90){
          this.idMove = true
        }else{
          this.isMove = false
        }
      }
    },
    data(){
      return {
        title:"yunhe",
        tempList:[
          {value:1,name:'first'},
          {value:2,name:'2nd'},
          {value:3,name:'3rd'},
          {value:4,name:'4st'},
          {value:1,name:'first'},
          {value:2,name:'2nd'},
          {value:3,name:'3rd'},
          {value:4,name:'4st'},
          {value:1,name:'first'},
          {value:2,name:'2nd'},
          {value:3,name:'3rd'},
          {value:4,name:'4st'},
          {value:1,name:'first'},
          {value:2,name:'2nd'},
          {value:3,name:'3rd'},
          {value:4,name:'4st'},
          {value:1,name:'first'},
          {value:2,name:'2nd'},
          {value:3,name:'3rd'},
          {value:4,name:'4st'},
          {value:1,name:'first'},
          {value:2,name:'2nd'},
          {value:3,name:'3rd'},
          {value:4,name:'4st'}
        ],
        top:'',
        isMove:false,
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      touchStart(){
       
      },
      touchMove(){
        this.top= this.$refs.container.getBoundingClientRect().top
      },
      touchEnd(){
        
      }
    },
  }
</script>
<style  scoped>
  .yunhe{
    padding:0;
    margin:0;
    width:100%;
    height:100%;  
  }
  .animate {
    width:100%;
    height:0px !important;
    transition: all 2s  linear ;
    -webkit-transition: all 2s  linear ;
  }
  .all-contain{
    width:100%;
    max-height:calc(100% - 40px);
    overflow-y:scroll;
  }
  .mes{
    height:50px;
    width:100%; 
  }
  .mes .arc{
    background-color: red;
    height:100px;
    width:100%;
    border-radius: 50%;
    position:relative;top:-50px;
  }
  .container{
    width:100%;
    overflow: hidden;
    
    max-height:calc(100% - 90px);
    height:auto;
    overflow-y: scroll;
  }
  .list-wrap{
    display:flex;
    width:100%;
    flex-wrap: wrap;
  }
  .list{
    width:45%;
    margin:2.5%;
    height:100px;
    box-sizing: border-box;
    padding: 10px 15px;
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 0 0 10px  rgba(0,0,0,0.1);
  }
</style>