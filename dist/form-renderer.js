var Re, k, Pn, _e, Yt, jn, yt, Fn, Oe = {}, Ln = [], no = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, tt = Array.isArray;
function ee(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Q(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Re.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Se(e, a, r, o, null);
}
function Se(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Pn, __i: -1, __u: 0 };
  return o == null && k.vnode != null && k.vnode(i), i;
}
function Un() {
  return { current: null };
}
function V(e) {
  return e.children;
}
function G(e, t) {
  this.props = e, this.context = t;
}
function be(e, t) {
  if (t == null)
    return e.__ ? be(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? be(e) : null;
}
function Wn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Wn(e);
  }
}
function vt(e) {
  (!e.__d && (e.__d = !0) && _e.push(e) && !Ge.__r++ || Yt !== k.debounceRendering) && ((Yt = k.debounceRendering) || jn)(Ge);
}
function Ge() {
  var e, t, n, r, o, i, a, s, c;
  for (_e.sort(yt); e = _e.shift(); )
    e.__d && (t = _e.length, r = void 0, i = (o = (n = e).__v).__e, s = [], c = [], (a = n.__P) && ((r = ee({}, o)).__v = o.__v + 1, k.vnode && k.vnode(r), It(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? be(o), !!(32 & o.__u), c), r.__v = o.__v, r.__.__k[r.__i] = r, qn(s, r, c), r.__e != i && Wn(r)), _e.length > t && _e.sort(yt));
  Ge.__r = 0;
}
function Hn(e, t, n, r, o, i, a, s, c, l, f) {
  var u, d, _, h, v, p = r && r.__k || Ln, m = t.length;
  for (n.__d = c, ro(n, t, p), c = n.__d, u = 0; u < m; u++)
    (_ = n.__k[u]) != null && typeof _ != "boolean" && typeof _ != "function" && (d = _.__i === -1 ? Oe : p[_.__i] || Oe, _.__i = u, It(e, _, d, o, i, a, s, c, l, f), h = _.__e, _.ref && d.ref != _.ref && (d.ref && At(d.ref, null, _), f.push(_.ref, _.__c || h, _)), v == null && h != null && (v = h), 65536 & _.__u || d.__k === _.__k ? c = Bn(_, c, e) : typeof _.type == "function" && _.__d !== void 0 ? c = _.__d : h && (c = h.nextSibling), _.__d = void 0, _.__u &= -196609);
  n.__d = c, n.__e = v;
}
function ro(e, t, n) {
  var r, o, i, a, s, c = t.length, l = n.length, f = l, u = 0;
  for (e.__k = [], r = 0; r < c; r++)
    a = r + u, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Se(null, o, null, null, null) : tt(o) ? Se(V, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Se(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = oo(o, n, a, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? u++ : s > a ? f > c - a ? u += s - a : u-- : s < a ? s == a - 1 && (u = s - a) : u = 0, s !== r + u && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = be(i)), bt(i, i, !1), n[a] = null, f--);
  if (f)
    for (r = 0; r < l; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = be(i)), bt(i, i));
}
function Bn(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = Bn(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (tt(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function oo(e, t, n, r) {
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
function Xt(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || no.test(t) ? n : n + "px";
}
function ze(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Xt(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Xt(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? Jt : Zt, i)) : e.removeEventListener(t, i ? Jt : Zt, i);
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
function Zt(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u)
        return;
    } else
      e.t = Date.now();
    return t(k.event ? k.event(e) : e);
  }
}
function Jt(e) {
  if (this.l)
    return this.l[e.type + !0](k.event ? k.event(e) : e);
}
function It(e, t, n, r, o, i, a, s, c, l) {
  var f, u, d, _, h, v, p, m, y, b, g, E, w, S, C, x = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = k.__b) && f(t);
  e:
    if (typeof x == "function")
      try {
        if (m = t.props, y = (f = x.contextType) && r[f.__c], b = f ? y ? y.props.value : f.__ : r, n.__c ? p = (u = t.__c = n.__c).__ = u.__E : ("prototype" in x && x.prototype.render ? t.__c = u = new x(m, b) : (t.__c = u = new G(m, b), u.constructor = x, u.render = so), y && y.sub(u), u.props = m, u.state || (u.state = {}), u.context = b, u.__n = r, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), x.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ee({}, u.__s)), ee(u.__s, x.getDerivedStateFromProps(m, u.__s))), _ = u.props, h = u.state, u.__v = t, d)
          x.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && m !== _ && u.componentWillReceiveProps != null && u.componentWillReceiveProps(m, b), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(m, u.__s, b) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (u.props = m, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), g = 0; g < u._sb.length; g++)
              u.__h.push(u._sb[g]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(m, u.__s, b), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(_, h, v);
          });
        }
        if (u.context = b, u.props = m, u.__P = e, u.__e = !1, E = k.__r, w = 0, "prototype" in x && x.prototype.render) {
          for (u.state = u.__s, u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++w < 25);
        u.state = u.__s, u.getChildContext != null && (r = ee(ee({}, r), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (v = u.getSnapshotBeforeUpdate(_, h)), Hn(e, tt(C = f != null && f.type === V && f.key == null ? f.props.children : f) ? C : [C], t, n, r, o, i, a, s, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && a.push(u), p && (u.__E = u.__ = null);
      } catch (T) {
        t.__v = null, c || i != null ? (t.__e = s, t.__u |= c ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), k.__e(T, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = io(n.__e, t, n, r, o, i, a, c, l);
  (f = k.diffed) && f(t);
}
function qn(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    At(n[r], n[++r], n[++r]);
  k.__c && k.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      k.__e(i, o.__v);
    }
  });
}
function io(e, t, n, r, o, i, a, s, c) {
  var l, f, u, d, _, h, v, p = n.props, m = t.props, y = t.type;
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
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, m.is && m), i = null, s = !1;
  }
  if (y === null)
    p === m || s && e.data === m || (e.data = m);
  else {
    if (i = i && Re.call(e.childNodes), p = n.props || Oe, !s && i != null)
      for (p = {}, l = 0; l < e.attributes.length; l++)
        p[(_ = e.attributes[l]).name] = _.value;
    for (l in p)
      _ = p[l], l == "children" || (l == "dangerouslySetInnerHTML" ? u = _ : l === "key" || l in m || ze(e, l, null, _, o));
    for (l in m)
      _ = m[l], l == "children" ? d = _ : l == "dangerouslySetInnerHTML" ? f = _ : l == "value" ? h = _ : l == "checked" ? v = _ : l === "key" || s && typeof _ != "function" || p[l] === _ || ze(e, l, _, p[l], o);
    if (f)
      s || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Hn(e, tt(d) ? d : [d], t, n, r, o && y !== "foreignObject", i, a, i ? i[0] : n.__k && be(n, 0), s, c), i != null)
      for (l = i.length; l--; )
        i[l] != null && zn(i[l]);
    s || (l = "value", h !== void 0 && (h !== e[l] || y === "progress" && !h || y === "option" && h !== p[l]) && ze(e, l, h, p[l], !1), l = "checked", v !== void 0 && v !== e[l] && ze(e, l, v, p[l], !1));
  }
  return e;
}
function At(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    k.__e(r, n);
  }
}
function bt(e, t, n) {
  var r, o;
  if (k.unmount && k.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || At(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        k.__e(i, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && bt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || zn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function so(e, t, n) {
  return this.constructor(e, n);
}
function ke(e, t, n) {
  var r, o, i, a;
  k.__ && k.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], It(t, e = (!r && n || t).__k = Q(V, null, [e]), o || Oe, Oe, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Re.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), qn(i, e, a);
}
function Kn(e, t) {
  ke(e, t, Kn);
}
function ao(e, t, n) {
  var r, o, i, a, s = ee({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Re.call(arguments, 2) : n), Se(e.type, s, r || e.key, o || e.ref, null);
}
function Gn(e, t) {
  var n = { __c: t = "__cC" + Fn++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, vt(s);
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
Re = Ln.slice, k = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Pn = 0, G.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, n), this.props)), e && ee(n, e), e != null && this.__v && (t && this._sb.push(t), vt(this));
}, G.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vt(this));
}, G.prototype.render = V, _e = [], jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ge.__r = 0, Fn = 0;
var ne, $, ct, Qt, ge = 0, Yn = [], qe = [], I = k, en = I.__b, tn = I.__r, nn = I.diffed, rn = I.__c, on = I.unmount, sn = I.__;
function me(e, t) {
  I.__h && I.__h($, e, ge || t), ge = 0;
  var n = $.__H || ($.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: qe }), n.__[e];
}
function nt(e) {
  return ge = 1, le(Qn, e);
}
function le(e, t, n) {
  var r = me(ne++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Qn(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, s);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = $, !$.u)) {
    var o = function(s, c, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (f.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, s, c, l);
      var u = !1;
      return f.forEach(function(d) {
        if (d.__N) {
          var _ = d.__[0];
          d.__ = d.__N, d.__N = void 0, _ !== d.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === s) && (!i || i.call(this, s, c, l));
    };
    $.u = !0;
    var i = $.shouldComponentUpdate, a = $.componentWillUpdate;
    $.componentWillUpdate = function(s, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, c, l), i = f;
      }
      a && a.call(this, s, c, l);
    }, $.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function re(e, t) {
  var n = me(ne++, 3);
  !I.__s && Mt(n.__H, t) && (n.__ = e, n.i = t, $.__H.__h.push(n));
}
function $e(e, t) {
  var n = me(ne++, 4);
  !I.__s && Mt(n.__H, t) && (n.__ = e, n.i = t, $.__h.push(n));
}
function Ie(e) {
  return ge = 5, rt(function() {
    return { current: e };
  }, []);
}
function Ae(e, t, n) {
  ge = 6, $e(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function rt(e, t) {
  var n = me(ne++, 7);
  return Mt(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Me(e, t) {
  return ge = 8, rt(function() {
    return e;
  }, t);
}
function Xn(e) {
  var t = $.context[e.__c], n = me(ne++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub($)), t.props.value) : e.__;
}
function Zn(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function uo(e) {
  var t = me(ne++, 10), n = nt();
  return t.__ = e, $.componentDidCatch || ($.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Jn() {
  var e = me(ne++, 11);
  if (!e.__) {
    for (var t = $.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function co() {
  for (var e; e = Yn.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ke), e.__H.__h.forEach(gt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], I.__e(t, e.__v);
      }
}
I.__b = function(e) {
  $ = null, en && en(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), sn && sn(e, t);
}, I.__r = function(e) {
  tn && tn(e), ne = 0;
  var t = ($ = e.__c).__H;
  t && (ct === $ ? (t.__h = [], $.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = qe, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ke), t.__h.forEach(gt), t.__h = [], ne = 0)), ct = $;
}, I.diffed = function(e) {
  nn && nn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Yn.push(t) !== 1 && Qt === I.requestAnimationFrame || ((Qt = I.requestAnimationFrame) || lo)(co)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== qe && (n.__ = n.__V), n.i = void 0, n.__V = qe;
  })), ct = $ = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ke), n.__h = n.__h.filter(function(r) {
        return !r.__ || gt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), rn && rn(e, t);
}, I.unmount = function(e) {
  on && on(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ke(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var an = typeof requestAnimationFrame == "function";
function lo(e) {
  var t, n = function() {
    clearTimeout(r), an && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  an && (t = requestAnimationFrame(n));
}
function Ke(e) {
  var t = $, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), $ = t;
}
function gt(e) {
  var t = $;
  e.__c = e.__(), $ = t;
}
function Mt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function er(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Ye(e, t) {
  this.props = e, this.context = t;
}
function tr(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : wt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, Q(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ye.prototype = new G()).isPureReactComponent = !0, Ye.prototype.shouldComponentUpdate = function(e, t) {
  return wt(this.props, e) || wt(this.state, t);
};
var un = k.__b;
k.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), un && un(e);
};
var fo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ye(e) {
  function t(n) {
    var r = er({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = fo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var cn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, nr = { map: cn, forEach: cn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: te }, _o = k.__e;
k.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  _o(e, t, n, r);
};
var ln = k.unmount;
function rr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = er({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return rr(r, t, n);
  })), e;
}
function or(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return or(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ce() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ir(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function sr(e) {
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
    return Q(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function ve() {
  this.u = null, this.o = null;
}
k.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), ln && ln(e);
}, (Ce.prototype = new G()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = ir(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = or(c, c.__c.__P, c.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
        l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Ce.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ce.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = rr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && Q(V, null, e.fallback);
  return o && (o.__u &= -33), [Q(V, null, t.__a ? null : e.children), o];
};
var fn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function po(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function ho(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    ke(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), ke(Q(po, { context: t.context }, e.__v), t.l);
}
function ar(e, t) {
  var n = Q(ho, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(ve.prototype = new G()).__a = function(e) {
  var t = this, n = ir(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), fn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, ve.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, ve.prototype.componentDidUpdate = ve.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    fn(e, n, t);
  });
};
var ur = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, mo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, yo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, vo = /[A-Z0-9]/g, bo = typeof document < "u", go = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Vt(e, t, n) {
  return t.__k == null && (t.textContent = ""), ke(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Pt(e, t, n) {
  return Kn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
G.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(G.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var dn = k.event;
function wo() {
}
function Eo() {
  return this.cancelBubble;
}
function No() {
  return this.defaultPrevented;
}
k.event = function(e) {
  return dn && (e = dn(e)), e.persist = wo, e.isPropagationStopped = Eo, e.isDefaultPrevented = No, e.nativeEvent = e;
};
var jt, So = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, _n = k.vnode;
k.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || bo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || go(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : yo.test(i) ? i = s : r.indexOf("-") === -1 && mo.test(i) ? i = i.replace(vo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", So)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = ur, _n && _n(e);
};
var pn = k.__r;
k.__r = function(e) {
  pn && pn(e), jt = e.__c;
};
var hn = k.diffed;
k.diffed = function(e) {
  hn && hn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), jt = null;
};
var cr = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return jt.__n[e.__c].props.value;
} } } }, Co = "17.0.2";
function lr(e) {
  return Q.bind(null, e);
}
function Ve(e) {
  return !!e && e.$$typeof === ur;
}
function fr(e) {
  return Ve(e) && e.type === V;
}
function dr(e) {
  return Ve(e) ? ao.apply(null, arguments) : e;
}
function Ft(e) {
  return !!e.__k && (ke(null, e), !0);
}
function _r(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var pr = function(e, t) {
  return e(t);
}, hr = function(e, t) {
  return e(t);
}, mr = V;
function Lt(e) {
  e();
}
function yr(e) {
  return e;
}
function vr() {
  return [!1, Lt];
}
var br = $e, gr = Ve;
function wr(e, t) {
  var n = t(), r = nt({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return $e(function() {
    o.__ = n, o.v = t, lt(o) && i({ h: o });
  }, [e, n, t]), re(function() {
    return lt(o) && i({ h: o }), e(function() {
      lt(o) && i({ h: o });
    });
  }, [e]), n;
}
function lt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var Pe = { useState: nt, useId: Jn, useReducer: le, useEffect: re, useLayoutEffect: $e, useInsertionEffect: br, useTransition: vr, useDeferredValue: yr, useSyncExternalStore: wr, startTransition: Lt, useRef: Ie, useImperativeHandle: Ae, useMemo: rt, useCallback: Me, useContext: Xn, useDebugValue: Zn, version: "17.0.2", Children: nr, render: Vt, hydrate: Pt, unmountComponentAtNode: Ft, createPortal: ar, createElement: Q, createContext: Gn, createFactory: lr, cloneElement: dr, createRef: Un, Fragment: V, isValidElement: Ve, isElement: gr, isFragment: fr, findDOMNode: _r, Component: G, PureComponent: Ye, memo: tr, forwardRef: ye, flushSync: hr, unstable_batchedUpdates: pr, StrictMode: mr, Suspense: Ce, SuspenseList: ve, lazy: sr, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cr };
const Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: nr,
  Component: G,
  Fragment: V,
  PureComponent: Ye,
  StrictMode: mr,
  Suspense: Ce,
  SuspenseList: ve,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cr,
  cloneElement: dr,
  createContext: Gn,
  createElement: Q,
  createFactory: lr,
  createPortal: ar,
  createRef: Un,
  default: Pe,
  findDOMNode: _r,
  flushSync: hr,
  forwardRef: ye,
  hydrate: Pt,
  isElement: gr,
  isFragment: fr,
  isValidElement: Ve,
  lazy: sr,
  memo: tr,
  render: Vt,
  startTransition: Lt,
  unmountComponentAtNode: Ft,
  unstable_batchedUpdates: pr,
  useCallback: Me,
  useContext: Xn,
  useDebugValue: Zn,
  useDeferredValue: yr,
  useEffect: re,
  useErrorBoundary: uo,
  useId: Jn,
  useImperativeHandle: Ae,
  useInsertionEffect: br,
  useLayoutEffect: $e,
  useMemo: rt,
  useReducer: le,
  useRef: Ie,
  useState: nt,
  useSyncExternalStore: wr,
  useTransition: vr,
  version: Co
}, Symbol.toStringTag, { value: "Module" }));
function Er(e) {
  return {
    render(t) {
      Vt(t, e);
    },
    unmount() {
      Ft(e);
    }
  };
}
function Oo(e, t) {
  return Pt(t, e), Er(e);
}
const ko = {
  createRoot: Er,
  hydrateRoot: Oo
};
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Do(e) {
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
var Nt = { exports: {} }, ft = {};
const Nr = /* @__PURE__ */ Do(Et);
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function To() {
  if (mn)
    return ft;
  mn = 1;
  var e = Nr;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ft.useSyncExternalStoreWithSelector = function(c, l, f, u, d) {
    var _ = o(null);
    if (_.current === null) {
      var h = { hasValue: !1, value: null };
      _.current = h;
    } else
      h = _.current;
    _ = a(function() {
      function p(E) {
        if (!m) {
          if (m = !0, y = E, E = u(E), d !== void 0 && h.hasValue) {
            var w = h.value;
            if (d(w, E))
              return b = w;
          }
          return b = E;
        }
        if (w = b, n(y, E))
          return w;
        var S = u(E);
        return d !== void 0 && d(w, S) ? w : (y = E, b = S);
      }
      var m = !1, y, b, g = f === void 0 ? null : f;
      return [function() {
        return p(l());
      }, g === null ? void 0 : function() {
        return p(g());
      }];
    }, [l, f, u, d]);
    var v = r(c, _[0], _[1]);
    return i(function() {
      h.hasValue = !0, h.value = v;
    }, [v]), s(v), v;
  }, ft;
}
var dt = {}, yn;
function Ro() {
  if (yn)
    return dt;
  yn = 1;
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
    var t = Nr;
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    function l(f, u, d, _, h) {
      var v = i(null), p;
      v.current === null ? (p = {
        hasValue: !1,
        value: null
      }, v.current = p) : p = v.current;
      var m = s(function() {
        var E = !1, w, S, C = function(U) {
          if (!E) {
            E = !0, w = U;
            var Y = _(U);
            if (h !== void 0 && p.hasValue) {
              var X = p.value;
              if (h(X, Y))
                return S = X, X;
            }
            return S = Y, Y;
          }
          var F = w, j = S;
          if (r(F, U))
            return j;
          var W = _(U);
          return h !== void 0 && h(j, W) ? j : (w = U, S = W, W);
        }, x = d === void 0 ? null : d, T = function() {
          return C(u());
        }, P = x === null ? void 0 : function() {
          return C(x());
        };
        return [T, P];
      }, [u, d, _, h]), y = m[0], b = m[1], g = o(f, y, b);
      return a(function() {
        p.hasValue = !0, p.value = g;
      }, [g]), c(g), g;
    }
    dt.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), dt;
}
var $o = {};
$o.NODE_ENV === "production" ? Nt.exports = To() : Nt.exports = Ro();
var Io = Nt.exports, Xe = {}, H = (
  // prettier-ignore
  // @ts-ignore
  "default" in Et ? Pe : Et
), vn = Symbol.for("react-redux-context"), bn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ao() {
  if (!H.createContext)
    return {};
  const e = bn[vn] ?? (bn[vn] = /* @__PURE__ */ new Map());
  let t = e.get(H.createContext);
  return t || (t = H.createContext(
    null
  ), Xe.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(H.createContext, t)), t;
}
var ue = /* @__PURE__ */ Ao(), Mo = () => {
  throw new Error("uSES not initialized!");
};
function zt(e = ue) {
  return function() {
    const n = H.useContext(e);
    if (Xe.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Sr = /* @__PURE__ */ zt(), Cr = Mo, Vo = (e) => {
  Cr = e;
}, Po = (e, t) => e === t;
function jo(e = ue) {
  const t = e === ue ? Sr : zt(e), n = (r, o = {}) => {
    const { equalityFn: i = Po, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o;
    if (Xe.NODE_ENV !== "production") {
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
    } = t(), d = H.useRef(!0), _ = H.useCallback(
      {
        [r.name](v) {
          const p = r(v);
          if (Xe.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: m,
              stabilityCheck: y
            } = {
              stabilityCheck: f,
              identityFunctionCheck: u,
              ...a
            };
            if (y === "always" || y === "once" && d.current) {
              const b = r(v);
              if (!i(p, b)) {
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
                    selected: p,
                    selected2: b,
                    stack: g
                  }
                );
              }
            }
            if ((m === "always" || m === "once" && d.current) && p === v) {
              let b;
              try {
                throw new Error();
              } catch (g) {
                ({ stack: b } = g);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: b }
              );
            }
            d.current && (d.current = !1);
          }
          return p;
        }
      }[r.name],
      [r, f, a.stabilityCheck]
    ), h = Cr(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      _,
      i
    );
    return H.useDebugValue(h), h;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var z = /* @__PURE__ */ jo();
function Fo(e) {
  e();
}
function Lo() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Fo(() => {
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
var gn = {
  notify() {
  },
  get: () => []
};
function zo(e, t) {
  let n, r = gn, o = 0, i = !1;
  function a(v) {
    f();
    const p = r.subscribe(v);
    let m = !1;
    return () => {
      m || (m = !0, p(), u());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = e.subscribe(c), r = Lo());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = gn);
  }
  function d() {
    i || (i = !0, f());
  }
  function _() {
    i && (i = !1, u());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: _,
    getListeners: () => r
  };
  return h;
}
var Uo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Wo = typeof navigator < "u" && navigator.product === "ReactNative", Ho = Uo || Wo ? H.useLayoutEffect : H.useEffect;
function Bo({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = H.useMemo(() => {
    const l = zo(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), s = H.useMemo(() => e.getState(), [e]);
  Ho(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || ue;
  return /* @__PURE__ */ H.createElement(c.Provider, { value: a }, n);
}
var qo = Bo;
function Or(e = ue) {
  const t = e === ue ? Sr : (
    // @ts-ignore
    zt(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ko = /* @__PURE__ */ Or();
function Go(e = ue) {
  const t = e === ue ? Ko : Or(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ie = /* @__PURE__ */ Go();
Vo(Io.useSyncExternalStoreWithSelector);
var A = {};
function M(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Yo = typeof Symbol == "function" && Symbol.observable || "@@observable", wn = Yo, _t = () => Math.random().toString(36).substring(7).split("").join("."), Xo = {
  INIT: `@@redux/INIT${/* @__PURE__ */ _t()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ _t()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_t()}`
}, pe = Xo;
function je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Zo(e) {
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
  if (ei(e))
    return "date";
  if (Qo(e))
    return "error";
  const n = Jo(e);
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
function Jo(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Qo(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ei(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ae(e) {
  let t = typeof e;
  return A.NODE_ENV !== "production" && (t = Zo(e)), t;
}
function kr(e, t, n) {
  if (typeof e != "function")
    throw new Error(A.NODE_ENV === "production" ? M(2) : `Expected the root reducer to be a function. Instead, received: '${ae(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(A.NODE_ENV === "production" ? M(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(A.NODE_ENV === "production" ? M(1) : `Expected the enhancer to be a function. Instead, received: '${ae(n)}'`);
    return n(kr)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((p, m) => {
      a.set(m, p);
    }));
  }
  function f() {
    if (c)
      throw new Error(A.NODE_ENV === "production" ? M(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function u(p) {
    if (typeof p != "function")
      throw new Error(A.NODE_ENV === "production" ? M(4) : `Expected the listener to be a function. Instead, received: '${ae(p)}'`);
    if (c)
      throw new Error(A.NODE_ENV === "production" ? M(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    l();
    const y = s++;
    return a.set(y, p), function() {
      if (m) {
        if (c)
          throw new Error(A.NODE_ENV === "production" ? M(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, l(), a.delete(y), i = null;
      }
    };
  }
  function d(p) {
    if (!je(p))
      throw new Error(A.NODE_ENV === "production" ? M(7) : `Actions must be plain objects. Instead, the actual type was: '${ae(p)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof p.type > "u")
      throw new Error(A.NODE_ENV === "production" ? M(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof p.type != "string")
      throw new Error(A.NODE_ENV === "production" ? M(17) : `Action "type" property must be a string. Instead, the actual type was: '${ae(p.type)}'. Value was: '${p.type}' (stringified)`);
    if (c)
      throw new Error(A.NODE_ENV === "production" ? M(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, p);
    } finally {
      c = !1;
    }
    return (i = a).forEach((y) => {
      y();
    }), p;
  }
  function _(p) {
    if (typeof p != "function")
      throw new Error(A.NODE_ENV === "production" ? M(10) : `Expected the nextReducer to be a function. Instead, received: '${ae(p)}`);
    r = p, d({
      type: pe.REPLACE
    });
  }
  function h() {
    const p = u;
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
          throw new Error(A.NODE_ENV === "production" ? M(11) : `Expected the observer to be an object. Instead, received: '${ae(m)}'`);
        function y() {
          const g = m;
          g.next && g.next(f());
        }
        return y(), {
          unsubscribe: p(y)
        };
      },
      [wn]() {
        return this;
      }
    };
  }
  return d({
    type: pe.INIT
  }), {
    dispatch: d,
    subscribe: u,
    getState: f,
    replaceReducer: _,
    [wn]: h
  };
}
function En(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ti(e, t, n, r) {
  const o = Object.keys(t), i = n && n.type === pe.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!je(e))
    return `The ${i} has unexpected type of "${ae(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (a.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === pe.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function ni(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: pe.INIT
    }) > "u")
      throw new Error(A.NODE_ENV === "production" ? M(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: pe.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(A.NODE_ENV === "production" ? M(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${pe.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ri(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    A.NODE_ENV !== "production" && typeof e[s] > "u" && En(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  A.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    ni(n);
  } catch (a) {
    i = a;
  }
  return function(s = {}, c) {
    if (i)
      throw i;
    if (A.NODE_ENV !== "production") {
      const u = ti(s, n, c, o);
      u && En(u);
    }
    let l = !1;
    const f = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u], _ = n[d], h = s[d], v = _(h, c);
      if (typeof v > "u") {
        const p = c && c.type;
        throw new Error(A.NODE_ENV === "production" ? M(14) : `When called with an action of type ${p ? `"${String(p)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[d] = v, l = l || v !== h;
    }
    return l = l || r.length !== Object.keys(s).length, l ? f : s;
  };
}
function Ze(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function oi(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(A.NODE_ENV === "production" ? M(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = e.map((c) => c(a));
    return i = Ze(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function xr(e) {
  return je(e) && "type" in e && typeof e.type == "string";
}
var Fe = {}, Dr = Symbol.for("immer-nothing"), Nn = Symbol.for("immer-draftable"), B = Symbol.for("immer-state"), ii = Fe.NODE_ENV !== "production" ? [
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
  if (Fe.NODE_ENV !== "production") {
    const n = ii[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var we = Object.getPrototypeOf;
function ce(e) {
  return !!e && !!e[B];
}
function oe(e) {
  var t;
  return e ? Tr(e) || Array.isArray(e) || !!e[Nn] || !!((t = e.constructor) != null && t[Nn]) || it(e) || st(e) : !1;
}
var si = Object.prototype.constructor.toString();
function Tr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = we(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === si;
}
function Je(e, t) {
  ot(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function ot(e) {
  const t = e[B];
  return t ? t.type_ : Array.isArray(e) ? 1 : it(e) ? 2 : st(e) ? 3 : 0;
}
function St(e, t) {
  return ot(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Rr(e, t, n) {
  const r = ot(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function ai(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function it(e) {
  return e instanceof Map;
}
function st(e) {
  return e instanceof Set;
}
function de(e) {
  return e.copy_ || e.base_;
}
function Ct(e, t) {
  if (it(e))
    return new Map(e);
  if (st(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Tr(e))
    return we(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[B];
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
  return Object.create(we(e), n);
}
function Ut(e, t = !1) {
  return at(e) || ce(e) || !oe(e) || (ot(e) > 1 && (e.set = e.add = e.clear = e.delete = ui), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Ut(r, !0))), e;
}
function ui() {
  L(2);
}
function at(e) {
  return Object.isFrozen(e);
}
var ci = {};
function he(e) {
  const t = ci[e];
  return t || L(0, e), t;
}
var xe;
function $r() {
  return xe;
}
function li(e, t) {
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
function Sn(e, t) {
  t && (he("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ot(e) {
  kt(e), e.drafts_.forEach(fi), e.drafts_ = null;
}
function kt(e) {
  e === xe && (xe = e.parent_);
}
function Cn(e) {
  return xe = li(xe, e);
}
function fi(e) {
  const t = e[B];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function On(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[B].modified_ && (Ot(t), L(4)), oe(e) && (e = Qe(t, e), t.parent_ || et(t, e)), t.patches_ && he("Patches").generateReplacementPatches_(
    n[B].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Qe(t, n, []), Ot(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Dr ? e : void 0;
}
function Qe(e, t, n) {
  if (at(t))
    return t;
  const r = t[B];
  if (!r)
    return Je(
      t,
      (o, i) => kn(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return et(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, a = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Je(
      i,
      (s, c) => kn(e, r, o, s, c, n, a)
    ), et(e, o, !1), n && e.patches_ && he("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function kn(e, t, n, r, o, i, a) {
  if (Fe.NODE_ENV !== "production" && o === n && L(5), ce(o)) {
    const s = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !St(t.assigned_, r) ? i.concat(r) : void 0, c = Qe(e, o, s);
    if (Rr(n, r, c), ce(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && n.add(o);
  if (oe(o) && !at(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Qe(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && et(e, o);
  }
}
function et(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ut(t, n);
}
function di(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : $r(),
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
  let o = r, i = Wt;
  n && (o = [r], i = De);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return r.draft_ = s, r.revoke_ = a, s;
}
var Wt = {
  get(e, t) {
    if (t === B)
      return e;
    const n = de(e);
    if (!St(n, t))
      return _i(e, n, t);
    const r = n[t];
    return e.finalized_ || !oe(r) ? r : r === pt(e.base_, t) ? (ht(e), e.copy_[t] = Dt(r, e)) : r;
  },
  has(e, t) {
    return t in de(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(de(e));
  },
  set(e, t, n) {
    const r = Ir(de(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = pt(de(e), t), i = o == null ? void 0 : o[B];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (ai(n, o) && (n !== void 0 || St(e.base_, t)))
        return !0;
      ht(e), xt(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return pt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ht(e), xt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = de(e), r = Reflect.getOwnPropertyDescriptor(n, t);
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
    return we(e.base_);
  },
  setPrototypeOf() {
    L(12);
  }
}, De = {};
Je(Wt, (e, t) => {
  De[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
De.deleteProperty = function(e, t) {
  return Fe.NODE_ENV !== "production" && isNaN(parseInt(t)) && L(13), De.set.call(this, e, t, void 0);
};
De.set = function(e, t, n) {
  return Fe.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && L(14), Wt.set.call(this, e[0], t, n, e[0]);
};
function pt(e, t) {
  const n = e[B];
  return (n ? de(n) : e)[t];
}
function _i(e, t, n) {
  var o;
  const r = Ir(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Ir(e, t) {
  if (!(t in e))
    return;
  let n = we(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = we(n);
  }
}
function xt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && xt(e.parent_));
}
function ht(e) {
  e.copy_ || (e.copy_ = Ct(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var pi = class {
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
      if (oe(t)) {
        const i = Cn(this), a = Dt(t, void 0);
        let s = !0;
        try {
          o = n(a), s = !1;
        } finally {
          s ? Ot(i) : kt(i);
        }
        return Sn(i, r), On(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Dr && (o = void 0), this.autoFreeze_ && Ut(o, !0), r) {
          const i = [], a = [];
          he("Patches").generateReplacementPatches_(t, o, i, a), r(i, a);
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
    oe(e) || L(8), ce(e) && (e = Ar(e));
    const t = Cn(this), n = Dt(e, void 0);
    return n[B].isManual_ = !0, kt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[B];
    (!n || !n.isManual_) && L(9);
    const { scope_: r } = n;
    return Sn(r, t), On(void 0, r);
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
    const r = he("Patches").applyPatches_;
    return ce(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Dt(e, t) {
  const n = it(e) ? he("MapSet").proxyMap_(e, t) : st(e) ? he("MapSet").proxySet_(e, t) : di(e, t);
  return (t ? t.scope_ : $r()).drafts_.push(n), n;
}
function Ar(e) {
  return ce(e) || L(10, e), Mr(e);
}
function Mr(e) {
  if (!oe(e) || at(e))
    return e;
  const t = e[B];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ct(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ct(e, !0);
  return Je(n, (r, o) => {
    Rr(n, r, Mr(o));
  }), t && (t.finalized_ = !1), n;
}
var q = new pi(), Vr = q.produce;
q.produceWithPatches.bind(
  q
);
q.setAutoFreeze.bind(q);
q.setUseStrictShallowCopy.bind(q);
q.applyPatches.bind(q);
q.createDraft.bind(q);
q.finishDraft.bind(q);
var hi = {}, mi = (e, t, n) => {
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
}, yi = (e, t, n) => {
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
}, vi = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function bi(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function gi(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function wi(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var xn = (e) => Array.isArray(e) ? e : [e];
function Ei(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return wi(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Dn(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var Ni = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...vi,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: mi
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: yi
    }
  };
}, Si = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Ci = typeof WeakRef < "u" ? WeakRef : Si, Oi = 0, Tn = 1;
function We() {
  return {
    s: Oi,
    v: void 0,
    o: null,
    p: null
  };
}
function Ht(e, t = {}) {
  let n = We();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function a() {
    var u;
    let s = n;
    const { length: c } = arguments;
    for (let d = 0, _ = c; d < _; d++) {
      const h = arguments[d];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let v = s.o;
        v === null && (s.o = v = /* @__PURE__ */ new WeakMap());
        const p = v.get(h);
        p === void 0 ? (s = We(), v.set(h, s)) : s = p;
      } else {
        let v = s.p;
        v === null && (s.p = v = /* @__PURE__ */ new Map());
        const p = v.get(h);
        p === void 0 ? (s = We(), v.set(h, s)) : s = p;
      }
    }
    const l = s;
    let f;
    if (s.s === Tn ? f = s.v : (f = e.apply(null, arguments), i++), l.s = Tn, r) {
      const d = ((u = o == null ? void 0 : o.deref) == null ? void 0 : u.call(o)) ?? o;
      d != null && r(d, f) && (f = d, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new Ci(f) : f;
    }
    return l.v = f, f;
  }
  return a.clearCache = () => {
    n = We(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function Pr(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), bi(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const f = {
      ...n,
      ...c
    }, {
      memoize: u,
      memoizeOptions: d = [],
      argsMemoize: _ = Ht,
      argsMemoizeOptions: h = [],
      devModeChecks: v = {}
    } = f, p = xn(d), m = xn(h), y = Ei(o), b = u(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...p);
    let g = !0;
    const E = _(function() {
      a++;
      const S = Dn(
        y,
        arguments
      );
      if (s = b.apply(null, S), hi.NODE_ENV !== "production") {
        const { identityFunctionCheck: C, inputStabilityCheck: x } = Ni(g, v);
        if (C.shouldRun && C.run(
          l,
          S,
          s
        ), x.shouldRun) {
          const T = Dn(
            y,
            arguments
          );
          x.run(
            { inputSelectorResults: S, inputSelectorResultsCopy: T },
            { memoize: u, memoizeOptions: p },
            arguments
          );
        }
        g && (g = !1);
      }
      return s;
    }, ...m);
    return Object.assign(E, {
      resultFunc: l,
      memoizedResultFunc: b,
      dependencies: y,
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
      argsMemoize: _
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var ki = /* @__PURE__ */ Pr(Ht), xi = Object.assign(
  (e, t = ki) => {
    gi(
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
  { withTypes: () => xi }
);
function jr(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var Di = jr(), Ti = jr, O = {}, Ri = (...e) => {
  const t = Pr(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (a, ...s) => o(ce(a) ? Ar(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
Ri(Ht);
var $i = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ze : Ze.apply(null, arguments);
}, Ii = (e) => e && typeof e.match == "function";
function Ee(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(O.NODE_ENV === "production" ? R(0) : "prepareAction did not return an object");
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => xr(r) && r.type === e, n;
}
function Ai(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Ii(e);
}
function Mi(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Vi(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = Ai
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(Mi(r.type)), n(r));
}
function Fr(e, t) {
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
var Lr = class Ne extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ne.prototype);
  }
  static get [Symbol.species]() {
    return Ne;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ne(...t[0].concat(this)) : new Ne(...t.concat(this));
  }
};
function Rn(e) {
  return oe(e) ? Vr(e, () => {
  }) : e;
}
function $n(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(O.NODE_ENV === "production" ? R(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Pi(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function ji(e, t, n) {
  const r = zr(e, t, n);
  return {
    detectMutations() {
      return Ur(e, t, r, n);
    }
  };
}
function zr(e, t = [], n, r = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), i.children = {};
    for (const a in n) {
      const s = r ? r + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (i.children[a] = zr(e, t, n[a], s));
    }
  }
  return i;
}
function Ur(e, t = [], n, r, o = !1, i = "") {
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
    if (l && t.some((h) => h instanceof RegExp ? h.test(u) : u === h))
      continue;
    const d = Ur(e, t, n.children[f], r[f], s, u);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function Fi(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(s, c, l, f) {
      return JSON.stringify(s, n(c, f), l);
    }, n = function(s, c) {
      let l = [], f = [];
      return c || (c = function(u, d) {
        return l[0] === d ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(d)).join(".") + "]";
      }), function(u, d) {
        if (l.length > 0) {
          var _ = l.indexOf(this);
          ~_ ? l.splice(_ + 1) : l.push(this), ~_ ? f.splice(_, 1 / 0, u) : f.push(u), ~l.indexOf(d) && (d = c.call(this, u, d));
        } else
          l.push(d);
        return s == null ? d : s.call(this, u, d);
      };
    }, {
      isImmutable: r = Pi,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = ji.bind(null, r, o);
    return ({
      getState: s
    }) => {
      let c = s(), l = a(c), f;
      return (u) => (d) => {
        const _ = Fr(i, "ImmutableStateInvariantMiddleware");
        _.measureTime(() => {
          if (c = s(), f = l.detectMutations(), l = a(c), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? R(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const h = u(d);
        return _.measureTime(() => {
          if (c = s(), f = l.detectMutations(), l = a(c), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? R(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), _.warnIfExceeded(), h;
      };
    };
  }
}
function Wr(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || je(e);
}
function Tt(e, t = "", n = Wr, r, o = [], i) {
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
    if (!(c && o.some((_) => _ instanceof RegExp ? _.test(u) : u === _))) {
      if (!n(f))
        return {
          keyPath: u,
          value: f
        };
      if (typeof f == "object" && (a = Tt(f, u, n, r, o, i), a))
        return a;
    }
  }
  return i && Hr(e) && i.add(e), !1;
}
function Hr(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Hr(t))
      return !1;
  return !0;
}
function Li(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = Wr,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, f = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (u) => (d) => (_) => {
      if (!xr(_))
        return d(_);
      const h = d(_), v = Fr(a, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(_.type) !== -1) && v.measureTime(() => {
        const p = Tt(_, "", t, n, o, f);
        if (p) {
          const {
            keyPath: m,
            value: y
          } = p;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, y, `
Take a look at the logic that dispatched this action: `, _, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (v.measureTime(() => {
        const p = u.getState(), m = Tt(p, "", t, n, i, f);
        if (m) {
          const {
            keyPath: y,
            value: b
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${y}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${_.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), h;
    };
  }
}
function He(e) {
  return typeof e == "boolean";
}
var zi = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let a = new Lr();
  if (n && (He(n) ? a.push(Di) : a.push(Ti(n.extraArgument))), O.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      He(r) || (s = r), a.unshift(Fi(s));
    }
    if (o) {
      let s = {};
      He(o) || (s = o), a.push(Li(s));
    }
    if (i) {
      let s = {};
      He(i) || (s = i), a.unshift(Vi(s));
    }
  }
  return a;
}, Ui = "RTK_autoBatch", Br = (e) => (t) => {
  setTimeout(t, e);
}, Wi = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Br(10), Hi = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Wi : e.type === "callback" ? e.queueNotification : Br(e.timeout), l = () => {
    a = !1, i && (i = !1, s.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const u = () => o && f(), d = r.subscribe(u);
      return s.add(f), () => {
        d(), s.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var u;
      try {
        return o = !((u = f == null ? void 0 : f.meta) != null && u[Ui]), i = !o, i && (a || (a = !0, c(l))), r.dispatch(f);
      } finally {
        o = !0;
      }
    }
  });
}, Bi = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Lr(e);
  return r && o.push(Hi(typeof r == "object" ? r : void 0)), o;
}, se = O.NODE_ENV === "production";
function qi(e) {
  const t = zi(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (je(n))
    s = ri(n);
  else
    throw new Error(O.NODE_ENV === "production" ? R(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!se && r && typeof r != "function")
    throw new Error(O.NODE_ENV === "production" ? R(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), !se && !Array.isArray(c))
      throw new Error(O.NODE_ENV === "production" ? R(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (!se && c.some((h) => typeof h != "function"))
    throw new Error(O.NODE_ENV === "production" ? R(4) : "each middleware provided to configureStore must be a function");
  let l = Ze;
  o && (l = $i({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !se,
    ...typeof o == "object" && o
  }));
  const f = oi(...c), u = Bi(f);
  if (!se && a && typeof a != "function")
    throw new Error(O.NODE_ENV === "production" ? R(5) : "`enhancers` field must be a callback");
  let d = typeof a == "function" ? a(u) : u();
  if (!se && !Array.isArray(d))
    throw new Error(O.NODE_ENV === "production" ? R(6) : "`enhancers` callback must return an array");
  if (!se && d.some((h) => typeof h != "function"))
    throw new Error(O.NODE_ENV === "production" ? R(7) : "each enhancer provided to configureStore must be a function");
  !se && c.length && !d.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const _ = l(...d);
  return kr(s, i, _);
}
function qr(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, a) {
      if (O.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(O.NODE_ENV === "production" ? R(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(O.NODE_ENV === "production" ? R(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(O.NODE_ENV === "production" ? R(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(O.NODE_ENV === "production" ? R(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, o;
    },
    addMatcher(i, a) {
      if (O.NODE_ENV !== "production" && r)
        throw new Error(O.NODE_ENV === "production" ? R(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      if (O.NODE_ENV !== "production" && r)
        throw new Error(O.NODE_ENV === "production" ? R(31) : "`builder.addDefaultCase` can only be called once");
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function Ki(e) {
  return typeof e == "function";
}
function Gi(e, t) {
  if (O.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(O.NODE_ENV === "production" ? R(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, o] = qr(t), i;
  if (Ki(e))
    i = () => Rn(e());
  else {
    const s = Rn(e);
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
        if (ce(f)) {
          const _ = u(f, c);
          return _ === void 0 ? f : _;
        } else {
          if (oe(f))
            return Vr(f, (d) => u(d, c));
          {
            const d = u(f, c);
            if (d === void 0) {
              if (f === null)
                return f;
              throw new Error(O.NODE_ENV === "production" ? R(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return f;
    }, s);
  }
  return a.getInitialState = i, a;
}
var Yi = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xi = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Yi[Math.random() * 64 | 0];
  return t;
}, Zi = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ji(e, t) {
  return `${e}/${t}`;
}
function Qi({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Zi];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(O.NODE_ENV === "production" ? R(11) : "`name` is a required option for createSlice");
    typeof process < "u" && O.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof o.reducers == "function" ? o.reducers(ts()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(b, g) {
        const E = typeof b == "string" ? b : b.type;
        if (!E)
          throw new Error(O.NODE_ENV === "production" ? R(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(O.NODE_ENV === "production" ? R(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = g, f;
      },
      addMatcher(b, g) {
        return l.sliceMatchers.push({
          matcher: b,
          reducer: g
        }), f;
      },
      exposeAction(b, g) {
        return l.actionCreators[b] = g, f;
      },
      exposeCaseReducer(b, g) {
        return l.sliceCaseReducersByName[b] = g, f;
      }
    };
    c.forEach((b) => {
      const g = s[b], E = {
        reducerName: b,
        type: Ji(i, b),
        createNotation: typeof o.reducers == "function"
      };
      rs(g) ? is(E, g, f, t) : ns(E, g, f);
    });
    function u() {
      if (O.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(O.NODE_ENV === "production" ? R(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, g = [], E = void 0] = typeof o.extraReducers == "function" ? qr(o.extraReducers) : [o.extraReducers], w = {
        ...b,
        ...l.sliceCaseReducersByType
      };
      return Gi(o.initialState, (S) => {
        for (let C in w)
          S.addCase(C, w[C]);
        for (let C of l.sliceMatchers)
          S.addMatcher(C.matcher, C.reducer);
        for (let C of g)
          S.addMatcher(C.matcher, C.reducer);
        E && S.addDefaultCase(E);
      });
    }
    const d = (b) => b, _ = /* @__PURE__ */ new Map();
    let h;
    function v(b, g) {
      return h || (h = u()), h(b, g);
    }
    function p() {
      return h || (h = u()), h.getInitialState();
    }
    function m(b, g = !1) {
      function E(S) {
        let C = S[b];
        if (typeof C > "u") {
          if (g)
            C = p();
          else if (O.NODE_ENV !== "production")
            throw new Error(O.NODE_ENV === "production" ? R(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return C;
      }
      function w(S = d) {
        const C = $n(_, g, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return $n(C, S, {
          insert: () => {
            const x = {};
            for (const [T, P] of Object.entries(o.selectors ?? {}))
              x[T] = es(P, S, p, g);
            return x;
          }
        });
      }
      return {
        reducerPath: b,
        getSelectors: w,
        get selectors() {
          return w(E);
        },
        selectSlice: E
      };
    }
    const y = {
      name: i,
      reducer: v,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: p,
      ...m(a),
      injectInto(b, {
        reducerPath: g,
        ...E
      } = {}) {
        const w = g ?? a;
        return b.inject({
          reducerPath: w,
          reducer: v
        }, E), {
          ...y,
          ...m(w, !0)
        };
      }
    };
    return y;
  };
}
function es(e, t, n, r) {
  function o(i, ...a) {
    let s = t(i);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (O.NODE_ENV !== "production")
        throw new Error(O.NODE_ENV === "production" ? R(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return o.unwrapped = e, o;
}
var Kr = /* @__PURE__ */ Qi();
function ts() {
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
function ns({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, a;
  if ("reducer" in r) {
    if (n && !os(r))
      throw new Error(O.NODE_ENV === "production" ? R(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = r.reducer, a = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? Ee(e, a) : Ee(e));
}
function rs(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function os(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function is({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(O.NODE_ENV === "production" ? R(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: f
  } = n, u = o(e, i, f);
  r.exposeAction(t, u), a && r.addCase(u.fulfilled, a), s && r.addCase(u.pending, s), c && r.addCase(u.rejected, c), l && r.addMatcher(u.settled, l), r.exposeCaseReducer(t, {
    fulfilled: a || Be,
    pending: s || Be,
    rejected: c || Be,
    settled: l || Be
  });
}
function Be() {
}
var ss = (e, t) => {
  if (typeof e != "function")
    throw new Error(O.NODE_ENV === "production" ? R(32) : `${t} is not a function`);
}, Bt = "listenerMiddleware", as = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Ee(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(O.NODE_ENV === "production" ? R(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return ss(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, us = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = as(e);
  return {
    id: Xi(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(O.NODE_ENV === "production" ? R(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => us
}), cs = Object.assign(Ee(`${Bt}/add`), {
  withTypes: () => cs
});
Ee(`${Bt}/removeAll`);
var ls = Object.assign(Ee(`${Bt}/remove`), {
  withTypes: () => ls
});
function R(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const fs = [], Gr = Kr({
  name: "fields",
  initialState: fs,
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
          isValid: !0,
          isInteracted: !1,
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
  registerForm: ds,
  registerField: _s,
  updateField: K,
  updateFieldErrors: In,
  updateMeta: Te
} = Gr.actions, ps = Gr.reducer, hs = (e) => (t) => t.forms[e], ms = (e) => (t) => t.forms[e].meta.step, Yr = (e) => (t) => t.forms[e].fields, Le = (e, t) => (n) => n.forms[e].fields[t], ut = (e) => (t) => t.forms[e].meta, ys = {
  environment: "production",
  errors: {}
}, Xr = Kr({
  name: "misc",
  initialState: ys,
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
  registerErrors: vs,
  setEnvironment: bs
} = Xr.actions, gs = Xr.reducer, ws = () => (e) => e.misc.errors;
function Zr(e, t) {
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
function D(e) {
  return e.map((t) => t ? "dkf_" + t : !1).filter(Boolean).join(" ");
}
function Es(e, t) {
  return new CustomEvent(e, {
    detail: t
  });
}
function Ns(e, t) {
  e.dispatchEvent(t);
}
function Jr(e) {
  return ["text", "number", "email", "phone", "checkbox", "radio", "hidden"].includes(e.subType);
}
function Ss() {
  const e = Ie({}), t = (n, r, o) => {
    var i;
    Jr(n) && (o(_s({
      formInstance: r,
      name: n.name,
      value: n.defaultValue,
      validationRules: n.validationRules
    })), e.current[n.name] = Pe.createRef()), (i = n.nodes) == null || i.forEach((a) => t(a, r, o));
  };
  return {
    fieldRefs: e,
    registerNode: t
  };
}
function Cs(e, t, n) {
  return K({
    formInstance: e,
    name: t,
    value: n
  });
}
function Os(e, t, n) {
}
function ks(e, t, n) {
  return Te({
    formInstance: e,
    name: t,
    value: n
  });
}
function xs(e) {
  return () => {
  };
}
const An = {
  update_field: Cs,
  set_focus: Os,
  update_meta: ks,
  submit: xs
};
var Ds = 0;
function N(e, t, n, r, o, i) {
  var a, s, c = {};
  for (s in t)
    s == "ref" ? a = t[s] : c[s] = t[s];
  var l = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ds, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      c[s] === void 0 && (c[s] = a[s]);
  return k.vnode && k.vnode(l), l;
}
function Ts(e) {
  const {
    formInstance: t,
    name: n,
    label: r,
    type: o,
    events: i,
    disabled: a = !1,
    ...s
  } = e, c = ie(), l = z(ut(t)), {
    isLoading: f,
    isValid: u
  } = l, d = D(["button-container", "button-container--" + n]), _ = D(["button", "button--" + n, "button--" + (e.buttonType || "primary")]);
  return N("div", {
    className: d,
    children: N("button", {
      type: o,
      className: _,
      onClick: () => {
        i && i.forEach((v) => {
          if (v.mapping)
            for (const p in v.mapping) {
              const m = v.mapping[p];
              c(An[v.name](t, p, m));
            }
          else
            c(An[v.name](t));
        });
      },
      disabled: u === !1 || f === !0,
      children: r
    }, n)
  });
}
const Rs = ye(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: a,
    defaultValue: s,
    visibilityConditions: c,
    validationRules: l,
    helpText: f,
    emailTag: u,
    storeAsDonorMeta: d,
    showInReceipt: _,
    childNodes: h,
    disabled: v = !1,
    ...p
  } = t, m = z(Yr(r)), y = ie(), b = Zr(m, c);
  if (re(() => {
    b && y(K({
      formInstance: r,
      name: o,
      value: s
    }));
  }, [b]), m[o] === void 0 || !b)
    return null;
  const g = D(["input", "input-checkbox", "input-checkbox--" + o]), E = D(["input--option"]);
  return N("div", {
    className: g,
    children: a ? a.map((w) => N("div", {
      className: E,
      ref: n,
      children: [N("input", {
        id: r + o + w.value,
        name: o,
        type: "checkbox",
        value: w.value,
        checked: m[o].value === w.value,
        onChange: () => y(K({
          formInstance: r,
          name: o,
          value: w.value
        }))
      }), N("label", {
        className: D(["input--label"]),
        htmlFor: r + o + w.value,
        tabIndex: 0,
        children: w.label
      })]
    }, o + w.value)) : N(V, {
      children: [N("input", {
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
      }, o), N("label", {
        className: D(["input--label"]),
        htmlFor: r + o,
        tabIndex: 0,
        children: i
      })]
    })
  });
});
var $s = "Expected a function", Mn = NaN, Is = "[object Symbol]", As = /^\s+|\s+$/g, Ms = /^[-+]0x[0-9a-f]+$/i, Vs = /^0b[01]+$/i, Ps = /^0o[0-7]+$/i, js = parseInt, Fs = typeof Ue == "object" && Ue && Ue.Object === Object && Ue, Ls = typeof self == "object" && self && self.Object === Object && self, zs = Fs || Ls || Function("return this")(), Us = Object.prototype, Ws = Us.toString, Hs = Math.max, Bs = Math.min, mt = function() {
  return zs.Date.now();
};
function qs(e, t, n) {
  var r, o, i, a, s, c, l = 0, f = !1, u = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError($s);
  t = Vn(t) || 0, Rt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? Hs(Vn(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function _(w) {
    var S = r, C = o;
    return r = o = void 0, l = w, a = e.apply(C, S), a;
  }
  function h(w) {
    return l = w, s = setTimeout(m, t), f ? _(w) : a;
  }
  function v(w) {
    var S = w - c, C = w - l, x = t - S;
    return u ? Bs(x, i - C) : x;
  }
  function p(w) {
    var S = w - c, C = w - l;
    return c === void 0 || S >= t || S < 0 || u && C >= i;
  }
  function m() {
    var w = mt();
    if (p(w))
      return y(w);
    s = setTimeout(m, v(w));
  }
  function y(w) {
    return s = void 0, d && r ? _(w) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), l = 0, r = c = o = s = void 0;
  }
  function g() {
    return s === void 0 ? a : y(mt());
  }
  function E() {
    var w = mt(), S = p(w);
    if (r = arguments, o = this, c = w, S) {
      if (s === void 0)
        return h(c);
      if (u)
        return s = setTimeout(m, t), _(c);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return E.cancel = b, E.flush = g, E;
}
function Rt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Ks(e) {
  return !!e && typeof e == "object";
}
function Gs(e) {
  return typeof e == "symbol" || Ks(e) && Ws.call(e) == Is;
}
function Vn(e) {
  if (typeof e == "number")
    return e;
  if (Gs(e))
    return Mn;
  if (Rt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Rt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(As, "");
  var n = Vs.test(e);
  return n || Ps.test(e) ? js(e.slice(2), n ? 2 : 8) : Ms.test(e) ? Mn : +e;
}
var Ys = qs;
const qt = /* @__PURE__ */ xo(Ys), Xs = (e, t) => {
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
}, Zs = (e, t) => {
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
}, Js = (e, t) => typeof t == "string", Qs = (e, t) => Number.isInteger(t), ea = (e, t) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t), ta = (e, t) => t != null && t.trim() !== "", na = {
  min: Xs,
  max: Zs,
  string: Js,
  numeric: Qs,
  required: ta,
  email: ea,
  // TODO: Implement this.
  nullable: () => {
  }
};
function Kt(e, t, n, r) {
  const o = z(ws());
  z(Le(e, t));
  const i = ie();
  return {
    setValidateField: (s) => {
      if (!r || r.length === 0)
        return;
      let c = [];
      for (const l of r) {
        const f = l.split(":"), u = na[f[0]];
        if (!u) {
          console.error(`Validator not found for rule: ${l}`);
          continue;
        }
        const d = u(l, s);
        if (console.log("Validator", l, s, d ? "true" : "false"), !d && o[f[0]]) {
          let _ = o[f[0]];
          _.includes(":attribute") && (_ = _.replace(":attribute", n)), _.includes(":max") && (_ = _.replace(":max", f[1])), _.includes(":min") && (_ = _.replace(":min", f[1])), c.push(_);
        }
      }
      c.length > 0 ? (i(In({
        formInstance: e,
        name: t,
        errors: c
      })), i(Te({
        formInstance: e,
        name: "isValid",
        value: !1
      }))) : (i(In({
        formInstance: e,
        name: t,
        errors: c
      })), i(Te({
        formInstance: e,
        name: "isValid",
        value: !0
      })));
    }
  };
}
const ra = ye(function(t, n) {
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
    storeAsDonorMeta: d,
    showInReceipt: _,
    type: h,
    subType: v,
    childNodes: p,
    disabled: m = !1,
    ...y
  } = t, [b, g] = le((W, fe) => ({
    ...W,
    ...fe
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: E,
    isInvalid: w
  } = b, S = z(Le(r, o)), C = ie(), x = S.errors, T = z(ut(r)), {
    isLoading: P
  } = T, {
    setValidateField: U
  } = Kt(r, o, i, c);
  Ae(n, () => ({
    validate() {
      U(S.value);
    }
  }), [S]);
  const Y = Me(qt((W) => {
    C(K({
      formInstance: r,
      name: o,
      value: W.target.value
    }));
    let fe = W.target.value.length > 0;
    U(W.target.value), g({
      isActive: fe
    });
  }, 300), [C, r, o, U, g]), X = D(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + v]), F = D(["input", "input--" + o, "input-type--" + v, E && "input--active", x && x.length > 0 && "input--invalid"]), j = D(["input--field"]);
  return N("div", {
    className: X,
    children: [N("label", {
      className: F,
      children: [i && N("span", {
        className: D(["input--label"]),
        children: i
      }), N("input", {
        type: "email",
        className: j,
        disabled: m || P === !0,
        autoComplete: "email",
        ...y,
        onChange: Y,
        ref: n
      })]
    }), x && x.length !== 0 && N(V, {
      children: x.map((W, fe) => N("div", {
        className: D(["input--error"]),
        children: W
      }, fe))
    })]
  });
});
function oa(e) {
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
    subType: d,
    childNodes: _,
    disabled: h = !1,
    ...v
  } = e, p = D(["html", ...Array.isArray(c) ? c : []]);
  return N("div", {
    className: D(["html_wrapper"]),
    children: N("div", {
      className: p,
      dangerouslySetInnerHTML: {
        __html: n
      }
    })
  });
}
const ia = ye(function(t, n) {
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
    showInReceipt: d,
    type: _,
    subType: h,
    childNodes: v,
    disabled: p = !1,
    ...m
  } = t, [y, b] = le((F, j) => ({
    ...F,
    ...j
  }), {
    isActive: !1
  }), {
    isActive: g
  } = y, E = z(Le(r, o)), w = ie(), S = E.errors, C = z(ut(r)), {
    isLoading: x
  } = C, {
    setValidateField: T
  } = Kt(r, o, i, c);
  Ae(n, () => ({
    validate() {
      T(E.value);
    }
  }), [E]);
  const P = Me(qt((F) => {
    w(K({
      formInstance: r,
      name: o,
      value: F.target.value
    }));
    let j = !1;
    F.target.value.length > 0 && (j = !0), T(F.target.value), b({
      isActive: j
    });
  }, 300), [w, r, o, T, b]), U = D(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + h]), Y = D(["input", "input--" + o, "input-type--" + h, g && "input--active", S && S.length > 0 && "input--invalid"]), X = D(["input--field"]);
  return N("div", {
    className: U,
    children: [N("label", {
      className: Y,
      children: [i && N("span", {
        className: D(["input--label"]),
        children: i
      }), N("input", {
        type: "text",
        className: X,
        disabled: p || x === !0,
        ...m,
        value: E.value,
        onChange: P,
        ref: n
      })]
    }), S && S.length !== 0 && N(V, {
      children: S.map((F, j) => N("div", {
        className: D(["input--error"]),
        children: F
      }, j))
    })]
  });
}), $t = qi({
  reducer: {
    misc: gs,
    forms: ps
  }
});
function Qr(e) {
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
function sa({
  childNodes: e,
  formInstance: t,
  fieldrefs: n
}) {
  const r = ie(), i = $t.getState().forms[t].fields, a = $t.getState().misc.environment, s = z(ut(t)), c = Ie(null);
  re(() => {
    if (c.current) {
      const d = c.current.closest(".fundraising-form-wrapper");
      if (d)
        return s.step > 1 ? d.classList.add("fundraising-form-wrapper--stepped") : d.classList.remove("fundraising-form-wrapper--stepped"), () => {
          d.classList.remove("fundraising-form-wrapper--stepped");
        };
    }
  }, [c, s]);
  const l = Me((d) => {
    d.preventDefault(), qt(() => {
      let v = !0;
      const p = {
        form_id: s.formId,
        payment_method: s.payment_method
      };
      Object.values(n.current).forEach((m) => {
        var y, b;
        (b = (y = m.current) == null ? void 0 : y.validate) == null || b.call(y);
      });
      for (const m in i)
        if (i.hasOwnProperty(m)) {
          const y = i[m];
          y.value && (p[m] = y.value), y.errors && y.errors.length > 0 && (v = !1), y.validationRules && y.validationRules.indexOf("required") !== -1 && !y.value && (v = !1);
        }
      if (!v) {
        console.log("Form is not valid");
        return;
      }
      r(Te({
        formInstance: t,
        name: "isLoading",
        value: !0
      })), f(p).then((m) => {
        m.url && (window.location.href = m.url);
      }).catch((m) => {
        r(Te({
          formInstance: t,
          name: "isLoading",
          value: !1
        })), console.error(m);
      });
    }, 300)();
  }, [n, i, s.formId, s.payment_method, r, t]);
  async function f(d) {
    return await (await fetch(Qr(a) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    })).json();
  }
  const u = D(["form", "form_instance--" + t, (s == null ? void 0 : s.formId) && "form_id--" + (s == null ? void 0 : s.formId), (s == null ? void 0 : s.formCategory) && "form_category--" + (s == null ? void 0 : s.formCategory), (s == null ? void 0 : s.formTeam) && "form_team--" + (s == null ? void 0 : s.formTeam)]);
  return N("div", {
    ref: c,
    className: D(["form_wrapper"]),
    children: N("form", {
      className: u,
      onSubmit: l,
      noValidate: !0,
      children: e
    })
  });
}
function aa({
  childNodes: e,
  name: t
}) {
  const n = D(["group", "group--" + t]);
  return N("div", {
    className: n,
    children: e
  });
}
const ua = ye(function(t, n) {
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
    storeAsDonorMeta: d,
    showInReceipt: _,
    type: h,
    subType: v,
    events: p,
    childNodes: m,
    disabled: y = !1,
    ...b
  } = t, [g, E] = le((Z, J) => ({
    ...Z,
    ...J
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: w,
    isInvalid: S
  } = g, C = z(Le(r, o)), x = ie(), T = C.errors, {
    setValidateField: P
  } = Kt(r, o, i, c);
  Ae(n, () => ({
    validate() {
      P(C.value);
    }
  }), [C]);
  const U = (Z) => {
    Z.preventDefault();
    let J = Number(Z.target.value);
    J === 0 && (J = ""), x(K({
      formInstance: r,
      name: o,
      value: J
    })), u && x(K({
      formInstance: r,
      name: u,
      value: J
    }));
    let Gt = !1;
    J && (Gt = !0), P(J), E({
      isActive: Gt
    });
  }, Y = c.find((Z) => Z.startsWith("min:")), X = Y ? Number(Y.split(":")[1]) : void 0, F = c.find((Z) => Z.startsWith("max:")), j = F ? Number(F.split(":")[1]) : void 0, W = D(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + v]), fe = D(["input", "input--" + o, "input-type--" + v, w && "input--active", T && T.length > 0 && "input--invalid"]), to = D(["input--field"]);
  return N("div", {
    className: W,
    children: [N("label", {
      className: fe,
      children: [i && N("span", {
        className: D(["input--label"]),
        children: i
      }), N("input", {
        type: "number",
        className: to,
        disabled: y,
        ...b,
        value: C.value,
        onChange: U,
        ref: n,
        ...X !== void 0 && {
          min: X
        },
        ...j !== void 0 && {
          max: j
        }
      })]
    }), T && T.length !== 0 && N(V, {
      children: T.map((Z, J) => N("div", {
        className: D(["input--error"]),
        children: Z
      }, J))
    })]
  });
}), ca = ye(function(t, n) {
  const {
    formInstance: r,
    name: o,
    label: i,
    options: a,
    defaultValue: s,
    visibilityConditions: c,
    validationRules: l,
    helpText: f,
    emailTag: u,
    alias: d,
    storeAsDonorMeta: _,
    showInReceipt: h,
    type: v,
    subType: p,
    childNodes: m,
    disabled: y = !1,
    ...b
  } = t, g = z(Yr(r));
  z(Le(r, o));
  const E = ie(), w = d || o, S = D(["input", "input-radio", "input-radio--" + o]), C = D(["input--option"]);
  re(() => {
    a && !a.some((T) => T.value === g[o].value) && (E(K({
      formInstance: r,
      name: o,
      value: s
    })), d && E(K({
      formInstance: r,
      name: d,
      value: s
    })));
  }, [g.frequency.value]);
  const x = (T, P) => {
    E(K({
      formInstance: r,
      name: o,
      value: P
    })), d && E(K({
      formInstance: r,
      name: d,
      value: P
    }));
  };
  return N("div", {
    className: S,
    children: a ? a.map((T) => N("label", {
      className: C,
      ref: n,
      children: [N("input", {
        name: o,
        type: "radio",
        value: T.value,
        checked: g[w].value === T.value,
        onChange: (P) => x(P, T.value)
      }), N("span", {
        className: D(["input--label"]),
        children: T.label
      })]
    }, o + T.value)) : N("label", {
      className: C,
      children: [N("input", {
        name: o,
        type: "radio",
        value: "true",
        checked: !!g[w].value,
        onChange: (T) => x(T, !0),
        ref: n
      }, o), N("span", {
        className: D(["input--label"]),
        tabIndex: 0,
        children: i
      })]
    })
  });
});
function la({
  childNodes: e
}) {
  const t = D(["section"]);
  return N("div", {
    className: t,
    children: e
  });
}
function fa({
  formInstance: e,
  childNodes: t
}) {
  const n = z(ms(e)), r = D(["steps"]), o = n > 0 && n <= t.length ? t[n - 1] : null, i = o ? Pe.cloneElement(o, {
    instance: n
  }) : null;
  return N("div", {
    className: r,
    children: i
  });
}
function da({
  childNodes: e,
  instance: t
}) {
  const n = D(["step", "step-" + t]);
  return N("div", {
    className: n,
    children: e
  });
}
function _a({
  formId: e,
  env: t,
  locale: n,
  setAppState: r
}) {
  const [o, i] = le((d, _) => ({
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
  } = o, l = Ie(null);
  async function f(d, _) {
    l.current = new AbortController(), setTimeout(() => {
      i({
        isDelayed: !0
      });
    }, 2e3), fetch(Qr(_) + "/api/v1/form/config/" + d + "?locale=" + n, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      signal: l.current.signal
    }).then((h) => h.json()).then((h) => {
      r({
        isLoading: !1,
        formCategory: h.campaign,
        formTeam: h.team,
        config: JSON.parse(h.config),
        errors: h.errors
      }), i({
        isLoading: !1,
        error: null
      });
    }).catch((h) => {
      i({
        isLoading: !1,
        isDelayed: !1,
        error: h
      });
    });
  }
  const u = () => {
    i({
      isLoading: !0,
      isDelayed: !1,
      error: null
    }), f(e, t);
  };
  return re(() => {
    e && u();
  }, [r]), N("div", {
    className: D(["loader-container"]),
    children: N("div", {
      className: D(["loader", "loader-" + status]),
      children: ["Loading...", s && N(V, {
        children: [N("p", {
          children: "Loading the form is taking longer than usual. It is still loading but you can cancel and/or retry."
        }), N("button", {
          onClick: () => l.current.abort(),
          children: "Cancel"
        }), N("button", {
          onClick: () => u(),
          children: "Retry"
        })]
      }), c && N(V, {
        children: [N("p", {
          children: "Failed to fetch the form, please try again."
        }), N("button", {
          onClick: () => u(),
          children: "Retry"
        })]
      })]
    })
  });
}
const pa = {
  button: Ts,
  checkbox: Rs,
  email: ra,
  html: oa,
  text: ia,
  group: aa,
  number: ua,
  radio: ca,
  section: la,
  steps: fa,
  step: da,
  form: sa
};
function ha({
  formInstance: e,
  formId: t,
  env: n = "production",
  locale: r = "en"
}) {
  const o = z(hs(e)), i = ie(), [a, s] = le((y, b) => ({
    ...y,
    ...b
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
    error: h
  } = a, {
    fieldRefs: v,
    registerNode: p
  } = Ss();
  if (re(() => {
    if (c === !1) {
      const y = Es("fundyFormLoaded", {
        detail: {
          formInstance: e
        }
      });
      Ns(document, y);
    }
  }, [c]), re(() => {
    i(ds({
      formInstance: e,
      formId: t,
      formCategory: f,
      formTeam: u,
      step: 0
    })), i(bs({
      env: n
    })), _ && i(vs({
      errors: _
    })), c === !1 && l === !1 && (p(d, e, i), s({
      isInitialized: !0
    }));
  }, [e, c]), c === !0)
    return N(_a, {
      formId: t,
      env: n,
      locale: r,
      setAppState: s
    });
  const m = (y, b) => {
    let g = null;
    if (g = pa[y.subType], !g || !Zr(o.fields, y.visibilityConditions))
      return null;
    const E = y.nodes ? y.nodes.map((S) => m(S, b)) : null, w = Jr(y) ? v.current[y.name] : null;
    return N(g, {
      formInstance: b,
      ref: w,
      childNodes: E,
      fieldrefs: v,
      ...y
    }, y.name);
  };
  return o === void 0 ? null : c || l === !1 ? N("div", {
    className: D(["loading"]),
    children: N("div", {
      className: D(["loading__message"]),
      children: "Loading..."
    })
  }) : N(V, {
    children: m(d, e)
  });
}
let ma = 0;
function ya() {
  return ma++;
}
const eo = (e, t, n) => {
  if (e.nodeType === 3) {
    const r = e.nodeValue.match(t);
    if (r) {
      const o = n(r);
      e.parentNode.replaceChild(o, e);
    }
  } else
    e.childNodes.forEach((r) => eo(r, t, n));
}, va = /\[fundraising-form(?: id="(\d+)")?(?: env="(\w+)")?(?: locale="(\w+)")?\]/, ba = (e) => {
  const t = document.createElement("div");
  return t.className = "fundraising-form", t.setAttribute("data-form-id", e[1]), t.setAttribute("data-env", e[2]), t;
};
eo(document.body, va, ba);
for (const e of document.getElementsByClassName("fundraising-form")) {
  const t = ya(), n = e.getAttribute("data-form-id") ?? "0", r = e.getAttribute("data-env") ?? "production", o = e.getAttribute("data-locale") ?? "en";
  ko.createRoot(e).render(N(Pe.StrictMode, {
    children: N(qo, {
      store: $t,
      children: N(ha, {
        formInstance: t,
        formId: n,
        env: r,
        locale: o
      })
    })
  }));
}
