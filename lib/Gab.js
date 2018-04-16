var rp = require('request-promise');

function Gab(options) {
    this.options = options;
    this._baseRequest = rp.defaults({
        baseUrl: 'https://gab.ai/',
        followRedirect: false,
        headers: {
            authorization: 'Bearer ' + this.options.authToken
        },
        json: true
    });
};

Gab.prototype.getUser = function (username) {
    return this._baseRequest('/users/' + username);
};

Gab.prototype.getFeed = function () {
    return this._baseRequest('/feed/');
};

Gab.prototype.post = function(message, reply_to = "") {
  return this._baseRequest({
    method: 'POST',
    uri: '/posts/',
    body: {
      body: "<p>"+message+"</p>",
      reply_to: reply_to,
      is_quote: "0",
      is_html: "1",
      nsfw: "0",
      is_premium: "0",
      _method: "post",
      gif: "",
      category: null,
      topic: null,
      share_facebook: null,
      share_twitter: null,
      media_attachments: []
    },
    json: true
  });
};

if (!(typeof exports === 'undefined')) {
    exports.Gab = Gab;
}
