import Vue, { VNode } from 'vue';
import Handsontable from 'handsontable';
import { HotTableProps, VueProps, EditorComponent } from './types';
/**
 * Rewrite the settings object passed to the watchers to be a clean array/object prepared to use within Handsontable config.
 *
 * @param {*} observerSettings Watcher object containing the changed data.
 * @returns {Object|Array}
 */
export declare function rewriteSettings(observerSettings: any): any[] | object;
/**
 * Private method to ensure the table is not calling `updateSettings` after editing cells.
 * @private
 */
export declare function preventInternalEditWatch(component: any): void;
/**
 * Generate an object containing all the available Handsontable properties and plugin hooks.
 *
 * @param {String} source Source for the factory (either 'HotTable' or 'HotColumn').
 * @returns {Object}
 */
export declare function propFactory(source: any): VueProps<HotTableProps>;
/**
 * Filter out all of the unassigned props, and return only the one passed to the component.
 *
 * @param {Object} props Object containing all the possible props.
 * @returns {Object} Object containing only used props.
 */
export declare function filterPassedProps(props: any): VueProps<HotTableProps>;
/**
 * Prepare the settings object to be used as the settings for Handsontable, based on the props provided to the component.
 *
 * @param {HotTableProps} props The props passed to the component.
 * @param {Handsontable.GridSettings} currentSettings The current Handsontable settings.
 * @returns {Handsontable.GridSettings} An object containing the properties, ready to be used within Handsontable.
 */
export declare function prepareSettings(props: HotTableProps, currentSettings?: Handsontable.GridSettings): Handsontable.GridSettings;
/**
 * Get the VNode element with the provided type attribute from the component slots.
 *
 * @param {Array} componentSlots Array of slots from a component.
 * @param {String} type Type of the child component. Either `hot-renderer` or `hot-editor`.
 * @returns {Object|null} The VNode of the child component (or `null` when nothing's found).
 */
export declare function findVNodeByType(componentSlots: VNode[], type: string): VNode;
/**
 * Get all `hot-column` component instances from the provided children array.
 *
 * @param {Array} children Array of children from a component.
 * @returns {Array} Array of `hot-column` instances.
 */
export declare function getHotColumnComponents(children: any): any;
/**
 * Create an instance of the Vue Component based on the provided VNode.
 *
 * @param {Object} vNode VNode element to be turned into a component instance.
 * @param {Object} parent Instance of the component to be marked as a parent of the newly created instance.
 * @param {Object} props Props to be passed to the new instance.
 * @param {Object} data Data to be passed to the new instance.
 */
export declare function createVueComponent(vNode: VNode, parent: Vue, props: object, data: object): EditorComponent;
