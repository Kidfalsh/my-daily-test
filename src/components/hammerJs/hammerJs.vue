<template>
  <div class='hammerJs'>
    <my-header :title="title"></my-header>
    <video ref="video" id="video" width="100%"  height="200"  src="http://jdvodpweqq93l.vod.126.net/jdvodpweqq93l/XbfMP7Rs_2155963180_shd.mp4">
    </video>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header'
  export default{
    name:'hammerJs',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'股市'
      }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
      //this.init()
      
      this.$refs.video.play()
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      init(){
        let param={
          url:'http://jdvodpweqq93l.vod.126.net/jdvodpweqq93l/XbfMP7Rs_2155963180_shd.mp4'
        }
        this.api.getVideo().then(res=>{
          console.log(res)
        })
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>