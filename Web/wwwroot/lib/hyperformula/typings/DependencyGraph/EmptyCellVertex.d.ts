/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { EmptyValueType, SimpleCellAddress } from '../Cell';
/**
 * Represents singleton vertex bound to all empty cells
 */
export declare class EmptyCellVertex {
    address: SimpleCellAddress;
    constructor(address: SimpleCellAddress);
    /**
     * Retrieves cell value bound to that singleton
     */
    getCellValue(): EmptyValueType;
}
