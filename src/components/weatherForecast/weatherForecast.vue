<template>
  <div class='weatherForecast'>
    <my-header :title="title"></my-header>
    <area-select type='all' :placeholders="placeholders" 
                :level='1' v-model="selected" size="small"
                :data="pcaa">
    </area-select>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header';
// 三级联动
import { AreaSelect } from "vue-area-linkage";
import AreaData from "area-data";
import { pca, pcaa } from "area-data";
  export default{
    name:'weatherForecast',
    components:{myHeader,AreaSelect: AreaSelect},
    computed:{},
    data(){
      return {
        title:'天气预报',
        pca: pca,
        pcaa: pcaa,
        placeholders: ["请选择省份或直辖市", "请选择城市"],
        selected:[],
        send_search_form: {
          orderCode: "",
          itemName: "",
          orderTime: [],
          consigneeName: "",
          state: "",
          selected: []
        }
      }
    },
    watch:{
      'selected'(val){
        if(val){
          this.getWeather(val)
        }
      },
    },
    beforeCreate(){},
    created(){
      
    },
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{  
      getWeather(value){
        let city=''
        if(value){
          value = value[1]
          var index = Object.keys(value) //获取下标
          city = value[index]
        } 
        city = city.replace('市','')
        console.log(city)
        var weatherUrl=`http://wthrcdn.etouch.cn/weather_mini?city=`+city;
        this.api.get(weatherUrl).then(res=>{
          if(res.status=='1000'&&res.desc=='OK'){
            console.log(res.data)
          }
        })
      },
    },
  }
</script>
<style scoped>

</style>