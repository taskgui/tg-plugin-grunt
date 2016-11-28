module.exports = function(grunt) {

  grunt.initConfig({
  
  });
  
  grunt.registerTask('default', 'My "default" task description.', function() {
    grunt.log.writeln('Currently running the "default" task.');
  });
  
  grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ", no args");
    } else {
      grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
    }
  }); 
};