'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Handsontable = _interopDefault(require('handsontable'));
var Vue = _interopDefault(require('vue'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var unassignedPropSymbol = Symbol('unassigned');
var bulkComponentContainer = null;
/**
 * Private method to ensure the table is not calling `updateSettings` after editing cells.
 * @private
 */

function preventInternalEditWatch(component) {
  component.hotInstance.addHook('beforeChange', function () {
    component.__internalEdit = true;
  });
  component.hotInstance.addHook('beforeCreateRow', function () {
    component.__internalEdit = true;
  });
  component.hotInstance.addHook('beforeCreateCol', function () {
    component.__internalEdit = true;
  });
  component.hotInstance.addHook('beforeRemoveRow', function () {
    component.__internalEdit = true;
  });
  component.hotInstance.addHook('beforeRemoveCol', function () {
    component.__internalEdit = true;
  });
}
/**
 * Generate an object containing all the available Handsontable properties and plugin hooks.
 *
 * @param {String} source Source for the factory (either 'HotTable' or 'HotColumn').
 * @returns {Object}
 */

function propFactory(source) {
  var registeredHooks = Handsontable.hooks.getRegistered();
  var propSchema = {};
  Object.assign(propSchema, Handsontable.DefaultSettings);

  for (var prop in propSchema) {
    propSchema[prop] = {
      "default": unassignedPropSymbol
    };
  }

  for (var i = 0; i < registeredHooks.length; i++) {
    propSchema[registeredHooks[i]] = {
      "default": unassignedPropSymbol
    };
  }

  propSchema.settings = {
    "default": unassignedPropSymbol
  };

  if (source === 'HotTable') {
    propSchema.id = {
      type: String,
      "default": 'hot-' + Math.random().toString(36).substring(5)
    };
    propSchema.wrapperRendererCacheSize = {
      type: Number,
      "default": 3000
    };
  }

  return propSchema;
}
/**
 * Filter out all of the unassigned props, and return only the one passed to the component.
 *
 * @param {Object} props Object containing all the possible props.
 * @returns {Object} Object containing only used props.
 */

function filterPassedProps(props) {
  var filteredProps = {};
  var columnSettingsProp = props['settings'];

  if (columnSettingsProp !== unassignedPropSymbol) {
    for (var propName in columnSettingsProp) {
      if (columnSettingsProp.hasOwnProperty(propName) && columnSettingsProp[propName] !== unassignedPropSymbol) {
        filteredProps[propName] = columnSettingsProp[propName];
      }
    }
  }

  for (var _propName in props) {
    if (props.hasOwnProperty(_propName) && _propName !== 'settings' && props[_propName] !== unassignedPropSymbol) {
      filteredProps[_propName] = props[_propName];
    }
  }

  return filteredProps;
}
/**
 * Prepare the settings object to be used as the settings for Handsontable, based on the props provided to the component.
 *
 * @param {HotTableProps} props The props passed to the component.
 * @param {Handsontable.GridSettings} currentSettings The current Handsontable settings.
 * @returns {Handsontable.GridSettings} An object containing the properties, ready to be used within Handsontable.
 */

function prepareSettings(props, currentSettings) {
  var assignedProps = filterPassedProps(props);
  var hotSettingsInProps = props.settings ? props.settings : assignedProps;
  var additionalHotSettingsInProps = props.settings ? assignedProps : null;
  var newSettings = {};

  for (var key in hotSettingsInProps) {
    if (hotSettingsInProps.hasOwnProperty(key) && hotSettingsInProps[key] !== void 0 && (currentSettings && key !== 'data' ? !simpleEqual(currentSettings[key], hotSettingsInProps[key]) : true)) {
      newSettings[key] = hotSettingsInProps[key];
    }
  }

  for (var _key in additionalHotSettingsInProps) {
    if (additionalHotSettingsInProps.hasOwnProperty(_key) && _key !== 'id' && _key !== 'settings' && _key !== 'wrapperRendererCacheSize' && additionalHotSettingsInProps[_key] !== void 0 && (currentSettings && _key !== 'data' ? !simpleEqual(currentSettings[_key], additionalHotSettingsInProps[_key]) : true)) {
      newSettings[_key] = additionalHotSettingsInProps[_key];
    }
  }

  return newSettings;
}
/**
 * Get the VNode element with the provided type attribute from the component slots.
 *
 * @param {Array} componentSlots Array of slots from a component.
 * @param {String} type Type of the child component. Either `hot-renderer` or `hot-editor`.
 * @returns {Object|null} The VNode of the child component (or `null` when nothing's found).
 */

function findVNodeByType(componentSlots, type) {
  var componentVNode = null;
  componentSlots.every(function (slot, index) {
    if (slot.data && slot.data.attrs && slot.data.attrs[type] !== void 0) {
      componentVNode = slot;
      return false;
    }

    return true;
  });
  return componentVNode;
}
/**
 * Get all `hot-column` component instances from the provided children array.
 *
 * @param {Array} children Array of children from a component.
 * @returns {Array} Array of `hot-column` instances.
 */

function getHotColumnComponents(children) {
  return children.filter(function (child) {
    return child.$options.name === 'HotColumn';
  });
}
/**
 * Create an instance of the Vue Component based on the provided VNode.
 *
 * @param {Object} vNode VNode element to be turned into a component instance.
 * @param {Object} parent Instance of the component to be marked as a parent of the newly created instance.
 * @param {Object} props Props to be passed to the new instance.
 * @param {Object} data Data to be passed to the new instance.
 */

function createVueComponent(vNode, parent, props, data) {
  var ownerDocument = parent.$el ? parent.$el.ownerDocument : document;
  var settings = {
    propsData: props,
    parent: parent,
    data: data
  };

  if (!bulkComponentContainer) {
    bulkComponentContainer = ownerDocument.createElement('DIV');
    bulkComponentContainer.id = 'vueHotComponents';
    ownerDocument.body.appendChild(bulkComponentContainer);
  }

  var componentContainer = ownerDocument.createElement('DIV');
  bulkComponentContainer.appendChild(componentContainer);
  return new vNode.componentOptions.Ctor(settings).$mount(componentContainer);
}
/**
 * Compare two objects using `JSON.stringify`.
 * *Note: * As it's using the stringify function to compare objects, the property order in both objects is
 * important. It will return `false` for the same objects, if they're defined in a different order.
 *
 * @param {object} objectA First object to compare.
 * @param {object} objectB Second object to compare.
 * @returns {boolean} `true` if they're the same, `false` otherwise.
 */

function simpleEqual(objectA, objectB) {
  return JSON.stringify(objectA) === JSON.stringify(objectB);
}

var version="5.0.1";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lru = createCommonjsModule(function (module, exports) {
  /**
   * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
   * recently used items while discarding least recently used items when its limit
   * is reached.
   *
   * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
   * See README.md for details.
   *
   * Illustration of the design:
   *
   *       entry             entry             entry             entry
   *       ______            ______            ______            ______
   *      | head |.newer => |      |.newer => |      |.newer => | tail |
   *      |  A   |          |  B   |          |  C   |          |  D   |
   *      |______| <= older.|______| <= older.|______| <= older.|______|
   *
   *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
   */
  (function (g, f) {
    var e =  exports ;
    f(e);
  })(commonjsGlobal, function (exports) {
    var NEWER = Symbol('newer');
    var OLDER = Symbol('older');

    function LRUMap(limit, entries) {
      if (typeof limit !== 'number') {
        // called as (entries)
        entries = limit;
        limit = 0;
      }

      this.size = 0;
      this.limit = limit;
      this.oldest = this.newest = undefined;
      this._keymap = new Map();

      if (entries) {
        this.assign(entries);

        if (limit < 1) {
          this.limit = this.size;
        }
      }
    }

    exports.LRUMap = LRUMap;

    function Entry(key, value) {
      this.key = key;
      this.value = value;
      this[NEWER] = undefined;
      this[OLDER] = undefined;
    }

    LRUMap.prototype._markEntryAsUsed = function (entry) {
      if (entry === this.newest) {
        // Already the most recenlty used entry, so no need to update the list
        return;
      } // HEAD--------------TAIL
      //   <.older   .newer>
      //  <--- add direction --
      //   A  B  C  <D>  E


      if (entry[NEWER]) {
        if (entry === this.oldest) {
          this.oldest = entry[NEWER];
        }

        entry[NEWER][OLDER] = entry[OLDER]; // C <-- E.
      }

      if (entry[OLDER]) {
        entry[OLDER][NEWER] = entry[NEWER]; // C. --> E
      }

      entry[NEWER] = undefined; // D --x

      entry[OLDER] = this.newest; // D. --> E

      if (this.newest) {
        this.newest[NEWER] = entry; // E. <-- D
      }

      this.newest = entry;
    };

    LRUMap.prototype.assign = function (entries) {
      var entry,
          limit = this.limit || Number.MAX_VALUE;

      this._keymap.clear();

      var it = entries[Symbol.iterator]();

      for (var itv = it.next(); !itv.done; itv = it.next()) {
        var e = new Entry(itv.value[0], itv.value[1]);

        this._keymap.set(e.key, e);

        if (!entry) {
          this.oldest = e;
        } else {
          entry[NEWER] = e;
          e[OLDER] = entry;
        }

        entry = e;

        if (limit-- == 0) {
          throw new Error('overflow');
        }
      }

      this.newest = entry;
      this.size = this._keymap.size;
    };

    LRUMap.prototype.get = function (key) {
      // First, find our cache entry
      var entry = this._keymap.get(key);

      if (!entry) return; // Not cached. Sorry.
      // As <key> was found in the cache, register it as being requested recently

      this._markEntryAsUsed(entry);

      return entry.value;
    };

    LRUMap.prototype.set = function (key, value) {
      var entry = this._keymap.get(key);

      if (entry) {
        // update existing
        entry.value = value;

        this._markEntryAsUsed(entry);

        return this;
      } // new entry


      this._keymap.set(key, entry = new Entry(key, value));

      if (this.newest) {
        // link previous tail to the new tail (entry)
        this.newest[NEWER] = entry;
        entry[OLDER] = this.newest;
      } else {
        // we're first in -- yay
        this.oldest = entry;
      } // add new entry to the end of the linked list -- it's now the freshest entry.


      this.newest = entry;
      ++this.size;

      if (this.size > this.limit) {
        // we hit the limit -- remove the head
        this.shift();
      }

      return this;
    };

    LRUMap.prototype.shift = function () {
      // todo: handle special case when limit == 1
      var entry = this.oldest;

      if (entry) {
        if (this.oldest[NEWER]) {
          // advance the list
          this.oldest = this.oldest[NEWER];
          this.oldest[OLDER] = undefined;
        } else {
          // the cache is exhausted
          this.oldest = undefined;
          this.newest = undefined;
        } // Remove last strong reference to <entry> and remove links from the purged
        // entry being returned:


        entry[NEWER] = entry[OLDER] = undefined;

        this._keymap["delete"](entry.key);

        --this.size;
        return [entry.key, entry.value];
      }
    }; // ----------------------------------------------------------------------------
    // Following code is optional and can be removed without breaking the core
    // functionality.


    LRUMap.prototype.has = function (key) {
      return this._keymap.has(key);
    };
  });
});
var lru_1 = lru.LRUMap;

var HotTable = {
  name: 'HotTable',
  props: propFactory('HotTable'),
  watch: {
    mergedHotSettings: function mergedHotSettings(value) {
      if (value.data) {
        if (this.hotInstance.isColumnModificationAllowed() || !this.hotInstance.isColumnModificationAllowed() && this.hotInstance.countSourceCols() === this.miscCache.currentSourceColumns) {
          // If the dataset dimensions change, update the index mappers.
          this.matchHotMappersSize(value.data); // Data is automatically synchronized by reference.

          delete value.data;
        }
      } // If there are another options changed, update the HOT settings, render the table otherwise.


      if (Object.keys(value).length) {
        this.hotInstance.updateSettings(value);
      } else {
        this.hotInstance.render();
      }

      this.miscCache.currentSourceColumns = this.hotInstance.countSourceCols();
    }
  },
  data: function data() {
    var rendererCache = new lru_1(this.wrapperRendererCacheSize); // Make the LRU cache destroy each removed component

    rendererCache.shift = function () {
      var entry = lru_1.prototype.shift.call(this);
      entry[1].component.$destroy();
      return entry;
    };

    return {
      __internalEdit: false,
      miscCache: {
        currentSourceColumns: null
      },
      hotInstance: null,
      columnSettings: null,
      rendererCache: rendererCache,
      editorCache: new Map()
    };
  },
  computed: {
    mergedHotSettings: function mergedHotSettings() {
      return prepareSettings(this.$props, this.hotInstance ? this.hotInstance.getSettings() : void 0);
    }
  },
  methods: {
    /**
     * Initialize Handsontable.
     */
    hotInit: function hotInit() {
      var globalRendererVNode = this.getGlobalRendererVNode();
      var globalEditorVNode = this.getGlobalEditorVNode();
      var newSettings = prepareSettings(this.$props);
      newSettings.columns = this.columnSettings ? this.columnSettings : newSettings.columns;

      if (globalEditorVNode) {
        newSettings.editor = this.getEditorClass(globalEditorVNode, this);
        globalEditorVNode.child.$destroy();
      }

      if (globalRendererVNode) {
        newSettings.renderer = this.getRendererWrapper(globalRendererVNode, this);
        globalRendererVNode.child.$destroy();
      }

      this.hotInstance = new Handsontable.Core(this.$el, newSettings);
      this.hotInstance.init();
      preventInternalEditWatch(this);
      this.miscCache.currentSourceColumns = this.hotInstance.countSourceCols();
    },
    matchHotMappersSize: function matchHotMappersSize(data) {
      var _this = this;

      var rowsToRemove = [];
      var columnsToRemove = [];
      var indexMapperRowCount = this.hotInstance.rowIndexMapper.getNumberOfIndexes();
      var isColumnModificationAllowed = this.hotInstance.isColumnModificationAllowed();
      var indexMapperColumnCount = 0;

      if (data && data.length !== indexMapperRowCount) {
        if (data.length < indexMapperRowCount) {
          for (var r = data.length; r < indexMapperRowCount; r++) {
            rowsToRemove.push(r);
          }
        }
      }

      if (isColumnModificationAllowed) {
        var _data$;

        indexMapperColumnCount = this.hotInstance.columnIndexMapper.getNumberOfIndexes();

        if (data && data[0] && ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.length) !== indexMapperColumnCount) {
          if (data[0].length < indexMapperColumnCount) {
            for (var c = data[0].length; c < indexMapperColumnCount; c++) {
              columnsToRemove.push(c);
            }
          }
        }
      }

      this.hotInstance.batch(function () {
        if (rowsToRemove.length > 0) {
          _this.hotInstance.rowIndexMapper.removeIndexes(rowsToRemove);
        } else {
          _this.hotInstance.rowIndexMapper.insertIndexes(indexMapperRowCount - 1, data.length - indexMapperRowCount);
        }

        if (isColumnModificationAllowed) {
          if (columnsToRemove.length > 0) {
            _this.hotInstance.columnIndexMapper.removeIndexes(columnsToRemove);
          } else {
            _this.hotInstance.columnIndexMapper.insertIndexes(indexMapperColumnCount - 1, data[0].length - indexMapperColumnCount);
          }
        }
      });
    },
    getGlobalRendererVNode: function getGlobalRendererVNode() {
      var hotTableSlots = this.$slots["default"] || [];
      return findVNodeByType(hotTableSlots, 'hot-renderer');
    },
    getGlobalEditorVNode: function getGlobalEditorVNode() {
      var hotTableSlots = this.$slots["default"] || [];
      return findVNodeByType(hotTableSlots, 'hot-editor');
    },

    /**
     * Get settings for the columns provided in the `hot-column` components.
     */
    getColumnSettings: function getColumnSettings() {
      var hotColumns = getHotColumnComponents(this.$children);
      var usesRendererComponent = false;
      var columnSettings = hotColumns.map(function (elem) {
        if (elem.usesRendererComponent) {
          usesRendererComponent = true;
        }

        return _objectSpread2({}, elem.columnSettings);
      });

      if (usesRendererComponent && this.settings && (this.settings.autoColumnSize !== false || this.settings.autoRowSize) && (this.autoColumnSize !== false || this.autoRowSize)) {
        console.warn('Your `hot-table` configuration includes both `hot-column` and `autoRowSize`/`autoColumnSize`, which are not compatible with each other ' + 'in this version of `@handsontable/vue`. Disable `autoRowSize` and `autoColumnSize` to prevent row and column misalignment.');
      }

      return columnSettings.length ? columnSettings : void 0;
    },

    /**
     * Create the wrapper function for the provided renderer child component.
     *
     * @param {Object} vNode VNode of the renderer child component.
     * @param {Boolean} containerComponent Instance of the component, which will be treated as a parent for the newly created renderer component.
     * @returns {Function} The wrapper function used as the renderer.
     */
    getRendererWrapper: function getRendererWrapper(vNode, containerComponent) {
      var $vm = this;
      return function (instance, TD, row, col, prop, value, cellProperties) {
        // Prevent caching and rendering of the GhostTable table cells
        if (TD && !TD.getAttribute('ghost-table')) {
          var rendererCache = $vm.rendererCache;
          var rendererArgs = {
            hotInstance: instance,
            TD: TD,
            row: row,
            col: col,
            prop: prop,
            value: value,
            cellProperties: cellProperties,
            isRenderer: true
          };

          if (rendererCache && !rendererCache.has("".concat(row, "-").concat(col))) {
            var mountedComponent = createVueComponent(vNode, containerComponent, vNode.componentOptions.propsData, rendererArgs);
            rendererCache.set("".concat(row, "-").concat(col), {
              component: mountedComponent,
              lastUsedTD: null
            });
          }

          var cachedEntry = rendererCache.get("".concat(row, "-").concat(col));
          var cachedComponent = cachedEntry.component;
          var cachedTD = cachedEntry.lastUsedTD;
          Object.assign(cachedComponent.$data, rendererArgs);

          if (!cachedComponent.$el.parentElement || cachedTD !== TD) {
            // Clear the previous contents of a TD
            while (TD.firstChild) {
              TD.removeChild(TD.firstChild);
            }

            TD.appendChild(cachedComponent.$el);
            cachedEntry.lastUsedTD = TD;
          }
        }

        return TD;
      };
    },

    /**
     * Create a fresh class to be used as an editor, based on the editor component provided.
     *
     * @param {Object} vNode VNode for the editor child component.
     * @param {Boolean} containerComponent Instance of the component, which will be treated as a parent for the newly created editor component.
     * @returns {Class} The class used as an editor in Handsontable.
     */
    getEditorClass: function getEditorClass(vNode, containerComponent) {
      var componentName = vNode.componentOptions.Ctor.options.name;
      var editorCache = this.editorCache;
      var mountedComponent = null;

      if (!editorCache.has(componentName)) {
        mountedComponent = createVueComponent(vNode, containerComponent, vNode.componentOptions.propsData, {
          isEditor: true
        });
        editorCache.set(componentName, mountedComponent);
      } else {
        mountedComponent = editorCache.get(componentName);
      }

      return mountedComponent.$data.hotCustomEditorClass;
    }
  },
  mounted: function mounted() {
    this.columnSettings = this.getColumnSettings();
    return this.hotInit();
  },
  beforeDestroy: function beforeDestroy() {
    this.hotInstance.destroy();
  },
  version: version
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = HotTable;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    attrs: {
      "id": _vm.id
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var HotColumn = {
  name: 'HotColumn',
  props: propFactory('HotColumn'),
  methods: {
    /**
     * Create the column settings based on the data provided to the `hot-column` component and it's child components.
     */
    createColumnSettings: function createColumnSettings() {
      var hotColumnSlots = this.$slots["default"] || [];
      var rendererVNode = findVNodeByType(hotColumnSlots, 'hot-renderer');
      var editorVNode = findVNodeByType(hotColumnSlots, 'hot-editor');
      var assignedProps = filterPassedProps(this.$props);

      if (rendererVNode && this.usesRendererComponent === void 0) {
        this.usesRendererComponent = true;
      }

      this.columnSettings = _objectSpread2({}, assignedProps);

      if (rendererVNode !== null) {
        this.columnSettings.renderer = this.$parent.getRendererWrapper(rendererVNode, this);
      } else if (assignedProps.renderer) {
        this.columnSettings.renderer = assignedProps.renderer;
      }

      if (editorVNode !== null) {
        this.columnSettings.editor = this.$parent.getEditorClass(editorVNode, this);
      } else if (assignedProps.editor) {
        this.columnSettings.editor = assignedProps.editor;
      }
    }
  },
  mounted: function mounted() {
    this.createColumnSettings();
  },
  render: function render() {
    return null;
  }
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
  * vue-class-component v7.2.5
  * (c) 2015-present Evan You
  * @license MIT
  */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty$1({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

exports.BaseEditorComponent = /*#__PURE__*/function (_Vue) {
  _inherits(BaseEditorComponent, _Vue);

  var _super = _createSuper(BaseEditorComponent);

  function BaseEditorComponent() {
    var _this2;

    _classCallCheck(this, BaseEditorComponent);

    _this2 = _super.apply(this, arguments);
    _this2.name = 'BaseEditorComponent';
    _this2.instance = null;
    _this2.row = null;
    _this2.col = null;
    _this2.prop = null;
    _this2.TD = null;
    _this2.originalValue = null;
    _this2.cellProperties = null;
    _this2.state = null;
    _this2.hot = null;
    return _this2;
  }

  _createClass(BaseEditorComponent, [{
    key: "mounted",
    value: function mounted() {
      var _this = this;

      this.$data.hotCustomEditorClass = function () {
        var customEditorClass = /*#__PURE__*/function (_Handsontable$editors) {
          _inherits(CustomEditor, _Handsontable$editors);

          var _super2 = _createSuper(CustomEditor);

          function CustomEditor(hotInstance, row, col, prop, TD, cellProperties) {
            var _this3;

            _classCallCheck(this, CustomEditor);

            _this3 = _super2.call(this, hotInstance, row, col, prop, TD, cellProperties);
            _this.$data.hotCustomEditorInstance = _assertThisInitialized(_this3);
            return _this3;
          }

          _createClass(CustomEditor, [{
            key: "focus",
            value: function focus() {}
          }, {
            key: "getValue",
            value: function getValue() {}
          }, {
            key: "setValue",
            value: function setValue() {}
          }, {
            key: "open",
            value: function open() {}
          }, {
            key: "close",
            value: function close() {}
          }]);

          return CustomEditor;
        }(Handsontable.editors.BaseEditor); // Fill with the rest of the BaseEditorComponent methods


        Object.getOwnPropertyNames(Handsontable.editors.BaseEditor.prototype).forEach(function (propName) {
          if (propName === 'constructor') {
            return;
          }

          customEditorClass.prototype[propName] = function () {
            var _this$propName;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return (_this$propName = _this[propName]).call.apply(_this$propName, [this].concat(args));
          };
        });
        return customEditorClass;
      }();
    } // BaseEditorComponent methods:

  }, {
    key: "_fireCallbacks",
    value: function _fireCallbacks() {
      var _Handsontable$editors2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_Handsontable$editors2 = Handsontable.editors.BaseEditor.prototype._fireCallbacks).call.apply(_Handsontable$editors2, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "beginEditing",
    value: function beginEditing() {
      var _Handsontable$editors3;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return (_Handsontable$editors3 = Handsontable.editors.BaseEditor.prototype.beginEditing).call.apply(_Handsontable$editors3, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "cancelChanges",
    value: function cancelChanges() {
      var _Handsontable$editors4;

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return (_Handsontable$editors4 = Handsontable.editors.BaseEditor.prototype.cancelChanges).call.apply(_Handsontable$editors4, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "checkEditorSection",
    value: function checkEditorSection() {
      var _Handsontable$editors5;

      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return (_Handsontable$editors5 = Handsontable.editors.BaseEditor.prototype.checkEditorSection).call.apply(_Handsontable$editors5, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "close",
    value: function close() {
      var _Handsontable$editors6;

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return (_Handsontable$editors6 = Handsontable.editors.BaseEditor.prototype.close).call.apply(_Handsontable$editors6, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "discardEditor",
    value: function discardEditor() {
      var _Handsontable$editors7;

      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return (_Handsontable$editors7 = Handsontable.editors.BaseEditor.prototype.discardEditor).call.apply(_Handsontable$editors7, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "enableFullEditMode",
    value: function enableFullEditMode() {
      var _Handsontable$editors8;

      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return (_Handsontable$editors8 = Handsontable.editors.BaseEditor.prototype.enableFullEditMode).call.apply(_Handsontable$editors8, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "extend",
    value: function extend() {
      var _Handsontable$editors9;

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      return (_Handsontable$editors9 = Handsontable.editors.BaseEditor.prototype.extend).call.apply(_Handsontable$editors9, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "finishEditing",
    value: function finishEditing() {
      var _Handsontable$editors10;

      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      return (_Handsontable$editors10 = Handsontable.editors.BaseEditor.prototype.finishEditing).call.apply(_Handsontable$editors10, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "focus",
    value: function focus() {
      var _Handsontable$editors11;

      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      return (_Handsontable$editors11 = Handsontable.editors.BaseEditor.prototype.focus).call.apply(_Handsontable$editors11, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _Handsontable$editors12;

      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      return (_Handsontable$editors12 = Handsontable.editors.BaseEditor.prototype.getValue).call.apply(_Handsontable$editors12, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "init",
    value: function init() {
      var _Handsontable$editors13;

      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      return (_Handsontable$editors13 = Handsontable.editors.BaseEditor.prototype.init).call.apply(_Handsontable$editors13, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "isInFullEditMode",
    value: function isInFullEditMode() {
      var _Handsontable$editors14;

      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      return (_Handsontable$editors14 = Handsontable.editors.BaseEditor.prototype.isInFullEditMode).call.apply(_Handsontable$editors14, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "isOpened",
    value: function isOpened() {
      var _Handsontable$editors15;

      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      return (_Handsontable$editors15 = Handsontable.editors.BaseEditor.prototype.isOpened).call.apply(_Handsontable$editors15, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "isWaiting",
    value: function isWaiting() {
      var _Handsontable$editors16;

      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      return (_Handsontable$editors16 = Handsontable.editors.BaseEditor.prototype.isWaiting).call.apply(_Handsontable$editors16, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "open",
    value: function open() {
      var _Handsontable$editors17;

      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }

      return (_Handsontable$editors17 = Handsontable.editors.BaseEditor.prototype.open).call.apply(_Handsontable$editors17, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "prepare",
    value: function prepare(row, col, prop, TD, originalValue, cellProperties) {
      this.$data.hotInstance = cellProperties.instance;
      this.$data.row = row;
      this.$data.col = col;
      this.$data.prop = prop;
      this.$data.TD = TD;
      this.$data.originalValue = originalValue;
      this.$data.cellProperties = cellProperties;
      return Handsontable.editors.BaseEditor.prototype.prepare.call(this.$data.hotCustomEditorInstance, row, col, prop, TD, originalValue, cellProperties);
    }
  }, {
    key: "saveValue",
    value: function saveValue() {
      var _Handsontable$editors18;

      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }

      return (_Handsontable$editors18 = Handsontable.editors.BaseEditor.prototype.saveValue).call.apply(_Handsontable$editors18, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "setValue",
    value: function setValue() {
      var _Handsontable$editors19;

      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }

      return (_Handsontable$editors19 = Handsontable.editors.BaseEditor.prototype.setValue).call.apply(_Handsontable$editors19, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "addHook",
    value: function addHook() {
      var _Handsontable$editors20;

      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }

      return (_Handsontable$editors20 = Handsontable.editors.BaseEditor.prototype.addHook).call.apply(_Handsontable$editors20, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "removeHooksByKey",
    value: function removeHooksByKey() {
      var _Handsontable$editors21;

      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }

      return (_Handsontable$editors21 = Handsontable.editors.BaseEditor.prototype.removeHooksByKey).call.apply(_Handsontable$editors21, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "clearHooks",
    value: function clearHooks() {
      var _Handsontable$editors22;

      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }

      return (_Handsontable$editors22 = Handsontable.editors.BaseEditor.prototype.clearHooks).call.apply(_Handsontable$editors22, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "getEditedCell",
    value: function getEditedCell() {
      var _Handsontable$editors23;

      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }

      return (_Handsontable$editors23 = Handsontable.editors.BaseEditor.prototype.getEditedCell).call.apply(_Handsontable$editors23, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "getEditedCellsZIndex",
    value: function getEditedCellsZIndex() {
      var _Handsontable$editors24;

      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }

      return (_Handsontable$editors24 = Handsontable.editors.BaseEditor.prototype.getEditedCellsZIndex).call.apply(_Handsontable$editors24, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }, {
    key: "getEditedCellsLayerClass",
    value: function getEditedCellsLayerClass() {
      var _Handsontable$editors25;

      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }

      return (_Handsontable$editors25 = Handsontable.editors.BaseEditor.prototype.getEditedCellsLayerClass).call.apply(_Handsontable$editors25, [this.$data.hotCustomEditorInstance].concat(args));
    }
  }]);

  return BaseEditorComponent;
}(Vue);

exports.BaseEditorComponent = __decorate([Component({})], exports.BaseEditorComponent);

exports.HotColumn = HotColumn;
exports.HotTable = HotTable;
exports.default = __vue_component__;
