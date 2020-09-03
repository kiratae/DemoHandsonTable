/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { ErrorType } from '../Cell';
import { buildTranslationPackage, RawTranslationPackage, TranslationPackage } from './TranslationPackage';
export declare type TranslationSet = Record<string, string>;
export declare type UITranslationSet = Record<UIElement, string>;
export declare type ErrorTranslationSet = Record<ErrorType, string>;
export { RawTranslationPackage, TranslationPackage, buildTranslationPackage };
export declare enum UIElement {
    NEW_SHEET_PREFIX = "NEW_SHEET_PREFIX"
}
