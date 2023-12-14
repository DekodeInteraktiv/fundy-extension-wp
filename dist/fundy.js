function mk(c) {
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
var s1;
function yk() {
  if (s1)
    return zt;
  s1 = 1;
  var c = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), k = Symbol.iterator;
  function L(N) {
    return N === null || typeof N != "object" ? null : (N = k && N[k] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, $ = {};
  function I(N, ue, Re) {
    this.props = N, this.context = ue, this.refs = $, this.updater = Re || U;
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
    this.props = N, this.context = ue, this.refs = $, this.updater = Re || U;
  }
  var ee = le.prototype = new oe();
  ee.constructor = le, j(ee, I.prototype), ee.isPureReactComponent = !0;
  var J = Array.isArray, F = Object.prototype.hasOwnProperty, de = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(N, ue, Re) {
    var it, Xe = {}, Tt = null, pt = null;
    if (ue != null)
      for (it in ue.ref !== void 0 && (pt = ue.ref), ue.key !== void 0 && (Tt = "" + ue.key), ue)
        F.call(ue, it) && !ge.hasOwnProperty(it) && (Xe[it] = ue[it]);
    var Ct = arguments.length - 2;
    if (Ct === 1)
      Xe.children = Re;
    else if (1 < Ct) {
      for (var vt = Array(Ct), Ut = 0; Ut < Ct; Ut++)
        vt[Ut] = arguments[Ut + 2];
      Xe.children = vt;
    }
    if (N && N.defaultProps)
      for (it in Ct = N.defaultProps, Ct)
        Xe[it] === void 0 && (Xe[it] = Ct[it]);
    return { $$typeof: c, type: N, key: Tt, ref: pt, props: Xe, _owner: de.current };
  }
  function Ke(N, ue) {
    return { $$typeof: c, type: N.type, key: ue, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function Ge(N) {
    return typeof N == "object" && N !== null && N.$$typeof === c;
  }
  function ze(N) {
    var ue = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(Re) {
      return ue[Re];
    });
  }
  var ot = /\/+/g;
  function we(N, ue) {
    return typeof N == "object" && N !== null && N.key != null ? ze("" + N.key) : ue.toString(36);
  }
  function Ue(N, ue, Re, it, Xe) {
    var Tt = typeof N;
    (Tt === "undefined" || Tt === "boolean") && (N = null);
    var pt = !1;
    if (N === null)
      pt = !0;
    else
      switch (Tt) {
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case c:
            case v:
              pt = !0;
          }
      }
    if (pt)
      return pt = N, Xe = Xe(pt), N = it === "" ? "." + we(pt, 0) : it, J(Xe) ? (Re = "", N != null && (Re = N.replace(ot, "$&/") + "/"), Ue(Xe, ue, Re, "", function(Ut) {
        return Ut;
      })) : Xe != null && (Ge(Xe) && (Xe = Ke(Xe, Re + (!Xe.key || pt && pt.key === Xe.key ? "" : ("" + Xe.key).replace(ot, "$&/") + "/") + N)), ue.push(Xe)), 1;
    if (pt = 0, it = it === "" ? "." : it + ":", J(N))
      for (var Ct = 0; Ct < N.length; Ct++) {
        Tt = N[Ct];
        var vt = it + we(Tt, Ct);
        pt += Ue(Tt, ue, Re, vt, Xe);
      }
    else if (vt = L(N), typeof vt == "function")
      for (N = vt.call(N), Ct = 0; !(Tt = N.next()).done; )
        Tt = Tt.value, vt = it + we(Tt, Ct++), pt += Ue(Tt, ue, Re, vt, Xe);
    else if (Tt === "object")
      throw ue = String(N), Error("Objects are not valid as a React child (found: " + (ue === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : ue) + "). If you meant to render a collection of children, use an array instead.");
    return pt;
  }
  function Rt(N, ue, Re) {
    if (N == null)
      return N;
    var it = [], Xe = 0;
    return Ue(N, it, "", "", function(Tt) {
      return ue.call(Re, Tt, Xe++);
    }), it;
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
  var xe = { current: null }, he = { transition: null }, He = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: he, ReactCurrentOwner: de };
  return zt.Children = { map: Rt, forEach: function(N, ue, Re) {
    Rt(N, function() {
      ue.apply(this, arguments);
    }, Re);
  }, count: function(N) {
    var ue = 0;
    return Rt(N, function() {
      ue++;
    }), ue;
  }, toArray: function(N) {
    return Rt(N, function(ue) {
      return ue;
    }) || [];
  }, only: function(N) {
    if (!Ge(N))
      throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, zt.Component = I, zt.Fragment = p, zt.Profiler = R, zt.PureComponent = le, zt.StrictMode = E, zt.Suspense = M, zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, zt.cloneElement = function(N, ue, Re) {
    if (N == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var it = j({}, N.props), Xe = N.key, Tt = N.ref, pt = N._owner;
    if (ue != null) {
      if (ue.ref !== void 0 && (Tt = ue.ref, pt = de.current), ue.key !== void 0 && (Xe = "" + ue.key), N.type && N.type.defaultProps)
        var Ct = N.type.defaultProps;
      for (vt in ue)
        F.call(ue, vt) && !ge.hasOwnProperty(vt) && (it[vt] = ue[vt] === void 0 && Ct !== void 0 ? Ct[vt] : ue[vt]);
    }
    var vt = arguments.length - 2;
    if (vt === 1)
      it.children = Re;
    else if (1 < vt) {
      Ct = Array(vt);
      for (var Ut = 0; Ut < vt; Ut++)
        Ct[Ut] = arguments[Ut + 2];
      it.children = Ct;
    }
    return { $$typeof: c, type: N.type, key: Xe, ref: Tt, props: it, _owner: pt };
  }, zt.createContext = function(N) {
    return N = { $$typeof: g, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: w, _context: N }, N.Consumer = N;
  }, zt.createElement = $e, zt.createFactory = function(N) {
    var ue = $e.bind(null, N);
    return ue.type = N, ue;
  }, zt.createRef = function() {
    return { current: null };
  }, zt.forwardRef = function(N) {
    return { $$typeof: B, render: N };
  }, zt.isValidElement = Ge, zt.lazy = function(N) {
    return { $$typeof: z, _payload: { _status: -1, _result: N }, _init: Et };
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
    return xe.current.useCallback(N, ue);
  }, zt.useContext = function(N) {
    return xe.current.useContext(N);
  }, zt.useDebugValue = function() {
  }, zt.useDeferredValue = function(N) {
    return xe.current.useDeferredValue(N);
  }, zt.useEffect = function(N, ue) {
    return xe.current.useEffect(N, ue);
  }, zt.useId = function() {
    return xe.current.useId();
  }, zt.useImperativeHandle = function(N, ue, Re) {
    return xe.current.useImperativeHandle(N, ue, Re);
  }, zt.useInsertionEffect = function(N, ue) {
    return xe.current.useInsertionEffect(N, ue);
  }, zt.useLayoutEffect = function(N, ue) {
    return xe.current.useLayoutEffect(N, ue);
  }, zt.useMemo = function(N, ue) {
    return xe.current.useMemo(N, ue);
  }, zt.useReducer = function(N, ue, Re) {
    return xe.current.useReducer(N, ue, Re);
  }, zt.useRef = function(N) {
    return xe.current.useRef(N);
  }, zt.useState = function(N) {
    return xe.current.useState(N);
  }, zt.useSyncExternalStore = function(N, ue, Re) {
    return xe.current.useSyncExternalStore(N, ue, Re);
  }, zt.useTransition = function() {
    return xe.current.useTransition();
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
var c1;
function gk() {
  return c1 || (c1 = 1, function(c, v) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", E = Symbol.for("react.element"), R = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), _ = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), I = Symbol.iterator, oe = "@@iterator";
      function le(S) {
        if (S === null || typeof S != "object")
          return null;
        var O = I && S[I] || S[oe];
        return typeof O == "function" ? O : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, J = {
        transition: null
      }, F = {
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
      }, ge = {}, $e = null;
      function Ke(S) {
        $e = S;
      }
      ge.setExtraStackFrame = function(S) {
        $e = S;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var S = "";
        $e && (S += $e);
        var O = ge.getCurrentStack;
        return O && (S += O() || ""), S;
      };
      var Ge = !1, ze = !1, ot = !1, we = !1, Ue = !1, Rt = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: de
      };
      Rt.ReactDebugCurrentFrame = ge, Rt.ReactCurrentActQueue = F;
      function Et(S) {
        {
          for (var O = arguments.length, K = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
            K[te - 1] = arguments[te];
          he("warn", S, K);
        }
      }
      function xe(S) {
        {
          for (var O = arguments.length, K = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
            K[te - 1] = arguments[te];
          he("error", S, K);
        }
      }
      function he(S, O, K) {
        {
          var te = Rt.ReactDebugCurrentFrame, me = te.getStackAddendum();
          me !== "" && (O += "%s", K = K.concat([me]));
          var rt = K.map(function(Te) {
            return String(Te);
          });
          rt.unshift("Warning: " + O), Function.prototype.apply.call(console[S], console, rt);
        }
      }
      var He = {};
      function N(S, O) {
        {
          var K = S.constructor, te = K && (K.displayName || K.name) || "ReactClass", me = te + "." + O;
          if (He[me])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, te), He[me] = !0;
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
        enqueueReplaceState: function(S, O, K, te) {
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
        enqueueSetState: function(S, O, K, te) {
          N(S, "setState");
        }
      }, Re = Object.assign, it = {};
      Object.freeze(it);
      function Xe(S, O, K) {
        this.props = S, this.context = O, this.refs = it, this.updater = K || ue;
      }
      Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(S, O) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, O, "setState");
      }, Xe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Tt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, pt = function(S, O) {
          Object.defineProperty(Xe.prototype, S, {
            get: function() {
              Et("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var Ct in Tt)
          Tt.hasOwnProperty(Ct) && pt(Ct, Tt[Ct]);
      }
      function vt() {
      }
      vt.prototype = Xe.prototype;
      function Ut(S, O, K) {
        this.props = S, this.context = O, this.refs = it, this.updater = K || ue;
      }
      var tr = Ut.prototype = new vt();
      tr.constructor = Ut, Re(tr, Xe.prototype), tr.isPureReactComponent = !0;
      function Bn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var De = Array.isArray;
      function Zt(S) {
        return De(S);
      }
      function _e(S) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, K = O && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return K;
        }
      }
      function vn(S) {
        try {
          return Rn(S), !1;
        } catch {
          return !0;
        }
      }
      function Rn(S) {
        return "" + S;
      }
      function Tn(S) {
        if (vn(S))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(S)), Rn(S);
      }
      function Xr(S, O, K) {
        var te = S.displayName;
        if (te)
          return te;
        var me = O.displayName || O.name || "";
        return me !== "" ? K + "(" + me + ")" : K;
      }
      function Zr(S) {
        return S.displayName || "Context";
      }
      function nr(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case w:
            return "Fragment";
          case R:
            return "Portal";
          case B:
            return "Profiler";
          case g:
            return "StrictMode";
          case k:
            return "Suspense";
          case L:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case _:
              var O = S;
              return Zr(O) + ".Consumer";
            case M:
              var K = S;
              return Zr(K._context) + ".Provider";
            case z:
              return Xr(S, S.render, "ForwardRef");
            case U:
              var te = S.displayName || null;
              return te !== null ? te : nr(S.type) || "Memo";
            case j: {
              var me = S, rt = me._payload, Te = me._init;
              try {
                return nr(Te(rt));
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
      function xn(S) {
        if (Tr.call(S, "key")) {
          var O = Object.getOwnPropertyDescriptor(S, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function zr(S, O) {
        var K = function() {
          wr || (wr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: K,
          configurable: !0
        });
      }
      function yi(S, O) {
        var K = function() {
          Sa || (Sa = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: K,
          configurable: !0
        });
      }
      function Ea(S) {
        if (typeof S.ref == "string" && de.current && S.__self && de.current.stateNode !== S.__self) {
          var O = nr(de.current.type);
          fr[O] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, S.ref), fr[O] = !0);
        }
      }
      var Se = function(S, O, K, te, me, rt, Te) {
        var et = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: O,
          ref: K,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: rt
        };
        return et._store = {}, Object.defineProperty(et._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(et, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.defineProperty(et, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: me
        }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
      };
      function We(S, O, K) {
        var te, me = {}, rt = null, Te = null, et = null, _t = null;
        if (O != null) {
          ea(O) && (Te = O.ref, Ea(O)), xn(O) && (Tn(O.key), rt = "" + O.key), et = O.__self === void 0 ? null : O.__self, _t = O.__source === void 0 ? null : O.__source;
          for (te in O)
            Tr.call(O, te) && !Jr.hasOwnProperty(te) && (me[te] = O[te]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          me.children = K;
        else if (Ft > 1) {
          for (var cn = Array(Ft), en = 0; en < Ft; en++)
            cn[en] = arguments[en + 2];
          Object.freeze && Object.freeze(cn), me.children = cn;
        }
        if (S && S.defaultProps) {
          var fn = S.defaultProps;
          for (te in fn)
            me[te] === void 0 && (me[te] = fn[te]);
        }
        if (rt || Te) {
          var yn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          rt && zr(me, yn), Te && yi(me, yn);
        }
        return Se(S, rt, Te, et, _t, de.current, me);
      }
      function bt(S, O) {
        var K = Se(S.type, O, S.ref, S._self, S._source, S._owner, S.props);
        return K;
      }
      function $t(S, O, K) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var te, me = Re({}, S.props), rt = S.key, Te = S.ref, et = S._self, _t = S._source, Ft = S._owner;
        if (O != null) {
          ea(O) && (Te = O.ref, Ft = de.current), xn(O) && (Tn(O.key), rt = "" + O.key);
          var cn;
          S.type && S.type.defaultProps && (cn = S.type.defaultProps);
          for (te in O)
            Tr.call(O, te) && !Jr.hasOwnProperty(te) && (O[te] === void 0 && cn !== void 0 ? me[te] = cn[te] : me[te] = O[te]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          me.children = K;
        else if (en > 1) {
          for (var fn = Array(en), yn = 0; yn < en; yn++)
            fn[yn] = arguments[yn + 2];
          me.children = fn;
        }
        return Se(S.type, rt, Te, et, _t, Ft, me);
      }
      function Wt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var Fn = ".", On = ":";
      function _r(S) {
        var O = /[=:]/g, K = {
          "=": "=0",
          ":": "=2"
        }, te = S.replace(O, function(me) {
          return K[me];
        });
        return "$" + te;
      }
      var Jt = !1, Ur = /\/+/g;
      function Qt(S) {
        return S.replace(Ur, "$&/");
      }
      function Gt(S, O) {
        return typeof S == "object" && S !== null && S.key != null ? (Tn(S.key), _r("" + S.key)) : O.toString(36);
      }
      function ri(S, O, K, te, me) {
        var rt = typeof S;
        (rt === "undefined" || rt === "boolean") && (S = null);
        var Te = !1;
        if (S === null)
          Te = !0;
        else
          switch (rt) {
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
          var et = S, _t = me(et), Ft = te === "" ? Fn + Gt(et, 0) : te;
          if (Zt(_t)) {
            var cn = "";
            Ft != null && (cn = Qt(Ft) + "/"), ri(_t, O, cn, "", function(hd) {
              return hd;
            });
          } else
            _t != null && (Wt(_t) && (_t.key && (!et || et.key !== _t.key) && Tn(_t.key), _t = bt(
              _t,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              K + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (_t.key && (!et || et.key !== _t.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Qt("" + _t.key) + "/"
              ) : "") + Ft
            )), O.push(_t));
          return 1;
        }
        var en, fn, yn = 0, kt = te === "" ? Fn : te + On;
        if (Zt(S))
          for (var Bi = 0; Bi < S.length; Bi++)
            en = S[Bi], fn = kt + Gt(en, Bi), yn += ri(en, O, K, fn, me);
        else {
          var fl = le(S);
          if (typeof fl == "function") {
            var ys = S;
            fl === ys.entries && (Jt || Et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var vd = fl.call(ys), oi, gs = 0; !(oi = vd.next()).done; )
              en = oi.value, fn = kt + Gt(en, gs++), yn += ri(en, O, K, fn, me);
          } else if (rt === "object") {
            var Ss = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Ss === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return yn;
      }
      function za(S, O, K) {
        if (S == null)
          return S;
        var te = [], me = 0;
        return ri(S, te, "", "", function(rt) {
          return O.call(K, rt, me++);
        }), te;
      }
      function mu(S) {
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
      function Vi(S) {
        if (!Wt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function yu(S) {
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
          $$typeof: M,
          _context: O
        };
        var K = !1, te = !1, me = !1;
        {
          var rt = {
            $$typeof: _,
            _context: O
          };
          Object.defineProperties(rt, {
            Provider: {
              get: function() {
                return te || (te = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
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
                return K || (K = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
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
          }), O.Consumer = rt;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var Ca = -1, gi = 0, ba = 1, Si = 2;
      function jr(S) {
        if (S._status === Ca) {
          var O = S._result, K = O();
          if (K.then(function(rt) {
            if (S._status === gi || S._status === Ca) {
              var Te = S;
              Te._status = ba, Te._result = rt;
            }
          }, function(rt) {
            if (S._status === gi || S._status === Ca) {
              var Te = S;
              Te._status = Si, Te._result = rt;
            }
          }), S._status === Ca) {
            var te = S;
            te._status = gi, te._result = K;
          }
        }
        if (S._status === ba) {
          var me = S._result;
          return me === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, me), "default" in me || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
          $$typeof: j,
          _payload: O,
          _init: jr
        };
        {
          var te, me;
          Object.defineProperties(K, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(rt) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = rt, Object.defineProperty(K, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return me;
              },
              set: function(rt) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), me = rt, Object.defineProperty(K, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return K;
      }
      function Ei(S) {
        S != null && S.$$typeof === U ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? xe("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: z,
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
            set: function(te) {
              K = te, !S.name && !S.displayName && (S.displayName = te);
            }
          });
        }
        return O;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function se(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === w || S === B || Ue || S === g || S === k || S === L || we || S === $ || Ge || ze || ot || typeof S == "object" && S !== null && (S.$$typeof === j || S.$$typeof === U || S.$$typeof === M || S.$$typeof === _ || S.$$typeof === z || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === D || S.getModuleId !== void 0));
      }
      function Ee(S, O) {
        se(S) || xe("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var K = {
          $$typeof: U,
          type: S,
          compare: O === void 0 ? null : O
        };
        {
          var te;
          Object.defineProperty(K, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return te;
            },
            set: function(me) {
              te = me, !S.name && !S.displayName && (S.displayName = me);
            }
          });
        }
        return K;
      }
      function Me() {
        var S = ee.current;
        return S === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function mt(S) {
        var O = Me();
        if (S._context !== void 0) {
          var K = S._context;
          K.Consumer === S ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : K.Provider === S && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(S);
      }
      function Nt(S) {
        var O = Me();
        return O.useState(S);
      }
      function yt(S, O, K) {
        var te = Me();
        return te.useReducer(S, O, K);
      }
      function Ze(S) {
        var O = Me();
        return O.useRef(S);
      }
      function $n(S, O) {
        var K = Me();
        return K.useEffect(S, O);
      }
      function hn(S, O) {
        var K = Me();
        return K.useInsertionEffect(S, O);
      }
      function mn(S, O) {
        var K = Me();
        return K.useLayoutEffect(S, O);
      }
      function dr(S, O) {
        var K = Me();
        return K.useCallback(S, O);
      }
      function Ci(S, O) {
        var K = Me();
        return K.useMemo(S, O);
      }
      function el(S, O, K) {
        var te = Me();
        return te.useImperativeHandle(S, O, K);
      }
      function jt(S, O) {
        {
          var K = Me();
          return K.useDebugValue(S, O);
        }
      }
      function dd() {
        var S = Me();
        return S.useTransition();
      }
      function ai(S) {
        var O = Me();
        return O.useDeferredValue(S);
      }
      function wt() {
        var S = Me();
        return S.useId();
      }
      function bi(S, O, K) {
        var te = Me();
        return te.useSyncExternalStore(S, O, K);
      }
      var gu = 0, tl, Su, ta, ps, Pr, vs, hs;
      function Ec() {
      }
      Ec.__reactDisabledLog = !0;
      function nl() {
        {
          if (gu === 0) {
            tl = console.log, Su = console.info, ta = console.warn, ps = console.error, Pr = console.group, vs = console.groupCollapsed, hs = console.groupEnd;
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
          gu++;
        }
      }
      function Eu() {
        {
          if (gu--, gu === 0) {
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
                value: Su
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
          gu < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = Rt.ReactCurrentDispatcher, Fr;
      function Cu(S, O, K) {
        {
          if (Fr === void 0)
            try {
              throw Error();
            } catch (me) {
              var te = me.stack.trim().match(/\n( *(at )?)/);
              Fr = te && te[1] || "";
            }
          return `
` + Fr + S;
        }
      }
      var bu = !1, Ru;
      {
        var rl = typeof WeakMap == "function" ? WeakMap : Map;
        Ru = new rl();
      }
      function al(S, O) {
        if (!S || bu)
          return "";
        {
          var K = Ru.get(S);
          if (K !== void 0)
            return K;
        }
        var te;
        bu = !0;
        var me = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var rt;
        rt = ii.current, ii.current = null, nl();
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
                te = kt;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (kt) {
                te = kt;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kt) {
              te = kt;
            }
            S();
          }
        } catch (kt) {
          if (kt && te && typeof kt.stack == "string") {
            for (var et = kt.stack.split(`
`), _t = te.stack.split(`
`), Ft = et.length - 1, cn = _t.length - 1; Ft >= 1 && cn >= 0 && et[Ft] !== _t[cn]; )
              cn--;
            for (; Ft >= 1 && cn >= 0; Ft--, cn--)
              if (et[Ft] !== _t[cn]) {
                if (Ft !== 1 || cn !== 1)
                  do
                    if (Ft--, cn--, cn < 0 || et[Ft] !== _t[cn]) {
                      var en = `
` + et[Ft].replace(" at new ", " at ");
                      return S.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", S.displayName)), typeof S == "function" && Ru.set(S, en), en;
                    }
                  while (Ft >= 1 && cn >= 0);
                break;
              }
          }
        } finally {
          bu = !1, ii.current = rt, Eu(), Error.prepareStackTrace = me;
        }
        var fn = S ? S.displayName || S.name : "", yn = fn ? Cu(fn) : "";
        return typeof S == "function" && Ru.set(S, yn), yn;
      }
      function Hi(S, O, K) {
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
          return Cu(S);
        switch (S) {
          case k:
            return Cu("Suspense");
          case L:
            return Cu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case z:
              return Hi(S.render);
            case U:
              return Ri(S.type, O, K);
            case j: {
              var te = S, me = te._payload, rt = te._init;
              try {
                return Ri(rt(me), O, K);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, il = Rt.ReactDebugCurrentFrame;
      function lo(S) {
        if (S) {
          var O = S._owner, K = Ri(S.type, S._source, O ? O.type : null);
          il.setExtraStackFrame(K);
        } else
          il.setExtraStackFrame(null);
      }
      function ul(S, O, K, te, me) {
        {
          var rt = Function.call.bind(Tr);
          for (var Te in S)
            if (rt(S, Te)) {
              var et = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var _t = Error((te || "React class") + ": " + K + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _t.name = "Invariant Violation", _t;
                }
                et = S[Te](O, Te, te, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                et = Ft;
              }
              et && !(et instanceof Error) && (lo(me), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", K, Te, typeof et), lo(null)), et instanceof Error && !(et.message in Ht) && (Ht[et.message] = !0, lo(me), xe("Failed %s type: %s", K, et.message), lo(null));
            }
        }
      }
      function Pt(S) {
        if (S) {
          var O = S._owner, K = Ri(S.type, S._source, O ? O.type : null);
          Ke(K);
        } else
          Ke(null);
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
      function ft(S) {
        if (S !== void 0) {
          var O = S.fileName.replace(/^.*[\\\/]/, ""), K = S.lineNumber;
          return `

Check your code at ` + O + ":" + K + ".";
        }
        return "";
      }
      function so(S) {
        return S != null ? ft(S.__source) : "";
      }
      var Dn = {};
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
          if (!Dn[K]) {
            Dn[K] = !0;
            var te = "";
            S && S._owner && S._owner !== de.current && (te = " It was passed a child from " + nr(S._owner.type) + "."), Pt(S), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, te), Pt(null);
          }
        }
      }
      function Tu(S, O) {
        if (typeof S == "object") {
          if (Zt(S))
            for (var K = 0; K < S.length; K++) {
              var te = S[K];
              Wt(te) && Vr(te, O);
            }
          else if (Wt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var me = le(S);
            if (typeof me == "function" && me !== S.entries)
              for (var rt = me.call(S), Te; !(Te = rt.next()).done; )
                Wt(Te.value) && Vr(Te.value, O);
          }
        }
      }
      function An(S) {
        {
          var O = S.type;
          if (O == null || typeof O == "string")
            return;
          var K;
          if (typeof O == "function")
            K = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === U))
            K = O.propTypes;
          else
            return;
          if (K) {
            var te = nr(O);
            ul(K, S.props, "prop", te, S);
          } else if (O.PropTypes !== void 0 && !ol) {
            ol = !0;
            var me = nr(O);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qt(S) {
        {
          for (var O = Object.keys(S.props), K = 0; K < O.length; K++) {
            var te = O[K];
            if (te !== "children" && te !== "key") {
              Pt(S), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Pt(null);
              break;
            }
          }
          S.ref !== null && (Pt(S), xe("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
        }
      }
      function Cc(S, O, K) {
        var te = se(S);
        if (!te) {
          var me = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = so(O);
          rt ? me += rt : me += ll();
          var Te;
          S === null ? Te = "null" : Zt(S) ? Te = "array" : S !== void 0 && S.$$typeof === E ? (Te = "<" + (nr(S.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, me);
        }
        var et = We.apply(this, arguments);
        if (et == null)
          return et;
        if (te)
          for (var _t = 2; _t < arguments.length; _t++)
            Tu(arguments[_t], S);
        return S === w ? qt(et) : An(et), et;
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
        for (var te = $t.apply(this, arguments), me = 2; me < arguments.length; me++)
          Tu(arguments[me], te.type);
        return An(te), te;
      }
      function bc(S, O) {
        var K = J.transition;
        J.transition = {};
        var te = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (J.transition = K, K === null && te._updatedFibers) {
            var me = te._updatedFibers.size;
            me > 10 && Et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), te._updatedFibers.clear();
          }
        }
      }
      var Ii = !1, wu = null;
      function Rc(S) {
        if (wu === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), K = c && c[O];
            wu = K.call(c, "timers").setImmediate;
          } catch {
            wu = function(me) {
              Ii === !1 && (Ii = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var rt = new MessageChannel();
              rt.port1.onmessage = me, rt.port2.postMessage(void 0);
            };
          }
        return wu(S);
      }
      var Ua = 0, _u = !1;
      function xu(S) {
        {
          var O = Ua;
          Ua++, F.current === null && (F.current = []);
          var K = F.isBatchingLegacy, te;
          try {
            if (F.isBatchingLegacy = !0, te = S(), !K && F.didScheduleLegacyUpdate) {
              var me = F.current;
              me !== null && (F.didScheduleLegacyUpdate = !1, Du(me));
            }
          } catch (fn) {
            throw ja(O), fn;
          } finally {
            F.isBatchingLegacy = K;
          }
          if (te !== null && typeof te == "object" && typeof te.then == "function") {
            var rt = te, Te = !1, et = {
              then: function(fn, yn) {
                Te = !0, rt.then(function(kt) {
                  ja(O), Ua === 0 ? sl(kt, fn, yn) : fn(kt);
                }, function(kt) {
                  ja(O), yn(kt);
                });
              }
            };
            return !_u && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (_u = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), et;
          } else {
            var _t = te;
            if (ja(O), Ua === 0) {
              var Ft = F.current;
              Ft !== null && (Du(Ft), F.current = null);
              var cn = {
                then: function(fn, yn) {
                  F.current === null ? (F.current = [], sl(_t, fn, yn)) : fn(_t);
                }
              };
              return cn;
            } else {
              var en = {
                then: function(fn, yn) {
                  fn(_t);
                }
              };
              return en;
            }
          }
        }
      }
      function ja(S) {
        S !== Ua - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = S;
      }
      function sl(S, O, K) {
        {
          var te = F.current;
          if (te !== null)
            try {
              Du(te), Rc(function() {
                te.length === 0 ? (F.current = null, O(S)) : sl(S, O, K);
              });
            } catch (me) {
              K(me);
            }
          else
            O(S);
        }
      }
      var Ou = !1;
      function Du(S) {
        if (!Ou) {
          Ou = !0;
          var O = 0;
          try {
            for (; O < S.length; O++) {
              var K = S[O];
              do
                K = K(!0);
              while (K !== null);
            }
            S.length = 0;
          } catch (te) {
            throw S = S.slice(O + 1), te;
          } finally {
            Ou = !1;
          }
        }
      }
      var co = Cc, cl = Ti, ms = rr, ui = {
        map: za,
        forEach: oo,
        count: mu,
        toArray: Jo,
        only: Vi
      };
      v.Children = ui, v.Component = Xe, v.Fragment = w, v.Profiler = B, v.PureComponent = Ut, v.StrictMode = g, v.Suspense = k, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rt, v.cloneElement = cl, v.createContext = yu, v.createElement = co, v.createFactory = ms, v.createRef = Bn, v.forwardRef = Ei, v.isValidElement = Wt, v.lazy = Ra, v.memo = Ee, v.startTransition = bc, v.unstable_act = xu, v.useCallback = dr, v.useContext = mt, v.useDebugValue = jt, v.useDeferredValue = ai, v.useEffect = $n, v.useId = wt, v.useImperativeHandle = el, v.useInsertionEffect = hn, v.useLayoutEffect = mn, v.useMemo = Ci, v.useReducer = yt, v.useRef = Ze, v.useState = Nt, v.useSyncExternalStore = bi, v.useTransition = dd, v.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tv, Tv.exports)), Tv.exports;
}
({}).NODE_ENV === "production" ? l0.exports = yk() : l0.exports = gk();
var sn = l0.exports;
const Sk = /* @__PURE__ */ mk(sn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f1;
function Ek() {
  if (f1)
    return Cv;
  f1 = 1;
  var c = sn, v = Symbol.for("react.element"), p = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(B, M, _) {
    var z, k = {}, L = null, U = null;
    _ !== void 0 && (L = "" + _), M.key !== void 0 && (L = "" + M.key), M.ref !== void 0 && (U = M.ref);
    for (z in M)
      E.call(M, z) && !w.hasOwnProperty(z) && (k[z] = M[z]);
    if (B && B.defaultProps)
      for (z in M = B.defaultProps, M)
        k[z] === void 0 && (k[z] = M[z]);
    return { $$typeof: v, type: B, key: L, ref: U, props: k, _owner: R.current };
  }
  return Cv.Fragment = p, Cv.jsx = g, Cv.jsxs = g, Cv;
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
var d1;
function Ck() {
  return d1 || (d1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = sn, v = Symbol.for("react.element"), p = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), B = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), j = Symbol.iterator, $ = "@@iterator";
    function I(D) {
      if (D === null || typeof D != "object")
        return null;
      var se = j && D[j] || D[$];
      return typeof se == "function" ? se : null;
    }
    var oe = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function le(D) {
      {
        for (var se = arguments.length, Ee = new Array(se > 1 ? se - 1 : 0), Me = 1; Me < se; Me++)
          Ee[Me - 1] = arguments[Me];
        ee("error", D, Ee);
      }
    }
    function ee(D, se, Ee) {
      {
        var Me = oe.ReactDebugCurrentFrame, mt = Me.getStackAddendum();
        mt !== "" && (se += "%s", Ee = Ee.concat([mt]));
        var Nt = Ee.map(function(yt) {
          return String(yt);
        });
        Nt.unshift("Warning: " + se), Function.prototype.apply.call(console[D], console, Nt);
      }
    }
    var J = !1, F = !1, de = !1, ge = !1, $e = !1, Ke;
    Ke = Symbol.for("react.module.reference");
    function Ge(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === E || D === w || $e || D === R || D === _ || D === z || ge || D === U || J || F || de || typeof D == "object" && D !== null && (D.$$typeof === L || D.$$typeof === k || D.$$typeof === g || D.$$typeof === B || D.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Ke || D.getModuleId !== void 0));
    }
    function ze(D, se, Ee) {
      var Me = D.displayName;
      if (Me)
        return Me;
      var mt = se.displayName || se.name || "";
      return mt !== "" ? Ee + "(" + mt + ")" : Ee;
    }
    function ot(D) {
      return D.displayName || "Context";
    }
    function we(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case E:
          return "Fragment";
        case p:
          return "Portal";
        case w:
          return "Profiler";
        case R:
          return "StrictMode";
        case _:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case B:
            var se = D;
            return ot(se) + ".Consumer";
          case g:
            var Ee = D;
            return ot(Ee._context) + ".Provider";
          case M:
            return ze(D, D.render, "ForwardRef");
          case k:
            var Me = D.displayName || null;
            return Me !== null ? Me : we(D.type) || "Memo";
          case L: {
            var mt = D, Nt = mt._payload, yt = mt._init;
            try {
              return we(yt(Nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ue = Object.assign, Rt = 0, Et, xe, he, He, N, ue, Re;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Rt === 0) {
          Et = console.log, xe = console.info, he = console.warn, He = console.error, N = console.group, ue = console.groupCollapsed, Re = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: it,
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
        Rt++;
      }
    }
    function Tt() {
      {
        if (Rt--, Rt === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ue({}, D, {
              value: Et
            }),
            info: Ue({}, D, {
              value: xe
            }),
            warn: Ue({}, D, {
              value: he
            }),
            error: Ue({}, D, {
              value: He
            }),
            group: Ue({}, D, {
              value: N
            }),
            groupCollapsed: Ue({}, D, {
              value: ue
            }),
            groupEnd: Ue({}, D, {
              value: Re
            })
          });
        }
        Rt < 0 && le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pt = oe.ReactCurrentDispatcher, Ct;
    function vt(D, se, Ee) {
      {
        if (Ct === void 0)
          try {
            throw Error();
          } catch (mt) {
            var Me = mt.stack.trim().match(/\n( *(at )?)/);
            Ct = Me && Me[1] || "";
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
    function De(D, se) {
      if (!D || Ut)
        return "";
      {
        var Ee = tr.get(D);
        if (Ee !== void 0)
          return Ee;
      }
      var Me;
      Ut = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Nt;
      Nt = pt.current, pt.current = null, Xe();
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
              Me = jt;
            }
            Reflect.construct(D, [], yt);
          } else {
            try {
              yt.call();
            } catch (jt) {
              Me = jt;
            }
            D.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (jt) {
            Me = jt;
          }
          D();
        }
      } catch (jt) {
        if (jt && Me && typeof jt.stack == "string") {
          for (var Ze = jt.stack.split(`
`), $n = Me.stack.split(`
`), hn = Ze.length - 1, mn = $n.length - 1; hn >= 1 && mn >= 0 && Ze[hn] !== $n[mn]; )
            mn--;
          for (; hn >= 1 && mn >= 0; hn--, mn--)
            if (Ze[hn] !== $n[mn]) {
              if (hn !== 1 || mn !== 1)
                do
                  if (hn--, mn--, mn < 0 || Ze[hn] !== $n[mn]) {
                    var dr = `
` + Ze[hn].replace(" at new ", " at ");
                    return D.displayName && dr.includes("<anonymous>") && (dr = dr.replace("<anonymous>", D.displayName)), typeof D == "function" && tr.set(D, dr), dr;
                  }
                while (hn >= 1 && mn >= 0);
              break;
            }
        }
      } finally {
        Ut = !1, pt.current = Nt, Tt(), Error.prepareStackTrace = mt;
      }
      var Ci = D ? D.displayName || D.name : "", el = Ci ? vt(Ci) : "";
      return typeof D == "function" && tr.set(D, el), el;
    }
    function Zt(D, se, Ee) {
      return De(D, !1);
    }
    function _e(D) {
      var se = D.prototype;
      return !!(se && se.isReactComponent);
    }
    function vn(D, se, Ee) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return De(D, _e(D));
      if (typeof D == "string")
        return vt(D);
      switch (D) {
        case _:
          return vt("Suspense");
        case z:
          return vt("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case M:
            return Zt(D.render);
          case k:
            return vn(D.type, se, Ee);
          case L: {
            var Me = D, mt = Me._payload, Nt = Me._init;
            try {
              return vn(Nt(mt), se, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Rn = Object.prototype.hasOwnProperty, Tn = {}, Xr = oe.ReactDebugCurrentFrame;
    function Zr(D) {
      if (D) {
        var se = D._owner, Ee = vn(D.type, D._source, se ? se.type : null);
        Xr.setExtraStackFrame(Ee);
      } else
        Xr.setExtraStackFrame(null);
    }
    function nr(D, se, Ee, Me, mt) {
      {
        var Nt = Function.call.bind(Rn);
        for (var yt in D)
          if (Nt(D, yt)) {
            var Ze = void 0;
            try {
              if (typeof D[yt] != "function") {
                var $n = Error((Me || "React class") + ": " + Ee + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $n.name = "Invariant Violation", $n;
              }
              Ze = D[yt](se, yt, Me, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (hn) {
              Ze = hn;
            }
            Ze && !(Ze instanceof Error) && (Zr(mt), le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", Ee, yt, typeof Ze), Zr(null)), Ze instanceof Error && !(Ze.message in Tn) && (Tn[Ze.message] = !0, Zr(mt), le("Failed %s type: %s", Ee, Ze.message), Zr(null));
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
    var xn = oe.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yi, Ea, Se;
    Se = {};
    function We(D) {
      if (Rn.call(D, "ref")) {
        var se = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function bt(D) {
      if (Rn.call(D, "key")) {
        var se = Object.getOwnPropertyDescriptor(D, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function $t(D, se) {
      if (typeof D.ref == "string" && xn.current && se && xn.current.stateNode !== se) {
        var Ee = we(xn.current.type);
        Se[Ee] || (le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', we(xn.current.type), D.ref), Se[Ee] = !0);
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
    var On = function(D, se, Ee, Me, mt, Nt, yt) {
      var Ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: D,
        key: se,
        ref: Ee,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Nt
      };
      return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function _r(D, se, Ee, Me, mt) {
      {
        var Nt, yt = {}, Ze = null, $n = null;
        Ee !== void 0 && (ea(Ee), Ze = "" + Ee), bt(se) && (ea(se.key), Ze = "" + se.key), We(se) && ($n = se.ref, $t(se, mt));
        for (Nt in se)
          Rn.call(se, Nt) && !zr.hasOwnProperty(Nt) && (yt[Nt] = se[Nt]);
        if (D && D.defaultProps) {
          var hn = D.defaultProps;
          for (Nt in hn)
            yt[Nt] === void 0 && (yt[Nt] = hn[Nt]);
        }
        if (Ze || $n) {
          var mn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ze && Wt(yt, mn), $n && Fn(yt, mn);
        }
        return On(D, Ze, $n, mt, Me, xn.current, yt);
      }
    }
    var Jt = oe.ReactCurrentOwner, Ur = oe.ReactDebugCurrentFrame;
    function Qt(D) {
      if (D) {
        var se = D._owner, Ee = vn(D.type, D._source, se ? se.type : null);
        Ur.setExtraStackFrame(Ee);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function ri(D) {
      return typeof D == "object" && D !== null && D.$$typeof === v;
    }
    function za() {
      {
        if (Jt.current) {
          var D = we(Jt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function mu(D) {
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
    function Vi(D, se) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var Ee = Jo(se);
        if (oo[Ee])
          return;
        oo[Ee] = !0;
        var Me = "";
        D && D._owner && D._owner !== Jt.current && (Me = " It was passed a child from " + we(D._owner.type) + "."), Qt(D), le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Me), Qt(null);
      }
    }
    function yu(D, se) {
      {
        if (typeof D != "object")
          return;
        if (Jr(D))
          for (var Ee = 0; Ee < D.length; Ee++) {
            var Me = D[Ee];
            ri(Me) && Vi(Me, se);
          }
        else if (ri(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var mt = I(D);
          if (typeof mt == "function" && mt !== D.entries)
            for (var Nt = mt.call(D), yt; !(yt = Nt.next()).done; )
              ri(yt.value) && Vi(yt.value, se);
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
        else if (typeof se == "object" && (se.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === k))
          Ee = se.propTypes;
        else
          return;
        if (Ee) {
          var Me = we(se);
          nr(Ee, D.props, "prop", Me, D);
        } else if (se.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var mt = we(se);
          le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gi(D) {
      {
        for (var se = Object.keys(D.props), Ee = 0; Ee < se.length; Ee++) {
          var Me = se[Ee];
          if (Me !== "children" && Me !== "key") {
            Qt(D), le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Qt(null);
            break;
          }
        }
        D.ref !== null && (Qt(D), le("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function ba(D, se, Ee, Me, mt, Nt) {
      {
        var yt = Ge(D);
        if (!yt) {
          var Ze = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $n = mu(mt);
          $n ? Ze += $n : Ze += za();
          var hn;
          D === null ? hn = "null" : Jr(D) ? hn = "array" : D !== void 0 && D.$$typeof === v ? (hn = "<" + (we(D.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : hn = typeof D, le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", hn, Ze);
        }
        var mn = _r(D, se, Ee, mt, Nt);
        if (mn == null)
          return mn;
        if (yt) {
          var dr = se.children;
          if (dr !== void 0)
            if (Me)
              if (Jr(dr)) {
                for (var Ci = 0; Ci < dr.length; Ci++)
                  yu(dr[Ci], D);
                Object.freeze && Object.freeze(dr);
              } else
                le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yu(dr, D);
        }
        return D === E ? gi(mn) : Ca(mn), mn;
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
({}).NODE_ENV === "production" ? o0.exports = Ek() : o0.exports = Ck();
var nt = o0.exports, wv = {}, s0 = { exports: {} }, ti = {}, hy = { exports: {} }, QE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p1;
function bk() {
  return p1 || (p1 = 1, function(c) {
    function v(he, He) {
      var N = he.length;
      he.push(He);
      e:
        for (; 0 < N; ) {
          var ue = N - 1 >>> 1, Re = he[ue];
          if (0 < R(Re, He))
            he[ue] = He, he[N] = Re, N = ue;
          else
            break e;
        }
    }
    function p(he) {
      return he.length === 0 ? null : he[0];
    }
    function E(he) {
      if (he.length === 0)
        return null;
      var He = he[0], N = he.pop();
      if (N !== He) {
        he[0] = N;
        e:
          for (var ue = 0, Re = he.length, it = Re >>> 1; ue < it; ) {
            var Xe = 2 * (ue + 1) - 1, Tt = he[Xe], pt = Xe + 1, Ct = he[pt];
            if (0 > R(Tt, N))
              pt < Re && 0 > R(Ct, Tt) ? (he[ue] = Ct, he[pt] = N, ue = pt) : (he[ue] = Tt, he[Xe] = N, ue = Xe);
            else if (pt < Re && 0 > R(Ct, N))
              he[ue] = Ct, he[pt] = N, ue = pt;
            else
              break e;
          }
      }
      return He;
    }
    function R(he, He) {
      var N = he.sortIndex - He.sortIndex;
      return N !== 0 ? N : he.id - He.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      c.unstable_now = function() {
        return w.now();
      };
    } else {
      var g = Date, B = g.now();
      c.unstable_now = function() {
        return g.now() - B;
      };
    }
    var M = [], _ = [], z = 1, k = null, L = 3, U = !1, j = !1, $ = !1, I = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(he) {
      for (var He = p(_); He !== null; ) {
        if (He.callback === null)
          E(_);
        else if (He.startTime <= he)
          E(_), He.sortIndex = He.expirationTime, v(M, He);
        else
          break;
        He = p(_);
      }
    }
    function J(he) {
      if ($ = !1, ee(he), !j)
        if (p(M) !== null)
          j = !0, Et(F);
        else {
          var He = p(_);
          He !== null && xe(J, He.startTime - he);
        }
    }
    function F(he, He) {
      j = !1, $ && ($ = !1, oe($e), $e = -1), U = !0;
      var N = L;
      try {
        for (ee(He), k = p(M); k !== null && (!(k.expirationTime > He) || he && !ze()); ) {
          var ue = k.callback;
          if (typeof ue == "function") {
            k.callback = null, L = k.priorityLevel;
            var Re = ue(k.expirationTime <= He);
            He = c.unstable_now(), typeof Re == "function" ? k.callback = Re : k === p(M) && E(M), ee(He);
          } else
            E(M);
          k = p(M);
        }
        if (k !== null)
          var it = !0;
        else {
          var Xe = p(_);
          Xe !== null && xe(J, Xe.startTime - He), it = !1;
        }
        return it;
      } finally {
        k = null, L = N, U = !1;
      }
    }
    var de = !1, ge = null, $e = -1, Ke = 5, Ge = -1;
    function ze() {
      return !(c.unstable_now() - Ge < Ke);
    }
    function ot() {
      if (ge !== null) {
        var he = c.unstable_now();
        Ge = he;
        var He = !0;
        try {
          He = ge(!0, he);
        } finally {
          He ? we() : (de = !1, ge = null);
        }
      } else
        de = !1;
    }
    var we;
    if (typeof le == "function")
      we = function() {
        le(ot);
      };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), Rt = Ue.port2;
      Ue.port1.onmessage = ot, we = function() {
        Rt.postMessage(null);
      };
    } else
      we = function() {
        I(ot, 0);
      };
    function Et(he) {
      ge = he, de || (de = !0, we());
    }
    function xe(he, He) {
      $e = I(function() {
        he(c.unstable_now());
      }, He);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(he) {
      he.callback = null;
    }, c.unstable_continueExecution = function() {
      j || U || (j = !0, Et(F));
    }, c.unstable_forceFrameRate = function(he) {
      0 > he || 125 < he ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ke = 0 < he ? Math.floor(1e3 / he) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(M);
    }, c.unstable_next = function(he) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var He = 3;
          break;
        default:
          He = L;
      }
      var N = L;
      L = He;
      try {
        return he();
      } finally {
        L = N;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(he, He) {
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
      var N = L;
      L = he;
      try {
        return He();
      } finally {
        L = N;
      }
    }, c.unstable_scheduleCallback = function(he, He, N) {
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
      return Re = N + Re, he = { id: z++, callback: He, priorityLevel: he, startTime: N, expirationTime: Re, sortIndex: -1 }, N > ue ? (he.sortIndex = N, v(_, he), p(M) === null && he === p(_) && ($ ? (oe($e), $e = -1) : $ = !0, xe(J, N - ue))) : (he.sortIndex = Re, v(M, he), j || U || (j = !0, Et(F))), he;
    }, c.unstable_shouldYield = ze, c.unstable_wrapCallback = function(he) {
      var He = L;
      return function() {
        var N = L;
        L = He;
        try {
          return he.apply(this, arguments);
        } finally {
          L = N;
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
var v1;
function Rk() {
  return v1 || (v1 = 1, function(c) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, p = !1, E = 5;
      function R(Se, We) {
        var bt = Se.length;
        Se.push(We), B(Se, We, bt);
      }
      function w(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function g(Se) {
        if (Se.length === 0)
          return null;
        var We = Se[0], bt = Se.pop();
        return bt !== We && (Se[0] = bt, M(Se, bt, 0)), We;
      }
      function B(Se, We, bt) {
        for (var $t = bt; $t > 0; ) {
          var Wt = $t - 1 >>> 1, Fn = Se[Wt];
          if (_(Fn, We) > 0)
            Se[Wt] = We, Se[$t] = Fn, $t = Wt;
          else
            return;
        }
      }
      function M(Se, We, bt) {
        for (var $t = bt, Wt = Se.length, Fn = Wt >>> 1; $t < Fn; ) {
          var On = ($t + 1) * 2 - 1, _r = Se[On], Jt = On + 1, Ur = Se[Jt];
          if (_(_r, We) < 0)
            Jt < Wt && _(Ur, _r) < 0 ? (Se[$t] = Ur, Se[Jt] = We, $t = Jt) : (Se[$t] = _r, Se[On] = We, $t = On);
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
      var z = 1, k = 2, L = 3, U = 4, j = 5;
      function $(Se, We) {
      }
      var I = typeof performance == "object" && typeof performance.now == "function";
      if (I) {
        var oe = performance;
        c.unstable_now = function() {
          return oe.now();
        };
      } else {
        var le = Date, ee = le.now();
        c.unstable_now = function() {
          return le.now() - ee;
        };
      }
      var J = 1073741823, F = -1, de = 250, ge = 5e3, $e = 1e4, Ke = J, Ge = [], ze = [], ot = 1, we = null, Ue = L, Rt = !1, Et = !1, xe = !1, he = typeof setTimeout == "function" ? setTimeout : null, He = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ue(Se) {
        for (var We = w(ze); We !== null; ) {
          if (We.callback === null)
            g(ze);
          else if (We.startTime <= Se)
            g(ze), We.sortIndex = We.expirationTime, R(Ge, We);
          else
            return;
          We = w(ze);
        }
      }
      function Re(Se) {
        if (xe = !1, ue(Se), !Et)
          if (w(Ge) !== null)
            Et = !0, ea(it);
          else {
            var We = w(ze);
            We !== null && xn(Re, We.startTime - Se);
          }
      }
      function it(Se, We) {
        Et = !1, xe && (xe = !1, zr()), Rt = !0;
        var bt = Ue;
        try {
          var $t;
          if (!p)
            return Xe(Se, We);
        } finally {
          we = null, Ue = bt, Rt = !1;
        }
      }
      function Xe(Se, We) {
        var bt = We;
        for (ue(bt), we = w(Ge); we !== null && !v && !(we.expirationTime > bt && (!Se || Zr())); ) {
          var $t = we.callback;
          if (typeof $t == "function") {
            we.callback = null, Ue = we.priorityLevel;
            var Wt = we.expirationTime <= bt, Fn = $t(Wt);
            bt = c.unstable_now(), typeof Fn == "function" ? we.callback = Fn : we === w(Ge) && g(Ge), ue(bt);
          } else
            g(Ge);
          we = w(Ge);
        }
        if (we !== null)
          return !0;
        var On = w(ze);
        return On !== null && xn(Re, On.startTime - bt), !1;
      }
      function Tt(Se, We) {
        switch (Se) {
          case z:
          case k:
          case L:
          case U:
          case j:
            break;
          default:
            Se = L;
        }
        var bt = Ue;
        Ue = Se;
        try {
          return We();
        } finally {
          Ue = bt;
        }
      }
      function pt(Se) {
        var We;
        switch (Ue) {
          case z:
          case k:
          case L:
            We = L;
            break;
          default:
            We = Ue;
            break;
        }
        var bt = Ue;
        Ue = We;
        try {
          return Se();
        } finally {
          Ue = bt;
        }
      }
      function Ct(Se) {
        var We = Ue;
        return function() {
          var bt = Ue;
          Ue = We;
          try {
            return Se.apply(this, arguments);
          } finally {
            Ue = bt;
          }
        };
      }
      function vt(Se, We, bt) {
        var $t = c.unstable_now(), Wt;
        if (typeof bt == "object" && bt !== null) {
          var Fn = bt.delay;
          typeof Fn == "number" && Fn > 0 ? Wt = $t + Fn : Wt = $t;
        } else
          Wt = $t;
        var On;
        switch (Se) {
          case z:
            On = F;
            break;
          case k:
            On = de;
            break;
          case j:
            On = Ke;
            break;
          case U:
            On = $e;
            break;
          case L:
          default:
            On = ge;
            break;
        }
        var _r = Wt + On, Jt = {
          id: ot++,
          callback: We,
          priorityLevel: Se,
          startTime: Wt,
          expirationTime: _r,
          sortIndex: -1
        };
        return Wt > $t ? (Jt.sortIndex = Wt, R(ze, Jt), w(Ge) === null && Jt === w(ze) && (xe ? zr() : xe = !0, xn(Re, Wt - $t))) : (Jt.sortIndex = _r, R(Ge, Jt), !Et && !Rt && (Et = !0, ea(it))), Jt;
      }
      function Ut() {
      }
      function tr() {
        !Et && !Rt && (Et = !0, ea(it));
      }
      function Bn() {
        return w(Ge);
      }
      function De(Se) {
        Se.callback = null;
      }
      function Zt() {
        return Ue;
      }
      var _e = !1, vn = null, Rn = -1, Tn = E, Xr = -1;
      function Zr() {
        var Se = c.unstable_now() - Xr;
        return !(Se < Tn);
      }
      function nr() {
      }
      function Tr(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? Tn = Math.floor(1e3 / Se) : Tn = E;
      }
      var Jr = function() {
        if (vn !== null) {
          var Se = c.unstable_now();
          Xr = Se;
          var We = !0, bt = !0;
          try {
            bt = vn(We, Se);
          } finally {
            bt ? wr() : (_e = !1, vn = null);
          }
        } else
          _e = !1;
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
        vn = Se, _e || (_e = !0, wr());
      }
      function xn(Se, We) {
        Rn = he(function() {
          Se(c.unstable_now());
        }, We);
      }
      function zr() {
        He(Rn), Rn = -1;
      }
      var yi = nr, Ea = null;
      c.unstable_IdlePriority = j, c.unstable_ImmediatePriority = z, c.unstable_LowPriority = U, c.unstable_NormalPriority = L, c.unstable_Profiling = Ea, c.unstable_UserBlockingPriority = k, c.unstable_cancelCallback = De, c.unstable_continueExecution = tr, c.unstable_forceFrameRate = Tr, c.unstable_getCurrentPriorityLevel = Zt, c.unstable_getFirstCallbackNode = Bn, c.unstable_next = pt, c.unstable_pauseExecution = Ut, c.unstable_requestPaint = yi, c.unstable_runWithPriority = Tt, c.unstable_scheduleCallback = vt, c.unstable_shouldYield = Zr, c.unstable_wrapCallback = Ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(GE)), GE;
}
var h1;
function X1() {
  return h1 || (h1 = 1, {}.NODE_ENV === "production" ? hy.exports = bk() : hy.exports = Rk()), hy.exports;
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
var m1;
function Tk() {
  if (m1)
    return ti;
  m1 = 1;
  var c = sn, v = X1();
  function p(n) {
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
  var B = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, k = {};
  function L(n) {
    return M.call(k, n) ? !0 : M.call(z, n) ? !1 : _.test(n) ? k[n] = !0 : (z[n] = !0, !1);
  }
  function U(n, r, u, l) {
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
  function j(n, r, u, l) {
    if (r === null || typeof r > "u" || U(n, r, u, l))
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
  function ee(n, r, u, l) {
    var f = I.hasOwnProperty(r) ? I[r] : null;
    (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (j(r, u, f, l) && (u = null), l || f === null ? L(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : f.mustUseProperty ? n[f.propertyName] = u === null ? f.type === 3 ? !1 : "" : u : (r = f.attributeName, l = f.attributeNamespace, u === null ? n.removeAttribute(r) : (f = f.type, u = f === 3 || f === 4 && u === !0 ? "" : "" + u, l ? n.setAttributeNS(l, r, u) : n.setAttribute(r, u))));
  }
  var J = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = Symbol.for("react.element"), de = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Ke = Symbol.for("react.profiler"), Ge = Symbol.for("react.provider"), ze = Symbol.for("react.context"), ot = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), he = Symbol.iterator;
  function He(n) {
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
  var it = !1;
  function Xe(n, r) {
    if (!n || it)
      return "";
    it = !0;
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
                  var A = `
` + f[C].replace(" at new ", " at ");
                  return n.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", n.displayName)), A;
                }
              while (1 <= C && 0 <= x);
            break;
          }
      }
    } finally {
      it = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Re(n) : "";
  }
  function Tt(n) {
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
        return n = Xe(n.type, !1), n;
      case 11:
        return n = Xe(n.type.render, !1), n;
      case 1:
        return n = Xe(n.type, !0), n;
      default:
        return "";
    }
  }
  function pt(n) {
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
      case Ke:
        return "Profiler";
      case $e:
        return "StrictMode";
      case we:
        return "Suspense";
      case Ue:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ze:
          return (n.displayName || "Context") + ".Consumer";
        case Ge:
          return (n._context.displayName || "Context") + ".Provider";
        case ot:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Rt:
          return r = n.displayName || null, r !== null ? r : pt(n.type) || "Memo";
        case Et:
          r = n._payload, n = n._init;
          try {
            return pt(n(r));
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
        return pt(r);
      case 8:
        return r === $e ? "StrictMode" : "Mode";
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
  function vt(n) {
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
  function De(n) {
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
  function _e(n, r) {
    var u = r.checked;
    return N({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function vn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    u = vt(r.value != null ? r.value : u), n._wrapperState = { initialChecked: l, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rn(n, r) {
    r = r.checked, r != null && ee(n, "checked", r, !1);
  }
  function Tn(n, r) {
    Rn(n, r);
    var u = vt(r.value), l = r.type;
    if (u != null)
      l === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Zr(n, r.type, u) : r.hasOwnProperty("defaultValue") && Zr(n, r.type, vt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (u = "" + vt(u), r = null, f = 0; f < n.length; f++) {
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
      throw Error(p(91));
    return N({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(p(92));
        if (nr(u)) {
          if (1 < u.length)
            throw Error(p(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: vt(u) };
  }
  function Sa(n, r) {
    var u = vt(r.value), l = vt(r.defaultValue);
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
  function xn(n, r) {
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
        throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(p(62));
    }
  }
  function On(n, r) {
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
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = qe(r), Ur(n.stateNode, n.type, r));
    }
  }
  function za(n) {
    Qt ? Gt ? Gt.push(n) : Gt = [n] : Qt = n;
  }
  function mu() {
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
  var Vi = !1;
  function yu(n, r, u) {
    if (Vi)
      return n(r, u);
    Vi = !0;
    try {
      return oo(n, r, u);
    } finally {
      Vi = !1, (Qt !== null || Gt !== null) && (Jo(), mu());
    }
  }
  function Ca(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var l = qe(u);
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
      throw Error(p(231, r, typeof u));
    return u;
  }
  var gi = !1;
  if (B)
    try {
      var ba = {};
      Object.defineProperty(ba, "passive", { get: function() {
        gi = !0;
      } }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
    } catch {
      gi = !1;
    }
  function Si(n, r, u, l, f, h, C, x, A) {
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
  function Ee(n, r, u, l, f, h, C, x, A) {
    jr = !1, Ra = null, Si.apply(se, arguments);
  }
  function Me(n, r, u, l, f, h, C, x, A) {
    if (Ee.apply(this, arguments), jr) {
      if (jr) {
        var Z = Ra;
        jr = !1, Ra = null;
      } else
        throw Error(p(198));
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
      throw Error(p(188));
  }
  function Ze(n) {
    var r = n.alternate;
    if (!r) {
      if (r = mt(n), r === null)
        throw Error(p(188));
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
        throw Error(p(188));
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
            throw Error(p(189));
        }
      }
      if (u.alternate !== l)
        throw Error(p(190));
    }
    if (u.tag !== 3)
      throw Error(p(188));
    return u.stateNode.current === u ? n : r;
  }
  function $n(n) {
    return n = Ze(n), n !== null ? hn(n) : null;
  }
  function hn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = hn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var mn = v.unstable_scheduleCallback, dr = v.unstable_cancelCallback, Ci = v.unstable_shouldYield, el = v.unstable_requestPaint, jt = v.unstable_now, dd = v.unstable_getCurrentPriorityLevel, ai = v.unstable_ImmediatePriority, wt = v.unstable_UserBlockingPriority, bi = v.unstable_NormalPriority, gu = v.unstable_LowPriority, tl = v.unstable_IdlePriority, Su = null, ta = null;
  function ps(n) {
    if (ta && typeof ta.onCommitFiberRoot == "function")
      try {
        ta.onCommitFiberRoot(Su, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Pr = Math.clz32 ? Math.clz32 : Ec, vs = Math.log, hs = Math.LN2;
  function Ec(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (vs(n) / hs | 0) | 0;
  }
  var nl = 64, Eu = 4194304;
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
  function Cu(n, r) {
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
  function bu(n, r) {
    for (var u = n.suspendedLanes, l = n.pingedLanes, f = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Pr(h), x = 1 << C, A = f[C];
      A === -1 ? (!(x & u) || x & l) && (f[C] = Cu(x, r)) : A <= r && (n.expiredLanes |= x), h &= ~x;
    }
  }
  function Ru(n) {
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
  function Hi(n, r, u) {
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
  var lo, ul, Pt, ol, ll, ft = !1, so = [], Dn = null, na = null, Vr = null, Tu = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), qt = [], Cc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ra(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dn = null;
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
        Tu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        An.delete(r.pointerId);
    }
  }
  function rr(n, r, u, l, f, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: l, nativeEvent: h, targetContainers: [f] }, r !== null && (r = ks(r), r !== null && ul(r)), n) : (n.eventSystemFlags |= l, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Ti(n, r, u, l, f) {
    switch (r) {
      case "focusin":
        return Dn = rr(Dn, n, r, u, l, f), !0;
      case "dragenter":
        return na = rr(na, n, r, u, l, f), !0;
      case "mouseover":
        return Vr = rr(Vr, n, r, u, l, f), !0;
      case "pointerover":
        var h = f.pointerId;
        return Tu.set(h, rr(Tu.get(h) || null, n, r, u, l, f)), !0;
      case "gotpointercapture":
        return h = f.pointerId, An.set(h, rr(An.get(h) || null, n, r, u, l, f)), !0;
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
  function Ii(n) {
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
  function wu(n, r, u) {
    Ii(n) && u.delete(r);
  }
  function Rc() {
    ft = !1, Dn !== null && Ii(Dn) && (Dn = null), na !== null && Ii(na) && (na = null), Vr !== null && Ii(Vr) && (Vr = null), Tu.forEach(wu), An.forEach(wu);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ft || (ft = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Rc)));
  }
  function _u(n) {
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
    for (Dn !== null && Ua(Dn, n), na !== null && Ua(na, n), Vr !== null && Ua(Vr, n), Tu.forEach(r), An.forEach(r), u = 0; u < qt.length; u++)
      l = qt[u], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < qt.length && (u = qt[0], u.blockedOn === null); )
      bc(u), u.blockedOn === null && qt.shift();
  }
  var xu = J.ReactCurrentBatchConfig, ja = !0;
  function sl(n, r, u, l) {
    var f = Ht, h = xu.transition;
    xu.transition = null;
    try {
      Ht = 1, Du(n, r, u, l);
    } finally {
      Ht = f, xu.transition = h;
    }
  }
  function Ou(n, r, u, l) {
    var f = Ht, h = xu.transition;
    xu.transition = null;
    try {
      Ht = 4, Du(n, r, u, l);
    } finally {
      Ht = f, xu.transition = h;
    }
  }
  function Du(n, r, u, l) {
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
          case wt:
            return 4;
          case bi:
          case gu:
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
  function te(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function me() {
    return !0;
  }
  function rt() {
    return !1;
  }
  function Te(n) {
    function r(u, l, f, h, C) {
      this._reactName = u, this._targetInst = f, this.type = l, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (u = n[x], this[x] = u ? u(h) : h[x]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? me : rt, this.isPropagationStopped = rt, this;
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
  var et = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _t = Te(et), Ft = N({}, et, { view: 0, detail: 0 }), cn = Te(Ft), en, fn, yn, kt = N({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yn && (yn && n.type === "mousemove" ? (en = n.screenX - yn.screenX, fn = n.screenY - yn.screenY) : fn = en = 0, yn = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : fn;
  } }), Bi = Te(kt), fl = N({}, kt, { dataTransfer: 0 }), ys = Te(fl), vd = N({}, Ft, { relatedTarget: 0 }), oi = Te(vd), gs = N({}, et, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ss = Te(gs), hd = N({}, et, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), by = Te(hd), Ry = N({}, et, { data: 0 }), md = Te(Ry), yd = {
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
  var $i = N({}, Ft, { key: function(n) {
    if (n.key) {
      var r = yd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = te(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(n) {
    return n.type === "keypress" ? te(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? te(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ty = Te($i), Sd = N({}, kt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tc = Te(Sd), Ed = N({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), wy = Te(Ed), wc = N({}, et, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lv = Te(wc), aa = N({}, kt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = Te(aa), Yn = [9, 13, 27, 32], li = B && "CompositionEvent" in window, fo = null;
  B && "documentMode" in document && (fo = document.documentMode);
  var _c = B && "TextEvent" in window && !fo, Av = B && (!li || fo && 8 < fo && 11 >= fo), dl = String.fromCharCode(32), zv = !1;
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
    za(l), r = xs(r, "onChange"), 0 < r.length && (u = new _t("onChange", "change", null, u, l), n.push({ event: u, listeners: r }));
  }
  var Es = null, vl = null;
  function hl(n) {
    Nc(n, 0);
  }
  function ml(n) {
    var r = gl(n);
    if (De(r))
      return n;
  }
  function Vv(n, r) {
    if (n === "change")
      return r;
  }
  var Cd = !1;
  if (B) {
    var bd;
    if (B) {
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
      Fv(r, vl, n, Jt(n)), yu(hl, r);
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
      if (!M.call(r, f) || !Pa(n[f], r[f]))
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
  function Wi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dc(n) {
    var r = Oc(), u = n.focusedElem, l = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Qv(u.ownerDocument.documentElement, u)) {
      if (l !== null && Wi(u)) {
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
  var Gv = B && "documentMode" in document && 11 >= document.documentMode, si = null, Td = null, bs = null, wd = !1;
  function qv(n, r, u) {
    var l = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    wd || si == null || si !== Zt(l) || (l = si, "selectionStart" in l && Wi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), bs && Cs(bs, l) || (bs = l, l = xs(Td, "onSelect"), 0 < l.length && (r = new _t("onSelect", "select", null, r, u), n.push({ event: r, listeners: l }), r.target = si)));
  }
  function kc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var po = { animationend: kc("Animation", "AnimationEnd"), animationiteration: kc("Animation", "AnimationIteration"), animationstart: kc("Animation", "AnimationStart"), transitionend: kc("Transition", "TransitionEnd") }, _d = {}, xd = {};
  B && (xd = document.createElement("div").style, "AnimationEvent" in window || (delete po.animationend.animation, delete po.animationiteration.animation, delete po.animationstart.animation), "TransitionEvent" in window || delete po.transitionend.transition);
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
  function Qi(n, r) {
    Jv.set(n, r), w(r, [n]);
  }
  for (var Rs = 0; Rs < eh.length; Rs++) {
    var vo = eh[Rs], My = vo.toLowerCase(), Ts = vo[0].toUpperCase() + vo.slice(1);
    Qi(My, "on" + Ts);
  }
  Qi(Od, "onAnimationEnd"), Qi(Kv, "onAnimationIteration"), Qi(Xv, "onAnimationStart"), Qi("dblclick", "onDoubleClick"), Qi("focusin", "onFocus"), Qi("focusout", "onBlur"), Qi(Zv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));
  function th(n, r, u) {
    var l = n.type || "unknown-event";
    n.currentTarget = u, Me(l, r, void 0, n), n.currentTarget = null;
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
            var x = l[C], A = x.instance, Z = x.currentTarget;
            if (x = x.listener, A !== h && f.isPropagationStopped())
              break e;
            th(f, x, Z), h = A;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (x = l[C], A = x.instance, Z = x.currentTarget, x = x.listener, A !== h && f.isPropagationStopped())
              break e;
            th(f, x, Z), h = A;
          }
      }
    }
    if (Ei)
      throw n = D, Ei = !1, D = null, n;
  }
  function dn(n, r) {
    var u = r[zd];
    u === void 0 && (u = r[zd] = /* @__PURE__ */ new Set());
    var l = n + "__bubble";
    u.has(l) || (nh(r, n, 2, !1), u.add(l));
  }
  function ku(n, r, u) {
    var l = 0;
    r && (l |= 4), nh(u, n, l, r);
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function yl(n) {
    if (!n[Gi]) {
      n[Gi] = !0, E.forEach(function(u) {
        u !== "selectionchange" && (Ly.has(u) || ku(u, !1, n), ku(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Gi] || (r[Gi] = !0, ku("selectionchange", !1, r));
    }
  }
  function nh(n, r, u, l) {
    switch (ms(r)) {
      case 1:
        var f = sl;
        break;
      case 4:
        f = Ou;
        break;
      default:
        f = Du;
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
                var A = C.tag;
                if ((A === 3 || A === 4) && (A = C.stateNode.containerInfo, A === f || A.nodeType === 8 && A.parentNode === f))
                  return;
                C = C.return;
              }
            for (; x !== null; ) {
              if (C = Fa(x), C === null)
                return;
              if (A = C.tag, A === 5 || A === 6) {
                l = h = C;
                continue e;
              }
              x = x.parentNode;
            }
          }
          l = l.return;
        }
    yu(function() {
      var Z = h, fe = Jt(u), pe = [];
      e: {
        var ce = Jv.get(n);
        if (ce !== void 0) {
          var ke = _t, Pe = n;
          switch (n) {
            case "keypress":
              if (te(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              ke = Ty;
              break;
            case "focusin":
              Pe = "focus", ke = oi;
              break;
            case "focusout":
              Pe = "blur", ke = oi;
              break;
            case "beforeblur":
            case "afterblur":
              ke = oi;
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
              ke = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ke = ys;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ke = wy;
              break;
            case Od:
            case Kv:
            case Xv:
              ke = Ss;
              break;
            case Zv:
              ke = Lv;
              break;
            case "scroll":
              ke = cn;
              break;
            case "wheel":
              ke = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ke = by;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ke = Tc;
          }
          var Ie = (r & 4) !== 0, Hn = !Ie && n === "scroll", Y = Ie ? ce !== null ? ce + "Capture" : null : ce;
          Ie = [];
          for (var V = Z, G; V !== null; ) {
            G = V;
            var ye = G.stateNode;
            if (G.tag === 5 && ye !== null && (G = ye, Y !== null && (ye = Ca(V, Y), ye != null && Ie.push(_s(V, ye, G)))), Hn)
              break;
            V = V.return;
          }
          0 < Ie.length && (ce = new ke(ce, Pe, null, u, fe), pe.push({ event: ce, listeners: Ie }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", ke = n === "mouseout" || n === "pointerout", ce && u !== _r && (Pe = u.relatedTarget || u.fromElement) && (Fa(Pe) || Pe[qi]))
            break e;
          if ((ke || ce) && (ce = fe.window === fe ? fe : (ce = fe.ownerDocument) ? ce.defaultView || ce.parentWindow : window, ke ? (Pe = u.relatedTarget || u.toElement, ke = Z, Pe = Pe ? Fa(Pe) : null, Pe !== null && (Hn = mt(Pe), Pe !== Hn || Pe.tag !== 5 && Pe.tag !== 6) && (Pe = null)) : (ke = null, Pe = Z), ke !== Pe)) {
            if (Ie = Bi, ye = "onMouseLeave", Y = "onMouseEnter", V = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = Tc, ye = "onPointerLeave", Y = "onPointerEnter", V = "pointer"), Hn = ke == null ? ce : gl(ke), G = Pe == null ? ce : gl(Pe), ce = new Ie(ye, V + "leave", ke, u, fe), ce.target = Hn, ce.relatedTarget = G, ye = null, Fa(fe) === Z && (Ie = new Ie(Y, V + "enter", Pe, u, fe), Ie.target = G, Ie.relatedTarget = Hn, ye = Ie), Hn = ye, ke && Pe)
              t: {
                for (Ie = ke, Y = Pe, V = 0, G = Ie; G; G = ho(G))
                  V++;
                for (G = 0, ye = Y; ye; ye = ho(ye))
                  G++;
                for (; 0 < V - G; )
                  Ie = ho(Ie), V--;
                for (; 0 < G - V; )
                  Y = ho(Y), G--;
                for (; V--; ) {
                  if (Ie === Y || Y !== null && Ie === Y.alternate)
                    break t;
                  Ie = ho(Ie), Y = ho(Y);
                }
                Ie = null;
              }
            else
              Ie = null;
            ke !== null && Dd(pe, ce, ke, Ie, !1), Pe !== null && Hn !== null && Dd(pe, Hn, Pe, Ie, !0);
          }
        }
        e: {
          if (ce = Z ? gl(Z) : window, ke = ce.nodeName && ce.nodeName.toLowerCase(), ke === "select" || ke === "input" && ce.type === "file")
            var Be = Vv;
          else if (Pv(ce))
            if (Cd)
              Be = $v;
            else {
              Be = Dy;
              var Fe = Oy;
            }
          else
            (ke = ce.nodeName) && ke.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && (Be = ky);
          if (Be && (Be = Be(n, Z))) {
            Fv(pe, Be, u, fe);
            break e;
          }
          Fe && Fe(n, ce, Z), n === "focusout" && (Fe = ce._wrapperState) && Fe.controlled && ce.type === "number" && Zr(ce, "number", ce.value);
        }
        switch (Fe = Z ? gl(Z) : window, n) {
          case "focusin":
            (Pv(Fe) || Fe.contentEditable === "true") && (si = Fe, Td = Z, bs = null);
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
                var ct = "onCompositionStart";
                break e;
              case "compositionend":
                ct = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break e;
            }
            ct = void 0;
          }
        else
          pl ? Uv(n, u) && (ct = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (ct = "onCompositionStart");
        ct && (Av && u.locale !== "ko" && (pl || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && pl && (Qe = K()) : (ui = fe, S = "value" in ui ? ui.value : ui.textContent, pl = !0)), Fe = xs(Z, ct), 0 < Fe.length && (ct = new md(ct, n, null, u, fe), pe.push({ event: ct, listeners: Fe }), Qe ? ct.data = Qe : (Qe = xc(u), Qe !== null && (ct.data = Qe)))), (Qe = _c ? _y(n, u) : xy(n, u)) && (Z = xs(Z, "onBeforeInput"), 0 < Z.length && (fe = new md("onBeforeInput", "beforeinput", null, u, fe), pe.push({ event: fe, listeners: Z }), fe.data = Qe));
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
      var x = u, A = x.alternate, Z = x.stateNode;
      if (A !== null && A === l)
        break;
      x.tag === 5 && Z !== null && (x = Z, f ? (A = Ca(u, h), A != null && C.unshift(_s(u, A, x))) : f || (A = Ca(u, h), A != null && C.push(_s(u, A, x)))), u = u.return;
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
      throw Error(p(425));
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
  function Nu(n, r) {
    var u = r, l = 0;
    do {
      var f = u.nextSibling;
      if (n.removeChild(u), f && f.nodeType === 8)
        if (u = f.data, u === "/$") {
          if (l === 0) {
            n.removeChild(f), _u(r);
            return;
          }
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || l++;
      u = f;
    } while (u);
    _u(r);
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
  var Mu = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Mu, go = "__reactProps$" + Mu, qi = "__reactContainer$" + Mu, zd = "__reactEvents$" + Mu, Uy = "__reactListeners$" + Mu, Ud = "__reactHandles$" + Mu;
  function Fa(n) {
    var r = n[wi];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[qi] || u[wi]) {
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
    return n = n[wi] || n[qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function qe(n) {
    return n[go] || null;
  }
  var Lu = [], gn = -1;
  function gt(n) {
    return { current: n };
  }
  function Yt(n) {
    0 > gn || (n.current = Lu[gn], Lu[gn] = null, gn--);
  }
  function Kt(n, r) {
    gn++, Lu[gn] = n.current, n.current = r;
  }
  var _i = {}, st = gt(_i), zn = gt(!1), ia = _i;
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
  function wn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ha() {
    Yt(zn), Yt(st);
  }
  function Au(n, r, u) {
    if (st.current !== _i)
      throw Error(p(168));
    Kt(st, r), Kt(zn, u);
  }
  function Ns(n, r, u) {
    var l = n.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function")
      return u;
    l = l.getChildContext();
    for (var f in l)
      if (!(f in r))
        throw Error(p(108, Ct(n) || "Unknown", f));
    return N({}, u, l);
  }
  function zc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, ia = st.current, Kt(st, n), Kt(zn, zn.current), !0;
  }
  function ah(n, r, u) {
    var l = n.stateNode;
    if (!l)
      throw Error(p(169));
    u ? (n = Ns(n, r, ia), l.__reactInternalMemoizedMergedChildContext = n, Yt(zn), Yt(st), Kt(st, n)) : Yt(zn), Kt(zn, u);
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
        throw Ta !== null && (Ta = Ta.slice(n + 1)), mn(ai, ua), f;
      } finally {
        Ht = r, Ms = !1;
      }
    }
    return null;
  }
  var zu = [], oa = 0, So = null, Sl = 0, la = [], xr = 0, Ia = null, pr = 1, Ki = "";
  function wa(n, r) {
    zu[oa++] = Sl, zu[oa++] = So, So = n, Sl = r;
  }
  function Fd(n, r, u) {
    la[xr++] = pr, la[xr++] = Ki, la[xr++] = Ia, Ia = n;
    var l = pr;
    n = Ki;
    var f = 32 - Pr(l) - 1;
    l &= ~(1 << f), u += 1;
    var h = 32 - Pr(r) + f;
    if (30 < h) {
      var C = f - f % 5;
      h = (l & (1 << C) - 1).toString(32), l >>= C, f -= C, pr = 1 << 32 - Pr(r) + f | u << f | l, Ki = h + n;
    } else
      pr = 1 << h | u << f | l, Ki = n;
  }
  function Uc(n) {
    n.return !== null && (wa(n, 1), Fd(n, 1, 0));
  }
  function Vd(n) {
    for (; n === So; )
      So = zu[--oa], zu[oa] = null, Sl = zu[--oa], zu[oa] = null;
    for (; n === Ia; )
      Ia = la[--xr], la[xr] = null, Ki = la[--xr], la[xr] = null, pr = la[--xr], la[xr] = null;
  }
  var _a = null, sa = null, Sn = !1, Ba = null;
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Ia !== null ? { id: pr, overflow: Ki } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = qa(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, _a = n, sa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pc(n) {
    if (Sn) {
      var r = sa;
      if (r) {
        var u = r;
        if (!ih(n, r)) {
          if (jc(n))
            throw Error(p(418));
          r = ci(u.nextSibling);
          var l = _a;
          r && ih(n, r) ? Hd(l, u) : (n.flags = n.flags & -4097 | 2, Sn = !1, _a = n);
        }
      } else {
        if (jc(n))
          throw Error(p(418));
        n.flags = n.flags & -4097 | 2, Sn = !1, _a = n;
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
    if (!Sn)
      return uh(n), Sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Os(n.type, n.memoizedProps)), r && (r = sa)) {
      if (jc(n))
        throw oh(), Error(p(418));
      for (; r; )
        Hd(n, r), r = ci(r.nextSibling);
    }
    if (uh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
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
  function kn() {
    sa = _a = null, Sn = !1;
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
  var xi = gt(null), Hc = null, Uu = null, Bd = null;
  function $d() {
    Bd = Uu = Hc = null;
  }
  function ju(n) {
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
    Hc = n, Bd = Uu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Wn = !0), n.firstContext = null);
  }
  function Vn(n) {
    var r = n._currentValue;
    if (Bd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Uu === null) {
        if (Hc === null)
          throw Error(p(308));
        Uu = n, Hc.dependencies = { lanes: 0, firstContext: n };
      } else
        Uu = Uu.next = n;
    return r;
  }
  var vr = null;
  function Yd(n) {
    vr === null ? vr = [n] : vr.push(n);
  }
  function lh(n, r, u, l) {
    var f = r.interleaved;
    return f === null ? (u.next = u, Yd(r)) : (u.next = f.next, f.next = u), r.interleaved = u, Xi(n, l);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Pu = !1;
  function Wd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fu(n, r, u) {
    var l = n.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, Ot & 2) {
      var f = l.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), l.pending = r, Xi(n, u);
    }
    return f = l.interleaved, f === null ? (r.next = r, Yd(l)) : (r.next = f.next, f.next = r), l.interleaved = r, Xi(n, u);
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
  function Vu(n, r, u, l) {
    var f = n.updateQueue;
    Pu = !1;
    var h = f.firstBaseUpdate, C = f.lastBaseUpdate, x = f.shared.pending;
    if (x !== null) {
      f.shared.pending = null;
      var A = x, Z = A.next;
      A.next = null, C === null ? h = Z : C.next = Z, C = A;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, x = fe.lastBaseUpdate, x !== C && (x === null ? fe.firstBaseUpdate = Z : x.next = Z, fe.lastBaseUpdate = A));
    }
    if (h !== null) {
      var pe = f.baseState;
      C = 0, fe = Z = A = null, x = h;
      do {
        var ce = x.lane, ke = x.eventTime;
        if ((l & ce) === ce) {
          fe !== null && (fe = fe.next = {
            eventTime: ke,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Pe = n, Ie = x;
            switch (ce = r, ke = u, Ie.tag) {
              case 1:
                if (Pe = Ie.payload, typeof Pe == "function") {
                  pe = Pe.call(ke, pe, ce);
                  break e;
                }
                pe = Pe;
                break e;
              case 3:
                Pe.flags = Pe.flags & -65537 | 128;
              case 0:
                if (Pe = Ie.payload, ce = typeof Pe == "function" ? Pe.call(ke, pe, ce) : Pe, ce == null)
                  break e;
                pe = N({}, pe, ce);
                break e;
              case 2:
                Pu = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ce = f.effects, ce === null ? f.effects = [x] : ce.push(x));
        } else
          ke = { eventTime: ke, lane: ce, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, fe === null ? (Z = fe = ke, A = pe) : fe = fe.next = ke, C |= ce;
        if (x = x.next, x === null) {
          if (x = f.shared.pending, x === null)
            break;
          ce = x, x = ce.next, ce.next = null, f.lastBaseUpdate = ce, f.shared.pending = null;
        }
      } while (1);
      if (fe === null && (A = pe), f.baseState = A, f.firstBaseUpdate = Z, f.lastBaseUpdate = fe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else
        h === null && (f.shared.lanes = 0);
      nu |= C, n.lanes = C, n.memoizedState = pe;
    }
  }
  function Eo(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var l = n[r], f = l.callback;
        if (f !== null) {
          if (l.callback = null, l = u, typeof f != "function")
            throw Error(p(191, f));
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
    var l = Nr(), f = Qn(n), h = Zi(l, f);
    h.payload = r, u != null && (h.callback = u), r = Fu(n, h, f), r !== null && (Mr(r, n, f, l), Ic(r, n, f));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var l = Nr(), f = Qn(n), h = Zi(l, f);
    h.tag = 1, h.payload = r, u != null && (h.callback = u), r = Fu(n, h, f), r !== null && (Mr(r, n, f, l), Ic(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = Nr(), l = Qn(n), f = Zi(u, l);
    f.tag = 2, r != null && (f.callback = r), r = Fu(n, f, l), r !== null && (Mr(r, n, l, u), Ic(r, n, l));
  } };
  function ch(n, r, u, l, f, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, h, C) : r.prototype && r.prototype.isPureReactComponent ? !Cs(u, l) || !Cs(f, h) : !0;
  }
  function fh(n, r, u) {
    var l = !1, f = _i, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Vn(h) : (f = wn(r) ? ia : st.current, l = r.contextTypes, h = (l = l != null) ? Va(n, f) : _i), r = new r(u, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Bc, n.stateNode = r, r._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function dh(n, r, u, l) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, l), r.state !== n && Bc.enqueueReplaceState(r, r.state, null);
  }
  function $c(n, r, u, l) {
    var f = n.stateNode;
    f.props = u, f.state = n.memoizedState, f.refs = sh, Wd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? f.context = Vn(h) : (h = wn(r) ? ia : st.current, f.context = Va(n, h)), f.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Gd(n, r, h, u), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Bc.enqueueReplaceState(f, f.state, null), Vu(n, u, f, l), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function El(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(p(309));
          var l = u.stateNode;
        }
        if (!l)
          throw Error(p(147, n));
        var f = l, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var x = f.refs;
          x === sh && (x = f.refs = {}), C === null ? delete x[h] : x[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!u._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function Yc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ph(n) {
    var r = n._init;
    return r(n._payload);
  }
  function vh(n) {
    function r(Y, V) {
      if (n) {
        var G = Y.deletions;
        G === null ? (Y.deletions = [V], Y.flags |= 16) : G.push(V);
      }
    }
    function u(Y, V) {
      if (!n)
        return null;
      for (; V !== null; )
        r(Y, V), V = V.sibling;
      return null;
    }
    function l(Y, V) {
      for (Y = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? Y.set(V.key, V) : Y.set(V.index, V), V = V.sibling;
      return Y;
    }
    function f(Y, V) {
      return Y = Gu(Y, V), Y.index = 0, Y.sibling = null, Y;
    }
    function h(Y, V, G) {
      return Y.index = G, n ? (G = Y.alternate, G !== null ? (G = G.index, G < V ? (Y.flags |= 2, V) : G) : (Y.flags |= 2, V)) : (Y.flags |= 1048576, V);
    }
    function C(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function x(Y, V, G, ye) {
      return V === null || V.tag !== 6 ? (V = Xs(G, Y.mode, ye), V.return = Y, V) : (V = f(V, G), V.return = Y, V);
    }
    function A(Y, V, G, ye) {
      var Be = G.type;
      return Be === ge ? fe(Y, V, G.props.children, ye, G.key) : V !== null && (V.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === Et && ph(Be) === V.type) ? (ye = f(V, G.props), ye.ref = El(Y, V, G), ye.return = Y, ye) : (ye = Tf(G.type, G.key, G.props, null, Y.mode, ye), ye.ref = El(Y, V, G), ye.return = Y, ye);
    }
    function Z(Y, V, G, ye) {
      return V === null || V.tag !== 4 || V.stateNode.containerInfo !== G.containerInfo || V.stateNode.implementation !== G.implementation ? (V = Fo(G, Y.mode, ye), V.return = Y, V) : (V = f(V, G.children || []), V.return = Y, V);
    }
    function fe(Y, V, G, ye, Be) {
      return V === null || V.tag !== 7 ? (V = Po(G, Y.mode, ye, Be), V.return = Y, V) : (V = f(V, G), V.return = Y, V);
    }
    function pe(Y, V, G) {
      if (typeof V == "string" && V !== "" || typeof V == "number")
        return V = Xs("" + V, Y.mode, G), V.return = Y, V;
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case F:
            return G = Tf(V.type, V.key, V.props, null, Y.mode, G), G.ref = El(Y, null, V), G.return = Y, G;
          case de:
            return V = Fo(V, Y.mode, G), V.return = Y, V;
          case Et:
            var ye = V._init;
            return pe(Y, ye(V._payload), G);
        }
        if (nr(V) || He(V))
          return V = Po(V, Y.mode, G, null), V.return = Y, V;
        Yc(Y, V);
      }
      return null;
    }
    function ce(Y, V, G, ye) {
      var Be = V !== null ? V.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return Be !== null ? null : x(Y, V, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case F:
            return G.key === Be ? A(Y, V, G, ye) : null;
          case de:
            return G.key === Be ? Z(Y, V, G, ye) : null;
          case Et:
            return Be = G._init, ce(
              Y,
              V,
              Be(G._payload),
              ye
            );
        }
        if (nr(G) || He(G))
          return Be !== null ? null : fe(Y, V, G, ye, null);
        Yc(Y, G);
      }
      return null;
    }
    function ke(Y, V, G, ye, Be) {
      if (typeof ye == "string" && ye !== "" || typeof ye == "number")
        return Y = Y.get(G) || null, x(V, Y, "" + ye, Be);
      if (typeof ye == "object" && ye !== null) {
        switch (ye.$$typeof) {
          case F:
            return Y = Y.get(ye.key === null ? G : ye.key) || null, A(V, Y, ye, Be);
          case de:
            return Y = Y.get(ye.key === null ? G : ye.key) || null, Z(V, Y, ye, Be);
          case Et:
            var Fe = ye._init;
            return ke(Y, V, G, Fe(ye._payload), Be);
        }
        if (nr(ye) || He(ye))
          return Y = Y.get(G) || null, fe(V, Y, ye, Be, null);
        Yc(V, ye);
      }
      return null;
    }
    function Pe(Y, V, G, ye) {
      for (var Be = null, Fe = null, Qe = V, ct = V = 0, sr = null; Qe !== null && ct < G.length; ct++) {
        Qe.index > ct ? (sr = Qe, Qe = null) : sr = Qe.sibling;
        var Vt = ce(Y, Qe, G[ct], ye);
        if (Vt === null) {
          Qe === null && (Qe = sr);
          break;
        }
        n && Qe && Vt.alternate === null && r(Y, Qe), V = h(Vt, V, ct), Fe === null ? Be = Vt : Fe.sibling = Vt, Fe = Vt, Qe = sr;
      }
      if (ct === G.length)
        return u(Y, Qe), Sn && wa(Y, ct), Be;
      if (Qe === null) {
        for (; ct < G.length; ct++)
          Qe = pe(Y, G[ct], ye), Qe !== null && (V = h(Qe, V, ct), Fe === null ? Be = Qe : Fe.sibling = Qe, Fe = Qe);
        return Sn && wa(Y, ct), Be;
      }
      for (Qe = l(Y, Qe); ct < G.length; ct++)
        sr = ke(Qe, Y, ct, G[ct], ye), sr !== null && (n && sr.alternate !== null && Qe.delete(sr.key === null ? ct : sr.key), V = h(sr, V, ct), Fe === null ? Be = sr : Fe.sibling = sr, Fe = sr);
      return n && Qe.forEach(function(qu) {
        return r(Y, qu);
      }), Sn && wa(Y, ct), Be;
    }
    function Ie(Y, V, G, ye) {
      var Be = He(G);
      if (typeof Be != "function")
        throw Error(p(150));
      if (G = Be.call(G), G == null)
        throw Error(p(151));
      for (var Fe = Be = null, Qe = V, ct = V = 0, sr = null, Vt = G.next(); Qe !== null && !Vt.done; ct++, Vt = G.next()) {
        Qe.index > ct ? (sr = Qe, Qe = null) : sr = Qe.sibling;
        var qu = ce(Y, Qe, Vt.value, ye);
        if (qu === null) {
          Qe === null && (Qe = sr);
          break;
        }
        n && Qe && qu.alternate === null && r(Y, Qe), V = h(qu, V, ct), Fe === null ? Be = qu : Fe.sibling = qu, Fe = qu, Qe = sr;
      }
      if (Vt.done)
        return u(
          Y,
          Qe
        ), Sn && wa(Y, ct), Be;
      if (Qe === null) {
        for (; !Vt.done; ct++, Vt = G.next())
          Vt = pe(Y, Vt.value, ye), Vt !== null && (V = h(Vt, V, ct), Fe === null ? Be = Vt : Fe.sibling = Vt, Fe = Vt);
        return Sn && wa(Y, ct), Be;
      }
      for (Qe = l(Y, Qe); !Vt.done; ct++, Vt = G.next())
        Vt = ke(Qe, Y, ct, Vt.value, ye), Vt !== null && (n && Vt.alternate !== null && Qe.delete(Vt.key === null ? ct : Vt.key), V = h(Vt, V, ct), Fe === null ? Be = Vt : Fe.sibling = Vt, Fe = Vt);
      return n && Qe.forEach(function(ng) {
        return r(Y, ng);
      }), Sn && wa(Y, ct), Be;
    }
    function Hn(Y, V, G, ye) {
      if (typeof G == "object" && G !== null && G.type === ge && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case F:
            e: {
              for (var Be = G.key, Fe = V; Fe !== null; ) {
                if (Fe.key === Be) {
                  if (Be = G.type, Be === ge) {
                    if (Fe.tag === 7) {
                      u(Y, Fe.sibling), V = f(Fe, G.props.children), V.return = Y, Y = V;
                      break e;
                    }
                  } else if (Fe.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === Et && ph(Be) === Fe.type) {
                    u(Y, Fe.sibling), V = f(Fe, G.props), V.ref = El(Y, Fe, G), V.return = Y, Y = V;
                    break e;
                  }
                  u(Y, Fe);
                  break;
                } else
                  r(Y, Fe);
                Fe = Fe.sibling;
              }
              G.type === ge ? (V = Po(G.props.children, Y.mode, ye, G.key), V.return = Y, Y = V) : (ye = Tf(G.type, G.key, G.props, null, Y.mode, ye), ye.ref = El(Y, V, G), ye.return = Y, Y = ye);
            }
            return C(Y);
          case de:
            e: {
              for (Fe = G.key; V !== null; ) {
                if (V.key === Fe)
                  if (V.tag === 4 && V.stateNode.containerInfo === G.containerInfo && V.stateNode.implementation === G.implementation) {
                    u(Y, V.sibling), V = f(V, G.children || []), V.return = Y, Y = V;
                    break e;
                  } else {
                    u(Y, V);
                    break;
                  }
                else
                  r(Y, V);
                V = V.sibling;
              }
              V = Fo(G, Y.mode, ye), V.return = Y, Y = V;
            }
            return C(Y);
          case Et:
            return Fe = G._init, Hn(Y, V, Fe(G._payload), ye);
        }
        if (nr(G))
          return Pe(Y, V, G, ye);
        if (He(G))
          return Ie(Y, V, G, ye);
        Yc(Y, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, V !== null && V.tag === 6 ? (u(Y, V.sibling), V = f(V, G), V.return = Y, Y = V) : (u(Y, V), V = Xs(G, Y.mode, ye), V.return = Y, Y = V), C(Y)) : u(Y, V);
    }
    return Hn;
  }
  var Cl = vh(!0), hh = vh(!1), Ls = {}, fi = gt(Ls), As = gt(Ls), bl = gt(Ls);
  function Co(n) {
    if (n === Ls)
      throw Error(p(174));
    return n;
  }
  function qd(n, r) {
    switch (Kt(bl, r), Kt(As, n), Kt(fi, Ls), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : xn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = xn(r, n);
    }
    Yt(fi), Kt(fi, r);
  }
  function Hu() {
    Yt(fi), Yt(As), Yt(bl);
  }
  function tt(n) {
    Co(bl.current);
    var r = Co(fi.current), u = xn(r, n.type);
    r !== u && (Kt(As, n), Kt(fi, u));
  }
  function xt(n) {
    As.current === n && (Yt(fi), Yt(As));
  }
  var at = gt(0);
  function Nn(n) {
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
  var Qc = J.ReactCurrentDispatcher, Kd = J.ReactCurrentBatchConfig, bo = 0, En = null, ae = null, Mt = null, ut = !1, Oi = !1, Oa = 0, Ro = 0;
  function Cn() {
    throw Error(p(321));
  }
  function To(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!Pa(n[u], r[u]))
        return !1;
    return !0;
  }
  function Iu(n, r, u, l, f, h) {
    if (bo = h, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Qc.current = n === null || n.memoizedState === null ? Py : Fy, n = u(l, f), Oi) {
      h = 0;
      do {
        if (Oi = !1, Oa = 0, 25 <= h)
          throw Error(p(301));
        h += 1, Mt = ae = null, r.updateQueue = null, Qc.current = Zd, n = u(l, f);
      } while (Oi);
    }
    if (Qc.current = cf, r = ae !== null && ae.next !== null, bo = 0, Mt = ae = En = null, ut = !1, r)
      throw Error(p(300));
    return n;
  }
  function wo() {
    var n = Oa !== 0;
    return Oa = 0, n;
  }
  function Ya() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Mt === null ? En.memoizedState = Mt = n : Mt = Mt.next = n, Mt;
  }
  function ca() {
    if (ae === null) {
      var n = En.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ae.next;
    var r = Mt === null ? En.memoizedState : Mt.next;
    if (r !== null)
      Mt = r, ae = n;
    else {
      if (n === null)
        throw Error(p(310));
      ae = n, n = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, Mt === null ? En.memoizedState = Mt = n : Mt = Mt.next = n;
    }
    return Mt;
  }
  function _o(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zs(n) {
    var r = ca(), u = r.queue;
    if (u === null)
      throw Error(p(311));
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
      var x = C = null, A = null, Z = h;
      do {
        var fe = Z.lane;
        if ((bo & fe) === fe)
          A !== null && (A = A.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), l = Z.hasEagerState ? Z.eagerState : n(l, Z.action);
        else {
          var pe = {
            lane: fe,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          A === null ? (x = A = pe, C = l) : A = A.next = pe, En.lanes |= fe, nu |= fe;
        }
        Z = Z.next;
      } while (Z !== null && Z !== h);
      A === null ? C = l : A.next = x, Pa(l, r.memoizedState) || (Wn = !0), r.memoizedState = l, r.baseState = C, r.baseQueue = A, u.lastRenderedState = l;
    }
    if (n = u.interleaved, n !== null) {
      f = n;
      do
        h = f.lane, En.lanes |= h, nu |= h, f = f.next;
      while (f !== n);
    } else
      f === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Us(n) {
    var r = ca(), u = r.queue;
    if (u === null)
      throw Error(p(311));
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
    var u = En, l = ca(), f = r(), h = !Pa(l.memoizedState, f);
    if (h && (l.memoizedState = f, Wn = !0), l = l.queue, js(Zc.bind(null, u, l, n), [n]), l.getSnapshot !== r || h || Mt !== null && Mt.memoizedState.tag & 1) {
      if (u.flags |= 2048, xo(9, Xc.bind(null, u, l, f, r), void 0, null), Mn === null)
        throw Error(p(349));
      bo & 30 || Kc(u, r, f);
    }
    return f;
  }
  function Kc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
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
    var r = Xi(n, 1);
    r !== null && Mr(r, n, 1, -1);
  }
  function tf(n) {
    var r = Ya();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _o, lastRenderedState: n }, r.queue = n, n = n.dispatch = sf.bind(null, En, n), [r.memoizedState, n];
  }
  function xo(n, r, u, l) {
    return n = { tag: n, create: r, destroy: u, deps: l, next: null }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (l = u.next, u.next = n, n.next = l, r.lastEffect = n)), n;
  }
  function nf() {
    return ca().memoizedState;
  }
  function Oo(n, r, u, l) {
    var f = Ya();
    En.flags |= n, f.memoizedState = xo(1 | r, u, void 0, l === void 0 ? null : l);
  }
  function Ji(n, r, u, l) {
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
    En.flags |= n, f.memoizedState = xo(1 | r, u, h, l);
  }
  function rf(n, r) {
    return Oo(8390656, 8, n, r);
  }
  function js(n, r) {
    return Ji(2048, 8, n, r);
  }
  function af(n, r) {
    return Ji(4, 2, n, r);
  }
  function uf(n, r) {
    return Ji(4, 4, n, r);
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
    return u = u != null ? u.concat([n]) : null, Ji(4, 4, Xd.bind(null, r, n), u);
  }
  function of() {
  }
  function Tl(n, r) {
    var u = ca();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && To(r, l[1]) ? l[0] : (u.memoizedState = [n, r], n);
  }
  function Bu(n, r) {
    var u = ca();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && To(r, l[1]) ? l[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function fa(n, r, u) {
    return bo & 21 ? (Pa(u, r) || (u = rl(), En.lanes |= u, nu |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Wn = !0), n.memoizedState = u);
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
  function pn() {
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
            var A = r.interleaved;
            A === null ? (f.next = f, Yd(r)) : (f.next = A.next, A.next = f), r.interleaved = f;
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
    return n === En || r !== null && r === En;
  }
  function Ps(n, r) {
    Oi = ut = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function mh(n, r, u) {
    if (u & 4194240) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, Ri(n, u);
    }
  }
  var cf = { readContext: Vn, useCallback: Cn, useContext: Cn, useEffect: Cn, useImperativeHandle: Cn, useInsertionEffect: Cn, useLayoutEffect: Cn, useMemo: Cn, useReducer: Cn, useRef: Cn, useState: Cn, useDebugValue: Cn, useDeferredValue: Cn, useTransition: Cn, useMutableSource: Cn, useSyncExternalStore: Cn, useId: Cn, unstable_isNewReconciler: !1 }, Py = { readContext: Vn, useCallback: function(n, r) {
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
    return r = u !== void 0 ? u(r) : r, l.memoizedState = l.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, l.queue = n, n = n.dispatch = lf.bind(null, En, n), [l.memoizedState, n];
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
    var l = En, f = Ya();
    if (Sn) {
      if (u === void 0)
        throw Error(p(407));
      u = u();
    } else {
      if (u = r(), Mn === null)
        throw Error(p(349));
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
    var n = Ya(), r = Mn.identifierPrefix;
    if (Sn) {
      var u = Ki, l = pr;
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
    useMemo: Bu,
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
    useId: pn,
    unstable_isNewReconciler: !1
  }, Zd = { readContext: Vn, useCallback: Tl, useContext: Vn, useEffect: js, useImperativeHandle: Rl, useInsertionEffect: af, useLayoutEffect: uf, useMemo: Bu, useReducer: Us, useRef: nf, useState: function() {
    return Us(_o);
  }, useDebugValue: of, useDeferredValue: function(n) {
    var r = ca();
    return ae === null ? r.memoizedState = n : fa(r, ae.memoizedState, n);
  }, useTransition: function() {
    var n = Us(_o)[0], r = ca().memoizedState;
    return [n, r];
  }, useMutableSource: Gc, useSyncExternalStore: qc, useId: pn, unstable_isNewReconciler: !1 };
  function _l(n, r) {
    try {
      var u = "", l = r;
      do
        u += Tt(l), l = l.return;
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
    u = Zi(-1, u), u.tag = 3, u.payload = { element: null };
    var l = r.value;
    return u.callback = function() {
      gf || (gf = !0, Lo = l), ff(n, r);
    }, u;
  }
  function Vs(n, r, u) {
    u = Zi(-1, u), u.tag = 3;
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Zi(-1, 1), r.tag = 2, Fu(u, r, 1))), u.lanes |= 1), n);
  }
  var Hy = J.ReactCurrentOwner, Wn = !1;
  function Kn(n, r, u, l) {
    r.child = n === null ? hh(r, null, u, l) : Cl(r, n.child, u, l);
  }
  function $u(n, r, u, l, f) {
    u = u.render;
    var h = r.ref;
    return Ce(r, f), l = Iu(n, r, u, l, h, f), u = wo(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, hr(n, r, f)) : (Sn && u && Uc(r), r.flags |= 1, Kn(n, r, l, f), r.child);
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
    return r.flags |= 1, n = Gu(h, l), n.ref = r.ref, n.return = r, r.child = n;
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
    var h = wn(u) ? ia : st.current;
    return h = Va(r, h), Ce(r, f), u = Iu(n, r, u, l, h, f), l = wo(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, hr(n, r, f)) : (Sn && l && Uc(r), r.flags |= 1, Kn(n, r, u, f), r.child);
  }
  function tp(n, r, u, l, f) {
    if (wn(u)) {
      var h = !0;
      zc(r);
    } else
      h = !1;
    if (Ce(r, f), r.stateNode === null)
      Or(n, r), fh(r, u, l), $c(r, u, l, f), l = !0;
    else if (n === null) {
      var C = r.stateNode, x = r.memoizedProps;
      C.props = x;
      var A = C.context, Z = u.contextType;
      typeof Z == "object" && Z !== null ? Z = Vn(Z) : (Z = wn(u) ? ia : st.current, Z = Va(r, Z));
      var fe = u.getDerivedStateFromProps, pe = typeof fe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      pe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== l || A !== Z) && dh(r, C, l, Z), Pu = !1;
      var ce = r.memoizedState;
      C.state = ce, Vu(r, l, C, f), A = r.memoizedState, x !== l || ce !== A || zn.current || Pu ? (typeof fe == "function" && (Gd(r, u, fe, l), A = r.memoizedState), (x = Pu || ch(r, u, x, l, ce, A, Z)) ? (pe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = A), C.props = l, C.state = A, C.context = Z, l = x) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      C = r.stateNode, qn(n, r), x = r.memoizedProps, Z = r.type === r.elementType ? x : xa(r.type, x), C.props = Z, pe = r.pendingProps, ce = C.context, A = u.contextType, typeof A == "object" && A !== null ? A = Vn(A) : (A = wn(u) ? ia : st.current, A = Va(r, A));
      var ke = u.getDerivedStateFromProps;
      (fe = typeof ke == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== pe || ce !== A) && dh(r, C, l, A), Pu = !1, ce = r.memoizedState, C.state = ce, Vu(r, l, C, f);
      var Pe = r.memoizedState;
      x !== pe || ce !== Pe || zn.current || Pu ? (typeof ke == "function" && (Gd(r, u, ke, l), Pe = r.memoizedState), (Z = Pu || ch(r, u, Z, l, ce, Pe, A) || !1) ? (fe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(l, Pe, A), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(l, Pe, A)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = Pe), C.props = l, C.state = Pe, C.context = A, l = Z) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), l = !1);
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
    r.pendingContext ? Au(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Au(n, r.context, !1), qd(n, r.containerInfo);
  }
  function pf(n, r, u, l, f) {
    return kn(), Id(f), r.flags |= 256, Kn(n, r, u, l), r.child;
  }
  var ko = { dehydrated: null, treeContext: null, retryLane: 0 };
  function np(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rp(n, r, u) {
    var l = r.pendingProps, f = at.current, h = !1, C = (r.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), x ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Kt(at, f & 1), n === null)
      return Pc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = l.children, n = l.fallback, h ? (l = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(l & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Ks(C, l, 0, null), n = Po(n, l, u, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = np(u), r.memoizedState = ko, n) : ap(r, C));
    if (f = n.memoizedState, f !== null && (x = f.dehydrated, x !== null))
      return Iy(n, r, C, l, x, f, u);
    if (h) {
      h = l.fallback, C = r.mode, f = n.child, x = f.sibling;
      var A = { mode: "hidden", children: l.children };
      return !(C & 1) && r.child !== f ? (l = r.child, l.childLanes = 0, l.pendingProps = A, r.deletions = null) : (l = Gu(f, A), l.subtreeFlags = f.subtreeFlags & 14680064), x !== null ? h = Gu(x, h) : (h = Po(h, C, u, null), h.flags |= 2), h.return = r, l.return = r, l.sibling = h, r.child = l, l = h, h = r.child, C = n.child.memoizedState, C = C === null ? np(u) : { baseLanes: C.baseLanes | u, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~u, r.memoizedState = ko, l;
    }
    return h = n.child, n = h.sibling, l = Gu(h, { mode: "visible", children: l.children }), !(r.mode & 1) && (l.lanes = u), l.return = r, l.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = l, r.memoizedState = null, l;
  }
  function ap(n, r) {
    return r = Ks({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ol(n, r, u, l) {
    return l !== null && Id(l), Cl(r, n.child, null, u), n = ap(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iy(n, r, u, l, f, h, C) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, l = Fs(Error(p(422))), Ol(n, r, C, l)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = l.fallback, f = r.mode, l = Ks({ mode: "visible", children: l.children }, f, 0, null), h = Po(h, f, C, null), h.flags |= 2, l.return = r, h.return = r, l.sibling = h, r.child = l, r.mode & 1 && Cl(r, n.child, null, C), r.child.memoizedState = np(C), r.memoizedState = ko, h);
    if (!(r.mode & 1))
      return Ol(n, r, C, null);
    if (f.data === "$!") {
      if (l = f.nextSibling && f.nextSibling.dataset, l)
        var x = l.dgst;
      return l = x, h = Error(p(419)), l = Fs(h, l, void 0), Ol(n, r, C, l);
    }
    if (x = (C & n.childLanes) !== 0, Wn || x) {
      if (l = Mn, l !== null) {
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
        f = f & (l.suspendedLanes | C) ? 0 : f, f !== 0 && f !== h.retryLane && (h.retryLane = f, Xi(n, f), Mr(l, n, f, -1));
      }
      return mp(), l = Fs(Error(p(421))), Ol(n, r, C, l);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gy.bind(null, n), f._reactRetry = r, null) : (n = h.treeContext, sa = ci(f.nextSibling), _a = r, Sn = !0, Ba = null, n !== null && (la[xr++] = pr, la[xr++] = Ki, la[xr++] = Ia, pr = n.id, Ki = n.overflow, Ia = r), r = ap(r, l.children), r.flags |= 4096, r);
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
    if (Kn(n, r, l.children, u), l = at.current, l & 2)
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
    if (Kt(at, l), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (u = r.child, f = null; u !== null; )
            n = u.alternate, n !== null && Nn(n) === null && (f = u), u = u.sibling;
          u = f, u === null ? (f = r.child, r.child = null) : (f = u.sibling, u.sibling = null), vf(r, !1, f, u, h);
          break;
        case "backwards":
          for (u = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && Nn(n) === null) {
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
    if (n !== null && (r.dependencies = n.dependencies), nu |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, u = Gu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Gu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function eu(n, r, u) {
    switch (r.tag) {
      case 3:
        Eh(r), kn();
        break;
      case 5:
        tt(r);
        break;
      case 1:
        wn(r.type) && zc(r);
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
          return l.dehydrated !== null ? (Kt(at, at.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? rp(n, r, u) : (Kt(at, at.current & 1), n = hr(n, r, u), n !== null ? n.sibling : null);
        Kt(at, at.current & 1);
        break;
      case 19:
        if (l = (u & r.childLanes) !== 0, n.flags & 128) {
          if (l)
            return up(n, r, u);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Kt(at, at.current), l)
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
          f = _e(n, f), l = _e(n, l), h = [];
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
        var A = l[Z];
        if (x = f != null ? f[Z] : void 0, l.hasOwnProperty(Z) && A !== x && (A != null || x != null))
          if (Z === "style")
            if (x) {
              for (C in x)
                !x.hasOwnProperty(C) || A && A.hasOwnProperty(C) || (u || (u = {}), u[C] = "");
              for (C in A)
                A.hasOwnProperty(C) && x[C] !== A[C] && (u || (u = {}), u[C] = A[C]);
            } else
              u || (h || (h = []), h.push(
                Z,
                u
              )), u = A;
          else
            Z === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, x = x ? x.__html : void 0, A != null && x !== A && (h = h || []).push(Z, A)) : Z === "children" ? typeof A != "string" && typeof A != "number" || (h = h || []).push(Z, "" + A) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (R.hasOwnProperty(Z) ? (A != null && Z === "onScroll" && dn("scroll", n), h || x === A || (h = [])) : (h = h || []).push(Z, A));
      }
      u && (h = h || []).push("style", u);
      var Z = h;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Xn = function(n, r, u, l) {
    u !== l && (r.flags |= 4);
  };
  function Is(n, r) {
    if (!Sn)
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
        return wn(r.type) && Ha(), Dr(r), null;
      case 3:
        return l = r.stateNode, Hu(), Yt(zn), Yt(st), Wc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (Fc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ba !== null && (qs(Ba), Ba = null))), No(n, r), Dr(r), null;
      case 5:
        xt(r);
        var f = Co(bl.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Wa(n, r, u, l, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null)
              throw Error(p(166));
            return Dr(r), null;
          }
          if (n = Co(fi.current), Fc(r)) {
            l = r.stateNode, u = r.type;
            var h = r.memoizedProps;
            switch (l[wi] = r, l[go] = h, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                dn("cancel", l), dn("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                dn("load", l);
                break;
              case "video":
              case "audio":
                for (f = 0; f < ws.length; f++)
                  dn(ws[f], l);
                break;
              case "source":
                dn("error", l);
                break;
              case "img":
              case "image":
              case "link":
                dn(
                  "error",
                  l
                ), dn("load", l);
                break;
              case "details":
                dn("toggle", l);
                break;
              case "input":
                vn(l, h), dn("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!h.multiple }, dn("invalid", l);
                break;
              case "textarea":
                wr(l, h), dn("invalid", l);
            }
            Fn(u, h), f = null;
            for (var C in h)
              if (h.hasOwnProperty(C)) {
                var x = h[C];
                C === "children" ? typeof x == "string" ? l.textContent !== x && (h.suppressHydrationWarning !== !0 && Lc(l.textContent, x, n), f = ["children", x]) : typeof x == "number" && l.textContent !== "" + x && (h.suppressHydrationWarning !== !0 && Lc(
                  l.textContent,
                  x,
                  n
                ), f = ["children", "" + x]) : R.hasOwnProperty(C) && x != null && C === "onScroll" && dn("scroll", l);
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
              switch (C = On(u, l), u) {
                case "dialog":
                  dn("cancel", n), dn("close", n), f = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  dn("load", n), f = l;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ws.length; f++)
                    dn(ws[f], n);
                  f = l;
                  break;
                case "source":
                  dn("error", n), f = l;
                  break;
                case "img":
                case "image":
                case "link":
                  dn(
                    "error",
                    n
                  ), dn("load", n), f = l;
                  break;
                case "details":
                  dn("toggle", n), f = l;
                  break;
                case "input":
                  vn(n, l), f = _e(n, l), dn("invalid", n);
                  break;
                case "option":
                  f = l;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!l.multiple }, f = N({}, l, { value: void 0 }), dn("invalid", n);
                  break;
                case "textarea":
                  wr(n, l), f = Jr(n, l), dn("invalid", n);
                  break;
                default:
                  f = l;
              }
              Fn(u, f), x = f;
              for (h in x)
                if (x.hasOwnProperty(h)) {
                  var A = x[h];
                  h === "style" ? $t(n, A) : h === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, A != null && yi(n, A)) : h === "children" ? typeof A == "string" ? (u !== "textarea" || A !== "") && Ea(n, A) : typeof A == "number" && Ea(n, "" + A) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (R.hasOwnProperty(h) ? A != null && h === "onScroll" && dn("scroll", n) : A != null && ee(n, h, A, C));
                }
              switch (u) {
                case "input":
                  Bn(n), Xr(n, l, !1);
                  break;
                case "textarea":
                  Bn(n), fr(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + vt(l.value));
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
            throw Error(p(166));
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
        if (Yt(at), l = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Sn && sa !== null && r.mode & 1 && !(r.flags & 128))
            oh(), kn(), r.flags |= 98560, h = !1;
          else if (h = Fc(r), l !== null && l.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(p(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(p(317));
              h[wi] = r;
            } else
              kn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Dr(r), h = !1;
          } else
            Ba !== null && (qs(Ba), Ba = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (r.child.flags |= 8192, r.mode & 1 && (n === null || at.current & 1 ? Jn === 0 && (Jn = 3) : mp())), r.updateQueue !== null && (r.flags |= 4), Dr(r), null);
      case 4:
        return Hu(), No(n, r), n === null && yl(r.stateNode.containerInfo), Dr(r), null;
      case 10:
        return ju(r.type._context), Dr(r), null;
      case 17:
        return wn(r.type) && Ha(), Dr(r), null;
      case 19:
        if (Yt(at), h = r.memoizedState, h === null)
          return Dr(r), null;
        if (l = (r.flags & 128) !== 0, C = h.rendering, C === null)
          if (l)
            Is(h, !1);
          else {
            if (Jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = Nn(n), C !== null) {
                  for (r.flags |= 128, Is(h, !1), l = C.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = u, u = r.child; u !== null; )
                    h = u, n = l, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Kt(at, at.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && jt() > zl && (r.flags |= 128, l = !0, Is(h, !1), r.lanes = 4194304);
          }
        else {
          if (!l)
            if (n = Nn(C), n !== null) {
              if (r.flags |= 128, l = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Is(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !Sn)
                return Dr(r), null;
            } else
              2 * jt() - h.renderingStartTime > zl && u !== 1073741824 && (r.flags |= 128, l = !0, Is(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (u = h.last, u !== null ? u.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = jt(), r.sibling = null, u = at.current, Kt(at, l ? u & 1 | 2 : u & 1), r) : (Dr(r), null);
      case 22:
      case 23:
        return hp(), l = r.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (r.flags |= 8192), l && r.mode & 1 ? Da & 1073741824 && (Dr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Dr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function op(n, r) {
    switch (Vd(r), r.tag) {
      case 1:
        return wn(r.type) && Ha(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Hu(), Yt(zn), Yt(st), Wc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xt(r), null;
      case 13:
        if (Yt(at), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(p(340));
          kn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Yt(at), null;
      case 4:
        return Hu(), null;
      case 10:
        return ju(r.type._context), null;
      case 22:
      case 23:
        return hp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bs = !1, Zn = !1, Ch = typeof WeakSet == "function" ? WeakSet : Set, je = null;
  function Dl(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (l) {
          jn(n, r, l);
        }
      else
        u.current = null;
  }
  function $s(n, r, u) {
    try {
      u();
    } catch (l) {
      jn(n, r, l);
    }
  }
  var bh = !1;
  function Rh(n, r) {
    if (Md = ja, n = Oc(), Wi(n)) {
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
            var C = 0, x = -1, A = -1, Z = 0, fe = 0, pe = n, ce = null;
            t:
              for (; ; ) {
                for (var ke; pe !== u || f !== 0 && pe.nodeType !== 3 || (x = C + f), pe !== h || l !== 0 && pe.nodeType !== 3 || (A = C + l), pe.nodeType === 3 && (C += pe.nodeValue.length), (ke = pe.firstChild) !== null; )
                  ce = pe, pe = ke;
                for (; ; ) {
                  if (pe === n)
                    break t;
                  if (ce === u && ++Z === f && (x = C), ce === h && ++fe === l && (A = C), (ke = pe.nextSibling) !== null)
                    break;
                  pe = ce, ce = pe.parentNode;
                }
                pe = ke;
              }
            u = x === -1 || A === -1 ? null : { start: x, end: A };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (mo = { focusedElem: n, selectionRange: u }, ja = !1, je = r; je !== null; )
      if (r = je, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, je = n;
      else
        for (; je !== null; ) {
          r = je;
          try {
            var Pe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Pe !== null) {
                    var Ie = Pe.memoizedProps, Hn = Pe.memoizedState, Y = r.stateNode, V = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : xa(r.type, Ie), Hn);
                    Y.__reactInternalSnapshotBeforeUpdate = V;
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
                  throw Error(p(163));
              }
          } catch (ye) {
            jn(r, r.return, ye);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, je = n;
            break;
          }
          je = r.return;
        }
    return Pe = bh, bh = !1, Pe;
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
  var _n = null, or = !1;
  function Qa(n, r, u) {
    for (u = u.child; u !== null; )
      Nl(n, r, u), u = u.sibling;
  }
  function Nl(n, r, u) {
    if (ta && typeof ta.onCommitFiberUnmount == "function")
      try {
        ta.onCommitFiberUnmount(Su, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Zn || Dl(u, r);
      case 6:
        var l = _n, f = or;
        _n = null, Qa(n, r, u), _n = l, or = f, _n !== null && (or ? (n = _n, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : _n.removeChild(u.stateNode));
        break;
      case 18:
        _n !== null && (or ? (n = _n, u = u.stateNode, n.nodeType === 8 ? Nu(n.parentNode, u) : n.nodeType === 1 && Nu(n, u), _u(n)) : Nu(_n, u.stateNode));
        break;
      case 4:
        l = _n, f = or, _n = u.stateNode.containerInfo, or = !0, Qa(n, r, u), _n = l, or = f;
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
            jn(u, r, x);
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
  function tu(n) {
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
                  _n = x.stateNode, or = !1;
                  break e;
                case 3:
                  _n = x.stateNode.containerInfo, or = !0;
                  break e;
                case 4:
                  _n = x.stateNode.containerInfo, or = !0;
                  break e;
              }
              x = x.return;
            }
          if (_n === null)
            throw Error(p(160));
          Nl(h, C, f), _n = null, or = !1;
          var A = f.alternate;
          A !== null && (A.return = null), f.return = null;
        } catch (Z) {
          jn(f, r, Z);
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
          } catch (Ie) {
            jn(n, n.return, Ie);
          }
          try {
            Ys(5, n, n.return);
          } catch (Ie) {
            jn(n, n.return, Ie);
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
          } catch (Ie) {
            jn(n, n.return, Ie);
          }
        }
        if (l & 4 && (f = n.stateNode, f != null)) {
          var h = n.memoizedProps, C = u !== null ? u.memoizedProps : h, x = n.type, A = n.updateQueue;
          if (n.updateQueue = null, A !== null)
            try {
              x === "input" && h.type === "radio" && h.name != null && Rn(f, h), On(x, C);
              var Z = On(x, h);
              for (C = 0; C < A.length; C += 2) {
                var fe = A[C], pe = A[C + 1];
                fe === "style" ? $t(f, pe) : fe === "dangerouslySetInnerHTML" ? yi(f, pe) : fe === "children" ? Ea(f, pe) : ee(f, fe, pe, Z);
              }
              switch (x) {
                case "input":
                  Tn(f, h);
                  break;
                case "textarea":
                  Sa(f, h);
                  break;
                case "select":
                  var ce = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!h.multiple;
                  var ke = h.value;
                  ke != null ? Tr(f, !!h.multiple, ke, !1) : ce !== !!h.multiple && (h.defaultValue != null ? Tr(
                    f,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : Tr(f, !!h.multiple, h.multiple ? [] : "", !1));
              }
              f[go] = h;
            } catch (Ie) {
              jn(n, n.return, Ie);
            }
        }
        break;
      case 6:
        if (di(r, n), ki(n), l & 4) {
          if (n.stateNode === null)
            throw Error(p(162));
          f = n.stateNode, h = n.memoizedProps;
          try {
            f.nodeValue = h;
          } catch (Ie) {
            jn(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (di(r, n), ki(n), l & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _u(r.containerInfo);
          } catch (Ie) {
            jn(n, n.return, Ie);
          }
        break;
      case 4:
        di(r, n), ki(n);
        break;
      case 13:
        di(r, n), ki(n), f = n.child, f.flags & 8192 && (h = f.memoizedState !== null, f.stateNode.isHidden = h, !h || f.alternate !== null && f.alternate.memoizedState !== null || (dp = jt())), l & 4 && tu(n);
        break;
      case 22:
        if (fe = u !== null && u.memoizedState !== null, n.mode & 1 ? (Zn = (Z = Zn) || fe, di(r, n), Zn = Z) : di(r, n), ki(n), l & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !fe && n.mode & 1)
            for (je = n, fe = n.child; fe !== null; ) {
              for (pe = je = fe; je !== null; ) {
                switch (ce = je, ke = ce.child, ce.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ys(4, ce, ce.return);
                    break;
                  case 1:
                    Dl(ce, ce.return);
                    var Pe = ce.stateNode;
                    if (typeof Pe.componentWillUnmount == "function") {
                      l = ce, u = ce.return;
                      try {
                        r = l, Pe.props = r.memoizedProps, Pe.state = r.memoizedState, Pe.componentWillUnmount();
                      } catch (Ie) {
                        jn(l, u, Ie);
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
                ke !== null ? (ke.return = ce, je = ke) : cp(pe);
              }
              fe = fe.sibling;
            }
          e:
            for (fe = null, pe = n; ; ) {
              if (pe.tag === 5) {
                if (fe === null) {
                  fe = pe;
                  try {
                    f = pe.stateNode, Z ? (h = f.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (x = pe.stateNode, A = pe.memoizedProps.style, C = A != null && A.hasOwnProperty("display") ? A.display : null, x.style.display = bt("display", C));
                  } catch (Ie) {
                    jn(n, n.return, Ie);
                  }
                }
              } else if (pe.tag === 6) {
                if (fe === null)
                  try {
                    pe.stateNode.nodeValue = Z ? "" : pe.memoizedProps;
                  } catch (Ie) {
                    jn(n, n.return, Ie);
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
        di(r, n), ki(n), l & 4 && tu(n);
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
          throw Error(p(160));
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
            throw Error(p(161));
        }
      } catch (A) {
        jn(n, n.return, A);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _h(n, r, u) {
    je = n, Ml(n);
  }
  function Ml(n, r, u) {
    for (var l = (n.mode & 1) !== 0; je !== null; ) {
      var f = je, h = f.child;
      if (f.tag === 22 && l) {
        var C = f.memoizedState !== null || Bs;
        if (!C) {
          var x = f.alternate, A = x !== null && x.memoizedState !== null || Zn;
          x = Bs;
          var Z = Zn;
          if (Bs = C, (Zn = A) && !Z)
            for (je = f; je !== null; )
              C = je, A = C.child, C.tag === 22 && C.memoizedState !== null ? Oh(f) : A !== null ? (A.return = C, je = A) : Oh(f);
          for (; h !== null; )
            je = h, Ml(h), h = h.sibling;
          je = f, Bs = x, Zn = Z;
        }
        xh(n);
      } else
        f.subtreeFlags & 8772 && h !== null ? (h.return = f, je = h) : xh(n);
    }
  }
  function xh(n) {
    for (; je !== null; ) {
      var r = je;
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
                  var A = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      A.autoFocus && u.focus();
                      break;
                    case "img":
                      A.src && (u.src = A.src);
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
                      pe !== null && _u(pe);
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
                throw Error(p(163));
            }
          Zn || r.flags & 512 && lp(r);
        } catch (ce) {
          jn(r, r.return, ce);
        }
      }
      if (r === n) {
        je = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, je = u;
        break;
      }
      je = r.return;
    }
  }
  function cp(n) {
    for (; je !== null; ) {
      var r = je;
      if (r === n) {
        je = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, je = u;
        break;
      }
      je = r.return;
    }
  }
  function Oh(n) {
    for (; je !== null; ) {
      var r = je;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Ws(4, r);
            } catch (A) {
              jn(r, u, A);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = r.return;
              try {
                l.componentDidMount();
              } catch (A) {
                jn(r, f, A);
              }
            }
            var h = r.return;
            try {
              lp(r);
            } catch (A) {
              jn(r, h, A);
            }
            break;
          case 5:
            var C = r.return;
            try {
              lp(r);
            } catch (A) {
              jn(r, C, A);
            }
        }
      } catch (A) {
        jn(r, r.return, A);
      }
      if (r === n) {
        je = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, je = x;
        break;
      }
      je = r.return;
    }
  }
  var mf = Math.ceil, Qs = J.ReactCurrentDispatcher, fp = J.ReactCurrentOwner, kr = J.ReactCurrentBatchConfig, Ot = 0, Mn = null, Un = null, lr = 0, Da = 0, Ll = gt(0), Jn = 0, Gs = null, nu = 0, yf = 0, Al = 0, Mo = null, Hr = null, dp = 0, zl = 1 / 0, ru = null, gf = !1, Lo = null, Ni = null, Yu = !1, Wu = null, Sf = 0, Ul = 0, Ef = null, Ao = -1, zo = 0;
  function Nr() {
    return Ot & 6 ? jt() : Ao !== -1 ? Ao : Ao = jt();
  }
  function Qn(n) {
    return n.mode & 1 ? Ot & 2 && lr !== 0 ? lr & -lr : Vc.transition !== null ? (zo === 0 && (zo = rl()), zo) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ms(n.type)), n) : 1;
  }
  function Mr(n, r, u, l) {
    if (50 < Ul)
      throw Ul = 0, Ef = null, Error(p(185));
    Hi(n, u, l), (!(Ot & 2) || n !== Mn) && (n === Mn && (!(Ot & 2) && (yf |= u), Jn === 4 && Ga(n, lr)), Lr(n, l), u === 1 && Ot === 0 && !(r.mode & 1) && (zl = jt() + 500, ir && ua()));
  }
  function Lr(n, r) {
    var u = n.callbackNode;
    bu(n, r);
    var l = Fr(n, n === Mn ? lr : 0);
    if (l === 0)
      u !== null && dr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = l & -l, n.callbackPriority !== r) {
      if (u != null && dr(u), r === 1)
        n.tag === 0 ? Pd(Dh.bind(null, n)) : jd(Dh.bind(null, n)), Ad(function() {
          !(Ot & 6) && ua();
        }), u = null;
      else {
        switch (il(l)) {
          case 1:
            u = ai;
            break;
          case 4:
            u = wt;
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
    if (Ao = -1, zo = 0, Ot & 6)
      throw Error(p(327));
    var u = n.callbackNode;
    if (Fl() && n.callbackNode !== u)
      return null;
    var l = Fr(n, n === Mn ? lr : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & n.expiredLanes || r)
      r = bf(n, l);
    else {
      r = l;
      var f = Ot;
      Ot |= 2;
      var h = Cf();
      (Mn !== n || lr !== r) && (ru = null, zl = jt() + 500, Uo(n, r));
      do
        try {
          Yy();
          break;
        } catch (x) {
          kh(n, x);
        }
      while (1);
      $d(), Qs.current = h, Ot = f, Un !== null ? r = 0 : (Mn = null, lr = 0, r = Jn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Ru(n), f !== 0 && (l = f, r = pp(n, f))), r === 1)
        throw u = Gs, Uo(n, 0), Ga(n, l), Lr(n, jt()), u;
      if (r === 6)
        Ga(n, l);
      else {
        if (f = n.current.alternate, !(l & 30) && !vp(f) && (r = bf(n, l), r === 2 && (h = Ru(n), h !== 0 && (l = h, r = pp(n, h))), r === 1))
          throw u = Gs, Uo(n, 0), Ga(n, l), Lr(n, jt()), u;
        switch (n.finishedWork = f, n.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            jo(n, Hr, ru);
            break;
          case 3:
            if (Ga(n, l), (l & 130023424) === l && (r = dp + 500 - jt(), 10 < r)) {
              if (Fr(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & l) !== l) {
                Nr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = yo(jo.bind(null, n, Hr, ru), r);
              break;
            }
            jo(n, Hr, ru);
            break;
          case 4:
            if (Ga(n, l), (l & 4194240) === l)
              break;
            for (r = n.eventTimes, f = -1; 0 < l; ) {
              var C = 31 - Pr(l);
              h = 1 << C, C = r[C], C > f && (f = C), l &= ~h;
            }
            if (l = f, l = jt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * mf(l / 1960)) - l, 10 < l) {
              n.timeoutHandle = yo(jo.bind(null, n, Hr, ru), l);
              break;
            }
            jo(n, Hr, ru);
            break;
          case 5:
            jo(n, Hr, ru);
            break;
          default:
            throw Error(p(329));
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
    if (Ot & 6)
      throw Error(p(327));
    Fl();
    var r = Fr(n, 0);
    if (!(r & 1))
      return Lr(n, jt()), null;
    var u = bf(n, r);
    if (n.tag !== 0 && u === 2) {
      var l = Ru(n);
      l !== 0 && (r = l, u = pp(n, l));
    }
    if (u === 1)
      throw u = Gs, Uo(n, 0), Ga(n, r), Lr(n, jt()), u;
    if (u === 6)
      throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jo(n, Hr, ru), Lr(n, jt()), null;
  }
  function Pl(n, r) {
    var u = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = u, Ot === 0 && (zl = jt() + 500, ir && ua());
    }
  }
  function Qu(n) {
    Wu !== null && Wu.tag === 0 && !(Ot & 6) && Fl();
    var r = Ot;
    Ot |= 1;
    var u = kr.transition, l = Ht;
    try {
      if (kr.transition = null, Ht = 1, n)
        return n();
    } finally {
      Ht = l, kr.transition = u, Ot = r, !(Ot & 6) && ua();
    }
  }
  function hp() {
    Da = Ll.current, Yt(Ll);
  }
  function Uo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, rh(u)), Un !== null)
      for (u = Un.return; u !== null; ) {
        var l = u;
        switch (Vd(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Ha();
            break;
          case 3:
            Hu(), Yt(zn), Yt(st), Wc();
            break;
          case 5:
            xt(l);
            break;
          case 4:
            Hu();
            break;
          case 13:
            Yt(at);
            break;
          case 19:
            Yt(at);
            break;
          case 10:
            ju(l.type._context);
            break;
          case 22:
          case 23:
            hp();
        }
        u = u.return;
      }
    if (Mn = n, Un = n = Gu(n.current, null), lr = Da = r, Jn = 0, Gs = null, Al = yf = nu = 0, Hr = Mo = null, vr !== null) {
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
      var u = Un;
      try {
        if ($d(), Qc.current = cf, ut) {
          for (var l = En.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), l = l.next;
          }
          ut = !1;
        }
        if (bo = 0, Mt = ae = En = null, Oi = !1, Oa = 0, fp.current = null, u === null || u.return === null) {
          Jn = 1, Gs = r, Un = null;
          break;
        }
        e: {
          var h = n, C = u.return, x = u, A = r;
          if (r = lr, x.flags |= 32768, A !== null && typeof A == "object" && typeof A.then == "function") {
            var Z = A, fe = x, pe = fe.tag;
            if (!(fe.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var ce = fe.alternate;
              ce ? (fe.updateQueue = ce.updateQueue, fe.memoizedState = ce.memoizedState, fe.lanes = ce.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var ke = Jd(C);
            if (ke !== null) {
              ke.flags &= -257, ep(ke, C, x, h, r), ke.mode & 1 && gh(h, Z, r), r = ke, A = Z;
              var Pe = r.updateQueue;
              if (Pe === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(A), r.updateQueue = Ie;
              } else
                Pe.add(A);
              break e;
            } else {
              if (!(r & 1)) {
                gh(h, Z, r), mp();
                break e;
              }
              A = Error(p(426));
            }
          } else if (Sn && x.mode & 1) {
            var Hn = Jd(C);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), ep(Hn, C, x, h, r), Id(_l(A, x));
              break e;
            }
          }
          h = A = _l(A, x), Jn !== 4 && (Jn = 2), Mo === null ? Mo = [h] : Mo.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var Y = yh(h, A, r);
                Qd(h, Y);
                break e;
              case 1:
                x = A;
                var V = h.type, G = h.stateNode;
                if (!(h.flags & 128) && (typeof V.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (Ni === null || !Ni.has(G)))) {
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
      } catch (Be) {
        r = Be, Un === u && u !== null && (Un = u = u.return);
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
    (Jn === 0 || Jn === 3 || Jn === 2) && (Jn = 4), Mn === null || !(nu & 268435455) && !(yf & 268435455) || Ga(Mn, lr);
  }
  function bf(n, r) {
    var u = Ot;
    Ot |= 2;
    var l = Cf();
    (Mn !== n || lr !== r) && (ru = null, Uo(n, r));
    do
      try {
        $y();
        break;
      } catch (f) {
        kh(n, f);
      }
    while (1);
    if ($d(), Ot = u, Qs.current = l, Un !== null)
      throw Error(p(261));
    return Mn = null, lr = 0, Jn;
  }
  function $y() {
    for (; Un !== null; )
      Nh(Un);
  }
  function Yy() {
    for (; Un !== null && !Ci(); )
      Nh(Un);
  }
  function Nh(n) {
    var r = Lh(n.alternate, n, Da);
    n.memoizedProps = n.pendingProps, r === null ? yp(n) : Un = r, fp.current = null;
  }
  function yp(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = op(u, r), u !== null) {
          u.flags &= 32767, Un = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Jn = 6, Un = null;
          return;
        }
      } else if (u = By(u, r, Da), u !== null) {
        Un = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        Un = r;
        return;
      }
      Un = r = n;
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
    while (Wu !== null);
    if (Ot & 6)
      throw Error(p(327));
    u = n.finishedWork;
    var f = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = u.lanes | u.childLanes;
    if (pd(n, h), n === Mn && (Un = Mn = null, lr = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Yu || (Yu = !0, gp(bi, function() {
      return Fl(), null;
    })), h = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || h) {
      h = kr.transition, kr.transition = null;
      var C = Ht;
      Ht = 1;
      var x = Ot;
      Ot |= 4, fp.current = null, Rh(n, u), wh(u, n), Dc(mo), ja = !!Md, mo = Md = null, n.current = u, _h(u), el(), Ot = x, Ht = C, kr.transition = h;
    } else
      n.current = u;
    if (Yu && (Yu = !1, Wu = n, Sf = f), h = n.pendingLanes, h === 0 && (Ni = null), ps(u.stateNode), Lr(n, jt()), r !== null)
      for (l = n.onRecoverableError, u = 0; u < r.length; u++)
        f = r[u], l(f.value, { componentStack: f.stack, digest: f.digest });
    if (gf)
      throw gf = !1, n = Lo, Lo = null, n;
    return Sf & 1 && n.tag !== 0 && Fl(), h = n.pendingLanes, h & 1 ? n === Ef ? Ul++ : (Ul = 0, Ef = n) : Ul = 0, ua(), null;
  }
  function Fl() {
    if (Wu !== null) {
      var n = il(Sf), r = kr.transition, u = Ht;
      try {
        if (kr.transition = null, Ht = 16 > n ? 16 : n, Wu === null)
          var l = !1;
        else {
          if (n = Wu, Wu = null, Sf = 0, Ot & 6)
            throw Error(p(331));
          var f = Ot;
          for (Ot |= 4, je = n.current; je !== null; ) {
            var h = je, C = h.child;
            if (je.flags & 16) {
              var x = h.deletions;
              if (x !== null) {
                for (var A = 0; A < x.length; A++) {
                  var Z = x[A];
                  for (je = Z; je !== null; ) {
                    var fe = je;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(8, fe, h);
                    }
                    var pe = fe.child;
                    if (pe !== null)
                      pe.return = fe, je = pe;
                    else
                      for (; je !== null; ) {
                        fe = je;
                        var ce = fe.sibling, ke = fe.return;
                        if (sp(fe), fe === Z) {
                          je = null;
                          break;
                        }
                        if (ce !== null) {
                          ce.return = ke, je = ce;
                          break;
                        }
                        je = ke;
                      }
                  }
                }
                var Pe = h.alternate;
                if (Pe !== null) {
                  var Ie = Pe.child;
                  if (Ie !== null) {
                    Pe.child = null;
                    do {
                      var Hn = Ie.sibling;
                      Ie.sibling = null, Ie = Hn;
                    } while (Ie !== null);
                  }
                }
                je = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null)
              C.return = h, je = C;
            else
              e:
                for (; je !== null; ) {
                  if (h = je, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, h, h.return);
                    }
                  var Y = h.sibling;
                  if (Y !== null) {
                    Y.return = h.return, je = Y;
                    break e;
                  }
                  je = h.return;
                }
          }
          var V = n.current;
          for (je = V; je !== null; ) {
            C = je;
            var G = C.child;
            if (C.subtreeFlags & 2064 && G !== null)
              G.return = C, je = G;
            else
              e:
                for (C = V; je !== null; ) {
                  if (x = je, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ws(9, x);
                      }
                    } catch (Be) {
                      jn(x, x.return, Be);
                    }
                  if (x === C) {
                    je = null;
                    break e;
                  }
                  var ye = x.sibling;
                  if (ye !== null) {
                    ye.return = x.return, je = ye;
                    break e;
                  }
                  je = x.return;
                }
          }
          if (Ot = f, ua(), ta && typeof ta.onPostCommitFiberRoot == "function")
            try {
              ta.onPostCommitFiberRoot(Su, n);
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
    r = _l(u, r), r = yh(n, r, 1), n = Fu(n, r, 1), r = Nr(), n !== null && (Hi(n, 1, r), Lr(n, r));
  }
  function jn(n, r, u) {
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
            n = _l(u, n), n = Vs(r, n, 1), r = Fu(r, n, 1), n = Nr(), r !== null && (Hi(r, 1, n), Lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Qy(n, r, u) {
    var l = n.pingCache;
    l !== null && l.delete(r), r = Nr(), n.pingedLanes |= n.suspendedLanes & u, Mn === n && (lr & u) === u && (Jn === 4 || Jn === 3 && (lr & 130023424) === lr && 500 > jt() - dp ? Uo(n, 0) : Al |= u), Lr(n, r);
  }
  function Rf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Eu, Eu <<= 1, !(Eu & 130023424) && (Eu = 4194304)) : r = 1);
    var u = Nr();
    n = Xi(n, r), n !== null && (Hi(n, r, u), Lr(n, u));
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
        throw Error(p(314));
    }
    l !== null && l.delete(r), Rf(n, u);
  }
  var Lh;
  Lh = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || zn.current)
        Wn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Wn = !1, eu(n, r, u);
        Wn = !!(n.flags & 131072);
      }
    else
      Wn = !1, Sn && r.flags & 1048576 && Fd(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        Or(n, r), n = r.pendingProps;
        var f = Va(r, st.current);
        Ce(r, u), f = Iu(null, r, l, n, f, u);
        var h = wo();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, wn(l) ? (h = !0, zc(r)) : h = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Wd(r), f.updater = Bc, r.stateNode = f, f._reactInternals = r, $c(r, l, n, u), r = Sh(null, r, l, !0, h, u)) : (r.tag = 0, Sn && h && Uc(r), Kn(null, r, f, u), r = r.child), r;
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
              r = $u(null, r, l, n, u);
              break e;
            case 14:
              r = df(null, r, l, xa(l.type, n), u);
              break e;
          }
          throw Error(p(
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
            throw Error(p(387));
          l = r.pendingProps, h = r.memoizedState, f = h.element, qn(n, r), Vu(r, l, null, u);
          var C = r.memoizedState;
          if (l = C.element, h.isDehydrated)
            if (h = { element: l, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              f = _l(Error(p(423)), r), r = pf(n, r, l, u, f);
              break e;
            } else if (l !== f) {
              f = _l(Error(p(424)), r), r = pf(n, r, l, u, f);
              break e;
            } else
              for (sa = ci(r.stateNode.containerInfo.firstChild), _a = r, Sn = !0, Ba = null, u = hh(r, null, l, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (kn(), l === f) {
              r = hr(n, r, u);
              break e;
            }
            Kn(n, r, l, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return tt(r), n === null && Pc(r), l = r.type, f = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = f.children, Os(l, f) ? C = null : h !== null && Os(l, h) && (r.flags |= 32), St(n, r), Kn(n, r, C, u), r.child;
      case 6:
        return n === null && Pc(r), null;
      case 13:
        return rp(n, r, u);
      case 4:
        return qd(r, r.stateNode.containerInfo), l = r.pendingProps, n === null ? r.child = Cl(r, null, l, u) : Kn(n, r, l, u), r.child;
      case 11:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), $u(n, r, l, f, u);
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
              if (h.children === f.children && !zn.current) {
                r = hr(n, r, u);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var x = h.dependencies;
                if (x !== null) {
                  C = h.child;
                  for (var A = x.firstContext; A !== null; ) {
                    if (A.context === l) {
                      if (h.tag === 1) {
                        A = Zi(-1, u & -u), A.tag = 2;
                        var Z = h.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var fe = Z.pending;
                          fe === null ? A.next = A : (A.next = fe.next, fe.next = A), Z.pending = A;
                        }
                      }
                      h.lanes |= u, A = h.alternate, A !== null && (A.lanes |= u), ur(
                        h.return,
                        u,
                        r
                      ), x.lanes |= u;
                      break;
                    }
                    A = A.next;
                  }
                } else if (h.tag === 10)
                  C = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (C = h.return, C === null)
                    throw Error(p(341));
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
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), Or(n, r), r.tag = 1, wn(l) ? (n = !0, zc(r)) : n = !1, Ce(r, u), fh(r, l, f), $c(r, l, f, u), Sh(null, r, l, !0, n, u);
      case 19:
        return up(n, r, u);
      case 22:
        return Do(n, r, u);
    }
    throw Error(p(156, r.tag));
  };
  function gp(n, r) {
    return mn(n, r);
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
      if (n = n.$$typeof, n === ot)
        return 11;
      if (n === Rt)
        return 14;
    }
    return 2;
  }
  function Gu(n, r) {
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
          case $e:
            C = 8, f |= 8;
            break;
          case Ke:
            return n = qa(12, u, r, f | 2), n.elementType = Ke, n.lanes = h, n;
          case we:
            return n = qa(13, u, r, f), n.elementType = we, n.lanes = h, n;
          case Ue:
            return n = qa(19, u, r, f), n.elementType = Ue, n.lanes = h, n;
          case xe:
            return Ks(u, f, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ge:
                  C = 10;
                  break e;
                case ze:
                  C = 9;
                  break e;
                case ot:
                  C = 11;
                  break e;
                case Rt:
                  C = 14;
                  break e;
                case Et:
                  C = 16, l = null;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = qa(C, u, r, f), r.elementType = n, r.type = l, r.lanes = h, r;
  }
  function Po(n, r, u, l) {
    return n = qa(7, n, l, r), n.lanes = u, n;
  }
  function Ks(n, r, u, l) {
    return n = qa(22, n, l, r), n.elementType = xe, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
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
  function wf(n, r, u, l, f, h, C, x, A) {
    return n = new Zy(n, r, u, x, A), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = qa(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: l, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wd(h), n;
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
        throw Error(p(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (wn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (wn(u))
        return Ns(n, u, r);
    }
    return r;
  }
  function zh(n, r, u, l, f, h, C, x, A) {
    return n = wf(u, l, !0, n, f, h, C, x, A), n.context = Ep(null), u = n.current, l = Nr(), f = Qn(u), h = Zi(l, f), h.callback = r ?? null, Fu(u, h, f), n.current.lanes = f, Hi(n, f, l), Lr(n, l), n;
  }
  function Zs(n, r, u, l) {
    var f = r.current, h = Nr(), C = Qn(f);
    return u = Ep(u), r.context === null ? r.context = u : r.pendingContext = u, r = Zi(h, C), r.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (r.callback = l), n = Fu(f, r, C), n !== null && (Mr(n, f, C, h), Ic(n, f, C)), C;
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
  au.prototype.render = xf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(p(409));
    Zs(n, r, null, null);
  }, au.prototype.unmount = xf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Qu(function() {
        Zs(null, n, null, null);
      }), r[qi] = null;
    }
  };
  function au(n) {
    this._internalRoot = n;
  }
  au.prototype.unstable_scheduleHydration = function(n) {
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
      return n._reactRootContainer = C, n[qi] = C.current, yl(n.nodeType === 8 ? n.parentNode : n), Qu(), C;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof l == "function") {
      var x = l;
      l = function() {
        var Z = _f(A);
        x.call(Z);
      };
    }
    var A = wf(n, 0, !1, null, null, !1, !1, "", Ph);
    return n._reactRootContainer = A, n[qi] = A.current, yl(n.nodeType === 8 ? n.parentNode : n), Qu(function() {
      Zs(r, A, u, l);
    }), A;
  }
  function Df(n, r, u, l, f) {
    var h = u._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof f == "function") {
        var x = f;
        f = function() {
          var A = _f(C);
          x.call(A);
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
          u !== 0 && (Ri(r, u | 1), Lr(r, jt()), !(Ot & 6) && (zl = jt() + 500, ua()));
        }
        break;
      case 13:
        Qu(function() {
          var l = Xi(n, 1);
          if (l !== null) {
            var f = Nr();
            Mr(l, n, 1, f);
          }
        }), Cp(n, 1);
    }
  }, ul = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var u = Nr();
        Mr(r, n, 134217728, u);
      }
      Cp(n, 134217728);
    }
  }, Pt = function(n) {
    if (n.tag === 13) {
      var r = Qn(n), u = Xi(n, r);
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
        if (Tn(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var l = u[r];
            if (l !== n && l.form === n.form) {
              var f = qe(l);
              if (!f)
                throw Error(p(90));
              De(l), Tn(l, f);
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
  }, oo = Pl, Jo = Qu;
  var eg = { usingClientEntryPoint: !1, Events: [ks, gl, qe, za, mu, Pl] }, Vl = { findFiberByHostInstance: Fa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tg = { bundleType: Vl.bundleType, version: Vl.version, rendererPackageName: Vl.rendererPackageName, rendererConfig: Vl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vl.findFiberByHostInstance || jh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kf.isDisabled && kf.supportsFiber)
      try {
        Su = kf.inject(tg), ta = kf;
      } catch {
      }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg, ti.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Rp(r))
      throw Error(p(200));
    return Ah(n, r, null, u);
  }, ti.createRoot = function(n, r) {
    if (!Rp(n))
      throw Error(p(299));
    var u = !1, l = "", f = bp;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = wf(n, 1, !1, null, null, u, !1, l, f), n[qi] = r.current, yl(n.nodeType === 8 ? n.parentNode : n), new xf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = $n(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return Qu(n);
  }, ti.hydrate = function(n, r, u) {
    if (!Of(r))
      throw Error(p(200));
    return Df(null, n, r, !0, u);
  }, ti.hydrateRoot = function(n, r, u) {
    if (!Rp(n))
      throw Error(p(405));
    var l = u != null && u.hydratedSources || null, f = !1, h = "", C = bp;
    if (u != null && (u.unstable_strictMode === !0 && (f = !0), u.identifierPrefix !== void 0 && (h = u.identifierPrefix), u.onRecoverableError !== void 0 && (C = u.onRecoverableError)), r = zh(r, null, n, 1, u ?? null, f, !1, h, C), n[qi] = r.current, yl(n), l)
      for (n = 0; n < l.length; n++)
        u = l[n], f = u._getVersion, f = f(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, f] : r.mutableSourceEagerHydrationData.push(
          u,
          f
        );
    return new au(r);
  }, ti.render = function(n, r, u) {
    if (!Of(r))
      throw Error(p(200));
    return Df(null, n, r, !1, u);
  }, ti.unmountComponentAtNode = function(n) {
    if (!Of(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Qu(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = Pl, ti.unstable_renderSubtreeIntoContainer = function(n, r, u, l) {
    if (!Of(u))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
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
var y1;
function wk() {
  return y1 || (y1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = sn, v = X1(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function R(e) {
      E = e;
    }
    function w(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        B("warn", e, a);
      }
    }
    function g(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        B("error", e, a);
      }
    }
    function B(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var M = 0, _ = 1, z = 2, k = 3, L = 4, U = 5, j = 6, $ = 7, I = 8, oe = 9, le = 10, ee = 11, J = 12, F = 13, de = 14, ge = 15, $e = 16, Ke = 17, Ge = 18, ze = 19, ot = 21, we = 22, Ue = 23, Rt = 24, Et = 25, xe = !0, he = !1, He = !1, N = !1, ue = !1, Re = !0, it = !1, Xe = !1, Tt = !0, pt = !0, Ct = !0, vt = /* @__PURE__ */ new Set(), Ut = {}, tr = {};
    function Bn(e, t) {
      De(e, t), De(e + "Capture", t);
    }
    function De(e, t) {
      Ut[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ut[e] = t;
      {
        var a = e.toLowerCase();
        tr[a] = e, e === "onDoubleClick" && (tr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        vt.add(t[i]);
    }
    var Zt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _e = Object.prototype.hasOwnProperty;
    function vn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Rn(e) {
      try {
        return Tn(e), !1;
      } catch {
        return !0;
      }
    }
    function Tn(e) {
      return "" + e;
    }
    function Xr(e, t) {
      if (Rn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, vn(e)), Tn(e);
    }
    function Zr(e) {
      if (Rn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(e)), Tn(e);
    }
    function nr(e, t) {
      if (Rn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, vn(e)), Tn(e);
    }
    function Tr(e, t) {
      if (Rn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, vn(e)), Tn(e);
    }
    function Jr(e) {
      if (Rn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", vn(e)), Tn(e);
    }
    function wr(e) {
      if (Rn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", vn(e)), Tn(e);
    }
    var Sa = 0, fr = 1, ea = 2, xn = 3, zr = 4, yi = 5, Ea = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", We = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", bt = new RegExp("^[" + Se + "][" + We + "]*$"), $t = {}, Wt = {};
    function Fn(e) {
      return _e.call(Wt, e) ? !0 : _e.call($t, e) ? !1 : bt.test(e) ? (Wt[e] = !0, !0) : ($t[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function On(e, t, a) {
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
          case xn:
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
      this.acceptsBooleans = t === ea || t === xn || t === zr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
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
        xn,
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
        xn,
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
    var za = /[\-\:]([a-z])/g, mu = function(e) {
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
      var t = e.replace(za, mu);
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
      var t = e.replace(za, mu);
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
      var t = e.replace(za, mu);
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
    var Jo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Vi = !1;
    function yu(e) {
      !Vi && Jo.test(e) && (Vi = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ca(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Xr(a, t), i.sanitizeURL && yu("" + a);
        var s = i.attributeName, d = null;
        if (i.type === zr) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : Jt(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (Jt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === xn)
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
      if (!On(t, o, i)) {
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
            e[m] = y === xn ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var b = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var H = o.type, P;
          H === xn || H === zr && a === !0 ? P = "" : (Xr(a, b), P = "" + a, o.sanitizeURL && yu(P.toString())), T ? e.setAttributeNS(T, b, P) : e.setAttribute(b, P);
        }
      }
    }
    var Si = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Ra = Symbol.for("react.fragment"), Ei = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), Nt = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), $n = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), mn = Symbol.for("react.offscreen"), dr = Symbol.for("react.legacy_hidden"), Ci = Symbol.for("react.cache"), el = Symbol.for("react.tracing_marker"), jt = Symbol.iterator, dd = "@@iterator";
    function ai(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = jt && e[jt] || e[dd];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, bi = 0, gu, tl, Su, ta, ps, Pr, vs;
    function hs() {
    }
    hs.__reactDisabledLog = !0;
    function Ec() {
      {
        if (bi === 0) {
          gu = console.log, tl = console.info, Su = console.warn, ta = console.error, ps = console.group, Pr = console.groupCollapsed, vs = console.groupEnd;
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
            log: wt({}, e, {
              value: gu
            }),
            info: wt({}, e, {
              value: tl
            }),
            warn: wt({}, e, {
              value: Su
            }),
            error: wt({}, e, {
              value: ta
            }),
            group: wt({}, e, {
              value: ps
            }),
            groupCollapsed: wt({}, e, {
              value: Pr
            }),
            groupEnd: wt({}, e, {
              value: vs
            })
          });
        }
        bi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Eu = p.ReactCurrentDispatcher, ii;
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
    var Cu = !1, bu;
    {
      var Ru = typeof WeakMap == "function" ? WeakMap : Map;
      bu = new Ru();
    }
    function rl(e, t) {
      if (!e || Cu)
        return "";
      {
        var a = bu.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Cu = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Eu.current, Eu.current = null, Ec();
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
                    var H = `
` + m[b].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && bu.set(e, H), H;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Cu = !1, Eu.current = s, nl(), Error.prepareStackTrace = o;
      }
      var P = e ? e.displayName || e.name : "", q = P ? Fr(P) : "";
      return typeof e == "function" && bu.set(e, q), q;
    }
    function al(e, t, a) {
      return rl(e, !0);
    }
    function Hi(e, t, a) {
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
          case Me:
            return Hi(e.render);
          case yt:
            return Ri(e.type, t, a);
          case Ze: {
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
        case U:
          return Fr(e.type);
        case $e:
          return Fr("Lazy");
        case F:
          return Fr("Suspense");
        case ze:
          return Fr("SuspenseList");
        case M:
        case z:
        case ge:
          return Hi(e.type);
        case ee:
          return Hi(e.type.render);
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
          case Me:
            return lo(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case Ze: {
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
    function ft(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Rt:
          return "Cache";
        case oe:
          var i = a;
          return ll(i) + ".Consumer";
        case le:
          var o = a;
          return ll(o._context) + ".Provider";
        case Ge:
          return "DehydratedFragment";
        case ee:
          return ol(a, a.render, "ForwardRef");
        case $:
          return "Fragment";
        case U:
          return a;
        case L:
          return "Portal";
        case k:
          return "Root";
        case j:
          return "Text";
        case $e:
          return Pt(a);
        case I:
          return a === Ei ? "StrictMode" : "Mode";
        case we:
          return "Offscreen";
        case J:
          return "Profiler";
        case ot:
          return "Scope";
        case F:
          return "Suspense";
        case ze:
          return "SuspenseList";
        case Et:
          return "TracingMarker";
        case _:
        case M:
        case Ke:
        case z:
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
    var so = p.ReactDebugCurrentFrame, Dn = null, na = !1;
    function Vr() {
      {
        if (Dn === null)
          return null;
        var e = Dn._debugOwner;
        if (e !== null && typeof e < "u")
          return ft(e);
      }
      return null;
    }
    function Tu() {
      return Dn === null ? "" : il(Dn);
    }
    function An() {
      so.getCurrentStack = null, Dn = null, na = !1;
    }
    function qt(e) {
      so.getCurrentStack = e === null ? null : Tu, Dn = e, na = !1;
    }
    function Cc() {
      return Dn;
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
    function Ii(e, t) {
      bc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rc(e) {
      return e._valueTracker;
    }
    function Ua(e) {
      e._valueTracker = null;
    }
    function _u(e) {
      var t = "";
      return e && (wu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xu(e) {
      var t = wu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
      Rc(e) || (e._valueTracker = xu(e));
    }
    function sl(e) {
      if (!e)
        return !1;
      var t = Rc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = _u(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ou(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Du = !1, co = !1, cl = !1, ms = !1;
    function ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var a = e, i = t.checked, o = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function O(e, t) {
      Ii("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !co && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), co = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Du && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), Du = !0);
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
    function te(e, t) {
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
      t.hasOwnProperty("value") ? et(a, t.type, o) : t.hasOwnProperty("defaultValue") && et(a, t.type, Ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
    function rt(e, t) {
      var a = e;
      te(a, t), Te(a, t);
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
            sl(d), te(d, m);
          }
        }
      }
    }
    function et(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ou(e.ownerDocument) !== e) && (a == null ? e.defaultValue = rr(e._wrapperState.initialValue) : e.defaultValue !== rr(a) && (e.defaultValue = rr(a)));
    }
    var _t = !1, Ft = !1, cn = !1;
    function en(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ft || (Ft = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (cn || (cn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !_t && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _t = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", rr(Ti(t.value)));
    }
    var yn = Array.isArray;
    function kt(e) {
      return yn(e);
    }
    var Bi;
    Bi = !1;
    function fl() {
      var e = Vr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ys = ["value", "defaultValue"];
    function vd(e) {
      {
        Ii("select", e);
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
        for (var T = rr(Ti(a)), H = null, P = 0; P < o.length; P++) {
          if (o[P].value === T) {
            o[P].selected = !0, i && (o[P].defaultSelected = !0);
            return;
          }
          H === null && !o[P].disabled && (H = o[P]);
        }
        H !== null && (H.selected = !0);
      }
    }
    function gs(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function Ss(e, t) {
      var a = e;
      vd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Bi && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Bi = !0);
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
      var i = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function kv(e, t) {
      var a = e;
      Ii("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !md && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component"), md = !0);
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
    var $i = "http://www.w3.org/1999/xhtml", Ty = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function Tc(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return Ty;
        default:
          return $i;
      }
    }
    function Ed(e, t) {
      return e == null || e === $i ? Tc(t) : e === Sd && t === "foreignObject" ? $i : e;
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
    }), aa = 1, Yi = 3, Yn = 8, li = 9, fo = 11, _c = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
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
    }, Wv = wt({
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
    function Wi(e, t) {
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
        if (_e.call(si, t) && si[t])
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
      Wi(e, t) || qv(e, t);
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
        if (_e.call(ar, t) && ar[t])
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
        return typeof a == "boolean" && _r(t, a, y, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ar[t] = !0, !0) : b ? !0 : _r(t, a, y, !1) ? (ar[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === xn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ar[t] = !0), !0);
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
      Wi(e, t) || Jv(e, t, a);
    }
    var Qi = 1, Rs = 2, vo = 4, My = Qi | Rs | vo, Ts = null;
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
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var dn = null, ku = null, Gi = null;
    function yl(e) {
      var t = Bl(e);
      if (t) {
        if (typeof dn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = tm(a);
          dn(t.stateNode, t.type, i);
        }
      }
    }
    function nh(e) {
      dn = e;
    }
    function Mc(e) {
      ku ? Gi ? Gi.push(e) : Gi = [e] : ku = e;
    }
    function _s() {
      return ku !== null || Gi !== null;
    }
    function xs() {
      if (ku) {
        var e = ku, t = Gi;
        if (ku = null, Gi = null, yl(e), t)
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
        var T = document.createEvent("Event"), H = !1, P = !0, q = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ne() {
          Ad.removeEventListener(re, Je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var Le = Array.prototype.slice.call(arguments, 3);
        function Je() {
          H = !0, ne(), a.apply(i, Le), P = !1;
        }
        var Ye, At = !1, Dt = !1;
        function W(Q) {
          if (Ye = Q.error, At = !0, Ye === null && Q.colno === 0 && Q.lineno === 0 && (Dt = !0), Q.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), Ad.addEventListener(re, Je, !1), T.initEvent(re, !1, !1), Ad.dispatchEvent(T), X && Object.defineProperty(window, "event", X), H && P && (At ? Dt && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", W), !H)
          return ne(), rh.apply(this, arguments);
      };
    }
    var zy = Ld, Nu = !1, ci = null, Ds = !1, Mu = null, wi = {
      onError: function(e) {
        Nu = !0, ci = e;
      }
    };
    function go(e, t, a, i, o, s, d, m, y) {
      Nu = !1, ci = null, zy.apply(wi, arguments);
    }
    function qi(e, t, a, i, o, s, d, m, y) {
      if (go.apply(this, arguments), Nu) {
        var b = Ud();
        Ds || (Ds = !0, Mu = b);
      }
    }
    function zd() {
      if (Ds) {
        var e = Mu;
        throw Ds = !1, Mu = null, e;
      }
    }
    function Uy() {
      return Nu;
    }
    function Ud() {
      if (Nu) {
        var e = ci;
        return Nu = !1, ci = null, e;
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
    var qe = (
      /*                      */
      0
    ), Lu = (
      /*                */
      1
    ), gn = (
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
    ), st = (
      /*                   */
      128
    ), zn = (
      /*            */
      256
    ), ia = (
      /*                          */
      512
    ), Va = (
      /*                     */
      1024
    ), wn = (
      /*                      */
      2048
    ), Ha = (
      /*                    */
      4096
    ), Au = (
      /*                   */
      8192
    ), Ns = (
      /*             */
      16384
    ), zc = wn | gt | _i | ia | Va | Ns, ah = (
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
    ), zu = (
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
    ), la = gn | gt | Yt | Kt | ia | Ha | Au, xr = gt | _i | ia | Au, Ia = wn | Yt, pr = ua | zu | Pd, Ki = p.ReactCurrentOwner;
    function wa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (gn | Ha)) !== qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === k ? a : null;
    }
    function Fd(e) {
      if (e.tag === F) {
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
        var t = Ki.current;
        if (t !== null && t.tag === _) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Fa(e);
      return o ? wa(o) === o : !1;
    }
    function sa(e) {
      if (wa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Sn(e) {
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
      var t = Sn(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === U || e.tag === j)
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
      var t = Sn(e);
      return t !== null ? jc(t) : null;
    }
    function jc(e) {
      if (e.tag === U || e.tag === j)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== L) {
          var a = jc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pc = v.unstable_scheduleCallback, uh = v.unstable_cancelCallback, Fc = v.unstable_shouldYield, oh = v.unstable_requestPaint, kn = v.unstable_now, Id = v.unstable_getCurrentPriorityLevel, Vc = v.unstable_ImmediatePriority, xa = v.unstable_UserBlockingPriority, xi = v.unstable_NormalPriority, Hc = v.unstable_LowPriority, Uu = v.unstable_IdlePriority, Bd = v.unstable_yieldValue, $d = v.unstable_setDisableYieldValue, ju = null, ur = null, Ce = null, Vn = !1, vr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Tt && (e = wt({}, e, {
          getLaneLabelMap: Fu,
          injectProfilingHooks: Zi
        })), ju = t.inject(e), ur = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function lh(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(ju, e, t);
        } catch (a) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Xi(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & st) === st;
          if (pt) {
            var i;
            switch (t) {
              case Or:
                i = Vc;
                break;
              case hr:
                i = xa;
                break;
              case eu:
                i = xi;
                break;
              case Hs:
                i = Uu;
                break;
              default:
                i = xi;
                break;
            }
            ur.onCommitFiberRoot(ju, e, i, a);
          }
        } catch (o) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function Pu(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(ju, e);
        } catch (t) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Wd(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(ju, e);
        } catch (t) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function qn(e) {
      if (typeof Bd == "function" && ($d(e), R(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(ju, e);
        } catch (t) {
          Vn || (Vn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      Ce = e;
    }
    function Fu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < En; a++) {
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
    function Vu(e) {
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
    function Hu(e, t) {
      Ce !== null && typeof Ce.markStateUpdateScheduled == "function" && Ce.markStateUpdateScheduled(e, t);
    }
    var tt = (
      /*                         */
      0
    ), xt = (
      /*                 */
      1
    ), at = (
      /*                    */
      2
    ), Nn = (
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
    var En = 31, ae = (
      /*                        */
      0
    ), Mt = (
      /*                          */
      0
    ), ut = (
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
    ), Cn = (
      /*                     */
      16
    ), To = (
      /*                */
      32
    ), Iu = (
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
    ), Ji = (
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
    ), Xd = Ji, Rl = (
      /*          */
      134217728
    ), of = (
      /*                          */
      268435455
    ), Tl = (
      /*               */
      268435456
    ), Bu = (
      /*                        */
      536870912
    ), fa = (
      /*                   */
      1073741824
    );
    function jy(e) {
      {
        if (e & ut)
          return "Sync";
        if (e & Oi)
          return "InputContinuousHydration";
        if (e & Oa)
          return "InputContinuous";
        if (e & Ro)
          return "DefaultHydration";
        if (e & Cn)
          return "Default";
        if (e & To)
          return "TransitionHydration";
        if (e & Iu)
          return "Transition";
        if (e & Oo)
          return "Retry";
        if (e & Rl)
          return "SelectiveHydration";
        if (e & Tl)
          return "IdleHydration";
        if (e & Bu)
          return "Idle";
        if (e & fa)
          return "Offscreen";
      }
    }
    var pn = -1, lf = wo, sf = Ji;
    function wl(e) {
      switch (Wn(e)) {
        case ut:
          return ut;
        case Oi:
          return Oi;
        case Oa:
          return Oa;
        case Ro:
          return Ro;
        case Cn:
          return Cn;
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
          return e & Iu;
        case Ji:
        case rf:
        case js:
        case af:
        case uf:
          return e & Oo;
        case Rl:
          return Rl;
        case Tl:
          return Tl;
        case Bu:
          return Bu;
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
        var T = Wn(i), H = Wn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= H || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Cn && (H & Iu) !== ae
        )
          return t;
      }
      (i & Oa) !== ae && (i |= a & Cn);
      var P = e.entangledLanes;
      if (P !== ae)
        for (var q = e.entanglements, X = i & P; X > 0; ) {
          var ne = $u(X), Le = 1 << ne;
          i |= q[ne], X &= ~Le;
        }
      return i;
    }
    function mh(e, t) {
      for (var a = e.eventTimes, i = pn; t > 0; ) {
        var o = $u(t), s = 1 << o, d = a[o];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function cf(e, t) {
      switch (e) {
        case ut:
        case Oi:
        case Oa:
          return t + 250;
        case Ro:
        case Cn:
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
        case Ji:
        case rf:
        case js:
        case af:
        case uf:
          return pn;
        case Rl:
        case Tl:
        case Bu:
        case fa:
          return pn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), pn;
      }
    }
    function Py(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = $u(d), y = 1 << m, b = s[m];
        b === pn ? ((y & i) === ae || (y & o) !== ae) && (s[m] = cf(y, t)) : b <= t && (e.expiredLanes |= y), d &= ~y;
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
      return (e & ut) !== ae;
    }
    function Fs(e) {
      return (e & of) !== ae;
    }
    function ff(e) {
      return (e & Oo) === e;
    }
    function Vy(e) {
      var t = ut | Oa | Cn;
      return (e & t) === ae;
    }
    function yh(e) {
      return (e & Iu) === e;
    }
    function Vs(e, t) {
      var a = Oi | Oa | Ro | Cn;
      return (t & a) !== ae;
    }
    function gh(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function Jd(e) {
      return (e & Iu) !== ae;
    }
    function ep() {
      var e = lf;
      return lf <<= 1, (lf & Iu) === ae && (lf = wo), e;
    }
    function Hy() {
      var e = sf;
      return sf <<= 1, (sf & Oo) === ae && (sf = Ji), e;
    }
    function Wn(e) {
      return e & -e;
    }
    function Kn(e) {
      return Wn(e);
    }
    function $u(e) {
      return 31 - Wc(e);
    }
    function df(e) {
      return $u(e);
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
      for (var t = [], a = 0; a < En; a++)
        t.push(e);
      return t;
    }
    function ko(e, t, a) {
      e.pendingLanes |= t, t !== Bu && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, o = df(t);
      i[o] = a;
    }
    function np(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = $u(i), s = 1 << o;
        a[o] = pn, i &= ~s;
      }
    }
    function rp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ap(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = $u(d), y = 1 << m;
        i[m] = ae, o[m] = pn, s[m] = pn, d &= ~y;
      }
    }
    function Ol(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = $u(o), d = 1 << s;
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
        case Cn:
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
        case Ji:
        case rf:
        case js:
        case af:
        case uf:
          i = To;
          break;
        case Bu:
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
    var Or = ut, hr = Oa, eu = Cn, Hs = Bu, No = Mt;
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
      return op(Or, t) ? op(hr, t) ? Fs(t) ? eu : Hs : hr : Or;
    }
    function Zn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ch;
    function je(e) {
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
    var hf = !1, kl = [], Di = null, _n = null, or = null, Qa = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Map(), tu = [], di = [
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
          _n = null;
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
          return _n = Ml(_n, e, t, a, i, d), !0;
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
          var T = o, H = T.pointerId;
          return Nl.set(H, Ml(Nl.get(H) || null, e, t, a, i, T)), !0;
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
          if (i === F) {
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
      }, i = 0; i < tu.length && op(t, tu[i].priority); i++)
        ;
      tu.splice(i, 0, a), i === 0 && cp(a);
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
      hf = !1, Di !== null && mf(Di) && (Di = null), _n !== null && mf(_n) && (_n = null), or !== null && mf(or) && (or = null), Qa.forEach(Qs), Nl.forEach(Qs);
    }
    function kr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, hf || (hf = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, fp)));
    }
    function Ot(e) {
      if (kl.length > 0) {
        kr(kl[0], e);
        for (var t = 1; t < kl.length; t++) {
          var a = kl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && kr(Di, e), _n !== null && kr(_n, e), or !== null && kr(or, e);
      var i = function(m) {
        return kr(m, e);
      };
      Qa.forEach(i), Nl.forEach(i);
      for (var o = 0; o < tu.length; o++) {
        var s = tu[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tu.length > 0; ) {
        var d = tu[0];
        if (d.blockedOn !== null)
          break;
        cp(d), d.blockedOn === null && tu.shift();
      }
    }
    var Mn = p.ReactCurrentBatchConfig, Un = !0;
    function lr(e) {
      Un = !!e;
    }
    function Da() {
      return Un;
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
        case eu:
        default:
          o = nu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Jn(e, t, a, i) {
      var o = Wa(), s = Mn.transition;
      Mn.transition = null;
      try {
        Xn(Or), nu(e, t, a, i);
      } finally {
        Xn(o), Mn.transition = s;
      }
    }
    function Gs(e, t, a, i) {
      var o = Wa(), s = Mn.transition;
      Mn.transition = null;
      try {
        Xn(hr), nu(e, t, a, i);
      } finally {
        Xn(o), Mn.transition = s;
      }
    }
    function nu(e, t, a, i) {
      Un && yf(e, t, a, i);
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
          if (m === F) {
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
              return eu;
            case Uu:
              return Hs;
            default:
              return eu;
          }
        }
        default:
          return eu;
      }
    }
    function dp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function zl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ru(e, t, a, i) {
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
    var Lo = null, Ni = null, Yu = null;
    function Wu(e) {
      return Lo = e, Ni = Ef(), !0;
    }
    function Sf() {
      Lo = null, Ni = null, Yu = null;
    }
    function Ul() {
      if (Yu)
        return Yu;
      var e, t = Ni, a = t.length, i, o = Ef(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Yu = o.slice(e, m), Yu;
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
      return wt(t.prototype, {
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
    }, Lr = Qn(Mr), jl = wt({}, Mr, {
      view: 0,
      detail: 0
    }), pp = Qn(jl), qs, vp, Ga;
    function Dh(e) {
      e !== Ga && (Ga && e.type === "mousemove" ? (qs = e.screenX - Ga.screenX, vp = e.screenY - Ga.screenY) : (qs = 0, vp = 0), Ga = e);
    }
    var Pl = wt({}, jl, {
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
    }), Qu = Qn(Pl), hp = wt({}, Pl, {
      dataTransfer: 0
    }), Uo = Qn(hp), kh = wt({}, jl, {
      relatedTarget: 0
    }), Cf = Qn(kh), mp = wt({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = Qn(mp), $y = wt({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yy = Qn($y), Nh = wt({}, Mr, {
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
    var jn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Qy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = jn[e];
      return i ? !!a[i] : !1;
    }
    function Rf(e) {
      return Qy;
    }
    var Gy = wt({}, jl, {
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
    }), qy = Qn(Gy), Lh = wt({}, Pl, {
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
    }), gp = Qn(Lh), Ky = wt({}, jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rf
    }), qa = Qn(Ky), Sp = wt({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xy = Qn(Sp), Gu = wt({}, Pl, {
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
    }), Tf = Qn(Gu), Po = [9, 13, 27, 32], Ks = 229, Xs = Zt && "CompositionEvent" in window, Fo = null;
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
    var au = !1;
    function Rp(e, t, a, i, o) {
      var s, d;
      if (Xs ? s = Uh(t) : au ? jh(t, i) && (s = "onCompositionEnd") : Cp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      wf && !xf(i) && (!au && s === "onCompositionStart" ? au = Wu(o) : s === "onCompositionEnd" && au && (d = Ul()));
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
      if (au) {
        if (e === "compositionend" || !Xs && jh(e, t)) {
          var a = Ul();
          return Sf(), au = !1, a;
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
      H0(e, 0);
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
    var A = !1;
    Zt && (A = tg("input") && (!document.documentMode || document.documentMode > 9));
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
    function ke(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(u);
    }
    function Pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ie(e, t) {
      if (e === "click")
        return C(t);
    }
    function Hn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function Y(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || et(e, "number", e.value);
    }
    function V(e, t, a, i, o, s, d) {
      var m = a ? Uf(a) : window, y, b;
      if (l(m) ? y = x : Vl(m) ? A ? y = Hn : (y = ke, b = ce) : Pe(m) && (y = Ie), y) {
        var T = y(t, a);
        if (T) {
          n(e, T, i, o);
          return;
        }
      }
      b && b(t, m, a), t === "focusout" && Y(m);
    }
    function G() {
      De("onMouseEnter", ["mouseout", "mouseover"]), De("onMouseLeave", ["mouseout", "mouseover"]), De("onPointerEnter", ["pointerout", "pointerover"]), De("onPointerLeave", ["pointerout", "pointerover"]);
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
          var H = o.ownerDocument;
          H ? T = H.defaultView || H.parentWindow : T = window;
        }
        var P, q;
        if (y) {
          var X = i.relatedTarget || i.toElement;
          if (P = a, q = X ? tc(X) : null, q !== null) {
            var ne = wa(q);
            (q !== ne || q.tag !== U && q.tag !== j) && (q = null);
          }
        } else
          P = null, q = a;
        if (P !== q) {
          var Le = Qu, Je = "onMouseLeave", Ye = "onMouseEnter", At = "mouse";
          (t === "pointerout" || t === "pointerover") && (Le = gp, Je = "onPointerLeave", Ye = "onPointerEnter", At = "pointer");
          var Dt = P == null ? T : Uf(P), W = q == null ? T : Uf(q), re = new Le(Je, At + "leave", P, i, o);
          re.target = Dt, re.relatedTarget = W;
          var Q = null, ve = tc(o);
          if (ve === a) {
            var Ae = new Le(Ye, At + "enter", q, i, o);
            Ae.target = W, Ae.relatedTarget = Dt, Q = Ae;
          }
          qT(e, re, Q, P, q);
        }
      }
    }
    function Be(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : Be;
    function Qe(e, t) {
      if (Fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!_e.call(t, s) || !Fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ct(e) {
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
      for (var a = ct(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Yi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = ct(sr(a));
      }
    }
    function qu(e) {
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
      var s = 0, d = -1, m = -1, y = 0, b = 0, T = e, H = null;
      e:
        for (; ; ) {
          for (var P = null; T === t && (a === 0 || T.nodeType === Yi) && (d = s + a), T === i && (o === 0 || T.nodeType === Yi) && (m = s + o), T.nodeType === Yi && (s += T.nodeValue.length), (P = T.firstChild) !== null; )
            H = T, T = P;
          for (; ; ) {
            if (T === e)
              break e;
            if (H === t && ++y === a && (d = s), H === i && ++b === o && (m = s), (P = T.nextSibling) !== null)
              break;
            T = H, H = T.parentNode;
          }
          T = P;
        }
      return d === -1 || m === -1 ? null : {
        start: d,
        end: m
      };
    }
    function kT(e, t) {
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
          var H = a.createRange();
          H.setStart(b.node, b.offset), o.removeAllRanges(), d > m ? (o.addRange(H), o.extend(T.node, T.offset)) : (H.setEnd(T.node, T.offset), o.addRange(H));
        }
      }
    }
    function D0(e) {
      return e && e.nodeType === Yi;
    }
    function k0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : D0(e) ? !1 : D0(t) ? k0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function NT(e) {
      return e && e.ownerDocument && k0(e.ownerDocument.documentElement, e);
    }
    function MT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function N0() {
      for (var e = window, t = Ou(); t instanceof e.HTMLIFrameElement; ) {
        if (MT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ou(e.document);
      }
      return t;
    }
    function rg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function LT() {
      var e = N0();
      return {
        focusedElem: e,
        selectionRange: rg(e) ? zT(e) : null
      };
    }
    function AT(e) {
      var t = N0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && NT(a)) {
        i !== null && rg(a) && UT(a, i);
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
    function zT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = qu(e), t || {
        start: 0,
        end: 0
      };
    }
    function UT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : kT(e, t);
    }
    var jT = Zt && "documentMode" in document && document.documentMode <= 11;
    function PT() {
      Bn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nf = null, ag = null, Tp = null, ig = !1;
    function FT(e) {
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
    function VT(e) {
      return e.window === e ? e.document : e.nodeType === li ? e : e.ownerDocument;
    }
    function M0(e, t, a) {
      var i = VT(a);
      if (!(ig || Nf == null || Nf !== Ou(i))) {
        var o = FT(Nf);
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
    function HT(e, t, a, i, o, s, d) {
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
          ig = !1, M0(e, i, o);
          break;
        case "selectionchange":
          if (jT)
            break;
        case "keydown":
        case "keyup":
          M0(e, i, o);
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
    }, ug = {}, L0 = {};
    Zt && (L0 = document.createElement("div").style, "AnimationEvent" in window || (delete Mf.animationend.animation, delete Mf.animationiteration.animation, delete Mf.animationstart.animation), "TransitionEvent" in window || delete Mf.transitionend.transition);
    function Vh(e) {
      if (ug[e])
        return ug[e];
      if (!Mf[e])
        return e;
      var t = Mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in L0)
          return ug[e] = t[a];
      return e;
    }
    var A0 = Vh("animationend"), z0 = Vh("animationiteration"), U0 = Vh("animationstart"), j0 = Vh("transitionend"), P0 = /* @__PURE__ */ new Map(), F0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hl(e, t) {
      P0.set(e, t), Bn(t, [e]);
    }
    function IT() {
      for (var e = 0; e < F0.length; e++) {
        var t = F0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Hl(a, "on" + i);
      }
      Hl(A0, "onAnimationEnd"), Hl(z0, "onAnimationIteration"), Hl(U0, "onAnimationStart"), Hl("dblclick", "onDoubleClick"), Hl("focusin", "onFocus"), Hl("focusout", "onBlur"), Hl(j0, "onTransitionEnd");
    }
    function BT(e, t, a, i, o, s, d) {
      var m = P0.get(t);
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
            y = Qu;
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
          case A0:
          case z0:
          case U0:
            y = bf;
            break;
          case j0:
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
          var H = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", P = QT(a, m, i.type, T, H);
          if (P.length > 0) {
            var q = new y(m, b, null, i, o);
            e.push({
              event: q,
              listeners: P
            });
          }
        }
      }
    }
    IT(), G(), kf(), PT(), zh();
    function $T(e, t, a, i, o, s, d) {
      BT(e, t, a, i, o, s);
      var m = (s & My) === 0;
      m && (ye(e, t, a, i, o), V(e, t, a, i, o), HT(e, t, a, i, o), Df(e, t, a, i, o));
    }
    var wp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], og = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wp));
    function V0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, qi(i, t, void 0, e), e.currentTarget = null;
    }
    function YT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], d = s.instance, m = s.currentTarget, y = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          V0(e, y, m), i = d;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], H = T.instance, P = T.currentTarget, q = T.listener;
          if (H !== i && e.isPropagationStopped())
            return;
          V0(e, q, P), i = H;
        }
    }
    function H0(e, t) {
      for (var a = (t & vo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, d = o.listeners;
        YT(s, d, a);
      }
      zd();
    }
    function WT(e, t, a, i, o) {
      var s = Nc(a), d = [];
      $T(d, e, i, a, s, t), H0(d, t);
    }
    function Ln(e, t) {
      og.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = b_(t), o = KT(e, a);
      i.has(o) || (I0(t, e, Rs, a), i.add(o));
    }
    function lg(e, t, a) {
      og.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= vo), I0(a, e, i, t);
    }
    var Hh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Hh]) {
        e[Hh] = !0, vt.forEach(function(a) {
          a !== "selectionchange" && (og.has(a) || lg(a, !1, e), lg(a, !0, e));
        });
        var t = e.nodeType === li ? e : e.ownerDocument;
        t !== null && (t[Hh] || (t[Hh] = !0, lg("selectionchange", !1, t)));
      }
    }
    function I0(e, t, a, i, o) {
      var s = Ll(e, t, a), d = void 0;
      Os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? ru(e, t, s, d) : zl(e, t, s) : d !== void 0 ? gf(e, t, s, d) : dp(e, t, s);
    }
    function B0(e, t) {
      return e === t || e.nodeType === Yn && e.parentNode === t;
    }
    function sg(e, t, a, i, o) {
      var s = i;
      if (!(t & Qi) && !(t & Rs)) {
        var d = o;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var y = m.tag;
              if (y === k || y === L) {
                var b = m.stateNode.containerInfo;
                if (B0(b, d))
                  break;
                if (y === L)
                  for (var T = m.return; T !== null; ) {
                    var H = T.tag;
                    if (H === k || H === L) {
                      var P = T.stateNode.containerInfo;
                      if (B0(P, d))
                        return;
                    }
                    T = T.return;
                  }
                for (; b !== null; ) {
                  var q = tc(b);
                  if (q === null)
                    return;
                  var X = q.tag;
                  if (X === U || X === j) {
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
        return WT(e, t, a, s);
      });
    }
    function xp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function QT(e, t, a, i, o, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, y = [], b = e, T = null; b !== null; ) {
        var H = b, P = H.stateNode, q = H.tag;
        if (q === U && P !== null && (T = P, m !== null)) {
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
        if (m === U && d !== null) {
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
      while (e && e.tag !== U);
      return e || null;
    }
    function GT(e, t) {
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
    function $0(e, t, a, i, o) {
      for (var s = t._reactName, d = [], m = a; m !== null && m !== i; ) {
        var y = m, b = y.alternate, T = y.stateNode, H = y.tag;
        if (b !== null && b === i)
          break;
        if (H === U && T !== null) {
          var P = T;
          if (o) {
            var q = mo(m, s);
            q != null && d.unshift(xp(m, q, P));
          } else if (!o) {
            var X = mo(m, s);
            X != null && d.push(xp(m, X, P));
          }
        }
        m = m.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function qT(e, t, a, i, o) {
      var s = i && o ? GT(i, o) : null;
      i !== null && $0(e, t, i, s, !1), o !== null && a !== null && $0(e, a, o, s, !0);
    }
    function KT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ka = !1, Op = "dangerouslySetInnerHTML", Bh = "suppressContentEditableWarning", Il = "suppressHydrationWarning", Y0 = "autoFocus", Js = "children", ec = "style", $h = "__html", cg, Yh, Dp, W0, Wh, Q0, G0;
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
    }, Q0 = Zt && !document.documentMode, Dp = function(e, t, a) {
      if (!Ka) {
        var i = Qh(a), o = Qh(t);
        o !== i && (Ka = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, W0 = function(e) {
      if (!Ka) {
        Ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Wh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, G0 = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var XT = /\r\n?/g, ZT = /\u0000|\uFFFD/g;
    function Qh(e) {
      Jr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(XT, `
`).replace(ZT, "");
    }
    function Gh(e, t, a, i) {
      var o = Qh(t), s = Qh(e);
      if (s !== o && (i && (Ka || (Ka = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function q0(e) {
      return e.nodeType === li ? e : e.ownerDocument;
    }
    function JT() {
    }
    function qh(e) {
      e.onclick = JT;
    }
    function ew(e, t, a, i, o) {
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
            s === Bh || s === Il || s === Y0 || (Ut.hasOwnProperty(s) ? d != null && (typeof d != "function" && Wh(s, d), s === "onScroll" && Ln("scroll", t)) : d != null && ba(t, s, d, o));
        }
    }
    function tw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], d = t[o + 1];
        s === ec ? $v(e, d) : s === Op ? Lv(e, d) : s === Js ? _c(e, d) : ba(e, s, d, i);
      }
    }
    function nw(e, t, a, i) {
      var o, s = q0(a), d, m = i;
      if (m === $i && (m = Tc(e)), m === $i) {
        if (o = Wi(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return m === $i && !o && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !_e.call(cg, e) && (cg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function rw(e, t) {
      return q0(t).createTextNode(e);
    }
    function aw(e, t, a, i) {
      var o = Wi(t, a);
      Yh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Ln("cancel", e), Ln("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Ln("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < wp.length; d++)
            Ln(wp[d], e);
          s = a;
          break;
        case "source":
          Ln("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Ln("error", e), Ln("load", e), s = a;
          break;
        case "details":
          Ln("toggle", e), s = a;
          break;
        case "input":
          O(e, a), s = S(e, a), Ln("invalid", e);
          break;
        case "option":
          en(e, a), s = a;
          break;
        case "select":
          Ss(e, a), s = gs(e, a), Ln("invalid", e);
          break;
        case "textarea":
          kv(e, a), s = yd(e, a), Ln("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Oc(t, s), ew(t, e, i, s, o), t) {
        case "input":
          ja(e), me(e, a, !1);
          break;
        case "textarea":
          ja(e), Mv(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          hd(e, a);
          break;
        default:
          typeof s.onClick == "function" && qh(e);
          break;
      }
    }
    function iw(e, t, a, i, o) {
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
            var H = d[y];
            for (b in H)
              H.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else
            y === Op || y === Js || y === Bh || y === Il || y === Y0 || (Ut.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in m) {
        var P = m[y], q = d != null ? d[y] : void 0;
        if (!(!m.hasOwnProperty(y) || P === q || P == null && q == null))
          if (y === ec)
            if (P && Object.freeze(P), q) {
              for (b in q)
                q.hasOwnProperty(b) && (!P || !P.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in P)
                P.hasOwnProperty(b) && q[b] !== P[b] && (T || (T = {}), T[b] = P[b]);
            } else
              T || (s || (s = []), s.push(y, T)), T = P;
          else if (y === Op) {
            var X = P ? P[$h] : void 0, ne = q ? q[$h] : void 0;
            X != null && ne !== X && (s = s || []).push(y, X);
          } else
            y === Js ? (typeof P == "string" || typeof P == "number") && (s = s || []).push(y, "" + P) : y === Bh || y === Il || (Ut.hasOwnProperty(y) ? (P != null && (typeof P != "function" && Wh(y, P), y === "onScroll" && Ln("scroll", e)), !s && q !== P && (s = [])) : (s = s || []).push(y, P));
      }
      return T && (Cs(T, m[ec]), (s = s || []).push(ec, T)), s;
    }
    function uw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && K(e, o);
      var s = Wi(a, i), d = Wi(a, o);
      switch (tw(e, t, s, d), a) {
        case "input":
          te(e, o);
          break;
        case "textarea":
          Nv(e, o);
          break;
        case "select":
          by(e, o);
          break;
      }
    }
    function ow(e) {
      {
        var t = e.toLowerCase();
        return Dc.hasOwnProperty(t) && Dc[t] || null;
      }
    }
    function lw(e, t, a, i, o, s, d) {
      var m, y;
      switch (m = Wi(t, a), Yh(t, a), t) {
        case "dialog":
          Ln("cancel", e), Ln("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ln("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < wp.length; b++)
            Ln(wp[b], e);
          break;
        case "source":
          Ln("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Ln("error", e), Ln("load", e);
          break;
        case "details":
          Ln("toggle", e);
          break;
        case "input":
          O(e, a), Ln("invalid", e);
          break;
        case "option":
          en(e, a);
          break;
        case "select":
          Ss(e, a), Ln("invalid", e);
          break;
        case "textarea":
          kv(e, a), Ln("invalid", e);
          break;
      }
      Oc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var T = e.attributes, H = 0; H < T.length; H++) {
          var P = T[H].name.toLowerCase();
          switch (P) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(T[H].name);
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
            ne != null && (typeof ne != "function" && Wh(X, ne), X === "onScroll" && Ln("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Le = void 0, Je = m && it ? null : Ur(X);
            if (a[Il] !== !0) {
              if (!(X === Bh || X === Il || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Op) {
                  var Ye = e.innerHTML, At = ne ? ne[$h] : void 0;
                  if (At != null) {
                    var Dt = G0(e, At);
                    Dt !== Ye && Dp(X, Ye, Dt);
                  }
                } else if (X === ec) {
                  if (y.delete(X), Q0) {
                    var W = ky(ne);
                    Le = e.getAttribute("style"), W !== Le && Dp(X, Le, W);
                  }
                } else if (m && !it)
                  y.delete(X.toLowerCase()), Le = gi(e, X, ne), ne !== Le && Dp(X, Le, ne);
                else if (!On(X, Je, m) && !Jt(X, ne, Je, m)) {
                  var re = !1;
                  if (Je !== null)
                    y.delete(Je.attributeName), Le = Ca(e, X, ne, Je);
                  else {
                    var Q = i;
                    if (Q === $i && (Q = Tc(t)), Q === $i)
                      y.delete(X.toLowerCase());
                    else {
                      var ve = ow(X);
                      ve !== null && ve !== X && (re = !0, y.delete(ve)), y.delete(X);
                    }
                    Le = gi(e, X, ne);
                  }
                  var Ae = it;
                  !Ae && ne !== Le && !re && Dp(X, Le, ne);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Il] !== !0 && W0(y), t) {
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
    function sw(e, t, a) {
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
    function cw(e, t, a) {
      switch (t) {
        case "input":
          rt(e, a);
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
      var fw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], K0 = [
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
      ], dw = K0.concat(["button"]), pw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], X0 = {
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
        var a = wt({}, e || X0), i = {
          tag: t
        };
        return K0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), dw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), fw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var vw = function(e, t) {
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
            return pw.indexOf(t) === -1;
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
      }, hw = function(e, t) {
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
      }, Z0 = {};
      kp = function(e, t, a) {
        a = a || X0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = vw(e, o) ? null : i, d = s ? null : hw(e, a), m = s || d;
        if (m) {
          var y = m.tag, b = !!s + "|" + e + "|" + y;
          if (!Z0[b]) {
            Z0[b] = !0;
            var T = e, H = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", H = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var P = "";
              y === "table" && e === "tr" && (P += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, y, H, P);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, y);
          }
        }
      };
    }
    var Kh = "suppressHydrationWarning", Xh = "$", Zh = "/$", Mp = "$?", Lp = "$!", mw = "style", hg = null, mg = null;
    function yw(e) {
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
    function gw(e, t, a) {
      {
        var i = e, o = Ed(i.namespace, t), s = Np(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function IM(e) {
      return e;
    }
    function Sw(e) {
      hg = Da(), mg = LT();
      var t = null;
      return lr(!1), t;
    }
    function Ew(e) {
      AT(mg), lr(hg), hg = null, mg = null;
    }
    function Cw(e, t, a, i, o) {
      var s;
      {
        var d = i;
        if (kp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = Np(d.ancestorInfo, e);
          kp(null, m, y);
        }
        s = d.namespace;
      }
      var b = nw(e, t, a, s);
      return Up(o, b), Tg(b, t), b;
    }
    function bw(e, t) {
      e.appendChild(t);
    }
    function Rw(e, t, a, i, o) {
      switch (aw(e, t, a, i), t) {
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
    function Tw(e, t, a, i, o, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = Np(d.ancestorInfo, t);
          kp(null, m, y);
        }
      }
      return iw(e, t, a, i);
    }
    function yg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ww(e, t, a, i) {
      {
        var o = a;
        kp(null, e, o.ancestorInfo);
      }
      var s = rw(e, t);
      return Up(i, s), s;
    }
    function _w() {
      var e = window.event;
      return e === void 0 ? eu : Hr(e.type);
    }
    var gg = typeof setTimeout == "function" ? setTimeout : void 0, xw = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, J0 = typeof Promise == "function" ? Promise : void 0, Ow = typeof queueMicrotask == "function" ? queueMicrotask : typeof J0 < "u" ? function(e) {
      return J0.resolve(null).then(e).catch(Dw);
    } : gg;
    function Dw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function kw(e, t, a, i) {
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
    function Nw(e, t, a, i, o, s) {
      uw(e, t, a, i, o), Tg(e, o);
    }
    function eC(e) {
      _c(e, "");
    }
    function Mw(e, t, a) {
      e.nodeValue = a;
    }
    function Lw(e, t) {
      e.appendChild(t);
    }
    function Aw(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && qh(a);
    }
    function zw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Uw(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function jw(e, t) {
      e.removeChild(t);
    }
    function Pw(e, t) {
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
              e.removeChild(o), Ot(t);
              return;
            } else
              i--;
          else
            (s === Xh || s === Mp || s === Lp) && i++;
        }
        a = o;
      } while (a);
      Ot(t);
    }
    function Fw(e, t) {
      e.nodeType === Yn ? Eg(e.parentNode, t) : e.nodeType === aa && Eg(e, t), Ot(e);
    }
    function Vw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Hw(e) {
      e.nodeValue = "";
    }
    function Iw(e, t) {
      e = e;
      var a = t[mw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function Bw(e, t) {
      e.nodeValue = t;
    }
    function $w(e) {
      e.nodeType === aa ? e.textContent = "" : e.nodeType === li && e.documentElement && e.removeChild(e.documentElement);
    }
    function Yw(e, t, a) {
      return e.nodeType !== aa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Ww(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function Qw(e) {
      return e.nodeType !== Yn ? null : e;
    }
    function tC(e) {
      return e.data === Mp;
    }
    function Cg(e) {
      return e.data === Lp;
    }
    function Gw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function qw(e, t) {
      e._reactRetry = t;
    }
    function Jh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === aa || t === Yi)
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
    function Kw(e) {
      return Jh(e.firstChild);
    }
    function Xw(e) {
      return Jh(e.firstChild);
    }
    function Zw(e) {
      return Jh(e.nextSibling);
    }
    function Jw(e, t, a, i, o, s, d) {
      Up(s, e), Tg(e, a);
      var m;
      {
        var y = o;
        m = y.namespace;
      }
      var b = (s.mode & xt) !== tt;
      return lw(e, t, a, m, i, b, d);
    }
    function e_(e, t, a, i) {
      return Up(a, e), a.mode & xt, sw(e, t);
    }
    function t_(e, t) {
      Up(t, e);
    }
    function n_(e) {
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
    function nC(e) {
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
    function r_(e) {
      Ot(e);
    }
    function a_(e) {
      Ot(e);
    }
    function i_(e) {
      return e !== "head" && e !== "body";
    }
    function u_(e, t, a, i) {
      var o = !0;
      Gh(t.nodeValue, a, i, o);
    }
    function o_(e, t, a, i, o, s) {
      if (t[Kh] !== !0) {
        var d = !0;
        Gh(i.nodeValue, o, s, d);
      }
    }
    function l_(e, t) {
      t.nodeType === aa ? fg(e, t) : t.nodeType === Yn || dg(e, t);
    }
    function s_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === aa ? fg(a, t) : t.nodeType === Yn || dg(a, t));
      }
    }
    function c_(e, t, a, i, o) {
      (o || t[Kh] !== !0) && (i.nodeType === aa ? fg(a, i) : i.nodeType === Yn || dg(a, i));
    }
    function f_(e, t, a) {
      pg(e, t);
    }
    function d_(e, t) {
      vg(e, t);
    }
    function p_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && pg(i, t);
      }
    }
    function v_(e, t) {
      {
        var a = e.parentNode;
        a !== null && vg(a, t);
      }
    }
    function h_(e, t, a, i, o, s) {
      (s || t[Kh] !== !0) && pg(a, i);
    }
    function m_(e, t, a, i, o) {
      (o || t[Kh] !== !0) && vg(a, i);
    }
    function y_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function g_(e) {
      _p(e);
    }
    var Af = Math.random().toString(36).slice(2), zf = "__reactFiber$" + Af, bg = "__reactProps$" + Af, zp = "__reactContainer$" + Af, Rg = "__reactEvents$" + Af, S_ = "__reactListeners$" + Af, E_ = "__reactHandles$" + Af;
    function C_(e) {
      delete e[zf], delete e[bg], delete e[Rg], delete e[S_], delete e[E_];
    }
    function Up(e, t) {
      t[zf] = e;
    }
    function em(e, t) {
      t[zp] = e;
    }
    function rC(e) {
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
            for (var o = nC(e); o !== null; ) {
              var s = o[zf];
              if (s)
                return s;
              o = nC(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Bl(e) {
      var t = e[zf] || e[zp];
      return t && (t.tag === U || t.tag === j || t.tag === F || t.tag === k) ? t : null;
    }
    function Uf(e) {
      if (e.tag === U || e.tag === j)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function tm(e) {
      return e[bg] || null;
    }
    function Tg(e, t) {
      e[bg] = t;
    }
    function b_(e) {
      var t = e[Rg];
      return t === void 0 && (t = e[Rg] = /* @__PURE__ */ new Set()), t;
    }
    var aC = {}, iC = p.ReactDebugCurrentFrame;
    function nm(e) {
      if (e) {
        var t = e._owner, a = Ri(e.type, e._source, t ? t.type : null);
        iC.setExtraStackFrame(a);
      } else
        iC.setExtraStackFrame(null);
    }
    function iu(e, t, a, i, o) {
      {
        var s = Function.call.bind(_e);
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
            m && !(m instanceof Error) && (nm(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof m), nm(null)), m instanceof Error && !(m.message in aC) && (aC[m.message] = !0, nm(o), g("Failed %s type: %s", a, m.message), nm(null));
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
    var Ho = $l(pi), Ku = $l(!1), xg = pi;
    function jf(e, t, a) {
      return a && Xu(t) ? xg : Ho.current;
    }
    function uC(e, t, a) {
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
          var m = ft(e) || "Unknown";
          iu(i, s, "context", m);
        }
        return o && uC(e, t, s), s;
      }
    }
    function am() {
      return Ku.current;
    }
    function Xu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function im(e) {
      pa(Ku, e), pa(Ho, e);
    }
    function Og(e) {
      pa(Ku, e), pa(Ho, e);
    }
    function oC(e, t, a) {
      {
        if (Ho.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(Ho, t, e), va(Ku, a, e);
      }
    }
    function lC(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ft(e) || "Unknown";
            _g[s] || (_g[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in o))
            throw new Error((ft(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = ft(e) || "Unknown";
          iu(o, d, "child context", y);
        }
        return wt({}, a, d);
      }
    }
    function um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return xg = Ho.current, va(Ho, a, e), va(Ku, Ku.current, e), !0;
      }
    }
    function sC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = lC(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = o, pa(Ku, e), pa(Ho, e), va(Ho, o, e), va(Ku, a, e);
        } else
          pa(Ku, e), va(Ku, a, e);
      }
    }
    function R_(e) {
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
              if (Xu(a))
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
    function cC(e) {
      Io === null ? Io = [e] : Io.push(e);
    }
    function T_(e) {
      Dg = !0, cC(e);
    }
    function fC() {
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
    function w_(e) {
      return ac(), (e.flags & jd) !== qe;
    }
    function __(e) {
      return ac(), sm;
    }
    function x_() {
      var e = $o, t = Bo, a = t & ~O_(t);
      return a.toString(32) + e;
    }
    function rc(e, t) {
      ac(), Ff[Vf++] = sm, Ff[Vf++] = lm, lm = e, sm = t;
    }
    function dC(e, t, a) {
      ac(), Mi[Li++] = Bo, Mi[Li++] = $o, Mi[Li++] = nc, nc = e;
      var i = Bo, o = $o, s = cm(i) - 1, d = i & ~(1 << s), m = a + 1, y = cm(t) + s;
      if (y > 30) {
        var b = s - s % 5, T = (1 << b) - 1, H = (d & T).toString(32), P = d >> b, q = s - b, X = cm(t) + q, ne = m << q, Le = ne | P, Je = H + o;
        Bo = 1 << X | Le, $o = Je;
      } else {
        var Ye = m << s, At = Ye | d, Dt = o;
        Bo = 1 << y | At, $o = Dt;
      }
    }
    function Ng(e) {
      ac();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rc(e, a), dC(e, a, i);
      }
    }
    function cm(e) {
      return 32 - Wc(e);
    }
    function O_(e) {
      return 1 << cm(e) - 1;
    }
    function Mg(e) {
      for (; e === lm; )
        lm = Ff[--Vf], Ff[Vf] = null, sm = Ff[--Vf], Ff[Vf] = null;
      for (; e === nc; )
        nc = Mi[--Li], Mi[Li] = null, $o = Mi[--Li], Mi[Li] = null, Bo = Mi[--Li], Mi[Li] = null;
    }
    function D_() {
      return ac(), nc !== null ? {
        id: Bo,
        overflow: $o
      } : null;
    }
    function k_(e, t) {
      ac(), Mi[Li++] = Bo, Mi[Li++] = $o, Mi[Li++] = nc, Bo = t.id, $o = t.overflow, nc = e;
    }
    function ac() {
      Br() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ir = null, Ai = null, uu = !1, ic = !1, Ql = null;
    function N_() {
      uu && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function pC() {
      ic = !0;
    }
    function M_() {
      return ic;
    }
    function L_(e) {
      var t = e.stateNode.containerInfo;
      return Ai = Xw(t), Ir = e, uu = !0, Ql = null, ic = !1, !0;
    }
    function A_(e, t, a) {
      return Ai = Zw(t), Ir = e, uu = !0, Ql = null, ic = !1, a !== null && k_(e, a), !0;
    }
    function vC(e, t) {
      switch (e.tag) {
        case k: {
          l_(e.stateNode.containerInfo, t);
          break;
        }
        case U: {
          var a = (e.mode & xt) !== tt;
          c_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case F: {
          var i = e.memoizedState;
          i.dehydrated !== null && s_(i.dehydrated, t);
          break;
        }
      }
    }
    function hC(e, t) {
      vC(e, t);
      var a = jD();
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
              case U:
                var i = t.type;
                t.pendingProps, f_(a, i);
                break;
              case j:
                var o = t.pendingProps;
                d_(a, o);
                break;
            }
            break;
          }
          case U: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case U: {
                var y = t.type, b = t.pendingProps, T = (e.mode & xt) !== tt;
                h_(
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
              case j: {
                var H = t.pendingProps, P = (e.mode & xt) !== tt;
                m_(
                  s,
                  d,
                  m,
                  H,
                  // TODO: Delete this argument when we remove the legacy root API.
                  P
                );
                break;
              }
            }
            break;
          }
          case F: {
            var q = e.memoizedState, X = q.dehydrated;
            if (X !== null)
              switch (t.tag) {
                case U:
                  var ne = t.type;
                  t.pendingProps, p_(X, ne);
                  break;
                case j:
                  var Le = t.pendingProps;
                  v_(X, Le);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function mC(e, t) {
      t.flags = t.flags & ~Ha | gn, Lg(e, t);
    }
    function yC(e, t) {
      switch (e.tag) {
        case U: {
          var a = e.type;
          e.pendingProps;
          var i = Yw(t, a);
          return i !== null ? (e.stateNode = i, Ir = e, Ai = Kw(i), !0) : !1;
        }
        case j: {
          var o = e.pendingProps, s = Ww(t, o);
          return s !== null ? (e.stateNode = s, Ir = e, Ai = null, !0) : !1;
        }
        case F: {
          var d = Qw(t);
          if (d !== null) {
            var m = {
              dehydrated: d,
              treeContext: D_(),
              retryLane: fa
            };
            e.memoizedState = m;
            var y = PD(d);
            return y.return = e, e.child = y, Ir = e, Ai = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ag(e) {
      return (e.mode & xt) !== tt && (e.flags & st) === qe;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ug(e) {
      if (uu) {
        var t = Ai;
        if (!t) {
          Ag(e) && (Lg(Ir, e), zg()), mC(Ir, e), uu = !1, Ir = e;
          return;
        }
        var a = t;
        if (!yC(e, t)) {
          Ag(e) && (Lg(Ir, e), zg()), t = Ap(a);
          var i = Ir;
          if (!t || !yC(e, t)) {
            mC(Ir, e), uu = !1, Ir = e;
            return;
          }
          hC(i, a);
        }
      }
    }
    function z_(e, t, a) {
      var i = e.stateNode, o = !ic, s = Jw(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function U_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = e_(t, a, e);
      if (i) {
        var o = Ir;
        if (o !== null)
          switch (o.tag) {
            case k: {
              var s = o.stateNode.containerInfo, d = (o.mode & xt) !== tt;
              u_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case U: {
              var m = o.type, y = o.memoizedProps, b = o.stateNode, T = (o.mode & xt) !== tt;
              o_(
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
    function j_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      t_(a, e);
    }
    function P_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return n_(a);
    }
    function gC(e) {
      for (var t = e.return; t !== null && t.tag !== U && t.tag !== k && t.tag !== F; )
        t = t.return;
      Ir = t;
    }
    function fm(e) {
      if (e !== Ir)
        return !1;
      if (!uu)
        return gC(e), uu = !0, !1;
      if (e.tag !== k && (e.tag !== U || i_(e.type) && !yg(e.type, e.memoizedProps))) {
        var t = Ai;
        if (t)
          if (Ag(e))
            SC(e), zg();
          else
            for (; t; )
              hC(e, t), t = Ap(t);
      }
      return gC(e), e.tag === F ? Ai = P_(e) : Ai = Ir ? Ap(e.stateNode) : null, !0;
    }
    function F_() {
      return uu && Ai !== null;
    }
    function SC(e) {
      for (var t = Ai; t; )
        vC(e, t), t = Ap(t);
    }
    function Hf() {
      Ir = null, Ai = null, uu = !1, ic = !1;
    }
    function EC() {
      Ql !== null && (vR(Ql), Ql = null);
    }
    function Br() {
      return uu;
    }
    function jg(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    var V_ = p.ReactCurrentBatchConfig, H_ = null;
    function I_() {
      return V_.transition;
    }
    var ou = {
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
      var B_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Nn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], Bp = [], oc = /* @__PURE__ */ new Set();
      ou.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillUpdate == "function" && Bp.push(e));
      }, ou.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(P) {
          e.add(ft(P) || "Component"), oc.add(P.type);
        }), Pp = []);
        var t = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(P) {
          t.add(ft(P) || "Component"), oc.add(P.type);
        }), Fp = []);
        var a = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(P) {
          a.add(ft(P) || "Component"), oc.add(P.type);
        }), Vp = []);
        var i = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(P) {
          i.add(ft(P) || "Component"), oc.add(P.type);
        }), Hp = []);
        var o = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(P) {
          o.add(ft(P) || "Component"), oc.add(P.type);
        }), Ip = []);
        var s = /* @__PURE__ */ new Set();
        if (Bp.length > 0 && (Bp.forEach(function(P) {
          s.add(ft(P) || "Component"), oc.add(P.type);
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
          var H = uc(o);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, H);
        }
      };
      var dm = /* @__PURE__ */ new Map(), CC = /* @__PURE__ */ new Set();
      ou.recordLegacyContextWarning = function(e, t) {
        var a = B_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!CC.has(e.type)) {
          var i = dm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], dm.set(a, i)), i.push(e));
        }
      }, ou.flushLegacyContextWarning = function() {
        dm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ft(s) || "Component"), CC.add(s.type);
            });
            var o = uc(i);
            try {
              qt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              An();
            }
          }
        });
      }, ou.discardPendingWarnings = function() {
        Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], Bp = [], dm = /* @__PURE__ */ new Map();
      };
    }
    function lu(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), i = e.defaultProps;
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
    function bC() {
      vm = !0;
    }
    function RC() {
      vm = !1;
    }
    function TC(e, t, a) {
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
    function $_(e, t, a) {
      Y_(e, t, a);
    }
    function Y_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === _) {
                var m = Kn(a), y = Yo(pn, m);
                y.tag = ym;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, H = T.pending;
                  H === null ? y.next = y : (y.next = H.next, H.next = y), T.pending = y;
                }
              }
              i.lanes = St(i.lanes, a);
              var P = i.alternate;
              P !== null && (P.lanes = St(P.lanes, a)), Ig(i.return, a, e), s.lanes = St(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === le)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Ge) {
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
    function W_() {
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
    function wC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, mm(e, i);
    }
    function Q_(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function G_(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, mm(e, i);
    }
    function Xa(e, t) {
      return mm(e, t);
    }
    var q_ = mm;
    function mm(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (gn | Ha)) !== qe && _R(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = St(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (o.flags & (gn | Ha)) !== qe && _R(e), i = o, o = o.return;
      if (i.tag === k) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var _C = 0, xC = 1, ym = 2, $g = 3, gm = !1, Yg, Sm;
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
    function OC(e, t) {
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
        tag: _C,
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
      if (Sm === o && !Yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Yg = !0), qO()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, q_(e, a);
      } else
        return G_(e, o, t, a);
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
    function K_(e, t, a, i, o, s) {
      switch (a.tag) {
        case xC: {
          var d = a.payload;
          if (typeof d == "function") {
            bC();
            var m = d.call(s, i, o);
            {
              if (e.mode & Nn) {
                qn(!0);
                try {
                  d.call(s, i, o);
                } finally {
                  qn(!1);
                }
              }
              RC();
            }
            return m;
          }
          return d;
        }
        case $g:
          e.flags = e.flags & ~ir | st;
        case _C: {
          var y = a.payload, b;
          if (typeof y == "function") {
            bC(), b = y.call(s, i, o);
            {
              if (e.mode & Nn) {
                qn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  qn(!1);
                }
              }
              RC();
            }
          } else
            b = y;
          return b == null ? i : wt({}, i, b);
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
          var H = T.updateQueue, P = H.lastBaseUpdate;
          P !== d && (P === null ? H.firstBaseUpdate = b : P.next = b, H.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var q = o.baseState, X = ae, ne = null, Le = null, Je = null, Ye = s;
        do {
          var At = Ye.lane, Dt = Ye.eventTime;
          if (Do(i, At)) {
            if (Je !== null) {
              var re = {
                eventTime: Dt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                tag: Ye.tag,
                payload: Ye.payload,
                callback: Ye.callback,
                next: null
              };
              Je = Je.next = re;
            }
            q = K_(e, o, Ye, q, t, a);
            var Q = Ye.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ye.lane !== Mt) {
              e.flags |= _i;
              var ve = o.effects;
              ve === null ? o.effects = [Ye] : ve.push(Ye);
            }
          } else {
            var W = {
              eventTime: Dt,
              lane: At,
              tag: Ye.tag,
              payload: Ye.payload,
              callback: Ye.callback,
              next: null
            };
            Je === null ? (Le = Je = W, ne = q) : Je = Je.next = W, X = St(X, At);
          }
          if (Ye = Ye.next, Ye === null) {
            if (m = o.shared.pending, m === null)
              break;
            var Ae = m, Oe = Ae.next;
            Ae.next = null, Ye = Oe, o.lastBaseUpdate = Ae, o.shared.pending = null;
          }
        } while (!0);
        Je === null && (ne = q), o.baseState = ne, o.firstBaseUpdate = Le, o.lastBaseUpdate = Je;
        var lt = o.shared.interleaved;
        if (lt !== null) {
          var ht = lt;
          do
            X = St(X, ht.lane), ht = ht.next;
          while (ht !== lt);
        } else
          s === null && (o.shared.lanes = ae);
        hv(X), e.lanes = X, e.memoizedState = q;
      }
      Sm = null;
    }
    function X_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function DC() {
      gm = !1;
    }
    function bm() {
      return gm;
    }
    function kC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], d = s.callback;
          d !== null && (s.callback = null, X_(d, a));
        }
    }
    var Gg = {}, NC = new c.Component().refs, qg, Kg, Xg, Zg, Jg, MC, Rm, eS, tS, nS;
    {
      qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set();
      var LC = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          LC.has(a) || (LC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, MC = function(e, t) {
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
        if (e.mode & Nn) {
          qn(!0);
          try {
            s = a(i, o);
          } finally {
            qn(!1);
          }
        }
        MC(t, s);
      }
      var d = s == null ? o : wt({}, o, s);
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
        m !== null && (Rr(m, i, s, o), Em(m, i, s)), Hu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Fa(e), o = Ma(), s = ns(i), d = Yo(o, s);
        d.tag = xC, d.payload = t, a != null && (Rm(a, "replaceState"), d.callback = a);
        var m = Gl(i, d, s);
        m !== null && (Rr(m, i, s, o), Em(m, i, s)), Hu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Fa(e), i = Ma(), o = ns(a), s = Yo(i, o);
        s.tag = ym, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var d = Gl(a, s, o);
        d !== null && (Rr(d, a, o, i), Em(d, a, o)), qd(a, o);
      }
    };
    function AC(e, t, a, i, o, s, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var y = m.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & Nn) {
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
    function Z_(e, t, a) {
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
    function zC(e, t) {
      t.updater = aS, e.stateNode = t, gl(t, e), t._reactInternalInstance = Gg;
    }
    function UC(e, t, a) {
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
      if (e.mode & Nn) {
        qn(!0);
        try {
          T = new t(a, s);
        } finally {
          qn(!1);
        }
      }
      var H = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      zC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && H === null) {
          var P = Pt(t) || "Component";
          Kg.has(P) || (Kg.add(P), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, T.state === null ? "null" : "undefined", P));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var q = null, X = null, ne = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ne = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (ne = "UNSAFE_componentWillUpdate"), q !== null || X !== null || ne !== null) {
            var Le = Pt(t) || "Component", Je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(Le) || (Zg.add(Le), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Le, Je, q !== null ? `
  ` + q : "", X !== null ? `
  ` + X : "", ne !== null ? `
  ` + ne : ""));
          }
        }
      }
      return i && uC(e, o, s), T;
    }
    function J_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ft(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function jC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = ft(e) || "Component";
          qg.has(s) || (qg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Z_(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = NC, Wg(e);
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
        e.mode & Nn && ou.recordLegacyContextWarning(e, o), ou.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (rS(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (J_(e, o), Cm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var b = gt;
        b |= ua, (e.mode & $a) !== tt && (b |= oa), e.flags |= b;
      }
    }
    function ex(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var d = o.context, m = t.contextType, y = pi;
      if (typeof m == "object" && m !== null)
        y = cr(m);
      else {
        var b = jf(e, t, !0);
        y = Pf(e, b);
      }
      var T = t.getDerivedStateFromProps, H = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !H && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || d !== y) && jC(e, o, a, y), DC();
      var P = e.memoizedState, q = o.state = P;
      if (Cm(e, a, o, i), q = e.memoizedState, s === a && P === q && !am() && !bm()) {
        if (typeof o.componentDidMount == "function") {
          var X = gt;
          X |= ua, (e.mode & $a) !== tt && (X |= oa), e.flags |= X;
        }
        return !1;
      }
      typeof T == "function" && (rS(e, t, T, a), q = e.memoizedState);
      var ne = bm() || AC(e, t, s, a, P, q, y);
      if (ne) {
        if (!H && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Le = gt;
          Le |= ua, (e.mode & $a) !== tt && (Le |= oa), e.flags |= Le;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Je = gt;
          Je |= ua, (e.mode & $a) !== tt && (Je |= oa), e.flags |= Je;
        }
        e.memoizedProps = a, e.memoizedState = q;
      }
      return o.props = a, o.state = q, o.context = y, ne;
    }
    function tx(e, t, a, i, o) {
      var s = t.stateNode;
      OC(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : lu(t.type, d);
      s.props = m;
      var y = t.pendingProps, b = s.context, T = a.contextType, H = pi;
      if (typeof T == "object" && T !== null)
        H = cr(T);
      else {
        var P = jf(t, a, !0);
        H = Pf(t, P);
      }
      var q = a.getDerivedStateFromProps, X = typeof q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || b !== H) && jC(t, s, i, H), DC();
      var ne = t.memoizedState, Le = s.state = ne;
      if (Cm(t, i, s, o), Le = t.memoizedState, d === y && ne === Le && !am() && !bm() && !He)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Va), !1;
      typeof q == "function" && (rS(t, a, q, i), Le = t.memoizedState);
      var Je = bm() || AC(t, a, m, i, ne, Le, H) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      He;
      return Je ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Le, H), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Le, H)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Va)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Va), t.memoizedProps = i, t.memoizedState = Le), s.props = i, s.state = Le, s.context = H, Je;
    }
    var uS, oS, lS, sS, cS, PC = function(e, t) {
    };
    uS = !1, oS = !1, lS = {}, sS = {}, cS = {}, PC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ft(t) || "Component";
        sS[a] || (sS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function $p(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Nn || Xe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = ft(e) || "Component";
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
          var T = function(H) {
            var P = y.refs;
            P === NC && (P = y.refs = {}), H === null ? delete P[b] : P[b] = H;
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
        var t = ft(e) || "Component";
        if (cS[t])
          return;
        cS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function FC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function VC(e) {
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
          var Ae = ve.index;
          return Ae < re ? (W.flags |= gn, re) : Ae;
        } else
          return W.flags |= gn, re;
      }
      function d(W) {
        return e && W.alternate === null && (W.flags |= gn), W;
      }
      function m(W, re, Q, ve) {
        if (re === null || re.tag !== j) {
          var Ae = jE(Q, W.mode, ve);
          return Ae.return = W, Ae;
        } else {
          var Oe = o(re, Q);
          return Oe.return = W, Oe;
        }
      }
      function y(W, re, Q, ve) {
        var Ae = Q.type;
        if (Ae === Ra)
          return T(W, re, Q.props.children, ve, Q.key);
        if (re !== null && (re.elementType === Ae || // Keep this check inline so it only runs on the false path:
        kR(re, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === Ze && FC(Ae) === re.type)) {
          var Oe = o(re, Q.props);
          return Oe.ref = $p(W, re, Q), Oe.return = W, Oe._debugSource = Q._source, Oe._debugOwner = Q._owner, Oe;
        }
        var lt = UE(Q, W.mode, ve);
        return lt.ref = $p(W, re, Q), lt.return = W, lt;
      }
      function b(W, re, Q, ve) {
        if (re === null || re.tag !== L || re.stateNode.containerInfo !== Q.containerInfo || re.stateNode.implementation !== Q.implementation) {
          var Ae = PE(Q, W.mode, ve);
          return Ae.return = W, Ae;
        } else {
          var Oe = o(re, Q.children || []);
          return Oe.return = W, Oe;
        }
      }
      function T(W, re, Q, ve, Ae) {
        if (re === null || re.tag !== $) {
          var Oe = as(Q, W.mode, ve, Ae);
          return Oe.return = W, Oe;
        } else {
          var lt = o(re, Q);
          return lt.return = W, lt;
        }
      }
      function H(W, re, Q) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var ve = jE("" + re, W.mode, Q);
          return ve.return = W, ve;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case Si: {
              var Ae = UE(re, W.mode, Q);
              return Ae.ref = $p(W, null, re), Ae.return = W, Ae;
            }
            case jr: {
              var Oe = PE(re, W.mode, Q);
              return Oe.return = W, Oe;
            }
            case Ze: {
              var lt = re._payload, ht = re._init;
              return H(W, ht(lt), Q);
            }
          }
          if (kt(re) || ai(re)) {
            var rn = as(re, W.mode, Q, null);
            return rn.return = W, rn;
          }
          Tm(W, re);
        }
        return typeof re == "function" && wm(W), null;
      }
      function P(W, re, Q, ve) {
        var Ae = re !== null ? re.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return Ae !== null ? null : m(W, re, "" + Q, ve);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Si:
              return Q.key === Ae ? y(W, re, Q, ve) : null;
            case jr:
              return Q.key === Ae ? b(W, re, Q, ve) : null;
            case Ze: {
              var Oe = Q._payload, lt = Q._init;
              return P(W, re, lt(Oe), ve);
            }
          }
          if (kt(Q) || ai(Q))
            return Ae !== null ? null : T(W, re, Q, ve, null);
          Tm(W, Q);
        }
        return typeof Q == "function" && wm(W), null;
      }
      function q(W, re, Q, ve, Ae) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var Oe = W.get(Q) || null;
          return m(re, Oe, "" + ve, Ae);
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case Si: {
              var lt = W.get(ve.key === null ? Q : ve.key) || null;
              return y(re, lt, ve, Ae);
            }
            case jr: {
              var ht = W.get(ve.key === null ? Q : ve.key) || null;
              return b(re, ht, ve, Ae);
            }
            case Ze:
              var rn = ve._payload, It = ve._init;
              return q(W, re, Q, It(rn), Ae);
          }
          if (kt(ve) || ai(ve)) {
            var er = W.get(Q) || null;
            return T(re, er, ve, Ae, null);
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
              PC(W, Q);
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
            case Ze:
              var Ae = W._payload, Oe = W._init;
              X(Oe(Ae), re, Q);
              break;
          }
        }
        return re;
      }
      function ne(W, re, Q, ve) {
        for (var Ae = null, Oe = 0; Oe < Q.length; Oe++) {
          var lt = Q[Oe];
          Ae = X(lt, Ae, W);
        }
        for (var ht = null, rn = null, It = re, er = 0, Bt = 0, Gn = null; It !== null && Bt < Q.length; Bt++) {
          It.index > Bt ? (Gn = It, It = null) : Gn = It.sibling;
          var ma = P(W, It, Q[Bt], ve);
          if (ma === null) {
            It === null && (It = Gn);
            break;
          }
          e && It && ma.alternate === null && t(W, It), er = s(ma, er, Bt), rn === null ? ht = ma : rn.sibling = ma, rn = ma, It = Gn;
        }
        if (Bt === Q.length) {
          if (a(W, It), Br()) {
            var Kr = Bt;
            rc(W, Kr);
          }
          return ht;
        }
        if (It === null) {
          for (; Bt < Q.length; Bt++) {
            var hi = H(W, Q[Bt], ve);
            hi !== null && (er = s(hi, er, Bt), rn === null ? ht = hi : rn.sibling = hi, rn = hi);
          }
          if (Br()) {
            var La = Bt;
            rc(W, La);
          }
          return ht;
        }
        for (var Aa = i(W, It); Bt < Q.length; Bt++) {
          var ya = q(Aa, W, Bt, Q[Bt], ve);
          ya !== null && (e && ya.alternate !== null && Aa.delete(ya.key === null ? Bt : ya.key), er = s(ya, er, Bt), rn === null ? ht = ya : rn.sibling = ya, rn = ya);
        }
        if (e && Aa.forEach(function(ud) {
          return t(W, ud);
        }), Br()) {
          var Xo = Bt;
          rc(W, Xo);
        }
        return ht;
      }
      function Le(W, re, Q, ve) {
        var Ae = ai(Q);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (oS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), oS = !0), Q.entries === Ae && (uS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var Oe = Ae.call(Q);
          if (Oe)
            for (var lt = null, ht = Oe.next(); !ht.done; ht = Oe.next()) {
              var rn = ht.value;
              lt = X(rn, lt, W);
            }
        }
        var It = Ae.call(Q);
        if (It == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Bt = null, Gn = re, ma = 0, Kr = 0, hi = null, La = It.next(); Gn !== null && !La.done; Kr++, La = It.next()) {
          Gn.index > Kr ? (hi = Gn, Gn = null) : hi = Gn.sibling;
          var Aa = P(W, Gn, La.value, ve);
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
            var Xo = H(W, La.value, ve);
            Xo !== null && (ma = s(Xo, ma, Kr), Bt === null ? er = Xo : Bt.sibling = Xo, Bt = Xo);
          }
          if (Br()) {
            var ud = Kr;
            rc(W, ud);
          }
          return er;
        }
        for (var Ev = i(W, Gn); !La.done; Kr++, La = It.next()) {
          var io = q(Ev, W, Kr, La.value, ve);
          io !== null && (e && io.alternate !== null && Ev.delete(io.key === null ? Kr : io.key), ma = s(io, ma, Kr), Bt === null ? er = io : Bt.sibling = io, Bt = io);
        }
        if (e && Ev.forEach(function(hk) {
          return t(W, hk);
        }), Br()) {
          var vk = Kr;
          rc(W, vk);
        }
        return er;
      }
      function Je(W, re, Q, ve) {
        if (re !== null && re.tag === j) {
          a(W, re.sibling);
          var Ae = o(re, Q);
          return Ae.return = W, Ae;
        }
        a(W, re);
        var Oe = jE(Q, W.mode, ve);
        return Oe.return = W, Oe;
      }
      function Ye(W, re, Q, ve) {
        for (var Ae = Q.key, Oe = re; Oe !== null; ) {
          if (Oe.key === Ae) {
            var lt = Q.type;
            if (lt === Ra) {
              if (Oe.tag === $) {
                a(W, Oe.sibling);
                var ht = o(Oe, Q.props.children);
                return ht.return = W, ht._debugSource = Q._source, ht._debugOwner = Q._owner, ht;
              }
            } else if (Oe.elementType === lt || // Keep this check inline so it only runs on the false path:
            kR(Oe, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof lt == "object" && lt !== null && lt.$$typeof === Ze && FC(lt) === Oe.type) {
              a(W, Oe.sibling);
              var rn = o(Oe, Q.props);
              return rn.ref = $p(W, Oe, Q), rn.return = W, rn._debugSource = Q._source, rn._debugOwner = Q._owner, rn;
            }
            a(W, Oe);
            break;
          } else
            t(W, Oe);
          Oe = Oe.sibling;
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
        for (var Ae = Q.key, Oe = re; Oe !== null; ) {
          if (Oe.key === Ae)
            if (Oe.tag === L && Oe.stateNode.containerInfo === Q.containerInfo && Oe.stateNode.implementation === Q.implementation) {
              a(W, Oe.sibling);
              var lt = o(Oe, Q.children || []);
              return lt.return = W, lt;
            } else {
              a(W, Oe);
              break;
            }
          else
            t(W, Oe);
          Oe = Oe.sibling;
        }
        var ht = PE(Q, W.mode, ve);
        return ht.return = W, ht;
      }
      function Dt(W, re, Q, ve) {
        var Ae = typeof Q == "object" && Q !== null && Q.type === Ra && Q.key === null;
        if (Ae && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Si:
              return d(Ye(W, re, Q, ve));
            case jr:
              return d(At(W, re, Q, ve));
            case Ze:
              var Oe = Q._payload, lt = Q._init;
              return Dt(W, re, lt(Oe), ve);
          }
          if (kt(Q))
            return ne(W, re, Q, ve);
          if (ai(Q))
            return Le(W, re, Q, ve);
          Tm(W, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? d(Je(W, re, "" + Q, ve)) : (typeof Q == "function" && wm(W), a(W, re));
      }
      return Dt;
    }
    var $f = VC(!0), HC = VC(!1);
    function nx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function rx(e, t) {
      for (var a = e.child; a !== null; )
        MD(a, t), a = a.sibling;
    }
    var Yp = {}, ql = $l(Yp), Wp = $l(Yp), _m = $l(Yp);
    function xm(e) {
      if (e === Yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function IC() {
      var e = xm(_m.current);
      return e;
    }
    function fS(e, t) {
      va(_m, t, e), va(Wp, e, e), va(ql, Yp, e);
      var a = yw(t);
      pa(ql, e), va(ql, a, e);
    }
    function Yf(e) {
      pa(ql, e), pa(Wp, e), pa(_m, e);
    }
    function dS() {
      var e = xm(ql.current);
      return e;
    }
    function BC(e) {
      xm(_m.current);
      var t = xm(ql.current), a = gw(t, e.type);
      t !== a && (va(Wp, e, e), va(ql, a, e));
    }
    function pS(e) {
      Wp.current === e && (pa(ql, e), pa(Wp, e));
    }
    var ax = 0, $C = 1, YC = 1, Qp = 2, su = $l(ax);
    function vS(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & $C;
    }
    function hS(e, t) {
      return e & $C | t;
    }
    function ix(e, t) {
      return e | t;
    }
    function Kl(e, t) {
      va(su, t, e);
    }
    function Qf(e) {
      pa(su, e);
    }
    function ux(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === F) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || tC(i) || Cg(i))
              return t;
          }
        } else if (t.tag === ze && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & st) !== qe;
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
    ), Zu = (
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
    function ox(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ne = p.ReactCurrentDispatcher, Gp = p.ReactCurrentBatchConfig, gS, Gf;
    gS = /* @__PURE__ */ new Set();
    var sc = ae, nn = null, gr = null, Sr = null, Dm = !1, qp = !1, Kp = 0, lx = 0, sx = 25, ie = null, zi = null, Xl = -1, SS = !1;
    function Xt() {
      {
        var e = ie;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function be() {
      {
        var e = ie;
        zi !== null && (Xl++, zi[Xl] !== e && cx(e));
      }
    }
    function qf(e) {
      e != null && !kt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function cx(e) {
      {
        var t = ft(nn);
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
        if (!Fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Kf(e, t, a, i, o, s) {
      sc = s, nn = t, zi = e !== null ? e._debugHookTypes : null, Xl = -1, SS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? Ne.current = pb : zi !== null ? Ne.current = db : Ne.current = fb;
      var d = a(i, o);
      if (qp) {
        var m = 0;
        do {
          if (qp = !1, Kp = 0, m >= sx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, SS = !1, gr = null, Sr = null, t.updateQueue = null, Xl = -1, Ne.current = vb, d = a(i, o);
        } while (qp);
      }
      Ne.current = Im, t._debugHookTypes = zi;
      var y = gr !== null && gr.next !== null;
      if (sc = ae, nn = null, gr = null, Sr = null, ie = null, zi = null, Xl = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xt) !== tt && g("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Xf() {
      var e = Kp !== 0;
      return Kp = 0, e;
    }
    function WC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $a) !== tt ? t.flags &= ~(So | oa | wn | gt) : t.flags &= ~(wn | gt), e.lanes = xl(e.lanes, a);
    }
    function QC() {
      if (Ne.current = Im, Dm) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      sc = ae, nn = null, gr = null, Sr = null, zi = null, Xl = -1, ie = null, ub = !1, qp = !1, Kp = 0;
    }
    function Ju() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? nn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Ui() {
      var e;
      if (gr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = nn.memoizedState : a = Sr.next, a !== null)
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
        Sr === null ? nn.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function GC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function CS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bS(e, t, a) {
      var i = Ju(), o;
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
      var d = s.dispatch = vx.bind(null, nn, s);
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
        var T = d.next, H = s.baseState, P = null, q = null, X = null, ne = T;
        do {
          var Le = ne.lane;
          if (Do(sc, Le)) {
            if (X !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                action: ne.action,
                hasEagerState: ne.hasEagerState,
                eagerState: ne.eagerState,
                next: null
              };
              X = X.next = Ye;
            }
            if (ne.hasEagerState)
              H = ne.eagerState;
            else {
              var At = ne.action;
              H = e(H, At);
            }
          } else {
            var Je = {
              lane: Le,
              action: ne.action,
              hasEagerState: ne.hasEagerState,
              eagerState: ne.eagerState,
              next: null
            };
            X === null ? (q = X = Je, P = H) : X = X.next = Je, nn.lanes = St(nn.lanes, Le), hv(Le);
          }
          ne = ne.next;
        } while (ne !== null && ne !== T);
        X === null ? P = H : X.next = q, Fe(H, i.memoizedState) || rv(), i.memoizedState = H, i.baseState = P, i.baseQueue = X, o.lastRenderedState = H;
      }
      var Dt = o.interleaved;
      if (Dt !== null) {
        var W = Dt;
        do {
          var re = W.lane;
          nn.lanes = St(nn.lanes, re), hv(re), W = W.next;
        } while (W !== Dt);
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
        Fe(m, i.memoizedState) || rv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
      }
      return [m, s];
    }
    function BM(e, t, a) {
    }
    function $M(e, t, a) {
    }
    function wS(e, t, a) {
      var i = nn, o = Ju(), s, d = Br();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Gf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var m = t();
          Fe(s, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var y = uy();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(y, sc) || qC(i, t, s);
      }
      o.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return o.queue = b, Am(XC.bind(null, i, b, e), [e]), i.flags |= wn, Xp(mr | $r, KC.bind(null, i, b, s, t), void 0, null), s;
    }
    function km(e, t, a) {
      var i = nn, o = Ui(), s = t();
      if (!Gf) {
        var d = t();
        Fe(s, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var m = o.memoizedState, y = !Fe(m, s);
      y && (o.memoizedState = s, rv());
      var b = o.queue;
      if (Jp(XC.bind(null, i, b, e), [e]), b.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= wn, Xp(mr | $r, KC.bind(null, i, b, s, t), void 0, null);
        var T = uy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(T, sc) || qC(i, t, s);
      }
      return s;
    }
    function qC(e, t, a) {
      e.flags |= Ns;
      var i = {
        getSnapshot: t,
        value: a
      }, o = nn.updateQueue;
      if (o === null)
        o = GC(), nn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function KC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ZC(t) && JC(e);
    }
    function XC(e, t, a) {
      var i = function() {
        ZC(t) && JC(e);
      };
      return a(i);
    }
    function ZC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Fe(a, i);
      } catch {
        return !0;
      }
    }
    function JC(e) {
      var t = Xa(e, ut);
      t !== null && Rr(t, e, ut, pn);
    }
    function Nm(e) {
      var t = Ju();
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
      var i = a.dispatch = hx.bind(null, nn, a);
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
      }, s = nn.updateQueue;
      if (s === null)
        s = GC(), nn.updateQueue = s, s.lastEffect = o.next = o;
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
      var t = Ju();
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
      var o = Ju(), s = i === void 0 ? null : i;
      nn.flags |= e, o.memoizedState = Xp(mr | t, a, void 0, s);
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
      nn.flags |= e, o.memoizedState = Xp(mr | t, a, d, s);
    }
    function Am(e, t) {
      return (nn.mode & $a) !== tt ? Zp(So | wn | zu, $r, e, t) : Zp(wn | zu, $r, e, t);
    }
    function Jp(e, t) {
      return Lm(wn, $r, e, t);
    }
    function DS(e, t) {
      return Zp(gt, Zu, e, t);
    }
    function zm(e, t) {
      return Lm(gt, Zu, e, t);
    }
    function kS(e, t) {
      var a = gt;
      return a |= ua, (nn.mode & $a) !== tt && (a |= oa), Zp(a, yr, e, t);
    }
    function Um(e, t) {
      return Lm(gt, yr, e, t);
    }
    function eb(e, t) {
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
      return o |= ua, (nn.mode & $a) !== tt && (o |= oa), Zp(o, yr, eb.bind(null, t, e), i);
    }
    function jm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Lm(gt, yr, eb.bind(null, t, e), i);
    }
    function fx(e, t) {
    }
    var Pm = fx;
    function MS(e, t) {
      var a = Ju(), i = t === void 0 ? null : t;
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
      var a = Ju(), i = t === void 0 ? null : t, o = e();
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
      var t = Ju();
      return t.memoizedState = e, e;
    }
    function tb(e) {
      var t = Ui(), a = gr, i = a.memoizedState;
      return rb(t, i, e);
    }
    function nb(e) {
      var t = Ui();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return rb(t, a, e);
    }
    function rb(e, t, a) {
      var i = !Vy(sc);
      if (i) {
        if (!Fe(a, t)) {
          var o = ep();
          nn.lanes = St(nn.lanes, o), hv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, rv()), e.memoizedState = a, a;
    }
    function dx(e, t, a) {
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
      var e = Nm(!1), t = e[0], a = e[1], i = dx.bind(null, a), o = Ju();
      return o.memoizedState = i, [t, i];
    }
    function ab() {
      var e = _S(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function ib() {
      var e = xS(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var ub = !1;
    function px() {
      return ub;
    }
    function US() {
      var e = Ju(), t = uy(), a = t.identifierPrefix, i;
      if (Br()) {
        var o = x_();
        i = ":" + a + "R" + o;
        var s = Kp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = lx++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Hm() {
      var e = Ui(), t = e.memoizedState;
      return t;
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
      if (ob(e))
        lb(t, o);
      else {
        var s = wC(e, t, o, i);
        if (s !== null) {
          var d = Ma();
          Rr(s, e, i, d), sb(s, t, i);
        }
      }
      cb(e, i);
    }
    function hx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ns(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ob(e))
        lb(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var m;
            m = Ne.current, Ne.current = cu;
            try {
              var y = t.lastRenderedState, b = d(y, a);
              if (o.hasEagerState = !0, o.eagerState = b, Fe(b, y)) {
                Q_(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Ne.current = m;
            }
          }
        }
        var T = wC(e, t, o, i);
        if (T !== null) {
          var H = Ma();
          Rr(T, e, i, H), sb(T, t, i);
        }
      }
      cb(e, i);
    }
    function ob(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function lb(e, t) {
      qp = Dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function sb(e, t, a) {
      if (Jd(a)) {
        var i = t.lanes;
        i = tp(i, e.pendingLanes);
        var o = St(i, a);
        t.lanes = o, Ol(e, o);
      }
    }
    function cb(e, t, a) {
      Hu(e, t);
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
    }, fb = null, db = null, pb = null, vb = null, eo = null, cu = null, Bm = null;
    {
      var jS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, dt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      fb = {
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
          var a = Ne.current;
          Ne.current = eo;
          try {
            return LS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Xt();
          var i = Ne.current;
          Ne.current = eo;
          try {
            return bS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Xt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", Xt();
          var t = Ne.current;
          Ne.current = eo;
          try {
            return Nm(e);
          } finally {
            Ne.current = t;
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
      }, db = {
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
          var a = Ne.current;
          Ne.current = eo;
          try {
            return LS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Ne.current;
          Ne.current = eo;
          try {
            return bS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), OS(e);
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Ne.current;
          Ne.current = eo;
          try {
            return Nm(e);
          } finally {
            Ne.current = t;
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
      }, pb = {
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
          var a = Ne.current;
          Ne.current = cu;
          try {
            return Vm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Ne.current;
          Ne.current = cu;
          try {
            return RS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Mm();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Ne.current;
          Ne.current = cu;
          try {
            return _S(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), tb(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), ab();
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
      }, vb = {
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
          var a = Ne.current;
          Ne.current = Bm;
          try {
            return Vm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Ne.current;
          Ne.current = Bm;
          try {
            return TS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Mm();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Ne.current;
          Ne.current = Bm;
          try {
            return xS(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), nb(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), ib();
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
      }, eo = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", dt(), Xt(), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", dt(), Xt(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", dt(), Xt(), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", dt(), Xt(), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", dt(), Xt(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", dt(), Xt(), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", dt(), Xt();
          var a = Ne.current;
          Ne.current = eo;
          try {
            return LS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", dt(), Xt();
          var i = Ne.current;
          Ne.current = eo;
          try {
            return bS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", dt(), Xt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", dt(), Xt();
          var t = Ne.current;
          Ne.current = eo;
          try {
            return Nm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", dt(), Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", dt(), Xt(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", dt(), Xt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", dt(), Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", dt(), Xt(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", dt(), Xt(), US();
        },
        unstable_isNewReconciler: he
      }, cu = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", dt(), be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", dt(), be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", dt(), be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", dt(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", dt(), be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", dt(), be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", dt(), be();
          var a = Ne.current;
          Ne.current = cu;
          try {
            return Vm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", dt(), be();
          var i = Ne.current;
          Ne.current = cu;
          try {
            return RS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", dt(), be(), Mm();
        },
        useState: function(e) {
          ie = "useState", dt(), be();
          var t = Ne.current;
          Ne.current = cu;
          try {
            return _S(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", dt(), be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", dt(), be(), tb(e);
        },
        useTransition: function() {
          return ie = "useTransition", dt(), be(), ab();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", dt(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", dt(), be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", dt(), be(), Hm();
        },
        unstable_isNewReconciler: he
      }, Bm = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", dt(), be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", dt(), be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", dt(), be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", dt(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", dt(), be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", dt(), be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", dt(), be();
          var a = Ne.current;
          Ne.current = cu;
          try {
            return Vm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", dt(), be();
          var i = Ne.current;
          Ne.current = cu;
          try {
            return TS(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", dt(), be(), Mm();
        },
        useState: function(e) {
          ie = "useState", dt(), be();
          var t = Ne.current;
          Ne.current = cu;
          try {
            return xS(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", dt(), be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", dt(), be(), nb(e);
        },
        useTransition: function() {
          return ie = "useTransition", dt(), be(), ib();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", dt(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", dt(), be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", dt(), be(), Hm();
        },
        unstable_isNewReconciler: he
      };
    }
    var Zl = v.unstable_now, hb = 0, $m = -1, ev = -1, Ym = -1, PS = !1, Wm = !1;
    function mb() {
      return PS;
    }
    function mx() {
      Wm = !0;
    }
    function yx() {
      PS = !1, Wm = !1;
    }
    function gx() {
      PS = Wm, Wm = !1;
    }
    function yb() {
      return hb;
    }
    function gb() {
      hb = Zl();
    }
    function FS(e) {
      ev = Zl(), e.actualStartTime < 0 && (e.actualStartTime = Zl());
    }
    function Sb(e) {
      ev = -1;
    }
    function Qm(e, t) {
      if (ev >= 0) {
        var a = Zl() - ev;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ev = -1;
      }
    }
    function to(e) {
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
    function no() {
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
    function Sx(e, t) {
      return !0;
    }
    function $S(e, t) {
      try {
        var a = Sx(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === _)
            return;
          console.error(i);
        }
        var m = o ? ft(o) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === k)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = ft(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var H = y + `
` + d + `

` + ("" + b);
        console.error(H);
      } catch (P) {
        setTimeout(function() {
          throw P;
        });
      }
    }
    var Ex = typeof WeakMap == "function" ? WeakMap : Map;
    function Eb(e, t, a) {
      var i = Yo(pn, a);
      i.tag = $g, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        dD(o), $S(e, t);
      }, i;
    }
    function YS(e, t, a) {
      var i = Yo(pn, a);
      i.tag = $g;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          NR(e), $S(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        NR(e), $S(e, t), typeof o != "function" && cD(this);
        var y = t.value, b = t.stack;
        this.componentDidCatch(y, {
          componentStack: b !== null ? b : ""
        }), typeof o != "function" && (da(e.lanes, ut) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ft(e) || "Unknown"));
      }), i;
    }
    function Cb(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Ex(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = pD.bind(null, e, t, a);
        vr && mv(e, a), t.then(s, s);
      }
    }
    function Cx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function bx(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === tt && (a === M || a === ee || a === ge)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function bb(e) {
      var t = e;
      do {
        if (t.tag === F && ux(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Rb(e, t, a, i, o) {
      if ((e.mode & xt) === tt) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= st, a.flags |= Ms, a.flags &= ~(zc | Ta), a.tag === _) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ke;
            else {
              var d = Yo(pn, ut);
              d.tag = ym, Gl(a, d, ut);
            }
          }
          a.lanes = St(a.lanes, ut);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = o, e;
    }
    function Rx(e, t, a, i, o) {
      if (a.flags |= Ta, vr && mv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        bx(a), Br() && a.mode & xt && pC();
        var d = bb(t);
        if (d !== null) {
          d.flags &= ~zn, Rb(d, t, a, e, o), d.mode & xt && Cb(e, s, o), Cx(d, e, s);
          return;
        } else {
          if (!_l(o)) {
            Cb(e, s, o), TE();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Br() && a.mode & xt) {
        pC();
        var y = bb(t);
        if (y !== null) {
          (y.flags & ir) === qe && (y.flags |= zn), Rb(y, t, a, e, o), jg(cc(i, a));
          return;
        }
      }
      i = cc(i, a), nD(i);
      var b = t;
      do {
        switch (b.tag) {
          case k: {
            var T = i;
            b.flags |= ir;
            var H = Kn(o);
            b.lanes = St(b.lanes, H);
            var P = Eb(b, T, H);
            Qg(b, P);
            return;
          }
          case _:
            var q = i, X = b.type, ne = b.stateNode;
            if ((b.flags & st) === qe && (typeof X.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && !bR(ne))) {
              b.flags |= ir;
              var Le = Kn(o);
              b.lanes = St(b.lanes, Le);
              var Je = YS(b, q, Le);
              Qg(b, Je);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function Tx() {
      return null;
    }
    var tv = p.ReactCurrentOwner, fu = !1, WS, nv, QS, GS, qS, fc, KS, Gm;
    WS = {}, nv = {}, QS = {}, GS = {}, qS = {}, fc = !1, KS = {}, Gm = {};
    function ka(e, t, a, i) {
      e === null ? t.child = HC(t, null, a, i) : t.child = $f(t, e.child, a, i);
    }
    function wx(e, t, a, i) {
      t.child = $f(t, e.child, null, i), t.child = $f(t, null, a, i);
    }
    function Tb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && iu(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d = a.render, m = t.ref, y, b;
      Bf(t, o), Vu(t);
      {
        if (tv.current = t, ra(!0), y = Kf(e, t, d, i, m, o), b = Xf(), t.mode & Nn) {
          qn(!0);
          try {
            y = Kf(e, t, d, i, m, o), b = Xf();
          } finally {
            qn(!1);
          }
        }
        ra(!1);
      }
      return Eo(), e !== null && !fu ? (WC(e, t, o), Wo(e, t, o)) : (Br() && b && Ng(t), t.flags |= Lu, ka(e, t, y, o), t.child);
    }
    function wb(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (kD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = id(s), t.tag = ge, t.type = d, JS(t, s), _b(e, t, d, i, o);
        }
        {
          var m = s.propTypes;
          m && iu(
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
        T && iu(
          T,
          i,
          // Resolved props
          "prop",
          Pt(b)
        );
      }
      var H = e.child, P = iE(e, o);
      if (!P) {
        var q = H.memoizedProps, X = a.compare;
        if (X = X !== null ? X : Qe, X(q, i) && e.ref === t.ref)
          return Wo(e, t, o);
      }
      t.flags |= Lu;
      var ne = mc(H, i);
      return ne.ref = t.ref, ne.return = t, t.child = ne, ne;
    }
    function _b(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ze) {
          var d = s, m = d._payload, y = d._init;
          try {
            s = y(m);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && iu(
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
          if (fu = !1, t.pendingProps = i = T, iE(e, o))
            (e.flags & Ms) !== qe && (fu = !0);
          else
            return t.lanes = e.lanes, Wo(e, t, o);
      }
      return XS(e, t, a, i, o);
    }
    function xb(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || N)
        if ((t.mode & xt) === tt) {
          var d = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, oy(t, a);
        } else if (da(a, fa)) {
          var H = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = H;
          var P = s !== null ? s.baseLanes : a;
          oy(t, P);
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
    function _x(e, t, a) {
      var i = t.pendingProps;
      return ka(e, t, i, a), t.child;
    }
    function xx(e, t, a) {
      var i = t.pendingProps.children;
      return ka(e, t, i, a), t.child;
    }
    function Ox(e, t, a) {
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
    function Ob(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ia, t.flags |= Pd);
    }
    function XS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && iu(
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
      Bf(t, o), Vu(t);
      {
        if (tv.current = t, ra(!0), y = Kf(e, t, a, i, d, o), b = Xf(), t.mode & Nn) {
          qn(!0);
          try {
            y = Kf(e, t, a, i, d, o), b = Xf();
          } finally {
            qn(!1);
          }
        }
        ra(!1);
      }
      return Eo(), e !== null && !fu ? (WC(e, t, o), Wo(e, t, o)) : (Br() && b && Ng(t), t.flags |= Lu, ka(e, t, y, o), t.child);
    }
    function Db(e, t, a, i, o) {
      {
        switch (YD(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), y = m.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= st, t.flags |= ir;
            var b = new Error("Simulated error coming from DevTools"), T = Kn(o);
            t.lanes = St(t.lanes, T);
            var H = YS(t, cc(b, t), T);
            Qg(t, H);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var P = a.propTypes;
          P && iu(
            P,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var q;
      Xu(a) ? (q = !0, um(t)) : q = !1, Bf(t, o);
      var X = t.stateNode, ne;
      X === null ? (Km(e, t), UC(t, a, i), iS(t, a, i, o), ne = !0) : e === null ? ne = ex(t, a, i, o) : ne = tx(e, t, a, i, o);
      var Le = ZS(e, t, a, ne, q, o);
      {
        var Je = t.stateNode;
        ne && Je.props !== i && (fc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ft(t) || "a component"), fc = !0);
      }
      return Le;
    }
    function ZS(e, t, a, i, o, s) {
      Ob(e, t);
      var d = (t.flags & st) !== qe;
      if (!i && !d)
        return o && sC(t, a, !1), Wo(e, t, s);
      var m = t.stateNode;
      tv.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, Sb();
      else {
        Vu(t);
        {
          if (ra(!0), y = m.render(), t.mode & Nn) {
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
      return t.flags |= Lu, e !== null && d ? wx(e, t, y, s) : ka(e, t, y, s), t.memoizedState = m.state, o && sC(t, a, !0), t.child;
    }
    function kb(e) {
      var t = e.stateNode;
      t.pendingContext ? oC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && oC(e, t.context, !1), fS(e, t.containerInfo);
    }
    function Dx(e, t, a) {
      if (kb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      OC(e, t), Cm(t, i, null, a);
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
        if (b.baseState = y, t.memoizedState = y, t.flags & zn) {
          var T = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Nb(e, t, m, a, T);
        } else if (m !== s) {
          var H = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Nb(e, t, m, a, H);
        } else {
          L_(t);
          var P = HC(t, null, m, a);
          t.child = P;
          for (var q = P; q; )
            q.flags = q.flags & ~gn | Ha, q = q.sibling;
        }
      } else {
        if (Hf(), m === s)
          return Wo(e, t, a);
        ka(e, t, m, a);
      }
      return t.child;
    }
    function Nb(e, t, a, i, o) {
      return Hf(), jg(o), t.flags |= zn, ka(e, t, a, i), t.child;
    }
    function kx(e, t, a) {
      BC(t), e === null && Ug(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = o.children, m = yg(i, o);
      return m ? d = null : s !== null && yg(i, s) && (t.flags |= Kt), Ob(e, t), ka(e, t, d, a), t.child;
    }
    function Nx(e, t) {
      return e === null && Ug(t), null;
    }
    function Mx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s = a, d = s._payload, m = s._init, y = m(d);
      t.type = y;
      var b = t.tag = ND(y), T = lu(y, o), H;
      switch (b) {
        case M:
          return JS(t, y), t.type = y = id(y), H = XS(null, t, y, T, i), H;
        case _:
          return t.type = y = DE(y), H = Db(null, t, y, T, i), H;
        case ee:
          return t.type = y = kE(y), H = Tb(null, t, y, T, i), H;
        case de: {
          if (t.type !== t.elementType) {
            var P = y.propTypes;
            P && iu(
              P,
              T,
              // Resolved for outer only
              "prop",
              Pt(y)
            );
          }
          return H = wb(
            null,
            t,
            y,
            lu(y.type, T),
            // The inner type can have defaults too
            i
          ), H;
        }
      }
      var q = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ze && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function Lx(e, t, a, i, o) {
      Km(e, t), t.tag = _;
      var s;
      return Xu(a) ? (s = !0, um(t)) : s = !1, Bf(t, o), UC(t, a, i), iS(t, a, i, o), ZS(null, t, a, !0, s, o);
    }
    function Ax(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s;
      {
        var d = jf(t, a, !1);
        s = Pf(t, d);
      }
      Bf(t, i);
      var m, y;
      Vu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Pt(a) || "Unknown";
          WS[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), WS[b] = !0);
        }
        t.mode & Nn && ou.recordLegacyContextWarning(t, null), ra(!0), tv.current = t, m = Kf(null, t, a, o, s, i), y = Xf(), ra(!1);
      }
      if (Eo(), t.flags |= Lu, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var T = Pt(a) || "Unknown";
        nv[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), nv[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var H = Pt(a) || "Unknown";
          nv[H] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), nv[H] = !0);
        }
        t.tag = _, t.memoizedState = null, t.updateQueue = null;
        var P = !1;
        return Xu(a) ? (P = !0, um(t)) : P = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Wg(t), zC(t, m), iS(t, a, o, i), ZS(null, t, a, !0, P, i);
      } else {
        if (t.tag = M, t.mode & Nn) {
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
        cachePool: Tx(),
        transitions: null
      };
    }
    function zx(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ux(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return vS(e, Qp);
    }
    function jx(e, t) {
      return xl(e.childLanes, t);
    }
    function Mb(e, t, a) {
      var i = t.pendingProps;
      WD(t) && (t.flags |= st);
      var o = su.current, s = !1, d = (t.flags & st) !== qe;
      if (d || Ux(o, e) ? (s = !0, t.flags &= ~st) : (e === null || e.memoizedState !== null) && (o = ix(o, YC)), o = Wf(o), Kl(t, o), e === null) {
        Ug(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return Ix(t, y);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var H = Px(t, b, T, a), P = t.child;
          return P.memoizedState = tE(a), t.memoizedState = eE, H;
        } else
          return nE(t, b);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var X = q.dehydrated;
          if (X !== null)
            return Bx(e, t, d, i, X, q, a);
        }
        if (s) {
          var ne = i.fallback, Le = i.children, Je = Vx(e, t, Le, ne, a), Ye = t.child, At = e.child.memoizedState;
          return Ye.memoizedState = At === null ? tE(a) : zx(At, a), Ye.childLanes = jx(e, a), t.memoizedState = eE, Je;
        } else {
          var Dt = i.children, W = Fx(e, t, Dt, a);
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
    function Px(e, t, a, i) {
      var o = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, m, y;
      return (o & xt) === tt && s !== null ? (m = s, m.childLanes = ae, m.pendingProps = d, e.mode & at && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = as(a, o, i, null)) : (m = rE(d, o), y = as(a, o, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function rE(e, t, a) {
      return LR(e, t, ae, null);
    }
    function Lb(e, t) {
      return mc(e, t);
    }
    function Fx(e, t, a, i) {
      var o = e.child, s = o.sibling, d = Lb(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === tt && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Yt) : m.push(s);
      }
      return t.child = d, d;
    }
    function Vx(e, t, a, i, o) {
      var s = t.mode, d = e.child, m = d.sibling, y = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xt) === tt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        b = T, b.childLanes = ae, b.pendingProps = y, t.mode & at && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = Lb(d, y), b.subtreeFlags = d.subtreeFlags & pr;
      var H;
      return m !== null ? H = mc(m, i) : (H = as(i, s, o, null), H.flags |= gn), H.return = t, b.return = t, b.sibling = H, t.child = b, H;
    }
    function qm(e, t, a, i) {
      i !== null && jg(i), $f(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, d = nE(t, s);
      return d.flags |= gn, t.memoizedState = null, d;
    }
    function Hx(e, t, a, i, o) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, m = rE(d, s), y = as(i, s, o, null);
      return y.flags |= gn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & xt) !== tt && $f(t, e.child, null, o), y;
    }
    function Ix(e, t, a) {
      return (e.mode & xt) === tt ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ut) : Cg(t) ? e.lanes = Ro : e.lanes = fa, null;
    }
    function Bx(e, t, a, i, o, s, d) {
      if (a)
        if (t.flags & zn) {
          t.flags &= ~zn;
          var W = BS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, d, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= st, null;
          var re = i.children, Q = i.fallback, ve = Hx(e, t, re, Q, d), Ae = t.child;
          return Ae.memoizedState = tE(d), t.memoizedState = eE, ve;
        }
      else {
        if (N_(), (t.mode & xt) === tt)
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
            var T = Gw(o);
            m = T.digest, y = T.message, b = T.stack;
          }
          var H;
          y ? H = new Error(y) : H = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var P = BS(H, m, b);
          return qm(e, t, d, P);
        }
        var q = da(d, e.childLanes);
        if (fu || q) {
          var X = uy();
          if (X !== null) {
            var ne = Iy(X, d);
            if (ne !== Mt && ne !== s.retryLane) {
              s.retryLane = ne;
              var Le = pn;
              Xa(e, ne), Rr(X, e, ne, Le);
            }
          }
          TE();
          var Je = BS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, d, Je);
        } else if (tC(o)) {
          t.flags |= st, t.child = e.child;
          var Ye = vD.bind(null, e);
          return qw(o, Ye), null;
        } else {
          A_(t, o, s.treeContext);
          var At = i.children, Dt = nE(t, At);
          return Dt.flags |= Ha, Dt;
        }
      }
    }
    function Ab(e, t, a) {
      e.lanes = St(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = St(i.lanes, t)), Ig(e.return, t, a);
    }
    function $x(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === F) {
          var o = i.memoizedState;
          o !== null && Ab(i, a, e);
        } else if (i.tag === ze)
          Ab(i, a, e);
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
    function Yx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Om(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Wx(e) {
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
    function Qx(e, t) {
      e !== void 0 && !Gm[e] && (e !== "collapsed" && e !== "hidden" ? (Gm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function zb(e, t) {
      {
        var a = kt(e), i = !a && typeof ai(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Gx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!zb(e[a], a))
              return;
        } else {
          var i = ai(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), d = 0; !s.done; s = o.next()) {
                if (!zb(s.value, d))
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
    function Ub(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, d = i.children;
      Wx(o), Qx(s, o), Gx(d, o), ka(e, t, d, a);
      var m = su.current, y = vS(m, Qp);
      if (y)
        m = hS(m, Qp), t.flags |= st;
      else {
        var b = e !== null && (e.flags & st) !== qe;
        b && $x(t, t.child, a), m = Wf(m);
      }
      if (Kl(t, m), (t.mode & xt) === tt)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = Yx(t.child), H;
            T === null ? (H = t.child, t.child = null) : (H = T.sibling, T.sibling = null), aE(
              t,
              !1,
              // isBackwards
              H,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var P = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var X = q.alternate;
              if (X !== null && Om(X) === null) {
                t.child = q;
                break;
              }
              var ne = q.sibling;
              q.sibling = P, P = q, q = ne;
            }
            aE(
              t,
              !0,
              // isBackwards
              P,
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
    function qx(e, t, a) {
      fS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = $f(t, null, i, a) : ka(e, t, i, a), t.child;
    }
    var jb = !1;
    function Kx(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || jb || (jb = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && iu(y, s, "prop", "Context.Provider");
      }
      if (TC(t, o, m), d !== null) {
        var b = d.value;
        if (Fe(b, m)) {
          if (d.children === s.children && !am())
            return Wo(e, t, a);
        } else
          $_(t, o, a);
      }
      var T = s.children;
      return ka(e, t, T, a), t.child;
    }
    var Pb = !1;
    function Xx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Pb || (Pb = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bf(t, a);
      var d = cr(i);
      Vu(t);
      var m;
      return tv.current = t, ra(!0), m = s(d), ra(!1), Eo(), t.flags |= Lu, ka(e, t, m, a), t.child;
    }
    function rv() {
      fu = !0;
    }
    function Km(e, t) {
      (t.mode & xt) === tt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gn);
    }
    function Wo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Sb(), hv(t.lanes), da(a, t.childLanes) ? (nx(e, t), t.child) : null;
    }
    function Zx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Yt) : s.push(e), a.flags |= gn, a;
      }
    }
    function iE(e, t) {
      var a = e.lanes;
      return !!da(a, t);
    }
    function Jx(e, t, a) {
      switch (t.tag) {
        case k:
          kb(t), t.stateNode, Hf();
          break;
        case U:
          BC(t);
          break;
        case _: {
          var i = t.type;
          Xu(i) && um(t);
          break;
        }
        case L:
          fS(t, t.stateNode.containerInfo);
          break;
        case le: {
          var o = t.memoizedProps.value, s = t.type._context;
          TC(t, s, o);
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
        case F: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Kl(t, Wf(su.current)), t.flags |= st, null;
            var b = t.child, T = b.childLanes;
            if (da(a, T))
              return Mb(e, t, a);
            Kl(t, Wf(su.current));
            var H = Wo(e, t, a);
            return H !== null ? H.sibling : null;
          } else
            Kl(t, Wf(su.current));
          break;
        }
        case ze: {
          var P = (e.flags & st) !== qe, q = da(a, t.childLanes);
          if (P) {
            if (q)
              return Ub(e, t, a);
            t.flags |= st;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Kl(t, su.current), q)
            break;
          return null;
        }
        case we:
        case Ue:
          return t.lanes = ae, xb(e, t, a);
      }
      return Wo(e, t, a);
    }
    function Fb(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Zx(e, t, zE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || am() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fu = !0;
        else {
          var s = iE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & st) === qe)
            return fu = !1, Jx(e, t, a);
          (e.flags & Ms) !== qe ? fu = !0 : fu = !1;
        }
      } else if (fu = !1, Br() && w_(t)) {
        var d = t.index, m = __();
        dC(t, m, d);
      }
      switch (t.lanes = ae, t.tag) {
        case z:
          return Ax(e, t, t.type, a);
        case $e: {
          var y = t.elementType;
          return Mx(e, t, y, a);
        }
        case M: {
          var b = t.type, T = t.pendingProps, H = t.elementType === b ? T : lu(b, T);
          return XS(e, t, b, H, a);
        }
        case _: {
          var P = t.type, q = t.pendingProps, X = t.elementType === P ? q : lu(P, q);
          return Db(e, t, P, X, a);
        }
        case k:
          return Dx(e, t, a);
        case U:
          return kx(e, t, a);
        case j:
          return Nx(e, t);
        case F:
          return Mb(e, t, a);
        case L:
          return qx(e, t, a);
        case ee: {
          var ne = t.type, Le = t.pendingProps, Je = t.elementType === ne ? Le : lu(ne, Le);
          return Tb(e, t, ne, Je, a);
        }
        case $:
          return _x(e, t, a);
        case I:
          return xx(e, t, a);
        case J:
          return Ox(e, t, a);
        case le:
          return Kx(e, t, a);
        case oe:
          return Xx(e, t, a);
        case de: {
          var Ye = t.type, At = t.pendingProps, Dt = lu(Ye, At);
          if (t.type !== t.elementType) {
            var W = Ye.propTypes;
            W && iu(
              W,
              Dt,
              // Resolved for outer only
              "prop",
              Pt(Ye)
            );
          }
          return Dt = lu(Ye.type, Dt), wb(e, t, Ye, Dt, a);
        }
        case ge:
          return _b(e, t, t.type, t.pendingProps, a);
        case Ke: {
          var re = t.type, Q = t.pendingProps, ve = t.elementType === re ? Q : lu(re, Q);
          return Lx(e, t, re, ve, a);
        }
        case ze:
          return Ub(e, t, a);
        case ot:
          break;
        case we:
          return xb(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zf(e) {
      e.flags |= gt;
    }
    function Vb(e) {
      e.flags |= ia, e.flags |= Pd;
    }
    var Hb, uE, Ib, Bb;
    Hb = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === U || o.tag === j)
          bw(e, o.stateNode);
        else if (o.tag !== L) {
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
    }, Ib = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, m = dS(), y = Tw(d, a, s, i, o, m);
        t.updateQueue = y, y && Zf(t);
      }
    }, Bb = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = qe;
      if (t) {
        if ((e.mode & at) !== tt) {
          for (var y = e.selfBaseDuration, b = e.child; b !== null; )
            a = St(a, St(b.lanes, b.childLanes)), i |= b.subtreeFlags & pr, i |= b.flags & pr, y += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = y;
        } else
          for (var T = e.child; T !== null; )
            a = St(a, St(T.lanes, T.childLanes)), i |= T.subtreeFlags & pr, i |= T.flags & pr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & at) !== tt) {
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
    function eO(e, t, a) {
      if (F_() && (t.mode & xt) !== tt && (t.flags & st) === qe)
        return SC(t), Hf(), t.flags |= zn | Ta | ir, !1;
      var i = fm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (j_(t), Yr(t), (t.mode & at) !== tt) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & st) === qe && (t.memoizedState = null), t.flags |= gt, Yr(t), (t.mode & at) !== tt) {
            var d = a !== null;
            if (d) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return EC(), !0;
    }
    function $b(e, t, a) {
      var i = t.pendingProps;
      switch (Mg(t), t.tag) {
        case z:
        case $e:
        case ge:
        case M:
        case ee:
        case $:
        case I:
        case J:
        case oe:
        case de:
          return Yr(t), null;
        case _: {
          var o = t.type;
          return Xu(o) && im(t), Yr(t), null;
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
              (t.flags & zn) !== qe) && (t.flags |= Va, EC());
            }
          }
          return uE(e, t), Yr(t), null;
        }
        case U: {
          pS(t);
          var y = IC(), b = t.type;
          if (e !== null && t.stateNode != null)
            Ib(e, t, b, i, y), e.ref !== t.ref && Vb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var T = dS(), H = fm(t);
            if (H)
              z_(t, y, T) && Zf(t);
            else {
              var P = Cw(b, i, y, T, t);
              Hb(P, t, !1, !1), t.stateNode = P, Rw(P, b, i, y) && Zf(t);
            }
            t.ref !== null && Vb(t);
          }
          return Yr(t), null;
        }
        case j: {
          var q = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            Bb(e, t, X, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ne = IC(), Le = dS(), Je = fm(t);
            Je ? U_(t) && Zf(t) : t.stateNode = ww(q, ne, Le, t);
          }
          return Yr(t), null;
        }
        case F: {
          Qf(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var At = eO(e, t, Ye);
            if (!At)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & st) !== qe)
            return t.lanes = a, (t.mode & at) !== tt && IS(t), t;
          var Dt = Ye !== null, W = e !== null && e.memoizedState !== null;
          if (Dt !== W && Dt) {
            var re = t.child;
            if (re.flags |= Au, (t.mode & xt) !== tt) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ue);
              Q || vS(su.current, YC) ? tD() : TE();
            }
          }
          var ve = t.updateQueue;
          if (ve !== null && (t.flags |= gt), Yr(t), (t.mode & at) !== tt && Dt) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case L:
          return Yf(t), uE(e, t), e === null && g_(t.stateNode.containerInfo), Yr(t), null;
        case le:
          var Oe = t.type._context;
          return Hg(Oe, t), Yr(t), null;
        case Ke: {
          var lt = t.type;
          return Xu(lt) && im(t), Yr(t), null;
        }
        case ze: {
          Qf(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Yr(t), null;
          var rn = (t.flags & st) !== qe, It = ht.rendering;
          if (It === null)
            if (rn)
              av(ht, !1);
            else {
              var er = rD() && (e === null || (e.flags & st) === qe);
              if (!er)
                for (var Bt = t.child; Bt !== null; ) {
                  var Gn = Om(Bt);
                  if (Gn !== null) {
                    rn = !0, t.flags |= st, av(ht, !1);
                    var ma = Gn.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= gt), t.subtreeFlags = qe, rx(t, a), Kl(t, hS(su.current, Qp)), t.child;
                  }
                  Bt = Bt.sibling;
                }
              ht.tail !== null && kn() > fR() && (t.flags |= st, rn = !0, av(ht, !1), t.lanes = Xd);
            }
          else {
            if (!rn) {
              var Kr = Om(It);
              if (Kr !== null) {
                t.flags |= st, rn = !0;
                var hi = Kr.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= gt), av(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !It.alternate && !Br())
                  return Yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                kn() * 2 - ht.renderingStartTime > fR() && a !== fa && (t.flags |= st, rn = !0, av(ht, !1), t.lanes = Xd);
            }
            if (ht.isBackwards)
              It.sibling = t.child, t.child = It;
            else {
              var La = ht.last;
              La !== null ? La.sibling = It : t.child = It, ht.last = It;
            }
          }
          if (ht.tail !== null) {
            var Aa = ht.tail;
            ht.rendering = Aa, ht.tail = Aa.sibling, ht.renderingStartTime = kn(), Aa.sibling = null;
            var ya = su.current;
            return rn ? ya = hS(ya, Qp) : ya = Wf(ya), Kl(t, ya), Aa;
          }
          return Yr(t), null;
        }
        case ot:
          break;
        case we:
        case Ue: {
          RE(t);
          var Xo = t.memoizedState, ud = Xo !== null;
          if (e !== null) {
            var Ev = e.memoizedState, io = Ev !== null;
            io !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !N && (t.flags |= Au);
          }
          return !ud || (t.mode & xt) === tt ? Yr(t) : da(ao, fa) && (Yr(t), t.subtreeFlags & (gn | gt) && (t.flags |= Au)), null;
        }
        case Rt:
          return null;
        case Et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function tO(e, t, a) {
      switch (Mg(t), t.tag) {
        case _: {
          var i = t.type;
          Xu(i) && im(t);
          var o = t.flags;
          return o & ir ? (t.flags = o & ~ir | st, (t.mode & at) !== tt && IS(t), t) : null;
        }
        case k: {
          t.stateNode, Yf(t), Og(t), yS();
          var s = t.flags;
          return (s & ir) !== qe && (s & st) === qe ? (t.flags = s & ~ir | st, t) : null;
        }
        case U:
          return pS(t), null;
        case F: {
          Qf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var m = t.flags;
          return m & ir ? (t.flags = m & ~ir | st, (t.mode & at) !== tt && IS(t), t) : null;
        }
        case ze:
          return Qf(t), null;
        case L:
          return Yf(t), null;
        case le:
          var y = t.type._context;
          return Hg(y, t), null;
        case we:
        case Ue:
          return RE(t), null;
        case Rt:
          return null;
        default:
          return null;
      }
    }
    function Yb(e, t, a) {
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
        case U: {
          pS(t);
          break;
        }
        case L:
          Yf(t);
          break;
        case F:
          Qf(t);
          break;
        case ze:
          Qf(t);
          break;
        case le:
          var o = t.type._context;
          Hg(o, t);
          break;
        case we:
        case Ue:
          RE(t);
          break;
      }
    }
    var Wb = null;
    Wb = /* @__PURE__ */ new Set();
    var Xm = !1, Wr = !1, nO = typeof WeakSet == "function" ? WeakSet : Set, Ve = null, Jf = null, ed = null;
    function rO(e) {
      go(null, function() {
        throw e;
      }), Ud();
    }
    var aO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & at)
        try {
          no(), t.componentWillUnmount();
        } finally {
          to(e);
        }
      else
        t.componentWillUnmount();
    };
    function Qb(e, t) {
      try {
        Jl(yr, e);
      } catch (a) {
        bn(e, t, a);
      }
    }
    function oE(e, t, a) {
      try {
        aO(e, a);
      } catch (i) {
        bn(e, t, i);
      }
    }
    function iO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        bn(e, t, i);
      }
    }
    function Gb(e, t) {
      try {
        Kb(e);
      } catch (a) {
        bn(e, t, a);
      }
    }
    function td(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (pt && Ct && e.mode & at)
              try {
                no(), i = a(null);
              } finally {
                to(e);
              }
            else
              i = a(null);
          } catch (o) {
            bn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          a.current = null;
    }
    function Zm(e, t, a) {
      try {
        a();
      } catch (i) {
        bn(e, t, i);
      }
    }
    var qb = !1;
    function uO(e, t) {
      Sw(e.containerInfo), Ve = t, oO();
      var a = qb;
      return qb = !1, a;
    }
    function oO() {
      for (; Ve !== null; ) {
        var e = Ve, t = e.child;
        (e.subtreeFlags & Sl) !== qe && t !== null ? (t.return = e, Ve = t) : lO();
      }
    }
    function lO() {
      for (; Ve !== null; ) {
        var e = Ve;
        qt(e);
        try {
          sO(e);
        } catch (a) {
          bn(e, e.return, a);
        }
        An();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ve = t;
          return;
        }
        Ve = e.return;
      }
    }
    function sO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Va) !== qe) {
        switch (qt(e), e.tag) {
          case M:
          case ee:
          case ge:
            break;
          case _: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : lu(e.type, i), o);
              {
                var m = Wb;
                d === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ft(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case k: {
            {
              var y = e.stateNode;
              $w(y.containerInfo);
            }
            break;
          }
          case U:
          case j:
          case L:
          case Ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        An();
      }
    }
    function du(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var m = d.destroy;
            d.destroy = void 0, m !== void 0 && ((e & $r) !== Za ? Bc(t) : (e & yr) !== Za && $c(t), (e & Zu) !== Za && yv(!0), Zm(t, a, m), (e & Zu) !== Za && yv(!1), (e & $r) !== Za ? ch() : (e & yr) !== Za && El());
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
            (e & Zu) !== Za && yv(!0), s.destroy = d(), (e & Zu) !== Za && yv(!1), (e & $r) !== Za ? Gd() : (e & yr) !== Za && dh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var y = void 0;
                (s.tag & yr) !== qe ? y = "useLayoutEffect" : (s.tag & Zu) !== qe ? y = "useInsertionEffect" : y = "useEffect";
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
    function cO(e, t) {
      if ((t.flags & gt) !== qe)
        switch (t.tag) {
          case J: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, d = yb(), m = t.alternate === null ? "mount" : "update";
            mb() && (m = "nested-update"), typeof s == "function" && s(o, m, a, d);
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
    function fO(e, t, a, i) {
      if ((a.flags & xr) !== qe)
        switch (a.tag) {
          case M:
          case ee:
          case ge: {
            if (!Wr)
              if (a.mode & at)
                try {
                  no(), Jl(yr | mr, a);
                } finally {
                  to(a);
                }
              else
                Jl(yr | mr, a);
            break;
          }
          case _: {
            var o = a.stateNode;
            if (a.flags & gt && !Wr)
              if (t === null)
                if (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & at)
                  try {
                    no(), o.componentDidMount();
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : lu(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & at)
                  try {
                    no(), o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), kC(a, m, o));
            break;
          }
          case k: {
            var y = a.updateQueue;
            if (y !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case U:
                    b = a.child.stateNode;
                    break;
                  case _:
                    b = a.child.stateNode;
                    break;
                }
              kC(a, y, b);
            }
            break;
          }
          case U: {
            var T = a.stateNode;
            if (t === null && a.flags & gt) {
              var H = a.type, P = a.memoizedProps;
              kw(T, H, P);
            }
            break;
          }
          case j:
            break;
          case L:
            break;
          case J: {
            {
              var q = a.memoizedProps, X = q.onCommit, ne = q.onRender, Le = a.stateNode.effectDuration, Je = yb(), Ye = t === null ? "mount" : "update";
              mb() && (Ye = "nested-update"), typeof ne == "function" && ne(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Je);
              {
                typeof X == "function" && X(a.memoizedProps.id, Ye, Le, Je), lD(a);
                var At = a.return;
                e:
                  for (; At !== null; ) {
                    switch (At.tag) {
                      case k:
                        var Dt = At.stateNode;
                        Dt.effectDuration += Le;
                        break e;
                      case J:
                        var W = At.stateNode;
                        W.effectDuration += Le;
                        break e;
                    }
                    At = At.return;
                  }
              }
            }
            break;
          }
          case F: {
            SO(e, a);
            break;
          }
          case ze:
          case Ke:
          case ot:
          case we:
          case Ue:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & ia && Kb(a);
    }
    function dO(e) {
      switch (e.tag) {
        case M:
        case ee:
        case ge: {
          if (e.mode & at)
            try {
              no(), Qb(e, e.return);
            } finally {
              to(e);
            }
          else
            Qb(e, e.return);
          break;
        }
        case _: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && iO(e, e.return, t), Gb(e, e.return);
          break;
        }
        case U: {
          Gb(e, e.return);
          break;
        }
      }
    }
    function pO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === U) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Vw(o) : Iw(i.stateNode, i.memoizedProps);
            } catch (d) {
              bn(e, e.return, d);
            }
          }
        } else if (i.tag === j) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Hw(s) : Bw(s, i.memoizedProps);
            } catch (d) {
              bn(e, e.return, d);
            }
        } else if (!((i.tag === we || i.tag === Ue) && i.memoizedState !== null && i !== e)) {
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
    function Kb(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case U:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & at)
            try {
              no(), o = t(i);
            } finally {
              to(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ft(e)), t.current = i;
      }
    }
    function vO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Xb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Xb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === U) {
          var a = e.stateNode;
          a !== null && C_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function hO(e) {
      for (var t = e.return; t !== null; ) {
        if (Zb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zb(e) {
      return e.tag === U || e.tag === k || e.tag === L;
    }
    function Jb(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Zb(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== U && t.tag !== j && t.tag !== Ge; ) {
            if (t.flags & gn || t.child === null || t.tag === L)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & gn))
            return t.stateNode;
        }
    }
    function mO(e) {
      var t = hO(e);
      switch (t.tag) {
        case U: {
          var a = t.stateNode;
          t.flags & Kt && (eC(a), t.flags &= ~Kt);
          var i = Jb(e);
          sE(e, i, a);
          break;
        }
        case k:
        case L: {
          var o = t.stateNode.containerInfo, s = Jb(e);
          lE(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function lE(e, t, a) {
      var i = e.tag, o = i === U || i === j;
      if (o) {
        var s = e.stateNode;
        t ? Uw(a, s, t) : Aw(a, s);
      } else if (i !== L) {
        var d = e.child;
        if (d !== null) {
          lE(d, t, a);
          for (var m = d.sibling; m !== null; )
            lE(m, t, a), m = m.sibling;
        }
      }
    }
    function sE(e, t, a) {
      var i = e.tag, o = i === U || i === j;
      if (o) {
        var s = e.stateNode;
        t ? zw(a, s, t) : Lw(a, s);
      } else if (i !== L) {
        var d = e.child;
        if (d !== null) {
          sE(d, t, a);
          for (var m = d.sibling; m !== null; )
            sE(m, t, a), m = m.sibling;
        }
      }
    }
    var Qr = null, pu = !1;
    function yO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case U: {
                Qr = i.stateNode, pu = !1;
                break e;
              }
              case k: {
                Qr = i.stateNode.containerInfo, pu = !0;
                break e;
              }
              case L: {
                Qr = i.stateNode.containerInfo, pu = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        eR(e, t, a), Qr = null, pu = !1;
      }
      vO(a);
    }
    function es(e, t, a) {
      for (var i = a.child; i !== null; )
        eR(e, t, i), i = i.sibling;
    }
    function eR(e, t, a) {
      switch (Wd(a), a.tag) {
        case U:
          Wr || td(a, t);
        case j: {
          {
            var i = Qr, o = pu;
            Qr = null, es(e, t, a), Qr = i, pu = o, Qr !== null && (pu ? Pw(Qr, a.stateNode) : jw(Qr, a.stateNode));
          }
          return;
        }
        case Ge: {
          Qr !== null && (pu ? Fw(Qr, a.stateNode) : Eg(Qr, a.stateNode));
          return;
        }
        case L: {
          {
            var s = Qr, d = pu;
            Qr = a.stateNode.containerInfo, pu = !0, es(e, t, a), Qr = s, pu = d;
          }
          return;
        }
        case M:
        case ee:
        case de:
        case ge: {
          if (!Wr) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var b = y.next, T = b;
                do {
                  var H = T, P = H.destroy, q = H.tag;
                  P !== void 0 && ((q & Zu) !== Za ? Zm(a, t, P) : (q & yr) !== Za && ($c(a), a.mode & at ? (no(), Zm(a, t, P), to(a)) : Zm(a, t, P), El())), T = T.next;
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
        case ot: {
          es(e, t, a);
          return;
        }
        case we: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
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
    function gO(e) {
      e.memoizedState;
    }
    function SO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && a_(s);
          }
        }
      }
    }
    function tR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new nO()), t.forEach(function(i) {
          var o = hD.bind(null, e, i);
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
    function EO(e, t, a) {
      Jf = a, ed = e, qt(t), nR(t, e), qt(t), Jf = null, ed = null;
    }
    function vu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            yO(e, t, s);
          } catch (y) {
            bn(s, t, y);
          }
        }
      var d = Cc();
      if (t.subtreeFlags & la)
        for (var m = t.child; m !== null; )
          qt(m), nR(m, e), m = m.sibling;
      qt(d);
    }
    function nR(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case M:
        case ee:
        case de:
        case ge: {
          if (vu(t, e), ro(e), o & gt) {
            try {
              du(Zu | mr, e, e.return), Jl(Zu | mr, e);
            } catch (lt) {
              bn(e, e.return, lt);
            }
            if (e.mode & at) {
              try {
                no(), du(yr | mr, e, e.return);
              } catch (lt) {
                bn(e, e.return, lt);
              }
              to(e);
            } else
              try {
                du(yr | mr, e, e.return);
              } catch (lt) {
                bn(e, e.return, lt);
              }
          }
          return;
        }
        case _: {
          vu(t, e), ro(e), o & ia && i !== null && td(i, i.return);
          return;
        }
        case U: {
          vu(t, e), ro(e), o & ia && i !== null && td(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                eC(s);
              } catch (lt) {
                bn(e, e.return, lt);
              }
            }
            if (o & gt) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Nw(d, T, b, y, m, e);
                  } catch (lt) {
                    bn(e, e.return, lt);
                  }
              }
            }
          }
          return;
        }
        case j: {
          if (vu(t, e), ro(e), o & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var H = e.stateNode, P = e.memoizedProps, q = i !== null ? i.memoizedProps : P;
            try {
              Mw(H, q, P);
            } catch (lt) {
              bn(e, e.return, lt);
            }
          }
          return;
        }
        case k: {
          if (vu(t, e), ro(e), o & gt && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                r_(t.containerInfo);
              } catch (lt) {
                bn(e, e.return, lt);
              }
          }
          return;
        }
        case L: {
          vu(t, e), ro(e);
          return;
        }
        case F: {
          vu(t, e), ro(e);
          var ne = e.child;
          if (ne.flags & Au) {
            var Le = ne.stateNode, Je = ne.memoizedState, Ye = Je !== null;
            if (Le.isHidden = Ye, Ye) {
              var At = ne.alternate !== null && ne.alternate.memoizedState !== null;
              At || eD();
            }
          }
          if (o & gt) {
            try {
              gO(e);
            } catch (lt) {
              bn(e, e.return, lt);
            }
            tR(e);
          }
          return;
        }
        case we: {
          var Dt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xt
          ) {
            var W = Wr;
            Wr = W || Dt, vu(t, e), Wr = W;
          } else
            vu(t, e);
          if (ro(e), o & Au) {
            var re = e.stateNode, Q = e.memoizedState, ve = Q !== null, Ae = e;
            if (re.isHidden = ve, ve && !Dt && (Ae.mode & xt) !== tt) {
              Ve = Ae;
              for (var Oe = Ae.child; Oe !== null; )
                Ve = Oe, bO(Oe), Oe = Oe.sibling;
            }
            pO(Ae, ve);
          }
          return;
        }
        case ze: {
          vu(t, e), ro(e), o & gt && tR(e);
          return;
        }
        case ot:
          return;
        default: {
          vu(t, e), ro(e);
          return;
        }
      }
    }
    function ro(e) {
      var t = e.flags;
      if (t & gn) {
        try {
          mO(e);
        } catch (a) {
          bn(e, e.return, a);
        }
        e.flags &= ~gn;
      }
      t & Ha && (e.flags &= ~Ha);
    }
    function CO(e, t, a) {
      Jf = a, ed = t, Ve = e, rR(e, t, a), Jf = null, ed = null;
    }
    function rR(e, t, a) {
      for (var i = (e.mode & xt) !== tt; Ve !== null; ) {
        var o = Ve, s = o.child;
        if (o.tag === we && i) {
          var d = o.memoizedState !== null, m = d || Xm;
          if (m) {
            cE(e, t, a);
            continue;
          } else {
            var y = o.alternate, b = y !== null && y.memoizedState !== null, T = b || Wr, H = Xm, P = Wr;
            Xm = m, Wr = T, Wr && !P && (Ve = o, RO(o));
            for (var q = s; q !== null; )
              Ve = q, rR(
                q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), q = q.sibling;
            Ve = o, Xm = H, Wr = P, cE(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & xr) !== qe && s !== null ? (s.return = o, Ve = s) : cE(e, t, a);
      }
    }
    function cE(e, t, a) {
      for (; Ve !== null; ) {
        var i = Ve;
        if ((i.flags & xr) !== qe) {
          var o = i.alternate;
          qt(i);
          try {
            fO(t, o, i, a);
          } catch (d) {
            bn(i, i.return, d);
          }
          An();
        }
        if (i === e) {
          Ve = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ve = s;
          return;
        }
        Ve = i.return;
      }
    }
    function bO(e) {
      for (; Ve !== null; ) {
        var t = Ve, a = t.child;
        switch (t.tag) {
          case M:
          case ee:
          case de:
          case ge: {
            if (t.mode & at)
              try {
                no(), du(yr, t, t.return);
              } finally {
                to(t);
              }
            else
              du(yr, t, t.return);
            break;
          }
          case _: {
            td(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && oE(t, t.return, i);
            break;
          }
          case U: {
            td(t, t.return);
            break;
          }
          case we: {
            var o = t.memoizedState !== null;
            if (o) {
              aR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ve = a) : aR(e);
      }
    }
    function aR(e) {
      for (; Ve !== null; ) {
        var t = Ve;
        if (t === e) {
          Ve = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ve = a;
          return;
        }
        Ve = t.return;
      }
    }
    function RO(e) {
      for (; Ve !== null; ) {
        var t = Ve, a = t.child;
        if (t.tag === we) {
          var i = t.memoizedState !== null;
          if (i) {
            iR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ve = a) : iR(e);
      }
    }
    function iR(e) {
      for (; Ve !== null; ) {
        var t = Ve;
        qt(t);
        try {
          dO(t);
        } catch (i) {
          bn(t, t.return, i);
        }
        if (An(), t === e) {
          Ve = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ve = a;
          return;
        }
        Ve = t.return;
      }
    }
    function TO(e, t, a, i) {
      Ve = t, wO(t, e, a, i);
    }
    function wO(e, t, a, i) {
      for (; Ve !== null; ) {
        var o = Ve, s = o.child;
        (o.subtreeFlags & Ia) !== qe && s !== null ? (s.return = o, Ve = s) : _O(e, t, a, i);
      }
    }
    function _O(e, t, a, i) {
      for (; Ve !== null; ) {
        var o = Ve;
        if ((o.flags & wn) !== qe) {
          qt(o);
          try {
            xO(t, o, a, i);
          } catch (d) {
            bn(o, o.return, d);
          }
          An();
        }
        if (o === e) {
          Ve = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Ve = s;
          return;
        }
        Ve = o.return;
      }
    }
    function xO(e, t, a, i) {
      switch (t.tag) {
        case M:
        case ee:
        case ge: {
          if (t.mode & at) {
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
    function OO(e) {
      Ve = e, DO();
    }
    function DO() {
      for (; Ve !== null; ) {
        var e = Ve, t = e.child;
        if ((Ve.flags & Yt) !== qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Ve = o, MO(o, e);
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
            Ve = e;
          }
        }
        (e.subtreeFlags & Ia) !== qe && t !== null ? (t.return = e, Ve = t) : kO();
      }
    }
    function kO() {
      for (; Ve !== null; ) {
        var e = Ve;
        (e.flags & wn) !== qe && (qt(e), NO(e), An());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ve = t;
          return;
        }
        Ve = e.return;
      }
    }
    function NO(e) {
      switch (e.tag) {
        case M:
        case ee:
        case ge: {
          e.mode & at ? (HS(), du($r | mr, e, e.return), VS(e)) : du($r | mr, e, e.return);
          break;
        }
      }
    }
    function MO(e, t) {
      for (; Ve !== null; ) {
        var a = Ve;
        qt(a), AO(a, t), An();
        var i = a.child;
        i !== null ? (i.return = a, Ve = i) : LO(e);
      }
    }
    function LO(e) {
      for (; Ve !== null; ) {
        var t = Ve, a = t.sibling, i = t.return;
        if (Xb(t), t === e) {
          Ve = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ve = a;
          return;
        }
        Ve = i;
      }
    }
    function AO(e, t) {
      switch (e.tag) {
        case M:
        case ee:
        case ge: {
          e.mode & at ? (HS(), du($r, e, t), VS(e)) : du($r, e, t);
          break;
        }
      }
    }
    function zO(e) {
      switch (e.tag) {
        case M:
        case ee:
        case ge: {
          try {
            Jl(yr | mr, e);
          } catch (a) {
            bn(e, e.return, a);
          }
          break;
        }
        case _: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            bn(e, e.return, a);
          }
          break;
        }
      }
    }
    function UO(e) {
      switch (e.tag) {
        case M:
        case ee:
        case ge: {
          try {
            Jl($r | mr, e);
          } catch (t) {
            bn(e, e.return, t);
          }
          break;
        }
      }
    }
    function jO(e) {
      switch (e.tag) {
        case M:
        case ee:
        case ge: {
          try {
            du(yr | mr, e, e.return);
          } catch (a) {
            bn(e, e.return, a);
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
    function PO(e) {
      switch (e.tag) {
        case M:
        case ee:
        case ge:
          try {
            du($r | mr, e, e.return);
          } catch (t) {
            bn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var iv = Symbol.for;
      iv("selector.component"), iv("selector.has_pseudo_class"), iv("selector.role"), iv("selector.test_id"), iv("selector.text");
    }
    var FO = [];
    function VO() {
      FO.forEach(function(e) {
        return e();
      });
    }
    var HO = p.ReactCurrentActQueue;
    function IO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function uR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && HO.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var BO = Math.ceil, fE = p.ReactCurrentDispatcher, dE = p.ReactCurrentOwner, Gr = p.ReactCurrentBatchConfig, hu = p.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), oR = (
      /*               */
      1
    ), qr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Qo = 0, uv = 1, dc = 2, Jm = 3, ov = 4, lR = 5, pE = 6, Lt = Er, Na = null, In = null, Cr = ae, ao = ae, vE = $l(ae), br = Qo, lv = null, ey = ae, sv = ae, ty = ae, cv = null, Ja = null, hE = 0, sR = 500, cR = 1 / 0, $O = 500, Go = null;
    function fv() {
      cR = kn() + $O;
    }
    function fR() {
      return cR;
    }
    var ny = !1, mE = null, nd = null, pc = !1, ts = null, dv = ae, yE = [], gE = null, YO = 50, pv = 0, SE = null, EE = !1, ry = !1, WO = 50, rd = 0, ay = null, vv = pn, iy = ae, dR = !1;
    function uy() {
      return Na;
    }
    function Ma() {
      return (Lt & (qr | ji)) !== Er ? kn() : (vv !== pn || (vv = kn()), vv);
    }
    function ns(e) {
      var t = e.mode;
      if ((t & xt) === tt)
        return ut;
      if ((Lt & qr) !== Er && Cr !== ae)
        return Kn(Cr);
      var a = I_() !== H_;
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
      var s = _w();
      return s;
    }
    function QO(e) {
      var t = e.mode;
      return (t & xt) === tt ? ut : Hy();
    }
    function Rr(e, t, a, i) {
      yD(), dR && g("useInsertionEffect must not schedule updates."), EE && (ry = !0), ko(e, a, i), (Lt & qr) !== ae && e === Na ? ED(t) : (vr && ip(e, t, a), CD(t), e === Na && ((Lt & qr) === Er && (sv = St(sv, a)), br === ov && rs(e, Cr)), ei(e, i), a === ut && Lt === Er && (t.mode & xt) === tt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hu.isBatchingLegacy && (fv(), fC()));
    }
    function GO(e, t, a) {
      var i = e.current;
      i.lanes = t, ko(e, t, a), ei(e, a);
    }
    function qO(e) {
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
        a !== null && OR(a), e.callbackNode = null, e.callbackPriority = Mt;
        return;
      }
      var o = Wn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hu.current !== null && a !== xE)) {
        a == null && s !== ut && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && OR(a);
      var d;
      if (o === ut)
        e.tag === Yl ? (hu.isBatchingLegacy !== null && (hu.didScheduleLegacyUpdate = !0), T_(hR.bind(null, e))) : cC(hR.bind(null, e)), hu.current !== null ? hu.current.push(Wl) : Ow(function() {
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
          case eu:
            m = xi;
            break;
          case Hs:
            m = Uu;
            break;
          default:
            m = xi;
            break;
        }
        d = OE(m, pR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = d;
    }
    function pR(e, t) {
      if (yx(), vv = pn, iy = ae, (Lt & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ko();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ps(e, e === Na ? Cr : ae);
      if (o === ae)
        return null;
      var s = !Vs(e, o) && !gh(e, o) && !t, d = s ? iD(e, o) : ly(e, o);
      if (d !== Qo) {
        if (d === dc) {
          var m = Zd(e);
          m !== ae && (o = m, d = CE(e, m));
        }
        if (d === uv) {
          var y = lv;
          throw vc(e, ae), rs(e, o), ei(e, kn()), y;
        }
        if (d === pE)
          rs(e, o);
        else {
          var b = !Vs(e, o), T = e.current.alternate;
          if (b && !XO(T)) {
            if (d = ly(e, o), d === dc) {
              var H = Zd(e);
              H !== ae && (o = H, d = CE(e, H));
            }
            if (d === uv) {
              var P = lv;
              throw vc(e, ae), rs(e, o), ei(e, kn()), P;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, KO(e, d, o);
        }
      }
      return ei(e, kn()), e.callbackNode === a ? pR.bind(null, e) : null;
    }
    function CE(e, t) {
      var a = cv;
      if (Zn(e)) {
        var i = vc(e, t);
        i.flags |= zn, y_(e.containerInfo);
      }
      var o = ly(e, t);
      if (o !== dc) {
        var s = Ja;
        Ja = a, s !== null && vR(s);
      }
      return o;
    }
    function vR(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function KO(e, t, a) {
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
          !DR()) {
            var i = hE + sR - kn();
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
          if (!DR()) {
            var d = mh(e, a), m = d, y = kn() - m, b = mD(y) - y;
            if (b > 10) {
              e.timeoutHandle = gg(hc.bind(null, e, Ja, Go), b);
              break;
            }
          }
          hc(e, Ja, Go);
          break;
        }
        case lR: {
          hc(e, Ja, Go);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function XO(e) {
      for (var t = e; ; ) {
        if (t.flags & Ns) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], d = s.getSnapshot, m = s.value;
                try {
                  if (!Fe(d(), m))
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
    function hR(e) {
      if (gx(), (Lt & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      Ko();
      var t = Ps(e, ae);
      if (!da(t, ut))
        return ei(e, kn()), null;
      var a = ly(e, t);
      if (e.tag !== Yl && a === dc) {
        var i = Zd(e);
        i !== ae && (t = i, a = CE(e, i));
      }
      if (a === uv) {
        var o = lv;
        throw vc(e, ae), rs(e, t), ei(e, kn()), o;
      }
      if (a === pE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hc(e, Ja, Go), ei(e, kn()), null;
    }
    function ZO(e, t) {
      t !== ae && (Ol(e, St(t, ut)), ei(e, kn()), (Lt & (qr | ji)) === Er && (fv(), Wl()));
    }
    function bE(e, t) {
      var a = Lt;
      Lt |= oR;
      try {
        return e(t);
      } finally {
        Lt = a, Lt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hu.isBatchingLegacy && (fv(), fC());
      }
    }
    function JO(e, t, a, i, o) {
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
      Lt |= oR;
      var a = Gr.transition, i = Wa();
      try {
        return Gr.transition = null, Xn(Or), e ? e() : void 0;
      } finally {
        Xn(i), Gr.transition = a, Lt = t, (Lt & (qr | ji)) === Er && Wl();
      }
    }
    function mR() {
      return (Lt & (qr | ji)) !== Er;
    }
    function oy(e, t) {
      va(vE, ao, e), ao = St(ao, t);
    }
    function RE(e) {
      ao = vE.current, pa(vE, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, xw(a)), In !== null)
        for (var i = In.return; i !== null; ) {
          var o = i.alternate;
          Yb(o, i), i = i.return;
        }
      Na = e;
      var s = mc(e.current, null);
      return In = s, Cr = ao = t, br = Qo, lv = null, ey = ae, sv = ae, ty = ae, cv = null, Ja = null, W_(), ou.discardPendingWarnings(), s;
    }
    function yR(e, t) {
      do {
        var a = In;
        try {
          if (hm(), QC(), An(), dE.current = null, a === null || a.return === null) {
            br = uv, lv = t, In = null;
            return;
          }
          if (pt && a.mode & at && Qm(a, !0), Tt)
            if (Eo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ph(a, i, Cr);
            } else
              Yc(a, t, Cr);
          Rx(e, a.return, a, t, Cr), CR(a);
        } catch (o) {
          t = o, In === a && a !== null ? (a = a.return, In = a) : a = In;
          continue;
        }
        return;
      } while (!0);
    }
    function gR() {
      var e = fE.current;
      return fE.current = Im, e === null ? Im : e;
    }
    function SR(e) {
      fE.current = e;
    }
    function eD() {
      hE = kn();
    }
    function hv(e) {
      ey = St(e, ey);
    }
    function tD() {
      br === Qo && (br = Jm);
    }
    function TE() {
      (br === Qo || br === Jm || br === dc) && (br = ov), Na !== null && (Fs(ey) || Fs(sv)) && rs(Na, Cr);
    }
    function nD(e) {
      br !== ov && (br = dc), cv === null ? cv = [e] : cv.push(e);
    }
    function rD() {
      return br === Qo;
    }
    function ly(e, t) {
      var a = Lt;
      Lt |= qr;
      var i = gR();
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
          aD();
          break;
        } catch (s) {
          yR(e, s);
        }
      while (!0);
      if (hm(), Lt = a, SR(i), In !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bl(), Na = null, Cr = ae, br;
    }
    function aD() {
      for (; In !== null; )
        ER(In);
    }
    function iD(e, t) {
      var a = Lt;
      Lt |= qr;
      var i = gR();
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
          uD();
          break;
        } catch (s) {
          yR(e, s);
        }
      while (!0);
      return hm(), SR(i), Lt = a, In !== null ? (As(), Qo) : (bl(), Na = null, Cr = ae, br);
    }
    function uD() {
      for (; In !== null && !Fc(); )
        ER(In);
    }
    function ER(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & at) !== tt ? (FS(e), a = wE(t, e, ao), Qm(e, !0)) : a = wE(t, e, ao), An(), e.memoizedProps = e.pendingProps, a === null ? CR(e) : In = a, dE.current = null;
    }
    function CR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ta) === qe) {
          qt(t);
          var o = void 0;
          if ((t.mode & at) === tt ? o = $b(a, t, ao) : (FS(t), o = $b(a, t, ao), Qm(t, !1)), An(), o !== null) {
            In = o;
            return;
          }
        } else {
          var s = tO(a, t);
          if (s !== null) {
            s.flags &= ah, In = s;
            return;
          }
          if ((t.mode & at) !== tt) {
            Qm(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Ta, i.subtreeFlags = qe, i.deletions = null;
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
      br === Qo && (br = lR);
    }
    function hc(e, t, a) {
      var i = Wa(), o = Gr.transition;
      try {
        Gr.transition = null, Xn(Or), oD(e, t, a, i);
      } finally {
        Gr.transition = o, Xn(i);
      }
      return null;
    }
    function oD(e, t, a, i) {
      do
        Ko();
      while (ts !== null);
      if (gD(), (Lt & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Ic(s), o === null)
        return Qd(), null;
      if (s === ae && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Mt;
      var d = St(o.lanes, o.childLanes);
      ap(e, d), e === Na && (Na = null, In = null, Cr = ae), ((o.subtreeFlags & Ia) !== qe || (o.flags & Ia) !== qe) && (pc || (pc = !0, gE = a, OE(xi, function() {
        return Ko(), null;
      })));
      var m = (o.subtreeFlags & (Sl | la | xr | Ia)) !== qe, y = (o.flags & (Sl | la | xr | Ia)) !== qe;
      if (m || y) {
        var b = Gr.transition;
        Gr.transition = null;
        var T = Wa();
        Xn(Or);
        var H = Lt;
        Lt |= ji, dE.current = null, uO(e, o), gb(), EO(e, o, s), Ew(e.containerInfo), e.current = o, vh(s), CO(o, e, s), Cl(), oh(), Lt = H, Xn(T), Gr.transition = b;
      } else
        e.current = o, gb();
      var P = pc;
      if (pc ? (pc = !1, ts = e, dv = s) : (rd = 0, ay = null), d = e.pendingLanes, d === ae && (nd = null), P || wR(e.current, !1), Xi(o.stateNode, i), vr && e.memoizedUpdaters.clear(), VO(), ei(e, kn()), t !== null)
        for (var q = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ne = t[X], Le = ne.stack, Je = ne.digest;
          q(ne.value, {
            componentStack: Le,
            digest: Je
          });
        }
      if (ny) {
        ny = !1;
        var Ye = mE;
        throw mE = null, Ye;
      }
      return da(dv, ut) && e.tag !== Yl && Ko(), d = e.pendingLanes, da(d, ut) ? (mx(), e === SE ? pv++ : (pv = 0, SE = e)) : pv = 0, Wl(), Qd(), null;
    }
    function Ko() {
      if (ts !== null) {
        var e = Bs(dv), t = By(eu, e), a = Gr.transition, i = Wa();
        try {
          return Gr.transition = null, Xn(t), sD();
        } finally {
          Xn(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function lD(e) {
      yE.push(e), pc || (pc = !0, OE(xi, function() {
        return Ko(), null;
      }));
    }
    function sD() {
      if (ts === null)
        return !1;
      var e = gE;
      gE = null;
      var t = ts, a = dv;
      if (ts = null, dv = ae, (Lt & (qr | ji)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      EE = !0, ry = !1, hh(a);
      var i = Lt;
      Lt |= ji, OO(t.current), TO(t, t.current, a, e);
      {
        var o = yE;
        yE = [];
        for (var s = 0; s < o.length; s++) {
          var d = o[s];
          cO(t, d);
        }
      }
      Ls(), wR(t.current, !0), Lt = i, Wl(), ry ? t === ay ? rd++ : (rd = 0, ay = t) : rd = 0, EE = !1, ry = !1, Pu(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function bR(e) {
      return nd !== null && nd.has(e);
    }
    function cD(e) {
      nd === null ? nd = /* @__PURE__ */ new Set([e]) : nd.add(e);
    }
    function fD(e) {
      ny || (ny = !0, mE = e);
    }
    var dD = fD;
    function RR(e, t, a) {
      var i = cc(a, t), o = Eb(e, i, ut), s = Gl(e, o, ut), d = Ma();
      s !== null && (ko(s, ut, d), ei(s, d));
    }
    function bn(e, t, a) {
      if (rO(a), yv(!1), e.tag === k) {
        RR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === k) {
          RR(i, e, a);
          return;
        } else if (i.tag === _) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !bR(s)) {
            var d = cc(a, e), m = YS(i, d, ut), y = Gl(i, m, ut), b = Ma();
            y !== null && (ko(y, ut, b), ei(y, b));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function pD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Ma();
      rp(e, a), bD(e), Na === e && Do(Cr, a) && (br === ov || br === Jm && ff(Cr) && kn() - hE < sR ? vc(e, ae) : ty = St(ty, a)), ei(e, o);
    }
    function TR(e, t) {
      t === Mt && (t = QO(e));
      var a = Ma(), i = Xa(e, t);
      i !== null && (ko(i, t, a), ei(i, a));
    }
    function vD(e) {
      var t = e.memoizedState, a = Mt;
      t !== null && (a = t.retryLane), TR(e, a);
    }
    function hD(e, t) {
      var a = Mt, i;
      switch (e.tag) {
        case F:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case ze:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), TR(e, a);
    }
    function mD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : BO(e / 1960) * 1960;
    }
    function yD() {
      if (pv > YO)
        throw pv = 0, SE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rd > WO && (rd = 0, ay = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function gD() {
      ou.flushLegacyContextWarning(), ou.flushPendingUnsafeLifecycleWarnings();
    }
    function wR(e, t) {
      qt(e), sy(e, oa, jO), t && sy(e, So, PO), sy(e, oa, zO), t && sy(e, So, UO), An();
    }
    function sy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== qe ? i = i.child : ((i.flags & t) !== qe && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var cy = null;
    function _R(e) {
      {
        if ((Lt & qr) !== Er || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== z && t !== k && t !== _ && t !== M && t !== ee && t !== de && t !== ge)
          return;
        var a = ft(e) || "ReactComponent";
        if (cy !== null) {
          if (cy.has(a))
            return;
          cy.add(a);
        } else
          cy = /* @__PURE__ */ new Set([a]);
        var i = Dn;
        try {
          qt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qt(e) : An();
        }
      }
    }
    var wE;
    {
      var SD = null;
      wE = function(e, t, a) {
        var i = AR(SD, t);
        try {
          return Fb(e, t, a);
        } catch (s) {
          if (M_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), QC(), Yb(e, t), AR(t, i), t.mode & at && FS(t), go(null, Fb, null, e, t, a), Uy()) {
            var o = Ud();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var xR = !1, _E;
    _E = /* @__PURE__ */ new Set();
    function ED(e) {
      if (na && !px())
        switch (e.tag) {
          case M:
          case ee:
          case ge: {
            var t = In && ft(In) || "Unknown", a = t;
            if (!_E.has(a)) {
              _E.add(a);
              var i = ft(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case _: {
            xR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), xR = !0);
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
        var a = hu.current;
        return a !== null ? (a.push(t), xE) : Pc(e, t);
      }
    }
    function OR(e) {
      if (e !== xE)
        return uh(e);
    }
    function DR() {
      return hu.current !== null;
    }
    function CD(e) {
      {
        if (e.mode & xt) {
          if (!uR())
            return;
        } else if (!IO() || Lt !== Er || e.tag !== M && e.tag !== ee && e.tag !== ge)
          return;
        if (hu.current === null) {
          var t = Dn;
          try {
            qt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ft(e));
          } finally {
            t ? qt(e) : An();
          }
        }
      }
    }
    function bD(e) {
      e.tag !== Yl && uR() && hu.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function yv(e) {
      dR = e;
    }
    var Pi = null, ad = null, RD = function(e) {
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
                $$typeof: Me,
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
    function kR(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case _: {
            typeof i == "function" && (o = !0);
            break;
          }
          case M: {
            (typeof i == "function" || s === Ze) && (o = !0);
            break;
          }
          case ee: {
            (s === Me || s === Ze) && (o = !0);
            break;
          }
          case de:
          case ge: {
            (s === yt || s === Ze) && (o = !0);
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
    function NR(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        ad === null && (ad = /* @__PURE__ */ new WeakSet()), ad.add(e);
      }
    }
    var TD = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ko(), qo(function() {
          NE(e.current, i, a);
        });
      }
    }, wD = function(e, t) {
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
          case M:
          case ge:
          case _:
            y = m;
            break;
          case ee:
            y = m.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (y !== null) {
          var H = Pi(y);
          H !== void 0 && (a.has(H) ? T = !0 : t.has(H) && (d === _ ? T = !0 : b = !0));
        }
        if (ad !== null && (ad.has(e) || i !== null && ad.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var P = Xa(e, ut);
          P !== null && Rr(P, e, ut, pn);
        }
        o !== null && !T && NE(o, t, a), s !== null && NE(s, t, a);
      }
    }
    var _D = function(e, t) {
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
          case M:
          case ge:
          case _:
            m = d;
            break;
          case ee:
            m = d.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? xD(e, a) : i !== null && ME(i, t, a), o !== null && ME(o, t, a);
      }
    }
    function xD(e, t) {
      {
        var a = OD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case U:
              t.add(i.stateNode);
              return;
            case L:
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
    function OD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === U)
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
        var MR = Object.preventExtensions({});
      } catch {
        LE = !0;
      }
    }
    function DD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = qe, this.subtreeFlags = qe, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !LE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new DD(e, t, a, i);
    };
    function AE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function kD(e) {
      return typeof e == "function" && !AE(e) && e.defaultProps === void 0;
    }
    function ND(e) {
      if (typeof e == "function")
        return AE(e) ? _ : M;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Me)
          return ee;
        if (t === yt)
          return de;
      }
      return z;
    }
    function mc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = qe, a.subtreeFlags = qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & pr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case z:
        case M:
        case ge:
          a.type = id(e.type);
          break;
        case _:
          a.type = DE(e.type);
          break;
        case ee:
          a.type = kE(e.type);
          break;
      }
      return a;
    }
    function MD(e, t) {
      e.flags &= pr | gn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function LD(e, t, a) {
      var i;
      return e === om ? (i = xt, t === !0 && (i |= Nn, i |= $a)) : i = tt, vr && (i |= at), vi(k, null, null, i);
    }
    function zE(e, t, a, i, o, s) {
      var d = z, m = e;
      if (typeof e == "function")
        AE(e) ? (d = _, m = DE(m)) : m = id(m);
      else if (typeof e == "string")
        d = U;
      else
        e:
          switch (e) {
            case Ra:
              return as(a.children, o, s, t);
            case Ei:
              d = I, o |= Nn, (o & xt) !== tt && (o |= $a);
              break;
            case D:
              return AD(a, o, s, t);
            case mt:
              return zD(a, o, s, t);
            case Nt:
              return UD(a, o, s, t);
            case mn:
              return LR(a, o, s, t);
            case dr:
            case $n:
            case Ci:
            case el:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case se:
                    d = le;
                    break e;
                  case Ee:
                    d = oe;
                    break e;
                  case Me:
                    d = ee, m = kE(m);
                    break e;
                  case yt:
                    d = de;
                    break e;
                  case Ze:
                    d = $e, m = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? ft(i) : null;
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
    function AD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = vi(J, e, i, t | at);
      return o.elementType = D, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function zD(e, t, a, i) {
      var o = vi(F, e, i, t);
      return o.elementType = mt, o.lanes = a, o;
    }
    function UD(e, t, a, i) {
      var o = vi(ze, e, i, t);
      return o.elementType = Nt, o.lanes = a, o;
    }
    function LR(e, t, a, i) {
      var o = vi(we, e, i, t);
      o.elementType = mn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function jE(e, t, a) {
      var i = vi(j, e, null, t);
      return i.lanes = a, i;
    }
    function jD() {
      var e = vi(U, null, null, tt);
      return e.elementType = "DELETED", e;
    }
    function PD(e) {
      var t = vi(Ge, null, null, tt);
      return t.stateNode = e, t;
    }
    function PE(e, t, a) {
      var i = e.children !== null ? e.children : [], o = vi(L, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function AR(e, t) {
      return e === null && (e = vi(z, null, null, tt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function FD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Mt, this.eventTimes = pf(ae), this.expirationTimes = pf(pn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = pf(ae), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < En; d++)
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
    function zR(e, t, a, i, o, s, d, m, y, b) {
      var T = new FD(e, t, a, m, y), H = LD(t, s);
      T.current = H, H.stateNode = T;
      {
        var P = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        H.memoizedState = P;
      }
      return Wg(H), T;
    }
    var FE = "18.2.0";
    function VD(e, t, a) {
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
    function UR(e) {
      if (!e)
        return pi;
      var t = Fa(e), a = R_(t);
      if (t.tag === _) {
        var i = t.type;
        if (Xu(i))
          return lC(t, i, a);
      }
      return a;
    }
    function HD(e, t) {
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
        if (o.mode & Nn) {
          var s = ft(a) || "Component";
          if (!HE[s]) {
            HE[s] = !0;
            var d = Dn;
            try {
              qt(o), a.mode & Nn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? qt(d) : An();
            }
          }
        }
        return o.stateNode;
      }
    }
    function jR(e, t, a, i, o, s, d, m) {
      var y = !1, b = null;
      return zR(e, t, y, b, a, i, o, s, d);
    }
    function PR(e, t, a, i, o, s, d, m, y, b) {
      var T = !0, H = zR(a, i, T, e, o, s, d, m, y);
      H.context = UR(null);
      var P = H.current, q = Ma(), X = ns(P), ne = Yo(q, X);
      return ne.callback = t ?? null, Gl(P, ne, X), GO(H, X, q), H;
    }
    function gv(e, t, a, i) {
      lh(t, e);
      var o = t.current, s = Ma(), d = ns(o);
      Co(d);
      var m = UR(a);
      t.context === null ? t.context = m : t.pendingContext = m, na && Dn !== null && !VE && (VE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ft(Dn) || "Unknown"));
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
        case U:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ID(e) {
      switch (e.tag) {
        case k: {
          var t = e.stateNode;
          if (Zn(t)) {
            var a = Fy(t);
            ZO(t, a);
          }
          break;
        }
        case F: {
          qo(function() {
            var o = Xa(e, ut);
            if (o !== null) {
              var s = Ma();
              Rr(o, e, ut, s);
            }
          });
          var i = ut;
          IE(e, i);
          break;
        }
      }
    }
    function FR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Eh(a.retryLane, t));
    }
    function IE(e, t) {
      FR(e, t);
      var a = e.alternate;
      a && FR(a, t);
    }
    function BD(e) {
      if (e.tag === F) {
        var t = Rl, a = Xa(e, t);
        if (a !== null) {
          var i = Ma();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function $D(e) {
      if (e.tag === F) {
        var t = ns(e), a = Xa(e, t);
        if (a !== null) {
          var i = Ma();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function VR(e) {
      var t = ih(e);
      return t === null ? null : t.stateNode;
    }
    var HR = function(e) {
      return null;
    };
    function YD(e) {
      return HR(e);
    }
    var IR = function(e) {
      return !1;
    };
    function WD(e) {
      return IR(e);
    }
    var BR = null, $R = null, YR = null, WR = null, QR = null, GR = null, qR = null, KR = null, XR = null;
    {
      var ZR = function(e, t, a) {
        var i = t[a], o = kt(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (kt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ZR(e[i], t, a + 1), o);
      }, JR = function(e, t) {
        return ZR(e, t, 0);
      }, e1 = function(e, t, a, i) {
        var o = t[i], s = kt(e) ? e.slice() : wt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[o], kt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = e1(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, t1 = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return e1(e, t, a, 0);
      }, n1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = kt(e) ? e.slice() : wt({}, e);
        return s[o] = n1(e[o], t, a + 1, i), s;
      }, r1 = function(e, t, a) {
        return n1(e, t, 0, a);
      }, BE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      BR = function(e, t, a, i) {
        var o = BE(e, t);
        if (o !== null) {
          var s = r1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Xa(e, ut);
          d !== null && Rr(d, e, ut, pn);
        }
      }, $R = function(e, t, a) {
        var i = BE(e, t);
        if (i !== null) {
          var o = JR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = wt({}, e.memoizedProps);
          var s = Xa(e, ut);
          s !== null && Rr(s, e, ut, pn);
        }
      }, YR = function(e, t, a, i) {
        var o = BE(e, t);
        if (o !== null) {
          var s = t1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Xa(e, ut);
          d !== null && Rr(d, e, ut, pn);
        }
      }, WR = function(e, t, a) {
        e.pendingProps = r1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, ut);
        i !== null && Rr(i, e, ut, pn);
      }, QR = function(e, t) {
        e.pendingProps = JR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, ut);
        a !== null && Rr(a, e, ut, pn);
      }, GR = function(e, t, a) {
        e.pendingProps = t1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, ut);
        i !== null && Rr(i, e, ut, pn);
      }, qR = function(e) {
        var t = Xa(e, ut);
        t !== null && Rr(t, e, ut, pn);
      }, KR = function(e) {
        HR = e;
      }, XR = function(e) {
        IR = e;
      };
    }
    function QD(e) {
      var t = Ba(e);
      return t === null ? null : t.stateNode;
    }
    function GD(e) {
      return null;
    }
    function qD() {
      return Dn;
    }
    function KD(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return Yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: BR,
        overrideHookStateDeletePath: $R,
        overrideHookStateRenamePath: YR,
        overrideProps: WR,
        overridePropsDeletePath: QR,
        overridePropsRenamePath: GR,
        setErrorHandler: KR,
        setSuspenseHandler: XR,
        scheduleUpdate: qR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: QD,
        findFiberByHostInstance: t || GD,
        // React Refresh
        findHostInstancesForRefresh: _D,
        scheduleRefresh: TD,
        scheduleRoot: wD,
        setRefreshHandler: RD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: qD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: FE
      });
    }
    var a1 = typeof reportError == "function" ? (
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
          var i = VR(t.current);
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
        mR() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), qo(function() {
          gv(null, e, null, null);
        }), rC(t);
      }
    };
    function XD(e, t) {
      if (!py(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      i1(e);
      var a = !1, i = !1, o = "", s = a1;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Si && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = jR(e, om, null, a, i, o, s);
      em(d.current, e);
      var m = e.nodeType === Yn ? e.parentNode : e;
      return _p(m), new $E(d);
    }
    function dy(e) {
      this._internalRoot = e;
    }
    function ZD(e) {
      e && Oh(e);
    }
    dy.prototype.unstable_scheduleHydration = ZD;
    function JD(e, t, a) {
      if (!py(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      i1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, d = !1, m = "", y = a1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var b = PR(t, null, e, om, i, s, d, m, y);
      if (em(b.current, e), _p(e), o)
        for (var T = 0; T < o.length; T++) {
          var H = o[T];
          ox(b, H);
        }
      return new dy(b);
    }
    function py(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === li || e.nodeType === fo || !Re));
    }
    function Sv(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === li || e.nodeType === fo || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function i1(e) {
      e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), jp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ek = p.ReactCurrentOwner, u1;
    u1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = VR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = YE(e), o = !!(i && Bl(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function YE(e) {
      return e ? e.nodeType === li ? e.documentElement : e.firstChild : null;
    }
    function o1() {
    }
    function tk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var P = fy(d);
            s.call(P);
          };
        }
        var d = PR(
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
          o1
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
            var P = fy(T);
            b.call(P);
          };
        }
        var T = jR(
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
          o1
        );
        e._reactRootContainer = T, em(T.current, e);
        var H = e.nodeType === Yn ? e.parentNode : e;
        return _p(H), qo(function() {
          gv(t, T, a, i);
        }), T;
      }
    }
    function nk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vy(e, t, a, i, o) {
      u1(a), nk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = tk(a, t, e, o, i);
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
    function rk(e) {
      {
        var t = ek.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === aa ? e : HD(e, "findDOMNode");
    }
    function ak(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vy(null, e, t, !0, a);
    }
    function ik(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vy(null, e, t, !1, a);
    }
    function uk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return vy(e, t, a, !1, i);
    }
    function ok(e) {
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
            e._reactRootContainer = null, rC(e);
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
    je(ID), bh(BD), Ys($D), lp(Wa), Th(Is), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), nh(cw), Lc(bE, JO, qo);
    function lk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!py(t))
        throw new Error("Target container is not a DOM element.");
      return VD(e, t, null, a);
    }
    function sk(e, t, a, i) {
      return uk(e, t, a, i);
    }
    var WE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bl, Uf, tm, Mc, xs, bE]
    };
    function ck(e, t) {
      return WE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), XD(e, t);
    }
    function fk(e, t, a) {
      return WE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), JD(e, t, a);
    }
    function dk(e) {
      return mR() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), qo(e);
    }
    var pk = KD({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: FE,
      rendererPackageName: "react-dom"
    });
    if (!pk && Zt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var l1 = window.location.protocol;
      /^(https?|file):$/.test(l1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (l1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WE, ni.createPortal = lk, ni.createRoot = ck, ni.findDOMNode = rk, ni.flushSync = dk, ni.hydrate = ak, ni.hydrateRoot = fk, ni.render = ik, ni.unmountComponentAtNode = ok, ni.unstable_batchedUpdates = bE, ni.unstable_renderSubtreeIntoContainer = sk, ni.version = FE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ni;
}
function Z1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if ({}.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z1);
    } catch (c) {
      console.error(c);
    }
  }
}
({}).NODE_ENV === "production" ? (Z1(), s0.exports = Tk()) : s0.exports = wk();
var J1 = s0.exports, Rv = J1;
if ({}.NODE_ENV === "production")
  wv.createRoot = Rv.createRoot, wv.hydrateRoot = Rv.hydrateRoot;
else {
  var my = Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  wv.createRoot = function(c, v) {
    my.usingClientEntryPoint = !0;
    try {
      return Rv.createRoot(c, v);
    } finally {
      my.usingClientEntryPoint = !1;
    }
  }, wv.hydrateRoot = function(c, v, p) {
    my.usingClientEntryPoint = !0;
    try {
      return Rv.hydrateRoot(c, v, p);
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
var g1;
function _k() {
  if (g1)
    return qE;
  g1 = 1;
  var c = sn;
  function v(k, L) {
    return k === L && (k !== 0 || 1 / k === 1 / L) || k !== k && L !== L;
  }
  var p = typeof Object.is == "function" ? Object.is : v, E = c.useState, R = c.useEffect, w = c.useLayoutEffect, g = c.useDebugValue;
  function B(k, L) {
    var U = L(), j = E({ inst: { value: U, getSnapshot: L } }), $ = j[0].inst, I = j[1];
    return w(function() {
      $.value = U, $.getSnapshot = L, M($) && I({ inst: $ });
    }, [k, U, L]), R(function() {
      return M($) && I({ inst: $ }), k(function() {
        M($) && I({ inst: $ });
      });
    }, [k]), g(U), U;
  }
  function M(k) {
    var L = k.getSnapshot;
    k = k.value;
    try {
      var U = L();
      return !p(k, U);
    } catch {
      return !0;
    }
  }
  function _(k, L) {
    return L();
  }
  var z = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : B;
  return qE.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : z, qE;
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
var S1;
function xk() {
  return S1 || (S1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = sn, v = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(ee) {
      {
        for (var J = arguments.length, F = new Array(J > 1 ? J - 1 : 0), de = 1; de < J; de++)
          F[de - 1] = arguments[de];
        E("error", ee, F);
      }
    }
    function E(ee, J, F) {
      {
        var de = v.ReactDebugCurrentFrame, ge = de.getStackAddendum();
        ge !== "" && (J += "%s", F = F.concat([ge]));
        var $e = F.map(function(Ke) {
          return String(Ke);
        });
        $e.unshift("Warning: " + J), Function.prototype.apply.call(console[ee], console, $e);
      }
    }
    function R(ee, J) {
      return ee === J && (ee !== 0 || 1 / ee === 1 / J) || ee !== ee && J !== J;
    }
    var w = typeof Object.is == "function" ? Object.is : R, g = c.useState, B = c.useEffect, M = c.useLayoutEffect, _ = c.useDebugValue, z = !1, k = !1;
    function L(ee, J, F) {
      z || c.startTransition !== void 0 && (z = !0, p("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var de = J();
      if (!k) {
        var ge = J();
        w(de, ge) || (p("The result of getSnapshot should be cached to avoid an infinite loop"), k = !0);
      }
      var $e = g({
        inst: {
          value: de,
          getSnapshot: J
        }
      }), Ke = $e[0].inst, Ge = $e[1];
      return M(function() {
        Ke.value = de, Ke.getSnapshot = J, U(Ke) && Ge({
          inst: Ke
        });
      }, [ee, de, J]), B(function() {
        U(Ke) && Ge({
          inst: Ke
        });
        var ze = function() {
          U(Ke) && Ge({
            inst: Ke
          });
        };
        return ee(ze);
      }, [ee]), _(de), de;
    }
    function U(ee) {
      var J = ee.getSnapshot, F = ee.value;
      try {
        var de = J();
        return !w(F, de);
      } catch {
        return !0;
      }
    }
    function j(ee, J, F) {
      return J();
    }
    var $ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I = !$, oe = I ? j : L, le = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : oe;
    KE.useSyncExternalStore = le, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), KE;
}
({}).NODE_ENV === "production" ? c0.exports = _k() : c0.exports = xk();
var eT = c0.exports, f0 = { exports: {} }, XE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E1;
function Ok() {
  if (E1)
    return XE;
  E1 = 1;
  var c = sn, v = eT;
  function p(_, z) {
    return _ === z && (_ !== 0 || 1 / _ === 1 / z) || _ !== _ && z !== z;
  }
  var E = typeof Object.is == "function" ? Object.is : p, R = v.useSyncExternalStore, w = c.useRef, g = c.useEffect, B = c.useMemo, M = c.useDebugValue;
  return XE.useSyncExternalStoreWithSelector = function(_, z, k, L, U) {
    var j = w(null);
    if (j.current === null) {
      var $ = { hasValue: !1, value: null };
      j.current = $;
    } else
      $ = j.current;
    j = B(function() {
      function oe(de) {
        if (!le) {
          if (le = !0, ee = de, de = L(de), U !== void 0 && $.hasValue) {
            var ge = $.value;
            if (U(ge, de))
              return J = ge;
          }
          return J = de;
        }
        if (ge = J, E(ee, de))
          return ge;
        var $e = L(de);
        return U !== void 0 && U(ge, $e) ? ge : (ee = de, J = $e);
      }
      var le = !1, ee, J, F = k === void 0 ? null : k;
      return [function() {
        return oe(z());
      }, F === null ? void 0 : function() {
        return oe(F());
      }];
    }, [z, k, L, U]);
    var I = R(_, j[0], j[1]);
    return g(function() {
      $.hasValue = !0, $.value = I;
    }, [I]), M(I), I;
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
var C1;
function Dk() {
  return C1 || (C1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = sn, v = eT;
    function p(z, k) {
      return z === k && (z !== 0 || 1 / z === 1 / k) || z !== z && k !== k;
    }
    var E = typeof Object.is == "function" ? Object.is : p, R = v.useSyncExternalStore, w = c.useRef, g = c.useEffect, B = c.useMemo, M = c.useDebugValue;
    function _(z, k, L, U, j) {
      var $ = w(null), I;
      $.current === null ? (I = {
        hasValue: !1,
        value: null
      }, $.current = I) : I = $.current;
      var oe = B(function() {
        var F = !1, de, ge, $e = function(ot) {
          if (!F) {
            F = !0, de = ot;
            var we = U(ot);
            if (j !== void 0 && I.hasValue) {
              var Ue = I.value;
              if (j(Ue, we))
                return ge = Ue, Ue;
            }
            return ge = we, we;
          }
          var Rt = de, Et = ge;
          if (E(Rt, ot))
            return Et;
          var xe = U(ot);
          return j !== void 0 && j(Et, xe) ? Et : (de = ot, ge = xe, xe);
        }, Ke = L === void 0 ? null : L, Ge = function() {
          return $e(k());
        }, ze = Ke === null ? void 0 : function() {
          return $e(Ke());
        };
        return [Ge, ze];
      }, [k, L, U, j]), le = oe[0], ee = oe[1], J = R(z, le, ee);
      return g(function() {
        I.hasValue = !0, I.value = J;
      }, [J]), M(J), J;
    }
    ZE.useSyncExternalStoreWithSelector = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ZE;
}
({}).NODE_ENV === "production" ? f0.exports = Ok() : f0.exports = Dk();
var kk = f0.exports;
function Nk(c) {
  c();
}
let tT = Nk;
const Mk = (c) => tT = c, Lk = () => tT, b1 = Symbol.for("react-redux-context"), R1 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ak() {
  var c;
  if (!sn.createContext)
    return {};
  const v = (c = R1[b1]) != null ? c : R1[b1] = /* @__PURE__ */ new Map();
  let p = v.get(sn.createContext);
  return p || (p = sn.createContext(null), {}.NODE_ENV !== "production" && (p.displayName = "ReactRedux"), v.set(sn.createContext, p)), p;
}
const ss = /* @__PURE__ */ Ak();
function E0(c = ss) {
  return function() {
    const p = sn.useContext(c);
    if ({}.NODE_ENV !== "production" && !p)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return p;
  };
}
const nT = /* @__PURE__ */ E0(), zk = () => {
  throw new Error("uSES not initialized!");
};
let rT = zk;
const Uk = (c) => {
  rT = c;
}, jk = (c, v) => c === v;
function Pk(c = ss) {
  const v = c === ss ? nT : E0(c);
  return function(E, R = {}) {
    const {
      equalityFn: w = jk,
      stabilityCheck: g = void 0,
      noopCheck: B = void 0
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
      store: M,
      subscription: _,
      getServerState: z,
      stabilityCheck: k,
      noopCheck: L
    } = v(), U = sn.useRef(!0), j = sn.useCallback({
      [E.name](I) {
        const oe = E(I);
        if ({}.NODE_ENV !== "production") {
          const le = typeof g > "u" ? k : g;
          if (le === "always" || le === "once" && U.current) {
            const J = E(I);
            if (!w(oe, J)) {
              let F;
              try {
                throw new Error();
              } catch (de) {
                ({
                  stack: F
                } = de);
              }
              console.warn("Selector " + (E.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: I,
                selected: oe,
                selected2: J,
                stack: F
              });
            }
          }
          const ee = typeof B > "u" ? L : B;
          if ((ee === "always" || ee === "once" && U.current) && oe === I) {
            let J;
            try {
              throw new Error();
            } catch (F) {
              ({
                stack: J
              } = F);
            }
            console.warn("Selector " + (E.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: J
            });
          }
          U.current && (U.current = !1);
        }
        return oe;
      }
    }[E.name], [E, k, g]), $ = rT(_.addNestedSub, M.getState, z || M.getState, j, w);
    return sn.useDebugValue($), $;
  };
}
const fs = /* @__PURE__ */ Pk();
var d0 = { exports: {} }, an = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T1;
function Fk() {
  if (T1)
    return an;
  T1 = 1;
  var c = typeof Symbol == "function" && Symbol.for, v = c ? Symbol.for("react.element") : 60103, p = c ? Symbol.for("react.portal") : 60106, E = c ? Symbol.for("react.fragment") : 60107, R = c ? Symbol.for("react.strict_mode") : 60108, w = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, B = c ? Symbol.for("react.context") : 60110, M = c ? Symbol.for("react.async_mode") : 60111, _ = c ? Symbol.for("react.concurrent_mode") : 60111, z = c ? Symbol.for("react.forward_ref") : 60112, k = c ? Symbol.for("react.suspense") : 60113, L = c ? Symbol.for("react.suspense_list") : 60120, U = c ? Symbol.for("react.memo") : 60115, j = c ? Symbol.for("react.lazy") : 60116, $ = c ? Symbol.for("react.block") : 60121, I = c ? Symbol.for("react.fundamental") : 60117, oe = c ? Symbol.for("react.responder") : 60118, le = c ? Symbol.for("react.scope") : 60119;
  function ee(F) {
    if (typeof F == "object" && F !== null) {
      var de = F.$$typeof;
      switch (de) {
        case v:
          switch (F = F.type, F) {
            case M:
            case _:
            case E:
            case w:
            case R:
            case k:
              return F;
            default:
              switch (F = F && F.$$typeof, F) {
                case B:
                case z:
                case j:
                case U:
                case g:
                  return F;
                default:
                  return de;
              }
          }
        case p:
          return de;
      }
    }
  }
  function J(F) {
    return ee(F) === _;
  }
  return an.AsyncMode = M, an.ConcurrentMode = _, an.ContextConsumer = B, an.ContextProvider = g, an.Element = v, an.ForwardRef = z, an.Fragment = E, an.Lazy = j, an.Memo = U, an.Portal = p, an.Profiler = w, an.StrictMode = R, an.Suspense = k, an.isAsyncMode = function(F) {
    return J(F) || ee(F) === M;
  }, an.isConcurrentMode = J, an.isContextConsumer = function(F) {
    return ee(F) === B;
  }, an.isContextProvider = function(F) {
    return ee(F) === g;
  }, an.isElement = function(F) {
    return typeof F == "object" && F !== null && F.$$typeof === v;
  }, an.isForwardRef = function(F) {
    return ee(F) === z;
  }, an.isFragment = function(F) {
    return ee(F) === E;
  }, an.isLazy = function(F) {
    return ee(F) === j;
  }, an.isMemo = function(F) {
    return ee(F) === U;
  }, an.isPortal = function(F) {
    return ee(F) === p;
  }, an.isProfiler = function(F) {
    return ee(F) === w;
  }, an.isStrictMode = function(F) {
    return ee(F) === R;
  }, an.isSuspense = function(F) {
    return ee(F) === k;
  }, an.isValidElementType = function(F) {
    return typeof F == "string" || typeof F == "function" || F === E || F === _ || F === w || F === R || F === k || F === L || typeof F == "object" && F !== null && (F.$$typeof === j || F.$$typeof === U || F.$$typeof === g || F.$$typeof === B || F.$$typeof === z || F.$$typeof === I || F.$$typeof === oe || F.$$typeof === le || F.$$typeof === $);
  }, an.typeOf = ee, an;
}
var un = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1;
function Vk() {
  return w1 || (w1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, v = c ? Symbol.for("react.element") : 60103, p = c ? Symbol.for("react.portal") : 60106, E = c ? Symbol.for("react.fragment") : 60107, R = c ? Symbol.for("react.strict_mode") : 60108, w = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, B = c ? Symbol.for("react.context") : 60110, M = c ? Symbol.for("react.async_mode") : 60111, _ = c ? Symbol.for("react.concurrent_mode") : 60111, z = c ? Symbol.for("react.forward_ref") : 60112, k = c ? Symbol.for("react.suspense") : 60113, L = c ? Symbol.for("react.suspense_list") : 60120, U = c ? Symbol.for("react.memo") : 60115, j = c ? Symbol.for("react.lazy") : 60116, $ = c ? Symbol.for("react.block") : 60121, I = c ? Symbol.for("react.fundamental") : 60117, oe = c ? Symbol.for("react.responder") : 60118, le = c ? Symbol.for("react.scope") : 60119;
    function ee(De) {
      return typeof De == "string" || typeof De == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      De === E || De === _ || De === w || De === R || De === k || De === L || typeof De == "object" && De !== null && (De.$$typeof === j || De.$$typeof === U || De.$$typeof === g || De.$$typeof === B || De.$$typeof === z || De.$$typeof === I || De.$$typeof === oe || De.$$typeof === le || De.$$typeof === $);
    }
    function J(De) {
      if (typeof De == "object" && De !== null) {
        var Zt = De.$$typeof;
        switch (Zt) {
          case v:
            var _e = De.type;
            switch (_e) {
              case M:
              case _:
              case E:
              case w:
              case R:
              case k:
                return _e;
              default:
                var vn = _e && _e.$$typeof;
                switch (vn) {
                  case B:
                  case z:
                  case j:
                  case U:
                  case g:
                    return vn;
                  default:
                    return Zt;
                }
            }
          case p:
            return Zt;
        }
      }
    }
    var F = M, de = _, ge = B, $e = g, Ke = v, Ge = z, ze = E, ot = j, we = U, Ue = p, Rt = w, Et = R, xe = k, he = !1;
    function He(De) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(De) || J(De) === M;
    }
    function N(De) {
      return J(De) === _;
    }
    function ue(De) {
      return J(De) === B;
    }
    function Re(De) {
      return J(De) === g;
    }
    function it(De) {
      return typeof De == "object" && De !== null && De.$$typeof === v;
    }
    function Xe(De) {
      return J(De) === z;
    }
    function Tt(De) {
      return J(De) === E;
    }
    function pt(De) {
      return J(De) === j;
    }
    function Ct(De) {
      return J(De) === U;
    }
    function vt(De) {
      return J(De) === p;
    }
    function Ut(De) {
      return J(De) === w;
    }
    function tr(De) {
      return J(De) === R;
    }
    function Bn(De) {
      return J(De) === k;
    }
    un.AsyncMode = F, un.ConcurrentMode = de, un.ContextConsumer = ge, un.ContextProvider = $e, un.Element = Ke, un.ForwardRef = Ge, un.Fragment = ze, un.Lazy = ot, un.Memo = we, un.Portal = Ue, un.Profiler = Rt, un.StrictMode = Et, un.Suspense = xe, un.isAsyncMode = He, un.isConcurrentMode = N, un.isContextConsumer = ue, un.isContextProvider = Re, un.isElement = it, un.isForwardRef = Xe, un.isFragment = Tt, un.isLazy = pt, un.isMemo = Ct, un.isPortal = vt, un.isProfiler = Ut, un.isStrictMode = tr, un.isSuspense = Bn, un.isValidElementType = ee, un.typeOf = J;
  }()), un;
}
({}).NODE_ENV === "production" ? d0.exports = Fk() : d0.exports = Vk();
var Hk = d0.exports, aT = Hk, Ik = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, iT = {};
iT[aT.ForwardRef] = Ik;
iT[aT.Memo] = Bk;
var on = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1;
function $k() {
  if (_1)
    return on;
  _1 = 1;
  var c = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), B = Symbol.for("react.server_context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), j;
  j = Symbol.for("react.module.reference");
  function $(I) {
    if (typeof I == "object" && I !== null) {
      var oe = I.$$typeof;
      switch (oe) {
        case c:
          switch (I = I.type, I) {
            case p:
            case R:
            case E:
            case _:
            case z:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case B:
                case g:
                case M:
                case L:
                case k:
                case w:
                  return I;
                default:
                  return oe;
              }
          }
        case v:
          return oe;
      }
    }
  }
  return on.ContextConsumer = g, on.ContextProvider = w, on.Element = c, on.ForwardRef = M, on.Fragment = p, on.Lazy = L, on.Memo = k, on.Portal = v, on.Profiler = R, on.StrictMode = E, on.Suspense = _, on.SuspenseList = z, on.isAsyncMode = function() {
    return !1;
  }, on.isConcurrentMode = function() {
    return !1;
  }, on.isContextConsumer = function(I) {
    return $(I) === g;
  }, on.isContextProvider = function(I) {
    return $(I) === w;
  }, on.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === c;
  }, on.isForwardRef = function(I) {
    return $(I) === M;
  }, on.isFragment = function(I) {
    return $(I) === p;
  }, on.isLazy = function(I) {
    return $(I) === L;
  }, on.isMemo = function(I) {
    return $(I) === k;
  }, on.isPortal = function(I) {
    return $(I) === v;
  }, on.isProfiler = function(I) {
    return $(I) === R;
  }, on.isStrictMode = function(I) {
    return $(I) === E;
  }, on.isSuspense = function(I) {
    return $(I) === _;
  }, on.isSuspenseList = function(I) {
    return $(I) === z;
  }, on.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === p || I === R || I === E || I === _ || I === z || I === U || typeof I == "object" && I !== null && (I.$$typeof === L || I.$$typeof === k || I.$$typeof === w || I.$$typeof === g || I.$$typeof === M || I.$$typeof === j || I.getModuleId !== void 0);
  }, on.typeOf = $, on;
}
var ln = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x1;
function Yk() {
  return x1 || (x1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), B = Symbol.for("react.server_context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), j = !1, $ = !1, I = !1, oe = !1, le = !1, ee;
    ee = Symbol.for("react.module.reference");
    function J(_e) {
      return !!(typeof _e == "string" || typeof _e == "function" || _e === p || _e === R || le || _e === E || _e === _ || _e === z || oe || _e === U || j || $ || I || typeof _e == "object" && _e !== null && (_e.$$typeof === L || _e.$$typeof === k || _e.$$typeof === w || _e.$$typeof === g || _e.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _e.$$typeof === ee || _e.getModuleId !== void 0));
    }
    function F(_e) {
      if (typeof _e == "object" && _e !== null) {
        var vn = _e.$$typeof;
        switch (vn) {
          case c:
            var Rn = _e.type;
            switch (Rn) {
              case p:
              case R:
              case E:
              case _:
              case z:
                return Rn;
              default:
                var Tn = Rn && Rn.$$typeof;
                switch (Tn) {
                  case B:
                  case g:
                  case M:
                  case L:
                  case k:
                  case w:
                    return Tn;
                  default:
                    return vn;
                }
            }
          case v:
            return vn;
        }
      }
    }
    var de = g, ge = w, $e = c, Ke = M, Ge = p, ze = L, ot = k, we = v, Ue = R, Rt = E, Et = _, xe = z, he = !1, He = !1;
    function N(_e) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(_e) {
      return He || (He = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Re(_e) {
      return F(_e) === g;
    }
    function it(_e) {
      return F(_e) === w;
    }
    function Xe(_e) {
      return typeof _e == "object" && _e !== null && _e.$$typeof === c;
    }
    function Tt(_e) {
      return F(_e) === M;
    }
    function pt(_e) {
      return F(_e) === p;
    }
    function Ct(_e) {
      return F(_e) === L;
    }
    function vt(_e) {
      return F(_e) === k;
    }
    function Ut(_e) {
      return F(_e) === v;
    }
    function tr(_e) {
      return F(_e) === R;
    }
    function Bn(_e) {
      return F(_e) === E;
    }
    function De(_e) {
      return F(_e) === _;
    }
    function Zt(_e) {
      return F(_e) === z;
    }
    ln.ContextConsumer = de, ln.ContextProvider = ge, ln.Element = $e, ln.ForwardRef = Ke, ln.Fragment = Ge, ln.Lazy = ze, ln.Memo = ot, ln.Portal = we, ln.Profiler = Ue, ln.StrictMode = Rt, ln.Suspense = Et, ln.SuspenseList = xe, ln.isAsyncMode = N, ln.isConcurrentMode = ue, ln.isContextConsumer = Re, ln.isContextProvider = it, ln.isElement = Xe, ln.isForwardRef = Tt, ln.isFragment = pt, ln.isLazy = Ct, ln.isMemo = vt, ln.isPortal = Ut, ln.isProfiler = tr, ln.isStrictMode = Bn, ln.isSuspense = De, ln.isSuspenseList = Zt, ln.isValidElementType = J, ln.typeOf = F;
  }()), ln;
}
({}).NODE_ENV === "production" ? $k() : Yk();
function Wk() {
  const c = Lk();
  let v = null, p = null;
  return {
    clear() {
      v = null, p = null;
    },
    notify() {
      c(() => {
        let E = v;
        for (; E; )
          E.callback(), E = E.next;
      });
    },
    get() {
      let E = [], R = v;
      for (; R; )
        E.push(R), R = R.next;
      return E;
    },
    subscribe(E) {
      let R = !0, w = p = {
        callback: E,
        next: null,
        prev: p
      };
      return w.prev ? w.prev.next = w : v = w, function() {
        !R || v === null || (R = !1, w.next ? w.next.prev = w.prev : p = w.prev, w.prev ? w.prev.next = w.next : v = w.next);
      };
    }
  };
}
const O1 = {
  notify() {
  },
  get: () => []
};
function Qk(c, v) {
  let p, E = O1, R = 0, w = !1;
  function g($) {
    z();
    const I = E.subscribe($);
    let oe = !1;
    return () => {
      oe || (oe = !0, I(), k());
    };
  }
  function B() {
    E.notify();
  }
  function M() {
    j.onStateChange && j.onStateChange();
  }
  function _() {
    return w;
  }
  function z() {
    R++, p || (p = v ? v.addNestedSub(M) : c.subscribe(M), E = Wk());
  }
  function k() {
    R--, p && R === 0 && (p(), p = void 0, E.clear(), E = O1);
  }
  function L() {
    w || (w = !0, z());
  }
  function U() {
    w && (w = !1, k());
  }
  const j = {
    addNestedSub: g,
    notifyNestedSubs: B,
    handleChangeWrapper: M,
    isSubscribed: _,
    trySubscribe: L,
    tryUnsubscribe: U,
    getListeners: () => E
  };
  return j;
}
const Gk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qk = Gk ? sn.useLayoutEffect : sn.useEffect;
function Kk({
  store: c,
  context: v,
  children: p,
  serverState: E,
  stabilityCheck: R = "once",
  noopCheck: w = "once"
}) {
  const g = sn.useMemo(() => {
    const _ = Qk(c);
    return {
      store: c,
      subscription: _,
      getServerState: E ? () => E : void 0,
      stabilityCheck: R,
      noopCheck: w
    };
  }, [c, E, R, w]), B = sn.useMemo(() => c.getState(), [c]);
  qk(() => {
    const {
      subscription: _
    } = g;
    return _.onStateChange = _.notifyNestedSubs, _.trySubscribe(), B !== c.getState() && _.notifyNestedSubs(), () => {
      _.tryUnsubscribe(), _.onStateChange = void 0;
    };
  }, [g, B]);
  const M = v || ss;
  return /* @__PURE__ */ sn.createElement(M.Provider, {
    value: g
  }, p);
}
function uT(c = ss) {
  const v = (
    // @ts-ignore
    c === ss ? nT : (
      // @ts-ignore
      E0(c)
    )
  );
  return function() {
    const {
      store: E
    } = v();
    return E;
  };
}
const Xk = /* @__PURE__ */ uT();
function Zk(c = ss) {
  const v = (
    // @ts-ignore
    c === ss ? Xk : uT(c)
  );
  return function() {
    return v().dispatch;
  };
}
const ds = /* @__PURE__ */ Zk();
Uk(kk.useSyncExternalStoreWithSelector);
Mk(J1.unstable_batchedUpdates);
function Ar(c) {
  for (var v = arguments.length, p = Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
    p[E - 1] = arguments[E];
  if ({}.NODE_ENV !== "production") {
    var R = oN[c], w = R ? typeof R == "function" ? R.apply(null, p) : R : "unknown error nr: " + c;
    throw Error("[Immer] " + w);
  }
  throw Error("[Immer] minified error nr: " + c + (p.length ? " " + p.map(function(g) {
    return "'" + g + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function cs(c) {
  return !!c && !!c[Pn];
}
function Zo(c) {
  var v;
  return !!c && (function(p) {
    if (!p || typeof p != "object")
      return !1;
    var E = Object.getPrototypeOf(p);
    if (E === null)
      return !0;
    var R = Object.hasOwnProperty.call(E, "constructor") && E.constructor;
    return R === Object || typeof R == "function" && Function.toString.call(R) === lN;
  }(c) || Array.isArray(c) || !!c[z1] || !!(!((v = c.constructor) === null || v === void 0) && v[z1]) || C0(c) || b0(c));
}
function Sc(c, v, p) {
  p === void 0 && (p = !1), fd(c) === 0 ? (p ? Object.keys : ld)(c).forEach(function(E) {
    p && typeof E == "symbol" || v(E, c[E], c);
  }) : c.forEach(function(E, R) {
    return v(R, E, c);
  });
}
function fd(c) {
  var v = c[Pn];
  return v ? v.i > 3 ? v.i - 4 : v.i : Array.isArray(c) ? 1 : C0(c) ? 2 : b0(c) ? 3 : 0;
}
function od(c, v) {
  return fd(c) === 2 ? c.has(v) : Object.prototype.hasOwnProperty.call(c, v);
}
function Jk(c, v) {
  return fd(c) === 2 ? c.get(v) : c[v];
}
function oT(c, v, p) {
  var E = fd(c);
  E === 2 ? c.set(v, p) : E === 3 ? c.add(p) : c[v] = p;
}
function lT(c, v) {
  return c === v ? c !== 0 || 1 / c == 1 / v : c != c && v != v;
}
function C0(c) {
  return iN && c instanceof Map;
}
function b0(c) {
  return uN && c instanceof Set;
}
function is(c) {
  return c.o || c.t;
}
function R0(c) {
  if (Array.isArray(c))
    return Array.prototype.slice.call(c);
  var v = cT(c);
  delete v[Pn];
  for (var p = ld(v), E = 0; E < p.length; E++) {
    var R = p[E], w = v[R];
    w.writable === !1 && (w.writable = !0, w.configurable = !0), (w.get || w.set) && (v[R] = { configurable: !0, writable: !0, enumerable: w.enumerable, value: c[R] });
  }
  return Object.create(Object.getPrototypeOf(c), v);
}
function T0(c, v) {
  return v === void 0 && (v = !1), w0(c) || cs(c) || !Zo(c) || (fd(c) > 1 && (c.set = c.add = c.clear = c.delete = eN), Object.freeze(c), v && Sc(c, function(p, E) {
    return T0(E, !0);
  }, !0)), c;
}
function eN() {
  Ar(2);
}
function w0(c) {
  return c == null || typeof c != "object" || Object.isFrozen(c);
}
function uo(c) {
  var v = m0[c];
  return v || Ar(18, c), v;
}
function tN(c, v) {
  m0[c] || (m0[c] = v);
}
function p0() {
  return {}.NODE_ENV === "production" || sd || Ar(0), sd;
}
function JE(c, v) {
  v && (uo("Patches"), c.u = [], c.s = [], c.v = v);
}
function gy(c) {
  v0(c), c.p.forEach(nN), c.p = null;
}
function v0(c) {
  c === sd && (sd = c.l);
}
function D1(c) {
  return sd = { p: [], l: sd, h: c, m: !0, _: 0 };
}
function nN(c) {
  var v = c[Pn];
  v.i === 0 || v.i === 1 ? v.j() : v.g = !0;
}
function e0(c, v) {
  v._ = v.p.length;
  var p = v.p[0], E = c !== void 0 && c !== p;
  return v.h.O || uo("ES5").S(v, c, E), E ? (p[Pn].P && (gy(v), Ar(4)), Zo(c) && (c = Sy(v, c), v.l || Ey(v, c)), v.u && uo("Patches").M(p[Pn].t, c, v.u, v.s)) : c = Sy(v, p, []), gy(v), v.u && v.v(v.u, v.s), c !== sT ? c : void 0;
}
function Sy(c, v, p) {
  if (w0(v))
    return v;
  var E = v[Pn];
  if (!E)
    return Sc(v, function(B, M) {
      return k1(c, E, v, B, M, p);
    }, !0), v;
  if (E.A !== c)
    return v;
  if (!E.P)
    return Ey(c, E.t, !0), E.t;
  if (!E.I) {
    E.I = !0, E.A._--;
    var R = E.i === 4 || E.i === 5 ? E.o = R0(E.k) : E.o, w = R, g = !1;
    E.i === 3 && (w = new Set(R), R.clear(), g = !0), Sc(w, function(B, M) {
      return k1(c, E, R, B, M, p, g);
    }), Ey(c, R, !1), p && c.u && uo("Patches").N(E, p, c.u, c.s);
  }
  return E.o;
}
function k1(c, v, p, E, R, w, g) {
  if ({}.NODE_ENV !== "production" && R === p && Ar(5), cs(R)) {
    var B = Sy(c, R, w && v && v.i !== 3 && !od(v.R, E) ? w.concat(E) : void 0);
    if (oT(p, E, B), !cs(B))
      return;
    c.m = !1;
  } else
    g && p.add(R);
  if (Zo(R) && !w0(R)) {
    if (!c.h.D && c._ < 1)
      return;
    Sy(c, R), v && v.A.l || Ey(c, R);
  }
}
function Ey(c, v, p) {
  p === void 0 && (p = !1), !c.l && c.h.D && c.m && T0(v, p);
}
function t0(c, v) {
  var p = c[Pn];
  return (p ? is(p) : c)[v];
}
function N1(c, v) {
  if (v in c)
    for (var p = Object.getPrototypeOf(c); p; ) {
      var E = Object.getOwnPropertyDescriptor(p, v);
      if (E)
        return E;
      p = Object.getPrototypeOf(p);
    }
}
function us(c) {
  c.P || (c.P = !0, c.l && us(c.l));
}
function n0(c) {
  c.o || (c.o = R0(c.t));
}
function h0(c, v, p) {
  var E = C0(v) ? uo("MapSet").F(v, p) : b0(v) ? uo("MapSet").T(v, p) : c.O ? function(R, w) {
    var g = Array.isArray(R), B = { i: g ? 1 : 0, A: w ? w.A : p0(), P: !1, I: !1, R: {}, l: w, t: R, k: null, o: null, j: null, C: !1 }, M = B, _ = xv;
    g && (M = [B], _ = _v);
    var z = Proxy.revocable(M, _), k = z.revoke, L = z.proxy;
    return B.k = L, B.j = k, L;
  }(v, p) : uo("ES5").J(v, p);
  return (p ? p.A : p0()).p.push(E), E;
}
function rN(c) {
  return cs(c) || Ar(22, c), function v(p) {
    if (!Zo(p))
      return p;
    var E, R = p[Pn], w = fd(p);
    if (R) {
      if (!R.P && (R.i < 4 || !uo("ES5").K(R)))
        return R.t;
      R.I = !0, E = M1(p, w), R.I = !1;
    } else
      E = M1(p, w);
    return Sc(E, function(g, B) {
      R && Jk(R.t, g) === B || oT(E, g, v(B));
    }), w === 3 ? new Set(E) : E;
  }(c);
}
function M1(c, v) {
  switch (v) {
    case 2:
      return new Map(c);
    case 3:
      return Array.from(c);
  }
  return R0(c);
}
function aN() {
  function c(g, B) {
    var M = w[g];
    return M ? M.enumerable = B : w[g] = M = { configurable: !0, enumerable: B, get: function() {
      var _ = this[Pn];
      return {}.NODE_ENV !== "production" && R(_), xv.get(_, g);
    }, set: function(_) {
      var z = this[Pn];
      ({}).NODE_ENV !== "production" && R(z), xv.set(z, g, _);
    } }, M;
  }
  function v(g) {
    for (var B = g.length - 1; B >= 0; B--) {
      var M = g[B][Pn];
      if (!M.P)
        switch (M.i) {
          case 5:
            E(M) && us(M);
            break;
          case 4:
            p(M) && us(M);
        }
    }
  }
  function p(g) {
    for (var B = g.t, M = g.k, _ = ld(M), z = _.length - 1; z >= 0; z--) {
      var k = _[z];
      if (k !== Pn) {
        var L = B[k];
        if (L === void 0 && !od(B, k))
          return !0;
        var U = M[k], j = U && U[Pn];
        if (j ? j.t !== L : !lT(U, L))
          return !0;
      }
    }
    var $ = !!B[Pn];
    return _.length !== ld(B).length + ($ ? 0 : 1);
  }
  function E(g) {
    var B = g.k;
    if (B.length !== g.t.length)
      return !0;
    var M = Object.getOwnPropertyDescriptor(B, B.length - 1);
    if (M && !M.get)
      return !0;
    for (var _ = 0; _ < B.length; _++)
      if (!B.hasOwnProperty(_))
        return !0;
    return !1;
  }
  function R(g) {
    g.g && Ar(3, JSON.stringify(is(g)));
  }
  var w = {};
  tN("ES5", { J: function(g, B) {
    var M = Array.isArray(g), _ = function(k, L) {
      if (k) {
        for (var U = Array(L.length), j = 0; j < L.length; j++)
          Object.defineProperty(U, "" + j, c(j, !0));
        return U;
      }
      var $ = cT(L);
      delete $[Pn];
      for (var I = ld($), oe = 0; oe < I.length; oe++) {
        var le = I[oe];
        $[le] = c(le, k || !!$[le].enumerable);
      }
      return Object.create(Object.getPrototypeOf(L), $);
    }(M, g), z = { i: M ? 5 : 4, A: B ? B.A : p0(), P: !1, I: !1, R: {}, l: B, t: g, k: _, o: null, g: !1, C: !1 };
    return Object.defineProperty(_, Pn, { value: z, writable: !0 }), _;
  }, S: function(g, B, M) {
    M ? cs(B) && B[Pn].A === g && v(g.p) : (g.u && function _(z) {
      if (z && typeof z == "object") {
        var k = z[Pn];
        if (k) {
          var L = k.t, U = k.k, j = k.R, $ = k.i;
          if ($ === 4)
            Sc(U, function(J) {
              J !== Pn && (L[J] !== void 0 || od(L, J) ? j[J] || _(U[J]) : (j[J] = !0, us(k)));
            }), Sc(L, function(J) {
              U[J] !== void 0 || od(U, J) || (j[J] = !1, us(k));
            });
          else if ($ === 5) {
            if (E(k) && (us(k), j.length = !0), U.length < L.length)
              for (var I = U.length; I < L.length; I++)
                j[I] = !1;
            else
              for (var oe = L.length; oe < U.length; oe++)
                j[oe] = !0;
            for (var le = Math.min(U.length, L.length), ee = 0; ee < le; ee++)
              U.hasOwnProperty(ee) || (j[ee] = !0), j[ee] === void 0 && _(U[ee]);
          }
        }
      }
    }(g.p[0]), v(g.p));
  }, K: function(g) {
    return g.i === 4 ? p(g) : E(g);
  } });
}
var L1, sd, _0 = typeof Symbol < "u" && typeof Symbol("x") == "symbol", iN = typeof Map < "u", uN = typeof Set < "u", A1 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", sT = _0 ? Symbol.for("immer-nothing") : ((L1 = {})["immer-nothing"] = !0, L1), z1 = _0 ? Symbol.for("immer-draftable") : "__$immer_draftable", Pn = _0 ? Symbol.for("immer-state") : "__$immer_state", oN = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(c) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, lN = "" + Object.prototype.constructor, ld = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(c) {
  return Object.getOwnPropertyNames(c).concat(Object.getOwnPropertySymbols(c));
} : Object.getOwnPropertyNames, cT = Object.getOwnPropertyDescriptors || function(c) {
  var v = {};
  return ld(c).forEach(function(p) {
    v[p] = Object.getOwnPropertyDescriptor(c, p);
  }), v;
}, m0 = {}, xv = { get: function(c, v) {
  if (v === Pn)
    return c;
  var p = is(c);
  if (!od(p, v))
    return function(R, w, g) {
      var B, M = N1(w, g);
      return M ? "value" in M ? M.value : (B = M.get) === null || B === void 0 ? void 0 : B.call(R.k) : void 0;
    }(c, p, v);
  var E = p[v];
  return c.I || !Zo(E) ? E : E === t0(c.t, v) ? (n0(c), c.o[v] = h0(c.A.h, E, c)) : E;
}, has: function(c, v) {
  return v in is(c);
}, ownKeys: function(c) {
  return Reflect.ownKeys(is(c));
}, set: function(c, v, p) {
  var E = N1(is(c), v);
  if (E != null && E.set)
    return E.set.call(c.k, p), !0;
  if (!c.P) {
    var R = t0(is(c), v), w = R == null ? void 0 : R[Pn];
    if (w && w.t === p)
      return c.o[v] = p, c.R[v] = !1, !0;
    if (lT(p, R) && (p !== void 0 || od(c.t, v)))
      return !0;
    n0(c), us(c);
  }
  return c.o[v] === p && (p !== void 0 || v in c.o) || Number.isNaN(p) && Number.isNaN(c.o[v]) || (c.o[v] = p, c.R[v] = !0), !0;
}, deleteProperty: function(c, v) {
  return t0(c.t, v) !== void 0 || v in c.t ? (c.R[v] = !1, n0(c), us(c)) : delete c.R[v], c.o && delete c.o[v], !0;
}, getOwnPropertyDescriptor: function(c, v) {
  var p = is(c), E = Reflect.getOwnPropertyDescriptor(p, v);
  return E && { writable: !0, configurable: c.i !== 1 || v !== "length", enumerable: E.enumerable, value: p[v] };
}, defineProperty: function() {
  Ar(11);
}, getPrototypeOf: function(c) {
  return Object.getPrototypeOf(c.t);
}, setPrototypeOf: function() {
  Ar(12);
} }, _v = {};
Sc(xv, function(c, v) {
  _v[c] = function() {
    return arguments[0] = arguments[0][0], v.apply(this, arguments);
  };
}), _v.deleteProperty = function(c, v) {
  return {}.NODE_ENV !== "production" && isNaN(parseInt(v)) && Ar(13), _v.set.call(this, c, v, void 0);
}, _v.set = function(c, v, p) {
  return {}.NODE_ENV !== "production" && v !== "length" && isNaN(parseInt(v)) && Ar(14), xv.set.call(this, c[0], v, p, c[0]);
};
var sN = function() {
  function c(p) {
    var E = this;
    this.O = A1, this.D = !0, this.produce = function(R, w, g) {
      if (typeof R == "function" && typeof w != "function") {
        var B = w;
        w = R;
        var M = E;
        return function($) {
          var I = this;
          $ === void 0 && ($ = B);
          for (var oe = arguments.length, le = Array(oe > 1 ? oe - 1 : 0), ee = 1; ee < oe; ee++)
            le[ee - 1] = arguments[ee];
          return M.produce($, function(J) {
            var F;
            return (F = w).call.apply(F, [I, J].concat(le));
          });
        };
      }
      var _;
      if (typeof w != "function" && Ar(6), g !== void 0 && typeof g != "function" && Ar(7), Zo(R)) {
        var z = D1(E), k = h0(E, R, void 0), L = !0;
        try {
          _ = w(k), L = !1;
        } finally {
          L ? gy(z) : v0(z);
        }
        return typeof Promise < "u" && _ instanceof Promise ? _.then(function($) {
          return JE(z, g), e0($, z);
        }, function($) {
          throw gy(z), $;
        }) : (JE(z, g), e0(_, z));
      }
      if (!R || typeof R != "object") {
        if ((_ = w(R)) === void 0 && (_ = R), _ === sT && (_ = void 0), E.D && T0(_, !0), g) {
          var U = [], j = [];
          uo("Patches").M(R, _, U, j), g(U, j);
        }
        return _;
      }
      Ar(21, R);
    }, this.produceWithPatches = function(R, w) {
      if (typeof R == "function")
        return function(_) {
          for (var z = arguments.length, k = Array(z > 1 ? z - 1 : 0), L = 1; L < z; L++)
            k[L - 1] = arguments[L];
          return E.produceWithPatches(_, function(U) {
            return R.apply(void 0, [U].concat(k));
          });
        };
      var g, B, M = E.produce(R, w, function(_, z) {
        g = _, B = z;
      });
      return typeof Promise < "u" && M instanceof Promise ? M.then(function(_) {
        return [_, g, B];
      }) : [M, g, B];
    }, typeof (p == null ? void 0 : p.useProxies) == "boolean" && this.setUseProxies(p.useProxies), typeof (p == null ? void 0 : p.autoFreeze) == "boolean" && this.setAutoFreeze(p.autoFreeze);
  }
  var v = c.prototype;
  return v.createDraft = function(p) {
    Zo(p) || Ar(8), cs(p) && (p = rN(p));
    var E = D1(this), R = h0(this, p, void 0);
    return R[Pn].C = !0, v0(E), R;
  }, v.finishDraft = function(p, E) {
    var R = p && p[Pn];
    ({}).NODE_ENV !== "production" && (R && R.C || Ar(9), R.I && Ar(10));
    var w = R.A;
    return JE(w, E), e0(void 0, w);
  }, v.setAutoFreeze = function(p) {
    this.D = p;
  }, v.setUseProxies = function(p) {
    p && !A1 && Ar(20), this.O = p;
  }, v.applyPatches = function(p, E) {
    var R;
    for (R = E.length - 1; R >= 0; R--) {
      var w = E[R];
      if (w.path.length === 0 && w.op === "replace") {
        p = w.value;
        break;
      }
    }
    R > -1 && (E = E.slice(R + 1));
    var g = uo("Patches").$;
    return cs(p) ? g(p, E) : this.produce(p, function(B) {
      return g(B, E);
    });
  }, c;
}(), mi = new sN(), fT = mi.produce;
mi.produceWithPatches.bind(mi);
mi.setAutoFreeze.bind(mi);
mi.setUseProxies.bind(mi);
mi.applyPatches.bind(mi);
mi.createDraft.bind(mi);
mi.finishDraft.bind(mi);
function Ov(c) {
  "@babel/helpers - typeof";
  return Ov = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
    return typeof v;
  } : function(v) {
    return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
  }, Ov(c);
}
function cN(c, v) {
  if (Ov(c) !== "object" || c === null)
    return c;
  var p = c[Symbol.toPrimitive];
  if (p !== void 0) {
    var E = p.call(c, v || "default");
    if (Ov(E) !== "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (v === "string" ? String : Number)(c);
}
function fN(c) {
  var v = cN(c, "string");
  return Ov(v) === "symbol" ? v : String(v);
}
function dN(c, v, p) {
  return v = fN(v), v in c ? Object.defineProperty(c, v, {
    value: p,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[v] = p, c;
}
function U1(c, v) {
  var p = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(c);
    v && (E = E.filter(function(R) {
      return Object.getOwnPropertyDescriptor(c, R).enumerable;
    })), p.push.apply(p, E);
  }
  return p;
}
function j1(c) {
  for (var v = 1; v < arguments.length; v++) {
    var p = arguments[v] != null ? arguments[v] : {};
    v % 2 ? U1(Object(p), !0).forEach(function(E) {
      dN(c, E, p[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p)) : U1(Object(p)).forEach(function(E) {
      Object.defineProperty(c, E, Object.getOwnPropertyDescriptor(p, E));
    });
  }
  return c;
}
function ga(c) {
  return "Minified Redux error #" + c + "; visit https://redux.js.org/Errors?code=" + c + " for the full message or use the non-minified dev environment for full errors. ";
}
var P1 = function() {
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
function dT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  for (var v = c; Object.getPrototypeOf(v) !== null; )
    v = Object.getPrototypeOf(v);
  return Object.getPrototypeOf(c) === v;
}
function pN(c) {
  if (c === void 0)
    return "undefined";
  if (c === null)
    return "null";
  var v = typeof c;
  switch (v) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return v;
  }
  if (Array.isArray(c))
    return "array";
  if (mN(c))
    return "date";
  if (hN(c))
    return "error";
  var p = vN(c);
  switch (p) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return p;
  }
  return v.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function vN(c) {
  return typeof c.constructor == "function" ? c.constructor.name : null;
}
function hN(c) {
  return c instanceof Error || typeof c.message == "string" && c.constructor && typeof c.constructor.stackTraceLimit == "number";
}
function mN(c) {
  return c instanceof Date ? !0 : typeof c.toDateString == "function" && typeof c.getDate == "function" && typeof c.setDate == "function";
}
function yc(c) {
  var v = typeof c;
  return {}.NODE_ENV !== "production" && (v = pN(c)), v;
}
function pT(c, v, p) {
  var E;
  if (typeof v == "function" && typeof p == "function" || typeof p == "function" && typeof arguments[3] == "function")
    throw new Error({}.NODE_ENV === "production" ? ga(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof v == "function" && typeof p > "u" && (p = v, v = void 0), typeof p < "u") {
    if (typeof p != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(1) : "Expected the enhancer to be a function. Instead, received: '" + yc(p) + "'");
    return p(pT)(c, v);
  }
  if (typeof c != "function")
    throw new Error({}.NODE_ENV === "production" ? ga(2) : "Expected the root reducer to be a function. Instead, received: '" + yc(c) + "'");
  var R = c, w = v, g = [], B = g, M = !1;
  function _() {
    B === g && (B = g.slice());
  }
  function z() {
    if (M)
      throw new Error({}.NODE_ENV === "production" ? ga(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return w;
  }
  function k($) {
    if (typeof $ != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(4) : "Expected the listener to be a function. Instead, received: '" + yc($) + "'");
    if (M)
      throw new Error({}.NODE_ENV === "production" ? ga(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var I = !0;
    return _(), B.push($), function() {
      if (I) {
        if (M)
          throw new Error({}.NODE_ENV === "production" ? ga(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        I = !1, _();
        var le = B.indexOf($);
        B.splice(le, 1), g = null;
      }
    };
  }
  function L($) {
    if (!dT($))
      throw new Error({}.NODE_ENV === "production" ? ga(7) : "Actions must be plain objects. Instead, the actual type was: '" + yc($) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof $.type > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (M)
      throw new Error({}.NODE_ENV === "production" ? ga(9) : "Reducers may not dispatch actions.");
    try {
      M = !0, w = R(w, $);
    } finally {
      M = !1;
    }
    for (var I = g = B, oe = 0; oe < I.length; oe++) {
      var le = I[oe];
      le();
    }
    return $;
  }
  function U($) {
    if (typeof $ != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(10) : "Expected the nextReducer to be a function. Instead, received: '" + yc($));
    R = $, L({
      type: gc.REPLACE
    });
  }
  function j() {
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
        function ee() {
          le.next && le.next(z());
        }
        ee();
        var J = I(ee);
        return {
          unsubscribe: J
        };
      }
    }, $[P1] = function() {
      return this;
    }, $;
  }
  return L({
    type: gc.INIT
  }), E = {
    dispatch: L,
    subscribe: k,
    getState: z,
    replaceReducer: U
  }, E[P1] = j, E;
}
function F1(c) {
  typeof console < "u" && typeof console.error == "function" && console.error(c);
  try {
    throw new Error(c);
  } catch {
  }
}
function yN(c, v, p, E) {
  var R = Object.keys(v), w = p && p.type === gc.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (R.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!dT(c))
    return "The " + w + ' has unexpected type of "' + yc(c) + '". Expected argument to be an object with the following ' + ('keys: "' + R.join('", "') + '"');
  var g = Object.keys(c).filter(function(B) {
    return !v.hasOwnProperty(B) && !E[B];
  });
  if (g.forEach(function(B) {
    E[B] = !0;
  }), !(p && p.type === gc.REPLACE) && g.length > 0)
    return "Unexpected " + (g.length > 1 ? "keys" : "key") + " " + ('"' + g.join('", "') + '" found in ' + w + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + R.join('", "') + '". Unexpected keys will be ignored.');
}
function gN(c) {
  Object.keys(c).forEach(function(v) {
    var p = c[v], E = p(void 0, {
      type: gc.INIT
    });
    if (typeof E > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(12) : 'The slice reducer for key "' + v + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof p(void 0, {
      type: gc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(13) : 'The slice reducer for key "' + v + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + gc.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function SN(c) {
  for (var v = Object.keys(c), p = {}, E = 0; E < v.length; E++) {
    var R = v[E];
    ({}).NODE_ENV !== "production" && typeof c[R] > "u" && F1('No reducer provided for key "' + R + '"'), typeof c[R] == "function" && (p[R] = c[R]);
  }
  var w = Object.keys(p), g;
  ({}).NODE_ENV !== "production" && (g = {});
  var B;
  try {
    gN(p);
  } catch (M) {
    B = M;
  }
  return function(_, z) {
    if (_ === void 0 && (_ = {}), B)
      throw B;
    if ({}.NODE_ENV !== "production") {
      var k = yN(_, p, z, g);
      k && F1(k);
    }
    for (var L = !1, U = {}, j = 0; j < w.length; j++) {
      var $ = w[j], I = p[$], oe = _[$], le = I(oe, z);
      if (typeof le > "u") {
        var ee = z && z.type;
        throw new Error({}.NODE_ENV === "production" ? ga(14) : "When called with an action of type " + (ee ? '"' + String(ee) + '"' : "(unknown type)") + ', the slice reducer for key "' + $ + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      U[$] = le, L = L || le !== oe;
    }
    return L = L || w.length !== Object.keys(_).length, L ? U : _;
  };
}
function Cy() {
  for (var c = arguments.length, v = new Array(c), p = 0; p < c; p++)
    v[p] = arguments[p];
  return v.length === 0 ? function(E) {
    return E;
  } : v.length === 1 ? v[0] : v.reduce(function(E, R) {
    return function() {
      return E(R.apply(void 0, arguments));
    };
  });
}
function EN() {
  for (var c = arguments.length, v = new Array(c), p = 0; p < c; p++)
    v[p] = arguments[p];
  return function(E) {
    return function() {
      var R = E.apply(void 0, arguments), w = function() {
        throw new Error({}.NODE_ENV === "production" ? ga(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, g = {
        getState: R.getState,
        dispatch: function() {
          return w.apply(void 0, arguments);
        }
      }, B = v.map(function(M) {
        return M(g);
      });
      return w = Cy.apply(void 0, B)(R.dispatch), j1(j1({}, R), {}, {
        dispatch: w
      });
    };
  };
}
function vT(c) {
  var v = function(E) {
    var R = E.dispatch, w = E.getState;
    return function(g) {
      return function(B) {
        return typeof B == "function" ? B(R, w, c) : g(B);
      };
    };
  };
  return v;
}
var hT = vT();
hT.withExtraArgument = vT;
const V1 = hT;
var mT = globalThis && globalThis.__extends || function() {
  var c = function(v, p) {
    return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, R) {
      E.__proto__ = R;
    } || function(E, R) {
      for (var w in R)
        Object.prototype.hasOwnProperty.call(R, w) && (E[w] = R[w]);
    }, c(v, p);
  };
  return function(v, p) {
    if (typeof p != "function" && p !== null)
      throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
    c(v, p);
    function E() {
      this.constructor = v;
    }
    v.prototype = p === null ? Object.create(p) : (E.prototype = p.prototype, new E());
  };
}(), CN = globalThis && globalThis.__generator || function(c, v) {
  var p = { label: 0, sent: function() {
    if (w[0] & 1)
      throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, R, w, g;
  return g = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function B(_) {
    return function(z) {
      return M([_, z]);
    };
  }
  function M(_) {
    if (E)
      throw new TypeError("Generator is already executing.");
    for (; p; )
      try {
        if (E = 1, R && (w = _[0] & 2 ? R.return : _[0] ? R.throw || ((w = R.return) && w.call(R), 0) : R.next) && !(w = w.call(R, _[1])).done)
          return w;
        switch (R = 0, w && (_ = [_[0] & 2, w.value]), _[0]) {
          case 0:
          case 1:
            w = _;
            break;
          case 4:
            return p.label++, { value: _[1], done: !1 };
          case 5:
            p.label++, R = _[1], _ = [0];
            continue;
          case 7:
            _ = p.ops.pop(), p.trys.pop();
            continue;
          default:
            if (w = p.trys, !(w = w.length > 0 && w[w.length - 1]) && (_[0] === 6 || _[0] === 2)) {
              p = 0;
              continue;
            }
            if (_[0] === 3 && (!w || _[1] > w[0] && _[1] < w[3])) {
              p.label = _[1];
              break;
            }
            if (_[0] === 6 && p.label < w[1]) {
              p.label = w[1], w = _;
              break;
            }
            if (w && p.label < w[2]) {
              p.label = w[2], p.ops.push(_);
              break;
            }
            w[2] && p.ops.pop(), p.trys.pop();
            continue;
        }
        _ = v.call(c, p);
      } catch (z) {
        _ = [6, z], R = 0;
      } finally {
        E = w = 0;
      }
    if (_[0] & 5)
      throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}, cd = globalThis && globalThis.__spreadArray || function(c, v) {
  for (var p = 0, E = v.length, R = c.length; p < E; p++, R++)
    c[R] = v[p];
  return c;
}, bN = Object.defineProperty, RN = Object.defineProperties, TN = Object.getOwnPropertyDescriptors, H1 = Object.getOwnPropertySymbols, wN = Object.prototype.hasOwnProperty, _N = Object.prototype.propertyIsEnumerable, I1 = function(c, v, p) {
  return v in c ? bN(c, v, { enumerable: !0, configurable: !0, writable: !0, value: p }) : c[v] = p;
}, os = function(c, v) {
  for (var p in v || (v = {}))
    wN.call(v, p) && I1(c, p, v[p]);
  if (H1)
    for (var E = 0, R = H1(v); E < R.length; E++) {
      var p = R[E];
      _N.call(v, p) && I1(c, p, v[p]);
    }
  return c;
}, a0 = function(c, v) {
  return RN(c, TN(v));
}, xN = function(c, v, p) {
  return new Promise(function(E, R) {
    var w = function(M) {
      try {
        B(p.next(M));
      } catch (_) {
        R(_);
      }
    }, g = function(M) {
      try {
        B(p.throw(M));
      } catch (_) {
        R(_);
      }
    }, B = function(M) {
      return M.done ? E(M.value) : Promise.resolve(M.value).then(w, g);
    };
    B((p = p.apply(c, v)).next());
  });
}, ON = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Cy : Cy.apply(null, arguments);
};
function yT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  var v = Object.getPrototypeOf(c);
  if (v === null)
    return !0;
  for (var p = v; Object.getPrototypeOf(p) !== null; )
    p = Object.getPrototypeOf(p);
  return v === p;
}
var DN = function(c) {
  return c && typeof c.match == "function";
};
function ls(c, v) {
  function p() {
    for (var E = [], R = 0; R < arguments.length; R++)
      E[R] = arguments[R];
    if (v) {
      var w = v.apply(void 0, E);
      if (!w)
        throw new Error("prepareAction did not return an object");
      return os(os({
        type: c,
        payload: w.payload
      }, "meta" in w && { meta: w.meta }), "error" in w && { error: w.error });
    }
    return { type: c, payload: E[0] };
  }
  return p.toString = function() {
    return "" + c;
  }, p.type = c, p.match = function(E) {
    return E.type === c;
  }, p;
}
function kN(c) {
  return typeof c == "function" && "type" in c && DN(c);
}
function NN(c) {
  var v = c ? ("" + c).split("/") : [], p = v[v.length - 1] || "actionCreator";
  return 'Detected an action creator with type "' + (c || "unknown") + `" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(` + p + "())` instead of `dispatch(" + p + ")`. This is necessary even if the action has no payload.";
}
function MN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(E) {
        return function(R) {
          return E(R);
        };
      };
    };
  var v = c.isActionCreator, p = v === void 0 ? kN : v;
  return function() {
    return function(E) {
      return function(R) {
        return p(R) && console.warn(NN(R.type)), E(R);
      };
    };
  };
}
function gT(c, v) {
  var p = 0;
  return {
    measureTime: function(E) {
      var R = Date.now();
      try {
        return E();
      } finally {
        var w = Date.now();
        p += w - R;
      }
    },
    warnIfExceeded: function() {
      p > c && console.warn(v + " took " + p + "ms, which is more than the warning threshold of " + c + `ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var LN = (
  /** @class */
  function(c) {
    mT(v, c);
    function v() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      var R = c.apply(this, p) || this;
      return Object.setPrototypeOf(R, v.prototype), R;
    }
    return Object.defineProperty(v, Symbol.species, {
      get: function() {
        return v;
      },
      enumerable: !1,
      configurable: !0
    }), v.prototype.concat = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return c.prototype.concat.apply(this, p);
    }, v.prototype.prepend = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return p.length === 1 && Array.isArray(p[0]) ? new (v.bind.apply(v, cd([void 0], p[0].concat(this))))() : new (v.bind.apply(v, cd([void 0], p.concat(this))))();
    }, v;
  }(Array)
), AN = (
  /** @class */
  function(c) {
    mT(v, c);
    function v() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      var R = c.apply(this, p) || this;
      return Object.setPrototypeOf(R, v.prototype), R;
    }
    return Object.defineProperty(v, Symbol.species, {
      get: function() {
        return v;
      },
      enumerable: !1,
      configurable: !0
    }), v.prototype.concat = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return c.prototype.concat.apply(this, p);
    }, v.prototype.prepend = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return p.length === 1 && Array.isArray(p[0]) ? new (v.bind.apply(v, cd([void 0], p[0].concat(this))))() : new (v.bind.apply(v, cd([void 0], p.concat(this))))();
    }, v;
  }(Array)
);
function y0(c) {
  return Zo(c) ? fT(c, function() {
  }) : c;
}
var zN = {}.NODE_ENV === "production", B1 = "Invariant failed";
function $1(c, v) {
  if (!c)
    throw zN ? new Error(B1) : new Error(B1 + ": " + (v || ""));
}
function UN(c, v, p, E) {
  return JSON.stringify(c, jN(v, E), p);
}
function jN(c, v) {
  var p = [], E = [];
  return v || (v = function(R, w) {
    return p[0] === w ? "[Circular ~]" : "[Circular ~." + E.slice(0, p.indexOf(w)).join(".") + "]";
  }), function(R, w) {
    if (p.length > 0) {
      var g = p.indexOf(this);
      ~g ? p.splice(g + 1) : p.push(this), ~g ? E.splice(g, 1 / 0, R) : E.push(R), ~p.indexOf(w) && (w = v.call(this, R, w));
    } else
      p.push(w);
    return c == null ? w : c.call(this, R, w);
  };
}
function PN(c) {
  return typeof c != "object" || c == null || Object.isFrozen(c);
}
function FN(c, v, p) {
  var E = ST(c, v, p);
  return {
    detectMutations: function() {
      return ET(c, v, E, p);
    }
  };
}
function ST(c, v, p, E, R) {
  v === void 0 && (v = []), E === void 0 && (E = ""), R === void 0 && (R = /* @__PURE__ */ new Set());
  var w = { value: p };
  if (!c(p) && !R.has(p)) {
    R.add(p), w.children = {};
    for (var g in p) {
      var B = E ? E + "." + g : g;
      v.length && v.indexOf(B) !== -1 || (w.children[g] = ST(c, v, p[g], B));
    }
  }
  return w;
}
function ET(c, v, p, E, R, w) {
  v === void 0 && (v = []), R === void 0 && (R = !1), w === void 0 && (w = "");
  var g = p ? p.value : void 0, B = g === E;
  if (R && !B && !Number.isNaN(E))
    return { wasMutated: !0, path: w };
  if (c(g) || c(E))
    return { wasMutated: !1 };
  var M = {};
  for (var _ in p.children)
    M[_] = !0;
  for (var _ in E)
    M[_] = !0;
  var z = v.length > 0, k = function(U) {
    var j = w ? w + "." + U : U;
    if (z) {
      var $ = v.some(function(oe) {
        return oe instanceof RegExp ? oe.test(j) : j === oe;
      });
      if ($)
        return "continue";
    }
    var I = ET(c, v, p.children[U], E[U], B, j);
    if (I.wasMutated)
      return { value: I };
  };
  for (var _ in M) {
    var L = k(_);
    if (typeof L == "object")
      return L.value;
  }
  return { wasMutated: !1 };
}
function VN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(M) {
        return function(_) {
          return M(_);
        };
      };
    };
  var v = c.isImmutable, p = v === void 0 ? PN : v, E = c.ignoredPaths, R = c.warnAfter, w = R === void 0 ? 32 : R, g = c.ignore;
  E = E || g;
  var B = FN.bind(null, p, E);
  return function(M) {
    var _ = M.getState, z = _(), k = B(z), L;
    return function(U) {
      return function(j) {
        var $ = gT(w, "ImmutableStateInvariantMiddleware");
        $.measureTime(function() {
          z = _(), L = k.detectMutations(), k = B(z), $1(!L.wasMutated, "A state mutation was detected between dispatches, in the path '" + (L.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var I = U(j);
        return $.measureTime(function() {
          z = _(), L = k.detectMutations(), k = B(z), L.wasMutated && $1(!L.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (L.path || "") + ". Take a look at the reducer(s) handling the action " + UN(j) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        }), $.warnIfExceeded(), I;
      };
    };
  };
}
function CT(c) {
  var v = typeof c;
  return c == null || v === "string" || v === "boolean" || v === "number" || Array.isArray(c) || yT(c);
}
function g0(c, v, p, E, R, w) {
  v === void 0 && (v = ""), p === void 0 && (p = CT), R === void 0 && (R = []);
  var g;
  if (!p(c))
    return {
      keyPath: v || "<root>",
      value: c
    };
  if (typeof c != "object" || c === null || w != null && w.has(c))
    return !1;
  for (var B = E != null ? E(c) : Object.entries(c), M = R.length > 0, _ = function(I, oe) {
    var le = v ? v + "." + I : I;
    if (M) {
      var ee = R.some(function(J) {
        return J instanceof RegExp ? J.test(le) : le === J;
      });
      if (ee)
        return "continue";
    }
    if (!p(oe))
      return { value: {
        keyPath: le,
        value: oe
      } };
    if (typeof oe == "object" && (g = g0(oe, le, p, E, R, w), g))
      return { value: g };
  }, z = 0, k = B; z < k.length; z++) {
    var L = k[z], U = L[0], j = L[1], $ = _(U, j);
    if (typeof $ == "object")
      return $.value;
  }
  return w && bT(c) && w.add(c), !1;
}
function bT(c) {
  if (!Object.isFrozen(c))
    return !1;
  for (var v = 0, p = Object.values(c); v < p.length; v++) {
    var E = p[v];
    if (!(typeof E != "object" || E === null) && !bT(E))
      return !1;
  }
  return !0;
}
function HN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(ee) {
        return function(J) {
          return ee(J);
        };
      };
    };
  var v = c.isSerializable, p = v === void 0 ? CT : v, E = c.getEntries, R = c.ignoredActions, w = R === void 0 ? [] : R, g = c.ignoredActionPaths, B = g === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : g, M = c.ignoredPaths, _ = M === void 0 ? [] : M, z = c.warnAfter, k = z === void 0 ? 32 : z, L = c.ignoreState, U = L === void 0 ? !1 : L, j = c.ignoreActions, $ = j === void 0 ? !1 : j, I = c.disableCache, oe = I === void 0 ? !1 : I, le = !oe && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
  return function(ee) {
    return function(J) {
      return function(F) {
        var de = J(F), ge = gT(k, "SerializableStateInvariantMiddleware");
        return !$ && !(w.length && w.indexOf(F.type) !== -1) && ge.measureTime(function() {
          var $e = g0(F, "", p, E, B, le);
          if ($e) {
            var Ke = $e.keyPath, Ge = $e.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + Ke + "`. Value:", Ge, `
Take a look at the logic that dispatched this action: `, F, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
          }
        }), U || (ge.measureTime(function() {
          var $e = ee.getState(), Ke = g0($e, "", p, E, _, le);
          if (Ke) {
            var Ge = Ke.keyPath, ze = Ke.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + Ge + "`. Value:", ze, `
Take a look at the reducer(s) handling this action type: ` + F.type + `.
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
function IN() {
  return function(v) {
    return BN(v);
  };
}
function BN(c) {
  c === void 0 && (c = {});
  var v = c.thunk, p = v === void 0 ? !0 : v, E = c.immutableCheck, R = E === void 0 ? !0 : E, w = c.serializableCheck, g = w === void 0 ? !0 : w, B = c.actionCreatorCheck, M = B === void 0 ? !0 : B, _ = new LN();
  if (p && (yy(p) ? _.push(V1) : _.push(V1.withExtraArgument(p.extraArgument))), {}.NODE_ENV !== "production") {
    if (R) {
      var z = {};
      yy(R) || (z = R), _.unshift(VN(z));
    }
    if (g) {
      var k = {};
      yy(g) || (k = g), _.push(HN(k));
    }
    if (M) {
      var L = {};
      yy(M) || (L = M), _.unshift(MN(L));
    }
  }
  return _;
}
var i0 = {}.NODE_ENV === "production";
function $N(c) {
  var v = IN(), p = c || {}, E = p.reducer, R = E === void 0 ? void 0 : E, w = p.middleware, g = w === void 0 ? v() : w, B = p.devTools, M = B === void 0 ? !0 : B, _ = p.preloadedState, z = _ === void 0 ? void 0 : _, k = p.enhancers, L = k === void 0 ? void 0 : k, U;
  if (typeof R == "function")
    U = R;
  else if (yT(R))
    U = SN(R);
  else
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var j = g;
  if (typeof j == "function" && (j = j(v), !i0 && !Array.isArray(j)))
    throw new Error("when using a middleware builder function, an array of middleware must be returned");
  if (!i0 && j.some(function(J) {
    return typeof J != "function";
  }))
    throw new Error("each middleware provided to configureStore must be a function");
  var $ = EN.apply(void 0, j), I = Cy;
  M && (I = ON(os({
    trace: !i0
  }, typeof M == "object" && M)));
  var oe = new AN($), le = oe;
  Array.isArray(L) ? le = cd([$], L) : typeof L == "function" && (le = L(oe));
  var ee = I.apply(void 0, le);
  return pT(U, z, ee);
}
function RT(c) {
  var v = {}, p = [], E, R = {
    addCase: function(w, g) {
      if ({}.NODE_ENV !== "production") {
        if (p.length > 0)
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (E)
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      var B = typeof w == "string" ? w : w.type;
      if (!B)
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      if (B in v)
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      return v[B] = g, R;
    },
    addMatcher: function(w, g) {
      if ({}.NODE_ENV !== "production" && E)
        throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return p.push({ matcher: w, reducer: g }), R;
    },
    addDefaultCase: function(w) {
      if ({}.NODE_ENV !== "production" && E)
        throw new Error("`builder.addDefaultCase` can only be called once");
      return E = w, R;
    }
  };
  return c(R), [v, p, E];
}
function YN(c) {
  return typeof c == "function";
}
var Y1 = !1;
function WN(c, v, p, E) {
  p === void 0 && (p = []), {}.NODE_ENV !== "production" && typeof v == "object" && (Y1 || (Y1 = !0, console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer")));
  var R = typeof v == "function" ? RT(v) : [v, p, E], w = R[0], g = R[1], B = R[2], M;
  if (YN(c))
    M = function() {
      return y0(c());
    };
  else {
    var _ = y0(c);
    M = function() {
      return _;
    };
  }
  function z(k, L) {
    k === void 0 && (k = M());
    var U = cd([
      w[L.type]
    ], g.filter(function(j) {
      var $ = j.matcher;
      return $(L);
    }).map(function(j) {
      var $ = j.reducer;
      return $;
    }));
    return U.filter(function(j) {
      return !!j;
    }).length === 0 && (U = [B]), U.reduce(function(j, $) {
      if ($)
        if (cs(j)) {
          var I = j, oe = $(I, L);
          return oe === void 0 ? j : oe;
        } else {
          if (Zo(j))
            return fT(j, function(le) {
              return $(le, L);
            });
          var oe = $(j, L);
          if (oe === void 0) {
            if (j === null)
              return j;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return oe;
        }
      return j;
    }, k);
  }
  return z.getInitialState = M, z;
}
var W1 = !1;
function QN(c, v) {
  return c + "/" + v;
}
function TT(c) {
  var v = c.name;
  if (!v)
    throw new Error("`name` is a required option for createSlice");
  typeof process < "u" && {}.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
  var p = typeof c.initialState == "function" ? c.initialState : y0(c.initialState), E = c.reducers || {}, R = Object.keys(E), w = {}, g = {}, B = {};
  R.forEach(function(z) {
    var k = E[z], L = QN(v, z), U, j;
    "reducer" in k ? (U = k.reducer, j = k.prepare) : U = k, w[z] = U, g[L] = U, B[z] = j ? ls(L, j) : ls(L);
  });
  function M() {
    ({}).NODE_ENV !== "production" && typeof c.extraReducers == "object" && (W1 || (W1 = !0, console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice")));
    var z = typeof c.extraReducers == "function" ? RT(c.extraReducers) : [c.extraReducers], k = z[0], L = k === void 0 ? {} : k, U = z[1], j = U === void 0 ? [] : U, $ = z[2], I = $ === void 0 ? void 0 : $, oe = os(os({}, L), g);
    return WN(p, function(le) {
      for (var ee in oe)
        le.addCase(ee, oe[ee]);
      for (var J = 0, F = j; J < F.length; J++) {
        var de = F[J];
        le.addMatcher(de.matcher, de.reducer);
      }
      I && le.addDefaultCase(I);
    });
  }
  var _;
  return {
    name: v,
    reducer: function(z, k) {
      return _ || (_ = M()), _(z, k);
    },
    actions: B,
    caseReducers: w,
    getInitialState: function() {
      return _ || (_ = M()), _.getInitialState();
    }
  };
}
var GN = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", qN = function(c) {
  c === void 0 && (c = 21);
  for (var v = "", p = c; p--; )
    v += GN[Math.random() * 64 | 0];
  return v;
}, KN = [
  "name",
  "message",
  "stack",
  "code"
], u0 = (
  /** @class */
  function() {
    function c(v, p) {
      this.payload = v, this.meta = p;
    }
    return c;
  }()
), Q1 = (
  /** @class */
  function() {
    function c(v, p) {
      this.payload = v, this.meta = p;
    }
    return c;
  }()
), XN = function(c) {
  if (typeof c == "object" && c !== null) {
    for (var v = {}, p = 0, E = KN; p < E.length; p++) {
      var R = E[p];
      typeof c[R] == "string" && (v[R] = c[R]);
    }
    return v;
  }
  return { message: String(c) };
};
(function() {
  function c(v, p, E) {
    var R = ls(v + "/fulfilled", function(z, k, L, U) {
      return {
        payload: z,
        meta: a0(os({}, U || {}), {
          arg: L,
          requestId: k,
          requestStatus: "fulfilled"
        })
      };
    }), w = ls(v + "/pending", function(z, k, L) {
      return {
        payload: void 0,
        meta: a0(os({}, L || {}), {
          arg: k,
          requestId: z,
          requestStatus: "pending"
        })
      };
    }), g = ls(v + "/rejected", function(z, k, L, U, j) {
      return {
        payload: U,
        error: (E && E.serializeError || XN)(z || "Rejected"),
        meta: a0(os({}, j || {}), {
          arg: L,
          requestId: k,
          rejectedWithValue: !!U,
          requestStatus: "rejected",
          aborted: (z == null ? void 0 : z.name) === "AbortError",
          condition: (z == null ? void 0 : z.name) === "ConditionError"
        })
      };
    }), B = !1, M = typeof AbortController < "u" ? AbortController : (
      /** @class */
      function() {
        function z() {
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
        return z.prototype.abort = function() {
          ({}).NODE_ENV !== "production" && (B || (B = !0, console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.")));
        }, z;
      }()
    );
    function _(z) {
      return function(k, L, U) {
        var j = E != null && E.idGenerator ? E.idGenerator(z) : qN(), $ = new M(), I;
        function oe(ee) {
          I = ee, $.abort();
        }
        var le = function() {
          return xN(this, null, function() {
            var ee, J, F, de, ge, $e, Ke;
            return CN(this, function(Ge) {
              switch (Ge.label) {
                case 0:
                  return Ge.trys.push([0, 4, , 5]), de = (ee = E == null ? void 0 : E.condition) == null ? void 0 : ee.call(E, z, { getState: L, extra: U }), JN(de) ? [4, de] : [3, 2];
                case 1:
                  de = Ge.sent(), Ge.label = 2;
                case 2:
                  if (de === !1 || $.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  return ge = new Promise(function(ze, ot) {
                    return $.signal.addEventListener("abort", function() {
                      return ot({
                        name: "AbortError",
                        message: I || "Aborted"
                      });
                    });
                  }), k(w(j, z, (J = E == null ? void 0 : E.getPendingMeta) == null ? void 0 : J.call(E, { requestId: j, arg: z }, { getState: L, extra: U }))), [4, Promise.race([
                    ge,
                    Promise.resolve(p(z, {
                      dispatch: k,
                      getState: L,
                      extra: U,
                      requestId: j,
                      signal: $.signal,
                      abort: oe,
                      rejectWithValue: function(ze, ot) {
                        return new u0(ze, ot);
                      },
                      fulfillWithValue: function(ze, ot) {
                        return new Q1(ze, ot);
                      }
                    })).then(function(ze) {
                      if (ze instanceof u0)
                        throw ze;
                      return ze instanceof Q1 ? R(ze.payload, j, z, ze.meta) : R(ze, j, z);
                    })
                  ])];
                case 3:
                  return F = Ge.sent(), [3, 5];
                case 4:
                  return $e = Ge.sent(), F = $e instanceof u0 ? g(null, j, z, $e.payload, $e.meta) : g($e, j, z), [3, 5];
                case 5:
                  return Ke = E && !E.dispatchConditionRejection && g.match(F) && F.meta.condition, Ke || k(F), [2, F];
              }
            });
          });
        }();
        return Object.assign(le, {
          abort: oe,
          requestId: j,
          arg: z,
          unwrap: function() {
            return le.then(ZN);
          }
        });
      };
    }
    return Object.assign(_, {
      pending: w,
      rejected: g,
      fulfilled: R,
      typePrefix: v
    });
  }
  return c.withTypes = function() {
    return c;
  }, c;
})();
function ZN(c) {
  if (c.meta && c.meta.rejectedWithValue)
    throw c.payload;
  if (c.error)
    throw c.error;
  return c.payload;
}
function JN(c) {
  return c !== null && typeof c == "object" && typeof c.then == "function";
}
var x0 = "listenerMiddleware";
ls(x0 + "/add");
ls(x0 + "/removeAll");
ls(x0 + "/remove");
var G1;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
aN();
const eM = [], wT = TT({
  name: "fields",
  initialState: eM,
  reducers: {
    registerForm: (c, v) => {
      const { formInstance: p, formId: E } = v.payload;
      c[p] = {
        fields: {},
        meta: {
          formId: E,
          isLoading: !1,
          isSubmitting: !1,
          step: 1
        }
      };
    },
    updateField: (c, v) => {
      const {
        formInstance: p,
        name: E,
        value: R
      } = v.payload;
      c[p].fields[E] = {
        ...c[p].fields[E],
        value: R
      };
    },
    updateFieldErrors: (c, v) => {
      const {
        formInstance: p,
        name: E,
        errors: R
      } = v.payload;
      c[p].fields[E] = {
        ...c[p].fields[E],
        errors: R
      };
    },
    updateMeta: (c, v) => {
      const {
        formInstance: p,
        name: E,
        value: R
      } = v.payload;
      c[p].meta[E] = R;
    }
  }
}), {
  registerForm: tM,
  updateField: Fi,
  updateFieldErrors: q1,
  updateMeta: nM
} = wT.actions, rM = wT.reducer, aM = (c) => (v) => v.forms[c], iM = (c) => (v) => v.forms[c].meta.step, Dv = (c) => (v) => v.forms[c].fields, uM = {
  environment: "production",
  errors: {}
}, _T = TT({
  name: "misc",
  initialState: uM,
  reducers: {
    registerErrors: (c, v) => {
      const { errors: p } = v.payload;
      c.errors = { ...p };
    },
    setEnvironment: (c, v) => {
      const { env: p } = v.payload;
      c.environment = p;
    }
  }
}), {
  registerErrors: oM
} = _T.actions, lM = _T.reducer, sM = () => (c) => c.misc.errors;
function xT(c, v) {
  if (!v || v.length === 0)
    return !0;
  let p = v[0].logicalOperator === "and";
  for (const E of v) {
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
    E.logicalOperator === "and" ? p = p && w : E.logicalOperator === "or" && (p = p || w);
  }
  return p;
}
function OT(c) {
  switch (c) {
    case "stage":
    case "staging":
      return "https://fundy-stage-be.do.dekodes.no";
    case "development":
    case "develop":
    case "local":
      return "http://localhost";
    default:
      return "https://fundy-stage-be.do.dekodes.no";
  }
}
function tn(c) {
  return c.map((v) => v ? "dkf_" + v : !1).filter(Boolean).join(" ");
}
function cM(c, v) {
  return new CustomEvent(c, { detail: v });
}
function fM(c, v) {
  c.dispatchEvent(v);
}
function dM(c, v, p) {
  return Fi({ formInstance: c, name: v, value: p });
}
function pM(c, v, p) {
  return nM({ formInstance: c, name: v, value: p });
}
function vM(c) {
  return () => {
  };
}
const K1 = {
  update_field: dM,
  update_meta: pM,
  submit: vM
};
function hM(c) {
  const {
    formInstance: v,
    name: p,
    label: E,
    type: R,
    events: w,
    disabled: g = !1,
    ...B
  } = c, M = ds(), _ = tn([
    "button-container",
    "button-container--" + p
  ]), z = tn([
    "button",
    "button--" + p,
    "button--" + (c.buttonType || "primary")
  ]), k = () => {
    w && w.forEach((L) => {
      if (L.mapping)
        for (const U in L.mapping) {
          const j = L.mapping[U];
          M(K1[L.name](v, U, j));
        }
      else
        M(K1[L.name](v));
    });
  };
  return /* @__PURE__ */ nt.jsx("div", { className: _, children: /* @__PURE__ */ nt.jsx(
    "button",
    {
      type: R,
      className: z,
      onClick: k,
      children: E
    },
    p
  ) });
}
function mM(c) {
  const {
    formInstance: v,
    name: p,
    label: E,
    options: R,
    defaultValue: w,
    visibilityConditions: g,
    validationRules: B,
    helpText: M,
    emailTag: _,
    storeAsDonorMeta: z,
    showInReceipt: k,
    nodeType: L,
    childNodes: U,
    disabled: j = !1,
    ...$
  } = c, I = fs(Dv(v)), oe = ds(), le = xT(I, g);
  if (sn.useEffect(() => {
    le && oe(Fi({ formInstance: v, name: p, value: w }));
  }, [le]), I[p] === void 0 || !le)
    return null;
  const ee = tn([
    "input",
    "input-checkbox",
    "input-checkbox--" + p
  ]), J = tn([
    "input--option"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: ee, children: R ? R.map((F) => /* @__PURE__ */ nt.jsxs("div", { className: J, children: [
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        id: v + p + F.value,
        name: p,
        type: "checkbox",
        value: F.value,
        checked: I[p].value === F.value,
        onChange: () => oe(Fi({ formInstance: v, name: p, value: F.value }))
      },
      p + F.value
    ),
    /* @__PURE__ */ nt.jsx("label", { htmlFor: v + p + F.value, children: F.label })
  ] })) : /* @__PURE__ */ nt.jsxs(nt.Fragment, { children: [
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        id: v + p,
        name: p,
        type: "checkbox",
        value: "true",
        checked: I[p].value == "true",
        onChange: () => oe(Fi({ formInstance: v, name: p, value: I[p].value == "true" ? "false" : "true" }))
      },
      p
    ),
    /* @__PURE__ */ nt.jsx("label", { htmlFor: v + p, children: E })
  ] }) });
}
const yM = (c, v) => {
  const p = c.split(":"), E = parseInt(p[1]);
  if (typeof v == "string") {
    if (v.length >= E)
      return !0;
  } else if (typeof v == "number") {
    if (v >= E)
      return !0;
  } else
    return !1;
  return !1;
}, gM = (c, v) => {
  const p = c.split(":"), E = parseInt(p[1]);
  if (typeof v == "string") {
    if (v.length <= E)
      return !0;
  } else if (typeof v == "number") {
    if (v <= E)
      return !0;
  } else
    return !1;
  return !1;
}, SM = (c, v) => typeof v == "string", EM = (c, v) => Number.isInteger(v), CM = (c, v) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v), bM = (c, v) => v != null && v.trim() !== "", RM = {
  min: yM,
  max: gM,
  string: SM,
  numeric: EM,
  required: bM,
  email: CM
};
function O0(c, v, p, E) {
  const R = fs(sM()), w = ds();
  return { setValidateField: (B) => {
    if (!E || E.length === 0)
      return;
    let M = [];
    for (const _ of E) {
      const z = _.split(":"), k = RM[z[0]];
      if (!k) {
        console.error(`Validator not found for rule: ${z[0]}`);
        continue;
      }
      if (!k(_, B) && R[z[0]]) {
        let U = R[z[0]];
        U.includes(":attribute") && (U = U.replace(":attribute", p)), U.includes(":max") && (U = U.replace(":max", z[1])), U.includes(":min") && (U = U.replace(":min", z[1])), M.push(U);
      }
    }
    M.length > 0 && w(q1({
      formInstance: c,
      name: v,
      errors: M
    })), w(q1({
      formInstance: c,
      name: v,
      errors: M
    }));
  } };
}
function TM(c) {
  const {
    formInstance: v,
    name: p,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    allowMultiple: B,
    helpText: M,
    emailTag: _,
    storeAsDonorMeta: z,
    showInReceipt: k,
    nodeType: L,
    childNodes: U,
    disabled: j = !1,
    ...$
  } = c, [I, oe] = sn.useReducer(
    (we, Ue) => ({ ...we, ...Ue }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: le,
    isInvalid: ee
  } = I, J = fs(Dv(v)), F = ds(), de = J[p].errors, { setValidateField: ge } = O0(v, p, E, g), $e = tn([
    "input_wrapper",
    "input_wrapper--" + p,
    "input_wrapper-type--" + L
  ]), Ke = tn([
    "input",
    "input--" + p,
    le && "input--active",
    de && de.length > 0 && "input--invalid"
  ]), Ge = (we) => {
    we.preventDefault(), F(Fi({ formInstance: v, name: p, value: we.target.value }));
    let Ue = !1;
    we.target.value.length > 0 && (Ue = !0), ge(we.target.value), oe({
      isActive: Ue
    });
  }, ze = tn([
    "input--label"
  ]), ot = tn([
    "input--field"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: $e, children: /* @__PURE__ */ nt.jsxs("div", { className: Ke, children: [
    E && /* @__PURE__ */ nt.jsx("label", { className: ze, htmlFor: p, children: E }),
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        id: p,
        className: ot,
        disabled: j,
        autoComplete: "email",
        ...$,
        onChange: Ge
      }
    ),
    de && de.length !== 0 && /* @__PURE__ */ nt.jsx(nt.Fragment, { children: de.map((we, Ue) => /* @__PURE__ */ nt.jsx("div", { className: tn(["input--error"]), children: we }, Ue)) })
  ] }) });
}
function wM(c) {
  const {
    formInstance: v,
    html: p,
    name: E,
    label: R,
    defaultValue: w,
    visibilityConditions: g,
    helpText: B,
    emailTag: M,
    storeAsDonorMeta: _,
    showInReceipt: z,
    nodeType: k,
    childNodes: L,
    disabled: U = !1,
    ...j
  } = c;
  return /* @__PURE__ */ nt.jsx("div", { className: tn(["html_wrapper"]), children: /* @__PURE__ */ nt.jsx("div", { className: tn(["html"]), dangerouslySetInnerHTML: { __html: p } }) });
}
function _M(c) {
  const {
    formInstance: v,
    name: p,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    helpText: B,
    emailTag: M,
    storeAsDonorMeta: _,
    showInReceipt: z,
    nodeType: k,
    childNodes: L,
    disabled: U = !1,
    ...j
  } = c, [$, I] = sn.useReducer(
    (ze, ot) => ({ ...ze, ...ot }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: oe,
    isInvalid: le
  } = $, ee = fs(Dv(v)), J = ds(), F = ee[p].errors, { setValidateField: de } = O0(v, p, E, g), ge = tn([
    "input_wrapper",
    "input_wrapper--" + p,
    "input_wrapper-type--" + k
  ]), $e = tn([
    "input",
    "input--" + p,
    "input-type--" + k,
    oe && "input--active",
    F && F.length > 0 && "input--invalid"
  ]), Ke = (ze) => {
    ze.preventDefault(), J(Fi({ formInstance: v, name: p, value: ze.target.value }));
    let ot = !1;
    ze.target.value.length > 0 && (ot = !0), de(ze.target.value), I({
      isActive: ot
    });
  }, Ge = tn([
    "input--field"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: ge, children: /* @__PURE__ */ nt.jsxs("div", { className: $e, children: [
    E && /* @__PURE__ */ nt.jsx("label", { className: tn(["input--label"]), htmlFor: p, children: E }),
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        type: "text",
        id: p,
        className: Ge,
        disabled: U,
        ...j,
        value: ee[p].value,
        onChange: Ke
      }
    ),
    F && F.length !== 0 && /* @__PURE__ */ nt.jsx(nt.Fragment, { children: F.map((ze, ot) => /* @__PURE__ */ nt.jsx("div", { className: tn(["input--error"]), children: ze }, ot)) })
  ] }) });
}
const S0 = $N({
  reducer: {
    misc: lM,
    forms: rM
  }
});
function xM({ childNodes: c, formInstance: v }) {
  const p = S0.getState().forms[v], E = p.fields, R = p.meta, w = S0.getState().misc.environment, g = (_) => {
    _.preventDefault();
    const z = {
      form_id: R.formId,
      payment_method: R.payment_method
    };
    for (const k in E)
      if (E.hasOwnProperty(k)) {
        const L = E[k];
        L.value && (z[k] = L.value);
      }
    B(z).then((k) => {
      k.url && (window.location.href = k.url);
    });
  };
  async function B(_) {
    return await (await fetch(OT(w) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_)
    })).json();
  }
  const M = tn([
    "form",
    "form--" + v
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: tn(["form_wrapper"]), children: /* @__PURE__ */ nt.jsx(
    "form",
    {
      className: M,
      onSubmit: g,
      noValidate: !0,
      children: c
    }
  ) });
}
function OM({ childNodes: c, name: v }) {
  const p = tn([
    "group",
    "group--" + v
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: p, children: c });
}
function DM(c) {
  const {
    formInstance: v,
    name: p,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    helpText: B,
    emailTag: M,
    alias: _,
    storeAsDonorMeta: z,
    showInReceipt: k,
    nodeType: L,
    events: U,
    childNodes: j,
    disabled: $ = !1,
    ...I
  } = c, [oe, le] = sn.useReducer(
    (we, Ue) => ({ ...we, ...Ue }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: ee,
    isInvalid: J
  } = oe, F = fs(Dv(v)), de = ds(), ge = F[p].errors, { setValidateField: $e } = O0(v, p, E, g), Ke = tn([
    "input_wrapper",
    "input_wrapper--" + p,
    "input_wrapper-type--" + L
  ]), Ge = tn([
    "input",
    "input--" + p,
    "input-type--" + L,
    ee && "input--active",
    ge && ge.length > 0 && "input--invalid"
  ]), ze = (we) => {
    we.preventDefault();
    const Ue = Number(we.target.value);
    de(Fi({ formInstance: v, name: p, value: Ue })), _ && de(Fi({ formInstance: v, name: _, value: Ue }));
    let Rt = !1;
    Ue && (Rt = !0), $e(Ue), le({
      isActive: Rt
    });
  }, ot = tn([
    "input--field"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: Ke, children: /* @__PURE__ */ nt.jsxs("div", { className: Ge, children: [
    E && /* @__PURE__ */ nt.jsx("label", { className: tn(["input--label"]), htmlFor: p, children: E }),
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        type: "number",
        id: p,
        className: ot,
        disabled: $,
        ...I,
        value: F[p].value,
        onChange: ze
      }
    ),
    ge && ge.length !== 0 && /* @__PURE__ */ nt.jsx(nt.Fragment, { children: ge.map((we, Ue) => /* @__PURE__ */ nt.jsx("div", { className: tn(["input--error"]), children: we }, Ue)) })
  ] }) });
}
function kM(c) {
  const {
    formInstance: v,
    name: p,
    label: E,
    options: R,
    defaultValue: w,
    visibilityConditions: g,
    validationRules: B,
    helpText: M,
    emailTag: _,
    storeAsDonorMeta: z,
    showInReceipt: k,
    nodeType: L,
    childNodes: U,
    disabled: j = !1,
    ...$
  } = c, I = fs(Dv(v)), oe = ds(), le = tn([
    "input",
    "input-radio",
    "input-radio--" + p
  ]), ee = tn([
    "input--option"
  ]);
  return sn.useEffect(() => {
    R && !R.some((J) => J.value === I[p].value) && oe(Fi({ formInstance: v, name: p, value: w }));
  }, [I.frequency.value]), /* @__PURE__ */ nt.jsx("div", { className: le, children: R ? R.map((J) => /* @__PURE__ */ nt.jsxs("div", { className: ee, children: [
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        id: v + p + J.value,
        name: p,
        type: "radio",
        value: J.value,
        checked: I[p].value === J.value,
        onChange: () => oe(Fi({ formInstance: v, name: p, value: J.value }))
      },
      p + J.value
    ),
    /* @__PURE__ */ nt.jsx("label", { htmlFor: v + p + J.value, children: J.label })
  ] })) : /* @__PURE__ */ nt.jsxs(nt.Fragment, { children: [
    /* @__PURE__ */ nt.jsx(
      "input",
      {
        id: v + p,
        name: p,
        type: "radio",
        value: "true",
        checked: !!I[p].value,
        onChange: () => oe(Fi({ formInstance: v, name: p, value: !I[p].value }))
      },
      p
    ),
    /* @__PURE__ */ nt.jsx("label", { htmlFor: v + p, children: E })
  ] }) });
}
function NM({ childNodes: c }) {
  const v = tn([
    "section"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: v, children: c });
}
function MM({ formInstance: c, childNodes: v }) {
  const p = fs(iM(c)), E = tn([
    "steps"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: E, children: v[p - 1] });
}
function LM({ childNodes: c }) {
  const v = tn([
    "step"
  ]);
  return /* @__PURE__ */ nt.jsx("div", { className: v, children: c });
}
const AM = {
  button: hM,
  checkbox: mM,
  email: TM,
  html: wM,
  text: _M,
  group: OM,
  number: DM,
  radio: kM,
  section: NM,
  steps: MM,
  step: LM,
  form: xM
}, zM = (c) => [
  "text",
  "number",
  "email",
  "phone",
  "checkbox",
  "radio",
  "hidden"
].includes(c.nodeType);
function UM({ formInstance: c, formId: v, env: p, lang: E }) {
  const R = fs(aM(c)), w = ds(), [g, B] = sn.useReducer(
    (j, $) => ({ ...j, ...$ }),
    {
      isLoading: !0,
      isInitialized: !1,
      config: null
    }
  ), {
    isLoading: M,
    isInitialized: _,
    config: z,
    error: k
  } = g;
  sn.useEffect(() => {
    const j = cM("fundyFormLoaded", { detail: { formInstance: c } });
    fM(document, j);
  }, []), sn.useEffect(() => {
    jM(v, p ?? "production").then((j) => {
      j.config && B({
        isLoading: !1,
        config: JSON.parse(j.config)
      }), j.errors && w(oM({ errors: j.errors })), B({
        isLoading: !1,
        error: ""
      });
    }), w(tM({ formInstance: c, formId: v, step: 0 })), M === !1 && _ === !1 && (L(z, c), B({ isInitialized: !0 }));
  }, [c, M]);
  const L = (j, $) => {
    zM(j) && w(Fi({ formInstance: $, name: j.name, value: j.defaultValue })), j.nodes && j.nodes.map((I) => L(I, $));
  }, U = (j, $) => {
    let I = null;
    if (I = AM[j.nodeType], !I || !xT(R.fields, j.visibilityConditions))
      return null;
    const oe = j.nodes ? j.nodes.map((le) => U(le, $)) : null;
    return /* @__PURE__ */ nt.jsx(I, { formInstance: $, childNodes: oe, ...j }, j.name);
  };
  return R === void 0 ? null : M || _ === !1 ? /* @__PURE__ */ nt.jsx("div", { className: tn(["loading"]), children: /* @__PURE__ */ nt.jsx("div", { className: tn(["loading__message"]), children: "Loading..." }) }) : /* @__PURE__ */ nt.jsx(nt.Fragment, { children: U(z, c) });
}
async function jM(c, v) {
  return await (await fetch(OT(v) + "/api/v1/form/config/" + c, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
}
let PM = 0;
function FM() {
  return PM++;
}
function DT(c, v, p) {
  if (c.nodeType === 3) {
    const E = c.nodeValue.match(v);
    if (E) {
      const R = p(E);
      c.parentNode.replaceChild(R, c);
    }
  } else
    c.childNodes.forEach((E) => DT(E, v, p));
}
const VM = /\[fundy-form id="(\d+)" env="(\w+)" lang="(\w+)"\]/, HM = (c) => {
  const v = document.createElement("div");
  return v.className = "fundy-form", v.setAttribute("data-form-id", c[1]), v.setAttribute("data-env", c[2]), v;
};
DT(document.body, VM, HM);
for (const c of document.getElementsByClassName("fundy-form")) {
  const v = FM(), p = c.getAttribute("data-form-id"), E = c.getAttribute("data-env"), R = c.getAttribute("data-lang");
  wv.createRoot(c).render(
    /* @__PURE__ */ nt.jsx(Sk.StrictMode, { children: /* @__PURE__ */ nt.jsx(Kk, { store: S0, children: /* @__PURE__ */ nt.jsx(UM, { formInstance: v, formId: p, env: E, lang: R }) }) })
  );
}
