"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var chai_1 = require("chai");
var SecurityGroupsPage_1 = require("../../pages/staff/SecurityGroupsPage");
var MenuPage_1 = require("../../pages/MenuPage");
/*
    Created By   : Gilberto Sanchez

    Feature      : Staff.feature
    Scenarios    :
                    Verify Security Group from list view

    Modified BY  :
    Modified Date:
    Funct Added  :
*/
var secGroupsPage = new SecurityGroupsPage_1.SecurityGroupsPage();
var menuPage = new MenuPage_1.MenuPage();
cucumber_1.defineSupportCode(function (_a) {
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    Given(/^Staff from the left menu$/, { timeout: 60 * 1000 }, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, menuPage.ClickOnStaffMenu()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Given(/^Select a Community$/, { timeout: 60 * 1000 }, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, menuPage.SelectCommunity("Eldermark Sales Demo")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Given(/^The user select Security Groups$/, { timeout: 60 * 1000 }, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, secGroupsPage.SelectStaffDashboard("Security Groups")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^The user select list view$/, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, secGroupsPage.SelectView("list")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^Application shows security groups table$/, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, secGroupsPage.GetAllElementsInTable()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Then(/^The values on the table should match with the external data$/, { timeout: 60 * 1000 }, function () { return __awaiter(_this, void 0, void 0, function () {
        var EmployeesGroup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    EmployeesGroup = protractor_1.element.all(protractor_1.by.xpath(".//*[@id='EmployeeSecurityGroupAssignmentsTabledataTableContainer']/table/tbody/tr"));
                    return [4 /*yield*/, protractor_1.browser.driver.sleep(2000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, secGroupsPage.CompareDataFromExcelFile()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, EmployeesGroup.count().then(function (count) {
                            chai_1.expect(count).to.be.equals(9);
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, EmployeesGroup.each(function (element) {
                            element.getText().then(function (text) {
                                console.log(text);
                            });
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=StaffSteps.js.map