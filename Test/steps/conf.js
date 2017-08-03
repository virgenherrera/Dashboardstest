"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    specs: [
        "../features/*.feature"
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //baseUrl: "https://app.eldermark.com/demo7",
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.get("https://app.eldermark.com/demo7");
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.driver.manage().timeouts().implicitlyWait(5000);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: [
            "../steps/*.js",
            "../hooks/*.js"
        ],
        tags: '@end-to-end'
    }
};
//# sourceMappingURL=conf.js.map