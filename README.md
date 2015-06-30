## Description
Parses magento translation files and extracts the given keys to a json map. 

## Example
de_DE/translation.csv contains:

```
"New","Neu"
```

en_US/translation.csv contains:

```
"New","New"
```

If configured to use the 'New' label, the output would be:

```
{
  "de-DE": {
    "New": "Neu"
  },
  "en-US": {
    "New": "New"
  }
}
```

## Installation
`npm install grunt-magento-translation-to-json`

Then load it in your gruntfile like:

`require('grunt-magento-translation-to-json')(grunt);`

Then proceed with the configuration.

## Configuration
The value of the `file` property is the path to the translation file(s). The language code is replaced with a placeholder,
the task then loops over the languages and replaces the placeholder with the current language. Add the keys you need to
extract from the translation files to `translationKeys`. The `dest` property stores the destination path and filename.

### Example
```
prepareTranslations: {
    files: {
        file: '../../../Magento/app/locale/__languages__/Mage_Sales.csv',
        languages: [
            'de_DE',
            'zh_Hans_CN',
            'en_US'
        ],
        translationKeys: [
            'New'
        ],
        dest: './js/modules/featurizer/gruntGeneratedTranslations.json'
    }
}
```

## Development
If you want to contribute, just clone the repository and run `npm install`. Tests and mocks reside in `spec` directory.

### Test
`npm test`

## No warranty
**The program is provided on an "as is" basis, without warranties or conditions of any kind, either express or 
implied including, without limitation, any warranties or conditions of title, non-infringement, merchantability 
or fitness for a particular purpose.** Each recipient is solely responsible for determining the appropriateness 
of using and distributing the program and assumes all risks associated with its exercise of rights under this agreement, 
including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to 
or loss of data, programs or equipment, and unavailability or interruption of operations.
