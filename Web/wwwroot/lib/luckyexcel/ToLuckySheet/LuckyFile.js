var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { LuckySheet } from "./LuckySheet";
import { workBookFile, coreFile, appFile, stylesFile, sharedStringsFile, numFmtDefault, theme1File, calcChainFile, workbookRels } from "../common/constant";
import { ReadXml } from "./ReadXml";
import { getXmlAttibute } from "../common/method";
import { LuckyFileBase, LuckyFileInfo, LuckySheetBase, LuckySheetCelldataBase } from "./LuckyBase";
var LuckyFile = /** @class */ (function (_super) {
    __extends(LuckyFile, _super);
    function LuckyFile(files, fileName) {
        var _this = _super.call(this) || this;
        _this.files = files;
        _this.fileName = fileName;
        _this.readXml = new ReadXml(files);
        _this.getSheetNameList();
        _this.sharedStrings = _this.readXml.getElementsByTagName("sst/si", sharedStringsFile);
        _this.calcChain = _this.readXml.getElementsByTagName("calcChain/c", calcChainFile);
        _this.styles = {};
        _this.styles["cellXfs"] = _this.readXml.getElementsByTagName("cellXfs/xf", stylesFile);
        _this.styles["cellStyleXfs"] = _this.readXml.getElementsByTagName("cellStyleXfs/xf", stylesFile);
        _this.styles["cellStyles"] = _this.readXml.getElementsByTagName("cellStyles/cellStyle", stylesFile);
        _this.styles["fonts"] = _this.readXml.getElementsByTagName("fonts/font", stylesFile);
        _this.styles["fills"] = _this.readXml.getElementsByTagName("fills/fill", stylesFile);
        _this.styles["borders"] = _this.readXml.getElementsByTagName("borders/border", stylesFile);
        _this.styles["clrScheme"] = _this.readXml.getElementsByTagName("a:clrScheme/a:dk1|a:lt1|a:dk2|a:lt2|a:accent1|a:accent2|a:accent3|a:accent4|a:accent5|a:accent6|a:hlink|a:folHlink", theme1File);
        _this.styles["indexedColors"] = _this.readXml.getElementsByTagName("colors/indexedColors/rgbColor", stylesFile);
        _this.styles["mruColors"] = _this.readXml.getElementsByTagName("colors/mruColors/color", stylesFile);
        var numfmts = _this.readXml.getElementsByTagName("numFmt/numFmt", stylesFile);
        var numFmtDefaultC = numFmtDefault;
        for (var i = 0; i < numfmts.length; i++) {
            var attrList = numfmts[i].attributeList;
            var numfmtid = getXmlAttibute(attrList, "numFmtId", "49");
            var formatcode = getXmlAttibute(attrList, "formatCode", "@");
            // console.log(numfmtid, formatcode);
            if (!(numfmtid in numFmtDefault)) {
                numFmtDefaultC[numfmtid] = formatcode;
            }
        }
        // console.log(JSON.stringify(numFmtDefaultC), numfmts);
        _this.styles["numfmts"] = numFmtDefaultC;
        return _this;
    }
    /**
    * @return All sheet name of workbook
    */
    LuckyFile.prototype.getSheetNameList = function () {
        var workbookRelList = this.readXml.getElementsByTagName("Relationships/Relationship", workbookRels);
        if (workbookRelList == null) {
            return;
        }
        var regex = new RegExp("worksheets/[^/]*?.xml");
        var sheetNames = {};
        for (var i = 0; i < workbookRelList.length; i++) {
            var rel = workbookRelList[i], attrList = rel.attributeList;
            var id = attrList["Id"], target = attrList["Target"];
            if (regex.test(target)) {
                sheetNames[id] = "xl/" + target;
            }
        }
        this.sheetNameList = sheetNames;
    };
    /**
    * @param sheetName WorkSheet'name
    * @return sheet file name and path in zip
    */
    LuckyFile.prototype.getSheetFileBysheetId = function (sheetId) {
        // for(let i=0;i<this.sheetNameList.length;i++){
        //     let sheetFileName = this.sheetNameList[i];
        //     if(sheetFileName.indexOf("sheet"+sheetId)>-1){
        //         return sheetFileName;
        //     }
        // }
        return this.sheetNameList[sheetId];
    };
    /**
    * @return workBook information
    */
    LuckyFile.prototype.getWorkBookInfo = function () {
        var Company = this.readXml.getElementsByTagName("Company", appFile);
        var AppVersion = this.readXml.getElementsByTagName("AppVersion", appFile);
        var creator = this.readXml.getElementsByTagName("dc:creator", coreFile);
        var lastModifiedBy = this.readXml.getElementsByTagName("cp:lastModifiedBy", coreFile);
        var created = this.readXml.getElementsByTagName("dcterms:created", coreFile);
        var modified = this.readXml.getElementsByTagName("dcterms:modified", coreFile);
        this.info = new LuckyFileInfo();
        this.info.name = this.fileName;
        this.info.creator = creator.length > 0 ? creator[0].value : "";
        this.info.lastmodifiedby = lastModifiedBy.length > 0 ? lastModifiedBy[0].value : "";
        this.info.createdTime = created.length > 0 ? created[0].value : "";
        this.info.modifiedTime = modified.length > 0 ? modified[0].value : "";
        this.info.company = Company.length > 0 ? Company[0].value : "";
        this.info.appversion = AppVersion.length > 0 ? AppVersion[0].value : "";
    };
    /**
    * @return All sheet , include whole information
    */
    LuckyFile.prototype.getSheetsFull = function (isInitialCell) {
        if (isInitialCell === void 0) { isInitialCell = true; }
        var sheets = this.readXml.getElementsByTagName("sheets/sheet", workBookFile);
        var sheetList = {};
        for (var key in sheets) {
            var sheet = sheets[key];
            sheetList[sheet.attributeList.name] = sheet.attributeList["sheetId"];
        }
        this.sheets = [];
        var order = 0;
        for (var key in sheets) {
            var sheet = sheets[key];
            var sheetName = sheet.attributeList.name;
            var sheetId = sheet.attributeList["sheetId"];
            var rid = sheet.attributeList["r:id"];
            var sheetFile = this.getSheetFileBysheetId(rid);
            if (sheetFile != null) {
                this.sheets.push(new LuckySheet(sheetName, sheetId, order, sheetFile, this.readXml, sheetList, this.styles, this.sharedStrings, this.calcChain, isInitialCell));
                order++;
            }
        }
    };
    /**
    * @return All sheet base information widthout cell and config
    */
    LuckyFile.prototype.getSheetsWithoutCell = function () {
        this.getSheetsFull(false);
    };
    /**
    * @return LuckySheet file json
    */
    LuckyFile.prototype.Parse = function () {
        // let xml = this.readXml;
        // for(let key in this.sheetNameList){
        //     let sheetName=this.sheetNameList[key];
        //     let sheetColumns = xml.getElementsByTagName("row/c/f", sheetName);
        //     console.log(sheetColumns);
        // }
        // return "";
        this.getWorkBookInfo();
        this.getSheetsFull();
        // for(let i=0;i<this.sheets.length;i++){
        //     let sheet = this.sheets[i];
        //     let _borderInfo = sheet.config._borderInfo;
        //     if(_borderInfo==null){
        //         continue;
        //     }
        //     let _borderInfoKeys = Object.keys(_borderInfo);
        //     _borderInfoKeys.sort();
        //     for(let a=0;a<_borderInfoKeys.length;a++){
        //         let key = parseInt(_borderInfoKeys[a]);
        //         let b = _borderInfo[key];
        //         if(b.cells.length==0){
        //             continue;
        //         }
        //         if(sheet.config.borderInfo==null){
        //             sheet.config.borderInfo = [];
        //         }
        //         sheet.config.borderInfo.push(b);
        //     }
        // }
        return this.toJsonString(this);
    };
    LuckyFile.prototype.toJsonString = function (file) {
        var LuckyOutPutFile = new LuckyFileBase();
        LuckyOutPutFile.info = file.info;
        LuckyOutPutFile.sheets = [];
        file.sheets.forEach(function (sheet) {
            var sheetout = new LuckySheetBase();
            //let attrName = ["name","color","config","index","status","order","row","column","luckysheet_select_save","scrollLeft","scrollTop","zoomRatio","showGridLines","defaultColWidth","defaultRowHeight","celldata","chart","isPivotTable","pivotTable","luckysheet_conditionformat_save","freezen","calcChain"];
            if (sheet.name != null) {
                sheetout.name = sheet.name;
            }
            if (sheet.color != null) {
                sheetout.color = sheet.color;
            }
            if (sheet.config != null) {
                sheetout.config = sheet.config;
                // if(sheetout.config._borderInfo!=null){
                //     delete sheetout.config._borderInfo;
                // }
            }
            if (sheet.index != null) {
                sheetout.index = sheet.index;
            }
            if (sheet.status != null) {
                sheetout.status = sheet.status;
            }
            if (sheet.order != null) {
                sheetout.order = sheet.order;
            }
            if (sheet.row != null) {
                sheetout.row = sheet.row;
            }
            if (sheet.column != null) {
                sheetout.column = sheet.column;
            }
            if (sheet.luckysheet_select_save != null) {
                sheetout.luckysheet_select_save = sheet.luckysheet_select_save;
            }
            if (sheet.scrollLeft != null) {
                sheetout.scrollLeft = sheet.scrollLeft;
            }
            if (sheet.scrollTop != null) {
                sheetout.scrollTop = sheet.scrollTop;
            }
            if (sheet.zoomRatio != null) {
                sheetout.zoomRatio = sheet.zoomRatio;
            }
            if (sheet.showGridLines != null) {
                sheetout.showGridLines = sheet.showGridLines;
            }
            if (sheet.defaultColWidth != null) {
                sheetout.defaultColWidth = sheet.defaultColWidth;
            }
            if (sheet.defaultRowHeight != null) {
                sheetout.defaultRowHeight = sheet.defaultRowHeight;
            }
            if (sheet.celldata != null) {
                // sheetout.celldata = sheet.celldata;
                sheetout.celldata = [];
                sheet.celldata.forEach(function (cell) {
                    var cellout = new LuckySheetCelldataBase();
                    cellout.r = cell.r;
                    cellout.c = cell.c;
                    cellout.v = cell.v;
                    sheetout.celldata.push(cellout);
                });
            }
            if (sheet.chart != null) {
                sheetout.chart = sheet.chart;
            }
            if (sheet.isPivotTable != null) {
                sheetout.isPivotTable = sheet.isPivotTable;
            }
            if (sheet.pivotTable != null) {
                sheetout.pivotTable = sheet.pivotTable;
            }
            if (sheet.luckysheet_conditionformat_save != null) {
                sheetout.luckysheet_conditionformat_save = sheet.luckysheet_conditionformat_save;
            }
            if (sheet.freezen != null) {
                sheetout.freezen = sheet.freezen;
            }
            if (sheet.calcChain != null) {
                sheetout.calcChain = sheet.calcChain;
            }
            LuckyOutPutFile.sheets.push(sheetout);
        });
        return JSON.stringify(LuckyOutPutFile);
    };
    return LuckyFile;
}(LuckyFileBase));
export { LuckyFile };
