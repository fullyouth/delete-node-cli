const path = require('path')
const fs = require('fs')

function isDirectory(url) {
  return fs.statSync(url).isDirectory()
}

function deleteFileOrDir(url, callback) {
  if (fs.existsSync(url)) {  //判断给定的路径是否存在
    const isDir = isDirectory(url)
    if (isDir) {
      let files = fs.readdirSync(url);   //返回文件和子目录的数组
      files.forEach(function (file) {
        let curPath = path.join(url, file);
        deleteFileOrDir(curPath);
      });
      // 删除目录
      fs.rmdirSync(url);
      callback()
      // if (rootFiles.includes(url)) {
      //   console.log(url + '--目录删除成功');
      // }
    } else {
      //删除文件
      fs.unlinkSync(url);
      callback()
      // if (rootFiles.includes(url)) {
      //   console.log(url + '--文件删除成功');
      // }
    }

  } else {
    console.log("给定的路径不存在！");
  }
}

exports.deleteFileOrDir = deleteFileOrDir

