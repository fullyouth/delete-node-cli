const inquirer = require('inquirer')

const getArgs = () => {
  const questions = [
    {
      name: "regStr",
      type: "input",
      message: "请输入名称(模糊匹配)",
      validate: function (input) {
        if(!input) {
          return '请输入'
        }
        return true
      }
    }
  ];
  return inquirer.prompt(questions);
};

module.exports = getArgs