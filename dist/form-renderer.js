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
  var r, o, i, s = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Te(e, s, r, o, null);
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
  var e, t, n, r, o, i, s, a, u;
  for (ye.sort(St); e = ye.shift(); )
    e.__d && (t = ye.length, r = void 0, i = (o = (n = e).__v).__e, a = [], u = [], (s = n.__P) && ((r = oe({}, o)).__v = o.__v + 1, x.vnode && x.vnode(r), Lt(s, r, o, n.__n, s.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, a, i ?? Ne(o), !!(32 & o.__u), u), r.__v = o.__v, r.__.__k[r.__i] = r, Zn(a, r, u), r.__e != i && Gn(r)), ye.length > t && ye.sort(St));
  Ze.__r = 0;
}
function Yn(e, t, n, r, o, i, s, a, u, l, f) {
  var c, p, d, _, y, h = r && r.__k || Bn, m = t.length;
  for (n.__d = u, so(n, t, h), u = n.__d, c = 0; c < m; c++)
    (d = n.__k[c]) != null && typeof d != "boolean" && typeof d != "function" && (p = d.__i === -1 ? $e : h[d.__i] || $e, d.__i = c, Lt(e, d, p, o, i, s, a, u, l, f), _ = d.__e, d.ref && p.ref != d.ref && (p.ref && zt(p.ref, null, d), f.push(d.ref, d.__c || _, d)), y == null && _ != null && (y = _), 65536 & d.__u || p.__k === d.__k ? u = Xn(d, u, e) : typeof d.type == "function" && d.__d !== void 0 ? u = d.__d : _ && (u = _.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = u, n.__e = y;
}
function so(e, t, n) {
  var r, o, i, s, a, u = t.length, l = n.length, f = l, c = 0;
  for (e.__k = [], r = 0; r < u; r++)
    s = r + c, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Te(null, o, null, null, null) : ot(o) ? Te(j, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Te(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = ao(o, n, s, f), o.__i = a, i = null, a !== -1 && (f--, (i = n[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a === s + 1 ? c++ : a > s ? f > u - s ? c += a - s : c-- : a < s ? a == s - 1 && (c = a - s) : c = 0, a !== r + c && (o.__u |= 65536))) : (i = n[s]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Ne(i)), Ot(i, i, !1), n[s] = null, f--);
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
  var o = e.key, i = e.type, s = n - 1, a = n + 1, u = t[n];
  if (u === null || u && o == u.key && i === u.type && !(131072 & u.__u))
    return n;
  if (r > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; s >= 0 || a < t.length; ) {
      if (s >= 0) {
        if ((u = t[s]) && !(131072 & u.__u) && o == u.key && i === u.type)
          return s;
        s--;
      }
      if (a < t.length) {
        if ((u = t[a]) && !(131072 & u.__u) && o == u.key && i === u.type)
          return a;
        a++;
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
function Lt(e, t, n, r, o, i, s, a, u, l) {
  var f, c, p, d, _, y, h, m, w, v, b, E, g, N, C, D = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [a = t.__e = n.__e]), (f = x.__b) && f(t);
  e:
    if (typeof D == "function")
      try {
        if (m = t.props, w = (f = D.contextType) && r[f.__c], v = f ? w ? w.props.value : f.__ : r, n.__c ? h = (c = t.__c = n.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? t.__c = c = new D(m, v) : (t.__c = c = new Y(m, v), c.constructor = D, c.render = co), w && w.sub(c), c.props = m, c.state || (c.state = {}), c.context = v, c.__n = r, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = oe({}, c.__s)), oe(c.__s, D.getDerivedStateFromProps(m, c.__s))), d = c.props, _ = c.state, c.__v = t, p)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && m !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, v), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, v) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), b = 0; b < c._sb.length; b++)
              c.__h.push(c._sb[b]);
            c._sb = [], c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, _, y);
          });
        }
        if (c.context = v, c.props = m, c.__P = e, c.__e = !1, E = x.__r, g = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, E && E(t), f = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, E && E(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++g < 25);
        c.state = c.__s, c.getChildContext != null && (r = oe(oe({}, r), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(d, _)), Yn(e, ot(C = f != null && f.type === j && f.key == null ? f.props.children : f) ? C : [C], t, n, r, o, i, s, a, u, l), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), h && (c.__E = c.__ = null);
      } catch (A) {
        t.__v = null, u || i != null ? (t.__e = a, t.__u |= u ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), x.__e(A, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = uo(n.__e, t, n, r, o, i, s, u, l);
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
function uo(e, t, n, r, o, i, s, a, u) {
  var l, f, c, p, d, _, y, h = n.props, m = t.props, w = t.type;
  if (w === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((d = i[l]) && "setAttribute" in d == !!w && (w ? d.localName === w : d.nodeType === 3)) {
        e = d, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (w === null)
      return document.createTextNode(m);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, m.is && m), i = null, a = !1;
  }
  if (w === null)
    h === m || a && e.data === m || (e.data = m);
  else {
    if (i = i && Ve.call(e.childNodes), h = n.props || $e, !a && i != null)
      for (h = {}, l = 0; l < e.attributes.length; l++)
        h[(d = e.attributes[l]).name] = d.value;
    for (l in h)
      d = h[l], l == "children" || (l == "dangerouslySetInnerHTML" ? c = d : l === "key" || l in m || He(e, l, null, d, o));
    for (l in m)
      d = m[l], l == "children" ? p = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? _ = d : l == "checked" ? y = d : l === "key" || a && typeof d != "function" || h[l] === d || He(e, l, d, h[l], o);
    if (f)
      a || c && (f.__html === c.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Yn(e, ot(p) ? p : [p], t, n, r, o && w !== "foreignObject", i, s, i ? i[0] : n.__k && Ne(n, 0), a, u), i != null)
      for (l = i.length; l--; )
        i[l] != null && qn(i[l]);
    a || (l = "value", _ !== void 0 && (_ !== e[l] || w === "progress" && !_ || w === "option" && _ !== h[l]) && He(e, l, _, h[l], !1), l = "checked", y !== void 0 && y !== e[l] && He(e, l, y, h[l], !1));
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
  var r, o, i, s;
  x.__ && x.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], Lt(t, e = (!r && n || t).__k = ne(j, null, [e]), o || $e, $e, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Ve.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), Zn(i, e, s);
}
function Jn(e, t) {
  Ae(e, t, Jn);
}
function lo(e, t, n) {
  var r, o, i, s, a = oe({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), Te(e.type, a, r || e.key, o || e.ref, null);
}
function Qn(e, t) {
  var n = { __c: t = "__cC" + Hn++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, Ct(a);
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
Ve = Bn.slice, x = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
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
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : or(void 0, t), function(a) {
    var u = r.__N ? r.__N[0] : r.__[0], l = r.t(u, a);
    u !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = R, !R.u)) {
    var o = function(a, u, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      }))
        return !i || i.call(this, a, u, l);
      var c = !1;
      return f.forEach(function(p) {
        if (p.__N) {
          var d = p.__[0];
          p.__ = p.__N, p.__N = void 0, d !== p.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === a) && (!i || i.call(this, a, u, l));
    };
    R.u = !0;
    var i = R.shouldComponentUpdate, s = R.componentWillUpdate;
    R.componentWillUpdate = function(a, u, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, u, l), i = f;
      }
      s && s.call(this, a, u, l);
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
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : xt(this.props, o);
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
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
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
  var o = lr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = cr(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
        l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
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
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || Eo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || No(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : go.test(i) ? i = a : r.indexOf("-") === -1 && bo.test(i) ? i = i.replace(wo, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ie(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ie(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
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
  function t(u, l) {
    return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return yt.useSyncExternalStoreWithSelector = function(u, l, f, c, p) {
    var d = o(null);
    if (d.current === null) {
      var _ = { hasValue: !1, value: null };
      d.current = _;
    } else
      _ = d.current;
    d = s(function() {
      function h(E) {
        if (!m) {
          if (m = !0, w = E, E = c(E), p !== void 0 && _.hasValue) {
            var g = _.value;
            if (p(g, E))
              return v = g;
          }
          return v = E;
        }
        if (g = v, n(w, E))
          return g;
        var N = c(E);
        return p !== void 0 && p(g, N) ? g : (w = E, v = N);
      }
      var m = !1, w, v, b = f === void 0 ? null : f;
      return [function() {
        return h(l());
      }, b === null ? void 0 : function() {
        return h(b());
      }];
    }, [l, f, c, p]);
    var y = r(u, d[0], d[1]);
    return i(function() {
      _.hasValue = !0, _.value = y;
    }, [y]), a(y), y;
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
    function n(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = t.useRef, s = t.useEffect, a = t.useMemo, u = t.useDebugValue;
    function l(f, c, p, d, _) {
      var y = i(null), h;
      y.current === null ? (h = {
        hasValue: !1,
        value: null
      }, y.current = h) : h = y.current;
      var m = a(function() {
        var E = !1, g, N, C = function(M) {
          if (!E) {
            E = !0, g = M;
            var Z = d(M);
            if (_ !== void 0 && h.hasValue) {
              var J = h.value;
              if (_(J, Z))
                return N = J, J;
            }
            return N = Z, Z;
          }
          var Q = g, ee = N;
          if (r(Q, M))
            return ee;
          var F = d(M);
          return _ !== void 0 && _(ee, F) ? ee : (g = M, N = F, F);
        }, D = p === void 0 ? null : p, A = function() {
          return C(c());
        }, z = D === null ? void 0 : function() {
          return C(D());
        };
        return [A, z];
      }, [c, p, d, _]), w = m[0], v = m[1], b = o(f, w, v);
      return s(function() {
        h.hasValue = !0, h.value = b;
      }, [b]), u(b), b;
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
    const { equalityFn: i = Lo, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o;
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
      store: a,
      subscription: u,
      getServerState: l,
      stabilityCheck: f,
      identityFunctionCheck: c
    } = t(), p = U.useRef(!0), d = U.useCallback(
      {
        [r.name](y) {
          const h = r(y);
          if (Qe.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: m,
              stabilityCheck: w
            } = {
              stabilityCheck: f,
              identityFunctionCheck: c,
              ...s
            };
            if (w === "always" || w === "once" && p.current) {
              const v = r(y);
              if (!i(h, v)) {
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
                    state: y,
                    selected: h,
                    selected2: v,
                    stack: b
                  }
                );
              }
            }
            if ((m === "always" || m === "once" && p.current) && h === y) {
              let v;
              try {
                throw new Error();
              } catch (b) {
                ({ stack: v } = b);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: v }
              );
            }
            p.current && (p.current = !1);
          }
          return h;
        }
      }[r.name],
      [r, f, s.stabilityCheck]
    ), _ = Tr(
      u.addNestedSub,
      a.getState,
      l || a.getState,
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
  function s(y) {
    f();
    const h = r.subscribe(y);
    let m = !1;
    return () => {
      m || (m = !0, h(), c());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    _.onStateChange && _.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = e.subscribe(u), r = Wo());
  }
  function c() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = kn);
  }
  function p() {
    i || (i = !0, f());
  }
  function d() {
    i && (i = !1, c());
  }
  const _ = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
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
  const s = U.useMemo(() => {
    const l = Ho(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = U.useMemo(() => e.getState(), [e]);
  Ko(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const u = t || fe;
  return /* @__PURE__ */ U.createElement(u.Provider, { value: s }, n);
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
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, u = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, m) => {
      s.set(m, h);
    }));
  }
  function f() {
    if (u)
      throw new Error(I.NODE_ENV === "production" ? V(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function c(h) {
    if (typeof h != "function")
      throw new Error(I.NODE_ENV === "production" ? V(4) : `Expected the listener to be a function. Instead, received: '${le(h)}'`);
    if (u)
      throw new Error(I.NODE_ENV === "production" ? V(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    l();
    const w = a++;
    return s.set(w, h), function() {
      if (m) {
        if (u)
          throw new Error(I.NODE_ENV === "production" ? V(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, l(), s.delete(w), i = null;
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
    if (u)
      throw new Error(I.NODE_ENV === "production" ? V(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = r(o, h);
    } finally {
      u = !1;
    }
    return (i = s).forEach((w) => {
      w();
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
    const h = c;
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
        function w() {
          const b = m;
          b.next && b.next(f());
        }
        return w(), {
          unsubscribe: h(w)
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
    subscribe: c,
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
  const s = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !r[a]);
  if (s.forEach((a) => {
    r[a] = !0;
  }), !(n && n.type === ve.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
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
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    I.NODE_ENV !== "production" && typeof e[a] > "u" && Dn(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (n[a] = e[a]);
  }
  const r = Object.keys(n);
  let o;
  I.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    ii(n);
  } catch (s) {
    i = s;
  }
  return function(a = {}, u) {
    if (i)
      throw i;
    if (I.NODE_ENV !== "production") {
      const c = oi(a, n, u, o);
      c && Dn(c);
    }
    let l = !1;
    const f = {};
    for (let c = 0; c < r.length; c++) {
      const p = r[c], d = n[p], _ = a[p], y = d(_, u);
      if (typeof y > "u") {
        const h = u && u.type;
        throw new Error(I.NODE_ENV === "production" ? V(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[p] = y, l = l || y !== _;
    }
    return l = l || r.length !== Object.keys(a).length, l ? f : a;
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
    const s = {
      getState: o.getState,
      dispatch: (u, ...l) => i(u, ...l)
    }, a = e.map((u) => u(s));
    return i = et(...a)(o.dispatch), {
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
    const i = r[o], s = n[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
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
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), tt(
      i,
      (a, u) => In(e, r, o, a, u, n, s)
    ), rt(e, o, !1), n && e.patches_ && ge("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function In(e, t, n, r, o, i, s) {
  if (Ue.NODE_ENV !== "production" && o === n && L(5), de(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Rt(t.assigned_, r) ? i.concat(r) : void 0, u = nt(e, o, a);
    if (Vr(n, r, u), de(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
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
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
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
        const s = this;
        return function(u = i, ...l) {
          return s.produce(u, (f) => n.call(this, f, ...l));
        };
      }
      typeof n != "function" && L(6), r !== void 0 && typeof r != "function" && L(7);
      let o;
      if (ae(t)) {
        const i = $n(this), s = Vt(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? At(i) : It(i);
        }
        return Rn(i, r), An(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Ir && (o = void 0), this.autoFreeze_ && Yt(o, !0), r) {
          const i = [], s = [];
          ge("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        L(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (u) => t(u, ...a));
      let r, o;
      return [this.produce(t, n, (s, a) => {
        r = s, o = a;
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
  function s() {
    var c;
    let a = n;
    const { length: u } = arguments;
    for (let p = 0, d = u; p < d; p++) {
      const _ = arguments[p];
      if (typeof _ == "function" || typeof _ == "object" && _ !== null) {
        let y = a.o;
        y === null && (a.o = y = /* @__PURE__ */ new WeakMap());
        const h = y.get(_);
        h === void 0 ? (a = qe(), y.set(_, a)) : a = h;
      } else {
        let y = a.p;
        y === null && (a.p = y = /* @__PURE__ */ new Map());
        const h = y.get(_);
        h === void 0 ? (a = qe(), y.set(_, a)) : a = h;
      }
    }
    const l = a;
    let f;
    if (a.s === Pn ? f = a.v : (f = e.apply(null, arguments), i++), l.s = Pn, r) {
      const p = ((c = o == null ? void 0 : o.deref) == null ? void 0 : c.call(o)) ?? o;
      p != null && r(p, f) && (f = p, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new xi(f) : f;
    }
    return l.v = f, f;
  }
  return s.clearCache = () => {
    n = qe(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Ur(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, u = {}, l = o.pop();
    typeof l == "object" && (u = l, l = o.pop()), Ei(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const f = {
      ...n,
      ...u
    }, {
      memoize: c,
      memoizeOptions: p = [],
      argsMemoize: d = Zt,
      argsMemoizeOptions: _ = [],
      devModeChecks: y = {}
    } = f, h = Mn(p), m = Mn(_), w = Ci(o), v = c(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h);
    let b = !0;
    const E = d(function() {
      s++;
      const N = Vn(
        w,
        arguments
      );
      if (a = v.apply(null, N), vi.NODE_ENV !== "production") {
        const { identityFunctionCheck: C, inputStabilityCheck: D } = Oi(b, y);
        if (C.shouldRun && C.run(
          l,
          N,
          a
        ), D.shouldRun) {
          const A = Vn(
            w,
            arguments
          );
          D.run(
            { inputSelectorResults: N, inputSelectorResultsCopy: A },
            { memoize: c, memoizeOptions: h },
            arguments
          );
        }
        b && (b = !1);
      }
      return a;
    }, ...m);
    return Object.assign(E, {
      resultFunc: l,
      memoizedResultFunc: v,
      dependencies: w,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: c,
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
      (...i) => i.reduce((s, a, u) => (s[n[u]] = a, s), {})
    );
  },
  { withTypes: () => Ri }
);
function Wr(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var $i = Wr(), Ai = Wr, O = {}, Ii = (...e) => {
  const t = Ur(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(de(s) ? Fr(s) : s, ...a);
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
    for (const s in n) {
      const a = r ? r + "." + s : s;
      t.length && t.indexOf(a) !== -1 || (i.children[s] = qr(e, t, n[s], a));
    }
  }
  return i;
}
function Kr(e, t = [], n, r, o = !1, i = "") {
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
  const u = {};
  for (let f in n.children)
    u[f] = !0;
  for (let f in r)
    u[f] = !0;
  const l = t.length > 0;
  for (let f in u) {
    const c = i ? i + "." + f : f;
    if (l && t.some((_) => _ instanceof RegExp ? _.test(c) : c === _))
      continue;
    const p = Kr(e, t, n.children[f], r[f], a, c);
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
    let t = function(a, u, l, f) {
      return JSON.stringify(a, n(u, f), l);
    }, n = function(a, u) {
      let l = [], f = [];
      return u || (u = function(c, p) {
        return l[0] === p ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(p)).join(".") + "]";
      }), function(c, p) {
        if (l.length > 0) {
          var d = l.indexOf(this);
          ~d ? l.splice(d + 1) : l.push(this), ~d ? f.splice(d, 1 / 0, c) : f.push(c), ~l.indexOf(p) && (p = u.call(this, c, p));
        } else
          l.push(p);
        return a == null ? p : a.call(this, c, p);
      };
    }, {
      isImmutable: r = Li,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const s = zi.bind(null, r, o);
    return ({
      getState: a
    }) => {
      let u = a(), l = s(u), f;
      return (c) => (p) => {
        const d = Hr(i, "ImmutableStateInvariantMiddleware");
        d.measureTime(() => {
          if (u = a(), f = l.detectMutations(), l = s(u), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? T(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const _ = c(p);
        return d.measureTime(() => {
          if (u = a(), f = l.detectMutations(), l = s(u), f.wasMutated)
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
  let s;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e))
    return !1;
  const a = r != null ? r(e) : Object.entries(e), u = o.length > 0;
  for (const [l, f] of a) {
    const c = t ? t + "." + l : l;
    if (!(u && o.some((d) => d instanceof RegExp ? d.test(c) : c === d))) {
      if (!n(f))
        return {
          keyPath: c,
          value: f
        };
      if (typeof f == "object" && (s = Pt(f, c, n, r, o, i), s))
        return s;
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
      warnAfter: s = 32,
      ignoreState: a = !1,
      ignoreActions: u = !1,
      disableCache: l = !1
    } = e, f = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (c) => (p) => (d) => {
      if (!Ar(d))
        return p(d);
      const _ = p(d), y = Hr(s, "SerializableStateInvariantMiddleware");
      return !u && !(r.length && r.indexOf(d.type) !== -1) && y.measureTime(() => {
        const h = Pt(d, "", t, n, o, f);
        if (h) {
          const {
            keyPath: m,
            value: w
          } = h;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, d, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (y.measureTime(() => {
        const h = c.getState(), m = Pt(h, "", t, n, i, f);
        if (m) {
          const {
            keyPath: w,
            value: v
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, v, `
Take a look at the reducer(s) handling this action type: ${d.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), y.warnIfExceeded()), _;
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
  let s = new Br();
  if (n && (Ke(n) ? s.push($i) : s.push(Ai(n.extraArgument))), O.NODE_ENV !== "production") {
    if (r) {
      let a = {};
      Ke(r) || (a = r), s.unshift(Ui(a));
    }
    if (o) {
      let a = {};
      Ke(o) || (a = o), s.push(Wi(a));
    }
    if (i) {
      let a = {};
      Ke(i) || (a = i), s.unshift(Fi(a));
    }
  }
  return s;
}, Bi = "RTK_autoBatch", Xr = (e) => (t) => {
  setTimeout(t, e);
}, qi = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xr(10), Ki = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? qi : e.type === "callback" ? e.queueNotification : Xr(e.timeout), l = () => {
    s = !1, i && (i = !1, a.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const c = () => o && f(), p = r.subscribe(c);
      return a.add(f), () => {
        p(), a.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var c;
      try {
        return o = !((c = f == null ? void 0 : f.meta) != null && c[Bi]), i = !o, i && (s || (s = !0, u(l))), r.dispatch(f);
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
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (ze(n))
    a = si(n);
  else
    throw new Error(O.NODE_ENV === "production" ? T(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!ce && r && typeof r != "function")
    throw new Error(O.NODE_ENV === "production" ? T(2) : "`middleware` field must be a callback");
  let u;
  if (typeof r == "function") {
    if (u = r(t), !ce && !Array.isArray(u))
      throw new Error(O.NODE_ENV === "production" ? T(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = t();
  if (!ce && u.some((_) => typeof _ != "function"))
    throw new Error(O.NODE_ENV === "production" ? T(4) : "each middleware provided to configureStore must be a function");
  let l = et;
  o && (l = Mi({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ce,
    ...typeof o == "object" && o
  }));
  const f = ai(...u), c = Gi(f);
  if (!ce && s && typeof s != "function")
    throw new Error(O.NODE_ENV === "production" ? T(5) : "`enhancers` field must be a callback");
  let p = typeof s == "function" ? s(c) : c();
  if (!ce && !Array.isArray(p))
    throw new Error(O.NODE_ENV === "production" ? T(6) : "`enhancers` callback must return an array");
  if (!ce && p.some((_) => typeof _ != "function"))
    throw new Error(O.NODE_ENV === "production" ? T(7) : "each enhancer provided to configureStore must be a function");
  !ce && u.length && !p.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const d = l(...p);
  return $r(a, i, d);
}
function Zr(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      if (O.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(O.NODE_ENV === "production" ? T(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(O.NODE_ENV === "production" ? T(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(O.NODE_ENV === "production" ? T(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(O.NODE_ENV === "production" ? T(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, o;
    },
    addMatcher(i, s) {
      if (O.NODE_ENV !== "production" && r)
        throw new Error(O.NODE_ENV === "production" ? T(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: i,
        reducer: s
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
    const a = jn(e);
    i = () => a;
  }
  function s(a = i(), u) {
    let l = [n[u.type], ...r.filter(({
      matcher: f
    }) => f(u)).map(({
      reducer: f
    }) => f)];
    return l.filter((f) => !!f).length === 0 && (l = [o]), l.reduce((f, c) => {
      if (c)
        if (de(f)) {
          const d = c(f, u);
          return d === void 0 ? f : d;
        } else {
          if (ae(f))
            return zr(f, (p) => c(p, u));
          {
            const p = c(f, u);
            if (p === void 0) {
              if (f === null)
                return f;
              throw new Error(O.NODE_ENV === "production" ? T(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return f;
    }, a);
  }
  return s.getInitialState = i, s;
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
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(O.NODE_ENV === "production" ? T(11) : "`name` is a required option for createSlice");
    typeof process < "u" && O.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof o.reducers == "function" ? o.reducers(os()) : o.reducers) || {}, u = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(v, b) {
        const E = typeof v == "string" ? v : v.type;
        if (!E)
          throw new Error(O.NODE_ENV === "production" ? T(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(O.NODE_ENV === "production" ? T(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = b, f;
      },
      addMatcher(v, b) {
        return l.sliceMatchers.push({
          matcher: v,
          reducer: b
        }), f;
      },
      exposeAction(v, b) {
        return l.actionCreators[v] = b, f;
      },
      exposeCaseReducer(v, b) {
        return l.sliceCaseReducersByName[v] = b, f;
      }
    };
    u.forEach((v) => {
      const b = a[v], E = {
        reducerName: v,
        type: ts(i, v),
        createNotation: typeof o.reducers == "function"
      };
      ss(b) ? us(E, b, f, t) : is(E, b, f);
    });
    function c() {
      if (O.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(O.NODE_ENV === "production" ? T(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [v = {}, b = [], E = void 0] = typeof o.extraReducers == "function" ? Zr(o.extraReducers) : [o.extraReducers], g = {
        ...v,
        ...l.sliceCaseReducersByType
      };
      return Zi(o.initialState, (N) => {
        for (let C in g)
          N.addCase(C, g[C]);
        for (let C of l.sliceMatchers)
          N.addMatcher(C.matcher, C.reducer);
        for (let C of b)
          N.addMatcher(C.matcher, C.reducer);
        E && N.addDefaultCase(E);
      });
    }
    const p = (v) => v, d = /* @__PURE__ */ new Map();
    let _;
    function y(v, b) {
      return _ || (_ = c()), _(v, b);
    }
    function h() {
      return _ || (_ = c()), _.getInitialState();
    }
    function m(v, b = !1) {
      function E(N) {
        let C = N[v];
        if (typeof C > "u") {
          if (b)
            C = h();
          else if (O.NODE_ENV !== "production")
            throw new Error(O.NODE_ENV === "production" ? T(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return C;
      }
      function g(N = p) {
        const C = Fn(d, b, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Fn(C, N, {
          insert: () => {
            const D = {};
            for (const [A, z] of Object.entries(o.selectors ?? {}))
              D[A] = rs(z, N, h, b);
            return D;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: g,
        get selectors() {
          return g(E);
        },
        selectSlice: E
      };
    }
    const w = {
      name: i,
      reducer: y,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...m(s),
      injectInto(v, {
        reducerPath: b,
        ...E
      } = {}) {
        const g = b ?? s;
        return v.inject({
          reducerPath: g,
          reducer: y
        }, E), {
          ...w,
          ...m(g, !0)
        };
      }
    };
    return w;
  };
}
function rs(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    if (typeof a > "u") {
      if (r)
        a = n();
      else if (O.NODE_ENV !== "production")
        throw new Error(O.NODE_ENV === "production" ? T(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...s);
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
  let i, s;
  if ("reducer" in r) {
    if (n && !as(r))
      throw new Error(O.NODE_ENV === "production" ? T(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? Oe(e, s) : Oe(e));
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
    fulfilled: s,
    pending: a,
    rejected: u,
    settled: l,
    options: f
  } = n, c = o(e, i, f);
  r.exposeAction(t, c), s && r.addCase(c.fulfilled, s), a && r.addCase(c.pending, a), u && r.addCase(c.rejected, u), l && r.addMatcher(c.settled, l), r.exposeCaseReducer(t, {
    fulfilled: s || Ge,
    pending: a || Ge,
    rejected: u || Ge,
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
        buttonClasses: s
      } = t.payload;
      e[n] = {
        fields: {},
        meta: {
          formId: +r,
          formInstance: n,
          formCategory: o,
          formTeam: i,
          isLoading: !1,
          isSubmitting: !1,
          isValid: !0,
          isInteracted: !1,
          step: 1,
          buttonClasses: s
        }
      };
    },
    registerField: (e, t) => {
      const {
        formInstance: n,
        name: r,
        value: o,
        defaultValue: i,
        validationRules: s,
        visibilityConditions: a
      } = t.payload;
      e[n].fields[r] = {
        ...e[n].fields[r],
        value: o,
        defaultValue: i,
        validationRules: s,
        visibilityConditions: a
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
    })), e.current[n.name] = Le.createRef()), (i = n.nodes) == null || i.forEach((s) => t(s, r, o));
  };
  return {
    fieldRefs: e,
    registerNode: t
  };
}
function Qt(e, t = [], n) {
  const r = ue(), o = P(ft(e)), i = {
    resetField: ({
      mapping: a
    }) => {
      const u = Object.keys(a)[0];
      return r(ys({
        formInstance: e,
        name: u
      })), !0;
    },
    updateField: ({
      mapping: a
    }) => {
      const u = Object.keys(a)[0], l = a[u];
      return r(te({
        formInstance: e,
        name: u,
        value: l
      })), !0;
    },
    updateMeta: ({
      mapping: a
    }) => {
      const u = Object.keys(a)[0], l = a[u];
      return r(be({
        formInstance: e,
        name: u,
        value: l
      })), !0;
    },
    submit: (a) => !0,
    validate: (a) => {
      Object.values(n.current).forEach((l) => {
        var f, c;
        (c = (f = l.current) == null ? void 0 : f.validate) == null || c.call(f);
      });
      let u = !0;
      for (const l in o)
        if (o.hasOwnProperty(l)) {
          const f = o[l];
          f.errors && f.errors.length > 0 && (console.log("validation failed", f), u = !1);
        }
      return u && r(be({
        formInstance: e,
        name: "isValid",
        value: !0
      })), u;
    }
  }, s = X((a, u) => {
    const l = t.filter((f) => f.type === a);
    l.length > 0 && l.every((f) => {
      const c = i[f.name];
      return c({
        event: u,
        formInstance: e,
        mapping: f.mapping
      });
    });
  }, [t, e]);
  return {
    onClick: (a) => s("onClick", a),
    onBlur: (a) => s("onBlur", a),
    onChange: (a) => s("onChange", a)
  };
}
var Ts = 0;
function S(e, t, n, r, o, i) {
  var s, a, u = {};
  for (a in t)
    a == "ref" ? s = t[a] : u[a] = t[a];
  var l = { type: e, props: u, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ts, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s)
      u[a] === void 0 && (u[a] = s[a]);
  return x.vnode && x.vnode(l), l;
}
function Rs(e) {
  const {
    formInstance: t,
    name: n,
    label: r,
    buttonType: o,
    events: i,
    fieldrefs: s,
    buttonContext: a,
    disabled: u = !1
  } = e, l = P(pt(t)), {
    isLoading: f,
    isValid: c,
    buttonClasses: p
  } = l, {
    onClick: d
  } = Qt(t, i, s), _ = X((m) => {
    d(m);
  }, []), y = k(["button-container", "button-container--" + n]);
  let h = k(["button", "button--" + n, "button--" + (a || "primary")]);
  return p !== "" && (h = h + " " + p), S("div", {
    className: y,
    children: S("button", {
      type: o,
      className: h,
      onClick: _,
      disabled: u || c === !1 || f === !0,
      children: r
    }, n)
  });
}
const $s = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: s,
    defaultValue: a,
    helpText: u,
    alias: l,
    disabled: f = !1
  } = t, c = P(ft(r)), p = ue(), d = l || o, _ = (m, w) => {
    const v = m.target.checked ? w : null;
    p(te({
      formInstance: r,
      name: d,
      value: v
    }));
  }, y = k(["input", "input-checkbox", "input-checkbox--" + o]), h = k(["input--option"]);
  return S("div", {
    className: y,
    children: s ? s.map((m) => S("label", {
      className: h,
      ref: n,
      children: [S("input", {
        name: o,
        type: "checkbox",
        value: m.value,
        checked: c[d].value == m.value,
        onChange: (w) => _(w, m.value)
      }), S("span", {
        className: k(["input--label"]),
        children: m.label
      })]
    }, o + m.value)) : S("label", {
      className: h,
      children: [S("input", {
        name: o,
        type: "checkbox",
        value: "true",
        checked: !!c[d].value,
        onChange: (m) => _(m, !0),
        ref: n
      }, o), S("span", {
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
  var r, o, i, s, a, u, l = 0, f = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(As);
  t = zn(t) || 0, jt(n) && (f = !!n.leading, c = "maxWait" in n, i = c ? Bs(zn(n.maxWait) || 0, t) : i, p = "trailing" in n ? !!n.trailing : p);
  function d(g) {
    var N = r, C = o;
    return r = o = void 0, l = g, s = e.apply(C, N), s;
  }
  function _(g) {
    return l = g, a = setTimeout(m, t), f ? d(g) : s;
  }
  function y(g) {
    var N = g - u, C = g - l, D = t - N;
    return c ? qs(D, i - C) : D;
  }
  function h(g) {
    var N = g - u, C = g - l;
    return u === void 0 || N >= t || N < 0 || c && C >= i;
  }
  function m() {
    var g = Nt();
    if (h(g))
      return w(g);
    a = setTimeout(m, y(g));
  }
  function w(g) {
    return a = void 0, p && r ? d(g) : (r = o = void 0, s);
  }
  function v() {
    a !== void 0 && clearTimeout(a), l = 0, r = u = o = a = void 0;
  }
  function b() {
    return a === void 0 ? s : w(Nt());
  }
  function E() {
    var g = Nt(), N = h(g);
    if (r = arguments, o = this, u = g, N) {
      if (a === void 0)
        return _(u);
      if (c)
        return a = setTimeout(m, t), d(u);
    }
    return a === void 0 && (a = setTimeout(m, t)), s;
  }
  return E.cancel = v, E.flush = b, E;
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
  const o = P(ks()), i = P(dt(e, t)), s = ue();
  return {
    setValidateField: (u) => {
      if (!r || r.length === 0)
        return;
      if (r[0].startsWith("nullable") && (u == null || u === "")) {
        s(Et({
          formInstance: e,
          name: t,
          errors: []
        })), s(be({
          formInstance: e,
          name: "isValid",
          value: !0
        }));
        return;
      }
      let l = [];
      for (const f of r) {
        const c = f.split(":"), p = ra[c[0]];
        if (!p) {
          console.error(`Validator not found for rule: ${f}`);
          continue;
        }
        if (c[0] === "nullable" && (u == null || u === ""))
          break;
        const d = p(f, u);
        if (console.log("Validator", i, f, u, d ? "true" : "false"), !d && o[c[0]]) {
          let _ = o[c[0]];
          _.includes(":attribute") && (_ = _.replace(":attribute", n)), _.includes(":max") && (_ = _.replace(":max", c[1])), _.includes(":min") && (_ = _.replace(":min", c[1])), l.push(_);
        }
      }
      l.length > 0 ? (s(Et({
        formInstance: e,
        name: t,
        errors: l
      })), s(be({
        formInstance: e,
        name: "isValid",
        value: !1
      }))) : (s(Et({
        formInstance: e,
        name: t,
        errors: []
      })), s(be({
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
    defaultValue: s,
    visibilityConditions: a,
    validationRules: u,
    allowMultiple: l,
    helpText: f,
    emailTag: c,
    storeAsDonorMeta: p,
    showInReceipt: d,
    type: _,
    subType: y,
    childNodes: h,
    disabled: m = !1,
    ...w
  } = t, [v, b] = pe((F, re) => ({
    ...F,
    ...re
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: E,
    isInvalid: g
  } = v, N = P(dt(r, o)), C = ue(), D = N.errors, A = P(pt(r)), {
    isLoading: z
  } = A, {
    setValidateField: M
  } = en(r, o, i, u);
  W(() => () => {
    n.current = null;
  }, []), je(n, () => ({
    validate() {
      M(N.value);
    }
  }), [N]);
  const Z = X(ke((F) => {
    C(te({
      formInstance: r,
      name: o,
      value: F.target.value
    }));
    let re = F.target.value.length > 0;
    M(F.target.value), b({
      isActive: re
    });
  }, 300), [C, r, o, M, b]), J = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + y]), Q = k(["input", "input--" + o, "input-type--" + y, E && "input--active", D && D.length > 0 && "input--invalid"]), ee = k(["input--field"]);
  return S("div", {
    className: J,
    "aria-live": "polite",
    children: [S("label", {
      className: Q,
      children: [i && S("span", {
        className: k(["input--label"]),
        children: i
      }), S("input", {
        type: "email",
        name: o,
        className: ee,
        disabled: m || z === !0,
        autoComplete: "email",
        ...w,
        onChange: Z,
        ref: n
      })]
    }), D && D.length !== 0 && S(j, {
      children: D.map((F, re) => S("div", {
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
  return S("fieldset", {
    className: r,
    children: [n && S("legend", {
      children: n
    }), t]
  });
}
const sa = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: s,
    visibilityConditions: a,
    validationRules: u,
    helpText: l,
    emailTag: f,
    storeAsDonorMeta: c,
    showInReceipt: p,
    type: d,
    subType: _,
    childNodes: y,
    disabled: h = !1,
    ...m
  } = t, w = P(ft(r)), v = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + _]), b = k(["input", "input--" + o, "input-type--" + _]), E = k(["input--field"]);
  return S("div", {
    className: v,
    children: S("div", {
      className: b,
      children: S("input", {
        name: o,
        type: "hidden",
        className: E,
        ...m,
        value: w[o].value,
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
    visibilityConditions: s,
    helpText: a,
    customClasses: u,
    storeAsDonorMeta: l,
    showInReceipt: f,
    type: c,
    subType: p,
    childNodes: d,
    disabled: _ = !1,
    ...y
  } = e, h = k(["html", ...Array.isArray(u) ? u : []]);
  return S("div", {
    className: k(["html_wrapper"]),
    children: S("div", {
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
    defaultValue: s,
    inputMode: a,
    pattern: u,
    visibilityConditions: l,
    validationRules: f,
    helpText: c,
    emailTag: p,
    events: d,
    fieldrefs: _,
    alias: y,
    storeAsDonorMeta: h,
    showInReceipt: m,
    type: w,
    subType: v,
    childNodes: b,
    disabled: E = !1,
    ...g
  } = t, [N, C] = pe((G, he) => ({
    ...G,
    ...he
  }), {
    isActive: !1
  }), {
    isActive: D
  } = N, A = P(dt(r, o)), z = ue(), M = A.errors, Z = P(pt(r)), {
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
    const he = a && a === "numeric" ? isNaN(Number(G.target.value)) ? "" : Number(G.target.value) : G.target.value;
    z(te({
      formInstance: r,
      name: o,
      value: he
    })), z(te({
      formInstance: r,
      name: y,
      value: he
    }));
    let tn = !1;
    G.target.value.length > 0 && (tn = !0), Q(he), C({
      isActive: tn
    }), re(G);
  }, 300), [z, r, o, a, Q, C]), q = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + v]), We = k(["input", "input--" + o, "input-type--" + v, D && "input--active", M && M.length > 0 && "input--invalid"]), oo = k(["input--field"]);
  return S("div", {
    className: q,
    "aria-live": "polite",
    children: [S("label", {
      className: We,
      children: [i && S("span", {
        className: k(["input--label"]),
        children: i
      }), S("input", {
        type: "text",
        name: o,
        className: oo,
        disabled: E || J === !0,
        ...g,
        value: A.value,
        onChange: K,
        onClick: _t,
        inputMode: a,
        pattern: u,
        ref: n
      })]
    }), M && M.length !== 0 && S(j, {
      children: M.map((G, he) => S("div", {
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
function da(e, t) {
  const n = fa(e);
  let r = !1;
  return (i, s, a) => {
    const u = ca(i, {
      detail: {
        form_id: a.formId,
        form_instance: a.formInstance
      }
    });
    t.current && (r = la(t.current, u), r || console.error("Failed to dispatch onpage event: ", i, s)), r = navigator.sendBeacon(n, JSON.stringify(s)), r || console.error("Failed to send analytics event: ", i, s);
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
      return "https://fundy.cloud/core";
  }
}
function pa() {
  return window.location.protocol + "//" + window.location.hostname + window.location.pathname;
}
function _a({
  childNodes: e,
  formInstance: t,
  fieldrefs: n,
  rootRef: r
}) {
  const o = ue(), s = Ft.getState().forms[t].fields, a = Ft.getState().misc.environment, u = P(pt(t)), l = P(ws(t)), f = P(Os()), c = da(a, r), p = pa();
  W(() => {
    if (l === !0) {
      const h = {
        name: "formInteracted",
        page_url: p,
        form_id: u.formId,
        form_instance: t
      };
      c(h.name, h, u);
    }
  }, [l]), W(() => {
    const h = {
      name: "formLoaded",
      page_url: p,
      form_id: u.formId,
      form_instance: t
    };
    if (c(h.name, h, u), r.current) {
      const m = r.current.closest(".fundraising-form-wrapper");
      if (m)
        return u.step > 1 ? m.classList.add("fundraising-form-wrapper--stepped") : m.classList.remove("fundraising-form-wrapper--stepped"), () => {
          m.classList.remove("fundraising-form-wrapper--stepped");
        };
    }
  }, [r, u.step]), W(() => {
    const h = new IntersectionObserver((w) => {
      w.forEach((v) => {
        if (v.isIntersecting) {
          const b = {
            name: "formViewed",
            page_url: p,
            form_id: u.formId,
            form_instance: t
          };
          c(b.name, b, u), h.unobserve(v.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }), m = r.current;
    return m && h.observe(m), () => {
      m && h.unobserve(m);
    };
  }, []);
  const d = X((h) => {
    h.preventDefault(), ke(() => {
      let v = !0;
      const b = {
        form_id: u.formId,
        payment_method: u.payment_method
      };
      Object.values(n.current).forEach((E) => {
        var g, N;
        (N = (g = E.current) == null ? void 0 : g.validate) == null || N.call(g);
      });
      for (const E in s)
        if (s.hasOwnProperty(E)) {
          const g = s[E];
          g.value && (b[E] = g.value), g.errors && g.errors.length > 0 && (v = !1), g.validationRules && g.validationRules.indexOf("required") !== -1 && !g.value && (v = !1);
        }
      v && (o(be({
        formInstance: t,
        name: "isLoading",
        value: !0
      })), _(b).then((E) => {
        const g = {
          name: "formSubmitted",
          page_url: p,
          form_id: u.formId,
          form_instance: t
        };
        if (c(g.name, g, u), b.payment_method === "avtale_giro") {
          const N = document.createElement("form");
          N.method = "POST", N.action = E.url, document.body.appendChild(N), N.submit();
          return;
        }
        E.url && (window.location.href = E.url);
      }).catch((E) => {
        o(be({
          formInstance: t,
          name: "isLoading",
          value: !1
        })), console.error(E);
      }));
    }, 300)();
  }, [n, s, u.formId, u.payment_method, o, t]);
  async function _(h) {
    return await (await fetch(no(a) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(h)
    })).json();
  }
  const y = k(["form", "form_instance--" + t, (u == null ? void 0 : u.formId) && "form_id--" + u.formId, (u == null ? void 0 : u.formCategory) && "form_category--" + u.formCategory, (u == null ? void 0 : u.formTeam) && "form_team--" + u.formTeam]);
  return S("form", {
    ref: r,
    className: y,
    onSubmit: d,
    noValidate: !0,
    children: [e, S("div", {
      className: k(["form_notifications"]),
      "aria-live": "polite",
      "aria-atomic": "false",
      children: (u == null ? void 0 : u.step) === 2 && (u == null ? void 0 : u.isValid) === !1 && S("div", {
        className: k(["form_validation__error"]),
        children: f.validation_failed
      })
    })]
  });
}
function ha({
  childNodes: e,
  name: t
}) {
  const n = k(["group", "group--" + t]);
  return S("div", {
    className: n,
    children: e
  });
}
const ma = _e(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    defaultValue: s,
    visibilityConditions: a,
    validationRules: u,
    helpText: l,
    emailTag: f,
    alias: c,
    storeAsDonorMeta: p,
    showInReceipt: d,
    type: _,
    subType: y,
    events: h,
    childNodes: m,
    disabled: w = !1,
    ...v
  } = t, [b, E] = pe((K, q) => ({
    ...K,
    ...q
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: g,
    isInvalid: N
  } = b, C = P(dt(r, o)), D = ue(), A = C.errors, {
    setValidateField: z
  } = en(r, o, i, u);
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
    })), c && D(te({
      formInstance: r,
      name: c,
      value: q
    }));
    let We = !1;
    q && (We = !0), z(q), E({
      isActive: We
    });
  }, 300), [D, r, o, z, E]), Z = u.find((K) => K.startsWith("min:")), J = Z ? Number(Z.split(":")[1]) : void 0, Q = u.find((K) => K.startsWith("max:")), ee = Q ? Number(Q.split(":")[1]) : void 0, F = k(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + y]), re = k(["input", "input--" + o, "input-type--" + y, g && "input--active", A && A.length > 0 && "input--invalid"]), _t = k(["input--field"]);
  return S("div", {
    className: F,
    "aria-live": "polite",
    children: [S("label", {
      className: re,
      children: [i && S("span", {
        className: k(["input--label"]),
        children: i
      }), S("input", {
        type: "number",
        name: o,
        className: _t,
        disabled: w,
        ...v,
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
    }), A && A.length !== 0 && S(j, {
      children: A.map((K, q) => S("div", {
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
    options: s,
    defaultValue: a,
    helpText: u,
    events: l,
    fieldrefs: f,
    alias: c,
    disabled: p = !1
  } = t, d = P(ft(r)), _ = ue(), {
    onClick: y,
    onBlur: h,
    onChange: m
  } = Qt(r, l, f), w = c || o;
  W(() => {
    c === "amount" && s !== null && !s.some((N) => N.value == d[w].value) && (_(te({
      formInstance: r,
      name: o,
      value: a
    })), c && _(te({
      formInstance: r,
      name: c,
      value: a
    })));
  }, [d.frequency.value, s]);
  const v = X(ke((N) => {
    y(N);
  }, 300), [_, r, o]), b = X(ke((N, C) => {
    _(te({
      formInstance: r,
      name: w,
      value: C
    })), m(N);
  }, 300), [_, r, o]), E = k(["input", "input-radio", "input-radio--" + o]), g = k(["input--option"]);
  return S("div", {
    className: E,
    children: s ? s.map((N) => S("label", {
      className: g,
      ref: n,
      children: [S("input", {
        name: o,
        type: "radio",
        value: N.value,
        checked: d[w].value == N.value,
        onChange: (C) => b(C, N.value),
        onClick: (C) => v(C)
      }), S("span", {
        className: k(["input--label"]),
        children: N.label
      })]
    }, o + N.value)) : S("label", {
      className: g,
      children: [S("input", {
        name: o,
        type: "radio",
        value: "true",
        checked: !!d[w].value,
        onChange: (N) => b(N, !0),
        ref: n
      }, o), S("span", {
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
  return S("div", {
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
  return S("div", {
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
  return S("div", {
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
    isLoading: s,
    isDelayed: a,
    error: u
  } = o, l = wa(n), f = xe(null);
  async function c(d, _) {
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
    }).then((y) => y.json()).then((y) => {
      r({
        isLoading: !1,
        formCategory: y.campaign,
        formTeam: y.team,
        config: JSON.parse(y.config),
        translations: y.translations
      }), i({
        isLoading: !1,
        error: null
      });
    }).catch((y) => {
      i({
        isLoading: !1,
        isDelayed: !1,
        error: y
      });
    });
  }
  const p = () => {
    i({
      isLoading: !0,
      isDelayed: !1,
      error: null
    }), c(e, t);
  };
  return W(() => {
    e && p();
  }, [r]), S("div", {
    className: k(["loader-container"]),
    children: S("div", {
      className: k(["loader", "loader-" + status]),
      children: [l.loading, a && S(j, {
        children: [S("p", {
          children: l.delayed
        }), S("button", {
          onClick: () => f.current.abort(),
          children: l.cancel
        }), S("button", {
          onClick: () => p(),
          children: l.retry
        })]
      }), u && S(j, {
        children: [S("p", {
          children: l.failed
        }), S("button", {
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
  const i = P(bs(e)), s = ue(), [a, u] = pe((b, E) => ({
    ...b,
    ...E
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
    formCategory: c,
    formTeam: p,
    config: d,
    translations: _,
    error: y
  } = a, {
    fieldRefs: h,
    registerNode: m
  } = Ds(), w = xe(null);
  if (W(() => {
    s(hs({
      formInstance: e,
      formId: t,
      formCategory: c,
      formTeam: p,
      step: 0,
      buttonClasses: o
    })), s(Ss({
      env: n
    })), _ && s(Ns({
      translations: _
    })), l === !1 && f === !1 && (m(d, e, s), u({
      isInitialized: !0
    }));
  }, [e, l]), l === !0)
    return S(Ea, {
      formId: t,
      env: n,
      locale: r,
      setAppState: u
    });
  const v = (b, E) => {
    let g = null;
    if (g = Na[b.subType], !g || !xs(i.fields, b.visibilityConditions))
      return null;
    const N = b.nodes ? b.nodes.map((D) => v(D, E)) : null, C = to(b) ? h.current[b.name] : null;
    return S(g, {
      formInstance: E,
      ref: C,
      childNodes: N,
      fieldrefs: h,
      rootRef: w,
      ...b
    }, b.name);
  };
  return i === void 0 ? null : l || f === !1 ? S("div", {
    className: k(["loading"]),
    children: S("div", {
      className: k(["loading__message"]),
      children: "Loading..."
    })
  }) : S(j, {
    children: v(d, e)
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
  To.createRoot(e).render(S(Le.StrictMode, {
    children: S(Yo, {
      store: Ft,
      children: S(Sa, {
        formInstance: t,
        formId: n,
        env: r,
        locale: o,
        buttonClasses: i
      })
    })
  }));
}
