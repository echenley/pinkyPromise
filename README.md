# pinkyPromise

`pinkyPromise` is an ultra-bare-bones JavaScript implementation of promises intended to provide insight into the inner workings of JavaScript promises.

The original blog post: [pinkyPromise: JavaScript Promises in 27 Lines of Code](http://henleyedition.com/pinkypromise-javascript-promises-in-27-lines-of-code/).

## Usage

```javascript
//  take an async function
function addAsync(n, cb) {  
    setTimeout(function() {
        cb(n + 1);
    }, 100);
}

// wrap it and return a promise
var addAsyncPromise = function(n) {  
    var promise = pinkyPromise();

    addAsync(n, function(ret) {
        promise.resolve(ret);
    });

    return promise;
};

var data = 1;

// promise away :)
addAsyncPromise(data)  
    .then(addAsyncPromise)
    .then(addAsyncPromise)
    .then(function(result) {
        console.log(result); // => 4
    });

```
