# pinkyPromise

`pinkyPromise` is an ultra-bare-bones promises library intended to provide insight into the inner workings of JavaScript promises. It is not spec-compliant or meant for production use.

The original blog post: [pinkyPromise: JavaScript Promises in 45 Lines of Code](http://henleyedition.com/pinkypromise-javascript-promises-in-45-lines-of-code/).

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

incrementAsyncPromise(data)  
    .then(incrementAsyncPromise)
    .then(incrementAsyncPromise)
    .then(function(n) {
        console.log(n) // => 4
    });

```
