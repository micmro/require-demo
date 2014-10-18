define(["lib/jquery.pluginA", "lib/jquery.pluginB"], function(require) {

    // Define an object and then return it for instantiation later
    var MainNav = function(element) {
        element.append("MainNav module loaded!");
    };

    MainNav.prototype = {

    };

    console.log("global/main-nav.js loaded and dependencies executed");

    return MainNav;
});
