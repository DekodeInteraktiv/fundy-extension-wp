var ke, O, kn, ce, Ut, Dn, ut, Ct, ct, lt, xn, Ne = {}, Tn = [], qr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Be = Array.isArray;
function Z(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Rn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function G(e, t, n) {
  var r, o, i, s = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ke.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return we(e, s, r, o, null);
}
function we(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++kn, __i: -1, __u: 0 };
  return o == null && O.vnode != null && O.vnode(i), i;
}
function $n() {
  return { current: null };
}
function P(e) {
  return e.children;
}
function K(e, t) {
  this.props = e, this.context = t;
}
function fe(e, t) {
  if (t == null)
    return e.__ ? fe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? fe(e) : null;
}
function An(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return An(e);
  }
}
function ft(e) {
  (!e.__d && (e.__d = !0) && ce.push(e) && !Fe.__r++ || Ut !== O.debounceRendering) && ((Ut = O.debounceRendering) || Dn)(Fe);
}
function Fe() {
  var e, t, n, r, o, i, s, a;
  for (ce.sort(ut); e = ce.shift(); )
    e.__d && (t = ce.length, r = void 0, i = (o = (n = e).__v).__e, s = [], a = [], n.__P && ((r = Z({}, o)).__v = o.__v + 1, O.vnode && O.vnode(r), Ot(n.__P, r, o, n.__n, n.__P.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? fe(o), !!(32 & o.__u), a), r.__v = o.__v, r.__.__k[r.__i] = r, Pn(s, r, a), r.__e != i && An(r)), ce.length > t && ce.sort(ut));
  Fe.__r = 0;
}
function In(e, t, n, r, o, i, s, a, c, l, f) {
  var u, _, d, p, g, h = r && r.__k || Tn, y = t.length;
  for (n.__d = c, Kr(n, t, h), c = n.__d, u = 0; u < y; u++)
    (d = n.__k[u]) != null && typeof d != "boolean" && typeof d != "function" && (_ = d.__i === -1 ? Ne : h[d.__i] || Ne, d.__i = u, Ot(e, d, _, o, i, s, a, c, l, f), p = d.__e, d.ref && _.ref != d.ref && (_.ref && kt(_.ref, null, d), f.push(d.ref, d.__c || p, d)), g == null && p != null && (g = p), 65536 & d.__u || _.__k === d.__k ? (c && !c.isConnected && (c = fe(_)), c = Mn(d, c, e)) : typeof d.type == "function" && d.__d !== void 0 ? c = d.__d : p && (c = p.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = c, n.__e = g;
}
function Kr(e, t, n) {
  var r, o, i, s, a, c = t.length, l = n.length, f = l, u = 0;
  for (e.__k = [], r = 0; r < c; r++)
    s = r + u, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? we(null, o, null, null, null) : Be(o) ? we(P, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? we(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = Gr(o, n, s, f), o.__i = a, i = null, a !== -1 && (f--, (i = n[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a === s + 1 ? u++ : a > s ? f > c - s ? u += a - s : u-- : a < s ? a == s - 1 && (u = a - s) : u = 0, a !== r + u && (o.__u |= 65536))) : (i = n[s]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = fe(i)), dt(i, i, !1), n[s] = null, f--);
  if (f)
    for (r = 0; r < l; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = fe(i)), dt(i, i));
}
function Mn(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = Mn(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function J(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Be(e) ? e.some(function(n) {
    J(n, t);
  }) : t.push(e)), t;
}
function Gr(e, t, n, r) {
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
function Wt(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || qr.test(t) ? n : n + "px";
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
            n && t in n || Wt(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Wt(e.style, t, n[t]);
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
function Ht(e) {
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
  var f, u, _, d, p, g, h, y, v, m, b, E, N, k, D, S = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [a = t.__e = n.__e]), (f = O.__b) && f(t);
  e:
    if (typeof S == "function")
      try {
        if (y = t.props, v = (f = S.contextType) && r[f.__c], m = f ? v ? v.props.value : f.__ : r, n.__c ? h = (u = t.__c = n.__c).__ = u.__E : ("prototype" in S && S.prototype.render ? t.__c = u = new S(y, m) : (t.__c = u = new K(y, m), u.constructor = S, u.render = Xr), v && v.sub(u), u.props = y, u.state || (u.state = {}), u.context = m, u.__n = r, _ = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), S.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Z({}, u.__s)), Z(u.__s, S.getDerivedStateFromProps(y, u.__s))), d = u.props, p = u.state, u.__v = t, _)
          S.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (S.getDerivedStateFromProps == null && y !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(y, m), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(y, u.__s, m) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (u.props = y, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), b = 0; b < u._sb.length; b++)
              u.__h.push(u._sb[b]);
            u._sb = [], u.__h.length && s.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, m), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, p, g);
          });
        }
        if (u.context = m, u.props = y, u.__P = e, u.__e = !1, E = O.__r, N = 0, "prototype" in S && S.prototype.render) {
          for (u.state = u.__s, u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), k = 0; k < u._sb.length; k++)
            u.__h.push(u._sb[k]);
          u._sb = [];
        } else
          do
            u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++N < 25);
        u.state = u.__s, u.getChildContext != null && (r = Z(Z({}, r), u.getChildContext())), _ || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(d, p)), In(e, Be(D = f != null && f.type === P && f.key == null ? f.props.children : f) ? D : [D], t, n, r, o, i, s, a, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && s.push(u), h && (u.__E = u.__ = null);
      } catch (A) {
        t.__v = null, c || i != null ? (t.__e = a, t.__u |= c ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), O.__e(A, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yr(n.__e, t, n, r, o, i, s, c, l);
  (f = O.diffed) && f(t);
}
function Pn(e, t, n) {
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
function Yr(e, t, n, r, o, i, s, a, c) {
  var l, f, u, _, d, p, g, h = n.props, y = t.props, v = t.type;
  if (v === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((d = i[l]) && "setAttribute" in d == !!v && (v ? d.localName === v : d.nodeType === 3)) {
        e = d, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(y);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, y.is && y), i = null, a = !1;
  }
  if (v === null)
    h === y || a && e.data === y || (e.data = y);
  else {
    if (i = i && ke.call(e.childNodes), h = n.props || Ne, !a && i != null)
      for (h = {}, l = 0; l < e.attributes.length; l++)
        h[(d = e.attributes[l]).name] = d.value;
    for (l in h)
      d = h[l], l == "children" || (l == "dangerouslySetInnerHTML" ? u = d : l === "key" || l in y || $e(e, l, null, d, o));
    for (l in y)
      d = y[l], l == "children" ? _ = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? p = d : l == "checked" ? g = d : l === "key" || a && typeof d != "function" || h[l] === d || $e(e, l, d, h[l], o);
    if (f)
      a || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), In(e, Be(_) ? _ : [_], t, n, r, o && v !== "foreignObject", i, s, i ? i[0] : n.__k && fe(n, 0), a, c), i != null)
      for (l = i.length; l--; )
        i[l] != null && Rn(i[l]);
    a || (l = "value", p !== void 0 && (p !== e[l] || v === "progress" && !p || v === "option" && p !== h[l]) && $e(e, l, p, h[l], !1), l = "checked", g !== void 0 && g !== e[l] && $e(e, l, g, h[l], !1));
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
  n || e.__e == null || Rn(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function Xr(e, t, n) {
  return this.constructor(e, n);
}
function Se(e, t, n) {
  var r, o, i, s;
  O.__ && O.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], Ot(t, e = (!r && n || t).__k = G(P, null, [e]), o || Ne, Ne, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? ke.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), Pn(i, e, s);
}
function Vn(e, t) {
  Se(e, t, Vn);
}
function Zr(e, t, n) {
  var r, o, i, s, a = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? ke.call(arguments, 2) : n), we(e.type, a, r || e.key, o || e.ref, null);
}
function Fn(e, t) {
  var n = { __c: t = "__cC" + xn++, __: e, Consumer: function(r, o) {
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
ke = Tn.slice, O = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, kn = 0, K.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), ft(this));
}, K.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ft(this));
}, K.prototype.render = P, ce = [], Dn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ut = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Fe.__r = 0, Ct = 0, ct = Ht(!1), lt = Ht(!0), xn = 0;
var Q, R, tt, Bt, ye = 0, jn = [], Pe = [], $ = O, qt = $.__b, Kt = $.__r, Gt = $.diffed, Yt = $.__c, Xt = $.unmount, Zt = $.__;
function _e(e, t) {
  $.__h && $.__h(R, e, ye || t), ye = 0;
  var n = R.__H || (R.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Pe }), n.__[e];
}
function qe(e) {
  return ye = 1, se(Hn, e);
}
function se(e, t, n) {
  var r = _e(Q++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Hn(void 0, t), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, a);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = R, !R.u)) {
    var o = function(a, c, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, a, c, l);
      var u = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var d = _.__[0];
          _.__ = _.__N, _.__N = void 0, d !== _.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === a) && (!i || i.call(this, a, c, l));
    };
    R.u = !0;
    var i = R.shouldComponentUpdate, s = R.componentWillUpdate;
    R.componentWillUpdate = function(a, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, c, l), i = f;
      }
      s && s.call(this, a, c, l);
    }, R.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function re(e, t) {
  var n = _e(Q++, 3);
  !$.__s && xt(n.__H, t) && (n.__ = e, n.i = t, R.__H.__h.push(n));
}
function De(e, t) {
  var n = _e(Q++, 4);
  !$.__s && xt(n.__H, t) && (n.__ = e, n.i = t, R.__h.push(n));
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
  var n = _e(Q++, 7);
  return xt(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function zn(e, t) {
  return ye = 8, Ge(function() {
    return e;
  }, t);
}
function Ln(e) {
  var t = R.context[e.__c], n = _e(Q++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(R)), t.props.value) : e.__;
}
function Un(e, t) {
  $.useDebugValue && $.useDebugValue(t ? t(e) : e);
}
function Jr(e) {
  var t = _e(Q++, 10), n = qe();
  return t.__ = e, R.componentDidCatch || (R.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Wn() {
  var e = _e(Q++, 11);
  if (!e.__) {
    for (var t = R.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Qr() {
  for (var e; e = jn.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ve), e.__H.__h.forEach(_t), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], $.__e(t, e.__v);
      }
}
$.__b = function(e) {
  R = null, qt && qt(e);
}, $.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Zt && Zt(e, t);
}, $.__r = function(e) {
  Kt && Kt(e), Q = 0;
  var t = (R = e.__c).__H;
  t && (tt === R ? (t.__h = [], R.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Pe, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ve), t.__h.forEach(_t), t.__h = [], Q = 0)), tt = R;
}, $.diffed = function(e) {
  Gt && Gt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (jn.push(t) !== 1 && Bt === $.requestAnimationFrame || ((Bt = $.requestAnimationFrame) || eo)(Qr)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Pe && (n.__ = n.__V), n.i = void 0, n.__V = Pe;
  })), tt = R = null;
}, $.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ve), n.__h = n.__h.filter(function(r) {
        return !r.__ || _t(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], $.__e(r, n.__v);
    }
  }), Yt && Yt(e, t);
}, $.unmount = function(e) {
  Xt && Xt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ve(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && $.__e(t, n.__v));
};
var Jt = typeof requestAnimationFrame == "function";
function eo(e) {
  var t, n = function() {
    clearTimeout(r), Jt && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Jt && (t = requestAnimationFrame(n));
}
function Ve(e) {
  var t = R, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), R = t;
}
function _t(e) {
  var t = R;
  e.__c = e.__(), R = t;
}
function xt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Hn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bn(e, t) {
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
function qn(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : pt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, G(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(je.prototype = new K()).isPureReactComponent = !0, je.prototype.shouldComponentUpdate = function(e, t) {
  return pt(this.props, e) || pt(this.state, t);
};
var Qt = O.__b;
O.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Qt && Qt(e);
};
var to = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function pe(e) {
  function t(n) {
    var r = Bn({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = to, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var en = function(e, t) {
  return e == null ? null : J(J(e).map(t));
}, Kn = { map: en, forEach: en, count: function(e) {
  return e ? J(e).length : 0;
}, only: function(e) {
  var t = J(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: J }, no = O.__e;
O.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  no(e, t, n, r);
};
var tn = O.unmount;
function Gn(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Bn({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Gn(r, t, n);
  })), e;
}
function Yn(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Yn(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ee() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Xn(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Zn(e) {
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
    return G(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function me() {
  this.u = null, this.o = null;
}
O.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), tn && tn(e);
}, (Ee.prototype = new K()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Xn(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Yn(c, c.__c.__P, c.__c.__O);
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
      this.__v.__k[0] = Gn(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && G(P, null, e.fallback);
  return o && (o.__u &= -33), [G(P, null, t.__a ? null : e.children), o];
};
var nn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function ro(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function oo(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    Se(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), Se(G(ro, { context: t.context }, e.__v), t.l);
}
function Jn(e, t) {
  var n = G(oo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(me.prototype = new K()).__a = function(e) {
  var t = this, n = Xn(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), nn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, me.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = J(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, me.prototype.componentDidUpdate = me.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    nn(e, n, t);
  });
};
var Qn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, io = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, so = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ao = /[A-Z0-9]/g, uo = typeof document < "u", co = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Tt(e, t, n) {
  return t.__k == null && (t.textContent = ""), Se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Rt(e, t, n) {
  return Vn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
K.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(K.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var rn = O.event;
function lo() {
}
function fo() {
  return this.cancelBubble;
}
function _o() {
  return this.defaultPrevented;
}
O.event = function(e) {
  return rn && (e = rn(e)), e.persist = lo, e.isPropagationStopped = fo, e.isDefaultPrevented = _o, e.nativeEvent = e;
};
var $t, po = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, on = O.vnode;
O.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || uo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || co(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : so.test(i) ? i = a : r.indexOf("-") === -1 && io.test(i) ? i = i.replace(ao, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = J(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = J(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", po)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Qn, on && on(e);
};
var sn = O.__r;
O.__r = function(e) {
  sn && sn(e), $t = e.__c;
};
var an = O.diffed;
O.diffed = function(e) {
  an && an(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), $t = null;
};
var er = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return $t.__n[e.__c].props.value;
} } } }, ho = "17.0.2";
function tr(e) {
  return G.bind(null, e);
}
function xe(e) {
  return !!e && e.$$typeof === Qn;
}
function nr(e) {
  return xe(e) && e.type === P;
}
function rr(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function or(e) {
  return xe(e) ? Zr.apply(null, arguments) : e;
}
function At(e) {
  return !!e.__k && (Se(null, e), !0);
}
function ir(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var sr = function(e, t) {
  return e(t);
}, ar = function(e, t) {
  return e(t);
}, ur = P;
function It(e) {
  e();
}
function cr(e) {
  return e;
}
function lr() {
  return [!1, It];
}
var fr = De, dr = xe;
function _r(e, t) {
  var n = t(), r = qe({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return De(function() {
    o.__ = n, o.v = t, nt(o) && i({ h: o });
  }, [e, n, t]), re(function() {
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
var Ye = { useState: qe, useId: Wn, useReducer: se, useEffect: re, useLayoutEffect: De, useInsertionEffect: fr, useTransition: lr, useDeferredValue: cr, useSyncExternalStore: _r, startTransition: It, useRef: Ke, useImperativeHandle: Dt, useMemo: Ge, useCallback: zn, useContext: Ln, useDebugValue: Un, version: "17.0.2", Children: Kn, render: Tt, hydrate: Rt, unmountComponentAtNode: At, createPortal: Jn, createElement: G, createContext: Fn, createFactory: tr, cloneElement: or, createRef: $n, Fragment: P, isValidElement: xe, isElement: dr, isFragment: nr, isMemo: rr, findDOMNode: ir, Component: K, PureComponent: je, memo: qn, forwardRef: pe, flushSync: ar, unstable_batchedUpdates: sr, StrictMode: ur, Suspense: Ee, SuspenseList: me, lazy: Zn, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: er };
const ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Kn,
  Component: K,
  Fragment: P,
  PureComponent: je,
  StrictMode: ur,
  Suspense: Ee,
  SuspenseList: me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: er,
  cloneElement: or,
  createContext: Fn,
  createElement: G,
  createFactory: tr,
  createPortal: Jn,
  createRef: $n,
  default: Ye,
  findDOMNode: ir,
  flushSync: ar,
  forwardRef: pe,
  hydrate: Rt,
  isElement: dr,
  isFragment: nr,
  isMemo: rr,
  isValidElement: xe,
  lazy: Zn,
  memo: qn,
  render: Tt,
  startTransition: It,
  unmountComponentAtNode: At,
  unstable_batchedUpdates: sr,
  useCallback: zn,
  useContext: Ln,
  useDebugValue: Un,
  useDeferredValue: cr,
  useEffect: re,
  useErrorBoundary: Jr,
  useId: Wn,
  useImperativeHandle: Dt,
  useInsertionEffect: fr,
  useLayoutEffect: De,
  useMemo: Ge,
  useReducer: se,
  useRef: Ke,
  useState: qe,
  useSyncExternalStore: _r,
  useTransition: lr,
  version: ho
}, Symbol.toStringTag, { value: "Module" }));
function pr(e) {
  return {
    render(t) {
      Tt(t, e);
    },
    unmount() {
      At(e);
    }
  };
}
function mo(e, t) {
  return Rt(t, e), pr(e);
}
const yo = {
  createRoot: pr,
  hydrateRoot: mo
};
function vo(e) {
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
const hr = /* @__PURE__ */ vo(ht);
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function bo() {
  if (un)
    return rt;
  un = 1;
  var e = hr;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return rt.useSyncExternalStoreWithSelector = function(c, l, f, u, _) {
    var d = o(null);
    if (d.current === null) {
      var p = { hasValue: !1, value: null };
      d.current = p;
    } else
      p = d.current;
    d = s(function() {
      function h(E) {
        if (!y) {
          if (y = !0, v = E, E = u(E), _ !== void 0 && p.hasValue) {
            var N = p.value;
            if (_(N, E))
              return m = N;
          }
          return m = E;
        }
        if (N = m, n(v, E))
          return N;
        var k = u(E);
        return _ !== void 0 && _(N, k) ? N : (v = E, m = k);
      }
      var y = !1, v, m, b = f === void 0 ? null : f;
      return [function() {
        return h(l());
      }, b === null ? void 0 : function() {
        return h(b());
      }];
    }, [l, f, u, _]);
    var g = r(c, d[0], d[1]);
    return i(function() {
      p.hasValue = !0, p.value = g;
    }, [g]), a(g), g;
  }, rt;
}
var ot = {}, cn;
function go() {
  if (cn)
    return ot;
  cn = 1;
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
    var t = hr;
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, a = t.useMemo, c = t.useDebugValue;
    function l(f, u, _, d, p) {
      var g = i(null), h;
      g.current === null ? (h = {
        hasValue: !1,
        value: null
      }, g.current = h) : h = g.current;
      var y = a(function() {
        var E = !1, N, k, D = function(M) {
          if (!E) {
            E = !0, N = M;
            var j = d(M);
            if (p !== void 0 && h.hasValue) {
              var z = h.value;
              if (p(z, j))
                return k = z, z;
            }
            return k = j, j;
          }
          var F = N, L = k;
          if (r(F, M))
            return L;
          var he = d(M);
          return p !== void 0 && p(L, he) ? L : (N = M, k = he, he);
        }, S = _ === void 0 ? null : _, A = function() {
          return D(u());
        }, X = S === null ? void 0 : function() {
          return D(S());
        };
        return [A, X];
      }, [u, _, d, p]), v = y[0], m = y[1], b = o(f, v, m);
      return s(function() {
        h.hasValue = !0, h.value = b;
      }, [b]), c(b), b;
    }
    ot.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ot;
}
var wo = {};
wo.NODE_ENV === "production" ? mt.exports = bo() : mt.exports = go();
var Eo = mt.exports, ze = {}, W = (
  // prettier-ignore
  // @ts-ignore
  "default" in ht ? Ye : ht
), ln = Symbol.for("react-redux-context"), fn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function No() {
  if (!W.createContext)
    return {};
  const e = fn[ln] ?? (fn[ln] = /* @__PURE__ */ new Map());
  let t = e.get(W.createContext);
  return t || (t = W.createContext(
    null
  ), ze.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(W.createContext, t)), t;
}
var oe = /* @__PURE__ */ No(), So = () => {
  throw new Error("uSES not initialized!");
};
function Mt(e = oe) {
  return function() {
    const n = W.useContext(e);
    if (ze.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var mr = /* @__PURE__ */ Mt(), yr = So, Co = (e) => {
  yr = e;
}, Oo = (e, t) => e === t;
function ko(e = oe) {
  const t = e === oe ? mr : Mt(e), n = (r, o = {}) => {
    const { equalityFn: i = Oo, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o;
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
    } = t(), _ = W.useRef(!0), d = W.useCallback(
      {
        [r.name](g) {
          const h = r(g);
          if (ze.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: y,
              stabilityCheck: v
            } = {
              stabilityCheck: f,
              identityFunctionCheck: u,
              ...s
            };
            if (v === "always" || v === "once" && _.current) {
              const m = r(g);
              if (!i(h, m)) {
                let b;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: b } = E);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: g,
                    selected: h,
                    selected2: m,
                    stack: b
                  }
                );
              }
            }
            if ((y === "always" || y === "once" && _.current) && h === g) {
              let m;
              try {
                throw new Error();
              } catch (b) {
                ({ stack: m } = b);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: m }
              );
            }
            _.current && (_.current = !1);
          }
          return h;
        }
      }[r.name],
      [r, f, s.stabilityCheck]
    ), p = yr(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      d,
      i
    );
    return W.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Y = /* @__PURE__ */ ko();
function Do(e) {
  e();
}
function xo() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Do(() => {
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
var dn = {
  notify() {
  },
  get: () => []
};
function To(e, t) {
  let n, r = dn, o = 0, i = !1;
  function s(g) {
    f();
    const h = r.subscribe(g);
    let y = !1;
    return () => {
      y || (y = !0, h(), u());
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = xo());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = dn);
  }
  function _() {
    i || (i = !0, f());
  }
  function d() {
    i && (i = !1, u());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: _,
    tryUnsubscribe: d,
    getListeners: () => r
  };
  return p;
}
var Ro = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $o = Ro ? W.useLayoutEffect : W.useEffect;
function Ao({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = W.useMemo(() => {
    const l = To(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = W.useMemo(() => e.getState(), [e]);
  $o(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || oe;
  return /* @__PURE__ */ W.createElement(c.Provider, { value: s }, n);
}
var Io = Ao;
function vr(e = oe) {
  const t = e === oe ? mr : (
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
var Mo = /* @__PURE__ */ vr();
function Po(e = oe) {
  const t = e === oe ? Mo : vr(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ae = /* @__PURE__ */ Po();
Co(Eo.useSyncExternalStoreWithSelector);
var I = {};
function V(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Vo = typeof Symbol == "function" && Symbol.observable || "@@observable", _n = Vo, it = () => Math.random().toString(36).substring(7).split("").join("."), Fo = {
  INIT: `@@redux/INIT${/* @__PURE__ */ it()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ it()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${it()}`
}, le = Fo;
function Te(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function jo(e) {
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
  if (Uo(e))
    return "date";
  if (Lo(e))
    return "error";
  const n = zo(e);
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
function zo(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Lo(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Uo(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ne(e) {
  let t = typeof e;
  return I.NODE_ENV !== "production" && (t = jo(e)), t;
}
function br(e, t, n) {
  if (typeof e != "function")
    throw new Error(I.NODE_ENV === "production" ? V(2) : `Expected the root reducer to be a function. Instead, received: '${ne(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(I.NODE_ENV === "production" ? V(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(I.NODE_ENV === "production" ? V(1) : `Expected the enhancer to be a function. Instead, received: '${ne(n)}'`);
    return n(br)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, c = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, y) => {
      s.set(y, h);
    }));
  }
  function f() {
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function u(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(4) : `Expected the listener to be a function. Instead, received: '${ne(h)}'`);
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    l();
    const v = a++;
    return s.set(v, h), function() {
      if (y) {
        if (c)
          throw new Error(I.NODE_ENV === "production" ? V(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, l(), s.delete(v), i = null;
      }
    };
  }
  function _(h) {
    if (!Te(h))
      throw new Error(I.NODE_ENV === "production" ? V(7) : `Actions must be plain objects. Instead, the actual type was: '${ne(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof h.type > "u")
      throw new Error(I.NODE_ENV === "production" ? V(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof h.type != "string")
      throw new Error(I.NODE_ENV === "production" ? V(17) : `Action "type" property must be a string. Instead, the actual type was: '${ne(h.type)}'. Value was: '${h.type}' (stringified)`);
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, h);
    } finally {
      c = !1;
    }
    return (i = s).forEach((v) => {
      v();
    }), h;
  }
  function d(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(10) : `Expected the nextReducer to be a function. Instead, received: '${ne(h)}`);
    r = h, _({
      type: le.REPLACE
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
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(I.NODE_ENV === "production" ? V(11) : `Expected the observer to be an object. Instead, received: '${ne(y)}'`);
        function v() {
          const b = y;
          b.next && b.next(f());
        }
        return v(), {
          unsubscribe: h(v)
        };
      },
      [_n]() {
        return this;
      }
    };
  }
  return _({
    type: le.INIT
  }), {
    dispatch: _,
    subscribe: u,
    getState: f,
    replaceReducer: d,
    [_n]: p
  };
}
function pn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Wo(e, t, n, r) {
  const o = Object.keys(t), i = n && n.type === le.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Te(e))
    return `The ${i} has unexpected type of "${ne(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const s = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !r[a]);
  if (s.forEach((a) => {
    r[a] = !0;
  }), !(n && n.type === le.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Ho(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: le.INIT
    }) > "u")
      throw new Error(I.NODE_ENV === "production" ? V(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: le.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(I.NODE_ENV === "production" ? V(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${le.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Bo(e) {
  const t = Object.keys(e), n = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    I.NODE_ENV !== "production" && typeof e[a] > "u" && pn(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (n[a] = e[a]);
  }
  const r = Object.keys(n);
  let o;
  I.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    Ho(n);
  } catch (s) {
    i = s;
  }
  return function(a = {}, c) {
    if (i)
      throw i;
    if (I.NODE_ENV !== "production") {
      const u = Wo(a, n, c, o);
      u && pn(u);
    }
    let l = !1;
    const f = {};
    for (let u = 0; u < r.length; u++) {
      const _ = r[u], d = n[_], p = a[_], g = d(p, c);
      if (typeof g > "u") {
        const h = c && c.type;
        throw new Error(I.NODE_ENV === "production" ? V(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${_}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[_] = g, l = l || g !== p;
    }
    return l = l || r.length !== Object.keys(a).length, l ? f : a;
  };
}
function Le(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function qo(...e) {
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
function gr(e) {
  return Te(e) && "type" in e && typeof e.type == "string";
}
var Re = {}, wr = Symbol.for("immer-nothing"), hn = Symbol.for("immer-draftable"), H = Symbol.for("immer-state"), Ko = Re.NODE_ENV !== "production" ? [
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
    const n = Ko[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ve = Object.getPrototypeOf;
function ie(e) {
  return !!e && !!e[H];
}
function ee(e) {
  var t;
  return e ? Er(e) || Array.isArray(e) || !!e[hn] || !!((t = e.constructor) != null && t[hn]) || Ze(e) || Je(e) : !1;
}
var Go = Object.prototype.constructor.toString();
function Er(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ve(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Go;
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
function Nr(e, t, n) {
  const r = Xe(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Yo(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ze(e) {
  return e instanceof Map;
}
function Je(e) {
  return e instanceof Set;
}
function ue(e) {
  return e.copy_ || e.base_;
}
function vt(e, t) {
  if (Ze(e))
    return new Map(e);
  if (Je(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Er(e))
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
  return Qe(e) || ie(e) || !ee(e) || (Xe(e) > 1 && (e.set = e.add = e.clear = e.delete = Xo), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Pt(r, !0))), e;
}
function Xo() {
  U(2);
}
function Qe(e) {
  return Object.isFrozen(e);
}
var Zo = {};
function de(e) {
  const t = Zo[e];
  return t || U(0, e), t;
}
var Ce;
function Sr() {
  return Ce;
}
function Jo(e, t) {
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
function mn(e, t) {
  t && (de("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function bt(e) {
  gt(e), e.drafts_.forEach(Qo), e.drafts_ = null;
}
function gt(e) {
  e === Ce && (Ce = e.parent_);
}
function yn(e) {
  return Ce = Jo(Ce, e);
}
function Qo(e) {
  const t = e[H];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function vn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[H].modified_ && (bt(t), U(4)), ee(e) && (e = We(t, e), t.parent_ || He(t, e)), t.patches_ && de("Patches").generateReplacementPatches_(
    n[H].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = We(t, n, []), bt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== wr ? e : void 0;
}
function We(e, t, n) {
  if (Qe(t))
    return t;
  const r = t[H];
  if (!r)
    return Ue(
      t,
      (o, i) => bn(e, r, t, o, i, n)
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
      (a, c) => bn(e, r, o, a, c, n, s)
    ), He(e, o, !1), n && e.patches_ && de("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function bn(e, t, n, r, o, i, s) {
  if (Re.NODE_ENV !== "production" && o === n && U(5), ie(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !yt(t.assigned_, r) ? i.concat(r) : void 0, c = We(e, o, a);
    if (Nr(n, r, c), ie(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (ee(o) && !Qe(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    We(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && He(e, o);
  }
}
function He(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Pt(t, n);
}
function ei(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Sr(),
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
    const n = ue(e);
    if (!yt(n, t))
      return ti(e, n, t);
    const r = n[t];
    return e.finalized_ || !ee(r) ? r : r === st(e.base_, t) ? (at(e), e.copy_[t] = Et(r, e)) : r;
  },
  has(e, t) {
    return t in ue(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ue(e));
  },
  set(e, t, n) {
    const r = Cr(ue(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = st(ue(e), t), i = o == null ? void 0 : o[H];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Yo(n, o) && (n !== void 0 || yt(e.base_, t)))
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
    const n = ue(e), r = Reflect.getOwnPropertyDescriptor(n, t);
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
  return (n ? ue(n) : e)[t];
}
function ti(e, t, n) {
  var o;
  const r = Cr(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Cr(e, t) {
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
var ni = class {
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
      if (ee(t)) {
        const i = yn(this), s = Et(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? bt(i) : gt(i);
        }
        return mn(i, r), vn(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === wr && (o = void 0), this.autoFreeze_ && Pt(o, !0), r) {
          const i = [], s = [];
          de("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
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
    ee(e) || U(8), ie(e) && (e = Or(e));
    const t = yn(this), n = Et(e, void 0);
    return n[H].isManual_ = !0, gt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[H];
    (!n || !n.isManual_) && U(9);
    const { scope_: r } = n;
    return mn(r, t), vn(void 0, r);
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
    const r = de("Patches").applyPatches_;
    return ie(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Et(e, t) {
  const n = Ze(e) ? de("MapSet").proxyMap_(e, t) : Je(e) ? de("MapSet").proxySet_(e, t) : ei(e, t);
  return (t ? t.scope_ : Sr()).drafts_.push(n), n;
}
function Or(e) {
  return ie(e) || U(10, e), kr(e);
}
function kr(e) {
  if (!ee(e) || Qe(e))
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
    Nr(n, r, kr(o));
  }), t && (t.finalized_ = !1), n;
}
var B = new ni(), Dr = B.produce;
B.produceWithPatches.bind(
  B
);
B.setAutoFreeze.bind(B);
B.setUseStrictShallowCopy.bind(B);
B.applyPatches.bind(B);
B.createDraft.bind(B);
B.finishDraft.bind(B);
var ri = {}, oi = (e, t, n) => {
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
}, ii = (e, t, n) => {
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
}, si = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function ai(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function ui(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function ci(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var gn = (e) => Array.isArray(e) ? e : [e];
function li(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ci(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function wn(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var fi = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...si,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: oi
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: ii
    }
  };
}, di = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, _i = typeof WeakRef < "u" ? WeakRef : di, pi = 0, En = 1;
function Ae() {
  return {
    s: pi,
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
    for (let _ = 0, d = c; _ < d; _++) {
      const p = arguments[_];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = a.o;
        g === null && (a.o = g = /* @__PURE__ */ new WeakMap());
        const h = g.get(p);
        h === void 0 ? (a = Ae(), g.set(p, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(p);
        h === void 0 ? (a = Ae(), g.set(p, a)) : a = h;
      }
    }
    const l = a;
    let f;
    if (a.s === En ? f = a.v : (f = e.apply(null, arguments), i++), l.s = En, r) {
      const _ = ((u = o == null ? void 0 : o.deref) == null ? void 0 : u.call(o)) ?? o;
      _ != null && r(_, f) && (f = _, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new _i(f) : f;
    }
    return l.v = f, f;
  }
  return s.clearCache = () => {
    n = Ae(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function xr(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), ai(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const f = {
      ...n,
      ...c
    }, {
      memoize: u,
      memoizeOptions: _ = [],
      argsMemoize: d = Ft,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = f, h = gn(_), y = gn(p), v = li(o), m = u(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h);
    let b = !0;
    const E = d(function() {
      s++;
      const k = wn(
        v,
        arguments
      );
      if (a = m.apply(null, k), ri.NODE_ENV !== "production") {
        const { identityFunctionCheck: D, inputStabilityCheck: S } = fi(b, g);
        if (D.shouldRun && D.run(
          l,
          k,
          a
        ), S.shouldRun) {
          const A = wn(
            v,
            arguments
          );
          S.run(
            { inputSelectorResults: k, inputSelectorResultsCopy: A },
            { memoize: u, memoizeOptions: h },
            arguments
          );
        }
        b && (b = !1);
      }
      return a;
    }, ...y);
    return Object.assign(E, {
      resultFunc: l,
      memoizedResultFunc: m,
      dependencies: v,
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
      argsMemoize: d
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var hi = /* @__PURE__ */ xr(Ft), mi = Object.assign(
  (e, t = hi) => {
    ui(
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
  { withTypes: () => mi }
);
function Tr(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var yi = Tr(), vi = Tr, C = {}, bi = (...e) => {
  const t = xr(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(ie(s) ? Or(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
bi(Ft);
var gi = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Le : Le.apply(null, arguments);
}, wi = (e) => e && typeof e.match == "function";
function be(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(C.NODE_ENV === "production" ? T(0) : "prepareAction did not return an object");
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => gr(r) && r.type === e, n;
}
function Ei(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  wi(e);
}
function Ni(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Si(e = {}) {
  if (C.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = Ei
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(Ni(r.type)), n(r));
}
function Rr(e, t) {
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
var $r = class ge extends Array {
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
function Nn(e) {
  return ee(e) ? Dr(e, () => {
  }) : e;
}
function Sn(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(C.NODE_ENV === "production" ? T(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Ci(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Oi(e, t, n) {
  const r = Ar(e, t, n);
  return {
    detectMutations() {
      return Ir(e, t, r, n);
    }
  };
}
function Ar(e, t = [], n, r = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), i.children = {};
    for (const s in n) {
      const a = r ? r + "." + s : s;
      t.length && t.indexOf(a) !== -1 || (i.children[s] = Ar(e, t, n[s], a));
    }
  }
  return i;
}
function Ir(e, t = [], n, r, o = !1, i = "") {
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
    const _ = Ir(e, t, n.children[f], r[f], a, u);
    if (_.wasMutated)
      return _;
  }
  return {
    wasMutated: !1
  };
}
function ki(e = {}) {
  if (C.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(a, c, l, f) {
      return JSON.stringify(a, n(c, f), l);
    }, n = function(a, c) {
      let l = [], f = [];
      return c || (c = function(u, _) {
        return l[0] === _ ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(_)).join(".") + "]";
      }), function(u, _) {
        if (l.length > 0) {
          var d = l.indexOf(this);
          ~d ? l.splice(d + 1) : l.push(this), ~d ? f.splice(d, 1 / 0, u) : f.push(u), ~l.indexOf(_) && (_ = c.call(this, u, _));
        } else
          l.push(_);
        return a == null ? _ : a.call(this, u, _);
      };
    }, {
      isImmutable: r = Ci,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const s = Oi.bind(null, r, o);
    return ({
      getState: a
    }) => {
      let c = a(), l = s(c), f;
      return (u) => (_) => {
        const d = Rr(i, "ImmutableStateInvariantMiddleware");
        d.measureTime(() => {
          if (c = a(), f = l.detectMutations(), l = s(c), f.wasMutated)
            throw new Error(C.NODE_ENV === "production" ? T(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = u(_);
        return d.measureTime(() => {
          if (c = a(), f = l.detectMutations(), l = s(c), f.wasMutated)
            throw new Error(C.NODE_ENV === "production" ? T(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${t(_)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), d.warnIfExceeded(), p;
      };
    };
  }
}
function Mr(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Te(e);
}
function Nt(e, t = "", n = Mr, r, o = [], i) {
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
    if (!(c && o.some((d) => d instanceof RegExp ? d.test(u) : u === d))) {
      if (!n(f))
        return {
          keyPath: u,
          value: f
        };
      if (typeof f == "object" && (s = Nt(f, u, n, r, o, i), s))
        return s;
    }
  }
  return i && Pr(e) && i.add(e), !1;
}
function Pr(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Pr(t))
      return !1;
  return !0;
}
function Di(e = {}) {
  if (C.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = Mr,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: s = 32,
      ignoreState: a = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, f = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (u) => (_) => (d) => {
      if (!gr(d))
        return _(d);
      const p = _(d), g = Rr(s, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(d.type) !== -1) && g.measureTime(() => {
        const h = Nt(d, "", t, n, o, f);
        if (h) {
          const {
            keyPath: y,
            value: v
          } = h;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, v, `
Take a look at the logic that dispatched this action: `, d, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (g.measureTime(() => {
        const h = u.getState(), y = Nt(h, "", t, n, i, f);
        if (y) {
          const {
            keyPath: v,
            value: m
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${v}\`. Value:`, m, `
Take a look at the reducer(s) handling this action type: ${d.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), p;
    };
  }
}
function Ie(e) {
  return typeof e == "boolean";
}
var xi = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new $r();
  if (n && (Ie(n) ? s.push(yi) : s.push(vi(n.extraArgument))), C.NODE_ENV !== "production") {
    if (r) {
      let a = {};
      Ie(r) || (a = r), s.unshift(ki(a));
    }
    if (o) {
      let a = {};
      Ie(o) || (a = o), s.push(Di(a));
    }
    if (i) {
      let a = {};
      Ie(i) || (a = i), s.unshift(Si(a));
    }
  }
  return s;
}, Ti = "RTK_autoBatch", Vr = (e) => (t) => {
  setTimeout(t, e);
}, Ri = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Vr(10), $i = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Ri : e.type === "callback" ? e.queueNotification : Vr(e.timeout), l = () => {
    s = !1, i && (i = !1, a.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const u = () => o && f(), _ = r.subscribe(u);
      return a.add(f), () => {
        _(), a.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var u;
      try {
        return o = !((u = f == null ? void 0 : f.meta) != null && u[Ti]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(f);
      } finally {
        o = !0;
      }
    }
  });
}, Ai = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new $r(e);
  return r && o.push($i(typeof r == "object" ? r : void 0)), o;
}, te = C.NODE_ENV === "production";
function Ii(e) {
  const t = xi(), {
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
    a = Bo(n);
  else
    throw new Error(C.NODE_ENV === "production" ? T(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!te && r && typeof r != "function")
    throw new Error(C.NODE_ENV === "production" ? T(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), !te && !Array.isArray(c))
      throw new Error(C.NODE_ENV === "production" ? T(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (!te && c.some((p) => typeof p != "function"))
    throw new Error(C.NODE_ENV === "production" ? T(4) : "each middleware provided to configureStore must be a function");
  let l = Le;
  o && (l = gi({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !te,
    ...typeof o == "object" && o
  }));
  const f = qo(...c), u = Ai(f);
  if (!te && s && typeof s != "function")
    throw new Error(C.NODE_ENV === "production" ? T(5) : "`enhancers` field must be a callback");
  let _ = typeof s == "function" ? s(u) : u();
  if (!te && !Array.isArray(_))
    throw new Error(C.NODE_ENV === "production" ? T(6) : "`enhancers` callback must return an array");
  if (!te && _.some((p) => typeof p != "function"))
    throw new Error(C.NODE_ENV === "production" ? T(7) : "each enhancer provided to configureStore must be a function");
  !te && c.length && !_.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const d = l(..._);
  return br(a, i, d);
}
function Fr(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      if (C.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(C.NODE_ENV === "production" ? T(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(C.NODE_ENV === "production" ? T(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(C.NODE_ENV === "production" ? T(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(C.NODE_ENV === "production" ? T(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, o;
    },
    addMatcher(i, s) {
      if (C.NODE_ENV !== "production" && r)
        throw new Error(C.NODE_ENV === "production" ? T(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      if (C.NODE_ENV !== "production" && r)
        throw new Error(C.NODE_ENV === "production" ? T(31) : "`builder.addDefaultCase` can only be called once");
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function Mi(e) {
  return typeof e == "function";
}
function Pi(e, t) {
  if (C.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(C.NODE_ENV === "production" ? T(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, o] = Fr(t), i;
  if (Mi(e))
    i = () => Nn(e());
  else {
    const a = Nn(e);
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
        if (ie(f)) {
          const d = u(f, c);
          return d === void 0 ? f : d;
        } else {
          if (ee(f))
            return Dr(f, (_) => u(_, c));
          {
            const _ = u(f, c);
            if (_ === void 0) {
              if (f === null)
                return f;
              throw new Error(C.NODE_ENV === "production" ? T(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return _;
          }
        }
      return f;
    }, a);
  }
  return s.getInitialState = i, s;
}
var Vi = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Fi = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Vi[Math.random() * 64 | 0];
  return t;
}, ji = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function zi(e, t) {
  return `${e}/${t}`;
}
function Li({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[ji];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(C.NODE_ENV === "production" ? T(11) : "`name` is a required option for createSlice");
    typeof process < "u" && C.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof o.reducers == "function" ? o.reducers(Wi()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(m, b) {
        const E = typeof m == "string" ? m : m.type;
        if (!E)
          throw new Error(C.NODE_ENV === "production" ? T(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(C.NODE_ENV === "production" ? T(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = b, f;
      },
      addMatcher(m, b) {
        return l.sliceMatchers.push({
          matcher: m,
          reducer: b
        }), f;
      },
      exposeAction(m, b) {
        return l.actionCreators[m] = b, f;
      },
      exposeCaseReducer(m, b) {
        return l.sliceCaseReducersByName[m] = b, f;
      }
    };
    c.forEach((m) => {
      const b = a[m], E = {
        reducerName: m,
        type: zi(i, m),
        createNotation: typeof o.reducers == "function"
      };
      Bi(b) ? Ki(E, b, f, t) : Hi(E, b, f);
    });
    function u() {
      if (C.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(C.NODE_ENV === "production" ? T(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [m = {}, b = [], E = void 0] = typeof o.extraReducers == "function" ? Fr(o.extraReducers) : [o.extraReducers], N = {
        ...m,
        ...l.sliceCaseReducersByType
      };
      return Pi(o.initialState, (k) => {
        for (let D in N)
          k.addCase(D, N[D]);
        for (let D of l.sliceMatchers)
          k.addMatcher(D.matcher, D.reducer);
        for (let D of b)
          k.addMatcher(D.matcher, D.reducer);
        E && k.addDefaultCase(E);
      });
    }
    const _ = (m) => m, d = /* @__PURE__ */ new Map();
    let p;
    function g(m, b) {
      return p || (p = u()), p(m, b);
    }
    function h() {
      return p || (p = u()), p.getInitialState();
    }
    function y(m, b = !1) {
      function E(k) {
        let D = k[m];
        if (typeof D > "u") {
          if (b)
            D = h();
          else if (C.NODE_ENV !== "production")
            throw new Error(C.NODE_ENV === "production" ? T(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return D;
      }
      function N(k = _) {
        const D = Sn(d, b, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Sn(D, k, {
          insert: () => {
            const S = {};
            for (const [A, X] of Object.entries(o.selectors ?? {}))
              S[A] = Ui(X, k, h, b);
            return S;
          }
        });
      }
      return {
        reducerPath: m,
        getSelectors: N,
        get selectors() {
          return N(E);
        },
        selectSlice: E
      };
    }
    const v = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...y(s),
      injectInto(m, {
        reducerPath: b,
        ...E
      } = {}) {
        const N = b ?? s;
        return m.inject({
          reducerPath: N,
          reducer: g
        }, E), {
          ...v,
          ...y(N, !0)
        };
      }
    };
    return v;
  };
}
function Ui(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    if (typeof a > "u") {
      if (r)
        a = n();
      else if (C.NODE_ENV !== "production")
        throw new Error(C.NODE_ENV === "production" ? T(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var jr = /* @__PURE__ */ Li();
function Wi() {
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
function Hi({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !qi(r))
      throw new Error(C.NODE_ENV === "production" ? T(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? be(e, s) : be(e));
}
function Bi(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function qi(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ki({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(C.NODE_ENV === "production" ? T(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
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
var Gi = (e, t) => {
  if (typeof e != "function")
    throw new Error(C.NODE_ENV === "production" ? T(32) : `${t} is not a function`);
}, jt = "listenerMiddleware", Yi = (e) => {
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
    throw new Error(C.NODE_ENV === "production" ? T(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Gi(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, Xi = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Yi(e);
  return {
    id: Fi(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(C.NODE_ENV === "production" ? T(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Xi
}), Zi = Object.assign(be(`${jt}/add`), {
  withTypes: () => Zi
});
be(`${jt}/removeAll`);
var Ji = Object.assign(be(`${jt}/remove`), {
  withTypes: () => Ji
});
function T(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Qi = [], zr = jr({
  name: "fields",
  initialState: Qi,
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
  registerForm: es,
  registerField: ts,
  updateField: q,
  updateFieldErrors: Cn,
  updateMeta: ns
} = zr.actions, rs = zr.reducer, os = (e) => (t) => t.forms[e], is = (e) => (t) => t.forms[e].meta.step, et = (e) => (t) => t.forms[e].fields, zt = (e, t) => (n) => n.forms[e].fields[t], ss = {
  environment: "production",
  errors: {}
}, Lr = jr({
  name: "misc",
  initialState: ss,
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
  registerErrors: as,
  setEnvironment: us
} = Lr.actions, cs = Lr.reducer, ls = () => (e) => e.misc.errors;
function Ur(e, t) {
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
function x(e) {
  return e.map((t) => t ? "dkf_" + t : !1).filter(Boolean).join(" ");
}
function fs(e, t) {
  return new CustomEvent(e, {
    detail: t
  });
}
function ds(e, t) {
  e.dispatchEvent(t);
}
function Wr(e) {
  return ["text", "number", "email", "phone", "checkbox", "radio", "hidden"].includes(e.sub_type);
}
function _s() {
  const e = Ke({}), t = (n, r, o) => {
    var i;
    Wr(n) && (o(ts({
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
function ps(e, t, n) {
  return q({
    formInstance: e,
    name: t,
    value: n
  });
}
function hs(e, t, n) {
  return ns({
    formInstance: e,
    name: t,
    value: n
  });
}
function ms(e) {
  return () => {
  };
}
const On = {
  update_field: ps,
  update_meta: hs,
  submit: ms
};
var ys = 0;
function w(e, t, n, r, o, i) {
  var s, a, c = {};
  for (a in t)
    a == "ref" ? s = t[a] : c[a] = t[a];
  var l = { type: e, props: c, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --ys, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s)
      c[a] === void 0 && (c[a] = s[a]);
  return O.vnode && O.vnode(l), l;
}
function vs(e) {
  const {
    formInstance: t,
    name: n,
    label: r,
    type: o,
    events: i,
    disabled: s = !1,
    ...a
  } = e, c = ae(), l = x(["button-container", "button-container--" + n]), f = x(["button", "button--" + n, "button--" + (e.buttonType || "primary")]);
  return w("div", {
    className: l,
    children: w("button", {
      type: o,
      className: f,
      onClick: () => {
        i && i.forEach((_) => {
          if (_.mapping)
            for (const d in _.mapping) {
              const p = _.mapping[d];
              c(On[_.name](t, d, p));
            }
          else
            c(On[_.name](t));
        });
      },
      children: r
    }, n)
  });
}
const bs = pe(function(t, n) {
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
    storeAsDonorMeta: _,
    showInReceipt: d,
    childNodes: p,
    disabled: g = !1,
    ...h
  } = t, y = Y(et(r)), v = ae(), m = Ur(y, c);
  if (re(() => {
    m && v(q({
      formInstance: r,
      name: o,
      value: a
    }));
  }, [m]), y[o] === void 0 || !m)
    return null;
  const b = x(["input", "input-checkbox", "input-checkbox--" + o]), E = x(["input--option"]);
  return w("div", {
    className: b,
    children: s ? s.map((N) => w("div", {
      className: E,
      ref: n,
      children: [w("input", {
        id: r + o + N.value,
        name: o,
        type: "checkbox",
        value: N.value,
        checked: y[o].value === N.value,
        onChange: () => v(q({
          formInstance: r,
          name: o,
          value: N.value
        }))
      }), w("label", {
        className: x(["input--label"]),
        htmlFor: r + o + N.value,
        tabIndex: 0,
        children: N.label
      })]
    }, o + N.value)) : w(P, {
      children: [w("input", {
        id: r + o,
        name: o,
        type: "checkbox",
        value: "true",
        checked: y[o].value == "true",
        onChange: () => v(q({
          formInstance: r,
          name: o,
          value: y[o].value == "true" ? "false" : "true"
        })),
        ref: n
      }, o), w("label", {
        className: x(["input--label"]),
        htmlFor: r + o,
        tabIndex: 0,
        children: i
      })]
    })
  });
}), gs = (e, t) => {
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
}, ws = (e, t) => {
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
}, Es = (e, t) => typeof t == "string", Ns = (e, t) => Number.isInteger(t), Ss = (e, t) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t), Cs = (e, t) => t != null && t.trim() !== "", Os = {
  min: gs,
  max: ws,
  string: Es,
  numeric: Ns,
  required: Cs,
  email: Ss
};
function Lt(e, t, n, r) {
  const o = Y(ls()), i = Y(zt(e, t)), s = ae();
  return {
    setValidateField: (c) => {
      if (!r || r.length === 0)
        return;
      let l = [];
      for (const f of r) {
        const u = f.split(":"), _ = Os[u[0]];
        if (!_) {
          console.error(`Validator not found for rule: ${u[0]}`);
          continue;
        }
        const d = _(f, i.value);
        if (console.log("Validator", f, i.value, d ? "true" : "false"), !d && o[u[0]]) {
          let p = o[u[0]];
          p.includes(":attribute") && (p = p.replace(":attribute", n)), p.includes(":max") && (p = p.replace(":max", u[1])), p.includes(":min") && (p = p.replace(":min", u[1])), l.push(p);
        }
      }
      l.length > 0 && s(Cn({
        formInstance: e,
        name: t,
        errors: l
      })), s(Cn({
        formInstance: e,
        name: t,
        errors: l
      }));
    }
  };
}
const ks = pe(function(t, n) {
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
    storeAsDonorMeta: _,
    showInReceipt: d,
    nodeType: p,
    childNodes: g,
    disabled: h = !1,
    ...y
  } = t, [v, m] = se((z, F) => ({
    ...z,
    ...F
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: b,
    isInvalid: E
  } = v, N = Y(et(r)), k = ae(), D = N[o].errors, {
    setValidateField: S
  } = Lt(r, o, i, c), A = (z) => {
    z.preventDefault(), k(q({
      formInstance: r,
      name: o,
      value: z.target.value
    }));
    let F = !1;
    z.target.value.length > 0 && (F = !0), S(z.target.value), m({
      isActive: F
    });
  }, X = x(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + p]), M = x(["input", "input--" + o, "input-type--" + p, b && "input--active", D && D.length > 0 && "input--invalid"]), j = x(["input--field"]);
  return w("div", {
    className: X,
    children: w("div", {
      className: M,
      children: [i && w("label", {
        className: x(["input--label"]),
        htmlFor: o,
        children: i
      }), w("input", {
        id: o,
        className: j,
        disabled: h,
        autoComplete: "email",
        ...y,
        onChange: A,
        ref: n
      }), D && D.length !== 0 && w(P, {
        children: D.map((z, F) => w("div", {
          className: x(["input--error"]),
          children: z
        }, F))
      })]
    })
  });
});
function Ds(e) {
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
    nodeType: u,
    childNodes: _,
    disabled: d = !1,
    ...p
  } = e, g = x(["html", ...Array.isArray(c) ? c : []]);
  return w("div", {
    className: x(["html_wrapper"]),
    children: w("div", {
      className: g,
      dangerouslySetInnerHTML: {
        __html: n
      }
    })
  });
}
const xs = pe(function(t, n) {
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
    showInReceipt: _,
    nodeType: d,
    childNodes: p,
    disabled: g = !1,
    ...h
  } = t, [y, v] = se((M, j) => ({
    ...M,
    ...j
  }), {
    isActive: !1
  }), {
    isActive: m
  } = y, b = Y(zt(r, o)), E = ae(), N = b.errors, {
    setValidateField: k
  } = Lt(r, o, i, c);
  Dt(n, () => ({
    validate() {
      k(b.value);
    }
  }), [b]);
  const D = (M) => {
    M.preventDefault(), E(q({
      formInstance: r,
      name: o,
      value: M.target.value
    }));
    let j = !1;
    M.target.value.length > 0 && (j = !0), k(M.target.value), v({
      isActive: j
    });
  }, S = x(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + d]), A = x(["input", "input--" + o, "input-type--" + d, m && "input--active", N && N.length > 0 && "input--invalid"]), X = x(["input--field"]);
  return w("div", {
    className: S,
    children: w("div", {
      className: A,
      children: [i && w("label", {
        className: x(["input--label"]),
        htmlFor: o,
        children: i
      }), w("input", {
        type: "text",
        id: o,
        className: X,
        disabled: g,
        ...h,
        value: b.value,
        onChange: D,
        ref: n
      }), N && N.length !== 0 && w(P, {
        children: N.map((M, j) => w("div", {
          className: x(["input--error"]),
          children: M
        }, j))
      })]
    })
  });
}), St = Ii({
  reducer: {
    misc: cs,
    forms: rs
  }
});
function Hr(e) {
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
function Ts({
  childNodes: e,
  formInstance: t,
  fieldrefs: n
}) {
  const r = St.getState().forms[t], o = r.fields, i = r.meta, s = St.getState().misc.environment, a = (f) => {
    f.preventDefault();
    let u = !0;
    const _ = {
      form_id: i.formId,
      payment_method: i.payment_method
    };
    Object.values(n.current).forEach((d) => {
      var p, g;
      (g = (p = d.current) == null ? void 0 : p.validate) == null || g.call(p);
    });
    for (const d in o)
      if (o.hasOwnProperty(d)) {
        const p = o[d];
        p.value && (_[d] = p.value), p.errors && p.errors.length > 0 && (u = !1), p.validationRules && p.validationRules.indexOf("required") !== -1 && !p.value && (u = !1);
      }
    if (!u) {
      console.log("Form is not valid");
      return;
    }
    c(_).then((d) => {
      d.url && (window.location.href = d.url);
    });
  };
  async function c(f) {
    return await (await fetch(Hr(s) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f)
    })).json();
  }
  const l = x(["form", "form_instance--" + t, (i == null ? void 0 : i.formId) && "form_id--" + (i == null ? void 0 : i.formId), (i == null ? void 0 : i.formCategory) && "form_category--" + (i == null ? void 0 : i.formCategory), (i == null ? void 0 : i.formTeam) && "form_team--" + (i == null ? void 0 : i.formTeam)]);
  return w("div", {
    className: x(["form_wrapper"]),
    children: w("form", {
      className: l,
      onSubmit: a,
      noValidate: !0,
      children: e
    })
  });
}
function Rs({
  childNodes: e,
  name: t
}) {
  const n = x(["group", "group--" + t]);
  return w("div", {
    className: n,
    children: e
  });
}
const $s = pe(function(t, n) {
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
    storeAsDonorMeta: _,
    showInReceipt: d,
    nodeType: p,
    events: g,
    childNodes: h,
    disabled: y = !1,
    ...v
  } = t, [m, b] = se((F, L) => ({
    ...F,
    ...L
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: E,
    isInvalid: N
  } = m, k = Y(et(r)), D = ae(), S = k[o].errors, {
    setValidateField: A
  } = Lt(r, o, i, c), X = x(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + p]), M = x(["input", "input--" + o, "input-type--" + p, E && "input--active", S && S.length > 0 && "input--invalid"]), j = (F) => {
    F.preventDefault();
    let L = Number(F.target.value);
    L === 0 && (L = ""), D(q({
      formInstance: r,
      name: o,
      value: L
    })), u && D(q({
      formInstance: r,
      name: u,
      value: L
    }));
    let he = !1;
    L && (he = !0), A(L), b({
      isActive: he
    });
  }, z = x(["input--field"]);
  return w("div", {
    className: X,
    children: w("div", {
      className: M,
      children: [i && w("label", {
        className: x(["input--label"]),
        htmlFor: o,
        children: i
      }), w("input", {
        type: "number",
        id: o,
        className: z,
        disabled: y,
        ...v,
        value: k[o].value,
        onChange: j,
        ref: n
      }), S && S.length !== 0 && w(P, {
        children: S.map((F, L) => w("div", {
          className: x(["input--error"]),
          children: F
        }, L))
      })]
    })
  });
}), As = pe(function(t, n) {
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
    alias: _,
    storeAsDonorMeta: d,
    showInReceipt: p,
    nodeType: g,
    childNodes: h,
    disabled: y = !1,
    ...v
  } = t, m = Y(et(r));
  Y(zt(r, o));
  const b = ae(), E = _ || o, N = x(["input", "input-radio", "input-radio--" + o]), k = x(["input--option"]);
  re(() => {
    s && !s.some((S) => S.value === m[o].value) && (b(q({
      formInstance: r,
      name: o,
      value: a
    })), _ && b(q({
      formInstance: r,
      name: _,
      value: a
    })));
  }, [m.frequency.value]);
  const D = (S, A) => {
    b(q({
      formInstance: r,
      name: o,
      value: A
    })), _ && b(q({
      formInstance: r,
      name: _,
      value: A
    }));
  };
  return w("div", {
    className: N,
    children: s ? s.map((S) => w("div", {
      className: k,
      ref: n,
      children: w("label", {
        children: [w("input", {
          id: r + o + S.value,
          name: o,
          type: "radio",
          value: S.value,
          checked: m[E].value === S.value,
          onChange: (A) => D(A, S.value)
        }), w("span", {
          className: x(["input--label"]),
          children: S.label
        })]
      })
    }, o + S.value)) : w(P, {
      children: [w("input", {
        id: r + o,
        name: o,
        type: "radio",
        value: "true",
        checked: !!m[E].value,
        onChange: (S) => D(S, !0),
        ref: n
      }, o), w("label", {
        className: x(["input--label"]),
        htmlFor: r + o,
        tabIndex: 0,
        children: i
      })]
    })
  });
});
function Is({
  childNodes: e
}) {
  const t = x(["section"]);
  return w("div", {
    className: t,
    children: e
  });
}
function Ms({
  formInstance: e,
  childNodes: t
}) {
  const n = Y(is(e)), r = x(["steps"]);
  return w("div", {
    className: r,
    children: t[n - 1]
  });
}
function Ps({
  name: e,
  childNodes: t
}) {
  const n = x(["step"]);
  return w("div", {
    className: n,
    children: t
  });
}
function Vs(e) {
  const {
    formId: t,
    env: n,
    setAppState: r
  } = e, [o, i] = se((_, d) => ({
    ..._,
    ...d
  }), {
    isLoading: !0,
    isDelayed: !1,
    error: null
  }), {
    isLoading: s,
    isDelayed: a,
    error: c
  } = o, l = Ke(null);
  async function f(_, d) {
    l.current = new AbortController(), setTimeout(() => {
      i({
        isDelayed: !0
      });
    }, 2e3), fetch(Hr(d) + "/api/v1/form/config/" + _, {
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
  return re(() => {
    t && u();
  }, [r]), w("div", {
    className: x(["loader-container"]),
    children: w("div", {
      className: x(["loader", "loader-" + status]),
      children: ["Loading...", a && w(P, {
        children: [w("p", {
          children: "Loading the form is taking longer than usual. It is still loading but you can cancel and/or retry."
        }), w("button", {
          onClick: () => l.current.abort(),
          children: "Cancel"
        }), w("button", {
          onClick: () => u(),
          children: "Retry"
        })]
      }), c && w(P, {
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
const Fs = {
  button: vs,
  checkbox: bs,
  email: ks,
  html: Ds,
  text: xs,
  group: Rs,
  number: $s,
  radio: As,
  section: Is,
  steps: Ms,
  step: Ps,
  form: Ts
};
function js({
  formInstance: e,
  formId: t,
  env: n,
  lang: r
}) {
  const o = Y(os(e)), i = ae(), [s, a] = se((v, m) => ({
    ...v,
    ...m
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
    config: _,
    errors: d,
    error: p
  } = s, {
    fieldRefs: g,
    registerNode: h
  } = _s();
  if (re(() => {
    if (c === !1) {
      const v = fs("fundyFormLoaded", {
        detail: {
          formInstance: e
        }
      });
      ds(document, v);
    }
  }, [c]), re(() => {
    i(es({
      formInstance: e,
      formId: t,
      formCategory: f,
      formTeam: u,
      step: 0
    })), i(us({
      env: n
    })), d && i(as({
      errors: d
    })), c === !1 && l === !1 && (h(_, e, i), a({
      isInitialized: !0
    }));
  }, [e, c]), c === !0)
    return w(Vs, {
      formId: t,
      env: n,
      setAppState: a
    });
  const y = (v, m) => {
    let b = null;
    if (b = Fs[v.sub_type], !b || !Ur(o.fields, v.visibilityConditions))
      return null;
    const E = v.nodes ? v.nodes.map((k) => y(k, m)) : null, N = Wr(v) ? g.current[v.name] : null;
    return w(b, {
      formInstance: m,
      ref: N,
      childNodes: E,
      fieldrefs: g,
      ...v
    }, v.name);
  };
  return o === void 0 ? null : c || l === !1 ? w("div", {
    className: x(["loading"]),
    children: w("div", {
      className: x(["loading__message"]),
      children: "Loading..."
    })
  }) : w(P, {
    children: y(_, e)
  });
}
let zs = 0;
function Ls() {
  return zs++;
}
const Br = (e, t, n) => {
  if (e.nodeType === 3) {
    const r = e.nodeValue.match(t);
    if (r) {
      const o = n(r);
      e.parentNode.replaceChild(o, e);
    }
  } else
    e.childNodes.forEach((r) => Br(r, t, n));
}, Us = /\[fundy-form(?: id="(\d+)")?(?: env="(\w+)")?(?: lang="(\w+)")?\]/, Ws = (e) => {
  const t = document.createElement("div");
  return t.className = "fundy-form", t.setAttribute("data-form-id", e[1]), t.setAttribute("data-env", e[2]), t;
};
Br(document.body, Us, Ws);
for (const e of document.getElementsByClassName("fundy-form")) {
  const t = Ls(), n = e.getAttribute("data-form-id") ?? "0", r = e.getAttribute("data-env") ?? "production", o = e.getAttribute("data-lang") ?? "en";
  yo.createRoot(e).render(w(Ye.StrictMode, {
    children: w(Io, {
      store: St,
      children: w(js, {
        formInstance: t,
        formId: n,
        env: r,
        lang: o
      })
    })
  }));
}
