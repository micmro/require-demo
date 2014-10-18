require.config({
	baseUrl: "scripts",
	paths: {
		jquery: "lib/jquery"
	}
	,urlArgs: "bust=" +  (new Date()).getTime()
});

// Main libs - Libraries and modules that will be needed on all pages of the site
define("common", ["jquery"], function(){
	console.log("common.js loaded and dependencies executed");
});