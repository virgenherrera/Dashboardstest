import { defineSupportCode } from 'cucumber'
import { browser } from "protractor";
import { JsonFormatter } from "../reporting/CucumberReportExtension";
import { config } from "../steps/conf";

defineSupportCode(({ registerHandler, registerListener }) => {

   // registerHandler('BeforeScenario', async () => {
   //     await browser.driver.get("https://app.eldermark.com/demo7");
   // });

    registerListener(JsonFormatter);

});