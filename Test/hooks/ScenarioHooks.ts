import { defineSupportCode } from 'cucumber'
import { browser } from "protractor";
import { JsonFormatter } from "../reporting/CucumberReportExtension";
import { config } from "../steps/conf";

defineSupportCode(({ registerHandler, registerListener }) => {

    registerHandler('BeforeScenario', async () => {
        console.log('New Scenrio executed!!');
    });

    registerListener(JsonFormatter);

});