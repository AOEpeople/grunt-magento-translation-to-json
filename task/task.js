var csv2array = require('csv2array');
var each = require('component-each');

module.exports = function(grunt) {
    var translations = {};

    each(this.data.languages, function(magentoLanguageCode) {
        var languageCsv  = this.data.file.replace('__languages__', magentoLanguageCode);
        var languageCode = magentoLanguageCode.replace(/_/g, '-');

        translations[languageCode] = buildLanguageJson.call(this, languageCsv, languageCode);
    }, this);

    function buildLanguageJson(languageCsv) {
        var json = {};

        if (!grunt.file.exists(languageCsv)) {
            each(this.data.translationKeys, function (translationLabel) {
                json[translationLabel] = translationLabel;
            });
        } else {
            var magentoLanguageFileContent = grunt.file.read(languageCsv);
            var magentoLanguageFileContentArray = csv2array(magentoLanguageFileContent);

            each(magentoLanguageFileContentArray, function (keyAndValue) {
                var key = keyAndValue[0];
                var value = keyAndValue[1];

                each(this.data.translationKeys, function (translationLabel) {
                    if (key === translationLabel) {
                        json[translationLabel] = value;
                    }
                });
            }, this);
        }

        return json;
    }

    return translations;
};
