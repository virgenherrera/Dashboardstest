import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "../BasePage";
import { ExcelUtils } from "../../utilities/ExcelUtils";

//WebElements
const Locators = {
    tblEmployeeSecGroups: {
        type: IdentificationType[IdentificationType.All],
        value: ".//*[@id='EmployeeSecurityGroupAssignmentsTabledataTableContainer']/table/tbody/tr[1]"
    },

    btnListView: {
        type: IdentificationType[IdentificationType.Css],
        value: ".list>em"
    },

    btnGridView: {
        type: IdentificationType[IdentificationType.Css],
        value: ".grid>em"
    },

    btnSliderView: {
        type: IdentificationType[IdentificationType.Css],
        value: ".slider"
    }
}

export class SecurityGroupsPage extends BasePage {

    btnListView = this.ElementLocator(Locators.btnListView);
    btnGridView = this.ElementLocator(Locators.btnGridView);
    btnSliderView = this.ElementLocator(Locators.btnSliderView);

    async SelectStaffDashboard(name:string){
        await element(by.xpath(`.//*[text()='${name}']`)).click();
    }

    async SelectView(view:string){
        switch (view) {
            case "list":
                this.btnListView.click();
                break;
            case "grid":
                this.btnGridView.click();
                break;
            case "slider":
                this.btnSliderView.click();
                break;
            default:
                break;
        }
        
        await browser.driver.sleep(3000);
    }

    async GetAllElementsInTable() {
    //     var EmployeesGroup = element.all(by.xpath(".//*[@id='EmployeeSecurityGroupAssignmentsTabledataTableContainer']/table/tbody/tr"));
    //     await browser.driver.sleep(2000);

    //     EmployeesGroup.count().then((count) => {
    //         console.log(count);
    //         return count;
    //     });

    //     EmployeesGroup.each(element => {
    //         element.getText().then((text)=>{
    //             console.log(text);
    //             console.log("I'm in right now")
    //         })
    //     });
    }

    async CompareDataFromExcelFile(){
        let sheet = <SearchData>ExcelUtils.ReadExcelSheet('../data/staff/securegroups.xlsx');

        console.log(sheet.SecurityGroup);

    }
}

interface SearchData{
    SecurityGroup: string,
    EmployeesNumb: string,
}