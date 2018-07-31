<template>
  <div class='gadMap'>
    <my-header :title="title"></my-header>
     <div id="near">
      <div id="amap-main">
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
  import myHeader from '@/components/base/header/header'
  import { lazyAMapApiLoaderInstance } from 'vue-amap';
  export default{
    name:'gadMap',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'高德のmap',
        longitude:'',//经度
        dimension:'',//纬度
      }
    },
    beforeCreate(){},
    created(){
      
    },
    beforeMount(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          function (position) {  
            var longitude = position.coords.longitude;  
            var latitude = position.coords.latitude;  
            this.longitude = longitude
            this.dimension = latitude
          },
          function (e) {
            console.log(e)
            var msg = e.code;
            var dd = e.message;
          }
        )
      }
    },
    mounted(){
      var longitude = this.longitude||104.061 ,dimension=this.dimension||30.671;
      lazyAMapApiLoaderInstance.load().then(() => {
        //this.map = new AMap.Map('amap-main', {center: new AMap.LngLat(104.06,30.67)});
        
        var map = new AMap.Map('amap-main', {
          resizeEnable: true,
          zoom:11,
          center: [longitude,dimension],
          viewMode:'3D',//使用3D视图
          layers: [//使用多个图层
            new AMap.TileLayer.Satellite(),
            new AMap.TileLayer.RoadNet()
          ],
        });
        //实时路况图层
        var trafficLayer = new AMap.TileLayer.Traffic({
            zIndex: 10
        });
        map.add(trafficLayer);//添加图层到地图
        //点标记与矢量图形
        var marker = new AMap.Marker({
          position:[longitude,dimension]//位置
        })
        map.add(marker);//添加到地图
        map.remove(marker) //移除
        //绘制圆Circle、折线 Polyline、多边形 Polygon、椭圆 Ellipse、矩形 Rectangle、
        //贝瑟尔曲线 BesizerCurve等矢量图形的能力
        var lineArr = [
          [104.061,30.671],
          [104.062,30.672],
          [104.063,30.673],
          [104.064,30.674]
        ];
        var polyline = new AMap.Polyline({
          path: lineArr,          //设置线覆盖物路径
          strokeColor: "#3366FF", //线颜色
          strokeWeight: 5,        //线宽
          strokeStyle: "solid",   //线样式
        });
        map.add(polyline);
        //事件功能与信息窗体
        var infoWindow = new AMap.InfoWindow({ //创建信息窗体
          isCustom: true,  //使用自定义窗体
          content:'<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
          //offset: new AMap.Pixel(16, -45)
        });
        var onMarkerClick  =  function(e) {
          infoWindow.open(map, e.target.getPosition());//打开信息窗体
          //e.target就是被点击的Marker
        } 
        var marker = new AMap.Marker({
          position: [longitude,dimension]
        })
        map.add(marker);
        marker.on('click',onMarkerClick);//绑定click事件
      });
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{},
  }
</script>
<style lang="scss" scoped>
  #near{
    #amap-main{
      width:100%;
      height:300px;
    } 
  }
</style>