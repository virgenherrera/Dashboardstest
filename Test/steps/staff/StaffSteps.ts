import { defineSupportCode } from 'cucumber'
import { browser, by, element } from "protractor";
import { expect } from 'chai'
import { SecurityGroupsPage } from "../../pages/staff/SecurityGroupsPage";
import { MenuPage } from "../../pages/MenuPage";

/*
    Created By   : Gilberto Sanchez

    Feature      : Staff.feature
    Scenarios    :
                    Verify Security Group from list view

    Modified BY  :
    Modified Date: 
    Funct Added  :
*/

var secGroupsPage = new SecurityGroupsPage();
var menuPage = new MenuPage();

defineSupportCode(({ Given, When, Then }) => {

    Given(/^Staff from the left menu$/, { timeout: 60 * 1000 }, async () => {
        await menuPage.ClickOnStaffMenu();
    });

    Given(/^Select a Community$/, { timeout: 60 * 1000 }, async () => {
        await menuPage.SelectCommunity("Eldermark Sales Demo");
    });

    Given(/^The user select Security Groups$/, { timeout: 60 * 1000 }, async () => {
        await secGroupsPage.SelectStaffDashboard("Security Groups");
    });

    When(/^The user select list view$/, async () => {
        await secGroupsPage.SelectView("list");
    });

    When(/^Application shows security groups table$/, async () => {
        await secGroupsPage.GetAllElementsInTable();
    });

    Then(/^The values on the table should match with the external data$/, { timeout: 60 * 1000 }, async () => {

        var EmployeesGroup = element.all(by.xpath(".//*[@id='EmployeeSecurityGroupAssignmentsTabledataTableContainer']/table/tbody/tr"));
        await browser.driver.sleep(2000);

        await secGroupsPage.CompareDataFromExcelFile();

        await EmployeesGroup.count().then((count) => {
            expect(count).to.be.equals(9);
        });

        await EmployeesGroup.each(element => {
            element.getText().then((text)=>{
                console.log(text);
            })
        });

    });
});