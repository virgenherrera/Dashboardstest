import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";

//WebElements
const Locators = {

    lnkBilling: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Billing')]"
    },

    lnkCensus: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[2]/span"
    },

    lnkClinical: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Clinical')]"
    },

    lnkEmar: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'EMAR')]"
    },

    lnkIncidents: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[5]/span"
    },

    lnkMarketing: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[6]/span"
    },

    lnkResidents: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[7]/span"
    },

    lnkServices: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Services')]"
    },

    lnkStaff: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Staff')]"
    },

    txtSearch: {
        type: IdentificationType[IdentificationType.Id],
        value: "quickSearch"
    },

    btnSearch: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='quickSearchForm']/div/button"
    },

    btnEditDash: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[text()='Edit Dashboard']"
    },

    btnDone: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[text()='Done']"
    },

    btnResetDashboard: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".//*[@id='content']/div[1]/div/table/tbody/tr/td/div/div/div/div/div[1]/div/div/div[6]/input"
    }
}

export class MenuPage extends BasePage {

    lnkBilling = this.ElementLocator(Locators.lnkBilling);
    lnkCensus = this.ElementLocator(Locators.lnkCensus);
    lnkClinical = this.ElementLocator(Locators.lnkClinical);
    lnkEmar = this.ElementLocator(Locators.lnkEmar);
    lnkIncidents = this.ElementLocator(Locators.lnkIncidents);
    lnkMarketing = this.ElementLocator(Locators.lnkMarketing);
    lnkResidents = this.ElementLocator(Locators.lnkResidents);
    lnkServices = this.ElementLocator(Locators.lnkServices);
    lnkStaff = this.ElementLocator(Locators.lnkStaff);
    txtSearch = this.ElementLocator(Locators.txtSearch);
    btnSearch = this.ElementLocator(Locators.btnSearch);
    btnEditDash =  this.ElementLocator(Locators.btnEditDash);
    btnDone = this.ElementLocator(Locators.btnDone);
    btnResetDashboard = this.ElementLocator(Locators.btnResetDashboard);

    async ClickOnBillingMenu(){
        await this.lnkBilling.click();
    }

    async ClickOnCensusMenu(){
        await this.lnkCensus.click();
    }

    async ClickOnClinicalMenu(){
        await this.lnkClinical.click();
    }

    async ClickOnEmarMenu(){
        await this.lnkEmar.click();
    }

    async ClickOnIncidentsMenu(){
        await this.lnkIncidents.click();
    }

    async ClickOnMarketingMenu(){
        await this.lnkMarketing.click();
    }

    async ClickOnResidentsMenu(){
        await this.lnkResidents.click();
    }

    async ClickOnServicesMenu(){
        await this.lnkServices.click();
    }

    async ClickOnStaffMenu(){
        await this.lnkStaff.click();
    }

    async SetSearch(searchText:string){
        await this.txtSearch.sendKeys(searchText);
    }

    async ClickOnSearch(){
        await this.btnSearch.click();
    }

    async ClickOnEditDashboard(){
        await this.btnEditDash.click();
    }

    async ClickOnDoneMenu(){
        await this.btnDone.click();
    }

    async ClickOnSResetDashboardsMenu(){
        await this.btnResetDashboard.click();
    }
}