var bundle = (function (exports) {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react$1 = {exports: {}};

	var react_production_min$1 = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min$1;

	function requireReact_production_min$1 () {
		if (hasRequiredReact_production_min$1) return react_production_min$1;
		hasRequiredReact_production_min$1 = 1;

		var l = Symbol.for("react.element"),
		    n = Symbol.for("react.portal"),
		    p = Symbol.for("react.fragment"),
		    q = Symbol.for("react.strict_mode"),
		    r = Symbol.for("react.profiler"),
		    t = Symbol.for("react.provider"),
		    u = Symbol.for("react.context"),
		    v = Symbol.for("react.forward_ref"),
		    w = Symbol.for("react.suspense"),
		    x = Symbol.for("react.memo"),
		    y = Symbol.for("react.lazy"),
		    z = Symbol.iterator;

		function A(a) {
		  if (null === a || "object" !== typeof a) return null;
		  a = z && a[z] || a["@@iterator"];
		  return "function" === typeof a ? a : null;
		}

		var B = {
		  isMounted: function () {
		    return !1;
		  },
		  enqueueForceUpdate: function () {},
		  enqueueReplaceState: function () {},
		  enqueueSetState: function () {}
		},
		    C = Object.assign,
		    D = {};

		function E(a, b, e) {
		  this.props = a;
		  this.context = b;
		  this.refs = D;
		  this.updater = e || B;
		}

		E.prototype.isReactComponent = {};

		E.prototype.setState = function (a, b) {
		  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		  this.updater.enqueueSetState(this, a, b, "setState");
		};

		E.prototype.forceUpdate = function (a) {
		  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};

		function F() {}

		F.prototype = E.prototype;

		function G(a, b, e) {
		  this.props = a;
		  this.context = b;
		  this.refs = D;
		  this.updater = e || B;
		}

		var H = G.prototype = new F();
		H.constructor = G;
		C(H, E.prototype);
		H.isPureReactComponent = !0;
		var I = Array.isArray,
		    J = Object.prototype.hasOwnProperty,
		    K = {
		  current: null
		},
		    L = {
		  key: !0,
		  ref: !0,
		  __self: !0,
		  __source: !0
		};

		function M(a, b, e) {
		  var d,
		      c = {},
		      k = null,
		      h = null;
		  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		  var g = arguments.length - 2;
		  if (1 === g) c.children = e;else if (1 < g) {
		    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

		    c.children = f;
		  }
		  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		  return {
		    $$typeof: l,
		    type: a,
		    key: k,
		    ref: h,
		    props: c,
		    _owner: K.current
		  };
		}

		function N(a, b) {
		  return {
		    $$typeof: l,
		    type: a.type,
		    key: b,
		    ref: a.ref,
		    props: a.props,
		    _owner: a._owner
		  };
		}

		function O(a) {
		  return "object" === typeof a && null !== a && a.$$typeof === l;
		}

		function escape(a) {
		  var b = {
		    "=": "=0",
		    ":": "=2"
		  };
		  return "$" + a.replace(/[=:]/g, function (a) {
		    return b[a];
		  });
		}

		var P = /\/+/g;

		function Q(a, b) {
		  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
		}

		function R(a, b, e, d, c) {
		  var k = typeof a;
		  if ("undefined" === k || "boolean" === k) a = null;
		  var h = !1;
		  if (null === a) h = !0;else switch (k) {
		    case "string":
		    case "number":
		      h = !0;
		      break;

		    case "object":
		      switch (a.$$typeof) {
		        case l:
		        case n:
		          h = !0;
		      }

		  }
		  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
		    return a;
		  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		  h = 0;
		  d = "" === d ? "." : d + ":";
		  if (I(a)) for (var g = 0; g < a.length; g++) {
		    k = a[g];
		    var f = d + Q(k, g);
		    h += R(k, b, e, f, c);
		  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		  return h;
		}

		function S(a, b, e) {
		  if (null == a) return a;
		  var d = [],
		      c = 0;
		  R(a, d, "", "", function (a) {
		    return b.call(e, a, c++);
		  });
		  return d;
		}

		function T(a) {
		  if (-1 === a._status) {
		    var b = a._result;
		    b = b();
		    b.then(function (b) {
		      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
		    }, function (b) {
		      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
		    });
		    -1 === a._status && (a._status = 0, a._result = b);
		  }

		  if (1 === a._status) return a._result.default;
		  throw a._result;
		}

		var U = {
		  current: null
		},
		    V = {
		  transition: null
		},
		    W = {
		  ReactCurrentDispatcher: U,
		  ReactCurrentBatchConfig: V,
		  ReactCurrentOwner: K
		};
		react_production_min$1.Children = {
		  map: S,
		  forEach: function (a, b, e) {
		    S(a, function () {
		      b.apply(this, arguments);
		    }, e);
		  },
		  count: function (a) {
		    var b = 0;
		    S(a, function () {
		      b++;
		    });
		    return b;
		  },
		  toArray: function (a) {
		    return S(a, function (a) {
		      return a;
		    }) || [];
		  },
		  only: function (a) {
		    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
		    return a;
		  }
		};
		react_production_min$1.Component = E;
		react_production_min$1.Fragment = p;
		react_production_min$1.Profiler = r;
		react_production_min$1.PureComponent = G;
		react_production_min$1.StrictMode = q;
		react_production_min$1.Suspense = w;
		react_production_min$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;

		react_production_min$1.cloneElement = function (a, b, e) {
		  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		  var d = C({}, a.props),
		      c = a.key,
		      k = a.ref,
		      h = a._owner;

		  if (null != b) {
		    void 0 !== b.ref && (k = b.ref, h = K.current);
		    void 0 !== b.key && (c = "" + b.key);
		    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

		    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		  }

		  var f = arguments.length - 2;
		  if (1 === f) d.children = e;else if (1 < f) {
		    g = Array(f);

		    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

		    d.children = g;
		  }
		  return {
		    $$typeof: l,
		    type: a.type,
		    key: c,
		    ref: k,
		    props: d,
		    _owner: h
		  };
		};

		react_production_min$1.createContext = function (a) {
		  a = {
		    $$typeof: u,
		    _currentValue: a,
		    _currentValue2: a,
		    _threadCount: 0,
		    Provider: null,
		    Consumer: null,
		    _defaultValue: null,
		    _globalName: null
		  };
		  a.Provider = {
		    $$typeof: t,
		    _context: a
		  };
		  return a.Consumer = a;
		};

		react_production_min$1.createElement = M;

		react_production_min$1.createFactory = function (a) {
		  var b = M.bind(null, a);
		  b.type = a;
		  return b;
		};

		react_production_min$1.createRef = function () {
		  return {
		    current: null
		  };
		};

		react_production_min$1.forwardRef = function (a) {
		  return {
		    $$typeof: v,
		    render: a
		  };
		};

		react_production_min$1.isValidElement = O;

		react_production_min$1.lazy = function (a) {
		  return {
		    $$typeof: y,
		    _payload: {
		      _status: -1,
		      _result: a
		    },
		    _init: T
		  };
		};

		react_production_min$1.memo = function (a, b) {
		  return {
		    $$typeof: x,
		    type: a,
		    compare: void 0 === b ? null : b
		  };
		};

		react_production_min$1.startTransition = function (a) {
		  var b = V.transition;
		  V.transition = {};

		  try {
		    a();
		  } finally {
		    V.transition = b;
		  }
		};

		react_production_min$1.unstable_act = function () {
		  throw Error("act(...) is not supported in production builds of React.");
		};

		react_production_min$1.useCallback = function (a, b) {
		  return U.current.useCallback(a, b);
		};

		react_production_min$1.useContext = function (a) {
		  return U.current.useContext(a);
		};

		react_production_min$1.useDebugValue = function () {};

		react_production_min$1.useDeferredValue = function (a) {
		  return U.current.useDeferredValue(a);
		};

		react_production_min$1.useEffect = function (a, b) {
		  return U.current.useEffect(a, b);
		};

		react_production_min$1.useId = function () {
		  return U.current.useId();
		};

		react_production_min$1.useImperativeHandle = function (a, b, e) {
		  return U.current.useImperativeHandle(a, b, e);
		};

		react_production_min$1.useInsertionEffect = function (a, b) {
		  return U.current.useInsertionEffect(a, b);
		};

		react_production_min$1.useLayoutEffect = function (a, b) {
		  return U.current.useLayoutEffect(a, b);
		};

		react_production_min$1.useMemo = function (a, b) {
		  return U.current.useMemo(a, b);
		};

		react_production_min$1.useReducer = function (a, b, e) {
		  return U.current.useReducer(a, b, e);
		};

		react_production_min$1.useRef = function (a) {
		  return U.current.useRef(a);
		};

		react_production_min$1.useState = function (a) {
		  return U.current.useState(a);
		};

		react_production_min$1.useSyncExternalStore = function (a, b, e) {
		  return U.current.useSyncExternalStore(a, b, e);
		};

		react_production_min$1.useTransition = function () {
		  return U.current.useTransition();
		};

		react_production_min$1.version = "18.2.0";
		return react_production_min$1;
	}

	var react_development$1 = {exports: {}};

	/**
	 * @license React
	 * react.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_development$1;

	function requireReact_development$1 () {
		if (hasRequiredReact_development$1) return react_development$1.exports;
		hasRequiredReact_development$1 = 1;
		(function (module, exports) {

			if (process.env.NODE_ENV !== "production") {
			  (function () {
			    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

			    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
			      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
			    }

			    var ReactVersion = '18.2.0'; // ATTENTION
			    // When adding new symbols to this file,
			    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
			    // The Symbol used to tag the ReactElement-like types.

			    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
			    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
			    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
			    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
			    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
			    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
			    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
			    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
			    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
			    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
			    var REACT_MEMO_TYPE = Symbol.for('react.memo');
			    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
			    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
			    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
			    var FAUX_ITERATOR_SYMBOL = '@@iterator';

			    function getIteratorFn(maybeIterable) {
			      if (maybeIterable === null || typeof maybeIterable !== 'object') {
			        return null;
			      }

			      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

			      if (typeof maybeIterator === 'function') {
			        return maybeIterator;
			      }

			      return null;
			    }
			    /**
			     * Keeps track of the current dispatcher.
			     */


			    var ReactCurrentDispatcher = {
			      /**
			       * @internal
			       * @type {ReactComponent}
			       */
			      current: null
			    };
			    /**
			     * Keeps track of the current batch's configuration such as how long an update
			     * should suspend for if it needs to.
			     */

			    var ReactCurrentBatchConfig = {
			      transition: null
			    };
			    var ReactCurrentActQueue = {
			      current: null,
			      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
			      isBatchingLegacy: false,
			      didScheduleLegacyUpdate: false
			    };
			    /**
			     * Keeps track of the current owner.
			     *
			     * The current owner is the component who should own any components that are
			     * currently being constructed.
			     */

			    var ReactCurrentOwner = {
			      /**
			       * @internal
			       * @type {ReactComponent}
			       */
			      current: null
			    };
			    var ReactDebugCurrentFrame = {};
			    var currentExtraStackFrame = null;

			    function setExtraStackFrame(stack) {
			      {
			        currentExtraStackFrame = stack;
			      }
			    }

			    {
			      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
			        {
			          currentExtraStackFrame = stack;
			        }
			      }; // Stack implementation injected by the current renderer.


			      ReactDebugCurrentFrame.getCurrentStack = null;

			      ReactDebugCurrentFrame.getStackAddendum = function () {
			        var stack = ''; // Add an extra top frame while an element is being validated

			        if (currentExtraStackFrame) {
			          stack += currentExtraStackFrame;
			        } // Delegate to the injected renderer-specific implementation


			        var impl = ReactDebugCurrentFrame.getCurrentStack;

			        if (impl) {
			          stack += impl() || '';
			        }

			        return stack;
			      };
			    } // -----------------------------------------------------------------------------

			    var enableScopeAPI = false; // Experimental Create Event Handle API.

			    var enableCacheElement = false;
			    var enableTransitionTracing = false; // No known bugs, but needs performance testing

			    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
			    // stuff. Intended to enable React core members to more easily debug scheduling
			    // issues in DEV builds.

			    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

			    var ReactSharedInternals = {
			      ReactCurrentDispatcher: ReactCurrentDispatcher,
			      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
			      ReactCurrentOwner: ReactCurrentOwner
			    };
			    {
			      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
			      ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
			    } // by calls to these methods by a Babel plugin.
			    //
			    // In PROD (or in packages without access to React internals),
			    // they are left as they are instead.

			    function warn(format) {
			      {
			        {
			          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			            args[_key - 1] = arguments[_key];
			          }

			          printWarning('warn', format, args);
			        }
			      }
			    }

			    function error(format) {
			      {
			        {
			          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			            args[_key2 - 1] = arguments[_key2];
			          }

			          printWarning('error', format, args);
			        }
			      }
			    }

			    function printWarning(level, format, args) {
			      // When changing this logic, you might want to also
			      // update consoleWithStackDev.www.js as well.
			      {
			        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
			        var stack = ReactDebugCurrentFrame.getStackAddendum();

			        if (stack !== '') {
			          format += '%s';
			          args = args.concat([stack]);
			        } // eslint-disable-next-line react-internal/safe-string-coercion


			        var argsWithFormat = args.map(function (item) {
			          return String(item);
			        }); // Careful: RN currently depends on this prefix

			        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
			        // breaks IE9: https://github.com/facebook/react/issues/13610
			        // eslint-disable-next-line react-internal/no-production-logging

			        Function.prototype.apply.call(console[level], console, argsWithFormat);
			      }
			    }

			    var didWarnStateUpdateForUnmountedComponent = {};

			    function warnNoop(publicInstance, callerName) {
			      {
			        var _constructor = publicInstance.constructor;
			        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
			        var warningKey = componentName + "." + callerName;

			        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
			          return;
			        }

			        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
			        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
			      }
			    }
			    /**
			     * This is the abstract API for an update queue.
			     */


			    var ReactNoopUpdateQueue = {
			      /**
			       * Checks whether or not this composite component is mounted.
			       * @param {ReactClass} publicInstance The instance we want to test.
			       * @return {boolean} True if mounted, false otherwise.
			       * @protected
			       * @final
			       */
			      isMounted: function (publicInstance) {
			        return false;
			      },

			      /**
			       * Forces an update. This should only be invoked when it is known with
			       * certainty that we are **not** in a DOM transaction.
			       *
			       * You may want to call this when you know that some deeper aspect of the
			       * component's state has changed but `setState` was not called.
			       *
			       * This will not invoke `shouldComponentUpdate`, but it will invoke
			       * `componentWillUpdate` and `componentDidUpdate`.
			       *
			       * @param {ReactClass} publicInstance The instance that should rerender.
			       * @param {?function} callback Called after component is updated.
			       * @param {?string} callerName name of the calling function in the public API.
			       * @internal
			       */
			      enqueueForceUpdate: function (publicInstance, callback, callerName) {
			        warnNoop(publicInstance, 'forceUpdate');
			      },

			      /**
			       * Replaces all of the state. Always use this or `setState` to mutate state.
			       * You should treat `this.state` as immutable.
			       *
			       * There is no guarantee that `this.state` will be immediately updated, so
			       * accessing `this.state` after calling this method may return the old value.
			       *
			       * @param {ReactClass} publicInstance The instance that should rerender.
			       * @param {object} completeState Next state.
			       * @param {?function} callback Called after component is updated.
			       * @param {?string} callerName name of the calling function in the public API.
			       * @internal
			       */
			      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
			        warnNoop(publicInstance, 'replaceState');
			      },

			      /**
			       * Sets a subset of the state. This only exists because _pendingState is
			       * internal. This provides a merging strategy that is not available to deep
			       * properties which is confusing. TODO: Expose pendingState or don't use it
			       * during the merge.
			       *
			       * @param {ReactClass} publicInstance The instance that should rerender.
			       * @param {object} partialState Next partial state to be merged with state.
			       * @param {?function} callback Called after component is updated.
			       * @param {?string} Name of the calling function in the public API.
			       * @internal
			       */
			      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
			        warnNoop(publicInstance, 'setState');
			      }
			    };
			    var assign = Object.assign;
			    var emptyObject = {};
			    {
			      Object.freeze(emptyObject);
			    }
			    /**
			     * Base class helpers for the updating state of a component.
			     */

			    function Component(props, context, updater) {
			      this.props = props;
			      this.context = context; // If a component has string refs, we will assign a different object later.

			      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
			      // renderer.

			      this.updater = updater || ReactNoopUpdateQueue;
			    }

			    Component.prototype.isReactComponent = {};
			    /**
			     * Sets a subset of the state. Always use this to mutate
			     * state. You should treat `this.state` as immutable.
			     *
			     * There is no guarantee that `this.state` will be immediately updated, so
			     * accessing `this.state` after calling this method may return the old value.
			     *
			     * There is no guarantee that calls to `setState` will run synchronously,
			     * as they may eventually be batched together.  You can provide an optional
			     * callback that will be executed when the call to setState is actually
			     * completed.
			     *
			     * When a function is provided to setState, it will be called at some point in
			     * the future (not synchronously). It will be called with the up to date
			     * component arguments (state, props, context). These values can be different
			     * from this.* because your function may be called after receiveProps but before
			     * shouldComponentUpdate, and this new state, props, and context will not yet be
			     * assigned to this.
			     *
			     * @param {object|function} partialState Next partial state or function to
			     *        produce next partial state to be merged with current state.
			     * @param {?function} callback Called after state is updated.
			     * @final
			     * @protected
			     */

			    Component.prototype.setState = function (partialState, callback) {
			      if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
			        throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
			      }

			      this.updater.enqueueSetState(this, partialState, callback, 'setState');
			    };
			    /**
			     * Forces an update. This should only be invoked when it is known with
			     * certainty that we are **not** in a DOM transaction.
			     *
			     * You may want to call this when you know that some deeper aspect of the
			     * component's state has changed but `setState` was not called.
			     *
			     * This will not invoke `shouldComponentUpdate`, but it will invoke
			     * `componentWillUpdate` and `componentDidUpdate`.
			     *
			     * @param {?function} callback Called after update is complete.
			     * @final
			     * @protected
			     */


			    Component.prototype.forceUpdate = function (callback) {
			      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
			    };
			    /**
			     * Deprecated APIs. These APIs used to exist on classic React classes but since
			     * we would like to deprecate them, we're not going to move them over to this
			     * modern base class. Instead, we define a getter that warns if it's accessed.
			     */


			    {
			      var deprecatedAPIs = {
			        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
			        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
			      };

			      var defineDeprecationWarning = function (methodName, info) {
			        Object.defineProperty(Component.prototype, methodName, {
			          get: function () {
			            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
			            return undefined;
			          }
			        });
			      };

			      for (var fnName in deprecatedAPIs) {
			        if (deprecatedAPIs.hasOwnProperty(fnName)) {
			          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
			        }
			      }
			    }

			    function ComponentDummy() {}

			    ComponentDummy.prototype = Component.prototype;
			    /**
			     * Convenience component with default shallow equality check for sCU.
			     */

			    function PureComponent(props, context, updater) {
			      this.props = props;
			      this.context = context; // If a component has string refs, we will assign a different object later.

			      this.refs = emptyObject;
			      this.updater = updater || ReactNoopUpdateQueue;
			    }

			    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
			    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

			    assign(pureComponentPrototype, Component.prototype);
			    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

			    function createRef() {
			      var refObject = {
			        current: null
			      };
			      {
			        Object.seal(refObject);
			      }
			      return refObject;
			    }

			    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

			    function isArray(a) {
			      return isArrayImpl(a);
			    }
			    /*
			     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
			     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
			     *
			     * The functions in this module will throw an easier-to-understand,
			     * easier-to-debug exception with a clear errors message message explaining the
			     * problem. (Instead of a confusing exception thrown inside the implementation
			     * of the `value` object).
			     */
			    // $FlowFixMe only called in DEV, so void return is not possible.


			    function typeName(value) {
			      {
			        // toStringTag is needed for namespaced types like Temporal.Instant
			        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
			        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
			        return type;
			      }
			    } // $FlowFixMe only called in DEV, so void return is not possible.


			    function willCoercionThrow(value) {
			      {
			        try {
			          testStringCoercion(value);
			          return false;
			        } catch (e) {
			          return true;
			        }
			      }
			    }

			    function testStringCoercion(value) {
			      // If you ended up here by following an exception call stack, here's what's
			      // happened: you supplied an object or symbol value to React (as a prop, key,
			      // DOM attribute, CSS property, string ref, etc.) and when React tried to
			      // coerce it to a string using `'' + value`, an exception was thrown.
			      //
			      // The most common types that will cause this exception are `Symbol` instances
			      // and Temporal objects like `Temporal.Instant`. But any object that has a
			      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
			      // exception. (Library authors do this to prevent users from using built-in
			      // numeric operators like `+` or comparison operators like `>=` because custom
			      // methods are needed to perform accurate arithmetic or comparison.)
			      //
			      // To fix the problem, coerce this object or symbol value to a string before
			      // passing it to React. The most reliable way is usually `String(value)`.
			      //
			      // To find which value is throwing, check the browser or debugger console.
			      // Before this exception was thrown, there should be `console.error` output
			      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
			      // problem and how that type was used: key, atrribute, input value prop, etc.
			      // In most cases, this console output also shows the component and its
			      // ancestor components where the exception happened.
			      //
			      // eslint-disable-next-line react-internal/safe-string-coercion
			      return '' + value;
			    }

			    function checkKeyStringCoercion(value) {
			      {
			        if (willCoercionThrow(value)) {
			          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
			          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
			        }
			      }
			    }

			    function getWrappedName(outerType, innerType, wrapperName) {
			      var displayName = outerType.displayName;

			      if (displayName) {
			        return displayName;
			      }

			      var functionName = innerType.displayName || innerType.name || '';
			      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
			    } // Keep in sync with react-reconciler/getComponentNameFromFiber


			    function getContextName(type) {
			      return type.displayName || 'Context';
			    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


			    function getComponentNameFromType(type) {
			      if (type == null) {
			        // Host root, text node or just invalid type.
			        return null;
			      }

			      {
			        if (typeof type.tag === 'number') {
			          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
			        }
			      }

			      if (typeof type === 'function') {
			        return type.displayName || type.name || null;
			      }

			      if (typeof type === 'string') {
			        return type;
			      }

			      switch (type) {
			        case REACT_FRAGMENT_TYPE:
			          return 'Fragment';

			        case REACT_PORTAL_TYPE:
			          return 'Portal';

			        case REACT_PROFILER_TYPE:
			          return 'Profiler';

			        case REACT_STRICT_MODE_TYPE:
			          return 'StrictMode';

			        case REACT_SUSPENSE_TYPE:
			          return 'Suspense';

			        case REACT_SUSPENSE_LIST_TYPE:
			          return 'SuspenseList';
			      }

			      if (typeof type === 'object') {
			        switch (type.$$typeof) {
			          case REACT_CONTEXT_TYPE:
			            var context = type;
			            return getContextName(context) + '.Consumer';

			          case REACT_PROVIDER_TYPE:
			            var provider = type;
			            return getContextName(provider._context) + '.Provider';

			          case REACT_FORWARD_REF_TYPE:
			            return getWrappedName(type, type.render, 'ForwardRef');

			          case REACT_MEMO_TYPE:
			            var outerName = type.displayName || null;

			            if (outerName !== null) {
			              return outerName;
			            }

			            return getComponentNameFromType(type.type) || 'Memo';

			          case REACT_LAZY_TYPE:
			            {
			              var lazyComponent = type;
			              var payload = lazyComponent._payload;
			              var init = lazyComponent._init;

			              try {
			                return getComponentNameFromType(init(payload));
			              } catch (x) {
			                return null;
			              }
			            }
			          // eslint-disable-next-line no-fallthrough
			        }
			      }

			      return null;
			    }

			    var hasOwnProperty = Object.prototype.hasOwnProperty;
			    var RESERVED_PROPS = {
			      key: true,
			      ref: true,
			      __self: true,
			      __source: true
			    };
			    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
			    {
			      didWarnAboutStringRefs = {};
			    }

			    function hasValidRef(config) {
			      {
			        if (hasOwnProperty.call(config, 'ref')) {
			          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

			          if (getter && getter.isReactWarning) {
			            return false;
			          }
			        }
			      }
			      return config.ref !== undefined;
			    }

			    function hasValidKey(config) {
			      {
			        if (hasOwnProperty.call(config, 'key')) {
			          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

			          if (getter && getter.isReactWarning) {
			            return false;
			          }
			        }
			      }
			      return config.key !== undefined;
			    }

			    function defineKeyPropWarningGetter(props, displayName) {
			      var warnAboutAccessingKey = function () {
			        {
			          if (!specialPropKeyWarningShown) {
			            specialPropKeyWarningShown = true;
			            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
			          }
			        }
			      };

			      warnAboutAccessingKey.isReactWarning = true;
			      Object.defineProperty(props, 'key', {
			        get: warnAboutAccessingKey,
			        configurable: true
			      });
			    }

			    function defineRefPropWarningGetter(props, displayName) {
			      var warnAboutAccessingRef = function () {
			        {
			          if (!specialPropRefWarningShown) {
			            specialPropRefWarningShown = true;
			            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
			          }
			        }
			      };

			      warnAboutAccessingRef.isReactWarning = true;
			      Object.defineProperty(props, 'ref', {
			        get: warnAboutAccessingRef,
			        configurable: true
			      });
			    }

			    function warnIfStringRefCannotBeAutoConverted(config) {
			      {
			        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
			          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

			          if (!didWarnAboutStringRefs[componentName]) {
			            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
			            didWarnAboutStringRefs[componentName] = true;
			          }
			        }
			      }
			    }
			    /**
			     * Factory method to create a new React element. This no longer adheres to
			     * the class pattern, so do not use new to call it. Also, instanceof check
			     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
			     * if something is a React Element.
			     *
			     * @param {*} type
			     * @param {*} props
			     * @param {*} key
			     * @param {string|object} ref
			     * @param {*} owner
			     * @param {*} self A *temporary* helper to detect places where `this` is
			     * different from the `owner` when React.createElement is called, so that we
			     * can warn. We want to get rid of owner and replace string `ref`s with arrow
			     * functions, and as long as `this` and owner are the same, there will be no
			     * change in behavior.
			     * @param {*} source An annotation object (added by a transpiler or otherwise)
			     * indicating filename, line number, and/or other information.
			     * @internal
			     */


			    var ReactElement = function (type, key, ref, self, source, owner, props) {
			      var element = {
			        // This tag allows us to uniquely identify this as a React Element
			        $$typeof: REACT_ELEMENT_TYPE,
			        // Built-in properties that belong on the element
			        type: type,
			        key: key,
			        ref: ref,
			        props: props,
			        // Record the component responsible for creating this element.
			        _owner: owner
			      };
			      {
			        // The validation flag is currently mutative. We put it on
			        // an external backing store so that we can freeze the whole object.
			        // This can be replaced with a WeakMap once they are implemented in
			        // commonly used development environments.
			        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
			        // the validation flag non-enumerable (where possible, which should
			        // include every environment we run tests in), so the test framework
			        // ignores it.

			        Object.defineProperty(element._store, 'validated', {
			          configurable: false,
			          enumerable: false,
			          writable: true,
			          value: false
			        }); // self and source are DEV only properties.

			        Object.defineProperty(element, '_self', {
			          configurable: false,
			          enumerable: false,
			          writable: false,
			          value: self
			        }); // Two elements created in two different places should be considered
			        // equal for testing purposes and therefore we hide it from enumeration.

			        Object.defineProperty(element, '_source', {
			          configurable: false,
			          enumerable: false,
			          writable: false,
			          value: source
			        });

			        if (Object.freeze) {
			          Object.freeze(element.props);
			          Object.freeze(element);
			        }
			      }
			      return element;
			    };
			    /**
			     * Create and return a new ReactElement of the given type.
			     * See https://reactjs.org/docs/react-api.html#createelement
			     */


			    function createElement(type, config, children) {
			      var propName; // Reserved names are extracted

			      var props = {};
			      var key = null;
			      var ref = null;
			      var self = null;
			      var source = null;

			      if (config != null) {
			        if (hasValidRef(config)) {
			          ref = config.ref;
			          {
			            warnIfStringRefCannotBeAutoConverted(config);
			          }
			        }

			        if (hasValidKey(config)) {
			          {
			            checkKeyStringCoercion(config.key);
			          }
			          key = '' + config.key;
			        }

			        self = config.__self === undefined ? null : config.__self;
			        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

			        for (propName in config) {
			          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
			            props[propName] = config[propName];
			          }
			        }
			      } // Children can be more than one argument, and those are transferred onto
			      // the newly allocated props object.


			      var childrenLength = arguments.length - 2;

			      if (childrenLength === 1) {
			        props.children = children;
			      } else if (childrenLength > 1) {
			        var childArray = Array(childrenLength);

			        for (var i = 0; i < childrenLength; i++) {
			          childArray[i] = arguments[i + 2];
			        }

			        {
			          if (Object.freeze) {
			            Object.freeze(childArray);
			          }
			        }
			        props.children = childArray;
			      } // Resolve default props


			      if (type && type.defaultProps) {
			        var defaultProps = type.defaultProps;

			        for (propName in defaultProps) {
			          if (props[propName] === undefined) {
			            props[propName] = defaultProps[propName];
			          }
			        }
			      }

			      {
			        if (key || ref) {
			          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

			          if (key) {
			            defineKeyPropWarningGetter(props, displayName);
			          }

			          if (ref) {
			            defineRefPropWarningGetter(props, displayName);
			          }
			        }
			      }
			      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
			    }

			    function cloneAndReplaceKey(oldElement, newKey) {
			      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
			      return newElement;
			    }
			    /**
			     * Clone and return a new ReactElement using element as the starting point.
			     * See https://reactjs.org/docs/react-api.html#cloneelement
			     */


			    function cloneElement(element, config, children) {
			      if (element === null || element === undefined) {
			        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
			      }

			      var propName; // Original props are copied

			      var props = assign({}, element.props); // Reserved names are extracted

			      var key = element.key;
			      var ref = element.ref; // Self is preserved since the owner is preserved.

			      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
			      // transpiler, and the original source is probably a better indicator of the
			      // true owner.

			      var source = element._source; // Owner will be preserved, unless ref is overridden

			      var owner = element._owner;

			      if (config != null) {
			        if (hasValidRef(config)) {
			          // Silently steal the ref from the parent.
			          ref = config.ref;
			          owner = ReactCurrentOwner.current;
			        }

			        if (hasValidKey(config)) {
			          {
			            checkKeyStringCoercion(config.key);
			          }
			          key = '' + config.key;
			        } // Remaining properties override existing props


			        var defaultProps;

			        if (element.type && element.type.defaultProps) {
			          defaultProps = element.type.defaultProps;
			        }

			        for (propName in config) {
			          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
			            if (config[propName] === undefined && defaultProps !== undefined) {
			              // Resolve default props
			              props[propName] = defaultProps[propName];
			            } else {
			              props[propName] = config[propName];
			            }
			          }
			        }
			      } // Children can be more than one argument, and those are transferred onto
			      // the newly allocated props object.


			      var childrenLength = arguments.length - 2;

			      if (childrenLength === 1) {
			        props.children = children;
			      } else if (childrenLength > 1) {
			        var childArray = Array(childrenLength);

			        for (var i = 0; i < childrenLength; i++) {
			          childArray[i] = arguments[i + 2];
			        }

			        props.children = childArray;
			      }

			      return ReactElement(element.type, key, ref, self, source, owner, props);
			    }
			    /**
			     * Verifies the object is a ReactElement.
			     * See https://reactjs.org/docs/react-api.html#isvalidelement
			     * @param {?object} object
			     * @return {boolean} True if `object` is a ReactElement.
			     * @final
			     */


			    function isValidElement(object) {
			      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			    }

			    var SEPARATOR = '.';
			    var SUBSEPARATOR = ':';
			    /**
			     * Escape and wrap key so it is safe to use as a reactid
			     *
			     * @param {string} key to be escaped.
			     * @return {string} the escaped key.
			     */

			    function escape(key) {
			      var escapeRegex = /[=:]/g;
			      var escaperLookup = {
			        '=': '=0',
			        ':': '=2'
			      };
			      var escapedString = key.replace(escapeRegex, function (match) {
			        return escaperLookup[match];
			      });
			      return '$' + escapedString;
			    }
			    /**
			     * TODO: Test that a single child and an array with one item have the same key
			     * pattern.
			     */


			    var didWarnAboutMaps = false;
			    var userProvidedKeyEscapeRegex = /\/+/g;

			    function escapeUserProvidedKey(text) {
			      return text.replace(userProvidedKeyEscapeRegex, '$&/');
			    }
			    /**
			     * Generate a key string that identifies a element within a set.
			     *
			     * @param {*} element A element that could contain a manual key.
			     * @param {number} index Index that is used if a manual key is not provided.
			     * @return {string}
			     */


			    function getElementKey(element, index) {
			      // Do some typechecking here since we call this blindly. We want to ensure
			      // that we don't block potential future ES APIs.
			      if (typeof element === 'object' && element !== null && element.key != null) {
			        // Explicit key
			        {
			          checkKeyStringCoercion(element.key);
			        }
			        return escape('' + element.key);
			      } // Implicit key determined by the index in the set


			      return index.toString(36);
			    }

			    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
			      var type = typeof children;

			      if (type === 'undefined' || type === 'boolean') {
			        // All of the above are perceived as null.
			        children = null;
			      }

			      var invokeCallback = false;

			      if (children === null) {
			        invokeCallback = true;
			      } else {
			        switch (type) {
			          case 'string':
			          case 'number':
			            invokeCallback = true;
			            break;

			          case 'object':
			            switch (children.$$typeof) {
			              case REACT_ELEMENT_TYPE:
			              case REACT_PORTAL_TYPE:
			                invokeCallback = true;
			            }

			        }
			      }

			      if (invokeCallback) {
			        var _child = children;
			        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
			        // so that it's consistent if the number of children grows:

			        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

			        if (isArray(mappedChild)) {
			          var escapedChildKey = '';

			          if (childKey != null) {
			            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
			          }

			          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
			            return c;
			          });
			        } else if (mappedChild != null) {
			          if (isValidElement(mappedChild)) {
			            {
			              // The `if` statement here prevents auto-disabling of the safe
			              // coercion ESLint rule, so we must manually disable it below.
			              // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
			              if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
			                checkKeyStringCoercion(mappedChild.key);
			              }
			            }
			            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
			            // traverseAllChildren used to do for objects as children
			            escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
			            mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
			            // eslint-disable-next-line react-internal/safe-string-coercion
			            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
			          }

			          array.push(mappedChild);
			        }

			        return 1;
			      }

			      var child;
			      var nextName;
			      var subtreeCount = 0; // Count of children found in the current subtree.

			      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

			      if (isArray(children)) {
			        for (var i = 0; i < children.length; i++) {
			          child = children[i];
			          nextName = nextNamePrefix + getElementKey(child, i);
			          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
			        }
			      } else {
			        var iteratorFn = getIteratorFn(children);

			        if (typeof iteratorFn === 'function') {
			          var iterableChildren = children;
			          {
			            // Warn about using Maps as children
			            if (iteratorFn === iterableChildren.entries) {
			              if (!didWarnAboutMaps) {
			                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
			              }

			              didWarnAboutMaps = true;
			            }
			          }
			          var iterator = iteratorFn.call(iterableChildren);
			          var step;
			          var ii = 0;

			          while (!(step = iterator.next()).done) {
			            child = step.value;
			            nextName = nextNamePrefix + getElementKey(child, ii++);
			            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
			          }
			        } else if (type === 'object') {
			          // eslint-disable-next-line react-internal/safe-string-coercion
			          var childrenString = String(children);
			          throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
			        }
			      }

			      return subtreeCount;
			    }
			    /**
			     * Maps children that are typically specified as `props.children`.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
			     *
			     * The provided mapFunction(child, index) will be called for each
			     * leaf child.
			     *
			     * @param {?*} children Children tree container.
			     * @param {function(*, int)} func The map function.
			     * @param {*} context Context for mapFunction.
			     * @return {object} Object containing the ordered map of results.
			     */


			    function mapChildren(children, func, context) {
			      if (children == null) {
			        return children;
			      }

			      var result = [];
			      var count = 0;
			      mapIntoArray(children, result, '', '', function (child) {
			        return func.call(context, child, count++);
			      });
			      return result;
			    }
			    /**
			     * Count the number of children that are typically specified as
			     * `props.children`.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrencount
			     *
			     * @param {?*} children Children tree container.
			     * @return {number} The number of children.
			     */


			    function countChildren(children) {
			      var n = 0;
			      mapChildren(children, function () {
			        n++; // Don't return anything
			      });
			      return n;
			    }
			    /**
			     * Iterates through children that are typically specified as `props.children`.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
			     *
			     * The provided forEachFunc(child, index) will be called for each
			     * leaf child.
			     *
			     * @param {?*} children Children tree container.
			     * @param {function(*, int)} forEachFunc
			     * @param {*} forEachContext Context for forEachContext.
			     */


			    function forEachChildren(children, forEachFunc, forEachContext) {
			      mapChildren(children, function () {
			        forEachFunc.apply(this, arguments); // Don't return anything.
			      }, forEachContext);
			    }
			    /**
			     * Flatten a children object (typically specified as `props.children`) and
			     * return an array with appropriately re-keyed children.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
			     */


			    function toArray(children) {
			      return mapChildren(children, function (child) {
			        return child;
			      }) || [];
			    }
			    /**
			     * Returns the first child in a collection of children and verifies that there
			     * is only one child in the collection.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
			     *
			     * The current implementation of this function assumes that a single child gets
			     * passed without a wrapper, but the purpose of this helper function is to
			     * abstract away the particular structure of children.
			     *
			     * @param {?object} children Child collection structure.
			     * @return {ReactElement} The first and only `ReactElement` contained in the
			     * structure.
			     */


			    function onlyChild(children) {
			      if (!isValidElement(children)) {
			        throw new Error('React.Children.only expected to receive a single React element child.');
			      }

			      return children;
			    }

			    function createContext(defaultValue) {
			      // TODO: Second argument used to be an optional `calculateChangedBits`
			      // function. Warn to reserve for future use?
			      var context = {
			        $$typeof: REACT_CONTEXT_TYPE,
			        // As a workaround to support multiple concurrent renderers, we categorize
			        // some renderers as primary and others as secondary. We only expect
			        // there to be two concurrent renderers at most: React Native (primary) and
			        // Fabric (secondary); React DOM (primary) and React ART (secondary).
			        // Secondary renderers store their context values on separate fields.
			        _currentValue: defaultValue,
			        _currentValue2: defaultValue,
			        // Used to track how many concurrent renderers this context currently
			        // supports within in a single renderer. Such as parallel server rendering.
			        _threadCount: 0,
			        // These are circular
			        Provider: null,
			        Consumer: null,
			        // Add these to use same hidden class in VM as ServerContext
			        _defaultValue: null,
			        _globalName: null
			      };
			      context.Provider = {
			        $$typeof: REACT_PROVIDER_TYPE,
			        _context: context
			      };
			      var hasWarnedAboutUsingNestedContextConsumers = false;
			      var hasWarnedAboutUsingConsumerProvider = false;
			      var hasWarnedAboutDisplayNameOnConsumer = false;
			      {
			        // A separate object, but proxies back to the original context object for
			        // backwards compatibility. It has a different $$typeof, so we can properly
			        // warn for the incorrect usage of Context as a Consumer.
			        var Consumer = {
			          $$typeof: REACT_CONTEXT_TYPE,
			          _context: context
			        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

			        Object.defineProperties(Consumer, {
			          Provider: {
			            get: function () {
			              if (!hasWarnedAboutUsingConsumerProvider) {
			                hasWarnedAboutUsingConsumerProvider = true;
			                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
			              }

			              return context.Provider;
			            },
			            set: function (_Provider) {
			              context.Provider = _Provider;
			            }
			          },
			          _currentValue: {
			            get: function () {
			              return context._currentValue;
			            },
			            set: function (_currentValue) {
			              context._currentValue = _currentValue;
			            }
			          },
			          _currentValue2: {
			            get: function () {
			              return context._currentValue2;
			            },
			            set: function (_currentValue2) {
			              context._currentValue2 = _currentValue2;
			            }
			          },
			          _threadCount: {
			            get: function () {
			              return context._threadCount;
			            },
			            set: function (_threadCount) {
			              context._threadCount = _threadCount;
			            }
			          },
			          Consumer: {
			            get: function () {
			              if (!hasWarnedAboutUsingNestedContextConsumers) {
			                hasWarnedAboutUsingNestedContextConsumers = true;
			                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
			              }

			              return context.Consumer;
			            }
			          },
			          displayName: {
			            get: function () {
			              return context.displayName;
			            },
			            set: function (displayName) {
			              if (!hasWarnedAboutDisplayNameOnConsumer) {
			                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
			                hasWarnedAboutDisplayNameOnConsumer = true;
			              }
			            }
			          }
			        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

			        context.Consumer = Consumer;
			      }
			      {
			        context._currentRenderer = null;
			        context._currentRenderer2 = null;
			      }
			      return context;
			    }

			    var Uninitialized = -1;
			    var Pending = 0;
			    var Resolved = 1;
			    var Rejected = 2;

			    function lazyInitializer(payload) {
			      if (payload._status === Uninitialized) {
			        var ctor = payload._result;
			        var thenable = ctor(); // Transition to the next state.
			        // This might throw either because it's missing or throws. If so, we treat it
			        // as still uninitialized and try again next time. Which is the same as what
			        // happens if the ctor or any wrappers processing the ctor throws. This might
			        // end up fixing it if the resolution was a concurrency bug.

			        thenable.then(function (moduleObject) {
			          if (payload._status === Pending || payload._status === Uninitialized) {
			            // Transition to the next state.
			            var resolved = payload;
			            resolved._status = Resolved;
			            resolved._result = moduleObject;
			          }
			        }, function (error) {
			          if (payload._status === Pending || payload._status === Uninitialized) {
			            // Transition to the next state.
			            var rejected = payload;
			            rejected._status = Rejected;
			            rejected._result = error;
			          }
			        });

			        if (payload._status === Uninitialized) {
			          // In case, we're still uninitialized, then we're waiting for the thenable
			          // to resolve. Set it as pending in the meantime.
			          var pending = payload;
			          pending._status = Pending;
			          pending._result = thenable;
			        }
			      }

			      if (payload._status === Resolved) {
			        var moduleObject = payload._result;
			        {
			          if (moduleObject === undefined) {
			            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
			            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
			          }
			        }
			        {
			          if (!('default' in moduleObject)) {
			            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
			            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
			          }
			        }
			        return moduleObject.default;
			      } else {
			        throw payload._result;
			      }
			    }

			    function lazy(ctor) {
			      var payload = {
			        // We use these fields to store the result.
			        _status: Uninitialized,
			        _result: ctor
			      };
			      var lazyType = {
			        $$typeof: REACT_LAZY_TYPE,
			        _payload: payload,
			        _init: lazyInitializer
			      };
			      {
			        // In production, this would just set it on the object.
			        var defaultProps;
			        var propTypes; // $FlowFixMe

			        Object.defineProperties(lazyType, {
			          defaultProps: {
			            configurable: true,
			            get: function () {
			              return defaultProps;
			            },
			            set: function (newDefaultProps) {
			              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
			              defaultProps = newDefaultProps; // Match production behavior more closely:
			              // $FlowFixMe

			              Object.defineProperty(lazyType, 'defaultProps', {
			                enumerable: true
			              });
			            }
			          },
			          propTypes: {
			            configurable: true,
			            get: function () {
			              return propTypes;
			            },
			            set: function (newPropTypes) {
			              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
			              propTypes = newPropTypes; // Match production behavior more closely:
			              // $FlowFixMe

			              Object.defineProperty(lazyType, 'propTypes', {
			                enumerable: true
			              });
			            }
			          }
			        });
			      }
			      return lazyType;
			    }

			    function forwardRef(render) {
			      {
			        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
			          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
			        } else if (typeof render !== 'function') {
			          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
			        } else {
			          if (render.length !== 0 && render.length !== 2) {
			            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
			          }
			        }

			        if (render != null) {
			          if (render.defaultProps != null || render.propTypes != null) {
			            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
			          }
			        }
			      }
			      var elementType = {
			        $$typeof: REACT_FORWARD_REF_TYPE,
			        render: render
			      };
			      {
			        var ownName;
			        Object.defineProperty(elementType, 'displayName', {
			          enumerable: false,
			          configurable: true,
			          get: function () {
			            return ownName;
			          },
			          set: function (name) {
			            ownName = name; // The inner component shouldn't inherit this display name in most cases,
			            // because the component may be used elsewhere.
			            // But it's nice for anonymous functions to inherit the name,
			            // so that our component-stack generation logic will display their frames.
			            // An anonymous function generally suggests a pattern like:
			            //   React.forwardRef((props, ref) => {...});
			            // This kind of inner function is not used elsewhere so the side effect is okay.

			            if (!render.name && !render.displayName) {
			              render.displayName = name;
			            }
			          }
			        });
			      }
			      return elementType;
			    }

			    var REACT_MODULE_REFERENCE;
			    {
			      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
			    }

			    function isValidElementType(type) {
			      if (typeof type === 'string' || typeof type === 'function') {
			        return true;
			      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


			      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
			        return true;
			      }

			      if (typeof type === 'object' && type !== null) {
			        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
			        // types supported by any Flight configuration anywhere since
			        // we don't know which Flight build this will end up being used
			        // with.
			        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
			          return true;
			        }
			      }

			      return false;
			    }

			    function memo(type, compare) {
			      {
			        if (!isValidElementType(type)) {
			          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
			        }
			      }
			      var elementType = {
			        $$typeof: REACT_MEMO_TYPE,
			        type: type,
			        compare: compare === undefined ? null : compare
			      };
			      {
			        var ownName;
			        Object.defineProperty(elementType, 'displayName', {
			          enumerable: false,
			          configurable: true,
			          get: function () {
			            return ownName;
			          },
			          set: function (name) {
			            ownName = name; // The inner component shouldn't inherit this display name in most cases,
			            // because the component may be used elsewhere.
			            // But it's nice for anonymous functions to inherit the name,
			            // so that our component-stack generation logic will display their frames.
			            // An anonymous function generally suggests a pattern like:
			            //   React.memo((props) => {...});
			            // This kind of inner function is not used elsewhere so the side effect is okay.

			            if (!type.name && !type.displayName) {
			              type.displayName = name;
			            }
			          }
			        });
			      }
			      return elementType;
			    }

			    function resolveDispatcher() {
			      var dispatcher = ReactCurrentDispatcher.current;
			      {
			        if (dispatcher === null) {
			          error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
			        }
			      } // Will result in a null access error if accessed outside render phase. We
			      // intentionally don't throw our own error because this is in a hot path.
			      // Also helps ensure this is inlined.

			      return dispatcher;
			    }

			    function useContext(Context) {
			      var dispatcher = resolveDispatcher();
			      {
			        // TODO: add a more generic warning for invalid values.
			        if (Context._context !== undefined) {
			          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
			          // and nobody should be using this in existing code.

			          if (realContext.Consumer === Context) {
			            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
			          } else if (realContext.Provider === Context) {
			            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
			          }
			        }
			      }
			      return dispatcher.useContext(Context);
			    }

			    function useState(initialState) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useState(initialState);
			    }

			    function useReducer(reducer, initialArg, init) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useReducer(reducer, initialArg, init);
			    }

			    function useRef(initialValue) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useRef(initialValue);
			    }

			    function useEffect(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useEffect(create, deps);
			    }

			    function useInsertionEffect(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useInsertionEffect(create, deps);
			    }

			    function useLayoutEffect(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useLayoutEffect(create, deps);
			    }

			    function useCallback(callback, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useCallback(callback, deps);
			    }

			    function useMemo(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useMemo(create, deps);
			    }

			    function useImperativeHandle(ref, create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useImperativeHandle(ref, create, deps);
			    }

			    function useDebugValue(value, formatterFn) {
			      {
			        var dispatcher = resolveDispatcher();
			        return dispatcher.useDebugValue(value, formatterFn);
			      }
			    }

			    function useTransition() {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useTransition();
			    }

			    function useDeferredValue(value) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useDeferredValue(value);
			    }

			    function useId() {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useId();
			    }

			    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
			    } // Helpers to patch console.logs to avoid logging during side-effect free
			    // replaying on render function. This currently only patches the object
			    // lazily which won't cover if the log function was extracted eagerly.
			    // We could also eagerly patch the method.


			    var disabledDepth = 0;
			    var prevLog;
			    var prevInfo;
			    var prevWarn;
			    var prevError;
			    var prevGroup;
			    var prevGroupCollapsed;
			    var prevGroupEnd;

			    function disabledLog() {}

			    disabledLog.__reactDisabledLog = true;

			    function disableLogs() {
			      {
			        if (disabledDepth === 0) {
			          /* eslint-disable react-internal/no-production-logging */
			          prevLog = console.log;
			          prevInfo = console.info;
			          prevWarn = console.warn;
			          prevError = console.error;
			          prevGroup = console.group;
			          prevGroupCollapsed = console.groupCollapsed;
			          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

			          var props = {
			            configurable: true,
			            enumerable: true,
			            value: disabledLog,
			            writable: true
			          }; // $FlowFixMe Flow thinks console is immutable.

			          Object.defineProperties(console, {
			            info: props,
			            log: props,
			            warn: props,
			            error: props,
			            group: props,
			            groupCollapsed: props,
			            groupEnd: props
			          });
			          /* eslint-enable react-internal/no-production-logging */
			        }

			        disabledDepth++;
			      }
			    }

			    function reenableLogs() {
			      {
			        disabledDepth--;

			        if (disabledDepth === 0) {
			          /* eslint-disable react-internal/no-production-logging */
			          var props = {
			            configurable: true,
			            enumerable: true,
			            writable: true
			          }; // $FlowFixMe Flow thinks console is immutable.

			          Object.defineProperties(console, {
			            log: assign({}, props, {
			              value: prevLog
			            }),
			            info: assign({}, props, {
			              value: prevInfo
			            }),
			            warn: assign({}, props, {
			              value: prevWarn
			            }),
			            error: assign({}, props, {
			              value: prevError
			            }),
			            group: assign({}, props, {
			              value: prevGroup
			            }),
			            groupCollapsed: assign({}, props, {
			              value: prevGroupCollapsed
			            }),
			            groupEnd: assign({}, props, {
			              value: prevGroupEnd
			            })
			          });
			          /* eslint-enable react-internal/no-production-logging */
			        }

			        if (disabledDepth < 0) {
			          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
			        }
			      }
			    }

			    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
			    var prefix;

			    function describeBuiltInComponentFrame(name, source, ownerFn) {
			      {
			        if (prefix === undefined) {
			          // Extract the VM specific prefix used by each line.
			          try {
			            throw Error();
			          } catch (x) {
			            var match = x.stack.trim().match(/\n( *(at )?)/);
			            prefix = match && match[1] || '';
			          }
			        } // We use the prefix to ensure our stacks line up with native stack frames.


			        return '\n' + prefix + name;
			      }
			    }

			    var reentry = false;
			    var componentFrameCache;
			    {
			      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
			      componentFrameCache = new PossiblyWeakMap();
			    }

			    function describeNativeComponentFrame(fn, construct) {
			      // If something asked for a stack inside a fake render, it should get ignored.
			      if (!fn || reentry) {
			        return '';
			      }

			      {
			        var frame = componentFrameCache.get(fn);

			        if (frame !== undefined) {
			          return frame;
			        }
			      }
			      var control;
			      reentry = true;
			      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

			      Error.prepareStackTrace = undefined;
			      var previousDispatcher;
			      {
			        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
			        // for warnings.

			        ReactCurrentDispatcher$1.current = null;
			        disableLogs();
			      }

			      try {
			        // This should throw.
			        if (construct) {
			          // Something should be setting the props in the constructor.
			          var Fake = function () {
			            throw Error();
			          }; // $FlowFixMe


			          Object.defineProperty(Fake.prototype, 'props', {
			            set: function () {
			              // We use a throwing setter instead of frozen or non-writable props
			              // because that won't throw in a non-strict mode function.
			              throw Error();
			            }
			          });

			          if (typeof Reflect === 'object' && Reflect.construct) {
			            // We construct a different control for this case to include any extra
			            // frames added by the construct call.
			            try {
			              Reflect.construct(Fake, []);
			            } catch (x) {
			              control = x;
			            }

			            Reflect.construct(fn, [], Fake);
			          } else {
			            try {
			              Fake.call();
			            } catch (x) {
			              control = x;
			            }

			            fn.call(Fake.prototype);
			          }
			        } else {
			          try {
			            throw Error();
			          } catch (x) {
			            control = x;
			          }

			          fn();
			        }
			      } catch (sample) {
			        // This is inlined manually because closure doesn't do it for us.
			        if (sample && control && typeof sample.stack === 'string') {
			          // This extracts the first frame from the sample that isn't also in the control.
			          // Skipping one frame that we assume is the frame that calls the two.
			          var sampleLines = sample.stack.split('\n');
			          var controlLines = control.stack.split('\n');
			          var s = sampleLines.length - 1;
			          var c = controlLines.length - 1;

			          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
			            // We expect at least one stack frame to be shared.
			            // Typically this will be the root most one. However, stack frames may be
			            // cut off due to maximum stack limits. In this case, one maybe cut off
			            // earlier than the other. We assume that the sample is longer or the same
			            // and there for cut off earlier. So we should find the root most frame in
			            // the sample somewhere in the control.
			            c--;
			          }

			          for (; s >= 1 && c >= 0; s--, c--) {
			            // Next we find the first one that isn't the same which should be the
			            // frame that called our sample function and the control.
			            if (sampleLines[s] !== controlLines[c]) {
			              // In V8, the first line is describing the message but other VMs don't.
			              // If we're about to return the first line, and the control is also on the same
			              // line, that's a pretty good indicator that our sample threw at same line as
			              // the control. I.e. before we entered the sample frame. So we ignore this result.
			              // This can happen if you passed a class to function component, or non-function.
			              if (s !== 1 || c !== 1) {
			                do {
			                  s--;
			                  c--; // We may still have similar intermediate frames from the construct call.
			                  // The next one that isn't the same should be our match though.

			                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
			                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
			                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
			                    // but we have a user-provided "displayName"
			                    // splice it in to make the stack more readable.


			                    if (fn.displayName && _frame.includes('<anonymous>')) {
			                      _frame = _frame.replace('<anonymous>', fn.displayName);
			                    }

			                    {
			                      if (typeof fn === 'function') {
			                        componentFrameCache.set(fn, _frame);
			                      }
			                    } // Return the line we found.

			                    return _frame;
			                  }
			                } while (s >= 1 && c >= 0);
			              }

			              break;
			            }
			          }
			        }
			      } finally {
			        reentry = false;
			        {
			          ReactCurrentDispatcher$1.current = previousDispatcher;
			          reenableLogs();
			        }
			        Error.prepareStackTrace = previousPrepareStackTrace;
			      } // Fallback to just using the name if we couldn't make it throw.


			      var name = fn ? fn.displayName || fn.name : '';
			      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
			      {
			        if (typeof fn === 'function') {
			          componentFrameCache.set(fn, syntheticFrame);
			        }
			      }
			      return syntheticFrame;
			    }

			    function describeFunctionComponentFrame(fn, source, ownerFn) {
			      {
			        return describeNativeComponentFrame(fn, false);
			      }
			    }

			    function shouldConstruct(Component) {
			      var prototype = Component.prototype;
			      return !!(prototype && prototype.isReactComponent);
			    }

			    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
			      if (type == null) {
			        return '';
			      }

			      if (typeof type === 'function') {
			        {
			          return describeNativeComponentFrame(type, shouldConstruct(type));
			        }
			      }

			      if (typeof type === 'string') {
			        return describeBuiltInComponentFrame(type);
			      }

			      switch (type) {
			        case REACT_SUSPENSE_TYPE:
			          return describeBuiltInComponentFrame('Suspense');

			        case REACT_SUSPENSE_LIST_TYPE:
			          return describeBuiltInComponentFrame('SuspenseList');
			      }

			      if (typeof type === 'object') {
			        switch (type.$$typeof) {
			          case REACT_FORWARD_REF_TYPE:
			            return describeFunctionComponentFrame(type.render);

			          case REACT_MEMO_TYPE:
			            // Memo may contain any component type so we recursively resolve it.
			            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

			          case REACT_LAZY_TYPE:
			            {
			              var lazyComponent = type;
			              var payload = lazyComponent._payload;
			              var init = lazyComponent._init;

			              try {
			                // Lazy may contain any component type so we recursively resolve it.
			                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
			              } catch (x) {}
			            }
			        }
			      }

			      return '';
			    }

			    var loggedTypeFailures = {};
			    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

			    function setCurrentlyValidatingElement(element) {
			      {
			        if (element) {
			          var owner = element._owner;
			          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
			          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
			        } else {
			          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
			        }
			      }
			    }

			    function checkPropTypes(typeSpecs, values, location, componentName, element) {
			      {
			        // $FlowFixMe This is okay but Flow doesn't know it.
			        var has = Function.call.bind(hasOwnProperty);

			        for (var typeSpecName in typeSpecs) {
			          if (has(typeSpecs, typeSpecName)) {
			            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
			            // fail the render phase where it didn't fail before. So we log it.
			            // After these have been cleaned up, we'll let them throw.

			            try {
			              // This is intentionally an invariant that gets caught. It's the same
			              // behavior as without this statement except with a better message.
			              if (typeof typeSpecs[typeSpecName] !== 'function') {
			                // eslint-disable-next-line react-internal/prod-error-codes
			                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
			                err.name = 'Invariant Violation';
			                throw err;
			              }

			              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
			            } catch (ex) {
			              error$1 = ex;
			            }

			            if (error$1 && !(error$1 instanceof Error)) {
			              setCurrentlyValidatingElement(element);
			              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
			              setCurrentlyValidatingElement(null);
			            }

			            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
			              // Only monitor this failure once because there tends to be a lot of the
			              // same error.
			              loggedTypeFailures[error$1.message] = true;
			              setCurrentlyValidatingElement(element);
			              error('Failed %s type: %s', location, error$1.message);
			              setCurrentlyValidatingElement(null);
			            }
			          }
			        }
			      }
			    }

			    function setCurrentlyValidatingElement$1(element) {
			      {
			        if (element) {
			          var owner = element._owner;
			          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
			          setExtraStackFrame(stack);
			        } else {
			          setExtraStackFrame(null);
			        }
			      }
			    }

			    var propTypesMisspellWarningShown;
			    {
			      propTypesMisspellWarningShown = false;
			    }

			    function getDeclarationErrorAddendum() {
			      if (ReactCurrentOwner.current) {
			        var name = getComponentNameFromType(ReactCurrentOwner.current.type);

			        if (name) {
			          return '\n\nCheck the render method of `' + name + '`.';
			        }
			      }

			      return '';
			    }

			    function getSourceInfoErrorAddendum(source) {
			      if (source !== undefined) {
			        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
			        var lineNumber = source.lineNumber;
			        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
			      }

			      return '';
			    }

			    function getSourceInfoErrorAddendumForProps(elementProps) {
			      if (elementProps !== null && elementProps !== undefined) {
			        return getSourceInfoErrorAddendum(elementProps.__source);
			      }

			      return '';
			    }
			    /**
			     * Warn if there's no key explicitly set on dynamic arrays of children or
			     * object keys are not valid. This allows us to keep track of children between
			     * updates.
			     */


			    var ownerHasKeyUseWarning = {};

			    function getCurrentComponentErrorInfo(parentType) {
			      var info = getDeclarationErrorAddendum();

			      if (!info) {
			        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

			        if (parentName) {
			          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
			        }
			      }

			      return info;
			    }
			    /**
			     * Warn if the element doesn't have an explicit key assigned to it.
			     * This element is in an array. The array could grow and shrink or be
			     * reordered. All children that haven't already been validated are required to
			     * have a "key" property assigned to it. Error statuses are cached so a warning
			     * will only be shown once.
			     *
			     * @internal
			     * @param {ReactElement} element Element that requires a key.
			     * @param {*} parentType element's parent's type.
			     */


			    function validateExplicitKey(element, parentType) {
			      if (!element._store || element._store.validated || element.key != null) {
			        return;
			      }

			      element._store.validated = true;
			      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

			      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
			        return;
			      }

			      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
			      // property, it may be the creator of the child that's responsible for
			      // assigning it a key.

			      var childOwner = '';

			      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
			        // Give the component that originally created this child.
			        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
			      }

			      {
			        setCurrentlyValidatingElement$1(element);
			        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
			        setCurrentlyValidatingElement$1(null);
			      }
			    }
			    /**
			     * Ensure that every element either is passed in a static location, in an
			     * array with an explicit keys property defined, or in an object literal
			     * with valid key property.
			     *
			     * @internal
			     * @param {ReactNode} node Statically passed child of any type.
			     * @param {*} parentType node's parent's type.
			     */


			    function validateChildKeys(node, parentType) {
			      if (typeof node !== 'object') {
			        return;
			      }

			      if (isArray(node)) {
			        for (var i = 0; i < node.length; i++) {
			          var child = node[i];

			          if (isValidElement(child)) {
			            validateExplicitKey(child, parentType);
			          }
			        }
			      } else if (isValidElement(node)) {
			        // This element was passed in a valid location.
			        if (node._store) {
			          node._store.validated = true;
			        }
			      } else if (node) {
			        var iteratorFn = getIteratorFn(node);

			        if (typeof iteratorFn === 'function') {
			          // Entry iterators used to provide implicit keys,
			          // but now we print a separate warning for them later.
			          if (iteratorFn !== node.entries) {
			            var iterator = iteratorFn.call(node);
			            var step;

			            while (!(step = iterator.next()).done) {
			              if (isValidElement(step.value)) {
			                validateExplicitKey(step.value, parentType);
			              }
			            }
			          }
			        }
			      }
			    }
			    /**
			     * Given an element, validate that its props follow the propTypes definition,
			     * provided by the type.
			     *
			     * @param {ReactElement} element
			     */


			    function validatePropTypes(element) {
			      {
			        var type = element.type;

			        if (type === null || type === undefined || typeof type === 'string') {
			          return;
			        }

			        var propTypes;

			        if (typeof type === 'function') {
			          propTypes = type.propTypes;
			        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
			        // Inner props are checked in the reconciler.
			        type.$$typeof === REACT_MEMO_TYPE)) {
			          propTypes = type.propTypes;
			        } else {
			          return;
			        }

			        if (propTypes) {
			          // Intentionally inside to avoid triggering lazy initializers:
			          var name = getComponentNameFromType(type);
			          checkPropTypes(propTypes, element.props, 'prop', name, element);
			        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
			          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

			          var _name = getComponentNameFromType(type);

			          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
			        }

			        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
			          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
			        }
			      }
			    }
			    /**
			     * Given a fragment, validate that it can only be provided with fragment props
			     * @param {ReactElement} fragment
			     */


			    function validateFragmentProps(fragment) {
			      {
			        var keys = Object.keys(fragment.props);

			        for (var i = 0; i < keys.length; i++) {
			          var key = keys[i];

			          if (key !== 'children' && key !== 'key') {
			            setCurrentlyValidatingElement$1(fragment);
			            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
			            setCurrentlyValidatingElement$1(null);
			            break;
			          }
			        }

			        if (fragment.ref !== null) {
			          setCurrentlyValidatingElement$1(fragment);
			          error('Invalid attribute `ref` supplied to `React.Fragment`.');
			          setCurrentlyValidatingElement$1(null);
			        }
			      }
			    }

			    function createElementWithValidation(type, props, children) {
			      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
			      // succeed and there will likely be errors in render.

			      if (!validType) {
			        var info = '';

			        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
			          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
			        }

			        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

			        if (sourceInfo) {
			          info += sourceInfo;
			        } else {
			          info += getDeclarationErrorAddendum();
			        }

			        var typeString;

			        if (type === null) {
			          typeString = 'null';
			        } else if (isArray(type)) {
			          typeString = 'array';
			        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
			          typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
			          info = ' Did you accidentally export a JSX literal instead of a component?';
			        } else {
			          typeString = typeof type;
			        }

			        {
			          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
			        }
			      }

			      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
			      // TODO: Drop this when these are no longer allowed as the type argument.

			      if (element == null) {
			        return element;
			      } // Skip key warning if the type isn't valid since our key validation logic
			      // doesn't expect a non-string/function type and can throw confusing errors.
			      // We don't want exception behavior to differ between dev and prod.
			      // (Rendering will throw with a helpful message and as soon as the type is
			      // fixed, the key warnings will appear.)


			      if (validType) {
			        for (var i = 2; i < arguments.length; i++) {
			          validateChildKeys(arguments[i], type);
			        }
			      }

			      if (type === REACT_FRAGMENT_TYPE) {
			        validateFragmentProps(element);
			      } else {
			        validatePropTypes(element);
			      }

			      return element;
			    }

			    var didWarnAboutDeprecatedCreateFactory = false;

			    function createFactoryWithValidation(type) {
			      var validatedFactory = createElementWithValidation.bind(null, type);
			      validatedFactory.type = type;
			      {
			        if (!didWarnAboutDeprecatedCreateFactory) {
			          didWarnAboutDeprecatedCreateFactory = true;
			          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
			        } // Legacy hook: remove it


			        Object.defineProperty(validatedFactory, 'type', {
			          enumerable: false,
			          get: function () {
			            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
			            Object.defineProperty(this, 'type', {
			              value: type
			            });
			            return type;
			          }
			        });
			      }
			      return validatedFactory;
			    }

			    function cloneElementWithValidation(element, props, children) {
			      var newElement = cloneElement.apply(this, arguments);

			      for (var i = 2; i < arguments.length; i++) {
			        validateChildKeys(arguments[i], newElement.type);
			      }

			      validatePropTypes(newElement);
			      return newElement;
			    }

			    function startTransition(scope, options) {
			      var prevTransition = ReactCurrentBatchConfig.transition;
			      ReactCurrentBatchConfig.transition = {};
			      var currentTransition = ReactCurrentBatchConfig.transition;
			      {
			        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
			      }

			      try {
			        scope();
			      } finally {
			        ReactCurrentBatchConfig.transition = prevTransition;
			        {
			          if (prevTransition === null && currentTransition._updatedFibers) {
			            var updatedFibersCount = currentTransition._updatedFibers.size;

			            if (updatedFibersCount > 10) {
			              warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
			            }

			            currentTransition._updatedFibers.clear();
			          }
			        }
			      }
			    }

			    var didWarnAboutMessageChannel = false;
			    var enqueueTaskImpl = null;

			    function enqueueTask(task) {
			      if (enqueueTaskImpl === null) {
			        try {
			          // read require off the module object to get around the bundlers.
			          // we don't want them to detect a require and bundle a Node polyfill.
			          var requireString = ('require' + Math.random()).slice(0, 7);
			          var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
			          // version of setImmediate, bypassing fake timers if any.

			          enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
			        } catch (_err) {
			          // we're in a browser
			          // we can't use regular timers because they may still be faked
			          // so we try MessageChannel+postMessage instead
			          enqueueTaskImpl = function (callback) {
			            {
			              if (didWarnAboutMessageChannel === false) {
			                didWarnAboutMessageChannel = true;

			                if (typeof MessageChannel === 'undefined') {
			                  error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
			                }
			              }
			            }
			            var channel = new MessageChannel();
			            channel.port1.onmessage = callback;
			            channel.port2.postMessage(undefined);
			          };
			        }
			      }

			      return enqueueTaskImpl(task);
			    }

			    var actScopeDepth = 0;
			    var didWarnNoAwaitAct = false;

			    function act(callback) {
			      {
			        // `act` calls can be nested, so we track the depth. This represents the
			        // number of `act` scopes on the stack.
			        var prevActScopeDepth = actScopeDepth;
			        actScopeDepth++;

			        if (ReactCurrentActQueue.current === null) {
			          // This is the outermost `act` scope. Initialize the queue. The reconciler
			          // will detect the queue and use it instead of Scheduler.
			          ReactCurrentActQueue.current = [];
			        }

			        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
			        var result;

			        try {
			          // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
			          // set to `true` while the given callback is executed, not for updates
			          // triggered during an async event, because this is how the legacy
			          // implementation of `act` behaved.
			          ReactCurrentActQueue.isBatchingLegacy = true;
			          result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
			          // which flushed updates immediately after the scope function exits, even
			          // if it's an async function.

			          if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
			            var queue = ReactCurrentActQueue.current;

			            if (queue !== null) {
			              ReactCurrentActQueue.didScheduleLegacyUpdate = false;
			              flushActQueue(queue);
			            }
			          }
			        } catch (error) {
			          popActScope(prevActScopeDepth);
			          throw error;
			        } finally {
			          ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
			        }

			        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
			          var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
			          // for it to resolve before exiting the current scope.

			          var wasAwaited = false;
			          var thenable = {
			            then: function (resolve, reject) {
			              wasAwaited = true;
			              thenableResult.then(function (returnValue) {
			                popActScope(prevActScopeDepth);

			                if (actScopeDepth === 0) {
			                  // We've exited the outermost act scope. Recursively flush the
			                  // queue until there's no remaining work.
			                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
			                } else {
			                  resolve(returnValue);
			                }
			              }, function (error) {
			                // The callback threw an error.
			                popActScope(prevActScopeDepth);
			                reject(error);
			              });
			            }
			          };
			          {
			            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
			              // eslint-disable-next-line no-undef
			              Promise.resolve().then(function () {}).then(function () {
			                if (!wasAwaited) {
			                  didWarnNoAwaitAct = true;
			                  error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
			                }
			              });
			            }
			          }
			          return thenable;
			        } else {
			          var returnValue = result; // The callback is not an async function. Exit the current scope
			          // immediately, without awaiting.

			          popActScope(prevActScopeDepth);

			          if (actScopeDepth === 0) {
			            // Exiting the outermost act scope. Flush the queue.
			            var _queue = ReactCurrentActQueue.current;

			            if (_queue !== null) {
			              flushActQueue(_queue);
			              ReactCurrentActQueue.current = null;
			            } // Return a thenable. If the user awaits it, we'll flush again in
			            // case additional work was scheduled by a microtask.


			            var _thenable = {
			              then: function (resolve, reject) {
			                // Confirm we haven't re-entered another `act` scope, in case
			                // the user does something weird like await the thenable
			                // multiple times.
			                if (ReactCurrentActQueue.current === null) {
			                  // Recursively flush the queue until there's no remaining work.
			                  ReactCurrentActQueue.current = [];
			                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
			                } else {
			                  resolve(returnValue);
			                }
			              }
			            };
			            return _thenable;
			          } else {
			            // Since we're inside a nested `act` scope, the returned thenable
			            // immediately resolves. The outer scope will flush the queue.
			            var _thenable2 = {
			              then: function (resolve, reject) {
			                resolve(returnValue);
			              }
			            };
			            return _thenable2;
			          }
			        }
			      }
			    }

			    function popActScope(prevActScopeDepth) {
			      {
			        if (prevActScopeDepth !== actScopeDepth - 1) {
			          error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
			        }

			        actScopeDepth = prevActScopeDepth;
			      }
			    }

			    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
			      {
			        var queue = ReactCurrentActQueue.current;

			        if (queue !== null) {
			          try {
			            flushActQueue(queue);
			            enqueueTask(function () {
			              if (queue.length === 0) {
			                // No additional work was scheduled. Finish.
			                ReactCurrentActQueue.current = null;
			                resolve(returnValue);
			              } else {
			                // Keep flushing work until there's none left.
			                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
			              }
			            });
			          } catch (error) {
			            reject(error);
			          }
			        } else {
			          resolve(returnValue);
			        }
			      }
			    }

			    var isFlushing = false;

			    function flushActQueue(queue) {
			      {
			        if (!isFlushing) {
			          // Prevent re-entrance.
			          isFlushing = true;
			          var i = 0;

			          try {
			            for (; i < queue.length; i++) {
			              var callback = queue[i];

			              do {
			                callback = callback(true);
			              } while (callback !== null);
			            }

			            queue.length = 0;
			          } catch (error) {
			            // If something throws, leave the remaining callbacks on the queue.
			            queue = queue.slice(i + 1);
			            throw error;
			          } finally {
			            isFlushing = false;
			          }
			        }
			      }
			    }

			    var createElement$1 = createElementWithValidation;
			    var cloneElement$1 = cloneElementWithValidation;
			    var createFactory = createFactoryWithValidation;
			    var Children = {
			      map: mapChildren,
			      forEach: forEachChildren,
			      count: countChildren,
			      toArray: toArray,
			      only: onlyChild
			    };
			    exports.Children = Children;
			    exports.Component = Component;
			    exports.Fragment = REACT_FRAGMENT_TYPE;
			    exports.Profiler = REACT_PROFILER_TYPE;
			    exports.PureComponent = PureComponent;
			    exports.StrictMode = REACT_STRICT_MODE_TYPE;
			    exports.Suspense = REACT_SUSPENSE_TYPE;
			    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
			    exports.cloneElement = cloneElement$1;
			    exports.createContext = createContext;
			    exports.createElement = createElement$1;
			    exports.createFactory = createFactory;
			    exports.createRef = createRef;
			    exports.forwardRef = forwardRef;
			    exports.isValidElement = isValidElement;
			    exports.lazy = lazy;
			    exports.memo = memo;
			    exports.startTransition = startTransition;
			    exports.unstable_act = act;
			    exports.useCallback = useCallback;
			    exports.useContext = useContext;
			    exports.useDebugValue = useDebugValue;
			    exports.useDeferredValue = useDeferredValue;
			    exports.useEffect = useEffect;
			    exports.useId = useId;
			    exports.useImperativeHandle = useImperativeHandle;
			    exports.useInsertionEffect = useInsertionEffect;
			    exports.useLayoutEffect = useLayoutEffect;
			    exports.useMemo = useMemo;
			    exports.useReducer = useReducer;
			    exports.useRef = useRef;
			    exports.useState = useState;
			    exports.useSyncExternalStore = useSyncExternalStore;
			    exports.useTransition = useTransition;
			    exports.version = ReactVersion;
			    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

			    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
			      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
			    }
			  })();
			}
	} (react_development$1, react_development$1.exports));
		return react_development$1.exports;
	}

	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReact_production_min$1();
		} else {
		  module.exports = requireReact_development$1();
		}
	} (react$1));

	var React = /*@__PURE__*/getDefaultExportFromCjs(react$1.exports);

	var propTypes = {exports: {}};

	var reactIs = {exports: {}};

	var reactIs_production_min = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactIs_production_min;

	function requireReactIs_production_min () {
		if (hasRequiredReactIs_production_min) return reactIs_production_min;
		hasRequiredReactIs_production_min = 1;

		var b = "function" === typeof Symbol && Symbol.for,
		    c = b ? Symbol.for("react.element") : 60103,
		    d = b ? Symbol.for("react.portal") : 60106,
		    e = b ? Symbol.for("react.fragment") : 60107,
		    f = b ? Symbol.for("react.strict_mode") : 60108,
		    g = b ? Symbol.for("react.profiler") : 60114,
		    h = b ? Symbol.for("react.provider") : 60109,
		    k = b ? Symbol.for("react.context") : 60110,
		    l = b ? Symbol.for("react.async_mode") : 60111,
		    m = b ? Symbol.for("react.concurrent_mode") : 60111,
		    n = b ? Symbol.for("react.forward_ref") : 60112,
		    p = b ? Symbol.for("react.suspense") : 60113,
		    q = b ? Symbol.for("react.suspense_list") : 60120,
		    r = b ? Symbol.for("react.memo") : 60115,
		    t = b ? Symbol.for("react.lazy") : 60116,
		    v = b ? Symbol.for("react.block") : 60121,
		    w = b ? Symbol.for("react.fundamental") : 60117,
		    x = b ? Symbol.for("react.responder") : 60118,
		    y = b ? Symbol.for("react.scope") : 60119;

		function z(a) {
		  if ("object" === typeof a && null !== a) {
		    var u = a.$$typeof;

		    switch (u) {
		      case c:
		        switch (a = a.type, a) {
		          case l:
		          case m:
		          case e:
		          case g:
		          case f:
		          case p:
		            return a;

		          default:
		            switch (a = a && a.$$typeof, a) {
		              case k:
		              case n:
		              case t:
		              case r:
		              case h:
		                return a;

		              default:
		                return u;
		            }

		        }

		      case d:
		        return u;
		    }
		  }
		}

		function A(a) {
		  return z(a) === m;
		}

		reactIs_production_min.AsyncMode = l;
		reactIs_production_min.ConcurrentMode = m;
		reactIs_production_min.ContextConsumer = k;
		reactIs_production_min.ContextProvider = h;
		reactIs_production_min.Element = c;
		reactIs_production_min.ForwardRef = n;
		reactIs_production_min.Fragment = e;
		reactIs_production_min.Lazy = t;
		reactIs_production_min.Memo = r;
		reactIs_production_min.Portal = d;
		reactIs_production_min.Profiler = g;
		reactIs_production_min.StrictMode = f;
		reactIs_production_min.Suspense = p;

		reactIs_production_min.isAsyncMode = function (a) {
		  return A(a) || z(a) === l;
		};

		reactIs_production_min.isConcurrentMode = A;

		reactIs_production_min.isContextConsumer = function (a) {
		  return z(a) === k;
		};

		reactIs_production_min.isContextProvider = function (a) {
		  return z(a) === h;
		};

		reactIs_production_min.isElement = function (a) {
		  return "object" === typeof a && null !== a && a.$$typeof === c;
		};

		reactIs_production_min.isForwardRef = function (a) {
		  return z(a) === n;
		};

		reactIs_production_min.isFragment = function (a) {
		  return z(a) === e;
		};

		reactIs_production_min.isLazy = function (a) {
		  return z(a) === t;
		};

		reactIs_production_min.isMemo = function (a) {
		  return z(a) === r;
		};

		reactIs_production_min.isPortal = function (a) {
		  return z(a) === d;
		};

		reactIs_production_min.isProfiler = function (a) {
		  return z(a) === g;
		};

		reactIs_production_min.isStrictMode = function (a) {
		  return z(a) === f;
		};

		reactIs_production_min.isSuspense = function (a) {
		  return z(a) === p;
		};

		reactIs_production_min.isValidElementType = function (a) {
		  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
		};

		reactIs_production_min.typeOf = z;
		return reactIs_production_min;
	}

	var reactIs_development = {};

	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactIs_development;

	function requireReactIs_development () {
		if (hasRequiredReactIs_development) return reactIs_development;
		hasRequiredReactIs_development = 1;

		if (process.env.NODE_ENV !== "production") {
		  (function () {
		    // nor polyfill, then a plain number is used for performance.

		    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
		    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
		    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
		    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
		    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
		    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
		    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
		    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
		    // (unstable) APIs that have been removed. Can we remove the symbols?

		    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
		    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
		    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
		    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
		    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
		    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
		    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
		    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
		    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
		    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
		    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

		    function isValidElementType(type) {
		      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
		      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		    }

		    function typeOf(object) {
		      if (typeof object === 'object' && object !== null) {
		        var $$typeof = object.$$typeof;

		        switch ($$typeof) {
		          case REACT_ELEMENT_TYPE:
		            var type = object.type;

		            switch (type) {
		              case REACT_ASYNC_MODE_TYPE:
		              case REACT_CONCURRENT_MODE_TYPE:
		              case REACT_FRAGMENT_TYPE:
		              case REACT_PROFILER_TYPE:
		              case REACT_STRICT_MODE_TYPE:
		              case REACT_SUSPENSE_TYPE:
		                return type;

		              default:
		                var $$typeofType = type && type.$$typeof;

		                switch ($$typeofType) {
		                  case REACT_CONTEXT_TYPE:
		                  case REACT_FORWARD_REF_TYPE:
		                  case REACT_LAZY_TYPE:
		                  case REACT_MEMO_TYPE:
		                  case REACT_PROVIDER_TYPE:
		                    return $$typeofType;

		                  default:
		                    return $$typeof;
		                }

		            }

		          case REACT_PORTAL_TYPE:
		            return $$typeof;
		        }
		      }

		      return undefined;
		    } // AsyncMode is deprecated along with isAsyncMode


		    var AsyncMode = REACT_ASYNC_MODE_TYPE;
		    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		    var ContextConsumer = REACT_CONTEXT_TYPE;
		    var ContextProvider = REACT_PROVIDER_TYPE;
		    var Element = REACT_ELEMENT_TYPE;
		    var ForwardRef = REACT_FORWARD_REF_TYPE;
		    var Fragment = REACT_FRAGMENT_TYPE;
		    var Lazy = REACT_LAZY_TYPE;
		    var Memo = REACT_MEMO_TYPE;
		    var Portal = REACT_PORTAL_TYPE;
		    var Profiler = REACT_PROFILER_TYPE;
		    var StrictMode = REACT_STRICT_MODE_TYPE;
		    var Suspense = REACT_SUSPENSE_TYPE;
		    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

		    function isAsyncMode(object) {
		      {
		        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
		          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

		          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
		        }
		      }
		      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		    }

		    function isConcurrentMode(object) {
		      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		    }

		    function isContextConsumer(object) {
		      return typeOf(object) === REACT_CONTEXT_TYPE;
		    }

		    function isContextProvider(object) {
		      return typeOf(object) === REACT_PROVIDER_TYPE;
		    }

		    function isElement(object) {
		      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		    }

		    function isForwardRef(object) {
		      return typeOf(object) === REACT_FORWARD_REF_TYPE;
		    }

		    function isFragment(object) {
		      return typeOf(object) === REACT_FRAGMENT_TYPE;
		    }

		    function isLazy(object) {
		      return typeOf(object) === REACT_LAZY_TYPE;
		    }

		    function isMemo(object) {
		      return typeOf(object) === REACT_MEMO_TYPE;
		    }

		    function isPortal(object) {
		      return typeOf(object) === REACT_PORTAL_TYPE;
		    }

		    function isProfiler(object) {
		      return typeOf(object) === REACT_PROFILER_TYPE;
		    }

		    function isStrictMode(object) {
		      return typeOf(object) === REACT_STRICT_MODE_TYPE;
		    }

		    function isSuspense(object) {
		      return typeOf(object) === REACT_SUSPENSE_TYPE;
		    }

		    reactIs_development.AsyncMode = AsyncMode;
		    reactIs_development.ConcurrentMode = ConcurrentMode;
		    reactIs_development.ContextConsumer = ContextConsumer;
		    reactIs_development.ContextProvider = ContextProvider;
		    reactIs_development.Element = Element;
		    reactIs_development.ForwardRef = ForwardRef;
		    reactIs_development.Fragment = Fragment;
		    reactIs_development.Lazy = Lazy;
		    reactIs_development.Memo = Memo;
		    reactIs_development.Portal = Portal;
		    reactIs_development.Profiler = Profiler;
		    reactIs_development.StrictMode = StrictMode;
		    reactIs_development.Suspense = Suspense;
		    reactIs_development.isAsyncMode = isAsyncMode;
		    reactIs_development.isConcurrentMode = isConcurrentMode;
		    reactIs_development.isContextConsumer = isContextConsumer;
		    reactIs_development.isContextProvider = isContextProvider;
		    reactIs_development.isElement = isElement;
		    reactIs_development.isForwardRef = isForwardRef;
		    reactIs_development.isFragment = isFragment;
		    reactIs_development.isLazy = isLazy;
		    reactIs_development.isMemo = isMemo;
		    reactIs_development.isPortal = isPortal;
		    reactIs_development.isProfiler = isProfiler;
		    reactIs_development.isStrictMode = isStrictMode;
		    reactIs_development.isSuspense = isSuspense;
		    reactIs_development.isValidElementType = isValidElementType;
		    reactIs_development.typeOf = typeOf;
		  })();
		}
		return reactIs_development;
	}

	var hasRequiredReactIs;

	function requireReactIs () {
		if (hasRequiredReactIs) return reactIs.exports;
		hasRequiredReactIs = 1;
		(function (module) {

			if (process.env.NODE_ENV === 'production') {
			  module.exports = requireReactIs_production_min();
			} else {
			  module.exports = requireReactIs_development();
			}
	} (reactIs));
		return reactIs.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	var objectAssign;
	var hasRequiredObjectAssign;

	function requireObjectAssign () {
		if (hasRequiredObjectAssign) return objectAssign;
		hasRequiredObjectAssign = 1;
		/* eslint-disable no-unused-vars */

		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;

		function toObject(val) {
		  if (val === null || val === undefined) {
		    throw new TypeError('Object.assign cannot be called with null or undefined');
		  }

		  return Object(val);
		}

		function shouldUseNative() {
		  try {
		    if (!Object.assign) {
		      return false;
		    } // Detect buggy property enumeration order in older V8 versions.
		    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


		    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

		    test1[5] = 'de';

		    if (Object.getOwnPropertyNames(test1)[0] === '5') {
		      return false;
		    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


		    var test2 = {};

		    for (var i = 0; i < 10; i++) {
		      test2['_' + String.fromCharCode(i)] = i;
		    }

		    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
		      return test2[n];
		    });

		    if (order2.join('') !== '0123456789') {
		      return false;
		    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


		    var test3 = {};
		    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
		      test3[letter] = letter;
		    });

		    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
		      return false;
		    }

		    return true;
		  } catch (err) {
		    // We don't expect any of the above to throw, but better to be safe.
		    return false;
		  }
		}

		objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		  var from;
		  var to = toObject(target);
		  var symbols;

		  for (var s = 1; s < arguments.length; s++) {
		    from = Object(arguments[s]);

		    for (var key in from) {
		      if (hasOwnProperty.call(from, key)) {
		        to[key] = from[key];
		      }
		    }

		    if (getOwnPropertySymbols) {
		      symbols = getOwnPropertySymbols(from);

		      for (var i = 0; i < symbols.length; i++) {
		        if (propIsEnumerable.call(from, symbols[i])) {
		          to[symbols[i]] = from[symbols[i]];
		        }
		      }
		    }
		  }

		  return to;
		};
		return objectAssign;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret_1;
	var hasRequiredReactPropTypesSecret;

	function requireReactPropTypesSecret () {
		if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
		hasRequiredReactPropTypesSecret = 1;

		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		ReactPropTypesSecret_1 = ReactPropTypesSecret;
		return ReactPropTypesSecret_1;
	}

	var has;
	var hasRequiredHas;

	function requireHas () {
		if (hasRequiredHas) return has;
		hasRequiredHas = 1;
		has = Function.call.bind(Object.prototype.hasOwnProperty);
		return has;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var checkPropTypes_1;
	var hasRequiredCheckPropTypes;

	function requireCheckPropTypes () {
		if (hasRequiredCheckPropTypes) return checkPropTypes_1;
		hasRequiredCheckPropTypes = 1;

		var printWarning = function () {};

		if (process.env.NODE_ENV !== 'production') {
		  var ReactPropTypesSecret = requireReactPropTypesSecret();

		  var loggedTypeFailures = {};

		  var has = requireHas();

		  printWarning = function (text) {
		    var message = 'Warning: ' + text;

		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }

		    try {
		      // --- Welcome to debugging React ---
		      // This error was thrown as a convenience so that you can use this stack
		      // to find the callsite that caused this warning to fire.
		      throw new Error(message);
		    } catch (x) {
		      /**/
		    }
		  };
		}
		/**
		 * Assert that the values match with the type specs.
		 * Error messages are memorized and will only be shown once.
		 *
		 * @param {object} typeSpecs Map of name to a ReactPropType
		 * @param {object} values Runtime values that need to be type-checked
		 * @param {string} location e.g. "prop", "context", "child context"
		 * @param {string} componentName Name of the component for error messages.
		 * @param {?Function} getStack Returns the component stack.
		 * @private
		 */


		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		  if (process.env.NODE_ENV !== 'production') {
		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
		        } catch (ex) {
		          error = ex;
		        }

		        if (error && !(error instanceof Error)) {
		          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
		        }

		        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error.message] = true;
		          var stack = getStack ? getStack() : '';
		          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
		        }
		      }
		    }
		  }
		}
		/**
		 * Resets warning cache when testing.
		 *
		 * @private
		 */


		checkPropTypes.resetWarningCache = function () {
		  if (process.env.NODE_ENV !== 'production') {
		    loggedTypeFailures = {};
		  }
		};

		checkPropTypes_1 = checkPropTypes;
		return checkPropTypes_1;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithTypeCheckers;
	var hasRequiredFactoryWithTypeCheckers;

	function requireFactoryWithTypeCheckers () {
		if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
		hasRequiredFactoryWithTypeCheckers = 1;

		var ReactIs = requireReactIs();

		var assign = requireObjectAssign();

		var ReactPropTypesSecret = requireReactPropTypesSecret();

		var has = requireHas();

		var checkPropTypes = requireCheckPropTypes();

		var printWarning = function () {};

		if (process.env.NODE_ENV !== 'production') {
		  printWarning = function (text) {
		    var message = 'Warning: ' + text;

		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }

		    try {
		      // --- Welcome to debugging React ---
		      // This error was thrown as a convenience so that you can use this stack
		      // to find the callsite that caused this warning to fire.
		      throw new Error(message);
		    } catch (x) {}
		  };
		}

		function emptyFunctionThatReturnsNull() {
		  return null;
		}

		factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
		  /* global Symbol */
		  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
		  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

		  /**
		   * Returns the iterator method function contained on the iterable object.
		   *
		   * Be sure to invoke the function with the iterable as context:
		   *
		   *     var iteratorFn = getIteratorFn(myIterable);
		   *     if (iteratorFn) {
		   *       var iterator = iteratorFn.call(myIterable);
		   *       ...
		   *     }
		   *
		   * @param {?object} maybeIterable
		   * @return {?function}
		   */

		  function getIteratorFn(maybeIterable) {
		    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

		    if (typeof iteratorFn === 'function') {
		      return iteratorFn;
		    }
		  }
		  /**
		   * Collection of methods that allow declaration and validation of props that are
		   * supplied to React components. Example usage:
		   *
		   *   var Props = require('ReactPropTypes');
		   *   var MyArticle = React.createClass({
		   *     propTypes: {
		   *       // An optional string prop named "description".
		   *       description: Props.string,
		   *
		   *       // A required enum prop named "category".
		   *       category: Props.oneOf(['News','Photos']).isRequired,
		   *
		   *       // A prop named "dialog" that requires an instance of Dialog.
		   *       dialog: Props.instanceOf(Dialog).isRequired
		   *     },
		   *     render: function() { ... }
		   *   });
		   *
		   * A more formal specification of how these methods are used:
		   *
		   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		   *   decl := ReactPropTypes.{type}(.isRequired)?
		   *
		   * Each and every declaration produces a function with the same signature. This
		   * allows the creation of custom validation functions. For example:
		   *
		   *  var MyLink = React.createClass({
		   *    propTypes: {
		   *      // An optional string or URI prop named "href".
		   *      href: function(props, propName, componentName) {
		   *        var propValue = props[propName];
		   *        if (propValue != null && typeof propValue !== 'string' &&
		   *            !(propValue instanceof URI)) {
		   *          return new Error(
		   *            'Expected a string or an URI for ' + propName + ' in ' +
		   *            componentName
		   *          );
		   *        }
		   *      }
		   *    },
		   *    render: function() {...}
		   *  });
		   *
		   * @internal
		   */


		  var ANONYMOUS = '<<anonymous>>'; // Important!
		  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

		  var ReactPropTypes = {
		    array: createPrimitiveTypeChecker('array'),
		    bigint: createPrimitiveTypeChecker('bigint'),
		    bool: createPrimitiveTypeChecker('boolean'),
		    func: createPrimitiveTypeChecker('function'),
		    number: createPrimitiveTypeChecker('number'),
		    object: createPrimitiveTypeChecker('object'),
		    string: createPrimitiveTypeChecker('string'),
		    symbol: createPrimitiveTypeChecker('symbol'),
		    any: createAnyTypeChecker(),
		    arrayOf: createArrayOfTypeChecker,
		    element: createElementTypeChecker(),
		    elementType: createElementTypeTypeChecker(),
		    instanceOf: createInstanceTypeChecker,
		    node: createNodeChecker(),
		    objectOf: createObjectOfTypeChecker,
		    oneOf: createEnumTypeChecker,
		    oneOfType: createUnionTypeChecker,
		    shape: createShapeTypeChecker,
		    exact: createStrictShapeTypeChecker
		  };
		  /**
		   * inlined Object.is polyfill to avoid requiring consumers ship their own
		   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		   */

		  /*eslint-disable no-self-compare*/

		  function is(x, y) {
		    // SameValue algorithm
		    if (x === y) {
		      // Steps 1-5, 7-10
		      // Steps 6.b-6.e: +0 != -0
		      return x !== 0 || 1 / x === 1 / y;
		    } else {
		      // Step 6.a: NaN == NaN
		      return x !== x && y !== y;
		    }
		  }
		  /*eslint-enable no-self-compare*/

		  /**
		   * We use an Error-like object for backward compatibility as people may call
		   * PropTypes directly and inspect their output. However, we don't use real
		   * Errors anymore. We don't inspect their stack anyway, and creating them
		   * is prohibitively expensive if they are created too often, such as what
		   * happens in oneOfType() for any type before the one that matched.
		   */


		  function PropTypeError(message, data) {
		    this.message = message;
		    this.data = data && typeof data === 'object' ? data : {};
		    this.stack = '';
		  } // Make `instanceof Error` still work for returned errors.


		  PropTypeError.prototype = Error.prototype;

		  function createChainableTypeChecker(validate) {
		    if (process.env.NODE_ENV !== 'production') {
		      var manualPropTypeCallCache = {};
		      var manualPropTypeWarningCount = 0;
		    }

		    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
		      componentName = componentName || ANONYMOUS;
		      propFullName = propFullName || propName;

		      if (secret !== ReactPropTypesSecret) {
		        if (throwOnDirectAccess) {
		          // New behavior only for users of `prop-types` package
		          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
		          err.name = 'Invariant Violation';
		          throw err;
		        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
		          // Old behavior for people using React.PropTypes
		          var cacheKey = componentName + ':' + propName;

		          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
		          manualPropTypeWarningCount < 3) {
		            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
		            manualPropTypeCallCache[cacheKey] = true;
		            manualPropTypeWarningCount++;
		          }
		        }
		      }

		      if (props[propName] == null) {
		        if (isRequired) {
		          if (props[propName] === null) {
		            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
		          }

		          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
		        }

		        return null;
		      } else {
		        return validate(props, propName, componentName, location, propFullName);
		      }
		    }

		    var chainedCheckType = checkType.bind(null, false);
		    chainedCheckType.isRequired = checkType.bind(null, true);
		    return chainedCheckType;
		  }

		  function createPrimitiveTypeChecker(expectedType) {
		    function validate(props, propName, componentName, location, propFullName, secret) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);

		      if (propType !== expectedType) {
		        // `propValue` being instance of, say, date/regexp, pass the 'object'
		        // check, but we can offer a more precise error message here rather than
		        // 'of type `object`'.
		        var preciseType = getPreciseType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
		          expectedType: expectedType
		        });
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createAnyTypeChecker() {
		    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		  }

		  function createArrayOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
		      }

		      var propValue = props[propName];

		      if (!Array.isArray(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
		      }

		      for (var i = 0; i < propValue.length; i++) {
		        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

		        if (error instanceof Error) {
		          return error;
		        }
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createElementTypeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];

		      if (!isValidElement(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createElementTypeTypeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];

		      if (!ReactIs.isValidElementType(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createInstanceTypeChecker(expectedClass) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!(props[propName] instanceof expectedClass)) {
		        var expectedClassName = expectedClass.name || ANONYMOUS;
		        var actualClassName = getClassName(props[propName]);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createEnumTypeChecker(expectedValues) {
		    if (!Array.isArray(expectedValues)) {
		      if (process.env.NODE_ENV !== 'production') {
		        if (arguments.length > 1) {
		          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
		        } else {
		          printWarning('Invalid argument supplied to oneOf, expected an array.');
		        }
		      }

		      return emptyFunctionThatReturnsNull;
		    }

		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];

		      for (var i = 0; i < expectedValues.length; i++) {
		        if (is(propValue, expectedValues[i])) {
		          return null;
		        }
		      }

		      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
		        var type = getPreciseType(value);

		        if (type === 'symbol') {
		          return String(value);
		        }

		        return value;
		      });
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createObjectOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
		      }

		      var propValue = props[propName];
		      var propType = getPropType(propValue);

		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
		      }

		      for (var key in propValue) {
		        if (has(propValue, key)) {
		          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

		          if (error instanceof Error) {
		            return error;
		          }
		        }
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createUnionTypeChecker(arrayOfTypeCheckers) {
		    if (!Array.isArray(arrayOfTypeCheckers)) {
		      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
		      return emptyFunctionThatReturnsNull;
		    }

		    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		      var checker = arrayOfTypeCheckers[i];

		      if (typeof checker !== 'function') {
		        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
		        return emptyFunctionThatReturnsNull;
		      }
		    }

		    function validate(props, propName, componentName, location, propFullName) {
		      var expectedTypes = [];

		      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		        var checker = arrayOfTypeCheckers[i];
		        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);

		        if (checkerResult == null) {
		          return null;
		        }

		        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
		          expectedTypes.push(checkerResult.data.expectedType);
		        }
		      }

		      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createNodeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!isNode(props[propName])) {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function invalidValidatorError(componentName, location, propFullName, key, type) {
		    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
		  }

		  function createShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);

		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }

		      for (var key in shapeTypes) {
		        var checker = shapeTypes[key];

		        if (typeof checker !== 'function') {
		          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
		        }

		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

		        if (error) {
		          return error;
		        }
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function createStrictShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);

		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      } // We need to check all keys in case some are required but missing from props.


		      var allKeys = assign({}, props[propName], shapeTypes);

		      for (var key in allKeys) {
		        var checker = shapeTypes[key];

		        if (has(shapeTypes, key) && typeof checker !== 'function') {
		          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
		        }

		        if (!checker) {
		          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
		        }

		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

		        if (error) {
		          return error;
		        }
		      }

		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function isNode(propValue) {
		    switch (typeof propValue) {
		      case 'number':
		      case 'string':
		      case 'undefined':
		        return true;

		      case 'boolean':
		        return !propValue;

		      case 'object':
		        if (Array.isArray(propValue)) {
		          return propValue.every(isNode);
		        }

		        if (propValue === null || isValidElement(propValue)) {
		          return true;
		        }

		        var iteratorFn = getIteratorFn(propValue);

		        if (iteratorFn) {
		          var iterator = iteratorFn.call(propValue);
		          var step;

		          if (iteratorFn !== propValue.entries) {
		            while (!(step = iterator.next()).done) {
		              if (!isNode(step.value)) {
		                return false;
		              }
		            }
		          } else {
		            // Iterator will provide entry [k,v] tuples rather than values.
		            while (!(step = iterator.next()).done) {
		              var entry = step.value;

		              if (entry) {
		                if (!isNode(entry[1])) {
		                  return false;
		                }
		              }
		            }
		          }
		        } else {
		          return false;
		        }

		        return true;

		      default:
		        return false;
		    }
		  }

		  function isSymbol(propType, propValue) {
		    // Native Symbol.
		    if (propType === 'symbol') {
		      return true;
		    } // falsy value can't be a Symbol


		    if (!propValue) {
		      return false;
		    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


		    if (propValue['@@toStringTag'] === 'Symbol') {
		      return true;
		    } // Fallback for non-spec compliant Symbols which are polyfilled.


		    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
		      return true;
		    }

		    return false;
		  } // Equivalent of `typeof` but with special handling for array and regexp.


		  function getPropType(propValue) {
		    var propType = typeof propValue;

		    if (Array.isArray(propValue)) {
		      return 'array';
		    }

		    if (propValue instanceof RegExp) {
		      // Old webkits (at least until Android 4.0) return 'function' rather than
		      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
		      // passes PropTypes.object.
		      return 'object';
		    }

		    if (isSymbol(propType, propValue)) {
		      return 'symbol';
		    }

		    return propType;
		  } // This handles more types than `getPropType`. Only used for error messages.
		  // See `createPrimitiveTypeChecker`.


		  function getPreciseType(propValue) {
		    if (typeof propValue === 'undefined' || propValue === null) {
		      return '' + propValue;
		    }

		    var propType = getPropType(propValue);

		    if (propType === 'object') {
		      if (propValue instanceof Date) {
		        return 'date';
		      } else if (propValue instanceof RegExp) {
		        return 'regexp';
		      }
		    }

		    return propType;
		  } // Returns a string that is postfixed to a warning about an invalid type.
		  // For example, "undefined" or "of type array"


		  function getPostfixForTypeWarning(value) {
		    var type = getPreciseType(value);

		    switch (type) {
		      case 'array':
		      case 'object':
		        return 'an ' + type;

		      case 'boolean':
		      case 'date':
		      case 'regexp':
		        return 'a ' + type;

		      default:
		        return type;
		    }
		  } // Returns class name of the object, if any.


		  function getClassName(propValue) {
		    if (!propValue.constructor || !propValue.constructor.name) {
		      return ANONYMOUS;
		    }

		    return propValue.constructor.name;
		  }

		  ReactPropTypes.checkPropTypes = checkPropTypes;
		  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		  ReactPropTypes.PropTypes = ReactPropTypes;
		  return ReactPropTypes;
		};
		return factoryWithTypeCheckers;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithThrowingShims;
	var hasRequiredFactoryWithThrowingShims;

	function requireFactoryWithThrowingShims () {
		if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
		hasRequiredFactoryWithThrowingShims = 1;

		var ReactPropTypesSecret = requireReactPropTypesSecret();

		function emptyFunction() {}

		function emptyFunctionWithReset() {}

		emptyFunctionWithReset.resetWarningCache = emptyFunction;

		factoryWithThrowingShims = function () {
		  function shim(props, propName, componentName, location, propFullName, secret) {
		    if (secret === ReactPropTypesSecret) {
		      // It is still safe when called from React.
		      return;
		    }

		    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
		    err.name = 'Invariant Violation';
		    throw err;
		  }
		  shim.isRequired = shim;

		  function getShim() {
		    return shim;
		  }
		  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

		  var ReactPropTypes = {
		    array: shim,
		    bigint: shim,
		    bool: shim,
		    func: shim,
		    number: shim,
		    object: shim,
		    string: shim,
		    symbol: shim,
		    any: shim,
		    arrayOf: getShim,
		    element: shim,
		    elementType: shim,
		    instanceOf: getShim,
		    node: shim,
		    objectOf: getShim,
		    oneOf: getShim,
		    oneOfType: getShim,
		    shape: getShim,
		    exact: getShim,
		    checkPropTypes: emptyFunctionWithReset,
		    resetWarningCache: emptyFunction
		  };
		  ReactPropTypes.PropTypes = ReactPropTypes;
		  return ReactPropTypes;
		};
		return factoryWithThrowingShims;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = requireReactIs(); // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod


	  var throwOnDirectAccess = true;
	  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = requireFactoryWithThrowingShims()();
	}

	var react = {exports: {}};

	var react_production_min = {};

	/** @license React v17.0.2
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;

		var l = requireObjectAssign(),
		    n = 60103,
		    p = 60106;

		react_production_min.Fragment = 60107;
		react_production_min.StrictMode = 60108;
		react_production_min.Profiler = 60114;
		var q = 60109,
		    r = 60110,
		    t = 60112;
		react_production_min.Suspense = 60113;
		var u = 60115,
		    v = 60116;

		if ("function" === typeof Symbol && Symbol.for) {
		  var w = Symbol.for;
		  n = w("react.element");
		  p = w("react.portal");
		  react_production_min.Fragment = w("react.fragment");
		  react_production_min.StrictMode = w("react.strict_mode");
		  react_production_min.Profiler = w("react.profiler");
		  q = w("react.provider");
		  r = w("react.context");
		  t = w("react.forward_ref");
		  react_production_min.Suspense = w("react.suspense");
		  u = w("react.memo");
		  v = w("react.lazy");
		}

		var x = "function" === typeof Symbol && Symbol.iterator;

		function y(a) {
		  if (null === a || "object" !== typeof a) return null;
		  a = x && a[x] || a["@@iterator"];
		  return "function" === typeof a ? a : null;
		}

		function z(a) {
		  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

		  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		}

		var A = {
		  isMounted: function () {
		    return !1;
		  },
		  enqueueForceUpdate: function () {},
		  enqueueReplaceState: function () {},
		  enqueueSetState: function () {}
		},
		    B = {};

		function C(a, b, c) {
		  this.props = a;
		  this.context = b;
		  this.refs = B;
		  this.updater = c || A;
		}

		C.prototype.isReactComponent = {};

		C.prototype.setState = function (a, b) {
		  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
		  this.updater.enqueueSetState(this, a, b, "setState");
		};

		C.prototype.forceUpdate = function (a) {
		  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};

		function D() {}

		D.prototype = C.prototype;

		function E(a, b, c) {
		  this.props = a;
		  this.context = b;
		  this.refs = B;
		  this.updater = c || A;
		}

		var F = E.prototype = new D();
		F.constructor = E;
		l(F, C.prototype);
		F.isPureReactComponent = !0;
		var G = {
		  current: null
		},
		    H = Object.prototype.hasOwnProperty,
		    I = {
		  key: !0,
		  ref: !0,
		  __self: !0,
		  __source: !0
		};

		function J(a, b, c) {
		  var e,
		      d = {},
		      k = null,
		      h = null;
		  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
		  var g = arguments.length - 2;
		  if (1 === g) d.children = c;else if (1 < g) {
		    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

		    d.children = f;
		  }
		  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
		  return {
		    $$typeof: n,
		    type: a,
		    key: k,
		    ref: h,
		    props: d,
		    _owner: G.current
		  };
		}

		function K(a, b) {
		  return {
		    $$typeof: n,
		    type: a.type,
		    key: b,
		    ref: a.ref,
		    props: a.props,
		    _owner: a._owner
		  };
		}

		function L(a) {
		  return "object" === typeof a && null !== a && a.$$typeof === n;
		}

		function escape(a) {
		  var b = {
		    "=": "=0",
		    ":": "=2"
		  };
		  return "$" + a.replace(/[=:]/g, function (a) {
		    return b[a];
		  });
		}

		var M = /\/+/g;

		function N(a, b) {
		  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
		}

		function O(a, b, c, e, d) {
		  var k = typeof a;
		  if ("undefined" === k || "boolean" === k) a = null;
		  var h = !1;
		  if (null === a) h = !0;else switch (k) {
		    case "string":
		    case "number":
		      h = !0;
		      break;

		    case "object":
		      switch (a.$$typeof) {
		        case n:
		        case p:
		          h = !0;
		      }

		  }
		  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
		    return a;
		  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
		  h = 0;
		  e = "" === e ? "." : e + ":";
		  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
		    k = a[g];
		    var f = e + N(k, g);
		    h += O(k, b, c, f, d);
		  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
		  return h;
		}

		function P(a, b, c) {
		  if (null == a) return a;
		  var e = [],
		      d = 0;
		  O(a, e, "", "", function (a) {
		    return b.call(c, a, d++);
		  });
		  return e;
		}

		function Q(a) {
		  if (-1 === a._status) {
		    var b = a._result;
		    b = b();
		    a._status = 0;
		    a._result = b;
		    b.then(function (b) {
		      0 === a._status && (b = b.default, a._status = 1, a._result = b);
		    }, function (b) {
		      0 === a._status && (a._status = 2, a._result = b);
		    });
		  }

		  if (1 === a._status) return a._result;
		  throw a._result;
		}

		var R = {
		  current: null
		};

		function S() {
		  var a = R.current;
		  if (null === a) throw Error(z(321));
		  return a;
		}

		var T = {
		  ReactCurrentDispatcher: R,
		  ReactCurrentBatchConfig: {
		    transition: 0
		  },
		  ReactCurrentOwner: G,
		  IsSomeRendererActing: {
		    current: !1
		  },
		  assign: l
		};
		react_production_min.Children = {
		  map: P,
		  forEach: function (a, b, c) {
		    P(a, function () {
		      b.apply(this, arguments);
		    }, c);
		  },
		  count: function (a) {
		    var b = 0;
		    P(a, function () {
		      b++;
		    });
		    return b;
		  },
		  toArray: function (a) {
		    return P(a, function (a) {
		      return a;
		    }) || [];
		  },
		  only: function (a) {
		    if (!L(a)) throw Error(z(143));
		    return a;
		  }
		};
		react_production_min.Component = C;
		react_production_min.PureComponent = E;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

		react_production_min.cloneElement = function (a, b, c) {
		  if (null === a || void 0 === a) throw Error(z(267, a));
		  var e = l({}, a.props),
		      d = a.key,
		      k = a.ref,
		      h = a._owner;

		  if (null != b) {
		    void 0 !== b.ref && (k = b.ref, h = G.current);
		    void 0 !== b.key && (d = "" + b.key);
		    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

		    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		  }

		  var f = arguments.length - 2;
		  if (1 === f) e.children = c;else if (1 < f) {
		    g = Array(f);

		    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

		    e.children = g;
		  }
		  return {
		    $$typeof: n,
		    type: a.type,
		    key: d,
		    ref: k,
		    props: e,
		    _owner: h
		  };
		};

		react_production_min.createContext = function (a, b) {
		  void 0 === b && (b = null);
		  a = {
		    $$typeof: r,
		    _calculateChangedBits: b,
		    _currentValue: a,
		    _currentValue2: a,
		    _threadCount: 0,
		    Provider: null,
		    Consumer: null
		  };
		  a.Provider = {
		    $$typeof: q,
		    _context: a
		  };
		  return a.Consumer = a;
		};

		react_production_min.createElement = J;

		react_production_min.createFactory = function (a) {
		  var b = J.bind(null, a);
		  b.type = a;
		  return b;
		};

		react_production_min.createRef = function () {
		  return {
		    current: null
		  };
		};

		react_production_min.forwardRef = function (a) {
		  return {
		    $$typeof: t,
		    render: a
		  };
		};

		react_production_min.isValidElement = L;

		react_production_min.lazy = function (a) {
		  return {
		    $$typeof: v,
		    _payload: {
		      _status: -1,
		      _result: a
		    },
		    _init: Q
		  };
		};

		react_production_min.memo = function (a, b) {
		  return {
		    $$typeof: u,
		    type: a,
		    compare: void 0 === b ? null : b
		  };
		};

		react_production_min.useCallback = function (a, b) {
		  return S().useCallback(a, b);
		};

		react_production_min.useContext = function (a, b) {
		  return S().useContext(a, b);
		};

		react_production_min.useDebugValue = function () {};

		react_production_min.useEffect = function (a, b) {
		  return S().useEffect(a, b);
		};

		react_production_min.useImperativeHandle = function (a, b, c) {
		  return S().useImperativeHandle(a, b, c);
		};

		react_production_min.useLayoutEffect = function (a, b) {
		  return S().useLayoutEffect(a, b);
		};

		react_production_min.useMemo = function (a, b) {
		  return S().useMemo(a, b);
		};

		react_production_min.useReducer = function (a, b, c) {
		  return S().useReducer(a, b, c);
		};

		react_production_min.useRef = function (a) {
		  return S().useRef(a);
		};

		react_production_min.useState = function (a) {
		  return S().useState(a);
		};

		react_production_min.version = "17.0.2";
		return react_production_min;
	}

	var react_development = {};

	/** @license React v17.0.2
	 * react.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_development;

	function requireReact_development () {
		if (hasRequiredReact_development) return react_development;
		hasRequiredReact_development = 1;
		(function (exports) {

			if (process.env.NODE_ENV !== "production") {
			  (function () {

			    var _assign = requireObjectAssign(); // TODO: this is special because it gets imported during build.


			    var ReactVersion = '17.0.2'; // ATTENTION
			    // When adding new symbols to this file,
			    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
			    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
			    // nor polyfill, then a plain number is used for performance.

			    var REACT_ELEMENT_TYPE = 0xeac7;
			    var REACT_PORTAL_TYPE = 0xeaca;
			    exports.Fragment = 0xeacb;
			    exports.StrictMode = 0xeacc;
			    exports.Profiler = 0xead2;
			    var REACT_PROVIDER_TYPE = 0xeacd;
			    var REACT_CONTEXT_TYPE = 0xeace;
			    var REACT_FORWARD_REF_TYPE = 0xead0;
			    exports.Suspense = 0xead1;
			    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
			    var REACT_MEMO_TYPE = 0xead3;
			    var REACT_LAZY_TYPE = 0xead4;
			    var REACT_BLOCK_TYPE = 0xead9;
			    var REACT_SERVER_BLOCK_TYPE = 0xeada;
			    var REACT_FUNDAMENTAL_TYPE = 0xead5;
			    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
			    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

			    if (typeof Symbol === 'function' && Symbol.for) {
			      var symbolFor = Symbol.for;
			      REACT_ELEMENT_TYPE = symbolFor('react.element');
			      REACT_PORTAL_TYPE = symbolFor('react.portal');
			      exports.Fragment = symbolFor('react.fragment');
			      exports.StrictMode = symbolFor('react.strict_mode');
			      exports.Profiler = symbolFor('react.profiler');
			      REACT_PROVIDER_TYPE = symbolFor('react.provider');
			      REACT_CONTEXT_TYPE = symbolFor('react.context');
			      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
			      exports.Suspense = symbolFor('react.suspense');
			      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
			      REACT_MEMO_TYPE = symbolFor('react.memo');
			      REACT_LAZY_TYPE = symbolFor('react.lazy');
			      REACT_BLOCK_TYPE = symbolFor('react.block');
			      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
			      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
			      symbolFor('react.scope');
			      symbolFor('react.opaque.id');
			      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
			      symbolFor('react.offscreen');
			      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
			    }

			    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
			    var FAUX_ITERATOR_SYMBOL = '@@iterator';

			    function getIteratorFn(maybeIterable) {
			      if (maybeIterable === null || typeof maybeIterable !== 'object') {
			        return null;
			      }

			      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

			      if (typeof maybeIterator === 'function') {
			        return maybeIterator;
			      }

			      return null;
			    }
			    /**
			     * Keeps track of the current dispatcher.
			     */


			    var ReactCurrentDispatcher = {
			      /**
			       * @internal
			       * @type {ReactComponent}
			       */
			      current: null
			    };
			    /**
			     * Keeps track of the current batch's configuration such as how long an update
			     * should suspend for if it needs to.
			     */

			    var ReactCurrentBatchConfig = {
			      transition: 0
			    };
			    /**
			     * Keeps track of the current owner.
			     *
			     * The current owner is the component who should own any components that are
			     * currently being constructed.
			     */

			    var ReactCurrentOwner = {
			      /**
			       * @internal
			       * @type {ReactComponent}
			       */
			      current: null
			    };
			    var ReactDebugCurrentFrame = {};
			    var currentExtraStackFrame = null;

			    function setExtraStackFrame(stack) {
			      {
			        currentExtraStackFrame = stack;
			      }
			    }

			    {
			      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
			        {
			          currentExtraStackFrame = stack;
			        }
			      }; // Stack implementation injected by the current renderer.


			      ReactDebugCurrentFrame.getCurrentStack = null;

			      ReactDebugCurrentFrame.getStackAddendum = function () {
			        var stack = ''; // Add an extra top frame while an element is being validated

			        if (currentExtraStackFrame) {
			          stack += currentExtraStackFrame;
			        } // Delegate to the injected renderer-specific implementation


			        var impl = ReactDebugCurrentFrame.getCurrentStack;

			        if (impl) {
			          stack += impl() || '';
			        }

			        return stack;
			      };
			    }
			    /**
			     * Used by act() to track whether you're inside an act() scope.
			     */

			    var IsSomeRendererActing = {
			      current: false
			    };
			    var ReactSharedInternals = {
			      ReactCurrentDispatcher: ReactCurrentDispatcher,
			      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
			      ReactCurrentOwner: ReactCurrentOwner,
			      IsSomeRendererActing: IsSomeRendererActing,
			      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
			      assign: _assign
			    };
			    {
			      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
			    } // by calls to these methods by a Babel plugin.
			    //
			    // In PROD (or in packages without access to React internals),
			    // they are left as they are instead.

			    function warn(format) {
			      {
			        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			          args[_key - 1] = arguments[_key];
			        }

			        printWarning('warn', format, args);
			      }
			    }

			    function error(format) {
			      {
			        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			          args[_key2 - 1] = arguments[_key2];
			        }

			        printWarning('error', format, args);
			      }
			    }

			    function printWarning(level, format, args) {
			      // When changing this logic, you might want to also
			      // update consoleWithStackDev.www.js as well.
			      {
			        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
			        var stack = ReactDebugCurrentFrame.getStackAddendum();

			        if (stack !== '') {
			          format += '%s';
			          args = args.concat([stack]);
			        }

			        var argsWithFormat = args.map(function (item) {
			          return '' + item;
			        }); // Careful: RN currently depends on this prefix

			        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
			        // breaks IE9: https://github.com/facebook/react/issues/13610
			        // eslint-disable-next-line react-internal/no-production-logging

			        Function.prototype.apply.call(console[level], console, argsWithFormat);
			      }
			    }

			    var didWarnStateUpdateForUnmountedComponent = {};

			    function warnNoop(publicInstance, callerName) {
			      {
			        var _constructor = publicInstance.constructor;
			        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
			        var warningKey = componentName + "." + callerName;

			        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
			          return;
			        }

			        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
			        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
			      }
			    }
			    /**
			     * This is the abstract API for an update queue.
			     */


			    var ReactNoopUpdateQueue = {
			      /**
			       * Checks whether or not this composite component is mounted.
			       * @param {ReactClass} publicInstance The instance we want to test.
			       * @return {boolean} True if mounted, false otherwise.
			       * @protected
			       * @final
			       */
			      isMounted: function (publicInstance) {
			        return false;
			      },

			      /**
			       * Forces an update. This should only be invoked when it is known with
			       * certainty that we are **not** in a DOM transaction.
			       *
			       * You may want to call this when you know that some deeper aspect of the
			       * component's state has changed but `setState` was not called.
			       *
			       * This will not invoke `shouldComponentUpdate`, but it will invoke
			       * `componentWillUpdate` and `componentDidUpdate`.
			       *
			       * @param {ReactClass} publicInstance The instance that should rerender.
			       * @param {?function} callback Called after component is updated.
			       * @param {?string} callerName name of the calling function in the public API.
			       * @internal
			       */
			      enqueueForceUpdate: function (publicInstance, callback, callerName) {
			        warnNoop(publicInstance, 'forceUpdate');
			      },

			      /**
			       * Replaces all of the state. Always use this or `setState` to mutate state.
			       * You should treat `this.state` as immutable.
			       *
			       * There is no guarantee that `this.state` will be immediately updated, so
			       * accessing `this.state` after calling this method may return the old value.
			       *
			       * @param {ReactClass} publicInstance The instance that should rerender.
			       * @param {object} completeState Next state.
			       * @param {?function} callback Called after component is updated.
			       * @param {?string} callerName name of the calling function in the public API.
			       * @internal
			       */
			      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
			        warnNoop(publicInstance, 'replaceState');
			      },

			      /**
			       * Sets a subset of the state. This only exists because _pendingState is
			       * internal. This provides a merging strategy that is not available to deep
			       * properties which is confusing. TODO: Expose pendingState or don't use it
			       * during the merge.
			       *
			       * @param {ReactClass} publicInstance The instance that should rerender.
			       * @param {object} partialState Next partial state to be merged with state.
			       * @param {?function} callback Called after component is updated.
			       * @param {?string} Name of the calling function in the public API.
			       * @internal
			       */
			      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
			        warnNoop(publicInstance, 'setState');
			      }
			    };
			    var emptyObject = {};
			    {
			      Object.freeze(emptyObject);
			    }
			    /**
			     * Base class helpers for the updating state of a component.
			     */

			    function Component(props, context, updater) {
			      this.props = props;
			      this.context = context; // If a component has string refs, we will assign a different object later.

			      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
			      // renderer.

			      this.updater = updater || ReactNoopUpdateQueue;
			    }

			    Component.prototype.isReactComponent = {};
			    /**
			     * Sets a subset of the state. Always use this to mutate
			     * state. You should treat `this.state` as immutable.
			     *
			     * There is no guarantee that `this.state` will be immediately updated, so
			     * accessing `this.state` after calling this method may return the old value.
			     *
			     * There is no guarantee that calls to `setState` will run synchronously,
			     * as they may eventually be batched together.  You can provide an optional
			     * callback that will be executed when the call to setState is actually
			     * completed.
			     *
			     * When a function is provided to setState, it will be called at some point in
			     * the future (not synchronously). It will be called with the up to date
			     * component arguments (state, props, context). These values can be different
			     * from this.* because your function may be called after receiveProps but before
			     * shouldComponentUpdate, and this new state, props, and context will not yet be
			     * assigned to this.
			     *
			     * @param {object|function} partialState Next partial state or function to
			     *        produce next partial state to be merged with current state.
			     * @param {?function} callback Called after state is updated.
			     * @final
			     * @protected
			     */

			    Component.prototype.setState = function (partialState, callback) {
			      if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
			        {
			          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
			        }
			      }

			      this.updater.enqueueSetState(this, partialState, callback, 'setState');
			    };
			    /**
			     * Forces an update. This should only be invoked when it is known with
			     * certainty that we are **not** in a DOM transaction.
			     *
			     * You may want to call this when you know that some deeper aspect of the
			     * component's state has changed but `setState` was not called.
			     *
			     * This will not invoke `shouldComponentUpdate`, but it will invoke
			     * `componentWillUpdate` and `componentDidUpdate`.
			     *
			     * @param {?function} callback Called after update is complete.
			     * @final
			     * @protected
			     */


			    Component.prototype.forceUpdate = function (callback) {
			      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
			    };
			    /**
			     * Deprecated APIs. These APIs used to exist on classic React classes but since
			     * we would like to deprecate them, we're not going to move them over to this
			     * modern base class. Instead, we define a getter that warns if it's accessed.
			     */


			    {
			      var deprecatedAPIs = {
			        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
			        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
			      };

			      var defineDeprecationWarning = function (methodName, info) {
			        Object.defineProperty(Component.prototype, methodName, {
			          get: function () {
			            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
			            return undefined;
			          }
			        });
			      };

			      for (var fnName in deprecatedAPIs) {
			        if (deprecatedAPIs.hasOwnProperty(fnName)) {
			          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
			        }
			      }
			    }

			    function ComponentDummy() {}

			    ComponentDummy.prototype = Component.prototype;
			    /**
			     * Convenience component with default shallow equality check for sCU.
			     */

			    function PureComponent(props, context, updater) {
			      this.props = props;
			      this.context = context; // If a component has string refs, we will assign a different object later.

			      this.refs = emptyObject;
			      this.updater = updater || ReactNoopUpdateQueue;
			    }

			    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
			    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

			    _assign(pureComponentPrototype, Component.prototype);

			    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

			    function createRef() {
			      var refObject = {
			        current: null
			      };
			      {
			        Object.seal(refObject);
			      }
			      return refObject;
			    }

			    function getWrappedName(outerType, innerType, wrapperName) {
			      var functionName = innerType.displayName || innerType.name || '';
			      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
			    }

			    function getContextName(type) {
			      return type.displayName || 'Context';
			    }

			    function getComponentName(type) {
			      if (type == null) {
			        // Host root, text node or just invalid type.
			        return null;
			      }

			      {
			        if (typeof type.tag === 'number') {
			          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
			        }
			      }

			      if (typeof type === 'function') {
			        return type.displayName || type.name || null;
			      }

			      if (typeof type === 'string') {
			        return type;
			      }

			      switch (type) {
			        case exports.Fragment:
			          return 'Fragment';

			        case REACT_PORTAL_TYPE:
			          return 'Portal';

			        case exports.Profiler:
			          return 'Profiler';

			        case exports.StrictMode:
			          return 'StrictMode';

			        case exports.Suspense:
			          return 'Suspense';

			        case REACT_SUSPENSE_LIST_TYPE:
			          return 'SuspenseList';
			      }

			      if (typeof type === 'object') {
			        switch (type.$$typeof) {
			          case REACT_CONTEXT_TYPE:
			            var context = type;
			            return getContextName(context) + '.Consumer';

			          case REACT_PROVIDER_TYPE:
			            var provider = type;
			            return getContextName(provider._context) + '.Provider';

			          case REACT_FORWARD_REF_TYPE:
			            return getWrappedName(type, type.render, 'ForwardRef');

			          case REACT_MEMO_TYPE:
			            return getComponentName(type.type);

			          case REACT_BLOCK_TYPE:
			            return getComponentName(type._render);

			          case REACT_LAZY_TYPE:
			            {
			              var lazyComponent = type;
			              var payload = lazyComponent._payload;
			              var init = lazyComponent._init;

			              try {
			                return getComponentName(init(payload));
			              } catch (x) {
			                return null;
			              }
			            }
			        }
			      }

			      return null;
			    }

			    var hasOwnProperty = Object.prototype.hasOwnProperty;
			    var RESERVED_PROPS = {
			      key: true,
			      ref: true,
			      __self: true,
			      __source: true
			    };
			    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
			    {
			      didWarnAboutStringRefs = {};
			    }

			    function hasValidRef(config) {
			      {
			        if (hasOwnProperty.call(config, 'ref')) {
			          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

			          if (getter && getter.isReactWarning) {
			            return false;
			          }
			        }
			      }
			      return config.ref !== undefined;
			    }

			    function hasValidKey(config) {
			      {
			        if (hasOwnProperty.call(config, 'key')) {
			          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

			          if (getter && getter.isReactWarning) {
			            return false;
			          }
			        }
			      }
			      return config.key !== undefined;
			    }

			    function defineKeyPropWarningGetter(props, displayName) {
			      var warnAboutAccessingKey = function () {
			        {
			          if (!specialPropKeyWarningShown) {
			            specialPropKeyWarningShown = true;
			            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
			          }
			        }
			      };

			      warnAboutAccessingKey.isReactWarning = true;
			      Object.defineProperty(props, 'key', {
			        get: warnAboutAccessingKey,
			        configurable: true
			      });
			    }

			    function defineRefPropWarningGetter(props, displayName) {
			      var warnAboutAccessingRef = function () {
			        {
			          if (!specialPropRefWarningShown) {
			            specialPropRefWarningShown = true;
			            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
			          }
			        }
			      };

			      warnAboutAccessingRef.isReactWarning = true;
			      Object.defineProperty(props, 'ref', {
			        get: warnAboutAccessingRef,
			        configurable: true
			      });
			    }

			    function warnIfStringRefCannotBeAutoConverted(config) {
			      {
			        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
			          var componentName = getComponentName(ReactCurrentOwner.current.type);

			          if (!didWarnAboutStringRefs[componentName]) {
			            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
			            didWarnAboutStringRefs[componentName] = true;
			          }
			        }
			      }
			    }
			    /**
			     * Factory method to create a new React element. This no longer adheres to
			     * the class pattern, so do not use new to call it. Also, instanceof check
			     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
			     * if something is a React Element.
			     *
			     * @param {*} type
			     * @param {*} props
			     * @param {*} key
			     * @param {string|object} ref
			     * @param {*} owner
			     * @param {*} self A *temporary* helper to detect places where `this` is
			     * different from the `owner` when React.createElement is called, so that we
			     * can warn. We want to get rid of owner and replace string `ref`s with arrow
			     * functions, and as long as `this` and owner are the same, there will be no
			     * change in behavior.
			     * @param {*} source An annotation object (added by a transpiler or otherwise)
			     * indicating filename, line number, and/or other information.
			     * @internal
			     */


			    var ReactElement = function (type, key, ref, self, source, owner, props) {
			      var element = {
			        // This tag allows us to uniquely identify this as a React Element
			        $$typeof: REACT_ELEMENT_TYPE,
			        // Built-in properties that belong on the element
			        type: type,
			        key: key,
			        ref: ref,
			        props: props,
			        // Record the component responsible for creating this element.
			        _owner: owner
			      };
			      {
			        // The validation flag is currently mutative. We put it on
			        // an external backing store so that we can freeze the whole object.
			        // This can be replaced with a WeakMap once they are implemented in
			        // commonly used development environments.
			        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
			        // the validation flag non-enumerable (where possible, which should
			        // include every environment we run tests in), so the test framework
			        // ignores it.

			        Object.defineProperty(element._store, 'validated', {
			          configurable: false,
			          enumerable: false,
			          writable: true,
			          value: false
			        }); // self and source are DEV only properties.

			        Object.defineProperty(element, '_self', {
			          configurable: false,
			          enumerable: false,
			          writable: false,
			          value: self
			        }); // Two elements created in two different places should be considered
			        // equal for testing purposes and therefore we hide it from enumeration.

			        Object.defineProperty(element, '_source', {
			          configurable: false,
			          enumerable: false,
			          writable: false,
			          value: source
			        });

			        if (Object.freeze) {
			          Object.freeze(element.props);
			          Object.freeze(element);
			        }
			      }
			      return element;
			    };
			    /**
			     * Create and return a new ReactElement of the given type.
			     * See https://reactjs.org/docs/react-api.html#createelement
			     */


			    function createElement(type, config, children) {
			      var propName; // Reserved names are extracted

			      var props = {};
			      var key = null;
			      var ref = null;
			      var self = null;
			      var source = null;

			      if (config != null) {
			        if (hasValidRef(config)) {
			          ref = config.ref;
			          {
			            warnIfStringRefCannotBeAutoConverted(config);
			          }
			        }

			        if (hasValidKey(config)) {
			          key = '' + config.key;
			        }

			        self = config.__self === undefined ? null : config.__self;
			        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

			        for (propName in config) {
			          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
			            props[propName] = config[propName];
			          }
			        }
			      } // Children can be more than one argument, and those are transferred onto
			      // the newly allocated props object.


			      var childrenLength = arguments.length - 2;

			      if (childrenLength === 1) {
			        props.children = children;
			      } else if (childrenLength > 1) {
			        var childArray = Array(childrenLength);

			        for (var i = 0; i < childrenLength; i++) {
			          childArray[i] = arguments[i + 2];
			        }

			        {
			          if (Object.freeze) {
			            Object.freeze(childArray);
			          }
			        }
			        props.children = childArray;
			      } // Resolve default props


			      if (type && type.defaultProps) {
			        var defaultProps = type.defaultProps;

			        for (propName in defaultProps) {
			          if (props[propName] === undefined) {
			            props[propName] = defaultProps[propName];
			          }
			        }
			      }

			      {
			        if (key || ref) {
			          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

			          if (key) {
			            defineKeyPropWarningGetter(props, displayName);
			          }

			          if (ref) {
			            defineRefPropWarningGetter(props, displayName);
			          }
			        }
			      }
			      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
			    }

			    function cloneAndReplaceKey(oldElement, newKey) {
			      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
			      return newElement;
			    }
			    /**
			     * Clone and return a new ReactElement using element as the starting point.
			     * See https://reactjs.org/docs/react-api.html#cloneelement
			     */


			    function cloneElement(element, config, children) {
			      if (!!(element === null || element === undefined)) {
			        {
			          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
			        }
			      }

			      var propName; // Original props are copied

			      var props = _assign({}, element.props); // Reserved names are extracted


			      var key = element.key;
			      var ref = element.ref; // Self is preserved since the owner is preserved.

			      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
			      // transpiler, and the original source is probably a better indicator of the
			      // true owner.

			      var source = element._source; // Owner will be preserved, unless ref is overridden

			      var owner = element._owner;

			      if (config != null) {
			        if (hasValidRef(config)) {
			          // Silently steal the ref from the parent.
			          ref = config.ref;
			          owner = ReactCurrentOwner.current;
			        }

			        if (hasValidKey(config)) {
			          key = '' + config.key;
			        } // Remaining properties override existing props


			        var defaultProps;

			        if (element.type && element.type.defaultProps) {
			          defaultProps = element.type.defaultProps;
			        }

			        for (propName in config) {
			          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
			            if (config[propName] === undefined && defaultProps !== undefined) {
			              // Resolve default props
			              props[propName] = defaultProps[propName];
			            } else {
			              props[propName] = config[propName];
			            }
			          }
			        }
			      } // Children can be more than one argument, and those are transferred onto
			      // the newly allocated props object.


			      var childrenLength = arguments.length - 2;

			      if (childrenLength === 1) {
			        props.children = children;
			      } else if (childrenLength > 1) {
			        var childArray = Array(childrenLength);

			        for (var i = 0; i < childrenLength; i++) {
			          childArray[i] = arguments[i + 2];
			        }

			        props.children = childArray;
			      }

			      return ReactElement(element.type, key, ref, self, source, owner, props);
			    }
			    /**
			     * Verifies the object is a ReactElement.
			     * See https://reactjs.org/docs/react-api.html#isvalidelement
			     * @param {?object} object
			     * @return {boolean} True if `object` is a ReactElement.
			     * @final
			     */


			    function isValidElement(object) {
			      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			    }

			    var SEPARATOR = '.';
			    var SUBSEPARATOR = ':';
			    /**
			     * Escape and wrap key so it is safe to use as a reactid
			     *
			     * @param {string} key to be escaped.
			     * @return {string} the escaped key.
			     */

			    function escape(key) {
			      var escapeRegex = /[=:]/g;
			      var escaperLookup = {
			        '=': '=0',
			        ':': '=2'
			      };
			      var escapedString = key.replace(escapeRegex, function (match) {
			        return escaperLookup[match];
			      });
			      return '$' + escapedString;
			    }
			    /**
			     * TODO: Test that a single child and an array with one item have the same key
			     * pattern.
			     */


			    var didWarnAboutMaps = false;
			    var userProvidedKeyEscapeRegex = /\/+/g;

			    function escapeUserProvidedKey(text) {
			      return text.replace(userProvidedKeyEscapeRegex, '$&/');
			    }
			    /**
			     * Generate a key string that identifies a element within a set.
			     *
			     * @param {*} element A element that could contain a manual key.
			     * @param {number} index Index that is used if a manual key is not provided.
			     * @return {string}
			     */


			    function getElementKey(element, index) {
			      // Do some typechecking here since we call this blindly. We want to ensure
			      // that we don't block potential future ES APIs.
			      if (typeof element === 'object' && element !== null && element.key != null) {
			        // Explicit key
			        return escape('' + element.key);
			      } // Implicit key determined by the index in the set


			      return index.toString(36);
			    }

			    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
			      var type = typeof children;

			      if (type === 'undefined' || type === 'boolean') {
			        // All of the above are perceived as null.
			        children = null;
			      }

			      var invokeCallback = false;

			      if (children === null) {
			        invokeCallback = true;
			      } else {
			        switch (type) {
			          case 'string':
			          case 'number':
			            invokeCallback = true;
			            break;

			          case 'object':
			            switch (children.$$typeof) {
			              case REACT_ELEMENT_TYPE:
			              case REACT_PORTAL_TYPE:
			                invokeCallback = true;
			            }

			        }
			      }

			      if (invokeCallback) {
			        var _child = children;
			        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
			        // so that it's consistent if the number of children grows:

			        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

			        if (Array.isArray(mappedChild)) {
			          var escapedChildKey = '';

			          if (childKey != null) {
			            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
			          }

			          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
			            return c;
			          });
			        } else if (mappedChild != null) {
			          if (isValidElement(mappedChild)) {
			            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
			            // traverseAllChildren used to do for objects as children
			            escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
			            mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
			            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
			          }

			          array.push(mappedChild);
			        }

			        return 1;
			      }

			      var child;
			      var nextName;
			      var subtreeCount = 0; // Count of children found in the current subtree.

			      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

			      if (Array.isArray(children)) {
			        for (var i = 0; i < children.length; i++) {
			          child = children[i];
			          nextName = nextNamePrefix + getElementKey(child, i);
			          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
			        }
			      } else {
			        var iteratorFn = getIteratorFn(children);

			        if (typeof iteratorFn === 'function') {
			          var iterableChildren = children;
			          {
			            // Warn about using Maps as children
			            if (iteratorFn === iterableChildren.entries) {
			              if (!didWarnAboutMaps) {
			                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
			              }

			              didWarnAboutMaps = true;
			            }
			          }
			          var iterator = iteratorFn.call(iterableChildren);
			          var step;
			          var ii = 0;

			          while (!(step = iterator.next()).done) {
			            child = step.value;
			            nextName = nextNamePrefix + getElementKey(child, ii++);
			            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
			          }
			        } else if (type === 'object') {
			          var childrenString = '' + children;
			          {
			            {
			              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
			            }
			          }
			        }
			      }

			      return subtreeCount;
			    }
			    /**
			     * Maps children that are typically specified as `props.children`.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
			     *
			     * The provided mapFunction(child, index) will be called for each
			     * leaf child.
			     *
			     * @param {?*} children Children tree container.
			     * @param {function(*, int)} func The map function.
			     * @param {*} context Context for mapFunction.
			     * @return {object} Object containing the ordered map of results.
			     */


			    function mapChildren(children, func, context) {
			      if (children == null) {
			        return children;
			      }

			      var result = [];
			      var count = 0;
			      mapIntoArray(children, result, '', '', function (child) {
			        return func.call(context, child, count++);
			      });
			      return result;
			    }
			    /**
			     * Count the number of children that are typically specified as
			     * `props.children`.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrencount
			     *
			     * @param {?*} children Children tree container.
			     * @return {number} The number of children.
			     */


			    function countChildren(children) {
			      var n = 0;
			      mapChildren(children, function () {
			        n++; // Don't return anything
			      });
			      return n;
			    }
			    /**
			     * Iterates through children that are typically specified as `props.children`.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
			     *
			     * The provided forEachFunc(child, index) will be called for each
			     * leaf child.
			     *
			     * @param {?*} children Children tree container.
			     * @param {function(*, int)} forEachFunc
			     * @param {*} forEachContext Context for forEachContext.
			     */


			    function forEachChildren(children, forEachFunc, forEachContext) {
			      mapChildren(children, function () {
			        forEachFunc.apply(this, arguments); // Don't return anything.
			      }, forEachContext);
			    }
			    /**
			     * Flatten a children object (typically specified as `props.children`) and
			     * return an array with appropriately re-keyed children.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
			     */


			    function toArray(children) {
			      return mapChildren(children, function (child) {
			        return child;
			      }) || [];
			    }
			    /**
			     * Returns the first child in a collection of children and verifies that there
			     * is only one child in the collection.
			     *
			     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
			     *
			     * The current implementation of this function assumes that a single child gets
			     * passed without a wrapper, but the purpose of this helper function is to
			     * abstract away the particular structure of children.
			     *
			     * @param {?object} children Child collection structure.
			     * @return {ReactElement} The first and only `ReactElement` contained in the
			     * structure.
			     */


			    function onlyChild(children) {
			      if (!isValidElement(children)) {
			        {
			          throw Error("React.Children.only expected to receive a single React element child.");
			        }
			      }

			      return children;
			    }

			    function createContext(defaultValue, calculateChangedBits) {
			      if (calculateChangedBits === undefined) {
			        calculateChangedBits = null;
			      } else {
			        {
			          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
			            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
			          }
			        }
			      }

			      var context = {
			        $$typeof: REACT_CONTEXT_TYPE,
			        _calculateChangedBits: calculateChangedBits,
			        // As a workaround to support multiple concurrent renderers, we categorize
			        // some renderers as primary and others as secondary. We only expect
			        // there to be two concurrent renderers at most: React Native (primary) and
			        // Fabric (secondary); React DOM (primary) and React ART (secondary).
			        // Secondary renderers store their context values on separate fields.
			        _currentValue: defaultValue,
			        _currentValue2: defaultValue,
			        // Used to track how many concurrent renderers this context currently
			        // supports within in a single renderer. Such as parallel server rendering.
			        _threadCount: 0,
			        // These are circular
			        Provider: null,
			        Consumer: null
			      };
			      context.Provider = {
			        $$typeof: REACT_PROVIDER_TYPE,
			        _context: context
			      };
			      var hasWarnedAboutUsingNestedContextConsumers = false;
			      var hasWarnedAboutUsingConsumerProvider = false;
			      var hasWarnedAboutDisplayNameOnConsumer = false;
			      {
			        // A separate object, but proxies back to the original context object for
			        // backwards compatibility. It has a different $$typeof, so we can properly
			        // warn for the incorrect usage of Context as a Consumer.
			        var Consumer = {
			          $$typeof: REACT_CONTEXT_TYPE,
			          _context: context,
			          _calculateChangedBits: context._calculateChangedBits
			        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

			        Object.defineProperties(Consumer, {
			          Provider: {
			            get: function () {
			              if (!hasWarnedAboutUsingConsumerProvider) {
			                hasWarnedAboutUsingConsumerProvider = true;
			                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
			              }

			              return context.Provider;
			            },
			            set: function (_Provider) {
			              context.Provider = _Provider;
			            }
			          },
			          _currentValue: {
			            get: function () {
			              return context._currentValue;
			            },
			            set: function (_currentValue) {
			              context._currentValue = _currentValue;
			            }
			          },
			          _currentValue2: {
			            get: function () {
			              return context._currentValue2;
			            },
			            set: function (_currentValue2) {
			              context._currentValue2 = _currentValue2;
			            }
			          },
			          _threadCount: {
			            get: function () {
			              return context._threadCount;
			            },
			            set: function (_threadCount) {
			              context._threadCount = _threadCount;
			            }
			          },
			          Consumer: {
			            get: function () {
			              if (!hasWarnedAboutUsingNestedContextConsumers) {
			                hasWarnedAboutUsingNestedContextConsumers = true;
			                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
			              }

			              return context.Consumer;
			            }
			          },
			          displayName: {
			            get: function () {
			              return context.displayName;
			            },
			            set: function (displayName) {
			              if (!hasWarnedAboutDisplayNameOnConsumer) {
			                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
			                hasWarnedAboutDisplayNameOnConsumer = true;
			              }
			            }
			          }
			        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

			        context.Consumer = Consumer;
			      }
			      {
			        context._currentRenderer = null;
			        context._currentRenderer2 = null;
			      }
			      return context;
			    }

			    var Uninitialized = -1;
			    var Pending = 0;
			    var Resolved = 1;
			    var Rejected = 2;

			    function lazyInitializer(payload) {
			      if (payload._status === Uninitialized) {
			        var ctor = payload._result;
			        var thenable = ctor(); // Transition to the next state.

			        var pending = payload;
			        pending._status = Pending;
			        pending._result = thenable;
			        thenable.then(function (moduleObject) {
			          if (payload._status === Pending) {
			            var defaultExport = moduleObject.default;
			            {
			              if (defaultExport === undefined) {
			                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
			                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
			              }
			            } // Transition to the next state.

			            var resolved = payload;
			            resolved._status = Resolved;
			            resolved._result = defaultExport;
			          }
			        }, function (error) {
			          if (payload._status === Pending) {
			            // Transition to the next state.
			            var rejected = payload;
			            rejected._status = Rejected;
			            rejected._result = error;
			          }
			        });
			      }

			      if (payload._status === Resolved) {
			        return payload._result;
			      } else {
			        throw payload._result;
			      }
			    }

			    function lazy(ctor) {
			      var payload = {
			        // We use these fields to store the result.
			        _status: -1,
			        _result: ctor
			      };
			      var lazyType = {
			        $$typeof: REACT_LAZY_TYPE,
			        _payload: payload,
			        _init: lazyInitializer
			      };
			      {
			        // In production, this would just set it on the object.
			        var defaultProps;
			        var propTypes; // $FlowFixMe

			        Object.defineProperties(lazyType, {
			          defaultProps: {
			            configurable: true,
			            get: function () {
			              return defaultProps;
			            },
			            set: function (newDefaultProps) {
			              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
			              defaultProps = newDefaultProps; // Match production behavior more closely:
			              // $FlowFixMe

			              Object.defineProperty(lazyType, 'defaultProps', {
			                enumerable: true
			              });
			            }
			          },
			          propTypes: {
			            configurable: true,
			            get: function () {
			              return propTypes;
			            },
			            set: function (newPropTypes) {
			              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
			              propTypes = newPropTypes; // Match production behavior more closely:
			              // $FlowFixMe

			              Object.defineProperty(lazyType, 'propTypes', {
			                enumerable: true
			              });
			            }
			          }
			        });
			      }
			      return lazyType;
			    }

			    function forwardRef(render) {
			      {
			        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
			          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
			        } else if (typeof render !== 'function') {
			          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
			        } else {
			          if (render.length !== 0 && render.length !== 2) {
			            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
			          }
			        }

			        if (render != null) {
			          if (render.defaultProps != null || render.propTypes != null) {
			            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
			          }
			        }
			      }
			      var elementType = {
			        $$typeof: REACT_FORWARD_REF_TYPE,
			        render: render
			      };
			      {
			        var ownName;
			        Object.defineProperty(elementType, 'displayName', {
			          enumerable: false,
			          configurable: true,
			          get: function () {
			            return ownName;
			          },
			          set: function (name) {
			            ownName = name;

			            if (render.displayName == null) {
			              render.displayName = name;
			            }
			          }
			        });
			      }
			      return elementType;
			    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


			    var enableScopeAPI = false; // Experimental Create Event Handle API.

			    function isValidElementType(type) {
			      if (typeof type === 'string' || typeof type === 'function') {
			        return true;
			      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


			      if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
			        return true;
			      }

			      if (typeof type === 'object' && type !== null) {
			        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
			          return true;
			        }
			      }

			      return false;
			    }

			    function memo(type, compare) {
			      {
			        if (!isValidElementType(type)) {
			          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
			        }
			      }
			      var elementType = {
			        $$typeof: REACT_MEMO_TYPE,
			        type: type,
			        compare: compare === undefined ? null : compare
			      };
			      {
			        var ownName;
			        Object.defineProperty(elementType, 'displayName', {
			          enumerable: false,
			          configurable: true,
			          get: function () {
			            return ownName;
			          },
			          set: function (name) {
			            ownName = name;

			            if (type.displayName == null) {
			              type.displayName = name;
			            }
			          }
			        });
			      }
			      return elementType;
			    }

			    function resolveDispatcher() {
			      var dispatcher = ReactCurrentDispatcher.current;

			      if (!(dispatcher !== null)) {
			        {
			          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
			        }
			      }

			      return dispatcher;
			    }

			    function useContext(Context, unstable_observedBits) {
			      var dispatcher = resolveDispatcher();
			      {
			        if (unstable_observedBits !== undefined) {
			          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
			        } // TODO: add a more generic warning for invalid values.


			        if (Context._context !== undefined) {
			          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
			          // and nobody should be using this in existing code.

			          if (realContext.Consumer === Context) {
			            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
			          } else if (realContext.Provider === Context) {
			            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
			          }
			        }
			      }
			      return dispatcher.useContext(Context, unstable_observedBits);
			    }

			    function useState(initialState) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useState(initialState);
			    }

			    function useReducer(reducer, initialArg, init) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useReducer(reducer, initialArg, init);
			    }

			    function useRef(initialValue) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useRef(initialValue);
			    }

			    function useEffect(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useEffect(create, deps);
			    }

			    function useLayoutEffect(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useLayoutEffect(create, deps);
			    }

			    function useCallback(callback, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useCallback(callback, deps);
			    }

			    function useMemo(create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useMemo(create, deps);
			    }

			    function useImperativeHandle(ref, create, deps) {
			      var dispatcher = resolveDispatcher();
			      return dispatcher.useImperativeHandle(ref, create, deps);
			    }

			    function useDebugValue(value, formatterFn) {
			      {
			        var dispatcher = resolveDispatcher();
			        return dispatcher.useDebugValue(value, formatterFn);
			      }
			    } // Helpers to patch console.logs to avoid logging during side-effect free
			    // replaying on render function. This currently only patches the object
			    // lazily which won't cover if the log function was extracted eagerly.
			    // We could also eagerly patch the method.


			    var disabledDepth = 0;
			    var prevLog;
			    var prevInfo;
			    var prevWarn;
			    var prevError;
			    var prevGroup;
			    var prevGroupCollapsed;
			    var prevGroupEnd;

			    function disabledLog() {}

			    disabledLog.__reactDisabledLog = true;

			    function disableLogs() {
			      {
			        if (disabledDepth === 0) {
			          /* eslint-disable react-internal/no-production-logging */
			          prevLog = console.log;
			          prevInfo = console.info;
			          prevWarn = console.warn;
			          prevError = console.error;
			          prevGroup = console.group;
			          prevGroupCollapsed = console.groupCollapsed;
			          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

			          var props = {
			            configurable: true,
			            enumerable: true,
			            value: disabledLog,
			            writable: true
			          }; // $FlowFixMe Flow thinks console is immutable.

			          Object.defineProperties(console, {
			            info: props,
			            log: props,
			            warn: props,
			            error: props,
			            group: props,
			            groupCollapsed: props,
			            groupEnd: props
			          });
			          /* eslint-enable react-internal/no-production-logging */
			        }

			        disabledDepth++;
			      }
			    }

			    function reenableLogs() {
			      {
			        disabledDepth--;

			        if (disabledDepth === 0) {
			          /* eslint-disable react-internal/no-production-logging */
			          var props = {
			            configurable: true,
			            enumerable: true,
			            writable: true
			          }; // $FlowFixMe Flow thinks console is immutable.

			          Object.defineProperties(console, {
			            log: _assign({}, props, {
			              value: prevLog
			            }),
			            info: _assign({}, props, {
			              value: prevInfo
			            }),
			            warn: _assign({}, props, {
			              value: prevWarn
			            }),
			            error: _assign({}, props, {
			              value: prevError
			            }),
			            group: _assign({}, props, {
			              value: prevGroup
			            }),
			            groupCollapsed: _assign({}, props, {
			              value: prevGroupCollapsed
			            }),
			            groupEnd: _assign({}, props, {
			              value: prevGroupEnd
			            })
			          });
			          /* eslint-enable react-internal/no-production-logging */
			        }

			        if (disabledDepth < 0) {
			          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
			        }
			      }
			    }

			    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
			    var prefix;

			    function describeBuiltInComponentFrame(name, source, ownerFn) {
			      {
			        if (prefix === undefined) {
			          // Extract the VM specific prefix used by each line.
			          try {
			            throw Error();
			          } catch (x) {
			            var match = x.stack.trim().match(/\n( *(at )?)/);
			            prefix = match && match[1] || '';
			          }
			        } // We use the prefix to ensure our stacks line up with native stack frames.


			        return '\n' + prefix + name;
			      }
			    }

			    var reentry = false;
			    var componentFrameCache;
			    {
			      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
			      componentFrameCache = new PossiblyWeakMap();
			    }

			    function describeNativeComponentFrame(fn, construct) {
			      // If something asked for a stack inside a fake render, it should get ignored.
			      if (!fn || reentry) {
			        return '';
			      }

			      {
			        var frame = componentFrameCache.get(fn);

			        if (frame !== undefined) {
			          return frame;
			        }
			      }
			      var control;
			      reentry = true;
			      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

			      Error.prepareStackTrace = undefined;
			      var previousDispatcher;
			      {
			        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
			        // for warnings.

			        ReactCurrentDispatcher$1.current = null;
			        disableLogs();
			      }

			      try {
			        // This should throw.
			        if (construct) {
			          // Something should be setting the props in the constructor.
			          var Fake = function () {
			            throw Error();
			          }; // $FlowFixMe


			          Object.defineProperty(Fake.prototype, 'props', {
			            set: function () {
			              // We use a throwing setter instead of frozen or non-writable props
			              // because that won't throw in a non-strict mode function.
			              throw Error();
			            }
			          });

			          if (typeof Reflect === 'object' && Reflect.construct) {
			            // We construct a different control for this case to include any extra
			            // frames added by the construct call.
			            try {
			              Reflect.construct(Fake, []);
			            } catch (x) {
			              control = x;
			            }

			            Reflect.construct(fn, [], Fake);
			          } else {
			            try {
			              Fake.call();
			            } catch (x) {
			              control = x;
			            }

			            fn.call(Fake.prototype);
			          }
			        } else {
			          try {
			            throw Error();
			          } catch (x) {
			            control = x;
			          }

			          fn();
			        }
			      } catch (sample) {
			        // This is inlined manually because closure doesn't do it for us.
			        if (sample && control && typeof sample.stack === 'string') {
			          // This extracts the first frame from the sample that isn't also in the control.
			          // Skipping one frame that we assume is the frame that calls the two.
			          var sampleLines = sample.stack.split('\n');
			          var controlLines = control.stack.split('\n');
			          var s = sampleLines.length - 1;
			          var c = controlLines.length - 1;

			          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
			            // We expect at least one stack frame to be shared.
			            // Typically this will be the root most one. However, stack frames may be
			            // cut off due to maximum stack limits. In this case, one maybe cut off
			            // earlier than the other. We assume that the sample is longer or the same
			            // and there for cut off earlier. So we should find the root most frame in
			            // the sample somewhere in the control.
			            c--;
			          }

			          for (; s >= 1 && c >= 0; s--, c--) {
			            // Next we find the first one that isn't the same which should be the
			            // frame that called our sample function and the control.
			            if (sampleLines[s] !== controlLines[c]) {
			              // In V8, the first line is describing the message but other VMs don't.
			              // If we're about to return the first line, and the control is also on the same
			              // line, that's a pretty good indicator that our sample threw at same line as
			              // the control. I.e. before we entered the sample frame. So we ignore this result.
			              // This can happen if you passed a class to function component, or non-function.
			              if (s !== 1 || c !== 1) {
			                do {
			                  s--;
			                  c--; // We may still have similar intermediate frames from the construct call.
			                  // The next one that isn't the same should be our match though.

			                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
			                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
			                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

			                    {
			                      if (typeof fn === 'function') {
			                        componentFrameCache.set(fn, _frame);
			                      }
			                    } // Return the line we found.

			                    return _frame;
			                  }
			                } while (s >= 1 && c >= 0);
			              }

			              break;
			            }
			          }
			        }
			      } finally {
			        reentry = false;
			        {
			          ReactCurrentDispatcher$1.current = previousDispatcher;
			          reenableLogs();
			        }
			        Error.prepareStackTrace = previousPrepareStackTrace;
			      } // Fallback to just using the name if we couldn't make it throw.


			      var name = fn ? fn.displayName || fn.name : '';
			      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
			      {
			        if (typeof fn === 'function') {
			          componentFrameCache.set(fn, syntheticFrame);
			        }
			      }
			      return syntheticFrame;
			    }

			    function describeFunctionComponentFrame(fn, source, ownerFn) {
			      {
			        return describeNativeComponentFrame(fn, false);
			      }
			    }

			    function shouldConstruct(Component) {
			      var prototype = Component.prototype;
			      return !!(prototype && prototype.isReactComponent);
			    }

			    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
			      if (type == null) {
			        return '';
			      }

			      if (typeof type === 'function') {
			        {
			          return describeNativeComponentFrame(type, shouldConstruct(type));
			        }
			      }

			      if (typeof type === 'string') {
			        return describeBuiltInComponentFrame(type);
			      }

			      switch (type) {
			        case exports.Suspense:
			          return describeBuiltInComponentFrame('Suspense');

			        case REACT_SUSPENSE_LIST_TYPE:
			          return describeBuiltInComponentFrame('SuspenseList');
			      }

			      if (typeof type === 'object') {
			        switch (type.$$typeof) {
			          case REACT_FORWARD_REF_TYPE:
			            return describeFunctionComponentFrame(type.render);

			          case REACT_MEMO_TYPE:
			            // Memo may contain any component type so we recursively resolve it.
			            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

			          case REACT_BLOCK_TYPE:
			            return describeFunctionComponentFrame(type._render);

			          case REACT_LAZY_TYPE:
			            {
			              var lazyComponent = type;
			              var payload = lazyComponent._payload;
			              var init = lazyComponent._init;

			              try {
			                // Lazy may contain any component type so we recursively resolve it.
			                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
			              } catch (x) {}
			            }
			        }
			      }

			      return '';
			    }

			    var loggedTypeFailures = {};
			    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

			    function setCurrentlyValidatingElement(element) {
			      {
			        if (element) {
			          var owner = element._owner;
			          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
			          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
			        } else {
			          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
			        }
			      }
			    }

			    function checkPropTypes(typeSpecs, values, location, componentName, element) {
			      {
			        // $FlowFixMe This is okay but Flow doesn't know it.
			        var has = Function.call.bind(Object.prototype.hasOwnProperty);

			        for (var typeSpecName in typeSpecs) {
			          if (has(typeSpecs, typeSpecName)) {
			            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
			            // fail the render phase where it didn't fail before. So we log it.
			            // After these have been cleaned up, we'll let them throw.

			            try {
			              // This is intentionally an invariant that gets caught. It's the same
			              // behavior as without this statement except with a better message.
			              if (typeof typeSpecs[typeSpecName] !== 'function') {
			                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
			                err.name = 'Invariant Violation';
			                throw err;
			              }

			              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
			            } catch (ex) {
			              error$1 = ex;
			            }

			            if (error$1 && !(error$1 instanceof Error)) {
			              setCurrentlyValidatingElement(element);
			              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
			              setCurrentlyValidatingElement(null);
			            }

			            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
			              // Only monitor this failure once because there tends to be a lot of the
			              // same error.
			              loggedTypeFailures[error$1.message] = true;
			              setCurrentlyValidatingElement(element);
			              error('Failed %s type: %s', location, error$1.message);
			              setCurrentlyValidatingElement(null);
			            }
			          }
			        }
			      }
			    }

			    function setCurrentlyValidatingElement$1(element) {
			      {
			        if (element) {
			          var owner = element._owner;
			          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
			          setExtraStackFrame(stack);
			        } else {
			          setExtraStackFrame(null);
			        }
			      }
			    }

			    var propTypesMisspellWarningShown;
			    {
			      propTypesMisspellWarningShown = false;
			    }

			    function getDeclarationErrorAddendum() {
			      if (ReactCurrentOwner.current) {
			        var name = getComponentName(ReactCurrentOwner.current.type);

			        if (name) {
			          return '\n\nCheck the render method of `' + name + '`.';
			        }
			      }

			      return '';
			    }

			    function getSourceInfoErrorAddendum(source) {
			      if (source !== undefined) {
			        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
			        var lineNumber = source.lineNumber;
			        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
			      }

			      return '';
			    }

			    function getSourceInfoErrorAddendumForProps(elementProps) {
			      if (elementProps !== null && elementProps !== undefined) {
			        return getSourceInfoErrorAddendum(elementProps.__source);
			      }

			      return '';
			    }
			    /**
			     * Warn if there's no key explicitly set on dynamic arrays of children or
			     * object keys are not valid. This allows us to keep track of children between
			     * updates.
			     */


			    var ownerHasKeyUseWarning = {};

			    function getCurrentComponentErrorInfo(parentType) {
			      var info = getDeclarationErrorAddendum();

			      if (!info) {
			        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

			        if (parentName) {
			          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
			        }
			      }

			      return info;
			    }
			    /**
			     * Warn if the element doesn't have an explicit key assigned to it.
			     * This element is in an array. The array could grow and shrink or be
			     * reordered. All children that haven't already been validated are required to
			     * have a "key" property assigned to it. Error statuses are cached so a warning
			     * will only be shown once.
			     *
			     * @internal
			     * @param {ReactElement} element Element that requires a key.
			     * @param {*} parentType element's parent's type.
			     */


			    function validateExplicitKey(element, parentType) {
			      if (!element._store || element._store.validated || element.key != null) {
			        return;
			      }

			      element._store.validated = true;
			      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

			      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
			        return;
			      }

			      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
			      // property, it may be the creator of the child that's responsible for
			      // assigning it a key.

			      var childOwner = '';

			      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
			        // Give the component that originally created this child.
			        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
			      }

			      {
			        setCurrentlyValidatingElement$1(element);
			        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
			        setCurrentlyValidatingElement$1(null);
			      }
			    }
			    /**
			     * Ensure that every element either is passed in a static location, in an
			     * array with an explicit keys property defined, or in an object literal
			     * with valid key property.
			     *
			     * @internal
			     * @param {ReactNode} node Statically passed child of any type.
			     * @param {*} parentType node's parent's type.
			     */


			    function validateChildKeys(node, parentType) {
			      if (typeof node !== 'object') {
			        return;
			      }

			      if (Array.isArray(node)) {
			        for (var i = 0; i < node.length; i++) {
			          var child = node[i];

			          if (isValidElement(child)) {
			            validateExplicitKey(child, parentType);
			          }
			        }
			      } else if (isValidElement(node)) {
			        // This element was passed in a valid location.
			        if (node._store) {
			          node._store.validated = true;
			        }
			      } else if (node) {
			        var iteratorFn = getIteratorFn(node);

			        if (typeof iteratorFn === 'function') {
			          // Entry iterators used to provide implicit keys,
			          // but now we print a separate warning for them later.
			          if (iteratorFn !== node.entries) {
			            var iterator = iteratorFn.call(node);
			            var step;

			            while (!(step = iterator.next()).done) {
			              if (isValidElement(step.value)) {
			                validateExplicitKey(step.value, parentType);
			              }
			            }
			          }
			        }
			      }
			    }
			    /**
			     * Given an element, validate that its props follow the propTypes definition,
			     * provided by the type.
			     *
			     * @param {ReactElement} element
			     */


			    function validatePropTypes(element) {
			      {
			        var type = element.type;

			        if (type === null || type === undefined || typeof type === 'string') {
			          return;
			        }

			        var propTypes;

			        if (typeof type === 'function') {
			          propTypes = type.propTypes;
			        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
			        // Inner props are checked in the reconciler.
			        type.$$typeof === REACT_MEMO_TYPE)) {
			          propTypes = type.propTypes;
			        } else {
			          return;
			        }

			        if (propTypes) {
			          // Intentionally inside to avoid triggering lazy initializers:
			          var name = getComponentName(type);
			          checkPropTypes(propTypes, element.props, 'prop', name, element);
			        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
			          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

			          var _name = getComponentName(type);

			          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
			        }

			        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
			          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
			        }
			      }
			    }
			    /**
			     * Given a fragment, validate that it can only be provided with fragment props
			     * @param {ReactElement} fragment
			     */


			    function validateFragmentProps(fragment) {
			      {
			        var keys = Object.keys(fragment.props);

			        for (var i = 0; i < keys.length; i++) {
			          var key = keys[i];

			          if (key !== 'children' && key !== 'key') {
			            setCurrentlyValidatingElement$1(fragment);
			            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
			            setCurrentlyValidatingElement$1(null);
			            break;
			          }
			        }

			        if (fragment.ref !== null) {
			          setCurrentlyValidatingElement$1(fragment);
			          error('Invalid attribute `ref` supplied to `React.Fragment`.');
			          setCurrentlyValidatingElement$1(null);
			        }
			      }
			    }

			    function createElementWithValidation(type, props, children) {
			      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
			      // succeed and there will likely be errors in render.

			      if (!validType) {
			        var info = '';

			        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
			          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
			        }

			        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

			        if (sourceInfo) {
			          info += sourceInfo;
			        } else {
			          info += getDeclarationErrorAddendum();
			        }

			        var typeString;

			        if (type === null) {
			          typeString = 'null';
			        } else if (Array.isArray(type)) {
			          typeString = 'array';
			        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
			          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
			          info = ' Did you accidentally export a JSX literal instead of a component?';
			        } else {
			          typeString = typeof type;
			        }

			        {
			          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
			        }
			      }

			      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
			      // TODO: Drop this when these are no longer allowed as the type argument.

			      if (element == null) {
			        return element;
			      } // Skip key warning if the type isn't valid since our key validation logic
			      // doesn't expect a non-string/function type and can throw confusing errors.
			      // We don't want exception behavior to differ between dev and prod.
			      // (Rendering will throw with a helpful message and as soon as the type is
			      // fixed, the key warnings will appear.)


			      if (validType) {
			        for (var i = 2; i < arguments.length; i++) {
			          validateChildKeys(arguments[i], type);
			        }
			      }

			      if (type === exports.Fragment) {
			        validateFragmentProps(element);
			      } else {
			        validatePropTypes(element);
			      }

			      return element;
			    }

			    var didWarnAboutDeprecatedCreateFactory = false;

			    function createFactoryWithValidation(type) {
			      var validatedFactory = createElementWithValidation.bind(null, type);
			      validatedFactory.type = type;
			      {
			        if (!didWarnAboutDeprecatedCreateFactory) {
			          didWarnAboutDeprecatedCreateFactory = true;
			          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
			        } // Legacy hook: remove it


			        Object.defineProperty(validatedFactory, 'type', {
			          enumerable: false,
			          get: function () {
			            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
			            Object.defineProperty(this, 'type', {
			              value: type
			            });
			            return type;
			          }
			        });
			      }
			      return validatedFactory;
			    }

			    function cloneElementWithValidation(element, props, children) {
			      var newElement = cloneElement.apply(this, arguments);

			      for (var i = 2; i < arguments.length; i++) {
			        validateChildKeys(arguments[i], newElement.type);
			      }

			      validatePropTypes(newElement);
			      return newElement;
			    }

			    {
			      try {
			        var frozenObject = Object.freeze({});
			        /* eslint-disable no-new */

			        new Map([[frozenObject, null]]);
			        new Set([frozenObject]);
			        /* eslint-enable no-new */
			      } catch (e) {}
			    }
			    var createElement$1 = createElementWithValidation;
			    var cloneElement$1 = cloneElementWithValidation;
			    var createFactory = createFactoryWithValidation;
			    var Children = {
			      map: mapChildren,
			      forEach: forEachChildren,
			      count: countChildren,
			      toArray: toArray,
			      only: onlyChild
			    };
			    exports.Children = Children;
			    exports.Component = Component;
			    exports.PureComponent = PureComponent;
			    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
			    exports.cloneElement = cloneElement$1;
			    exports.createContext = createContext;
			    exports.createElement = createElement$1;
			    exports.createFactory = createFactory;
			    exports.createRef = createRef;
			    exports.forwardRef = forwardRef;
			    exports.isValidElement = isValidElement;
			    exports.lazy = lazy;
			    exports.memo = memo;
			    exports.useCallback = useCallback;
			    exports.useContext = useContext;
			    exports.useDebugValue = useDebugValue;
			    exports.useEffect = useEffect;
			    exports.useImperativeHandle = useImperativeHandle;
			    exports.useLayoutEffect = useLayoutEffect;
			    exports.useMemo = useMemo;
			    exports.useReducer = useReducer;
			    exports.useRef = useRef;
			    exports.useState = useState;
			    exports.version = ReactVersion;
			  })();
			}
	} (react_development));
		return react_development;
	}

	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReact_production_min();
		} else {
		  module.exports = requireReact_development();
		}
	} (react));

	var Z = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

	var e = "colors",
	    t = "sizes",
	    r = "space",
	    n = {
	  gap: r,
	  gridGap: r,
	  columnGap: r,
	  gridColumnGap: r,
	  rowGap: r,
	  gridRowGap: r,
	  inset: r,
	  insetBlock: r,
	  insetBlockEnd: r,
	  insetBlockStart: r,
	  insetInline: r,
	  insetInlineEnd: r,
	  insetInlineStart: r,
	  margin: r,
	  marginTop: r,
	  marginRight: r,
	  marginBottom: r,
	  marginLeft: r,
	  marginBlock: r,
	  marginBlockEnd: r,
	  marginBlockStart: r,
	  marginInline: r,
	  marginInlineEnd: r,
	  marginInlineStart: r,
	  padding: r,
	  paddingTop: r,
	  paddingRight: r,
	  paddingBottom: r,
	  paddingLeft: r,
	  paddingBlock: r,
	  paddingBlockEnd: r,
	  paddingBlockStart: r,
	  paddingInline: r,
	  paddingInlineEnd: r,
	  paddingInlineStart: r,
	  top: r,
	  right: r,
	  bottom: r,
	  left: r,
	  scrollMargin: r,
	  scrollMarginTop: r,
	  scrollMarginRight: r,
	  scrollMarginBottom: r,
	  scrollMarginLeft: r,
	  scrollMarginX: r,
	  scrollMarginY: r,
	  scrollMarginBlock: r,
	  scrollMarginBlockEnd: r,
	  scrollMarginBlockStart: r,
	  scrollMarginInline: r,
	  scrollMarginInlineEnd: r,
	  scrollMarginInlineStart: r,
	  scrollPadding: r,
	  scrollPaddingTop: r,
	  scrollPaddingRight: r,
	  scrollPaddingBottom: r,
	  scrollPaddingLeft: r,
	  scrollPaddingX: r,
	  scrollPaddingY: r,
	  scrollPaddingBlock: r,
	  scrollPaddingBlockEnd: r,
	  scrollPaddingBlockStart: r,
	  scrollPaddingInline: r,
	  scrollPaddingInlineEnd: r,
	  scrollPaddingInlineStart: r,
	  fontSize: "fontSizes",
	  background: e,
	  backgroundColor: e,
	  backgroundImage: e,
	  borderImage: e,
	  border: e,
	  borderBlock: e,
	  borderBlockEnd: e,
	  borderBlockStart: e,
	  borderBottom: e,
	  borderBottomColor: e,
	  borderColor: e,
	  borderInline: e,
	  borderInlineEnd: e,
	  borderInlineStart: e,
	  borderLeft: e,
	  borderLeftColor: e,
	  borderRight: e,
	  borderRightColor: e,
	  borderTop: e,
	  borderTopColor: e,
	  caretColor: e,
	  color: e,
	  columnRuleColor: e,
	  fill: e,
	  outline: e,
	  outlineColor: e,
	  stroke: e,
	  textDecorationColor: e,
	  fontFamily: "fonts",
	  fontWeight: "fontWeights",
	  lineHeight: "lineHeights",
	  letterSpacing: "letterSpacings",
	  blockSize: t,
	  minBlockSize: t,
	  maxBlockSize: t,
	  inlineSize: t,
	  minInlineSize: t,
	  maxInlineSize: t,
	  width: t,
	  minWidth: t,
	  maxWidth: t,
	  height: t,
	  minHeight: t,
	  maxHeight: t,
	  flexBasis: t,
	  gridTemplateColumns: t,
	  gridTemplateRows: t,
	  borderWidth: "borderWidths",
	  borderTopWidth: "borderWidths",
	  borderRightWidth: "borderWidths",
	  borderBottomWidth: "borderWidths",
	  borderLeftWidth: "borderWidths",
	  borderStyle: "borderStyles",
	  borderTopStyle: "borderStyles",
	  borderRightStyle: "borderStyles",
	  borderBottomStyle: "borderStyles",
	  borderLeftStyle: "borderStyles",
	  borderRadius: "radii",
	  borderTopLeftRadius: "radii",
	  borderTopRightRadius: "radii",
	  borderBottomRightRadius: "radii",
	  borderBottomLeftRadius: "radii",
	  boxShadow: "shadows",
	  textShadow: "shadows",
	  transition: "transitions",
	  zIndex: "zIndices"
	},
	    i = (e, t) => "function" == typeof t ? {
	  "()": Function.prototype.toString.call(t)
	} : t,
	    o = () => {
	  const e = Object.create(null);
	  return (t, r, ...n) => {
	    const o = (e => JSON.stringify(e, i))(t);

	    return o in e ? e[o] : e[o] = r(t, ...n);
	  };
	},
	    l = Symbol.for("sxs.internal"),
	    s = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
	    a = e => {
	  for (const t in e) return !0;

	  return !1;
	},
	    {
	  hasOwnProperty: c
	} = Object.prototype,
	    d = e => e.includes("-") ? e : e.replace(/[A-Z]/g, e => "-" + e.toLowerCase()),
	    g = /\s+(?![^()]*\))/,
	    p = e => t => e(...("string" == typeof t ? String(t).split(g) : [t])),
	    u = {
	  appearance: e => ({
	    WebkitAppearance: e,
	    appearance: e
	  }),
	  backfaceVisibility: e => ({
	    WebkitBackfaceVisibility: e,
	    backfaceVisibility: e
	  }),
	  backdropFilter: e => ({
	    WebkitBackdropFilter: e,
	    backdropFilter: e
	  }),
	  backgroundClip: e => ({
	    WebkitBackgroundClip: e,
	    backgroundClip: e
	  }),
	  boxDecorationBreak: e => ({
	    WebkitBoxDecorationBreak: e,
	    boxDecorationBreak: e
	  }),
	  clipPath: e => ({
	    WebkitClipPath: e,
	    clipPath: e
	  }),
	  content: e => ({
	    content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
	  }),
	  hyphens: e => ({
	    WebkitHyphens: e,
	    hyphens: e
	  }),
	  maskImage: e => ({
	    WebkitMaskImage: e,
	    maskImage: e
	  }),
	  maskSize: e => ({
	    WebkitMaskSize: e,
	    maskSize: e
	  }),
	  tabSize: e => ({
	    MozTabSize: e,
	    tabSize: e
	  }),
	  textSizeAdjust: e => ({
	    WebkitTextSizeAdjust: e,
	    textSizeAdjust: e
	  }),
	  userSelect: e => ({
	    WebkitUserSelect: e,
	    userSelect: e
	  }),
	  marginBlock: p((e, t) => ({
	    marginBlockStart: e,
	    marginBlockEnd: t || e
	  })),
	  marginInline: p((e, t) => ({
	    marginInlineStart: e,
	    marginInlineEnd: t || e
	  })),
	  maxSize: p((e, t) => ({
	    maxBlockSize: e,
	    maxInlineSize: t || e
	  })),
	  minSize: p((e, t) => ({
	    minBlockSize: e,
	    minInlineSize: t || e
	  })),
	  paddingBlock: p((e, t) => ({
	    paddingBlockStart: e,
	    paddingBlockEnd: t || e
	  })),
	  paddingInline: p((e, t) => ({
	    paddingInlineStart: e,
	    paddingInlineEnd: t || e
	  }))
	},
	    h = /([\d.]+)([^]*)/,
	    f = (e, t) => e.length ? e.reduce((e, r) => (e.push(...t.map(e => e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(e) ? `:is(${r})` : r) : r + " " + e)), e), []) : t,
	    m = (e, t) => e in b && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, r, n, i) => r + ("stretch" === n ? `-moz-available${i};${d(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${d(e)}:${r}fit-content`) + i) : String(t),
	    b = {
	  blockSize: 1,
	  height: 1,
	  inlineSize: 1,
	  maxBlockSize: 1,
	  maxHeight: 1,
	  maxInlineSize: 1,
	  maxWidth: 1,
	  minBlockSize: 1,
	  minHeight: 1,
	  minInlineSize: 1,
	  minWidth: 1,
	  width: 1
	},
	    S = e => e ? e + "-" : "",
	    k = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, n, i, o, l) => "$" == o == !!i ? e : (n || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? S(t) + (l.includes("$") ? "" : S(r)) + l.replace(/\$/g, "-") : l) + ")" + (n || "--" == o ? "*" + (n || "") + (i || "1") + ")" : "")),
	    y = /\s*,\s*(?![^()]*\))/,
	    B = Object.prototype.toString,
	    $ = (e, t, r, n, i) => {
	  let o, l, s;

	  const a = (e, t, r) => {
	    let c, g;

	    const p = e => {
	      for (c in e) {
	        const R = 64 === c.charCodeAt(0),
	              z = R && Array.isArray(e[c]) ? e[c] : [e[c]];

	        for (g of z) {
	          const e = /[A-Z]/.test($ = c) ? $ : $.replace(/-[^]/g, e => e[1].toUpperCase()),
	                z = "object" == typeof g && g && g.toString === B && (!n.utils[e] || !t.length);

	          if (e in n.utils && !z) {
	            const t = n.utils[e];

	            if (t !== l) {
	              l = t, p(t(g)), l = null;
	              continue;
	            }
	          } else if (e in u) {
	            const t = u[e];

	            if (t !== s) {
	              s = t, p(t(g)), s = null;
	              continue;
	            }
	          }

	          if (R && (b = c.slice(1) in n.media ? "@media " + n.media[c.slice(1)] : c, c = b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, r, n, i, o) => {
	            const l = h.test(t),
	                  s = .0625 * (l ? -1 : 1),
	                  [a, c] = l ? [n, t] : [t, n];
	            return "(" + ("=" === r[0] ? "" : ">" === r[0] === l ? "max-" : "min-") + a + ":" + ("=" !== r[0] && 1 === r.length ? c.replace(h, (e, t, n) => Number(t) + s * (">" === r ? 1 : -1) + n) : c) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + a + ":" + (1 === i.length ? o.replace(h, (e, t, r) => Number(t) + s * (">" === i ? -1 : 1) + r) : o) : "") + ")";
	          })), z) {
	            const e = R ? r.concat(c) : [...r],
	                  n = R ? [...t] : f(t, c.split(y));
	            void 0 !== o && i(x(...o)), o = void 0, a(g, n, e);
	          } else void 0 === o && (o = [[], t, r]), c = R || 36 !== c.charCodeAt(0) ? c : `--${S(n.prefix)}${c.slice(1).replace(/\$/g, "-")}`, g = z ? g : "number" == typeof g ? g && e in I ? String(g) + "px" : String(g) : k(m(e, null == g ? "" : g), n.prefix, n.themeMap[e]), o[0].push(`${R ? `${c} ` : `${d(c)}:`}${g}`);
	        }
	      }

	      var b, $;
	    };

	    p(e), void 0 !== o && i(x(...o)), o = void 0;
	  };

	  a(e, t, r);
	},
	    x = (e, t, r) => `${r.map(e => `${e}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`,
	    I = {
	  animationDelay: 1,
	  animationDuration: 1,
	  backgroundSize: 1,
	  blockSize: 1,
	  border: 1,
	  borderBlock: 1,
	  borderBlockEnd: 1,
	  borderBlockEndWidth: 1,
	  borderBlockStart: 1,
	  borderBlockStartWidth: 1,
	  borderBlockWidth: 1,
	  borderBottom: 1,
	  borderBottomLeftRadius: 1,
	  borderBottomRightRadius: 1,
	  borderBottomWidth: 1,
	  borderEndEndRadius: 1,
	  borderEndStartRadius: 1,
	  borderInlineEnd: 1,
	  borderInlineEndWidth: 1,
	  borderInlineStart: 1,
	  borderInlineStartWidth: 1,
	  borderInlineWidth: 1,
	  borderLeft: 1,
	  borderLeftWidth: 1,
	  borderRadius: 1,
	  borderRight: 1,
	  borderRightWidth: 1,
	  borderSpacing: 1,
	  borderStartEndRadius: 1,
	  borderStartStartRadius: 1,
	  borderTop: 1,
	  borderTopLeftRadius: 1,
	  borderTopRightRadius: 1,
	  borderTopWidth: 1,
	  borderWidth: 1,
	  bottom: 1,
	  columnGap: 1,
	  columnRule: 1,
	  columnRuleWidth: 1,
	  columnWidth: 1,
	  containIntrinsicSize: 1,
	  flexBasis: 1,
	  fontSize: 1,
	  gap: 1,
	  gridAutoColumns: 1,
	  gridAutoRows: 1,
	  gridTemplateColumns: 1,
	  gridTemplateRows: 1,
	  height: 1,
	  inlineSize: 1,
	  inset: 1,
	  insetBlock: 1,
	  insetBlockEnd: 1,
	  insetBlockStart: 1,
	  insetInline: 1,
	  insetInlineEnd: 1,
	  insetInlineStart: 1,
	  left: 1,
	  letterSpacing: 1,
	  margin: 1,
	  marginBlock: 1,
	  marginBlockEnd: 1,
	  marginBlockStart: 1,
	  marginBottom: 1,
	  marginInline: 1,
	  marginInlineEnd: 1,
	  marginInlineStart: 1,
	  marginLeft: 1,
	  marginRight: 1,
	  marginTop: 1,
	  maxBlockSize: 1,
	  maxHeight: 1,
	  maxInlineSize: 1,
	  maxWidth: 1,
	  minBlockSize: 1,
	  minHeight: 1,
	  minInlineSize: 1,
	  minWidth: 1,
	  offsetDistance: 1,
	  offsetRotate: 1,
	  outline: 1,
	  outlineOffset: 1,
	  outlineWidth: 1,
	  overflowClipMargin: 1,
	  padding: 1,
	  paddingBlock: 1,
	  paddingBlockEnd: 1,
	  paddingBlockStart: 1,
	  paddingBottom: 1,
	  paddingInline: 1,
	  paddingInlineEnd: 1,
	  paddingInlineStart: 1,
	  paddingLeft: 1,
	  paddingRight: 1,
	  paddingTop: 1,
	  perspective: 1,
	  right: 1,
	  rowGap: 1,
	  scrollMargin: 1,
	  scrollMarginBlock: 1,
	  scrollMarginBlockEnd: 1,
	  scrollMarginBlockStart: 1,
	  scrollMarginBottom: 1,
	  scrollMarginInline: 1,
	  scrollMarginInlineEnd: 1,
	  scrollMarginInlineStart: 1,
	  scrollMarginLeft: 1,
	  scrollMarginRight: 1,
	  scrollMarginTop: 1,
	  scrollPadding: 1,
	  scrollPaddingBlock: 1,
	  scrollPaddingBlockEnd: 1,
	  scrollPaddingBlockStart: 1,
	  scrollPaddingBottom: 1,
	  scrollPaddingInline: 1,
	  scrollPaddingInlineEnd: 1,
	  scrollPaddingInlineStart: 1,
	  scrollPaddingLeft: 1,
	  scrollPaddingRight: 1,
	  scrollPaddingTop: 1,
	  shapeMargin: 1,
	  textDecoration: 1,
	  textDecorationThickness: 1,
	  textIndent: 1,
	  textUnderlineOffset: 1,
	  top: 1,
	  transitionDelay: 1,
	  transitionDuration: 1,
	  verticalAlign: 1,
	  width: 1,
	  wordSpacing: 1
	},
	    R = e => String.fromCharCode(e + (e > 25 ? 39 : 97)),
	    z = e => (e => {
	  let t,
	      r = "";

	  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = R(t % 52) + r;

	  return R(t % 52) + r;
	})(((e, t) => {
	  let r = t.length;

	  for (; r;) e = 33 * e ^ t.charCodeAt(--r);

	  return e;
	})(5381, JSON.stringify(e)) >>> 0),
	    W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"],
	    j = e => {
	  if (e.href && !e.href.startsWith(location.origin)) return !1;

	  try {
	    return !!e.cssRules;
	  } catch (e) {
	    return !1;
	  }
	},
	    E = e => {
	  let t;

	  const r = () => {
	    const {
	      cssRules: e
	    } = t.sheet;
	    return [].map.call(e, (r, n) => {
	      const {
	        cssText: i
	      } = r;
	      let o = "";
	      if (i.startsWith("--sxs")) return "";

	      if (e[n - 1] && (o = e[n - 1].cssText).startsWith("--sxs")) {
	        if (!r.cssRules.length) return "";

	        for (const e in t.rules) if (t.rules[e].group === r) return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;

	        return r.cssRules.length ? `${o}${i}` : "";
	      }

	      return i;
	    }).join("");
	  },
	        n = () => {
	    if (t) {
	      const {
	        rules: e,
	        sheet: r
	      } = t;

	      if (!r.deleteRule) {
	        for (; 3 === Object(Object(r.cssRules)[0]).type;) r.cssRules.splice(0, 1);

	        r.cssRules = [];
	      }

	      for (const t in e) delete e[t];
	    }

	    const i = Object(e).styleSheets || [];

	    for (const e of i) if (j(e)) {
	      for (let i = 0, o = e.cssRules; o[i]; ++i) {
	        const l = Object(o[i]);
	        if (1 !== l.type) continue;
	        const s = Object(o[i + 1]);
	        if (4 !== s.type) continue;
	        ++i;
	        const {
	          cssText: a
	        } = l;
	        if (!a.startsWith("--sxs")) continue;
	        const c = a.slice(14, -3).trim().split(/\s+/),
	              d = W[c[0]];
	        d && (t || (t = {
	          sheet: e,
	          reset: n,
	          rules: {},
	          toString: r
	        }), t.rules[d] = {
	          group: s,
	          index: i,
	          cache: new Set(c)
	        });
	      }

	      if (t) break;
	    }

	    if (!t) {
	      const i = (e, t) => ({
	        type: t,
	        cssRules: [],

	        insertRule(e, t) {
	          this.cssRules.splice(t, 0, i(e, {
	            import: 3,
	            undefined: 1
	          }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
	        },

	        get cssText() {
	          return "@media{}" === e ? `@media{${[].map.call(this.cssRules, e => e.cssText).join("")}}` : e;
	        }

	      });

	      t = {
	        sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : i("", "text/css"),
	        rules: {},
	        reset: n,
	        toString: r
	      };
	    }

	    const {
	      sheet: o,
	      rules: l
	    } = t;

	    for (let e = W.length - 1; e >= 0; --e) {
	      const t = W[e];

	      if (!l[t]) {
	        const r = W[e + 1],
	              n = l[r] ? l[r].index : o.cssRules.length;
	        o.insertRule("@media{}", n), o.insertRule(`--sxs{--sxs:${e}}`, n), l[t] = {
	          group: o.cssRules[n + 1],
	          index: n,
	          cache: new Set([e])
	        };
	      }

	      v(l[t]);
	    }
	  };

	  return n(), t;
	},
	    v = e => {
	  const t = e.group;
	  let r = t.cssRules.length;

	  e.apply = e => {
	    try {
	      t.insertRule(e, r), ++r;
	    } catch (e) {}
	  };
	},
	    T = Symbol(),
	    w = o(),
	    M = (e, t) => w(e, () => (...r) => {
	  let n = {
	    type: null,
	    composers: new Set()
	  };

	  for (const t of r) if (null != t) if (t[l]) {
	    null == n.type && (n.type = t[l].type);

	    for (const e of t[l].composers) n.composers.add(e);
	  } else t.constructor !== Object || t.$$typeof ? null == n.type && (n.type = t) : n.composers.add(C(t, e));

	  return null == n.type && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), P(e, n, t);
	}),
	    C = ({
	  variants: e,
	  compoundVariants: t,
	  defaultVariants: r,
	  ...n
	}, i) => {
	  const o = `${S(i.prefix)}c-${z(n)}`,
	        l = [],
	        s = [],
	        d = Object.create(null),
	        g = [];

	  for (const e in r) d[e] = String(r[e]);

	  if ("object" == typeof e && e) for (const t in e) {
	    p = d, u = t, c.call(p, u) || (d[t] = "undefined");
	    const r = e[t];

	    for (const e in r) {
	      const n = {
	        [t]: String(e)
	      };
	      "undefined" === String(e) && g.push(t);
	      const i = r[e],
	            o = [n, i, !a(i)];
	      l.push(o);
	    }
	  }
	  var p, u;
	  if ("object" == typeof t && t) for (const e of t) {
	    let {
	      css: t,
	      ...r
	    } = e;
	    t = "object" == typeof t && t || {};

	    for (const e in r) r[e] = String(r[e]);

	    const n = [r, t, !a(t)];
	    s.push(n);
	  }
	  return [o, n, l, s, d, g];
	},
	    P = (e, t, r) => {
	  const [n, i, o, a] = L(t.composers),
	        c = "function" == typeof t.type || t.type.$$typeof ? (e => {
	    function t() {
	      for (let r = 0; r < t[T].length; r++) {
	        const [n, i] = t[T][r];
	        e.rules[n].apply(i);
	      }

	      return t[T] = [], null;
	    }

	    return t[T] = [], t.rules = {}, W.forEach(e => t.rules[e] = {
	      apply: r => t[T].push([e, r])
	    }), t;
	  })(r) : null,
	        d = (c || r).rules,
	        g = `.${n}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`,
	        p = l => {
	    l = "object" == typeof l && l || A;
	    const {
	      css: s,
	      ...p
	    } = l,
	          u = {};

	    for (const e in o) if (delete p[e], e in l) {
	      let t = l[e];
	      "object" == typeof t && t ? u[e] = {
	        "@initial": o[e],
	        ...t
	      } : (t = String(t), u[e] = "undefined" !== t || a.has(e) ? t : o[e]);
	    } else u[e] = o[e];

	    const h = new Set([...i]);

	    for (const [n, i, o, l] of t.composers) {
	      r.rules.styled.cache.has(n) || (r.rules.styled.cache.add(n), $(i, [`.${n}`], [], e, e => {
	        d.styled.apply(e);
	      }));
	      const t = O(o, u, e.media),
	            s = O(l, u, e.media, !0);

	      for (const i of t) if (void 0 !== i) for (const [t, o, l] of i) {
	        const i = `${n}-${z(o)}-${t}`;
	        h.add(i);
	        const s = (l ? r.rules.resonevar : r.rules.onevar).cache,
	              a = l ? d.resonevar : d.onevar;
	        s.has(i) || (s.add(i), $(o, [`.${i}`], [], e, e => {
	          a.apply(e);
	        }));
	      }

	      for (const t of s) if (void 0 !== t) for (const [i, o] of t) {
	        const t = `${n}-${z(o)}-${i}`;
	        h.add(t), r.rules.allvar.cache.has(t) || (r.rules.allvar.cache.add(t), $(o, [`.${t}`], [], e, e => {
	          d.allvar.apply(e);
	        }));
	      }
	    }

	    if ("object" == typeof s && s) {
	      const t = `${n}-i${z(s)}-css`;
	      h.add(t), r.rules.inline.cache.has(t) || (r.rules.inline.cache.add(t), $(s, [`.${t}`], [], e, e => {
	        d.inline.apply(e);
	      }));
	    }

	    for (const e of String(l.className || "").trim().split(/\s+/)) e && h.add(e);

	    const f = p.className = [...h].join(" ");
	    return {
	      type: t.type,
	      className: f,
	      selector: g,
	      props: p,
	      toString: () => f,
	      deferredInjector: c
	    };
	  };

	  return s(p, {
	    className: n,
	    selector: g,
	    [l]: t,
	    toString: () => (r.rules.styled.cache.has(n) || p(), n)
	  });
	},
	    L = e => {
	  let t = "";
	  const r = [],
	        n = {},
	        i = [];

	  for (const [o,,,, l, s] of e) {
	    "" === t && (t = o), r.push(o), i.push(...s);

	    for (const e in l) {
	      const t = l[e];
	      (void 0 === n[e] || "undefined" !== t || s.includes(t)) && (n[e] = t);
	    }
	  }

	  return [t, r, n, new Set(i)];
	},
	    O = (e, t, r, n) => {
	  const i = [];

	  e: for (let [o, l, s] of e) {
	    if (s) continue;
	    let e,
	        a = 0,
	        c = !1;

	    for (e in o) {
	      const n = o[e];
	      let i = t[e];

	      if (i !== n) {
	        if ("object" != typeof i || !i) continue e;
	        {
	          let e,
	              t,
	              o = 0;

	          for (const l in i) {
	            if (n === String(i[l])) {
	              if ("@initial" !== l) {
	                const e = l.slice(1);
	                (t = t || []).push(e in r ? r[e] : l.replace(/^@media ?/, "")), c = !0;
	              }

	              a += o, e = !0;
	            }

	            ++o;
	          }

	          if (t && t.length && (l = {
	            ["@media " + t.join(", ")]: l
	          }), !e) continue e;
	        }
	      }
	    }

	    (i[a] = i[a] || []).push([n ? "cv" : `${e}-${o[e]}`, l, c]);
	  }

	  return i;
	},
	    A = {},
	    N = o(),
	    D = (e, t) => N(e, () => (...r) => {
	  const n = () => {
	    for (let n of r) {
	      n = "object" == typeof n && n || {};
	      let r = z(n);

	      if (!t.rules.global.cache.has(r)) {
	        if (t.rules.global.cache.add(r), "@import" in n) {
	          let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;

	          for (let r of [].concat(n["@import"])) r = r.includes('"') || r.includes("'") ? r : `"${r}"`, t.sheet.insertRule(`@import ${r};`, e++);

	          delete n["@import"];
	        }

	        $(n, [], [], e, e => {
	          t.rules.global.apply(e);
	        });
	      }
	    }

	    return "";
	  };

	  return s(n, {
	    toString: n
	  });
	}),
	    H = o(),
	    V = (e, t) => H(e, () => r => {
	  const n = `${S(e.prefix)}k-${z(r)}`,
	        i = () => {
	    if (!t.rules.global.cache.has(n)) {
	      t.rules.global.cache.add(n);
	      const i = [];
	      $(r, [], [], e, e => i.push(e));
	      const o = `@keyframes ${n}{${i.join("")}}`;
	      t.rules.global.apply(o);
	    }

	    return n;
	  };

	  return s(i, {
	    get name() {
	      return i();
	    },

	    toString: i
	  });
	}),
	    G = class {
	  constructor(e, t, r, n) {
	    this.token = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == r ? "" : String(r), this.prefix = null == n ? "" : String(n);
	  }

	  get computedValue() {
	    return "var(" + this.variable + ")";
	  }

	  get variable() {
	    return "--" + S(this.prefix) + S(this.scale) + this.token;
	  }

	  toString() {
	    return this.computedValue;
	  }

	},
	    F = o(),
	    J = (e, t) => F(e, () => (r, n) => {
	  n = "object" == typeof r && r || Object(n);
	  const i = `.${r = (r = "string" == typeof r ? r : "") || `${S(e.prefix)}t-${z(n)}`}`,
	        o = {},
	        l = [];

	  for (const t in n) {
	    o[t] = {};

	    for (const r in n[t]) {
	      const i = `--${S(e.prefix)}${t}-${r}`,
	            s = k(String(n[t][r]), e.prefix, t);
	      o[t][r] = new G(r, s, t, e.prefix), l.push(`${i}:${s}`);
	    }
	  }

	  const s = () => {
	    if (l.length && !t.rules.themed.cache.has(r)) {
	      t.rules.themed.cache.add(r);
	      const i = `${n === e.theme ? ":root," : ""}.${r}{${l.join(";")}}`;
	      t.rules.themed.apply(i);
	    }

	    return r;
	  };

	  return { ...o,

	    get className() {
	      return s();
	    },

	    selector: i,
	    toString: s
	  };
	}),
	    U = o();

	var Y = o(),
	    q = e => {
	  const t = (e => {
	    let t = !1;
	    const r = U(e, e => {
	      t = !0;
	      const r = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : "",
	            i = "object" == typeof e.media && e.media || {},
	            o = "object" == typeof e.root ? e.root || null : globalThis.document || null,
	            l = "object" == typeof e.theme && e.theme || {},
	            s = {
	        prefix: r,
	        media: i,
	        theme: l,
	        themeMap: "object" == typeof e.themeMap && e.themeMap || { ...n
	        },
	        utils: "object" == typeof e.utils && e.utils || {}
	      },
	            a = E(o),
	            c = {
	        css: M(s, a),
	        globalCss: D(s, a),
	        keyframes: V(s, a),
	        createTheme: J(s, a),

	        reset() {
	          a.reset(), c.theme.toString();
	        },

	        theme: {},
	        sheet: a,
	        config: s,
	        prefix: r,
	        getCssText: a.toString,
	        toString: a.toString
	      };
	      return String(c.theme = c.createTheme(l)), c;
	    });
	    return t || r.reset(), r;
	  })(e);

	  return t.styled = (({
	    config: e,
	    sheet: t
	  }) => Y(e, () => {
	    const r = M(e, t);
	    return (...e) => {
	      const t = r(...e),
	            n = t[l].type,
	            i = /*#__PURE__*/Z.forwardRef((e, r) => {
	        const i = e && e.as || n,
	              {
	          props: o,
	          deferredInjector: l
	        } = t(e);
	        return delete o.as, o.ref = r, l ? /*#__PURE__*/Z.createElement(Z.Fragment, null, /*#__PURE__*/Z.createElement(i, o), /*#__PURE__*/Z.createElement(l, null)) : /*#__PURE__*/Z.createElement(i, o);
	      });
	      return i.className = t.className, i.displayName = `Styled.${n.displayName || n.name || n}`, i.selector = t.selector, i.toString = () => t.selector, i[l] = t[l], i;
	    };
	  }))(t), t;
	};
	 //# sourceMappingUrl=index.map

	/**
	 * Do not edit directly
	 * Generated on Mon, 20 Jun 2022 14:22:40 GMT
	 */
	const overline = {
	  "fontFamily": "Roboto",
	  "fontWeight": "Regular",
	  "lineHeight": 28,
	  "fontSize": 20,
	  "letterSpacing": 4.3,
	  "paragraphSpacing": 0,
	  "textCase": "uppercase",
	  "textDecoration": "none"
	};
	const displayLarge = {
	  "fontFamily": "Roboto",
	  "fontWeight": "Bold",
	  "lineHeight": 90,
	  "fontSize": 64,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const displaySmall = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 44,
	  "fontSize": 32,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const displayMedium = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 66,
	  "fontSize": 48,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const headlineLarge = {
	  "fontFamily": "Roboto",
	  "fontWeight": "Bold",
	  "lineHeight": 44,
	  "fontSize": 32,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const headlineSmall = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 32,
	  "fontSize": 24,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const headlineMedium = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 36,
	  "fontSize": 28,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const bodyLarge = {
	  "fontFamily": "Roboto",
	  "fontWeight": "Regular",
	  "lineHeight": 24,
	  "fontSize": 16,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const bodyMedium = {
	  "fontFamily": "Roboto",
	  "fontWeight": "Regular",
	  "lineHeight": 24,
	  "fontSize": 16,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const bodySmall = {
	  "fontFamily": "Roboto",
	  "fontWeight": "Regular",
	  "lineHeight": 16,
	  "fontSize": 12,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const labelLarge = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 20,
	  "fontSize": 14,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const labelMedium = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 16,
	  "fontSize": 12,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const labelSmall = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 16,
	  "fontSize": 11,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const titleLarge = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 28,
	  "fontSize": 20,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const titleMedium = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 24,
	  "fontSize": 16,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const titleSmall = {
	  "fontFamily": "Roboto",
	  "fontWeight": "SemiBold",
	  "lineHeight": 20,
	  "fontSize": 14,
	  "letterSpacing": 0,
	  "paragraphSpacing": 0,
	  "textCase": "none",
	  "textDecoration": "none"
	};
	const fontFamiliesDefault = "Roboto";
	const buttonButtonFilledDefaultBgColor = "#6750a4";

	const PLACEHODER_FIXME = '#000000';
	const {
	  styled: styled$4
	} = q({
	  theme: {
	    space: {
	      xxs: '0.25rem',
	      xs: '0.5rem',
	      s: '1rem',
	      m: '1.5rem',
	      l: '2rem',
	      xl: '2.5rem',
	      xxl: '3rem',
	      xxxl: '4rem'
	    },
	    fonts: {
	      default: fontFamiliesDefault
	    },
	    colors: {
	      primary: buttonButtonFilledDefaultBgColor,
	      'primary-hover': PLACEHODER_FIXME,
	      'primary-active': PLACEHODER_FIXME,
	      'primary-border': PLACEHODER_FIXME,
	      'primary-border-hover': PLACEHODER_FIXME,
	      'primary-border-active': PLACEHODER_FIXME,
	      'primary-text': PLACEHODER_FIXME,
	      'primary-text-hover': PLACEHODER_FIXME,
	      'primary-text-active': PLACEHODER_FIXME,
	      'primary-border-radius': 0,
	      secondary: PLACEHODER_FIXME,
	      'secondary-hover': PLACEHODER_FIXME,
	      'secondary-active': PLACEHODER_FIXME,
	      'secondary-border': PLACEHODER_FIXME,
	      'secondary-border-hover': PLACEHODER_FIXME,
	      'secondary-border-active': PLACEHODER_FIXME,
	      'secondary-text': PLACEHODER_FIXME,
	      'secondary-text-hover': PLACEHODER_FIXME,
	      'secondary-text-active': PLACEHODER_FIXME,
	      'secondary-border-radius': 0
	    }
	  }
	});

	const StyledButton = styled$4('button', {
	  backgroundColor: 'transparent',
	  fontFamily: '$default',
	  padding: '$xs $m',
	  border: 'none',
	  variants: {
	    variant: {
	      primary: {
	        backgroundColor: '$primary',
	        color: '$primary-text',
	        borderRadius: '$primary-border-radius',
	        '&:hover': {
	          backgroundColor: '$primary-hover',
	          color: '$primary-text-hover'
	        },
	        '&:active': {
	          backgroundColor: '$primary-active',
	          color: '$primary-text-hover'
	        }
	      },
	      secondary: {
	        backgroundColor: '$secondary',
	        color: '$secondary-text',
	        borderRadius: '$secondary-border-radius',
	        '&:hover': {
	          backgroundColor: '$secondary-hover',
	          color: '$secondary-text-hover'
	        },
	        '&:active': {
	          backgroundColor: '$secondary-active',
	          color: '$secondary-text-active'
	        }
	      }
	    },
	    outlined: {
	      true: {
	        $$shadowColor: 'transparent',
	        backgroundColor: 'transparent',
	        boxShadow: '0 0 0 1px $$shadowColor'
	      }
	    }
	  },
	  defaultVariants: {
	    variant: 'primary'
	  },
	  // TODO: discuss if outline and variants could be separated in DS
	  compoundVariants: [{
	    variant: 'primary',
	    outlined: true,
	    css: {
	      backgroundColor: 'transparent',
	      $$shadowColor: 'black',
	      color: 'black'
	    }
	  }]
	});
	const Button = ({
	  variant,
	  label,
	  disabled,
	  outlined,
	  onClick
	}) => {
	  return /*#__PURE__*/React.createElement(StyledButton, {
	    type: "button",
	    variant: variant,
	    disabled: disabled,
	    onClick: onClick,
	    outlined: outlined
	  }, label);
	};
	Button.propTypes = {
	  variant: propTypes.exports.oneOf(['primary', 'secondary']),
	  disabled: propTypes.exports.bool,
	  outlined: propTypes.exports.bool,
	  label: propTypes.exports.string.isRequired,
	  onClick: propTypes.exports.func
	};
	Button.defaultProps = {
	  variant: 'primary',
	  disabled: false,
	  outlined: false,
	  onClick: undefined
	};

	var Button$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Button: Button
	});

	const createCompoundVariant = (variant, size, tokens) => {
	  const {
	    fontFamily,
	    fontSize,
	    fontWeight,
	    lineHeight,
	    letterSpacing,
	    paragraphSpacing,
	    textCase,
	    textDecoration
	  } = tokens;
	  return {
	    variant,
	    size,
	    css: {
	      fontFamily: fontFamily,
	      fontSize: `${fontSize}px`,
	      fontWeight: fontWeight,
	      lineHeight: `${lineHeight}px`,
	      letterSpacing: `${letterSpacing}px`,
	      marginBottom: `${paragraphSpacing}px`,
	      textTransform: textCase,
	      textDecoration: textDecoration
	    }
	  };
	};

	const {
	  styled: styled$3
	} = q({
	  theme: {
	    space: {
	      xxs: '0.25rem',
	      xs: '0.5rem',
	      s: '1rem',
	      m: '1.5rem',
	      l: '2rem',
	      xl: '2.5rem',
	      xxl: '3rem',
	      xxxl: '4rem'
	    }
	  }
	});
	const variants = {
	  variant: {
	    display: {},
	    headline: {},
	    title: {},
	    label: {},
	    body: {},
	    overline: {}
	  },
	  component: {
	    h1: {},
	    h2: {},
	    h3: {},
	    h4: {},
	    h5: {},
	    h6: {},
	    p: {},
	    span: {},
	    div: {},
	    label: {}
	  },
	  size: {
	    small: {},
	    medium: {},
	    large: {}
	  }
	};
	const compoundVariants = [createCompoundVariant('display', 'large', displayLarge), createCompoundVariant('display', 'medium', displayMedium), createCompoundVariant('display', 'small', displaySmall), createCompoundVariant('headline', 'large', headlineLarge), createCompoundVariant('headline', 'medium', headlineMedium), createCompoundVariant('headline', 'small', headlineSmall), createCompoundVariant('title', 'large', titleLarge), createCompoundVariant('title', 'medium', titleMedium), createCompoundVariant('title', 'small', titleSmall), createCompoundVariant('label', 'large', labelLarge), createCompoundVariant('label', 'medium', labelMedium), createCompoundVariant('label', 'small', labelSmall), createCompoundVariant('body', 'large', bodyLarge), createCompoundVariant('body', 'medium', bodyMedium), createCompoundVariant('body', 'small', bodySmall), // createCompoundVariant("body-italic", "large", bodyLargeItalic),
	// createCompoundVariant("body-light", "large", bodyLargeLight),
	// createCompoundVariant("body-light-italic", "large", bodyLargeLightItalic),
	createCompoundVariant('overline', 'medium', overline)];

	const Box$2 = styled$3("div", {
	  variants,
	  compoundVariants
	});
	const Typography = ({
	  variant,
	  component,
	  size,
	  text
	}) => {
	  return /*#__PURE__*/React.createElement(Box$2, {
	    as: component,
	    component: component,
	    variant: variant,
	    size: size
	  }, text);
	};
	Typography.propTypes = {
	  text: propTypes.exports.string.isRequired,
	  variant: propTypes.exports.oneOf(["display", "headline", "title", "label", "body", "body-light", "body-light-italic", "body-italic", "overline"]),
	  component: propTypes.exports.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div", "label"]),
	  size: propTypes.exports.oneOf(["large", "medium", "small"])
	};
	Typography.defaultProps = {
	  text: "",
	  variant: "body",
	  component: "p",
	  size: "medium"
	};

	var Typography$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Typography: Typography
	});

	const {
	  styled: styled$2
	} = q({});

	const Box$1 = styled$2("div");
	const StyledCheckbox = styled$2("input", {
	  display: "inline-block",
	  cursor: "pointer",
	  width: "18px",
	  // TODO: use token
	  height: "18px"
	});
	const Checkbox = ({
	  label,
	  checked,
	  onChange
	}) => {
	  const [state, setState] = react$1.exports.useState(checked);

	  const handleChange = () => {
	    onChange();
	    setState(!state);
	  };

	  return /*#__PURE__*/React.createElement(Box$1, {
	    css: {
	      display: "flex",
	      gap: "4px",
	      // TODO: use token
	      alignItems: "center",
	      cursor: "pointer"
	    },
	    onClick: handleChange
	  }, /*#__PURE__*/React.createElement(StyledCheckbox, {
	    type: "checkbox",
	    checked: state,
	    onChange: handleChange
	  }), /*#__PURE__*/React.createElement(Typography, {
	    variant: "label",
	    text: label,
	    component: "span"
	  }));
	};
	Checkbox.propTypes = {
	  label: propTypes.exports.string,
	  checked: propTypes.exports.bool,
	  onChange: propTypes.exports.func
	};
	Checkbox.defaultProps = {
	  label: "",
	  checked: false
	};

	var Checkbox$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Checkbox: Checkbox
	});

	const {
	  styled: styled$1
	} = q({});

	const StyledChip = styled$1("div", {});
	const Chip = ({
	  label
	}) => {
	  return /*#__PURE__*/React.createElement(StyledChip, null, label);
	};
	Chip.propTypes = {
	  label: propTypes.exports.string
	};

	var Chip$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Chip: Chip
	});

	var index$3 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Button: Button$1,
		Checkbox: Checkbox$1,
		Chip: Chip$1,
		Typography: Typography$1
	});

	const {
	  styled
	} = q({});

	const Box = styled("div", {});
	const Card = () => {
	  return /*#__PURE__*/React.createElement(Box, null, "card");
	};
	Card.propTypes = {};

	var Card$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Card: Card
	});

	var index$2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Card: Card$1
	});

	var index$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Atoms: index$3,
		Molecules: index$2,
		Organisms: index$1
	});

	exports.Components = index;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
//# sourceMappingURL=bundle.js.map
