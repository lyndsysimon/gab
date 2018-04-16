var rp = require('request-promise');

function Gab(token) {
    this._baseRequest = rp.defaults({
        baseUrl: 'https://gab.ai/',
        //baseUrl: 'http://localhost:8888/',
        followRedirect: false,
        headers: {
            authorization: 'Bearer ' + token
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

Gab.prototype.getPost = function (postid) {
    return this._baseRequest('/posts/' + postid);
};

Gab.prototype.getConversation = function (postid) {
    return this._baseRequest('/posts/'+postid+'/conversation');
};

Gab.prototype.getComments = function (postid) {
    return this._baseRequest('/posts/'+postid+'/comments');
};

Gab.prototype.getTopics = function () {
    return this._baseRequest('/api/topics/');
};

Gab.prototype.getTopic = function (topic_id) {
  return this._baseRequest('/api/topics/'+topic_id);
}

Gab.prototype.getTopicsArchive = function () {
    return this._baseRequest('/api/topics/archive/');
};

Gab.prototype.getFavoriteFeeds = function () {
    return this._baseRequest('/api/favorite-feeds/');
};

Gab.prototype.getFeatured = function () {
    return this._baseRequest('/api/tv/featured');
};

Gab.prototype.getBroadcasts = function () {
    return this._baseRequest('/api/broadcasts/');
};

Gab.prototype.getUserVideos = function (user) {
    return this._baseRequest('/api/users/'+user+'/tv');
};

Gab.prototype.getNotifications = function () {
    return this._baseRequest('/api/notifications/');
};

Gab.prototype.getCategory = function (category, sort = 'score', include_replies = 0) {
    return this._baseRequest({
      uri: '/api/category/'+category,
      qs: {
        sort: sort,
        include_replies: include_replies
      }
    });
};

Gab.prototype.getPopularUsers = function () {
    return this._baseRequest('/popular/users');
};

Gab.prototype.addFavoriteFeed = function(feed_id) {
  return this._baseRequest({
    method: 'POST',
    uri: '/api/favorite-feeds',
    body: {},
    qs: {
      feed_type: 'topic',
      feed_id: feed_id
    }
  });
}

Gab.prototype.removeFavoriteFeed = function(feed_id) {
  return this._baseRequest({
    method: 'POST',
    uri: '/api/favorite-feeds',
    body: {
      _method: 'delete'
    },
    qs: {
      feed_type: 'topic',
      feed_id: feed_id
    }
  });
}

Gab.prototype.putPost = function(options) {
  let body = {
    body: "",
    reply_to: "",
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
  };
  // Override template values with options.
  for(var key in options) body[key] = options[key];
  return this._baseRequest({
    method: 'POST',
    uri: '/posts/',
    body: body
  });
};

if (!(typeof exports === 'undefined')) {
  exports.Gab = Gab;
}
