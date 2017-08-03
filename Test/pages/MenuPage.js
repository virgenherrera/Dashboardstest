"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage_1 = require("./BasePage");
//WebElements
var Locators = {
    lnkBilling: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Billing')]"
    },
    lnkCensus: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[2]/span"
    },
    lnkClinical: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Clinical')]"
    },
    lnkEmar: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'EMAR')]"
    },
    lnkIncidents: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[5]/span"
    },
    lnkMarketing: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[6]/span"
    },
    lnkResidents: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']/tbody/tr/td/table/tbody/tr/td[1]/div/div[2]/div/div/ol/li[7]/span"
    },
    lnkServices: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Services')]"
    },
    lnkStaff: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='app']//span[contains(text(),'Staff')]"
    },
    txtSearch: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "quickSearch"
    },
    btnSearch: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='quickSearchForm']/div/button"
    },
    btnEditDash: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[text()='Edit Dashboard']"
    },
    btnDone: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[text()='Done']"
    },
    btnResetDashboard: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".//*[@id='content']/div[1]/div/table/tbody/tr/td/div/div/div/div/div[1]/div/div/div[6]/input"
    }
};
var MenuPage = (function (_super) {
    __extends(MenuPage, _super);
    function MenuPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lnkBilling = _this.ElementLocator(Locators.lnkBilling);
        _this.lnkCensus = _this.ElementLocator(Locators.lnkCensus);
        _this.lnkClinical = _this.ElementLocator(Locators.lnkClinical);
        _this.lnkEmar = _this.ElementLocator(Locators.lnkEmar);
        _this.lnkIncidents = _this.ElementLocator(Locators.lnkIncidents);
        _this.lnkMarketing = _this.ElementLocator(Locators.lnkMarketing);
        _this.lnkResidents = _this.ElementLocator(Locators.lnkResidents);
        _this.lnkServices = _this.ElementLocator(Locators.lnkServices);
        _this.lnkStaff = _this.ElementLocator(Locators.lnkStaff);
        _this.txtSearch = _this.ElementLocator(Locators.txtSearch);
        _this.btnSearch = _this.ElementLocator(Locators.btnSearch);
        _this.btnEditDash = _this.ElementLocator(Locators.btnEditDash);
        _this.btnDone = _this.ElementLocator(Locators.btnDone);
        _this.btnResetDashboard = _this.ElementLocator(Locators.btnResetDashboard);
        return _this;
    }
    MenuPage.prototype.ClickOnBillingMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkBilling.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnCensusMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkCensus.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnClinicalMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkClinical.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnEmarMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkEmar.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnIncidentsMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkIncidents.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnMarketingMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkMarketing.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnResidentsMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkResidents.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnServicesMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkServices.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnStaffMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lnkStaff.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.SetSearch = function (searchText) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.txtSearch.sendKeys(searchText)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.btnSearch.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnEditDashboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.btnEditDash.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnDoneMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.btnDone.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.ClickOnSResetDashboardsMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.btnResetDashboard.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MenuPage;
}(BasePage_1.BasePage));
exports.MenuPage = MenuPage;
//# sourceMappingURL=MenuPage.js.map