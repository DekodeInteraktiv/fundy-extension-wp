function hk(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var o0 = { exports: {} }, Cv = {}, l0 = { exports: {} }, zt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function mk() {
  if (o1)
    return zt;
  o1 = 1;
  var c = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), k = Symbol.iterator;
  function M(N) {
    return N === null || typeof N != "object" ? null : (N = k && N[k] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, $ = {};
  function I(N, ue, Re) {
    this.props = N, this.context = ue, this.refs = $, this.updater = Re || A;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(N, ue) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, ue, "setState");
  }, I.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = I.prototype;
  function le(N, ue, Re) {
    this.props = N, this.context = ue, this.refs = $, this.updater = Re || A;
  }
  var te = le.prototype = new oe();
  te.constructor = le, B(te, I.prototype), te.isPureReactComponent = !0;
  var J = Array.isArray, H = Object.prototype.hasOwnProperty, de = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ye(N, ue, Re) {
    var at, qe = {}, Rt = null, dt = null;
    if (ue != null)
      for (at in ue.ref !== void 0 && (dt = ue.ref), ue.key !== void 0 && (Rt = "" + ue.key), ue)
        H.call(ue, at) && !ge.hasOwnProperty(at) && (qe[at] = ue[at]);
    var Ct = arguments.length - 2;
    if (Ct === 1)
      qe.children = Re;
    else if (1 < Ct) {
      for (var pt = Array(Ct), Ut = 0; Ut < Ct; Ut++)
        pt[Ut] = arguments[Ut + 2];
      qe.children = pt;
    }
    if (N && N.defaultProps)
      for (at in Ct = N.defaultProps, Ct)
        qe[at] === void 0 && (qe[at] = Ct[at]);
    return { $$typeof: c, type: N, key: Rt, ref: dt, props: qe, _owner: de.current };
  }
  function tt(N, ue) {
    return { $$typeof: c, type: N.type, key: ue, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function Ze(N) {
    return typeof N == "object" && N !== null && N.$$typeof === c;
  }
  function Ue(N) {
    var ue = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(Re) {
      return ue[Re];
    });
  }
  var st = /\/+/g;
  function Ae(N, ue) {
    return typeof N == "object" && N !== null && N.key != null ? Ue("" + N.key) : ue.toString(36);
  }
  function $e(N, ue, Re, at, qe) {
    var Rt = typeof N;
    (Rt === "undefined" || Rt === "boolean") && (N = null);
    var dt = !1;
    if (N === null)
      dt = !0;
    else
      switch (Rt) {
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case c:
            case p:
              dt = !0;
          }
      }
    if (dt)
      return dt = N, qe = qe(dt), N = at === "" ? "." + Ae(dt, 0) : at, J(qe) ? (Re = "", N != null && (Re = N.replace(st, "$&/") + "/"), $e(qe, ue, Re, "", function(Ut) {
        return Ut;
      })) : qe != null && (Ze(qe) && (qe = tt(qe, Re + (!qe.key || dt && dt.key === qe.key ? "" : ("" + qe.key).replace(st, "$&/") + "/") + N)), ue.push(qe)), 1;
    if (dt = 0, at = at === "" ? "." : at + ":", J(N))
      for (var Ct = 0; Ct < N.length; Ct++) {
        Rt = N[Ct];
        var pt = at + Ae(Rt, Ct);
        dt += $e(Rt, ue, Re, pt, qe);
      }
    else if (pt = M(N), typeof pt == "function")
      for (N = pt.call(N), Ct = 0; !(Rt = N.next()).done; )
        Rt = Rt.value, pt = at + Ae(Rt, Ct++), dt += $e(Rt, ue, Re, pt, qe);
    else if (Rt === "object")
      throw ue = String(N), Error("Objects are not valid as a React child (found: " + (ue === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : ue) + "). If you meant to render a collection of children, use an array instead.");
    return dt;
  }
  function Dt(N, ue, Re) {
    if (N == null)
      return N;
    var at = [], qe = 0;
    return $e(N, at, "", "", function(Rt) {
      return ue.call(Re, Rt, qe++);
    }), at;
  }
  function Et(N) {
    if (N._status === -1) {
      var ue = N._result;
      ue = ue(), ue.then(function(Re) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = Re);
      }, function(Re) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = Re);
      }), N._status === -1 && (N._status = 0, N._result = ue);
    }
    if (N._status === 1)
      return N._result.default;
    throw N._result;
  }
  var _e = { current: null }, he = { transition: null }, Ve = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: he, ReactCurrentOwner: de };
  return zt.Children = { map: Dt, forEach: function(N, ue, Re) {
    Dt(N, function() {
      ue.apply(this, arguments);
    }, Re);
  }, count: function(N) {
    var ue = 0;
    return Dt(N, function() {
      ue++;
    }), ue;
  }, toArray: function(N) {
    return Dt(N, function(ue) {
      return ue;
    }) || [];
  }, only: function(N) {
    if (!Ze(N))
      throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, zt.Component = I, zt.Fragment = v, zt.Profiler = R, zt.PureComponent = le, zt.StrictMode = E, zt.Suspense = L, zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, zt.cloneElement = function(N, ue, Re) {
    if (N == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var at = B({}, N.props), qe = N.key, Rt = N.ref, dt = N._owner;
    if (ue != null) {
      if (ue.ref !== void 0 && (Rt = ue.ref, dt = de.current), ue.key !== void 0 && (qe = "" + ue.key), N.type && N.type.defaultProps)
        var Ct = N.type.defaultProps;
      for (pt in ue)
        H.call(ue, pt) && !ge.hasOwnProperty(pt) && (at[pt] = ue[pt] === void 0 && Ct !== void 0 ? Ct[pt] : ue[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1)
      at.children = Re;
    else if (1 < pt) {
      Ct = Array(pt);
      for (var Ut = 0; Ut < pt; Ut++)
        Ct[Ut] = arguments[Ut + 2];
      at.children = Ct;
    }
    return { $$typeof: c, type: N.type, key: qe, ref: Rt, props: at, _owner: dt };
  }, zt.createContext = function(N) {
    return N = { $$typeof: g, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: w, _context: N }, N.Consumer = N;
  }, zt.createElement = Ye, zt.createFactory = function(N) {
    var ue = Ye.bind(null, N);
    return ue.type = N, ue;
  }, zt.createRef = function() {
    return { current: null };
  }, zt.forwardRef = function(N) {
    return { $$typeof: V, render: N };
  }, zt.isValidElement = Ze, zt.lazy = function(N) {
    return { $$typeof: U, _payload: { _status: -1, _result: N }, _init: Et };
  }, zt.memo = function(N, ue) {
    return { $$typeof: _, type: N, compare: ue === void 0 ? null : ue };
  }, zt.startTransition = function(N) {
    var ue = he.transition;
    he.transition = {};
    try {
      N();
    } finally {
      he.transition = ue;
    }
  }, zt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, zt.useCallback = function(N, ue) {
    return _e.current.useCallback(N, ue);
  }, zt.useContext = function(N) {
    return _e.current.useContext(N);
  }, zt.useDebugValue = function() {
  }, zt.useDeferredValue = function(N) {
    return _e.current.useDeferredValue(N);
  }, zt.useEffect = function(N, ue) {
    return _e.current.useEffect(N, ue);
  }, zt.useId = function() {
    return _e.current.useId();
  }, zt.useImperativeHandle = function(N, ue, Re) {
    return _e.current.useImperativeHandle(N, ue, Re);
  }, zt.useInsertionEffect = function(N, ue) {
    return _e.current.useInsertionEffect(N, ue);
  }, zt.useLayoutEffect = function(N, ue) {
    return _e.current.useLayoutEffect(N, ue);
  }, zt.useMemo = function(N, ue) {
    return _e.current.useMemo(N, ue);
  }, zt.useReducer = function(N, ue, Re) {
    return _e.current.useReducer(N, ue, Re);
  }, zt.useRef = function(N) {
    return _e.current.useRef(N);
  }, zt.useState = function(N) {
    return _e.current.useState(N);
  }, zt.useSyncExternalStore = function(N, ue, Re) {
    return _e.current.useSyncExternalStore(N, ue, Re);
  }, zt.useTransition = function() {
    return _e.current.useTransition();
  }, zt.version = "18.2.0", zt;
}
var Tv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Tv.exports;
var l1;
function yk() {
  return l1 || (l1 = 1, function(c, p) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.2.0", E = Symbol.for("react.element"), R = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), _ = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), I = Symbol.iterator, oe = "@@iterator";
      function le(S) {
        if (S === null || typeof S != "object")
          return null;
        var O = I && S[I] || S[oe];
        return typeof O == "function" ? O : null;
      }
      var te = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, J = {
        transition: null
      }, H = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, de = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, Ye = null;
      function tt(S) {
        Ye = S;
      }
      ge.setExtraStackFrame = function(S) {
        Ye = S;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var S = "";
        Ye && (S += Ye);
        var O = ge.getCurrentStack;
        return O && (S += O() || ""), S;
      };
      var Ze = !1, Ue = !1, st = !1, Ae = !1, $e = !1, Dt = {
        ReactCurrentDispatcher: te,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: de
      };
      Dt.ReactDebugCurrentFrame = ge, Dt.ReactCurrentActQueue = H;
      function Et(S) {
        {
          for (var O = arguments.length, K = new Array(O > 1 ? O - 1 : 0), ee = 1; ee < O; ee++)
            K[ee - 1] = arguments[ee];
          he("warn", S, K);
        }
      }
      function _e(S) {
        {
          for (var O = arguments.length, K = new Array(O > 1 ? O - 1 : 0), ee = 1; ee < O; ee++)
            K[ee - 1] = arguments[ee];
          he("error", S, K);
        }
      }
      function he(S, O, K) {
        {
          var ee = Dt.ReactDebugCurrentFrame, me = ee.getStackAddendum();
          me !== "" && (O += "%s", K = K.concat([me]));
          var nt = K.map(function(Te) {
            return String(Te);
          });
          nt.unshift("Warning: " + O), Function.prototype.apply.call(console[S], console, nt);
        }
      }
      var Ve = {};
      function N(S, O) {
        {
          var K = S.constructor, ee = K && (K.displayName || K.name) || "ReactClass", me = ee + "." + O;
          if (Ve[me])
            return;
          _e("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, ee), Ve[me] = !0;
        }
      }
      var ue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
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
        enqueueForceUpdate: function(S, O, K) {
          N(S, "forceUpdate");
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
        enqueueReplaceState: function(S, O, K, ee) {
          N(S, "replaceState");
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
        enqueueSetState: function(S, O, K, ee) {
          N(S, "setState");
        }
      }, Re = Object.assign, at = {};
      Object.freeze(at);
      function qe(S, O, K) {
        this.props = S, this.context = O, this.refs = at, this.updater = K || ue;
      }
      qe.prototype.isReactComponent = {}, qe.prototype.setState = function(S, O) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, O, "setState");
      }, qe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Rt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(S, O) {
          Object.defineProperty(qe.prototype, S, {
            get: function() {
              Et("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var Ct in Rt)
          Rt.hasOwnProperty(Ct) && dt(Ct, Rt[Ct]);
      }
      function pt() {
      }
      pt.prototype = qe.prototype;
      function Ut(S, O, K) {
        this.props = S, this.context = O, this.refs = at, this.updater = K || ue;
      }
      var tr = Ut.prototype = new pt();
      tr.constructor = Ut, Re(tr, qe.prototype), tr.isPureReactComponent = !0;
      function Bn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Oe = Array.isArray;
      function Zt(S) {
        return Oe(S);
      }
      function we(S) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, K = O && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return K;
        }
      }
      function pn(S) {
        try {
          return bn(S), !1;
        } catch {
          return !0;
        }
      }
      function bn(S) {
        return "" + S;
      }
      function Rn(S) {
        if (pn(S))
          return _e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", we(S)), bn(S);
      }
      function Xr(S, O, K) {
        var ee = S.displayName;
        if (ee)
          return ee;
        var me = O.displayName || O.name || "";
        return me !== "" ? K + "(" + me + ")" : K;
      }
      function Zr(S) {
        return S.displayName || "Context";
      }
      function nr(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && _e("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case w:
            return "Fragment";
          case R:
            return "Portal";
          case V:
            return "Profiler";
          case g:
            return "StrictMode";
          case k:
            return "Suspense";
          case M:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case _:
              var O = S;
              return Zr(O) + ".Consumer";
            case L:
              var K = S;
              return Zr(K._context) + ".Provider";
            case U:
              return Xr(S, S.render, "ForwardRef");
            case A:
              var ee = S.displayName || null;
              return ee !== null ? ee : nr(S.type) || "Memo";
            case B: {
              var me = S, nt = me._payload, Te = me._init;
              try {
                return nr(Te(nt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tr = Object.prototype.hasOwnProperty, Jr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wr, Sa, fr;
      fr = {};
      function ea(S) {
        if (Tr.call(S, "ref")) {
          var O = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function _n(S) {
        if (Tr.call(S, "key")) {
          var O = Object.getOwnPropertyDescriptor(S, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function zr(S, O) {
        var K = function() {
          wr || (wr = !0, _e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: K,
          configurable: !0
        });
      }
      function yi(S, O) {
        var K = function() {
          Sa || (Sa = !0, _e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: K,
          configurable: !0
        });
      }
      function Ea(S) {
        if (typeof S.ref == "string" && de.current && S.__self && de.current.stateNode !== S.__self) {
          var O = nr(de.current.type);
          fr[O] || (_e('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, S.ref), fr[O] = !0);
        }
      }
      var Se = function(S, O, K, ee, me, nt, Te) {
        var Je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: O,
          ref: K,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: nt
        };
        return Je._store = {}, Object.defineProperty(Je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.defineProperty(Je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: me
        }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
      };
      function We(S, O, K) {
        var ee, me = {}, nt = null, Te = null, Je = null, wt = null;
        if (O != null) {
          ea(O) && (Te = O.ref, Ea(O)), _n(O) && (Rn(O.key), nt = "" + O.key), Je = O.__self === void 0 ? null : O.__self, wt = O.__source === void 0 ? null : O.__source;
          for (ee in O)
            Tr.call(O, ee) && !Jr.hasOwnProperty(ee) && (me[ee] = O[ee]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          me.children = K;
        else if (Ft > 1) {
          for (var ln = Array(Ft), en = 0; en < Ft; en++)
            ln[en] = arguments[en + 2];
          Object.freeze && Object.freeze(ln), me.children = ln;
        }
        if (S && S.defaultProps) {
          var sn = S.defaultProps;
          for (ee in sn)
            me[ee] === void 0 && (me[ee] = sn[ee]);
        }
        if (nt || Te) {
          var mn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          nt && zr(me, mn), Te && yi(me, mn);
        }
        return Se(S, nt, Te, Je, wt, de.current, me);
      }
      function bt(S, O) {
        var K = Se(S.type, O, S.ref, S._self, S._source, S._owner, S.props);
        return K;
      }
      function $t(S, O, K) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var ee, me = Re({}, S.props), nt = S.key, Te = S.ref, Je = S._self, wt = S._source, Ft = S._owner;
        if (O != null) {
          ea(O) && (Te = O.ref, Ft = de.current), _n(O) && (Rn(O.key), nt = "" + O.key);
          var ln;
          S.type && S.type.defaultProps && (ln = S.type.defaultProps);
          for (ee in O)
            Tr.call(O, ee) && !Jr.hasOwnProperty(ee) && (O[ee] === void 0 && ln !== void 0 ? me[ee] = ln[ee] : me[ee] = O[ee]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          me.children = K;
        else if (en > 1) {
          for (var sn = Array(en), mn = 0; mn < en; mn++)
            sn[mn] = arguments[mn + 2];
          me.children = sn;
        }
        return Se(S.type, nt, Te, Je, wt, Ft, me);
      }
      function Wt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var Fn = ".", xn = ":";
      function _r(S) {
        var O = /[=:]/g, K = {
          "=": "=0",
          ":": "=2"
        }, ee = S.replace(O, function(me) {
          return K[me];
        });
        return "$" + ee;
      }
      var Jt = !1, Ur = /\/+/g;
      function Qt(S) {
        return S.replace(Ur, "$&/");
      }
      function Gt(S, O) {
        return typeof S == "object" && S !== null && S.key != null ? (Rn(S.key), _r("" + S.key)) : O.toString(36);
      }
      function ri(S, O, K, ee, me) {
        var nt = typeof S;
        (nt === "undefined" || nt === "boolean") && (S = null);
        var Te = !1;
        if (S === null)
          Te = !0;
        else
          switch (nt) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case E:
                case R:
                  Te = !0;
              }
          }
        if (Te) {
          var Je = S, wt = me(Je), Ft = ee === "" ? Fn + Gt(Je, 0) : ee;
          if (Zt(wt)) {
            var ln = "";
            Ft != null && (ln = Qt(Ft) + "/"), ri(wt, O, ln, "", function(hd) {
              return hd;
            });
          } else
            wt != null && (Wt(wt) && (wt.key && (!Je || Je.key !== wt.key) && Rn(wt.key), wt = bt(
              wt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              K + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (wt.key && (!Je || Je.key !== wt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Qt("" + wt.key) + "/"
              ) : "") + Ft
            )), O.push(wt));
          return 1;
        }
        var en, sn, mn = 0, kt = ee === "" ? Fn : ee + xn;
        if (Zt(S))
          for (var Ii = 0; Ii < S.length; Ii++)
            en = S[Ii], sn = kt + Gt(en, Ii), mn += ri(en, O, K, sn, me);
        else {
          var fl = le(S);
          if (typeof fl == "function") {
            var ys = S;
            fl === ys.entries && (Jt || Et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var vd = fl.call(ys), oi, gs = 0; !(oi = vd.next()).done; )
              en = oi.value, sn = kt + Gt(en, gs++), mn += ri(en, O, K, sn, me);
          } else if (nt === "object") {
            var Ss = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Ss === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return mn;
      }
      function za(S, O, K) {
        if (S == null)
          return S;
        var ee = [], me = 0;
        return ri(S, ee, "", "", function(nt) {
          return O.call(K, nt, me++);
        }), ee;
      }
      function hu(S) {
        var O = 0;
        return za(S, function() {
          O++;
        }), O;
      }
      function oo(S, O, K) {
        za(S, function() {
          O.apply(this, arguments);
        }, K);
      }
      function Jo(S) {
        return za(S, function(O) {
          return O;
        }) || [];
      }
      function Fi(S) {
        if (!Wt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function mu(S) {
        var O = {
          $$typeof: _,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
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
        O.Provider = {
          $$typeof: L,
          _context: O
        };
        var K = !1, ee = !1, me = !1;
        {
          var nt = {
            $$typeof: _,
            _context: O
          };
          Object.defineProperties(nt, {
            Provider: {
              get: function() {
                return ee || (ee = !0, _e("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
              },
              set: function(Te) {
                O.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return O._currentValue;
              },
              set: function(Te) {
                O._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return O._currentValue2;
              },
              set: function(Te) {
                O._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return O._threadCount;
              },
              set: function(Te) {
                O._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return K || (K = !0, _e("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Te) {
                me || (Et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), me = !0);
              }
            }
          }), O.Consumer = nt;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var Ca = -1, gi = 0, ba = 1, Si = 2;
      function jr(S) {
        if (S._status === Ca) {
          var O = S._result, K = O();
          if (K.then(function(nt) {
            if (S._status === gi || S._status === Ca) {
              var Te = S;
              Te._status = ba, Te._result = nt;
            }
          }, function(nt) {
            if (S._status === gi || S._status === Ca) {
              var Te = S;
              Te._status = Si, Te._result = nt;
            }
          }), S._status === Ca) {
            var ee = S;
            ee._status = gi, ee._result = K;
          }
        }
        if (S._status === ba) {
          var me = S._result;
          return me === void 0 && _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, me), "default" in me || _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, me), me.default;
        } else
          throw S._result;
      }
      function Ra(S) {
        var O = {
          // We use these fields to store the result.
          _status: Ca,
          _result: S
        }, K = {
          $$typeof: B,
          _payload: O,
          _init: jr
        };
        {
          var ee, me;
          Object.defineProperties(K, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(nt) {
                _e("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = nt, Object.defineProperty(K, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return me;
              },
              set: function(nt) {
                _e("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), me = nt, Object.defineProperty(K, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return K;
      }
      function Ei(S) {
        S != null && S.$$typeof === A ? _e("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? _e("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && _e("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && _e("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: U,
          render: S
        };
        {
          var K;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(ee) {
              K = ee, !S.name && !S.displayName && (S.displayName = ee);
            }
          });
        }
        return O;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function se(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === w || S === V || $e || S === g || S === k || S === M || Ae || S === $ || Ze || Ue || st || typeof S == "object" && S !== null && (S.$$typeof === B || S.$$typeof === A || S.$$typeof === L || S.$$typeof === _ || S.$$typeof === U || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === D || S.getModuleId !== void 0));
      }
      function Ee(S, O) {
        se(S) || _e("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var K = {
          $$typeof: A,
          type: S,
          compare: O === void 0 ? null : O
        };
        {
          var ee;
          Object.defineProperty(K, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(me) {
              ee = me, !S.name && !S.displayName && (S.displayName = me);
            }
          });
        }
        return K;
      }
      function Ne() {
        var S = te.current;
        return S === null && _e(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function mt(S) {
        var O = Ne();
        if (S._context !== void 0) {
          var K = S._context;
          K.Consumer === S ? _e("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : K.Provider === S && _e("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(S);
      }
      function Nt(S) {
        var O = Ne();
        return O.useState(S);
      }
      function yt(S, O, K) {
        var ee = Ne();
        return ee.useReducer(S, O, K);
      }
      function Ke(S) {
        var O = Ne();
        return O.useRef(S);
      }
      function $n(S, O) {
        var K = Ne();
        return K.useEffect(S, O);
      }
      function vn(S, O) {
        var K = Ne();
        return K.useInsertionEffect(S, O);
      }
      function hn(S, O) {
        var K = Ne();
        return K.useLayoutEffect(S, O);
      }
      function dr(S, O) {
        var K = Ne();
        return K.useCallback(S, O);
      }
      function Ci(S, O) {
        var K = Ne();
        return K.useMemo(S, O);
      }
      function el(S, O, K) {
        var ee = Ne();
        return ee.useImperativeHandle(S, O, K);
      }
      function jt(S, O) {
        {
          var K = Ne();
          return K.useDebugValue(S, O);
        }
      }
      function dd() {
        var S = Ne();
        return S.useTransition();
      }
      function ai(S) {
        var O = Ne();
        return O.useDeferredValue(S);
      }
      function Tt() {
        var S = Ne();
        return S.useId();
      }
      function bi(S, O, K) {
        var ee = Ne();
        return ee.useSyncExternalStore(S, O, K);
      }
      var yu = 0, tl, gu, ta, ps, Pr, vs, hs;
      function Ec() {
      }
      Ec.__reactDisabledLog = !0;
      function nl() {
        {
          if (yu === 0) {
            tl = console.log, gu = console.info, ta = console.warn, ps = console.error, Pr = console.group, vs = console.groupCollapsed, hs = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: Ec,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          yu++;
        }
      }
      function Su() {
        {
          if (yu--, yu === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Re({}, S, {
                value: tl
              }),
              info: Re({}, S, {
                value: gu
              }),
              warn: Re({}, S, {
                value: ta
              }),
              error: Re({}, S, {
                value: ps
              }),
              group: Re({}, S, {
                value: Pr
              }),
              groupCollapsed: Re({}, S, {
                value: vs
              }),
              groupEnd: Re({}, S, {
                value: hs
              })
            });
          }
          yu < 0 && _e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = Dt.ReactCurrentDispatcher, Fr;
      function Eu(S, O, K) {
        {
          if (Fr === void 0)
            try {
              throw Error();
            } catch (me) {
              var ee = me.stack.trim().match(/\n( *(at )?)/);
              Fr = ee && ee[1] || "";
            }
          return `
` + Fr + S;
        }
      }
      var Cu = !1, bu;
      {
        var rl = typeof WeakMap == "function" ? WeakMap : Map;
        bu = new rl();
      }
      function al(S, O) {
        if (!S || Cu)
          return "";
        {
          var K = bu.get(S);
          if (K !== void 0)
            return K;
        }
        var ee;
        Cu = !0;
        var me = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var nt;
        nt = ii.current, ii.current = null, nl();
        try {
          if (O) {
            var Te = function() {
              throw Error();
            };
            if (Object.defineProperty(Te.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Te, []);
              } catch (kt) {
                ee = kt;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (kt) {
                ee = kt;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kt) {
              ee = kt;
            }
            S();
          }
        } catch (kt) {
          if (kt && ee && typeof kt.stack == "string") {
            for (var Je = kt.stack.split(`
`), wt = ee.stack.split(`
`), Ft = Je.length - 1, ln = wt.length - 1; Ft >= 1 && ln >= 0 && Je[Ft] !== wt[ln]; )
              ln--;
            for (; Ft >= 1 && ln >= 0; Ft--, ln--)
              if (Je[Ft] !== wt[ln]) {
                if (Ft !== 1 || ln !== 1)
                  do
                    if (Ft--, ln--, ln < 0 || Je[Ft] !== wt[ln]) {
                      var en = `
` + Je[Ft].replace(" at new ", " at ");
                      return S.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", S.displayName)), typeof S == "function" && bu.set(S, en), en;
                    }
                  while (Ft >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          Cu = !1, ii.current = nt, Su(), Error.prepareStackTrace = me;
        }
        var sn = S ? S.displayName || S.name : "", mn = sn ? Eu(sn) : "";
        return typeof S == "function" && bu.set(S, mn), mn;
      }
      function Vi(S, O, K) {
        return al(S, !1);
      }
      function pd(S) {
        var O = S.prototype;
        return !!(O && O.isReactComponent);
      }
      function Ri(S, O, K) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return al(S, pd(S));
        if (typeof S == "string")
          return Eu(S);
        switch (S) {
          case k:
            return Eu("Suspense");
          case M:
            return Eu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case U:
              return Vi(S.render);
            case A:
              return Ri(S.type, O, K);
            case B: {
              var ee = S, me = ee._payload, nt = ee._init;
              try {
                return Ri(nt(me), O, K);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, il = Dt.ReactDebugCurrentFrame;
      function lo(S) {
        if (S) {
          var O = S._owner, K = Ri(S.type, S._source, O ? O.type : null);
          il.setExtraStackFrame(K);
        } else
          il.setExtraStackFrame(null);
      }
      function ul(S, O, K, ee, me) {
        {
          var nt = Function.call.bind(Tr);
          for (var Te in S)
            if (nt(S, Te)) {
              var Je = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var wt = Error((ee || "React class") + ": " + K + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw wt.name = "Invariant Violation", wt;
                }
                Je = S[Te](O, Te, ee, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Je = Ft;
              }
              Je && !(Je instanceof Error) && (lo(me), _e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", K, Te, typeof Je), lo(null)), Je instanceof Error && !(Je.message in Ht) && (Ht[Je.message] = !0, lo(me), _e("Failed %s type: %s", K, Je.message), lo(null));
            }
        }
      }
      function Pt(S) {
        if (S) {
          var O = S._owner, K = Ri(S.type, S._source, O ? O.type : null);
          tt(K);
        } else
          tt(null);
      }
      var ol;
      ol = !1;
      function ll() {
        if (de.current) {
          var S = nr(de.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function ct(S) {
        if (S !== void 0) {
          var O = S.fileName.replace(/^.*[\\\/]/, ""), K = S.lineNumber;
          return `

Check your code at ` + O + ":" + K + ".";
        }
        return "";
      }
      function so(S) {
        return S != null ? ct(S.__source) : "";
      }
      var On = {};
      function na(S) {
        var O = ll();
        if (!O) {
          var K = typeof S == "string" ? S : S.displayName || S.name;
          K && (O = `

Check the top-level render call using <` + K + ">.");
        }
        return O;
      }
      function Vr(S, O) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var K = na(O);
          if (!On[K]) {
            On[K] = !0;
            var ee = "";
            S && S._owner && S._owner !== de.current && (ee = " It was passed a child from " + nr(S._owner.type) + "."), Pt(S), _e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ee), Pt(null);
          }
        }
      }
      function Ru(S, O) {
        if (typeof S == "object") {
          if (Zt(S))
            for (var K = 0; K < S.length; K++) {
              var ee = S[K];
              Wt(ee) && Vr(ee, O);
            }
          else if (Wt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var me = le(S);
            if (typeof me == "function" && me !== S.entries)
              for (var nt = me.call(S), Te; !(Te = nt.next()).done; )
                Wt(Te.value) && Vr(Te.value, O);
          }
        }
      }
      function Ln(S) {
        {
          var O = S.type;
          if (O == null || typeof O == "string")
            return;
          var K;
          if (typeof O == "function")
            K = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === U || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === A))
            K = O.propTypes;
          else
            return;
          if (K) {
            var ee = nr(O);
            ul(K, S.props, "prop", ee, S);
          } else if (O.PropTypes !== void 0 && !ol) {
            ol = !0;
            var me = nr(O);
            _e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && _e("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qt(S) {
        {
          for (var O = Object.keys(S.props), K = 0; K < O.length; K++) {
            var ee = O[K];
            if (ee !== "children" && ee !== "key") {
              Pt(S), _e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), Pt(null);
              break;
            }
          }
          S.ref !== null && (Pt(S), _e("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
        }
      }
      function Cc(S, O, K) {
        var ee = se(S);
        if (!ee) {
          var me = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = so(O);
          nt ? me += nt : me += ll();
          var Te;
          S === null ? Te = "null" : Zt(S) ? Te = "array" : S !== void 0 && S.$$typeof === E ? (Te = "<" + (nr(S.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, _e("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, me);
        }
        var Je = We.apply(this, arguments);
        if (Je == null)
          return Je;
        if (ee)
          for (var wt = 2; wt < arguments.length; wt++)
            Ru(arguments[wt], S);
        return S === w ? qt(Je) : Ln(Je), Je;
      }
      var ra = !1;
      function rr(S) {
        var O = Cc.bind(null, S);
        return O.type = S, ra || (ra = !0, Et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return Et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), O;
      }
      function Ti(S, O, K) {
        for (var ee = $t.apply(this, arguments), me = 2; me < arguments.length; me++)
          Ru(arguments[me], ee.type);
        return Ln(ee), ee;
      }
      function bc(S, O) {
        var K = J.transition;
        J.transition = {};
        var ee = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (J.transition = K, K === null && ee._updatedFibers) {
            var me = ee._updatedFibers.size;
            me > 10 && Et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ee._updatedFibers.clear();
          }
        }
      }
      var Hi = !1, Tu = null;
      function Rc(S) {
        if (Tu === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), K = c && c[O];
            Tu = K.call(c, "timers").setImmediate;
          } catch {
            Tu = function(me) {
              Hi === !1 && (Hi = !0, typeof MessageChannel > "u" && _e("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var nt = new MessageChannel();
              nt.port1.onmessage = me, nt.port2.postMessage(void 0);
            };
          }
        return Tu(S);
      }
      var Ua = 0, wu = !1;
      function _u(S) {
        {
          var O = Ua;
          Ua++, H.current === null && (H.current = []);
          var K = H.isBatchingLegacy, ee;
          try {
            if (H.isBatchingLegacy = !0, ee = S(), !K && H.didScheduleLegacyUpdate) {
              var me = H.current;
              me !== null && (H.didScheduleLegacyUpdate = !1, Ou(me));
            }
          } catch (sn) {
            throw ja(O), sn;
          } finally {
            H.isBatchingLegacy = K;
          }
          if (ee !== null && typeof ee == "object" && typeof ee.then == "function") {
            var nt = ee, Te = !1, Je = {
              then: function(sn, mn) {
                Te = !0, nt.then(function(kt) {
                  ja(O), Ua === 0 ? sl(kt, sn, mn) : sn(kt);
                }, function(kt) {
                  ja(O), mn(kt);
                });
              }
            };
            return !wu && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (wu = !0, _e("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Je;
          } else {
            var wt = ee;
            if (ja(O), Ua === 0) {
              var Ft = H.current;
              Ft !== null && (Ou(Ft), H.current = null);
              var ln = {
                then: function(sn, mn) {
                  H.current === null ? (H.current = [], sl(wt, sn, mn)) : sn(wt);
                }
              };
              return ln;
            } else {
              var en = {
                then: function(sn, mn) {
                  sn(wt);
                }
              };
              return en;
            }
          }
        }
      }
      function ja(S) {
        S !== Ua - 1 && _e("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = S;
      }
      function sl(S, O, K) {
        {
          var ee = H.current;
          if (ee !== null)
            try {
              Ou(ee), Rc(function() {
                ee.length === 0 ? (H.current = null, O(S)) : sl(S, O, K);
              });
            } catch (me) {
              K(me);
            }
          else
            O(S);
        }
      }
      var xu = !1;
      function Ou(S) {
        if (!xu) {
          xu = !0;
          var O = 0;
          try {
            for (; O < S.length; O++) {
              var K = S[O];
              do
                K = K(!0);
              while (K !== null);
            }
            S.length = 0;
          } catch (ee) {
            throw S = S.slice(O + 1), ee;
          } finally {
            xu = !1;
          }
        }
      }
      var co = Cc, cl = Ti, ms = rr, ui = {
        map: za,
        forEach: oo,
        count: hu,
        toArray: Jo,
        only: Fi
      };
      p.Children = ui, p.Component = qe, p.Fragment = w, p.Profiler = V, p.PureComponent = Ut, p.StrictMode = g, p.Suspense = k, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, p.cloneElement = cl, p.createContext = mu, p.createElement = co, p.createFactory = ms, p.createRef = Bn, p.forwardRef = Ei, p.isValidElement = Wt, p.lazy = Ra, p.memo = Ee, p.startTransition = bc, p.unstable_act = _u, p.useCallback = dr, p.useContext = mt, p.useDebugValue = jt, p.useDeferredValue = ai, p.useEffect = $n, p.useId = Tt, p.useImperativeHandle = el, p.useInsertionEffect = vn, p.useLayoutEffect = hn, p.useMemo = Ci, p.useReducer = yt, p.useRef = Ke, p.useState = Nt, p.useSyncExternalStore = bi, p.useTransition = dd, p.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tv, Tv.exports)), Tv.exports;
}
({}).NODE_ENV === "production" ? l0.exports = mk() : l0.exports = yk();
var dn = l0.exports;
const gk = /* @__PURE__ */ hk(dn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s1;
function Sk() {
  if (s1)
    return Cv;
  s1 = 1;
  var c = dn, p = Symbol.for("react.element"), v = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(V, L, _) {
    var U, k = {}, M = null, A = null;
    _ !== void 0 && (M = "" + _), L.key !== void 0 && (M = "" + L.key), L.ref !== void 0 && (A = L.ref);
    for (U in L)
      E.call(L, U) && !w.hasOwnProperty(U) && (k[U] = L[U]);
    if (V && V.defaultProps)
      for (U in L = V.defaultProps, L)
        k[U] === void 0 && (k[U] = L[U]);
    return { $$typeof: p, type: V, key: M, ref: A, props: k, _owner: R.current };
  }
  return Cv.Fragment = v, Cv.jsx = g, Cv.jsxs = g, Cv;
}
var bv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c1;
function Ek() {
  return c1 || (c1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = dn, p = Symbol.for("react.element"), v = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), V = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), B = Symbol.iterator, $ = "@@iterator";
    function I(D) {
      if (D === null || typeof D != "object")
        return null;
      var se = B && D[B] || D[$];
      return typeof se == "function" ? se : null;
    }
    var oe = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function le(D) {
      {
        for (var se = arguments.length, Ee = new Array(se > 1 ? se - 1 : 0), Ne = 1; Ne < se; Ne++)
          Ee[Ne - 1] = arguments[Ne];
        te("error", D, Ee);
      }
    }
    function te(D, se, Ee) {
      {
        var Ne = oe.ReactDebugCurrentFrame, mt = Ne.getStackAddendum();
        mt !== "" && (se += "%s", Ee = Ee.concat([mt]));
        var Nt = Ee.map(function(yt) {
          return String(yt);
        });
        Nt.unshift("Warning: " + se), Function.prototype.apply.call(console[D], console, Nt);
      }
    }
    var J = !1, H = !1, de = !1, ge = !1, Ye = !1, tt;
    tt = Symbol.for("react.module.reference");
    function Ze(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === E || D === w || Ye || D === R || D === _ || D === U || ge || D === A || J || H || de || typeof D == "object" && D !== null && (D.$$typeof === M || D.$$typeof === k || D.$$typeof === g || D.$$typeof === V || D.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === tt || D.getModuleId !== void 0));
    }
    function Ue(D, se, Ee) {
      var Ne = D.displayName;
      if (Ne)
        return Ne;
      var mt = se.displayName || se.name || "";
      return mt !== "" ? Ee + "(" + mt + ")" : Ee;
    }
    function st(D) {
      return D.displayName || "Context";
    }
    function Ae(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case E:
          return "Fragment";
        case v:
          return "Portal";
        case w:
          return "Profiler";
        case R:
          return "StrictMode";
        case _:
          return "Suspense";
        case U:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case V:
            var se = D;
            return st(se) + ".Consumer";
          case g:
            var Ee = D;
            return st(Ee._context) + ".Provider";
          case L:
            return Ue(D, D.render, "ForwardRef");
          case k:
            var Ne = D.displayName || null;
            return Ne !== null ? Ne : Ae(D.type) || "Memo";
          case M: {
            var mt = D, Nt = mt._payload, yt = mt._init;
            try {
              return Ae(yt(Nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $e = Object.assign, Dt = 0, Et, _e, he, Ve, N, ue, Re;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function qe() {
      {
        if (Dt === 0) {
          Et = console.log, _e = console.info, he = console.warn, Ve = console.error, N = console.group, ue = console.groupCollapsed, Re = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: at,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        Dt++;
      }
    }
    function Rt() {
      {
        if (Dt--, Dt === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $e({}, D, {
              value: Et
            }),
            info: $e({}, D, {
              value: _e
            }),
            warn: $e({}, D, {
              value: he
            }),
            error: $e({}, D, {
              value: Ve
            }),
            group: $e({}, D, {
              value: N
            }),
            groupCollapsed: $e({}, D, {
              value: ue
            }),
            groupEnd: $e({}, D, {
              value: Re
            })
          });
        }
        Dt < 0 && le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = oe.ReactCurrentDispatcher, Ct;
    function pt(D, se, Ee) {
      {
        if (Ct === void 0)
          try {
            throw Error();
          } catch (mt) {
            var Ne = mt.stack.trim().match(/\n( *(at )?)/);
            Ct = Ne && Ne[1] || "";
          }
        return `
` + Ct + D;
      }
    }
    var Ut = !1, tr;
    {
      var Bn = typeof WeakMap == "function" ? WeakMap : Map;
      tr = new Bn();
    }
    function Oe(D, se) {
      if (!D || Ut)
        return "";
      {
        var Ee = tr.get(D);
        if (Ee !== void 0)
          return Ee;
      }
      var Ne;
      Ut = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Nt;
      Nt = dt.current, dt.current = null, qe();
      try {
        if (se) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch (jt) {
              Ne = jt;
            }
            Reflect.construct(D, [], yt);
          } else {
            try {
              yt.call();
            } catch (jt) {
              Ne = jt;
            }
            D.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (jt) {
            Ne = jt;
          }
          D();
        }
      } catch (jt) {
        if (jt && Ne && typeof jt.stack == "string") {
          for (var Ke = jt.stack.split(`
`), $n = Ne.stack.split(`
`), vn = Ke.length - 1, hn = $n.length - 1; vn >= 1 && hn >= 0 && Ke[vn] !== $n[hn]; )
            hn--;
          for (; vn >= 1 && hn >= 0; vn--, hn--)
            if (Ke[vn] !== $n[hn]) {
              if (vn !== 1 || hn !== 1)
                do
                  if (vn--, hn--, hn < 0 || Ke[vn] !== $n[hn]) {
                    var dr = `
` + Ke[vn].replace(" at new ", " at ");
                    return D.displayName && dr.includes("<anonymous>") && (dr = dr.replace("<anonymous>", D.displayName)), typeof D == "function" && tr.set(D, dr), dr;
                  }
                while (vn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        Ut = !1, dt.current = Nt, Rt(), Error.prepareStackTrace = mt;
      }
      var Ci = D ? D.displayName || D.name : "", el = Ci ? pt(Ci) : "";
      return typeof D == "function" && tr.set(D, el), el;
    }
    function Zt(D, se, Ee) {
      return Oe(D, !1);
    }
    function we(D) {
      var se = D.prototype;
      return !!(se && se.isReactComponent);
    }
    function pn(D, se, Ee) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Oe(D, we(D));
      if (typeof D == "string")
        return pt(D);
      switch (D) {
        case _:
          return pt("Suspense");
        case U:
          return pt("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case L:
            return Zt(D.render);
          case k:
            return pn(D.type, se, Ee);
          case M: {
            var Ne = D, mt = Ne._payload, Nt = Ne._init;
            try {
              return pn(Nt(mt), se, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var bn = Object.prototype.hasOwnProperty, Rn = {}, Xr = oe.ReactDebugCurrentFrame;
    function Zr(D) {
      if (D) {
        var se = D._owner, Ee = pn(D.type, D._source, se ? se.type : null);
        Xr.setExtraStackFrame(Ee);
      } else
        Xr.setExtraStackFrame(null);
    }
    function nr(D, se, Ee, Ne, mt) {
      {
        var Nt = Function.call.bind(bn);
        for (var yt in D)
          if (Nt(D, yt)) {
            var Ke = void 0;
            try {
              if (typeof D[yt] != "function") {
                var $n = Error((Ne || "React class") + ": " + Ee + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $n.name = "Invariant Violation", $n;
              }
              Ke = D[yt](se, yt, Ne, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (vn) {
              Ke = vn;
            }
            Ke && !(Ke instanceof Error) && (Zr(mt), le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", Ee, yt, typeof Ke), Zr(null)), Ke instanceof Error && !(Ke.message in Rn) && (Rn[Ke.message] = !0, Zr(mt), le("Failed %s type: %s", Ee, Ke.message), Zr(null));
          }
      }
    }
    var Tr = Array.isArray;
    function Jr(D) {
      return Tr(D);
    }
    function wr(D) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, Ee = se && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return Ee;
      }
    }
    function Sa(D) {
      try {
        return fr(D), !1;
      } catch {
        return !0;
      }
    }
    function fr(D) {
      return "" + D;
    }
    function ea(D) {
      if (Sa(D))
        return le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(D)), fr(D);
    }
    var _n = oe.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yi, Ea, Se;
    Se = {};
    function We(D) {
      if (bn.call(D, "ref")) {
        var se = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function bt(D) {
      if (bn.call(D, "key")) {
        var se = Object.getOwnPropertyDescriptor(D, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function $t(D, se) {
      if (typeof D.ref == "string" && _n.current && se && _n.current.stateNode !== se) {
        var Ee = Ae(_n.current.type);
        Se[Ee] || (le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(_n.current.type), D.ref), Se[Ee] = !0);
      }
    }
    function Wt(D, se) {
      {
        var Ee = function() {
          yi || (yi = !0, le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Ee.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function Fn(D, se) {
      {
        var Ee = function() {
          Ea || (Ea = !0, le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Ee.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var xn = function(D, se, Ee, Ne, mt, Nt, yt) {
      var Ke = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: D,
        key: se,
        ref: Ee,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Nt
      };
      return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
    };
    function _r(D, se, Ee, Ne, mt) {
      {
        var Nt, yt = {}, Ke = null, $n = null;
        Ee !== void 0 && (ea(Ee), Ke = "" + Ee), bt(se) && (ea(se.key), Ke = "" + se.key), We(se) && ($n = se.ref, $t(se, mt));
        for (Nt in se)
          bn.call(se, Nt) && !zr.hasOwnProperty(Nt) && (yt[Nt] = se[Nt]);
        if (D && D.defaultProps) {
          var vn = D.defaultProps;
          for (Nt in vn)
            yt[Nt] === void 0 && (yt[Nt] = vn[Nt]);
        }
        if (Ke || $n) {
          var hn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ke && Wt(yt, hn), $n && Fn(yt, hn);
        }
        return xn(D, Ke, $n, mt, Ne, _n.current, yt);
      }
    }
    var Jt = oe.ReactCurrentOwner, Ur = oe.ReactDebugCurrentFrame;
    function Qt(D) {
      if (D) {
        var se = D._owner, Ee = pn(D.type, D._source, se ? se.type : null);
        Ur.setExtraStackFrame(Ee);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function ri(D) {
      return typeof D == "object" && D !== null && D.$$typeof === p;
    }
    function za() {
      {
        if (Jt.current) {
          var D = Ae(Jt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function hu(D) {
      {
        if (D !== void 0) {
          var se = D.fileName.replace(/^.*[\\\/]/, ""), Ee = D.lineNumber;
          return `

Check your code at ` + se + ":" + Ee + ".";
        }
        return "";
      }
    }
    var oo = {};
    function Jo(D) {
      {
        var se = za();
        if (!se) {
          var Ee = typeof D == "string" ? D : D.displayName || D.name;
          Ee && (se = `

Check the top-level render call using <` + Ee + ">.");
        }
        return se;
      }
    }
    function Fi(D, se) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var Ee = Jo(se);
        if (oo[Ee])
          return;
        oo[Ee] = !0;
        var Ne = "";
        D && D._owner && D._owner !== Jt.current && (Ne = " It was passed a child from " + Ae(D._owner.type) + "."), Qt(D), le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Ne), Qt(null);
      }
    }
    function mu(D, se) {
      {
        if (typeof D != "object")
          return;
        if (Jr(D))
          for (var Ee = 0; Ee < D.length; Ee++) {
            var Ne = D[Ee];
            ri(Ne) && Fi(Ne, se);
          }
        else if (ri(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var mt = I(D);
          if (typeof mt == "function" && mt !== D.entries)
            for (var Nt = mt.call(D), yt; !(yt = Nt.next()).done; )
              ri(yt.value) && Fi(yt.value, se);
        }
      }
    }
    function Ca(D) {
      {
        var se = D.type;
        if (se == null || typeof se == "string")
          return;
        var Ee;
        if (typeof se == "function")
          Ee = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === k))
          Ee = se.propTypes;
        else
          return;
        if (Ee) {
          var Ne = Ae(se);
          nr(Ee, D.props, "prop", Ne, D);
        } else if (se.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var mt = Ae(se);
          le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gi(D) {
      {
        for (var se = Object.keys(D.props), Ee = 0; Ee < se.length; Ee++) {
          var Ne = se[Ee];
          if (Ne !== "children" && Ne !== "key") {
            Qt(D), le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Qt(null);
            break;
          }
        }
        D.ref !== null && (Qt(D), le("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function ba(D, se, Ee, Ne, mt, Nt) {
      {
        var yt = Ze(D);
        if (!yt) {
          var Ke = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $n = hu(mt);
          $n ? Ke += $n : Ke += za();
          var vn;
          D === null ? vn = "null" : Jr(D) ? vn = "array" : D !== void 0 && D.$$typeof === p ? (vn = "<" + (Ae(D.type) || "Unknown") + " />", Ke = " Did you accidentally export a JSX literal instead of a component?") : vn = typeof D, le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", vn, Ke);
        }
        var hn = _r(D, se, Ee, mt, Nt);
        if (hn == null)
          return hn;
        if (yt) {
          var dr = se.children;
          if (dr !== void 0)
            if (Ne)
              if (Jr(dr)) {
                for (var Ci = 0; Ci < dr.length; Ci++)
                  mu(dr[Ci], D);
                Object.freeze && Object.freeze(dr);
              } else
                le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mu(dr, D);
        }
        return D === E ? gi(hn) : Ca(hn), hn;
      }
    }
    function Si(D, se, Ee) {
      return ba(D, se, Ee, !0);
    }
    function jr(D, se, Ee) {
      return ba(D, se, Ee, !1);
    }
    var Ra = jr, Ei = Si;
    bv.Fragment = E, bv.jsx = Ra, bv.jsxs = Ei;
  }()), bv;
}
({}).NODE_ENV === "production" ? o0.exports = Sk() : o0.exports = Ek();
var ht = o0.exports, wv = {}, s0 = { exports: {} }, ti = {}, hy = { exports: {} }, QE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f1;
function Ck() {
  return f1 || (f1 = 1, function(c) {
    function p(he, Ve) {
      var N = he.length;
      he.push(Ve);
      e:
        for (; 0 < N; ) {
          var ue = N - 1 >>> 1, Re = he[ue];
          if (0 < R(Re, Ve))
            he[ue] = Ve, he[N] = Re, N = ue;
          else
            break e;
        }
    }
    function v(he) {
      return he.length === 0 ? null : he[0];
    }
    function E(he) {
      if (he.length === 0)
        return null;
      var Ve = he[0], N = he.pop();
      if (N !== Ve) {
        he[0] = N;
        e:
          for (var ue = 0, Re = he.length, at = Re >>> 1; ue < at; ) {
            var qe = 2 * (ue + 1) - 1, Rt = he[qe], dt = qe + 1, Ct = he[dt];
            if (0 > R(Rt, N))
              dt < Re && 0 > R(Ct, Rt) ? (he[ue] = Ct, he[dt] = N, ue = dt) : (he[ue] = Rt, he[qe] = N, ue = qe);
            else if (dt < Re && 0 > R(Ct, N))
              he[ue] = Ct, he[dt] = N, ue = dt;
            else
              break e;
          }
      }
      return Ve;
    }
    function R(he, Ve) {
      var N = he.sortIndex - Ve.sortIndex;
      return N !== 0 ? N : he.id - Ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      c.unstable_now = function() {
        return w.now();
      };
    } else {
      var g = Date, V = g.now();
      c.unstable_now = function() {
        return g.now() - V;
      };
    }
    var L = [], _ = [], U = 1, k = null, M = 3, A = !1, B = !1, $ = !1, I = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function te(he) {
      for (var Ve = v(_); Ve !== null; ) {
        if (Ve.callback === null)
          E(_);
        else if (Ve.startTime <= he)
          E(_), Ve.sortIndex = Ve.expirationTime, p(L, Ve);
        else
          break;
        Ve = v(_);
      }
    }
    function J(he) {
      if ($ = !1, te(he), !B)
        if (v(L) !== null)
          B = !0, Et(H);
        else {
          var Ve = v(_);
          Ve !== null && _e(J, Ve.startTime - he);
        }
    }
    function H(he, Ve) {
      B = !1, $ && ($ = !1, oe(Ye), Ye = -1), A = !0;
      var N = M;
      try {
        for (te(Ve), k = v(L); k !== null && (!(k.expirationTime > Ve) || he && !Ue()); ) {
          var ue = k.callback;
          if (typeof ue == "function") {
            k.callback = null, M = k.priorityLevel;
            var Re = ue(k.expirationTime <= Ve);
            Ve = c.unstable_now(), typeof Re == "function" ? k.callback = Re : k === v(L) && E(L), te(Ve);
          } else
            E(L);
          k = v(L);
        }
        if (k !== null)
          var at = !0;
        else {
          var qe = v(_);
          qe !== null && _e(J, qe.startTime - Ve), at = !1;
        }
        return at;
      } finally {
        k = null, M = N, A = !1;
      }
    }
    var de = !1, ge = null, Ye = -1, tt = 5, Ze = -1;
    function Ue() {
      return !(c.unstable_now() - Ze < tt);
    }
    function st() {
      if (ge !== null) {
        var he = c.unstable_now();
        Ze = he;
        var Ve = !0;
        try {
          Ve = ge(!0, he);
        } finally {
          Ve ? Ae() : (de = !1, ge = null);
        }
      } else
        de = !1;
    }
    var Ae;
    if (typeof le == "function")
      Ae = function() {
        le(st);
      };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), Dt = $e.port2;
      $e.port1.onmessage = st, Ae = function() {
        Dt.postMessage(null);
      };
    } else
      Ae = function() {
        I(st, 0);
      };
    function Et(he) {
      ge = he, de || (de = !0, Ae());
    }
    function _e(he, Ve) {
      Ye = I(function() {
        he(c.unstable_now());
      }, Ve);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(he) {
      he.callback = null;
    }, c.unstable_continueExecution = function() {
      B || A || (B = !0, Et(H));
    }, c.unstable_forceFrameRate = function(he) {
      0 > he || 125 < he ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < he ? Math.floor(1e3 / he) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, c.unstable_getFirstCallbackNode = function() {
      return v(L);
    }, c.unstable_next = function(he) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = M;
      }
      var N = M;
      M = Ve;
      try {
        return he();
      } finally {
        M = N;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(he, Ve) {
      switch (he) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          he = 3;
      }
      var N = M;
      M = he;
      try {
        return Ve();
      } finally {
        M = N;
      }
    }, c.unstable_scheduleCallback = function(he, Ve, N) {
      var ue = c.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? ue + N : ue) : N = ue, he) {
        case 1:
          var Re = -1;
          break;
        case 2:
          Re = 250;
          break;
        case 5:
          Re = 1073741823;
          break;
        case 4:
          Re = 1e4;
          break;
        default:
          Re = 5e3;
      }
      return Re = N + Re, he = { id: U++, callback: Ve, priorityLevel: he, startTime: N, expirationTime: Re, sortIndex: -1 }, N > ue ? (he.sortIndex = N, p(_, he), v(L) === null && he === v(_) && ($ ? (oe(Ye), Ye = -1) : $ = !0, _e(J, N - ue))) : (he.sortIndex = Re, p(L, he), B || A || (B = !0, Et(H))), he;
    }, c.unstable_shouldYield = Ue, c.unstable_wrapCallback = function(he) {
      var Ve = M;
      return function() {
        var N = M;
        M = Ve;
        try {
          return he.apply(this, arguments);
        } finally {
          M = N;
        }
      };
    };
  }(QE)), QE;
}
var GE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1;
function bk() {
  return d1 || (d1 = 1, function(c) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, v = !1, E = 5;
      function R(Se, We) {
        var bt = Se.length;
        Se.push(We), V(Se, We, bt);
      }
      function w(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function g(Se) {
        if (Se.length === 0)
          return null;
        var We = Se[0], bt = Se.pop();
        return bt !== We && (Se[0] = bt, L(Se, bt, 0)), We;
      }
      function V(Se, We, bt) {
        for (var $t = bt; $t > 0; ) {
          var Wt = $t - 1 >>> 1, Fn = Se[Wt];
          if (_(Fn, We) > 0)
            Se[Wt] = We, Se[$t] = Fn, $t = Wt;
          else
            return;
        }
      }
      function L(Se, We, bt) {
        for (var $t = bt, Wt = Se.length, Fn = Wt >>> 1; $t < Fn; ) {
          var xn = ($t + 1) * 2 - 1, _r = Se[xn], Jt = xn + 1, Ur = Se[Jt];
          if (_(_r, We) < 0)
            Jt < Wt && _(Ur, _r) < 0 ? (Se[$t] = Ur, Se[Jt] = We, $t = Jt) : (Se[$t] = _r, Se[xn] = We, $t = xn);
          else if (Jt < Wt && _(Ur, We) < 0)
            Se[$t] = Ur, Se[Jt] = We, $t = Jt;
          else
            return;
        }
      }
      function _(Se, We) {
        var bt = Se.sortIndex - We.sortIndex;
        return bt !== 0 ? bt : Se.id - We.id;
      }
      var U = 1, k = 2, M = 3, A = 4, B = 5;
      function $(Se, We) {
      }
      var I = typeof performance == "object" && typeof performance.now == "function";
      if (I) {
        var oe = performance;
        c.unstable_now = function() {
          return oe.now();
        };
      } else {
        var le = Date, te = le.now();
        c.unstable_now = function() {
          return le.now() - te;
        };
      }
      var J = 1073741823, H = -1, de = 250, ge = 5e3, Ye = 1e4, tt = J, Ze = [], Ue = [], st = 1, Ae = null, $e = M, Dt = !1, Et = !1, _e = !1, he = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ue(Se) {
        for (var We = w(Ue); We !== null; ) {
          if (We.callback === null)
            g(Ue);
          else if (We.startTime <= Se)
            g(Ue), We.sortIndex = We.expirationTime, R(Ze, We);
          else
            return;
          We = w(Ue);
        }
      }
      function Re(Se) {
        if (_e = !1, ue(Se), !Et)
          if (w(Ze) !== null)
            Et = !0, ea(at);
          else {
            var We = w(Ue);
            We !== null && _n(Re, We.startTime - Se);
          }
      }
      function at(Se, We) {
        Et = !1, _e && (_e = !1, zr()), Dt = !0;
        var bt = $e;
        try {
          var $t;
          if (!v)
            return qe(Se, We);
        } finally {
          Ae = null, $e = bt, Dt = !1;
        }
      }
      function qe(Se, We) {
        var bt = We;
        for (ue(bt), Ae = w(Ze); Ae !== null && !p && !(Ae.expirationTime > bt && (!Se || Zr())); ) {
          var $t = Ae.callback;
          if (typeof $t == "function") {
            Ae.callback = null, $e = Ae.priorityLevel;
            var Wt = Ae.expirationTime <= bt, Fn = $t(Wt);
            bt = c.unstable_now(), typeof Fn == "function" ? Ae.callback = Fn : Ae === w(Ze) && g(Ze), ue(bt);
          } else
            g(Ze);
          Ae = w(Ze);
        }
        if (Ae !== null)
          return !0;
        var xn = w(Ue);
        return xn !== null && _n(Re, xn.startTime - bt), !1;
      }
      function Rt(Se, We) {
        switch (Se) {
          case U:
          case k:
          case M:
          case A:
          case B:
            break;
          default:
            Se = M;
        }
        var bt = $e;
        $e = Se;
        try {
          return We();
        } finally {
          $e = bt;
        }
      }
      function dt(Se) {
        var We;
        switch ($e) {
          case U:
          case k:
          case M:
            We = M;
            break;
          default:
            We = $e;
            break;
        }
        var bt = $e;
        $e = We;
        try {
          return Se();
        } finally {
          $e = bt;
        }
      }
      function Ct(Se) {
        var We = $e;
        return function() {
          var bt = $e;
          $e = We;
          try {
            return Se.apply(this, arguments);
          } finally {
            $e = bt;
          }
        };
      }
      function pt(Se, We, bt) {
        var $t = c.unstable_now(), Wt;
        if (typeof bt == "object" && bt !== null) {
          var Fn = bt.delay;
          typeof Fn == "number" && Fn > 0 ? Wt = $t + Fn : Wt = $t;
        } else
          Wt = $t;
        var xn;
        switch (Se) {
          case U:
            xn = H;
            break;
          case k:
            xn = de;
            break;
          case B:
            xn = tt;
            break;
          case A:
            xn = Ye;
            break;
          case M:
          default:
            xn = ge;
            break;
        }
        var _r = Wt + xn, Jt = {
          id: st++,
          callback: We,
          priorityLevel: Se,
          startTime: Wt,
          expirationTime: _r,
          sortIndex: -1
        };
        return Wt > $t ? (Jt.sortIndex = Wt, R(Ue, Jt), w(Ze) === null && Jt === w(Ue) && (_e ? zr() : _e = !0, _n(Re, Wt - $t))) : (Jt.sortIndex = _r, R(Ze, Jt), !Et && !Dt && (Et = !0, ea(at))), Jt;
      }
      function Ut() {
      }
      function tr() {
        !Et && !Dt && (Et = !0, ea(at));
      }
      function Bn() {
        return w(Ze);
      }
      function Oe(Se) {
        Se.callback = null;
      }
      function Zt() {
        return $e;
      }
      var we = !1, pn = null, bn = -1, Rn = E, Xr = -1;
      function Zr() {
        var Se = c.unstable_now() - Xr;
        return !(Se < Rn);
      }
      function nr() {
      }
      function Tr(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? Rn = Math.floor(1e3 / Se) : Rn = E;
      }
      var Jr = function() {
        if (pn !== null) {
          var Se = c.unstable_now();
          Xr = Se;
          var We = !0, bt = !0;
          try {
            bt = pn(We, Se);
          } finally {
            bt ? wr() : (we = !1, pn = null);
          }
        } else
          we = !1;
      }, wr;
      if (typeof N == "function")
        wr = function() {
          N(Jr);
        };
      else if (typeof MessageChannel < "u") {
        var Sa = new MessageChannel(), fr = Sa.port2;
        Sa.port1.onmessage = Jr, wr = function() {
          fr.postMessage(null);
        };
      } else
        wr = function() {
          he(Jr, 0);
        };
      function ea(Se) {
        pn = Se, we || (we = !0, wr());
      }
      function _n(Se, We) {
        bn = he(function() {
          Se(c.unstable_now());
        }, We);
      }
      function zr() {
        Ve(bn), bn = -1;
      }
      var yi = nr, Ea = null;
      c.unstable_IdlePriority = B, c.unstable_ImmediatePriority = U, c.unstable_LowPriority = A, c.unstable_NormalPriority = M, c.unstable_Profiling = Ea, c.unstable_UserBlockingPriority = k, c.unstable_cancelCallback = Oe, c.unstable_continueExecution = tr, c.unstable_forceFrameRate = Tr, c.unstable_getCurrentPriorityLevel = Zt, c.unstable_getFirstCallbackNode = Bn, c.unstable_next = dt, c.unstable_pauseExecution = Ut, c.unstable_requestPaint = yi, c.unstable_runWithPriority = Rt, c.unstable_scheduleCallback = pt, c.unstable_shouldYield = Zr, c.unstable_wrapCallback = Ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(GE)), GE;
}
var p1;
function q1() {
  return p1 || (p1 = 1, {}.NODE_ENV === "production" ? hy.exports = Ck() : hy.exports = bk()), hy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1;
function Rk() {
  if (v1)
    return ti;
  v1 = 1;
  var c = dn, p = q1();
  function v(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), R = {};
  function w(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (R[n] = r, n = 0; n < r.length; n++)
      E.add(r[n]);
  }
  var V = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, k = {};
  function M(n) {
    return L.call(k, n) ? !0 : L.call(U, n) ? !1 : _.test(n) ? k[n] = !0 : (U[n] = !0, !1);
  }
  function A(n, r, u, l) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function B(n, r, u, l) {
    if (r === null || typeof r > "u" || A(n, r, u, l))
      return !0;
    if (l)
      return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function $(n, r, u, l, f, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    I[n] = new $(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    I[r] = new $(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    I[n] = new $(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    I[n] = new $(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    I[n] = new $(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    I[n] = new $(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    I[n] = new $(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    I[n] = new $(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    I[n] = new $(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var oe = /[\-:]([a-z])/g;
  function le(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      oe,
      le
    );
    I[r] = new $(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(oe, le);
    I[r] = new $(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(oe, le);
    I[r] = new $(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    I[n] = new $(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    I[n] = new $(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function te(n, r, u, l) {
    var f = I.hasOwnProperty(r) ? I[r] : null;
    (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, u, f, l) && (u = null), l || f === null ? M(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : f.mustUseProperty ? n[f.propertyName] = u === null ? f.type === 3 ? !1 : "" : u : (r = f.attributeName, l = f.attributeNamespace, u === null ? n.removeAttribute(r) : (f = f.type, u = f === 3 || f === 4 && u === !0 ? "" : "" + u, l ? n.setAttributeNS(l, r, u) : n.setAttribute(r, u))));
  }
  var J = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), de = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), Ze = Symbol.for("react.provider"), Ue = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), he = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = he && n[he] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var N = Object.assign, ue;
  function Re(n) {
    if (ue === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        ue = r && r[1] || "";
      }
    return `
` + ue + n;
  }
  var at = !1;
  function qe(n, r) {
    if (!n || at)
      return "";
    at = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (Z) {
            var l = Z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Z) {
            l = Z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Z) {
          l = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && l && typeof Z.stack == "string") {
        for (var f = Z.stack.split(`
`), h = l.stack.split(`
`), C = f.length - 1, x = h.length - 1; 1 <= C && 0 <= x && f[C] !== h[x]; )
          x--;
        for (; 1 <= C && 0 <= x; C--, x--)
          if (f[C] !== h[x]) {
            if (C !== 1 || x !== 1)
              do
                if (C--, x--, 0 > x || f[C] !== h[x]) {
                  var z = `
` + f[C].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= C && 0 <= x);
            break;
          }
      }
    } finally {
      at = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Re(n) : "";
  }
  function Rt(n) {
    switch (n.tag) {
      case 5:
        return Re(n.type);
      case 16:
        return Re("Lazy");
      case 13:
        return Re("Suspense");
      case 19:
        return Re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ge:
        return "Fragment";
      case de:
        return "Portal";
      case tt:
        return "Profiler";
      case Ye:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ue:
          return (n.displayName || "Context") + ".Consumer";
        case Ze:
          return (n._context.displayName || "Context") + ".Provider";
        case st:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Dt:
          return r = n.displayName || null, r !== null ? r : dt(n.type) || "Memo";
        case Et:
          r = n._payload, n = n._init;
          try {
            return dt(n(r));
          } catch {
          }
      }
    return null;
  }
  function Ct(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return dt(r);
      case 8:
        return r === Ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function pt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ut(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tr(n) {
    var r = Ut(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), l = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var f = u.get, h = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(C) {
        l = "" + C, h.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(C) {
        l = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Bn(n) {
    n._valueTracker || (n._valueTracker = tr(n));
  }
  function Oe(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), l = "";
    return n && (l = Ut(n) ? n.checked ? "true" : "false" : n.value), n = l, n !== u ? (r.setValue(n), !0) : !1;
  }
  function Zt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function we(n, r) {
    var u = r.checked;
    return N({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function pn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    u = pt(r.value != null ? r.value : u), n._wrapperState = { initialChecked: l, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function bn(n, r) {
    r = r.checked, r != null && te(n, "checked", r, !1);
  }
  function Rn(n, r) {
    bn(n, r);
    var u = pt(r.value), l = r.type;
    if (u != null)
      l === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Zr(n, r.type, u) : r.hasOwnProperty("defaultValue") && Zr(n, r.type, pt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Xr(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function Zr(n, r, u) {
    (r !== "number" || Zt(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var nr = Array.isArray;
  function Tr(n, r, u, l) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < u.length; f++)
        r["$" + u[f]] = !0;
      for (u = 0; u < n.length; u++)
        f = r.hasOwnProperty("$" + n[u].value), n[u].selected !== f && (n[u].selected = f), f && l && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + pt(u), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === u) {
          n[f].selected = !0, l && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Jr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(v(91));
    return N({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(v(92));
        if (nr(u)) {
          if (1 < u.length)
            throw Error(v(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: pt(u) };
  }
  function Sa(n, r) {
    var u = pt(r.value), l = pt(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), l != null && (n.defaultValue = "" + l);
  }
  function fr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ea(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _n(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ea(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var zr, yi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, l, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, l, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (zr = zr || document.createElement("div"), zr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = zr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ea(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Se = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, We = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Se).forEach(function(n) {
    We.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Se[r] = Se[n];
    });
  });
  function bt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || Se.hasOwnProperty(n) && Se[n] ? ("" + r).trim() : r + "px";
  }
  function $t(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var l = u.indexOf("--") === 0, f = bt(u, r[u], l);
        u === "float" && (u = "cssFloat"), l ? n.setProperty(u, f) : n[u] = f;
      }
  }
  var Wt = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Fn(n, r) {
    if (r) {
      if (Wt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(v(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(v(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(v(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(v(62));
    }
  }
  function xn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _r = null;
  function Jt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ur = null, Qt = null, Gt = null;
  function ri(n) {
    if (n = ks(n)) {
      if (typeof Ur != "function")
        throw Error(v(280));
      var r = n.stateNode;
      r && (r = Ge(r), Ur(n.stateNode, n.type, r));
    }
  }
  function za(n) {
    Qt ? Gt ? Gt.push(n) : Gt = [n] : Qt = n;
  }
  function hu() {
    if (Qt) {
      var n = Qt, r = Gt;
      if (Gt = Qt = null, ri(n), r)
        for (n = 0; n < r.length; n++)
          ri(r[n]);
    }
  }
  function oo(n, r) {
    return n(r);
  }
  function Jo() {
  }
  var Fi = !1;
  function mu(n, r, u) {
    if (Fi)
      return n(r, u);
    Fi = !0;
    try {
      return oo(n, r, u);
    } finally {
      Fi = !1, (Qt !== null || Gt !== null) && (Jo(), hu());
    }
  }
  function Ca(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var l = Ge(u);
    if (l === null)
      return null;
    u = l[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (n = n.type, l = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !l;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(v(231, r, typeof u));
    return u;
  }
  var gi = !1;
  if (V)
    try {
      var ba = {};
      Object.defineProperty(ba, "passive", { get: function() {
        gi = !0;
      } }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
    } catch {
      gi = !1;
    }
  function Si(n, r, u, l, f, h, C, x, z) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, Z);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var jr = !1, Ra = null, Ei = !1, D = null, se = { onError: function(n) {
    jr = !0, Ra = n;
  } };
  function Ee(n, r, u, l, f, h, C, x, z) {
    jr = !1, Ra = null, Si.apply(se, arguments);
  }
  function Ne(n, r, u, l, f, h, C, x, z) {
    if (Ee.apply(this, arguments), jr) {
      if (jr) {
        var Z = Ra;
        jr = !1, Ra = null;
      } else
        throw Error(v(198));
      Ei || (Ei = !0, D = Z);
    }
  }
  function mt(n) {
    var r = n, u = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function Nt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (mt(n) !== n)
      throw Error(v(188));
  }
  function Ke(n) {
    var r = n.alternate;
    if (!r) {
      if (r = mt(n), r === null)
        throw Error(v(188));
      return r !== n ? null : n;
    }
    for (var u = n, l = r; ; ) {
      var f = u.return;
      if (f === null)
        break;
      var h = f.alternate;
      if (h === null) {
        if (l = f.return, l !== null) {
          u = l;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === u)
            return yt(f), n;
          if (h === l)
            return yt(f), r;
          h = h.sibling;
        }
        throw Error(v(188));
      }
      if (u.return !== l.return)
        u = f, l = h;
      else {
        for (var C = !1, x = f.child; x; ) {
          if (x === u) {
            C = !0, u = f, l = h;
            break;
          }
          if (x === l) {
            C = !0, l = f, u = h;
            break;
          }
          x = x.sibling;
        }
        if (!C) {
          for (x = h.child; x; ) {
            if (x === u) {
              C = !0, u = h, l = f;
              break;
            }
            if (x === l) {
              C = !0, l = h, u = f;
              break;
            }
            x = x.sibling;
          }
          if (!C)
            throw Error(v(189));
        }
      }
      if (u.alternate !== l)
        throw Error(v(190));
    }
    if (u.tag !== 3)
      throw Error(v(188));
    return u.stateNode.current === u ? n : r;
  }
  function $n(n) {
    return n = Ke(n), n !== null ? vn(n) : null;
  }
  function vn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = vn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var hn = p.unstable_scheduleCallback, dr = p.unstable_cancelCallback, Ci = p.unstable_shouldYield, el = p.unstable_requestPaint, jt = p.unstable_now, dd = p.unstable_getCurrentPriorityLevel, ai = p.unstable_ImmediatePriority, Tt = p.unstable_UserBlockingPriority, bi = p.unstable_NormalPriority, yu = p.unstable_LowPriority, tl = p.unstable_IdlePriority, gu = null, ta = null;
  function ps(n) {
    if (ta && typeof ta.onCommitFiberRoot == "function")
      try {
        ta.onCommitFiberRoot(gu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Pr = Math.clz32 ? Math.clz32 : Ec, vs = Math.log, hs = Math.LN2;
  function Ec(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (vs(n) / hs | 0) | 0;
  }
  var nl = 64, Su = 4194304;
  function ii(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Fr(n, r) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var l = 0, f = n.suspendedLanes, h = n.pingedLanes, C = u & 268435455;
    if (C !== 0) {
      var x = C & ~f;
      x !== 0 ? l = ii(x) : (h &= C, h !== 0 && (l = ii(h)));
    } else
      C = u & ~f, C !== 0 ? l = ii(C) : h !== 0 && (l = ii(h));
    if (l === 0)
      return 0;
    if (r !== 0 && r !== l && !(r & f) && (f = l & -l, h = r & -r, f >= h || f === 16 && (h & 4194240) !== 0))
      return r;
    if (l & 4 && (l |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= l; 0 < r; )
        u = 31 - Pr(r), f = 1 << u, l |= n[u], r &= ~f;
    return l;
  }
  function Eu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cu(n, r) {
    for (var u = n.suspendedLanes, l = n.pingedLanes, f = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Pr(h), x = 1 << C, z = f[C];
      z === -1 ? (!(x & u) || x & l) && (f[C] = Eu(x, r)) : z <= r && (n.expiredLanes |= x), h &= ~x;
    }
  }
  function bu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function rl() {
    var n = nl;
    return nl <<= 1, !(nl & 4194240) && (nl = 64), n;
  }
  function al(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function Vi(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Pr(r), n[r] = u;
  }
  function pd(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var f = 31 - Pr(u), h = 1 << f;
      r[f] = 0, l[f] = -1, n[f] = -1, u &= ~h;
    }
  }
  function Ri(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var l = 31 - Pr(u), f = 1 << l;
      f & r | n[l] & r && (n[l] |= r), u &= ~f;
    }
  }
  var Ht = 0;
  function il(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var lo, ul, Pt, ol, ll, ct = !1, so = [], On = null, na = null, Vr = null, Ru = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), qt = [], Cc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ra(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        Vr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ru.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(r.pointerId);
    }
  }
  function rr(n, r, u, l, f, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: l, nativeEvent: h, targetContainers: [f] }, r !== null && (r = ks(r), r !== null && ul(r)), n) : (n.eventSystemFlags |= l, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Ti(n, r, u, l, f) {
    switch (r) {
      case "focusin":
        return On = rr(On, n, r, u, l, f), !0;
      case "dragenter":
        return na = rr(na, n, r, u, l, f), !0;
      case "mouseover":
        return Vr = rr(Vr, n, r, u, l, f), !0;
      case "pointerover":
        var h = f.pointerId;
        return Ru.set(h, rr(Ru.get(h) || null, n, r, u, l, f)), !0;
      case "gotpointercapture":
        return h = f.pointerId, Ln.set(h, rr(Ln.get(h) || null, n, r, u, l, f)), !0;
    }
    return !1;
  }
  function bc(n) {
    var r = Fa(n.target);
    if (r !== null) {
      var u = mt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = Nt(u), r !== null) {
            n.blockedOn = r, ll(n.priority, function() {
              Pt(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Hi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = cl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var l = new u.constructor(u.type, u);
        _r = l, u.target.dispatchEvent(l), _r = null;
      } else
        return r = ks(u), r !== null && ul(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function Tu(n, r, u) {
    Hi(n) && u.delete(r);
  }
  function Rc() {
    ct = !1, On !== null && Hi(On) && (On = null), na !== null && Hi(na) && (na = null), Vr !== null && Hi(Vr) && (Vr = null), Ru.forEach(Tu), Ln.forEach(Tu);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ct || (ct = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Rc)));
  }
  function wu(n) {
    function r(f) {
      return Ua(f, n);
    }
    if (0 < so.length) {
      Ua(so[0], n);
      for (var u = 1; u < so.length; u++) {
        var l = so[u];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (On !== null && Ua(On, n), na !== null && Ua(na, n), Vr !== null && Ua(Vr, n), Ru.forEach(r), Ln.forEach(r), u = 0; u < qt.length; u++)
      l = qt[u], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < qt.length && (u = qt[0], u.blockedOn === null); )
      bc(u), u.blockedOn === null && qt.shift();
  }
  var _u = J.ReactCurrentBatchConfig, ja = !0;
  function sl(n, r, u, l) {
    var f = Ht, h = _u.transition;
    _u.transition = null;
    try {
      Ht = 1, Ou(n, r, u, l);
    } finally {
      Ht = f, _u.transition = h;
    }
  }
  function xu(n, r, u, l) {
    var f = Ht, h = _u.transition;
    _u.transition = null;
    try {
      Ht = 4, Ou(n, r, u, l);
    } finally {
      Ht = f, _u.transition = h;
    }
  }
  function Ou(n, r, u, l) {
    if (ja) {
      var f = cl(n, r, u, l);
      if (f === null)
        Mc(n, r, l, co, u), ra(n, l);
      else if (Ti(f, n, r, u, l))
        l.stopPropagation();
      else if (ra(n, l), r & 4 && -1 < Cc.indexOf(n)) {
        for (; f !== null; ) {
          var h = ks(f);
          if (h !== null && lo(h), h = cl(n, r, u, l), h === null && Mc(n, r, l, co, u), h === f)
            break;
          f = h;
        }
        f !== null && l.stopPropagation();
      } else
        Mc(n, r, l, null, u);
    }
  }
  var co = null;
  function cl(n, r, u, l) {
    if (co = null, n = Jt(l), n = Fa(n), n !== null)
      if (r = mt(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = Nt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return co = n, null;
  }
  function ms(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dd()) {
          case ai:
            return 1;
          case Tt:
            return 4;
          case bi:
          case yu:
            return 16;
          case tl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, S = null, O = null;
  function K() {
    if (O)
      return O;
    var n, r = S, u = r.length, l, f = "value" in ui ? ui.value : ui.textContent, h = f.length;
    for (n = 0; n < u && r[n] === f[n]; n++)
      ;
    var C = u - n;
    for (l = 1; l <= C && r[u - l] === f[h - l]; l++)
      ;
    return O = f.slice(n, 1 < l ? 1 - l : void 0);
  }
  function ee(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function me() {
    return !0;
  }
  function nt() {
    return !1;
  }
  function Te(n) {
    function r(u, l, f, h, C) {
      this._reactName = u, this._targetInst = f, this.type = l, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (u = n[x], this[x] = u ? u(h) : h[x]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? me : nt, this.isPropagationStopped = nt, this;
    }
    return N(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = me);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = me);
    }, persist: function() {
    }, isPersistent: me }), r;
  }
  var Je = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, wt = Te(Je), Ft = N({}, Je, { view: 0, detail: 0 }), ln = Te(Ft), en, sn, mn, kt = N({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== mn && (mn && n.type === "mousemove" ? (en = n.screenX - mn.screenX, sn = n.screenY - mn.screenY) : sn = en = 0, mn = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : sn;
  } }), Ii = Te(kt), fl = N({}, kt, { dataTransfer: 0 }), ys = Te(fl), vd = N({}, Ft, { relatedTarget: 0 }), oi = Te(vd), gs = N({}, Je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ss = Te(gs), hd = N({}, Je, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), by = Te(hd), Ry = N({}, Je, { data: 0 }), md = Te(Ry), yd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, kv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Mv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Nv[n]) ? !!r[n] : !1;
  }
  function gd() {
    return Mv;
  }
  var Bi = N({}, Ft, { key: function(n) {
    if (n.key) {
      var r = yd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = ee(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(n) {
    return n.type === "keypress" ? ee(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ee(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ty = Te(Bi), Sd = N({}, kt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tc = Te(Sd), Ed = N({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), wy = Te(Ed), wc = N({}, Je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lv = Te(wc), aa = N({}, kt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $i = Te(aa), Yn = [9, 13, 27, 32], li = V && "CompositionEvent" in window, fo = null;
  V && "documentMode" in document && (fo = document.documentMode);
  var _c = V && "TextEvent" in window && !fo, Av = V && (!li || fo && 8 < fo && 11 >= fo), dl = String.fromCharCode(32), zv = !1;
  function Uv(n, r) {
    switch (n) {
      case "keyup":
        return Yn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pl = !1;
  function _y(n, r) {
    switch (n) {
      case "compositionend":
        return xc(r);
      case "keypress":
        return r.which !== 32 ? null : (zv = !0, dl);
      case "textInput":
        return n = r.data, n === dl && zv ? null : n;
      default:
        return null;
    }
  }
  function xy(n, r) {
    if (pl)
      return n === "compositionend" || !li && Uv(n, r) ? (n = K(), O = S = ui = null, pl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Av && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var jv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!jv[n.type] : r === "textarea";
  }
  function Fv(n, r, u, l) {
    za(l), r = xs(r, "onChange"), 0 < r.length && (u = new wt("onChange", "change", null, u, l), n.push({ event: u, listeners: r }));
  }
  var Es = null, vl = null;
  function hl(n) {
    Nc(n, 0);
  }
  function ml(n) {
    var r = gl(n);
    if (Oe(r))
      return n;
  }
  function Vv(n, r) {
    if (n === "change")
      return r;
  }
  var Cd = !1;
  if (V) {
    var bd;
    if (V) {
      var Rd = "oninput" in document;
      if (!Rd) {
        var Hv = document.createElement("div");
        Hv.setAttribute("oninput", "return;"), Rd = typeof Hv.oninput == "function";
      }
      bd = Rd;
    } else
      bd = !1;
    Cd = bd && (!document.documentMode || 9 < document.documentMode);
  }
  function Iv() {
    Es && (Es.detachEvent("onpropertychange", Bv), vl = Es = null);
  }
  function Bv(n) {
    if (n.propertyName === "value" && ml(vl)) {
      var r = [];
      Fv(r, vl, n, Jt(n)), mu(hl, r);
    }
  }
  function Oy(n, r, u) {
    n === "focusin" ? (Iv(), Es = r, vl = u, Es.attachEvent("onpropertychange", Bv)) : n === "focusout" && Iv();
  }
  function Dy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ml(vl);
  }
  function ky(n, r) {
    if (n === "click")
      return ml(r);
  }
  function $v(n, r) {
    if (n === "input" || n === "change")
      return ml(r);
  }
  function Ny(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Pa = typeof Object.is == "function" ? Object.is : Ny;
  function Cs(n, r) {
    if (Pa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), l = Object.keys(r);
    if (u.length !== l.length)
      return !1;
    for (l = 0; l < u.length; l++) {
      var f = u[l];
      if (!L.call(r, f) || !Pa(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function Yv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Wv(n, r) {
    var u = Yv(n);
    n = 0;
    for (var l; u; ) {
      if (u.nodeType === 3) {
        if (l = n + u.textContent.length, n <= r && l >= r)
          return { node: u, offset: r - n };
        n = l;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Yv(u);
    }
  }
  function Qv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Qv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Oc() {
    for (var n = window, r = Zt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = Zt(n.document);
    }
    return r;
  }
  function Yi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dc(n) {
    var r = Oc(), u = n.focusedElem, l = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Qv(u.ownerDocument.documentElement, u)) {
      if (l !== null && Yi(u)) {
        if (r = l.start, n = l.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = u.textContent.length, h = Math.min(l.start, f);
          l = l.end === void 0 ? h : Math.min(l.end, f), !n.extend && h > l && (f = l, l = h, h = f), f = Wv(u, h);
          var C = Wv(
            u,
            l
          );
          f && C && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), h > l ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Gv = V && "documentMode" in document && 11 >= document.documentMode, si = null, Td = null, bs = null, wd = !1;
  function qv(n, r, u) {
    var l = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    wd || si == null || si !== Zt(l) || (l = si, "selectionStart" in l && Yi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), bs && Cs(bs, l) || (bs = l, l = xs(Td, "onSelect"), 0 < l.length && (r = new wt("onSelect", "select", null, r, u), n.push({ event: r, listeners: l }), r.target = si)));
  }
  function kc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var po = { animationend: kc("Animation", "AnimationEnd"), animationiteration: kc("Animation", "AnimationIteration"), animationstart: kc("Animation", "AnimationStart"), transitionend: kc("Transition", "TransitionEnd") }, _d = {}, xd = {};
  V && (xd = document.createElement("div").style, "AnimationEvent" in window || (delete po.animationend.animation, delete po.animationiteration.animation, delete po.animationstart.animation), "TransitionEvent" in window || delete po.transitionend.transition);
  function ar(n) {
    if (_d[n])
      return _d[n];
    if (!po[n])
      return n;
    var r = po[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in xd)
        return _d[n] = r[u];
    return n;
  }
  var Od = ar("animationend"), Kv = ar("animationiteration"), Xv = ar("animationstart"), Zv = ar("transitionend"), Jv = /* @__PURE__ */ new Map(), eh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wi(n, r) {
    Jv.set(n, r), w(r, [n]);
  }
  for (var Rs = 0; Rs < eh.length; Rs++) {
    var vo = eh[Rs], My = vo.toLowerCase(), Ts = vo[0].toUpperCase() + vo.slice(1);
    Wi(My, "on" + Ts);
  }
  Wi(Od, "onAnimationEnd"), Wi(Kv, "onAnimationIteration"), Wi(Xv, "onAnimationStart"), Wi("dblclick", "onDoubleClick"), Wi("focusin", "onFocus"), Wi("focusout", "onBlur"), Wi(Zv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));
  function th(n, r, u) {
    var l = n.type || "unknown-event";
    n.currentTarget = u, Ne(l, r, void 0, n), n.currentTarget = null;
  }
  function Nc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var l = n[u], f = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var C = l.length - 1; 0 <= C; C--) {
            var x = l[C], z = x.instance, Z = x.currentTarget;
            if (x = x.listener, z !== h && f.isPropagationStopped())
              break e;
            th(f, x, Z), h = z;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (x = l[C], z = x.instance, Z = x.currentTarget, x = x.listener, z !== h && f.isPropagationStopped())
              break e;
            th(f, x, Z), h = z;
          }
      }
    }
    if (Ei)
      throw n = D, Ei = !1, D = null, n;
  }
  function cn(n, r) {
    var u = r[zd];
    u === void 0 && (u = r[zd] = /* @__PURE__ */ new Set());
    var l = n + "__bubble";
    u.has(l) || (nh(r, n, 2, !1), u.add(l));
  }
  function Du(n, r, u) {
    var l = 0;
    r && (l |= 4), nh(u, n, l, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function yl(n) {
    if (!n[Qi]) {
      n[Qi] = !0, E.forEach(function(u) {
        u !== "selectionchange" && (Ly.has(u) || Du(u, !1, n), Du(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Du("selectionchange", !1, r));
    }
  }
  function nh(n, r, u, l) {
    switch (ms(r)) {
      case 1:
        var f = sl;
        break;
      case 4:
        f = xu;
        break;
      default:
        f = Ou;
    }
    u = f.bind(null, r, u, n), f = void 0, !gi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), l ? f !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: f }) : n.addEventListener(r, u, !0) : f !== void 0 ? n.addEventListener(r, u, { passive: f }) : n.addEventListener(r, u, !1);
  }
  function Mc(n, r, u, l, f) {
    var h = l;
    if (!(r & 1) && !(r & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var C = l.tag;
          if (C === 3 || C === 4) {
            var x = l.stateNode.containerInfo;
            if (x === f || x.nodeType === 8 && x.parentNode === f)
              break;
            if (C === 4)
              for (C = l.return; C !== null; ) {
                var z = C.tag;
                if ((z === 3 || z === 4) && (z = C.stateNode.containerInfo, z === f || z.nodeType === 8 && z.parentNode === f))
                  return;
                C = C.return;
              }
            for (; x !== null; ) {
              if (C = Fa(x), C === null)
                return;
              if (z = C.tag, z === 5 || z === 6) {
                l = h = C;
                continue e;
              }
              x = x.parentNode;
            }
          }
          l = l.return;
        }
    mu(function() {
      var Z = h, fe = Jt(u), pe = [];
      e: {
        var ce = Jv.get(n);
        if (ce !== void 0) {
          var De = wt, je = n;
          switch (n) {
            case "keypress":
              if (ee(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              De = Ty;
              break;
            case "focusin":
              je = "focus", De = oi;
              break;
            case "focusout":
              je = "blur", De = oi;
              break;
            case "beforeblur":
            case "afterblur":
              De = oi;
              break;
            case "click":
              if (u.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              De = Ii;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              De = ys;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              De = wy;
              break;
            case Od:
            case Kv:
            case Xv:
              De = Ss;
              break;
            case Zv:
              De = Lv;
              break;
            case "scroll":
              De = ln;
              break;
            case "wheel":
              De = $i;
              break;
            case "copy":
            case "cut":
            case "paste":
              De = by;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              De = Tc;
          }
          var He = (r & 4) !== 0, Hn = !He && n === "scroll", Y = He ? ce !== null ? ce + "Capture" : null : ce;
          He = [];
          for (var P = Z, G; P !== null; ) {
            G = P;
            var ye = G.stateNode;
            if (G.tag === 5 && ye !== null && (G = ye, Y !== null && (ye = Ca(P, Y), ye != null && He.push(_s(P, ye, G)))), Hn)
              break;
            P = P.return;
          }
          0 < He.length && (ce = new De(ce, je, null, u, fe), pe.push({ event: ce, listeners: He }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", De = n === "mouseout" || n === "pointerout", ce && u !== _r && (je = u.relatedTarget || u.fromElement) && (Fa(je) || je[Gi]))
            break e;
          if ((De || ce) && (ce = fe.window === fe ? fe : (ce = fe.ownerDocument) ? ce.defaultView || ce.parentWindow : window, De ? (je = u.relatedTarget || u.toElement, De = Z, je = je ? Fa(je) : null, je !== null && (Hn = mt(je), je !== Hn || je.tag !== 5 && je.tag !== 6) && (je = null)) : (De = null, je = Z), De !== je)) {
            if (He = Ii, ye = "onMouseLeave", Y = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (He = Tc, ye = "onPointerLeave", Y = "onPointerEnter", P = "pointer"), Hn = De == null ? ce : gl(De), G = je == null ? ce : gl(je), ce = new He(ye, P + "leave", De, u, fe), ce.target = Hn, ce.relatedTarget = G, ye = null, Fa(fe) === Z && (He = new He(Y, P + "enter", je, u, fe), He.target = G, He.relatedTarget = Hn, ye = He), Hn = ye, De && je)
              t: {
                for (He = De, Y = je, P = 0, G = He; G; G = ho(G))
                  P++;
                for (G = 0, ye = Y; ye; ye = ho(ye))
                  G++;
                for (; 0 < P - G; )
                  He = ho(He), P--;
                for (; 0 < G - P; )
                  Y = ho(Y), G--;
                for (; P--; ) {
                  if (He === Y || Y !== null && He === Y.alternate)
                    break t;
                  He = ho(He), Y = ho(Y);
                }
                He = null;
              }
            else
              He = null;
            De !== null && Dd(pe, ce, De, He, !1), je !== null && Hn !== null && Dd(pe, Hn, je, He, !0);
          }
        }
        e: {
          if (ce = Z ? gl(Z) : window, De = ce.nodeName && ce.nodeName.toLowerCase(), De === "select" || De === "input" && ce.type === "file")
            var Ie = Vv;
          else if (Pv(ce))
            if (Cd)
              Ie = $v;
            else {
              Ie = Dy;
              var Pe = Oy;
            }
          else
            (De = ce.nodeName) && De.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && (Ie = ky);
          if (Ie && (Ie = Ie(n, Z))) {
            Fv(pe, Ie, u, fe);
            break e;
          }
          Pe && Pe(n, ce, Z), n === "focusout" && (Pe = ce._wrapperState) && Pe.controlled && ce.type === "number" && Zr(ce, "number", ce.value);
        }
        switch (Pe = Z ? gl(Z) : window, n) {
          case "focusin":
            (Pv(Pe) || Pe.contentEditable === "true") && (si = Pe, Td = Z, bs = null);
            break;
          case "focusout":
            bs = Td = si = null;
            break;
          case "mousedown":
            wd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wd = !1, qv(pe, u, fe);
            break;
          case "selectionchange":
            if (Gv)
              break;
          case "keydown":
          case "keyup":
            qv(pe, u, fe);
        }
        var Qe;
        if (li)
          e: {
            switch (n) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break e;
              case "compositionend":
                lt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break e;
            }
            lt = void 0;
          }
        else
          pl ? Uv(n, u) && (lt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (lt = "onCompositionStart");
        lt && (Av && u.locale !== "ko" && (pl || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && pl && (Qe = K()) : (ui = fe, S = "value" in ui ? ui.value : ui.textContent, pl = !0)), Pe = xs(Z, lt), 0 < Pe.length && (lt = new md(lt, n, null, u, fe), pe.push({ event: lt, listeners: Pe }), Qe ? lt.data = Qe : (Qe = xc(u), Qe !== null && (lt.data = Qe)))), (Qe = _c ? _y(n, u) : xy(n, u)) && (Z = xs(Z, "onBeforeInput"), 0 < Z.length && (fe = new md("onBeforeInput", "beforeinput", null, u, fe), pe.push({ event: fe, listeners: Z }), fe.data = Qe));
      }
      Nc(pe, r);
    });
  }
  function _s(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function xs(n, r) {
    for (var u = r + "Capture", l = []; n !== null; ) {
      var f = n, h = f.stateNode;
      f.tag === 5 && h !== null && (f = h, h = Ca(n, u), h != null && l.unshift(_s(n, h, f)), h = Ca(n, r), h != null && l.push(_s(n, h, f))), n = n.return;
    }
    return l;
  }
  function ho(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dd(n, r, u, l, f) {
    for (var h = r._reactName, C = []; u !== null && u !== l; ) {
      var x = u, z = x.alternate, Z = x.stateNode;
      if (z !== null && z === l)
        break;
      x.tag === 5 && Z !== null && (x = Z, f ? (z = Ca(u, h), z != null && C.unshift(_s(u, z, x))) : f || (z = Ca(u, h), z != null && C.push(_s(u, z, x)))), u = u.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var kd = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function Nd(n) {
    return (typeof n == "string" ? n : "" + n).replace(kd, `
`).replace(Ay, "");
  }
  function Lc(n, r, u) {
    if (r = Nd(r), Nd(n) !== r && u)
      throw Error(v(425));
  }
  function Ac() {
  }
  var Md = null, mo = null;
  function Os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, rh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, Ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(n) {
    return Ld.resolve(null).then(n).catch(zy);
  } : yo;
  function zy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ku(n, r) {
    var u = r, l = 0;
    do {
      var f = u.nextSibling;
      if (n.removeChild(u), f && f.nodeType === 8)
        if (u = f.data, u === "/$") {
          if (l === 0) {
            n.removeChild(f), wu(r);
            return;
          }
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || l++;
      u = f;
    } while (u);
    wu(r);
  }
  function ci(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ds(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Nu = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Nu, go = "__reactProps$" + Nu, Gi = "__reactContainer$" + Nu, zd = "__reactEvents$" + Nu, Uy = "__reactListeners$" + Nu, Ud = "__reactHandles$" + Nu;
  function Fa(n) {
    var r = n[wi];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Gi] || u[wi]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = Ds(n); n !== null; ) {
            if (u = n[wi])
              return u;
            n = Ds(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function ks(n) {
    return n = n[wi] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(v(33));
  }
  function Ge(n) {
    return n[go] || null;
  }
  var Mu = [], yn = -1;
  function gt(n) {
    return { current: n };
  }
  function Yt(n) {
    0 > yn || (n.current = Mu[yn], Mu[yn] = null, yn--);
  }
  function Kt(n, r) {
    yn++, Mu[yn] = n.current, n.current = r;
  }
  var _i = {}, ot = gt(_i), An = gt(!1), ia = _i;
  function Va(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return _i;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {}, h;
    for (h in u)
      f[h] = r[h];
    return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Tn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ha() {
    Yt(An), Yt(ot);
  }
  function Lu(n, r, u) {
    if (ot.current !== _i)
      throw Error(v(168));
    Kt(ot, r), Kt(An, u);
  }
  function Ns(n, r, u) {
    var l = n.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function")
      return u;
    l = l.getChildContext();
    for (var f in l)
      if (!(f in r))
        throw Error(v(108, Ct(n) || "Unknown", f));
    return N({}, u, l);
  }
  function zc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, ia = ot.current, Kt(ot, n), Kt(An, An.current), !0;
  }
  function ah(n, r, u) {
    var l = n.stateNode;
    if (!l)
      throw Error(v(169));
    u ? (n = Ns(n, r, ia), l.__reactInternalMemoizedMergedChildContext = n, Yt(An), Yt(ot), Kt(ot, n)) : Yt(An), Kt(An, u);
  }
  var Ta = null, ir = !1, Ms = !1;
  function jd(n) {
    Ta === null ? Ta = [n] : Ta.push(n);
  }
  function Pd(n) {
    ir = !0, jd(n);
  }
  function ua() {
    if (!Ms && Ta !== null) {
      Ms = !0;
      var n = 0, r = Ht;
      try {
        var u = Ta;
        for (Ht = 1; n < u.length; n++) {
          var l = u[n];
          do
            l = l(!0);
          while (l !== null);
        }
        Ta = null, ir = !1;
      } catch (f) {
        throw Ta !== null && (Ta = Ta.slice(n + 1)), hn(ai, ua), f;
      } finally {
        Ht = r, Ms = !1;
      }
    }
    return null;
  }
  var Au = [], oa = 0, So = null, Sl = 0, la = [], xr = 0, Ia = null, pr = 1, qi = "";
  function wa(n, r) {
    Au[oa++] = Sl, Au[oa++] = So, So = n, Sl = r;
  }
  function Fd(n, r, u) {
    la[xr++] = pr, la[xr++] = qi, la[xr++] = Ia, Ia = n;
    var l = pr;
    n = qi;
    var f = 32 - Pr(l) - 1;
    l &= ~(1 << f), u += 1;
    var h = 32 - Pr(r) + f;
    if (30 < h) {
      var C = f - f % 5;
      h = (l & (1 << C) - 1).toString(32), l >>= C, f -= C, pr = 1 << 32 - Pr(r) + f | u << f | l, qi = h + n;
    } else
      pr = 1 << h | u << f | l, qi = n;
  }
  function Uc(n) {
    n.return !== null && (wa(n, 1), Fd(n, 1, 0));
  }
  function Vd(n) {
    for (; n === So; )
      So = Au[--oa], Au[oa] = null, Sl = Au[--oa], Au[oa] = null;
    for (; n === Ia; )
      Ia = la[--xr], la[xr] = null, qi = la[--xr], la[xr] = null, pr = la[--xr], la[xr] = null;
  }
  var _a = null, sa = null, gn = !1, Ba = null;
  function Hd(n, r) {
    var u = qa(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function ih(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, _a = n, sa = ci(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, _a = n, sa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Ia !== null ? { id: pr, overflow: qi } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = qa(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, _a = n, sa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pc(n) {
    if (gn) {
      var r = sa;
      if (r) {
        var u = r;
        if (!ih(n, r)) {
          if (jc(n))
            throw Error(v(418));
          r = ci(u.nextSibling);
          var l = _a;
          r && ih(n, r) ? Hd(l, u) : (n.flags = n.flags & -4097 | 2, gn = !1, _a = n);
        }
      } else {
        if (jc(n))
          throw Error(v(418));
        n.flags = n.flags & -4097 | 2, gn = !1, _a = n;
      }
    }
  }
  function uh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    _a = n;
  }
  function Fc(n) {
    if (n !== _a)
      return !1;
    if (!gn)
      return uh(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Os(n.type, n.memoizedProps)), r && (r = sa)) {
      if (jc(n))
        throw oh(), Error(v(418));
      for (; r; )
        Hd(n, r), r = ci(r.nextSibling);
    }
    if (uh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(v(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                sa = ci(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        sa = null;
      }
    } else
      sa = _a ? ci(n.stateNode.nextSibling) : null;
    return !0;
  }
  function oh() {
    for (var n = sa; n; )
      n = ci(n.nextSibling);
  }
  function Dn() {
    sa = _a = null, gn = !1;
  }
  function Id(n) {
    Ba === null ? Ba = [n] : Ba.push(n);
  }
  var Vc = J.ReactCurrentBatchConfig;
  function xa(n, r) {
    if (n && n.defaultProps) {
      r = N({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var xi = gt(null), Hc = null, zu = null, Bd = null;
  function $d() {
    Bd = zu = Hc = null;
  }
  function Uu(n) {
    var r = xi.current;
    Yt(xi), n._currentValue = r;
  }
  function ur(n, r, u) {
    for (; n !== null; ) {
      var l = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function Ce(n, r) {
    Hc = n, Bd = zu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Wn = !0), n.firstContext = null);
  }
  function Vn(n) {
    var r = n._currentValue;
    if (Bd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, zu === null) {
        if (Hc === null)
          throw Error(v(308));
        zu = n, Hc.dependencies = { lanes: 0, firstContext: n };
      } else
        zu = zu.next = n;
    return r;
  }
  var vr = null;
  function Yd(n) {
    vr === null ? vr = [n] : vr.push(n);
  }
  function lh(n, r, u, l) {
    var f = r.interleaved;
    return f === null ? (u.next = u, Yd(r)) : (u.next = f.next, f.next = u), r.interleaved = u, Ki(n, l);
  }
  function Ki(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var ju = !1;
  function Wd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Pu(n, r, u) {
    var l = n.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, xt & 2) {
      var f = l.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), l.pending = r, Ki(n, u);
    }
    return f = l.interleaved, f === null ? (r.next = r, Yd(l)) : (r.next = f.next, f.next = r), l.interleaved = r, Ki(n, u);
  }
  function Ic(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, Ri(n, u);
    }
  }
  function Qd(n, r) {
    var u = n.updateQueue, l = n.alternate;
    if (l !== null && (l = l.updateQueue, u === l)) {
      var f = null, h = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var C = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          h === null ? f = h = C : h = h.next = C, u = u.next;
        } while (u !== null);
        h === null ? f = h = r : h = h.next = r;
      } else
        f = h = r;
      u = { baseState: l.baseState, firstBaseUpdate: f, lastBaseUpdate: h, shared: l.shared, effects: l.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function Fu(n, r, u, l) {
    var f = n.updateQueue;
    ju = !1;
    var h = f.firstBaseUpdate, C = f.lastBaseUpdate, x = f.shared.pending;
    if (x !== null) {
      f.shared.pending = null;
      var z = x, Z = z.next;
      z.next = null, C === null ? h = Z : C.next = Z, C = z;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, x = fe.lastBaseUpdate, x !== C && (x === null ? fe.firstBaseUpdate = Z : x.next = Z, fe.lastBaseUpdate = z));
    }
    if (h !== null) {
      var pe = f.baseState;
      C = 0, fe = Z = z = null, x = h;
      do {
        var ce = x.lane, De = x.eventTime;
        if ((l & ce) === ce) {
          fe !== null && (fe = fe.next = {
            eventTime: De,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var je = n, He = x;
            switch (ce = r, De = u, He.tag) {
              case 1:
                if (je = He.payload, typeof je == "function") {
                  pe = je.call(De, pe, ce);
                  break e;
                }
                pe = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = He.payload, ce = typeof je == "function" ? je.call(De, pe, ce) : je, ce == null)
                  break e;
                pe = N({}, pe, ce);
                break e;
              case 2:
                ju = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ce = f.effects, ce === null ? f.effects = [x] : ce.push(x));
        } else
          De = { eventTime: De, lane: ce, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, fe === null ? (Z = fe = De, z = pe) : fe = fe.next = De, C |= ce;
        if (x = x.next, x === null) {
          if (x = f.shared.pending, x === null)
            break;
          ce = x, x = ce.next, ce.next = null, f.lastBaseUpdate = ce, f.shared.pending = null;
        }
      } while (1);
      if (fe === null && (z = pe), f.baseState = z, f.firstBaseUpdate = Z, f.lastBaseUpdate = fe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else
        h === null && (f.shared.lanes = 0);
      tu |= C, n.lanes = C, n.memoizedState = pe;
    }
  }
  function Eo(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var l = n[r], f = l.callback;
        if (f !== null) {
          if (l.callback = null, l = u, typeof f != "function")
            throw Error(v(191, f));
          f.call(l);
        }
      }
  }
  var sh = new c.Component().refs;
  function Gd(n, r, u, l) {
    r = n.memoizedState, u = u(l, r), u = u == null ? r : N({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Bc = { isMounted: function(n) {
    return (n = n._reactInternals) ? mt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var l = Nr(), f = Qn(n), h = Xi(l, f);
    h.payload = r, u != null && (h.callback = u), r = Pu(n, h, f), r !== null && (Mr(r, n, f, l), Ic(r, n, f));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var l = Nr(), f = Qn(n), h = Xi(l, f);
    h.tag = 1, h.payload = r, u != null && (h.callback = u), r = Pu(n, h, f), r !== null && (Mr(r, n, f, l), Ic(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = Nr(), l = Qn(n), f = Xi(u, l);
    f.tag = 2, r != null && (f.callback = r), r = Pu(n, f, l), r !== null && (Mr(r, n, l, u), Ic(r, n, l));
  } };
  function ch(n, r, u, l, f, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, h, C) : r.prototype && r.prototype.isPureReactComponent ? !Cs(u, l) || !Cs(f, h) : !0;
  }
  function fh(n, r, u) {
    var l = !1, f = _i, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Vn(h) : (f = Tn(r) ? ia : ot.current, l = r.contextTypes, h = (l = l != null) ? Va(n, f) : _i), r = new r(u, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Bc, n.stateNode = r, r._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function dh(n, r, u, l) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, l), r.state !== n && Bc.enqueueReplaceState(r, r.state, null);
  }
  function $c(n, r, u, l) {
    var f = n.stateNode;
    f.props = u, f.state = n.memoizedState, f.refs = sh, Wd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? f.context = Vn(h) : (h = Tn(r) ? ia : ot.current, f.context = Va(n, h)), f.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Gd(n, r, h, u), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Bc.enqueueReplaceState(f, f.state, null), Fu(n, u, f, l), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function El(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(v(309));
          var l = u.stateNode;
        }
        if (!l)
          throw Error(v(147, n));
        var f = l, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var x = f.refs;
          x === sh && (x = f.refs = {}), C === null ? delete x[h] : x[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(v(284));
      if (!u._owner)
        throw Error(v(290, n));
    }
    return n;
  }
  function Yc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(v(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ph(n) {
    var r = n._init;
    return r(n._payload);
  }
  function vh(n) {
    function r(Y, P) {
      if (n) {
        var G = Y.deletions;
        G === null ? (Y.deletions = [P], Y.flags |= 16) : G.push(P);
      }
    }
    function u(Y, P) {
      if (!n)
        return null;
      for (; P !== null; )
        r(Y, P), P = P.sibling;
      return null;
    }
    function l(Y, P) {
      for (Y = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? Y.set(P.key, P) : Y.set(P.index, P), P = P.sibling;
      return Y;
    }
    function f(Y, P) {
      return Y = Qu(Y, P), Y.index = 0, Y.sibling = null, Y;
    }
    function h(Y, P, G) {
      return Y.index = G, n ? (G = Y.alternate, G !== null ? (G = G.index, G < P ? (Y.flags |= 2, P) : G) : (Y.flags |= 2, P)) : (Y.flags |= 1048576, P);
    }
    function C(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function x(Y, P, G, ye) {
      return P === null || P.tag !== 6 ? (P = Xs(G, Y.mode, ye), P.return = Y, P) : (P = f(P, G), P.return = Y, P);
    }
    function z(Y, P, G, ye) {
      var Ie = G.type;
      return Ie === ge ? fe(Y, P, G.props.children, ye, G.key) : P !== null && (P.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === Et && ph(Ie) === P.type) ? (ye = f(P, G.props), ye.ref = El(Y, P, G), ye.return = Y, ye) : (ye = Tf(G.type, G.key, G.props, null, Y.mode, ye), ye.ref = El(Y, P, G), ye.return = Y, ye);
    }
    function Z(Y, P, G, ye) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== G.containerInfo || P.stateNode.implementation !== G.implementation ? (P = Fo(G, Y.mode, ye), P.return = Y, P) : (P = f(P, G.children || []), P.return = Y, P);
    }
    function fe(Y, P, G, ye, Ie) {
      return P === null || P.tag !== 7 ? (P = Po(G, Y.mode, ye, Ie), P.return = Y, P) : (P = f(P, G), P.return = Y, P);
    }
    function pe(Y, P, G) {
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return P = Xs("" + P, Y.mode, G), P.return = Y, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case H:
            return G = Tf(P.type, P.key, P.props, null, Y.mode, G), G.ref = El(Y, null, P), G.return = Y, G;
          case de:
            return P = Fo(P, Y.mode, G), P.return = Y, P;
          case Et:
            var ye = P._init;
            return pe(Y, ye(P._payload), G);
        }
        if (nr(P) || Ve(P))
          return P = Po(P, Y.mode, G, null), P.return = Y, P;
        Yc(Y, P);
      }
      return null;
    }
    function ce(Y, P, G, ye) {
      var Ie = P !== null ? P.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return Ie !== null ? null : x(Y, P, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case H:
            return G.key === Ie ? z(Y, P, G, ye) : null;
          case de:
            return G.key === Ie ? Z(Y, P, G, ye) : null;
          case Et:
            return Ie = G._init, ce(
              Y,
              P,
              Ie(G._payload),
              ye
            );
        }
        if (nr(G) || Ve(G))
          return Ie !== null ? null : fe(Y, P, G, ye, null);
        Yc(Y, G);
      }
      return null;
    }
    function De(Y, P, G, ye, Ie) {
      if (typeof ye == "string" && ye !== "" || typeof ye == "number")
        return Y = Y.get(G) || null, x(P, Y, "" + ye, Ie);
      if (typeof ye == "object" && ye !== null) {
        switch (ye.$$typeof) {
          case H:
            return Y = Y.get(ye.key === null ? G : ye.key) || null, z(P, Y, ye, Ie);
          case de:
            return Y = Y.get(ye.key === null ? G : ye.key) || null, Z(P, Y, ye, Ie);
          case Et:
            var Pe = ye._init;
            return De(Y, P, G, Pe(ye._payload), Ie);
        }
        if (nr(ye) || Ve(ye))
          return Y = Y.get(G) || null, fe(P, Y, ye, Ie, null);
        Yc(P, ye);
      }
      return null;
    }
    function je(Y, P, G, ye) {
      for (var Ie = null, Pe = null, Qe = P, lt = P = 0, sr = null; Qe !== null && lt < G.length; lt++) {
        Qe.index > lt ? (sr = Qe, Qe = null) : sr = Qe.sibling;
        var Vt = ce(Y, Qe, G[lt], ye);
        if (Vt === null) {
          Qe === null && (Qe = sr);
          break;
        }
        n && Qe && Vt.alternate === null && r(Y, Qe), P = h(Vt, P, lt), Pe === null ? Ie = Vt : Pe.sibling = Vt, Pe = Vt, Qe = sr;
      }
      if (lt === G.length)
        return u(Y, Qe), gn && wa(Y, lt), Ie;
      if (Qe === null) {
        for (; lt < G.length; lt++)
          Qe = pe(Y, G[lt], ye), Qe !== null && (P = h(Qe, P, lt), Pe === null ? Ie = Qe : Pe.sibling = Qe, Pe = Qe);
        return gn && wa(Y, lt), Ie;
      }
      for (Qe = l(Y, Qe); lt < G.length; lt++)
        sr = De(Qe, Y, lt, G[lt], ye), sr !== null && (n && sr.alternate !== null && Qe.delete(sr.key === null ? lt : sr.key), P = h(sr, P, lt), Pe === null ? Ie = sr : Pe.sibling = sr, Pe = sr);
      return n && Qe.forEach(function(Gu) {
        return r(Y, Gu);
      }), gn && wa(Y, lt), Ie;
    }
    function He(Y, P, G, ye) {
      var Ie = Ve(G);
      if (typeof Ie != "function")
        throw Error(v(150));
      if (G = Ie.call(G), G == null)
        throw Error(v(151));
      for (var Pe = Ie = null, Qe = P, lt = P = 0, sr = null, Vt = G.next(); Qe !== null && !Vt.done; lt++, Vt = G.next()) {
        Qe.index > lt ? (sr = Qe, Qe = null) : sr = Qe.sibling;
        var Gu = ce(Y, Qe, Vt.value, ye);
        if (Gu === null) {
          Qe === null && (Qe = sr);
          break;
        }
        n && Qe && Gu.alternate === null && r(Y, Qe), P = h(Gu, P, lt), Pe === null ? Ie = Gu : Pe.sibling = Gu, Pe = Gu, Qe = sr;
      }
      if (Vt.done)
        return u(
          Y,
          Qe
        ), gn && wa(Y, lt), Ie;
      if (Qe === null) {
        for (; !Vt.done; lt++, Vt = G.next())
          Vt = pe(Y, Vt.value, ye), Vt !== null && (P = h(Vt, P, lt), Pe === null ? Ie = Vt : Pe.sibling = Vt, Pe = Vt);
        return gn && wa(Y, lt), Ie;
      }
      for (Qe = l(Y, Qe); !Vt.done; lt++, Vt = G.next())
        Vt = De(Qe, Y, lt, Vt.value, ye), Vt !== null && (n && Vt.alternate !== null && Qe.delete(Vt.key === null ? lt : Vt.key), P = h(Vt, P, lt), Pe === null ? Ie = Vt : Pe.sibling = Vt, Pe = Vt);
      return n && Qe.forEach(function(ng) {
        return r(Y, ng);
      }), gn && wa(Y, lt), Ie;
    }
    function Hn(Y, P, G, ye) {
      if (typeof G == "object" && G !== null && G.type === ge && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case H:
            e: {
              for (var Ie = G.key, Pe = P; Pe !== null; ) {
                if (Pe.key === Ie) {
                  if (Ie = G.type, Ie === ge) {
                    if (Pe.tag === 7) {
                      u(Y, Pe.sibling), P = f(Pe, G.props.children), P.return = Y, Y = P;
                      break e;
                    }
                  } else if (Pe.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === Et && ph(Ie) === Pe.type) {
                    u(Y, Pe.sibling), P = f(Pe, G.props), P.ref = El(Y, Pe, G), P.return = Y, Y = P;
                    break e;
                  }
                  u(Y, Pe);
                  break;
                } else
                  r(Y, Pe);
                Pe = Pe.sibling;
              }
              G.type === ge ? (P = Po(G.props.children, Y.mode, ye, G.key), P.return = Y, Y = P) : (ye = Tf(G.type, G.key, G.props, null, Y.mode, ye), ye.ref = El(Y, P, G), ye.return = Y, Y = ye);
            }
            return C(Y);
          case de:
            e: {
              for (Pe = G.key; P !== null; ) {
                if (P.key === Pe)
                  if (P.tag === 4 && P.stateNode.containerInfo === G.containerInfo && P.stateNode.implementation === G.implementation) {
                    u(Y, P.sibling), P = f(P, G.children || []), P.return = Y, Y = P;
                    break e;
                  } else {
                    u(Y, P);
                    break;
                  }
                else
                  r(Y, P);
                P = P.sibling;
              }
              P = Fo(G, Y.mode, ye), P.return = Y, Y = P;
            }
            return C(Y);
          case Et:
            return Pe = G._init, Hn(Y, P, Pe(G._payload), ye);
        }
        if (nr(G))
          return je(Y, P, G, ye);
        if (Ve(G))
          return He(Y, P, G, ye);
        Yc(Y, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, P !== null && P.tag === 6 ? (u(Y, P.sibling), P = f(P, G), P.return = Y, Y = P) : (u(Y, P), P = Xs(G, Y.mode, ye), P.return = Y, Y = P), C(Y)) : u(Y, P);
    }
    return Hn;
  }
  var Cl = vh(!0), hh = vh(!1), Ls = {}, fi = gt(Ls), As = gt(Ls), bl = gt(Ls);
  function Co(n) {
    if (n === Ls)
      throw Error(v(174));
    return n;
  }
  function qd(n, r) {
    switch (Kt(bl, r), Kt(As, n), Kt(fi, Ls), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _n(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _n(r, n);
    }
    Yt(fi), Kt(fi, r);
  }
  function Vu() {
    Yt(fi), Yt(As), Yt(bl);
  }
  function et(n) {
    Co(bl.current);
    var r = Co(fi.current), u = _n(r, n.type);
    r !== u && (Kt(As, n), Kt(fi, u));
  }
  function _t(n) {
    As.current === n && (Yt(fi), Yt(As));
  }
  var rt = gt(0);
  function kn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var $a = [];
  function Wc() {
    for (var n = 0; n < $a.length; n++)
      $a[n]._workInProgressVersionPrimary = null;
    $a.length = 0;
  }
  var Qc = J.ReactCurrentDispatcher, Kd = J.ReactCurrentBatchConfig, bo = 0, Sn = null, ae = null, Mt = null, it = !1, Oi = !1, Oa = 0, Ro = 0;
  function En() {
    throw Error(v(321));
  }
  function To(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!Pa(n[u], r[u]))
        return !1;
    return !0;
  }
  function Hu(n, r, u, l, f, h) {
    if (bo = h, Sn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Qc.current = n === null || n.memoizedState === null ? Py : Fy, n = u(l, f), Oi) {
      h = 0;
      do {
        if (Oi = !1, Oa = 0, 25 <= h)
          throw Error(v(301));
        h += 1, Mt = ae = null, r.updateQueue = null, Qc.current = Zd, n = u(l, f);
      } while (Oi);
    }
    if (Qc.current = cf, r = ae !== null && ae.next !== null, bo = 0, Mt = ae = Sn = null, it = !1, r)
      throw Error(v(300));
    return n;
  }
  function wo() {
    var n = Oa !== 0;
    return Oa = 0, n;
  }
  function Ya() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Mt === null ? Sn.memoizedState = Mt = n : Mt = Mt.next = n, Mt;
  }
  function ca() {
    if (ae === null) {
      var n = Sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ae.next;
    var r = Mt === null ? Sn.memoizedState : Mt.next;
    if (r !== null)
      Mt = r, ae = n;
    else {
      if (n === null)
        throw Error(v(310));
      ae = n, n = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, Mt === null ? Sn.memoizedState = Mt = n : Mt = Mt.next = n;
    }
    return Mt;
  }
  function _o(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zs(n) {
    var r = ca(), u = r.queue;
    if (u === null)
      throw Error(v(311));
    u.lastRenderedReducer = n;
    var l = ae, f = l.baseQueue, h = u.pending;
    if (h !== null) {
      if (f !== null) {
        var C = f.next;
        f.next = h.next, h.next = C;
      }
      l.baseQueue = f = h, u.pending = null;
    }
    if (f !== null) {
      h = f.next, l = l.baseState;
      var x = C = null, z = null, Z = h;
      do {
        var fe = Z.lane;
        if ((bo & fe) === fe)
          z !== null && (z = z.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), l = Z.hasEagerState ? Z.eagerState : n(l, Z.action);
        else {
          var pe = {
            lane: fe,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          z === null ? (x = z = pe, C = l) : z = z.next = pe, Sn.lanes |= fe, tu |= fe;
        }
        Z = Z.next;
      } while (Z !== null && Z !== h);
      z === null ? C = l : z.next = x, Pa(l, r.memoizedState) || (Wn = !0), r.memoizedState = l, r.baseState = C, r.baseQueue = z, u.lastRenderedState = l;
    }
    if (n = u.interleaved, n !== null) {
      f = n;
      do
        h = f.lane, Sn.lanes |= h, tu |= h, f = f.next;
      while (f !== n);
    } else
      f === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Us(n) {
    var r = ca(), u = r.queue;
    if (u === null)
      throw Error(v(311));
    u.lastRenderedReducer = n;
    var l = u.dispatch, f = u.pending, h = r.memoizedState;
    if (f !== null) {
      u.pending = null;
      var C = f = f.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== f);
      Pa(h, r.memoizedState) || (Wn = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), u.lastRenderedState = h;
    }
    return [h, l];
  }
  function Gc() {
  }
  function qc(n, r) {
    var u = Sn, l = ca(), f = r(), h = !Pa(l.memoizedState, f);
    if (h && (l.memoizedState = f, Wn = !0), l = l.queue, js(Zc.bind(null, u, l, n), [n]), l.getSnapshot !== r || h || Mt !== null && Mt.memoizedState.tag & 1) {
      if (u.flags |= 2048, xo(9, Xc.bind(null, u, l, f, r), void 0, null), Nn === null)
        throw Error(v(349));
      bo & 30 || Kc(u, r, f);
    }
    return f;
  }
  function Kc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Sn.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Xc(n, r, u, l) {
    r.value = u, r.getSnapshot = l, Jc(r) && ef(n);
  }
  function Zc(n, r, u) {
    return u(function() {
      Jc(r) && ef(n);
    });
  }
  function Jc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !Pa(n, u);
    } catch {
      return !0;
    }
  }
  function ef(n) {
    var r = Ki(n, 1);
    r !== null && Mr(r, n, 1, -1);
  }
  function tf(n) {
    var r = Ya();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _o, lastRenderedState: n }, r.queue = n, n = n.dispatch = sf.bind(null, Sn, n), [r.memoizedState, n];
  }
  function xo(n, r, u, l) {
    return n = { tag: n, create: r, destroy: u, deps: l, next: null }, r = Sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Sn.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (l = u.next, u.next = n, n.next = l, r.lastEffect = n)), n;
  }
  function nf() {
    return ca().memoizedState;
  }
  function Oo(n, r, u, l) {
    var f = Ya();
    Sn.flags |= n, f.memoizedState = xo(1 | r, u, void 0, l === void 0 ? null : l);
  }
  function Zi(n, r, u, l) {
    var f = ca();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (ae !== null) {
      var C = ae.memoizedState;
      if (h = C.destroy, l !== null && To(l, C.deps)) {
        f.memoizedState = xo(r, u, h, l);
        return;
      }
    }
    Sn.flags |= n, f.memoizedState = xo(1 | r, u, h, l);
  }
  function rf(n, r) {
    return Oo(8390656, 8, n, r);
  }
  function js(n, r) {
    return Zi(2048, 8, n, r);
  }
  function af(n, r) {
    return Zi(4, 2, n, r);
  }
  function uf(n, r) {
    return Zi(4, 4, n, r);
  }
  function Xd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Rl(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Zi(4, 4, Xd.bind(null, r, n), u);
  }
  function of() {
  }
  function Tl(n, r) {
    var u = ca();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && To(r, l[1]) ? l[0] : (u.memoizedState = [n, r], n);
  }
  function Iu(n, r) {
    var u = ca();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && To(r, l[1]) ? l[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function fa(n, r, u) {
    return bo & 21 ? (Pa(u, r) || (u = rl(), Sn.lanes |= u, tu |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Wn = !0), n.memoizedState = u);
  }
  function jy(n, r) {
    var u = Ht;
    Ht = u !== 0 && 4 > u ? u : 4, n(!0);
    var l = Kd.transition;
    Kd.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = u, Kd.transition = l;
    }
  }
  function fn() {
    return ca().memoizedState;
  }
  function lf(n, r, u) {
    var l = Qn(n);
    if (u = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null }, wl(n))
      Ps(r, u);
    else if (u = lh(n, r, u, l), u !== null) {
      var f = Nr();
      Mr(u, n, l, f), mh(u, r, l);
    }
  }
  function sf(n, r, u) {
    var l = Qn(n), f = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n))
      Ps(r, f);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var C = r.lastRenderedState, x = h(C, u);
          if (f.hasEagerState = !0, f.eagerState = x, Pa(x, C)) {
            var z = r.interleaved;
            z === null ? (f.next = f, Yd(r)) : (f.next = z.next, z.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      u = lh(n, r, f, l), u !== null && (f = Nr(), Mr(u, n, l, f), mh(u, r, l));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === Sn || r !== null && r === Sn;
  }
  function Ps(n, r) {
    Oi = it = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function mh(n, r, u) {
    if (u & 4194240) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, Ri(n, u);
    }
  }
  var cf = { readContext: Vn, useCallback: En, useContext: En, useEffect: En, useImperativeHandle: En, useInsertionEffect: En, useLayoutEffect: En, useMemo: En, useReducer: En, useRef: En, useState: En, useDebugValue: En, useDeferredValue: En, useTransition: En, useMutableSource: En, useSyncExternalStore: En, useId: En, unstable_isNewReconciler: !1 }, Py = { readContext: Vn, useCallback: function(n, r) {
    return Ya().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Vn, useEffect: rf, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Oo(
      4194308,
      4,
      Xd.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return Oo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Oo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Ya();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var l = Ya();
    return r = u !== void 0 ? u(r) : r, l.memoizedState = l.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, l.queue = n, n = n.dispatch = lf.bind(null, Sn, n), [l.memoizedState, n];
  }, useRef: function(n) {
    var r = Ya();
    return n = { current: n }, r.memoizedState = n;
  }, useState: tf, useDebugValue: of, useDeferredValue: function(n) {
    return Ya().memoizedState = n;
  }, useTransition: function() {
    var n = tf(!1), r = n[0];
    return n = jy.bind(null, n[1]), Ya().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var l = Sn, f = Ya();
    if (gn) {
      if (u === void 0)
        throw Error(v(407));
      u = u();
    } else {
      if (u = r(), Nn === null)
        throw Error(v(349));
      bo & 30 || Kc(l, r, u);
    }
    f.memoizedState = u;
    var h = { value: u, getSnapshot: r };
    return f.queue = h, rf(Zc.bind(
      null,
      l,
      h,
      n
    ), [n]), l.flags |= 2048, xo(9, Xc.bind(null, l, h, u, r), void 0, null), u;
  }, useId: function() {
    var n = Ya(), r = Nn.identifierPrefix;
    if (gn) {
      var u = qi, l = pr;
      u = (l & ~(1 << 32 - Pr(l) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Oa++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = Ro++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Fy = {
    readContext: Vn,
    useCallback: Tl,
    useContext: Vn,
    useEffect: js,
    useImperativeHandle: Rl,
    useInsertionEffect: af,
    useLayoutEffect: uf,
    useMemo: Iu,
    useReducer: zs,
    useRef: nf,
    useState: function() {
      return zs(_o);
    },
    useDebugValue: of,
    useDeferredValue: function(n) {
      var r = ca();
      return fa(r, ae.memoizedState, n);
    },
    useTransition: function() {
      var n = zs(_o)[0], r = ca().memoizedState;
      return [n, r];
    },
    useMutableSource: Gc,
    useSyncExternalStore: qc,
    useId: fn,
    unstable_isNewReconciler: !1
  }, Zd = { readContext: Vn, useCallback: Tl, useContext: Vn, useEffect: js, useImperativeHandle: Rl, useInsertionEffect: af, useLayoutEffect: uf, useMemo: Iu, useReducer: Us, useRef: nf, useState: function() {
    return Us(_o);
  }, useDebugValue: of, useDeferredValue: function(n) {
    var r = ca();
    return ae === null ? r.memoizedState = n : fa(r, ae.memoizedState, n);
  }, useTransition: function() {
    var n = Us(_o)[0], r = ca().memoizedState;
    return [n, r];
  }, useMutableSource: Gc, useSyncExternalStore: qc, useId: fn, unstable_isNewReconciler: !1 };
  function _l(n, r) {
    try {
      var u = "", l = r;
      do
        u += Rt(l), l = l.return;
      while (l);
      var f = u;
    } catch (h) {
      f = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Fs(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function ff(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Vy = typeof WeakMap == "function" ? WeakMap : Map;
  function yh(n, r, u) {
    u = Xi(-1, u), u.tag = 3, u.payload = { element: null };
    var l = r.value;
    return u.callback = function() {
      gf || (gf = !0, Lo = l), ff(n, r);
    }, u;
  }
  function Vs(n, r, u) {
    u = Xi(-1, u), u.tag = 3;
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = r.value;
      u.payload = function() {
        return l(f);
      }, u.callback = function() {
        ff(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (u.callback = function() {
      ff(n, r), typeof l != "function" && (Ni === null ? Ni = /* @__PURE__ */ new Set([this]) : Ni.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), u;
  }
  function gh(n, r, u) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new Vy();
      var f = /* @__PURE__ */ new Set();
      l.set(r, f);
    } else
      f = l.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), l.set(r, f));
    f.has(u) || (f.add(u), n = Qy.bind(null, n, r, u), r.then(n, n));
  }
  function Jd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ep(n, r, u, l, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Pu(u, r, 1))), u.lanes |= 1), n);
  }
  var Hy = J.ReactCurrentOwner, Wn = !1;
  function Kn(n, r, u, l) {
    r.child = n === null ? hh(r, null, u, l) : Cl(r, n.child, u, l);
  }
  function Bu(n, r, u, l, f) {
    u = u.render;
    var h = r.ref;
    return Ce(r, f), l = Hu(n, r, u, l, h, f), u = wo(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, hr(n, r, f)) : (gn && u && Uc(r), r.flags |= 1, Kn(n, r, l, f), r.child);
  }
  function df(n, r, u, l, f) {
    if (n === null) {
      var h = u.type;
      return typeof h == "function" && !Sp(h) && h.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = h, da(n, r, h, l, f)) : (n = Tf(u.type, null, l, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & f)) {
      var C = h.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Cs, u(C, l) && n.ref === r.ref)
        return hr(n, r, f);
    }
    return r.flags |= 1, n = Qu(h, l), n.ref = r.ref, n.return = r, r.child = n;
  }
  function da(n, r, u, l, f) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Cs(h, l) && n.ref === r.ref)
        if (Wn = !1, r.pendingProps = l = h, (n.lanes & f) !== 0)
          n.flags & 131072 && (Wn = !0);
        else
          return r.lanes = n.lanes, hr(n, r, f);
    }
    return xl(n, r, u, l, f);
  }
  function Do(n, r, u) {
    var l = r.pendingProps, f = l.children, h = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Kt(Ll, Da), Da |= u;
      else {
        if (!(u & 1073741824))
          return n = h !== null ? h.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Kt(Ll, Da), Da |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = h !== null ? h.baseLanes : u, Kt(Ll, Da), Da |= l;
      }
    else
      h !== null ? (l = h.baseLanes | u, r.memoizedState = null) : l = u, Kt(Ll, Da), Da |= l;
    return Kn(n, r, f, u), r.child;
  }
  function St(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function xl(n, r, u, l, f) {
    var h = Tn(u) ? ia : ot.current;
    return h = Va(r, h), Ce(r, f), u = Hu(n, r, u, l, h, f), l = wo(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, hr(n, r, f)) : (gn && l && Uc(r), r.flags |= 1, Kn(n, r, u, f), r.child);
  }
  function tp(n, r, u, l, f) {
    if (Tn(u)) {
      var h = !0;
      zc(r);
    } else
      h = !1;
    if (Ce(r, f), r.stateNode === null)
      Or(n, r), fh(r, u, l), $c(r, u, l, f), l = !0;
    else if (n === null) {
      var C = r.stateNode, x = r.memoizedProps;
      C.props = x;
      var z = C.context, Z = u.contextType;
      typeof Z == "object" && Z !== null ? Z = Vn(Z) : (Z = Tn(u) ? ia : ot.current, Z = Va(r, Z));
      var fe = u.getDerivedStateFromProps, pe = typeof fe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      pe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== l || z !== Z) && dh(r, C, l, Z), ju = !1;
      var ce = r.memoizedState;
      C.state = ce, Fu(r, l, C, f), z = r.memoizedState, x !== l || ce !== z || An.current || ju ? (typeof fe == "function" && (Gd(r, u, fe, l), z = r.memoizedState), (x = ju || ch(r, u, x, l, ce, z, Z)) ? (pe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = z), C.props = l, C.state = z, C.context = Z, l = x) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      C = r.stateNode, qn(n, r), x = r.memoizedProps, Z = r.type === r.elementType ? x : xa(r.type, x), C.props = Z, pe = r.pendingProps, ce = C.context, z = u.contextType, typeof z == "object" && z !== null ? z = Vn(z) : (z = Tn(u) ? ia : ot.current, z = Va(r, z));
      var De = u.getDerivedStateFromProps;
      (fe = typeof De == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== pe || ce !== z) && dh(r, C, l, z), ju = !1, ce = r.memoizedState, C.state = ce, Fu(r, l, C, f);
      var je = r.memoizedState;
      x !== pe || ce !== je || An.current || ju ? (typeof De == "function" && (Gd(r, u, De, l), je = r.memoizedState), (Z = ju || ch(r, u, Z, l, ce, je, z) || !1) ? (fe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(l, je, z), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(l, je, z)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = je), C.props = l, C.state = je, C.context = z, l = Z) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), l = !1);
    }
    return Sh(n, r, u, l, h, f);
  }
  function Sh(n, r, u, l, f, h) {
    St(n, r);
    var C = (r.flags & 128) !== 0;
    if (!l && !C)
      return f && ah(r, u, !1), hr(n, r, h);
    l = r.stateNode, Hy.current = r;
    var x = C && typeof u.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, n !== null && C ? (r.child = Cl(r, n.child, null, h), r.child = Cl(r, null, x, h)) : Kn(n, r, x, h), r.memoizedState = l.state, f && ah(r, u, !0), r.child;
  }
  function Eh(n) {
    var r = n.stateNode;
    r.pendingContext ? Lu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Lu(n, r.context, !1), qd(n, r.containerInfo);
  }
  function pf(n, r, u, l, f) {
    return Dn(), Id(f), r.flags |= 256, Kn(n, r, u, l), r.child;
  }
  var ko = { dehydrated: null, treeContext: null, retryLane: 0 };
  function np(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rp(n, r, u) {
    var l = r.pendingProps, f = rt.current, h = !1, C = (r.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), x ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Kt(rt, f & 1), n === null)
      return Pc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = l.children, n = l.fallback, h ? (l = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(l & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Ks(C, l, 0, null), n = Po(n, l, u, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = np(u), r.memoizedState = ko, n) : ap(r, C));
    if (f = n.memoizedState, f !== null && (x = f.dehydrated, x !== null))
      return Iy(n, r, C, l, x, f, u);
    if (h) {
      h = l.fallback, C = r.mode, f = n.child, x = f.sibling;
      var z = { mode: "hidden", children: l.children };
      return !(C & 1) && r.child !== f ? (l = r.child, l.childLanes = 0, l.pendingProps = z, r.deletions = null) : (l = Qu(f, z), l.subtreeFlags = f.subtreeFlags & 14680064), x !== null ? h = Qu(x, h) : (h = Po(h, C, u, null), h.flags |= 2), h.return = r, l.return = r, l.sibling = h, r.child = l, l = h, h = r.child, C = n.child.memoizedState, C = C === null ? np(u) : { baseLanes: C.baseLanes | u, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~u, r.memoizedState = ko, l;
    }
    return h = n.child, n = h.sibling, l = Qu(h, { mode: "visible", children: l.children }), !(r.mode & 1) && (l.lanes = u), l.return = r, l.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = l, r.memoizedState = null, l;
  }
  function ap(n, r) {
    return r = Ks({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ol(n, r, u, l) {
    return l !== null && Id(l), Cl(r, n.child, null, u), n = ap(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iy(n, r, u, l, f, h, C) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, l = Fs(Error(v(422))), Ol(n, r, C, l)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = l.fallback, f = r.mode, l = Ks({ mode: "visible", children: l.children }, f, 0, null), h = Po(h, f, C, null), h.flags |= 2, l.return = r, h.return = r, l.sibling = h, r.child = l, r.mode & 1 && Cl(r, n.child, null, C), r.child.memoizedState = np(C), r.memoizedState = ko, h);
    if (!(r.mode & 1))
      return Ol(n, r, C, null);
    if (f.data === "$!") {
      if (l = f.nextSibling && f.nextSibling.dataset, l)
        var x = l.dgst;
      return l = x, h = Error(v(419)), l = Fs(h, l, void 0), Ol(n, r, C, l);
    }
    if (x = (C & n.childLanes) !== 0, Wn || x) {
      if (l = Nn, l !== null) {
        switch (C & -C) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (l.suspendedLanes | C) ? 0 : f, f !== 0 && f !== h.retryLane && (h.retryLane = f, Ki(n, f), Mr(l, n, f, -1));
      }
      return mp(), l = Fs(Error(v(421))), Ol(n, r, C, l);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gy.bind(null, n), f._reactRetry = r, null) : (n = h.treeContext, sa = ci(f.nextSibling), _a = r, gn = !0, Ba = null, n !== null && (la[xr++] = pr, la[xr++] = qi, la[xr++] = Ia, pr = n.id, qi = n.overflow, Ia = r), r = ap(r, l.children), r.flags |= 4096, r);
  }
  function ip(n, r, u) {
    n.lanes |= r;
    var l = n.alternate;
    l !== null && (l.lanes |= r), ur(n.return, r, u);
  }
  function vf(n, r, u, l, f) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: u, tailMode: f } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = u, h.tailMode = f);
  }
  function up(n, r, u) {
    var l = r.pendingProps, f = l.revealOrder, h = l.tail;
    if (Kn(n, r, l.children, u), l = rt.current, l & 2)
      l = l & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ip(n, u, r);
            else if (n.tag === 19)
              ip(n, u, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      l &= 1;
    }
    if (Kt(rt, l), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (u = r.child, f = null; u !== null; )
            n = u.alternate, n !== null && kn(n) === null && (f = u), u = u.sibling;
          u = f, u === null ? (f = r.child, r.child = null) : (f = u.sibling, u.sibling = null), vf(r, !1, f, u, h);
          break;
        case "backwards":
          for (u = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && kn(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = u, u = f, f = n;
          }
          vf(r, !0, u, null, h);
          break;
        case "together":
          vf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Or(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function hr(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), tu |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(v(153));
    if (r.child !== null) {
      for (n = r.child, u = Qu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Qu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Ji(n, r, u) {
    switch (r.tag) {
      case 3:
        Eh(r), Dn();
        break;
      case 5:
        et(r);
        break;
      case 1:
        Tn(r.type) && zc(r);
        break;
      case 4:
        qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context, f = r.memoizedProps.value;
        Kt(xi, l._currentValue), l._currentValue = f;
        break;
      case 13:
        if (l = r.memoizedState, l !== null)
          return l.dehydrated !== null ? (Kt(rt, rt.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? rp(n, r, u) : (Kt(rt, rt.current & 1), n = hr(n, r, u), n !== null ? n.sibling : null);
        Kt(rt, rt.current & 1);
        break;
      case 19:
        if (l = (u & r.childLanes) !== 0, n.flags & 128) {
          if (l)
            return up(n, r, u);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Kt(rt, rt.current), l)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Do(n, r, u);
    }
    return hr(n, r, u);
  }
  var Hs, No, Wa, Xn;
  Hs = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, No = function() {
  }, Wa = function(n, r, u, l) {
    var f = n.memoizedProps;
    if (f !== l) {
      n = r.stateNode, Co(fi.current);
      var h = null;
      switch (u) {
        case "input":
          f = we(n, f), l = we(n, l), h = [];
          break;
        case "select":
          f = N({}, f, { value: void 0 }), l = N({}, l, { value: void 0 }), h = [];
          break;
        case "textarea":
          f = Jr(n, f), l = Jr(n, l), h = [];
          break;
        default:
          typeof f.onClick != "function" && typeof l.onClick == "function" && (n.onclick = Ac);
      }
      Fn(u, l);
      var C;
      u = null;
      for (Z in f)
        if (!l.hasOwnProperty(Z) && f.hasOwnProperty(Z) && f[Z] != null)
          if (Z === "style") {
            var x = f[Z];
            for (C in x)
              x.hasOwnProperty(C) && (u || (u = {}), u[C] = "");
          } else
            Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (R.hasOwnProperty(Z) ? h || (h = []) : (h = h || []).push(Z, null));
      for (Z in l) {
        var z = l[Z];
        if (x = f != null ? f[Z] : void 0, l.hasOwnProperty(Z) && z !== x && (z != null || x != null))
          if (Z === "style")
            if (x) {
              for (C in x)
                !x.hasOwnProperty(C) || z && z.hasOwnProperty(C) || (u || (u = {}), u[C] = "");
              for (C in z)
                z.hasOwnProperty(C) && x[C] !== z[C] && (u || (u = {}), u[C] = z[C]);
            } else
              u || (h || (h = []), h.push(
                Z,
                u
              )), u = z;
          else
            Z === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, x = x ? x.__html : void 0, z != null && x !== z && (h = h || []).push(Z, z)) : Z === "children" ? typeof z != "string" && typeof z != "number" || (h = h || []).push(Z, "" + z) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (R.hasOwnProperty(Z) ? (z != null && Z === "onScroll" && cn("scroll", n), h || x === z || (h = [])) : (h = h || []).push(Z, z));
      }
      u && (h = h || []).push("style", u);
      var Z = h;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Xn = function(n, r, u, l) {
    u !== l && (r.flags |= 4);
  };
  function Is(n, r) {
    if (!gn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var u = null; r !== null; )
            r.alternate !== null && (u = r), r = r.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var l = null; u !== null; )
            u.alternate !== null && (l = u), u = u.sibling;
          l === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null;
      }
  }
  function Dr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, l = 0;
    if (r)
      for (var f = n.child; f !== null; )
        u |= f.lanes | f.childLanes, l |= f.subtreeFlags & 14680064, l |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        u |= f.lanes | f.childLanes, l |= f.subtreeFlags, l |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= l, n.childLanes = u, r;
  }
  function By(n, r, u) {
    var l = r.pendingProps;
    switch (Vd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dr(r), null;
      case 1:
        return Tn(r.type) && Ha(), Dr(r), null;
      case 3:
        return l = r.stateNode, Vu(), Yt(An), Yt(ot), Wc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (Fc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ba !== null && (qs(Ba), Ba = null))), No(n, r), Dr(r), null;
      case 5:
        _t(r);
        var f = Co(bl.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Wa(n, r, u, l, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null)
              throw Error(v(166));
            return Dr(r), null;
          }
          if (n = Co(fi.current), Fc(r)) {
            l = r.stateNode, u = r.type;
            var h = r.memoizedProps;
            switch (l[wi] = r, l[go] = h, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                cn("cancel", l), cn("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                cn("load", l);
                break;
              case "video":
              case "audio":
                for (f = 0; f < ws.length; f++)
                  cn(ws[f], l);
                break;
              case "source":
                cn("error", l);
                break;
              case "img":
              case "image":
              case "link":
                cn(
                  "error",
                  l
                ), cn("load", l);
                break;
              case "details":
                cn("toggle", l);
                break;
              case "input":
                pn(l, h), cn("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!h.multiple }, cn("invalid", l);
                break;
              case "textarea":
                wr(l, h), cn("invalid", l);
            }
            Fn(u, h), f = null;
            for (var C in h)
              if (h.hasOwnProperty(C)) {
                var x = h[C];
                C === "children" ? typeof x == "string" ? l.textContent !== x && (h.suppressHydrationWarning !== !0 && Lc(l.textContent, x, n), f = ["children", x]) : typeof x == "number" && l.textContent !== "" + x && (h.suppressHydrationWarning !== !0 && Lc(
                  l.textContent,
                  x,
                  n
                ), f = ["children", "" + x]) : R.hasOwnProperty(C) && x != null && C === "onScroll" && cn("scroll", l);
              }
            switch (u) {
              case "input":
                Bn(l), Xr(l, h, !0);
                break;
              case "textarea":
                Bn(l), fr(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = Ac);
            }
            l = f, r.updateQueue = l, l !== null && (r.flags |= 4);
          } else {
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ea(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = C.createElement(u, { is: l.is }) : (n = C.createElement(u), u === "select" && (C = n, l.multiple ? C.multiple = !0 : l.size && (C.size = l.size))) : n = C.createElementNS(n, u), n[wi] = r, n[go] = l, Hs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = xn(u, l), u) {
                case "dialog":
                  cn("cancel", n), cn("close", n), f = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  cn("load", n), f = l;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ws.length; f++)
                    cn(ws[f], n);
                  f = l;
                  break;
                case "source":
                  cn("error", n), f = l;
                  break;
                case "img":
                case "image":
                case "link":
                  cn(
                    "error",
                    n
                  ), cn("load", n), f = l;
                  break;
                case "details":
                  cn("toggle", n), f = l;
                  break;
                case "input":
                  pn(n, l), f = we(n, l), cn("invalid", n);
                  break;
                case "option":
                  f = l;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!l.multiple }, f = N({}, l, { value: void 0 }), cn("invalid", n);
                  break;
                case "textarea":
                  wr(n, l), f = Jr(n, l), cn("invalid", n);
                  break;
                default:
                  f = l;
              }
              Fn(u, f), x = f;
              for (h in x)
                if (x.hasOwnProperty(h)) {
                  var z = x[h];
                  h === "style" ? $t(n, z) : h === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && yi(n, z)) : h === "children" ? typeof z == "string" ? (u !== "textarea" || z !== "") && Ea(n, z) : typeof z == "number" && Ea(n, "" + z) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (R.hasOwnProperty(h) ? z != null && h === "onScroll" && cn("scroll", n) : z != null && te(n, h, z, C));
                }
              switch (u) {
                case "input":
                  Bn(n), Xr(n, l, !1);
                  break;
                case "textarea":
                  Bn(n), fr(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + pt(l.value));
                  break;
                case "select":
                  n.multiple = !!l.multiple, h = l.value, h != null ? Tr(n, !!l.multiple, h, !1) : l.defaultValue != null && Tr(
                    n,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Ac);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Dr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Xn(n, r, n.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null)
            throw Error(v(166));
          if (u = Co(bl.current), Co(fi.current), Fc(r)) {
            if (l = r.stateNode, u = r.memoizedProps, l[wi] = r, (h = l.nodeValue !== u) && (n = _a, n !== null))
              switch (n.tag) {
                case 3:
                  Lc(l.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Lc(l.nodeValue, u, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            l = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(l), l[wi] = r, r.stateNode = l;
        }
        return Dr(r), null;
      case 13:
        if (Yt(rt), l = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && sa !== null && r.mode & 1 && !(r.flags & 128))
            oh(), Dn(), r.flags |= 98560, h = !1;
          else if (h = Fc(r), l !== null && l.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(v(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(v(317));
              h[wi] = r;
            } else
              Dn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Dr(r), h = !1;
          } else
            Ba !== null && (qs(Ba), Ba = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (r.child.flags |= 8192, r.mode & 1 && (n === null || rt.current & 1 ? Jn === 0 && (Jn = 3) : mp())), r.updateQueue !== null && (r.flags |= 4), Dr(r), null);
      case 4:
        return Vu(), No(n, r), n === null && yl(r.stateNode.containerInfo), Dr(r), null;
      case 10:
        return Uu(r.type._context), Dr(r), null;
      case 17:
        return Tn(r.type) && Ha(), Dr(r), null;
      case 19:
        if (Yt(rt), h = r.memoizedState, h === null)
          return Dr(r), null;
        if (l = (r.flags & 128) !== 0, C = h.rendering, C === null)
          if (l)
            Is(h, !1);
          else {
            if (Jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = kn(n), C !== null) {
                  for (r.flags |= 128, Is(h, !1), l = C.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = u, u = r.child; u !== null; )
                    h = u, n = l, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Kt(rt, rt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && jt() > zl && (r.flags |= 128, l = !0, Is(h, !1), r.lanes = 4194304);
          }
        else {
          if (!l)
            if (n = kn(C), n !== null) {
              if (r.flags |= 128, l = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Is(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !gn)
                return Dr(r), null;
            } else
              2 * jt() - h.renderingStartTime > zl && u !== 1073741824 && (r.flags |= 128, l = !0, Is(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (u = h.last, u !== null ? u.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = jt(), r.sibling = null, u = rt.current, Kt(rt, l ? u & 1 | 2 : u & 1), r) : (Dr(r), null);
      case 22:
      case 23:
        return hp(), l = r.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (r.flags |= 8192), l && r.mode & 1 ? Da & 1073741824 && (Dr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Dr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, r.tag));
  }
  function op(n, r) {
    switch (Vd(r), r.tag) {
      case 1:
        return Tn(r.type) && Ha(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Vu(), Yt(An), Yt(ot), Wc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return _t(r), null;
      case 13:
        if (Yt(rt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(v(340));
          Dn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Yt(rt), null;
      case 4:
        return Vu(), null;
      case 10:
        return Uu(r.type._context), null;
      case 22:
      case 23:
        return hp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bs = !1, Zn = !1, Ch = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function Dl(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (l) {
          Un(n, r, l);
        }
      else
        u.current = null;
  }
  function $s(n, r, u) {
    try {
      u();
    } catch (l) {
      Un(n, r, l);
    }
  }
  var bh = !1;
  function Rh(n, r) {
    if (Md = ja, n = Oc(), Yi(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var l = u.getSelection && u.getSelection();
          if (l && l.rangeCount !== 0) {
            u = l.anchorNode;
            var f = l.anchorOffset, h = l.focusNode;
            l = l.focusOffset;
            try {
              u.nodeType, h.nodeType;
            } catch {
              u = null;
              break e;
            }
            var C = 0, x = -1, z = -1, Z = 0, fe = 0, pe = n, ce = null;
            t:
              for (; ; ) {
                for (var De; pe !== u || f !== 0 && pe.nodeType !== 3 || (x = C + f), pe !== h || l !== 0 && pe.nodeType !== 3 || (z = C + l), pe.nodeType === 3 && (C += pe.nodeValue.length), (De = pe.firstChild) !== null; )
                  ce = pe, pe = De;
                for (; ; ) {
                  if (pe === n)
                    break t;
                  if (ce === u && ++Z === f && (x = C), ce === h && ++fe === l && (z = C), (De = pe.nextSibling) !== null)
                    break;
                  pe = ce, ce = pe.parentNode;
                }
                pe = De;
              }
            u = x === -1 || z === -1 ? null : { start: x, end: z };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (mo = { focusedElem: n, selectionRange: u }, ja = !1, ze = r; ze !== null; )
      if (r = ze, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ze = n;
      else
        for (; ze !== null; ) {
          r = ze;
          try {
            var je = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (je !== null) {
                    var He = je.memoizedProps, Hn = je.memoizedState, Y = r.stateNode, P = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? He : xa(r.type, He), Hn);
                    Y.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var G = r.stateNode.containerInfo;
                  G.nodeType === 1 ? G.textContent = "" : G.nodeType === 9 && G.documentElement && G.removeChild(G.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(v(163));
              }
          } catch (ye) {
            Un(r, r.return, ye);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ze = n;
            break;
          }
          ze = r.return;
        }
    return je = bh, bh = !1, je;
  }
  function Ys(n, r, u) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var f = l = l.next;
      do {
        if ((f.tag & n) === n) {
          var h = f.destroy;
          f.destroy = void 0, h !== void 0 && $s(r, u, h);
        }
        f = f.next;
      } while (f !== l);
    }
  }
  function Ws(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var l = u.create;
          u.destroy = l();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function lp(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function sp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[go], delete r[zd], delete r[Uy], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Th(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function hf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Th(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function kl(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = Ac));
    else if (l !== 4 && (n = n.child, n !== null))
      for (kl(n, r, u), n = n.sibling; n !== null; )
        kl(n, r, u), n = n.sibling;
  }
  function Di(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (l !== 4 && (n = n.child, n !== null))
      for (Di(n, r, u), n = n.sibling; n !== null; )
        Di(n, r, u), n = n.sibling;
  }
  var wn = null, or = !1;
  function Qa(n, r, u) {
    for (u = u.child; u !== null; )
      Nl(n, r, u), u = u.sibling;
  }
  function Nl(n, r, u) {
    if (ta && typeof ta.onCommitFiberUnmount == "function")
      try {
        ta.onCommitFiberUnmount(gu, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Zn || Dl(u, r);
      case 6:
        var l = wn, f = or;
        wn = null, Qa(n, r, u), wn = l, or = f, wn !== null && (or ? (n = wn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : wn.removeChild(u.stateNode));
        break;
      case 18:
        wn !== null && (or ? (n = wn, u = u.stateNode, n.nodeType === 8 ? ku(n.parentNode, u) : n.nodeType === 1 && ku(n, u), wu(n)) : ku(wn, u.stateNode));
        break;
      case 4:
        l = wn, f = or, wn = u.stateNode.containerInfo, or = !0, Qa(n, r, u), wn = l, or = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Zn && (l = u.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          f = l = l.next;
          do {
            var h = f, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && $s(u, r, C), f = f.next;
          } while (f !== l);
        }
        Qa(n, r, u);
        break;
      case 1:
        if (!Zn && (Dl(u, r), l = u.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = u.memoizedProps, l.state = u.memoizedState, l.componentWillUnmount();
          } catch (x) {
            Un(u, r, x);
          }
        Qa(n, r, u);
        break;
      case 21:
        Qa(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Zn = (l = Zn) || u.memoizedState !== null, Qa(n, r, u), Zn = l) : Qa(n, r, u);
        break;
      default:
        Qa(n, r, u);
    }
  }
  function eu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new Ch()), r.forEach(function(l) {
        var f = qy.bind(null, n, l);
        u.has(l) || (u.add(l), l.then(f, f));
      });
    }
  }
  function di(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var l = 0; l < u.length; l++) {
        var f = u[l];
        try {
          var h = n, C = r, x = C;
          e:
            for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  wn = x.stateNode, or = !1;
                  break e;
                case 3:
                  wn = x.stateNode.containerInfo, or = !0;
                  break e;
                case 4:
                  wn = x.stateNode.containerInfo, or = !0;
                  break e;
              }
              x = x.return;
            }
          if (wn === null)
            throw Error(v(160));
          Nl(h, C, f), wn = null, or = !1;
          var z = f.alternate;
          z !== null && (z.return = null), f.return = null;
        } catch (Z) {
          Un(f, r, Z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        wh(r, n), r = r.sibling;
  }
  function wh(n, r) {
    var u = n.alternate, l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (di(r, n), ki(n), l & 4) {
          try {
            Ys(3, n, n.return), Ws(3, n);
          } catch (He) {
            Un(n, n.return, He);
          }
          try {
            Ys(5, n, n.return);
          } catch (He) {
            Un(n, n.return, He);
          }
        }
        break;
      case 1:
        di(r, n), ki(n), l & 512 && u !== null && Dl(u, u.return);
        break;
      case 5:
        if (di(r, n), ki(n), l & 512 && u !== null && Dl(u, u.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Ea(f, "");
          } catch (He) {
            Un(n, n.return, He);
          }
        }
        if (l & 4 && (f = n.stateNode, f != null)) {
          var h = n.memoizedProps, C = u !== null ? u.memoizedProps : h, x = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              x === "input" && h.type === "radio" && h.name != null && bn(f, h), xn(x, C);
              var Z = xn(x, h);
              for (C = 0; C < z.length; C += 2) {
                var fe = z[C], pe = z[C + 1];
                fe === "style" ? $t(f, pe) : fe === "dangerouslySetInnerHTML" ? yi(f, pe) : fe === "children" ? Ea(f, pe) : te(f, fe, pe, Z);
              }
              switch (x) {
                case "input":
                  Rn(f, h);
                  break;
                case "textarea":
                  Sa(f, h);
                  break;
                case "select":
                  var ce = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!h.multiple;
                  var De = h.value;
                  De != null ? Tr(f, !!h.multiple, De, !1) : ce !== !!h.multiple && (h.defaultValue != null ? Tr(
                    f,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : Tr(f, !!h.multiple, h.multiple ? [] : "", !1));
              }
              f[go] = h;
            } catch (He) {
              Un(n, n.return, He);
            }
        }
        break;
      case 6:
        if (di(r, n), ki(n), l & 4) {
          if (n.stateNode === null)
            throw Error(v(162));
          f = n.stateNode, h = n.memoizedProps;
          try {
            f.nodeValue = h;
          } catch (He) {
            Un(n, n.return, He);
          }
        }
        break;
      case 3:
        if (di(r, n), ki(n), l & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            wu(r.containerInfo);
          } catch (He) {
            Un(n, n.return, He);
          }
        break;
      case 4:
        di(r, n), ki(n);
        break;
      case 13:
        di(r, n), ki(n), f = n.child, f.flags & 8192 && (h = f.memoizedState !== null, f.stateNode.isHidden = h, !h || f.alternate !== null && f.alternate.memoizedState !== null || (dp = jt())), l & 4 && eu(n);
        break;
      case 22:
        if (fe = u !== null && u.memoizedState !== null, n.mode & 1 ? (Zn = (Z = Zn) || fe, di(r, n), Zn = Z) : di(r, n), ki(n), l & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !fe && n.mode & 1)
            for (ze = n, fe = n.child; fe !== null; ) {
              for (pe = ze = fe; ze !== null; ) {
                switch (ce = ze, De = ce.child, ce.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ys(4, ce, ce.return);
                    break;
                  case 1:
                    Dl(ce, ce.return);
                    var je = ce.stateNode;
                    if (typeof je.componentWillUnmount == "function") {
                      l = ce, u = ce.return;
                      try {
                        r = l, je.props = r.memoizedProps, je.state = r.memoizedState, je.componentWillUnmount();
                      } catch (He) {
                        Un(l, u, He);
                      }
                    }
                    break;
                  case 5:
                    Dl(ce, ce.return);
                    break;
                  case 22:
                    if (ce.memoizedState !== null) {
                      cp(pe);
                      continue;
                    }
                }
                De !== null ? (De.return = ce, ze = De) : cp(pe);
              }
              fe = fe.sibling;
            }
          e:
            for (fe = null, pe = n; ; ) {
              if (pe.tag === 5) {
                if (fe === null) {
                  fe = pe;
                  try {
                    f = pe.stateNode, Z ? (h = f.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (x = pe.stateNode, z = pe.memoizedProps.style, C = z != null && z.hasOwnProperty("display") ? z.display : null, x.style.display = bt("display", C));
                  } catch (He) {
                    Un(n, n.return, He);
                  }
                }
              } else if (pe.tag === 6) {
                if (fe === null)
                  try {
                    pe.stateNode.nodeValue = Z ? "" : pe.memoizedProps;
                  } catch (He) {
                    Un(n, n.return, He);
                  }
              } else if ((pe.tag !== 22 && pe.tag !== 23 || pe.memoizedState === null || pe === n) && pe.child !== null) {
                pe.child.return = pe, pe = pe.child;
                continue;
              }
              if (pe === n)
                break e;
              for (; pe.sibling === null; ) {
                if (pe.return === null || pe.return === n)
                  break e;
                fe === pe && (fe = null), pe = pe.return;
              }
              fe === pe && (fe = null), pe.sibling.return = pe.return, pe = pe.sibling;
            }
        }
        break;
      case 19:
        di(r, n), ki(n), l & 4 && eu(n);
        break;
      case 21:
        break;
      default:
        di(
          r,
          n
        ), ki(n);
    }
  }
  function ki(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (Th(u)) {
              var l = u;
              break e;
            }
            u = u.return;
          }
          throw Error(v(160));
        }
        switch (l.tag) {
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Ea(f, ""), l.flags &= -33);
            var h = hf(n);
            Di(n, h, f);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo, x = hf(n);
            kl(n, x, C);
            break;
          default:
            throw Error(v(161));
        }
      } catch (z) {
        Un(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _h(n, r, u) {
    ze = n, Ml(n);
  }
  function Ml(n, r, u) {
    for (var l = (n.mode & 1) !== 0; ze !== null; ) {
      var f = ze, h = f.child;
      if (f.tag === 22 && l) {
        var C = f.memoizedState !== null || Bs;
        if (!C) {
          var x = f.alternate, z = x !== null && x.memoizedState !== null || Zn;
          x = Bs;
          var Z = Zn;
          if (Bs = C, (Zn = z) && !Z)
            for (ze = f; ze !== null; )
              C = ze, z = C.child, C.tag === 22 && C.memoizedState !== null ? Oh(f) : z !== null ? (z.return = C, ze = z) : Oh(f);
          for (; h !== null; )
            ze = h, Ml(h), h = h.sibling;
          ze = f, Bs = x, Zn = Z;
        }
        xh(n);
      } else
        f.subtreeFlags & 8772 && h !== null ? (h.return = f, ze = h) : xh(n);
    }
  }
  function xh(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r.flags & 8772) {
        var u = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Zn || Ws(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !Zn)
                  if (u === null)
                    l.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? u.memoizedProps : xa(r.type, u.memoizedProps);
                    l.componentDidUpdate(f, u.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Eo(r, h, l);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (u = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        u = r.child.stateNode;
                        break;
                      case 1:
                        u = r.child.stateNode;
                    }
                  Eo(r, C, u);
                }
                break;
              case 5:
                var x = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = x;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && u.focus();
                      break;
                    case "img":
                      z.src && (u.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var Z = r.alternate;
                  if (Z !== null) {
                    var fe = Z.memoizedState;
                    if (fe !== null) {
                      var pe = fe.dehydrated;
                      pe !== null && wu(pe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(v(163));
            }
          Zn || r.flags & 512 && lp(r);
        } catch (ce) {
          Un(r, r.return, ce);
        }
      }
      if (r === n) {
        ze = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, ze = u;
        break;
      }
      ze = r.return;
    }
  }
  function cp(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r === n) {
        ze = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, ze = u;
        break;
      }
      ze = r.return;
    }
  }
  function Oh(n) {
    for (; ze !== null; ) {
      var r = ze;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Ws(4, r);
            } catch (z) {
              Un(r, u, z);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = r.return;
              try {
                l.componentDidMount();
              } catch (z) {
                Un(r, f, z);
              }
            }
            var h = r.return;
            try {
              lp(r);
            } catch (z) {
              Un(r, h, z);
            }
            break;
          case 5:
            var C = r.return;
            try {
              lp(r);
            } catch (z) {
              Un(r, C, z);
            }
        }
      } catch (z) {
        Un(r, r.return, z);
      }
      if (r === n) {
        ze = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, ze = x;
        break;
      }
      ze = r.return;
    }
  }
  var mf = Math.ceil, Qs = J.ReactCurrentDispatcher, fp = J.ReactCurrentOwner, kr = J.ReactCurrentBatchConfig, xt = 0, Nn = null, zn = null, lr = 0, Da = 0, Ll = gt(0), Jn = 0, Gs = null, tu = 0, yf = 0, Al = 0, Mo = null, Hr = null, dp = 0, zl = 1 / 0, nu = null, gf = !1, Lo = null, Ni = null, $u = !1, Yu = null, Sf = 0, Ul = 0, Ef = null, Ao = -1, zo = 0;
  function Nr() {
    return xt & 6 ? jt() : Ao !== -1 ? Ao : Ao = jt();
  }
  function Qn(n) {
    return n.mode & 1 ? xt & 2 && lr !== 0 ? lr & -lr : Vc.transition !== null ? (zo === 0 && (zo = rl()), zo) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ms(n.type)), n) : 1;
  }
  function Mr(n, r, u, l) {
    if (50 < Ul)
      throw Ul = 0, Ef = null, Error(v(185));
    Vi(n, u, l), (!(xt & 2) || n !== Nn) && (n === Nn && (!(xt & 2) && (yf |= u), Jn === 4 && Ga(n, lr)), Lr(n, l), u === 1 && xt === 0 && !(r.mode & 1) && (zl = jt() + 500, ir && ua()));
  }
  function Lr(n, r) {
    var u = n.callbackNode;
    Cu(n, r);
    var l = Fr(n, n === Nn ? lr : 0);
    if (l === 0)
      u !== null && dr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = l & -l, n.callbackPriority !== r) {
      if (u != null && dr(u), r === 1)
        n.tag === 0 ? Pd(Dh.bind(null, n)) : jd(Dh.bind(null, n)), Ad(function() {
          !(xt & 6) && ua();
        }), u = null;
      else {
        switch (il(l)) {
          case 1:
            u = ai;
            break;
          case 4:
            u = Tt;
            break;
          case 16:
            u = bi;
            break;
          case 536870912:
            u = tl;
            break;
          default:
            u = bi;
        }
        u = gp(u, jl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function jl(n, r) {
    if (Ao = -1, zo = 0, xt & 6)
      throw Error(v(327));
    var u = n.callbackNode;
    if (Fl() && n.callbackNode !== u)
      return null;
    var l = Fr(n, n === Nn ? lr : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & n.expiredLanes || r)
      r = bf(n, l);
    else {
      r = l;
      var f = xt;
      xt |= 2;
      var h = Cf();
      (Nn !== n || lr !== r) && (nu = null, zl = jt() + 500, Uo(n, r));
      do
        try {
          Yy();
          break;
        } catch (x) {
          kh(n, x);
        }
      while (1);
      $d(), Qs.current = h, xt = f, zn !== null ? r = 0 : (Nn = null, lr = 0, r = Jn);
    }
    if (r !== 0) {
      if (r === 2 && (f = bu(n), f !== 0 && (l = f, r = pp(n, f))), r === 1)
        throw u = Gs, Uo(n, 0), Ga(n, l), Lr(n, jt()), u;
      if (r === 6)
        Ga(n, l);
      else {
        if (f = n.current.alternate, !(l & 30) && !vp(f) && (r = bf(n, l), r === 2 && (h = bu(n), h !== 0 && (l = h, r = pp(n, h))), r === 1))
          throw u = Gs, Uo(n, 0), Ga(n, l), Lr(n, jt()), u;
        switch (n.finishedWork = f, n.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            jo(n, Hr, nu);
            break;
          case 3:
            if (Ga(n, l), (l & 130023424) === l && (r = dp + 500 - jt(), 10 < r)) {
              if (Fr(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & l) !== l) {
                Nr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = yo(jo.bind(null, n, Hr, nu), r);
              break;
            }
            jo(n, Hr, nu);
            break;
          case 4:
            if (Ga(n, l), (l & 4194240) === l)
              break;
            for (r = n.eventTimes, f = -1; 0 < l; ) {
              var C = 31 - Pr(l);
              h = 1 << C, C = r[C], C > f && (f = C), l &= ~h;
            }
            if (l = f, l = jt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * mf(l / 1960)) - l, 10 < l) {
              n.timeoutHandle = yo(jo.bind(null, n, Hr, nu), l);
              break;
            }
            jo(n, Hr, nu);
            break;
          case 5:
            jo(n, Hr, nu);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return Lr(n, jt()), n.callbackNode === u ? jl.bind(null, n) : null;
  }
  function pp(n, r) {
    var u = Mo;
    return n.current.memoizedState.isDehydrated && (Uo(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = Hr, Hr = u, r !== null && qs(r)), n;
  }
  function qs(n) {
    Hr === null ? Hr = n : Hr.push.apply(Hr, n);
  }
  function vp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var l = 0; l < u.length; l++) {
            var f = u[l], h = f.getSnapshot;
            f = f.value;
            try {
              if (!Pa(h(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null)
        u.return = r, r = u;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ga(n, r) {
    for (r &= ~Al, r &= ~yf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - Pr(r), l = 1 << u;
      n[u] = -1, r &= ~l;
    }
  }
  function Dh(n) {
    if (xt & 6)
      throw Error(v(327));
    Fl();
    var r = Fr(n, 0);
    if (!(r & 1))
      return Lr(n, jt()), null;
    var u = bf(n, r);
    if (n.tag !== 0 && u === 2) {
      var l = bu(n);
      l !== 0 && (r = l, u = pp(n, l));
    }
    if (u === 1)
      throw u = Gs, Uo(n, 0), Ga(n, r), Lr(n, jt()), u;
    if (u === 6)
      throw Error(v(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jo(n, Hr, nu), Lr(n, jt()), null;
  }
  function Pl(n, r) {
    var u = xt;
    xt |= 1;
    try {
      return n(r);
    } finally {
      xt = u, xt === 0 && (zl = jt() + 500, ir && ua());
    }
  }
  function Wu(n) {
    Yu !== null && Yu.tag === 0 && !(xt & 6) && Fl();
    var r = xt;
    xt |= 1;
    var u = kr.transition, l = Ht;
    try {
      if (kr.transition = null, Ht = 1, n)
        return n();
    } finally {
      Ht = l, kr.transition = u, xt = r, !(xt & 6) && ua();
    }
  }
  function hp() {
    Da = Ll.current, Yt(Ll);
  }
  function Uo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, rh(u)), zn !== null)
      for (u = zn.return; u !== null; ) {
        var l = u;
        switch (Vd(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Ha();
            break;
          case 3:
            Vu(), Yt(An), Yt(ot), Wc();
            break;
          case 5:
            _t(l);
            break;
          case 4:
            Vu();
            break;
          case 13:
            Yt(rt);
            break;
          case 19:
            Yt(rt);
            break;
          case 10:
            Uu(l.type._context);
            break;
          case 22:
          case 23:
            hp();
        }
        u = u.return;
      }
    if (Nn = n, zn = n = Qu(n.current, null), lr = Da = r, Jn = 0, Gs = null, Al = yf = tu = 0, Hr = Mo = null, vr !== null) {
      for (r = 0; r < vr.length; r++)
        if (u = vr[r], l = u.interleaved, l !== null) {
          u.interleaved = null;
          var f = l.next, h = u.pending;
          if (h !== null) {
            var C = h.next;
            h.next = f, l.next = C;
          }
          u.pending = l;
        }
      vr = null;
    }
    return n;
  }
  function kh(n, r) {
    do {
      var u = zn;
      try {
        if ($d(), Qc.current = cf, it) {
          for (var l = Sn.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), l = l.next;
          }
          it = !1;
        }
        if (bo = 0, Mt = ae = Sn = null, Oi = !1, Oa = 0, fp.current = null, u === null || u.return === null) {
          Jn = 1, Gs = r, zn = null;
          break;
        }
        e: {
          var h = n, C = u.return, x = u, z = r;
          if (r = lr, x.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var Z = z, fe = x, pe = fe.tag;
            if (!(fe.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var ce = fe.alternate;
              ce ? (fe.updateQueue = ce.updateQueue, fe.memoizedState = ce.memoizedState, fe.lanes = ce.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var De = Jd(C);
            if (De !== null) {
              De.flags &= -257, ep(De, C, x, h, r), De.mode & 1 && gh(h, Z, r), r = De, z = Z;
              var je = r.updateQueue;
              if (je === null) {
                var He = /* @__PURE__ */ new Set();
                He.add(z), r.updateQueue = He;
              } else
                je.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                gh(h, Z, r), mp();
                break e;
              }
              z = Error(v(426));
            }
          } else if (gn && x.mode & 1) {
            var Hn = Jd(C);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), ep(Hn, C, x, h, r), Id(_l(z, x));
              break e;
            }
          }
          h = z = _l(z, x), Jn !== 4 && (Jn = 2), Mo === null ? Mo = [h] : Mo.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var Y = yh(h, z, r);
                Qd(h, Y);
                break e;
              case 1:
                x = z;
                var P = h.type, G = h.stateNode;
                if (!(h.flags & 128) && (typeof P.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (Ni === null || !Ni.has(G)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var ye = Vs(h, x, r);
                  Qd(h, ye);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        yp(u);
      } catch (Ie) {
        r = Ie, zn === u && u !== null && (zn = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Cf() {
    var n = Qs.current;
    return Qs.current = cf, n === null ? cf : n;
  }
  function mp() {
    (Jn === 0 || Jn === 3 || Jn === 2) && (Jn = 4), Nn === null || !(tu & 268435455) && !(yf & 268435455) || Ga(Nn, lr);
  }
  function bf(n, r) {
    var u = xt;
    xt |= 2;
    var l = Cf();
    (Nn !== n || lr !== r) && (nu = null, Uo(n, r));
    do
      try {
        $y();
        break;
      } catch (f) {
        kh(n, f);
      }
    while (1);
    if ($d(), xt = u, Qs.current = l, zn !== null)
      throw Error(v(261));
    return Nn = null, lr = 0, Jn;
  }
  function $y() {
    for (; zn !== null; )
      Nh(zn);
  }
  function Yy() {
    for (; zn !== null && !Ci(); )
      Nh(zn);
  }
  function Nh(n) {
    var r = Lh(n.alternate, n, Da);
    n.memoizedProps = n.pendingProps, r === null ? yp(n) : zn = r, fp.current = null;
  }
  function yp(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = op(u, r), u !== null) {
          u.flags &= 32767, zn = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Jn = 6, zn = null;
          return;
        }
      } else if (u = By(u, r, Da), u !== null) {
        zn = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        zn = r;
        return;
      }
      zn = r = n;
    } while (r !== null);
    Jn === 0 && (Jn = 5);
  }
  function jo(n, r, u) {
    var l = Ht, f = kr.transition;
    try {
      kr.transition = null, Ht = 1, Wy(n, r, u, l);
    } finally {
      kr.transition = f, Ht = l;
    }
    return null;
  }
  function Wy(n, r, u, l) {
    do
      Fl();
    while (Yu !== null);
    if (xt & 6)
      throw Error(v(327));
    u = n.finishedWork;
    var f = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = u.lanes | u.childLanes;
    if (pd(n, h), n === Nn && (zn = Nn = null, lr = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || $u || ($u = !0, gp(bi, function() {
      return Fl(), null;
    })), h = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || h) {
      h = kr.transition, kr.transition = null;
      var C = Ht;
      Ht = 1;
      var x = xt;
      xt |= 4, fp.current = null, Rh(n, u), wh(u, n), Dc(mo), ja = !!Md, mo = Md = null, n.current = u, _h(u), el(), xt = x, Ht = C, kr.transition = h;
    } else
      n.current = u;
    if ($u && ($u = !1, Yu = n, Sf = f), h = n.pendingLanes, h === 0 && (Ni = null), ps(u.stateNode), Lr(n, jt()), r !== null)
      for (l = n.onRecoverableError, u = 0; u < r.length; u++)
        f = r[u], l(f.value, { componentStack: f.stack, digest: f.digest });
    if (gf)
      throw gf = !1, n = Lo, Lo = null, n;
    return Sf & 1 && n.tag !== 0 && Fl(), h = n.pendingLanes, h & 1 ? n === Ef ? Ul++ : (Ul = 0, Ef = n) : Ul = 0, ua(), null;
  }
  function Fl() {
    if (Yu !== null) {
      var n = il(Sf), r = kr.transition, u = Ht;
      try {
        if (kr.transition = null, Ht = 16 > n ? 16 : n, Yu === null)
          var l = !1;
        else {
          if (n = Yu, Yu = null, Sf = 0, xt & 6)
            throw Error(v(331));
          var f = xt;
          for (xt |= 4, ze = n.current; ze !== null; ) {
            var h = ze, C = h.child;
            if (ze.flags & 16) {
              var x = h.deletions;
              if (x !== null) {
                for (var z = 0; z < x.length; z++) {
                  var Z = x[z];
                  for (ze = Z; ze !== null; ) {
                    var fe = ze;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(8, fe, h);
                    }
                    var pe = fe.child;
                    if (pe !== null)
                      pe.return = fe, ze = pe;
                    else
                      for (; ze !== null; ) {
                        fe = ze;
                        var ce = fe.sibling, De = fe.return;
                        if (sp(fe), fe === Z) {
                          ze = null;
                          break;
                        }
                        if (ce !== null) {
                          ce.return = De, ze = ce;
                          break;
                        }
                        ze = De;
                      }
                  }
                }
                var je = h.alternate;
                if (je !== null) {
                  var He = je.child;
                  if (He !== null) {
                    je.child = null;
                    do {
                      var Hn = He.sibling;
                      He.sibling = null, He = Hn;
                    } while (He !== null);
                  }
                }
                ze = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null)
              C.return = h, ze = C;
            else
              e:
                for (; ze !== null; ) {
                  if (h = ze, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, h, h.return);
                    }
                  var Y = h.sibling;
                  if (Y !== null) {
                    Y.return = h.return, ze = Y;
                    break e;
                  }
                  ze = h.return;
                }
          }
          var P = n.current;
          for (ze = P; ze !== null; ) {
            C = ze;
            var G = C.child;
            if (C.subtreeFlags & 2064 && G !== null)
              G.return = C, ze = G;
            else
              e:
                for (C = P; ze !== null; ) {
                  if (x = ze, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ws(9, x);
                      }
                    } catch (Ie) {
                      Un(x, x.return, Ie);
                    }
                  if (x === C) {
                    ze = null;
                    break e;
                  }
                  var ye = x.sibling;
                  if (ye !== null) {
                    ye.return = x.return, ze = ye;
                    break e;
                  }
                  ze = x.return;
                }
          }
          if (xt = f, ua(), ta && typeof ta.onPostCommitFiberRoot == "function")
            try {
              ta.onPostCommitFiberRoot(gu, n);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Ht = u, kr.transition = r;
      }
    }
    return !1;
  }
  function Mh(n, r, u) {
    r = _l(u, r), r = yh(n, r, 1), n = Pu(n, r, 1), r = Nr(), n !== null && (Vi(n, 1, r), Lr(n, r));
  }
  function Un(n, r, u) {
    if (n.tag === 3)
      Mh(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Mh(r, n, u);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ni === null || !Ni.has(l))) {
            n = _l(u, n), n = Vs(r, n, 1), r = Pu(r, n, 1), n = Nr(), r !== null && (Vi(r, 1, n), Lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Qy(n, r, u) {
    var l = n.pingCache;
    l !== null && l.delete(r), r = Nr(), n.pingedLanes |= n.suspendedLanes & u, Nn === n && (lr & u) === u && (Jn === 4 || Jn === 3 && (lr & 130023424) === lr && 500 > jt() - dp ? Uo(n, 0) : Al |= u), Lr(n, r);
  }
  function Rf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Su, Su <<= 1, !(Su & 130023424) && (Su = 4194304)) : r = 1);
    var u = Nr();
    n = Ki(n, r), n !== null && (Vi(n, r, u), Lr(n, u));
  }
  function Gy(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), Rf(n, u);
  }
  function qy(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode, f = n.memoizedState;
        f !== null && (u = f.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(v(314));
    }
    l !== null && l.delete(r), Rf(n, u);
  }
  var Lh;
  Lh = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || An.current)
        Wn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Wn = !1, Ji(n, r, u);
        Wn = !!(n.flags & 131072);
      }
    else
      Wn = !1, gn && r.flags & 1048576 && Fd(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        Or(n, r), n = r.pendingProps;
        var f = Va(r, ot.current);
        Ce(r, u), f = Hu(null, r, l, n, f, u);
        var h = wo();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tn(l) ? (h = !0, zc(r)) : h = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Wd(r), f.updater = Bc, r.stateNode = f, f._reactInternals = r, $c(r, l, n, u), r = Sh(null, r, l, !0, h, u)) : (r.tag = 0, gn && h && Uc(r), Kn(null, r, f, u), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (Or(n, r), n = r.pendingProps, f = l._init, l = f(l._payload), r.type = l, f = r.tag = Xy(l), n = xa(l, n), f) {
            case 0:
              r = xl(null, r, l, n, u);
              break e;
            case 1:
              r = tp(null, r, l, n, u);
              break e;
            case 11:
              r = Bu(null, r, l, n, u);
              break e;
            case 14:
              r = df(null, r, l, xa(l.type, n), u);
              break e;
          }
          throw Error(v(
            306,
            l,
            ""
          ));
        }
        return r;
      case 0:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), xl(n, r, l, f, u);
      case 1:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), tp(n, r, l, f, u);
      case 3:
        e: {
          if (Eh(r), n === null)
            throw Error(v(387));
          l = r.pendingProps, h = r.memoizedState, f = h.element, qn(n, r), Fu(r, l, null, u);
          var C = r.memoizedState;
          if (l = C.element, h.isDehydrated)
            if (h = { element: l, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              f = _l(Error(v(423)), r), r = pf(n, r, l, u, f);
              break e;
            } else if (l !== f) {
              f = _l(Error(v(424)), r), r = pf(n, r, l, u, f);
              break e;
            } else
              for (sa = ci(r.stateNode.containerInfo.firstChild), _a = r, gn = !0, Ba = null, u = hh(r, null, l, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Dn(), l === f) {
              r = hr(n, r, u);
              break e;
            }
            Kn(n, r, l, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return et(r), n === null && Pc(r), l = r.type, f = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = f.children, Os(l, f) ? C = null : h !== null && Os(l, h) && (r.flags |= 32), St(n, r), Kn(n, r, C, u), r.child;
      case 6:
        return n === null && Pc(r), null;
      case 13:
        return rp(n, r, u);
      case 4:
        return qd(r, r.stateNode.containerInfo), l = r.pendingProps, n === null ? r.child = Cl(r, null, l, u) : Kn(n, r, l, u), r.child;
      case 11:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), Bu(n, r, l, f, u);
      case 7:
        return Kn(n, r, r.pendingProps, u), r.child;
      case 8:
        return Kn(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return Kn(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (l = r.type._context, f = r.pendingProps, h = r.memoizedProps, C = f.value, Kt(xi, l._currentValue), l._currentValue = C, h !== null)
            if (Pa(h.value, C)) {
              if (h.children === f.children && !An.current) {
                r = hr(n, r, u);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var x = h.dependencies;
                if (x !== null) {
                  C = h.child;
                  for (var z = x.firstContext; z !== null; ) {
                    if (z.context === l) {
                      if (h.tag === 1) {
                        z = Xi(-1, u & -u), z.tag = 2;
                        var Z = h.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var fe = Z.pending;
                          fe === null ? z.next = z : (z.next = fe.next, fe.next = z), Z.pending = z;
                        }
                      }
                      h.lanes |= u, z = h.alternate, z !== null && (z.lanes |= u), ur(
                        h.return,
                        u,
                        r
                      ), x.lanes |= u;
                      break;
                    }
                    z = z.next;
                  }
                } else if (h.tag === 10)
                  C = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (C = h.return, C === null)
                    throw Error(v(341));
                  C.lanes |= u, x = C.alternate, x !== null && (x.lanes |= u), ur(C, u, r), C = h.sibling;
                } else
                  C = h.child;
                if (C !== null)
                  C.return = h;
                else
                  for (C = h; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (h = C.sibling, h !== null) {
                      h.return = C.return, C = h;
                      break;
                    }
                    C = C.return;
                  }
                h = C;
              }
          Kn(n, r, f.children, u), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, l = r.pendingProps.children, Ce(r, u), f = Vn(f), l = l(f), r.flags |= 1, Kn(n, r, l, u), r.child;
      case 14:
        return l = r.type, f = xa(l, r.pendingProps), f = xa(l.type, f), df(n, r, l, f, u);
      case 15:
        return da(n, r, r.type, r.pendingProps, u);
      case 17:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), Or(n, r), r.tag = 1, Tn(l) ? (n = !0, zc(r)) : n = !1, Ce(r, u), fh(r, l, f), $c(r, l, f, u), Sh(null, r, l, !0, n, u);
      case 19:
        return up(n, r, u);
      case 22:
        return Do(n, r, u);
    }
    throw Error(v(156, r.tag));
  };
  function gp(n, r) {
    return hn(n, r);
  }
  function Ky(n, r, u, l) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qa(n, r, u, l) {
    return new Ky(n, r, u, l);
  }
  function Sp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Xy(n) {
    if (typeof n == "function")
      return Sp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === st)
        return 11;
      if (n === Dt)
        return 14;
    }
    return 2;
  }
  function Qu(n, r) {
    var u = n.alternate;
    return u === null ? (u = qa(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Tf(n, r, u, l, f, h) {
    var C = 2;
    if (l = n, typeof n == "function")
      Sp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case ge:
            return Po(u.children, f, h, r);
          case Ye:
            C = 8, f |= 8;
            break;
          case tt:
            return n = qa(12, u, r, f | 2), n.elementType = tt, n.lanes = h, n;
          case Ae:
            return n = qa(13, u, r, f), n.elementType = Ae, n.lanes = h, n;
          case $e:
            return n = qa(19, u, r, f), n.elementType = $e, n.lanes = h, n;
          case _e:
            return Ks(u, f, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ze:
                  C = 10;
                  break e;
                case Ue:
                  C = 9;
                  break e;
                case st:
                  C = 11;
                  break e;
                case Dt:
                  C = 14;
                  break e;
                case Et:
                  C = 16, l = null;
                  break e;
              }
            throw Error(v(130, n == null ? n : typeof n, ""));
        }
    return r = qa(C, u, r, f), r.elementType = n, r.type = l, r.lanes = h, r;
  }
  function Po(n, r, u, l) {
    return n = qa(7, n, l, r), n.lanes = u, n;
  }
  function Ks(n, r, u, l) {
    return n = qa(22, n, l, r), n.elementType = _e, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Xs(n, r, u) {
    return n = qa(6, n, null, r), n.lanes = u, n;
  }
  function Fo(n, r, u) {
    return r = qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zy(n, r, u, l, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = l, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function wf(n, r, u, l, f, h, C, x, z) {
    return n = new Zy(n, r, u, x, z), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = qa(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: l, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wd(h), n;
  }
  function Ah(n, r, u) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: de, key: l == null ? null : "" + l, children: n, containerInfo: r, implementation: u };
  }
  function Ep(n) {
    if (!n)
      return _i;
    n = n._reactInternals;
    e: {
      if (mt(n) !== n || n.tag !== 1)
        throw Error(v(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Tn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Tn(u))
        return Ns(n, u, r);
    }
    return r;
  }
  function zh(n, r, u, l, f, h, C, x, z) {
    return n = wf(u, l, !0, n, f, h, C, x, z), n.context = Ep(null), u = n.current, l = Nr(), f = Qn(u), h = Xi(l, f), h.callback = r ?? null, Pu(u, h, f), n.current.lanes = f, Vi(n, f, l), Lr(n, l), n;
  }
  function Zs(n, r, u, l) {
    var f = r.current, h = Nr(), C = Qn(f);
    return u = Ep(u), r.context === null ? r.context = u : r.pendingContext = u, r = Xi(h, C), r.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (r.callback = l), n = Pu(f, r, C), n !== null && (Mr(n, f, C, h), Ic(n, f, C)), C;
  }
  function _f(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Uh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function Cp(n, r) {
    Uh(n, r), (n = n.alternate) && Uh(n, r);
  }
  function jh() {
    return null;
  }
  var bp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xf(n) {
    this._internalRoot = n;
  }
  ru.prototype.render = xf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(v(409));
    Zs(n, r, null, null);
  }, ru.prototype.unmount = xf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Wu(function() {
        Zs(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function ru(n) {
    this._internalRoot = n;
  }
  ru.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ol();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < qt.length && r !== 0 && r < qt[u].priority; u++)
        ;
      qt.splice(u, 0, n), u === 0 && bc(n);
    }
  };
  function Rp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ph() {
  }
  function Jy(n, r, u, l, f) {
    if (f) {
      if (typeof l == "function") {
        var h = l;
        l = function() {
          var Z = _f(C);
          h.call(Z);
        };
      }
      var C = zh(r, l, n, 0, null, !1, !1, "", Ph);
      return n._reactRootContainer = C, n[Gi] = C.current, yl(n.nodeType === 8 ? n.parentNode : n), Wu(), C;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof l == "function") {
      var x = l;
      l = function() {
        var Z = _f(z);
        x.call(Z);
      };
    }
    var z = wf(n, 0, !1, null, null, !1, !1, "", Ph);
    return n._reactRootContainer = z, n[Gi] = z.current, yl(n.nodeType === 8 ? n.parentNode : n), Wu(function() {
      Zs(r, z, u, l);
    }), z;
  }
  function Df(n, r, u, l, f) {
    var h = u._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof f == "function") {
        var x = f;
        f = function() {
          var z = _f(C);
          x.call(z);
        };
      }
      Zs(r, C, n, f);
    } else
      C = Jy(u, r, n, f, l);
    return _f(C);
  }
  lo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ii(r.pendingLanes);
          u !== 0 && (Ri(r, u | 1), Lr(r, jt()), !(xt & 6) && (zl = jt() + 500, ua()));
        }
        break;
      case 13:
        Wu(function() {
          var l = Ki(n, 1);
          if (l !== null) {
            var f = Nr();
            Mr(l, n, 1, f);
          }
        }), Cp(n, 1);
    }
  }, ul = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var u = Nr();
        Mr(r, n, 134217728, u);
      }
      Cp(n, 134217728);
    }
  }, Pt = function(n) {
    if (n.tag === 13) {
      var r = Qn(n), u = Ki(n, r);
      if (u !== null) {
        var l = Nr();
        Mr(u, n, r, l);
      }
      Cp(n, r);
    }
  }, ol = function() {
    return Ht;
  }, ll = function(n, r) {
    var u = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = u;
    }
  }, Ur = function(n, r, u) {
    switch (r) {
      case "input":
        if (Rn(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var l = u[r];
            if (l !== n && l.form === n.form) {
              var f = Ge(l);
              if (!f)
                throw Error(v(90));
              Oe(l), Rn(l, f);
            }
          }
        }
        break;
      case "textarea":
        Sa(n, u);
        break;
      case "select":
        r = u.value, r != null && Tr(n, !!u.multiple, r, !1);
    }
  }, oo = Pl, Jo = Wu;
  var eg = { usingClientEntryPoint: !1, Events: [ks, gl, Ge, za, hu, Pl] }, Vl = { findFiberByHostInstance: Fa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tg = { bundleType: Vl.bundleType, version: Vl.version, rendererPackageName: Vl.rendererPackageName, rendererConfig: Vl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vl.findFiberByHostInstance || jh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kf.isDisabled && kf.supportsFiber)
      try {
        gu = kf.inject(tg), ta = kf;
      } catch {
      }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg, ti.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Rp(r))
      throw Error(v(200));
    return Ah(n, r, null, u);
  }, ti.createRoot = function(n, r) {
    if (!Rp(n))
      throw Error(v(299));
    var u = !1, l = "", f = bp;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = wf(n, 1, !1, null, null, u, !1, l, f), n[Gi] = r.current, yl(n.nodeType === 8 ? n.parentNode : n), new xf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = $n(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return Wu(n);
  }, ti.hydrate = function(n, r, u) {
    if (!Of(r))
      throw Error(v(200));
    return Df(null, n, r, !0, u);
  }, ti.hydrateRoot = function(n, r, u) {
    if (!Rp(n))
      throw Error(v(405));
    var l = u != null && u.hydratedSources || null, f = !1, h = "", C = bp;
    if (u != null && (u.unstable_strictMode === !0 && (f = !0), u.identifierPrefix !== void 0 && (h = u.identifierPrefix), u.onRecoverableError !== void 0 && (C = u.onRecoverableError)), r = zh(r, null, n, 1, u ?? null, f, !1, h, C), n[Gi] = r.current, yl(n), l)
      for (n = 0; n < l.length; n++)
        u = l[n], f = u._getVersion, f = f(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, f] : r.mutableSourceEagerHydrationData.push(
          u,
          f
        );
    return new ru(r);
  }, ti.render = function(n, r, u) {
    if (!Of(r))
      throw Error(v(200));
    return Df(null, n, r, !1, u);
  }, ti.unmountComponentAtNode = function(n) {
    if (!Of(n))
      throw Error(v(40));
    return n._reactRootContainer ? (Wu(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = Pl, ti.unstable_renderSubtreeIntoContainer = function(n, r, u, l) {
    if (!Of(u))
      throw Error(v(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(v(38));
    return Df(n, r, u, !1, l);
  }, ti.version = "18.2.0-next-9e3b772b8-20220608", ti;
}
var ni = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1;
function Tk() {
  return h1 || (h1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = dn, p = q1(), v = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function R(e) {
      E = e;
    }
    function w(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        V("warn", e, a);
      }
    }
    function g(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        V("error", e, a);
      }
    }
    function V(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var L = 0, _ = 1, U = 2, k = 3, M = 4, A = 5, B = 6, $ = 7, I = 8, oe = 9, le = 10, te = 11, J = 12, H = 13, de = 14, ge = 15, Ye = 16, tt = 17, Ze = 18, Ue = 19, st = 21, Ae = 22, $e = 23, Dt = 24, Et = 25, _e = !0, he = !1, Ve = !1, N = !1, ue = !1, Re = !0, at = !1, qe = !1, Rt = !0, dt = !0, Ct = !0, pt = /* @__PURE__ */ new Set(), Ut = {}, tr = {};
    function Bn(e, t) {
      Oe(e, t), Oe(e + "Capture", t);
    }
    function Oe(e, t) {
      Ut[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ut[e] = t;
      {
        var a = e.toLowerCase();
        tr[a] = e, e === "onDoubleClick" && (tr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        pt.add(t[i]);
    }
    var Zt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", we = Object.prototype.hasOwnProperty;
    function pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function bn(e) {
      try {
        return Rn(e), !1;
      } catch {
        return !0;
      }
    }
    function Rn(e) {
      return "" + e;
    }
    function Xr(e, t) {
      if (bn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), Rn(e);
    }
    function Zr(e) {
      if (bn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), Rn(e);
    }
    function nr(e, t) {
      if (bn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), Rn(e);
    }
    function Tr(e, t) {
      if (bn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), Rn(e);
    }
    function Jr(e) {
      if (bn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), Rn(e);
    }
    function wr(e) {
      if (bn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", pn(e)), Rn(e);
    }
    var Sa = 0, fr = 1, ea = 2, _n = 3, zr = 4, yi = 5, Ea = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", We = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", bt = new RegExp("^[" + Se + "][" + We + "]*$"), $t = {}, Wt = {};
    function Fn(e) {
      return we.call(Wt, e) ? !0 : we.call($t, e) ? !1 : bt.test(e) ? (Wt[e] = !0, !0) : ($t[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === Sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function _r(e, t, a, i) {
      if (a !== null && a.type === Sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jt(e, t, a, i) {
      if (t === null || typeof t > "u" || _r(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _n:
            return !t;
          case zr:
            return t === !1;
          case yi:
            return isNaN(t);
          case Ea:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ur(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Qt(e, t, a, i, o, s, d) {
      this.acceptsBooleans = t === ea || t === _n || t === zr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Gt = {}, ri = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ri.forEach(function(e) {
      Gt[e] = new Qt(
        e,
        Sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Gt[t] = new Qt(
        t,
        fr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        ea,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        _n,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        _n,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        zr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        Ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        yi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var za = /[\-\:]([a-z])/g, hu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(za, hu);
      Gt[t] = new Qt(
        t,
        fr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(za, hu);
      Gt[t] = new Qt(
        t,
        fr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(za, hu);
      Gt[t] = new Qt(
        t,
        fr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        fr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var oo = "xlinkHref";
    Gt[oo] = new Qt(
      "xlinkHref",
      fr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        fr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Jo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Fi = !1;
    function mu(e) {
      !Fi && Jo.test(e) && (Fi = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ca(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Xr(a, t), i.sanitizeURL && mu("" + a);
        var s = i.attributeName, d = null;
        if (i.type === zr) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : Jt(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (Jt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === _n)
            return a;
          d = e.getAttribute(s);
        }
        return Jt(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function gi(e, t, a, i) {
      {
        if (!Fn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Xr(a, t), o === "" + a ? a : o;
      }
    }
    function ba(e, t, a, i) {
      var o = Ur(t);
      if (!xn(t, o, i)) {
        if (Jt(t, a, o, i) && (a = null), i || o === null) {
          if (Fn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Xr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = o.mustUseProperty;
        if (d) {
          var m = o.propertyName;
          if (a === null) {
            var y = o.type;
            e[m] = y === _n ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var b = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var F = o.type, j;
          F === _n || F === zr && a === !0 ? j = "" : (Xr(a, b), j = "" + a, o.sanitizeURL && mu(j.toString())), T ? e.setAttributeNS(T, b, j) : e.setAttribute(b, j);
        }
      }
    }
    var Si = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Ra = Symbol.for("react.fragment"), Ei = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), Nt = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), $n = Symbol.for("react.scope"), vn = Symbol.for("react.debug_trace_mode"), hn = Symbol.for("react.offscreen"), dr = Symbol.for("react.legacy_hidden"), Ci = Symbol.for("react.cache"), el = Symbol.for("react.tracing_marker"), jt = Symbol.iterator, dd = "@@iterator";
    function ai(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = jt && e[jt] || e[dd];
      return typeof t == "function" ? t : null;
    }
    var Tt = Object.assign, bi = 0, yu, tl, gu, ta, ps, Pr, vs;
    function hs() {
    }
    hs.__reactDisabledLog = !0;
    function Ec() {
      {
        if (bi === 0) {
          yu = console.log, tl = console.info, gu = console.warn, ta = console.error, ps = console.group, Pr = console.groupCollapsed, vs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: hs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        bi++;
      }
    }
    function nl() {
      {
        if (bi--, bi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, e, {
              value: yu
            }),
            info: Tt({}, e, {
              value: tl
            }),
            warn: Tt({}, e, {
              value: gu
            }),
            error: Tt({}, e, {
              value: ta
            }),
            group: Tt({}, e, {
              value: ps
            }),
            groupCollapsed: Tt({}, e, {
              value: Pr
            }),
            groupEnd: Tt({}, e, {
              value: vs
            })
          });
        }
        bi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Su = v.ReactCurrentDispatcher, ii;
    function Fr(e, t, a) {
      {
        if (ii === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ii = i && i[1] || "";
          }
        return `
` + ii + e;
      }
    }
    var Eu = !1, Cu;
    {
      var bu = typeof WeakMap == "function" ? WeakMap : Map;
      Cu = new bu();
    }
    function rl(e, t) {
      if (!e || Eu)
        return "";
      {
        var a = Cu.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Eu = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Su.current, Su.current = null, Ec();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (X) {
              i = X;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (X) {
              i = X;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            i = X;
          }
          e();
        }
      } catch (X) {
        if (X && i && typeof X.stack == "string") {
          for (var m = X.stack.split(`
`), y = i.stack.split(`
`), b = m.length - 1, T = y.length - 1; b >= 1 && T >= 0 && m[b] !== y[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (m[b] !== y[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || m[b] !== y[T]) {
                    var F = `
` + m[b].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && Cu.set(e, F), F;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Eu = !1, Su.current = s, nl(), Error.prepareStackTrace = o;
      }
      var j = e ? e.displayName || e.name : "", q = j ? Fr(j) : "";
      return typeof e == "function" && Cu.set(e, q), q;
    }
    function al(e, t, a) {
      return rl(e, !0);
    }
    function Vi(e, t, a) {
      return rl(e, !1);
    }
    function pd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ri(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return rl(e, pd(e));
      if (typeof e == "string")
        return Fr(e);
      switch (e) {
        case mt:
          return Fr("Suspense");
        case Nt:
          return Fr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ne:
            return Vi(e.render);
          case yt:
            return Ri(e.type, t, a);
          case Ke: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Ri(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case A:
          return Fr(e.type);
        case Ye:
          return Fr("Lazy");
        case H:
          return Fr("Suspense");
        case Ue:
          return Fr("SuspenseList");
        case L:
        case U:
        case ge:
          return Vi(e.type);
        case te:
          return Vi(e.type.render);
        case _:
          return al(e.type);
        default:
          return "";
      }
    }
    function il(e) {
      try {
        var t = "", a = e;
        do
          t += Ht(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function lo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function ul(e) {
      return e.displayName || "Context";
    }
    function Pt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ra:
          return "Fragment";
        case jr:
          return "Portal";
        case D:
          return "Profiler";
        case Ei:
          return "StrictMode";
        case mt:
          return "Suspense";
        case Nt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            var t = e;
            return ul(t) + ".Consumer";
          case se:
            var a = e;
            return ul(a._context) + ".Provider";
          case Ne:
            return lo(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case Ke: {
            var o = e, s = o._payload, d = o._init;
            try {
              return Pt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ol(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ll(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case oe:
          var i = a;
          return ll(i) + ".Consumer";
        case le:
          var o = a;
          return ll(o._context) + ".Provider";
        case Ze:
          return "DehydratedFragment";
        case te:
          return ol(a, a.render, "ForwardRef");
        case $:
          return "Fragment";
        case A:
          return a;
        case M:
          return "Portal";
        case k:
          return "Root";
        case B:
          return "Text";
        case Ye:
          return Pt(a);
        case I:
          return a === Ei ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case J:
          return "Profiler";
        case st:
          return "Scope";
        case H:
          return "Suspense";
        case Ue:
          return "SuspenseList";
        case Et:
          return "TracingMarker";
        case _:
        case L:
        case tt:
        case U:
        case de:
        case ge:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var so = v.ReactDebugCurrentFrame, On = null, na = !1;
    function Vr() {
      {
        if (On === null)
          return null;
        var e = On._debugOwner;
        if (e !== null && typeof e < "u")
          return ct(e);
      }
      return null;
    }
    function Ru() {
      return On === null ? "" : il(On);
    }
    function Ln() {
      so.getCurrentStack = null, On = null, na = !1;
    }
    function qt(e) {
      so.getCurrentStack = e === null ? null : Ru, On = e, na = !1;
    }
    function Cc() {
      return On;
    }
    function ra(e) {
      na = e;
    }
    function rr(e) {
      return "" + e;
    }
    function Ti(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wr(e), e;
        default:
          return "";
      }
    }
    var bc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Hi(e, t) {
      bc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rc(e) {
      return e._valueTracker;
    }
    function Ua(e) {
      e._valueTracker = null;
    }
    function wu(e) {
      var t = "";
      return e && (Tu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function _u(e) {
      var t = Tu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(m) {
            wr(m), i = "" + m, s.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            wr(m), i = "" + m;
          },
          stopTracking: function() {
            Ua(e), delete e[t];
          }
        };
        return d;
      }
    }
    function ja(e) {
      Rc(e) || (e._valueTracker = _u(e));
    }
    function sl(e) {
      if (!e)
        return !1;
      var t = Rc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = wu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function xu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ou = !1, co = !1, cl = !1, ms = !1;
    function ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var a = e, i = t.checked, o = Tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function O(e, t) {
      Hi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !co && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), co = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ou && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), Ou = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ti(t.value != null ? t.value : i),
        controlled: ui(t)
      };
    }
    function K(e, t) {
      var a = e, i = t.checked;
      i != null && ba(a, "checked", i, !1);
    }
    function ee(e, t) {
      var a = e;
      {
        var i = ui(t);
        !a._wrapperState.controlled && i && !ms && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ms = !0), a._wrapperState.controlled && !i && !cl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cl = !0);
      }
      K(e, t);
      var o = Ti(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = rr(o)) : a.value !== rr(o) && (a.value = rr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Je(a, t.type, o) : t.hasOwnProperty("defaultValue") && Je(a, t.type, Ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function me(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = rr(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function nt(e, t) {
      var a = e;
      ee(a, t), Te(a, t);
    }
    function Te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Xr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var d = o[s];
          if (!(d === e || d.form !== e.form)) {
            var m = tm(d);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            sl(d), ee(d, m);
          }
        }
      }
    }
    function Je(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || xu(e.ownerDocument) !== e) && (a == null ? e.defaultValue = rr(e._wrapperState.initialValue) : e.defaultValue !== rr(a) && (e.defaultValue = rr(a)));
    }
    var wt = !1, Ft = !1, ln = !1;
    function en(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ft || (Ft = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ln || (ln = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !wt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), wt = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", rr(Ti(t.value)));
    }
    var mn = Array.isArray;
    function kt(e) {
      return mn(e);
    }
    var Ii;
    Ii = !1;
    function fl() {
      var e = Vr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ys = ["value", "defaultValue"];
    function vd(e) {
      {
        Hi("select", e);
        for (var t = 0; t < ys.length; t++) {
          var a = ys[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, fl()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, fl());
          }
        }
      }
    }
    function oi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, d = {}, m = 0; m < s.length; m++)
          d["$" + s[m]] = !0;
        for (var y = 0; y < o.length; y++) {
          var b = d.hasOwnProperty("$" + o[y].value);
          o[y].selected !== b && (o[y].selected = b), b && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var T = rr(Ti(a)), F = null, j = 0; j < o.length; j++) {
          if (o[j].value === T) {
            o[j].selected = !0, i && (o[j].defaultSelected = !0);
            return;
          }
          F === null && !o[j].disabled && (F = o[j]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function gs(e, t) {
      return Tt({}, t, {
        value: void 0
      });
    }
    function Ss(e, t) {
      var a = e;
      vd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ii && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ii = !0);
    }
    function hd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? oi(a, !!t.multiple, i, !1) : t.defaultValue != null && oi(a, !!t.multiple, t.defaultValue, !0);
    }
    function by(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? oi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? oi(a, !!t.multiple, t.defaultValue, !0) : oi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ry(e, t) {
      var a = e, i = t.value;
      i != null && oi(a, !!t.multiple, i, !1);
    }
    var md = !1;
    function yd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function kv(e, t) {
      var a = e;
      Hi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !md && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component"), md = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ti(i)
      };
    }
    function Nv(e, t) {
      var a = e, i = Ti(t.value), o = Ti(t.defaultValue);
      if (i != null) {
        var s = rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = rr(o));
    }
    function Mv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function gd(e, t) {
      Nv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Ty = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function Tc(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return Ty;
        default:
          return Bi;
      }
    }
    function Ed(e, t) {
      return e == null || e === Bi ? Tc(t) : e === Sd && t === "foreignObject" ? Bi : e;
    }
    var wy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, wc, Lv = wy(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        wc = wc || document.createElement("div"), wc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = wc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), aa = 1, $i = 3, Yn = 8, li = 9, fo = 11, _c = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Av = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, dl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function zv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(dl).forEach(function(e) {
      Uv.forEach(function(t) {
        dl[zv(t, e)] = dl[e];
      });
    });
    function xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(dl.hasOwnProperty(e) && dl[e]) ? t + "px" : (Tr(t, e), ("" + t).trim());
    }
    var pl = /([A-Z])/g, _y = /^ms-/;
    function xy(e) {
      return e.replace(pl, "-$1").toLowerCase().replace(_y, "-ms-");
    }
    var jv = function() {
    };
    {
      var Pv = /^(?:webkit|moz|o)[A-Z]/, Fv = /^-ms-/, Es = /-(.)/g, vl = /;\s*$/, hl = {}, ml = {}, Vv = !1, Cd = !1, bd = function(e) {
        return e.replace(Es, function(t, a) {
          return a.toUpperCase();
        });
      }, Rd = function(e) {
        hl.hasOwnProperty(e) && hl[e] || (hl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          bd(e.replace(Fv, "ms-"))
        ));
      }, Hv = function(e) {
        hl.hasOwnProperty(e) && hl[e] || (hl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Iv = function(e, t) {
        ml.hasOwnProperty(t) && ml[t] || (ml[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vl, "")));
      }, Bv = function(e, t) {
        Vv || (Vv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Oy = function(e, t) {
        Cd || (Cd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      jv = function(e, t) {
        e.indexOf("-") > -1 ? Rd(e) : Pv.test(e) ? Hv(e) : vl.test(t) && Iv(e, t), typeof t == "number" && (isNaN(t) ? Bv(e, t) : isFinite(t) || Oy(e, t));
      };
    }
    var Dy = jv;
    function ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : xy(i)) + ":", t += xc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function $v(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Dy(i, t[i]);
          var s = xc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Pa(e) {
      var t = {};
      for (var a in e)
        for (var i = Av[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function Cs(e, t) {
      {
        if (!t)
          return;
        var a = Pa(e), i = Pa(t), o = {};
        for (var s in a) {
          var d = a[s], m = i[s];
          if (m && d !== m) {
            var y = d + "," + m;
            if (o[y])
              continue;
            o[y] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ny(e[d]) ? "Removing" : "Updating", d, m);
          }
        }
      }
    }
    var Yv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Wv = Tt({
      menuitem: !0
    }, Yv), Qv = "__html";
    function Oc(e, t) {
      if (t) {
        if (Wv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Qv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Yi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Dc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Gv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, si = {}, Td = new RegExp("^(aria)-[" + We + "]*$"), bs = new RegExp("^(aria)[A-Z][" + We + "]*$");
    function wd(e, t) {
      {
        if (we.call(si, t) && si[t])
          return !0;
        if (bs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Gv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), si[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), si[t] = !0, !0;
        }
        if (Td.test(t)) {
          var o = t.toLowerCase(), s = Gv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return si[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), si[t] = !0, !0;
        }
      }
      return !0;
    }
    function qv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = wd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function kc(e, t) {
      Yi(e, t) || qv(e, t);
    }
    var po = !1;
    function _d(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !po && (po = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var xd = function() {
    };
    {
      var ar = {}, Od = /^on./, Kv = /^on[^A-Z]/, Xv = new RegExp("^(aria)-[" + We + "]*$"), Zv = new RegExp("^(aria)[A-Z][" + We + "]*$");
      xd = function(e, t, a, i) {
        if (we.call(ar, t) && ar[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ar[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var m = d.hasOwnProperty(o) ? d[o] : null;
          if (m != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, m), ar[t] = !0, !0;
          if (Od.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), ar[t] = !0, !0;
        } else if (Od.test(t))
          return Kv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ar[t] = !0, !0;
        if (Xv.test(t) || Zv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ar[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ar[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ar[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ar[t] = !0, !0;
        var y = Ur(t), b = y !== null && y.type === Sa;
        if (Dc.hasOwnProperty(o)) {
          var T = Dc[o];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), ar[t] = !0, !0;
        } else if (!b && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), ar[t] = !0, !0;
        return typeof a == "boolean" && _r(t, a, y, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ar[t] = !0, !0) : b ? !0 : _r(t, a, y, !1) ? (ar[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === _n && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ar[t] = !0), !0);
      };
    }
    var Jv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = xd(e, o, t[o], a);
          s || i.push(o);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function eh(e, t, a) {
      Yi(e, t) || Jv(e, t, a);
    }
    var Wi = 1, Rs = 2, vo = 4, My = Wi | Rs | vo, Ts = null;
    function ws(e) {
      Ts !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ts = e;
    }
    function Ly() {
      Ts === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ts = null;
    }
    function th(e) {
      return e === Ts;
    }
    function Nc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var cn = null, Du = null, Qi = null;
    function yl(e) {
      var t = Bl(e);
      if (t) {
        if (typeof cn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = tm(a);
          cn(t.stateNode, t.type, i);
        }
      }
    }
    function nh(e) {
      cn = e;
    }
    function Mc(e) {
      Du ? Qi ? Qi.push(e) : Qi = [e] : Du = e;
    }
    function _s() {
      return Du !== null || Qi !== null;
    }
    function xs() {
      if (Du) {
        var e = Du, t = Qi;
        if (Du = null, Qi = null, yl(e), t)
          for (var a = 0; a < t.length; a++)
            yl(t[a]);
      }
    }
    var ho = function(e, t) {
      return e(t);
    }, Dd = function() {
    }, kd = !1;
    function Ay() {
      var e = _s();
      e && (Dd(), xs());
    }
    function Nd(e, t, a) {
      if (kd)
        return e(t, a);
      kd = !0;
      try {
        return ho(e, t, a);
      } finally {
        kd = !1, Ay();
      }
    }
    function Lc(e, t, a) {
      ho = e, Dd = a;
    }
    function Ac(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Md(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Ac(t));
        default:
          return !1;
      }
    }
    function mo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = tm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Md(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Os = !1;
    if (Zt)
      try {
        var yo = {};
        Object.defineProperty(yo, "passive", {
          get: function() {
            Os = !0;
          }
        }), window.addEventListener("test", yo, yo), window.removeEventListener("test", yo, yo);
      } catch {
        Os = !1;
      }
    function rh(e, t, a, i, o, s, d, m, y) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var Ld = rh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ad = document.createElement("react");
      Ld = function(t, a, i, o, s, d, m, y, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), F = !1, j = !0, q = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ne() {
          Ad.removeEventListener(re, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var Me = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          F = !0, ne(), a.apply(i, Me), j = !1;
        }
        var Be, At = !1, Ot = !1;
        function W(Q) {
          if (Be = Q.error, At = !0, Be === null && Q.colno === 0 && Q.lineno === 0 && (Ot = !0), Q.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), Ad.addEventListener(re, Xe, !1), T.initEvent(re, !1, !1), Ad.dispatchEvent(T), X && Object.defineProperty(window, "event", X), F && j && (At ? Ot && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", W), !F)
          return ne(), rh.apply(this, arguments);
      };
    }
    var zy = Ld, ku = !1, ci = null, Ds = !1, Nu = null, wi = {
      onError: function(e) {
        ku = !0, ci = e;
      }
    };
    function go(e, t, a, i, o, s, d, m, y) {
      ku = !1, ci = null, zy.apply(wi, arguments);
    }
    function Gi(e, t, a, i, o, s, d, m, y) {
      if (go.apply(this, arguments), ku) {
        var b = Ud();
        Ds || (Ds = !0, Nu = b);
      }
    }
    function zd() {
      if (Ds) {
        var e = Nu;
        throw Ds = !1, Nu = null, e;
      }
    }
    function Uy() {
      return ku;
    }
    function Ud() {
      if (ku) {
        var e = ci;
        return ku = !1, ci = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Fa(e) {
      return e._reactInternals;
    }
    function ks(e) {
      return e._reactInternals !== void 0;
    }
    function gl(e, t) {
      e._reactInternals = t;
    }
    var Ge = (
      /*                      */
      0
    ), Mu = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), Yt = (
      /*                */
      16
    ), Kt = (
      /*                 */
      32
    ), _i = (
      /*                     */
      64
    ), ot = (
      /*                   */
      128
    ), An = (
      /*            */
      256
    ), ia = (
      /*                          */
      512
    ), Va = (
      /*                     */
      1024
    ), Tn = (
      /*                      */
      2048
    ), Ha = (
      /*                    */
      4096
    ), Lu = (
      /*                   */
      8192
    ), Ns = (
      /*             */
      16384
    ), zc = Tn | gt | _i | ia | Va | Ns, ah = (
      /*               */
      32767
    ), Ta = (
      /*                   */
      32768
    ), ir = (
      /*                */
      65536
    ), Ms = (
      /* */
      131072
    ), jd = (
      /*                       */
      1048576
    ), Pd = (
      /*                    */
      2097152
    ), ua = (
      /*                 */
      4194304
    ), Au = (
      /*                */
      8388608
    ), oa = (
      /*               */
      16777216
    ), So = (
      /*              */
      33554432
    ), Sl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      gt | Va | 0
    ), la = yn | gt | Yt | Kt | ia | Ha | Lu, xr = gt | _i | ia | Lu, Ia = Tn | Yt, pr = ua | Au | Pd, qi = v.ReactCurrentOwner;
    function wa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | Ha)) !== Ge && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === k ? a : null;
    }
    function Fd(e) {
      if (e.tag === H) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Uc(e) {
      return e.tag === k ? e.stateNode.containerInfo : null;
    }
    function Vd(e) {
      return wa(e) === e;
    }
    function _a(e) {
      {
        var t = qi.current;
        if (t !== null && t.tag === _) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Fa(e);
      return o ? wa(o) === o : !1;
    }
    function sa(e) {
      if (wa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function gn(e) {
      var t = e.alternate;
      if (!t) {
        var a = wa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var m = s.return;
          if (m !== null) {
            i = o = m;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return sa(s), e;
            if (y === o)
              return sa(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = d;
        else {
          for (var b = !1, T = s.child; T; ) {
            if (T === i) {
              b = !0, i = s, o = d;
              break;
            }
            if (T === o) {
              b = !0, o = s, i = d;
              break;
            }
            T = T.sibling;
          }
          if (!b) {
            for (T = d.child; T; ) {
              if (T === i) {
                b = !0, i = d, o = s;
                break;
              }
              if (T === o) {
                b = !0, o = d, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== k)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ba(e) {
      var t = gn(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === A || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ih(e) {
      var t = gn(e);
      return t !== null ? jc(t) : null;
    }
    function jc(e) {
      if (e.tag === A || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== M) {
          var a = jc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pc = p.unstable_scheduleCallback, uh = p.unstable_cancelCallback, Fc = p.unstable_shouldYield, oh = p.unstable_requestPaint, Dn = p.unstable_now, Id = p.unstable_getCurrentPriorityLevel, Vc = p.unstable_ImmediatePriority, xa = p.unstable_UserBlockingPriority, xi = p.unstable_NormalPriority, Hc = p.unstable_LowPriority, zu = p.unstable_IdlePriority, Bd = p.unstable_yieldValue, $d = p.unstable_setDisableYieldValue, Uu = null, ur = null, Ce = null, Vn = !1, vr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Rt && (e = Tt({}, e, {
          getLaneLabelMap: Pu,
          injectProfilingHooks: Xi
        })), Uu = t.inject(e), ur = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function lh(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(Uu, e, t);
        } catch (a) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ki(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ot) === ot;
          if (dt) {
            var i;
            switch (t) {
              case Or:
                i = Vc;
                break;
              case hr:
                i = xa;
                break;
              case Ji:
                i = xi;
                break;
              case Hs:
                i = zu;
                break;
              default:
                i = xi;
                break;
            }
            ur.onCommitFiberRoot(Uu, e, i, a);
          }
        } catch (o) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function ju(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(Uu, e);
        } catch (t) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Wd(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(Uu, e);
        } catch (t) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function qn(e) {
      if (typeof Bd == "function" && ($d(e), R(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(Uu, e);
        } catch (t) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Xi(e) {
      Ce = e;
    }
    function Pu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Sn; a++) {
          var i = jy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ic(e) {
      Ce !== null && typeof Ce.markCommitStarted == "function" && Ce.markCommitStarted(e);
    }
    function Qd() {
      Ce !== null && typeof Ce.markCommitStopped == "function" && Ce.markCommitStopped();
    }
    function Fu(e) {
      Ce !== null && typeof Ce.markComponentRenderStarted == "function" && Ce.markComponentRenderStarted(e);
    }
    function Eo() {
      Ce !== null && typeof Ce.markComponentRenderStopped == "function" && Ce.markComponentRenderStopped();
    }
    function sh(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStarted == "function" && Ce.markComponentPassiveEffectMountStarted(e);
    }
    function Gd() {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStopped == "function" && Ce.markComponentPassiveEffectMountStopped();
    }
    function Bc(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectUnmountStarted == "function" && Ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function ch() {
      Ce !== null && typeof Ce.markComponentPassiveEffectUnmountStopped == "function" && Ce.markComponentPassiveEffectUnmountStopped();
    }
    function fh(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectMountStarted == "function" && Ce.markComponentLayoutEffectMountStarted(e);
    }
    function dh() {
      Ce !== null && typeof Ce.markComponentLayoutEffectMountStopped == "function" && Ce.markComponentLayoutEffectMountStopped();
    }
    function $c(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStarted == "function" && Ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function El() {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStopped == "function" && Ce.markComponentLayoutEffectUnmountStopped();
    }
    function Yc(e, t, a) {
      Ce !== null && typeof Ce.markComponentErrored == "function" && Ce.markComponentErrored(e, t, a);
    }
    function ph(e, t, a) {
      Ce !== null && typeof Ce.markComponentSuspended == "function" && Ce.markComponentSuspended(e, t, a);
    }
    function vh(e) {
      Ce !== null && typeof Ce.markLayoutEffectsStarted == "function" && Ce.markLayoutEffectsStarted(e);
    }
    function Cl() {
      Ce !== null && typeof Ce.markLayoutEffectsStopped == "function" && Ce.markLayoutEffectsStopped();
    }
    function hh(e) {
      Ce !== null && typeof Ce.markPassiveEffectsStarted == "function" && Ce.markPassiveEffectsStarted(e);
    }
    function Ls() {
      Ce !== null && typeof Ce.markPassiveEffectsStopped == "function" && Ce.markPassiveEffectsStopped();
    }
    function fi(e) {
      Ce !== null && typeof Ce.markRenderStarted == "function" && Ce.markRenderStarted(e);
    }
    function As() {
      Ce !== null && typeof Ce.markRenderYielded == "function" && Ce.markRenderYielded();
    }
    function bl() {
      Ce !== null && typeof Ce.markRenderStopped == "function" && Ce.markRenderStopped();
    }
    function Co(e) {
      Ce !== null && typeof Ce.markRenderScheduled == "function" && Ce.markRenderScheduled(e);
    }
    function qd(e, t) {
      Ce !== null && typeof Ce.markForceUpdateScheduled == "function" && Ce.markForceUpdateScheduled(e, t);
    }
    function Vu(e, t) {
      Ce !== null && typeof Ce.markStateUpdateScheduled == "function" && Ce.markStateUpdateScheduled(e, t);
    }
    var et = (
      /*                         */
      0
    ), _t = (
      /*                 */
      1
    ), rt = (
      /*                    */
      2
    ), kn = (
      /*               */
      8
    ), $a = (
      /*              */
      16
    ), Wc = Math.clz32 ? Math.clz32 : bo, Qc = Math.log, Kd = Math.LN2;
    function bo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Qc(t) / Kd | 0) | 0;
    }
    var Sn = 31, ae = (
      /*                        */
      0
    ), Mt = (
      /*                          */
      0
    ), it = (
      /*                        */
      1
    ), Oi = (
      /*    */
      2
    ), Oa = (
      /*             */
      4
    ), Ro = (
      /*            */
      8
    ), En = (
      /*                     */
      16
    ), To = (
      /*                */
      32
    ), Hu = (
      /*                       */
      4194240
    ), wo = (
      /*                        */
      64
    ), Ya = (
      /*                        */
      128
    ), ca = (
      /*                        */
      256
    ), _o = (
      /*                        */
      512
    ), zs = (
      /*                        */
      1024
    ), Us = (
      /*                        */
      2048
    ), Gc = (
      /*                        */
      4096
    ), qc = (
      /*                        */
      8192
    ), Kc = (
      /*                        */
      16384
    ), Xc = (
      /*                       */
      32768
    ), Zc = (
      /*                       */
      65536
    ), Jc = (
      /*                       */
      131072
    ), ef = (
      /*                       */
      262144
    ), tf = (
      /*                       */
      524288
    ), xo = (
      /*                       */
      1048576
    ), nf = (
      /*                       */
      2097152
    ), Oo = (
      /*                            */
      130023424
    ), Zi = (
      /*                             */
      4194304
    ), rf = (
      /*                             */
      8388608
    ), js = (
      /*                             */
      16777216
    ), af = (
      /*                             */
      33554432
    ), uf = (
      /*                             */
      67108864
    ), Xd = Zi, Rl = (
      /*          */
      134217728
    ), of = (
      /*                          */
      268435455
    ), Tl = (
      /*               */
      268435456
    ), Iu = (
      /*                        */
      536870912
    ), fa = (
      /*                   */
      1073741824
    );
    function jy(e) {
      {
        if (e & it)
          return "Sync";
        if (e & Oi)
          return "InputContinuousHydration";
        if (e & Oa)
          return "InputContinuous";
        if (e & Ro)
          return "DefaultHydration";
        if (e & En)
          return "Default";
        if (e & To)
          return "TransitionHydration";
        if (e & Hu)
          return "Transition";
        if (e & Oo)
          return "Retry";
        if (e & Rl)
          return "SelectiveHydration";
        if (e & Tl)
          return "IdleHydration";
        if (e & Iu)
          return "Idle";
        if (e & fa)
          return "Offscreen";
      }
    }
    var fn = -1, lf = wo, sf = Zi;
    function wl(e) {
      switch (Wn(e)) {
        case it:
          return it;
        case Oi:
          return Oi;
        case Oa:
          return Oa;
        case Ro:
          return Ro;
        case En:
          return En;
        case To:
          return To;
        case wo:
        case Ya:
        case ca:
        case _o:
        case zs:
        case Us:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case tf:
        case xo:
        case nf:
          return e & Hu;
        case Zi:
        case rf:
        case js:
        case af:
        case uf:
          return e & Oo;
        case Rl:
          return Rl;
        case Tl:
          return Tl;
        case Iu:
          return Iu;
        case fa:
          return fa;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ps(e, t) {
      var a = e.pendingLanes;
      if (a === ae)
        return ae;
      var i = ae, o = e.suspendedLanes, s = e.pingedLanes, d = a & of;
      if (d !== ae) {
        var m = d & ~o;
        if (m !== ae)
          i = wl(m);
        else {
          var y = d & s;
          y !== ae && (i = wl(y));
        }
      } else {
        var b = a & ~o;
        b !== ae ? i = wl(b) : s !== ae && (i = wl(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ae) {
        var T = Wn(i), F = Wn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= F || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === En && (F & Hu) !== ae
        )
          return t;
      }
      (i & Oa) !== ae && (i |= a & En);
      var j = e.entangledLanes;
      if (j !== ae)
        for (var q = e.entanglements, X = i & j; X > 0; ) {
          var ne = Bu(X), Me = 1 << ne;
          i |= q[ne], X &= ~Me;
        }
      return i;
    }
    function mh(e, t) {
      for (var a = e.eventTimes, i = fn; t > 0; ) {
        var o = Bu(t), s = 1 << o, d = a[o];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function cf(e, t) {
      switch (e) {
        case it:
        case Oi:
        case Oa:
          return t + 250;
        case Ro:
        case En:
        case To:
        case wo:
        case Ya:
        case ca:
        case _o:
        case zs:
        case Us:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case tf:
        case xo:
        case nf:
          return t + 5e3;
        case Zi:
        case rf:
        case js:
        case af:
        case uf:
          return fn;
        case Rl:
        case Tl:
        case Iu:
        case fa:
          return fn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), fn;
      }
    }
    function Py(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Bu(d), y = 1 << m, b = s[m];
        b === fn ? ((y & i) === ae || (y & o) !== ae) && (s[m] = cf(y, t)) : b <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function Fy(e) {
      return wl(e.pendingLanes);
    }
    function Zd(e) {
      var t = e.pendingLanes & ~fa;
      return t !== ae ? t : t & fa ? fa : ae;
    }
    function _l(e) {
      return (e & it) !== ae;
    }
    function Fs(e) {
      return (e & of) !== ae;
    }
    function ff(e) {
      return (e & Oo) === e;
    }
    function Vy(e) {
      var t = it | Oa | En;
      return (e & t) === ae;
    }
    function yh(e) {
      return (e & Hu) === e;
    }
    function Vs(e, t) {
      var a = Oi | Oa | Ro | En;
      return (t & a) !== ae;
    }
    function gh(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function Jd(e) {
      return (e & Hu) !== ae;
    }
    function ep() {
      var e = lf;
      return lf <<= 1, (lf & Hu) === ae && (lf = wo), e;
    }
    function Hy() {
      var e = sf;
      return sf <<= 1, (sf & Oo) === ae && (sf = Zi), e;
    }
    function Wn(e) {
      return e & -e;
    }
    function Kn(e) {
      return Wn(e);
    }
    function Bu(e) {
      return 31 - Wc(e);
    }
    function df(e) {
      return Bu(e);
    }
    function da(e, t) {
      return (e & t) !== ae;
    }
    function Do(e, t) {
      return (e & t) === t;
    }
    function St(e, t) {
      return e | t;
    }
    function xl(e, t) {
      return e & ~t;
    }
    function tp(e, t) {
      return e & t;
    }
    function Sh(e) {
      return e;
    }
    function Eh(e, t) {
      return e !== Mt && e < t ? e : t;
    }
    function pf(e) {
      for (var t = [], a = 0; a < Sn; a++)
        t.push(e);
      return t;
    }
    function ko(e, t, a) {
      e.pendingLanes |= t, t !== Iu && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, o = df(t);
      i[o] = a;
    }
    function np(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Bu(i), s = 1 << o;
        a[o] = fn, i &= ~s;
      }
    }
    function rp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ap(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Bu(d), y = 1 << m;
        i[m] = ae, o[m] = fn, s[m] = fn, d &= ~y;
      }
    }
    function Ol(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Bu(o), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~d;
      }
    }
    function Iy(e, t) {
      var a = Wn(t), i;
      switch (a) {
        case Oa:
          i = Oi;
          break;
        case En:
          i = Ro;
          break;
        case wo:
        case Ya:
        case ca:
        case _o:
        case zs:
        case Us:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case tf:
        case xo:
        case nf:
        case Zi:
        case rf:
        case js:
        case af:
        case uf:
          i = To;
          break;
        case Iu:
          i = Tl;
          break;
        default:
          i = Mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Mt ? Mt : i;
    }
    function ip(e, t, a) {
      if (vr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = df(a), s = 1 << o, d = i[o];
          d.add(t), a &= ~s;
        }
    }
    function vf(e, t) {
      if (vr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = df(t), s = 1 << o, d = a[o];
          d.size > 0 && (d.forEach(function(m) {
            var y = m.alternate;
            (y === null || !i.has(y)) && i.add(m);
          }), d.clear()), t &= ~s;
        }
    }
    function up(e, t) {
      return null;
    }
    var Or = it, hr = Oa, Ji = En, Hs = Iu, No = Mt;
    function Wa() {
      return No;
    }
    function Xn(e) {
      No = e;
    }
    function Is(e, t) {
      var a = No;
      try {
        return No = e, t();
      } finally {
        No = a;
      }
    }
    function Dr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function By(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function op(e, t) {
      return e !== 0 && e < t;
    }
    function Bs(e) {
      var t = Wn(e);
      return op(Or, t) ? op(hr, t) ? Fs(t) ? Ji : Hs : hr : Or;
    }
    function Zn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ch;
    function ze(e) {
      Ch = e;
    }
    function Dl(e) {
      Ch(e);
    }
    var $s;
    function bh(e) {
      $s = e;
    }
    var Rh;
    function Ys(e) {
      Rh = e;
    }
    var Ws;
    function lp(e) {
      Ws = e;
    }
    var sp;
    function Th(e) {
      sp = e;
    }
    var hf = !1, kl = [], Di = null, wn = null, or = null, Qa = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Map(), eu = [], di = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function wh(e) {
      return di.indexOf(e) > -1;
    }
    function ki(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function _h(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Di = null;
          break;
        case "dragenter":
        case "dragleave":
          wn = null;
          break;
        case "mouseover":
        case "mouseout":
          or = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Qa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nl.delete(i);
          break;
        }
      }
    }
    function Ml(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = ki(t, a, i, o, s);
        if (t !== null) {
          var m = Bl(t);
          m !== null && $s(m);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return o !== null && y.indexOf(o) === -1 && y.push(o), e;
    }
    function xh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Di = Ml(Di, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = o;
          return wn = Ml(wn, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var m = o;
          return or = Ml(or, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var y = o, b = y.pointerId;
          return Qa.set(b, Ml(Qa.get(b) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var T = o, F = T.pointerId;
          return Nl.set(F, Ml(Nl.get(F) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function cp(e) {
      var t = tc(e.target);
      if (t !== null) {
        var a = wa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === H) {
            var o = Fd(a);
            if (o !== null) {
              e.blockedOn = o, sp(e.priority, function() {
                Rh(a);
              });
              return;
            }
          } else if (i === k) {
            var s = a.stateNode;
            if (Zn(s)) {
              e.blockedOn = Uc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Oh(e) {
      for (var t = Ws(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < eu.length && op(t, eu[i].priority); i++)
        ;
      eu.splice(i, 0, a), i === 0 && cp(a);
    }
    function mf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Mo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          ws(s), o.target.dispatchEvent(s), Ly();
        } else {
          var d = Bl(i);
          return d !== null && $s(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qs(e, t, a) {
      mf(e) && a.delete(t);
    }
    function fp() {
      hf = !1, Di !== null && mf(Di) && (Di = null), wn !== null && mf(wn) && (wn = null), or !== null && mf(or) && (or = null), Qa.forEach(Qs), Nl.forEach(Qs);
    }
    function kr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, hf || (hf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, fp)));
    }
    function xt(e) {
      if (kl.length > 0) {
        kr(kl[0], e);
        for (var t = 1; t < kl.length; t++) {
          var a = kl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && kr(Di, e), wn !== null && kr(wn, e), or !== null && kr(or, e);
      var i = function(m) {
        return kr(m, e);
      };
      Qa.forEach(i), Nl.forEach(i);
      for (var o = 0; o < eu.length; o++) {
        var s = eu[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; eu.length > 0; ) {
        var d = eu[0];
        if (d.blockedOn !== null)
          break;
        cp(d), d.blockedOn === null && eu.shift();
      }
    }
    var Nn = v.ReactCurrentBatchConfig, zn = !0;
    function lr(e) {
      zn = !!e;
    }
    function Da() {
      return zn;
    }
    function Ll(e, t, a) {
      var i = Hr(t), o;
      switch (i) {
        case Or:
          o = Jn;
          break;
        case hr:
          o = Gs;
          break;
        case Ji:
        default:
          o = tu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Jn(e, t, a, i) {
      var o = Wa(), s = Nn.transition;
      Nn.transition = null;
      try {
        Xn(Or), tu(e, t, a, i);
      } finally {
        Xn(o), Nn.transition = s;
      }
    }
    function Gs(e, t, a, i) {
      var o = Wa(), s = Nn.transition;
      Nn.transition = null;
      try {
        Xn(hr), tu(e, t, a, i);
      } finally {
        Xn(o), Nn.transition = s;
      }
    }
    function tu(e, t, a, i) {
      zn && yf(e, t, a, i);
    }
    function yf(e, t, a, i) {
      var o = Mo(e, t, a, i);
      if (o === null) {
        sg(e, t, i, Al, a), _h(e, i);
        return;
      }
      if (xh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (_h(e, i), t & vo && wh(e)) {
        for (; o !== null; ) {
          var s = Bl(o);
          s !== null && Dl(s);
          var d = Mo(e, t, a, i);
          if (d === null && sg(e, t, i, Al, a), d === o)
            break;
          o = d;
        }
        o !== null && i.stopPropagation();
        return;
      }
      sg(e, t, i, null, a);
    }
    var Al = null;
    function Mo(e, t, a, i) {
      Al = null;
      var o = Nc(i), s = tc(o);
      if (s !== null) {
        var d = wa(s);
        if (d === null)
          s = null;
        else {
          var m = d.tag;
          if (m === H) {
            var y = Fd(d);
            if (y !== null)
              return y;
            s = null;
          } else if (m === k) {
            var b = d.stateNode;
            if (Zn(b))
              return Uc(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return Al = s, null;
    }
    function Hr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Or;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return hr;
        case "message": {
          var t = Id();
          switch (t) {
            case Vc:
              return Or;
            case xa:
              return hr;
            case xi:
            case Hc:
              return Ji;
            case zu:
              return Hs;
            default:
              return Ji;
          }
        }
        default:
          return Ji;
      }
    }
    function dp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function zl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function nu(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function gf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Lo = null, Ni = null, $u = null;
    function Yu(e) {
      return Lo = e, Ni = Ef(), !0;
    }
    function Sf() {
      Lo = null, Ni = null, $u = null;
    }
    function Ul() {
      if ($u)
        return $u;
      var e, t = Ni, a = t.length, i, o = Ef(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return $u = o.slice(e, m), $u;
    }
    function Ef() {
      return "value" in Lo ? Lo.value : Lo.textContent;
    }
    function Ao(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function zo() {
      return !0;
    }
    function Nr() {
      return !1;
    }
    function Qn(e) {
      function t(a, i, o, s, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var y = e[m];
            y ? this[m] = y(s) : this[m] = s[m];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = zo : this.isDefaultPrevented = Nr, this.isPropagationStopped = Nr, this;
      }
      return Tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = zo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = zo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: zo
      }), t;
    }
    var Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Lr = Qn(Mr), jl = Tt({}, Mr, {
      view: 0,
      detail: 0
    }), pp = Qn(jl), qs, vp, Ga;
    function Dh(e) {
      e !== Ga && (Ga && e.type === "mousemove" ? (qs = e.screenX - Ga.screenX, vp = e.screenY - Ga.screenY) : (qs = 0, vp = 0), Ga = e);
    }
    var Pl = Tt({}, jl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Rf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Dh(e), qs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : vp;
      }
    }), Wu = Qn(Pl), hp = Tt({}, Pl, {
      dataTransfer: 0
    }), Uo = Qn(hp), kh = Tt({}, jl, {
      relatedTarget: 0
    }), Cf = Qn(kh), mp = Tt({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = Qn(mp), $y = Tt({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yy = Qn($y), Nh = Tt({}, Mr, {
      data: 0
    }), yp = Qn(Nh), jo = yp, Wy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Fl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Mh(e) {
      if (e.key) {
        var t = Wy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ao(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Fl[e.keyCode] || "Unidentified" : "";
    }
    var Un = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Qy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Un[e];
      return i ? !!a[i] : !1;
    }
    function Rf(e) {
      return Qy;
    }
    var Gy = Tt({}, jl, {
      key: Mh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Rf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ao(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ao(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qy = Qn(Gy), Lh = Tt({}, Pl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), gp = Qn(Lh), Ky = Tt({}, jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rf
    }), qa = Qn(Ky), Sp = Tt({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xy = Qn(Sp), Qu = Tt({}, Pl, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Tf = Qn(Qu), Po = [9, 13, 27, 32], Ks = 229, Xs = Zt && "CompositionEvent" in window, Fo = null;
    Zt && "documentMode" in document && (Fo = document.documentMode);
    var Zy = Zt && "TextEvent" in window && !Fo, wf = Zt && (!Xs || Fo && Fo > 8 && Fo <= 11), Ah = 32, Ep = String.fromCharCode(Ah);
    function zh() {
      Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Bn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zs = !1;
    function _f(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Uh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Cp(e, t) {
      return e === "keydown" && t.keyCode === Ks;
    }
    function jh(e, t) {
      switch (e) {
        case "keyup":
          return Po.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ks;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function bp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function xf(e) {
      return e.locale === "ko";
    }
    var ru = !1;
    function Rp(e, t, a, i, o) {
      var s, d;
      if (Xs ? s = Uh(t) : ru ? jh(t, i) && (s = "onCompositionEnd") : Cp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      wf && !xf(i) && (!ru && s === "onCompositionStart" ? ru = Yu(o) : s === "onCompositionEnd" && ru && (d = Ul()));
      var m = Ih(a, s);
      if (m.length > 0) {
        var y = new yp(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: m
        }), d)
          y.data = d;
        else {
          var b = bp(i);
          b !== null && (y.data = b);
        }
      }
    }
    function Of(e, t) {
      switch (e) {
        case "compositionend":
          return bp(t);
        case "keypress":
          var a = t.which;
          return a !== Ah ? null : (Zs = !0, Ep);
        case "textInput":
          var i = t.data;
          return i === Ep && Zs ? null : i;
        default:
          return null;
      }
    }
    function Ph(e, t) {
      if (ru) {
        if (e === "compositionend" || !Xs && jh(e, t)) {
          var a = Ul();
          return Sf(), ru = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!_f(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return wf && !xf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Jy(e, t, a, i, o) {
      var s;
      if (Zy ? s = Of(t, i) : s = Ph(t, i), !s)
        return null;
      var d = Ih(a, "onBeforeInput");
      if (d.length > 0) {
        var m = new jo("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: m,
          listeners: d
        }), m.data = s;
      }
    }
    function Df(e, t, a, i, o, s, d) {
      Rp(e, t, a, i, o), Jy(e, t, a, i, o);
    }
    var eg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Vl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!eg[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function tg(e) {
      if (!Zt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function kf() {
      Bn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Mc(i);
      var o = Ih(t, "onChange");
      if (o.length > 0) {
        var s = new Lr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var r = null, u = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function f(e) {
      var t = [];
      n(t, u, e, Nc(e)), Nd(h, t);
    }
    function h(e) {
      F0(e, 0);
    }
    function C(e) {
      var t = Uf(e);
      if (sl(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    Zt && (z = tg("input") && (!document.documentMode || document.documentMode > 9));
    function Z(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", pe);
    }
    function fe() {
      r && (r.detachEvent("onpropertychange", pe), r = null, u = null);
    }
    function pe(e) {
      e.propertyName === "value" && C(u) && f(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (fe(), Z(t, a)) : e === "focusout" && fe();
    }
    function De(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(u);
    }
    function je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function He(e, t) {
      if (e === "click")
        return C(t);
    }
    function Hn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function Y(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Je(e, "number", e.value);
    }
    function P(e, t, a, i, o, s, d) {
      var m = a ? Uf(a) : window, y, b;
      if (l(m) ? y = x : Vl(m) ? z ? y = Hn : (y = De, b = ce) : je(m) && (y = He), y) {
        var T = y(t, a);
        if (T) {
          n(e, T, i, o);
          return;
        }
      }
      b && b(t, m, a), t === "focusout" && Y(m);
    }
    function G() {
      Oe("onMouseEnter", ["mouseout", "mouseover"]), Oe("onMouseLeave", ["mouseout", "mouseover"]), Oe("onPointerEnter", ["pointerout", "pointerover"]), Oe("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ye(e, t, a, i, o, s, d) {
      var m = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (m && !th(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (tc(b) || jp(b)))
          return;
      }
      if (!(!y && !m)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var F = o.ownerDocument;
          F ? T = F.defaultView || F.parentWindow : T = window;
        }
        var j, q;
        if (y) {
          var X = i.relatedTarget || i.toElement;
          if (j = a, q = X ? tc(X) : null, q !== null) {
            var ne = wa(q);
            (q !== ne || q.tag !== A && q.tag !== B) && (q = null);
          }
        } else
          j = null, q = a;
        if (j !== q) {
          var Me = Wu, Xe = "onMouseLeave", Be = "onMouseEnter", At = "mouse";
          (t === "pointerout" || t === "pointerover") && (Me = gp, Xe = "onPointerLeave", Be = "onPointerEnter", At = "pointer");
          var Ot = j == null ? T : Uf(j), W = q == null ? T : Uf(q), re = new Me(Xe, At + "leave", j, i, o);
          re.target = Ot, re.relatedTarget = W;
          var Q = null, ve = tc(o);
          if (ve === a) {
            var Le = new Me(Be, At + "enter", q, i, o);
            Le.target = W, Le.relatedTarget = Ot, Q = Le;
          }
          GT(e, re, Q, j, q);
        }
      }
    }
    function Ie(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Pe = typeof Object.is == "function" ? Object.is : Ie;
    function Qe(e, t) {
      if (Pe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!we.call(t, s) || !Pe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function lt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function sr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Vt(e, t) {
      for (var a = lt(e), i = 0, o = 0; a; ) {
        if (a.nodeType === $i) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = lt(sr(a));
      }
    }
    function Gu(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, d = i.focusNode, m = i.focusOffset;
      try {
        o.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return ng(e, o, s, d, m);
    }
    function ng(e, t, a, i, o) {
      var s = 0, d = -1, m = -1, y = 0, b = 0, T = e, F = null;
      e:
        for (; ; ) {
          for (var j = null; T === t && (a === 0 || T.nodeType === $i) && (d = s + a), T === i && (o === 0 || T.nodeType === $i) && (m = s + o), T.nodeType === $i && (s += T.nodeValue.length), (j = T.firstChild) !== null; )
            F = T, T = j;
          for (; ; ) {
            if (T === e)
              break e;
            if (F === t && ++y === a && (d = s), F === i && ++b === o && (m = s), (j = T.nextSibling) !== null)
              break;
            T = F, F = T.parentNode;
          }
          T = j;
        }
      return d === -1 || m === -1 ? null : {
        start: d,
        end: m
      };
    }
    function DT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), m = t.end === void 0 ? d : Math.min(t.end, s);
        if (!o.extend && d > m) {
          var y = m;
          m = d, d = y;
        }
        var b = Vt(e, d), T = Vt(e, m);
        if (b && T) {
          if (o.rangeCount === 1 && o.anchorNode === b.node && o.anchorOffset === b.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var F = a.createRange();
          F.setStart(b.node, b.offset), o.removeAllRanges(), d > m ? (o.addRange(F), o.extend(T.node, T.offset)) : (F.setEnd(T.node, T.offset), o.addRange(F));
        }
      }
    }
    function x0(e) {
      return e && e.nodeType === $i;
    }
    function O0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : x0(e) ? !1 : x0(t) ? O0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function kT(e) {
      return e && e.ownerDocument && O0(e.ownerDocument.documentElement, e);
    }
    function NT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function D0() {
      for (var e = window, t = xu(); t instanceof e.HTMLIFrameElement; ) {
        if (NT(t))
          e = t.contentWindow;
        else
          return t;
        t = xu(e.document);
      }
      return t;
    }
    function rg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function MT() {
      var e = D0();
      return {
        focusedElem: e,
        selectionRange: rg(e) ? AT(e) : null
      };
    }
    function LT(e) {
      var t = D0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && kT(a)) {
        i !== null && rg(a) && zT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === aa && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < o.length; d++) {
          var m = o[d];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function AT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Gu(e), t || {
        start: 0,
        end: 0
      };
    }
    function zT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : DT(e, t);
    }
    var UT = Zt && "documentMode" in document && document.documentMode <= 11;
    function jT() {
      Bn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nf = null, ag = null, Tp = null, ig = !1;
    function PT(e) {
      if ("selectionStart" in e && rg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function FT(e) {
      return e.window === e ? e.document : e.nodeType === li ? e : e.ownerDocument;
    }
    function k0(e, t, a) {
      var i = FT(a);
      if (!(ig || Nf == null || Nf !== xu(i))) {
        var o = PT(Nf);
        if (!Tp || !Qe(Tp, o)) {
          Tp = o;
          var s = Ih(ag, "onSelect");
          if (s.length > 0) {
            var d = new Lr("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Nf;
          }
        }
      }
    }
    function VT(e, t, a, i, o, s, d) {
      var m = a ? Uf(a) : window;
      switch (t) {
        case "focusin":
          (Vl(m) || m.contentEditable === "true") && (Nf = m, ag = a, Tp = null);
          break;
        case "focusout":
          Nf = null, ag = null, Tp = null;
          break;
        case "mousedown":
          ig = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ig = !1, k0(e, i, o);
          break;
        case "selectionchange":
          if (UT)
            break;
        case "keydown":
        case "keyup":
          k0(e, i, o);
      }
    }
    function Fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Mf = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, ug = {}, N0 = {};
    Zt && (N0 = document.createElement("div").style, "AnimationEvent" in window || (delete Mf.animationend.animation, delete Mf.animationiteration.animation, delete Mf.animationstart.animation), "TransitionEvent" in window || delete Mf.transitionend.transition);
    function Vh(e) {
      if (ug[e])
        return ug[e];
      if (!Mf[e])
        return e;
      var t = Mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in N0)
          return ug[e] = t[a];
      return e;
    }
    var M0 = Vh("animationend"), L0 = Vh("animationiteration"), A0 = Vh("animationstart"), z0 = Vh("transitionend"), U0 = /* @__PURE__ */ new Map(), j0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hl(e, t) {
      U0.set(e, t), Bn(t, [e]);
    }
    function HT() {
      for (var e = 0; e < j0.length; e++) {
        var t = j0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Hl(a, "on" + i);
      }
      Hl(M0, "onAnimationEnd"), Hl(L0, "onAnimationIteration"), Hl(A0, "onAnimationStart"), Hl("dblclick", "onDoubleClick"), Hl("focusin", "onFocus"), Hl("focusout", "onBlur"), Hl(z0, "onTransitionEnd");
    }
    function IT(e, t, a, i, o, s, d) {
      var m = U0.get(t);
      if (m !== void 0) {
        var y = Lr, b = t;
        switch (t) {
          case "keypress":
            if (Ao(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = qy;
            break;
          case "focusin":
            b = "focus", y = Cf;
            break;
          case "focusout":
            b = "blur", y = Cf;
            break;
          case "beforeblur":
          case "afterblur":
            y = Cf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Wu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Uo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = qa;
            break;
          case M0:
          case L0:
          case A0:
            y = bf;
            break;
          case z0:
            y = Xy;
            break;
          case "scroll":
            y = pp;
            break;
          case "wheel":
            y = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Yy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = gp;
            break;
        }
        var T = (s & vo) !== 0;
        {
          var F = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", j = WT(a, m, i.type, T, F);
          if (j.length > 0) {
            var q = new y(m, b, null, i, o);
            e.push({
              event: q,
              listeners: j
            });
          }
        }
      }
    }
    HT(), G(), kf(), jT(), zh();
    function BT(e, t, a, i, o, s, d) {
      IT(e, t, a, i, o, s);
      var m = (s & My) === 0;
      m && (ye(e, t, a, i, o), P(e, t, a, i, o), VT(e, t, a, i, o), Df(e, t, a, i, o));
    }
    var wp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], og = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wp));
    function P0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Gi(i, t, void 0, e), e.currentTarget = null;
    }
    function $T(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], d = s.instance, m = s.currentTarget, y = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          P0(e, y, m), i = d;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], F = T.instance, j = T.currentTarget, q = T.listener;
          if (F !== i && e.isPropagationStopped())
            return;
          P0(e, q, j), i = F;
        }
    }
    function F0(e, t) {
      for (var a = (t & vo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, d = o.listeners;
        $T(s, d, a);
      }
      zd();
    }
    function YT(e, t, a, i, o) {
      var s = Nc(a), d = [];
      BT(d, e, i, a, s, t), F0(d, t);
    }
    function Mn(e, t) {
      og.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = C_(t), o = qT(e, a);
      i.has(o) || (V0(t, e, Rs, a), i.add(o));
    }
    function lg(e, t, a) {
      og.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= vo), V0(a, e, i, t);
    }
    var Hh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Hh]) {
        e[Hh] = !0, pt.forEach(function(a) {
          a !== "selectionchange" && (og.has(a) || lg(a, !1, e), lg(a, !0, e));
        });
        var t = e.nodeType === li ? e : e.ownerDocument;
        t !== null && (t[Hh] || (t[Hh] = !0, lg("selectionchange", !1, t)));
      }
    }
    function V0(e, t, a, i, o) {
      var s = Ll(e, t, a), d = void 0;
      Os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? nu(e, t, s, d) : zl(e, t, s) : d !== void 0 ? gf(e, t, s, d) : dp(e, t, s);
    }
    function H0(e, t) {
      return e === t || e.nodeType === Yn && e.parentNode === t;
    }
    function sg(e, t, a, i, o) {
      var s = i;
      if (!(t & Wi) && !(t & Rs)) {
        var d = o;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var y = m.tag;
              if (y === k || y === M) {
                var b = m.stateNode.containerInfo;
                if (H0(b, d))
                  break;
                if (y === M)
                  for (var T = m.return; T !== null; ) {
                    var F = T.tag;
                    if (F === k || F === M) {
                      var j = T.stateNode.containerInfo;
                      if (H0(j, d))
                        return;
                    }
                    T = T.return;
                  }
                for (; b !== null; ) {
                  var q = tc(b);
                  if (q === null)
                    return;
                  var X = q.tag;
                  if (X === A || X === B) {
                    m = s = q;
                    continue e;
                  }
                  b = b.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      Nd(function() {
        return YT(e, t, a, s);
      });
    }
    function xp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function WT(e, t, a, i, o, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, y = [], b = e, T = null; b !== null; ) {
        var F = b, j = F.stateNode, q = F.tag;
        if (q === A && j !== null && (T = j, m !== null)) {
          var X = mo(b, m);
          X != null && y.push(xp(b, X, T));
        }
        if (o)
          break;
        b = b.return;
      }
      return y;
    }
    function Ih(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, d = s.stateNode, m = s.tag;
        if (m === A && d !== null) {
          var y = d, b = mo(o, a);
          b != null && i.unshift(xp(o, b, y));
          var T = mo(o, t);
          T != null && i.push(xp(o, T, y));
        }
        o = o.return;
      }
      return i;
    }
    function Lf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== A);
      return e || null;
    }
    function QT(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Lf(s))
        o++;
      for (var d = 0, m = i; m; m = Lf(m))
        d++;
      for (; o - d > 0; )
        a = Lf(a), o--;
      for (; d - o > 0; )
        i = Lf(i), d--;
      for (var y = o; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Lf(a), i = Lf(i);
      }
      return null;
    }
    function I0(e, t, a, i, o) {
      for (var s = t._reactName, d = [], m = a; m !== null && m !== i; ) {
        var y = m, b = y.alternate, T = y.stateNode, F = y.tag;
        if (b !== null && b === i)
          break;
        if (F === A && T !== null) {
          var j = T;
          if (o) {
            var q = mo(m, s);
            q != null && d.unshift(xp(m, q, j));
          } else if (!o) {
            var X = mo(m, s);
            X != null && d.push(xp(m, X, j));
          }
        }
        m = m.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function GT(e, t, a, i, o) {
      var s = i && o ? QT(i, o) : null;
      i !== null && I0(e, t, i, s, !1), o !== null && a !== null && I0(e, a, o, s, !0);
    }
    function qT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ka = !1, Op = "dangerouslySetInnerHTML", Bh = "suppressContentEditableWarning", Il = "suppressHydrationWarning", B0 = "autoFocus", Js = "children", ec = "style", $h = "__html", cg, Yh, Dp, $0, Wh, Y0, W0;
    cg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Yh = function(e, t) {
      kc(e, t), _d(e, t), eh(e, t, {
        registrationNameDependencies: Ut,
        possibleRegistrationNames: tr
      });
    }, Y0 = Zt && !document.documentMode, Dp = function(e, t, a) {
      if (!Ka) {
        var i = Qh(a), o = Qh(t);
        o !== i && (Ka = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, $0 = function(e) {
      if (!Ka) {
        Ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Wh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, W0 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var KT = /\r\n?/g, XT = /\u0000|\uFFFD/g;
    function Qh(e) {
      Jr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(KT, `
`).replace(XT, "");
    }
    function Gh(e, t, a, i) {
      var o = Qh(t), s = Qh(e);
      if (s !== o && (i && (Ka || (Ka = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && _e))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Q0(e) {
      return e.nodeType === li ? e : e.ownerDocument;
    }
    function ZT() {
    }
    function qh(e) {
      e.onclick = ZT;
    }
    function JT(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === ec)
            d && Object.freeze(d), $v(t, d);
          else if (s === Op) {
            var m = d ? d[$h] : void 0;
            m != null && Lv(t, m);
          } else if (s === Js)
            if (typeof d == "string") {
              var y = e !== "textarea" || d !== "";
              y && _c(t, d);
            } else
              typeof d == "number" && _c(t, "" + d);
          else
            s === Bh || s === Il || s === B0 || (Ut.hasOwnProperty(s) ? d != null && (typeof d != "function" && Wh(s, d), s === "onScroll" && Mn("scroll", t)) : d != null && ba(t, s, d, o));
        }
    }
    function ew(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], d = t[o + 1];
        s === ec ? $v(e, d) : s === Op ? Lv(e, d) : s === Js ? _c(e, d) : ba(e, s, d, i);
      }
    }
    function tw(e, t, a, i) {
      var o, s = Q0(a), d, m = i;
      if (m === Bi && (m = Tc(e)), m === Bi) {
        if (o = Yi(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var b = y.firstChild;
          d = y.removeChild(b);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var T = d;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        d = s.createElementNS(m, e);
      return m === Bi && !o && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !we.call(cg, e) && (cg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function nw(e, t) {
      return Q0(t).createTextNode(e);
    }
    function rw(e, t, a, i) {
      var o = Yi(t, a);
      Yh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Mn("cancel", e), Mn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Mn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < wp.length; d++)
            Mn(wp[d], e);
          s = a;
          break;
        case "source":
          Mn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Mn("error", e), Mn("load", e), s = a;
          break;
        case "details":
          Mn("toggle", e), s = a;
          break;
        case "input":
          O(e, a), s = S(e, a), Mn("invalid", e);
          break;
        case "option":
          en(e, a), s = a;
          break;
        case "select":
          Ss(e, a), s = gs(e, a), Mn("invalid", e);
          break;
        case "textarea":
          kv(e, a), s = yd(e, a), Mn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Oc(t, s), JT(t, e, i, s, o), t) {
        case "input":
          ja(e), me(e, a, !1);
          break;
        case "textarea":
          ja(e), Mv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          hd(e, a);
          break;
        default:
          typeof s.onClick == "function" && qh(e);
          break;
      }
    }
    function aw(e, t, a, i, o) {
      Yh(t, i);
      var s = null, d, m;
      switch (t) {
        case "input":
          d = S(e, a), m = S(e, i), s = [];
          break;
        case "select":
          d = gs(e, a), m = gs(e, i), s = [];
          break;
        case "textarea":
          d = yd(e, a), m = yd(e, i), s = [];
          break;
        default:
          d = a, m = i, typeof d.onClick != "function" && typeof m.onClick == "function" && qh(e);
          break;
      }
      Oc(t, m);
      var y, b, T = null;
      for (y in d)
        if (!(m.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === ec) {
            var F = d[y];
            for (b in F)
              F.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else
            y === Op || y === Js || y === Bh || y === Il || y === B0 || (Ut.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in m) {
        var j = m[y], q = d != null ? d[y] : void 0;
        if (!(!m.hasOwnProperty(y) || j === q || j == null && q == null))
          if (y === ec)
            if (j && Object.freeze(j), q) {
              for (b in q)
                q.hasOwnProperty(b) && (!j || !j.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in j)
                j.hasOwnProperty(b) && q[b] !== j[b] && (T || (T = {}), T[b] = j[b]);
            } else
              T || (s || (s = []), s.push(y, T)), T = j;
          else if (y === Op) {
            var X = j ? j[$h] : void 0, ne = q ? q[$h] : void 0;
            X != null && ne !== X && (s = s || []).push(y, X);
          } else
            y === Js ? (typeof j == "string" || typeof j == "number") && (s = s || []).push(y, "" + j) : y === Bh || y === Il || (Ut.hasOwnProperty(y) ? (j != null && (typeof j != "function" && Wh(y, j), y === "onScroll" && Mn("scroll", e)), !s && q !== j && (s = [])) : (s = s || []).push(y, j));
      }
      return T && (Cs(T, m[ec]), (s = s || []).push(ec, T)), s;
    }
    function iw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && K(e, o);
      var s = Yi(a, i), d = Yi(a, o);
      switch (ew(e, t, s, d), a) {
        case "input":
          ee(e, o);
          break;
        case "textarea":
          Nv(e, o);
          break;
        case "select":
          by(e, o);
          break;
      }
    }
    function uw(e) {
      {
        var t = e.toLowerCase();
        return Dc.hasOwnProperty(t) && Dc[t] || null;
      }
    }
    function ow(e, t, a, i, o, s, d) {
      var m, y;
      switch (m = Yi(t, a), Yh(t, a), t) {
        case "dialog":
          Mn("cancel", e), Mn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Mn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < wp.length; b++)
            Mn(wp[b], e);
          break;
        case "source":
          Mn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Mn("error", e), Mn("load", e);
          break;
        case "details":
          Mn("toggle", e);
          break;
        case "input":
          O(e, a), Mn("invalid", e);
          break;
        case "option":
          en(e, a);
          break;
        case "select":
          Ss(e, a), Mn("invalid", e);
          break;
        case "textarea":
          kv(e, a), Mn("invalid", e);
          break;
      }
      Oc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var T = e.attributes, F = 0; F < T.length; F++) {
          var j = T[F].name.toLowerCase();
          switch (j) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(T[F].name);
          }
        }
      }
      var q = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var ne = a[X];
          if (X === Js)
            typeof ne == "string" ? e.textContent !== ne && (a[Il] !== !0 && Gh(e.textContent, ne, s, d), q = [Js, ne]) : typeof ne == "number" && e.textContent !== "" + ne && (a[Il] !== !0 && Gh(e.textContent, ne, s, d), q = [Js, "" + ne]);
          else if (Ut.hasOwnProperty(X))
            ne != null && (typeof ne != "function" && Wh(X, ne), X === "onScroll" && Mn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Me = void 0, Xe = m && at ? null : Ur(X);
            if (a[Il] !== !0) {
              if (!(X === Bh || X === Il || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Op) {
                  var Be = e.innerHTML, At = ne ? ne[$h] : void 0;
                  if (At != null) {
                    var Ot = W0(e, At);
                    Ot !== Be && Dp(X, Be, Ot);
                  }
                } else if (X === ec) {
                  if (y.delete(X), Y0) {
                    var W = ky(ne);
                    Me = e.getAttribute("style"), W !== Me && Dp(X, Me, W);
                  }
                } else if (m && !at)
                  y.delete(X.toLowerCase()), Me = gi(e, X, ne), ne !== Me && Dp(X, Me, ne);
                else if (!xn(X, Xe, m) && !Jt(X, ne, Xe, m)) {
                  var re = !1;
                  if (Xe !== null)
                    y.delete(Xe.attributeName), Me = Ca(e, X, ne, Xe);
                  else {
                    var Q = i;
                    if (Q === Bi && (Q = Tc(t)), Q === Bi)
                      y.delete(X.toLowerCase());
                    else {
                      var ve = uw(X);
                      ve !== null && ve !== X && (re = !0, y.delete(ve)), y.delete(X);
                    }
                    Me = gi(e, X, ne);
                  }
                  var Le = at;
                  !Le && ne !== Me && !re && Dp(X, Me, ne);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Il] !== !0 && $0(y), t) {
        case "input":
          ja(e), me(e, a, !0);
          break;
        case "textarea":
          ja(e), Mv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && qh(e);
          break;
      }
      return q;
    }
    function lw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function fg(e, t) {
      {
        if (Ka)
          return;
        Ka = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function dg(e, t) {
      {
        if (Ka)
          return;
        Ka = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function pg(e, t, a) {
      {
        if (Ka)
          return;
        Ka = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function vg(e, t) {
      {
        if (t === "" || Ka)
          return;
        Ka = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function sw(e, t, a) {
      switch (t) {
        case "input":
          nt(e, a);
          return;
        case "textarea":
          gd(e, a);
          return;
        case "select":
          Ry(e, a);
          return;
      }
    }
    var kp = function() {
    }, Np = function() {
    };
    {
      var cw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], G0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], fw = G0.concat(["button"]), dw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], q0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Np = function(e, t) {
        var a = Tt({}, e || q0), i = {
          tag: t
        };
        return G0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), fw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), cw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var pw = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return dw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, vw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, K0 = {};
      kp = function(e, t, a) {
        a = a || q0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = pw(e, o) ? null : i, d = s ? null : vw(e, a), m = s || d;
        if (m) {
          var y = m.tag, b = !!s + "|" + e + "|" + y;
          if (!K0[b]) {
            K0[b] = !0;
            var T = e, F = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var j = "";
              y === "table" && e === "tr" && (j += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, y, F, j);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, y);
          }
        }
      };
    }
    var Kh = "suppressHydrationWarning", Xh = "$", Zh = "/$", Mp = "$?", Lp = "$!", hw = "style", hg = null, mg = null;
    function mw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case li:
        case fo: {
          t = i === li ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : Ed(null, "");
          break;
        }
        default: {
          var s = i === Yn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Ed(d, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), y = Np(null, m);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function yw(e, t, a) {
      {
        var i = e, o = Ed(i.namespace, t), s = Np(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function HM(e) {
      return e;
    }
    function gw(e) {
      hg = Da(), mg = MT();
      var t = null;
      return lr(!1), t;
    }
    function Sw(e) {
      LT(mg), lr(hg), hg = null, mg = null;
    }
    function Ew(e, t, a, i, o) {
      var s;
      {
        var d = i;
        if (kp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = Np(d.ancestorInfo, e);
          kp(null, m, y);
        }
        s = d.namespace;
      }
      var b = tw(e, t, a, s);
      return Up(o, b), Tg(b, t), b;
    }
    function Cw(e, t) {
      e.appendChild(t);
    }
    function bw(e, t, a, i, o) {
      switch (rw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Rw(e, t, a, i, o, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = Np(d.ancestorInfo, t);
          kp(null, m, y);
        }
      }
      return aw(e, t, a, i);
    }
    function yg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Tw(e, t, a, i) {
      {
        var o = a;
        kp(null, e, o.ancestorInfo);
      }
      var s = nw(e, t);
      return Up(i, s), s;
    }
    function ww() {
      var e = window.event;
      return e === void 0 ? Ji : Hr(e.type);
    }
    var gg = typeof setTimeout == "function" ? setTimeout : void 0, _w = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, X0 = typeof Promise == "function" ? Promise : void 0, xw = typeof queueMicrotask == "function" ? queueMicrotask : typeof X0 < "u" ? function(e) {
      return X0.resolve(null).then(e).catch(Ow);
    } : gg;
    function Ow(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Dw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function kw(e, t, a, i, o, s) {
      iw(e, t, a, i, o), Tg(e, o);
    }
    function Z0(e) {
      _c(e, "");
    }
    function Nw(e, t, a) {
      e.nodeValue = a;
    }
    function Mw(e, t) {
      e.appendChild(t);
    }
    function Lw(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && qh(a);
    }
    function Aw(e, t, a) {
      e.insertBefore(t, a);
    }
    function zw(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Uw(e, t) {
      e.removeChild(t);
    }
    function jw(e, t) {
      e.nodeType === Yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Eg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Yn) {
          var s = o.data;
          if (s === Zh)
            if (i === 0) {
              e.removeChild(o), xt(t);
              return;
            } else
              i--;
          else
            (s === Xh || s === Mp || s === Lp) && i++;
        }
        a = o;
      } while (a);
      xt(t);
    }
    function Pw(e, t) {
      e.nodeType === Yn ? Eg(e.parentNode, t) : e.nodeType === aa && Eg(e, t), xt(e);
    }
    function Fw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Vw(e) {
      e.nodeValue = "";
    }
    function Hw(e, t) {
      e = e;
      var a = t[hw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function Iw(e, t) {
      e.nodeValue = t;
    }
    function Bw(e) {
      e.nodeType === aa ? e.textContent = "" : e.nodeType === li && e.documentElement && e.removeChild(e.documentElement);
    }
    function $w(e, t, a) {
      return e.nodeType !== aa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Yw(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function Ww(e) {
      return e.nodeType !== Yn ? null : e;
    }
    function J0(e) {
      return e.data === Mp;
    }
    function Cg(e) {
      return e.data === Lp;
    }
    function Qw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Gw(e, t) {
      e._reactRetry = t;
    }
    function Jh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === aa || t === $i)
          break;
        if (t === Yn) {
          var a = e.data;
          if (a === Xh || a === Lp || a === Mp)
            break;
          if (a === Zh)
            return null;
        }
      }
      return e;
    }
    function Ap(e) {
      return Jh(e.nextSibling);
    }
    function qw(e) {
      return Jh(e.firstChild);
    }
    function Kw(e) {
      return Jh(e.firstChild);
    }
    function Xw(e) {
      return Jh(e.nextSibling);
    }
    function Zw(e, t, a, i, o, s, d) {
      Up(s, e), Tg(e, a);
      var m;
      {
        var y = o;
        m = y.namespace;
      }
      var b = (s.mode & _t) !== et;
      return ow(e, t, a, m, i, b, d);
    }
    function Jw(e, t, a, i) {
      return Up(a, e), a.mode & _t, lw(e, t);
    }
    function e_(e, t) {
      Up(t, e);
    }
    function t_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Zh) {
            if (a === 0)
              return Ap(t);
            a--;
          } else
            (i === Xh || i === Lp || i === Mp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function eC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Xh || i === Lp || i === Mp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Zh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function n_(e) {
      xt(e);
    }
    function r_(e) {
      xt(e);
    }
    function a_(e) {
      return e !== "head" && e !== "body";
    }
    function i_(e, t, a, i) {
      var o = !0;
      Gh(t.nodeValue, a, i, o);
    }
    function u_(e, t, a, i, o, s) {
      if (t[Kh] !== !0) {
        var d = !0;
        Gh(i.nodeValue, o, s, d);
      }
    }
    function o_(e, t) {
      t.nodeType === aa ? fg(e, t) : t.nodeType === Yn || dg(e, t);
    }
    function l_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === aa ? fg(a, t) : t.nodeType === Yn || dg(a, t));
      }
    }
    function s_(e, t, a, i, o) {
      (o || t[Kh] !== !0) && (i.nodeType === aa ? fg(a, i) : i.nodeType === Yn || dg(a, i));
    }
    function c_(e, t, a) {
      pg(e, t);
    }
    function f_(e, t) {
      vg(e, t);
    }
    function d_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && pg(i, t);
      }
    }
    function p_(e, t) {
      {
        var a = e.parentNode;
        a !== null && vg(a, t);
      }
    }
    function v_(e, t, a, i, o, s) {
      (s || t[Kh] !== !0) && pg(a, i);
    }
    function h_(e, t, a, i, o) {
      (o || t[Kh] !== !0) && vg(a, i);
    }
    function m_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function y_(e) {
      _p(e);
    }
    var Af = Math.random().toString(36).slice(2), zf = "__reactFiber$" + Af, bg = "__reactProps$" + Af, zp = "__reactContainer$" + Af, Rg = "__reactEvents$" + Af, g_ = "__reactListeners$" + Af, S_ = "__reactHandles$" + Af;
    function E_(e) {
      delete e[zf], delete e[bg], delete e[Rg], delete e[g_], delete e[S_];
    }
    function Up(e, t) {
      t[zf] = e;
    }
    function em(e, t) {
      t[zp] = e;
    }
    function tC(e) {
      e[zp] = null;
    }
    function jp(e) {
      return !!e[zp];
    }
    function tc(e) {
      var t = e[zf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[zp] || a[zf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = eC(e); o !== null; ) {
              var s = o[zf];
              if (s)
                return s;
              o = eC(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Bl(e) {
      var t = e[zf] || e[zp];
      return t && (t.tag === A || t.tag === B || t.tag === H || t.tag === k) ? t : null;
    }
    function Uf(e) {
      if (e.tag === A || e.tag === B)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function tm(e) {
      return e[bg] || null;
    }
    function Tg(e, t) {
      e[bg] = t;
    }
    function C_(e) {
      var t = e[Rg];
      return t === void 0 && (t = e[Rg] = /* @__PURE__ */ new Set()), t;
    }
    var nC = {}, rC = v.ReactDebugCurrentFrame;
    function nm(e) {
      if (e) {
        var t = e._owner, a = Ri(e.type, e._source, t ? t.type : null);
        rC.setExtraStackFrame(a);
      } else
        rC.setExtraStackFrame(null);
    }
    function au(e, t, a, i, o) {
      {
        var s = Function.call.bind(we);
        for (var d in e)
          if (s(e, d)) {
            var m = void 0;
            try {
              if (typeof e[d] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              m = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              m = b;
            }
            m && !(m instanceof Error) && (nm(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof m), nm(null)), m instanceof Error && !(m.message in nC) && (nC[m.message] = !0, nm(o), g("Failed %s type: %s", a, m.message), nm(null));
          }
      }
    }
    var wg = [], rm;
    rm = [];
    var Vo = -1;
    function $l(e) {
      return {
        current: e
      };
    }
    function pa(e, t) {
      if (Vo < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== rm[Vo] && g("Unexpected Fiber popped."), e.current = wg[Vo], wg[Vo] = null, rm[Vo] = null, Vo--;
    }
    function va(e, t, a) {
      Vo++, wg[Vo] = e.current, rm[Vo] = a, e.current = t;
    }
    var _g;
    _g = {};
    var pi = {};
    Object.freeze(pi);
    var Ho = $l(pi), qu = $l(!1), xg = pi;
    function jf(e, t, a) {
      return a && Ku(t) ? xg : Ho.current;
    }
    function aC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Pf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var m = ct(e) || "Unknown";
          au(i, s, "context", m);
        }
        return o && aC(e, t, s), s;
      }
    }
    function am() {
      return qu.current;
    }
    function Ku(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function im(e) {
      pa(qu, e), pa(Ho, e);
    }
    function Og(e) {
      pa(qu, e), pa(Ho, e);
    }
    function iC(e, t, a) {
      {
        if (Ho.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(Ho, t, e), va(qu, a, e);
      }
    }
    function uC(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ct(e) || "Unknown";
            _g[s] || (_g[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in o))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = ct(e) || "Unknown";
          au(o, d, "child context", y);
        }
        return Tt({}, a, d);
      }
    }
    function um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return xg = Ho.current, va(Ho, a, e), va(qu, qu.current, e), !0;
      }
    }
    function oC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = uC(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = o, pa(qu, e), pa(Ho, e), va(Ho, o, e), va(qu, a, e);
        } else
          pa(qu, e), va(qu, a, e);
      }
    }
    function b_(e) {
      {
        if (!Vd(e) || e.tag !== _)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case k:
              return t.stateNode.context;
            case _: {
              var a = t.type;
              if (Ku(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Yl = 0, om = 1, Io = null, Dg = !1, kg = !1;
    function lC(e) {
      Io === null ? Io = [e] : Io.push(e);
    }
    function R_(e) {
      Dg = !0, lC(e);
    }
    function sC() {
      Dg && Wl();
    }
    function Wl() {
      if (!kg && Io !== null) {
        kg = !0;
        var e = 0, t = Wa();
        try {
          var a = !0, i = Io;
          for (Xn(Or); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Io = null, Dg = !1;
        } catch (s) {
          throw Io !== null && (Io = Io.slice(e + 1)), Pc(Vc, Wl), s;
        } finally {
          Xn(t), kg = !1;
        }
      }
      return null;
    }
    var Ff = [], Vf = 0, lm = null, sm = 0, Mi = [], Li = 0, nc = null, Bo = 1, $o = "";
    function T_(e) {
      return ac(), (e.flags & jd) !== Ge;
    }
    function w_(e) {
      return ac(), sm;
    }
    function __() {
      var e = $o, t = Bo, a = t & ~x_(t);
      return a.toString(32) + e;
    }
    function rc(e, t) {
      ac(), Ff[Vf++] = sm, Ff[Vf++] = lm, lm = e, sm = t;
    }
    function cC(e, t, a) {
      ac(), Mi[Li++] = Bo, Mi[Li++] = $o, Mi[Li++] = nc, nc = e;
      var i = Bo, o = $o, s = cm(i) - 1, d = i & ~(1 << s), m = a + 1, y = cm(t) + s;
      if (y > 30) {
        var b = s - s % 5, T = (1 << b) - 1, F = (d & T).toString(32), j = d >> b, q = s - b, X = cm(t) + q, ne = m << q, Me = ne | j, Xe = F + o;
        Bo = 1 << X | Me, $o = Xe;
      } else {
        var Be = m << s, At = Be | d, Ot = o;
        Bo = 1 << y | At, $o = Ot;
      }
    }
    function Ng(e) {
      ac();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rc(e, a), cC(e, a, i);
      }
    }
    function cm(e) {
      return 32 - Wc(e);
    }
    function x_(e) {
      return 1 << cm(e) - 1;
    }
    function Mg(e) {
      for (; e === lm; )
        lm = Ff[--Vf], Ff[Vf] = null, sm = Ff[--Vf], Ff[Vf] = null;
      for (; e === nc; )
        nc = Mi[--Li], Mi[Li] = null, $o = Mi[--Li], Mi[Li] = null, Bo = Mi[--Li], Mi[Li] = null;
    }
    function O_() {
      return ac(), nc !== null ? {
        id: Bo,
        overflow: $o
      } : null;
    }
    function D_(e, t) {
      ac(), Mi[Li++] = Bo, Mi[Li++] = $o, Mi[Li++] = nc, Bo = t.id, $o = t.overflow, nc = e;
    }
    function ac() {
      Br() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ir = null, Ai = null, iu = !1, ic = !1, Ql = null;
    function k_() {
      iu && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function fC() {
      ic = !0;
    }
    function N_() {
      return ic;
    }
    function M_(e) {
      var t = e.stateNode.containerInfo;
      return Ai = Kw(t), Ir = e, iu = !0, Ql = null, ic = !1, !0;
    }
    function L_(e, t, a) {
      return Ai = Xw(t), Ir = e, iu = !0, Ql = null, ic = !1, a !== null && D_(e, a), !0;
    }
    function dC(e, t) {
      switch (e.tag) {
        case k: {
          o_(e.stateNode.containerInfo, t);
          break;
        }
        case A: {
          var a = (e.mode & _t) !== et;
          s_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case H: {
          var i = e.memoizedState;
          i.dehydrated !== null && l_(i.dehydrated, t);
          break;
        }
      }
    }
    function pC(e, t) {
      dC(e, t);
      var a = UD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Yt) : i.push(a);
    }
    function Lg(e, t) {
      {
        if (ic)
          return;
        switch (e.tag) {
          case k: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case A:
                var i = t.type;
                t.pendingProps, c_(a, i);
                break;
              case B:
                var o = t.pendingProps;
                f_(a, o);
                break;
            }
            break;
          }
          case A: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case A: {
                var y = t.type, b = t.pendingProps, T = (e.mode & _t) !== et;
                v_(
                  s,
                  d,
                  m,
                  y,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case B: {
                var F = t.pendingProps, j = (e.mode & _t) !== et;
                h_(
                  s,
                  d,
                  m,
                  F,
                  // TODO: Delete this argument when we remove the legacy root API.
                  j
                );
                break;
              }
            }
            break;
          }
          case H: {
            var q = e.memoizedState, X = q.dehydrated;
            if (X !== null)
              switch (t.tag) {
                case A:
                  var ne = t.type;
                  t.pendingProps, d_(X, ne);
                  break;
                case B:
                  var Me = t.pendingProps;
                  p_(X, Me);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function vC(e, t) {
      t.flags = t.flags & ~Ha | yn, Lg(e, t);
    }
    function hC(e, t) {
      switch (e.tag) {
        case A: {
          var a = e.type;
          e.pendingProps;
          var i = $w(t, a);
          return i !== null ? (e.stateNode = i, Ir = e, Ai = qw(i), !0) : !1;
        }
        case B: {
          var o = e.pendingProps, s = Yw(t, o);
          return s !== null ? (e.stateNode = s, Ir = e, Ai = null, !0) : !1;
        }
        case H: {
          var d = Ww(t);
          if (d !== null) {
            var m = {
              dehydrated: d,
              treeContext: O_(),
              retryLane: fa
            };
            e.memoizedState = m;
            var y = jD(d);
            return y.return = e, e.child = y, Ir = e, Ai = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ag(e) {
      return (e.mode & _t) !== et && (e.flags & ot) === Ge;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ug(e) {
      if (iu) {
        var t = Ai;
        if (!t) {
          Ag(e) && (Lg(Ir, e), zg()), vC(Ir, e), iu = !1, Ir = e;
          return;
        }
        var a = t;
        if (!hC(e, t)) {
          Ag(e) && (Lg(Ir, e), zg()), t = Ap(a);
          var i = Ir;
          if (!t || !hC(e, t)) {
            vC(Ir, e), iu = !1, Ir = e;
            return;
          }
          pC(i, a);
        }
      }
    }
    function A_(e, t, a) {
      var i = e.stateNode, o = !ic, s = Zw(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function z_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Jw(t, a, e);
      if (i) {
        var o = Ir;
        if (o !== null)
          switch (o.tag) {
            case k: {
              var s = o.stateNode.containerInfo, d = (o.mode & _t) !== et;
              i_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case A: {
              var m = o.type, y = o.memoizedProps, b = o.stateNode, T = (o.mode & _t) !== et;
              u_(
                m,
                y,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function U_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      e_(a, e);
    }
    function j_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return t_(a);
    }
    function mC(e) {
      for (var t = e.return; t !== null && t.tag !== A && t.tag !== k && t.tag !== H; )
        t = t.return;
      Ir = t;
    }
    function fm(e) {
      if (e !== Ir)
        return !1;
      if (!iu)
        return mC(e), iu = !0, !1;
      if (e.tag !== k && (e.tag !== A || a_(e.type) && !yg(e.type, e.memoizedProps))) {
        var t = Ai;
        if (t)
          if (Ag(e))
            yC(e), zg();
          else
            for (; t; )
              pC(e, t), t = Ap(t);
      }
      return mC(e), e.tag === H ? Ai = j_(e) : Ai = Ir ? Ap(e.stateNode) : null, !0;
    }
    function P_() {
      return iu && Ai !== null;
    }
    function yC(e) {
      for (var t = Ai; t; )
        dC(e, t), t = Ap(t);
    }
    function Hf() {
      Ir = null, Ai = null, iu = !1, ic = !1;
    }
    function gC() {
      Ql !== null && (dR(Ql), Ql = null);
    }
    function Br() {
      return iu;
    }
    function jg(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    var F_ = v.ReactCurrentBatchConfig, V_ = null;
    function H_() {
      return F_.transition;
    }
    var uu = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var I_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & kn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], Bp = [], oc = /* @__PURE__ */ new Set();
      uu.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & kn && typeof t.UNSAFE_componentWillUpdate == "function" && Bp.push(e));
      }, uu.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(j) {
          e.add(ct(j) || "Component"), oc.add(j.type);
        }), Pp = []);
        var t = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(j) {
          t.add(ct(j) || "Component"), oc.add(j.type);
        }), Fp = []);
        var a = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(j) {
          a.add(ct(j) || "Component"), oc.add(j.type);
        }), Vp = []);
        var i = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(j) {
          i.add(ct(j) || "Component"), oc.add(j.type);
        }), Hp = []);
        var o = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(j) {
          o.add(ct(j) || "Component"), oc.add(j.type);
        }), Ip = []);
        var s = /* @__PURE__ */ new Set();
        if (Bp.length > 0 && (Bp.forEach(function(j) {
          s.add(ct(j) || "Component"), oc.add(j.type);
        }), Bp = []), t.size > 0) {
          var d = uc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var m = uc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var y = uc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var b = uc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = uc(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var F = uc(o);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var dm = /* @__PURE__ */ new Map(), SC = /* @__PURE__ */ new Set();
      uu.recordLegacyContextWarning = function(e, t) {
        var a = I_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!SC.has(e.type)) {
          var i = dm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], dm.set(a, i)), i.push(e));
        }
      }, uu.flushLegacyContextWarning = function() {
        dm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ct(s) || "Component"), SC.add(s.type);
            });
            var o = uc(i);
            try {
              qt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Ln();
            }
          }
        });
      }, uu.discardPendingWarnings = function() {
        Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], Bp = [], dm = /* @__PURE__ */ new Map();
      };
    }
    function ou(e, t) {
      if (e && e.defaultProps) {
        var a = Tt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Pg = $l(null), Fg;
    Fg = {};
    var pm = null, If = null, Vg = null, vm = !1;
    function hm() {
      pm = null, If = null, Vg = null, vm = !1;
    }
    function EC() {
      vm = !0;
    }
    function CC() {
      vm = !1;
    }
    function bC(e, t, a) {
      va(Pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Hg(e, t) {
      var a = Pg.current;
      pa(Pg, t), e._currentValue = a;
    }
    function Ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Do(i.childLanes, t) ? o !== null && !Do(o.childLanes, t) && (o.childLanes = St(o.childLanes, t)) : (i.childLanes = St(i.childLanes, t), o !== null && (o.childLanes = St(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function B_(e, t, a) {
      $_(e, t, a);
    }
    function $_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === _) {
                var m = Kn(a), y = Yo(fn, m);
                y.tag = ym;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, F = T.pending;
                  F === null ? y.next = y : (y.next = F.next, F.next = y), T.pending = y;
                }
              }
              i.lanes = St(i.lanes, a);
              var j = i.alternate;
              j !== null && (j.lanes = St(j.lanes, a)), Ig(i.return, a, e), s.lanes = St(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === le)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Ze) {
          var q = i.return;
          if (q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          q.lanes = St(q.lanes, a);
          var X = q.alternate;
          X !== null && (X.lanes = St(X.lanes, a)), Ig(q, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var ne = o.sibling;
            if (ne !== null) {
              ne.return = o.return, o = ne;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Bf(e, t) {
      pm = e, If = null, Vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (da(a.lanes, t) && rv(), a.firstContext = null);
      }
    }
    function cr(e) {
      vm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (If === null) {
          if (pm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          If = a, pm.dependencies = {
            lanes: ae,
            firstContext: a
          };
        } else
          If = If.next = a;
      }
      return t;
    }
    var lc = null;
    function Bg(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function Y_() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function RC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, mm(e, i);
    }
    function W_(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Q_(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, mm(e, i);
    }
    function Xa(e, t) {
      return mm(e, t);
    }
    var G_ = mm;
    function mm(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (yn | Ha)) !== Ge && TR(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = St(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (o.flags & (yn | Ha)) !== Ge && TR(e), i = o, o = o.return;
      if (i.tag === k) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var TC = 0, wC = 1, ym = 2, $g = 3, gm = !1, Yg, Sm;
    Yg = !1, Sm = null;
    function Wg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ae
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function _C(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Yo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: TC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Gl(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Sm === o && !Yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Yg = !0), GO()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, G_(e, a);
      } else
        return Q_(e, o, t, a);
    }
    function Em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Jd(a)) {
          var s = o.lanes;
          s = tp(s, e.pendingLanes);
          var d = St(s, a);
          o.lanes = d, Ol(e, d);
        }
      }
    }
    function Qg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, d = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var y = m;
            do {
              var b = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              d === null ? s = d = b : (d.next = b, d = b), y = y.next;
            } while (y !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function q_(e, t, a, i, o, s) {
      switch (a.tag) {
        case wC: {
          var d = a.payload;
          if (typeof d == "function") {
            EC();
            var m = d.call(s, i, o);
            {
              if (e.mode & kn) {
                qn(!0);
                try {
                  d.call(s, i, o);
                } finally {
                  qn(!1);
                }
              }
              CC();
            }
            return m;
          }
          return d;
        }
        case $g:
          e.flags = e.flags & ~ir | ot;
        case TC: {
          var y = a.payload, b;
          if (typeof y == "function") {
            EC(), b = y.call(s, i, o);
            {
              if (e.mode & kn) {
                qn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  qn(!1);
                }
              }
              CC();
            }
          } else
            b = y;
          return b == null ? i : Tt({}, i, b);
        }
        case ym:
          return gm = !0, i;
      }
      return i;
    }
    function Cm(e, t, a, i) {
      var o = e.updateQueue;
      gm = !1, Sm = o.shared;
      var s = o.firstBaseUpdate, d = o.lastBaseUpdate, m = o.shared.pending;
      if (m !== null) {
        o.shared.pending = null;
        var y = m, b = y.next;
        y.next = null, d === null ? s = b : d.next = b, d = y;
        var T = e.alternate;
        if (T !== null) {
          var F = T.updateQueue, j = F.lastBaseUpdate;
          j !== d && (j === null ? F.firstBaseUpdate = b : j.next = b, F.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var q = o.baseState, X = ae, ne = null, Me = null, Xe = null, Be = s;
        do {
          var At = Be.lane, Ot = Be.eventTime;
          if (Do(i, At)) {
            if (Xe !== null) {
              var re = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                tag: Be.tag,
                payload: Be.payload,
                callback: Be.callback,
                next: null
              };
              Xe = Xe.next = re;
            }
            q = q_(e, o, Be, q, t, a);
            var Q = Be.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== Mt) {
              e.flags |= _i;
              var ve = o.effects;
              ve === null ? o.effects = [Be] : ve.push(Be);
            }
          } else {
            var W = {
              eventTime: Ot,
              lane: At,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            Xe === null ? (Me = Xe = W, ne = q) : Xe = Xe.next = W, X = St(X, At);
          }
          if (Be = Be.next, Be === null) {
            if (m = o.shared.pending, m === null)
              break;
            var Le = m, xe = Le.next;
            Le.next = null, Be = xe, o.lastBaseUpdate = Le, o.shared.pending = null;
          }
        } while (!0);
        Xe === null && (ne = q), o.baseState = ne, o.firstBaseUpdate = Me, o.lastBaseUpdate = Xe;
        var ut = o.shared.interleaved;
        if (ut !== null) {
          var vt = ut;
          do
            X = St(X, vt.lane), vt = vt.next;
          while (vt !== ut);
        } else
          s === null && (o.shared.lanes = ae);
        hv(X), e.lanes = X, e.memoizedState = q;
      }
      Sm = null;
    }
    function K_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function xC() {
      gm = !1;
    }
    function bm() {
      return gm;
    }
    function OC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], d = s.callback;
          d !== null && (s.callback = null, K_(d, a));
        }
    }
    var Gg = {}, DC = new c.Component().refs, qg, Kg, Xg, Zg, Jg, kC, Rm, eS, tS, nS;
    {
      qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set();
      var NC = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          NC.has(a) || (NC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, kC = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          Jg.has(a) || (Jg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & kn) {
          qn(!0);
          try {
            s = a(i, o);
          } finally {
            qn(!1);
          }
        }
        kC(t, s);
      }
      var d = s == null ? o : Tt({}, o, s);
      if (e.memoizedState = d, e.lanes === ae) {
        var m = e.updateQueue;
        m.baseState = d;
      }
    }
    var aS = {
      isMounted: _a,
      enqueueSetState: function(e, t, a) {
        var i = Fa(e), o = Ma(), s = ns(i), d = Yo(o, s);
        d.payload = t, a != null && (Rm(a, "setState"), d.callback = a);
        var m = Gl(i, d, s);
        m !== null && (Rr(m, i, s, o), Em(m, i, s)), Vu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Fa(e), o = Ma(), s = ns(i), d = Yo(o, s);
        d.tag = wC, d.payload = t, a != null && (Rm(a, "replaceState"), d.callback = a);
        var m = Gl(i, d, s);
        m !== null && (Rr(m, i, s, o), Em(m, i, s)), Vu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Fa(e), i = Ma(), o = ns(a), s = Yo(i, o);
        s.tag = ym, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var d = Gl(a, s, o);
        d !== null && (Rr(d, a, o, i), Em(d, a, o)), qd(a, o);
      }
    };
    function MC(e, t, a, i, o, s, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var y = m.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & kn) {
            qn(!0);
            try {
              y = m.shouldComponentUpdate(i, s, d);
            } finally {
              qn(!1);
            }
          }
          y === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(o, s) : !0;
    }
    function X_(e, t, a) {
      var i = e.stateNode;
      {
        var o = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = i.props !== a;
        i.props !== void 0 && d && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var m = i.state;
        m && (typeof m != "object" || kt(m)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function LC(e, t) {
      t.updater = aS, e.stateNode = t, gl(t, e), t._reactInternalInstance = Gg;
    }
    function AC(e, t, a) {
      var i = !1, o = pi, s = pi, d = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Ee && d._context === void 0
        );
        if (!m && !nS.has(t)) {
          nS.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === se ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = cr(d);
      else {
        o = jf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Pf(e, o) : pi;
      }
      var T = new t(a, s);
      if (e.mode & kn) {
        qn(!0);
        try {
          T = new t(a, s);
        } finally {
          qn(!1);
        }
      }
      var F = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      LC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var j = Pt(t) || "Component";
          Kg.has(j) || (Kg.add(j), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, T.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var q = null, X = null, ne = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ne = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (ne = "UNSAFE_componentWillUpdate"), q !== null || X !== null || ne !== null) {
            var Me = Pt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(Me) || (Zg.add(Me), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Me, Xe, q !== null ? `
  ` + q : "", X !== null ? `
  ` + X : "", ne !== null ? `
  ` + ne : ""));
          }
        }
      }
      return i && aC(e, o, s), T;
    }
    function Z_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function zC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = ct(e) || "Component";
          qg.has(s) || (qg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      X_(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = DC, Wg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = cr(s);
      else {
        var d = jf(e, t, !0);
        o.context = Pf(e, d);
      }
      {
        if (o.state === a) {
          var m = Pt(t) || "Component";
          eS.has(m) || (eS.add(m), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & kn && uu.recordLegacyContextWarning(e, o), uu.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (rS(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Z_(e, o), Cm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var b = gt;
        b |= ua, (e.mode & $a) !== et && (b |= oa), e.flags |= b;
      }
    }
    function J_(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var d = o.context, m = t.contextType, y = pi;
      if (typeof m == "object" && m !== null)
        y = cr(m);
      else {
        var b = jf(e, t, !0);
        y = Pf(e, b);
      }
      var T = t.getDerivedStateFromProps, F = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !F && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || d !== y) && zC(e, o, a, y), xC();
      var j = e.memoizedState, q = o.state = j;
      if (Cm(e, a, o, i), q = e.memoizedState, s === a && j === q && !am() && !bm()) {
        if (typeof o.componentDidMount == "function") {
          var X = gt;
          X |= ua, (e.mode & $a) !== et && (X |= oa), e.flags |= X;
        }
        return !1;
      }
      typeof T == "function" && (rS(e, t, T, a), q = e.memoizedState);
      var ne = bm() || MC(e, t, s, a, j, q, y);
      if (ne) {
        if (!F && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Me = gt;
          Me |= ua, (e.mode & $a) !== et && (Me |= oa), e.flags |= Me;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Xe = gt;
          Xe |= ua, (e.mode & $a) !== et && (Xe |= oa), e.flags |= Xe;
        }
        e.memoizedProps = a, e.memoizedState = q;
      }
      return o.props = a, o.state = q, o.context = y, ne;
    }
    function ex(e, t, a, i, o) {
      var s = t.stateNode;
      _C(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : ou(t.type, d);
      s.props = m;
      var y = t.pendingProps, b = s.context, T = a.contextType, F = pi;
      if (typeof T == "object" && T !== null)
        F = cr(T);
      else {
        var j = jf(t, a, !0);
        F = Pf(t, j);
      }
      var q = a.getDerivedStateFromProps, X = typeof q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || b !== F) && zC(t, s, i, F), xC();
      var ne = t.memoizedState, Me = s.state = ne;
      if (Cm(t, i, s, o), Me = t.memoizedState, d === y && ne === Me && !am() && !bm() && !Ve)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Va), !1;
      typeof q == "function" && (rS(t, a, q, i), Me = t.memoizedState);
      var Xe = bm() || MC(t, a, m, i, ne, Me, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return Xe ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Me, F), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Me, F)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Va)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Va), t.memoizedProps = i, t.memoizedState = Me), s.props = i, s.state = Me, s.context = F, Xe;
    }
    var uS, oS, lS, sS, cS, UC = function(e, t) {
    };
    uS = !1, oS = !1, lS = {}, sS = {}, cS = {}, UC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        sS[a] || (sS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function $p(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & kn || qe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = ct(e) || "Component";
          lS[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), lS[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var m = s;
            if (m.tag !== _)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = m.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = d;
          nr(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(F) {
            var j = y.refs;
            j === DC && (j = y.refs = {}), F === null ? delete j[b] : j[b] = F;
          };
          return T._stringRef = b, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Tm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function wm(e) {
      {
        var t = ct(e) || "Component";
        if (cS[t])
          return;
        cS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function jC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function PC(e) {
      function t(W, re) {
        if (e) {
          var Q = W.deletions;
          Q === null ? (W.deletions = [re], W.flags |= Yt) : Q.push(re);
        }
      }
      function a(W, re) {
        if (!e)
          return null;
        for (var Q = re; Q !== null; )
          t(W, Q), Q = Q.sibling;
        return null;
      }
      function i(W, re) {
        for (var Q = /* @__PURE__ */ new Map(), ve = re; ve !== null; )
          ve.key !== null ? Q.set(ve.key, ve) : Q.set(ve.index, ve), ve = ve.sibling;
        return Q;
      }
      function o(W, re) {
        var Q = mc(W, re);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function s(W, re, Q) {
        if (W.index = Q, !e)
          return W.flags |= jd, re;
        var ve = W.alternate;
        if (ve !== null) {
          var Le = ve.index;
          return Le < re ? (W.flags |= yn, re) : Le;
        } else
          return W.flags |= yn, re;
      }
      function d(W) {
        return e && W.alternate === null && (W.flags |= yn), W;
      }
      function m(W, re, Q, ve) {
        if (re === null || re.tag !== B) {
          var Le = jE(Q, W.mode, ve);
          return Le.return = W, Le;
        } else {
          var xe = o(re, Q);
          return xe.return = W, xe;
        }
      }
      function y(W, re, Q, ve) {
        var Le = Q.type;
        if (Le === Ra)
          return T(W, re, Q.props.children, ve, Q.key);
        if (re !== null && (re.elementType === Le || // Keep this check inline so it only runs on the false path:
        OR(re, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Le == "object" && Le !== null && Le.$$typeof === Ke && jC(Le) === re.type)) {
          var xe = o(re, Q.props);
          return xe.ref = $p(W, re, Q), xe.return = W, xe._debugSource = Q._source, xe._debugOwner = Q._owner, xe;
        }
        var ut = UE(Q, W.mode, ve);
        return ut.ref = $p(W, re, Q), ut.return = W, ut;
      }
      function b(W, re, Q, ve) {
        if (re === null || re.tag !== M || re.stateNode.containerInfo !== Q.containerInfo || re.stateNode.implementation !== Q.implementation) {
          var Le = PE(Q, W.mode, ve);
          return Le.return = W, Le;
        } else {
          var xe = o(re, Q.children || []);
          return xe.return = W, xe;
        }
      }
      function T(W, re, Q, ve, Le) {
        if (re === null || re.tag !== $) {
          var xe = as(Q, W.mode, ve, Le);
          return xe.return = W, xe;
        } else {
          var ut = o(re, Q);
          return ut.return = W, ut;
        }
      }
      function F(W, re, Q) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var ve = jE("" + re, W.mode, Q);
          return ve.return = W, ve;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case Si: {
              var Le = UE(re, W.mode, Q);
              return Le.ref = $p(W, null, re), Le.return = W, Le;
            }
            case jr: {
              var xe = PE(re, W.mode, Q);
              return xe.return = W, xe;
            }
            case Ke: {
              var ut = re._payload, vt = re._init;
              return F(W, vt(ut), Q);
            }
          }
          if (kt(re) || ai(re)) {
            var nn = as(re, W.mode, Q, null);
            return nn.return = W, nn;
          }
          Tm(W, re);
        }
        return typeof re == "function" && wm(W), null;
      }
      function j(W, re, Q, ve) {
        var Le = re !== null ? re.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return Le !== null ? null : m(W, re, "" + Q, ve);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Si:
              return Q.key === Le ? y(W, re, Q, ve) : null;
            case jr:
              return Q.key === Le ? b(W, re, Q, ve) : null;
            case Ke: {
              var xe = Q._payload, ut = Q._init;
              return j(W, re, ut(xe), ve);
            }
          }
          if (kt(Q) || ai(Q))
            return Le !== null ? null : T(W, re, Q, ve, null);
          Tm(W, Q);
        }
        return typeof Q == "function" && wm(W), null;
      }
      function q(W, re, Q, ve, Le) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var xe = W.get(Q) || null;
          return m(re, xe, "" + ve, Le);
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case Si: {
              var ut = W.get(ve.key === null ? Q : ve.key) || null;
              return y(re, ut, ve, Le);
            }
            case jr: {
              var vt = W.get(ve.key === null ? Q : ve.key) || null;
              return b(re, vt, ve, Le);
            }
            case Ke:
              var nn = ve._payload, It = ve._init;
              return q(W, re, Q, It(nn), Le);
          }
          if (kt(ve) || ai(ve)) {
            var er = W.get(Q) || null;
            return T(re, er, ve, Le, null);
          }
          Tm(re, ve);
        }
        return typeof ve == "function" && wm(re), null;
      }
      function X(W, re, Q) {
        {
          if (typeof W != "object" || W === null)
            return re;
          switch (W.$$typeof) {
            case Si:
            case jr:
              UC(W, Q);
              var ve = W.key;
              if (typeof ve != "string")
                break;
              if (re === null) {
                re = /* @__PURE__ */ new Set(), re.add(ve);
                break;
              }
              if (!re.has(ve)) {
                re.add(ve);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ve);
              break;
            case Ke:
              var Le = W._payload, xe = W._init;
              X(xe(Le), re, Q);
              break;
          }
        }
        return re;
      }
      function ne(W, re, Q, ve) {
        for (var Le = null, xe = 0; xe < Q.length; xe++) {
          var ut = Q[xe];
          Le = X(ut, Le, W);
        }
        for (var vt = null, nn = null, It = re, er = 0, Bt = 0, Gn = null; It !== null && Bt < Q.length; Bt++) {
          It.index > Bt ? (Gn = It, It = null) : Gn = It.sibling;
          var ma = j(W, It, Q[Bt], ve);
          if (ma === null) {
            It === null && (It = Gn);
            break;
          }
          e && It && ma.alternate === null && t(W, It), er = s(ma, er, Bt), nn === null ? vt = ma : nn.sibling = ma, nn = ma, It = Gn;
        }
        if (Bt === Q.length) {
          if (a(W, It), Br()) {
            var Kr = Bt;
            rc(W, Kr);
          }
          return vt;
        }
        if (It === null) {
          for (; Bt < Q.length; Bt++) {
            var hi = F(W, Q[Bt], ve);
            hi !== null && (er = s(hi, er, Bt), nn === null ? vt = hi : nn.sibling = hi, nn = hi);
          }
          if (Br()) {
            var La = Bt;
            rc(W, La);
          }
          return vt;
        }
        for (var Aa = i(W, It); Bt < Q.length; Bt++) {
          var ya = q(Aa, W, Bt, Q[Bt], ve);
          ya !== null && (e && ya.alternate !== null && Aa.delete(ya.key === null ? Bt : ya.key), er = s(ya, er, Bt), nn === null ? vt = ya : nn.sibling = ya, nn = ya);
        }
        if (e && Aa.forEach(function(ud) {
          return t(W, ud);
        }), Br()) {
          var Xo = Bt;
          rc(W, Xo);
        }
        return vt;
      }
      function Me(W, re, Q, ve) {
        var Le = ai(Q);
        if (typeof Le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (oS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), oS = !0), Q.entries === Le && (uS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var xe = Le.call(Q);
          if (xe)
            for (var ut = null, vt = xe.next(); !vt.done; vt = xe.next()) {
              var nn = vt.value;
              ut = X(nn, ut, W);
            }
        }
        var It = Le.call(Q);
        if (It == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Bt = null, Gn = re, ma = 0, Kr = 0, hi = null, La = It.next(); Gn !== null && !La.done; Kr++, La = It.next()) {
          Gn.index > Kr ? (hi = Gn, Gn = null) : hi = Gn.sibling;
          var Aa = j(W, Gn, La.value, ve);
          if (Aa === null) {
            Gn === null && (Gn = hi);
            break;
          }
          e && Gn && Aa.alternate === null && t(W, Gn), ma = s(Aa, ma, Kr), Bt === null ? er = Aa : Bt.sibling = Aa, Bt = Aa, Gn = hi;
        }
        if (La.done) {
          if (a(W, Gn), Br()) {
            var ya = Kr;
            rc(W, ya);
          }
          return er;
        }
        if (Gn === null) {
          for (; !La.done; Kr++, La = It.next()) {
            var Xo = F(W, La.value, ve);
            Xo !== null && (ma = s(Xo, ma, Kr), Bt === null ? er = Xo : Bt.sibling = Xo, Bt = Xo);
          }
          if (Br()) {
            var ud = Kr;
            rc(W, ud);
          }
          return er;
        }
        for (var Ev = i(W, Gn); !La.done; Kr++, La = It.next()) {
          var ao = q(Ev, W, Kr, La.value, ve);
          ao !== null && (e && ao.alternate !== null && Ev.delete(ao.key === null ? Kr : ao.key), ma = s(ao, ma, Kr), Bt === null ? er = ao : Bt.sibling = ao, Bt = ao);
        }
        if (e && Ev.forEach(function(vk) {
          return t(W, vk);
        }), Br()) {
          var pk = Kr;
          rc(W, pk);
        }
        return er;
      }
      function Xe(W, re, Q, ve) {
        if (re !== null && re.tag === B) {
          a(W, re.sibling);
          var Le = o(re, Q);
          return Le.return = W, Le;
        }
        a(W, re);
        var xe = jE(Q, W.mode, ve);
        return xe.return = W, xe;
      }
      function Be(W, re, Q, ve) {
        for (var Le = Q.key, xe = re; xe !== null; ) {
          if (xe.key === Le) {
            var ut = Q.type;
            if (ut === Ra) {
              if (xe.tag === $) {
                a(W, xe.sibling);
                var vt = o(xe, Q.props.children);
                return vt.return = W, vt._debugSource = Q._source, vt._debugOwner = Q._owner, vt;
              }
            } else if (xe.elementType === ut || // Keep this check inline so it only runs on the false path:
            OR(xe, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ut == "object" && ut !== null && ut.$$typeof === Ke && jC(ut) === xe.type) {
              a(W, xe.sibling);
              var nn = o(xe, Q.props);
              return nn.ref = $p(W, xe, Q), nn.return = W, nn._debugSource = Q._source, nn._debugOwner = Q._owner, nn;
            }
            a(W, xe);
            break;
          } else
            t(W, xe);
          xe = xe.sibling;
        }
        if (Q.type === Ra) {
          var It = as(Q.props.children, W.mode, ve, Q.key);
          return It.return = W, It;
        } else {
          var er = UE(Q, W.mode, ve);
          return er.ref = $p(W, re, Q), er.return = W, er;
        }
      }
      function At(W, re, Q, ve) {
        for (var Le = Q.key, xe = re; xe !== null; ) {
          if (xe.key === Le)
            if (xe.tag === M && xe.stateNode.containerInfo === Q.containerInfo && xe.stateNode.implementation === Q.implementation) {
              a(W, xe.sibling);
              var ut = o(xe, Q.children || []);
              return ut.return = W, ut;
            } else {
              a(W, xe);
              break;
            }
          else
            t(W, xe);
          xe = xe.sibling;
        }
        var vt = PE(Q, W.mode, ve);
        return vt.return = W, vt;
      }
      function Ot(W, re, Q, ve) {
        var Le = typeof Q == "object" && Q !== null && Q.type === Ra && Q.key === null;
        if (Le && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Si:
              return d(Be(W, re, Q, ve));
            case jr:
              return d(At(W, re, Q, ve));
            case Ke:
              var xe = Q._payload, ut = Q._init;
              return Ot(W, re, ut(xe), ve);
          }
          if (kt(Q))
            return ne(W, re, Q, ve);
          if (ai(Q))
            return Me(W, re, Q, ve);
          Tm(W, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? d(Xe(W, re, "" + Q, ve)) : (typeof Q == "function" && wm(W), a(W, re));
      }
      return Ot;
    }
    var $f = PC(!0), FC = PC(!1);
    function tx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function nx(e, t) {
      for (var a = e.child; a !== null; )
        ND(a, t), a = a.sibling;
    }
    var Yp = {}, ql = $l(Yp), Wp = $l(Yp), _m = $l(Yp);
    function xm(e) {
      if (e === Yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function VC() {
      var e = xm(_m.current);
      return e;
    }
    function fS(e, t) {
      va(_m, t, e), va(Wp, e, e), va(ql, Yp, e);
      var a = mw(t);
      pa(ql, e), va(ql, a, e);
    }
    function Yf(e) {
      pa(ql, e), pa(Wp, e), pa(_m, e);
    }
    function dS() {
      var e = xm(ql.current);
      return e;
    }
    function HC(e) {
      xm(_m.current);
      var t = xm(ql.current), a = yw(t, e.type);
      t !== a && (va(Wp, e, e), va(ql, a, e));
    }
    function pS(e) {
      Wp.current === e && (pa(ql, e), pa(Wp, e));
    }
    var rx = 0, IC = 1, BC = 1, Qp = 2, lu = $l(rx);
    function vS(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & IC;
    }
    function hS(e, t) {
      return e & IC | t;
    }
    function ax(e, t) {
      return e | t;
    }
    function Kl(e, t) {
      va(lu, t, e);
    }
    function Qf(e) {
      pa(lu, e);
    }
    function ix(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === H) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || J0(i) || Cg(i))
              return t;
          }
        } else if (t.tag === Ue && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & ot) !== Ge;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Za = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), Xu = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), $r = (
      /*   */
      8
    ), mS = [];
    function yS() {
      for (var e = 0; e < mS.length; e++) {
        var t = mS[e];
        t._workInProgressVersionPrimary = null;
      }
      mS.length = 0;
    }
    function ux(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ke = v.ReactCurrentDispatcher, Gp = v.ReactCurrentBatchConfig, gS, Gf;
    gS = /* @__PURE__ */ new Set();
    var sc = ae, tn = null, gr = null, Sr = null, Dm = !1, qp = !1, Kp = 0, ox = 0, lx = 25, ie = null, zi = null, Xl = -1, SS = !1;
    function Xt() {
      {
        var e = ie;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function be() {
      {
        var e = ie;
        zi !== null && (Xl++, zi[Xl] !== e && sx(e));
      }
    }
    function qf(e) {
      e != null && !kt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function sx(e) {
      {
        var t = ct(tn);
        if (!gS.has(t) && (gS.add(t), zi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Xl; o++) {
            for (var s = zi[o], d = o === Xl ? e : s, m = o + 1 + ". " + s; m.length < i; )
              m += " ";
            m += d + `
`, a += m;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ha() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function ES(e, t) {
      if (SS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ie), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ie, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Pe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Kf(e, t, a, i, o, s) {
      sc = s, tn = t, zi = e !== null ? e._debugHookTypes : null, Xl = -1, SS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? ke.current = fb : zi !== null ? ke.current = cb : ke.current = sb;
      var d = a(i, o);
      if (qp) {
        var m = 0;
        do {
          if (qp = !1, Kp = 0, m >= lx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, SS = !1, gr = null, Sr = null, t.updateQueue = null, Xl = -1, ke.current = db, d = a(i, o);
        } while (qp);
      }
      ke.current = Im, t._debugHookTypes = zi;
      var y = gr !== null && gr.next !== null;
      if (sc = ae, tn = null, gr = null, Sr = null, ie = null, zi = null, Xl = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & _t) !== et && g("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Xf() {
      var e = Kp !== 0;
      return Kp = 0, e;
    }
    function $C(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $a) !== et ? t.flags &= ~(So | oa | Tn | gt) : t.flags &= ~(Tn | gt), e.lanes = xl(e.lanes, a);
    }
    function YC() {
      if (ke.current = Im, Dm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      sc = ae, tn = null, gr = null, Sr = null, zi = null, Xl = -1, ie = null, ab = !1, qp = !1, Kp = 0;
    }
    function Zu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? tn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Ui() {
      var e;
      if (gr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = tn.memoizedState : a = Sr.next, a !== null)
        Sr = a, a = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var i = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? tn.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function WC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function CS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bS(e, t, a) {
      var i = Zu(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var d = s.dispatch = px.bind(null, tn, s);
      return [i.memoizedState, d];
    }
    function RS(e, t, a) {
      var i = Ui(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = gr, d = s.baseQueue, m = o.pending;
      if (m !== null) {
        if (d !== null) {
          var y = d.next, b = m.next;
          d.next = b, m.next = y;
        }
        s.baseQueue !== d && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = m, o.pending = null;
      }
      if (d !== null) {
        var T = d.next, F = s.baseState, j = null, q = null, X = null, ne = T;
        do {
          var Me = ne.lane;
          if (Do(sc, Me)) {
            if (X !== null) {
              var Be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                action: ne.action,
                hasEagerState: ne.hasEagerState,
                eagerState: ne.eagerState,
                next: null
              };
              X = X.next = Be;
            }
            if (ne.hasEagerState)
              F = ne.eagerState;
            else {
              var At = ne.action;
              F = e(F, At);
            }
          } else {
            var Xe = {
              lane: Me,
              action: ne.action,
              hasEagerState: ne.hasEagerState,
              eagerState: ne.eagerState,
              next: null
            };
            X === null ? (q = X = Xe, j = F) : X = X.next = Xe, tn.lanes = St(tn.lanes, Me), hv(Me);
          }
          ne = ne.next;
        } while (ne !== null && ne !== T);
        X === null ? j = F : X.next = q, Pe(F, i.memoizedState) || rv(), i.memoizedState = F, i.baseState = j, i.baseQueue = X, o.lastRenderedState = F;
      }
      var Ot = o.interleaved;
      if (Ot !== null) {
        var W = Ot;
        do {
          var re = W.lane;
          tn.lanes = St(tn.lanes, re), hv(re), W = W.next;
        } while (W !== Ot);
      } else
        d === null && (o.lanes = ae);
      var Q = o.dispatch;
      return [i.memoizedState, Q];
    }
    function TS(e, t, a) {
      var i = Ui(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, d = o.pending, m = i.memoizedState;
      if (d !== null) {
        o.pending = null;
        var y = d.next, b = y;
        do {
          var T = b.action;
          m = e(m, T), b = b.next;
        } while (b !== y);
        Pe(m, i.memoizedState) || rv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
      }
      return [m, s];
    }
    function IM(e, t, a) {
    }
    function BM(e, t, a) {
    }
    function wS(e, t, a) {
      var i = tn, o = Zu(), s, d = Br();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Gf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var m = t();
          Pe(s, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var y = uy();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(y, sc) || QC(i, t, s);
      }
      o.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return o.queue = b, Am(qC.bind(null, i, b, e), [e]), i.flags |= Tn, Xp(mr | $r, GC.bind(null, i, b, s, t), void 0, null), s;
    }
    function km(e, t, a) {
      var i = tn, o = Ui(), s = t();
      if (!Gf) {
        var d = t();
        Pe(s, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var m = o.memoizedState, y = !Pe(m, s);
      y && (o.memoizedState = s, rv());
      var b = o.queue;
      if (Jp(qC.bind(null, i, b, e), [e]), b.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= Tn, Xp(mr | $r, GC.bind(null, i, b, s, t), void 0, null);
        var T = uy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(T, sc) || QC(i, t, s);
      }
      return s;
    }
    function QC(e, t, a) {
      e.flags |= Ns;
      var i = {
        getSnapshot: t,
        value: a
      }, o = tn.updateQueue;
      if (o === null)
        o = WC(), tn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function GC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, KC(t) && XC(e);
    }
    function qC(e, t, a) {
      var i = function() {
        KC(t) && XC(e);
      };
      return a(i);
    }
    function KC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Pe(a, i);
      } catch {
        return !0;
      }
    }
    function XC(e) {
      var t = Xa(e, it);
      t !== null && Rr(t, e, it, fn);
    }
    function Nm(e) {
      var t = Zu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: CS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = vx.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function _S(e) {
      return RS(CS);
    }
    function xS(e) {
      return TS(CS);
    }
    function Xp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = WC(), tn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = o.next = o;
        else {
          var m = d.next;
          d.next = o, o.next = m, s.lastEffect = o;
        }
      }
      return o;
    }
    function OS(e) {
      var t = Zu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Mm(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function Zp(e, t, a, i) {
      var o = Zu(), s = i === void 0 ? null : i;
      tn.flags |= e, o.memoizedState = Xp(mr | t, a, void 0, s);
    }
    function Lm(e, t, a, i) {
      var o = Ui(), s = i === void 0 ? null : i, d = void 0;
      if (gr !== null) {
        var m = gr.memoizedState;
        if (d = m.destroy, s !== null) {
          var y = m.deps;
          if (ES(s, y)) {
            o.memoizedState = Xp(t, a, d, s);
            return;
          }
        }
      }
      tn.flags |= e, o.memoizedState = Xp(mr | t, a, d, s);
    }
    function Am(e, t) {
      return (tn.mode & $a) !== et ? Zp(So | Tn | Au, $r, e, t) : Zp(Tn | Au, $r, e, t);
    }
    function Jp(e, t) {
      return Lm(Tn, $r, e, t);
    }
    function DS(e, t) {
      return Zp(gt, Xu, e, t);
    }
    function zm(e, t) {
      return Lm(gt, Xu, e, t);
    }
    function kS(e, t) {
      var a = gt;
      return a |= ua, (tn.mode & $a) !== et && (a |= oa), Zp(a, yr, e, t);
    }
    function Um(e, t) {
      return Lm(gt, yr, e, t);
    }
    function ZC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function NS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = gt;
      return o |= ua, (tn.mode & $a) !== et && (o |= oa), Zp(o, yr, ZC.bind(null, t, e), i);
    }
    function jm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Lm(gt, yr, ZC.bind(null, t, e), i);
    }
    function cx(e, t) {
    }
    var Pm = cx;
    function MS(e, t) {
      var a = Zu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Fm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (ES(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function LS(e, t) {
      var a = Zu(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Vm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (ES(i, s))
          return o[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function AS(e) {
      var t = Zu();
      return t.memoizedState = e, e;
    }
    function JC(e) {
      var t = Ui(), a = gr, i = a.memoizedState;
      return tb(t, i, e);
    }
    function eb(e) {
      var t = Ui();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return tb(t, a, e);
    }
    function tb(e, t, a) {
      var i = !Vy(sc);
      if (i) {
        if (!Pe(a, t)) {
          var o = ep();
          tn.lanes = St(tn.lanes, o), hv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, rv()), e.memoizedState = a, a;
    }
    function fx(e, t, a) {
      var i = Wa();
      Xn(Dr(i, hr)), e(!0);
      var o = Gp.transition;
      Gp.transition = {};
      var s = Gp.transition;
      Gp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Xn(i), Gp.transition = o, o === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function zS() {
      var e = Nm(!1), t = e[0], a = e[1], i = fx.bind(null, a), o = Zu();
      return o.memoizedState = i, [t, i];
    }
    function nb() {
      var e = _S(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function rb() {
      var e = xS(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var ab = !1;
    function dx() {
      return ab;
    }
    function US() {
      var e = Zu(), t = uy(), a = t.identifierPrefix, i;
      if (Br()) {
        var o = __();
        i = ":" + a + "R" + o;
        var s = Kp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = ox++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Hm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function px(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ns(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ib(e))
        ub(t, o);
      else {
        var s = RC(e, t, o, i);
        if (s !== null) {
          var d = Ma();
          Rr(s, e, i, d), ob(s, t, i);
        }
      }
      lb(e, i);
    }
    function vx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ns(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ib(e))
        ub(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var m;
            m = ke.current, ke.current = su;
            try {
              var y = t.lastRenderedState, b = d(y, a);
              if (o.hasEagerState = !0, o.eagerState = b, Pe(b, y)) {
                W_(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              ke.current = m;
            }
          }
        }
        var T = RC(e, t, o, i);
        if (T !== null) {
          var F = Ma();
          Rr(T, e, i, F), ob(T, t, i);
        }
      }
      lb(e, i);
    }
    function ib(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function ub(e, t) {
      qp = Dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ob(e, t, a) {
      if (Jd(a)) {
        var i = t.lanes;
        i = tp(i, e.pendingLanes);
        var o = St(i, a);
        t.lanes = o, Ol(e, o);
      }
    }
    function lb(e, t, a) {
      Vu(e, t);
    }
    var Im = {
      readContext: cr,
      useCallback: ha,
      useContext: ha,
      useEffect: ha,
      useImperativeHandle: ha,
      useInsertionEffect: ha,
      useLayoutEffect: ha,
      useMemo: ha,
      useReducer: ha,
      useRef: ha,
      useState: ha,
      useDebugValue: ha,
      useDeferredValue: ha,
      useTransition: ha,
      useMutableSource: ha,
      useSyncExternalStore: ha,
      useId: ha,
      unstable_isNewReconciler: he
    }, sb = null, cb = null, fb = null, db = null, Ju = null, su = null, Bm = null;
    {
      var jS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ft = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      sb = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Xt(), qf(t), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Xt(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Xt(), qf(t), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Xt(), qf(a), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Xt(), qf(t), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Xt(), qf(t), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Xt(), qf(t);
          var a = ke.current;
          ke.current = Ju;
          try {
            return LS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Xt();
          var i = ke.current;
          ke.current = Ju;
          try {
            return bS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Xt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", Xt();
          var t = ke.current;
          ke.current = Ju;
          try {
            return Nm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Xt(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", Xt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", Xt(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", Xt(), US();
        },
        unstable_isNewReconciler: he
      }, cb = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = ke.current;
          ke.current = Ju;
          try {
            return LS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = ke.current;
          ke.current = Ju;
          try {
            return bS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), OS(e);
        },
        useState: function(e) {
          ie = "useState", be();
          var t = ke.current;
          ke.current = Ju;
          try {
            return Nm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", be(), US();
        },
        unstable_isNewReconciler: he
      }, fb = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = ke.current;
          ke.current = su;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = ke.current;
          ke.current = su;
          try {
            return RS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Mm();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = ke.current;
          ke.current = su;
          try {
            return _S(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), JC(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), nb();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", be(), Hm();
        },
        unstable_isNewReconciler: he
      }, db = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = ke.current;
          ke.current = Bm;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = ke.current;
          ke.current = Bm;
          try {
            return TS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Mm();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = ke.current;
          ke.current = Bm;
          try {
            return xS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), eb(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), rb();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", be(), Hm();
        },
        unstable_isNewReconciler: he
      }, Ju = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ft(), Xt(), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ft(), Xt(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ft(), Xt(), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ft(), Xt(), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ft(), Xt(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ft(), Xt(), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ft(), Xt();
          var a = ke.current;
          ke.current = Ju;
          try {
            return LS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ft(), Xt();
          var i = ke.current;
          ke.current = Ju;
          try {
            return bS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ft(), Xt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", ft(), Xt();
          var t = ke.current;
          ke.current = Ju;
          try {
            return Nm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ft(), Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ft(), Xt(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", ft(), Xt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ft(), Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ft(), Xt(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", ft(), Xt(), US();
        },
        unstable_isNewReconciler: he
      }, su = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ft(), be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ft(), be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ft(), be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ft(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ft(), be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ft(), be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ft(), be();
          var a = ke.current;
          ke.current = su;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ft(), be();
          var i = ke.current;
          ke.current = su;
          try {
            return RS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ft(), be(), Mm();
        },
        useState: function(e) {
          ie = "useState", ft(), be();
          var t = ke.current;
          ke.current = su;
          try {
            return _S(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ft(), be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ft(), be(), JC(e);
        },
        useTransition: function() {
          return ie = "useTransition", ft(), be(), nb();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ft(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ft(), be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", ft(), be(), Hm();
        },
        unstable_isNewReconciler: he
      }, Bm = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ft(), be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ft(), be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ft(), be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ft(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ft(), be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ft(), be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ft(), be();
          var a = ke.current;
          ke.current = su;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ft(), be();
          var i = ke.current;
          ke.current = su;
          try {
            return TS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ft(), be(), Mm();
        },
        useState: function(e) {
          ie = "useState", ft(), be();
          var t = ke.current;
          ke.current = su;
          try {
            return xS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ft(), be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ft(), be(), eb(e);
        },
        useTransition: function() {
          return ie = "useTransition", ft(), be(), rb();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ft(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ft(), be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", ft(), be(), Hm();
        },
        unstable_isNewReconciler: he
      };
    }
    var Zl = p.unstable_now, pb = 0, $m = -1, ev = -1, Ym = -1, PS = !1, Wm = !1;
    function vb() {
      return PS;
    }
    function hx() {
      Wm = !0;
    }
    function mx() {
      PS = !1, Wm = !1;
    }
    function yx() {
      PS = Wm, Wm = !1;
    }
    function hb() {
      return pb;
    }
    function mb() {
      pb = Zl();
    }
    function FS(e) {
      ev = Zl(), e.actualStartTime < 0 && (e.actualStartTime = Zl());
    }
    function yb(e) {
      ev = -1;
    }
    function Qm(e, t) {
      if (ev >= 0) {
        var a = Zl() - ev;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ev = -1;
      }
    }
    function eo(e) {
      if ($m >= 0) {
        var t = Zl() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case k:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case J:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VS(e) {
      if (Ym >= 0) {
        var t = Zl() - Ym;
        Ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case k:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case J:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function to() {
      $m = Zl();
    }
    function HS() {
      Ym = Zl();
    }
    function IS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cc(e, t) {
      return {
        value: e,
        source: t,
        stack: il(t),
        digest: null
      };
    }
    function BS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function gx(e, t) {
      return !0;
    }
    function $S(e, t) {
      try {
        var a = gx(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === _)
            return;
          console.error(i);
        }
        var m = o ? ct(o) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === k)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = ct(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var F = y + `
` + d + `

` + ("" + b);
        console.error(F);
      } catch (j) {
        setTimeout(function() {
          throw j;
        });
      }
    }
    var Sx = typeof WeakMap == "function" ? WeakMap : Map;
    function gb(e, t, a) {
      var i = Yo(fn, a);
      i.tag = $g, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        fD(o), $S(e, t);
      }, i;
    }
    function YS(e, t, a) {
      var i = Yo(fn, a);
      i.tag = $g;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          DR(e), $S(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        DR(e), $S(e, t), typeof o != "function" && sD(this);
        var y = t.value, b = t.stack;
        this.componentDidCatch(y, {
          componentStack: b !== null ? b : ""
        }), typeof o != "function" && (da(e.lanes, it) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), i;
    }
    function Sb(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Sx(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = dD.bind(null, e, t, a);
        vr && mv(e, a), t.then(s, s);
      }
    }
    function Ex(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function Cx(e, t) {
      var a = e.tag;
      if ((e.mode & _t) === et && (a === L || a === te || a === ge)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Eb(e) {
      var t = e;
      do {
        if (t.tag === H && ix(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Cb(e, t, a, i, o) {
      if ((e.mode & _t) === et) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= ot, a.flags |= Ms, a.flags &= ~(zc | Ta), a.tag === _) {
            var s = a.alternate;
            if (s === null)
              a.tag = tt;
            else {
              var d = Yo(fn, it);
              d.tag = ym, Gl(a, d, it);
            }
          }
          a.lanes = St(a.lanes, it);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = o, e;
    }
    function bx(e, t, a, i, o) {
      if (a.flags |= Ta, vr && mv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Cx(a), Br() && a.mode & _t && fC();
        var d = Eb(t);
        if (d !== null) {
          d.flags &= ~An, Cb(d, t, a, e, o), d.mode & _t && Sb(e, s, o), Ex(d, e, s);
          return;
        } else {
          if (!_l(o)) {
            Sb(e, s, o), TE();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Br() && a.mode & _t) {
        fC();
        var y = Eb(t);
        if (y !== null) {
          (y.flags & ir) === Ge && (y.flags |= An), Cb(y, t, a, e, o), jg(cc(i, a));
          return;
        }
      }
      i = cc(i, a), tD(i);
      var b = t;
      do {
        switch (b.tag) {
          case k: {
            var T = i;
            b.flags |= ir;
            var F = Kn(o);
            b.lanes = St(b.lanes, F);
            var j = gb(b, T, F);
            Qg(b, j);
            return;
          }
          case _:
            var q = i, X = b.type, ne = b.stateNode;
            if ((b.flags & ot) === Ge && (typeof X.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && !ER(ne))) {
              b.flags |= ir;
              var Me = Kn(o);
              b.lanes = St(b.lanes, Me);
              var Xe = YS(b, q, Me);
              Qg(b, Xe);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function Rx() {
      return null;
    }
    var tv = v.ReactCurrentOwner, cu = !1, WS, nv, QS, GS, qS, fc, KS, Gm;
    WS = {}, nv = {}, QS = {}, GS = {}, qS = {}, fc = !1, KS = {}, Gm = {};
    function ka(e, t, a, i) {
      e === null ? t.child = FC(t, null, a, i) : t.child = $f(t, e.child, a, i);
    }
    function Tx(e, t, a, i) {
      t.child = $f(t, e.child, null, i), t.child = $f(t, null, a, i);
    }
    function bb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && au(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d = a.render, m = t.ref, y, b;
      Bf(t, o), Fu(t);
      {
        if (tv.current = t, ra(!0), y = Kf(e, t, d, i, m, o), b = Xf(), t.mode & kn) {
          qn(!0);
          try {
            y = Kf(e, t, d, i, m, o), b = Xf();
          } finally {
            qn(!1);
          }
        }
        ra(!1);
      }
      return Eo(), e !== null && !cu ? ($C(e, t, o), Wo(e, t, o)) : (Br() && b && Ng(t), t.flags |= Mu, ka(e, t, y, o), t.child);
    }
    function Rb(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (DD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = id(s), t.tag = ge, t.type = d, JS(t, s), Tb(e, t, d, i, o);
        }
        {
          var m = s.propTypes;
          m && au(
            m,
            i,
            // Resolved props
            "prop",
            Pt(s)
          );
        }
        var y = zE(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var b = a.type, T = b.propTypes;
        T && au(
          T,
          i,
          // Resolved props
          "prop",
          Pt(b)
        );
      }
      var F = e.child, j = iE(e, o);
      if (!j) {
        var q = F.memoizedProps, X = a.compare;
        if (X = X !== null ? X : Qe, X(q, i) && e.ref === t.ref)
          return Wo(e, t, o);
      }
      t.flags |= Mu;
      var ne = mc(F, i);
      return ne.ref = t.ref, ne.return = t, t.child = ne, ne;
    }
    function Tb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var d = s, m = d._payload, y = d._init;
          try {
            s = y(m);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && au(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Pt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Qe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cu = !1, t.pendingProps = i = T, iE(e, o))
            (e.flags & Ms) !== Ge && (cu = !0);
          else
            return t.lanes = e.lanes, Wo(e, t, o);
      }
      return XS(e, t, a, i, o);
    }
    function wb(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || N)
        if ((t.mode & _t) === et) {
          var d = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, oy(t, a);
        } else if (da(a, fa)) {
          var F = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var j = s !== null ? s.baseLanes : a;
          oy(t, j);
        } else {
          var m = null, y;
          if (s !== null) {
            var b = s.baseLanes;
            y = St(b, a);
          } else
            y = a;
          t.lanes = t.childLanes = fa;
          var T = {
            baseLanes: y,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, oy(t, y), null;
        }
      else {
        var q;
        s !== null ? (q = St(s.baseLanes, a), t.memoizedState = null) : q = a, oy(t, q);
      }
      return ka(e, t, o, a), t.child;
    }
    function wx(e, t, a) {
      var i = t.pendingProps;
      return ka(e, t, i, a), t.child;
    }
    function _x(e, t, a) {
      var i = t.pendingProps.children;
      return ka(e, t, i, a), t.child;
    }
    function xx(e, t, a) {
      {
        t.flags |= gt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return ka(e, t, s, a), t.child;
    }
    function _b(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ia, t.flags |= Pd);
    }
    function XS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && au(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d;
      {
        var m = jf(t, a, !0);
        d = Pf(t, m);
      }
      var y, b;
      Bf(t, o), Fu(t);
      {
        if (tv.current = t, ra(!0), y = Kf(e, t, a, i, d, o), b = Xf(), t.mode & kn) {
          qn(!0);
          try {
            y = Kf(e, t, a, i, d, o), b = Xf();
          } finally {
            qn(!1);
          }
        }
        ra(!1);
      }
      return Eo(), e !== null && !cu ? ($C(e, t, o), Wo(e, t, o)) : (Br() && b && Ng(t), t.flags |= Mu, ka(e, t, y, o), t.child);
    }
    function xb(e, t, a, i, o) {
      {
        switch ($D(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), y = m.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ot, t.flags |= ir;
            var b = new Error("Simulated error coming from DevTools"), T = Kn(o);
            t.lanes = St(t.lanes, T);
            var F = YS(t, cc(b, t), T);
            Qg(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var j = a.propTypes;
          j && au(
            j,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var q;
      Ku(a) ? (q = !0, um(t)) : q = !1, Bf(t, o);
      var X = t.stateNode, ne;
      X === null ? (Km(e, t), AC(t, a, i), iS(t, a, i, o), ne = !0) : e === null ? ne = J_(t, a, i, o) : ne = ex(e, t, a, i, o);
      var Me = ZS(e, t, a, ne, q, o);
      {
        var Xe = t.stateNode;
        ne && Xe.props !== i && (fc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), fc = !0);
      }
      return Me;
    }
    function ZS(e, t, a, i, o, s) {
      _b(e, t);
      var d = (t.flags & ot) !== Ge;
      if (!i && !d)
        return o && oC(t, a, !1), Wo(e, t, s);
      var m = t.stateNode;
      tv.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, yb();
      else {
        Fu(t);
        {
          if (ra(!0), y = m.render(), t.mode & kn) {
            qn(!0);
            try {
              m.render();
            } finally {
              qn(!1);
            }
          }
          ra(!1);
        }
        Eo();
      }
      return t.flags |= Mu, e !== null && d ? Tx(e, t, y, s) : ka(e, t, y, s), t.memoizedState = m.state, o && oC(t, a, !0), t.child;
    }
    function Ob(e) {
      var t = e.stateNode;
      t.pendingContext ? iC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iC(e, t.context, !1), fS(e, t.containerInfo);
    }
    function Ox(e, t, a) {
      if (Ob(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      _C(e, t), Cm(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var m = d.element;
      if (o.isDehydrated) {
        var y = {
          element: m,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, b = t.updateQueue;
        if (b.baseState = y, t.memoizedState = y, t.flags & An) {
          var T = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Db(e, t, m, a, T);
        } else if (m !== s) {
          var F = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Db(e, t, m, a, F);
        } else {
          M_(t);
          var j = FC(t, null, m, a);
          t.child = j;
          for (var q = j; q; )
            q.flags = q.flags & ~yn | Ha, q = q.sibling;
        }
      } else {
        if (Hf(), m === s)
          return Wo(e, t, a);
        ka(e, t, m, a);
      }
      return t.child;
    }
    function Db(e, t, a, i, o) {
      return Hf(), jg(o), t.flags |= An, ka(e, t, a, i), t.child;
    }
    function Dx(e, t, a) {
      HC(t), e === null && Ug(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = o.children, m = yg(i, o);
      return m ? d = null : s !== null && yg(i, s) && (t.flags |= Kt), _b(e, t), ka(e, t, d, a), t.child;
    }
    function kx(e, t) {
      return e === null && Ug(t), null;
    }
    function Nx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s = a, d = s._payload, m = s._init, y = m(d);
      t.type = y;
      var b = t.tag = kD(y), T = ou(y, o), F;
      switch (b) {
        case L:
          return JS(t, y), t.type = y = id(y), F = XS(null, t, y, T, i), F;
        case _:
          return t.type = y = DE(y), F = xb(null, t, y, T, i), F;
        case te:
          return t.type = y = kE(y), F = bb(null, t, y, T, i), F;
        case de: {
          if (t.type !== t.elementType) {
            var j = y.propTypes;
            j && au(
              j,
              T,
              // Resolved for outer only
              "prop",
              Pt(y)
            );
          }
          return F = Rb(
            null,
            t,
            y,
            ou(y.type, T),
            // The inner type can have defaults too
            i
          ), F;
        }
      }
      var q = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ke && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function Mx(e, t, a, i, o) {
      Km(e, t), t.tag = _;
      var s;
      return Ku(a) ? (s = !0, um(t)) : s = !1, Bf(t, o), AC(t, a, i), iS(t, a, i, o), ZS(null, t, a, !0, s, o);
    }
    function Lx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s;
      {
        var d = jf(t, a, !1);
        s = Pf(t, d);
      }
      Bf(t, i);
      var m, y;
      Fu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Pt(a) || "Unknown";
          WS[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), WS[b] = !0);
        }
        t.mode & kn && uu.recordLegacyContextWarning(t, null), ra(!0), tv.current = t, m = Kf(null, t, a, o, s, i), y = Xf(), ra(!1);
      }
      if (Eo(), t.flags |= Mu, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var T = Pt(a) || "Unknown";
        nv[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), nv[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var F = Pt(a) || "Unknown";
          nv[F] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), nv[F] = !0);
        }
        t.tag = _, t.memoizedState = null, t.updateQueue = null;
        var j = !1;
        return Ku(a) ? (j = !0, um(t)) : j = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Wg(t), LC(t, m), iS(t, a, o, i), ZS(null, t, a, !0, j, i);
      } else {
        if (t.tag = L, t.mode & kn) {
          qn(!0);
          try {
            m = Kf(null, t, a, o, s, i), y = Xf();
          } finally {
            qn(!1);
          }
        }
        return Br() && y && Ng(t), ka(null, t, m, i), JS(t, a), t.child;
      }
    }
    function JS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Vr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), qS[o] || (qS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Pt(t) || "Unknown";
          GS[d] || (g("%s: Function components do not support getDerivedStateFromProps.", d), GS[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Pt(t) || "Unknown";
          QS[m] || (g("%s: Function components do not support contextType.", m), QS[m] = !0);
        }
      }
    }
    var eE = {
      dehydrated: null,
      treeContext: null,
      retryLane: Mt
    };
    function tE(e) {
      return {
        baseLanes: e,
        cachePool: Rx(),
        transitions: null
      };
    }
    function Ax(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function zx(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return vS(e, Qp);
    }
    function Ux(e, t) {
      return xl(e.childLanes, t);
    }
    function kb(e, t, a) {
      var i = t.pendingProps;
      YD(t) && (t.flags |= ot);
      var o = lu.current, s = !1, d = (t.flags & ot) !== Ge;
      if (d || zx(o, e) ? (s = !0, t.flags &= ~ot) : (e === null || e.memoizedState !== null) && (o = ax(o, BC)), o = Wf(o), Kl(t, o), e === null) {
        Ug(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return Hx(t, y);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var F = jx(t, b, T, a), j = t.child;
          return j.memoizedState = tE(a), t.memoizedState = eE, F;
        } else
          return nE(t, b);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var X = q.dehydrated;
          if (X !== null)
            return Ix(e, t, d, i, X, q, a);
        }
        if (s) {
          var ne = i.fallback, Me = i.children, Xe = Fx(e, t, Me, ne, a), Be = t.child, At = e.child.memoizedState;
          return Be.memoizedState = At === null ? tE(a) : Ax(At, a), Be.childLanes = Ux(e, a), t.memoizedState = eE, Xe;
        } else {
          var Ot = i.children, W = Px(e, t, Ot, a);
          return t.memoizedState = null, W;
        }
      }
    }
    function nE(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = rE(o, i);
      return s.return = e, e.child = s, s;
    }
    function jx(e, t, a, i) {
      var o = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, m, y;
      return (o & _t) === et && s !== null ? (m = s, m.childLanes = ae, m.pendingProps = d, e.mode & rt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = as(a, o, i, null)) : (m = rE(d, o), y = as(a, o, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function rE(e, t, a) {
      return NR(e, t, ae, null);
    }
    function Nb(e, t) {
      return mc(e, t);
    }
    function Px(e, t, a, i) {
      var o = e.child, s = o.sibling, d = Nb(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & _t) === et && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Yt) : m.push(s);
      }
      return t.child = d, d;
    }
    function Fx(e, t, a, i, o) {
      var s = t.mode, d = e.child, m = d.sibling, y = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & _t) === et && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        b = T, b.childLanes = ae, b.pendingProps = y, t.mode & rt && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = Nb(d, y), b.subtreeFlags = d.subtreeFlags & pr;
      var F;
      return m !== null ? F = mc(m, i) : (F = as(i, s, o, null), F.flags |= yn), F.return = t, b.return = t, b.sibling = F, t.child = b, F;
    }
    function qm(e, t, a, i) {
      i !== null && jg(i), $f(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, d = nE(t, s);
      return d.flags |= yn, t.memoizedState = null, d;
    }
    function Vx(e, t, a, i, o) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, m = rE(d, s), y = as(i, s, o, null);
      return y.flags |= yn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & _t) !== et && $f(t, e.child, null, o), y;
    }
    function Hx(e, t, a) {
      return (e.mode & _t) === et ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = it) : Cg(t) ? e.lanes = Ro : e.lanes = fa, null;
    }
    function Ix(e, t, a, i, o, s, d) {
      if (a)
        if (t.flags & An) {
          t.flags &= ~An;
          var W = BS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, d, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ot, null;
          var re = i.children, Q = i.fallback, ve = Vx(e, t, re, Q, d), Le = t.child;
          return Le.memoizedState = tE(d), t.memoizedState = eE, ve;
        }
      else {
        if (k_(), (t.mode & _t) === et)
          return qm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Cg(o)) {
          var m, y, b;
          {
            var T = Qw(o);
            m = T.digest, y = T.message, b = T.stack;
          }
          var F;
          y ? F = new Error(y) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var j = BS(F, m, b);
          return qm(e, t, d, j);
        }
        var q = da(d, e.childLanes);
        if (cu || q) {
          var X = uy();
          if (X !== null) {
            var ne = Iy(X, d);
            if (ne !== Mt && ne !== s.retryLane) {
              s.retryLane = ne;
              var Me = fn;
              Xa(e, ne), Rr(X, e, ne, Me);
            }
          }
          TE();
          var Xe = BS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, d, Xe);
        } else if (J0(o)) {
          t.flags |= ot, t.child = e.child;
          var Be = pD.bind(null, e);
          return Gw(o, Be), null;
        } else {
          L_(t, o, s.treeContext);
          var At = i.children, Ot = nE(t, At);
          return Ot.flags |= Ha, Ot;
        }
      }
    }
    function Mb(e, t, a) {
      e.lanes = St(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = St(i.lanes, t)), Ig(e.return, t, a);
    }
    function Bx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === H) {
          var o = i.memoizedState;
          o !== null && Mb(i, a, e);
        } else if (i.tag === Ue)
          Mb(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $x(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Om(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Yx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !KS[e])
        if (KS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Wx(e, t) {
      e !== void 0 && !Gm[e] && (e !== "collapsed" && e !== "hidden" ? (Gm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Lb(e, t) {
      {
        var a = kt(e), i = !a && typeof ai(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Qx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Lb(e[a], a))
              return;
        } else {
          var i = ai(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), d = 0; !s.done; s = o.next()) {
                if (!Lb(s.value, d))
                  return;
                d++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function aE(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function Ab(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, d = i.children;
      Yx(o), Wx(s, o), Qx(d, o), ka(e, t, d, a);
      var m = lu.current, y = vS(m, Qp);
      if (y)
        m = hS(m, Qp), t.flags |= ot;
      else {
        var b = e !== null && (e.flags & ot) !== Ge;
        b && Bx(t, t.child, a), m = Wf(m);
      }
      if (Kl(t, m), (t.mode & _t) === et)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = $x(t.child), F;
            T === null ? (F = t.child, t.child = null) : (F = T.sibling, T.sibling = null), aE(
              t,
              !1,
              // isBackwards
              F,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var j = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var X = q.alternate;
              if (X !== null && Om(X) === null) {
                t.child = q;
                break;
              }
              var ne = q.sibling;
              q.sibling = j, j = q, q = ne;
            }
            aE(
              t,
              !0,
              // isBackwards
              j,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            aE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Gx(e, t, a) {
      fS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = $f(t, null, i, a) : ka(e, t, i, a), t.child;
    }
    var zb = !1;
    function qx(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || zb || (zb = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && au(y, s, "prop", "Context.Provider");
      }
      if (bC(t, o, m), d !== null) {
        var b = d.value;
        if (Pe(b, m)) {
          if (d.children === s.children && !am())
            return Wo(e, t, a);
        } else
          B_(t, o, a);
      }
      var T = s.children;
      return ka(e, t, T, a), t.child;
    }
    var Ub = !1;
    function Kx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Ub || (Ub = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bf(t, a);
      var d = cr(i);
      Fu(t);
      var m;
      return tv.current = t, ra(!0), m = s(d), ra(!1), Eo(), t.flags |= Mu, ka(e, t, m, a), t.child;
    }
    function rv() {
      cu = !0;
    }
    function Km(e, t) {
      (t.mode & _t) === et && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function Wo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), yb(), hv(t.lanes), da(a, t.childLanes) ? (tx(e, t), t.child) : null;
    }
    function Xx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Yt) : s.push(e), a.flags |= yn, a;
      }
    }
    function iE(e, t) {
      var a = e.lanes;
      return !!da(a, t);
    }
    function Zx(e, t, a) {
      switch (t.tag) {
        case k:
          Ob(t), t.stateNode, Hf();
          break;
        case A:
          HC(t);
          break;
        case _: {
          var i = t.type;
          Ku(i) && um(t);
          break;
        }
        case M:
          fS(t, t.stateNode.containerInfo);
          break;
        case le: {
          var o = t.memoizedProps.value, s = t.type._context;
          bC(t, s, o);
          break;
        }
        case J:
          {
            var d = da(a, t.childLanes);
            d && (t.flags |= gt);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case H: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Kl(t, Wf(lu.current)), t.flags |= ot, null;
            var b = t.child, T = b.childLanes;
            if (da(a, T))
              return kb(e, t, a);
            Kl(t, Wf(lu.current));
            var F = Wo(e, t, a);
            return F !== null ? F.sibling : null;
          } else
            Kl(t, Wf(lu.current));
          break;
        }
        case Ue: {
          var j = (e.flags & ot) !== Ge, q = da(a, t.childLanes);
          if (j) {
            if (q)
              return Ab(e, t, a);
            t.flags |= ot;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Kl(t, lu.current), q)
            break;
          return null;
        }
        case Ae:
        case $e:
          return t.lanes = ae, wb(e, t, a);
      }
      return Wo(e, t, a);
    }
    function jb(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Xx(e, t, zE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || am() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cu = !0;
        else {
          var s = iE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ot) === Ge)
            return cu = !1, Zx(e, t, a);
          (e.flags & Ms) !== Ge ? cu = !0 : cu = !1;
        }
      } else if (cu = !1, Br() && T_(t)) {
        var d = t.index, m = w_();
        cC(t, m, d);
      }
      switch (t.lanes = ae, t.tag) {
        case U:
          return Lx(e, t, t.type, a);
        case Ye: {
          var y = t.elementType;
          return Nx(e, t, y, a);
        }
        case L: {
          var b = t.type, T = t.pendingProps, F = t.elementType === b ? T : ou(b, T);
          return XS(e, t, b, F, a);
        }
        case _: {
          var j = t.type, q = t.pendingProps, X = t.elementType === j ? q : ou(j, q);
          return xb(e, t, j, X, a);
        }
        case k:
          return Ox(e, t, a);
        case A:
          return Dx(e, t, a);
        case B:
          return kx(e, t);
        case H:
          return kb(e, t, a);
        case M:
          return Gx(e, t, a);
        case te: {
          var ne = t.type, Me = t.pendingProps, Xe = t.elementType === ne ? Me : ou(ne, Me);
          return bb(e, t, ne, Xe, a);
        }
        case $:
          return wx(e, t, a);
        case I:
          return _x(e, t, a);
        case J:
          return xx(e, t, a);
        case le:
          return qx(e, t, a);
        case oe:
          return Kx(e, t, a);
        case de: {
          var Be = t.type, At = t.pendingProps, Ot = ou(Be, At);
          if (t.type !== t.elementType) {
            var W = Be.propTypes;
            W && au(
              W,
              Ot,
              // Resolved for outer only
              "prop",
              Pt(Be)
            );
          }
          return Ot = ou(Be.type, Ot), Rb(e, t, Be, Ot, a);
        }
        case ge:
          return Tb(e, t, t.type, t.pendingProps, a);
        case tt: {
          var re = t.type, Q = t.pendingProps, ve = t.elementType === re ? Q : ou(re, Q);
          return Mx(e, t, re, ve, a);
        }
        case Ue:
          return Ab(e, t, a);
        case st:
          break;
        case Ae:
          return wb(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zf(e) {
      e.flags |= gt;
    }
    function Pb(e) {
      e.flags |= ia, e.flags |= Pd;
    }
    var Fb, uE, Vb, Hb;
    Fb = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === A || o.tag === B)
          Cw(e, o.stateNode);
        else if (o.tag !== M) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, uE = function(e, t) {
    }, Vb = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, m = dS(), y = Rw(d, a, s, i, o, m);
        t.updateQueue = y, y && Zf(t);
      }
    }, Hb = function(e, t, a, i) {
      a !== i && Zf(t);
    };
    function av(e, t) {
      if (!Br())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = Ge;
      if (t) {
        if ((e.mode & rt) !== et) {
          for (var y = e.selfBaseDuration, b = e.child; b !== null; )
            a = St(a, St(b.lanes, b.childLanes)), i |= b.subtreeFlags & pr, i |= b.flags & pr, y += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = y;
        } else
          for (var T = e.child; T !== null; )
            a = St(a, St(T.lanes, T.childLanes)), i |= T.subtreeFlags & pr, i |= T.flags & pr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & rt) !== et) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = St(a, St(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = St(a, St(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Jx(e, t, a) {
      if (P_() && (t.mode & _t) !== et && (t.flags & ot) === Ge)
        return yC(t), Hf(), t.flags |= An | Ta | ir, !1;
      var i = fm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (U_(t), Yr(t), (t.mode & rt) !== et) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & ot) === Ge && (t.memoizedState = null), t.flags |= gt, Yr(t), (t.mode & rt) !== et) {
            var d = a !== null;
            if (d) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return gC(), !0;
    }
    function Ib(e, t, a) {
      var i = t.pendingProps;
      switch (Mg(t), t.tag) {
        case U:
        case Ye:
        case ge:
        case L:
        case te:
        case $:
        case I:
        case J:
        case oe:
        case de:
          return Yr(t), null;
        case _: {
          var o = t.type;
          return Ku(o) && im(t), Yr(t), null;
        }
        case k: {
          var s = t.stateNode;
          if (Yf(t), Og(t), yS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = fm(t);
            if (d)
              Zf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & An) !== Ge) && (t.flags |= Va, gC());
            }
          }
          return uE(e, t), Yr(t), null;
        }
        case A: {
          pS(t);
          var y = VC(), b = t.type;
          if (e !== null && t.stateNode != null)
            Vb(e, t, b, i, y), e.ref !== t.ref && Pb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var T = dS(), F = fm(t);
            if (F)
              A_(t, y, T) && Zf(t);
            else {
              var j = Ew(b, i, y, T, t);
              Fb(j, t, !1, !1), t.stateNode = j, bw(j, b, i, y) && Zf(t);
            }
            t.ref !== null && Pb(t);
          }
          return Yr(t), null;
        }
        case B: {
          var q = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            Hb(e, t, X, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ne = VC(), Me = dS(), Xe = fm(t);
            Xe ? z_(t) && Zf(t) : t.stateNode = Tw(q, ne, Me, t);
          }
          return Yr(t), null;
        }
        case H: {
          Qf(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var At = Jx(e, t, Be);
            if (!At)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & ot) !== Ge)
            return t.lanes = a, (t.mode & rt) !== et && IS(t), t;
          var Ot = Be !== null, W = e !== null && e.memoizedState !== null;
          if (Ot !== W && Ot) {
            var re = t.child;
            if (re.flags |= Lu, (t.mode & _t) !== et) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ue);
              Q || vS(lu.current, BC) ? eD() : TE();
            }
          }
          var ve = t.updateQueue;
          if (ve !== null && (t.flags |= gt), Yr(t), (t.mode & rt) !== et && Ot) {
            var Le = t.child;
            Le !== null && (t.treeBaseDuration -= Le.treeBaseDuration);
          }
          return null;
        }
        case M:
          return Yf(t), uE(e, t), e === null && y_(t.stateNode.containerInfo), Yr(t), null;
        case le:
          var xe = t.type._context;
          return Hg(xe, t), Yr(t), null;
        case tt: {
          var ut = t.type;
          return Ku(ut) && im(t), Yr(t), null;
        }
        case Ue: {
          Qf(t);
          var vt = t.memoizedState;
          if (vt === null)
            return Yr(t), null;
          var nn = (t.flags & ot) !== Ge, It = vt.rendering;
          if (It === null)
            if (nn)
              av(vt, !1);
            else {
              var er = nD() && (e === null || (e.flags & ot) === Ge);
              if (!er)
                for (var Bt = t.child; Bt !== null; ) {
                  var Gn = Om(Bt);
                  if (Gn !== null) {
                    nn = !0, t.flags |= ot, av(vt, !1);
                    var ma = Gn.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= gt), t.subtreeFlags = Ge, nx(t, a), Kl(t, hS(lu.current, Qp)), t.child;
                  }
                  Bt = Bt.sibling;
                }
              vt.tail !== null && Dn() > sR() && (t.flags |= ot, nn = !0, av(vt, !1), t.lanes = Xd);
            }
          else {
            if (!nn) {
              var Kr = Om(It);
              if (Kr !== null) {
                t.flags |= ot, nn = !0;
                var hi = Kr.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= gt), av(vt, !0), vt.tail === null && vt.tailMode === "hidden" && !It.alternate && !Br())
                  return Yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Dn() * 2 - vt.renderingStartTime > sR() && a !== fa && (t.flags |= ot, nn = !0, av(vt, !1), t.lanes = Xd);
            }
            if (vt.isBackwards)
              It.sibling = t.child, t.child = It;
            else {
              var La = vt.last;
              La !== null ? La.sibling = It : t.child = It, vt.last = It;
            }
          }
          if (vt.tail !== null) {
            var Aa = vt.tail;
            vt.rendering = Aa, vt.tail = Aa.sibling, vt.renderingStartTime = Dn(), Aa.sibling = null;
            var ya = lu.current;
            return nn ? ya = hS(ya, Qp) : ya = Wf(ya), Kl(t, ya), Aa;
          }
          return Yr(t), null;
        }
        case st:
          break;
        case Ae:
        case $e: {
          RE(t);
          var Xo = t.memoizedState, ud = Xo !== null;
          if (e !== null) {
            var Ev = e.memoizedState, ao = Ev !== null;
            ao !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !N && (t.flags |= Lu);
          }
          return !ud || (t.mode & _t) === et ? Yr(t) : da(ro, fa) && (Yr(t), t.subtreeFlags & (yn | gt) && (t.flags |= Lu)), null;
        }
        case Dt:
          return null;
        case Et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function eO(e, t, a) {
      switch (Mg(t), t.tag) {
        case _: {
          var i = t.type;
          Ku(i) && im(t);
          var o = t.flags;
          return o & ir ? (t.flags = o & ~ir | ot, (t.mode & rt) !== et && IS(t), t) : null;
        }
        case k: {
          t.stateNode, Yf(t), Og(t), yS();
          var s = t.flags;
          return (s & ir) !== Ge && (s & ot) === Ge ? (t.flags = s & ~ir | ot, t) : null;
        }
        case A:
          return pS(t), null;
        case H: {
          Qf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var m = t.flags;
          return m & ir ? (t.flags = m & ~ir | ot, (t.mode & rt) !== et && IS(t), t) : null;
        }
        case Ue:
          return Qf(t), null;
        case M:
          return Yf(t), null;
        case le:
          var y = t.type._context;
          return Hg(y, t), null;
        case Ae:
        case $e:
          return RE(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function Bb(e, t, a) {
      switch (Mg(t), t.tag) {
        case _: {
          var i = t.type.childContextTypes;
          i != null && im(t);
          break;
        }
        case k: {
          t.stateNode, Yf(t), Og(t), yS();
          break;
        }
        case A: {
          pS(t);
          break;
        }
        case M:
          Yf(t);
          break;
        case H:
          Qf(t);
          break;
        case Ue:
          Qf(t);
          break;
        case le:
          var o = t.type._context;
          Hg(o, t);
          break;
        case Ae:
        case $e:
          RE(t);
          break;
      }
    }
    var $b = null;
    $b = /* @__PURE__ */ new Set();
    var Xm = !1, Wr = !1, tO = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Jf = null, ed = null;
    function nO(e) {
      go(null, function() {
        throw e;
      }), Ud();
    }
    var rO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & rt)
        try {
          to(), t.componentWillUnmount();
        } finally {
          eo(e);
        }
      else
        t.componentWillUnmount();
    };
    function Yb(e, t) {
      try {
        Jl(yr, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function oE(e, t, a) {
      try {
        rO(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function aO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function Wb(e, t) {
      try {
        Gb(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function td(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && Ct && e.mode & rt)
              try {
                to(), i = a(null);
              } finally {
                eo(e);
              }
            else
              i = a(null);
          } catch (o) {
            Cn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function Zm(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var Qb = !1;
    function iO(e, t) {
      gw(e.containerInfo), Fe = t, uO();
      var a = Qb;
      return Qb = !1, a;
    }
    function uO() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & Sl) !== Ge && t !== null ? (t.return = e, Fe = t) : oO();
      }
    }
    function oO() {
      for (; Fe !== null; ) {
        var e = Fe;
        qt(e);
        try {
          lO(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function lO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Va) !== Ge) {
        switch (qt(e), e.tag) {
          case L:
          case te:
          case ge:
            break;
          case _: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ou(e.type, i), o);
              {
                var m = $b;
                d === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case k: {
            {
              var y = e.stateNode;
              Bw(y.containerInfo);
            }
            break;
          }
          case A:
          case B:
          case M:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ln();
      }
    }
    function fu(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var m = d.destroy;
            d.destroy = void 0, m !== void 0 && ((e & $r) !== Za ? Bc(t) : (e & yr) !== Za && $c(t), (e & Xu) !== Za && yv(!0), Zm(t, a, m), (e & Xu) !== Za && yv(!1), (e & $r) !== Za ? ch() : (e & yr) !== Za && El());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Jl(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & $r) !== Za ? sh(t) : (e & yr) !== Za && fh(t);
            var d = s.create;
            (e & Xu) !== Za && yv(!0), s.destroy = d(), (e & Xu) !== Za && yv(!1), (e & $r) !== Za ? Gd() : (e & yr) !== Za && dh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var y = void 0;
                (s.tag & yr) !== Ge ? y = "useLayoutEffect" : (s.tag & Xu) !== Ge ? y = "useInsertionEffect" : y = "useEffect";
                var b = void 0;
                m === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? b = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + m, g("%s must not return anything besides a function, which is used for clean-up.%s", y, b);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function sO(e, t) {
      if ((t.flags & gt) !== Ge)
        switch (t.tag) {
          case J: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, d = hb(), m = t.alternate === null ? "mount" : "update";
            vb() && (m = "nested-update"), typeof s == "function" && s(o, m, a, d);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case k:
                    var b = y.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                  case J:
                    var T = y.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function cO(e, t, a, i) {
      if ((a.flags & xr) !== Ge)
        switch (a.tag) {
          case L:
          case te:
          case ge: {
            if (!Wr)
              if (a.mode & rt)
                try {
                  to(), Jl(yr | mr, a);
                } finally {
                  eo(a);
                }
              else
                Jl(yr | mr, a);
            break;
          }
          case _: {
            var o = a.stateNode;
            if (a.flags & gt && !Wr)
              if (t === null)
                if (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & rt)
                  try {
                    to(), o.componentDidMount();
                  } finally {
                    eo(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ou(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & rt)
                  try {
                    to(), o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    eo(a);
                  }
                else
                  o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), OC(a, m, o));
            break;
          }
          case k: {
            var y = a.updateQueue;
            if (y !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case A:
                    b = a.child.stateNode;
                    break;
                  case _:
                    b = a.child.stateNode;
                    break;
                }
              OC(a, y, b);
            }
            break;
          }
          case A: {
            var T = a.stateNode;
            if (t === null && a.flags & gt) {
              var F = a.type, j = a.memoizedProps;
              Dw(T, F, j);
            }
            break;
          }
          case B:
            break;
          case M:
            break;
          case J: {
            {
              var q = a.memoizedProps, X = q.onCommit, ne = q.onRender, Me = a.stateNode.effectDuration, Xe = hb(), Be = t === null ? "mount" : "update";
              vb() && (Be = "nested-update"), typeof ne == "function" && ne(a.memoizedProps.id, Be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Xe);
              {
                typeof X == "function" && X(a.memoizedProps.id, Be, Me, Xe), oD(a);
                var At = a.return;
                e:
                  for (; At !== null; ) {
                    switch (At.tag) {
                      case k:
                        var Ot = At.stateNode;
                        Ot.effectDuration += Me;
                        break e;
                      case J:
                        var W = At.stateNode;
                        W.effectDuration += Me;
                        break e;
                    }
                    At = At.return;
                  }
              }
            }
            break;
          }
          case H: {
            gO(e, a);
            break;
          }
          case Ue:
          case tt:
          case st:
          case Ae:
          case $e:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & ia && Gb(a);
    }
    function fO(e) {
      switch (e.tag) {
        case L:
        case te:
        case ge: {
          if (e.mode & rt)
            try {
              to(), Yb(e, e.return);
            } finally {
              eo(e);
            }
          else
            Yb(e, e.return);
          break;
        }
        case _: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && aO(e, e.return, t), Wb(e, e.return);
          break;
        }
        case A: {
          Wb(e, e.return);
          break;
        }
      }
    }
    function dO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === A) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Fw(o) : Hw(i.stateNode, i.memoizedProps);
            } catch (d) {
              Cn(e, e.return, d);
            }
          }
        } else if (i.tag === B) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Vw(s) : Iw(s, i.memoizedProps);
            } catch (d) {
              Cn(e, e.return, d);
            }
        } else if (!((i.tag === Ae || i.tag === $e) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Gb(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case A:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & rt)
            try {
              to(), o = t(i);
            } finally {
              eo(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = i;
      }
    }
    function pO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function qb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, qb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === A) {
          var a = e.stateNode;
          a !== null && E_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function vO(e) {
      for (var t = e.return; t !== null; ) {
        if (Kb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kb(e) {
      return e.tag === A || e.tag === k || e.tag === M;
    }
    function Xb(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Kb(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== A && t.tag !== B && t.tag !== Ze; ) {
            if (t.flags & yn || t.child === null || t.tag === M)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & yn))
            return t.stateNode;
        }
    }
    function hO(e) {
      var t = vO(e);
      switch (t.tag) {
        case A: {
          var a = t.stateNode;
          t.flags & Kt && (Z0(a), t.flags &= ~Kt);
          var i = Xb(e);
          sE(e, i, a);
          break;
        }
        case k:
        case M: {
          var o = t.stateNode.containerInfo, s = Xb(e);
          lE(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function lE(e, t, a) {
      var i = e.tag, o = i === A || i === B;
      if (o) {
        var s = e.stateNode;
        t ? zw(a, s, t) : Lw(a, s);
      } else if (i !== M) {
        var d = e.child;
        if (d !== null) {
          lE(d, t, a);
          for (var m = d.sibling; m !== null; )
            lE(m, t, a), m = m.sibling;
        }
      }
    }
    function sE(e, t, a) {
      var i = e.tag, o = i === A || i === B;
      if (o) {
        var s = e.stateNode;
        t ? Aw(a, s, t) : Mw(a, s);
      } else if (i !== M) {
        var d = e.child;
        if (d !== null) {
          sE(d, t, a);
          for (var m = d.sibling; m !== null; )
            sE(m, t, a), m = m.sibling;
        }
      }
    }
    var Qr = null, du = !1;
    function mO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case A: {
                Qr = i.stateNode, du = !1;
                break e;
              }
              case k: {
                Qr = i.stateNode.containerInfo, du = !0;
                break e;
              }
              case M: {
                Qr = i.stateNode.containerInfo, du = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Zb(e, t, a), Qr = null, du = !1;
      }
      pO(a);
    }
    function es(e, t, a) {
      for (var i = a.child; i !== null; )
        Zb(e, t, i), i = i.sibling;
    }
    function Zb(e, t, a) {
      switch (Wd(a), a.tag) {
        case A:
          Wr || td(a, t);
        case B: {
          {
            var i = Qr, o = du;
            Qr = null, es(e, t, a), Qr = i, du = o, Qr !== null && (du ? jw(Qr, a.stateNode) : Uw(Qr, a.stateNode));
          }
          return;
        }
        case Ze: {
          Qr !== null && (du ? Pw(Qr, a.stateNode) : Eg(Qr, a.stateNode));
          return;
        }
        case M: {
          {
            var s = Qr, d = du;
            Qr = a.stateNode.containerInfo, du = !0, es(e, t, a), Qr = s, du = d;
          }
          return;
        }
        case L:
        case te:
        case de:
        case ge: {
          if (!Wr) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var b = y.next, T = b;
                do {
                  var F = T, j = F.destroy, q = F.tag;
                  j !== void 0 && ((q & Xu) !== Za ? Zm(a, t, j) : (q & yr) !== Za && ($c(a), a.mode & rt ? (to(), Zm(a, t, j), eo(a)) : Zm(a, t, j), El())), T = T.next;
                } while (T !== b);
              }
            }
          }
          es(e, t, a);
          return;
        }
        case _: {
          if (!Wr) {
            td(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && oE(a, t, X);
          }
          es(e, t, a);
          return;
        }
        case st: {
          es(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & _t
          ) {
            var ne = Wr;
            Wr = ne || a.memoizedState !== null, es(e, t, a), Wr = ne;
          } else
            es(e, t, a);
          break;
        }
        default: {
          es(e, t, a);
          return;
        }
      }
    }
    function yO(e) {
      e.memoizedState;
    }
    function gO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && r_(s);
          }
        }
      }
    }
    function Jb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new tO()), t.forEach(function(i) {
          var o = vD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), vr)
              if (Jf !== null && ed !== null)
                mv(ed, Jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function SO(e, t, a) {
      Jf = a, ed = e, qt(t), eR(t, e), qt(t), Jf = null, ed = null;
    }
    function pu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            mO(e, t, s);
          } catch (y) {
            Cn(s, t, y);
          }
        }
      var d = Cc();
      if (t.subtreeFlags & la)
        for (var m = t.child; m !== null; )
          qt(m), eR(m, e), m = m.sibling;
      qt(d);
    }
    function eR(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case L:
        case te:
        case de:
        case ge: {
          if (pu(t, e), no(e), o & gt) {
            try {
              fu(Xu | mr, e, e.return), Jl(Xu | mr, e);
            } catch (ut) {
              Cn(e, e.return, ut);
            }
            if (e.mode & rt) {
              try {
                to(), fu(yr | mr, e, e.return);
              } catch (ut) {
                Cn(e, e.return, ut);
              }
              eo(e);
            } else
              try {
                fu(yr | mr, e, e.return);
              } catch (ut) {
                Cn(e, e.return, ut);
              }
          }
          return;
        }
        case _: {
          pu(t, e), no(e), o & ia && i !== null && td(i, i.return);
          return;
        }
        case A: {
          pu(t, e), no(e), o & ia && i !== null && td(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                Z0(s);
              } catch (ut) {
                Cn(e, e.return, ut);
              }
            }
            if (o & gt) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    kw(d, T, b, y, m, e);
                  } catch (ut) {
                    Cn(e, e.return, ut);
                  }
              }
            }
          }
          return;
        }
        case B: {
          if (pu(t, e), no(e), o & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, j = e.memoizedProps, q = i !== null ? i.memoizedProps : j;
            try {
              Nw(F, q, j);
            } catch (ut) {
              Cn(e, e.return, ut);
            }
          }
          return;
        }
        case k: {
          if (pu(t, e), no(e), o & gt && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                n_(t.containerInfo);
              } catch (ut) {
                Cn(e, e.return, ut);
              }
          }
          return;
        }
        case M: {
          pu(t, e), no(e);
          return;
        }
        case H: {
          pu(t, e), no(e);
          var ne = e.child;
          if (ne.flags & Lu) {
            var Me = ne.stateNode, Xe = ne.memoizedState, Be = Xe !== null;
            if (Me.isHidden = Be, Be) {
              var At = ne.alternate !== null && ne.alternate.memoizedState !== null;
              At || JO();
            }
          }
          if (o & gt) {
            try {
              yO(e);
            } catch (ut) {
              Cn(e, e.return, ut);
            }
            Jb(e);
          }
          return;
        }
        case Ae: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & _t
          ) {
            var W = Wr;
            Wr = W || Ot, pu(t, e), Wr = W;
          } else
            pu(t, e);
          if (no(e), o & Lu) {
            var re = e.stateNode, Q = e.memoizedState, ve = Q !== null, Le = e;
            if (re.isHidden = ve, ve && !Ot && (Le.mode & _t) !== et) {
              Fe = Le;
              for (var xe = Le.child; xe !== null; )
                Fe = xe, CO(xe), xe = xe.sibling;
            }
            dO(Le, ve);
          }
          return;
        }
        case Ue: {
          pu(t, e), no(e), o & gt && Jb(e);
          return;
        }
        case st:
          return;
        default: {
          pu(t, e), no(e);
          return;
        }
      }
    }
    function no(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          hO(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & Ha && (e.flags &= ~Ha);
    }
    function EO(e, t, a) {
      Jf = a, ed = t, Fe = e, tR(e, t, a), Jf = null, ed = null;
    }
    function tR(e, t, a) {
      for (var i = (e.mode & _t) !== et; Fe !== null; ) {
        var o = Fe, s = o.child;
        if (o.tag === Ae && i) {
          var d = o.memoizedState !== null, m = d || Xm;
          if (m) {
            cE(e, t, a);
            continue;
          } else {
            var y = o.alternate, b = y !== null && y.memoizedState !== null, T = b || Wr, F = Xm, j = Wr;
            Xm = m, Wr = T, Wr && !j && (Fe = o, bO(o));
            for (var q = s; q !== null; )
              Fe = q, tR(
                q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), q = q.sibling;
            Fe = o, Xm = F, Wr = j, cE(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & xr) !== Ge && s !== null ? (s.return = o, Fe = s) : cE(e, t, a);
      }
    }
    function cE(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & xr) !== Ge) {
          var o = i.alternate;
          qt(i);
          try {
            cO(t, o, i, a);
          } catch (d) {
            Cn(i, i.return, d);
          }
          Ln();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Fe = s;
          return;
        }
        Fe = i.return;
      }
    }
    function CO(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case L:
          case te:
          case de:
          case ge: {
            if (t.mode & rt)
              try {
                to(), fu(yr, t, t.return);
              } finally {
                eo(t);
              }
            else
              fu(yr, t, t.return);
            break;
          }
          case _: {
            td(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && oE(t, t.return, i);
            break;
          }
          case A: {
            td(t, t.return);
            break;
          }
          case Ae: {
            var o = t.memoizedState !== null;
            if (o) {
              nR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : nR(e);
      }
    }
    function nR(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function bO(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            rR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : rR(e);
      }
    }
    function rR(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        qt(t);
        try {
          fO(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (Ln(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function RO(e, t, a, i) {
      Fe = t, TO(t, e, a, i);
    }
    function TO(e, t, a, i) {
      for (; Fe !== null; ) {
        var o = Fe, s = o.child;
        (o.subtreeFlags & Ia) !== Ge && s !== null ? (s.return = o, Fe = s) : wO(e, t, a, i);
      }
    }
    function wO(e, t, a, i) {
      for (; Fe !== null; ) {
        var o = Fe;
        if ((o.flags & Tn) !== Ge) {
          qt(o);
          try {
            _O(t, o, a, i);
          } catch (d) {
            Cn(o, o.return, d);
          }
          Ln();
        }
        if (o === e) {
          Fe = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Fe = s;
          return;
        }
        Fe = o.return;
      }
    }
    function _O(e, t, a, i) {
      switch (t.tag) {
        case L:
        case te:
        case ge: {
          if (t.mode & rt) {
            HS();
            try {
              Jl($r | mr, t);
            } finally {
              VS(t);
            }
          } else
            Jl($r | mr, t);
          break;
        }
      }
    }
    function xO(e) {
      Fe = e, OO();
    }
    function OO() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & Yt) !== Ge) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Fe = o, NO(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var m = d.sibling;
                    d.sibling = null, d = m;
                  } while (d !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & Ia) !== Ge && t !== null ? (t.return = e, Fe = t) : DO();
      }
    }
    function DO() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & Tn) !== Ge && (qt(e), kO(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function kO(e) {
      switch (e.tag) {
        case L:
        case te:
        case ge: {
          e.mode & rt ? (HS(), fu($r | mr, e, e.return), VS(e)) : fu($r | mr, e, e.return);
          break;
        }
      }
    }
    function NO(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        qt(a), LO(a, t), Ln();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : MO(e);
      }
    }
    function MO(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (qb(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function LO(e, t) {
      switch (e.tag) {
        case L:
        case te:
        case ge: {
          e.mode & rt ? (HS(), fu($r, e, t), VS(e)) : fu($r, e, t);
          break;
        }
      }
    }
    function AO(e) {
      switch (e.tag) {
        case L:
        case te:
        case ge: {
          try {
            Jl(yr | mr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case _: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function zO(e) {
      switch (e.tag) {
        case L:
        case te:
        case ge: {
          try {
            Jl($r | mr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function UO(e) {
      switch (e.tag) {
        case L:
        case te:
        case ge: {
          try {
            fu(yr | mr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case _: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && oE(e, e.return, t);
          break;
        }
      }
    }
    function jO(e) {
      switch (e.tag) {
        case L:
        case te:
        case ge:
          try {
            fu($r | mr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var iv = Symbol.for;
      iv("selector.component"), iv("selector.has_pseudo_class"), iv("selector.role"), iv("selector.test_id"), iv("selector.text");
    }
    var PO = [];
    function FO() {
      PO.forEach(function(e) {
        return e();
      });
    }
    var VO = v.ReactCurrentActQueue;
    function HO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function aR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && VO.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var IO = Math.ceil, fE = v.ReactCurrentDispatcher, dE = v.ReactCurrentOwner, Gr = v.ReactCurrentBatchConfig, vu = v.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), iR = (
      /*               */
      1
    ), qr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Qo = 0, uv = 1, dc = 2, Jm = 3, ov = 4, uR = 5, pE = 6, Lt = Er, Na = null, In = null, Cr = ae, ro = ae, vE = $l(ae), br = Qo, lv = null, ey = ae, sv = ae, ty = ae, cv = null, Ja = null, hE = 0, oR = 500, lR = 1 / 0, BO = 500, Go = null;
    function fv() {
      lR = Dn() + BO;
    }
    function sR() {
      return lR;
    }
    var ny = !1, mE = null, nd = null, pc = !1, ts = null, dv = ae, yE = [], gE = null, $O = 50, pv = 0, SE = null, EE = !1, ry = !1, YO = 50, rd = 0, ay = null, vv = fn, iy = ae, cR = !1;
    function uy() {
      return Na;
    }
    function Ma() {
      return (Lt & (qr | ji)) !== Er ? Dn() : (vv !== fn || (vv = Dn()), vv);
    }
    function ns(e) {
      var t = e.mode;
      if ((t & _t) === et)
        return it;
      if ((Lt & qr) !== Er && Cr !== ae)
        return Kn(Cr);
      var a = H_() !== V_;
      if (a) {
        if (Gr.transition !== null) {
          var i = Gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return iy === Mt && (iy = ep()), iy;
      }
      var o = Wa();
      if (o !== Mt)
        return o;
      var s = ww();
      return s;
    }
    function WO(e) {
      var t = e.mode;
      return (t & _t) === et ? it : Hy();
    }
    function Rr(e, t, a, i) {
      mD(), cR && g("useInsertionEffect must not schedule updates."), EE && (ry = !0), ko(e, a, i), (Lt & qr) !== ae && e === Na ? SD(t) : (vr && ip(e, t, a), ED(t), e === Na && ((Lt & qr) === Er && (sv = St(sv, a)), br === ov && rs(e, Cr)), ei(e, i), a === it && Lt === Er && (t.mode & _t) === et && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vu.isBatchingLegacy && (fv(), sC()));
    }
    function QO(e, t, a) {
      var i = e.current;
      i.lanes = t, ko(e, t, a), ei(e, a);
    }
    function GO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Lt & qr) !== Er
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      Py(e, t);
      var i = Ps(e, e === Na ? Cr : ae);
      if (i === ae) {
        a !== null && _R(a), e.callbackNode = null, e.callbackPriority = Mt;
        return;
      }
      var o = Wn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vu.current !== null && a !== xE)) {
        a == null && s !== it && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && _R(a);
      var d;
      if (o === it)
        e.tag === Yl ? (vu.isBatchingLegacy !== null && (vu.didScheduleLegacyUpdate = !0), R_(pR.bind(null, e))) : lC(pR.bind(null, e)), vu.current !== null ? vu.current.push(Wl) : xw(function() {
          (Lt & (qr | ji)) === Er && Wl();
        }), d = null;
      else {
        var m;
        switch (Bs(i)) {
          case Or:
            m = Vc;
            break;
          case hr:
            m = xa;
            break;
          case Ji:
            m = xi;
            break;
          case Hs:
            m = zu;
            break;
          default:
            m = xi;
            break;
        }
        d = OE(m, fR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = d;
    }
    function fR(e, t) {
      if (mx(), vv = fn, iy = ae, (Lt & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ko();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ps(e, e === Na ? Cr : ae);
      if (o === ae)
        return null;
      var s = !Vs(e, o) && !gh(e, o) && !t, d = s ? aD(e, o) : ly(e, o);
      if (d !== Qo) {
        if (d === dc) {
          var m = Zd(e);
          m !== ae && (o = m, d = CE(e, m));
        }
        if (d === uv) {
          var y = lv;
          throw vc(e, ae), rs(e, o), ei(e, Dn()), y;
        }
        if (d === pE)
          rs(e, o);
        else {
          var b = !Vs(e, o), T = e.current.alternate;
          if (b && !KO(T)) {
            if (d = ly(e, o), d === dc) {
              var F = Zd(e);
              F !== ae && (o = F, d = CE(e, F));
            }
            if (d === uv) {
              var j = lv;
              throw vc(e, ae), rs(e, o), ei(e, Dn()), j;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, qO(e, d, o);
        }
      }
      return ei(e, Dn()), e.callbackNode === a ? fR.bind(null, e) : null;
    }
    function CE(e, t) {
      var a = cv;
      if (Zn(e)) {
        var i = vc(e, t);
        i.flags |= An, m_(e.containerInfo);
      }
      var o = ly(e, t);
      if (o !== dc) {
        var s = Ja;
        Ja = a, s !== null && dR(s);
      }
      return o;
    }
    function dR(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function qO(e, t, a) {
      switch (t) {
        case Qo:
        case uv:
          throw new Error("Root did not complete. This is a bug in React.");
        case dc: {
          hc(e, Ja, Go);
          break;
        }
        case Jm: {
          if (rs(e, a), ff(a) && // do not delay if we're inside an act() scope
          !xR()) {
            var i = hE + oR - Dn();
            if (i > 10) {
              var o = Ps(e, ae);
              if (o !== ae)
                break;
              var s = e.suspendedLanes;
              if (!Do(s, a)) {
                Ma(), rp(e, s);
                break;
              }
              e.timeoutHandle = gg(hc.bind(null, e, Ja, Go), i);
              break;
            }
          }
          hc(e, Ja, Go);
          break;
        }
        case ov: {
          if (rs(e, a), yh(a))
            break;
          if (!xR()) {
            var d = mh(e, a), m = d, y = Dn() - m, b = hD(y) - y;
            if (b > 10) {
              e.timeoutHandle = gg(hc.bind(null, e, Ja, Go), b);
              break;
            }
          }
          hc(e, Ja, Go);
          break;
        }
        case uR: {
          hc(e, Ja, Go);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function KO(e) {
      for (var t = e; ; ) {
        if (t.flags & Ns) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], d = s.getSnapshot, m = s.value;
                try {
                  if (!Pe(d(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Ns && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function rs(e, t) {
      t = xl(t, ty), t = xl(t, sv), np(e, t);
    }
    function pR(e) {
      if (yx(), (Lt & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      Ko();
      var t = Ps(e, ae);
      if (!da(t, it))
        return ei(e, Dn()), null;
      var a = ly(e, t);
      if (e.tag !== Yl && a === dc) {
        var i = Zd(e);
        i !== ae && (t = i, a = CE(e, i));
      }
      if (a === uv) {
        var o = lv;
        throw vc(e, ae), rs(e, t), ei(e, Dn()), o;
      }
      if (a === pE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hc(e, Ja, Go), ei(e, Dn()), null;
    }
    function XO(e, t) {
      t !== ae && (Ol(e, St(t, it)), ei(e, Dn()), (Lt & (qr | ji)) === Er && (fv(), Wl()));
    }
    function bE(e, t) {
      var a = Lt;
      Lt |= iR;
      try {
        return e(t);
      } finally {
        Lt = a, Lt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vu.isBatchingLegacy && (fv(), sC());
      }
    }
    function ZO(e, t, a, i, o) {
      var s = Wa(), d = Gr.transition;
      try {
        return Gr.transition = null, Xn(Or), e(t, a, i, o);
      } finally {
        Xn(s), Gr.transition = d, Lt === Er && fv();
      }
    }
    function qo(e) {
      ts !== null && ts.tag === Yl && (Lt & (qr | ji)) === Er && Ko();
      var t = Lt;
      Lt |= iR;
      var a = Gr.transition, i = Wa();
      try {
        return Gr.transition = null, Xn(Or), e ? e() : void 0;
      } finally {
        Xn(i), Gr.transition = a, Lt = t, (Lt & (qr | ji)) === Er && Wl();
      }
    }
    function vR() {
      return (Lt & (qr | ji)) !== Er;
    }
    function oy(e, t) {
      va(vE, ro, e), ro = St(ro, t);
    }
    function RE(e) {
      ro = vE.current, pa(vE, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, _w(a)), In !== null)
        for (var i = In.return; i !== null; ) {
          var o = i.alternate;
          Bb(o, i), i = i.return;
        }
      Na = e;
      var s = mc(e.current, null);
      return In = s, Cr = ro = t, br = Qo, lv = null, ey = ae, sv = ae, ty = ae, cv = null, Ja = null, Y_(), uu.discardPendingWarnings(), s;
    }
    function hR(e, t) {
      do {
        var a = In;
        try {
          if (hm(), YC(), Ln(), dE.current = null, a === null || a.return === null) {
            br = uv, lv = t, In = null;
            return;
          }
          if (dt && a.mode & rt && Qm(a, !0), Rt)
            if (Eo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ph(a, i, Cr);
            } else
              Yc(a, t, Cr);
          bx(e, a.return, a, t, Cr), SR(a);
        } catch (o) {
          t = o, In === a && a !== null ? (a = a.return, In = a) : a = In;
          continue;
        }
        return;
      } while (!0);
    }
    function mR() {
      var e = fE.current;
      return fE.current = Im, e === null ? Im : e;
    }
    function yR(e) {
      fE.current = e;
    }
    function JO() {
      hE = Dn();
    }
    function hv(e) {
      ey = St(e, ey);
    }
    function eD() {
      br === Qo && (br = Jm);
    }
    function TE() {
      (br === Qo || br === Jm || br === dc) && (br = ov), Na !== null && (Fs(ey) || Fs(sv)) && rs(Na, Cr);
    }
    function tD(e) {
      br !== ov && (br = dc), cv === null ? cv = [e] : cv.push(e);
    }
    function nD() {
      return br === Qo;
    }
    function ly(e, t) {
      var a = Lt;
      Lt |= qr;
      var i = mR();
      if (Na !== e || Cr !== t) {
        if (vr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (mv(e, Cr), o.clear()), vf(e, t);
        }
        Go = up(), vc(e, t);
      }
      fi(t);
      do
        try {
          rD();
          break;
        } catch (s) {
          hR(e, s);
        }
      while (!0);
      if (hm(), Lt = a, yR(i), In !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bl(), Na = null, Cr = ae, br;
    }
    function rD() {
      for (; In !== null; )
        gR(In);
    }
    function aD(e, t) {
      var a = Lt;
      Lt |= qr;
      var i = mR();
      if (Na !== e || Cr !== t) {
        if (vr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (mv(e, Cr), o.clear()), vf(e, t);
        }
        Go = up(), fv(), vc(e, t);
      }
      fi(t);
      do
        try {
          iD();
          break;
        } catch (s) {
          hR(e, s);
        }
      while (!0);
      return hm(), yR(i), Lt = a, In !== null ? (As(), Qo) : (bl(), Na = null, Cr = ae, br);
    }
    function iD() {
      for (; In !== null && !Fc(); )
        gR(In);
    }
    function gR(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & rt) !== et ? (FS(e), a = wE(t, e, ro), Qm(e, !0)) : a = wE(t, e, ro), Ln(), e.memoizedProps = e.pendingProps, a === null ? SR(e) : In = a, dE.current = null;
    }
    function SR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ta) === Ge) {
          qt(t);
          var o = void 0;
          if ((t.mode & rt) === et ? o = Ib(a, t, ro) : (FS(t), o = Ib(a, t, ro), Qm(t, !1)), Ln(), o !== null) {
            In = o;
            return;
          }
        } else {
          var s = eO(a, t);
          if (s !== null) {
            s.flags &= ah, In = s;
            return;
          }
          if ((t.mode & rt) !== et) {
            Qm(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Ta, i.subtreeFlags = Ge, i.deletions = null;
          else {
            br = pE, In = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          In = y;
          return;
        }
        t = i, In = t;
      } while (t !== null);
      br === Qo && (br = uR);
    }
    function hc(e, t, a) {
      var i = Wa(), o = Gr.transition;
      try {
        Gr.transition = null, Xn(Or), uD(e, t, a, i);
      } finally {
        Gr.transition = o, Xn(i);
      }
      return null;
    }
    function uD(e, t, a, i) {
      do
        Ko();
      while (ts !== null);
      if (yD(), (Lt & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Ic(s), o === null)
        return Qd(), null;
      if (s === ae && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Mt;
      var d = St(o.lanes, o.childLanes);
      ap(e, d), e === Na && (Na = null, In = null, Cr = ae), ((o.subtreeFlags & Ia) !== Ge || (o.flags & Ia) !== Ge) && (pc || (pc = !0, gE = a, OE(xi, function() {
        return Ko(), null;
      })));
      var m = (o.subtreeFlags & (Sl | la | xr | Ia)) !== Ge, y = (o.flags & (Sl | la | xr | Ia)) !== Ge;
      if (m || y) {
        var b = Gr.transition;
        Gr.transition = null;
        var T = Wa();
        Xn(Or);
        var F = Lt;
        Lt |= ji, dE.current = null, iO(e, o), mb(), SO(e, o, s), Sw(e.containerInfo), e.current = o, vh(s), EO(o, e, s), Cl(), oh(), Lt = F, Xn(T), Gr.transition = b;
      } else
        e.current = o, mb();
      var j = pc;
      if (pc ? (pc = !1, ts = e, dv = s) : (rd = 0, ay = null), d = e.pendingLanes, d === ae && (nd = null), j || RR(e.current, !1), Ki(o.stateNode, i), vr && e.memoizedUpdaters.clear(), FO(), ei(e, Dn()), t !== null)
        for (var q = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ne = t[X], Me = ne.stack, Xe = ne.digest;
          q(ne.value, {
            componentStack: Me,
            digest: Xe
          });
        }
      if (ny) {
        ny = !1;
        var Be = mE;
        throw mE = null, Be;
      }
      return da(dv, it) && e.tag !== Yl && Ko(), d = e.pendingLanes, da(d, it) ? (hx(), e === SE ? pv++ : (pv = 0, SE = e)) : pv = 0, Wl(), Qd(), null;
    }
    function Ko() {
      if (ts !== null) {
        var e = Bs(dv), t = By(Ji, e), a = Gr.transition, i = Wa();
        try {
          return Gr.transition = null, Xn(t), lD();
        } finally {
          Xn(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function oD(e) {
      yE.push(e), pc || (pc = !0, OE(xi, function() {
        return Ko(), null;
      }));
    }
    function lD() {
      if (ts === null)
        return !1;
      var e = gE;
      gE = null;
      var t = ts, a = dv;
      if (ts = null, dv = ae, (Lt & (qr | ji)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      EE = !0, ry = !1, hh(a);
      var i = Lt;
      Lt |= ji, xO(t.current), RO(t, t.current, a, e);
      {
        var o = yE;
        yE = [];
        for (var s = 0; s < o.length; s++) {
          var d = o[s];
          sO(t, d);
        }
      }
      Ls(), RR(t.current, !0), Lt = i, Wl(), ry ? t === ay ? rd++ : (rd = 0, ay = t) : rd = 0, EE = !1, ry = !1, ju(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ER(e) {
      return nd !== null && nd.has(e);
    }
    function sD(e) {
      nd === null ? nd = /* @__PURE__ */ new Set([e]) : nd.add(e);
    }
    function cD(e) {
      ny || (ny = !0, mE = e);
    }
    var fD = cD;
    function CR(e, t, a) {
      var i = cc(a, t), o = gb(e, i, it), s = Gl(e, o, it), d = Ma();
      s !== null && (ko(s, it, d), ei(s, d));
    }
    function Cn(e, t, a) {
      if (nO(a), yv(!1), e.tag === k) {
        CR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === k) {
          CR(i, e, a);
          return;
        } else if (i.tag === _) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ER(s)) {
            var d = cc(a, e), m = YS(i, d, it), y = Gl(i, m, it), b = Ma();
            y !== null && (ko(y, it, b), ei(y, b));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function dD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Ma();
      rp(e, a), CD(e), Na === e && Do(Cr, a) && (br === ov || br === Jm && ff(Cr) && Dn() - hE < oR ? vc(e, ae) : ty = St(ty, a)), ei(e, o);
    }
    function bR(e, t) {
      t === Mt && (t = WO(e));
      var a = Ma(), i = Xa(e, t);
      i !== null && (ko(i, t, a), ei(i, a));
    }
    function pD(e) {
      var t = e.memoizedState, a = Mt;
      t !== null && (a = t.retryLane), bR(e, a);
    }
    function vD(e, t) {
      var a = Mt, i;
      switch (e.tag) {
        case H:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ue:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), bR(e, a);
    }
    function hD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : IO(e / 1960) * 1960;
    }
    function mD() {
      if (pv > $O)
        throw pv = 0, SE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rd > YO && (rd = 0, ay = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function yD() {
      uu.flushLegacyContextWarning(), uu.flushPendingUnsafeLifecycleWarnings();
    }
    function RR(e, t) {
      qt(e), sy(e, oa, UO), t && sy(e, So, jO), sy(e, oa, AO), t && sy(e, So, zO), Ln();
    }
    function sy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ge ? i = i.child : ((i.flags & t) !== Ge && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var cy = null;
    function TR(e) {
      {
        if ((Lt & qr) !== Er || !(e.mode & _t))
          return;
        var t = e.tag;
        if (t !== U && t !== k && t !== _ && t !== L && t !== te && t !== de && t !== ge)
          return;
        var a = ct(e) || "ReactComponent";
        if (cy !== null) {
          if (cy.has(a))
            return;
          cy.add(a);
        } else
          cy = /* @__PURE__ */ new Set([a]);
        var i = On;
        try {
          qt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qt(e) : Ln();
        }
      }
    }
    var wE;
    {
      var gD = null;
      wE = function(e, t, a) {
        var i = MR(gD, t);
        try {
          return jb(e, t, a);
        } catch (s) {
          if (N_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), YC(), Bb(e, t), MR(t, i), t.mode & rt && FS(t), go(null, jb, null, e, t, a), Uy()) {
            var o = Ud();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var wR = !1, _E;
    _E = /* @__PURE__ */ new Set();
    function SD(e) {
      if (na && !dx())
        switch (e.tag) {
          case L:
          case te:
          case ge: {
            var t = In && ct(In) || "Unknown", a = t;
            if (!_E.has(a)) {
              _E.add(a);
              var i = ct(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case _: {
            wR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), wR = !0);
            break;
          }
        }
    }
    function mv(e, t) {
      if (vr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ip(e, i, t);
        });
      }
    }
    var xE = {};
    function OE(e, t) {
      {
        var a = vu.current;
        return a !== null ? (a.push(t), xE) : Pc(e, t);
      }
    }
    function _R(e) {
      if (e !== xE)
        return uh(e);
    }
    function xR() {
      return vu.current !== null;
    }
    function ED(e) {
      {
        if (e.mode & _t) {
          if (!aR())
            return;
        } else if (!HO() || Lt !== Er || e.tag !== L && e.tag !== te && e.tag !== ge)
          return;
        if (vu.current === null) {
          var t = On;
          try {
            qt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? qt(e) : Ln();
          }
        }
      }
    }
    function CD(e) {
      e.tag !== Yl && aR() && vu.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function yv(e) {
      cR = e;
    }
    var Pi = null, ad = null, bD = function(e) {
      Pi = e;
    };
    function id(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function DE(e) {
      return id(e);
    }
    function kE(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = id(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ne,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function OR(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case _: {
            typeof i == "function" && (o = !0);
            break;
          }
          case L: {
            (typeof i == "function" || s === Ke) && (o = !0);
            break;
          }
          case te: {
            (s === Ne || s === Ke) && (o = !0);
            break;
          }
          case de:
          case ge: {
            (s === yt || s === Ke) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var d = Pi(a);
          if (d !== void 0 && d === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function DR(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        ad === null && (ad = /* @__PURE__ */ new WeakSet()), ad.add(e);
      }
    }
    var RD = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ko(), qo(function() {
          NE(e.current, i, a);
        });
      }
    }, TD = function(e, t) {
      {
        if (e.context !== pi)
          return;
        Ko(), qo(function() {
          gv(t, e, null, null);
        });
      }
    };
    function NE(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, d = e.tag, m = e.type, y = null;
        switch (d) {
          case L:
          case ge:
          case _:
            y = m;
            break;
          case te:
            y = m.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (y !== null) {
          var F = Pi(y);
          F !== void 0 && (a.has(F) ? T = !0 : t.has(F) && (d === _ ? T = !0 : b = !0));
        }
        if (ad !== null && (ad.has(e) || i !== null && ad.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var j = Xa(e, it);
          j !== null && Rr(j, e, it, fn);
        }
        o !== null && !T && NE(o, t, a), s !== null && NE(s, t, a);
      }
    }
    var wD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return ME(e.current, i, a), a;
      }
    };
    function ME(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, d = e.type, m = null;
        switch (s) {
          case L:
          case ge:
          case _:
            m = d;
            break;
          case te:
            m = d.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? _D(e, a) : i !== null && ME(i, t, a), o !== null && ME(o, t, a);
      }
    }
    function _D(e, t) {
      {
        var a = xD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case A:
              t.add(i.stateNode);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
            case k:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function xD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === A)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var LE;
    {
      LE = !1;
      try {
        var kR = Object.preventExtensions({});
      } catch {
        LE = !0;
      }
    }
    function OD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ge, this.subtreeFlags = Ge, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !LE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new OD(e, t, a, i);
    };
    function AE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function DD(e) {
      return typeof e == "function" && !AE(e) && e.defaultProps === void 0;
    }
    function kD(e) {
      if (typeof e == "function")
        return AE(e) ? _ : L;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ne)
          return te;
        if (t === yt)
          return de;
      }
      return U;
    }
    function mc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ge, a.subtreeFlags = Ge, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & pr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case U:
        case L:
        case ge:
          a.type = id(e.type);
          break;
        case _:
          a.type = DE(e.type);
          break;
        case te:
          a.type = kE(e.type);
          break;
      }
      return a;
    }
    function ND(e, t) {
      e.flags &= pr | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = Ge, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ge, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function MD(e, t, a) {
      var i;
      return e === om ? (i = _t, t === !0 && (i |= kn, i |= $a)) : i = et, vr && (i |= rt), vi(k, null, null, i);
    }
    function zE(e, t, a, i, o, s) {
      var d = U, m = e;
      if (typeof e == "function")
        AE(e) ? (d = _, m = DE(m)) : m = id(m);
      else if (typeof e == "string")
        d = A;
      else
        e:
          switch (e) {
            case Ra:
              return as(a.children, o, s, t);
            case Ei:
              d = I, o |= kn, (o & _t) !== et && (o |= $a);
              break;
            case D:
              return LD(a, o, s, t);
            case mt:
              return AD(a, o, s, t);
            case Nt:
              return zD(a, o, s, t);
            case hn:
              return NR(a, o, s, t);
            case dr:
            case $n:
            case Ci:
            case el:
            case vn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case se:
                    d = le;
                    break e;
                  case Ee:
                    d = oe;
                    break e;
                  case Ne:
                    d = te, m = kE(m);
                    break e;
                  case yt:
                    d = de;
                    break e;
                  case Ke:
                    d = Ye, m = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? ct(i) : null;
                b && (y += `

Check the render method of \`` + b + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var T = vi(d, a, t, o);
      return T.elementType = e, T.type = m, T.lanes = s, T._debugOwner = i, T;
    }
    function UE(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, d = e.props, m = zE(o, s, d, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function as(e, t, a, i) {
      var o = vi($, e, i, t);
      return o.lanes = a, o;
    }
    function LD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = vi(J, e, i, t | rt);
      return o.elementType = D, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function AD(e, t, a, i) {
      var o = vi(H, e, i, t);
      return o.elementType = mt, o.lanes = a, o;
    }
    function zD(e, t, a, i) {
      var o = vi(Ue, e, i, t);
      return o.elementType = Nt, o.lanes = a, o;
    }
    function NR(e, t, a, i) {
      var o = vi(Ae, e, i, t);
      o.elementType = hn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function jE(e, t, a) {
      var i = vi(B, e, null, t);
      return i.lanes = a, i;
    }
    function UD() {
      var e = vi(A, null, null, et);
      return e.elementType = "DELETED", e;
    }
    function jD(e) {
      var t = vi(Ze, null, null, et);
      return t.stateNode = e, t;
    }
    function PE(e, t, a) {
      var i = e.children !== null ? e.children : [], o = vi(M, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function MR(e, t) {
      return e === null && (e = vi(U, null, null, et)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function PD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Mt, this.eventTimes = pf(ae), this.expirationTimes = pf(fn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = pf(ae), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Sn; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case om:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Yl:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function LR(e, t, a, i, o, s, d, m, y, b) {
      var T = new PD(e, t, a, m, y), F = MD(t, s);
      T.current = F, F.stateNode = T;
      {
        var j = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = j;
      }
      return Wg(F), T;
    }
    var FE = "18.2.0";
    function FD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Zr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var VE, HE;
    VE = !1, HE = {};
    function AR(e) {
      if (!e)
        return pi;
      var t = Fa(e), a = b_(t);
      if (t.tag === _) {
        var i = t.type;
        if (Ku(i))
          return uC(t, i, a);
      }
      return a;
    }
    function VD(e, t) {
      {
        var a = Fa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Ba(a);
        if (o === null)
          return null;
        if (o.mode & kn) {
          var s = ct(a) || "Component";
          if (!HE[s]) {
            HE[s] = !0;
            var d = On;
            try {
              qt(o), a.mode & kn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? qt(d) : Ln();
            }
          }
        }
        return o.stateNode;
      }
    }
    function zR(e, t, a, i, o, s, d, m) {
      var y = !1, b = null;
      return LR(e, t, y, b, a, i, o, s, d);
    }
    function UR(e, t, a, i, o, s, d, m, y, b) {
      var T = !0, F = LR(a, i, T, e, o, s, d, m, y);
      F.context = AR(null);
      var j = F.current, q = Ma(), X = ns(j), ne = Yo(q, X);
      return ne.callback = t ?? null, Gl(j, ne, X), QO(F, X, q), F;
    }
    function gv(e, t, a, i) {
      lh(t, e);
      var o = t.current, s = Ma(), d = ns(o);
      Co(d);
      var m = AR(a);
      t.context === null ? t.context = m : t.pendingContext = m, na && On !== null && !VE && (VE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(On) || "Unknown"));
      var y = Yo(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var b = Gl(o, y, d);
      return b !== null && (Rr(b, o, d, s), Em(b, o, d)), d;
    }
    function fy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case A:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function HD(e) {
      switch (e.tag) {
        case k: {
          var t = e.stateNode;
          if (Zn(t)) {
            var a = Fy(t);
            XO(t, a);
          }
          break;
        }
        case H: {
          qo(function() {
            var o = Xa(e, it);
            if (o !== null) {
              var s = Ma();
              Rr(o, e, it, s);
            }
          });
          var i = it;
          IE(e, i);
          break;
        }
      }
    }
    function jR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Eh(a.retryLane, t));
    }
    function IE(e, t) {
      jR(e, t);
      var a = e.alternate;
      a && jR(a, t);
    }
    function ID(e) {
      if (e.tag === H) {
        var t = Rl, a = Xa(e, t);
        if (a !== null) {
          var i = Ma();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function BD(e) {
      if (e.tag === H) {
        var t = ns(e), a = Xa(e, t);
        if (a !== null) {
          var i = Ma();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function PR(e) {
      var t = ih(e);
      return t === null ? null : t.stateNode;
    }
    var FR = function(e) {
      return null;
    };
    function $D(e) {
      return FR(e);
    }
    var VR = function(e) {
      return !1;
    };
    function YD(e) {
      return VR(e);
    }
    var HR = null, IR = null, BR = null, $R = null, YR = null, WR = null, QR = null, GR = null, qR = null;
    {
      var KR = function(e, t, a) {
        var i = t[a], o = kt(e) ? e.slice() : Tt({}, e);
        return a + 1 === t.length ? (kt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = KR(e[i], t, a + 1), o);
      }, XR = function(e, t) {
        return KR(e, t, 0);
      }, ZR = function(e, t, a, i) {
        var o = t[i], s = kt(e) ? e.slice() : Tt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[o], kt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = ZR(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, JR = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ZR(e, t, a, 0);
      }, e1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = kt(e) ? e.slice() : Tt({}, e);
        return s[o] = e1(e[o], t, a + 1, i), s;
      }, t1 = function(e, t, a) {
        return e1(e, t, 0, a);
      }, BE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      HR = function(e, t, a, i) {
        var o = BE(e, t);
        if (o !== null) {
          var s = t1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Tt({}, e.memoizedProps);
          var d = Xa(e, it);
          d !== null && Rr(d, e, it, fn);
        }
      }, IR = function(e, t, a) {
        var i = BE(e, t);
        if (i !== null) {
          var o = XR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Tt({}, e.memoizedProps);
          var s = Xa(e, it);
          s !== null && Rr(s, e, it, fn);
        }
      }, BR = function(e, t, a, i) {
        var o = BE(e, t);
        if (o !== null) {
          var s = JR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Tt({}, e.memoizedProps);
          var d = Xa(e, it);
          d !== null && Rr(d, e, it, fn);
        }
      }, $R = function(e, t, a) {
        e.pendingProps = t1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, it);
        i !== null && Rr(i, e, it, fn);
      }, YR = function(e, t) {
        e.pendingProps = XR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, it);
        a !== null && Rr(a, e, it, fn);
      }, WR = function(e, t, a) {
        e.pendingProps = JR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, it);
        i !== null && Rr(i, e, it, fn);
      }, QR = function(e) {
        var t = Xa(e, it);
        t !== null && Rr(t, e, it, fn);
      }, GR = function(e) {
        FR = e;
      }, qR = function(e) {
        VR = e;
      };
    }
    function WD(e) {
      var t = Ba(e);
      return t === null ? null : t.stateNode;
    }
    function QD(e) {
      return null;
    }
    function GD() {
      return On;
    }
    function qD(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return Yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: HR,
        overrideHookStateDeletePath: IR,
        overrideHookStateRenamePath: BR,
        overrideProps: $R,
        overridePropsDeletePath: YR,
        overridePropsRenamePath: WR,
        setErrorHandler: GR,
        setSuspenseHandler: qR,
        scheduleUpdate: QR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: WD,
        findFiberByHostInstance: t || QD,
        // React Refresh
        findHostInstancesForRefresh: wD,
        scheduleRefresh: RD,
        scheduleRoot: TD,
        setRefreshHandler: bD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: GD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: FE
      });
    }
    var n1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function $E(e) {
      this._internalRoot = e;
    }
    dy.prototype.render = $E.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : py(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Yn) {
          var i = PR(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      gv(e, t, null, null);
    }, dy.prototype.unmount = $E.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vR() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), qo(function() {
          gv(null, e, null, null);
        }), tC(t);
      }
    };
    function KD(e, t) {
      if (!py(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      r1(e);
      var a = !1, i = !1, o = "", s = n1;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Si && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = zR(e, om, null, a, i, o, s);
      em(d.current, e);
      var m = e.nodeType === Yn ? e.parentNode : e;
      return _p(m), new $E(d);
    }
    function dy(e) {
      this._internalRoot = e;
    }
    function XD(e) {
      e && Oh(e);
    }
    dy.prototype.unstable_scheduleHydration = XD;
    function ZD(e, t, a) {
      if (!py(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      r1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, d = !1, m = "", y = n1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var b = UR(t, null, e, om, i, s, d, m, y);
      if (em(b.current, e), _p(e), o)
        for (var T = 0; T < o.length; T++) {
          var F = o[T];
          ux(b, F);
        }
      return new dy(b);
    }
    function py(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === li || e.nodeType === fo || !Re));
    }
    function Sv(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === li || e.nodeType === fo || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function r1(e) {
      e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), jp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var JD = v.ReactCurrentOwner, a1;
    a1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = PR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = YE(e), o = !!(i && Bl(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function YE(e) {
      return e ? e.nodeType === li ? e.documentElement : e.firstChild : null;
    }
    function i1() {
    }
    function ek(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var j = fy(d);
            s.call(j);
          };
        }
        var d = UR(
          t,
          i,
          e,
          Yl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          i1
        );
        e._reactRootContainer = d, em(d.current, e);
        var m = e.nodeType === Yn ? e.parentNode : e;
        return _p(m), qo(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var j = fy(T);
            b.call(j);
          };
        }
        var T = zR(
          e,
          Yl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          i1
        );
        e._reactRootContainer = T, em(T.current, e);
        var F = e.nodeType === Yn ? e.parentNode : e;
        return _p(F), qo(function() {
          gv(t, T, a, i);
        }), T;
      }
    }
    function tk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vy(e, t, a, i, o) {
      a1(a), tk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = ek(a, t, e, o, i);
      else {
        if (d = s, typeof o == "function") {
          var m = o;
          o = function() {
            var y = fy(d);
            m.call(y);
          };
        }
        gv(t, d, e, o);
      }
      return fy(d);
    }
    function nk(e) {
      {
        var t = JD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === aa ? e : VD(e, "findDOMNode");
    }
    function rk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vy(null, e, t, !0, a);
    }
    function ak(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vy(null, e, t, !1, a);
    }
    function ik(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return vy(e, t, a, !1, i);
    }
    function uk(e) {
      if (!Sv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = jp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = YE(e), i = a && !Bl(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return qo(function() {
          vy(null, null, e, !1, function() {
            e._reactRootContainer = null, tC(e);
          });
        }), !0;
      } else {
        {
          var o = YE(e), s = !!(o && Bl(o)), d = e.nodeType === aa && Sv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ze(HD), bh(ID), Ys(BD), lp(Wa), Th(Is), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), nh(sw), Lc(bE, ZO, qo);
    function ok(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!py(t))
        throw new Error("Target container is not a DOM element.");
      return FD(e, t, null, a);
    }
    function lk(e, t, a, i) {
      return ik(e, t, a, i);
    }
    var WE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bl, Uf, tm, Mc, xs, bE]
    };
    function sk(e, t) {
      return WE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), KD(e, t);
    }
    function ck(e, t, a) {
      return WE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ZD(e, t, a);
    }
    function fk(e) {
      return vR() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), qo(e);
    }
    var dk = qD({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: FE,
      rendererPackageName: "react-dom"
    });
    if (!dk && Zt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var u1 = window.location.protocol;
      /^(https?|file):$/.test(u1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (u1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WE, ni.createPortal = ok, ni.createRoot = sk, ni.findDOMNode = nk, ni.flushSync = fk, ni.hydrate = rk, ni.hydrateRoot = ck, ni.render = ak, ni.unmountComponentAtNode = uk, ni.unstable_batchedUpdates = bE, ni.unstable_renderSubtreeIntoContainer = lk, ni.version = FE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ni;
}
function K1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if ({}.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K1);
    } catch (c) {
      console.error(c);
    }
  }
}
({}).NODE_ENV === "production" ? (K1(), s0.exports = Rk()) : s0.exports = Tk();
var X1 = s0.exports, Rv = X1;
if ({}.NODE_ENV === "production")
  wv.createRoot = Rv.createRoot, wv.hydrateRoot = Rv.hydrateRoot;
else {
  var my = Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  wv.createRoot = function(c, p) {
    my.usingClientEntryPoint = !0;
    try {
      return Rv.createRoot(c, p);
    } finally {
      my.usingClientEntryPoint = !1;
    }
  }, wv.hydrateRoot = function(c, p, v) {
    my.usingClientEntryPoint = !0;
    try {
      return Rv.hydrateRoot(c, p, v);
    } finally {
      my.usingClientEntryPoint = !1;
    }
  };
}
var c0 = { exports: {} }, qE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m1;
function wk() {
  if (m1)
    return qE;
  m1 = 1;
  var c = dn;
  function p(k, M) {
    return k === M && (k !== 0 || 1 / k === 1 / M) || k !== k && M !== M;
  }
  var v = typeof Object.is == "function" ? Object.is : p, E = c.useState, R = c.useEffect, w = c.useLayoutEffect, g = c.useDebugValue;
  function V(k, M) {
    var A = M(), B = E({ inst: { value: A, getSnapshot: M } }), $ = B[0].inst, I = B[1];
    return w(function() {
      $.value = A, $.getSnapshot = M, L($) && I({ inst: $ });
    }, [k, A, M]), R(function() {
      return L($) && I({ inst: $ }), k(function() {
        L($) && I({ inst: $ });
      });
    }, [k]), g(A), A;
  }
  function L(k) {
    var M = k.getSnapshot;
    k = k.value;
    try {
      var A = M();
      return !v(k, A);
    } catch {
      return !0;
    }
  }
  function _(k, M) {
    return M();
  }
  var U = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : V;
  return qE.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : U, qE;
}
var KE = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y1;
function _k() {
  return y1 || (y1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = dn, p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(te) {
      {
        for (var J = arguments.length, H = new Array(J > 1 ? J - 1 : 0), de = 1; de < J; de++)
          H[de - 1] = arguments[de];
        E("error", te, H);
      }
    }
    function E(te, J, H) {
      {
        var de = p.ReactDebugCurrentFrame, ge = de.getStackAddendum();
        ge !== "" && (J += "%s", H = H.concat([ge]));
        var Ye = H.map(function(tt) {
          return String(tt);
        });
        Ye.unshift("Warning: " + J), Function.prototype.apply.call(console[te], console, Ye);
      }
    }
    function R(te, J) {
      return te === J && (te !== 0 || 1 / te === 1 / J) || te !== te && J !== J;
    }
    var w = typeof Object.is == "function" ? Object.is : R, g = c.useState, V = c.useEffect, L = c.useLayoutEffect, _ = c.useDebugValue, U = !1, k = !1;
    function M(te, J, H) {
      U || c.startTransition !== void 0 && (U = !0, v("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var de = J();
      if (!k) {
        var ge = J();
        w(de, ge) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), k = !0);
      }
      var Ye = g({
        inst: {
          value: de,
          getSnapshot: J
        }
      }), tt = Ye[0].inst, Ze = Ye[1];
      return L(function() {
        tt.value = de, tt.getSnapshot = J, A(tt) && Ze({
          inst: tt
        });
      }, [te, de, J]), V(function() {
        A(tt) && Ze({
          inst: tt
        });
        var Ue = function() {
          A(tt) && Ze({
            inst: tt
          });
        };
        return te(Ue);
      }, [te]), _(de), de;
    }
    function A(te) {
      var J = te.getSnapshot, H = te.value;
      try {
        var de = J();
        return !w(H, de);
      } catch {
        return !0;
      }
    }
    function B(te, J, H) {
      return J();
    }
    var $ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I = !$, oe = I ? B : M, le = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : oe;
    KE.useSyncExternalStore = le, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), KE;
}
({}).NODE_ENV === "production" ? c0.exports = wk() : c0.exports = _k();
var Z1 = c0.exports, f0 = { exports: {} }, XE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g1;
function xk() {
  if (g1)
    return XE;
  g1 = 1;
  var c = dn, p = Z1;
  function v(_, U) {
    return _ === U && (_ !== 0 || 1 / _ === 1 / U) || _ !== _ && U !== U;
  }
  var E = typeof Object.is == "function" ? Object.is : v, R = p.useSyncExternalStore, w = c.useRef, g = c.useEffect, V = c.useMemo, L = c.useDebugValue;
  return XE.useSyncExternalStoreWithSelector = function(_, U, k, M, A) {
    var B = w(null);
    if (B.current === null) {
      var $ = { hasValue: !1, value: null };
      B.current = $;
    } else
      $ = B.current;
    B = V(function() {
      function oe(de) {
        if (!le) {
          if (le = !0, te = de, de = M(de), A !== void 0 && $.hasValue) {
            var ge = $.value;
            if (A(ge, de))
              return J = ge;
          }
          return J = de;
        }
        if (ge = J, E(te, de))
          return ge;
        var Ye = M(de);
        return A !== void 0 && A(ge, Ye) ? ge : (te = de, J = Ye);
      }
      var le = !1, te, J, H = k === void 0 ? null : k;
      return [function() {
        return oe(U());
      }, H === null ? void 0 : function() {
        return oe(H());
      }];
    }, [U, k, M, A]);
    var I = R(_, B[0], B[1]);
    return g(function() {
      $.hasValue = !0, $.value = I;
    }, [I]), L(I), I;
  }, XE;
}
var ZE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S1;
function Ok() {
  return S1 || (S1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = dn, p = Z1;
    function v(U, k) {
      return U === k && (U !== 0 || 1 / U === 1 / k) || U !== U && k !== k;
    }
    var E = typeof Object.is == "function" ? Object.is : v, R = p.useSyncExternalStore, w = c.useRef, g = c.useEffect, V = c.useMemo, L = c.useDebugValue;
    function _(U, k, M, A, B) {
      var $ = w(null), I;
      $.current === null ? (I = {
        hasValue: !1,
        value: null
      }, $.current = I) : I = $.current;
      var oe = V(function() {
        var H = !1, de, ge, Ye = function(st) {
          if (!H) {
            H = !0, de = st;
            var Ae = A(st);
            if (B !== void 0 && I.hasValue) {
              var $e = I.value;
              if (B($e, Ae))
                return ge = $e, $e;
            }
            return ge = Ae, Ae;
          }
          var Dt = de, Et = ge;
          if (E(Dt, st))
            return Et;
          var _e = A(st);
          return B !== void 0 && B(Et, _e) ? Et : (de = st, ge = _e, _e);
        }, tt = M === void 0 ? null : M, Ze = function() {
          return Ye(k());
        }, Ue = tt === null ? void 0 : function() {
          return Ye(tt());
        };
        return [Ze, Ue];
      }, [k, M, A, B]), le = oe[0], te = oe[1], J = R(U, le, te);
      return g(function() {
        I.hasValue = !0, I.value = J;
      }, [J]), L(J), J;
    }
    ZE.useSyncExternalStoreWithSelector = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ZE;
}
({}).NODE_ENV === "production" ? f0.exports = xk() : f0.exports = Ok();
var Dk = f0.exports;
function kk(c) {
  c();
}
let J1 = kk;
const Nk = (c) => J1 = c, Mk = () => J1, E1 = Symbol.for("react-redux-context"), C1 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Lk() {
  var c;
  if (!dn.createContext)
    return {};
  const p = (c = C1[E1]) != null ? c : C1[E1] = /* @__PURE__ */ new Map();
  let v = p.get(dn.createContext);
  return v || (v = dn.createContext(null), {}.NODE_ENV !== "production" && (v.displayName = "ReactRedux"), p.set(dn.createContext, v)), v;
}
const ss = /* @__PURE__ */ Lk();
function S0(c = ss) {
  return function() {
    const v = dn.useContext(c);
    if ({}.NODE_ENV !== "production" && !v)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return v;
  };
}
const eT = /* @__PURE__ */ S0(), Ak = () => {
  throw new Error("uSES not initialized!");
};
let tT = Ak;
const zk = (c) => {
  tT = c;
}, Uk = (c, p) => c === p;
function jk(c = ss) {
  const p = c === ss ? eT : S0(c);
  return function(E, R = {}) {
    const {
      equalityFn: w = Uk,
      stabilityCheck: g = void 0,
      noopCheck: V = void 0
    } = typeof R == "function" ? {
      equalityFn: R
    } : R;
    if ({}.NODE_ENV !== "production") {
      if (!E)
        throw new Error("You must pass a selector to useSelector");
      if (typeof E != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof w != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: L,
      subscription: _,
      getServerState: U,
      stabilityCheck: k,
      noopCheck: M
    } = p(), A = dn.useRef(!0), B = dn.useCallback({
      [E.name](I) {
        const oe = E(I);
        if ({}.NODE_ENV !== "production") {
          const le = typeof g > "u" ? k : g;
          if (le === "always" || le === "once" && A.current) {
            const J = E(I);
            if (!w(oe, J)) {
              let H;
              try {
                throw new Error();
              } catch (de) {
                ({
                  stack: H
                } = de);
              }
              console.warn("Selector " + (E.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: I,
                selected: oe,
                selected2: J,
                stack: H
              });
            }
          }
          const te = typeof V > "u" ? M : V;
          if ((te === "always" || te === "once" && A.current) && oe === I) {
            let J;
            try {
              throw new Error();
            } catch (H) {
              ({
                stack: J
              } = H);
            }
            console.warn("Selector " + (E.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: J
            });
          }
          A.current && (A.current = !1);
        }
        return oe;
      }
    }[E.name], [E, k, g]), $ = tT(_.addNestedSub, L.getState, U || L.getState, B, w);
    return dn.useDebugValue($), $;
  };
}
const fs = /* @__PURE__ */ jk();
var d0 = { exports: {} }, rn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b1;
function Pk() {
  if (b1)
    return rn;
  b1 = 1;
  var c = typeof Symbol == "function" && Symbol.for, p = c ? Symbol.for("react.element") : 60103, v = c ? Symbol.for("react.portal") : 60106, E = c ? Symbol.for("react.fragment") : 60107, R = c ? Symbol.for("react.strict_mode") : 60108, w = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, V = c ? Symbol.for("react.context") : 60110, L = c ? Symbol.for("react.async_mode") : 60111, _ = c ? Symbol.for("react.concurrent_mode") : 60111, U = c ? Symbol.for("react.forward_ref") : 60112, k = c ? Symbol.for("react.suspense") : 60113, M = c ? Symbol.for("react.suspense_list") : 60120, A = c ? Symbol.for("react.memo") : 60115, B = c ? Symbol.for("react.lazy") : 60116, $ = c ? Symbol.for("react.block") : 60121, I = c ? Symbol.for("react.fundamental") : 60117, oe = c ? Symbol.for("react.responder") : 60118, le = c ? Symbol.for("react.scope") : 60119;
  function te(H) {
    if (typeof H == "object" && H !== null) {
      var de = H.$$typeof;
      switch (de) {
        case p:
          switch (H = H.type, H) {
            case L:
            case _:
            case E:
            case w:
            case R:
            case k:
              return H;
            default:
              switch (H = H && H.$$typeof, H) {
                case V:
                case U:
                case B:
                case A:
                case g:
                  return H;
                default:
                  return de;
              }
          }
        case v:
          return de;
      }
    }
  }
  function J(H) {
    return te(H) === _;
  }
  return rn.AsyncMode = L, rn.ConcurrentMode = _, rn.ContextConsumer = V, rn.ContextProvider = g, rn.Element = p, rn.ForwardRef = U, rn.Fragment = E, rn.Lazy = B, rn.Memo = A, rn.Portal = v, rn.Profiler = w, rn.StrictMode = R, rn.Suspense = k, rn.isAsyncMode = function(H) {
    return J(H) || te(H) === L;
  }, rn.isConcurrentMode = J, rn.isContextConsumer = function(H) {
    return te(H) === V;
  }, rn.isContextProvider = function(H) {
    return te(H) === g;
  }, rn.isElement = function(H) {
    return typeof H == "object" && H !== null && H.$$typeof === p;
  }, rn.isForwardRef = function(H) {
    return te(H) === U;
  }, rn.isFragment = function(H) {
    return te(H) === E;
  }, rn.isLazy = function(H) {
    return te(H) === B;
  }, rn.isMemo = function(H) {
    return te(H) === A;
  }, rn.isPortal = function(H) {
    return te(H) === v;
  }, rn.isProfiler = function(H) {
    return te(H) === w;
  }, rn.isStrictMode = function(H) {
    return te(H) === R;
  }, rn.isSuspense = function(H) {
    return te(H) === k;
  }, rn.isValidElementType = function(H) {
    return typeof H == "string" || typeof H == "function" || H === E || H === _ || H === w || H === R || H === k || H === M || typeof H == "object" && H !== null && (H.$$typeof === B || H.$$typeof === A || H.$$typeof === g || H.$$typeof === V || H.$$typeof === U || H.$$typeof === I || H.$$typeof === oe || H.$$typeof === le || H.$$typeof === $);
  }, rn.typeOf = te, rn;
}
var an = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R1;
function Fk() {
  return R1 || (R1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, p = c ? Symbol.for("react.element") : 60103, v = c ? Symbol.for("react.portal") : 60106, E = c ? Symbol.for("react.fragment") : 60107, R = c ? Symbol.for("react.strict_mode") : 60108, w = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, V = c ? Symbol.for("react.context") : 60110, L = c ? Symbol.for("react.async_mode") : 60111, _ = c ? Symbol.for("react.concurrent_mode") : 60111, U = c ? Symbol.for("react.forward_ref") : 60112, k = c ? Symbol.for("react.suspense") : 60113, M = c ? Symbol.for("react.suspense_list") : 60120, A = c ? Symbol.for("react.memo") : 60115, B = c ? Symbol.for("react.lazy") : 60116, $ = c ? Symbol.for("react.block") : 60121, I = c ? Symbol.for("react.fundamental") : 60117, oe = c ? Symbol.for("react.responder") : 60118, le = c ? Symbol.for("react.scope") : 60119;
    function te(Oe) {
      return typeof Oe == "string" || typeof Oe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Oe === E || Oe === _ || Oe === w || Oe === R || Oe === k || Oe === M || typeof Oe == "object" && Oe !== null && (Oe.$$typeof === B || Oe.$$typeof === A || Oe.$$typeof === g || Oe.$$typeof === V || Oe.$$typeof === U || Oe.$$typeof === I || Oe.$$typeof === oe || Oe.$$typeof === le || Oe.$$typeof === $);
    }
    function J(Oe) {
      if (typeof Oe == "object" && Oe !== null) {
        var Zt = Oe.$$typeof;
        switch (Zt) {
          case p:
            var we = Oe.type;
            switch (we) {
              case L:
              case _:
              case E:
              case w:
              case R:
              case k:
                return we;
              default:
                var pn = we && we.$$typeof;
                switch (pn) {
                  case V:
                  case U:
                  case B:
                  case A:
                  case g:
                    return pn;
                  default:
                    return Zt;
                }
            }
          case v:
            return Zt;
        }
      }
    }
    var H = L, de = _, ge = V, Ye = g, tt = p, Ze = U, Ue = E, st = B, Ae = A, $e = v, Dt = w, Et = R, _e = k, he = !1;
    function Ve(Oe) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(Oe) || J(Oe) === L;
    }
    function N(Oe) {
      return J(Oe) === _;
    }
    function ue(Oe) {
      return J(Oe) === V;
    }
    function Re(Oe) {
      return J(Oe) === g;
    }
    function at(Oe) {
      return typeof Oe == "object" && Oe !== null && Oe.$$typeof === p;
    }
    function qe(Oe) {
      return J(Oe) === U;
    }
    function Rt(Oe) {
      return J(Oe) === E;
    }
    function dt(Oe) {
      return J(Oe) === B;
    }
    function Ct(Oe) {
      return J(Oe) === A;
    }
    function pt(Oe) {
      return J(Oe) === v;
    }
    function Ut(Oe) {
      return J(Oe) === w;
    }
    function tr(Oe) {
      return J(Oe) === R;
    }
    function Bn(Oe) {
      return J(Oe) === k;
    }
    an.AsyncMode = H, an.ConcurrentMode = de, an.ContextConsumer = ge, an.ContextProvider = Ye, an.Element = tt, an.ForwardRef = Ze, an.Fragment = Ue, an.Lazy = st, an.Memo = Ae, an.Portal = $e, an.Profiler = Dt, an.StrictMode = Et, an.Suspense = _e, an.isAsyncMode = Ve, an.isConcurrentMode = N, an.isContextConsumer = ue, an.isContextProvider = Re, an.isElement = at, an.isForwardRef = qe, an.isFragment = Rt, an.isLazy = dt, an.isMemo = Ct, an.isPortal = pt, an.isProfiler = Ut, an.isStrictMode = tr, an.isSuspense = Bn, an.isValidElementType = te, an.typeOf = J;
  }()), an;
}
({}).NODE_ENV === "production" ? d0.exports = Pk() : d0.exports = Fk();
var Vk = d0.exports, nT = Vk, Hk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ik = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rT = {};
rT[nT.ForwardRef] = Hk;
rT[nT.Memo] = Ik;
var un = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T1;
function Bk() {
  if (T1)
    return un;
  T1 = 1;
  var c = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), V = Symbol.for("react.server_context"), L = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), B;
  B = Symbol.for("react.module.reference");
  function $(I) {
    if (typeof I == "object" && I !== null) {
      var oe = I.$$typeof;
      switch (oe) {
        case c:
          switch (I = I.type, I) {
            case v:
            case R:
            case E:
            case _:
            case U:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case V:
                case g:
                case L:
                case M:
                case k:
                case w:
                  return I;
                default:
                  return oe;
              }
          }
        case p:
          return oe;
      }
    }
  }
  return un.ContextConsumer = g, un.ContextProvider = w, un.Element = c, un.ForwardRef = L, un.Fragment = v, un.Lazy = M, un.Memo = k, un.Portal = p, un.Profiler = R, un.StrictMode = E, un.Suspense = _, un.SuspenseList = U, un.isAsyncMode = function() {
    return !1;
  }, un.isConcurrentMode = function() {
    return !1;
  }, un.isContextConsumer = function(I) {
    return $(I) === g;
  }, un.isContextProvider = function(I) {
    return $(I) === w;
  }, un.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === c;
  }, un.isForwardRef = function(I) {
    return $(I) === L;
  }, un.isFragment = function(I) {
    return $(I) === v;
  }, un.isLazy = function(I) {
    return $(I) === M;
  }, un.isMemo = function(I) {
    return $(I) === k;
  }, un.isPortal = function(I) {
    return $(I) === p;
  }, un.isProfiler = function(I) {
    return $(I) === R;
  }, un.isStrictMode = function(I) {
    return $(I) === E;
  }, un.isSuspense = function(I) {
    return $(I) === _;
  }, un.isSuspenseList = function(I) {
    return $(I) === U;
  }, un.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === v || I === R || I === E || I === _ || I === U || I === A || typeof I == "object" && I !== null && (I.$$typeof === M || I.$$typeof === k || I.$$typeof === w || I.$$typeof === g || I.$$typeof === L || I.$$typeof === B || I.getModuleId !== void 0);
  }, un.typeOf = $, un;
}
var on = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1;
function $k() {
  return w1 || (w1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), V = Symbol.for("react.server_context"), L = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), B = !1, $ = !1, I = !1, oe = !1, le = !1, te;
    te = Symbol.for("react.module.reference");
    function J(we) {
      return !!(typeof we == "string" || typeof we == "function" || we === v || we === R || le || we === E || we === _ || we === U || oe || we === A || B || $ || I || typeof we == "object" && we !== null && (we.$$typeof === M || we.$$typeof === k || we.$$typeof === w || we.$$typeof === g || we.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      we.$$typeof === te || we.getModuleId !== void 0));
    }
    function H(we) {
      if (typeof we == "object" && we !== null) {
        var pn = we.$$typeof;
        switch (pn) {
          case c:
            var bn = we.type;
            switch (bn) {
              case v:
              case R:
              case E:
              case _:
              case U:
                return bn;
              default:
                var Rn = bn && bn.$$typeof;
                switch (Rn) {
                  case V:
                  case g:
                  case L:
                  case M:
                  case k:
                  case w:
                    return Rn;
                  default:
                    return pn;
                }
            }
          case p:
            return pn;
        }
      }
    }
    var de = g, ge = w, Ye = c, tt = L, Ze = v, Ue = M, st = k, Ae = p, $e = R, Dt = E, Et = _, _e = U, he = !1, Ve = !1;
    function N(we) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(we) {
      return Ve || (Ve = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Re(we) {
      return H(we) === g;
    }
    function at(we) {
      return H(we) === w;
    }
    function qe(we) {
      return typeof we == "object" && we !== null && we.$$typeof === c;
    }
    function Rt(we) {
      return H(we) === L;
    }
    function dt(we) {
      return H(we) === v;
    }
    function Ct(we) {
      return H(we) === M;
    }
    function pt(we) {
      return H(we) === k;
    }
    function Ut(we) {
      return H(we) === p;
    }
    function tr(we) {
      return H(we) === R;
    }
    function Bn(we) {
      return H(we) === E;
    }
    function Oe(we) {
      return H(we) === _;
    }
    function Zt(we) {
      return H(we) === U;
    }
    on.ContextConsumer = de, on.ContextProvider = ge, on.Element = Ye, on.ForwardRef = tt, on.Fragment = Ze, on.Lazy = Ue, on.Memo = st, on.Portal = Ae, on.Profiler = $e, on.StrictMode = Dt, on.Suspense = Et, on.SuspenseList = _e, on.isAsyncMode = N, on.isConcurrentMode = ue, on.isContextConsumer = Re, on.isContextProvider = at, on.isElement = qe, on.isForwardRef = Rt, on.isFragment = dt, on.isLazy = Ct, on.isMemo = pt, on.isPortal = Ut, on.isProfiler = tr, on.isStrictMode = Bn, on.isSuspense = Oe, on.isSuspenseList = Zt, on.isValidElementType = J, on.typeOf = H;
  }()), on;
}
({}).NODE_ENV === "production" ? Bk() : $k();
function Yk() {
  const c = Mk();
  let p = null, v = null;
  return {
    clear() {
      p = null, v = null;
    },
    notify() {
      c(() => {
        let E = p;
        for (; E; )
          E.callback(), E = E.next;
      });
    },
    get() {
      let E = [], R = p;
      for (; R; )
        E.push(R), R = R.next;
      return E;
    },
    subscribe(E) {
      let R = !0, w = v = {
        callback: E,
        next: null,
        prev: v
      };
      return w.prev ? w.prev.next = w : p = w, function() {
        !R || p === null || (R = !1, w.next ? w.next.prev = w.prev : v = w.prev, w.prev ? w.prev.next = w.next : p = w.next);
      };
    }
  };
}
const _1 = {
  notify() {
  },
  get: () => []
};
function Wk(c, p) {
  let v, E = _1, R = 0, w = !1;
  function g($) {
    U();
    const I = E.subscribe($);
    let oe = !1;
    return () => {
      oe || (oe = !0, I(), k());
    };
  }
  function V() {
    E.notify();
  }
  function L() {
    B.onStateChange && B.onStateChange();
  }
  function _() {
    return w;
  }
  function U() {
    R++, v || (v = p ? p.addNestedSub(L) : c.subscribe(L), E = Yk());
  }
  function k() {
    R--, v && R === 0 && (v(), v = void 0, E.clear(), E = _1);
  }
  function M() {
    w || (w = !0, U());
  }
  function A() {
    w && (w = !1, k());
  }
  const B = {
    addNestedSub: g,
    notifyNestedSubs: V,
    handleChangeWrapper: L,
    isSubscribed: _,
    trySubscribe: M,
    tryUnsubscribe: A,
    getListeners: () => E
  };
  return B;
}
const Qk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gk = Qk ? dn.useLayoutEffect : dn.useEffect;
function qk({
  store: c,
  context: p,
  children: v,
  serverState: E,
  stabilityCheck: R = "once",
  noopCheck: w = "once"
}) {
  const g = dn.useMemo(() => {
    const _ = Wk(c);
    return {
      store: c,
      subscription: _,
      getServerState: E ? () => E : void 0,
      stabilityCheck: R,
      noopCheck: w
    };
  }, [c, E, R, w]), V = dn.useMemo(() => c.getState(), [c]);
  Gk(() => {
    const {
      subscription: _
    } = g;
    return _.onStateChange = _.notifyNestedSubs, _.trySubscribe(), V !== c.getState() && _.notifyNestedSubs(), () => {
      _.tryUnsubscribe(), _.onStateChange = void 0;
    };
  }, [g, V]);
  const L = p || ss;
  return /* @__PURE__ */ dn.createElement(L.Provider, {
    value: g
  }, v);
}
function aT(c = ss) {
  const p = (
    // @ts-ignore
    c === ss ? eT : (
      // @ts-ignore
      S0(c)
    )
  );
  return function() {
    const {
      store: E
    } = p();
    return E;
  };
}
const Kk = /* @__PURE__ */ aT();
function Xk(c = ss) {
  const p = (
    // @ts-ignore
    c === ss ? Kk : aT(c)
  );
  return function() {
    return p().dispatch;
  };
}
const ds = /* @__PURE__ */ Xk();
zk(Dk.useSyncExternalStoreWithSelector);
Nk(X1.unstable_batchedUpdates);
function Ar(c) {
  for (var p = arguments.length, v = Array(p > 1 ? p - 1 : 0), E = 1; E < p; E++)
    v[E - 1] = arguments[E];
  if ({}.NODE_ENV !== "production") {
    var R = uN[c], w = R ? typeof R == "function" ? R.apply(null, v) : R : "unknown error nr: " + c;
    throw Error("[Immer] " + w);
  }
  throw Error("[Immer] minified error nr: " + c + (v.length ? " " + v.map(function(g) {
    return "'" + g + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function cs(c) {
  return !!c && !!c[jn];
}
function Zo(c) {
  var p;
  return !!c && (function(v) {
    if (!v || typeof v != "object")
      return !1;
    var E = Object.getPrototypeOf(v);
    if (E === null)
      return !0;
    var R = Object.hasOwnProperty.call(E, "constructor") && E.constructor;
    return R === Object || typeof R == "function" && Function.toString.call(R) === oN;
  }(c) || Array.isArray(c) || !!c[L1] || !!(!((p = c.constructor) === null || p === void 0) && p[L1]) || E0(c) || C0(c));
}
function Sc(c, p, v) {
  v === void 0 && (v = !1), fd(c) === 0 ? (v ? Object.keys : ld)(c).forEach(function(E) {
    v && typeof E == "symbol" || p(E, c[E], c);
  }) : c.forEach(function(E, R) {
    return p(R, E, c);
  });
}
function fd(c) {
  var p = c[jn];
  return p ? p.i > 3 ? p.i - 4 : p.i : Array.isArray(c) ? 1 : E0(c) ? 2 : C0(c) ? 3 : 0;
}
function od(c, p) {
  return fd(c) === 2 ? c.has(p) : Object.prototype.hasOwnProperty.call(c, p);
}
function Zk(c, p) {
  return fd(c) === 2 ? c.get(p) : c[p];
}
function iT(c, p, v) {
  var E = fd(c);
  E === 2 ? c.set(p, v) : E === 3 ? c.add(v) : c[p] = v;
}
function uT(c, p) {
  return c === p ? c !== 0 || 1 / c == 1 / p : c != c && p != p;
}
function E0(c) {
  return aN && c instanceof Map;
}
function C0(c) {
  return iN && c instanceof Set;
}
function is(c) {
  return c.o || c.t;
}
function b0(c) {
  if (Array.isArray(c))
    return Array.prototype.slice.call(c);
  var p = lT(c);
  delete p[jn];
  for (var v = ld(p), E = 0; E < v.length; E++) {
    var R = v[E], w = p[R];
    w.writable === !1 && (w.writable = !0, w.configurable = !0), (w.get || w.set) && (p[R] = { configurable: !0, writable: !0, enumerable: w.enumerable, value: c[R] });
  }
  return Object.create(Object.getPrototypeOf(c), p);
}
function R0(c, p) {
  return p === void 0 && (p = !1), T0(c) || cs(c) || !Zo(c) || (fd(c) > 1 && (c.set = c.add = c.clear = c.delete = Jk), Object.freeze(c), p && Sc(c, function(v, E) {
    return R0(E, !0);
  }, !0)), c;
}
function Jk() {
  Ar(2);
}
function T0(c) {
  return c == null || typeof c != "object" || Object.isFrozen(c);
}
function io(c) {
  var p = m0[c];
  return p || Ar(18, c), p;
}
function eN(c, p) {
  m0[c] || (m0[c] = p);
}
function p0() {
  return {}.NODE_ENV === "production" || sd || Ar(0), sd;
}
function JE(c, p) {
  p && (io("Patches"), c.u = [], c.s = [], c.v = p);
}
function gy(c) {
  v0(c), c.p.forEach(tN), c.p = null;
}
function v0(c) {
  c === sd && (sd = c.l);
}
function x1(c) {
  return sd = { p: [], l: sd, h: c, m: !0, _: 0 };
}
function tN(c) {
  var p = c[jn];
  p.i === 0 || p.i === 1 ? p.j() : p.g = !0;
}
function e0(c, p) {
  p._ = p.p.length;
  var v = p.p[0], E = c !== void 0 && c !== v;
  return p.h.O || io("ES5").S(p, c, E), E ? (v[jn].P && (gy(p), Ar(4)), Zo(c) && (c = Sy(p, c), p.l || Ey(p, c)), p.u && io("Patches").M(v[jn].t, c, p.u, p.s)) : c = Sy(p, v, []), gy(p), p.u && p.v(p.u, p.s), c !== oT ? c : void 0;
}
function Sy(c, p, v) {
  if (T0(p))
    return p;
  var E = p[jn];
  if (!E)
    return Sc(p, function(V, L) {
      return O1(c, E, p, V, L, v);
    }, !0), p;
  if (E.A !== c)
    return p;
  if (!E.P)
    return Ey(c, E.t, !0), E.t;
  if (!E.I) {
    E.I = !0, E.A._--;
    var R = E.i === 4 || E.i === 5 ? E.o = b0(E.k) : E.o, w = R, g = !1;
    E.i === 3 && (w = new Set(R), R.clear(), g = !0), Sc(w, function(V, L) {
      return O1(c, E, R, V, L, v, g);
    }), Ey(c, R, !1), v && c.u && io("Patches").N(E, v, c.u, c.s);
  }
  return E.o;
}
function O1(c, p, v, E, R, w, g) {
  if ({}.NODE_ENV !== "production" && R === v && Ar(5), cs(R)) {
    var V = Sy(c, R, w && p && p.i !== 3 && !od(p.R, E) ? w.concat(E) : void 0);
    if (iT(v, E, V), !cs(V))
      return;
    c.m = !1;
  } else
    g && v.add(R);
  if (Zo(R) && !T0(R)) {
    if (!c.h.D && c._ < 1)
      return;
    Sy(c, R), p && p.A.l || Ey(c, R);
  }
}
function Ey(c, p, v) {
  v === void 0 && (v = !1), !c.l && c.h.D && c.m && R0(p, v);
}
function t0(c, p) {
  var v = c[jn];
  return (v ? is(v) : c)[p];
}
function D1(c, p) {
  if (p in c)
    for (var v = Object.getPrototypeOf(c); v; ) {
      var E = Object.getOwnPropertyDescriptor(v, p);
      if (E)
        return E;
      v = Object.getPrototypeOf(v);
    }
}
function us(c) {
  c.P || (c.P = !0, c.l && us(c.l));
}
function n0(c) {
  c.o || (c.o = b0(c.t));
}
function h0(c, p, v) {
  var E = E0(p) ? io("MapSet").F(p, v) : C0(p) ? io("MapSet").T(p, v) : c.O ? function(R, w) {
    var g = Array.isArray(R), V = { i: g ? 1 : 0, A: w ? w.A : p0(), P: !1, I: !1, R: {}, l: w, t: R, k: null, o: null, j: null, C: !1 }, L = V, _ = xv;
    g && (L = [V], _ = _v);
    var U = Proxy.revocable(L, _), k = U.revoke, M = U.proxy;
    return V.k = M, V.j = k, M;
  }(p, v) : io("ES5").J(p, v);
  return (v ? v.A : p0()).p.push(E), E;
}
function nN(c) {
  return cs(c) || Ar(22, c), function p(v) {
    if (!Zo(v))
      return v;
    var E, R = v[jn], w = fd(v);
    if (R) {
      if (!R.P && (R.i < 4 || !io("ES5").K(R)))
        return R.t;
      R.I = !0, E = k1(v, w), R.I = !1;
    } else
      E = k1(v, w);
    return Sc(E, function(g, V) {
      R && Zk(R.t, g) === V || iT(E, g, p(V));
    }), w === 3 ? new Set(E) : E;
  }(c);
}
function k1(c, p) {
  switch (p) {
    case 2:
      return new Map(c);
    case 3:
      return Array.from(c);
  }
  return b0(c);
}
function rN() {
  function c(g, V) {
    var L = w[g];
    return L ? L.enumerable = V : w[g] = L = { configurable: !0, enumerable: V, get: function() {
      var _ = this[jn];
      return {}.NODE_ENV !== "production" && R(_), xv.get(_, g);
    }, set: function(_) {
      var U = this[jn];
      ({}).NODE_ENV !== "production" && R(U), xv.set(U, g, _);
    } }, L;
  }
  function p(g) {
    for (var V = g.length - 1; V >= 0; V--) {
      var L = g[V][jn];
      if (!L.P)
        switch (L.i) {
          case 5:
            E(L) && us(L);
            break;
          case 4:
            v(L) && us(L);
        }
    }
  }
  function v(g) {
    for (var V = g.t, L = g.k, _ = ld(L), U = _.length - 1; U >= 0; U--) {
      var k = _[U];
      if (k !== jn) {
        var M = V[k];
        if (M === void 0 && !od(V, k))
          return !0;
        var A = L[k], B = A && A[jn];
        if (B ? B.t !== M : !uT(A, M))
          return !0;
      }
    }
    var $ = !!V[jn];
    return _.length !== ld(V).length + ($ ? 0 : 1);
  }
  function E(g) {
    var V = g.k;
    if (V.length !== g.t.length)
      return !0;
    var L = Object.getOwnPropertyDescriptor(V, V.length - 1);
    if (L && !L.get)
      return !0;
    for (var _ = 0; _ < V.length; _++)
      if (!V.hasOwnProperty(_))
        return !0;
    return !1;
  }
  function R(g) {
    g.g && Ar(3, JSON.stringify(is(g)));
  }
  var w = {};
  eN("ES5", { J: function(g, V) {
    var L = Array.isArray(g), _ = function(k, M) {
      if (k) {
        for (var A = Array(M.length), B = 0; B < M.length; B++)
          Object.defineProperty(A, "" + B, c(B, !0));
        return A;
      }
      var $ = lT(M);
      delete $[jn];
      for (var I = ld($), oe = 0; oe < I.length; oe++) {
        var le = I[oe];
        $[le] = c(le, k || !!$[le].enumerable);
      }
      return Object.create(Object.getPrototypeOf(M), $);
    }(L, g), U = { i: L ? 5 : 4, A: V ? V.A : p0(), P: !1, I: !1, R: {}, l: V, t: g, k: _, o: null, g: !1, C: !1 };
    return Object.defineProperty(_, jn, { value: U, writable: !0 }), _;
  }, S: function(g, V, L) {
    L ? cs(V) && V[jn].A === g && p(g.p) : (g.u && function _(U) {
      if (U && typeof U == "object") {
        var k = U[jn];
        if (k) {
          var M = k.t, A = k.k, B = k.R, $ = k.i;
          if ($ === 4)
            Sc(A, function(J) {
              J !== jn && (M[J] !== void 0 || od(M, J) ? B[J] || _(A[J]) : (B[J] = !0, us(k)));
            }), Sc(M, function(J) {
              A[J] !== void 0 || od(A, J) || (B[J] = !1, us(k));
            });
          else if ($ === 5) {
            if (E(k) && (us(k), B.length = !0), A.length < M.length)
              for (var I = A.length; I < M.length; I++)
                B[I] = !1;
            else
              for (var oe = M.length; oe < A.length; oe++)
                B[oe] = !0;
            for (var le = Math.min(A.length, M.length), te = 0; te < le; te++)
              A.hasOwnProperty(te) || (B[te] = !0), B[te] === void 0 && _(A[te]);
          }
        }
      }
    }(g.p[0]), p(g.p));
  }, K: function(g) {
    return g.i === 4 ? v(g) : E(g);
  } });
}
var N1, sd, w0 = typeof Symbol < "u" && typeof Symbol("x") == "symbol", aN = typeof Map < "u", iN = typeof Set < "u", M1 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", oT = w0 ? Symbol.for("immer-nothing") : ((N1 = {})["immer-nothing"] = !0, N1), L1 = w0 ? Symbol.for("immer-draftable") : "__$immer_draftable", jn = w0 ? Symbol.for("immer-state") : "__$immer_state", uN = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(c) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + c;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(c) {
  return "Cannot apply patch, path doesn't resolve: " + c;
}, 16: 'Sets cannot have "replace" patches.', 17: function(c) {
  return "Unsupported patch operation: " + c;
}, 18: function(c) {
  return "The plugin for '" + c + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + c + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(c) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + c + "'";
}, 22: function(c) {
  return "'current' expects a draft, got: " + c;
}, 23: function(c) {
  return "'original' expects a draft, got: " + c;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, oN = "" + Object.prototype.constructor, ld = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(c) {
  return Object.getOwnPropertyNames(c).concat(Object.getOwnPropertySymbols(c));
} : Object.getOwnPropertyNames, lT = Object.getOwnPropertyDescriptors || function(c) {
  var p = {};
  return ld(c).forEach(function(v) {
    p[v] = Object.getOwnPropertyDescriptor(c, v);
  }), p;
}, m0 = {}, xv = { get: function(c, p) {
  if (p === jn)
    return c;
  var v = is(c);
  if (!od(v, p))
    return function(R, w, g) {
      var V, L = D1(w, g);
      return L ? "value" in L ? L.value : (V = L.get) === null || V === void 0 ? void 0 : V.call(R.k) : void 0;
    }(c, v, p);
  var E = v[p];
  return c.I || !Zo(E) ? E : E === t0(c.t, p) ? (n0(c), c.o[p] = h0(c.A.h, E, c)) : E;
}, has: function(c, p) {
  return p in is(c);
}, ownKeys: function(c) {
  return Reflect.ownKeys(is(c));
}, set: function(c, p, v) {
  var E = D1(is(c), p);
  if (E != null && E.set)
    return E.set.call(c.k, v), !0;
  if (!c.P) {
    var R = t0(is(c), p), w = R == null ? void 0 : R[jn];
    if (w && w.t === v)
      return c.o[p] = v, c.R[p] = !1, !0;
    if (uT(v, R) && (v !== void 0 || od(c.t, p)))
      return !0;
    n0(c), us(c);
  }
  return c.o[p] === v && (v !== void 0 || p in c.o) || Number.isNaN(v) && Number.isNaN(c.o[p]) || (c.o[p] = v, c.R[p] = !0), !0;
}, deleteProperty: function(c, p) {
  return t0(c.t, p) !== void 0 || p in c.t ? (c.R[p] = !1, n0(c), us(c)) : delete c.R[p], c.o && delete c.o[p], !0;
}, getOwnPropertyDescriptor: function(c, p) {
  var v = is(c), E = Reflect.getOwnPropertyDescriptor(v, p);
  return E && { writable: !0, configurable: c.i !== 1 || p !== "length", enumerable: E.enumerable, value: v[p] };
}, defineProperty: function() {
  Ar(11);
}, getPrototypeOf: function(c) {
  return Object.getPrototypeOf(c.t);
}, setPrototypeOf: function() {
  Ar(12);
} }, _v = {};
Sc(xv, function(c, p) {
  _v[c] = function() {
    return arguments[0] = arguments[0][0], p.apply(this, arguments);
  };
}), _v.deleteProperty = function(c, p) {
  return {}.NODE_ENV !== "production" && isNaN(parseInt(p)) && Ar(13), _v.set.call(this, c, p, void 0);
}, _v.set = function(c, p, v) {
  return {}.NODE_ENV !== "production" && p !== "length" && isNaN(parseInt(p)) && Ar(14), xv.set.call(this, c[0], p, v, c[0]);
};
var lN = function() {
  function c(v) {
    var E = this;
    this.O = M1, this.D = !0, this.produce = function(R, w, g) {
      if (typeof R == "function" && typeof w != "function") {
        var V = w;
        w = R;
        var L = E;
        return function($) {
          var I = this;
          $ === void 0 && ($ = V);
          for (var oe = arguments.length, le = Array(oe > 1 ? oe - 1 : 0), te = 1; te < oe; te++)
            le[te - 1] = arguments[te];
          return L.produce($, function(J) {
            var H;
            return (H = w).call.apply(H, [I, J].concat(le));
          });
        };
      }
      var _;
      if (typeof w != "function" && Ar(6), g !== void 0 && typeof g != "function" && Ar(7), Zo(R)) {
        var U = x1(E), k = h0(E, R, void 0), M = !0;
        try {
          _ = w(k), M = !1;
        } finally {
          M ? gy(U) : v0(U);
        }
        return typeof Promise < "u" && _ instanceof Promise ? _.then(function($) {
          return JE(U, g), e0($, U);
        }, function($) {
          throw gy(U), $;
        }) : (JE(U, g), e0(_, U));
      }
      if (!R || typeof R != "object") {
        if ((_ = w(R)) === void 0 && (_ = R), _ === oT && (_ = void 0), E.D && R0(_, !0), g) {
          var A = [], B = [];
          io("Patches").M(R, _, A, B), g(A, B);
        }
        return _;
      }
      Ar(21, R);
    }, this.produceWithPatches = function(R, w) {
      if (typeof R == "function")
        return function(_) {
          for (var U = arguments.length, k = Array(U > 1 ? U - 1 : 0), M = 1; M < U; M++)
            k[M - 1] = arguments[M];
          return E.produceWithPatches(_, function(A) {
            return R.apply(void 0, [A].concat(k));
          });
        };
      var g, V, L = E.produce(R, w, function(_, U) {
        g = _, V = U;
      });
      return typeof Promise < "u" && L instanceof Promise ? L.then(function(_) {
        return [_, g, V];
      }) : [L, g, V];
    }, typeof (v == null ? void 0 : v.useProxies) == "boolean" && this.setUseProxies(v.useProxies), typeof (v == null ? void 0 : v.autoFreeze) == "boolean" && this.setAutoFreeze(v.autoFreeze);
  }
  var p = c.prototype;
  return p.createDraft = function(v) {
    Zo(v) || Ar(8), cs(v) && (v = nN(v));
    var E = x1(this), R = h0(this, v, void 0);
    return R[jn].C = !0, v0(E), R;
  }, p.finishDraft = function(v, E) {
    var R = v && v[jn];
    ({}).NODE_ENV !== "production" && (R && R.C || Ar(9), R.I && Ar(10));
    var w = R.A;
    return JE(w, E), e0(void 0, w);
  }, p.setAutoFreeze = function(v) {
    this.D = v;
  }, p.setUseProxies = function(v) {
    v && !M1 && Ar(20), this.O = v;
  }, p.applyPatches = function(v, E) {
    var R;
    for (R = E.length - 1; R >= 0; R--) {
      var w = E[R];
      if (w.path.length === 0 && w.op === "replace") {
        v = w.value;
        break;
      }
    }
    R > -1 && (E = E.slice(R + 1));
    var g = io("Patches").$;
    return cs(v) ? g(v, E) : this.produce(v, function(V) {
      return g(V, E);
    });
  }, c;
}(), mi = new lN(), sT = mi.produce;
mi.produceWithPatches.bind(mi);
mi.setAutoFreeze.bind(mi);
mi.setUseProxies.bind(mi);
mi.applyPatches.bind(mi);
mi.createDraft.bind(mi);
mi.finishDraft.bind(mi);
function Ov(c) {
  "@babel/helpers - typeof";
  return Ov = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  }, Ov(c);
}
function sN(c, p) {
  if (Ov(c) !== "object" || c === null)
    return c;
  var v = c[Symbol.toPrimitive];
  if (v !== void 0) {
    var E = v.call(c, p || "default");
    if (Ov(E) !== "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (p === "string" ? String : Number)(c);
}
function cN(c) {
  var p = sN(c, "string");
  return Ov(p) === "symbol" ? p : String(p);
}
function fN(c, p, v) {
  return p = cN(p), p in c ? Object.defineProperty(c, p, {
    value: v,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[p] = v, c;
}
function A1(c, p) {
  var v = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(c);
    p && (E = E.filter(function(R) {
      return Object.getOwnPropertyDescriptor(c, R).enumerable;
    })), v.push.apply(v, E);
  }
  return v;
}
function z1(c) {
  for (var p = 1; p < arguments.length; p++) {
    var v = arguments[p] != null ? arguments[p] : {};
    p % 2 ? A1(Object(v), !0).forEach(function(E) {
      fN(c, E, v[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(v)) : A1(Object(v)).forEach(function(E) {
      Object.defineProperty(c, E, Object.getOwnPropertyDescriptor(v, E));
    });
  }
  return c;
}
function ga(c) {
  return "Minified Redux error #" + c + "; visit https://redux.js.org/Errors?code=" + c + " for the full message or use the non-minified dev environment for full errors. ";
}
var U1 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), r0 = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, gc = {
  INIT: "@@redux/INIT" + r0(),
  REPLACE: "@@redux/REPLACE" + r0(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + r0();
  }
};
function cT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  for (var p = c; Object.getPrototypeOf(p) !== null; )
    p = Object.getPrototypeOf(p);
  return Object.getPrototypeOf(c) === p;
}
function dN(c) {
  if (c === void 0)
    return "undefined";
  if (c === null)
    return "null";
  var p = typeof c;
  switch (p) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return p;
  }
  if (Array.isArray(c))
    return "array";
  if (hN(c))
    return "date";
  if (vN(c))
    return "error";
  var v = pN(c);
  switch (v) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return v;
  }
  return p.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function pN(c) {
  return typeof c.constructor == "function" ? c.constructor.name : null;
}
function vN(c) {
  return c instanceof Error || typeof c.message == "string" && c.constructor && typeof c.constructor.stackTraceLimit == "number";
}
function hN(c) {
  return c instanceof Date ? !0 : typeof c.toDateString == "function" && typeof c.getDate == "function" && typeof c.setDate == "function";
}
function yc(c) {
  var p = typeof c;
  return {}.NODE_ENV !== "production" && (p = dN(c)), p;
}
function fT(c, p, v) {
  var E;
  if (typeof p == "function" && typeof v == "function" || typeof v == "function" && typeof arguments[3] == "function")
    throw new Error({}.NODE_ENV === "production" ? ga(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof p == "function" && typeof v > "u" && (v = p, p = void 0), typeof v < "u") {
    if (typeof v != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(1) : "Expected the enhancer to be a function. Instead, received: '" + yc(v) + "'");
    return v(fT)(c, p);
  }
  if (typeof c != "function")
    throw new Error({}.NODE_ENV === "production" ? ga(2) : "Expected the root reducer to be a function. Instead, received: '" + yc(c) + "'");
  var R = c, w = p, g = [], V = g, L = !1;
  function _() {
    V === g && (V = g.slice());
  }
  function U() {
    if (L)
      throw new Error({}.NODE_ENV === "production" ? ga(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return w;
  }
  function k($) {
    if (typeof $ != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(4) : "Expected the listener to be a function. Instead, received: '" + yc($) + "'");
    if (L)
      throw new Error({}.NODE_ENV === "production" ? ga(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var I = !0;
    return _(), V.push($), function() {
      if (I) {
        if (L)
          throw new Error({}.NODE_ENV === "production" ? ga(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        I = !1, _();
        var le = V.indexOf($);
        V.splice(le, 1), g = null;
      }
    };
  }
  function M($) {
    if (!cT($))
      throw new Error({}.NODE_ENV === "production" ? ga(7) : "Actions must be plain objects. Instead, the actual type was: '" + yc($) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof $.type > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (L)
      throw new Error({}.NODE_ENV === "production" ? ga(9) : "Reducers may not dispatch actions.");
    try {
      L = !0, w = R(w, $);
    } finally {
      L = !1;
    }
    for (var I = g = V, oe = 0; oe < I.length; oe++) {
      var le = I[oe];
      le();
    }
    return $;
  }
  function A($) {
    if (typeof $ != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(10) : "Expected the nextReducer to be a function. Instead, received: '" + yc($));
    R = $, M({
      type: gc.REPLACE
    });
  }
  function B() {
    var $, I = k;
    return $ = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(le) {
        if (typeof le != "object" || le === null)
          throw new Error({}.NODE_ENV === "production" ? ga(11) : "Expected the observer to be an object. Instead, received: '" + yc(le) + "'");
        function te() {
          le.next && le.next(U());
        }
        te();
        var J = I(te);
        return {
          unsubscribe: J
        };
      }
    }, $[U1] = function() {
      return this;
    }, $;
  }
  return M({
    type: gc.INIT
  }), E = {
    dispatch: M,
    subscribe: k,
    getState: U,
    replaceReducer: A
  }, E[U1] = B, E;
}
function j1(c) {
  typeof console < "u" && typeof console.error == "function" && console.error(c);
  try {
    throw new Error(c);
  } catch {
  }
}
function mN(c, p, v, E) {
  var R = Object.keys(p), w = v && v.type === gc.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (R.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!cT(c))
    return "The " + w + ' has unexpected type of "' + yc(c) + '". Expected argument to be an object with the following ' + ('keys: "' + R.join('", "') + '"');
  var g = Object.keys(c).filter(function(V) {
    return !p.hasOwnProperty(V) && !E[V];
  });
  if (g.forEach(function(V) {
    E[V] = !0;
  }), !(v && v.type === gc.REPLACE) && g.length > 0)
    return "Unexpected " + (g.length > 1 ? "keys" : "key") + " " + ('"' + g.join('", "') + '" found in ' + w + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + R.join('", "') + '". Unexpected keys will be ignored.');
}
function yN(c) {
  Object.keys(c).forEach(function(p) {
    var v = c[p], E = v(void 0, {
      type: gc.INIT
    });
    if (typeof E > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(12) : 'The slice reducer for key "' + p + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof v(void 0, {
      type: gc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(13) : 'The slice reducer for key "' + p + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + gc.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function gN(c) {
  for (var p = Object.keys(c), v = {}, E = 0; E < p.length; E++) {
    var R = p[E];
    ({}).NODE_ENV !== "production" && typeof c[R] > "u" && j1('No reducer provided for key "' + R + '"'), typeof c[R] == "function" && (v[R] = c[R]);
  }
  var w = Object.keys(v), g;
  ({}).NODE_ENV !== "production" && (g = {});
  var V;
  try {
    yN(v);
  } catch (L) {
    V = L;
  }
  return function(_, U) {
    if (_ === void 0 && (_ = {}), V)
      throw V;
    if ({}.NODE_ENV !== "production") {
      var k = mN(_, v, U, g);
      k && j1(k);
    }
    for (var M = !1, A = {}, B = 0; B < w.length; B++) {
      var $ = w[B], I = v[$], oe = _[$], le = I(oe, U);
      if (typeof le > "u") {
        var te = U && U.type;
        throw new Error({}.NODE_ENV === "production" ? ga(14) : "When called with an action of type " + (te ? '"' + String(te) + '"' : "(unknown type)") + ', the slice reducer for key "' + $ + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      A[$] = le, M = M || le !== oe;
    }
    return M = M || w.length !== Object.keys(_).length, M ? A : _;
  };
}
function Cy() {
  for (var c = arguments.length, p = new Array(c), v = 0; v < c; v++)
    p[v] = arguments[v];
  return p.length === 0 ? function(E) {
    return E;
  } : p.length === 1 ? p[0] : p.reduce(function(E, R) {
    return function() {
      return E(R.apply(void 0, arguments));
    };
  });
}
function SN() {
  for (var c = arguments.length, p = new Array(c), v = 0; v < c; v++)
    p[v] = arguments[v];
  return function(E) {
    return function() {
      var R = E.apply(void 0, arguments), w = function() {
        throw new Error({}.NODE_ENV === "production" ? ga(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, g = {
        getState: R.getState,
        dispatch: function() {
          return w.apply(void 0, arguments);
        }
      }, V = p.map(function(L) {
        return L(g);
      });
      return w = Cy.apply(void 0, V)(R.dispatch), z1(z1({}, R), {}, {
        dispatch: w
      });
    };
  };
}
function dT(c) {
  var p = function(E) {
    var R = E.dispatch, w = E.getState;
    return function(g) {
      return function(V) {
        return typeof V == "function" ? V(R, w, c) : g(V);
      };
    };
  };
  return p;
}
var pT = dT();
pT.withExtraArgument = dT;
const P1 = pT;
var vT = globalThis && globalThis.__extends || function() {
  var c = function(p, v) {
    return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, R) {
      E.__proto__ = R;
    } || function(E, R) {
      for (var w in R)
        Object.prototype.hasOwnProperty.call(R, w) && (E[w] = R[w]);
    }, c(p, v);
  };
  return function(p, v) {
    if (typeof v != "function" && v !== null)
      throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
    c(p, v);
    function E() {
      this.constructor = p;
    }
    p.prototype = v === null ? Object.create(v) : (E.prototype = v.prototype, new E());
  };
}(), EN = globalThis && globalThis.__generator || function(c, p) {
  var v = { label: 0, sent: function() {
    if (w[0] & 1)
      throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, R, w, g;
  return g = { next: V(0), throw: V(1), return: V(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function V(_) {
    return function(U) {
      return L([_, U]);
    };
  }
  function L(_) {
    if (E)
      throw new TypeError("Generator is already executing.");
    for (; v; )
      try {
        if (E = 1, R && (w = _[0] & 2 ? R.return : _[0] ? R.throw || ((w = R.return) && w.call(R), 0) : R.next) && !(w = w.call(R, _[1])).done)
          return w;
        switch (R = 0, w && (_ = [_[0] & 2, w.value]), _[0]) {
          case 0:
          case 1:
            w = _;
            break;
          case 4:
            return v.label++, { value: _[1], done: !1 };
          case 5:
            v.label++, R = _[1], _ = [0];
            continue;
          case 7:
            _ = v.ops.pop(), v.trys.pop();
            continue;
          default:
            if (w = v.trys, !(w = w.length > 0 && w[w.length - 1]) && (_[0] === 6 || _[0] === 2)) {
              v = 0;
              continue;
            }
            if (_[0] === 3 && (!w || _[1] > w[0] && _[1] < w[3])) {
              v.label = _[1];
              break;
            }
            if (_[0] === 6 && v.label < w[1]) {
              v.label = w[1], w = _;
              break;
            }
            if (w && v.label < w[2]) {
              v.label = w[2], v.ops.push(_);
              break;
            }
            w[2] && v.ops.pop(), v.trys.pop();
            continue;
        }
        _ = p.call(c, v);
      } catch (U) {
        _ = [6, U], R = 0;
      } finally {
        E = w = 0;
      }
    if (_[0] & 5)
      throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}, cd = globalThis && globalThis.__spreadArray || function(c, p) {
  for (var v = 0, E = p.length, R = c.length; v < E; v++, R++)
    c[R] = p[v];
  return c;
}, CN = Object.defineProperty, bN = Object.defineProperties, RN = Object.getOwnPropertyDescriptors, F1 = Object.getOwnPropertySymbols, TN = Object.prototype.hasOwnProperty, wN = Object.prototype.propertyIsEnumerable, V1 = function(c, p, v) {
  return p in c ? CN(c, p, { enumerable: !0, configurable: !0, writable: !0, value: v }) : c[p] = v;
}, os = function(c, p) {
  for (var v in p || (p = {}))
    TN.call(p, v) && V1(c, v, p[v]);
  if (F1)
    for (var E = 0, R = F1(p); E < R.length; E++) {
      var v = R[E];
      wN.call(p, v) && V1(c, v, p[v]);
    }
  return c;
}, a0 = function(c, p) {
  return bN(c, RN(p));
}, _N = function(c, p, v) {
  return new Promise(function(E, R) {
    var w = function(L) {
      try {
        V(v.next(L));
      } catch (_) {
        R(_);
      }
    }, g = function(L) {
      try {
        V(v.throw(L));
      } catch (_) {
        R(_);
      }
    }, V = function(L) {
      return L.done ? E(L.value) : Promise.resolve(L.value).then(w, g);
    };
    V((v = v.apply(c, p)).next());
  });
}, xN = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Cy : Cy.apply(null, arguments);
};
function hT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  var p = Object.getPrototypeOf(c);
  if (p === null)
    return !0;
  for (var v = p; Object.getPrototypeOf(v) !== null; )
    v = Object.getPrototypeOf(v);
  return p === v;
}
var ON = function(c) {
  return c && typeof c.match == "function";
};
function ls(c, p) {
  function v() {
    for (var E = [], R = 0; R < arguments.length; R++)
      E[R] = arguments[R];
    if (p) {
      var w = p.apply(void 0, E);
      if (!w)
        throw new Error("prepareAction did not return an object");
      return os(os({
        type: c,
        payload: w.payload
      }, "meta" in w && { meta: w.meta }), "error" in w && { error: w.error });
    }
    return { type: c, payload: E[0] };
  }
  return v.toString = function() {
    return "" + c;
  }, v.type = c, v.match = function(E) {
    return E.type === c;
  }, v;
}
function DN(c) {
  return typeof c == "function" && "type" in c && ON(c);
}
function kN(c) {
  var p = c ? ("" + c).split("/") : [], v = p[p.length - 1] || "actionCreator";
  return 'Detected an action creator with type "' + (c || "unknown") + `" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(` + v + "())` instead of `dispatch(" + v + ")`. This is necessary even if the action has no payload.";
}
function NN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(E) {
        return function(R) {
          return E(R);
        };
      };
    };
  var p = c.isActionCreator, v = p === void 0 ? DN : p;
  return function() {
    return function(E) {
      return function(R) {
        return v(R) && console.warn(kN(R.type)), E(R);
      };
    };
  };
}
function mT(c, p) {
  var v = 0;
  return {
    measureTime: function(E) {
      var R = Date.now();
      try {
        return E();
      } finally {
        var w = Date.now();
        v += w - R;
      }
    },
    warnIfExceeded: function() {
      v > c && console.warn(p + " took " + v + "ms, which is more than the warning threshold of " + c + `ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var MN = (
  /** @class */
  function(c) {
    vT(p, c);
    function p() {
      for (var v = [], E = 0; E < arguments.length; E++)
        v[E] = arguments[E];
      var R = c.apply(this, v) || this;
      return Object.setPrototypeOf(R, p.prototype), R;
    }
    return Object.defineProperty(p, Symbol.species, {
      get: function() {
        return p;
      },
      enumerable: !1,
      configurable: !0
    }), p.prototype.concat = function() {
      for (var v = [], E = 0; E < arguments.length; E++)
        v[E] = arguments[E];
      return c.prototype.concat.apply(this, v);
    }, p.prototype.prepend = function() {
      for (var v = [], E = 0; E < arguments.length; E++)
        v[E] = arguments[E];
      return v.length === 1 && Array.isArray(v[0]) ? new (p.bind.apply(p, cd([void 0], v[0].concat(this))))() : new (p.bind.apply(p, cd([void 0], v.concat(this))))();
    }, p;
  }(Array)
), LN = (
  /** @class */
  function(c) {
    vT(p, c);
    function p() {
      for (var v = [], E = 0; E < arguments.length; E++)
        v[E] = arguments[E];
      var R = c.apply(this, v) || this;
      return Object.setPrototypeOf(R, p.prototype), R;
    }
    return Object.defineProperty(p, Symbol.species, {
      get: function() {
        return p;
      },
      enumerable: !1,
      configurable: !0
    }), p.prototype.concat = function() {
      for (var v = [], E = 0; E < arguments.length; E++)
        v[E] = arguments[E];
      return c.prototype.concat.apply(this, v);
    }, p.prototype.prepend = function() {
      for (var v = [], E = 0; E < arguments.length; E++)
        v[E] = arguments[E];
      return v.length === 1 && Array.isArray(v[0]) ? new (p.bind.apply(p, cd([void 0], v[0].concat(this))))() : new (p.bind.apply(p, cd([void 0], v.concat(this))))();
    }, p;
  }(Array)
);
function y0(c) {
  return Zo(c) ? sT(c, function() {
  }) : c;
}
var AN = {}.NODE_ENV === "production", H1 = "Invariant failed";
function I1(c, p) {
  if (!c)
    throw AN ? new Error(H1) : new Error(H1 + ": " + (p || ""));
}
function zN(c, p, v, E) {
  return JSON.stringify(c, UN(p, E), v);
}
function UN(c, p) {
  var v = [], E = [];
  return p || (p = function(R, w) {
    return v[0] === w ? "[Circular ~]" : "[Circular ~." + E.slice(0, v.indexOf(w)).join(".") + "]";
  }), function(R, w) {
    if (v.length > 0) {
      var g = v.indexOf(this);
      ~g ? v.splice(g + 1) : v.push(this), ~g ? E.splice(g, 1 / 0, R) : E.push(R), ~v.indexOf(w) && (w = p.call(this, R, w));
    } else
      v.push(w);
    return c == null ? w : c.call(this, R, w);
  };
}
function jN(c) {
  return typeof c != "object" || c == null || Object.isFrozen(c);
}
function PN(c, p, v) {
  var E = yT(c, p, v);
  return {
    detectMutations: function() {
      return gT(c, p, E, v);
    }
  };
}
function yT(c, p, v, E, R) {
  p === void 0 && (p = []), E === void 0 && (E = ""), R === void 0 && (R = /* @__PURE__ */ new Set());
  var w = { value: v };
  if (!c(v) && !R.has(v)) {
    R.add(v), w.children = {};
    for (var g in v) {
      var V = E ? E + "." + g : g;
      p.length && p.indexOf(V) !== -1 || (w.children[g] = yT(c, p, v[g], V));
    }
  }
  return w;
}
function gT(c, p, v, E, R, w) {
  p === void 0 && (p = []), R === void 0 && (R = !1), w === void 0 && (w = "");
  var g = v ? v.value : void 0, V = g === E;
  if (R && !V && !Number.isNaN(E))
    return { wasMutated: !0, path: w };
  if (c(g) || c(E))
    return { wasMutated: !1 };
  var L = {};
  for (var _ in v.children)
    L[_] = !0;
  for (var _ in E)
    L[_] = !0;
  var U = p.length > 0, k = function(A) {
    var B = w ? w + "." + A : A;
    if (U) {
      var $ = p.some(function(oe) {
        return oe instanceof RegExp ? oe.test(B) : B === oe;
      });
      if ($)
        return "continue";
    }
    var I = gT(c, p, v.children[A], E[A], V, B);
    if (I.wasMutated)
      return { value: I };
  };
  for (var _ in L) {
    var M = k(_);
    if (typeof M == "object")
      return M.value;
  }
  return { wasMutated: !1 };
}
function FN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(L) {
        return function(_) {
          return L(_);
        };
      };
    };
  var p = c.isImmutable, v = p === void 0 ? jN : p, E = c.ignoredPaths, R = c.warnAfter, w = R === void 0 ? 32 : R, g = c.ignore;
  E = E || g;
  var V = PN.bind(null, v, E);
  return function(L) {
    var _ = L.getState, U = _(), k = V(U), M;
    return function(A) {
      return function(B) {
        var $ = mT(w, "ImmutableStateInvariantMiddleware");
        $.measureTime(function() {
          U = _(), M = k.detectMutations(), k = V(U), I1(!M.wasMutated, "A state mutation was detected between dispatches, in the path '" + (M.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var I = A(B);
        return $.measureTime(function() {
          U = _(), M = k.detectMutations(), k = V(U), M.wasMutated && I1(!M.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (M.path || "") + ". Take a look at the reducer(s) handling the action " + zN(B) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        }), $.warnIfExceeded(), I;
      };
    };
  };
}
function ST(c) {
  var p = typeof c;
  return c == null || p === "string" || p === "boolean" || p === "number" || Array.isArray(c) || hT(c);
}
function g0(c, p, v, E, R, w) {
  p === void 0 && (p = ""), v === void 0 && (v = ST), R === void 0 && (R = []);
  var g;
  if (!v(c))
    return {
      keyPath: p || "<root>",
      value: c
    };
  if (typeof c != "object" || c === null || w != null && w.has(c))
    return !1;
  for (var V = E != null ? E(c) : Object.entries(c), L = R.length > 0, _ = function(I, oe) {
    var le = p ? p + "." + I : I;
    if (L) {
      var te = R.some(function(J) {
        return J instanceof RegExp ? J.test(le) : le === J;
      });
      if (te)
        return "continue";
    }
    if (!v(oe))
      return { value: {
        keyPath: le,
        value: oe
      } };
    if (typeof oe == "object" && (g = g0(oe, le, v, E, R, w), g))
      return { value: g };
  }, U = 0, k = V; U < k.length; U++) {
    var M = k[U], A = M[0], B = M[1], $ = _(A, B);
    if (typeof $ == "object")
      return $.value;
  }
  return w && ET(c) && w.add(c), !1;
}
function ET(c) {
  if (!Object.isFrozen(c))
    return !1;
  for (var p = 0, v = Object.values(c); p < v.length; p++) {
    var E = v[p];
    if (!(typeof E != "object" || E === null) && !ET(E))
      return !1;
  }
  return !0;
}
function VN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(te) {
        return function(J) {
          return te(J);
        };
      };
    };
  var p = c.isSerializable, v = p === void 0 ? ST : p, E = c.getEntries, R = c.ignoredActions, w = R === void 0 ? [] : R, g = c.ignoredActionPaths, V = g === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : g, L = c.ignoredPaths, _ = L === void 0 ? [] : L, U = c.warnAfter, k = U === void 0 ? 32 : U, M = c.ignoreState, A = M === void 0 ? !1 : M, B = c.ignoreActions, $ = B === void 0 ? !1 : B, I = c.disableCache, oe = I === void 0 ? !1 : I, le = !oe && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
  return function(te) {
    return function(J) {
      return function(H) {
        var de = J(H), ge = mT(k, "SerializableStateInvariantMiddleware");
        return !$ && !(w.length && w.indexOf(H.type) !== -1) && ge.measureTime(function() {
          var Ye = g0(H, "", v, E, V, le);
          if (Ye) {
            var tt = Ye.keyPath, Ze = Ye.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + tt + "`. Value:", Ze, `
Take a look at the logic that dispatched this action: `, H, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
          }
        }), A || (ge.measureTime(function() {
          var Ye = te.getState(), tt = g0(Ye, "", v, E, _, le);
          if (tt) {
            var Ze = tt.keyPath, Ue = tt.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + Ze + "`. Value:", Ue, `
Take a look at the reducer(s) handling this action type: ` + H.type + `.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
          }
        }), ge.warnIfExceeded()), de;
      };
    };
  };
}
function yy(c) {
  return typeof c == "boolean";
}
function HN() {
  return function(p) {
    return IN(p);
  };
}
function IN(c) {
  c === void 0 && (c = {});
  var p = c.thunk, v = p === void 0 ? !0 : p, E = c.immutableCheck, R = E === void 0 ? !0 : E, w = c.serializableCheck, g = w === void 0 ? !0 : w, V = c.actionCreatorCheck, L = V === void 0 ? !0 : V, _ = new MN();
  if (v && (yy(v) ? _.push(P1) : _.push(P1.withExtraArgument(v.extraArgument))), {}.NODE_ENV !== "production") {
    if (R) {
      var U = {};
      yy(R) || (U = R), _.unshift(FN(U));
    }
    if (g) {
      var k = {};
      yy(g) || (k = g), _.push(VN(k));
    }
    if (L) {
      var M = {};
      yy(L) || (M = L), _.unshift(NN(M));
    }
  }
  return _;
}
var i0 = {}.NODE_ENV === "production";
function BN(c) {
  var p = HN(), v = c || {}, E = v.reducer, R = E === void 0 ? void 0 : E, w = v.middleware, g = w === void 0 ? p() : w, V = v.devTools, L = V === void 0 ? !0 : V, _ = v.preloadedState, U = _ === void 0 ? void 0 : _, k = v.enhancers, M = k === void 0 ? void 0 : k, A;
  if (typeof R == "function")
    A = R;
  else if (hT(R))
    A = gN(R);
  else
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var B = g;
  if (typeof B == "function" && (B = B(p), !i0 && !Array.isArray(B)))
    throw new Error("when using a middleware builder function, an array of middleware must be returned");
  if (!i0 && B.some(function(J) {
    return typeof J != "function";
  }))
    throw new Error("each middleware provided to configureStore must be a function");
  var $ = SN.apply(void 0, B), I = Cy;
  L && (I = xN(os({
    trace: !i0
  }, typeof L == "object" && L)));
  var oe = new LN($), le = oe;
  Array.isArray(M) ? le = cd([$], M) : typeof M == "function" && (le = M(oe));
  var te = I.apply(void 0, le);
  return fT(A, U, te);
}
function CT(c) {
  var p = {}, v = [], E, R = {
    addCase: function(w, g) {
      if ({}.NODE_ENV !== "production") {
        if (v.length > 0)
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (E)
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      var V = typeof w == "string" ? w : w.type;
      if (!V)
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      if (V in p)
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      return p[V] = g, R;
    },
    addMatcher: function(w, g) {
      if ({}.NODE_ENV !== "production" && E)
        throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return v.push({ matcher: w, reducer: g }), R;
    },
    addDefaultCase: function(w) {
      if ({}.NODE_ENV !== "production" && E)
        throw new Error("`builder.addDefaultCase` can only be called once");
      return E = w, R;
    }
  };
  return c(R), [p, v, E];
}
function $N(c) {
  return typeof c == "function";
}
var B1 = !1;
function YN(c, p, v, E) {
  v === void 0 && (v = []), {}.NODE_ENV !== "production" && typeof p == "object" && (B1 || (B1 = !0, console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer")));
  var R = typeof p == "function" ? CT(p) : [p, v, E], w = R[0], g = R[1], V = R[2], L;
  if ($N(c))
    L = function() {
      return y0(c());
    };
  else {
    var _ = y0(c);
    L = function() {
      return _;
    };
  }
  function U(k, M) {
    k === void 0 && (k = L());
    var A = cd([
      w[M.type]
    ], g.filter(function(B) {
      var $ = B.matcher;
      return $(M);
    }).map(function(B) {
      var $ = B.reducer;
      return $;
    }));
    return A.filter(function(B) {
      return !!B;
    }).length === 0 && (A = [V]), A.reduce(function(B, $) {
      if ($)
        if (cs(B)) {
          var I = B, oe = $(I, M);
          return oe === void 0 ? B : oe;
        } else {
          if (Zo(B))
            return sT(B, function(le) {
              return $(le, M);
            });
          var oe = $(B, M);
          if (oe === void 0) {
            if (B === null)
              return B;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return oe;
        }
      return B;
    }, k);
  }
  return U.getInitialState = L, U;
}
var $1 = !1;
function WN(c, p) {
  return c + "/" + p;
}
function bT(c) {
  var p = c.name;
  if (!p)
    throw new Error("`name` is a required option for createSlice");
  typeof process < "u" && {}.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
  var v = typeof c.initialState == "function" ? c.initialState : y0(c.initialState), E = c.reducers || {}, R = Object.keys(E), w = {}, g = {}, V = {};
  R.forEach(function(U) {
    var k = E[U], M = WN(p, U), A, B;
    "reducer" in k ? (A = k.reducer, B = k.prepare) : A = k, w[U] = A, g[M] = A, V[U] = B ? ls(M, B) : ls(M);
  });
  function L() {
    ({}).NODE_ENV !== "production" && typeof c.extraReducers == "object" && ($1 || ($1 = !0, console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice")));
    var U = typeof c.extraReducers == "function" ? CT(c.extraReducers) : [c.extraReducers], k = U[0], M = k === void 0 ? {} : k, A = U[1], B = A === void 0 ? [] : A, $ = U[2], I = $ === void 0 ? void 0 : $, oe = os(os({}, M), g);
    return YN(v, function(le) {
      for (var te in oe)
        le.addCase(te, oe[te]);
      for (var J = 0, H = B; J < H.length; J++) {
        var de = H[J];
        le.addMatcher(de.matcher, de.reducer);
      }
      I && le.addDefaultCase(I);
    });
  }
  var _;
  return {
    name: p,
    reducer: function(U, k) {
      return _ || (_ = L()), _(U, k);
    },
    actions: V,
    caseReducers: w,
    getInitialState: function() {
      return _ || (_ = L()), _.getInitialState();
    }
  };
}
var QN = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", GN = function(c) {
  c === void 0 && (c = 21);
  for (var p = "", v = c; v--; )
    p += QN[Math.random() * 64 | 0];
  return p;
}, qN = [
  "name",
  "message",
  "stack",
  "code"
], u0 = (
  /** @class */
  function() {
    function c(p, v) {
      this.payload = p, this.meta = v;
    }
    return c;
  }()
), Y1 = (
  /** @class */
  function() {
    function c(p, v) {
      this.payload = p, this.meta = v;
    }
    return c;
  }()
), KN = function(c) {
  if (typeof c == "object" && c !== null) {
    for (var p = {}, v = 0, E = qN; v < E.length; v++) {
      var R = E[v];
      typeof c[R] == "string" && (p[R] = c[R]);
    }
    return p;
  }
  return { message: String(c) };
};
(function() {
  function c(p, v, E) {
    var R = ls(p + "/fulfilled", function(U, k, M, A) {
      return {
        payload: U,
        meta: a0(os({}, A || {}), {
          arg: M,
          requestId: k,
          requestStatus: "fulfilled"
        })
      };
    }), w = ls(p + "/pending", function(U, k, M) {
      return {
        payload: void 0,
        meta: a0(os({}, M || {}), {
          arg: k,
          requestId: U,
          requestStatus: "pending"
        })
      };
    }), g = ls(p + "/rejected", function(U, k, M, A, B) {
      return {
        payload: A,
        error: (E && E.serializeError || KN)(U || "Rejected"),
        meta: a0(os({}, B || {}), {
          arg: M,
          requestId: k,
          rejectedWithValue: !!A,
          requestStatus: "rejected",
          aborted: (U == null ? void 0 : U.name) === "AbortError",
          condition: (U == null ? void 0 : U.name) === "ConditionError"
        })
      };
    }), V = !1, L = typeof AbortController < "u" ? AbortController : (
      /** @class */
      function() {
        function U() {
          this.signal = {
            aborted: !1,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return !1;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        return U.prototype.abort = function() {
          ({}).NODE_ENV !== "production" && (V || (V = !0, console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.")));
        }, U;
      }()
    );
    function _(U) {
      return function(k, M, A) {
        var B = E != null && E.idGenerator ? E.idGenerator(U) : GN(), $ = new L(), I;
        function oe(te) {
          I = te, $.abort();
        }
        var le = function() {
          return _N(this, null, function() {
            var te, J, H, de, ge, Ye, tt;
            return EN(this, function(Ze) {
              switch (Ze.label) {
                case 0:
                  return Ze.trys.push([0, 4, , 5]), de = (te = E == null ? void 0 : E.condition) == null ? void 0 : te.call(E, U, { getState: M, extra: A }), ZN(de) ? [4, de] : [3, 2];
                case 1:
                  de = Ze.sent(), Ze.label = 2;
                case 2:
                  if (de === !1 || $.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  return ge = new Promise(function(Ue, st) {
                    return $.signal.addEventListener("abort", function() {
                      return st({
                        name: "AbortError",
                        message: I || "Aborted"
                      });
                    });
                  }), k(w(B, U, (J = E == null ? void 0 : E.getPendingMeta) == null ? void 0 : J.call(E, { requestId: B, arg: U }, { getState: M, extra: A }))), [4, Promise.race([
                    ge,
                    Promise.resolve(v(U, {
                      dispatch: k,
                      getState: M,
                      extra: A,
                      requestId: B,
                      signal: $.signal,
                      abort: oe,
                      rejectWithValue: function(Ue, st) {
                        return new u0(Ue, st);
                      },
                      fulfillWithValue: function(Ue, st) {
                        return new Y1(Ue, st);
                      }
                    })).then(function(Ue) {
                      if (Ue instanceof u0)
                        throw Ue;
                      return Ue instanceof Y1 ? R(Ue.payload, B, U, Ue.meta) : R(Ue, B, U);
                    })
                  ])];
                case 3:
                  return H = Ze.sent(), [3, 5];
                case 4:
                  return Ye = Ze.sent(), H = Ye instanceof u0 ? g(null, B, U, Ye.payload, Ye.meta) : g(Ye, B, U), [3, 5];
                case 5:
                  return tt = E && !E.dispatchConditionRejection && g.match(H) && H.meta.condition, tt || k(H), [2, H];
              }
            });
          });
        }();
        return Object.assign(le, {
          abort: oe,
          requestId: B,
          arg: U,
          unwrap: function() {
            return le.then(XN);
          }
        });
      };
    }
    return Object.assign(_, {
      pending: w,
      rejected: g,
      fulfilled: R,
      typePrefix: p
    });
  }
  return c.withTypes = function() {
    return c;
  }, c;
})();
function XN(c) {
  if (c.meta && c.meta.rejectedWithValue)
    throw c.payload;
  if (c.error)
    throw c.error;
  return c.payload;
}
function ZN(c) {
  return c !== null && typeof c == "object" && typeof c.then == "function";
}
var _0 = "listenerMiddleware";
ls(_0 + "/add");
ls(_0 + "/removeAll");
ls(_0 + "/remove");
var W1;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
rN();
const JN = [], RT = bT({
  name: "fields",
  initialState: JN,
  reducers: {
    registerForm: (c, p) => {
      const { formInstance: v, formId: E } = p.payload;
      c[v] = {
        fields: {},
        meta: {
          formId: E,
          isLoading: !1,
          isSubmitting: !1,
          step: 1
        }
      };
    },
    updateField: (c, p) => {
      const {
        formInstance: v,
        name: E,
        value: R
      } = p.payload;
      c[v].fields[E] = {
        ...c[v].fields[E],
        value: R
      };
    },
    updateFieldErrors: (c, p) => {
      const {
        formInstance: v,
        name: E,
        errors: R
      } = p.payload;
      c[v].fields[E] = {
        ...c[v].fields[E],
        errors: R
      };
    },
    updateMeta: (c, p) => {
      const {
        formInstance: v,
        name: E,
        value: R
      } = p.payload;
      c[v].meta[E] = R;
    }
  }
}), {
  registerForm: eM,
  updateField: uo,
  updateFieldErrors: Q1,
  updateMeta: tM
} = RT.actions, nM = RT.reducer, rM = (c) => (p) => p.forms[c], aM = (c) => (p) => p.forms[c].meta.step, Dv = (c) => (p) => p.forms[c].fields, iM = {
  environment: "production",
  errors: {}
}, TT = bT({
  name: "misc",
  initialState: iM,
  reducers: {
    registerErrors: (c, p) => {
      const { errors: v } = p.payload;
      c.errors = { ...v };
    },
    setEnvironment: (c, p) => {
      const { env: v } = p.payload;
      c.environment = v;
    }
  }
}), {
  registerErrors: uM
} = TT.actions, oM = TT.reducer, lM = () => (c) => c.misc.errors;
function wT(c, p) {
  if (!p || p.length === 0)
    return !0;
  let v = p[0].logicalOperator === "and";
  for (const E of p) {
    if (!c[E.field])
      continue;
    const R = c[E.field].value;
    let w;
    switch (E.comparisonOperator) {
      case "=":
        w = R == E.value;
        break;
      case "!=":
        w = R !== E.value;
        break;
      case ">=":
        w = R >= E.value;
        break;
      case "<=":
        w = R <= E.value;
        break;
      case ">":
        w = R > E.value;
        break;
      case "<":
        w = R < E.value;
        break;
      default:
        console.warn(`Unsupported operator: ${E.comparisonOperator}`), w = !1;
        break;
    }
    E.logicalOperator === "and" ? v = v && w : E.logicalOperator === "or" && (v = v || w);
  }
  return v;
}
function sM(c) {
  switch (c) {
    case "stage":
    case "staging":
      return "http://fundy-stage-be.do.dekodes.no";
    case "development":
    case "develop":
    case "local":
      return "http://localhost";
    default:
      return "https://fundy-stage-be.do.dekodes.no";
  }
}
function Pn(c) {
  return c.map((p) => p ? "dkf_" + p : !1).filter(Boolean).join(" ");
}
function cM(c, p) {
  return new CustomEvent(c, { detail: p });
}
function fM(c, p) {
  c.dispatchEvent(p);
}
function dM(c, p, v) {
  return uo({ formInstance: c, name: p, value: v });
}
function pM(c, p, v) {
  return tM({ formInstance: c, name: p, value: v });
}
function vM(c) {
  return () => {
  };
}
const G1 = {
  update_field: dM,
  update_meta: pM,
  submit: vM
};
function hM(c) {
  const {
    formInstance: p,
    name: v,
    label: E,
    type: R,
    events: w,
    disabled: g = !1,
    ...V
  } = c, L = ds(), _ = Pn([
    "button-container",
    "button-container--" + v
  ]), U = Pn([
    "button",
    "button--" + v,
    "button--" + (c.buttonType || "primary")
  ]), k = () => {
    w && w.forEach((M) => {
      if (M.mapping)
        for (const A in M.mapping) {
          const B = M.mapping[A];
          L(G1[M.name](p, A, B));
        }
      else
        L(G1[M.name](p));
    });
  };
  return /* @__PURE__ */ ht.jsx("div", { className: _, children: /* @__PURE__ */ ht.jsx(
    "button",
    {
      type: R,
      className: U,
      onClick: k,
      children: E
    },
    v
  ) });
}
function mM(c) {
  const {
    formInstance: p,
    name: v,
    label: E,
    options: R,
    defaultValue: w,
    visibilityConditions: g,
    validationRules: V,
    helpText: L,
    emailTag: _,
    storeAsDonorMeta: U,
    showInReceipt: k,
    nodeType: M,
    childNodes: A,
    disabled: B = !1,
    ...$
  } = c, I = fs(Dv(p)), oe = ds(), le = wT(I, g);
  if (dn.useEffect(() => {
    le && oe(uo({ formInstance: p, name: v, value: w }));
  }, [le]), I[v] === void 0 || !le)
    return null;
  const te = Pn([
    "input",
    "input-checkbox",
    "input-checkbox--" + v
  ]), J = Pn([
    "input--option"
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: te, children: R ? R.map((H) => /* @__PURE__ */ ht.jsxs("div", { className: J, children: [
    /* @__PURE__ */ ht.jsx(
      "input",
      {
        id: p + v + H.value,
        name: v,
        type: "checkbox",
        value: H.value,
        checked: I[v].value === H.value,
        onChange: () => oe(uo({ formInstance: p, name: v, value: H.value }))
      },
      v + H.value
    ),
    /* @__PURE__ */ ht.jsx("label", { htmlFor: p + v + H.value, children: H.label })
  ] })) : /* @__PURE__ */ ht.jsxs(ht.Fragment, { children: [
    /* @__PURE__ */ ht.jsx(
      "input",
      {
        id: p + v,
        name: v,
        type: "checkbox",
        value: "true",
        checked: I[v].value == "true",
        onChange: () => oe(uo({ formInstance: p, name: v, value: I[v].value == "true" ? "false" : "true" }))
      },
      v
    ),
    /* @__PURE__ */ ht.jsx("label", { htmlFor: p + v, children: E })
  ] }) });
}
const yM = (c, p) => {
  const v = c.split(":"), E = parseInt(v[1]);
  if (typeof p == "string") {
    if (p.length >= E)
      return !0;
  } else if (typeof p == "number") {
    if (p >= E)
      return !0;
  } else
    return !1;
  return !1;
}, gM = (c, p) => {
  const v = c.split(":"), E = parseInt(v[1]);
  if (typeof p == "string") {
    if (p.length <= E)
      return !0;
  } else if (typeof p == "number") {
    if (p <= E)
      return !0;
  } else
    return !1;
  return !1;
}, SM = (c, p) => typeof p == "string", EM = (c, p) => Number.isInteger(p), CM = (c, p) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(p), bM = (c, p) => p != null && p.trim() !== "", RM = {
  min: yM,
  max: gM,
  string: SM,
  numeric: EM,
  required: bM,
  email: CM
};
function _T(c, p, v) {
  const E = fs(lM()), R = ds();
  return { setValidateField: (g) => {
    if (!v || v.length === 0)
      return;
    let V = [];
    for (const L of v) {
      const _ = L.split(":"), U = RM[_[0]];
      if (!U) {
        console.error(`Validator not found for rule: ${_[0]}`);
        continue;
      }
      if (!U(L, g) && E[_[0]]) {
        let M = E[_[0]];
        M.includes(":attribute") && (M = M.replace(":attribute", p)), M.includes(":max") && (M = M.replace(":max", _[1])), M.includes(":min") && (M = M.replace(":min", _[1])), V.push(M);
      }
    }
    V.length > 0 && R(Q1({
      formInstance: c,
      name: p,
      errors: V
    })), R(Q1({
      formInstance: c,
      name: p,
      errors: V
    }));
  } };
}
function TM(c) {
  const {
    formInstance: p,
    name: v,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    allowMultiple: V,
    helpText: L,
    emailTag: _,
    storeAsDonorMeta: U,
    showInReceipt: k,
    nodeType: M,
    childNodes: A,
    disabled: B = !1,
    ...$
  } = c, [I, oe] = dn.useReducer(
    (Ae, $e) => ({ ...Ae, ...$e }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: le,
    isInvalid: te
  } = I, J = fs(Dv(p)), H = ds(), de = J[v].errors, { setValidateField: ge } = _T(p, v, g), Ye = Pn([
    "input_wrapper",
    "input_wrapper--" + v,
    "input_wrapper-type--" + M
  ]), tt = Pn([
    "input",
    "input--" + v,
    le && "input--active",
    de && de.length > 0 && "input--invalid"
  ]), Ze = (Ae) => {
    Ae.preventDefault(), H(uo({ formInstance: p, name: v, value: Ae.target.value }));
    let $e = !1;
    Ae.target.value.length > 0 && ($e = !0), ge(Ae.target.value), oe({
      isActive: $e
    });
  }, Ue = Pn([
    "input--label"
  ]), st = Pn([
    "input--field"
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: Ye, children: /* @__PURE__ */ ht.jsxs("div", { className: tt, children: [
    E && /* @__PURE__ */ ht.jsx("label", { className: Ue, htmlFor: v, children: E }),
    /* @__PURE__ */ ht.jsx(
      "input",
      {
        id: v,
        className: st,
        disabled: B,
        autoComplete: "email",
        ...$,
        onChange: Ze
      }
    ),
    de && de.length !== 0 && /* @__PURE__ */ ht.jsx(ht.Fragment, { children: de.map((Ae, $e) => /* @__PURE__ */ ht.jsx("div", { className: Pn(["input--error"]), children: Ae }, $e)) })
  ] }) });
}
function wM(c) {
  const {
    formInstance: p,
    html: v,
    name: E,
    label: R,
    defaultValue: w,
    visibilityConditions: g,
    helpText: V,
    emailTag: L,
    storeAsDonorMeta: _,
    showInReceipt: U,
    nodeType: k,
    childNodes: M,
    disabled: A = !1,
    ...B
  } = c;
  return fs(Dv(p)), ds(), /* @__PURE__ */ ht.jsx("div", { dangerouslySetInnerHTML: { __html: v } });
}
function _M(c) {
  const {
    formInstance: p,
    name: v,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    helpText: V,
    emailTag: L,
    storeAsDonorMeta: _,
    showInReceipt: U,
    nodeType: k,
    childNodes: M,
    disabled: A = !1,
    ...B
  } = c, [$, I] = dn.useReducer(
    (Ue, st) => ({ ...Ue, ...st }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: oe,
    isInvalid: le
  } = $, te = fs(Dv(p)), J = ds(), H = te[v].errors, { setValidateField: de } = _T(p, v, g), ge = Pn([
    "input_wrapper",
    "input_wrapper--" + v,
    "input_wrapper-type--" + k
  ]), Ye = Pn([
    "input",
    "input--" + v,
    "input-type--" + k,
    oe && "input--active",
    H && H.length > 0 && "input--invalid"
  ]), tt = (Ue) => {
    Ue.preventDefault(), J(uo({ formInstance: p, name: v, value: Ue.target.value }));
    let st = !1;
    Ue.target.value.length > 0 && (st = !0), de(Ue.target.value), I({
      isActive: st
    });
  }, Ze = Pn([
    "input--field"
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: ge, children: /* @__PURE__ */ ht.jsxs("div", { className: Ye, children: [
    E && /* @__PURE__ */ ht.jsx("label", { className: Pn(["input--label"]), htmlFor: v, children: E }),
    /* @__PURE__ */ ht.jsx(
      "input",
      {
        id: v,
        className: Ze,
        disabled: A,
        ...B,
        value: te[v].value,
        onChange: tt
      }
    ),
    H && H.length !== 0 && /* @__PURE__ */ ht.jsx(ht.Fragment, { children: H.map((Ue, st) => /* @__PURE__ */ ht.jsx("div", { className: Pn(["input--error"]), children: Ue }, st)) })
  ] }) });
}
const xT = BN({
  reducer: {
    misc: oM,
    forms: nM
  }
});
function xM({ childNodes: c, formInstance: p }) {
  const v = (w) => {
    w.preventDefault();
    const g = xT.getState().forms[p], V = g.fields, L = g.meta, _ = {
      form_id: L.formId,
      payment_method: L.payment_method
    };
    for (const U in V)
      if (V.hasOwnProperty(U)) {
        const k = V[U];
        k.value && (_[U] = k.value);
      }
    E(_).then((U) => {
      U.url && (window.location.href = U.url);
    });
  };
  async function E(w) {
    return await (await fetch("https://fundy.dekodes.no/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(w)
    })).json();
  }
  const R = Pn([
    "form",
    "form--" + p
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: Pn(["form_wrapper"]), children: /* @__PURE__ */ ht.jsx(
    "form",
    {
      className: R,
      onSubmit: v,
      noValidate: !0,
      children: c
    }
  ) });
}
function OM({ childNodes: c, name: p }) {
  const v = Pn([
    "group",
    "group--" + p
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: v, children: c });
}
function DM(c) {
  const {
    formInstance: p,
    name: v,
    label: E,
    options: R,
    defaultValue: w,
    visibilityConditions: g,
    validationRules: V,
    helpText: L,
    emailTag: _,
    storeAsDonorMeta: U,
    showInReceipt: k,
    nodeType: M,
    childNodes: A,
    disabled: B = !1,
    ...$
  } = c, I = fs(Dv(p)), oe = ds(), le = Pn([
    "input",
    "input-radio",
    "input-radio--" + v
  ]), te = Pn([
    "input--option"
  ]);
  return dn.useEffect(() => {
    R && !R.some((J) => J.value === I[v].value) && oe(uo({ formInstance: p, name: v, value: w }));
  }), /* @__PURE__ */ ht.jsx("div", { className: le, children: R ? R.map((J) => /* @__PURE__ */ ht.jsxs("div", { className: te, children: [
    /* @__PURE__ */ ht.jsx(
      "input",
      {
        id: p + v + J.value,
        name: v,
        type: "radio",
        value: J.value,
        checked: I[v].value === J.value,
        onChange: () => oe(uo({ formInstance: p, name: v, value: J.value }))
      },
      v + J.value
    ),
    /* @__PURE__ */ ht.jsx("label", { htmlFor: p + v + J.value, children: J.label })
  ] })) : /* @__PURE__ */ ht.jsxs(ht.Fragment, { children: [
    /* @__PURE__ */ ht.jsx(
      "input",
      {
        id: p + v,
        name: v,
        type: "radio",
        value: "true",
        checked: I[v].value === !0,
        onChange: () => oe(uo({ formInstance: p, name: v, value: I[v].value !== !0 }))
      },
      v
    ),
    /* @__PURE__ */ ht.jsx("label", { htmlFor: p + v, children: E })
  ] }) });
}
function kM({ childNodes: c }) {
  const p = Pn([
    "section"
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: p, children: c });
}
function NM({ formInstance: c, childNodes: p }) {
  const v = fs(aM(c)), E = Pn([
    "steps"
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: E, children: p[v - 1] });
}
function MM({ childNodes: c }) {
  const p = Pn([
    "step"
  ]);
  return /* @__PURE__ */ ht.jsx("div", { className: p, children: c });
}
const LM = {
  button: hM,
  checkbox: mM,
  email: TM,
  html: wM,
  text: _M,
  group: OM,
  radio: DM,
  section: kM,
  steps: NM,
  step: MM,
  form: xM
}, AM = (c) => [
  "text",
  "email",
  "phone",
  "checkbox",
  "radio",
  "hidden"
].includes(c.nodeType);
function zM({ formInstance: c, formId: p, env: v }) {
  const E = fs(rM(c)), R = ds(), [w, g] = dn.useReducer(
    (A, B) => ({ ...A, ...B }),
    {
      isLoading: !0,
      isInitialized: !1,
      config: null
    }
  ), {
    isLoading: V,
    isInitialized: L,
    config: _,
    error: U
  } = w;
  dn.useEffect(() => {
    const A = cM("fundyFormLoaded", { detail: { formInstance: c } });
    fM(document, A);
  }, []), dn.useEffect(() => {
    UM(p, v ?? "production").then((A) => {
      A.config && g({
        isLoading: !1,
        config: JSON.parse(A.config)
      }), A.errors && R(uM({ errors: A.errors })), g({
        isLoading: !1,
        error: ""
      });
    }), R(eM({ formInstance: c, formId: p, step: 0 })), V === !1 && L === !1 && (k(_, c), g({ isInitialized: !0 }));
  }, [c, V]);
  const k = (A, B) => {
    AM(A) && R(uo({ formInstance: B, name: A.name, value: A.defaultValue })), A.nodes && A.nodes.map(($) => k($, B));
  }, M = (A, B) => {
    let $ = null;
    if ($ = LM[A.nodeType], !$ || !wT(E.fields, A.visibilityConditions))
      return null;
    const I = A.nodes ? A.nodes.map((oe) => M(oe, B)) : null;
    return /* @__PURE__ */ ht.jsx($, { formInstance: B, childNodes: I, ...A }, A.name);
  };
  return E === void 0 ? null : V || L === !1 ? /* @__PURE__ */ ht.jsx("div", { className: Pn(["loading"]), children: /* @__PURE__ */ ht.jsx("div", { className: Pn(["loading__message"]), children: "Loading..." }) }) : /* @__PURE__ */ ht.jsx(ht.Fragment, { children: M(_, c) });
}
async function UM(c, p) {
  return await (await fetch(sM(p) + "/api/v1/form/config/" + c, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
}
let jM = 0;
function PM() {
  return jM++;
}
function OT(c, p, v) {
  if (c.nodeType === 3) {
    const E = c.nodeValue.match(p);
    if (E) {
      const R = v(E);
      c.parentNode.replaceChild(R, c);
    }
  } else
    c.childNodes.forEach((E) => OT(E, p, v));
}
const FM = /\[fundy-form id="(\d+)" env="(\w+)" lang="(\w+)"\]/, VM = (c) => {
  const p = document.createElement("div");
  return p.className = "fundy-form", p.setAttribute("data-form-id", c[1]), p.setAttribute("data-env", c[2]), p;
};
OT(document.body, FM, VM);
for (const c of document.getElementsByClassName("fundy-form")) {
  const p = PM(), v = c.getAttribute("data-form-id"), E = c.getAttribute("data-env");
  wv.createRoot(c).render(
    /* @__PURE__ */ ht.jsx(gk.StrictMode, { children: /* @__PURE__ */ ht.jsx(qk, { store: xT, children: /* @__PURE__ */ ht.jsx(zM, { formInstance: p, formId: v, env: E }) }) })
  );
}
