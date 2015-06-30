var fs = require('fs');
var task = require('./task/task');

module.exports = function(grunt) {
    grunt.registerMultiTask('prepareTranslations', "Prepares a translation module build from magento translations", function(src, output) {

        var translations = task.call(this, grunt);

        grunt.file.write(this.data.dest, JSON.stringify(translations));
        console.log('Translation JSON generated.');
        console.log(JSON.stringify(translations));
    });
};
