var Ie, k, Vn, _e, Yt, jn, yt, Fn, ke = {}, Ln = [], no = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, tt = Array.isArray;
function te(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ie.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ce(e, a, r, o, null);
}
function Ce(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Vn, __i: -1, __u: 0 };
  return o == null && k.vnode != null && k.vnode(i), i;
}
function Un() {
  return { current: null };
}
function P(e) {
  return e.children;
}
function G(e, t) {
  this.props = e, this.context = t;
}
function ge(e, t) {
  if (t == null)
    return e.__ ? ge(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ge(e) : null;
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
    e.__d && (t = _e.length, r = void 0, i = (o = (n = e).__v).__e, s = [], c = [], (a = n.__P) && ((r = te({}, o)).__v = o.__v + 1, k.vnode && k.vnode(r), At(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? ge(o), !!(32 & o.__u), c), r.__v = o.__v, r.__.__k[r.__i] = r, qn(s, r, c), r.__e != i && Wn(r)), _e.length > t && _e.sort(yt));
  Ge.__r = 0;
}
function Hn(e, t, n, r, o, i, a, s, c, l, f) {
  var u, _, d, m, y, p = r && r.__k || Ln, h = t.length;
  for (n.__d = c, ro(n, t, p), c = n.__d, u = 0; u < h; u++)
    (d = n.__k[u]) != null && typeof d != "boolean" && typeof d != "function" && (_ = d.__i === -1 ? ke : p[d.__i] || ke, d.__i = u, At(e, d, _, o, i, a, s, c, l, f), m = d.__e, d.ref && _.ref != d.ref && (_.ref && $t(_.ref, null, d), f.push(d.ref, d.__c || m, d)), y == null && m != null && (y = m), 65536 & d.__u || _.__k === d.__k ? c = Bn(d, c, e) : typeof d.type == "function" && d.__d !== void 0 ? c = d.__d : m && (c = m.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = c, n.__e = y;
}
function ro(e, t, n) {
  var r, o, i, a, s, c = t.length, l = n.length, f = l, u = 0;
  for (e.__k = [], r = 0; r < c; r++)
    a = r + u, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Ce(null, o, null, null, null) : tt(o) ? Ce(P, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Ce(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = oo(o, n, a, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? u++ : s > a ? f > c - a ? u += s - a : u-- : s < a ? s == a - 1 && (u = s - a) : u = 0, s !== r + u && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = ge(i)), gt(i, i, !1), n[a] = null, f--);
  if (f)
    for (r = 0; r < l; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = ge(i)), gt(i, i));
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
function ne(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (tt(e) ? e.some(function(n) {
    ne(n, t);
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
function At(e, t, n, r, o, i, a, s, c, l) {
  var f, u, _, d, m, y, p, h, b, g, w, E, v, S, C, D = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = k.__b) && f(t);
  e:
    if (typeof D == "function")
      try {
        if (h = t.props, b = (f = D.contextType) && r[f.__c], g = f ? b ? b.props.value : f.__ : r, n.__c ? p = (u = t.__c = n.__c).__ = u.__E : ("prototype" in D && D.prototype.render ? t.__c = u = new D(h, g) : (t.__c = u = new G(h, g), u.constructor = D, u.render = so), b && b.sub(u), u.props = h, u.state || (u.state = {}), u.context = g, u.__n = r, _ = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), D.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = te({}, u.__s)), te(u.__s, D.getDerivedStateFromProps(h, u.__s))), d = u.props, m = u.state, u.__v = t, _)
          D.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && h !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(h, g), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(h, u.__s, g) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (u.props = h, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), w = 0; w < u._sb.length; w++)
              u.__h.push(u._sb[w]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(h, u.__s, g), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, m, y);
          });
        }
        if (u.context = g, u.props = h, u.__P = e, u.__e = !1, E = k.__r, v = 0, "prototype" in D && D.prototype.render) {
          for (u.state = u.__s, u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, E && E(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++v < 25);
        u.state = u.__s, u.getChildContext != null && (r = te(te({}, r), u.getChildContext())), _ || u.getSnapshotBeforeUpdate == null || (y = u.getSnapshotBeforeUpdate(d, m)), Hn(e, tt(C = f != null && f.type === P && f.key == null ? f.props.children : f) ? C : [C], t, n, r, o, i, a, s, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && a.push(u), p && (u.__E = u.__ = null);
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
    $t(n[r], n[++r], n[++r]);
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
  var l, f, u, _, d, m, y, p = n.props, h = t.props, b = t.type;
  if (b === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((d = i[l]) && "setAttribute" in d == !!b && (b ? d.localName === b : d.nodeType === 3)) {
        e = d, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (b === null)
      return document.createTextNode(h);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, h.is && h), i = null, s = !1;
  }
  if (b === null)
    p === h || s && e.data === h || (e.data = h);
  else {
    if (i = i && Ie.call(e.childNodes), p = n.props || ke, !s && i != null)
      for (p = {}, l = 0; l < e.attributes.length; l++)
        p[(d = e.attributes[l]).name] = d.value;
    for (l in p)
      d = p[l], l == "children" || (l == "dangerouslySetInnerHTML" ? u = d : l === "key" || l in h || ze(e, l, null, d, o));
    for (l in h)
      d = h[l], l == "children" ? _ = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? m = d : l == "checked" ? y = d : l === "key" || s && typeof d != "function" || p[l] === d || ze(e, l, d, p[l], o);
    if (f)
      s || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Hn(e, tt(_) ? _ : [_], t, n, r, o && b !== "foreignObject", i, a, i ? i[0] : n.__k && ge(n, 0), s, c), i != null)
      for (l = i.length; l--; )
        i[l] != null && zn(i[l]);
    s || (l = "value", m !== void 0 && (m !== e[l] || b === "progress" && !m || b === "option" && m !== p[l]) && ze(e, l, m, p[l], !1), l = "checked", y !== void 0 && y !== e[l] && ze(e, l, y, p[l], !1));
  }
  return e;
}
function $t(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    k.__e(r, n);
  }
}
function gt(e, t, n) {
  var r, o;
  if (k.unmount && k.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || $t(r, null, t)), (r = e.__c) != null) {
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
      r[o] && gt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || zn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function so(e, t, n) {
  return this.constructor(e, n);
}
function xe(e, t, n) {
  var r, o, i, a;
  k.__ && k.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], At(t, e = (!r && n || t).__k = ee(P, null, [e]), o || ke, ke, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Ie.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), qn(i, e, a);
}
function Kn(e, t) {
  xe(e, t, Kn);
}
function ao(e, t, n) {
  var r, o, i, a, s = te({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ie.call(arguments, 2) : n), Ce(e.type, s, r || e.key, o || e.ref, null);
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
Ie = Ln.slice, k = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Vn = 0, G.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof e == "function" && (e = e(te({}, n), this.props)), e && te(n, e), e != null && this.__v && (t && this._sb.push(t), vt(this));
}, G.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vt(this));
}, G.prototype.render = P, _e = [], jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ge.__r = 0, Fn = 0;
var re, I, ct, Qt, be = 0, Yn = [], qe = [], A = k, en = A.__b, tn = A.__r, nn = A.diffed, rn = A.__c, on = A.unmount, sn = A.__;
function me(e, t) {
  A.__h && A.__h(I, e, be || t), be = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: qe }), n.__[e];
}
function nt(e) {
  return be = 1, le(Qn, e);
}
function le(e, t, n) {
  var r = me(re++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Qn(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, s);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.u)) {
    var o = function(s, c, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, s, c, l);
      var u = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var d = _.__[0];
          _.__ = _.__N, _.__N = void 0, d !== _.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === s) && (!i || i.call(this, s, c, l));
    };
    I.u = !0;
    var i = I.shouldComponentUpdate, a = I.componentWillUpdate;
    I.componentWillUpdate = function(s, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, c, l), i = f;
      }
      a && a.call(this, s, c, l);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Q(e, t) {
  var n = me(re++, 3);
  !A.__s && Mt(n.__H, t) && (n.__ = e, n.i = t, I.__H.__h.push(n));
}
function Ae(e, t) {
  var n = me(re++, 4);
  !A.__s && Mt(n.__H, t) && (n.__ = e, n.i = t, I.__h.push(n));
}
function Ne(e) {
  return be = 5, rt(function() {
    return { current: e };
  }, []);
}
function $e(e, t, n) {
  be = 6, Ae(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function rt(e, t) {
  var n = me(re++, 7);
  return Mt(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Me(e, t) {
  return be = 8, rt(function() {
    return e;
  }, t);
}
function Xn(e) {
  var t = I.context[e.__c], n = me(re++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function Zn(e, t) {
  A.useDebugValue && A.useDebugValue(t ? t(e) : e);
}
function uo(e) {
  var t = me(re++, 10), n = nt();
  return t.__ = e, I.componentDidCatch || (I.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Jn() {
  var e = me(re++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; )
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
        e.__H.__h.forEach(Ke), e.__H.__h.forEach(bt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], A.__e(t, e.__v);
      }
}
A.__b = function(e) {
  I = null, en && en(e);
}, A.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), sn && sn(e, t);
}, A.__r = function(e) {
  tn && tn(e), re = 0;
  var t = (I = e.__c).__H;
  t && (ct === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = qe, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ke), t.__h.forEach(bt), t.__h = [], re = 0)), ct = I;
}, A.diffed = function(e) {
  nn && nn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Yn.push(t) !== 1 && Qt === A.requestAnimationFrame || ((Qt = A.requestAnimationFrame) || lo)(co)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== qe && (n.__ = n.__V), n.i = void 0, n.__V = qe;
  })), ct = I = null;
}, A.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ke), n.__h = n.__h.filter(function(r) {
        return !r.__ || bt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], A.__e(r, n.__v);
    }
  }), rn && rn(e, t);
}, A.unmount = function(e) {
  on && on(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ke(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && A.__e(t, n.__v));
};
var an = typeof requestAnimationFrame == "function";
function lo(e) {
  var t, n = function() {
    clearTimeout(r), an && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  an && (t = requestAnimationFrame(n));
}
function Ke(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function bt(e) {
  var t = I;
  e.__c = e.__(), I = t;
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
    return this.shouldComponentUpdate = n, ee(e, o);
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
  return e == null ? null : ne(ne(e).map(t));
}, nr = { map: cn, forEach: cn, count: function(e) {
  return e ? ne(e).length : 0;
}, only: function(e) {
  var t = ne(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: ne }, _o = k.__e;
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
function Oe() {
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
    return ee(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function ve() {
  this.u = null, this.o = null;
}
k.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), ln && ln(e);
}, (Oe.prototype = new G()).__c = function(e, t) {
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
}, Oe.prototype.componentWillUnmount = function() {
  this.t = [];
}, Oe.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = rr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && ee(P, null, e.fallback);
  return o && (o.__u &= -33), [ee(P, null, t.__a ? null : e.children), o];
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
    xe(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), xe(ee(po, { context: t.context }, e.__v), t.l);
}
function ar(e, t) {
  var n = ee(ho, { __v: e, i: t });
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
  var t = ne(e.children);
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
var ur = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, mo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, yo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, vo = /[A-Z0-9]/g, go = typeof document < "u", bo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Pt(e, t, n) {
  return t.__k == null && (t.textContent = ""), xe(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Vt(e, t, n) {
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
      if (!(i === "value" && "defaultValue" in n && a == null || go && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || bo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : yo.test(i) ? i = s : r.indexOf("-") === -1 && mo.test(i) ? i = i.replace(vo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ne(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ne(n.children).forEach(function(c) {
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
  return ee.bind(null, e);
}
function Pe(e) {
  return !!e && e.$$typeof === ur;
}
function fr(e) {
  return Pe(e) && e.type === P;
}
function dr(e) {
  return Pe(e) ? ao.apply(null, arguments) : e;
}
function Ft(e) {
  return !!e.__k && (xe(null, e), !0);
}
function _r(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var pr = function(e, t) {
  return e(t);
}, hr = function(e, t) {
  return e(t);
}, mr = P;
function Lt(e) {
  e();
}
function yr(e) {
  return e;
}
function vr() {
  return [!1, Lt];
}
var gr = Ae, br = Pe;
function wr(e, t) {
  var n = t(), r = nt({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return Ae(function() {
    o.__ = n, o.v = t, lt(o) && i({ h: o });
  }, [e, n, t]), Q(function() {
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
var Ve = { useState: nt, useId: Jn, useReducer: le, useEffect: Q, useLayoutEffect: Ae, useInsertionEffect: gr, useTransition: vr, useDeferredValue: yr, useSyncExternalStore: wr, startTransition: Lt, useRef: Ne, useImperativeHandle: $e, useMemo: rt, useCallback: Me, useContext: Xn, useDebugValue: Zn, version: "17.0.2", Children: nr, render: Pt, hydrate: Vt, unmountComponentAtNode: Ft, createPortal: ar, createElement: ee, createContext: Gn, createFactory: lr, cloneElement: dr, createRef: Un, Fragment: P, isValidElement: Pe, isElement: br, isFragment: fr, findDOMNode: _r, Component: G, PureComponent: Ye, memo: tr, forwardRef: ye, flushSync: hr, unstable_batchedUpdates: pr, StrictMode: mr, Suspense: Oe, SuspenseList: ve, lazy: sr, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cr };
const Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: nr,
  Component: G,
  Fragment: P,
  PureComponent: Ye,
  StrictMode: mr,
  Suspense: Oe,
  SuspenseList: ve,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cr,
  cloneElement: dr,
  createContext: Gn,
  createElement: ee,
  createFactory: lr,
  createPortal: ar,
  createRef: Un,
  default: Ve,
  findDOMNode: _r,
  flushSync: hr,
  forwardRef: ye,
  hydrate: Vt,
  isElement: br,
  isFragment: fr,
  isValidElement: Pe,
  lazy: sr,
  memo: tr,
  render: Pt,
  startTransition: Lt,
  unmountComponentAtNode: Ft,
  unstable_batchedUpdates: pr,
  useCallback: Me,
  useContext: Xn,
  useDebugValue: Zn,
  useDeferredValue: yr,
  useEffect: Q,
  useErrorBoundary: uo,
  useId: Jn,
  useImperativeHandle: $e,
  useInsertionEffect: gr,
  useLayoutEffect: Ae,
  useMemo: rt,
  useReducer: le,
  useRef: Ne,
  useState: nt,
  useSyncExternalStore: wr,
  useTransition: vr,
  version: Co
}, Symbol.toStringTag, { value: "Module" }));
function Er(e) {
  return {
    render(t) {
      Pt(t, e);
    },
    unmount() {
      Ft(e);
    }
  };
}
function Oo(e, t) {
  return Vt(t, e), Er(e);
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
  return ft.useSyncExternalStoreWithSelector = function(c, l, f, u, _) {
    var d = o(null);
    if (d.current === null) {
      var m = { hasValue: !1, value: null };
      d.current = m;
    } else
      m = d.current;
    d = a(function() {
      function p(E) {
        if (!h) {
          if (h = !0, b = E, E = u(E), _ !== void 0 && m.hasValue) {
            var v = m.value;
            if (_(v, E))
              return g = v;
          }
          return g = E;
        }
        if (v = g, n(b, E))
          return v;
        var S = u(E);
        return _ !== void 0 && _(v, S) ? v : (b = E, g = S);
      }
      var h = !1, b, g, w = f === void 0 ? null : f;
      return [function() {
        return p(l());
      }, w === null ? void 0 : function() {
        return p(w());
      }];
    }, [l, f, u, _]);
    var y = r(c, d[0], d[1]);
    return i(function() {
      m.hasValue = !0, m.value = y;
    }, [y]), s(y), y;
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
    function l(f, u, _, d, m) {
      var y = i(null), p;
      y.current === null ? (p = {
        hasValue: !1,
        value: null
      }, y.current = p) : p = y.current;
      var h = s(function() {
        var E = !1, v, S, C = function(U) {
          if (!E) {
            E = !0, v = U;
            var Y = d(U);
            if (m !== void 0 && p.hasValue) {
              var X = p.value;
              if (m(X, Y))
                return S = X, X;
            }
            return S = Y, Y;
          }
          var L = v, F = S;
          if (r(L, U))
            return F;
          var W = d(U);
          return m !== void 0 && m(F, W) ? F : (v = U, S = W, W);
        }, D = _ === void 0 ? null : _, T = function() {
          return C(u());
        }, j = D === null ? void 0 : function() {
          return C(D());
        };
        return [T, j];
      }, [u, _, d, m]), b = h[0], g = h[1], w = o(f, b, g);
      return a(function() {
        p.hasValue = !0, p.value = w;
      }, [w]), c(w), w;
    }
    dt.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), dt;
}
var Io = {};
Io.NODE_ENV === "production" ? Nt.exports = To() : Nt.exports = Ro();
var Ao = Nt.exports, Xe = {}, H = (
  // prettier-ignore
  // @ts-ignore
  "default" in Et ? Ve : Et
), vn = Symbol.for("react-redux-context"), gn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function $o() {
  if (!H.createContext)
    return {};
  const e = gn[vn] ?? (gn[vn] = /* @__PURE__ */ new Map());
  let t = e.get(H.createContext);
  return t || (t = H.createContext(
    null
  ), Xe.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(H.createContext, t)), t;
}
var ue = /* @__PURE__ */ $o(), Mo = () => {
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
var Sr = /* @__PURE__ */ zt(), Cr = Mo, Po = (e) => {
  Cr = e;
}, Vo = (e, t) => e === t;
function jo(e = ue) {
  const t = e === ue ? Sr : zt(e), n = (r, o = {}) => {
    const { equalityFn: i = Vo, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o;
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
    } = t(), _ = H.useRef(!0), d = H.useCallback(
      {
        [r.name](y) {
          const p = r(y);
          if (Xe.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: h,
              stabilityCheck: b
            } = {
              stabilityCheck: f,
              identityFunctionCheck: u,
              ...a
            };
            if (b === "always" || b === "once" && _.current) {
              const g = r(y);
              if (!i(p, g)) {
                let w;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: w } = E);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: y,
                    selected: p,
                    selected2: g,
                    stack: w
                  }
                );
              }
            }
            if ((h === "always" || h === "once" && _.current) && p === y) {
              let g;
              try {
                throw new Error();
              } catch (w) {
                ({ stack: g } = w);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: g }
              );
            }
            _.current && (_.current = !1);
          }
          return p;
        }
      }[r.name],
      [r, f, a.stabilityCheck]
    ), m = Cr(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      d,
      i
    );
    return H.useDebugValue(m), m;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var V = /* @__PURE__ */ jo();
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
var bn = {
  notify() {
  },
  get: () => []
};
function zo(e, t) {
  let n, r = bn, o = 0, i = !1;
  function a(y) {
    f();
    const p = r.subscribe(y);
    let h = !1;
    return () => {
      h || (h = !0, p(), u());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = e.subscribe(c), r = Lo());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = bn);
  }
  function _() {
    i || (i = !0, f());
  }
  function d() {
    i && (i = !1, u());
  }
  const m = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: _,
    tryUnsubscribe: d,
    getListeners: () => r
  };
  return m;
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
Po(Ao.useSyncExternalStoreWithSelector);
var $ = {};
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
  return $.NODE_ENV !== "production" && (t = Zo(e)), t;
}
function kr(e, t, n) {
  if (typeof e != "function")
    throw new Error($.NODE_ENV === "production" ? M(2) : `Expected the root reducer to be a function. Instead, received: '${ae(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error($.NODE_ENV === "production" ? M(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error($.NODE_ENV === "production" ? M(1) : `Expected the enhancer to be a function. Instead, received: '${ae(n)}'`);
    return n(kr)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((p, h) => {
      a.set(h, p);
    }));
  }
  function f() {
    if (c)
      throw new Error($.NODE_ENV === "production" ? M(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function u(p) {
    if (typeof p != "function")
      throw new Error($.NODE_ENV === "production" ? M(4) : `Expected the listener to be a function. Instead, received: '${ae(p)}'`);
    if (c)
      throw new Error($.NODE_ENV === "production" ? M(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let h = !0;
    l();
    const b = s++;
    return a.set(b, p), function() {
      if (h) {
        if (c)
          throw new Error($.NODE_ENV === "production" ? M(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        h = !1, l(), a.delete(b), i = null;
      }
    };
  }
  function _(p) {
    if (!je(p))
      throw new Error($.NODE_ENV === "production" ? M(7) : `Actions must be plain objects. Instead, the actual type was: '${ae(p)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof p.type > "u")
      throw new Error($.NODE_ENV === "production" ? M(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof p.type != "string")
      throw new Error($.NODE_ENV === "production" ? M(17) : `Action "type" property must be a string. Instead, the actual type was: '${ae(p.type)}'. Value was: '${p.type}' (stringified)`);
    if (c)
      throw new Error($.NODE_ENV === "production" ? M(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, p);
    } finally {
      c = !1;
    }
    return (i = a).forEach((b) => {
      b();
    }), p;
  }
  function d(p) {
    if (typeof p != "function")
      throw new Error($.NODE_ENV === "production" ? M(10) : `Expected the nextReducer to be a function. Instead, received: '${ae(p)}`);
    r = p, _({
      type: pe.REPLACE
    });
  }
  function m() {
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
      subscribe(h) {
        if (typeof h != "object" || h === null)
          throw new Error($.NODE_ENV === "production" ? M(11) : `Expected the observer to be an object. Instead, received: '${ae(h)}'`);
        function b() {
          const w = h;
          w.next && w.next(f());
        }
        return b(), {
          unsubscribe: p(b)
        };
      },
      [wn]() {
        return this;
      }
    };
  }
  return _({
    type: pe.INIT
  }), {
    dispatch: _,
    subscribe: u,
    getState: f,
    replaceReducer: d,
    [wn]: m
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
      throw new Error($.NODE_ENV === "production" ? M(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: pe.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error($.NODE_ENV === "production" ? M(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${pe.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ri(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    $.NODE_ENV !== "production" && typeof e[s] > "u" && En(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  $.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    ni(n);
  } catch (a) {
    i = a;
  }
  return function(s = {}, c) {
    if (i)
      throw i;
    if ($.NODE_ENV !== "production") {
      const u = ti(s, n, c, o);
      u && En(u);
    }
    let l = !1;
    const f = {};
    for (let u = 0; u < r.length; u++) {
      const _ = r[u], d = n[_], m = s[_], y = d(m, c);
      if (typeof y > "u") {
        const p = c && c.type;
        throw new Error($.NODE_ENV === "production" ? M(14) : `When called with an action of type ${p ? `"${String(p)}"` : "(unknown type)"}, the slice reducer for key "${_}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[_] = y, l = l || y !== m;
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
      throw new Error($.NODE_ENV === "production" ? M(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
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
function z(e, ...t) {
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
  z(2);
}
function at(e) {
  return Object.isFrozen(e);
}
var ci = {};
function he(e) {
  const t = ci[e];
  return t || z(0, e), t;
}
var De;
function Ir() {
  return De;
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
  e === De && (De = e.parent_);
}
function Cn(e) {
  return De = li(De, e);
}
function fi(e) {
  const t = e[B];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function On(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[B].modified_ && (Ot(t), z(4)), oe(e) && (e = Qe(t, e), t.parent_ || et(t, e)), t.patches_ && he("Patches").generateReplacementPatches_(
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
  if (Fe.NODE_ENV !== "production" && o === n && z(5), ce(o)) {
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
    scope_: t ? t.scope_ : Ir(),
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
  n && (o = [r], i = Te);
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
    const r = Ar(de(e), t);
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
    z(11);
  },
  getPrototypeOf(e) {
    return we(e.base_);
  },
  setPrototypeOf() {
    z(12);
  }
}, Te = {};
Je(Wt, (e, t) => {
  Te[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Te.deleteProperty = function(e, t) {
  return Fe.NODE_ENV !== "production" && isNaN(parseInt(t)) && z(13), Te.set.call(this, e, t, void 0);
};
Te.set = function(e, t, n) {
  return Fe.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && z(14), Wt.set.call(this, e[0], t, n, e[0]);
};
function pt(e, t) {
  const n = e[B];
  return (n ? de(n) : e)[t];
}
function _i(e, t, n) {
  var o;
  const r = Ar(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Ar(e, t) {
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
      typeof n != "function" && z(6), r !== void 0 && typeof r != "function" && z(7);
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
        z(1, t);
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
    oe(e) || z(8), ce(e) && (e = $r(e));
    const t = Cn(this), n = Dt(e, void 0);
    return n[B].isManual_ = !0, kt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[B];
    (!n || !n.isManual_) && z(9);
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
  return (t ? t.scope_ : Ir()).drafts_.push(n), n;
}
function $r(e) {
  return ce(e) || z(10, e), Mr(e);
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
var q = new pi(), Pr = q.produce;
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
function gi(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function bi(e, t = `expected an object, instead received ${typeof e}`) {
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
    for (let _ = 0, d = c; _ < d; _++) {
      const m = arguments[_];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let y = s.o;
        y === null && (s.o = y = /* @__PURE__ */ new WeakMap());
        const p = y.get(m);
        p === void 0 ? (s = We(), y.set(m, s)) : s = p;
      } else {
        let y = s.p;
        y === null && (s.p = y = /* @__PURE__ */ new Map());
        const p = y.get(m);
        p === void 0 ? (s = We(), y.set(m, s)) : s = p;
      }
    }
    const l = s;
    let f;
    if (s.s === Tn ? f = s.v : (f = e.apply(null, arguments), i++), l.s = Tn, r) {
      const _ = ((u = o == null ? void 0 : o.deref) == null ? void 0 : u.call(o)) ?? o;
      _ != null && r(_, f) && (f = _, i !== 0 && i--), o = typeof f == "object" && f !== null || typeof f == "function" ? new Ci(f) : f;
    }
    return l.v = f, f;
  }
  return a.clearCache = () => {
    n = We(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function Vr(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), gi(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const f = {
      ...n,
      ...c
    }, {
      memoize: u,
      memoizeOptions: _ = [],
      argsMemoize: d = Ht,
      argsMemoizeOptions: m = [],
      devModeChecks: y = {}
    } = f, p = xn(_), h = xn(m), b = Ei(o), g = u(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...p);
    let w = !0;
    const E = d(function() {
      a++;
      const S = Dn(
        b,
        arguments
      );
      if (s = g.apply(null, S), hi.NODE_ENV !== "production") {
        const { identityFunctionCheck: C, inputStabilityCheck: D } = Ni(w, y);
        if (C.shouldRun && C.run(
          l,
          S,
          s
        ), D.shouldRun) {
          const T = Dn(
            b,
            arguments
          );
          D.run(
            { inputSelectorResults: S, inputSelectorResultsCopy: T },
            { memoize: u, memoizeOptions: p },
            arguments
          );
        }
        w && (w = !1);
      }
      return s;
    }, ...h);
    return Object.assign(E, {
      resultFunc: l,
      memoizedResultFunc: g,
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
var ki = /* @__PURE__ */ Vr(Ht), xi = Object.assign(
  (e, t = ki) => {
    bi(
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
  const t = Vr(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (a, ...s) => o(ce(a) ? $r(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
Ri(Ht);
var Ii = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ze : Ze.apply(null, arguments);
}, Ai = (e) => e && typeof e.match == "function";
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
function $i(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Ai(e);
}
function Mi(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Pi(e = {}) {
  if (O.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = $i
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
var Lr = class Se extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Se.prototype);
  }
  static get [Symbol.species]() {
    return Se;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Se(...t[0].concat(this)) : new Se(...t.concat(this));
  }
};
function Rn(e) {
  return oe(e) ? Pr(e, () => {
  }) : e;
}
function In(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(O.NODE_ENV === "production" ? R(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Vi(e) {
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
    if (l && t.some((m) => m instanceof RegExp ? m.test(u) : u === m))
      continue;
    const _ = Ur(e, t, n.children[f], r[f], s, u);
    if (_.wasMutated)
      return _;
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
      return c || (c = function(u, _) {
        return l[0] === _ ? "[Circular ~]" : "[Circular ~." + f.slice(0, l.indexOf(_)).join(".") + "]";
      }), function(u, _) {
        if (l.length > 0) {
          var d = l.indexOf(this);
          ~d ? l.splice(d + 1) : l.push(this), ~d ? f.splice(d, 1 / 0, u) : f.push(u), ~l.indexOf(_) && (_ = c.call(this, u, _));
        } else
          l.push(_);
        return s == null ? _ : s.call(this, u, _);
      };
    }, {
      isImmutable: r = Vi,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = ji.bind(null, r, o);
    return ({
      getState: s
    }) => {
      let c = s(), l = a(c), f;
      return (u) => (_) => {
        const d = Fr(i, "ImmutableStateInvariantMiddleware");
        d.measureTime(() => {
          if (c = s(), f = l.detectMutations(), l = a(c), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? R(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const m = u(_);
        return d.measureTime(() => {
          if (c = s(), f = l.detectMutations(), l = a(c), f.wasMutated)
            throw new Error(O.NODE_ENV === "production" ? R(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${t(_)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), d.warnIfExceeded(), m;
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
    if (!(c && o.some((d) => d instanceof RegExp ? d.test(u) : u === d))) {
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
    return (u) => (_) => (d) => {
      if (!xr(d))
        return _(d);
      const m = _(d), y = Fr(a, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(d.type) !== -1) && y.measureTime(() => {
        const p = Tt(d, "", t, n, o, f);
        if (p) {
          const {
            keyPath: h,
            value: b
          } = p;
          console.error(`A non-serializable value was detected in an action, in the path: \`${h}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, d, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (y.measureTime(() => {
        const p = u.getState(), h = Tt(p, "", t, n, i, f);
        if (h) {
          const {
            keyPath: b,
            value: g
          } = h;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, g, `
Take a look at the reducer(s) handling this action type: ${d.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), y.warnIfExceeded()), m;
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
      He(i) || (s = i), a.unshift(Pi(s));
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
      const u = () => o && f(), _ = r.subscribe(u);
      return s.add(f), () => {
        _(), s.delete(f);
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
  if (!se && c.some((m) => typeof m != "function"))
    throw new Error(O.NODE_ENV === "production" ? R(4) : "each middleware provided to configureStore must be a function");
  let l = Ze;
  o && (l = Ii({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !se,
    ...typeof o == "object" && o
  }));
  const f = oi(...c), u = Bi(f);
  if (!se && a && typeof a != "function")
    throw new Error(O.NODE_ENV === "production" ? R(5) : "`enhancers` field must be a callback");
  let _ = typeof a == "function" ? a(u) : u();
  if (!se && !Array.isArray(_))
    throw new Error(O.NODE_ENV === "production" ? R(6) : "`enhancers` callback must return an array");
  if (!se && _.some((m) => typeof m != "function"))
    throw new Error(O.NODE_ENV === "production" ? R(7) : "each enhancer provided to configureStore must be a function");
  !se && c.length && !_.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const d = l(..._);
  return kr(s, i, d);
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
          const d = u(f, c);
          return d === void 0 ? f : d;
        } else {
          if (oe(f))
            return Pr(f, (_) => u(_, c));
          {
            const _ = u(f, c);
            if (_ === void 0) {
              if (f === null)
                return f;
              throw new Error(O.NODE_ENV === "production" ? R(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return _;
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
      addCase(g, w) {
        const E = typeof g == "string" ? g : g.type;
        if (!E)
          throw new Error(O.NODE_ENV === "production" ? R(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(O.NODE_ENV === "production" ? R(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = w, f;
      },
      addMatcher(g, w) {
        return l.sliceMatchers.push({
          matcher: g,
          reducer: w
        }), f;
      },
      exposeAction(g, w) {
        return l.actionCreators[g] = w, f;
      },
      exposeCaseReducer(g, w) {
        return l.sliceCaseReducersByName[g] = w, f;
      }
    };
    c.forEach((g) => {
      const w = s[g], E = {
        reducerName: g,
        type: Ji(i, g),
        createNotation: typeof o.reducers == "function"
      };
      rs(w) ? is(E, w, f, t) : ns(E, w, f);
    });
    function u() {
      if (O.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(O.NODE_ENV === "production" ? R(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [g = {}, w = [], E = void 0] = typeof o.extraReducers == "function" ? qr(o.extraReducers) : [o.extraReducers], v = {
        ...g,
        ...l.sliceCaseReducersByType
      };
      return Gi(o.initialState, (S) => {
        for (let C in v)
          S.addCase(C, v[C]);
        for (let C of l.sliceMatchers)
          S.addMatcher(C.matcher, C.reducer);
        for (let C of w)
          S.addMatcher(C.matcher, C.reducer);
        E && S.addDefaultCase(E);
      });
    }
    const _ = (g) => g, d = /* @__PURE__ */ new Map();
    let m;
    function y(g, w) {
      return m || (m = u()), m(g, w);
    }
    function p() {
      return m || (m = u()), m.getInitialState();
    }
    function h(g, w = !1) {
      function E(S) {
        let C = S[g];
        if (typeof C > "u") {
          if (w)
            C = p();
          else if (O.NODE_ENV !== "production")
            throw new Error(O.NODE_ENV === "production" ? R(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return C;
      }
      function v(S = _) {
        const C = In(d, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return In(C, S, {
          insert: () => {
            const D = {};
            for (const [T, j] of Object.entries(o.selectors ?? {}))
              D[T] = es(j, S, p, w);
            return D;
          }
        });
      }
      return {
        reducerPath: g,
        getSelectors: v,
        get selectors() {
          return v(E);
        },
        selectSlice: E
      };
    }
    const b = {
      name: i,
      reducer: y,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: p,
      ...h(a),
      injectInto(g, {
        reducerPath: w,
        ...E
      } = {}) {
        const v = w ?? a;
        return g.inject({
          reducerPath: v,
          reducer: y
        }, E), {
          ...b,
          ...h(v, !0)
        };
      }
    };
    return b;
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
      e[n].meta[r] = o;
    }
  }
}), {
  registerForm: ds,
  registerField: _s,
  updateField: K,
  updateFieldErrors: An,
  updateMeta: Re
} = Gr.actions, ps = Gr.reducer, hs = (e) => (t) => t.forms[e], ms = (e) => (t) => t.forms[e].meta.step, Yr = (e) => (t) => t.forms[e].fields, Le = (e, t) => (n) => n.forms[e].fields[t], ut = (e) => (t) => t.forms[e].meta, ys = (e) => (t) => t.forms[e].meta.isInteracted, vs = {
  environment: "production",
  translations: {}
}, Xr = Kr({
  name: "misc",
  initialState: vs,
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
  registerTranslations: gs,
  setEnvironment: bs
} = Xr.actions, ws = Xr.reducer, Es = () => (e) => e.misc.translations, Ns = () => (e) => e.misc.translations.errors;
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
function x(e) {
  return e.map((t) => t ? "dkf_" + t : !1).filter(Boolean).join(" ");
}
function Jr(e) {
  return ["text", "number", "email", "phone", "checkbox", "radio", "hidden"].includes(e.subType);
}
function Ss() {
  const e = Ne({}), t = (n, r, o) => {
    var i;
    Jr(n) && (o(_s({
      formInstance: r,
      name: n.name,
      value: n.defaultValue,
      validationRules: n.validationRules
    })), e.current[n.name] = Ve.createRef()), (i = n.nodes) == null || i.forEach((a) => t(a, r, o));
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
  return Re({
    formInstance: e,
    name: t,
    value: n
  });
}
function xs(e) {
  return () => {
  };
}
const $n = {
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
  } = e, c = ie(), l = V(ut(t)), {
    isLoading: f,
    isValid: u
  } = l, _ = x(["button-container", "button-container--" + n]), d = x(["button", "button--" + n, "button--" + (e.buttonType || "primary")]);
  return N("div", {
    className: _,
    children: N("button", {
      type: o,
      className: d,
      onClick: () => {
        i && i.forEach((y) => {
          if (y.mapping)
            for (const p in y.mapping) {
              const h = y.mapping[p];
              c($n[y.name](t, p, h));
            }
          else
            c($n[y.name](t));
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
    storeAsDonorMeta: _,
    showInReceipt: d,
    childNodes: m,
    disabled: y = !1,
    ...p
  } = t, h = V(Yr(r)), b = ie(), g = Zr(h, c);
  if (h[o] === void 0 || !g)
    return null;
  const w = x(["input", "input-checkbox", "input-checkbox--" + o]), E = x(["input--option"]);
  return N("div", {
    className: w,
    children: a ? a.map((v) => N("div", {
      className: E,
      ref: n,
      children: [N("input", {
        id: r + o + v.value,
        name: o,
        type: "checkbox",
        value: v.value,
        checked: h[o].value === v.value,
        onChange: () => b(K({
          formInstance: r,
          name: o,
          value: v.value
        }))
      }), N("label", {
        className: x(["input--label"]),
        htmlFor: r + o + v.value,
        tabIndex: 0,
        children: v.label
      })]
    }, o + v.value)) : N(P, {
      children: [N("input", {
        id: r + o,
        name: o,
        type: "checkbox",
        value: "true",
        checked: h[o].value == "true",
        onChange: () => b(K({
          formInstance: r,
          name: o,
          value: h[o].value == "true" ? "false" : "true"
        })),
        ref: n
      }, o), N("label", {
        className: x(["input--label"]),
        htmlFor: r + o,
        tabIndex: 0,
        children: i
      })]
    })
  });
});
var Is = "Expected a function", Mn = NaN, As = "[object Symbol]", $s = /^\s+|\s+$/g, Ms = /^[-+]0x[0-9a-f]+$/i, Ps = /^0b[01]+$/i, Vs = /^0o[0-7]+$/i, js = parseInt, Fs = typeof Ue == "object" && Ue && Ue.Object === Object && Ue, Ls = typeof self == "object" && self && self.Object === Object && self, zs = Fs || Ls || Function("return this")(), Us = Object.prototype, Ws = Us.toString, Hs = Math.max, Bs = Math.min, mt = function() {
  return zs.Date.now();
};
function qs(e, t, n) {
  var r, o, i, a, s, c, l = 0, f = !1, u = !1, _ = !0;
  if (typeof e != "function")
    throw new TypeError(Is);
  t = Pn(t) || 0, Rt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? Hs(Pn(n.maxWait) || 0, t) : i, _ = "trailing" in n ? !!n.trailing : _);
  function d(v) {
    var S = r, C = o;
    return r = o = void 0, l = v, a = e.apply(C, S), a;
  }
  function m(v) {
    return l = v, s = setTimeout(h, t), f ? d(v) : a;
  }
  function y(v) {
    var S = v - c, C = v - l, D = t - S;
    return u ? Bs(D, i - C) : D;
  }
  function p(v) {
    var S = v - c, C = v - l;
    return c === void 0 || S >= t || S < 0 || u && C >= i;
  }
  function h() {
    var v = mt();
    if (p(v))
      return b(v);
    s = setTimeout(h, y(v));
  }
  function b(v) {
    return s = void 0, _ && r ? d(v) : (r = o = void 0, a);
  }
  function g() {
    s !== void 0 && clearTimeout(s), l = 0, r = c = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : b(mt());
  }
  function E() {
    var v = mt(), S = p(v);
    if (r = arguments, o = this, c = v, S) {
      if (s === void 0)
        return m(c);
      if (u)
        return s = setTimeout(h, t), d(c);
    }
    return s === void 0 && (s = setTimeout(h, t)), a;
  }
  return E.cancel = g, E.flush = w, E;
}
function Rt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Ks(e) {
  return !!e && typeof e == "object";
}
function Gs(e) {
  return typeof e == "symbol" || Ks(e) && Ws.call(e) == As;
}
function Pn(e) {
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
  e = e.replace($s, "");
  var n = Ps.test(e);
  return n || Vs.test(e) ? js(e.slice(2), n ? 2 : 8) : Ms.test(e) ? Mn : +e;
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
  const o = V(Ns());
  V(Le(e, t));
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
        const _ = u(l, s);
        if (console.log("Validator", l, s, _ ? "true" : "false"), !_ && o[f[0]]) {
          let d = o[f[0]];
          d.includes(":attribute") && (d = d.replace(":attribute", n)), d.includes(":max") && (d = d.replace(":max", f[1])), d.includes(":min") && (d = d.replace(":min", f[1])), c.push(d);
        }
      }
      c.length > 0 ? (i(An({
        formInstance: e,
        name: t,
        errors: c
      })), i(Re({
        formInstance: e,
        name: "isValid",
        value: !1
      }))) : (i(An({
        formInstance: e,
        name: t,
        errors: c
      })), i(Re({
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
    storeAsDonorMeta: _,
    showInReceipt: d,
    type: m,
    subType: y,
    childNodes: p,
    disabled: h = !1,
    ...b
  } = t, [g, w] = le((W, fe) => ({
    ...W,
    ...fe
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: E,
    isInvalid: v
  } = g, S = V(Le(r, o)), C = ie(), D = S.errors, T = V(ut(r)), {
    isLoading: j
  } = T, {
    setValidateField: U
  } = Kt(r, o, i, c);
  $e(n, () => ({
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
    U(W.target.value), w({
      isActive: fe
    });
  }, 300), [C, r, o, U, w]), X = x(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + y]), L = x(["input", "input--" + o, "input-type--" + y, E && "input--active", D && D.length > 0 && "input--invalid"]), F = x(["input--field"]);
  return N("div", {
    className: X,
    "aria-live": "polite",
    children: [N("label", {
      className: L,
      children: [i && N("span", {
        className: x(["input--label"]),
        children: i
      }), N("input", {
        type: "email",
        name: o,
        className: F,
        disabled: h || j === !0,
        autoComplete: "email",
        ...b,
        onChange: Y,
        ref: n
      })]
    }), D && D.length !== 0 && N(P, {
      children: D.map((W, fe) => N("div", {
        className: x(["input--error"]),
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
    subType: _,
    childNodes: d,
    disabled: m = !1,
    ...y
  } = e, p = x(["html", ...Array.isArray(c) ? c : []]);
  return N("div", {
    className: x(["html_wrapper"]),
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
    showInReceipt: _,
    type: d,
    subType: m,
    childNodes: y,
    disabled: p = !1,
    ...h
  } = t, [b, g] = le((L, F) => ({
    ...L,
    ...F
  }), {
    isActive: !1
  }), {
    isActive: w
  } = b, E = V(Le(r, o)), v = ie(), S = E.errors, C = V(ut(r)), {
    isLoading: D
  } = C, {
    setValidateField: T
  } = Kt(r, o, i, c);
  $e(n, () => ({
    validate() {
      T(E.value);
    }
  }), [E]);
  const j = Me(qt((L) => {
    v(K({
      formInstance: r,
      name: o,
      value: L.target.value
    }));
    let F = !1;
    L.target.value.length > 0 && (F = !0), T(L.target.value), g({
      isActive: F
    });
  }, 300), [v, r, o, T, g]), U = x(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + m]), Y = x(["input", "input--" + o, "input-type--" + m, w && "input--active", S && S.length > 0 && "input--invalid"]), X = x(["input--field"]);
  return N("div", {
    className: U,
    "aria-live": "polite",
    children: [N("label", {
      className: Y,
      children: [i && N("span", {
        className: x(["input--label"]),
        children: i
      }), N("input", {
        type: "text",
        name: o,
        className: X,
        disabled: p || D === !0,
        ...h,
        value: E.value,
        onChange: j,
        ref: n
      })]
    }), S && S.length !== 0 && N(P, {
      children: S.map((L, F) => N("div", {
        className: x(["input--error"]),
        children: L
      }, F))
    })]
  });
}), It = qi({
  reducer: {
    misc: ws,
    forms: ps
  }
});
function sa(e, t) {
  return new CustomEvent(e, {
    detail: t
  });
}
function aa(e, t) {
  return e.dispatchEvent(t);
}
function ua(e) {
  switch (e) {
    case "local":
      return "http://localhost:9051/event";
    case "staging":
    case "stage":
    case "development":
    case "develop":
      return "https://fundy-stage-be.do.dekodes.no/event";
    case "production":
    default:
      return "https://fundy-prod.do.dekodes.no/event";
  }
}
function ca(e) {
  const t = ua(e);
  let n = !1;
  return (o, i, a) => {
    const s = sa(o, {
      detail: {
        form_id: a.formId,
        form_instance: a.formInstance
      }
    });
    n = aa(document, s), n || console.error("Failed to dispatch onpage event: ", o, i), n = navigator.sendBeacon(t, JSON.stringify({
      name: o,
      data: i
    })), n || console.error("Failed to send analytics event: ", o, i);
  };
}
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
function la() {
  return window.location.protocol + "//" + window.location.hostname + window.location.pathname;
}
function fa({
  childNodes: e,
  formInstance: t,
  fieldrefs: n
}) {
  const r = ie(), i = It.getState().forms[t].fields, a = It.getState().misc.environment, s = V(ut(t)), c = V(ys(t)), l = V(Es()), f = ca(a), u = la(), _ = Ne(null);
  Q(() => {
    if (c === !0) {
      const p = {
        name: "formInteracted",
        page_url: u,
        form_id: s.formId,
        form_instance: t
      };
      f(p.name, p, s);
    }
  }, [c]), Q(() => {
    const p = {
      name: "formLoaded",
      page_url: u,
      form_id: s.formId,
      form_instance: t
    };
    if (f(p.name, p, s), _.current) {
      const h = _.current.closest(".fundraising-form-wrapper");
      if (h)
        return s.step > 1 ? h.classList.add("fundraising-form-wrapper--stepped") : h.classList.remove("fundraising-form-wrapper--stepped"), () => {
          h.classList.remove("fundraising-form-wrapper--stepped");
        };
    }
  }, [_]), Q(() => {
    const p = new IntersectionObserver((b) => {
      b.forEach((g) => {
        if (g.isIntersecting) {
          const w = {
            name: "formViewed",
            page_url: u,
            form_id: s.formId,
            form_instance: t
          };
          f(w.name, w, s), p.unobserve(g.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }), h = _.current;
    return h && p.observe(h), () => {
      h && p.unobserve(h);
    };
  }, []);
  const d = Me((p) => {
    p.preventDefault(), qt(() => {
      let g = !0;
      const w = {
        form_id: s.formId,
        payment_method: s.payment_method
      };
      Object.values(n.current).forEach((E) => {
        var v, S;
        (S = (v = E.current) == null ? void 0 : v.validate) == null || S.call(v);
      });
      for (const E in i)
        if (i.hasOwnProperty(E)) {
          const v = i[E];
          v.value && (w[E] = v.value), v.errors && v.errors.length > 0 && (g = !1), v.validationRules && v.validationRules.indexOf("required") !== -1 && !v.value && (g = !1);
        }
      g && (r(Re({
        formInstance: t,
        name: "isLoading",
        value: !0
      })), m(w).then((E) => {
        const v = {
          name: "formSubmitted",
          page_url: u,
          form_id: s.formId,
          form_instance: t
        };
        f(v.name, v, s), E.url && (window.location.href = E.url);
      }).catch((E) => {
        r(Re({
          formInstance: t,
          name: "isLoading",
          value: !1
        })), console.error(E);
      }));
    }, 300)();
  }, [n, i, s.formId, s.payment_method, r, t]);
  async function m(p) {
    return await (await fetch(Qr(a) + "/api/v1/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(p)
    })).json();
  }
  const y = x(["form", "form_instance--" + t, (s == null ? void 0 : s.formId) && "form_id--" + (s == null ? void 0 : s.formId), (s == null ? void 0 : s.formCategory) && "form_category--" + (s == null ? void 0 : s.formCategory), (s == null ? void 0 : s.formTeam) && "form_team--" + (s == null ? void 0 : s.formTeam)]);
  return N("div", {
    ref: _,
    className: x(["form_wrapper"]),
    children: N("form", {
      className: y,
      onSubmit: d,
      noValidate: !0,
      children: [e, N("div", {
        className: x(["form_notifications"]),
        "aria-live": "polite",
        "aria-atomic": "false",
        children: (s == null ? void 0 : s.step) === 2 && (s == null ? void 0 : s.isValid) === !1 && N("div", {
          className: x(["form_validation__error"]),
          children: l.validation_failed
        })
      })]
    })
  });
}
function da({
  childNodes: e,
  name: t
}) {
  const n = x(["group", "group--" + t]);
  return N("div", {
    className: n,
    children: e
  });
}
const _a = ye(function(t, n) {
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
    storeAsDonorMeta: _,
    showInReceipt: d,
    type: m,
    subType: y,
    events: p,
    childNodes: h,
    disabled: b = !1,
    ...g
  } = t, [w, E] = le((Z, J) => ({
    ...Z,
    ...J
  }), {
    isActive: !1,
    isInvalid: !1
  }), {
    isActive: v,
    isInvalid: S
  } = w, C = V(Le(r, o)), D = ie(), T = C.errors, {
    setValidateField: j
  } = Kt(r, o, i, c);
  $e(n, () => ({
    validate() {
      j(C.value);
    }
  }), [C]);
  const U = (Z) => {
    Z.preventDefault();
    let J = Number(Z.target.value);
    J === 0 && (J = ""), D(K({
      formInstance: r,
      name: o,
      value: J
    })), u && D(K({
      formInstance: r,
      name: u,
      value: J
    }));
    let Gt = !1;
    J && (Gt = !0), j(J), E({
      isActive: Gt
    });
  }, Y = c.find((Z) => Z.startsWith("min:")), X = Y ? Number(Y.split(":")[1]) : void 0, L = c.find((Z) => Z.startsWith("max:")), F = L ? Number(L.split(":")[1]) : void 0, W = x(["input_wrapper", "input_wrapper--" + o, "input_wrapper-type--" + y]), fe = x(["input", "input--" + o, "input-type--" + y, v && "input--active", T && T.length > 0 && "input--invalid"]), to = x(["input--field"]);
  return N("div", {
    className: W,
    "aria-live": "polite",
    children: [N("label", {
      className: fe,
      children: [i && N("span", {
        className: x(["input--label"]),
        children: i
      }), N("input", {
        type: "number",
        name: o,
        className: to,
        disabled: b,
        ...g,
        value: C.value,
        onChange: U,
        ref: n,
        ...X !== void 0 && {
          min: X
        },
        ...F !== void 0 && {
          max: F
        }
      })]
    }), T && T.length !== 0 && N(P, {
      children: T.map((Z, J) => N("div", {
        className: x(["input--error"]),
        children: Z
      }, J))
    })]
  });
}), pa = ye(function(t, n) {
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
    alias: _,
    storeAsDonorMeta: d,
    showInReceipt: m,
    type: y,
    subType: p,
    childNodes: h,
    disabled: b = !1,
    ...g
  } = t, w = V(Yr(r));
  V(Le(r, o));
  const E = ie(), v = _ || o, S = x(["input", "input-radio", "input-radio--" + o]), C = x(["input--option"]);
  Q(() => {
    _ === "amount" && a !== null && !a.some((T) => T.value === w[_].value) && (E(K({
      formInstance: r,
      name: o,
      value: s
    })), _ && E(K({
      formInstance: r,
      name: _,
      value: s
    })));
  }, [w.frequency.value]);
  const D = (T, j) => {
    E(K({
      formInstance: r,
      name: o,
      value: j
    })), _ && E(K({
      formInstance: r,
      name: _,
      value: j
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
        checked: w[v].value === T.value,
        onChange: (j) => D(j, T.value)
      }), N("span", {
        className: x(["input--label"]),
        children: T.label
      })]
    }, o + T.value)) : N("label", {
      className: C,
      children: [N("input", {
        name: o,
        type: "radio",
        value: "true",
        checked: !!w[v].value,
        onChange: (T) => D(T, !0),
        ref: n
      }, o), N("span", {
        className: x(["input--label"]),
        tabIndex: 0,
        children: i
      })]
    })
  });
});
function ha({
  childNodes: e
}) {
  const t = x(["section"]);
  return N("div", {
    className: t,
    children: e
  });
}
function ma({
  formInstance: e,
  childNodes: t
}) {
  const n = V(ms(e)), r = x(["steps"]), o = n > 0 && n <= t.length ? t[n - 1] : null, i = o ? Ve.cloneElement(o, {
    instance: n
  }) : null;
  return N("div", {
    className: r,
    children: i
  });
}
function ya({
  childNodes: e,
  instance: t
}) {
  const n = Ne(null);
  Q(() => {
    if (t !== 1 && n.current) {
      const o = n.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      o && o.focus();
    }
  }, [t]);
  const r = x(["step", "step-" + t]);
  return N("div", {
    ref: n,
    className: r,
    children: e
  });
}
const va = (e = "en") => {
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
function ga({
  formId: e,
  env: t,
  locale: n,
  setAppState: r
}) {
  const [o, i] = le((d, m) => ({
    ...d,
    ...m
  }), {
    isLoading: !0,
    isDelayed: !1,
    error: null
  }), {
    isLoading: a,
    isDelayed: s,
    error: c
  } = o, l = va(n), f = Ne(null);
  async function u(d, m) {
    f.current = new AbortController(), setTimeout(() => {
      i({
        isDelayed: !0
      });
    }, 2e3), fetch(Qr(m) + "/api/v1/form/config/" + d + "?locale=" + n, {
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
  const _ = () => {
    i({
      isLoading: !0,
      isDelayed: !1,
      error: null
    }), u(e, t);
  };
  return Q(() => {
    e && _();
  }, [r]), N("div", {
    className: x(["loader-container"]),
    children: N("div", {
      className: x(["loader", "loader-" + status]),
      children: [l.loading, s && N(P, {
        children: [N("p", {
          children: l.delayed
        }), N("button", {
          onClick: () => f.current.abort(),
          children: l.cancel
        }), N("button", {
          onClick: () => _(),
          children: l.retry
        })]
      }), c && N(P, {
        children: [N("p", {
          children: l.failed
        }), N("button", {
          onClick: () => _(),
          children: l.retry
        })]
      })]
    })
  });
}
const ba = {
  button: Ts,
  checkbox: Rs,
  email: ra,
  html: oa,
  text: ia,
  group: da,
  number: _a,
  radio: pa,
  section: ha,
  steps: ma,
  step: ya,
  form: fa
};
function wa({
  formInstance: e,
  formId: t,
  env: n = "production",
  locale: r = "en"
}) {
  const o = V(hs(e)), i = ie(), [a, s] = le((b, g) => ({
    ...b,
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
    isLoading: c,
    isInitialized: l,
    formCategory: f,
    formTeam: u,
    config: _,
    translations: d,
    error: m
  } = a, {
    fieldRefs: y,
    registerNode: p
  } = Ss();
  if (Q(() => {
    i(ds({
      formInstance: e,
      formId: t,
      formCategory: f,
      formTeam: u,
      step: 0
    })), i(bs({
      env: n
    })), d && i(gs({
      translations: d
    })), c === !1 && l === !1 && (p(_, e, i), s({
      isInitialized: !0
    }));
  }, [e, c]), c === !0)
    return N(ga, {
      formId: t,
      env: n,
      locale: r,
      setAppState: s
    });
  const h = (b, g) => {
    let w = null;
    if (w = ba[b.subType], !w || !Zr(o.fields, b.visibilityConditions))
      return null;
    const E = b.nodes ? b.nodes.map((S) => h(S, g)) : null, v = Jr(b) ? y.current[b.name] : null;
    return N(w, {
      formInstance: g,
      ref: v,
      childNodes: E,
      fieldrefs: y,
      ...b
    }, b.name);
  };
  return o === void 0 ? null : c || l === !1 ? N("div", {
    className: x(["loading"]),
    children: N("div", {
      className: x(["loading__message"]),
      children: "Loading..."
    })
  }) : N(P, {
    children: h(_, e)
  });
}
let Ea = 0;
function Na() {
  return Ea++;
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
}, Sa = /\[fundraising-form(?: id="(\d+)")?(?: env="(\w+)")?(?: locale="(\w+)")?\]/, Ca = (e) => {
  const t = document.createElement("div");
  return t.className = "fundraising-form", t.setAttribute("data-form-id", e[1]), t.setAttribute("data-env", e[2]), t;
};
eo(document.body, Sa, Ca);
for (const e of document.getElementsByClassName("fundraising-form")) {
  const t = Na(), n = e.getAttribute("data-form-id") ?? "0", r = e.getAttribute("data-env") ?? "production", o = e.getAttribute("data-locale") ?? "en";
  ko.createRoot(e).render(N(Ve.StrictMode, {
    children: N(qo, {
      store: It,
      children: N(wa, {
        formInstance: t,
        formId: n,
        env: r,
        locale: o
      })
    })
  }));
}
