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
	]
	// ,
	//  onBuildRead: function (moduleName, path, contents) {
	//  	//remove the id from the module for the optimizer
	//  	//this is just Prove of concept - it won't work with commas
	//  	var reEx =  new RegExp("^[ ]*define\\([ \\n\\r\\t]*['\"]"+moduleName+"['\"][ ]*,[ ]*");

	//  	console.log(moduleName);
	//  	return contents.replace(reEx,"xdefine(");
	//  }
})