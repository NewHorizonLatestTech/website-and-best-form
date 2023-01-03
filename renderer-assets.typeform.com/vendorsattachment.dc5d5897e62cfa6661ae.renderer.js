(self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
    [614], {
        36987: U => {
            function a(m, f, w, r, A, x, b) {
                try {
                    var u = m[x](b),
                        e = u.value
                } catch (t) {
                    w(t);
                    return
                }
                u.done ? f(e) : Promise.resolve(e).then(r, A)
            }

            function d(m) {
                return function() {
                    var f = this,
                        w = arguments;
                    return new Promise(function(r, A) {
                        var x = m.apply(f, w);

                        function b(e) {
                            a(x, r, A, b, u, "next", e)
                        }

                        function u(e) {
                            a(x, r, A, b, u, "throw", e)
                        }
                        b(void 0)
                    })
                }
            }
            U.exports = d
        },
        68699: U => {
            function a(d, m) {
                if (!(d instanceof m)) throw new TypeError("Cannot call a class as a function")
            }
            U.exports = a
        },
        63490: U => {
            function a(m, f) {
                for (var w = 0; w < f.length; w++) {
                    var r = f[w];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(m, r.key, r)
                }
            }

            function d(m, f, w) {
                return f && a(m.prototype, f), w && a(m, w), m
            }
            U.exports = d
        },
        52798: (U, a, d) => {
            U.exports = d(33932)
        },
        15649: (U, a, d) => {
            "use strict";
            var m = d(58606);
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var f = {};
            a.default = void 0;
            var w = m(d(74234)),
                r = d(53275);
            Object.keys(r).forEach(function(b) {
                b === "default" || b === "__esModule" || Object.prototype.hasOwnProperty.call(f, b) || b in a && a[b] === r[b] || Object.defineProperty(a, b, {
                    enumerable: !0,
                    get: function() {
                        return r[b]
                    }
                })
            });
            var A = d(99568);
            Object.keys(A).forEach(function(b) {
                b === "default" || b === "__esModule" || Object.prototype.hasOwnProperty.call(f, b) || b in a && a[b] === A[b] || Object.defineProperty(a, b, {
                    enumerable: !0,
                    get: function() {
                        return A[b]
                    }
                })
            });
            var x = w.default;
            a.default = x
        },
        39470: (U, a, d) => {
            "use strict";
            var m = d(58606);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.getBestFileForDevice = a.default = void 0;
            var f = m(d(52798)),
                w = m(d(68699)),
                r = m(d(63490)),
                A = m(d(81928)),
                x = m(d(36987)),
                b = function() {
                    var N = window,
                        V = N.navigator,
                        F = V.connection || V.mozConnection || V.webkitConnection;
                    return !F || !F.effectiveType ? null : F.effectiveType
                },
                u = function(N) {
                    switch (N) {
                        case "slow-2g":
                        case "2g":
                            return [426, 240];
                        case "3g":
                            return [960, 540];
                        case "4g":
                        default:
                            return [1920, 1080]
                    }
                },
                e = function(N, V) {
                    return Math.abs(N[0] * N[1] - V[0] * V[1])
                },
                t = function(N) {
                    return [N.width, N.height]
                },
                n = function(N) {
                    var V = u(b()),
                        F = N.filter(function(O) {
                            return O.file_type === "video/mp4"
                        }).filter(function(O) {
                            return O.width && O.height
                        }).sort(function(O, D) {
                            return e(t(O), V) - e(t(D), V)
                        });
                    return F[0]
                };
            a.getBestFileForDevice = n;
            var h = function() {
                    var j = (0, x.default)(f.default.mark(function N(V, F) {
                        var O, D;
                        return f.default.wrap(function(W) {
                            for (;;) switch (W.prev = W.next) {
                                case 0:
                                    return O = "https://api.pexels.com/videos/videos/".concat(V), W.next = 3, fetch(O, {
                                        headers: new Headers({
                                            Authorization: F,
                                            Accept: "application/json"
                                        })
                                    });
                                case 3:
                                    if (D = W.sent, D.ok) {
                                        W.next = 6;
                                        break
                                    }
                                    return W.abrupt("return", Promise.reject(D.status));
                                case 6:
                                    return W.abrupt("return", D.json());
                                case 7:
                                case "end":
                                    return W.stop()
                            }
                        }, N)
                    }));
                    return function(V, F) {
                        return j.apply(this, arguments)
                    }
                }(),
                g = new Map,
                E = function() {
                    var j = (0, x.default)(f.default.mark(function N(V, F) {
                        var O;
                        return f.default.wrap(function(I) {
                            for (;;) switch (I.prev = I.next) {
                                case 0:
                                    if (!g.has(V)) {
                                        I.next = 2;
                                        break
                                    }
                                    return I.abrupt("return", g.get(V));
                                case 2:
                                    return I.next = 4, h(V, F);
                                case 4:
                                    return O = I.sent, g.set(V, O), I.abrupt("return", O);
                                case 7:
                                case "end":
                                    return I.stop()
                            }
                        }, N)
                    }));
                    return function(V, F) {
                        return j.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var j = (0, x.default)(f.default.mark(function N(V, F) {
                        var O, D;
                        return f.default.wrap(function(W) {
                            for (;;) switch (W.prev = W.next) {
                                case 0:
                                    return W.next = 2, E(V, F);
                                case 2:
                                    return O = W.sent, D = n(O.video_files), W.abrupt("return", {
                                        src: D.link,
                                        type: D.file_type
                                    });
                                case 5:
                                case "end":
                                    return W.stop()
                            }
                        }, N)
                    }));
                    return function(V, F) {
                        return j.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var j = (0, x.default)(f.default.mark(function N(V, F) {
                        var O;
                        return f.default.wrap(function(I) {
                            for (;;) switch (I.prev = I.next) {
                                case 0:
                                    return I.next = 2, E(V, F);
                                case 2:
                                    return O = I.sent, I.abrupt("return", O.image);
                                case 4:
                                case "end":
                                    return I.stop()
                            }
                        }, N)
                    }));
                    return function(V, F) {
                        return j.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    function j(N, V) {
                        var F = V.id,
                            O = V.cover,
                            D = V.autoplay,
                            I = V.pexelsApiKey;
                        (0, w.default)(this, j), (0, A.default)(this, "id", void 0), (0, A.default)(this, "videoElement", void 0), this.id = Math.random(), this.init(N, F, O, D, I), this.play = this.play.bind(this), this.pause = this.pause.bind(this), this.setCover = this.setCover.bind(this), this.init = this.init.bind(this)
                    }
                    return (0, r.default)(j, [{
                        key: "init",
                        value: function() {
                            var N = (0, x.default)(f.default.mark(function F(O, D, I, W, q) {
                                var te = this,
                                    Z, ne, ae, p, l, y;
                                return f.default.wrap(function(P) {
                                    for (;;) switch (P.prev = P.next) {
                                        case 0:
                                            return P.prev = 0, P.next = 3, T(D, q);
                                        case 3:
                                            return Z = P.sent, ne = Z.src, ae = Z.type, P.next = 8, R(D, q);
                                        case 8:
                                            p = P.sent, l = document.createElement("video"), this.videoElement = l, this.setCover(I), l.setAttribute("preload", "auto"), l.setAttribute("loop", ""), l.setAttribute("muted", ""), l.setAttribute("playsinline", ""), l.setAttribute("loop", ""), l.setAttribute("poster", p), O.innerHTML = "", O.appendChild(l), y = document.createElement("source"), y.setAttribute("type", ae), y.setAttribute("src", ne), l.appendChild(y), l.muted = !0, W && setTimeout(function() {
                                                return te.play()
                                            }, 100), P.next = 31;
                                            break;
                                        case 28:
                                            P.prev = 28, P.t0 = P.catch(0);
                                        case 31:
                                        case "end":
                                            return P.stop()
                                    }
                                }, F, this, [
                                    [0, 28]
                                ])
                            }));

                            function V(F, O, D, I, W) {
                                return N.apply(this, arguments)
                            }
                            return V
                        }()
                    }, {
                        key: "setCover",
                        value: function(V) {
                            this.videoElement && this.videoElement.setAttribute("style", V ? "width: 100%; height: 100%; object-fit: cover;" : "")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.videoElement && this.videoElement.pause()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var N = (0, x.default)(f.default.mark(function F() {
                                var O = this;
                                return f.default.wrap(function(I) {
                                    for (;;) switch (I.prev = I.next) {
                                        case 0:
                                            return I.prev = 0, I.next = 3, this.videoElement.play();
                                        case 3:
                                            I.next = 8;
                                            break;
                                        case 5:
                                            I.prev = 5, I.t0 = I.catch(0), setTimeout(function() {
                                                return O.play()
                                            }, 200);
                                        case 8:
                                        case "end":
                                            return I.stop()
                                    }
                                }, F, this, [
                                    [0, 5]
                                ])
                            }));

                            function V() {
                                return N.apply(this, arguments)
                            }
                            return V
                        }()
                    }]), j
                }(),
                G = _;
            a.default = G
        },
        63864: (U, a, d) => {
            "use strict";
            var m = d(58606);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var f = m(d(68699)),
                w = m(d(63490)),
                r = m(d(81928)),
                A = m(d(73889)),
                x = function() {
                    function b(u, e) {
                        (0, f.default)(this, b), (0, r.default)(this, "player", void 0);
                        var t = e == null ? void 0 : e.id;
                        if (u.nodeName !== "IFRAME" && t) {
                            var n = u.querySelector("iframe");
                            n || (n = this.embedVideo(u));
                            var h = "".concat(t).concat(t.includes("?") ? "&" : "?", "embed_type=typeform&autoplay=false");
                            n.setAttribute("allow", "camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"), n.setAttribute("style", "border: none"), n.setAttribute("title", "Player"), n.setAttribute("src", h), this.player = new A.default.Player(n)
                        }
                    }
                    return (0, w.default)(b, [{
                        key: "embedVideo",
                        value: function(e) {
                            var t = document.createElement("iframe");
                            return e.appendChild(t), t
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.player.pause()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.player.play()
                        }
                    }]), b
                }();
            a.default = x
        },
        74234: (U, a, d) => {
            "use strict";
            var m = d(58606);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = h;
            var f = m(d(81928)),
                w = m(d(23818)),
                r = m(d(30796)),
                A = m(d(63864)),
                x = m(d(39470)),
                b = d(53275),
                u = d(99568),
                e, t = function(E) {
                    return (0, u.isVimeoVideo)(E.id) ? {
                        url: E.id
                    } : {
                        id: parseInt(E.id)
                    }
                },
                n = (e = {}, (0, f.default)(e, b.YOUTUBE_PROVIDER, function(g, E) {
                    var T = (0, r.default)(g, {
                            videoId: E.id,
                            playerVars: {
                                autoplay: 0,
                                disablekb: 1,
                                modestbranding: 1,
                                origin: window.location.origin,
                                rel: 0,
                                loop: 1
                            }
                        }),
                        R = new Promise(function(_, G) {
                            T.on("ready", _), T.on("error", G)
                        });
                    return {
                        loadVideo: function(G) {
                            var j = G.id;
                            return T.loadVideoById(j)
                        },
                        pause: function() {
                            return T.pauseVideo()
                        },
                        play: function() {
                            return T.playVideo()
                        },
                        onLoad: function() {
                            return R
                        }
                    }
                }), (0, f.default)(e, b.VIMEO_PROVIDER, function(g, E) {
                    var T = t(E),
                        R = new w.default(g, T);
                    return {
                        loadVideo: function(G) {
                            R.destroy(), R = new w.default(g, t(G))
                        },
                        pause: function() {
                            return R.pause()
                        },
                        play: function() {
                            return R.play()
                        },
                        onLoad: function() {
                            return R.ready()
                        }
                    }
                }), (0, f.default)(e, b.VIDEOASK_PROVIDER, function(g, E) {
                    var T = new A.default(g, {
                        id: E.id
                    });
                    return {
                        loadVideo: function(_) {
                            var G = _.id;
                            T = new A.default(g, {
                                id: G
                            })
                        },
                        pause: function() {
                            return T.pause()
                        },
                        play: function() {
                            return T.play()
                        }
                    }
                }), (0, f.default)(e, b.PEXELS_PROVIDER, function(g, E) {
                    var T = new x.default(g, E);
                    return {
                        loadVideo: function(_) {
                            T = new x.default(g, _)
                        },
                        setCover: T.setCover,
                        pause: T.pause,
                        play: T.play
                    }
                }), e);

            function h(g, E, T) {
                if (!g || !n[E]) return null;
                var R = n[E];
                return R(g, T)
            }
        },
        23818: (U, a, d) => {
            "use strict";
            d.r(a), d.d(a, {
                default: () => ie
            }); /*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
            function m(c, i) {
                if (!(c instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function f(c, i) {
                for (var o = 0; o < i.length; o++) {
                    var s = i[o];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(c, s.key, s)
                }
            }

            function w(c, i, o) {
                return i && f(c.prototype, i), o && f(c, o), c
            }
            var r = typeof d.g != "undefined" && {}.toString.call(d.g) === "[object global]";

            function A(c, i) {
                return c.indexOf(i.toLowerCase()) === 0 ? c : "".concat(i.toLowerCase()).concat(c.substr(0, 1).toUpperCase()).concat(c.substr(1))
            }

            function x(c) {
                return Boolean(c && c.nodeType === 1 && "nodeName" in c && c.ownerDocument && c.ownerDocument.defaultView)
            }

            function b(c) {
                return !isNaN(parseFloat(c)) && isFinite(c) && Math.floor(c) == c
            }

            function u(c) {
                return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(c)
            }

            function e(c) {
                var i = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
                return i.test(c)
            }

            function t() {
                var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    i = c.id,
                    o = c.url,
                    s = i || o;
                if (!s) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                if (b(s)) return "https://vimeo.com/".concat(s);
                if (u(s)) return s.replace("http:", "https:");
                throw i ? new TypeError("\u201C".concat(i, "\u201D is not a valid video id.")) : new TypeError("\u201C".concat(s, "\u201D is not a vimeo.com url."))
            }
            var n = typeof Array.prototype.indexOf != "undefined",
                h = typeof window != "undefined" && typeof window.postMessage != "undefined";
            if (!r && (!n || !h)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
            var g = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof d.g != "undefined" ? d.g : typeof self != "undefined" ? self : {};

            function E(c, i) {
                return i = {
                    exports: {}
                }, c(i, i.exports), i.exports
            }
            /*!
             * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
             * https://github.com/polygonplanet/weakmap-polyfill
             * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
             * @license MIT
             */
            (function(c) {
                if (c.WeakMap) return;
                var i = Object.prototype.hasOwnProperty,
                    o = Object.defineProperty && function() {
                        try {
                            return Object.defineProperty({}, "x", {
                                value: 1
                            }).x === 1
                        } catch (C) {}
                    }(),
                    s = function(C, S, B) {
                        o ? Object.defineProperty(C, S, {
                            configurable: !0,
                            writable: !0,
                            value: B
                        }) : C[S] = B
                    };
                c.WeakMap = function() {
                    function C() {
                        if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
                        if (s(this, "_id", B("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                    }
                    s(C.prototype, "delete", function(H) {
                        if (S(this, "delete"), !v(H)) return !1;
                        var Q = H[this._id];
                        return Q && Q[0] === H ? (delete H[this._id], !0) : !1
                    }), s(C.prototype, "get", function(H) {
                        if (S(this, "get"), !!v(H)) {
                            var Q = H[this._id];
                            if (Q && Q[0] === H) return Q[1]
                        }
                    }), s(C.prototype, "has", function(H) {
                        if (S(this, "has"), !v(H)) return !1;
                        var Q = H[this._id];
                        return !!(Q && Q[0] === H)
                    }), s(C.prototype, "set", function(H, Q) {
                        if (S(this, "set"), !v(H)) throw new TypeError("Invalid value used as weak map key");
                        var oe = H[this._id];
                        return oe && oe[0] === H ? (oe[1] = Q, this) : (s(H, this._id, [H, Q]), this)
                    });

                    function S(H, Q) {
                        if (!v(H) || !i.call(H, "_id")) throw new TypeError(Q + " method called on incompatible receiver " + typeof H)
                    }

                    function B(H) {
                        return H + "_" + z() + "." + z()
                    }

                    function z() {
                        return Math.random().toString().substring(2)
                    }
                    return s(C, "_polyfill", !0), C
                }();

                function v(C) {
                    return Object(C) === C
                }
            })(typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : g);
            var T = E(function(c) {
                    /*! Native Promise Only
                        v0.8.1 (c) Kyle Simpson
                        MIT License: http://getify.mit-license.org
                    */
                    (function(o, s, v) {
                        s[o] = s[o] || v(), c.exports && (c.exports = s[o])
                    })("Promise", g, function() {
                        var o, s, v, C = Object.prototype.toString,
                            S = typeof setImmediate != "undefined" ? function(M) {
                                return setImmediate(M)
                            } : setTimeout;
                        try {
                            Object.defineProperty({}, "x", {}), o = function(M, k, Y, $) {
                                return Object.defineProperty(M, k, {
                                    value: Y,
                                    writable: !0,
                                    configurable: $ !== !1
                                })
                            }
                        } catch (K) {
                            o = function(k, Y, $) {
                                return k[Y] = $, k
                            }
                        }
                        v = function() {
                            var M, k, Y;

                            function $(ee, re) {
                                this.fn = ee, this.self = re, this.next = void 0
                            }
                            return {
                                add: function(re, se) {
                                    Y = new $(re, se), k ? k.next = Y : M = Y, k = Y, Y = void 0
                                },
                                drain: function() {
                                    var re = M;
                                    for (M = k = s = void 0; re;) re.fn.call(re.self), re = re.next
                                }
                            }
                        }();

                        function B(K, M) {
                            v.add(K, M), s || (s = S(v.drain))
                        }

                        function z(K) {
                            var M, k = typeof K;
                            return K != null && (k == "object" || k == "function") && (M = K.then), typeof M == "function" ? M : !1
                        }

                        function H() {
                            for (var K = 0; K < this.chain.length; K++) Q(this, this.state === 1 ? this.chain[K].success : this.chain[K].failure, this.chain[K]);
                            this.chain.length = 0
                        }

                        function Q(K, M, k) {
                            var Y, $;
                            try {
                                M === !1 ? k.reject(K.msg) : (M === !0 ? Y = K.msg : Y = M.call(void 0, K.msg), Y === k.promise ? k.reject(TypeError("Promise-chain cycle")) : ($ = z(Y)) ? $.call(Y, k.resolve, k.reject) : k.resolve(Y))
                            } catch (ee) {
                                k.reject(ee)
                            }
                        }

                        function oe(K) {
                            var M, k = this;
                            if (!k.triggered) {
                                k.triggered = !0, k.def && (k = k.def);
                                try {
                                    (M = z(K)) ? B(function() {
                                        var Y = new fe(k);
                                        try {
                                            M.call(K, function() {
                                                oe.apply(Y, arguments)
                                            }, function() {
                                                X.apply(Y, arguments)
                                            })
                                        } catch ($) {
                                            X.call(Y, $)
                                        }
                                    }): (k.msg = K, k.state = 1, k.chain.length > 0 && B(H, k))
                                } catch (Y) {
                                    X.call(new fe(k), Y)
                                }
                            }
                        }

                        function X(K) {
                            var M = this;
                            M.triggered || (M.triggered = !0, M.def && (M = M.def), M.msg = K, M.state = 2, M.chain.length > 0 && B(H, M))
                        }

                        function ce(K, M, k, Y) {
                            for (var $ = 0; $ < M.length; $++)(function(re) {
                                K.resolve(M[re]).then(function(le) {
                                    k(re, le)
                                }, Y)
                            })($)
                        }

                        function fe(K) {
                            this.def = K, this.triggered = !1
                        }

                        function de(K) {
                            this.promise = K, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                        }

                        function ue(K) {
                            if (typeof K != "function") throw TypeError("Not a function");
                            if (this.__NPO__ !== 0) throw TypeError("Not a promise");
                            this.__NPO__ = 1;
                            var M = new de(this);
                            this.then = function(Y, $) {
                                var ee = {
                                    success: typeof Y == "function" ? Y : !0,
                                    failure: typeof $ == "function" ? $ : !1
                                };
                                return ee.promise = new this.constructor(function(se, le) {
                                    if (typeof se != "function" || typeof le != "function") throw TypeError("Not a function");
                                    ee.resolve = se, ee.reject = le
                                }), M.chain.push(ee), M.state !== 0 && B(H, M), ee.promise
                            }, this.catch = function(Y) {
                                return this.then(void 0, Y)
                            };
                            try {
                                K.call(void 0, function(Y) {
                                    oe.call(M, Y)
                                }, function(Y) {
                                    X.call(M, Y)
                                })
                            } catch (k) {
                                X.call(M, k)
                            }
                        }
                        var he = o({}, "constructor", ue, !1);
                        return ue.prototype = he, o(he, "__NPO__", 0, !1), o(ue, "resolve", function(M) {
                            var k = this;
                            return M && typeof M == "object" && M.__NPO__ === 1 ? M : new k(function($, ee) {
                                if (typeof $ != "function" || typeof ee != "function") throw TypeError("Not a function");
                                $(M)
                            })
                        }), o(ue, "reject", function(M) {
                            return new this(function(Y, $) {
                                if (typeof Y != "function" || typeof $ != "function") throw TypeError("Not a function");
                                $(M)
                            })
                        }), o(ue, "all", function(M) {
                            var k = this;
                            return C.call(M) != "[object Array]" ? k.reject(TypeError("Not an array")) : M.length === 0 ? k.resolve([]) : new k(function($, ee) {
                                if (typeof $ != "function" || typeof ee != "function") throw TypeError("Not a function");
                                var re = M.length,
                                    se = Array(re),
                                    le = 0;
                                ce(k, M, function(ve, pe) {
                                    se[ve] = pe, ++le === re && $(se)
                                }, ee)
                            })
                        }), o(ue, "race", function(M) {
                            var k = this;
                            return C.call(M) != "[object Array]" ? k.reject(TypeError("Not an array")) : new k(function($, ee) {
                                if (typeof $ != "function" || typeof ee != "function") throw TypeError("Not a function");
                                ce(k, M, function(se, le) {
                                    $(le)
                                }, ee)
                            })
                        }), ue
                    })
                }),
                R = new WeakMap;

            function _(c, i, o) {
                var s = R.get(c.element) || {};
                i in s || (s[i] = []), s[i].push(o), R.set(c.element, s)
            }

            function G(c, i) {
                var o = R.get(c.element) || {};
                return o[i] || []
            }

            function j(c, i, o) {
                var s = R.get(c.element) || {};
                if (!s[i]) return !0;
                if (!o) return s[i] = [], R.set(c.element, s), !0;
                var v = s[i].indexOf(o);
                return v !== -1 && s[i].splice(v, 1), R.set(c.element, s), s[i] && s[i].length === 0
            }

            function N(c, i) {
                var o = G(c, i);
                if (o.length < 1) return !1;
                var s = o.shift();
                return j(c, i, s), s
            }

            function V(c, i) {
                var o = R.get(c);
                R.set(i, o), R.delete(c)
            }

            function F(c) {
                if (typeof c == "string") try {
                    c = JSON.parse(c)
                } catch (i) {
                    return console.warn(i), {}
                }
                return c
            }

            function O(c, i, o) {
                if (!(!c.element.contentWindow || !c.element.contentWindow.postMessage)) {
                    var s = {
                        method: i
                    };
                    o !== void 0 && (s.value = o);
                    var v = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                    v >= 8 && v < 10 && (s = JSON.stringify(s)), c.element.contentWindow.postMessage(s, c.origin)
                }
            }

            function D(c, i) {
                i = F(i);
                var o = [],
                    s;
                if (i.event) {
                    if (i.event === "error") {
                        var v = G(c, i.data.method);
                        v.forEach(function(S) {
                            var B = new Error(i.data.message);
                            B.name = i.data.name, S.reject(B), j(c, i.data.method, S)
                        })
                    }
                    o = G(c, "event:".concat(i.event)), s = i.data
                } else if (i.method) {
                    var C = N(c, i.method);
                    C && (o.push(C), s = i.value)
                }
                o.forEach(function(S) {
                    try {
                        if (typeof S == "function") {
                            S.call(c, s);
                            return
                        }
                        S.resolve(s)
                    } catch (B) {}
                })
            }
            var I = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

            function W(c) {
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return I.reduce(function(o, s) {
                    var v = c.getAttribute("data-vimeo-".concat(s));
                    return (v || v === "") && (o[s] = v === "" ? 1 : v), o
                }, i)
            }

            function q(c, i) {
                var o = c.html;
                if (!i) throw new TypeError("An element must be provided");
                if (i.getAttribute("data-vimeo-initialized") !== null) return i.querySelector("iframe");
                var s = document.createElement("div");
                return s.innerHTML = o, i.appendChild(s.firstChild), i.setAttribute("data-vimeo-initialized", "true"), i.querySelector("iframe")
            }

            function te(c) {
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    o = arguments.length > 2 ? arguments[2] : void 0;
                return new Promise(function(s, v) {
                    if (!u(c)) throw new TypeError("\u201C".concat(c, "\u201D is not a vimeo.com url."));
                    var C = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(c));
                    for (var S in i) i.hasOwnProperty(S) && (C += "&".concat(S, "=").concat(encodeURIComponent(i[S])));
                    var B = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                    B.open("GET", C, !0), B.onload = function() {
                        if (B.status === 404) {
                            v(new Error("\u201C".concat(c, "\u201D was not found.")));
                            return
                        }
                        if (B.status === 403) {
                            v(new Error("\u201C".concat(c, "\u201D is not embeddable.")));
                            return
                        }
                        try {
                            var z = JSON.parse(B.responseText);
                            if (z.domain_status_code === 403) {
                                q(z, o), v(new Error("\u201C".concat(c, "\u201D is not embeddable.")));
                                return
                            }
                            s(z)
                        } catch (H) {
                            v(H)
                        }
                    }, B.onerror = function() {
                        var z = B.status ? " (".concat(B.status, ")") : "";
                        v(new Error("There was an error fetching the embed code from Vimeo".concat(z, ".")))
                    }, B.send()
                })
            }

            function Z() {
                var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
                    i = [].slice.call(c.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                    o = function(v) {
                        "console" in window && console.error && console.error("There was an error creating an embed: ".concat(v))
                    };
                i.forEach(function(s) {
                    try {
                        if (s.getAttribute("data-vimeo-defer") !== null) return;
                        var v = W(s),
                            C = t(v);
                        te(C, v, s).then(function(S) {
                            return q(S, s)
                        }).catch(o)
                    } catch (S) {
                        o(S)
                    }
                })
            }

            function ne() {
                var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
                if (!window.VimeoPlayerResizeEmbeds_) {
                    window.VimeoPlayerResizeEmbeds_ = !0;
                    var i = function(s) {
                        if (!!u(s.origin) && !(!s.data || s.data.event !== "spacechange")) {
                            for (var v = c.querySelectorAll("iframe"), C = 0; C < v.length; C++)
                                if (v[C].contentWindow === s.source) {
                                    var S = v[C].parentElement;
                                    S.style.paddingBottom = "".concat(s.data.data[0].bottom, "px");
                                    break
                                }
                        }
                    };
                    window.addEventListener("message", i)
                }
            }

            function ae() {
                var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
                if (!window.VimeoSeoMetadataAppended) {
                    window.VimeoSeoMetadataAppended = !0;
                    var i = function(s) {
                        if (!!u(s.origin)) {
                            var v = F(s.data);
                            if (!(!v || v.event !== "ready"))
                                for (var C = c.querySelectorAll("iframe"), S = 0; S < C.length; S++) {
                                    var B = C[S],
                                        z = B.contentWindow === s.source;
                                    if (e(B.src) && z) {
                                        var H = new J(B);
                                        H.callMethod("appendVideoMetadata", window.location.href)
                                    }
                                }
                        }
                    };
                    window.addEventListener("message", i)
                }
            }

            function p() {
                var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
                if (!window.VimeoCheckedUrlTimeParam) {
                    window.VimeoCheckedUrlTimeParam = !0;
                    var i = function(v) {
                            "console" in window && console.error && console.error("There was an error getting video Id: ".concat(v))
                        },
                        o = function(v) {
                            if (!!u(v.origin)) {
                                var C = F(v.data);
                                if (!(!C || C.event !== "ready"))
                                    for (var S = c.querySelectorAll("iframe"), B = 0; B < S.length; B++) {
                                        var z = S[B],
                                            H = z.contentWindow === v.source;
                                        e(z.src) && H && function() {
                                            var Q = new J(z);
                                            Q.getVideoId().then(function(oe) {
                                                var X = new RegExp("[?&]vimeo_t_".concat(oe, "=([^&#]*)")).exec(window.location.href);
                                                if (X && X[1]) {
                                                    var ce = decodeURI(X[1]);
                                                    Q.setCurrentTime(ce)
                                                }
                                            }).catch(i)
                                        }()
                                    }
                            }
                        };
                    window.addEventListener("message", o)
                }
            }

            function l() {
                var c = function() {
                        for (var s, v = [
                                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                            ], C = 0, S = v.length, B = {}; C < S; C++)
                            if (s = v[C], s && s[1] in document) {
                                for (C = 0; C < s.length; C++) B[v[0][C]] = s[C];
                                return B
                            }
                        return !1
                    }(),
                    i = {
                        fullscreenchange: c.fullscreenchange,
                        fullscreenerror: c.fullscreenerror
                    },
                    o = {
                        request: function(v) {
                            return new Promise(function(C, S) {
                                var B = function H() {
                                    o.off("fullscreenchange", H), C()
                                };
                                o.on("fullscreenchange", B), v = v || document.documentElement;
                                var z = v[c.requestFullscreen]();
                                z instanceof Promise && z.then(B).catch(S)
                            })
                        },
                        exit: function() {
                            return new Promise(function(v, C) {
                                if (!o.isFullscreen) {
                                    v();
                                    return
                                }
                                var S = function z() {
                                    o.off("fullscreenchange", z), v()
                                };
                                o.on("fullscreenchange", S);
                                var B = document[c.exitFullscreen]();
                                B instanceof Promise && B.then(S).catch(C)
                            })
                        },
                        on: function(v, C) {
                            var S = i[v];
                            S && document.addEventListener(S, C)
                        },
                        off: function(v, C) {
                            var S = i[v];
                            S && document.removeEventListener(S, C)
                        }
                    };
                return Object.defineProperties(o, {
                    isFullscreen: {
                        get: function() {
                            return Boolean(document[c.fullscreenElement])
                        }
                    },
                    element: {
                        enumerable: !0,
                        get: function() {
                            return document[c.fullscreenElement]
                        }
                    },
                    isEnabled: {
                        enumerable: !0,
                        get: function() {
                            return Boolean(document[c.fullscreenEnabled])
                        }
                    }
                }), o
            }
            var y = new WeakMap,
                L = new WeakMap,
                P = {},
                J = function() {
                    function c(i) {
                        var o = this,
                            s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (m(this, c), window.jQuery && i instanceof jQuery && (i.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), i = i[0]), typeof document != "undefined" && typeof i == "string" && (i = document.getElementById(i)), !x(i)) throw new TypeError("You must pass either a valid element or a valid id.");
                        if (i.nodeName !== "IFRAME") {
                            var v = i.querySelector("iframe");
                            v && (i = v)
                        }
                        if (i.nodeName === "IFRAME" && !u(i.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
                        if (y.has(i)) return y.get(i);
                        this._window = i.ownerDocument.defaultView, this.element = i, this.origin = "*";
                        var C = new T(function(B, z) {
                            if (o._onMessage = function(oe) {
                                    if (!(!u(oe.origin) || o.element.contentWindow !== oe.source)) {
                                        o.origin === "*" && (o.origin = oe.origin);
                                        var X = F(oe.data),
                                            ce = X && X.event === "error",
                                            fe = ce && X.data && X.data.method === "ready";
                                        if (fe) {
                                            var de = new Error(X.data.message);
                                            de.name = X.data.name, z(de);
                                            return
                                        }
                                        var ue = X && X.event === "ready",
                                            he = X && X.method === "ping";
                                        if (ue || he) {
                                            o.element.setAttribute("data-ready", "true"), B();
                                            return
                                        }
                                        D(o, X)
                                    }
                                }, o._window.addEventListener("message", o._onMessage), o.element.nodeName !== "IFRAME") {
                                var H = W(i, s),
                                    Q = t(H);
                                te(Q, H, i).then(function(oe) {
                                    var X = q(oe, i);
                                    return o.element = X, o._originalElement = i, V(i, X), y.set(o.element, o), oe
                                }).catch(z)
                            }
                        });
                        if (L.set(this, C), y.set(this.element, this), this.element.nodeName === "IFRAME" && O(this, "ping"), P.isEnabled) {
                            var S = function() {
                                return P.exit()
                            };
                            this.fullscreenchangeHandler = function() {
                                P.isFullscreen ? _(o, "event:exitFullscreen", S) : j(o, "event:exitFullscreen", S), o.ready().then(function() {
                                    O(o, "fullscreenchange", P.isFullscreen)
                                })
                            }, P.on("fullscreenchange", this.fullscreenchangeHandler)
                        }
                        return this
                    }
                    return w(c, [{
                        key: "callMethod",
                        value: function(o) {
                            var s = this,
                                v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return new T(function(C, S) {
                                return s.ready().then(function() {
                                    _(s, o, {
                                        resolve: C,
                                        reject: S
                                    }), O(s, o, v)
                                }).catch(S)
                            })
                        }
                    }, {
                        key: "get",
                        value: function(o) {
                            var s = this;
                            return new T(function(v, C) {
                                return o = A(o, "get"), s.ready().then(function() {
                                    _(s, o, {
                                        resolve: v,
                                        reject: C
                                    }), O(s, o)
                                }).catch(C)
                            })
                        }
                    }, {
                        key: "set",
                        value: function(o, s) {
                            var v = this;
                            return new T(function(C, S) {
                                if (o = A(o, "set"), s == null) throw new TypeError("There must be a value to set.");
                                return v.ready().then(function() {
                                    _(v, o, {
                                        resolve: C,
                                        reject: S
                                    }), O(v, o, s)
                                }).catch(S)
                            })
                        }
                    }, {
                        key: "on",
                        value: function(o, s) {
                            if (!o) throw new TypeError("You must pass an event name.");
                            if (!s) throw new TypeError("You must pass a callback function.");
                            if (typeof s != "function") throw new TypeError("The callback must be a function.");
                            var v = G(this, "event:".concat(o));
                            v.length === 0 && this.callMethod("addEventListener", o).catch(function() {}), _(this, "event:".concat(o), s)
                        }
                    }, {
                        key: "off",
                        value: function(o, s) {
                            if (!o) throw new TypeError("You must pass an event name.");
                            if (s && typeof s != "function") throw new TypeError("The callback must be a function.");
                            var v = j(this, "event:".concat(o), s);
                            v && this.callMethod("removeEventListener", o).catch(function(C) {})
                        }
                    }, {
                        key: "loadVideo",
                        value: function(o) {
                            return this.callMethod("loadVideo", o)
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            var o = L.get(this) || new T(function(s, v) {
                                v(new Error("Unknown player. Probably unloaded."))
                            });
                            return T.resolve(o)
                        }
                    }, {
                        key: "addCuePoint",
                        value: function(o) {
                            var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.callMethod("addCuePoint", {
                                time: o,
                                data: s
                            })
                        }
                    }, {
                        key: "removeCuePoint",
                        value: function(o) {
                            return this.callMethod("removeCuePoint", o)
                        }
                    }, {
                        key: "enableTextTrack",
                        value: function(o, s) {
                            if (!o) throw new TypeError("You must pass a language.");
                            return this.callMethod("enableTextTrack", {
                                language: o,
                                kind: s
                            })
                        }
                    }, {
                        key: "disableTextTrack",
                        value: function() {
                            return this.callMethod("disableTextTrack")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            return this.callMethod("pause")
                        }
                    }, {
                        key: "play",
                        value: function() {
                            return this.callMethod("play")
                        }
                    }, {
                        key: "requestFullscreen",
                        value: function() {
                            return P.isEnabled ? P.request(this.element) : this.callMethod("requestFullscreen")
                        }
                    }, {
                        key: "exitFullscreen",
                        value: function() {
                            return P.isEnabled ? P.exit() : this.callMethod("exitFullscreen")
                        }
                    }, {
                        key: "getFullscreen",
                        value: function() {
                            return P.isEnabled ? T.resolve(P.isFullscreen) : this.get("fullscreen")
                        }
                    }, {
                        key: "requestPictureInPicture",
                        value: function() {
                            return this.callMethod("requestPictureInPicture")
                        }
                    }, {
                        key: "exitPictureInPicture",
                        value: function() {
                            return this.callMethod("exitPictureInPicture")
                        }
                    }, {
                        key: "getPictureInPicture",
                        value: function() {
                            return this.get("pictureInPicture")
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            return this.callMethod("unload")
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var o = this;
                            return new T(function(s) {
                                if (L.delete(o), y.delete(o.element), o._originalElement && (y.delete(o._originalElement), o._originalElement.removeAttribute("data-vimeo-initialized")), o.element && o.element.nodeName === "IFRAME" && o.element.parentNode && (o.element.parentNode.parentNode && o._originalElement && o._originalElement !== o.element.parentNode ? o.element.parentNode.parentNode.removeChild(o.element.parentNode) : o.element.parentNode.removeChild(o.element)), o.element && o.element.nodeName === "DIV" && o.element.parentNode) {
                                    o.element.removeAttribute("data-vimeo-initialized");
                                    var v = o.element.querySelector("iframe");
                                    v && v.parentNode && (v.parentNode.parentNode && o._originalElement && o._originalElement !== v.parentNode ? v.parentNode.parentNode.removeChild(v.parentNode) : v.parentNode.removeChild(v))
                                }
                                o._window.removeEventListener("message", o._onMessage), P.isEnabled && P.off("fullscreenchange", o.fullscreenchangeHandler), s()
                            })
                        }
                    }, {
                        key: "getAutopause",
                        value: function() {
                            return this.get("autopause")
                        }
                    }, {
                        key: "setAutopause",
                        value: function(o) {
                            return this.set("autopause", o)
                        }
                    }, {
                        key: "getBuffered",
                        value: function() {
                            return this.get("buffered")
                        }
                    }, {
                        key: "getCameraProps",
                        value: function() {
                            return this.get("cameraProps")
                        }
                    }, {
                        key: "setCameraProps",
                        value: function(o) {
                            return this.set("cameraProps", o)
                        }
                    }, {
                        key: "getChapters",
                        value: function() {
                            return this.get("chapters")
                        }
                    }, {
                        key: "getCurrentChapter",
                        value: function() {
                            return this.get("currentChapter")
                        }
                    }, {
                        key: "getColor",
                        value: function() {
                            return this.get("color")
                        }
                    }, {
                        key: "setColor",
                        value: function(o) {
                            return this.set("color", o)
                        }
                    }, {
                        key: "getCuePoints",
                        value: function() {
                            return this.get("cuePoints")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.get("currentTime")
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function(o) {
                            return this.set("currentTime", o)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.get("duration")
                        }
                    }, {
                        key: "getEnded",
                        value: function() {
                            return this.get("ended")
                        }
                    }, {
                        key: "getLoop",
                        value: function() {
                            return this.get("loop")
                        }
                    }, {
                        key: "setLoop",
                        value: function(o) {
                            return this.set("loop", o)
                        }
                    }, {
                        key: "setMuted",
                        value: function(o) {
                            return this.set("muted", o)
                        }
                    }, {
                        key: "getMuted",
                        value: function() {
                            return this.get("muted")
                        }
                    }, {
                        key: "getPaused",
                        value: function() {
                            return this.get("paused")
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.get("playbackRate")
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(o) {
                            return this.set("playbackRate", o)
                        }
                    }, {
                        key: "getPlayed",
                        value: function() {
                            return this.get("played")
                        }
                    }, {
                        key: "getQualities",
                        value: function() {
                            return this.get("qualities")
                        }
                    }, {
                        key: "getQuality",
                        value: function() {
                            return this.get("quality")
                        }
                    }, {
                        key: "setQuality",
                        value: function(o) {
                            return this.set("quality", o)
                        }
                    }, {
                        key: "getSeekable",
                        value: function() {
                            return this.get("seekable")
                        }
                    }, {
                        key: "getSeeking",
                        value: function() {
                            return this.get("seeking")
                        }
                    }, {
                        key: "getTextTracks",
                        value: function() {
                            return this.get("textTracks")
                        }
                    }, {
                        key: "getVideoEmbedCode",
                        value: function() {
                            return this.get("videoEmbedCode")
                        }
                    }, {
                        key: "getVideoId",
                        value: function() {
                            return this.get("videoId")
                        }
                    }, {
                        key: "getVideoTitle",
                        value: function() {
                            return this.get("videoTitle")
                        }
                    }, {
                        key: "getVideoWidth",
                        value: function() {
                            return this.get("videoWidth")
                        }
                    }, {
                        key: "getVideoHeight",
                        value: function() {
                            return this.get("videoHeight")
                        }
                    }, {
                        key: "getVideoUrl",
                        value: function() {
                            return this.get("videoUrl")
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.get("volume")
                        }
                    }, {
                        key: "setVolume",
                        value: function(o) {
                            return this.set("volume", o)
                        }
                    }]), c
                }();
            r || (P = l(), Z(), ne(), ae(), p());
            const ie = J
        },
        62776: (U, a, d) => {
            "use strict";
            d.d(a, {
                Z: () => r,
                w: () => f
            });
            var m = d(97236),
                f = (0, m.iv)(["position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0 0 0 0);clip-path:inset(100%);overflow:hidden;"]),
                w = m.ZP.span.withConfig({
                    displayName: "A11yVisuallyHidden",
                    componentId: "sc-__sc-nyquty-0"
                })(["", ""], f);
            w.displayName = "A11yVisuallyHidden";
            const r = w
        },
        5403: (U, a, d) => {
            "use strict";
            d.r(a), d.d(a, {
                default: () => h
            });
            var m = d(71383),
                f = d(97236),
                w = d(15649),
                r = d.n(w),
                A = d(13219),
                x = d(67287),
                b = f.ZP.div.withConfig({
                    displayName: "Root",
                    componentId: "sc-__sc-1dhcczh-0"
                })(["", ";", ";"], g => g.cover ? "height: 100%" : "position: relative; width: 100%", g => g.isCentered ? "margin: 0 auto" : ""),
                u = f.ZP.div.withConfig({
                    displayName: "VideoWrapper",
                    componentId: "sc-__sc-1dhcczh-1"
                })(["width:100%;height:100%;left:0;top:0;video{max-height:", ";max-width:100%;pointer-events:auto;}"], g => g.maxHeight ? "".concat(g.maxHeight, "px") : "auto"),
                e = 128,
                t = f.ZP.div.withConfig({
                    displayName: "ControlsWrapper",
                    componentId: "sc-__sc-1dhcczh-2"
                })(["position:absolute;top:0;margin:8px;", ";pointer-events:auto;display:none;", ":hover &{display:block;}"], g => {
                    var {
                        imageWidth: E
                    } = g;
                    return E && E <= e ? "left: 0" : "right: 0"
                }, b),
                n = g => {
                    var {
                        cover: E,
                        id: T,
                        isVideoCentered: R,
                        isVideoPlaying: _ = !0,
                        maxHeight: G,
                        onVideoClick: j = () => {},
                        pexelsApiKey: N,
                        controls: V
                    } = g, F, O = (0, m.useRef)(null), [D, I] = (0, m.useState)(null);
                    return (0, m.useEffect)(() => {
                        var W = w.PEXELS_PROVIDER;
                        (O == null ? void 0 : O.current) != null && I(r()(O.current, W, {
                            id: T,
                            pexelsApiKey: N,
                            cover: E,
                            autoplay: _
                        }))
                    }, []), (0, A.Z)(() => {
                        var W;
                        D == null || (W = D.setCover) === null || W === void 0 || W.call(D, E)
                    }, [E]), (0, A.Z)(() => {
                        D == null || D.loadVideo({
                            id: T,
                            pexelsApiKey: N,
                            cover: E,
                            autoplay: _
                        })
                    }, [T]), (0, A.Z)(() => {
                        _ ? D == null || D.play() : D == null || D.pause()
                    }, [_]), (0, x.jsxs)(b, {
                        cover: E,
                        isCentered: R,
                        children: [(0, x.jsx)(u, {
                            "data-qa": _ ? "video-is-playing" : "",
                            maxHeight: G,
                            ref: O,
                            onClick: j
                        }), V && (0, x.jsx)(t, {
                            imageWidth: (F = O.current) === null || F === void 0 ? void 0 : F.clientWidth,
                            children: V
                        })]
                    })
                };
            const h = n
        },
        19782: (U, a, d) => {
            "use strict";
            d.r(a), d.d(a, {
                default: () => g,
                root: () => h
            });
            var m = d(71383),
                f = d(97236),
                w = d(15649),
                r = d.n(w),
                A = d(58561),
                x = d(72814),
                b = d(62776),
                u = d(67287),
                e = f.ZP.div.withConfig({
                    displayName: "Root",
                    componentId: "sc-__sc-1lxloa-0"
                })(["width:", ";", ";pointer-events:", ";"], E => E.width, E => E.isCentered ? "margin: 0 auto;" : "", E => E.isVisible ? "auto" : "none"),
                t = f.ZP.figure.withConfig({
                    displayName: "VideoWrapper",
                    componentId: "sc-__sc-1lxloa-1"
                })(["position:relative;padding-bottom:56.25%;width:100%;height:", ";border-radius:", ";background:", ";margin:0;"], E => E.height && "".concat(E.height, "px"), E => E.addFancyBorder && "20px", E => E.addBackground && "#000000"),
                n = f.ZP.div.withConfig({
                    displayName: "VideoIframe",
                    componentId: "sc-__sc-1lxloa-2"
                })(["position:absolute;width:100%;height:100%;left:0;top:0;", ";iframe{width:100%;height:100%;}"], E => E.addFancyBorder && "overflow: hidden; border-radius: 20px"),
                h = E => {
                    var {
                        addBackground: T = !0,
                        addFancyBorder: R = !1,
                        cover: _,
                        height: G,
                        id: j,
                        isVideoCentered: N,
                        isVisible: V,
                        onLoad: F = () => {},
                        paused: O,
                        scale: D = 1,
                        service: I
                    } = E, W = (0, x.Gc)(), {
                        t: q
                    } = (0, A.Dy)(), te = (0, m.useRef)(j), Z = (0, m.useRef)(null), ne = (0, m.useRef)(), ae = (0, m.useRef)(I);
                    (0, m.useEffect)(() => {
                        if (!!ne.current) {
                            var l = () => {
                                var y;
                                Z.current = r()(ne.current, I, {
                                    id: j,
                                    cover: _
                                }), Z != null && (y = Z.current) !== null && y !== void 0 && y.onLoad && Z.current.onLoad().then(F)
                            };
                            Z.current ? (I !== ae.current ? l() : j !== te.current && Z.current.loadVideo({
                                id: j,
                                cover: _
                            }), ae.current = I, te.current = j, O && Z.current.pause()) : l()
                        }
                    }, [j, O, I, ne]);
                    var p = W === "lg" || W === "xl" ? "".concat(D * 100, "%") : "100%";
                    return (0, u.jsx)(e, {
                        isCentered: N,
                        isVisible: V,
                        width: p,
                        children: (0, u.jsxs)(t, {
                            addBackground: T,
                            addFancyBorder: R,
                            height: G,
                            children: [(0, u.jsx)(b.Z, {
                                as: "figcaption",
                                children: q("a11y.video.caption")
                            }), (0, u.jsx)(n, {
                                addFancyBorder: R,
                                ref: ne
                            })]
                        })
                    })
                };
            const g = h
        },
        36749: U => {
            U.exports = function(w, r, A) {
                var x = document.head || document.getElementsByTagName("head")[0],
                    b = document.createElement("script");
                typeof r == "function" && (A = r, r = {}), r = r || {}, A = A || function() {}, b.type = r.type || "text/javascript", b.charset = r.charset || "utf8", b.async = "async" in r ? !!r.async : !0, b.src = w, r.attrs && a(b, r.attrs), r.text && (b.text = "" + r.text);
                var u = "onload" in b ? d : m;
                u(b, A), b.onload || d(b, A), x.appendChild(b)
            };

            function a(f, w) {
                for (var r in w) f.setAttribute(r, w[r])
            }

            function d(f, w) {
                f.onload = function() {
                    this.onerror = this.onload = null, w(null, f)
                }, f.onerror = function() {
                    this.onerror = this.onload = null, w(new Error("Failed to load " + this.src), f)
                }
            }

            function m(f, w) {
                f.onreadystatechange = function() {
                    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, w(null, f))
                }
            }
        },
        73889: (U, a, d) => {
            var m;
            /*! Player.js - v0.1.0 - 2017-10-24
             * http://github.com/embedly/player.js
             * Copyright (c) 2017 Embedly; Licensed BSD */
            (function(f, w) {
                var r = {};
                r.DEBUG = !1, r.VERSION = "0.0.11", r.CONTEXT = "player.js", r.POST_MESSAGE = !!f.postMessage, r.origin = function(e) {
                    return e.substr(0, 2) === "//" && (e = f.location.protocol + e), e.split("/").slice(0, 3).join("/")
                }, r.addEvent = function(e, t, n) {
                    !e || (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
                }, r.log = function() {
                    r.log.history = r.log.history || [], r.log.history.push(arguments), f.console && r.DEBUG && f.console.log(Array.prototype.slice.call(arguments))
                }, r.isString = function(e) {
                    return Object.prototype.toString.call(e) === "[object String]"
                }, r.isObject = function(e) {
                    return Object.prototype.toString.call(e) === "[object Object]"
                }, r.isArray = function(e) {
                    return Object.prototype.toString.call(e) === "[object Array]"
                }, r.isNone = function(e) {
                    return e == null
                }, r.has = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.indexOf = function(e, t) {
                    if (e == null) return -1;
                    var n = 0,
                        h = e.length;
                    if (Array.prototype.IndexOf && e.indexOf === Array.prototype.IndexOf) return e.indexOf(t);
                    for (; n < h; n++)
                        if (e[n] === t) return n;
                    return -1
                }, r.assert = function(e, t) {
                    if (!e) throw t || "Player.js Assert Failed"
                }, r.Keeper = function() {
                    this.init()
                }, r.Keeper.prototype.init = function() {
                    this.data = {}
                }, r.Keeper.prototype.getUUID = function() {
                    return "listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = Math.random() * 16 | 0,
                            n = e === "x" ? t : t & 3 | 8;
                        return n.toString(16)
                    })
                }, r.Keeper.prototype.has = function(e, t) {
                    if (!this.data.hasOwnProperty(e)) return !1;
                    if (r.isNone(t)) return !0;
                    for (var n = this.data[e], h = 0; h < n.length; h++)
                        if (n[h].id === t) return !0;
                    return !1
                }, r.Keeper.prototype.add = function(e, t, n, h, g) {
                    var E = {
                        id: e,
                        event: t,
                        cb: n,
                        ctx: h,
                        one: g
                    };
                    this.has(t) ? this.data[t].push(E) : this.data[t] = [E]
                }, r.Keeper.prototype.execute = function(e, t, n, h) {
                    if (!this.has(e, t)) return !1;
                    for (var g = [], E = [], T = 0; T < this.data[e].length; T++) {
                        var R = this.data[e][T];
                        r.isNone(t) || !r.isNone(t) && R.id === t ? (E.push({
                            cb: R.cb,
                            ctx: R.ctx ? R.ctx : h,
                            data: n
                        }), R.one === !1 && g.push(R)) : g.push(R)
                    }
                    g.length === 0 ? delete this.data[e] : this.data[e] = g;
                    for (var _ = 0; _ < E.length; _++) {
                        var G = E[_];
                        G.cb.call(G.ctx, G.data)
                    }
                }, r.Keeper.prototype.on = function(e, t, n, h) {
                    this.add(e, t, n, h, !1)
                }, r.Keeper.prototype.one = function(e, t, n, h) {
                    this.add(e, t, n, h, !0)
                }, r.Keeper.prototype.off = function(e, t) {
                    var n = [];
                    if (!this.data.hasOwnProperty(e)) return n;
                    for (var h = [], g = 0; g < this.data[e].length; g++) {
                        var E = this.data[e][g];
                        !r.isNone(t) && E.cb !== t ? h.push(E) : r.isNone(E.id) || n.push(E.id)
                    }
                    return h.length === 0 ? delete this.data[e] : this.data[e] = h, n
                }, r.Player = function(e, t) {
                    if (!(this instanceof r.Player)) return new r.Player(e, t);
                    this.init(e, t)
                }, r.EVENTS = {
                    READY: "ready",
                    PLAY: "play",
                    PAUSE: "pause",
                    ENDED: "ended",
                    TIMEUPDATE: "timeupdate",
                    PROGRESS: "progress",
                    ERROR: "error"
                }, r.EVENTS.all = function() {
                    var e = [];
                    for (var t in r.EVENTS) r.has(r.EVENTS, t) && r.isString(r.EVENTS[t]) && e.push(r.EVENTS[t]);
                    return e
                }, r.METHODS = {
                    PLAY: "play",
                    PAUSE: "pause",
                    GETPAUSED: "getPaused",
                    MUTE: "mute",
                    UNMUTE: "unmute",
                    GETMUTED: "getMuted",
                    SETVOLUME: "setVolume",
                    GETVOLUME: "getVolume",
                    GETDURATION: "getDuration",
                    SETCURRENTTIME: "setCurrentTime",
                    GETCURRENTTIME: "getCurrentTime",
                    SETLOOP: "setLoop",
                    GETLOOP: "getLoop",
                    REMOVEEVENTLISTENER: "removeEventListener",
                    ADDEVENTLISTENER: "addEventListener"
                }, r.METHODS.all = function() {
                    var e = [];
                    for (var t in r.METHODS) r.has(r.METHODS, t) && r.isString(r.METHODS[t]) && e.push(r.METHODS[t]);
                    return e
                }, r.READIED = [], r.Player.prototype.init = function(e, t) {
                    var n = this;
                    r.isString(e) && (e = w.getElementById(e)), this.elem = e, r.assert(e.nodeName === "IFRAME", 'playerjs.Player constructor requires an Iframe, got "' + e.nodeName + '"'), r.assert(e.src, "playerjs.Player constructor requires a Iframe with a 'src' attribute."), this.origin = r.origin(e.src), this.keeper = new r.Keeper, this.isReady = !1, this.queue = [], this.events = r.EVENTS.all(), this.methods = r.METHODS.all(), r.POST_MESSAGE ? r.addEvent(f, "message", function(h) {
                        n.receive(h)
                    }) : r.log("Post Message is not Available."), r.indexOf(r.READIED, e.src) > -1 ? n.loaded = !0 : this.elem.onload = function() {
                        n.loaded = !0
                    }
                }, r.Player.prototype.send = function(e, t, n) {
                    if (e.context = r.CONTEXT, e.version = r.VERSION, t) {
                        var h = this.keeper.getUUID();
                        e.listener = h, this.keeper.one(h, e.method, t, n)
                    }
                    return !this.isReady && e.value !== "ready" ? (r.log("Player.queue", e), this.queue.push(e), !1) : (r.log("Player.send", e, this.origin), this.loaded === !0 && this.elem.contentWindow.postMessage(JSON.stringify(e), this.origin), !0)
                }, r.Player.prototype.receive = function(e) {
                    if (r.log("Player.receive", e), e.origin !== this.origin) return !1;
                    var t;
                    try {
                        t = JSON.parse(e.data)
                    } catch (n) {
                        return !1
                    }
                    if (t.context !== r.CONTEXT) return !1;
                    t.event === "ready" && t.value && t.value.src === this.elem.src && this.ready(t), this.keeper.has(t.event, t.listener) && this.keeper.execute(t.event, t.listener, t.value, this)
                }, r.Player.prototype.ready = function(e) {
                    if (this.isReady === !0) return !1;
                    e.value.events && (this.events = e.value.events), e.value.methods && (this.methods = e.value.methods), this.isReady = !0, this.loaded = !0;
                    for (var t = 0; t < this.queue.length; t++) {
                        var n = this.queue[t];
                        r.log("Player.dequeue", n), e.event === "ready" && this.keeper.execute(n.event, n.listener, !0, this), this.send(n)
                    }
                    this.queue = []
                }, r.Player.prototype.on = function(e, t, n) {
                    var h = this.keeper.getUUID();
                    return e === "ready" ? this.keeper.one(h, e, t, n) : this.keeper.on(h, e, t, n), this.send({
                        method: "addEventListener",
                        value: e,
                        listener: h
                    }), !0
                }, r.Player.prototype.off = function(e, t) {
                    var n = this.keeper.off(e, t);
                    if (r.log("Player.off", n), n.length > 0)
                        for (var h in n) return this.send({
                            method: "removeEventListener",
                            value: e,
                            listener: n[h]
                        }), !0;
                    return !1
                }, r.Player.prototype.supports = function(e, t) {
                    r.assert(r.indexOf(["method", "event"], e) > -1, 'evtOrMethod needs to be either "event" or "method" got ' + e), t = r.isArray(t) ? t : [t];
                    for (var n = e === "event" ? this.events : this.methods, h = 0; h < t.length; h++)
                        if (r.indexOf(n, t[h]) === -1) return !1;
                    return !0
                };

                function A(e) {
                    return function() {
                        var t = {
                                method: e
                            },
                            n = Array.prototype.slice.call(arguments);
                        /^get/.test(e) ? (r.assert(n.length > 0, "Get methods require a callback."), n.unshift(t)) : (/^set/.test(e) && (r.assert(n.length !== 0, "Set methods require a value."), t.value = n[0]), n = [t]), this.send.apply(this, n)
                    }
                }
                for (var x = 0, b = r.METHODS.all().length; x < b; x++) {
                    var u = r.METHODS.all()[x];
                    r.Player.prototype.hasOwnProperty(u) || (r.Player.prototype[u] = A(u))
                }
                r.addEvent(f, "message", function(e) {
                    var t;
                    try {
                        t = JSON.parse(e.data)
                    } catch (n) {
                        return !1
                    }
                    if (t.context !== r.CONTEXT) return !1;
                    t.event === "ready" && t.value && t.value.src && r.READIED.push(t.value.src)
                }), r.Receiver = function(e, t) {
                    this.init(e, t)
                }, r.Receiver.prototype.init = function(e, t) {
                    var n = this;
                    this.isReady = !1, this.origin = r.origin(w.referrer), this.methods = {}, this.supported = {
                        events: e || r.EVENTS.all(),
                        methods: t || r.METHODS.all()
                    }, this.eventListeners = {}, this.reject = !(f.self !== f.top && r.POST_MESSAGE), this.reject || r.addEvent(f, "message", function(h) {
                        n.receive(h)
                    })
                }, r.Receiver.prototype.receive = function(e) {
                    if (e.origin !== this.origin) return !1;
                    var t = {};
                    if (r.isObject(e.data)) t = e.data;
                    else try {
                        t = f.JSON.parse(e.data)
                    } catch (g) {
                        r.log("JSON Parse Error", g)
                    }
                    if (r.log("Receiver.receive", e, t), !t.method || t.context !== r.CONTEXT) return !1;
                    if (r.indexOf(r.METHODS.all(), t.method) === -1) return this.emit("error", {
                        code: 2,
                        msg: 'Invalid Method "' + t.method + '"'
                    }), !1;
                    var n = r.isNone(t.listener) ? null : t.listener;
                    if (t.method === "addEventListener") this.eventListeners.hasOwnProperty(t.value) ? r.indexOf(this.eventListeners[t.value], n) === -1 && this.eventListeners[t.value].push(n) : this.eventListeners[t.value] = [n], t.value === "ready" && this.isReady && this.ready();
                    else if (t.method === "removeEventListener") {
                        if (this.eventListeners.hasOwnProperty(t.value)) {
                            var h = r.indexOf(this.eventListeners[t.value], n);
                            h > -1 && this.eventListeners[t.value].splice(h, 1), this.eventListeners[t.value].length === 0 && delete this.eventListeners[t.value]
                        }
                    } else this.get(t.method, t.value, n)
                }, r.Receiver.prototype.get = function(e, t, n) {
                    var h = this;
                    if (!this.methods.hasOwnProperty(e)) return this.emit("error", {
                        code: 3,
                        msg: 'Method Not Supported"' + e + '"'
                    }), !1;
                    var g = this.methods[e];
                    if (e.substr(0, 3) === "get") {
                        var E = function(T) {
                            h.send(e, T, n)
                        };
                        g.call(this, E)
                    } else g.call(this, t)
                }, r.Receiver.prototype.on = function(e, t) {
                    this.methods[e] = t
                }, r.Receiver.prototype.send = function(e, t, n) {
                    if (r.log("Receiver.send", e, t, n), this.reject) return r.log("Receiver.send.reject", e, t, n), !1;
                    var h = {
                        context: r.CONTEXT,
                        version: r.VERSION,
                        event: e
                    };
                    r.isNone(t) || (h.value = t), r.isNone(n) || (h.listener = n);
                    var g = JSON.stringify(h);
                    f.parent.postMessage(g, this.origin === "" ? "*" : this.origin)
                }, r.Receiver.prototype.emit = function(e, t) {
                    if (!this.eventListeners.hasOwnProperty(e)) return !1;
                    r.log("Instance.emit", e, t, this.eventListeners[e]);
                    for (var n = 0; n < this.eventListeners[e].length; n++) {
                        var h = this.eventListeners[e][n];
                        this.send(e, t, h)
                    }
                    return !0
                }, r.Receiver.prototype.ready = function() {
                    r.log("Receiver.ready"), this.isReady = !0;
                    var e = {
                        src: f.location.toString(),
                        events: this.supported.events,
                        methods: this.supported.methods
                    };
                    this.emit("ready", e) || this.send("ready", e)
                }, r.HTML5Adapter = function(e) {
                    if (!(this instanceof r.HTML5Adapter)) return new r.HTML5Adapter(e);
                    this.init(e)
                }, r.HTML5Adapter.prototype.init = function(e) {
                    r.assert(e, "playerjs.HTML5Adapter requires a video element");
                    var t = this.receiver = new r.Receiver;
                    e.addEventListener("playing", function() {
                        t.emit("play")
                    }), e.addEventListener("pause", function() {
                        t.emit("pause")
                    }), e.addEventListener("ended", function() {
                        t.emit("ended")
                    }), e.addEventListener("timeupdate", function() {
                        t.emit("timeupdate", {
                            seconds: e.currentTime,
                            duration: e.duration
                        })
                    }), e.addEventListener("progress", function() {
                        t.emit("buffered", {
                            percent: e.buffered.length
                        })
                    }), t.on("play", function() {
                        e.play()
                    }), t.on("pause", function() {
                        e.pause()
                    }), t.on("getPaused", function(n) {
                        n(e.paused)
                    }), t.on("getCurrentTime", function(n) {
                        n(e.currentTime)
                    }), t.on("setCurrentTime", function(n) {
                        e.currentTime = n
                    }), t.on("getDuration", function(n) {
                        n(e.duration)
                    }), t.on("getVolume", function(n) {
                        n(e.volume * 100)
                    }), t.on("setVolume", function(n) {
                        e.volume = n / 100
                    }), t.on("mute", function() {
                        e.muted = !0
                    }), t.on("unmute", function() {
                        e.muted = !1
                    }), t.on("getMuted", function(n) {
                        n(e.muted)
                    }), t.on("getLoop", function(n) {
                        n(e.loop)
                    }), t.on("setLoop", function(n) {
                        e.loop = n
                    })
                }, r.HTML5Adapter.prototype.ready = function() {
                    this.receiver.ready()
                }, r.JWPlayerAdapter = function(e) {
                    if (!(this instanceof r.JWPlayerAdapter)) return new r.JWPlayerAdapter(e);
                    this.init(e)
                }, r.JWPlayerAdapter.prototype.init = function(e) {
                    r.assert(e, "playerjs.JWPlayerAdapter requires a player object");
                    var t = this.receiver = new r.Receiver;
                    this.looped = !1, e.on("pause", function() {
                        t.emit("pause")
                    }), e.on("play", function() {
                        t.emit("play")
                    }), e.on("time", function(h) {
                        var g = h.position,
                            E = h.duration;
                        if (!g || !E) return !1;
                        var T = {
                            seconds: g,
                            duration: E
                        };
                        t.emit("timeupdate", T)
                    });
                    var n = this;
                    e.on("complete", function() {
                        n.looped === !0 ? e.seek(0) : t.emit("ended")
                    }), e.on("error", function() {
                        t.emit("error")
                    }), t.on("play", function() {
                        e.play(!0)
                    }), t.on("pause", function() {
                        e.pause(!0)
                    }), t.on("getPaused", function(h) {
                        h(e.getState().toLowerCase() !== "PLAYING".toLowerCase())
                    }), t.on("getCurrentTime", function(h) {
                        h(e.getPosition())
                    }), t.on("setCurrentTime", function(h) {
                        e.seek(h)
                    }), t.on("getDuration", function(h) {
                        h(e.getDuration())
                    }), t.on("getVolume", function(h) {
                        h(e.getVolume())
                    }), t.on("setVolume", function(h) {
                        e.setVolume(h)
                    }), t.on("mute", function() {
                        e.setMute(!0)
                    }), t.on("unmute", function() {
                        e.setMute(!1)
                    }), t.on("getMuted", function(h) {
                        h(e.getMute() === !0)
                    }), t.on("getLoop", function(h) {
                        h(this.looped)
                    }, this), t.on("setLoop", function(h) {
                        this.looped = h
                    }, this)
                }, r.JWPlayerAdapter.prototype.ready = function() {
                    this.receiver.ready()
                }, r.MockAdapter = function() {
                    if (!(this instanceof r.MockAdapter)) return new r.MockAdapter;
                    this.init()
                }, r.MockAdapter.prototype.init = function() {
                    var e = {
                            duration: 20,
                            currentTime: 0,
                            interval: null,
                            timeupdate: function() {},
                            volume: 100,
                            mute: !1,
                            playing: !1,
                            loop: !1,
                            play: function() {
                                e.interval = setInterval(function() {
                                    e.currentTime += .25, e.timeupdate({
                                        seconds: e.currentTime,
                                        duration: e.duration
                                    })
                                }, 250), e.playing = !0
                            },
                            pause: function() {
                                clearInterval(e.interval), e.playing = !1
                            }
                        },
                        t = this.receiver = new r.Receiver;
                    t.on("play", function() {
                        var n = this;
                        e.play(), this.emit("play"), e.timeupdate = function(h) {
                            n.emit("timeupdate", h)
                        }
                    }), t.on("pause", function() {
                        e.pause(), this.emit("pause")
                    }), t.on("getPaused", function(n) {
                        n(!e.playing)
                    }), t.on("getCurrentTime", function(n) {
                        n(e.currentTime)
                    }), t.on("setCurrentTime", function(n) {
                        e.currentTime = n
                    }), t.on("getDuration", function(n) {
                        n(e.duration)
                    }), t.on("getVolume", function(n) {
                        n(e.volume)
                    }), t.on("setVolume", function(n) {
                        e.volume = n
                    }), t.on("mute", function() {
                        e.mute = !0
                    }), t.on("unmute", function() {
                        e.mute = !1
                    }), t.on("getMuted", function(n) {
                        n(e.mute)
                    }), t.on("getLoop", function(n) {
                        n(e.loop)
                    }), t.on("setLoop", function(n) {
                        e.loop = n
                    })
                }, r.MockAdapter.prototype.ready = function() {
                    this.receiver.ready()
                }, r.VideoJSAdapter = function(e) {
                    if (!(this instanceof r.VideoJSAdapter)) return new r.VideoJSAdapter(e);
                    this.init(e)
                }, r.VideoJSAdapter.prototype.init = function(e) {
                    r.assert(e, "playerjs.VideoJSReceiver requires a player object");
                    var t = this.receiver = new r.Receiver;
                    e.on("pause", function() {
                        t.emit("pause")
                    }), e.on("play", function() {
                        t.emit("play")
                    }), e.on("timeupdate", function(n) {
                        var h = e.currentTime(),
                            g = e.duration();
                        if (!h || !g) return !1;
                        var E = {
                            seconds: h,
                            duration: g
                        };
                        t.emit("timeupdate", E)
                    }), e.on("ended", function() {
                        t.emit("ended")
                    }), e.on("error", function() {
                        t.emit("error")
                    }), t.on("play", function() {
                        e.play()
                    }), t.on("pause", function() {
                        e.pause()
                    }), t.on("getPaused", function(n) {
                        n(e.paused())
                    }), t.on("getCurrentTime", function(n) {
                        n(e.currentTime())
                    }), t.on("setCurrentTime", function(n) {
                        e.currentTime(n)
                    }), t.on("getDuration", function(n) {
                        n(e.duration())
                    }), t.on("getVolume", function(n) {
                        n(e.volume() * 100)
                    }), t.on("setVolume", function(n) {
                        e.volume(n / 100)
                    }), t.on("mute", function() {
                        e.volume(0)
                    }), t.on("unmute", function() {
                        e.volume(1)
                    }), t.on("getMuted", function(n) {
                        n(e.volume() === 0)
                    }), t.on("getLoop", function(n) {
                        n(e.loop())
                    }), t.on("setLoop", function(n) {
                        e.loop(n)
                    })
                }, r.VideoJSAdapter.prototype.ready = function() {
                    this.receiver.ready()
                }, m = function() {
                    return r
                }.call(a, d, a, U), m !== void 0 && (U.exports = m)
            })(window, document)
        },
        33932: U => {
            var a = function(d) {
                "use strict";
                var m = Object.prototype,
                    f = m.hasOwnProperty,
                    w, r = typeof Symbol == "function" ? Symbol : {},
                    A = r.iterator || "@@iterator",
                    x = r.asyncIterator || "@@asyncIterator",
                    b = r.toStringTag || "@@toStringTag";

                function u(p, l, y) {
                    return Object.defineProperty(p, l, {
                        value: y,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), p[l]
                }
                try {
                    u({}, "")
                } catch (p) {
                    u = function(l, y, L) {
                        return l[y] = L
                    }
                }

                function e(p, l, y, L) {
                    var P = l && l.prototype instanceof R ? l : R,
                        J = Object.create(P.prototype),
                        ie = new Z(L || []);
                    return J._invoke = I(p, y, ie), J
                }
                d.wrap = e;

                function t(p, l, y) {
                    try {
                        return {
                            type: "normal",
                            arg: p.call(l, y)
                        }
                    } catch (L) {
                        return {
                            type: "throw",
                            arg: L
                        }
                    }
                }
                var n = "suspendedStart",
                    h = "suspendedYield",
                    g = "executing",
                    E = "completed",
                    T = {};

                function R() {}

                function _() {}

                function G() {}
                var j = {};
                j[A] = function() {
                    return this
                };
                var N = Object.getPrototypeOf,
                    V = N && N(N(ne([])));
                V && V !== m && f.call(V, A) && (j = V);
                var F = G.prototype = R.prototype = Object.create(j);
                _.prototype = F.constructor = G, G.constructor = _, _.displayName = u(G, b, "GeneratorFunction");

                function O(p) {
                    ["next", "throw", "return"].forEach(function(l) {
                        u(p, l, function(y) {
                            return this._invoke(l, y)
                        })
                    })
                }
                d.isGeneratorFunction = function(p) {
                    var l = typeof p == "function" && p.constructor;
                    return l ? l === _ || (l.displayName || l.name) === "GeneratorFunction" : !1
                }, d.mark = function(p) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(p, G) : (p.__proto__ = G, u(p, b, "GeneratorFunction")), p.prototype = Object.create(F), p
                }, d.awrap = function(p) {
                    return {
                        __await: p
                    }
                };

                function D(p, l) {
                    function y(J, ie, c, i) {
                        var o = t(p[J], p, ie);
                        if (o.type === "throw") i(o.arg);
                        else {
                            var s = o.arg,
                                v = s.value;
                            return v && typeof v == "object" && f.call(v, "__await") ? l.resolve(v.__await).then(function(C) {
                                y("next", C, c, i)
                            }, function(C) {
                                y("throw", C, c, i)
                            }) : l.resolve(v).then(function(C) {
                                s.value = C, c(s)
                            }, function(C) {
                                return y("throw", C, c, i)
                            })
                        }
                    }
                    var L;

                    function P(J, ie) {
                        function c() {
                            return new l(function(i, o) {
                                y(J, ie, i, o)
                            })
                        }
                        return L = L ? L.then(c, c) : c()
                    }
                    this._invoke = P
                }
                O(D.prototype), D.prototype[x] = function() {
                    return this
                }, d.AsyncIterator = D, d.async = function(p, l, y, L, P) {
                    P === void 0 && (P = Promise);
                    var J = new D(e(p, l, y, L), P);
                    return d.isGeneratorFunction(l) ? J : J.next().then(function(ie) {
                        return ie.done ? ie.value : J.next()
                    })
                };

                function I(p, l, y) {
                    var L = n;
                    return function(J, ie) {
                        if (L === g) throw new Error("Generator is already running");
                        if (L === E) {
                            if (J === "throw") throw ie;
                            return ae()
                        }
                        for (y.method = J, y.arg = ie;;) {
                            var c = y.delegate;
                            if (c) {
                                var i = W(c, y);
                                if (i) {
                                    if (i === T) continue;
                                    return i
                                }
                            }
                            if (y.method === "next") y.sent = y._sent = y.arg;
                            else if (y.method === "throw") {
                                if (L === n) throw L = E, y.arg;
                                y.dispatchException(y.arg)
                            } else y.method === "return" && y.abrupt("return", y.arg);
                            L = g;
                            var o = t(p, l, y);
                            if (o.type === "normal") {
                                if (L = y.done ? E : h, o.arg === T) continue;
                                return {
                                    value: o.arg,
                                    done: y.done
                                }
                            } else o.type === "throw" && (L = E, y.method = "throw", y.arg = o.arg)
                        }
                    }
                }

                function W(p, l) {
                    var y = p.iterator[l.method];
                    if (y === w) {
                        if (l.delegate = null, l.method === "throw") {
                            if (p.iterator.return && (l.method = "return", l.arg = w, W(p, l), l.method === "throw")) return T;
                            l.method = "throw", l.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return T
                    }
                    var L = t(y, p.iterator, l.arg);
                    if (L.type === "throw") return l.method = "throw", l.arg = L.arg, l.delegate = null, T;
                    var P = L.arg;
                    if (!P) return l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, T;
                    if (P.done) l[p.resultName] = P.value, l.next = p.nextLoc, l.method !== "return" && (l.method = "next", l.arg = w);
                    else return P;
                    return l.delegate = null, T
                }
                O(F), u(F, b, "Generator"), F[A] = function() {
                    return this
                }, F.toString = function() {
                    return "[object Generator]"
                };

                function q(p) {
                    var l = {
                        tryLoc: p[0]
                    };
                    1 in p && (l.catchLoc = p[1]), 2 in p && (l.finallyLoc = p[2], l.afterLoc = p[3]), this.tryEntries.push(l)
                }

                function te(p) {
                    var l = p.completion || {};
                    l.type = "normal", delete l.arg, p.completion = l
                }

                function Z(p) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], p.forEach(q, this), this.reset(!0)
                }
                d.keys = function(p) {
                    var l = [];
                    for (var y in p) l.push(y);
                    return l.reverse(),
                        function L() {
                            for (; l.length;) {
                                var P = l.pop();
                                if (P in p) return L.value = P, L.done = !1, L
                            }
                            return L.done = !0, L
                        }
                };

                function ne(p) {
                    if (p) {
                        var l = p[A];
                        if (l) return l.call(p);
                        if (typeof p.next == "function") return p;
                        if (!isNaN(p.length)) {
                            var y = -1,
                                L = function P() {
                                    for (; ++y < p.length;)
                                        if (f.call(p, y)) return P.value = p[y], P.done = !1, P;
                                    return P.value = w, P.done = !0, P
                                };
                            return L.next = L
                        }
                    }
                    return {
                        next: ae
                    }
                }
                d.values = ne;

                function ae() {
                    return {
                        value: w,
                        done: !0
                    }
                }
                return Z.prototype = {
                    constructor: Z,
                    reset: function(p) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = w, this.done = !1, this.delegate = null, this.method = "next", this.arg = w, this.tryEntries.forEach(te), !p)
                            for (var l in this) l.charAt(0) === "t" && f.call(this, l) && !isNaN(+l.slice(1)) && (this[l] = w)
                    },
                    stop: function() {
                        this.done = !0;
                        var p = this.tryEntries[0],
                            l = p.completion;
                        if (l.type === "throw") throw l.arg;
                        return this.rval
                    },
                    dispatchException: function(p) {
                        if (this.done) throw p;
                        var l = this;

                        function y(i, o) {
                            return J.type = "throw", J.arg = p, l.next = i, o && (l.method = "next", l.arg = w), !!o
                        }
                        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
                            var P = this.tryEntries[L],
                                J = P.completion;
                            if (P.tryLoc === "root") return y("end");
                            if (P.tryLoc <= this.prev) {
                                var ie = f.call(P, "catchLoc"),
                                    c = f.call(P, "finallyLoc");
                                if (ie && c) {
                                    if (this.prev < P.catchLoc) return y(P.catchLoc, !0);
                                    if (this.prev < P.finallyLoc) return y(P.finallyLoc)
                                } else if (ie) {
                                    if (this.prev < P.catchLoc) return y(P.catchLoc, !0)
                                } else if (c) {
                                    if (this.prev < P.finallyLoc) return y(P.finallyLoc)
                                } else throw new Error("try statement without catch or finally")
                            }
                        }
                    },
                    abrupt: function(p, l) {
                        for (var y = this.tryEntries.length - 1; y >= 0; --y) {
                            var L = this.tryEntries[y];
                            if (L.tryLoc <= this.prev && f.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
                                var P = L;
                                break
                            }
                        }
                        P && (p === "break" || p === "continue") && P.tryLoc <= l && l <= P.finallyLoc && (P = null);
                        var J = P ? P.completion : {};
                        return J.type = p, J.arg = l, P ? (this.method = "next", this.next = P.finallyLoc, T) : this.complete(J)
                    },
                    complete: function(p, l) {
                        if (p.type === "throw") throw p.arg;
                        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && l && (this.next = l), T
                    },
                    finish: function(p) {
                        for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                            var y = this.tryEntries[l];
                            if (y.finallyLoc === p) return this.complete(y.completion, y.afterLoc), te(y), T
                        }
                    },
                    catch: function(p) {
                        for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                            var y = this.tryEntries[l];
                            if (y.tryLoc === p) {
                                var L = y.completion;
                                if (L.type === "throw") {
                                    var P = L.arg;
                                    te(y)
                                }
                                return P
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(p, l, y) {
                        return this.delegate = {
                            iterator: ne(p),
                            resultName: l,
                            nextLoc: y
                        }, this.method === "next" && (this.arg = w), T
                    }
                }, d
            }(U.exports);
            try {
                regeneratorRuntime = a
            } catch (d) {
                Function("r", "regeneratorRuntime = r")(a)
            }
        },
        79037: U => {
            "use strict";
            var a;
            /**
             * @link https://github.com/gajus/sister for the canonical source repository
             * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
             */
            a = function() {
                var d = {},
                    m = {};
                return d.on = function(f, w) {
                    var r = {
                        name: f,
                        handler: w
                    };
                    return m[f] = m[f] || [], m[f].unshift(r), r
                }, d.off = function(f) {
                    var w = m[f.name].indexOf(f);
                    w !== -1 && m[f.name].splice(w, 1)
                }, d.trigger = function(f, w) {
                    var r = m[f],
                        A;
                    if (r)
                        for (A = r.length; A--;) r[A].handler(w)
                }, d
            }, U.exports = a
        },
        20623: (U, a, d) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var m = d(41900),
                f = w(m);

            function w(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            a.default = {
                pauseVideo: {
                    acceptableStates: [f.default.ENDED, f.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [f.default.ENDED, f.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [f.default.ENDED, f.default.PLAYING, f.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, U.exports = a.default
        },
        31800: (U, a, d) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var m = d(59144),
                f = e(m),
                w = d(68509),
                r = e(w),
                A = d(73637),
                x = e(A),
                b = d(20623),
                u = e(b);

            function e(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            var t = (0, f.default)("youtube-player"),
                n = {};
            n.proxyEvents = function(h) {
                var g = {},
                    E = function(F) {
                        var O = "on" + F.slice(0, 1).toUpperCase() + F.slice(1);
                        g[O] = function(D) {
                            t('event "%s"', O, D), h.trigger(F, D)
                        }
                    },
                    T = !0,
                    R = !1,
                    _ = void 0;
                try {
                    for (var G = x.default[Symbol.iterator](), j; !(T = (j = G.next()).done); T = !0) {
                        var N = j.value;
                        E(N)
                    }
                } catch (V) {
                    R = !0, _ = V
                } finally {
                    try {
                        !T && G.return && G.return()
                    } finally {
                        if (R) throw _
                    }
                }
                return g
            }, n.promisifyPlayer = function(h) {
                var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                    E = {},
                    T = function(O) {
                        g && u.default[O] ? E[O] = function() {
                            for (var D = arguments.length, I = Array(D), W = 0; W < D; W++) I[W] = arguments[W];
                            return h.then(function(q) {
                                var te = u.default[O],
                                    Z = q.getPlayerState(),
                                    ne = q[O].apply(q, I);
                                return te.stateChangeRequired || Array.isArray(te.acceptableStates) && te.acceptableStates.indexOf(Z) === -1 ? new Promise(function(ae) {
                                    var p = function l() {
                                        var y = q.getPlayerState(),
                                            L = void 0;
                                        typeof te.timeout == "number" && (L = setTimeout(function() {
                                            q.removeEventListener("onStateChange", l), ae()
                                        }, te.timeout)), Array.isArray(te.acceptableStates) && te.acceptableStates.indexOf(y) !== -1 && (q.removeEventListener("onStateChange", l), clearTimeout(L), ae())
                                    };
                                    q.addEventListener("onStateChange", p)
                                }).then(function() {
                                    return ne
                                }) : ne
                            })
                        } : E[O] = function() {
                            for (var D = arguments.length, I = Array(D), W = 0; W < D; W++) I[W] = arguments[W];
                            return h.then(function(q) {
                                return q[O].apply(q, I)
                            })
                        }
                    },
                    R = !0,
                    _ = !1,
                    G = void 0;
                try {
                    for (var j = r.default[Symbol.iterator](), N; !(R = (N = j.next()).done); R = !0) {
                        var V = N.value;
                        T(V)
                    }
                } catch (F) {
                    _ = !0, G = F
                } finally {
                    try {
                        !R && j.return && j.return()
                    } finally {
                        if (_) throw G
                    }
                }
                return E
            }, a.default = n, U.exports = a.default
        },
        41900: (U, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            }, U.exports = a.default
        },
        73637: (U, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], U.exports = a.default
        },
        68509: (U, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], U.exports = a.default
        },
        30796: (U, a, d) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                f = d(79037),
                w = u(f),
                r = d(72598),
                A = u(r),
                x = d(31800),
                b = u(x);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var e = void 0;
            a.default = function(t) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                    g = (0, w.default)();
                if (e || (e = (0, A.default)(g)), n.events) throw new Error("Event handlers cannot be overwritten.");
                if (typeof t == "string" && !document.getElementById(t)) throw new Error('Element "' + t + '" does not exist.');
                n.events = b.default.proxyEvents(g);
                var E = new Promise(function(R) {
                        if ((typeof t == "undefined" ? "undefined" : m(t)) === "object" && t.playVideo instanceof Function) {
                            var _ = t;
                            R(_)
                        } else e.then(function(G) {
                            var j = new G.Player(t, n);
                            return g.on("ready", function() {
                                R(j)
                            }), null
                        })
                    }),
                    T = b.default.promisifyPlayer(E, h);
                return T.on = g.on, T.off = g.off, T
            }, U.exports = a.default
        },
        72598: (U, a, d) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var m = d(36749),
                f = w(m);

            function w(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            a.default = function(r) {
                var A = new Promise(function(x) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
                        x(window.YT);
                        return
                    } else {
                        var b = window.location.protocol === "http:" ? "http:" : "https:";
                        (0, f.default)(b + "//www.youtube.com/iframe_api", function(e) {
                            e && r.trigger("error", e)
                        })
                    }
                    var u = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function() {
                        u && u(), x(window.YT)
                    }
                });
                return A
            }, U.exports = a.default
        },
        59144: (U, a, d) => {
            var m = d(55978);
            a = U.exports = d(74815), a.log = r, a.formatArgs = w, a.save = A, a.load = x, a.useColors = f, a.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : b(), a.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];

            function f() {
                return typeof window != "undefined" && window.process && window.process.type === "renderer" ? !0 : typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }
            a.formatters.j = function(u) {
                try {
                    return JSON.stringify(u)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            };

            function w(u) {
                var e = this.useColors;
                if (u[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + u[0] + (e ? "%c " : " ") + "+" + a.humanize(this.diff), !!e) {
                    var t = "color: " + this.color;
                    u.splice(1, 0, t, "color: inherit");
                    var n = 0,
                        h = 0;
                    u[0].replace(/%[a-zA-Z%]/g, function(g) {
                        g !== "%%" && (n++, g === "%c" && (h = n))
                    }), u.splice(h, 0, t)
                }
            }

            function r() {
                return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function A(u) {
                try {
                    u == null ? a.storage.removeItem("debug") : a.storage.debug = u
                } catch (e) {}
            }

            function x() {
                var u;
                try {
                    u = a.storage.debug
                } catch (e) {}
                return !u && typeof m != "undefined" && "env" in m && (u = m.env.DEBUG), u
            }
            a.enable(x());

            function b() {
                try {
                    return window.localStorage
                } catch (u) {}
            }
        },
        74815: (U, a, d) => {
            a = U.exports = w.debug = w.default = w, a.coerce = b, a.disable = A, a.enable = r, a.enabled = x, a.humanize = d(34130), a.names = [], a.skips = [], a.formatters = {};
            var m;

            function f(u) {
                var e = 0,
                    t;
                for (t in u) e = (e << 5) - e + u.charCodeAt(t), e |= 0;
                return a.colors[Math.abs(e) % a.colors.length]
            }

            function w(u) {
                function e() {
                    if (!!e.enabled) {
                        var t = e,
                            n = +new Date,
                            h = n - (m || n);
                        t.diff = h, t.prev = m, t.curr = n, m = n;
                        for (var g = new Array(arguments.length), E = 0; E < g.length; E++) g[E] = arguments[E];
                        g[0] = a.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
                        var T = 0;
                        g[0] = g[0].replace(/%([a-zA-Z%])/g, function(_, G) {
                            if (_ === "%%") return _;
                            T++;
                            var j = a.formatters[G];
                            if (typeof j == "function") {
                                var N = g[T];
                                _ = j.call(t, N), g.splice(T, 1), T--
                            }
                            return _
                        }), a.formatArgs.call(t, g);
                        var R = e.log || a.log || console.log.bind(console);
                        R.apply(t, g)
                    }
                }
                return e.namespace = u, e.enabled = a.enabled(u), e.useColors = a.useColors(), e.color = f(u), typeof a.init == "function" && a.init(e), e
            }

            function r(u) {
                a.save(u), a.names = [], a.skips = [];
                for (var e = (typeof u == "string" ? u : "").split(/[\s,]+/), t = e.length, n = 0; n < t; n++) !e[n] || (u = e[n].replace(/\*/g, ".*?"), u[0] === "-" ? a.skips.push(new RegExp("^" + u.substr(1) + "$")) : a.names.push(new RegExp("^" + u + "$")))
            }

            function A() {
                a.enable("")
            }

            function x(u) {
                var e, t;
                for (e = 0, t = a.skips.length; e < t; e++)
                    if (a.skips[e].test(u)) return !1;
                for (e = 0, t = a.names.length; e < t; e++)
                    if (a.names[e].test(u)) return !0;
                return !1
            }

            function b(u) {
                return u instanceof Error ? u.stack || u.message : u
            }
        },
        34130: U => {
            var a = 1e3,
                d = a * 60,
                m = d * 60,
                f = m * 24,
                w = f * 365.25;
            U.exports = function(u, e) {
                e = e || {};
                var t = typeof u;
                if (t === "string" && u.length > 0) return r(u);
                if (t === "number" && isNaN(u) === !1) return e.long ? x(u) : A(u);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(u))
            };

            function r(u) {
                if (u = String(u), !(u.length > 100)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(u);
                    if (!!e) {
                        var t = parseFloat(e[1]),
                            n = (e[2] || "ms").toLowerCase();
                        switch (n) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return t * w;
                            case "days":
                            case "day":
                            case "d":
                                return t * f;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return t * m;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return t * d;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return t * a;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return t;
                            default:
                                return
                        }
                    }
                }
            }

            function A(u) {
                return u >= f ? Math.round(u / f) + "d" : u >= m ? Math.round(u / m) + "h" : u >= d ? Math.round(u / d) + "m" : u >= a ? Math.round(u / a) + "s" : u + "ms"
            }

            function x(u) {
                return b(u, f, "day") || b(u, m, "hour") || b(u, d, "minute") || b(u, a, "second") || u + " ms"
            }

            function b(u, e, t) {
                if (!(u < e)) return u < e * 1.5 ? Math.floor(u / e) + " " + t : Math.ceil(u / e) + " " + t + "s"
            }
        }
    }
]);