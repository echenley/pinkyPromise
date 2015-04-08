function pinkyPromise() {
    var queue = [];
    
    function resolve(ret) {
        if (!queue.length) {
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
    
    return {
        then: function(cb) {
            if (cb) {
                // add cb to queue
                queue.push(cb);
            }
            return this;
        },
        resolve: resolve
    }
}
