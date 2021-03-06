/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from './AbsoluteCellRange';
import { SimpleCellAddress } from './Cell';
import { NamedExpressionDependency } from './parser/RelativeDependency';
export declare type CellDependency = SimpleCellAddress | AbsoluteCellRange | NamedExpressionDependency;
