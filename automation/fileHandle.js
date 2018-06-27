var fs = require('fs');
var path = require('path');
var replace = require("replace");
function mkdir(targetDir) {
  let promise = new Promise((resolve, reject) => {
    fs.mkdir(targetDir, err => {

      if (err) {
        reject(err)
      }
      resolve('文件夹' + targetDir + '创建夹成功！');
    })
  })
  return promise;
}
function createFile(path, content) {
  let promise = new Promise((resolve, reject) => {
    fs.writeFile(path, content, err => {
      if (err) {
        reject(err)
      }
      resolve('文件' + path + '创建成功！');
    })
  })
  return promise;
}

function addContent(config) {
  replace(config)
}
module.exports = {
  mkdir,
  createFile,
  addContent
}
