import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";

//WebElements
const Locators = {
    txtUserName: {
        type: IdentificationType[IdentificationType.Id],
        value: "username"
    },

    txtPassword: {
        type: IdentificationType[IdentificationType.Id],
        value: "password"
    },

    btnLogin: {
        type: IdentificationType[IdentificationType.Id],
        value: "loginBtn"
    },

    lblError: {
        type: IdentificationType[IdentificationType.ClassName],
        value: "error"
    },

    lblEldermakAdmin: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[contains(text(),'Administrator')]"
    }
}

export class LoginPage extends BasePage {

    txtUserName = this.ElementLocator(Locators.txtUserName);
    txtPassword = this.ElementLocator(Locators.txtPassword);
    btnLogin = this.ElementLocator(Locators.btnLogin);
    public lblError = this.ElementLocator(Locators.lblError);
    public lblEldermakAdmin = this.ElementLocator(Locators.lblEldermakAdmin);

    async SetUserName(userName: string) {
        await browser.driver.sleep(2);
        await this.txtUserName.clear();
        await this.txtUserName.sendKeys(userName);
    }

    async SetPassword(password: string) {
        await browser.driver.sleep(2);
        await this.txtPassword.clear();
        await this.txtPassword.sendKeys(password);
    }

    async ClickLoginButton() {
        await this.btnLogin.click();
    }
}