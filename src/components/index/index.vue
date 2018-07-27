<template>
  <div class="index-wrap">
    <!-- <my-header :title='title' :isHomePage="false"></my-header> -->
    <div class="child-router-view">
      <router-view/>
    </div>
    <!-- <button class="gotoTest" @click="gotoTest">跳转去test</button> -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar";
  export default {
    name:"index",
    data () {
      return {
      }
    },
    methods:{
    },
    components:{navBar}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap {
    height: 100%;
    width: 100%;
  }
  .child-router-view {
    width: 100%;
    height: calc(100% - 75px);
    overflow-y: auto;
  }
  
</style>
