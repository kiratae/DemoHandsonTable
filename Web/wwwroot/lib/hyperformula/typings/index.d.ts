/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellType, CellValueType, ErrorType, SimpleCellAddress } from './Cell';
import { CellValue, DetailedCellError, ExportedCellChange, ExportedChange, ExportedNamedExpressionChange, NoErrorCellValue } from './CellValue';
import { HyperFormula } from './HyperFormula';
import { ConfigParams } from './Config';
import { RawTranslationPackage } from './i18n';
import { Sheet, SheetDimensions, Sheets } from './Sheet';
import { RawCellContent } from './CellContentParser';
import { NamedExpression, NamedExpressionOptions } from './NamedExpressions';
import { ConfigValueTooBigError, ConfigValueTooSmallError, EvaluationSuspendedError, ExpectedOneOfValuesError, ExpectedValueOfTypeError, FunctionPluginValidationError, InvalidAddressError, InvalidArgumentsError, LanguageAlreadyRegisteredError, LanguageNotRegisteredError, MatrixFormulasNotSupportedError, MissingTranslationError, NamedExpressionDoesNotExistError, NamedExpressionNameIsAlreadyTakenError, NamedExpressionNameIsInvalidError, NoOperationToRedoError, NoOperationToUndoError, NoRelativeAddressesAllowedError, NoSheetWithIdError, NoSheetWithNameError, NotAFormulaError, NothingToPasteError, ProtectedFunctionTranslationError, SheetNameAlreadyTakenError, SheetSizeLimitExceededError, SourceLocationHasMatrixError, TargetLocationHasMatrixError, UnableToParseError } from './errors';
import { FunctionPluginDefinition, FunctionPlugin } from './interpreter';
import { ColumnRowIndex } from './CrudOperations';
/** @internal */
declare class HyperFormulaNS extends HyperFormula {
    static HyperFormula: typeof HyperFormula;
    static ErrorType: typeof ErrorType;
    static CellType: typeof CellType;
    static CellValueType: typeof CellValueType;
    static DetailedCellError: typeof DetailedCellError;
    static ExportedCellChange: typeof ExportedCellChange;
    static ExportedNamedExpressionChange: typeof ExportedNamedExpressionChange;
    static ConfigValueTooBigError: typeof ConfigValueTooBigError;
    static ConfigValueTooSmallError: typeof ConfigValueTooSmallError;
    static EvaluationSuspendedError: typeof EvaluationSuspendedError;
    static ExpectedOneOfValuesError: typeof ExpectedOneOfValuesError;
    static ExpectedValueOfTypeError: typeof ExpectedValueOfTypeError;
    static FunctionPlugin: typeof FunctionPlugin;
    static FunctionPluginValidationError: typeof FunctionPluginValidationError;
    static InvalidAddressError: typeof InvalidAddressError;
    static InvalidArgumentsError: typeof InvalidArgumentsError;
    static LanguageNotRegisteredError: typeof LanguageNotRegisteredError;
    static LanguageAlreadyRegisteredError: typeof LanguageAlreadyRegisteredError;
    static MatrixFormulasNotSupportedError: typeof MatrixFormulasNotSupportedError;
    static MissingTranslationError: typeof MissingTranslationError;
    static NamedExpressionDoesNotExistError: typeof NamedExpressionDoesNotExistError;
    static NamedExpressionNameIsAlreadyTakenError: typeof NamedExpressionNameIsAlreadyTakenError;
    static NamedExpressionNameIsInvalidError: typeof NamedExpressionNameIsInvalidError;
    static NoOperationToRedoError: typeof NoOperationToRedoError;
    static NoOperationToUndoError: typeof NoOperationToUndoError;
    static NoRelativeAddressesAllowedError: typeof NoRelativeAddressesAllowedError;
    static NoSheetWithIdError: typeof NoSheetWithIdError;
    static NoSheetWithNameError: typeof NoSheetWithNameError;
    static NotAFormulaError: typeof NotAFormulaError;
    static NothingToPasteError: typeof NothingToPasteError;
    static ProtectedFunctionTranslationError: typeof ProtectedFunctionTranslationError;
    static SheetNameAlreadyTakenError: typeof SheetNameAlreadyTakenError;
    static SheetSizeLimitExceededError: typeof SheetSizeLimitExceededError;
    static SourceLocationHasMatrixError: typeof SourceLocationHasMatrixError;
    static TargetLocationHasMatrixError: typeof TargetLocationHasMatrixError;
    static UnableToParseError: typeof UnableToParseError;
}
export default HyperFormulaNS;
export { CellValue, NoErrorCellValue, ConfigParams, ExportedChange, RawCellContent, Sheet, Sheets, SheetDimensions, SimpleCellAddress, ColumnRowIndex, RawTranslationPackage, FunctionPluginDefinition, NamedExpression, NamedExpressionOptions, HyperFormula, CellType, CellValueType, ErrorType, ExportedCellChange, ExportedNamedExpressionChange, DetailedCellError, ConfigValueTooBigError, ConfigValueTooSmallError, EvaluationSuspendedError, ExpectedOneOfValuesError, ExpectedValueOfTypeError, FunctionPlugin, FunctionPluginValidationError, InvalidAddressError, InvalidArgumentsError, LanguageAlreadyRegisteredError, LanguageNotRegisteredError, MatrixFormulasNotSupportedError, MissingTranslationError, NamedExpressionDoesNotExistError, NamedExpressionNameIsAlreadyTakenError, NamedExpressionNameIsInvalidError, NoOperationToRedoError, NoOperationToUndoError, NoRelativeAddressesAllowedError, NoSheetWithIdError, NoSheetWithNameError, NotAFormulaError, NothingToPasteError, ProtectedFunctionTranslationError, SheetNameAlreadyTakenError, SheetSizeLimitExceededError, SourceLocationHasMatrixError, TargetLocationHasMatrixError, UnableToParseError, };
