# node-evented

<img src="http://i.imgur.com/3kYWY.jpg" />

## Extended EventEmitter for node.js

I'll give you no description, code talks itself:
<pre>
  var EventEmitter = require('node-evented').EventEmitter;
  
  // Do as you usual do!
  var obj = new EventEmitter();
  
  obj.on('some-event', function() {
    // Some code: starts
    // ...
    // Some code: ends
    
    // This line removes current listener from EventEmitter !
    this.removeListener('some-event');
  });
  
  obj.emit('some-event'); // Works!
</pre>

## I like it! How to install ?
<pre>
  npm install node-evented
</pre>

### License

(The MIT License)

Copyright (c) 2010 Fedor Indutny

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
