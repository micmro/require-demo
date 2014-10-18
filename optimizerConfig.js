({
    baseUrl: "scripts",
    //name: "common",
    dir: "optimized",
    paths: {
        jquery: "empty:"
    },
    modules: [
    	{ name: "common" },
        { name: "app/account-page" },
        { name: "app/pip-page" }
    ],
})