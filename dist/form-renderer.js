var Ve, x, Un, ye, nn, Wn, St, Hn, $e = {}, Bn = [], io = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ot = Array.isArray;
function oe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ne(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Te(e, a, r, o, null);
}
function Te(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Un, __i: -1, __u: 0 };
  return o == null && x.vnode != null && x.vnode(i), i;
}
function Kn() {
  return { current: null };
}
function j(e) {
  return e.children;
}
function Y(e, t) {
  this.props = e, this.context = t;
}
function Ne(e, t) {
  if (t == null)
    return e.__ ? Ne(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ne(e) : null;
}
function Gn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gn(e);
  }
}
function Ct(e) {
  (!e.__d && (e.__d = !0) && ye.push(e) && !Ze.__r++ || nn !== x.debounceRendering) && ((nn = x.debounceRendering) || Wn)(Ze);
}
function Ze() {
  var e, t, n, r, o, i, a, s, c;
  for (ye.sort(St); e = ye.shift(); )
    e.__d && (t = ye.length, r = void 0, i = (o = (n = e).__v).__e, s = [], c = [], (a = n.__P) && ((r = oe({}, o)).__v = o.__v + 1, x.vnode && x.vnode(r), Lt(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? Ne(o), !!(32 & o.__u), c), r.__v = o.__v, r.__.__k[r.__i] = r, Zn(s, r, c), r.__e != i && Gn(r)), ye.length > t && ye.sort(St));
  Ze.__r = 0;
}
function Yn(e, t, n, r, o, i, a, s, c, l, f) {
  var u, p, d, _, v, h = r && r.__k || Bn, m = t.length;
  for (n.__d = c, so(n, t, h), c = n.__d, u = 0; u < m; u++)
    (d = n.__k[u]) != null && typeof d != "boolean" && typeof d != "function" && (p = d.__i === -1 ? $e : h[d.__i] || $e, d.__i = u, Lt(e, d, p, o, i, a, s, c, l, f), _ = d.__e, d.ref && p.ref != d.ref && (p.ref && zt(p.ref, null, d), f.push(d.ref, d.__c || _, d)), v == null && _ != null && (v = _), 65536 & d.__u || p.__k === d.__k ? c = Xn(d, c, e) : typeof d.type == "function" && d.__d !== void 0 ? c = d.__d : _ && (c = _.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = c, n.__e = v;
}
function so(e, t, n) {
  var r, o, i, a, s, c = t.length, l = n.length, f = l, u = 0;
  for (e.__k = [], r = 0; r < c; r++)
    a = r + u, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Te(null, o, null, null, null) : ot(o) ? Te(j, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Te(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = ao(o, n, a, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? u++ : s > a ? f > c - a ? u += s - a : u-- : s < a ? s == a - 1 && (u = s - a) : u = 0, s !== r + u && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Ne(i)), Ot(i, i, !1), n[a] = null, f--);
  if (f)
    for (r = 0; r < l; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Ne(i)), Ot(i, i));
}
function Xn(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = Xn(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function ie(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ot(e) ? e.some(function(n) {
    ie(n, t);
  }) : t.push(e)), t;
}
function ao(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, c = t[n];
  if (c === null || c && o == c.key && i === c.type && !(131072 & c.__u))
    return n;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((c = t[a]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((c = t[s]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return s;
        s++;
      }
    }
  return -1;
}
function rn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || io.test(t) ? n : n + "px";
}
function He(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || rn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || rn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? sn : on, i)) : e.removeEventListener(t, i ? sn : on, i);
    else {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function on(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u)
        return;
    } else
      e.t = Date.now();
    return t(x.event ? x.event(e) : e);
  }
}
function sn(e) {
  if (this.l)
    return this.l[e.type + !0](x.event ? x.event(e) : e);
}
function Lt(e, t, n, r, o, i, a, s, c, l) {
  var f, u, p, d, _, v, h, m, b, y, g, E, w, S, C, D = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = x.__b) && f(t);
  e:
    if (typeof D == "function")
      try {
        if (m = t.props, b = (f = D.contextType) && r[f.__c], y = f ? b ? b.props.value : f.__ : r, n.__c ? h = (u = t.__c = n.__c).__ = u.__E : ("prototype" in D && D.prototype.render ? t.__c = u = new D(m, y) : (t.__c = u = new Y(m, y), u.constructor = D, u.render = co), b && b.sub(u), u.props = m, u.state || (u.state = {}), u.context = y, u.__n = r, p = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), D.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = oe({}, u.__s)), oe(u.__s, D.getDerivedStateFromProps(m, u.__s))), d = u.props, _ = u.state, u.__v = t, p)
          D.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && m !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(m, y), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(m, u.__s, y) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (u.props = m, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), g = 0; g < u._sb.length; g++)
              u.__h.push(u._sb[g]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(m, u.__s, y), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, _, v);
          });
        }
        if (u.context = y, u.props = m, u.__P = e, u.__e = !1, E = x.__r, w = 0, "prototype" in D && D.prototype.render) {
          for (u.state = u.__s, u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++w < 25);
        u.state = u.__s, u.getChildContext != null && (r = oe(oe({}, r), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (v = u.getSnapshotBeforeUpdate(d, _)), Yn(e, ot(C = f != null && f.type === j && f.key == null ? f.props.children : f) ? C : [C], t, n, r, o, i, a, s, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && a.push(u), h && (u.__E = u.__ = null);
      } catch (A) {
        t.__v = null, c || i != null ? (t.__e = s, t.__u |= c ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), x.__e(A, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = uo(n.__e, t, n, r, o, i, a, c, l);
  (f = x.diffed) && f(t);
}
function Zn(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    zt(n[r], n[++r], n[++r]);
  x.__c && x.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      x.__e(i, o.__v);
    }
  });
}
function uo(e, t, n, r, o, i, a, s, c) {
  var l, f, u, p, d, _, v, h = n.props, m = t.props, b = t.type;
  if (b === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((d = i[l]) && "setAttribute" in d == !!b && (b ? d.localName === b : d.nodeType === 3)) {
        e = d, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (b === null)
      return document.createTextNode(m);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, m.is && m), i = null, s = !1;
  }
  if (b === null)
    h === m || s && e.data === m || (e.data = m);
  else {
    if (i = i && Ve.call(e.childNodes), h = n.props || $e, !s && i != null)
      for (h = {}, l = 0; l < e.attributes.length; l++)
        h[(d = e.attributes[l]).name] = d.value;
    for (l in h)
      d = h[l], l == "children" || (l == "dangerouslySetInnerHTML" ? u = d : l === "key" || l in m || He(e, l, null, d, o));
    for (l in m)
      d = m[l], l == "children" ? p = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? _ = d : l == "checked" ? v = d : l === "key" || s && typeof d != "function" || h[l] === d || He(e, l, d, h[l], o);
    if (f)
      s || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Yn(e, ot(p) ? p : [p], t, n, r, o && b !== "foreignObject", i, a, i ? i[0] : n.__k && Ne(n, 0), s, c), i != null)
      for (l = i.length; l--; )
        i[l] != null && qn(i[l]);
    s || (l = "value", _ !== void 0 && (_ !== e[l] || b === "progress" && !_ || b === "option" && _ !== h[l]) && He(e, l, _, h[l], !1), l = "checked", v !== void 0 && v !== e[l] && He(e, l, v, h[l], !1));
  }
  return e;
}
function zt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    x.__e(r, n);
  }
}
function Ot(e, t, n) {
  var r, o;
  if (x.unmount && x.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || zt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        x.__e(i, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && Ot(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || qn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function co(e, t, n) {
  return this.constructor(e, n);
}
function Ae(e, t, n) {
  var r, o, i, a;
  x.__ && x.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Lt(t, e = (!r && n || t).__k = ne(j, null, [e]), o || $e, $e, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Ve.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), Zn(i, e, a);
}
function Jn(e, t) {
  Ae(e, t, Jn);
}
function lo(e, t, n) {
  var r, o, i, a, s = oe({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), Te(e.type, s, r || e.key, o || e.ref, null);
}
function Qn(e, t) {
  var n = { __c: t = "__cC" + Hn++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, Ct(s);
      });
    }, this.sub = function(a) {
      o.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), s && s.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ve = Bn.slice, x = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Un = 0, Y.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = oe({}, this.state), typeof e == "function" && (e = e(oe({}, n), this.props)), e && oe(n, e), e != null && this.__v && (t && this._sb.push(t), Ct(this));
}, Y.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ct(this));
}, Y.prototype.render = j, ye = [], Wn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, St = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ze.__r = 0, Hn = 0;
var se, R, ht, an, Se = 0, er = [], Ye = [], $ = x, un = $.__b, cn = $.__r, ln = $.diffed, fn = $.__c, dn = $.unmount, pn = $.__;
function we(e, t) {
  $.__h && $.__h(R, e, Se || t), Se = 0;
  var n = R.__H || (R.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ye }), n.__[e];
}
function it(e) {
  return Se = 1, pe(or, e);
}
function pe(e, t, n) {
  var r = we(se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : or(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, s);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = R, !R.u)) {
    var o = function(s, c, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      }))
        return !i || i.call(this, s, c, l);
      var u = !1;
      return f.forEach(function(p) {
        if (p.__N) {
          var d = p.__[0];
          p.__ = p.__N, p.__N = void 0, d !== p.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === s) && (!i || i.call(this, s, c, l));
    };
    R.u = !0;
    var i = R.shouldComponentUpdate, a = R.componentWillUpdate;
    R.componentWillUpdate = function(s, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, c, l), i = f;
      }
      a && a.call(this, s, c, l);
    }, R.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function W(e, t) {
  var n = we(se++, 3);
  !$.__s && Ut(n.__H, t) && (n.__ = e, n.i = t, R.__H.__h.push(n));
}
function Pe(e, t) {
  var n = we(se++, 4);
  !$.__s && Ut(n.__H, t) && (n.__ = e, n.i = t, R.__h.push(n));
}
function xe(e) {
  return Se = 5, st(function() {
    return { current: e };
  }, []);
}
function je(e, t, n) {
  Se = 6, Pe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function st(e, t) {
  var n = we(se++, 7);
  return Ut(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function X(e, t) {
  return Se = 8, st(function() {
    return e;
  }, t);
}
function tr(e) {
  var t = R.context[e.__c], n = we(se++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(R)), t.props.value) : e.__;
}
function nr(e, t) {
  $.useDebugValue && $.useDebugValue(t ? t(e) : e);
}
function fo(e) {
  var t = we(se++, 10), n = it();
  return t.__ = e, R.componentDidCatch || (R.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function rr() {
  var e = we(se++, 11);
  if (!e.__) {
    for (var t = R.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function po() {
  for (var e; e = er.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Xe), e.__H.__h.forEach(kt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], $.__e(t, e.__v);
      }
}
$.__b = function(e) {
  R = null, un && un(e);
}, $.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), pn && pn(e, t);
}, $.__r = function(e) {
  cn && cn(e), se = 0;
  var t = (R = e.__c).__H;
  t && (ht === R ? (t.__h = [], R.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ye, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Xe), t.__h.forEach(kt), t.__h = [], se = 0)), ht = R;
}, $.diffed = function(e) {
  ln && ln(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (er.push(t) !== 1 && an === $.requestAnimationFrame || ((an = $.requestAnimationFrame) || _o)(po)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ye && (n.__ = n.__V), n.i = void 0, n.__V = Ye;
  })), ht = R = null;
}, $.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Xe), n.__h = n.__h.filter(function(r) {
        return !r.__ || kt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], $.__e(r, n.__v);
    }
  }), fn && fn(e, t);
}, $.unmount = function(e) {
  dn && dn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Xe(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && $.__e(t, n.__v));
};
var _n = typeof requestAnimationFrame == "function";
function _o(e) {
  var t, n = function() {
    clearTimeout(r), _n && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  _n && (t = requestAnimationFrame(n));
}
function Xe(e) {
  var t = R, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), R = t;
}
function kt(e) {
  var t = R;
  e.__c = e.__(), R = t;
}
function Ut(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ir(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function xt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Je(e, t) {
  this.props = e, this.context = t;
}
function sr(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : xt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, ne(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Je.prototype = new Y()).isPureReactComponent = !0, Je.prototype.shouldComponentUpdate = function(e, t) {
  return xt(this.props, e) || xt(this.state, t);
};
var hn = x.__b;
x.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), hn && hn(e);
};
var ho = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function _e(e) {
  function t(n) {
    var r = ir({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = ho, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var mn = function(e, t) {
  return e == null ? null : ie(ie(e).map(t));
}, ar = { map: mn, forEach: mn, count: function(e) {
  return e ? ie(e).length : 0;
}, only: function(e) {
  var t = ie(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: ie }, mo = x.__e;
x.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  mo(e, t, n, r);
};
var yn = x.unmount;
function ur(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = ir({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return ur(r, t, n);
  })), e;
}
function cr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return cr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Re() {
  this.__u = 0, this.t = null, this.__b = null;
}
function lr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function fr(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r)
      throw r;
    if (!n)
      throw t;
    return ne(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ee() {
  this.u = null, this.o = null;
}
x.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), yn && yn(e);
}, (Re.prototype = new Y()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = lr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = cr(c, c.__c.__P, c.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
        l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Re.prototype.componentWillUnmount = function() {
  this.t = [];
}, Re.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = ur(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && ne(j, null, e.fallback);
  return o && (o.__u &= -33), [ne(j, null, t.__a ? null : e.children), o];
};
var vn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function yo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function vo(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    Ae(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), Ae(ne(yo, { context: t.context }, e.__v), t.l);
}
function dr(e, t) {
  var n = ne(vo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Ee.prototype = new Y()).__a = function(e) {
  var t = this, n = lr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), vn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ee.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = ie(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Ee.prototype.componentDidUpdate = Ee.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    vn(e, n, t);
  });
};
var pr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, bo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, go = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, wo = /[A-Z0-9]/g, Eo = typeof document < "u", No = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Wt(e, t, n) {
  return t.__k == null && (t.textContent = ""), Ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Ht(e, t, n) {
  return Jn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Y.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var bn = x.event;
function So() {
}
function Co() {
  return this.cancelBubble;
}
function Oo() {
  return this.defaultPrevented;
}
x.event = function(e) {
  return bn && (e = bn(e)), e.persist = So, e.isPropagationStopped = Co, e.isDefaultPrevented = Oo, e.nativeEvent = e;
};
var Bt, ko = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, gn = x.vnode;
x.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Eo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || No(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : go.test(i) ? i = s : r.indexOf("-") === -1 && bo.test(i) ? i = i.replace(wo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ie(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ie(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ko)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = pr, gn && gn(e);
};
var wn = x.__r;
x.__r = function(e) {
  wn && wn(e), Bt = e.__c;
};
var En = x.diffed;
x.diffed = function(e) {
  En && En(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Bt = null;
};
var _r = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Bt.__n[e.__c].props.value;
} } } }, xo = "17.0.2";
function hr(e) {
  return ne.bind(null, e);
}
function Fe(e) {
  return !!e && e.$$typeof === pr;
}
function mr(e) {
  return Fe(e) && e.type === j;
}
function yr(e) {
  return Fe(e) ? lo.apply(null, arguments) : e;
}
function qt(e) {
  return !!e.__k && (Ae(null, e), !0);
}
function vr(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var br = function(e, t) {
  return e(t);
}, gr = function(e, t) {
  return e(t);
}, wr = j;
function Kt(e) {
  e();
}
function Er(e) {
  return e;
}
function Nr() {
  return [!1, Kt];
}
var Sr = Pe, Cr = Fe;
function Or(e, t) {
  var n = t(), r = it({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return Pe(function() {
    o.__ = n, o.v = t, mt(o) && i({ h: o });
  }, [e, n, t]), W(function() {
    return mt(o) && i({ h: o }), e(function() {
      mt(o) && i({ h: o });
    });
  }, [e]), n;
}
function mt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var Le = { useState: it, useId: rr, useReducer: pe, useEffect: W, useLayoutEffect: Pe, useInsertionEffect: Sr, useTransition: Nr, useDeferredValue: Er, useSyncExternalStore: Or, startTransition: Kt, useRef: xe, useImperativeHandle: je, useMemo: st, useCallback: X, useContext: tr, useDebugValue: nr, version: "17.0.2", Children: ar, render: Wt, hydrate: Ht, unmountComponentAtNode: qt, createPortal: dr, createElement: ne, createContext: Qn, createFactory: hr, cloneElement: yr, createRef: Kn, Fragment: j, isValidElement: Fe, isElement: Cr, isFragment: mr, findDOMNode: vr, Component: Y, PureComponent: Je, memo: sr, forwardRef: _e, flushSync: gr, unstable_batchedUpdates: br, StrictMode: wr, Suspense: Re, SuspenseList: Ee, lazy: fr, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _r };
const Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: ar,
  Component: Y,
  Fragment: j,
  PureComponent: Je,
  StrictMode: wr,
  Suspense: Re,
  SuspenseList: Ee,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _r,
  cloneElement: yr,
  createContext: Qn,
  createElement: ne,
  createFactory: hr,
  createPortal: dr,
  createRef: Kn,
  default: Le,
  findDOMNode: vr,
  flushSync: gr,
  forwardRef: _e,
  hydrate: Ht,
  isElement: Cr,
  isFragment: mr,
  isValidElement: Fe,
  lazy: fr,
  memo: sr,
  render: Wt,
  startTransition: Kt,
  unmountComponentAtNode: qt,
  unstable_batchedUpdates: br,
  useCallback: X,
  useContext: tr,
  useDebugValue: nr,
  useDeferredValue: Er,
  useEffect: W,
  useErrorBoundary: fo,
  useId: rr,
  useImperativeHandle: je,
  useInsertionEffect: Sr,
  useLayoutEffect: Pe,
  useMemo: st,
  useReducer: pe,
  useRef: xe,
  useState: it,
  useSyncExternalStore: Or,
  useTransition: Nr,
  version: xo
}, Symbol.toStringTag, { value: "Module" }));
function kr(e) {
  return {
    render(t) {
      Wt(t, e);
    },
    unmount() {
      qt(e);
    }
  };
}
function Do(e, t) {
  return Ht(t, e), kr(e);
}
const To = {
  createRoot: kr,
  hydrateRoot: Do
};
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $o(e) {
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
var Tt = { exports: {} }, yt = {};
const xr = /* @__PURE__ */ $o(Dt);
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function Ao() {
  if (Nn)
    return yt;
  Nn = 1;
  var e = xr;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return yt.useSyncExternalStoreWithSelector = function(c, l, f, u, p) {
    var d = o(null);
    if (d.current === null) {
      var _ = { hasValue: !1, value: null };
      d.current = _;
    } else
      _ = d.current;
    d = a(function() {
      function h(E) {
        if (!m) {
          if (m = !0, b = E, E = u(E), p !== void 0 && _.hasValue) {
            var w = _.value;
            if (p(w, E))
              return y = w;
          }
          return y = E;
        }
        if (w = y, n(b, E))
          return w;
        var S = u(E);
        return p !== void 0 && p(w, S) ? w : (b = E, y = S);
      }
      var m = !1, b, y, g = f === void 0 ? null : f;
      return [function() {
        return h(l());
      }, g === null ? void 0 : function() {
        return h(g());
      }];
    }, [l, f, u, p]);
    var v = r(c, d[0], d[1]);
    return i(function() {
      _.hasValue = !0, _.value = v;
    }, [v]), s(v), v;
  }, yt;
}
var vt = {}, Sn;
function Io() {
  if (Sn)
    return vt;
  Sn = 1;
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
    var t = xr;
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    function l(f, u, p, d, _) {
      var v = i(null), h;
      v.current === null ? (h = {
        hasValue: !1,
        value: null
      }, v.current = h) : h = v.current;
      var m = s(function() {
        var E = !1, w, S, C = function(M) {
          if (!E) {
            E = !0, w = M;
            var Z = d(M);
            if (_ !== void 0 && h.hasValue) {
              var J = h.value;
              if (_(J, Z))
                return S = J, J;
            }
            return S = Z, Z;
          }
          var Q = w, ee = S;
          if (r(Q, M))
            return ee;
          var F = d(M);
          return _ !== void 0 && _(ee, F) ? ee : (w = M, S = F, F);
        }, D = p === void 0 ? null : p, A = function() {
          return C(u());
        }, z = D === null ? void 0 : function() {
          return C(D());
        };
        return [A, z];
      }, [u, p, d, _]), b = m[0], y = m[1], g = o(f, b, y);
      return a(function() {
        h.hasValue = !0, h.value = g;
      }, [g]), c(g), g;
    }
    vt.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), vt;
}
var Mo = {};
Mo.NODE_ENV === "production" ? Tt.exports = Ao() : Tt.exports = Io();
var Vo = Tt.exports, Qe = {}, U = (
  // prettier-ignore
  // @ts-ignore
  "default" in Dt ? Le : Dt
), Cn = Symbol.for("react-redux-context"), On = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Po() {
  if (!U.createContext)
    return {};
  const e = On[Cn] ?? (On[Cn] = /* @__PURE__ */ new Map());
  let t = e.get(U.createContext);
  return t || (t = U.createContext(
    null
  ), Qe.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(U.createContext, t)), t;
}
var fe = /* @__PURE__ */ Po(), jo = () => {
  throw new Error("uSES not initialized!");
};
function Gt(e = fe) {
  return function() {
    const n = U.useContext(e);
    if (Qe.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Dr = /* @__PURE__ */ Gt(), Tr = jo, Fo = (e) => {
  Tr = e;
}, Lo = (e, t) => e === t;
function zo(e = fe) {
  const t = e === fe ? Dr : Gt(e), n = (r, o = {}) => {
    const { equalityFn: i = Lo, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o;
    if (Qe.NODE_ENV !== "production") {
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
      store: s,
      subscription: c,
      getServerState: l,
      stabilityCheck: f,
      identityFunctionCheck: u
    } = t(), p = U.useRef(!0), d = U.useCallback(
      {
        [r.name](v) {
          const h = r(v);
          if (Qe.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: m,
              stabilityCheck: b
            } = {
              stabilityCheck: f,
              identityFunctionCheck: u,
              ...a
            };
            if (b === "always" || b === "once" && p.current) {
              const y = r(v);
              if (!i(h, y)) {
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
                    state: v,
                    selected: h,
                    selected2: y,
                    stack: g
                  }
                );
              }
            }
            if ((m === "always" || m === "once" && p.current) && h === v) {
              let y;
              try {
                throw new Error();
              } catch (g) {
                ({ stack: y } = g);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: y }
              );
            }
            p.current && (p.current = !1);
          }
          return h;
        }
      }[r.name],
      [r, f, a.stabilityCheck]
    ), _ = Tr(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      d,
      i
    );
    return U.useDebugValue(_), _;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var P = /* @__PURE__ */ zo();
function Uo(e) {
  e();
}
function Wo() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Uo(() => {
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
var kn = {
  notify() {
  },
  get: () => []
};
function Ho(e, t) {
  let n, r = kn, o = 0, i = !1;
  function a(v) {
    f();
    const h = r.subscribe(v);
    let m = !1;
    return () => {
      m || (m = !0, h(), u());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    _.onStateChange && _.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = e.subscribe(c), r = Wo());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = kn);
  }
  function p() {
    i || (i = !0, f());
  }
  function d() {
    i && (i = !1, u());
  }
  const _ = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: p,
    tryUnsubscribe: d,
    getListeners: () => r
  };
  return _;
}
var Bo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qo = typeof navigator < "u" && navigator.product === "ReactNative", Ko = Bo || qo ? U.useLayoutEffect : U.useEffect;
function Go({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = U.useMemo(() => {
    const l = Ho(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), s = U.useMemo(() => e.getState(), [e]);
  Ko(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || fe;
  return /* @__PURE__ */ U.createElement(c.Provider, { value: a }, n);
}
var Yo = Go;
function Rr(e = fe) {
  const t = e === fe ? Dr : (
    // @ts-ignore
    Gt(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Xo = /* @__PURE__ */ Rr();
function Zo(e = fe) {
  const t = e === fe ? Xo : Rr(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ue = /* @__PURE__ */ Zo();
Fo(Vo.useSyncExternalStoreWithSelector);
var I = {};
function V(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Jo = typeof Symbol == "function" && Symbol.observable || "@@observable", xn = Jo, bt = () => Math.random().toString(36).substring(7).split("").join("."), Qo = {
  INIT: `@@redux/INIT${/* @__PURE__ */ bt()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ bt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${bt()}`
}, ve = Qo;
function ze(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ei(e) {
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
  if (ri(e))
    return "date";
  if (ni(e))
    return "error";
  const n = ti(e);
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
function ti(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ni(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ri(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function le(e) {
  let t = typeof e;
  return I.NODE_ENV !== "production" && (t = ei(e)), t;
}
function $r(e, t, n) {
  if (typeof e != "function")
    throw new Error(I.NODE_ENV === "production" ? V(2) : `Expected the root reducer to be a function. Instead, received: '${le(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(I.NODE_ENV === "production" ? V(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(I.NODE_ENV === "production" ? V(1) : `Expected the enhancer to be a function. Instead, received: '${le(n)}'`);
    return n($r)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((h, m) => {
      a.set(m, h);
    }));
  }
  function f() {
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function u(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(4) : `Expected the listener to be a function. Instead, received: '${le(h)}'`);
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    l();
    const b = s++;
    return a.set(b, h), function() {
      if (m) {
        if (c)
          throw new Error(I.NODE_ENV === "production" ? V(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, l(), a.delete(b), i = null;
      }
    };
  }
  function p(h) {
    if (!ze(h))
      throw new Error(I.NODE_ENV === "production" ? V(7) : `Actions must be plain objects. Instead, the actual type was: '${le(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof h.type > "u")
      throw new Error(I.NODE_ENV === "production" ? V(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof h.type != "string")
      throw new Error(I.NODE_ENV === "production" ? V(17) : `Action "type" property must be a string. Instead, the actual type was: '${le(h.type)}'. Value was: '${h.type}' (stringified)`);
    if (c)
      throw new Error(I.NODE_ENV === "production" ? V(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, h);
    } finally {
      c = !1;
    }
    return (i = a).forEach((b) => {
      b();
    }), h;
  }
  function d(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(10) : `Expected the nextReducer to be a function. Instead, received: '${le(h)}`);
    r = h, p({
      type: ve.REPLACE
    });
  }
  function _() {
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
          throw new Error(I.NODE_ENV === "production" ? V(11) : `Expected the observer to be an object. Instead, received: '${le(m)}'`);
        function b() {
          const g = m;
          g.next && g.next(f());
        }
        return b(), {
          unsubscribe: h(b)
        };
      },
      [xn]() {
        return this;
      }
    };
  }
  return p({
    type: ve.INIT
  }), {
    dispatch: p,
    subscribe: u,
    getState: f,
    replaceReducer: d,
    [xn]: _
  };
}
function Dn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function oi(e, t, n, r) {
  const o = Object.keys(t), i = n && n.type === ve.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!ze(e))
    return `The ${i} has unexpected type of "${le(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (a.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === ve.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function ii(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: ve.INIT
    }) > "u")
      throw new Error(I.NODE_ENV === "production" ? V(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: ve.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(I.NODE_ENV === "production" ? V(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${ve.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function si(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    I.NODE_ENV !== "production" && typeof e[s] > "u" && Dn(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  I.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    ii(n);
  } catch (a) {
    i = a;
  }
  return function(s = {}, c) {
    if (i)
      throw i;
    if (I.NODE_ENV !== "production") {
      const u = oi(s, n, c, o);
      u && Dn(u);
    }
    let l = !1;
    const f = {};
    for (let u = 0; u < r.length; u++) {
      const p = r[u], d = n[p], _ = s[p], v = d(_, c);
      if (typeof v > "u") {
        const h = c && c.type;
        throw new Error(I.NODE_ENV === "production" ? V(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[p] = v, l = l || v !== _;
    }
    return l = l || r.length !== Object.keys(s).length, l ? f : s;
  };
}
function et(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ai(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(I.NODE_ENV === "production" ? V(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = e.map((c) => c(a));
    return i = et(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Ar(e) {
  return ze(e) && "type" in e && typeof e.type == "string";
}
var Ue = {}, Ir = Symbol.for("immer-nothing"), Tn = Symbol.for("immer-draftable"), H = Symbol.for("immer-state"), ui = Ue.NODE_ENV !== "production" ? [
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
function L(e, ...t) {
  if (Ue.NODE_ENV !== "production") {
    const n = ui[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ce = Object.getPrototypeOf;
function de(e) {
  return !!e && !!e[H];
}
function ae(e) {
  var t;
  return e ? Mr(e) || Array.isArray(e) || !!e[Tn] || !!((t = e.constructor) != null && t[Tn]) || ut(e) || ct(e) : !1;
}
var ci = Object.prototype.constructor.toString();
function Mr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ce(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === ci;
}
function tt(e, t) {
  at(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function at(e) {
  const t = e[H];
  return t ? t.type_ : Array.isArray(e) ? 1 : ut(e) ? 2 : ct(e) ? 3 : 0;
}
function Rt(e, t) {
  return at(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Vr(e, t, n) {
  const r = at(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function li(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ut(e) {
  return e instanceof Map;
}
function ct(e) {
  return e instanceof Set;
}
function me(e) {
  return e.copy_ || e.base_;
}
function $t(e, t) {
  if (ut(e))
    return new Map(e);
  if (ct(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Mr(e))
    return Ce(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[H];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o], a = n[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: a.enumerable,
      value: e[i]
    });
  }
  return Object.create(Ce(e), n);
}
function Yt(e, t = !1) {
  return lt(e) || de(e) || !ae(e) || (at(e) > 1 && (e.set = e.add = e.clear = e.delete = fi), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Yt(r, !0))), e;
}
function fi() {
  L(2);
}
function lt(e) {
  return Object.isFrozen(e);
}
var di = {};
function ge(e) {
  const t = di[e];
  return t || L(0, e), t;
}
var Ie;
function Pr() {
  return Ie;
}
function pi(e, t) {
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
function Rn(e, t) {
  t && (ge("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function At(e) {
  It(e), e.drafts_.forEach(_i), e.drafts_ = null;
}
function It(e) {
  e === Ie && (Ie = e.parent_);
}
function $n(e) {
  return Ie = pi(Ie, e);
}
function _i(e) {
  const t = e[H];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function An(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[H].modified_ && (At(t), L(4)), ae(e) && (e = nt(t, e), t.parent_ || rt(t, e)), t.patches_ && ge("Patches").generateReplacementPatches_(
    n[H].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = nt(t, n, []), At(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ir ? e : void 0;
}
function nt(e, t, n) {
  if (lt(t))
    return t;
  const r = t[H];
  if (!r)
    return tt(
      t,
      (o, i) => In(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return rt(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, a = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), a = !0), tt(
      i,
      (s, c) => In(e, r, o, s, c, n, a)
    ), rt(e, o, !1), n && e.patches_ && ge("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function In(e, t, n, r, o, i, a) {
  if (Ue.NODE_ENV !== "production" && o === n && L(5), de(o)) {
    const s = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Rt(t.assigned_, r) ? i.concat(r) : void 0, c = nt(e, o, s);
    if (Vr(n, r, c), de(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && n.add(o);
  if (ae(o) && !lt(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    nt(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && rt(e, o);
  }
}
function rt(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Yt(t, n);
}
function hi(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Pr(),
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
  let o = r, i = Xt;
  n && (o = [r], i = Me);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return r.draft_ = s, r.revoke_ = a, s;
}
var Xt = {
  get(e, t) {
    if (t === H)
      return e;
    const n = me(e);
    if (!Rt(n, t))
      return mi(e, n, t);
    const r = n[t];
    return e.finalized_ || !ae(r) ? r : r === gt(e.base_, t) ? (wt(e), e.copy_[t] = Vt(r, e)) : r;
  },
  has(e, t) {
    return t in me(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(me(e));
  },
  set(e, t, n) {
    const r = jr(me(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = gt(me(e), t), i = o == null ? void 0 : o[H];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (li(n, o) && (n !== void 0 || Rt(e.base_, t)))
        return !0;
      wt(e), Mt(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return gt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, wt(e), Mt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = me(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    L(11);
  },
  getPrototypeOf(e) {
    return Ce(e.base_);
  },
  setPrototypeOf() {
    L(12);
  }
}, Me = {};
tt(Xt, (e, t) => {
  Me[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Me.deleteProperty = function(e, t) {
  return Ue.NODE_ENV !== "production" && isNaN(parseInt(t)) && L(13), Me.set.call(this, e, t, void 0);
};
Me.set = function(e, t, n) {
  return Ue.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && L(14), Xt.set.call(this, e[0], t, n, e[0]);
};
function gt(e, t) {
  const n = e[H];
  return (n ? me(n) : e)[t];
}
function mi(e, t, n) {
  var o;
  const r = jr(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function jr(e, t) {
  if (!(t in e))
    return;
  let n = Ce(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Ce(n);
  }
}
function Mt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Mt(e.parent_));
}
function wt(e) {
  e.copy_ || (e.copy_ = $t(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var yi = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const a = this;
        return function(c = i, ...l) {
          return a.produce(c, (f) => n.call(this, f, ...l));
        };
      }
      typeof n != "function" && L(6), r !== void 0 && typeof r != "function" && L(7);
      let o;
      if (ae(t)) {
        const i = $n(this), a = Vt(t, void 0);
        let s = !0;
        try {
          o = n(a), s = !1;
        } finally {
          s ? At(i) : It(i);
        }
        return Rn(i, r), An(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Ir && (o = void 0), this.autoFreeze_ && Yt(o, !0), r) {
          const i = [], a = [];
          ge("Patches").generateReplacementPatches_(t, o, i, a), r(i, a);
        }
        return o;
      } else
        L(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (c) => t(c, ...s));
      let r, o;
      return [this.produce(t, n, (a, s) => {
        r = a, o = s;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ae(e) || L(8), de(e) && (e = Fr(e));
    const t = $n(this), n = Vt(e, void 0);
    return n[H].isManual_ = !0, It(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[H];
    (!n || !n.isManual_) && L(9);
    const { scope_: r } = n;
    return Rn(r, t), An(void 0, r);
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
    const r = ge("Patches").applyPatches_;
    return de(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Vt(e, t) {
  const n = ut(e) ? ge("MapSet").proxyMap_(e, t) : ct(e) ? ge("MapSet").proxySet_(e, t) : hi(e, t);
  return (t ? t.scope_ : Pr()).drafts_.push(n), n;
}
function Fr(e) {
  return de(e) || L(10, e), Lr(e);
}
function Lr(e) {
  if (!ae(e) || lt(e))
    return e;
  const t = e[H];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = $t(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = $t(e, !0);
  return tt(n, (r, o) => {
    Vr(n, r, Lr(o));
  }), t && (t.finalized_ = !1), n;
}
var B = new yi(), zr = B.produce;
B.produceWithPatches.bind(
  B
);
B.setAutoFreeze.bind(B);
B.setUseStrictShallowCopy.bind(B);
B.applyPatches.bind(B);
B.createDraft.bind(B);
B.finishDraft.bind(B);
var vi = {}, bi = (e, t, n) => {
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
}, gi = (e, t, n) => {
  const { memoize: r, memoizeOptions: o } = t, { inputSelectorResults: i, inputSelectorResultsCopy: a } = e, s = r(() => ({}), ...o);
  if (!(s.apply(null, i) === s.apply(null, a))) {
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
        secondInputs: a,
        stack: l
      }
    );
  }
}, wi = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Ei(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ni(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Si(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Mn = (e) => Array.isArray(e) ? e : [e];
function Ci(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Si(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Vn(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var Oi = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...wi,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: bi
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: gi
    }
  };
}, ki = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, xi = typeof WeakRef < "u" ? WeakRef : ki, Di = 0, Pn = 1;
function qe() {
  return {
    s: Di,
    v: void 0,
    o: null,
    p: null
  };
}
function Zt(e, t = {}) {
  let n = qe();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function a() {
    var u;
    let s = n;
    const { length: c } = arguments;
    for (let p = 0, d = c; p < d; p++) {
      const _ = arguments[p];
      if (typeof _ == "function" || typeof _ == "object" && _ !== null) {
        let v = s.o;
        v === null && (s.o = v = /* @__PURE__ */ new WeakMap());
        const h = v.get(_);
        h === void 0 ? (s = qe(), v.set(_, s)) : s = h;
      } else {
        let v = s.p;
        v === null && (s.p = v = /* @__PURE__ */ new Map());
        const h = v.get(_);
        h === void 0 ? (s = qe(), v.set(_, s)) : s = h;
      }
    }
    const l = s;
    let f;
    if (s.s === Pn ? f = s.v : (f = e.apply(null, arguments), i++), l.s = Pn, r) {
      const p = ((u = o == null ? void 0 : o.deref) == null ? void 0 : u.call(o)) ?? o;
      p != null && r(p, f) && (f = p, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new xi(f) : f;
    }
    return l.v = f, f;
  }
  return a.clearCache = () => {
    n = qe(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function Ur(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), Ei(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const f = {
      ...n,
      ...c
    }, {
      memoize: u,
      memoizeOptions: p = [],
      argsMemoize: d = Zt,
      argsMemoizeOptions: _ = [],
      devModeChecks: v = {}
    } = f, h = Mn(p), m = Mn(_), b = Ci(o), y = u(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h);
    let g = !0;
    const E = d(function() {
      a++;
      const S = Vn(
        b,
        arguments
      );
      if (s = y.apply(null, S), vi.NODE_ENV !== "production") {
        const { identityFunctionCheck: C, inputStabilityCheck: D } = Oi(g, v);
        if (C.shouldRun && C.run(
          l,
          S,
          s
        ), D.shouldRun) {
          const A = Vn(
            b,
            arguments
          );
          D.run(
            { inputSelectorResults: S, inputSelectorResultsCopy: A },
            { memoize: u, memoizeOptions: h },
            arguments
          );
        }
        g && (g = !1);
      }
      return s;
    }, ...m);
    return Object.assign(E, {
      resultFunc: l,
      memoizedResultFunc: y,
      dependencies: b,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => s,
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
var Ti = /* @__PURE__ */ Ur(Zt), Ri = Object.assign(
  (e, t = Ti) => {
    Ni(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (i) => e[i]
    );
    return t(
      r,
      (...i) => i.reduce((a, s, c) => (a[n[c]] = s, a), {})
    );
  },
  { withTypes: () => Ri }
);
function Wr(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var $i = Wr(), Ai = Wr, O = {}, Ii = (...e) => {
  const t = Ur(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (a, ...s) => o(de(a) ? Fr(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
Ii(Zt);
var Mi = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? et : et.apply(null, arguments);
}, Vi = (e) => e && typeof e.match == "function";
function Oe(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(O.NODE_ENV === "production" ? T(0) : "prepareAction did not return an object");
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Ar(r) && r.type === e, n;
}
function Pi(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Vi(e);
}
function ji(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Fi(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = Pi
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(ji(r.type)), n(r));
}
function Hr(e, t) {
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
var Br = class De extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, De.prototype);
  }
  static get [Symbol.species]() {
    return De;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new De(...t[0].concat(this)) : new De(...t.concat(this));
  }
};
function jn(e) {
  return ae(e) ? zr(e, () => {
  }) : e;
}
function Fn(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(O.NODE_ENV === "production" ? T(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Li(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function zi(e, t, n) {
  const r = qr(e, t, n);
  return {
    detectMutations() {
      return Kr(e, t, r, n);
    }
  };
}
function qr(e, t = [], n, r = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), i.children = {};
    for (const a in n) {
      const s = r ? r + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (i.children[a] = qr(e, t, n[a], s));
    }
  }
  return i;
}
function Kr(e, t = [], n, r, o = !1, i = "") {
  const a = n ? n.value : void 0, s = a === r;
  if (o && !s && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: i
    };
  if (e(a) || e(r))
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
    if (l && t.some((_) => _ instanceof RegExp ? _.test(u) : u === _))
      continue;
    const p = Kr(e, t, n.children[f], r[f], s, u);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function Ui(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(s, c, l, f) {
      return JSON.stringify(s, n(c, f), l);
    }, n = function(s, c) {
      let l = [], f = [];
      return c || (c = function(u, p) {
        return l[0] === p ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(p)).join(".") + "]";
      }), function(u, p) {
        if (l.length > 0) {
          var d = l.indexOf(this);
          ~d ? l.splice(d + 1) : l.push(this), ~d ? f.splice(d, 1 / 0, u) : f.push(u), ~l.indexOf(p) && (p = c.call(this, u, p));
        } else
          l.push(p);
        return s == null ? p : s.call(this, u, p);
      };
    }, {
      isImmutable: r = Li,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = zi.bind(null, r, o);
    return ({
      getState: s
    }) => {
      let c = s(), l = a(c), f;
      return (u) => (p) => {
        const d = Hr(i, "ImmutableStateInvariantMiddleware");
        d.measureTime(() => {
          if (c = s(), f = l.detectMutations(), l = a(c), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? T(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const _ = u(p);
        return d.measureTime(() => {
          if (c = s(), f = l.detectMutations(), l = a(c), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? T(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), d.warnIfExceeded(), _;
      };
    };
  }
}
function Gr(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || ze(e);
}
function Pt(e, t = "", n = Gr, r, o = [], i) {
  let a;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e))
    return !1;
  const s = r != null ? r(e) : Object.entries(e), c = o.length > 0;
  for (const [l, f] of s) {
    const u = t ? t + "." + l : l;
    if (!(c && o.some((d) => d instanceof RegExp ? d.test(u) : u === d))) {
      if (!n(f))
        return {
          keyPath: u,
          value: f
        };
      if (typeof f == "object" && (a = Pt(f, u, n, r, o, i), a))
        return a;
    }
  }
  return i && Yr(e) && i.add(e), !1;
}
function Yr(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Yr(t))
      return !1;
  return !0;
}
function Wi(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = Gr,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, f = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (u) => (p) => (d) => {
      if (!Ar(d))
        return p(d);
      const _ = p(d), v = Hr(a, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(d.type) !== -1) && v.measureTime(() => {
        const h = Pt(d, "", t, n, o, f);
        if (h) {
          const {
            keyPath: m,
            value: b
          } = h;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, d, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (v.measureTime(() => {
        const h = u.getState(), m = Pt(h, "", t, n, i, f);
        if (m) {
          const {
            keyPath: b,
            value: y
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, y, `
Take a look at the reducer(s) handling this action type: ${d.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), _;
    };
  }
}
function Ke(e) {
  return typeof e == "boolean";
}
var Hi = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let a = new Br();
  if (n && (Ke(n) ? a.push($i) : a.push(Ai(n.extraArgument))), O.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      Ke(r) || (s = r), a.unshift(Ui(s));
    }
    if (o) {
      let s = {};
      Ke(o) || (s = o), a.push(Wi(s));
    }
    if (i) {
      let s = {};
      Ke(i) || (s = i), a.unshift(Fi(s));
    }
  }
  return a;
}, Bi = "RTK_autoBatch", Xr = (e) => (t) => {
  setTimeout(t, e);
}, qi = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xr(10), Ki = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? qi : e.type === "callback" ? e.queueNotification : Xr(e.timeout), l = () => {
    a = !1, i && (i = !1, s.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const u = () => o && f(), p = r.subscribe(u);
      return s.add(f), () => {
        p(), s.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var u;
      try {
        return o = !((u = f == null ? void 0 : f.meta) != null && u[Bi]), i = !o, i && (a || (a = !0, c(l))), r.dispatch(f);
      } finally {
        o = !0;
      }
    }
  });
}, Gi = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Br(e);
  return r && o.push(Ki(typeof r == "object" ? r : void 0)), o;
}, ce = O.NODE_ENV === "production";
function Yi(e) {
  const t = Hi(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (ze(n))
    s = si(n);
  else
    throw new Error(O.NODE_ENV === "production" ? T(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!ce && r && typeof r != "function")
    throw new Error(O.NODE_ENV === "production" ? T(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), !ce && !Array.isArray(c))
      throw new Error(O.NODE_ENV === "production" ? T(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (!ce && c.some((_) => typeof _ != "function"))
    throw new Error(O.NODE_ENV === "production" ? T(4) : "each middleware provided to configureStore must be a function");
  let l = et;
  o && (l = Mi({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ce,
    ...typeof o == "object" && o
  }));
  const f = ai(...c), u = Gi(f);
  if (!ce && a && typeof a != "function")
    throw new Error(O.NODE_ENV === "production" ? T(5) : "`enhancers` field must be a callback");
  let p = typeof a == "function" ? a(u) : u();
  if (!ce && !Array.isArray(p))
    throw new Error(O.NODE_ENV === "production" ? T(6) : "`enhancers` callback must return an array");
  if (!ce && p.some((_) => typeof _ != "function"))
    throw new Error(O.NODE_ENV === "production" ? T(7) : "each enhancer provided to configureStore must be a function");
  !ce && c.length && !p.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const d = l(...p);
  return $r(s, i, d);
}
function Zr(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, a) {
      if (O.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(O.NODE_ENV === "production" ? T(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(O.NODE_ENV === "production" ? T(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(O.NODE_ENV === "production" ? T(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(O.NODE_ENV === "production" ? T(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, o;
    },
    addMatcher(i, a) {
      if (O.NODE_ENV !== "production" && r)
        throw new Error(O.NODE_ENV === "production" ? T(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      if (O.NODE_ENV !== "production" && r)
        throw new Error(O.NODE_ENV === "production" ? T(31) : "`builder.addDefaultCase` can only be called once");
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function Xi(e) {
  return typeof e == "function";
}
function Zi(e, t) {
  if (O.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(O.NODE_ENV === "production" ? T(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, o] = Zr(t), i;
  if (Xi(e))
    i = () => jn(e());
  else {
    const s = jn(e);
    i = () => s;
  }
  function a(s = i(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: f
    }) => f(c)).map(({
      reducer: f
    }) => f)];
    return l.filter((f) => !!f).length === 0 && (l = [o]), l.reduce((f, u) => {
      if (u)
        if (de(f)) {
          const d = u(f, c);
          return d === void 0 ? f : d;
        } else {
          if (ae(f))
            return zr(f, (p) => u(p, c));
          {
            const p = u(f, c);
            if (p === void 0) {
              if (f === null)
                return f;
              throw new Error(O.NODE_ENV === "production" ? T(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return f;
    }, s);
  }
  return a.getInitialState = i, a;
}
var Ji = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Qi = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ji[Math.random() * 64 | 0];
  return t;
}, es = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ts(e, t) {
  return `${e}/${t}`;
}
function ns({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[es];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(O.NODE_ENV === "production" ? T(11) : "`name` is a required option for createSlice");
    typeof process < "u" && O.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof o.reducers == "function" ? o.reducers(os()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(y, g) {
        const E = typeof y == "string" ? y : y.type;
        if (!E)
          throw new Error(O.NODE_ENV === "production" ? T(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(O.NODE_ENV === "production" ? T(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = g, f;
      },
      addMatcher(y, g) {
        return l.sliceMatchers.push({
          matcher: y,
          reducer: g
        }), f;
      },
      exposeAction(y, g) {
        return l.actionCreators[y] = g, f;
      },
      exposeCaseReducer(y, g) {
        return l.sliceCaseReducersByName[y] = g, f;
      }
    };
    c.forEach((y) => {
      const g = s[y], E = {
        reducerName: y,
        type: ts(i, y),
        createNotation: typeof o.reducers == "function"
      };
      ss(g) ? us(E, g, f, t) : is(E, g, f);
    });
    function u() {
      if (O.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(O.NODE_ENV === "production" ? T(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [y = {}, g = [], E = void 0] = typeof o.extraReducers == "function" ? Zr(o.extraReducers) : [o.extraReducers], w = {
        ...y,
        ...l.sliceCaseReducersByType
      };
      return Zi(o.initialState, (S) => {
        for (let C in w)
          S.addCase(C, w[C]);
        for (let C of l.sliceMatchers)
          S.addMatcher(C.matcher, C.reducer);
        for (let C of g)
          S.addMatcher(C.matcher, C.reducer);
        E && S.addDefaultCase(E);
      });
    }
    const p = (y) => y, d = /* @__PURE__ */ new Map();
    let _;
    function v(y, g) {
      return _ || (_ = u()), _(y, g);
    }
    function h() {
      return _ || (_ = u()), _.getInitialState();
    }
    function m(y, g = !1) {
      function E(S) {
        let C = S[y];
        if (typeof C > "u") {
          if (g)
            C = h();
          else if (O.NODE_ENV !== "production")
            throw new Error(O.NODE_ENV === "production" ? T(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return C;
      }
      function w(S = p) {
        const C = Fn(d, g, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Fn(C, S, {
          insert: () => {
            const D = {};
            for (const [A, z] of Object.entries(o.selectors ?? {}))
              D[A] = rs(z, S, h, g);
            return D;
          }
        });
      }
      return {
        reducerPath: y,
        getSelectors: w,
        get selectors() {
          return w(E);
        },
        selectSlice: E
      };
    }
    const b = {
      name: i,
      reducer: v,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...m(a),
      injectInto(y, {
        reducerPath: g,
        ...E
      } = {}) {
        const w = g ?? a;
        return y.inject({
          reducerPath: w,
          reducer: v
        }, E), {
          ...b,
          ...m(w, !0)
        };
      }
    };
    return b;
  };
}
function rs(e, t, n, r) {
  function o(i, ...a) {
    let s = t(i);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (O.NODE_ENV !== "production")
        throw new Error(O.NODE_ENV === "production" ? T(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return o.unwrapped = e, o;
}
var Jr = /* @__PURE__ */ ns();
function os() {
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
function is({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, a;
  if ("reducer" in r) {
    if (n && !as(r))
      throw new Error(O.NODE_ENV === "production" ? T(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = r.reducer, a = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? Oe(e, a) : Oe(e));
}
function ss(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function as(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function us({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(O.NODE_ENV === "production" ? T(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: f
  } = n, u = o(e, i, f);
  r.exposeAction(t, u), a && r.addCase(u.fulfilled, a), s && r.addCase(u.pending, s), c && r.addCase(u.rejected, c), l && r.addMatcher(u.settled, l), r.exposeCaseReducer(t, {
    fulfilled: a || Ge,
    pending: s || Ge,
    rejected: c || Ge,
    settled: l || Ge
  });
}
function Ge() {
}
var cs = (e, t) => {
  if (typeof e != "function")
    throw new Error(O.NODE_ENV === "production" ? T(32) : `${t} is not a function`);
}, Jt = "listenerMiddleware", ls = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Oe(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(O.NODE_ENV === "production" ? T(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return cs(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, fs = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = ls(e);
  return {
    id: Qi(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(O.NODE_ENV === "production" ? T(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => fs
}), ds = Object.assign(Oe(`${Jt}/add`), {
  withTypes: () => ds
});
Oe(`${Jt}/removeAll`);
var ps = Object.assign(Oe(`${Jt}/remove`), {
  withTypes: () => ps
});
function T(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const _s = [], Qr = Jr({
  name: "fields",
  initialState: _s,
  reducers: {
    registerForm: (e, t) => {
      const {
        formInstance: n,
        formId: r,
        formCategory: o,
        formTeam: i,
        buttonClasses: a
      } = t.payload;
      e[n] = {
        fields: {},
        meta: {
          formId: +r,
          formCategory: o,
          formTeam: i,
          isLoading: !1,
          isSubmitting: !1,
          isValid: !0,
          isInteracted: !1,
          step: 1,
          buttonClasses: a
        }
      };
    },
    registerField: (e, t) => {
      const {
        formInstance: n,
        name: r,
        value: o,
        defaultValue: i,
        validationRules: a,
        visibilityConditions: s
      } = t.payload;
      e[n].fields[r] = {
        ...e[n].fields[r],
        value: o,
        defaultValue: i,
        validationRules: a,
        visibilityConditions: s
      };
    },
    resetField: (e, t) => {
      const {
        formInstance: n,
        name: r
      } = t.payload;
      e[n].fields[r] = {
        ...e[n].fields[r],
        value: "",
        errors: []
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
      }, e[n].meta.isInteracted = !0;
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
      e[n].meta[r] = o, e[n].meta.isInteracted = !0;
    }
  }
}), {
  registerForm: hs,
  registerField: ms,
  resetField: ys,
  updateField: te,
  updateFieldErrors: Et,
  updateMeta: be
} = Qr.actions, vs = Qr.reducer, bs = (e) => (t) => t.forms[e], gs = (e) => (t) => t.forms[e].meta.step, ft = (e) => (t) => t.forms[e].fields, dt = (e, t) => (n) => n.forms[e].fields[t], pt = (e) => (t) => t.forms[e].meta, ws = (e) => (t) => t.forms[e].meta.isInteracted, Es = {
  environment: "production",
  translations: {}
}, eo = Jr({
  name: "misc",
  initialState: Es,
  reducers: {
    registerTranslations: (e, t) => {
      const {
        translations: n
      } = t.payload;
      e.translations = {
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
  registerTranslations: Ns,
  setEnvironment: Ss
} = eo.actions, Cs = eo.reducer, Os = () => (e) => e.misc.translations, ks = () => (e) => e.misc.translations.errors;
function xs(e, t) {
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
function to(e) {
  return ["text", "number", "email", "phone", "checkbox", "radio", "hidden"].includes(e.subType);
}
function Ds() {
  const e = xe({}), t = (n, r, o) => {
    var i;
    to(n) && (o(ms({
      formInstance: r,
      name: n.name,
      value: n.defaultValue,
      defaultValue: n.defaultValue,
      validationRules: n.validationRules,
      visibilityConditions: n.visibilityConditions
    })), e.current[n.name] = Le.createRef()), (i = n.nodes) == null || i.forEach((a) => t(a, r, o));
  };
  return {
    fieldRefs: e,
    registerNode: t
  };
}
function Qt(e, t = [], n) {
  const r = ue(), o = P(ft(e)), i = {
    resetField: ({
      mapping: s
    }) => {
      const c = Object.keys(s)[0];
      return r(ys({
        formInstance: e,
        name: c
      })), !0;
    },
    updateField: ({
      mapping: s
    }) => {
      const c = Object.keys(s)[0], l = s[c];
      return r(te({
        formInstance: e,
        name: c,
        value: l
      })), !0;
    },
    updateMeta: ({
      mapping: s
    }) => {
      const c = Object.keys(s)[0], l = s[c];
      return r(be({
        formInstance: e,
        name: c,
        value: l
      })), !0;
    },
    submit: (s) => !0,
    validate: (s) => {
      Object.values(n.current).forEach((l) => {
        var f, u;
        (u = (f = l.current) == null ? void 0 : f.validate) == null || u.call(f);
      });
      let c = !0;
      for (const l in o)
        if (o.hasOwnProperty(l)) {
          const f = o[l];
          f.errors && f.errors.length > 0 && (console.log("validation failed", f), c = !1);
        }
      return c && r(be({
        formInstance: e,
        name: "isValid",
        value: !0
      })), c;
    }
  }, a = X((s, c) => {
    const l = t.filter((f) => f.type === s);
    l.length > 0 && l.every((f) => {
      const u = i[f.name];
      return u({
        event: c,
        formInstance: e,
        mapping: f.mapping
      });
    });
  }, [t, e]);
  return {
    onClick: (s) => a("onClick", s),
    onBlur: (s) => a("onBlur", s),
    onChange: (s) => a("onChange", s)
  };
}
var Ts = 0;
function N(e, t, n, r, o, i) {
  var a, s, c = {};
  for (s in t)
    s == "ref" ? a = t[s] : c[s] = t[s];
  var l = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ts, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      c[s] === void 0 && (c[s] = a[s]);
  return x.vnode && x.vnode(l), l;
}
function Rs(e) {
  const {
    formInstance: t,
    name: n,
    label: r,
    type: o,
    events: i,
    fieldrefs: a,
    disabled: s = !1
  } = e, c = P(pt(t)), {
    isLoading: l,
    isValid: f,
    buttonClasses: u
  } = c, {
    onClick: p
  } = Qt(t, i, a), d = X((h) => {
    p(h);
  }, []), _ = k(["button-container", "button-container--" + n]);
  let v = k(["button", "button--" + n, "button--" + (e.buttonType || "primary")]);
  return u !== "" && (v = v + " " + u), N("div", {
    className: _,
    children: N("button", {
      type: o,
      className: v,
      onClick: d,
      disabled: s || f === !1 || l === !0,
      children: r
    }, n)
  });
}
const $s = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: a,
    defaultValue: s,
    helpText: c,
    alias: l,
    disabled: f = !1
  } = t, u = P(ft(r)), p = ue(), d = l || o, _ = (m, b) => {
    const y = m.target.checked ? b : null;
    p(te({
      formInstance: r,
      name: d,
      value: y
    }));
  }, v = k(["input", "input-checkbox", "input-checkbox--" + o]), h = k(["input--option"]);
  return N("div", {
    className: v,
    children: a ? a.map((m) => N("label", {
      className: h,
      ref: n,
      children: [N("input", {
        name: o,
        type: "checkbox",
        value: m.value,
        checked: u[d].value == m.value,
        onChange: (b) => _(b, m.value)
      }), N("span", {
        className: k(["input--label"]),
        children: m.label
      })]
    }, o + m.value)) : N("label", {
      className: h,
      children: [N("input", {
        name: o,
        type: "checkbox",
        value: "true",
        checked: !!u[d].value,
        onChange: (m) => _(m, !0),
        ref: n
      }, o), N("span", {
        className: k(["input--label"]),
        tabIndex: 0,
        children: i
      })]
    })
  });
});
var As = "Expected a function", Ln = NaN, Is = "[object Symbol]", Ms = /^\s+|\s+$/g, Vs = /^[-+]0x[0-9a-f]+$/i, Ps = /^0b[01]+$/i, js = /^0o[0-7]+$/i, Fs = parseInt, Ls = typeof Be == "object" && Be && Be.Object === Object && Be, zs = typeof self == "object" && self && self.Object === Object && self, Us = Ls || zs || Function("return this")(), Ws = Object.prototype, Hs = Ws.toString, Bs = Math.max, qs = Math.min, Nt = function() {
  return Us.Date.now();
};
function Ks(e, t, n) {
  var r, o, i, a, s, c, l = 0, f = !1, u = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(As);
  t = zn(t) || 0, jt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? Bs(zn(n.maxWait) || 0, t) : i, p = "trailing" in n ? !!n.trailing : p);
  function d(w) {
    var S = r, C = o;
    return r = o = void 0, l = w, a = e.apply(C, S), a;
  }
  function _(w) {
    return l = w, s = setTimeout(m, t), f ? d(w) : a;
  }
  function v(w) {
    var S = w - c, C = w - l, D = t - S;
    return u ? qs(D, i - C) : D;
  }
  function h(w) {
    var S = w - c, C = w - l;
    return c === void 0 || S >= t || S < 0 || u && C >= i;
  }
  function m() {
    var w = Nt();
    if (h(w))
      return b(w);
    s = setTimeout(m, v(w));
  }
  function b(w) {
    return s = void 0, p && r ? d(w) : (r = o = void 0, a);
  }
  function y() {
    s !== void 0 && clearTimeout(s), l = 0, r = c = o = s = void 0;
  }
  function g() {
    return s === void 0 ? a : b(Nt());
  }
  function E() {
    var w = Nt(), S = h(w);
    if (r = arguments, o = this, c = w, S) {
      if (s === void 0)
        return _(c);
      if (u)
        return s = setTimeout(m, t), d(c);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return E.cancel = y, E.flush = g, E;
}
function jt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Gs(e) {
  return !!e && typeof e == "object";
}
function Ys(e) {
  return typeof e == "symbol" || Gs(e) && Hs.call(e) == Is;
}
function zn(e) {
  if (typeof e == "number")
    return e;
  if (Ys(e))
    return Ln;
  if (jt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = jt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ms, "");
  var n = Ps.test(e);
  return n || js.test(e) ? Fs(e.slice(2), n ? 2 : 8) : Vs.test(e) ? Ln : +e;
}
var Xs = Ks;
const ke = /* @__PURE__ */ Ro(Xs), Zs = (e, t) => {
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
}, Js = (e, t) => {
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
}, Qs = (e, t) => typeof t == "string", ea = (e, t) => {
  if (typeof t == "number")
    return !0;
  if (typeof t == "string") {
    const n = t.trim();
    if (n === "")
      return !1;
    const r = Number(n);
    return Number.isFinite(r) || !isNaN(r);
  }
  return !1;
}, ta = (e, t) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t), na = (e, t) => t != null && t.trim() !== "", ra = {
  min: Zs,
  max: Js,
  string: Qs,
  numeric: ea,
  required: na,
  email: ta,
  // TODO: Implement this.
  nullable: () => !0
};
function en(e, t, n, r) {
  const o = P(ks()), i = P(dt(e, t)), a = ue();
  return {
    setValidateField: (c) => {
      if (!r || r.length === 0)
        return;
      if (r[0].startsWith("nullable") && (c == null || c === "")) {
        a(Et({
          formInstance: e,
          name: t,
          errors: []
        })), a(be({
          formInstance: e,
          name: "isValid",
          value: !0
        }));
        return;
      }
      let l = [];
      for (const f of r) {
        const u = f.split(":"), p = ra[u[0]];
        if (!p) {
          console.error(`Validator not found for rule: ${f}`);
          continue;
        }
        if (u[0] === "nullable" && (c == null || c === ""))
          break;
        const d = p(f, c);
        if (console.log("Validator", i, f, c, d ? "true" : "false"), !d && o[u[0]]) {
          let _ = o[u[0]];
          _.includes(":attribute") && (_ = _.replace(":attribute", n)), _.includes(":max") && (_ = _.replace(":max", u[1])), _.includes(":min") && (_ = _.replace(":min", u[1])), l.push(_);
        }
      }
      l.length > 0 ? (a(Et({
        formInstance: e,
        name: t,
        errors: l
      })), a(be({
        formInstance: e,
        name: "isValid",
        value: !1
      }))) : (a(Et({
        formInstance: e,
        name: t,
        errors: []
      })), a(be({
        formInstance: e,
        name: "isValid",
        value: !0
      })));
    }
  };
}
const oa = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: a,
    visibilityConditions: s,
    validationRules: c,
    allowMultiple: l,
    helpText: f,
    emailTag: u,
    storeAsDonorMeta: p,
    showInReceipt: d,
    type: _,
    subType: v,
    childNodes: h,
    disabled: m = !1,
    ...b
  } = t, [y, g] = pe((F, re) => ({
    ...F,
    ...re
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: E,
    isInvalid: w
  } = y, S = P(dt(r, o)), C = ue(), D = S.errors, A = P(pt(r)), {
    isLoading: z
  } = A, {
    setValidateField: M
  } = en(r, o, i, c);
  W(() => () => {
    n.current = null;
  }, []), je(n, () => ({
    validate() {
      M(S.value);
    }
  }), [S]);
  const Z = X(ke((F) => {
    C(te({
      formInstance: r,
      name: o,
      value: F.target.value
    }));
    let re = F.target.value.length > 0;
    M(F.target.value), g({
      isActive: re
    });
  }, 300), [C, r, o, M, g]), J = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + v]), Q = k(["input", "input--" + o, "input-type--" + v, E && "input--active", D && D.length > 0 && "input--invalid"]), ee = k(["input--field"]);
  return N("div", {
    className: J,
    "aria-live": "polite",
    children: [N("label", {
      className: Q,
      children: [i && N("span", {
        className: k(["input--label"]),
        children: i
      }), N("input", {
        type: "email",
        name: o,
        className: ee,
        disabled: m || z === !0,
        autoComplete: "email",
        ...b,
        onChange: Z,
        ref: n
      })]
    }), D && D.length !== 0 && N(j, {
      children: D.map((F, re) => N("div", {
        className: k(["input--error"]),
        children: F
      }, re))
    })]
  });
});
function ia({
  name: e,
  childNodes: t,
  legend: n
}) {
  const r = k(["fieldset", "fieldset-" + e]);
  return N("fieldset", {
    className: r,
    children: [n && N("legend", {
      children: n
    }), t]
  });
}
const sa = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: a,
    visibilityConditions: s,
    validationRules: c,
    helpText: l,
    emailTag: f,
    storeAsDonorMeta: u,
    showInReceipt: p,
    type: d,
    subType: _,
    childNodes: v,
    disabled: h = !1,
    ...m
  } = t, b = P(ft(r)), y = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + _]), g = k(["input", "input--" + o, "input-type--" + _]), E = k(["input--field"]);
  return N("div", {
    className: y,
    children: N("div", {
      className: g,
      children: N("input", {
        name: o,
        type: "hidden",
        className: E,
        ...m,
        value: b[o].value,
        ref: n
      })
    })
  });
});
function aa(e) {
  const {
    formInstance: t,
    html: n,
    name: r,
    label: o,
    defaultValue: i,
    visibilityConditions: a,
    helpText: s,
    customClasses: c,
    storeAsDonorMeta: l,
    showInReceipt: f,
    type: u,
    subType: p,
    childNodes: d,
    disabled: _ = !1,
    ...v
  } = e, h = k(["html", ...Array.isArray(c) ? c : []]);
  return N("div", {
    className: k(["html_wrapper"]),
    children: N("div", {
      className: h,
      dangerouslySetInnerHTML: {
        __html: n
      }
    })
  });
}
const ua = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: a,
    inputMode: s,
    pattern: c,
    visibilityConditions: l,
    validationRules: f,
    helpText: u,
    emailTag: p,
    events: d,
    fieldrefs: _,
    alias: v,
    storeAsDonorMeta: h,
    showInReceipt: m,
    type: b,
    subType: y,
    childNodes: g,
    disabled: E = !1,
    ...w
  } = t, [S, C] = pe((G, he) => ({
    ...G,
    ...he
  }), {
    isActive: !1
  }), {
    isActive: D
  } = S, A = P(dt(r, o)), z = ue(), M = A.errors, Z = P(pt(r)), {
    isLoading: J
  } = Z, {
    setValidateField: Q
  } = en(r, o, i, f);
  W(() => () => {
    n.current = null;
  }, []), je(n, () => ({
    validate() {
      Q(n.current.value);
    },
    focus() {
      n.current.focus();
    },
    scrollIntoView() {
      n.current.scrollIntoView();
    }
  }), []);
  const {
    onClick: ee,
    onBlur: F,
    onChange: re
  } = Qt(r, d, _), _t = X((G) => {
    ee(G);
  }, []), K = X(ke((G) => {
    const he = s && s === "numeric" ? isNaN(Number(G.target.value)) ? "" : Number(G.target.value) : G.target.value;
    z(te({
      formInstance: r,
      name: o,
      value: he
    })), z(te({
      formInstance: r,
      name: v,
      value: he
    }));
    let tn = !1;
    G.target.value.length > 0 && (tn = !0), Q(he), C({
      isActive: tn
    }), re(G);
  }, 300), [z, r, o, s, Q, C]), q = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + y]), We = k(["input", "input--" + o, "input-type--" + y, D && "input--active", M && M.length > 0 && "input--invalid"]), oo = k(["input--field"]);
  return N("div", {
    className: q,
    "aria-live": "polite",
    children: [N("label", {
      className: We,
      children: [i && N("span", {
        className: k(["input--label"]),
        children: i
      }), N("input", {
        type: "text",
        name: o,
        className: oo,
        disabled: E || J === !0,
        ...w,
        value: A.value,
        onChange: K,
        onClick: _t,
        inputMode: s,
        pattern: c,
        ref: n
      })]
    }), M && M.length !== 0 && N(j, {
      children: M.map((G, he) => N("div", {
        className: k(["input--error"]),
        children: G
      }, he))
    })]
  });
}), Ft = Yi({
  reducer: {
    misc: Cs,
    forms: vs
  }
});
function ca(e, t) {
  return new CustomEvent(e, {
    detail: t
  });
}
function la(e, t) {
  return e.dispatchEvent(t);
}
function fa(e) {
  switch (e) {
    case "local":
      return "http://localhost:9051/event";
    case "staging":
    case "stage":
    case "development":
    case "develop":
      return "https://fundy-stage-be.do.dekodes.no:9051/event";
    case "production":
    default:
      return "https://fundy-prod.do.dekodes.no/event";
  }
}
function da(e) {
  const t = fa(e);
  let n = !1;
  return (o, i, a) => {
    const s = ca(o, {
      detail: {
        form_id: a.formId,
        form_instance: a.formInstance
      }
    });
    n = la(document, s), n || console.error("Failed to dispatch onpage event: ", o, i), n = navigator.sendBeacon(t, JSON.stringify(i)), n || console.error("Failed to send analytics event: ", o, i);
  };
}
function no(e) {
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
function pa() {
  return window.location.protocol + "//" + window.location.hostname + window.location.pathname;
}
function _a({
  childNodes: e,
  formInstance: t,
  fieldrefs: n
}) {
  const r = ue(), i = Ft.getState().forms[t].fields, a = Ft.getState().misc.environment, s = P(pt(t)), c = P(ws(t)), l = P(Os()), f = da(a), u = pa(), p = xe(null);
  W(() => {
    if (c === !0) {
      const h = {
        name: "formInteracted",
        page_url: u,
        form_id: s.formId,
        form_instance: t
      };
      f(h.name, h, s);
    }
  }, [c]), W(() => {
    const h = {
      name: "formLoaded",
      page_url: u,
      form_id: s.formId,
      form_instance: t
    };
    if (f(h.name, h, s), p.current) {
      const m = p.current.closest(".fundraising-form-wrapper");
      if (m)
        return s.step > 1 ? m.classList.add("fundraising-form-wrapper--stepped") : m.classList.remove("fundraising-form-wrapper--stepped"), () => {
          m.classList.remove("fundraising-form-wrapper--stepped");
        };
    }
  }, [p, s.step]), W(() => {
    const h = new IntersectionObserver((b) => {
      b.forEach((y) => {
        if (y.isIntersecting) {
          const g = {
            name: "formViewed",
            page_url: u,
            form_id: s.formId,
            form_instance: t
          };
          f(g.name, g, s), h.unobserve(y.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }), m = p.current;
    return m && h.observe(m), () => {
      m && h.unobserve(m);
    };
  }, []);
  const d = X((h) => {
    h.preventDefault(), ke(() => {
      let y = !0;
      const g = {
        form_id: s.formId,
        payment_method: s.payment_method
      };
      Object.values(n.current).forEach((E) => {
        var w, S;
        (S = (w = E.current) == null ? void 0 : w.validate) == null || S.call(w);
      });
      for (const E in i)
        if (i.hasOwnProperty(E)) {
          const w = i[E];
          w.value && (g[E] = w.value), w.errors && w.errors.length > 0 && (y = !1), w.validationRules && w.validationRules.indexOf("required") !== -1 && !w.value && (y = !1);
        }
      y && (r(be({
        formInstance: t,
        name: "isLoading",
        value: !0
      })), _(g).then((E) => {
        const w = {
          name: "formSubmitted",
          page_url: u,
          form_id: s.formId,
          form_instance: t
        };
        f(w.name, w, s), E.url && (window.location.href = E.url);
      }).catch((E) => {
        r(be({
          formInstance: t,
          name: "isLoading",
          value: !1
        })), console.error(E);
      }));
    }, 300)();
  }, [n, i, s.formId, s.payment_method, r, t]);
  async function _(h) {
    return await (await fetch(no(a) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(h)
    })).json();
  }
  const v = k(["form", "form_instance--" + t, (s == null ? void 0 : s.formId) && "form_id--" + s.formId, (s == null ? void 0 : s.formCategory) && "form_category--" + s.formCategory, (s == null ? void 0 : s.formTeam) && "form_team--" + s.formTeam]);
  return N("form", {
    ref: p,
    className: v,
    onSubmit: d,
    noValidate: !0,
    children: [e, N("div", {
      className: k(["form_notifications"]),
      "aria-live": "polite",
      "aria-atomic": "false",
      children: (s == null ? void 0 : s.step) === 2 && (s == null ? void 0 : s.isValid) === !1 && N("div", {
        className: k(["form_validation__error"]),
        children: l.validation_failed
      })
    })]
  });
}
function ha({
  childNodes: e,
  name: t
}) {
  const n = k(["group", "group--" + t]);
  return N("div", {
    className: n,
    children: e
  });
}
const ma = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: a,
    visibilityConditions: s,
    validationRules: c,
    helpText: l,
    emailTag: f,
    alias: u,
    storeAsDonorMeta: p,
    showInReceipt: d,
    type: _,
    subType: v,
    events: h,
    childNodes: m,
    disabled: b = !1,
    ...y
  } = t, [g, E] = pe((K, q) => ({
    ...K,
    ...q
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: w,
    isInvalid: S
  } = g, C = P(dt(r, o)), D = ue(), A = C.errors, {
    setValidateField: z
  } = en(r, o, i, c);
  W(() => () => {
    n.current = null;
  }, []), je(n, () => ({
    validate() {
      z(C.value);
    }
  }), [C]);
  const M = X(ke((K) => {
    let q = Number(K.target.value);
    q === 0 && (q = ""), D(te({
      formInstance: r,
      name: o,
      value: q
    })), u && D(te({
      formInstance: r,
      name: u,
      value: q
    }));
    let We = !1;
    q && (We = !0), z(q), E({
      isActive: We
    });
  }, 300), [D, r, o, z, E]), Z = c.find((K) => K.startsWith("min:")), J = Z ? Number(Z.split(":")[1]) : void 0, Q = c.find((K) => K.startsWith("max:")), ee = Q ? Number(Q.split(":")[1]) : void 0, F = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + v]), re = k(["input", "input--" + o, "input-type--" + v, w && "input--active", A && A.length > 0 && "input--invalid"]), _t = k(["input--field"]);
  return N("div", {
    className: F,
    "aria-live": "polite",
    children: [N("label", {
      className: re,
      children: [i && N("span", {
        className: k(["input--label"]),
        children: i
      }), N("input", {
        type: "number",
        name: o,
        className: _t,
        disabled: b,
        ...y,
        value: C.value,
        onChange: M,
        ref: n,
        ...J !== void 0 && {
          min: J
        },
        ...ee !== void 0 && {
          max: ee
        }
      })]
    }), A && A.length !== 0 && N(j, {
      children: A.map((K, q) => N("div", {
        className: k(["input--error"]),
        children: K
      }, q))
    })]
  });
}), ya = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: a,
    defaultValue: s,
    helpText: c,
    events: l,
    fieldrefs: f,
    alias: u,
    disabled: p = !1
  } = t, d = P(ft(r)), _ = ue(), {
    onClick: v,
    onBlur: h,
    onChange: m
  } = Qt(r, l, f), b = u || o;
  W(() => {
    u === "amount" && a !== null && !a.some((S) => S.value == d[b].value) && (_(te({
      formInstance: r,
      name: o,
      value: s
    })), u && _(te({
      formInstance: r,
      name: u,
      value: s
    })));
  }, [d.frequency.value, a]);
  const y = X(ke((S) => {
    v(S);
  }, 300), [_, r, o]), g = X(ke((S, C) => {
    _(te({
      formInstance: r,
      name: b,
      value: C
    })), m(S);
  }, 300), [_, r, o]), E = k(["input", "input-radio", "input-radio--" + o]), w = k(["input--option"]);
  return N("div", {
    className: E,
    children: a ? a.map((S) => N("label", {
      className: w,
      ref: n,
      children: [N("input", {
        name: o,
        type: "radio",
        value: S.value,
        checked: d[b].value == S.value,
        onChange: (C) => g(C, S.value),
        onClick: (C) => y(C)
      }), N("span", {
        className: k(["input--label"]),
        children: S.label
      })]
    }, o + S.value)) : N("label", {
      className: w,
      children: [N("input", {
        name: o,
        type: "radio",
        value: "true",
        checked: !!d[b].value,
        onChange: (S) => g(S, !0),
        ref: n
      }, o), N("span", {
        className: k(["input--label"]),
        tabIndex: 0,
        children: i
      })]
    })
  });
});
function va({
  childNodes: e
}) {
  const t = k(["section"]);
  return N("div", {
    className: t,
    children: e
  });
}
function ba({
  formInstance: e,
  childNodes: t
}) {
  const n = P(gs(e)), r = k(["steps"]), o = n > 0 && n <= t.length ? t[n - 1] : null, i = o ? Le.cloneElement(o, {
    instance: n
  }) : null;
  return N("div", {
    className: r,
    children: i
  });
}
function ga({
  childNodes: e,
  instance: t
}) {
  const n = xe(null);
  W(() => {
    if (t !== 1 && n.current) {
      const o = n.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      o && o.focus();
    }
  }, [t]);
  const r = k(["step", "step-" + t]);
  return N("div", {
    ref: n,
    className: r,
    children: e
  });
}
const wa = (e = "en") => {
  switch (e) {
    case "no":
      return {
        loading: "Laster...",
        cancel: "Avbryt",
        retry: "Prøv på nytt",
        delayed: "Det tar lengre tid enn vanlig å laste inn skjemaet. Den laster fortsatt, men du kan avbryte og/eller prøve på nytt.",
        failed: "Kunne ikke hente skjemaet. Prøv igjen."
      };
    default:
      return {
        loading: "Loading...",
        cancel: "Cancel",
        retry: "Retry",
        delayed: "Loading the form is taking longer than usual. It is still loading but you can cancel and/or retry.",
        failed: "Failed to fetch the form, please try again."
      };
  }
};
function Ea({
  formId: e,
  env: t,
  locale: n,
  setAppState: r
}) {
  const [o, i] = pe((d, _) => ({
    ...d,
    ..._
  }), {
    isLoading: !0,
    isDelayed: !1,
    error: null
  }), {
    isLoading: a,
    isDelayed: s,
    error: c
  } = o, l = wa(n), f = xe(null);
  async function u(d, _) {
    f.current = new AbortController(), setTimeout(() => {
      i({
        isDelayed: !0
      });
    }, 2e3), fetch(no(_) + "/api/v1/form/config/" + d + "?locale=" + n, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      signal: f.current.signal
    }).then((v) => v.json()).then((v) => {
      r({
        isLoading: !1,
        formCategory: v.campaign,
        formTeam: v.team,
        config: JSON.parse(v.config),
        translations: v.translations
      }), i({
        isLoading: !1,
        error: null
      });
    }).catch((v) => {
      i({
        isLoading: !1,
        isDelayed: !1,
        error: v
      });
    });
  }
  const p = () => {
    i({
      isLoading: !0,
      isDelayed: !1,
      error: null
    }), u(e, t);
  };
  return W(() => {
    e && p();
  }, [r]), N("div", {
    className: k(["loader-container"]),
    children: N("div", {
      className: k(["loader", "loader-" + status]),
      children: [l.loading, s && N(j, {
        children: [N("p", {
          children: l.delayed
        }), N("button", {
          onClick: () => f.current.abort(),
          children: l.cancel
        }), N("button", {
          onClick: () => p(),
          children: l.retry
        })]
      }), c && N(j, {
        children: [N("p", {
          children: l.failed
        }), N("button", {
          onClick: () => p(),
          children: l.retry
        })]
      })]
    })
  });
}
const Na = {
  button: Rs,
  checkbox: $s,
  email: oa,
  fieldset: ia,
  hidden: sa,
  html: aa,
  text: ua,
  group: ha,
  number: ma,
  radio: ya,
  section: va,
  steps: ba,
  step: ga,
  form: _a
};
function Sa({
  formInstance: e,
  formId: t,
  env: n = "production",
  locale: r = "en",
  buttonClasses: o = ""
}) {
  const i = P(bs(e)), a = ue(), [s, c] = pe((y, g) => ({
    ...y,
    ...g
  }), {
    isLoading: !0,
    isInitialized: !1,
    formId: 0,
    formCategory: "",
    formTeam: "",
    config: null,
    translations: null,
    error: null
  }), {
    isLoading: l,
    isInitialized: f,
    formCategory: u,
    formTeam: p,
    config: d,
    translations: _,
    error: v
  } = s, {
    fieldRefs: h,
    registerNode: m
  } = Ds();
  if (W(() => {
    a(hs({
      formInstance: e,
      formId: t,
      formCategory: u,
      formTeam: p,
      step: 0,
      buttonClasses: o
    })), a(Ss({
      env: n
    })), _ && a(Ns({
      translations: _
    })), l === !1 && f === !1 && (m(d, e, a), c({
      isInitialized: !0
    }));
  }, [e, l]), l === !0)
    return N(Ea, {
      formId: t,
      env: n,
      locale: r,
      setAppState: c
    });
  const b = (y, g) => {
    let E = null;
    if (E = Na[y.subType], !E || !xs(i.fields, y.visibilityConditions))
      return null;
    const w = y.nodes ? y.nodes.map((C) => b(C, g)) : null, S = to(y) ? h.current[y.name] : null;
    return N(E, {
      formInstance: g,
      ref: S,
      childNodes: w,
      fieldrefs: h,
      ...y
    }, y.name);
  };
  return i === void 0 ? null : l || f === !1 ? N("div", {
    className: k(["loading"]),
    children: N("div", {
      className: k(["loading__message"]),
      children: "Loading..."
    })
  }) : N(j, {
    children: b(d, e)
  });
}
let Ca = 0;
function Oa() {
  return Ca++;
}
const ro = (e, t, n) => {
  if (e.nodeType === 3) {
    const r = e.nodeValue.match(t);
    if (r) {
      const o = n(r);
      e.parentNode.replaceChild(o, e);
    }
  } else
    e.childNodes.forEach((r) => ro(r, t, n));
}, ka = /\[fundraising-form(?: id="(\d+)")?(?: env="(\w+)")?(?: locale="(\w+)")?\]/, xa = (e) => {
  const t = document.createElement("div");
  return t.className = "fundraising-form", t.setAttribute("data-form-id", e[1]), t.setAttribute("data-env", e[2]), t;
};
ro(document.body, ka, xa);
for (const e of document.getElementsByClassName("fundraising-form")) {
  const t = Oa(), n = parseInt(e.getAttribute("data-form-id") ?? "0", 10) ?? 0, r = e.getAttribute("data-env") ?? "production", o = e.getAttribute("data-locale") ?? "en", i = e.getAttribute("data-button-classes") ?? "";
  To.createRoot(e).render(N(Le.StrictMode, {
    children: N(Yo, {
      store: Ft,
      children: N(Sa, {
        formInstance: t,
        formId: n,
        env: r,
        locale: o,
        buttonClasses: i
      })
    })
  }));
}
