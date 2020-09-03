/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { Ast, RelativeDependency } from './';
import { FunctionRegistry } from '../interpreter/FunctionRegistry';
export declare const collectDependencies: (ast: Ast, functionRegistry: FunctionRegistry) => RelativeDependency[];
