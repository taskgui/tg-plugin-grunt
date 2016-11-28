var grunt = require('grunt')
var fs = require('fs')

module.exports = function (opts) {
  var all = require(opts.root + '/static/task.json')
  
  if (fs.existsSync(opts.cwd + '/Gruntfile.js')) {
    require(opts.cwd + '/Gruntfile')(grunt)

    var _tasks = Object.keys(grunt.task._tasks).sort();
  
    console.log('available grunt task:')
    console.log(_tasks);
  
    all.tasks.grunt = {
      prefix: 'grunt',
      tasks: _tasks
    }

    fs.writeFileSync(opts.root + '/static/task.json',  JSON.stringify(all, null, 4))
  } else {
    delete all.tasks.grunt
    
    fs.writeFileSync(opts.root + '/static/task.json',  JSON.stringify(all, null, 4))
  }
}
