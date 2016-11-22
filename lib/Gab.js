var rp = require('request-promise');

function Gab(options) {
    this.options = options;

    this._baseRequest = rp.defaults({
        baseUrl: 'https://gab.ai/',
        followRedirect: false,
        headers: {
            authorization: 'Bearer ' + this.options.authToken
        },
        transform2xxOnly: true,
        transform: function(content) { return JSON.parse(content) }
    })
}

Gab.prototype.getUser = function (username) {
    return this._baseRequest('/users/' + username);
};

if (!(typeof exports === 'undefined')) {
    exports.Gab = Gab;
}
