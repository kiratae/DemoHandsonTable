/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { FunctionPlugin, FunctionPluginDefinition } from './plugin/FunctionPlugin';
import { Interpreter } from './Interpreter';
import { Maybe } from '../Maybe';
import { Config } from '../Config';
import { TranslationSet } from '../i18n';
export declare type FunctionTranslationsPackage = Record<string, TranslationSet>;
export declare class FunctionRegistry {
    private config;
    static plugins: Map<string, FunctionPluginDefinition>;
    private static readonly _protectedPlugins;
    static registerFunctionPlugin(plugin: FunctionPluginDefinition, translations?: FunctionTranslationsPackage): void;
    static registerFunction(functionId: string, plugin: FunctionPluginDefinition, translations?: FunctionTranslationsPackage): void;
    static unregisterFunction(functionId: string): void;
    static unregisterFunctionPlugin(plugin: FunctionPluginDefinition): void;
    static unregisterAll(): void;
    static getRegisteredFunctionIds(): string[];
    static getPlugins(): FunctionPluginDefinition[];
    static getFunctionPlugin(functionId: string): Maybe<FunctionPluginDefinition>;
    private static loadTranslations;
    private static loadPluginFunctions;
    private static loadPluginFunction;
    private static loadFunctionUnprotected;
    private static functionIsProtected;
    private static protectedFunctions;
    private static protectedPlugins;
    private readonly instancePlugins;
    private readonly functions;
    private readonly volatileFunctions;
    private readonly structuralChangeFunctions;
    private readonly functionsWhichDoesNotNeedArgumentsToBeComputed;
    constructor(config: Config);
    initializePlugins(interpreter: Interpreter): void;
    getFunctionPlugin(functionId: string): Maybe<FunctionPluginDefinition>;
    getFunction(functionId: string): Maybe<[string, FunctionPlugin]>;
    getPlugins(): FunctionPluginDefinition[];
    getRegisteredFunctionIds(): string[];
    doesFunctionNeedArgumentToBeComputed: (functionId: string) => boolean;
    isFunctionVolatile: (functionId: string) => boolean;
    isFunctionDependentOnSheetStructureChange: (functionId: string) => boolean;
    private categorizeFunction;
}
