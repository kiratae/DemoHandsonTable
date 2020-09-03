/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { RelativeDependency } from './';
import { Ast } from './Ast';
import { FunctionRegistry } from '../interpreter/FunctionRegistry';
export interface CacheEntry {
    ast: Ast;
    relativeDependencies: RelativeDependency[];
    hasVolatileFunction: boolean;
    hasStructuralChangeFunction: boolean;
}
export declare class Cache {
    private readonly functionRegistry;
    private cache;
    constructor(functionRegistry: FunctionRegistry);
    set(hash: string, ast: Ast): CacheEntry;
    get(hash: string): CacheEntry | null;
    maybeSetAndThenGet(hash: string, ast: Ast): Ast;
    destroy(): void;
}
export declare const doesContainFunctions: (ast: Ast, functionCriterion: (functionId: string) => boolean) => boolean;
