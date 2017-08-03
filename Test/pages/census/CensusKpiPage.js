"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage_1 = require("../BasePage");
//WebElements
var Locators = {
    //Census KPIs Dashboards
    lnkCensusKPIs: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[contains(text(),'Census KPIs')]"
    },
    lnkForecast: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[text()='Forecast']"
    },
    lnkHeadCount: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Headcount']"
    },
    lnkOccupancy: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Occupancy']"
    },
    lnkVacantUnits: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Vacant Units']"
    },
    lnkUnitMoveInsOut: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Unit Move Ins & Move Outs']"
    },
    lnkUnitMoveIns: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Unit Move Ins']"
    },
    lnkUnitMoveOuts: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Unit Move Outs']"
    },
    lnkLengthOfStay: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@class ='text' AND text()='Length Of Stay']"
    }
};
var CensusKpiPage = (function (_super) {
    __extends(CensusKpiPage, _super);
    function CensusKpiPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CensusKpiPage;
}(BasePage_1.BasePage));
exports.CensusKpiPage = CensusKpiPage;
//# sourceMappingURL=CensusKpiPage.js.map