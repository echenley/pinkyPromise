'use strict';

var pinkyPromise = require('../pinkyPromise');

function addAsync(n, cb) {
    setTimeout(function() {
        cb(n + 1);
    }, 100);
}

describe('pinkyPromise', function() {
    var addAsyncPromise = pinkyPromise(addAsync);
    var final;

    beforeEach(function(done) {
        addAsyncPromise(10)
            .then(addAsyncPromise)
            .then(function(res) {
                final = res;
                done();
            });
    });

    it('returns a promisified function when passing in a function', function() {
        expect(final).toBe(12);
    });
});
