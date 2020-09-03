/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from '../Cell';
import { Ast } from './Ast';
import { ILexerConfig } from './LexerConfig';
import { ParserConfig } from './ParserConfig';
import { NamedExpressions } from '../NamedExpressions';
export declare type SheetMappingFn = (sheetId: number) => string;
export declare class Unparser {
    private readonly config;
    private readonly lexerConfig;
    private readonly sheetMappingFn;
    private readonly namedExpressions;
    constructor(config: ParserConfig, lexerConfig: ILexerConfig, sheetMappingFn: SheetMappingFn, namedExpressions: NamedExpressions);
    unparse(ast: Ast, address: SimpleCellAddress): string;
    private unparseAst;
    private unparseSheetName;
    private formatRange;
}
export declare function formatNumber(number: number, decimalSeparator: string): string;
