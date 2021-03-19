const chalk = require('chalk')

const log = {
  success: (...args) => console.log(chalk.green(...args)),
  warn: (...args) => console.log(chalk.yellow(...args)),
  error: (...args) => console.log(chalk.red(...args))
}

module.exports = log