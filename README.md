# gab.ai

A wrapper for the gab.ai API.

This is a fork from https://saythanks.io/to/lyndsysimon. Please thank him.

## Usage

The API is exposed as a single `Gab` object, which must be initialized with an authorized JWT.

```javascript
var Gab = require('gab.ai').Gab;

var api = new Gab('<your JWT>')
```

Once you have an instance of the Gab object, calling each API method will return a Promise object. For example, to get information for a user:

```javascript
api.getUser('a')
    .then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log('Request failed.');
    });
api.post('This is a message.', '<optional ID of post to reply to>');
```

For information on Promise objects, see the [documentation for request-promise](https://github.com/request/request-promise).

## Running Tests

```bash
npm test
```
