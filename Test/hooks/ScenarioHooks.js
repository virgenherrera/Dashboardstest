"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
cucumber_1.defineSupportCode(function (_a) {
    // registerHandler('BeforeScenario', async () => {
    //     await browser.driver.get("https://app.eldermark.com/demo7");
    // });
    var registerHandler = _a.registerHandler, registerListener = _a.registerListener;
    registerListener(CucumberReportExtension_1.JsonFormatter);
});
//# sourceMappingURL=ScenarioHooks.js.map