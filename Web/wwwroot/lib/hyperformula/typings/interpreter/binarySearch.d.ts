/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../AbsoluteCellRange';
import { InternalScalarValue } from '../Cell';
import { DependencyGraph } from '../DependencyGraph';
export declare function rangeLowerBound(range: AbsoluteCellRange, key: InternalScalarValue, dependencyGraph: DependencyGraph): number;
export declare function lowerBound(values: InternalScalarValue[], key: any): number;
export declare function compare(left: any, right: any): number;
