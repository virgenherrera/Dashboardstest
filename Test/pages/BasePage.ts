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
    ClassName, 
    All
}

export class BasePage {

    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                this.HighlightElement(element(by.xpath(obj.value)));
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                this.HighlightElement(element(by.className(obj.value)));
                return element(by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                this.HighlightElement(element(by.id(obj.value)));
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                this.HighlightElement(element(by.name(obj.value)))
                return element(by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                this.HighlightElement(element(by.css(obj.value)))
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                this.HighlightElement(element(by.linkText(obj.value)));
                return element(by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                this.HighlightElement(element(by.partialLinkText(obj.value)));
                return element(by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.TagName]:
                this.HighlightElement(element(by.tagName(obj.value)));
                return element(by.tagName(obj.value));
            case IdentificationType[IdentificationType.Js]:
                this.HighlightElement(element(by.js(obj.value)));
                return element(by.js(obj.value));
            case IdentificationType[IdentificationType.All]:
                return element.all(by.xpath(obj.value));
            default:
                break;
        }
    }

    HighlightElement = (el) => {
        // browser.driver.wait(EC.visibilityOf(el), 10000, "Element not found")
        // return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), "background: yellow").
        //     then( (resp) => {
        //         browser.driver.sleep(2000);
        //         return el;
        //     }, function (err) {
        //         console.log("error is :" + err);
        //     });
    };
}