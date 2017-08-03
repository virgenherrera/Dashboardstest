import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "../BasePage";

//WebElements
const Locators = {

    //Census KPIs Dashboards
    lnkCensusKPIs: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[contains(text(),'Census KPIs')]"
    },

    lnkForecast: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[text()='Forecast']"
    },

    lnkHeadCount: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Headcount']"
    },

    lnkOccupancy: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Occupancy']"
    },

    lnkVacantUnits: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Vacant Units']"
    },

    lnkUnitMoveInsOut: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Unit Move Ins & Move Outs']"
    },

    lnkUnitMoveIns: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Unit Move Ins']"
    },

    lnkUnitMoveOuts: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Unit Move Outs']"
    },

    lnkLengthOfStay: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Length Of Stay']"
    }
}

export class CensusKpiPage extends BasePage {

}