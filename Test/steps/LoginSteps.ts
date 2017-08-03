import { defineSupportCode } from 'cucumber'
import { browser, by, element } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { config } from "../steps/conf";
import { expect } from 'chai'

/*
    Created By   : Gilberto Sanchez

    Feature      : Login.feature
    Scenarios    :
                    User login with invalid credentials
                    User login with valid credentials 

    Modified BY  :
    Modified Date: 
    Funct Added  :
*/

var loginPage = new LoginPage();

defineSupportCode(({ Given, When, Then }) => {

    Given(/^A valid username$/, { timeout: 60 * 1000 }, async () => {
        await loginPage.SetUserName("auser");
    });

    Given(/^A valid password$/, { timeout: 60 * 1000 }, async () => {
        await loginPage.SetPassword("prominder");
    });

    When(/^I click on login button$/, async () => {
        await loginPage.ClickLoginButton();
    });

    Then(/^I am able to acces Eldermark's dashboards page$/, { timeout: 60 * 1000 }, async () => {
        await loginPage.lblEldermakAdmin.getText().then((text) =>{
            expect(text).to.contain('Eldermark');
        });
    });

    Given(/^A invalid username$/, { timeout: 60 * 1000 }, async () => {
        await loginPage.SetUserName("admin");
    });

    Given(/^A invalid password$/, { timeout: 60 * 1000 }, async () => {
        await loginPage.SetPassword("password");
    });

    Then(/^The application displays an error message$/, { timeout: 60 * 1000 }, async () => {
        await loginPage.lblError.getText().then((text) => {
            expect(text).to.contain('is incorrect.');
        });
    });

});