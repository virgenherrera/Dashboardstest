import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";

//WebElements
const Locators = {
    txtUserName: {
        type:IdentificationType[IdentificationType.Id],
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
        type: IdentificationType[IdentificationType.Css],
        value: ".error"
    }
}

export class LoginPage extends BasePage{

    txtUserName = this.ElementLocator(Locators.txtUserName);
    txtPassword = this.ElementLocator(Locators.txtPassword);
    btnLogin = this.ElementLocator(Locators.btnLogin);
    lblError = this.ElementLocator(Locators.lblError);

    async SetUserName(userName:string){
        await this.txtUserName.sendKeys(userName);
    }

    async SetPassword(password:string){
        await this.txtPassword.sendKeys(password);
    }

    async ClickLoginButton(){
        await this.btnLogin.click();
    }

    async GetErrorLoginLabel(){
        await this.lblError.getText().then((text) =>{
            console.log(`Error login: ${text}`);
        });
    }
}