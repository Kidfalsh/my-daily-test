<template>
  <div class='navbar'>
    <router-link tag="div" class="nav-item" to="/index/homePage">
      <icon name='shouye'></icon>
      <span class="nav-link">首页</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/index/newList">  
      <icon name='xinwen'></icon>
      <span class="nav-link">新闻中心</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/index/weatherForecast" >
      <icon name='tianqi' style=""></icon>
      <!--  <b v-if="isFile"></b> -->
      <span class="nav-link">天气预报</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/index/personCenter">
      <icon name='geren'></icon>
      <!-- <b v-if="isPersonal"></b> -->
      <span class="nav-link">个人中心</span>
    </router-link>
  </div>
</template>
<script type='text/javascript'>
  export default{
    name:'navbar',
    components:{},
    computed:{},
    data(){
      return {}
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
  .navbar{
    display: flex;
    margin:auto auto;
    background-color: #fcfcfc;
    height: 65px;
    background: #f3f3f3;
    justify-content: space-between;
  }
  .nav-item {
    position: relative;
    width:25%;
    height:100%;
    text-align:center;
    margin-top:10px;
  }
  .svg-icon{
    width:30px;height:30px;
    color:#999;
  }
  .nav-link{
    
    font-size:12px;
  }
  .nav-item.router-link-active  .nav-link{
    color:#5a8bff;
    font-size:14px;
  }
  .nav-item.router-link-active  .svg-icon{
    /* background-color:#5a8bff; */
    /* width:35px;height:35px; */
    transform: scale(1.2);
  }
  span{
    display: block;
    font-size: 20px;
    color:#999;
    height: auto;
    line-height: 20px;
    -webkit-text-size-adjust:none;
  }
  b{
    display:inline-block;
    width:16px;
    height:16px;
    border:none;
    border-radius:50%;background-color:red;
    position:absolute;
    top:-4px;
    left:calc(50% + 16px);
  }

</style>