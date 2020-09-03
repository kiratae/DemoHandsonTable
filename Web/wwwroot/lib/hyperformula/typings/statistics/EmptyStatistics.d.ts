/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { StatType } from './StatType';
import { Statistics } from './Statistics';
/** Do not store stats in the memory. Stats are not needed on daily basis */
export declare class EmptyStatistics extends Statistics {
    /** @inheritDoc */
    incrementCriterionFunctionFullCacheUsed(): void;
    /** @inheritDoc */
    incrementCriterionFunctionPartialCacheUsed(): void;
    /** @inheritDoc */
    start(_name: StatType): void;
    /** @inheritDoc */
    end(_name: StatType): void;
}
