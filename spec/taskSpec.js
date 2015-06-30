var task  = require('../task/task');
var grunt = require('grunt');
var scope = require('./mock/scopeHelper.js');

describe('task', function() {
    it('should be a function', function() {
        expect(typeof task).toBe('function');
    });

    it('should build simple translation json file for one translation key and one language', function() {
        var expectationObject = {
            'de-DE': {
                'Bless you': 'Gesundheit'
            }
        };
        expect(task.call(scope.mockWithOneExistingLanguageAndOneTranslationKey(), grunt)).toEqual(expectationObject);
    });

    it('should build a translation json for three translation keys and two languages', function() {
        var expectationObject = {
            'de-DE': {
                'On the opposite side': 'Auf der gegenüberliegenden Seite',
                'New': 'Neu'
            },
            'eo-DE': {
                'On the opposite side': 'En la kontraŭa flanko',
                'New': 'Nova'
            }
        };
        expect(task.call(scope.mockWithTwoExistingLanguagesAndThreeTranslationKeys(), grunt)).toEqual(expectationObject);
    });

    it('should build a translation json for two translation keys and one existent and one non existent language' +
       'where it uses the labels as values', function() {
        var expectationObject = {
            'de-DE': {
                'On the opposite side': 'Auf der gegenüberliegenden Seite',
                'Bless you': 'Gesundheit'
            },
            'non-existent-language': {
                'On the opposite side': 'On the opposite side',
                'Bless you': 'Bless you'
            }
        };
        expect(task.call(scope.mockWithOneExistingAndOneNonExistentLanguageAndTwoTranslationKeys(), grunt)).toEqual(expectationObject);
    });
});
