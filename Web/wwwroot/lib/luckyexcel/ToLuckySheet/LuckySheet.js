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
import { LuckySheetCelldata } from "./LuckyCell";
import { getXmlAttibute, getColumnWidthPixel, fromulaRef, getRowHeightPixel, getcellrange } from "../common/method";
import { getColor } from "./ReadXml";
import { LuckySheetBase, LuckyConfig, LuckysheetCalcChain, LuckySheetConfigMerge } from "./LuckyBase";
var LuckySheet = /** @class */ (function (_super) {
    __extends(LuckySheet, _super);
    function LuckySheet(sheetName, sheetId, sheetOrder, sheetFile, ReadXml, sheets, styles, sharedStrings, calcChain, isInitialCell) {
        if (isInitialCell === void 0) { isInitialCell = false; }
        var _this = 
        //Private
        _super.call(this) || this;
        _this.readXml = ReadXml;
        _this.sheetFile = sheetFile;
        _this.isInitialCell = isInitialCell;
        _this.styles = styles;
        _this.sharedStrings = sharedStrings;
        _this.calcChainEles = calcChain;
        //Output
        _this.name = sheetName;
        _this.index = sheetId;
        _this.order = sheetOrder.toString();
        _this.config = new LuckyConfig();
        _this.celldata = [];
        _this.mergeCells = _this.readXml.getElementsByTagName("mergeCells/mergeCell", sheetFile);
        var clrScheme = _this.styles["clrScheme"];
        var sheetView = _this.readXml.getElementsByTagName("sheetViews/sheetView", sheetFile);
        var showGridLines = "1", tabSelected = "0", zoomScale = "100", activeCell = "A1";
        if (sheetView.length > 0) {
            var attrList = sheetView[0].attributeList;
            showGridLines = getXmlAttibute(attrList, "showGridLines", "1");
            tabSelected = getXmlAttibute(attrList, "tabSelected", "0");
            zoomScale = getXmlAttibute(attrList, "zoomScale", "100");
            // let colorId = getXmlAttibute(attrList, "colorId", "0");
            var selections = sheetView[0].getInnerElements("selection");
            if (selections != null && selections.length > 0) {
                activeCell = getXmlAttibute(selections[0].attributeList, "activeCell", "A1");
                var range = getcellrange(activeCell, sheets, sheetId);
                _this.luckysheet_select_save = [];
                _this.luckysheet_select_save.push(range);
            }
        }
        _this.showGridLines = showGridLines;
        _this.status = tabSelected;
        _this.zoomRatio = parseInt(zoomScale) / 100;
        var tabColors = _this.readXml.getElementsByTagName("sheetPr/tabColor", sheetFile);
        if (tabColors != null && tabColors.length > 0) {
            var tabColor = tabColors[0], attrList = tabColor.attributeList;
            if (attrList.rgb != null) {
                var tc = getColor(tabColor, _this.styles, "b");
                _this.color = tc;
            }
        }
        var sheetFormatPr = _this.readXml.getElementsByTagName("sheetFormatPr", sheetFile);
        var defaultColWidth = "8.38", defaultRowHeight = "defaultRowHeight";
        if (sheetFormatPr.length > 0) {
            var attrList = sheetFormatPr[0].attributeList;
            defaultColWidth = getXmlAttibute(attrList, "defaultColWidth", "8.38");
            defaultRowHeight = getXmlAttibute(attrList, "defaultRowHeight", "19");
        }
        _this.defaultColWidth = getColumnWidthPixel(parseFloat(defaultColWidth));
        _this.defaultRowHeight = getRowHeightPixel(parseFloat(defaultRowHeight));
        _this.generateConfigColumnLenAndHidden();
        _this.generateConfigRowLenAndHiddenAddCell();
        if (_this.formulaRefList != null) {
            for (var key in _this.formulaRefList) {
                var funclist = _this.formulaRefList[key];
                var mainFunc = funclist["mainRef"], mainCellValue = mainFunc.cellValue;
                var formulaTxt = mainFunc.fv;
                var mainR = mainCellValue.r, mainC = mainCellValue.c;
                // let refRange = getcellrange(ref);
                for (var name_1 in funclist) {
                    if (name_1 == "mainRef") {
                        continue;
                    }
                    var funcValue = funclist[name_1], cellValue = funcValue.cellValue;
                    if (cellValue == null) {
                        continue;
                    }
                    var r = cellValue.r, c = cellValue.c;
                    var func = formulaTxt;
                    var offsetRow = r - mainR, offsetCol = c - mainC;
                    if (offsetRow > 0) {
                        func = "=" + fromulaRef.functionCopy(func, "down", offsetRow);
                    }
                    else if (offsetRow < 0) {
                        func = "=" + fromulaRef.functionCopy(func, "up", Math.abs(offsetRow));
                    }
                    if (offsetCol > 0) {
                        func = "=" + fromulaRef.functionCopy(func, "right", offsetCol);
                    }
                    else if (offsetCol < 0) {
                        func = "=" + fromulaRef.functionCopy(func, "left", Math.abs(offsetCol));
                    }
                    // console.log(offsetRow, offsetCol, func);
                    cellValue.v.f = func;
                }
            }
        }
        if (_this.calcChain == null) {
            _this.calcChain = [];
        }
        for (var c = 0; c < _this.calcChainEles.length; c++) {
            var calcChainEle = _this.calcChainEles[c], attrList = calcChainEle.attributeList;
            if (attrList.i != sheetId) {
                continue;
            }
            var r = attrList.r, i = attrList.i, l = attrList.l, s = attrList.s, a = attrList.a, t = attrList.t;
            var range = getcellrange(r);
            var chain = new LuckysheetCalcChain();
            chain.r = range.row[0];
            chain.c = range.column[0];
            chain.index = _this.index;
            _this.calcChain.push(chain);
        }
        if (_this.mergeCells != null) {
            for (var i = 0; i < _this.mergeCells.length; i++) {
                var merge = _this.mergeCells[i], attrList = merge.attributeList;
                var ref = attrList.ref;
                if (ref == null) {
                    continue;
                }
                var range = getcellrange(ref, sheets, sheetId);
                var mergeValue = new LuckySheetConfigMerge();
                mergeValue.r = range.row[0];
                mergeValue.c = range.column[0];
                mergeValue.rs = range.row[1] - range.row[0] + 1;
                mergeValue.cs = range.column[1] - range.column[0] + 1;
                if (_this.config.merge == null) {
                    _this.config.merge = {};
                }
                _this.config.merge[range.row[0] + "_" + range.column[0]] = mergeValue;
            }
        }
        return _this;
    }
    /**
    * @desc This will convert cols/col to luckysheet config of column'width
    */
    LuckySheet.prototype.generateConfigColumnLenAndHidden = function () {
        var cols = this.readXml.getElementsByTagName("cols/col", this.sheetFile);
        for (var i = 0; i < cols.length; i++) {
            var col = cols[i], attrList = col.attributeList;
            var min = getXmlAttibute(attrList, "min", null);
            var max = getXmlAttibute(attrList, "max", null);
            var width = getXmlAttibute(attrList, "width", null);
            var hidden = getXmlAttibute(attrList, "hidden", null);
            var customWidth = getXmlAttibute(attrList, "customWidth", null);
            if (min == null || max == null) {
                continue;
            }
            var minNum = parseInt(min) - 1, maxNum = parseInt(max) - 1, widthNum = parseFloat(width);
            for (var m = minNum; m <= maxNum; m++) {
                if (width != null) {
                    if (this.config.columnlen == null) {
                        this.config.columnlen = {};
                    }
                    this.config.columnlen[m] = getColumnWidthPixel(widthNum);
                }
                if (hidden == "1") {
                    if (this.config.colhidden == null) {
                        this.config.colhidden = {};
                    }
                    this.config.colhidden[m] = 0;
                    if (this.config.columnlen) {
                        delete this.config.columnlen[m];
                    }
                }
                if (customWidth != null) {
                    if (this.config.customWidth == null) {
                        this.config.customWidth = {};
                    }
                    this.config.customWidth[m] = 1;
                }
            }
        }
    };
    /**
    * @desc This will convert cols/col to luckysheet config of column'width
    */
    LuckySheet.prototype.generateConfigRowLenAndHiddenAddCell = function () {
        var rows = this.readXml.getElementsByTagName("sheetData/row", this.sheetFile);
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i], attrList = row.attributeList;
            var rowNo = getXmlAttibute(attrList, "r", null);
            var height = getXmlAttibute(attrList, "ht", null);
            var hidden = getXmlAttibute(attrList, "hidden", null);
            var customHeight = getXmlAttibute(attrList, "customHeight", null);
            if (rowNo == null) {
                continue;
            }
            var rowNoNum = parseInt(rowNo) - 1;
            if (height != null) {
                var heightNum = parseFloat(height);
                if (this.config.rowlen == null) {
                    this.config.rowlen = {};
                }
                this.config.rowlen[rowNoNum] = getRowHeightPixel(heightNum);
            }
            if (hidden == "1") {
                if (this.config.rowhidden == null) {
                    this.config.rowhidden = {};
                }
                this.config.rowhidden[rowNoNum] = 0;
                if (this.config.rowlen) {
                    delete this.config.rowlen[rowNoNum];
                }
            }
            if (customHeight != null) {
                if (this.config.customHeight == null) {
                    this.config.customHeight = {};
                }
                this.config.customHeight[rowNoNum] = 1;
            }
            if (this.isInitialCell) {
                var cells = row.getInnerElements("c");
                for (var key in cells) {
                    var cell = cells[key];
                    var cellValue = new LuckySheetCelldata(cell, this.styles, this.sharedStrings, this.mergeCells, this.sheetFile, this.readXml);
                    if (cellValue._borderObject != null) {
                        if (this.config.borderInfo == null) {
                            this.config.borderInfo = [];
                        }
                        this.config.borderInfo.push(cellValue._borderObject);
                        delete cellValue._borderObject;
                    }
                    // let borderId = cellValue._borderId;
                    // if(borderId!=null){
                    //     let borders = this.styles["borders"] as Element[];
                    //     if(this.config._borderInfo==null){
                    //         this.config._borderInfo = {};
                    //     }
                    //     if( borderId in this.config._borderInfo){
                    //         this.config._borderInfo[borderId].cells.push(cellValue.r + "_" + cellValue.c);
                    //     }
                    //     else{
                    //         let border = borders[borderId];
                    //         let borderObject = new LuckySheetborderInfoCellForImp();
                    //         borderObject.rangeType = "cellGroup";
                    //         borderObject.cells = [];
                    //         let borderCellValue = new LuckySheetborderInfoCellValue();
                    //         let lefts = border.getInnerElements("left");
                    //         let rights = border.getInnerElements("right");
                    //         let tops = border.getInnerElements("top");
                    //         let bottoms = border.getInnerElements("bottom");
                    //         let diagonals = border.getInnerElements("diagonal");
                    //         let left = this.getBorderInfo(lefts);
                    //         let right = this.getBorderInfo(rights);
                    //         let top = this.getBorderInfo(tops);
                    //         let bottom = this.getBorderInfo(bottoms);
                    //         let diagonal = this.getBorderInfo(diagonals);
                    //         let isAdd = false;
                    //         if(left!=null && left.color!=null){
                    //             borderCellValue.l = left;
                    //             isAdd = true;
                    //         }
                    //         if(right!=null && right.color!=null){
                    //             borderCellValue.r = right;
                    //             isAdd = true;
                    //         }
                    //         if(top!=null && top.color!=null){
                    //             borderCellValue.t = top;
                    //             isAdd = true;
                    //         }
                    //         if(bottom!=null && bottom.color!=null){
                    //             borderCellValue.b = bottom;
                    //             isAdd = true;
                    //         }
                    //         if(isAdd){
                    //             borderObject.value = borderCellValue;
                    //             this.config._borderInfo[borderId] = borderObject;
                    //         }
                    //     }
                    // }
                    if (cellValue._formulaType == "shared") {
                        if (this.formulaRefList == null) {
                            this.formulaRefList = {};
                        }
                        if (this.formulaRefList[cellValue._formulaSi] == null) {
                            this.formulaRefList[cellValue._formulaSi] = {};
                        }
                        var fv = void 0;
                        if (cellValue.v != null) {
                            fv = cellValue.v.f;
                        }
                        var refValue = {
                            t: cellValue._formulaType,
                            ref: cellValue._fomulaRef,
                            si: cellValue._formulaSi,
                            fv: fv,
                            cellValue: cellValue
                        };
                        if (cellValue._fomulaRef != null) {
                            this.formulaRefList[cellValue._formulaSi]["mainRef"] = refValue;
                        }
                        else {
                            this.formulaRefList[cellValue._formulaSi][cellValue.r + "_" + cellValue.c] = refValue;
                        }
                        // console.log(refValue, this.formulaRefList);
                    }
                    this.celldata.push(cellValue);
                }
            }
        }
    };
    return LuckySheet;
}(LuckySheetBase));
export { LuckySheet };
