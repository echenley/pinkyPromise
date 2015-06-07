'use strict';

function pinkyPromise(fn) {
    var queue = [];

    function promisify(fn) {
        // converts fn w/ callback to return promise
        return function() {
            var promise = pinkyPromise();
            var args = Array.prototype.slice.call(arguments);

            // add promise.resolve as final argument
            args.push(promise.resolve);

            fn.apply(this, args);

            return promise;
        };
    }

    function resolve(ret) {
        if (!queue.length) {
            // no more callbacks
            return;
        } else if (ret && ret.then) {
            // ret is a promise
            ret.then(resolve);
        } else {
            // ret is not a promise
            var newRet = queue.shift()(ret);
            resolve(newRet);
        }
    }

    // if fn, return promisified fn
    // otherwise return a promise
    return fn ? promisify(fn) : {
        then: function(cb) {
            if (cb) {
                // add cb to queue
                queue.push(cb);
            }
            return this;
        },
        resolve: resolve
    };
}

module.exports = pinkyPromise;
