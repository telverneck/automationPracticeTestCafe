let os = require("os");

module.exports = {
    skipJsErrors: true,
    hostname: os.hostname(),

    baseUrl: "https://www.saucedemo.com",
    concurrency: 2, //Parallel mode
};