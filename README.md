# Basic Validate JS
You can validate JavaScript forms with Basic Validate JS.

### Install:

Using npm:

```shell
    $ npm i basic-validate-js --save
```

In Node.js:
```javascript   
    const basicValidate = require('basic-validate-js'); 
```

### Example:

**Text Validate**

```javascript
    let textExample = basicValidate.textControl('Text'); // return true or false
```

**Email Validate**

```javascript
    let emailExample = basicValidate.emailControl('example@example.com'); // return true or false 
```

**Date Validate**

```javascript
    //Format: DD/MM/YYYY
    let dateExample = basicValidate.dateControl('05/09/2018'); // return true or false     
```

**Iban Validate**

```javascript
    let ibanExample = basicValidate.ibanControl('TR00 0006 2000 0001 9999 9999 99'); // return true or false  
```

**Regex Validate**

```javascript
    let numberPattern = /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/;
    let patternExample = basicValidate.patternControl('1234567890', numberPattern); // return true or false
```