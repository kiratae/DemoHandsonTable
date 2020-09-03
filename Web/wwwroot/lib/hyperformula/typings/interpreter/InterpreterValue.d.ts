/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../AbsoluteCellRange';
import { InternalScalarValue } from '../Cell';
import { DependencyGraph } from '../DependencyGraph';
import { MatrixSize } from '../Matrix';
import { Maybe } from '../Maybe';
export declare class ArrayData {
    readonly size: MatrixSize;
    readonly data: InternalScalarValue[][];
    _hasOnlyNumbers: boolean;
    constructor(size: MatrixSize, data: InternalScalarValue[][], _hasOnlyNumbers: boolean);
    range(): undefined;
    hasOnlyNumbers(): boolean;
    valuesFromTopLeftCorner(): IterableIterator<InternalScalarValue>;
    raw(): InternalScalarValue[][];
    rawNumbers(): number[][];
}
export declare class OnlyRangeData {
    readonly size: MatrixSize;
    readonly _range: AbsoluteCellRange;
    readonly dependencyGraph: DependencyGraph;
    data: Maybe<InternalScalarValue[][]>;
    _hasOnlyNumbers?: boolean;
    constructor(size: MatrixSize, _range: AbsoluteCellRange, dependencyGraph: DependencyGraph);
    raw(): InternalScalarValue[][];
    rawNumbers(): number[][];
    hasOnlyNumbers(): boolean;
    range(): AbsoluteCellRange;
    valuesFromTopLeftCorner(): IterableIterator<InternalScalarValue>;
    private ensureThatComputed;
    private computeDataFromDependencyGraph;
}
export declare type RangeData = ArrayData | OnlyRangeData;
export declare class SimpleRangeValue {
    readonly data: RangeData;
    get size(): MatrixSize;
    static onlyNumbersDataWithRange(data: number[][], size: MatrixSize, _range: AbsoluteCellRange): SimpleRangeValue;
    static onlyNumbersDataWithoutRange(data: number[][], size: MatrixSize): SimpleRangeValue;
    static onlyRange(range: AbsoluteCellRange, dependencyGraph: DependencyGraph): SimpleRangeValue;
    static fromScalar(scalar: InternalScalarValue): SimpleRangeValue;
    constructor(data: RangeData);
    width(): number;
    height(): number;
    raw(): InternalScalarValue[][];
    valuesFromTopLeftCorner(): IterableIterator<InternalScalarValue>;
    numberOfElements(): number;
    hasOnlyNumbers(): boolean;
    rawNumbers(): number[][];
    range(): Maybe<AbsoluteCellRange>;
    sameDimensionsAs(other: SimpleRangeValue): boolean;
}
export declare type InterpreterValue = InternalScalarValue | SimpleRangeValue;
