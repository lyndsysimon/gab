# gab.ai

A wrapper for the gab.ai API

## Usage

The API is exposed as a single `Gab` object, which must be initialized with an authorized JWT.

```javascript
var Gab = require('gab.ai').Gab;

var api = new Gab({
    authToken: '<your JWT>'
})
```

Once you have an instance of the Gab object, calling each API method will return a Promise object. For example, to get information for a user:

```javascript
api.getUser('a')
    .then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log('Request failed.');
    });
```

For information on Promise objects, see the [documentation for request-promise](https://github.com/request/request-promise).

## Running Tests

Tests currently require an authorized JWT to run - HTTP requests will be mocked in the near future, but are not yet. First, set the JWT to use as an environment variable:

```bash
export GAB_JWT="<your JWT>"
```

Once your JWT is set, in the same shell session, run the tests:

```bash
npm test
```
