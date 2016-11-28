
var grunt = require('grunt')

// console.log(grunt.file)
//
require('./Gruntfile')(grunt)

var _tasks = Object.keys(grunt.task._tasks).sort();


console.log(_tasks)

