<template>
  <div class="hello">
    <my-header :title='title' :isHomePage="false"></my-header>
    <h1>{{ msg }}</h1>
    <button class="gotoTest" @click="gotoTest">跳转去test</button>
  </div>
</template>

<script>
  import myHeader from "@/components/header/header.vue";
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to index',
        title:'主页'
      }
    },
    methods:{
      gotoTest(){
        this.$router.push({
          name:'test',
          query:{
            mydata:this.msg
          }
        })
      }
    },
    components:{myHeader}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
