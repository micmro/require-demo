({
	baseUrl: "scripts",
	//name: "common",
	dir: "optim-output",
	paths: {
		jquery: "empty:"
	},
	modules: [
		{
			name: "common"
		},
		{ 
			name: "app/account-page"
		},
		{ 
			name: "app/pip-page"
		}
	],
	onBuildWrite: function (moduleName, path, contents) {
		// This is where the magic happens:
		/// append ";require(["moduleName"]);" to all entry modules
		// - this has the same result as adding insertRequire["moduleName"] to all modules
		for (var i = 0, len = config.modules.length; i < len; i++) {
			if(config.modules[i].name === moduleName){
				return  contents + ";require([\""+moduleName+"\"]);"
			};
		}
		return contents
	},	
})