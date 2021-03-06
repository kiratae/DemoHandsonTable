/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { ErrorType } from './Cell';
import { DateTime, SimpleDate, SimpleDateTime, SimpleTime } from './DateTimeHelper';
import { ChooseAddressMapping } from './DependencyGraph/AddressMapping/ChooseAddressMappingPolicy';
import { TranslationPackage } from './i18n';
import { Maybe } from './Maybe';
import { ParserConfig } from './parser/ParserConfig';
import { LicenseKeyValidityState } from './helpers/licenseKeyValidator';
import { FunctionPluginDefinition } from './interpreter/plugin/FunctionPlugin';
declare type GPUMode = 'gpu' | 'cpu' | 'dev';
export interface ConfigParams {
    /**
     * Specifies if the string comparison is accent sensitive or not.
     * Applies to comparison operators only.
     *
     * @default false
     *
     * @category String
     */
    accentSensitive: boolean;
    /**
     * Specifies if the string comparison is case-sensitive or not.
     * Applies to comparison operators only.
     *
     * @default false
     *
     * @category String
     */
    caseSensitive: boolean;
    /**
     * Allows to define if upper case or lower case should sort first.
     * When set to `false` uses the locale's default.
     *
     * @default 'lower'
     *
     * @category String
     */
    caseFirst: 'upper' | 'lower' | 'false';
    /**
     * Determines which address mapping policy will be used. Built in implementations:
     * - DenseSparseChooseBasedOnThreshold - will choose address mapping for each sheet separately based on fill ratio.
     * - AlwaysDense - will use DenseStrategy for all sheets.
     * - AlwaysSparse - will use SparseStrategy for all sheets.
     *
     * @default AlwaysDense
     *
     * @category Engine
     */
    chooseAddressMappingPolicy: ChooseAddressMapping;
    /**
     * A list of date formats that are supported by date parsing functions.
     *
     * The separator is ignored and it can be any of '-' (dash), ' ' (empty space), '/' (slash).
     *
     * Any order of YY, MM, DD is accepted as a date, and YY can be replaced with YYYY.
     *
     * @default ['MM/DD/YYYY', 'MM/DD/YY']
     *
     * @category Date and Time
     */
    dateFormats: string[];
    /**
     * A list of time formats that are supported by time parsing functions.
     *
     * The separator is ':' (colon).
     *
     * Any configuration of at least two of hh, mm, ss is accepted as a time, and they can be put in any order.
     *
     * @default ['hh:mm', 'hh:mm:ss.sss']
     *
     * @category Date and Time
     */
    timeFormats: string[];
    /**
     * A separator character used to separate arguments of procedures in formulas. Must be different from [[decimalSeparator]] and [[thousandSeparator]].
     *
     * @default ','
     *
     * @category Formula Syntax
     */
    functionArgSeparator: string;
    /**
     * A decimal separator used for parsing numeric literals.
     * Can be either '.' (period) or ',' (comma) and must be different from [[thousandSeparator]] and [[functionArgSeparator]].
     *
     * @default '.'
     *
     * @category Number
     */
    decimalSeparator: '.' | ',';
    /**
     * Code for translation package with translations of function and error names.
     *
     * @default 'enGB'
     *
     * @category Formula Syntax
     */
    language: string;
    /**
     * A license key of HyperFormula accepts the following values:
     * * `agpl-v3` string if you want to use the software on AGPL v3 license terms,
     * * `non-commercial-and-evaluation` string if you want to use our limited versions,
     * * a valid license key string, if you bought the commercial license.
     *
     * For more details visit [this guide](/guide/license-key.html)
     *
     * @default undefined
     *
     * @category License
     */
    licenseKey: string;
    /**
     * A thousand separator used for parsing numeric literals.
     * Can be either empty, ',' (comma) or ' ' (empty space) and must be different from [[decimalSeparator]] and [[functionArgSeparator]].
     *
     * @default ''
     *
     * @category Number
     */
    thousandSeparator: '' | ',' | ' ' | '.';
    /**
     * A list of additional function plugins to use by formula interpreter.
     *
     * @default []
     *
     * @category Formula Syntax
     */
    functionPlugins: any[];
    /**
     * Allows to set GPU or CPU for use in matrix calculations.
     * When set to 'gpu' it will try to use GPU for matrix calculations. Setting it to 'cpu' will force CPU usage.
     * Other values should be used for debugging purposes only. More info can be found in GPU.js documentation.
     *
     * @default 'gpu'
     *
     * @category Engine
     */
    gpuMode: GPUMode;
    /**
     * Specifies whether punctuation should be ignored in string comparison.
     *
     * @default false
     *
     * @category String
     */
    ignorePunctuation: boolean;
    /**
     * Preserves an option for setting 1900 as a leap year.
     * 1900 was not a leap year, but in Lotus 1-2-3 it was faulty interpreted as a leap year.
     * Set to `true` for compatibility with Lotus 1-2-3 and Excel. See [[nullDate]] for complete solution.
     *
     * @default false
     *
     * @category Date and Time
     */
    leapYear1900: boolean;
    /**
     * Sets the locale using a BCP 47 code language tag for language sensitive string comparison.
     *
     * @default 'en'
     *
     * @category String
     */
    localeLang: string;
    /**
     * Enables numeric matrix detection feature when set to 'true'.
     * During build phase each rectangular area of numbers will be treated as one matrix vertex in order to optimize further calculations.
     * Some CRUD operations may break numeric matrices into individual vertices if needed.
     *
     * @default true
     *
     * @category Engine
     */
    matrixDetection: boolean;
    /**
     * Specifies how many cells an area must have in order to be treated as a matrix. Relevant only if [[matrixDetection]] is set to `true`.
     *
     * @default 100
     *
     * @category Engine
     */
    matrixDetectionThreshold: number;
    /**
     * Two-digit values when interpreted as a year can be either 19xx or 20xx.
     * If `xx <= nullYear` its latter, otherwise its former.
     *
     * @default 30
     *
     * @category Date and Time
     */
    nullYear: number;
    /**
     * Allows to provide a function that takes a string representing date-time and parses it into an actual date-time.
     *
     * @default defaultParseToDateTime
     *
     * @category Date and Time
     */
    parseDateTime: (dateTimeString: string, dateFormat: string, timeFormat: string) => Maybe<DateTime>;
    /**
     * Controls how far two numerical values need to be from each other to be treated as non-equal.
     * `a` and `b` are equal if they are of the same sign and:
     * `abs(a) <= (1+precisionEpsilon) * abs(b)`
     * and
     * `abs(b) <= (1+precisionEpsilon) * abs(a)`.
     * It also controls snap-to-zero behavior for additions/subtractions:
     * for `c=a+b` or `c=a-b`, if `abs(c) <= precisionEpsilon * abs(a)`, then `c` is set to `0`
     *
     * @default 1e-13
     *
     * @category Number
     */
    precisionEpsilon: number;
    /**
     * Sets how precise the calculation should be.
     * Numerical outputs are rounded to `precisionRounding` many digits after the decimal.
     *
     * @default 14
     *
     * @category Number
     */
    precisionRounding: number;
    /**
     * Allows to provide a function that takes date and prints it into string.
     *
     * @default defaultStringifyDateTime
     *
     * @category Date and Time
     */
    stringifyDateTime: (dateTime: SimpleDateTime, dateTimeFormat: string) => Maybe<string>;
    /**
     * Allows to provide a function that takes time duration prints it into string.
     *
     * @default defaultStringifyDuration
     *
     * @category Date and Time
     */
    stringifyDuration: (time: SimpleTime, timeFormat: string) => Maybe<string>;
    /**
     * Sets the rounding.
     * If `false`, no rounding happens, and numbers are equal if and only if they are truly identical value (see: [[precisionEpsilon]]).
     *
     * @default true
     *
     * @category Number
     */
    smartRounding: boolean;
    /**
     * Switches column search strategy from binary search to column index.
     * Used by VLOOKUP and MATCH functions.
     * Using column index may improve time efficiency but it will increase memory usage.
     * In some scenarios column index may fall back to binary search despite this flag.
     *
     * @default false
     *
     * @category Engine
     */
    useColumnIndex: boolean;
    /**
     * Enables gathering engine statistics and timings. Useful for testing and benchmarking.
     *
     * @default false
     *
     * @category Engine
     */
    useStats: boolean;
    /**
     * Determines minimum number of elements a range must have in order to use binary search.
     * Shorter ranges will be searched naively.
     * Used by VLOOKUP and MATCH functions.
     *
     * @default 20
     *
     * @category Engine
     */
    vlookupThreshold: number;
    /**
     * Allows to set a specific date from which the number of days will be counted.
     * Dates are represented internally as a number of days that passed since this `nullDate`.
     *
     * @default {year: 1899, month: 12, day: 30}
     *
     * @category Date and Time
     */
    nullDate: SimpleDate;
    /**
     * A number of kept elements in undo history.
     *
     * @default 20
     *
     * @category Undo and Redo
     */
    undoLimit: number;
    /**
     * If set true, then criterions in functions (SUMIF, COUNTIF, ...) can use regular expressions.
     *
     * @default false
     * @category String
     */
    useRegularExpressions: boolean;
    /**
     * If set true, then criterions in functions (SUMIF, COUNTIF, ...) can use wildcards '*' and '?'.
     *
     * @default true
     * @category String
     */
    useWildcards: boolean;
    /**
     * Whether criterions in functions require whole cell to match the pattern, or just a subword.
     *
     * @default true
     * @category String
     */
    matchWholeCell: boolean;
    /**
     * Maximum number of rows
     *
     * @default 40,000
     *
     * @category Engine
     * */
    maxRows: number;
    /**
     * Maximum number of columns
     *
     * @default 18,278
     *
     * @category Engine
     * */
    maxColumns: number;
}
export declare class Config implements ConfigParams, ParserConfig {
    #private;
    static defaultConfig: ConfigParams;
    /** @inheritDoc */
    readonly caseSensitive: boolean;
    /** @inheritDoc */
    readonly chooseAddressMappingPolicy: ChooseAddressMapping;
    /** @inheritDoc */
    readonly accentSensitive: boolean;
    /** @inheritDoc */
    readonly caseFirst: 'upper' | 'lower' | 'false';
    /** @inheritDoc */
    readonly dateFormats: string[];
    /** @inheritDoc */
    readonly timeFormats: string[];
    /** @inheritDoc */
    readonly functionArgSeparator: string;
    /** @inheritDoc */
    readonly decimalSeparator: '.' | ',';
    /** @inheritDoc */
    readonly thousandSeparator: '' | ',' | ' ' | '.';
    /** @inheritDoc */
    readonly language: string;
    /** @inheritDoc */
    readonly licenseKey: string;
    /** @inheritDoc */
    readonly functionPlugins: FunctionPluginDefinition[];
    /** @inheritDoc */
    readonly gpuMode: GPUMode;
    /** @inheritDoc */
    readonly leapYear1900: boolean;
    /** @inheritDoc */
    readonly matrixDetection: boolean;
    /** @inheritDoc */
    readonly ignorePunctuation: boolean;
    /** @inheritDoc */
    readonly localeLang: string;
    /** @inheritDoc */
    readonly matrixDetectionThreshold: number;
    /** @inheritDoc */
    readonly nullYear: number;
    /** @inheritDoc */
    readonly parseDateTime: (dateString: string, dateFormats: string) => Maybe<SimpleDateTime>;
    /** @inheritDoc */
    readonly stringifyDateTime: (date: SimpleDateTime, formatArg: string) => Maybe<string>;
    /** @inheritDoc */
    readonly stringifyDuration: (time: SimpleTime, formatArg: string) => Maybe<string>;
    /** @inheritDoc */
    readonly precisionEpsilon: number;
    /** @inheritDoc */
    readonly precisionRounding: number;
    /** @inheritDoc */
    readonly smartRounding: boolean;
    /** @inheritDoc */
    readonly useColumnIndex: boolean;
    /** @inheritDoc */
    readonly useStats: boolean;
    /** @inheritDoc */
    readonly vlookupThreshold: number;
    /** @inheritDoc */
    readonly nullDate: SimpleDate;
    /** @inheritDoc */
    readonly undoLimit: number;
    /**
     * Built automatically based on translation package.
     *
     * @internal
     */
    readonly errorMapping: Record<string, ErrorType>;
    /** @inheritDoc */
    readonly maxRows: number;
    /** @inheritDoc */
    readonly maxColumns: number;
    /**
     * Built automatically based on language.
     *
     * @internal
     */
    readonly translationPackage: TranslationPackage;
    readonly useRegularExpressions: boolean;
    readonly useWildcards: boolean;
    readonly matchWholeCell: boolean;
    /**
     * Proxied property to its private counterpart. This makes the property
     * as accessible as the other Config options but without ability to change the value.
     *
     * @internal
     */
    get licenseKeyValidityState(): LicenseKeyValidityState;
    constructor({ accentSensitive, caseSensitive, caseFirst, chooseAddressMappingPolicy, dateFormats, timeFormats, functionArgSeparator, decimalSeparator, thousandSeparator, language, licenseKey, functionPlugins, gpuMode, ignorePunctuation, leapYear1900, localeLang, smartRounding, matrixDetection, matrixDetectionThreshold, nullYear, parseDateTime, stringifyDateTime, stringifyDuration, precisionEpsilon, precisionRounding, useColumnIndex, vlookupThreshold, nullDate, useStats, undoLimit, useRegularExpressions, useWildcards, matchWholeCell, maxRows, maxColumns }?: Partial<ConfigParams>);
    getConfig(): ConfigParams;
    mergeConfig(init: Partial<ConfigParams>): Config;
    private valueFromParam;
    private valueFromParamCheck;
    private checkIfParametersNotInConflict;
    private validateNumberToBeAtLeast;
    private validateNumberToBeAtMost;
}
export {};
