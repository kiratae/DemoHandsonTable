import { LuckyFile } from "./LuckyExcel/LuckyFile";
import { HandleZip } from './HandleZip';
// api
export class LuckyExcel {
    static transformExcelToLucky(excelFile, callBack) {
        let handleZip = new HandleZip(excelFile);
        handleZip.unzipFile(function (files) {
            let luckyFile = new LuckyFile(files, excelFile.name);
            let luckysheetfile = luckyFile.Parse();
            let exportJson = JSON.parse(luckysheetfile);
            if (callBack != undefined) {
                callBack(exportJson, luckysheetfile);
            }
        }, function (err) {
            console.error(err);
        });
    }
    static transformLuckyToExcel(LuckyFile, callBack) {
    }
}
//# sourceMappingURL=app.js.map