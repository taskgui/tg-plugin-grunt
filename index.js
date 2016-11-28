var grunt = require('grunt')
var fs = require('fs')

module.exports = function (opts) {
  require(opts.cwd + '/Gruntfile')(grunt)
  
  var all = require(opts.root + '/static/task.json')

  require(opts.cwd + '/gulpfile')

  var _tasks = Object.keys(grunt.task._tasks).sort();
  
  console.log('available grunt task:')
  console.log(_tasks);
  
  all.tasks.grunt = {
    prefix: 'grunt',
    tasks: _tasks
  }

  fs.writeFileSync(opts.root + '/static/task.json',  JSON.stringify(all, null, 4))
}
