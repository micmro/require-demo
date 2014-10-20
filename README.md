require-demo
============
Demo of using require in a multi-page app (a global and 0-n secondary entry files).

Setup demo server and tools
---------------------------

If not already installer install [node.js](http://nodejs.org/) and execute the following repo in your teminal to install [Grunt](http://gruntjs.com/), the [r.js optimizer](http://requirejs.org/docs/optimization.html) and all dependencies:

``` Bash
npm install -g grunt-cli
npm install -g requirejs
npm install
```

You can start the demo server with `grunt dev`


Running the require optimizer
----------------------

``` Bash
r.js -o build.js

# or on windows (not bash) 
r.js.cmd -o build.js
```

This will pack the dependencies as configured in build.js and outputs them to the `optim-output` directory