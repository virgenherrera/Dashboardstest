import { defineSupportCode } from 'cucumber'
import { browser, by } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { config } from "../steps/conf";
//import { expect } from 'chai'

var loginPage = new LoginPage();

defineSupportCode(({ Given, When, Then }) => {

    Given(/^A valid username$/, { timeout: 60 * 1000 }, async () => {
        //await browser.get(config.baseUrl);
        await loginPage.SetUserName("auser");
    });

    Given(/^A valid password$/, async () => {
        await loginPage.SetPassword("prominder");
    });

    When(/^I click on login button$/, async () => {
        await loginPage.ClickLoginButton();
    });

    Then(/^I am able to acces Eldermark's dashboards page$/, async () => {
        //expect();
    });

});