<template>
  <div class='payOnline'>
    <my-header :title="title" :isHomePage="false"></my-header>
  </div>
</template>
<script type='text/javascript'>
import myHeader from '@/components/base/header/header';
  export default{
    name:'payOnline',
    components:{myHeader},
    computed:{},
    data(){
      return {
        title:'H5支付',
        code:'',
        appIdVal:"",    //公众号id，由商户传入  
        timeStampVal:"",  //时间戳，自1970年以来的秒数  
        nonceStrVal:"", //随机串    
        packageVal:"", //订单详情扩展字符串
        signTypeVal:"", //微信签名方式：      
        paySignVal:"", //微信签名 
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
    methods:{
      /**
        step1 拿到code 并传给后台
       */
      getCode() {
        this.api.GetAppId({}).then(
          res => {
            if (res.code === "1") {
              if (res.data.length && res.data[0].appid) {
                this.requestCode(res.data[0].appid);
              }
            } else {
              this.$toast("系统异常");
            }
          },
          err => {}
        )
      },
      requestCode(appid){
        let appId = appid  //公众号id
        let redirect_uri = encodeURIComponent('') //成功以后返回的url
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo#wechat_redirect"
      },
      /**
       * 获取url上附带的code参数 检查code
       * 无 --重新请求并获取code
       * 有 --直接登录
       */
      checkCode() {
        let params = getUrlParams(location.href.split("?")[1]);
        if (params.code) {
          this.code = params.code;
          this.getInfoByCode();
        } else {
          this.getCode();
        }
      },
      /**
       * 把code给后台 会返回参数
       * 
       */
      getInfoByCode(){
        let params={
          code:this.code
        }
        this.api.getInfoByCode(params).then(res=>{
          if(res.code==1){
            console.log(res)
            this.appIdVal = res.appId;
            this.timeStampVal = res.timeStamp;
            this.nonceStrVal = res.nonceStr;
            this.packageVal = res.package;
            this.signTypeVal = res.signType;
            this.paySignVal = res.paySign;
            //得到参数 发送请求支付
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
              }
            }else{
              this.onBridgeReady()
            }
          }
        })
      },
      /**
       * 发送支付请求
       */
      onBridgeReady(){
        WeixinJSBridge.invok(
          'getBrandWCPayRequest',{
            "appid" :this.appIdVal,
            "timeStamp":this.timeStampVal, //时间戳，自1970年以来的秒数     
             "nonceStr":this.nonceStrVal,   //随机串     
             "package":this.packageVal,    //订单详情扩展字符串
             "signType":this.signTypeVal,   //微信签名方式：     
             "paySign":this.paySignVal     //微信签名 
          },
          (res=>{
            if(res.err_msg=='get_brand_wcpay_request:ok'){
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            }
          })
        )
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>