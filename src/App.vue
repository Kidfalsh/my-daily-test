<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    font-size: 12px;
  }
  #app{
    width:100%;
    height:100vh;
  }
  body{
    box-sizing: border-box;
    margin:0px;
  }
</style>
