/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError } from '../Cell';
export declare type ValueCellVertexValue = number | boolean | string | CellError;
/**
 * Represents vertex which keeps static cell value
 */
export declare class ValueCellVertex {
    /** Static cell value. */
    private cellValue;
    constructor(cellValue: ValueCellVertexValue);
    /**
     * Returns cell value stored in vertex
     */
    getCellValue(): ValueCellVertexValue;
    /**
     * Sets computed cell value stored in this vertex
     */
    setCellValue(cellValue: ValueCellVertexValue): void;
}
