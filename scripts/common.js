require.config({
    baseUrl: "scripts",
    name: "./common",
    paths: {
        jquery: "lib/jquery"
    }
    ,urlArgs: "bust=" +  (new Date()).getTime()
});


// Main libs - Libraries and modules that will be needed on all pages of the site
define("common", ["jquery"], function(){
	console.log("common.js loaded and dependencies executed");
});


// If you"d like to load some core modules that interact with the page then you can
// use an alternative style
/*
define(function(require) {
    var $        = require("jquery");
    var domReady = require("domready");
    var Nav      = require("modules/Navigation")
                   require("handlebars");
    
    domReady(function() {
        // Init common module code here
        new Nav($("#nav"));
    });
});


*/
