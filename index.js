var fs = require('fs');
var csv2array = require('csv2array');
var each = require('component-each');

module.exports = function(grunt) {
    grunt.registerMultiTask('prepareTranslations', "Prepares a translation module build from magento translations", function(src, output) {
        var translations = {};

        each(this.data.languages, function(magentoLanguageCode) {
            var languageCsv  = this.data.file.replace('__languages__', magentoLanguageCode);
            var languageCode = magentoLanguageCode.replace(/_/g, '-');
            translations[languageCode] = {};

            if (grunt.file.exists(languageCsv)) {
                var magentoLanguageFileContent = grunt.file.read(languageCsv);
                var magentoLanguageFileContentArray = csv2array(magentoLanguageFileContent);

                each(magentoLanguageFileContentArray, function(keyAndValue) {
                    each(this.data.translationKeys, function(translationLabel) {
                        if (keyAndValue[0] === translationLabel) {
                            translations[languageCode][translationLabel] = keyAndValue[1];
                        }
                    });
                }, this);
            } else {
                each(this.data.translationKeys, function(translationLabel) {
                    translations[languageCode][translationLabel] = translationLabel;
                });
            }
        }, this);

        grunt.file.write(this.data.dest, JSON.stringify(translations));
        console.log('Translation JSON generated.');
        console.log(JSON.stringify(translations));
    });
};
