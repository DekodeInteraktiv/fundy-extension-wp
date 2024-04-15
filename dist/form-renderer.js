var ke, O, Dn, le, Wt, xn, ut, Ct, ct, lt, Tn, Ne = {}, Rn = [], Kr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Be = Array.isArray;
function J(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function $n(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function X(e, t, n) {
  var r, o, i, s = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ke.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return we(e, s, r, o, null);
}
function we(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Dn, __i: -1, __u: 0 };
  return o == null && O.vnode != null && O.vnode(i), i;
}
function An() {
  return { current: null };
}
function M(e) {
  return e.children;
}
function Y(e, t) {
  this.props = e, this.context = t;
}
function de(e, t) {
  if (t == null)
    return e.__ ? de(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? de(e) : null;
}
function In(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return In(e);
  }
}
function ft(e) {
  (!e.__d && (e.__d = !0) && le.push(e) && !Fe.__r++ || Wt !== O.debounceRendering) && ((Wt = O.debounceRendering) || xn)(Fe);
}
function Fe() {
  var e, t, n, r, o, i, s, a;
  for (le.sort(ut); e = le.shift(); )
    e.__d && (t = le.length, r = void 0, i = (o = (n = e).__v).__e, s = [], a = [], n.__P && ((r = J({}, o)).__v = o.__v + 1, O.vnode && O.vnode(r), Ot(n.__P, r, o, n.__n, n.__P.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? de(o), !!(32 & o.__u), a), r.__v = o.__v, r.__.__k[r.__i] = r, Vn(s, r, a), r.__e != i && In(r)), le.length > t && le.sort(ut));
  Fe.__r = 0;
}
function Mn(e, t, n, r, o, i, s, a, c, l, f) {
  var u, d, _, p, b, h = r && r.__k || Rn, m = t.length;
  for (n.__d = c, Gr(n, t, h), c = n.__d, u = 0; u < m; u++)
    (_ = n.__k[u]) != null && typeof _ != "boolean" && typeof _ != "function" && (d = _.__i === -1 ? Ne : h[_.__i] || Ne, _.__i = u, Ot(e, _, d, o, i, s, a, c, l, f), p = _.__e, _.ref && d.ref != _.ref && (d.ref && kt(d.ref, null, _), f.push(_.ref, _.__c || p, _)), b == null && p != null && (b = p), 65536 & _.__u || d.__k === _.__k ? (c && !c.isConnected && (c = de(d)), c = Pn(_, c, e)) : typeof _.type == "function" && _.__d !== void 0 ? c = _.__d : p && (c = p.nextSibling), _.__d = void 0, _.__u &= -196609);
  n.__d = c, n.__e = b;
}
function Gr(e, t, n) {
  var r, o, i, s, a, c = t.length, l = n.length, f = l, u = 0;
  for (e.__k = [], r = 0; r < c; r++)
    s = r + u, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? we(null, o, null, null, null) : Be(o) ? we(M, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? we(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = Yr(o, n, s, f), o.__i = a, i = null, a !== -1 && (f--, (i = n[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a === s + 1 ? u++ : a > s ? f > c - s ? u += a - s : u-- : a < s ? a == s - 1 && (u = a - s) : u = 0, a !== r + u && (o.__u |= 65536))) : (i = n[s]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = de(i)), dt(i, i, !1), n[s] = null, f--);
  if (f)
    for (r = 0; r < l; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = de(i)), dt(i, i));
}
function Pn(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = Pn(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Q(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Be(e) ? e.some(function(n) {
    Q(n, t);
  }) : t.push(e)), t;
}
function Yr(e, t, n, r) {
  var o = e.key, i = e.type, s = n - 1, a = n + 1, c = t[n];
  if (c === null || c && o == c.key && i === c.type && !(131072 & c.__u))
    return n;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; s >= 0 || a < t.length; ) {
      if (s >= 0) {
        if ((c = t[s]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return s;
        s--;
      }
      if (a < t.length) {
        if ((c = t[a]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Ht(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Kr.test(t) ? n : n + "px";
}
function $e(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ht(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ht(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Ct, e.addEventListener(t, i ? lt : ct, i)) : e.removeEventListener(t, i ? lt : ct, i);
    else {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Bt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null)
        t.t = Ct++;
      else if (t.t < n.u)
        return;
      return n(O.event ? O.event(t) : t);
    }
  };
}
function Ot(e, t, n, r, o, i, s, a, c, l) {
  var f, u, d, _, p, b, h, m, y, v, g, E, S, C, x, D = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [a = t.__e = n.__e]), (f = O.__b) && f(t);
  e:
    if (typeof D == "function")
      try {
        if (m = t.props, y = (f = D.contextType) && r[f.__c], v = f ? y ? y.props.value : f.__ : r, n.__c ? h = (u = t.__c = n.__c).__ = u.__E : ("prototype" in D && D.prototype.render ? t.__c = u = new D(m, v) : (t.__c = u = new Y(m, v), u.constructor = D, u.render = Zr), y && y.sub(u), u.props = m, u.state || (u.state = {}), u.context = v, u.__n = r, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), D.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = J({}, u.__s)), J(u.__s, D.getDerivedStateFromProps(m, u.__s))), _ = u.props, p = u.state, u.__v = t, d)
          D.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && m !== _ && u.componentWillReceiveProps != null && u.componentWillReceiveProps(m, v), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(m, u.__s, v) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (u.props = m, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), g = 0; g < u._sb.length; g++)
              u.__h.push(u._sb[g]);
            u._sb = [], u.__h.length && s.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(m, u.__s, v), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(_, p, b);
          });
        }
        if (u.context = v, u.props = m, u.__P = e, u.__e = !1, E = O.__r, S = 0, "prototype" in D && D.prototype.render) {
          for (u.state = u.__s, u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), C = 0; C < u._sb.length; C++)
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do
            u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++S < 25);
        u.state = u.__s, u.getChildContext != null && (r = J(J({}, r), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (b = u.getSnapshotBeforeUpdate(_, p)), Mn(e, Be(x = f != null && f.type === M && f.key == null ? f.props.children : f) ? x : [x], t, n, r, o, i, s, a, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && s.push(u), h && (u.__E = u.__ = null);
      } catch (T) {
        t.__v = null, c || i != null ? (t.__e = a, t.__u |= c ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), O.__e(T, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xr(n.__e, t, n, r, o, i, s, c, l);
  (f = O.diffed) && f(t);
}
function Vn(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    kt(n[r], n[++r], n[++r]);
  O.__c && O.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      O.__e(i, o.__v);
    }
  });
}
function Xr(e, t, n, r, o, i, s, a, c) {
  var l, f, u, d, _, p, b, h = n.props, m = t.props, y = t.type;
  if (y === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((_ = i[l]) && "setAttribute" in _ == !!y && (y ? _.localName === y : _.nodeType === 3)) {
        e = _, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (y === null)
      return document.createTextNode(m);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, m.is && m), i = null, a = !1;
  }
  if (y === null)
    h === m || a && e.data === m || (e.data = m);
  else {
    if (i = i && ke.call(e.childNodes), h = n.props || Ne, !a && i != null)
      for (h = {}, l = 0; l < e.attributes.length; l++)
        h[(_ = e.attributes[l]).name] = _.value;
    for (l in h)
      _ = h[l], l == "children" || (l == "dangerouslySetInnerHTML" ? u = _ : l === "key" || l in m || $e(e, l, null, _, o));
    for (l in m)
      _ = m[l], l == "children" ? d = _ : l == "dangerouslySetInnerHTML" ? f = _ : l == "value" ? p = _ : l == "checked" ? b = _ : l === "key" || a && typeof _ != "function" || h[l] === _ || $e(e, l, _, h[l], o);
    if (f)
      a || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Mn(e, Be(d) ? d : [d], t, n, r, o && y !== "foreignObject", i, s, i ? i[0] : n.__k && de(n, 0), a, c), i != null)
      for (l = i.length; l--; )
        i[l] != null && $n(i[l]);
    a || (l = "value", p !== void 0 && (p !== e[l] || y === "progress" && !p || y === "option" && p !== h[l]) && $e(e, l, p, h[l], !1), l = "checked", b !== void 0 && b !== e[l] && $e(e, l, b, h[l], !1));
  }
  return e;
}
function kt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    O.__e(r, n);
  }
}
function dt(e, t, n) {
  var r, o;
  if (O.unmount && O.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || kt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        O.__e(i, t);
      }
    r.base = r.__P = null;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && dt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || $n(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function Zr(e, t, n) {
  return this.constructor(e, n);
}
function Se(e, t, n) {
  var r, o, i, s;
  O.__ && O.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], Ot(t, e = (!r && n || t).__k = X(M, null, [e]), o || Ne, Ne, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? ke.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), Vn(i, e, s);
}
function Fn(e, t) {
  Se(e, t, Fn);
}
function Jr(e, t, n) {
  var r, o, i, s, a = J({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? ke.call(arguments, 2) : n), we(e.type, a, r || e.key, o || e.ref, null);
}
function jn(e, t) {
  var n = { __c: t = "__cC" + Tn++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, ft(a);
      });
    }, this.sub = function(s) {
      o.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o.splice(o.indexOf(s), 1), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
ke = Rn.slice, O = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Dn = 0, Y.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = J({}, this.state), typeof e == "function" && (e = e(J({}, n), this.props)), e && J(n, e), e != null && this.__v && (t && this._sb.push(t), ft(this));
}, Y.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ft(this));
}, Y.prototype.render = M, le = [], xn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ut = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Fe.__r = 0, Ct = 0, ct = Bt(!1), lt = Bt(!0), Tn = 0;
var ee, $, tt, qt, ye = 0, zn = [], Pe = [], A = O, Kt = A.__b, Gt = A.__r, Yt = A.diffed, Xt = A.__c, Zt = A.unmount, Jt = A.__;
function pe(e, t) {
  A.__h && A.__h($, e, ye || t), ye = 0;
  var n = $.__H || ($.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Pe }), n.__[e];
}
function qe(e) {
  return ye = 1, ae(Bn, e);
}
function ae(e, t, n) {
  var r = pe(ee++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Bn(void 0, t), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, a);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = $, !$.u)) {
    var o = function(a, c, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (f.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, a, c, l);
      var u = !1;
      return f.forEach(function(d) {
        if (d.__N) {
          var _ = d.__[0];
          d.__ = d.__N, d.__N = void 0, _ !== d.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === a) && (!i || i.call(this, a, c, l));
    };
    $.u = !0;
    var i = $.shouldComponentUpdate, s = $.componentWillUpdate;
    $.componentWillUpdate = function(a, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, c, l), i = f;
      }
      s && s.call(this, a, c, l);
    }, $.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function oe(e, t) {
  var n = pe(ee++, 3);
  !A.__s && xt(n.__H, t) && (n.__ = e, n.i = t, $.__H.__h.push(n));
}
function De(e, t) {
  var n = pe(ee++, 4);
  !A.__s && xt(n.__H, t) && (n.__ = e, n.i = t, $.__h.push(n));
}
function Ke(e) {
  return ye = 5, Ge(function() {
    return { current: e };
  }, []);
}
function Dt(e, t, n) {
  ye = 6, De(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function Ge(e, t) {
  var n = pe(ee++, 7);
  return xt(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Ln(e, t) {
  return ye = 8, Ge(function() {
    return e;
  }, t);
}
function Un(e) {
  var t = $.context[e.__c], n = pe(ee++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub($)), t.props.value) : e.__;
}
function Wn(e, t) {
  A.useDebugValue && A.useDebugValue(t ? t(e) : e);
}
function Qr(e) {
  var t = pe(ee++, 10), n = qe();
  return t.__ = e, $.componentDidCatch || ($.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Hn() {
  var e = pe(ee++, 11);
  if (!e.__) {
    for (var t = $.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function eo() {
  for (var e; e = zn.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ve), e.__H.__h.forEach(_t), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], A.__e(t, e.__v);
      }
}
A.__b = function(e) {
  $ = null, Kt && Kt(e);
}, A.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Jt && Jt(e, t);
}, A.__r = function(e) {
  Gt && Gt(e), ee = 0;
  var t = ($ = e.__c).__H;
  t && (tt === $ ? (t.__h = [], $.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Pe, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ve), t.__h.forEach(_t), t.__h = [], ee = 0)), tt = $;
}, A.diffed = function(e) {
  Yt && Yt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (zn.push(t) !== 1 && qt === A.requestAnimationFrame || ((qt = A.requestAnimationFrame) || to)(eo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Pe && (n.__ = n.__V), n.i = void 0, n.__V = Pe;
  })), tt = $ = null;
}, A.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ve), n.__h = n.__h.filter(function(r) {
        return !r.__ || _t(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], A.__e(r, n.__v);
    }
  }), Xt && Xt(e, t);
}, A.unmount = function(e) {
  Zt && Zt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ve(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && A.__e(t, n.__v));
};
var Qt = typeof requestAnimationFrame == "function";
function to(e) {
  var t, n = function() {
    clearTimeout(r), Qt && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Qt && (t = requestAnimationFrame(n));
}
function Ve(e) {
  var t = $, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), $ = t;
}
function _t(e) {
  var t = $;
  e.__c = e.__(), $ = t;
}
function xt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function je(e, t) {
  this.props = e, this.context = t;
}
function Kn(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : pt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, X(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(je.prototype = new Y()).isPureReactComponent = !0, je.prototype.shouldComponentUpdate = function(e, t) {
  return pt(this.props, e) || pt(this.state, t);
};
var en = O.__b;
O.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), en && en(e);
};
var no = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function he(e) {
  function t(n) {
    var r = qn({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = no, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var tn = function(e, t) {
  return e == null ? null : Q(Q(e).map(t));
}, Gn = { map: tn, forEach: tn, count: function(e) {
  return e ? Q(e).length : 0;
}, only: function(e) {
  var t = Q(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Q }, ro = O.__e;
O.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  ro(e, t, n, r);
};
var nn = O.unmount;
function Yn(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = qn({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Yn(r, t, n);
  })), e;
}
function Xn(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Xn(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ee() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Zn(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Jn(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r)
      throw r;
    if (!n)
      throw t;
    return X(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function me() {
  this.u = null, this.o = null;
}
O.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), nn && nn(e);
}, (Ee.prototype = new Y()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Zn(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Xn(c, c.__c.__P, c.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
        l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, Ee.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ee.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Yn(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && X(M, null, e.fallback);
  return o && (o.__u &= -33), [X(M, null, t.__a ? null : e.children), o];
};
var rn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function oo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function io(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    Se(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), Se(X(oo, { context: t.context }, e.__v), t.l);
}
function Qn(e, t) {
  var n = X(io, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(me.prototype = new Y()).__a = function(e) {
  var t = this, n = Zn(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), rn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, me.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Q(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, me.prototype.componentDidUpdate = me.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    rn(e, n, t);
  });
};
var er = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, so = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ao = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, uo = /[A-Z0-9]/g, co = typeof document < "u", lo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Tt(e, t, n) {
  return t.__k == null && (t.textContent = ""), Se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Rt(e, t, n) {
  return Fn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Y.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var on = O.event;
function fo() {
}
function _o() {
  return this.cancelBubble;
}
function po() {
  return this.defaultPrevented;
}
O.event = function(e) {
  return on && (e = on(e)), e.persist = fo, e.isPropagationStopped = _o, e.isDefaultPrevented = po, e.nativeEvent = e;
};
var $t, ho = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, sn = O.vnode;
O.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || co && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || lo(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : ao.test(i) ? i = a : r.indexOf("-") === -1 && so.test(i) ? i = i.replace(uo, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Q(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Q(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ho)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = er, sn && sn(e);
};
var an = O.__r;
O.__r = function(e) {
  an && an(e), $t = e.__c;
};
var un = O.diffed;
O.diffed = function(e) {
  un && un(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), $t = null;
};
var tr = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return $t.__n[e.__c].props.value;
} } } }, mo = "17.0.2";
function nr(e) {
  return X.bind(null, e);
}
function xe(e) {
  return !!e && e.$$typeof === er;
}
function rr(e) {
  return xe(e) && e.type === M;
}
function or(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function ir(e) {
  return xe(e) ? Jr.apply(null, arguments) : e;
}
function At(e) {
  return !!e.__k && (Se(null, e), !0);
}
function sr(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ar = function(e, t) {
  return e(t);
}, ur = function(e, t) {
  return e(t);
}, cr = M;
function It(e) {
  e();
}
function lr(e) {
  return e;
}
function fr() {
  return [!1, It];
}
var dr = De, _r = xe;
function pr(e, t) {
  var n = t(), r = qe({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return De(function() {
    o.__ = n, o.v = t, nt(o) && i({ h: o });
  }, [e, n, t]), oe(function() {
    return nt(o) && i({ h: o }), e(function() {
      nt(o) && i({ h: o });
    });
  }, [e]), n;
}
function nt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var Ye = { useState: qe, useId: Hn, useReducer: ae, useEffect: oe, useLayoutEffect: De, useInsertionEffect: dr, useTransition: fr, useDeferredValue: lr, useSyncExternalStore: pr, startTransition: It, useRef: Ke, useImperativeHandle: Dt, useMemo: Ge, useCallback: Ln, useContext: Un, useDebugValue: Wn, version: "17.0.2", Children: Gn, render: Tt, hydrate: Rt, unmountComponentAtNode: At, createPortal: Qn, createElement: X, createContext: jn, createFactory: nr, cloneElement: ir, createRef: An, Fragment: M, isValidElement: xe, isElement: _r, isFragment: rr, isMemo: or, findDOMNode: sr, Component: Y, PureComponent: je, memo: Kn, forwardRef: he, flushSync: ur, unstable_batchedUpdates: ar, StrictMode: cr, Suspense: Ee, SuspenseList: me, lazy: Jn, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tr };
const ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Gn,
  Component: Y,
  Fragment: M,
  PureComponent: je,
  StrictMode: cr,
  Suspense: Ee,
  SuspenseList: me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tr,
  cloneElement: ir,
  createContext: jn,
  createElement: X,
  createFactory: nr,
  createPortal: Qn,
  createRef: An,
  default: Ye,
  findDOMNode: sr,
  flushSync: ur,
  forwardRef: he,
  hydrate: Rt,
  isElement: _r,
  isFragment: rr,
  isMemo: or,
  isValidElement: xe,
  lazy: Jn,
  memo: Kn,
  render: Tt,
  startTransition: It,
  unmountComponentAtNode: At,
  unstable_batchedUpdates: ar,
  useCallback: Ln,
  useContext: Un,
  useDebugValue: Wn,
  useDeferredValue: lr,
  useEffect: oe,
  useErrorBoundary: Qr,
  useId: Hn,
  useImperativeHandle: Dt,
  useInsertionEffect: dr,
  useLayoutEffect: De,
  useMemo: Ge,
  useReducer: ae,
  useRef: Ke,
  useState: qe,
  useSyncExternalStore: pr,
  useTransition: fr,
  version: mo
}, Symbol.toStringTag, { value: "Module" }));
function hr(e) {
  return {
    render(t) {
      Tt(t, e);
    },
    unmount() {
      At(e);
    }
  };
}
function yo(e, t) {
  return Rt(t, e), hr(e);
}
const vo = {
  createRoot: hr,
  hydrateRoot: yo
};
function bo(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var mt = { exports: {} }, rt = {};
const mr = /* @__PURE__ */ bo(ht);
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function go() {
  if (cn)
    return rt;
  cn = 1;
  var e = mr;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return rt.useSyncExternalStoreWithSelector = function(c, l, f, u, d) {
    var _ = o(null);
    if (_.current === null) {
      var p = { hasValue: !1, value: null };
      _.current = p;
    } else
      p = _.current;
    _ = s(function() {
      function h(E) {
        if (!m) {
          if (m = !0, y = E, E = u(E), d !== void 0 && p.hasValue) {
            var S = p.value;
            if (d(S, E))
              return v = S;
          }
          return v = E;
        }
        if (S = v, n(y, E))
          return S;
        var C = u(E);
        return d !== void 0 && d(S, C) ? S : (y = E, v = C);
      }
      var m = !1, y, v, g = f === void 0 ? null : f;
      return [function() {
        return h(l());
      }, g === null ? void 0 : function() {
        return h(g());
      }];
    }, [l, f, u, d]);
    var b = r(c, _[0], _[1]);
    return i(function() {
      p.hasValue = !0, p.value = b;
    }, [b]), a(b), b;
  }, rt;
}
var ot = {}, ln;
function wo() {
  if (ln)
    return ot;
  ln = 1;
  var e = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return e.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = mr;
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, a = t.useMemo, c = t.useDebugValue;
    function l(f, u, d, _, p) {
      var b = i(null), h;
      b.current === null ? (h = {
        hasValue: !1,
        value: null
      }, b.current = h) : h = b.current;
      var m = a(function() {
        var E = !1, S, C, x = function(G) {
          if (!E) {
            E = !0, S = G;
            var F = _(G);
            if (p !== void 0 && h.hasValue) {
              var z = h.value;
              if (p(z, F))
                return C = z, z;
            }
            return C = F, F;
          }
          var q = S, P = C;
          if (r(q, G))
            return P;
          var L = _(G);
          return p !== void 0 && p(P, L) ? P : (S = G, C = L, L);
        }, D = d === void 0 ? null : d, T = function() {
          return x(u());
        }, j = D === null ? void 0 : function() {
          return x(D());
        };
        return [T, j];
      }, [u, d, _, p]), y = m[0], v = m[1], g = o(f, y, v);
      return s(function() {
        h.hasValue = !0, h.value = g;
      }, [g]), c(g), g;
    }
    ot.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ot;
}
var Eo = {};
Eo.NODE_ENV === "production" ? mt.exports = go() : mt.exports = wo();
var No = mt.exports, ze = {}, W = (
  // prettier-ignore
  // @ts-ignore
  "default" in ht ? Ye : ht
), fn = Symbol.for("react-redux-context"), dn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function So() {
  if (!W.createContext)
    return {};
  const e = dn[fn] ?? (dn[fn] = /* @__PURE__ */ new Map());
  let t = e.get(W.createContext);
  return t || (t = W.createContext(
    null
  ), ze.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(W.createContext, t)), t;
}
var ie = /* @__PURE__ */ So(), Co = () => {
  throw new Error("uSES not initialized!");
};
function Mt(e = ie) {
  return function() {
    const n = W.useContext(e);
    if (ze.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var yr = /* @__PURE__ */ Mt(), vr = Co, Oo = (e) => {
  vr = e;
}, ko = (e, t) => e === t;
function Do(e = ie) {
  const t = e === ie ? yr : Mt(e), n = (r, o = {}) => {
    const { equalityFn: i = ko, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o;
    if (ze.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof i != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: f,
      identityFunctionCheck: u
    } = t(), d = W.useRef(!0), _ = W.useCallback(
      {
        [r.name](b) {
          const h = r(b);
          if (ze.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: m,
              stabilityCheck: y
            } = {
              stabilityCheck: f,
              identityFunctionCheck: u,
              ...s
            };
            if (y === "always" || y === "once" && d.current) {
              const v = r(b);
              if (!i(h, v)) {
                let g;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: g } = E);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: b,
                    selected: h,
                    selected2: v,
                    stack: g
                  }
                );
              }
            }
            if ((m === "always" || m === "once" && d.current) && h === b) {
              let v;
              try {
                throw new Error();
              } catch (g) {
                ({ stack: v } = g);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: v }
              );
            }
            d.current && (d.current = !1);
          }
          return h;
        }
      }[r.name],
      [r, f, s.stabilityCheck]
    ), p = vr(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      _,
      i
    );
    return W.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Z = /* @__PURE__ */ Do();
function xo(e) {
  e();
}
function To() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      xo(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var _n = {
  notify() {
  },
  get: () => []
};
function Ro(e, t) {
  let n, r = _n, o = 0, i = !1;
  function s(b) {
    f();
    const h = r.subscribe(b);
    let m = !1;
    return () => {
      m || (m = !0, h(), u());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    p.onStateChange && p.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = To());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = _n);
  }
  function d() {
    i || (i = !0, f());
  }
  function _() {
    i && (i = !1, u());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: _,
    getListeners: () => r
  };
  return p;
}
var $o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ao = $o ? W.useLayoutEffect : W.useEffect;
function Io({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = W.useMemo(() => {
    const l = Ro(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = W.useMemo(() => e.getState(), [e]);
  Ao(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || ie;
  return /* @__PURE__ */ W.createElement(c.Provider, { value: s }, n);
}
var Mo = Io;
function br(e = ie) {
  const t = e === ie ? yr : (
    // @ts-ignore
    Mt(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Po = /* @__PURE__ */ br();
function Vo(e = ie) {
  const t = e === ie ? Po : br(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ue = /* @__PURE__ */ Vo();
Oo(No.useSyncExternalStoreWithSelector);
var I = {};
function V(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Fo = typeof Symbol == "function" && Symbol.observable || "@@observable", pn = Fo, it = () => Math.random().toString(36).substring(7).split("").join("."), jo = {
  INIT: `@@redux/INIT${/* @__PURE__ */ it()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ it()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${it()}`
}, fe = jo;
function Te(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function zo(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Wo(e))
    return "date";
  if (Uo(e))
    return "error";
  const n = Lo(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Lo(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Uo(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Wo(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function re(e) {
  let t = typeof e;
  return I.NODE_ENV !== "production" && (t = zo(e)), t;
}
function gr(e, t, n) {
  if (typeof e != "function")
    throw new Error(I.NODE_ENV === "production" ? V(2) : `Expected the root reducer to be a function. Instead, received: '${re(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(I.NODE_ENV === "production" ? V(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(I.NODE_ENV === "production" ? V(1) : `Expected the enhancer to be a function. Instead, received: '${re(n)}'`);
    return n(gr)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, c = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, m) => {
      s.set(m, h);
    }));
  }
  function f() {
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function u(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(4) : `Expected the listener to be a function. Instead, received: '${re(h)}'`);
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    l();
    const y = a++;
    return s.set(y, h), function() {
      if (m) {
        if (c)
          throw new Error(I.NODE_ENV === "production" ? V(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, l(), s.delete(y), i = null;
      }
    };
  }
  function d(h) {
    if (!Te(h))
      throw new Error(I.NODE_ENV === "production" ? V(7) : `Actions must be plain objects. Instead, the actual type was: '${re(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof h.type > "u")
      throw new Error(I.NODE_ENV === "production" ? V(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof h.type != "string")
      throw new Error(I.NODE_ENV === "production" ? V(17) : `Action "type" property must be a string. Instead, the actual type was: '${re(h.type)}'. Value was: '${h.type}' (stringified)`);
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, h);
    } finally {
      c = !1;
    }
    return (i = s).forEach((y) => {
      y();
    }), h;
  }
  function _(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(10) : `Expected the nextReducer to be a function. Instead, received: '${re(h)}`);
    r = h, d({
      type: fe.REPLACE
    });
  }
  function p() {
    const h = u;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(m) {
        if (typeof m != "object" || m === null)
          throw new Error(I.NODE_ENV === "production" ? V(11) : `Expected the observer to be an object. Instead, received: '${re(m)}'`);
        function y() {
          const g = m;
          g.next && g.next(f());
        }
        return y(), {
          unsubscribe: h(y)
        };
      },
      [pn]() {
        return this;
      }
    };
  }
  return d({
    type: fe.INIT
  }), {
    dispatch: d,
    subscribe: u,
    getState: f,
    replaceReducer: _,
    [pn]: p
  };
}
function hn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ho(e, t, n, r) {
  const o = Object.keys(t), i = n && n.type === fe.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Te(e))
    return `The ${i} has unexpected type of "${re(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const s = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !r[a]);
  if (s.forEach((a) => {
    r[a] = !0;
  }), !(n && n.type === fe.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Bo(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: fe.INIT
    }) > "u")
      throw new Error(I.NODE_ENV === "production" ? V(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: fe.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(I.NODE_ENV === "production" ? V(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${fe.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function qo(e) {
  const t = Object.keys(e), n = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    I.NODE_ENV !== "production" && typeof e[a] > "u" && hn(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (n[a] = e[a]);
  }
  const r = Object.keys(n);
  let o;
  I.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    Bo(n);
  } catch (s) {
    i = s;
  }
  return function(a = {}, c) {
    if (i)
      throw i;
    if (I.NODE_ENV !== "production") {
      const u = Ho(a, n, c, o);
      u && hn(u);
    }
    let l = !1;
    const f = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u], _ = n[d], p = a[d], b = _(p, c);
      if (typeof b > "u") {
        const h = c && c.type;
        throw new Error(I.NODE_ENV === "production" ? V(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[d] = b, l = l || b !== p;
    }
    return l = l || r.length !== Object.keys(a).length, l ? f : a;
  };
}
function Le(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Ko(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(I.NODE_ENV === "production" ? V(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(s));
    return i = Le(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function wr(e) {
  return Te(e) && "type" in e && typeof e.type == "string";
}
var Re = {}, Er = Symbol.for("immer-nothing"), mn = Symbol.for("immer-draftable"), H = Symbol.for("immer-state"), Go = Re.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function U(e, ...t) {
  if (Re.NODE_ENV !== "production") {
    const n = Go[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ve = Object.getPrototypeOf;
function se(e) {
  return !!e && !!e[H];
}
function te(e) {
  var t;
  return e ? Nr(e) || Array.isArray(e) || !!e[mn] || !!((t = e.constructor) != null && t[mn]) || Ze(e) || Je(e) : !1;
}
var Yo = Object.prototype.constructor.toString();
function Nr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ve(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Yo;
}
function Ue(e, t) {
  Xe(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Xe(e) {
  const t = e[H];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ze(e) ? 2 : Je(e) ? 3 : 0;
}
function yt(e, t) {
  return Xe(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Sr(e, t, n) {
  const r = Xe(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Xo(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ze(e) {
  return e instanceof Map;
}
function Je(e) {
  return e instanceof Set;
}
function ce(e) {
  return e.copy_ || e.base_;
}
function vt(e, t) {
  if (Ze(e))
    return new Map(e);
  if (Je(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Nr(e))
    return ve(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[H];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = n[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[i]
    });
  }
  return Object.create(ve(e), n);
}
function Pt(e, t = !1) {
  return Qe(e) || se(e) || !te(e) || (Xe(e) > 1 && (e.set = e.add = e.clear = e.delete = Zo), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Pt(r, !0))), e;
}
function Zo() {
  U(2);
}
function Qe(e) {
  return Object.isFrozen(e);
}
var Jo = {};
function _e(e) {
  const t = Jo[e];
  return t || U(0, e), t;
}
var Ce;
function Cr() {
  return Ce;
}
function Qo(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function yn(e, t) {
  t && (_e("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function bt(e) {
  gt(e), e.drafts_.forEach(ei), e.drafts_ = null;
}
function gt(e) {
  e === Ce && (Ce = e.parent_);
}
function vn(e) {
  return Ce = Qo(Ce, e);
}
function ei(e) {
  const t = e[H];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function bn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[H].modified_ && (bt(t), U(4)), te(e) && (e = We(t, e), t.parent_ || He(t, e)), t.patches_ && _e("Patches").generateReplacementPatches_(
    n[H].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = We(t, n, []), bt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Er ? e : void 0;
}
function We(e, t, n) {
  if (Qe(t))
    return t;
  const r = t[H];
  if (!r)
    return Ue(
      t,
      (o, i) => gn(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return He(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Ue(
      i,
      (a, c) => gn(e, r, o, a, c, n, s)
    ), He(e, o, !1), n && e.patches_ && _e("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function gn(e, t, n, r, o, i, s) {
  if (Re.NODE_ENV !== "production" && o === n && U(5), se(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !yt(t.assigned_, r) ? i.concat(r) : void 0, c = We(e, o, a);
    if (Sr(n, r, c), se(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (te(o) && !Qe(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    We(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && He(e, o);
  }
}
function He(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Pt(t, n);
}
function ti(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Cr(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, i = Vt;
  n && (o = [r], i = Oe);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var Vt = {
  get(e, t) {
    if (t === H)
      return e;
    const n = ce(e);
    if (!yt(n, t))
      return ni(e, n, t);
    const r = n[t];
    return e.finalized_ || !te(r) ? r : r === st(e.base_, t) ? (at(e), e.copy_[t] = Et(r, e)) : r;
  },
  has(e, t) {
    return t in ce(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ce(e));
  },
  set(e, t, n) {
    const r = Or(ce(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = st(ce(e), t), i = o == null ? void 0 : o[H];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Xo(n, o) && (n !== void 0 || yt(e.base_, t)))
        return !0;
      at(e), wt(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return st(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, at(e), wt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = ce(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    U(11);
  },
  getPrototypeOf(e) {
    return ve(e.base_);
  },
  setPrototypeOf() {
    U(12);
  }
}, Oe = {};
Ue(Vt, (e, t) => {
  Oe[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Oe.deleteProperty = function(e, t) {
  return Re.NODE_ENV !== "production" && isNaN(parseInt(t)) && U(13), Oe.set.call(this, e, t, void 0);
};
Oe.set = function(e, t, n) {
  return Re.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && U(14), Vt.set.call(this, e[0], t, n, e[0]);
};
function st(e, t) {
  const n = e[H];
  return (n ? ce(n) : e)[t];
}
function ni(e, t, n) {
  var o;
  const r = Or(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Or(e, t) {
  if (!(t in e))
    return;
  let n = ve(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = ve(n);
  }
}
function wt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && wt(e.parent_));
}
function at(e) {
  e.copy_ || (e.copy_ = vt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ri = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function(c = i, ...l) {
          return s.produce(c, (f) => n.call(this, f, ...l));
        };
      }
      typeof n != "function" && U(6), r !== void 0 && typeof r != "function" && U(7);
      let o;
      if (te(t)) {
        const i = vn(this), s = Et(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? bt(i) : gt(i);
        }
        return yn(i, r), bn(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Er && (o = void 0), this.autoFreeze_ && Pt(o, !0), r) {
          const i = [], s = [];
          _e("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        U(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (c) => t(c, ...a));
      let r, o;
      return [this.produce(t, n, (s, a) => {
        r = s, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    te(e) || U(8), se(e) && (e = kr(e));
    const t = vn(this), n = Et(e, void 0);
    return n[H].isManual_ = !0, gt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[H];
    (!n || !n.isManual_) && U(9);
    const { scope_: r } = n;
    return yn(r, t), bn(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = _e("Patches").applyPatches_;
    return se(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Et(e, t) {
  const n = Ze(e) ? _e("MapSet").proxyMap_(e, t) : Je(e) ? _e("MapSet").proxySet_(e, t) : ti(e, t);
  return (t ? t.scope_ : Cr()).drafts_.push(n), n;
}
function kr(e) {
  return se(e) || U(10, e), Dr(e);
}
function Dr(e) {
  if (!te(e) || Qe(e))
    return e;
  const t = e[H];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = vt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = vt(e, !0);
  return Ue(n, (r, o) => {
    Sr(n, r, Dr(o));
  }), t && (t.finalized_ = !1), n;
}
var B = new ri(), xr = B.produce;
B.produceWithPatches.bind(
  B
);
B.setAutoFreeze.bind(B);
B.setUseStrictShallowCopy.bind(B);
B.applyPatches.bind(B);
B.createDraft.bind(B);
B.finishDraft.bind(B);
var oi = {}, ii = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let r = !1;
    try {
      const o = {};
      e(o) === o && (r = !0);
    } catch {
    }
    if (r) {
      let o;
      try {
        throw new Error();
      } catch (i) {
        ({ stack: o } = i);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, si = (e, t, n) => {
  const { memoize: r, memoizeOptions: o } = t, { inputSelectorResults: i, inputSelectorResultsCopy: s } = e, a = r(() => ({}), ...o);
  if (!(a.apply(null, i) === a.apply(null, s))) {
    let l;
    try {
      throw new Error();
    } catch (f) {
      ({ stack: l } = f);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: i,
        secondInputs: s,
        stack: l
      }
    );
  }
}, ai = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function ui(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function ci(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function li(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var wn = (e) => Array.isArray(e) ? e : [e];
function fi(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return li(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function En(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var di = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...ai,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: ii
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: si
    }
  };
}, _i = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, pi = typeof WeakRef < "u" ? WeakRef : _i, hi = 0, Nn = 1;
function Ae() {
  return {
    s: hi,
    v: void 0,
    o: null,
    p: null
  };
}
function Ft(e, t = {}) {
  let n = Ae();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function s() {
    var u;
    let a = n;
    const { length: c } = arguments;
    for (let d = 0, _ = c; d < _; d++) {
      const p = arguments[d];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let b = a.o;
        b === null && (a.o = b = /* @__PURE__ */ new WeakMap());
        const h = b.get(p);
        h === void 0 ? (a = Ae(), b.set(p, a)) : a = h;
      } else {
        let b = a.p;
        b === null && (a.p = b = /* @__PURE__ */ new Map());
        const h = b.get(p);
        h === void 0 ? (a = Ae(), b.set(p, a)) : a = h;
      }
    }
    const l = a;
    let f;
    if (a.s === Nn ? f = a.v : (f = e.apply(null, arguments), i++), l.s = Nn, r) {
      const d = ((u = o == null ? void 0 : o.deref) == null ? void 0 : u.call(o)) ?? o;
      d != null && r(d, f) && (f = d, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new pi(f) : f;
    }
    return l.v = f, f;
  }
  return s.clearCache = () => {
    n = Ae(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Tr(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), ui(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const f = {
      ...n,
      ...c
    }, {
      memoize: u,
      memoizeOptions: d = [],
      argsMemoize: _ = Ft,
      argsMemoizeOptions: p = [],
      devModeChecks: b = {}
    } = f, h = wn(d), m = wn(p), y = fi(o), v = u(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h);
    let g = !0;
    const E = _(function() {
      s++;
      const C = En(
        y,
        arguments
      );
      if (a = v.apply(null, C), oi.NODE_ENV !== "production") {
        const { identityFunctionCheck: x, inputStabilityCheck: D } = di(g, b);
        if (x.shouldRun && x.run(
          l,
          C,
          a
        ), D.shouldRun) {
          const T = En(
            y,
            arguments
          );
          D.run(
            { inputSelectorResults: C, inputSelectorResultsCopy: T },
            { memoize: u, memoizeOptions: h },
            arguments
          );
        }
        g && (g = !1);
      }
      return a;
    }, ...m);
    return Object.assign(E, {
      resultFunc: l,
      memoizedResultFunc: v,
      dependencies: y,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: u,
      argsMemoize: _
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var mi = /* @__PURE__ */ Tr(Ft), yi = Object.assign(
  (e, t = mi) => {
    ci(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (i) => e[i]
    );
    return t(
      r,
      (...i) => i.reduce((s, a, c) => (s[n[c]] = a, s), {})
    );
  },
  { withTypes: () => yi }
);
function Rr(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var vi = Rr(), bi = Rr, N = {}, gi = (...e) => {
  const t = Tr(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(se(s) ? kr(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
gi(Ft);
var wi = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Le : Le.apply(null, arguments);
}, Ei = (e) => e && typeof e.match == "function";
function be(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(N.NODE_ENV === "production" ? R(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => wr(r) && r.type === e, n;
}
function Ni(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Ei(e);
}
function Si(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Ci(e = {}) {
  if (N.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = Ni
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(Si(r.type)), n(r));
}
function $r(e, t) {
  let n = 0;
  return {
    measureTime(r) {
      const o = Date.now();
      try {
        return r();
      } finally {
        const i = Date.now();
        n += i - o;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Ar = class ge extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ge.prototype);
  }
  static get [Symbol.species]() {
    return ge;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ge(...t[0].concat(this)) : new ge(...t.concat(this));
  }
};
function Sn(e) {
  return te(e) ? xr(e, () => {
  }) : e;
}
function Cn(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(N.NODE_ENV === "production" ? R(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Oi(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function ki(e, t, n) {
  const r = Ir(e, t, n);
  return {
    detectMutations() {
      return Mr(e, t, r, n);
    }
  };
}
function Ir(e, t = [], n, r = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), i.children = {};
    for (const s in n) {
      const a = r ? r + "." + s : s;
      t.length && t.indexOf(a) !== -1 || (i.children[s] = Ir(e, t, n[s], a));
    }
  }
  return i;
}
function Mr(e, t = [], n, r, o = !1, i = "") {
  const s = n ? n.value : void 0, a = s === r;
  if (o && !a && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: i
    };
  if (e(s) || e(r))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let f in n.children)
    c[f] = !0;
  for (let f in r)
    c[f] = !0;
  const l = t.length > 0;
  for (let f in c) {
    const u = i ? i + "." + f : f;
    if (l && t.some((p) => p instanceof RegExp ? p.test(u) : u === p))
      continue;
    const d = Mr(e, t, n.children[f], r[f], a, u);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function Di(e = {}) {
  if (N.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(a, c, l, f) {
      return JSON.stringify(a, n(c, f), l);
    }, n = function(a, c) {
      let l = [], f = [];
      return c || (c = function(u, d) {
        return l[0] === d ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(d)).join(".") + "]";
      }), function(u, d) {
        if (l.length > 0) {
          var _ = l.indexOf(this);
          ~_ ? l.splice(_ + 1) : l.push(this), ~_ ? f.splice(_, 1 / 0, u) : f.push(u), ~l.indexOf(d) && (d = c.call(this, u, d));
        } else
          l.push(d);
        return a == null ? d : a.call(this, u, d);
      };
    }, {
      isImmutable: r = Oi,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const s = ki.bind(null, r, o);
    return ({
      getState: a
    }) => {
      let c = a(), l = s(c), f;
      return (u) => (d) => {
        const _ = $r(i, "ImmutableStateInvariantMiddleware");
        _.measureTime(() => {
          if (c = a(), f = l.detectMutations(), l = s(c), f.wasMutated)
            throw new Error(N.NODE_ENV === "production" ? R(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = u(d);
        return _.measureTime(() => {
          if (c = a(), f = l.detectMutations(), l = s(c), f.wasMutated)
            throw new Error(N.NODE_ENV === "production" ? R(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), _.warnIfExceeded(), p;
      };
    };
  }
}
function Pr(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Te(e);
}
function Nt(e, t = "", n = Pr, r, o = [], i) {
  let s;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e))
    return !1;
  const a = r != null ? r(e) : Object.entries(e), c = o.length > 0;
  for (const [l, f] of a) {
    const u = t ? t + "." + l : l;
    if (!(c && o.some((_) => _ instanceof RegExp ? _.test(u) : u === _))) {
      if (!n(f))
        return {
          keyPath: u,
          value: f
        };
      if (typeof f == "object" && (s = Nt(f, u, n, r, o, i), s))
        return s;
    }
  }
  return i && Vr(e) && i.add(e), !1;
}
function Vr(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Vr(t))
      return !1;
  return !0;
}
function xi(e = {}) {
  if (N.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = Pr,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: s = 32,
      ignoreState: a = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, f = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (u) => (d) => (_) => {
      if (!wr(_))
        return d(_);
      const p = d(_), b = $r(s, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(_.type) !== -1) && b.measureTime(() => {
        const h = Nt(_, "", t, n, o, f);
        if (h) {
          const {
            keyPath: m,
            value: y
          } = h;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, y, `
Take a look at the logic that dispatched this action: `, _, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (b.measureTime(() => {
        const h = u.getState(), m = Nt(h, "", t, n, i, f);
        if (m) {
          const {
            keyPath: y,
            value: v
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${y}\`. Value:`, v, `
Take a look at the reducer(s) handling this action type: ${_.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), b.warnIfExceeded()), p;
    };
  }
}
function Ie(e) {
  return typeof e == "boolean";
}
var Ti = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Ar();
  if (n && (Ie(n) ? s.push(vi) : s.push(bi(n.extraArgument))), N.NODE_ENV !== "production") {
    if (r) {
      let a = {};
      Ie(r) || (a = r), s.unshift(Di(a));
    }
    if (o) {
      let a = {};
      Ie(o) || (a = o), s.push(xi(a));
    }
    if (i) {
      let a = {};
      Ie(i) || (a = i), s.unshift(Ci(a));
    }
  }
  return s;
}, Ri = "RTK_autoBatch", Fr = (e) => (t) => {
  setTimeout(t, e);
}, $i = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Fr(10), Ai = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? $i : e.type === "callback" ? e.queueNotification : Fr(e.timeout), l = () => {
    s = !1, i && (i = !1, a.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const u = () => o && f(), d = r.subscribe(u);
      return a.add(f), () => {
        d(), a.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var u;
      try {
        return o = !((u = f == null ? void 0 : f.meta) != null && u[Ri]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(f);
      } finally {
        o = !0;
      }
    }
  });
}, Ii = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Ar(e);
  return r && o.push(Ai(typeof r == "object" ? r : void 0)), o;
}, ne = N.NODE_ENV === "production";
function Mi(e) {
  const t = Ti(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Te(n))
    a = qo(n);
  else
    throw new Error(N.NODE_ENV === "production" ? R(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!ne && r && typeof r != "function")
    throw new Error(N.NODE_ENV === "production" ? R(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), !ne && !Array.isArray(c))
      throw new Error(N.NODE_ENV === "production" ? R(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (!ne && c.some((p) => typeof p != "function"))
    throw new Error(N.NODE_ENV === "production" ? R(4) : "each middleware provided to configureStore must be a function");
  let l = Le;
  o && (l = wi({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ne,
    ...typeof o == "object" && o
  }));
  const f = Ko(...c), u = Ii(f);
  if (!ne && s && typeof s != "function")
    throw new Error(N.NODE_ENV === "production" ? R(5) : "`enhancers` field must be a callback");
  let d = typeof s == "function" ? s(u) : u();
  if (!ne && !Array.isArray(d))
    throw new Error(N.NODE_ENV === "production" ? R(6) : "`enhancers` callback must return an array");
  if (!ne && d.some((p) => typeof p != "function"))
    throw new Error(N.NODE_ENV === "production" ? R(7) : "each enhancer provided to configureStore must be a function");
  !ne && c.length && !d.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const _ = l(...d);
  return gr(a, i, _);
}
function jr(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      if (N.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(N.NODE_ENV === "production" ? R(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(N.NODE_ENV === "production" ? R(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(N.NODE_ENV === "production" ? R(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(N.NODE_ENV === "production" ? R(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, o;
    },
    addMatcher(i, s) {
      if (N.NODE_ENV !== "production" && r)
        throw new Error(N.NODE_ENV === "production" ? R(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      if (N.NODE_ENV !== "production" && r)
        throw new Error(N.NODE_ENV === "production" ? R(31) : "`builder.addDefaultCase` can only be called once");
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function Pi(e) {
  return typeof e == "function";
}
function Vi(e, t) {
  if (N.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(N.NODE_ENV === "production" ? R(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, o] = jr(t), i;
  if (Pi(e))
    i = () => Sn(e());
  else {
    const a = Sn(e);
    i = () => a;
  }
  function s(a = i(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: f
    }) => f(c)).map(({
      reducer: f
    }) => f)];
    return l.filter((f) => !!f).length === 0 && (l = [o]), l.reduce((f, u) => {
      if (u)
        if (se(f)) {
          const _ = u(f, c);
          return _ === void 0 ? f : _;
        } else {
          if (te(f))
            return xr(f, (d) => u(d, c));
          {
            const d = u(f, c);
            if (d === void 0) {
              if (f === null)
                return f;
              throw new Error(N.NODE_ENV === "production" ? R(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return f;
    }, a);
  }
  return s.getInitialState = i, s;
}
var Fi = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ji = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Fi[Math.random() * 64 | 0];
  return t;
}, zi = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Li(e, t) {
  return `${e}/${t}`;
}
function Ui({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[zi];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(N.NODE_ENV === "production" ? R(11) : "`name` is a required option for createSlice");
    typeof process < "u" && N.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof o.reducers == "function" ? o.reducers(Hi()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(v, g) {
        const E = typeof v == "string" ? v : v.type;
        if (!E)
          throw new Error(N.NODE_ENV === "production" ? R(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(N.NODE_ENV === "production" ? R(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = g, f;
      },
      addMatcher(v, g) {
        return l.sliceMatchers.push({
          matcher: v,
          reducer: g
        }), f;
      },
      exposeAction(v, g) {
        return l.actionCreators[v] = g, f;
      },
      exposeCaseReducer(v, g) {
        return l.sliceCaseReducersByName[v] = g, f;
      }
    };
    c.forEach((v) => {
      const g = a[v], E = {
        reducerName: v,
        type: Li(i, v),
        createNotation: typeof o.reducers == "function"
      };
      qi(g) ? Gi(E, g, f, t) : Bi(E, g, f);
    });
    function u() {
      if (N.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(N.NODE_ENV === "production" ? R(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [v = {}, g = [], E = void 0] = typeof o.extraReducers == "function" ? jr(o.extraReducers) : [o.extraReducers], S = {
        ...v,
        ...l.sliceCaseReducersByType
      };
      return Vi(o.initialState, (C) => {
        for (let x in S)
          C.addCase(x, S[x]);
        for (let x of l.sliceMatchers)
          C.addMatcher(x.matcher, x.reducer);
        for (let x of g)
          C.addMatcher(x.matcher, x.reducer);
        E && C.addDefaultCase(E);
      });
    }
    const d = (v) => v, _ = /* @__PURE__ */ new Map();
    let p;
    function b(v, g) {
      return p || (p = u()), p(v, g);
    }
    function h() {
      return p || (p = u()), p.getInitialState();
    }
    function m(v, g = !1) {
      function E(C) {
        let x = C[v];
        if (typeof x > "u") {
          if (g)
            x = h();
          else if (N.NODE_ENV !== "production")
            throw new Error(N.NODE_ENV === "production" ? R(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return x;
      }
      function S(C = d) {
        const x = Cn(_, g, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Cn(x, C, {
          insert: () => {
            const D = {};
            for (const [T, j] of Object.entries(o.selectors ?? {}))
              D[T] = Wi(j, C, h, g);
            return D;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: S,
        get selectors() {
          return S(E);
        },
        selectSlice: E
      };
    }
    const y = {
      name: i,
      reducer: b,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...m(s),
      injectInto(v, {
        reducerPath: g,
        ...E
      } = {}) {
        const S = g ?? s;
        return v.inject({
          reducerPath: S,
          reducer: b
        }, E), {
          ...y,
          ...m(S, !0)
        };
      }
    };
    return y;
  };
}
function Wi(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    if (typeof a > "u") {
      if (r)
        a = n();
      else if (N.NODE_ENV !== "production")
        throw new Error(N.NODE_ENV === "production" ? R(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var zr = /* @__PURE__ */ Ui();
function Hi() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Bi({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !Ki(r))
      throw new Error(N.NODE_ENV === "production" ? R(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? be(e, s) : be(e));
}
function qi(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ki(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Gi({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(N.NODE_ENV === "production" ? R(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: c,
    settled: l,
    options: f
  } = n, u = o(e, i, f);
  r.exposeAction(t, u), s && r.addCase(u.fulfilled, s), a && r.addCase(u.pending, a), c && r.addCase(u.rejected, c), l && r.addMatcher(u.settled, l), r.exposeCaseReducer(t, {
    fulfilled: s || Me,
    pending: a || Me,
    rejected: c || Me,
    settled: l || Me
  });
}
function Me() {
}
var Yi = (e, t) => {
  if (typeof e != "function")
    throw new Error(N.NODE_ENV === "production" ? R(32) : `${t} is not a function`);
}, jt = "listenerMiddleware", Xi = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = be(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(N.NODE_ENV === "production" ? R(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Yi(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, Zi = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Xi(e);
  return {
    id: ji(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(N.NODE_ENV === "production" ? R(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Zi
}), Ji = Object.assign(be(`${jt}/add`), {
  withTypes: () => Ji
});
be(`${jt}/removeAll`);
var Qi = Object.assign(be(`${jt}/remove`), {
  withTypes: () => Qi
});
function R(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const es = [], Lr = zr({
  name: "fields",
  initialState: es,
  reducers: {
    registerForm: (e, t) => {
      const {
        formInstance: n,
        formId: r,
        formCategory: o,
        formTeam: i
      } = t.payload;
      e[n] = {
        fields: {},
        meta: {
          formId: r,
          formCategory: o,
          formTeam: i,
          isLoading: !1,
          isSubmitting: !1,
          step: 1
        }
      };
    },
    registerField: (e, t) => {
      const {
        formInstance: n,
        name: r,
        value: o,
        validationRules: i
      } = t.payload;
      e[n].fields[r] = {
        ...e[n].fields[r],
        value: o,
        validationRules: i
      };
    },
    updateField: (e, t) => {
      const {
        formInstance: n,
        name: r,
        value: o
      } = t.payload;
      e[n].fields[r] = {
        ...e[n].fields[r],
        value: o
      };
    },
    updateFieldErrors: (e, t) => {
      const {
        formInstance: n,
        name: r,
        errors: o
      } = t.payload;
      e[n].fields[r] = {
        ...e[n].fields[r],
        errors: o
      };
    },
    updateMeta: (e, t) => {
      const {
        formInstance: n,
        name: r,
        value: o
      } = t.payload;
      e[n].meta[r] = o;
    }
  }
}), {
  registerForm: ts,
  registerField: ns,
  updateField: K,
  updateFieldErrors: On,
  updateMeta: rs
} = Lr.actions, os = Lr.reducer, is = (e) => (t) => t.forms[e], ss = (e) => (t) => t.forms[e].meta.step, et = (e) => (t) => t.forms[e].fields, zt = (e, t) => (n) => n.forms[e].fields[t], as = {
  environment: "production",
  errors: {}
}, Ur = zr({
  name: "misc",
  initialState: as,
  reducers: {
    registerErrors: (e, t) => {
      const {
        errors: n
      } = t.payload;
      e.errors = {
        ...n
      };
    },
    setEnvironment: (e, t) => {
      const {
        env: n
      } = t.payload;
      e.environment = n;
    }
  }
}), {
  registerErrors: us,
  setEnvironment: cs
} = Ur.actions, ls = Ur.reducer, fs = () => (e) => e.misc.errors;
function Wr(e, t) {
  if (!t || t.length === 0)
    return !0;
  let n = t[0].logicalOperator === "and";
  for (const r of t) {
    if (!e[r.field])
      continue;
    const o = e[r.field].value;
    let i;
    switch (r.comparisonOperator) {
      case "=":
        i = o == r.value;
        break;
      case "!=":
        i = o !== r.value;
        break;
      case ">=":
        i = o >= r.value;
        break;
      case "<=":
        i = o <= r.value;
        break;
      case ">":
        i = o > r.value;
        break;
      case "<":
        i = o < r.value;
        break;
      default:
        console.warn(`Unsupported operator: ${r.comparisonOperator}`), i = !1;
        break;
    }
    r.logicalOperator === "and" ? n = n && i : r.logicalOperator === "or" && (n = n || i);
  }
  return n;
}
function k(e) {
  return e.map((t) => t ? "dkf_" + t : !1).filter(Boolean).join(" ");
}
function ds(e, t) {
  return new CustomEvent(e, {
    detail: t
  });
}
function _s(e, t) {
  e.dispatchEvent(t);
}
function Hr(e) {
  return ["text", "number", "email", "phone", "checkbox", "radio", "hidden"].includes(e.subType);
}
function ps() {
  const e = Ke({}), t = (n, r, o) => {
    var i;
    Hr(n) && (o(ns({
      formInstance: r,
      name: n.name,
      value: n.defaultValue,
      validationRules: n.validationRules
    })), e.current[n.name] = Ye.createRef()), (i = n.nodes) == null || i.forEach((s) => t(s, r, o));
  };
  return {
    fieldRefs: e,
    registerNode: t
  };
}
function hs(e, t, n) {
  return K({
    formInstance: e,
    name: t,
    value: n
  });
}
function ms(e, t, n) {
  return rs({
    formInstance: e,
    name: t,
    value: n
  });
}
function ys(e) {
  return () => {
  };
}
const kn = {
  update_field: hs,
  update_meta: ms,
  submit: ys
};
var vs = 0;
function w(e, t, n, r, o, i) {
  var s, a, c = {};
  for (a in t)
    a == "ref" ? s = t[a] : c[a] = t[a];
  var l = { type: e, props: c, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --vs, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s)
      c[a] === void 0 && (c[a] = s[a]);
  return O.vnode && O.vnode(l), l;
}
function bs(e) {
  const {
    formInstance: t,
    name: n,
    label: r,
    type: o,
    events: i,
    disabled: s = !1,
    ...a
  } = e, c = ue(), l = k(["button-container", "button-container--" + n]), f = k(["button", "button--" + n, "button--" + (e.buttonType || "primary")]);
  return w("div", {
    className: l,
    children: w("button", {
      type: o,
      className: f,
      onClick: () => {
        i && i.forEach((d) => {
          if (d.mapping)
            for (const _ in d.mapping) {
              const p = d.mapping[_];
              c(kn[d.name](t, _, p));
            }
          else
            c(kn[d.name](t));
        });
      },
      children: r
    }, n)
  });
}
const gs = he(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: s,
    defaultValue: a,
    visibilityConditions: c,
    validationRules: l,
    helpText: f,
    emailTag: u,
    storeAsDonorMeta: d,
    showInReceipt: _,
    childNodes: p,
    disabled: b = !1,
    ...h
  } = t, m = Z(et(r)), y = ue(), v = Wr(m, c);
  if (oe(() => {
    v && y(K({
      formInstance: r,
      name: o,
      value: a
    }));
  }, [v]), m[o] === void 0 || !v)
    return null;
  const g = k(["input", "input-checkbox", "input-checkbox--" + o]), E = k(["input--option"]);
  return w("div", {
    className: g,
    children: s ? s.map((S) => w("div", {
      className: E,
      ref: n,
      children: [w("input", {
        id: r + o + S.value,
        name: o,
        type: "checkbox",
        value: S.value,
        checked: m[o].value === S.value,
        onChange: () => y(K({
          formInstance: r,
          name: o,
          value: S.value
        }))
      }), w("label", {
        className: k(["input--label"]),
        htmlFor: r + o + S.value,
        tabIndex: 0,
        children: S.label
      })]
    }, o + S.value)) : w(M, {
      children: [w("input", {
        id: r + o,
        name: o,
        type: "checkbox",
        value: "true",
        checked: m[o].value == "true",
        onChange: () => y(K({
          formInstance: r,
          name: o,
          value: m[o].value == "true" ? "false" : "true"
        })),
        ref: n
      }, o), w("label", {
        className: k(["input--label"]),
        htmlFor: r + o,
        tabIndex: 0,
        children: i
      })]
    })
  });
}), ws = (e, t) => {
  const n = e.split(":"), r = parseInt(n[1]);
  if (typeof t == "string") {
    if (t.length >= r)
      return !0;
  } else if (typeof t == "number") {
    if (t >= r)
      return !0;
  } else
    return !1;
  return !1;
}, Es = (e, t) => {
  const n = e.split(":"), r = parseInt(n[1]);
  if (typeof t == "string") {
    if (t.length <= r)
      return !0;
  } else if (typeof t == "number") {
    if (t <= r)
      return !0;
  } else
    return !1;
  return !1;
}, Ns = (e, t) => typeof t == "string", Ss = (e, t) => Number.isInteger(t), Cs = (e, t) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t), Os = (e, t) => t != null && t.trim() !== "", ks = {
  min: ws,
  max: Es,
  string: Ns,
  numeric: Ss,
  required: Os,
  email: Cs
};
function Lt(e, t, n, r) {
  const o = Z(fs()), i = Z(zt(e, t)), s = ue();
  return {
    setValidateField: (c) => {
      if (!r || r.length === 0)
        return;
      let l = [];
      for (const f of r) {
        const u = f.split(":"), d = ks[u[0]];
        if (!d) {
          console.error(`Validator not found for rule: ${u[0]}`);
          continue;
        }
        const _ = d(f, i.value);
        if (console.log("Validator", f, i.value, _ ? "true" : "false"), !_ && o[u[0]]) {
          let p = o[u[0]];
          p.includes(":attribute") && (p = p.replace(":attribute", n)), p.includes(":max") && (p = p.replace(":max", u[1])), p.includes(":min") && (p = p.replace(":min", u[1])), l.push(p);
        }
      }
      l.length > 0 && s(On({
        formInstance: e,
        name: t,
        errors: l
      })), s(On({
        formInstance: e,
        name: t,
        errors: l
      }));
    }
  };
}
const Ds = he(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: s,
    visibilityConditions: a,
    validationRules: c,
    allowMultiple: l,
    helpText: f,
    emailTag: u,
    storeAsDonorMeta: d,
    showInReceipt: _,
    type: p,
    subType: b,
    childNodes: h,
    disabled: m = !1,
    ...y
  } = t, [v, g] = ae((q, P) => ({
    ...q,
    ...P
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: E,
    isInvalid: S
  } = v, C = Z(et(r)), x = ue(), D = C[o].errors, {
    setValidateField: T
  } = Lt(r, o, i, c), j = (q) => {
    q.preventDefault(), x(K({
      formInstance: r,
      name: o,
      value: q.target.value
    }));
    let P = !1;
    q.target.value.length > 0 && (P = !0), T(q.target.value), g({
      isActive: P
    });
  }, G = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + b]), F = k(["input", "input--" + o, "input-type--" + b, E && "input--active", D && D.length > 0 && "input--invalid"]), z = k(["input--field"]);
  return w("div", {
    className: G,
    children: w("div", {
      className: F,
      children: [i && w("label", {
        className: k(["input--label"]),
        htmlFor: o,
        children: i
      }), w("input", {
        id: o,
        className: z,
        disabled: m,
        autoComplete: "email",
        ...y,
        onChange: j,
        ref: n
      }), D && D.length !== 0 && w(M, {
        children: D.map((q, P) => w("div", {
          className: k(["input--error"]),
          children: q
        }, P))
      })]
    })
  });
});
function xs(e) {
  const {
    formInstance: t,
    html: n,
    name: r,
    label: o,
    defaultValue: i,
    visibilityConditions: s,
    helpText: a,
    customClasses: c,
    storeAsDonorMeta: l,
    showInReceipt: f,
    type: u,
    subType: d,
    childNodes: _,
    disabled: p = !1,
    ...b
  } = e, h = k(["html", ...Array.isArray(c) ? c : []]);
  return w("div", {
    className: k(["html_wrapper"]),
    children: w("div", {
      className: h,
      dangerouslySetInnerHTML: {
        __html: n
      }
    })
  });
}
const Ts = he(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: s,
    visibilityConditions: a,
    validationRules: c,
    helpText: l,
    emailTag: f,
    storeAsDonorMeta: u,
    showInReceipt: d,
    type: _,
    subType: p,
    childNodes: b,
    disabled: h = !1,
    ...m
  } = t, [y, v] = ae((F, z) => ({
    ...F,
    ...z
  }), {
    isActive: !1
  }), {
    isActive: g
  } = y, E = Z(zt(r, o)), S = ue(), C = E.errors, {
    setValidateField: x
  } = Lt(r, o, i, c);
  Dt(n, () => ({
    validate() {
      x(E.value);
    }
  }), [E]);
  const D = (F) => {
    F.preventDefault(), S(K({
      formInstance: r,
      name: o,
      value: F.target.value
    }));
    let z = !1;
    F.target.value.length > 0 && (z = !0), x(F.target.value), v({
      isActive: z
    });
  }, T = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + p]), j = k(["input", "input--" + o, "input-type--" + p, g && "input--active", C && C.length > 0 && "input--invalid"]), G = k(["input--field"]);
  return w("div", {
    className: T,
    children: w("div", {
      className: j,
      children: [i && w("label", {
        className: k(["input--label"]),
        htmlFor: o,
        children: i
      }), w("input", {
        type: "text",
        id: o,
        className: G,
        disabled: h,
        ...m,
        value: E.value,
        onChange: D,
        ref: n
      }), C && C.length !== 0 && w(M, {
        children: C.map((F, z) => w("div", {
          className: k(["input--error"]),
          children: F
        }, z))
      })]
    })
  });
}), St = Mi({
  reducer: {
    misc: ls,
    forms: os
  }
});
function Br(e) {
  switch (e) {
    case "local":
      return "http://localhost";
    case "staging":
    case "stage":
    case "development":
    case "develop":
      return "https://fundy-stage-be.do.dekodes.no";
    case "production":
    default:
      return "https://fundy-prod.do.dekodes.no/core";
  }
}
function Rs({
  childNodes: e,
  formInstance: t,
  fieldrefs: n
}) {
  const r = St.getState().forms[t], o = r.fields, i = r.meta, s = St.getState().misc.environment, a = (f) => {
    f.preventDefault();
    let u = !0;
    const d = {
      form_id: i.formId,
      payment_method: i.payment_method
    };
    Object.values(n.current).forEach((_) => {
      var p, b;
      (b = (p = _.current) == null ? void 0 : p.validate) == null || b.call(p);
    });
    for (const _ in o)
      if (o.hasOwnProperty(_)) {
        const p = o[_];
        p.value && (d[_] = p.value), p.errors && p.errors.length > 0 && (u = !1), p.validationRules && p.validationRules.indexOf("required") !== -1 && !p.value && (u = !1);
      }
    if (!u) {
      console.log("Form is not valid");
      return;
    }
    c(d).then((_) => {
      _.url && (window.location.href = _.url);
    });
  };
  async function c(f) {
    return await (await fetch(Br(s) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f)
    })).json();
  }
  const l = k(["form", "form_instance--" + t, (i == null ? void 0 : i.formId) && "form_id--" + (i == null ? void 0 : i.formId), (i == null ? void 0 : i.formCategory) && "form_category--" + (i == null ? void 0 : i.formCategory), (i == null ? void 0 : i.formTeam) && "form_team--" + (i == null ? void 0 : i.formTeam)]);
  return w("div", {
    className: k(["form_wrapper"]),
    children: w("form", {
      className: l,
      onSubmit: a,
      noValidate: !0,
      children: e
    })
  });
}
function $s({
  childNodes: e,
  name: t
}) {
  const n = k(["group", "group--" + t]);
  return w("div", {
    className: n,
    children: e
  });
}
const As = he(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: s,
    visibilityConditions: a,
    validationRules: c,
    helpText: l,
    emailTag: f,
    alias: u,
    storeAsDonorMeta: d,
    showInReceipt: _,
    type: p,
    subType: b,
    events: h,
    childNodes: m,
    disabled: y = !1,
    ...v
  } = t, [g, E] = ae((P, L) => ({
    ...P,
    ...L
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: S,
    isInvalid: C
  } = g, x = Z(et(r)), D = ue(), T = x[o].errors, {
    setValidateField: j
  } = Lt(r, o, i, c), G = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + b]), F = k(["input", "input--" + o, "input-type--" + b, S && "input--active", T && T.length > 0 && "input--invalid"]), z = (P) => {
    P.preventDefault();
    let L = Number(P.target.value);
    L === 0 && (L = ""), D(K({
      formInstance: r,
      name: o,
      value: L
    })), u && D(K({
      formInstance: r,
      name: u,
      value: L
    }));
    let Ut = !1;
    L && (Ut = !0), j(L), E({
      isActive: Ut
    });
  }, q = k(["input--field"]);
  return w("div", {
    className: G,
    children: w("div", {
      className: F,
      children: [i && w("label", {
        className: k(["input--label"]),
        htmlFor: o,
        children: i
      }), w("input", {
        type: "number",
        id: o,
        className: q,
        disabled: y,
        ...v,
        value: x[o].value,
        onChange: z,
        ref: n
      }), T && T.length !== 0 && w(M, {
        children: T.map((P, L) => w("div", {
          className: k(["input--error"]),
          children: P
        }, L))
      })]
    })
  });
}), Is = he(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: s,
    defaultValue: a,
    visibilityConditions: c,
    validationRules: l,
    helpText: f,
    emailTag: u,
    alias: d,
    storeAsDonorMeta: _,
    showInReceipt: p,
    type: b,
    subType: h,
    childNodes: m,
    disabled: y = !1,
    ...v
  } = t, g = Z(et(r));
  Z(zt(r, o));
  const E = ue(), S = d || o, C = k(["input", "input-radio", "input-radio--" + o]), x = k(["input--option"]);
  oe(() => {
    s && !s.some((T) => T.value === g[o].value) && (E(K({
      formInstance: r,
      name: o,
      value: a
    })), d && E(K({
      formInstance: r,
      name: d,
      value: a
    })));
  }, [g.frequency.value]);
  const D = (T, j) => {
    E(K({
      formInstance: r,
      name: o,
      value: j
    })), d && E(K({
      formInstance: r,
      name: d,
      value: j
    }));
  };
  return w("div", {
    className: C,
    children: s ? s.map((T) => w("div", {
      className: x,
      ref: n,
      children: w("label", {
        children: [w("input", {
          id: r + o + T.value,
          name: o,
          type: "radio",
          value: T.value,
          checked: g[S].value === T.value,
          onChange: (j) => D(j, T.value)
        }), w("span", {
          className: k(["input--label"]),
          children: T.label
        })]
      })
    }, o + T.value)) : w(M, {
      children: [w("input", {
        id: r + o,
        name: o,
        type: "radio",
        value: "true",
        checked: !!g[S].value,
        onChange: (T) => D(T, !0),
        ref: n
      }, o), w("label", {
        className: k(["input--label"]),
        htmlFor: r + o,
        tabIndex: 0,
        children: i
      })]
    })
  });
});
function Ms({
  childNodes: e
}) {
  const t = k(["section"]);
  return w("div", {
    className: t,
    children: e
  });
}
function Ps({
  formInstance: e,
  childNodes: t
}) {
  const n = Z(ss(e)), r = k(["steps"]);
  return w("div", {
    className: r,
    children: t[n - 1]
  });
}
function Vs({
  name: e,
  childNodes: t
}) {
  const n = k(["step"]);
  return w("div", {
    className: n,
    children: t
  });
}
function Fs(e) {
  const {
    formId: t,
    env: n,
    setAppState: r
  } = e, [o, i] = ae((d, _) => ({
    ...d,
    ..._
  }), {
    isLoading: !0,
    isDelayed: !1,
    error: null
  }), {
    isLoading: s,
    isDelayed: a,
    error: c
  } = o, l = Ke(null);
  async function f(d, _) {
    l.current = new AbortController(), setTimeout(() => {
      i({
        isDelayed: !0
      });
    }, 2e3), fetch(Br(_) + "/api/v1/form/config/" + d, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      signal: l.current.signal
    }).then((p) => p.json()).then((p) => {
      r({
        isLoading: !1,
        formCategory: p.campaign,
        formTeam: p.team,
        config: JSON.parse(p.config),
        errors: p.errors
      }), i({
        isLoading: !1,
        error: null
      });
    }).catch((p) => {
      i({
        isLoading: !1,
        isDelayed: !1,
        error: p
      });
    });
  }
  const u = () => {
    i({
      isLoading: !0,
      isDelayed: !1,
      error: null
    }), f(t, n);
  };
  return oe(() => {
    t && u();
  }, [r]), w("div", {
    className: k(["loader-container"]),
    children: w("div", {
      className: k(["loader", "loader-" + status]),
      children: ["Loading...", a && w(M, {
        children: [w("p", {
          children: "Loading the form is taking longer than usual. It is still loading but you can cancel and/or retry."
        }), w("button", {
          onClick: () => l.current.abort(),
          children: "Cancel"
        }), w("button", {
          onClick: () => u(),
          children: "Retry"
        })]
      }), c && w(M, {
        children: [w("p", {
          children: "Failed to fetch the form, please try again."
        }), w("button", {
          onClick: () => u(),
          children: "Retry"
        })]
      })]
    })
  });
}
const js = {
  button: bs,
  checkbox: gs,
  email: Ds,
  html: xs,
  text: Ts,
  group: $s,
  number: As,
  radio: Is,
  section: Ms,
  steps: Ps,
  step: Vs,
  form: Rs
};
function zs({
  formInstance: e,
  formId: t,
  env: n,
  lang: r
}) {
  const o = Z(is(e)), i = ue(), [s, a] = ae((y, v) => ({
    ...y,
    ...v
  }), {
    isLoading: !0,
    isInitialized: !1,
    formId: 0,
    formCategory: "",
    formTeam: "",
    config: null,
    errors: null,
    error: null
  }), {
    isLoading: c,
    isInitialized: l,
    formCategory: f,
    formTeam: u,
    config: d,
    errors: _,
    error: p
  } = s, {
    fieldRefs: b,
    registerNode: h
  } = ps();
  if (oe(() => {
    if (c === !1) {
      const y = ds("fundyFormLoaded", {
        detail: {
          formInstance: e
        }
      });
      _s(document, y);
    }
  }, [c]), oe(() => {
    i(ts({
      formInstance: e,
      formId: t,
      formCategory: f,
      formTeam: u,
      step: 0
    })), i(cs({
      env: n
    })), _ && i(us({
      errors: _
    })), c === !1 && l === !1 && (h(d, e, i), a({
      isInitialized: !0
    }));
  }, [e, c]), c === !0)
    return w(Fs, {
      formId: t,
      env: n,
      setAppState: a
    });
  const m = (y, v) => {
    let g = null;
    if (g = js[y.subType], !g || !Wr(o.fields, y.visibilityConditions))
      return null;
    const E = y.nodes ? y.nodes.map((C) => m(C, v)) : null, S = Hr(y) ? b.current[y.name] : null;
    return w(g, {
      formInstance: v,
      ref: S,
      childNodes: E,
      fieldrefs: b,
      ...y
    }, y.name);
  };
  return o === void 0 ? null : c || l === !1 ? w("div", {
    className: k(["loading"]),
    children: w("div", {
      className: k(["loading__message"]),
      children: "Loading..."
    })
  }) : w(M, {
    children: m(d, e)
  });
}
let Ls = 0;
function Us() {
  return Ls++;
}
const qr = (e, t, n) => {
  if (e.nodeType === 3) {
    const r = e.nodeValue.match(t);
    if (r) {
      const o = n(r);
      e.parentNode.replaceChild(o, e);
    }
  } else
    e.childNodes.forEach((r) => qr(r, t, n));
}, Ws = /\[fundy-form(?: id="(\d+)")?(?: env="(\w+)")?(?: lang="(\w+)")?\]/, Hs = (e) => {
  const t = document.createElement("div");
  return t.className = "fundy-form", t.setAttribute("data-form-id", e[1]), t.setAttribute("data-env", e[2]), t;
};
qr(document.body, Ws, Hs);
for (const e of document.getElementsByClassName("fundy-form")) {
  const t = Us(), n = e.getAttribute("data-form-id") ?? "0", r = e.getAttribute("data-env") ?? "production", o = e.getAttribute("data-lang") ?? "en";
  vo.createRoot(e).render(w(Ye.StrictMode, {
    children: w(Mo, {
      store: St,
      children: w(zs, {
        formInstance: t,
        formId: n,
        env: r,
        lang: o
      })
    })
  }));
}
