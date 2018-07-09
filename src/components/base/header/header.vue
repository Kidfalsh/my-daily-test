
<template>
  <div class="header">
    <mt-header :title="title">
      <a @click="toBack" slot="left" v-if="!isHomePage">
        <mt-button icon="back" >返回</mt-button>
      </a>
      <!-- <a slot="right" >注销</a> -->
      <mt-button icon="more" slot="right" ></mt-button>
    </mt-header>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      default: "校园症状监测系统"
    },
    isHomePage:true
  },
  data() {
    return {
      
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    toBack() {
      this.$router.push({
        name:'homePage'
      })
    },
  },
  components: {}
};
</script>

<style  scoped>
  
  .header{
    width:100%;
  }
  .mt-header1{
    position: relative;
    top :0;
  }
</style>
