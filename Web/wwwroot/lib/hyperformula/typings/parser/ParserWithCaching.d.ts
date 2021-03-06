/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { IToken } from 'chevrotain';
import { SimpleCellAddress } from '../Cell';
import { RelativeDependency } from './';
import { SheetMappingFn } from './addressRepresentationConverters';
import { Ast, ParsingError } from './Ast';
import { IExtendedToken } from './FormulaParser';
import { ParserConfig } from './ParserConfig';
import { FunctionRegistry } from '../interpreter/FunctionRegistry';
export interface ParsingResult {
    ast: Ast;
    errors: ParsingError[];
    dependencies: RelativeDependency[];
    hasVolatileFunction: boolean;
    hasStructuralChangeFunction: boolean;
}
/**
 * Parses formula using caching if feasible.
 */
export declare class ParserWithCaching {
    private readonly config;
    private readonly functionRegistry;
    private readonly sheetMapping;
    statsCacheUsed: number;
    private cache;
    private lexer;
    private readonly lexerConfig;
    private formulaParser;
    constructor(config: ParserConfig, functionRegistry: FunctionRegistry, sheetMapping: SheetMappingFn);
    /**
     * Parses a formula.
     *
     * @param text - formula to parse
     * @param formulaAddress - address with regard to which formula should be parsed. Impacts computed addresses in R0C0 format.
     */
    parse(text: string, formulaAddress: SimpleCellAddress): ParsingResult;
    fetchCachedResultForAst(ast: Ast): ParsingResult;
    fetchCachedResult(hash: string): ParsingResult;
    computeHashFromTokens(tokens: IToken[], baseAddress: SimpleCellAddress): string;
    rememberNewAst(ast: Ast): Ast;
    computeHashFromAst(ast: Ast): string;
    destroy(): void;
    private computeHashOfAstNode;
}
export declare function bindWhitespacesToTokens(tokens: IToken[]): IExtendedToken[];
