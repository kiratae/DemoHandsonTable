/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalCellValue, SimpleCellAddress } from '../Cell';
import { LazilyTransformingAstService } from '../LazilyTransformingAstService';
import { Ast } from '../parser';
/**
 * Represents vertex which keeps formula
 */
export declare class FormulaCellVertex {
    /** Formula in AST format */
    private formula;
    /** Address which this vertex represents */
    cellAddress: SimpleCellAddress;
    version: number;
    /** Most recently computed value of this formula. */
    private cachedCellValue;
    constructor(
    /** Formula in AST format */
    formula: Ast, 
    /** Address which this vertex represents */
    cellAddress: SimpleCellAddress, version: number);
    /**
     * Returns formula stored in this vertex
     */
    getFormula(updatingService: LazilyTransformingAstService): Ast;
    ensureRecentData(updatingService: LazilyTransformingAstService): void;
    /**
     * Returns address of the cell associated with vertex
     */
    getAddress(updatingService: LazilyTransformingAstService): SimpleCellAddress;
    get address(): SimpleCellAddress;
    /**
     * Sets computed cell value stored in this vertex
     */
    setCellValue(cellValue: InternalCellValue): void;
    /**
     * Returns cell value stored in vertex
     */
    getCellValue(): InternalCellValue;
    isComputed(): boolean;
}
