module.exports = {
    mockWithOneExistingLanguageAndOneTranslationKey: function() {
        return buildMock(['de_DE'], ['Bless you']);
    },
    mockWithTwoExistingLanguagesAndThreeTranslationKeys: function() {
        return buildMock(['de_DE', 'eo_DE'], ['On the opposite side', 'New']);
    },
    mockWithOneExistingAndOneNonExistentLanguageAndTwoTranslationKeys: function() {
        return buildMock(['de_DE', 'non_existent_language'], ['On the opposite side', 'Bless you']);
    }
};

function buildMock(languages, translationKeys) {
    return {
        data: {
            file: __dirname + '/__languages__/file.csv',
            languages: languages,
            translationKeys: translationKeys
        }
    }
}

