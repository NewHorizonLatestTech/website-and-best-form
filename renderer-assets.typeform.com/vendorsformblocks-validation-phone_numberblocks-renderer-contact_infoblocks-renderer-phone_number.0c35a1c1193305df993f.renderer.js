"use strict";
(self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
    [246], {
        19871: (b, _, n) => {
            n.d(_, {
                Z: () => l
            });

            function f(s, P) {
                if (!(s instanceof P)) throw new TypeError("Cannot call a class as a function")
            }
            var l = function s(P) {
                f(this, s), this.name = this.constructor.name, this.message = P, this.stack = new Error(P).stack
            };
            l.prototype = Object.create(Error.prototype), l.prototype.constructor = l
        },
        62972: (b, _, n) => {
            n.d(_, {
                Z: () => y
            });
            var f = n(16271),
                l = n(53508),
                s = n(61798),
                P = n(85055),
                t = n(75150);

            function e(v) {
                for (var r = 1; r < arguments.length; r++) {
                    var u = arguments[r] != null ? arguments[r] : {},
                        h = Object.keys(u);
                    typeof Object.getOwnPropertySymbols == "function" && (h = h.concat(Object.getOwnPropertySymbols(u).filter(function(m) {
                        return Object.getOwnPropertyDescriptor(u, m).enumerable
                    }))), h.forEach(function(m) {
                        a(v, m, u[m])
                    })
                }
                return v
            }

            function a(v, r, u) {
                return r in v ? Object.defineProperty(v, r, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : v[r] = u, v
            }

            function $(v, r) {
                if (!(v instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function o(v, r) {
                for (var u = 0; u < r.length; u++) {
                    var h = r[u];
                    h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(v, h.key, h)
                }
            }

            function c(v, r, u) {
                return r && o(v.prototype, r), u && o(v, u), v
            }
            var g = !1,
                y = function() {
                    function v(r, u, h) {
                        if ($(this, v), !r) throw new TypeError("`country` or `countryCallingCode` not passed");
                        if (!u) throw new TypeError("`nationalNumber` not passed");
                        if (!h) throw new TypeError("`metadata` not passed");
                        var m = new f.ZP(h);
                        C(r) ? (this.country = r, m.country(r), r = m.countryCallingCode()) : g && m.isNonGeographicCallingCode(r) && (this.country = "001"), this.countryCallingCode = r, this.nationalNumber = u, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = h
                    }
                    return c(v, [{
                        key: "setExt",
                        value: function(u) {
                            this.ext = u
                        }
                    }, {
                        key: "isPossible",
                        value: function() {
                            return (0, l.Z)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            return (0, s.Z)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isNonGeographic",
                        value: function() {
                            var u = new f.ZP(this.metadata);
                            return u.isNonGeographicCallingCode(this.countryCallingCode)
                        }
                    }, {
                        key: "isEqual",
                        value: function(u) {
                            return this.number === u.number && this.ext === u.ext
                        }
                    }, {
                        key: "getType",
                        value: function() {
                            return (0, P.Z)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "format",
                        value: function(u, h) {
                            return (0, t.Z)(this, u, h ? e({}, h, {
                                v2: !0
                            }) : {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "formatNational",
                        value: function(u) {
                            return this.format("NATIONAL", u)
                        }
                    }, {
                        key: "formatInternational",
                        value: function(u) {
                            return this.format("INTERNATIONAL", u)
                        }
                    }, {
                        key: "getURI",
                        value: function(u) {
                            return this.format("RFC3966", u)
                        }
                    }]), v
                }(),
                C = function(r) {
                    return /^[A-Z]{2}$/.test(r)
                }
        },
        2301: (b, _, n) => {
            n.d(_, {
                c6: () => $,
                ex: () => f,
                sJ: () => l,
                uv: () => g,
                xc: () => P,
                xg: () => s,
                xy: () => y
            });
            var f = 2,
                l = 17,
                s = 3,
                P = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9",
                t = "-\u2010-\u2015\u2212\u30FC\uFF0D",
                e = "\uFF0F/",
                a = "\uFF0E.",
                $ = " \xA0\xAD\u200B\u2060\u3000",
                o = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]",
                c = "~\u2053\u223C\uFF5E",
                g = "".concat(t).concat(e).concat(a).concat($).concat(o).concat(c),
                y = "+\uFF0B"
        },
        75150: (b, _, n) => {
            n.d(_, {
                Z: () => c
            });
            var f = n(54699),
                l = n(1129),
                s = n(16271),
                P = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

            function t(r, u, h) {
                var m = new s.ZP(h);
                if (m.selectNumberingPlan(r, u), m.defaultIDDPrefix()) return m.defaultIDDPrefix();
                if (P.test(m.IDDPrefix())) return m.IDDPrefix()
            }
            var e = n(11600);

            function a(r) {
                for (var u = 1; u < arguments.length; u++) {
                    var h = arguments[u] != null ? arguments[u] : {},
                        m = Object.keys(h);
                    typeof Object.getOwnPropertySymbols == "function" && (m = m.concat(Object.getOwnPropertySymbols(h).filter(function(O) {
                        return Object.getOwnPropertyDescriptor(h, O).enumerable
                    }))), m.forEach(function(O) {
                        $(r, O, h[O])
                    })
                }
                return r
            }

            function $(r, u, h) {
                return u in r ? Object.defineProperty(r, u, {
                    value: h,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[u] = h, r
            }
            var o = {
                formatExtension: function(u, h, m) {
                    return "".concat(u).concat(m.ext()).concat(h)
                }
            };

            function c(r, u, h, m) {
                if (h ? h = a({}, o, h) : h = o, m = new s.ZP(m), r.country && r.country !== "001") {
                    if (!m.hasCountry(r.country)) throw new Error("Unknown country: ".concat(r.country));
                    m.country(r.country)
                } else if (r.countryCallingCode) m.selectNumberingPlan(r.countryCallingCode);
                else return r.phone || "";
                var O = m.countryCallingCode(),
                    T = h.v2 ? r.nationalNumber : r.phone,
                    F;
                switch (u) {
                    case "NATIONAL":
                        return T ? (F = g(T, r.carrierCode, "NATIONAL", m, h), C(F, r.ext, m, h.formatExtension)) : "";
                    case "INTERNATIONAL":
                        return T ? (F = g(T, null, "INTERNATIONAL", m, h), F = "+".concat(O, " ").concat(F), C(F, r.ext, m, h.formatExtension)) : "+".concat(O);
                    case "E.164":
                        return "+".concat(O).concat(T);
                    case "RFC3966":
                        return (0, e.Y)({
                            number: "+".concat(O).concat(T),
                            ext: r.ext
                        });
                    case "IDD":
                        if (!h.fromCountry) return;
                        var M = v(T, r.carrierCode, O, h.fromCountry, m);
                        return C(M, r.ext, m, h.formatExtension);
                    default:
                        throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(u, '"'))
                }
            }

            function g(r, u, h, m, O) {
                var T = y(m.formats(), r);
                return T ? (0, l.Z)(r, T, {
                    useInternationalFormat: h === "INTERNATIONAL",
                    withNationalPrefix: !(T.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && O && O.nationalPrefix === !1),
                    carrierCode: u,
                    metadata: m
                }) : r
            }

            function y(r, u) {
                for (var O = r, h = Array.isArray(O), m = 0, O = h ? O : O[Symbol.iterator]();;) {
                    var T;
                    if (h) {
                        if (m >= O.length) break;
                        T = O[m++]
                    } else {
                        if (m = O.next(), m.done) break;
                        T = m.value
                    }
                    var F = T;
                    if (F.leadingDigitsPatterns().length > 0) {
                        var M = F.leadingDigitsPatterns()[F.leadingDigitsPatterns().length - 1];
                        if (u.search(M) !== 0) continue
                    }
                    if ((0, f.Z)(u, F.pattern())) return F
                }
            }

            function C(r, u, h, m) {
                return u ? m(r, u, h) : r
            }

            function v(r, u, h, m, O) {
                var T = (0, s.Gg)(m, O.metadata);
                if (T === h) {
                    var F = g(r, u, "NATIONAL", O);
                    return h === "1" ? h + " " + F : F
                }
                var M = t(m, void 0, O.metadata);
                if (M) return "".concat(M, " ").concat(h, " ").concat(g(r, null, "INTERNATIONAL", O))
            }
        },
        11600: (b, _, n) => {
            n.d(_, {
                Y: () => a,
                m: () => e
            });
            var f = n(91113);

            function l($, o) {
                return t($) || P($, o) || s()
            }

            function s() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }

            function P($, o) {
                var c = [],
                    g = !0,
                    y = !1,
                    C = void 0;
                try {
                    for (var v = $[Symbol.iterator](), r; !(g = (r = v.next()).done) && (c.push(r.value), !(o && c.length === o)); g = !0);
                } catch (u) {
                    y = !0, C = u
                } finally {
                    try {
                        !g && v.return != null && v.return()
                    } finally {
                        if (y) throw C
                    }
                }
                return c
            }

            function t($) {
                if (Array.isArray($)) return $
            }

            function e($) {
                var o, c;
                $ = $.replace(/^tel:/, "tel=");
                for (var C = $.split(";"), g = Array.isArray(C), y = 0, C = g ? C : C[Symbol.iterator]();;) {
                    var v;
                    if (g) {
                        if (y >= C.length) break;
                        v = C[y++]
                    } else {
                        if (y = C.next(), y.done) break;
                        v = y.value
                    }
                    var r = v,
                        u = r.split("="),
                        h = l(u, 2),
                        m = h[0],
                        O = h[1];
                    switch (m) {
                        case "tel":
                            o = O;
                            break;
                        case "ext":
                            c = O;
                            break;
                        case "phone-context":
                            O[0] === "+" && (o = O + o);
                            break
                    }
                }
                if (!(0, f.ZP)(o)) return {};
                var T = {
                    number: o
                };
                return c && (T.ext = c), T
            }

            function a($) {
                var o = $.number,
                    c = $.ext;
                if (!o) return "";
                if (o[0] !== "+") throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                return "tel:".concat(o).concat(c ? ";ext=" + c : "")
            }
        },
        42696: (b, _, n) => {
            n.d(_, {
                Z: () => l
            });
            var f = n(2301);

            function l(s) {
                return s.replace(new RegExp("[".concat(f.uv, "]+"), "g"), " ").trim()
            }
        },
        8982: (b, _, n) => {
            n.d(_, {
                Z: () => l
            });

            function f(P, t) {
                for (var e = P.slice(), o = t, a = Array.isArray(o), $ = 0, o = a ? o : o[Symbol.iterator]();;) {
                    var c;
                    if (a) {
                        if ($ >= o.length) break;
                        c = o[$++]
                    } else {
                        if ($ = o.next(), $.done) break;
                        c = $.value
                    }
                    var g = c;
                    P.indexOf(g) < 0 && e.push(g)
                }
                return e.sort(function(y, C) {
                    return y - C
                })
            }

            function l(P, t) {
                return s(P, void 0, t)
            }

            function s(P, t, e) {
                var a = e.type(t),
                    $ = a && a.possibleLengths() || e.possibleLengths();
                if (!$) return "IS_POSSIBLE";
                if (t === "FIXED_LINE_OR_MOBILE") {
                    if (!e.type("FIXED_LINE")) return s(P, "MOBILE", e);
                    var o = e.type("MOBILE");
                    o && ($ = f($, o.possibleLengths()))
                } else if (t && !a) return "INVALID_LENGTH";
                var c = P.length,
                    g = $[0];
                return g === c ? "IS_POSSIBLE" : g > c ? "TOO_SHORT" : $[$.length - 1] < c ? "TOO_LONG" : $.indexOf(c, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
            }
        },
        50921: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(2301),
                l = ";ext=",
                s = function(e) {
                    return "([".concat(f.xc, "]{1,").concat(e, "})")
                };

            function P(t) {
                var e = "20",
                    a = "15",
                    $ = "9",
                    o = "6",
                    c = "[ \xA0\\t,]*",
                    g = "[:\\.\uFF0E]?[ \xA0\\t,-]*",
                    y = "#?",
                    C = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)",
                    v = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)",
                    r = "[- ]+",
                    u = "[ \xA0\\t]*",
                    h = "(?:,{2}|;)",
                    m = l + s(e),
                    O = c + C + g + s(e) + y,
                    T = c + v + g + s($) + y,
                    F = r + s(o) + "#",
                    M = u + h + g + s(a) + y,
                    p = u + "(?:,)+" + g + s($) + y;
                return m + "|" + O + "|" + T + "|" + F + "|" + M + "|" + p
            }
        },
        54348: (b, _, n) => {
            n.d(_, {
                Z: () => t
            });
            var f = n(37593),
                l = n(61362),
                s = n(16271),
                P = n(2301);

            function t(e, a, $, o) {
                if (!e) return {};
                if (e[0] !== "+") {
                    var c = (0, f.Z)(e, a, $, o);
                    if (c && c !== e) e = "+" + c;
                    else {
                        if (a || $) {
                            var g = (0, l.Z)(e, a, $, o),
                                y = g.countryCallingCode,
                                C = g.number;
                            if (y) return {
                                countryCallingCode: y,
                                number: C
                            }
                        }
                        return {
                            number: e
                        }
                    }
                }
                if (e[1] === "0") return {};
                o = new s.ZP(o);
                for (var v = 2; v - 1 <= P.xg && v <= e.length;) {
                    var r = e.slice(1, v);
                    if (o.hasCallingCode(r)) return o.selectNumberingPlan(r), {
                        countryCallingCode: r,
                        number: e.slice(v)
                    };
                    v++
                }
                return {}
            }
        },
        61362: (b, _, n) => {
            n.d(_, {
                Z: () => t
            });
            var f = n(16271),
                l = n(54699),
                s = n(649),
                P = n(8982);

            function t(e, a, $, o) {
                var c = a ? (0, f.Gg)(a, o) : $;
                if (e.indexOf(c) === 0) {
                    o = new f.ZP(o), o.selectNumberingPlan(a, $);
                    var g = e.slice(c.length),
                        y = (0, s.Z)(g, o),
                        C = y.nationalNumber,
                        v = (0, s.Z)(e, o),
                        r = v.nationalNumber;
                    if (!(0, l.Z)(r, o.nationalNumberPattern()) && (0, l.Z)(C, o.nationalNumberPattern()) || (0, P.Z)(r, o) === "TOO_LONG") return {
                        countryCallingCode: c,
                        number: g
                    }
                }
                return {
                    number: e
                }
            }
        },
        649: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(29906),
                l = n(54699),
                s = n(8982);

            function P(e, a) {
                var $ = (0, f.Z)(e, a),
                    o = $.nationalNumber,
                    c = $.carrierCode;
                if (!t(e, o, a)) return {
                    nationalNumber: e
                };
                if (e.length !== o.length + (c ? c.length : 0) && a.possibleLengths()) switch ((0, s.Z)(o, a)) {
                    case "TOO_SHORT":
                    case "INVALID_LENGTH":
                        return {
                            nationalNumber: e
                        }
                }
                return {
                    nationalNumber: o,
                    carrierCode: c
                }
            }

            function t(e, a, $) {
                return !((0, l.Z)(e, $.nationalNumberPattern()) && !(0, l.Z)(a, $.nationalNumberPattern()))
            }
        },
        29906: (b, _, n) => {
            n.d(_, {
                Z: () => f
            });

            function f(l, s) {
                if (l && s.numberingPlan.nationalPrefixForParsing()) {
                    var P = new RegExp("^(?:" + s.numberingPlan.nationalPrefixForParsing() + ")"),
                        t = P.exec(l);
                    if (t) {
                        var e, a, $ = t.length - 1,
                            o = $ > 0 && t[$];
                        if (s.nationalPrefixTransformRule() && o) e = l.replace(P, s.nationalPrefixTransformRule()), $ > 1 && (a = t[1]);
                        else {
                            var c = t[0];
                            e = l.slice(c.length), o && (a = t[1])
                        }
                        var g;
                        if (o) {
                            var y = l.indexOf(t[1]),
                                C = l.slice(0, y);
                            C === s.numberingPlan.nationalPrefix() && (g = s.numberingPlan.nationalPrefix())
                        } else g = t[0];
                        return {
                            nationalNumber: e,
                            nationalPrefix: g,
                            carrierCode: a
                        }
                    }
                }
                return {
                    nationalNumber: l
                }
            }
        },
        1129: (b, _, n) => {
            n.d(_, {
                Z: () => s,
                i: () => l
            });
            var f = n(42696),
                l = /(\$\d)/;

            function s(P, t, e) {
                var a = e.useInternationalFormat,
                    $ = e.withNationalPrefix,
                    o = e.carrierCode,
                    c = e.metadata,
                    g = P.replace(new RegExp(t.pattern()), a ? t.internationalFormat() : $ && t.nationalPrefixFormattingRule() ? t.format().replace(l, t.nationalPrefixFormattingRule()) : t.format());
                return a ? (0, f.Z)(g) : g
            }
        },
        92126: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(16271),
                l = n(85055),
                s = !1;

            function P(e, a, $) {
                if (s && $.isNonGeographicCallingCode(e)) return "001";
                var o = $.getCountryCodesForCallingCode(e);
                if (!!o) return o.length === 1 ? o[0] : t(o, a, $.metadata)
            }

            function t(e, a, $) {
                $ = new f.ZP($);
                for (var g = e, o = Array.isArray(g), c = 0, g = o ? g : g[Symbol.iterator]();;) {
                    var y;
                    if (o) {
                        if (c >= g.length) break;
                        y = g[c++]
                    } else {
                        if (c = g.next(), c.done) break;
                        y = c.value
                    }
                    var C = y;
                    if ($.country(C), $.leadingDigits()) {
                        if (a && a.search($.leadingDigits()) === 0) return C
                    } else if ((0, l.Z)({
                            phone: a,
                            country: C
                        }, void 0, $.metadata)) return C
                }
            }
        },
        85055: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(16271),
                l = n(54699),
                s = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

            function P(e, a, $) {
                if (a = a || {}, !!e.country) {
                    $ = new f.ZP($), $.selectNumberingPlan(e.country, e.countryCallingCode);
                    var o = a.v2 ? e.nationalNumber : e.phone;
                    if (!!(0, l.Z)(o, $.nationalNumberPattern())) {
                        if (t(o, "FIXED_LINE", $)) return $.type("MOBILE") && $.type("MOBILE").pattern() === "" || !$.type("MOBILE") || t(o, "MOBILE", $) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
                        for (var c = 0, g = s; c < g.length; c++) {
                            var y = g[c];
                            if (t(o, y, $)) return y
                        }
                    }
                }
            }

            function t(e, a, $) {
                return a = $.type(a), !a || !a.pattern() || a.possibleLengths() && a.possibleLengths().indexOf(e.length) < 0 ? !1 : (0, l.Z)(e, a.pattern())
            }
        },
        91113: (b, _, n) => {
            n.d(_, {
                R1: () => e,
                ZP: () => $,
                ch: () => o
            });
            var f = n(2301),
                l = n(50921),
                s = "[" + f.xc + "]{" + f.ex + "}",
                P = "[" + f.xy + "]{0,1}(?:[" + f.uv + "]*[" + f.xc + "]){3,}[" + f.uv + f.xc + "]*",
                t = new RegExp("^[" + f.xy + "]{0,1}(?:[" + f.uv + "]*[" + f.xc + "]){1,2}$", "i"),
                e = P + "(?:" + (0, l.Z)() + ")?",
                a = new RegExp("^" + s + "$|^" + e + "$", "i");

            function $(c) {
                return c.length >= f.ex && a.test(c)
            }

            function o(c) {
                return t.test(c)
            }
        },
        54699: (b, _, n) => {
            n.d(_, {
                Z: () => f
            });

            function f(l, s) {
                return l = l || "", new RegExp("^(?:" + s + ")$").test(l)
            }
        },
        89881: (b, _, n) => {
            n.d(_, {
                ZP: () => s,
                jd: () => f,
                xh: () => l
            });
            var f = {
                "0": "0",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "\uFF10": "0",
                "\uFF11": "1",
                "\uFF12": "2",
                "\uFF13": "3",
                "\uFF14": "4",
                "\uFF15": "5",
                "\uFF16": "6",
                "\uFF17": "7",
                "\uFF18": "8",
                "\uFF19": "9",
                "\u0660": "0",
                "\u0661": "1",
                "\u0662": "2",
                "\u0663": "3",
                "\u0664": "4",
                "\u0665": "5",
                "\u0666": "6",
                "\u0667": "7",
                "\u0668": "8",
                "\u0669": "9",
                "\u06F0": "0",
                "\u06F1": "1",
                "\u06F2": "2",
                "\u06F3": "3",
                "\u06F4": "4",
                "\u06F5": "5",
                "\u06F6": "6",
                "\u06F7": "7",
                "\u06F8": "8",
                "\u06F9": "9"
            };

            function l(P) {
                return f[P]
            }

            function s(P) {
                for (var t = "", $ = P.split(""), e = Array.isArray($), a = 0, $ = e ? $ : $[Symbol.iterator]();;) {
                    var o;
                    if (e) {
                        if (a >= $.length) break;
                        o = $[a++]
                    } else {
                        if (a = $.next(), a.done) break;
                        o = a.value
                    }
                    var c = o,
                        g = l(c);
                    g && (t += g)
                }
                return t
            }
        },
        37593: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(16271),
                l = n(2301),
                s = new RegExp("([" + l.xc + "])");

            function P(t, e, a, $) {
                if (!!e) {
                    var o = new f.ZP($);
                    o.selectNumberingPlan(e, a);
                    var c = new RegExp(o.IDDPrefix());
                    if (t.search(c) === 0) {
                        t = t.slice(t.match(c)[0].length);
                        var g = t.match(s);
                        if (!(g && g[1] != null && g[1].length > 0 && g[1] === "0")) return t
                    }
                }
            }
        },
        53508: (b, _, n) => {
            n.d(_, {
                D: () => P,
                Z: () => s
            });
            var f = n(16271),
                l = n(8982);

            function s(t, e, a) {
                if (e === void 0 && (e = {}), a = new f.ZP(a), e.v2) {
                    if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
                    a.selectNumberingPlan(t.countryCallingCode)
                } else {
                    if (!t.phone) return !1;
                    if (t.country) {
                        if (!a.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
                        a.country(t.country)
                    } else {
                        if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
                        a.selectNumberingPlan(t.countryCallingCode)
                    }
                }
                if (a.possibleLengths()) return P(t.phone || t.nationalNumber, a);
                if (t.countryCallingCode && a.isNonGeographicCallingCode(t.countryCallingCode)) return !0;
                throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
            }

            function P(t, e) {
                switch ((0, l.Z)(t, e)) {
                    case "IS_POSSIBLE":
                        return !0;
                    default:
                        return !1
                }
            }
        },
        16271: (b, _, n) => {
            n.d(_, {
                ZP: () => g,
                Gg: () => F,
                y9: () => T,
                aS: () => M
            });

            function f(E, d) {
                E = E.split("-"), d = d.split("-");
                for (var i = E[0].split("."), N = d[0].split("."), I = 0; I < 3; I++) {
                    var x = Number(i[I]),
                        D = Number(N[I]);
                    if (x > D) return 1;
                    if (D > x) return -1;
                    if (!isNaN(x) && isNaN(D)) return 1;
                    if (isNaN(x) && !isNaN(D)) return -1
                }
                return E[1] && d[1] ? E[1] > d[1] ? 1 : E[1] < d[1] ? -1 : 0 : !E[1] && d[1] ? 1 : E[1] && !d[1] ? -1 : 0
            }

            function l(E) {
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(i) {
                    return typeof i
                } : l = function(i) {
                    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
                }, l(E)
            }

            function s(E, d) {
                if (!(E instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function P(E, d) {
                for (var i = 0; i < d.length; i++) {
                    var N = d[i];
                    N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(E, N.key, N)
                }
            }

            function t(E, d, i) {
                return d && P(E.prototype, d), i && P(E, i), E
            }
            var e = "1.0.18",
                a = "1.2.0",
                $ = "1.7.35",
                o = " ext. ",
                c = /^\d+$/,
                g = function() {
                    function E(d) {
                        s(this, E), h(d), this.metadata = d, p.call(this, d)
                    }
                    return t(E, [{
                        key: "getCountries",
                        value: function() {
                            return Object.keys(this.metadata.countries).filter(function(i) {
                                return i !== "001"
                            })
                        }
                    }, {
                        key: "getCountryMetadata",
                        value: function(i) {
                            return this.metadata.countries[i]
                        }
                    }, {
                        key: "nonGeographic",
                        value: function() {
                            if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                        }
                    }, {
                        key: "hasCountry",
                        value: function(i) {
                            return this.getCountryMetadata(i) !== void 0
                        }
                    }, {
                        key: "hasCallingCode",
                        value: function(i) {
                            if (this.getCountryCodesForCallingCode(i)) return !0;
                            if (this.nonGeographic()) {
                                if (this.nonGeographic()[i]) return !0
                            } else {
                                var N = this.countryCallingCodes()[i];
                                if (N && N.length === 1 && N[0] === "001") return !0
                            }
                        }
                    }, {
                        key: "isNonGeographicCallingCode",
                        value: function(i) {
                            return this.nonGeographic() ? !!this.nonGeographic()[i] : !this.getCountryCodesForCallingCode(i)
                        }
                    }, {
                        key: "country",
                        value: function(i) {
                            return this.selectNumberingPlan(i)
                        }
                    }, {
                        key: "selectNumberingPlan",
                        value: function(i, N) {
                            if (i && c.test(i) && (N = i, i = null), i && i !== "001") {
                                if (!this.hasCountry(i)) throw new Error("Unknown country: ".concat(i));
                                this.numberingPlan = new y(this.getCountryMetadata(i), this)
                            } else if (N) {
                                if (!this.hasCallingCode(N)) throw new Error("Unknown calling code: ".concat(N));
                                this.numberingPlan = new y(this.getNumberingPlanMetadata(N), this)
                            } else this.numberingPlan = void 0;
                            return this
                        }
                    }, {
                        key: "getCountryCodesForCallingCode",
                        value: function(i) {
                            var N = this.countryCallingCodes()[i];
                            if (N) return N.length === 1 && N[0].length === 3 ? void 0 : N
                        }
                    }, {
                        key: "getCountryCodeForCallingCode",
                        value: function(i) {
                            var N = this.getCountryCodesForCallingCode(i);
                            if (N) return N[0]
                        }
                    }, {
                        key: "getNumberingPlanMetadata",
                        value: function(i) {
                            var N = this.getCountryCodeForCallingCode(i);
                            if (N) return this.getCountryMetadata(N);
                            if (this.nonGeographic()) {
                                var I = this.nonGeographic()[i];
                                if (I) return I
                            } else {
                                var x = this.countryCallingCodes()[i];
                                if (x && x.length === 1 && x[0] === "001") return this.metadata.countries["001"]
                            }
                        }
                    }, {
                        key: "countryCallingCode",
                        value: function() {
                            return this.numberingPlan.callingCode()
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            return this.numberingPlan.IDDPrefix()
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            return this.numberingPlan.defaultIDDPrefix()
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.numberingPlan.nationalNumberPattern()
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            return this.numberingPlan.possibleLengths()
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            return this.numberingPlan.formats()
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this.numberingPlan.nationalPrefixForParsing()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.numberingPlan.nationalPrefixTransformRule()
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.numberingPlan.leadingDigits()
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return this.numberingPlan.hasTypes()
                        }
                    }, {
                        key: "type",
                        value: function(i) {
                            return this.numberingPlan.type(i)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.numberingPlan.ext()
                        }
                    }, {
                        key: "countryCallingCodes",
                        value: function() {
                            return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                        }
                    }, {
                        key: "chooseCountryByCountryCallingCode",
                        value: function(i) {
                            return this.selectNumberingPlan(i)
                        }
                    }, {
                        key: "hasSelectedNumberingPlan",
                        value: function() {
                            return this.numberingPlan !== void 0
                        }
                    }]), E
                }(),
                y = function() {
                    function E(d, i) {
                        s(this, E), this.globalMetadataObject = i, this.metadata = d, p.call(this, i.metadata)
                    }
                    return t(E, [{
                        key: "callingCode",
                        value: function() {
                            return this.metadata[0]
                        }
                    }, {
                        key: "getDefaultCountryMetadataForRegion",
                        value: function() {
                            return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            if (!(this.v1 || this.v2)) return this.metadata[1]
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            if (!(this.v1 || this.v2)) return this.metadata[12]
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                        }
                    }, {
                        key: "_getFormats",
                        value: function(i) {
                            return i[this.v1 ? 2 : this.v2 ? 3 : 4]
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            var i = this,
                                N = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                            return N.map(function(I) {
                                return new C(I, i)
                            })
                        }
                    }, {
                        key: "nationalPrefix",
                        value: function() {
                            return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                        }
                    }, {
                        key: "_getNationalPrefixFormattingRule",
                        value: function(i) {
                            return i[this.v1 ? 4 : this.v2 ? 5 : 6]
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "_nationalPrefixForParsing",
                        value: function() {
                            return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this._nationalPrefixForParsing() || this.nationalPrefix()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                        }
                    }, {
                        key: "_getNationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                        }
                    }, {
                        key: "types",
                        value: function() {
                            return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return this.types() && this.types().length === 0 ? !1 : !!this.types()
                        }
                    }, {
                        key: "type",
                        value: function(i) {
                            if (this.hasTypes() && u(this.types(), i)) return new r(u(this.types(), i), this)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.v1 || this.v2 ? o : this.metadata[13] || o
                        }
                    }]), E
                }(),
                C = function() {
                    function E(d, i) {
                        s(this, E), this._format = d, this.metadata = i
                    }
                    return t(E, [{
                        key: "pattern",
                        value: function() {
                            return this._format[0]
                        }
                    }, {
                        key: "format",
                        value: function() {
                            return this._format[1]
                        }
                    }, {
                        key: "leadingDigitsPatterns",
                        value: function() {
                            return this._format[2] || []
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                        value: function() {
                            return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "usesNationalPrefix",
                        value: function() {
                            return !!(this.nationalPrefixFormattingRule() && !v.test(this.nationalPrefixFormattingRule()))
                        }
                    }, {
                        key: "internationalFormat",
                        value: function() {
                            return this._format[5] || this.format()
                        }
                    }]), E
                }(),
                v = /^\(?\$1\)?$/,
                r = function() {
                    function E(d, i) {
                        s(this, E), this.type = d, this.metadata = i
                    }
                    return t(E, [{
                        key: "pattern",
                        value: function() {
                            return this.metadata.v1 ? this.type : this.type[0]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                        }
                    }]), E
                }();

            function u(E, d) {
                switch (d) {
                    case "FIXED_LINE":
                        return E[0];
                    case "MOBILE":
                        return E[1];
                    case "TOLL_FREE":
                        return E[2];
                    case "PREMIUM_RATE":
                        return E[3];
                    case "PERSONAL_NUMBER":
                        return E[4];
                    case "VOICEMAIL":
                        return E[5];
                    case "UAN":
                        return E[6];
                    case "PAGER":
                        return E[7];
                    case "VOIP":
                        return E[8];
                    case "SHARED_COST":
                        return E[9]
                }
            }

            function h(E) {
                if (!E) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                if (!m(E) || !m(E.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(m(E) ? "an object of shape: { " + Object.keys(E).join(", ") + " }" : "a " + O(E) + ": " + E, "."))
            }
            var m = function(d) {
                    return l(d) === "object"
                },
                O = function(d) {
                    return l(d)
                };

            function T(E, d) {
                return d = new g(d), d.hasCountry(E) ? d.country(E).ext() : o
            }

            function F(E, d) {
                if (d = new g(d), d.hasCountry(E)) return d.country(E).countryCallingCode();
                throw new Error("Unknown country: ".concat(E))
            }

            function M(E, d) {
                return d.countries[E] !== void 0
            }

            function p(E) {
                var d = E.version;
                typeof d == "number" ? (this.v1 = d === 1, this.v2 = d === 2, this.v3 = d === 3, this.v4 = d === 4) : d ? f(d, a) === -1 ? this.v2 = !0 : f(d, $) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
            }
        },
        64478: (b, _, n) => {
            n.d(_, {
                J: () => s,
                Z: () => l
            });
            var f = n(89881);

            function l(P) {
                for (var t = "", $ = P.split(""), e = Array.isArray($), a = 0, $ = e ? $ : $[Symbol.iterator]();;) {
                    var o;
                    if (e) {
                        if (a >= $.length) break;
                        o = $[a++]
                    } else {
                        if (a = $.next(), a.done) break;
                        o = a.value
                    }
                    var c = o;
                    t += s(c, t) || ""
                }
                return t
            }

            function s(P, t) {
                return P === "+" ? t ? void 0 : "+" : (0, f.xh)(P)
            }
        },
        98572: (b, _, n) => {
            n.d(_, {
                Z: () => o,
                b: () => c
            });
            var f = n(74348);

            function l(y) {
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(v) {
                    return typeof v
                } : l = function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v
                }, l(y)
            }

            function s(y) {
                for (var C = 1; C < arguments.length; C++) {
                    var v = arguments[C] != null ? arguments[C] : {},
                        r = Object.keys(v);
                    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(v).filter(function(u) {
                        return Object.getOwnPropertyDescriptor(v, u).enumerable
                    }))), r.forEach(function(u) {
                        P(y, u, v[u])
                    })
                }
                return y
            }

            function P(y, C, v) {
                return C in y ? Object.defineProperty(y, C, {
                    value: v,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : y[C] = v, y
            }

            function t(y, C) {
                return $(y) || a(y, C) || e()
            }

            function e() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }

            function a(y, C) {
                var v = [],
                    r = !0,
                    u = !1,
                    h = void 0;
                try {
                    for (var m = y[Symbol.iterator](), O; !(r = (O = m.next()).done) && (v.push(O.value), !(C && v.length === C)); r = !0);
                } catch (T) {
                    u = !0, h = T
                } finally {
                    try {
                        !r && m.return != null && m.return()
                    } finally {
                        if (u) throw h
                    }
                }
                return v
            }

            function $(y) {
                if (Array.isArray(y)) return y
            }

            function o() {
                var y = c(arguments),
                    C = y.text,
                    v = y.options,
                    r = y.metadata;
                return (0, f.Z)(C, v, r)
            }

            function c(y) {
                var C = Array.prototype.slice.call(y),
                    v = t(C, 4),
                    r = v[0],
                    u = v[1],
                    h = v[2],
                    m = v[3],
                    O, T, F;
                if (typeof r == "string") O = r;
                else throw new TypeError("A text for parsing must be a string.");
                if (!u || typeof u == "string") m ? (T = h, F = m) : (T = void 0, F = h), u && (T = s({
                    defaultCountry: u
                }, T));
                else if (g(u)) h ? (T = u, F = h) : F = u;
                else throw new Error("Invalid second argument: ".concat(u));
                return {
                    text: O,
                    options: T,
                    metadata: F
                }
            }
            var g = function(C) {
                return l(C) === "object"
            }
        },
        74348: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(62953);

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e] != null ? arguments[e] : {},
                        $ = Object.keys(a);
                    typeof Object.getOwnPropertySymbols == "function" && ($ = $.concat(Object.getOwnPropertySymbols(a).filter(function(o) {
                        return Object.getOwnPropertyDescriptor(a, o).enumerable
                    }))), $.forEach(function(o) {
                        s(t, o, a[o])
                    })
                }
                return t
            }

            function s(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }

            function P(t, e, a) {
                return (0, f.Z)(t, l({}, e, {
                    v2: !0
                }), a)
            }
        },
        62953: (b, _, n) => {
            n.d(_, {
                Z: () => T
            });
            var f = n(2301),
                l = n(19871),
                s = n(16271),
                P = n(91113),
                t = n(50921),
                e = new RegExp("(?:" + (0, t.Z)() + ")$", "i");

            function a(d) {
                var i = d.search(e);
                if (i < 0) return {};
                for (var N = d.slice(0, i), I = d.match(e), x = 1; x < I.length;) {
                    if (I[x]) return {
                        number: N,
                        ext: I[x]
                    };
                    x++
                }
            }
            var $ = n(64478),
                o = n(53508),
                c = n(11600),
                g = n(62972),
                y = n(54699),
                C = n(54348),
                v = n(649),
                r = n(92126),
                u = 250,
                h = new RegExp("[" + f.xy + f.xc + "]"),
                m = new RegExp("[^" + f.xc + "#]+$"),
                O = !1;

            function T(d, i, N) {
                if (i = i || {}, N = new s.ZP(N), i.defaultCountry && !N.hasCountry(i.defaultCountry)) throw i.v2 ? new l.Z("INVALID_COUNTRY") : new Error("Unknown country: ".concat(i.defaultCountry));
                var I = M(d, i.v2, i.extract),
                    x = I.number,
                    D = I.ext,
                    B = I.error;
                if (!x) {
                    if (i.v2) throw B === "TOO_SHORT" ? new l.Z("TOO_SHORT") : new l.Z("NOT_A_NUMBER");
                    return {}
                }
                var R = E(x, i.defaultCountry, i.defaultCallingCode, N),
                    L = R.country,
                    A = R.nationalNumber,
                    G = R.countryCallingCode,
                    S = R.carrierCode;
                if (!N.hasSelectedNumberingPlan()) {
                    if (i.v2) throw new l.Z("INVALID_COUNTRY");
                    return {}
                }
                if (!A || A.length < f.ex) {
                    if (i.v2) throw new l.Z("TOO_SHORT");
                    return {}
                }
                if (A.length > f.sJ) {
                    if (i.v2) throw new l.Z("TOO_LONG");
                    return {}
                }
                if (i.v2) {
                    var U = new g.Z(G, A, N.metadata);
                    return L && (U.country = L), S && (U.carrierCode = S), D && (U.ext = D), U
                }
                var Z = (i.extended ? N.hasSelectedNumberingPlan() : L) ? (0, y.Z)(A, N.nationalNumberPattern()) : !1;
                return i.extended ? {
                    country: L,
                    countryCallingCode: G,
                    carrierCode: S,
                    valid: Z,
                    possible: Z ? !0 : !!(i.extended === !0 && N.possibleLengths() && (0, o.D)(A, N)),
                    phone: A,
                    ext: D
                } : Z ? p(L, A, D) : {}
            }

            function F(d, i, N) {
                if (!!d) {
                    if (d.length > u) {
                        if (N) throw new l.Z("TOO_LONG");
                        return
                    }
                    if (i === !1) return d;
                    var I = d.search(h);
                    if (!(I < 0)) return d.slice(I).replace(m, "")
                }
            }

            function M(d, i, N) {
                if (d && d.indexOf("tel:") === 0) return (0, c.m)(d);
                var I = F(d, N, i);
                if (!I) return {};
                if (!(0, P.ZP)(I)) return (0, P.ch)(I) ? {
                    error: "TOO_SHORT"
                } : {};
                var x = a(I);
                return x.ext ? x : {
                    number: I
                }
            }

            function p(d, i, N) {
                var I = {
                    country: d,
                    phone: i
                };
                return N && (I.ext = N), I
            }

            function E(d, i, N, I) {
                var x = (0, C.Z)((0, $.Z)(d), i, N, I.metadata),
                    D = x.countryCallingCode,
                    B = x.number,
                    R;
                if (D) I.selectNumberingPlan(D);
                else if (B && (i || N)) I.selectNumberingPlan(i, N), i ? R = i : O && I.isNonGeographicCallingCode(N) && (R = "001"), D = N || (0, s.Gg)(i, I.metadata);
                else return {};
                if (!B) return {
                    countryCallingCode: D
                };
                var L = (0, v.Z)((0, $.Z)(B), I),
                    A = L.nationalNumber,
                    G = L.carrierCode,
                    S = (0, r.Z)(D, A, I);
                return S && (R = S, S === "001" || I.country(R)), {
                    country: R,
                    countryCallingCode: D,
                    nationalNumber: A,
                    carrierCode: G
                }
            }
        },
        61798: (b, _, n) => {
            n.d(_, {
                Z: () => P
            });
            var f = n(16271),
                l = n(54699),
                s = n(85055);

            function P(t, e, a) {
                if (e = e || {}, a = new f.ZP(a), !t.country) return !1;
                if (a.selectNumberingPlan(t.country, t.countryCallingCode), a.hasTypes()) return (0, s.Z)(t, e, a.metadata) !== void 0;
                var $ = e.v2 ? t.nationalNumber : t.phone;
                return (0, l.Z)($, a.nationalNumberPattern())
            }
        },
        26893: (b, _, n) => {
            n.d(_, {
                h: () => s
            });
            var f = n(19203),
                l = n(98572);

            function s() {
                return (0, f.H)(l.Z, arguments)
            }
        },
        19203: (b, _, n) => {
            n.d(_, {
                Z: () => l,
                H: () => s
            });
            const f = {
                    version: 4,
                    country_calling_codes: {
                        "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                        "7": ["RU", "KZ"],
                        "20": ["EG"],
                        "27": ["ZA"],
                        "30": ["GR"],
                        "31": ["NL"],
                        "32": ["BE"],
                        "33": ["FR"],
                        "34": ["ES"],
                        "36": ["HU"],
                        "39": ["IT", "VA"],
                        "40": ["RO"],
                        "41": ["CH"],
                        "43": ["AT"],
                        "44": ["GB", "GG", "IM", "JE"],
                        "45": ["DK"],
                        "46": ["SE"],
                        "47": ["NO", "SJ"],
                        "48": ["PL"],
                        "49": ["DE"],
                        "51": ["PE"],
                        "52": ["MX"],
                        "53": ["CU"],
                        "54": ["AR"],
                        "55": ["BR"],
                        "56": ["CL"],
                        "57": ["CO"],
                        "58": ["VE"],
                        "60": ["MY"],
                        "61": ["AU", "CC", "CX"],
                        "62": ["ID"],
                        "63": ["PH"],
                        "64": ["NZ"],
                        "65": ["SG"],
                        "66": ["TH"],
                        "81": ["JP"],
                        "82": ["KR"],
                        "84": ["VN"],
                        "86": ["CN"],
                        "90": ["TR"],
                        "91": ["IN"],
                        "92": ["PK"],
                        "93": ["AF"],
                        "94": ["LK"],
                        "95": ["MM"],
                        "98": ["IR"],
                        "211": ["SS"],
                        "212": ["MA", "EH"],
                        "213": ["DZ"],
                        "216": ["TN"],
                        "218": ["LY"],
                        "220": ["GM"],
                        "221": ["SN"],
                        "222": ["MR"],
                        "223": ["ML"],
                        "224": ["GN"],
                        "225": ["CI"],
                        "226": ["BF"],
                        "227": ["NE"],
                        "228": ["TG"],
                        "229": ["BJ"],
                        "230": ["MU"],
                        "231": ["LR"],
                        "232": ["SL"],
                        "233": ["GH"],
                        "234": ["NG"],
                        "235": ["TD"],
                        "236": ["CF"],
                        "237": ["CM"],
                        "238": ["CV"],
                        "239": ["ST"],
                        "240": ["GQ"],
                        "241": ["GA"],
                        "242": ["CG"],
                        "243": ["CD"],
                        "244": ["AO"],
                        "245": ["GW"],
                        "246": ["IO"],
                        "247": ["AC"],
                        "248": ["SC"],
                        "249": ["SD"],
                        "250": ["RW"],
                        "251": ["ET"],
                        "252": ["SO"],
                        "253": ["DJ"],
                        "254": ["KE"],
                        "255": ["TZ"],
                        "256": ["UG"],
                        "257": ["BI"],
                        "258": ["MZ"],
                        "260": ["ZM"],
                        "261": ["MG"],
                        "262": ["RE", "YT"],
                        "263": ["ZW"],
                        "264": ["NA"],
                        "265": ["MW"],
                        "266": ["LS"],
                        "267": ["BW"],
                        "268": ["SZ"],
                        "269": ["KM"],
                        "290": ["SH", "TA"],
                        "291": ["ER"],
                        "297": ["AW"],
                        "298": ["FO"],
                        "299": ["GL"],
                        "350": ["GI"],
                        "351": ["PT"],
                        "352": ["LU"],
                        "353": ["IE"],
                        "354": ["IS"],
                        "355": ["AL"],
                        "356": ["MT"],
                        "357": ["CY"],
                        "358": ["FI", "AX"],
                        "359": ["BG"],
                        "370": ["LT"],
                        "371": ["LV"],
                        "372": ["EE"],
                        "373": ["MD"],
                        "374": ["AM"],
                        "375": ["BY"],
                        "376": ["AD"],
                        "377": ["MC"],
                        "378": ["SM"],
                        "380": ["UA"],
                        "381": ["RS"],
                        "382": ["ME"],
                        "383": ["XK"],
                        "385": ["HR"],
                        "386": ["SI"],
                        "387": ["BA"],
                        "389": ["MK"],
                        "420": ["CZ"],
                        "421": ["SK"],
                        "423": ["LI"],
                        "500": ["FK"],
                        "501": ["BZ"],
                        "502": ["GT"],
                        "503": ["SV"],
                        "504": ["HN"],
                        "505": ["NI"],
                        "506": ["CR"],
                        "507": ["PA"],
                        "508": ["PM"],
                        "509": ["HT"],
                        "590": ["GP", "BL", "MF"],
                        "591": ["BO"],
                        "592": ["GY"],
                        "593": ["EC"],
                        "594": ["GF"],
                        "595": ["PY"],
                        "596": ["MQ"],
                        "597": ["SR"],
                        "598": ["UY"],
                        "599": ["CW", "BQ"],
                        "670": ["TL"],
                        "672": ["NF"],
                        "673": ["BN"],
                        "674": ["NR"],
                        "675": ["PG"],
                        "676": ["TO"],
                        "677": ["SB"],
                        "678": ["VU"],
                        "679": ["FJ"],
                        "680": ["PW"],
                        "681": ["WF"],
                        "682": ["CK"],
                        "683": ["NU"],
                        "685": ["WS"],
                        "686": ["KI"],
                        "687": ["NC"],
                        "688": ["TV"],
                        "689": ["PF"],
                        "690": ["TK"],
                        "691": ["FM"],
                        "692": ["MH"],
                        "850": ["KP"],
                        "852": ["HK"],
                        "853": ["MO"],
                        "855": ["KH"],
                        "856": ["LA"],
                        "880": ["BD"],
                        "886": ["TW"],
                        "960": ["MV"],
                        "961": ["LB"],
                        "962": ["JO"],
                        "963": ["SY"],
                        "964": ["IQ"],
                        "965": ["KW"],
                        "966": ["SA"],
                        "967": ["YE"],
                        "968": ["OM"],
                        "970": ["PS"],
                        "971": ["AE"],
                        "972": ["IL"],
                        "973": ["BH"],
                        "974": ["QA"],
                        "975": ["BT"],
                        "976": ["MN"],
                        "977": ["NP"],
                        "992": ["TJ"],
                        "993": ["TM"],
                        "994": ["AZ"],
                        "995": ["GE"],
                        "996": ["KG"],
                        "998": ["UZ"]
                    },
                    countries: {
                        AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                        AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                            [
                                ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                            ]
                        ],
                        AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                            ], "0"
                        ],
                        AF: ["93", "00", "[2-7]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                            ], "0"
                        ],
                        AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
                        AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
                        AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                            [
                                ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                            ], "0"
                        ],
                        AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                            [
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                            ], "0"
                        ],
                        AO: ["244", "00", "[29]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                            ]
                        ],
                        AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                            [
                                ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                                ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                                ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                                ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                            ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                        ],
                        AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
                        AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                                ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                                ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                                ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                                ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                            ], "0"
                        ],
                        AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                            [
                                ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                            ], "0", 0, "0|(183[12])", 0, 0, 0, [
                                ["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                                ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                                ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                                ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                            ], "0011"
                        ],
                        AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                            ]
                        ],
                        AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                        AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                            ], "0"
                        ],
                        BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                            ], "0"
                        ],
                        BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
                        BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                                ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                                ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                                ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                            ], "0"
                        ],
                        BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                            ], "0"
                        ],
                        BF: ["226", "00", "[025-7]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                            ]
                        ],
                        BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9],
                            [
                                ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                            ], "0"
                        ],
                        BH: ["973", "00", "[136-9]\\d{7}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                            ]
                        ],
                        BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                            ]
                        ],
                        BJ: ["229", "00", "(?:[25689]\\d|40)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]
                            ]
                        ],
                        BL: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                            ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                        ]],
                        BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
                        BN: ["673", "00", "[2-578]\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                            ]
                        ],
                        BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                            [
                                ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                                ["(\\d{8})", "$1", ["[67]"]],
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                            ], "0", 0, "0(1\\d)?"
                        ],
                        BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                        BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                                ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                                ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                            ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                        ],
                        BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
                        BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                            ]
                        ],
                        BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                                ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                                ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                            ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                        ],
                        BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                                ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                            ]
                        ],
                        CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [
                            ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],
                            [""],
                            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                            ["900[2-9]\\d{6}"],
                            ["52(?:355[0-46-9]|4(?:5(?:2[024-9]|5[0-46-9])|60[1-9]|9(?:2[0-5]|49)))\\d{4}|52(?:3(?:[2-46-9][02-9]|5[02-46-9])|4(?:[2-478][02-9]|5[034]|6[2-9]|9[05-9])|7[2-4]\\d)\\d{5}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[1256]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]
                        ]],
                        CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                            ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                            ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"],
                        CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], "0"
                        ],
                        CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                            ]
                        ],
                        CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                            [
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                            ]
                        ],
                        CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                            ], "0"
                        ],
                        CI: ["225", "00", "[02]\\d{9}", [10],
                            [
                                ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                            ]
                        ],
                        CK: ["682", "00", "[2-578]\\d{4}", [5],
                            [
                                ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                            ]
                        ],
                        CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                            [
                                ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                            ]
                        ],
                        CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                            ]
                        ],
                        CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"],
                                ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                                ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                            ], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"
                        ],
                        CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:(?:1\\d|[36])\\d{3}|9101)\\d{6}|[124-8]\\d{7}", [8, 10, 11],
                            [
                                ["(\\d)(\\d{7})", "$1 $2", ["[146][2-9]|[2578]"], "($1)"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["[39]"]],
                                ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                            ], "0", 0, "0([3579]|4(?:[14]4|56))?"
                        ],
                        CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                            ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                        ],
                        CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                            [
                                ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                                ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                                ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                            ], "0"
                        ],
                        CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                            ]
                        ],
                        CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                            ], 0, 0, 0, 0, 0, "[69]"
                        ],
                        CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                            ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                            ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"],
                        CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                            ]
                        ],
                        CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                            ]
                        ],
                        DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:1\\d|2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|[23]1|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                            [
                                ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                                ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                                ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                                ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                                ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                                ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                                ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                                ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                                ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                                ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                                ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                                ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                            ], "0"
                        ],
                        DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                            ]
                        ],
                        DK: ["45", "00", "[2-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                            ]
                        ],
                        DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"],
                        DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
                        DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                            ], "0"
                        ],
                        EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                                ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                            ], "0"
                        ],
                        EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                        ER: ["291", "00", "[178]\\d{6}", [7],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                            ], "0"
                        ],
                        ES: ["34", "00", "[5-9]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                            ]
                        ],
                        ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                            ], "0"
                        ],
                        FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                                ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                                ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                                ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                            ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                        ],
                        FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        FK: ["500", "00", "[2-7]\\d{4}", [5]],
                        FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                            ]
                        ],
                        FO: ["298", "00", "[2-9]\\d{5}", [6],
                            [
                                ["(\\d{6})", "$1", ["[2-9]"]]
                            ], 0, 0, "(10(?:01|[12]0|88))"
                        ],
                        FR: ["33", "00", "[1-9]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                            ], "0"
                        ],
                        GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                            [
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                            ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
                        ],
                        GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                                ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                                ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-24-69]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-27-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                                ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                                ["80[08]\\d{7}|800\\d{6}|8001111"],
                                ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                                ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                                ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                                ["56\\d{8}", [10]]
                            ], 0, " x"
                        ],
                        GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
                        GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                            ], "0"
                        ],
                        GF: ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [
                            ["1481[25-9]\\d{5}", [10]],
                            ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                            ["80[08]\\d{7}|800\\d{6}|8001111"],
                            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                            ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                            ["56\\d{8}", [10]]
                        ]],
                        GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                            ], "0"
                        ],
                        GI: ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                            ]
                        ],
                        GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                            ]
                        ],
                        GM: ["220", "00", "[2-9]\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ]
                        ],
                        GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                            ]
                        ],
                        GP: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["590(?:0[1-68]|1[0-24-7]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],
                                ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                            ]
                        ],
                        GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                            ]
                        ],
                        GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                            [
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                                ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ]
                        ],
                        GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
                        GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                            ]
                        ],
                        GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                            ]
                        ],
                        HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                            [
                                ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                                ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                            ]
                        ],
                        HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                            ], "0"
                        ],
                        HT: ["509", "00", "[2-489]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                            ]
                        ],
                        HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                            ], "06"
                        ],
                        ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                                ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                                ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                                ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                                ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                                ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                            ], "0"
                        ],
                        IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                                ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                                ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                                ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                                ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                                ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                            ], "0"
                        ],
                        IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
                        IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                                ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                                ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                                ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                                ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                            ], "0"
                        ],
                        IO: ["246", "00", "3\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                            ]
                        ],
                        IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0"
                        ],
                        IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                            [
                                ["(\\d{4,5})", "$1", ["96"], "0$1"],
                                ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                            ], "0"
                        ],
                        IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|55\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                                ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                                ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[38]"]],
                                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                                ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                            ], 0, 0, 0, 0, 0, 0, [
                                ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                                ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                                ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                                ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                                ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                                ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                            ]
                        ],
                        JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [
                            ["1534[0-24-8]\\d{5}"],
                            ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                            ["80(?:07(?:35|81)|8901)\\d{4}"],
                            ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                            ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                            ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                            ["56\\d{8}"]
                        ]],
                        JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                        JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0"
                        ],
                        JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                            ], "0"
                        ],
                        KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], "0"
                        ],
                        KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10],
                            [
                                ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                        KM: ["269", "00", "[3478]\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                            ]
                        ],
                        KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
                        KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                            ], "0"
                        ],
                        KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                            [
                                ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                                ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                                ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                            ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                        ],
                        KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                            [
                                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                            ]
                        ],
                        KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
                        KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                        LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                            ], "0"
                        ],
                        LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                            ], "0"
                        ],
                        LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"],
                        LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                            ], "0", 0, "0|(1001)"
                        ],
                        LK: ["94", "00", "[1-9]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                            ], "0"
                        ],
                        LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                            ], "0"
                        ],
                        LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                            ]
                        ],
                        LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                            ], "8", 0, "[08]"
                        ],
                        LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                            ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                        ],
                        LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                            ]
                        ],
                        LY: ["218", "00", "[2-9]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                            ], "0"
                        ],
                        MA: ["212", "00", "[5-8]\\d{8}", [9],
                            [
                                ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                                ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["5(?:29(?:[189][05]|2[29]|3[01])|38(?:8[057]|9[05]))\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                                ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|6[0-367]))\\d{6}"],
                                ["80\\d{7}"],
                                ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]
                            ]
                        ],
                        MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                            ], "0"
                        ],
                        MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                            ], "0"
                        ],
                        ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                            ], "0"
                        ],
                        MF: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                            ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]
                        ]],
                        MG: ["261", "00", "[23]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                            ], "0", 0, "0|([24-9]\\d{6})$", "20$1"
                        ],
                        MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                            ], "1"
                        ],
                        MK: ["389", "00", "[2-578]\\d{7}", [8],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                            ], "0"
                        ],
                        ML: ["223", "00", "[24-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                            ]
                        ],
                        MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                                ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                            ], "0"
                        ],
                        MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10],
                            [
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                                ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                                ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                            ], "0"
                        ],
                        MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                            [
                                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                            ]
                        ],
                        MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
                        MQ: ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                            ]
                        ],
                        MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"],
                        MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                            ]
                        ],
                        MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["5"]],
                                ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "020"
                        ],
                        MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        MW: ["265", "00", "(?:[129]\\d|31|77|88)\\d{7}|1\\d{6}", [7, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                            ], "0"
                        ],
                        MX: ["52", "0[09]", "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11],
                            [
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                                ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                            ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                        ],
                        MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9])|8"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                            ], "0"
                        ],
                        MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                            ], "0"
                        ],
                        NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                            ]
                        ],
                        NE: ["227", "00", "[027-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]
                            ]
                        ],
                        NF: ["672", "00", "[13]\\d{5}", [6],
                            [
                                ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                                ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                            ], 0, 0, "([0-258]\\d{4})$", "3$1"
                        ],
                        NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                            [
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                                ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                            ], "0"
                        ],
                        NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                            ]
                        ],
                        NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                                ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                            ], "0"
                        ],
                        NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                            [
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                            ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                        ],
                        NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                            [
                                ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                                ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                                ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                            ], "0"
                        ],
                        NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                            ]
                        ],
                        NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                            ]
                        ],
                        NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, "00"
                        ],
                        OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                            [
                                ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                            ]
                        ],
                        PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                                ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                                ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                            ], "0", 0, 0, 0, 0, 0, 0, 0, " Anexo "
                        ],
                        PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                            ]
                        ],
                        PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                                ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                                ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                            ], "0"
                        ],
                        PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                                ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                                ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                                ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                                ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                            ], "0"
                        ],
                        PL: ["48", "00", "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", [6, 7, 8, 9, 10],
                            [
                                ["(\\d{5})", "$1", ["19"]],
                                ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        PM: ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                        PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                            ]
                        ],
                        PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ]
                        ],
                        PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                                ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                            ], "0"
                        ],
                        QA: ["974", "00", "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", [7, 8, 9],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]
                            ]
                        ],
                        RE: ["262", "00", "9769\\d{5}|(?:26|[68]\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                            ], "0", 0, 0, 0, 0, "26[23]|69|[89]"
                        ],
                        RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                            [
                                ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                                ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                        ],
                        RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                                ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                            ], "0"
                        ],
                        RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                            [
                                ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                                ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                                ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                            ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                        ],
                        RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]
                            ], "0"
                        ],
                        SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                            [
                                ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                            ], "0"
                        ],
                        SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                            ]
                        ],
                        SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        SD: ["249", "00", "[19]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                            ], "0"
                        ],
                        SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                                ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                            ], "0"
                        ],
                        SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-5]|[1-9])"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                                ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ]
                        ],
                        SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                        SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                            [
                                ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                            ], "0", 0, 0, 0, 0, 0, 0, "00"
                        ],
                        SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                        SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                            [
                                ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                            ], "0"
                        ],
                        SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                            ], "0"
                        ],
                        SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                            ], 0, 0, "([89]\\d{5})$", "0549$1"
                        ],
                        SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                            ]
                        ],
                        SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                            [
                                ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                                ["(\\d{6})", "$1", ["[134]"]],
                                ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                                ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]],
                                ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]
                            ], "0"
                        ],
                        SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                                ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                            ]
                        ],
                        SS: ["211", "00", "[19]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                            ], "0"
                        ],
                        ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                            ]
                        ],
                        SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                            ]
                        ],
                        SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
                        SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                            ], "0"
                        ],
                        SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                                ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                            ]
                        ],
                        TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                        TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
                        TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        TG: ["228", "00", "[279]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                            ]
                        ],
                        TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        TJ: ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9],
                            [
                                ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
                                ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "8~10"
                        ],
                        TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                        TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                            ]
                        ],
                        TM: ["993", "810", "[1-6]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                            ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                        ],
                        TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                            ]
                        ],
                        TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                            [
                                ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                            ]
                        ],
                        TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                            [
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                                ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                            ], "0"
                        ],
                        TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
                        TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                            [
                                ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                                ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                            ]
                        ],
                        TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                            [
                                ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                        ],
                        TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                            ], "0"
                        ],
                        UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"],
                                ["(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                        ],
                        UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                            [
                                ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                            ], "0"
                        ],
                        US: ["1", "011", "[2-9]\\d{9}", [10],
                            [
                                ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                            ], "1", 0, 0, 0, 0, 0, [
                                ["5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                                [""],
                                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                                ["900[2-9]\\d{6}"],
                                ["52(?:355[0-46-9]|4(?:5(?:2[024-9]|5[0-46-9])|60[1-9]|9(?:2[0-5]|49)))\\d{4}|52(?:3(?:[2-46-9][02-9]|5[02-46-9])|4(?:[2-478][02-9]|5[034]|6[2-9]|9[05-9])|7[2-4]\\d)\\d{5}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[1256]|33|44|66|77|88)[2-9]\\d{6}"]
                            ]
                        ],
                        UY: ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                        ],
                        UZ: ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]
                            ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                        ],
                        VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                        VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
                        VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                            [
                                ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                            ], "0"
                        ],
                        VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
                        VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
                        VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                                ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                            ], "0"
                        ],
                        VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                            ]
                        ],
                        WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                            ]
                        ],
                        WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                            [
                                ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                                ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                            ]
                        ],
                        XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                            ], "0"
                        ],
                        YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0"
                        ],
                        YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
                        ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                            ], "0"
                        ],
                        ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                            ], "0"
                        ],
                        ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                                ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                                ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                            ], "0"
                        ]
                    },
                    nonGeographic: {
                        "800": ["800", 0, "(?:005|[1-9]\\d\\d)\\d{5}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:005|[1-9]\\d\\d)\\d{5}"]]
                        ],
                        "808": ["808", 0, "[1-9]\\d{7}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                        ],
                        "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]
                        ],
                        "878": ["878", 0, "10\\d{10}", [12],
                            [
                                ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                        ],
                        "881": ["881", 0, "[0-36-9]\\d{8}", [9],
                            [
                                ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]
                        ],
                        "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["4"]],
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]],
                                ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                                ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]
                        ],
                        "883": ["883", 0, "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                                ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"]]
                        ],
                        "888": ["888", 0, "\\d{11}", [11],
                            [
                                ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                        ],
                        "979": ["979", 0, "[1359]\\d{8}", [9],
                            [
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                        ]
                    }
                },
                l = f;

            function s(P, t) {
                var e = Array.prototype.slice.call(t);
                return e.push(f), P.apply(this, e)
            }
        }
    }
]);