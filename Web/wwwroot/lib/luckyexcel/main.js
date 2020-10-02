import { LuckyFile } from "./ToLuckySheet/LuckyFile";
import { HandleZip } from './HandleZip';
//demo
// function demoHandler(){
//     let upload = document.getElementById("Luckyexcel-demo-file");
//     if(upload){
//         window.onload = () => {
//             upload.addEventListener("change", function(evt){
//                 var files:FileList = (evt.target as any).files;
//                 if(files==null || files.length==0){
//                     alert("No files wait for import");
//                     return;
//                 }
//                 let name = files[0].name;
//                 let suffixArr = name.split("."), suffix = suffixArr[suffixArr.length-1];
//                 if(suffix!="xlsx"){
//                     alert("Currently only supports the import of xlsx files");
//                     return;
//                 }
//                 LuckyExcel.transformExcelToLucky(files[0], function(exportJson:any, luckysheetfile:string){
//                     if(exportJson.sheets==null || exportJson.sheets.length==0){
//                         alert("Failed to read the content of the excel file, currently does not support xls files!");
//                         return;
//                     }
//                     console.log(exportJson, luckysheetfile);
//                     window.luckysheet.destroy();
//                     window.luckysheet.create({
//                         container: 'luckysheet', //luckysheet is the container id
//                         showinfobar:false,
//                         data:exportJson.sheets,
//                         title:exportJson.info.name,
//                         userInfo:exportJson.info.name.creator
//                     });
//                 });
//             });
//         }
//     }
// }
// demoHandler();
// api
var LuckyExcel = /** @class */ (function () {
    function LuckyExcel() {
    }
    LuckyExcel.transformExcelToLucky = function (excelFile, callBack) {
        var handleZip = new HandleZip(excelFile);
        handleZip.unzipFile(function (files) {
            var luckyFile = new LuckyFile(files, excelFile.name);
            var luckysheetfile = luckyFile.Parse();
            var exportJson = JSON.parse(luckysheetfile);
            if (callBack != undefined) {
                callBack(exportJson, luckysheetfile);
            }
        }, function (err) {
            console.error(err);
        });
    };
    LuckyExcel.transformLuckyToExcel = function (LuckyFile, callBack) {
    };
    return LuckyExcel;
}());
export { LuckyExcel };
