# pinkyPromise

`pinkyPromise` is an ultra-bare-bones JavaScript implementation of promises intended to provide insight into the inner workings of JavaScript promises.

The original blog post: [pinkyPromise: JavaScript Promises in 40 Lines of Code](http://henleyedition.com/pinkypromise-javascript-promises-in-40-lines-of-code/).

## Usage

```javascript
//  take an async function
function incrementAsync(n, cb) {  
    setTimeout(function() {
        cb(n + 1);
    }, 100);
}

// pinkyPromise it!
var incrementAsyncPromise = pinkyPromise(incrementAsync);

var data = 1;

// trust the promise
incrementAsyncPromise(data)  
    .then(incrementAsyncPromise)
    .then(incrementAsyncPromise)
    .then(function(result) {
        console.log(result); // => 4
    });

```
