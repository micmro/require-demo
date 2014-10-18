define(["jquery"], function($) {

    // Define an object and then return it for instantiation later
    var PipPage = function(element) {
        element.append("large-img module loaded!");
    };

    PipPage.prototype = {

    };

    return PipPage;
});
