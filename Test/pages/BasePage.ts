import { browser, element, by, protractor, $$, $ } from 'protractor';

var EC = protractor.ExpectedConditions;

export enum IdentificationType {
    Xpath,
    Css,
    Id,
    Js,
    Name,
    PartialLinkText,
    LinkText,
    TagName,
    ClassName
}

export class BasePage {

    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                browser.driver.wait(EC.visibilityOf(element(by.xpath(obj.value))), 10000, "Element not found");
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                browser.driver.wait(EC.visibilityOf(element(by.className(obj.value))), 10000, "Element not found");
                return element(by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                browser.driver.wait(EC.visibilityOf(element(by.id(obj.value))), 10000, "Element not found");
                this.HighlightElement(element(by.id(obj.value)))
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                browser.driver.wait(EC.visibilityOf(element(by.name(obj.value))), 10000, "Element not found");
                return element(by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                browser.driver.wait(EC.visibilityOf(element(by.css(obj.value))), 10000, "Element not found");
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                browser.driver.wait(EC.visibilityOf(element(by.linkText(obj.value))), 10000, "Element not found");
                return element(by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                browser.driver.wait(EC.visibilityOf(element(by.partialLinkText(obj.value))), 10000, "Element not found");
                return element(by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.TagName]:
                browser.driver.wait(EC.visibilityOf(element(by.tagName(obj.value))), 10000, "Element not found");
                return element(by.tagName(obj.value));
            case IdentificationType[IdentificationType.Js]:
                browser.driver.wait(EC.visibilityOf(element(by.js(obj.value))), 10000, "Element not found");
                return element(by.js(obj.value));
            default:
                break;
        }
    }

    HighLight(webelement) {
        for (var i = 0; 1 < 3; i++) {
            browser.driver.executeScript("arguments[0].setAttribute('style','background: yellow')", webelement);
            browser.driver.executeScript("arguments[0].setAttribute('style','background:')", webelement);
        }
    }

    HighlightElement = function (el) {
        //browser.driver.wait(EC.visibilityOf(el), 10000, "Element not found")
        return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), "background: yellow").//"color: Red; border: 2px solid red;").
            then(function (resp) {
                browser.driver.sleep(2000);
                return el;
            }, function (err) {
                console.log("error is :" + err);
            });
    };
}