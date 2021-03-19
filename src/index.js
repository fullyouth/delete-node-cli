
const fs = require('fs')
const getArgs = require('./getArgs')
const { deleteFileOrDir } = require('./delete-file')
const log = require('./logger')

const startup = async () => {
  // 获取参数
  const { regStr } = await getArgs()
  // 生成匹配规则
  const reg = new RegExp(regStr)
  // 查找文件
  const curDir = process.cwd()
  const rootFiles = fs.readdirSync(curDir)
  log.success(curDir + '准备操作目录...')
  // 操作文件
  rootFiles.forEach(name => {
    if (reg.test(name)) {
      deleteFileOrDir(name)
    }
  });
}

module.exports = startup




// const inquirer = require("inquirer")
// const chalk = require("chalk");
// const figlet = require("figlet");
// const shell = require("shelljs");

// const fs = require('fs')
// const path = require('path')


// // 查找文件
// const curDir = process.cwd()
// const rootFiles = fs.readdirSync(curDir)

// // 操作文件
// rootFiles.forEach(name => {
//   if (reg.test(name)) {
//     deleteFileOrDir(name)
//   }
// });




