"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excel = require("ts-xlsx");
var ExcelUtils = (function () {
    function ExcelUtils() {
    }
    ExcelUtils.ReadExcelSheet = function (filepath) {
        var file = excel.readFile(filepath);
        var sheet = file.Sheets["Employees"];
        return excel.utils.sheet_to_json(sheet)[0];
    };
    return ExcelUtils;
}());
exports.ExcelUtils = ExcelUtils;
//# sourceMappingURL=ExcelUtils.js.map