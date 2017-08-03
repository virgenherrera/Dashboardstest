import { Config, browser } from 'protractor';

export let config: Config = {

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
        browser.waitForAngularEnabled(false);
        browser.driver.get("https://app.eldermark.com/demo7");
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(5000);
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
}