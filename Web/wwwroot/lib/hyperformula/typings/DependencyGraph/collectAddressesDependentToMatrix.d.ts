/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from '../Cell';
import { LazilyTransformingAstService } from '../LazilyTransformingAstService';
import { MatrixVertex } from './MatrixVertex';
import { Vertex } from './Vertex';
import { DependencyGraph } from './DependencyGraph';
import { FunctionRegistry } from '../interpreter/FunctionRegistry';
export declare const collectAddressesDependentToMatrix: (funcitonRegistry: FunctionRegistry, vertex: Vertex, matrix: MatrixVertex, lazilyTransformingAstService: LazilyTransformingAstService, dependencyGraph: DependencyGraph) => SimpleCellAddress[];
