import * as excel from 'ts-xlsx';
import { IWorkSheet } from "xlsx";

export class ExcelUtils {
    static ReadExcelSheet(filepath:string): IWorkSheet{
        let file = excel.readFile(filepath);
        let sheet = file.Sheets["Employees"];
        return excel.utils.sheet_to_json(sheet)[0];
    }
}