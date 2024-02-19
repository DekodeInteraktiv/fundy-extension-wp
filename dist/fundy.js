function Sk(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var o0 = { exports: {} }, Cv = {}, l0 = { exports: {} }, Ut = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c1;
function Ek() {
  if (c1)
    return Ut;
  c1 = 1;
  var c = Symbol.for("react.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), O = Symbol.iterator;
  function L(M) {
    return M === null || typeof M != "object" ? null : (M = O && M[O] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, B = {};
  function I(M, oe, Re) {
    this.props = M, this.context = oe, this.refs = B, this.updater = Re || U;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(M, oe) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, oe, "setState");
  }, I.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function le() {
  }
  le.prototype = I.prototype;
  function ue(M, oe, Re) {
    this.props = M, this.context = oe, this.refs = B, this.updater = Re || U;
  }
  var ee = ue.prototype = new le();
  ee.constructor = ue, A(ee, I.prototype), ee.isPureReactComponent = !0;
  var Z = Array.isArray, $ = Object.prototype.hasOwnProperty, fe = { current: null }, ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ue(M, oe, Re) {
    var ot, Ze = {}, Tt = null, ht = null;
    if (oe != null)
      for (ot in oe.ref !== void 0 && (ht = oe.ref), oe.key !== void 0 && (Tt = "" + oe.key), oe)
        $.call(oe, ot) && !ve.hasOwnProperty(ot) && (Ze[ot] = oe[ot]);
    var bt = arguments.length - 2;
    if (bt === 1)
      Ze.children = Re;
    else if (1 < bt) {
      for (var mt = Array(bt), Pt = 0; Pt < bt; Pt++)
        mt[Pt] = arguments[Pt + 2];
      Ze.children = mt;
    }
    if (M && M.defaultProps)
      for (ot in bt = M.defaultProps, bt)
        Ze[ot] === void 0 && (Ze[ot] = bt[ot]);
    return { $$typeof: c, type: M, key: Tt, ref: ht, props: Ze, _owner: fe.current };
  }
  function Oe(M, oe) {
    return { $$typeof: c, type: M.type, key: oe, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function Ye(M) {
    return typeof M == "object" && M !== null && M.$$typeof === c;
  }
  function We(M) {
    var oe = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(Re) {
      return oe[Re];
    });
  }
  var it = /\/+/g;
  function De(M, oe) {
    return typeof M == "object" && M !== null && M.key != null ? We("" + M.key) : oe.toString(36);
  }
  function $e(M, oe, Re, ot, Ze) {
    var Tt = typeof M;
    (Tt === "undefined" || Tt === "boolean") && (M = null);
    var ht = !1;
    if (M === null)
      ht = !0;
    else
      switch (Tt) {
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case c:
            case p:
              ht = !0;
          }
      }
    if (ht)
      return ht = M, Ze = Ze(ht), M = ot === "" ? "." + De(ht, 0) : ot, Z(Ze) ? (Re = "", M != null && (Re = M.replace(it, "$&/") + "/"), $e(Ze, oe, Re, "", function(Pt) {
        return Pt;
      })) : Ze != null && (Ye(Ze) && (Ze = Oe(Ze, Re + (!Ze.key || ht && ht.key === Ze.key ? "" : ("" + Ze.key).replace(it, "$&/") + "/") + M)), oe.push(Ze)), 1;
    if (ht = 0, ot = ot === "" ? "." : ot + ":", Z(M))
      for (var bt = 0; bt < M.length; bt++) {
        Tt = M[bt];
        var mt = ot + De(Tt, bt);
        ht += $e(Tt, oe, Re, mt, Ze);
      }
    else if (mt = L(M), typeof mt == "function")
      for (M = mt.call(M), bt = 0; !(Tt = M.next()).done; )
        Tt = Tt.value, mt = ot + De(Tt, bt++), ht += $e(Tt, oe, Re, mt, Ze);
    else if (Tt === "object")
      throw oe = String(M), Error("Objects are not valid as a React child (found: " + (oe === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : oe) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function st(M, oe, Re) {
    if (M == null)
      return M;
    var ot = [], Ze = 0;
    return $e(M, ot, "", "", function(Tt) {
      return oe.call(Re, Tt, Ze++);
    }), ot;
  }
  function ut(M) {
    if (M._status === -1) {
      var oe = M._result;
      oe = oe(), oe.then(function(Re) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = Re);
      }, function(Re) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = Re);
      }), M._status === -1 && (M._status = 0, M._result = oe);
    }
    if (M._status === 1)
      return M._result.default;
    throw M._result;
  }
  var we = { current: null }, me = { transition: null }, Ie = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: me, ReactCurrentOwner: fe };
  return Ut.Children = { map: st, forEach: function(M, oe, Re) {
    st(M, function() {
      oe.apply(this, arguments);
    }, Re);
  }, count: function(M) {
    var oe = 0;
    return st(M, function() {
      oe++;
    }), oe;
  }, toArray: function(M) {
    return st(M, function(oe) {
      return oe;
    }) || [];
  }, only: function(M) {
    if (!Ye(M))
      throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, Ut.Component = I, Ut.Fragment = h, Ut.Profiler = b, Ut.PureComponent = ue, Ut.StrictMode = S, Ut.Suspense = N, Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ie, Ut.cloneElement = function(M, oe, Re) {
    if (M == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var ot = A({}, M.props), Ze = M.key, Tt = M.ref, ht = M._owner;
    if (oe != null) {
      if (oe.ref !== void 0 && (Tt = oe.ref, ht = fe.current), oe.key !== void 0 && (Ze = "" + oe.key), M.type && M.type.defaultProps)
        var bt = M.type.defaultProps;
      for (mt in oe)
        $.call(oe, mt) && !ve.hasOwnProperty(mt) && (ot[mt] = oe[mt] === void 0 && bt !== void 0 ? bt[mt] : oe[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1)
      ot.children = Re;
    else if (1 < mt) {
      bt = Array(mt);
      for (var Pt = 0; Pt < mt; Pt++)
        bt[Pt] = arguments[Pt + 2];
      ot.children = bt;
    }
    return { $$typeof: c, type: M.type, key: Ze, ref: Tt, props: ot, _owner: ht };
  }, Ut.createContext = function(M) {
    return M = { $$typeof: g, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: T, _context: M }, M.Consumer = M;
  }, Ut.createElement = Ue, Ut.createFactory = function(M) {
    var oe = Ue.bind(null, M);
    return oe.type = M, oe;
  }, Ut.createRef = function() {
    return { current: null };
  }, Ut.forwardRef = function(M) {
    return { $$typeof: H, render: M };
  }, Ut.isValidElement = Ye, Ut.lazy = function(M) {
    return { $$typeof: j, _payload: { _status: -1, _result: M }, _init: ut };
  }, Ut.memo = function(M, oe) {
    return { $$typeof: _, type: M, compare: oe === void 0 ? null : oe };
  }, Ut.startTransition = function(M) {
    var oe = me.transition;
    me.transition = {};
    try {
      M();
    } finally {
      me.transition = oe;
    }
  }, Ut.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ut.useCallback = function(M, oe) {
    return we.current.useCallback(M, oe);
  }, Ut.useContext = function(M) {
    return we.current.useContext(M);
  }, Ut.useDebugValue = function() {
  }, Ut.useDeferredValue = function(M) {
    return we.current.useDeferredValue(M);
  }, Ut.useEffect = function(M, oe) {
    return we.current.useEffect(M, oe);
  }, Ut.useId = function() {
    return we.current.useId();
  }, Ut.useImperativeHandle = function(M, oe, Re) {
    return we.current.useImperativeHandle(M, oe, Re);
  }, Ut.useInsertionEffect = function(M, oe) {
    return we.current.useInsertionEffect(M, oe);
  }, Ut.useLayoutEffect = function(M, oe) {
    return we.current.useLayoutEffect(M, oe);
  }, Ut.useMemo = function(M, oe) {
    return we.current.useMemo(M, oe);
  }, Ut.useReducer = function(M, oe, Re) {
    return we.current.useReducer(M, oe, Re);
  }, Ut.useRef = function(M) {
    return we.current.useRef(M);
  }, Ut.useState = function(M) {
    return we.current.useState(M);
  }, Ut.useSyncExternalStore = function(M, oe, Re) {
    return we.current.useSyncExternalStore(M, oe, Re);
  }, Ut.useTransition = function() {
    return we.current.useTransition();
  }, Ut.version = "18.2.0", Ut;
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
var f1;
function Ck() {
  return f1 || (f1 = 1, function(c, p) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = "18.2.0", S = Symbol.for("react.element"), b = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), _ = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), I = Symbol.iterator, le = "@@iterator";
      function ue(E) {
        if (E === null || typeof E != "object")
          return null;
        var D = I && E[I] || E[le];
        return typeof D == "function" ? D : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Z = {
        transition: null
      }, $ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ve = {}, Ue = null;
      function Oe(E) {
        Ue = E;
      }
      ve.setExtraStackFrame = function(E) {
        Ue = E;
      }, ve.getCurrentStack = null, ve.getStackAddendum = function() {
        var E = "";
        Ue && (E += Ue);
        var D = ve.getCurrentStack;
        return D && (E += D() || ""), E;
      };
      var Ye = !1, We = !1, it = !1, De = !1, $e = !1, st = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: Z,
        ReactCurrentOwner: fe
      };
      st.ReactDebugCurrentFrame = ve, st.ReactCurrentActQueue = $;
      function ut(E) {
        {
          for (var D = arguments.length, K = new Array(D > 1 ? D - 1 : 0), te = 1; te < D; te++)
            K[te - 1] = arguments[te];
          me("warn", E, K);
        }
      }
      function we(E) {
        {
          for (var D = arguments.length, K = new Array(D > 1 ? D - 1 : 0), te = 1; te < D; te++)
            K[te - 1] = arguments[te];
          me("error", E, K);
        }
      }
      function me(E, D, K) {
        {
          var te = st.ReactDebugCurrentFrame, ye = te.getStackAddendum();
          ye !== "" && (D += "%s", K = K.concat([ye]));
          var rt = K.map(function(Te) {
            return String(Te);
          });
          rt.unshift("Warning: " + D), Function.prototype.apply.call(console[E], console, rt);
        }
      }
      var Ie = {};
      function M(E, D) {
        {
          var K = E.constructor, te = K && (K.displayName || K.name) || "ReactClass", ye = te + "." + D;
          if (Ie[ye])
            return;
          we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, te), Ie[ye] = !0;
        }
      }
      var oe = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
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
        enqueueForceUpdate: function(E, D, K) {
          M(E, "forceUpdate");
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
        enqueueReplaceState: function(E, D, K, te) {
          M(E, "replaceState");
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
        enqueueSetState: function(E, D, K, te) {
          M(E, "setState");
        }
      }, Re = Object.assign, ot = {};
      Object.freeze(ot);
      function Ze(E, D, K) {
        this.props = E, this.context = D, this.refs = ot, this.updater = K || oe;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(E, D) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, D, "setState");
      }, Ze.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var Tt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(E, D) {
          Object.defineProperty(Ze.prototype, E, {
            get: function() {
              ut("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var bt in Tt)
          Tt.hasOwnProperty(bt) && ht(bt, Tt[bt]);
      }
      function mt() {
      }
      mt.prototype = Ze.prototype;
      function Pt(E, D, K) {
        this.props = E, this.context = D, this.refs = ot, this.updater = K || oe;
      }
      var tr = Pt.prototype = new mt();
      tr.constructor = Pt, Re(tr, Ze.prototype), tr.isPureReactComponent = !0;
      function $n() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var ke = Array.isArray;
      function en(E) {
        return ke(E);
      }
      function _e(E) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, K = D && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return K;
        }
      }
      function vn(E) {
        try {
          return Rn(E), !1;
        } catch {
          return !0;
        }
      }
      function Rn(E) {
        return "" + E;
      }
      function Tn(E) {
        if (vn(E))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(E)), Rn(E);
      }
      function Xr(E, D, K) {
        var te = E.displayName;
        if (te)
          return te;
        var ye = D.displayName || D.name || "";
        return ye !== "" ? K + "(" + ye + ")" : K;
      }
      function Zr(E) {
        return E.displayName || "Context";
      }
      function nr(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case T:
            return "Fragment";
          case b:
            return "Portal";
          case H:
            return "Profiler";
          case g:
            return "StrictMode";
          case O:
            return "Suspense";
          case L:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case _:
              var D = E;
              return Zr(D) + ".Consumer";
            case N:
              var K = E;
              return Zr(K._context) + ".Provider";
            case j:
              return Xr(E, E.render, "ForwardRef");
            case U:
              var te = E.displayName || null;
              return te !== null ? te : nr(E.type) || "Memo";
            case A: {
              var ye = E, rt = ye._payload, Te = ye._init;
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
      function ea(E) {
        if (Tr.call(E, "ref")) {
          var D = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function xn(E) {
        if (Tr.call(E, "key")) {
          var D = Object.getOwnPropertyDescriptor(E, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function zr(E, D) {
        var K = function() {
          wr || (wr = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        K.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: K,
          configurable: !0
        });
      }
      function yi(E, D) {
        var K = function() {
          Sa || (Sa = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        K.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: K,
          configurable: !0
        });
      }
      function Ea(E) {
        if (typeof E.ref == "string" && fe.current && E.__self && fe.current.stateNode !== E.__self) {
          var D = nr(fe.current.type);
          fr[D] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, E.ref), fr[D] = !0);
        }
      }
      var Se = function(E, D, K, te, ye, rt, Te) {
        var tt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: E,
          key: D,
          ref: K,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: rt
        };
        return tt._store = {}, Object.defineProperty(tt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(tt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.defineProperty(tt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
      };
      function qe(E, D, K) {
        var te, ye = {}, rt = null, Te = null, tt = null, _t = null;
        if (D != null) {
          ea(D) && (Te = D.ref, Ea(D)), xn(D) && (Tn(D.key), rt = "" + D.key), tt = D.__self === void 0 ? null : D.__self, _t = D.__source === void 0 ? null : D.__source;
          for (te in D)
            Tr.call(D, te) && !Jr.hasOwnProperty(te) && (ye[te] = D[te]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ye.children = K;
        else if (Ht > 1) {
          for (var cn = Array(Ht), nn = 0; nn < Ht; nn++)
            cn[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(cn), ye.children = cn;
        }
        if (E && E.defaultProps) {
          var fn = E.defaultProps;
          for (te in fn)
            ye[te] === void 0 && (ye[te] = fn[te]);
        }
        if (rt || Te) {
          var yn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          rt && zr(ye, yn), Te && yi(ye, yn);
        }
        return Se(E, rt, Te, tt, _t, fe.current, ye);
      }
      function Rt(E, D) {
        var K = Se(E.type, D, E.ref, E._self, E._source, E._owner, E.props);
        return K;
      }
      function Wt(E, D, K) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var te, ye = Re({}, E.props), rt = E.key, Te = E.ref, tt = E._self, _t = E._source, Ht = E._owner;
        if (D != null) {
          ea(D) && (Te = D.ref, Ht = fe.current), xn(D) && (Tn(D.key), rt = "" + D.key);
          var cn;
          E.type && E.type.defaultProps && (cn = E.type.defaultProps);
          for (te in D)
            Tr.call(D, te) && !Jr.hasOwnProperty(te) && (D[te] === void 0 && cn !== void 0 ? ye[te] = cn[te] : ye[te] = D[te]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          ye.children = K;
        else if (nn > 1) {
          for (var fn = Array(nn), yn = 0; yn < nn; yn++)
            fn[yn] = arguments[yn + 2];
          ye.children = fn;
        }
        return Se(E.type, rt, Te, tt, _t, Ht, ye);
      }
      function Gt(E) {
        return typeof E == "object" && E !== null && E.$$typeof === S;
      }
      var Fn = ".", On = ":";
      function _r(E) {
        var D = /[=:]/g, K = {
          "=": "=0",
          ":": "=2"
        }, te = E.replace(D, function(ye) {
          return K[ye];
        });
        return "$" + te;
      }
      var tn = !1, Ur = /\/+/g;
      function qt(E) {
        return E.replace(Ur, "$&/");
      }
      function Kt(E, D) {
        return typeof E == "object" && E !== null && E.key != null ? (Tn(E.key), _r("" + E.key)) : D.toString(36);
      }
      function ri(E, D, K, te, ye) {
        var rt = typeof E;
        (rt === "undefined" || rt === "boolean") && (E = null);
        var Te = !1;
        if (E === null)
          Te = !0;
        else
          switch (rt) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case S:
                case b:
                  Te = !0;
              }
          }
        if (Te) {
          var tt = E, _t = ye(tt), Ht = te === "" ? Fn + Kt(tt, 0) : te;
          if (en(_t)) {
            var cn = "";
            Ht != null && (cn = qt(Ht) + "/"), ri(_t, D, cn, "", function(hd) {
              return hd;
            });
          } else
            _t != null && (Gt(_t) && (_t.key && (!tt || tt.key !== _t.key) && Tn(_t.key), _t = Rt(
              _t,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              K + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (_t.key && (!tt || tt.key !== _t.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                qt("" + _t.key) + "/"
              ) : "") + Ht
            )), D.push(_t));
          return 1;
        }
        var nn, fn, yn = 0, Nt = te === "" ? Fn : te + On;
        if (en(E))
          for (var $i = 0; $i < E.length; $i++)
            nn = E[$i], fn = Nt + Kt(nn, $i), yn += ri(nn, D, K, fn, ye);
        else {
          var dl = ue(E);
          if (typeof dl == "function") {
            var ys = E;
            dl === ys.entries && (tn || ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tn = !0);
            for (var vd = dl.call(ys), oi, gs = 0; !(oi = vd.next()).done; )
              nn = oi.value, fn = Nt + Kt(nn, gs++), yn += ri(nn, D, K, fn, ye);
          } else if (rt === "object") {
            var Ss = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (Ss === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return yn;
      }
      function za(E, D, K) {
        if (E == null)
          return E;
        var te = [], ye = 0;
        return ri(E, te, "", "", function(rt) {
          return D.call(K, rt, ye++);
        }), te;
      }
      function mu(E) {
        var D = 0;
        return za(E, function() {
          D++;
        }), D;
      }
      function lo(E, D, K) {
        za(E, function() {
          D.apply(this, arguments);
        }, K);
      }
      function el(E) {
        return za(E, function(D) {
          return D;
        }) || [];
      }
      function Vi(E) {
        if (!Gt(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function yu(E) {
        var D = {
          $$typeof: _,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
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
        D.Provider = {
          $$typeof: N,
          _context: D
        };
        var K = !1, te = !1, ye = !1;
        {
          var rt = {
            $$typeof: _,
            _context: D
          };
          Object.defineProperties(rt, {
            Provider: {
              get: function() {
                return te || (te = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Te) {
                D.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Te) {
                D._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Te) {
                D._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Te) {
                D._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return K || (K = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Te) {
                ye || (ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ye = !0);
              }
            }
          }), D.Consumer = rt;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Ca = -1, gi = 0, ba = 1, Si = 2;
      function jr(E) {
        if (E._status === Ca) {
          var D = E._result, K = D();
          if (K.then(function(rt) {
            if (E._status === gi || E._status === Ca) {
              var Te = E;
              Te._status = ba, Te._result = rt;
            }
          }, function(rt) {
            if (E._status === gi || E._status === Ca) {
              var Te = E;
              Te._status = Si, Te._result = rt;
            }
          }), E._status === Ca) {
            var te = E;
            te._status = gi, te._result = K;
          }
        }
        if (E._status === ba) {
          var ye = E._result;
          return ye === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw E._result;
      }
      function Ra(E) {
        var D = {
          // We use these fields to store the result.
          _status: Ca,
          _result: E
        }, K = {
          $$typeof: A,
          _payload: D,
          _init: jr
        };
        {
          var te, ye;
          Object.defineProperties(K, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(rt) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = rt, Object.defineProperty(K, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(rt) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = rt, Object.defineProperty(K, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return K;
      }
      function Ei(E) {
        E != null && E.$$typeof === U ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? we("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: j,
          render: E
        };
        {
          var K;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(te) {
              K = te, !E.name && !E.displayName && (E.displayName = te);
            }
          });
        }
        return D;
      }
      var k;
      k = Symbol.for("react.module.reference");
      function se(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === T || E === H || $e || E === g || E === O || E === L || De || E === B || Ye || We || it || typeof E == "object" && E !== null && (E.$$typeof === A || E.$$typeof === U || E.$$typeof === N || E.$$typeof === _ || E.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === k || E.getModuleId !== void 0));
      }
      function Ee(E, D) {
        se(E) || we("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var K = {
          $$typeof: U,
          type: E,
          compare: D === void 0 ? null : D
        };
        {
          var te;
          Object.defineProperty(K, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return te;
            },
            set: function(ye) {
              te = ye, !E.name && !E.displayName && (E.displayName = ye);
            }
          });
        }
        return K;
      }
      function Le() {
        var E = ee.current;
        return E === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function gt(E) {
        var D = Le();
        if (E._context !== void 0) {
          var K = E._context;
          K.Consumer === E ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : K.Provider === E && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(E);
      }
      function Mt(E) {
        var D = Le();
        return D.useState(E);
      }
      function St(E, D, K) {
        var te = Le();
        return te.useReducer(E, D, K);
      }
      function Je(E) {
        var D = Le();
        return D.useRef(E);
      }
      function Bn(E, D) {
        var K = Le();
        return K.useEffect(E, D);
      }
      function hn(E, D) {
        var K = Le();
        return K.useInsertionEffect(E, D);
      }
      function mn(E, D) {
        var K = Le();
        return K.useLayoutEffect(E, D);
      }
      function dr(E, D) {
        var K = Le();
        return K.useCallback(E, D);
      }
      function Ci(E, D) {
        var K = Le();
        return K.useMemo(E, D);
      }
      function tl(E, D, K) {
        var te = Le();
        return te.useImperativeHandle(E, D, K);
      }
      function Ft(E, D) {
        {
          var K = Le();
          return K.useDebugValue(E, D);
        }
      }
      function dd() {
        var E = Le();
        return E.useTransition();
      }
      function ai(E) {
        var D = Le();
        return D.useDeferredValue(E);
      }
      function wt() {
        var E = Le();
        return E.useId();
      }
      function bi(E, D, K) {
        var te = Le();
        return te.useSyncExternalStore(E, D, K);
      }
      var gu = 0, nl, Su, ta, ps, Pr, vs, hs;
      function Ec() {
      }
      Ec.__reactDisabledLog = !0;
      function rl() {
        {
          if (gu === 0) {
            nl = console.log, Su = console.info, ta = console.warn, ps = console.error, Pr = console.group, vs = console.groupCollapsed, hs = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: Ec,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          gu++;
        }
      }
      function Eu() {
        {
          if (gu--, gu === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Re({}, E, {
                value: nl
              }),
              info: Re({}, E, {
                value: Su
              }),
              warn: Re({}, E, {
                value: ta
              }),
              error: Re({}, E, {
                value: ps
              }),
              group: Re({}, E, {
                value: Pr
              }),
              groupCollapsed: Re({}, E, {
                value: vs
              }),
              groupEnd: Re({}, E, {
                value: hs
              })
            });
          }
          gu < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = st.ReactCurrentDispatcher, Fr;
      function Cu(E, D, K) {
        {
          if (Fr === void 0)
            try {
              throw Error();
            } catch (ye) {
              var te = ye.stack.trim().match(/\n( *(at )?)/);
              Fr = te && te[1] || "";
            }
          return `
` + Fr + E;
        }
      }
      var bu = !1, Ru;
      {
        var al = typeof WeakMap == "function" ? WeakMap : Map;
        Ru = new al();
      }
      function il(E, D) {
        if (!E || bu)
          return "";
        {
          var K = Ru.get(E);
          if (K !== void 0)
            return K;
        }
        var te;
        bu = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var rt;
        rt = ii.current, ii.current = null, rl();
        try {
          if (D) {
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
              } catch (Nt) {
                te = Nt;
              }
              Reflect.construct(E, [], Te);
            } else {
              try {
                Te.call();
              } catch (Nt) {
                te = Nt;
              }
              E.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Nt) {
              te = Nt;
            }
            E();
          }
        } catch (Nt) {
          if (Nt && te && typeof Nt.stack == "string") {
            for (var tt = Nt.stack.split(`
`), _t = te.stack.split(`
`), Ht = tt.length - 1, cn = _t.length - 1; Ht >= 1 && cn >= 0 && tt[Ht] !== _t[cn]; )
              cn--;
            for (; Ht >= 1 && cn >= 0; Ht--, cn--)
              if (tt[Ht] !== _t[cn]) {
                if (Ht !== 1 || cn !== 1)
                  do
                    if (Ht--, cn--, cn < 0 || tt[Ht] !== _t[cn]) {
                      var nn = `
` + tt[Ht].replace(" at new ", " at ");
                      return E.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", E.displayName)), typeof E == "function" && Ru.set(E, nn), nn;
                    }
                  while (Ht >= 1 && cn >= 0);
                break;
              }
          }
        } finally {
          bu = !1, ii.current = rt, Eu(), Error.prepareStackTrace = ye;
        }
        var fn = E ? E.displayName || E.name : "", yn = fn ? Cu(fn) : "";
        return typeof E == "function" && Ru.set(E, yn), yn;
      }
      function Hi(E, D, K) {
        return il(E, !1);
      }
      function pd(E) {
        var D = E.prototype;
        return !!(D && D.isReactComponent);
      }
      function Ri(E, D, K) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return il(E, pd(E));
        if (typeof E == "string")
          return Cu(E);
        switch (E) {
          case O:
            return Cu("Suspense");
          case L:
            return Cu("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case j:
              return Hi(E.render);
            case U:
              return Ri(E.type, D, K);
            case A: {
              var te = E, ye = te._payload, rt = te._init;
              try {
                return Ri(rt(ye), D, K);
              } catch {
              }
            }
          }
        return "";
      }
      var $t = {}, ul = st.ReactDebugCurrentFrame;
      function so(E) {
        if (E) {
          var D = E._owner, K = Ri(E.type, E._source, D ? D.type : null);
          ul.setExtraStackFrame(K);
        } else
          ul.setExtraStackFrame(null);
      }
      function ol(E, D, K, te, ye) {
        {
          var rt = Function.call.bind(Tr);
          for (var Te in E)
            if (rt(E, Te)) {
              var tt = void 0;
              try {
                if (typeof E[Te] != "function") {
                  var _t = Error((te || "React class") + ": " + K + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _t.name = "Invariant Violation", _t;
                }
                tt = E[Te](D, Te, te, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                tt = Ht;
              }
              tt && !(tt instanceof Error) && (so(ye), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", K, Te, typeof tt), so(null)), tt instanceof Error && !(tt.message in $t) && ($t[tt.message] = !0, so(ye), we("Failed %s type: %s", K, tt.message), so(null));
            }
        }
      }
      function Vt(E) {
        if (E) {
          var D = E._owner, K = Ri(E.type, E._source, D ? D.type : null);
          Oe(K);
        } else
          Oe(null);
      }
      var ll;
      ll = !1;
      function sl() {
        if (fe.current) {
          var E = nr(fe.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function pt(E) {
        if (E !== void 0) {
          var D = E.fileName.replace(/^.*[\\\/]/, ""), K = E.lineNumber;
          return `

Check your code at ` + D + ":" + K + ".";
        }
        return "";
      }
      function co(E) {
        return E != null ? pt(E.__source) : "";
      }
      var Dn = {};
      function na(E) {
        var D = sl();
        if (!D) {
          var K = typeof E == "string" ? E : E.displayName || E.name;
          K && (D = `

Check the top-level render call using <` + K + ">.");
        }
        return D;
      }
      function Vr(E, D) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var K = na(D);
          if (!Dn[K]) {
            Dn[K] = !0;
            var te = "";
            E && E._owner && E._owner !== fe.current && (te = " It was passed a child from " + nr(E._owner.type) + "."), Vt(E), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, te), Vt(null);
          }
        }
      }
      function Tu(E, D) {
        if (typeof E == "object") {
          if (en(E))
            for (var K = 0; K < E.length; K++) {
              var te = E[K];
              Gt(te) && Vr(te, D);
            }
          else if (Gt(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var ye = ue(E);
            if (typeof ye == "function" && ye !== E.entries)
              for (var rt = ye.call(E), Te; !(Te = rt.next()).done; )
                Gt(Te.value) && Vr(Te.value, D);
          }
        }
      }
      function An(E) {
        {
          var D = E.type;
          if (D == null || typeof D == "string")
            return;
          var K;
          if (typeof D == "function")
            K = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === U))
            K = D.propTypes;
          else
            return;
          if (K) {
            var te = nr(D);
            ol(K, E.props, "prop", te, E);
          } else if (D.PropTypes !== void 0 && !ll) {
            ll = !0;
            var ye = nr(D);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xt(E) {
        {
          for (var D = Object.keys(E.props), K = 0; K < D.length; K++) {
            var te = D[K];
            if (te !== "children" && te !== "key") {
              Vt(E), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Vt(null);
              break;
            }
          }
          E.ref !== null && (Vt(E), we("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
        }
      }
      function Cc(E, D, K) {
        var te = se(E);
        if (!te) {
          var ye = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = co(D);
          rt ? ye += rt : ye += sl();
          var Te;
          E === null ? Te = "null" : en(E) ? Te = "array" : E !== void 0 && E.$$typeof === S ? (Te = "<" + (nr(E.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof E, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ye);
        }
        var tt = qe.apply(this, arguments);
        if (tt == null)
          return tt;
        if (te)
          for (var _t = 2; _t < arguments.length; _t++)
            Tu(arguments[_t], E);
        return E === T ? Xt(tt) : An(tt), tt;
      }
      var ra = !1;
      function rr(E) {
        var D = Cc.bind(null, E);
        return D.type = E, ra || (ra = !0, ut("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return ut("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), D;
      }
      function Ti(E, D, K) {
        for (var te = Wt.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          Tu(arguments[ye], te.type);
        return An(te), te;
      }
      function bc(E, D) {
        var K = Z.transition;
        Z.transition = {};
        var te = Z.transition;
        Z.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (Z.transition = K, K === null && te._updatedFibers) {
            var ye = te._updatedFibers.size;
            ye > 10 && ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), te._updatedFibers.clear();
          }
        }
      }
      var Ii = !1, wu = null;
      function Rc(E) {
        if (wu === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), K = c && c[D];
            wu = K.call(c, "timers").setImmediate;
          } catch {
            wu = function(ye) {
              Ii === !1 && (Ii = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var rt = new MessageChannel();
              rt.port1.onmessage = ye, rt.port2.postMessage(void 0);
            };
          }
        return wu(E);
      }
      var Ua = 0, _u = !1;
      function xu(E) {
        {
          var D = Ua;
          Ua++, $.current === null && ($.current = []);
          var K = $.isBatchingLegacy, te;
          try {
            if ($.isBatchingLegacy = !0, te = E(), !K && $.didScheduleLegacyUpdate) {
              var ye = $.current;
              ye !== null && ($.didScheduleLegacyUpdate = !1, Du(ye));
            }
          } catch (fn) {
            throw ja(D), fn;
          } finally {
            $.isBatchingLegacy = K;
          }
          if (te !== null && typeof te == "object" && typeof te.then == "function") {
            var rt = te, Te = !1, tt = {
              then: function(fn, yn) {
                Te = !0, rt.then(function(Nt) {
                  ja(D), Ua === 0 ? cl(Nt, fn, yn) : fn(Nt);
                }, function(Nt) {
                  ja(D), yn(Nt);
                });
              }
            };
            return !_u && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (_u = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), tt;
          } else {
            var _t = te;
            if (ja(D), Ua === 0) {
              var Ht = $.current;
              Ht !== null && (Du(Ht), $.current = null);
              var cn = {
                then: function(fn, yn) {
                  $.current === null ? ($.current = [], cl(_t, fn, yn)) : fn(_t);
                }
              };
              return cn;
            } else {
              var nn = {
                then: function(fn, yn) {
                  fn(_t);
                }
              };
              return nn;
            }
          }
        }
      }
      function ja(E) {
        E !== Ua - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = E;
      }
      function cl(E, D, K) {
        {
          var te = $.current;
          if (te !== null)
            try {
              Du(te), Rc(function() {
                te.length === 0 ? ($.current = null, D(E)) : cl(E, D, K);
              });
            } catch (ye) {
              K(ye);
            }
          else
            D(E);
        }
      }
      var Ou = !1;
      function Du(E) {
        if (!Ou) {
          Ou = !0;
          var D = 0;
          try {
            for (; D < E.length; D++) {
              var K = E[D];
              do
                K = K(!0);
              while (K !== null);
            }
            E.length = 0;
          } catch (te) {
            throw E = E.slice(D + 1), te;
          } finally {
            Ou = !1;
          }
        }
      }
      var fo = Cc, fl = Ti, ms = rr, ui = {
        map: za,
        forEach: lo,
        count: mu,
        toArray: el,
        only: Vi
      };
      p.Children = ui, p.Component = Ze, p.Fragment = T, p.Profiler = H, p.PureComponent = Pt, p.StrictMode = g, p.Suspense = O, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = st, p.cloneElement = fl, p.createContext = yu, p.createElement = fo, p.createFactory = ms, p.createRef = $n, p.forwardRef = Ei, p.isValidElement = Gt, p.lazy = Ra, p.memo = Ee, p.startTransition = bc, p.unstable_act = xu, p.useCallback = dr, p.useContext = gt, p.useDebugValue = Ft, p.useDeferredValue = ai, p.useEffect = Bn, p.useId = wt, p.useImperativeHandle = tl, p.useInsertionEffect = hn, p.useLayoutEffect = mn, p.useMemo = Ci, p.useReducer = St, p.useRef = Je, p.useState = Mt, p.useSyncExternalStore = bi, p.useTransition = dd, p.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tv, Tv.exports)), Tv.exports;
}
({}).NODE_ENV === "production" ? l0.exports = Ek() : l0.exports = Ck();
var Ot = l0.exports;
const Z1 = /* @__PURE__ */ Sk(Ot);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1;
function bk() {
  if (d1)
    return Cv;
  d1 = 1;
  var c = Ot, p = Symbol.for("react.element"), h = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, b = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(H, N, _) {
    var j, O = {}, L = null, U = null;
    _ !== void 0 && (L = "" + _), N.key !== void 0 && (L = "" + N.key), N.ref !== void 0 && (U = N.ref);
    for (j in N)
      S.call(N, j) && !T.hasOwnProperty(j) && (O[j] = N[j]);
    if (H && H.defaultProps)
      for (j in N = H.defaultProps, N)
        O[j] === void 0 && (O[j] = N[j]);
    return { $$typeof: p, type: H, key: L, ref: U, props: O, _owner: b.current };
  }
  return Cv.Fragment = h, Cv.jsx = g, Cv.jsxs = g, Cv;
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
var p1;
function Rk() {
  return p1 || (p1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = Ot, p = Symbol.for("react.element"), h = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), H = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), A = Symbol.iterator, B = "@@iterator";
    function I(k) {
      if (k === null || typeof k != "object")
        return null;
      var se = A && k[A] || k[B];
      return typeof se == "function" ? se : null;
    }
    var le = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(k) {
      {
        for (var se = arguments.length, Ee = new Array(se > 1 ? se - 1 : 0), Le = 1; Le < se; Le++)
          Ee[Le - 1] = arguments[Le];
        ee("error", k, Ee);
      }
    }
    function ee(k, se, Ee) {
      {
        var Le = le.ReactDebugCurrentFrame, gt = Le.getStackAddendum();
        gt !== "" && (se += "%s", Ee = Ee.concat([gt]));
        var Mt = Ee.map(function(St) {
          return String(St);
        });
        Mt.unshift("Warning: " + se), Function.prototype.apply.call(console[k], console, Mt);
      }
    }
    var Z = !1, $ = !1, fe = !1, ve = !1, Ue = !1, Oe;
    Oe = Symbol.for("react.module.reference");
    function Ye(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === S || k === T || Ue || k === b || k === _ || k === j || ve || k === U || Z || $ || fe || typeof k == "object" && k !== null && (k.$$typeof === L || k.$$typeof === O || k.$$typeof === g || k.$$typeof === H || k.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === Oe || k.getModuleId !== void 0));
    }
    function We(k, se, Ee) {
      var Le = k.displayName;
      if (Le)
        return Le;
      var gt = se.displayName || se.name || "";
      return gt !== "" ? Ee + "(" + gt + ")" : Ee;
    }
    function it(k) {
      return k.displayName || "Context";
    }
    function De(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case S:
          return "Fragment";
        case h:
          return "Portal";
        case T:
          return "Profiler";
        case b:
          return "StrictMode";
        case _:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case H:
            var se = k;
            return it(se) + ".Consumer";
          case g:
            var Ee = k;
            return it(Ee._context) + ".Provider";
          case N:
            return We(k, k.render, "ForwardRef");
          case O:
            var Le = k.displayName || null;
            return Le !== null ? Le : De(k.type) || "Memo";
          case L: {
            var gt = k, Mt = gt._payload, St = gt._init;
            try {
              return De(St(Mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $e = Object.assign, st = 0, ut, we, me, Ie, M, oe, Re;
    function ot() {
    }
    ot.__reactDisabledLog = !0;
    function Ze() {
      {
        if (st === 0) {
          ut = console.log, we = console.info, me = console.warn, Ie = console.error, M = console.group, oe = console.groupCollapsed, Re = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: ot,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        st++;
      }
    }
    function Tt() {
      {
        if (st--, st === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $e({}, k, {
              value: ut
            }),
            info: $e({}, k, {
              value: we
            }),
            warn: $e({}, k, {
              value: me
            }),
            error: $e({}, k, {
              value: Ie
            }),
            group: $e({}, k, {
              value: M
            }),
            groupCollapsed: $e({}, k, {
              value: oe
            }),
            groupEnd: $e({}, k, {
              value: Re
            })
          });
        }
        st < 0 && ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = le.ReactCurrentDispatcher, bt;
    function mt(k, se, Ee) {
      {
        if (bt === void 0)
          try {
            throw Error();
          } catch (gt) {
            var Le = gt.stack.trim().match(/\n( *(at )?)/);
            bt = Le && Le[1] || "";
          }
        return `
` + bt + k;
      }
    }
    var Pt = !1, tr;
    {
      var $n = typeof WeakMap == "function" ? WeakMap : Map;
      tr = new $n();
    }
    function ke(k, se) {
      if (!k || Pt)
        return "";
      {
        var Ee = tr.get(k);
        if (Ee !== void 0)
          return Ee;
      }
      var Le;
      Pt = !0;
      var gt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Mt;
      Mt = ht.current, ht.current = null, Ze();
      try {
        if (se) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (Ft) {
              Le = Ft;
            }
            Reflect.construct(k, [], St);
          } else {
            try {
              St.call();
            } catch (Ft) {
              Le = Ft;
            }
            k.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ft) {
            Le = Ft;
          }
          k();
        }
      } catch (Ft) {
        if (Ft && Le && typeof Ft.stack == "string") {
          for (var Je = Ft.stack.split(`
`), Bn = Le.stack.split(`
`), hn = Je.length - 1, mn = Bn.length - 1; hn >= 1 && mn >= 0 && Je[hn] !== Bn[mn]; )
            mn--;
          for (; hn >= 1 && mn >= 0; hn--, mn--)
            if (Je[hn] !== Bn[mn]) {
              if (hn !== 1 || mn !== 1)
                do
                  if (hn--, mn--, mn < 0 || Je[hn] !== Bn[mn]) {
                    var dr = `
` + Je[hn].replace(" at new ", " at ");
                    return k.displayName && dr.includes("<anonymous>") && (dr = dr.replace("<anonymous>", k.displayName)), typeof k == "function" && tr.set(k, dr), dr;
                  }
                while (hn >= 1 && mn >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, ht.current = Mt, Tt(), Error.prepareStackTrace = gt;
      }
      var Ci = k ? k.displayName || k.name : "", tl = Ci ? mt(Ci) : "";
      return typeof k == "function" && tr.set(k, tl), tl;
    }
    function en(k, se, Ee) {
      return ke(k, !1);
    }
    function _e(k) {
      var se = k.prototype;
      return !!(se && se.isReactComponent);
    }
    function vn(k, se, Ee) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return ke(k, _e(k));
      if (typeof k == "string")
        return mt(k);
      switch (k) {
        case _:
          return mt("Suspense");
        case j:
          return mt("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case N:
            return en(k.render);
          case O:
            return vn(k.type, se, Ee);
          case L: {
            var Le = k, gt = Le._payload, Mt = Le._init;
            try {
              return vn(Mt(gt), se, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Rn = Object.prototype.hasOwnProperty, Tn = {}, Xr = le.ReactDebugCurrentFrame;
    function Zr(k) {
      if (k) {
        var se = k._owner, Ee = vn(k.type, k._source, se ? se.type : null);
        Xr.setExtraStackFrame(Ee);
      } else
        Xr.setExtraStackFrame(null);
    }
    function nr(k, se, Ee, Le, gt) {
      {
        var Mt = Function.call.bind(Rn);
        for (var St in k)
          if (Mt(k, St)) {
            var Je = void 0;
            try {
              if (typeof k[St] != "function") {
                var Bn = Error((Le || "React class") + ": " + Ee + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Bn.name = "Invariant Violation", Bn;
              }
              Je = k[St](se, St, Le, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (hn) {
              Je = hn;
            }
            Je && !(Je instanceof Error) && (Zr(gt), ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", Ee, St, typeof Je), Zr(null)), Je instanceof Error && !(Je.message in Tn) && (Tn[Je.message] = !0, Zr(gt), ue("Failed %s type: %s", Ee, Je.message), Zr(null));
          }
      }
    }
    var Tr = Array.isArray;
    function Jr(k) {
      return Tr(k);
    }
    function wr(k) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, Ee = se && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return Ee;
      }
    }
    function Sa(k) {
      try {
        return fr(k), !1;
      } catch {
        return !0;
      }
    }
    function fr(k) {
      return "" + k;
    }
    function ea(k) {
      if (Sa(k))
        return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(k)), fr(k);
    }
    var xn = le.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yi, Ea, Se;
    Se = {};
    function qe(k) {
      if (Rn.call(k, "ref")) {
        var se = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Rt(k) {
      if (Rn.call(k, "key")) {
        var se = Object.getOwnPropertyDescriptor(k, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Wt(k, se) {
      if (typeof k.ref == "string" && xn.current && se && xn.current.stateNode !== se) {
        var Ee = De(xn.current.type);
        Se[Ee] || (ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', De(xn.current.type), k.ref), Se[Ee] = !0);
      }
    }
    function Gt(k, se) {
      {
        var Ee = function() {
          yi || (yi = !0, ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Ee.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function Fn(k, se) {
      {
        var Ee = function() {
          Ea || (Ea = !0, ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Ee.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var On = function(k, se, Ee, Le, gt, Mt, St) {
      var Je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: k,
        key: se,
        ref: Ee,
        props: St,
        // Record the component responsible for creating this element.
        _owner: Mt
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
        value: Le
      }), Object.defineProperty(Je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: gt
      }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
    };
    function _r(k, se, Ee, Le, gt) {
      {
        var Mt, St = {}, Je = null, Bn = null;
        Ee !== void 0 && (ea(Ee), Je = "" + Ee), Rt(se) && (ea(se.key), Je = "" + se.key), qe(se) && (Bn = se.ref, Wt(se, gt));
        for (Mt in se)
          Rn.call(se, Mt) && !zr.hasOwnProperty(Mt) && (St[Mt] = se[Mt]);
        if (k && k.defaultProps) {
          var hn = k.defaultProps;
          for (Mt in hn)
            St[Mt] === void 0 && (St[Mt] = hn[Mt]);
        }
        if (Je || Bn) {
          var mn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          Je && Gt(St, mn), Bn && Fn(St, mn);
        }
        return On(k, Je, Bn, gt, Le, xn.current, St);
      }
    }
    var tn = le.ReactCurrentOwner, Ur = le.ReactDebugCurrentFrame;
    function qt(k) {
      if (k) {
        var se = k._owner, Ee = vn(k.type, k._source, se ? se.type : null);
        Ur.setExtraStackFrame(Ee);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function ri(k) {
      return typeof k == "object" && k !== null && k.$$typeof === p;
    }
    function za() {
      {
        if (tn.current) {
          var k = De(tn.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function mu(k) {
      {
        if (k !== void 0) {
          var se = k.fileName.replace(/^.*[\\\/]/, ""), Ee = k.lineNumber;
          return `

Check your code at ` + se + ":" + Ee + ".";
        }
        return "";
      }
    }
    var lo = {};
    function el(k) {
      {
        var se = za();
        if (!se) {
          var Ee = typeof k == "string" ? k : k.displayName || k.name;
          Ee && (se = `

Check the top-level render call using <` + Ee + ">.");
        }
        return se;
      }
    }
    function Vi(k, se) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var Ee = el(se);
        if (lo[Ee])
          return;
        lo[Ee] = !0;
        var Le = "";
        k && k._owner && k._owner !== tn.current && (Le = " It was passed a child from " + De(k._owner.type) + "."), qt(k), ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Le), qt(null);
      }
    }
    function yu(k, se) {
      {
        if (typeof k != "object")
          return;
        if (Jr(k))
          for (var Ee = 0; Ee < k.length; Ee++) {
            var Le = k[Ee];
            ri(Le) && Vi(Le, se);
          }
        else if (ri(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var gt = I(k);
          if (typeof gt == "function" && gt !== k.entries)
            for (var Mt = gt.call(k), St; !(St = Mt.next()).done; )
              ri(St.value) && Vi(St.value, se);
        }
      }
    }
    function Ca(k) {
      {
        var se = k.type;
        if (se == null || typeof se == "string")
          return;
        var Ee;
        if (typeof se == "function")
          Ee = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === O))
          Ee = se.propTypes;
        else
          return;
        if (Ee) {
          var Le = De(se);
          nr(Ee, k.props, "prop", Le, k);
        } else if (se.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var gt = De(se);
          ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", gt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gi(k) {
      {
        for (var se = Object.keys(k.props), Ee = 0; Ee < se.length; Ee++) {
          var Le = se[Ee];
          if (Le !== "children" && Le !== "key") {
            qt(k), ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), qt(null);
            break;
          }
        }
        k.ref !== null && (qt(k), ue("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    function ba(k, se, Ee, Le, gt, Mt) {
      {
        var St = Ye(k);
        if (!St) {
          var Je = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Bn = mu(gt);
          Bn ? Je += Bn : Je += za();
          var hn;
          k === null ? hn = "null" : Jr(k) ? hn = "array" : k !== void 0 && k.$$typeof === p ? (hn = "<" + (De(k.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : hn = typeof k, ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", hn, Je);
        }
        var mn = _r(k, se, Ee, gt, Mt);
        if (mn == null)
          return mn;
        if (St) {
          var dr = se.children;
          if (dr !== void 0)
            if (Le)
              if (Jr(dr)) {
                for (var Ci = 0; Ci < dr.length; Ci++)
                  yu(dr[Ci], k);
                Object.freeze && Object.freeze(dr);
              } else
                ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yu(dr, k);
        }
        return k === S ? gi(mn) : Ca(mn), mn;
      }
    }
    function Si(k, se, Ee) {
      return ba(k, se, Ee, !0);
    }
    function jr(k, se, Ee) {
      return ba(k, se, Ee, !1);
    }
    var Ra = jr, Ei = Si;
    bv.Fragment = S, bv.jsx = Ra, bv.jsxs = Ei;
  }()), bv;
}
({}).NODE_ENV === "production" ? o0.exports = bk() : o0.exports = Rk();
var Pe = o0.exports, wv = {}, s0 = { exports: {} }, ti = {}, vy = { exports: {} }, QE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1;
function Tk() {
  return v1 || (v1 = 1, function(c) {
    function p(me, Ie) {
      var M = me.length;
      me.push(Ie);
      e:
        for (; 0 < M; ) {
          var oe = M - 1 >>> 1, Re = me[oe];
          if (0 < b(Re, Ie))
            me[oe] = Ie, me[M] = Re, M = oe;
          else
            break e;
        }
    }
    function h(me) {
      return me.length === 0 ? null : me[0];
    }
    function S(me) {
      if (me.length === 0)
        return null;
      var Ie = me[0], M = me.pop();
      if (M !== Ie) {
        me[0] = M;
        e:
          for (var oe = 0, Re = me.length, ot = Re >>> 1; oe < ot; ) {
            var Ze = 2 * (oe + 1) - 1, Tt = me[Ze], ht = Ze + 1, bt = me[ht];
            if (0 > b(Tt, M))
              ht < Re && 0 > b(bt, Tt) ? (me[oe] = bt, me[ht] = M, oe = ht) : (me[oe] = Tt, me[Ze] = M, oe = Ze);
            else if (ht < Re && 0 > b(bt, M))
              me[oe] = bt, me[ht] = M, oe = ht;
            else
              break e;
          }
      }
      return Ie;
    }
    function b(me, Ie) {
      var M = me.sortIndex - Ie.sortIndex;
      return M !== 0 ? M : me.id - Ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      c.unstable_now = function() {
        return T.now();
      };
    } else {
      var g = Date, H = g.now();
      c.unstable_now = function() {
        return g.now() - H;
      };
    }
    var N = [], _ = [], j = 1, O = null, L = 3, U = !1, A = !1, B = !1, I = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(me) {
      for (var Ie = h(_); Ie !== null; ) {
        if (Ie.callback === null)
          S(_);
        else if (Ie.startTime <= me)
          S(_), Ie.sortIndex = Ie.expirationTime, p(N, Ie);
        else
          break;
        Ie = h(_);
      }
    }
    function Z(me) {
      if (B = !1, ee(me), !A)
        if (h(N) !== null)
          A = !0, ut($);
        else {
          var Ie = h(_);
          Ie !== null && we(Z, Ie.startTime - me);
        }
    }
    function $(me, Ie) {
      A = !1, B && (B = !1, le(Ue), Ue = -1), U = !0;
      var M = L;
      try {
        for (ee(Ie), O = h(N); O !== null && (!(O.expirationTime > Ie) || me && !We()); ) {
          var oe = O.callback;
          if (typeof oe == "function") {
            O.callback = null, L = O.priorityLevel;
            var Re = oe(O.expirationTime <= Ie);
            Ie = c.unstable_now(), typeof Re == "function" ? O.callback = Re : O === h(N) && S(N), ee(Ie);
          } else
            S(N);
          O = h(N);
        }
        if (O !== null)
          var ot = !0;
        else {
          var Ze = h(_);
          Ze !== null && we(Z, Ze.startTime - Ie), ot = !1;
        }
        return ot;
      } finally {
        O = null, L = M, U = !1;
      }
    }
    var fe = !1, ve = null, Ue = -1, Oe = 5, Ye = -1;
    function We() {
      return !(c.unstable_now() - Ye < Oe);
    }
    function it() {
      if (ve !== null) {
        var me = c.unstable_now();
        Ye = me;
        var Ie = !0;
        try {
          Ie = ve(!0, me);
        } finally {
          Ie ? De() : (fe = !1, ve = null);
        }
      } else
        fe = !1;
    }
    var De;
    if (typeof ue == "function")
      De = function() {
        ue(it);
      };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), st = $e.port2;
      $e.port1.onmessage = it, De = function() {
        st.postMessage(null);
      };
    } else
      De = function() {
        I(it, 0);
      };
    function ut(me) {
      ve = me, fe || (fe = !0, De());
    }
    function we(me, Ie) {
      Ue = I(function() {
        me(c.unstable_now());
      }, Ie);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(me) {
      me.callback = null;
    }, c.unstable_continueExecution = function() {
      A || U || (A = !0, ut($));
    }, c.unstable_forceFrameRate = function(me) {
      0 > me || 125 < me ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Oe = 0 < me ? Math.floor(1e3 / me) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, c.unstable_getFirstCallbackNode = function() {
      return h(N);
    }, c.unstable_next = function(me) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var Ie = 3;
          break;
        default:
          Ie = L;
      }
      var M = L;
      L = Ie;
      try {
        return me();
      } finally {
        L = M;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(me, Ie) {
      switch (me) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          me = 3;
      }
      var M = L;
      L = me;
      try {
        return Ie();
      } finally {
        L = M;
      }
    }, c.unstable_scheduleCallback = function(me, Ie, M) {
      var oe = c.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? oe + M : oe) : M = oe, me) {
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
      return Re = M + Re, me = { id: j++, callback: Ie, priorityLevel: me, startTime: M, expirationTime: Re, sortIndex: -1 }, M > oe ? (me.sortIndex = M, p(_, me), h(N) === null && me === h(_) && (B ? (le(Ue), Ue = -1) : B = !0, we(Z, M - oe))) : (me.sortIndex = Re, p(N, me), A || U || (A = !0, ut($))), me;
    }, c.unstable_shouldYield = We, c.unstable_wrapCallback = function(me) {
      var Ie = L;
      return function() {
        var M = L;
        L = Ie;
        try {
          return me.apply(this, arguments);
        } finally {
          L = M;
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
var h1;
function wk() {
  return h1 || (h1 = 1, function(c) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, h = !1, S = 5;
      function b(Se, qe) {
        var Rt = Se.length;
        Se.push(qe), H(Se, qe, Rt);
      }
      function T(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function g(Se) {
        if (Se.length === 0)
          return null;
        var qe = Se[0], Rt = Se.pop();
        return Rt !== qe && (Se[0] = Rt, N(Se, Rt, 0)), qe;
      }
      function H(Se, qe, Rt) {
        for (var Wt = Rt; Wt > 0; ) {
          var Gt = Wt - 1 >>> 1, Fn = Se[Gt];
          if (_(Fn, qe) > 0)
            Se[Gt] = qe, Se[Wt] = Fn, Wt = Gt;
          else
            return;
        }
      }
      function N(Se, qe, Rt) {
        for (var Wt = Rt, Gt = Se.length, Fn = Gt >>> 1; Wt < Fn; ) {
          var On = (Wt + 1) * 2 - 1, _r = Se[On], tn = On + 1, Ur = Se[tn];
          if (_(_r, qe) < 0)
            tn < Gt && _(Ur, _r) < 0 ? (Se[Wt] = Ur, Se[tn] = qe, Wt = tn) : (Se[Wt] = _r, Se[On] = qe, Wt = On);
          else if (tn < Gt && _(Ur, qe) < 0)
            Se[Wt] = Ur, Se[tn] = qe, Wt = tn;
          else
            return;
        }
      }
      function _(Se, qe) {
        var Rt = Se.sortIndex - qe.sortIndex;
        return Rt !== 0 ? Rt : Se.id - qe.id;
      }
      var j = 1, O = 2, L = 3, U = 4, A = 5;
      function B(Se, qe) {
      }
      var I = typeof performance == "object" && typeof performance.now == "function";
      if (I) {
        var le = performance;
        c.unstable_now = function() {
          return le.now();
        };
      } else {
        var ue = Date, ee = ue.now();
        c.unstable_now = function() {
          return ue.now() - ee;
        };
      }
      var Z = 1073741823, $ = -1, fe = 250, ve = 5e3, Ue = 1e4, Oe = Z, Ye = [], We = [], it = 1, De = null, $e = L, st = !1, ut = !1, we = !1, me = typeof setTimeout == "function" ? setTimeout : null, Ie = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function oe(Se) {
        for (var qe = T(We); qe !== null; ) {
          if (qe.callback === null)
            g(We);
          else if (qe.startTime <= Se)
            g(We), qe.sortIndex = qe.expirationTime, b(Ye, qe);
          else
            return;
          qe = T(We);
        }
      }
      function Re(Se) {
        if (we = !1, oe(Se), !ut)
          if (T(Ye) !== null)
            ut = !0, ea(ot);
          else {
            var qe = T(We);
            qe !== null && xn(Re, qe.startTime - Se);
          }
      }
      function ot(Se, qe) {
        ut = !1, we && (we = !1, zr()), st = !0;
        var Rt = $e;
        try {
          var Wt;
          if (!h)
            return Ze(Se, qe);
        } finally {
          De = null, $e = Rt, st = !1;
        }
      }
      function Ze(Se, qe) {
        var Rt = qe;
        for (oe(Rt), De = T(Ye); De !== null && !p && !(De.expirationTime > Rt && (!Se || Zr())); ) {
          var Wt = De.callback;
          if (typeof Wt == "function") {
            De.callback = null, $e = De.priorityLevel;
            var Gt = De.expirationTime <= Rt, Fn = Wt(Gt);
            Rt = c.unstable_now(), typeof Fn == "function" ? De.callback = Fn : De === T(Ye) && g(Ye), oe(Rt);
          } else
            g(Ye);
          De = T(Ye);
        }
        if (De !== null)
          return !0;
        var On = T(We);
        return On !== null && xn(Re, On.startTime - Rt), !1;
      }
      function Tt(Se, qe) {
        switch (Se) {
          case j:
          case O:
          case L:
          case U:
          case A:
            break;
          default:
            Se = L;
        }
        var Rt = $e;
        $e = Se;
        try {
          return qe();
        } finally {
          $e = Rt;
        }
      }
      function ht(Se) {
        var qe;
        switch ($e) {
          case j:
          case O:
          case L:
            qe = L;
            break;
          default:
            qe = $e;
            break;
        }
        var Rt = $e;
        $e = qe;
        try {
          return Se();
        } finally {
          $e = Rt;
        }
      }
      function bt(Se) {
        var qe = $e;
        return function() {
          var Rt = $e;
          $e = qe;
          try {
            return Se.apply(this, arguments);
          } finally {
            $e = Rt;
          }
        };
      }
      function mt(Se, qe, Rt) {
        var Wt = c.unstable_now(), Gt;
        if (typeof Rt == "object" && Rt !== null) {
          var Fn = Rt.delay;
          typeof Fn == "number" && Fn > 0 ? Gt = Wt + Fn : Gt = Wt;
        } else
          Gt = Wt;
        var On;
        switch (Se) {
          case j:
            On = $;
            break;
          case O:
            On = fe;
            break;
          case A:
            On = Oe;
            break;
          case U:
            On = Ue;
            break;
          case L:
          default:
            On = ve;
            break;
        }
        var _r = Gt + On, tn = {
          id: it++,
          callback: qe,
          priorityLevel: Se,
          startTime: Gt,
          expirationTime: _r,
          sortIndex: -1
        };
        return Gt > Wt ? (tn.sortIndex = Gt, b(We, tn), T(Ye) === null && tn === T(We) && (we ? zr() : we = !0, xn(Re, Gt - Wt))) : (tn.sortIndex = _r, b(Ye, tn), !ut && !st && (ut = !0, ea(ot))), tn;
      }
      function Pt() {
      }
      function tr() {
        !ut && !st && (ut = !0, ea(ot));
      }
      function $n() {
        return T(Ye);
      }
      function ke(Se) {
        Se.callback = null;
      }
      function en() {
        return $e;
      }
      var _e = !1, vn = null, Rn = -1, Tn = S, Xr = -1;
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
        Se > 0 ? Tn = Math.floor(1e3 / Se) : Tn = S;
      }
      var Jr = function() {
        if (vn !== null) {
          var Se = c.unstable_now();
          Xr = Se;
          var qe = !0, Rt = !0;
          try {
            Rt = vn(qe, Se);
          } finally {
            Rt ? wr() : (_e = !1, vn = null);
          }
        } else
          _e = !1;
      }, wr;
      if (typeof M == "function")
        wr = function() {
          M(Jr);
        };
      else if (typeof MessageChannel < "u") {
        var Sa = new MessageChannel(), fr = Sa.port2;
        Sa.port1.onmessage = Jr, wr = function() {
          fr.postMessage(null);
        };
      } else
        wr = function() {
          me(Jr, 0);
        };
      function ea(Se) {
        vn = Se, _e || (_e = !0, wr());
      }
      function xn(Se, qe) {
        Rn = me(function() {
          Se(c.unstable_now());
        }, qe);
      }
      function zr() {
        Ie(Rn), Rn = -1;
      }
      var yi = nr, Ea = null;
      c.unstable_IdlePriority = A, c.unstable_ImmediatePriority = j, c.unstable_LowPriority = U, c.unstable_NormalPriority = L, c.unstable_Profiling = Ea, c.unstable_UserBlockingPriority = O, c.unstable_cancelCallback = ke, c.unstable_continueExecution = tr, c.unstable_forceFrameRate = Tr, c.unstable_getCurrentPriorityLevel = en, c.unstable_getFirstCallbackNode = $n, c.unstable_next = ht, c.unstable_pauseExecution = Pt, c.unstable_requestPaint = yi, c.unstable_runWithPriority = Tt, c.unstable_scheduleCallback = mt, c.unstable_shouldYield = Zr, c.unstable_wrapCallback = bt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(GE)), GE;
}
var m1;
function J1() {
  return m1 || (m1 = 1, {}.NODE_ENV === "production" ? vy.exports = Tk() : vy.exports = wk()), vy.exports;
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
var y1;
function _k() {
  if (y1)
    return ti;
  y1 = 1;
  var c = Ot, p = J1();
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), b = {};
  function T(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++)
      S.add(r[n]);
  }
  var H = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, j = {}, O = {};
  function L(n) {
    return N.call(O, n) ? !0 : N.call(j, n) ? !1 : _.test(n) ? O[n] = !0 : (j[n] = !0, !1);
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
  function A(n, r, u, l) {
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
  function B(n, r, u, l, f, v, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = C;
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    I[n] = new B(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    I[r] = new B(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    I[n] = new B(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    I[n] = new B(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    I[n] = new B(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    I[n] = new B(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    I[n] = new B(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    I[n] = new B(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    I[n] = new B(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      le,
      ue
    );
    I[r] = new B(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(le, ue);
    I[r] = new B(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(le, ue);
    I[r] = new B(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    I[n] = new B(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    I[n] = new B(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ee(n, r, u, l) {
    var f = I.hasOwnProperty(r) ? I[r] : null;
    (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (A(r, u, f, l) && (u = null), l || f === null ? L(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : f.mustUseProperty ? n[f.propertyName] = u === null ? f.type === 3 ? !1 : "" : u : (r = f.attributeName, l = f.attributeNamespace, u === null ? n.removeAttribute(r) : (f = f.type, u = f === 3 || f === 4 && u === !0 ? "" : "" + u, l ? n.setAttributeNS(l, r, u) : n.setAttribute(r, u))));
  }
  var Z = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), fe = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), Ue = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), Ye = Symbol.for("react.provider"), We = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), me = Symbol.iterator;
  function Ie(n) {
    return n === null || typeof n != "object" ? null : (n = me && n[me] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var M = Object.assign, oe;
  function Re(n) {
    if (oe === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        oe = r && r[1] || "";
      }
    return `
` + oe + n;
  }
  var ot = !1;
  function Ze(n, r) {
    if (!n || ot)
      return "";
    ot = !0;
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
          } catch (J) {
            var l = J;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (J) {
            l = J;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (J) {
          l = J;
        }
        n();
      }
    } catch (J) {
      if (J && l && typeof J.stack == "string") {
        for (var f = J.stack.split(`
`), v = l.stack.split(`
`), C = f.length - 1, x = v.length - 1; 1 <= C && 0 <= x && f[C] !== v[x]; )
          x--;
        for (; 1 <= C && 0 <= x; C--, x--)
          if (f[C] !== v[x]) {
            if (C !== 1 || x !== 1)
              do
                if (C--, x--, 0 > x || f[C] !== v[x]) {
                  var z = `
` + f[C].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= C && 0 <= x);
            break;
          }
      }
    } finally {
      ot = !1, Error.prepareStackTrace = u;
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
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ve:
        return "Fragment";
      case fe:
        return "Portal";
      case Oe:
        return "Profiler";
      case Ue:
        return "StrictMode";
      case De:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case We:
          return (n.displayName || "Context") + ".Consumer";
        case Ye:
          return (n._context.displayName || "Context") + ".Provider";
        case it:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case st:
          return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
        case ut:
          r = n._payload, n = n._init;
          try {
            return ht(n(r));
          } catch {
          }
      }
    return null;
  }
  function bt(n) {
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
        return ht(r);
      case 8:
        return r === Ue ? "StrictMode" : "Mode";
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
  function mt(n) {
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
  function Pt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tr(n) {
    var r = Pt(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), l = "" + n[r];
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
  function $n(n) {
    n._valueTracker || (n._valueTracker = tr(n));
  }
  function ke(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), l = "";
    return n && (l = Pt(n) ? n.checked ? "true" : "false" : n.value), n = l, n !== u ? (r.setValue(n), !0) : !1;
  }
  function en(n) {
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
    return M({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function vn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    u = mt(r.value != null ? r.value : u), n._wrapperState = { initialChecked: l, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rn(n, r) {
    r = r.checked, r != null && ee(n, "checked", r, !1);
  }
  function Tn(n, r) {
    Rn(n, r);
    var u = mt(r.value), l = r.type;
    if (u != null)
      l === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Zr(n, r.type, u) : r.hasOwnProperty("defaultValue") && Zr(n, r.type, mt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
    (r !== "number" || en(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
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
      for (u = "" + mt(u), r = null, f = 0; f < n.length; f++) {
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
      throw Error(h(91));
    return M({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(h(92));
        if (nr(u)) {
          if (1 < u.length)
            throw Error(h(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: mt(u) };
  }
  function Sa(n, r) {
    var u = mt(r.value), l = mt(r.defaultValue);
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
  }, qe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Se).forEach(function(n) {
    qe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Se[r] = Se[n];
    });
  });
  function Rt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || Se.hasOwnProperty(n) && Se[n] ? ("" + r).trim() : r + "px";
  }
  function Wt(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var l = u.indexOf("--") === 0, f = Rt(u, r[u], l);
        u === "float" && (u = "cssFloat"), l ? n.setProperty(u, f) : n[u] = f;
      }
  }
  var Gt = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Fn(n, r) {
    if (r) {
      if (Gt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(h(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(h(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(h(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(h(62));
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
  function tn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ur = null, qt = null, Kt = null;
  function ri(n) {
    if (n = ks(n)) {
      if (typeof Ur != "function")
        throw Error(h(280));
      var r = n.stateNode;
      r && (r = Xe(r), Ur(n.stateNode, n.type, r));
    }
  }
  function za(n) {
    qt ? Kt ? Kt.push(n) : Kt = [n] : qt = n;
  }
  function mu() {
    if (qt) {
      var n = qt, r = Kt;
      if (Kt = qt = null, ri(n), r)
        for (n = 0; n < r.length; n++)
          ri(r[n]);
    }
  }
  function lo(n, r) {
    return n(r);
  }
  function el() {
  }
  var Vi = !1;
  function yu(n, r, u) {
    if (Vi)
      return n(r, u);
    Vi = !0;
    try {
      return lo(n, r, u);
    } finally {
      Vi = !1, (qt !== null || Kt !== null) && (el(), mu());
    }
  }
  function Ca(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var l = Xe(u);
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
      throw Error(h(231, r, typeof u));
    return u;
  }
  var gi = !1;
  if (H)
    try {
      var ba = {};
      Object.defineProperty(ba, "passive", { get: function() {
        gi = !0;
      } }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
    } catch {
      gi = !1;
    }
  function Si(n, r, u, l, f, v, C, x, z) {
    var J = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, J);
    } catch (de) {
      this.onError(de);
    }
  }
  var jr = !1, Ra = null, Ei = !1, k = null, se = { onError: function(n) {
    jr = !0, Ra = n;
  } };
  function Ee(n, r, u, l, f, v, C, x, z) {
    jr = !1, Ra = null, Si.apply(se, arguments);
  }
  function Le(n, r, u, l, f, v, C, x, z) {
    if (Ee.apply(this, arguments), jr) {
      if (jr) {
        var J = Ra;
        jr = !1, Ra = null;
      } else
        throw Error(h(198));
      Ei || (Ei = !0, k = J);
    }
  }
  function gt(n) {
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
  function Mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function St(n) {
    if (gt(n) !== n)
      throw Error(h(188));
  }
  function Je(n) {
    var r = n.alternate;
    if (!r) {
      if (r = gt(n), r === null)
        throw Error(h(188));
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
            return St(f), n;
          if (v === l)
            return St(f), r;
          v = v.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== l.return)
        u = f, l = v;
      else {
        for (var C = !1, x = f.child; x; ) {
          if (x === u) {
            C = !0, u = f, l = v;
            break;
          }
          if (x === l) {
            C = !0, l = f, u = v;
            break;
          }
          x = x.sibling;
        }
        if (!C) {
          for (x = v.child; x; ) {
            if (x === u) {
              C = !0, u = v, l = f;
              break;
            }
            if (x === l) {
              C = !0, l = v, u = f;
              break;
            }
            x = x.sibling;
          }
          if (!C)
            throw Error(h(189));
        }
      }
      if (u.alternate !== l)
        throw Error(h(190));
    }
    if (u.tag !== 3)
      throw Error(h(188));
    return u.stateNode.current === u ? n : r;
  }
  function Bn(n) {
    return n = Je(n), n !== null ? hn(n) : null;
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
  var mn = p.unstable_scheduleCallback, dr = p.unstable_cancelCallback, Ci = p.unstable_shouldYield, tl = p.unstable_requestPaint, Ft = p.unstable_now, dd = p.unstable_getCurrentPriorityLevel, ai = p.unstable_ImmediatePriority, wt = p.unstable_UserBlockingPriority, bi = p.unstable_NormalPriority, gu = p.unstable_LowPriority, nl = p.unstable_IdlePriority, Su = null, ta = null;
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
  var rl = 64, Eu = 4194304;
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
    var l = 0, f = n.suspendedLanes, v = n.pingedLanes, C = u & 268435455;
    if (C !== 0) {
      var x = C & ~f;
      x !== 0 ? l = ii(x) : (v &= C, v !== 0 && (l = ii(v)));
    } else
      C = u & ~f, C !== 0 ? l = ii(C) : v !== 0 && (l = ii(v));
    if (l === 0)
      return 0;
    if (r !== 0 && r !== l && !(r & f) && (f = l & -l, v = r & -r, f >= v || f === 16 && (v & 4194240) !== 0))
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
    for (var u = n.suspendedLanes, l = n.pingedLanes, f = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var C = 31 - Pr(v), x = 1 << C, z = f[C];
      z === -1 ? (!(x & u) || x & l) && (f[C] = Cu(x, r)) : z <= r && (n.expiredLanes |= x), v &= ~x;
    }
  }
  function Ru(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function al() {
    var n = rl;
    return rl <<= 1, !(rl & 4194240) && (rl = 64), n;
  }
  function il(n) {
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
      var f = 31 - Pr(u), v = 1 << f;
      r[f] = 0, l[f] = -1, n[f] = -1, u &= ~v;
    }
  }
  function Ri(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var l = 31 - Pr(u), f = 1 << l;
      f & r | n[l] & r && (n[l] |= r), u &= ~f;
    }
  }
  var $t = 0;
  function ul(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var so, ol, Vt, ll, sl, pt = !1, co = [], Dn = null, na = null, Vr = null, Tu = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), Xt = [], Cc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function rr(n, r, u, l, f, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: l, nativeEvent: v, targetContainers: [f] }, r !== null && (r = ks(r), r !== null && ol(r)), n) : (n.eventSystemFlags |= l, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
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
        var v = f.pointerId;
        return Tu.set(v, rr(Tu.get(v) || null, n, r, u, l, f)), !0;
      case "gotpointercapture":
        return v = f.pointerId, An.set(v, rr(An.get(v) || null, n, r, u, l, f)), !0;
    }
    return !1;
  }
  function bc(n) {
    var r = Fa(n.target);
    if (r !== null) {
      var u = gt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = Mt(u), r !== null) {
            n.blockedOn = r, sl(n.priority, function() {
              Vt(u);
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
      var u = fl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var l = new u.constructor(u.type, u);
        _r = l, u.target.dispatchEvent(l), _r = null;
      } else
        return r = ks(u), r !== null && ol(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function wu(n, r, u) {
    Ii(n) && u.delete(r);
  }
  function Rc() {
    pt = !1, Dn !== null && Ii(Dn) && (Dn = null), na !== null && Ii(na) && (na = null), Vr !== null && Ii(Vr) && (Vr = null), Tu.forEach(wu), An.forEach(wu);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, pt || (pt = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Rc)));
  }
  function _u(n) {
    function r(f) {
      return Ua(f, n);
    }
    if (0 < co.length) {
      Ua(co[0], n);
      for (var u = 1; u < co.length; u++) {
        var l = co[u];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (Dn !== null && Ua(Dn, n), na !== null && Ua(na, n), Vr !== null && Ua(Vr, n), Tu.forEach(r), An.forEach(r), u = 0; u < Xt.length; u++)
      l = Xt[u], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < Xt.length && (u = Xt[0], u.blockedOn === null); )
      bc(u), u.blockedOn === null && Xt.shift();
  }
  var xu = Z.ReactCurrentBatchConfig, ja = !0;
  function cl(n, r, u, l) {
    var f = $t, v = xu.transition;
    xu.transition = null;
    try {
      $t = 1, Du(n, r, u, l);
    } finally {
      $t = f, xu.transition = v;
    }
  }
  function Ou(n, r, u, l) {
    var f = $t, v = xu.transition;
    xu.transition = null;
    try {
      $t = 4, Du(n, r, u, l);
    } finally {
      $t = f, xu.transition = v;
    }
  }
  function Du(n, r, u, l) {
    if (ja) {
      var f = fl(n, r, u, l);
      if (f === null)
        Mc(n, r, l, fo, u), ra(n, l);
      else if (Ti(f, n, r, u, l))
        l.stopPropagation();
      else if (ra(n, l), r & 4 && -1 < Cc.indexOf(n)) {
        for (; f !== null; ) {
          var v = ks(f);
          if (v !== null && so(v), v = fl(n, r, u, l), v === null && Mc(n, r, l, fo, u), v === f)
            break;
          f = v;
        }
        f !== null && l.stopPropagation();
      } else
        Mc(n, r, l, null, u);
    }
  }
  var fo = null;
  function fl(n, r, u, l) {
    if (fo = null, n = tn(l), n = Fa(n), n !== null)
      if (r = gt(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = Mt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return fo = n, null;
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
          case nl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, E = null, D = null;
  function K() {
    if (D)
      return D;
    var n, r = E, u = r.length, l, f = "value" in ui ? ui.value : ui.textContent, v = f.length;
    for (n = 0; n < u && r[n] === f[n]; n++)
      ;
    var C = u - n;
    for (l = 1; l <= C && r[u - l] === f[v - l]; l++)
      ;
    return D = f.slice(n, 1 < l ? 1 - l : void 0);
  }
  function te(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function rt() {
    return !1;
  }
  function Te(n) {
    function r(u, l, f, v, C) {
      this._reactName = u, this._targetInst = f, this.type = l, this.nativeEvent = v, this.target = C, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (u = n[x], this[x] = u ? u(v) : v[x]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? ye : rt, this.isPropagationStopped = rt, this;
    }
    return M(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _t = Te(tt), Ht = M({}, tt, { view: 0, detail: 0 }), cn = Te(Ht), nn, fn, yn, Nt = M({}, Ht, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yn && (yn && n.type === "mousemove" ? (nn = n.screenX - yn.screenX, fn = n.screenY - yn.screenY) : fn = nn = 0, yn = n), nn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : fn;
  } }), $i = Te(Nt), dl = M({}, Nt, { dataTransfer: 0 }), ys = Te(dl), vd = M({}, Ht, { relatedTarget: 0 }), oi = Te(vd), gs = M({}, tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ss = Te(gs), hd = M({}, tt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), by = Te(hd), Ry = M({}, tt, { data: 0 }), md = Te(Ry), yd = {
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
  }, Dv = {
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
  }, kv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Nv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = kv[n]) ? !!r[n] : !1;
  }
  function gd() {
    return Nv;
  }
  var Bi = M({}, Ht, { key: function(n) {
    if (n.key) {
      var r = yd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = te(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(n) {
    return n.type === "keypress" ? te(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? te(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ty = Te(Bi), Sd = M({}, Nt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tc = Te(Sd), Ed = M({}, Ht, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), wy = Te(Ed), wc = M({}, tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mv = Te(wc), aa = M({}, Nt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = Te(aa), Yn = [9, 13, 27, 32], li = H && "CompositionEvent" in window, po = null;
  H && "documentMode" in document && (po = document.documentMode);
  var _c = H && "TextEvent" in window && !po, Lv = H && (!li || po && 8 < po && 11 >= po), pl = String.fromCharCode(32), Av = !1;
  function zv(n, r) {
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
  var vl = !1;
  function _y(n, r) {
    switch (n) {
      case "compositionend":
        return xc(r);
      case "keypress":
        return r.which !== 32 ? null : (Av = !0, pl);
      case "textInput":
        return n = r.data, n === pl && Av ? null : n;
      default:
        return null;
    }
  }
  function xy(n, r) {
    if (vl)
      return n === "compositionend" || !li && zv(n, r) ? (n = K(), D = E = ui = null, vl = !1, n) : null;
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
        return Lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Uv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function jv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Uv[n.type] : r === "textarea";
  }
  function Pv(n, r, u, l) {
    za(l), r = xs(r, "onChange"), 0 < r.length && (u = new _t("onChange", "change", null, u, l), n.push({ event: u, listeners: r }));
  }
  var Es = null, hl = null;
  function ml(n) {
    Nc(n, 0);
  }
  function yl(n) {
    var r = Sl(n);
    if (ke(r))
      return n;
  }
  function Fv(n, r) {
    if (n === "change")
      return r;
  }
  var Cd = !1;
  if (H) {
    var bd;
    if (H) {
      var Rd = "oninput" in document;
      if (!Rd) {
        var Vv = document.createElement("div");
        Vv.setAttribute("oninput", "return;"), Rd = typeof Vv.oninput == "function";
      }
      bd = Rd;
    } else
      bd = !1;
    Cd = bd && (!document.documentMode || 9 < document.documentMode);
  }
  function Hv() {
    Es && (Es.detachEvent("onpropertychange", Iv), hl = Es = null);
  }
  function Iv(n) {
    if (n.propertyName === "value" && yl(hl)) {
      var r = [];
      Pv(r, hl, n, tn(n)), yu(ml, r);
    }
  }
  function Oy(n, r, u) {
    n === "focusin" ? (Hv(), Es = r, hl = u, Es.attachEvent("onpropertychange", Iv)) : n === "focusout" && Hv();
  }
  function Dy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return yl(hl);
  }
  function ky(n, r) {
    if (n === "click")
      return yl(r);
  }
  function $v(n, r) {
    if (n === "input" || n === "change")
      return yl(r);
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
      if (!N.call(r, f) || !Pa(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function Bv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Yv(n, r) {
    var u = Bv(n);
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
      u = Bv(u);
    }
  }
  function Wv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Wv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Oc() {
    for (var n = window, r = en(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = en(n.document);
    }
    return r;
  }
  function Wi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dc(n) {
    var r = Oc(), u = n.focusedElem, l = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Wv(u.ownerDocument.documentElement, u)) {
      if (l !== null && Wi(u)) {
        if (r = l.start, n = l.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = u.textContent.length, v = Math.min(l.start, f);
          l = l.end === void 0 ? v : Math.min(l.end, f), !n.extend && v > l && (f = l, l = v, v = f), f = Yv(u, v);
          var C = Yv(
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
  var Qv = H && "documentMode" in document && 11 >= document.documentMode, si = null, Td = null, bs = null, wd = !1;
  function Gv(n, r, u) {
    var l = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    wd || si == null || si !== en(l) || (l = si, "selectionStart" in l && Wi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), bs && Cs(bs, l) || (bs = l, l = xs(Td, "onSelect"), 0 < l.length && (r = new _t("onSelect", "select", null, r, u), n.push({ event: r, listeners: l }), r.target = si)));
  }
  function kc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var vo = { animationend: kc("Animation", "AnimationEnd"), animationiteration: kc("Animation", "AnimationIteration"), animationstart: kc("Animation", "AnimationStart"), transitionend: kc("Transition", "TransitionEnd") }, _d = {}, xd = {};
  H && (xd = document.createElement("div").style, "AnimationEvent" in window || (delete vo.animationend.animation, delete vo.animationiteration.animation, delete vo.animationstart.animation), "TransitionEvent" in window || delete vo.transitionend.transition);
  function ar(n) {
    if (_d[n])
      return _d[n];
    if (!vo[n])
      return n;
    var r = vo[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in xd)
        return _d[n] = r[u];
    return n;
  }
  var Od = ar("animationend"), qv = ar("animationiteration"), Kv = ar("animationstart"), Xv = ar("transitionend"), Zv = /* @__PURE__ */ new Map(), Jv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qi(n, r) {
    Zv.set(n, r), T(r, [n]);
  }
  for (var Rs = 0; Rs < Jv.length; Rs++) {
    var ho = Jv[Rs], My = ho.toLowerCase(), Ts = ho[0].toUpperCase() + ho.slice(1);
    Qi(My, "on" + Ts);
  }
  Qi(Od, "onAnimationEnd"), Qi(qv, "onAnimationIteration"), Qi(Kv, "onAnimationStart"), Qi("dblclick", "onDoubleClick"), Qi("focusin", "onFocus"), Qi("focusout", "onBlur"), Qi(Xv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));
  function eh(n, r, u) {
    var l = n.type || "unknown-event";
    n.currentTarget = u, Le(l, r, void 0, n), n.currentTarget = null;
  }
  function Nc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var l = n[u], f = l.event;
      l = l.listeners;
      e: {
        var v = void 0;
        if (r)
          for (var C = l.length - 1; 0 <= C; C--) {
            var x = l[C], z = x.instance, J = x.currentTarget;
            if (x = x.listener, z !== v && f.isPropagationStopped())
              break e;
            eh(f, x, J), v = z;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (x = l[C], z = x.instance, J = x.currentTarget, x = x.listener, z !== v && f.isPropagationStopped())
              break e;
            eh(f, x, J), v = z;
          }
      }
    }
    if (Ei)
      throw n = k, Ei = !1, k = null, n;
  }
  function dn(n, r) {
    var u = r[zd];
    u === void 0 && (u = r[zd] = /* @__PURE__ */ new Set());
    var l = n + "__bubble";
    u.has(l) || (th(r, n, 2, !1), u.add(l));
  }
  function ku(n, r, u) {
    var l = 0;
    r && (l |= 4), th(u, n, l, r);
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function gl(n) {
    if (!n[Gi]) {
      n[Gi] = !0, S.forEach(function(u) {
        u !== "selectionchange" && (Ly.has(u) || ku(u, !1, n), ku(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Gi] || (r[Gi] = !0, ku("selectionchange", !1, r));
    }
  }
  function th(n, r, u, l) {
    switch (ms(r)) {
      case 1:
        var f = cl;
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
    var v = l;
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
                l = v = C;
                continue e;
              }
              x = x.parentNode;
            }
          }
          l = l.return;
        }
    yu(function() {
      var J = v, de = tn(u), pe = [];
      e: {
        var ce = Zv.get(n);
        if (ce !== void 0) {
          var Ne = _t, Fe = n;
          switch (n) {
            case "keypress":
              if (te(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ne = Ty;
              break;
            case "focusin":
              Fe = "focus", Ne = oi;
              break;
            case "focusout":
              Fe = "blur", Ne = oi;
              break;
            case "beforeblur":
            case "afterblur":
              Ne = oi;
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
              Ne = $i;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ne = ys;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ne = wy;
              break;
            case Od:
            case qv:
            case Kv:
              Ne = Ss;
              break;
            case Xv:
              Ne = Mv;
              break;
            case "scroll":
              Ne = cn;
              break;
            case "wheel":
              Ne = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ne = by;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ne = Tc;
          }
          var Be = (r & 4) !== 0, Hn = !Be && n === "scroll", Y = Be ? ce !== null ? ce + "Capture" : null : ce;
          Be = [];
          for (var F = J, G; F !== null; ) {
            G = F;
            var ge = G.stateNode;
            if (G.tag === 5 && ge !== null && (G = ge, Y !== null && (ge = Ca(F, Y), ge != null && Be.push(_s(F, ge, G)))), Hn)
              break;
            F = F.return;
          }
          0 < Be.length && (ce = new Ne(ce, Fe, null, u, de), pe.push({ event: ce, listeners: Be }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", Ne = n === "mouseout" || n === "pointerout", ce && u !== _r && (Fe = u.relatedTarget || u.fromElement) && (Fa(Fe) || Fe[qi]))
            break e;
          if ((Ne || ce) && (ce = de.window === de ? de : (ce = de.ownerDocument) ? ce.defaultView || ce.parentWindow : window, Ne ? (Fe = u.relatedTarget || u.toElement, Ne = J, Fe = Fe ? Fa(Fe) : null, Fe !== null && (Hn = gt(Fe), Fe !== Hn || Fe.tag !== 5 && Fe.tag !== 6) && (Fe = null)) : (Ne = null, Fe = J), Ne !== Fe)) {
            if (Be = $i, ge = "onMouseLeave", Y = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Be = Tc, ge = "onPointerLeave", Y = "onPointerEnter", F = "pointer"), Hn = Ne == null ? ce : Sl(Ne), G = Fe == null ? ce : Sl(Fe), ce = new Be(ge, F + "leave", Ne, u, de), ce.target = Hn, ce.relatedTarget = G, ge = null, Fa(de) === J && (Be = new Be(Y, F + "enter", Fe, u, de), Be.target = G, Be.relatedTarget = Hn, ge = Be), Hn = ge, Ne && Fe)
              t: {
                for (Be = Ne, Y = Fe, F = 0, G = Be; G; G = mo(G))
                  F++;
                for (G = 0, ge = Y; ge; ge = mo(ge))
                  G++;
                for (; 0 < F - G; )
                  Be = mo(Be), F--;
                for (; 0 < G - F; )
                  Y = mo(Y), G--;
                for (; F--; ) {
                  if (Be === Y || Y !== null && Be === Y.alternate)
                    break t;
                  Be = mo(Be), Y = mo(Y);
                }
                Be = null;
              }
            else
              Be = null;
            Ne !== null && Dd(pe, ce, Ne, Be, !1), Fe !== null && Hn !== null && Dd(pe, Hn, Fe, Be, !0);
          }
        }
        e: {
          if (ce = J ? Sl(J) : window, Ne = ce.nodeName && ce.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && ce.type === "file")
            var Qe = Fv;
          else if (jv(ce))
            if (Cd)
              Qe = $v;
            else {
              Qe = Dy;
              var Ve = Oy;
            }
          else
            (Ne = ce.nodeName) && Ne.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && (Qe = ky);
          if (Qe && (Qe = Qe(n, J))) {
            Pv(pe, Qe, u, de);
            break e;
          }
          Ve && Ve(n, ce, J), n === "focusout" && (Ve = ce._wrapperState) && Ve.controlled && ce.type === "number" && Zr(ce, "number", ce.value);
        }
        switch (Ve = J ? Sl(J) : window, n) {
          case "focusin":
            (jv(Ve) || Ve.contentEditable === "true") && (si = Ve, Td = J, bs = null);
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
            wd = !1, Gv(pe, u, de);
            break;
          case "selectionchange":
            if (Qv)
              break;
          case "keydown":
          case "keyup":
            Gv(pe, u, de);
        }
        var Ke;
        if (li)
          e: {
            switch (n) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break e;
              case "compositionend":
                dt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break e;
            }
            dt = void 0;
          }
        else
          vl ? zv(n, u) && (dt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (dt = "onCompositionStart");
        dt && (Lv && u.locale !== "ko" && (vl || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && vl && (Ke = K()) : (ui = de, E = "value" in ui ? ui.value : ui.textContent, vl = !0)), Ve = xs(J, dt), 0 < Ve.length && (dt = new md(dt, n, null, u, de), pe.push({ event: dt, listeners: Ve }), Ke ? dt.data = Ke : (Ke = xc(u), Ke !== null && (dt.data = Ke)))), (Ke = _c ? _y(n, u) : xy(n, u)) && (J = xs(J, "onBeforeInput"), 0 < J.length && (de = new md("onBeforeInput", "beforeinput", null, u, de), pe.push({ event: de, listeners: J }), de.data = Ke));
      }
      Nc(pe, r);
    });
  }
  function _s(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function xs(n, r) {
    for (var u = r + "Capture", l = []; n !== null; ) {
      var f = n, v = f.stateNode;
      f.tag === 5 && v !== null && (f = v, v = Ca(n, u), v != null && l.unshift(_s(n, v, f)), v = Ca(n, r), v != null && l.push(_s(n, v, f))), n = n.return;
    }
    return l;
  }
  function mo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dd(n, r, u, l, f) {
    for (var v = r._reactName, C = []; u !== null && u !== l; ) {
      var x = u, z = x.alternate, J = x.stateNode;
      if (z !== null && z === l)
        break;
      x.tag === 5 && J !== null && (x = J, f ? (z = Ca(u, v), z != null && C.unshift(_s(u, z, x))) : f || (z = Ca(u, v), z != null && C.push(_s(u, z, x)))), u = u.return;
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
      throw Error(h(425));
  }
  function Ac() {
  }
  var Md = null, yo = null;
  function Os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0, nh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, Ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(n) {
    return Ld.resolve(null).then(n).catch(zy);
  } : go;
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
  var Mu = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Mu, So = "__reactProps$" + Mu, qi = "__reactContainer$" + Mu, zd = "__reactEvents$" + Mu, Uy = "__reactListeners$" + Mu, Ud = "__reactHandles$" + Mu;
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
  function Sl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(h(33));
  }
  function Xe(n) {
    return n[So] || null;
  }
  var Lu = [], gn = -1;
  function Et(n) {
    return { current: n };
  }
  function Qt(n) {
    0 > gn || (n.current = Lu[gn], Lu[gn] = null, gn--);
  }
  function Zt(n, r) {
    gn++, Lu[gn] = n.current, n.current = r;
  }
  var _i = {}, ft = Et(_i), zn = Et(!1), ia = _i;
  function Va(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return _i;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {}, v;
    for (v in u)
      f[v] = r[v];
    return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function wn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ha() {
    Qt(zn), Qt(ft);
  }
  function Au(n, r, u) {
    if (ft.current !== _i)
      throw Error(h(168));
    Zt(ft, r), Zt(zn, u);
  }
  function Ns(n, r, u) {
    var l = n.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function")
      return u;
    l = l.getChildContext();
    for (var f in l)
      if (!(f in r))
        throw Error(h(108, bt(n) || "Unknown", f));
    return M({}, u, l);
  }
  function zc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, ia = ft.current, Zt(ft, n), Zt(zn, zn.current), !0;
  }
  function rh(n, r, u) {
    var l = n.stateNode;
    if (!l)
      throw Error(h(169));
    u ? (n = Ns(n, r, ia), l.__reactInternalMemoizedMergedChildContext = n, Qt(zn), Qt(ft), Zt(ft, n)) : Qt(zn), Zt(zn, u);
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
      var n = 0, r = $t;
      try {
        var u = Ta;
        for ($t = 1; n < u.length; n++) {
          var l = u[n];
          do
            l = l(!0);
          while (l !== null);
        }
        Ta = null, ir = !1;
      } catch (f) {
        throw Ta !== null && (Ta = Ta.slice(n + 1)), mn(ai, ua), f;
      } finally {
        $t = r, Ms = !1;
      }
    }
    return null;
  }
  var zu = [], oa = 0, Eo = null, El = 0, la = [], xr = 0, Ia = null, pr = 1, Ki = "";
  function wa(n, r) {
    zu[oa++] = El, zu[oa++] = Eo, Eo = n, El = r;
  }
  function Fd(n, r, u) {
    la[xr++] = pr, la[xr++] = Ki, la[xr++] = Ia, Ia = n;
    var l = pr;
    n = Ki;
    var f = 32 - Pr(l) - 1;
    l &= ~(1 << f), u += 1;
    var v = 32 - Pr(r) + f;
    if (30 < v) {
      var C = f - f % 5;
      v = (l & (1 << C) - 1).toString(32), l >>= C, f -= C, pr = 1 << 32 - Pr(r) + f | u << f | l, Ki = v + n;
    } else
      pr = 1 << v | u << f | l, Ki = n;
  }
  function Uc(n) {
    n.return !== null && (wa(n, 1), Fd(n, 1, 0));
  }
  function Vd(n) {
    for (; n === Eo; )
      Eo = zu[--oa], zu[oa] = null, El = zu[--oa], zu[oa] = null;
    for (; n === Ia; )
      Ia = la[--xr], la[xr] = null, Ki = la[--xr], la[xr] = null, pr = la[--xr], la[xr] = null;
  }
  var _a = null, sa = null, Sn = !1, $a = null;
  function Hd(n, r) {
    var u = qa(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function ah(n, r) {
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
        if (!ah(n, r)) {
          if (jc(n))
            throw Error(h(418));
          r = ci(u.nextSibling);
          var l = _a;
          r && ah(n, r) ? Hd(l, u) : (n.flags = n.flags & -4097 | 2, Sn = !1, _a = n);
        }
      } else {
        if (jc(n))
          throw Error(h(418));
        n.flags = n.flags & -4097 | 2, Sn = !1, _a = n;
      }
    }
  }
  function ih(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    _a = n;
  }
  function Fc(n) {
    if (n !== _a)
      return !1;
    if (!Sn)
      return ih(n), Sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Os(n.type, n.memoizedProps)), r && (r = sa)) {
      if (jc(n))
        throw uh(), Error(h(418));
      for (; r; )
        Hd(n, r), r = ci(r.nextSibling);
    }
    if (ih(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(h(317));
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
  function uh() {
    for (var n = sa; n; )
      n = ci(n.nextSibling);
  }
  function kn() {
    sa = _a = null, Sn = !1;
  }
  function Id(n) {
    $a === null ? $a = [n] : $a.push(n);
  }
  var Vc = Z.ReactCurrentBatchConfig;
  function xa(n, r) {
    if (n && n.defaultProps) {
      r = M({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var xi = Et(null), Hc = null, Uu = null, $d = null;
  function Bd() {
    $d = Uu = Hc = null;
  }
  function ju(n) {
    var r = xi.current;
    Qt(xi), n._currentValue = r;
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
    Hc = n, $d = Uu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Wn = !0), n.firstContext = null);
  }
  function Vn(n) {
    var r = n._currentValue;
    if ($d !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Uu === null) {
        if (Hc === null)
          throw Error(h(308));
        Uu = n, Hc.dependencies = { lanes: 0, firstContext: n };
      } else
        Uu = Uu.next = n;
    return r;
  }
  var vr = null;
  function Yd(n) {
    vr === null ? vr = [n] : vr.push(n);
  }
  function oh(n, r, u, l) {
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
    if (l = l.shared, Dt & 2) {
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
  function Vu(n, r, u, l) {
    var f = n.updateQueue;
    Pu = !1;
    var v = f.firstBaseUpdate, C = f.lastBaseUpdate, x = f.shared.pending;
    if (x !== null) {
      f.shared.pending = null;
      var z = x, J = z.next;
      z.next = null, C === null ? v = J : C.next = J, C = z;
      var de = n.alternate;
      de !== null && (de = de.updateQueue, x = de.lastBaseUpdate, x !== C && (x === null ? de.firstBaseUpdate = J : x.next = J, de.lastBaseUpdate = z));
    }
    if (v !== null) {
      var pe = f.baseState;
      C = 0, de = J = z = null, x = v;
      do {
        var ce = x.lane, Ne = x.eventTime;
        if ((l & ce) === ce) {
          de !== null && (de = de.next = {
            eventTime: Ne,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Fe = n, Be = x;
            switch (ce = r, Ne = u, Be.tag) {
              case 1:
                if (Fe = Be.payload, typeof Fe == "function") {
                  pe = Fe.call(Ne, pe, ce);
                  break e;
                }
                pe = Fe;
                break e;
              case 3:
                Fe.flags = Fe.flags & -65537 | 128;
              case 0:
                if (Fe = Be.payload, ce = typeof Fe == "function" ? Fe.call(Ne, pe, ce) : Fe, ce == null)
                  break e;
                pe = M({}, pe, ce);
                break e;
              case 2:
                Pu = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ce = f.effects, ce === null ? f.effects = [x] : ce.push(x));
        } else
          Ne = { eventTime: Ne, lane: ce, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, de === null ? (J = de = Ne, z = pe) : de = de.next = Ne, C |= ce;
        if (x = x.next, x === null) {
          if (x = f.shared.pending, x === null)
            break;
          ce = x, x = ce.next, ce.next = null, f.lastBaseUpdate = ce, f.shared.pending = null;
        }
      } while (1);
      if (de === null && (z = pe), f.baseState = z, f.firstBaseUpdate = J, f.lastBaseUpdate = de, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else
        v === null && (f.shared.lanes = 0);
      nu |= C, n.lanes = C, n.memoizedState = pe;
    }
  }
  function Co(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var l = n[r], f = l.callback;
        if (f !== null) {
          if (l.callback = null, l = u, typeof f != "function")
            throw Error(h(191, f));
          f.call(l);
        }
      }
  }
  var lh = new c.Component().refs;
  function Gd(n, r, u, l) {
    r = n.memoizedState, u = u(l, r), u = u == null ? r : M({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var $c = { isMounted: function(n) {
    return (n = n._reactInternals) ? gt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var l = Nr(), f = Qn(n), v = Zi(l, f);
    v.payload = r, u != null && (v.callback = u), r = Fu(n, v, f), r !== null && (Mr(r, n, f, l), Ic(r, n, f));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var l = Nr(), f = Qn(n), v = Zi(l, f);
    v.tag = 1, v.payload = r, u != null && (v.callback = u), r = Fu(n, v, f), r !== null && (Mr(r, n, f, l), Ic(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = Nr(), l = Qn(n), f = Zi(u, l);
    f.tag = 2, r != null && (f.callback = r), r = Fu(n, f, l), r !== null && (Mr(r, n, l, u), Ic(r, n, l));
  } };
  function sh(n, r, u, l, f, v, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, v, C) : r.prototype && r.prototype.isPureReactComponent ? !Cs(u, l) || !Cs(f, v) : !0;
  }
  function ch(n, r, u) {
    var l = !1, f = _i, v = r.contextType;
    return typeof v == "object" && v !== null ? v = Vn(v) : (f = wn(r) ? ia : ft.current, l = r.contextTypes, v = (l = l != null) ? Va(n, f) : _i), r = new r(u, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $c, n.stateNode = r, r._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function fh(n, r, u, l) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, l), r.state !== n && $c.enqueueReplaceState(r, r.state, null);
  }
  function Bc(n, r, u, l) {
    var f = n.stateNode;
    f.props = u, f.state = n.memoizedState, f.refs = lh, Wd(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? f.context = Vn(v) : (v = wn(r) ? ia : ft.current, f.context = Va(n, v)), f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Gd(n, r, v, u), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && $c.enqueueReplaceState(f, f.state, null), Vu(n, u, f, l), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Cl(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(h(309));
          var l = u.stateNode;
        }
        if (!l)
          throw Error(h(147, n));
        var f = l, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(C) {
          var x = f.refs;
          x === lh && (x = f.refs = {}), C === null ? delete x[v] : x[v] = C;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string")
        throw Error(h(284));
      if (!u._owner)
        throw Error(h(290, n));
    }
    return n;
  }
  function Yc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function dh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ph(n) {
    function r(Y, F) {
      if (n) {
        var G = Y.deletions;
        G === null ? (Y.deletions = [F], Y.flags |= 16) : G.push(F);
      }
    }
    function u(Y, F) {
      if (!n)
        return null;
      for (; F !== null; )
        r(Y, F), F = F.sibling;
      return null;
    }
    function l(Y, F) {
      for (Y = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? Y.set(F.key, F) : Y.set(F.index, F), F = F.sibling;
      return Y;
    }
    function f(Y, F) {
      return Y = Gu(Y, F), Y.index = 0, Y.sibling = null, Y;
    }
    function v(Y, F, G) {
      return Y.index = G, n ? (G = Y.alternate, G !== null ? (G = G.index, G < F ? (Y.flags |= 2, F) : G) : (Y.flags |= 2, F)) : (Y.flags |= 1048576, F);
    }
    function C(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function x(Y, F, G, ge) {
      return F === null || F.tag !== 6 ? (F = Xs(G, Y.mode, ge), F.return = Y, F) : (F = f(F, G), F.return = Y, F);
    }
    function z(Y, F, G, ge) {
      var Qe = G.type;
      return Qe === ve ? de(Y, F, G.props.children, ge, G.key) : F !== null && (F.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === ut && dh(Qe) === F.type) ? (ge = f(F, G.props), ge.ref = Cl(Y, F, G), ge.return = Y, ge) : (ge = Tf(G.type, G.key, G.props, null, Y.mode, ge), ge.ref = Cl(Y, F, G), ge.return = Y, ge);
    }
    function J(Y, F, G, ge) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== G.containerInfo || F.stateNode.implementation !== G.implementation ? (F = Vo(G, Y.mode, ge), F.return = Y, F) : (F = f(F, G.children || []), F.return = Y, F);
    }
    function de(Y, F, G, ge, Qe) {
      return F === null || F.tag !== 7 ? (F = Fo(G, Y.mode, ge, Qe), F.return = Y, F) : (F = f(F, G), F.return = Y, F);
    }
    function pe(Y, F, G) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = Xs("" + F, Y.mode, G), F.return = Y, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case $:
            return G = Tf(F.type, F.key, F.props, null, Y.mode, G), G.ref = Cl(Y, null, F), G.return = Y, G;
          case fe:
            return F = Vo(F, Y.mode, G), F.return = Y, F;
          case ut:
            var ge = F._init;
            return pe(Y, ge(F._payload), G);
        }
        if (nr(F) || Ie(F))
          return F = Fo(F, Y.mode, G, null), F.return = Y, F;
        Yc(Y, F);
      }
      return null;
    }
    function ce(Y, F, G, ge) {
      var Qe = F !== null ? F.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return Qe !== null ? null : x(Y, F, "" + G, ge);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case $:
            return G.key === Qe ? z(Y, F, G, ge) : null;
          case fe:
            return G.key === Qe ? J(Y, F, G, ge) : null;
          case ut:
            return Qe = G._init, ce(
              Y,
              F,
              Qe(G._payload),
              ge
            );
        }
        if (nr(G) || Ie(G))
          return Qe !== null ? null : de(Y, F, G, ge, null);
        Yc(Y, G);
      }
      return null;
    }
    function Ne(Y, F, G, ge, Qe) {
      if (typeof ge == "string" && ge !== "" || typeof ge == "number")
        return Y = Y.get(G) || null, x(F, Y, "" + ge, Qe);
      if (typeof ge == "object" && ge !== null) {
        switch (ge.$$typeof) {
          case $:
            return Y = Y.get(ge.key === null ? G : ge.key) || null, z(F, Y, ge, Qe);
          case fe:
            return Y = Y.get(ge.key === null ? G : ge.key) || null, J(F, Y, ge, Qe);
          case ut:
            var Ve = ge._init;
            return Ne(Y, F, G, Ve(ge._payload), Qe);
        }
        if (nr(ge) || Ie(ge))
          return Y = Y.get(G) || null, de(F, Y, ge, Qe, null);
        Yc(F, ge);
      }
      return null;
    }
    function Fe(Y, F, G, ge) {
      for (var Qe = null, Ve = null, Ke = F, dt = F = 0, sr = null; Ke !== null && dt < G.length; dt++) {
        Ke.index > dt ? (sr = Ke, Ke = null) : sr = Ke.sibling;
        var It = ce(Y, Ke, G[dt], ge);
        if (It === null) {
          Ke === null && (Ke = sr);
          break;
        }
        n && Ke && It.alternate === null && r(Y, Ke), F = v(It, F, dt), Ve === null ? Qe = It : Ve.sibling = It, Ve = It, Ke = sr;
      }
      if (dt === G.length)
        return u(Y, Ke), Sn && wa(Y, dt), Qe;
      if (Ke === null) {
        for (; dt < G.length; dt++)
          Ke = pe(Y, G[dt], ge), Ke !== null && (F = v(Ke, F, dt), Ve === null ? Qe = Ke : Ve.sibling = Ke, Ve = Ke);
        return Sn && wa(Y, dt), Qe;
      }
      for (Ke = l(Y, Ke); dt < G.length; dt++)
        sr = Ne(Ke, Y, dt, G[dt], ge), sr !== null && (n && sr.alternate !== null && Ke.delete(sr.key === null ? dt : sr.key), F = v(sr, F, dt), Ve === null ? Qe = sr : Ve.sibling = sr, Ve = sr);
      return n && Ke.forEach(function(qu) {
        return r(Y, qu);
      }), Sn && wa(Y, dt), Qe;
    }
    function Be(Y, F, G, ge) {
      var Qe = Ie(G);
      if (typeof Qe != "function")
        throw Error(h(150));
      if (G = Qe.call(G), G == null)
        throw Error(h(151));
      for (var Ve = Qe = null, Ke = F, dt = F = 0, sr = null, It = G.next(); Ke !== null && !It.done; dt++, It = G.next()) {
        Ke.index > dt ? (sr = Ke, Ke = null) : sr = Ke.sibling;
        var qu = ce(Y, Ke, It.value, ge);
        if (qu === null) {
          Ke === null && (Ke = sr);
          break;
        }
        n && Ke && qu.alternate === null && r(Y, Ke), F = v(qu, F, dt), Ve === null ? Qe = qu : Ve.sibling = qu, Ve = qu, Ke = sr;
      }
      if (It.done)
        return u(
          Y,
          Ke
        ), Sn && wa(Y, dt), Qe;
      if (Ke === null) {
        for (; !It.done; dt++, It = G.next())
          It = pe(Y, It.value, ge), It !== null && (F = v(It, F, dt), Ve === null ? Qe = It : Ve.sibling = It, Ve = It);
        return Sn && wa(Y, dt), Qe;
      }
      for (Ke = l(Y, Ke); !It.done; dt++, It = G.next())
        It = Ne(Ke, Y, dt, It.value, ge), It !== null && (n && It.alternate !== null && Ke.delete(It.key === null ? dt : It.key), F = v(It, F, dt), Ve === null ? Qe = It : Ve.sibling = It, Ve = It);
      return n && Ke.forEach(function(ng) {
        return r(Y, ng);
      }), Sn && wa(Y, dt), Qe;
    }
    function Hn(Y, F, G, ge) {
      if (typeof G == "object" && G !== null && G.type === ve && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case $:
            e: {
              for (var Qe = G.key, Ve = F; Ve !== null; ) {
                if (Ve.key === Qe) {
                  if (Qe = G.type, Qe === ve) {
                    if (Ve.tag === 7) {
                      u(Y, Ve.sibling), F = f(Ve, G.props.children), F.return = Y, Y = F;
                      break e;
                    }
                  } else if (Ve.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === ut && dh(Qe) === Ve.type) {
                    u(Y, Ve.sibling), F = f(Ve, G.props), F.ref = Cl(Y, Ve, G), F.return = Y, Y = F;
                    break e;
                  }
                  u(Y, Ve);
                  break;
                } else
                  r(Y, Ve);
                Ve = Ve.sibling;
              }
              G.type === ve ? (F = Fo(G.props.children, Y.mode, ge, G.key), F.return = Y, Y = F) : (ge = Tf(G.type, G.key, G.props, null, Y.mode, ge), ge.ref = Cl(Y, F, G), ge.return = Y, Y = ge);
            }
            return C(Y);
          case fe:
            e: {
              for (Ve = G.key; F !== null; ) {
                if (F.key === Ve)
                  if (F.tag === 4 && F.stateNode.containerInfo === G.containerInfo && F.stateNode.implementation === G.implementation) {
                    u(Y, F.sibling), F = f(F, G.children || []), F.return = Y, Y = F;
                    break e;
                  } else {
                    u(Y, F);
                    break;
                  }
                else
                  r(Y, F);
                F = F.sibling;
              }
              F = Vo(G, Y.mode, ge), F.return = Y, Y = F;
            }
            return C(Y);
          case ut:
            return Ve = G._init, Hn(Y, F, Ve(G._payload), ge);
        }
        if (nr(G))
          return Fe(Y, F, G, ge);
        if (Ie(G))
          return Be(Y, F, G, ge);
        Yc(Y, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, F !== null && F.tag === 6 ? (u(Y, F.sibling), F = f(F, G), F.return = Y, Y = F) : (u(Y, F), F = Xs(G, Y.mode, ge), F.return = Y, Y = F), C(Y)) : u(Y, F);
    }
    return Hn;
  }
  var bl = ph(!0), vh = ph(!1), Ls = {}, fi = Et(Ls), As = Et(Ls), Rl = Et(Ls);
  function bo(n) {
    if (n === Ls)
      throw Error(h(174));
    return n;
  }
  function qd(n, r) {
    switch (Zt(Rl, r), Zt(As, n), Zt(fi, Ls), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : xn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = xn(r, n);
    }
    Qt(fi), Zt(fi, r);
  }
  function Hu() {
    Qt(fi), Qt(As), Qt(Rl);
  }
  function nt(n) {
    bo(Rl.current);
    var r = bo(fi.current), u = xn(r, n.type);
    r !== u && (Zt(As, n), Zt(fi, u));
  }
  function xt(n) {
    As.current === n && (Qt(fi), Qt(As));
  }
  var at = Et(0);
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
  var Ba = [];
  function Wc() {
    for (var n = 0; n < Ba.length; n++)
      Ba[n]._workInProgressVersionPrimary = null;
    Ba.length = 0;
  }
  var Qc = Z.ReactCurrentDispatcher, Kd = Z.ReactCurrentBatchConfig, Ro = 0, En = null, ae = null, Lt = null, lt = !1, Oi = !1, Oa = 0, To = 0;
  function Cn() {
    throw Error(h(321));
  }
  function wo(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!Pa(n[u], r[u]))
        return !1;
    return !0;
  }
  function Iu(n, r, u, l, f, v) {
    if (Ro = v, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Qc.current = n === null || n.memoizedState === null ? Py : Fy, n = u(l, f), Oi) {
      v = 0;
      do {
        if (Oi = !1, Oa = 0, 25 <= v)
          throw Error(h(301));
        v += 1, Lt = ae = null, r.updateQueue = null, Qc.current = Zd, n = u(l, f);
      } while (Oi);
    }
    if (Qc.current = cf, r = ae !== null && ae.next !== null, Ro = 0, Lt = ae = En = null, lt = !1, r)
      throw Error(h(300));
    return n;
  }
  function _o() {
    var n = Oa !== 0;
    return Oa = 0, n;
  }
  function Ya() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Lt === null ? En.memoizedState = Lt = n : Lt = Lt.next = n, Lt;
  }
  function ca() {
    if (ae === null) {
      var n = En.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ae.next;
    var r = Lt === null ? En.memoizedState : Lt.next;
    if (r !== null)
      Lt = r, ae = n;
    else {
      if (n === null)
        throw Error(h(310));
      ae = n, n = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, Lt === null ? En.memoizedState = Lt = n : Lt = Lt.next = n;
    }
    return Lt;
  }
  function xo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zs(n) {
    var r = ca(), u = r.queue;
    if (u === null)
      throw Error(h(311));
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
      var x = C = null, z = null, J = v;
      do {
        var de = J.lane;
        if ((Ro & de) === de)
          z !== null && (z = z.next = { lane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), l = J.hasEagerState ? J.eagerState : n(l, J.action);
        else {
          var pe = {
            lane: de,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null
          };
          z === null ? (x = z = pe, C = l) : z = z.next = pe, En.lanes |= de, nu |= de;
        }
        J = J.next;
      } while (J !== null && J !== v);
      z === null ? C = l : z.next = x, Pa(l, r.memoizedState) || (Wn = !0), r.memoizedState = l, r.baseState = C, r.baseQueue = z, u.lastRenderedState = l;
    }
    if (n = u.interleaved, n !== null) {
      f = n;
      do
        v = f.lane, En.lanes |= v, nu |= v, f = f.next;
      while (f !== n);
    } else
      f === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Us(n) {
    var r = ca(), u = r.queue;
    if (u === null)
      throw Error(h(311));
    u.lastRenderedReducer = n;
    var l = u.dispatch, f = u.pending, v = r.memoizedState;
    if (f !== null) {
      u.pending = null;
      var C = f = f.next;
      do
        v = n(v, C.action), C = C.next;
      while (C !== f);
      Pa(v, r.memoizedState) || (Wn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), u.lastRenderedState = v;
    }
    return [v, l];
  }
  function Gc() {
  }
  function qc(n, r) {
    var u = En, l = ca(), f = r(), v = !Pa(l.memoizedState, f);
    if (v && (l.memoizedState = f, Wn = !0), l = l.queue, js(Zc.bind(null, u, l, n), [n]), l.getSnapshot !== r || v || Lt !== null && Lt.memoizedState.tag & 1) {
      if (u.flags |= 2048, Oo(9, Xc.bind(null, u, l, f, r), void 0, null), Mn === null)
        throw Error(h(349));
      Ro & 30 || Kc(u, r, f);
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xo, lastRenderedState: n }, r.queue = n, n = n.dispatch = sf.bind(null, En, n), [r.memoizedState, n];
  }
  function Oo(n, r, u, l) {
    return n = { tag: n, create: r, destroy: u, deps: l, next: null }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (l = u.next, u.next = n, n.next = l, r.lastEffect = n)), n;
  }
  function nf() {
    return ca().memoizedState;
  }
  function Do(n, r, u, l) {
    var f = Ya();
    En.flags |= n, f.memoizedState = Oo(1 | r, u, void 0, l === void 0 ? null : l);
  }
  function Ji(n, r, u, l) {
    var f = ca();
    l = l === void 0 ? null : l;
    var v = void 0;
    if (ae !== null) {
      var C = ae.memoizedState;
      if (v = C.destroy, l !== null && wo(l, C.deps)) {
        f.memoizedState = Oo(r, u, v, l);
        return;
      }
    }
    En.flags |= n, f.memoizedState = Oo(1 | r, u, v, l);
  }
  function rf(n, r) {
    return Do(8390656, 8, n, r);
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
  function Tl(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Ji(4, 4, Xd.bind(null, r, n), u);
  }
  function of() {
  }
  function wl(n, r) {
    var u = ca();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && wo(r, l[1]) ? l[0] : (u.memoizedState = [n, r], n);
  }
  function $u(n, r) {
    var u = ca();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && wo(r, l[1]) ? l[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function fa(n, r, u) {
    return Ro & 21 ? (Pa(u, r) || (u = al(), En.lanes |= u, nu |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Wn = !0), n.memoizedState = u);
  }
  function jy(n, r) {
    var u = $t;
    $t = u !== 0 && 4 > u ? u : 4, n(!0);
    var l = Kd.transition;
    Kd.transition = {};
    try {
      n(!1), r();
    } finally {
      $t = u, Kd.transition = l;
    }
  }
  function pn() {
    return ca().memoizedState;
  }
  function lf(n, r, u) {
    var l = Qn(n);
    if (u = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null }, _l(n))
      Ps(r, u);
    else if (u = oh(n, r, u, l), u !== null) {
      var f = Nr();
      Mr(u, n, l, f), hh(u, r, l);
    }
  }
  function sf(n, r, u) {
    var l = Qn(n), f = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (_l(n))
      Ps(r, f);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null))
        try {
          var C = r.lastRenderedState, x = v(C, u);
          if (f.hasEagerState = !0, f.eagerState = x, Pa(x, C)) {
            var z = r.interleaved;
            z === null ? (f.next = f, Yd(r)) : (f.next = z.next, z.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      u = oh(n, r, f, l), u !== null && (f = Nr(), Mr(u, n, l, f), hh(u, r, l));
    }
  }
  function _l(n) {
    var r = n.alternate;
    return n === En || r !== null && r === En;
  }
  function Ps(n, r) {
    Oi = lt = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function hh(n, r, u) {
    if (u & 4194240) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, Ri(n, u);
    }
  }
  var cf = { readContext: Vn, useCallback: Cn, useContext: Cn, useEffect: Cn, useImperativeHandle: Cn, useInsertionEffect: Cn, useLayoutEffect: Cn, useMemo: Cn, useReducer: Cn, useRef: Cn, useState: Cn, useDebugValue: Cn, useDeferredValue: Cn, useTransition: Cn, useMutableSource: Cn, useSyncExternalStore: Cn, useId: Cn, unstable_isNewReconciler: !1 }, Py = { readContext: Vn, useCallback: function(n, r) {
    return Ya().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Vn, useEffect: rf, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Do(
      4194308,
      4,
      Xd.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return Do(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Do(4, 2, n, r);
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
        throw Error(h(407));
      u = u();
    } else {
      if (u = r(), Mn === null)
        throw Error(h(349));
      Ro & 30 || Kc(l, r, u);
    }
    f.memoizedState = u;
    var v = { value: u, getSnapshot: r };
    return f.queue = v, rf(Zc.bind(
      null,
      l,
      v,
      n
    ), [n]), l.flags |= 2048, Oo(9, Xc.bind(null, l, v, u, r), void 0, null), u;
  }, useId: function() {
    var n = Ya(), r = Mn.identifierPrefix;
    if (Sn) {
      var u = Ki, l = pr;
      u = (l & ~(1 << 32 - Pr(l) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Oa++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = To++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Fy = {
    readContext: Vn,
    useCallback: wl,
    useContext: Vn,
    useEffect: js,
    useImperativeHandle: Tl,
    useInsertionEffect: af,
    useLayoutEffect: uf,
    useMemo: $u,
    useReducer: zs,
    useRef: nf,
    useState: function() {
      return zs(xo);
    },
    useDebugValue: of,
    useDeferredValue: function(n) {
      var r = ca();
      return fa(r, ae.memoizedState, n);
    },
    useTransition: function() {
      var n = zs(xo)[0], r = ca().memoizedState;
      return [n, r];
    },
    useMutableSource: Gc,
    useSyncExternalStore: qc,
    useId: pn,
    unstable_isNewReconciler: !1
  }, Zd = { readContext: Vn, useCallback: wl, useContext: Vn, useEffect: js, useImperativeHandle: Tl, useInsertionEffect: af, useLayoutEffect: uf, useMemo: $u, useReducer: Us, useRef: nf, useState: function() {
    return Us(xo);
  }, useDebugValue: of, useDeferredValue: function(n) {
    var r = ca();
    return ae === null ? r.memoizedState = n : fa(r, ae.memoizedState, n);
  }, useTransition: function() {
    var n = Us(xo)[0], r = ca().memoizedState;
    return [n, r];
  }, useMutableSource: Gc, useSyncExternalStore: qc, useId: pn, unstable_isNewReconciler: !1 };
  function xl(n, r) {
    try {
      var u = "", l = r;
      do
        u += Tt(l), l = l.return;
      while (l);
      var f = u;
    } catch (v) {
      f = `
Error generating stack: ` + v.message + `
` + v.stack;
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
  function mh(n, r, u) {
    u = Zi(-1, u), u.tag = 3, u.payload = { element: null };
    var l = r.value;
    return u.callback = function() {
      gf || (gf = !0, Ao = l), ff(n, r);
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
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (u.callback = function() {
      ff(n, r), typeof l != "function" && (Ni === null ? Ni = /* @__PURE__ */ new Set([this]) : Ni.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), u;
  }
  function yh(n, r, u) {
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
  var Hy = Z.ReactCurrentOwner, Wn = !1;
  function Kn(n, r, u, l) {
    r.child = n === null ? vh(r, null, u, l) : bl(r, n.child, u, l);
  }
  function Bu(n, r, u, l, f) {
    u = u.render;
    var v = r.ref;
    return Ce(r, f), l = Iu(n, r, u, l, v, f), u = _o(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, hr(n, r, f)) : (Sn && u && Uc(r), r.flags |= 1, Kn(n, r, l, f), r.child);
  }
  function df(n, r, u, l, f) {
    if (n === null) {
      var v = u.type;
      return typeof v == "function" && !Sp(v) && v.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = v, da(n, r, v, l, f)) : (n = Tf(u.type, null, l, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, !(n.lanes & f)) {
      var C = v.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Cs, u(C, l) && n.ref === r.ref)
        return hr(n, r, f);
    }
    return r.flags |= 1, n = Gu(v, l), n.ref = r.ref, n.return = r, r.child = n;
  }
  function da(n, r, u, l, f) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (Cs(v, l) && n.ref === r.ref)
        if (Wn = !1, r.pendingProps = l = v, (n.lanes & f) !== 0)
          n.flags & 131072 && (Wn = !0);
        else
          return r.lanes = n.lanes, hr(n, r, f);
    }
    return Ol(n, r, u, l, f);
  }
  function ko(n, r, u) {
    var l = r.pendingProps, f = l.children, v = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Zt(Al, Da), Da |= u;
      else {
        if (!(u & 1073741824))
          return n = v !== null ? v.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Zt(Al, Da), Da |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = v !== null ? v.baseLanes : u, Zt(Al, Da), Da |= l;
      }
    else
      v !== null ? (l = v.baseLanes | u, r.memoizedState = null) : l = u, Zt(Al, Da), Da |= l;
    return Kn(n, r, f, u), r.child;
  }
  function Ct(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ol(n, r, u, l, f) {
    var v = wn(u) ? ia : ft.current;
    return v = Va(r, v), Ce(r, f), u = Iu(n, r, u, l, v, f), l = _o(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, hr(n, r, f)) : (Sn && l && Uc(r), r.flags |= 1, Kn(n, r, u, f), r.child);
  }
  function tp(n, r, u, l, f) {
    if (wn(u)) {
      var v = !0;
      zc(r);
    } else
      v = !1;
    if (Ce(r, f), r.stateNode === null)
      Or(n, r), ch(r, u, l), Bc(r, u, l, f), l = !0;
    else if (n === null) {
      var C = r.stateNode, x = r.memoizedProps;
      C.props = x;
      var z = C.context, J = u.contextType;
      typeof J == "object" && J !== null ? J = Vn(J) : (J = wn(u) ? ia : ft.current, J = Va(r, J));
      var de = u.getDerivedStateFromProps, pe = typeof de == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      pe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== l || z !== J) && fh(r, C, l, J), Pu = !1;
      var ce = r.memoizedState;
      C.state = ce, Vu(r, l, C, f), z = r.memoizedState, x !== l || ce !== z || zn.current || Pu ? (typeof de == "function" && (Gd(r, u, de, l), z = r.memoizedState), (x = Pu || sh(r, u, x, l, ce, z, J)) ? (pe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = z), C.props = l, C.state = z, C.context = J, l = x) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      C = r.stateNode, qn(n, r), x = r.memoizedProps, J = r.type === r.elementType ? x : xa(r.type, x), C.props = J, pe = r.pendingProps, ce = C.context, z = u.contextType, typeof z == "object" && z !== null ? z = Vn(z) : (z = wn(u) ? ia : ft.current, z = Va(r, z));
      var Ne = u.getDerivedStateFromProps;
      (de = typeof Ne == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== pe || ce !== z) && fh(r, C, l, z), Pu = !1, ce = r.memoizedState, C.state = ce, Vu(r, l, C, f);
      var Fe = r.memoizedState;
      x !== pe || ce !== Fe || zn.current || Pu ? (typeof Ne == "function" && (Gd(r, u, Ne, l), Fe = r.memoizedState), (J = Pu || sh(r, u, J, l, ce, Fe, z) || !1) ? (de || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(l, Fe, z), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(l, Fe, z)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = Fe), C.props = l, C.state = Fe, C.context = z, l = J) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), l = !1);
    }
    return gh(n, r, u, l, v, f);
  }
  function gh(n, r, u, l, f, v) {
    Ct(n, r);
    var C = (r.flags & 128) !== 0;
    if (!l && !C)
      return f && rh(r, u, !1), hr(n, r, v);
    l = r.stateNode, Hy.current = r;
    var x = C && typeof u.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, n !== null && C ? (r.child = bl(r, n.child, null, v), r.child = bl(r, null, x, v)) : Kn(n, r, x, v), r.memoizedState = l.state, f && rh(r, u, !0), r.child;
  }
  function Sh(n) {
    var r = n.stateNode;
    r.pendingContext ? Au(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Au(n, r.context, !1), qd(n, r.containerInfo);
  }
  function pf(n, r, u, l, f) {
    return kn(), Id(f), r.flags |= 256, Kn(n, r, u, l), r.child;
  }
  var No = { dehydrated: null, treeContext: null, retryLane: 0 };
  function np(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rp(n, r, u) {
    var l = r.pendingProps, f = at.current, v = !1, C = (r.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), x ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Zt(at, f & 1), n === null)
      return Pc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = l.children, n = l.fallback, v ? (l = r.mode, v = r.child, C = { mode: "hidden", children: C }, !(l & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = C) : v = Ks(C, l, 0, null), n = Fo(n, l, u, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = np(u), r.memoizedState = No, n) : ap(r, C));
    if (f = n.memoizedState, f !== null && (x = f.dehydrated, x !== null))
      return Iy(n, r, C, l, x, f, u);
    if (v) {
      v = l.fallback, C = r.mode, f = n.child, x = f.sibling;
      var z = { mode: "hidden", children: l.children };
      return !(C & 1) && r.child !== f ? (l = r.child, l.childLanes = 0, l.pendingProps = z, r.deletions = null) : (l = Gu(f, z), l.subtreeFlags = f.subtreeFlags & 14680064), x !== null ? v = Gu(x, v) : (v = Fo(v, C, u, null), v.flags |= 2), v.return = r, l.return = r, l.sibling = v, r.child = l, l = v, v = r.child, C = n.child.memoizedState, C = C === null ? np(u) : { baseLanes: C.baseLanes | u, cachePool: null, transitions: C.transitions }, v.memoizedState = C, v.childLanes = n.childLanes & ~u, r.memoizedState = No, l;
    }
    return v = n.child, n = v.sibling, l = Gu(v, { mode: "visible", children: l.children }), !(r.mode & 1) && (l.lanes = u), l.return = r, l.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = l, r.memoizedState = null, l;
  }
  function ap(n, r) {
    return r = Ks({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Dl(n, r, u, l) {
    return l !== null && Id(l), bl(r, n.child, null, u), n = ap(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iy(n, r, u, l, f, v, C) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, l = Fs(Error(h(422))), Dl(n, r, C, l)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = l.fallback, f = r.mode, l = Ks({ mode: "visible", children: l.children }, f, 0, null), v = Fo(v, f, C, null), v.flags |= 2, l.return = r, v.return = r, l.sibling = v, r.child = l, r.mode & 1 && bl(r, n.child, null, C), r.child.memoizedState = np(C), r.memoizedState = No, v);
    if (!(r.mode & 1))
      return Dl(n, r, C, null);
    if (f.data === "$!") {
      if (l = f.nextSibling && f.nextSibling.dataset, l)
        var x = l.dgst;
      return l = x, v = Error(h(419)), l = Fs(v, l, void 0), Dl(n, r, C, l);
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
        f = f & (l.suspendedLanes | C) ? 0 : f, f !== 0 && f !== v.retryLane && (v.retryLane = f, Xi(n, f), Mr(l, n, f, -1));
      }
      return mp(), l = Fs(Error(h(421))), Dl(n, r, C, l);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gy.bind(null, n), f._reactRetry = r, null) : (n = v.treeContext, sa = ci(f.nextSibling), _a = r, Sn = !0, $a = null, n !== null && (la[xr++] = pr, la[xr++] = Ki, la[xr++] = Ia, pr = n.id, Ki = n.overflow, Ia = r), r = ap(r, l.children), r.flags |= 4096, r);
  }
  function ip(n, r, u) {
    n.lanes |= r;
    var l = n.alternate;
    l !== null && (l.lanes |= r), ur(n.return, r, u);
  }
  function vf(n, r, u, l, f) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: u, tailMode: f } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = l, v.tail = u, v.tailMode = f);
  }
  function up(n, r, u) {
    var l = r.pendingProps, f = l.revealOrder, v = l.tail;
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
    if (Zt(at, l), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (u = r.child, f = null; u !== null; )
            n = u.alternate, n !== null && Nn(n) === null && (f = u), u = u.sibling;
          u = f, u === null ? (f = r.child, r.child = null) : (f = u.sibling, u.sibling = null), vf(r, !1, f, u, v);
          break;
        case "backwards":
          for (u = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && Nn(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = u, u = f, f = n;
          }
          vf(r, !0, u, null, v);
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
      throw Error(h(153));
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
        Sh(r), kn();
        break;
      case 5:
        nt(r);
        break;
      case 1:
        wn(r.type) && zc(r);
        break;
      case 4:
        qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context, f = r.memoizedProps.value;
        Zt(xi, l._currentValue), l._currentValue = f;
        break;
      case 13:
        if (l = r.memoizedState, l !== null)
          return l.dehydrated !== null ? (Zt(at, at.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? rp(n, r, u) : (Zt(at, at.current & 1), n = hr(n, r, u), n !== null ? n.sibling : null);
        Zt(at, at.current & 1);
        break;
      case 19:
        if (l = (u & r.childLanes) !== 0, n.flags & 128) {
          if (l)
            return up(n, r, u);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Zt(at, at.current), l)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ko(n, r, u);
    }
    return hr(n, r, u);
  }
  var Hs, Mo, Wa, Xn;
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
  }, Mo = function() {
  }, Wa = function(n, r, u, l) {
    var f = n.memoizedProps;
    if (f !== l) {
      n = r.stateNode, bo(fi.current);
      var v = null;
      switch (u) {
        case "input":
          f = _e(n, f), l = _e(n, l), v = [];
          break;
        case "select":
          f = M({}, f, { value: void 0 }), l = M({}, l, { value: void 0 }), v = [];
          break;
        case "textarea":
          f = Jr(n, f), l = Jr(n, l), v = [];
          break;
        default:
          typeof f.onClick != "function" && typeof l.onClick == "function" && (n.onclick = Ac);
      }
      Fn(u, l);
      var C;
      u = null;
      for (J in f)
        if (!l.hasOwnProperty(J) && f.hasOwnProperty(J) && f[J] != null)
          if (J === "style") {
            var x = f[J];
            for (C in x)
              x.hasOwnProperty(C) && (u || (u = {}), u[C] = "");
          } else
            J !== "dangerouslySetInnerHTML" && J !== "children" && J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && J !== "autoFocus" && (b.hasOwnProperty(J) ? v || (v = []) : (v = v || []).push(J, null));
      for (J in l) {
        var z = l[J];
        if (x = f != null ? f[J] : void 0, l.hasOwnProperty(J) && z !== x && (z != null || x != null))
          if (J === "style")
            if (x) {
              for (C in x)
                !x.hasOwnProperty(C) || z && z.hasOwnProperty(C) || (u || (u = {}), u[C] = "");
              for (C in z)
                z.hasOwnProperty(C) && x[C] !== z[C] && (u || (u = {}), u[C] = z[C]);
            } else
              u || (v || (v = []), v.push(
                J,
                u
              )), u = z;
          else
            J === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, x = x ? x.__html : void 0, z != null && x !== z && (v = v || []).push(J, z)) : J === "children" ? typeof z != "string" && typeof z != "number" || (v = v || []).push(J, "" + z) : J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && (b.hasOwnProperty(J) ? (z != null && J === "onScroll" && dn("scroll", n), v || x === z || (v = [])) : (v = v || []).push(J, z));
      }
      u && (v = v || []).push("style", u);
      var J = v;
      (r.updateQueue = J) && (r.flags |= 4);
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
  function $y(n, r, u) {
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
        return l = r.stateNode, Hu(), Qt(zn), Qt(ft), Wc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (Fc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, $a !== null && (qs($a), $a = null))), Mo(n, r), Dr(r), null;
      case 5:
        xt(r);
        var f = bo(Rl.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Wa(n, r, u, l, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null)
              throw Error(h(166));
            return Dr(r), null;
          }
          if (n = bo(fi.current), Fc(r)) {
            l = r.stateNode, u = r.type;
            var v = r.memoizedProps;
            switch (l[wi] = r, l[So] = v, n = (r.mode & 1) !== 0, u) {
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
                vn(l, v), dn("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!v.multiple }, dn("invalid", l);
                break;
              case "textarea":
                wr(l, v), dn("invalid", l);
            }
            Fn(u, v), f = null;
            for (var C in v)
              if (v.hasOwnProperty(C)) {
                var x = v[C];
                C === "children" ? typeof x == "string" ? l.textContent !== x && (v.suppressHydrationWarning !== !0 && Lc(l.textContent, x, n), f = ["children", x]) : typeof x == "number" && l.textContent !== "" + x && (v.suppressHydrationWarning !== !0 && Lc(
                  l.textContent,
                  x,
                  n
                ), f = ["children", "" + x]) : b.hasOwnProperty(C) && x != null && C === "onScroll" && dn("scroll", l);
              }
            switch (u) {
              case "input":
                $n(l), Xr(l, v, !0);
                break;
              case "textarea":
                $n(l), fr(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (l.onclick = Ac);
            }
            l = f, r.updateQueue = l, l !== null && (r.flags |= 4);
          } else {
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ea(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = C.createElement(u, { is: l.is }) : (n = C.createElement(u), u === "select" && (C = n, l.multiple ? C.multiple = !0 : l.size && (C.size = l.size))) : n = C.createElementNS(n, u), n[wi] = r, n[So] = l, Hs(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!l.multiple }, f = M({}, l, { value: void 0 }), dn("invalid", n);
                  break;
                case "textarea":
                  wr(n, l), f = Jr(n, l), dn("invalid", n);
                  break;
                default:
                  f = l;
              }
              Fn(u, f), x = f;
              for (v in x)
                if (x.hasOwnProperty(v)) {
                  var z = x[v];
                  v === "style" ? Wt(n, z) : v === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && yi(n, z)) : v === "children" ? typeof z == "string" ? (u !== "textarea" || z !== "") && Ea(n, z) : typeof z == "number" && Ea(n, "" + z) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (b.hasOwnProperty(v) ? z != null && v === "onScroll" && dn("scroll", n) : z != null && ee(n, v, z, C));
                }
              switch (u) {
                case "input":
                  $n(n), Xr(n, l, !1);
                  break;
                case "textarea":
                  $n(n), fr(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + mt(l.value));
                  break;
                case "select":
                  n.multiple = !!l.multiple, v = l.value, v != null ? Tr(n, !!l.multiple, v, !1) : l.defaultValue != null && Tr(
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
            throw Error(h(166));
          if (u = bo(Rl.current), bo(fi.current), Fc(r)) {
            if (l = r.stateNode, u = r.memoizedProps, l[wi] = r, (v = l.nodeValue !== u) && (n = _a, n !== null))
              switch (n.tag) {
                case 3:
                  Lc(l.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Lc(l.nodeValue, u, (n.mode & 1) !== 0);
              }
            v && (r.flags |= 4);
          } else
            l = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(l), l[wi] = r, r.stateNode = l;
        }
        return Dr(r), null;
      case 13:
        if (Qt(at), l = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Sn && sa !== null && r.mode & 1 && !(r.flags & 128))
            uh(), kn(), r.flags |= 98560, v = !1;
          else if (v = Fc(r), l !== null && l.dehydrated !== null) {
            if (n === null) {
              if (!v)
                throw Error(h(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v)
                throw Error(h(317));
              v[wi] = r;
            } else
              kn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Dr(r), v = !1;
          } else
            $a !== null && (qs($a), $a = null), v = !0;
          if (!v)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (r.child.flags |= 8192, r.mode & 1 && (n === null || at.current & 1 ? Jn === 0 && (Jn = 3) : mp())), r.updateQueue !== null && (r.flags |= 4), Dr(r), null);
      case 4:
        return Hu(), Mo(n, r), n === null && gl(r.stateNode.containerInfo), Dr(r), null;
      case 10:
        return ju(r.type._context), Dr(r), null;
      case 17:
        return wn(r.type) && Ha(), Dr(r), null;
      case 19:
        if (Qt(at), v = r.memoizedState, v === null)
          return Dr(r), null;
        if (l = (r.flags & 128) !== 0, C = v.rendering, C === null)
          if (l)
            Is(v, !1);
          else {
            if (Jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = Nn(n), C !== null) {
                  for (r.flags |= 128, Is(v, !1), l = C.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = u, u = r.child; u !== null; )
                    v = u, n = l, v.flags &= 14680066, C = v.alternate, C === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = C.childLanes, v.lanes = C.lanes, v.child = C.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = C.memoizedProps, v.memoizedState = C.memoizedState, v.updateQueue = C.updateQueue, v.type = C.type, n = C.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Zt(at, at.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            v.tail !== null && Ft() > Ul && (r.flags |= 128, l = !0, Is(v, !1), r.lanes = 4194304);
          }
        else {
          if (!l)
            if (n = Nn(C), n !== null) {
              if (r.flags |= 128, l = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Is(v, !0), v.tail === null && v.tailMode === "hidden" && !C.alternate && !Sn)
                return Dr(r), null;
            } else
              2 * Ft() - v.renderingStartTime > Ul && u !== 1073741824 && (r.flags |= 128, l = !0, Is(v, !1), r.lanes = 4194304);
          v.isBackwards ? (C.sibling = r.child, r.child = C) : (u = v.last, u !== null ? u.sibling = C : r.child = C, v.last = C);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = Ft(), r.sibling = null, u = at.current, Zt(at, l ? u & 1 | 2 : u & 1), r) : (Dr(r), null);
      case 22:
      case 23:
        return hp(), l = r.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (r.flags |= 8192), l && r.mode & 1 ? Da & 1073741824 && (Dr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Dr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function op(n, r) {
    switch (Vd(r), r.tag) {
      case 1:
        return wn(r.type) && Ha(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Hu(), Qt(zn), Qt(ft), Wc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xt(r), null;
      case 13:
        if (Qt(at), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(h(340));
          kn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qt(at), null;
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
  var $s = !1, Zn = !1, Eh = typeof WeakSet == "function" ? WeakSet : Set, je = null;
  function kl(n, r) {
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
  function Bs(n, r, u) {
    try {
      u();
    } catch (l) {
      jn(n, r, l);
    }
  }
  var Ch = !1;
  function bh(n, r) {
    if (Md = ja, n = Oc(), Wi(n)) {
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
            var C = 0, x = -1, z = -1, J = 0, de = 0, pe = n, ce = null;
            t:
              for (; ; ) {
                for (var Ne; pe !== u || f !== 0 && pe.nodeType !== 3 || (x = C + f), pe !== v || l !== 0 && pe.nodeType !== 3 || (z = C + l), pe.nodeType === 3 && (C += pe.nodeValue.length), (Ne = pe.firstChild) !== null; )
                  ce = pe, pe = Ne;
                for (; ; ) {
                  if (pe === n)
                    break t;
                  if (ce === u && ++J === f && (x = C), ce === v && ++de === l && (z = C), (Ne = pe.nextSibling) !== null)
                    break;
                  pe = ce, ce = pe.parentNode;
                }
                pe = Ne;
              }
            u = x === -1 || z === -1 ? null : { start: x, end: z };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (yo = { focusedElem: n, selectionRange: u }, ja = !1, je = r; je !== null; )
      if (r = je, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, je = n;
      else
        for (; je !== null; ) {
          r = je;
          try {
            var Fe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Fe !== null) {
                    var Be = Fe.memoizedProps, Hn = Fe.memoizedState, Y = r.stateNode, F = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? Be : xa(r.type, Be), Hn);
                    Y.__reactInternalSnapshotBeforeUpdate = F;
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
                  throw Error(h(163));
              }
          } catch (ge) {
            jn(r, r.return, ge);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, je = n;
            break;
          }
          je = r.return;
        }
    return Fe = Ch, Ch = !1, Fe;
  }
  function Ys(n, r, u) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var f = l = l.next;
      do {
        if ((f.tag & n) === n) {
          var v = f.destroy;
          f.destroy = void 0, v !== void 0 && Bs(r, u, v);
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
    r !== null && (n.alternate = null, sp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[So], delete r[zd], delete r[Uy], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Rh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function hf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Rh(n.return))
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
  function Nl(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = Ac));
    else if (l !== 4 && (n = n.child, n !== null))
      for (Nl(n, r, u), n = n.sibling; n !== null; )
        Nl(n, r, u), n = n.sibling;
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
      Ml(n, r, u), u = u.sibling;
  }
  function Ml(n, r, u) {
    if (ta && typeof ta.onCommitFiberUnmount == "function")
      try {
        ta.onCommitFiberUnmount(Su, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Zn || kl(u, r);
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
            var v = f, C = v.destroy;
            v = v.tag, C !== void 0 && (v & 2 || v & 4) && Bs(u, r, C), f = f.next;
          } while (f !== l);
        }
        Qa(n, r, u);
        break;
      case 1:
        if (!Zn && (kl(u, r), l = u.stateNode, typeof l.componentWillUnmount == "function"))
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
      u === null && (u = n.stateNode = new Eh()), r.forEach(function(l) {
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
          var v = n, C = r, x = C;
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
            throw Error(h(160));
          Ml(v, C, f), _n = null, or = !1;
          var z = f.alternate;
          z !== null && (z.return = null), f.return = null;
        } catch (J) {
          jn(f, r, J);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Th(r, n), r = r.sibling;
  }
  function Th(n, r) {
    var u = n.alternate, l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (di(r, n), ki(n), l & 4) {
          try {
            Ys(3, n, n.return), Ws(3, n);
          } catch (Be) {
            jn(n, n.return, Be);
          }
          try {
            Ys(5, n, n.return);
          } catch (Be) {
            jn(n, n.return, Be);
          }
        }
        break;
      case 1:
        di(r, n), ki(n), l & 512 && u !== null && kl(u, u.return);
        break;
      case 5:
        if (di(r, n), ki(n), l & 512 && u !== null && kl(u, u.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Ea(f, "");
          } catch (Be) {
            jn(n, n.return, Be);
          }
        }
        if (l & 4 && (f = n.stateNode, f != null)) {
          var v = n.memoizedProps, C = u !== null ? u.memoizedProps : v, x = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              x === "input" && v.type === "radio" && v.name != null && Rn(f, v), On(x, C);
              var J = On(x, v);
              for (C = 0; C < z.length; C += 2) {
                var de = z[C], pe = z[C + 1];
                de === "style" ? Wt(f, pe) : de === "dangerouslySetInnerHTML" ? yi(f, pe) : de === "children" ? Ea(f, pe) : ee(f, de, pe, J);
              }
              switch (x) {
                case "input":
                  Tn(f, v);
                  break;
                case "textarea":
                  Sa(f, v);
                  break;
                case "select":
                  var ce = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!v.multiple;
                  var Ne = v.value;
                  Ne != null ? Tr(f, !!v.multiple, Ne, !1) : ce !== !!v.multiple && (v.defaultValue != null ? Tr(
                    f,
                    !!v.multiple,
                    v.defaultValue,
                    !0
                  ) : Tr(f, !!v.multiple, v.multiple ? [] : "", !1));
              }
              f[So] = v;
            } catch (Be) {
              jn(n, n.return, Be);
            }
        }
        break;
      case 6:
        if (di(r, n), ki(n), l & 4) {
          if (n.stateNode === null)
            throw Error(h(162));
          f = n.stateNode, v = n.memoizedProps;
          try {
            f.nodeValue = v;
          } catch (Be) {
            jn(n, n.return, Be);
          }
        }
        break;
      case 3:
        if (di(r, n), ki(n), l & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _u(r.containerInfo);
          } catch (Be) {
            jn(n, n.return, Be);
          }
        break;
      case 4:
        di(r, n), ki(n);
        break;
      case 13:
        di(r, n), ki(n), f = n.child, f.flags & 8192 && (v = f.memoizedState !== null, f.stateNode.isHidden = v, !v || f.alternate !== null && f.alternate.memoizedState !== null || (dp = Ft())), l & 4 && tu(n);
        break;
      case 22:
        if (de = u !== null && u.memoizedState !== null, n.mode & 1 ? (Zn = (J = Zn) || de, di(r, n), Zn = J) : di(r, n), ki(n), l & 8192) {
          if (J = n.memoizedState !== null, (n.stateNode.isHidden = J) && !de && n.mode & 1)
            for (je = n, de = n.child; de !== null; ) {
              for (pe = je = de; je !== null; ) {
                switch (ce = je, Ne = ce.child, ce.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ys(4, ce, ce.return);
                    break;
                  case 1:
                    kl(ce, ce.return);
                    var Fe = ce.stateNode;
                    if (typeof Fe.componentWillUnmount == "function") {
                      l = ce, u = ce.return;
                      try {
                        r = l, Fe.props = r.memoizedProps, Fe.state = r.memoizedState, Fe.componentWillUnmount();
                      } catch (Be) {
                        jn(l, u, Be);
                      }
                    }
                    break;
                  case 5:
                    kl(ce, ce.return);
                    break;
                  case 22:
                    if (ce.memoizedState !== null) {
                      cp(pe);
                      continue;
                    }
                }
                Ne !== null ? (Ne.return = ce, je = Ne) : cp(pe);
              }
              de = de.sibling;
            }
          e:
            for (de = null, pe = n; ; ) {
              if (pe.tag === 5) {
                if (de === null) {
                  de = pe;
                  try {
                    f = pe.stateNode, J ? (v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (x = pe.stateNode, z = pe.memoizedProps.style, C = z != null && z.hasOwnProperty("display") ? z.display : null, x.style.display = Rt("display", C));
                  } catch (Be) {
                    jn(n, n.return, Be);
                  }
                }
              } else if (pe.tag === 6) {
                if (de === null)
                  try {
                    pe.stateNode.nodeValue = J ? "" : pe.memoizedProps;
                  } catch (Be) {
                    jn(n, n.return, Be);
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
                de === pe && (de = null), pe = pe.return;
              }
              de === pe && (de = null), pe.sibling.return = pe.return, pe = pe.sibling;
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
            if (Rh(u)) {
              var l = u;
              break e;
            }
            u = u.return;
          }
          throw Error(h(160));
        }
        switch (l.tag) {
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Ea(f, ""), l.flags &= -33);
            var v = hf(n);
            Di(n, v, f);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo, x = hf(n);
            Nl(n, x, C);
            break;
          default:
            throw Error(h(161));
        }
      } catch (z) {
        jn(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function wh(n, r, u) {
    je = n, Ll(n);
  }
  function Ll(n, r, u) {
    for (var l = (n.mode & 1) !== 0; je !== null; ) {
      var f = je, v = f.child;
      if (f.tag === 22 && l) {
        var C = f.memoizedState !== null || $s;
        if (!C) {
          var x = f.alternate, z = x !== null && x.memoizedState !== null || Zn;
          x = $s;
          var J = Zn;
          if ($s = C, (Zn = z) && !J)
            for (je = f; je !== null; )
              C = je, z = C.child, C.tag === 22 && C.memoizedState !== null ? xh(f) : z !== null ? (z.return = C, je = z) : xh(f);
          for (; v !== null; )
            je = v, Ll(v), v = v.sibling;
          je = f, $s = x, Zn = J;
        }
        _h(n);
      } else
        f.subtreeFlags & 8772 && v !== null ? (v.return = f, je = v) : _h(n);
    }
  }
  function _h(n) {
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
                var v = r.updateQueue;
                v !== null && Co(r, v, l);
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
                  Co(r, C, u);
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
                  var J = r.alternate;
                  if (J !== null) {
                    var de = J.memoizedState;
                    if (de !== null) {
                      var pe = de.dehydrated;
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
                throw Error(h(163));
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
  function xh(n) {
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
            } catch (z) {
              jn(r, u, z);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = r.return;
              try {
                l.componentDidMount();
              } catch (z) {
                jn(r, f, z);
              }
            }
            var v = r.return;
            try {
              lp(r);
            } catch (z) {
              jn(r, v, z);
            }
            break;
          case 5:
            var C = r.return;
            try {
              lp(r);
            } catch (z) {
              jn(r, C, z);
            }
        }
      } catch (z) {
        jn(r, r.return, z);
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
  var mf = Math.ceil, Qs = Z.ReactCurrentDispatcher, fp = Z.ReactCurrentOwner, kr = Z.ReactCurrentBatchConfig, Dt = 0, Mn = null, Un = null, lr = 0, Da = 0, Al = Et(0), Jn = 0, Gs = null, nu = 0, yf = 0, zl = 0, Lo = null, Hr = null, dp = 0, Ul = 1 / 0, ru = null, gf = !1, Ao = null, Ni = null, Yu = !1, Wu = null, Sf = 0, jl = 0, Ef = null, zo = -1, Uo = 0;
  function Nr() {
    return Dt & 6 ? Ft() : zo !== -1 ? zo : zo = Ft();
  }
  function Qn(n) {
    return n.mode & 1 ? Dt & 2 && lr !== 0 ? lr & -lr : Vc.transition !== null ? (Uo === 0 && (Uo = al()), Uo) : (n = $t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ms(n.type)), n) : 1;
  }
  function Mr(n, r, u, l) {
    if (50 < jl)
      throw jl = 0, Ef = null, Error(h(185));
    Hi(n, u, l), (!(Dt & 2) || n !== Mn) && (n === Mn && (!(Dt & 2) && (yf |= u), Jn === 4 && Ga(n, lr)), Lr(n, l), u === 1 && Dt === 0 && !(r.mode & 1) && (Ul = Ft() + 500, ir && ua()));
  }
  function Lr(n, r) {
    var u = n.callbackNode;
    bu(n, r);
    var l = Fr(n, n === Mn ? lr : 0);
    if (l === 0)
      u !== null && dr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = l & -l, n.callbackPriority !== r) {
      if (u != null && dr(u), r === 1)
        n.tag === 0 ? Pd(Oh.bind(null, n)) : jd(Oh.bind(null, n)), Ad(function() {
          !(Dt & 6) && ua();
        }), u = null;
      else {
        switch (ul(l)) {
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
            u = nl;
            break;
          default:
            u = bi;
        }
        u = gp(u, Pl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function Pl(n, r) {
    if (zo = -1, Uo = 0, Dt & 6)
      throw Error(h(327));
    var u = n.callbackNode;
    if (Vl() && n.callbackNode !== u)
      return null;
    var l = Fr(n, n === Mn ? lr : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & n.expiredLanes || r)
      r = bf(n, l);
    else {
      r = l;
      var f = Dt;
      Dt |= 2;
      var v = Cf();
      (Mn !== n || lr !== r) && (ru = null, Ul = Ft() + 500, jo(n, r));
      do
        try {
          Yy();
          break;
        } catch (x) {
          Dh(n, x);
        }
      while (1);
      Bd(), Qs.current = v, Dt = f, Un !== null ? r = 0 : (Mn = null, lr = 0, r = Jn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Ru(n), f !== 0 && (l = f, r = pp(n, f))), r === 1)
        throw u = Gs, jo(n, 0), Ga(n, l), Lr(n, Ft()), u;
      if (r === 6)
        Ga(n, l);
      else {
        if (f = n.current.alternate, !(l & 30) && !vp(f) && (r = bf(n, l), r === 2 && (v = Ru(n), v !== 0 && (l = v, r = pp(n, v))), r === 1))
          throw u = Gs, jo(n, 0), Ga(n, l), Lr(n, Ft()), u;
        switch (n.finishedWork = f, n.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Po(n, Hr, ru);
            break;
          case 3:
            if (Ga(n, l), (l & 130023424) === l && (r = dp + 500 - Ft(), 10 < r)) {
              if (Fr(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & l) !== l) {
                Nr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = go(Po.bind(null, n, Hr, ru), r);
              break;
            }
            Po(n, Hr, ru);
            break;
          case 4:
            if (Ga(n, l), (l & 4194240) === l)
              break;
            for (r = n.eventTimes, f = -1; 0 < l; ) {
              var C = 31 - Pr(l);
              v = 1 << C, C = r[C], C > f && (f = C), l &= ~v;
            }
            if (l = f, l = Ft() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * mf(l / 1960)) - l, 10 < l) {
              n.timeoutHandle = go(Po.bind(null, n, Hr, ru), l);
              break;
            }
            Po(n, Hr, ru);
            break;
          case 5:
            Po(n, Hr, ru);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return Lr(n, Ft()), n.callbackNode === u ? Pl.bind(null, n) : null;
  }
  function pp(n, r) {
    var u = Lo;
    return n.current.memoizedState.isDehydrated && (jo(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = Hr, Hr = u, r !== null && qs(r)), n;
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
            var f = u[l], v = f.getSnapshot;
            f = f.value;
            try {
              if (!Pa(v(), f))
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
    for (r &= ~zl, r &= ~yf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - Pr(r), l = 1 << u;
      n[u] = -1, r &= ~l;
    }
  }
  function Oh(n) {
    if (Dt & 6)
      throw Error(h(327));
    Vl();
    var r = Fr(n, 0);
    if (!(r & 1))
      return Lr(n, Ft()), null;
    var u = bf(n, r);
    if (n.tag !== 0 && u === 2) {
      var l = Ru(n);
      l !== 0 && (r = l, u = pp(n, l));
    }
    if (u === 1)
      throw u = Gs, jo(n, 0), Ga(n, r), Lr(n, Ft()), u;
    if (u === 6)
      throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Po(n, Hr, ru), Lr(n, Ft()), null;
  }
  function Fl(n, r) {
    var u = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = u, Dt === 0 && (Ul = Ft() + 500, ir && ua());
    }
  }
  function Qu(n) {
    Wu !== null && Wu.tag === 0 && !(Dt & 6) && Vl();
    var r = Dt;
    Dt |= 1;
    var u = kr.transition, l = $t;
    try {
      if (kr.transition = null, $t = 1, n)
        return n();
    } finally {
      $t = l, kr.transition = u, Dt = r, !(Dt & 6) && ua();
    }
  }
  function hp() {
    Da = Al.current, Qt(Al);
  }
  function jo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, nh(u)), Un !== null)
      for (u = Un.return; u !== null; ) {
        var l = u;
        switch (Vd(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Ha();
            break;
          case 3:
            Hu(), Qt(zn), Qt(ft), Wc();
            break;
          case 5:
            xt(l);
            break;
          case 4:
            Hu();
            break;
          case 13:
            Qt(at);
            break;
          case 19:
            Qt(at);
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
    if (Mn = n, Un = n = Gu(n.current, null), lr = Da = r, Jn = 0, Gs = null, zl = yf = nu = 0, Hr = Lo = null, vr !== null) {
      for (r = 0; r < vr.length; r++)
        if (u = vr[r], l = u.interleaved, l !== null) {
          u.interleaved = null;
          var f = l.next, v = u.pending;
          if (v !== null) {
            var C = v.next;
            v.next = f, l.next = C;
          }
          u.pending = l;
        }
      vr = null;
    }
    return n;
  }
  function Dh(n, r) {
    do {
      var u = Un;
      try {
        if (Bd(), Qc.current = cf, lt) {
          for (var l = En.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), l = l.next;
          }
          lt = !1;
        }
        if (Ro = 0, Lt = ae = En = null, Oi = !1, Oa = 0, fp.current = null, u === null || u.return === null) {
          Jn = 1, Gs = r, Un = null;
          break;
        }
        e: {
          var v = n, C = u.return, x = u, z = r;
          if (r = lr, x.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var J = z, de = x, pe = de.tag;
            if (!(de.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var ce = de.alternate;
              ce ? (de.updateQueue = ce.updateQueue, de.memoizedState = ce.memoizedState, de.lanes = ce.lanes) : (de.updateQueue = null, de.memoizedState = null);
            }
            var Ne = Jd(C);
            if (Ne !== null) {
              Ne.flags &= -257, ep(Ne, C, x, v, r), Ne.mode & 1 && yh(v, J, r), r = Ne, z = J;
              var Fe = r.updateQueue;
              if (Fe === null) {
                var Be = /* @__PURE__ */ new Set();
                Be.add(z), r.updateQueue = Be;
              } else
                Fe.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                yh(v, J, r), mp();
                break e;
              }
              z = Error(h(426));
            }
          } else if (Sn && x.mode & 1) {
            var Hn = Jd(C);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), ep(Hn, C, x, v, r), Id(xl(z, x));
              break e;
            }
          }
          v = z = xl(z, x), Jn !== 4 && (Jn = 2), Lo === null ? Lo = [v] : Lo.push(v), v = C;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var Y = mh(v, z, r);
                Qd(v, Y);
                break e;
              case 1:
                x = z;
                var F = v.type, G = v.stateNode;
                if (!(v.flags & 128) && (typeof F.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (Ni === null || !Ni.has(G)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var ge = Vs(v, x, r);
                  Qd(v, ge);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        yp(u);
      } catch (Qe) {
        r = Qe, Un === u && u !== null && (Un = u = u.return);
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
    var u = Dt;
    Dt |= 2;
    var l = Cf();
    (Mn !== n || lr !== r) && (ru = null, jo(n, r));
    do
      try {
        By();
        break;
      } catch (f) {
        Dh(n, f);
      }
    while (1);
    if (Bd(), Dt = u, Qs.current = l, Un !== null)
      throw Error(h(261));
    return Mn = null, lr = 0, Jn;
  }
  function By() {
    for (; Un !== null; )
      kh(Un);
  }
  function Yy() {
    for (; Un !== null && !Ci(); )
      kh(Un);
  }
  function kh(n) {
    var r = Mh(n.alternate, n, Da);
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
      } else if (u = $y(u, r, Da), u !== null) {
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
  function Po(n, r, u) {
    var l = $t, f = kr.transition;
    try {
      kr.transition = null, $t = 1, Wy(n, r, u, l);
    } finally {
      kr.transition = f, $t = l;
    }
    return null;
  }
  function Wy(n, r, u, l) {
    do
      Vl();
    while (Wu !== null);
    if (Dt & 6)
      throw Error(h(327));
    u = n.finishedWork;
    var f = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = u.lanes | u.childLanes;
    if (pd(n, v), n === Mn && (Un = Mn = null, lr = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Yu || (Yu = !0, gp(bi, function() {
      return Vl(), null;
    })), v = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || v) {
      v = kr.transition, kr.transition = null;
      var C = $t;
      $t = 1;
      var x = Dt;
      Dt |= 4, fp.current = null, bh(n, u), Th(u, n), Dc(yo), ja = !!Md, yo = Md = null, n.current = u, wh(u), tl(), Dt = x, $t = C, kr.transition = v;
    } else
      n.current = u;
    if (Yu && (Yu = !1, Wu = n, Sf = f), v = n.pendingLanes, v === 0 && (Ni = null), ps(u.stateNode), Lr(n, Ft()), r !== null)
      for (l = n.onRecoverableError, u = 0; u < r.length; u++)
        f = r[u], l(f.value, { componentStack: f.stack, digest: f.digest });
    if (gf)
      throw gf = !1, n = Ao, Ao = null, n;
    return Sf & 1 && n.tag !== 0 && Vl(), v = n.pendingLanes, v & 1 ? n === Ef ? jl++ : (jl = 0, Ef = n) : jl = 0, ua(), null;
  }
  function Vl() {
    if (Wu !== null) {
      var n = ul(Sf), r = kr.transition, u = $t;
      try {
        if (kr.transition = null, $t = 16 > n ? 16 : n, Wu === null)
          var l = !1;
        else {
          if (n = Wu, Wu = null, Sf = 0, Dt & 6)
            throw Error(h(331));
          var f = Dt;
          for (Dt |= 4, je = n.current; je !== null; ) {
            var v = je, C = v.child;
            if (je.flags & 16) {
              var x = v.deletions;
              if (x !== null) {
                for (var z = 0; z < x.length; z++) {
                  var J = x[z];
                  for (je = J; je !== null; ) {
                    var de = je;
                    switch (de.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(8, de, v);
                    }
                    var pe = de.child;
                    if (pe !== null)
                      pe.return = de, je = pe;
                    else
                      for (; je !== null; ) {
                        de = je;
                        var ce = de.sibling, Ne = de.return;
                        if (sp(de), de === J) {
                          je = null;
                          break;
                        }
                        if (ce !== null) {
                          ce.return = Ne, je = ce;
                          break;
                        }
                        je = Ne;
                      }
                  }
                }
                var Fe = v.alternate;
                if (Fe !== null) {
                  var Be = Fe.child;
                  if (Be !== null) {
                    Fe.child = null;
                    do {
                      var Hn = Be.sibling;
                      Be.sibling = null, Be = Hn;
                    } while (Be !== null);
                  }
                }
                je = v;
              }
            }
            if (v.subtreeFlags & 2064 && C !== null)
              C.return = v, je = C;
            else
              e:
                for (; je !== null; ) {
                  if (v = je, v.flags & 2048)
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, v, v.return);
                    }
                  var Y = v.sibling;
                  if (Y !== null) {
                    Y.return = v.return, je = Y;
                    break e;
                  }
                  je = v.return;
                }
          }
          var F = n.current;
          for (je = F; je !== null; ) {
            C = je;
            var G = C.child;
            if (C.subtreeFlags & 2064 && G !== null)
              G.return = C, je = G;
            else
              e:
                for (C = F; je !== null; ) {
                  if (x = je, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ws(9, x);
                      }
                    } catch (Qe) {
                      jn(x, x.return, Qe);
                    }
                  if (x === C) {
                    je = null;
                    break e;
                  }
                  var ge = x.sibling;
                  if (ge !== null) {
                    ge.return = x.return, je = ge;
                    break e;
                  }
                  je = x.return;
                }
          }
          if (Dt = f, ua(), ta && typeof ta.onPostCommitFiberRoot == "function")
            try {
              ta.onPostCommitFiberRoot(Su, n);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        $t = u, kr.transition = r;
      }
    }
    return !1;
  }
  function Nh(n, r, u) {
    r = xl(u, r), r = mh(n, r, 1), n = Fu(n, r, 1), r = Nr(), n !== null && (Hi(n, 1, r), Lr(n, r));
  }
  function jn(n, r, u) {
    if (n.tag === 3)
      Nh(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Nh(r, n, u);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ni === null || !Ni.has(l))) {
            n = xl(u, n), n = Vs(r, n, 1), r = Fu(r, n, 1), n = Nr(), r !== null && (Hi(r, 1, n), Lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Qy(n, r, u) {
    var l = n.pingCache;
    l !== null && l.delete(r), r = Nr(), n.pingedLanes |= n.suspendedLanes & u, Mn === n && (lr & u) === u && (Jn === 4 || Jn === 3 && (lr & 130023424) === lr && 500 > Ft() - dp ? jo(n, 0) : zl |= u), Lr(n, r);
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
        throw Error(h(314));
    }
    l !== null && l.delete(r), Rf(n, u);
  }
  var Mh;
  Mh = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || zn.current)
        Wn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Wn = !1, eu(n, r, u);
        Wn = !!(n.flags & 131072);
      }
    else
      Wn = !1, Sn && r.flags & 1048576 && Fd(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        Or(n, r), n = r.pendingProps;
        var f = Va(r, ft.current);
        Ce(r, u), f = Iu(null, r, l, n, f, u);
        var v = _o();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, wn(l) ? (v = !0, zc(r)) : v = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Wd(r), f.updater = $c, r.stateNode = f, f._reactInternals = r, Bc(r, l, n, u), r = gh(null, r, l, !0, v, u)) : (r.tag = 0, Sn && v && Uc(r), Kn(null, r, f, u), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (Or(n, r), n = r.pendingProps, f = l._init, l = f(l._payload), r.type = l, f = r.tag = Xy(l), n = xa(l, n), f) {
            case 0:
              r = Ol(null, r, l, n, u);
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
          throw Error(h(
            306,
            l,
            ""
          ));
        }
        return r;
      case 0:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), Ol(n, r, l, f, u);
      case 1:
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), tp(n, r, l, f, u);
      case 3:
        e: {
          if (Sh(r), n === null)
            throw Error(h(387));
          l = r.pendingProps, v = r.memoizedState, f = v.element, qn(n, r), Vu(r, l, null, u);
          var C = r.memoizedState;
          if (l = C.element, v.isDehydrated)
            if (v = { element: l, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
              f = xl(Error(h(423)), r), r = pf(n, r, l, u, f);
              break e;
            } else if (l !== f) {
              f = xl(Error(h(424)), r), r = pf(n, r, l, u, f);
              break e;
            } else
              for (sa = ci(r.stateNode.containerInfo.firstChild), _a = r, Sn = !0, $a = null, u = vh(r, null, l, u), r.child = u; u; )
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
        return nt(r), n === null && Pc(r), l = r.type, f = r.pendingProps, v = n !== null ? n.memoizedProps : null, C = f.children, Os(l, f) ? C = null : v !== null && Os(l, v) && (r.flags |= 32), Ct(n, r), Kn(n, r, C, u), r.child;
      case 6:
        return n === null && Pc(r), null;
      case 13:
        return rp(n, r, u);
      case 4:
        return qd(r, r.stateNode.containerInfo), l = r.pendingProps, n === null ? r.child = bl(r, null, l, u) : Kn(n, r, l, u), r.child;
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
          if (l = r.type._context, f = r.pendingProps, v = r.memoizedProps, C = f.value, Zt(xi, l._currentValue), l._currentValue = C, v !== null)
            if (Pa(v.value, C)) {
              if (v.children === f.children && !zn.current) {
                r = hr(n, r, u);
                break e;
              }
            } else
              for (v = r.child, v !== null && (v.return = r); v !== null; ) {
                var x = v.dependencies;
                if (x !== null) {
                  C = v.child;
                  for (var z = x.firstContext; z !== null; ) {
                    if (z.context === l) {
                      if (v.tag === 1) {
                        z = Zi(-1, u & -u), z.tag = 2;
                        var J = v.updateQueue;
                        if (J !== null) {
                          J = J.shared;
                          var de = J.pending;
                          de === null ? z.next = z : (z.next = de.next, de.next = z), J.pending = z;
                        }
                      }
                      v.lanes |= u, z = v.alternate, z !== null && (z.lanes |= u), ur(
                        v.return,
                        u,
                        r
                      ), x.lanes |= u;
                      break;
                    }
                    z = z.next;
                  }
                } else if (v.tag === 10)
                  C = v.type === r.type ? null : v.child;
                else if (v.tag === 18) {
                  if (C = v.return, C === null)
                    throw Error(h(341));
                  C.lanes |= u, x = C.alternate, x !== null && (x.lanes |= u), ur(C, u, r), C = v.sibling;
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
        return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : xa(l, f), Or(n, r), r.tag = 1, wn(l) ? (n = !0, zc(r)) : n = !1, Ce(r, u), ch(r, l, f), Bc(r, l, f, u), gh(null, r, l, !0, n, u);
      case 19:
        return up(n, r, u);
      case 22:
        return ko(n, r, u);
    }
    throw Error(h(156, r.tag));
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
      if (n = n.$$typeof, n === it)
        return 11;
      if (n === st)
        return 14;
    }
    return 2;
  }
  function Gu(n, r) {
    var u = n.alternate;
    return u === null ? (u = qa(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Tf(n, r, u, l, f, v) {
    var C = 2;
    if (l = n, typeof n == "function")
      Sp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case ve:
            return Fo(u.children, f, v, r);
          case Ue:
            C = 8, f |= 8;
            break;
          case Oe:
            return n = qa(12, u, r, f | 2), n.elementType = Oe, n.lanes = v, n;
          case De:
            return n = qa(13, u, r, f), n.elementType = De, n.lanes = v, n;
          case $e:
            return n = qa(19, u, r, f), n.elementType = $e, n.lanes = v, n;
          case we:
            return Ks(u, f, v, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ye:
                  C = 10;
                  break e;
                case We:
                  C = 9;
                  break e;
                case it:
                  C = 11;
                  break e;
                case st:
                  C = 14;
                  break e;
                case ut:
                  C = 16, l = null;
                  break e;
              }
            throw Error(h(130, n == null ? n : typeof n, ""));
        }
    return r = qa(C, u, r, f), r.elementType = n, r.type = l, r.lanes = v, r;
  }
  function Fo(n, r, u, l) {
    return n = qa(7, n, l, r), n.lanes = u, n;
  }
  function Ks(n, r, u, l) {
    return n = qa(22, n, l, r), n.elementType = we, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Xs(n, r, u) {
    return n = qa(6, n, null, r), n.lanes = u, n;
  }
  function Vo(n, r, u) {
    return r = qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zy(n, r, u, l, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = il(0), this.expirationTimes = il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = il(0), this.identifierPrefix = l, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function wf(n, r, u, l, f, v, C, x, z) {
    return n = new Zy(n, r, u, x, z), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = qa(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: l, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wd(v), n;
  }
  function Lh(n, r, u) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: fe, key: l == null ? null : "" + l, children: n, containerInfo: r, implementation: u };
  }
  function Ep(n) {
    if (!n)
      return _i;
    n = n._reactInternals;
    e: {
      if (gt(n) !== n || n.tag !== 1)
        throw Error(h(170));
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
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (wn(u))
        return Ns(n, u, r);
    }
    return r;
  }
  function Ah(n, r, u, l, f, v, C, x, z) {
    return n = wf(u, l, !0, n, f, v, C, x, z), n.context = Ep(null), u = n.current, l = Nr(), f = Qn(u), v = Zi(l, f), v.callback = r ?? null, Fu(u, v, f), n.current.lanes = f, Hi(n, f, l), Lr(n, l), n;
  }
  function Zs(n, r, u, l) {
    var f = r.current, v = Nr(), C = Qn(f);
    return u = Ep(u), r.context === null ? r.context = u : r.pendingContext = u, r = Zi(v, C), r.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (r.callback = l), n = Fu(f, r, C), n !== null && (Mr(n, f, C, v), Ic(n, f, C)), C;
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
  function zh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function Cp(n, r) {
    zh(n, r), (n = n.alternate) && zh(n, r);
  }
  function Uh() {
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
      throw Error(h(409));
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
      var r = ll();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Xt.length && r !== 0 && r < Xt[u].priority; u++)
        ;
      Xt.splice(u, 0, n), u === 0 && bc(n);
    }
  };
  function Rp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function jh() {
  }
  function Jy(n, r, u, l, f) {
    if (f) {
      if (typeof l == "function") {
        var v = l;
        l = function() {
          var J = _f(C);
          v.call(J);
        };
      }
      var C = Ah(r, l, n, 0, null, !1, !1, "", jh);
      return n._reactRootContainer = C, n[qi] = C.current, gl(n.nodeType === 8 ? n.parentNode : n), Qu(), C;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof l == "function") {
      var x = l;
      l = function() {
        var J = _f(z);
        x.call(J);
      };
    }
    var z = wf(n, 0, !1, null, null, !1, !1, "", jh);
    return n._reactRootContainer = z, n[qi] = z.current, gl(n.nodeType === 8 ? n.parentNode : n), Qu(function() {
      Zs(r, z, u, l);
    }), z;
  }
  function Df(n, r, u, l, f) {
    var v = u._reactRootContainer;
    if (v) {
      var C = v;
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
  so = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ii(r.pendingLanes);
          u !== 0 && (Ri(r, u | 1), Lr(r, Ft()), !(Dt & 6) && (Ul = Ft() + 500, ua()));
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
  }, ol = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var u = Nr();
        Mr(r, n, 134217728, u);
      }
      Cp(n, 134217728);
    }
  }, Vt = function(n) {
    if (n.tag === 13) {
      var r = Qn(n), u = Xi(n, r);
      if (u !== null) {
        var l = Nr();
        Mr(u, n, r, l);
      }
      Cp(n, r);
    }
  }, ll = function() {
    return $t;
  }, sl = function(n, r) {
    var u = $t;
    try {
      return $t = n, r();
    } finally {
      $t = u;
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
              var f = Xe(l);
              if (!f)
                throw Error(h(90));
              ke(l), Tn(l, f);
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
  }, lo = Fl, el = Qu;
  var eg = { usingClientEntryPoint: !1, Events: [ks, Sl, Xe, za, mu, Fl] }, Hl = { findFiberByHostInstance: Fa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tg = { bundleType: Hl.bundleType, version: Hl.version, rendererPackageName: Hl.rendererPackageName, rendererConfig: Hl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Z.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hl.findFiberByHostInstance || Uh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
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
      throw Error(h(200));
    return Lh(n, r, null, u);
  }, ti.createRoot = function(n, r) {
    if (!Rp(n))
      throw Error(h(299));
    var u = !1, l = "", f = bp;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = wf(n, 1, !1, null, null, u, !1, l, f), n[qi] = r.current, gl(n.nodeType === 8 ? n.parentNode : n), new xf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = Bn(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return Qu(n);
  }, ti.hydrate = function(n, r, u) {
    if (!Of(r))
      throw Error(h(200));
    return Df(null, n, r, !0, u);
  }, ti.hydrateRoot = function(n, r, u) {
    if (!Rp(n))
      throw Error(h(405));
    var l = u != null && u.hydratedSources || null, f = !1, v = "", C = bp;
    if (u != null && (u.unstable_strictMode === !0 && (f = !0), u.identifierPrefix !== void 0 && (v = u.identifierPrefix), u.onRecoverableError !== void 0 && (C = u.onRecoverableError)), r = Ah(r, null, n, 1, u ?? null, f, !1, v, C), n[qi] = r.current, gl(n), l)
      for (n = 0; n < l.length; n++)
        u = l[n], f = u._getVersion, f = f(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, f] : r.mutableSourceEagerHydrationData.push(
          u,
          f
        );
    return new au(r);
  }, ti.render = function(n, r, u) {
    if (!Of(r))
      throw Error(h(200));
    return Df(null, n, r, !1, u);
  }, ti.unmountComponentAtNode = function(n) {
    if (!Of(n))
      throw Error(h(40));
    return n._reactRootContainer ? (Qu(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = Fl, ti.unstable_renderSubtreeIntoContainer = function(n, r, u, l) {
    if (!Of(u))
      throw Error(h(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(h(38));
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
var g1;
function xk() {
  return g1 || (g1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Ot, p = J1(), h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function b(e) {
      S = e;
    }
    function T(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("warn", e, a);
      }
    }
    function g(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("error", e, a);
      }
    }
    function H(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var N = 0, _ = 1, j = 2, O = 3, L = 4, U = 5, A = 6, B = 7, I = 8, le = 9, ue = 10, ee = 11, Z = 12, $ = 13, fe = 14, ve = 15, Ue = 16, Oe = 17, Ye = 18, We = 19, it = 21, De = 22, $e = 23, st = 24, ut = 25, we = !0, me = !1, Ie = !1, M = !1, oe = !1, Re = !0, ot = !1, Ze = !1, Tt = !0, ht = !0, bt = !0, mt = /* @__PURE__ */ new Set(), Pt = {}, tr = {};
    function $n(e, t) {
      ke(e, t), ke(e + "Capture", t);
    }
    function ke(e, t) {
      Pt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Pt[e] = t;
      {
        var a = e.toLowerCase();
        tr[a] = e, e === "onDoubleClick" && (tr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        mt.add(t[i]);
    }
    var en = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _e = Object.prototype.hasOwnProperty;
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
    var Sa = 0, fr = 1, ea = 2, xn = 3, zr = 4, yi = 5, Ea = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", qe = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Rt = new RegExp("^[" + Se + "][" + qe + "]*$"), Wt = {}, Gt = {};
    function Fn(e) {
      return _e.call(Gt, e) ? !0 : _e.call(Wt, e) ? !1 : Rt.test(e) ? (Gt[e] = !0, !0) : (Wt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
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
    function tn(e, t, a, i) {
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
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function qt(e, t, a, i, o, s, d) {
      this.acceptsBooleans = t === ea || t === xn || t === zr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Kt = {}, ri = [
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
      Kt[e] = new qt(
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
      Kt[t] = new qt(
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
      Kt[e] = new qt(
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
      Kt[e] = new qt(
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
      Kt[e] = new qt(
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
      Kt[e] = new qt(
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
      Kt[e] = new qt(
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
      Kt[e] = new qt(
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
      Kt[e] = new qt(
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
      Kt[t] = new qt(
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
      Kt[t] = new qt(
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
      Kt[t] = new qt(
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
      Kt[e] = new qt(
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
    var lo = "xlinkHref";
    Kt[lo] = new qt(
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
      Kt[e] = new qt(
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
    var el = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Vi = !1;
    function yu(e) {
      !Vi && el.test(e) && (Vi = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
            return m === "" ? !0 : tn(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (tn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === xn)
            return a;
          d = e.getAttribute(s);
        }
        return tn(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
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
        if (tn(t, a, o, i) && (a = null), i || o === null) {
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
        var R = o.attributeName, w = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var V = o.type, P;
          V === xn || V === zr && a === !0 ? P = "" : (Xr(a, R), P = "" + a, o.sanitizeURL && yu(P.toString())), w ? e.setAttributeNS(w, R, P) : e.setAttribute(R, P);
        }
      }
    }
    var Si = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Ra = Symbol.for("react.fragment"), Ei = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), Le = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Bn = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), mn = Symbol.for("react.offscreen"), dr = Symbol.for("react.legacy_hidden"), Ci = Symbol.for("react.cache"), tl = Symbol.for("react.tracing_marker"), Ft = Symbol.iterator, dd = "@@iterator";
    function ai(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ft && e[Ft] || e[dd];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, bi = 0, gu, nl, Su, ta, ps, Pr, vs;
    function hs() {
    }
    hs.__reactDisabledLog = !0;
    function Ec() {
      {
        if (bi === 0) {
          gu = console.log, nl = console.info, Su = console.warn, ta = console.error, ps = console.group, Pr = console.groupCollapsed, vs = console.groupEnd;
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
    function rl() {
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
              value: nl
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
    var Eu = h.ReactCurrentDispatcher, ii;
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
    function al(e, t) {
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
`), R = m.length - 1, w = y.length - 1; R >= 1 && w >= 0 && m[R] !== y[w]; )
            w--;
          for (; R >= 1 && w >= 0; R--, w--)
            if (m[R] !== y[w]) {
              if (R !== 1 || w !== 1)
                do
                  if (R--, w--, w < 0 || m[R] !== y[w]) {
                    var V = `
` + m[R].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && bu.set(e, V), V;
                  }
                while (R >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        Cu = !1, Eu.current = s, rl(), Error.prepareStackTrace = o;
      }
      var P = e ? e.displayName || e.name : "", q = P ? Fr(P) : "";
      return typeof e == "function" && bu.set(e, q), q;
    }
    function il(e, t, a) {
      return al(e, !0);
    }
    function Hi(e, t, a) {
      return al(e, !1);
    }
    function pd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ri(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return al(e, pd(e));
      if (typeof e == "string")
        return Fr(e);
      switch (e) {
        case gt:
          return Fr("Suspense");
        case Mt:
          return Fr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Le:
            return Hi(e.render);
          case St:
            return Ri(e.type, t, a);
          case Je: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Ri(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $t(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case U:
          return Fr(e.type);
        case Ue:
          return Fr("Lazy");
        case $:
          return Fr("Suspense");
        case We:
          return Fr("SuspenseList");
        case N:
        case j:
        case ve:
          return Hi(e.type);
        case ee:
          return Hi(e.type.render);
        case _:
          return il(e.type);
        default:
          return "";
      }
    }
    function ul(e) {
      try {
        var t = "", a = e;
        do
          t += $t(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function so(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function ol(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
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
        case k:
          return "Profiler";
        case Ei:
          return "StrictMode";
        case gt:
          return "Suspense";
        case Mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            var t = e;
            return ol(t) + ".Consumer";
          case se:
            var a = e;
            return ol(a._context) + ".Provider";
          case Le:
            return so(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : Vt(e.type) || "Memo";
          case Je: {
            var o = e, s = o._payload, d = o._init;
            try {
              return Vt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ll(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function sl(e) {
      return e.displayName || "Context";
    }
    function pt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case st:
          return "Cache";
        case le:
          var i = a;
          return sl(i) + ".Consumer";
        case ue:
          var o = a;
          return sl(o._context) + ".Provider";
        case Ye:
          return "DehydratedFragment";
        case ee:
          return ll(a, a.render, "ForwardRef");
        case B:
          return "Fragment";
        case U:
          return a;
        case L:
          return "Portal";
        case O:
          return "Root";
        case A:
          return "Text";
        case Ue:
          return Vt(a);
        case I:
          return a === Ei ? "StrictMode" : "Mode";
        case De:
          return "Offscreen";
        case Z:
          return "Profiler";
        case it:
          return "Scope";
        case $:
          return "Suspense";
        case We:
          return "SuspenseList";
        case ut:
          return "TracingMarker";
        case _:
        case N:
        case Oe:
        case j:
        case fe:
        case ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var co = h.ReactDebugCurrentFrame, Dn = null, na = !1;
    function Vr() {
      {
        if (Dn === null)
          return null;
        var e = Dn._debugOwner;
        if (e !== null && typeof e < "u")
          return pt(e);
      }
      return null;
    }
    function Tu() {
      return Dn === null ? "" : ul(Dn);
    }
    function An() {
      co.getCurrentStack = null, Dn = null, na = !1;
    }
    function Xt(e) {
      co.getCurrentStack = e === null ? null : Tu, Dn = e, na = !1;
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
    function cl(e) {
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
    var Du = !1, fo = !1, fl = !1, ms = !1;
    function ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function E(e, t) {
      var a = e, i = t.checked, o = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function D(e, t) {
      Ii("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !fo && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), fo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Du && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), Du = !0);
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
        !a._wrapperState.controlled && i && !ms && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ms = !0), a._wrapperState.controlled && !i && !fl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fl = !0);
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
      t.hasOwnProperty("value") ? tt(a, t.type, o) : t.hasOwnProperty("defaultValue") && tt(a, t.type, Ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ye(e, t, a) {
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
            var m = em(d);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            cl(d), te(d, m);
          }
        }
      }
    }
    function tt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ou(e.ownerDocument) !== e) && (a == null ? e.defaultValue = rr(e._wrapperState.initialValue) : e.defaultValue !== rr(a) && (e.defaultValue = rr(a)));
    }
    var _t = !1, Ht = !1, cn = !1;
    function nn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (cn || (cn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !_t && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _t = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", rr(Ti(t.value)));
    }
    var yn = Array.isArray;
    function Nt(e) {
      return yn(e);
    }
    var $i;
    $i = !1;
    function dl() {
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
            var i = Nt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, dl()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, dl());
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
          var R = d.hasOwnProperty("$" + o[y].value);
          o[y].selected !== R && (o[y].selected = R), R && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var w = rr(Ti(a)), V = null, P = 0; P < o.length; P++) {
          if (o[P].value === w) {
            o[P].selected = !0, i && (o[P].defaultSelected = !0);
            return;
          }
          V === null && !o[P].disabled && (V = o[P]);
        }
        V !== null && (V.selected = !0);
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
      }, t.value !== void 0 && t.defaultValue !== void 0 && !$i && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), $i = !0);
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
    function Dv(e, t) {
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
            if (Nt(o)) {
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
    function kv(e, t) {
      var a = e, i = Ti(t.value), o = Ti(t.defaultValue);
      if (i != null) {
        var s = rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = rr(o));
    }
    function Nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function gd(e, t) {
      kv(e, t);
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
    }, wc, Mv = wy(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        wc = wc || document.createElement("div"), wc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = wc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), aa = 1, Yi = 3, Yn = 8, li = 9, po = 11, _c = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Lv = {
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
    }, pl = {
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
    function Av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var zv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pl).forEach(function(e) {
      zv.forEach(function(t) {
        pl[Av(t, e)] = pl[e];
      });
    });
    function xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(pl.hasOwnProperty(e) && pl[e]) ? t + "px" : (Tr(t, e), ("" + t).trim());
    }
    var vl = /([A-Z])/g, _y = /^ms-/;
    function xy(e) {
      return e.replace(vl, "-$1").toLowerCase().replace(_y, "-ms-");
    }
    var Uv = function() {
    };
    {
      var jv = /^(?:webkit|moz|o)[A-Z]/, Pv = /^-ms-/, Es = /-(.)/g, hl = /;\s*$/, ml = {}, yl = {}, Fv = !1, Cd = !1, bd = function(e) {
        return e.replace(Es, function(t, a) {
          return a.toUpperCase();
        });
      }, Rd = function(e) {
        ml.hasOwnProperty(e) && ml[e] || (ml[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          bd(e.replace(Pv, "ms-"))
        ));
      }, Vv = function(e) {
        ml.hasOwnProperty(e) && ml[e] || (ml[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Hv = function(e, t) {
        yl.hasOwnProperty(t) && yl[t] || (yl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(hl, "")));
      }, Iv = function(e, t) {
        Fv || (Fv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Oy = function(e, t) {
        Cd || (Cd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Uv = function(e, t) {
        e.indexOf("-") > -1 ? Rd(e) : jv.test(e) ? Vv(e) : hl.test(t) && Hv(e, t), typeof t == "number" && (isNaN(t) ? Iv(e, t) : isFinite(t) || Oy(e, t));
      };
    }
    var Dy = Uv;
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
        for (var i = Lv[a] || [a], o = 0; o < i.length; o++)
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
    var Bv = {
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
    }, Yv = wt({
      menuitem: !0
    }, Bv), Wv = "__html";
    function Oc(e, t) {
      if (t) {
        if (Yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Wv in t.dangerouslySetInnerHTML))
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
    }, Qv = {
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
    }, si = {}, Td = new RegExp("^(aria)-[" + qe + "]*$"), bs = new RegExp("^(aria)[A-Z][" + qe + "]*$");
    function wd(e, t) {
      {
        if (_e.call(si, t) && si[t])
          return !0;
        if (bs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Qv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), si[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), si[t] = !0, !0;
        }
        if (Td.test(t)) {
          var o = t.toLowerCase(), s = Qv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return si[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), si[t] = !0, !0;
        }
      }
      return !0;
    }
    function Gv(e, t) {
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
      Wi(e, t) || Gv(e, t);
    }
    var vo = !1;
    function _d(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vo && (vo = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var xd = function() {
    };
    {
      var ar = {}, Od = /^on./, qv = /^on[^A-Z]/, Kv = new RegExp("^(aria)-[" + qe + "]*$"), Xv = new RegExp("^(aria)[A-Z][" + qe + "]*$");
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
          return qv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ar[t] = !0, !0;
        if (Kv.test(t) || Xv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ar[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ar[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ar[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ar[t] = !0, !0;
        var y = Ur(t), R = y !== null && y.type === Sa;
        if (Dc.hasOwnProperty(o)) {
          var w = Dc[o];
          if (w !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, w), ar[t] = !0, !0;
        } else if (!R && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), ar[t] = !0, !0;
        return typeof a == "boolean" && _r(t, a, y, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ar[t] = !0, !0) : R ? !0 : _r(t, a, y, !1) ? (ar[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === xn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ar[t] = !0), !0);
      };
    }
    var Zv = function(e, t, a) {
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
    function Jv(e, t, a) {
      Wi(e, t) || Zv(e, t, a);
    }
    var Qi = 1, Rs = 2, ho = 4, My = Qi | Rs | ho, Ts = null;
    function ws(e) {
      Ts !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ts = e;
    }
    function Ly() {
      Ts === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ts = null;
    }
    function eh(e) {
      return e === Ts;
    }
    function Nc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var dn = null, ku = null, Gi = null;
    function gl(e) {
      var t = Bl(e);
      if (t) {
        if (typeof dn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = em(a);
          dn(t.stateNode, t.type, i);
        }
      }
    }
    function th(e) {
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
        if (ku = null, Gi = null, gl(e), t)
          for (var a = 0; a < t.length; a++)
            gl(t[a]);
      }
    }
    var mo = function(e, t) {
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
        return mo(e, t, a);
      } finally {
        kd = !1, Ay();
      }
    }
    function Lc(e, t, a) {
      mo = e, Dd = a;
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
    function yo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = em(a);
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
    if (en)
      try {
        var go = {};
        Object.defineProperty(go, "passive", {
          get: function() {
            Os = !0;
          }
        }), window.addEventListener("test", go, go), window.removeEventListener("test", go, go);
      } catch {
        Os = !1;
      }
    function nh(e, t, a, i, o, s, d, m, y) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (w) {
        this.onError(w);
      }
    }
    var Ld = nh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ad = document.createElement("react");
      Ld = function(t, a, i, o, s, d, m, y, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), V = !1, P = !0, q = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ne() {
          Ad.removeEventListener(re, et, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var Ae = Array.prototype.slice.call(arguments, 3);
        function et() {
          V = !0, ne(), a.apply(i, Ae), P = !1;
        }
        var Ge, zt = !1, kt = !1;
        function W(Q) {
          if (Ge = Q.error, zt = !0, Ge === null && Q.colno === 0 && Q.lineno === 0 && (kt = !0), Q.defaultPrevented && Ge != null && typeof Ge == "object")
            try {
              Ge._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), Ad.addEventListener(re, et, !1), w.initEvent(re, !1, !1), Ad.dispatchEvent(w), X && Object.defineProperty(window, "event", X), V && P && (zt ? kt && (Ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ge)), window.removeEventListener("error", W), !V)
          return ne(), nh.apply(this, arguments);
      };
    }
    var zy = Ld, Nu = !1, ci = null, Ds = !1, Mu = null, wi = {
      onError: function(e) {
        Nu = !0, ci = e;
      }
    };
    function So(e, t, a, i, o, s, d, m, y) {
      Nu = !1, ci = null, zy.apply(wi, arguments);
    }
    function qi(e, t, a, i, o, s, d, m, y) {
      if (So.apply(this, arguments), Nu) {
        var R = Ud();
        Ds || (Ds = !0, Mu = R);
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
    function Sl(e, t) {
      e._reactInternals = t;
    }
    var Xe = (
      /*                      */
      0
    ), Lu = (
      /*                */
      1
    ), gn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), Qt = (
      /*                */
      16
    ), Zt = (
      /*                 */
      32
    ), _i = (
      /*                     */
      64
    ), ft = (
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
    ), zc = wn | Et | _i | ia | Va | Ns, rh = (
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
    ), Eo = (
      /*              */
      33554432
    ), El = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | Va | 0
    ), la = gn | Et | Qt | Zt | ia | Ha | Au, xr = Et | _i | ia | Au, Ia = wn | Qt, pr = ua | zu | Pd, Ki = h.ReactCurrentOwner;
    function wa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (gn | Ha)) !== Xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? a : null;
    }
    function Fd(e) {
      if (e.tag === $) {
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
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function Vd(e) {
      return wa(e) === e;
    }
    function _a(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === _) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", pt(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
          for (var R = !1, w = s.child; w; ) {
            if (w === i) {
              R = !0, i = s, o = d;
              break;
            }
            if (w === o) {
              R = !0, o = s, i = d;
              break;
            }
            w = w.sibling;
          }
          if (!R) {
            for (w = d.child; w; ) {
              if (w === i) {
                R = !0, i = d, o = s;
                break;
              }
              if (w === o) {
                R = !0, o = d, i = s;
                break;
              }
              w = w.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function $a(e) {
      var t = Sn(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === U || e.tag === A)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ah(e) {
      var t = Sn(e);
      return t !== null ? jc(t) : null;
    }
    function jc(e) {
      if (e.tag === U || e.tag === A)
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
    var Pc = p.unstable_scheduleCallback, ih = p.unstable_cancelCallback, Fc = p.unstable_shouldYield, uh = p.unstable_requestPaint, kn = p.unstable_now, Id = p.unstable_getCurrentPriorityLevel, Vc = p.unstable_ImmediatePriority, xa = p.unstable_UserBlockingPriority, xi = p.unstable_NormalPriority, Hc = p.unstable_LowPriority, Uu = p.unstable_IdlePriority, $d = p.unstable_yieldValue, Bd = p.unstable_setDisableYieldValue, ju = null, ur = null, Ce = null, Vn = !1, vr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
    function oh(e, t) {
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
          var a = (e.current.flags & ft) === ft;
          if (ht) {
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
      if (typeof $d == "function" && (Bd(e), b(e)), ur && typeof ur.setStrictMode == "function")
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
    function Co() {
      Ce !== null && typeof Ce.markComponentRenderStopped == "function" && Ce.markComponentRenderStopped();
    }
    function lh(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStarted == "function" && Ce.markComponentPassiveEffectMountStarted(e);
    }
    function Gd() {
      Ce !== null && typeof Ce.markComponentPassiveEffectMountStopped == "function" && Ce.markComponentPassiveEffectMountStopped();
    }
    function $c(e) {
      Ce !== null && typeof Ce.markComponentPassiveEffectUnmountStarted == "function" && Ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function sh() {
      Ce !== null && typeof Ce.markComponentPassiveEffectUnmountStopped == "function" && Ce.markComponentPassiveEffectUnmountStopped();
    }
    function ch(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectMountStarted == "function" && Ce.markComponentLayoutEffectMountStarted(e);
    }
    function fh() {
      Ce !== null && typeof Ce.markComponentLayoutEffectMountStopped == "function" && Ce.markComponentLayoutEffectMountStopped();
    }
    function Bc(e) {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStarted == "function" && Ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function Cl() {
      Ce !== null && typeof Ce.markComponentLayoutEffectUnmountStopped == "function" && Ce.markComponentLayoutEffectUnmountStopped();
    }
    function Yc(e, t, a) {
      Ce !== null && typeof Ce.markComponentErrored == "function" && Ce.markComponentErrored(e, t, a);
    }
    function dh(e, t, a) {
      Ce !== null && typeof Ce.markComponentSuspended == "function" && Ce.markComponentSuspended(e, t, a);
    }
    function ph(e) {
      Ce !== null && typeof Ce.markLayoutEffectsStarted == "function" && Ce.markLayoutEffectsStarted(e);
    }
    function bl() {
      Ce !== null && typeof Ce.markLayoutEffectsStopped == "function" && Ce.markLayoutEffectsStopped();
    }
    function vh(e) {
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
    function Rl() {
      Ce !== null && typeof Ce.markRenderStopped == "function" && Ce.markRenderStopped();
    }
    function bo(e) {
      Ce !== null && typeof Ce.markRenderScheduled == "function" && Ce.markRenderScheduled(e);
    }
    function qd(e, t) {
      Ce !== null && typeof Ce.markForceUpdateScheduled == "function" && Ce.markForceUpdateScheduled(e, t);
    }
    function Hu(e, t) {
      Ce !== null && typeof Ce.markStateUpdateScheduled == "function" && Ce.markStateUpdateScheduled(e, t);
    }
    var nt = (
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
    ), Ba = (
      /*              */
      16
    ), Wc = Math.clz32 ? Math.clz32 : Ro, Qc = Math.log, Kd = Math.LN2;
    function Ro(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Qc(t) / Kd | 0) | 0;
    }
    var En = 31, ae = (
      /*                        */
      0
    ), Lt = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Oi = (
      /*    */
      2
    ), Oa = (
      /*             */
      4
    ), To = (
      /*            */
      8
    ), Cn = (
      /*                     */
      16
    ), wo = (
      /*                */
      32
    ), Iu = (
      /*                       */
      4194240
    ), _o = (
      /*                        */
      64
    ), Ya = (
      /*                        */
      128
    ), ca = (
      /*                        */
      256
    ), xo = (
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
    ), Oo = (
      /*                       */
      1048576
    ), nf = (
      /*                       */
      2097152
    ), Do = (
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
    ), Xd = Ji, Tl = (
      /*          */
      134217728
    ), of = (
      /*                          */
      268435455
    ), wl = (
      /*               */
      268435456
    ), $u = (
      /*                        */
      536870912
    ), fa = (
      /*                   */
      1073741824
    );
    function jy(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Oi)
          return "InputContinuousHydration";
        if (e & Oa)
          return "InputContinuous";
        if (e & To)
          return "DefaultHydration";
        if (e & Cn)
          return "Default";
        if (e & wo)
          return "TransitionHydration";
        if (e & Iu)
          return "Transition";
        if (e & Do)
          return "Retry";
        if (e & Tl)
          return "SelectiveHydration";
        if (e & wl)
          return "IdleHydration";
        if (e & $u)
          return "Idle";
        if (e & fa)
          return "Offscreen";
      }
    }
    var pn = -1, lf = _o, sf = Ji;
    function _l(e) {
      switch (Wn(e)) {
        case lt:
          return lt;
        case Oi:
          return Oi;
        case Oa:
          return Oa;
        case To:
          return To;
        case Cn:
          return Cn;
        case wo:
          return wo;
        case _o:
        case Ya:
        case ca:
        case xo:
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
        case Oo:
        case nf:
          return e & Iu;
        case Ji:
        case rf:
        case js:
        case af:
        case uf:
          return e & Do;
        case Tl:
          return Tl;
        case wl:
          return wl;
        case $u:
          return $u;
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
          i = _l(m);
        else {
          var y = d & s;
          y !== ae && (i = _l(y));
        }
      } else {
        var R = a & ~o;
        R !== ae ? i = _l(R) : s !== ae && (i = _l(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ae) {
        var w = Wn(i), V = Wn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= V || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === Cn && (V & Iu) !== ae
        )
          return t;
      }
      (i & Oa) !== ae && (i |= a & Cn);
      var P = e.entangledLanes;
      if (P !== ae)
        for (var q = e.entanglements, X = i & P; X > 0; ) {
          var ne = Bu(X), Ae = 1 << ne;
          i |= q[ne], X &= ~Ae;
        }
      return i;
    }
    function hh(e, t) {
      for (var a = e.eventTimes, i = pn; t > 0; ) {
        var o = Bu(t), s = 1 << o, d = a[o];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function cf(e, t) {
      switch (e) {
        case lt:
        case Oi:
        case Oa:
          return t + 250;
        case To:
        case Cn:
        case wo:
        case _o:
        case Ya:
        case ca:
        case xo:
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
        case Oo:
        case nf:
          return t + 5e3;
        case Ji:
        case rf:
        case js:
        case af:
        case uf:
          return pn;
        case Tl:
        case wl:
        case $u:
        case fa:
          return pn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), pn;
      }
    }
    function Py(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Bu(d), y = 1 << m, R = s[m];
        R === pn ? ((y & i) === ae || (y & o) !== ae) && (s[m] = cf(y, t)) : R <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function Fy(e) {
      return _l(e.pendingLanes);
    }
    function Zd(e) {
      var t = e.pendingLanes & ~fa;
      return t !== ae ? t : t & fa ? fa : ae;
    }
    function xl(e) {
      return (e & lt) !== ae;
    }
    function Fs(e) {
      return (e & of) !== ae;
    }
    function ff(e) {
      return (e & Do) === e;
    }
    function Vy(e) {
      var t = lt | Oa | Cn;
      return (e & t) === ae;
    }
    function mh(e) {
      return (e & Iu) === e;
    }
    function Vs(e, t) {
      var a = Oi | Oa | To | Cn;
      return (t & a) !== ae;
    }
    function yh(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function Jd(e) {
      return (e & Iu) !== ae;
    }
    function ep() {
      var e = lf;
      return lf <<= 1, (lf & Iu) === ae && (lf = _o), e;
    }
    function Hy() {
      var e = sf;
      return sf <<= 1, (sf & Do) === ae && (sf = Ji), e;
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
    function ko(e, t) {
      return (e & t) === t;
    }
    function Ct(e, t) {
      return e | t;
    }
    function Ol(e, t) {
      return e & ~t;
    }
    function tp(e, t) {
      return e & t;
    }
    function gh(e) {
      return e;
    }
    function Sh(e, t) {
      return e !== Lt && e < t ? e : t;
    }
    function pf(e) {
      for (var t = [], a = 0; a < En; a++)
        t.push(e);
      return t;
    }
    function No(e, t, a) {
      e.pendingLanes |= t, t !== $u && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, o = df(t);
      i[o] = a;
    }
    function np(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Bu(i), s = 1 << o;
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
        var m = Bu(d), y = 1 << m;
        i[m] = ae, o[m] = pn, s[m] = pn, d &= ~y;
      }
    }
    function Dl(e, t) {
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
        case Cn:
          i = To;
          break;
        case _o:
        case Ya:
        case ca:
        case xo:
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
        case Oo:
        case nf:
        case Ji:
        case rf:
        case js:
        case af:
        case uf:
          i = wo;
          break;
        case $u:
          i = wl;
          break;
        default:
          i = Lt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Lt ? Lt : i;
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
    var Or = lt, hr = Oa, eu = Cn, Hs = $u, Mo = Lt;
    function Wa() {
      return Mo;
    }
    function Xn(e) {
      Mo = e;
    }
    function Is(e, t) {
      var a = Mo;
      try {
        return Mo = e, t();
      } finally {
        Mo = a;
      }
    }
    function Dr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function $y(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function op(e, t) {
      return e !== 0 && e < t;
    }
    function $s(e) {
      var t = Wn(e);
      return op(Or, t) ? op(hr, t) ? Fs(t) ? eu : Hs : hr : Or;
    }
    function Zn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Eh;
    function je(e) {
      Eh = e;
    }
    function kl(e) {
      Eh(e);
    }
    var Bs;
    function Ch(e) {
      Bs = e;
    }
    var bh;
    function Ys(e) {
      bh = e;
    }
    var Ws;
    function lp(e) {
      Ws = e;
    }
    var sp;
    function Rh(e) {
      sp = e;
    }
    var hf = !1, Nl = [], Di = null, _n = null, or = null, Qa = /* @__PURE__ */ new Map(), Ml = /* @__PURE__ */ new Map(), tu = [], di = [
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
    function Th(e) {
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
    function wh(e, t) {
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
          Ml.delete(i);
          break;
        }
      }
    }
    function Ll(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = ki(t, a, i, o, s);
        if (t !== null) {
          var m = Bl(t);
          m !== null && Bs(m);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return o !== null && y.indexOf(o) === -1 && y.push(o), e;
    }
    function _h(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Di = Ll(Di, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = o;
          return _n = Ll(_n, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var m = o;
          return or = Ll(or, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var y = o, R = y.pointerId;
          return Qa.set(R, Ll(Qa.get(R) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var w = o, V = w.pointerId;
          return Ml.set(V, Ll(Ml.get(V) || null, e, t, a, i, w)), !0;
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
          if (i === $) {
            var o = Fd(a);
            if (o !== null) {
              e.blockedOn = o, sp(e.priority, function() {
                bh(a);
              });
              return;
            }
          } else if (i === O) {
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
    function xh(e) {
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
        var a = t[0], i = Lo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          ws(s), o.target.dispatchEvent(s), Ly();
        } else {
          var d = Bl(i);
          return d !== null && Bs(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qs(e, t, a) {
      mf(e) && a.delete(t);
    }
    function fp() {
      hf = !1, Di !== null && mf(Di) && (Di = null), _n !== null && mf(_n) && (_n = null), or !== null && mf(or) && (or = null), Qa.forEach(Qs), Ml.forEach(Qs);
    }
    function kr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, hf || (hf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, fp)));
    }
    function Dt(e) {
      if (Nl.length > 0) {
        kr(Nl[0], e);
        for (var t = 1; t < Nl.length; t++) {
          var a = Nl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && kr(Di, e), _n !== null && kr(_n, e), or !== null && kr(or, e);
      var i = function(m) {
        return kr(m, e);
      };
      Qa.forEach(i), Ml.forEach(i);
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
    var Mn = h.ReactCurrentBatchConfig, Un = !0;
    function lr(e) {
      Un = !!e;
    }
    function Da() {
      return Un;
    }
    function Al(e, t, a) {
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
      var o = Lo(e, t, a, i);
      if (o === null) {
        sg(e, t, i, zl, a), wh(e, i);
        return;
      }
      if (_h(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (wh(e, i), t & ho && Th(e)) {
        for (; o !== null; ) {
          var s = Bl(o);
          s !== null && kl(s);
          var d = Lo(e, t, a, i);
          if (d === null && sg(e, t, i, zl, a), d === o)
            break;
          o = d;
        }
        o !== null && i.stopPropagation();
        return;
      }
      sg(e, t, i, null, a);
    }
    var zl = null;
    function Lo(e, t, a, i) {
      zl = null;
      var o = Nc(i), s = tc(o);
      if (s !== null) {
        var d = wa(s);
        if (d === null)
          s = null;
        else {
          var m = d.tag;
          if (m === $) {
            var y = Fd(d);
            if (y !== null)
              return y;
            s = null;
          } else if (m === O) {
            var R = d.stateNode;
            if (Zn(R))
              return Uc(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return zl = s, null;
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
    function Ul(e, t, a) {
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
    var Ao = null, Ni = null, Yu = null;
    function Wu(e) {
      return Ao = e, Ni = Ef(), !0;
    }
    function Sf() {
      Ao = null, Ni = null, Yu = null;
    }
    function jl() {
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
      return "value" in Ao ? Ao.value : Ao.textContent;
    }
    function zo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Uo() {
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
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = Uo : this.isDefaultPrevented = Nr, this.isPropagationStopped = Nr, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Uo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Uo);
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
        isPersistent: Uo
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
    }, Lr = Qn(Mr), Pl = wt({}, Mr, {
      view: 0,
      detail: 0
    }), pp = Qn(Pl), qs, vp, Ga;
    function Oh(e) {
      e !== Ga && (Ga && e.type === "mousemove" ? (qs = e.screenX - Ga.screenX, vp = e.screenY - Ga.screenY) : (qs = 0, vp = 0), Ga = e);
    }
    var Fl = wt({}, Pl, {
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
        return "movementX" in e ? e.movementX : (Oh(e), qs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : vp;
      }
    }), Qu = Qn(Fl), hp = wt({}, Fl, {
      dataTransfer: 0
    }), jo = Qn(hp), Dh = wt({}, Pl, {
      relatedTarget: 0
    }), Cf = Qn(Dh), mp = wt({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = Qn(mp), By = wt({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yy = Qn(By), kh = wt({}, Mr, {
      data: 0
    }), yp = Qn(kh), Po = yp, Wy = {
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
    }, Vl = {
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
    function Nh(e) {
      if (e.key) {
        var t = Wy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = zo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vl[e.keyCode] || "Unidentified" : "";
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
    var Gy = wt({}, Pl, {
      key: Nh,
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
        return e.type === "keypress" ? zo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? zo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qy = Qn(Gy), Mh = wt({}, Fl, {
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
    }), gp = Qn(Mh), Ky = wt({}, Pl, {
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
    }), Xy = Qn(Sp), Gu = wt({}, Fl, {
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
    }), Tf = Qn(Gu), Fo = [9, 13, 27, 32], Ks = 229, Xs = en && "CompositionEvent" in window, Vo = null;
    en && "documentMode" in document && (Vo = document.documentMode);
    var Zy = en && "TextEvent" in window && !Vo, wf = en && (!Xs || Vo && Vo > 8 && Vo <= 11), Lh = 32, Ep = String.fromCharCode(Lh);
    function Ah() {
      $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $n("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zs = !1;
    function _f(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function zh(e) {
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
    function Uh(e, t) {
      switch (e) {
        case "keyup":
          return Fo.indexOf(t.keyCode) !== -1;
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
      if (Xs ? s = zh(t) : au ? Uh(t, i) && (s = "onCompositionEnd") : Cp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      wf && !xf(i) && (!au && s === "onCompositionStart" ? au = Wu(o) : s === "onCompositionEnd" && au && (d = jl()));
      var m = Hh(a, s);
      if (m.length > 0) {
        var y = new yp(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: m
        }), d)
          y.data = d;
        else {
          var R = bp(i);
          R !== null && (y.data = R);
        }
      }
    }
    function Of(e, t) {
      switch (e) {
        case "compositionend":
          return bp(t);
        case "keypress":
          var a = t.which;
          return a !== Lh ? null : (Zs = !0, Ep);
        case "textInput":
          var i = t.data;
          return i === Ep && Zs ? null : i;
        default:
          return null;
      }
    }
    function jh(e, t) {
      if (au) {
        if (e === "compositionend" || !Xs && Uh(e, t)) {
          var a = jl();
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
      if (Zy ? s = Of(t, i) : s = jh(t, i), !s)
        return null;
      var d = Hh(a, "onBeforeInput");
      if (d.length > 0) {
        var m = new Po("onBeforeInput", "beforeinput", null, i, o);
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
    function Hl(e) {
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
      if (!en)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function kf() {
      $n("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Mc(i);
      var o = Hh(t, "onChange");
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
      n(t, u, e, Nc(e)), Nd(v, t);
    }
    function v(e) {
      I0(e, 0);
    }
    function C(e) {
      var t = Uf(e);
      if (cl(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    en && (z = tg("input") && (!document.documentMode || document.documentMode > 9));
    function J(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", pe);
    }
    function de() {
      r && (r.detachEvent("onpropertychange", pe), r = null, u = null);
    }
    function pe(e) {
      e.propertyName === "value" && C(u) && f(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (de(), J(t, a)) : e === "focusout" && de();
    }
    function Ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(u);
    }
    function Fe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Be(e, t) {
      if (e === "click")
        return C(t);
    }
    function Hn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function Y(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || tt(e, "number", e.value);
    }
    function F(e, t, a, i, o, s, d) {
      var m = a ? Uf(a) : window, y, R;
      if (l(m) ? y = x : Hl(m) ? z ? y = Hn : (y = Ne, R = ce) : Fe(m) && (y = Be), y) {
        var w = y(t, a);
        if (w) {
          n(e, w, i, o);
          return;
        }
      }
      R && R(t, m, a), t === "focusout" && Y(m);
    }
    function G() {
      ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ge(e, t, a, i, o, s, d) {
      var m = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (m && !eh(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (tc(R) || jp(R)))
          return;
      }
      if (!(!y && !m)) {
        var w;
        if (o.window === o)
          w = o;
        else {
          var V = o.ownerDocument;
          V ? w = V.defaultView || V.parentWindow : w = window;
        }
        var P, q;
        if (y) {
          var X = i.relatedTarget || i.toElement;
          if (P = a, q = X ? tc(X) : null, q !== null) {
            var ne = wa(q);
            (q !== ne || q.tag !== U && q.tag !== A) && (q = null);
          }
        } else
          P = null, q = a;
        if (P !== q) {
          var Ae = Qu, et = "onMouseLeave", Ge = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ae = gp, et = "onPointerLeave", Ge = "onPointerEnter", zt = "pointer");
          var kt = P == null ? w : Uf(P), W = q == null ? w : Uf(q), re = new Ae(et, zt + "leave", P, i, o);
          re.target = kt, re.relatedTarget = W;
          var Q = null, he = tc(o);
          if (he === a) {
            var ze = new Ae(Ge, zt + "enter", q, i, o);
            ze.target = W, ze.relatedTarget = kt, Q = ze;
          }
          ZT(e, re, Q, P, q);
        }
      }
    }
    function Qe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ve = typeof Object.is == "function" ? Object.is : Qe;
    function Ke(e, t) {
      if (Ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!_e.call(t, s) || !Ve(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function dt(e) {
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
    function It(e, t) {
      for (var a = dt(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Yi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = dt(sr(a));
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
      var s = 0, d = -1, m = -1, y = 0, R = 0, w = e, V = null;
      e:
        for (; ; ) {
          for (var P = null; w === t && (a === 0 || w.nodeType === Yi) && (d = s + a), w === i && (o === 0 || w.nodeType === Yi) && (m = s + o), w.nodeType === Yi && (s += w.nodeValue.length), (P = w.firstChild) !== null; )
            V = w, w = P;
          for (; ; ) {
            if (w === e)
              break e;
            if (V === t && ++y === a && (d = s), V === i && ++R === o && (m = s), (P = w.nextSibling) !== null)
              break;
            w = V, V = w.parentNode;
          }
          w = P;
        }
      return d === -1 || m === -1 ? null : {
        start: d,
        end: m
      };
    }
    function LT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), m = t.end === void 0 ? d : Math.min(t.end, s);
        if (!o.extend && d > m) {
          var y = m;
          m = d, d = y;
        }
        var R = It(e, d), w = It(e, m);
        if (R && w) {
          if (o.rangeCount === 1 && o.anchorNode === R.node && o.anchorOffset === R.offset && o.focusNode === w.node && o.focusOffset === w.offset)
            return;
          var V = a.createRange();
          V.setStart(R.node, R.offset), o.removeAllRanges(), d > m ? (o.addRange(V), o.extend(w.node, w.offset)) : (V.setEnd(w.node, w.offset), o.addRange(V));
        }
      }
    }
    function k0(e) {
      return e && e.nodeType === Yi;
    }
    function N0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : k0(e) ? !1 : k0(t) ? N0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function AT(e) {
      return e && e.ownerDocument && N0(e.ownerDocument.documentElement, e);
    }
    function zT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function M0() {
      for (var e = window, t = Ou(); t instanceof e.HTMLIFrameElement; ) {
        if (zT(t))
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
    function UT() {
      var e = M0();
      return {
        focusedElem: e,
        selectionRange: rg(e) ? PT(e) : null
      };
    }
    function jT(e) {
      var t = M0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && AT(a)) {
        i !== null && rg(a) && FT(a, i);
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
    function PT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = qu(e), t || {
        start: 0,
        end: 0
      };
    }
    function FT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : LT(e, t);
    }
    var VT = en && "documentMode" in document && document.documentMode <= 11;
    function HT() {
      $n("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nf = null, ag = null, Tp = null, ig = !1;
    function IT(e) {
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
    function $T(e) {
      return e.window === e ? e.document : e.nodeType === li ? e : e.ownerDocument;
    }
    function L0(e, t, a) {
      var i = $T(a);
      if (!(ig || Nf == null || Nf !== Ou(i))) {
        var o = IT(Nf);
        if (!Tp || !Ke(Tp, o)) {
          Tp = o;
          var s = Hh(ag, "onSelect");
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
    function BT(e, t, a, i, o, s, d) {
      var m = a ? Uf(a) : window;
      switch (t) {
        case "focusin":
          (Hl(m) || m.contentEditable === "true") && (Nf = m, ag = a, Tp = null);
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
          ig = !1, L0(e, i, o);
          break;
        case "selectionchange":
          if (VT)
            break;
        case "keydown":
        case "keyup":
          L0(e, i, o);
      }
    }
    function Ph(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Mf = {
      animationend: Ph("Animation", "AnimationEnd"),
      animationiteration: Ph("Animation", "AnimationIteration"),
      animationstart: Ph("Animation", "AnimationStart"),
      transitionend: Ph("Transition", "TransitionEnd")
    }, ug = {}, A0 = {};
    en && (A0 = document.createElement("div").style, "AnimationEvent" in window || (delete Mf.animationend.animation, delete Mf.animationiteration.animation, delete Mf.animationstart.animation), "TransitionEvent" in window || delete Mf.transitionend.transition);
    function Fh(e) {
      if (ug[e])
        return ug[e];
      if (!Mf[e])
        return e;
      var t = Mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in A0)
          return ug[e] = t[a];
      return e;
    }
    var z0 = Fh("animationend"), U0 = Fh("animationiteration"), j0 = Fh("animationstart"), P0 = Fh("transitionend"), F0 = /* @__PURE__ */ new Map(), V0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Il(e, t) {
      F0.set(e, t), $n(t, [e]);
    }
    function YT() {
      for (var e = 0; e < V0.length; e++) {
        var t = V0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Il(a, "on" + i);
      }
      Il(z0, "onAnimationEnd"), Il(U0, "onAnimationIteration"), Il(j0, "onAnimationStart"), Il("dblclick", "onDoubleClick"), Il("focusin", "onFocus"), Il("focusout", "onBlur"), Il(P0, "onTransitionEnd");
    }
    function WT(e, t, a, i, o, s, d) {
      var m = F0.get(t);
      if (m !== void 0) {
        var y = Lr, R = t;
        switch (t) {
          case "keypress":
            if (zo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = qy;
            break;
          case "focusin":
            R = "focus", y = Cf;
            break;
          case "focusout":
            R = "blur", y = Cf;
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
            y = jo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = qa;
            break;
          case z0:
          case U0:
          case j0:
            y = bf;
            break;
          case P0:
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
        var w = (s & ho) !== 0;
        {
          var V = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", P = KT(a, m, i.type, w, V);
          if (P.length > 0) {
            var q = new y(m, R, null, i, o);
            e.push({
              event: q,
              listeners: P
            });
          }
        }
      }
    }
    YT(), G(), kf(), HT(), Ah();
    function QT(e, t, a, i, o, s, d) {
      WT(e, t, a, i, o, s);
      var m = (s & My) === 0;
      m && (ge(e, t, a, i, o), F(e, t, a, i, o), BT(e, t, a, i, o), Df(e, t, a, i, o));
    }
    var wp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], og = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wp));
    function H0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, qi(i, t, void 0, e), e.currentTarget = null;
    }
    function GT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], d = s.instance, m = s.currentTarget, y = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          H0(e, y, m), i = d;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var w = t[R], V = w.instance, P = w.currentTarget, q = w.listener;
          if (V !== i && e.isPropagationStopped())
            return;
          H0(e, q, P), i = V;
        }
    }
    function I0(e, t) {
      for (var a = (t & ho) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, d = o.listeners;
        GT(s, d, a);
      }
      zd();
    }
    function qT(e, t, a, i, o) {
      var s = Nc(a), d = [];
      QT(d, e, i, a, s, t), I0(d, t);
    }
    function Ln(e, t) {
      og.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = w_(t), o = JT(e, a);
      i.has(o) || ($0(t, e, Rs, a), i.add(o));
    }
    function lg(e, t, a) {
      og.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ho), $0(a, e, i, t);
    }
    var Vh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Vh]) {
        e[Vh] = !0, mt.forEach(function(a) {
          a !== "selectionchange" && (og.has(a) || lg(a, !1, e), lg(a, !0, e));
        });
        var t = e.nodeType === li ? e : e.ownerDocument;
        t !== null && (t[Vh] || (t[Vh] = !0, lg("selectionchange", !1, t)));
      }
    }
    function $0(e, t, a, i, o) {
      var s = Al(e, t, a), d = void 0;
      Os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? ru(e, t, s, d) : Ul(e, t, s) : d !== void 0 ? gf(e, t, s, d) : dp(e, t, s);
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
              if (y === O || y === L) {
                var R = m.stateNode.containerInfo;
                if (B0(R, d))
                  break;
                if (y === L)
                  for (var w = m.return; w !== null; ) {
                    var V = w.tag;
                    if (V === O || V === L) {
                      var P = w.stateNode.containerInfo;
                      if (B0(P, d))
                        return;
                    }
                    w = w.return;
                  }
                for (; R !== null; ) {
                  var q = tc(R);
                  if (q === null)
                    return;
                  var X = q.tag;
                  if (X === U || X === A) {
                    m = s = q;
                    continue e;
                  }
                  R = R.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      Nd(function() {
        return qT(e, t, a, s);
      });
    }
    function xp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function KT(e, t, a, i, o, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, y = [], R = e, w = null; R !== null; ) {
        var V = R, P = V.stateNode, q = V.tag;
        if (q === U && P !== null && (w = P, m !== null)) {
          var X = yo(R, m);
          X != null && y.push(xp(R, X, w));
        }
        if (o)
          break;
        R = R.return;
      }
      return y;
    }
    function Hh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, d = s.stateNode, m = s.tag;
        if (m === U && d !== null) {
          var y = d, R = yo(o, a);
          R != null && i.unshift(xp(o, R, y));
          var w = yo(o, t);
          w != null && i.push(xp(o, w, y));
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
    function XT(e, t) {
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
    function Y0(e, t, a, i, o) {
      for (var s = t._reactName, d = [], m = a; m !== null && m !== i; ) {
        var y = m, R = y.alternate, w = y.stateNode, V = y.tag;
        if (R !== null && R === i)
          break;
        if (V === U && w !== null) {
          var P = w;
          if (o) {
            var q = yo(m, s);
            q != null && d.unshift(xp(m, q, P));
          } else if (!o) {
            var X = yo(m, s);
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
    function ZT(e, t, a, i, o) {
      var s = i && o ? XT(i, o) : null;
      i !== null && Y0(e, t, i, s, !1), o !== null && a !== null && Y0(e, a, o, s, !0);
    }
    function JT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ka = !1, Op = "dangerouslySetInnerHTML", Ih = "suppressContentEditableWarning", $l = "suppressHydrationWarning", W0 = "autoFocus", Js = "children", ec = "style", $h = "__html", cg, Bh, Dp, Q0, Yh, G0, q0;
    cg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Bh = function(e, t) {
      kc(e, t), _d(e, t), Jv(e, t, {
        registrationNameDependencies: Pt,
        possibleRegistrationNames: tr
      });
    }, G0 = en && !document.documentMode, Dp = function(e, t, a) {
      if (!Ka) {
        var i = Wh(a), o = Wh(t);
        o !== i && (Ka = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, Q0 = function(e) {
      if (!Ka) {
        Ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Yh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q0 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var ew = /\r\n?/g, tw = /\u0000|\uFFFD/g;
    function Wh(e) {
      Jr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ew, `
`).replace(tw, "");
    }
    function Qh(e, t, a, i) {
      var o = Wh(t), s = Wh(e);
      if (s !== o && (i && (Ka || (Ka = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function K0(e) {
      return e.nodeType === li ? e : e.ownerDocument;
    }
    function nw() {
    }
    function Gh(e) {
      e.onclick = nw;
    }
    function rw(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === ec)
            d && Object.freeze(d), $v(t, d);
          else if (s === Op) {
            var m = d ? d[$h] : void 0;
            m != null && Mv(t, m);
          } else if (s === Js)
            if (typeof d == "string") {
              var y = e !== "textarea" || d !== "";
              y && _c(t, d);
            } else
              typeof d == "number" && _c(t, "" + d);
          else
            s === Ih || s === $l || s === W0 || (Pt.hasOwnProperty(s) ? d != null && (typeof d != "function" && Yh(s, d), s === "onScroll" && Ln("scroll", t)) : d != null && ba(t, s, d, o));
        }
    }
    function aw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], d = t[o + 1];
        s === ec ? $v(e, d) : s === Op ? Mv(e, d) : s === Js ? _c(e, d) : ba(e, s, d, i);
      }
    }
    function iw(e, t, a, i) {
      var o, s = K0(a), d, m = i;
      if (m === Bi && (m = Tc(e)), m === Bi) {
        if (o = Wi(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var R = y.firstChild;
          d = y.removeChild(R);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var w = d;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        d = s.createElementNS(m, e);
      return m === Bi && !o && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !_e.call(cg, e) && (cg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function uw(e, t) {
      return K0(t).createTextNode(e);
    }
    function ow(e, t, a, i) {
      var o = Wi(t, a);
      Bh(t, a);
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
          D(e, a), s = E(e, a), Ln("invalid", e);
          break;
        case "option":
          nn(e, a), s = a;
          break;
        case "select":
          Ss(e, a), s = gs(e, a), Ln("invalid", e);
          break;
        case "textarea":
          Dv(e, a), s = yd(e, a), Ln("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Oc(t, s), rw(t, e, i, s, o), t) {
        case "input":
          ja(e), ye(e, a, !1);
          break;
        case "textarea":
          ja(e), Nv(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          hd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Gh(e);
          break;
      }
    }
    function lw(e, t, a, i, o) {
      Bh(t, i);
      var s = null, d, m;
      switch (t) {
        case "input":
          d = E(e, a), m = E(e, i), s = [];
          break;
        case "select":
          d = gs(e, a), m = gs(e, i), s = [];
          break;
        case "textarea":
          d = yd(e, a), m = yd(e, i), s = [];
          break;
        default:
          d = a, m = i, typeof d.onClick != "function" && typeof m.onClick == "function" && Gh(e);
          break;
      }
      Oc(t, m);
      var y, R, w = null;
      for (y in d)
        if (!(m.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === ec) {
            var V = d[y];
            for (R in V)
              V.hasOwnProperty(R) && (w || (w = {}), w[R] = "");
          } else
            y === Op || y === Js || y === Ih || y === $l || y === W0 || (Pt.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in m) {
        var P = m[y], q = d != null ? d[y] : void 0;
        if (!(!m.hasOwnProperty(y) || P === q || P == null && q == null))
          if (y === ec)
            if (P && Object.freeze(P), q) {
              for (R in q)
                q.hasOwnProperty(R) && (!P || !P.hasOwnProperty(R)) && (w || (w = {}), w[R] = "");
              for (R in P)
                P.hasOwnProperty(R) && q[R] !== P[R] && (w || (w = {}), w[R] = P[R]);
            } else
              w || (s || (s = []), s.push(y, w)), w = P;
          else if (y === Op) {
            var X = P ? P[$h] : void 0, ne = q ? q[$h] : void 0;
            X != null && ne !== X && (s = s || []).push(y, X);
          } else
            y === Js ? (typeof P == "string" || typeof P == "number") && (s = s || []).push(y, "" + P) : y === Ih || y === $l || (Pt.hasOwnProperty(y) ? (P != null && (typeof P != "function" && Yh(y, P), y === "onScroll" && Ln("scroll", e)), !s && q !== P && (s = [])) : (s = s || []).push(y, P));
      }
      return w && (Cs(w, m[ec]), (s = s || []).push(ec, w)), s;
    }
    function sw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && K(e, o);
      var s = Wi(a, i), d = Wi(a, o);
      switch (aw(e, t, s, d), a) {
        case "input":
          te(e, o);
          break;
        case "textarea":
          kv(e, o);
          break;
        case "select":
          by(e, o);
          break;
      }
    }
    function cw(e) {
      {
        var t = e.toLowerCase();
        return Dc.hasOwnProperty(t) && Dc[t] || null;
      }
    }
    function fw(e, t, a, i, o, s, d) {
      var m, y;
      switch (m = Wi(t, a), Bh(t, a), t) {
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
          for (var R = 0; R < wp.length; R++)
            Ln(wp[R], e);
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
          D(e, a), Ln("invalid", e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          Ss(e, a), Ln("invalid", e);
          break;
        case "textarea":
          Dv(e, a), Ln("invalid", e);
          break;
      }
      Oc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var w = e.attributes, V = 0; V < w.length; V++) {
          var P = w[V].name.toLowerCase();
          switch (P) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(w[V].name);
          }
        }
      }
      var q = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var ne = a[X];
          if (X === Js)
            typeof ne == "string" ? e.textContent !== ne && (a[$l] !== !0 && Qh(e.textContent, ne, s, d), q = [Js, ne]) : typeof ne == "number" && e.textContent !== "" + ne && (a[$l] !== !0 && Qh(e.textContent, ne, s, d), q = [Js, "" + ne]);
          else if (Pt.hasOwnProperty(X))
            ne != null && (typeof ne != "function" && Yh(X, ne), X === "onScroll" && Ln("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Ae = void 0, et = m && ot ? null : Ur(X);
            if (a[$l] !== !0) {
              if (!(X === Ih || X === $l || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Op) {
                  var Ge = e.innerHTML, zt = ne ? ne[$h] : void 0;
                  if (zt != null) {
                    var kt = q0(e, zt);
                    kt !== Ge && Dp(X, Ge, kt);
                  }
                } else if (X === ec) {
                  if (y.delete(X), G0) {
                    var W = ky(ne);
                    Ae = e.getAttribute("style"), W !== Ae && Dp(X, Ae, W);
                  }
                } else if (m && !ot)
                  y.delete(X.toLowerCase()), Ae = gi(e, X, ne), ne !== Ae && Dp(X, Ae, ne);
                else if (!On(X, et, m) && !tn(X, ne, et, m)) {
                  var re = !1;
                  if (et !== null)
                    y.delete(et.attributeName), Ae = Ca(e, X, ne, et);
                  else {
                    var Q = i;
                    if (Q === Bi && (Q = Tc(t)), Q === Bi)
                      y.delete(X.toLowerCase());
                    else {
                      var he = cw(X);
                      he !== null && he !== X && (re = !0, y.delete(he)), y.delete(X);
                    }
                    Ae = gi(e, X, ne);
                  }
                  var ze = ot;
                  !ze && ne !== Ae && !re && Dp(X, Ae, ne);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[$l] !== !0 && Q0(y), t) {
        case "input":
          ja(e), ye(e, a, !0);
          break;
        case "textarea":
          ja(e), Nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Gh(e);
          break;
      }
      return q;
    }
    function dw(e, t, a) {
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
    function pw(e, t, a) {
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
      var vw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], X0 = [
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
      ], hw = X0.concat(["button"]), mw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Z0 = {
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
        var a = wt({}, e || Z0), i = {
          tag: t
        };
        return X0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), hw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), vw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var yw = function(e, t) {
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
            return mw.indexOf(t) === -1;
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
      }, gw = function(e, t) {
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
      }, J0 = {};
      kp = function(e, t, a) {
        a = a || Z0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = yw(e, o) ? null : i, d = s ? null : gw(e, a), m = s || d;
        if (m) {
          var y = m.tag, R = !!s + "|" + e + "|" + y;
          if (!J0[R]) {
            J0[R] = !0;
            var w = e, V = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", V = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var P = "";
              y === "table" && e === "tr" && (P += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, y, V, P);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, y);
          }
        }
      };
    }
    var qh = "suppressHydrationWarning", Kh = "$", Xh = "/$", Mp = "$?", Lp = "$!", Sw = "style", hg = null, mg = null;
    function Ew(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case li:
        case po: {
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
    function Cw(e, t, a) {
      {
        var i = e, o = Ed(i.namespace, t), s = Np(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function WM(e) {
      return e;
    }
    function bw(e) {
      hg = Da(), mg = UT();
      var t = null;
      return lr(!1), t;
    }
    function Rw(e) {
      jT(mg), lr(hg), hg = null, mg = null;
    }
    function Tw(e, t, a, i, o) {
      var s;
      {
        var d = i;
        if (kp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = Np(d.ancestorInfo, e);
          kp(null, m, y);
        }
        s = d.namespace;
      }
      var R = iw(e, t, a, s);
      return Up(o, R), Tg(R, t), R;
    }
    function ww(e, t) {
      e.appendChild(t);
    }
    function _w(e, t, a, i, o) {
      switch (ow(e, t, a, i), t) {
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
    function xw(e, t, a, i, o, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = Np(d.ancestorInfo, t);
          kp(null, m, y);
        }
      }
      return lw(e, t, a, i);
    }
    function yg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ow(e, t, a, i) {
      {
        var o = a;
        kp(null, e, o.ancestorInfo);
      }
      var s = uw(e, t);
      return Up(i, s), s;
    }
    function Dw() {
      var e = window.event;
      return e === void 0 ? eu : Hr(e.type);
    }
    var gg = typeof setTimeout == "function" ? setTimeout : void 0, kw = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, eC = typeof Promise == "function" ? Promise : void 0, Nw = typeof queueMicrotask == "function" ? queueMicrotask : typeof eC < "u" ? function(e) {
      return eC.resolve(null).then(e).catch(Mw);
    } : gg;
    function Mw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Lw(e, t, a, i) {
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
    function Aw(e, t, a, i, o, s) {
      sw(e, t, a, i, o), Tg(e, o);
    }
    function tC(e) {
      _c(e, "");
    }
    function zw(e, t, a) {
      e.nodeValue = a;
    }
    function Uw(e, t) {
      e.appendChild(t);
    }
    function jw(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Gh(a);
    }
    function Pw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Fw(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Vw(e, t) {
      e.removeChild(t);
    }
    function Hw(e, t) {
      e.nodeType === Yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Eg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Yn) {
          var s = o.data;
          if (s === Xh)
            if (i === 0) {
              e.removeChild(o), Dt(t);
              return;
            } else
              i--;
          else
            (s === Kh || s === Mp || s === Lp) && i++;
        }
        a = o;
      } while (a);
      Dt(t);
    }
    function Iw(e, t) {
      e.nodeType === Yn ? Eg(e.parentNode, t) : e.nodeType === aa && Eg(e, t), Dt(e);
    }
    function $w(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Bw(e) {
      e.nodeValue = "";
    }
    function Yw(e, t) {
      e = e;
      var a = t[Sw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function Ww(e, t) {
      e.nodeValue = t;
    }
    function Qw(e) {
      e.nodeType === aa ? e.textContent = "" : e.nodeType === li && e.documentElement && e.removeChild(e.documentElement);
    }
    function Gw(e, t, a) {
      return e.nodeType !== aa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function qw(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function Kw(e) {
      return e.nodeType !== Yn ? null : e;
    }
    function nC(e) {
      return e.data === Mp;
    }
    function Cg(e) {
      return e.data === Lp;
    }
    function Xw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Zw(e, t) {
      e._reactRetry = t;
    }
    function Zh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === aa || t === Yi)
          break;
        if (t === Yn) {
          var a = e.data;
          if (a === Kh || a === Lp || a === Mp)
            break;
          if (a === Xh)
            return null;
        }
      }
      return e;
    }
    function Ap(e) {
      return Zh(e.nextSibling);
    }
    function Jw(e) {
      return Zh(e.firstChild);
    }
    function e_(e) {
      return Zh(e.firstChild);
    }
    function t_(e) {
      return Zh(e.nextSibling);
    }
    function n_(e, t, a, i, o, s, d) {
      Up(s, e), Tg(e, a);
      var m;
      {
        var y = o;
        m = y.namespace;
      }
      var R = (s.mode & xt) !== nt;
      return fw(e, t, a, m, i, R, d);
    }
    function r_(e, t, a, i) {
      return Up(a, e), a.mode & xt, dw(e, t);
    }
    function a_(e, t) {
      Up(t, e);
    }
    function i_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Xh) {
            if (a === 0)
              return Ap(t);
            a--;
          } else
            (i === Kh || i === Lp || i === Mp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function rC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Kh || i === Lp || i === Mp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function u_(e) {
      Dt(e);
    }
    function o_(e) {
      Dt(e);
    }
    function l_(e) {
      return e !== "head" && e !== "body";
    }
    function s_(e, t, a, i) {
      var o = !0;
      Qh(t.nodeValue, a, i, o);
    }
    function c_(e, t, a, i, o, s) {
      if (t[qh] !== !0) {
        var d = !0;
        Qh(i.nodeValue, o, s, d);
      }
    }
    function f_(e, t) {
      t.nodeType === aa ? fg(e, t) : t.nodeType === Yn || dg(e, t);
    }
    function d_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === aa ? fg(a, t) : t.nodeType === Yn || dg(a, t));
      }
    }
    function p_(e, t, a, i, o) {
      (o || t[qh] !== !0) && (i.nodeType === aa ? fg(a, i) : i.nodeType === Yn || dg(a, i));
    }
    function v_(e, t, a) {
      pg(e, t);
    }
    function h_(e, t) {
      vg(e, t);
    }
    function m_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && pg(i, t);
      }
    }
    function y_(e, t) {
      {
        var a = e.parentNode;
        a !== null && vg(a, t);
      }
    }
    function g_(e, t, a, i, o, s) {
      (s || t[qh] !== !0) && pg(a, i);
    }
    function S_(e, t, a, i, o) {
      (o || t[qh] !== !0) && vg(a, i);
    }
    function E_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function C_(e) {
      _p(e);
    }
    var Af = Math.random().toString(36).slice(2), zf = "__reactFiber$" + Af, bg = "__reactProps$" + Af, zp = "__reactContainer$" + Af, Rg = "__reactEvents$" + Af, b_ = "__reactListeners$" + Af, R_ = "__reactHandles$" + Af;
    function T_(e) {
      delete e[zf], delete e[bg], delete e[Rg], delete e[b_], delete e[R_];
    }
    function Up(e, t) {
      t[zf] = e;
    }
    function Jh(e, t) {
      t[zp] = e;
    }
    function aC(e) {
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
            for (var o = rC(e); o !== null; ) {
              var s = o[zf];
              if (s)
                return s;
              o = rC(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Bl(e) {
      var t = e[zf] || e[zp];
      return t && (t.tag === U || t.tag === A || t.tag === $ || t.tag === O) ? t : null;
    }
    function Uf(e) {
      if (e.tag === U || e.tag === A)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function em(e) {
      return e[bg] || null;
    }
    function Tg(e, t) {
      e[bg] = t;
    }
    function w_(e) {
      var t = e[Rg];
      return t === void 0 && (t = e[Rg] = /* @__PURE__ */ new Set()), t;
    }
    var iC = {}, uC = h.ReactDebugCurrentFrame;
    function tm(e) {
      if (e) {
        var t = e._owner, a = Ri(e.type, e._source, t ? t.type : null);
        uC.setExtraStackFrame(a);
      } else
        uC.setExtraStackFrame(null);
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
            } catch (R) {
              m = R;
            }
            m && !(m instanceof Error) && (tm(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof m), tm(null)), m instanceof Error && !(m.message in iC) && (iC[m.message] = !0, tm(o), g("Failed %s type: %s", a, m.message), tm(null));
          }
      }
    }
    var wg = [], nm;
    nm = [];
    var Ho = -1;
    function Yl(e) {
      return {
        current: e
      };
    }
    function pa(e, t) {
      if (Ho < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== nm[Ho] && g("Unexpected Fiber popped."), e.current = wg[Ho], wg[Ho] = null, nm[Ho] = null, Ho--;
    }
    function va(e, t, a) {
      Ho++, wg[Ho] = e.current, nm[Ho] = a, e.current = t;
    }
    var _g;
    _g = {};
    var pi = {};
    Object.freeze(pi);
    var Io = Yl(pi), Ku = Yl(!1), xg = pi;
    function jf(e, t, a) {
      return a && Xu(t) ? xg : Io.current;
    }
    function oC(e, t, a) {
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
          var m = pt(e) || "Unknown";
          iu(i, s, "context", m);
        }
        return o && oC(e, t, s), s;
      }
    }
    function rm() {
      return Ku.current;
    }
    function Xu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function am(e) {
      pa(Ku, e), pa(Io, e);
    }
    function Og(e) {
      pa(Ku, e), pa(Io, e);
    }
    function lC(e, t, a) {
      {
        if (Io.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(Io, t, e), va(Ku, a, e);
      }
    }
    function sC(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = pt(e) || "Unknown";
            _g[s] || (_g[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in o))
            throw new Error((pt(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = pt(e) || "Unknown";
          iu(o, d, "child context", y);
        }
        return wt({}, a, d);
      }
    }
    function im(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return xg = Io.current, va(Io, a, e), va(Ku, Ku.current, e), !0;
      }
    }
    function cC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = sC(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = o, pa(Ku, e), pa(Io, e), va(Io, o, e), va(Ku, a, e);
        } else
          pa(Ku, e), va(Ku, a, e);
      }
    }
    function __(e) {
      {
        if (!Vd(e) || e.tag !== _)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
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
    var Wl = 0, um = 1, $o = null, Dg = !1, kg = !1;
    function fC(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    function x_(e) {
      Dg = !0, fC(e);
    }
    function dC() {
      Dg && Ql();
    }
    function Ql() {
      if (!kg && $o !== null) {
        kg = !0;
        var e = 0, t = Wa();
        try {
          var a = !0, i = $o;
          for (Xn(Or); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          $o = null, Dg = !1;
        } catch (s) {
          throw $o !== null && ($o = $o.slice(e + 1)), Pc(Vc, Ql), s;
        } finally {
          Xn(t), kg = !1;
        }
      }
      return null;
    }
    var Ff = [], Vf = 0, om = null, lm = 0, Mi = [], Li = 0, nc = null, Bo = 1, Yo = "";
    function O_(e) {
      return ac(), (e.flags & jd) !== Xe;
    }
    function D_(e) {
      return ac(), lm;
    }
    function k_() {
      var e = Yo, t = Bo, a = t & ~N_(t);
      return a.toString(32) + e;
    }
    function rc(e, t) {
      ac(), Ff[Vf++] = lm, Ff[Vf++] = om, om = e, lm = t;
    }
    function pC(e, t, a) {
      ac(), Mi[Li++] = Bo, Mi[Li++] = Yo, Mi[Li++] = nc, nc = e;
      var i = Bo, o = Yo, s = sm(i) - 1, d = i & ~(1 << s), m = a + 1, y = sm(t) + s;
      if (y > 30) {
        var R = s - s % 5, w = (1 << R) - 1, V = (d & w).toString(32), P = d >> R, q = s - R, X = sm(t) + q, ne = m << q, Ae = ne | P, et = V + o;
        Bo = 1 << X | Ae, Yo = et;
      } else {
        var Ge = m << s, zt = Ge | d, kt = o;
        Bo = 1 << y | zt, Yo = kt;
      }
    }
    function Ng(e) {
      ac();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rc(e, a), pC(e, a, i);
      }
    }
    function sm(e) {
      return 32 - Wc(e);
    }
    function N_(e) {
      return 1 << sm(e) - 1;
    }
    function Mg(e) {
      for (; e === om; )
        om = Ff[--Vf], Ff[Vf] = null, lm = Ff[--Vf], Ff[Vf] = null;
      for (; e === nc; )
        nc = Mi[--Li], Mi[Li] = null, Yo = Mi[--Li], Mi[Li] = null, Bo = Mi[--Li], Mi[Li] = null;
    }
    function M_() {
      return ac(), nc !== null ? {
        id: Bo,
        overflow: Yo
      } : null;
    }
    function L_(e, t) {
      ac(), Mi[Li++] = Bo, Mi[Li++] = Yo, Mi[Li++] = nc, Bo = t.id, Yo = t.overflow, nc = e;
    }
    function ac() {
      $r() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ir = null, Ai = null, uu = !1, ic = !1, Gl = null;
    function A_() {
      uu && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function vC() {
      ic = !0;
    }
    function z_() {
      return ic;
    }
    function U_(e) {
      var t = e.stateNode.containerInfo;
      return Ai = e_(t), Ir = e, uu = !0, Gl = null, ic = !1, !0;
    }
    function j_(e, t, a) {
      return Ai = t_(t), Ir = e, uu = !0, Gl = null, ic = !1, a !== null && L_(e, a), !0;
    }
    function hC(e, t) {
      switch (e.tag) {
        case O: {
          f_(e.stateNode.containerInfo, t);
          break;
        }
        case U: {
          var a = (e.mode & xt) !== nt;
          p_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case $: {
          var i = e.memoizedState;
          i.dehydrated !== null && d_(i.dehydrated, t);
          break;
        }
      }
    }
    function mC(e, t) {
      hC(e, t);
      var a = VD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Qt) : i.push(a);
    }
    function Lg(e, t) {
      {
        if (ic)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case U:
                var i = t.type;
                t.pendingProps, v_(a, i);
                break;
              case A:
                var o = t.pendingProps;
                h_(a, o);
                break;
            }
            break;
          }
          case U: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case U: {
                var y = t.type, R = t.pendingProps, w = (e.mode & xt) !== nt;
                g_(
                  s,
                  d,
                  m,
                  y,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case A: {
                var V = t.pendingProps, P = (e.mode & xt) !== nt;
                S_(
                  s,
                  d,
                  m,
                  V,
                  // TODO: Delete this argument when we remove the legacy root API.
                  P
                );
                break;
              }
            }
            break;
          }
          case $: {
            var q = e.memoizedState, X = q.dehydrated;
            if (X !== null)
              switch (t.tag) {
                case U:
                  var ne = t.type;
                  t.pendingProps, m_(X, ne);
                  break;
                case A:
                  var Ae = t.pendingProps;
                  y_(X, Ae);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function yC(e, t) {
      t.flags = t.flags & ~Ha | gn, Lg(e, t);
    }
    function gC(e, t) {
      switch (e.tag) {
        case U: {
          var a = e.type;
          e.pendingProps;
          var i = Gw(t, a);
          return i !== null ? (e.stateNode = i, Ir = e, Ai = Jw(i), !0) : !1;
        }
        case A: {
          var o = e.pendingProps, s = qw(t, o);
          return s !== null ? (e.stateNode = s, Ir = e, Ai = null, !0) : !1;
        }
        case $: {
          var d = Kw(t);
          if (d !== null) {
            var m = {
              dehydrated: d,
              treeContext: M_(),
              retryLane: fa
            };
            e.memoizedState = m;
            var y = HD(d);
            return y.return = e, e.child = y, Ir = e, Ai = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ag(e) {
      return (e.mode & xt) !== nt && (e.flags & ft) === Xe;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ug(e) {
      if (uu) {
        var t = Ai;
        if (!t) {
          Ag(e) && (Lg(Ir, e), zg()), yC(Ir, e), uu = !1, Ir = e;
          return;
        }
        var a = t;
        if (!gC(e, t)) {
          Ag(e) && (Lg(Ir, e), zg()), t = Ap(a);
          var i = Ir;
          if (!t || !gC(e, t)) {
            yC(Ir, e), uu = !1, Ir = e;
            return;
          }
          mC(i, a);
        }
      }
    }
    function P_(e, t, a) {
      var i = e.stateNode, o = !ic, s = n_(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function F_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = r_(t, a, e);
      if (i) {
        var o = Ir;
        if (o !== null)
          switch (o.tag) {
            case O: {
              var s = o.stateNode.containerInfo, d = (o.mode & xt) !== nt;
              s_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case U: {
              var m = o.type, y = o.memoizedProps, R = o.stateNode, w = (o.mode & xt) !== nt;
              c_(
                m,
                y,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return i;
    }
    function V_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      a_(a, e);
    }
    function H_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return i_(a);
    }
    function SC(e) {
      for (var t = e.return; t !== null && t.tag !== U && t.tag !== O && t.tag !== $; )
        t = t.return;
      Ir = t;
    }
    function cm(e) {
      if (e !== Ir)
        return !1;
      if (!uu)
        return SC(e), uu = !0, !1;
      if (e.tag !== O && (e.tag !== U || l_(e.type) && !yg(e.type, e.memoizedProps))) {
        var t = Ai;
        if (t)
          if (Ag(e))
            EC(e), zg();
          else
            for (; t; )
              mC(e, t), t = Ap(t);
      }
      return SC(e), e.tag === $ ? Ai = H_(e) : Ai = Ir ? Ap(e.stateNode) : null, !0;
    }
    function I_() {
      return uu && Ai !== null;
    }
    function EC(e) {
      for (var t = Ai; t; )
        hC(e, t), t = Ap(t);
    }
    function Hf() {
      Ir = null, Ai = null, uu = !1, ic = !1;
    }
    function CC() {
      Gl !== null && (hR(Gl), Gl = null);
    }
    function $r() {
      return uu;
    }
    function jg(e) {
      Gl === null ? Gl = [e] : Gl.push(e);
    }
    var $_ = h.ReactCurrentBatchConfig, B_ = null;
    function Y_() {
      return $_.transition;
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
      var W_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Nn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], $p = [], oc = /* @__PURE__ */ new Set();
      ou.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillUpdate == "function" && $p.push(e));
      }, ou.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(P) {
          e.add(pt(P) || "Component"), oc.add(P.type);
        }), Pp = []);
        var t = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(P) {
          t.add(pt(P) || "Component"), oc.add(P.type);
        }), Fp = []);
        var a = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(P) {
          a.add(pt(P) || "Component"), oc.add(P.type);
        }), Vp = []);
        var i = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(P) {
          i.add(pt(P) || "Component"), oc.add(P.type);
        }), Hp = []);
        var o = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(P) {
          o.add(pt(P) || "Component"), oc.add(P.type);
        }), Ip = []);
        var s = /* @__PURE__ */ new Set();
        if ($p.length > 0 && ($p.forEach(function(P) {
          s.add(pt(P) || "Component"), oc.add(P.type);
        }), $p = []), t.size > 0) {
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
          var R = uc(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var w = uc(a);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (o.size > 0) {
          var V = uc(o);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, V);
        }
      };
      var fm = /* @__PURE__ */ new Map(), bC = /* @__PURE__ */ new Set();
      ou.recordLegacyContextWarning = function(e, t) {
        var a = W_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!bC.has(e.type)) {
          var i = fm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], fm.set(a, i)), i.push(e));
        }
      }, ou.flushLegacyContextWarning = function() {
        fm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(pt(s) || "Component"), bC.add(s.type);
            });
            var o = uc(i);
            try {
              Xt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              An();
            }
          }
        });
      }, ou.discardPendingWarnings = function() {
        Pp = [], Fp = [], Vp = [], Hp = [], Ip = [], $p = [], fm = /* @__PURE__ */ new Map();
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
    var Pg = Yl(null), Fg;
    Fg = {};
    var dm = null, If = null, Vg = null, pm = !1;
    function vm() {
      dm = null, If = null, Vg = null, pm = !1;
    }
    function RC() {
      pm = !0;
    }
    function TC() {
      pm = !1;
    }
    function wC(e, t, a) {
      va(Pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Hg(e, t) {
      var a = Pg.current;
      pa(Pg, t), e._currentValue = a;
    }
    function Ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (ko(i.childLanes, t) ? o !== null && !ko(o.childLanes, t) && (o.childLanes = Ct(o.childLanes, t)) : (i.childLanes = Ct(i.childLanes, t), o !== null && (o.childLanes = Ct(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Q_(e, t, a) {
      G_(e, t, a);
    }
    function G_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === _) {
                var m = Kn(a), y = Wo(pn, m);
                y.tag = mm;
                var R = i.updateQueue;
                if (R !== null) {
                  var w = R.shared, V = w.pending;
                  V === null ? y.next = y : (y.next = V.next, V.next = y), w.pending = y;
                }
              }
              i.lanes = Ct(i.lanes, a);
              var P = i.alternate;
              P !== null && (P.lanes = Ct(P.lanes, a)), Ig(i.return, a, e), s.lanes = Ct(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ue)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Ye) {
          var q = i.return;
          if (q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          q.lanes = Ct(q.lanes, a);
          var X = q.alternate;
          X !== null && (X.lanes = Ct(X.lanes, a)), Ig(q, a, e), o = i.sibling;
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
    function $f(e, t) {
      dm = e, If = null, Vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (da(a.lanes, t) && rv(), a.firstContext = null);
      }
    }
    function cr(e) {
      pm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (If === null) {
          if (dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          If = a, dm.dependencies = {
            lanes: ae,
            firstContext: a
          };
        } else
          If = If.next = a;
      }
      return t;
    }
    var lc = null;
    function $g(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function q_() {
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
    function _C(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, $g(t)) : (a.next = o.next, o.next = a), t.interleaved = a, hm(e, i);
    }
    function K_(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, $g(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function X_(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, $g(t)) : (a.next = o.next, o.next = a), t.interleaved = a, hm(e, i);
    }
    function Xa(e, t) {
      return hm(e, t);
    }
    var Z_ = hm;
    function hm(e, t) {
      e.lanes = Ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ct(a.lanes, t)), a === null && (e.flags & (gn | Ha)) !== Xe && xR(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = Ct(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = Ct(a.childLanes, t) : (o.flags & (gn | Ha)) !== Xe && xR(e), i = o, o = o.return;
      if (i.tag === O) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var xC = 0, OC = 1, mm = 2, Bg = 3, ym = !1, Yg, gm;
    Yg = !1, gm = null;
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
    function DC(e, t) {
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
    function Wo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: xC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function ql(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (gm === o && !Yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Yg = !0), ZO()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Z_(e, a);
      } else
        return X_(e, o, t, a);
    }
    function Sm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Jd(a)) {
          var s = o.lanes;
          s = tp(s, e.pendingLanes);
          var d = Ct(s, a);
          o.lanes = d, Dl(e, d);
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
              var R = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              d === null ? s = d = R : (d.next = R, d = R), y = y.next;
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
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function J_(e, t, a, i, o, s) {
      switch (a.tag) {
        case OC: {
          var d = a.payload;
          if (typeof d == "function") {
            RC();
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
              TC();
            }
            return m;
          }
          return d;
        }
        case Bg:
          e.flags = e.flags & ~ir | ft;
        case xC: {
          var y = a.payload, R;
          if (typeof y == "function") {
            RC(), R = y.call(s, i, o);
            {
              if (e.mode & Nn) {
                qn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  qn(!1);
                }
              }
              TC();
            }
          } else
            R = y;
          return R == null ? i : wt({}, i, R);
        }
        case mm:
          return ym = !0, i;
      }
      return i;
    }
    function Em(e, t, a, i) {
      var o = e.updateQueue;
      ym = !1, gm = o.shared;
      var s = o.firstBaseUpdate, d = o.lastBaseUpdate, m = o.shared.pending;
      if (m !== null) {
        o.shared.pending = null;
        var y = m, R = y.next;
        y.next = null, d === null ? s = R : d.next = R, d = y;
        var w = e.alternate;
        if (w !== null) {
          var V = w.updateQueue, P = V.lastBaseUpdate;
          P !== d && (P === null ? V.firstBaseUpdate = R : P.next = R, V.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var q = o.baseState, X = ae, ne = null, Ae = null, et = null, Ge = s;
        do {
          var zt = Ge.lane, kt = Ge.eventTime;
          if (ko(i, zt)) {
            if (et !== null) {
              var re = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Lt,
                tag: Ge.tag,
                payload: Ge.payload,
                callback: Ge.callback,
                next: null
              };
              et = et.next = re;
            }
            q = J_(e, o, Ge, q, t, a);
            var Q = Ge.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ge.lane !== Lt) {
              e.flags |= _i;
              var he = o.effects;
              he === null ? o.effects = [Ge] : he.push(Ge);
            }
          } else {
            var W = {
              eventTime: kt,
              lane: zt,
              tag: Ge.tag,
              payload: Ge.payload,
              callback: Ge.callback,
              next: null
            };
            et === null ? (Ae = et = W, ne = q) : et = et.next = W, X = Ct(X, zt);
          }
          if (Ge = Ge.next, Ge === null) {
            if (m = o.shared.pending, m === null)
              break;
            var ze = m, xe = ze.next;
            ze.next = null, Ge = xe, o.lastBaseUpdate = ze, o.shared.pending = null;
          }
        } while (!0);
        et === null && (ne = q), o.baseState = ne, o.firstBaseUpdate = Ae, o.lastBaseUpdate = et;
        var ct = o.shared.interleaved;
        if (ct !== null) {
          var yt = ct;
          do
            X = Ct(X, yt.lane), yt = yt.next;
          while (yt !== ct);
        } else
          s === null && (o.shared.lanes = ae);
        hv(X), e.lanes = X, e.memoizedState = q;
      }
      gm = null;
    }
    function ex(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function kC() {
      ym = !1;
    }
    function Cm() {
      return ym;
    }
    function NC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], d = s.callback;
          d !== null && (s.callback = null, ex(d, a));
        }
    }
    var Gg = {}, MC = new c.Component().refs, qg, Kg, Xg, Zg, Jg, LC, bm, eS, tS, nS;
    {
      qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set();
      var AC = /* @__PURE__ */ new Set();
      bm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          AC.has(a) || (AC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, LC = function(e, t) {
        if (t === void 0) {
          var a = Vt(e) || "Component";
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
        LC(t, s);
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
        var i = Fa(e), o = Ma(), s = rs(i), d = Wo(o, s);
        d.payload = t, a != null && (bm(a, "setState"), d.callback = a);
        var m = ql(i, d, s);
        m !== null && (Rr(m, i, s, o), Sm(m, i, s)), Hu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Fa(e), o = Ma(), s = rs(i), d = Wo(o, s);
        d.tag = OC, d.payload = t, a != null && (bm(a, "replaceState"), d.callback = a);
        var m = ql(i, d, s);
        m !== null && (Rr(m, i, s, o), Sm(m, i, s)), Hu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Fa(e), i = Ma(), o = rs(a), s = Wo(i, o);
        s.tag = mm, t != null && (bm(t, "forceUpdate"), s.callback = t);
        var d = ql(a, s, o);
        d !== null && (Rr(d, a, o, i), Sm(d, a, o)), qd(a, o);
      }
    };
    function zC(e, t, a, i, o, s, d) {
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
          y === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ke(a, i) || !Ke(o, s) : !0;
    }
    function tx(e, t, a) {
      var i = e.stateNode;
      {
        var o = Vt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = i.props !== a;
        i.props !== void 0 && d && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var m = i.state;
        m && (typeof m != "object" || Nt(m)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function UC(e, t) {
      t.updater = aS, e.stateNode = t, Sl(t, e), t._reactInternalInstance = Gg;
    }
    function jC(e, t, a) {
      var i = !1, o = pi, s = pi, d = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Ee && d._context === void 0
        );
        if (!m && !nS.has(t)) {
          nS.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === se ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = cr(d);
      else {
        o = jf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? Pf(e, o) : pi;
      }
      var w = new t(a, s);
      if (e.mode & Nn) {
        qn(!0);
        try {
          w = new t(a, s);
        } finally {
          qn(!1);
        }
      }
      var V = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      UC(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && V === null) {
          var P = Vt(t) || "Component";
          Kg.has(P) || (Kg.add(P), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, w.state === null ? "null" : "undefined", P));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var q = null, X = null, ne = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ne = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (ne = "UNSAFE_componentWillUpdate"), q !== null || X !== null || ne !== null) {
            var Ae = Vt(t) || "Component", et = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(Ae) || (Zg.add(Ae), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ae, et, q !== null ? `
  ` + q : "", X !== null ? `
  ` + X : "", ne !== null ? `
  ` + ne : ""));
          }
        }
      }
      return i && oC(e, o, s), w;
    }
    function nx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pt(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function PC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = pt(e) || "Component";
          qg.has(s) || (qg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      tx(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = MC, Wg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = cr(s);
      else {
        var d = jf(e, t, !0);
        o.context = Pf(e, d);
      }
      {
        if (o.state === a) {
          var m = Vt(t) || "Component";
          eS.has(m) || (eS.add(m), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & Nn && ou.recordLegacyContextWarning(e, o), ou.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (rS(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (nx(e, o), Em(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var R = Et;
        R |= ua, (e.mode & Ba) !== nt && (R |= oa), e.flags |= R;
      }
    }
    function rx(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var d = o.context, m = t.contextType, y = pi;
      if (typeof m == "object" && m !== null)
        y = cr(m);
      else {
        var R = jf(e, t, !0);
        y = Pf(e, R);
      }
      var w = t.getDerivedStateFromProps, V = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !V && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || d !== y) && PC(e, o, a, y), kC();
      var P = e.memoizedState, q = o.state = P;
      if (Em(e, a, o, i), q = e.memoizedState, s === a && P === q && !rm() && !Cm()) {
        if (typeof o.componentDidMount == "function") {
          var X = Et;
          X |= ua, (e.mode & Ba) !== nt && (X |= oa), e.flags |= X;
        }
        return !1;
      }
      typeof w == "function" && (rS(e, t, w, a), q = e.memoizedState);
      var ne = Cm() || zC(e, t, s, a, P, q, y);
      if (ne) {
        if (!V && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ae = Et;
          Ae |= ua, (e.mode & Ba) !== nt && (Ae |= oa), e.flags |= Ae;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var et = Et;
          et |= ua, (e.mode & Ba) !== nt && (et |= oa), e.flags |= et;
        }
        e.memoizedProps = a, e.memoizedState = q;
      }
      return o.props = a, o.state = q, o.context = y, ne;
    }
    function ax(e, t, a, i, o) {
      var s = t.stateNode;
      DC(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : lu(t.type, d);
      s.props = m;
      var y = t.pendingProps, R = s.context, w = a.contextType, V = pi;
      if (typeof w == "object" && w !== null)
        V = cr(w);
      else {
        var P = jf(t, a, !0);
        V = Pf(t, P);
      }
      var q = a.getDerivedStateFromProps, X = typeof q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || R !== V) && PC(t, s, i, V), kC();
      var ne = t.memoizedState, Ae = s.state = ne;
      if (Em(t, i, s, o), Ae = t.memoizedState, d === y && ne === Ae && !rm() && !Cm() && !Ie)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Va), !1;
      typeof q == "function" && (rS(t, a, q, i), Ae = t.memoizedState);
      var et = Cm() || zC(t, a, m, i, ne, Ae, V) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ie;
      return et ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ae, V), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ae, V)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Va)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Va), t.memoizedProps = i, t.memoizedState = Ae), s.props = i, s.state = Ae, s.context = V, et;
    }
    var uS, oS, lS, sS, cS, FC = function(e, t) {
    };
    uS = !1, oS = !1, lS = {}, sS = {}, cS = {}, FC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = pt(t) || "Component";
        sS[a] || (sS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Bp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Nn || Ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = pt(e) || "Component";
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
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var w = function(V) {
            var P = y.refs;
            P === MC && (P = y.refs = {}), V === null ? delete P[R] : P[R] = V;
          };
          return w._stringRef = R, w;
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
    function Rm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Tm(e) {
      {
        var t = pt(e) || "Component";
        if (cS[t])
          return;
        cS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function VC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function HC(e) {
      function t(W, re) {
        if (e) {
          var Q = W.deletions;
          Q === null ? (W.deletions = [re], W.flags |= Qt) : Q.push(re);
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
        for (var Q = /* @__PURE__ */ new Map(), he = re; he !== null; )
          he.key !== null ? Q.set(he.key, he) : Q.set(he.index, he), he = he.sibling;
        return Q;
      }
      function o(W, re) {
        var Q = mc(W, re);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function s(W, re, Q) {
        if (W.index = Q, !e)
          return W.flags |= jd, re;
        var he = W.alternate;
        if (he !== null) {
          var ze = he.index;
          return ze < re ? (W.flags |= gn, re) : ze;
        } else
          return W.flags |= gn, re;
      }
      function d(W) {
        return e && W.alternate === null && (W.flags |= gn), W;
      }
      function m(W, re, Q, he) {
        if (re === null || re.tag !== A) {
          var ze = jE(Q, W.mode, he);
          return ze.return = W, ze;
        } else {
          var xe = o(re, Q);
          return xe.return = W, xe;
        }
      }
      function y(W, re, Q, he) {
        var ze = Q.type;
        if (ze === Ra)
          return w(W, re, Q.props.children, he, Q.key);
        if (re !== null && (re.elementType === ze || // Keep this check inline so it only runs on the false path:
        NR(re, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ze == "object" && ze !== null && ze.$$typeof === Je && VC(ze) === re.type)) {
          var xe = o(re, Q.props);
          return xe.ref = Bp(W, re, Q), xe.return = W, xe._debugSource = Q._source, xe._debugOwner = Q._owner, xe;
        }
        var ct = UE(Q, W.mode, he);
        return ct.ref = Bp(W, re, Q), ct.return = W, ct;
      }
      function R(W, re, Q, he) {
        if (re === null || re.tag !== L || re.stateNode.containerInfo !== Q.containerInfo || re.stateNode.implementation !== Q.implementation) {
          var ze = PE(Q, W.mode, he);
          return ze.return = W, ze;
        } else {
          var xe = o(re, Q.children || []);
          return xe.return = W, xe;
        }
      }
      function w(W, re, Q, he, ze) {
        if (re === null || re.tag !== B) {
          var xe = is(Q, W.mode, he, ze);
          return xe.return = W, xe;
        } else {
          var ct = o(re, Q);
          return ct.return = W, ct;
        }
      }
      function V(W, re, Q) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var he = jE("" + re, W.mode, Q);
          return he.return = W, he;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case Si: {
              var ze = UE(re, W.mode, Q);
              return ze.ref = Bp(W, null, re), ze.return = W, ze;
            }
            case jr: {
              var xe = PE(re, W.mode, Q);
              return xe.return = W, xe;
            }
            case Je: {
              var ct = re._payload, yt = re._init;
              return V(W, yt(ct), Q);
            }
          }
          if (Nt(re) || ai(re)) {
            var an = is(re, W.mode, Q, null);
            return an.return = W, an;
          }
          Rm(W, re);
        }
        return typeof re == "function" && Tm(W), null;
      }
      function P(W, re, Q, he) {
        var ze = re !== null ? re.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return ze !== null ? null : m(W, re, "" + Q, he);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Si:
              return Q.key === ze ? y(W, re, Q, he) : null;
            case jr:
              return Q.key === ze ? R(W, re, Q, he) : null;
            case Je: {
              var xe = Q._payload, ct = Q._init;
              return P(W, re, ct(xe), he);
            }
          }
          if (Nt(Q) || ai(Q))
            return ze !== null ? null : w(W, re, Q, he, null);
          Rm(W, Q);
        }
        return typeof Q == "function" && Tm(W), null;
      }
      function q(W, re, Q, he, ze) {
        if (typeof he == "string" && he !== "" || typeof he == "number") {
          var xe = W.get(Q) || null;
          return m(re, xe, "" + he, ze);
        }
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case Si: {
              var ct = W.get(he.key === null ? Q : he.key) || null;
              return y(re, ct, he, ze);
            }
            case jr: {
              var yt = W.get(he.key === null ? Q : he.key) || null;
              return R(re, yt, he, ze);
            }
            case Je:
              var an = he._payload, Bt = he._init;
              return q(W, re, Q, Bt(an), ze);
          }
          if (Nt(he) || ai(he)) {
            var er = W.get(Q) || null;
            return w(re, er, he, ze, null);
          }
          Rm(re, he);
        }
        return typeof he == "function" && Tm(re), null;
      }
      function X(W, re, Q) {
        {
          if (typeof W != "object" || W === null)
            return re;
          switch (W.$$typeof) {
            case Si:
            case jr:
              FC(W, Q);
              var he = W.key;
              if (typeof he != "string")
                break;
              if (re === null) {
                re = /* @__PURE__ */ new Set(), re.add(he);
                break;
              }
              if (!re.has(he)) {
                re.add(he);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", he);
              break;
            case Je:
              var ze = W._payload, xe = W._init;
              X(xe(ze), re, Q);
              break;
          }
        }
        return re;
      }
      function ne(W, re, Q, he) {
        for (var ze = null, xe = 0; xe < Q.length; xe++) {
          var ct = Q[xe];
          ze = X(ct, ze, W);
        }
        for (var yt = null, an = null, Bt = re, er = 0, Yt = 0, Gn = null; Bt !== null && Yt < Q.length; Yt++) {
          Bt.index > Yt ? (Gn = Bt, Bt = null) : Gn = Bt.sibling;
          var ma = P(W, Bt, Q[Yt], he);
          if (ma === null) {
            Bt === null && (Bt = Gn);
            break;
          }
          e && Bt && ma.alternate === null && t(W, Bt), er = s(ma, er, Yt), an === null ? yt = ma : an.sibling = ma, an = ma, Bt = Gn;
        }
        if (Yt === Q.length) {
          if (a(W, Bt), $r()) {
            var Kr = Yt;
            rc(W, Kr);
          }
          return yt;
        }
        if (Bt === null) {
          for (; Yt < Q.length; Yt++) {
            var hi = V(W, Q[Yt], he);
            hi !== null && (er = s(hi, er, Yt), an === null ? yt = hi : an.sibling = hi, an = hi);
          }
          if ($r()) {
            var La = Yt;
            rc(W, La);
          }
          return yt;
        }
        for (var Aa = i(W, Bt); Yt < Q.length; Yt++) {
          var ya = q(Aa, W, Yt, Q[Yt], he);
          ya !== null && (e && ya.alternate !== null && Aa.delete(ya.key === null ? Yt : ya.key), er = s(ya, er, Yt), an === null ? yt = ya : an.sibling = ya, an = ya);
        }
        if (e && Aa.forEach(function(ud) {
          return t(W, ud);
        }), $r()) {
          var Zo = Yt;
          rc(W, Zo);
        }
        return yt;
      }
      function Ae(W, re, Q, he) {
        var ze = ai(Q);
        if (typeof ze != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (oS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), oS = !0), Q.entries === ze && (uS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var xe = ze.call(Q);
          if (xe)
            for (var ct = null, yt = xe.next(); !yt.done; yt = xe.next()) {
              var an = yt.value;
              ct = X(an, ct, W);
            }
        }
        var Bt = ze.call(Q);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Yt = null, Gn = re, ma = 0, Kr = 0, hi = null, La = Bt.next(); Gn !== null && !La.done; Kr++, La = Bt.next()) {
          Gn.index > Kr ? (hi = Gn, Gn = null) : hi = Gn.sibling;
          var Aa = P(W, Gn, La.value, he);
          if (Aa === null) {
            Gn === null && (Gn = hi);
            break;
          }
          e && Gn && Aa.alternate === null && t(W, Gn), ma = s(Aa, ma, Kr), Yt === null ? er = Aa : Yt.sibling = Aa, Yt = Aa, Gn = hi;
        }
        if (La.done) {
          if (a(W, Gn), $r()) {
            var ya = Kr;
            rc(W, ya);
          }
          return er;
        }
        if (Gn === null) {
          for (; !La.done; Kr++, La = Bt.next()) {
            var Zo = V(W, La.value, he);
            Zo !== null && (ma = s(Zo, ma, Kr), Yt === null ? er = Zo : Yt.sibling = Zo, Yt = Zo);
          }
          if ($r()) {
            var ud = Kr;
            rc(W, ud);
          }
          return er;
        }
        for (var Ev = i(W, Gn); !La.done; Kr++, La = Bt.next()) {
          var io = q(Ev, W, Kr, La.value, he);
          io !== null && (e && io.alternate !== null && Ev.delete(io.key === null ? Kr : io.key), ma = s(io, ma, Kr), Yt === null ? er = io : Yt.sibling = io, Yt = io);
        }
        if (e && Ev.forEach(function(gk) {
          return t(W, gk);
        }), $r()) {
          var yk = Kr;
          rc(W, yk);
        }
        return er;
      }
      function et(W, re, Q, he) {
        if (re !== null && re.tag === A) {
          a(W, re.sibling);
          var ze = o(re, Q);
          return ze.return = W, ze;
        }
        a(W, re);
        var xe = jE(Q, W.mode, he);
        return xe.return = W, xe;
      }
      function Ge(W, re, Q, he) {
        for (var ze = Q.key, xe = re; xe !== null; ) {
          if (xe.key === ze) {
            var ct = Q.type;
            if (ct === Ra) {
              if (xe.tag === B) {
                a(W, xe.sibling);
                var yt = o(xe, Q.props.children);
                return yt.return = W, yt._debugSource = Q._source, yt._debugOwner = Q._owner, yt;
              }
            } else if (xe.elementType === ct || // Keep this check inline so it only runs on the false path:
            NR(xe, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ct == "object" && ct !== null && ct.$$typeof === Je && VC(ct) === xe.type) {
              a(W, xe.sibling);
              var an = o(xe, Q.props);
              return an.ref = Bp(W, xe, Q), an.return = W, an._debugSource = Q._source, an._debugOwner = Q._owner, an;
            }
            a(W, xe);
            break;
          } else
            t(W, xe);
          xe = xe.sibling;
        }
        if (Q.type === Ra) {
          var Bt = is(Q.props.children, W.mode, he, Q.key);
          return Bt.return = W, Bt;
        } else {
          var er = UE(Q, W.mode, he);
          return er.ref = Bp(W, re, Q), er.return = W, er;
        }
      }
      function zt(W, re, Q, he) {
        for (var ze = Q.key, xe = re; xe !== null; ) {
          if (xe.key === ze)
            if (xe.tag === L && xe.stateNode.containerInfo === Q.containerInfo && xe.stateNode.implementation === Q.implementation) {
              a(W, xe.sibling);
              var ct = o(xe, Q.children || []);
              return ct.return = W, ct;
            } else {
              a(W, xe);
              break;
            }
          else
            t(W, xe);
          xe = xe.sibling;
        }
        var yt = PE(Q, W.mode, he);
        return yt.return = W, yt;
      }
      function kt(W, re, Q, he) {
        var ze = typeof Q == "object" && Q !== null && Q.type === Ra && Q.key === null;
        if (ze && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Si:
              return d(Ge(W, re, Q, he));
            case jr:
              return d(zt(W, re, Q, he));
            case Je:
              var xe = Q._payload, ct = Q._init;
              return kt(W, re, ct(xe), he);
          }
          if (Nt(Q))
            return ne(W, re, Q, he);
          if (ai(Q))
            return Ae(W, re, Q, he);
          Rm(W, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? d(et(W, re, "" + Q, he)) : (typeof Q == "function" && Tm(W), a(W, re));
      }
      return kt;
    }
    var Bf = HC(!0), IC = HC(!1);
    function ix(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ux(e, t) {
      for (var a = e.child; a !== null; )
        zD(a, t), a = a.sibling;
    }
    var Yp = {}, Kl = Yl(Yp), Wp = Yl(Yp), wm = Yl(Yp);
    function _m(e) {
      if (e === Yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function $C() {
      var e = _m(wm.current);
      return e;
    }
    function fS(e, t) {
      va(wm, t, e), va(Wp, e, e), va(Kl, Yp, e);
      var a = Ew(t);
      pa(Kl, e), va(Kl, a, e);
    }
    function Yf(e) {
      pa(Kl, e), pa(Wp, e), pa(wm, e);
    }
    function dS() {
      var e = _m(Kl.current);
      return e;
    }
    function BC(e) {
      _m(wm.current);
      var t = _m(Kl.current), a = Cw(t, e.type);
      t !== a && (va(Wp, e, e), va(Kl, a, e));
    }
    function pS(e) {
      Wp.current === e && (pa(Kl, e), pa(Wp, e));
    }
    var ox = 0, YC = 1, WC = 1, Qp = 2, su = Yl(ox);
    function vS(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & YC;
    }
    function hS(e, t) {
      return e & YC | t;
    }
    function lx(e, t) {
      return e | t;
    }
    function Xl(e, t) {
      va(su, t, e);
    }
    function Qf(e) {
      pa(su, e);
    }
    function sx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function xm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === $) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || nC(i) || Cg(i))
              return t;
          }
        } else if (t.tag === We && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & ft) !== Xe;
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
    function cx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Me = h.ReactCurrentDispatcher, Gp = h.ReactCurrentBatchConfig, gS, Gf;
    gS = /* @__PURE__ */ new Set();
    var sc = ae, rn = null, gr = null, Sr = null, Om = !1, qp = !1, Kp = 0, fx = 0, dx = 25, ie = null, zi = null, Zl = -1, SS = !1;
    function Jt() {
      {
        var e = ie;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function be() {
      {
        var e = ie;
        zi !== null && (Zl++, zi[Zl] !== e && px(e));
      }
    }
    function qf(e) {
      e != null && !Nt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function px(e) {
      {
        var t = pt(rn);
        if (!gS.has(t) && (gS.add(t), zi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Zl; o++) {
            for (var s = zi[o], d = o === Zl ? e : s, m = o + 1 + ". " + s; m.length < i; )
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
        if (!Ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Kf(e, t, a, i, o, s) {
      sc = s, rn = t, zi = e !== null ? e._debugHookTypes : null, Zl = -1, SS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? Me.current = vb : zi !== null ? Me.current = pb : Me.current = db;
      var d = a(i, o);
      if (qp) {
        var m = 0;
        do {
          if (qp = !1, Kp = 0, m >= dx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, SS = !1, gr = null, Sr = null, t.updateQueue = null, Zl = -1, Me.current = hb, d = a(i, o);
        } while (qp);
      }
      Me.current = Hm, t._debugHookTypes = zi;
      var y = gr !== null && gr.next !== null;
      if (sc = ae, rn = null, gr = null, Sr = null, ie = null, zi = null, Zl = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xt) !== nt && g("Internal React error: Expected static flag was missing. Please notify the React team."), Om = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Xf() {
      var e = Kp !== 0;
      return Kp = 0, e;
    }
    function QC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ba) !== nt ? t.flags &= ~(Eo | oa | wn | Et) : t.flags &= ~(wn | Et), e.lanes = Ol(e.lanes, a);
    }
    function GC() {
      if (Me.current = Hm, Om) {
        for (var e = rn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Om = !1;
      }
      sc = ae, rn = null, gr = null, Sr = null, zi = null, Zl = -1, ie = null, ob = !1, qp = !1, Kp = 0;
    }
    function Ju() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? rn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Ui() {
      var e;
      if (gr === null) {
        var t = rn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = rn.memoizedState : a = Sr.next, a !== null)
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
        Sr === null ? rn.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function qC() {
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
      var d = s.dispatch = yx.bind(null, rn, s);
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
          var y = d.next, R = m.next;
          d.next = R, m.next = y;
        }
        s.baseQueue !== d && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = m, o.pending = null;
      }
      if (d !== null) {
        var w = d.next, V = s.baseState, P = null, q = null, X = null, ne = w;
        do {
          var Ae = ne.lane;
          if (ko(sc, Ae)) {
            if (X !== null) {
              var Ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Lt,
                action: ne.action,
                hasEagerState: ne.hasEagerState,
                eagerState: ne.eagerState,
                next: null
              };
              X = X.next = Ge;
            }
            if (ne.hasEagerState)
              V = ne.eagerState;
            else {
              var zt = ne.action;
              V = e(V, zt);
            }
          } else {
            var et = {
              lane: Ae,
              action: ne.action,
              hasEagerState: ne.hasEagerState,
              eagerState: ne.eagerState,
              next: null
            };
            X === null ? (q = X = et, P = V) : X = X.next = et, rn.lanes = Ct(rn.lanes, Ae), hv(Ae);
          }
          ne = ne.next;
        } while (ne !== null && ne !== w);
        X === null ? P = V : X.next = q, Ve(V, i.memoizedState) || rv(), i.memoizedState = V, i.baseState = P, i.baseQueue = X, o.lastRenderedState = V;
      }
      var kt = o.interleaved;
      if (kt !== null) {
        var W = kt;
        do {
          var re = W.lane;
          rn.lanes = Ct(rn.lanes, re), hv(re), W = W.next;
        } while (W !== kt);
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
        var y = d.next, R = y;
        do {
          var w = R.action;
          m = e(m, w), R = R.next;
        } while (R !== y);
        Ve(m, i.memoizedState) || rv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
      }
      return [m, s];
    }
    function QM(e, t, a) {
    }
    function GM(e, t, a) {
    }
    function wS(e, t, a) {
      var i = rn, o = Ju(), s, d = $r();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Gf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var m = t();
          Ve(s, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var y = iy();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(y, sc) || KC(i, t, s);
      }
      o.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return o.queue = R, Lm(ZC.bind(null, i, R, e), [e]), i.flags |= wn, Xp(mr | Br, XC.bind(null, i, R, s, t), void 0, null), s;
    }
    function Dm(e, t, a) {
      var i = rn, o = Ui(), s = t();
      if (!Gf) {
        var d = t();
        Ve(s, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var m = o.memoizedState, y = !Ve(m, s);
      y && (o.memoizedState = s, rv());
      var R = o.queue;
      if (Jp(ZC.bind(null, i, R, e), [e]), R.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= wn, Xp(mr | Br, XC.bind(null, i, R, s, t), void 0, null);
        var w = iy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(w, sc) || KC(i, t, s);
      }
      return s;
    }
    function KC(e, t, a) {
      e.flags |= Ns;
      var i = {
        getSnapshot: t,
        value: a
      }, o = rn.updateQueue;
      if (o === null)
        o = qC(), rn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function XC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, JC(t) && eb(e);
    }
    function ZC(e, t, a) {
      var i = function() {
        JC(t) && eb(e);
      };
      return a(i);
    }
    function JC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ve(a, i);
      } catch {
        return !0;
      }
    }
    function eb(e) {
      var t = Xa(e, lt);
      t !== null && Rr(t, e, lt, pn);
    }
    function km(e) {
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
      var i = a.dispatch = gx.bind(null, rn, a);
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
      }, s = rn.updateQueue;
      if (s === null)
        s = qC(), rn.updateQueue = s, s.lastEffect = o.next = o;
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
    function Nm(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function Zp(e, t, a, i) {
      var o = Ju(), s = i === void 0 ? null : i;
      rn.flags |= e, o.memoizedState = Xp(mr | t, a, void 0, s);
    }
    function Mm(e, t, a, i) {
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
      rn.flags |= e, o.memoizedState = Xp(mr | t, a, d, s);
    }
    function Lm(e, t) {
      return (rn.mode & Ba) !== nt ? Zp(Eo | wn | zu, Br, e, t) : Zp(wn | zu, Br, e, t);
    }
    function Jp(e, t) {
      return Mm(wn, Br, e, t);
    }
    function DS(e, t) {
      return Zp(Et, Zu, e, t);
    }
    function Am(e, t) {
      return Mm(Et, Zu, e, t);
    }
    function kS(e, t) {
      var a = Et;
      return a |= ua, (rn.mode & Ba) !== nt && (a |= oa), Zp(a, yr, e, t);
    }
    function zm(e, t) {
      return Mm(Et, yr, e, t);
    }
    function tb(e, t) {
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
      var i = a != null ? a.concat([e]) : null, o = Et;
      return o |= ua, (rn.mode & Ba) !== nt && (o |= oa), Zp(o, yr, tb.bind(null, t, e), i);
    }
    function Um(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Mm(Et, yr, tb.bind(null, t, e), i);
    }
    function vx(e, t) {
    }
    var jm = vx;
    function MS(e, t) {
      var a = Ju(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Pm(e, t) {
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
    function Fm(e, t) {
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
    function nb(e) {
      var t = Ui(), a = gr, i = a.memoizedState;
      return ab(t, i, e);
    }
    function rb(e) {
      var t = Ui();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return ab(t, a, e);
    }
    function ab(e, t, a) {
      var i = !Vy(sc);
      if (i) {
        if (!Ve(a, t)) {
          var o = ep();
          rn.lanes = Ct(rn.lanes, o), hv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, rv()), e.memoizedState = a, a;
    }
    function hx(e, t, a) {
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
          d > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function zS() {
      var e = km(!1), t = e[0], a = e[1], i = hx.bind(null, a), o = Ju();
      return o.memoizedState = i, [t, i];
    }
    function ib() {
      var e = _S(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function ub() {
      var e = xS(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var ob = !1;
    function mx() {
      return ob;
    }
    function US() {
      var e = Ju(), t = iy(), a = t.identifierPrefix, i;
      if ($r()) {
        var o = k_();
        i = ":" + a + "R" + o;
        var s = Kp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = fx++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Vm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function yx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (lb(e))
        sb(t, o);
      else {
        var s = _C(e, t, o, i);
        if (s !== null) {
          var d = Ma();
          Rr(s, e, i, d), cb(s, t, i);
        }
      }
      fb(e, i);
    }
    function gx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (lb(e))
        sb(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var m;
            m = Me.current, Me.current = cu;
            try {
              var y = t.lastRenderedState, R = d(y, a);
              if (o.hasEagerState = !0, o.eagerState = R, Ve(R, y)) {
                K_(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Me.current = m;
            }
          }
        }
        var w = _C(e, t, o, i);
        if (w !== null) {
          var V = Ma();
          Rr(w, e, i, V), cb(w, t, i);
        }
      }
      fb(e, i);
    }
    function lb(e) {
      var t = e.alternate;
      return e === rn || t !== null && t === rn;
    }
    function sb(e, t) {
      qp = Om = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function cb(e, t, a) {
      if (Jd(a)) {
        var i = t.lanes;
        i = tp(i, e.pendingLanes);
        var o = Ct(i, a);
        t.lanes = o, Dl(e, o);
      }
    }
    function fb(e, t, a) {
      Hu(e, t);
    }
    var Hm = {
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
      unstable_isNewReconciler: me
    }, db = null, pb = null, vb = null, hb = null, eo = null, cu = null, Im = null;
    {
      var jS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      db = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Jt(), qf(t), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Jt(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Jt(), qf(t), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Jt(), qf(a), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Jt(), qf(t), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Jt(), qf(t), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Jt(), qf(t);
          var a = Me.current;
          Me.current = eo;
          try {
            return LS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Jt();
          var i = Me.current;
          Me.current = eo;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Jt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", Jt();
          var t = Me.current;
          Me.current = eo;
          try {
            return km(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Jt(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", Jt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", Jt(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", Jt(), US();
        },
        unstable_isNewReconciler: me
      }, pb = {
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
          return ie = "useEffect", be(), Lm(e, t);
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
          var a = Me.current;
          Me.current = eo;
          try {
            return LS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Me.current;
          Me.current = eo;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), OS(e);
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Me.current;
          Me.current = eo;
          try {
            return km(e);
          } finally {
            Me.current = t;
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
        unstable_isNewReconciler: me
      }, vb = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), Pm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), zm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = Me.current;
          Me.current = cu;
          try {
            return Fm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Me.current;
          Me.current = cu;
          try {
            return RS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Nm();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Me.current;
          Me.current = cu;
          try {
            return _S(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), jm();
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
          return ie = "useSyncExternalStore", be(), Dm(e, t);
        },
        useId: function() {
          return ie = "useId", be(), Vm();
        },
        unstable_isNewReconciler: me
      }, hb = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), Pm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), zm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = Me.current;
          Me.current = Im;
          try {
            return Fm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Me.current;
          Me.current = Im;
          try {
            return TS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Nm();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Me.current;
          Me.current = Im;
          try {
            return xS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), jm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), rb(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), ub();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), Dm(e, t);
        },
        useId: function() {
          return ie = "useId", be(), Vm();
        },
        unstable_isNewReconciler: me
      }, eo = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", vt(), Jt(), MS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", vt(), Jt(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", vt(), Jt(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", vt(), Jt(), NS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", vt(), Jt(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", vt(), Jt(), kS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", vt(), Jt();
          var a = Me.current;
          Me.current = eo;
          try {
            return LS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", vt(), Jt();
          var i = Me.current;
          Me.current = eo;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", vt(), Jt(), OS(e);
        },
        useState: function(e) {
          ie = "useState", vt(), Jt();
          var t = Me.current;
          Me.current = eo;
          try {
            return km(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", vt(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", vt(), Jt(), AS(e);
        },
        useTransition: function() {
          return ie = "useTransition", vt(), Jt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", vt(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", vt(), Jt(), wS(e, t, a);
        },
        useId: function() {
          return ie = "useId", vt(), Jt(), US();
        },
        unstable_isNewReconciler: me
      }, cu = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", vt(), be(), Pm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", vt(), be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", vt(), be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", vt(), be(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", vt(), be(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", vt(), be(), zm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", vt(), be();
          var a = Me.current;
          Me.current = cu;
          try {
            return Fm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", vt(), be();
          var i = Me.current;
          Me.current = cu;
          try {
            return RS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", vt(), be(), Nm();
        },
        useState: function(e) {
          ie = "useState", vt(), be();
          var t = Me.current;
          Me.current = cu;
          try {
            return _S(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", vt(), be(), jm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", vt(), be(), nb(e);
        },
        useTransition: function() {
          return ie = "useTransition", vt(), be(), ib();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", vt(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", vt(), be(), Dm(e, t);
        },
        useId: function() {
          return ie = "useId", vt(), be(), Vm();
        },
        unstable_isNewReconciler: me
      }, Im = {
        readContext: function(e) {
          return jS(), cr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", vt(), be(), Pm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", vt(), be(), cr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", vt(), be(), Jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", vt(), be(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", vt(), be(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", vt(), be(), zm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", vt(), be();
          var a = Me.current;
          Me.current = cu;
          try {
            return Fm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", vt(), be();
          var i = Me.current;
          Me.current = cu;
          try {
            return TS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", vt(), be(), Nm();
        },
        useState: function(e) {
          ie = "useState", vt(), be();
          var t = Me.current;
          Me.current = cu;
          try {
            return xS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", vt(), be(), jm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", vt(), be(), rb(e);
        },
        useTransition: function() {
          return ie = "useTransition", vt(), be(), ub();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", vt(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", vt(), be(), Dm(e, t);
        },
        useId: function() {
          return ie = "useId", vt(), be(), Vm();
        },
        unstable_isNewReconciler: me
      };
    }
    var Jl = p.unstable_now, mb = 0, $m = -1, ev = -1, Bm = -1, PS = !1, Ym = !1;
    function yb() {
      return PS;
    }
    function Sx() {
      Ym = !0;
    }
    function Ex() {
      PS = !1, Ym = !1;
    }
    function Cx() {
      PS = Ym, Ym = !1;
    }
    function gb() {
      return mb;
    }
    function Sb() {
      mb = Jl();
    }
    function FS(e) {
      ev = Jl(), e.actualStartTime < 0 && (e.actualStartTime = Jl());
    }
    function Eb(e) {
      ev = -1;
    }
    function Wm(e, t) {
      if (ev >= 0) {
        var a = Jl() - ev;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ev = -1;
      }
    }
    function to(e) {
      if ($m >= 0) {
        var t = Jl() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Z:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VS(e) {
      if (Bm >= 0) {
        var t = Jl() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Z:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function no() {
      $m = Jl();
    }
    function HS() {
      Bm = Jl();
    }
    function IS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cc(e, t) {
      return {
        value: e,
        source: t,
        stack: ul(t),
        digest: null
      };
    }
    function $S(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function bx(e, t) {
      return !0;
    }
    function BS(e, t) {
      try {
        var a = bx(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === _)
            return;
          console.error(i);
        }
        var m = o ? pt(o) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === O)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = pt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var V = y + `
` + d + `

` + ("" + R);
        console.error(V);
      } catch (P) {
        setTimeout(function() {
          throw P;
        });
      }
    }
    var Rx = typeof WeakMap == "function" ? WeakMap : Map;
    function Cb(e, t, a) {
      var i = Wo(pn, a);
      i.tag = Bg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        hD(o), BS(e, t);
      }, i;
    }
    function YS(e, t, a) {
      var i = Wo(pn, a);
      i.tag = Bg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          MR(e), BS(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        MR(e), BS(e, t), typeof o != "function" && pD(this);
        var y = t.value, R = t.stack;
        this.componentDidCatch(y, {
          componentStack: R !== null ? R : ""
        }), typeof o != "function" && (da(e.lanes, lt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", pt(e) || "Unknown"));
      }), i;
    }
    function bb(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Rx(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = mD.bind(null, e, t, a);
        vr && mv(e, a), t.then(s, s);
      }
    }
    function Tx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function wx(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === nt && (a === N || a === ee || a === ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Rb(e) {
      var t = e;
      do {
        if (t.tag === $ && sx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Tb(e, t, a, i, o) {
      if ((e.mode & xt) === nt) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= ft, a.flags |= Ms, a.flags &= ~(zc | Ta), a.tag === _) {
            var s = a.alternate;
            if (s === null)
              a.tag = Oe;
            else {
              var d = Wo(pn, lt);
              d.tag = mm, ql(a, d, lt);
            }
          }
          a.lanes = Ct(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = o, e;
    }
    function _x(e, t, a, i, o) {
      if (a.flags |= Ta, vr && mv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        wx(a), $r() && a.mode & xt && vC();
        var d = Rb(t);
        if (d !== null) {
          d.flags &= ~zn, Tb(d, t, a, e, o), d.mode & xt && bb(e, s, o), Tx(d, e, s);
          return;
        } else {
          if (!xl(o)) {
            bb(e, s, o), TE();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if ($r() && a.mode & xt) {
        vC();
        var y = Rb(t);
        if (y !== null) {
          (y.flags & ir) === Xe && (y.flags |= zn), Tb(y, t, a, e, o), jg(cc(i, a));
          return;
        }
      }
      i = cc(i, a), iD(i);
      var R = t;
      do {
        switch (R.tag) {
          case O: {
            var w = i;
            R.flags |= ir;
            var V = Kn(o);
            R.lanes = Ct(R.lanes, V);
            var P = Cb(R, w, V);
            Qg(R, P);
            return;
          }
          case _:
            var q = i, X = R.type, ne = R.stateNode;
            if ((R.flags & ft) === Xe && (typeof X.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && !RR(ne))) {
              R.flags |= ir;
              var Ae = Kn(o);
              R.lanes = Ct(R.lanes, Ae);
              var et = YS(R, q, Ae);
              Qg(R, et);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function xx() {
      return null;
    }
    var tv = h.ReactCurrentOwner, fu = !1, WS, nv, QS, GS, qS, fc, KS, Qm;
    WS = {}, nv = {}, QS = {}, GS = {}, qS = {}, fc = !1, KS = {}, Qm = {};
    function ka(e, t, a, i) {
      e === null ? t.child = IC(t, null, a, i) : t.child = Bf(t, e.child, a, i);
    }
    function Ox(e, t, a, i) {
      t.child = Bf(t, e.child, null, i), t.child = Bf(t, null, a, i);
    }
    function wb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && iu(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var d = a.render, m = t.ref, y, R;
      $f(t, o), Vu(t);
      {
        if (tv.current = t, ra(!0), y = Kf(e, t, d, i, m, o), R = Xf(), t.mode & Nn) {
          qn(!0);
          try {
            y = Kf(e, t, d, i, m, o), R = Xf();
          } finally {
            qn(!1);
          }
        }
        ra(!1);
      }
      return Co(), e !== null && !fu ? (QC(e, t, o), Qo(e, t, o)) : ($r() && R && Ng(t), t.flags |= Lu, ka(e, t, y, o), t.child);
    }
    function _b(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (LD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = id(s), t.tag = ve, t.type = d, JS(t, s), xb(e, t, d, i, o);
        }
        {
          var m = s.propTypes;
          m && iu(
            m,
            i,
            // Resolved props
            "prop",
            Vt(s)
          );
        }
        var y = zE(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var R = a.type, w = R.propTypes;
        w && iu(
          w,
          i,
          // Resolved props
          "prop",
          Vt(R)
        );
      }
      var V = e.child, P = iE(e, o);
      if (!P) {
        var q = V.memoizedProps, X = a.compare;
        if (X = X !== null ? X : Ke, X(q, i) && e.ref === t.ref)
          return Qo(e, t, o);
      }
      t.flags |= Lu;
      var ne = mc(V, i);
      return ne.ref = t.ref, ne.return = t, t.child = ne, ne;
    }
    function xb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Je) {
          var d = s, m = d._payload, y = d._init;
          try {
            s = y(m);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && iu(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(s)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Ke(w, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fu = !1, t.pendingProps = i = w, iE(e, o))
            (e.flags & Ms) !== Xe && (fu = !0);
          else
            return t.lanes = e.lanes, Qo(e, t, o);
      }
      return XS(e, t, a, i, o);
    }
    function Ob(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || M)
        if ((t.mode & xt) === nt) {
          var d = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, uy(t, a);
        } else if (da(a, fa)) {
          var V = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = V;
          var P = s !== null ? s.baseLanes : a;
          uy(t, P);
        } else {
          var m = null, y;
          if (s !== null) {
            var R = s.baseLanes;
            y = Ct(R, a);
          } else
            y = a;
          t.lanes = t.childLanes = fa;
          var w = {
            baseLanes: y,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, uy(t, y), null;
        }
      else {
        var q;
        s !== null ? (q = Ct(s.baseLanes, a), t.memoizedState = null) : q = a, uy(t, q);
      }
      return ka(e, t, o, a), t.child;
    }
    function Dx(e, t, a) {
      var i = t.pendingProps;
      return ka(e, t, i, a), t.child;
    }
    function kx(e, t, a) {
      var i = t.pendingProps.children;
      return ka(e, t, i, a), t.child;
    }
    function Nx(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return ka(e, t, s, a), t.child;
    }
    function Db(e, t) {
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
          Vt(a)
        );
      }
      var d;
      {
        var m = jf(t, a, !0);
        d = Pf(t, m);
      }
      var y, R;
      $f(t, o), Vu(t);
      {
        if (tv.current = t, ra(!0), y = Kf(e, t, a, i, d, o), R = Xf(), t.mode & Nn) {
          qn(!0);
          try {
            y = Kf(e, t, a, i, d, o), R = Xf();
          } finally {
            qn(!1);
          }
        }
        ra(!1);
      }
      return Co(), e !== null && !fu ? (QC(e, t, o), Qo(e, t, o)) : ($r() && R && Ng(t), t.flags |= Lu, ka(e, t, y, o), t.child);
    }
    function kb(e, t, a, i, o) {
      {
        switch (GD(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), y = m.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= ir;
            var R = new Error("Simulated error coming from DevTools"), w = Kn(o);
            t.lanes = Ct(t.lanes, w);
            var V = YS(t, cc(R, t), w);
            Qg(t, V);
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
            Vt(a)
          );
        }
      }
      var q;
      Xu(a) ? (q = !0, im(t)) : q = !1, $f(t, o);
      var X = t.stateNode, ne;
      X === null ? (qm(e, t), jC(t, a, i), iS(t, a, i, o), ne = !0) : e === null ? ne = rx(t, a, i, o) : ne = ax(e, t, a, i, o);
      var Ae = ZS(e, t, a, ne, q, o);
      {
        var et = t.stateNode;
        ne && et.props !== i && (fc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pt(t) || "a component"), fc = !0);
      }
      return Ae;
    }
    function ZS(e, t, a, i, o, s) {
      Db(e, t);
      var d = (t.flags & ft) !== Xe;
      if (!i && !d)
        return o && cC(t, a, !1), Qo(e, t, s);
      var m = t.stateNode;
      tv.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, Eb();
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
        Co();
      }
      return t.flags |= Lu, e !== null && d ? Ox(e, t, y, s) : ka(e, t, y, s), t.memoizedState = m.state, o && cC(t, a, !0), t.child;
    }
    function Nb(e) {
      var t = e.stateNode;
      t.pendingContext ? lC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lC(e, t.context, !1), fS(e, t.containerInfo);
    }
    function Mx(e, t, a) {
      if (Nb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      DC(e, t), Em(t, i, null, a);
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
        }, R = t.updateQueue;
        if (R.baseState = y, t.memoizedState = y, t.flags & zn) {
          var w = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Mb(e, t, m, a, w);
        } else if (m !== s) {
          var V = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Mb(e, t, m, a, V);
        } else {
          U_(t);
          var P = IC(t, null, m, a);
          t.child = P;
          for (var q = P; q; )
            q.flags = q.flags & ~gn | Ha, q = q.sibling;
        }
      } else {
        if (Hf(), m === s)
          return Qo(e, t, a);
        ka(e, t, m, a);
      }
      return t.child;
    }
    function Mb(e, t, a, i, o) {
      return Hf(), jg(o), t.flags |= zn, ka(e, t, a, i), t.child;
    }
    function Lx(e, t, a) {
      BC(t), e === null && Ug(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = o.children, m = yg(i, o);
      return m ? d = null : s !== null && yg(i, s) && (t.flags |= Zt), Db(e, t), ka(e, t, d, a), t.child;
    }
    function Ax(e, t) {
      return e === null && Ug(t), null;
    }
    function zx(e, t, a, i) {
      qm(e, t);
      var o = t.pendingProps, s = a, d = s._payload, m = s._init, y = m(d);
      t.type = y;
      var R = t.tag = AD(y), w = lu(y, o), V;
      switch (R) {
        case N:
          return JS(t, y), t.type = y = id(y), V = XS(null, t, y, w, i), V;
        case _:
          return t.type = y = DE(y), V = kb(null, t, y, w, i), V;
        case ee:
          return t.type = y = kE(y), V = wb(null, t, y, w, i), V;
        case fe: {
          if (t.type !== t.elementType) {
            var P = y.propTypes;
            P && iu(
              P,
              w,
              // Resolved for outer only
              "prop",
              Vt(y)
            );
          }
          return V = _b(
            null,
            t,
            y,
            lu(y.type, w),
            // The inner type can have defaults too
            i
          ), V;
        }
      }
      var q = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Je && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function Ux(e, t, a, i, o) {
      qm(e, t), t.tag = _;
      var s;
      return Xu(a) ? (s = !0, im(t)) : s = !1, $f(t, o), jC(t, a, i), iS(t, a, i, o), ZS(null, t, a, !0, s, o);
    }
    function jx(e, t, a, i) {
      qm(e, t);
      var o = t.pendingProps, s;
      {
        var d = jf(t, a, !1);
        s = Pf(t, d);
      }
      $f(t, i);
      var m, y;
      Vu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Vt(a) || "Unknown";
          WS[R] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), WS[R] = !0);
        }
        t.mode & Nn && ou.recordLegacyContextWarning(t, null), ra(!0), tv.current = t, m = Kf(null, t, a, o, s, i), y = Xf(), ra(!1);
      }
      if (Co(), t.flags |= Lu, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var w = Vt(a) || "Unknown";
        nv[w] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), nv[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var V = Vt(a) || "Unknown";
          nv[V] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", V, V, V), nv[V] = !0);
        }
        t.tag = _, t.memoizedState = null, t.updateQueue = null;
        var P = !1;
        return Xu(a) ? (P = !0, im(t)) : P = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Wg(t), UC(t, m), iS(t, a, o, i), ZS(null, t, a, !0, P, i);
      } else {
        if (t.tag = N, t.mode & Nn) {
          qn(!0);
          try {
            m = Kf(null, t, a, o, s, i), y = Xf();
          } finally {
            qn(!1);
          }
        }
        return $r() && y && Ng(t), ka(null, t, m, i), JS(t, a), t.child;
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
          var d = Vt(t) || "Unknown";
          GS[d] || (g("%s: Function components do not support getDerivedStateFromProps.", d), GS[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Vt(t) || "Unknown";
          QS[m] || (g("%s: Function components do not support contextType.", m), QS[m] = !0);
        }
      }
    }
    var eE = {
      dehydrated: null,
      treeContext: null,
      retryLane: Lt
    };
    function tE(e) {
      return {
        baseLanes: e,
        cachePool: xx(),
        transitions: null
      };
    }
    function Px(e, t) {
      var a = null;
      return {
        baseLanes: Ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Fx(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return vS(e, Qp);
    }
    function Vx(e, t) {
      return Ol(e.childLanes, t);
    }
    function Lb(e, t, a) {
      var i = t.pendingProps;
      qD(t) && (t.flags |= ft);
      var o = su.current, s = !1, d = (t.flags & ft) !== Xe;
      if (d || Fx(o, e) ? (s = !0, t.flags &= ~ft) : (e === null || e.memoizedState !== null) && (o = lx(o, WC)), o = Wf(o), Xl(t, o), e === null) {
        Ug(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return Yx(t, y);
        }
        var R = i.children, w = i.fallback;
        if (s) {
          var V = Hx(t, R, w, a), P = t.child;
          return P.memoizedState = tE(a), t.memoizedState = eE, V;
        } else
          return nE(t, R);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var X = q.dehydrated;
          if (X !== null)
            return Wx(e, t, d, i, X, q, a);
        }
        if (s) {
          var ne = i.fallback, Ae = i.children, et = $x(e, t, Ae, ne, a), Ge = t.child, zt = e.child.memoizedState;
          return Ge.memoizedState = zt === null ? tE(a) : Px(zt, a), Ge.childLanes = Vx(e, a), t.memoizedState = eE, et;
        } else {
          var kt = i.children, W = Ix(e, t, kt, a);
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
    function Hx(e, t, a, i) {
      var o = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, m, y;
      return (o & xt) === nt && s !== null ? (m = s, m.childLanes = ae, m.pendingProps = d, e.mode & at && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = is(a, o, i, null)) : (m = rE(d, o), y = is(a, o, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function rE(e, t, a) {
      return AR(e, t, ae, null);
    }
    function Ab(e, t) {
      return mc(e, t);
    }
    function Ix(e, t, a, i) {
      var o = e.child, s = o.sibling, d = Ab(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === nt && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Qt) : m.push(s);
      }
      return t.child = d, d;
    }
    function $x(e, t, a, i, o) {
      var s = t.mode, d = e.child, m = d.sibling, y = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xt) === nt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var w = t.child;
        R = w, R.childLanes = ae, R.pendingProps = y, t.mode & at && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = d.selfBaseDuration, R.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        R = Ab(d, y), R.subtreeFlags = d.subtreeFlags & pr;
      var V;
      return m !== null ? V = mc(m, i) : (V = is(i, s, o, null), V.flags |= gn), V.return = t, R.return = t, R.sibling = V, t.child = R, V;
    }
    function Gm(e, t, a, i) {
      i !== null && jg(i), Bf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, d = nE(t, s);
      return d.flags |= gn, t.memoizedState = null, d;
    }
    function Bx(e, t, a, i, o) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, m = rE(d, s), y = is(i, s, o, null);
      return y.flags |= gn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & xt) !== nt && Bf(t, e.child, null, o), y;
    }
    function Yx(e, t, a) {
      return (e.mode & xt) === nt ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : Cg(t) ? e.lanes = To : e.lanes = fa, null;
    }
    function Wx(e, t, a, i, o, s, d) {
      if (a)
        if (t.flags & zn) {
          t.flags &= ~zn;
          var W = $S(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Gm(e, t, d, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var re = i.children, Q = i.fallback, he = Bx(e, t, re, Q, d), ze = t.child;
          return ze.memoizedState = tE(d), t.memoizedState = eE, he;
        }
      else {
        if (A_(), (t.mode & xt) === nt)
          return Gm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Cg(o)) {
          var m, y, R;
          {
            var w = Xw(o);
            m = w.digest, y = w.message, R = w.stack;
          }
          var V;
          y ? V = new Error(y) : V = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var P = $S(V, m, R);
          return Gm(e, t, d, P);
        }
        var q = da(d, e.childLanes);
        if (fu || q) {
          var X = iy();
          if (X !== null) {
            var ne = Iy(X, d);
            if (ne !== Lt && ne !== s.retryLane) {
              s.retryLane = ne;
              var Ae = pn;
              Xa(e, ne), Rr(X, e, ne, Ae);
            }
          }
          TE();
          var et = $S(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Gm(e, t, d, et);
        } else if (nC(o)) {
          t.flags |= ft, t.child = e.child;
          var Ge = yD.bind(null, e);
          return Zw(o, Ge), null;
        } else {
          j_(t, o, s.treeContext);
          var zt = i.children, kt = nE(t, zt);
          return kt.flags |= Ha, kt;
        }
      }
    }
    function zb(e, t, a) {
      e.lanes = Ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ct(i.lanes, t)), Ig(e.return, t, a);
    }
    function Qx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === $) {
          var o = i.memoizedState;
          o !== null && zb(i, a, e);
        } else if (i.tag === We)
          zb(i, a, e);
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
    function Gx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && xm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qx(e) {
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
    function Kx(e, t) {
      e !== void 0 && !Qm[e] && (e !== "collapsed" && e !== "hidden" ? (Qm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Qm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Ub(e, t) {
      {
        var a = Nt(e), i = !a && typeof ai(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Xx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Ub(e[a], a))
              return;
        } else {
          var i = ai(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), d = 0; !s.done; s = o.next()) {
                if (!Ub(s.value, d))
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
    function jb(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, d = i.children;
      qx(o), Kx(s, o), Xx(d, o), ka(e, t, d, a);
      var m = su.current, y = vS(m, Qp);
      if (y)
        m = hS(m, Qp), t.flags |= ft;
      else {
        var R = e !== null && (e.flags & ft) !== Xe;
        R && Qx(t, t.child, a), m = Wf(m);
      }
      if (Xl(t, m), (t.mode & xt) === nt)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var w = Gx(t.child), V;
            w === null ? (V = t.child, t.child = null) : (V = w.sibling, w.sibling = null), aE(
              t,
              !1,
              // isBackwards
              V,
              w,
              s
            );
            break;
          }
          case "backwards": {
            var P = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var X = q.alternate;
              if (X !== null && xm(X) === null) {
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
    function Zx(e, t, a) {
      fS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Bf(t, null, i, a) : ka(e, t, i, a), t.child;
    }
    var Pb = !1;
    function Jx(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || Pb || (Pb = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && iu(y, s, "prop", "Context.Provider");
      }
      if (wC(t, o, m), d !== null) {
        var R = d.value;
        if (Ve(R, m)) {
          if (d.children === s.children && !rm())
            return Qo(e, t, a);
        } else
          Q_(t, o, a);
      }
      var w = s.children;
      return ka(e, t, w, a), t.child;
    }
    var Fb = !1;
    function eO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Fb || (Fb = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), $f(t, a);
      var d = cr(i);
      Vu(t);
      var m;
      return tv.current = t, ra(!0), m = s(d), ra(!1), Co(), t.flags |= Lu, ka(e, t, m, a), t.child;
    }
    function rv() {
      fu = !0;
    }
    function qm(e, t) {
      (t.mode & xt) === nt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gn);
    }
    function Qo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Eb(), hv(t.lanes), da(a, t.childLanes) ? (ix(e, t), t.child) : null;
    }
    function tO(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Qt) : s.push(e), a.flags |= gn, a;
      }
    }
    function iE(e, t) {
      var a = e.lanes;
      return !!da(a, t);
    }
    function nO(e, t, a) {
      switch (t.tag) {
        case O:
          Nb(t), t.stateNode, Hf();
          break;
        case U:
          BC(t);
          break;
        case _: {
          var i = t.type;
          Xu(i) && im(t);
          break;
        }
        case L:
          fS(t, t.stateNode.containerInfo);
          break;
        case ue: {
          var o = t.memoizedProps.value, s = t.type._context;
          wC(t, s, o);
          break;
        }
        case Z:
          {
            var d = da(a, t.childLanes);
            d && (t.flags |= Et);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case $: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Xl(t, Wf(su.current)), t.flags |= ft, null;
            var R = t.child, w = R.childLanes;
            if (da(a, w))
              return Lb(e, t, a);
            Xl(t, Wf(su.current));
            var V = Qo(e, t, a);
            return V !== null ? V.sibling : null;
          } else
            Xl(t, Wf(su.current));
          break;
        }
        case We: {
          var P = (e.flags & ft) !== Xe, q = da(a, t.childLanes);
          if (P) {
            if (q)
              return jb(e, t, a);
            t.flags |= ft;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Xl(t, su.current), q)
            break;
          return null;
        }
        case De:
        case $e:
          return t.lanes = ae, Ob(e, t, a);
      }
      return Qo(e, t, a);
    }
    function Vb(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return tO(e, t, zE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || rm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fu = !0;
        else {
          var s = iE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Xe)
            return fu = !1, nO(e, t, a);
          (e.flags & Ms) !== Xe ? fu = !0 : fu = !1;
        }
      } else if (fu = !1, $r() && O_(t)) {
        var d = t.index, m = D_();
        pC(t, m, d);
      }
      switch (t.lanes = ae, t.tag) {
        case j:
          return jx(e, t, t.type, a);
        case Ue: {
          var y = t.elementType;
          return zx(e, t, y, a);
        }
        case N: {
          var R = t.type, w = t.pendingProps, V = t.elementType === R ? w : lu(R, w);
          return XS(e, t, R, V, a);
        }
        case _: {
          var P = t.type, q = t.pendingProps, X = t.elementType === P ? q : lu(P, q);
          return kb(e, t, P, X, a);
        }
        case O:
          return Mx(e, t, a);
        case U:
          return Lx(e, t, a);
        case A:
          return Ax(e, t);
        case $:
          return Lb(e, t, a);
        case L:
          return Zx(e, t, a);
        case ee: {
          var ne = t.type, Ae = t.pendingProps, et = t.elementType === ne ? Ae : lu(ne, Ae);
          return wb(e, t, ne, et, a);
        }
        case B:
          return Dx(e, t, a);
        case I:
          return kx(e, t, a);
        case Z:
          return Nx(e, t, a);
        case ue:
          return Jx(e, t, a);
        case le:
          return eO(e, t, a);
        case fe: {
          var Ge = t.type, zt = t.pendingProps, kt = lu(Ge, zt);
          if (t.type !== t.elementType) {
            var W = Ge.propTypes;
            W && iu(
              W,
              kt,
              // Resolved for outer only
              "prop",
              Vt(Ge)
            );
          }
          return kt = lu(Ge.type, kt), _b(e, t, Ge, kt, a);
        }
        case ve:
          return xb(e, t, t.type, t.pendingProps, a);
        case Oe: {
          var re = t.type, Q = t.pendingProps, he = t.elementType === re ? Q : lu(re, Q);
          return Ux(e, t, re, he, a);
        }
        case We:
          return jb(e, t, a);
        case it:
          break;
        case De:
          return Ob(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zf(e) {
      e.flags |= Et;
    }
    function Hb(e) {
      e.flags |= ia, e.flags |= Pd;
    }
    var Ib, uE, $b, Bb;
    Ib = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === U || o.tag === A)
          ww(e, o.stateNode);
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
    }, $b = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, m = dS(), y = xw(d, a, s, i, o, m);
        t.updateQueue = y, y && Zf(t);
      }
    }, Bb = function(e, t, a, i) {
      a !== i && Zf(t);
    };
    function av(e, t) {
      if (!$r())
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = Xe;
      if (t) {
        if ((e.mode & at) !== nt) {
          for (var y = e.selfBaseDuration, R = e.child; R !== null; )
            a = Ct(a, Ct(R.lanes, R.childLanes)), i |= R.subtreeFlags & pr, i |= R.flags & pr, y += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = y;
        } else
          for (var w = e.child; w !== null; )
            a = Ct(a, Ct(w.lanes, w.childLanes)), i |= w.subtreeFlags & pr, i |= w.flags & pr, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & at) !== nt) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = Ct(a, Ct(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = Ct(a, Ct(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function rO(e, t, a) {
      if (I_() && (t.mode & xt) !== nt && (t.flags & ft) === Xe)
        return EC(t), Hf(), t.flags |= zn | Ta | ir, !1;
      var i = cm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (V_(t), Yr(t), (t.mode & at) !== nt) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & ft) === Xe && (t.memoizedState = null), t.flags |= Et, Yr(t), (t.mode & at) !== nt) {
            var d = a !== null;
            if (d) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return CC(), !0;
    }
    function Yb(e, t, a) {
      var i = t.pendingProps;
      switch (Mg(t), t.tag) {
        case j:
        case Ue:
        case ve:
        case N:
        case ee:
        case B:
        case I:
        case Z:
        case le:
        case fe:
          return Yr(t), null;
        case _: {
          var o = t.type;
          return Xu(o) && am(t), Yr(t), null;
        }
        case O: {
          var s = t.stateNode;
          if (Yf(t), Og(t), yS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = cm(t);
            if (d)
              Zf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & zn) !== Xe) && (t.flags |= Va, CC());
            }
          }
          return uE(e, t), Yr(t), null;
        }
        case U: {
          pS(t);
          var y = $C(), R = t.type;
          if (e !== null && t.stateNode != null)
            $b(e, t, R, i, y), e.ref !== t.ref && Hb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var w = dS(), V = cm(t);
            if (V)
              P_(t, y, w) && Zf(t);
            else {
              var P = Tw(R, i, y, w, t);
              Ib(P, t, !1, !1), t.stateNode = P, _w(P, R, i, y) && Zf(t);
            }
            t.ref !== null && Hb(t);
          }
          return Yr(t), null;
        }
        case A: {
          var q = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            Bb(e, t, X, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ne = $C(), Ae = dS(), et = cm(t);
            et ? F_(t) && Zf(t) : t.stateNode = Ow(q, ne, Ae, t);
          }
          return Yr(t), null;
        }
        case $: {
          Qf(t);
          var Ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = rO(e, t, Ge);
            if (!zt)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & ft) !== Xe)
            return t.lanes = a, (t.mode & at) !== nt && IS(t), t;
          var kt = Ge !== null, W = e !== null && e.memoizedState !== null;
          if (kt !== W && kt) {
            var re = t.child;
            if (re.flags |= Au, (t.mode & xt) !== nt) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !oe);
              Q || vS(su.current, WC) ? aD() : TE();
            }
          }
          var he = t.updateQueue;
          if (he !== null && (t.flags |= Et), Yr(t), (t.mode & at) !== nt && kt) {
            var ze = t.child;
            ze !== null && (t.treeBaseDuration -= ze.treeBaseDuration);
          }
          return null;
        }
        case L:
          return Yf(t), uE(e, t), e === null && C_(t.stateNode.containerInfo), Yr(t), null;
        case ue:
          var xe = t.type._context;
          return Hg(xe, t), Yr(t), null;
        case Oe: {
          var ct = t.type;
          return Xu(ct) && am(t), Yr(t), null;
        }
        case We: {
          Qf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Yr(t), null;
          var an = (t.flags & ft) !== Xe, Bt = yt.rendering;
          if (Bt === null)
            if (an)
              av(yt, !1);
            else {
              var er = uD() && (e === null || (e.flags & ft) === Xe);
              if (!er)
                for (var Yt = t.child; Yt !== null; ) {
                  var Gn = xm(Yt);
                  if (Gn !== null) {
                    an = !0, t.flags |= ft, av(yt, !1);
                    var ma = Gn.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= Et), t.subtreeFlags = Xe, ux(t, a), Xl(t, hS(su.current, Qp)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              yt.tail !== null && kn() > dR() && (t.flags |= ft, an = !0, av(yt, !1), t.lanes = Xd);
            }
          else {
            if (!an) {
              var Kr = xm(Bt);
              if (Kr !== null) {
                t.flags |= ft, an = !0;
                var hi = Kr.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= Et), av(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Bt.alternate && !$r())
                  return Yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                kn() * 2 - yt.renderingStartTime > dR() && a !== fa && (t.flags |= ft, an = !0, av(yt, !1), t.lanes = Xd);
            }
            if (yt.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var La = yt.last;
              La !== null ? La.sibling = Bt : t.child = Bt, yt.last = Bt;
            }
          }
          if (yt.tail !== null) {
            var Aa = yt.tail;
            yt.rendering = Aa, yt.tail = Aa.sibling, yt.renderingStartTime = kn(), Aa.sibling = null;
            var ya = su.current;
            return an ? ya = hS(ya, Qp) : ya = Wf(ya), Xl(t, ya), Aa;
          }
          return Yr(t), null;
        }
        case it:
          break;
        case De:
        case $e: {
          RE(t);
          var Zo = t.memoizedState, ud = Zo !== null;
          if (e !== null) {
            var Ev = e.memoizedState, io = Ev !== null;
            io !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !M && (t.flags |= Au);
          }
          return !ud || (t.mode & xt) === nt ? Yr(t) : da(ao, fa) && (Yr(t), t.subtreeFlags & (gn | Et) && (t.flags |= Au)), null;
        }
        case st:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function aO(e, t, a) {
      switch (Mg(t), t.tag) {
        case _: {
          var i = t.type;
          Xu(i) && am(t);
          var o = t.flags;
          return o & ir ? (t.flags = o & ~ir | ft, (t.mode & at) !== nt && IS(t), t) : null;
        }
        case O: {
          t.stateNode, Yf(t), Og(t), yS();
          var s = t.flags;
          return (s & ir) !== Xe && (s & ft) === Xe ? (t.flags = s & ~ir | ft, t) : null;
        }
        case U:
          return pS(t), null;
        case $: {
          Qf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var m = t.flags;
          return m & ir ? (t.flags = m & ~ir | ft, (t.mode & at) !== nt && IS(t), t) : null;
        }
        case We:
          return Qf(t), null;
        case L:
          return Yf(t), null;
        case ue:
          var y = t.type._context;
          return Hg(y, t), null;
        case De:
        case $e:
          return RE(t), null;
        case st:
          return null;
        default:
          return null;
      }
    }
    function Wb(e, t, a) {
      switch (Mg(t), t.tag) {
        case _: {
          var i = t.type.childContextTypes;
          i != null && am(t);
          break;
        }
        case O: {
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
        case $:
          Qf(t);
          break;
        case We:
          Qf(t);
          break;
        case ue:
          var o = t.type._context;
          Hg(o, t);
          break;
        case De:
        case $e:
          RE(t);
          break;
      }
    }
    var Qb = null;
    Qb = /* @__PURE__ */ new Set();
    var Km = !1, Wr = !1, iO = typeof WeakSet == "function" ? WeakSet : Set, He = null, Jf = null, ed = null;
    function uO(e) {
      So(null, function() {
        throw e;
      }), Ud();
    }
    var oO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & at)
        try {
          no(), t.componentWillUnmount();
        } finally {
          to(e);
        }
      else
        t.componentWillUnmount();
    };
    function Gb(e, t) {
      try {
        es(yr, e);
      } catch (a) {
        bn(e, t, a);
      }
    }
    function oE(e, t, a) {
      try {
        oO(e, a);
      } catch (i) {
        bn(e, t, i);
      }
    }
    function lO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        bn(e, t, i);
      }
    }
    function qb(e, t) {
      try {
        Xb(e);
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
            if (ht && bt && e.mode & at)
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
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          a.current = null;
    }
    function Xm(e, t, a) {
      try {
        a();
      } catch (i) {
        bn(e, t, i);
      }
    }
    var Kb = !1;
    function sO(e, t) {
      bw(e.containerInfo), He = t, cO();
      var a = Kb;
      return Kb = !1, a;
    }
    function cO() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        (e.subtreeFlags & El) !== Xe && t !== null ? (t.return = e, He = t) : fO();
      }
    }
    function fO() {
      for (; He !== null; ) {
        var e = He;
        Xt(e);
        try {
          dO(e);
        } catch (a) {
          bn(e, e.return, a);
        }
        An();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function dO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Va) !== Xe) {
        switch (Xt(e), e.tag) {
          case N:
          case ee:
          case ve:
            break;
          case _: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : lu(e.type, i), o);
              {
                var m = Qb;
                d === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", pt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case O: {
            {
              var y = e.stateNode;
              Qw(y.containerInfo);
            }
            break;
          }
          case U:
          case A:
          case L:
          case Oe:
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
            d.destroy = void 0, m !== void 0 && ((e & Br) !== Za ? $c(t) : (e & yr) !== Za && Bc(t), (e & Zu) !== Za && yv(!0), Xm(t, a, m), (e & Zu) !== Za && yv(!1), (e & Br) !== Za ? sh() : (e & yr) !== Za && Cl());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function es(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Za ? lh(t) : (e & yr) !== Za && ch(t);
            var d = s.create;
            (e & Zu) !== Za && yv(!0), s.destroy = d(), (e & Zu) !== Za && yv(!1), (e & Br) !== Za ? Gd() : (e & yr) !== Za && fh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var y = void 0;
                (s.tag & yr) !== Xe ? y = "useLayoutEffect" : (s.tag & Zu) !== Xe ? y = "useInsertionEffect" : y = "useEffect";
                var R = void 0;
                m === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? R = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + m, g("%s must not return anything besides a function, which is used for clean-up.%s", y, R);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function pO(e, t) {
      if ((t.flags & Et) !== Xe)
        switch (t.tag) {
          case Z: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, d = gb(), m = t.alternate === null ? "mount" : "update";
            yb() && (m = "nested-update"), typeof s == "function" && s(o, m, a, d);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case O:
                    var R = y.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                  case Z:
                    var w = y.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function vO(e, t, a, i) {
      if ((a.flags & xr) !== Xe)
        switch (a.tag) {
          case N:
          case ee:
          case ve: {
            if (!Wr)
              if (a.mode & at)
                try {
                  no(), es(yr | mr, a);
                } finally {
                  to(a);
                }
              else
                es(yr | mr, a);
            break;
          }
          case _: {
            var o = a.stateNode;
            if (a.flags & Et && !Wr)
              if (t === null)
                if (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), a.mode & at)
                  try {
                    no(), o.componentDidMount();
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : lu(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), a.mode & at)
                  try {
                    no(), o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !fc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), NC(a, m, o));
            break;
          }
          case O: {
            var y = a.updateQueue;
            if (y !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case U:
                    R = a.child.stateNode;
                    break;
                  case _:
                    R = a.child.stateNode;
                    break;
                }
              NC(a, y, R);
            }
            break;
          }
          case U: {
            var w = a.stateNode;
            if (t === null && a.flags & Et) {
              var V = a.type, P = a.memoizedProps;
              Lw(w, V, P);
            }
            break;
          }
          case A:
            break;
          case L:
            break;
          case Z: {
            {
              var q = a.memoizedProps, X = q.onCommit, ne = q.onRender, Ae = a.stateNode.effectDuration, et = gb(), Ge = t === null ? "mount" : "update";
              yb() && (Ge = "nested-update"), typeof ne == "function" && ne(a.memoizedProps.id, Ge, a.actualDuration, a.treeBaseDuration, a.actualStartTime, et);
              {
                typeof X == "function" && X(a.memoizedProps.id, Ge, Ae, et), fD(a);
                var zt = a.return;
                e:
                  for (; zt !== null; ) {
                    switch (zt.tag) {
                      case O:
                        var kt = zt.stateNode;
                        kt.effectDuration += Ae;
                        break e;
                      case Z:
                        var W = zt.stateNode;
                        W.effectDuration += Ae;
                        break e;
                    }
                    zt = zt.return;
                  }
              }
            }
            break;
          }
          case $: {
            bO(e, a);
            break;
          }
          case We:
          case Oe:
          case it:
          case De:
          case $e:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & ia && Xb(a);
    }
    function hO(e) {
      switch (e.tag) {
        case N:
        case ee:
        case ve: {
          if (e.mode & at)
            try {
              no(), Gb(e, e.return);
            } finally {
              to(e);
            }
          else
            Gb(e, e.return);
          break;
        }
        case _: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && lO(e, e.return, t), qb(e, e.return);
          break;
        }
        case U: {
          qb(e, e.return);
          break;
        }
      }
    }
    function mO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === U) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? $w(o) : Yw(i.stateNode, i.memoizedProps);
            } catch (d) {
              bn(e, e.return, d);
            }
          }
        } else if (i.tag === A) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Bw(s) : Ww(s, i.memoizedProps);
            } catch (d) {
              bn(e, e.return, d);
            }
        } else if (!((i.tag === De || i.tag === $e) && i.memoizedState !== null && i !== e)) {
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
    function Xb(e) {
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
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", pt(e)), t.current = i;
      }
    }
    function yO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Zb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Zb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === U) {
          var a = e.stateNode;
          a !== null && T_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function gO(e) {
      for (var t = e.return; t !== null; ) {
        if (Jb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jb(e) {
      return e.tag === U || e.tag === O || e.tag === L;
    }
    function eR(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Jb(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== U && t.tag !== A && t.tag !== Ye; ) {
            if (t.flags & gn || t.child === null || t.tag === L)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & gn))
            return t.stateNode;
        }
    }
    function SO(e) {
      var t = gO(e);
      switch (t.tag) {
        case U: {
          var a = t.stateNode;
          t.flags & Zt && (tC(a), t.flags &= ~Zt);
          var i = eR(e);
          sE(e, i, a);
          break;
        }
        case O:
        case L: {
          var o = t.stateNode.containerInfo, s = eR(e);
          lE(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function lE(e, t, a) {
      var i = e.tag, o = i === U || i === A;
      if (o) {
        var s = e.stateNode;
        t ? Fw(a, s, t) : jw(a, s);
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
      var i = e.tag, o = i === U || i === A;
      if (o) {
        var s = e.stateNode;
        t ? Pw(a, s, t) : Uw(a, s);
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
    function EO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case U: {
                Qr = i.stateNode, pu = !1;
                break e;
              }
              case O: {
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
        tR(e, t, a), Qr = null, pu = !1;
      }
      yO(a);
    }
    function ts(e, t, a) {
      for (var i = a.child; i !== null; )
        tR(e, t, i), i = i.sibling;
    }
    function tR(e, t, a) {
      switch (Wd(a), a.tag) {
        case U:
          Wr || td(a, t);
        case A: {
          {
            var i = Qr, o = pu;
            Qr = null, ts(e, t, a), Qr = i, pu = o, Qr !== null && (pu ? Hw(Qr, a.stateNode) : Vw(Qr, a.stateNode));
          }
          return;
        }
        case Ye: {
          Qr !== null && (pu ? Iw(Qr, a.stateNode) : Eg(Qr, a.stateNode));
          return;
        }
        case L: {
          {
            var s = Qr, d = pu;
            Qr = a.stateNode.containerInfo, pu = !0, ts(e, t, a), Qr = s, pu = d;
          }
          return;
        }
        case N:
        case ee:
        case fe:
        case ve: {
          if (!Wr) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var R = y.next, w = R;
                do {
                  var V = w, P = V.destroy, q = V.tag;
                  P !== void 0 && ((q & Zu) !== Za ? Xm(a, t, P) : (q & yr) !== Za && (Bc(a), a.mode & at ? (no(), Xm(a, t, P), to(a)) : Xm(a, t, P), Cl())), w = w.next;
                } while (w !== R);
              }
            }
          }
          ts(e, t, a);
          return;
        }
        case _: {
          if (!Wr) {
            td(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && oE(a, t, X);
          }
          ts(e, t, a);
          return;
        }
        case it: {
          ts(e, t, a);
          return;
        }
        case De: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
          ) {
            var ne = Wr;
            Wr = ne || a.memoizedState !== null, ts(e, t, a), Wr = ne;
          } else
            ts(e, t, a);
          break;
        }
        default: {
          ts(e, t, a);
          return;
        }
      }
    }
    function CO(e) {
      e.memoizedState;
    }
    function bO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && o_(s);
          }
        }
      }
    }
    function nR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new iO()), t.forEach(function(i) {
          var o = gD.bind(null, e, i);
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
    function RO(e, t, a) {
      Jf = a, ed = e, Xt(t), rR(t, e), Xt(t), Jf = null, ed = null;
    }
    function vu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            EO(e, t, s);
          } catch (y) {
            bn(s, t, y);
          }
        }
      var d = Cc();
      if (t.subtreeFlags & la)
        for (var m = t.child; m !== null; )
          Xt(m), rR(m, e), m = m.sibling;
      Xt(d);
    }
    function rR(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case N:
        case ee:
        case fe:
        case ve: {
          if (vu(t, e), ro(e), o & Et) {
            try {
              du(Zu | mr, e, e.return), es(Zu | mr, e);
            } catch (ct) {
              bn(e, e.return, ct);
            }
            if (e.mode & at) {
              try {
                no(), du(yr | mr, e, e.return);
              } catch (ct) {
                bn(e, e.return, ct);
              }
              to(e);
            } else
              try {
                du(yr | mr, e, e.return);
              } catch (ct) {
                bn(e, e.return, ct);
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
            if (e.flags & Zt) {
              var s = e.stateNode;
              try {
                tC(s);
              } catch (ct) {
                bn(e, e.return, ct);
              }
            }
            if (o & Et) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, R = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    Aw(d, w, R, y, m, e);
                  } catch (ct) {
                    bn(e, e.return, ct);
                  }
              }
            }
          }
          return;
        }
        case A: {
          if (vu(t, e), ro(e), o & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var V = e.stateNode, P = e.memoizedProps, q = i !== null ? i.memoizedProps : P;
            try {
              zw(V, q, P);
            } catch (ct) {
              bn(e, e.return, ct);
            }
          }
          return;
        }
        case O: {
          if (vu(t, e), ro(e), o & Et && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                u_(t.containerInfo);
              } catch (ct) {
                bn(e, e.return, ct);
              }
          }
          return;
        }
        case L: {
          vu(t, e), ro(e);
          return;
        }
        case $: {
          vu(t, e), ro(e);
          var ne = e.child;
          if (ne.flags & Au) {
            var Ae = ne.stateNode, et = ne.memoizedState, Ge = et !== null;
            if (Ae.isHidden = Ge, Ge) {
              var zt = ne.alternate !== null && ne.alternate.memoizedState !== null;
              zt || rD();
            }
          }
          if (o & Et) {
            try {
              CO(e);
            } catch (ct) {
              bn(e, e.return, ct);
            }
            nR(e);
          }
          return;
        }
        case De: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xt
          ) {
            var W = Wr;
            Wr = W || kt, vu(t, e), Wr = W;
          } else
            vu(t, e);
          if (ro(e), o & Au) {
            var re = e.stateNode, Q = e.memoizedState, he = Q !== null, ze = e;
            if (re.isHidden = he, he && !kt && (ze.mode & xt) !== nt) {
              He = ze;
              for (var xe = ze.child; xe !== null; )
                He = xe, wO(xe), xe = xe.sibling;
            }
            mO(ze, he);
          }
          return;
        }
        case We: {
          vu(t, e), ro(e), o & Et && nR(e);
          return;
        }
        case it:
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
          SO(e);
        } catch (a) {
          bn(e, e.return, a);
        }
        e.flags &= ~gn;
      }
      t & Ha && (e.flags &= ~Ha);
    }
    function TO(e, t, a) {
      Jf = a, ed = t, He = e, aR(e, t, a), Jf = null, ed = null;
    }
    function aR(e, t, a) {
      for (var i = (e.mode & xt) !== nt; He !== null; ) {
        var o = He, s = o.child;
        if (o.tag === De && i) {
          var d = o.memoizedState !== null, m = d || Km;
          if (m) {
            cE(e, t, a);
            continue;
          } else {
            var y = o.alternate, R = y !== null && y.memoizedState !== null, w = R || Wr, V = Km, P = Wr;
            Km = m, Wr = w, Wr && !P && (He = o, _O(o));
            for (var q = s; q !== null; )
              He = q, aR(
                q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), q = q.sibling;
            He = o, Km = V, Wr = P, cE(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & xr) !== Xe && s !== null ? (s.return = o, He = s) : cE(e, t, a);
      }
    }
    function cE(e, t, a) {
      for (; He !== null; ) {
        var i = He;
        if ((i.flags & xr) !== Xe) {
          var o = i.alternate;
          Xt(i);
          try {
            vO(t, o, i, a);
          } catch (d) {
            bn(i, i.return, d);
          }
          An();
        }
        if (i === e) {
          He = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, He = s;
          return;
        }
        He = i.return;
      }
    }
    function wO(e) {
      for (; He !== null; ) {
        var t = He, a = t.child;
        switch (t.tag) {
          case N:
          case ee:
          case fe:
          case ve: {
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
          case De: {
            var o = t.memoizedState !== null;
            if (o) {
              iR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, He = a) : iR(e);
      }
    }
    function iR(e) {
      for (; He !== null; ) {
        var t = He;
        if (t === e) {
          He = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, He = a;
          return;
        }
        He = t.return;
      }
    }
    function _O(e) {
      for (; He !== null; ) {
        var t = He, a = t.child;
        if (t.tag === De) {
          var i = t.memoizedState !== null;
          if (i) {
            uR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, He = a) : uR(e);
      }
    }
    function uR(e) {
      for (; He !== null; ) {
        var t = He;
        Xt(t);
        try {
          hO(t);
        } catch (i) {
          bn(t, t.return, i);
        }
        if (An(), t === e) {
          He = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, He = a;
          return;
        }
        He = t.return;
      }
    }
    function xO(e, t, a, i) {
      He = t, OO(t, e, a, i);
    }
    function OO(e, t, a, i) {
      for (; He !== null; ) {
        var o = He, s = o.child;
        (o.subtreeFlags & Ia) !== Xe && s !== null ? (s.return = o, He = s) : DO(e, t, a, i);
      }
    }
    function DO(e, t, a, i) {
      for (; He !== null; ) {
        var o = He;
        if ((o.flags & wn) !== Xe) {
          Xt(o);
          try {
            kO(t, o, a, i);
          } catch (d) {
            bn(o, o.return, d);
          }
          An();
        }
        if (o === e) {
          He = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, He = s;
          return;
        }
        He = o.return;
      }
    }
    function kO(e, t, a, i) {
      switch (t.tag) {
        case N:
        case ee:
        case ve: {
          if (t.mode & at) {
            HS();
            try {
              es(Br | mr, t);
            } finally {
              VS(t);
            }
          } else
            es(Br | mr, t);
          break;
        }
      }
    }
    function NO(e) {
      He = e, MO();
    }
    function MO() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        if ((He.flags & Qt) !== Xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              He = o, zO(o, e);
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
            He = e;
          }
        }
        (e.subtreeFlags & Ia) !== Xe && t !== null ? (t.return = e, He = t) : LO();
      }
    }
    function LO() {
      for (; He !== null; ) {
        var e = He;
        (e.flags & wn) !== Xe && (Xt(e), AO(e), An());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function AO(e) {
      switch (e.tag) {
        case N:
        case ee:
        case ve: {
          e.mode & at ? (HS(), du(Br | mr, e, e.return), VS(e)) : du(Br | mr, e, e.return);
          break;
        }
      }
    }
    function zO(e, t) {
      for (; He !== null; ) {
        var a = He;
        Xt(a), jO(a, t), An();
        var i = a.child;
        i !== null ? (i.return = a, He = i) : UO(e);
      }
    }
    function UO(e) {
      for (; He !== null; ) {
        var t = He, a = t.sibling, i = t.return;
        if (Zb(t), t === e) {
          He = null;
          return;
        }
        if (a !== null) {
          a.return = i, He = a;
          return;
        }
        He = i;
      }
    }
    function jO(e, t) {
      switch (e.tag) {
        case N:
        case ee:
        case ve: {
          e.mode & at ? (HS(), du(Br, e, t), VS(e)) : du(Br, e, t);
          break;
        }
      }
    }
    function PO(e) {
      switch (e.tag) {
        case N:
        case ee:
        case ve: {
          try {
            es(yr | mr, e);
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
    function FO(e) {
      switch (e.tag) {
        case N:
        case ee:
        case ve: {
          try {
            es(Br | mr, e);
          } catch (t) {
            bn(e, e.return, t);
          }
          break;
        }
      }
    }
    function VO(e) {
      switch (e.tag) {
        case N:
        case ee:
        case ve: {
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
    function HO(e) {
      switch (e.tag) {
        case N:
        case ee:
        case ve:
          try {
            du(Br | mr, e, e.return);
          } catch (t) {
            bn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var iv = Symbol.for;
      iv("selector.component"), iv("selector.has_pseudo_class"), iv("selector.role"), iv("selector.test_id"), iv("selector.text");
    }
    var IO = [];
    function $O() {
      IO.forEach(function(e) {
        return e();
      });
    }
    var BO = h.ReactCurrentActQueue;
    function YO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function oR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && BO.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var WO = Math.ceil, fE = h.ReactCurrentDispatcher, dE = h.ReactCurrentOwner, Gr = h.ReactCurrentBatchConfig, hu = h.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), lR = (
      /*               */
      1
    ), qr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Go = 0, uv = 1, dc = 2, Zm = 3, ov = 4, sR = 5, pE = 6, At = Er, Na = null, In = null, Cr = ae, ao = ae, vE = Yl(ae), br = Go, lv = null, Jm = ae, sv = ae, ey = ae, cv = null, Ja = null, hE = 0, cR = 500, fR = 1 / 0, QO = 500, qo = null;
    function fv() {
      fR = kn() + QO;
    }
    function dR() {
      return fR;
    }
    var ty = !1, mE = null, nd = null, pc = !1, ns = null, dv = ae, yE = [], gE = null, GO = 50, pv = 0, SE = null, EE = !1, ny = !1, qO = 50, rd = 0, ry = null, vv = pn, ay = ae, pR = !1;
    function iy() {
      return Na;
    }
    function Ma() {
      return (At & (qr | ji)) !== Er ? kn() : (vv !== pn || (vv = kn()), vv);
    }
    function rs(e) {
      var t = e.mode;
      if ((t & xt) === nt)
        return lt;
      if ((At & qr) !== Er && Cr !== ae)
        return Kn(Cr);
      var a = Y_() !== B_;
      if (a) {
        if (Gr.transition !== null) {
          var i = Gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ay === Lt && (ay = ep()), ay;
      }
      var o = Wa();
      if (o !== Lt)
        return o;
      var s = Dw();
      return s;
    }
    function KO(e) {
      var t = e.mode;
      return (t & xt) === nt ? lt : Hy();
    }
    function Rr(e, t, a, i) {
      ED(), pR && g("useInsertionEffect must not schedule updates."), EE && (ny = !0), No(e, a, i), (At & qr) !== ae && e === Na ? RD(t) : (vr && ip(e, t, a), TD(t), e === Na && ((At & qr) === Er && (sv = Ct(sv, a)), br === ov && as(e, Cr)), ei(e, i), a === lt && At === Er && (t.mode & xt) === nt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hu.isBatchingLegacy && (fv(), dC()));
    }
    function XO(e, t, a) {
      var i = e.current;
      i.lanes = t, No(e, t, a), ei(e, a);
    }
    function ZO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & qr) !== Er
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      Py(e, t);
      var i = Ps(e, e === Na ? Cr : ae);
      if (i === ae) {
        a !== null && DR(a), e.callbackNode = null, e.callbackPriority = Lt;
        return;
      }
      var o = Wn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hu.current !== null && a !== xE)) {
        a == null && s !== lt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && DR(a);
      var d;
      if (o === lt)
        e.tag === Wl ? (hu.isBatchingLegacy !== null && (hu.didScheduleLegacyUpdate = !0), x_(mR.bind(null, e))) : fC(mR.bind(null, e)), hu.current !== null ? hu.current.push(Ql) : Nw(function() {
          (At & (qr | ji)) === Er && Ql();
        }), d = null;
      else {
        var m;
        switch ($s(i)) {
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
        d = OE(m, vR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = d;
    }
    function vR(e, t) {
      if (Ex(), vv = pn, ay = ae, (At & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Xo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ps(e, e === Na ? Cr : ae);
      if (o === ae)
        return null;
      var s = !Vs(e, o) && !yh(e, o) && !t, d = s ? lD(e, o) : oy(e, o);
      if (d !== Go) {
        if (d === dc) {
          var m = Zd(e);
          m !== ae && (o = m, d = CE(e, m));
        }
        if (d === uv) {
          var y = lv;
          throw vc(e, ae), as(e, o), ei(e, kn()), y;
        }
        if (d === pE)
          as(e, o);
        else {
          var R = !Vs(e, o), w = e.current.alternate;
          if (R && !eD(w)) {
            if (d = oy(e, o), d === dc) {
              var V = Zd(e);
              V !== ae && (o = V, d = CE(e, V));
            }
            if (d === uv) {
              var P = lv;
              throw vc(e, ae), as(e, o), ei(e, kn()), P;
            }
          }
          e.finishedWork = w, e.finishedLanes = o, JO(e, d, o);
        }
      }
      return ei(e, kn()), e.callbackNode === a ? vR.bind(null, e) : null;
    }
    function CE(e, t) {
      var a = cv;
      if (Zn(e)) {
        var i = vc(e, t);
        i.flags |= zn, E_(e.containerInfo);
      }
      var o = oy(e, t);
      if (o !== dc) {
        var s = Ja;
        Ja = a, s !== null && hR(s);
      }
      return o;
    }
    function hR(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function JO(e, t, a) {
      switch (t) {
        case Go:
        case uv:
          throw new Error("Root did not complete. This is a bug in React.");
        case dc: {
          hc(e, Ja, qo);
          break;
        }
        case Zm: {
          if (as(e, a), ff(a) && // do not delay if we're inside an act() scope
          !kR()) {
            var i = hE + cR - kn();
            if (i > 10) {
              var o = Ps(e, ae);
              if (o !== ae)
                break;
              var s = e.suspendedLanes;
              if (!ko(s, a)) {
                Ma(), rp(e, s);
                break;
              }
              e.timeoutHandle = gg(hc.bind(null, e, Ja, qo), i);
              break;
            }
          }
          hc(e, Ja, qo);
          break;
        }
        case ov: {
          if (as(e, a), mh(a))
            break;
          if (!kR()) {
            var d = hh(e, a), m = d, y = kn() - m, R = SD(y) - y;
            if (R > 10) {
              e.timeoutHandle = gg(hc.bind(null, e, Ja, qo), R);
              break;
            }
          }
          hc(e, Ja, qo);
          break;
        }
        case sR: {
          hc(e, Ja, qo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function eD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ns) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], d = s.getSnapshot, m = s.value;
                try {
                  if (!Ve(d(), m))
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
    function as(e, t) {
      t = Ol(t, ey), t = Ol(t, sv), np(e, t);
    }
    function mR(e) {
      if (Cx(), (At & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      Xo();
      var t = Ps(e, ae);
      if (!da(t, lt))
        return ei(e, kn()), null;
      var a = oy(e, t);
      if (e.tag !== Wl && a === dc) {
        var i = Zd(e);
        i !== ae && (t = i, a = CE(e, i));
      }
      if (a === uv) {
        var o = lv;
        throw vc(e, ae), as(e, t), ei(e, kn()), o;
      }
      if (a === pE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hc(e, Ja, qo), ei(e, kn()), null;
    }
    function tD(e, t) {
      t !== ae && (Dl(e, Ct(t, lt)), ei(e, kn()), (At & (qr | ji)) === Er && (fv(), Ql()));
    }
    function bE(e, t) {
      var a = At;
      At |= lR;
      try {
        return e(t);
      } finally {
        At = a, At === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hu.isBatchingLegacy && (fv(), dC());
      }
    }
    function nD(e, t, a, i, o) {
      var s = Wa(), d = Gr.transition;
      try {
        return Gr.transition = null, Xn(Or), e(t, a, i, o);
      } finally {
        Xn(s), Gr.transition = d, At === Er && fv();
      }
    }
    function Ko(e) {
      ns !== null && ns.tag === Wl && (At & (qr | ji)) === Er && Xo();
      var t = At;
      At |= lR;
      var a = Gr.transition, i = Wa();
      try {
        return Gr.transition = null, Xn(Or), e ? e() : void 0;
      } finally {
        Xn(i), Gr.transition = a, At = t, (At & (qr | ji)) === Er && Ql();
      }
    }
    function yR() {
      return (At & (qr | ji)) !== Er;
    }
    function uy(e, t) {
      va(vE, ao, e), ao = Ct(ao, t);
    }
    function RE(e) {
      ao = vE.current, pa(vE, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, kw(a)), In !== null)
        for (var i = In.return; i !== null; ) {
          var o = i.alternate;
          Wb(o, i), i = i.return;
        }
      Na = e;
      var s = mc(e.current, null);
      return In = s, Cr = ao = t, br = Go, lv = null, Jm = ae, sv = ae, ey = ae, cv = null, Ja = null, q_(), ou.discardPendingWarnings(), s;
    }
    function gR(e, t) {
      do {
        var a = In;
        try {
          if (vm(), GC(), An(), dE.current = null, a === null || a.return === null) {
            br = uv, lv = t, In = null;
            return;
          }
          if (ht && a.mode & at && Wm(a, !0), Tt)
            if (Co(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              dh(a, i, Cr);
            } else
              Yc(a, t, Cr);
          _x(e, a.return, a, t, Cr), bR(a);
        } catch (o) {
          t = o, In === a && a !== null ? (a = a.return, In = a) : a = In;
          continue;
        }
        return;
      } while (!0);
    }
    function SR() {
      var e = fE.current;
      return fE.current = Hm, e === null ? Hm : e;
    }
    function ER(e) {
      fE.current = e;
    }
    function rD() {
      hE = kn();
    }
    function hv(e) {
      Jm = Ct(e, Jm);
    }
    function aD() {
      br === Go && (br = Zm);
    }
    function TE() {
      (br === Go || br === Zm || br === dc) && (br = ov), Na !== null && (Fs(Jm) || Fs(sv)) && as(Na, Cr);
    }
    function iD(e) {
      br !== ov && (br = dc), cv === null ? cv = [e] : cv.push(e);
    }
    function uD() {
      return br === Go;
    }
    function oy(e, t) {
      var a = At;
      At |= qr;
      var i = SR();
      if (Na !== e || Cr !== t) {
        if (vr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (mv(e, Cr), o.clear()), vf(e, t);
        }
        qo = up(), vc(e, t);
      }
      fi(t);
      do
        try {
          oD();
          break;
        } catch (s) {
          gR(e, s);
        }
      while (!0);
      if (vm(), At = a, ER(i), In !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Rl(), Na = null, Cr = ae, br;
    }
    function oD() {
      for (; In !== null; )
        CR(In);
    }
    function lD(e, t) {
      var a = At;
      At |= qr;
      var i = SR();
      if (Na !== e || Cr !== t) {
        if (vr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (mv(e, Cr), o.clear()), vf(e, t);
        }
        qo = up(), fv(), vc(e, t);
      }
      fi(t);
      do
        try {
          sD();
          break;
        } catch (s) {
          gR(e, s);
        }
      while (!0);
      return vm(), ER(i), At = a, In !== null ? (As(), Go) : (Rl(), Na = null, Cr = ae, br);
    }
    function sD() {
      for (; In !== null && !Fc(); )
        CR(In);
    }
    function CR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & at) !== nt ? (FS(e), a = wE(t, e, ao), Wm(e, !0)) : a = wE(t, e, ao), An(), e.memoizedProps = e.pendingProps, a === null ? bR(e) : In = a, dE.current = null;
    }
    function bR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ta) === Xe) {
          Xt(t);
          var o = void 0;
          if ((t.mode & at) === nt ? o = Yb(a, t, ao) : (FS(t), o = Yb(a, t, ao), Wm(t, !1)), An(), o !== null) {
            In = o;
            return;
          }
        } else {
          var s = aO(a, t);
          if (s !== null) {
            s.flags &= rh, In = s;
            return;
          }
          if ((t.mode & at) !== nt) {
            Wm(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Ta, i.subtreeFlags = Xe, i.deletions = null;
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
      br === Go && (br = sR);
    }
    function hc(e, t, a) {
      var i = Wa(), o = Gr.transition;
      try {
        Gr.transition = null, Xn(Or), cD(e, t, a, i);
      } finally {
        Gr.transition = o, Xn(i);
      }
      return null;
    }
    function cD(e, t, a, i) {
      do
        Xo();
      while (ns !== null);
      if (CD(), (At & (qr | ji)) !== Er)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Ic(s), o === null)
        return Qd(), null;
      if (s === ae && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Lt;
      var d = Ct(o.lanes, o.childLanes);
      ap(e, d), e === Na && (Na = null, In = null, Cr = ae), ((o.subtreeFlags & Ia) !== Xe || (o.flags & Ia) !== Xe) && (pc || (pc = !0, gE = a, OE(xi, function() {
        return Xo(), null;
      })));
      var m = (o.subtreeFlags & (El | la | xr | Ia)) !== Xe, y = (o.flags & (El | la | xr | Ia)) !== Xe;
      if (m || y) {
        var R = Gr.transition;
        Gr.transition = null;
        var w = Wa();
        Xn(Or);
        var V = At;
        At |= ji, dE.current = null, sO(e, o), Sb(), RO(e, o, s), Rw(e.containerInfo), e.current = o, ph(s), TO(o, e, s), bl(), uh(), At = V, Xn(w), Gr.transition = R;
      } else
        e.current = o, Sb();
      var P = pc;
      if (pc ? (pc = !1, ns = e, dv = s) : (rd = 0, ry = null), d = e.pendingLanes, d === ae && (nd = null), P || _R(e.current, !1), Xi(o.stateNode, i), vr && e.memoizedUpdaters.clear(), $O(), ei(e, kn()), t !== null)
        for (var q = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ne = t[X], Ae = ne.stack, et = ne.digest;
          q(ne.value, {
            componentStack: Ae,
            digest: et
          });
        }
      if (ty) {
        ty = !1;
        var Ge = mE;
        throw mE = null, Ge;
      }
      return da(dv, lt) && e.tag !== Wl && Xo(), d = e.pendingLanes, da(d, lt) ? (Sx(), e === SE ? pv++ : (pv = 0, SE = e)) : pv = 0, Ql(), Qd(), null;
    }
    function Xo() {
      if (ns !== null) {
        var e = $s(dv), t = $y(eu, e), a = Gr.transition, i = Wa();
        try {
          return Gr.transition = null, Xn(t), dD();
        } finally {
          Xn(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function fD(e) {
      yE.push(e), pc || (pc = !0, OE(xi, function() {
        return Xo(), null;
      }));
    }
    function dD() {
      if (ns === null)
        return !1;
      var e = gE;
      gE = null;
      var t = ns, a = dv;
      if (ns = null, dv = ae, (At & (qr | ji)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      EE = !0, ny = !1, vh(a);
      var i = At;
      At |= ji, NO(t.current), xO(t, t.current, a, e);
      {
        var o = yE;
        yE = [];
        for (var s = 0; s < o.length; s++) {
          var d = o[s];
          pO(t, d);
        }
      }
      Ls(), _R(t.current, !0), At = i, Ql(), ny ? t === ry ? rd++ : (rd = 0, ry = t) : rd = 0, EE = !1, ny = !1, Pu(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function RR(e) {
      return nd !== null && nd.has(e);
    }
    function pD(e) {
      nd === null ? nd = /* @__PURE__ */ new Set([e]) : nd.add(e);
    }
    function vD(e) {
      ty || (ty = !0, mE = e);
    }
    var hD = vD;
    function TR(e, t, a) {
      var i = cc(a, t), o = Cb(e, i, lt), s = ql(e, o, lt), d = Ma();
      s !== null && (No(s, lt, d), ei(s, d));
    }
    function bn(e, t, a) {
      if (uO(a), yv(!1), e.tag === O) {
        TR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === O) {
          TR(i, e, a);
          return;
        } else if (i.tag === _) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !RR(s)) {
            var d = cc(a, e), m = YS(i, d, lt), y = ql(i, m, lt), R = Ma();
            y !== null && (No(y, lt, R), ei(y, R));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function mD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Ma();
      rp(e, a), wD(e), Na === e && ko(Cr, a) && (br === ov || br === Zm && ff(Cr) && kn() - hE < cR ? vc(e, ae) : ey = Ct(ey, a)), ei(e, o);
    }
    function wR(e, t) {
      t === Lt && (t = KO(e));
      var a = Ma(), i = Xa(e, t);
      i !== null && (No(i, t, a), ei(i, a));
    }
    function yD(e) {
      var t = e.memoizedState, a = Lt;
      t !== null && (a = t.retryLane), wR(e, a);
    }
    function gD(e, t) {
      var a = Lt, i;
      switch (e.tag) {
        case $:
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
      i !== null && i.delete(t), wR(e, a);
    }
    function SD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : WO(e / 1960) * 1960;
    }
    function ED() {
      if (pv > GO)
        throw pv = 0, SE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rd > qO && (rd = 0, ry = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function CD() {
      ou.flushLegacyContextWarning(), ou.flushPendingUnsafeLifecycleWarnings();
    }
    function _R(e, t) {
      Xt(e), ly(e, oa, VO), t && ly(e, Eo, HO), ly(e, oa, PO), t && ly(e, Eo, FO), An();
    }
    function ly(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Xe ? i = i.child : ((i.flags & t) !== Xe && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var sy = null;
    function xR(e) {
      {
        if ((At & qr) !== Er || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== j && t !== O && t !== _ && t !== N && t !== ee && t !== fe && t !== ve)
          return;
        var a = pt(e) || "ReactComponent";
        if (sy !== null) {
          if (sy.has(a))
            return;
          sy.add(a);
        } else
          sy = /* @__PURE__ */ new Set([a]);
        var i = Dn;
        try {
          Xt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : An();
        }
      }
    }
    var wE;
    {
      var bD = null;
      wE = function(e, t, a) {
        var i = zR(bD, t);
        try {
          return Vb(e, t, a);
        } catch (s) {
          if (z_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (vm(), GC(), Wb(e, t), zR(t, i), t.mode & at && FS(t), So(null, Vb, null, e, t, a), Uy()) {
            var o = Ud();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var OR = !1, _E;
    _E = /* @__PURE__ */ new Set();
    function RD(e) {
      if (na && !mx())
        switch (e.tag) {
          case N:
          case ee:
          case ve: {
            var t = In && pt(In) || "Unknown", a = t;
            if (!_E.has(a)) {
              _E.add(a);
              var i = pt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case _: {
            OR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), OR = !0);
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
    function DR(e) {
      if (e !== xE)
        return ih(e);
    }
    function kR() {
      return hu.current !== null;
    }
    function TD(e) {
      {
        if (e.mode & xt) {
          if (!oR())
            return;
        } else if (!YO() || At !== Er || e.tag !== N && e.tag !== ee && e.tag !== ve)
          return;
        if (hu.current === null) {
          var t = Dn;
          try {
            Xt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, pt(e));
          } finally {
            t ? Xt(e) : An();
          }
        }
      }
    }
    function wD(e) {
      e.tag !== Wl && oR() && hu.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function yv(e) {
      pR = e;
    }
    var Pi = null, ad = null, _D = function(e) {
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
                $$typeof: Le,
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
    function NR(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case _: {
            typeof i == "function" && (o = !0);
            break;
          }
          case N: {
            (typeof i == "function" || s === Je) && (o = !0);
            break;
          }
          case ee: {
            (s === Le || s === Je) && (o = !0);
            break;
          }
          case fe:
          case ve: {
            (s === St || s === Je) && (o = !0);
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
    function MR(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        ad === null && (ad = /* @__PURE__ */ new WeakSet()), ad.add(e);
      }
    }
    var xD = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Xo(), Ko(function() {
          NE(e.current, i, a);
        });
      }
    }, OD = function(e, t) {
      {
        if (e.context !== pi)
          return;
        Xo(), Ko(function() {
          gv(t, e, null, null);
        });
      }
    };
    function NE(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, d = e.tag, m = e.type, y = null;
        switch (d) {
          case N:
          case ve:
          case _:
            y = m;
            break;
          case ee:
            y = m.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, w = !1;
        if (y !== null) {
          var V = Pi(y);
          V !== void 0 && (a.has(V) ? w = !0 : t.has(V) && (d === _ ? w = !0 : R = !0));
        }
        if (ad !== null && (ad.has(e) || i !== null && ad.has(i)) && (w = !0), w && (e._debugNeedsRemount = !0), w || R) {
          var P = Xa(e, lt);
          P !== null && Rr(P, e, lt, pn);
        }
        o !== null && !w && NE(o, t, a), s !== null && NE(s, t, a);
      }
    }
    var DD = function(e, t) {
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
          case N:
          case ve:
          case _:
            m = d;
            break;
          case ee:
            m = d.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? kD(e, a) : i !== null && ME(i, t, a), o !== null && ME(o, t, a);
      }
    }
    function kD(e, t) {
      {
        var a = ND(e, t);
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
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ND(e, t) {
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
        var LR = Object.preventExtensions({});
      } catch {
        LE = !0;
      }
    }
    function MD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Xe, this.subtreeFlags = Xe, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !LE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new MD(e, t, a, i);
    };
    function AE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function LD(e) {
      return typeof e == "function" && !AE(e) && e.defaultProps === void 0;
    }
    function AD(e) {
      if (typeof e == "function")
        return AE(e) ? _ : N;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Le)
          return ee;
        if (t === St)
          return fe;
      }
      return j;
    }
    function mc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Xe, a.subtreeFlags = Xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & pr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case j:
        case N:
        case ve:
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
    function zD(e, t) {
      e.flags &= pr | gn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = Xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function UD(e, t, a) {
      var i;
      return e === um ? (i = xt, t === !0 && (i |= Nn, i |= Ba)) : i = nt, vr && (i |= at), vi(O, null, null, i);
    }
    function zE(e, t, a, i, o, s) {
      var d = j, m = e;
      if (typeof e == "function")
        AE(e) ? (d = _, m = DE(m)) : m = id(m);
      else if (typeof e == "string")
        d = U;
      else
        e:
          switch (e) {
            case Ra:
              return is(a.children, o, s, t);
            case Ei:
              d = I, o |= Nn, (o & xt) !== nt && (o |= Ba);
              break;
            case k:
              return jD(a, o, s, t);
            case gt:
              return PD(a, o, s, t);
            case Mt:
              return FD(a, o, s, t);
            case mn:
              return AR(a, o, s, t);
            case dr:
            case Bn:
            case Ci:
            case tl:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case se:
                    d = ue;
                    break e;
                  case Ee:
                    d = le;
                    break e;
                  case Le:
                    d = ee, m = kE(m);
                    break e;
                  case St:
                    d = fe;
                    break e;
                  case Je:
                    d = Ue, m = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var R = i ? pt(i) : null;
                R && (y += `

Check the render method of \`` + R + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var w = vi(d, a, t, o);
      return w.elementType = e, w.type = m, w.lanes = s, w._debugOwner = i, w;
    }
    function UE(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, d = e.props, m = zE(o, s, d, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function is(e, t, a, i) {
      var o = vi(B, e, i, t);
      return o.lanes = a, o;
    }
    function jD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = vi(Z, e, i, t | at);
      return o.elementType = k, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function PD(e, t, a, i) {
      var o = vi($, e, i, t);
      return o.elementType = gt, o.lanes = a, o;
    }
    function FD(e, t, a, i) {
      var o = vi(We, e, i, t);
      return o.elementType = Mt, o.lanes = a, o;
    }
    function AR(e, t, a, i) {
      var o = vi(De, e, i, t);
      o.elementType = mn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function jE(e, t, a) {
      var i = vi(A, e, null, t);
      return i.lanes = a, i;
    }
    function VD() {
      var e = vi(U, null, null, nt);
      return e.elementType = "DELETED", e;
    }
    function HD(e) {
      var t = vi(Ye, null, null, nt);
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
    function zR(e, t) {
      return e === null && (e = vi(j, null, null, nt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function ID(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Lt, this.eventTimes = pf(ae), this.expirationTimes = pf(pn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = pf(ae), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < En; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case um:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Wl:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function UR(e, t, a, i, o, s, d, m, y, R) {
      var w = new ID(e, t, a, m, y), V = UD(t, s);
      w.current = V, V.stateNode = w;
      {
        var P = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        V.memoizedState = P;
      }
      return Wg(V), w;
    }
    var FE = "18.2.0";
    function $D(e, t, a) {
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
    function jR(e) {
      if (!e)
        return pi;
      var t = Fa(e), a = __(t);
      if (t.tag === _) {
        var i = t.type;
        if (Xu(i))
          return sC(t, i, a);
      }
      return a;
    }
    function BD(e, t) {
      {
        var a = Fa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = $a(a);
        if (o === null)
          return null;
        if (o.mode & Nn) {
          var s = pt(a) || "Component";
          if (!HE[s]) {
            HE[s] = !0;
            var d = Dn;
            try {
              Xt(o), a.mode & Nn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? Xt(d) : An();
            }
          }
        }
        return o.stateNode;
      }
    }
    function PR(e, t, a, i, o, s, d, m) {
      var y = !1, R = null;
      return UR(e, t, y, R, a, i, o, s, d);
    }
    function FR(e, t, a, i, o, s, d, m, y, R) {
      var w = !0, V = UR(a, i, w, e, o, s, d, m, y);
      V.context = jR(null);
      var P = V.current, q = Ma(), X = rs(P), ne = Wo(q, X);
      return ne.callback = t ?? null, ql(P, ne, X), XO(V, X, q), V;
    }
    function gv(e, t, a, i) {
      oh(t, e);
      var o = t.current, s = Ma(), d = rs(o);
      bo(d);
      var m = jR(a);
      t.context === null ? t.context = m : t.pendingContext = m, na && Dn !== null && !VE && (VE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, pt(Dn) || "Unknown"));
      var y = Wo(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var R = ql(o, y, d);
      return R !== null && (Rr(R, o, d, s), Sm(R, o, d)), d;
    }
    function cy(e) {
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
    function YD(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (Zn(t)) {
            var a = Fy(t);
            tD(t, a);
          }
          break;
        }
        case $: {
          Ko(function() {
            var o = Xa(e, lt);
            if (o !== null) {
              var s = Ma();
              Rr(o, e, lt, s);
            }
          });
          var i = lt;
          IE(e, i);
          break;
        }
      }
    }
    function VR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Sh(a.retryLane, t));
    }
    function IE(e, t) {
      VR(e, t);
      var a = e.alternate;
      a && VR(a, t);
    }
    function WD(e) {
      if (e.tag === $) {
        var t = Tl, a = Xa(e, t);
        if (a !== null) {
          var i = Ma();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function QD(e) {
      if (e.tag === $) {
        var t = rs(e), a = Xa(e, t);
        if (a !== null) {
          var i = Ma();
          Rr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function HR(e) {
      var t = ah(e);
      return t === null ? null : t.stateNode;
    }
    var IR = function(e) {
      return null;
    };
    function GD(e) {
      return IR(e);
    }
    var $R = function(e) {
      return !1;
    };
    function qD(e) {
      return $R(e);
    }
    var BR = null, YR = null, WR = null, QR = null, GR = null, qR = null, KR = null, XR = null, ZR = null;
    {
      var JR = function(e, t, a) {
        var i = t[a], o = Nt(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (Nt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = JR(e[i], t, a + 1), o);
      }, e1 = function(e, t) {
        return JR(e, t, 0);
      }, t1 = function(e, t, a, i) {
        var o = t[i], s = Nt(e) ? e.slice() : wt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[o], Nt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = t1(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, n1 = function(e, t, a) {
        if (t.length !== a.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return t1(e, t, a, 0);
      }, r1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Nt(e) ? e.slice() : wt({}, e);
        return s[o] = r1(e[o], t, a + 1, i), s;
      }, a1 = function(e, t, a) {
        return r1(e, t, 0, a);
      }, $E = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      BR = function(e, t, a, i) {
        var o = $E(e, t);
        if (o !== null) {
          var s = a1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Xa(e, lt);
          d !== null && Rr(d, e, lt, pn);
        }
      }, YR = function(e, t, a) {
        var i = $E(e, t);
        if (i !== null) {
          var o = e1(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = wt({}, e.memoizedProps);
          var s = Xa(e, lt);
          s !== null && Rr(s, e, lt, pn);
        }
      }, WR = function(e, t, a, i) {
        var o = $E(e, t);
        if (o !== null) {
          var s = n1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Xa(e, lt);
          d !== null && Rr(d, e, lt, pn);
        }
      }, QR = function(e, t, a) {
        e.pendingProps = a1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, lt);
        i !== null && Rr(i, e, lt, pn);
      }, GR = function(e, t) {
        e.pendingProps = e1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, lt);
        a !== null && Rr(a, e, lt, pn);
      }, qR = function(e, t, a) {
        e.pendingProps = n1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, lt);
        i !== null && Rr(i, e, lt, pn);
      }, KR = function(e) {
        var t = Xa(e, lt);
        t !== null && Rr(t, e, lt, pn);
      }, XR = function(e) {
        IR = e;
      }, ZR = function(e) {
        $R = e;
      };
    }
    function KD(e) {
      var t = $a(e);
      return t === null ? null : t.stateNode;
    }
    function XD(e) {
      return null;
    }
    function ZD() {
      return Dn;
    }
    function JD(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return Yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: BR,
        overrideHookStateDeletePath: YR,
        overrideHookStateRenamePath: WR,
        overrideProps: QR,
        overridePropsDeletePath: GR,
        overridePropsRenamePath: qR,
        setErrorHandler: XR,
        setSuspenseHandler: ZR,
        scheduleUpdate: KR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: KD,
        findFiberByHostInstance: t || XD,
        // React Refresh
        findHostInstancesForRefresh: DD,
        scheduleRefresh: xD,
        scheduleRoot: OD,
        setRefreshHandler: _D,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ZD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: FE
      });
    }
    var i1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function BE(e) {
      this._internalRoot = e;
    }
    fy.prototype.render = BE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : dy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Yn) {
          var i = HR(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      gv(e, t, null, null);
    }, fy.prototype.unmount = BE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        yR() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ko(function() {
          gv(null, e, null, null);
        }), aC(t);
      }
    };
    function ek(e, t) {
      if (!dy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      u1(e);
      var a = !1, i = !1, o = "", s = i1;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Si && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = PR(e, um, null, a, i, o, s);
      Jh(d.current, e);
      var m = e.nodeType === Yn ? e.parentNode : e;
      return _p(m), new BE(d);
    }
    function fy(e) {
      this._internalRoot = e;
    }
    function tk(e) {
      e && xh(e);
    }
    fy.prototype.unstable_scheduleHydration = tk;
    function nk(e, t, a) {
      if (!dy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      u1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, d = !1, m = "", y = i1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var R = FR(t, null, e, um, i, s, d, m, y);
      if (Jh(R.current, e), _p(e), o)
        for (var w = 0; w < o.length; w++) {
          var V = o[w];
          cx(R, V);
        }
      return new fy(R);
    }
    function dy(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === li || e.nodeType === po || !Re));
    }
    function Sv(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === li || e.nodeType === po || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function u1(e) {
      e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), jp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var rk = h.ReactCurrentOwner, o1;
    o1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = HR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = YE(e), o = !!(i && Bl(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function YE(e) {
      return e ? e.nodeType === li ? e.documentElement : e.firstChild : null;
    }
    function l1() {
    }
    function ak(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var P = cy(d);
            s.call(P);
          };
        }
        var d = FR(
          t,
          i,
          e,
          Wl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          l1
        );
        e._reactRootContainer = d, Jh(d.current, e);
        var m = e.nodeType === Yn ? e.parentNode : e;
        return _p(m), Ko(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var P = cy(w);
            R.call(P);
          };
        }
        var w = PR(
          e,
          Wl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          l1
        );
        e._reactRootContainer = w, Jh(w.current, e);
        var V = e.nodeType === Yn ? e.parentNode : e;
        return _p(V), Ko(function() {
          gv(t, w, a, i);
        }), w;
      }
    }
    function ik(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function py(e, t, a, i, o) {
      o1(a), ik(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = ak(a, t, e, o, i);
      else {
        if (d = s, typeof o == "function") {
          var m = o;
          o = function() {
            var y = cy(d);
            m.call(y);
          };
        }
        gv(t, d, e, o);
      }
      return cy(d);
    }
    function uk(e) {
      {
        var t = rk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === aa ? e : BD(e, "findDOMNode");
    }
    function ok(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return py(null, e, t, !0, a);
    }
    function lk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return py(null, e, t, !1, a);
    }
    function sk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return py(e, t, a, !1, i);
    }
    function ck(e) {
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
        return Ko(function() {
          py(null, null, e, !1, function() {
            e._reactRootContainer = null, aC(e);
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
    je(YD), Ch(WD), Ys(QD), lp(Wa), Rh(Is), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), th(pw), Lc(bE, nD, Ko);
    function fk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!dy(t))
        throw new Error("Target container is not a DOM element.");
      return $D(e, t, null, a);
    }
    function dk(e, t, a, i) {
      return sk(e, t, a, i);
    }
    var WE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bl, Uf, em, Mc, xs, bE]
    };
    function pk(e, t) {
      return WE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ek(e, t);
    }
    function vk(e, t, a) {
      return WE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nk(e, t, a);
    }
    function hk(e) {
      return yR() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ko(e);
    }
    var mk = JD({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: FE,
      rendererPackageName: "react-dom"
    });
    if (!mk && en && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var s1 = window.location.protocol;
      /^(https?|file):$/.test(s1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (s1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WE, ni.createPortal = fk, ni.createRoot = pk, ni.findDOMNode = uk, ni.flushSync = hk, ni.hydrate = ok, ni.hydrateRoot = vk, ni.render = lk, ni.unmountComponentAtNode = ck, ni.unstable_batchedUpdates = bE, ni.unstable_renderSubtreeIntoContainer = dk, ni.version = FE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ni;
}
function eT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if ({}.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT);
    } catch (c) {
      console.error(c);
    }
  }
}
({}).NODE_ENV === "production" ? (eT(), s0.exports = _k()) : s0.exports = xk();
var tT = s0.exports, Rv = tT;
if ({}.NODE_ENV === "production")
  wv.createRoot = Rv.createRoot, wv.hydrateRoot = Rv.hydrateRoot;
else {
  var hy = Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  wv.createRoot = function(c, p) {
    hy.usingClientEntryPoint = !0;
    try {
      return Rv.createRoot(c, p);
    } finally {
      hy.usingClientEntryPoint = !1;
    }
  }, wv.hydrateRoot = function(c, p, h) {
    hy.usingClientEntryPoint = !0;
    try {
      return Rv.hydrateRoot(c, p, h);
    } finally {
      hy.usingClientEntryPoint = !1;
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
var S1;
function Ok() {
  if (S1)
    return qE;
  S1 = 1;
  var c = Ot;
  function p(O, L) {
    return O === L && (O !== 0 || 1 / O === 1 / L) || O !== O && L !== L;
  }
  var h = typeof Object.is == "function" ? Object.is : p, S = c.useState, b = c.useEffect, T = c.useLayoutEffect, g = c.useDebugValue;
  function H(O, L) {
    var U = L(), A = S({ inst: { value: U, getSnapshot: L } }), B = A[0].inst, I = A[1];
    return T(function() {
      B.value = U, B.getSnapshot = L, N(B) && I({ inst: B });
    }, [O, U, L]), b(function() {
      return N(B) && I({ inst: B }), O(function() {
        N(B) && I({ inst: B });
      });
    }, [O]), g(U), U;
  }
  function N(O) {
    var L = O.getSnapshot;
    O = O.value;
    try {
      var U = L();
      return !h(O, U);
    } catch {
      return !0;
    }
  }
  function _(O, L) {
    return L();
  }
  var j = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : H;
  return qE.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : j, qE;
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
var E1;
function Dk() {
  return E1 || (E1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Ot, p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(ee) {
      {
        for (var Z = arguments.length, $ = new Array(Z > 1 ? Z - 1 : 0), fe = 1; fe < Z; fe++)
          $[fe - 1] = arguments[fe];
        S("error", ee, $);
      }
    }
    function S(ee, Z, $) {
      {
        var fe = p.ReactDebugCurrentFrame, ve = fe.getStackAddendum();
        ve !== "" && (Z += "%s", $ = $.concat([ve]));
        var Ue = $.map(function(Oe) {
          return String(Oe);
        });
        Ue.unshift("Warning: " + Z), Function.prototype.apply.call(console[ee], console, Ue);
      }
    }
    function b(ee, Z) {
      return ee === Z && (ee !== 0 || 1 / ee === 1 / Z) || ee !== ee && Z !== Z;
    }
    var T = typeof Object.is == "function" ? Object.is : b, g = c.useState, H = c.useEffect, N = c.useLayoutEffect, _ = c.useDebugValue, j = !1, O = !1;
    function L(ee, Z, $) {
      j || c.startTransition !== void 0 && (j = !0, h("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var fe = Z();
      if (!O) {
        var ve = Z();
        T(fe, ve) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), O = !0);
      }
      var Ue = g({
        inst: {
          value: fe,
          getSnapshot: Z
        }
      }), Oe = Ue[0].inst, Ye = Ue[1];
      return N(function() {
        Oe.value = fe, Oe.getSnapshot = Z, U(Oe) && Ye({
          inst: Oe
        });
      }, [ee, fe, Z]), H(function() {
        U(Oe) && Ye({
          inst: Oe
        });
        var We = function() {
          U(Oe) && Ye({
            inst: Oe
          });
        };
        return ee(We);
      }, [ee]), _(fe), fe;
    }
    function U(ee) {
      var Z = ee.getSnapshot, $ = ee.value;
      try {
        var fe = Z();
        return !T($, fe);
      } catch {
        return !0;
      }
    }
    function A(ee, Z, $) {
      return Z();
    }
    var B = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I = !B, le = I ? A : L, ue = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : le;
    KE.useSyncExternalStore = ue, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), KE;
}
({}).NODE_ENV === "production" ? c0.exports = Ok() : c0.exports = Dk();
var nT = c0.exports, f0 = { exports: {} }, XE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C1;
function kk() {
  if (C1)
    return XE;
  C1 = 1;
  var c = Ot, p = nT;
  function h(_, j) {
    return _ === j && (_ !== 0 || 1 / _ === 1 / j) || _ !== _ && j !== j;
  }
  var S = typeof Object.is == "function" ? Object.is : h, b = p.useSyncExternalStore, T = c.useRef, g = c.useEffect, H = c.useMemo, N = c.useDebugValue;
  return XE.useSyncExternalStoreWithSelector = function(_, j, O, L, U) {
    var A = T(null);
    if (A.current === null) {
      var B = { hasValue: !1, value: null };
      A.current = B;
    } else
      B = A.current;
    A = H(function() {
      function le(fe) {
        if (!ue) {
          if (ue = !0, ee = fe, fe = L(fe), U !== void 0 && B.hasValue) {
            var ve = B.value;
            if (U(ve, fe))
              return Z = ve;
          }
          return Z = fe;
        }
        if (ve = Z, S(ee, fe))
          return ve;
        var Ue = L(fe);
        return U !== void 0 && U(ve, Ue) ? ve : (ee = fe, Z = Ue);
      }
      var ue = !1, ee, Z, $ = O === void 0 ? null : O;
      return [function() {
        return le(j());
      }, $ === null ? void 0 : function() {
        return le($());
      }];
    }, [j, O, L, U]);
    var I = b(_, A[0], A[1]);
    return g(function() {
      B.hasValue = !0, B.value = I;
    }, [I]), N(I), I;
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
var b1;
function Nk() {
  return b1 || (b1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Ot, p = nT;
    function h(j, O) {
      return j === O && (j !== 0 || 1 / j === 1 / O) || j !== j && O !== O;
    }
    var S = typeof Object.is == "function" ? Object.is : h, b = p.useSyncExternalStore, T = c.useRef, g = c.useEffect, H = c.useMemo, N = c.useDebugValue;
    function _(j, O, L, U, A) {
      var B = T(null), I;
      B.current === null ? (I = {
        hasValue: !1,
        value: null
      }, B.current = I) : I = B.current;
      var le = H(function() {
        var $ = !1, fe, ve, Ue = function(it) {
          if (!$) {
            $ = !0, fe = it;
            var De = U(it);
            if (A !== void 0 && I.hasValue) {
              var $e = I.value;
              if (A($e, De))
                return ve = $e, $e;
            }
            return ve = De, De;
          }
          var st = fe, ut = ve;
          if (S(st, it))
            return ut;
          var we = U(it);
          return A !== void 0 && A(ut, we) ? ut : (fe = it, ve = we, we);
        }, Oe = L === void 0 ? null : L, Ye = function() {
          return Ue(O());
        }, We = Oe === null ? void 0 : function() {
          return Ue(Oe());
        };
        return [Ye, We];
      }, [O, L, U, A]), ue = le[0], ee = le[1], Z = b(j, ue, ee);
      return g(function() {
        I.hasValue = !0, I.value = Z;
      }, [Z]), N(Z), Z;
    }
    ZE.useSyncExternalStoreWithSelector = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ZE;
}
({}).NODE_ENV === "production" ? f0.exports = kk() : f0.exports = Nk();
var Mk = f0.exports;
function Lk(c) {
  c();
}
let rT = Lk;
const Ak = (c) => rT = c, zk = () => rT, R1 = Symbol.for("react-redux-context"), T1 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Uk() {
  var c;
  if (!Ot.createContext)
    return {};
  const p = (c = T1[R1]) != null ? c : T1[R1] = /* @__PURE__ */ new Map();
  let h = p.get(Ot.createContext);
  return h || (h = Ot.createContext(null), {}.NODE_ENV !== "production" && (h.displayName = "ReactRedux"), p.set(Ot.createContext, h)), h;
}
const cs = /* @__PURE__ */ Uk();
function E0(c = cs) {
  return function() {
    const h = Ot.useContext(c);
    if ({}.NODE_ENV !== "production" && !h)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return h;
  };
}
const aT = /* @__PURE__ */ E0(), jk = () => {
  throw new Error("uSES not initialized!");
};
let iT = jk;
const Pk = (c) => {
  iT = c;
}, Fk = (c, p) => c === p;
function Vk(c = cs) {
  const p = c === cs ? aT : E0(c);
  return function(S, b = {}) {
    const {
      equalityFn: T = Fk,
      stabilityCheck: g = void 0,
      noopCheck: H = void 0
    } = typeof b == "function" ? {
      equalityFn: b
    } : b;
    if ({}.NODE_ENV !== "production") {
      if (!S)
        throw new Error("You must pass a selector to useSelector");
      if (typeof S != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof T != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: N,
      subscription: _,
      getServerState: j,
      stabilityCheck: O,
      noopCheck: L
    } = p(), U = Ot.useRef(!0), A = Ot.useCallback({
      [S.name](I) {
        const le = S(I);
        if ({}.NODE_ENV !== "production") {
          const ue = typeof g > "u" ? O : g;
          if (ue === "always" || ue === "once" && U.current) {
            const Z = S(I);
            if (!T(le, Z)) {
              let $;
              try {
                throw new Error();
              } catch (fe) {
                ({
                  stack: $
                } = fe);
              }
              console.warn("Selector " + (S.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: I,
                selected: le,
                selected2: Z,
                stack: $
              });
            }
          }
          const ee = typeof H > "u" ? L : H;
          if ((ee === "always" || ee === "once" && U.current) && le === I) {
            let Z;
            try {
              throw new Error();
            } catch ($) {
              ({
                stack: Z
              } = $);
            }
            console.warn("Selector " + (S.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: Z
            });
          }
          U.current && (U.current = !1);
        }
        return le;
      }
    }[S.name], [S, O, g]), B = iT(_.addNestedSub, N.getState, j || N.getState, A, T);
    return Ot.useDebugValue(B), B;
  };
}
const oo = /* @__PURE__ */ Vk();
var d0 = { exports: {} }, un = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1;
function Hk() {
  if (w1)
    return un;
  w1 = 1;
  var c = typeof Symbol == "function" && Symbol.for, p = c ? Symbol.for("react.element") : 60103, h = c ? Symbol.for("react.portal") : 60106, S = c ? Symbol.for("react.fragment") : 60107, b = c ? Symbol.for("react.strict_mode") : 60108, T = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, H = c ? Symbol.for("react.context") : 60110, N = c ? Symbol.for("react.async_mode") : 60111, _ = c ? Symbol.for("react.concurrent_mode") : 60111, j = c ? Symbol.for("react.forward_ref") : 60112, O = c ? Symbol.for("react.suspense") : 60113, L = c ? Symbol.for("react.suspense_list") : 60120, U = c ? Symbol.for("react.memo") : 60115, A = c ? Symbol.for("react.lazy") : 60116, B = c ? Symbol.for("react.block") : 60121, I = c ? Symbol.for("react.fundamental") : 60117, le = c ? Symbol.for("react.responder") : 60118, ue = c ? Symbol.for("react.scope") : 60119;
  function ee($) {
    if (typeof $ == "object" && $ !== null) {
      var fe = $.$$typeof;
      switch (fe) {
        case p:
          switch ($ = $.type, $) {
            case N:
            case _:
            case S:
            case T:
            case b:
            case O:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case H:
                case j:
                case A:
                case U:
                case g:
                  return $;
                default:
                  return fe;
              }
          }
        case h:
          return fe;
      }
    }
  }
  function Z($) {
    return ee($) === _;
  }
  return un.AsyncMode = N, un.ConcurrentMode = _, un.ContextConsumer = H, un.ContextProvider = g, un.Element = p, un.ForwardRef = j, un.Fragment = S, un.Lazy = A, un.Memo = U, un.Portal = h, un.Profiler = T, un.StrictMode = b, un.Suspense = O, un.isAsyncMode = function($) {
    return Z($) || ee($) === N;
  }, un.isConcurrentMode = Z, un.isContextConsumer = function($) {
    return ee($) === H;
  }, un.isContextProvider = function($) {
    return ee($) === g;
  }, un.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === p;
  }, un.isForwardRef = function($) {
    return ee($) === j;
  }, un.isFragment = function($) {
    return ee($) === S;
  }, un.isLazy = function($) {
    return ee($) === A;
  }, un.isMemo = function($) {
    return ee($) === U;
  }, un.isPortal = function($) {
    return ee($) === h;
  }, un.isProfiler = function($) {
    return ee($) === T;
  }, un.isStrictMode = function($) {
    return ee($) === b;
  }, un.isSuspense = function($) {
    return ee($) === O;
  }, un.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === S || $ === _ || $ === T || $ === b || $ === O || $ === L || typeof $ == "object" && $ !== null && ($.$$typeof === A || $.$$typeof === U || $.$$typeof === g || $.$$typeof === H || $.$$typeof === j || $.$$typeof === I || $.$$typeof === le || $.$$typeof === ue || $.$$typeof === B);
  }, un.typeOf = ee, un;
}
var on = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1;
function Ik() {
  return _1 || (_1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, p = c ? Symbol.for("react.element") : 60103, h = c ? Symbol.for("react.portal") : 60106, S = c ? Symbol.for("react.fragment") : 60107, b = c ? Symbol.for("react.strict_mode") : 60108, T = c ? Symbol.for("react.profiler") : 60114, g = c ? Symbol.for("react.provider") : 60109, H = c ? Symbol.for("react.context") : 60110, N = c ? Symbol.for("react.async_mode") : 60111, _ = c ? Symbol.for("react.concurrent_mode") : 60111, j = c ? Symbol.for("react.forward_ref") : 60112, O = c ? Symbol.for("react.suspense") : 60113, L = c ? Symbol.for("react.suspense_list") : 60120, U = c ? Symbol.for("react.memo") : 60115, A = c ? Symbol.for("react.lazy") : 60116, B = c ? Symbol.for("react.block") : 60121, I = c ? Symbol.for("react.fundamental") : 60117, le = c ? Symbol.for("react.responder") : 60118, ue = c ? Symbol.for("react.scope") : 60119;
    function ee(ke) {
      return typeof ke == "string" || typeof ke == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ke === S || ke === _ || ke === T || ke === b || ke === O || ke === L || typeof ke == "object" && ke !== null && (ke.$$typeof === A || ke.$$typeof === U || ke.$$typeof === g || ke.$$typeof === H || ke.$$typeof === j || ke.$$typeof === I || ke.$$typeof === le || ke.$$typeof === ue || ke.$$typeof === B);
    }
    function Z(ke) {
      if (typeof ke == "object" && ke !== null) {
        var en = ke.$$typeof;
        switch (en) {
          case p:
            var _e = ke.type;
            switch (_e) {
              case N:
              case _:
              case S:
              case T:
              case b:
              case O:
                return _e;
              default:
                var vn = _e && _e.$$typeof;
                switch (vn) {
                  case H:
                  case j:
                  case A:
                  case U:
                  case g:
                    return vn;
                  default:
                    return en;
                }
            }
          case h:
            return en;
        }
      }
    }
    var $ = N, fe = _, ve = H, Ue = g, Oe = p, Ye = j, We = S, it = A, De = U, $e = h, st = T, ut = b, we = O, me = !1;
    function Ie(ke) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(ke) || Z(ke) === N;
    }
    function M(ke) {
      return Z(ke) === _;
    }
    function oe(ke) {
      return Z(ke) === H;
    }
    function Re(ke) {
      return Z(ke) === g;
    }
    function ot(ke) {
      return typeof ke == "object" && ke !== null && ke.$$typeof === p;
    }
    function Ze(ke) {
      return Z(ke) === j;
    }
    function Tt(ke) {
      return Z(ke) === S;
    }
    function ht(ke) {
      return Z(ke) === A;
    }
    function bt(ke) {
      return Z(ke) === U;
    }
    function mt(ke) {
      return Z(ke) === h;
    }
    function Pt(ke) {
      return Z(ke) === T;
    }
    function tr(ke) {
      return Z(ke) === b;
    }
    function $n(ke) {
      return Z(ke) === O;
    }
    on.AsyncMode = $, on.ConcurrentMode = fe, on.ContextConsumer = ve, on.ContextProvider = Ue, on.Element = Oe, on.ForwardRef = Ye, on.Fragment = We, on.Lazy = it, on.Memo = De, on.Portal = $e, on.Profiler = st, on.StrictMode = ut, on.Suspense = we, on.isAsyncMode = Ie, on.isConcurrentMode = M, on.isContextConsumer = oe, on.isContextProvider = Re, on.isElement = ot, on.isForwardRef = Ze, on.isFragment = Tt, on.isLazy = ht, on.isMemo = bt, on.isPortal = mt, on.isProfiler = Pt, on.isStrictMode = tr, on.isSuspense = $n, on.isValidElementType = ee, on.typeOf = Z;
  }()), on;
}
({}).NODE_ENV === "production" ? d0.exports = Hk() : d0.exports = Ik();
var $k = d0.exports, uT = $k, Bk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, oT = {};
oT[uT.ForwardRef] = Bk;
oT[uT.Memo] = Yk;
var ln = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x1;
function Wk() {
  if (x1)
    return ln;
  x1 = 1;
  var c = Symbol.for("react.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), H = Symbol.for("react.server_context"), N = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), A;
  A = Symbol.for("react.module.reference");
  function B(I) {
    if (typeof I == "object" && I !== null) {
      var le = I.$$typeof;
      switch (le) {
        case c:
          switch (I = I.type, I) {
            case h:
            case b:
            case S:
            case _:
            case j:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case H:
                case g:
                case N:
                case L:
                case O:
                case T:
                  return I;
                default:
                  return le;
              }
          }
        case p:
          return le;
      }
    }
  }
  return ln.ContextConsumer = g, ln.ContextProvider = T, ln.Element = c, ln.ForwardRef = N, ln.Fragment = h, ln.Lazy = L, ln.Memo = O, ln.Portal = p, ln.Profiler = b, ln.StrictMode = S, ln.Suspense = _, ln.SuspenseList = j, ln.isAsyncMode = function() {
    return !1;
  }, ln.isConcurrentMode = function() {
    return !1;
  }, ln.isContextConsumer = function(I) {
    return B(I) === g;
  }, ln.isContextProvider = function(I) {
    return B(I) === T;
  }, ln.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === c;
  }, ln.isForwardRef = function(I) {
    return B(I) === N;
  }, ln.isFragment = function(I) {
    return B(I) === h;
  }, ln.isLazy = function(I) {
    return B(I) === L;
  }, ln.isMemo = function(I) {
    return B(I) === O;
  }, ln.isPortal = function(I) {
    return B(I) === p;
  }, ln.isProfiler = function(I) {
    return B(I) === b;
  }, ln.isStrictMode = function(I) {
    return B(I) === S;
  }, ln.isSuspense = function(I) {
    return B(I) === _;
  }, ln.isSuspenseList = function(I) {
    return B(I) === j;
  }, ln.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === h || I === b || I === S || I === _ || I === j || I === U || typeof I == "object" && I !== null && (I.$$typeof === L || I.$$typeof === O || I.$$typeof === T || I.$$typeof === g || I.$$typeof === N || I.$$typeof === A || I.getModuleId !== void 0);
  }, ln.typeOf = B, ln;
}
var sn = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O1;
function Qk() {
  return O1 || (O1 = 1, {}.NODE_ENV !== "production" && function() {
    var c = Symbol.for("react.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), H = Symbol.for("react.server_context"), N = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), A = !1, B = !1, I = !1, le = !1, ue = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Z(_e) {
      return !!(typeof _e == "string" || typeof _e == "function" || _e === h || _e === b || ue || _e === S || _e === _ || _e === j || le || _e === U || A || B || I || typeof _e == "object" && _e !== null && (_e.$$typeof === L || _e.$$typeof === O || _e.$$typeof === T || _e.$$typeof === g || _e.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _e.$$typeof === ee || _e.getModuleId !== void 0));
    }
    function $(_e) {
      if (typeof _e == "object" && _e !== null) {
        var vn = _e.$$typeof;
        switch (vn) {
          case c:
            var Rn = _e.type;
            switch (Rn) {
              case h:
              case b:
              case S:
              case _:
              case j:
                return Rn;
              default:
                var Tn = Rn && Rn.$$typeof;
                switch (Tn) {
                  case H:
                  case g:
                  case N:
                  case L:
                  case O:
                  case T:
                    return Tn;
                  default:
                    return vn;
                }
            }
          case p:
            return vn;
        }
      }
    }
    var fe = g, ve = T, Ue = c, Oe = N, Ye = h, We = L, it = O, De = p, $e = b, st = S, ut = _, we = j, me = !1, Ie = !1;
    function M(_e) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(_e) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Re(_e) {
      return $(_e) === g;
    }
    function ot(_e) {
      return $(_e) === T;
    }
    function Ze(_e) {
      return typeof _e == "object" && _e !== null && _e.$$typeof === c;
    }
    function Tt(_e) {
      return $(_e) === N;
    }
    function ht(_e) {
      return $(_e) === h;
    }
    function bt(_e) {
      return $(_e) === L;
    }
    function mt(_e) {
      return $(_e) === O;
    }
    function Pt(_e) {
      return $(_e) === p;
    }
    function tr(_e) {
      return $(_e) === b;
    }
    function $n(_e) {
      return $(_e) === S;
    }
    function ke(_e) {
      return $(_e) === _;
    }
    function en(_e) {
      return $(_e) === j;
    }
    sn.ContextConsumer = fe, sn.ContextProvider = ve, sn.Element = Ue, sn.ForwardRef = Oe, sn.Fragment = Ye, sn.Lazy = We, sn.Memo = it, sn.Portal = De, sn.Profiler = $e, sn.StrictMode = st, sn.Suspense = ut, sn.SuspenseList = we, sn.isAsyncMode = M, sn.isConcurrentMode = oe, sn.isContextConsumer = Re, sn.isContextProvider = ot, sn.isElement = Ze, sn.isForwardRef = Tt, sn.isFragment = ht, sn.isLazy = bt, sn.isMemo = mt, sn.isPortal = Pt, sn.isProfiler = tr, sn.isStrictMode = $n, sn.isSuspense = ke, sn.isSuspenseList = en, sn.isValidElementType = Z, sn.typeOf = $;
  }()), sn;
}
({}).NODE_ENV === "production" ? Wk() : Qk();
function Gk() {
  const c = zk();
  let p = null, h = null;
  return {
    clear() {
      p = null, h = null;
    },
    notify() {
      c(() => {
        let S = p;
        for (; S; )
          S.callback(), S = S.next;
      });
    },
    get() {
      let S = [], b = p;
      for (; b; )
        S.push(b), b = b.next;
      return S;
    },
    subscribe(S) {
      let b = !0, T = h = {
        callback: S,
        next: null,
        prev: h
      };
      return T.prev ? T.prev.next = T : p = T, function() {
        !b || p === null || (b = !1, T.next ? T.next.prev = T.prev : h = T.prev, T.prev ? T.prev.next = T.next : p = T.next);
      };
    }
  };
}
const D1 = {
  notify() {
  },
  get: () => []
};
function qk(c, p) {
  let h, S = D1, b = 0, T = !1;
  function g(B) {
    j();
    const I = S.subscribe(B);
    let le = !1;
    return () => {
      le || (le = !0, I(), O());
    };
  }
  function H() {
    S.notify();
  }
  function N() {
    A.onStateChange && A.onStateChange();
  }
  function _() {
    return T;
  }
  function j() {
    b++, h || (h = p ? p.addNestedSub(N) : c.subscribe(N), S = Gk());
  }
  function O() {
    b--, h && b === 0 && (h(), h = void 0, S.clear(), S = D1);
  }
  function L() {
    T || (T = !0, j());
  }
  function U() {
    T && (T = !1, O());
  }
  const A = {
    addNestedSub: g,
    notifyNestedSubs: H,
    handleChangeWrapper: N,
    isSubscribed: _,
    trySubscribe: L,
    tryUnsubscribe: U,
    getListeners: () => S
  };
  return A;
}
const Kk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xk = Kk ? Ot.useLayoutEffect : Ot.useEffect;
function Zk({
  store: c,
  context: p,
  children: h,
  serverState: S,
  stabilityCheck: b = "once",
  noopCheck: T = "once"
}) {
  const g = Ot.useMemo(() => {
    const _ = qk(c);
    return {
      store: c,
      subscription: _,
      getServerState: S ? () => S : void 0,
      stabilityCheck: b,
      noopCheck: T
    };
  }, [c, S, b, T]), H = Ot.useMemo(() => c.getState(), [c]);
  Xk(() => {
    const {
      subscription: _
    } = g;
    return _.onStateChange = _.notifyNestedSubs, _.trySubscribe(), H !== c.getState() && _.notifyNestedSubs(), () => {
      _.tryUnsubscribe(), _.onStateChange = void 0;
    };
  }, [g, H]);
  const N = p || cs;
  return /* @__PURE__ */ Ot.createElement(N.Provider, {
    value: g
  }, h);
}
function lT(c = cs) {
  const p = (
    // @ts-ignore
    c === cs ? aT : (
      // @ts-ignore
      E0(c)
    )
  );
  return function() {
    const {
      store: S
    } = p();
    return S;
  };
}
const Jk = /* @__PURE__ */ lT();
function eN(c = cs) {
  const p = (
    // @ts-ignore
    c === cs ? Jk : lT(c)
  );
  return function() {
    return p().dispatch;
  };
}
const ds = /* @__PURE__ */ eN();
Pk(Mk.useSyncExternalStoreWithSelector);
Ak(tT.unstable_batchedUpdates);
function Ar(c) {
  for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), S = 1; S < p; S++)
    h[S - 1] = arguments[S];
  if ({}.NODE_ENV !== "production") {
    var b = sN[c], T = b ? typeof b == "function" ? b.apply(null, h) : b : "unknown error nr: " + c;
    throw Error("[Immer] " + T);
  }
  throw Error("[Immer] minified error nr: " + c + (h.length ? " " + h.map(function(g) {
    return "'" + g + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function fs(c) {
  return !!c && !!c[Pn];
}
function Jo(c) {
  var p;
  return !!c && (function(h) {
    if (!h || typeof h != "object")
      return !1;
    var S = Object.getPrototypeOf(h);
    if (S === null)
      return !0;
    var b = Object.hasOwnProperty.call(S, "constructor") && S.constructor;
    return b === Object || typeof b == "function" && Function.toString.call(b) === cN;
  }(c) || Array.isArray(c) || !!c[U1] || !!(!((p = c.constructor) === null || p === void 0) && p[U1]) || C0(c) || b0(c));
}
function Sc(c, p, h) {
  h === void 0 && (h = !1), fd(c) === 0 ? (h ? Object.keys : ld)(c).forEach(function(S) {
    h && typeof S == "symbol" || p(S, c[S], c);
  }) : c.forEach(function(S, b) {
    return p(b, S, c);
  });
}
function fd(c) {
  var p = c[Pn];
  return p ? p.i > 3 ? p.i - 4 : p.i : Array.isArray(c) ? 1 : C0(c) ? 2 : b0(c) ? 3 : 0;
}
function od(c, p) {
  return fd(c) === 2 ? c.has(p) : Object.prototype.hasOwnProperty.call(c, p);
}
function tN(c, p) {
  return fd(c) === 2 ? c.get(p) : c[p];
}
function sT(c, p, h) {
  var S = fd(c);
  S === 2 ? c.set(p, h) : S === 3 ? c.add(h) : c[p] = h;
}
function cT(c, p) {
  return c === p ? c !== 0 || 1 / c == 1 / p : c != c && p != p;
}
function C0(c) {
  return oN && c instanceof Map;
}
function b0(c) {
  return lN && c instanceof Set;
}
function us(c) {
  return c.o || c.t;
}
function R0(c) {
  if (Array.isArray(c))
    return Array.prototype.slice.call(c);
  var p = dT(c);
  delete p[Pn];
  for (var h = ld(p), S = 0; S < h.length; S++) {
    var b = h[S], T = p[b];
    T.writable === !1 && (T.writable = !0, T.configurable = !0), (T.get || T.set) && (p[b] = { configurable: !0, writable: !0, enumerable: T.enumerable, value: c[b] });
  }
  return Object.create(Object.getPrototypeOf(c), p);
}
function T0(c, p) {
  return p === void 0 && (p = !1), w0(c) || fs(c) || !Jo(c) || (fd(c) > 1 && (c.set = c.add = c.clear = c.delete = nN), Object.freeze(c), p && Sc(c, function(h, S) {
    return T0(S, !0);
  }, !0)), c;
}
function nN() {
  Ar(2);
}
function w0(c) {
  return c == null || typeof c != "object" || Object.isFrozen(c);
}
function uo(c) {
  var p = m0[c];
  return p || Ar(18, c), p;
}
function rN(c, p) {
  m0[c] || (m0[c] = p);
}
function p0() {
  return {}.NODE_ENV === "production" || sd || Ar(0), sd;
}
function JE(c, p) {
  p && (uo("Patches"), c.u = [], c.s = [], c.v = p);
}
function yy(c) {
  v0(c), c.p.forEach(aN), c.p = null;
}
function v0(c) {
  c === sd && (sd = c.l);
}
function k1(c) {
  return sd = { p: [], l: sd, h: c, m: !0, _: 0 };
}
function aN(c) {
  var p = c[Pn];
  p.i === 0 || p.i === 1 ? p.j() : p.g = !0;
}
function e0(c, p) {
  p._ = p.p.length;
  var h = p.p[0], S = c !== void 0 && c !== h;
  return p.h.O || uo("ES5").S(p, c, S), S ? (h[Pn].P && (yy(p), Ar(4)), Jo(c) && (c = gy(p, c), p.l || Sy(p, c)), p.u && uo("Patches").M(h[Pn].t, c, p.u, p.s)) : c = gy(p, h, []), yy(p), p.u && p.v(p.u, p.s), c !== fT ? c : void 0;
}
function gy(c, p, h) {
  if (w0(p))
    return p;
  var S = p[Pn];
  if (!S)
    return Sc(p, function(H, N) {
      return N1(c, S, p, H, N, h);
    }, !0), p;
  if (S.A !== c)
    return p;
  if (!S.P)
    return Sy(c, S.t, !0), S.t;
  if (!S.I) {
    S.I = !0, S.A._--;
    var b = S.i === 4 || S.i === 5 ? S.o = R0(S.k) : S.o, T = b, g = !1;
    S.i === 3 && (T = new Set(b), b.clear(), g = !0), Sc(T, function(H, N) {
      return N1(c, S, b, H, N, h, g);
    }), Sy(c, b, !1), h && c.u && uo("Patches").N(S, h, c.u, c.s);
  }
  return S.o;
}
function N1(c, p, h, S, b, T, g) {
  if ({}.NODE_ENV !== "production" && b === h && Ar(5), fs(b)) {
    var H = gy(c, b, T && p && p.i !== 3 && !od(p.R, S) ? T.concat(S) : void 0);
    if (sT(h, S, H), !fs(H))
      return;
    c.m = !1;
  } else
    g && h.add(b);
  if (Jo(b) && !w0(b)) {
    if (!c.h.D && c._ < 1)
      return;
    gy(c, b), p && p.A.l || Sy(c, b);
  }
}
function Sy(c, p, h) {
  h === void 0 && (h = !1), !c.l && c.h.D && c.m && T0(p, h);
}
function t0(c, p) {
  var h = c[Pn];
  return (h ? us(h) : c)[p];
}
function M1(c, p) {
  if (p in c)
    for (var h = Object.getPrototypeOf(c); h; ) {
      var S = Object.getOwnPropertyDescriptor(h, p);
      if (S)
        return S;
      h = Object.getPrototypeOf(h);
    }
}
function os(c) {
  c.P || (c.P = !0, c.l && os(c.l));
}
function n0(c) {
  c.o || (c.o = R0(c.t));
}
function h0(c, p, h) {
  var S = C0(p) ? uo("MapSet").F(p, h) : b0(p) ? uo("MapSet").T(p, h) : c.O ? function(b, T) {
    var g = Array.isArray(b), H = { i: g ? 1 : 0, A: T ? T.A : p0(), P: !1, I: !1, R: {}, l: T, t: b, k: null, o: null, j: null, C: !1 }, N = H, _ = xv;
    g && (N = [H], _ = _v);
    var j = Proxy.revocable(N, _), O = j.revoke, L = j.proxy;
    return H.k = L, H.j = O, L;
  }(p, h) : uo("ES5").J(p, h);
  return (h ? h.A : p0()).p.push(S), S;
}
function iN(c) {
  return fs(c) || Ar(22, c), function p(h) {
    if (!Jo(h))
      return h;
    var S, b = h[Pn], T = fd(h);
    if (b) {
      if (!b.P && (b.i < 4 || !uo("ES5").K(b)))
        return b.t;
      b.I = !0, S = L1(h, T), b.I = !1;
    } else
      S = L1(h, T);
    return Sc(S, function(g, H) {
      b && tN(b.t, g) === H || sT(S, g, p(H));
    }), T === 3 ? new Set(S) : S;
  }(c);
}
function L1(c, p) {
  switch (p) {
    case 2:
      return new Map(c);
    case 3:
      return Array.from(c);
  }
  return R0(c);
}
function uN() {
  function c(g, H) {
    var N = T[g];
    return N ? N.enumerable = H : T[g] = N = { configurable: !0, enumerable: H, get: function() {
      var _ = this[Pn];
      return {}.NODE_ENV !== "production" && b(_), xv.get(_, g);
    }, set: function(_) {
      var j = this[Pn];
      ({}).NODE_ENV !== "production" && b(j), xv.set(j, g, _);
    } }, N;
  }
  function p(g) {
    for (var H = g.length - 1; H >= 0; H--) {
      var N = g[H][Pn];
      if (!N.P)
        switch (N.i) {
          case 5:
            S(N) && os(N);
            break;
          case 4:
            h(N) && os(N);
        }
    }
  }
  function h(g) {
    for (var H = g.t, N = g.k, _ = ld(N), j = _.length - 1; j >= 0; j--) {
      var O = _[j];
      if (O !== Pn) {
        var L = H[O];
        if (L === void 0 && !od(H, O))
          return !0;
        var U = N[O], A = U && U[Pn];
        if (A ? A.t !== L : !cT(U, L))
          return !0;
      }
    }
    var B = !!H[Pn];
    return _.length !== ld(H).length + (B ? 0 : 1);
  }
  function S(g) {
    var H = g.k;
    if (H.length !== g.t.length)
      return !0;
    var N = Object.getOwnPropertyDescriptor(H, H.length - 1);
    if (N && !N.get)
      return !0;
    for (var _ = 0; _ < H.length; _++)
      if (!H.hasOwnProperty(_))
        return !0;
    return !1;
  }
  function b(g) {
    g.g && Ar(3, JSON.stringify(us(g)));
  }
  var T = {};
  rN("ES5", { J: function(g, H) {
    var N = Array.isArray(g), _ = function(O, L) {
      if (O) {
        for (var U = Array(L.length), A = 0; A < L.length; A++)
          Object.defineProperty(U, "" + A, c(A, !0));
        return U;
      }
      var B = dT(L);
      delete B[Pn];
      for (var I = ld(B), le = 0; le < I.length; le++) {
        var ue = I[le];
        B[ue] = c(ue, O || !!B[ue].enumerable);
      }
      return Object.create(Object.getPrototypeOf(L), B);
    }(N, g), j = { i: N ? 5 : 4, A: H ? H.A : p0(), P: !1, I: !1, R: {}, l: H, t: g, k: _, o: null, g: !1, C: !1 };
    return Object.defineProperty(_, Pn, { value: j, writable: !0 }), _;
  }, S: function(g, H, N) {
    N ? fs(H) && H[Pn].A === g && p(g.p) : (g.u && function _(j) {
      if (j && typeof j == "object") {
        var O = j[Pn];
        if (O) {
          var L = O.t, U = O.k, A = O.R, B = O.i;
          if (B === 4)
            Sc(U, function(Z) {
              Z !== Pn && (L[Z] !== void 0 || od(L, Z) ? A[Z] || _(U[Z]) : (A[Z] = !0, os(O)));
            }), Sc(L, function(Z) {
              U[Z] !== void 0 || od(U, Z) || (A[Z] = !1, os(O));
            });
          else if (B === 5) {
            if (S(O) && (os(O), A.length = !0), U.length < L.length)
              for (var I = U.length; I < L.length; I++)
                A[I] = !1;
            else
              for (var le = L.length; le < U.length; le++)
                A[le] = !0;
            for (var ue = Math.min(U.length, L.length), ee = 0; ee < ue; ee++)
              U.hasOwnProperty(ee) || (A[ee] = !0), A[ee] === void 0 && _(U[ee]);
          }
        }
      }
    }(g.p[0]), p(g.p));
  }, K: function(g) {
    return g.i === 4 ? h(g) : S(g);
  } });
}
var A1, sd, _0 = typeof Symbol < "u" && typeof Symbol("x") == "symbol", oN = typeof Map < "u", lN = typeof Set < "u", z1 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", fT = _0 ? Symbol.for("immer-nothing") : ((A1 = {})["immer-nothing"] = !0, A1), U1 = _0 ? Symbol.for("immer-draftable") : "__$immer_draftable", Pn = _0 ? Symbol.for("immer-state") : "__$immer_state", sN = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(c) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, cN = "" + Object.prototype.constructor, ld = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(c) {
  return Object.getOwnPropertyNames(c).concat(Object.getOwnPropertySymbols(c));
} : Object.getOwnPropertyNames, dT = Object.getOwnPropertyDescriptors || function(c) {
  var p = {};
  return ld(c).forEach(function(h) {
    p[h] = Object.getOwnPropertyDescriptor(c, h);
  }), p;
}, m0 = {}, xv = { get: function(c, p) {
  if (p === Pn)
    return c;
  var h = us(c);
  if (!od(h, p))
    return function(b, T, g) {
      var H, N = M1(T, g);
      return N ? "value" in N ? N.value : (H = N.get) === null || H === void 0 ? void 0 : H.call(b.k) : void 0;
    }(c, h, p);
  var S = h[p];
  return c.I || !Jo(S) ? S : S === t0(c.t, p) ? (n0(c), c.o[p] = h0(c.A.h, S, c)) : S;
}, has: function(c, p) {
  return p in us(c);
}, ownKeys: function(c) {
  return Reflect.ownKeys(us(c));
}, set: function(c, p, h) {
  var S = M1(us(c), p);
  if (S != null && S.set)
    return S.set.call(c.k, h), !0;
  if (!c.P) {
    var b = t0(us(c), p), T = b == null ? void 0 : b[Pn];
    if (T && T.t === h)
      return c.o[p] = h, c.R[p] = !1, !0;
    if (cT(h, b) && (h !== void 0 || od(c.t, p)))
      return !0;
    n0(c), os(c);
  }
  return c.o[p] === h && (h !== void 0 || p in c.o) || Number.isNaN(h) && Number.isNaN(c.o[p]) || (c.o[p] = h, c.R[p] = !0), !0;
}, deleteProperty: function(c, p) {
  return t0(c.t, p) !== void 0 || p in c.t ? (c.R[p] = !1, n0(c), os(c)) : delete c.R[p], c.o && delete c.o[p], !0;
}, getOwnPropertyDescriptor: function(c, p) {
  var h = us(c), S = Reflect.getOwnPropertyDescriptor(h, p);
  return S && { writable: !0, configurable: c.i !== 1 || p !== "length", enumerable: S.enumerable, value: h[p] };
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
}, _v.set = function(c, p, h) {
  return {}.NODE_ENV !== "production" && p !== "length" && isNaN(parseInt(p)) && Ar(14), xv.set.call(this, c[0], p, h, c[0]);
};
var fN = function() {
  function c(h) {
    var S = this;
    this.O = z1, this.D = !0, this.produce = function(b, T, g) {
      if (typeof b == "function" && typeof T != "function") {
        var H = T;
        T = b;
        var N = S;
        return function(B) {
          var I = this;
          B === void 0 && (B = H);
          for (var le = arguments.length, ue = Array(le > 1 ? le - 1 : 0), ee = 1; ee < le; ee++)
            ue[ee - 1] = arguments[ee];
          return N.produce(B, function(Z) {
            var $;
            return ($ = T).call.apply($, [I, Z].concat(ue));
          });
        };
      }
      var _;
      if (typeof T != "function" && Ar(6), g !== void 0 && typeof g != "function" && Ar(7), Jo(b)) {
        var j = k1(S), O = h0(S, b, void 0), L = !0;
        try {
          _ = T(O), L = !1;
        } finally {
          L ? yy(j) : v0(j);
        }
        return typeof Promise < "u" && _ instanceof Promise ? _.then(function(B) {
          return JE(j, g), e0(B, j);
        }, function(B) {
          throw yy(j), B;
        }) : (JE(j, g), e0(_, j));
      }
      if (!b || typeof b != "object") {
        if ((_ = T(b)) === void 0 && (_ = b), _ === fT && (_ = void 0), S.D && T0(_, !0), g) {
          var U = [], A = [];
          uo("Patches").M(b, _, U, A), g(U, A);
        }
        return _;
      }
      Ar(21, b);
    }, this.produceWithPatches = function(b, T) {
      if (typeof b == "function")
        return function(_) {
          for (var j = arguments.length, O = Array(j > 1 ? j - 1 : 0), L = 1; L < j; L++)
            O[L - 1] = arguments[L];
          return S.produceWithPatches(_, function(U) {
            return b.apply(void 0, [U].concat(O));
          });
        };
      var g, H, N = S.produce(b, T, function(_, j) {
        g = _, H = j;
      });
      return typeof Promise < "u" && N instanceof Promise ? N.then(function(_) {
        return [_, g, H];
      }) : [N, g, H];
    }, typeof (h == null ? void 0 : h.useProxies) == "boolean" && this.setUseProxies(h.useProxies), typeof (h == null ? void 0 : h.autoFreeze) == "boolean" && this.setAutoFreeze(h.autoFreeze);
  }
  var p = c.prototype;
  return p.createDraft = function(h) {
    Jo(h) || Ar(8), fs(h) && (h = iN(h));
    var S = k1(this), b = h0(this, h, void 0);
    return b[Pn].C = !0, v0(S), b;
  }, p.finishDraft = function(h, S) {
    var b = h && h[Pn];
    ({}).NODE_ENV !== "production" && (b && b.C || Ar(9), b.I && Ar(10));
    var T = b.A;
    return JE(T, S), e0(void 0, T);
  }, p.setAutoFreeze = function(h) {
    this.D = h;
  }, p.setUseProxies = function(h) {
    h && !z1 && Ar(20), this.O = h;
  }, p.applyPatches = function(h, S) {
    var b;
    for (b = S.length - 1; b >= 0; b--) {
      var T = S[b];
      if (T.path.length === 0 && T.op === "replace") {
        h = T.value;
        break;
      }
    }
    b > -1 && (S = S.slice(b + 1));
    var g = uo("Patches").$;
    return fs(h) ? g(h, S) : this.produce(h, function(H) {
      return g(H, S);
    });
  }, c;
}(), mi = new fN(), pT = mi.produce;
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
function dN(c, p) {
  if (Ov(c) !== "object" || c === null)
    return c;
  var h = c[Symbol.toPrimitive];
  if (h !== void 0) {
    var S = h.call(c, p || "default");
    if (Ov(S) !== "object")
      return S;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (p === "string" ? String : Number)(c);
}
function pN(c) {
  var p = dN(c, "string");
  return Ov(p) === "symbol" ? p : String(p);
}
function vN(c, p, h) {
  return p = pN(p), p in c ? Object.defineProperty(c, p, {
    value: h,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[p] = h, c;
}
function j1(c, p) {
  var h = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var S = Object.getOwnPropertySymbols(c);
    p && (S = S.filter(function(b) {
      return Object.getOwnPropertyDescriptor(c, b).enumerable;
    })), h.push.apply(h, S);
  }
  return h;
}
function P1(c) {
  for (var p = 1; p < arguments.length; p++) {
    var h = arguments[p] != null ? arguments[p] : {};
    p % 2 ? j1(Object(h), !0).forEach(function(S) {
      vN(c, S, h[S]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(h)) : j1(Object(h)).forEach(function(S) {
      Object.defineProperty(c, S, Object.getOwnPropertyDescriptor(h, S));
    });
  }
  return c;
}
function ga(c) {
  return "Minified Redux error #" + c + "; visit https://redux.js.org/Errors?code=" + c + " for the full message or use the non-minified dev environment for full errors. ";
}
var F1 = function() {
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
function vT(c) {
  if (typeof c != "object" || c === null)
    return !1;
  for (var p = c; Object.getPrototypeOf(p) !== null; )
    p = Object.getPrototypeOf(p);
  return Object.getPrototypeOf(c) === p;
}
function hN(c) {
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
  if (gN(c))
    return "date";
  if (yN(c))
    return "error";
  var h = mN(c);
  switch (h) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return h;
  }
  return p.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function mN(c) {
  return typeof c.constructor == "function" ? c.constructor.name : null;
}
function yN(c) {
  return c instanceof Error || typeof c.message == "string" && c.constructor && typeof c.constructor.stackTraceLimit == "number";
}
function gN(c) {
  return c instanceof Date ? !0 : typeof c.toDateString == "function" && typeof c.getDate == "function" && typeof c.setDate == "function";
}
function yc(c) {
  var p = typeof c;
  return {}.NODE_ENV !== "production" && (p = hN(c)), p;
}
function hT(c, p, h) {
  var S;
  if (typeof p == "function" && typeof h == "function" || typeof h == "function" && typeof arguments[3] == "function")
    throw new Error({}.NODE_ENV === "production" ? ga(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof p == "function" && typeof h > "u" && (h = p, p = void 0), typeof h < "u") {
    if (typeof h != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(1) : "Expected the enhancer to be a function. Instead, received: '" + yc(h) + "'");
    return h(hT)(c, p);
  }
  if (typeof c != "function")
    throw new Error({}.NODE_ENV === "production" ? ga(2) : "Expected the root reducer to be a function. Instead, received: '" + yc(c) + "'");
  var b = c, T = p, g = [], H = g, N = !1;
  function _() {
    H === g && (H = g.slice());
  }
  function j() {
    if (N)
      throw new Error({}.NODE_ENV === "production" ? ga(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return T;
  }
  function O(B) {
    if (typeof B != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(4) : "Expected the listener to be a function. Instead, received: '" + yc(B) + "'");
    if (N)
      throw new Error({}.NODE_ENV === "production" ? ga(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var I = !0;
    return _(), H.push(B), function() {
      if (I) {
        if (N)
          throw new Error({}.NODE_ENV === "production" ? ga(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        I = !1, _();
        var ue = H.indexOf(B);
        H.splice(ue, 1), g = null;
      }
    };
  }
  function L(B) {
    if (!vT(B))
      throw new Error({}.NODE_ENV === "production" ? ga(7) : "Actions must be plain objects. Instead, the actual type was: '" + yc(B) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof B.type > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (N)
      throw new Error({}.NODE_ENV === "production" ? ga(9) : "Reducers may not dispatch actions.");
    try {
      N = !0, T = b(T, B);
    } finally {
      N = !1;
    }
    for (var I = g = H, le = 0; le < I.length; le++) {
      var ue = I[le];
      ue();
    }
    return B;
  }
  function U(B) {
    if (typeof B != "function")
      throw new Error({}.NODE_ENV === "production" ? ga(10) : "Expected the nextReducer to be a function. Instead, received: '" + yc(B));
    b = B, L({
      type: gc.REPLACE
    });
  }
  function A() {
    var B, I = O;
    return B = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(ue) {
        if (typeof ue != "object" || ue === null)
          throw new Error({}.NODE_ENV === "production" ? ga(11) : "Expected the observer to be an object. Instead, received: '" + yc(ue) + "'");
        function ee() {
          ue.next && ue.next(j());
        }
        ee();
        var Z = I(ee);
        return {
          unsubscribe: Z
        };
      }
    }, B[F1] = function() {
      return this;
    }, B;
  }
  return L({
    type: gc.INIT
  }), S = {
    dispatch: L,
    subscribe: O,
    getState: j,
    replaceReducer: U
  }, S[F1] = A, S;
}
function V1(c) {
  typeof console < "u" && typeof console.error == "function" && console.error(c);
  try {
    throw new Error(c);
  } catch {
  }
}
function SN(c, p, h, S) {
  var b = Object.keys(p), T = h && h.type === gc.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (b.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!vT(c))
    return "The " + T + ' has unexpected type of "' + yc(c) + '". Expected argument to be an object with the following ' + ('keys: "' + b.join('", "') + '"');
  var g = Object.keys(c).filter(function(H) {
    return !p.hasOwnProperty(H) && !S[H];
  });
  if (g.forEach(function(H) {
    S[H] = !0;
  }), !(h && h.type === gc.REPLACE) && g.length > 0)
    return "Unexpected " + (g.length > 1 ? "keys" : "key") + " " + ('"' + g.join('", "') + '" found in ' + T + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + b.join('", "') + '". Unexpected keys will be ignored.');
}
function EN(c) {
  Object.keys(c).forEach(function(p) {
    var h = c[p], S = h(void 0, {
      type: gc.INIT
    });
    if (typeof S > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(12) : 'The slice reducer for key "' + p + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof h(void 0, {
      type: gc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error({}.NODE_ENV === "production" ? ga(13) : 'The slice reducer for key "' + p + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + gc.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function CN(c) {
  for (var p = Object.keys(c), h = {}, S = 0; S < p.length; S++) {
    var b = p[S];
    ({}).NODE_ENV !== "production" && typeof c[b] > "u" && V1('No reducer provided for key "' + b + '"'), typeof c[b] == "function" && (h[b] = c[b]);
  }
  var T = Object.keys(h), g;
  ({}).NODE_ENV !== "production" && (g = {});
  var H;
  try {
    EN(h);
  } catch (N) {
    H = N;
  }
  return function(_, j) {
    if (_ === void 0 && (_ = {}), H)
      throw H;
    if ({}.NODE_ENV !== "production") {
      var O = SN(_, h, j, g);
      O && V1(O);
    }
    for (var L = !1, U = {}, A = 0; A < T.length; A++) {
      var B = T[A], I = h[B], le = _[B], ue = I(le, j);
      if (typeof ue > "u") {
        var ee = j && j.type;
        throw new Error({}.NODE_ENV === "production" ? ga(14) : "When called with an action of type " + (ee ? '"' + String(ee) + '"' : "(unknown type)") + ', the slice reducer for key "' + B + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      U[B] = ue, L = L || ue !== le;
    }
    return L = L || T.length !== Object.keys(_).length, L ? U : _;
  };
}
function Ey() {
  for (var c = arguments.length, p = new Array(c), h = 0; h < c; h++)
    p[h] = arguments[h];
  return p.length === 0 ? function(S) {
    return S;
  } : p.length === 1 ? p[0] : p.reduce(function(S, b) {
    return function() {
      return S(b.apply(void 0, arguments));
    };
  });
}
function bN() {
  for (var c = arguments.length, p = new Array(c), h = 0; h < c; h++)
    p[h] = arguments[h];
  return function(S) {
    return function() {
      var b = S.apply(void 0, arguments), T = function() {
        throw new Error({}.NODE_ENV === "production" ? ga(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, g = {
        getState: b.getState,
        dispatch: function() {
          return T.apply(void 0, arguments);
        }
      }, H = p.map(function(N) {
        return N(g);
      });
      return T = Ey.apply(void 0, H)(b.dispatch), P1(P1({}, b), {}, {
        dispatch: T
      });
    };
  };
}
function mT(c) {
  var p = function(S) {
    var b = S.dispatch, T = S.getState;
    return function(g) {
      return function(H) {
        return typeof H == "function" ? H(b, T, c) : g(H);
      };
    };
  };
  return p;
}
var yT = mT();
yT.withExtraArgument = mT;
const H1 = yT;
var gT = globalThis && globalThis.__extends || function() {
  var c = function(p, h) {
    return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, b) {
      S.__proto__ = b;
    } || function(S, b) {
      for (var T in b)
        Object.prototype.hasOwnProperty.call(b, T) && (S[T] = b[T]);
    }, c(p, h);
  };
  return function(p, h) {
    if (typeof h != "function" && h !== null)
      throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
    c(p, h);
    function S() {
      this.constructor = p;
    }
    p.prototype = h === null ? Object.create(h) : (S.prototype = h.prototype, new S());
  };
}(), RN = globalThis && globalThis.__generator || function(c, p) {
  var h = { label: 0, sent: function() {
    if (T[0] & 1)
      throw T[1];
    return T[1];
  }, trys: [], ops: [] }, S, b, T, g;
  return g = { next: H(0), throw: H(1), return: H(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function H(_) {
    return function(j) {
      return N([_, j]);
    };
  }
  function N(_) {
    if (S)
      throw new TypeError("Generator is already executing.");
    for (; h; )
      try {
        if (S = 1, b && (T = _[0] & 2 ? b.return : _[0] ? b.throw || ((T = b.return) && T.call(b), 0) : b.next) && !(T = T.call(b, _[1])).done)
          return T;
        switch (b = 0, T && (_ = [_[0] & 2, T.value]), _[0]) {
          case 0:
          case 1:
            T = _;
            break;
          case 4:
            return h.label++, { value: _[1], done: !1 };
          case 5:
            h.label++, b = _[1], _ = [0];
            continue;
          case 7:
            _ = h.ops.pop(), h.trys.pop();
            continue;
          default:
            if (T = h.trys, !(T = T.length > 0 && T[T.length - 1]) && (_[0] === 6 || _[0] === 2)) {
              h = 0;
              continue;
            }
            if (_[0] === 3 && (!T || _[1] > T[0] && _[1] < T[3])) {
              h.label = _[1];
              break;
            }
            if (_[0] === 6 && h.label < T[1]) {
              h.label = T[1], T = _;
              break;
            }
            if (T && h.label < T[2]) {
              h.label = T[2], h.ops.push(_);
              break;
            }
            T[2] && h.ops.pop(), h.trys.pop();
            continue;
        }
        _ = p.call(c, h);
      } catch (j) {
        _ = [6, j], b = 0;
      } finally {
        S = T = 0;
      }
    if (_[0] & 5)
      throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}, cd = globalThis && globalThis.__spreadArray || function(c, p) {
  for (var h = 0, S = p.length, b = c.length; h < S; h++, b++)
    c[b] = p[h];
  return c;
}, TN = Object.defineProperty, wN = Object.defineProperties, _N = Object.getOwnPropertyDescriptors, I1 = Object.getOwnPropertySymbols, xN = Object.prototype.hasOwnProperty, ON = Object.prototype.propertyIsEnumerable, $1 = function(c, p, h) {
  return p in c ? TN(c, p, { enumerable: !0, configurable: !0, writable: !0, value: h }) : c[p] = h;
}, ls = function(c, p) {
  for (var h in p || (p = {}))
    xN.call(p, h) && $1(c, h, p[h]);
  if (I1)
    for (var S = 0, b = I1(p); S < b.length; S++) {
      var h = b[S];
      ON.call(p, h) && $1(c, h, p[h]);
    }
  return c;
}, a0 = function(c, p) {
  return wN(c, _N(p));
}, DN = function(c, p, h) {
  return new Promise(function(S, b) {
    var T = function(N) {
      try {
        H(h.next(N));
      } catch (_) {
        b(_);
      }
    }, g = function(N) {
      try {
        H(h.throw(N));
      } catch (_) {
        b(_);
      }
    }, H = function(N) {
      return N.done ? S(N.value) : Promise.resolve(N.value).then(T, g);
    };
    H((h = h.apply(c, p)).next());
  });
}, kN = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ey : Ey.apply(null, arguments);
};
function ST(c) {
  if (typeof c != "object" || c === null)
    return !1;
  var p = Object.getPrototypeOf(c);
  if (p === null)
    return !0;
  for (var h = p; Object.getPrototypeOf(h) !== null; )
    h = Object.getPrototypeOf(h);
  return p === h;
}
var NN = function(c) {
  return c && typeof c.match == "function";
};
function ss(c, p) {
  function h() {
    for (var S = [], b = 0; b < arguments.length; b++)
      S[b] = arguments[b];
    if (p) {
      var T = p.apply(void 0, S);
      if (!T)
        throw new Error("prepareAction did not return an object");
      return ls(ls({
        type: c,
        payload: T.payload
      }, "meta" in T && { meta: T.meta }), "error" in T && { error: T.error });
    }
    return { type: c, payload: S[0] };
  }
  return h.toString = function() {
    return "" + c;
  }, h.type = c, h.match = function(S) {
    return S.type === c;
  }, h;
}
function MN(c) {
  return typeof c == "function" && "type" in c && NN(c);
}
function LN(c) {
  var p = c ? ("" + c).split("/") : [], h = p[p.length - 1] || "actionCreator";
  return 'Detected an action creator with type "' + (c || "unknown") + `" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(` + h + "())` instead of `dispatch(" + h + ")`. This is necessary even if the action has no payload.";
}
function AN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(S) {
        return function(b) {
          return S(b);
        };
      };
    };
  var p = c.isActionCreator, h = p === void 0 ? MN : p;
  return function() {
    return function(S) {
      return function(b) {
        return h(b) && console.warn(LN(b.type)), S(b);
      };
    };
  };
}
function ET(c, p) {
  var h = 0;
  return {
    measureTime: function(S) {
      var b = Date.now();
      try {
        return S();
      } finally {
        var T = Date.now();
        h += T - b;
      }
    },
    warnIfExceeded: function() {
      h > c && console.warn(p + " took " + h + "ms, which is more than the warning threshold of " + c + `ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var zN = (
  /** @class */
  function(c) {
    gT(p, c);
    function p() {
      for (var h = [], S = 0; S < arguments.length; S++)
        h[S] = arguments[S];
      var b = c.apply(this, h) || this;
      return Object.setPrototypeOf(b, p.prototype), b;
    }
    return Object.defineProperty(p, Symbol.species, {
      get: function() {
        return p;
      },
      enumerable: !1,
      configurable: !0
    }), p.prototype.concat = function() {
      for (var h = [], S = 0; S < arguments.length; S++)
        h[S] = arguments[S];
      return c.prototype.concat.apply(this, h);
    }, p.prototype.prepend = function() {
      for (var h = [], S = 0; S < arguments.length; S++)
        h[S] = arguments[S];
      return h.length === 1 && Array.isArray(h[0]) ? new (p.bind.apply(p, cd([void 0], h[0].concat(this))))() : new (p.bind.apply(p, cd([void 0], h.concat(this))))();
    }, p;
  }(Array)
), UN = (
  /** @class */
  function(c) {
    gT(p, c);
    function p() {
      for (var h = [], S = 0; S < arguments.length; S++)
        h[S] = arguments[S];
      var b = c.apply(this, h) || this;
      return Object.setPrototypeOf(b, p.prototype), b;
    }
    return Object.defineProperty(p, Symbol.species, {
      get: function() {
        return p;
      },
      enumerable: !1,
      configurable: !0
    }), p.prototype.concat = function() {
      for (var h = [], S = 0; S < arguments.length; S++)
        h[S] = arguments[S];
      return c.prototype.concat.apply(this, h);
    }, p.prototype.prepend = function() {
      for (var h = [], S = 0; S < arguments.length; S++)
        h[S] = arguments[S];
      return h.length === 1 && Array.isArray(h[0]) ? new (p.bind.apply(p, cd([void 0], h[0].concat(this))))() : new (p.bind.apply(p, cd([void 0], h.concat(this))))();
    }, p;
  }(Array)
);
function y0(c) {
  return Jo(c) ? pT(c, function() {
  }) : c;
}
var jN = {}.NODE_ENV === "production", B1 = "Invariant failed";
function Y1(c, p) {
  if (!c)
    throw jN ? new Error(B1) : new Error(B1 + ": " + (p || ""));
}
function PN(c, p, h, S) {
  return JSON.stringify(c, FN(p, S), h);
}
function FN(c, p) {
  var h = [], S = [];
  return p || (p = function(b, T) {
    return h[0] === T ? "[Circular ~]" : "[Circular ~." + S.slice(0, h.indexOf(T)).join(".") + "]";
  }), function(b, T) {
    if (h.length > 0) {
      var g = h.indexOf(this);
      ~g ? h.splice(g + 1) : h.push(this), ~g ? S.splice(g, 1 / 0, b) : S.push(b), ~h.indexOf(T) && (T = p.call(this, b, T));
    } else
      h.push(T);
    return c == null ? T : c.call(this, b, T);
  };
}
function VN(c) {
  return typeof c != "object" || c == null || Object.isFrozen(c);
}
function HN(c, p, h) {
  var S = CT(c, p, h);
  return {
    detectMutations: function() {
      return bT(c, p, S, h);
    }
  };
}
function CT(c, p, h, S, b) {
  p === void 0 && (p = []), S === void 0 && (S = ""), b === void 0 && (b = /* @__PURE__ */ new Set());
  var T = { value: h };
  if (!c(h) && !b.has(h)) {
    b.add(h), T.children = {};
    for (var g in h) {
      var H = S ? S + "." + g : g;
      p.length && p.indexOf(H) !== -1 || (T.children[g] = CT(c, p, h[g], H));
    }
  }
  return T;
}
function bT(c, p, h, S, b, T) {
  p === void 0 && (p = []), b === void 0 && (b = !1), T === void 0 && (T = "");
  var g = h ? h.value : void 0, H = g === S;
  if (b && !H && !Number.isNaN(S))
    return { wasMutated: !0, path: T };
  if (c(g) || c(S))
    return { wasMutated: !1 };
  var N = {};
  for (var _ in h.children)
    N[_] = !0;
  for (var _ in S)
    N[_] = !0;
  var j = p.length > 0, O = function(U) {
    var A = T ? T + "." + U : U;
    if (j) {
      var B = p.some(function(le) {
        return le instanceof RegExp ? le.test(A) : A === le;
      });
      if (B)
        return "continue";
    }
    var I = bT(c, p, h.children[U], S[U], H, A);
    if (I.wasMutated)
      return { value: I };
  };
  for (var _ in N) {
    var L = O(_);
    if (typeof L == "object")
      return L.value;
  }
  return { wasMutated: !1 };
}
function IN(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(N) {
        return function(_) {
          return N(_);
        };
      };
    };
  var p = c.isImmutable, h = p === void 0 ? VN : p, S = c.ignoredPaths, b = c.warnAfter, T = b === void 0 ? 32 : b, g = c.ignore;
  S = S || g;
  var H = HN.bind(null, h, S);
  return function(N) {
    var _ = N.getState, j = _(), O = H(j), L;
    return function(U) {
      return function(A) {
        var B = ET(T, "ImmutableStateInvariantMiddleware");
        B.measureTime(function() {
          j = _(), L = O.detectMutations(), O = H(j), Y1(!L.wasMutated, "A state mutation was detected between dispatches, in the path '" + (L.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var I = U(A);
        return B.measureTime(function() {
          j = _(), L = O.detectMutations(), O = H(j), L.wasMutated && Y1(!L.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (L.path || "") + ". Take a look at the reducer(s) handling the action " + PN(A) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        }), B.warnIfExceeded(), I;
      };
    };
  };
}
function RT(c) {
  var p = typeof c;
  return c == null || p === "string" || p === "boolean" || p === "number" || Array.isArray(c) || ST(c);
}
function g0(c, p, h, S, b, T) {
  p === void 0 && (p = ""), h === void 0 && (h = RT), b === void 0 && (b = []);
  var g;
  if (!h(c))
    return {
      keyPath: p || "<root>",
      value: c
    };
  if (typeof c != "object" || c === null || T != null && T.has(c))
    return !1;
  for (var H = S != null ? S(c) : Object.entries(c), N = b.length > 0, _ = function(I, le) {
    var ue = p ? p + "." + I : I;
    if (N) {
      var ee = b.some(function(Z) {
        return Z instanceof RegExp ? Z.test(ue) : ue === Z;
      });
      if (ee)
        return "continue";
    }
    if (!h(le))
      return { value: {
        keyPath: ue,
        value: le
      } };
    if (typeof le == "object" && (g = g0(le, ue, h, S, b, T), g))
      return { value: g };
  }, j = 0, O = H; j < O.length; j++) {
    var L = O[j], U = L[0], A = L[1], B = _(U, A);
    if (typeof B == "object")
      return B.value;
  }
  return T && TT(c) && T.add(c), !1;
}
function TT(c) {
  if (!Object.isFrozen(c))
    return !1;
  for (var p = 0, h = Object.values(c); p < h.length; p++) {
    var S = h[p];
    if (!(typeof S != "object" || S === null) && !TT(S))
      return !1;
  }
  return !0;
}
function $N(c) {
  if (c === void 0 && (c = {}), {}.NODE_ENV === "production")
    return function() {
      return function(ee) {
        return function(Z) {
          return ee(Z);
        };
      };
    };
  var p = c.isSerializable, h = p === void 0 ? RT : p, S = c.getEntries, b = c.ignoredActions, T = b === void 0 ? [] : b, g = c.ignoredActionPaths, H = g === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : g, N = c.ignoredPaths, _ = N === void 0 ? [] : N, j = c.warnAfter, O = j === void 0 ? 32 : j, L = c.ignoreState, U = L === void 0 ? !1 : L, A = c.ignoreActions, B = A === void 0 ? !1 : A, I = c.disableCache, le = I === void 0 ? !1 : I, ue = !le && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
  return function(ee) {
    return function(Z) {
      return function($) {
        var fe = Z($), ve = ET(O, "SerializableStateInvariantMiddleware");
        return !B && !(T.length && T.indexOf($.type) !== -1) && ve.measureTime(function() {
          var Ue = g0($, "", h, S, H, ue);
          if (Ue) {
            var Oe = Ue.keyPath, Ye = Ue.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + Oe + "`. Value:", Ye, `
Take a look at the logic that dispatched this action: `, $, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
          }
        }), U || (ve.measureTime(function() {
          var Ue = ee.getState(), Oe = g0(Ue, "", h, S, _, ue);
          if (Oe) {
            var Ye = Oe.keyPath, We = Oe.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + Ye + "`. Value:", We, `
Take a look at the reducer(s) handling this action type: ` + $.type + `.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
          }
        }), ve.warnIfExceeded()), fe;
      };
    };
  };
}
function my(c) {
  return typeof c == "boolean";
}
function BN() {
  return function(p) {
    return YN(p);
  };
}
function YN(c) {
  c === void 0 && (c = {});
  var p = c.thunk, h = p === void 0 ? !0 : p, S = c.immutableCheck, b = S === void 0 ? !0 : S, T = c.serializableCheck, g = T === void 0 ? !0 : T, H = c.actionCreatorCheck, N = H === void 0 ? !0 : H, _ = new zN();
  if (h && (my(h) ? _.push(H1) : _.push(H1.withExtraArgument(h.extraArgument))), {}.NODE_ENV !== "production") {
    if (b) {
      var j = {};
      my(b) || (j = b), _.unshift(IN(j));
    }
    if (g) {
      var O = {};
      my(g) || (O = g), _.push($N(O));
    }
    if (N) {
      var L = {};
      my(N) || (L = N), _.unshift(AN(L));
    }
  }
  return _;
}
var i0 = {}.NODE_ENV === "production";
function WN(c) {
  var p = BN(), h = c || {}, S = h.reducer, b = S === void 0 ? void 0 : S, T = h.middleware, g = T === void 0 ? p() : T, H = h.devTools, N = H === void 0 ? !0 : H, _ = h.preloadedState, j = _ === void 0 ? void 0 : _, O = h.enhancers, L = O === void 0 ? void 0 : O, U;
  if (typeof b == "function")
    U = b;
  else if (ST(b))
    U = CN(b);
  else
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var A = g;
  if (typeof A == "function" && (A = A(p), !i0 && !Array.isArray(A)))
    throw new Error("when using a middleware builder function, an array of middleware must be returned");
  if (!i0 && A.some(function(Z) {
    return typeof Z != "function";
  }))
    throw new Error("each middleware provided to configureStore must be a function");
  var B = bN.apply(void 0, A), I = Ey;
  N && (I = kN(ls({
    trace: !i0
  }, typeof N == "object" && N)));
  var le = new UN(B), ue = le;
  Array.isArray(L) ? ue = cd([B], L) : typeof L == "function" && (ue = L(le));
  var ee = I.apply(void 0, ue);
  return hT(U, j, ee);
}
function wT(c) {
  var p = {}, h = [], S, b = {
    addCase: function(T, g) {
      if ({}.NODE_ENV !== "production") {
        if (h.length > 0)
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (S)
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      var H = typeof T == "string" ? T : T.type;
      if (!H)
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      if (H in p)
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      return p[H] = g, b;
    },
    addMatcher: function(T, g) {
      if ({}.NODE_ENV !== "production" && S)
        throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return h.push({ matcher: T, reducer: g }), b;
    },
    addDefaultCase: function(T) {
      if ({}.NODE_ENV !== "production" && S)
        throw new Error("`builder.addDefaultCase` can only be called once");
      return S = T, b;
    }
  };
  return c(b), [p, h, S];
}
function QN(c) {
  return typeof c == "function";
}
var W1 = !1;
function GN(c, p, h, S) {
  h === void 0 && (h = []), {}.NODE_ENV !== "production" && typeof p == "object" && (W1 || (W1 = !0, console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer")));
  var b = typeof p == "function" ? wT(p) : [p, h, S], T = b[0], g = b[1], H = b[2], N;
  if (QN(c))
    N = function() {
      return y0(c());
    };
  else {
    var _ = y0(c);
    N = function() {
      return _;
    };
  }
  function j(O, L) {
    O === void 0 && (O = N());
    var U = cd([
      T[L.type]
    ], g.filter(function(A) {
      var B = A.matcher;
      return B(L);
    }).map(function(A) {
      var B = A.reducer;
      return B;
    }));
    return U.filter(function(A) {
      return !!A;
    }).length === 0 && (U = [H]), U.reduce(function(A, B) {
      if (B)
        if (fs(A)) {
          var I = A, le = B(I, L);
          return le === void 0 ? A : le;
        } else {
          if (Jo(A))
            return pT(A, function(ue) {
              return B(ue, L);
            });
          var le = B(A, L);
          if (le === void 0) {
            if (A === null)
              return A;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return le;
        }
      return A;
    }, O);
  }
  return j.getInitialState = N, j;
}
var Q1 = !1;
function qN(c, p) {
  return c + "/" + p;
}
function _T(c) {
  var p = c.name;
  if (!p)
    throw new Error("`name` is a required option for createSlice");
  typeof process < "u" && {}.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
  var h = typeof c.initialState == "function" ? c.initialState : y0(c.initialState), S = c.reducers || {}, b = Object.keys(S), T = {}, g = {}, H = {};
  b.forEach(function(j) {
    var O = S[j], L = qN(p, j), U, A;
    "reducer" in O ? (U = O.reducer, A = O.prepare) : U = O, T[j] = U, g[L] = U, H[j] = A ? ss(L, A) : ss(L);
  });
  function N() {
    ({}).NODE_ENV !== "production" && typeof c.extraReducers == "object" && (Q1 || (Q1 = !0, console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice")));
    var j = typeof c.extraReducers == "function" ? wT(c.extraReducers) : [c.extraReducers], O = j[0], L = O === void 0 ? {} : O, U = j[1], A = U === void 0 ? [] : U, B = j[2], I = B === void 0 ? void 0 : B, le = ls(ls({}, L), g);
    return GN(h, function(ue) {
      for (var ee in le)
        ue.addCase(ee, le[ee]);
      for (var Z = 0, $ = A; Z < $.length; Z++) {
        var fe = $[Z];
        ue.addMatcher(fe.matcher, fe.reducer);
      }
      I && ue.addDefaultCase(I);
    });
  }
  var _;
  return {
    name: p,
    reducer: function(j, O) {
      return _ || (_ = N()), _(j, O);
    },
    actions: H,
    caseReducers: T,
    getInitialState: function() {
      return _ || (_ = N()), _.getInitialState();
    }
  };
}
var KN = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", XN = function(c) {
  c === void 0 && (c = 21);
  for (var p = "", h = c; h--; )
    p += KN[Math.random() * 64 | 0];
  return p;
}, ZN = [
  "name",
  "message",
  "stack",
  "code"
], u0 = (
  /** @class */
  function() {
    function c(p, h) {
      this.payload = p, this.meta = h;
    }
    return c;
  }()
), G1 = (
  /** @class */
  function() {
    function c(p, h) {
      this.payload = p, this.meta = h;
    }
    return c;
  }()
), JN = function(c) {
  if (typeof c == "object" && c !== null) {
    for (var p = {}, h = 0, S = ZN; h < S.length; h++) {
      var b = S[h];
      typeof c[b] == "string" && (p[b] = c[b]);
    }
    return p;
  }
  return { message: String(c) };
};
(function() {
  function c(p, h, S) {
    var b = ss(p + "/fulfilled", function(j, O, L, U) {
      return {
        payload: j,
        meta: a0(ls({}, U || {}), {
          arg: L,
          requestId: O,
          requestStatus: "fulfilled"
        })
      };
    }), T = ss(p + "/pending", function(j, O, L) {
      return {
        payload: void 0,
        meta: a0(ls({}, L || {}), {
          arg: O,
          requestId: j,
          requestStatus: "pending"
        })
      };
    }), g = ss(p + "/rejected", function(j, O, L, U, A) {
      return {
        payload: U,
        error: (S && S.serializeError || JN)(j || "Rejected"),
        meta: a0(ls({}, A || {}), {
          arg: L,
          requestId: O,
          rejectedWithValue: !!U,
          requestStatus: "rejected",
          aborted: (j == null ? void 0 : j.name) === "AbortError",
          condition: (j == null ? void 0 : j.name) === "ConditionError"
        })
      };
    }), H = !1, N = typeof AbortController < "u" ? AbortController : (
      /** @class */
      function() {
        function j() {
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
        return j.prototype.abort = function() {
          ({}).NODE_ENV !== "production" && (H || (H = !0, console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.")));
        }, j;
      }()
    );
    function _(j) {
      return function(O, L, U) {
        var A = S != null && S.idGenerator ? S.idGenerator(j) : XN(), B = new N(), I;
        function le(ee) {
          I = ee, B.abort();
        }
        var ue = function() {
          return DN(this, null, function() {
            var ee, Z, $, fe, ve, Ue, Oe;
            return RN(this, function(Ye) {
              switch (Ye.label) {
                case 0:
                  return Ye.trys.push([0, 4, , 5]), fe = (ee = S == null ? void 0 : S.condition) == null ? void 0 : ee.call(S, j, { getState: L, extra: U }), tM(fe) ? [4, fe] : [3, 2];
                case 1:
                  fe = Ye.sent(), Ye.label = 2;
                case 2:
                  if (fe === !1 || B.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  return ve = new Promise(function(We, it) {
                    return B.signal.addEventListener("abort", function() {
                      return it({
                        name: "AbortError",
                        message: I || "Aborted"
                      });
                    });
                  }), O(T(A, j, (Z = S == null ? void 0 : S.getPendingMeta) == null ? void 0 : Z.call(S, { requestId: A, arg: j }, { getState: L, extra: U }))), [4, Promise.race([
                    ve,
                    Promise.resolve(h(j, {
                      dispatch: O,
                      getState: L,
                      extra: U,
                      requestId: A,
                      signal: B.signal,
                      abort: le,
                      rejectWithValue: function(We, it) {
                        return new u0(We, it);
                      },
                      fulfillWithValue: function(We, it) {
                        return new G1(We, it);
                      }
                    })).then(function(We) {
                      if (We instanceof u0)
                        throw We;
                      return We instanceof G1 ? b(We.payload, A, j, We.meta) : b(We, A, j);
                    })
                  ])];
                case 3:
                  return $ = Ye.sent(), [3, 5];
                case 4:
                  return Ue = Ye.sent(), $ = Ue instanceof u0 ? g(null, A, j, Ue.payload, Ue.meta) : g(Ue, A, j), [3, 5];
                case 5:
                  return Oe = S && !S.dispatchConditionRejection && g.match($) && $.meta.condition, Oe || O($), [2, $];
              }
            });
          });
        }();
        return Object.assign(ue, {
          abort: le,
          requestId: A,
          arg: j,
          unwrap: function() {
            return ue.then(eM);
          }
        });
      };
    }
    return Object.assign(_, {
      pending: T,
      rejected: g,
      fulfilled: b,
      typePrefix: p
    });
  }
  return c.withTypes = function() {
    return c;
  }, c;
})();
function eM(c) {
  if (c.meta && c.meta.rejectedWithValue)
    throw c.payload;
  if (c.error)
    throw c.error;
  return c.payload;
}
function tM(c) {
  return c !== null && typeof c == "object" && typeof c.then == "function";
}
var x0 = "listenerMiddleware";
ss(x0 + "/add");
ss(x0 + "/removeAll");
ss(x0 + "/remove");
var q1;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
uN();
const nM = [], xT = _T({
  name: "fields",
  initialState: nM,
  reducers: {
    registerForm: (c, p) => {
      const { formInstance: h, formId: S } = p.payload;
      c[h] = {
        fields: {},
        meta: {
          formId: S,
          isLoading: !1,
          isSubmitting: !1,
          step: 1
        }
      };
    },
    registerField: (c, p) => {
      const {
        formInstance: h,
        name: S,
        value: b,
        validationRules: T
      } = p.payload;
      c[h].fields[S] = {
        ...c[h].fields[S],
        value: b,
        validationRules: T
      };
    },
    updateField: (c, p) => {
      const {
        formInstance: h,
        name: S,
        value: b
      } = p.payload;
      c[h].fields[S] = {
        ...c[h].fields[S],
        value: b
      };
    },
    updateFieldErrors: (c, p) => {
      const {
        formInstance: h,
        name: S,
        errors: b
      } = p.payload;
      c[h].fields[S] = {
        ...c[h].fields[S],
        errors: b
      };
    },
    updateMeta: (c, p) => {
      const {
        formInstance: h,
        name: S,
        value: b
      } = p.payload;
      c[h].meta[S] = b;
    }
  }
}), {
  registerForm: rM,
  registerField: aM,
  updateField: Fi,
  updateFieldErrors: K1,
  updateMeta: iM
} = xT.actions, uM = xT.reducer, oM = (c) => (p) => p.forms[c], lM = (c) => (p) => p.forms[c].meta.step, Cy = (c) => (p) => p.forms[c].fields, O0 = (c, p) => (h) => h.forms[c].fields[p], sM = {
  environment: "production",
  errors: {}
}, OT = _T({
  name: "misc",
  initialState: sM,
  reducers: {
    registerErrors: (c, p) => {
      const { errors: h } = p.payload;
      c.errors = { ...h };
    },
    setEnvironment: (c, p) => {
      const { env: h } = p.payload;
      c.environment = h;
    }
  }
}), {
  registerErrors: cM,
  setEnvironment: fM
} = OT.actions, dM = OT.reducer, pM = () => (c) => c.misc.errors;
function DT(c, p) {
  if (!p || p.length === 0)
    return !0;
  let h = p[0].logicalOperator === "and";
  for (const S of p) {
    if (!c[S.field])
      continue;
    const b = c[S.field].value;
    let T;
    switch (S.comparisonOperator) {
      case "=":
        T = b == S.value;
        break;
      case "!=":
        T = b !== S.value;
        break;
      case ">=":
        T = b >= S.value;
        break;
      case "<=":
        T = b <= S.value;
        break;
      case ">":
        T = b > S.value;
        break;
      case "<":
        T = b < S.value;
        break;
      default:
        console.warn(`Unsupported operator: ${S.comparisonOperator}`), T = !1;
        break;
    }
    S.logicalOperator === "and" ? h = h && T : S.logicalOperator === "or" && (h = h || T);
  }
  return h;
}
function jt(c) {
  return c.map((p) => p ? "dkf_" + p : !1).filter(Boolean).join(" ");
}
function vM(c, p) {
  return new CustomEvent(c, { detail: p });
}
function hM(c, p) {
  c.dispatchEvent(p);
}
function kT(c) {
  return [
    "text",
    "number",
    "email",
    "phone",
    "checkbox",
    "radio",
    "hidden"
  ].includes(c.nodeType);
}
function mM() {
  const c = Ot.useRef({}), p = (h, S, b) => {
    var T;
    kT(h) && (b(aM({
      formInstance: S,
      name: h.name,
      value: h.defaultValue,
      validationRules: h.validationRules
    })), c.current[h.name] = Z1.createRef()), (T = h.nodes) == null || T.forEach((g) => p(g, S, b));
  };
  return { fieldRefs: c, registerNode: p };
}
function yM(c, p, h) {
  return Fi({ formInstance: c, name: p, value: h });
}
function gM(c, p, h) {
  return iM({ formInstance: c, name: p, value: h });
}
function SM(c) {
  return () => {
  };
}
const X1 = {
  update_field: yM,
  update_meta: gM,
  submit: SM
};
function EM(c) {
  const {
    formInstance: p,
    name: h,
    label: S,
    type: b,
    events: T,
    disabled: g = !1,
    ...H
  } = c, N = ds(), _ = jt([
    "button-container",
    "button-container--" + h
  ]), j = jt([
    "button",
    "button--" + h,
    "button--" + (c.buttonType || "primary")
  ]), O = () => {
    T && T.forEach((L) => {
      if (L.mapping)
        for (const U in L.mapping) {
          const A = L.mapping[U];
          N(X1[L.name](p, U, A));
        }
      else
        N(X1[L.name](p));
    });
  };
  return /* @__PURE__ */ Pe.jsx("div", { className: _, children: /* @__PURE__ */ Pe.jsx(
    "button",
    {
      type: b,
      className: j,
      onClick: O,
      children: S
    },
    h
  ) });
}
const CM = Ot.forwardRef(function(p, h) {
  const {
    formInstance: S,
    name: b,
    label: T,
    options: g,
    defaultValue: H,
    visibilityConditions: N,
    validationRules: _,
    helpText: j,
    emailTag: O,
    storeAsDonorMeta: L,
    showInReceipt: U,
    nodeType: A,
    childNodes: B,
    disabled: I = !1,
    ...le
  } = p, ue = oo(Cy(S)), ee = ds(), Z = DT(ue, N);
  if (Ot.useEffect(() => {
    Z && ee(Fi({ formInstance: S, name: b, value: H }));
  }, [Z]), ue[b] === void 0 || !Z)
    return null;
  const $ = jt([
    "input",
    "input-checkbox",
    "input-checkbox--" + b
  ]), fe = jt([
    "input--option"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: $, children: g ? g.map((ve) => /* @__PURE__ */ Pe.jsxs("div", { className: fe, ref: h, children: [
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        id: S + b + ve.value,
        name: b,
        type: "checkbox",
        value: ve.value,
        checked: ue[b].value === ve.value,
        onChange: () => ee(Fi({ formInstance: S, name: b, value: ve.value }))
      },
      b + ve.value
    ),
    /* @__PURE__ */ Pe.jsx(
      "label",
      {
        className: jt(["input--label"]),
        htmlFor: S + b + ve.value,
        tabIndex: 0,
        children: ve.label
      }
    )
  ] })) : /* @__PURE__ */ Pe.jsxs(Pe.Fragment, { children: [
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        id: S + b,
        name: b,
        type: "checkbox",
        value: "true",
        checked: ue[b].value == "true",
        onChange: () => ee(Fi({ formInstance: S, name: b, value: ue[b].value == "true" ? "false" : "true" })),
        ref: h
      },
      b
    ),
    /* @__PURE__ */ Pe.jsx(
      "label",
      {
        className: jt(["input--label"]),
        htmlFor: S + b,
        tabIndex: 0,
        children: T
      }
    )
  ] }) });
}), bM = (c, p) => {
  const h = c.split(":"), S = parseInt(h[1]);
  if (typeof p == "string") {
    if (p.length >= S)
      return !0;
  } else if (typeof p == "number") {
    if (p >= S)
      return !0;
  } else
    return !1;
  return !1;
}, RM = (c, p) => {
  const h = c.split(":"), S = parseInt(h[1]);
  if (typeof p == "string") {
    if (p.length <= S)
      return !0;
  } else if (typeof p == "number") {
    if (p <= S)
      return !0;
  } else
    return !1;
  return !1;
}, TM = (c, p) => typeof p == "string", wM = (c, p) => Number.isInteger(p), _M = (c, p) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(p), xM = (c, p) => p != null && p.trim() !== "", OM = {
  min: bM,
  max: RM,
  string: TM,
  numeric: wM,
  required: xM,
  email: _M
};
function D0(c, p, h, S) {
  const b = oo(pM()), T = oo(O0(c, p)), g = ds();
  return { setValidateField: (N) => {
    if (!S || S.length === 0)
      return;
    let _ = [];
    for (const j of S) {
      const O = j.split(":"), L = OM[O[0]];
      if (!L) {
        console.error(`Validator not found for rule: ${O[0]}`);
        continue;
      }
      const U = L(j, T.value);
      if (console.log("Validator", j, T.value, U ? "true" : "false"), !U && b[O[0]]) {
        let A = b[O[0]];
        A.includes(":attribute") && (A = A.replace(":attribute", h)), A.includes(":max") && (A = A.replace(":max", O[1])), A.includes(":min") && (A = A.replace(":min", O[1])), _.push(A);
      }
    }
    _.length > 0 && g(K1({
      formInstance: c,
      name: p,
      errors: _
    })), g(K1({
      formInstance: c,
      name: p,
      errors: _
    }));
  } };
}
const DM = Ot.forwardRef(function(p, h) {
  const {
    formInstance: S,
    name: b,
    label: T,
    defaultValue: g,
    visibilityConditions: H,
    validationRules: N,
    allowMultiple: _,
    helpText: j,
    emailTag: O,
    storeAsDonorMeta: L,
    showInReceipt: U,
    nodeType: A,
    childNodes: B,
    disabled: I = !1,
    ...le
  } = p, [ue, ee] = Ot.useReducer(
    ($e, st) => ({ ...$e, ...st }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: Z,
    isInvalid: $
  } = ue, fe = oo(Cy(S)), ve = ds(), Ue = fe[b].errors, { setValidateField: Oe } = D0(S, b, T, N), Ye = ($e) => {
    $e.preventDefault(), ve(Fi({ formInstance: S, name: b, value: $e.target.value }));
    let st = !1;
    $e.target.value.length > 0 && (st = !0), Oe($e.target.value), ee({
      isActive: st
    });
  }, We = jt([
    "input_wrapper",
    "input_wrapper--" + b,
    "input_wrapper-type--" + A
  ]), it = jt([
    "input",
    "input--" + b,
    "input-type--" + A,
    Z && "input--active",
    Ue && Ue.length > 0 && "input--invalid"
  ]), De = jt([
    "input--field"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: We, children: /* @__PURE__ */ Pe.jsxs("div", { className: it, children: [
    T && /* @__PURE__ */ Pe.jsx("label", { className: jt(["input--label"]), htmlFor: b, children: T }),
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        id: b,
        className: De,
        disabled: I,
        autoComplete: "email",
        ...le,
        onChange: Ye,
        ref: h
      }
    ),
    Ue && Ue.length !== 0 && /* @__PURE__ */ Pe.jsx(Pe.Fragment, { children: Ue.map(($e, st) => /* @__PURE__ */ Pe.jsx("div", { className: jt(["input--error"]), children: $e }, st)) })
  ] }) });
});
function kM(c) {
  const {
    formInstance: p,
    html: h,
    name: S,
    label: b,
    defaultValue: T,
    visibilityConditions: g,
    helpText: H,
    customClasses: N,
    storeAsDonorMeta: _,
    showInReceipt: j,
    nodeType: O,
    childNodes: L,
    disabled: U = !1,
    ...A
  } = c, B = jt([
    "html",
    ...Array.isArray(N) ? N : []
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: jt(["html_wrapper"]), children: /* @__PURE__ */ Pe.jsx("div", { className: B, dangerouslySetInnerHTML: { __html: h } }) });
}
const NM = Ot.forwardRef(function(p, h) {
  const {
    formInstance: S,
    name: b,
    label: T,
    defaultValue: g,
    visibilityConditions: H,
    validationRules: N,
    helpText: _,
    emailTag: j,
    storeAsDonorMeta: O,
    showInReceipt: L,
    nodeType: U,
    childNodes: A,
    disabled: B = !1,
    ...I
  } = p, [le, ue] = Ot.useReducer(
    (it, De) => ({ ...it, ...De }),
    {
      isActive: !1
    }
  ), {
    isActive: ee
  } = le, Z = oo(O0(S, b)), $ = ds(), fe = Z.errors, { setValidateField: ve } = D0(S, b, T, N);
  Ot.useImperativeHandle(h, () => ({
    validate() {
      ve(Z.value);
    }
  }), [Z]);
  const Ue = (it) => {
    it.preventDefault(), $(Fi({ formInstance: S, name: b, value: it.target.value }));
    let De = !1;
    it.target.value.length > 0 && (De = !0), ve(it.target.value), ue({
      isActive: De
    });
  }, Oe = jt([
    "input_wrapper",
    "input_wrapper--" + b,
    "input_wrapper-type--" + U
  ]), Ye = jt([
    "input",
    "input--" + b,
    "input-type--" + U,
    ee && "input--active",
    fe && fe.length > 0 && "input--invalid"
  ]), We = jt([
    "input--field"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: Oe, children: /* @__PURE__ */ Pe.jsxs("div", { className: Ye, children: [
    T && /* @__PURE__ */ Pe.jsx("label", { className: jt(["input--label"]), htmlFor: b, children: T }),
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        type: "text",
        id: b,
        className: We,
        disabled: B,
        ...I,
        value: Z.value,
        onChange: Ue,
        ref: h
      }
    ),
    fe && fe.length !== 0 && /* @__PURE__ */ Pe.jsx(Pe.Fragment, { children: fe.map((it, De) => /* @__PURE__ */ Pe.jsx("div", { className: jt(["input--error"]), children: it }, De)) })
  ] }) });
}), S0 = WN({
  reducer: {
    misc: dM,
    forms: uM
  }
});
function NT(c) {
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
function MM({ childNodes: c, formInstance: p, fieldrefs: h }) {
  const S = S0.getState().forms[p], b = S.fields, T = S.meta, g = S0.getState().misc.environment, H = (j) => {
    j.preventDefault();
    let O = !0;
    const L = {
      form_id: T.formId,
      payment_method: T.payment_method
    };
    Object.values(h.current).forEach((U) => {
      var A, B;
      (B = (A = U.current) == null ? void 0 : A.validate) == null || B.call(A);
    });
    for (const U in b)
      if (b.hasOwnProperty(U)) {
        const A = b[U];
        A.value && (L[U] = A.value), A.errors && A.errors.length > 0 && (O = !1), A.validationRules && A.validationRules.indexOf("required") !== -1 && !A.value && (O = !1);
      }
    if (!O) {
      console.log("Form is not valid");
      return;
    }
    N(L).then((U) => {
      U.url && (window.location.href = U.url);
    });
  };
  async function N(j) {
    return await (await fetch(NT(g) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(j)
    })).json();
  }
  const _ = jt([
    "form",
    "form--" + p
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: jt(["form_wrapper"]), children: /* @__PURE__ */ Pe.jsx(
    "form",
    {
      className: _,
      onSubmit: H,
      noValidate: !0,
      children: c
    }
  ) });
}
function LM({ childNodes: c, name: p }) {
  const h = jt([
    "group",
    "group--" + p
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: h, children: c });
}
const AM = Ot.forwardRef(function(p, h) {
  const {
    formInstance: S,
    name: b,
    label: T,
    defaultValue: g,
    visibilityConditions: H,
    validationRules: N,
    helpText: _,
    emailTag: j,
    alias: O,
    storeAsDonorMeta: L,
    showInReceipt: U,
    nodeType: A,
    events: B,
    childNodes: I,
    disabled: le = !1,
    ...ue
  } = p, [ee, Z] = Ot.useReducer(
    (st, ut) => ({ ...st, ...ut }),
    {
      isActive: !1,
      isInvalid: !1
    }
  ), {
    isActive: $,
    isInvalid: fe
  } = ee, ve = oo(Cy(S)), Ue = ds(), Oe = ve[b].errors, { setValidateField: Ye } = D0(S, b, T, N), We = jt([
    "input_wrapper",
    "input_wrapper--" + b,
    "input_wrapper-type--" + A
  ]), it = jt([
    "input",
    "input--" + b,
    "input-type--" + A,
    $ && "input--active",
    Oe && Oe.length > 0 && "input--invalid"
  ]), De = (st) => {
    st.preventDefault();
    const ut = Number(st.target.value);
    Ue(Fi({ formInstance: S, name: b, value: ut })), O && Ue(Fi({ formInstance: S, name: O, value: ut }));
    let we = !1;
    ut && (we = !0), Ye(ut), Z({
      isActive: we
    });
  }, $e = jt([
    "input--field"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: We, children: /* @__PURE__ */ Pe.jsxs("div", { className: it, children: [
    T && /* @__PURE__ */ Pe.jsx("label", { className: jt(["input--label"]), htmlFor: b, children: T }),
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        type: "number",
        id: b,
        className: $e,
        disabled: le,
        ...ue,
        value: ve[b].value,
        onChange: De,
        ref: h
      }
    ),
    Oe && Oe.length !== 0 && /* @__PURE__ */ Pe.jsx(Pe.Fragment, { children: Oe.map((st, ut) => /* @__PURE__ */ Pe.jsx("div", { className: jt(["input--error"]), children: st }, ut)) })
  ] }) });
}), zM = Ot.forwardRef(function(p, h) {
  const {
    formInstance: S,
    name: b,
    label: T,
    options: g,
    defaultValue: H,
    visibilityConditions: N,
    validationRules: _,
    helpText: j,
    emailTag: O,
    alias: L,
    storeAsDonorMeta: U,
    showInReceipt: A,
    nodeType: B,
    childNodes: I,
    disabled: le = !1,
    ...ue
  } = p, ee = oo(Cy(S));
  oo(O0(S, b));
  const Z = ds(), $ = L || b, fe = jt([
    "input",
    "input-radio",
    "input-radio--" + b
  ]), ve = jt([
    "input--option"
  ]);
  Ot.useEffect(() => {
    g && !g.some((Oe) => Oe.value === ee[b].value) && (Z(Fi({ formInstance: S, name: b, value: H })), L && Z(Fi({ formInstance: S, name: L, value: H })));
  }, [ee.frequency.value]);
  const Ue = (Oe, Ye) => {
    Z(Fi({ formInstance: S, name: b, value: Ye })), L && Z(Fi({ formInstance: S, name: L, value: Ye }));
  };
  return /* @__PURE__ */ Pe.jsx("div", { className: fe, children: g ? g.map((Oe) => /* @__PURE__ */ Pe.jsx("div", { className: ve, ref: h, children: /* @__PURE__ */ Pe.jsxs("label", { children: [
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        id: S + b + Oe.value,
        name: b,
        type: "radio",
        value: Oe.value,
        checked: ee[$].value === Oe.value,
        onChange: (Ye) => Ue(Ye, Oe.value)
      },
      b + Oe.value
    ),
    /* @__PURE__ */ Pe.jsx(
      "span",
      {
        className: jt(["input--label"]),
        children: Oe.label
      }
    )
  ] }) })) : /* @__PURE__ */ Pe.jsxs(Pe.Fragment, { children: [
    /* @__PURE__ */ Pe.jsx(
      "input",
      {
        id: S + b,
        name: b,
        type: "radio",
        value: "true",
        checked: !!ee[$].value,
        onChange: (Oe) => Ue(Oe, !0),
        ref: h
      },
      b
    ),
    /* @__PURE__ */ Pe.jsx(
      "label",
      {
        className: jt(["input--label"]),
        htmlFor: S + b,
        tabIndex: 0,
        children: T
      }
    )
  ] }) });
});
function UM({ childNodes: c }) {
  const p = jt([
    "section"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: p, children: c });
}
function jM({ formInstance: c, childNodes: p }) {
  const h = oo(lM(c)), S = jt([
    "steps"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: S, children: p[h - 1] });
}
function PM({ name: c, childNodes: p }) {
  const h = jt([
    "step"
  ]);
  return /* @__PURE__ */ Pe.jsx("div", { className: h, children: p });
}
function FM(c) {
  const {
    formId: p,
    env: h,
    setAppState: S
  } = c, [b, T] = Ot.useReducer(
    (L, U) => ({ ...L, ...U }),
    {
      isLoading: !0,
      isDelayed: !1,
      error: null
    }
  ), {
    isLoading: g,
    isDelayed: H,
    error: N
  } = b, _ = Ot.useRef(null);
  async function j(L, U) {
    _.current = new AbortController(), setTimeout(() => {
      T({ isDelayed: !0 });
    }, 2e3), fetch(NT(U) + "/api/v1/form/config/" + L, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      signal: _.current.signal
    }).then((A) => A.json()).then((A) => {
      S({
        isLoading: !1,
        config: JSON.parse(A.config),
        errors: A.errors
      }), T({
        isLoading: !1,
        error: null
      });
    }).catch((A) => {
      T({
        isLoading: !1,
        isDelayed: !1,
        error: A
      });
    });
  }
  const O = () => {
    T({
      isLoading: !0,
      isDelayed: !1,
      error: null
    }), j(p, h);
  };
  return Ot.useEffect(() => {
    p && O();
  }, [S]), /* @__PURE__ */ Pe.jsx("div", { className: jt(["loader-container"]), children: /* @__PURE__ */ Pe.jsxs("div", { className: jt(["loader", "loader-" + status]), children: [
    "Loading...",
    H && /* @__PURE__ */ Pe.jsxs(Pe.Fragment, { children: [
      /* @__PURE__ */ Pe.jsx("p", { children: "Loading the form is taking longer than usual. It is still loading but you can cancel and/or retry." }),
      /* @__PURE__ */ Pe.jsx("button", { onClick: () => _.current.abort(), children: "Cancel" }),
      /* @__PURE__ */ Pe.jsx("button", { onClick: () => O(), children: "Retry" })
    ] }),
    N && /* @__PURE__ */ Pe.jsxs(Pe.Fragment, { children: [
      /* @__PURE__ */ Pe.jsx("p", { children: "Failed to fetch the form, please try again." }),
      /* @__PURE__ */ Pe.jsx("button", { onClick: () => O(), children: "Retry" })
    ] })
  ] }) });
}
const VM = {
  button: EM,
  checkbox: CM,
  email: DM,
  html: kM,
  text: NM,
  group: LM,
  number: AM,
  radio: zM,
  section: UM,
  steps: jM,
  step: PM,
  form: MM
};
function HM({ formInstance: c, formId: p, env: h, lang: S }) {
  const b = oo(oM(c)), T = ds(), [g, H] = Ot.useReducer(
    (I, le) => ({ ...I, ...le }),
    {
      isLoading: !0,
      isInitialized: !1,
      config: null,
      errors: null,
      error: null
    }
  ), {
    isLoading: N,
    isInitialized: _,
    config: j,
    errors: O,
    error: L
  } = g, { fieldRefs: U, registerNode: A } = mM();
  if (Ot.useEffect(() => {
    if (N === !1) {
      const I = vM("fundyFormLoaded", { detail: { formInstance: c } });
      hM(document, I);
    }
  }, [N]), Ot.useEffect(() => {
    T(rM({ formInstance: c, formId: p, step: 0 })), T(fM({ env: h })), O && T(cM({ errors: O })), N === !1 && _ === !1 && (A(j, c, T), H({ isInitialized: !0 }));
  }, [c, N]), N === !0)
    return /* @__PURE__ */ Pe.jsx(
      FM,
      {
        formId: p,
        env: h,
        setAppState: H
      }
    );
  const B = (I, le) => {
    let ue = null;
    if (ue = VM[I.nodeType], !ue || !DT(b.fields, I.visibilityConditions))
      return null;
    const ee = I.nodes ? I.nodes.map(($) => B($, le)) : null, Z = kT(I) ? U.current[I.name] : null;
    return /* @__PURE__ */ Pe.jsx(
      ue,
      {
        formInstance: le,
        ref: Z,
        childNodes: ee,
        fieldrefs: U,
        ...I
      },
      I.name
    );
  };
  return b === void 0 ? null : N || _ === !1 ? /* @__PURE__ */ Pe.jsx("div", { className: jt(["loading"]), children: /* @__PURE__ */ Pe.jsx("div", { className: jt(["loading__message"]), children: "Loading..." }) }) : /* @__PURE__ */ Pe.jsx(Pe.Fragment, { children: B(j, c) });
}
let IM = 0;
function $M() {
  return IM++;
}
function MT(c, p, h) {
  if (c.nodeType === 3) {
    const S = c.nodeValue.match(p);
    if (S) {
      const b = h(S);
      c.parentNode.replaceChild(b, c);
    }
  } else
    c.childNodes.forEach((S) => MT(S, p, h));
}
const BM = /\[fundy-form id="(\d+)" env="(\w+)" lang="(\w+)"\]/, YM = (c) => {
  const p = document.createElement("div");
  return p.className = "fundy-form", p.setAttribute("data-form-id", c[1]), p.setAttribute("data-env", c[2]), p;
};
MT(document.body, BM, YM);
for (const c of document.getElementsByClassName("fundy-form")) {
  const p = $M(), h = c.getAttribute("data-form-id") ?? "0", S = c.getAttribute("data-env") ?? "production", b = c.getAttribute("data-lang") ?? "en";
  wv.createRoot(c).render(
    /* @__PURE__ */ Pe.jsx(Z1.StrictMode, { children: /* @__PURE__ */ Pe.jsx(Zk, { store: S0, children: /* @__PURE__ */ Pe.jsx(HM, { formInstance: p, formId: h, env: S, lang: b }) }) })
  );
}
