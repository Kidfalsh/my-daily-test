<template>   	
  <div class="notfound" style="background:#0186a7;">
    <div class="error_new_bg">
      <div class="textNo">404</div>
      <div class="fl error_new_left"><img style="width:100%;" src="/static/img/error.png"></div>
    </div>
  </div>
</template>
<script type='text/javascript'>
  export default{
    name:'404',
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
<style lang="scss" scoped>
.notfound{margin:0px;height:100%; font-family:"微软雅黑";}
.error_new_bg { 
  height: 100%; 
  width: 100%; 
}
.error_new_left { width: 100%; text-align:center; margin-top:50%;animation: desc_link ease-in-out 1.5s infinite }
@keyframes desc_link { 0% {
	-webkit-transform:translateY(0);
	-ms-transform:translateY(0);
	-moz-transform:translateY(0);
	transform:translateY(0);
	}
	50% {
		-webkit-transform:translateY(1em);
		-ms-transform:translateY(1em);
		-moz-transform:translateY(1em);
		transform:translateY(1em);
	}
	100% {
		-webkit-transform:translateY(0);
		-ms-transform:translateY(0);
		-moz-transform:translateY(0);
		transform:translateY(0);
	}
}


</style>