import * as fs from 'fs'
import { mkdirp } from 'mkdirp'
import * as report from 'cucumber-html-reporter'
const Cucumber = require('cucumber')

export class CucumberReportExtension {

    private jsonDir = process.cwd() + "/reports/json";
    private htmlDir = process.cwd() + "/reports/html";
    private jsonFile = this.jsonDir + "/cucumber_report.json";

    private cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: this.jsonFile,
        output: this.htmlDir + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version":"unknow",
            "Test Environment": "Demo 7",
            "Browser": "Chrome  59.0.3071.115",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "local"
        }
    };

    private CreateReportFile(dirName, fileName, fileContent) {
        //Check if the directory exist
        if (!fs.existsSync(dirName))
            mkdirp.sync(dirName);
        try {
            fs.writeFileSync(fileName, fileContent);
        }
        catch (message) {
            console.log("Failed to create File/Directory :" + message);
        }
    }

    private GenerateCucumberReport(cucumberReportOption){
        report.generate(cucumberReportOption);
    }

    JsonFormatter = new Cucumber.JsonFormatter({
        log: jLog => {
            this.CreateReportFile(this.jsonDir, this.jsonFile, jLog);
            this.GenerateCucumberReport(this.cucumberReporterOptions);
        }
    });
}

export let JsonFormatter = new CucumberReportExtension().JsonFormatter;