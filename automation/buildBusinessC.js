const config = require('./config.js')
const readline = require('readline');
const rootDir = config.rootDir;
let routeName = '';
let fileHandle = require('./fileHandle');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please input the name of the new business Components? ', cin => {
  routeName = cin;
  let targetDir = rootDir + '/' + cin;
  fileHandle.mkdir(targetDir)
    .then((msg) => {
      console.log(msg)
      let targetFilePath = targetDir + '/' + cin + '.vue'
      const tmpl = `<template>
  <div class='${cin}'></div>
</template>
<script type='text/javascript'>
  export default{
    name:'${cin}',
    components:{},
    computed:{},
    data(){
      return {}
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{},
  }
</script>
<style lang="scss" scoped>

</style>`;
      createFile(targetFilePath, tmpl)
    }, (err) => {
      console.log(err);
    })
  rl.close();
});

function createFile(targetFilePath, content) {
  fileHandle.createFile(targetFilePath, content)
    .then((msg) => {
      console.log(msg)
      addConfigInRoute()
    }, (err) => {
      console.log(err);
    })
}

function addConfigInRoute() {
  addConfigObj1.regex = `// auto add components`
  addConfigObj1.replacement = `import ${routeName} from '@/components/${routeName}/${routeName}'
// auto add components`
  fileHandle.addContent(addConfigObj1);

  addConfigObj2.regex = `// auto add routePath`
  addConfigObj2.replacement =
    `,
        {
          name: '` + routeName + `',
          path: '/index/` + routeName + `',
          component: ` + routeName + `
        }// auto add routePath`;
  fileHandle.addContent(addConfigObj2);
}

let fileUrl = config.fileUrl;
let addConfigObj1 = {
  regex: ``,
  replacement: ``,
  paths: [fileUrl],
  recursive: true,
  silent: false,
}
let addConfigObj2 = {
  regex: ``,
  replacement: ``,
  paths: [fileUrl],
  recursive: true,
  silent: false,
}