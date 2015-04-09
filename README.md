# pinkyPromise

`pinkyPromise` is an ultra-bare-bones JavaScript implementation of promises intended to provide insight into the inner workings of JavaScript promises.

The original blog post: [pinkyPromise: JavaScript Promises in 27 Lines of Code](http://henleyedition.com/pinkypromise-javascript-promises-in-27-lines-of-code/). (it's slightly longer now...)

## Usage

```javascript
//  take an async function
function addAsync(n, cb) {  
    setTimeout(function() {
        cb(n + 1);
    }, 100);
}

// pinkyPromise it!
var addAsyncPromise = pinkyPromise(addAsync);

var data = 1;

// trust the promise
addAsyncPromise(data)  
    .then(addAsyncPromise)
    .then(addAsyncPromise)
    .then(function(result) {
        console.log(result); // => 4
    });

```
