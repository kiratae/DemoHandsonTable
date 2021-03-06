/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from './Cell';
import { Ast, ParserWithCaching } from './parser';
import { Statistics } from './statistics/Statistics';
import { UndoRedo } from './UndoRedo';
import { FormulaTransformer } from './dependencyTransformers/Transformer';
export declare class LazilyTransformingAstService {
    private readonly stats;
    parser?: ParserWithCaching;
    undoRedo?: UndoRedo;
    private transformations;
    constructor(stats: Statistics);
    version(): number;
    addTransformation(transformation: FormulaTransformer): number;
    applyTransformations(ast: Ast, address: SimpleCellAddress, version: number): [Ast, SimpleCellAddress, number];
    getTransformationsFrom(version: number, filter?: (transformation: FormulaTransformer) => boolean): IterableIterator<FormulaTransformer>;
    destroy(): void;
}
