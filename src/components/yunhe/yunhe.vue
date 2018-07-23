<template>
  <div class='yunhe'>
    <div class="header"></div>
    <div class="mes">
      <div class="arc">
        
      </div>  
    </div> 
    <div class="container">
      <div class="list-wrap">
        <div class="list" v-for="item in tempList">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
  export default{
    name:'yunhe',
    components:{},
    computed:{},
    data(){
      return {
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
          {value:4,name:'4st'}
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
    methods:{},
  }
</script>
<style  scoped>
  .header{
    width:100%;
    height:50px;
    background-color: red;
  }
  .mes{
    height:50px;
    width:100%;
    overflow: hidden;
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
    height:auto;
    overflow: hidden;
  }
  .list-wrap{
    display:flex;
    width:100%;
    flex-wrap: wrap;
    max-height:calc(100% - 100px);
    overflow-y: scroll;  
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