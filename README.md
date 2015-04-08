# pinkyPromise

`pinkyPromise` is an ultra-bare-bones JavaScript implementation of promises intended to provide insight into a relatively common asynchronous programming technique.

The original blog post: [pinkyPromise: JavaScript Promises in 27 Lines of Code](http://henleyedition.com/pinkypromise-javascript-promises-in-27-lines-of-code/).

## Usage

```javascript
//  take an async function
function addAsync(data, cb) {  
    setTimeout(function() {
        cb(n + 1);
    }, 100);
}

// wrap it and return a promise
addAsync = function(n) {  
    var promise = pinkyPromise();

    addAsync(data, function(n) {
        promise.resolve(n);
    });

    return promise;
};

var data = 1;

// promise away :)
addAsync(data)  
    .then(addAsync)
    .then(addAsync)
    .then(function(result) {
        console.log(result); // => 4
    });

```
