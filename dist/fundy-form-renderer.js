function fk(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var o0 = { exports: {} }, Ev = {}, l0 = { exports: {} }, At = {};
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
function dk() {
  if (o1)
    return At;
  o1 = 1;
  var c = Symbol.for("react.element"), h = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), N = Symbol.iterator;
  function A(k) {
    return k === null || typeof k != "object" ? null : (k = N && k[N] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, Y = {};
  function V(k, ue, Re) {
    this.props = k, this.context = ue, this.refs = Y, this.updater = Re || F;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(k, ue) {
    if (typeof k != "object" && typeof k != "function" && k != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, ue, "setState");
  }, V.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function le() {
  }
  le.prototype = V.prototype;
  function oe(k, ue, Re) {
    this.props = k, this.context = ue, this.refs = Y, this.updater = Re || F;
  }
  var te = oe.prototype = new le();
  te.constructor = oe, B(te, V.prototype), te.isPureReactComponent = !0;
  var J = Array.isArray, I = Object.prototype.hasOwnProperty, me = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(k, ue, Re) {
    var nt, Qe = {}, Ct = null, ft = null;
    if (ue != null)
      for (nt in ue.ref !== void 0 && (ft = ue.ref), ue.key !== void 0 && (Ct = "" + ue.key), ue)
        I.call(ue, nt) && !Ee.hasOwnProperty(nt) && (Qe[nt] = ue[nt]);
    var St = arguments.length - 2;
    if (St === 1)
      Qe.children = Re;
    else if (1 < St) {
      for (var dt = Array(St), Ut = 0; Ut < St; Ut++)
        dt[Ut] = arguments[Ut + 2];
      Qe.children = dt;
    }
    if (k && k.defaultProps)
      for (nt in St = k.defaultProps, St)
        Qe[nt] === void 0 && (Qe[nt] = St[nt]);
    return { $$typeof: c, type: k, key: Ct, ref: ft, props: Qe, _owner: me.current };
  }
  function ut(k, ue) {
    return { $$typeof: c, type: k.type, key: ue, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function at(k) {
    return typeof k == "object" && k !== null && k.$$typeof === c;
  }
  function We(k) {
    var ue = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Re) {
      return ue[Re];
    });
  }
  var wt = /\/+/g;
  function He(k, ue) {
    return typeof k == "object" && k !== null && k.key != null ? We("" + k.key) : ue.toString(36);
  }
  function tt(k, ue, Re, nt, Qe) {
    var Ct = typeof k;
    (Ct === "undefined" || Ct === "boolean") && (k = null);
    var ft = !1;
    if (k === null)
      ft = !0;
    else
      switch (Ct) {
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case c:
            case h:
              ft = !0;
          }
      }
    if (ft)
      return ft = k, Qe = Qe(ft), k = nt === "" ? "." + He(ft, 0) : nt, J(Qe) ? (Re = "", k != null && (Re = k.replace(wt, "$&/") + "/"), tt(Qe, ue, Re, "", function(Ut) {
        return Ut;
      })) : Qe != null && (at(Qe) && (Qe = ut(Qe, Re + (!Qe.key || ft && ft.key === Qe.key ? "" : ("" + Qe.key).replace(wt, "$&/") + "/") + k)), ue.push(Qe)), 1;
    if (ft = 0, nt = nt === "" ? "." : nt + ":", J(k))
      for (var St = 0; St < k.length; St++) {
        Ct = k[St];
        var dt = nt + He(Ct, St);
        ft += tt(Ct, ue, Re, dt, Qe);
      }
    else if (dt = A(k), typeof dt == "function")
      for (k = dt.call(k), St = 0; !(Ct = k.next()).done; )
        Ct = Ct.value, dt = nt + He(Ct, St++), ft += tt(Ct, ue, Re, dt, Qe);
    else if (Ct === "object")
      throw ue = String(k), Error("Objects are not valid as a React child (found: " + (ue === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : ue) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function Ot(k, ue, Re) {
    if (k == null)
      return k;
    var nt = [], Qe = 0;
    return tt(k, nt, "", "", function(Ct) {
      return ue.call(Re, Ct, Qe++);
    }), nt;
  }
  function gt(k) {
    if (k._status === -1) {
      var ue = k._result;
      ue = ue(), ue.then(function(Re) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Re);
      }, function(Re) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Re);
      }), k._status === -1 && (k._status = 0, k._result = ue);
    }
    if (k._status === 1)
      return k._result.default;
    throw k._result;
  }
  var _e = { current: null }, ve = { transition: null }, Pe = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: ve, ReactCurrentOwner: me };
  return At.Children = { map: Ot, forEach: function(k, ue, Re) {
    Ot(k, function() {
      ue.apply(this, arguments);
    }, Re);
  }, count: function(k) {
    var ue = 0;
    return Ot(k, function() {
      ue++;
    }), ue;
  }, toArray: function(k) {
    return Ot(k, function(ue) {
      return ue;
    }) || [];
  }, only: function(k) {
    if (!at(k))
      throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, At.Component = V, At.Fragment = p, At.Profiler = R, At.PureComponent = oe, At.StrictMode = E, At.Suspense = M, At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, At.cloneElement = function(k, ue, Re) {
    if (k == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var nt = B({}, k.props), Qe = k.key, Ct = k.ref, ft = k._owner;
    if (ue != null) {
      if (ue.ref !== void 0 && (Ct = ue.ref, ft = me.current), ue.key !== void 0 && (Qe = "" + ue.key), k.type && k.type.defaultProps)
        var St = k.type.defaultProps;
      for (dt in ue)
        I.call(ue, dt) && !Ee.hasOwnProperty(dt) && (nt[dt] = ue[dt] === void 0 && St !== void 0 ? St[dt] : ue[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1)
      nt.children = Re;
    else if (1 < dt) {
      St = Array(dt);
      for (var Ut = 0; Ut < dt; Ut++)
        St[Ut] = arguments[Ut + 2];
      nt.children = St;
    }
    return { $$typeof: c, type: k.type, key: Qe, ref: Ct, props: nt, _owner: ft };
  }, At.createContext = function(k) {
    return k = { $$typeof: g, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: w, _context: k }, k.Consumer = k;
  }, At.createElement = Ke, At.createFactory = function(k) {
    var ue = Ke.bind(null, k);
    return ue.type = k, ue;
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(k) {
    return { $$typeof: H, render: k };
  }, At.isValidElement = at, At.lazy = function(k) {
    return { $$typeof: U, _payload: { _status: -1, _result: k }, _init: gt };
  }, At.memo = function(k, ue) {
    return { $$typeof: x, type: k, compare: ue === void 0 ? null : ue };
  }, At.startTransition = function(k) {
    var ue = ve.transition;
    ve.transition = {};
    try {
      k();
    } finally {
      ve.transition = ue;
    }
  }, At.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, At.useCallback = function(k, ue) {
    return _e.current.useCallback(k, ue);
  }, At.useContext = function(k) {
    return _e.current.useContext(k);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(k) {
    return _e.current.useDeferredValue(k);
  }, At.useEffect = function(k, ue) {
    return _e.current.useEffect(k, ue);
  }, At.useId = function() {
    return _e.current.useId();
  }, At.useImperativeHandle = function(k, ue, Re) {
    return _e.current.useImperativeHandle(k, ue, Re);
  }, At.useInsertionEffect = function(k, ue) {
    return _e.current.useInsertionEffect(k, ue);
  }, At.useLayoutEffect = function(k, ue) {
    return _e.current.useLayoutEffect(k, ue);
  }, At.useMemo = function(k, ue) {
    return _e.current.useMemo(k, ue);
  }, At.useReducer = function(k, ue, Re) {
    return _e.current.useReducer(k, ue, Re);
  }, At.useRef = function(k) {
    return _e.current.useRef(k);
  }, At.useState = function(k) {
    return _e.current.useState(k);
  }, At.useSyncExternalStore = function(k, ue, Re) {
    return _e.current.useSyncExternalStore(k, ue, Re);
  }, At.useTransition = function() {
    return _e.current.useTransition();
  }, At.version = "18.2.0", At;
}
var Rv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Rv.exports;
var l1;
function pk() {
  return l1 || (l1 = 1, function(c, h) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", E = Symbol.for("react.element"), R = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), x = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), V = Symbol.iterator, le = "@@iterator";
      function oe(S) {
        if (S === null || typeof S != "object")
          return null;
        var O = V && S[V] || S[le];
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
      }, I = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {}, Ke = null;
      function ut(S) {
        Ke = S;
      }
      Ee.setExtraStackFrame = function(S) {
        Ke = S;
      }, Ee.getCurrentStack = null, Ee.getStackAddendum = function() {
        var S = "";
        Ke && (S += Ke);
        var O = Ee.getCurrentStack;
        return O && (S += O() || ""), S;
      };
      var at = !1, We = !1, wt = !1, He = !1, tt = !1, Ot = {
        ReactCurrentDispatcher: te,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: me
      };
      Ot.ReactDebugCurrentFrame = Ee, Ot.ReactCurrentActQueue = I;
      function gt(S) {
        {
          for (var O = arguments.length, K = new Array(O > 1 ? O - 1 : 0), ee = 1; ee < O; ee++)
            K[ee - 1] = arguments[ee];
          ve("warn", S, K);
        }
      }
      function _e(S) {
        {
          for (var O = arguments.length, K = new Array(O > 1 ? O - 1 : 0), ee = 1; ee < O; ee++)
            K[ee - 1] = arguments[ee];
          ve("error", S, K);
        }
      }
      function ve(S, O, K) {
        {
          var ee = Ot.ReactDebugCurrentFrame, he = ee.getStackAddendum();
          he !== "" && (O += "%s", K = K.concat([he]));
          var Je = K.map(function(Te) {
            return String(Te);
          });
          Je.unshift("Warning: " + O), Function.prototype.apply.call(console[S], console, Je);
        }
      }
      var Pe = {};
      function k(S, O) {
        {
          var K = S.constructor, ee = K && (K.displayName || K.name) || "ReactClass", he = ee + "." + O;
          if (Pe[he])
            return;
          _e("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, ee), Pe[he] = !0;
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
          k(S, "forceUpdate");
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
          k(S, "replaceState");
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
          k(S, "setState");
        }
      }, Re = Object.assign, nt = {};
      Object.freeze(nt);
      function Qe(S, O, K) {
        this.props = S, this.context = O, this.refs = nt, this.updater = K || ue;
      }
      Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(S, O) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, O, "setState");
      }, Qe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ft = function(S, O) {
          Object.defineProperty(Qe.prototype, S, {
            get: function() {
              gt("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var St in Ct)
          Ct.hasOwnProperty(St) && ft(St, Ct[St]);
      }
      function dt() {
      }
      dt.prototype = Qe.prototype;
      function Ut(S, O, K) {
        this.props = S, this.context = O, this.refs = nt, this.updater = K || ue;
      }
      var er = Ut.prototype = new dt();
      er.constructor = Ut, Re(er, Qe.prototype), er.isPureReactComponent = !0;
      function In() {
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
      function Kr(S, O, K) {
        var ee = S.displayName;
        if (ee)
          return ee;
        var he = O.displayName || O.name || "";
        return he !== "" ? K + "(" + he + ")" : K;
      }
      function Xr(S) {
        return S.displayName || "Context";
      }
      function tr(S) {
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
          case H:
            return "Profiler";
          case g:
            return "StrictMode";
          case N:
            return "Suspense";
          case A:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case x:
              var O = S;
              return Xr(O) + ".Consumer";
            case M:
              var K = S;
              return Xr(K._context) + ".Provider";
            case U:
              return Kr(S, S.render, "ForwardRef");
            case F:
              var ee = S.displayName || null;
              return ee !== null ? ee : tr(S.type) || "Memo";
            case B: {
              var he = S, Je = he._payload, Te = he._init;
              try {
                return tr(Te(Je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rr = Object.prototype.hasOwnProperty, Zr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Tr, ga, cr;
      cr = {};
      function Jr(S) {
        if (Rr.call(S, "ref")) {
          var O = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function _n(S) {
        if (Rr.call(S, "key")) {
          var O = Object.getOwnPropertyDescriptor(S, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ar(S, O) {
        var K = function() {
          Tr || (Tr = !0, _e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: K,
          configurable: !0
        });
      }
      function mi(S, O) {
        var K = function() {
          ga || (ga = !0, _e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: K,
          configurable: !0
        });
      }
      function Sa(S) {
        if (typeof S.ref == "string" && me.current && S.__self && me.current.stateNode !== S.__self) {
          var O = tr(me.current.type);
          cr[O] || (_e('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, S.ref), cr[O] = !0);
        }
      }
      var ge = function(S, O, K, ee, he, Je, Te) {
        var Xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: O,
          ref: K,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: Je
        };
        return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.defineProperty(Xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: he
        }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
      };
      function Be(S, O, K) {
        var ee, he = {}, Je = null, Te = null, Xe = null, Rt = null;
        if (O != null) {
          Jr(O) && (Te = O.ref, Sa(O)), _n(O) && (Rn(O.key), Je = "" + O.key), Xe = O.__self === void 0 ? null : O.__self, Rt = O.__source === void 0 ? null : O.__source;
          for (ee in O)
            Rr.call(O, ee) && !Zr.hasOwnProperty(ee) && (he[ee] = O[ee]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          he.children = K;
        else if (Ft > 1) {
          for (var ln = Array(Ft), en = 0; en < Ft; en++)
            ln[en] = arguments[en + 2];
          Object.freeze && Object.freeze(ln), he.children = ln;
        }
        if (S && S.defaultProps) {
          var sn = S.defaultProps;
          for (ee in sn)
            he[ee] === void 0 && (he[ee] = sn[ee]);
        }
        if (Je || Te) {
          var mn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Je && Ar(he, mn), Te && mi(he, mn);
        }
        return ge(S, Je, Te, Xe, Rt, me.current, he);
      }
      function Et(S, O) {
        var K = ge(S.type, O, S.ref, S._self, S._source, S._owner, S.props);
        return K;
      }
      function $t(S, O, K) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var ee, he = Re({}, S.props), Je = S.key, Te = S.ref, Xe = S._self, Rt = S._source, Ft = S._owner;
        if (O != null) {
          Jr(O) && (Te = O.ref, Ft = me.current), _n(O) && (Rn(O.key), Je = "" + O.key);
          var ln;
          S.type && S.type.defaultProps && (ln = S.type.defaultProps);
          for (ee in O)
            Rr.call(O, ee) && !Zr.hasOwnProperty(ee) && (O[ee] === void 0 && ln !== void 0 ? he[ee] = ln[ee] : he[ee] = O[ee]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          he.children = K;
        else if (en > 1) {
          for (var sn = Array(en), mn = 0; mn < en; mn++)
            sn[mn] = arguments[mn + 2];
          he.children = sn;
        }
        return ge(S.type, Je, Te, Xe, Rt, Ft, he);
      }
      function Wt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var Pn = ".", xn = ":";
      function wr(S) {
        var O = /[=:]/g, K = {
          "=": "=0",
          ":": "=2"
        }, ee = S.replace(O, function(he) {
          return K[he];
        });
        return "$" + ee;
      }
      var Jt = !1, zr = /\/+/g;
      function Qt(S) {
        return S.replace(zr, "$&/");
      }
      function Gt(S, O) {
        return typeof S == "object" && S !== null && S.key != null ? (Rn(S.key), wr("" + S.key)) : O.toString(36);
      }
      function ni(S, O, K, ee, he) {
        var Je = typeof S;
        (Je === "undefined" || Je === "boolean") && (S = null);
        var Te = !1;
        if (S === null)
          Te = !0;
        else
          switch (Je) {
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
          var Xe = S, Rt = he(Xe), Ft = ee === "" ? Pn + Gt(Xe, 0) : ee;
          if (Zt(Rt)) {
            var ln = "";
            Ft != null && (ln = Qt(Ft) + "/"), ni(Rt, O, ln, "", function(vd) {
              return vd;
            });
          } else
            Rt != null && (Wt(Rt) && (Rt.key && (!Xe || Xe.key !== Rt.key) && Rn(Rt.key), Rt = Et(
              Rt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              K + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Rt.key && (!Xe || Xe.key !== Rt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Qt("" + Rt.key) + "/"
              ) : "") + Ft
            )), O.push(Rt));
          return 1;
        }
        var en, sn, mn = 0, Dt = ee === "" ? Pn : ee + xn;
        if (Zt(S))
          for (var Hi = 0; Hi < S.length; Hi++)
            en = S[Hi], sn = Dt + Gt(en, Hi), mn += ni(en, O, K, sn, he);
        else {
          var cl = oe(S);
          if (typeof cl == "function") {
            var vs = S;
            cl === vs.entries && (Jt || gt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var pd = cl.call(vs), ui, hs = 0; !(ui = pd.next()).done; )
              en = ui.value, sn = Dt + Gt(en, hs++), mn += ni(en, O, K, sn, he);
          } else if (Je === "object") {
            var ms = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (ms === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : ms) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return mn;
      }
      function Aa(S, O, K) {
        if (S == null)
          return S;
        var ee = [], he = 0;
        return ni(S, ee, "", "", function(Je) {
          return O.call(K, Je, he++);
        }), ee;
      }
      function vu(S) {
        var O = 0;
        return Aa(S, function() {
          O++;
        }), O;
      }
      function io(S, O, K) {
        Aa(S, function() {
          O.apply(this, arguments);
        }, K);
      }
      function Zo(S) {
        return Aa(S, function(O) {
          return O;
        }) || [];
      }
      function Pi(S) {
        if (!Wt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function hu(S) {
        var O = {
          $$typeof: x,
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
        var K = !1, ee = !1, he = !1;
        {
          var Je = {
            $$typeof: x,
            _context: O
          };
          Object.defineProperties(Je, {
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
                he || (gt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), he = !0);
              }
            }
          }), O.Consumer = Je;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var Ea = -1, yi = 0, Ca = 1, gi = 2;
      function Ur(S) {
        if (S._status === Ea) {
          var O = S._result, K = O();
          if (K.then(function(Je) {
            if (S._status === yi || S._status === Ea) {
              var Te = S;
              Te._status = Ca, Te._result = Je;
            }
          }, function(Je) {
            if (S._status === yi || S._status === Ea) {
              var Te = S;
              Te._status = gi, Te._result = Je;
            }
          }), S._status === Ea) {
            var ee = S;
            ee._status = yi, ee._result = K;
          }
        }
        if (S._status === Ca) {
          var he = S._result;
          return he === void 0 && _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, he), "default" in he || _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, he), he.default;
        } else
          throw S._result;
      }
      function ba(S) {
        var O = {
          // We use these fields to store the result.
          _status: Ea,
          _result: S
        }, K = {
          $$typeof: B,
          _payload: O,
          _init: Ur
        };
        {
          var ee, he;
          Object.defineProperties(K, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(Je) {
                _e("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = Je, Object.defineProperty(K, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return he;
              },
              set: function(Je) {
                _e("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), he = Je, Object.defineProperty(K, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return K;
      }
      function Si(S) {
        S != null && S.$$typeof === F ? _e("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? _e("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && _e("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && _e("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
        return !!(typeof S == "string" || typeof S == "function" || S === w || S === H || tt || S === g || S === N || S === A || He || S === Y || at || We || wt || typeof S == "object" && S !== null && (S.$$typeof === B || S.$$typeof === F || S.$$typeof === M || S.$$typeof === x || S.$$typeof === U || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === D || S.getModuleId !== void 0));
      }
      function Se(S, O) {
        se(S) || _e("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var K = {
          $$typeof: F,
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
            set: function(he) {
              ee = he, !S.name && !S.displayName && (S.displayName = he);
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
      function vt(S) {
        var O = Ne();
        if (S._context !== void 0) {
          var K = S._context;
          K.Consumer === S ? _e("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : K.Provider === S && _e("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(S);
      }
      function kt(S) {
        var O = Ne();
        return O.useState(S);
      }
      function ht(S, O, K) {
        var ee = Ne();
        return ee.useReducer(S, O, K);
      }
      function Ge(S) {
        var O = Ne();
        return O.useRef(S);
      }
      function Bn(S, O) {
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
      function fr(S, O) {
        var K = Ne();
        return K.useCallback(S, O);
      }
      function Ei(S, O) {
        var K = Ne();
        return K.useMemo(S, O);
      }
      function Jo(S, O, K) {
        var ee = Ne();
        return ee.useImperativeHandle(S, O, K);
      }
      function jt(S, O) {
        {
          var K = Ne();
          return K.useDebugValue(S, O);
        }
      }
      function fd() {
        var S = Ne();
        return S.useTransition();
      }
      function ri(S) {
        var O = Ne();
        return O.useDeferredValue(S);
      }
      function bt() {
        var S = Ne();
        return S.useId();
      }
      function Ci(S, O, K) {
        var ee = Ne();
        return ee.useSyncExternalStore(S, O, K);
      }
      var mu = 0, el, yu, ea, cs, jr, fs, ds;
      function Sc() {
      }
      Sc.__reactDisabledLog = !0;
      function tl() {
        {
          if (mu === 0) {
            el = console.log, yu = console.info, ea = console.warn, cs = console.error, jr = console.group, fs = console.groupCollapsed, ds = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: Sc,
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
          mu++;
        }
      }
      function gu() {
        {
          if (mu--, mu === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Re({}, S, {
                value: el
              }),
              info: Re({}, S, {
                value: yu
              }),
              warn: Re({}, S, {
                value: ea
              }),
              error: Re({}, S, {
                value: cs
              }),
              group: Re({}, S, {
                value: jr
              }),
              groupCollapsed: Re({}, S, {
                value: fs
              }),
              groupEnd: Re({}, S, {
                value: ds
              })
            });
          }
          mu < 0 && _e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ai = Ot.ReactCurrentDispatcher, Pr;
      function Su(S, O, K) {
        {
          if (Pr === void 0)
            try {
              throw Error();
            } catch (he) {
              var ee = he.stack.trim().match(/\n( *(at )?)/);
              Pr = ee && ee[1] || "";
            }
          return `
` + Pr + S;
        }
      }
      var Eu = !1, Cu;
      {
        var nl = typeof WeakMap == "function" ? WeakMap : Map;
        Cu = new nl();
      }
      function rl(S, O) {
        if (!S || Eu)
          return "";
        {
          var K = Cu.get(S);
          if (K !== void 0)
            return K;
        }
        var ee;
        Eu = !0;
        var he = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Je;
        Je = ai.current, ai.current = null, tl();
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
              } catch (Dt) {
                ee = Dt;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (Dt) {
                ee = Dt;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Dt) {
              ee = Dt;
            }
            S();
          }
        } catch (Dt) {
          if (Dt && ee && typeof Dt.stack == "string") {
            for (var Xe = Dt.stack.split(`
`), Rt = ee.stack.split(`
`), Ft = Xe.length - 1, ln = Rt.length - 1; Ft >= 1 && ln >= 0 && Xe[Ft] !== Rt[ln]; )
              ln--;
            for (; Ft >= 1 && ln >= 0; Ft--, ln--)
              if (Xe[Ft] !== Rt[ln]) {
                if (Ft !== 1 || ln !== 1)
                  do
                    if (Ft--, ln--, ln < 0 || Xe[Ft] !== Rt[ln]) {
                      var en = `
` + Xe[Ft].replace(" at new ", " at ");
                      return S.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", S.displayName)), typeof S == "function" && Cu.set(S, en), en;
                    }
                  while (Ft >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          Eu = !1, ai.current = Je, gu(), Error.prepareStackTrace = he;
        }
        var sn = S ? S.displayName || S.name : "", mn = sn ? Su(sn) : "";
        return typeof S == "function" && Cu.set(S, mn), mn;
      }
      function Fi(S, O, K) {
        return rl(S, !1);
      }
      function dd(S) {
        var O = S.prototype;
        return !!(O && O.isReactComponent);
      }
      function bi(S, O, K) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return rl(S, dd(S));
        if (typeof S == "string")
          return Su(S);
        switch (S) {
          case N:
            return Su("Suspense");
          case A:
            return Su("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case U:
              return Fi(S.render);
            case F:
              return bi(S.type, O, K);
            case B: {
              var ee = S, he = ee._payload, Je = ee._init;
              try {
                return bi(Je(he), O, K);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, al = Ot.ReactDebugCurrentFrame;
      function uo(S) {
        if (S) {
          var O = S._owner, K = bi(S.type, S._source, O ? O.type : null);
          al.setExtraStackFrame(K);
        } else
          al.setExtraStackFrame(null);
      }
      function il(S, O, K, ee, he) {
        {
          var Je = Function.call.bind(Rr);
          for (var Te in S)
            if (Je(S, Te)) {
              var Xe = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var Rt = Error((ee || "React class") + ": " + K + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Rt.name = "Invariant Violation", Rt;
                }
                Xe = S[Te](O, Te, ee, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Xe = Ft;
              }
              Xe && !(Xe instanceof Error) && (uo(he), _e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", K, Te, typeof Xe), uo(null)), Xe instanceof Error && !(Xe.message in Ht) && (Ht[Xe.message] = !0, uo(he), _e("Failed %s type: %s", K, Xe.message), uo(null));
            }
        }
      }
      function Pt(S) {
        if (S) {
          var O = S._owner, K = bi(S.type, S._source, O ? O.type : null);
          ut(K);
        } else
          ut(null);
      }
      var ul;
      ul = !1;
      function ol() {
        if (me.current) {
          var S = tr(me.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function st(S) {
        if (S !== void 0) {
          var O = S.fileName.replace(/^.*[\\\/]/, ""), K = S.lineNumber;
          return `

Check your code at ` + O + ":" + K + ".";
        }
        return "";
      }
      function oo(S) {
        return S != null ? st(S.__source) : "";
      }
      var On = {};
      function ta(S) {
        var O = ol();
        if (!O) {
          var K = typeof S == "string" ? S : S.displayName || S.name;
          K && (O = `

Check the top-level render call using <` + K + ">.");
        }
        return O;
      }
      function Fr(S, O) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var K = ta(O);
          if (!On[K]) {
            On[K] = !0;
            var ee = "";
            S && S._owner && S._owner !== me.current && (ee = " It was passed a child from " + tr(S._owner.type) + "."), Pt(S), _e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ee), Pt(null);
          }
        }
      }
      function bu(S, O) {
        if (typeof S == "object") {
          if (Zt(S))
            for (var K = 0; K < S.length; K++) {
              var ee = S[K];
              Wt(ee) && Fr(ee, O);
            }
          else if (Wt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var he = oe(S);
            if (typeof he == "function" && he !== S.entries)
              for (var Je = he.call(S), Te; !(Te = Je.next()).done; )
                Wt(Te.value) && Fr(Te.value, O);
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
          O.$$typeof === F))
            K = O.propTypes;
          else
            return;
          if (K) {
            var ee = tr(O);
            il(K, S.props, "prop", ee, S);
          } else if (O.PropTypes !== void 0 && !ul) {
            ul = !0;
            var he = tr(O);
            _e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
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
      function Ec(S, O, K) {
        var ee = se(S);
        if (!ee) {
          var he = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = oo(O);
          Je ? he += Je : he += ol();
          var Te;
          S === null ? Te = "null" : Zt(S) ? Te = "array" : S !== void 0 && S.$$typeof === E ? (Te = "<" + (tr(S.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, _e("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, he);
        }
        var Xe = Be.apply(this, arguments);
        if (Xe == null)
          return Xe;
        if (ee)
          for (var Rt = 2; Rt < arguments.length; Rt++)
            bu(arguments[Rt], S);
        return S === w ? qt(Xe) : Ln(Xe), Xe;
      }
      var na = !1;
      function nr(S) {
        var O = Ec.bind(null, S);
        return O.type = S, na || (na = !0, gt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return gt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), O;
      }
      function Ri(S, O, K) {
        for (var ee = $t.apply(this, arguments), he = 2; he < arguments.length; he++)
          bu(arguments[he], ee.type);
        return Ln(ee), ee;
      }
      function Cc(S, O) {
        var K = J.transition;
        J.transition = {};
        var ee = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (J.transition = K, K === null && ee._updatedFibers) {
            var he = ee._updatedFibers.size;
            he > 10 && gt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ee._updatedFibers.clear();
          }
        }
      }
      var Vi = !1, Ru = null;
      function bc(S) {
        if (Ru === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), K = c && c[O];
            Ru = K.call(c, "timers").setImmediate;
          } catch {
            Ru = function(he) {
              Vi === !1 && (Vi = !0, typeof MessageChannel > "u" && _e("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Je = new MessageChannel();
              Je.port1.onmessage = he, Je.port2.postMessage(void 0);
            };
          }
        return Ru(S);
      }
      var za = 0, Tu = !1;
      function wu(S) {
        {
          var O = za;
          za++, I.current === null && (I.current = []);
          var K = I.isBatchingLegacy, ee;
          try {
            if (I.isBatchingLegacy = !0, ee = S(), !K && I.didScheduleLegacyUpdate) {
              var he = I.current;
              he !== null && (I.didScheduleLegacyUpdate = !1, xu(he));
            }
          } catch (sn) {
            throw Ua(O), sn;
          } finally {
            I.isBatchingLegacy = K;
          }
          if (ee !== null && typeof ee == "object" && typeof ee.then == "function") {
            var Je = ee, Te = !1, Xe = {
              then: function(sn, mn) {
                Te = !0, Je.then(function(Dt) {
                  Ua(O), za === 0 ? ll(Dt, sn, mn) : sn(Dt);
                }, function(Dt) {
                  Ua(O), mn(Dt);
                });
              }
            };
            return !Tu && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (Tu = !0, _e("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Xe;
          } else {
            var Rt = ee;
            if (Ua(O), za === 0) {
              var Ft = I.current;
              Ft !== null && (xu(Ft), I.current = null);
              var ln = {
                then: function(sn, mn) {
                  I.current === null ? (I.current = [], ll(Rt, sn, mn)) : sn(Rt);
                }
              };
              return ln;
            } else {
              var en = {
                then: function(sn, mn) {
                  sn(Rt);
                }
              };
              return en;
            }
          }
        }
      }
      function Ua(S) {
        S !== za - 1 && _e("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), za = S;
      }
      function ll(S, O, K) {
        {
          var ee = I.current;
          if (ee !== null)
            try {
              xu(ee), bc(function() {
                ee.length === 0 ? (I.current = null, O(S)) : ll(S, O, K);
              });
            } catch (he) {
              K(he);
            }
          else
            O(S);
        }
      }
      var _u = !1;
      function xu(S) {
        if (!_u) {
          _u = !0;
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
            _u = !1;
          }
        }
      }
      var lo = Ec, sl = Ri, ps = nr, ii = {
        map: Aa,
        forEach: io,
        count: vu,
        toArray: Zo,
        only: Pi
      };
      h.Children = ii, h.Component = Qe, h.Fragment = w, h.Profiler = H, h.PureComponent = Ut, h.StrictMode = g, h.Suspense = N, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ot, h.cloneElement = sl, h.createContext = hu, h.createElement = lo, h.createFactory = ps, h.createRef = In, h.forwardRef = Si, h.isValidElement = Wt, h.lazy = ba, h.memo = Se, h.startTransition = Cc, h.unstable_act = wu, h.useCallback = fr, h.useContext = vt, h.useDebugValue = jt, h.useDeferredValue = ri, h.useEffect = Bn, h.useId = bt, h.useImperativeHandle = Jo, h.useInsertionEffect = vn, h.useLayoutEffect = hn, h.useMemo = Ei, h.useReducer = ht, h.useRef = Ge, h.useState = kt, h.useSyncExternalStore = Ci, h.useTransition = fd, h.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Rv, Rv.exports)), Rv.exports;
}
({}).NODE_ENV === "production" ? l0.exports = dk() : l0.exports = pk();
var dn = l0.exports;
const vk = /* @__PURE__ */ fk(dn);
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
function hk() {
  if (s1)
    return Ev;
  s1 = 1;
  var c = dn, h = Symbol.for("react.element"), p = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(H, M, x) {
    var U, N = {}, A = null, F = null;
    x !== void 0 && (A = "" + x), M.key !== void 0 && (A = "" + M.key), M.ref !== void 0 && (F = M.ref);
    for (U in M)
      E.call(M, U) && !w.hasOwnProperty(U) && (N[U] = M[U]);
    if (H && H.defaultProps)
      for (U in M = H.defaultProps, M)
        N[U] === void 0 && (N[U] = M[U]);
    return { $$typeof: h, type: H, key: A, ref: F, props: N, _owner: R.current };
  }
  return Ev.Fragment = p, Ev.jsx = g, Ev.jsxs = g, Ev;
}
var Cv = {};
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
function mk() {
  return c1 || (c1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = dn, h = Symbol.for("react.element"), p = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), H = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), B = Symbol.iterator, Y = "@@iterator";
    function V(D) {
      if (D === null || typeof D != "object")
        return null;
      var se = B && D[B] || D[Y];
      return typeof se == "function" ? se : null;
    }
    var le = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function oe(D) {
      {
        for (var se = arguments.length, Se = new Array(se > 1 ? se - 1 : 0), Ne = 1; Ne < se; Ne++)
          Se[Ne - 1] = arguments[Ne];
        te("error", D, Se);
      }
    }
    function te(D, se, Se) {
      {
        var Ne = le.ReactDebugCurrentFrame, vt = Ne.getStackAddendum();
        vt !== "" && (se += "%s", Se = Se.concat([vt]));
        var kt = Se.map(function(ht) {
          return String(ht);
        });
        kt.unshift("Warning: " + se), Function.prototype.apply.call(console[D], console, kt);
      }
    }
    var J = !1, I = !1, me = !1, Ee = !1, Ke = !1, ut;
    ut = Symbol.for("react.module.reference");
    function at(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === E || D === w || Ke || D === R || D === x || D === U || Ee || D === F || J || I || me || typeof D == "object" && D !== null && (D.$$typeof === A || D.$$typeof === N || D.$$typeof === g || D.$$typeof === H || D.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === ut || D.getModuleId !== void 0));
    }
    function We(D, se, Se) {
      var Ne = D.displayName;
      if (Ne)
        return Ne;
      var vt = se.displayName || se.name || "";
      return vt !== "" ? Se + "(" + vt + ")" : Se;
    }
    function wt(D) {
      return D.displayName || "Context";
    }
    function He(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
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
        case x:
          return "Suspense";
        case U:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case H:
            var se = D;
            return wt(se) + ".Consumer";
          case g:
            var Se = D;
            return wt(Se._context) + ".Provider";
          case M:
            return We(D, D.render, "ForwardRef");
          case N:
            var Ne = D.displayName || null;
            return Ne !== null ? Ne : He(D.type) || "Memo";
          case A: {
            var vt = D, kt = vt._payload, ht = vt._init;
            try {
              return He(ht(kt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, Ot = 0, gt, _e, ve, Pe, k, ue, Re;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Qe() {
      {
        if (Ot === 0) {
          gt = console.log, _e = console.info, ve = console.warn, Pe = console.error, k = console.group, ue = console.groupCollapsed, Re = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: nt,
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
        Ot++;
      }
    }
    function Ct() {
      {
        if (Ot--, Ot === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, D, {
              value: gt
            }),
            info: tt({}, D, {
              value: _e
            }),
            warn: tt({}, D, {
              value: ve
            }),
            error: tt({}, D, {
              value: Pe
            }),
            group: tt({}, D, {
              value: k
            }),
            groupCollapsed: tt({}, D, {
              value: ue
            }),
            groupEnd: tt({}, D, {
              value: Re
            })
          });
        }
        Ot < 0 && oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ft = le.ReactCurrentDispatcher, St;
    function dt(D, se, Se) {
      {
        if (St === void 0)
          try {
            throw Error();
          } catch (vt) {
            var Ne = vt.stack.trim().match(/\n( *(at )?)/);
            St = Ne && Ne[1] || "";
          }
        return `
` + St + D;
      }
    }
    var Ut = !1, er;
    {
      var In = typeof WeakMap == "function" ? WeakMap : Map;
      er = new In();
    }
    function Oe(D, se) {
      if (!D || Ut)
        return "";
      {
        var Se = er.get(D);
        if (Se !== void 0)
          return Se;
      }
      var Ne;
      Ut = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var kt;
      kt = ft.current, ft.current = null, Qe();
      try {
        if (se) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (jt) {
              Ne = jt;
            }
            Reflect.construct(D, [], ht);
          } else {
            try {
              ht.call();
            } catch (jt) {
              Ne = jt;
            }
            D.call(ht.prototype);
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
          for (var Ge = jt.stack.split(`
`), Bn = Ne.stack.split(`
`), vn = Ge.length - 1, hn = Bn.length - 1; vn >= 1 && hn >= 0 && Ge[vn] !== Bn[hn]; )
            hn--;
          for (; vn >= 1 && hn >= 0; vn--, hn--)
            if (Ge[vn] !== Bn[hn]) {
              if (vn !== 1 || hn !== 1)
                do
                  if (vn--, hn--, hn < 0 || Ge[vn] !== Bn[hn]) {
                    var fr = `
` + Ge[vn].replace(" at new ", " at ");
                    return D.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", D.displayName)), typeof D == "function" && er.set(D, fr), fr;
                  }
                while (vn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        Ut = !1, ft.current = kt, Ct(), Error.prepareStackTrace = vt;
      }
      var Ei = D ? D.displayName || D.name : "", Jo = Ei ? dt(Ei) : "";
      return typeof D == "function" && er.set(D, Jo), Jo;
    }
    function Zt(D, se, Se) {
      return Oe(D, !1);
    }
    function we(D) {
      var se = D.prototype;
      return !!(se && se.isReactComponent);
    }
    function pn(D, se, Se) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Oe(D, we(D));
      if (typeof D == "string")
        return dt(D);
      switch (D) {
        case x:
          return dt("Suspense");
        case U:
          return dt("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case M:
            return Zt(D.render);
          case N:
            return pn(D.type, se, Se);
          case A: {
            var Ne = D, vt = Ne._payload, kt = Ne._init;
            try {
              return pn(kt(vt), se, Se);
            } catch {
            }
          }
        }
      return "";
    }
    var bn = Object.prototype.hasOwnProperty, Rn = {}, Kr = le.ReactDebugCurrentFrame;
    function Xr(D) {
      if (D) {
        var se = D._owner, Se = pn(D.type, D._source, se ? se.type : null);
        Kr.setExtraStackFrame(Se);
      } else
        Kr.setExtraStackFrame(null);
    }
    function tr(D, se, Se, Ne, vt) {
      {
        var kt = Function.call.bind(bn);
        for (var ht in D)
          if (kt(D, ht)) {
            var Ge = void 0;
            try {
              if (typeof D[ht] != "function") {
                var Bn = Error((Ne || "React class") + ": " + Se + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Bn.name = "Invariant Violation", Bn;
              }
              Ge = D[ht](se, ht, Ne, Se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (vn) {
              Ge = vn;
            }
            Ge && !(Ge instanceof Error) && (Xr(vt), oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", Se, ht, typeof Ge), Xr(null)), Ge instanceof Error && !(Ge.message in Rn) && (Rn[Ge.message] = !0, Xr(vt), oe("Failed %s type: %s", Se, Ge.message), Xr(null));
          }
      }
    }
    var Rr = Array.isArray;
    function Zr(D) {
      return Rr(D);
    }
    function Tr(D) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, Se = se && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return Se;
      }
    }
    function ga(D) {
      try {
        return cr(D), !1;
      } catch {
        return !0;
      }
    }
    function cr(D) {
      return "" + D;
    }
    function Jr(D) {
      if (ga(D))
        return oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(D)), cr(D);
    }
    var _n = le.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mi, Sa, ge;
    ge = {};
    function Be(D) {
      if (bn.call(D, "ref")) {
        var se = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Et(D) {
      if (bn.call(D, "key")) {
        var se = Object.getOwnPropertyDescriptor(D, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function $t(D, se) {
      if (typeof D.ref == "string" && _n.current && se && _n.current.stateNode !== se) {
        var Se = He(_n.current.type);
        ge[Se] || (oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', He(_n.current.type), D.ref), ge[Se] = !0);
      }
    }
    function Wt(D, se) {
      {
        var Se = function() {
          mi || (mi = !0, oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Se.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: Se,
          configurable: !0
        });
      }
    }
    function Pn(D, se) {
      {
        var Se = function() {
          Sa || (Sa = !0, oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Se.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: Se,
          configurable: !0
        });
      }
    }
    var xn = function(D, se, Se, Ne, vt, kt, ht) {
      var Ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: D,
        key: se,
        ref: Se,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: kt
      };
      return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
    };
    function wr(D, se, Se, Ne, vt) {
      {
        var kt, ht = {}, Ge = null, Bn = null;
        Se !== void 0 && (Jr(Se), Ge = "" + Se), Et(se) && (Jr(se.key), Ge = "" + se.key), Be(se) && (Bn = se.ref, $t(se, vt));
        for (kt in se)
          bn.call(se, kt) && !Ar.hasOwnProperty(kt) && (ht[kt] = se[kt]);
        if (D && D.defaultProps) {
          var vn = D.defaultProps;
          for (kt in vn)
            ht[kt] === void 0 && (ht[kt] = vn[kt]);
        }
        if (Ge || Bn) {
          var hn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ge && Wt(ht, hn), Bn && Pn(ht, hn);
        }
        return xn(D, Ge, Bn, vt, Ne, _n.current, ht);
      }
    }
    var Jt = le.ReactCurrentOwner, zr = le.ReactDebugCurrentFrame;
    function Qt(D) {
      if (D) {
        var se = D._owner, Se = pn(D.type, D._source, se ? se.type : null);
        zr.setExtraStackFrame(Se);
      } else
        zr.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function ni(D) {
      return typeof D == "object" && D !== null && D.$$typeof === h;
    }
    function Aa() {
      {
        if (Jt.current) {
          var D = He(Jt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function vu(D) {
      {
        if (D !== void 0) {
          var se = D.fileName.replace(/^.*[\\\/]/, ""), Se = D.lineNumber;
          return `

Check your code at ` + se + ":" + Se + ".";
        }
        return "";
      }
    }
    var io = {};
    function Zo(D) {
      {
        var se = Aa();
        if (!se) {
          var Se = typeof D == "string" ? D : D.displayName || D.name;
          Se && (se = `

Check the top-level render call using <` + Se + ">.");
        }
        return se;
      }
    }
    function Pi(D, se) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var Se = Zo(se);
        if (io[Se])
          return;
        io[Se] = !0;
        var Ne = "";
        D && D._owner && D._owner !== Jt.current && (Ne = " It was passed a child from " + He(D._owner.type) + "."), Qt(D), oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Se, Ne), Qt(null);
      }
    }
    function hu(D, se) {
      {
        if (typeof D != "object")
          return;
        if (Zr(D))
          for (var Se = 0; Se < D.length; Se++) {
            var Ne = D[Se];
            ni(Ne) && Pi(Ne, se);
          }
        else if (ni(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var vt = V(D);
          if (typeof vt == "function" && vt !== D.entries)
            for (var kt = vt.call(D), ht; !(ht = kt.next()).done; )
              ni(ht.value) && Pi(ht.value, se);
        }
      }
    }
    function Ea(D) {
      {
        var se = D.type;
        if (se == null || typeof se == "string")
          return;
        var Se;
        if (typeof se == "function")
          Se = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === N))
          Se = se.propTypes;
        else
          return;
        if (Se) {
          var Ne = He(se);
          tr(Se, D.props, "prop", Ne, D);
        } else if (se.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var vt = He(se);
          oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yi(D) {
      {
        for (var se = Object.keys(D.props), Se = 0; Se < se.length; Se++) {
          var Ne = se[Se];
          if (Ne !== "children" && Ne !== "key") {
            Qt(D), oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Qt(null);
            break;
          }
        }
        D.ref !== null && (Qt(D), oe("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function Ca(D, se, Se, Ne, vt, kt) {
      {
        var ht = at(D);
        if (!ht) {
          var Ge = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Bn = vu(vt);
          Bn ? Ge += Bn : Ge += Aa();
          var vn;
          D === null ? vn = "null" : Zr(D) ? vn = "array" : D !== void 0 && D.$$typeof === h ? (vn = "<" + (He(D.type) || "Unknown") + " />", Ge = " Did you accidentally export a JSX literal instead of a component?") : vn = typeof D, oe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", vn, Ge);
        }
        var hn = wr(D, se, Se, vt, kt);
        if (hn == null)
          return hn;
        if (ht) {
          var fr = se.children;
          if (fr !== void 0)
            if (Ne)
              if (Zr(fr)) {
                for (var Ei = 0; Ei < fr.length; Ei++)
                  hu(fr[Ei], D);
                Object.freeze && Object.freeze(fr);
              } else
                oe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hu(fr, D);
        }
        return D === E ? yi(hn) : Ea(hn), hn;
      }
    }
    function gi(D, se, Se) {
      return Ca(D, se, Se, !0);
    }
    function Ur(D, se, Se) {
      return Ca(D, se, Se, !1);
    }
    var ba = Ur, Si = gi;
    Cv.Fragment = E, Cv.jsx = ba, Cv.jsxs = Si;
  }()), Cv;
}
({}).NODE_ENV === "production" ? o0.exports = hk() : o0.exports = mk();
var zt = o0.exports, Tv = {}, s0 = { exports: {} }, ei = {}, hy = { exports: {} }, QE = {};
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
function yk() {
  return f1 || (f1 = 1, function(c) {
    function h(ve, Pe) {
      var k = ve.length;
      ve.push(Pe);
      e:
        for (; 0 < k; ) {
          var ue = k - 1 >>> 1, Re = ve[ue];
          if (0 < R(Re, Pe))
            ve[ue] = Pe, ve[k] = Re, k = ue;
          else
            break e;
        }
    }
    function p(ve) {
      return ve.length === 0 ? null : ve[0];
    }
    function E(ve) {
      if (ve.length === 0)
        return null;
      var Pe = ve[0], k = ve.pop();
      if (k !== Pe) {
        ve[0] = k;
        e:
          for (var ue = 0, Re = ve.length, nt = Re >>> 1; ue < nt; ) {
            var Qe = 2 * (ue + 1) - 1, Ct = ve[Qe], ft = Qe + 1, St = ve[ft];
            if (0 > R(Ct, k))
              ft < Re && 0 > R(St, Ct) ? (ve[ue] = St, ve[ft] = k, ue = ft) : (ve[ue] = Ct, ve[Qe] = k, ue = Qe);
            else if (ft < Re && 0 > R(St, k))
              ve[ue] = St, ve[ft] = k, ue = ft;
            else
              break e;
          }
      }
      return Pe;
    }
    function R(ve, Pe) {
      var k = ve.sortIndex - Pe.sortIndex;
      return k !== 0 ? k : ve.id - Pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      c.unstable_now = function() {
        return w.now();
      };
    } else {
      var g = Date, H = g.now();
      c.unstable_now = function() {
        return g.now() - H;
      };
    }
    var M = [], x = [], U = 1, N = null, A = 3, F = !1, B = !1, Y = !1, V = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function te(ve) {
      for (var Pe = p(x); Pe !== null; ) {
        if (Pe.callback === null)
          E(x);
        else if (Pe.startTime <= ve)
          E(x), Pe.sortIndex = Pe.expirationTime, h(M, Pe);
        else
          break;
        Pe = p(x);
      }
    }
    function J(ve) {
      if (Y = !1, te(ve), !B)
        if (p(M) !== null)
          B = !0, gt(I);
        else {
          var Pe = p(x);
          Pe !== null && _e(J, Pe.startTime - ve);
        }
    }
    function I(ve, Pe) {
      B = !1, Y && (Y = !1, le(Ke), Ke = -1), F = !0;
      var k = A;
      try {
        for (te(Pe), N = p(M); N !== null && (!(N.expirationTime > Pe) || ve && !We()); ) {
          var ue = N.callback;
          if (typeof ue == "function") {
            N.callback = null, A = N.priorityLevel;
            var Re = ue(N.expirationTime <= Pe);
            Pe = c.unstable_now(), typeof Re == "function" ? N.callback = Re : N === p(M) && E(M), te(Pe);
          } else
            E(M);
          N = p(M);
        }
        if (N !== null)
          var nt = !0;
        else {
          var Qe = p(x);
          Qe !== null && _e(J, Qe.startTime - Pe), nt = !1;
        }
        return nt;
      } finally {
        N = null, A = k, F = !1;
      }
    }
    var me = !1, Ee = null, Ke = -1, ut = 5, at = -1;
    function We() {
      return !(c.unstable_now() - at < ut);
    }
    function wt() {
      if (Ee !== null) {
        var ve = c.unstable_now();
        at = ve;
        var Pe = !0;
        try {
          Pe = Ee(!0, ve);
        } finally {
          Pe ? He() : (me = !1, Ee = null);
        }
      } else
        me = !1;
    }
    var He;
    if (typeof oe == "function")
      He = function() {
        oe(wt);
      };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), Ot = tt.port2;
      tt.port1.onmessage = wt, He = function() {
        Ot.postMessage(null);
      };
    } else
      He = function() {
        V(wt, 0);
      };
    function gt(ve) {
      Ee = ve, me || (me = !0, He());
    }
    function _e(ve, Pe) {
      Ke = V(function() {
        ve(c.unstable_now());
      }, Pe);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ve) {
      ve.callback = null;
    }, c.unstable_continueExecution = function() {
      B || F || (B = !0, gt(I));
    }, c.unstable_forceFrameRate = function(ve) {
      0 > ve || 125 < ve ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ut = 0 < ve ? Math.floor(1e3 / ve) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(M);
    }, c.unstable_next = function(ve) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Pe = 3;
          break;
        default:
          Pe = A;
      }
      var k = A;
      A = Pe;
      try {
        return ve();
      } finally {
        A = k;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ve, Pe) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ve = 3;
      }
      var k = A;
      A = ve;
      try {
        return Pe();
      } finally {
        A = k;
      }
    }, c.unstable_scheduleCallback = function(ve, Pe, k) {
      var ue = c.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? ue + k : ue) : k = ue, ve) {
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
      return Re = k + Re, ve = { id: U++, callback: Pe, priorityLevel: ve, startTime: k, expirationTime: Re, sortIndex: -1 }, k > ue ? (ve.sortIndex = k, h(x, ve), p(M) === null && ve === p(x) && (Y ? (le(Ke), Ke = -1) : Y = !0, _e(J, k - ue))) : (ve.sortIndex = Re, h(M, ve), B || F || (B = !0, gt(I))), ve;
    }, c.unstable_shouldYield = We, c.unstable_wrapCallback = function(ve) {
      var Pe = A;
      return function() {
        var k = A;
        A = Pe;
        try {
          return ve.apply(this, arguments);
        } finally {
          A = k;
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
function gk() {
  return d1 || (d1 = 1, function(c) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = !1, p = !1, E = 5;
      function R(ge, Be) {
        var Et = ge.length;
        ge.push(Be), H(ge, Be, Et);
      }
      function w(ge) {
        return ge.length === 0 ? null : ge[0];
      }
      function g(ge) {
        if (ge.length === 0)
          return null;
        var Be = ge[0], Et = ge.pop();
        return Et !== Be && (ge[0] = Et, M(ge, Et, 0)), Be;
      }
      function H(ge, Be, Et) {
        for (var $t = Et; $t > 0; ) {
          var Wt = $t - 1 >>> 1, Pn = ge[Wt];
          if (x(Pn, Be) > 0)
            ge[Wt] = Be, ge[$t] = Pn, $t = Wt;
          else
            return;
        }
      }
      function M(ge, Be, Et) {
        for (var $t = Et, Wt = ge.length, Pn = Wt >>> 1; $t < Pn; ) {
          var xn = ($t + 1) * 2 - 1, wr = ge[xn], Jt = xn + 1, zr = ge[Jt];
          if (x(wr, Be) < 0)
            Jt < Wt && x(zr, wr) < 0 ? (ge[$t] = zr, ge[Jt] = Be, $t = Jt) : (ge[$t] = wr, ge[xn] = Be, $t = xn);
          else if (Jt < Wt && x(zr, Be) < 0)
            ge[$t] = zr, ge[Jt] = Be, $t = Jt;
          else
            return;
        }
      }
      function x(ge, Be) {
        var Et = ge.sortIndex - Be.sortIndex;
        return Et !== 0 ? Et : ge.id - Be.id;
      }
      var U = 1, N = 2, A = 3, F = 4, B = 5;
      function Y(ge, Be) {
      }
      var V = typeof performance == "object" && typeof performance.now == "function";
      if (V) {
        var le = performance;
        c.unstable_now = function() {
          return le.now();
        };
      } else {
        var oe = Date, te = oe.now();
        c.unstable_now = function() {
          return oe.now() - te;
        };
      }
      var J = 1073741823, I = -1, me = 250, Ee = 5e3, Ke = 1e4, ut = J, at = [], We = [], wt = 1, He = null, tt = A, Ot = !1, gt = !1, _e = !1, ve = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ue(ge) {
        for (var Be = w(We); Be !== null; ) {
          if (Be.callback === null)
            g(We);
          else if (Be.startTime <= ge)
            g(We), Be.sortIndex = Be.expirationTime, R(at, Be);
          else
            return;
          Be = w(We);
        }
      }
      function Re(ge) {
        if (_e = !1, ue(ge), !gt)
          if (w(at) !== null)
            gt = !0, Jr(nt);
          else {
            var Be = w(We);
            Be !== null && _n(Re, Be.startTime - ge);
          }
      }
      function nt(ge, Be) {
        gt = !1, _e && (_e = !1, Ar()), Ot = !0;
        var Et = tt;
        try {
          var $t;
          if (!p)
            return Qe(ge, Be);
        } finally {
          He = null, tt = Et, Ot = !1;
        }
      }
      function Qe(ge, Be) {
        var Et = Be;
        for (ue(Et), He = w(at); He !== null && !h && !(He.expirationTime > Et && (!ge || Xr())); ) {
          var $t = He.callback;
          if (typeof $t == "function") {
            He.callback = null, tt = He.priorityLevel;
            var Wt = He.expirationTime <= Et, Pn = $t(Wt);
            Et = c.unstable_now(), typeof Pn == "function" ? He.callback = Pn : He === w(at) && g(at), ue(Et);
          } else
            g(at);
          He = w(at);
        }
        if (He !== null)
          return !0;
        var xn = w(We);
        return xn !== null && _n(Re, xn.startTime - Et), !1;
      }
      function Ct(ge, Be) {
        switch (ge) {
          case U:
          case N:
          case A:
          case F:
          case B:
            break;
          default:
            ge = A;
        }
        var Et = tt;
        tt = ge;
        try {
          return Be();
        } finally {
          tt = Et;
        }
      }
      function ft(ge) {
        var Be;
        switch (tt) {
          case U:
          case N:
          case A:
            Be = A;
            break;
          default:
            Be = tt;
            break;
        }
        var Et = tt;
        tt = Be;
        try {
          return ge();
        } finally {
          tt = Et;
        }
      }
      function St(ge) {
        var Be = tt;
        return function() {
          var Et = tt;
          tt = Be;
          try {
            return ge.apply(this, arguments);
          } finally {
            tt = Et;
          }
        };
      }
      function dt(ge, Be, Et) {
        var $t = c.unstable_now(), Wt;
        if (typeof Et == "object" && Et !== null) {
          var Pn = Et.delay;
          typeof Pn == "number" && Pn > 0 ? Wt = $t + Pn : Wt = $t;
        } else
          Wt = $t;
        var xn;
        switch (ge) {
          case U:
            xn = I;
            break;
          case N:
            xn = me;
            break;
          case B:
            xn = ut;
            break;
          case F:
            xn = Ke;
            break;
          case A:
          default:
            xn = Ee;
            break;
        }
        var wr = Wt + xn, Jt = {
          id: wt++,
          callback: Be,
          priorityLevel: ge,
          startTime: Wt,
          expirationTime: wr,
          sortIndex: -1
        };
        return Wt > $t ? (Jt.sortIndex = Wt, R(We, Jt), w(at) === null && Jt === w(We) && (_e ? Ar() : _e = !0, _n(Re, Wt - $t))) : (Jt.sortIndex = wr, R(at, Jt), !gt && !Ot && (gt = !0, Jr(nt))), Jt;
      }
      function Ut() {
      }
      function er() {
        !gt && !Ot && (gt = !0, Jr(nt));
      }
      function In() {
        return w(at);
      }
      function Oe(ge) {
        ge.callback = null;
      }
      function Zt() {
        return tt;
      }
      var we = !1, pn = null, bn = -1, Rn = E, Kr = -1;
      function Xr() {
        var ge = c.unstable_now() - Kr;
        return !(ge < Rn);
      }
      function tr() {
      }
      function Rr(ge) {
        if (ge < 0 || ge > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ge > 0 ? Rn = Math.floor(1e3 / ge) : Rn = E;
      }
      var Zr = function() {
        if (pn !== null) {
          var ge = c.unstable_now();
          Kr = ge;
          var Be = !0, Et = !0;
          try {
            Et = pn(Be, ge);
          } finally {
            Et ? Tr() : (we = !1, pn = null);
          }
        } else
          we = !1;
      }, Tr;
      if (typeof k == "function")
        Tr = function() {
          k(Zr);
        };
      else if (typeof MessageChannel < "u") {
        var ga = new MessageChannel(), cr = ga.port2;
        ga.port1.onmessage = Zr, Tr = function() {
          cr.postMessage(null);
        };
      } else
        Tr = function() {
          ve(Zr, 0);
        };
      function Jr(ge) {
        pn = ge, we || (we = !0, Tr());
      }
      function _n(ge, Be) {
        bn = ve(function() {
          ge(c.unstable_now());
        }, Be);
      }
      function Ar() {
        Pe(bn), bn = -1;
      }
      var mi = tr, Sa = null;
      c.unstable_IdlePriority = B, c.unstable_ImmediatePriority = U, c.unstable_LowPriority = F, c.unstable_NormalPriority = A, c.unstable_Profiling = Sa, c.unstable_UserBlockingPriority = N, c.unstable_cancelCallback = Oe, c.unstable_continueExecution = er, c.unstable_forceFrameRate = Rr, c.unstable_getCurrentPriorityLevel = Zt, c.unstable_getFirstCallbackNode = In, c.unstable_next = ft, c.unstable_pauseExecution = Ut, c.unstable_requestPaint = mi, c.unstable_runWithPriority = Ct, c.unstable_scheduleCallback = dt, c.unstable_shouldYield = Xr, c.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(GE)), GE;
}
var p1;
function G1() {
  return p1 || (p1 = 1, {}.NODE_ENV === "production" ? hy.exports = yk() : hy.exports = gk()), hy.exports;
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
function Sk() {
  if (v1)
    return ei;
  v1 = 1;
  var c = dn, h = G1();
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
  var H = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, N = {};
  function A(n) {
    return M.call(N, n) ? !0 : M.call(U, n) ? !1 : x.test(n) ? N[n] = !0 : (U[n] = !0, !1);
  }
  function F(n, r, u, l) {
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
    if (r === null || typeof r > "u" || F(n, r, u, l))
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
  function Y(n, r, u, l, f, v, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = C;
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    V[n] = new Y(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    V[r] = new Y(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    V[n] = new Y(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    V[n] = new Y(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    V[n] = new Y(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    V[n] = new Y(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    V[n] = new Y(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    V[n] = new Y(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    V[n] = new Y(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function oe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      le,
      oe
    );
    V[r] = new Y(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(le, oe);
    V[r] = new Y(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(le, oe);
    V[r] = new Y(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    V[n] = new Y(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), V.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    V[n] = new Y(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function te(n, r, u, l) {
    var f = V.hasOwnProperty(r) ? V[r] : null;
    (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, u, f, l) && (u = null), l || f === null ? A(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : f.mustUseProperty ? n[f.propertyName] = u === null ? f.type === 3 ? !1 : "" : u : (r = f.attributeName, l = f.attributeNamespace, u === null ? n.removeAttribute(r) : (f = f.type, u = f === 3 || f === 4 && u === !0 ? "" : "" + u, l ? n.setAttributeNS(l, r, u) : n.setAttribute(r, u))));
  }
  var J = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = Symbol.for("react.element"), me = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), Ke = Symbol.for("react.strict_mode"), ut = Symbol.for("react.profiler"), at = Symbol.for("react.provider"), We = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), ve = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = ve && n[ve] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, ue;
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
  var nt = !1;
  function Qe(n, r) {
    if (!n || nt)
      return "";
    nt = !0;
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
`), v = l.stack.split(`
`), C = f.length - 1, _ = v.length - 1; 1 <= C && 0 <= _ && f[C] !== v[_]; )
          _--;
        for (; 1 <= C && 0 <= _; C--, _--)
          if (f[C] !== v[_]) {
            if (C !== 1 || _ !== 1)
              do
                if (C--, _--, 0 > _ || f[C] !== v[_]) {
                  var L = `
` + f[C].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= C && 0 <= _);
            break;
          }
      }
    } finally {
      nt = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? Re(n) : "";
  }
  function Ct(n) {
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
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ft(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ee:
        return "Fragment";
      case me:
        return "Portal";
      case ut:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case He:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case We:
          return (n.displayName || "Context") + ".Consumer";
        case at:
          return (n._context.displayName || "Context") + ".Provider";
        case wt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ot:
          return r = n.displayName || null, r !== null ? r : ft(n.type) || "Memo";
        case gt:
          r = n._payload, n = n._init;
          try {
            return ft(n(r));
          } catch {
          }
      }
    return null;
  }
  function St(n) {
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
        return ft(r);
      case 8:
        return r === Ke ? "StrictMode" : "Mode";
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
  function dt(n) {
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
  function er(n) {
    var r = Ut(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), l = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var f = u.get, v = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(C) {
        l = "" + C, v.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(C) {
        l = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function In(n) {
    n._valueTracker || (n._valueTracker = er(n));
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
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function pn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    u = dt(r.value != null ? r.value : u), n._wrapperState = { initialChecked: l, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function bn(n, r) {
    r = r.checked, r != null && te(n, "checked", r, !1);
  }
  function Rn(n, r) {
    bn(n, r);
    var u = dt(r.value), l = r.type;
    if (u != null)
      l === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xr(n, r.type, u) : r.hasOwnProperty("defaultValue") && Xr(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Kr(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function Xr(n, r, u) {
    (r !== "number" || Zt(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var tr = Array.isArray;
  function Rr(n, r, u, l) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < u.length; f++)
        r["$" + u[f]] = !0;
      for (u = 0; u < n.length; u++)
        f = r.hasOwnProperty("$" + n[u].value), n[u].selected !== f && (n[u].selected = f), f && l && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + dt(u), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === u) {
          n[f].selected = !0, l && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Zr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return k({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Tr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(p(92));
        if (tr(u)) {
          if (1 < u.length)
            throw Error(p(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: dt(u) };
  }
  function ga(n, r) {
    var u = dt(r.value), l = dt(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), l != null && (n.defaultValue = "" + l);
  }
  function cr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Jr(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Jr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ar, mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, l, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, l, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ar.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Sa(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ge = {
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
  }, Be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ge).forEach(function(n) {
    Be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ge[r] = ge[n];
    });
  });
  function Et(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || ge.hasOwnProperty(n) && ge[n] ? ("" + r).trim() : r + "px";
  }
  function $t(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var l = u.indexOf("--") === 0, f = Et(u, r[u], l);
        u === "float" && (u = "cssFloat"), l ? n.setProperty(u, f) : n[u] = f;
      }
  }
  var Wt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pn(n, r) {
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
  var wr = null;
  function Jt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var zr = null, Qt = null, Gt = null;
  function ni(n) {
    if (n = xs(n)) {
      if (typeof zr != "function")
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = Ye(r), zr(n.stateNode, n.type, r));
    }
  }
  function Aa(n) {
    Qt ? Gt ? Gt.push(n) : Gt = [n] : Qt = n;
  }
  function vu() {
    if (Qt) {
      var n = Qt, r = Gt;
      if (Gt = Qt = null, ni(n), r)
        for (n = 0; n < r.length; n++)
          ni(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function Zo() {
  }
  var Pi = !1;
  function hu(n, r, u) {
    if (Pi)
      return n(r, u);
    Pi = !0;
    try {
      return io(n, r, u);
    } finally {
      Pi = !1, (Qt !== null || Gt !== null) && (Zo(), vu());
    }
  }
  function Ea(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var l = Ye(u);
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
  var yi = !1;
  if (H)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", { get: function() {
        yi = !0;
      } }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
    } catch {
      yi = !1;
    }
  function gi(n, r, u, l, f, v, C, _, L) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, Z);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var Ur = !1, ba = null, Si = !1, D = null, se = { onError: function(n) {
    Ur = !0, ba = n;
  } };
  function Se(n, r, u, l, f, v, C, _, L) {
    Ur = !1, ba = null, gi.apply(se, arguments);
  }
  function Ne(n, r, u, l, f, v, C, _, L) {
    if (Se.apply(this, arguments), Ur) {
      if (Ur) {
        var Z = ba;
        Ur = !1, ba = null;
      } else
        throw Error(p(198));
      Si || (Si = !0, D = Z);
    }
  }
  function vt(n) {
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
  function kt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ht(n) {
    if (vt(n) !== n)
      throw Error(p(188));
  }
  function Ge(n) {
    var r = n.alternate;
    if (!r) {
      if (r = vt(n), r === null)
        throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var u = n, l = r; ; ) {
      var f = u.return;
      if (f === null)
        break;
      var v = f.alternate;
      if (v === null) {
        if (l = f.return, l !== null) {
          u = l;
          continue;
        }
        break;
      }
      if (f.child === v.child) {
        for (v = f.child; v; ) {
          if (v === u)
            return ht(f), n;
          if (v === l)
            return ht(f), r;
          v = v.sibling;
        }
        throw Error(p(188));
      }
      if (u.return !== l.return)
        u = f, l = v;
      else {
        for (var C = !1, _ = f.child; _; ) {
          if (_ === u) {
            C = !0, u = f, l = v;
            break;
          }
          if (_ === l) {
            C = !0, l = f, u = v;
            break;
          }
          _ = _.sibling;
        }
        if (!C) {
          for (_ = v.child; _; ) {
            if (_ === u) {
              C = !0, u = v, l = f;
              break;
            }
            if (_ === l) {
              C = !0, l = v, u = f;
              break;
            }
            _ = _.sibling;
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
  function Bn(n) {
    return n = Ge(n), n !== null ? vn(n) : null;
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
  var hn = h.unstable_scheduleCallback, fr = h.unstable_cancelCallback, Ei = h.unstable_shouldYield, Jo = h.unstable_requestPaint, jt = h.unstable_now, fd = h.unstable_getCurrentPriorityLevel, ri = h.unstable_ImmediatePriority, bt = h.unstable_UserBlockingPriority, Ci = h.unstable_NormalPriority, mu = h.unstable_LowPriority, el = h.unstable_IdlePriority, yu = null, ea = null;
  function cs(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function")
      try {
        ea.onCommitFiberRoot(yu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var jr = Math.clz32 ? Math.clz32 : Sc, fs = Math.log, ds = Math.LN2;
  function Sc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fs(n) / ds | 0) | 0;
  }
  var tl = 64, gu = 4194304;
  function ai(n) {
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
  function Pr(n, r) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var l = 0, f = n.suspendedLanes, v = n.pingedLanes, C = u & 268435455;
    if (C !== 0) {
      var _ = C & ~f;
      _ !== 0 ? l = ai(_) : (v &= C, v !== 0 && (l = ai(v)));
    } else
      C = u & ~f, C !== 0 ? l = ai(C) : v !== 0 && (l = ai(v));
    if (l === 0)
      return 0;
    if (r !== 0 && r !== l && !(r & f) && (f = l & -l, v = r & -r, f >= v || f === 16 && (v & 4194240) !== 0))
      return r;
    if (l & 4 && (l |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= l; 0 < r; )
        u = 31 - jr(r), f = 1 << u, l |= n[u], r &= ~f;
    return l;
  }
  function Su(n, r) {
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
  function Eu(n, r) {
    for (var u = n.suspendedLanes, l = n.pingedLanes, f = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var C = 31 - jr(v), _ = 1 << C, L = f[C];
      L === -1 ? (!(_ & u) || _ & l) && (f[C] = Su(_, r)) : L <= r && (n.expiredLanes |= _), v &= ~_;
    }
  }
  function Cu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function nl() {
    var n = tl;
    return tl <<= 1, !(tl & 4194240) && (tl = 64), n;
  }
  function rl(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function Fi(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - jr(r), n[r] = u;
  }
  function dd(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var f = 31 - jr(u), v = 1 << f;
      r[f] = 0, l[f] = -1, n[f] = -1, u &= ~v;
    }
  }
  function bi(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var l = 31 - jr(u), f = 1 << l;
      f & r | n[l] & r && (n[l] |= r), u &= ~f;
    }
  }
  var Ht = 0;
  function al(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var uo, il, Pt, ul, ol, st = !1, oo = [], On = null, ta = null, Fr = null, bu = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), qt = [], Ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        Fr = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(r.pointerId);
    }
  }
  function nr(n, r, u, l, f, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: l, nativeEvent: v, targetContainers: [f] }, r !== null && (r = xs(r), r !== null && il(r)), n) : (n.eventSystemFlags |= l, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Ri(n, r, u, l, f) {
    switch (r) {
      case "focusin":
        return On = nr(On, n, r, u, l, f), !0;
      case "dragenter":
        return ta = nr(ta, n, r, u, l, f), !0;
      case "mouseover":
        return Fr = nr(Fr, n, r, u, l, f), !0;
      case "pointerover":
        var v = f.pointerId;
        return bu.set(v, nr(bu.get(v) || null, n, r, u, l, f)), !0;
      case "gotpointercapture":
        return v = f.pointerId, Ln.set(v, nr(Ln.get(v) || null, n, r, u, l, f)), !0;
    }
    return !1;
  }
  function Cc(n) {
    var r = Pa(n.target);
    if (r !== null) {
      var u = vt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = kt(u), r !== null) {
            n.blockedOn = r, ol(n.priority, function() {
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
  function Vi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = sl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var l = new u.constructor(u.type, u);
        wr = l, u.target.dispatchEvent(l), wr = null;
      } else
        return r = xs(u), r !== null && il(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function Ru(n, r, u) {
    Vi(n) && u.delete(r);
  }
  function bc() {
    st = !1, On !== null && Vi(On) && (On = null), ta !== null && Vi(ta) && (ta = null), Fr !== null && Vi(Fr) && (Fr = null), bu.forEach(Ru), Ln.forEach(Ru);
  }
  function za(n, r) {
    n.blockedOn === r && (n.blockedOn = null, st || (st = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, bc)));
  }
  function Tu(n) {
    function r(f) {
      return za(f, n);
    }
    if (0 < oo.length) {
      za(oo[0], n);
      for (var u = 1; u < oo.length; u++) {
        var l = oo[u];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (On !== null && za(On, n), ta !== null && za(ta, n), Fr !== null && za(Fr, n), bu.forEach(r), Ln.forEach(r), u = 0; u < qt.length; u++)
      l = qt[u], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < qt.length && (u = qt[0], u.blockedOn === null); )
      Cc(u), u.blockedOn === null && qt.shift();
  }
  var wu = J.ReactCurrentBatchConfig, Ua = !0;
  function ll(n, r, u, l) {
    var f = Ht, v = wu.transition;
    wu.transition = null;
    try {
      Ht = 1, xu(n, r, u, l);
    } finally {
      Ht = f, wu.transition = v;
    }
  }
  function _u(n, r, u, l) {
    var f = Ht, v = wu.transition;
    wu.transition = null;
    try {
      Ht = 4, xu(n, r, u, l);
    } finally {
      Ht = f, wu.transition = v;
    }
  }
  function xu(n, r, u, l) {
    if (Ua) {
      var f = sl(n, r, u, l);
      if (f === null)
        Nc(n, r, l, lo, u), na(n, l);
      else if (Ri(f, n, r, u, l))
        l.stopPropagation();
      else if (na(n, l), r & 4 && -1 < Ec.indexOf(n)) {
        for (; f !== null; ) {
          var v = xs(f);
          if (v !== null && uo(v), v = sl(n, r, u, l), v === null && Nc(n, r, l, lo, u), v === f)
            break;
          f = v;
        }
        f !== null && l.stopPropagation();
      } else
        Nc(n, r, l, null, u);
    }
  }
  var lo = null;
  function sl(n, r, u, l) {
    if (lo = null, n = Jt(l), n = Pa(n), n !== null)
      if (r = vt(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = kt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return lo = n, null;
  }
  function ps(n) {
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
        switch (fd()) {
          case ri:
            return 1;
          case bt:
            return 4;
          case Ci:
          case mu:
            return 16;
          case el:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, S = null, O = null;
  function K() {
    if (O)
      return O;
    var n, r = S, u = r.length, l, f = "value" in ii ? ii.value : ii.textContent, v = f.length;
    for (n = 0; n < u && r[n] === f[n]; n++)
      ;
    var C = u - n;
    for (l = 1; l <= C && r[u - l] === f[v - l]; l++)
      ;
    return O = f.slice(n, 1 < l ? 1 - l : void 0);
  }
  function ee(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function he() {
    return !0;
  }
  function Je() {
    return !1;
  }
  function Te(n) {
    function r(u, l, f, v, C) {
      this._reactName = u, this._targetInst = f, this.type = l, this.nativeEvent = v, this.target = C, this.currentTarget = null;
      for (var _ in n)
        n.hasOwnProperty(_) && (u = n[_], this[_] = u ? u(v) : v[_]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? he : Je, this.isPropagationStopped = Je, this;
    }
    return k(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = he);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = he);
    }, persist: function() {
    }, isPersistent: he }), r;
  }
  var Xe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rt = Te(Xe), Ft = k({}, Xe, { view: 0, detail: 0 }), ln = Te(Ft), en, sn, mn, Dt = k({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== mn && (mn && n.type === "mousemove" ? (en = n.screenX - mn.screenX, sn = n.screenY - mn.screenY) : sn = en = 0, mn = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : sn;
  } }), Hi = Te(Dt), cl = k({}, Dt, { dataTransfer: 0 }), vs = Te(cl), pd = k({}, Ft, { relatedTarget: 0 }), ui = Te(pd), hs = k({}, Xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ms = Te(hs), vd = k({}, Xe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), by = Te(vd), Ry = k({}, Xe, { data: 0 }), hd = Te(Ry), md = {
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
  function yd() {
    return Mv;
  }
  var Ii = k({}, Ft, { key: function(n) {
    if (n.key) {
      var r = md[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = ee(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(n) {
    return n.type === "keypress" ? ee(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ee(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ty = Te(Ii), gd = k({}, Dt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rc = Te(gd), Sd = k({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), wy = Te(Sd), Tc = k({}, Xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lv = Te(Tc), ra = k({}, Dt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bi = Te(ra), $n = [9, 13, 27, 32], oi = H && "CompositionEvent" in window, so = null;
  H && "documentMode" in document && (so = document.documentMode);
  var wc = H && "TextEvent" in window && !so, Av = H && (!oi || so && 8 < so && 11 >= so), fl = String.fromCharCode(32), zv = !1;
  function Uv(n, r) {
    switch (n) {
      case "keyup":
        return $n.indexOf(r.keyCode) !== -1;
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
  function _c(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var dl = !1;
  function _y(n, r) {
    switch (n) {
      case "compositionend":
        return _c(r);
      case "keypress":
        return r.which !== 32 ? null : (zv = !0, fl);
      case "textInput":
        return n = r.data, n === fl && zv ? null : n;
      default:
        return null;
    }
  }
  function xy(n, r) {
    if (dl)
      return n === "compositionend" || !oi && Uv(n, r) ? (n = K(), O = S = ii = null, dl = !1, n) : null;
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
    Aa(l), r = Ts(r, "onChange"), 0 < r.length && (u = new Rt("onChange", "change", null, u, l), n.push({ event: u, listeners: r }));
  }
  var ys = null, pl = null;
  function vl(n) {
    kc(n, 0);
  }
  function hl(n) {
    var r = yl(n);
    if (Oe(r))
      return n;
  }
  function Vv(n, r) {
    if (n === "change")
      return r;
  }
  var Ed = !1;
  if (H) {
    var Cd;
    if (H) {
      var bd = "oninput" in document;
      if (!bd) {
        var Hv = document.createElement("div");
        Hv.setAttribute("oninput", "return;"), bd = typeof Hv.oninput == "function";
      }
      Cd = bd;
    } else
      Cd = !1;
    Ed = Cd && (!document.documentMode || 9 < document.documentMode);
  }
  function Iv() {
    ys && (ys.detachEvent("onpropertychange", Bv), pl = ys = null);
  }
  function Bv(n) {
    if (n.propertyName === "value" && hl(pl)) {
      var r = [];
      Fv(r, pl, n, Jt(n)), hu(vl, r);
    }
  }
  function Oy(n, r, u) {
    n === "focusin" ? (Iv(), ys = r, pl = u, ys.attachEvent("onpropertychange", Bv)) : n === "focusout" && Iv();
  }
  function Dy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return hl(pl);
  }
  function ky(n, r) {
    if (n === "click")
      return hl(r);
  }
  function $v(n, r) {
    if (n === "input" || n === "change")
      return hl(r);
  }
  function Ny(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ja = typeof Object.is == "function" ? Object.is : Ny;
  function gs(n, r) {
    if (ja(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), l = Object.keys(r);
    if (u.length !== l.length)
      return !1;
    for (l = 0; l < u.length; l++) {
      var f = u[l];
      if (!M.call(r, f) || !ja(n[f], r[f]))
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
  function xc() {
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
  function $i(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Oc(n) {
    var r = xc(), u = n.focusedElem, l = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Qv(u.ownerDocument.documentElement, u)) {
      if (l !== null && $i(u)) {
        if (r = l.start, n = l.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = u.textContent.length, v = Math.min(l.start, f);
          l = l.end === void 0 ? v : Math.min(l.end, f), !n.extend && v > l && (f = l, l = v, v = f), f = Wv(u, v);
          var C = Wv(
            u,
            l
          );
          f && C && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), v > l ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Gv = H && "documentMode" in document && 11 >= document.documentMode, li = null, Rd = null, Ss = null, Td = !1;
  function qv(n, r, u) {
    var l = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Td || li == null || li !== Zt(l) || (l = li, "selectionStart" in l && $i(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Ss && gs(Ss, l) || (Ss = l, l = Ts(Rd, "onSelect"), 0 < l.length && (r = new Rt("onSelect", "select", null, r, u), n.push({ event: r, listeners: l }), r.target = li)));
  }
  function Dc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var co = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, wd = {}, _d = {};
  H && (_d = document.createElement("div").style, "AnimationEvent" in window || (delete co.animationend.animation, delete co.animationiteration.animation, delete co.animationstart.animation), "TransitionEvent" in window || delete co.transitionend.transition);
  function rr(n) {
    if (wd[n])
      return wd[n];
    if (!co[n])
      return n;
    var r = co[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in _d)
        return wd[n] = r[u];
    return n;
  }
  var xd = rr("animationend"), Kv = rr("animationiteration"), Xv = rr("animationstart"), Zv = rr("transitionend"), Jv = /* @__PURE__ */ new Map(), eh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yi(n, r) {
    Jv.set(n, r), w(r, [n]);
  }
  for (var Es = 0; Es < eh.length; Es++) {
    var fo = eh[Es], My = fo.toLowerCase(), Cs = fo[0].toUpperCase() + fo.slice(1);
    Yi(My, "on" + Cs);
  }
  Yi(xd, "onAnimationEnd"), Yi(Kv, "onAnimationIteration"), Yi(Xv, "onAnimationStart"), Yi("dblclick", "onDoubleClick"), Yi("focusin", "onFocus"), Yi("focusout", "onBlur"), Yi(Zv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));
  function th(n, r, u) {
    var l = n.type || "unknown-event";
    n.currentTarget = u, Ne(l, r, void 0, n), n.currentTarget = null;
  }
  function kc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var l = n[u], f = l.event;
      l = l.listeners;
      e: {
        var v = void 0;
        if (r)
          for (var C = l.length - 1; 0 <= C; C--) {
            var _ = l[C], L = _.instance, Z = _.currentTarget;
            if (_ = _.listener, L !== v && f.isPropagationStopped())
              break e;
            th(f, _, Z), v = L;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (_ = l[C], L = _.instance, Z = _.currentTarget, _ = _.listener, L !== v && f.isPropagationStopped())
              break e;
            th(f, _, Z), v = L;
          }
      }
    }
    if (Si)
      throw n = D, Si = !1, D = null, n;
  }
  function cn(n, r) {
    var u = r[Ad];
    u === void 0 && (u = r[Ad] = /* @__PURE__ */ new Set());
    var l = n + "__bubble";
    u.has(l) || (nh(r, n, 2, !1), u.add(l));
  }
  function Ou(n, r, u) {
    var l = 0;
    r && (l |= 4), nh(u, n, l, r);
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function ml(n) {
    if (!n[Wi]) {
      n[Wi] = !0, E.forEach(function(u) {
        u !== "selectionchange" && (Ly.has(u) || Ou(u, !1, n), Ou(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Wi] || (r[Wi] = !0, Ou("selectionchange", !1, r));
    }
  }
  function nh(n, r, u, l) {
    switch (ps(r)) {
      case 1:
        var f = ll;
        break;
      case 4:
        f = _u;
        break;
      default:
        f = xu;
    }
    u = f.bind(null, r, u, n), f = void 0, !yi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), l ? f !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: f }) : n.addEventListener(r, u, !0) : f !== void 0 ? n.addEventListener(r, u, { passive: f }) : n.addEventListener(r, u, !1);
  }
  function Nc(n, r, u, l, f) {
    var v = l;
    if (!(r & 1) && !(r & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var C = l.tag;
          if (C === 3 || C === 4) {
            var _ = l.stateNode.containerInfo;
            if (_ === f || _.nodeType === 8 && _.parentNode === f)
              break;
            if (C === 4)
              for (C = l.return; C !== null; ) {
                var L = C.tag;
                if ((L === 3 || L === 4) && (L = C.stateNode.containerInfo, L === f || L.nodeType === 8 && L.parentNode === f))
                  return;
                C = C.return;
              }
            for (; _ !== null; ) {
              if (C = Pa(_), C === null)
                return;
              if (L = C.tag, L === 5 || L === 6) {
                l = v = C;
                continue e;
              }
              _ = _.parentNode;
            }
          }
          l = l.return;
        }
    hu(function() {
      var Z = v, fe = Jt(u), de = [];
      e: {
        var ce = Jv.get(n);
        if (ce !== void 0) {
          var De = Rt, ze = n;
          switch (n) {
            case "keypress":
              if (ee(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              De = Ty;
              break;
            case "focusin":
              ze = "focus", De = ui;
              break;
            case "focusout":
              ze = "blur", De = ui;
              break;
            case "beforeblur":
            case "afterblur":
              De = ui;
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
              De = Hi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              De = vs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              De = wy;
              break;
            case xd:
            case Kv:
            case Xv:
              De = ms;
              break;
            case Zv:
              De = Lv;
              break;
            case "scroll":
              De = ln;
              break;
            case "wheel":
              De = Bi;
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
              De = Rc;
          }
          var Fe = (r & 4) !== 0, Vn = !Fe && n === "scroll", $ = Fe ? ce !== null ? ce + "Capture" : null : ce;
          Fe = [];
          for (var j = Z, G; j !== null; ) {
            G = j;
            var ye = G.stateNode;
            if (G.tag === 5 && ye !== null && (G = ye, $ !== null && (ye = Ea(j, $), ye != null && Fe.push(Rs(j, ye, G)))), Vn)
              break;
            j = j.return;
          }
          0 < Fe.length && (ce = new De(ce, ze, null, u, fe), de.push({ event: ce, listeners: Fe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", De = n === "mouseout" || n === "pointerout", ce && u !== wr && (ze = u.relatedTarget || u.fromElement) && (Pa(ze) || ze[Qi]))
            break e;
          if ((De || ce) && (ce = fe.window === fe ? fe : (ce = fe.ownerDocument) ? ce.defaultView || ce.parentWindow : window, De ? (ze = u.relatedTarget || u.toElement, De = Z, ze = ze ? Pa(ze) : null, ze !== null && (Vn = vt(ze), ze !== Vn || ze.tag !== 5 && ze.tag !== 6) && (ze = null)) : (De = null, ze = Z), De !== ze)) {
            if (Fe = Hi, ye = "onMouseLeave", $ = "onMouseEnter", j = "mouse", (n === "pointerout" || n === "pointerover") && (Fe = Rc, ye = "onPointerLeave", $ = "onPointerEnter", j = "pointer"), Vn = De == null ? ce : yl(De), G = ze == null ? ce : yl(ze), ce = new Fe(ye, j + "leave", De, u, fe), ce.target = Vn, ce.relatedTarget = G, ye = null, Pa(fe) === Z && (Fe = new Fe($, j + "enter", ze, u, fe), Fe.target = G, Fe.relatedTarget = Vn, ye = Fe), Vn = ye, De && ze)
              t: {
                for (Fe = De, $ = ze, j = 0, G = Fe; G; G = po(G))
                  j++;
                for (G = 0, ye = $; ye; ye = po(ye))
                  G++;
                for (; 0 < j - G; )
                  Fe = po(Fe), j--;
                for (; 0 < G - j; )
                  $ = po($), G--;
                for (; j--; ) {
                  if (Fe === $ || $ !== null && Fe === $.alternate)
                    break t;
                  Fe = po(Fe), $ = po($);
                }
                Fe = null;
              }
            else
              Fe = null;
            De !== null && Od(de, ce, De, Fe, !1), ze !== null && Vn !== null && Od(de, Vn, ze, Fe, !0);
          }
        }
        e: {
          if (ce = Z ? yl(Z) : window, De = ce.nodeName && ce.nodeName.toLowerCase(), De === "select" || De === "input" && ce.type === "file")
            var Ve = Vv;
          else if (Pv(ce))
            if (Ed)
              Ve = $v;
            else {
              Ve = Dy;
              var Ue = Oy;
            }
          else
            (De = ce.nodeName) && De.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && (Ve = ky);
          if (Ve && (Ve = Ve(n, Z))) {
            Fv(de, Ve, u, fe);
            break e;
          }
          Ue && Ue(n, ce, Z), n === "focusout" && (Ue = ce._wrapperState) && Ue.controlled && ce.type === "number" && Xr(ce, "number", ce.value);
        }
        switch (Ue = Z ? yl(Z) : window, n) {
          case "focusin":
            (Pv(Ue) || Ue.contentEditable === "true") && (li = Ue, Rd = Z, Ss = null);
            break;
          case "focusout":
            Ss = Rd = li = null;
            break;
          case "mousedown":
            Td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Td = !1, qv(de, u, fe);
            break;
          case "selectionchange":
            if (Gv)
              break;
          case "keydown":
          case "keyup":
            qv(de, u, fe);
        }
        var $e;
        if (oi)
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
          dl ? Uv(n, u) && (lt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (lt = "onCompositionStart");
        lt && (Av && u.locale !== "ko" && (dl || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && dl && ($e = K()) : (ii = fe, S = "value" in ii ? ii.value : ii.textContent, dl = !0)), Ue = Ts(Z, lt), 0 < Ue.length && (lt = new hd(lt, n, null, u, fe), de.push({ event: lt, listeners: Ue }), $e ? lt.data = $e : ($e = _c(u), $e !== null && (lt.data = $e)))), ($e = wc ? _y(n, u) : xy(n, u)) && (Z = Ts(Z, "onBeforeInput"), 0 < Z.length && (fe = new hd("onBeforeInput", "beforeinput", null, u, fe), de.push({ event: fe, listeners: Z }), fe.data = $e));
      }
      kc(de, r);
    });
  }
  function Rs(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function Ts(n, r) {
    for (var u = r + "Capture", l = []; n !== null; ) {
      var f = n, v = f.stateNode;
      f.tag === 5 && v !== null && (f = v, v = Ea(n, u), v != null && l.unshift(Rs(n, v, f)), v = Ea(n, r), v != null && l.push(Rs(n, v, f))), n = n.return;
    }
    return l;
  }
  function po(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Od(n, r, u, l, f) {
    for (var v = r._reactName, C = []; u !== null && u !== l; ) {
      var _ = u, L = _.alternate, Z = _.stateNode;
      if (L !== null && L === l)
        break;
      _.tag === 5 && Z !== null && (_ = Z, f ? (L = Ea(u, v), L != null && C.unshift(Rs(u, L, _))) : f || (L = Ea(u, v), L != null && C.push(Rs(u, L, _)))), u = u.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Dd = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function kd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Dd, `
`).replace(Ay, "");
  }
  function Mc(n, r, u) {
    if (r = kd(r), kd(n) !== r && u)
      throw Error(p(425));
  }
  function Lc() {
  }
  var Nd = null, vo = null;
  function ws(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ho = typeof setTimeout == "function" ? setTimeout : void 0, rh = typeof clearTimeout == "function" ? clearTimeout : void 0, Md = typeof Promise == "function" ? Promise : void 0, Ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof Md < "u" ? function(n) {
    return Md.resolve(null).then(n).catch(zy);
  } : ho;
  function zy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Du(n, r) {
    var u = r, l = 0;
    do {
      var f = u.nextSibling;
      if (n.removeChild(u), f && f.nodeType === 8)
        if (u = f.data, u === "/$") {
          if (l === 0) {
            n.removeChild(f), Tu(r);
            return;
          }
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || l++;
      u = f;
    } while (u);
    Tu(r);
  }
  function si(n) {
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
  function _s(n) {
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
  var ku = Math.random().toString(36).slice(2), Ti = "__reactFiber$" + ku, mo = "__reactProps$" + ku, Qi = "__reactContainer$" + ku, Ad = "__reactEvents$" + ku, Uy = "__reactListeners$" + ku, zd = "__reactHandles$" + ku;
  function Pa(n) {
    var r = n[Ti];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Qi] || u[Ti]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = _s(n); n !== null; ) {
            if (u = n[Ti])
              return u;
            n = _s(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function xs(n) {
    return n = n[Ti] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function yl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function Ye(n) {
    return n[mo] || null;
  }
  var Nu = [], yn = -1;
  function mt(n) {
    return { current: n };
  }
  function Yt(n) {
    0 > yn || (n.current = Nu[yn], Nu[yn] = null, yn--);
  }
  function Kt(n, r) {
    yn++, Nu[yn] = n.current, n.current = r;
  }
  var wi = {}, ot = mt(wi), An = mt(!1), aa = wi;
  function Fa(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return wi;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {}, v;
    for (v in u)
      f[v] = r[v];
    return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Tn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Va() {
    Yt(An), Yt(ot);
  }
  function Mu(n, r, u) {
    if (ot.current !== wi)
      throw Error(p(168));
    Kt(ot, r), Kt(An, u);
  }
  function Os(n, r, u) {
    var l = n.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function")
      return u;
    l = l.getChildContext();
    for (var f in l)
      if (!(f in r))
        throw Error(p(108, St(n) || "Unknown", f));
    return k({}, u, l);
  }
  function Ac(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || wi, aa = ot.current, Kt(ot, n), Kt(An, An.current), !0;
  }
  function ah(n, r, u) {
    var l = n.stateNode;
    if (!l)
      throw Error(p(169));
    u ? (n = Os(n, r, aa), l.__reactInternalMemoizedMergedChildContext = n, Yt(An), Yt(ot), Kt(ot, n)) : Yt(An), Kt(An, u);
  }
  var Ra = null, ar = !1, Ds = !1;
  function Ud(n) {
    Ra === null ? Ra = [n] : Ra.push(n);
  }
  function jd(n) {
    ar = !0, Ud(n);
  }
  function ia() {
    if (!Ds && Ra !== null) {
      Ds = !0;
      var n = 0, r = Ht;
      try {
        var u = Ra;
        for (Ht = 1; n < u.length; n++) {
          var l = u[n];
          do
            l = l(!0);
          while (l !== null);
        }
        Ra = null, ar = !1;
      } catch (f) {
        throw Ra !== null && (Ra = Ra.slice(n + 1)), hn(ri, ia), f;
      } finally {
        Ht = r, Ds = !1;
      }
    }
    return null;
  }
  var Lu = [], ua = 0, yo = null, gl = 0, oa = [], _r = 0, Ha = null, dr = 1, Gi = "";
  function Ta(n, r) {
    Lu[ua++] = gl, Lu[ua++] = yo, yo = n, gl = r;
  }
  function Pd(n, r, u) {
    oa[_r++] = dr, oa[_r++] = Gi, oa[_r++] = Ha, Ha = n;
    var l = dr;
    n = Gi;
    var f = 32 - jr(l) - 1;
    l &= ~(1 << f), u += 1;
    var v = 32 - jr(r) + f;
    if (30 < v) {
      var C = f - f % 5;
      v = (l & (1 << C) - 1).toString(32), l >>= C, f -= C, dr = 1 << 32 - jr(r) + f | u << f | l, Gi = v + n;
    } else
      dr = 1 << v | u << f | l, Gi = n;
  }
  function zc(n) {
    n.return !== null && (Ta(n, 1), Pd(n, 1, 0));
  }
  function Fd(n) {
    for (; n === yo; )
      yo = Lu[--ua], Lu[ua] = null, gl = Lu[--ua], Lu[ua] = null;
    for (; n === Ha; )
      Ha = oa[--_r], oa[_r] = null, Gi = oa[--_r], oa[_r] = null, dr = oa[--_r], oa[_r] = null;
  }
  var wa = null, la = null, gn = !1, Ia = null;
  function Vd(n, r) {
    var u = Ga(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function ih(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, wa = n, la = si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, wa = n, la = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Ha !== null ? { id: dr, overflow: Gi } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Ga(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, wa = n, la = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Uc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function jc(n) {
    if (gn) {
      var r = la;
      if (r) {
        var u = r;
        if (!ih(n, r)) {
          if (Uc(n))
            throw Error(p(418));
          r = si(u.nextSibling);
          var l = wa;
          r && ih(n, r) ? Vd(l, u) : (n.flags = n.flags & -4097 | 2, gn = !1, wa = n);
        }
      } else {
        if (Uc(n))
          throw Error(p(418));
        n.flags = n.flags & -4097 | 2, gn = !1, wa = n;
      }
    }
  }
  function uh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    wa = n;
  }
  function Pc(n) {
    if (n !== wa)
      return !1;
    if (!gn)
      return uh(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ws(n.type, n.memoizedProps)), r && (r = la)) {
      if (Uc(n))
        throw oh(), Error(p(418));
      for (; r; )
        Vd(n, r), r = si(r.nextSibling);
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
                la = si(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        la = null;
      }
    } else
      la = wa ? si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function oh() {
    for (var n = la; n; )
      n = si(n.nextSibling);
  }
  function Dn() {
    la = wa = null, gn = !1;
  }
  function Hd(n) {
    Ia === null ? Ia = [n] : Ia.push(n);
  }
  var Fc = J.ReactCurrentBatchConfig;
  function _a(n, r) {
    if (n && n.defaultProps) {
      r = k({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var _i = mt(null), Vc = null, Au = null, Id = null;
  function Bd() {
    Id = Au = Vc = null;
  }
  function zu(n) {
    var r = _i.current;
    Yt(_i), n._currentValue = r;
  }
  function ir(n, r, u) {
    for (; n !== null; ) {
      var l = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function Ce(n, r) {
    Vc = n, Id = Au = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Yn = !0), n.firstContext = null);
  }
  function Fn(n) {
    var r = n._currentValue;
    if (Id !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Au === null) {
        if (Vc === null)
          throw Error(p(308));
        Au = n, Vc.dependencies = { lanes: 0, firstContext: n };
      } else
        Au = Au.next = n;
    return r;
  }
  var pr = null;
  function $d(n) {
    pr === null ? pr = [n] : pr.push(n);
  }
  function lh(n, r, u, l) {
    var f = r.interleaved;
    return f === null ? (u.next = u, $d(r)) : (u.next = f.next, f.next = u), r.interleaved = u, qi(n, l);
  }
  function qi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Uu = !1;
  function Yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Gn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ju(n, r, u) {
    var l = n.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, _t & 2) {
      var f = l.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), l.pending = r, qi(n, u);
    }
    return f = l.interleaved, f === null ? (r.next = r, $d(l)) : (r.next = f.next, f.next = r), l.interleaved = r, qi(n, u);
  }
  function Hc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, bi(n, u);
    }
  }
  function Wd(n, r) {
    var u = n.updateQueue, l = n.alternate;
    if (l !== null && (l = l.updateQueue, u === l)) {
      var f = null, v = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var C = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          v === null ? f = v = C : v = v.next = C, u = u.next;
        } while (u !== null);
        v === null ? f = v = r : v = v.next = r;
      } else
        f = v = r;
      u = { baseState: l.baseState, firstBaseUpdate: f, lastBaseUpdate: v, shared: l.shared, effects: l.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function Pu(n, r, u, l) {
    var f = n.updateQueue;
    Uu = !1;
    var v = f.firstBaseUpdate, C = f.lastBaseUpdate, _ = f.shared.pending;
    if (_ !== null) {
      f.shared.pending = null;
      var L = _, Z = L.next;
      L.next = null, C === null ? v = Z : C.next = Z, C = L;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, _ = fe.lastBaseUpdate, _ !== C && (_ === null ? fe.firstBaseUpdate = Z : _.next = Z, fe.lastBaseUpdate = L));
    }
    if (v !== null) {
      var de = f.baseState;
      C = 0, fe = Z = L = null, _ = v;
      do {
        var ce = _.lane, De = _.eventTime;
        if ((l & ce) === ce) {
          fe !== null && (fe = fe.next = {
            eventTime: De,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var ze = n, Fe = _;
            switch (ce = r, De = u, Fe.tag) {
              case 1:
                if (ze = Fe.payload, typeof ze == "function") {
                  de = ze.call(De, de, ce);
                  break e;
                }
                de = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Fe.payload, ce = typeof ze == "function" ? ze.call(De, de, ce) : ze, ce == null)
                  break e;
                de = k({}, de, ce);
                break e;
              case 2:
                Uu = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, ce = f.effects, ce === null ? f.effects = [_] : ce.push(_));
        } else
          De = { eventTime: De, lane: ce, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, fe === null ? (Z = fe = De, L = de) : fe = fe.next = De, C |= ce;
        if (_ = _.next, _ === null) {
          if (_ = f.shared.pending, _ === null)
            break;
          ce = _, _ = ce.next, ce.next = null, f.lastBaseUpdate = ce, f.shared.pending = null;
        }
      } while (1);
      if (fe === null && (L = de), f.baseState = L, f.firstBaseUpdate = Z, f.lastBaseUpdate = fe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else
        v === null && (f.shared.lanes = 0);
      eu |= C, n.lanes = C, n.memoizedState = de;
    }
  }
  function go(n, r, u) {
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
  function Qd(n, r, u, l) {
    r = n.memoizedState, u = u(l, r), u = u == null ? r : k({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? vt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var l = kr(), f = Wn(n), v = Ki(l, f);
    v.payload = r, u != null && (v.callback = u), r = ju(n, v, f), r !== null && (Nr(r, n, f, l), Hc(r, n, f));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var l = kr(), f = Wn(n), v = Ki(l, f);
    v.tag = 1, v.payload = r, u != null && (v.callback = u), r = ju(n, v, f), r !== null && (Nr(r, n, f, l), Hc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = kr(), l = Wn(n), f = Ki(u, l);
    f.tag = 2, r != null && (f.callback = r), r = ju(n, f, l), r !== null && (Nr(r, n, l, u), Hc(r, n, l));
  } };
  function ch(n, r, u, l, f, v, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, v, C) : r.prototype && r.prototype.isPureReactComponent ? !gs(u, l) || !gs(f, v) : !0;
  }
  function fh(n, r, u) {
    var l = !1, f = wi, v = r.contextType;
    return typeof v == "object" && v !== null ? v = Fn(v) : (f = Tn(r) ? aa : ot.current, l = r.contextTypes, v = (l = l != null) ? Fa(n, f) : wi), r = new r(u, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function dh(n, r, u, l) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, l), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function Bc(n, r, u, l) {
    var f = n.stateNode;
    f.props = u, f.state = n.memoizedState, f.refs = sh, Yd(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? f.context = Fn(v) : (v = Tn(r) ? aa : ot.current, f.context = Fa(n, v)), f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Qd(n, r, v, u), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Ic.enqueueReplaceState(f, f.state, null), Pu(n, u, f, l), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Sl(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(p(309));
          var l = u.stateNode;
        }
        if (!l)
          throw Error(p(147, n));
        var f = l, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(C) {
          var _ = f.refs;
          _ === sh && (_ = f.refs = {}), C === null ? delete _[v] : _[v] = C;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!u._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function $c(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ph(n) {
    var r = n._init;
    return r(n._payload);
  }
  function vh(n) {
    function r($, j) {
      if (n) {
        var G = $.deletions;
        G === null ? ($.deletions = [j], $.flags |= 16) : G.push(j);
      }
    }
    function u($, j) {
      if (!n)
        return null;
      for (; j !== null; )
        r($, j), j = j.sibling;
      return null;
    }
    function l($, j) {
      for ($ = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? $.set(j.key, j) : $.set(j.index, j), j = j.sibling;
      return $;
    }
    function f($, j) {
      return $ = Wu($, j), $.index = 0, $.sibling = null, $;
    }
    function v($, j, G) {
      return $.index = G, n ? (G = $.alternate, G !== null ? (G = G.index, G < j ? ($.flags |= 2, j) : G) : ($.flags |= 2, j)) : ($.flags |= 1048576, j);
    }
    function C($) {
      return n && $.alternate === null && ($.flags |= 2), $;
    }
    function _($, j, G, ye) {
      return j === null || j.tag !== 6 ? (j = Gs(G, $.mode, ye), j.return = $, j) : (j = f(j, G), j.return = $, j);
    }
    function L($, j, G, ye) {
      var Ve = G.type;
      return Ve === Ee ? fe($, j, G.props.children, ye, G.key) : j !== null && (j.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === gt && ph(Ve) === j.type) ? (ye = f(j, G.props), ye.ref = Sl($, j, G), ye.return = $, ye) : (ye = Rf(G.type, G.key, G.props, null, $.mode, ye), ye.ref = Sl($, j, G), ye.return = $, ye);
    }
    function Z($, j, G, ye) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== G.containerInfo || j.stateNode.implementation !== G.implementation ? (j = jo(G, $.mode, ye), j.return = $, j) : (j = f(j, G.children || []), j.return = $, j);
    }
    function fe($, j, G, ye, Ve) {
      return j === null || j.tag !== 7 ? (j = Uo(G, $.mode, ye, Ve), j.return = $, j) : (j = f(j, G), j.return = $, j);
    }
    function de($, j, G) {
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return j = Gs("" + j, $.mode, G), j.return = $, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case I:
            return G = Rf(j.type, j.key, j.props, null, $.mode, G), G.ref = Sl($, null, j), G.return = $, G;
          case me:
            return j = jo(j, $.mode, G), j.return = $, j;
          case gt:
            var ye = j._init;
            return de($, ye(j._payload), G);
        }
        if (tr(j) || Pe(j))
          return j = Uo(j, $.mode, G, null), j.return = $, j;
        $c($, j);
      }
      return null;
    }
    function ce($, j, G, ye) {
      var Ve = j !== null ? j.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return Ve !== null ? null : _($, j, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case I:
            return G.key === Ve ? L($, j, G, ye) : null;
          case me:
            return G.key === Ve ? Z($, j, G, ye) : null;
          case gt:
            return Ve = G._init, ce(
              $,
              j,
              Ve(G._payload),
              ye
            );
        }
        if (tr(G) || Pe(G))
          return Ve !== null ? null : fe($, j, G, ye, null);
        $c($, G);
      }
      return null;
    }
    function De($, j, G, ye, Ve) {
      if (typeof ye == "string" && ye !== "" || typeof ye == "number")
        return $ = $.get(G) || null, _(j, $, "" + ye, Ve);
      if (typeof ye == "object" && ye !== null) {
        switch (ye.$$typeof) {
          case I:
            return $ = $.get(ye.key === null ? G : ye.key) || null, L(j, $, ye, Ve);
          case me:
            return $ = $.get(ye.key === null ? G : ye.key) || null, Z(j, $, ye, Ve);
          case gt:
            var Ue = ye._init;
            return De($, j, G, Ue(ye._payload), Ve);
        }
        if (tr(ye) || Pe(ye))
          return $ = $.get(G) || null, fe(j, $, ye, Ve, null);
        $c(j, ye);
      }
      return null;
    }
    function ze($, j, G, ye) {
      for (var Ve = null, Ue = null, $e = j, lt = j = 0, lr = null; $e !== null && lt < G.length; lt++) {
        $e.index > lt ? (lr = $e, $e = null) : lr = $e.sibling;
        var Vt = ce($, $e, G[lt], ye);
        if (Vt === null) {
          $e === null && ($e = lr);
          break;
        }
        n && $e && Vt.alternate === null && r($, $e), j = v(Vt, j, lt), Ue === null ? Ve = Vt : Ue.sibling = Vt, Ue = Vt, $e = lr;
      }
      if (lt === G.length)
        return u($, $e), gn && Ta($, lt), Ve;
      if ($e === null) {
        for (; lt < G.length; lt++)
          $e = de($, G[lt], ye), $e !== null && (j = v($e, j, lt), Ue === null ? Ve = $e : Ue.sibling = $e, Ue = $e);
        return gn && Ta($, lt), Ve;
      }
      for ($e = l($, $e); lt < G.length; lt++)
        lr = De($e, $, lt, G[lt], ye), lr !== null && (n && lr.alternate !== null && $e.delete(lr.key === null ? lt : lr.key), j = v(lr, j, lt), Ue === null ? Ve = lr : Ue.sibling = lr, Ue = lr);
      return n && $e.forEach(function(Qu) {
        return r($, Qu);
      }), gn && Ta($, lt), Ve;
    }
    function Fe($, j, G, ye) {
      var Ve = Pe(G);
      if (typeof Ve != "function")
        throw Error(p(150));
      if (G = Ve.call(G), G == null)
        throw Error(p(151));
      for (var Ue = Ve = null, $e = j, lt = j = 0, lr = null, Vt = G.next(); $e !== null && !Vt.done; lt++, Vt = G.next()) {
        $e.index > lt ? (lr = $e, $e = null) : lr = $e.sibling;
        var Qu = ce($, $e, Vt.value, ye);
        if (Qu === null) {
          $e === null && ($e = lr);
          break;
        }
        n && $e && Qu.alternate === null && r($, $e), j = v(Qu, j, lt), Ue === null ? Ve = Qu : Ue.sibling = Qu, Ue = Qu, $e = lr;
      }
      if (Vt.done)
        return u(
          $,
          $e
        ), gn && Ta($, lt), Ve;
      if ($e === null) {
        for (; !Vt.done; lt++, Vt = G.next())
          Vt = de($, Vt.value, ye), Vt !== null && (j = v(Vt, j, lt), Ue === null ? Ve = Vt : Ue.sibling = Vt, Ue = Vt);
        return gn && Ta($, lt), Ve;
      }
      for ($e = l($, $e); !Vt.done; lt++, Vt = G.next())
        Vt = De($e, $, lt, Vt.value, ye), Vt !== null && (n && Vt.alternate !== null && $e.delete(Vt.key === null ? lt : Vt.key), j = v(Vt, j, lt), Ue === null ? Ve = Vt : Ue.sibling = Vt, Ue = Vt);
      return n && $e.forEach(function(ng) {
        return r($, ng);
      }), gn && Ta($, lt), Ve;
    }
    function Vn($, j, G, ye) {
      if (typeof G == "object" && G !== null && G.type === Ee && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case I:
            e: {
              for (var Ve = G.key, Ue = j; Ue !== null; ) {
                if (Ue.key === Ve) {
                  if (Ve = G.type, Ve === Ee) {
                    if (Ue.tag === 7) {
                      u($, Ue.sibling), j = f(Ue, G.props.children), j.return = $, $ = j;
                      break e;
                    }
                  } else if (Ue.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === gt && ph(Ve) === Ue.type) {
                    u($, Ue.sibling), j = f(Ue, G.props), j.ref = Sl($, Ue, G), j.return = $, $ = j;
                    break e;
                  }
                  u($, Ue);
                  break;
                } else
                  r($, Ue);
                Ue = Ue.sibling;
              }
              G.type === Ee ? (j = Uo(G.props.children, $.mode, ye, G.key), j.return = $, $ = j) : (ye = Rf(G.type, G.key, G.props, null, $.mode, ye), ye.ref = Sl($, j, G), ye.return = $, $ = ye);
            }
            return C($);
          case me:
            e: {
              for (Ue = G.key; j !== null; ) {
                if (j.key === Ue)
                  if (j.tag === 4 && j.stateNode.containerInfo === G.containerInfo && j.stateNode.implementation === G.implementation) {
                    u($, j.sibling), j = f(j, G.children || []), j.return = $, $ = j;
                    break e;
                  } else {
                    u($, j);
                    break;
                  }
                else
                  r($, j);
                j = j.sibling;
              }
              j = jo(G, $.mode, ye), j.return = $, $ = j;
            }
            return C($);
          case gt:
            return Ue = G._init, Vn($, j, Ue(G._payload), ye);
        }
        if (tr(G))
          return ze($, j, G, ye);
        if (Pe(G))
          return Fe($, j, G, ye);
        $c($, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, j !== null && j.tag === 6 ? (u($, j.sibling), j = f(j, G), j.return = $, $ = j) : (u($, j), j = Gs(G, $.mode, ye), j.return = $, $ = j), C($)) : u($, j);
    }
    return Vn;
  }
  var El = vh(!0), hh = vh(!1), ks = {}, ci = mt(ks), Ns = mt(ks), Cl = mt(ks);
  function So(n) {
    if (n === ks)
      throw Error(p(174));
    return n;
  }
  function Gd(n, r) {
    switch (Kt(Cl, r), Kt(Ns, n), Kt(ci, ks), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _n(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _n(r, n);
    }
    Yt(ci), Kt(ci, r);
  }
  function Fu() {
    Yt(ci), Yt(Ns), Yt(Cl);
  }
  function Ze(n) {
    So(Cl.current);
    var r = So(ci.current), u = _n(r, n.type);
    r !== u && (Kt(Ns, n), Kt(ci, u));
  }
  function Tt(n) {
    Ns.current === n && (Yt(ci), Yt(Ns));
  }
  var et = mt(0);
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
  var Ba = [];
  function Yc() {
    for (var n = 0; n < Ba.length; n++)
      Ba[n]._workInProgressVersionPrimary = null;
    Ba.length = 0;
  }
  var Wc = J.ReactCurrentDispatcher, qd = J.ReactCurrentBatchConfig, Eo = 0, Sn = null, ae = null, Nt = null, rt = !1, xi = !1, xa = 0, Co = 0;
  function En() {
    throw Error(p(321));
  }
  function bo(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!ja(n[u], r[u]))
        return !1;
    return !0;
  }
  function Vu(n, r, u, l, f, v) {
    if (Eo = v, Sn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Wc.current = n === null || n.memoizedState === null ? Py : Fy, n = u(l, f), xi) {
      v = 0;
      do {
        if (xi = !1, xa = 0, 25 <= v)
          throw Error(p(301));
        v += 1, Nt = ae = null, r.updateQueue = null, Wc.current = Xd, n = u(l, f);
      } while (xi);
    }
    if (Wc.current = sf, r = ae !== null && ae.next !== null, Eo = 0, Nt = ae = Sn = null, rt = !1, r)
      throw Error(p(300));
    return n;
  }
  function Ro() {
    var n = xa !== 0;
    return xa = 0, n;
  }
  function $a() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? Sn.memoizedState = Nt = n : Nt = Nt.next = n, Nt;
  }
  function sa() {
    if (ae === null) {
      var n = Sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ae.next;
    var r = Nt === null ? Sn.memoizedState : Nt.next;
    if (r !== null)
      Nt = r, ae = n;
    else {
      if (n === null)
        throw Error(p(310));
      ae = n, n = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, Nt === null ? Sn.memoizedState = Nt = n : Nt = Nt.next = n;
    }
    return Nt;
  }
  function To(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ms(n) {
    var r = sa(), u = r.queue;
    if (u === null)
      throw Error(p(311));
    u.lastRenderedReducer = n;
    var l = ae, f = l.baseQueue, v = u.pending;
    if (v !== null) {
      if (f !== null) {
        var C = f.next;
        f.next = v.next, v.next = C;
      }
      l.baseQueue = f = v, u.pending = null;
    }
    if (f !== null) {
      v = f.next, l = l.baseState;
      var _ = C = null, L = null, Z = v;
      do {
        var fe = Z.lane;
        if ((Eo & fe) === fe)
          L !== null && (L = L.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), l = Z.hasEagerState ? Z.eagerState : n(l, Z.action);
        else {
          var de = {
            lane: fe,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          L === null ? (_ = L = de, C = l) : L = L.next = de, Sn.lanes |= fe, eu |= fe;
        }
        Z = Z.next;
      } while (Z !== null && Z !== v);
      L === null ? C = l : L.next = _, ja(l, r.memoizedState) || (Yn = !0), r.memoizedState = l, r.baseState = C, r.baseQueue = L, u.lastRenderedState = l;
    }
    if (n = u.interleaved, n !== null) {
      f = n;
      do
        v = f.lane, Sn.lanes |= v, eu |= v, f = f.next;
      while (f !== n);
    } else
      f === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Ls(n) {
    var r = sa(), u = r.queue;
    if (u === null)
      throw Error(p(311));
    u.lastRenderedReducer = n;
    var l = u.dispatch, f = u.pending, v = r.memoizedState;
    if (f !== null) {
      u.pending = null;
      var C = f = f.next;
      do
        v = n(v, C.action), C = C.next;
      while (C !== f);
      ja(v, r.memoizedState) || (Yn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), u.lastRenderedState = v;
    }
    return [v, l];
  }
  function Qc() {
  }
  function Gc(n, r) {
    var u = Sn, l = sa(), f = r(), v = !ja(l.memoizedState, f);
    if (v && (l.memoizedState = f, Yn = !0), l = l.queue, As(Xc.bind(null, u, l, n), [n]), l.getSnapshot !== r || v || Nt !== null && Nt.memoizedState.tag & 1) {
      if (u.flags |= 2048, wo(9, Kc.bind(null, u, l, f, r), void 0, null), Nn === null)
        throw Error(p(349));
      Eo & 30 || qc(u, r, f);
    }
    return f;
  }
  function qc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Sn.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Kc(n, r, u, l) {
    r.value = u, r.getSnapshot = l, Zc(r) && Jc(n);
  }
  function Xc(n, r, u) {
    return u(function() {
      Zc(r) && Jc(n);
    });
  }
  function Zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !ja(n, u);
    } catch {
      return !0;
    }
  }
  function Jc(n) {
    var r = qi(n, 1);
    r !== null && Nr(r, n, 1, -1);
  }
  function ef(n) {
    var r = $a();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: To, lastRenderedState: n }, r.queue = n, n = n.dispatch = lf.bind(null, Sn, n), [r.memoizedState, n];
  }
  function wo(n, r, u, l) {
    return n = { tag: n, create: r, destroy: u, deps: l, next: null }, r = Sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Sn.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (l = u.next, u.next = n, n.next = l, r.lastEffect = n)), n;
  }
  function tf() {
    return sa().memoizedState;
  }
  function _o(n, r, u, l) {
    var f = $a();
    Sn.flags |= n, f.memoizedState = wo(1 | r, u, void 0, l === void 0 ? null : l);
  }
  function Xi(n, r, u, l) {
    var f = sa();
    l = l === void 0 ? null : l;
    var v = void 0;
    if (ae !== null) {
      var C = ae.memoizedState;
      if (v = C.destroy, l !== null && bo(l, C.deps)) {
        f.memoizedState = wo(r, u, v, l);
        return;
      }
    }
    Sn.flags |= n, f.memoizedState = wo(1 | r, u, v, l);
  }
  function nf(n, r) {
    return _o(8390656, 8, n, r);
  }
  function As(n, r) {
    return Xi(2048, 8, n, r);
  }
  function rf(n, r) {
    return Xi(4, 2, n, r);
  }
  function af(n, r) {
    return Xi(4, 4, n, r);
  }
  function Kd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function bl(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Xi(4, 4, Kd.bind(null, r, n), u);
  }
  function uf() {
  }
  function Rl(n, r) {
    var u = sa();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && bo(r, l[1]) ? l[0] : (u.memoizedState = [n, r], n);
  }
  function Hu(n, r) {
    var u = sa();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && bo(r, l[1]) ? l[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function ca(n, r, u) {
    return Eo & 21 ? (ja(u, r) || (u = nl(), Sn.lanes |= u, eu |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Yn = !0), n.memoizedState = u);
  }
  function jy(n, r) {
    var u = Ht;
    Ht = u !== 0 && 4 > u ? u : 4, n(!0);
    var l = qd.transition;
    qd.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = u, qd.transition = l;
    }
  }
  function fn() {
    return sa().memoizedState;
  }
  function of(n, r, u) {
    var l = Wn(n);
    if (u = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null }, Tl(n))
      zs(r, u);
    else if (u = lh(n, r, u, l), u !== null) {
      var f = kr();
      Nr(u, n, l, f), mh(u, r, l);
    }
  }
  function lf(n, r, u) {
    var l = Wn(n), f = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (Tl(n))
      zs(r, f);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null))
        try {
          var C = r.lastRenderedState, _ = v(C, u);
          if (f.hasEagerState = !0, f.eagerState = _, ja(_, C)) {
            var L = r.interleaved;
            L === null ? (f.next = f, $d(r)) : (f.next = L.next, L.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      u = lh(n, r, f, l), u !== null && (f = kr(), Nr(u, n, l, f), mh(u, r, l));
    }
  }
  function Tl(n) {
    var r = n.alternate;
    return n === Sn || r !== null && r === Sn;
  }
  function zs(n, r) {
    xi = rt = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function mh(n, r, u) {
    if (u & 4194240) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, bi(n, u);
    }
  }
  var sf = { readContext: Fn, useCallback: En, useContext: En, useEffect: En, useImperativeHandle: En, useInsertionEffect: En, useLayoutEffect: En, useMemo: En, useReducer: En, useRef: En, useState: En, useDebugValue: En, useDeferredValue: En, useTransition: En, useMutableSource: En, useSyncExternalStore: En, useId: En, unstable_isNewReconciler: !1 }, Py = { readContext: Fn, useCallback: function(n, r) {
    return $a().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fn, useEffect: nf, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, _o(
      4194308,
      4,
      Kd.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return _o(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return _o(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = $a();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var l = $a();
    return r = u !== void 0 ? u(r) : r, l.memoizedState = l.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, l.queue = n, n = n.dispatch = of.bind(null, Sn, n), [l.memoizedState, n];
  }, useRef: function(n) {
    var r = $a();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: uf, useDeferredValue: function(n) {
    return $a().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = jy.bind(null, n[1]), $a().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var l = Sn, f = $a();
    if (gn) {
      if (u === void 0)
        throw Error(p(407));
      u = u();
    } else {
      if (u = r(), Nn === null)
        throw Error(p(349));
      Eo & 30 || qc(l, r, u);
    }
    f.memoizedState = u;
    var v = { value: u, getSnapshot: r };
    return f.queue = v, nf(Xc.bind(
      null,
      l,
      v,
      n
    ), [n]), l.flags |= 2048, wo(9, Kc.bind(null, l, v, u, r), void 0, null), u;
  }, useId: function() {
    var n = $a(), r = Nn.identifierPrefix;
    if (gn) {
      var u = Gi, l = dr;
      u = (l & ~(1 << 32 - jr(l) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = xa++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = Co++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Fy = {
    readContext: Fn,
    useCallback: Rl,
    useContext: Fn,
    useEffect: As,
    useImperativeHandle: bl,
    useInsertionEffect: rf,
    useLayoutEffect: af,
    useMemo: Hu,
    useReducer: Ms,
    useRef: tf,
    useState: function() {
      return Ms(To);
    },
    useDebugValue: uf,
    useDeferredValue: function(n) {
      var r = sa();
      return ca(r, ae.memoizedState, n);
    },
    useTransition: function() {
      var n = Ms(To)[0], r = sa().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Gc,
    useId: fn,
    unstable_isNewReconciler: !1
  }, Xd = { readContext: Fn, useCallback: Rl, useContext: Fn, useEffect: As, useImperativeHandle: bl, useInsertionEffect: rf, useLayoutEffect: af, useMemo: Hu, useReducer: Ls, useRef: tf, useState: function() {
    return Ls(To);
  }, useDebugValue: uf, useDeferredValue: function(n) {
    var r = sa();
    return ae === null ? r.memoizedState = n : ca(r, ae.memoizedState, n);
  }, useTransition: function() {
    var n = Ls(To)[0], r = sa().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Gc, useId: fn, unstable_isNewReconciler: !1 };
  function wl(n, r) {
    try {
      var u = "", l = r;
      do
        u += Ct(l), l = l.return;
      while (l);
      var f = u;
    } catch (v) {
      f = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Us(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function cf(n, r) {
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
    u = Ki(-1, u), u.tag = 3, u.payload = { element: null };
    var l = r.value;
    return u.callback = function() {
      yf || (yf = !0, No = l), cf(n, r);
    }, u;
  }
  function js(n, r, u) {
    u = Ki(-1, u), u.tag = 3;
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = r.value;
      u.payload = function() {
        return l(f);
      }, u.callback = function() {
        cf(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (u.callback = function() {
      cf(n, r), typeof l != "function" && (ki === null ? ki = /* @__PURE__ */ new Set([this]) : ki.add(this));
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
  function Zd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Jd(n, r, u, l, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Ki(-1, 1), r.tag = 2, ju(u, r, 1))), u.lanes |= 1), n);
  }
  var Hy = J.ReactCurrentOwner, Yn = !1;
  function qn(n, r, u, l) {
    r.child = n === null ? hh(r, null, u, l) : El(r, n.child, u, l);
  }
  function Iu(n, r, u, l, f) {
    u = u.render;
    var v = r.ref;
    return Ce(r, f), l = Vu(n, r, u, l, v, f), u = Ro(), n !== null && !Yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, vr(n, r, f)) : (gn && u && zc(r), r.flags |= 1, qn(n, r, l, f), r.child);
  }
  function ff(n, r, u, l, f) {
    if (n === null) {
      var v = u.type;
      return typeof v == "function" && !gp(v) && v.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = v, fa(n, r, v, l, f)) : (n = Rf(u.type, null, l, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, !(n.lanes & f)) {
      var C = v.memoizedProps;
      if (u = u.compare, u = u !== null ? u : gs, u(C, l) && n.ref === r.ref)
        return vr(n, r, f);
    }
    return r.flags |= 1, n = Wu(v, l), n.ref = r.ref, n.return = r, r.child = n;
  }
  function fa(n, r, u, l, f) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (gs(v, l) && n.ref === r.ref)
        if (Yn = !1, r.pendingProps = l = v, (n.lanes & f) !== 0)
          n.flags & 131072 && (Yn = !0);
        else
          return r.lanes = n.lanes, vr(n, r, f);
    }
    return _l(n, r, u, l, f);
  }
  function xo(n, r, u) {
    var l = r.pendingProps, f = l.children, v = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Kt(Ml, Oa), Oa |= u;
      else {
        if (!(u & 1073741824))
          return n = v !== null ? v.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Kt(Ml, Oa), Oa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = v !== null ? v.baseLanes : u, Kt(Ml, Oa), Oa |= l;
      }
    else
      v !== null ? (l = v.baseLanes | u, r.memoizedState = null) : l = u, Kt(Ml, Oa), Oa |= l;
    return qn(n, r, f, u), r.child;
  }
  function yt(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function _l(n, r, u, l, f) {
    var v = Tn(u) ? aa : ot.current;
    return v = Fa(r, v), Ce(r, f), u = Vu(n, r, u, l, v, f), l = Ro(), n !== null && !Yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, vr(n, r, f)) : (gn && l && zc(r), r.flags |= 1, qn(n, r, u, f), r.child);
  }
  function ep(n, r, u, l, f) {
    if (Tn(u)) {
      var v = !0;
      Ac(r);
    } else
      v = !1;
    if (Ce(r, f), r.stateNode === null)
      xr(n, r), fh(r, u, l), Bc(r, u, l, f), l = !0;
    else if (n === null) {
      var C = r.stateNode, _ = r.memoizedProps;
      C.props = _;
      var L = C.context, Z = u.contextType;
      typeof Z == "object" && Z !== null ? Z = Fn(Z) : (Z = Tn(u) ? aa : ot.current, Z = Fa(r, Z));
      var fe = u.getDerivedStateFromProps, de = typeof fe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      de || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (_ !== l || L !== Z) && dh(r, C, l, Z), Uu = !1;
      var ce = r.memoizedState;
      C.state = ce, Pu(r, l, C, f), L = r.memoizedState, _ !== l || ce !== L || An.current || Uu ? (typeof fe == "function" && (Qd(r, u, fe, l), L = r.memoizedState), (_ = Uu || ch(r, u, _, l, ce, L, Z)) ? (de || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = L), C.props = l, C.state = L, C.context = Z, l = _) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      C = r.stateNode, Gn(n, r), _ = r.memoizedProps, Z = r.type === r.elementType ? _ : _a(r.type, _), C.props = Z, de = r.pendingProps, ce = C.context, L = u.contextType, typeof L == "object" && L !== null ? L = Fn(L) : (L = Tn(u) ? aa : ot.current, L = Fa(r, L));
      var De = u.getDerivedStateFromProps;
      (fe = typeof De == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (_ !== de || ce !== L) && dh(r, C, l, L), Uu = !1, ce = r.memoizedState, C.state = ce, Pu(r, l, C, f);
      var ze = r.memoizedState;
      _ !== de || ce !== ze || An.current || Uu ? (typeof De == "function" && (Qd(r, u, De, l), ze = r.memoizedState), (Z = Uu || ch(r, u, Z, l, ce, ze, L) || !1) ? (fe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(l, ze, L), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(l, ze, L)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || _ === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = ze), C.props = l, C.state = ze, C.context = L, l = Z) : (typeof C.componentDidUpdate != "function" || _ === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), l = !1);
    }
    return Sh(n, r, u, l, v, f);
  }
  function Sh(n, r, u, l, f, v) {
    yt(n, r);
    var C = (r.flags & 128) !== 0;
    if (!l && !C)
      return f && ah(r, u, !1), vr(n, r, v);
    l = r.stateNode, Hy.current = r;
    var _ = C && typeof u.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, n !== null && C ? (r.child = El(r, n.child, null, v), r.child = El(r, null, _, v)) : qn(n, r, _, v), r.memoizedState = l.state, f && ah(r, u, !0), r.child;
  }
  function Eh(n) {
    var r = n.stateNode;
    r.pendingContext ? Mu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mu(n, r.context, !1), Gd(n, r.containerInfo);
  }
  function df(n, r, u, l, f) {
    return Dn(), Hd(f), r.flags |= 256, qn(n, r, u, l), r.child;
  }
  var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function tp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function np(n, r, u) {
    var l = r.pendingProps, f = et.current, v = !1, C = (r.flags & 128) !== 0, _;
    if ((_ = C) || (_ = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), _ ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Kt(et, f & 1), n === null)
      return jc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = l.children, n = l.fallback, v ? (l = r.mode, v = r.child, C = { mode: "hidden", children: C }, !(l & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = C) : v = Qs(C, l, 0, null), n = Uo(n, l, u, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = tp(u), r.memoizedState = Oo, n) : rp(r, C));
    if (f = n.memoizedState, f !== null && (_ = f.dehydrated, _ !== null))
      return Iy(n, r, C, l, _, f, u);
    if (v) {
      v = l.fallback, C = r.mode, f = n.child, _ = f.sibling;
      var L = { mode: "hidden", children: l.children };
      return !(C & 1) && r.child !== f ? (l = r.child, l.childLanes = 0, l.pendingProps = L, r.deletions = null) : (l = Wu(f, L), l.subtreeFlags = f.subtreeFlags & 14680064), _ !== null ? v = Wu(_, v) : (v = Uo(v, C, u, null), v.flags |= 2), v.return = r, l.return = r, l.sibling = v, r.child = l, l = v, v = r.child, C = n.child.memoizedState, C = C === null ? tp(u) : { baseLanes: C.baseLanes | u, cachePool: null, transitions: C.transitions }, v.memoizedState = C, v.childLanes = n.childLanes & ~u, r.memoizedState = Oo, l;
    }
    return v = n.child, n = v.sibling, l = Wu(v, { mode: "visible", children: l.children }), !(r.mode & 1) && (l.lanes = u), l.return = r, l.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = l, r.memoizedState = null, l;
  }
  function rp(n, r) {
    return r = Qs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xl(n, r, u, l) {
    return l !== null && Hd(l), El(r, n.child, null, u), n = rp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iy(n, r, u, l, f, v, C) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, l = Us(Error(p(422))), xl(n, r, C, l)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = l.fallback, f = r.mode, l = Qs({ mode: "visible", children: l.children }, f, 0, null), v = Uo(v, f, C, null), v.flags |= 2, l.return = r, v.return = r, l.sibling = v, r.child = l, r.mode & 1 && El(r, n.child, null, C), r.child.memoizedState = tp(C), r.memoizedState = Oo, v);
    if (!(r.mode & 1))
      return xl(n, r, C, null);
    if (f.data === "$!") {
      if (l = f.nextSibling && f.nextSibling.dataset, l)
        var _ = l.dgst;
      return l = _, v = Error(p(419)), l = Us(v, l, void 0), xl(n, r, C, l);
    }
    if (_ = (C & n.childLanes) !== 0, Yn || _) {
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
        f = f & (l.suspendedLanes | C) ? 0 : f, f !== 0 && f !== v.retryLane && (v.retryLane = f, qi(n, f), Nr(l, n, f, -1));
      }
      return hp(), l = Us(Error(p(421))), xl(n, r, C, l);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gy.bind(null, n), f._reactRetry = r, null) : (n = v.treeContext, la = si(f.nextSibling), wa = r, gn = !0, Ia = null, n !== null && (oa[_r++] = dr, oa[_r++] = Gi, oa[_r++] = Ha, dr = n.id, Gi = n.overflow, Ha = r), r = rp(r, l.children), r.flags |= 4096, r);
  }
  function ap(n, r, u) {
    n.lanes |= r;
    var l = n.alternate;
    l !== null && (l.lanes |= r), ir(n.return, r, u);
  }
  function pf(n, r, u, l, f) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: u, tailMode: f } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = l, v.tail = u, v.tailMode = f);
  }
  function ip(n, r, u) {
    var l = r.pendingProps, f = l.revealOrder, v = l.tail;
    if (qn(n, r, l.children, u), l = et.current, l & 2)
      l = l & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ap(n, u, r);
            else if (n.tag === 19)
              ap(n, u, r);
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
    if (Kt(et, l), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (u = r.child, f = null; u !== null; )
            n = u.alternate, n !== null && kn(n) === null && (f = u), u = u.sibling;
          u = f, u === null ? (f = r.child, r.child = null) : (f = u.sibling, u.sibling = null), pf(r, !1, f, u, v);
          break;
        case "backwards":
          for (u = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && kn(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = u, u = f, f = n;
          }
          pf(r, !0, u, null, v);
          break;
        case "together":
          pf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function vr(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), eu |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, u = Wu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Wu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Zi(n, r, u) {
    switch (r.tag) {
      case 3:
        Eh(r), Dn();
        break;
      case 5:
        Ze(r);
        break;
      case 1:
        Tn(r.type) && Ac(r);
        break;
      case 4:
        Gd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context, f = r.memoizedProps.value;
        Kt(_i, l._currentValue), l._currentValue = f;
        break;
      case 13:
        if (l = r.memoizedState, l !== null)
          return l.dehydrated !== null ? (Kt(et, et.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? np(n, r, u) : (Kt(et, et.current & 1), n = vr(n, r, u), n !== null ? n.sibling : null);
        Kt(et, et.current & 1);
        break;
      case 19:
        if (l = (u & r.childLanes) !== 0, n.flags & 128) {
          if (l)
            return ip(n, r, u);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Kt(et, et.current), l)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xo(n, r, u);
    }
    return vr(n, r, u);
  }
  var Ps, Do, Ya, Kn;
  Ps = function(n, r) {
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
  }, Do = function() {
  }, Ya = function(n, r, u, l) {
    var f = n.memoizedProps;
    if (f !== l) {
      n = r.stateNode, So(ci.current);
      var v = null;
      switch (u) {
        case "input":
          f = we(n, f), l = we(n, l), v = [];
          break;
        case "select":
          f = k({}, f, { value: void 0 }), l = k({}, l, { value: void 0 }), v = [];
          break;
        case "textarea":
          f = Zr(n, f), l = Zr(n, l), v = [];
          break;
        default:
          typeof f.onClick != "function" && typeof l.onClick == "function" && (n.onclick = Lc);
      }
      Pn(u, l);
      var C;
      u = null;
      for (Z in f)
        if (!l.hasOwnProperty(Z) && f.hasOwnProperty(Z) && f[Z] != null)
          if (Z === "style") {
            var _ = f[Z];
            for (C in _)
              _.hasOwnProperty(C) && (u || (u = {}), u[C] = "");
          } else
            Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (R.hasOwnProperty(Z) ? v || (v = []) : (v = v || []).push(Z, null));
      for (Z in l) {
        var L = l[Z];
        if (_ = f != null ? f[Z] : void 0, l.hasOwnProperty(Z) && L !== _ && (L != null || _ != null))
          if (Z === "style")
            if (_) {
              for (C in _)
                !_.hasOwnProperty(C) || L && L.hasOwnProperty(C) || (u || (u = {}), u[C] = "");
              for (C in L)
                L.hasOwnProperty(C) && _[C] !== L[C] && (u || (u = {}), u[C] = L[C]);
            } else
              u || (v || (v = []), v.push(
                Z,
                u
              )), u = L;
          else
            Z === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, _ = _ ? _.__html : void 0, L != null && _ !== L && (v = v || []).push(Z, L)) : Z === "children" ? typeof L != "string" && typeof L != "number" || (v = v || []).push(Z, "" + L) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (R.hasOwnProperty(Z) ? (L != null && Z === "onScroll" && cn("scroll", n), v || _ === L || (v = [])) : (v = v || []).push(Z, L));
      }
      u && (v = v || []).push("style", u);
      var Z = v;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Kn = function(n, r, u, l) {
    u !== l && (r.flags |= 4);
  };
  function Fs(n, r) {
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
  function Or(n) {
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
    switch (Fd(r), r.tag) {
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
        return Or(r), null;
      case 1:
        return Tn(r.type) && Va(), Or(r), null;
      case 3:
        return l = r.stateNode, Fu(), Yt(An), Yt(ot), Yc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (Pc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ia !== null && (Ws(Ia), Ia = null))), Do(n, r), Or(r), null;
      case 5:
        Tt(r);
        var f = So(Cl.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Ya(n, r, u, l, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null)
              throw Error(p(166));
            return Or(r), null;
          }
          if (n = So(ci.current), Pc(r)) {
            l = r.stateNode, u = r.type;
            var v = r.memoizedProps;
            switch (l[Ti] = r, l[mo] = v, n = (r.mode & 1) !== 0, u) {
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
                for (f = 0; f < bs.length; f++)
                  cn(bs[f], l);
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
                pn(l, v), cn("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!v.multiple }, cn("invalid", l);
                break;
              case "textarea":
                Tr(l, v), cn("invalid", l);
            }
            Pn(u, v), f = null;
            for (var C in v)
              if (v.hasOwnProperty(C)) {
                var _ = v[C];
                C === "children" ? typeof _ == "string" ? l.textContent !== _ && (v.suppressHydrationWarning !== !0 && Mc(l.textContent, _, n), f = ["children", _]) : typeof _ == "number" && l.textContent !== "" + _ && (v.suppressHydrationWarning !== !0 && Mc(
                  l.textContent,
                  _,
                  n
                ), f = ["children", "" + _]) : R.hasOwnProperty(C) && _ != null && C === "onScroll" && cn("scroll", l);
              }
            switch (u) {
              case "input":
                In(l), Kr(l, v, !0);
                break;
              case "textarea":
                In(l), cr(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (l.onclick = Lc);
            }
            l = f, r.updateQueue = l, l !== null && (r.flags |= 4);
          } else {
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jr(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = C.createElement(u, { is: l.is }) : (n = C.createElement(u), u === "select" && (C = n, l.multiple ? C.multiple = !0 : l.size && (C.size = l.size))) : n = C.createElementNS(n, u), n[Ti] = r, n[mo] = l, Ps(n, r, !1, !1), r.stateNode = n;
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
                  for (f = 0; f < bs.length; f++)
                    cn(bs[f], n);
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
                  n._wrapperState = { wasMultiple: !!l.multiple }, f = k({}, l, { value: void 0 }), cn("invalid", n);
                  break;
                case "textarea":
                  Tr(n, l), f = Zr(n, l), cn("invalid", n);
                  break;
                default:
                  f = l;
              }
              Pn(u, f), _ = f;
              for (v in _)
                if (_.hasOwnProperty(v)) {
                  var L = _[v];
                  v === "style" ? $t(n, L) : v === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && mi(n, L)) : v === "children" ? typeof L == "string" ? (u !== "textarea" || L !== "") && Sa(n, L) : typeof L == "number" && Sa(n, "" + L) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (R.hasOwnProperty(v) ? L != null && v === "onScroll" && cn("scroll", n) : L != null && te(n, v, L, C));
                }
              switch (u) {
                case "input":
                  In(n), Kr(n, l, !1);
                  break;
                case "textarea":
                  In(n), cr(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + dt(l.value));
                  break;
                case "select":
                  n.multiple = !!l.multiple, v = l.value, v != null ? Rr(n, !!l.multiple, v, !1) : l.defaultValue != null && Rr(
                    n,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Lc);
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
        return Or(r), null;
      case 6:
        if (n && r.stateNode != null)
          Kn(n, r, n.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null)
            throw Error(p(166));
          if (u = So(Cl.current), So(ci.current), Pc(r)) {
            if (l = r.stateNode, u = r.memoizedProps, l[Ti] = r, (v = l.nodeValue !== u) && (n = wa, n !== null))
              switch (n.tag) {
                case 3:
                  Mc(l.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Mc(l.nodeValue, u, (n.mode & 1) !== 0);
              }
            v && (r.flags |= 4);
          } else
            l = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(l), l[Ti] = r, r.stateNode = l;
        }
        return Or(r), null;
      case 13:
        if (Yt(et), l = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && la !== null && r.mode & 1 && !(r.flags & 128))
            oh(), Dn(), r.flags |= 98560, v = !1;
          else if (v = Pc(r), l !== null && l.dehydrated !== null) {
            if (n === null) {
              if (!v)
                throw Error(p(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v)
                throw Error(p(317));
              v[Ti] = r;
            } else
              Dn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Or(r), v = !1;
          } else
            Ia !== null && (Ws(Ia), Ia = null), v = !0;
          if (!v)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (r.child.flags |= 8192, r.mode & 1 && (n === null || et.current & 1 ? Zn === 0 && (Zn = 3) : hp())), r.updateQueue !== null && (r.flags |= 4), Or(r), null);
      case 4:
        return Fu(), Do(n, r), n === null && ml(r.stateNode.containerInfo), Or(r), null;
      case 10:
        return zu(r.type._context), Or(r), null;
      case 17:
        return Tn(r.type) && Va(), Or(r), null;
      case 19:
        if (Yt(et), v = r.memoizedState, v === null)
          return Or(r), null;
        if (l = (r.flags & 128) !== 0, C = v.rendering, C === null)
          if (l)
            Fs(v, !1);
          else {
            if (Zn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = kn(n), C !== null) {
                  for (r.flags |= 128, Fs(v, !1), l = C.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = u, u = r.child; u !== null; )
                    v = u, n = l, v.flags &= 14680066, C = v.alternate, C === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = C.childLanes, v.lanes = C.lanes, v.child = C.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = C.memoizedProps, v.memoizedState = C.memoizedState, v.updateQueue = C.updateQueue, v.type = C.type, n = C.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Kt(et, et.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            v.tail !== null && jt() > Al && (r.flags |= 128, l = !0, Fs(v, !1), r.lanes = 4194304);
          }
        else {
          if (!l)
            if (n = kn(C), n !== null) {
              if (r.flags |= 128, l = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Fs(v, !0), v.tail === null && v.tailMode === "hidden" && !C.alternate && !gn)
                return Or(r), null;
            } else
              2 * jt() - v.renderingStartTime > Al && u !== 1073741824 && (r.flags |= 128, l = !0, Fs(v, !1), r.lanes = 4194304);
          v.isBackwards ? (C.sibling = r.child, r.child = C) : (u = v.last, u !== null ? u.sibling = C : r.child = C, v.last = C);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = jt(), r.sibling = null, u = et.current, Kt(et, l ? u & 1 | 2 : u & 1), r) : (Or(r), null);
      case 22:
      case 23:
        return vp(), l = r.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (r.flags |= 8192), l && r.mode & 1 ? Oa & 1073741824 && (Or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Or(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function up(n, r) {
    switch (Fd(r), r.tag) {
      case 1:
        return Tn(r.type) && Va(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Fu(), Yt(An), Yt(ot), Yc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Tt(r), null;
      case 13:
        if (Yt(et), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(p(340));
          Dn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Yt(et), null;
      case 4:
        return Fu(), null;
      case 10:
        return zu(r.type._context), null;
      case 22:
      case 23:
        return vp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vs = !1, Xn = !1, Ch = typeof WeakSet == "function" ? WeakSet : Set, Ae = null;
  function Ol(n, r) {
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
  function Hs(n, r, u) {
    try {
      u();
    } catch (l) {
      Un(n, r, l);
    }
  }
  var bh = !1;
  function Rh(n, r) {
    if (Nd = Ua, n = xc(), $i(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var l = u.getSelection && u.getSelection();
          if (l && l.rangeCount !== 0) {
            u = l.anchorNode;
            var f = l.anchorOffset, v = l.focusNode;
            l = l.focusOffset;
            try {
              u.nodeType, v.nodeType;
            } catch {
              u = null;
              break e;
            }
            var C = 0, _ = -1, L = -1, Z = 0, fe = 0, de = n, ce = null;
            t:
              for (; ; ) {
                for (var De; de !== u || f !== 0 && de.nodeType !== 3 || (_ = C + f), de !== v || l !== 0 && de.nodeType !== 3 || (L = C + l), de.nodeType === 3 && (C += de.nodeValue.length), (De = de.firstChild) !== null; )
                  ce = de, de = De;
                for (; ; ) {
                  if (de === n)
                    break t;
                  if (ce === u && ++Z === f && (_ = C), ce === v && ++fe === l && (L = C), (De = de.nextSibling) !== null)
                    break;
                  de = ce, ce = de.parentNode;
                }
                de = De;
              }
            u = _ === -1 || L === -1 ? null : { start: _, end: L };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (vo = { focusedElem: n, selectionRange: u }, Ua = !1, Ae = r; Ae !== null; )
      if (r = Ae, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ae = n;
      else
        for (; Ae !== null; ) {
          r = Ae;
          try {
            var ze = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ze !== null) {
                    var Fe = ze.memoizedProps, Vn = ze.memoizedState, $ = r.stateNode, j = $.getSnapshotBeforeUpdate(r.elementType === r.type ? Fe : _a(r.type, Fe), Vn);
                    $.__reactInternalSnapshotBeforeUpdate = j;
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
            Un(r, r.return, ye);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ae = n;
            break;
          }
          Ae = r.return;
        }
    return ze = bh, bh = !1, ze;
  }
  function Is(n, r, u) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var f = l = l.next;
      do {
        if ((f.tag & n) === n) {
          var v = f.destroy;
          f.destroy = void 0, v !== void 0 && Hs(r, u, v);
        }
        f = f.next;
      } while (f !== l);
    }
  }
  function Bs(n, r) {
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
  function op(n) {
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
  function lp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, lp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ti], delete r[mo], delete r[Ad], delete r[Uy], delete r[zd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Th(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function vf(n) {
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
  function Dl(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = Lc));
    else if (l !== 4 && (n = n.child, n !== null))
      for (Dl(n, r, u), n = n.sibling; n !== null; )
        Dl(n, r, u), n = n.sibling;
  }
  function Oi(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (l !== 4 && (n = n.child, n !== null))
      for (Oi(n, r, u), n = n.sibling; n !== null; )
        Oi(n, r, u), n = n.sibling;
  }
  var wn = null, ur = !1;
  function Wa(n, r, u) {
    for (u = u.child; u !== null; )
      kl(n, r, u), u = u.sibling;
  }
  function kl(n, r, u) {
    if (ea && typeof ea.onCommitFiberUnmount == "function")
      try {
        ea.onCommitFiberUnmount(yu, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Xn || Ol(u, r);
      case 6:
        var l = wn, f = ur;
        wn = null, Wa(n, r, u), wn = l, ur = f, wn !== null && (ur ? (n = wn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : wn.removeChild(u.stateNode));
        break;
      case 18:
        wn !== null && (ur ? (n = wn, u = u.stateNode, n.nodeType === 8 ? Du(n.parentNode, u) : n.nodeType === 1 && Du(n, u), Tu(n)) : Du(wn, u.stateNode));
        break;
      case 4:
        l = wn, f = ur, wn = u.stateNode.containerInfo, ur = !0, Wa(n, r, u), wn = l, ur = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xn && (l = u.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          f = l = l.next;
          do {
            var v = f, C = v.destroy;
            v = v.tag, C !== void 0 && (v & 2 || v & 4) && Hs(u, r, C), f = f.next;
          } while (f !== l);
        }
        Wa(n, r, u);
        break;
      case 1:
        if (!Xn && (Ol(u, r), l = u.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = u.memoizedProps, l.state = u.memoizedState, l.componentWillUnmount();
          } catch (_) {
            Un(u, r, _);
          }
        Wa(n, r, u);
        break;
      case 21:
        Wa(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Xn = (l = Xn) || u.memoizedState !== null, Wa(n, r, u), Xn = l) : Wa(n, r, u);
        break;
      default:
        Wa(n, r, u);
    }
  }
  function Ji(n) {
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
  function fi(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var l = 0; l < u.length; l++) {
        var f = u[l];
        try {
          var v = n, C = r, _ = C;
          e:
            for (; _ !== null; ) {
              switch (_.tag) {
                case 5:
                  wn = _.stateNode, ur = !1;
                  break e;
                case 3:
                  wn = _.stateNode.containerInfo, ur = !0;
                  break e;
                case 4:
                  wn = _.stateNode.containerInfo, ur = !0;
                  break e;
              }
              _ = _.return;
            }
          if (wn === null)
            throw Error(p(160));
          kl(v, C, f), wn = null, ur = !1;
          var L = f.alternate;
          L !== null && (L.return = null), f.return = null;
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
        if (fi(r, n), Di(n), l & 4) {
          try {
            Is(3, n, n.return), Bs(3, n);
          } catch (Fe) {
            Un(n, n.return, Fe);
          }
          try {
            Is(5, n, n.return);
          } catch (Fe) {
            Un(n, n.return, Fe);
          }
        }
        break;
      case 1:
        fi(r, n), Di(n), l & 512 && u !== null && Ol(u, u.return);
        break;
      case 5:
        if (fi(r, n), Di(n), l & 512 && u !== null && Ol(u, u.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Sa(f, "");
          } catch (Fe) {
            Un(n, n.return, Fe);
          }
        }
        if (l & 4 && (f = n.stateNode, f != null)) {
          var v = n.memoizedProps, C = u !== null ? u.memoizedProps : v, _ = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              _ === "input" && v.type === "radio" && v.name != null && bn(f, v), xn(_, C);
              var Z = xn(_, v);
              for (C = 0; C < L.length; C += 2) {
                var fe = L[C], de = L[C + 1];
                fe === "style" ? $t(f, de) : fe === "dangerouslySetInnerHTML" ? mi(f, de) : fe === "children" ? Sa(f, de) : te(f, fe, de, Z);
              }
              switch (_) {
                case "input":
                  Rn(f, v);
                  break;
                case "textarea":
                  ga(f, v);
                  break;
                case "select":
                  var ce = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!v.multiple;
                  var De = v.value;
                  De != null ? Rr(f, !!v.multiple, De, !1) : ce !== !!v.multiple && (v.defaultValue != null ? Rr(
                    f,
                    !!v.multiple,
                    v.defaultValue,
                    !0
                  ) : Rr(f, !!v.multiple, v.multiple ? [] : "", !1));
              }
              f[mo] = v;
            } catch (Fe) {
              Un(n, n.return, Fe);
            }
        }
        break;
      case 6:
        if (fi(r, n), Di(n), l & 4) {
          if (n.stateNode === null)
            throw Error(p(162));
          f = n.stateNode, v = n.memoizedProps;
          try {
            f.nodeValue = v;
          } catch (Fe) {
            Un(n, n.return, Fe);
          }
        }
        break;
      case 3:
        if (fi(r, n), Di(n), l & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Tu(r.containerInfo);
          } catch (Fe) {
            Un(n, n.return, Fe);
          }
        break;
      case 4:
        fi(r, n), Di(n);
        break;
      case 13:
        fi(r, n), Di(n), f = n.child, f.flags & 8192 && (v = f.memoizedState !== null, f.stateNode.isHidden = v, !v || f.alternate !== null && f.alternate.memoizedState !== null || (fp = jt())), l & 4 && Ji(n);
        break;
      case 22:
        if (fe = u !== null && u.memoizedState !== null, n.mode & 1 ? (Xn = (Z = Xn) || fe, fi(r, n), Xn = Z) : fi(r, n), Di(n), l & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !fe && n.mode & 1)
            for (Ae = n, fe = n.child; fe !== null; ) {
              for (de = Ae = fe; Ae !== null; ) {
                switch (ce = Ae, De = ce.child, ce.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Is(4, ce, ce.return);
                    break;
                  case 1:
                    Ol(ce, ce.return);
                    var ze = ce.stateNode;
                    if (typeof ze.componentWillUnmount == "function") {
                      l = ce, u = ce.return;
                      try {
                        r = l, ze.props = r.memoizedProps, ze.state = r.memoizedState, ze.componentWillUnmount();
                      } catch (Fe) {
                        Un(l, u, Fe);
                      }
                    }
                    break;
                  case 5:
                    Ol(ce, ce.return);
                    break;
                  case 22:
                    if (ce.memoizedState !== null) {
                      sp(de);
                      continue;
                    }
                }
                De !== null ? (De.return = ce, Ae = De) : sp(de);
              }
              fe = fe.sibling;
            }
          e:
            for (fe = null, de = n; ; ) {
              if (de.tag === 5) {
                if (fe === null) {
                  fe = de;
                  try {
                    f = de.stateNode, Z ? (v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (_ = de.stateNode, L = de.memoizedProps.style, C = L != null && L.hasOwnProperty("display") ? L.display : null, _.style.display = Et("display", C));
                  } catch (Fe) {
                    Un(n, n.return, Fe);
                  }
                }
              } else if (de.tag === 6) {
                if (fe === null)
                  try {
                    de.stateNode.nodeValue = Z ? "" : de.memoizedProps;
                  } catch (Fe) {
                    Un(n, n.return, Fe);
                  }
              } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
                de.child.return = de, de = de.child;
                continue;
              }
              if (de === n)
                break e;
              for (; de.sibling === null; ) {
                if (de.return === null || de.return === n)
                  break e;
                fe === de && (fe = null), de = de.return;
              }
              fe === de && (fe = null), de.sibling.return = de.return, de = de.sibling;
            }
        }
        break;
      case 19:
        fi(r, n), Di(n), l & 4 && Ji(n);
        break;
      case 21:
        break;
      default:
        fi(
          r,
          n
        ), Di(n);
    }
  }
  function Di(n) {
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
            l.flags & 32 && (Sa(f, ""), l.flags &= -33);
            var v = vf(n);
            Oi(n, v, f);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo, _ = vf(n);
            Dl(n, _, C);
            break;
          default:
            throw Error(p(161));
        }
      } catch (L) {
        Un(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _h(n, r, u) {
    Ae = n, Nl(n);
  }
  function Nl(n, r, u) {
    for (var l = (n.mode & 1) !== 0; Ae !== null; ) {
      var f = Ae, v = f.child;
      if (f.tag === 22 && l) {
        var C = f.memoizedState !== null || Vs;
        if (!C) {
          var _ = f.alternate, L = _ !== null && _.memoizedState !== null || Xn;
          _ = Vs;
          var Z = Xn;
          if (Vs = C, (Xn = L) && !Z)
            for (Ae = f; Ae !== null; )
              C = Ae, L = C.child, C.tag === 22 && C.memoizedState !== null ? Oh(f) : L !== null ? (L.return = C, Ae = L) : Oh(f);
          for (; v !== null; )
            Ae = v, Nl(v), v = v.sibling;
          Ae = f, Vs = _, Xn = Z;
        }
        xh(n);
      } else
        f.subtreeFlags & 8772 && v !== null ? (v.return = f, Ae = v) : xh(n);
    }
  }
  function xh(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      if (r.flags & 8772) {
        var u = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Xn || Bs(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !Xn)
                  if (u === null)
                    l.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? u.memoizedProps : _a(r.type, u.memoizedProps);
                    l.componentDidUpdate(f, u.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var v = r.updateQueue;
                v !== null && go(r, v, l);
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
                  go(r, C, u);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = _;
                  var L = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      L.autoFocus && u.focus();
                      break;
                    case "img":
                      L.src && (u.src = L.src);
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
                      var de = fe.dehydrated;
                      de !== null && Tu(de);
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
          Xn || r.flags & 512 && op(r);
        } catch (ce) {
          Un(r, r.return, ce);
        }
      }
      if (r === n) {
        Ae = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, Ae = u;
        break;
      }
      Ae = r.return;
    }
  }
  function sp(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      if (r === n) {
        Ae = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, Ae = u;
        break;
      }
      Ae = r.return;
    }
  }
  function Oh(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Bs(4, r);
            } catch (L) {
              Un(r, u, L);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = r.return;
              try {
                l.componentDidMount();
              } catch (L) {
                Un(r, f, L);
              }
            }
            var v = r.return;
            try {
              op(r);
            } catch (L) {
              Un(r, v, L);
            }
            break;
          case 5:
            var C = r.return;
            try {
              op(r);
            } catch (L) {
              Un(r, C, L);
            }
        }
      } catch (L) {
        Un(r, r.return, L);
      }
      if (r === n) {
        Ae = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, Ae = _;
        break;
      }
      Ae = r.return;
    }
  }
  var hf = Math.ceil, $s = J.ReactCurrentDispatcher, cp = J.ReactCurrentOwner, Dr = J.ReactCurrentBatchConfig, _t = 0, Nn = null, zn = null, or = 0, Oa = 0, Ml = mt(0), Zn = 0, Ys = null, eu = 0, mf = 0, Ll = 0, ko = null, Vr = null, fp = 0, Al = 1 / 0, tu = null, yf = !1, No = null, ki = null, Bu = !1, $u = null, gf = 0, zl = 0, Sf = null, Mo = -1, Lo = 0;
  function kr() {
    return _t & 6 ? jt() : Mo !== -1 ? Mo : Mo = jt();
  }
  function Wn(n) {
    return n.mode & 1 ? _t & 2 && or !== 0 ? or & -or : Fc.transition !== null ? (Lo === 0 && (Lo = nl()), Lo) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ps(n.type)), n) : 1;
  }
  function Nr(n, r, u, l) {
    if (50 < zl)
      throw zl = 0, Sf = null, Error(p(185));
    Fi(n, u, l), (!(_t & 2) || n !== Nn) && (n === Nn && (!(_t & 2) && (mf |= u), Zn === 4 && Qa(n, or)), Mr(n, l), u === 1 && _t === 0 && !(r.mode & 1) && (Al = jt() + 500, ar && ia()));
  }
  function Mr(n, r) {
    var u = n.callbackNode;
    Eu(n, r);
    var l = Pr(n, n === Nn ? or : 0);
    if (l === 0)
      u !== null && fr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = l & -l, n.callbackPriority !== r) {
      if (u != null && fr(u), r === 1)
        n.tag === 0 ? jd(Dh.bind(null, n)) : Ud(Dh.bind(null, n)), Ld(function() {
          !(_t & 6) && ia();
        }), u = null;
      else {
        switch (al(l)) {
          case 1:
            u = ri;
            break;
          case 4:
            u = bt;
            break;
          case 16:
            u = Ci;
            break;
          case 536870912:
            u = el;
            break;
          default:
            u = Ci;
        }
        u = yp(u, Ul.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function Ul(n, r) {
    if (Mo = -1, Lo = 0, _t & 6)
      throw Error(p(327));
    var u = n.callbackNode;
    if (Pl() && n.callbackNode !== u)
      return null;
    var l = Pr(n, n === Nn ? or : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & n.expiredLanes || r)
      r = Cf(n, l);
    else {
      r = l;
      var f = _t;
      _t |= 2;
      var v = Ef();
      (Nn !== n || or !== r) && (tu = null, Al = jt() + 500, Ao(n, r));
      do
        try {
          Yy();
          break;
        } catch (_) {
          kh(n, _);
        }
      while (1);
      Bd(), $s.current = v, _t = f, zn !== null ? r = 0 : (Nn = null, or = 0, r = Zn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Cu(n), f !== 0 && (l = f, r = dp(n, f))), r === 1)
        throw u = Ys, Ao(n, 0), Qa(n, l), Mr(n, jt()), u;
      if (r === 6)
        Qa(n, l);
      else {
        if (f = n.current.alternate, !(l & 30) && !pp(f) && (r = Cf(n, l), r === 2 && (v = Cu(n), v !== 0 && (l = v, r = dp(n, v))), r === 1))
          throw u = Ys, Ao(n, 0), Qa(n, l), Mr(n, jt()), u;
        switch (n.finishedWork = f, n.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            zo(n, Vr, tu);
            break;
          case 3:
            if (Qa(n, l), (l & 130023424) === l && (r = fp + 500 - jt(), 10 < r)) {
              if (Pr(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & l) !== l) {
                kr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = ho(zo.bind(null, n, Vr, tu), r);
              break;
            }
            zo(n, Vr, tu);
            break;
          case 4:
            if (Qa(n, l), (l & 4194240) === l)
              break;
            for (r = n.eventTimes, f = -1; 0 < l; ) {
              var C = 31 - jr(l);
              v = 1 << C, C = r[C], C > f && (f = C), l &= ~v;
            }
            if (l = f, l = jt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * hf(l / 1960)) - l, 10 < l) {
              n.timeoutHandle = ho(zo.bind(null, n, Vr, tu), l);
              break;
            }
            zo(n, Vr, tu);
            break;
          case 5:
            zo(n, Vr, tu);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Mr(n, jt()), n.callbackNode === u ? Ul.bind(null, n) : null;
  }
  function dp(n, r) {
    var u = ko;
    return n.current.memoizedState.isDehydrated && (Ao(n, r).flags |= 256), n = Cf(n, r), n !== 2 && (r = Vr, Vr = u, r !== null && Ws(r)), n;
  }
  function Ws(n) {
    Vr === null ? Vr = n : Vr.push.apply(Vr, n);
  }
  function pp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var l = 0; l < u.length; l++) {
            var f = u[l], v = f.getSnapshot;
            f = f.value;
            try {
              if (!ja(v(), f))
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
  function Qa(n, r) {
    for (r &= ~Ll, r &= ~mf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - jr(r), l = 1 << u;
      n[u] = -1, r &= ~l;
    }
  }
  function Dh(n) {
    if (_t & 6)
      throw Error(p(327));
    Pl();
    var r = Pr(n, 0);
    if (!(r & 1))
      return Mr(n, jt()), null;
    var u = Cf(n, r);
    if (n.tag !== 0 && u === 2) {
      var l = Cu(n);
      l !== 0 && (r = l, u = dp(n, l));
    }
    if (u === 1)
      throw u = Ys, Ao(n, 0), Qa(n, r), Mr(n, jt()), u;
    if (u === 6)
      throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, zo(n, Vr, tu), Mr(n, jt()), null;
  }
  function jl(n, r) {
    var u = _t;
    _t |= 1;
    try {
      return n(r);
    } finally {
      _t = u, _t === 0 && (Al = jt() + 500, ar && ia());
    }
  }
  function Yu(n) {
    $u !== null && $u.tag === 0 && !(_t & 6) && Pl();
    var r = _t;
    _t |= 1;
    var u = Dr.transition, l = Ht;
    try {
      if (Dr.transition = null, Ht = 1, n)
        return n();
    } finally {
      Ht = l, Dr.transition = u, _t = r, !(_t & 6) && ia();
    }
  }
  function vp() {
    Oa = Ml.current, Yt(Ml);
  }
  function Ao(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, rh(u)), zn !== null)
      for (u = zn.return; u !== null; ) {
        var l = u;
        switch (Fd(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Va();
            break;
          case 3:
            Fu(), Yt(An), Yt(ot), Yc();
            break;
          case 5:
            Tt(l);
            break;
          case 4:
            Fu();
            break;
          case 13:
            Yt(et);
            break;
          case 19:
            Yt(et);
            break;
          case 10:
            zu(l.type._context);
            break;
          case 22:
          case 23:
            vp();
        }
        u = u.return;
      }
    if (Nn = n, zn = n = Wu(n.current, null), or = Oa = r, Zn = 0, Ys = null, Ll = mf = eu = 0, Vr = ko = null, pr !== null) {
      for (r = 0; r < pr.length; r++)
        if (u = pr[r], l = u.interleaved, l !== null) {
          u.interleaved = null;
          var f = l.next, v = u.pending;
          if (v !== null) {
            var C = v.next;
            v.next = f, l.next = C;
          }
          u.pending = l;
        }
      pr = null;
    }
    return n;
  }
  function kh(n, r) {
    do {
      var u = zn;
      try {
        if (Bd(), Wc.current = sf, rt) {
          for (var l = Sn.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), l = l.next;
          }
          rt = !1;
        }
        if (Eo = 0, Nt = ae = Sn = null, xi = !1, xa = 0, cp.current = null, u === null || u.return === null) {
          Zn = 1, Ys = r, zn = null;
          break;
        }
        e: {
          var v = n, C = u.return, _ = u, L = r;
          if (r = or, _.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Z = L, fe = _, de = fe.tag;
            if (!(fe.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var ce = fe.alternate;
              ce ? (fe.updateQueue = ce.updateQueue, fe.memoizedState = ce.memoizedState, fe.lanes = ce.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var De = Zd(C);
            if (De !== null) {
              De.flags &= -257, Jd(De, C, _, v, r), De.mode & 1 && gh(v, Z, r), r = De, L = Z;
              var ze = r.updateQueue;
              if (ze === null) {
                var Fe = /* @__PURE__ */ new Set();
                Fe.add(L), r.updateQueue = Fe;
              } else
                ze.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                gh(v, Z, r), hp();
                break e;
              }
              L = Error(p(426));
            }
          } else if (gn && _.mode & 1) {
            var Vn = Zd(C);
            if (Vn !== null) {
              !(Vn.flags & 65536) && (Vn.flags |= 256), Jd(Vn, C, _, v, r), Hd(wl(L, _));
              break e;
            }
          }
          v = L = wl(L, _), Zn !== 4 && (Zn = 2), ko === null ? ko = [v] : ko.push(v), v = C;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var $ = yh(v, L, r);
                Wd(v, $);
                break e;
              case 1:
                _ = L;
                var j = v.type, G = v.stateNode;
                if (!(v.flags & 128) && (typeof j.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (ki === null || !ki.has(G)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var ye = js(v, _, r);
                  Wd(v, ye);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        mp(u);
      } catch (Ve) {
        r = Ve, zn === u && u !== null && (zn = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function Ef() {
    var n = $s.current;
    return $s.current = sf, n === null ? sf : n;
  }
  function hp() {
    (Zn === 0 || Zn === 3 || Zn === 2) && (Zn = 4), Nn === null || !(eu & 268435455) && !(mf & 268435455) || Qa(Nn, or);
  }
  function Cf(n, r) {
    var u = _t;
    _t |= 2;
    var l = Ef();
    (Nn !== n || or !== r) && (tu = null, Ao(n, r));
    do
      try {
        $y();
        break;
      } catch (f) {
        kh(n, f);
      }
    while (1);
    if (Bd(), _t = u, $s.current = l, zn !== null)
      throw Error(p(261));
    return Nn = null, or = 0, Zn;
  }
  function $y() {
    for (; zn !== null; )
      Nh(zn);
  }
  function Yy() {
    for (; zn !== null && !Ei(); )
      Nh(zn);
  }
  function Nh(n) {
    var r = Lh(n.alternate, n, Oa);
    n.memoizedProps = n.pendingProps, r === null ? mp(n) : zn = r, cp.current = null;
  }
  function mp(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = up(u, r), u !== null) {
          u.flags &= 32767, zn = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Zn = 6, zn = null;
          return;
        }
      } else if (u = By(u, r, Oa), u !== null) {
        zn = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        zn = r;
        return;
      }
      zn = r = n;
    } while (r !== null);
    Zn === 0 && (Zn = 5);
  }
  function zo(n, r, u) {
    var l = Ht, f = Dr.transition;
    try {
      Dr.transition = null, Ht = 1, Wy(n, r, u, l);
    } finally {
      Dr.transition = f, Ht = l;
    }
    return null;
  }
  function Wy(n, r, u, l) {
    do
      Pl();
    while ($u !== null);
    if (_t & 6)
      throw Error(p(327));
    u = n.finishedWork;
    var f = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = u.lanes | u.childLanes;
    if (dd(n, v), n === Nn && (zn = Nn = null, or = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Bu || (Bu = !0, yp(Ci, function() {
      return Pl(), null;
    })), v = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || v) {
      v = Dr.transition, Dr.transition = null;
      var C = Ht;
      Ht = 1;
      var _ = _t;
      _t |= 4, cp.current = null, Rh(n, u), wh(u, n), Oc(vo), Ua = !!Nd, vo = Nd = null, n.current = u, _h(u), Jo(), _t = _, Ht = C, Dr.transition = v;
    } else
      n.current = u;
    if (Bu && (Bu = !1, $u = n, gf = f), v = n.pendingLanes, v === 0 && (ki = null), cs(u.stateNode), Mr(n, jt()), r !== null)
      for (l = n.onRecoverableError, u = 0; u < r.length; u++)
        f = r[u], l(f.value, { componentStack: f.stack, digest: f.digest });
    if (yf)
      throw yf = !1, n = No, No = null, n;
    return gf & 1 && n.tag !== 0 && Pl(), v = n.pendingLanes, v & 1 ? n === Sf ? zl++ : (zl = 0, Sf = n) : zl = 0, ia(), null;
  }
  function Pl() {
    if ($u !== null) {
      var n = al(gf), r = Dr.transition, u = Ht;
      try {
        if (Dr.transition = null, Ht = 16 > n ? 16 : n, $u === null)
          var l = !1;
        else {
          if (n = $u, $u = null, gf = 0, _t & 6)
            throw Error(p(331));
          var f = _t;
          for (_t |= 4, Ae = n.current; Ae !== null; ) {
            var v = Ae, C = v.child;
            if (Ae.flags & 16) {
              var _ = v.deletions;
              if (_ !== null) {
                for (var L = 0; L < _.length; L++) {
                  var Z = _[L];
                  for (Ae = Z; Ae !== null; ) {
                    var fe = Ae;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Is(8, fe, v);
                    }
                    var de = fe.child;
                    if (de !== null)
                      de.return = fe, Ae = de;
                    else
                      for (; Ae !== null; ) {
                        fe = Ae;
                        var ce = fe.sibling, De = fe.return;
                        if (lp(fe), fe === Z) {
                          Ae = null;
                          break;
                        }
                        if (ce !== null) {
                          ce.return = De, Ae = ce;
                          break;
                        }
                        Ae = De;
                      }
                  }
                }
                var ze = v.alternate;
                if (ze !== null) {
                  var Fe = ze.child;
                  if (Fe !== null) {
                    ze.child = null;
                    do {
                      var Vn = Fe.sibling;
                      Fe.sibling = null, Fe = Vn;
                    } while (Fe !== null);
                  }
                }
                Ae = v;
              }
            }
            if (v.subtreeFlags & 2064 && C !== null)
              C.return = v, Ae = C;
            else
              e:
                for (; Ae !== null; ) {
                  if (v = Ae, v.flags & 2048)
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Is(9, v, v.return);
                    }
                  var $ = v.sibling;
                  if ($ !== null) {
                    $.return = v.return, Ae = $;
                    break e;
                  }
                  Ae = v.return;
                }
          }
          var j = n.current;
          for (Ae = j; Ae !== null; ) {
            C = Ae;
            var G = C.child;
            if (C.subtreeFlags & 2064 && G !== null)
              G.return = C, Ae = G;
            else
              e:
                for (C = j; Ae !== null; ) {
                  if (_ = Ae, _.flags & 2048)
                    try {
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Bs(9, _);
                      }
                    } catch (Ve) {
                      Un(_, _.return, Ve);
                    }
                  if (_ === C) {
                    Ae = null;
                    break e;
                  }
                  var ye = _.sibling;
                  if (ye !== null) {
                    ye.return = _.return, Ae = ye;
                    break e;
                  }
                  Ae = _.return;
                }
          }
          if (_t = f, ia(), ea && typeof ea.onPostCommitFiberRoot == "function")
            try {
              ea.onPostCommitFiberRoot(yu, n);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Ht = u, Dr.transition = r;
      }
    }
    return !1;
  }
  function Mh(n, r, u) {
    r = wl(u, r), r = yh(n, r, 1), n = ju(n, r, 1), r = kr(), n !== null && (Fi(n, 1, r), Mr(n, r));
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
          if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ki === null || !ki.has(l))) {
            n = wl(u, n), n = js(r, n, 1), r = ju(r, n, 1), n = kr(), r !== null && (Fi(r, 1, n), Mr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Qy(n, r, u) {
    var l = n.pingCache;
    l !== null && l.delete(r), r = kr(), n.pingedLanes |= n.suspendedLanes & u, Nn === n && (or & u) === u && (Zn === 4 || Zn === 3 && (or & 130023424) === or && 500 > jt() - fp ? Ao(n, 0) : Ll |= u), Mr(n, r);
  }
  function bf(n, r) {
    r === 0 && (n.mode & 1 ? (r = gu, gu <<= 1, !(gu & 130023424) && (gu = 4194304)) : r = 1);
    var u = kr();
    n = qi(n, r), n !== null && (Fi(n, r, u), Mr(n, u));
  }
  function Gy(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), bf(n, u);
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
    l !== null && l.delete(r), bf(n, u);
  }
  var Lh;
  Lh = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || An.current)
        Yn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Yn = !1, Zi(n, r, u);
        Yn = !!(n.flags & 131072);
      }
    else
      Yn = !1, gn && r.flags & 1048576 && Pd(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        xr(n, r), n = r.pendingProps;
        var f = Fa(r, ot.current);
        Ce(r, u), f = Vu(null, r, l, n, f, u);
        var v = Ro();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tn(l) ? (v = !0, Ac(r)) : v = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Yd(r), f.updater = Ic, r.stateNode = f, f._reactInternals = r, Bc(r, l, n, u), r = Sh(null, r, l, !0, v, u)) : (r.tag = 0, gn && v && zc(r), qn(null, r, f, u), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (xr(n, r), n = r.pendingProps, f = l._init, l = f(l._payload), r.type = l, f = r.tag = Xy(l), n = _a(l, n), f) {
            case 0:
              r = _l(null, r, l, n, u);
              break e;
            case 1:
              r = ep(null, r, l, n, u);
              break e;
            case 11:
              r = Iu(null, r, l, n, u);
              break e;
            case 14:
              r = ff(null, r, l, _a(l.type, n), u);
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
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : _a(l, f), _l(n, r, l, f, u);
      case 1:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : _a(l, f), ep(n, r, l, f, u);
      case 3:
        e: {
          if (Eh(r), n === null)
            throw Error(p(387));
          l = r.pendingProps, v = r.memoizedState, f = v.element, Gn(n, r), Pu(r, l, null, u);
          var C = r.memoizedState;
          if (l = C.element, v.isDehydrated)
            if (v = { element: l, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
              f = wl(Error(p(423)), r), r = df(n, r, l, u, f);
              break e;
            } else if (l !== f) {
              f = wl(Error(p(424)), r), r = df(n, r, l, u, f);
              break e;
            } else
              for (la = si(r.stateNode.containerInfo.firstChild), wa = r, gn = !0, Ia = null, u = hh(r, null, l, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Dn(), l === f) {
              r = vr(n, r, u);
              break e;
            }
            qn(n, r, l, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ze(r), n === null && jc(r), l = r.type, f = r.pendingProps, v = n !== null ? n.memoizedProps : null, C = f.children, ws(l, f) ? C = null : v !== null && ws(l, v) && (r.flags |= 32), yt(n, r), qn(n, r, C, u), r.child;
      case 6:
        return n === null && jc(r), null;
      case 13:
        return np(n, r, u);
      case 4:
        return Gd(r, r.stateNode.containerInfo), l = r.pendingProps, n === null ? r.child = El(r, null, l, u) : qn(n, r, l, u), r.child;
      case 11:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : _a(l, f), Iu(n, r, l, f, u);
      case 7:
        return qn(n, r, r.pendingProps, u), r.child;
      case 8:
        return qn(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return qn(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (l = r.type._context, f = r.pendingProps, v = r.memoizedProps, C = f.value, Kt(_i, l._currentValue), l._currentValue = C, v !== null)
            if (ja(v.value, C)) {
              if (v.children === f.children && !An.current) {
                r = vr(n, r, u);
                break e;
              }
            } else
              for (v = r.child, v !== null && (v.return = r); v !== null; ) {
                var _ = v.dependencies;
                if (_ !== null) {
                  C = v.child;
                  for (var L = _.firstContext; L !== null; ) {
                    if (L.context === l) {
                      if (v.tag === 1) {
                        L = Ki(-1, u & -u), L.tag = 2;
                        var Z = v.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var fe = Z.pending;
                          fe === null ? L.next = L : (L.next = fe.next, fe.next = L), Z.pending = L;
                        }
                      }
                      v.lanes |= u, L = v.alternate, L !== null && (L.lanes |= u), ir(
                        v.return,
                        u,
                        r
                      ), _.lanes |= u;
                      break;
                    }
                    L = L.next;
                  }
                } else if (v.tag === 10)
                  C = v.type === r.type ? null : v.child;
                else if (v.tag === 18) {
                  if (C = v.return, C === null)
                    throw Error(p(341));
                  C.lanes |= u, _ = C.alternate, _ !== null && (_.lanes |= u), ir(C, u, r), C = v.sibling;
                } else
                  C = v.child;
                if (C !== null)
                  C.return = v;
                else
                  for (C = v; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (v = C.sibling, v !== null) {
                      v.return = C.return, C = v;
                      break;
                    }
                    C = C.return;
                  }
                v = C;
              }
          qn(n, r, f.children, u), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, l = r.pendingProps.children, Ce(r, u), f = Fn(f), l = l(f), r.flags |= 1, qn(n, r, l, u), r.child;
      case 14:
        return l = r.type, f = _a(l, r.pendingProps), f = _a(l.type, f), ff(n, r, l, f, u);
      case 15:
        return fa(n, r, r.type, r.pendingProps, u);
      case 17:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : _a(l, f), xr(n, r), r.tag = 1, Tn(l) ? (n = !0, Ac(r)) : n = !1, Ce(r, u), fh(r, l, f), Bc(r, l, f, u), Sh(null, r, l, !0, n, u);
      case 19:
        return ip(n, r, u);
      case 22:
        return xo(n, r, u);
    }
    throw Error(p(156, r.tag));
  };
  function yp(n, r) {
    return hn(n, r);
  }
  function Ky(n, r, u, l) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, u, l) {
    return new Ky(n, r, u, l);
  }
  function gp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Xy(n) {
    if (typeof n == "function")
      return gp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wt)
        return 11;
      if (n === Ot)
        return 14;
    }
    return 2;
  }
  function Wu(n, r) {
    var u = n.alternate;
    return u === null ? (u = Ga(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Rf(n, r, u, l, f, v) {
    var C = 2;
    if (l = n, typeof n == "function")
      gp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case Ee:
            return Uo(u.children, f, v, r);
          case Ke:
            C = 8, f |= 8;
            break;
          case ut:
            return n = Ga(12, u, r, f | 2), n.elementType = ut, n.lanes = v, n;
          case He:
            return n = Ga(13, u, r, f), n.elementType = He, n.lanes = v, n;
          case tt:
            return n = Ga(19, u, r, f), n.elementType = tt, n.lanes = v, n;
          case _e:
            return Qs(u, f, v, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case at:
                  C = 10;
                  break e;
                case We:
                  C = 9;
                  break e;
                case wt:
                  C = 11;
                  break e;
                case Ot:
                  C = 14;
                  break e;
                case gt:
                  C = 16, l = null;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = Ga(C, u, r, f), r.elementType = n, r.type = l, r.lanes = v, r;
  }
  function Uo(n, r, u, l) {
    return n = Ga(7, n, l, r), n.lanes = u, n;
  }
  function Qs(n, r, u, l) {
    return n = Ga(22, n, l, r), n.elementType = _e, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Gs(n, r, u) {
    return n = Ga(6, n, null, r), n.lanes = u, n;
  }
  function jo(n, r, u) {
    return r = Ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zy(n, r, u, l, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rl(0), this.expirationTimes = rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rl(0), this.identifierPrefix = l, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Tf(n, r, u, l, f, v, C, _, L) {
    return n = new Zy(n, r, u, _, L), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = Ga(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: l, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yd(v), n;
  }
  function Ah(n, r, u) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: me, key: l == null ? null : "" + l, children: n, containerInfo: r, implementation: u };
  }
  function Sp(n) {
    if (!n)
      return wi;
    n = n._reactInternals;
    e: {
      if (vt(n) !== n || n.tag !== 1)
        throw Error(p(170));
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
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Tn(u))
        return Os(n, u, r);
    }
    return r;
  }
  function zh(n, r, u, l, f, v, C, _, L) {
    return n = Tf(u, l, !0, n, f, v, C, _, L), n.context = Sp(null), u = n.current, l = kr(), f = Wn(u), v = Ki(l, f), v.callback = r ?? null, ju(u, v, f), n.current.lanes = f, Fi(n, f, l), Mr(n, l), n;
  }
  function qs(n, r, u, l) {
    var f = r.current, v = kr(), C = Wn(f);
    return u = Sp(u), r.context === null ? r.context = u : r.pendingContext = u, r = Ki(v, C), r.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (r.callback = l), n = ju(f, r, C), n !== null && (Nr(n, f, C, v), Hc(n, f, C)), C;
  }
  function wf(n) {
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
  function Ep(n, r) {
    Uh(n, r), (n = n.alternate) && Uh(n, r);
  }
  function jh() {
    return null;
  }
  var Cp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function _f(n) {
    this._internalRoot = n;
  }
  nu.prototype.render = _f.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(p(409));
    qs(n, r, null, null);
  }, nu.prototype.unmount = _f.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Yu(function() {
        qs(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function nu(n) {
    this._internalRoot = n;
  }
  nu.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ul();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < qt.length && r !== 0 && r < qt[u].priority; u++)
        ;
      qt.splice(u, 0, n), u === 0 && Cc(n);
    }
  };
  function bp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ph() {
  }
  function Jy(n, r, u, l, f) {
    if (f) {
      if (typeof l == "function") {
        var v = l;
        l = function() {
          var Z = wf(C);
          v.call(Z);
        };
      }
      var C = zh(r, l, n, 0, null, !1, !1, "", Ph);
      return n._reactRootContainer = C, n[Qi] = C.current, ml(n.nodeType === 8 ? n.parentNode : n), Yu(), C;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof l == "function") {
      var _ = l;
      l = function() {
        var Z = wf(L);
        _.call(Z);
      };
    }
    var L = Tf(n, 0, !1, null, null, !1, !1, "", Ph);
    return n._reactRootContainer = L, n[Qi] = L.current, ml(n.nodeType === 8 ? n.parentNode : n), Yu(function() {
      qs(r, L, u, l);
    }), L;
  }
  function Of(n, r, u, l, f) {
    var v = u._reactRootContainer;
    if (v) {
      var C = v;
      if (typeof f == "function") {
        var _ = f;
        f = function() {
          var L = wf(C);
          _.call(L);
        };
      }
      qs(r, C, n, f);
    } else
      C = Jy(u, r, n, f, l);
    return wf(C);
  }
  uo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ai(r.pendingLanes);
          u !== 0 && (bi(r, u | 1), Mr(r, jt()), !(_t & 6) && (Al = jt() + 500, ia()));
        }
        break;
      case 13:
        Yu(function() {
          var l = qi(n, 1);
          if (l !== null) {
            var f = kr();
            Nr(l, n, 1, f);
          }
        }), Ep(n, 1);
    }
  }, il = function(n) {
    if (n.tag === 13) {
      var r = qi(n, 134217728);
      if (r !== null) {
        var u = kr();
        Nr(r, n, 134217728, u);
      }
      Ep(n, 134217728);
    }
  }, Pt = function(n) {
    if (n.tag === 13) {
      var r = Wn(n), u = qi(n, r);
      if (u !== null) {
        var l = kr();
        Nr(u, n, r, l);
      }
      Ep(n, r);
    }
  }, ul = function() {
    return Ht;
  }, ol = function(n, r) {
    var u = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = u;
    }
  }, zr = function(n, r, u) {
    switch (r) {
      case "input":
        if (Rn(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var l = u[r];
            if (l !== n && l.form === n.form) {
              var f = Ye(l);
              if (!f)
                throw Error(p(90));
              Oe(l), Rn(l, f);
            }
          }
        }
        break;
      case "textarea":
        ga(n, u);
        break;
      case "select":
        r = u.value, r != null && Rr(n, !!u.multiple, r, !1);
    }
  }, io = jl, Zo = Yu;
  var eg = { usingClientEntryPoint: !1, Events: [xs, yl, Ye, Aa, vu, jl] }, Fl = { findFiberByHostInstance: Pa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tg = { bundleType: Fl.bundleType, version: Fl.version, rendererPackageName: Fl.rendererPackageName, rendererConfig: Fl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Fl.findFiberByHostInstance || jh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Df.isDisabled && Df.supportsFiber)
      try {
        yu = Df.inject(tg), ea = Df;
      } catch {
      }
  }
  return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg, ei.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bp(r))
      throw Error(p(200));
    return Ah(n, r, null, u);
  }, ei.createRoot = function(n, r) {
    if (!bp(n))
      throw Error(p(299));
    var u = !1, l = "", f = Cp;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Tf(n, 1, !1, null, null, u, !1, l, f), n[Qi] = r.current, ml(n.nodeType === 8 ? n.parentNode : n), new _f(r);
  }, ei.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Bn(r), n = n === null ? null : n.stateNode, n;
  }, ei.flushSync = function(n) {
    return Yu(n);
  }, ei.hydrate = function(n, r, u) {
    if (!xf(r))
      throw Error(p(200));
    return Of(null, n, r, !0, u);
  }, ei.hydrateRoot = function(n, r, u) {
    if (!bp(n))
      throw Error(p(405));
    var l = u != null && u.hydratedSources || null, f = !1, v = "", C = Cp;
    if (u != null && (u.unstable_strictMode === !0 && (f = !0), u.identifierPrefix !== void 0 && (v = u.identifierPrefix), u.onRecoverableError !== void 0 && (C = u.onRecoverableError)), r = zh(r, null, n, 1, u ?? null, f, !1, v, C), n[Qi] = r.current, ml(n), l)
      for (n = 0; n < l.length; n++)
        u = l[n], f = u._getVersion, f = f(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, f] : r.mutableSourceEagerHydrationData.push(
          u,
          f
        );
    return new nu(r);
  }, ei.render = function(n, r, u) {
    if (!xf(r))
      throw Error(p(200));
    return Of(null, n, r, !1, u);
  }, ei.unmountComponentAtNode = function(n) {
    if (!xf(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Yu(function() {
      Of(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, ei.unstable_batchedUpdates = jl, ei.unstable_renderSubtreeIntoContainer = function(n, r, u, l) {
    if (!xf(u))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
    return Of(n, r, u, !1, l);
  }, ei.version = "18.2.0-next-9e3b772b8-20220608", ei;
}
var ti = {};
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
function Ek() {
  return h1 || (h1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = dn, h = G1(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function R(e) {
      E = e;
    }
    function w(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("warn", e, a);
      }
    }
    function g(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("error", e, a);
      }
    }
    function H(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var M = 0, x = 1, U = 2, N = 3, A = 4, F = 5, B = 6, Y = 7, V = 8, le = 9, oe = 10, te = 11, J = 12, I = 13, me = 14, Ee = 15, Ke = 16, ut = 17, at = 18, We = 19, wt = 21, He = 22, tt = 23, Ot = 24, gt = 25, _e = !0, ve = !1, Pe = !1, k = !1, ue = !1, Re = !0, nt = !1, Qe = !1, Ct = !0, ft = !0, St = !0, dt = /* @__PURE__ */ new Set(), Ut = {}, er = {};
    function In(e, t) {
      Oe(e, t), Oe(e + "Capture", t);
    }
    function Oe(e, t) {
      Ut[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ut[e] = t;
      {
        var a = e.toLowerCase();
        er[a] = e, e === "onDoubleClick" && (er.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        dt.add(t[i]);
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
    function Kr(e, t) {
      if (bn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), Rn(e);
    }
    function Xr(e) {
      if (bn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), Rn(e);
    }
    function tr(e, t) {
      if (bn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), Rn(e);
    }
    function Rr(e, t) {
      if (bn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), Rn(e);
    }
    function Zr(e) {
      if (bn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), Rn(e);
    }
    function Tr(e) {
      if (bn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", pn(e)), Rn(e);
    }
    var ga = 0, cr = 1, Jr = 2, _n = 3, Ar = 4, mi = 5, Sa = 6, ge = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Be = ge + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Et = new RegExp("^[" + ge + "][" + Be + "]*$"), $t = {}, Wt = {};
    function Pn(e) {
      return we.call(Wt, e) ? !0 : we.call($t, e) ? !1 : Et.test(e) ? (Wt[e] = !0, !0) : ($t[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === ga : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function wr(e, t, a, i) {
      if (a !== null && a.type === ga)
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
      if (t === null || typeof t > "u" || wr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _n:
            return !t;
          case Ar:
            return t === !1;
          case mi:
            return isNaN(t);
          case Sa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function zr(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Qt(e, t, a, i, o, s, d) {
      this.acceptsBooleans = t === Jr || t === _n || t === Ar, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Gt = {}, ni = [
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
    ni.forEach(function(e) {
      Gt[e] = new Qt(
        e,
        ga,
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
        cr,
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
        Jr,
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
        Jr,
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
        Ar,
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
    }), ["rowSpan", "start"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        mi,
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
    var Aa = /[\-\:]([a-z])/g, vu = function(e) {
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
      var t = e.replace(Aa, vu);
      Gt[t] = new Qt(
        t,
        cr,
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
      var t = e.replace(Aa, vu);
      Gt[t] = new Qt(
        t,
        cr,
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
      var t = e.replace(Aa, vu);
      Gt[t] = new Qt(
        t,
        cr,
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
        cr,
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
    var io = "xlinkHref";
    Gt[io] = new Qt(
      "xlinkHref",
      cr,
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
        cr,
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
    var Zo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Pi = !1;
    function hu(e) {
      !Pi && Zo.test(e) && (Pi = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ea(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Kr(a, t), i.sanitizeURL && hu("" + a);
        var s = i.attributeName, d = null;
        if (i.type === Ar) {
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
    function yi(e, t, a, i) {
      {
        if (!Pn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Kr(a, t), o === "" + a ? a : o;
      }
    }
    function Ca(e, t, a, i) {
      var o = zr(t);
      if (!xn(t, o, i)) {
        if (Jt(t, a, o, i) && (a = null), i || o === null) {
          if (Pn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Kr(a, t), e.setAttribute(s, "" + a));
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
          var P = o.type, z;
          P === _n || P === Ar && a === !0 ? z = "" : (Kr(a, b), z = "" + a, o.sanitizeURL && hu(z.toString())), T ? e.setAttributeNS(T, b, z) : e.setAttribute(b, z);
        }
      }
    }
    var gi = Symbol.for("react.element"), Ur = Symbol.for("react.portal"), ba = Symbol.for("react.fragment"), Si = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), Se = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), vt = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), Bn = Symbol.for("react.scope"), vn = Symbol.for("react.debug_trace_mode"), hn = Symbol.for("react.offscreen"), fr = Symbol.for("react.legacy_hidden"), Ei = Symbol.for("react.cache"), Jo = Symbol.for("react.tracing_marker"), jt = Symbol.iterator, fd = "@@iterator";
    function ri(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = jt && e[jt] || e[fd];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, Ci = 0, mu, el, yu, ea, cs, jr, fs;
    function ds() {
    }
    ds.__reactDisabledLog = !0;
    function Sc() {
      {
        if (Ci === 0) {
          mu = console.log, el = console.info, yu = console.warn, ea = console.error, cs = console.group, jr = console.groupCollapsed, fs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ds,
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
        Ci++;
      }
    }
    function tl() {
      {
        if (Ci--, Ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: mu
            }),
            info: bt({}, e, {
              value: el
            }),
            warn: bt({}, e, {
              value: yu
            }),
            error: bt({}, e, {
              value: ea
            }),
            group: bt({}, e, {
              value: cs
            }),
            groupCollapsed: bt({}, e, {
              value: jr
            }),
            groupEnd: bt({}, e, {
              value: fs
            })
          });
        }
        Ci < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gu = p.ReactCurrentDispatcher, ai;
    function Pr(e, t, a) {
      {
        if (ai === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ai = i && i[1] || "";
          }
        return `
` + ai + e;
      }
    }
    var Su = !1, Eu;
    {
      var Cu = typeof WeakMap == "function" ? WeakMap : Map;
      Eu = new Cu();
    }
    function nl(e, t) {
      if (!e || Su)
        return "";
      {
        var a = Eu.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Su = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = gu.current, gu.current = null, Sc();
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
                    var P = `
` + m[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && Eu.set(e, P), P;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Su = !1, gu.current = s, tl(), Error.prepareStackTrace = o;
      }
      var z = e ? e.displayName || e.name : "", q = z ? Pr(z) : "";
      return typeof e == "function" && Eu.set(e, q), q;
    }
    function rl(e, t, a) {
      return nl(e, !0);
    }
    function Fi(e, t, a) {
      return nl(e, !1);
    }
    function dd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function bi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return nl(e, dd(e));
      if (typeof e == "string")
        return Pr(e);
      switch (e) {
        case vt:
          return Pr("Suspense");
        case kt:
          return Pr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ne:
            return Fi(e.render);
          case ht:
            return bi(e.type, t, a);
          case Ge: {
            var i = e, o = i._payload, s = i._init;
            try {
              return bi(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return Pr(e.type);
        case Ke:
          return Pr("Lazy");
        case I:
          return Pr("Suspense");
        case We:
          return Pr("SuspenseList");
        case M:
        case U:
        case Ee:
          return Fi(e.type);
        case te:
          return Fi(e.type.render);
        case x:
          return rl(e.type);
        default:
          return "";
      }
    }
    function al(e) {
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
    function uo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function il(e) {
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
        case ba:
          return "Fragment";
        case Ur:
          return "Portal";
        case D:
          return "Profiler";
        case Si:
          return "StrictMode";
        case vt:
          return "Suspense";
        case kt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Se:
            var t = e;
            return il(t) + ".Consumer";
          case se:
            var a = e;
            return il(a._context) + ".Provider";
          case Ne:
            return uo(e, e.render, "ForwardRef");
          case ht:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case Ge: {
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
    function ul(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ol(e) {
      return e.displayName || "Context";
    }
    function st(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ot:
          return "Cache";
        case le:
          var i = a;
          return ol(i) + ".Consumer";
        case oe:
          var o = a;
          return ol(o._context) + ".Provider";
        case at:
          return "DehydratedFragment";
        case te:
          return ul(a, a.render, "ForwardRef");
        case Y:
          return "Fragment";
        case F:
          return a;
        case A:
          return "Portal";
        case N:
          return "Root";
        case B:
          return "Text";
        case Ke:
          return Pt(a);
        case V:
          return a === Si ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case J:
          return "Profiler";
        case wt:
          return "Scope";
        case I:
          return "Suspense";
        case We:
          return "SuspenseList";
        case gt:
          return "TracingMarker";
        case x:
        case M:
        case ut:
        case U:
        case me:
        case Ee:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oo = p.ReactDebugCurrentFrame, On = null, ta = !1;
    function Fr() {
      {
        if (On === null)
          return null;
        var e = On._debugOwner;
        if (e !== null && typeof e < "u")
          return st(e);
      }
      return null;
    }
    function bu() {
      return On === null ? "" : al(On);
    }
    function Ln() {
      oo.getCurrentStack = null, On = null, ta = !1;
    }
    function qt(e) {
      oo.getCurrentStack = e === null ? null : bu, On = e, ta = !1;
    }
    function Ec() {
      return On;
    }
    function na(e) {
      ta = e;
    }
    function nr(e) {
      return "" + e;
    }
    function Ri(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tr(e), e;
        default:
          return "";
      }
    }
    var Cc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Vi(e, t) {
      Cc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ru(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bc(e) {
      return e._valueTracker;
    }
    function za(e) {
      e._valueTracker = null;
    }
    function Tu(e) {
      var t = "";
      return e && (Ru(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wu(e) {
      var t = Ru(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(m) {
            Tr(m), i = "" + m, s.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            Tr(m), i = "" + m;
          },
          stopTracking: function() {
            za(e), delete e[t];
          }
        };
        return d;
      }
    }
    function Ua(e) {
      bc(e) || (e._valueTracker = wu(e));
    }
    function ll(e) {
      if (!e)
        return !1;
      var t = bc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Tu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _u(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var xu = !1, lo = !1, sl = !1, ps = !1;
    function ii(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var a = e, i = t.checked, o = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function O(e, t) {
      Vi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !lo && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), lo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xu && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), xu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ri(t.value != null ? t.value : i),
        controlled: ii(t)
      };
    }
    function K(e, t) {
      var a = e, i = t.checked;
      i != null && Ca(a, "checked", i, !1);
    }
    function ee(e, t) {
      var a = e;
      {
        var i = ii(t);
        !a._wrapperState.controlled && i && !ps && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ps = !0), a._wrapperState.controlled && !i && !sl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), sl = !0);
      }
      K(e, t);
      var o = Ri(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = nr(o)) : a.value !== nr(o) && (a.value = nr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Xe(a, t.type, o) : t.hasOwnProperty("defaultValue") && Xe(a, t.type, Ri(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function he(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = nr(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function Je(e, t) {
      var a = e;
      ee(a, t), Te(a, t);
    }
    function Te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Kr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var d = o[s];
          if (!(d === e || d.form !== e.form)) {
            var m = tm(d);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ll(d), ee(d, m);
          }
        }
      }
    }
    function Xe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _u(e.ownerDocument) !== e) && (a == null ? e.defaultValue = nr(e._wrapperState.initialValue) : e.defaultValue !== nr(a) && (e.defaultValue = nr(a)));
    }
    var Rt = !1, Ft = !1, ln = !1;
    function en(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ft || (Ft = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ln || (ln = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Rt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Rt = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", nr(Ri(t.value)));
    }
    var mn = Array.isArray;
    function Dt(e) {
      return mn(e);
    }
    var Hi;
    Hi = !1;
    function cl() {
      var e = Fr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var vs = ["value", "defaultValue"];
    function pd(e) {
      {
        Vi("select", e);
        for (var t = 0; t < vs.length; t++) {
          var a = vs[t];
          if (e[a] != null) {
            var i = Dt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, cl()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, cl());
          }
        }
      }
    }
    function ui(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, d = {}, m = 0; m < s.length; m++)
          d["$" + s[m]] = !0;
        for (var y = 0; y < o.length; y++) {
          var b = d.hasOwnProperty("$" + o[y].value);
          o[y].selected !== b && (o[y].selected = b), b && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var T = nr(Ri(a)), P = null, z = 0; z < o.length; z++) {
          if (o[z].value === T) {
            o[z].selected = !0, i && (o[z].defaultSelected = !0);
            return;
          }
          P === null && !o[z].disabled && (P = o[z]);
        }
        P !== null && (P.selected = !0);
      }
    }
    function hs(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function ms(e, t) {
      var a = e;
      pd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Hi && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
    }
    function vd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ui(a, !!t.multiple, i, !1) : t.defaultValue != null && ui(a, !!t.multiple, t.defaultValue, !0);
    }
    function by(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? ui(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? ui(a, !!t.multiple, t.defaultValue, !0) : ui(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ry(e, t) {
      var a = e, i = t.value;
      i != null && ui(a, !!t.multiple, i, !1);
    }
    var hd = !1;
    function md(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = bt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: nr(a._wrapperState.initialValue)
      });
      return i;
    }
    function kv(e, t) {
      var a = e;
      Vi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !hd && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component"), hd = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Dt(o)) {
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
        initialValue: Ri(i)
      };
    }
    function Nv(e, t) {
      var a = e, i = Ri(t.value), o = Ri(t.defaultValue);
      if (i != null) {
        var s = nr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = nr(o));
    }
    function Mv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function yd(e, t) {
      Nv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", Ty = "http://www.w3.org/1998/Math/MathML", gd = "http://www.w3.org/2000/svg";
    function Rc(e) {
      switch (e) {
        case "svg":
          return gd;
        case "math":
          return Ty;
        default:
          return Ii;
      }
    }
    function Sd(e, t) {
      return e == null || e === Ii ? Rc(t) : e === gd && t === "foreignObject" ? Ii : e;
    }
    var wy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Tc, Lv = wy(function(e, t) {
      if (e.namespaceURI === gd && !("innerHTML" in e)) {
        Tc = Tc || document.createElement("div"), Tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ra = 1, Bi = 3, $n = 8, oi = 9, so = 11, wc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
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
    }, fl = {
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
    Object.keys(fl).forEach(function(e) {
      Uv.forEach(function(t) {
        fl[zv(t, e)] = fl[e];
      });
    });
    function _c(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fl.hasOwnProperty(e) && fl[e]) ? t + "px" : (Rr(t, e), ("" + t).trim());
    }
    var dl = /([A-Z])/g, _y = /^ms-/;
    function xy(e) {
      return e.replace(dl, "-$1").toLowerCase().replace(_y, "-ms-");
    }
    var jv = function() {
    };
    {
      var Pv = /^(?:webkit|moz|o)[A-Z]/, Fv = /^-ms-/, ys = /-(.)/g, pl = /;\s*$/, vl = {}, hl = {}, Vv = !1, Ed = !1, Cd = function(e) {
        return e.replace(ys, function(t, a) {
          return a.toUpperCase();
        });
      }, bd = function(e) {
        vl.hasOwnProperty(e) && vl[e] || (vl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Cd(e.replace(Fv, "ms-"))
        ));
      }, Hv = function(e) {
        vl.hasOwnProperty(e) && vl[e] || (vl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Iv = function(e, t) {
        hl.hasOwnProperty(t) && hl[t] || (hl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(pl, "")));
      }, Bv = function(e, t) {
        Vv || (Vv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Oy = function(e, t) {
        Ed || (Ed = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      jv = function(e, t) {
        e.indexOf("-") > -1 ? bd(e) : Pv.test(e) ? Hv(e) : pl.test(t) && Iv(e, t), typeof t == "number" && (isNaN(t) ? Bv(e, t) : isFinite(t) || Oy(e, t));
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
              t += a + (s ? i : xy(i)) + ":", t += _c(i, o, s), a = ";";
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
          var s = _c(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ja(e) {
      var t = {};
      for (var a in e)
        for (var i = Av[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function gs(e, t) {
      {
        if (!t)
          return;
        var a = ja(e), i = ja(t), o = {};
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
    }, Wv = bt({
      menuitem: !0
    }, Yv), Qv = "__html";
    function xc(e, t) {
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
    function $i(e, t) {
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
    var Oc = {
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
    }, li = {}, Rd = new RegExp("^(aria)-[" + Be + "]*$"), Ss = new RegExp("^(aria)[A-Z][" + Be + "]*$");
    function Td(e, t) {
      {
        if (we.call(li, t) && li[t])
          return !0;
        if (Ss.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Gv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), li[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), li[t] = !0, !0;
        }
        if (Rd.test(t)) {
          var o = t.toLowerCase(), s = Gv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return li[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), li[t] = !0, !0;
        }
      }
      return !0;
    }
    function qv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Td(e, i);
          o || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Dc(e, t) {
      $i(e, t) || qv(e, t);
    }
    var co = !1;
    function wd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !co && (co = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _d = function() {
    };
    {
      var rr = {}, xd = /^on./, Kv = /^on[^A-Z]/, Xv = new RegExp("^(aria)-[" + Be + "]*$"), Zv = new RegExp("^(aria)[A-Z][" + Be + "]*$");
      _d = function(e, t, a, i) {
        if (we.call(rr, t) && rr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), rr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var m = d.hasOwnProperty(o) ? d[o] : null;
          if (m != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, m), rr[t] = !0, !0;
          if (xd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), rr[t] = !0, !0;
        } else if (xd.test(t))
          return Kv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), rr[t] = !0, !0;
        if (Xv.test(t) || Zv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), rr[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), rr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), rr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), rr[t] = !0, !0;
        var y = zr(t), b = y !== null && y.type === ga;
        if (Oc.hasOwnProperty(o)) {
          var T = Oc[o];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), rr[t] = !0, !0;
        } else if (!b && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), rr[t] = !0, !0;
        return typeof a == "boolean" && wr(t, a, y, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), rr[t] = !0, !0) : b ? !0 : wr(t, a, y, !1) ? (rr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === _n && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), rr[t] = !0), !0);
      };
    }
    var Jv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = _d(e, o, t[o], a);
          s || i.push(o);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function eh(e, t, a) {
      $i(e, t) || Jv(e, t, a);
    }
    var Yi = 1, Es = 2, fo = 4, My = Yi | Es | fo, Cs = null;
    function bs(e) {
      Cs !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Cs = e;
    }
    function Ly() {
      Cs === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Cs = null;
    }
    function th(e) {
      return e === Cs;
    }
    function kc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var cn = null, Ou = null, Wi = null;
    function ml(e) {
      var t = Il(e);
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
    function Nc(e) {
      Ou ? Wi ? Wi.push(e) : Wi = [e] : Ou = e;
    }
    function Rs() {
      return Ou !== null || Wi !== null;
    }
    function Ts() {
      if (Ou) {
        var e = Ou, t = Wi;
        if (Ou = null, Wi = null, ml(e), t)
          for (var a = 0; a < t.length; a++)
            ml(t[a]);
      }
    }
    var po = function(e, t) {
      return e(t);
    }, Od = function() {
    }, Dd = !1;
    function Ay() {
      var e = Rs();
      e && (Od(), Ts());
    }
    function kd(e, t, a) {
      if (Dd)
        return e(t, a);
      Dd = !0;
      try {
        return po(e, t, a);
      } finally {
        Dd = !1, Ay();
      }
    }
    function Mc(e, t, a) {
      po = e, Od = a;
    }
    function Lc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Nd(e, t, a) {
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
          return !!(a.disabled && Lc(t));
        default:
          return !1;
      }
    }
    function vo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = tm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Nd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var ws = !1;
    if (Zt)
      try {
        var ho = {};
        Object.defineProperty(ho, "passive", {
          get: function() {
            ws = !0;
          }
        }), window.addEventListener("test", ho, ho), window.removeEventListener("test", ho, ho);
      } catch {
        ws = !1;
      }
    function rh(e, t, a, i, o, s, d, m, y) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var Md = rh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ld = document.createElement("react");
      Md = function(t, a, i, o, s, d, m, y, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), P = !1, z = !0, q = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ne() {
          Ld.removeEventListener(re, qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var Me = Array.prototype.slice.call(arguments, 3);
        function qe() {
          P = !0, ne(), a.apply(i, Me), z = !1;
        }
        var Ie, Lt = !1, xt = !1;
        function W(Q) {
          if (Ie = Q.error, Lt = !0, Ie === null && Q.colno === 0 && Q.lineno === 0 && (xt = !0), Q.defaultPrevented && Ie != null && typeof Ie == "object")
            try {
              Ie._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), Ld.addEventListener(re, qe, !1), T.initEvent(re, !1, !1), Ld.dispatchEvent(T), X && Object.defineProperty(window, "event", X), P && z && (Lt ? xt && (Ie = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ie = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ie)), window.removeEventListener("error", W), !P)
          return ne(), rh.apply(this, arguments);
      };
    }
    var zy = Md, Du = !1, si = null, _s = !1, ku = null, Ti = {
      onError: function(e) {
        Du = !0, si = e;
      }
    };
    function mo(e, t, a, i, o, s, d, m, y) {
      Du = !1, si = null, zy.apply(Ti, arguments);
    }
    function Qi(e, t, a, i, o, s, d, m, y) {
      if (mo.apply(this, arguments), Du) {
        var b = zd();
        _s || (_s = !0, ku = b);
      }
    }
    function Ad() {
      if (_s) {
        var e = ku;
        throw _s = !1, ku = null, e;
      }
    }
    function Uy() {
      return Du;
    }
    function zd() {
      if (Du) {
        var e = si;
        return Du = !1, si = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pa(e) {
      return e._reactInternals;
    }
    function xs(e) {
      return e._reactInternals !== void 0;
    }
    function yl(e, t) {
      e._reactInternals = t;
    }
    var Ye = (
      /*                      */
      0
    ), Nu = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), mt = (
      /*                       */
      4
    ), Yt = (
      /*                */
      16
    ), Kt = (
      /*                 */
      32
    ), wi = (
      /*                     */
      64
    ), ot = (
      /*                   */
      128
    ), An = (
      /*            */
      256
    ), aa = (
      /*                          */
      512
    ), Fa = (
      /*                     */
      1024
    ), Tn = (
      /*                      */
      2048
    ), Va = (
      /*                    */
      4096
    ), Mu = (
      /*                   */
      8192
    ), Os = (
      /*             */
      16384
    ), Ac = Tn | mt | wi | aa | Fa | Os, ah = (
      /*               */
      32767
    ), Ra = (
      /*                   */
      32768
    ), ar = (
      /*                */
      65536
    ), Ds = (
      /* */
      131072
    ), Ud = (
      /*                       */
      1048576
    ), jd = (
      /*                    */
      2097152
    ), ia = (
      /*                 */
      4194304
    ), Lu = (
      /*                */
      8388608
    ), ua = (
      /*               */
      16777216
    ), yo = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      mt | Fa | 0
    ), oa = yn | mt | Yt | Kt | aa | Va | Mu, _r = mt | wi | aa | Mu, Ha = Tn | Yt, dr = ia | Lu | jd, Gi = p.ReactCurrentOwner;
    function Ta(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | Va)) !== Ye && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === N ? a : null;
    }
    function Pd(e) {
      if (e.tag === I) {
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
    function zc(e) {
      return e.tag === N ? e.stateNode.containerInfo : null;
    }
    function Fd(e) {
      return Ta(e) === e;
    }
    function wa(e) {
      {
        var t = Gi.current;
        if (t !== null && t.tag === x) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Pa(e);
      return o ? Ta(o) === o : !1;
    }
    function la(e) {
      if (Ta(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function gn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ta(e);
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
              return la(s), e;
            if (y === o)
              return la(s), t;
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
      if (i.tag !== N)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ia(e) {
      var t = gn(e);
      return t !== null ? Vd(t) : null;
    }
    function Vd(e) {
      if (e.tag === F || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Vd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ih(e) {
      var t = gn(e);
      return t !== null ? Uc(t) : null;
    }
    function Uc(e) {
      if (e.tag === F || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = Uc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var jc = h.unstable_scheduleCallback, uh = h.unstable_cancelCallback, Pc = h.unstable_shouldYield, oh = h.unstable_requestPaint, Dn = h.unstable_now, Hd = h.unstable_getCurrentPriorityLevel, Fc = h.unstable_ImmediatePriority, _a = h.unstable_UserBlockingPriority, _i = h.unstable_NormalPriority, Vc = h.unstable_LowPriority, Au = h.unstable_IdlePriority, Id = h.unstable_yieldValue, Bd = h.unstable_setDisableYieldValue, zu = null, ir = null, Ce = null, Fn = !1, pr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function $d(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ct && (e = bt({}, e, {
          getLaneLabelMap: ju,
          injectProfilingHooks: Ki
        })), zu = t.inject(e), ir = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function lh(e, t) {
      if (ir && typeof ir.onScheduleFiberRoot == "function")
        try {
          ir.onScheduleFiberRoot(zu, e, t);
        } catch (a) {
          Fn || (Fn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function qi(e, t) {
      if (ir && typeof ir.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ot) === ot;
          if (ft) {
            var i;
            switch (t) {
              case xr:
                i = Fc;
                break;
              case vr:
                i = _a;
                break;
              case Zi:
                i = _i;
                break;
              case Ps:
                i = Au;
                break;
              default:
                i = _i;
                break;
            }
            ir.onCommitFiberRoot(zu, e, i, a);
          }
        } catch (o) {
          Fn || (Fn = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function Uu(e) {
      if (ir && typeof ir.onPostCommitFiberRoot == "function")
        try {
          ir.onPostCommitFiberRoot(zu, e);
        } catch (t) {
          Fn || (Fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Yd(e) {
      if (ir && typeof ir.onCommitFiberUnmount == "function")
        try {
          ir.onCommitFiberUnmount(zu, e);
        } catch (t) {
          Fn || (Fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Gn(e) {
      if (typeof Id == "function" && (Bd(e), R(e)), ir && typeof ir.setStrictMode == "function")
        try {
          ir.setStrictMode(zu, e);
        } catch (t) {
          Fn || (Fn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      Ce = e;
    }
    function ju() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Sn; a++) {
          var i = jy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Hc(e) {
      Ce !== null && typeof Ce.markCommitStarted == "function" && Ce.markCommitStarted(e);
    }
    function Wd() {
      Ce !== null && typeof Ce.markCommitStopped == "function" && Ce.markCommitStopped();
    }
    function Pu(e) {
      Ce !== null && typeof Ce.markComponentRenderStarted == "function" && Ce.markComponentRenderStarted(e);
    }
    function go() {
      Ce !== null && typeof Ce.markComponentRenderStopped == "function" && Ce.markComponentRenderStopped();
    }
    function sh(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStarted == "function" && Ce.markComponentPassiveEffectMountStarted(e);
    }
    function Qd() {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStopped == "function" && Ce.markComponentPassiveEffectMountStopped();
    }
    function Ic(e) {
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
    function Bc(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStarted == "function" && Ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function Sl() {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStopped == "function" && Ce.markComponentLayoutEffectUnmountStopped();
    }
    function $c(e, t, a) {
      Ce !== null && typeof Ce.markComponentErrored == "function" && Ce.markComponentErrored(e, t, a);
    }
    function ph(e, t, a) {
      Ce !== null && typeof Ce.markComponentSuspended == "function" && Ce.markComponentSuspended(e, t, a);
    }
    function vh(e) {
      Ce !== null && typeof Ce.markLayoutEffectsStarted == "function" && Ce.markLayoutEffectsStarted(e);
    }
    function El() {
      Ce !== null && typeof Ce.markLayoutEffectsStopped == "function" && Ce.markLayoutEffectsStopped();
    }
    function hh(e) {
      Ce !== null && typeof Ce.markPassiveEffectsStarted == "function" && Ce.markPassiveEffectsStarted(e);
    }
    function ks() {
      Ce !== null && typeof Ce.markPassiveEffectsStopped == "function" && Ce.markPassiveEffectsStopped();
    }
    function ci(e) {
      Ce !== null && typeof Ce.markRenderStarted == "function" && Ce.markRenderStarted(e);
    }
    function Ns() {
      Ce !== null && typeof Ce.markRenderYielded == "function" && Ce.markRenderYielded();
    }
    function Cl() {
      Ce !== null && typeof Ce.markRenderStopped == "function" && Ce.markRenderStopped();
    }
    function So(e) {
      Ce !== null && typeof Ce.markRenderScheduled == "function" && Ce.markRenderScheduled(e);
    }
    function Gd(e, t) {
      Ce !== null && typeof Ce.markForceUpdateScheduled == "function" && Ce.markForceUpdateScheduled(e, t);
    }
    function Fu(e, t) {
      Ce !== null && typeof Ce.markStateUpdateScheduled == "function" && Ce.markStateUpdateScheduled(e, t);
    }
    var Ze = (
      /*                         */
      0
    ), Tt = (
      /*                 */
      1
    ), et = (
      /*                    */
      2
    ), kn = (
      /*               */
      8
    ), Ba = (
      /*              */
      16
    ), Yc = Math.clz32 ? Math.clz32 : Eo, Wc = Math.log, qd = Math.LN2;
    function Eo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Wc(t) / qd | 0) | 0;
    }
    var Sn = 31, ae = (
      /*                        */
      0
    ), Nt = (
      /*                          */
      0
    ), rt = (
      /*                        */
      1
    ), xi = (
      /*    */
      2
    ), xa = (
      /*             */
      4
    ), Co = (
      /*            */
      8
    ), En = (
      /*                     */
      16
    ), bo = (
      /*                */
      32
    ), Vu = (
      /*                       */
      4194240
    ), Ro = (
      /*                        */
      64
    ), $a = (
      /*                        */
      128
    ), sa = (
      /*                        */
      256
    ), To = (
      /*                        */
      512
    ), Ms = (
      /*                        */
      1024
    ), Ls = (
      /*                        */
      2048
    ), Qc = (
      /*                        */
      4096
    ), Gc = (
      /*                        */
      8192
    ), qc = (
      /*                        */
      16384
    ), Kc = (
      /*                       */
      32768
    ), Xc = (
      /*                       */
      65536
    ), Zc = (
      /*                       */
      131072
    ), Jc = (
      /*                       */
      262144
    ), ef = (
      /*                       */
      524288
    ), wo = (
      /*                       */
      1048576
    ), tf = (
      /*                       */
      2097152
    ), _o = (
      /*                            */
      130023424
    ), Xi = (
      /*                             */
      4194304
    ), nf = (
      /*                             */
      8388608
    ), As = (
      /*                             */
      16777216
    ), rf = (
      /*                             */
      33554432
    ), af = (
      /*                             */
      67108864
    ), Kd = Xi, bl = (
      /*          */
      134217728
    ), uf = (
      /*                          */
      268435455
    ), Rl = (
      /*               */
      268435456
    ), Hu = (
      /*                        */
      536870912
    ), ca = (
      /*                   */
      1073741824
    );
    function jy(e) {
      {
        if (e & rt)
          return "Sync";
        if (e & xi)
          return "InputContinuousHydration";
        if (e & xa)
          return "InputContinuous";
        if (e & Co)
          return "DefaultHydration";
        if (e & En)
          return "Default";
        if (e & bo)
          return "TransitionHydration";
        if (e & Vu)
          return "Transition";
        if (e & _o)
          return "Retry";
        if (e & bl)
          return "SelectiveHydration";
        if (e & Rl)
          return "IdleHydration";
        if (e & Hu)
          return "Idle";
        if (e & ca)
          return "Offscreen";
      }
    }
    var fn = -1, of = Ro, lf = Xi;
    function Tl(e) {
      switch (Yn(e)) {
        case rt:
          return rt;
        case xi:
          return xi;
        case xa:
          return xa;
        case Co:
          return Co;
        case En:
          return En;
        case bo:
          return bo;
        case Ro:
        case $a:
        case sa:
        case To:
        case Ms:
        case Ls:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case wo:
        case tf:
          return e & Vu;
        case Xi:
        case nf:
        case As:
        case rf:
        case af:
          return e & _o;
        case bl:
          return bl;
        case Rl:
          return Rl;
        case Hu:
          return Hu;
        case ca:
          return ca;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function zs(e, t) {
      var a = e.pendingLanes;
      if (a === ae)
        return ae;
      var i = ae, o = e.suspendedLanes, s = e.pingedLanes, d = a & uf;
      if (d !== ae) {
        var m = d & ~o;
        if (m !== ae)
          i = Tl(m);
        else {
          var y = d & s;
          y !== ae && (i = Tl(y));
        }
      } else {
        var b = a & ~o;
        b !== ae ? i = Tl(b) : s !== ae && (i = Tl(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ae) {
        var T = Yn(i), P = Yn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= P || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === En && (P & Vu) !== ae
        )
          return t;
      }
      (i & xa) !== ae && (i |= a & En);
      var z = e.entangledLanes;
      if (z !== ae)
        for (var q = e.entanglements, X = i & z; X > 0; ) {
          var ne = Iu(X), Me = 1 << ne;
          i |= q[ne], X &= ~Me;
        }
      return i;
    }
    function mh(e, t) {
      for (var a = e.eventTimes, i = fn; t > 0; ) {
        var o = Iu(t), s = 1 << o, d = a[o];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function sf(e, t) {
      switch (e) {
        case rt:
        case xi:
        case xa:
          return t + 250;
        case Co:
        case En:
        case bo:
        case Ro:
        case $a:
        case sa:
        case To:
        case Ms:
        case Ls:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case wo:
        case tf:
          return t + 5e3;
        case Xi:
        case nf:
        case As:
        case rf:
        case af:
          return fn;
        case bl:
        case Rl:
        case Hu:
        case ca:
          return fn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), fn;
      }
    }
    function Py(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Iu(d), y = 1 << m, b = s[m];
        b === fn ? ((y & i) === ae || (y & o) !== ae) && (s[m] = sf(y, t)) : b <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function Fy(e) {
      return Tl(e.pendingLanes);
    }
    function Xd(e) {
      var t = e.pendingLanes & ~ca;
      return t !== ae ? t : t & ca ? ca : ae;
    }
    function wl(e) {
      return (e & rt) !== ae;
    }
    function Us(e) {
      return (e & uf) !== ae;
    }
    function cf(e) {
      return (e & _o) === e;
    }
    function Vy(e) {
      var t = rt | xa | En;
      return (e & t) === ae;
    }
    function yh(e) {
      return (e & Vu) === e;
    }
    function js(e, t) {
      var a = xi | xa | Co | En;
      return (t & a) !== ae;
    }
    function gh(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function Zd(e) {
      return (e & Vu) !== ae;
    }
    function Jd() {
      var e = of;
      return of <<= 1, (of & Vu) === ae && (of = Ro), e;
    }
    function Hy() {
      var e = lf;
      return lf <<= 1, (lf & _o) === ae && (lf = Xi), e;
    }
    function Yn(e) {
      return e & -e;
    }
    function qn(e) {
      return Yn(e);
    }
    function Iu(e) {
      return 31 - Yc(e);
    }
    function ff(e) {
      return Iu(e);
    }
    function fa(e, t) {
      return (e & t) !== ae;
    }
    function xo(e, t) {
      return (e & t) === t;
    }
    function yt(e, t) {
      return e | t;
    }
    function _l(e, t) {
      return e & ~t;
    }
    function ep(e, t) {
      return e & t;
    }
    function Sh(e) {
      return e;
    }
    function Eh(e, t) {
      return e !== Nt && e < t ? e : t;
    }
    function df(e) {
      for (var t = [], a = 0; a < Sn; a++)
        t.push(e);
      return t;
    }
    function Oo(e, t, a) {
      e.pendingLanes |= t, t !== Hu && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, o = ff(t);
      i[o] = a;
    }
    function tp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Iu(i), s = 1 << o;
        a[o] = fn, i &= ~s;
      }
    }
    function np(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function rp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Iu(d), y = 1 << m;
        i[m] = ae, o[m] = fn, s[m] = fn, d &= ~y;
      }
    }
    function xl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Iu(o), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~d;
      }
    }
    function Iy(e, t) {
      var a = Yn(t), i;
      switch (a) {
        case xa:
          i = xi;
          break;
        case En:
          i = Co;
          break;
        case Ro:
        case $a:
        case sa:
        case To:
        case Ms:
        case Ls:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case wo:
        case tf:
        case Xi:
        case nf:
        case As:
        case rf:
        case af:
          i = bo;
          break;
        case Hu:
          i = Rl;
          break;
        default:
          i = Nt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Nt ? Nt : i;
    }
    function ap(e, t, a) {
      if (pr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = ff(a), s = 1 << o, d = i[o];
          d.add(t), a &= ~s;
        }
    }
    function pf(e, t) {
      if (pr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = ff(t), s = 1 << o, d = a[o];
          d.size > 0 && (d.forEach(function(m) {
            var y = m.alternate;
            (y === null || !i.has(y)) && i.add(m);
          }), d.clear()), t &= ~s;
        }
    }
    function ip(e, t) {
      return null;
    }
    var xr = rt, vr = xa, Zi = En, Ps = Hu, Do = Nt;
    function Ya() {
      return Do;
    }
    function Kn(e) {
      Do = e;
    }
    function Fs(e, t) {
      var a = Do;
      try {
        return Do = e, t();
      } finally {
        Do = a;
      }
    }
    function Or(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function By(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function up(e, t) {
      return e !== 0 && e < t;
    }
    function Vs(e) {
      var t = Yn(e);
      return up(xr, t) ? up(vr, t) ? Us(t) ? Zi : Ps : vr : xr;
    }
    function Xn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ch;
    function Ae(e) {
      Ch = e;
    }
    function Ol(e) {
      Ch(e);
    }
    var Hs;
    function bh(e) {
      Hs = e;
    }
    var Rh;
    function Is(e) {
      Rh = e;
    }
    var Bs;
    function op(e) {
      Bs = e;
    }
    var lp;
    function Th(e) {
      lp = e;
    }
    var vf = !1, Dl = [], Oi = null, wn = null, ur = null, Wa = /* @__PURE__ */ new Map(), kl = /* @__PURE__ */ new Map(), Ji = [], fi = [
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
      return fi.indexOf(e) > -1;
    }
    function Di(e, t, a, i, o) {
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
          Oi = null;
          break;
        case "dragenter":
        case "dragleave":
          wn = null;
          break;
        case "mouseover":
        case "mouseout":
          ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Wa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          kl.delete(i);
          break;
        }
      }
    }
    function Nl(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Di(t, a, i, o, s);
        if (t !== null) {
          var m = Il(t);
          m !== null && Hs(m);
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
          return Oi = Nl(Oi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = o;
          return wn = Nl(wn, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var m = o;
          return ur = Nl(ur, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var y = o, b = y.pointerId;
          return Wa.set(b, Nl(Wa.get(b) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var T = o, P = T.pointerId;
          return kl.set(P, Nl(kl.get(P) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function sp(e) {
      var t = Zs(e.target);
      if (t !== null) {
        var a = Ta(t);
        if (a !== null) {
          var i = a.tag;
          if (i === I) {
            var o = Pd(a);
            if (o !== null) {
              e.blockedOn = o, lp(e.priority, function() {
                Rh(a);
              });
              return;
            }
          } else if (i === N) {
            var s = a.stateNode;
            if (Xn(s)) {
              e.blockedOn = zc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Oh(e) {
      for (var t = Bs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ji.length && up(t, Ji[i].priority); i++)
        ;
      Ji.splice(i, 0, a), i === 0 && sp(a);
    }
    function hf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ko(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          bs(s), o.target.dispatchEvent(s), Ly();
        } else {
          var d = Il(i);
          return d !== null && Hs(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function $s(e, t, a) {
      hf(e) && a.delete(t);
    }
    function cp() {
      vf = !1, Oi !== null && hf(Oi) && (Oi = null), wn !== null && hf(wn) && (wn = null), ur !== null && hf(ur) && (ur = null), Wa.forEach($s), kl.forEach($s);
    }
    function Dr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, cp)));
    }
    function _t(e) {
      if (Dl.length > 0) {
        Dr(Dl[0], e);
        for (var t = 1; t < Dl.length; t++) {
          var a = Dl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Oi !== null && Dr(Oi, e), wn !== null && Dr(wn, e), ur !== null && Dr(ur, e);
      var i = function(m) {
        return Dr(m, e);
      };
      Wa.forEach(i), kl.forEach(i);
      for (var o = 0; o < Ji.length; o++) {
        var s = Ji[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ji.length > 0; ) {
        var d = Ji[0];
        if (d.blockedOn !== null)
          break;
        sp(d), d.blockedOn === null && Ji.shift();
      }
    }
    var Nn = p.ReactCurrentBatchConfig, zn = !0;
    function or(e) {
      zn = !!e;
    }
    function Oa() {
      return zn;
    }
    function Ml(e, t, a) {
      var i = Vr(t), o;
      switch (i) {
        case xr:
          o = Zn;
          break;
        case vr:
          o = Ys;
          break;
        case Zi:
        default:
          o = eu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Zn(e, t, a, i) {
      var o = Ya(), s = Nn.transition;
      Nn.transition = null;
      try {
        Kn(xr), eu(e, t, a, i);
      } finally {
        Kn(o), Nn.transition = s;
      }
    }
    function Ys(e, t, a, i) {
      var o = Ya(), s = Nn.transition;
      Nn.transition = null;
      try {
        Kn(vr), eu(e, t, a, i);
      } finally {
        Kn(o), Nn.transition = s;
      }
    }
    function eu(e, t, a, i) {
      zn && mf(e, t, a, i);
    }
    function mf(e, t, a, i) {
      var o = ko(e, t, a, i);
      if (o === null) {
        sg(e, t, i, Ll, a), _h(e, i);
        return;
      }
      if (xh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (_h(e, i), t & fo && wh(e)) {
        for (; o !== null; ) {
          var s = Il(o);
          s !== null && Ol(s);
          var d = ko(e, t, a, i);
          if (d === null && sg(e, t, i, Ll, a), d === o)
            break;
          o = d;
        }
        o !== null && i.stopPropagation();
        return;
      }
      sg(e, t, i, null, a);
    }
    var Ll = null;
    function ko(e, t, a, i) {
      Ll = null;
      var o = kc(i), s = Zs(o);
      if (s !== null) {
        var d = Ta(s);
        if (d === null)
          s = null;
        else {
          var m = d.tag;
          if (m === I) {
            var y = Pd(d);
            if (y !== null)
              return y;
            s = null;
          } else if (m === N) {
            var b = d.stateNode;
            if (Xn(b))
              return zc(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return Ll = s, null;
    }
    function Vr(e) {
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
          return xr;
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
          return vr;
        case "message": {
          var t = Hd();
          switch (t) {
            case Fc:
              return xr;
            case _a:
              return vr;
            case _i:
            case Vc:
              return Zi;
            case Au:
              return Ps;
            default:
              return Zi;
          }
        }
        default:
          return Zi;
      }
    }
    function fp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Al(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function tu(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function yf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var No = null, ki = null, Bu = null;
    function $u(e) {
      return No = e, ki = Sf(), !0;
    }
    function gf() {
      No = null, ki = null, Bu = null;
    }
    function zl() {
      if (Bu)
        return Bu;
      var e, t = ki, a = t.length, i, o = Sf(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Bu = o.slice(e, m), Bu;
    }
    function Sf() {
      return "value" in No ? No.value : No.textContent;
    }
    function Mo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Lo() {
      return !0;
    }
    function kr() {
      return !1;
    }
    function Wn(e) {
      function t(a, i, o, s, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var y = e[m];
            y ? this[m] = y(s) : this[m] = s[m];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Lo : this.isDefaultPrevented = kr, this.isPropagationStopped = kr, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Lo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Lo);
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
        isPersistent: Lo
      }), t;
    }
    var Nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Mr = Wn(Nr), Ul = bt({}, Nr, {
      view: 0,
      detail: 0
    }), dp = Wn(Ul), Ws, pp, Qa;
    function Dh(e) {
      e !== Qa && (Qa && e.type === "mousemove" ? (Ws = e.screenX - Qa.screenX, pp = e.screenY - Qa.screenY) : (Ws = 0, pp = 0), Qa = e);
    }
    var jl = bt({}, Ul, {
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
      getModifierState: bf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Dh(e), Ws);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : pp;
      }
    }), Yu = Wn(jl), vp = bt({}, jl, {
      dataTransfer: 0
    }), Ao = Wn(vp), kh = bt({}, Ul, {
      relatedTarget: 0
    }), Ef = Wn(kh), hp = bt({}, Nr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Cf = Wn(hp), $y = bt({}, Nr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yy = Wn($y), Nh = bt({}, Nr, {
      data: 0
    }), mp = Wn(Nh), zo = mp, Wy = {
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
    }, Pl = {
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
        var a = Mo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Pl[e.keyCode] || "Unidentified" : "";
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
    function bf(e) {
      return Qy;
    }
    var Gy = bt({}, Ul, {
      key: Mh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Mo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qy = Wn(Gy), Lh = bt({}, jl, {
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
    }), yp = Wn(Lh), Ky = bt({}, Ul, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bf
    }), Ga = Wn(Ky), gp = bt({}, Nr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xy = Wn(gp), Wu = bt({}, jl, {
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
    }), Rf = Wn(Wu), Uo = [9, 13, 27, 32], Qs = 229, Gs = Zt && "CompositionEvent" in window, jo = null;
    Zt && "documentMode" in document && (jo = document.documentMode);
    var Zy = Zt && "TextEvent" in window && !jo, Tf = Zt && (!Gs || jo && jo > 8 && jo <= 11), Ah = 32, Sp = String.fromCharCode(Ah);
    function zh() {
      In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), In("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), In("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), In("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qs = !1;
    function wf(e) {
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
    function Ep(e, t) {
      return e === "keydown" && t.keyCode === Qs;
    }
    function jh(e, t) {
      switch (e) {
        case "keyup":
          return Uo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Qs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Cp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function _f(e) {
      return e.locale === "ko";
    }
    var nu = !1;
    function bp(e, t, a, i, o) {
      var s, d;
      if (Gs ? s = Uh(t) : nu ? jh(t, i) && (s = "onCompositionEnd") : Ep(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Tf && !_f(i) && (!nu && s === "onCompositionStart" ? nu = $u(o) : s === "onCompositionEnd" && nu && (d = zl()));
      var m = Ih(a, s);
      if (m.length > 0) {
        var y = new mp(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: m
        }), d)
          y.data = d;
        else {
          var b = Cp(i);
          b !== null && (y.data = b);
        }
      }
    }
    function xf(e, t) {
      switch (e) {
        case "compositionend":
          return Cp(t);
        case "keypress":
          var a = t.which;
          return a !== Ah ? null : (qs = !0, Sp);
        case "textInput":
          var i = t.data;
          return i === Sp && qs ? null : i;
        default:
          return null;
      }
    }
    function Ph(e, t) {
      if (nu) {
        if (e === "compositionend" || !Gs && jh(e, t)) {
          var a = zl();
          return gf(), nu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!wf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Tf && !_f(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Jy(e, t, a, i, o) {
      var s;
      if (Zy ? s = xf(t, i) : s = Ph(t, i), !s)
        return null;
      var d = Ih(a, "onBeforeInput");
      if (d.length > 0) {
        var m = new zo("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: m,
          listeners: d
        }), m.data = s;
      }
    }
    function Of(e, t, a, i, o, s, d) {
      bp(e, t, a, i, o), Jy(e, t, a, i, o);
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
    function Fl(e) {
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
    function Df() {
      In("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Nc(i);
      var o = Ih(t, "onChange");
      if (o.length > 0) {
        var s = new Mr("onChange", "change", null, a, i);
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
      n(t, u, e, kc(e)), kd(v, t);
    }
    function v(e) {
      F0(e, 0);
    }
    function C(e) {
      var t = zf(e);
      if (ll(t))
        return e;
    }
    function _(e, t) {
      if (e === "change")
        return t;
    }
    var L = !1;
    Zt && (L = tg("input") && (!document.documentMode || document.documentMode > 9));
    function Z(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", de);
    }
    function fe() {
      r && (r.detachEvent("onpropertychange", de), r = null, u = null);
    }
    function de(e) {
      e.propertyName === "value" && C(u) && f(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (fe(), Z(t, a)) : e === "focusout" && fe();
    }
    function De(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(u);
    }
    function ze(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Fe(e, t) {
      if (e === "click")
        return C(t);
    }
    function Vn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function $(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Xe(e, "number", e.value);
    }
    function j(e, t, a, i, o, s, d) {
      var m = a ? zf(a) : window, y, b;
      if (l(m) ? y = _ : Fl(m) ? L ? y = Vn : (y = De, b = ce) : ze(m) && (y = Fe), y) {
        var T = y(t, a);
        if (T) {
          n(e, T, i, o);
          return;
        }
      }
      b && b(t, m, a), t === "focusout" && $(m);
    }
    function G() {
      Oe("onMouseEnter", ["mouseout", "mouseover"]), Oe("onMouseLeave", ["mouseout", "mouseover"]), Oe("onPointerEnter", ["pointerout", "pointerover"]), Oe("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ye(e, t, a, i, o, s, d) {
      var m = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (m && !th(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (Zs(b) || Up(b)))
          return;
      }
      if (!(!y && !m)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var P = o.ownerDocument;
          P ? T = P.defaultView || P.parentWindow : T = window;
        }
        var z, q;
        if (y) {
          var X = i.relatedTarget || i.toElement;
          if (z = a, q = X ? Zs(X) : null, q !== null) {
            var ne = Ta(q);
            (q !== ne || q.tag !== F && q.tag !== B) && (q = null);
          }
        } else
          z = null, q = a;
        if (z !== q) {
          var Me = Yu, qe = "onMouseLeave", Ie = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Me = yp, qe = "onPointerLeave", Ie = "onPointerEnter", Lt = "pointer");
          var xt = z == null ? T : zf(z), W = q == null ? T : zf(q), re = new Me(qe, Lt + "leave", z, i, o);
          re.target = xt, re.relatedTarget = W;
          var Q = null, pe = Zs(o);
          if (pe === a) {
            var Le = new Me(Ie, Lt + "enter", q, i, o);
            Le.target = W, Le.relatedTarget = xt, Q = Le;
          }
          $T(e, re, Q, z, q);
        }
      }
    }
    function Ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ue = typeof Object.is == "function" ? Object.is : Ve;
    function $e(e, t) {
      if (Ue(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!we.call(t, s) || !Ue(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function lt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function lr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Vt(e, t) {
      for (var a = lt(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Bi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = lt(lr(a));
      }
    }
    function Qu(e) {
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
      var s = 0, d = -1, m = -1, y = 0, b = 0, T = e, P = null;
      e:
        for (; ; ) {
          for (var z = null; T === t && (a === 0 || T.nodeType === Bi) && (d = s + a), T === i && (o === 0 || T.nodeType === Bi) && (m = s + o), T.nodeType === Bi && (s += T.nodeValue.length), (z = T.firstChild) !== null; )
            P = T, T = z;
          for (; ; ) {
            if (T === e)
              break e;
            if (P === t && ++y === a && (d = s), P === i && ++b === o && (m = s), (z = T.nextSibling) !== null)
              break;
            T = P, P = T.parentNode;
          }
          T = z;
        }
      return d === -1 || m === -1 ? null : {
        start: d,
        end: m
      };
    }
    function wT(e, t) {
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
          var P = a.createRange();
          P.setStart(b.node, b.offset), o.removeAllRanges(), d > m ? (o.addRange(P), o.extend(T.node, T.offset)) : (P.setEnd(T.node, T.offset), o.addRange(P));
        }
      }
    }
    function x0(e) {
      return e && e.nodeType === Bi;
    }
    function O0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : x0(e) ? !1 : x0(t) ? O0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function _T(e) {
      return e && e.ownerDocument && O0(e.ownerDocument.documentElement, e);
    }
    function xT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function D0() {
      for (var e = window, t = _u(); t instanceof e.HTMLIFrameElement; ) {
        if (xT(t))
          e = t.contentWindow;
        else
          return t;
        t = _u(e.document);
      }
      return t;
    }
    function rg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function OT() {
      var e = D0();
      return {
        focusedElem: e,
        selectionRange: rg(e) ? kT(e) : null
      };
    }
    function DT(e) {
      var t = D0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && _T(a)) {
        i !== null && rg(a) && NT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === ra && o.push({
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
    function kT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Qu(e), t || {
        start: 0,
        end: 0
      };
    }
    function NT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : wT(e, t);
    }
    var MT = Zt && "documentMode" in document && document.documentMode <= 11;
    function LT() {
      In("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, ag = null, Rp = null, ig = !1;
    function AT(e) {
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
    function zT(e) {
      return e.window === e ? e.document : e.nodeType === oi ? e : e.ownerDocument;
    }
    function k0(e, t, a) {
      var i = zT(a);
      if (!(ig || kf == null || kf !== _u(i))) {
        var o = AT(kf);
        if (!Rp || !$e(Rp, o)) {
          Rp = o;
          var s = Ih(ag, "onSelect");
          if (s.length > 0) {
            var d = new Mr("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = kf;
          }
        }
      }
    }
    function UT(e, t, a, i, o, s, d) {
      var m = a ? zf(a) : window;
      switch (t) {
        case "focusin":
          (Fl(m) || m.contentEditable === "true") && (kf = m, ag = a, Rp = null);
          break;
        case "focusout":
          kf = null, ag = null, Rp = null;
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
          if (MT)
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
    var Nf = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, ug = {}, N0 = {};
    Zt && (N0 = document.createElement("div").style, "AnimationEvent" in window || (delete Nf.animationend.animation, delete Nf.animationiteration.animation, delete Nf.animationstart.animation), "TransitionEvent" in window || delete Nf.transitionend.transition);
    function Vh(e) {
      if (ug[e])
        return ug[e];
      if (!Nf[e])
        return e;
      var t = Nf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in N0)
          return ug[e] = t[a];
      return e;
    }
    var M0 = Vh("animationend"), L0 = Vh("animationiteration"), A0 = Vh("animationstart"), z0 = Vh("transitionend"), U0 = /* @__PURE__ */ new Map(), j0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Vl(e, t) {
      U0.set(e, t), In(t, [e]);
    }
    function jT() {
      for (var e = 0; e < j0.length; e++) {
        var t = j0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Vl(a, "on" + i);
      }
      Vl(M0, "onAnimationEnd"), Vl(L0, "onAnimationIteration"), Vl(A0, "onAnimationStart"), Vl("dblclick", "onDoubleClick"), Vl("focusin", "onFocus"), Vl("focusout", "onBlur"), Vl(z0, "onTransitionEnd");
    }
    function PT(e, t, a, i, o, s, d) {
      var m = U0.get(t);
      if (m !== void 0) {
        var y = Mr, b = t;
        switch (t) {
          case "keypress":
            if (Mo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = qy;
            break;
          case "focusin":
            b = "focus", y = Ef;
            break;
          case "focusout":
            b = "blur", y = Ef;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ef;
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
            y = Yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ao;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ga;
            break;
          case M0:
          case L0:
          case A0:
            y = Cf;
            break;
          case z0:
            y = Xy;
            break;
          case "scroll":
            y = dp;
            break;
          case "wheel":
            y = Rf;
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
            y = yp;
            break;
        }
        var T = (s & fo) !== 0;
        {
          var P = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = IT(a, m, i.type, T, P);
          if (z.length > 0) {
            var q = new y(m, b, null, i, o);
            e.push({
              event: q,
              listeners: z
            });
          }
        }
      }
    }
    jT(), G(), Df(), LT(), zh();
    function FT(e, t, a, i, o, s, d) {
      PT(e, t, a, i, o, s);
      var m = (s & My) === 0;
      m && (ye(e, t, a, i, o), j(e, t, a, i, o), UT(e, t, a, i, o), Of(e, t, a, i, o));
    }
    var Tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], og = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Tp));
    function P0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Qi(i, t, void 0, e), e.currentTarget = null;
    }
    function VT(e, t, a) {
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
          var T = t[b], P = T.instance, z = T.currentTarget, q = T.listener;
          if (P !== i && e.isPropagationStopped())
            return;
          P0(e, q, z), i = P;
        }
    }
    function F0(e, t) {
      for (var a = (t & fo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, d = o.listeners;
        VT(s, d, a);
      }
      Ad();
    }
    function HT(e, t, a, i, o) {
      var s = kc(a), d = [];
      FT(d, e, i, a, s, t), F0(d, t);
    }
    function Mn(e, t) {
      og.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = y_(t), o = YT(e, a);
      i.has(o) || (V0(t, e, Es, a), i.add(o));
    }
    function lg(e, t, a) {
      og.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= fo), V0(a, e, i, t);
    }
    var Hh = "_reactListening" + Math.random().toString(36).slice(2);
    function wp(e) {
      if (!e[Hh]) {
        e[Hh] = !0, dt.forEach(function(a) {
          a !== "selectionchange" && (og.has(a) || lg(a, !1, e), lg(a, !0, e));
        });
        var t = e.nodeType === oi ? e : e.ownerDocument;
        t !== null && (t[Hh] || (t[Hh] = !0, lg("selectionchange", !1, t)));
      }
    }
    function V0(e, t, a, i, o) {
      var s = Ml(e, t, a), d = void 0;
      ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? tu(e, t, s, d) : Al(e, t, s) : d !== void 0 ? yf(e, t, s, d) : fp(e, t, s);
    }
    function H0(e, t) {
      return e === t || e.nodeType === $n && e.parentNode === t;
    }
    function sg(e, t, a, i, o) {
      var s = i;
      if (!(t & Yi) && !(t & Es)) {
        var d = o;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var y = m.tag;
              if (y === N || y === A) {
                var b = m.stateNode.containerInfo;
                if (H0(b, d))
                  break;
                if (y === A)
                  for (var T = m.return; T !== null; ) {
                    var P = T.tag;
                    if (P === N || P === A) {
                      var z = T.stateNode.containerInfo;
                      if (H0(z, d))
                        return;
                    }
                    T = T.return;
                  }
                for (; b !== null; ) {
                  var q = Zs(b);
                  if (q === null)
                    return;
                  var X = q.tag;
                  if (X === F || X === B) {
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
      kd(function() {
        return HT(e, t, a, s);
      });
    }
    function _p(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function IT(e, t, a, i, o, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, y = [], b = e, T = null; b !== null; ) {
        var P = b, z = P.stateNode, q = P.tag;
        if (q === F && z !== null && (T = z, m !== null)) {
          var X = vo(b, m);
          X != null && y.push(_p(b, X, T));
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
        if (m === F && d !== null) {
          var y = d, b = vo(o, a);
          b != null && i.unshift(_p(o, b, y));
          var T = vo(o, t);
          T != null && i.push(_p(o, T, y));
        }
        o = o.return;
      }
      return i;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function BT(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Mf(s))
        o++;
      for (var d = 0, m = i; m; m = Mf(m))
        d++;
      for (; o - d > 0; )
        a = Mf(a), o--;
      for (; d - o > 0; )
        i = Mf(i), d--;
      for (var y = o; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Mf(a), i = Mf(i);
      }
      return null;
    }
    function I0(e, t, a, i, o) {
      for (var s = t._reactName, d = [], m = a; m !== null && m !== i; ) {
        var y = m, b = y.alternate, T = y.stateNode, P = y.tag;
        if (b !== null && b === i)
          break;
        if (P === F && T !== null) {
          var z = T;
          if (o) {
            var q = vo(m, s);
            q != null && d.unshift(_p(m, q, z));
          } else if (!o) {
            var X = vo(m, s);
            X != null && d.push(_p(m, X, z));
          }
        }
        m = m.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function $T(e, t, a, i, o) {
      var s = i && o ? BT(i, o) : null;
      i !== null && I0(e, t, i, s, !1), o !== null && a !== null && I0(e, a, o, s, !0);
    }
    function YT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var qa = !1, xp = "dangerouslySetInnerHTML", Bh = "suppressContentEditableWarning", Hl = "suppressHydrationWarning", B0 = "autoFocus", Ks = "children", Xs = "style", $h = "__html", cg, Yh, Op, $0, Wh, Y0, W0;
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
      Dc(e, t), wd(e, t), eh(e, t, {
        registrationNameDependencies: Ut,
        possibleRegistrationNames: er
      });
    }, Y0 = Zt && !document.documentMode, Op = function(e, t, a) {
      if (!qa) {
        var i = Qh(a), o = Qh(t);
        o !== i && (qa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, $0 = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Wh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, W0 = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var WT = /\r\n?/g, QT = /\u0000|\uFFFD/g;
    function Qh(e) {
      Zr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(WT, `
`).replace(QT, "");
    }
    function Gh(e, t, a, i) {
      var o = Qh(t), s = Qh(e);
      if (s !== o && (i && (qa || (qa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && _e))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Q0(e) {
      return e.nodeType === oi ? e : e.ownerDocument;
    }
    function GT() {
    }
    function qh(e) {
      e.onclick = GT;
    }
    function qT(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Xs)
            d && Object.freeze(d), $v(t, d);
          else if (s === xp) {
            var m = d ? d[$h] : void 0;
            m != null && Lv(t, m);
          } else if (s === Ks)
            if (typeof d == "string") {
              var y = e !== "textarea" || d !== "";
              y && wc(t, d);
            } else
              typeof d == "number" && wc(t, "" + d);
          else
            s === Bh || s === Hl || s === B0 || (Ut.hasOwnProperty(s) ? d != null && (typeof d != "function" && Wh(s, d), s === "onScroll" && Mn("scroll", t)) : d != null && Ca(t, s, d, o));
        }
    }
    function KT(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], d = t[o + 1];
        s === Xs ? $v(e, d) : s === xp ? Lv(e, d) : s === Ks ? wc(e, d) : Ca(e, s, d, i);
      }
    }
    function XT(e, t, a, i) {
      var o, s = Q0(a), d, m = i;
      if (m === Ii && (m = Rc(e)), m === Ii) {
        if (o = $i(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return m === Ii && !o && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !we.call(cg, e) && (cg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function ZT(e, t) {
      return Q0(t).createTextNode(e);
    }
    function JT(e, t, a, i) {
      var o = $i(t, a);
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
          for (var d = 0; d < Tp.length; d++)
            Mn(Tp[d], e);
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
          ms(e, a), s = hs(e, a), Mn("invalid", e);
          break;
        case "textarea":
          kv(e, a), s = md(e, a), Mn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (xc(t, s), qT(t, e, i, s, o), t) {
        case "input":
          Ua(e), he(e, a, !1);
          break;
        case "textarea":
          Ua(e), Mv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          vd(e, a);
          break;
        default:
          typeof s.onClick == "function" && qh(e);
          break;
      }
    }
    function ew(e, t, a, i, o) {
      Yh(t, i);
      var s = null, d, m;
      switch (t) {
        case "input":
          d = S(e, a), m = S(e, i), s = [];
          break;
        case "select":
          d = hs(e, a), m = hs(e, i), s = [];
          break;
        case "textarea":
          d = md(e, a), m = md(e, i), s = [];
          break;
        default:
          d = a, m = i, typeof d.onClick != "function" && typeof m.onClick == "function" && qh(e);
          break;
      }
      xc(t, m);
      var y, b, T = null;
      for (y in d)
        if (!(m.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === Xs) {
            var P = d[y];
            for (b in P)
              P.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else
            y === xp || y === Ks || y === Bh || y === Hl || y === B0 || (Ut.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in m) {
        var z = m[y], q = d != null ? d[y] : void 0;
        if (!(!m.hasOwnProperty(y) || z === q || z == null && q == null))
          if (y === Xs)
            if (z && Object.freeze(z), q) {
              for (b in q)
                q.hasOwnProperty(b) && (!z || !z.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in z)
                z.hasOwnProperty(b) && q[b] !== z[b] && (T || (T = {}), T[b] = z[b]);
            } else
              T || (s || (s = []), s.push(y, T)), T = z;
          else if (y === xp) {
            var X = z ? z[$h] : void 0, ne = q ? q[$h] : void 0;
            X != null && ne !== X && (s = s || []).push(y, X);
          } else
            y === Ks ? (typeof z == "string" || typeof z == "number") && (s = s || []).push(y, "" + z) : y === Bh || y === Hl || (Ut.hasOwnProperty(y) ? (z != null && (typeof z != "function" && Wh(y, z), y === "onScroll" && Mn("scroll", e)), !s && q !== z && (s = [])) : (s = s || []).push(y, z));
      }
      return T && (gs(T, m[Xs]), (s = s || []).push(Xs, T)), s;
    }
    function tw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && K(e, o);
      var s = $i(a, i), d = $i(a, o);
      switch (KT(e, t, s, d), a) {
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
    function nw(e) {
      {
        var t = e.toLowerCase();
        return Oc.hasOwnProperty(t) && Oc[t] || null;
      }
    }
    function rw(e, t, a, i, o, s, d) {
      var m, y;
      switch (m = $i(t, a), Yh(t, a), t) {
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
          for (var b = 0; b < Tp.length; b++)
            Mn(Tp[b], e);
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
          ms(e, a), Mn("invalid", e);
          break;
        case "textarea":
          kv(e, a), Mn("invalid", e);
          break;
      }
      xc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var T = e.attributes, P = 0; P < T.length; P++) {
          var z = T[P].name.toLowerCase();
          switch (z) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(T[P].name);
          }
        }
      }
      var q = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var ne = a[X];
          if (X === Ks)
            typeof ne == "string" ? e.textContent !== ne && (a[Hl] !== !0 && Gh(e.textContent, ne, s, d), q = [Ks, ne]) : typeof ne == "number" && e.textContent !== "" + ne && (a[Hl] !== !0 && Gh(e.textContent, ne, s, d), q = [Ks, "" + ne]);
          else if (Ut.hasOwnProperty(X))
            ne != null && (typeof ne != "function" && Wh(X, ne), X === "onScroll" && Mn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Me = void 0, qe = m && nt ? null : zr(X);
            if (a[Hl] !== !0) {
              if (!(X === Bh || X === Hl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === xp) {
                  var Ie = e.innerHTML, Lt = ne ? ne[$h] : void 0;
                  if (Lt != null) {
                    var xt = W0(e, Lt);
                    xt !== Ie && Op(X, Ie, xt);
                  }
                } else if (X === Xs) {
                  if (y.delete(X), Y0) {
                    var W = ky(ne);
                    Me = e.getAttribute("style"), W !== Me && Op(X, Me, W);
                  }
                } else if (m && !nt)
                  y.delete(X.toLowerCase()), Me = yi(e, X, ne), ne !== Me && Op(X, Me, ne);
                else if (!xn(X, qe, m) && !Jt(X, ne, qe, m)) {
                  var re = !1;
                  if (qe !== null)
                    y.delete(qe.attributeName), Me = Ea(e, X, ne, qe);
                  else {
                    var Q = i;
                    if (Q === Ii && (Q = Rc(t)), Q === Ii)
                      y.delete(X.toLowerCase());
                    else {
                      var pe = nw(X);
                      pe !== null && pe !== X && (re = !0, y.delete(pe)), y.delete(X);
                    }
                    Me = yi(e, X, ne);
                  }
                  var Le = nt;
                  !Le && ne !== Me && !re && Op(X, Me, ne);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Hl] !== !0 && $0(y), t) {
        case "input":
          Ua(e), he(e, a, !0);
          break;
        case "textarea":
          Ua(e), Mv(e);
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
    function aw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function fg(e, t) {
      {
        if (qa)
          return;
        qa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function dg(e, t) {
      {
        if (qa)
          return;
        qa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function pg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function vg(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function iw(e, t, a) {
      switch (t) {
        case "input":
          Je(e, a);
          return;
        case "textarea":
          yd(e, a);
          return;
        case "select":
          Ry(e, a);
          return;
      }
    }
    var Dp = function() {
    }, kp = function() {
    };
    {
      var uw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], G0 = [
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
      ], ow = G0.concat(["button"]), lw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], q0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      kp = function(e, t) {
        var a = bt({}, e || q0), i = {
          tag: t
        };
        return G0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ow.indexOf(t) !== -1 && (a.pTagInButtonScope = null), uw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var sw = function(e, t) {
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
            return lw.indexOf(t) === -1;
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
      }, cw = function(e, t) {
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
      Dp = function(e, t, a) {
        a = a || q0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = sw(e, o) ? null : i, d = s ? null : cw(e, a), m = s || d;
        if (m) {
          var y = m.tag, b = !!s + "|" + e + "|" + y;
          if (!K0[b]) {
            K0[b] = !0;
            var T = e, P = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", P = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var z = "";
              y === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, y, P, z);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, y);
          }
        }
      };
    }
    var Kh = "suppressHydrationWarning", Xh = "$", Zh = "/$", Np = "$?", Mp = "$!", fw = "style", hg = null, mg = null;
    function dw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case oi:
        case so: {
          t = i === oi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : Sd(null, "");
          break;
        }
        default: {
          var s = i === $n ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Sd(d, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), y = kp(null, m);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function pw(e, t, a) {
      {
        var i = e, o = Sd(i.namespace, t), s = kp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function RM(e) {
      return e;
    }
    function vw(e) {
      hg = Oa(), mg = OT();
      var t = null;
      return or(!1), t;
    }
    function hw(e) {
      DT(mg), or(hg), hg = null, mg = null;
    }
    function mw(e, t, a, i, o) {
      var s;
      {
        var d = i;
        if (Dp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = kp(d.ancestorInfo, e);
          Dp(null, m, y);
        }
        s = d.namespace;
      }
      var b = XT(e, t, a, s);
      return zp(o, b), Tg(b, t), b;
    }
    function yw(e, t) {
      e.appendChild(t);
    }
    function gw(e, t, a, i, o) {
      switch (JT(e, t, a, i), t) {
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
    function Sw(e, t, a, i, o, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = kp(d.ancestorInfo, t);
          Dp(null, m, y);
        }
      }
      return ew(e, t, a, i);
    }
    function yg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ew(e, t, a, i) {
      {
        var o = a;
        Dp(null, e, o.ancestorInfo);
      }
      var s = ZT(e, t);
      return zp(i, s), s;
    }
    function Cw() {
      var e = window.event;
      return e === void 0 ? Zi : Vr(e.type);
    }
    var gg = typeof setTimeout == "function" ? setTimeout : void 0, bw = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, X0 = typeof Promise == "function" ? Promise : void 0, Rw = typeof queueMicrotask == "function" ? queueMicrotask : typeof X0 < "u" ? function(e) {
      return X0.resolve(null).then(e).catch(Tw);
    } : gg;
    function Tw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ww(e, t, a, i) {
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
    function _w(e, t, a, i, o, s) {
      tw(e, t, a, i, o), Tg(e, o);
    }
    function Z0(e) {
      wc(e, "");
    }
    function xw(e, t, a) {
      e.nodeValue = a;
    }
    function Ow(e, t) {
      e.appendChild(t);
    }
    function Dw(e, t) {
      var a;
      e.nodeType === $n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && qh(a);
    }
    function kw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Nw(e, t, a) {
      e.nodeType === $n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Mw(e, t) {
      e.removeChild(t);
    }
    function Lw(e, t) {
      e.nodeType === $n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Eg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === $n) {
          var s = o.data;
          if (s === Zh)
            if (i === 0) {
              e.removeChild(o), _t(t);
              return;
            } else
              i--;
          else
            (s === Xh || s === Np || s === Mp) && i++;
        }
        a = o;
      } while (a);
      _t(t);
    }
    function Aw(e, t) {
      e.nodeType === $n ? Eg(e.parentNode, t) : e.nodeType === ra && Eg(e, t), _t(e);
    }
    function zw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Uw(e) {
      e.nodeValue = "";
    }
    function jw(e, t) {
      e = e;
      var a = t[fw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = _c("display", i);
    }
    function Pw(e, t) {
      e.nodeValue = t;
    }
    function Fw(e) {
      e.nodeType === ra ? e.textContent = "" : e.nodeType === oi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Vw(e, t, a) {
      return e.nodeType !== ra || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Hw(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Iw(e) {
      return e.nodeType !== $n ? null : e;
    }
    function J0(e) {
      return e.data === Np;
    }
    function Cg(e) {
      return e.data === Mp;
    }
    function Bw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function $w(e, t) {
      e._reactRetry = t;
    }
    function Jh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ra || t === Bi)
          break;
        if (t === $n) {
          var a = e.data;
          if (a === Xh || a === Mp || a === Np)
            break;
          if (a === Zh)
            return null;
        }
      }
      return e;
    }
    function Lp(e) {
      return Jh(e.nextSibling);
    }
    function Yw(e) {
      return Jh(e.firstChild);
    }
    function Ww(e) {
      return Jh(e.firstChild);
    }
    function Qw(e) {
      return Jh(e.nextSibling);
    }
    function Gw(e, t, a, i, o, s, d) {
      zp(s, e), Tg(e, a);
      var m;
      {
        var y = o;
        m = y.namespace;
      }
      var b = (s.mode & Tt) !== Ze;
      return rw(e, t, a, m, i, b, d);
    }
    function qw(e, t, a, i) {
      return zp(a, e), a.mode & Tt, aw(e, t);
    }
    function Kw(e, t) {
      zp(t, e);
    }
    function Xw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Zh) {
            if (a === 0)
              return Lp(t);
            a--;
          } else
            (i === Xh || i === Mp || i === Np) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function eC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Xh || i === Mp || i === Np) {
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
    function Zw(e) {
      _t(e);
    }
    function Jw(e) {
      _t(e);
    }
    function e_(e) {
      return e !== "head" && e !== "body";
    }
    function t_(e, t, a, i) {
      var o = !0;
      Gh(t.nodeValue, a, i, o);
    }
    function n_(e, t, a, i, o, s) {
      if (t[Kh] !== !0) {
        var d = !0;
        Gh(i.nodeValue, o, s, d);
      }
    }
    function r_(e, t) {
      t.nodeType === ra ? fg(e, t) : t.nodeType === $n || dg(e, t);
    }
    function a_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ra ? fg(a, t) : t.nodeType === $n || dg(a, t));
      }
    }
    function i_(e, t, a, i, o) {
      (o || t[Kh] !== !0) && (i.nodeType === ra ? fg(a, i) : i.nodeType === $n || dg(a, i));
    }
    function u_(e, t, a) {
      pg(e, t);
    }
    function o_(e, t) {
      vg(e, t);
    }
    function l_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && pg(i, t);
      }
    }
    function s_(e, t) {
      {
        var a = e.parentNode;
        a !== null && vg(a, t);
      }
    }
    function c_(e, t, a, i, o, s) {
      (s || t[Kh] !== !0) && pg(a, i);
    }
    function f_(e, t, a, i, o) {
      (o || t[Kh] !== !0) && vg(a, i);
    }
    function d_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function p_(e) {
      wp(e);
    }
    var Lf = Math.random().toString(36).slice(2), Af = "__reactFiber$" + Lf, bg = "__reactProps$" + Lf, Ap = "__reactContainer$" + Lf, Rg = "__reactEvents$" + Lf, v_ = "__reactListeners$" + Lf, h_ = "__reactHandles$" + Lf;
    function m_(e) {
      delete e[Af], delete e[bg], delete e[Rg], delete e[v_], delete e[h_];
    }
    function zp(e, t) {
      t[Af] = e;
    }
    function em(e, t) {
      t[Ap] = e;
    }
    function tC(e) {
      e[Ap] = null;
    }
    function Up(e) {
      return !!e[Ap];
    }
    function Zs(e) {
      var t = e[Af];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ap] || a[Af], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = eC(e); o !== null; ) {
              var s = o[Af];
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
    function Il(e) {
      var t = e[Af] || e[Ap];
      return t && (t.tag === F || t.tag === B || t.tag === I || t.tag === N) ? t : null;
    }
    function zf(e) {
      if (e.tag === F || e.tag === B)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function tm(e) {
      return e[bg] || null;
    }
    function Tg(e, t) {
      e[bg] = t;
    }
    function y_(e) {
      var t = e[Rg];
      return t === void 0 && (t = e[Rg] = /* @__PURE__ */ new Set()), t;
    }
    var nC = {}, rC = p.ReactDebugCurrentFrame;
    function nm(e) {
      if (e) {
        var t = e._owner, a = bi(e.type, e._source, t ? t.type : null);
        rC.setExtraStackFrame(a);
      } else
        rC.setExtraStackFrame(null);
    }
    function ru(e, t, a, i, o) {
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
    var Po = -1;
    function Bl(e) {
      return {
        current: e
      };
    }
    function da(e, t) {
      if (Po < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== rm[Po] && g("Unexpected Fiber popped."), e.current = wg[Po], wg[Po] = null, rm[Po] = null, Po--;
    }
    function pa(e, t, a) {
      Po++, wg[Po] = e.current, rm[Po] = a, e.current = t;
    }
    var _g;
    _g = {};
    var di = {};
    Object.freeze(di);
    var Fo = Bl(di), Gu = Bl(!1), xg = di;
    function Uf(e, t, a) {
      return a && qu(t) ? xg : Fo.current;
    }
    function aC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function jf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return di;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var m = st(e) || "Unknown";
          ru(i, s, "context", m);
        }
        return o && aC(e, t, s), s;
      }
    }
    function am() {
      return Gu.current;
    }
    function qu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function im(e) {
      da(Gu, e), da(Fo, e);
    }
    function Og(e) {
      da(Gu, e), da(Fo, e);
    }
    function iC(e, t, a) {
      {
        if (Fo.current !== di)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        pa(Fo, t, e), pa(Gu, a, e);
      }
    }
    function uC(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = st(e) || "Unknown";
            _g[s] || (_g[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in o))
            throw new Error((st(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = st(e) || "Unknown";
          ru(o, d, "child context", y);
        }
        return bt({}, a, d);
      }
    }
    function um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || di;
        return xg = Fo.current, pa(Fo, a, e), pa(Gu, Gu.current, e), !0;
      }
    }
    function oC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = uC(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = o, da(Gu, e), da(Fo, e), pa(Fo, o, e), pa(Gu, a, e);
        } else
          da(Gu, e), pa(Gu, a, e);
      }
    }
    function g_(e) {
      {
        if (!Fd(e) || e.tag !== x)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case N:
              return t.stateNode.context;
            case x: {
              var a = t.type;
              if (qu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var $l = 0, om = 1, Vo = null, Dg = !1, kg = !1;
    function lC(e) {
      Vo === null ? Vo = [e] : Vo.push(e);
    }
    function S_(e) {
      Dg = !0, lC(e);
    }
    function sC() {
      Dg && Yl();
    }
    function Yl() {
      if (!kg && Vo !== null) {
        kg = !0;
        var e = 0, t = Ya();
        try {
          var a = !0, i = Vo;
          for (Kn(xr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Vo = null, Dg = !1;
        } catch (s) {
          throw Vo !== null && (Vo = Vo.slice(e + 1)), jc(Fc, Yl), s;
        } finally {
          Kn(t), kg = !1;
        }
      }
      return null;
    }
    var Pf = [], Ff = 0, lm = null, sm = 0, Ni = [], Mi = 0, Js = null, Ho = 1, Io = "";
    function E_(e) {
      return tc(), (e.flags & Ud) !== Ye;
    }
    function C_(e) {
      return tc(), sm;
    }
    function b_() {
      var e = Io, t = Ho, a = t & ~R_(t);
      return a.toString(32) + e;
    }
    function ec(e, t) {
      tc(), Pf[Ff++] = sm, Pf[Ff++] = lm, lm = e, sm = t;
    }
    function cC(e, t, a) {
      tc(), Ni[Mi++] = Ho, Ni[Mi++] = Io, Ni[Mi++] = Js, Js = e;
      var i = Ho, o = Io, s = cm(i) - 1, d = i & ~(1 << s), m = a + 1, y = cm(t) + s;
      if (y > 30) {
        var b = s - s % 5, T = (1 << b) - 1, P = (d & T).toString(32), z = d >> b, q = s - b, X = cm(t) + q, ne = m << q, Me = ne | z, qe = P + o;
        Ho = 1 << X | Me, Io = qe;
      } else {
        var Ie = m << s, Lt = Ie | d, xt = o;
        Ho = 1 << y | Lt, Io = xt;
      }
    }
    function Ng(e) {
      tc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ec(e, a), cC(e, a, i);
      }
    }
    function cm(e) {
      return 32 - Yc(e);
    }
    function R_(e) {
      return 1 << cm(e) - 1;
    }
    function Mg(e) {
      for (; e === lm; )
        lm = Pf[--Ff], Pf[Ff] = null, sm = Pf[--Ff], Pf[Ff] = null;
      for (; e === Js; )
        Js = Ni[--Mi], Ni[Mi] = null, Io = Ni[--Mi], Ni[Mi] = null, Ho = Ni[--Mi], Ni[Mi] = null;
    }
    function T_() {
      return tc(), Js !== null ? {
        id: Ho,
        overflow: Io
      } : null;
    }
    function w_(e, t) {
      tc(), Ni[Mi++] = Ho, Ni[Mi++] = Io, Ni[Mi++] = Js, Ho = t.id, Io = t.overflow, Js = e;
    }
    function tc() {
      Ir() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Hr = null, Li = null, au = !1, nc = !1, Wl = null;
    function __() {
      au && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function fC() {
      nc = !0;
    }
    function x_() {
      return nc;
    }
    function O_(e) {
      var t = e.stateNode.containerInfo;
      return Li = Ww(t), Hr = e, au = !0, Wl = null, nc = !1, !0;
    }
    function D_(e, t, a) {
      return Li = Qw(t), Hr = e, au = !0, Wl = null, nc = !1, a !== null && w_(e, a), !0;
    }
    function dC(e, t) {
      switch (e.tag) {
        case N: {
          r_(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var a = (e.mode & Tt) !== Ze;
          i_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case I: {
          var i = e.memoizedState;
          i.dehydrated !== null && a_(i.dehydrated, t);
          break;
        }
      }
    }
    function pC(e, t) {
      dC(e, t);
      var a = MD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Yt) : i.push(a);
    }
    function Lg(e, t) {
      {
        if (nc)
          return;
        switch (e.tag) {
          case N: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var i = t.type;
                t.pendingProps, u_(a, i);
                break;
              case B:
                var o = t.pendingProps;
                o_(a, o);
                break;
            }
            break;
          }
          case F: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case F: {
                var y = t.type, b = t.pendingProps, T = (e.mode & Tt) !== Ze;
                c_(
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
                var P = t.pendingProps, z = (e.mode & Tt) !== Ze;
                f_(
                  s,
                  d,
                  m,
                  P,
                  // TODO: Delete this argument when we remove the legacy root API.
                  z
                );
                break;
              }
            }
            break;
          }
          case I: {
            var q = e.memoizedState, X = q.dehydrated;
            if (X !== null)
              switch (t.tag) {
                case F:
                  var ne = t.type;
                  t.pendingProps, l_(X, ne);
                  break;
                case B:
                  var Me = t.pendingProps;
                  s_(X, Me);
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
      t.flags = t.flags & ~Va | yn, Lg(e, t);
    }
    function hC(e, t) {
      switch (e.tag) {
        case F: {
          var a = e.type;
          e.pendingProps;
          var i = Vw(t, a);
          return i !== null ? (e.stateNode = i, Hr = e, Li = Yw(i), !0) : !1;
        }
        case B: {
          var o = e.pendingProps, s = Hw(t, o);
          return s !== null ? (e.stateNode = s, Hr = e, Li = null, !0) : !1;
        }
        case I: {
          var d = Iw(t);
          if (d !== null) {
            var m = {
              dehydrated: d,
              treeContext: T_(),
              retryLane: ca
            };
            e.memoizedState = m;
            var y = LD(d);
            return y.return = e, e.child = y, Hr = e, Li = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ag(e) {
      return (e.mode & Tt) !== Ze && (e.flags & ot) === Ye;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ug(e) {
      if (au) {
        var t = Li;
        if (!t) {
          Ag(e) && (Lg(Hr, e), zg()), vC(Hr, e), au = !1, Hr = e;
          return;
        }
        var a = t;
        if (!hC(e, t)) {
          Ag(e) && (Lg(Hr, e), zg()), t = Lp(a);
          var i = Hr;
          if (!t || !hC(e, t)) {
            vC(Hr, e), au = !1, Hr = e;
            return;
          }
          pC(i, a);
        }
      }
    }
    function k_(e, t, a) {
      var i = e.stateNode, o = !nc, s = Gw(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function N_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = qw(t, a, e);
      if (i) {
        var o = Hr;
        if (o !== null)
          switch (o.tag) {
            case N: {
              var s = o.stateNode.containerInfo, d = (o.mode & Tt) !== Ze;
              t_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case F: {
              var m = o.type, y = o.memoizedProps, b = o.stateNode, T = (o.mode & Tt) !== Ze;
              n_(
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
    function M_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Kw(a, e);
    }
    function L_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Xw(a);
    }
    function mC(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== N && t.tag !== I; )
        t = t.return;
      Hr = t;
    }
    function fm(e) {
      if (e !== Hr)
        return !1;
      if (!au)
        return mC(e), au = !0, !1;
      if (e.tag !== N && (e.tag !== F || e_(e.type) && !yg(e.type, e.memoizedProps))) {
        var t = Li;
        if (t)
          if (Ag(e))
            yC(e), zg();
          else
            for (; t; )
              pC(e, t), t = Lp(t);
      }
      return mC(e), e.tag === I ? Li = L_(e) : Li = Hr ? Lp(e.stateNode) : null, !0;
    }
    function A_() {
      return au && Li !== null;
    }
    function yC(e) {
      for (var t = Li; t; )
        dC(e, t), t = Lp(t);
    }
    function Vf() {
      Hr = null, Li = null, au = !1, nc = !1;
    }
    function gC() {
      Wl !== null && (dR(Wl), Wl = null);
    }
    function Ir() {
      return au;
    }
    function jg(e) {
      Wl === null ? Wl = [e] : Wl.push(e);
    }
    var z_ = p.ReactCurrentBatchConfig, U_ = null;
    function j_() {
      return z_.transition;
    }
    var iu = {
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
      var P_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & kn && (t = a), a = a.return;
        return t;
      }, rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, jp = [], Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], ac = /* @__PURE__ */ new Set();
      iu.recordUnsafeLifecycleWarnings = function(e, t) {
        ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillMount == "function" && Pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Hp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillUpdate == "function" && Ip.push(e));
      }, iu.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(z) {
          e.add(st(z) || "Component"), ac.add(z.type);
        }), jp = []);
        var t = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(z) {
          t.add(st(z) || "Component"), ac.add(z.type);
        }), Pp = []);
        var a = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(z) {
          a.add(st(z) || "Component"), ac.add(z.type);
        }), Fp = []);
        var i = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(z) {
          i.add(st(z) || "Component"), ac.add(z.type);
        }), Vp = []);
        var o = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(z) {
          o.add(st(z) || "Component"), ac.add(z.type);
        }), Hp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ip.length > 0 && (Ip.forEach(function(z) {
          s.add(st(z) || "Component"), ac.add(z.type);
        }), Ip = []), t.size > 0) {
          var d = rc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var m = rc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var y = rc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var b = rc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = rc(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var P = rc(o);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
        }
      };
      var dm = /* @__PURE__ */ new Map(), SC = /* @__PURE__ */ new Set();
      iu.recordLegacyContextWarning = function(e, t) {
        var a = P_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!SC.has(e.type)) {
          var i = dm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], dm.set(a, i)), i.push(e));
        }
      }, iu.flushLegacyContextWarning = function() {
        dm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(st(s) || "Component"), SC.add(s.type);
            });
            var o = rc(i);
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
      }, iu.discardPendingWarnings = function() {
        jp = [], Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], dm = /* @__PURE__ */ new Map();
      };
    }
    function uu(e, t) {
      if (e && e.defaultProps) {
        var a = bt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Pg = Bl(null), Fg;
    Fg = {};
    var pm = null, Hf = null, Vg = null, vm = !1;
    function hm() {
      pm = null, Hf = null, Vg = null, vm = !1;
    }
    function EC() {
      vm = !0;
    }
    function CC() {
      vm = !1;
    }
    function bC(e, t, a) {
      pa(Pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Hg(e, t) {
      var a = Pg.current;
      da(Pg, t), e._currentValue = a;
    }
    function Ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (xo(i.childLanes, t) ? o !== null && !xo(o.childLanes, t) && (o.childLanes = yt(o.childLanes, t)) : (i.childLanes = yt(i.childLanes, t), o !== null && (o.childLanes = yt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function F_(e, t, a) {
      V_(e, t, a);
    }
    function V_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === x) {
                var m = qn(a), y = Bo(fn, m);
                y.tag = ym;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, P = T.pending;
                  P === null ? y.next = y : (y.next = P.next, P.next = y), T.pending = y;
                }
              }
              i.lanes = yt(i.lanes, a);
              var z = i.alternate;
              z !== null && (z.lanes = yt(z.lanes, a)), Ig(i.return, a, e), s.lanes = yt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === oe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === at) {
          var q = i.return;
          if (q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          q.lanes = yt(q.lanes, a);
          var X = q.alternate;
          X !== null && (X.lanes = yt(X.lanes, a)), Ig(q, a, e), o = i.sibling;
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
    function If(e, t) {
      pm = e, Hf = null, Vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (fa(a.lanes, t) && nv(), a.firstContext = null);
      }
    }
    function sr(e) {
      vm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (pm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, pm.dependencies = {
            lanes: ae,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var ic = null;
    function Bg(e) {
      ic === null ? ic = [e] : ic.push(e);
    }
    function H_() {
      if (ic !== null) {
        for (var e = 0; e < ic.length; e++) {
          var t = ic[e], a = t.interleaved;
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
        ic = null;
      }
    }
    function RC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, mm(e, i);
    }
    function I_(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function B_(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Bg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, mm(e, i);
    }
    function Ka(e, t) {
      return mm(e, t);
    }
    var $_ = mm;
    function mm(e, t) {
      e.lanes = yt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = yt(a.lanes, t)), a === null && (e.flags & (yn | Va)) !== Ye && TR(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = yt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = yt(a.childLanes, t) : (o.flags & (yn | Va)) !== Ye && TR(e), i = o, o = o.return;
      if (i.tag === N) {
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
    function Bo(e, t) {
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
    function Ql(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Sm === o && !Yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Yg = !0), $O()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, $_(e, a);
      } else
        return B_(e, o, t, a);
    }
    function Em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Zd(a)) {
          var s = o.lanes;
          s = ep(s, e.pendingLanes);
          var d = yt(s, a);
          o.lanes = d, xl(e, d);
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
    function Y_(e, t, a, i, o, s) {
      switch (a.tag) {
        case wC: {
          var d = a.payload;
          if (typeof d == "function") {
            EC();
            var m = d.call(s, i, o);
            {
              if (e.mode & kn) {
                Gn(!0);
                try {
                  d.call(s, i, o);
                } finally {
                  Gn(!1);
                }
              }
              CC();
            }
            return m;
          }
          return d;
        }
        case $g:
          e.flags = e.flags & ~ar | ot;
        case TC: {
          var y = a.payload, b;
          if (typeof y == "function") {
            EC(), b = y.call(s, i, o);
            {
              if (e.mode & kn) {
                Gn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  Gn(!1);
                }
              }
              CC();
            }
          } else
            b = y;
          return b == null ? i : bt({}, i, b);
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
          var P = T.updateQueue, z = P.lastBaseUpdate;
          z !== d && (z === null ? P.firstBaseUpdate = b : z.next = b, P.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var q = o.baseState, X = ae, ne = null, Me = null, qe = null, Ie = s;
        do {
          var Lt = Ie.lane, xt = Ie.eventTime;
          if (xo(i, Lt)) {
            if (qe !== null) {
              var re = {
                eventTime: xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nt,
                tag: Ie.tag,
                payload: Ie.payload,
                callback: Ie.callback,
                next: null
              };
              qe = qe.next = re;
            }
            q = Y_(e, o, Ie, q, t, a);
            var Q = Ie.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ie.lane !== Nt) {
              e.flags |= wi;
              var pe = o.effects;
              pe === null ? o.effects = [Ie] : pe.push(Ie);
            }
          } else {
            var W = {
              eventTime: xt,
              lane: Lt,
              tag: Ie.tag,
              payload: Ie.payload,
              callback: Ie.callback,
              next: null
            };
            qe === null ? (Me = qe = W, ne = q) : qe = qe.next = W, X = yt(X, Lt);
          }
          if (Ie = Ie.next, Ie === null) {
            if (m = o.shared.pending, m === null)
              break;
            var Le = m, xe = Le.next;
            Le.next = null, Ie = xe, o.lastBaseUpdate = Le, o.shared.pending = null;
          }
        } while (!0);
        qe === null && (ne = q), o.baseState = ne, o.firstBaseUpdate = Me, o.lastBaseUpdate = qe;
        var it = o.shared.interleaved;
        if (it !== null) {
          var pt = it;
          do
            X = yt(X, pt.lane), pt = pt.next;
          while (pt !== it);
        } else
          s === null && (o.shared.lanes = ae);
        vv(X), e.lanes = X, e.memoizedState = q;
      }
      Sm = null;
    }
    function W_(e, t) {
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
          d !== null && (s.callback = null, W_(d, a));
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
          Gn(!0);
          try {
            s = a(i, o);
          } finally {
            Gn(!1);
          }
        }
        kC(t, s);
      }
      var d = s == null ? o : bt({}, o, s);
      if (e.memoizedState = d, e.lanes === ae) {
        var m = e.updateQueue;
        m.baseState = d;
      }
    }
    var aS = {
      isMounted: wa,
      enqueueSetState: function(e, t, a) {
        var i = Pa(e), o = Na(), s = ts(i), d = Bo(o, s);
        d.payload = t, a != null && (Rm(a, "setState"), d.callback = a);
        var m = Ql(i, d, s);
        m !== null && (br(m, i, s, o), Em(m, i, s)), Fu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Pa(e), o = Na(), s = ts(i), d = Bo(o, s);
        d.tag = wC, d.payload = t, a != null && (Rm(a, "replaceState"), d.callback = a);
        var m = Ql(i, d, s);
        m !== null && (br(m, i, s, o), Em(m, i, s)), Fu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Pa(e), i = Na(), o = ts(a), s = Bo(i, o);
        s.tag = ym, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var d = Ql(a, s, o);
        d !== null && (br(d, a, o, i), Em(d, a, o)), Gd(a, o);
      }
    };
    function MC(e, t, a, i, o, s, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var y = m.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & kn) {
            Gn(!0);
            try {
              y = m.shouldComponentUpdate(i, s, d);
            } finally {
              Gn(!1);
            }
          }
          y === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(o, s) : !0;
    }
    function Q_(e, t, a) {
      var i = e.stateNode;
      {
        var o = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = i.props !== a;
        i.props !== void 0 && d && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var m = i.state;
        m && (typeof m != "object" || Dt(m)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function LC(e, t) {
      t.updater = aS, e.stateNode = t, yl(t, e), t._reactInternalInstance = Gg;
    }
    function AC(e, t, a) {
      var i = !1, o = di, s = di, d = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Se && d._context === void 0
        );
        if (!m && !nS.has(t)) {
          nS.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === se ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = sr(d);
      else {
        o = Uf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? jf(e, o) : di;
      }
      var T = new t(a, s);
      if (e.mode & kn) {
        Gn(!0);
        try {
          T = new t(a, s);
        } finally {
          Gn(!1);
        }
      }
      var P = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      LC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && P === null) {
          var z = Pt(t) || "Component";
          Kg.has(z) || (Kg.add(z), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, T.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var q = null, X = null, ne = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ne = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (ne = "UNSAFE_componentWillUpdate"), q !== null || X !== null || ne !== null) {
            var Me = Pt(t) || "Component", qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(Me) || (Zg.add(Me), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Me, qe, q !== null ? `
  ` + q : "", X !== null ? `
  ` + X : "", ne !== null ? `
  ` + ne : ""));
          }
        }
      }
      return i && aC(e, o, s), T;
    }
    function G_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", st(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function zC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = st(e) || "Component";
          qg.has(s) || (qg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Q_(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = DC, Wg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = sr(s);
      else {
        var d = Uf(e, t, !0);
        o.context = jf(e, d);
      }
      {
        if (o.state === a) {
          var m = Pt(t) || "Component";
          eS.has(m) || (eS.add(m), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & kn && iu.recordLegacyContextWarning(e, o), iu.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (rS(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (G_(e, o), Cm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var b = mt;
        b |= ia, (e.mode & Ba) !== Ze && (b |= ua), e.flags |= b;
      }
    }
    function q_(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var d = o.context, m = t.contextType, y = di;
      if (typeof m == "object" && m !== null)
        y = sr(m);
      else {
        var b = Uf(e, t, !0);
        y = jf(e, b);
      }
      var T = t.getDerivedStateFromProps, P = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !P && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || d !== y) && zC(e, o, a, y), xC();
      var z = e.memoizedState, q = o.state = z;
      if (Cm(e, a, o, i), q = e.memoizedState, s === a && z === q && !am() && !bm()) {
        if (typeof o.componentDidMount == "function") {
          var X = mt;
          X |= ia, (e.mode & Ba) !== Ze && (X |= ua), e.flags |= X;
        }
        return !1;
      }
      typeof T == "function" && (rS(e, t, T, a), q = e.memoizedState);
      var ne = bm() || MC(e, t, s, a, z, q, y);
      if (ne) {
        if (!P && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Me = mt;
          Me |= ia, (e.mode & Ba) !== Ze && (Me |= ua), e.flags |= Me;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var qe = mt;
          qe |= ia, (e.mode & Ba) !== Ze && (qe |= ua), e.flags |= qe;
        }
        e.memoizedProps = a, e.memoizedState = q;
      }
      return o.props = a, o.state = q, o.context = y, ne;
    }
    function K_(e, t, a, i, o) {
      var s = t.stateNode;
      _C(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : uu(t.type, d);
      s.props = m;
      var y = t.pendingProps, b = s.context, T = a.contextType, P = di;
      if (typeof T == "object" && T !== null)
        P = sr(T);
      else {
        var z = Uf(t, a, !0);
        P = jf(t, z);
      }
      var q = a.getDerivedStateFromProps, X = typeof q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || b !== P) && zC(t, s, i, P), xC();
      var ne = t.memoizedState, Me = s.state = ne;
      if (Cm(t, i, s, o), Me = t.memoizedState, d === y && ne === Me && !am() && !bm() && !Pe)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= mt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Fa), !1;
      typeof q == "function" && (rS(t, a, q, i), Me = t.memoizedState);
      var qe = bm() || MC(t, a, m, i, ne, Me, P) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return qe ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Me, P), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Me, P)), typeof s.componentDidUpdate == "function" && (t.flags |= mt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fa)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= mt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Fa), t.memoizedProps = i, t.memoizedState = Me), s.props = i, s.state = Me, s.context = P, qe;
    }
    var uS, oS, lS, sS, cS, UC = function(e, t) {
    };
    uS = !1, oS = !1, lS = {}, sS = {}, cS = {}, UC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = st(t) || "Component";
        sS[a] || (sS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Bp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & kn || Qe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = st(e) || "Component";
          lS[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), lS[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var m = s;
            if (m.tag !== x)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = m.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = d;
          tr(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(P) {
            var z = y.refs;
            z === DC && (z = y.refs = {}), P === null ? delete z[b] : z[b] = P;
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
        var t = st(e) || "Component";
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
        for (var Q = /* @__PURE__ */ new Map(), pe = re; pe !== null; )
          pe.key !== null ? Q.set(pe.key, pe) : Q.set(pe.index, pe), pe = pe.sibling;
        return Q;
      }
      function o(W, re) {
        var Q = pc(W, re);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function s(W, re, Q) {
        if (W.index = Q, !e)
          return W.flags |= Ud, re;
        var pe = W.alternate;
        if (pe !== null) {
          var Le = pe.index;
          return Le < re ? (W.flags |= yn, re) : Le;
        } else
          return W.flags |= yn, re;
      }
      function d(W) {
        return e && W.alternate === null && (W.flags |= yn), W;
      }
      function m(W, re, Q, pe) {
        if (re === null || re.tag !== B) {
          var Le = jE(Q, W.mode, pe);
          return Le.return = W, Le;
        } else {
          var xe = o(re, Q);
          return xe.return = W, xe;
        }
      }
      function y(W, re, Q, pe) {
        var Le = Q.type;
        if (Le === ba)
          return T(W, re, Q.props.children, pe, Q.key);
        if (re !== null && (re.elementType === Le || // Keep this check inline so it only runs on the false path:
        OR(re, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Le == "object" && Le !== null && Le.$$typeof === Ge && jC(Le) === re.type)) {
          var xe = o(re, Q.props);
          return xe.ref = Bp(W, re, Q), xe.return = W, xe._debugSource = Q._source, xe._debugOwner = Q._owner, xe;
        }
        var it = UE(Q, W.mode, pe);
        return it.ref = Bp(W, re, Q), it.return = W, it;
      }
      function b(W, re, Q, pe) {
        if (re === null || re.tag !== A || re.stateNode.containerInfo !== Q.containerInfo || re.stateNode.implementation !== Q.implementation) {
          var Le = PE(Q, W.mode, pe);
          return Le.return = W, Le;
        } else {
          var xe = o(re, Q.children || []);
          return xe.return = W, xe;
        }
      }
      function T(W, re, Q, pe, Le) {
        if (re === null || re.tag !== Y) {
          var xe = rs(Q, W.mode, pe, Le);
          return xe.return = W, xe;
        } else {
          var it = o(re, Q);
          return it.return = W, it;
        }
      }
      function P(W, re, Q) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var pe = jE("" + re, W.mode, Q);
          return pe.return = W, pe;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case gi: {
              var Le = UE(re, W.mode, Q);
              return Le.ref = Bp(W, null, re), Le.return = W, Le;
            }
            case Ur: {
              var xe = PE(re, W.mode, Q);
              return xe.return = W, xe;
            }
            case Ge: {
              var it = re._payload, pt = re._init;
              return P(W, pt(it), Q);
            }
          }
          if (Dt(re) || ri(re)) {
            var nn = rs(re, W.mode, Q, null);
            return nn.return = W, nn;
          }
          Tm(W, re);
        }
        return typeof re == "function" && wm(W), null;
      }
      function z(W, re, Q, pe) {
        var Le = re !== null ? re.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return Le !== null ? null : m(W, re, "" + Q, pe);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case gi:
              return Q.key === Le ? y(W, re, Q, pe) : null;
            case Ur:
              return Q.key === Le ? b(W, re, Q, pe) : null;
            case Ge: {
              var xe = Q._payload, it = Q._init;
              return z(W, re, it(xe), pe);
            }
          }
          if (Dt(Q) || ri(Q))
            return Le !== null ? null : T(W, re, Q, pe, null);
          Tm(W, Q);
        }
        return typeof Q == "function" && wm(W), null;
      }
      function q(W, re, Q, pe, Le) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var xe = W.get(Q) || null;
          return m(re, xe, "" + pe, Le);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case gi: {
              var it = W.get(pe.key === null ? Q : pe.key) || null;
              return y(re, it, pe, Le);
            }
            case Ur: {
              var pt = W.get(pe.key === null ? Q : pe.key) || null;
              return b(re, pt, pe, Le);
            }
            case Ge:
              var nn = pe._payload, It = pe._init;
              return q(W, re, Q, It(nn), Le);
          }
          if (Dt(pe) || ri(pe)) {
            var Jn = W.get(Q) || null;
            return T(re, Jn, pe, Le, null);
          }
          Tm(re, pe);
        }
        return typeof pe == "function" && wm(re), null;
      }
      function X(W, re, Q) {
        {
          if (typeof W != "object" || W === null)
            return re;
          switch (W.$$typeof) {
            case gi:
            case Ur:
              UC(W, Q);
              var pe = W.key;
              if (typeof pe != "string")
                break;
              if (re === null) {
                re = /* @__PURE__ */ new Set(), re.add(pe);
                break;
              }
              if (!re.has(pe)) {
                re.add(pe);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case Ge:
              var Le = W._payload, xe = W._init;
              X(xe(Le), re, Q);
              break;
          }
        }
        return re;
      }
      function ne(W, re, Q, pe) {
        for (var Le = null, xe = 0; xe < Q.length; xe++) {
          var it = Q[xe];
          Le = X(it, Le, W);
        }
        for (var pt = null, nn = null, It = re, Jn = 0, Bt = 0, Qn = null; It !== null && Bt < Q.length; Bt++) {
          It.index > Bt ? (Qn = It, It = null) : Qn = It.sibling;
          var ha = z(W, It, Q[Bt], pe);
          if (ha === null) {
            It === null && (It = Qn);
            break;
          }
          e && It && ha.alternate === null && t(W, It), Jn = s(ha, Jn, Bt), nn === null ? pt = ha : nn.sibling = ha, nn = ha, It = Qn;
        }
        if (Bt === Q.length) {
          if (a(W, It), Ir()) {
            var qr = Bt;
            ec(W, qr);
          }
          return pt;
        }
        if (It === null) {
          for (; Bt < Q.length; Bt++) {
            var vi = P(W, Q[Bt], pe);
            vi !== null && (Jn = s(vi, Jn, Bt), nn === null ? pt = vi : nn.sibling = vi, nn = vi);
          }
          if (Ir()) {
            var Ma = Bt;
            ec(W, Ma);
          }
          return pt;
        }
        for (var La = i(W, It); Bt < Q.length; Bt++) {
          var ma = q(La, W, Bt, Q[Bt], pe);
          ma !== null && (e && ma.alternate !== null && La.delete(ma.key === null ? Bt : ma.key), Jn = s(ma, Jn, Bt), nn === null ? pt = ma : nn.sibling = ma, nn = ma);
        }
        if (e && La.forEach(function(id) {
          return t(W, id);
        }), Ir()) {
          var qo = Bt;
          ec(W, qo);
        }
        return pt;
      }
      function Me(W, re, Q, pe) {
        var Le = ri(Q);
        if (typeof Le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (oS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), oS = !0), Q.entries === Le && (uS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var xe = Le.call(Q);
          if (xe)
            for (var it = null, pt = xe.next(); !pt.done; pt = xe.next()) {
              var nn = pt.value;
              it = X(nn, it, W);
            }
        }
        var It = Le.call(Q);
        if (It == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, Bt = null, Qn = re, ha = 0, qr = 0, vi = null, Ma = It.next(); Qn !== null && !Ma.done; qr++, Ma = It.next()) {
          Qn.index > qr ? (vi = Qn, Qn = null) : vi = Qn.sibling;
          var La = z(W, Qn, Ma.value, pe);
          if (La === null) {
            Qn === null && (Qn = vi);
            break;
          }
          e && Qn && La.alternate === null && t(W, Qn), ha = s(La, ha, qr), Bt === null ? Jn = La : Bt.sibling = La, Bt = La, Qn = vi;
        }
        if (Ma.done) {
          if (a(W, Qn), Ir()) {
            var ma = qr;
            ec(W, ma);
          }
          return Jn;
        }
        if (Qn === null) {
          for (; !Ma.done; qr++, Ma = It.next()) {
            var qo = P(W, Ma.value, pe);
            qo !== null && (ha = s(qo, ha, qr), Bt === null ? Jn = qo : Bt.sibling = qo, Bt = qo);
          }
          if (Ir()) {
            var id = qr;
            ec(W, id);
          }
          return Jn;
        }
        for (var Sv = i(W, Qn); !Ma.done; qr++, Ma = It.next()) {
          var ro = q(Sv, W, qr, Ma.value, pe);
          ro !== null && (e && ro.alternate !== null && Sv.delete(ro.key === null ? qr : ro.key), ha = s(ro, ha, qr), Bt === null ? Jn = ro : Bt.sibling = ro, Bt = ro);
        }
        if (e && Sv.forEach(function(ck) {
          return t(W, ck);
        }), Ir()) {
          var sk = qr;
          ec(W, sk);
        }
        return Jn;
      }
      function qe(W, re, Q, pe) {
        if (re !== null && re.tag === B) {
          a(W, re.sibling);
          var Le = o(re, Q);
          return Le.return = W, Le;
        }
        a(W, re);
        var xe = jE(Q, W.mode, pe);
        return xe.return = W, xe;
      }
      function Ie(W, re, Q, pe) {
        for (var Le = Q.key, xe = re; xe !== null; ) {
          if (xe.key === Le) {
            var it = Q.type;
            if (it === ba) {
              if (xe.tag === Y) {
                a(W, xe.sibling);
                var pt = o(xe, Q.props.children);
                return pt.return = W, pt._debugSource = Q._source, pt._debugOwner = Q._owner, pt;
              }
            } else if (xe.elementType === it || // Keep this check inline so it only runs on the false path:
            OR(xe, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof it == "object" && it !== null && it.$$typeof === Ge && jC(it) === xe.type) {
              a(W, xe.sibling);
              var nn = o(xe, Q.props);
              return nn.ref = Bp(W, xe, Q), nn.return = W, nn._debugSource = Q._source, nn._debugOwner = Q._owner, nn;
            }
            a(W, xe);
            break;
          } else
            t(W, xe);
          xe = xe.sibling;
        }
        if (Q.type === ba) {
          var It = rs(Q.props.children, W.mode, pe, Q.key);
          return It.return = W, It;
        } else {
          var Jn = UE(Q, W.mode, pe);
          return Jn.ref = Bp(W, re, Q), Jn.return = W, Jn;
        }
      }
      function Lt(W, re, Q, pe) {
        for (var Le = Q.key, xe = re; xe !== null; ) {
          if (xe.key === Le)
            if (xe.tag === A && xe.stateNode.containerInfo === Q.containerInfo && xe.stateNode.implementation === Q.implementation) {
              a(W, xe.sibling);
              var it = o(xe, Q.children || []);
              return it.return = W, it;
            } else {
              a(W, xe);
              break;
            }
          else
            t(W, xe);
          xe = xe.sibling;
        }
        var pt = PE(Q, W.mode, pe);
        return pt.return = W, pt;
      }
      function xt(W, re, Q, pe) {
        var Le = typeof Q == "object" && Q !== null && Q.type === ba && Q.key === null;
        if (Le && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case gi:
              return d(Ie(W, re, Q, pe));
            case Ur:
              return d(Lt(W, re, Q, pe));
            case Ge:
              var xe = Q._payload, it = Q._init;
              return xt(W, re, it(xe), pe);
          }
          if (Dt(Q))
            return ne(W, re, Q, pe);
          if (ri(Q))
            return Me(W, re, Q, pe);
          Tm(W, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? d(qe(W, re, "" + Q, pe)) : (typeof Q == "function" && wm(W), a(W, re));
      }
      return xt;
    }
    var Bf = PC(!0), FC = PC(!1);
    function X_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = pc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = pc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Z_(e, t) {
      for (var a = e.child; a !== null; )
        xD(a, t), a = a.sibling;
    }
    var $p = {}, Gl = Bl($p), Yp = Bl($p), _m = Bl($p);
    function xm(e) {
      if (e === $p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function VC() {
      var e = xm(_m.current);
      return e;
    }
    function fS(e, t) {
      pa(_m, t, e), pa(Yp, e, e), pa(Gl, $p, e);
      var a = dw(t);
      da(Gl, e), pa(Gl, a, e);
    }
    function $f(e) {
      da(Gl, e), da(Yp, e), da(_m, e);
    }
    function dS() {
      var e = xm(Gl.current);
      return e;
    }
    function HC(e) {
      xm(_m.current);
      var t = xm(Gl.current), a = pw(t, e.type);
      t !== a && (pa(Yp, e, e), pa(Gl, a, e));
    }
    function pS(e) {
      Yp.current === e && (da(Gl, e), da(Yp, e));
    }
    var J_ = 0, IC = 1, BC = 1, Wp = 2, ou = Bl(J_);
    function vS(e, t) {
      return (e & t) !== 0;
    }
    function Yf(e) {
      return e & IC;
    }
    function hS(e, t) {
      return e & IC | t;
    }
    function ex(e, t) {
      return e | t;
    }
    function ql(e, t) {
      pa(ou, t, e);
    }
    function Wf(e) {
      da(ou, e);
    }
    function tx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === I) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || J0(i) || Cg(i))
              return t;
          }
        } else if (t.tag === We && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & ot) !== Ye;
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
    var Xa = (
      /*   */
      0
    ), hr = (
      /* */
      1
    ), Ku = (
      /*  */
      2
    ), mr = (
      /*    */
      4
    ), Br = (
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
    function nx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ke = p.ReactCurrentDispatcher, Qp = p.ReactCurrentBatchConfig, gS, Qf;
    gS = /* @__PURE__ */ new Set();
    var uc = ae, tn = null, yr = null, gr = null, Dm = !1, Gp = !1, qp = 0, rx = 0, ax = 25, ie = null, Ai = null, Kl = -1, SS = !1;
    function Xt() {
      {
        var e = ie;
        Ai === null ? Ai = [e] : Ai.push(e);
      }
    }
    function be() {
      {
        var e = ie;
        Ai !== null && (Kl++, Ai[Kl] !== e && ix(e));
      }
    }
    function Gf(e) {
      e != null && !Dt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function ix(e) {
      {
        var t = st(tn);
        if (!gS.has(t) && (gS.add(t), Ai !== null)) {
          for (var a = "", i = 30, o = 0; o <= Kl; o++) {
            for (var s = Ai[o], d = o === Kl ? e : s, m = o + 1 + ". " + s; m.length < i; )
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
    function va() {
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
        if (!Ue(e[a], t[a]))
          return !1;
      return !0;
    }
    function qf(e, t, a, i, o, s) {
      uc = s, tn = t, Ai = e !== null ? e._debugHookTypes : null, Kl = -1, SS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? ke.current = fb : Ai !== null ? ke.current = cb : ke.current = sb;
      var d = a(i, o);
      if (Gp) {
        var m = 0;
        do {
          if (Gp = !1, qp = 0, m >= ax)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, SS = !1, yr = null, gr = null, t.updateQueue = null, Kl = -1, ke.current = db, d = a(i, o);
        } while (Gp);
      }
      ke.current = Im, t._debugHookTypes = Ai;
      var y = yr !== null && yr.next !== null;
      if (uc = ae, tn = null, yr = null, gr = null, ie = null, Ai = null, Kl = -1, e !== null && (e.flags & dr) !== (t.flags & dr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Tt) !== Ze && g("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Kf() {
      var e = qp !== 0;
      return qp = 0, e;
    }
    function $C(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ba) !== Ze ? t.flags &= ~(yo | ua | Tn | mt) : t.flags &= ~(Tn | mt), e.lanes = _l(e.lanes, a);
    }
    function YC() {
      if (ke.current = Im, Dm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      uc = ae, tn = null, yr = null, gr = null, Ai = null, Kl = -1, ie = null, ab = !1, Gp = !1, qp = 0;
    }
    function Xu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gr === null ? tn.memoizedState = gr = e : gr = gr.next = e, gr;
    }
    function zi() {
      var e;
      if (yr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = yr.next;
      var a;
      if (gr === null ? a = tn.memoizedState : a = gr.next, a !== null)
        gr = a, a = gr.next, yr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        yr = e;
        var i = {
          memoizedState: yr.memoizedState,
          baseState: yr.baseState,
          baseQueue: yr.baseQueue,
          queue: yr.queue,
          next: null
        };
        gr === null ? tn.memoizedState = gr = i : gr = gr.next = i;
      }
      return gr;
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
      var i = Xu(), o;
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
      var d = s.dispatch = sx.bind(null, tn, s);
      return [i.memoizedState, d];
    }
    function RS(e, t, a) {
      var i = zi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = yr, d = s.baseQueue, m = o.pending;
      if (m !== null) {
        if (d !== null) {
          var y = d.next, b = m.next;
          d.next = b, m.next = y;
        }
        s.baseQueue !== d && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = m, o.pending = null;
      }
      if (d !== null) {
        var T = d.next, P = s.baseState, z = null, q = null, X = null, ne = T;
        do {
          var Me = ne.lane;
          if (xo(uc, Me)) {
            if (X !== null) {
              var Ie = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nt,
                action: ne.action,
                hasEagerState: ne.hasEagerState,
                eagerState: ne.eagerState,
                next: null
              };
              X = X.next = Ie;
            }
            if (ne.hasEagerState)
              P = ne.eagerState;
            else {
              var Lt = ne.action;
              P = e(P, Lt);
            }
          } else {
            var qe = {
              lane: Me,
              action: ne.action,
              hasEagerState: ne.hasEagerState,
              eagerState: ne.eagerState,
              next: null
            };
            X === null ? (q = X = qe, z = P) : X = X.next = qe, tn.lanes = yt(tn.lanes, Me), vv(Me);
          }
          ne = ne.next;
        } while (ne !== null && ne !== T);
        X === null ? z = P : X.next = q, Ue(P, i.memoizedState) || nv(), i.memoizedState = P, i.baseState = z, i.baseQueue = X, o.lastRenderedState = P;
      }
      var xt = o.interleaved;
      if (xt !== null) {
        var W = xt;
        do {
          var re = W.lane;
          tn.lanes = yt(tn.lanes, re), vv(re), W = W.next;
        } while (W !== xt);
      } else
        d === null && (o.lanes = ae);
      var Q = o.dispatch;
      return [i.memoizedState, Q];
    }
    function TS(e, t, a) {
      var i = zi(), o = i.queue;
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
        Ue(m, i.memoizedState) || nv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
      }
      return [m, s];
    }
    function TM(e, t, a) {
    }
    function wM(e, t, a) {
    }
    function wS(e, t, a) {
      var i = tn, o = Xu(), s, d = Ir();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Qf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      } else {
        if (s = t(), !Qf) {
          var m = t();
          Ue(s, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
        }
        var y = uy();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(y, uc) || QC(i, t, s);
      }
      o.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return o.queue = b, Am(qC.bind(null, i, b, e), [e]), i.flags |= Tn, Kp(hr | Br, GC.bind(null, i, b, s, t), void 0, null), s;
    }
    function km(e, t, a) {
      var i = tn, o = zi(), s = t();
      if (!Qf) {
        var d = t();
        Ue(s, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      }
      var m = o.memoizedState, y = !Ue(m, s);
      y && (o.memoizedState = s, nv());
      var b = o.queue;
      if (Zp(qC.bind(null, i, b, e), [e]), b.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      gr !== null && gr.memoizedState.tag & hr) {
        i.flags |= Tn, Kp(hr | Br, GC.bind(null, i, b, s, t), void 0, null);
        var T = uy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(T, uc) || QC(i, t, s);
      }
      return s;
    }
    function QC(e, t, a) {
      e.flags |= Os;
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
        return !Ue(a, i);
      } catch {
        return !0;
      }
    }
    function XC(e) {
      var t = Ka(e, rt);
      t !== null && br(t, e, rt, fn);
    }
    function Nm(e) {
      var t = Xu();
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
      var i = a.dispatch = cx.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function _S(e) {
      return RS(CS);
    }
    function xS(e) {
      return TS(CS);
    }
    function Kp(e, t, a, i) {
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
      var t = Xu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Mm(e) {
      var t = zi();
      return t.memoizedState;
    }
    function Xp(e, t, a, i) {
      var o = Xu(), s = i === void 0 ? null : i;
      tn.flags |= e, o.memoizedState = Kp(hr | t, a, void 0, s);
    }
    function Lm(e, t, a, i) {
      var o = zi(), s = i === void 0 ? null : i, d = void 0;
      if (yr !== null) {
        var m = yr.memoizedState;
        if (d = m.destroy, s !== null) {
          var y = m.deps;
          if (ES(s, y)) {
            o.memoizedState = Kp(t, a, d, s);
            return;
          }
        }
      }
      tn.flags |= e, o.memoizedState = Kp(hr | t, a, d, s);
    }
    function Am(e, t) {
      return (tn.mode & Ba) !== Ze ? Xp(yo | Tn | Lu, Br, e, t) : Xp(Tn | Lu, Br, e, t);
    }
    function Zp(e, t) {
      return Lm(Tn, Br, e, t);
    }
    function DS(e, t) {
      return Xp(mt, Ku, e, t);
    }
    function zm(e, t) {
      return Lm(mt, Ku, e, t);
    }
    function kS(e, t) {
      var a = mt;
      return a |= ia, (tn.mode & Ba) !== Ze && (a |= ua), Xp(a, mr, e, t);
    }
    function Um(e, t) {
      return Lm(mt, mr, e, t);
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
      var i = a != null ? a.concat([e]) : null, o = mt;
      return o |= ia, (tn.mode & Ba) !== Ze && (o |= ua), Xp(o, mr, ZC.bind(null, t, e), i);
    }
    function jm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Lm(mt, mr, ZC.bind(null, t, e), i);
    }
    function ux(e, t) {
    }
    var Pm = ux;
    function MS(e, t) {
      var a = Xu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Fm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (ES(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function LS(e, t) {
      var a = Xu(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Vm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (ES(i, s))
          return o[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function AS(e) {
      var t = Xu();
      return t.memoizedState = e, e;
    }
    function JC(e) {
      var t = zi(), a = yr, i = a.memoizedState;
      return tb(t, i, e);
    }
    function eb(e) {
      var t = zi();
      if (yr === null)
        return t.memoizedState = e, e;
      var a = yr.memoizedState;
      return tb(t, a, e);
    }
    function tb(e, t, a) {
      var i = !Vy(uc);
      if (i) {
        if (!Ue(a, t)) {
          var o = Jd();
          tn.lanes = yt(tn.lanes, o), vv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, nv()), e.memoizedState = a, a;
    }
    function ox(e, t, a) {
      var i = Ya();
      Kn(Or(i, vr)), e(!0);
      var o = Qp.transition;
      Qp.transition = {};
      var s = Qp.transition;
      Qp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Kn(i), Qp.transition = o, o === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function zS() {
      var e = Nm(!1), t = e[0], a = e[1], i = ox.bind(null, a), o = Xu();
      return o.memoizedState = i, [t, i];
    }
    function nb() {
      var e = _S(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    function rb() {
      var e = xS(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    var ab = !1;
    function lx() {
      return ab;
    }
    function US() {
      var e = Xu(), t = uy(), a = t.identifierPrefix, i;
      if (Ir()) {
        var o = b_();
        i = ":" + a + "R" + o;
        var s = qp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = rx++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Hm() {
      var e = zi(), t = e.memoizedState;
      return t;
    }
    function sx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ts(e), o = {
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
          var d = Na();
          br(s, e, i, d), ob(s, t, i);
        }
      }
      lb(e, i);
    }
    function cx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ts(e), o = {
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
            m = ke.current, ke.current = lu;
            try {
              var y = t.lastRenderedState, b = d(y, a);
              if (o.hasEagerState = !0, o.eagerState = b, Ue(b, y)) {
                I_(e, t, o, i);
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
          var P = Na();
          br(T, e, i, P), ob(T, t, i);
        }
      }
      lb(e, i);
    }
    function ib(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function ub(e, t) {
      Gp = Dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ob(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = ep(i, e.pendingLanes);
        var o = yt(i, a);
        t.lanes = o, xl(e, o);
      }
    }
    function lb(e, t, a) {
      Fu(e, t);
    }
    var Im = {
      readContext: sr,
      useCallback: va,
      useContext: va,
      useEffect: va,
      useImperativeHandle: va,
      useInsertionEffect: va,
      useLayoutEffect: va,
      useMemo: va,
      useReducer: va,
      useRef: va,
      useState: va,
      useDebugValue: va,
      useDeferredValue: va,
      useTransition: va,
      useMutableSource: va,
      useSyncExternalStore: va,
      useId: va,
      unstable_isNewReconciler: ve
    }, sb = null, cb = null, fb = null, db = null, Zu = null, lu = null, Bm = null;
    {
      var jS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ct = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      sb = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Xt(), Gf(t), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Xt(), sr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Xt(), Gf(t), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Xt(), Gf(a), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Xt(), Gf(t), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Xt(), Gf(t), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Xt(), Gf(t);
          var a = ke.current;
          ke.current = Zu;
          try {
            return LS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Xt();
          var i = ke.current;
          ke.current = Zu;
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
          ke.current = Zu;
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
        unstable_isNewReconciler: ve
      }, cb = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), sr(e);
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
          ke.current = Zu;
          try {
            return LS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = ke.current;
          ke.current = Zu;
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
          ke.current = Zu;
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
        unstable_isNewReconciler: ve
      }, fb = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), sr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Zp(e, t);
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
          ke.current = lu;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = ke.current;
          ke.current = lu;
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
          ke.current = lu;
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
        unstable_isNewReconciler: ve
      }, db = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), sr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Zp(e, t);
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
        unstable_isNewReconciler: ve
      }, Zu = {
        readContext: function(e) {
          return jS(), sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ct(), Xt(), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ct(), Xt(), sr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ct(), Xt(), Am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ct(), Xt(), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ct(), Xt(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ct(), Xt(), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ct(), Xt();
          var a = ke.current;
          ke.current = Zu;
          try {
            return LS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ct(), Xt();
          var i = ke.current;
          ke.current = Zu;
          try {
            return bS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ct(), Xt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", ct(), Xt();
          var t = ke.current;
          ke.current = Zu;
          try {
            return Nm(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ct(), Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ct(), Xt(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", ct(), Xt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ct(), Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ct(), Xt(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", ct(), Xt(), US();
        },
        unstable_isNewReconciler: ve
      }, lu = {
        readContext: function(e) {
          return jS(), sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ct(), be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ct(), be(), sr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ct(), be(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ct(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ct(), be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ct(), be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ct(), be();
          var a = ke.current;
          ke.current = lu;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ct(), be();
          var i = ke.current;
          ke.current = lu;
          try {
            return RS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ct(), be(), Mm();
        },
        useState: function(e) {
          ie = "useState", ct(), be();
          var t = ke.current;
          ke.current = lu;
          try {
            return _S(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ct(), be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ct(), be(), JC(e);
        },
        useTransition: function() {
          return ie = "useTransition", ct(), be(), nb();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ct(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ct(), be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", ct(), be(), Hm();
        },
        unstable_isNewReconciler: ve
      }, Bm = {
        readContext: function(e) {
          return jS(), sr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ct(), be(), Fm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ct(), be(), sr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ct(), be(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ct(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ct(), be(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ct(), be(), Um(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ct(), be();
          var a = ke.current;
          ke.current = lu;
          try {
            return Vm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ct(), be();
          var i = ke.current;
          ke.current = lu;
          try {
            return TS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ct(), be(), Mm();
        },
        useState: function(e) {
          ie = "useState", ct(), be();
          var t = ke.current;
          ke.current = lu;
          try {
            return xS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ct(), be(), Pm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ct(), be(), eb(e);
        },
        useTransition: function() {
          return ie = "useTransition", ct(), be(), rb();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ct(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ct(), be(), km(e, t);
        },
        useId: function() {
          return ie = "useId", ct(), be(), Hm();
        },
        unstable_isNewReconciler: ve
      };
    }
    var Xl = h.unstable_now, pb = 0, $m = -1, Jp = -1, Ym = -1, PS = !1, Wm = !1;
    function vb() {
      return PS;
    }
    function fx() {
      Wm = !0;
    }
    function dx() {
      PS = !1, Wm = !1;
    }
    function px() {
      PS = Wm, Wm = !1;
    }
    function hb() {
      return pb;
    }
    function mb() {
      pb = Xl();
    }
    function FS(e) {
      Jp = Xl(), e.actualStartTime < 0 && (e.actualStartTime = Xl());
    }
    function yb(e) {
      Jp = -1;
    }
    function Qm(e, t) {
      if (Jp >= 0) {
        var a = Xl() - Jp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Jp = -1;
      }
    }
    function Ju(e) {
      if ($m >= 0) {
        var t = Xl() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
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
        var t = Xl() - Ym;
        Ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
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
    function eo() {
      $m = Xl();
    }
    function HS() {
      Ym = Xl();
    }
    function IS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: al(t),
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
    function vx(e, t) {
      return !0;
    }
    function $S(e, t) {
      try {
        var a = vx(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === x)
            return;
          console.error(i);
        }
        var m = o ? st(o) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === N)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = st(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var P = y + `
` + d + `

` + ("" + b);
        console.error(P);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var hx = typeof WeakMap == "function" ? WeakMap : Map;
    function gb(e, t, a) {
      var i = Bo(fn, a);
      i.tag = $g, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        oD(o), $S(e, t);
      }, i;
    }
    function YS(e, t, a) {
      var i = Bo(fn, a);
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
        DR(e), $S(e, t), typeof o != "function" && iD(this);
        var y = t.value, b = t.stack;
        this.componentDidCatch(y, {
          componentStack: b !== null ? b : ""
        }), typeof o != "function" && (fa(e.lanes, rt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", st(e) || "Unknown"));
      }), i;
    }
    function Sb(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new hx(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = lD.bind(null, e, t, a);
        pr && hv(e, a), t.then(s, s);
      }
    }
    function mx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function yx(e, t) {
      var a = e.tag;
      if ((e.mode & Tt) === Ze && (a === M || a === te || a === Ee)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Eb(e) {
      var t = e;
      do {
        if (t.tag === I && tx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Cb(e, t, a, i, o) {
      if ((e.mode & Tt) === Ze) {
        if (e === t)
          e.flags |= ar;
        else {
          if (e.flags |= ot, a.flags |= Ds, a.flags &= ~(Ac | Ra), a.tag === x) {
            var s = a.alternate;
            if (s === null)
              a.tag = ut;
            else {
              var d = Bo(fn, rt);
              d.tag = ym, Ql(a, d, rt);
            }
          }
          a.lanes = yt(a.lanes, rt);
        }
        return e;
      }
      return e.flags |= ar, e.lanes = o, e;
    }
    function gx(e, t, a, i, o) {
      if (a.flags |= Ra, pr && hv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        yx(a), Ir() && a.mode & Tt && fC();
        var d = Eb(t);
        if (d !== null) {
          d.flags &= ~An, Cb(d, t, a, e, o), d.mode & Tt && Sb(e, s, o), mx(d, e, s);
          return;
        } else {
          if (!wl(o)) {
            Sb(e, s, o), TE();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Ir() && a.mode & Tt) {
        fC();
        var y = Eb(t);
        if (y !== null) {
          (y.flags & ar) === Ye && (y.flags |= An), Cb(y, t, a, e, o), jg(oc(i, a));
          return;
        }
      }
      i = oc(i, a), XO(i);
      var b = t;
      do {
        switch (b.tag) {
          case N: {
            var T = i;
            b.flags |= ar;
            var P = qn(o);
            b.lanes = yt(b.lanes, P);
            var z = gb(b, T, P);
            Qg(b, z);
            return;
          }
          case x:
            var q = i, X = b.type, ne = b.stateNode;
            if ((b.flags & ot) === Ye && (typeof X.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && !ER(ne))) {
              b.flags |= ar;
              var Me = qn(o);
              b.lanes = yt(b.lanes, Me);
              var qe = YS(b, q, Me);
              Qg(b, qe);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function Sx() {
      return null;
    }
    var ev = p.ReactCurrentOwner, su = !1, WS, tv, QS, GS, qS, lc, KS, Gm;
    WS = {}, tv = {}, QS = {}, GS = {}, qS = {}, lc = !1, KS = {}, Gm = {};
    function Da(e, t, a, i) {
      e === null ? t.child = FC(t, null, a, i) : t.child = Bf(t, e.child, a, i);
    }
    function Ex(e, t, a, i) {
      t.child = Bf(t, e.child, null, i), t.child = Bf(t, null, a, i);
    }
    function bb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ru(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d = a.render, m = t.ref, y, b;
      If(t, o), Pu(t);
      {
        if (ev.current = t, na(!0), y = qf(e, t, d, i, m, o), b = Kf(), t.mode & kn) {
          Gn(!0);
          try {
            y = qf(e, t, d, i, m, o), b = Kf();
          } finally {
            Gn(!1);
          }
        }
        na(!1);
      }
      return go(), e !== null && !su ? ($C(e, t, o), $o(e, t, o)) : (Ir() && b && Ng(t), t.flags |= Nu, Da(e, t, y, o), t.child);
    }
    function Rb(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (wD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = ad(s), t.tag = Ee, t.type = d, JS(t, s), Tb(e, t, d, i, o);
        }
        {
          var m = s.propTypes;
          m && ru(
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
        T && ru(
          T,
          i,
          // Resolved props
          "prop",
          Pt(b)
        );
      }
      var P = e.child, z = iE(e, o);
      if (!z) {
        var q = P.memoizedProps, X = a.compare;
        if (X = X !== null ? X : $e, X(q, i) && e.ref === t.ref)
          return $o(e, t, o);
      }
      t.flags |= Nu;
      var ne = pc(P, i);
      return ne.ref = t.ref, ne.return = t, t.child = ne, ne;
    }
    function Tb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var d = s, m = d._payload, y = d._init;
          try {
            s = y(m);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && ru(
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
        if ($e(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (su = !1, t.pendingProps = i = T, iE(e, o))
            (e.flags & Ds) !== Ye && (su = !0);
          else
            return t.lanes = e.lanes, $o(e, t, o);
      }
      return XS(e, t, a, i, o);
    }
    function wb(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Tt) === Ze) {
          var d = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, oy(t, a);
        } else if (fa(a, ca)) {
          var P = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = P;
          var z = s !== null ? s.baseLanes : a;
          oy(t, z);
        } else {
          var m = null, y;
          if (s !== null) {
            var b = s.baseLanes;
            y = yt(b, a);
          } else
            y = a;
          t.lanes = t.childLanes = ca;
          var T = {
            baseLanes: y,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, oy(t, y), null;
        }
      else {
        var q;
        s !== null ? (q = yt(s.baseLanes, a), t.memoizedState = null) : q = a, oy(t, q);
      }
      return Da(e, t, o, a), t.child;
    }
    function Cx(e, t, a) {
      var i = t.pendingProps;
      return Da(e, t, i, a), t.child;
    }
    function bx(e, t, a) {
      var i = t.pendingProps.children;
      return Da(e, t, i, a), t.child;
    }
    function Rx(e, t, a) {
      {
        t.flags |= mt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Da(e, t, s, a), t.child;
    }
    function _b(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= aa, t.flags |= jd);
    }
    function XS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ru(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d;
      {
        var m = Uf(t, a, !0);
        d = jf(t, m);
      }
      var y, b;
      If(t, o), Pu(t);
      {
        if (ev.current = t, na(!0), y = qf(e, t, a, i, d, o), b = Kf(), t.mode & kn) {
          Gn(!0);
          try {
            y = qf(e, t, a, i, d, o), b = Kf();
          } finally {
            Gn(!1);
          }
        }
        na(!1);
      }
      return go(), e !== null && !su ? ($C(e, t, o), $o(e, t, o)) : (Ir() && b && Ng(t), t.flags |= Nu, Da(e, t, y, o), t.child);
    }
    function xb(e, t, a, i, o) {
      {
        switch (VD(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), y = m.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ot, t.flags |= ar;
            var b = new Error("Simulated error coming from DevTools"), T = qn(o);
            t.lanes = yt(t.lanes, T);
            var P = YS(t, oc(b, t), T);
            Qg(t, P);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && ru(
            z,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var q;
      qu(a) ? (q = !0, um(t)) : q = !1, If(t, o);
      var X = t.stateNode, ne;
      X === null ? (Km(e, t), AC(t, a, i), iS(t, a, i, o), ne = !0) : e === null ? ne = q_(t, a, i, o) : ne = K_(e, t, a, i, o);
      var Me = ZS(e, t, a, ne, q, o);
      {
        var qe = t.stateNode;
        ne && qe.props !== i && (lc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", st(t) || "a component"), lc = !0);
      }
      return Me;
    }
    function ZS(e, t, a, i, o, s) {
      _b(e, t);
      var d = (t.flags & ot) !== Ye;
      if (!i && !d)
        return o && oC(t, a, !1), $o(e, t, s);
      var m = t.stateNode;
      ev.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, yb();
      else {
        Pu(t);
        {
          if (na(!0), y = m.render(), t.mode & kn) {
            Gn(!0);
            try {
              m.render();
            } finally {
              Gn(!1);
            }
          }
          na(!1);
        }
        go();
      }
      return t.flags |= Nu, e !== null && d ? Ex(e, t, y, s) : Da(e, t, y, s), t.memoizedState = m.state, o && oC(t, a, !0), t.child;
    }
    function Ob(e) {
      var t = e.stateNode;
      t.pendingContext ? iC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iC(e, t.context, !1), fS(e, t.containerInfo);
    }
    function Tx(e, t, a) {
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
          var T = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Db(e, t, m, a, T);
        } else if (m !== s) {
          var P = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Db(e, t, m, a, P);
        } else {
          O_(t);
          var z = FC(t, null, m, a);
          t.child = z;
          for (var q = z; q; )
            q.flags = q.flags & ~yn | Va, q = q.sibling;
        }
      } else {
        if (Vf(), m === s)
          return $o(e, t, a);
        Da(e, t, m, a);
      }
      return t.child;
    }
    function Db(e, t, a, i, o) {
      return Vf(), jg(o), t.flags |= An, Da(e, t, a, i), t.child;
    }
    function wx(e, t, a) {
      HC(t), e === null && Ug(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = o.children, m = yg(i, o);
      return m ? d = null : s !== null && yg(i, s) && (t.flags |= Kt), _b(e, t), Da(e, t, d, a), t.child;
    }
    function _x(e, t) {
      return e === null && Ug(t), null;
    }
    function xx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s = a, d = s._payload, m = s._init, y = m(d);
      t.type = y;
      var b = t.tag = _D(y), T = uu(y, o), P;
      switch (b) {
        case M:
          return JS(t, y), t.type = y = ad(y), P = XS(null, t, y, T, i), P;
        case x:
          return t.type = y = DE(y), P = xb(null, t, y, T, i), P;
        case te:
          return t.type = y = kE(y), P = bb(null, t, y, T, i), P;
        case me: {
          if (t.type !== t.elementType) {
            var z = y.propTypes;
            z && ru(
              z,
              T,
              // Resolved for outer only
              "prop",
              Pt(y)
            );
          }
          return P = Rb(
            null,
            t,
            y,
            uu(y.type, T),
            // The inner type can have defaults too
            i
          ), P;
        }
      }
      var q = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ge && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function Ox(e, t, a, i, o) {
      Km(e, t), t.tag = x;
      var s;
      return qu(a) ? (s = !0, um(t)) : s = !1, If(t, o), AC(t, a, i), iS(t, a, i, o), ZS(null, t, a, !0, s, o);
    }
    function Dx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s;
      {
        var d = Uf(t, a, !1);
        s = jf(t, d);
      }
      If(t, i);
      var m, y;
      Pu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Pt(a) || "Unknown";
          WS[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), WS[b] = !0);
        }
        t.mode & kn && iu.recordLegacyContextWarning(t, null), na(!0), ev.current = t, m = qf(null, t, a, o, s, i), y = Kf(), na(!1);
      }
      if (go(), t.flags |= Nu, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var T = Pt(a) || "Unknown";
        tv[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), tv[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var P = Pt(a) || "Unknown";
          tv[P] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), tv[P] = !0);
        }
        t.tag = x, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return qu(a) ? (z = !0, um(t)) : z = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Wg(t), LC(t, m), iS(t, a, o, i), ZS(null, t, a, !0, z, i);
      } else {
        if (t.tag = M, t.mode & kn) {
          Gn(!0);
          try {
            m = qf(null, t, a, o, s, i), y = Kf();
          } finally {
            Gn(!1);
          }
        }
        return Ir() && y && Ng(t), Da(null, t, m, i), JS(t, a), t.child;
      }
    }
    function JS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Fr();
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
      retryLane: Nt
    };
    function tE(e) {
      return {
        baseLanes: e,
        cachePool: Sx(),
        transitions: null
      };
    }
    function kx(e, t) {
      var a = null;
      return {
        baseLanes: yt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Nx(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return vS(e, Wp);
    }
    function Mx(e, t) {
      return _l(e.childLanes, t);
    }
    function kb(e, t, a) {
      var i = t.pendingProps;
      HD(t) && (t.flags |= ot);
      var o = ou.current, s = !1, d = (t.flags & ot) !== Ye;
      if (d || Nx(o, e) ? (s = !0, t.flags &= ~ot) : (e === null || e.memoizedState !== null) && (o = ex(o, BC)), o = Yf(o), ql(t, o), e === null) {
        Ug(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return jx(t, y);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var P = Lx(t, b, T, a), z = t.child;
          return z.memoizedState = tE(a), t.memoizedState = eE, P;
        } else
          return nE(t, b);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var X = q.dehydrated;
          if (X !== null)
            return Px(e, t, d, i, X, q, a);
        }
        if (s) {
          var ne = i.fallback, Me = i.children, qe = zx(e, t, Me, ne, a), Ie = t.child, Lt = e.child.memoizedState;
          return Ie.memoizedState = Lt === null ? tE(a) : kx(Lt, a), Ie.childLanes = Mx(e, a), t.memoizedState = eE, qe;
        } else {
          var xt = i.children, W = Ax(e, t, xt, a);
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
    function Lx(e, t, a, i) {
      var o = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, m, y;
      return (o & Tt) === Ze && s !== null ? (m = s, m.childLanes = ae, m.pendingProps = d, e.mode & et && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = rs(a, o, i, null)) : (m = rE(d, o), y = rs(a, o, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function rE(e, t, a) {
      return NR(e, t, ae, null);
    }
    function Nb(e, t) {
      return pc(e, t);
    }
    function Ax(e, t, a, i) {
      var o = e.child, s = o.sibling, d = Nb(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Tt) === Ze && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Yt) : m.push(s);
      }
      return t.child = d, d;
    }
    function zx(e, t, a, i, o) {
      var s = t.mode, d = e.child, m = d.sibling, y = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Tt) === Ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        b = T, b.childLanes = ae, b.pendingProps = y, t.mode & et && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = Nb(d, y), b.subtreeFlags = d.subtreeFlags & dr;
      var P;
      return m !== null ? P = pc(m, i) : (P = rs(i, s, o, null), P.flags |= yn), P.return = t, b.return = t, b.sibling = P, t.child = b, P;
    }
    function qm(e, t, a, i) {
      i !== null && jg(i), Bf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, d = nE(t, s);
      return d.flags |= yn, t.memoizedState = null, d;
    }
    function Ux(e, t, a, i, o) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, m = rE(d, s), y = rs(i, s, o, null);
      return y.flags |= yn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & Tt) !== Ze && Bf(t, e.child, null, o), y;
    }
    function jx(e, t, a) {
      return (e.mode & Tt) === Ze ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = rt) : Cg(t) ? e.lanes = Co : e.lanes = ca, null;
    }
    function Px(e, t, a, i, o, s, d) {
      if (a)
        if (t.flags & An) {
          t.flags &= ~An;
          var W = BS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, d, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ot, null;
          var re = i.children, Q = i.fallback, pe = Ux(e, t, re, Q, d), Le = t.child;
          return Le.memoizedState = tE(d), t.memoizedState = eE, pe;
        }
      else {
        if (__(), (t.mode & Tt) === Ze)
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
            var T = Bw(o);
            m = T.digest, y = T.message, b = T.stack;
          }
          var P;
          y ? P = new Error(y) : P = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = BS(P, m, b);
          return qm(e, t, d, z);
        }
        var q = fa(d, e.childLanes);
        if (su || q) {
          var X = uy();
          if (X !== null) {
            var ne = Iy(X, d);
            if (ne !== Nt && ne !== s.retryLane) {
              s.retryLane = ne;
              var Me = fn;
              Ka(e, ne), br(X, e, ne, Me);
            }
          }
          TE();
          var qe = BS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, d, qe);
        } else if (J0(o)) {
          t.flags |= ot, t.child = e.child;
          var Ie = sD.bind(null, e);
          return $w(o, Ie), null;
        } else {
          D_(t, o, s.treeContext);
          var Lt = i.children, xt = nE(t, Lt);
          return xt.flags |= Va, xt;
        }
      }
    }
    function Mb(e, t, a) {
      e.lanes = yt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = yt(i.lanes, t)), Ig(e.return, t, a);
    }
    function Fx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === I) {
          var o = i.memoizedState;
          o !== null && Mb(i, a, e);
        } else if (i.tag === We)
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
    function Vx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Om(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Hx(e) {
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
    function Ix(e, t) {
      e !== void 0 && !Gm[e] && (e !== "collapsed" && e !== "hidden" ? (Gm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Lb(e, t) {
      {
        var a = Dt(e), i = !a && typeof ri(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Bx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Lb(e[a], a))
              return;
        } else {
          var i = ri(e);
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
      Hx(o), Ix(s, o), Bx(d, o), Da(e, t, d, a);
      var m = ou.current, y = vS(m, Wp);
      if (y)
        m = hS(m, Wp), t.flags |= ot;
      else {
        var b = e !== null && (e.flags & ot) !== Ye;
        b && Fx(t, t.child, a), m = Yf(m);
      }
      if (ql(t, m), (t.mode & Tt) === Ze)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = Vx(t.child), P;
            T === null ? (P = t.child, t.child = null) : (P = T.sibling, T.sibling = null), aE(
              t,
              !1,
              // isBackwards
              P,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var z = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var X = q.alternate;
              if (X !== null && Om(X) === null) {
                t.child = q;
                break;
              }
              var ne = q.sibling;
              q.sibling = z, z = q, q = ne;
            }
            aE(
              t,
              !0,
              // isBackwards
              z,
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
    function $x(e, t, a) {
      fS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Bf(t, null, i, a) : Da(e, t, i, a), t.child;
    }
    var zb = !1;
    function Yx(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || zb || (zb = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && ru(y, s, "prop", "Context.Provider");
      }
      if (bC(t, o, m), d !== null) {
        var b = d.value;
        if (Ue(b, m)) {
          if (d.children === s.children && !am())
            return $o(e, t, a);
        } else
          F_(t, o, a);
      }
      var T = s.children;
      return Da(e, t, T, a), t.child;
    }
    var Ub = !1;
    function Wx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Ub || (Ub = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var d = sr(i);
      Pu(t);
      var m;
      return ev.current = t, na(!0), m = s(d), na(!1), go(), t.flags |= Nu, Da(e, t, m, a), t.child;
    }
    function nv() {
      su = !0;
    }
    function Km(e, t) {
      (t.mode & Tt) === Ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function $o(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), yb(), vv(t.lanes), fa(a, t.childLanes) ? (X_(e, t), t.child) : null;
    }
    function Qx(e, t, a) {
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
      return !!fa(a, t);
    }
    function Gx(e, t, a) {
      switch (t.tag) {
        case N:
          Ob(t), t.stateNode, Vf();
          break;
        case F:
          HC(t);
          break;
        case x: {
          var i = t.type;
          qu(i) && um(t);
          break;
        }
        case A:
          fS(t, t.stateNode.containerInfo);
          break;
        case oe: {
          var o = t.memoizedProps.value, s = t.type._context;
          bC(t, s, o);
          break;
        }
        case J:
          {
            var d = fa(a, t.childLanes);
            d && (t.flags |= mt);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case I: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return ql(t, Yf(ou.current)), t.flags |= ot, null;
            var b = t.child, T = b.childLanes;
            if (fa(a, T))
              return kb(e, t, a);
            ql(t, Yf(ou.current));
            var P = $o(e, t, a);
            return P !== null ? P.sibling : null;
          } else
            ql(t, Yf(ou.current));
          break;
        }
        case We: {
          var z = (e.flags & ot) !== Ye, q = fa(a, t.childLanes);
          if (z) {
            if (q)
              return Ab(e, t, a);
            t.flags |= ot;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), ql(t, ou.current), q)
            break;
          return null;
        }
        case He:
        case tt:
          return t.lanes = ae, wb(e, t, a);
      }
      return $o(e, t, a);
    }
    function jb(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Qx(e, t, zE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || am() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          su = !0;
        else {
          var s = iE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ot) === Ye)
            return su = !1, Gx(e, t, a);
          (e.flags & Ds) !== Ye ? su = !0 : su = !1;
        }
      } else if (su = !1, Ir() && E_(t)) {
        var d = t.index, m = C_();
        cC(t, m, d);
      }
      switch (t.lanes = ae, t.tag) {
        case U:
          return Dx(e, t, t.type, a);
        case Ke: {
          var y = t.elementType;
          return xx(e, t, y, a);
        }
        case M: {
          var b = t.type, T = t.pendingProps, P = t.elementType === b ? T : uu(b, T);
          return XS(e, t, b, P, a);
        }
        case x: {
          var z = t.type, q = t.pendingProps, X = t.elementType === z ? q : uu(z, q);
          return xb(e, t, z, X, a);
        }
        case N:
          return Tx(e, t, a);
        case F:
          return wx(e, t, a);
        case B:
          return _x(e, t);
        case I:
          return kb(e, t, a);
        case A:
          return $x(e, t, a);
        case te: {
          var ne = t.type, Me = t.pendingProps, qe = t.elementType === ne ? Me : uu(ne, Me);
          return bb(e, t, ne, qe, a);
        }
        case Y:
          return Cx(e, t, a);
        case V:
          return bx(e, t, a);
        case J:
          return Rx(e, t, a);
        case oe:
          return Yx(e, t, a);
        case le:
          return Wx(e, t, a);
        case me: {
          var Ie = t.type, Lt = t.pendingProps, xt = uu(Ie, Lt);
          if (t.type !== t.elementType) {
            var W = Ie.propTypes;
            W && ru(
              W,
              xt,
              // Resolved for outer only
              "prop",
              Pt(Ie)
            );
          }
          return xt = uu(Ie.type, xt), Rb(e, t, Ie, xt, a);
        }
        case Ee:
          return Tb(e, t, t.type, t.pendingProps, a);
        case ut: {
          var re = t.type, Q = t.pendingProps, pe = t.elementType === re ? Q : uu(re, Q);
          return Ox(e, t, re, pe, a);
        }
        case We:
          return Ab(e, t, a);
        case wt:
          break;
        case He:
          return wb(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= mt;
    }
    function Pb(e) {
      e.flags |= aa, e.flags |= jd;
    }
    var Fb, uE, Vb, Hb;
    Fb = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === F || o.tag === B)
          yw(e, o.stateNode);
        else if (o.tag !== A) {
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
        var d = t.stateNode, m = dS(), y = Sw(d, a, s, i, o, m);
        t.updateQueue = y, y && Xf(t);
      }
    }, Hb = function(e, t, a, i) {
      a !== i && Xf(t);
    };
    function rv(e, t) {
      if (!Ir())
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
    function $r(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = Ye;
      if (t) {
        if ((e.mode & et) !== Ze) {
          for (var y = e.selfBaseDuration, b = e.child; b !== null; )
            a = yt(a, yt(b.lanes, b.childLanes)), i |= b.subtreeFlags & dr, i |= b.flags & dr, y += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = y;
        } else
          for (var T = e.child; T !== null; )
            a = yt(a, yt(T.lanes, T.childLanes)), i |= T.subtreeFlags & dr, i |= T.flags & dr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & et) !== Ze) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = yt(a, yt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = yt(a, yt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function qx(e, t, a) {
      if (A_() && (t.mode & Tt) !== Ze && (t.flags & ot) === Ye)
        return yC(t), Vf(), t.flags |= An | Ra | ar, !1;
      var i = fm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (M_(t), $r(t), (t.mode & et) !== Ze) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Vf(), (t.flags & ot) === Ye && (t.memoizedState = null), t.flags |= mt, $r(t), (t.mode & et) !== Ze) {
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
        case Ke:
        case Ee:
        case M:
        case te:
        case Y:
        case V:
        case J:
        case le:
        case me:
          return $r(t), null;
        case x: {
          var o = t.type;
          return qu(o) && im(t), $r(t), null;
        }
        case N: {
          var s = t.stateNode;
          if ($f(t), Og(t), yS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = fm(t);
            if (d)
              Xf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & An) !== Ye) && (t.flags |= Fa, gC());
            }
          }
          return uE(e, t), $r(t), null;
        }
        case F: {
          pS(t);
          var y = VC(), b = t.type;
          if (e !== null && t.stateNode != null)
            Vb(e, t, b, i, y), e.ref !== t.ref && Pb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return $r(t), null;
            }
            var T = dS(), P = fm(t);
            if (P)
              k_(t, y, T) && Xf(t);
            else {
              var z = mw(b, i, y, T, t);
              Fb(z, t, !1, !1), t.stateNode = z, gw(z, b, i, y) && Xf(t);
            }
            t.ref !== null && Pb(t);
          }
          return $r(t), null;
        }
        case B: {
          var q = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            Hb(e, t, X, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ne = VC(), Me = dS(), qe = fm(t);
            qe ? N_(t) && Xf(t) : t.stateNode = Ew(q, ne, Me, t);
          }
          return $r(t), null;
        }
        case I: {
          Wf(t);
          var Ie = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = qx(e, t, Ie);
            if (!Lt)
              return t.flags & ar ? t : null;
          }
          if ((t.flags & ot) !== Ye)
            return t.lanes = a, (t.mode & et) !== Ze && IS(t), t;
          var xt = Ie !== null, W = e !== null && e.memoizedState !== null;
          if (xt !== W && xt) {
            var re = t.child;
            if (re.flags |= Mu, (t.mode & Tt) !== Ze) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ue);
              Q || vS(ou.current, BC) ? KO() : TE();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= mt), $r(t), (t.mode & et) !== Ze && xt) {
            var Le = t.child;
            Le !== null && (t.treeBaseDuration -= Le.treeBaseDuration);
          }
          return null;
        }
        case A:
          return $f(t), uE(e, t), e === null && p_(t.stateNode.containerInfo), $r(t), null;
        case oe:
          var xe = t.type._context;
          return Hg(xe, t), $r(t), null;
        case ut: {
          var it = t.type;
          return qu(it) && im(t), $r(t), null;
        }
        case We: {
          Wf(t);
          var pt = t.memoizedState;
          if (pt === null)
            return $r(t), null;
          var nn = (t.flags & ot) !== Ye, It = pt.rendering;
          if (It === null)
            if (nn)
              rv(pt, !1);
            else {
              var Jn = ZO() && (e === null || (e.flags & ot) === Ye);
              if (!Jn)
                for (var Bt = t.child; Bt !== null; ) {
                  var Qn = Om(Bt);
                  if (Qn !== null) {
                    nn = !0, t.flags |= ot, rv(pt, !1);
                    var ha = Qn.updateQueue;
                    return ha !== null && (t.updateQueue = ha, t.flags |= mt), t.subtreeFlags = Ye, Z_(t, a), ql(t, hS(ou.current, Wp)), t.child;
                  }
                  Bt = Bt.sibling;
                }
              pt.tail !== null && Dn() > sR() && (t.flags |= ot, nn = !0, rv(pt, !1), t.lanes = Kd);
            }
          else {
            if (!nn) {
              var qr = Om(It);
              if (qr !== null) {
                t.flags |= ot, nn = !0;
                var vi = qr.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= mt), rv(pt, !0), pt.tail === null && pt.tailMode === "hidden" && !It.alternate && !Ir())
                  return $r(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Dn() * 2 - pt.renderingStartTime > sR() && a !== ca && (t.flags |= ot, nn = !0, rv(pt, !1), t.lanes = Kd);
            }
            if (pt.isBackwards)
              It.sibling = t.child, t.child = It;
            else {
              var Ma = pt.last;
              Ma !== null ? Ma.sibling = It : t.child = It, pt.last = It;
            }
          }
          if (pt.tail !== null) {
            var La = pt.tail;
            pt.rendering = La, pt.tail = La.sibling, pt.renderingStartTime = Dn(), La.sibling = null;
            var ma = ou.current;
            return nn ? ma = hS(ma, Wp) : ma = Yf(ma), ql(t, ma), La;
          }
          return $r(t), null;
        }
        case wt:
          break;
        case He:
        case tt: {
          RE(t);
          var qo = t.memoizedState, id = qo !== null;
          if (e !== null) {
            var Sv = e.memoizedState, ro = Sv !== null;
            ro !== id && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !k && (t.flags |= Mu);
          }
          return !id || (t.mode & Tt) === Ze ? $r(t) : fa(no, ca) && ($r(t), t.subtreeFlags & (yn | mt) && (t.flags |= Mu)), null;
        }
        case Ot:
          return null;
        case gt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kx(e, t, a) {
      switch (Mg(t), t.tag) {
        case x: {
          var i = t.type;
          qu(i) && im(t);
          var o = t.flags;
          return o & ar ? (t.flags = o & ~ar | ot, (t.mode & et) !== Ze && IS(t), t) : null;
        }
        case N: {
          t.stateNode, $f(t), Og(t), yS();
          var s = t.flags;
          return (s & ar) !== Ye && (s & ot) === Ye ? (t.flags = s & ~ar | ot, t) : null;
        }
        case F:
          return pS(t), null;
        case I: {
          Wf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Vf();
          }
          var m = t.flags;
          return m & ar ? (t.flags = m & ~ar | ot, (t.mode & et) !== Ze && IS(t), t) : null;
        }
        case We:
          return Wf(t), null;
        case A:
          return $f(t), null;
        case oe:
          var y = t.type._context;
          return Hg(y, t), null;
        case He:
        case tt:
          return RE(t), null;
        case Ot:
          return null;
        default:
          return null;
      }
    }
    function Bb(e, t, a) {
      switch (Mg(t), t.tag) {
        case x: {
          var i = t.type.childContextTypes;
          i != null && im(t);
          break;
        }
        case N: {
          t.stateNode, $f(t), Og(t), yS();
          break;
        }
        case F: {
          pS(t);
          break;
        }
        case A:
          $f(t);
          break;
        case I:
          Wf(t);
          break;
        case We:
          Wf(t);
          break;
        case oe:
          var o = t.type._context;
          Hg(o, t);
          break;
        case He:
        case tt:
          RE(t);
          break;
      }
    }
    var $b = null;
    $b = /* @__PURE__ */ new Set();
    var Xm = !1, Yr = !1, Xx = typeof WeakSet == "function" ? WeakSet : Set, je = null, Zf = null, Jf = null;
    function Zx(e) {
      mo(null, function() {
        throw e;
      }), zd();
    }
    var Jx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & et)
        try {
          eo(), t.componentWillUnmount();
        } finally {
          Ju(e);
        }
      else
        t.componentWillUnmount();
    };
    function Yb(e, t) {
      try {
        Zl(mr, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function oE(e, t, a) {
      try {
        Jx(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function eO(e, t, a) {
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
    function ed(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ft && St && e.mode & et)
              try {
                eo(), i = a(null);
              } finally {
                Ju(e);
              }
            else
              i = a(null);
          } catch (o) {
            Cn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
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
    function tO(e, t) {
      vw(e.containerInfo), je = t, nO();
      var a = Qb;
      return Qb = !1, a;
    }
    function nO() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        (e.subtreeFlags & gl) !== Ye && t !== null ? (t.return = e, je = t) : rO();
      }
    }
    function rO() {
      for (; je !== null; ) {
        var e = je;
        qt(e);
        try {
          aO(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function aO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fa) !== Ye) {
        switch (qt(e), e.tag) {
          case M:
          case te:
          case Ee:
            break;
          case x: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !lc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : uu(e.type, i), o);
              {
                var m = $b;
                d === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", st(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case N: {
            {
              var y = e.stateNode;
              Fw(y.containerInfo);
            }
            break;
          }
          case F:
          case B:
          case A:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ln();
      }
    }
    function cu(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var m = d.destroy;
            d.destroy = void 0, m !== void 0 && ((e & Br) !== Xa ? Ic(t) : (e & mr) !== Xa && Bc(t), (e & Ku) !== Xa && mv(!0), Zm(t, a, m), (e & Ku) !== Xa && mv(!1), (e & Br) !== Xa ? ch() : (e & mr) !== Xa && Sl());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Zl(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Xa ? sh(t) : (e & mr) !== Xa && fh(t);
            var d = s.create;
            (e & Ku) !== Xa && mv(!0), s.destroy = d(), (e & Ku) !== Xa && mv(!1), (e & Br) !== Xa ? Qd() : (e & mr) !== Xa && dh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var y = void 0;
                (s.tag & mr) !== Ye ? y = "useLayoutEffect" : (s.tag & Ku) !== Ye ? y = "useInsertionEffect" : y = "useEffect";
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
    function iO(e, t) {
      if ((t.flags & mt) !== Ye)
        switch (t.tag) {
          case J: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, d = hb(), m = t.alternate === null ? "mount" : "update";
            vb() && (m = "nested-update"), typeof s == "function" && s(o, m, a, d);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case N:
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
    function uO(e, t, a, i) {
      if ((a.flags & _r) !== Ye)
        switch (a.tag) {
          case M:
          case te:
          case Ee: {
            if (!Yr)
              if (a.mode & et)
                try {
                  eo(), Zl(mr | hr, a);
                } finally {
                  Ju(a);
                }
              else
                Zl(mr | hr, a);
            break;
          }
          case x: {
            var o = a.stateNode;
            if (a.flags & mt && !Yr)
              if (t === null)
                if (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(a) || "instance")), a.mode & et)
                  try {
                    eo(), o.componentDidMount();
                  } finally {
                    Ju(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : uu(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(a) || "instance")), a.mode & et)
                  try {
                    eo(), o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ju(a);
                  }
                else
                  o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(a) || "instance")), OC(a, m, o));
            break;
          }
          case N: {
            var y = a.updateQueue;
            if (y !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case F:
                    b = a.child.stateNode;
                    break;
                  case x:
                    b = a.child.stateNode;
                    break;
                }
              OC(a, y, b);
            }
            break;
          }
          case F: {
            var T = a.stateNode;
            if (t === null && a.flags & mt) {
              var P = a.type, z = a.memoizedProps;
              ww(T, P, z);
            }
            break;
          }
          case B:
            break;
          case A:
            break;
          case J: {
            {
              var q = a.memoizedProps, X = q.onCommit, ne = q.onRender, Me = a.stateNode.effectDuration, qe = hb(), Ie = t === null ? "mount" : "update";
              vb() && (Ie = "nested-update"), typeof ne == "function" && ne(a.memoizedProps.id, Ie, a.actualDuration, a.treeBaseDuration, a.actualStartTime, qe);
              {
                typeof X == "function" && X(a.memoizedProps.id, Ie, Me, qe), rD(a);
                var Lt = a.return;
                e:
                  for (; Lt !== null; ) {
                    switch (Lt.tag) {
                      case N:
                        var xt = Lt.stateNode;
                        xt.effectDuration += Me;
                        break e;
                      case J:
                        var W = Lt.stateNode;
                        W.effectDuration += Me;
                        break e;
                    }
                    Lt = Lt.return;
                  }
              }
            }
            break;
          }
          case I: {
            vO(e, a);
            break;
          }
          case We:
          case ut:
          case wt:
          case He:
          case tt:
          case gt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Yr || a.flags & aa && Gb(a);
    }
    function oO(e) {
      switch (e.tag) {
        case M:
        case te:
        case Ee: {
          if (e.mode & et)
            try {
              eo(), Yb(e, e.return);
            } finally {
              Ju(e);
            }
          else
            Yb(e, e.return);
          break;
        }
        case x: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && eO(e, e.return, t), Wb(e, e.return);
          break;
        }
        case F: {
          Wb(e, e.return);
          break;
        }
      }
    }
    function lO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === F) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? zw(o) : jw(i.stateNode, i.memoizedProps);
            } catch (d) {
              Cn(e, e.return, d);
            }
          }
        } else if (i.tag === B) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Uw(s) : Pw(s, i.memoizedProps);
            } catch (d) {
              Cn(e, e.return, d);
            }
        } else if (!((i.tag === He || i.tag === tt) && i.memoizedState !== null && i !== e)) {
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
          case F:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & et)
            try {
              eo(), o = t(i);
            } finally {
              Ju(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", st(e)), t.current = i;
      }
    }
    function sO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function qb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, qb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var a = e.stateNode;
          a !== null && m_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function cO(e) {
      for (var t = e.return; t !== null; ) {
        if (Kb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kb(e) {
      return e.tag === F || e.tag === N || e.tag === A;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== B && t.tag !== at; ) {
            if (t.flags & yn || t.child === null || t.tag === A)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & yn))
            return t.stateNode;
        }
    }
    function fO(e) {
      var t = cO(e);
      switch (t.tag) {
        case F: {
          var a = t.stateNode;
          t.flags & Kt && (Z0(a), t.flags &= ~Kt);
          var i = Xb(e);
          sE(e, i, a);
          break;
        }
        case N:
        case A: {
          var o = t.stateNode.containerInfo, s = Xb(e);
          lE(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function lE(e, t, a) {
      var i = e.tag, o = i === F || i === B;
      if (o) {
        var s = e.stateNode;
        t ? Nw(a, s, t) : Dw(a, s);
      } else if (i !== A) {
        var d = e.child;
        if (d !== null) {
          lE(d, t, a);
          for (var m = d.sibling; m !== null; )
            lE(m, t, a), m = m.sibling;
        }
      }
    }
    function sE(e, t, a) {
      var i = e.tag, o = i === F || i === B;
      if (o) {
        var s = e.stateNode;
        t ? kw(a, s, t) : Ow(a, s);
      } else if (i !== A) {
        var d = e.child;
        if (d !== null) {
          sE(d, t, a);
          for (var m = d.sibling; m !== null; )
            sE(m, t, a), m = m.sibling;
        }
      }
    }
    var Wr = null, fu = !1;
    function dO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case F: {
                Wr = i.stateNode, fu = !1;
                break e;
              }
              case N: {
                Wr = i.stateNode.containerInfo, fu = !0;
                break e;
              }
              case A: {
                Wr = i.stateNode.containerInfo, fu = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Zb(e, t, a), Wr = null, fu = !1;
      }
      sO(a);
    }
    function Jl(e, t, a) {
      for (var i = a.child; i !== null; )
        Zb(e, t, i), i = i.sibling;
    }
    function Zb(e, t, a) {
      switch (Yd(a), a.tag) {
        case F:
          Yr || ed(a, t);
        case B: {
          {
            var i = Wr, o = fu;
            Wr = null, Jl(e, t, a), Wr = i, fu = o, Wr !== null && (fu ? Lw(Wr, a.stateNode) : Mw(Wr, a.stateNode));
          }
          return;
        }
        case at: {
          Wr !== null && (fu ? Aw(Wr, a.stateNode) : Eg(Wr, a.stateNode));
          return;
        }
        case A: {
          {
            var s = Wr, d = fu;
            Wr = a.stateNode.containerInfo, fu = !0, Jl(e, t, a), Wr = s, fu = d;
          }
          return;
        }
        case M:
        case te:
        case me:
        case Ee: {
          if (!Yr) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var b = y.next, T = b;
                do {
                  var P = T, z = P.destroy, q = P.tag;
                  z !== void 0 && ((q & Ku) !== Xa ? Zm(a, t, z) : (q & mr) !== Xa && (Bc(a), a.mode & et ? (eo(), Zm(a, t, z), Ju(a)) : Zm(a, t, z), Sl())), T = T.next;
                } while (T !== b);
              }
            }
          }
          Jl(e, t, a);
          return;
        }
        case x: {
          if (!Yr) {
            ed(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && oE(a, t, X);
          }
          Jl(e, t, a);
          return;
        }
        case wt: {
          Jl(e, t, a);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            a.mode & Tt
          ) {
            var ne = Yr;
            Yr = ne || a.memoizedState !== null, Jl(e, t, a), Yr = ne;
          } else
            Jl(e, t, a);
          break;
        }
        default: {
          Jl(e, t, a);
          return;
        }
      }
    }
    function pO(e) {
      e.memoizedState;
    }
    function vO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && Jw(s);
          }
        }
      }
    }
    function Jb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Xx()), t.forEach(function(i) {
          var o = cD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), pr)
              if (Zf !== null && Jf !== null)
                hv(Jf, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function hO(e, t, a) {
      Zf = a, Jf = e, qt(t), eR(t, e), qt(t), Zf = null, Jf = null;
    }
    function du(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            dO(e, t, s);
          } catch (y) {
            Cn(s, t, y);
          }
        }
      var d = Ec();
      if (t.subtreeFlags & oa)
        for (var m = t.child; m !== null; )
          qt(m), eR(m, e), m = m.sibling;
      qt(d);
    }
    function eR(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case M:
        case te:
        case me:
        case Ee: {
          if (du(t, e), to(e), o & mt) {
            try {
              cu(Ku | hr, e, e.return), Zl(Ku | hr, e);
            } catch (it) {
              Cn(e, e.return, it);
            }
            if (e.mode & et) {
              try {
                eo(), cu(mr | hr, e, e.return);
              } catch (it) {
                Cn(e, e.return, it);
              }
              Ju(e);
            } else
              try {
                cu(mr | hr, e, e.return);
              } catch (it) {
                Cn(e, e.return, it);
              }
          }
          return;
        }
        case x: {
          du(t, e), to(e), o & aa && i !== null && ed(i, i.return);
          return;
        }
        case F: {
          du(t, e), to(e), o & aa && i !== null && ed(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                Z0(s);
              } catch (it) {
                Cn(e, e.return, it);
              }
            }
            if (o & mt) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    _w(d, T, b, y, m, e);
                  } catch (it) {
                    Cn(e, e.return, it);
                  }
              }
            }
          }
          return;
        }
        case B: {
          if (du(t, e), to(e), o & mt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var P = e.stateNode, z = e.memoizedProps, q = i !== null ? i.memoizedProps : z;
            try {
              xw(P, q, z);
            } catch (it) {
              Cn(e, e.return, it);
            }
          }
          return;
        }
        case N: {
          if (du(t, e), to(e), o & mt && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                Zw(t.containerInfo);
              } catch (it) {
                Cn(e, e.return, it);
              }
          }
          return;
        }
        case A: {
          du(t, e), to(e);
          return;
        }
        case I: {
          du(t, e), to(e);
          var ne = e.child;
          if (ne.flags & Mu) {
            var Me = ne.stateNode, qe = ne.memoizedState, Ie = qe !== null;
            if (Me.isHidden = Ie, Ie) {
              var Lt = ne.alternate !== null && ne.alternate.memoizedState !== null;
              Lt || qO();
            }
          }
          if (o & mt) {
            try {
              pO(e);
            } catch (it) {
              Cn(e, e.return, it);
            }
            Jb(e);
          }
          return;
        }
        case He: {
          var xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Tt
          ) {
            var W = Yr;
            Yr = W || xt, du(t, e), Yr = W;
          } else
            du(t, e);
          if (to(e), o & Mu) {
            var re = e.stateNode, Q = e.memoizedState, pe = Q !== null, Le = e;
            if (re.isHidden = pe, pe && !xt && (Le.mode & Tt) !== Ze) {
              je = Le;
              for (var xe = Le.child; xe !== null; )
                je = xe, yO(xe), xe = xe.sibling;
            }
            lO(Le, pe);
          }
          return;
        }
        case We: {
          du(t, e), to(e), o & mt && Jb(e);
          return;
        }
        case wt:
          return;
        default: {
          du(t, e), to(e);
          return;
        }
      }
    }
    function to(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          fO(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & Va && (e.flags &= ~Va);
    }
    function mO(e, t, a) {
      Zf = a, Jf = t, je = e, tR(e, t, a), Zf = null, Jf = null;
    }
    function tR(e, t, a) {
      for (var i = (e.mode & Tt) !== Ze; je !== null; ) {
        var o = je, s = o.child;
        if (o.tag === He && i) {
          var d = o.memoizedState !== null, m = d || Xm;
          if (m) {
            cE(e, t, a);
            continue;
          } else {
            var y = o.alternate, b = y !== null && y.memoizedState !== null, T = b || Yr, P = Xm, z = Yr;
            Xm = m, Yr = T, Yr && !z && (je = o, gO(o));
            for (var q = s; q !== null; )
              je = q, tR(
                q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), q = q.sibling;
            je = o, Xm = P, Yr = z, cE(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & _r) !== Ye && s !== null ? (s.return = o, je = s) : cE(e, t, a);
      }
    }
    function cE(e, t, a) {
      for (; je !== null; ) {
        var i = je;
        if ((i.flags & _r) !== Ye) {
          var o = i.alternate;
          qt(i);
          try {
            uO(t, o, i, a);
          } catch (d) {
            Cn(i, i.return, d);
          }
          Ln();
        }
        if (i === e) {
          je = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, je = s;
          return;
        }
        je = i.return;
      }
    }
    function yO(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        switch (t.tag) {
          case M:
          case te:
          case me:
          case Ee: {
            if (t.mode & et)
              try {
                eo(), cu(mr, t, t.return);
              } finally {
                Ju(t);
              }
            else
              cu(mr, t, t.return);
            break;
          }
          case x: {
            ed(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && oE(t, t.return, i);
            break;
          }
          case F: {
            ed(t, t.return);
            break;
          }
          case He: {
            var o = t.memoizedState !== null;
            if (o) {
              nR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, je = a) : nR(e);
      }
    }
    function nR(e) {
      for (; je !== null; ) {
        var t = je;
        if (t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function gO(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        if (t.tag === He) {
          var i = t.memoizedState !== null;
          if (i) {
            rR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, je = a) : rR(e);
      }
    }
    function rR(e) {
      for (; je !== null; ) {
        var t = je;
        qt(t);
        try {
          oO(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (Ln(), t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function SO(e, t, a, i) {
      je = t, EO(t, e, a, i);
    }
    function EO(e, t, a, i) {
      for (; je !== null; ) {
        var o = je, s = o.child;
        (o.subtreeFlags & Ha) !== Ye && s !== null ? (s.return = o, je = s) : CO(e, t, a, i);
      }
    }
    function CO(e, t, a, i) {
      for (; je !== null; ) {
        var o = je;
        if ((o.flags & Tn) !== Ye) {
          qt(o);
          try {
            bO(t, o, a, i);
          } catch (d) {
            Cn(o, o.return, d);
          }
          Ln();
        }
        if (o === e) {
          je = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, je = s;
          return;
        }
        je = o.return;
      }
    }
    function bO(e, t, a, i) {
      switch (t.tag) {
        case M:
        case te:
        case Ee: {
          if (t.mode & et) {
            HS();
            try {
              Zl(Br | hr, t);
            } finally {
              VS(t);
            }
          } else
            Zl(Br | hr, t);
          break;
        }
      }
    }
    function RO(e) {
      je = e, TO();
    }
    function TO() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        if ((je.flags & Yt) !== Ye) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              je = o, xO(o, e);
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
            je = e;
          }
        }
        (e.subtreeFlags & Ha) !== Ye && t !== null ? (t.return = e, je = t) : wO();
      }
    }
    function wO() {
      for (; je !== null; ) {
        var e = je;
        (e.flags & Tn) !== Ye && (qt(e), _O(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function _O(e) {
      switch (e.tag) {
        case M:
        case te:
        case Ee: {
          e.mode & et ? (HS(), cu(Br | hr, e, e.return), VS(e)) : cu(Br | hr, e, e.return);
          break;
        }
      }
    }
    function xO(e, t) {
      for (; je !== null; ) {
        var a = je;
        qt(a), DO(a, t), Ln();
        var i = a.child;
        i !== null ? (i.return = a, je = i) : OO(e);
      }
    }
    function OO(e) {
      for (; je !== null; ) {
        var t = je, a = t.sibling, i = t.return;
        if (qb(t), t === e) {
          je = null;
          return;
        }
        if (a !== null) {
          a.return = i, je = a;
          return;
        }
        je = i;
      }
    }
    function DO(e, t) {
      switch (e.tag) {
        case M:
        case te:
        case Ee: {
          e.mode & et ? (HS(), cu(Br, e, t), VS(e)) : cu(Br, e, t);
          break;
        }
      }
    }
    function kO(e) {
      switch (e.tag) {
        case M:
        case te:
        case Ee: {
          try {
            Zl(mr | hr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case x: {
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
    function NO(e) {
      switch (e.tag) {
        case M:
        case te:
        case Ee: {
          try {
            Zl(Br | hr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function MO(e) {
      switch (e.tag) {
        case M:
        case te:
        case Ee: {
          try {
            cu(mr | hr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case x: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && oE(e, e.return, t);
          break;
        }
      }
    }
    function LO(e) {
      switch (e.tag) {
        case M:
        case te:
        case Ee:
          try {
            cu(Br | hr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var av = Symbol.for;
      av("selector.component"), av("selector.has_pseudo_class"), av("selector.role"), av("selector.test_id"), av("selector.text");
    }
    var AO = [];
    function zO() {
      AO.forEach(function(e) {
        return e();
      });
    }
    var UO = p.ReactCurrentActQueue;
    function jO(e) {
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
        return !e && UO.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var PO = Math.ceil, fE = p.ReactCurrentDispatcher, dE = p.ReactCurrentOwner, Qr = p.ReactCurrentBatchConfig, pu = p.ReactCurrentActQueue, Sr = (
      /*             */
      0
    ), iR = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), Ui = (
      /*                */
      4
    ), Yo = 0, iv = 1, sc = 2, Jm = 3, uv = 4, uR = 5, pE = 6, Mt = Sr, ka = null, Hn = null, Er = ae, no = ae, vE = Bl(ae), Cr = Yo, ov = null, ey = ae, lv = ae, ty = ae, sv = null, Za = null, hE = 0, oR = 500, lR = 1 / 0, FO = 500, Wo = null;
    function cv() {
      lR = Dn() + FO;
    }
    function sR() {
      return lR;
    }
    var ny = !1, mE = null, td = null, cc = !1, es = null, fv = ae, yE = [], gE = null, VO = 50, dv = 0, SE = null, EE = !1, ry = !1, HO = 50, nd = 0, ay = null, pv = fn, iy = ae, cR = !1;
    function uy() {
      return ka;
    }
    function Na() {
      return (Mt & (Gr | Ui)) !== Sr ? Dn() : (pv !== fn || (pv = Dn()), pv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & Tt) === Ze)
        return rt;
      if ((Mt & Gr) !== Sr && Er !== ae)
        return qn(Er);
      var a = j_() !== U_;
      if (a) {
        if (Qr.transition !== null) {
          var i = Qr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return iy === Nt && (iy = Jd()), iy;
      }
      var o = Ya();
      if (o !== Nt)
        return o;
      var s = Cw();
      return s;
    }
    function IO(e) {
      var t = e.mode;
      return (t & Tt) === Ze ? rt : Hy();
    }
    function br(e, t, a, i) {
      dD(), cR && g("useInsertionEffect must not schedule updates."), EE && (ry = !0), Oo(e, a, i), (Mt & Gr) !== ae && e === ka ? hD(t) : (pr && ap(e, t, a), mD(t), e === ka && ((Mt & Gr) === Sr && (lv = yt(lv, a)), Cr === uv && ns(e, Er)), Ja(e, i), a === rt && Mt === Sr && (t.mode & Tt) === Ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !pu.isBatchingLegacy && (cv(), sC()));
    }
    function BO(e, t, a) {
      var i = e.current;
      i.lanes = t, Oo(e, t, a), Ja(e, a);
    }
    function $O(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & Gr) !== Sr
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      Py(e, t);
      var i = zs(e, e === ka ? Er : ae);
      if (i === ae) {
        a !== null && _R(a), e.callbackNode = null, e.callbackPriority = Nt;
        return;
      }
      var o = Yn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(pu.current !== null && a !== xE)) {
        a == null && s !== rt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && _R(a);
      var d;
      if (o === rt)
        e.tag === $l ? (pu.isBatchingLegacy !== null && (pu.didScheduleLegacyUpdate = !0), S_(pR.bind(null, e))) : lC(pR.bind(null, e)), pu.current !== null ? pu.current.push(Yl) : Rw(function() {
          (Mt & (Gr | Ui)) === Sr && Yl();
        }), d = null;
      else {
        var m;
        switch (Vs(i)) {
          case xr:
            m = Fc;
            break;
          case vr:
            m = _a;
            break;
          case Zi:
            m = _i;
            break;
          case Ps:
            m = Au;
            break;
          default:
            m = _i;
            break;
        }
        d = OE(m, fR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = d;
    }
    function fR(e, t) {
      if (dx(), pv = fn, iy = ae, (Mt & (Gr | Ui)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Go();
      if (i && e.callbackNode !== a)
        return null;
      var o = zs(e, e === ka ? Er : ae);
      if (o === ae)
        return null;
      var s = !js(e, o) && !gh(e, o) && !t, d = s ? eD(e, o) : ly(e, o);
      if (d !== Yo) {
        if (d === sc) {
          var m = Xd(e);
          m !== ae && (o = m, d = CE(e, m));
        }
        if (d === iv) {
          var y = ov;
          throw fc(e, ae), ns(e, o), Ja(e, Dn()), y;
        }
        if (d === pE)
          ns(e, o);
        else {
          var b = !js(e, o), T = e.current.alternate;
          if (b && !WO(T)) {
            if (d = ly(e, o), d === sc) {
              var P = Xd(e);
              P !== ae && (o = P, d = CE(e, P));
            }
            if (d === iv) {
              var z = ov;
              throw fc(e, ae), ns(e, o), Ja(e, Dn()), z;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, YO(e, d, o);
        }
      }
      return Ja(e, Dn()), e.callbackNode === a ? fR.bind(null, e) : null;
    }
    function CE(e, t) {
      var a = sv;
      if (Xn(e)) {
        var i = fc(e, t);
        i.flags |= An, d_(e.containerInfo);
      }
      var o = ly(e, t);
      if (o !== sc) {
        var s = Za;
        Za = a, s !== null && dR(s);
      }
      return o;
    }
    function dR(e) {
      Za === null ? Za = e : Za.push.apply(Za, e);
    }
    function YO(e, t, a) {
      switch (t) {
        case Yo:
        case iv:
          throw new Error("Root did not complete. This is a bug in React.");
        case sc: {
          dc(e, Za, Wo);
          break;
        }
        case Jm: {
          if (ns(e, a), cf(a) && // do not delay if we're inside an act() scope
          !xR()) {
            var i = hE + oR - Dn();
            if (i > 10) {
              var o = zs(e, ae);
              if (o !== ae)
                break;
              var s = e.suspendedLanes;
              if (!xo(s, a)) {
                Na(), np(e, s);
                break;
              }
              e.timeoutHandle = gg(dc.bind(null, e, Za, Wo), i);
              break;
            }
          }
          dc(e, Za, Wo);
          break;
        }
        case uv: {
          if (ns(e, a), yh(a))
            break;
          if (!xR()) {
            var d = mh(e, a), m = d, y = Dn() - m, b = fD(y) - y;
            if (b > 10) {
              e.timeoutHandle = gg(dc.bind(null, e, Za, Wo), b);
              break;
            }
          }
          dc(e, Za, Wo);
          break;
        }
        case uR: {
          dc(e, Za, Wo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function WO(e) {
      for (var t = e; ; ) {
        if (t.flags & Os) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], d = s.getSnapshot, m = s.value;
                try {
                  if (!Ue(d(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Os && y !== null) {
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
    function ns(e, t) {
      t = _l(t, ty), t = _l(t, lv), tp(e, t);
    }
    function pR(e) {
      if (px(), (Mt & (Gr | Ui)) !== Sr)
        throw new Error("Should not already be working.");
      Go();
      var t = zs(e, ae);
      if (!fa(t, rt))
        return Ja(e, Dn()), null;
      var a = ly(e, t);
      if (e.tag !== $l && a === sc) {
        var i = Xd(e);
        i !== ae && (t = i, a = CE(e, i));
      }
      if (a === iv) {
        var o = ov;
        throw fc(e, ae), ns(e, t), Ja(e, Dn()), o;
      }
      if (a === pE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, dc(e, Za, Wo), Ja(e, Dn()), null;
    }
    function QO(e, t) {
      t !== ae && (xl(e, yt(t, rt)), Ja(e, Dn()), (Mt & (Gr | Ui)) === Sr && (cv(), Yl()));
    }
    function bE(e, t) {
      var a = Mt;
      Mt |= iR;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !pu.isBatchingLegacy && (cv(), sC());
      }
    }
    function GO(e, t, a, i, o) {
      var s = Ya(), d = Qr.transition;
      try {
        return Qr.transition = null, Kn(xr), e(t, a, i, o);
      } finally {
        Kn(s), Qr.transition = d, Mt === Sr && cv();
      }
    }
    function Qo(e) {
      es !== null && es.tag === $l && (Mt & (Gr | Ui)) === Sr && Go();
      var t = Mt;
      Mt |= iR;
      var a = Qr.transition, i = Ya();
      try {
        return Qr.transition = null, Kn(xr), e ? e() : void 0;
      } finally {
        Kn(i), Qr.transition = a, Mt = t, (Mt & (Gr | Ui)) === Sr && Yl();
      }
    }
    function vR() {
      return (Mt & (Gr | Ui)) !== Sr;
    }
    function oy(e, t) {
      pa(vE, no, e), no = yt(no, t);
    }
    function RE(e) {
      no = vE.current, da(vE, e);
    }
    function fc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, bw(a)), Hn !== null)
        for (var i = Hn.return; i !== null; ) {
          var o = i.alternate;
          Bb(o, i), i = i.return;
        }
      ka = e;
      var s = pc(e.current, null);
      return Hn = s, Er = no = t, Cr = Yo, ov = null, ey = ae, lv = ae, ty = ae, sv = null, Za = null, H_(), iu.discardPendingWarnings(), s;
    }
    function hR(e, t) {
      do {
        var a = Hn;
        try {
          if (hm(), YC(), Ln(), dE.current = null, a === null || a.return === null) {
            Cr = iv, ov = t, Hn = null;
            return;
          }
          if (ft && a.mode & et && Qm(a, !0), Ct)
            if (go(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ph(a, i, Er);
            } else
              $c(a, t, Er);
          gx(e, a.return, a, t, Er), SR(a);
        } catch (o) {
          t = o, Hn === a && a !== null ? (a = a.return, Hn = a) : a = Hn;
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
    function qO() {
      hE = Dn();
    }
    function vv(e) {
      ey = yt(e, ey);
    }
    function KO() {
      Cr === Yo && (Cr = Jm);
    }
    function TE() {
      (Cr === Yo || Cr === Jm || Cr === sc) && (Cr = uv), ka !== null && (Us(ey) || Us(lv)) && ns(ka, Er);
    }
    function XO(e) {
      Cr !== uv && (Cr = sc), sv === null ? sv = [e] : sv.push(e);
    }
    function ZO() {
      return Cr === Yo;
    }
    function ly(e, t) {
      var a = Mt;
      Mt |= Gr;
      var i = mR();
      if (ka !== e || Er !== t) {
        if (pr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (hv(e, Er), o.clear()), pf(e, t);
        }
        Wo = ip(), fc(e, t);
      }
      ci(t);
      do
        try {
          JO();
          break;
        } catch (s) {
          hR(e, s);
        }
      while (!0);
      if (hm(), Mt = a, yR(i), Hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Cl(), ka = null, Er = ae, Cr;
    }
    function JO() {
      for (; Hn !== null; )
        gR(Hn);
    }
    function eD(e, t) {
      var a = Mt;
      Mt |= Gr;
      var i = mR();
      if (ka !== e || Er !== t) {
        if (pr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (hv(e, Er), o.clear()), pf(e, t);
        }
        Wo = ip(), cv(), fc(e, t);
      }
      ci(t);
      do
        try {
          tD();
          break;
        } catch (s) {
          hR(e, s);
        }
      while (!0);
      return hm(), yR(i), Mt = a, Hn !== null ? (Ns(), Yo) : (Cl(), ka = null, Er = ae, Cr);
    }
    function tD() {
      for (; Hn !== null && !Pc(); )
        gR(Hn);
    }
    function gR(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & et) !== Ze ? (FS(e), a = wE(t, e, no), Qm(e, !0)) : a = wE(t, e, no), Ln(), e.memoizedProps = e.pendingProps, a === null ? SR(e) : Hn = a, dE.current = null;
    }
    function SR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ra) === Ye) {
          qt(t);
          var o = void 0;
          if ((t.mode & et) === Ze ? o = Ib(a, t, no) : (FS(t), o = Ib(a, t, no), Qm(t, !1)), Ln(), o !== null) {
            Hn = o;
            return;
          }
        } else {
          var s = Kx(a, t);
          if (s !== null) {
            s.flags &= ah, Hn = s;
            return;
          }
          if ((t.mode & et) !== Ze) {
            Qm(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Ra, i.subtreeFlags = Ye, i.deletions = null;
          else {
            Cr = pE, Hn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          Hn = y;
          return;
        }
        t = i, Hn = t;
      } while (t !== null);
      Cr === Yo && (Cr = uR);
    }
    function dc(e, t, a) {
      var i = Ya(), o = Qr.transition;
      try {
        Qr.transition = null, Kn(xr), nD(e, t, a, i);
      } finally {
        Qr.transition = o, Kn(i);
      }
      return null;
    }
    function nD(e, t, a, i) {
      do
        Go();
      while (es !== null);
      if (pD(), (Mt & (Gr | Ui)) !== Sr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Hc(s), o === null)
        return Wd(), null;
      if (s === ae && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Nt;
      var d = yt(o.lanes, o.childLanes);
      rp(e, d), e === ka && (ka = null, Hn = null, Er = ae), ((o.subtreeFlags & Ha) !== Ye || (o.flags & Ha) !== Ye) && (cc || (cc = !0, gE = a, OE(_i, function() {
        return Go(), null;
      })));
      var m = (o.subtreeFlags & (gl | oa | _r | Ha)) !== Ye, y = (o.flags & (gl | oa | _r | Ha)) !== Ye;
      if (m || y) {
        var b = Qr.transition;
        Qr.transition = null;
        var T = Ya();
        Kn(xr);
        var P = Mt;
        Mt |= Ui, dE.current = null, tO(e, o), mb(), hO(e, o, s), hw(e.containerInfo), e.current = o, vh(s), mO(o, e, s), El(), oh(), Mt = P, Kn(T), Qr.transition = b;
      } else
        e.current = o, mb();
      var z = cc;
      if (cc ? (cc = !1, es = e, fv = s) : (nd = 0, ay = null), d = e.pendingLanes, d === ae && (td = null), z || RR(e.current, !1), qi(o.stateNode, i), pr && e.memoizedUpdaters.clear(), zO(), Ja(e, Dn()), t !== null)
        for (var q = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ne = t[X], Me = ne.stack, qe = ne.digest;
          q(ne.value, {
            componentStack: Me,
            digest: qe
          });
        }
      if (ny) {
        ny = !1;
        var Ie = mE;
        throw mE = null, Ie;
      }
      return fa(fv, rt) && e.tag !== $l && Go(), d = e.pendingLanes, fa(d, rt) ? (fx(), e === SE ? dv++ : (dv = 0, SE = e)) : dv = 0, Yl(), Wd(), null;
    }
    function Go() {
      if (es !== null) {
        var e = Vs(fv), t = By(Zi, e), a = Qr.transition, i = Ya();
        try {
          return Qr.transition = null, Kn(t), aD();
        } finally {
          Kn(i), Qr.transition = a;
        }
      }
      return !1;
    }
    function rD(e) {
      yE.push(e), cc || (cc = !0, OE(_i, function() {
        return Go(), null;
      }));
    }
    function aD() {
      if (es === null)
        return !1;
      var e = gE;
      gE = null;
      var t = es, a = fv;
      if (es = null, fv = ae, (Mt & (Gr | Ui)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      EE = !0, ry = !1, hh(a);
      var i = Mt;
      Mt |= Ui, RO(t.current), SO(t, t.current, a, e);
      {
        var o = yE;
        yE = [];
        for (var s = 0; s < o.length; s++) {
          var d = o[s];
          iO(t, d);
        }
      }
      ks(), RR(t.current, !0), Mt = i, Yl(), ry ? t === ay ? nd++ : (nd = 0, ay = t) : nd = 0, EE = !1, ry = !1, Uu(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ER(e) {
      return td !== null && td.has(e);
    }
    function iD(e) {
      td === null ? td = /* @__PURE__ */ new Set([e]) : td.add(e);
    }
    function uD(e) {
      ny || (ny = !0, mE = e);
    }
    var oD = uD;
    function CR(e, t, a) {
      var i = oc(a, t), o = gb(e, i, rt), s = Ql(e, o, rt), d = Na();
      s !== null && (Oo(s, rt, d), Ja(s, d));
    }
    function Cn(e, t, a) {
      if (Zx(a), mv(!1), e.tag === N) {
        CR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === N) {
          CR(i, e, a);
          return;
        } else if (i.tag === x) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ER(s)) {
            var d = oc(a, e), m = YS(i, d, rt), y = Ql(i, m, rt), b = Na();
            y !== null && (Oo(y, rt, b), Ja(y, b));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function lD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Na();
      np(e, a), yD(e), ka === e && xo(Er, a) && (Cr === uv || Cr === Jm && cf(Er) && Dn() - hE < oR ? fc(e, ae) : ty = yt(ty, a)), Ja(e, o);
    }
    function bR(e, t) {
      t === Nt && (t = IO(e));
      var a = Na(), i = Ka(e, t);
      i !== null && (Oo(i, t, a), Ja(i, a));
    }
    function sD(e) {
      var t = e.memoizedState, a = Nt;
      t !== null && (a = t.retryLane), bR(e, a);
    }
    function cD(e, t) {
      var a = Nt, i;
      switch (e.tag) {
        case I:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case We:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), bR(e, a);
    }
    function fD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : PO(e / 1960) * 1960;
    }
    function dD() {
      if (dv > VO)
        throw dv = 0, SE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      nd > HO && (nd = 0, ay = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function pD() {
      iu.flushLegacyContextWarning(), iu.flushPendingUnsafeLifecycleWarnings();
    }
    function RR(e, t) {
      qt(e), sy(e, ua, MO), t && sy(e, yo, LO), sy(e, ua, kO), t && sy(e, yo, NO), Ln();
    }
    function sy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ye ? i = i.child : ((i.flags & t) !== Ye && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var cy = null;
    function TR(e) {
      {
        if ((Mt & Gr) !== Sr || !(e.mode & Tt))
          return;
        var t = e.tag;
        if (t !== U && t !== N && t !== x && t !== M && t !== te && t !== me && t !== Ee)
          return;
        var a = st(e) || "ReactComponent";
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
      var vD = null;
      wE = function(e, t, a) {
        var i = MR(vD, t);
        try {
          return jb(e, t, a);
        } catch (s) {
          if (x_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), YC(), Bb(e, t), MR(t, i), t.mode & et && FS(t), mo(null, jb, null, e, t, a), Uy()) {
            var o = zd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var wR = !1, _E;
    _E = /* @__PURE__ */ new Set();
    function hD(e) {
      if (ta && !lx())
        switch (e.tag) {
          case M:
          case te:
          case Ee: {
            var t = Hn && st(Hn) || "Unknown", a = t;
            if (!_E.has(a)) {
              _E.add(a);
              var i = st(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case x: {
            wR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), wR = !0);
            break;
          }
        }
    }
    function hv(e, t) {
      if (pr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ap(e, i, t);
        });
      }
    }
    var xE = {};
    function OE(e, t) {
      {
        var a = pu.current;
        return a !== null ? (a.push(t), xE) : jc(e, t);
      }
    }
    function _R(e) {
      if (e !== xE)
        return uh(e);
    }
    function xR() {
      return pu.current !== null;
    }
    function mD(e) {
      {
        if (e.mode & Tt) {
          if (!aR())
            return;
        } else if (!jO() || Mt !== Sr || e.tag !== M && e.tag !== te && e.tag !== Ee)
          return;
        if (pu.current === null) {
          var t = On;
          try {
            qt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, st(e));
          } finally {
            t ? qt(e) : Ln();
          }
        }
      }
    }
    function yD(e) {
      e.tag !== $l && aR() && pu.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function mv(e) {
      cR = e;
    }
    var ji = null, rd = null, gD = function(e) {
      ji = e;
    };
    function ad(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function DE(e) {
      return ad(e);
    }
    function kE(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ad(e.render);
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
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case x: {
            typeof i == "function" && (o = !0);
            break;
          }
          case M: {
            (typeof i == "function" || s === Ge) && (o = !0);
            break;
          }
          case te: {
            (s === Ne || s === Ge) && (o = !0);
            break;
          }
          case me:
          case Ee: {
            (s === ht || s === Ge) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var d = ji(a);
          if (d !== void 0 && d === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function DR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        rd === null && (rd = /* @__PURE__ */ new WeakSet()), rd.add(e);
      }
    }
    var SD = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Go(), Qo(function() {
          NE(e.current, i, a);
        });
      }
    }, ED = function(e, t) {
      {
        if (e.context !== di)
          return;
        Go(), Qo(function() {
          yv(t, e, null, null);
        });
      }
    };
    function NE(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, d = e.tag, m = e.type, y = null;
        switch (d) {
          case M:
          case Ee:
          case x:
            y = m;
            break;
          case te:
            y = m.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (y !== null) {
          var P = ji(y);
          P !== void 0 && (a.has(P) ? T = !0 : t.has(P) && (d === x ? T = !0 : b = !0));
        }
        if (rd !== null && (rd.has(e) || i !== null && rd.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var z = Ka(e, rt);
          z !== null && br(z, e, rt, fn);
        }
        o !== null && !T && NE(o, t, a), s !== null && NE(s, t, a);
      }
    }
    var CD = function(e, t) {
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
          case Ee:
          case x:
            m = d;
            break;
          case te:
            m = d.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? bD(e, a) : i !== null && ME(i, t, a), o !== null && ME(o, t, a);
      }
    }
    function bD(e, t) {
      {
        var a = RD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case F:
              t.add(i.stateNode);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
            case N:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function RD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === F)
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
    function TD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ye, this.subtreeFlags = Ye, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !LE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var pi = function(e, t, a, i) {
      return new TD(e, t, a, i);
    };
    function AE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function wD(e) {
      return typeof e == "function" && !AE(e) && e.defaultProps === void 0;
    }
    function _D(e) {
      if (typeof e == "function")
        return AE(e) ? x : M;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ne)
          return te;
        if (t === ht)
          return me;
      }
      return U;
    }
    function pc(e, t) {
      var a = e.alternate;
      a === null ? (a = pi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ye, a.subtreeFlags = Ye, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & dr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case U:
        case M:
        case Ee:
          a.type = ad(e.type);
          break;
        case x:
          a.type = DE(e.type);
          break;
        case te:
          a.type = kE(e.type);
          break;
      }
      return a;
    }
    function xD(e, t) {
      e.flags &= dr | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = Ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ye, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function OD(e, t, a) {
      var i;
      return e === om ? (i = Tt, t === !0 && (i |= kn, i |= Ba)) : i = Ze, pr && (i |= et), pi(N, null, null, i);
    }
    function zE(e, t, a, i, o, s) {
      var d = U, m = e;
      if (typeof e == "function")
        AE(e) ? (d = x, m = DE(m)) : m = ad(m);
      else if (typeof e == "string")
        d = F;
      else
        e:
          switch (e) {
            case ba:
              return rs(a.children, o, s, t);
            case Si:
              d = V, o |= kn, (o & Tt) !== Ze && (o |= Ba);
              break;
            case D:
              return DD(a, o, s, t);
            case vt:
              return kD(a, o, s, t);
            case kt:
              return ND(a, o, s, t);
            case hn:
              return NR(a, o, s, t);
            case fr:
            case Bn:
            case Ei:
            case Jo:
            case vn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case se:
                    d = oe;
                    break e;
                  case Se:
                    d = le;
                    break e;
                  case Ne:
                    d = te, m = kE(m);
                    break e;
                  case ht:
                    d = me;
                    break e;
                  case Ge:
                    d = Ke, m = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? st(i) : null;
                b && (y += `

Check the render method of \`` + b + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var T = pi(d, a, t, o);
      return T.elementType = e, T.type = m, T.lanes = s, T._debugOwner = i, T;
    }
    function UE(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, d = e.props, m = zE(o, s, d, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function rs(e, t, a, i) {
      var o = pi(Y, e, i, t);
      return o.lanes = a, o;
    }
    function DD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = pi(J, e, i, t | et);
      return o.elementType = D, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function kD(e, t, a, i) {
      var o = pi(I, e, i, t);
      return o.elementType = vt, o.lanes = a, o;
    }
    function ND(e, t, a, i) {
      var o = pi(We, e, i, t);
      return o.elementType = kt, o.lanes = a, o;
    }
    function NR(e, t, a, i) {
      var o = pi(He, e, i, t);
      o.elementType = hn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function jE(e, t, a) {
      var i = pi(B, e, null, t);
      return i.lanes = a, i;
    }
    function MD() {
      var e = pi(F, null, null, Ze);
      return e.elementType = "DELETED", e;
    }
    function LD(e) {
      var t = pi(at, null, null, Ze);
      return t.stateNode = e, t;
    }
    function PE(e, t, a) {
      var i = e.children !== null ? e.children : [], o = pi(A, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function MR(e, t) {
      return e === null && (e = pi(U, null, null, Ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function AD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Nt, this.eventTimes = df(ae), this.expirationTimes = df(fn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = df(ae), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Sn; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case om:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case $l:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function LR(e, t, a, i, o, s, d, m, y, b) {
      var T = new AD(e, t, a, m, y), P = OD(t, s);
      T.current = P, P.stateNode = T;
      {
        var z = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        P.memoizedState = z;
      }
      return Wg(P), T;
    }
    var FE = "18.2.0";
    function zD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ur,
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
        return di;
      var t = Pa(e), a = g_(t);
      if (t.tag === x) {
        var i = t.type;
        if (qu(i))
          return uC(t, i, a);
      }
      return a;
    }
    function UD(e, t) {
      {
        var a = Pa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Ia(a);
        if (o === null)
          return null;
        if (o.mode & kn) {
          var s = st(a) || "Component";
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
      var T = !0, P = LR(a, i, T, e, o, s, d, m, y);
      P.context = AR(null);
      var z = P.current, q = Na(), X = ts(z), ne = Bo(q, X);
      return ne.callback = t ?? null, Ql(z, ne, X), BO(P, X, q), P;
    }
    function yv(e, t, a, i) {
      lh(t, e);
      var o = t.current, s = Na(), d = ts(o);
      So(d);
      var m = AR(a);
      t.context === null ? t.context = m : t.pendingContext = m, ta && On !== null && !VE && (VE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, st(On) || "Unknown"));
      var y = Bo(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var b = Ql(o, y, d);
      return b !== null && (br(b, o, d, s), Em(b, o, d)), d;
    }
    function fy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case F:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function jD(e) {
      switch (e.tag) {
        case N: {
          var t = e.stateNode;
          if (Xn(t)) {
            var a = Fy(t);
            QO(t, a);
          }
          break;
        }
        case I: {
          Qo(function() {
            var o = Ka(e, rt);
            if (o !== null) {
              var s = Na();
              br(o, e, rt, s);
            }
          });
          var i = rt;
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
    function PD(e) {
      if (e.tag === I) {
        var t = bl, a = Ka(e, t);
        if (a !== null) {
          var i = Na();
          br(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function FD(e) {
      if (e.tag === I) {
        var t = ts(e), a = Ka(e, t);
        if (a !== null) {
          var i = Na();
          br(a, e, t, i);
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
    function VD(e) {
      return FR(e);
    }
    var VR = function(e) {
      return !1;
    };
    function HD(e) {
      return VR(e);
    }
    var HR = null, IR = null, BR = null, $R = null, YR = null, WR = null, QR = null, GR = null, qR = null;
    {
      var KR = function(e, t, a) {
        var i = t[a], o = Dt(e) ? e.slice() : bt({}, e);
        return a + 1 === t.length ? (Dt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = KR(e[i], t, a + 1), o);
      }, XR = function(e, t) {
        return KR(e, t, 0);
      }, ZR = function(e, t, a, i) {
        var o = t[i], s = Dt(e) ? e.slice() : bt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[o], Dt(s) ? s.splice(o, 1) : delete s[o];
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
        var o = t[a], s = Dt(e) ? e.slice() : bt({}, e);
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
          o.memoizedState = s, o.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var d = Ka(e, rt);
          d !== null && br(d, e, rt, fn);
        }
      }, IR = function(e, t, a) {
        var i = BE(e, t);
        if (i !== null) {
          var o = XR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = bt({}, e.memoizedProps);
          var s = Ka(e, rt);
          s !== null && br(s, e, rt, fn);
        }
      }, BR = function(e, t, a, i) {
        var o = BE(e, t);
        if (o !== null) {
          var s = JR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var d = Ka(e, rt);
          d !== null && br(d, e, rt, fn);
        }
      }, $R = function(e, t, a) {
        e.pendingProps = t1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ka(e, rt);
        i !== null && br(i, e, rt, fn);
      }, YR = function(e, t) {
        e.pendingProps = XR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ka(e, rt);
        a !== null && br(a, e, rt, fn);
      }, WR = function(e, t, a) {
        e.pendingProps = JR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ka(e, rt);
        i !== null && br(i, e, rt, fn);
      }, QR = function(e) {
        var t = Ka(e, rt);
        t !== null && br(t, e, rt, fn);
      }, GR = function(e) {
        FR = e;
      }, qR = function(e) {
        VR = e;
      };
    }
    function ID(e) {
      var t = Ia(e);
      return t === null ? null : t.stateNode;
    }
    function BD(e) {
      return null;
    }
    function $D() {
      return On;
    }
    function YD(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return $d({
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
        findHostInstanceByFiber: ID,
        findFiberByHostInstance: t || BD,
        // React Refresh
        findHostInstancesForRefresh: CD,
        scheduleRefresh: SD,
        scheduleRoot: ED,
        setRefreshHandler: gD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: $D,
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
        if (a.nodeType !== $n) {
          var i = PR(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      yv(e, t, null, null);
    }, dy.prototype.unmount = $E.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vR() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Qo(function() {
          yv(null, e, null, null);
        }), tC(t);
      }
    };
    function WD(e, t) {
      if (!py(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      r1(e);
      var a = !1, i = !1, o = "", s = n1;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === gi && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = zR(e, om, null, a, i, o, s);
      em(d.current, e);
      var m = e.nodeType === $n ? e.parentNode : e;
      return wp(m), new $E(d);
    }
    function dy(e) {
      this._internalRoot = e;
    }
    function QD(e) {
      e && Oh(e);
    }
    dy.prototype.unstable_scheduleHydration = QD;
    function GD(e, t, a) {
      if (!py(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      r1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, d = !1, m = "", y = n1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var b = UR(t, null, e, om, i, s, d, m, y);
      if (em(b.current, e), wp(e), o)
        for (var T = 0; T < o.length; T++) {
          var P = o[T];
          nx(b, P);
        }
      return new dy(b);
    }
    function py(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === oi || e.nodeType === so || !Re));
    }
    function gv(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === oi || e.nodeType === so || e.nodeType === $n && e.nodeValue === " react-mount-point-unstable "));
    }
    function r1(e) {
      e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Up(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var qD = p.ReactCurrentOwner, a1;
    a1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== $n) {
        var t = PR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = YE(e), o = !!(i && Il(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function YE(e) {
      return e ? e.nodeType === oi ? e.documentElement : e.firstChild : null;
    }
    function i1() {
    }
    function KD(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var z = fy(d);
            s.call(z);
          };
        }
        var d = UR(
          t,
          i,
          e,
          $l,
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
        var m = e.nodeType === $n ? e.parentNode : e;
        return wp(m), Qo(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var z = fy(T);
            b.call(z);
          };
        }
        var T = zR(
          e,
          $l,
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
        var P = e.nodeType === $n ? e.parentNode : e;
        return wp(P), Qo(function() {
          yv(t, T, a, i);
        }), T;
      }
    }
    function XD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vy(e, t, a, i, o) {
      a1(a), XD(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = KD(a, t, e, o, i);
      else {
        if (d = s, typeof o == "function") {
          var m = o;
          o = function() {
            var y = fy(d);
            m.call(y);
          };
        }
        yv(t, d, e, o);
      }
      return fy(d);
    }
    function ZD(e) {
      {
        var t = qD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ra ? e : UD(e, "findDOMNode");
    }
    function JD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Up(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vy(null, e, t, !0, a);
    }
    function ek(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Up(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vy(null, e, t, !1, a);
    }
    function tk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !xs(e))
        throw new Error("parentComponent must be a valid React Component");
      return vy(e, t, a, !1, i);
    }
    function nk(e) {
      if (!gv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Up(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = YE(e), i = a && !Il(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Qo(function() {
          vy(null, null, e, !1, function() {
            e._reactRootContainer = null, tC(e);
          });
        }), !0;
      } else {
        {
          var o = YE(e), s = !!(o && Il(o)), d = e.nodeType === ra && gv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ae(jD), bh(PD), Is(FD), op(Ya), Th(Fs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), nh(iw), Mc(bE, GO, Qo);
    function rk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!py(t))
        throw new Error("Target container is not a DOM element.");
      return zD(e, t, null, a);
    }
    function ak(e, t, a, i) {
      return tk(e, t, a, i);
    }
    var WE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Il, zf, tm, Nc, Ts, bE]
    };
    function ik(e, t) {
      return WE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), WD(e, t);
    }
    function uk(e, t, a) {
      return WE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), GD(e, t, a);
    }
    function ok(e) {
      return vR() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Qo(e);
    }
    var lk = YD({
      findFiberByHostInstance: Zs,
      bundleType: 1,
      version: FE,
      rendererPackageName: "react-dom"
    });
    if (!lk && Zt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var u1 = window.location.protocol;
      /^(https?|file):$/.test(u1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (u1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WE, ti.createPortal = rk, ti.createRoot = ik, ti.findDOMNode = ZD, ti.flushSync = ok, ti.hydrate = JD, ti.hydrateRoot = uk, ti.render = ek, ti.unmountComponentAtNode = nk, ti.unstable_batchedUpdates = bE, ti.unstable_renderSubtreeIntoContainer = ak, ti.version = FE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ti;
}
function q1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if ({}.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q1);
    } catch (c) {
      console.error(c);
    }
  }
}
({}).NODE_ENV === "production" ? (q1(), s0.exports = Sk()) : s0.exports = Ek();
var K1 = s0.exports, bv = K1;
if ({}.NODE_ENV === "production")
  Tv.createRoot = bv.createRoot, Tv.hydrateRoot = bv.hydrateRoot;
else {
  var my = bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Tv.createRoot = function(c, h) {
    my.usingClientEntryPoint = !0;
    try {
      return bv.createRoot(c, h);
    } finally {
      my.usingClientEntryPoint = !1;
    }
  }, Tv.hydrateRoot = function(c, h, p) {
    my.usingClientEntryPoint = !0;
    try {
      return bv.hydrateRoot(c, h, p);
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
function Ck() {
  if (m1)
    return qE;
  m1 = 1;
  var c = dn;
  function h(N, A) {
    return N === A && (N !== 0 || 1 / N === 1 / A) || N !== N && A !== A;
  }
  var p = typeof Object.is == "function" ? Object.is : h, E = c.useState, R = c.useEffect, w = c.useLayoutEffect, g = c.useDebugValue;
  function H(N, A) {
    var F = A(), B = E({ inst: { value: F, getSnapshot: A } }), Y = B[0].inst, V = B[1];
    return w(function() {
      Y.value = F, Y.getSnapshot = A, M(Y) && V({ inst: Y });
    }, [N, F, A]), R(function() {
      return M(Y) && V({ inst: Y }), N(function() {
        M(Y) && V({ inst: Y });
      });
    }, [N]), g(F), F;
  }
  function M(N) {
    var A = N.getSnapshot;
    N = N.value;
    try {
      var F = A();
      return !p(N, F);
    } catch {
      return !0;
    }
  }
  function x(N, A) {
    return A();
  }
  var U = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? x : H;
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
function bk() {
  return y1 || (y1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = dn, h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(te) {
      {
        for (var J = arguments.length, I = new Array(J > 1 ? J - 1 : 0), me = 1; me < J; me++)
          I[me - 1] = arguments[me];
        E("error", te, I);
      }
    }
    function E(te, J, I) {
      {
        var me = h.ReactDebugCurrentFrame, Ee = me.getStackAddendum();
        Ee !== "" && (J += "%s", I = I.concat([Ee]));
        var Ke = I.map(function(ut) {
          return String(ut);
        });
        Ke.unshift("Warning: " + J), Function.prototype.apply.call(console[te], console, Ke);
      }
    }
    function R(te, J) {
      return te === J && (te !== 0 || 1 / te === 1 / J) || te !== te && J !== J;
    }
    var w = typeof Object.is == "function" ? Object.is : R, g = c.useState, H = c.useEffect, M = c.useLayoutEffect, x = c.useDebugValue, U = !1, N = !1;
    function A(te, J, I) {
      U || c.startTransition !== void 0 && (U = !0, p("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var me = J();
      if (!N) {
        var Ee = J();
        w(me, Ee) || (p("The result of getSnapshot should be cached to avoid an infinite loop"), N = !0);
      }
      var Ke = g({
        inst: {
          value: me,
          getSnapshot: J
        }
      }), ut = Ke[0].inst, at = Ke[1];
      return M(function() {
        ut.value = me, ut.getSnapshot = J, F(ut) && at({
          inst: ut
        });
      }, [te, me, J]), H(function() {
        F(ut) && at({
          inst: ut
        });
        var We = function() {
          F(ut) && at({
            inst: ut
          });
        };
        return te(We);
      }, [te]), x(me), me;
    }
    function F(te) {
      var J = te.getSnapshot, I = te.value;
      try {
        var me = J();
        return !w(I, me);
      } catch {
        return !0;
      }
    }
    function B(te, J, I) {
      return J();
    }
    var Y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", V = !Y, le = V ? B : A, oe = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : le;
    KE.useSyncExternalStore = oe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), KE;
}
({}).NODE_ENV === "production" ? c0.exports = Ck() : c0.exports = bk();
var X1 = c0.exports, f0 = { exports: {} }, XE = {};
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
function Rk() {
  if (g1)
    return XE;
  g1 = 1;
  var c = dn, h = X1;
  function p(x, U) {
    return x === U && (x !== 0 || 1 / x === 1 / U) || x !== x && U !== U;
  }
  var E = typeof Object.is == "function" ? Object.is : p, R = h.useSyncExternalStore, w = c.useRef, g = c.useEffect, H = c.useMemo, M = c.useDebugValue;
  return XE.useSyncExternalStoreWithSelector = function(x, U, N, A, F) {
    var B = w(null);
    if (B.current === null) {
      var Y = { hasValue: !1, value: null };
      B.current = Y;
    } else
      Y = B.current;
    B = H(function() {
      function le(me) {
        if (!oe) {
          if (oe = !0, te = me, me = A(me), F !== void 0 && Y.hasValue) {
            var Ee = Y.value;
            if (F(Ee, me))
              return J = Ee;
          }
          return J = me;
        }
        if (Ee = J, E(te, me))
          return Ee;
        var Ke = A(me);
        return F !== void 0 && F(Ee, Ke) ? Ee : (te = me, J = Ke);
      }
      var oe = !1, te, J, I = N === void 0 ? null : N;
      return [function() {
        return le(U());
      }, I === null ? void 0 : function() {
        return le(I());
      }];
    }, [U, N, A, F]);
    var V = R(x, B[0], B[1]);
    return g(function() {
      Y.hasValue = !0, Y.value = V;
    }, [V]), M(V), V;
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
function Tk() {
  return S1 || (S1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = dn, h = X1;
    function p(U, N) {
      return U === N && (U !== 0 || 1 / U === 1 / N) || U !== U && N !== N;
    }
    var E = typeof Object.is == "function" ? Object.is : p, R = h.useSyncExternalStore, w = c.useRef, g = c.useEffect, H = c.useMemo, M = c.useDebugValue;
    function x(U, N, A, F, B) {
      var Y = w(null), V;
      Y.current === null ? (V = {
        hasValue: !1,
        value: null
      }, Y.current = V) : V = Y.current;
      var le = H(function() {
        var I = !1, me, Ee, Ke = function(wt) {
          if (!I) {
            I = !0, me = wt;
            var He = F(wt);
            if (B !== void 0 && V.hasValue) {
              var tt = V.value;
              if (B(tt, He))
                return Ee = tt, tt;
            }
            return Ee = He, He;
          }
          var Ot = me, gt = Ee;
          if (E(Ot, wt))
            return gt;
          var _e = F(wt);
          return B !== void 0 && B(gt, _e) ? gt : (me = wt, Ee = _e, _e);
        }, ut = A === void 0 ? null : A, at = function() {
          return Ke(N());
        }, We = ut === null ? void 0 : function() {
          return Ke(ut());
        };
        return [at, We];
      }, [N, A, F, B]), oe = le[0], te = le[1], J = R(U, oe, te);
      return g(function() {
        V.hasValue = !0, V.value = J;
      }, [J]), M(J), J;
    }
    ZE.useSyncExternalStoreWithSelector = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ZE;
}
({}).NODE_ENV === "production" ? f0.exports = Rk() : f0.exports = Tk();
var wk = f0.exports;
function _k(c) {
  c();
}
let Z1 = _k;
const xk = (c) => Z1 = c, Ok = () => Z1, E1 = Symbol.for("react-redux-context"), C1 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Dk() {
  var c;
  if (!dn.createContext)
    return {};
  const h = (c = C1[E1]) != null ? c : C1[E1] = /* @__PURE__ */ new Map();
  let p = h.get(dn.createContext);
  return p || (p = dn.createContext(null), {}.NODE_ENV !== "production" && (p.displayName = "ReactRedux"), h.set(dn.createContext, p)), p;
}
const ls = /* @__PURE__ */ Dk();
function S0(c = ls) {
  return function() {
    const p = dn.useContext(c);
    if ({}.NODE_ENV !== "production" && !p)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return p;
  };
}
const J1 = /* @__PURE__ */ S0(), kk = () => {
  throw new Error("uSES not initialized!");
};
let eT = kk;
const Nk = (c) => {
  eT = c;
}, Mk = (c, h) => c === h;
function Lk(c = ls) {
  const h = c === ls ? J1 : S0(c);
  return function(E, R = {}) {
    const {
      equalityFn: w = Mk,
      stabilityCheck: g = void 0,
      noopCheck: H = void 0
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
      subscription: x,
      getServerState: U,
      stabilityCheck: N,
      noopCheck: A
    } = h(), F = dn.useRef(!0), B = dn.useCallback({
      [E.name](V) {
        const le = E(V);
        if ({}.NODE_ENV !== "production") {
          const oe = typeof g > "u" ? N : g;
          if (oe === "always" || oe === "once" && F.current) {
            const J = E(V);
            if (!w(le, J)) {
              let I;
              try {
                throw new Error();
              } catch (me) {
                ({
                  stack: I
                } = me);
              }
              console.warn("Selector " + (E.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: V,
                selected: le,
                selected2: J,
                stack: I
              });
            }
          }
          const te = typeof H > "u" ? A : H;
          if ((te === "always" || te === "once" && F.current) && le === V) {
            let J;
            try {
              throw new Error();
            } catch (I) {
              ({
                stack: J
              } = I);
            }
            console.warn("Selector " + (E.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: J
            });
          }
          F.current && (F.current = !1);
        }
        return le;
      }
    }[E.name], [E, N, g]), Y = eT(x.addNestedSub, M.getState, U || M.getState, B, w);
    return dn.useDebugValue(Y), Y;
  };
}
const yc = /* @__PURE__ */ Lk();
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
function Ak() {
  if (b1)
    return rn;
  b1 = 1;
  var c = typeof Symbol == "function" && Symbol.for, h = c ? Symbol.for("react.element") : 60103, p = c ? Symbol.for("react.portal") : 60106, E = c ? Symbol.for("react.fragment") : 60107, R = c ? Symbol.for("react.strict_mode") : 60108, w = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, H = c ? Symbol.for("react.context") : 60110, M = c ? Symbol.for("react.async_mode") : 60111, x = c ? Symbol.for("react.concurrent_mode") : 60111, U = c ? Symbol.for("react.forward_ref") : 60112, N = c ? Symbol.for("react.suspense") : 60113, A = c ? Symbol.for("react.suspense_list") : 60120, F = c ? Symbol.for("react.memo") : 60115, B = c ? Symbol.for("react.lazy") : 60116, Y = c ? Symbol.for("react.block") : 60121, V = c ? Symbol.for("react.fundamental") : 60117, le = c ? Symbol.for("react.responder") : 60118, oe = c ? Symbol.for("react.scope") : 60119;
  function te(I) {
    if (typeof I == "object" && I !== null) {
      var me = I.$$typeof;
      switch (me) {
        case h:
          switch (I = I.type, I) {
            case M:
            case x:
            case E:
            case w:
            case R:
            case N:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case H:
                case U:
                case B:
                case F:
                case g:
                  return I;
                default:
                  return me;
              }
          }
        case p:
          return me;
      }
    }
  }
  function J(I) {
    return te(I) === x;
  }
  return rn.AsyncMode = M, rn.ConcurrentMode = x, rn.ContextConsumer = H, rn.ContextProvider = g, rn.Element = h, rn.ForwardRef = U, rn.Fragment = E, rn.Lazy = B, rn.Memo = F, rn.Portal = p, rn.Profiler = w, rn.StrictMode = R, rn.Suspense = N, rn.isAsyncMode = function(I) {
    return J(I) || te(I) === M;
  }, rn.isConcurrentMode = J, rn.isContextConsumer = function(I) {
    return te(I) === H;
  }, rn.isContextProvider = function(I) {
    return te(I) === g;
  }, rn.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === h;
  }, rn.isForwardRef = function(I) {
    return te(I) === U;
  }, rn.isFragment = function(I) {
    return te(I) === E;
  }, rn.isLazy = function(I) {
    return te(I) === B;
  }, rn.isMemo = function(I) {
    return te(I) === F;
  }, rn.isPortal = function(I) {
    return te(I) === p;
  }, rn.isProfiler = function(I) {
    return te(I) === w;
  }, rn.isStrictMode = function(I) {
    return te(I) === R;
  }, rn.isSuspense = function(I) {
    return te(I) === N;
  }, rn.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === E || I === x || I === w || I === R || I === N || I === A || typeof I == "object" && I !== null && (I.$$typeof === B || I.$$typeof === F || I.$$typeof === g || I.$$typeof === H || I.$$typeof === U || I.$$typeof === V || I.$$typeof === le || I.$$typeof === oe || I.$$typeof === Y);
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
function zk() {
  return R1 || (R1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, h = c ? Symbol.for("react.element") : 60103, p = c ? Symbol.for("react.portal") : 60106, E = c ? Symbol.for("react.fragment") : 60107, R = c ? Symbol.for("react.strict_mode") : 60108, w = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, H = c ? Symbol.for("react.context") : 60110, M = c ? Symbol.for("react.async_mode") : 60111, x = c ? Symbol.for("react.concurrent_mode") : 60111, U = c ? Symbol.for("react.forward_ref") : 60112, N = c ? Symbol.for("react.suspense") : 60113, A = c ? Symbol.for("react.suspense_list") : 60120, F = c ? Symbol.for("react.memo") : 60115, B = c ? Symbol.for("react.lazy") : 60116, Y = c ? Symbol.for("react.block") : 60121, V = c ? Symbol.for("react.fundamental") : 60117, le = c ? Symbol.for("react.responder") : 60118, oe = c ? Symbol.for("react.scope") : 60119;
    function te(Oe) {
      return typeof Oe == "string" || typeof Oe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Oe === E || Oe === x || Oe === w || Oe === R || Oe === N || Oe === A || typeof Oe == "object" && Oe !== null && (Oe.$$typeof === B || Oe.$$typeof === F || Oe.$$typeof === g || Oe.$$typeof === H || Oe.$$typeof === U || Oe.$$typeof === V || Oe.$$typeof === le || Oe.$$typeof === oe || Oe.$$typeof === Y);
    }
    function J(Oe) {
      if (typeof Oe == "object" && Oe !== null) {
        var Zt = Oe.$$typeof;
        switch (Zt) {
          case h:
            var we = Oe.type;
            switch (we) {
              case M:
              case x:
              case E:
              case w:
              case R:
              case N:
                return we;
              default:
                var pn = we && we.$$typeof;
                switch (pn) {
                  case H:
                  case U:
                  case B:
                  case F:
                  case g:
                    return pn;
                  default:
                    return Zt;
                }
            }
          case p:
            return Zt;
        }
      }
    }
    var I = M, me = x, Ee = H, Ke = g, ut = h, at = U, We = E, wt = B, He = F, tt = p, Ot = w, gt = R, _e = N, ve = !1;
    function Pe(Oe) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(Oe) || J(Oe) === M;
    }
    function k(Oe) {
      return J(Oe) === x;
    }
    function ue(Oe) {
      return J(Oe) === H;
    }
    function Re(Oe) {
      return J(Oe) === g;
    }
    function nt(Oe) {
      return typeof Oe == "object" && Oe !== null && Oe.$$typeof === h;
    }
    function Qe(Oe) {
      return J(Oe) === U;
    }
    function Ct(Oe) {
      return J(Oe) === E;
    }
    function ft(Oe) {
      return J(Oe) === B;
    }
    function St(Oe) {
      return J(Oe) === F;
    }
    function dt(Oe) {
      return J(Oe) === p;
    }
    function Ut(Oe) {
      return J(Oe) === w;
    }
    function er(Oe) {
      return J(Oe) === R;
    }
    function In(Oe) {
      return J(Oe) === N;
    }
    an.AsyncMode = I, an.ConcurrentMode = me, an.ContextConsumer = Ee, an.ContextProvider = Ke, an.Element = ut, an.ForwardRef = at, an.Fragment = We, an.Lazy = wt, an.Memo = He, an.Portal = tt, an.Profiler = Ot, an.StrictMode = gt, an.Suspense = _e, an.isAsyncMode = Pe, an.isConcurrentMode = k, an.isContextConsumer = ue, an.isContextProvider = Re, an.isElement = nt, an.isForwardRef = Qe, an.isFragment = Ct, an.isLazy = ft, an.isMemo = St, an.isPortal = dt, an.isProfiler = Ut, an.isStrictMode = er, an.isSuspense = In, an.isValidElementType = te, an.typeOf = J;
  }()), an;
}
({}).NODE_ENV === "production" ? d0.exports = Ak() : d0.exports = zk();
var Uk = d0.exports, tT = Uk, jk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Pk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nT = {};
nT[tT.ForwardRef] = jk;
nT[tT.Memo] = Pk;
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
function Fk() {
  if (T1)
    return un;
  T1 = 1;
  var c = Symbol.for("react.element"), h = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), H = Symbol.for("react.server_context"), M = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), B;
  B = Symbol.for("react.module.reference");
  function Y(V) {
    if (typeof V == "object" && V !== null) {
      var le = V.$$typeof;
      switch (le) {
        case c:
          switch (V = V.type, V) {
            case p:
            case R:
            case E:
            case x:
            case U:
              return V;
            default:
              switch (V = V && V.$$typeof, V) {
                case H:
                case g:
                case M:
                case A:
                case N:
                case w:
                  return V;
                default:
                  return le;
              }
          }
        case h:
          return le;
      }
    }
  }
  return un.ContextConsumer = g, un.ContextProvider = w, un.Element = c, un.ForwardRef = M, un.Fragment = p, un.Lazy = A, un.Memo = N, un.Portal = h, un.Profiler = R, un.StrictMode = E, un.Suspense = x, un.SuspenseList = U, un.isAsyncMode = function() {
    return !1;
  }, un.isConcurrentMode = function() {
    return !1;
  }, un.isContextConsumer = function(V) {
    return Y(V) === g;
  }, un.isContextProvider = function(V) {
    return Y(V) === w;
  }, un.isElement = function(V) {
    return typeof V == "object" && V !== null && V.$$typeof === c;
  }, un.isForwardRef = function(V) {
    return Y(V) === M;
  }, un.isFragment = function(V) {
    return Y(V) === p;
  }, un.isLazy = function(V) {
    return Y(V) === A;
  }, un.isMemo = function(V) {
    return Y(V) === N;
  }, un.isPortal = function(V) {
    return Y(V) === h;
  }, un.isProfiler = function(V) {
    return Y(V) === R;
  }, un.isStrictMode = function(V) {
    return Y(V) === E;
  }, un.isSuspense = function(V) {
    return Y(V) === x;
  }, un.isSuspenseList = function(V) {
    return Y(V) === U;
  }, un.isValidElementType = function(V) {
    return typeof V == "string" || typeof V == "function" || V === p || V === R || V === E || V === x || V === U || V === F || typeof V == "object" && V !== null && (V.$$typeof === A || V.$$typeof === N || V.$$typeof === w || V.$$typeof === g || V.$$typeof === M || V.$$typeof === B || V.getModuleId !== void 0);
  }, un.typeOf = Y, un;
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
function Vk() {
  return w1 || (w1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = Symbol.for("react.element"), h = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), g = Symbol.for("react.context"), H = Symbol.for("react.server_context"), M = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), B = !1, Y = !1, V = !1, le = !1, oe = !1, te;
    te = Symbol.for("react.module.reference");
    function J(we) {
      return !!(typeof we == "string" || typeof we == "function" || we === p || we === R || oe || we === E || we === x || we === U || le || we === F || B || Y || V || typeof we == "object" && we !== null && (we.$$typeof === A || we.$$typeof === N || we.$$typeof === w || we.$$typeof === g || we.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      we.$$typeof === te || we.getModuleId !== void 0));
    }
    function I(we) {
      if (typeof we == "object" && we !== null) {
        var pn = we.$$typeof;
        switch (pn) {
          case c:
            var bn = we.type;
            switch (bn) {
              case p:
              case R:
              case E:
              case x:
              case U:
                return bn;
              default:
                var Rn = bn && bn.$$typeof;
                switch (Rn) {
                  case H:
                  case g:
                  case M:
                  case A:
                  case N:
                  case w:
                    return Rn;
                  default:
                    return pn;
                }
            }
          case h:
            return pn;
        }
      }
    }
    var me = g, Ee = w, Ke = c, ut = M, at = p, We = A, wt = N, He = h, tt = R, Ot = E, gt = x, _e = U, ve = !1, Pe = !1;
    function k(we) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(we) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Re(we) {
      return I(we) === g;
    }
    function nt(we) {
      return I(we) === w;
    }
    function Qe(we) {
      return typeof we == "object" && we !== null && we.$$typeof === c;
    }
    function Ct(we) {
      return I(we) === M;
    }
    function ft(we) {
      return I(we) === p;
    }
    function St(we) {
      return I(we) === A;
    }
    function dt(we) {
      return I(we) === N;
    }
    function Ut(we) {
      return I(we) === h;
    }
    function er(we) {
      return I(we) === R;
    }
    function In(we) {
      return I(we) === E;
    }
    function Oe(we) {
      return I(we) === x;
    }
    function Zt(we) {
      return I(we) === U;
    }
    on.ContextConsumer = me, on.ContextProvider = Ee, on.Element = Ke, on.ForwardRef = ut, on.Fragment = at, on.Lazy = We, on.Memo = wt, on.Portal = He, on.Profiler = tt, on.StrictMode = Ot, on.Suspense = gt, on.SuspenseList = _e, on.isAsyncMode = k, on.isConcurrentMode = ue, on.isContextConsumer = Re, on.isContextProvider = nt, on.isElement = Qe, on.isForwardRef = Ct, on.isFragment = ft, on.isLazy = St, on.isMemo = dt, on.isPortal = Ut, on.isProfiler = er, on.isStrictMode = In, on.isSuspense = Oe, on.isSuspenseList = Zt, on.isValidElementType = J, on.typeOf = I;
  }()), on;
}
({}).NODE_ENV === "production" ? Fk() : Vk();
function Hk() {
  const c = Ok();
  let h = null, p = null;
  return {
    clear() {
      h = null, p = null;
    },
    notify() {
      c(() => {
        let E = h;
        for (; E; )
          E.callback(), E = E.next;
      });
    },
    get() {
      let E = [], R = h;
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
      return w.prev ? w.prev.next = w : h = w, function() {
        !R || h === null || (R = !1, w.next ? w.next.prev = w.prev : p = w.prev, w.prev ? w.prev.next = w.next : h = w.next);
      };
    }
  };
}
const _1 = {
  notify() {
  },
  get: () => []
};
function Ik(c, h) {
  let p, E = _1, R = 0, w = !1;
  function g(Y) {
    U();
    const V = E.subscribe(Y);
    let le = !1;
    return () => {
      le || (le = !0, V(), N());
    };
  }
  function H() {
    E.notify();
  }
  function M() {
    B.onStateChange && B.onStateChange();
  }
  function x() {
    return w;
  }
  function U() {
    R++, p || (p = h ? h.addNestedSub(M) : c.subscribe(M), E = Hk());
  }
  function N() {
    R--, p && R === 0 && (p(), p = void 0, E.clear(), E = _1);
  }
  function A() {
    w || (w = !0, U());
  }
  function F() {
    w && (w = !1, N());
  }
  const B = {
    addNestedSub: g,
    notifyNestedSubs: H,
    handleChangeWrapper: M,
    isSubscribed: x,
    trySubscribe: A,
    tryUnsubscribe: F,
    getListeners: () => E
  };
  return B;
}
const Bk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $k = Bk ? dn.useLayoutEffect : dn.useEffect;
function Yk({
  store: c,
  context: h,
  children: p,
  serverState: E,
  stabilityCheck: R = "once",
  noopCheck: w = "once"
}) {
  const g = dn.useMemo(() => {
    const x = Ik(c);
    return {
      store: c,
      subscription: x,
      getServerState: E ? () => E : void 0,
      stabilityCheck: R,
      noopCheck: w
    };
  }, [c, E, R, w]), H = dn.useMemo(() => c.getState(), [c]);
  $k(() => {
    const {
      subscription: x
    } = g;
    return x.onStateChange = x.notifyNestedSubs, x.trySubscribe(), H !== c.getState() && x.notifyNestedSubs(), () => {
      x.tryUnsubscribe(), x.onStateChange = void 0;
    };
  }, [g, H]);
  const M = h || ls;
  return /* @__PURE__ */ dn.createElement(M.Provider, {
    value: g
  }, p);
}
function rT(c = ls) {
  const h = (
    // @ts-ignore
    c === ls ? J1 : (
      // @ts-ignore
      S0(c)
    )
  );
  return function() {
    const {
      store: E
    } = h();
    return E;
  };
}
const Wk = /* @__PURE__ */ rT();
function Qk(c = ls) {
  const h = (
    // @ts-ignore
    c === ls ? Wk : rT(c)
  );
  return function() {
    return h().dispatch;
  };
}
const gc = /* @__PURE__ */ Qk();
Nk(wk.useSyncExternalStoreWithSelector);
xk(K1.unstable_batchedUpdates);
function Lr(c) {
  for (var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), E = 1; E < h; E++)
    p[E - 1] = arguments[E];
  if ({}.NODE_ENV !== "production") {
    var R = nN[c], w = R ? typeof R == "function" ? R.apply(null, p) : R : "unknown error nr: " + c;
    throw Error("[Immer] " + w);
  }
  throw Error("[Immer] minified error nr: " + c + (p.length ? " " + p.map(function(g) {
    return "'" + g + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function ss(c) {
  return !!c && !!c[jn];
}
function Xo(c) {
  var h;
  return !!c && (function(p) {
    if (!p || typeof p != "object")
      return !1;
    var E = Object.getPrototypeOf(p);
    if (E === null)
      return !0;
    var R = Object.hasOwnProperty.call(E, "constructor") && E.constructor;
    return R === Object || typeof R == "function" && Function.toString.call(R) === rN;
  }(c) || Array.isArray(c) || !!c[L1] || !!(!((h = c.constructor) === null || h === void 0) && h[L1]) || E0(c) || C0(c));
}
function mc(c, h, p) {
  p === void 0 && (p = !1), cd(c) === 0 ? (p ? Object.keys : od)(c).forEach(function(E) {
    p && typeof E == "symbol" || h(E, c[E], c);
  }) : c.forEach(function(E, R) {
    return h(R, E, c);
  });
}
function cd(c) {
  var h = c[jn];
  return h ? h.i > 3 ? h.i - 4 : h.i : Array.isArray(c) ? 1 : E0(c) ? 2 : C0(c) ? 3 : 0;
}
function ud(c, h) {
  return cd(c) === 2 ? c.has(h) : Object.prototype.hasOwnProperty.call(c, h);
}
function Gk(c, h) {
  return cd(c) === 2 ? c.get(h) : c[h];
}
function aT(c, h, p) {
  var E = cd(c);
  E === 2 ? c.set(h, p) : E === 3 ? c.add(p) : c[h] = p;
}
function iT(c, h) {
  return c === h ? c !== 0 || 1 / c == 1 / h : c != c && h != h;
}
function E0(c) {
  return eN && c instanceof Map;
}
function C0(c) {
  return tN && c instanceof Set;
}
function as(c) {
  return c.o || c.t;
}
function b0(c) {
  if (Array.isArray(c))
    return Array.prototype.slice.call(c);
  var h = oT(c);
  delete h[jn];
  for (var p = od(h), E = 0; E < p.length; E++) {
    var R = p[E], w = h[R];
    w.writable === !1 && (w.writable = !0, w.configurable = !0), (w.get || w.set) && (h[R] = { configurable: !0, writable: !0, enumerable: w.enumerable, value: c[R] });
  }
  return Object.create(Object.getPrototypeOf(c), h);
}
function R0(c, h) {
  return h === void 0 && (h = !1), T0(c) || ss(c) || !Xo(c) || (cd(c) > 1 && (c.set = c.add = c.clear = c.delete = qk), Object.freeze(c), h && mc(c, function(p, E) {
    return R0(E, !0);
  }, !0)), c;
}
function qk() {
  Lr(2);
}
function T0(c) {
  return c == null || typeof c != "object" || Object.isFrozen(c);
}
function ao(c) {
  var h = m0[c];
  return h || Lr(18, c), h;
}
function Kk(c, h) {
  m0[c] || (m0[c] = h);
}
function p0() {
  return {}.NODE_ENV === "production" || ld || Lr(0), ld;
}
function JE(c, h) {
  h && (ao("Patches"), c.u = [], c.s = [], c.v = h);
}
function gy(c) {
  v0(c), c.p.forEach(Xk), c.p = null;
}
function v0(c) {
  c === ld && (ld = c.l);
}
function x1(c) {
  return ld = { p: [], l: ld, h: c, m: !0, _: 0 };
}
function Xk(c) {
  var h = c[jn];
  h.i === 0 || h.i === 1 ? h.j() : h.g = !0;
}
function e0(c, h) {
  h._ = h.p.length;
  var p = h.p[0], E = c !== void 0 && c !== p;
  return h.h.O || ao("ES5").S(h, c, E), E ? (p[jn].P && (gy(h), Lr(4)), Xo(c) && (c = Sy(h, c), h.l || Ey(h, c)), h.u && ao("Patches").M(p[jn].t, c, h.u, h.s)) : c = Sy(h, p, []), gy(h), h.u && h.v(h.u, h.s), c !== uT ? c : void 0;
}
function Sy(c, h, p) {
  if (T0(h))
    return h;
  var E = h[jn];
  if (!E)
    return mc(h, function(H, M) {
      return O1(c, E, h, H, M, p);
    }, !0), h;
  if (E.A !== c)
    return h;
  if (!E.P)
    return Ey(c, E.t, !0), E.t;
  if (!E.I) {
    E.I = !0, E.A._--;
    var R = E.i === 4 || E.i === 5 ? E.o = b0(E.k) : E.o, w = R, g = !1;
    E.i === 3 && (w = new Set(R), R.clear(), g = !0), mc(w, function(H, M) {
      return O1(c, E, R, H, M, p, g);
    }), Ey(c, R, !1), p && c.u && ao("Patches").N(E, p, c.u, c.s);
  }
  return E.o;
}
function O1(c, h, p, E, R, w, g) {
  if ({}.NODE_ENV !== "production" && R === p && Lr(5), ss(R)) {
    var H = Sy(c, R, w && h && h.i !== 3 && !ud(h.R, E) ? w.concat(E) : void 0);
    if (aT(p, E, H), !ss(H))
      return;
    c.m = !1;
  } else
    g && p.add(R);
  if (Xo(R) && !T0(R)) {
    if (!c.h.D && c._ < 1)
      return;
    Sy(c, R), h && h.A.l || Ey(c, R);
  }
}
function Ey(c, h, p) {
  p === void 0 && (p = !1), !c.l && c.h.D && c.m && R0(h, p);
}
function t0(c, h) {
  var p = c[jn];
  return (p ? as(p) : c)[h];
}
function D1(c, h) {
  if (h in c)
    for (var p = Object.getPrototypeOf(c); p; ) {
      var E = Object.getOwnPropertyDescriptor(p, h);
      if (E)
        return E;
      p = Object.getPrototypeOf(p);
    }
}
function is(c) {
  c.P || (c.P = !0, c.l && is(c.l));
}
function n0(c) {
  c.o || (c.o = b0(c.t));
}
function h0(c, h, p) {
  var E = E0(h) ? ao("MapSet").F(h, p) : C0(h) ? ao("MapSet").T(h, p) : c.O ? function(R, w) {
    var g = Array.isArray(R), H = { i: g ? 1 : 0, A: w ? w.A : p0(), P: !1, I: !1, R: {}, l: w, t: R, k: null, o: null, j: null, C: !1 }, M = H, x = _v;
    g && (M = [H], x = wv);
    var U = Proxy.revocable(M, x), N = U.revoke, A = U.proxy;
    return H.k = A, H.j = N, A;
  }(h, p) : ao("ES5").J(h, p);
  return (p ? p.A : p0()).p.push(E), E;
}
function Zk(c) {
  return ss(c) || Lr(22, c), function h(p) {
    if (!Xo(p))
      return p;
    var E, R = p[jn], w = cd(p);
    if (R) {
      if (!R.P && (R.i < 4 || !ao("ES5").K(R)))
        return R.t;
      R.I = !0, E = k1(p, w), R.I = !1;
    } else
      E = k1(p, w);
    return mc(E, function(g, H) {
      R && Gk(R.t, g) === H || aT(E, g, h(H));
    }), w === 3 ? new Set(E) : E;
  }(c);
}
function k1(c, h) {
  switch (h) {
    case 2:
      return new Map(c);
    case 3:
      return Array.from(c);
  }
  return b0(c);
}
function Jk() {
  function c(g, H) {
    var M = w[g];
    return M ? M.enumerable = H : w[g] = M = { configurable: !0, enumerable: H, get: function() {
      var x = this[jn];
      return {}.NODE_ENV !== "production" && R(x), _v.get(x, g);
    }, set: function(x) {
      var U = this[jn];
      ({}).NODE_ENV !== "production" && R(U), _v.set(U, g, x);
    } }, M;
  }
  function h(g) {
    for (var H = g.length - 1; H >= 0; H--) {
      var M = g[H][jn];
      if (!M.P)
        switch (M.i) {
          case 5:
            E(M) && is(M);
            break;
          case 4:
            p(M) && is(M);
        }
    }
  }
  function p(g) {
    for (var H = g.t, M = g.k, x = od(M), U = x.length - 1; U >= 0; U--) {
      var N = x[U];
      if (N !== jn) {
        var A = H[N];
        if (A === void 0 && !ud(H, N))
          return !0;
        var F = M[N], B = F && F[jn];
        if (B ? B.t !== A : !iT(F, A))
          return !0;
      }
    }
    var Y = !!H[jn];
    return x.length !== od(H).length + (Y ? 0 : 1);
  }
  function E(g) {
    var H = g.k;
    if (H.length !== g.t.length)
      return !0;
    var M = Object.getOwnPropertyDescriptor(H, H.length - 1);
    if (M && !M.get)
      return !0;
    for (var x = 0; x < H.length; x++)
      if (!H.hasOwnProperty(x))
        return !0;
    return !1;
  }
  function R(g) {
    g.g && Lr(3, JSON.stringify(as(g)));
  }
  var w = {};
  Kk("ES5", { J: function(g, H) {
    var M = Array.isArray(g), x = function(N, A) {
      if (N) {
        for (var F = Array(A.length), B = 0; B < A.length; B++)
          Object.defineProperty(F, "" + B, c(B, !0));
        return F;
      }
      var Y = oT(A);
      delete Y[jn];
      for (var V = od(Y), le = 0; le < V.length; le++) {
        var oe = V[le];
        Y[oe] = c(oe, N || !!Y[oe].enumerable);
      }
      return Object.create(Object.getPrototypeOf(A), Y);
    }(M, g), U = { i: M ? 5 : 4, A: H ? H.A : p0(), P: !1, I: !1, R: {}, l: H, t: g, k: x, o: null, g: !1, C: !1 };
    return Object.defineProperty(x, jn, { value: U, writable: !0 }), x;
  }, S: function(g, H, M) {
    M ? ss(H) && H[jn].A === g && h(g.p) : (g.u && function x(U) {
      if (U && typeof U == "object") {
        var N = U[jn];
        if (N) {
          var A = N.t, F = N.k, B = N.R, Y = N.i;
          if (Y === 4)
            mc(F, function(J) {
              J !== jn && (A[J] !== void 0 || ud(A, J) ? B[J] || x(F[J]) : (B[J] = !0, is(N)));
            }), mc(A, function(J) {
              F[J] !== void 0 || ud(F, J) || (B[J] = !1, is(N));
            });
          else if (Y === 5) {
            if (E(N) && (is(N), B.length = !0), F.length < A.length)
              for (var V = F.length; V < A.length; V++)
                B[V] = !1;
            else
              for (var le = A.length; le < F.length; le++)
                B[le] = !0;
            for (var oe = Math.min(F.length, A.length), te = 0; te < oe; te++)
              F.hasOwnProperty(te) || (B[te] = !0), B[te] === void 0 && x(F[te]);
          }
        }
      }
    }(g.p[0]), h(g.p));
  }, K: function(g) {
    return g.i === 4 ? p(g) : E(g);
  } });
}
var N1, ld, w0 = typeof Symbol < "u" && typeof Symbol("x") == "symbol", eN = typeof Map < "u", tN = typeof Set < "u", M1 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", uT = w0 ? Symbol.for("immer-nothing") : ((N1 = {})["immer-nothing"] = !0, N1), L1 = w0 ? Symbol.for("immer-draftable") : "__$immer_draftable", jn = w0 ? Symbol.for("immer-state") : "__$immer_state", nN = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(c) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, rN = "" + Object.prototype.constructor, od = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(c) {
  return Object.getOwnPropertyNames(c).concat(Object.getOwnPropertySymbols(c));
} : Object.getOwnPropertyNames, oT = Object.getOwnPropertyDescriptors || function(c) {
  var h = {};
  return od(c).forEach(function(p) {
    h[p] = Object.getOwnPropertyDescriptor(c, p);
  }), h;
}, m0 = {}, _v = { get: function(c, h) {
  if (h === jn)
    return c;
  var p = as(c);
  if (!ud(p, h))
    return function(R, w, g) {
      var H, M = D1(w, g);
      return M ? "value" in M ? M.value : (H = M.get) === null || H === void 0 ? void 0 : H.call(R.k) : void 0;
    }(c, p, h);
  var E = p[h];
  return c.I || !Xo(E) ? E : E === t0(c.t, h) ? (n0(c), c.o[h] = h0(c.A.h, E, c)) : E;
}, has: function(c, h) {
  return h in as(c);
}, ownKeys: function(c) {
  return Reflect.ownKeys(as(c));
}, set: function(c, h, p) {
  var E = D1(as(c), h);
  if (E != null && E.set)
    return E.set.call(c.k, p), !0;
  if (!c.P) {
    var R = t0(as(c), h), w = R == null ? void 0 : R[jn];
    if (w && w.t === p)
      return c.o[h] = p, c.R[h] = !1, !0;
    if (iT(p, R) && (p !== void 0 || ud(c.t, h)))
      return !0;
    n0(c), is(c);
  }
  return c.o[h] === p && (p !== void 0 || h in c.o) || Number.isNaN(p) && Number.isNaN(c.o[h]) || (c.o[h] = p, c.R[h] = !0), !0;
}, deleteProperty: function(c, h) {
  return t0(c.t, h) !== void 0 || h in c.t ? (c.R[h] = !1, n0(c), is(c)) : delete c.R[h], c.o && delete c.o[h], !0;
}, getOwnPropertyDescriptor: function(c, h) {
  var p = as(c), E = Reflect.getOwnPropertyDescriptor(p, h);
  return E && { writable: !0, configurable: c.i !== 1 || h !== "length", enumerable: E.enumerable, value: p[h] };
}, defineProperty: function() {
  Lr(11);
}, getPrototypeOf: function(c) {
  return Object.getPrototypeOf(c.t);
}, setPrototypeOf: function() {
  Lr(12);
} }, wv = {};
mc(_v, function(c, h) {
  wv[c] = function() {
    return arguments[0] = arguments[0][0], h.apply(this, arguments);
  };
}), wv.deleteProperty = function(c, h) {
  return {}.NODE_ENV !== "production" && isNaN(parseInt(h)) && Lr(13), wv.set.call(this, c, h, void 0);
}, wv.set = function(c, h, p) {
  return {}.NODE_ENV !== "production" && h !== "length" && isNaN(parseInt(h)) && Lr(14), _v.set.call(this, c[0], h, p, c[0]);
};
var aN = function() {
  function c(p) {
    var E = this;
    this.O = M1, this.D = !0, this.produce = function(R, w, g) {
      if (typeof R == "function" && typeof w != "function") {
        var H = w;
        w = R;
        var M = E;
        return function(Y) {
          var V = this;
          Y === void 0 && (Y = H);
          for (var le = arguments.length, oe = Array(le > 1 ? le - 1 : 0), te = 1; te < le; te++)
            oe[te - 1] = arguments[te];
          return M.produce(Y, function(J) {
            var I;
            return (I = w).call.apply(I, [V, J].concat(oe));
          });
        };
      }
      var x;
      if (typeof w != "function" && Lr(6), g !== void 0 && typeof g != "function" && Lr(7), Xo(R)) {
        var U = x1(E), N = h0(E, R, void 0), A = !0;
        try {
          x = w(N), A = !1;
        } finally {
          A ? gy(U) : v0(U);
        }
        return typeof Promise < "u" && x instanceof Promise ? x.then(function(Y) {
          return JE(U, g), e0(Y, U);
        }, function(Y) {
          throw gy(U), Y;
        }) : (JE(U, g), e0(x, U));
      }
      if (!R || typeof R != "object") {
        if ((x = w(R)) === void 0 && (x = R), x === uT && (x = void 0), E.D && R0(x, !0), g) {
          var F = [], B = [];
          ao("Patches").M(R, x, F, B), g(F, B);
        }
        return x;
      }
      Lr(21, R);
    }, this.produceWithPatches = function(R, w) {
      if (typeof R == "function")
        return function(x) {
          for (var U = arguments.length, N = Array(U > 1 ? U - 1 : 0), A = 1; A < U; A++)
            N[A - 1] = arguments[A];
          return E.produceWithPatches(x, function(F) {
            return R.apply(void 0, [F].concat(N));
          });
        };
      var g, H, M = E.produce(R, w, function(x, U) {
        g = x, H = U;
      });
      return typeof Promise < "u" && M instanceof Promise ? M.then(function(x) {
        return [x, g, H];
      }) : [M, g, H];
    }, typeof (p == null ? void 0 : p.useProxies) == "boolean" && this.setUseProxies(p.useProxies), typeof (p == null ? void 0 : p.autoFreeze) == "boolean" && this.setAutoFreeze(p.autoFreeze);
  }
  var h = c.prototype;
  return h.createDraft = function(p) {
    Xo(p) || Lr(8), ss(p) && (p = Zk(p));
    var E = x1(this), R = h0(this, p, void 0);
    return R[jn].C = !0, v0(E), R;
  }, h.finishDraft = function(p, E) {
    var R = p && p[jn];
    ({}).NODE_ENV !== "production" && (R && R.C || Lr(9), R.I && Lr(10));
    var w = R.A;
    return JE(w, E), e0(void 0, w);
  }, h.setAutoFreeze = function(p) {
    this.D = p;
  }, h.setUseProxies = function(p) {
    p && !M1 && Lr(20), this.O = p;
  }, h.applyPatches = function(p, E) {
    var R;
    for (R = E.length - 1; R >= 0; R--) {
      var w = E[R];
      if (w.path.length === 0 && w.op === "replace") {
        p = w.value;
        break;
      }
    }
    R > -1 && (E = E.slice(R + 1));
    var g = ao("Patches").$;
    return ss(p) ? g(p, E) : this.produce(p, function(H) {
      return g(H, E);
    });
  }, c;
}(), hi = new aN(), lT = hi.produce;
hi.produceWithPatches.bind(hi);
hi.setAutoFreeze.bind(hi);
hi.setUseProxies.bind(hi);
hi.applyPatches.bind(hi);
hi.createDraft.bind(hi);
hi.finishDraft.bind(hi);
function xv(c) {
  "@babel/helpers - typeof";
  return xv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h;
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
  }, xv(c);
}
function iN(c, h) {
  if (xv(c) !== "object" || c === null)
    return c;
  var p = c[Symbol.toPrimitive];
  if (p !== void 0) {
    var E = p.call(c, h || "default");
    if (xv(E) !== "object")
      return E;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (h === "string" ? String : Number)(c);
}
function uN(c) {
  var h = iN(c, "string");
  return xv(h) === "symbol" ? h : String(h);
}
function oN(c, h, p) {
  return h = uN(h), h in c ? Object.defineProperty(c, h, {
    value: p,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[h] = p, c;
}
function A1(c, h) {
  var p = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(c);
    h && (E = E.filter(function(R) {
      return Object.getOwnPropertyDescriptor(c, R).enumerable;
    })), p.push.apply(p, E);
  }
  return p;
}
function z1(c) {
  for (var h = 1; h < arguments.length; h++) {
    var p = arguments[h] != null ? arguments[h] : {};
    h % 2 ? A1(Object(p), !0).forEach(function(E) {
      oN(c, E, p[E]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p)) : A1(Object(p)).forEach(function(E) {
      Object.defineProperty(c, E, Object.getOwnPropertyDescriptor(p, E));
    });
  }
  return c;
}
function ya(c) {
  return "Minified Redux error #" + c + "; visit https://redux.js.org/Errors?code=" + c + " for the full message or use the non-minified dev environment for full errors. ";
}
var U1 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), r0 = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, hc = {
  INIT: "@@redux/INIT" + r0(),
  REPLACE: "@@redux/REPLACE" + r0(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + r0();
  }
};
function sT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  for (var h = c; Object.getPrototypeOf(h) !== null; )
    h = Object.getPrototypeOf(h);
  return Object.getPrototypeOf(c) === h;
}
function lN(c) {
  if (c === void 0)
    return "undefined";
  if (c === null)
    return "null";
  var h = typeof c;
  switch (h) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return h;
  }
  if (Array.isArray(c))
    return "array";
  if (fN(c))
    return "date";
  if (cN(c))
    return "error";
  var p = sN(c);
  switch (p) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return p;
  }
  return h.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function sN(c) {
  return typeof c.constructor == "function" ? c.constructor.name : null;
}
function cN(c) {
  return c instanceof Error || typeof c.message == "string" && c.constructor && typeof c.constructor.stackTraceLimit == "number";
}
function fN(c) {
  return c instanceof Date ? !0 : typeof c.toDateString == "function" && typeof c.getDate == "function" && typeof c.setDate == "function";
}
function vc(c) {
  var h = typeof c;
  return {}.NODE_ENV !== "production" && (h = lN(c)), h;
}
function cT(c, h, p) {
  var E;
  if (typeof h == "function" && typeof p == "function" || typeof p == "function" && typeof arguments[3] == "function")
    throw new Error({}.NODE_ENV === "production" ? ya(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof h == "function" && typeof p > "u" && (p = h, h = void 0), typeof p < "u") {
    if (typeof p != "function")
      throw new Error({}.NODE_ENV === "production" ? ya(1) : "Expected the enhancer to be a function. Instead, received: '" + vc(p) + "'");
    return p(cT)(c, h);
  }
  if (typeof c != "function")
    throw new Error({}.NODE_ENV === "production" ? ya(2) : "Expected the root reducer to be a function. Instead, received: '" + vc(c) + "'");
  var R = c, w = h, g = [], H = g, M = !1;
  function x() {
    H === g && (H = g.slice());
  }
  function U() {
    if (M)
      throw new Error({}.NODE_ENV === "production" ? ya(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return w;
  }
  function N(Y) {
    if (typeof Y != "function")
      throw new Error({}.NODE_ENV === "production" ? ya(4) : "Expected the listener to be a function. Instead, received: '" + vc(Y) + "'");
    if (M)
      throw new Error({}.NODE_ENV === "production" ? ya(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var V = !0;
    return x(), H.push(Y), function() {
      if (V) {
        if (M)
          throw new Error({}.NODE_ENV === "production" ? ya(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        V = !1, x();
        var oe = H.indexOf(Y);
        H.splice(oe, 1), g = null;
      }
    };
  }
  function A(Y) {
    if (!sT(Y))
      throw new Error({}.NODE_ENV === "production" ? ya(7) : "Actions must be plain objects. Instead, the actual type was: '" + vc(Y) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof Y.type > "u")
      throw new Error({}.NODE_ENV === "production" ? ya(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (M)
      throw new Error({}.NODE_ENV === "production" ? ya(9) : "Reducers may not dispatch actions.");
    try {
      M = !0, w = R(w, Y);
    } finally {
      M = !1;
    }
    for (var V = g = H, le = 0; le < V.length; le++) {
      var oe = V[le];
      oe();
    }
    return Y;
  }
  function F(Y) {
    if (typeof Y != "function")
      throw new Error({}.NODE_ENV === "production" ? ya(10) : "Expected the nextReducer to be a function. Instead, received: '" + vc(Y));
    R = Y, A({
      type: hc.REPLACE
    });
  }
  function B() {
    var Y, V = N;
    return Y = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(oe) {
        if (typeof oe != "object" || oe === null)
          throw new Error({}.NODE_ENV === "production" ? ya(11) : "Expected the observer to be an object. Instead, received: '" + vc(oe) + "'");
        function te() {
          oe.next && oe.next(U());
        }
        te();
        var J = V(te);
        return {
          unsubscribe: J
        };
      }
    }, Y[U1] = function() {
      return this;
    }, Y;
  }
  return A({
    type: hc.INIT
  }), E = {
    dispatch: A,
    subscribe: N,
    getState: U,
    replaceReducer: F
  }, E[U1] = B, E;
}
function j1(c) {
  typeof console < "u" && typeof console.error == "function" && console.error(c);
  try {
    throw new Error(c);
  } catch {
  }
}
function dN(c, h, p, E) {
  var R = Object.keys(h), w = p && p.type === hc.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (R.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!sT(c))
    return "The " + w + ' has unexpected type of "' + vc(c) + '". Expected argument to be an object with the following ' + ('keys: "' + R.join('", "') + '"');
  var g = Object.keys(c).filter(function(H) {
    return !h.hasOwnProperty(H) && !E[H];
  });
  if (g.forEach(function(H) {
    E[H] = !0;
  }), !(p && p.type === hc.REPLACE) && g.length > 0)
    return "Unexpected " + (g.length > 1 ? "keys" : "key") + " " + ('"' + g.join('", "') + '" found in ' + w + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + R.join('", "') + '". Unexpected keys will be ignored.');
}
function pN(c) {
  Object.keys(c).forEach(function(h) {
    var p = c[h], E = p(void 0, {
      type: hc.INIT
    });
    if (typeof E > "u")
      throw new Error({}.NODE_ENV === "production" ? ya(12) : 'The slice reducer for key "' + h + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof p(void 0, {
      type: hc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error({}.NODE_ENV === "production" ? ya(13) : 'The slice reducer for key "' + h + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + hc.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function vN(c) {
  for (var h = Object.keys(c), p = {}, E = 0; E < h.length; E++) {
    var R = h[E];
    ({}).NODE_ENV !== "production" && typeof c[R] > "u" && j1('No reducer provided for key "' + R + '"'), typeof c[R] == "function" && (p[R] = c[R]);
  }
  var w = Object.keys(p), g;
  ({}).NODE_ENV !== "production" && (g = {});
  var H;
  try {
    pN(p);
  } catch (M) {
    H = M;
  }
  return function(x, U) {
    if (x === void 0 && (x = {}), H)
      throw H;
    if ({}.NODE_ENV !== "production") {
      var N = dN(x, p, U, g);
      N && j1(N);
    }
    for (var A = !1, F = {}, B = 0; B < w.length; B++) {
      var Y = w[B], V = p[Y], le = x[Y], oe = V(le, U);
      if (typeof oe > "u") {
        var te = U && U.type;
        throw new Error({}.NODE_ENV === "production" ? ya(14) : "When called with an action of type " + (te ? '"' + String(te) + '"' : "(unknown type)") + ', the slice reducer for key "' + Y + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      F[Y] = oe, A = A || oe !== le;
    }
    return A = A || w.length !== Object.keys(x).length, A ? F : x;
  };
}
function Cy() {
  for (var c = arguments.length, h = new Array(c), p = 0; p < c; p++)
    h[p] = arguments[p];
  return h.length === 0 ? function(E) {
    return E;
  } : h.length === 1 ? h[0] : h.reduce(function(E, R) {
    return function() {
      return E(R.apply(void 0, arguments));
    };
  });
}
function hN() {
  for (var c = arguments.length, h = new Array(c), p = 0; p < c; p++)
    h[p] = arguments[p];
  return function(E) {
    return function() {
      var R = E.apply(void 0, arguments), w = function() {
        throw new Error({}.NODE_ENV === "production" ? ya(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, g = {
        getState: R.getState,
        dispatch: function() {
          return w.apply(void 0, arguments);
        }
      }, H = h.map(function(M) {
        return M(g);
      });
      return w = Cy.apply(void 0, H)(R.dispatch), z1(z1({}, R), {}, {
        dispatch: w
      });
    };
  };
}
function fT(c) {
  var h = function(E) {
    var R = E.dispatch, w = E.getState;
    return function(g) {
      return function(H) {
        return typeof H == "function" ? H(R, w, c) : g(H);
      };
    };
  };
  return h;
}
var dT = fT();
dT.withExtraArgument = fT;
const P1 = dT;
var pT = globalThis && globalThis.__extends || function() {
  var c = function(h, p) {
    return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, R) {
      E.__proto__ = R;
    } || function(E, R) {
      for (var w in R)
        Object.prototype.hasOwnProperty.call(R, w) && (E[w] = R[w]);
    }, c(h, p);
  };
  return function(h, p) {
    if (typeof p != "function" && p !== null)
      throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
    c(h, p);
    function E() {
      this.constructor = h;
    }
    h.prototype = p === null ? Object.create(p) : (E.prototype = p.prototype, new E());
  };
}(), mN = globalThis && globalThis.__generator || function(c, h) {
  var p = { label: 0, sent: function() {
    if (w[0] & 1)
      throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, R, w, g;
  return g = { next: H(0), throw: H(1), return: H(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function H(x) {
    return function(U) {
      return M([x, U]);
    };
  }
  function M(x) {
    if (E)
      throw new TypeError("Generator is already executing.");
    for (; p; )
      try {
        if (E = 1, R && (w = x[0] & 2 ? R.return : x[0] ? R.throw || ((w = R.return) && w.call(R), 0) : R.next) && !(w = w.call(R, x[1])).done)
          return w;
        switch (R = 0, w && (x = [x[0] & 2, w.value]), x[0]) {
          case 0:
          case 1:
            w = x;
            break;
          case 4:
            return p.label++, { value: x[1], done: !1 };
          case 5:
            p.label++, R = x[1], x = [0];
            continue;
          case 7:
            x = p.ops.pop(), p.trys.pop();
            continue;
          default:
            if (w = p.trys, !(w = w.length > 0 && w[w.length - 1]) && (x[0] === 6 || x[0] === 2)) {
              p = 0;
              continue;
            }
            if (x[0] === 3 && (!w || x[1] > w[0] && x[1] < w[3])) {
              p.label = x[1];
              break;
            }
            if (x[0] === 6 && p.label < w[1]) {
              p.label = w[1], w = x;
              break;
            }
            if (w && p.label < w[2]) {
              p.label = w[2], p.ops.push(x);
              break;
            }
            w[2] && p.ops.pop(), p.trys.pop();
            continue;
        }
        x = h.call(c, p);
      } catch (U) {
        x = [6, U], R = 0;
      } finally {
        E = w = 0;
      }
    if (x[0] & 5)
      throw x[1];
    return { value: x[0] ? x[1] : void 0, done: !0 };
  }
}, sd = globalThis && globalThis.__spreadArray || function(c, h) {
  for (var p = 0, E = h.length, R = c.length; p < E; p++, R++)
    c[R] = h[p];
  return c;
}, yN = Object.defineProperty, gN = Object.defineProperties, SN = Object.getOwnPropertyDescriptors, F1 = Object.getOwnPropertySymbols, EN = Object.prototype.hasOwnProperty, CN = Object.prototype.propertyIsEnumerable, V1 = function(c, h, p) {
  return h in c ? yN(c, h, { enumerable: !0, configurable: !0, writable: !0, value: p }) : c[h] = p;
}, us = function(c, h) {
  for (var p in h || (h = {}))
    EN.call(h, p) && V1(c, p, h[p]);
  if (F1)
    for (var E = 0, R = F1(h); E < R.length; E++) {
      var p = R[E];
      CN.call(h, p) && V1(c, p, h[p]);
    }
  return c;
}, a0 = function(c, h) {
  return gN(c, SN(h));
}, bN = function(c, h, p) {
  return new Promise(function(E, R) {
    var w = function(M) {
      try {
        H(p.next(M));
      } catch (x) {
        R(x);
      }
    }, g = function(M) {
      try {
        H(p.throw(M));
      } catch (x) {
        R(x);
      }
    }, H = function(M) {
      return M.done ? E(M.value) : Promise.resolve(M.value).then(w, g);
    };
    H((p = p.apply(c, h)).next());
  });
}, RN = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Cy : Cy.apply(null, arguments);
};
function vT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  var h = Object.getPrototypeOf(c);
  if (h === null)
    return !0;
  for (var p = h; Object.getPrototypeOf(p) !== null; )
    p = Object.getPrototypeOf(p);
  return h === p;
}
var TN = function(c) {
  return c && typeof c.match == "function";
};
function os(c, h) {
  function p() {
    for (var E = [], R = 0; R < arguments.length; R++)
      E[R] = arguments[R];
    if (h) {
      var w = h.apply(void 0, E);
      if (!w)
        throw new Error("prepareAction did not return an object");
      return us(us({
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
function wN(c) {
  return typeof c == "function" && "type" in c && TN(c);
}
function _N(c) {
  var h = c ? ("" + c).split("/") : [], p = h[h.length - 1] || "actionCreator";
  return 'Detected an action creator with type "' + (c || "unknown") + `" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(` + p + "())` instead of `dispatch(" + p + ")`. This is necessary even if the action has no payload.";
}
function xN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(E) {
        return function(R) {
          return E(R);
        };
      };
    };
  var h = c.isActionCreator, p = h === void 0 ? wN : h;
  return function() {
    return function(E) {
      return function(R) {
        return p(R) && console.warn(_N(R.type)), E(R);
      };
    };
  };
}
function hT(c, h) {
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
      p > c && console.warn(h + " took " + p + "ms, which is more than the warning threshold of " + c + `ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var ON = (
  /** @class */
  function(c) {
    pT(h, c);
    function h() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      var R = c.apply(this, p) || this;
      return Object.setPrototypeOf(R, h.prototype), R;
    }
    return Object.defineProperty(h, Symbol.species, {
      get: function() {
        return h;
      },
      enumerable: !1,
      configurable: !0
    }), h.prototype.concat = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return c.prototype.concat.apply(this, p);
    }, h.prototype.prepend = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return p.length === 1 && Array.isArray(p[0]) ? new (h.bind.apply(h, sd([void 0], p[0].concat(this))))() : new (h.bind.apply(h, sd([void 0], p.concat(this))))();
    }, h;
  }(Array)
), DN = (
  /** @class */
  function(c) {
    pT(h, c);
    function h() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      var R = c.apply(this, p) || this;
      return Object.setPrototypeOf(R, h.prototype), R;
    }
    return Object.defineProperty(h, Symbol.species, {
      get: function() {
        return h;
      },
      enumerable: !1,
      configurable: !0
    }), h.prototype.concat = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return c.prototype.concat.apply(this, p);
    }, h.prototype.prepend = function() {
      for (var p = [], E = 0; E < arguments.length; E++)
        p[E] = arguments[E];
      return p.length === 1 && Array.isArray(p[0]) ? new (h.bind.apply(h, sd([void 0], p[0].concat(this))))() : new (h.bind.apply(h, sd([void 0], p.concat(this))))();
    }, h;
  }(Array)
);
function y0(c) {
  return Xo(c) ? lT(c, function() {
  }) : c;
}
var kN = {}.NODE_ENV === "production", H1 = "Invariant failed";
function I1(c, h) {
  if (!c)
    throw kN ? new Error(H1) : new Error(H1 + ": " + (h || ""));
}
function NN(c, h, p, E) {
  return JSON.stringify(c, MN(h, E), p);
}
function MN(c, h) {
  var p = [], E = [];
  return h || (h = function(R, w) {
    return p[0] === w ? "[Circular ~]" : "[Circular ~." + E.slice(0, p.indexOf(w)).join(".") + "]";
  }), function(R, w) {
    if (p.length > 0) {
      var g = p.indexOf(this);
      ~g ? p.splice(g + 1) : p.push(this), ~g ? E.splice(g, 1 / 0, R) : E.push(R), ~p.indexOf(w) && (w = h.call(this, R, w));
    } else
      p.push(w);
    return c == null ? w : c.call(this, R, w);
  };
}
function LN(c) {
  return typeof c != "object" || c == null || Object.isFrozen(c);
}
function AN(c, h, p) {
  var E = mT(c, h, p);
  return {
    detectMutations: function() {
      return yT(c, h, E, p);
    }
  };
}
function mT(c, h, p, E, R) {
  h === void 0 && (h = []), E === void 0 && (E = ""), R === void 0 && (R = /* @__PURE__ */ new Set());
  var w = { value: p };
  if (!c(p) && !R.has(p)) {
    R.add(p), w.children = {};
    for (var g in p) {
      var H = E ? E + "." + g : g;
      h.length && h.indexOf(H) !== -1 || (w.children[g] = mT(c, h, p[g], H));
    }
  }
  return w;
}
function yT(c, h, p, E, R, w) {
  h === void 0 && (h = []), R === void 0 && (R = !1), w === void 0 && (w = "");
  var g = p ? p.value : void 0, H = g === E;
  if (R && !H && !Number.isNaN(E))
    return { wasMutated: !0, path: w };
  if (c(g) || c(E))
    return { wasMutated: !1 };
  var M = {};
  for (var x in p.children)
    M[x] = !0;
  for (var x in E)
    M[x] = !0;
  var U = h.length > 0, N = function(F) {
    var B = w ? w + "." + F : F;
    if (U) {
      var Y = h.some(function(le) {
        return le instanceof RegExp ? le.test(B) : B === le;
      });
      if (Y)
        return "continue";
    }
    var V = yT(c, h, p.children[F], E[F], H, B);
    if (V.wasMutated)
      return { value: V };
  };
  for (var x in M) {
    var A = N(x);
    if (typeof A == "object")
      return A.value;
  }
  return { wasMutated: !1 };
}
function zN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(M) {
        return function(x) {
          return M(x);
        };
      };
    };
  var h = c.isImmutable, p = h === void 0 ? LN : h, E = c.ignoredPaths, R = c.warnAfter, w = R === void 0 ? 32 : R, g = c.ignore;
  E = E || g;
  var H = AN.bind(null, p, E);
  return function(M) {
    var x = M.getState, U = x(), N = H(U), A;
    return function(F) {
      return function(B) {
        var Y = hT(w, "ImmutableStateInvariantMiddleware");
        Y.measureTime(function() {
          U = x(), A = N.detectMutations(), N = H(U), I1(!A.wasMutated, "A state mutation was detected between dispatches, in the path '" + (A.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var V = F(B);
        return Y.measureTime(function() {
          U = x(), A = N.detectMutations(), N = H(U), A.wasMutated && I1(!A.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (A.path || "") + ". Take a look at the reducer(s) handling the action " + NN(B) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        }), Y.warnIfExceeded(), V;
      };
    };
  };
}
function gT(c) {
  var h = typeof c;
  return c == null || h === "string" || h === "boolean" || h === "number" || Array.isArray(c) || vT(c);
}
function g0(c, h, p, E, R, w) {
  h === void 0 && (h = ""), p === void 0 && (p = gT), R === void 0 && (R = []);
  var g;
  if (!p(c))
    return {
      keyPath: h || "<root>",
      value: c
    };
  if (typeof c != "object" || c === null || w != null && w.has(c))
    return !1;
  for (var H = E != null ? E(c) : Object.entries(c), M = R.length > 0, x = function(V, le) {
    var oe = h ? h + "." + V : V;
    if (M) {
      var te = R.some(function(J) {
        return J instanceof RegExp ? J.test(oe) : oe === J;
      });
      if (te)
        return "continue";
    }
    if (!p(le))
      return { value: {
        keyPath: oe,
        value: le
      } };
    if (typeof le == "object" && (g = g0(le, oe, p, E, R, w), g))
      return { value: g };
  }, U = 0, N = H; U < N.length; U++) {
    var A = N[U], F = A[0], B = A[1], Y = x(F, B);
    if (typeof Y == "object")
      return Y.value;
  }
  return w && ST(c) && w.add(c), !1;
}
function ST(c) {
  if (!Object.isFrozen(c))
    return !1;
  for (var h = 0, p = Object.values(c); h < p.length; h++) {
    var E = p[h];
    if (!(typeof E != "object" || E === null) && !ST(E))
      return !1;
  }
  return !0;
}
function UN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(te) {
        return function(J) {
          return te(J);
        };
      };
    };
  var h = c.isSerializable, p = h === void 0 ? gT : h, E = c.getEntries, R = c.ignoredActions, w = R === void 0 ? [] : R, g = c.ignoredActionPaths, H = g === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : g, M = c.ignoredPaths, x = M === void 0 ? [] : M, U = c.warnAfter, N = U === void 0 ? 32 : U, A = c.ignoreState, F = A === void 0 ? !1 : A, B = c.ignoreActions, Y = B === void 0 ? !1 : B, V = c.disableCache, le = V === void 0 ? !1 : V, oe = !le && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
  return function(te) {
    return function(J) {
      return function(I) {
        var me = J(I), Ee = hT(N, "SerializableStateInvariantMiddleware");
        return !Y && !(w.length && w.indexOf(I.type) !== -1) && Ee.measureTime(function() {
          var Ke = g0(I, "", p, E, H, oe);
          if (Ke) {
            var ut = Ke.keyPath, at = Ke.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + ut + "`. Value:", at, `
Take a look at the logic that dispatched this action: `, I, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
          }
        }), F || (Ee.measureTime(function() {
          var Ke = te.getState(), ut = g0(Ke, "", p, E, x, oe);
          if (ut) {
            var at = ut.keyPath, We = ut.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + at + "`. Value:", We, `
Take a look at the reducer(s) handling this action type: ` + I.type + `.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
          }
        }), Ee.warnIfExceeded()), me;
      };
    };
  };
}
function yy(c) {
  return typeof c == "boolean";
}
function jN() {
  return function(h) {
    return PN(h);
  };
}
function PN(c) {
  c === void 0 && (c = {});
  var h = c.thunk, p = h === void 0 ? !0 : h, E = c.immutableCheck, R = E === void 0 ? !0 : E, w = c.serializableCheck, g = w === void 0 ? !0 : w, H = c.actionCreatorCheck, M = H === void 0 ? !0 : H, x = new ON();
  if (p && (yy(p) ? x.push(P1) : x.push(P1.withExtraArgument(p.extraArgument))), {}.NODE_ENV !== "production") {
    if (R) {
      var U = {};
      yy(R) || (U = R), x.unshift(zN(U));
    }
    if (g) {
      var N = {};
      yy(g) || (N = g), x.push(UN(N));
    }
    if (M) {
      var A = {};
      yy(M) || (A = M), x.unshift(xN(A));
    }
  }
  return x;
}
var i0 = {}.NODE_ENV === "production";
function FN(c) {
  var h = jN(), p = c || {}, E = p.reducer, R = E === void 0 ? void 0 : E, w = p.middleware, g = w === void 0 ? h() : w, H = p.devTools, M = H === void 0 ? !0 : H, x = p.preloadedState, U = x === void 0 ? void 0 : x, N = p.enhancers, A = N === void 0 ? void 0 : N, F;
  if (typeof R == "function")
    F = R;
  else if (vT(R))
    F = vN(R);
  else
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var B = g;
  if (typeof B == "function" && (B = B(h), !i0 && !Array.isArray(B)))
    throw new Error("when using a middleware builder function, an array of middleware must be returned");
  if (!i0 && B.some(function(J) {
    return typeof J != "function";
  }))
    throw new Error("each middleware provided to configureStore must be a function");
  var Y = hN.apply(void 0, B), V = Cy;
  M && (V = RN(us({
    trace: !i0
  }, typeof M == "object" && M)));
  var le = new DN(Y), oe = le;
  Array.isArray(A) ? oe = sd([Y], A) : typeof A == "function" && (oe = A(le));
  var te = V.apply(void 0, oe);
  return cT(F, U, te);
}
function ET(c) {
  var h = {}, p = [], E, R = {
    addCase: function(w, g) {
      if ({}.NODE_ENV !== "production") {
        if (p.length > 0)
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (E)
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      var H = typeof w == "string" ? w : w.type;
      if (!H)
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      if (H in h)
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      return h[H] = g, R;
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
  return c(R), [h, p, E];
}
function VN(c) {
  return typeof c == "function";
}
var B1 = !1;
function HN(c, h, p, E) {
  p === void 0 && (p = []), {}.NODE_ENV !== "production" && typeof h == "object" && (B1 || (B1 = !0, console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer")));
  var R = typeof h == "function" ? ET(h) : [h, p, E], w = R[0], g = R[1], H = R[2], M;
  if (VN(c))
    M = function() {
      return y0(c());
    };
  else {
    var x = y0(c);
    M = function() {
      return x;
    };
  }
  function U(N, A) {
    N === void 0 && (N = M());
    var F = sd([
      w[A.type]
    ], g.filter(function(B) {
      var Y = B.matcher;
      return Y(A);
    }).map(function(B) {
      var Y = B.reducer;
      return Y;
    }));
    return F.filter(function(B) {
      return !!B;
    }).length === 0 && (F = [H]), F.reduce(function(B, Y) {
      if (Y)
        if (ss(B)) {
          var V = B, le = Y(V, A);
          return le === void 0 ? B : le;
        } else {
          if (Xo(B))
            return lT(B, function(oe) {
              return Y(oe, A);
            });
          var le = Y(B, A);
          if (le === void 0) {
            if (B === null)
              return B;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return le;
        }
      return B;
    }, N);
  }
  return U.getInitialState = M, U;
}
var $1 = !1;
function IN(c, h) {
  return c + "/" + h;
}
function BN(c) {
  var h = c.name;
  if (!h)
    throw new Error("`name` is a required option for createSlice");
  typeof process < "u" && {}.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
  var p = typeof c.initialState == "function" ? c.initialState : y0(c.initialState), E = c.reducers || {}, R = Object.keys(E), w = {}, g = {}, H = {};
  R.forEach(function(U) {
    var N = E[U], A = IN(h, U), F, B;
    "reducer" in N ? (F = N.reducer, B = N.prepare) : F = N, w[U] = F, g[A] = F, H[U] = B ? os(A, B) : os(A);
  });
  function M() {
    ({}).NODE_ENV !== "production" && typeof c.extraReducers == "object" && ($1 || ($1 = !0, console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice")));
    var U = typeof c.extraReducers == "function" ? ET(c.extraReducers) : [c.extraReducers], N = U[0], A = N === void 0 ? {} : N, F = U[1], B = F === void 0 ? [] : F, Y = U[2], V = Y === void 0 ? void 0 : Y, le = us(us({}, A), g);
    return HN(p, function(oe) {
      for (var te in le)
        oe.addCase(te, le[te]);
      for (var J = 0, I = B; J < I.length; J++) {
        var me = I[J];
        oe.addMatcher(me.matcher, me.reducer);
      }
      V && oe.addDefaultCase(V);
    });
  }
  var x;
  return {
    name: h,
    reducer: function(U, N) {
      return x || (x = M()), x(U, N);
    },
    actions: H,
    caseReducers: w,
    getInitialState: function() {
      return x || (x = M()), x.getInitialState();
    }
  };
}
var $N = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", YN = function(c) {
  c === void 0 && (c = 21);
  for (var h = "", p = c; p--; )
    h += $N[Math.random() * 64 | 0];
  return h;
}, WN = [
  "name",
  "message",
  "stack",
  "code"
], u0 = (
  /** @class */
  function() {
    function c(h, p) {
      this.payload = h, this.meta = p;
    }
    return c;
  }()
), Y1 = (
  /** @class */
  function() {
    function c(h, p) {
      this.payload = h, this.meta = p;
    }
    return c;
  }()
), QN = function(c) {
  if (typeof c == "object" && c !== null) {
    for (var h = {}, p = 0, E = WN; p < E.length; p++) {
      var R = E[p];
      typeof c[R] == "string" && (h[R] = c[R]);
    }
    return h;
  }
  return { message: String(c) };
};
(function() {
  function c(h, p, E) {
    var R = os(h + "/fulfilled", function(U, N, A, F) {
      return {
        payload: U,
        meta: a0(us({}, F || {}), {
          arg: A,
          requestId: N,
          requestStatus: "fulfilled"
        })
      };
    }), w = os(h + "/pending", function(U, N, A) {
      return {
        payload: void 0,
        meta: a0(us({}, A || {}), {
          arg: N,
          requestId: U,
          requestStatus: "pending"
        })
      };
    }), g = os(h + "/rejected", function(U, N, A, F, B) {
      return {
        payload: F,
        error: (E && E.serializeError || QN)(U || "Rejected"),
        meta: a0(us({}, B || {}), {
          arg: A,
          requestId: N,
          rejectedWithValue: !!F,
          requestStatus: "rejected",
          aborted: (U == null ? void 0 : U.name) === "AbortError",
          condition: (U == null ? void 0 : U.name) === "ConditionError"
        })
      };
    }), H = !1, M = typeof AbortController < "u" ? AbortController : (
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
          ({}).NODE_ENV !== "production" && (H || (H = !0, console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.")));
        }, U;
      }()
    );
    function x(U) {
      return function(N, A, F) {
        var B = E != null && E.idGenerator ? E.idGenerator(U) : YN(), Y = new M(), V;
        function le(te) {
          V = te, Y.abort();
        }
        var oe = function() {
          return bN(this, null, function() {
            var te, J, I, me, Ee, Ke, ut;
            return mN(this, function(at) {
              switch (at.label) {
                case 0:
                  return at.trys.push([0, 4, , 5]), me = (te = E == null ? void 0 : E.condition) == null ? void 0 : te.call(E, U, { getState: A, extra: F }), qN(me) ? [4, me] : [3, 2];
                case 1:
                  me = at.sent(), at.label = 2;
                case 2:
                  if (me === !1 || Y.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  return Ee = new Promise(function(We, wt) {
                    return Y.signal.addEventListener("abort", function() {
                      return wt({
                        name: "AbortError",
                        message: V || "Aborted"
                      });
                    });
                  }), N(w(B, U, (J = E == null ? void 0 : E.getPendingMeta) == null ? void 0 : J.call(E, { requestId: B, arg: U }, { getState: A, extra: F }))), [4, Promise.race([
                    Ee,
                    Promise.resolve(p(U, {
                      dispatch: N,
                      getState: A,
                      extra: F,
                      requestId: B,
                      signal: Y.signal,
                      abort: le,
                      rejectWithValue: function(We, wt) {
                        return new u0(We, wt);
                      },
                      fulfillWithValue: function(We, wt) {
                        return new Y1(We, wt);
                      }
                    })).then(function(We) {
                      if (We instanceof u0)
                        throw We;
                      return We instanceof Y1 ? R(We.payload, B, U, We.meta) : R(We, B, U);
                    })
                  ])];
                case 3:
                  return I = at.sent(), [3, 5];
                case 4:
                  return Ke = at.sent(), I = Ke instanceof u0 ? g(null, B, U, Ke.payload, Ke.meta) : g(Ke, B, U), [3, 5];
                case 5:
                  return ut = E && !E.dispatchConditionRejection && g.match(I) && I.meta.condition, ut || N(I), [2, I];
              }
            });
          });
        }();
        return Object.assign(oe, {
          abort: le,
          requestId: B,
          arg: U,
          unwrap: function() {
            return oe.then(GN);
          }
        });
      };
    }
    return Object.assign(x, {
      pending: w,
      rejected: g,
      fulfilled: R,
      typePrefix: h
    });
  }
  return c.withTypes = function() {
    return c;
  }, c;
})();
function GN(c) {
  if (c.meta && c.meta.rejectedWithValue)
    throw c.payload;
  if (c.error)
    throw c.error;
  return c.payload;
}
function qN(c) {
  return c !== null && typeof c == "object" && typeof c.then == "function";
}
var _0 = "listenerMiddleware";
os(_0 + "/add");
os(_0 + "/removeAll");
os(_0 + "/remove");
var W1;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
Jk();
const KN = [], CT = BN({
  name: "fields",
  initialState: KN,
  reducers: {
    registerForm: (c, h) => {
      const { formInstance: p, formId: E } = h.payload;
      c[p] = {
        fields: {},
        meta: {
          formId: E,
          isLoading: !1,
          step: 1
        }
      };
    },
    updateField: (c, h) => {
      const { formInstance: p, name: E, value: R } = h.payload;
      c[p].fields || (c[p].fields = {}), c[p].fields[E] = { value: R };
    },
    updateMeta: (c, h) => {
      const { formInstance: p, name: E, value: R } = h.payload;
      c[p].meta || (c[p].meta = {
        isLoading: !1,
        step: 0
      }), c[p].meta[E] = R;
    }
  }
}), {
  registerForm: XN,
  updateField: Ko,
  updateMeta: ZN
} = CT.actions, JN = CT.reducer, eM = (c) => (h) => h.forms[c], tM = (c) => (h) => h.forms[c].meta.step, Ov = (c) => (h) => h.forms[c].fields;
function nM(c, h, p) {
  return Ko({ formInstance: c, name: h, value: p });
}
function rM(c, h, p) {
  return ZN({ formInstance: c, name: h, value: p });
}
function aM(c) {
  return () => {
  };
}
const Q1 = {
  update_field: nM,
  update_meta: rM,
  submit: aM
};
function iM(c) {
  const {
    formInstance: h,
    name: p,
    label: E,
    type: R,
    events: w,
    disabled: g = !1,
    ...H
  } = c, M = gc(), x = [
    "button",
    "button--" + p,
    "button--" + (c.buttonType || "primary")
  ], U = () => {
    w && w.forEach((N) => {
      if (N.mapping)
        for (const A in N.mapping) {
          const F = N.mapping[A];
          M(Q1[N.name](h, A, F));
        }
      else
        M(Q1[N.name](h));
    });
  };
  return /* @__PURE__ */ zt.jsx(
    "button",
    {
      type: R,
      className: x.filter(Boolean).join(" "),
      onClick: U,
      children: E
    },
    p
  );
}
function Dv(c, h) {
  if (!h || h.length === 0)
    return !0;
  let p = h[0].logicalOperator === "and";
  for (const E of h) {
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
function uM(c) {
  const {
    formInstance: h,
    name: p,
    label: E,
    options: R,
    defaultValue: w,
    visibilityConditions: g,
    validationRules: H,
    helpText: M,
    emailTag: x,
    storeAsDonorMeta: U,
    showInReceipt: N,
    nodeType: A,
    childNodes: F,
    disabled: B = !1,
    ...Y
  } = c, V = yc(Ov(h)), le = gc(), oe = Dv(V, g);
  if (dn.useEffect(() => {
    oe && le(Ko({ formInstance: h, name: p, value: w }));
  }, [oe]), V[p] === void 0 || !oe)
    return null;
  const te = [
    "input",
    "input--" + p
  ];
  return /* @__PURE__ */ zt.jsx("div", { className: te.filter(Boolean).join(" "), children: R ? R.map((J) => /* @__PURE__ */ zt.jsxs("div", { className: "input--option", children: [
    /* @__PURE__ */ zt.jsx(
      "input",
      {
        id: h + p + J,
        name: p,
        type: "radio",
        value: J,
        checked: V[p].value === J,
        onChange: () => le(Ko({ formInstance: h, name: p, value: J }))
      },
      J
    ),
    /* @__PURE__ */ zt.jsx("label", { htmlFor: h + p + J, children: J })
  ] })) : /* @__PURE__ */ zt.jsxs(zt.Fragment, { children: [
    /* @__PURE__ */ zt.jsx(
      "input",
      {
        id: h + p,
        name: p,
        type: "checkbox",
        value: "true",
        checked: V[p].value == "true",
        onChange: () => le(Ko({ formInstance: h, name: p, value: V[p].value == "true" ? "false" : "true" }))
      },
      p
    ),
    /* @__PURE__ */ zt.jsx("label", { htmlFor: h + p, children: E })
  ] }) });
}
function oM(c) {
  const {
    formInstance: h,
    name: p,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    allowMultiple: H,
    helpText: M,
    emailTag: x,
    storeAsDonorMeta: U,
    showInReceipt: N,
    nodeType: A,
    childNodes: F,
    disabled: B = !1,
    ...Y
  } = c, V = yc(Ov(h)), le = gc();
  if (dn.useEffect(() => {
    le(Ko({ formInstance: h, name: p, value: R }));
  }, []), V[p] === void 0 || !Dv(V, w))
    return null;
  const oe = [
    "input",
    "input--" + p
  ], te = (J) => {
    J.preventDefault();
  };
  return /* @__PURE__ */ zt.jsxs("div", { className: oe.filter(Boolean).join(" "), children: [
    E && /* @__PURE__ */ zt.jsx("label", { className: "input--label", htmlFor: p, children: E }),
    /* @__PURE__ */ zt.jsx(
      "input",
      {
        id: p,
        className: "input--field",
        disabled: B,
        autoComplete: "email",
        ...Y,
        onChange: te
      }
    )
  ] });
}
function lM(c) {
  const {
    formInstance: h,
    html: p,
    name: E,
    label: R,
    defaultValue: w,
    visibilityConditions: g,
    helpText: H,
    emailTag: M,
    storeAsDonorMeta: x,
    showInReceipt: U,
    nodeType: N,
    childNodes: A,
    disabled: F = !1,
    ...B
  } = c, Y = yc(Ov(h));
  return gc(), Dv(Y, g) ? /* @__PURE__ */ zt.jsx("div", { dangerouslySetInnerHTML: { __html: p } }) : null;
}
function sM(c) {
  const {
    formInstance: h,
    name: p,
    label: E,
    defaultValue: R,
    visibilityConditions: w,
    validationRules: g,
    helpText: H,
    emailTag: M,
    storeAsDonorMeta: x,
    showInReceipt: U,
    nodeType: N,
    childNodes: A,
    disabled: F = !1,
    ...B
  } = c, Y = yc(Ov(h)), V = gc();
  if (dn.useEffect(() => {
    V(Ko({ formInstance: h, name: p, value: R }));
  }, []), Y[p] === void 0 || !Dv(Y, w))
    return null;
  const le = [
    "input",
    "input--" + p
  ], oe = (te) => {
    te.preventDefault();
  };
  return /* @__PURE__ */ zt.jsxs("div", { className: le.filter(Boolean).join(" "), children: [
    E && /* @__PURE__ */ zt.jsx("label", { className: "input--label", htmlFor: p, children: E }),
    /* @__PURE__ */ zt.jsx(
      "input",
      {
        id: p,
        className: "input--field",
        disabled: F,
        ...B,
        onChange: oe
      }
    )
  ] });
}
const bT = FN({
  reducer: {
    forms: JN
  }
});
function cM({ childNodes: c, formInstance: h }) {
  const p = (R) => {
    R.preventDefault();
    const w = bT.getState().forms[h], g = w.fields, H = w.meta, M = {
      form_id: H.formId,
      payment_method: H.payment_method
    };
    for (const x in g)
      if (g.hasOwnProperty(x)) {
        const U = g[x];
        M[x] = U.value;
      }
    E(M).then((x) => {
      x.redirect_url && (window.location.href = x.redirect_url);
    });
  };
  async function E(R) {
    return await (await fetch("http://localhosthttp://localhost//api/v1/donation/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(R)
    })).json();
  }
  return /* @__PURE__ */ zt.jsx(
    "form",
    {
      className: "form",
      onSubmit: p,
      children: c
    }
  );
}
function fM({ childNodes: c }) {
  return /* @__PURE__ */ zt.jsx("div", { className: "group", children: c });
}
function dM(c) {
  const {
    formInstance: h,
    name: p,
    label: E,
    options: R,
    defaultValue: w,
    visibilityConditions: g,
    validationRules: H,
    helpText: M,
    emailTag: x,
    storeAsDonorMeta: U,
    showInReceipt: N,
    nodeType: A,
    childNodes: F,
    disabled: B = !1,
    ...Y
  } = c, V = yc(Ov(h)), le = gc(), oe = Dv(V, g);
  if (dn.useEffect(() => {
    oe && le(Ko({ formInstance: h, name: p, value: w }));
  }, [oe]), V[p] === void 0 || !oe)
    return null;
  const te = [
    "input",
    "input--" + p
  ];
  return /* @__PURE__ */ zt.jsx("div", { className: te.filter(Boolean).join(" "), children: R ? R.map((J) => /* @__PURE__ */ zt.jsxs("div", { className: "input--option", children: [
    /* @__PURE__ */ zt.jsx(
      "input",
      {
        id: h + p + J,
        name: p,
        type: "radio",
        value: J,
        checked: V[p].value === J,
        onChange: () => le(Ko({ formInstance: h, name: p, value: J }))
      },
      p + J
    ),
    /* @__PURE__ */ zt.jsx("label", { htmlFor: h + p + J, children: J })
  ] })) : /* @__PURE__ */ zt.jsxs(zt.Fragment, { children: [
    /* @__PURE__ */ zt.jsx(
      "input",
      {
        id: h + p,
        name: p,
        type: "radio",
        value: "true",
        checked: V[p].value === !0,
        onChange: () => le(Ko({ formInstance: h, name: p, value: V[p].value !== !0 }))
      },
      p
    ),
    /* @__PURE__ */ zt.jsx("label", { htmlFor: h + p, children: E })
  ] }) });
}
function pM({ childNodes: c }) {
  return /* @__PURE__ */ zt.jsx("div", { className: "section", children: c });
}
function vM({ formInstance: c, childNodes: h }) {
  const p = yc(tM(c));
  return /* @__PURE__ */ zt.jsx("div", { className: "steps", children: h[p - 1] });
}
function hM({ childNodes: c }) {
  return /* @__PURE__ */ zt.jsx("div", { className: "step", children: c });
}
const mM = {
  button: iM,
  checkbox: uM,
  email: oM,
  html: lM,
  text: sM,
  group: fM,
  radio: dM,
  section: pM,
  steps: vM,
  step: hM,
  form: cM
}, RT = (c, h) => {
  let p = null;
  if (p = mM[c.nodeType], !p)
    return null;
  const E = c.nodes ? c.nodes.map((R) => RT(R, h)) : null;
  return /* @__PURE__ */ zt.jsx(p, { formInstance: h, childNodes: E, ...c }, c.name);
};
function yM({ formInstance: c, formId: h }) {
  const p = yc(eM(c)), E = gc(), [R, w] = dn.useState(!0), [g, H] = dn.useState();
  return dn.useEffect(() => {
    gM(h).then((M) => {
      M.config && H(JSON.parse(M.config)), w(!1);
    }), E(XN({ formInstance: c, formId: h, step: 0 }));
  }, [c]), p === void 0 ? null : R ? /* @__PURE__ */ zt.jsx(zt.Fragment, { children: "Loading..." }) : /* @__PURE__ */ zt.jsx(zt.Fragment, { children: RT(g, c) });
}
async function gM(c) {
  return await (await fetch("http://localhost/api/v1/form/config/" + c, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
}
let SM = 0;
function EM() {
  return SM++;
}
function TT(c, h, p) {
  if (c.nodeType === 3) {
    const E = c.nodeValue.match(h);
    if (E) {
      const R = p(E);
      c.parentNode.replaceChild(R, c);
    }
  } else
    c.childNodes.forEach((E) => TT(E, h, p));
}
const CM = /\[fundy-form:(\d+)\]/, bM = (c) => {
  const h = document.createElement("div");
  return h.className = "fundy-form", h.setAttribute("data-form-id", c[1]), h;
};
TT(document.body, CM, bM);
for (const c of document.getElementsByClassName("fundy-form")) {
  const h = EM(), p = c.getAttribute("data-form-id");
  Tv.createRoot(c).render(
    /* @__PURE__ */ zt.jsx(vk.StrictMode, { children: /* @__PURE__ */ zt.jsx(Yk, { store: bT, children: /* @__PURE__ */ zt.jsx(yM, { formInstance: h, formId: p }) }) })
  );
}
