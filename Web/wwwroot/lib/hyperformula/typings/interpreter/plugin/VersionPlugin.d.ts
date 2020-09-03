/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalCellValue } from '../../Cell';
import { FunctionPlugin } from './FunctionPlugin';
export declare class VersionPlugin extends FunctionPlugin {
    static implementedFunctions: {
        VERSION: {
            method: string;
        };
    };
    version(): InternalCellValue;
}
