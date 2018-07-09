<template>
  <div class='weatherForecast'>
    <my-header :title="title"></my-header>
    <div class="city">
      <addressmap :area="area" @selected="selected"></addressmap>
    </div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/header/header';
import Addressmap from 'adc-addressmap'
  export default{
    name:'weatherForecast',
    components:{myHeader,Addressmap},
    computed:{},
    data(){
      return {
        title:'天气预报',
        area:[
          {Name: '北京',  ID: '01'},
          {Name: '南京', ID: '0401'},
          {Name: '西湖区', ID: '060105'}
        ]
      }
    },
    beforeCreate(){},
    created(){
      this.getWeather()
    },
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      getWeather(){
        var getCityUrl=`http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json`
        var weatherUrl=`http://wthrcdn.etouch.cn/weather_mini?city=成都`
        this.api.get(weatherUrl).then(res=>{
          console.log(res)
        })
      },
      selected(){}
    },
  }
</script>
<style scoped>

</style>