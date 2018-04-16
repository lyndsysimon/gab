# gab.ai

A wrapper for the gab.ai API.

This is a fork from https://saythanks.io/to/lyndsysimon. Please thank him.

## Usage

The API is exposed as a single `Gab` object, which must be initialized with an authorized JWT. This is a token that is set as "HttpOnly", so it's generally not visible and queryable through JavaScript. Use your browser's features to display secure cookies and copy the value of the cookie named "remember_..." for the domain "Gab.ai" (for example, in Chrome, under Application -> Storage -> Cookies in the developer tools).


```javascript
var Gab = require('gab.ai').Gab;
var api = new Gab('<your JWT>')
```

Once you have an instance of the Gab object, calling each API method will return a Promise object. For example, to get information for a user:

```javascript
// Get information about a user.
api.getUser('a')
    .then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log('Request failed.');
    });

// Submit a post.
api.post({body: "<p>This is the message of the post</p>", gif: '3PrOqZRpbmqFa'})
    .then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log('Request failed.');
    });

// Get information about a post.
api.getPost('23916771')
    .then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log('Request failed.');
    });
```

For information on Promise objects, see the [documentation for request-promise](https://github.com/request/request-promise).

## Running Tests

```bash
npm test
```
