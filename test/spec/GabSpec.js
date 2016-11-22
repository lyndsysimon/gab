var Gab = require('../../lib/Gab').Gab;
var nock = require('nock');
var env = process.env;


describe('Gab', function() {
    var gab;
    var mocked_requests = nock('https://gab.ai/');
    beforeEach(function (done) {
        gab = new Gab({
            authToken: env.GAB_JWT || ''
        });
        done();
    });
    describe('#getUser', function() {
        beforeEach(function(done) {
            mocked_requests.get('/users/LyndsySimon').reply(
                200,
                {
                    id: 60129,
                    name: 'Lyndsy Simon',
                    username: 'LyndsySimon',
                    follower_count: 14,
                    following_count: 14,
                    post_count: 30,
                    picture_url: 'https://gabfiles.blob.core.windows.net/user/583360e5ef880.jpg',
                    picture_url_full: 'https://gabfiles.blob.core.windows.net/user/583360e5ef8ba.jpg',
                    following: false,
                    verified: false,
                    is_private: false,
                    is_accessible: true,
                    follow_pending: false,
                    bio: '"There is a fine line between censorship and good taste and moral responsibility." - Steven Spielberg',
                    cover_url: 'https://gabfiles.blob.core.windows.net/user/583361185d695.jpg',
                    followed: false,
                    score: 39
                }
            );
            done();
        });
        it('should return data', function(done) {
            gab.getUser('LyndsySimon')
                .then(function(data) {
                    expect(data.username).toEqual('LyndsySimon');
                    done();
                })
                .catch(function(err) {
                    done(false);
                });
        });
    });
});
