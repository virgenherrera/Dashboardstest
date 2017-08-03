"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var EC = protractor_1.protractor.ExpectedConditions;
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Xpath"] = 0] = "Xpath";
    IdentificationType[IdentificationType["Css"] = 1] = "Css";
    IdentificationType[IdentificationType["Id"] = 2] = "Id";
    IdentificationType[IdentificationType["Js"] = 3] = "Js";
    IdentificationType[IdentificationType["Name"] = 4] = "Name";
    IdentificationType[IdentificationType["PartialLinkText"] = 5] = "PartialLinkText";
    IdentificationType[IdentificationType["LinkText"] = 6] = "LinkText";
    IdentificationType[IdentificationType["TagName"] = 7] = "TagName";
    IdentificationType[IdentificationType["ClassName"] = 8] = "ClassName";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePage = (function () {
    function BasePage() {
        this.HighlightElement = function (el) {
            //browser.driver.wait(EC.visibilityOf(el), 10000, "Element not found")
            return protractor_1.browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), "background: yellow").
                then(function (resp) {
                protractor_1.browser.driver.sleep(2000);
                return el;
            }, function (err) {
                console.log("error is :" + err);
            });
        };
    }
    BasePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.className(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.id(obj.value))), 10000, "Element not found");
                this.HighlightElement(protractor_1.element(protractor_1.by.id(obj.value)));
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.name(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.css(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.linkText(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.partialLinkText(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.TagName]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.tagName(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.tagName(obj.value));
            case IdentificationType[IdentificationType.Js]:
                protractor_1.browser.driver.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.js(obj.value))), 10000, "Element not found");
                return protractor_1.element(protractor_1.by.js(obj.value));
            default:
                break;
        }
    };
    BasePage.prototype.HighLight = function (webelement) {
        for (var i = 0; 1 < 3; i++) {
            protractor_1.browser.driver.executeScript("arguments[0].setAttribute('style','background: yellow')", webelement);
            protractor_1.browser.driver.executeScript("arguments[0].setAttribute('style','background:')", webelement);
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map