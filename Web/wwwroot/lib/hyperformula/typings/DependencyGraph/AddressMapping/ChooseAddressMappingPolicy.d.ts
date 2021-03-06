/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { DenseStrategy } from './DenseStrategy';
import { AddressMappingStrategyConstructor } from './IAddressMappingStrategy';
import { SparseStrategy } from './SparseStrategy';
export interface ChooseAddressMapping {
    call(fill: number): AddressMappingStrategyConstructor;
}
export declare class DenseSparseChooseBasedOnThreshold implements ChooseAddressMapping {
    private readonly threshold;
    constructor(threshold: number);
    call(fill: number): typeof DenseStrategy | typeof SparseStrategy;
}
export declare class AlwaysSparse implements ChooseAddressMapping {
    call(): typeof SparseStrategy;
}
export declare class AlwaysDense implements ChooseAddressMapping {
    call(): typeof DenseStrategy;
}
