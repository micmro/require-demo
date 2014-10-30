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

Performance optimization
----------------------

I've added a `onBuildWrite` step into the build configuration (`build.js`) that allows to load the optimized require module as a `<scrip>` tag - this allows the preload-parser to start downloading the file earlier. So instead of nesting them in `require([], nextStage)` calls you can add them after each other in at the bottom of the document.

``` Javascript
({
	...
	onBuildWrite: function (moduleName, path, contents) {
		// This is where the magic happens:
		/// append ";require(["moduleName"]);" to all entry modules
		// - this has the same result as adding insertRequire["moduleName"] to all modules
		for (var i = 0, len = config.modules.length; i < len; i++) {
			if(config.modules[i].name === moduleName){
				return  contents + ";require([\""+moduleName+"\"]);"
			}
		}
		return contents
	}
	...
});
```

run the optimizer, commet out the require calls and uncomment these line both in `index.html`)
``` HTML
<script src="optim-output/common.js"></script>
<script src="optim-output/app/account-page.js"></script>
<script src="optim-output/app/pip-page.js"></script>
```
