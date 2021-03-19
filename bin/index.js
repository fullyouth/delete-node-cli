#! /usr/bin/env node
const path = require('path')
const index = path.resolve(__dirname, '../src/index')
const startup = require(index)
startup()