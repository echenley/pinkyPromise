# pinkyPromise

`pinkyPromise` is a bare-bones JavaScript implementation of promises intended to provide insight into a relatively common asynchronous programming technique.

The original blog post:
http://henleyedition.com/pinkypromise-javascript-promises-in-27-lines-of-code/

```javascript
//  async function
function addAsync(data, cb) {  
    setTimeout(function() {
        cb(n + 1);
    }, 100);
}

// wrap the function to return a promise
addAsync = function() {  
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
