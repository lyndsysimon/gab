var Gab = require('../../lib/Gab').Gab;
var env = process.env;


describe('Gab', function() {
    describe('with authorized session', function() {
        var gab;
        beforeEach(function (done) {
            gab = new Gab({
                authToken: env.GAB_JWT
            });
            done();
        });
        describe('#getUser', function() {
            it('should return data', function(done) {
                gab.getUser('LyndsySimon')
                    .then(function(data) {
                        expect(JSON.parse(data).username).toEqual('LyndsySimon');
                        done();
                    })
                    .catch(function(err) {
                        done(false);
                    });
            });
        });
    });
});
