<template>
  <div class="uploadFile">
    <my-header :title="title" :isHomePage="false"></my-header>
    <div class="container">
      <div class="content">
        <!-- <img :src="infoSrc" alt="" class="imgShow">
        <input @change="fileImage" type="file" accept="image/*,.pdf" id="" value="" />-->
        <input id="fileInput" type="file" size="65" @change="processFiles" multiple name="file[]" />
        <div id="message">shangchuan</div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import myHeader from "@/components/base/header/header";
export default {
  name: "uploadFile",
  components: { myHeader },
  computed: {},
  data() {
    return {
      title: "文件上传",
      infoSrc: ""
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    fileImage(e) {
      var that = this;
      console.log(e);
      var file = e.target.files[0];
      var imgSize = file.size / 1024;
      if (imgSize > 30000000) {
        alert("请上传大小不要超过3MB的图片");
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(file); // 读出 base64

        reader.onloadend = function() {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          console.log(reader.result);
          that.infoSrc = reader.result;
          // 下面逻辑处理
          /* $.ajax({
                    type:"post",
                    url:"/v1/userSet",
                    async:true,
                    data:{
                        avatar:dataURL,
                        avatar_wx:1,
                        token:token,
                        uid:uid,
                    },
                    success:function(e){
                        that.avatar=dataURL;
                        alert('修改成功');
                        $(".tsk").show().delay(1500).hide(0);
                    }
                }); */
        };
      }
    },
    processFiles(e) {
      let files = e.target.files;
      var message = document.getElementById("message");
      var formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        //取得下一个文件
        alert(i);
        var file = files[i];
        message.innerHTML += "文件名：" + file.name + "<br>";
        message.innerHTML += "文件大小：" + file.size + "字节<br>";
        message.innerHTML += "文件类型：" + file.type + "<br><br>";
        formData.append("file[]", file);
      }
      this.upload(formData);
    },
    /**  */
    upload(data) {
      console.log(data.getAll("file[]"));
      var formData = data;
      $.ajax({
        url: "/upload",
        type: "POST",
        cache: false,
        data: formData,
        processData: false,
        contentType: false
      })
        .done(function(res) {})
        .fail(function(res) {});
    }
  }
};
</script>
<style scoped>
.uploadFile {
  width: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 40px);
}
.container .content {
  height: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.imgShow {
  max-width: 100%;
}
</style>