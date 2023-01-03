"use strict";
(self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
    [680], {
        86520: (Zt, Ze, c) => {
            c.d(Ze, {
                UC: () => sn,
                d1: () => Jt,
                eQ: () => vt
            });
            var i = c(56890),
                b = c(64923),
                q = c(98153),
                Pe = c(86040),
                Be = c(42855),
                he = c(1908),
                Oe = C => C.ref,
                ze = C => (0, he.Z)(C.ref) ? (0, he.Z)(C.value) ? C : C.value : C.ref,
                Me = function() {
                    var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "-",
                        se = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "YYYYMMDD",
                        de = arguments.length > 2 ? arguments[2] : void 0,
                        [pe, Ve, Ye] = de.split("-");
                    switch (pe = pe ? pe.padStart(4, "0") : "\\_\\_\\_\\_", Ve = Ve ? Ve.padStart(2, "0") : "\\_\\_", Ye = Ye ? Ye.padStart(2, "0") : "\\_\\_", se) {
                        case "DDMMYYYY":
                            return Ye + B + Ve + B + pe;
                        case "MMDDYYYY":
                            return Ve + B + Ye + B + pe;
                        case "YYYYMMDD":
                            return pe + B + Ve + B + Ye;
                        default:
                            return null
                    }
                },
                We = (C, B) => {
                    var se = ze(B),
                        de;
                    switch (C.type) {
                        case b.aR:
                        case b.Jx:
                        case b.yb:
                        case b.LI:
                            var pe = C.choices.find(Ve => Ve.ref === se);
                            de = pe ? pe.label : se;
                            break;
                        case b.xc:
                        case b.FA:
                            de = "";
                            break;
                        case b.Hu:
                            de = Me(C.separator, C.structure, se);
                            break;
                        default:
                            typeof se == "string" ? de = se : typeof se == "number" ? de = se.toString() : de = B.label
                    }
                    return de || ""
                };

            function I(C, B) {
                var se = [].concat((0, he.Z)(B) ? [] : B).map(de => {
                    var pe = ze(de),
                        Ve = We(C, de);
                    return {
                        value: pe,
                        humanReadableText: Ve
                    }
                });
                return {
                    blockRef: Oe(C),
                    value: se
                }
            }

            function ce(C) {
                return C.value.length === 0 || C.value.every(B => !B.value)
            }
            var F = c(44893),
                K = c(47808),
                w = c.n(K),
                R = c(30999),
                Y = c(92181),
                O = c(93250),
                Z = c(45509),
                W = c(1513),
                S = () => C => {
                    var [B, se, de] = C.split("-");
                    if (!B || !se || !de) return new W.FU("date");
                    if (B.length < 4) return new W.iz;
                    B = B.padStart(4, "0"), se = se.padStart(2, "0"), de = de.padStart(2, "0");
                    var pe = new Date("".concat(B, "-").concat(se, "-").concat(de));
                    return isNaN(pe.valueOf()) ? new W.FU("date") : pe.getUTCFullYear() !== parseInt(B, 10) || pe.getUTCMonth() !== parseInt(se, 10) - 1 || pe.getUTCDate() !== parseInt(de, 10) ? new W.FU("date") : null
                };

            function a() {
                return C => C.map(S()).filter(Boolean)
            }
            var Pt = function() {
                var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.POSITIVE_INFINITY;
                return se => se.length <= B
            };

            function wt(C) {
                return (0, R.$6P)(Pt(C))
            }
            var Tt = C => B => B === C;

            function ue(C) {
                return (0, R.$6P)(Tt(C))
            }
            var $e = c(62746),
                dt = c(10619),
                gt = c(61270),
                nr = (C, B) => new W.Kf(C, dt.Z[B.code] || B.message, !0),
                ie = C => new W.Kf(C, "label.paymentError.".concat(C, "Incomplete")),
                A = C => {
                    var B = [],
                        {
                            cardCvc: se,
                            cardExpiry: de,
                            cardNumber: pe,
                            cardholdersName: Ve
                        } = C,
                        Ye = {
                            [gt.Z.CardCvc]: se,
                            [gt.Z.CardExpiry]: de,
                            [gt.Z.CardNumber]: pe
                        },
                        rt = Object.keys(Ye),
                        Ge = !C || !Ve && rt.every(pt => Ye[pt].empty);
                    return Ge ? [] : (rt.forEach(pt => {
                        Ye[pt].error && B.push(nr(pt, Ye[pt].error))
                    }), Ve || B.push(ie(gt.Z.CardName)), rt.forEach(pt => {
                        Ye[pt].empty && B.push(ie(pt))
                    }), B)
                };

            function je() {
                return C => C.flatMap(A)
            }
            var ge = (0, R.wEe)(R.xbD, R.kKJ),
                tt = (0, R.$6P)(ge),
                ht = C => C.trim(),
                It = C => (0, R.is)(String, C);

            function Et(C) {
                return B => {
                    if (!C) return !0;
                    var se = B.map(de => It(de) ? ht(de) : de);
                    return !tt(se)
                }
            }
            var zt = new RegExp(/^(https?|ftp):\/\/[-a-zA-Z0-9:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,18}\b/),
                Mt = new RegExp(/[\s]/),
                sr = new RegExp(/^app:\/\/.+$/),
                Mr = C => (0, R.xbD)(C) || zt.test(C) && !Mt.test(C) || sr.test(C);

            function br() {
                return (0, R.$6P)(Mr)
            }
            var Er = C => B => !C || !B.length || B.length >= C,
                _r = () => () => !0,
                Zr = C => {
                    var {
                        minValue: B,
                        maxValue: se,
                        values: de
                    } = C;
                    return !(0, he.Z)(de) && ((0, $e.h)(B) || (0, $e.h)(se))
                },
                Dr = C => {
                    var {
                        minValue: B,
                        maxValue: se
                    } = C;
                    return de => de >= B && de <= se
                },
                nn = C => {
                    var {
                        minValue: B
                    } = C;
                    return se => se >= B
                },
                an = C => {
                    var {
                        maxValue: B
                    } = C;
                    return se => se <= B
                },
                Vr = C => B => {
                    var {
                        minValue: se,
                        maxValue: de
                    } = B;
                    return pe => Zr({
                        minValue: se,
                        maxValue: de,
                        values: pe
                    }) ? pe.every($e.h) && pe.every(C({
                        minValue: se,
                        maxValue: de
                    })) : !0
                },
                Gr = Vr(Dr),
                $r = Vr(nn),
                Br = Vr(an),
                Qr = {
                    [Z.Z.date]: a,
                    [Z.Z.maxLength]: wt,
                    [Z.Z.maxSelection]: _r,
                    [Z.Z.maxValue]: Br,
                    [Z.Z.minSelection]: Er,
                    [Z.Z.minValue]: $r,
                    [Z.Z.mustAccept]: ue,
                    [Z.Z.number]: $e.Z,
                    [Z.Z.payment]: je,
                    [Z.Z.range]: Gr,
                    [Z.Z.required]: Et,
                    [Z.Z.url]: br
                };

            function $t(C, B, se, de, pe, Ve, Ye) {
                try {
                    var rt = C[Ve](Ye),
                        Ge = rt.value
                } catch (pt) {
                    se(pt);
                    return
                }
                rt.done ? B(Ge) : Promise.resolve(Ge).then(de, pe)
            }

            function te(C) {
                return function() {
                    var B = this,
                        se = arguments;
                    return new Promise(function(de, pe) {
                        var Ve = C.apply(B, se);

                        function Ye(Ge) {
                            $t(Ve, de, pe, Ye, rt, "next", Ge)
                        }

                        function rt(Ge) {
                            $t(Ve, de, pe, Ye, rt, "throw", Ge)
                        }
                        Ye(void 0)
                    })
                }
            }
            var Yr = function() {
                    var C = te(function*(B, se, de) {
                        for (var pe = Object.keys(se), Ve = {}, Ye = 0, rt = pe.length; Ye < rt; Ye++) {
                            var Ge = pe[Ye];
                            Ve[Ge] = yield B[Ge](se[Ge], de)
                        }
                        return Ve
                    });
                    return function(se, de, pe) {
                        return C.apply(this, arguments)
                    }
                }(),
                Ur = (0, R.hXT)(C => C !== !0),
                on = (C, B) => te(function*() {
                    var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                            validations: {}
                        },
                        de = yield Yr(C, se.validations, {
                            featureFlags: B
                        });
                    return function() {
                        var pe = te(function*(Ve) {
                            var Ye = yield(0, Y.p)(se.definition, Ve), rt = (0, R.IDH)(pt => pt(Ve), de), Ge = Ur(Ye || rt);
                            return Object.entries(Ge).flatMap(pt => {
                                var [Yt, ar] = pt;
                                return ar === !1 ? [new W.FU(w()(Yt), se.validations, Ge)] : typeof ar == "object" ? Array.isArray(ar) ? ar : (0, O.JY)(ar) ? [] : [new W.FU(null, ar, Ge)] : []
                            })
                        });
                        return function(Ve) {
                            return pe.apply(this, arguments)
                        }
                    }()
                });

            function hn(C, B) {
                return on(Qr, B)
            }

            function cr(C, B, se, de, pe, Ve, Ye) {
                try {
                    var rt = C[Ve](Ye),
                        Ge = rt.value
                } catch (pt) {
                    se(pt);
                    return
                }
                rt.done ? B(Ge) : Promise.resolve(Ge).then(de, pe)
            }

            function Hr(C) {
                return function() {
                    var B = this,
                        se = arguments;
                    return new Promise(function(de, pe) {
                        var Ve = C.apply(B, se);

                        function Ye(Ge) {
                            cr(Ve, de, pe, Ye, rt, "next", Ge)
                        }

                        function rt(Ge) {
                            cr(Ve, de, pe, Ye, rt, "throw", Ge)
                        }
                        Ye(void 0)
                    })
                }
            }
            var j = function() {
                var C = Hr(function*(B, se, de) {
                    var pe = (0, F.$z)(se),
                        Ve = hn(B, de),
                        Ye = yield Ve(B);
                    return Ye(pe)
                });
                return function(se, de, pe) {
                    return C.apply(this, arguments)
                }
            }();

            function Ae(C, B, se) {
                return Qe.apply(this, arguments)
            }

            function Qe() {
                return Qe = Hr(function*(C, B, se) {
                    if (!!B) return j(C, B, se)
                }), Qe.apply(this, arguments)
            }
            var Ot = c(14132),
                le = c(3547),
                Dt = c(68531),
                kt = c(44376),
                qt = c(88376);

            function Wt(C, B) {
                return C.length === B.length && C.every((se, de) => se === B[de])
            }
            var Or = c(82462),
                xr = c(51053),
                Jr = c(75273),
                ln = c(51585),
                E = c(47408),
                ke = c(37223);

            function Ie(C, B, se, de, pe, Ve, Ye) {
                try {
                    var rt = C[Ve](Ye),
                        Ge = rt.value
                } catch (pt) {
                    se(pt);
                    return
                }
                rt.done ? B(Ge) : Promise.resolve(Ge).then(de, pe)
            }

            function we(C) {
                return function() {
                    var B = this,
                        se = arguments;
                    return new Promise(function(de, pe) {
                        var Ve = C.apply(B, se);

                        function Ye(Ge) {
                            Ie(Ve, de, pe, Ye, rt, "next", Ge)
                        }

                        function rt(Ge) {
                            Ie(Ve, de, pe, Ye, rt, "throw", Ge)
                        }
                        Ye(void 0)
                    })
                }
            }

            function vt(C, B, se) {
                var {
                    isFromPrefilledAnswer: de = !1
                } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, pe = (0, Or.G)(se);
                return function() {
                    var Ve = we(function*(Ye, rt) {
                        var Ge = rt(),
                            pt = (0, F.GD)(Ge, C),
                            Yt = (0, F.Fx)(Ge, C),
                            ar = (0, le.cY)(Ge);
                        if (!!Yt && !(0, F.G8)(Ge)) {
                            var Cr = I(Yt, B),
                                cn = (0, F.$z)(pt),
                                yn = (0, F.$z)(Cr);
                            if (!Wt(cn, yn)) {
                                var nt = (0, le.I6)(Ge),
                                    Kr = (0, q.jO)(Ge),
                                    zr = (jt, Sn) => {
                                        var yt = (0, Ot.s5)((0, le.Bc)(Sn), jt.type);
                                        return jt.type !== b.xc && !yt
                                    };
                                if (!nt && zr(Yt, Ge) && !Kr) {
                                    var Ln = (0, Dt.aD)(Yt);
                                    (0, qt.lt)(ar, C, {
                                        hash: Ln,
                                        value: Array.isArray(B) ? B : [B]
                                    })
                                }
                                if (yield Ye({
                                        type: Pe.qU,
                                        payload: {
                                            answer: Cr,
                                            navigationType: pe,
                                            isFromPrefilledAnswer: de
                                        }
                                    }), yield Ye(Bt(Yt.ref)), (0, le.k$)(Ge) && Ye((0, Jr.hl)(!1)), ce(Cr)) {
                                    var bn = (0, F.X2)(rt());
                                    Ye((0, ln.D)(bn))
                                }
                                if (Yt.application && !de) {
                                    yield(0, xr.YN)();
                                    var xt = (0, Ot.EK)(Ge, Yt.ref);
                                    Ye(xt ? (0, ke.R2)(se) : sn(Yt.ref, se, {
                                        isFromPrefilledAnswer: de
                                    }))
                                }
                            }
                        }
                    });
                    return function(Ye, rt) {
                        return Ve.apply(this, arguments)
                    }
                }()
            }

            function Bt(C) {
                return function() {
                    var B = we(function*(se, de) {
                        var pe = de(),
                            Ve = (0, F.Fx)(pe, C);
                        if (!(!Ve || !(0, i.nN)(Ve.type))) {
                            var Ye = (0, F.GD)(pe, C),
                                rt = (0, kt.BZ)(pe),
                                Ge = yield Ae(Ve, {
                                    value: Ye.value
                                }, rt), pt = !!Be.J.includes(Ve == null ? void 0 : Ve.type);
                            se({
                                type: Pe.jD,
                                payload: {
                                    blockRef: C,
                                    validationErrors: Ge,
                                    shouldAnswerBeFormatted: pt
                                }
                            })
                        }
                    });
                    return function(se, de) {
                        return B.apply(this, arguments)
                    }
                }()
            }
            var Jt = C => (B, se) => {
                var de = se(),
                    pe = (0, F.VX)(de, C);
                if (!!pe) {
                    var Ve = new W.FU("fileUpload");
                    B({
                        type: Pe.jD,
                        payload: {
                            blockRef: pe.ref,
                            validationErrors: [Ve]
                        }
                    })
                }
            };

            function jr(C, B) {
                return {
                    type: Pe.NO,
                    payload: {
                        ref: C,
                        source: B
                    }
                }
            }

            function kr(C) {
                return {
                    type: Pe.aR,
                    payload: {
                        ref: C
                    }
                }
            }

            function Ut(C) {
                return {
                    type: Pe.fI,
                    payload: {
                        ref: C
                    }
                }
            }

            function sn(C, B) {
                var {
                    source: se,
                    isFromPrefilledAnswer: de = !1,
                    callerNavigationType: pe
                } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Ve = pe || (0, Or.G)(B);
                return function() {
                    var Ye = we(function*(rt, Ge) {
                        rt(jr(C, se)), yield rt(Bt(C));
                        var pt = Ge(),
                            Yt = (0, F.Fx)(pt, C),
                            ar = (0, i.nN)(Yt.type),
                            Cr = (0, F.GD)(pt, C);
                        if (ar && !(0, F.z5)(Cr)) return rt(Ut(C));
                        rt(kr(C)), rt((0, ln.D)((0, F.X2)(pt))), rt((0, E.MN)(Yt ? (0, F.F5)(Yt) : void 0, {
                            navigationType: Ve,
                            isFromPrefilledAnswer: de
                        }))
                    });
                    return function(rt, Ge) {
                        return Ye.apply(this, arguments)
                    }
                }()
            }
        },
        47408: (Zt, Ze, c) => {
            c.d(Ze, {
                MN: () => Me,
                hA: () => ze
            });
            var i = c(14132),
                b = c(44893),
                q = c(84028),
                Pe = c(3547),
                Be = c(13836),
                he = c(86520),
                Oe = c(75273);

            function ze() {
                var {
                    navigationType: I,
                    isFromPrefilledAnswer: ce = !1
                } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return function(F, K) {
                    var w = K(),
                        R = (0, i.Qi)(w),
                        Y = (0, Be.S5)(w);
                    if (!R) {
                        var O = (0, b.tK)(w),
                            Z = (0, b.Fx)(w, O);
                        return Z.application ? void 0 : F((0, Oe.hl)(!0))
                    }
                    if (Y) {
                        var W = (0, b.tK)(w),
                            S = (0, b.Fx)(w, W);
                        F((0, he.UC)(S.ref, null, {
                            isFromPrefilledAnswer: ce,
                            callerNavigationType: I
                        }));
                        return
                    }
                    return F((0, Oe.IS)(R, {
                        navigationType: I,
                        isFromPrefilledAnswer: ce
                    }))
                }
            }

            function Me(I) {
                var {
                    navigationType: ce,
                    isFromPrefilledAnswer: F
                } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return (K, w) => {
                    var R = w();
                    return (0, Pe.ti)(R) ? K((0, Oe.Qh)({
                        navigationType: ce,
                        isFromPrefilledAnswer: F
                    })) : K(We(I, {
                        navigationType: ce,
                        isFromPrefilledAnswer: F
                    }))
                }
            }
            var We = function(ce) {
                var {
                    navigationType: F,
                    isFromPrefilledAnswer: K
                } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return (w, R) => {
                    var Y = R(),
                        O = (0, b.iu)(Y, ce),
                        Z = (0, b.Jz)(Y),
                        W = Z.find(a => a.ref === O) != null;
                    if (O && W) {
                        var S = (0, q.Fi)(Y, O) ? (0, i.mO)(Y) : O;
                        return w((0, Oe.IS)(S, {
                            navigationType: F,
                            isFromPrefilledAnswer: K
                        }))
                    }
                    return w(ze({
                        navigationType: F
                    }))
                }
            }
        },
        37223: (Zt, Ze, c) => {
            c.d(Ze, {
                IC: () => F,
                R2: () => ze,
                Rm: () => ce,
                Xf: () => We,
                bq: () => I
            });
            var i = c(86040),
                b = c(3547),
                q = c(44893),
                Pe = c(83562),
                Be = c(82462),
                he = c(75273),
                Oe = c(51585);

            function ze(K) {
                var w = (0, Be.G)(K);
                return (R, Y) => {
                    var O = Y();
                    if (R((0, Oe.D)((0, q.X2)(O))), R((0, Oe.Y)()), (0, Pe.Bu)(O)) {
                        var Z = (0, b.I6)(O);
                        R((0, he.vm)()), R(Me(Z, w))
                    } else {
                        var W = (0, b.ti)(O);
                        W || R((0, he.dM)()), R((0, he.Qh)(w))
                    }
                }
            }

            function Me(K, w) {
                return {
                    type: i.Fu,
                    payload: {
                        isLivePreview: K,
                        navigationType: w
                    }
                }
            }

            function We() {
                return {
                    type: i.Zg
                }
            }

            function I(K, w) {
                return {
                    type: i.p2,
                    error: !0,
                    payload: {
                        retry: {
                            timeout: K
                        },
                        errorCode: w
                    }
                }
            }

            function ce(K, w, R, Y) {
                return {
                    type: i.$4,
                    error: !0,
                    payload: {
                        message: K,
                        errorCode: w,
                        errorDescription: R,
                        errorDetails: Y
                    }
                }
            }

            function F(K, w) {
                return (R, Y) => {
                    var O = Y();
                    (0, b.Cf)(O, K) && R(ze(w))
                }
            }
        },
        29253: (Zt, Ze, c) => {
            c.d(Ze, {
                Bu: () => Me,
                HS: () => w,
                iX: () => We,
                mK: () => I,
                p7: () => F,
                uw: () => K
            });
            var i = c(18),
                b = c(96512);

            function q(R, Y, O, Z, W, S, a) {
                try {
                    var Pt = R[S](a),
                        wt = Pt.value
                } catch (Tt) {
                    O(Tt);
                    return
                }
                Pt.done ? Y(wt) : Promise.resolve(wt).then(Z, W)
            }

            function Pe(R) {
                return function() {
                    var Y = this,
                        O = arguments;
                    return new Promise(function(Z, W) {
                        var S = R.apply(Y, O);

                        function a(wt) {
                            q(S, Z, W, a, Pt, "next", wt)
                        }

                        function Pt(wt) {
                            q(S, Z, W, a, Pt, "throw", wt)
                        }
                        a(void 0)
                    })
                }
            }
            var Be = "".concat(b.V.apiHost, "/").concat(b.V.endpoints.forms),
                he = {
                    "Content-Type": "application/json; charset=UTF-8",
                    Accept: "application/json"
                },
                Oe = function() {
                    var R = Pe(function*(Y) {
                        var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        try {
                            var Z = yield fetch(Y, O);
                            return Z.ok ? yield Z.json(): Promise.reject(Error(Z.status, {
                                cause: Z.status
                            }))
                        } catch (W) {
                            return Promise.reject(W)
                        }
                    });
                    return function(O) {
                        return R.apply(this, arguments)
                    }
                }(),
                ze = function() {
                    var R = Pe(function*(Y, O) {
                        var Z = {
                            body: JSON.stringify(O),
                            headers: he,
                            method: "POST"
                        };
                        try {
                            var W = yield fetch(Y, Z);
                            return W.ok ? W.json() : Promise.reject(W.status)
                        } catch (S) {
                            return Promise.reject(S)
                        }
                    });
                    return function(O, Z) {
                        return R.apply(this, arguments)
                    }
                }(),
                Me = (R, Y) => {
                    var O = "".concat(Be).concat(R, "/").concat(b.V.endpoints.landings),
                        Z = {
                            visit_response_id: Y
                        };
                    return ze(O, Z)
                },
                We = function() {
                    var R = Pe(function*(Y) {
                        var {
                            formId: O,
                            landingId: Z,
                            landingAt: W,
                            values: S,
                            payment: a,
                            outcome: Pt,
                            formPublicKey: wt,
                            featureFlags: Tt,
                            thankYouScreenRef: ue = "default_tys"
                        } = Y, $e = "".concat(Be).concat(O, "/").concat(b.V.endpoints.submissions), dt = (yield Promise.all([c.e(246), c.e(89), c.e(680)]).then(c.bind(c, 52949))).default, gt = yield dt({
                            formId: O,
                            landingAt: W,
                            landingId: Z,
                            payment: a,
                            values: S,
                            outcome: Pt,
                            formPublicKey: wt,
                            featureFlags: Tt,
                            thankYouScreenRef: ue
                        });
                        return ze($e, gt)
                    });
                    return function(O) {
                        return R.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var R = Pe(function*(Y, O) {
                        var Z = "".concat(Be).concat(Y, "/").concat(b.V.endpoints.uploads).concat(O, "/upload-credentials");
                        try {
                            return yield Oe(Z)
                        } catch (W) {
                            return Promise.reject(Error("credentials-error"))
                        }
                    });
                    return function(O, Z) {
                        return R.apply(this, arguments)
                    }
                }(),
                ce = R => R.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>{}[\]\\/\s]/g, "_"),
                F = function(Y) {
                    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.Z,
                        W = ce(Y.name),
                        {
                            bucket: S
                        } = O,
                        a = "https://".concat(S, ".s3.amazonaws.com");
                    return new Promise((Pt, wt) => {
                        var Tt = new XMLHttpRequest;
                        Tt.open("POST", a, !0), Tt.setRequestHeader("Access-Control-Allow-Origin", "*"), Tt.onload = () => {
                            if (Tt.status < 200 || Tt.status >= 299) return wt(new Error(Tt.response && Tt.response.code || "s3-upload-error"));
                            var dt = "".concat(O.token, "-").concat(W);
                            Pt(dt)
                        }, Tt.onerror = () => wt(new Error("s3-connection-error"));
                        var ue = dt => {
                                var gt = dt.loaded / dt.total;
                                Z(gt)
                            },
                            $e = new FormData;
                        Tt.upload.addEventListener("progress", ue, !1), $e.append("key", "".concat(O.folder).concat(O.token)), $e.append("AWSAccessKeyId", O.key), O.security_token && $e.append("x-amz-security-token", O.security_token), $e.append("acl", O.acl), $e.append("policy", O.policy), $e.append("signature", O.signature), $e.append("file", Y), $e.append("successActionRedirect", O.success_action_redirect), Tt.send($e)
                    })
                },
                K = function() {
                    var R = Pe(function*(Y) {
                        var O = {
                            headers: {
                                Accept: "application/json",
                                "Access-Control-Allow-Origin": "*"
                            }
                        };
                        try {
                            var Z = (yield Oe(Y, O)) || {
                                has_alpha: !1
                            };
                            return !Z.has_alpha
                        } catch (W) {
                            return W.cause ? Promise.reject(W) : Promise.reject(Error("crop-prop-from-image-error"))
                        }
                    });
                    return function(O) {
                        return R.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var R = Pe(function*(Y) {
                        var O = "".concat(Be).concat(Y, "/insights/submissions");
                        try {
                            var Z = yield Oe(O);
                            return Z.submissions
                        } catch (W) {
                            return W.cause ? Promise.reject(W) : Promise.reject(Error("get-number-of-submissions-error"))
                        }
                    });
                    return function(O) {
                        return R.apply(this, arguments)
                    }
                }()
        },
        52949: (Zt, Ze, c) => {
            c.r(Ze), c.d(Ze, {
                default: () => nr
            });
            var i = c(30999),
                b = c(6258),
                q = c(64923),
                Pe = c(56618),
                Be = c(14132),
                he = c(34296);

            function Oe(ie, A) {
                var je = Object.keys(ie);
                if (Object.getOwnPropertySymbols) {
                    var ge = Object.getOwnPropertySymbols(ie);
                    A && (ge = ge.filter(function(tt) {
                        return Object.getOwnPropertyDescriptor(ie, tt).enumerable
                    })), je.push.apply(je, ge)
                }
                return je
            }

            function ze(ie) {
                for (var A = 1; A < arguments.length; A++) {
                    var je = arguments[A] != null ? arguments[A] : {};
                    A % 2 ? Oe(Object(je), !0).forEach(function(ge) {
                        Me(ie, ge, je[ge])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ie, Object.getOwnPropertyDescriptors(je)) : Oe(Object(je)).forEach(function(ge) {
                        Object.defineProperty(ie, ge, Object.getOwnPropertyDescriptor(je, ge))
                    })
                }
                return ie
            }

            function Me(ie, A, je) {
                return A in ie ? Object.defineProperty(ie, A, {
                    value: je,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : ie[A] = je, ie
            }

            function We(ie, A, je, ge, tt, ht, It) {
                try {
                    var Et = ie[ht](It),
                        zt = Et.value
                } catch (Mt) {
                    je(Mt);
                    return
                }
                Et.done ? A(zt) : Promise.resolve(zt).then(ge, tt)
            }

            function I(ie) {
                return function() {
                    var A = this,
                        je = arguments;
                    return new Promise(function(ge, tt) {
                        var ht = ie.apply(A, je);

                        function It(zt) {
                            We(ht, ge, tt, It, Et, "next", zt)
                        }

                        function Et(zt) {
                            We(ht, ge, tt, It, Et, "throw", zt)
                        }
                        It(void 0)
                    })
                }
            }
            var ce = {
                    [q.Hu]: "date",
                    [q.yb]: "text",
                    [q.ML]: "file_name",
                    [q.l8]: "boolean",
                    [q.oP]: "text",
                    [q.aR]: "choices",
                    [q.Wu]: "number",
                    [q.xg]: "number",
                    [q.Jx]: "choices",
                    [q.Si]: "number",
                    [q.cy]: "url",
                    [q.Xj]: "boolean",
                    [q.xc]: "payment",
                    [q.LI]: "choices"
                },
                F = (ie, A) => A.properties.choices.find(je => je.ref === ie),
                K = (ie, A) => {
                    var je = ie.map(ge => {
                        var tt = F(ge, A);
                        return tt ? {
                            id: tt.id,
                            label: tt.label
                        } : null
                    });
                    return je.filter(ge => ge !== null)
                },
                w = (ie, A) => {
                    var je = K(A, ie);
                    return je.length ? je[0].label : A[0]
                };

            function R(ie) {
                var [A, je, ge] = ie.split("-"), tt = "".concat(A.padStart(4, "0"), "-").concat(je.padStart(2, "0"), "-").concat(ge.padStart(2, "0"));
                return new Date(tt).toISOString()
            }

            function Y(ie, A, je, ge) {
                return {
                    field: {
                        id: ie,
                        type: A
                    },
                    type: je,
                    [je]: ge
                }
            }

            function O(ie, A, je, ge, tt) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return Z = I(function*(ie, A, je, ge, tt) {
                    var {
                        block: ht,
                        answer: It
                    } = ie, Et = It !== void 0 ? It[0] : "", zt = ce[ht.type], Mt = (0, Pe.k)(ht.definition, It, {
                        featureFlags: tt
                    });
                    if (Mt) return Mt;
                    switch (ht.type) {
                        case q.yb:
                            Et = w(ht, It);
                            break;
                        case q.Hu:
                            Et = R(Et);
                            break;
                        case q.ML:
                            Et = Et.s3Filename;
                            break;
                        case q.xc:
                            Et = ze({
                                amount: A,
                                currency: ht.currency,
                                name: Et.cardholdersName
                            }, je);
                            break;
                        case q.cy:
                        case q.oP:
                            if (Et === "") return null;
                            if (Et && (0, Be.s5)(ge, ht.type)) {
                                var {
                                    encryptAsAnon: sr
                                } = yield Promise.all([c.e(35), c.e(84)]).then(c.bind(c, 45832));
                                Et = sr(Et, ge)
                            }
                            break;
                        default:
                            return Y(ht.id, ht.type, zt, Et)
                    }
                    return Y(ht.id, ht.type, zt, Et)
                }), Z.apply(this, arguments)
            }
            var W = ie => ie && ie.type !== void 0,
                S = (ie, A, je, ge, tt) => Promise.all(ie.map(ht => O(ht, A, je, ge, tt))),
                a = function() {
                    var ie = I(function*(A, je, ge, tt, ht) {
                        var It = yield S(A, je, ge, tt, ht);
                        return (0, i.xHg)(It).filter(W)
                    });
                    return function(je, ge, tt, ht, It) {
                        return ie.apply(this, arguments)
                    }
                }();

            function Pt(ie) {
                return Object.keys(ie).map(A => ({
                    key: A,
                    value: ie[A]
                }))
            }

            function wt(ie, A) {
                var je = ie[A.variable],
                    ge = A.choices.find(tt => tt.ref === je);
                if (!ge) throw new he.Z("MISSING_WINNING_OUTCOME", "Could not find matching winning outcome", "winningOutcomeRef:  ".concat(ie[A.variable]));
                return ge
            }

            function Tt(ie, A) {
                var je = (0, i.CEd)(["price"], ie);
                return Object.keys(je).map(ge => {
                    if (A && ge === A.variable) {
                        var tt = wt(ie, A);
                        return {
                            key: ge,
                            type: "outcome_id",
                            outcome_id: tt.id
                        }
                    }
                    var ht = ie[ge],
                        It = typeof ht == "string" ? "text" : "number";
                    return {
                        key: ge,
                        type: It,
                        [It]: ht
                    }
                })
            }

            function ue(ie, A) {
                if (!A) return null;
                var je = wt(ie, A);
                return {
                    id: je.id,
                    title: je.title
                }
            }

            function $e() {
                var ie = b.Z.get("hubspotutk") || null;
                return ie === null ? null : {
                    hubspot: {
                        utk: ie,
                        page_name: document.title,
                        page_url: window.location.href
                    }
                }
            }

            function dt(ie) {
                return gt.apply(this, arguments)
            }

            function gt() {
                return gt = I(function*(ie) {
                    var {
                        formId: A,
                        landingAt: je = "",
                        landingId: ge,
                        payment: tt,
                        values: {
                            answers: ht = [],
                            hidden: It = {},
                            variables: Et = {}
                        } = {},
                        outcome: zt,
                        formPublicKey: Mt,
                        featureFlags: sr,
                        thankYouScreenRef: Mr = "default_tys"
                    } = ie, br = Pt(It), Er = Tt(Et, zt), _r = ue(Et, zt), Zr = yield a(ht, Et.price, tt, Mt, sr), Dr = $e();
                    return ze(ze(ze(ze(ze(ze({
                        signature: ge,
                        form_id: A,
                        landed_at: parseInt(je)
                    }, br.length ? {
                        hidden: br
                    } : null), Er.length ? {
                        variables: Er
                    } : null), Zr.length ? {
                        answers: Zr
                    } : null), Dr ? {
                        integrations_metadata: Dr
                    } : null), _r ? {
                        outcome: _r
                    } : null), {}, {
                        thankyou_screen_ref: Mr
                    })
                }), gt.apply(this, arguments)
            }
            const nr = dt
        },
        12209: (Zt, Ze, c) => {
            c.r(Ze), c.d(Ze, {
                BTN_MODE: () => Wt,
                UTM_CONTENT_THANKYOU_FOOTER: () => j,
                default: () => ln,
                getCustomRedirectUrl: () => Jr
            });
            var i = c(36601),
                b = c(8941),
                q = c(72814),
                Pe = c(98153),
                Be = c(94476),
                he = c(75273),
                Oe = c(26633),
                ze = c(84028),
                Me = c(44893),
                We = c(3547),
                I = c(91360),
                ce = E => !!E.form.outcome,
                F = E => !!(E.form.hidden && Object.keys(E.form.hidden).includes("utm_source")),
                K = c(77923),
                w = c(54325),
                R = c(71383),
                Y = c(40102),
                O = c(96105),
                Z = c(9034),
                W = c(68656),
                S = c(33552),
                a = c(2380),
                Pt = c(29770),
                wt = c(23426),
                Tt = c(32315),
                ue = c(81006),
                $e = c(90383),
                dt = c(64354),
                gt = c(99395),
                nr = [{
                    name: "Facebook",
                    icon: R.createElement($e.Z, null),
                    link: "https://www.facebook.com/sharer/sharer.php?u=",
                    utmSource: "facebook"
                }, {
                    name: "Twitter",
                    icon: R.createElement(dt.Z, null),
                    link: "https://twitter.com/intent/tweet?url=",
                    utmSource: "twitter"
                }, {
                    name: "LinkedIn",
                    icon: R.createElement(gt.Z, null),
                    link: "https://www.linkedin.com/shareArticle?url=",
                    utmSource: "linkedin"
                }];
            const ie = nr;
            var A = c(14246),
                je = c(13796),
                ge = c(82462),
                tt = c(72090),
                ht = c(97056),
                It = c(38832),
                Et = c(93276),
                zt = c(10995),
                Mt = c.n(zt),
                sr = c(46284),
                Mr = c(610),
                br = ["link", "utmSource"];

            function Er(E, ke) {
                var Ie = Object.keys(E);
                if (Object.getOwnPropertySymbols) {
                    var we = Object.getOwnPropertySymbols(E);
                    ke && (we = we.filter(function(vt) {
                        return Object.getOwnPropertyDescriptor(E, vt).enumerable
                    })), Ie.push.apply(Ie, we)
                }
                return Ie
            }

            function _r(E) {
                for (var ke = 1; ke < arguments.length; ke++) {
                    var Ie = arguments[ke] != null ? arguments[ke] : {};
                    ke % 2 ? Er(Object(Ie), !0).forEach(function(we) {
                        Zr(E, we, Ie[we])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(Ie)) : Er(Object(Ie)).forEach(function(we) {
                        Object.defineProperty(E, we, Object.getOwnPropertyDescriptor(Ie, we))
                    })
                }
                return E
            }

            function Zr(E, ke, Ie) {
                return ke in E ? Object.defineProperty(E, ke, {
                    value: Ie,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[ke] = Ie, E
            }

            function Dr(E, ke) {
                if (E == null) return {};
                var Ie = nn(E, ke),
                    we, vt;
                if (Object.getOwnPropertySymbols) {
                    var Bt = Object.getOwnPropertySymbols(E);
                    for (vt = 0; vt < Bt.length; vt++) we = Bt[vt], !(ke.indexOf(we) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, we) || (Ie[we] = E[we]))
                }
                return Ie
            }

            function nn(E, ke) {
                if (E == null) return {};
                var Ie = {},
                    we = Object.keys(E),
                    vt, Bt;
                for (Bt = 0; Bt < we.length; Bt++) vt = we[Bt], !(ke.indexOf(vt) >= 0) && (Ie[vt] = E[vt]);
                return Ie
            }
            var an = "typeform-ty-screen-ref",
                Vr = (E, ke) => {
                    var Ie = E.indexOf("?") > 0 ? "&" : "?";
                    return "".concat(E).concat(Ie, "utm_source=").concat(ke, "&utm_content=typeform_social")
                },
                Gr = (E, ke, Ie) => {
                    if (!(0, Mr.F)()) return "";
                    var we = "".concat(window.location.origin).concat(window.location.pathname);
                    return E && (we = "".concat(we, "?").concat(an, "=").concat(E)), ke && (we = Vr(we, Ie)), we
                },
                $r = E => {
                    var {
                        providers: ke,
                        thankYouScreenRef: Ie,
                        appendUtmSourceParam: we
                    } = E;
                    return ke.map(vt => {
                        var {
                            link: Bt,
                            utmSource: Jt
                        } = vt, jr = Dr(vt, br), kr = "".concat(Gr(Ie, we, Jt)), Ut = encodeURIComponent(kr);
                        return _r({
                            link: "".concat(Bt).concat(Ut)
                        }, jr)
                    })
                },
                Br = E => {
                    var {
                        providers: ke,
                        thankYouScreenRef: Ie,
                        appendUtmSourceParam: we,
                        layoutType: vt,
                        onClick: Bt
                    } = E, Jt = $r({
                        providers: ke,
                        thankYouScreenRef: Ie,
                        appendUtmSourceParam: we
                    });
                    return R.createElement(sr.Z, {
                        layoutType: vt,
                        onClick: Bt,
                        providers: Jt
                    })
                };
            Br.propTypes = {
                appendUtmSourceParam: Mt().bool,
                layoutType: Mt().string,
                onClick: Mt().func,
                position: Mt().oneOf(["center", "start"]),
                providers: Mt().arrayOf(Mt().shape({
                    icon: Mt().node,
                    link: Mt().string,
                    name: Mt().string
                })),
                thankYouScreenRef: Mt().string
            }, Br.defaultProps = {
                providers: []
            };
            const Qr = Br;

            function $t() {
                return $t = Object.assign ? Object.assign.bind() : function(E) {
                    for (var ke = 1; ke < arguments.length; ke++) {
                        var Ie = arguments[ke];
                        for (var we in Ie) Object.prototype.hasOwnProperty.call(Ie, we) && (E[we] = Ie[we])
                    }
                    return E
                }, $t.apply(this, arguments)
            }
            var te = {
                    button: W.Bb,
                    background: W.Bb,
                    primary: W.Bb,
                    secondary: W.Bb,
                    buttonContent: W.Bb
                },
                Yr = (E, ke) => {
                    E ? (0, w.fD)(E, ke) : window.location.reload()
                },
                Ur = E => {
                    var ke, {
                            brandingUrl: Ie,
                            brandLogo: we,
                            hasUtmSource: vt = !1,
                            isFocusable: Bt,
                            isPulseSurveyVariant: Jt,
                            isRedirectEnabled: jr = !0,
                            isWinningOutcome: kr = !1,
                            screenDetails: Ut,
                            showBranding: sn,
                            showScreen: C,
                            t: B = Ft => Ft,
                            theme: se,
                            trackBrandingCtaClick: de,
                            trackButtonClick: pe,
                            trackSocialIconClick: Ve,
                            blockHeightChanging: Ye,
                            formId: rt
                        } = E,
                        Ge = (0, R.useRef)(null),
                        pt = (0, R.useRef)(null),
                        Yt = (0, R.useRef)(null),
                        ar = (0, R.useRef)(),
                        Cr = (0, wt.T)(),
                        [cn, yn] = (0, R.useState)(!Cr),
                        {
                            colors: nt = te
                        } = se,
                        Kr = (0, R.useCallback)(() => {
                            de(Ut.ref)
                        }, [de, Ut]);
                    if ((0, R.useLayoutEffect)(() => {
                            if (Ge.current && Bt && C) {
                                var Ft = setTimeout(() => {
                                    var Je;
                                    (Je = Ge.current) === null || Je === void 0 || Je.focus()
                                }, Z.Ok);
                                return () => clearTimeout(Ft)
                            }
                        }, [Bt, C]), (0, R.useEffect)(() => {
                            Cr && yn(!1)
                        }, [Cr]), (0, R.useEffect)(() => {
                            if (C) {
                                var Ft, Je, gr = ((pt == null || (Ft = pt.current) === null || Ft === void 0 ? void 0 : Ft.scrollHeight) || 0) + ((Yt == null || (Je = Yt.current) === null || Je === void 0 ? void 0 : Je.clientHeight) || 0);
                                Ye(gr)
                            }
                        }, [Ge.current, C, pt, Yt]), !Ut || !Object.keys(Ut).length) return null;
                    var {
                        layout: zr,
                        shareIcons: Ln,
                        showButton: bn
                    } = Ut, {
                        description: xt,
                        title: jt,
                        buttonLabel: Sn = ""
                    } = Ut, yt = ((ke = Ut.layout) === null || ke === void 0 ? void 0 : ke.attachment) || Ut.attachment, Xn = (zr == null ? void 0 : zr.type) || (0, S.W)(yt), Pn = () => {
                        !Cr && (yt == null ? void 0 : yt.type) === Pt.k.video && yn(!cn)
                    }, wn = Ft => {
                        !C || ((0, tt.$o)(Ft.nativeEvent) && Pn(), bn && Ft.key === Tt.Z.ENTER && (Ft.stopPropagation(), Sr(Ft)))
                    }, Sr = Ft => {
                        if (!!jr) {
                            var {
                                ref: Je,
                                redirectUrl: gr,
                                buttonMode: Ct
                            } = Ut, {
                                buttonLabel: qn
                            } = Ut, Tn = (0, ge.G)(Ft);
                            ar.current || pe(Je, Ct, qn, Tn), ar.current = setTimeout(() => {
                                var In = (0, ht.Z)() && !!window.location.search.match(/typeform-embed-handle-ending-button-click=true/i);
                                In ? A.UQ(rt) : Yr(gr || "", rt)
                            }, ue.sZ)
                        }
                    }, Fr = Ft => {
                        var Je = Ft.toLowerCase();
                        Ve(Je)
                    };
                    return R.createElement(Z.ZP, {
                        isVisible: C,
                        duration: ue.OI
                    }, R.createElement(Et.Q, {
                        "data-qa": "thank-you-screen-wrapper",
                        isVisible: C,
                        ref: Ge,
                        onKeyDown: wn,
                        tabIndex: -1
                    }, R.createElement(Y.Z, $t({
                        attachment: yt,
                        brandingMotto: (0, je.Z)(B("label.branding.motto")),
                        brandingText: (0, je.Z)(B("label.branding.create")),
                        brandingUrl: Ie
                    }, Jt ? null : {
                        brandLogo: we
                    }, {
                        buttonColor: nt.button,
                        buttonContent: (0, je.Z)(B(Sn)),
                        buttonContentColor: nt.buttonContent,
                        buttonDataQa: "thank-you-button",
                        buttonEnabled: !!bn,
                        contentRef: pt,
                        contextBackgroundColor: nt.background,
                        dataQa: "thank-you-screen".concat(C ? "-visible" : "", " deep-purple-thank-you-screen").concat(C ? "-visible" : ""),
                        hasAttachmentFixedHeight: (0, It.F)(),
                        helperColor: nt.primary,
                        helperText: (0, je.Z)(B("label.buttonHint.default")),
                        isBrandingEnabled: sn,
                        isVideoPlaying: cn,
                        key: Ut.ref,
                        layoutPlacement: zr == null ? void 0 : zr.placement,
                        layoutType: Xn,
                        onBrandingBtnClick: Kr,
                        onButtonClick: Sr,
                        onVideoClick: Pn,
                        pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                        secondaryColor: nt == null ? void 0 : nt.secondary,
                        showScreen: C,
                        stickyFooterRef: Yt
                    }), R.createElement(R.Fragment, null, jt && R.createElement(O.ZP, {
                        color: nt.primary,
                        htmlTag: "h1",
                        type: a.jA.screenTitle
                    }, Jt ? (0, je.Z)(`*We appreciate your feedback!*
 We'll use it to make Typeform better.`) : jt), xt && R.createElement(O.ZP, {
                        color: nt.primary,
                        htmlTag: "p",
                        type: a.jA.screenDescription
                    }, xt)), Ln && R.createElement(Qr, {
                        appendUtmSourceParam: vt,
                        layoutType: Xn,
                        onClick: Fr,
                        providers: ie,
                        thankYouScreenRef: kr ? Ut.ref : null
                    }))))
                };
            const on = Ur;

            function hn(E, ke) {
                var Ie = Object.keys(E);
                if (Object.getOwnPropertySymbols) {
                    var we = Object.getOwnPropertySymbols(E);
                    ke && (we = we.filter(function(vt) {
                        return Object.getOwnPropertyDescriptor(E, vt).enumerable
                    })), Ie.push.apply(Ie, we)
                }
                return Ie
            }

            function cr(E) {
                for (var ke = 1; ke < arguments.length; ke++) {
                    var Ie = arguments[ke] != null ? arguments[ke] : {};
                    ke % 2 ? hn(Object(Ie), !0).forEach(function(we) {
                        Hr(E, we, Ie[we])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(Ie)) : hn(Object(Ie)).forEach(function(we) {
                        Object.defineProperty(E, we, Object.getOwnPropertyDescriptor(Ie, we))
                    })
                }
                return E
            }

            function Hr(E, ke, Ie) {
                return ke in E ? Object.defineProperty(E, ke, {
                    value: Ie,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[ke] = Ie, E
            }
            var j = "typeform-thankyou",
                Ae = "typeform-thankyoubutton",
                Qe = "typeform-endscreen",
                Ot = "typeform-endscreenbutton",
                le = "default_link",
                Dt = "custom-endscreenbutton",
                kt = "typeform-endscreenbutton",
                qt = "branded-ty-button",
                Wt = {
                    RELOAD: "reload",
                    REDIRECT: "redirect",
                    REDIRECT_DEFAULT: "default_redirect"
                },
                Or = (E, ke) => {
                    var Ie = (0, ze.pY)(E),
                        we = Jr(E, Ie ? j : Qe),
                        vt = (0, ze.un)(E) || {},
                        {
                            redirectUrl: Bt,
                            ref: Jt,
                            buttonLabel: jr = ke.t(qt),
                            buttonMode: kr
                        } = vt,
                        Ut = () => {
                            switch (kr) {
                                case Wt.RELOAD:
                                    return null;
                                case Wt.REDIRECT:
                                    return Bt;
                                case Wt.REDIRECT_DEFAULT:
                                default:
                                    return Jr(E, Jt === ze.f3 ? Ae : Ot)
                            }
                        },
                        sn = (0, We.qC)(E) && !(kr === Wt.REDIRECT_DEFAULT && jr === ke.t(qt));
                    return {
                        isDefaultThankyouScreen: Ie,
                        isRedirectEnabled: !(0, We.I6)(E),
                        isWinningOutcome: ce(E),
                        screenDetails: cr(cr({}, vt), {}, {
                            buttonLabel: jr,
                            redirectUrl: Ut()
                        }),
                        showScreen: (0, Me.Us)(E),
                        theme: (0, I.gh)(E),
                        isFocusable: (0, Me.S1)(E),
                        isPulseSurveyVariant: (0, Pe.lA)(E),
                        brandingUrl: we,
                        hasUtmSource: F(E),
                        showBranding: sn,
                        brandLogo: (0, I.uI)(E),
                        formId: (0, We.cY)(E)
                    }
                },
                xr = E => {
                    var ke = (we, vt, Bt, Jt) => {
                            if (we === ze.f3) return (0, Be.JD)(Ae);
                            switch (vt) {
                                case Wt.RELOAD:
                                    return (0, Be.rm)(le, Jt);
                                case Wt.REDIRECT:
                                    return (0, Be.rm)(Dt, Jt, Bt);
                                case Wt.REDIRECT_DEFAULT:
                                    return (0, Be.JD)(kt, Jt);
                                default:
                            }
                        },
                        Ie = we => {
                            var vt = we === ze.f3 ? j : Qe;
                            return (0, Be.JD)(vt)
                        };
                    return cr({}, (0, b.DE)({
                        trackBrandingCtaClick: we => Ie(we),
                        trackButtonClick: (we, vt, Bt, Jt) => ke(we, vt, Bt, Jt),
                        trackSocialIconClick: Be.ow,
                        blockHeightChanging: he.Gc
                    }, E))
                },
                Jr = (E, ke) => (0, We.I6)(E) ? null : (0, K.il)(E)(w.OI, ke);
            const ln = (0, Oe.Z)((0, i.$j)(Or, xr)((0, Oe.Z)((0, q.Ng)(on))))
        },
        38295: (Zt, Ze, c) => {
            c.r(Ze), c.d(Ze, {
                default: () => F
            });
            var i = c(71383),
                b = c(10995),
                q = c.n(b),
                Pe = c(97236),
                Be = c(68656),
                he = c(8556),
                Oe = c(11157),
                ze = c(41004),
                Me = c(80951),
                We;

            function I(K, w) {
                return w || (w = K.slice(0)), Object.freeze(Object.defineProperties(K, {
                    raw: {
                        value: Object.freeze(w)
                    }
                }))
            }
            var ce = Pe.ZP.div.withConfig({
                displayName: "offline-mode-badge__Root",
                componentId: "sc-ti9iri-0"
            })(We || (We = I([`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: `, `;
  color: `, `;
  border-radius: 3px;
  height: 32px;
  width: 32px;
  right: 8px;
  top: 8px;
`])), K => K.backgroundColor, K => K.contentColor);

            function F(K) {
                var {
                    theme: w
                } = K, [R, Y] = (0, i.useState)(window.navigator.onLine), [O, Z] = (0, i.useState)((0, Me.vm)().length);
                return (0, i.useEffect)(() => {
                    var W = () => {
                        Y(window.navigator.onLine)
                    };
                    return window.addEventListener("online", W), window.addEventListener("offline", W), () => {
                        window.removeEventListener("online", W), window.removeEventListener("offline", W)
                    }
                }, []), (0, i.useEffect)(() => {
                    var W = setInterval(() => {
                        Z((0, Me.vm)().length)
                    }, 1e3);
                    return () => {
                        clearInterval(W)
                    }
                }, []), window.navigator.serviceWorker.controller ? O === 0 ? i.createElement(ce, {
                    backgroundColor: w.colors.button,
                    contentColor: (0, Be.$p)(w.colors.button)
                }, i.createElement(Oe.Z, {
                    svg: he.Z,
                    color: (0, Be.$p)(w.colors.button)
                })) : R && O > 0 ? i.createElement(ce, {
                    backgroundColor: w.colors.button,
                    contentColor: (0, Be.$p)(w.colors.button)
                }, i.createElement(ze.Z, {
                    color: (0, Be.$p)(w.colors.button)
                })) : i.createElement(ce, {
                    backgroundColor: w.colors.button,
                    contentColor: (0, Be.$p)(w.colors.button)
                }, O) : null
            }
            F.propTypes = {
                theme: q().object
            }
        },
        65199: (Zt, Ze, c) => {
            c.d(Ze, {
                b: () => i
            });
            var i = "sticky_footer"
        },
        10619: (Zt, Ze, c) => {
            c.d(Ze, {
                Z: () => b
            });
            var i = {
                approve_with_id: "label.paymentError.unauthorized",
                not_permitted: "label.paymentError.unauthorized",
                card_declined: "label.paymentError.declinedCard",
                call_issuer: "label.paymentError.declinedCard",
                do_not_honor: "label.paymentError.declinedCard",
                do_not_try_again: "label.paymentError.declinedCard",
                generic_decline: "label.paymentError.declinedCard",
                lost_card: "label.paymentError.declinedCard",
                merchant_blacklist: "label.paymentError.declinedCard",
                no_action_taken: "label.paymentError.declinedCard",
                revocation_of_all_authorizations: "label.paymentError.declinedCard",
                revocation_of_authorization: "label.paymentError.declinedCard",
                security_violation: "label.paymentError.declinedCard",
                service_not_allowed: "label.paymentError.declinedCard",
                stolen_card: "label.paymentError.declinedCard",
                stop_payment_order: "label.paymentError.declinedCard",
                transaction_not_allowed: "label.paymentError.declinedCard",
                fraudulent: "label.paymentError.declinedCard",
                pickup_card: "label.paymentError.declinedCard",
                restricted_card: "label.paymentError.declinedCard",
                try_again_later: "label.paymentError.declinedCard",
                card_velocity_exceeded: "label.paymentError.exceededBalance",
                withdrawal_count_limit_exceeded: "label.paymentError.exceededBalance",
                currency_not_supported: "label.paymentError.unsupportedCurrency",
                duplicate_transaction: "label.paymentError.duplicateTransaction",
                expired_card: "label.paymentError.expiredCard",
                incorrect_number: "label.paymentError.invalidCardNumber",
                invalid_number: "label.paymentError.invalidCardNumber",
                incorrect_cvc: "label.paymentError.invalidCvc",
                invalid_cvc: "label.paymentError.invalidCvc",
                incorrect_zip: "label.paymentError.invalidZip",
                invalid_expiry_year: "label.paymentError.invalidExpiryYear",
                invalid_expiry_year_past: "label.paymentError.pastExpiryYear",
                invalid_expiry_month_past: "label.paymentError.pastExpiryMonth",
                insufficient_funds: "label.paymentError.insufficientFunds",
                invalid_account: "label.paymentError.invalidAccount",
                new_account_information_available: "label.paymentError.invalidAccount",
                issuer_not_available: "label.paymentError.unavailableIssuer",
                processing_error: "label.paymentError.cardProcessingError",
                reenter_transaction: "label.paymentError.issuerProcessingError",
                testmode_decline: "label.paymentError.declinedTestMode",
                card_not_supported: "label.paymentError.unsupportedCard",
                live_mode_test_card: "label.paymentError.stripeNotConnected",
                test_mode_live_card: "label.paymentError.stripeNotConnected",
                testmode_charges_only: "label.paymentError.stripeNotConnected",
                invalid_amount: "label.paymentError.invalidAmount",
                incomplete_number: "label.paymentError.cardNumberIncomplete",
                incomplete_cvc: "label.paymentError.cardCvcIncomplete",
                incomplete_expiry: "label.paymentError.cardExpiryIncomplete",
                api_connection_error: "stripe_connection_error",
                payment_method_unactivated: "label.paymentError.cardProcessingError",
                payment_method_unexpected_state: "label.paymentError.cardProcessingError",
                payment_intent_authentication_failure: "label.paymentError.authenticationFailure",
                payment_intent_incompatible_payment_method: "label.paymentError.cardProcessingError",
                payment_intent_invalid_parameter: "label.paymentError.cardProcessingError",
                payment_intent_payment_attempt_failed: "label.paymentError.cardProcessingError",
                payment_intent_unexpected_state: "label.paymentError.cardProcessingError"
            };
            const b = i
        },
        56187: (Zt, Ze, c) => {
            c.d(Ze, {
                AJ: () => We,
                QZ: () => ze,
                SH: () => Oe,
                ZP: () => I,
                jK: () => Me
            });
            var i = c(59748);

            function b(ce, F) {
                var K = Object.keys(ce);
                if (Object.getOwnPropertySymbols) {
                    var w = Object.getOwnPropertySymbols(ce);
                    F && (w = w.filter(function(R) {
                        return Object.getOwnPropertyDescriptor(ce, R).enumerable
                    })), K.push.apply(K, w)
                }
                return K
            }

            function q(ce) {
                for (var F = 1; F < arguments.length; F++) {
                    var K = arguments[F] != null ? arguments[F] : {};
                    F % 2 ? b(Object(K), !0).forEach(function(w) {
                        Pe(ce, w, K[w])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ce, Object.getOwnPropertyDescriptors(K)) : b(Object(K)).forEach(function(w) {
                        Object.defineProperty(ce, w, Object.getOwnPropertyDescriptor(K, w))
                    })
                }
                return ce
            }

            function Pe(ce, F, K) {
                return F in ce ? Object.defineProperty(ce, F, {
                    value: K,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : ce[F] = K, ce
            }
            var Be = {
                    parentFormId: "",
                    showAfterSubmission: !1,
                    isActive: !1,
                    submit: {}
                },
                he = (0, i.oM)({
                    name: "pulseSurvey",
                    initialState: Be,
                    reducers: {
                        setShowAfterSubmission: (ce, F) => {
                            ce.showAfterSubmission = F.payload
                        },
                        activate: ce => {
                            ce.isActive = !0
                        },
                        deactivate: ce => {
                            ce.isActive = !1
                        },
                        setSubmitProperties: (ce, F) => {
                            ce.submit = q({}, F.payload)
                        }
                    }
                }),
                {
                    setShowAfterSubmission: Oe,
                    activate: ze,
                    deactivate: Me,
                    setSubmitProperties: We
                } = he.actions;
            const I = he.reducer
        },
        26633: (Zt, Ze, c) => {
            c.d(Ze, {
                Z: () => b
            });
            var i = c(32592);
            const b = i.Z
        },
        21176: (Zt, Ze, c) => {
            c.d(Ze, {
                QW: () => Be,
                ZP: () => he,
                oj: () => Pe
            });
            var i = c(59748),
                b = {
                    showBrandHeader: !0
                },
                q = (0, i.oM)({
                    name: "layout",
                    initialState: b,
                    reducers: {
                        showBrandHeader: Oe => {
                            Oe.showBrandHeader = !0
                        },
                        hideBrandHeader: Oe => {
                            Oe.showBrandHeader = !1
                        }
                    }
                }),
                {
                    showBrandHeader: Pe,
                    hideBrandHeader: Be
                } = q.actions;
            const he = q.reducer
        },
        21874: (Zt, Ze, c) => {
            c.d(Ze, {
                E3: () => b,
                XN: () => Pe,
                ZP: () => Be
            });
            var i = c(59748),
                b = {
                    isActive: !1
                },
                q = (0, i.oM)({
                    name: "portalState",
                    initialState: b,
                    reducers: {
                        setIsPortalActive: (he, Oe) => {
                            he.isActive = Oe.payload
                        }
                    }
                }),
                {
                    setIsPortalActive: Pe
                } = q.actions;
            const Be = q.reducer
        },
        5951: (Zt, Ze, c) => {
            c.d(Ze, {
                lp: () => Ur,
                IJ: () => an,
                vb: () => sr,
                jq: () => Vr,
                Of: () => on
            });
            var i = c(92673),
                b = c(98153),
                q = c(56187),
                Pe = c(9970),
                Be = c(4567),
                he = c(86040),
                Oe = () => ({
                    type: he.Ov,
                    payload: {}
                }),
                ze = () => ({
                    type: he.Nb,
                    payload: {}
                }),
                Me = c(37223);

            function We(j) {
                return {
                    type: he.ab,
                    payload: j
                }
            }

            function I(j) {
                return {
                    type: he.KH,
                    payload: j
                }
            }
            var ce = c(75273),
                F = c(86520),
                K = c(29253),
                w = c(10619),
                R = c(81006),
                Y = c(3547),
                O = c(44893),
                Z = c(11255),
                W = c(84028),
                S = c(83562),
                a = c(85800),
                Pt = c(45731),
                wt = c(44376),
                Tt = c(77923),
                ue = c(34296),
                $e = c(54325),
                dt = 1e3,
                gt = 1.8,
                nr = 6,
                ie = "VALIDATION_ERROR",
                A = "FORM_CHANGED",
                je = "RULE_MATCHED",
                ge = "FILE_NOT_UPLOADED",
                tt = "stripe",
                ht = "PAYMENT_ERROR",
                It = [5, 10, 15, 30],
                Et = j => j * dt,
                zt = j => Math.floor(Math.pow(gt, j)),
                Mt = j => {
                    var Ae = It.length,
                        Qe = j > Ae ? It[Ae - 1] : It[j - R.YW];
                    return j ? Qe : 1
                },
                sr = j => {
                    var {
                        code: Ae,
                        details: Qe
                    } = j;
                    return Ae === ie && Qe && Qe.length && Qe[0].code === je
                },
                Mr = j => {
                    var {
                        code: Ae,
                        details: Qe
                    } = j;
                    return Ae === ie && (Qe == null ? void 0 : Qe.length) && Qe[0].code === ge
                },
                br = j => sr(j) ? "label.error.ruleMatched" : j.code === A ? "label.error.formChanged" : "label.error.generic",
                Er = j => j.decline_code || j.code || j.type,
                _r = j => {
                    var Ae = j && j.code;
                    return Ae === ht && j.details && j.details.length && (Ae = j.details[0].code), Mr(j) && (Ae = j.details[0].code), Ae
                },
                Zr = j => j && j.description,
                Dr = j => j && j.details,
                nn = (j, Ae) => w.Z[Ae] || br(j),
                an = j => j.hasOwnProperty("token") ? j : {
                    response_id: j.submission.response_id,
                    token: j.signature,
                    landed_at: j.submission.landed_at
                };

            function* Vr() {
                for (var j, Ae = 0, Qe = yield(0, i.Ys)(Y.cY), Ot = yield(0, i.Ys)(Tt.MQ), le = yield(0, i.Ys)(b.jO); !j;) try {
                    j = yield(0, i.RE)(K.Bu, Qe, Ot);
                    var Dt = an(j);
                    if (le) return yield(0, i.gz)((0, q.AJ)({
                        landingId: Dt.token,
                        landingAt: Dt.landed_at,
                        responseId: Dt.response_id
                    }));
                    yield(0, i.gz)((0, Be.Hm)(Dt.token, Dt.landed_at, Dt.response_id))
                } catch (Wt) {
                    if (sr(Wt)) {
                        var kt = yield(0, i.Ys)(O.G8), qt = kt ? ze : Oe;
                        yield(0, i.gz)(qt()), j = !0;
                        return
                    }
                    le ? yield(0, i.gz)((0, q.AJ)({})): yield(0, i.gz)((0, Be.NQ)(Wt)), yield(0, i.gw)(Et(zt(Ae % nr))), Ae++
                }
            }

            function* Gr() {
                for (; yield(0, i.Ys)(Z.SO);) yield(0, i.gw)(dt), yield(0, i.gz)((0, Be.U9)())
            }

            function* $r(j, Ae) {
                yield(0, i.gw)(dt / 2), yield(0, i.gz)((0, Me.bq)(j, Ae)), yield* Gr(), yield* on()
            }

            function* Br(j) {
                var Ae, Qe = yield(0, i.Ys)(Z.fb), Ot = yield(0, i.Ys)(Y.cY), le = yield(0, i.Ys)(O.uc), Dt = yield(0, i.Ys)(Y.Bc), kt = yield(0, i.Ys)(wt.BZ), qt = (Ae = yield(0, i.Ys)(W.un)) === null || Ae === void 0 ? void 0 : Ae.ref, Wt = yield(0, i.Ys)(b.jO), Or, xr;
                return Wt ? (Or = yield(0, i.Ys)(b._e), xr = yield(0, i.Ys)(b.KP)) : (Or = yield(0, i.Ys)(Z.d_), xr = yield(0, i.Ys)(Z.lI)), yield(0, i.RE)(K.iX, {
                    formId: Ot,
                    landingId: Or,
                    landingAt: xr,
                    values: Qe,
                    payment: j,
                    outcome: le,
                    formPublicKey: Dt,
                    featureFlags: kt,
                    thankYouScreenRef: qt
                })
            }

            function* Qr() {
                yield(0, i.gz)(We(null)), yield(0, i.gz)(I(null))
            }

            function* $t(j, Ae) {
                var Qe = j.details;
                yield(0, i.$6)(Qe.map(Ot => (0, i.gz)((0, F.d1)(Ot.field)))), yield(0, i.gz)((0, ce.dM)()), yield(0, i.gz)((0, ce.Qh)()), yield(0, i.gz)((0, Me.Rm)(null, Ae, null, null))
            }

            function* te(j, Ae) {
                var Qe = _r(j);
                if (!Qe) return yield(0, i.RE)($r, Ae, "connection_error");
                if (Qe === ge) {
                    yield(0, i.RE)($t, j, Qe);
                    return
                }
                var Ot = nn(j, Qe),
                    le = Zr(j),
                    Dt = Dr(j);
                yield(0, i.RE)(Qr), yield(0, i.gz)((0, Me.Rm)(Ot, Qe, le, Dt)), sr(j) && (yield(0, i.gz)(ze()))
            }

            function* Yr(j) {
                var Ae = Er(j);
                return yield(0, i.RE)(Qr), yield(0, i.gz)((0, Me.Rm)(w.Z[Ae] || "label.error.generic", Ae))
            }

            function* Ur() {
                var j = yield(0, i.Ys)(W.un), Ae = yield(0, i.Ys)(b.cp), Qe = yield(0, i.Ys)(b.jO), Ot;
                if (j != null && j.autoRedirect) {
                    if (!j.redirectUrl) {
                        var le = yield(0, i.Ys)(W.c4);
                        return Ae ? yield(0, i.gz)((0, q.SH)(!1)): (Qe && (yield(0, i.gz)((0, q.jK)()), yield(0, i.gz)({
                            type: Pe.MX
                        })), yield(0, i.gz)((0, ce.Nc)(le)))
                    }
                    Ot = j.redirectUrl
                }
                var Dt = yield(0, i.Ys)(Y.Vt), kt = Ot || Dt;
                if (kt) yield(0, i.gw)(R.sZ), (0, $e.FF)(kt);
                else {
                    if (Ae) return yield(0, i.gz)((0, q.SH)(!1));
                    Qe && (yield(0, i.gz)((0, q.jK)()), yield(0, i.gz)({
                        type: Pe.MX
                    })), yield(0, i.gz)((0, ce.Nc)(j.ref))
                }
            }

            function* on() {
                var j = yield(0, i.Ys)(Z.Y8), Ae = Mt(j);
                if (yield(0, i.Ys)(Pt.Mp)) return yield(0, i.gz)(ze());
                if (!(yield(0, i.Ys)(Z.$p))) return yield* $r(Ae, "no_landing");
                try {
                    var Qe = yield(0, i.Ys)(S.mm);
                    if (Qe) return yield* hn(Qe, Ae);
                    yield(0, i.RE)(Br), yield(0, i.gz)((0, Me.Xf)())
                } catch (Ot) {
                    return yield(0, i.RE)(te, Ot, Ae)
                }
                yield(0, i.RE)(Ur)
            }

            function* hn(j, Ae) {
                try {
                    var Qe = yield(0, i.Ys)(a.$X);
                    if (!Qe) throw new ue.Z("missing_stripe_account", "label.error.generic");
                    var Ot = yield(0, i.Ys)(a.yD), le = yield(0, i.Ys)(a.p9);
                    if (Ot && !le) return yield* cr(Ot, Qe, Ae);
                    if (le) return yield* Hr(le, Ot, Qe, Ae);
                    var Dt = yield(0, i.Ys)(a.UL), kt = yield(0, i.RE)(Dt.createPaymentMethod, j);
                    return kt.error ? yield(0, i.RE)(Yr, kt.error): (Ot = kt.paymentMethod && kt.paymentMethod.id, yield(0, i.gz)(We(Ot)), yield* cr(Ot, Qe, Ae))
                } catch (qt) {
                    return yield(0, i.RE)(te, qt, Ae)
                }
            }

            function* cr(j, Ae, Qe) {
                try {
                    var Ot = yield(0, i.RE)(Br, {
                        provider: tt,
                        [tt]: {
                            payment_method: j,
                            account_id: Ae
                        }
                    });
                    if (Ot.provider === tt) {
                        var le = yield(0, i.Ys)(a.UL), Dt = yield(0, i.RE)(le.handleCardAction, Ot[tt].client_secret);
                        if (Dt.error) return yield(0, i.RE)(Yr, Dt.error);
                        var kt = Dt.paymentIntent.id;
                        return yield(0, i.gz)(I(kt)), yield* Hr(kt, j, Ae, Qe)
                    }
                    yield(0, i.gz)((0, Me.Xf)())
                } catch (qt) {
                    return yield(0, i.RE)(te, qt, Qe)
                }
                yield(0, i.RE)(Ur)
            }

            function* Hr(j, Ae, Qe, Ot) {
                try {
                    yield(0, i.RE)(Br, {
                        provider: tt,
                        [tt]: {
                            payment_method: Ae,
                            account_id: Qe
                        },
                        ref: j
                    }), yield(0, i.gz)((0, Me.Xf)())
                } catch (le) {
                    return yield(0, i.RE)(te, le, Ot)
                }
                yield(0, i.RE)(Ur)
            }
        },
        99612: (Zt, Ze, c) => {
            c.d(Ze, {
                ZP: () => ze
            });
            var i = c(92673),
                b = c(98153),
                q = c(86040),
                Pe = c(44893),
                Be = c(11255),
                he = c(3547),
                Oe = c(14246);

            function* ze() {
                yield(0, i.rM)(Me), yield(0, i.rM)(We), yield(0, i.rM)(ce), yield(0, i.rM)(K)
            }

            function* Me() {
                yield(0, i.qn)(q.Ym);
                var w = yield(0, i.Ys)(he.cY);
                Oe.Ru(w)
            }

            function* We() {
                yield(0, i.qn)(q.Zg);
                var w = yield(0, i.Ys)(b.jO);
                if (!w) {
                    var R = yield(0, i.Ys)(Be.Ch), Y = yield(0, i.Ys)(he.cY);
                    Oe.Ps({
                        response_id: R,
                        responseId: R,
                        formId: Y
                    })
                }
            }

            function* I() {
                var w = yield(0, i.Ys)(b.jO);
                if (!w) {
                    var R = yield(0, i.Ys)(Pe.tK), Y = yield(0, i.Ys)(he.cY);
                    Oe.lK({
                        ref: R,
                        formId: Y
                    })
                }
            }

            function* ce() {
                yield(0, i.ib)([q.yL], I)
            }

            function* F(w) {
                var {
                    payload: R
                } = w, Y = yield(0, i.Ys)(b.jO);
                if (!Y) {
                    var O = yield(0, i.Ys)(Pe.tK), Z = yield(0, i.Ys)(he.cY);
                    Oe.wB({
                        height: R,
                        ref: O,
                        formId: Z
                    })
                }
            }

            function* K() {
                yield(0, i.ib)([q.CV], F)
            }
        },
        80951: (Zt, Ze, c) => {
            c.d(Ze, {
                ZP: () => a,
                vm: () => Y
            });
            var i = c(92673),
                b = c(37223),
                q = c(29253),
                Pe = c(86040),
                Be = c(3547),
                he = c(44893),
                Oe = c(11255),
                ze = c(77923),
                Me = () => {
                    var ue = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    return !ue || !ue.effectiveType ? null : ue.effectiveType
                },
                We = () => window.navigator.onLine,
                I = c(5951),
                ce = c(99612),
                F = c(2639);

            function K(ue, $e) {
                var dt = Object.keys(ue);
                if (Object.getOwnPropertySymbols) {
                    var gt = Object.getOwnPropertySymbols(ue);
                    $e && (gt = gt.filter(function(nr) {
                        return Object.getOwnPropertyDescriptor(ue, nr).enumerable
                    })), dt.push.apply(dt, gt)
                }
                return dt
            }

            function w(ue) {
                for (var $e = 1; $e < arguments.length; $e++) {
                    var dt = arguments[$e] != null ? arguments[$e] : {};
                    $e % 2 ? K(Object(dt), !0).forEach(function(gt) {
                        R(ue, gt, dt[gt])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ue, Object.getOwnPropertyDescriptors(dt)) : K(Object(dt)).forEach(function(gt) {
                        Object.defineProperty(ue, gt, Object.getOwnPropertyDescriptor(dt, gt))
                    })
                }
                return ue
            }

            function R(ue, $e, dt) {
                return $e in ue ? Object.defineProperty(ue, $e, {
                    value: dt,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : ue[$e] = dt, ue
            }
            var Y = () => {
                    var ue = window.localStorage.getItem("submissions") || "[]";
                    return JSON.parse(ue)
                },
                O = ue => {
                    window.localStorage.setItem("submissions", JSON.stringify(ue))
                },
                Z = () => {
                    var ue = Y(),
                        $e = ue.shift();
                    return O(ue), $e
                },
                W = ue => O([ue, ...Y()]),
                S = ue => O([...Y(), ue]);

            function* a() {
                var ue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3;
                yield(0, i.rM)(ce.ZP), yield(0, i.rM)(F.Z), yield(0, i.rM)(Tt, ue), yield(0, i.rM)(Pt)
            }

            function* Pt() {
                for (;;) {
                    yield(0, i.qn)(Pe.Fu);
                    var ue = yield(0, i.Ys)(Oe.fb), $e = yield(0, i.Ys)(Be.cY), dt = yield(0, i.Ys)(he.uc), gt = {
                        formId: $e,
                        landingId: null,
                        landingAt: null,
                        values: ue,
                        outcome: dt
                    };
                    S(gt), yield(0, i.gz)((0, b.Xf)()), yield(0, i.RE)(I.lp)
                }
            }
            var wt = ue => new Promise($e => setTimeout($e, ue));

            function* Tt(ue) {
                for (;;) {
                    if (We()) {
                        var $e = Z();
                        if ($e) try {
                            var dt = yield(0, i.Ys)(ze.MQ), gt = yield(0, i.RE)(q.Bu, $e.formId, dt), nr = (0, I.IJ)(gt);
                            yield(0, i.RE)(q.iX, w(w({}, $e), {}, {
                                landingId: nr.token,
                                landingAt: nr.landed_at
                            }));
                            continue
                        } catch (ie) {
                            W($e)
                        }
                    }
                    yield wt(ue)
                }
            }
        },
        2639: (Zt, Ze, c) => {
            c.d(Ze, {
                Z: () => he
            });
            var i = c(92673),
                b = c(86040),
                q = c(3547),
                Pe = c(88376);

            function* Be() {
                yield(0, i.qn)(b.Zg);
                var Oe = yield(0, i.Ys)(q.cY);
                yield(0, i.RE)(Pe.F_, Oe)
            }

            function* he() {
                yield(0, i.rM)(Be)
            }
        },
        52734: (Zt, Ze, c) => {
            c.d(Ze, {
                O: () => q
            });
            var i = c(44893),
                b = Pe => Pe.intents,
                q = (Pe, Be) => {
                    var he, Oe = b(Pe);
                    if (!(Oe != null && Oe.length)) return null;
                    var ze = (0, i.Fx)(Pe, Be);
                    return ze ? (he = Oe.find(Me => Me.id === ze.id)) === null || he === void 0 ? void 0 : he.intent : null
                }
        },
        85800: (Zt, Ze, c) => {
            c.d(Ze, {
                $X: () => b,
                UL: () => Be,
                p9: () => Pe,
                yD: () => q
            });
            var i = he => he.paymentProviders.stripe,
                b = he => i(he).accountId,
                q = he => i(he).stripePaymentMethodId,
                Pe = he => i(he).stripePaymentIntentId,
                Be = he => i(he).service
        },
        11255: (Zt, Ze, c) => {
            c.d(Ze, {
                $n: () => q,
                $p: () => Pe,
                Ch: () => Be,
                FN: () => I,
                SO: () => We,
                Y8: () => Me,
                d_: () => he,
                fC: () => Oe,
                fb: () => ce,
                lI: () => ze
            });
            var i = c(14132),
                b = c(44893),
                q = F => (0, b.iN)(F).isComplete,
                Pe = F => he(F) !== null,
                Be = F => (0, b.iN)(F).responseId,
                he = F => (0, b.iN)(F).landingId,
                Oe = F => (0, b.iN)(F).navigationType,
                ze = F => (0, b.iN)(F).landingAt,
                Me = F => (0, b.iN)(F).retry.count,
                We = F => (0, b.iN)(F).retry.timeout,
                I = F => (0, b.iN)(F).errorMessage,
                ce = F => ({
                    answers: (0, b.Vl)(F).filter(K => (0, b.JQ)(K) || !(0, b.vQ)(K.type, (0, b.GD)(F, (0, b.F5)(K)))).filter(K => (0, i.Gv)(F, (0, b.F5)(K))).map(K => {
                        var w = (0, b.GD)(F, (0, b.F5)(K));
                        return {
                            block: K,
                            answer: w && (0, b.nO)(K, w)
                        }
                    }),
                    variables: (0, b.Vc)(F),
                    hidden: (0, b.bP)(F),
                    logic: (0, b.qB)(F)
                })
        },
        32570: (Zt, Ze, c) => {
            c.r(Ze), c.d(Ze, {
                default: () => yi
            });
            var i = c(59748),
                b = c(87759),
                q = c(72928),
                Pe = c(8941),
                Be = c(56187),
                he = c(9970),
                Oe = c(47808),
                ze = c.n(Oe),
                Me = c(47153),
                We = c(72449);
            const I = JSON.parse(`{"id":"Z1K27wqb","type":"quiz","title":"Respondent Pulse Survey (!don't delete!)","workspace":{"href":"https://api.typeform.com/workspaces/6ck7ew"},"theme":{"href":"https://api.typeform.com/themes/qHWOQ7"},"settings":{"language":"en","progress_bar":"proportion","meta":{"allow_indexing":false},"hide_navigation":true,"is_public":true,"is_trial":false,"show_progress_bar":false,"show_typeform_branding":true,"are_uploads_public":false,"show_time_to_complete":true,"show_number_of_submissions":false,"show_cookie_consent":false,"show_question_number":false,"pro_subdomain_enabled":false,"capabilities":{"e2e_encryption":{"enabled":false,"modifiable":false}}},"thankyou_screens":[{"id":"DefaultTyScreen","ref":"default_tys","title":"Thanks for completing this typeform\\nNow *create your own* \u2014 it's free, easy, & beautiful","type":"thankyou_screen","properties":{"show_button":true,"share_icons":false,"button_mode":"default_redirect","button_text":"Create a *typeform*"},"attachment":{"type":"image","href":"https://images.typeform.com/images/2dpnUBBkz2VN"}}],"fields":[{"id":"YlGEHyET1K0B","title":"*Thanks for your response!*\\nHow was your experience filling out this form?","ref":"tf-pulse-survey-question-1","properties":{"start_at_one":true,"steps":5,"labels":{"left":"Very unsatisfying","center":"Neutral","right":"Very satisfying"}},"validations":{"required":true},"type":"opinion_scale"},{"id":"fX9fygruvCbA","title":"Could you tell us why you chose {{field:tf-pulse-survey-question-1}}?","ref":"tf-pulse-survey-question-2","properties":{},"validations":{"required":false},"type":"long_text"}],"hidden":["parent_form"],"_links":{"display":"https://tfproductops.typeform.com/to/Z1K27wqb"}}`);
            var ce = ["googleTagManager", "googleAnalytics", "facebookPixel", "proSubdomainEnabled"];

            function F(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function K(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? F(Object(s), !0).forEach(function(d) {
                        w(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : F(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function w(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function R(n, l) {
                if (n == null) return {};
                var s = Y(n, l),
                    d, y;
                if (Object.getOwnPropertySymbols) {
                    var X = Object.getOwnPropertySymbols(n);
                    for (y = 0; y < X.length; y++) d = X[y], !(l.indexOf(d) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, d) || (s[d] = n[d]))
                }
                return s
            }

            function Y(n, l) {
                if (n == null) return {};
                var s = {},
                    d = Object.keys(n),
                    y, X;
                for (X = 0; X < d.length; X++) y = d[X], !(l.indexOf(y) >= 0) && (s[y] = n[y]);
                return s
            }
            var O = () => ze()(I),
                Z = n => {
                    var l = O(),
                        s = n.form.settings,
                        {
                            googleTagManager: d,
                            googleAnalytics: y,
                            facebookPixel: X,
                            proSubdomainEnabled: Ee
                        } = s,
                        at = R(s, ce),
                        H = K(K({}, n), {}, {
                            analytics: {},
                            form: K(K({}, n.form), {}, {
                                settings: K(K({}, at), {}, {
                                    capabilities: {
                                        e2e_encryption: {
                                            enabled: !1,
                                            modifiable: !1
                                        }
                                    },
                                    showProgressBar: !1,
                                    showQuestionNumber: !1,
                                    hideNavigation: !0
                                }),
                                fields: l.fields,
                                logic: [],
                                variables: {},
                                id: l.id,
                                currentRef: null,
                                currentScreenRef: null,
                                hidden: {
                                    parent_form: n.form.id
                                },
                                theme: K(K({}, n.form.theme), {}, {
                                    screens: K(K({}, n.form.theme.screens), {}, {
                                        alignment: Me.aj.CENTER
                                    }),
                                    fields: K(K({}, n.form.theme.fields), {}, {
                                        alignment: Me.aj.CENTER
                                    })
                                })
                            }),
                            answers: {
                                answersList: (0, We.Z)(l.fields)
                            },
                            pipingAnswers: [],
                            submit: K(K({}, n.submit), {}, {
                                isSubmitting: !1,
                                isSuccess: !1,
                                isComplete: !1,
                                errorMessage: null,
                                retry: {
                                    showMessage: !1,
                                    timeout: 1,
                                    count: 0
                                }
                            })
                        });
                    return H
                },
                W = c(23262),
                S = c(86040),
                a = c(64800),
                Pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            function wt(n) {
                for (var l = "", s = 0; s < n; s++) l += Pt.charAt(Math.floor((0, a.Z)() * Pt.length));
                return l
            }

            function Tt(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function ue(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Tt(Object(s), !0).forEach(function(d) {
                        $e(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Tt(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function $e(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function dt() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    {
                        type: l
                    } = arguments.length > 1 ? arguments[1] : void 0;
                switch (l) {
                    case S.Ov:
                        return ue(ue({}, n), {}, {
                            isFormMarkAsClosed: !0
                        });
                    case S.Nb:
                        return ue(ue({}, n), {}, {
                            isFormMarkAsClosed: !0,
                            isCloseScreenVisible: !0
                        });
                    default:
                        return n
                }
            }
            const gt = dt;
            var nr = c(30999),
                ie = c(83562),
                A = c(44893);

            function je(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function ge(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? je(Object(s), !0).forEach(function(d) {
                        tt(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : je(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function tt(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var ht = {
                    answersList: []
                },
                It = (n, l) => {
                    var {
                        payload: {
                            validationErrors: s,
                            blockRef: d,
                            shouldAnswerBeFormatted: y
                        }
                    } = l, X = (0, ie.mR)(n.answersList, d), Ee = n.answersList[X];
                    return ge(ge({}, n), {}, {
                        answersList: (0, nr.Vxg)(X, ge(ge({}, Ee), {}, {
                            validationErrors: s != null ? s : [],
                            isValid: !s || s.length === 0,
                            shouldAnswerBeFormatted: y
                        }), n.answersList)
                    })
                },
                Et = (n, l) => {
                    var {
                        payload: {
                            answer: s
                        }
                    } = l, d = (0, A.tL)(s), y = (0, ie.mR)(n.answersList, d);
                    return ge(ge({}, n), {}, {
                        answersList: (0, nr.Vxg)(y, ge(ge({}, s), {}, {
                            isCommitted: !1,
                            hasBeenInteractedWith: !0
                        }), n.answersList)
                    })
                },
                zt = (n, l) => {
                    var {
                        payload: {
                            ref: s
                        }
                    } = l, d = n.answersList.find(Ee => (0, A.tL)(Ee) === s), y = [...n.answersList], X = y.indexOf(d);
                    return y[X] = ge(ge({}, d), {}, {
                        isCommitted: !0
                    }), ge(ge({}, n), {}, {
                        answersList: y
                    })
                },
                Mt = (n, l) => {
                    var {
                        payload: {
                            ref: s
                        }
                    } = l;
                    return ge(ge({}, n), {}, {
                        answersList: n.answersList.map(d => (0, A.tL)(d) !== s ? d : ge(ge({}, d), {}, {
                            isCommitted: !0
                        }))
                    })
                },
                sr = n => ge(ge({}, n), {}, {
                    answersList: n.answersList.map(l => ge(ge({}, l), {}, {
                        isCommitted: !0
                    }))
                }),
                Mr = (n, l, s) => {
                    var d = (0, We.Z)(l);
                    if (s) return d;
                    var y = n.filter(Ee => !!l.find(at => {
                            var {
                                ref: H
                            } = at;
                            return H === Ee.blockRef
                        })),
                        X = [...y, ...d.filter(Ee => !n.find(at => (0, A.tL)(at) === (0, A.tL)(Ee)))];
                    return X
                };

            function br() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ht,
                    l = arguments.length > 1 ? arguments[1] : void 0;
                switch (l.type) {
                    case S.jD:
                        return It(n, l);
                    case S.qU:
                        return Et(n, l);
                    case S.aR:
                        return zt(n, l);
                    case S.fI:
                        return Mt(n, l);
                    case S.A3:
                        return sr(n, l);
                    default:
                        return n
                }
            }
            var Er = function() {
                var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
                    s = arguments.length > 1 ? arguments[1] : void 0;
                switch (s.type) {
                    case S.Gc:
                        return !0;
                    case S.my:
                        return !1;
                    default:
                        return l
                }
            };
            const _r = Er;

            function Zr() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                    l = arguments.length > 1 ? arguments[1] : void 0;
                switch (l.type) {
                    case S.Y:
                        return !0;
                    case S.Ns:
                        return !1;
                    default:
                        return n
                }
            }

            function Dr(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function nn(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Dr(Object(s), !0).forEach(function(d) {
                        an(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Dr(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function an(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var Vr = {
                    backgroundOpacity: 1,
                    hideHeaders: !1,
                    minimalFooter: !1,
                    mode: null
                },
                Gr = (n, l) => Object.keys(n).every(s => Object.keys(l).includes(s));

            function $r() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return Gr(Vr, n) || (n = nn(nn({}, Vr), n)), n
            }
            const Br = $r;

            function Qr(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function $t(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Qr(Object(s), !0).forEach(function(d) {
                        te(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Qr(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function te(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var Yr = (n, l) => {
                    var {
                        payload: {
                            ref: s
                        }
                    } = l;
                    return $t($t({}, n), {}, {
                        currentRef: s,
                        previousRef: n.currentRef,
                        requireStickyFooter: null,
                        forceSubmitButtonVisible: !1
                    })
                },
                Ur = (n, l) => {
                    var {
                        payload: s
                    } = l;
                    return $t($t({}, n), {}, {
                        isBlockChanging: s
                    })
                },
                on = (n, l) => {
                    var {
                        payload: s
                    } = l;
                    return $t($t({}, n), {}, {
                        forceSubmitButtonVisible: s
                    })
                },
                hn = "block",
                cr = "recenter",
                Hr = "choice";

            function j(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function Ae(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? j(Object(s), !0).forEach(function(d) {
                        Qe(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : j(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Qe(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var Ot = (n, l) => {
                    var {
                        payload: {
                            anchor: s,
                            target: d,
                            fast: y
                        }
                    } = l;
                    return Ae(Ae({}, n), {}, {
                        scrolling: {
                            scrollType: cr,
                            anchor: s,
                            target: d,
                            fast: y
                        }
                    })
                },
                le = (n, l) => {
                    var {
                        payload: {
                            ref: s
                        }
                    } = l;
                    return Ae(Ae({}, n), {}, {
                        scrolling: {
                            ref: s,
                            scrollType: Hr
                        }
                    })
                },
                Dt = (n, l) => {
                    var {
                        payload: {
                            ref: s
                        }
                    } = l;
                    return Ae(Ae({}, n), {}, {
                        currentScreenRef: s
                    })
                },
                kt = n => Ae(Ae({}, n), {}, {
                    currentScreenRef: null
                });

            function qt(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function Wt(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? qt(Object(s), !0).forEach(function(d) {
                        Or(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : qt(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Or(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function xr(n, l) {
                var {
                    payload: {
                        isScrollNearTop: s
                    }
                } = l;
                return Wt(Wt({}, n), {}, {
                    isScrollNearTop: s
                })
            }

            function Jr(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function ln(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Jr(Object(s), !0).forEach(function(d) {
                        E(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Jr(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function E(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function ke(n, l) {
                var {
                    payload: {
                        blockRef: s,
                        show: d = !1
                    }
                } = l;
                return !d && n.requireStickyFooter !== s ? n : ln(ln({}, n), {}, {
                    requireStickyFooter: d ? s : null
                })
            }

            function Ie(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function we(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Ie(Object(s), !0).forEach(function(d) {
                        vt(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Ie(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function vt(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function Bt(n) {
                return we(we({}, n), {}, {
                    scrolling: null
                })
            }

            function Jt() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    l = arguments.length > 1 ? arguments[1] : void 0;
                switch (l.type) {
                    case S.yL:
                        return Yr(n, l);
                    case S.M1:
                        return Ur(n, l);
                    case S.c9:
                        return on(n, l);
                    case S.lS:
                        return Dt(n, l);
                    case S.Ym:
                        return kt(n, l);
                    case S.id:
                        return le(n, l);
                    case S.K9:
                        return Ot(n, l);
                    case S.JZ:
                        return Bt(n, l);
                    case S.vR:
                        return xr(n, l);
                    case S.gu:
                        return ke(n, l);
                    default:
                        return n
                }
            }
            var jr = c(70003);

            function kr(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function Ut(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? kr(Object(s), !0).forEach(function(d) {
                        sn(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : kr(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function sn(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function C() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jr.E,
                    {
                        type: l,
                        payload: s
                    } = arguments.length > 1 ? arguments[1] : void 0;
                switch (l) {
                    case S.OK:
                        return Ut(Ut({}, n), {}, {
                            isInputFocused: s.isInputFocused
                        });
                    default:
                        return n
                }
            }
            const B = C;
            var se = c(21176);

            function de(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function pe(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? de(Object(s), !0).forEach(function(d) {
                        Ve(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : de(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Ve(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var Ye = {
                stripePaymentMethodId: null,
                stripePaymentIntentId: null,
                service: null
            };

            function rt() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ye,
                    {
                        type: l,
                        payload: s
                    } = arguments.length > 1 ? arguments[1] : void 0;
                switch (l) {
                    case S.ab:
                        return pe(pe({}, n), {}, {
                            stripe: pe(pe({}, n.stripe), {}, {
                                stripePaymentMethodId: s
                            })
                        });
                    case S.KH:
                        return pe(pe({}, n), {}, {
                            stripe: pe(pe({}, n.stripe), {}, {
                                stripePaymentIntentId: s
                            })
                        });
                    case S.xN:
                        return pe(pe({}, n), {}, {
                            stripe: pe(pe({}, n.stripe), {}, {
                                service: s
                            })
                        });
                    default:
                        return n
                }
            }
            var Ge = [];

            function pt() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ge,
                    l = arguments.length > 1 ? arguments[1] : void 0;
                switch (l.type) {
                    case S.Zv:
                        return l.payload;
                    default:
                        return n
                }
            }
            var Yt = c(6156);

            function ar() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Yt.E,
                    l = arguments.length > 1 ? arguments[1] : void 0;
                switch (l.type) {
                    case S.pg:
                        return {
                            isReviewModeEnabled: !0
                        };
                    case S.sL:
                        return {
                            isReviewModeEnabled: !1
                        };
                    default:
                        return n
                }
            }
            var Cr = c(81006),
                cn = c(45837);

            function yn(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function nt(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? yn(Object(s), !0).forEach(function(d) {
                        Kr(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : yn(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Kr(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var zr = 2;

            function Ln() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cn.E,
                    {
                        type: l,
                        payload: s
                    } = arguments.length > 1 ? arguments[1] : void 0;
                switch (l) {
                    case S.Fu:
                        return nt(nt({}, n), {}, {
                            isSubmitting: !(s != null && s.isLivePreview),
                            isSuccess: !1,
                            isComplete: !1,
                            errorMessage: null,
                            retry: nt(nt({}, n.retry), {}, {
                                timeout: 0
                            }),
                            navigationType: s == null ? void 0 : s.navigationType
                        });
                    case S.Zg:
                        return nt(nt({}, n), {}, {
                            isSubmitting: !1,
                            isSuccess: !0,
                            isComplete: !0,
                            retry: nt(nt({}, n.retry), {}, {
                                count: 0,
                                showMessage: !1,
                                timeout: 0
                            })
                        });
                    case S.p2:
                        var {
                            showMessage: d,
                            count: y
                        } = n.retry;
                        return nt(nt({}, n), {}, {
                            isSubmitting: !0,
                            isSuccess: !1,
                            isComplete: !1,
                            retry: nt(nt({}, n.retry), {}, {
                                count: y + 1,
                                timeout: s.retry.timeout,
                                showMessage: d || y >= Cr.YW
                            })
                        });
                    case S.GX:
                        var X = n.retry.timeout - 1;
                        return nt(nt({}, n), {}, {
                            retry: nt(nt({}, n.retry), {}, {
                                timeout: X > 0 ? X : 0
                            })
                        });
                    case S.xM:
                        return nt(nt({}, n), {}, {
                            retry: nt(nt({}, n.retry), {}, {
                                count: zr
                            })
                        });
                    case S.O3:
                        return nt(nt({}, n), {}, {
                            responseId: s.responseId,
                            landingId: s.landingId,
                            landingAt: s.landingAt
                        });
                    case S.oo:
                        return n;
                    case S.$4:
                        return nt(nt({}, n), {}, {
                            isSubmitting: !1,
                            isSuccess: !1,
                            isComplete: !1,
                            errorMessage: s.message,
                            retry: nt({}, cn.E.retry)
                        });
                    case S.qU:
                        return nt(nt({}, n), {}, {
                            errorMessage: null
                        });
                    default:
                        return n
                }
            }

            function bn(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function xt(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? bn(Object(s), !0).forEach(function(d) {
                        jt(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : bn(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function jt(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var Sn = {
                legacyAccountId: "",
                accountUid: "",
                cookieAccountUids: null,
                formId: "",
                initialized: !1,
                isFormCreator: !1,
                isFirstConversation: null,
                sessionId: null,
                planName: "",
                blockRefTracking: {
                    answerMethod: null
                }
            };

            function yt(n, l) {
                return !l || n === "voice_text" ? n : n ? n !== l ? "voice_text" : n : l
            }

            function Xn() {
                var n, l, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sn,
                    {
                        type: d,
                        payload: y
                    } = arguments.length > 1 ? arguments[1] : void 0;
                switch (d) {
                    case S.n4:
                        return xt(xt({}, s), {}, {
                            initialized: !0,
                            isFormCreator: (n = y == null || (l = y.cookieAccountUids) === null || l === void 0 ? void 0 : l.includes(s.accountUid)) !== null && n !== void 0 ? n : !1,
                            isFirstConversation: y == null ? void 0 : y.isFirstConversation,
                            sessionId: wt(12)
                        });
                    case S.Ko:
                        return xt(xt({}, s), {}, {
                            visitCurrentCycle: y.visitCurrentCycle
                        });
                    case S.tJ:
                        {
                            var X, {
                                    responseFilled: Ee,
                                    ref: at
                                } = y,
                                H = ((X = s.blockRefTracking) === null || X === void 0 ? void 0 : X[at]) || {};
                            return xt(xt({}, s), {}, {
                                blockRefTracking: xt(xt({}, s.blockRefTracking), {}, {
                                    [at]: xt(xt({}, H), {}, {
                                        responseFilled: Ee
                                    })
                                })
                            })
                        }
                    case S.R0:
                        {
                            var Fe, {
                                    answerMethod: He,
                                    ref: Xe
                                } = y,
                                et = ((Fe = s.blockRefTracking) === null || Fe === void 0 ? void 0 : Fe[Xe]) || {};
                            return xt(xt({}, s), {}, {
                                blockRefTracking: xt(xt({}, s.blockRefTracking), {}, {
                                    [Xe]: xt(xt({}, et), {}, {
                                        answerMethod: yt(et.answerMethod, He)
                                    })
                                })
                            })
                        }
                    default:
                        return s
                }
            }
            const Pn = Xn;

            function wn() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                    l = arguments.length > 1 ? arguments[1] : void 0;
                switch (l.type) {
                    case S.at:
                        return l.payload;
                    default:
                        return n
                }
            }
            var Sr = c(84028),
                Fr = c(14132),
                Ft = c(79324);

            function Je(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function gr(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Je(Object(s), !0).forEach(function(d) {
                        Ct(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Je(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Ct(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var qn = n => !!n;

            function Tn(n, l) {
                var {
                    currentBlockRef: s,
                    paymentProviders: d,
                    resetAnswers: y
                } = l.payload, X = (0, Ft.Z)(l.payload, n.isLivePreview), Ee = gr(gr({}, n), {}, {
                    submit: y ? cn.E : n.submit,
                    form: gr(gr({}, X), {}, {
                        currentRef: n.form.currentRef,
                        currentScreenRef: n.form.currentScreenRef,
                        isScrollNearTop: !0,
                        isLivePreview: n.form.isLivePreview
                    }),
                    paymentProviders: gr(gr({}, n.paymentProviders), d)
                }), at = (0, A.Vl)(Ee), H = (0, A.X2)(n), Fe = Mr(H, at, y);
                if (Ee.answers = {
                        answersList: Fe
                    }, Ee.pipingAnswers = Fe, s != null) {
                    var He = (0, Sr.Fl)(Ee, s) || (0, Sr.Fi)(Ee, s);
                    if (He) Ee.form.currentScreenRef = s;
                    else {
                        Ee.form.currentScreenRef = null;
                        var Xe = (0, Fr.AF)(Ee, s) ? s : (0, Fr.QJ)(Ee);
                        qn(Xe) && (Ee.form.currentRef = Xe)
                    }
                }
                return Ee
            }
            var In = c(45626),
                La = c(21874);

            function or(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function Xr(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? or(Object(s), !0).forEach(function(d) {
                        Gt(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : or(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Gt(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var Nn = (0, Pe.UY)({
                    abTests: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return l
                    },
                    accessScheduling: gt,
                    portal: La.ZP,
                    analytics: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return l
                    },
                    answers: br,
                    autoFocus: _r,
                    cookieConsent: W.ZP,
                    disableNavigation: Zr,
                    disableSubmit: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return l
                    },
                    disableTracking: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return l
                    },
                    embedSettings: Br,
                    featureFlags: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return l
                    },
                    form: Jt,
                    hideSubmitButton: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return l
                    },
                    input: B,
                    intents: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                        return l
                    },
                    isLimitedToParentSize: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return l
                    },
                    isLivePreview: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return l
                    },
                    isOfflineMode: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return l
                    },
                    layout: se.ZP,
                    numberOfSubmissions: In.ZP,
                    paymentProviders: rt,
                    pipingAnswers: pt,
                    reviewMode: ar,
                    submit: Ln,
                    testVariants: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return l
                    },
                    timeToComplete: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                        return l
                    },
                    tracking: Pn,
                    uniqueId: function() {
                        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wt(16);
                        return l
                    },
                    unrecoverableError: wn,
                    pulseSurvey: Be.ZP
                }),
                fa = (n, l) => {
                    switch (l.type) {
                        case S.O2:
                            return Tn(n, l);
                        case he.MX:
                            return Xr(Xr({}, n), {}, {
                                form: Xr(Xr({}, n.form), {}, {
                                    id: n.pulseSurvey.parentFormId
                                })
                            });
                        case he.fb:
                            return Z(n);
                        default:
                            return Nn(n, l)
                    }
                };
            const jo = fa;
            var u = c(92673),
                un = c(98153),
                Rn = c(5951),
                Na = c(61543),
                pa = c.n(Na),
                Mn = c(4237),
                _n = c(68656),
                ea = c(64923),
                ma = c(94476),
                Zn = c(65199),
                ko = c(45731),
                Fo = c(52734),
                Rt = c(77923),
                ft = c(3547),
                En = c(76175),
                Lo = c(16054),
                hr = c(11255),
                ga = c(13836),
                dn = c(88376),
                ha = ["event"];

            function No(n, l) {
                if (n == null) return {};
                var s = ll(n, l),
                    d, y;
                if (Object.getOwnPropertySymbols) {
                    var X = Object.getOwnPropertySymbols(n);
                    for (y = 0; y < X.length; y++) d = X[y], !(l.indexOf(d) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, d) || (s[d] = n[d]))
                }
                return s
            }

            function ll(n, l) {
                if (n == null) return {};
                var s = {},
                    d = Object.keys(n),
                    y, X;
                for (X = 0; X < d.length; X++) y = d[X], !(l.indexOf(y) >= 0) && (s[y] = n[y]);
                return s
            }

            function qr(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function ta(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? qr(Object(s), !0).forEach(function(d) {
                        ya(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : qr(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function ya(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function en(n, l, s, d, y, X, Ee) {
                try {
                    var at = n[X](Ee),
                        H = at.value
                } catch (Fe) {
                    s(Fe);
                    return
                }
                at.done ? l(H) : Promise.resolve(H).then(d, y)
            }

            function Ma(n) {
                return function() {
                    var l = this,
                        s = arguments;
                    return new Promise(function(d, y) {
                        var X = n.apply(l, s);

                        function Ee(H) {
                            en(X, d, y, Ee, at, "next", H)
                        }

                        function at(H) {
                            en(X, d, y, Ee, at, "throw", H)
                        }
                        Ee(void 0)
                    })
                }
            }
            var sl = "renderer",
                _a = {
                    "S3 Datalake": !0
                },
                Za = (n, l, s) => new Promise(d => {
                    pa().sendEvent(n, l, s, d)
                }),
                Va = n => {
                    (0, dn.cm)(n)
                },
                Ya = function() {
                    var n = Ma(function*(l) {
                        yield Promise.all(l.map(s => ({
                            data: s.data || {},
                            options: s.options || {}
                        })).map(s => ({
                            data: ta({}, s.data),
                            options: ta(ta({}, s.options), {}, {
                                context: {
                                    ip: "0.0.0.0"
                                },
                                integrations: s.options.integrations || _a
                            })
                        })).map(s => {
                            var d = s.data,
                                {
                                    event: y
                                } = d,
                                X = No(d, ha);
                            return Za(y, X, s.options)
                        }))
                    });
                    return function(s) {
                        return n.apply(this, arguments)
                    }
                }(),
                Ua = c(10659),
                ra = c(94947);

            function* Vn(n, l) {
                var s = yield(0, u.Ys)(ga.N5), d = Object.keys(s);
                if (!!d.length) {
                    var y = yield(0, u.Ys)(ft.cY), X = yield(0, u.Ys)(Rt.Ac), Ee = yield(0, u.Ys)(Rt.MQ), at = yield(0, u.Ys)(A.Yp), H = yield(0, u.Ys)(A.zv), Fe = yield(0, u.Ys)(A.WA);
                    for (var He of d) {
                        var Xe = s[He],
                            et = {
                                account_id: X.legacyAccountId,
                                account_uid: X.accountUid,
                                attribution_user_id: Mn.Z.getUser(),
                                event: ra.EW,
                                form_uid: y,
                                has_welcome_screen: at,
                                payload: {
                                    form_length: H,
                                    has_logic_jumps: Fe
                                },
                                test_id: He,
                                typeform_view_id: Ee,
                                variant_label: Xe
                            };
                        yield(0, u.gz)(n, {
                            data: et,
                            options: l
                        })
                    }
                }
            }

            function* na(n) {
                for (;;) {
                    var {
                        type: l,
                        payload: s
                    } = yield(0, u.qn)([S.yL, S.Ym, S.qU, S.Fu]);
                    if (l === S.yL) {
                        var d = yield(0, u.Ys)(Fr.pi, s.ref);
                        if (d) continue
                    }
                    if (!((l === S.qU || l === S.yL) && s.isFromPrefilledAnswer)) return yield(0, u.RE)(n, s)
                }
            }

            function Ha(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function ct(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? Ha(Object(s), !0).forEach(function(d) {
                        Mo(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Ha(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function Mo(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }
            var _o = 1e3,
                Zo = 2e3,
                _t = {
                    BLOCK_ANSWERED: "block_answered",
                    BLOCK_FOCUSED: "block_focused",
                    BLOCK_FOOTER_CLICKED: "block_footer_clicked",
                    BLOCK_FOOTER_VISIBLE: "block_footer_visible",
                    CONVERSATION_SUBMITTED: "conversation_submitted",
                    ITEM_CLICKED: "item_clicked",
                    PRESENT_CONVERSATION: "present_conversation",
                    REVIEW_MODE_ENTERED: "review_mode_entered",
                    START_CONVERSATION: "start_conversation",
                    SUBMIT_BUTTON_SHOWN: "submit_button_shown",
                    TYPEFORM_PREVIEWED: "typeform_previewed",
                    TMP_ITEM_CLICKED: "tmp_item_clicked",
                    TMP_BLOCK_ANSWERED: "tmp_block_answered"
                },
                aa = "standard",
                ba = "louvre",
                Vo = "closed",
                Yo = "opened",
                On = {
                    integrations: {
                        All: !1,
                        "S3 Datalake": !0
                    }
                },
                An = () => (0, _n.T)() ? "mobile" : "desktop",
                Yn = () => {
                    var n = new Date;
                    return n.getTimezoneOffset()
                },
                Dn = () => {
                    try {
                        return Intl.DateTimeFormat().resolvedOptions().timeZone
                    } catch (n) {
                        return null
                    }
                },
                Ka = (n, l) => n && l ? "thankyou_button_and_branding" : n ? "thankyou_button" : l ? "branding" : null;

            function* za() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zo,
                    l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _o;
                yield(0, u.qn)(S.JJ), yield(0, u.RE)(Uo);
                var s = yield(0, u.RE)(b.CE, b.Ef.expanding(10));
                yield(0, u.rM)(Wa, s, n), yield(0, u.rM)(Vn, s, On);
                var d = yield(0, u.Ys)(un.lA);
                d && (yield(0, u.rM)($o, s, n));
                var y = yield(0, u.Ys)(Rt.uu);
                if (y) {
                    var X = {
                            integrations: {
                                All: !1,
                                "S3 Datalake": !0,
                                Natero: !0,
                                "Google Analytics": !0,
                                "Facebook Pixel": !0,
                                AdWords: !0
                            }
                        },
                        Ee = yield(0, u.RE)(Xa);
                    yield(0, u.gz)(s, {
                        data: Ee,
                        options: X
                    });
                    return
                } {
                    var at = yield(0, u.RE)(Ea);
                    yield(0, u.gz)(s, {
                        data: ct({}, at)
                    })
                }
                yield(0, u.rM)(function*() {
                    yield(0, u.RE)(na, function*(H) {
                        var Fe = yield(0, u.Ys)(ft.cY);
                        yield(0, u.RE)(Va, Fe);
                        var He = yield(0, u.RE)(dn.V9, Fe);
                        yield(0, u.gz)((0, ma.EA)(He));
                        var Xe = yield(0, u.RE)(Qa, H);
                        yield(0, u.gz)(s, {
                            data: Xe
                        })
                    })
                }), yield(0, u.rM)(function*() {
                    yield(0, u.ib)(S.Zg, function*() {
                        var H = yield(0, u.RE)(Wr);
                        yield(0, u.gz)(s, {
                            data: H
                        })
                    })
                }), yield(0, u.rM)(function*() {
                    for (var H;;) {
                        var Fe = yield(0, u.qn)(S.gu), He = yield(0, u.Ys)(A.tK), Xe = Fe.payload.blockRef;
                        if (!!Fe.payload.show && Xe === He) {
                            if (H === Xe) continue;
                            H = Xe;
                            var et = yield(0, u.RE)(Ja, _t.BLOCK_FOOTER_VISIBLE);
                            et && (yield(0, u.gz)(s, {
                                data: et,
                                options: On
                            }))
                        }
                    }
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var H = yield(0, u.qn)(S.NO), {
                            source: Fe
                        } = H.payload;
                        if (Fe === Zn.b) {
                            var He = yield(0, u.RE)(Ja, _t.BLOCK_FOOTER_CLICKED);
                            He && (yield(0, u.gz)(s, {
                                data: He,
                                options: On
                            }))
                        }
                    }
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        yield(0, u.qn)(S.pg);
                        var H = yield(0, u.Ys)(ie.Dd), Fe = {
                            invalid_answers_amount: H
                        }, He = yield(0, u.RE)(Lr, _t.REVIEW_MODE_ENTERED, Fe), Xe = On;
                        yield(0, u.gz)(s, {
                            data: He,
                            options: Xe
                        })
                    }
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var {
                            payload: H
                        } = yield(0, u.qn)([S.ew]), Fe = H.ref, He = yield(0, u.Ys)(ft.Cf, Fe);
                        if (!!He) {
                            var Xe = yield(0, u.Ys)(Rt.Ac), et = yield(0, u.Ys)(ft.cY), At = yield(0, u.Ys)(Rt.MQ), Vt = yield(0, u.Ys)(A.Fx, Fe), tr = {
                                account_id: Xe.legacyAccountId,
                                account_uid: Xe.accountUid,
                                attribution_user_id: Mn.Z.getUser(),
                                block_ref: Fe,
                                block_type: Vt ? Vt.type : null,
                                event: _t.SUBMIT_BUTTON_SHOWN,
                                form_uid: et,
                                typeform_view_id: At,
                                ws_owner_account_id: Xe.legacyAccountId
                            }, dr = On;
                            yield(0, u.gz)(s, {
                                data: tr,
                                options: dr
                            })
                        }
                    }
                }), yield(0, u.rM)(function*() {
                    var H = On,
                        Fe = yield(0, u.Ys)(A.co), He = !!Fe, Xe = yield(0, u.Ys)(A.tK), et, At, Vt;
                    if (et = yield(0, u.Ys)(Rt.oq), At = et(Xe), He) Vt = yield(0, u.RE)(Ho, Fe, _t.BLOCK_FOCUSED);
                    else {
                        var tr = yield(0, u.Ys)(ie.hx, Xe), dr = yield(0, u.RE)(ia, Xe, _t.BLOCK_FOCUSED, {
                            prefilled_block: tr,
                            response_prefilled: At.responseFilled || null
                        }), vr = yield(0, u.RE)($a, Xe);
                        Vt = ct(ct({}, dr), vr)
                    }
                    yield(0, u.gz)(s, {
                        data: Vt,
                        options: H
                    });
                    for (var jn, kn = function*() {
                            var {
                                payload: fn
                            } = yield(0, u.qn)(S.yL), rn = yield(0, u.Ys)(ie.hx, fn.ref);
                            yield(0, u.gw)(), et = yield(0, u.Ys)(Rt.oq), At = et(fn.ref);
                            var pn = yield(0, u.RE)(ia, fn.ref, _t.BLOCK_FOCUSED, {
                                navigation_type: fn.navigationType,
                                prefilled_block: rn,
                                response_prefilled: At.responseFilled || null
                            });
                            if (!pn) return "continue";
                            var Gn = yield(0, u.RE)($a, fn.ref), da = ct(ct({}, pn), Gn);
                            jn && (yield(0, u.al)(jn)), jn = yield(0, u.rM)(function*() {
                                yield(0, u.gw)(l), yield(0, u.gz)(s, {
                                    data: da,
                                    options: H
                                })
                            })
                        };;) var ua = yield* kn()
                }), yield(0, u.rM)(function*() {
                    for (var H = On, Fe, He = function*() {
                            var {
                                type: At,
                                payload: Vt
                            } = yield(0, u.qn)([S.yL, S.Fu]), tr = yield(0, u.Ys)(A.tK), dr = yield(0, u.Ys)(ft.eS);
                            if (At === S.yL && tr === dr) return "continue";
                            var vr = At === S.Fu ? tr : dr,
                                jn = yield(0, u.Ys)(A.ny, vr), kn = yield(0, u.Ys)(ie.Nh, vr), ua = yield(0, u.Ys)(Rt.oq), Fn = ua(vr), fn = yield(0, u.RE)(ia, vr, _t.BLOCK_ANSWERED, {
                                    changed_prefilled_value: kn,
                                    answered: jn,
                                    navigation_type: Vt.navigationType,
                                    response_filled: Fn.responseFilled || null
                                }), rn = yield(0, u.Ys)(ga.GM), pn = void 0;
                            if (rn && (pn = yield(0, u.RE)(ia, vr, _t.TMP_BLOCK_ANSWERED, {
                                    changed_prefilled_value: kn,
                                    answered: jn,
                                    navigation_type: Vt.navigationType,
                                    response_filled: Fn.responseFilled || null,
                                    answer_type: Fn.answerMethod || null
                                })), !fn) return "continue";
                            var Gn = yield(0, u.RE)(Ko, vr), da = ct(ct({}, fn), Gn);
                            Fe && (yield(0, u.al)(Fe)), Fe = yield(0, u.rM)(function*() {
                                yield(0, u.gw)(l), yield(0, u.gz)(s, {
                                    data: da,
                                    options: H
                                }), rn && (yield(0, u.gz)(s, {
                                    data: pn,
                                    options: H
                                }))
                            })
                        };;) var Xe = yield* He()
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var {
                            payload: H
                        } = yield(0, u.qn)(S.Kr), {
                            label: Fe
                        } = H, He = yield(0, u.RE)(Go, Fe);
                        yield(0, u.gz)(s, {
                            data: He
                        })
                    }
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var {
                            payload: H
                        } = yield(0, u.qn)(S.lS), Fe = _t.BLOCK_FOCUSED, He = yield(0, u.Ys)(Sr.un), Xe = H.ref === (He == null ? void 0 : He.ref);
                        if (!(!He || !Xe || He != null && He.autoRedirect)) {
                            var {
                                showButton: et
                            } = He, At = yield(0, u.Ys)(ft.qC), Vt = Ka(et, At), tr = yield(0, u.RE)(zo, H.ref, {
                                typeform_branding: Vt
                            }), dr = yield(0, u.RE)(Lr, Fe, tr), vr = ct(ct({}, tr), dr);
                            yield(0, u.gz)(s, {
                                data: vr
                            })
                        }
                    }
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var {
                            payload: H
                        } = yield(0, u.qn)(S.Oq), {
                            label: Fe,
                            navigationType: He,
                            buttonText: Xe
                        } = H, et = yield(0, u.RE)(cl, Fe, He, Xe);
                        yield(0, u.gz)(s, {
                            data: et
                        })
                    }
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var {
                            payload: H
                        } = yield(0, u.qn)(S.If), {
                            label: Fe
                        } = H, He = yield(0, u.RE)(ul, Fe);
                        yield(0, u.gz)(s, {
                            data: He
                        })
                    }
                })
            }

            function* Uo() {
                var n = yield(0, u.Ys)(Rt.uE), l = yield(0, u.RE)(Ga), s = [];
                if (n) {
                    var d = yield(0, u.Ys)(Rt.NR), y = yield(0, u.Ys)(Rt.iV), X = {
                        name: Na.SUPPORTED_PROVIDERS.RUDDERSTACK,
                        config: {
                            key: n,
                            dataPlaneUrl: d,
                            options: {
                                configUrl: y
                            }
                        }
                    };
                    s.push(X)
                }
                s.length && (yield(0, u.RE)(pa().initRenderer, s, l))
            }

            function* Wa(n, l) {
                for (;;) {
                    var s = yield(0, u.qn)(n), d = yield(0, u.yl)(n), y = [s, ...d];
                    yield(0, u.RE)(Ya, y);
                    var X = yield(0, u.Ys)(A.G8), Ee = yield(0, u.Ys)(hr.$n);
                    !X && !Ee && (yield(0, u.S3)({
                        delay: (0, u.gw)(l),
                        cancel: (0, u.qn)(S.Fu)
                    }))
                }
            }

            function* Ga() {
                var n = yield(0, u.Ys)(ft.cY), l = yield(0, u.Ys)(Rt.MQ), s = yield(0, u.Ys)(Rt.Ac), d = yield(0, u.RE)(dn.Xu, n);
                return {
                    account_id: s.legacyAccountId,
                    account_uid: s.accountUid,
                    attribution_user_id: Mn.Z.getUser(),
                    form_uid: n,
                    form_visitor_id: d,
                    typeform_view_id: l,
                    ws_owner_account_id: s.legacyAccountId
                }
            }

            function* oa(n, l) {
                var s = yield(0, u.Ys)(un.jO), d = {}, y = {};
                if (!s) return {};
                l.landing_token && (d = yield(0, u.Ys)(un.YP));
                var X = he.rA.includes(n);
                return X && (y = yield(0, u.Ys)(un.iV)), ct(ct({}, d), y)
            }

            function* Lr(n, l) {
                var s = yield(0, u.RE)(Ga);
                return ct(ct({}, s), {}, {
                    event: n
                }, l)
            }

            function* Ho(n, l, s) {
                var d = yield(0, u.Ys)(A.dH);
                if (!d) return null;
                var y = yield(0, u.Ys)(hr.d_), X = window.performance && window.performance.now && window.performance.now(), Ee = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation"), at = Ee && Ee.length && Ee[0].domComplete, H = ct({
                    attachment_type: d.attachment && d.attachment.type || null,
                    block_index: 0,
                    block_ref: n,
                    block_type: ea.G0,
                    landing_token: y,
                    layout_type: d.layout && d.layout.type || Me.BB.STACK,
                    question_intent: null,
                    question_required: null,
                    response_id: null,
                    prefilled_block: null,
                    response_prefilled: null,
                    time_since_page_load: at ? Math.round(X - at) : 0
                }, s), Fe = yield(0, u.RE)(Lr, l, H);
                return Fe
            }

            function* $a(n) {
                var l = yield(0, u.Ys)(A.Vl), s = l.find(H => H.ref === n);
                if (!s) return null;
                var {
                    properties: d
                } = s, y = {};
                if ((0, Fr.t_)(s)) {
                    var {
                        fields: X
                    } = d, Ee = X.filter(H => H.validations.required).map(H => H.subfieldKey).join(","), at = X.filter(H => H.validations.required).map(H => H.ref).join(",");
                    y.fields_featured = X.map(H => H.subfieldKey).join(","), y.fields_featured_refs = X.map(H => H.ref).join(","), Ee && (y.fields_required = Ee), at && (y.fields_required_refs = at)
                }
                return y
            }

            function* ia(n, l, s) {
                var d = yield(0, u.Ys)(A.Vl), y = d.find(vr => vr.ref === n);
                if (!y) return null;
                var X = yield(0, u.Ys)(hr.d_), Ee = yield(0, u.Ys)(hr.Ch), at = yield(0, u.Ys)(Fr.U6, n), H = yield(0, u.Ys)(Fo.O, n), Fe = d.findIndex(vr => vr.ref === n), He = yield(0, u.Ys)(A.dH);
                He && Fe++;
                var Xe = window.performance && window.performance.now && window.performance.now(),
                    et = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation"),
                    At = et && et.length && et[0].domComplete,
                    Vt = ct({
                        attachment_type: y.attachment && y.attachment.type || null,
                        block_index: Fe,
                        block_ref: n,
                        block_type: y.type,
                        landing_token: X,
                        layout_type: y.layout && y.layout.type || Me.BB.STACK,
                        question_intent: H || null,
                        question_required: at,
                        response_id: Ee,
                        time_since_page_load: At ? Math.round(Xe - At) : 0
                    }, s),
                    tr = yield(0, u.RE)(Lr, l, Vt), dr = yield(0, u.RE)(oa, l, tr);
                return ct(ct({}, tr), dr)
            }

            function* Ko(n) {
                var l = yield(0, u.Ys)(A.Fx, n), {
                    properties: s
                } = l, d = {};
                if ((0, Fr.t_)(l)) {
                    var y = yield(0, u.Ys)(A.GD, n), [X] = (0, A.$z)(y);
                    if (X) {
                        var Ee = [],
                            at = [];
                        s.fields.forEach(H => {
                            var Fe = H.type,
                                He = X[H.ref],
                                Xe = !(0, A.yr)(Fe, He);
                            Xe && (at.push(H.ref), Ee.push(H.subfieldKey))
                        }), d = {
                            fields_filled: Ee.join(","),
                            fields_filled_refs: at.join(","),
                            answered: !!Ee.length
                        }
                    }
                }
                return d
            }

            function* zo(n, l) {
                var s, d, y = yield(0, u.Ys)(Sr.un), X = yield(0, u.Ys)(A.Vl), Ee = X.length, at = yield(0, u.Ys)(A.dH);
                at && Ee++;
                var H = yield(0, u.Ys)(hr.d_), Fe = yield(0, u.Ys)(hr.Ch), He = window.performance && window.performance.now && window.performance.now(), Xe = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation"), et = Xe && Xe.length && Xe[0].domComplete, At = n === Sr.f3 ? "thankyou_screen" : "ending";
                return ct({
                    attachment_type: ((s = y.attachment) === null || s === void 0 ? void 0 : s.type) || null,
                    block_index: Ee,
                    block_ref: n,
                    block_type: At,
                    landing_token: H,
                    layout_type: ((d = y.layout) === null || d === void 0 ? void 0 : d.type) || Me.BB.STACK,
                    response_id: Fe,
                    time_since_page_load: et ? Math.round(He - et) : 0
                }, l)
            }

            function* er() {
                var n = yield(0, u.Ys)(En.TJ);
                return n ? {
                    embedding_mode: yield(0, u.Ys)(En.IO), headers_displayed: !(yield(0, u.Ys)(En.oI)), footers_displayed: !(yield(0, u.Ys)(En.oo)), transparency: 100 - (yield(0, u.Ys)(En.eG)) * 100
                } : {
                    embedding_mode: null
                }
            }

            function* Qa(n) {
                var {
                    navigationType: l
                } = n, s = yield(0, u.Ys)(ft.cY), d = yield(0, u.Ys)(Rt.o0), y = yield(0, u.Ys)(ie.TO), X = yield(0, u.RE)(dn.g6, s), Ee = yield(0, u.Ys)(Rt.qk), at = yield(0, u.Ys)(A.dH), H = yield(0, u.Ys)(ft.qC), Fe = ea.G0;
                if (!at) {
                    var He = yield(0, u.Ys)(A.Me, 0);
                    Fe = He == null ? void 0 : He.type
                }
                var Xe = {
                        distribution_channel: aa,
                        height: window.innerHeight,
                        is_first_conversation: d,
                        local_time_offset: Yn(),
                        local_timezone: Dn() || null,
                        natero_feature_name: _t.START_CONVERSATION,
                        navigation_type: l,
                        platform: An(),
                        prefilled_data: y,
                        renderer_version: ba,
                        respondent_method: "web_renderer",
                        visit_number: X,
                        visit_number_current_cycle: Ee,
                        width: window.innerWidth,
                        block_type: Fe,
                        typeform_branding: H
                    },
                    et = yield(0, u.RE)(Lr, _t.START_CONVERSATION, Xe), At = yield(0, u.RE)(er), Vt = yield(0, u.RE)(oa, _t.START_CONVERSATION, et);
                return et = ct(ct(ct({}, et), At), Vt), et
            }

            function* Wo() {
                var n = yield(0, u.Ys)(ft.cY), l = yield(0, u.RE)(dn.qk, n);
                return yield(0, u.gz)((0, ma.EA)(l)), l
            }

            function* Ea() {
                var n = yield(0, u.Ys)(Lo.d), l = yield(0, u.Ys)(ft.H), s = yield(0, u.Ys)(ft.Yo), d = yield(0, u.Ys)(ko.mc), y = d ? Vo : Yo, X = yield(0, u.Ys)(ie.TO), Ee = yield(0, u.Ys)(ft.cY), at = yield(0, u.RE)(Wo, Ee), H = yield(0, u.RE)(dn.g6, Ee), Fe = yield(0, u.Ys)(ft.qC), He = yield(0, u.Ys)(A.z0), Xe = yield(0, u.Ys)(ft.LP), et = !He && Fe, At = {
                    distribution_channel: aa,
                    embedding_mode: null,
                    form_status: y,
                    local_time_offset: Yn(),
                    local_timezone: Dn() || null,
                    platform: An(),
                    prefilled_data: X,
                    renderer_version: ba,
                    respondent_method: "web_renderer",
                    show_navigation_arrows: !s,
                    show_number_of_submissions: Xe,
                    typeform_branding: et,
                    visit_number_current_cycle: at,
                    visit_number: H
                };
                l && n && (At = ct(ct({}, At), {}, {
                    estimated_time_to_complete: n
                }));
                var Vt = yield(0, u.RE)(Lr, _t.PRESENT_CONVERSATION, At), tr = yield(0, u.RE)(er);
                Vt = ct(ct(ct({}, Vt), tr), Ua.ZP.getEventsToBeTracked());
                var dr = yield(0, u.RE)(oa, _t.PRESENT_CONVERSATION, Vt);
                return ct(ct({}, Vt), dr)
            }

            function* Wr() {
                var n = yield(0, u.Ys)(ft.cY), l = yield(0, u.Ys)(Rt.o0), s = yield(0, u.Ys)(hr.d_), d = yield(0, u.Ys)(hr.Ch), y = yield(0, u.Ys)(hr.fC), X = yield(0, u.Ys)(ie.TO), Ee = yield(0, u.RE)(dn.g6, n), at = yield(0, u.Ys)(Rt.qk), H = yield(0, u.Ys)(ft.qC), Fe = new Date().getTime(), He = window.performance && window.performance.timing && window.performance.timing.domComplete, Xe = {
                    distribution_channel: aa,
                    is_first_conversation: l,
                    landing_token: s,
                    local_time_offset: Yn(),
                    local_timezone: Dn() || null,
                    natero_feature_name: _t.CONVERSATION_SUBMITTED,
                    navigation_type: y,
                    platform: An(),
                    prefilled_data: X,
                    respondent_method: "web_renderer",
                    response_id: d,
                    time_to_submit: He ? Math.round((Fe - He) / 1e3) : -1,
                    visit_number_current_cycle: at,
                    visit_number: Ee,
                    typeform_branding: H
                }, et = yield(0, u.RE)(Lr, _t.CONVERSATION_SUBMITTED, Xe), At = yield(0, u.Ys)(ft.Ou), Vt = At ? {
                    online: window.navigator.onLine
                } : {}, tr = yield(0, u.RE)(er);
                et = ct(ct(ct({}, et), tr), Vt);
                var dr = yield(0, u.RE)(oa, _t.CONVERSATION_SUBMITTED, et);
                return ct(ct({}, et), dr)
            }

            function* Ja(n) {
                var l = yield(0, u.Ys)(Rt.o0), s = {
                    distribution_channel: aa,
                    height: window.innerHeight,
                    is_first_conversation: l,
                    local_time_offset: Yn(),
                    local_timezone: Dn() || null,
                    natero_feature_name: n,
                    platform: An(),
                    renderer_version: ba,
                    respondent_method: "web_renderer_one_question_per_screen",
                    width: window.innerWidth
                }, d = yield(0, u.RE)(Lr, n, s), y = yield(0, u.RE)(er);
                return d = ct(ct({}, d), y), d
            }

            function* Xa() {
                var n = yield(0, u.Ys)(Rt.Ac), l = yield(0, u.Ys)(ft.cY), s = {
                    event: _t.TYPEFORM_PREVIEWED,
                    form_uid: l,
                    account_id: n.legacyAccountId,
                    account_uid: n.accountUid,
                    natero_feature_name: _t.TYPEFORM_PREVIEWED
                };
                return s
            }

            function* la(n) {
                var l = yield(0, u.Ys)(Rt.o0), s = yield(0, u.Ys)(hr.d_), d = yield(0, u.Ys)(hr.Ch), y = yield(0, u.RE)(er), X = ct(ct({
                    is_first_conversation: l,
                    landing_token: s,
                    platform: An(),
                    response_id: d
                }, y), n);
                return X
            }

            function* Go(n) {
                var l = yield(0, u.RE)(la, {
                    item: "viral_branding",
                    label: n
                }), s = yield(0, u.RE)(Lr, _t.ITEM_CLICKED, l), d = yield(0, u.Ys)(un.lA);
                return d && (s.form_uid = yield(0, u.Ys)(un.vc), s.form_visitor_id = yield(0, u.RE)(dn.Xu, s.form_uid)), ct({}, s)
            }

            function* cl(n, l, s) {
                var d = yield(0, u.RE)(la, {
                    item: "endscreen_cta",
                    label: n,
                    value: s,
                    navigation_type: l
                }), y = yield(0, u.RE)(Lr, _t.ITEM_CLICKED, d);
                return y
            }

            function* ul(n) {
                var l = yield(0, u.RE)(la, {
                    item: "thankyou_screen_social",
                    label: n
                }), s = yield(0, u.RE)(Lr, _t.ITEM_CLICKED, l);
                return s
            }

            function qa(n, l) {
                var s = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(n);
                    l && (d = d.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(n, y).enumerable
                    })), s.push.apply(s, d)
                }
                return s
            }

            function Oa(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {};
                    l % 2 ? qa(Object(s), !0).forEach(function(d) {
                        dl(n, d, s[d])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : qa(Object(s)).forEach(function(d) {
                        Object.defineProperty(n, d, Object.getOwnPropertyDescriptor(s, d))
                    })
                }
                return n
            }

            function dl(n, l, s) {
                return l in n ? Object.defineProperty(n, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = s, n
            }

            function* vl(n) {
                return yield(0, u.RE)(Qa, n)
            }

            function* fl() {
                var n = O();
                yield(0, u.qn)(S.Zg), yield(0, u.gz)({
                    type: he.fb
                }), yield(0, u.gz)((0, Be.QZ)()), yield(0, u.gz)({
                    type: S.yL,
                    payload: {
                        ref: n.fields[0].ref
                    }
                }), yield(0, u.RE)(Rn.jq)
            }

            function* $o(n) {
                yield(0, u.qn)(Be.QZ.type);
                var l = yield(0, u.RE)(Ea);
                yield(0, u.gz)(n, {
                    data: Oa({}, l)
                });
                var s = yield(0, u.RE)(na, vl);
                yield(0, u.gz)(n, {
                    data: Oa({}, s)
                })
            }
            var Cn = c(38922),
                Ca = c(45152),
                Qo = c(20534);

            function* Jo(n) {
                var l = yield(0, u.Ys)(ft.BE), s = yield(0, u.Ys)(Qo.Wl), d = yield(0, u.Ys)(ft.I6);
                if (!(d || !l)) {
                    if ((0, Cn.jh)({
                            groups: n.type === W.e6.type ? s : Ca.o5,
                            timestamp: new Date
                        }), !(0, Cn.jW)()) {
                        yield(0, u.RE)(Cn.yn);
                        return
                    }
                    yield(0, u.gz)(ma.MB)
                }
            }

            function* Xo() {
                var n = yield(0, u.Ys)(ft.I6);
                if (!n) {
                    var l = yield(0, u.Ys)(ft.BE), s = (0, Cn.Zm)();
                    if (!l && !s) {
                        (0, Cn.jh)({
                            groups: [...Ca.o5],
                            timestamp: new Date,
                            implicitConsent: !0
                        });
                        return
                    }
                    if (l && s) {
                        var d = (0, Cn.kz)();
                        if (!d) return;
                        (0, Cn.vV)()
                    }
                }
            }

            function* qo() {
                yield(0, u.RE)(Xo), yield(0, u.Fm)([W.jk.type, W.e6.type], Jo)
            }
            var eo = c(44376),
                to = c(37223),
                ro = c(75273);

            function* ei(n) {
                var l = yield(0, u.Ys)(ft.cY), s = yield(0, u.Ys)(hr.fb), d = yield(0, u.Ys)(Sr.un);
                yield(0, u.gz)((0, to.Xf)()), yield(0, u.gz)((0, ro.Nc)(d.ref)), typeof n == "function" && (yield(0, u.RE)(n, l, s))
            }
            var Pr = c(19338),
                wr = c(86652),
                Sa = {
                    prod: "tfprod",
                    dev: "tfdev"
                },
                ti = ["localhost", "0.0.0.0"],
                ri = () => {
                    var n = window.location.hostname.split("."),
                        l = n.lastIndexOf("typeform"),
                        s = n.slice(0, l);
                    return s.length > 1 ? s[s.length - 1] === "tfdev" ? s[s.length - 2] : s[s.length - 1] : null
                },
                no = () => ti.includes(window.location.hostname),
                ao = () => !!ri(),
                oo = () => no() || ao() ? Sa.dev : Sa.prod;
            const Pa = oo;
            var ni = .1;

            function* ai(n, l) {
                for (;;) {
                    var s = yield(0, u.qn)(n);
                    yield(0, u.RE)(l, s.payload)
                }
            }

            function* sa(n, l) {
                yield(0, u.Cs)(ai, n, l)
            }

            function io() {
                wr.v.init({
                    applicationId: "8ef45d76-7592-4725-a010-baff27b2bb06",
                    clientToken: "pub450c9b28489f3fca4f28525ad316e45e",
                    service: "renderer",
                    env: Pa(),
                    version: window.rendererReleaseVersion,
                    sampleRate: 100,
                    premiumSampleRate: 0,
                    useSecureSessionCookie: !0
                })
            }

            function oi() {
                Pr.fy.init({
                    clientToken: "pub450c9b28489f3fca4f28525ad316e45e",
                    env: Pa(),
                    forwardConsoleLogs: ["error"],
                    sampleRate: 100,
                    service: "renderer",
                    version: window.rendererReleaseVersion
                })
            }

            function* ii() {
                yield(0, u.RE)(li)
            }

            function* lo() {
                var n = yield(0, u.Ys)(Rt.uu);
                if (!n) {
                    yield(0, u.qn)(S.n4), yield(0, u.RE)(oi);
                    var l = yield(0, u.Ys)(eo.WJ), s = l || Math.random() <= ni / 100;
                    s && (yield(0, u.RE)(io)), yield(0, u.RE)(wa), yield(0, u.RE)(ci), yield(0, u.RE)(na, ii), yield* sa(S.Zg, si), yield* sa(S.$4, Un), yield* sa(S.p2, so), yield* sa(S.Fu, Ta)
                }
            }

            function* wa() {
                var n = yield(0, u.Ys)(ft.cY), l = yield(0, u.Ys)(Rt.MQ), s = yield(0, u.Ys)(Rt.Ac);
                Pr.fy.addLoggerGlobalContext("isTouch", (0, _n.T)()), Pr.fy.addLoggerGlobalContext("formUid", n), Pr.fy.addLoggerGlobalContext("sessionId", l), Pr.fy.addLoggerGlobalContext("planName", s == null ? void 0 : s.planName);
                var d = yield(0, u.Ys)(En.TJ), y = yield(0, u.Ys)(En.IO);
                d && Pr.fy.addLoggerGlobalContext("embeddingMode", y), wr.v.setGlobalContextProperty("isTouch", (0, _n.T)()), wr.v.setGlobalContextProperty("formUid", n), wr.v.setGlobalContextProperty("sessionId", l), wr.v.setGlobalContextProperty("planName", s == null ? void 0 : s.planName), d && wr.v.setGlobalContextProperty("embeddingMode", y)
            }

            function li() {
                Pr.fy.logger.info("startConversation"), wr.v.addAction("startConversation")
            }

            function si() {
                Pr.fy.logger.info("conversationSubmitted"), wr.v.addAction("conversationSubmitted")
            }

            function Ta() {
                Pr.fy.logger.info("submitRequest"), wr.v.addAction("submitRequest")
            }

            function ci() {
                Pr.fy.logger.info("visit"), wr.v.addAction("visit")
            }

            function Un(n) {
                var {
                    errorCode: l,
                    errorDescription: s,
                    errorDetails: d
                } = n;
                (0, Rn.vb)({
                    code: l,
                    details: d
                }) || (Pr.fy.logger.info("submitFailed", {
                    errorCode: l,
                    errorDescription: s,
                    errorDetails: JSON.stringify(d)
                }), wr.v.addAction("submitFailed", {
                    errorCode: l,
                    errorDescription: s,
                    errorDetails: JSON.stringify(d)
                }))
            }

            function so(n) {
                var {
                    errorCode: l
                } = n;
                Pr.fy.logger.info("submitRetry", {
                    errorCode: l
                }), wr.v.addAction("submitRetry", {
                    errorCode: l
                })
            }
            var Tr = c(46746),
                tn = c(96512);

            function* St() {
                yield(0, u.qn)(S.n4), yield(0, u.Cs)(vn)
            }

            function* vn() {
                var n = yield(0, u.Ys)(ft.cY), l = yield(0, u.Ys)(Rt.MQ), s = navigator.userAgent, d = yield(0, u.Ys)(ga.N5), y = d ? Object.keys(d).map(et => ({
                    test_id: et,
                    variant_label: d[et]
                })) : [];
                try {
                    var X = {
                            formId: n,
                            responseId: l,
                            userAgent: s,
                            runningExperiments: JSON.stringify(y)
                        },
                        Ee = d && d[ra.EM] === ra.c7,
                        at = Ee ? tn.V.endpoints.insightsV3 : tn.V.endpoints.insights,
                        H = new Tr.f(X, {
                            endpoint: "".concat(tn.V.apiHost, "/forms/").concat(n, "/").concat(at)
                        });
                    yield(0, u.ib)(S.lY, function*() {
                        yield(0, u.RE)([H, H.onClose])
                    });
                    var Fe = yield(0, u.Ys)(A.z0);
                    Fe && (yield(0, u.RE)([H, H.onActivateBlock], {
                        id: "WelcomeScreenID"
                    }), yield(0, u.qn)(S.Ym));
                    var He = yield(0, u.Ys)(A.tK), Xe = yield(0, u.Ys)(A.Fx, He);
                    Xe && (yield(0, u.RE)([H, H.onActivateBlock], {
                        id: Xe.id
                    })), yield(0, u.ib)(S.yL, function*(et) {
                        var At = yield(0, u.Ys)(A.Fx, et.payload.ref);
                        At && (yield(0, u.RE)([H, H.onActivateBlock], {
                            id: At.id
                        }))
                    }), yield(0, u.ib)(S.Zg, function*() {
                        yield(0, u.RE)([H, H.onSubmit])
                    })
                } catch (et) {
                    console.error(et)
                }
            }
            var ca = c(50481),
                Ia = {
                    sendEvent: (n, l) => {
                        var {
                            formId: s,
                            value: d
                        } = l;
                        window.ga && window.ga("send", "event", s, n, d)
                    },
                    events: n => {
                        switch (n) {
                            case S.aR:
                                return {
                                    eventName: "TypeformQuestionPassed",
                                    mapStateToEventData: l => {
                                        var s = (0, A.tK)(l),
                                            d = (0, A.Fx)(l, s);
                                        return {
                                            formId: (0, ft.cY)(l),
                                            value: d.title
                                        }
                                    },
                                    shouldSendEvent: l => {
                                        var s = (0, A.tK)(l),
                                            d = (0, A.Fx)(l, s);
                                        return !!d && d.type !== ea.mQ && d.type !== ea.wM
                                    }
                                };
                            case S.Zg:
                                return {
                                    eventName: "TypeformSubmit",
                                    mapStateToEventData: l => ({
                                        formId: (0, ft.cY)(l),
                                        value: (0, ft.yb)(l)
                                    })
                                };
                            default:
                                return !1
                        }
                    }
                };
            const co = Ia;
            var Hn = !0,
                ui = {
                    sendEvent: (n, l) => {
                        window.fbq && window.fbq("trackSingleCustom", l.pixelId, n)
                    },
                    events: n => {
                        switch (n) {
                            case S.yL:
                            case S.aR:
                            case S.Ym:
                                return {
                                    eventName: "TypeformFirstInteraction",
                                    mapStateToEventData: l => ({
                                        pixelId: (0, Rt.gG)(l)
                                    }),
                                    shouldSendEvent: Ra
                                };
                            case S.Zg:
                                return {
                                    eventName: "TypeformSubmit",
                                    mapStateToEventData: l => ({
                                        pixelId: (0, Rt.gG)(l)
                                    })
                                };
                            default:
                                return !1
                        }
                    }
                };

            function Ra() {
                return Hn ? (Hn = !1, !0) : !1
            }
            const di = ui;
            var uo = !0,
                vo = {
                    sendEvent: n => {
                        window.googleTagManager && window.googleTagManager.push({
                            event: n
                        })
                    },
                    events: n => {
                        switch (n) {
                            case S.yL:
                            case S.aR:
                            case S.Ym:
                                return {
                                    eventName: "TypeformFirstInteraction",
                                    shouldSendEvent: Aa()
                                };
                            case S.Zg:
                                return {
                                    eventName: "TypeformSubmit"
                                };
                            default:
                                return !1
                        }
                    }
                };

            function Aa() {
                return uo ? (uo = !1, !0) : !1
            }
            const fo = vo;
            var po = {
                [ca.D1]: co,
                [ca.UR]: di,
                [ca.qN]: fo
            };
            const Bn = po;

            function* Da() {
                var n = yield(0, u.Ys)(Rt.XA);
                yield(0, u.rM)(function*() {
                    var l = yield(0, u.qn)(S.Zg);
                    yield(0, u.RE)(Kn, l, Bn, n)
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var l = yield(0, u.qn)(S.aR);
                        yield(0, u.RE)(Kn, l, Bn, n)
                    }
                }), yield(0, u.rM)(function*() {
                    var l = yield(0, u.qn)(S.Ym);
                    yield(0, u.RE)(Kn, l, Bn, n)
                }), yield(0, u.rM)(function*() {
                    for (;;) {
                        var l = yield(0, u.qn)(S.yL);
                        yield(0, u.RE)(Kn, l, Bn, n)
                    }
                })
            }

            function* Kn(n, l, s) {
                var d = yield(0, u.Ys)(un.jO);
                if (!d) {
                    var y = s.filter(X => l[X] && !!l[X].events(n.type));
                    yield(0, u.$6)(y.map(X => (0, u.RE)(Ba, l[X], n)))
                }
            }

            function* Ba(n, l) {
                var s = n.events(l.type),
                    d = s.shouldSendEvent ? yield(0, u.Ys)(s.shouldSendEvent): !0;
                if (d) {
                    var y = s.mapStateToEventData ? yield(0, u.Ys)(s.mapStateToEventData): void 0;
                    yield(0, u.RE)(n.sendEvent, s.eventName, y)
                }
            }
            var mo = c(99612),
                zn = c(80951),
                vi = c(2639),
                xn = c(70373),
                fi = c(84092),
                go = c(60707),
                xa = c(86520),
                ja = c(51053);

            function* ho() {
                yield(0, u.ib)(S.M1, yo)
            }

            function* yo() {
                var n = yield(0, u.Ys)(A.tK), l = yield(0, u.Ys)(A.$8, n), s = yield(0, u.Ys)(A.Fx, n), d = yield(0, u.Ys)(A.GD, n), y = yield(0, u.RE)(A.lJ, d);
                if (l && s && !y && (0, xn._6)(s.type)) {
                    var X = yield(0, u.Ys)(Fr.pi, n), Ee = (0, fi.I)(s, window.location.hash), at = (0, go.L)(s, Ee);
                    at && Ee !== null && Ee !== void 0 && Ee.length && (yield(0, ja.PB)(), yield(0, u.gz)((0, xa.eQ)(s.ref, Ee, {}, {
                        isFromPrefilledAnswer: !0
                    })), X && (yield(0, ja.Be)(), yield(0, u.gz)((0, xa.UC)(s.ref, {}, {
                        source: "answer_url",
                        isFromPrefilledAnswer: !0
                    }))))
                }
            }
            var bo = c(29253);

            function* Wn() {
                yield(0, u.Cs)(ir)
            }

            function* ir() {
                var n = yield(0, u.Ys)(ft.cY);
                yield(0, u.gz)((0, In.CN)());
                try {
                    var l = yield(0, u.RE)(bo.HS, n);
                    return yield(0, u.gz)((0, In.TV)(l))
                } catch (s) {
                    yield(0, u.gz)((0, In.fq)())
                }
            }
            var ur = c(79301);

            function* yr() {
                yield(0, u.ib)([S.Dv], pi)
            }

            function* pi() {
                var n = yield(0, u.Ys)(A.S1);
                n && (yield(0, u.gz)((0, ur.OG)())), yield(0, u.gz)((0, ur.K9)())
            }

            function* mi(n) {
                var l = yield(0, u.Ys)(ft.I6), s = yield(0, u.Ys)(ft._S), d = yield(0, u.Ys)(ft.Ou), y = yield(0, u.Ys)(ft.Q5);
                y && (yield(0, u.Cs)(qo), yield(0, u.Cs)(za)), s || l ? yield* hi(n): d ? yield*(0, zn.ZP)(): yield* gi()
            }

            function* gi() {
                var n = yield(0, u.Ys)(ft.Q5), l = yield(0, u.Ys)(un.cp);
                if (l && (yield(0, u.Cs)(fl)), n) {
                    yield(0, u.Cs)(Da), yield(0, u.Cs)(lo);
                    var s = yield(0, u.Ys)(eo.uz, "res-906-enable-insights-tracking");
                    s && (yield(0, u.Cs)(St))
                }
                var d = yield(0, u.Ys)(ft.LP);
                d && (yield(0, u.Cs)(Wn)), yield(0, u.rM)(mo.ZP), yield(0, u.rM)(yr), yield(0, u.rM)(vi.Z), yield(0, u.rM)(function*() {
                    yield(0, u.RE)(na, Rn.jq)
                }), yield(0, u.Cs)(ho), yield(0, u.$6)([(0, u.Fm)(S.Fu, Rn.Of)])
            }

            function* hi(n) {
                yield(0, u.rM)(mo.ZP), yield(0, u.$6)([(0, u.ib)(S.Fu, ei, n)])
            }

            function yi(n, l) {
                var s = (0, b.ZP)({
                        onError: X => {
                            setTimeout(() => {
                                throw X
                            }, 0)
                        }
                    }),
                    d = [q.Z, s],
                    y = (0, i.xC)({
                        reducer: jo,
                        middleware: d,
                        preloadedState: n
                    });
                return s.run(mi, l), y
            }
        },
        96512: (Zt, Ze, c) => {
            c.d(Ze, {
                V: () => q
            });
            var i = c(610),
                b = (0, i.F)() && window.__apiEntrypoint__ ? window.__apiEntrypoint__ : "",
                q = {
                    apiHost: b,
                    endpoints: {
                        forms: "forms/",
                        submissions: "complete-submission",
                        landings: "start-submission",
                        uploads: "fields/",
                        insights: "insights/events/",
                        insightsV3: "insights/events/v3/"
                    }
                }
        },
        51053: (Zt, Ze, c) => {
            c.d(Ze, {
                Be: () => Oe,
                PB: () => he,
                YN: () => ze,
                i4: () => Pe,
                rJ: () => b
            });
            var i = c(81006),
                b = () => {
                    var Me, We;
                    if (!((Me = window) !== null && Me !== void 0 && (We = Me.location) !== null && We !== void 0 && We.search)) return null;
                    var I = window.location.search.match(/prefilled_answer=\d+/);
                    return I ? [parseInt(I[0].split("=")[1], 10)] : null
                },
                q = Me => Me.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
                Pe = Me => {
                    var We, I;
                    if (!((We = window) !== null && We !== void 0 && (I = We.location) !== null && I !== void 0 && I.hash)) return null;
                    var ce = window.location.hash.match(new RegExp("answers-".concat(q(Me), "=([^&]+)")));
                    return ce ? ce[1].split(",").map(decodeURIComponent).map(F => isNaN(F) ? F : parseInt(F, 10)) : null
                },
                Be = Me => new Promise(We => setTimeout(We, Me)),
                he = () => Be(i.km),
                Oe = () => Be(i.YJ),
                ze = () => Be(i.gG)
        },
        54325: (Zt, Ze, c) => {
            c.d(Ze, {
                FF: () => I,
                OI: () => he,
                fD: () => ce
            });
            var i = c(62353),
                b = c.n(i),
                q = c(14246),
                Pe = c(97056),
                Be = c(4586),
                he = "https://www.typeform.com/explore/",
                Oe = "THANK_YOU_SCREEN_REDIRECT",
                ze = "AFTER_SUBMIT_REDIRECT",
                Me = "_parent",
                We = {
                    allowUnknownSchemes: !0
                },
                I = (Y, O) => {
                    R(Y, ze, O)
                },
                ce = (Y, O) => {
                    R(Y, Oe, O)
                },
                F = Y => b()(Y, We),
                K = () => {
                    if (window && window.location) {
                        var Y = window.location.search.match(/typeform-embed-redirect-target=(_self|_top|_blank|_parent)/i);
                        if (Y && Y[1]) return Y[1]
                    }
                    return Me
                },
                w = (Y, O) => {
                    var Z = new URL(Y),
                        W = new URLSearchParams(new URL(O).search);
                    return W.forEach((S, a) => {
                        Z.searchParams.get(a) || Z.searchParams.set(a, S)
                    }), Z.toString()
                },
                R = (Y, O, Z) => {
                    if (!!F(Y)) {
                        var W = Y,
                            S = W.startsWith(he),
                            a = !S && W.includes(".typeform.com/");
                        if (a && (0, Pe.Z)() && (0, Be.A)() && K() === "_self" && (W = w(Y, window.location.href)), (0, Pe.Z)()) switch (O) {
                            case Oe:
                                {
                                    q.fD(Z, W);
                                    break
                                }
                            case ze:
                                {
                                    q.oQ(Z, W);
                                    break
                                }
                            default:
                                break
                        }
                        try {
                            var Pt = document.createElement("a"),
                                wt = "";
                            (0, Pe.Z)() ? wt = K(): S && (wt = "_blank"), Pt.href = W, Pt.target = wt, document.body.appendChild(Pt), Pt.click(), document.body.removeChild(Pt);
                            var Tt = window.location.origin + window.location.pathname;
                            if (W.includes(Tt)) {
                                var ue = (0, Pe.Z)() ? window.parent : window;
                                setTimeout(() => ue.location.reload(), 500)
                            }
                        } catch ($e) {
                            console.error($e)
                        }
                    }
                }
        },
        34296: (Zt, Ze, c) => {
            c.d(Ze, {
                Z: () => i
            });
            class i extends Error {
                constructor(q, Pe, Be) {
                    super("".concat(q, ": ").concat(Pe)), this.code = q, this.description = Pe, this.details = Be
                }
            }
        },
        992: (Zt, Ze, c) => {
            c.r(Ze), c.d(Ze, {
                default: () => id
            });
            var i = c(71383),
                b = c(97236),
                q = c(9034),
                Pe = c(23774),
                Be = c(74406),
                he = c(12726),
                Oe = c(72814),
                ze = c(98153),
                Me = c(94476),
                We = c(36601),
                I = c(68656),
                ce = c(75273),
                F = c(47408),
                K = c(37223),
                w = c(44893),
                R = c(14132),
                Y = c(76175),
                O = c(3547),
                Z = c(91360),
                W = c(73485),
                S = c(10995),
                a = c.n(S),
                Pt = c(56966),
                wt = c(37649),
                Tt = c(41069),
                ue = c(47153),
                $e = c(29770),
                dt = c(23426),
                gt = c(9970),
                nr = c(10381),
                ie = c(63715),
                A = c(93978),
                je = c.n(A),
                ge;

            function tt(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function ht(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var It = 300,
                Et = 500,
                zt = b.ZP.div.withConfig({
                    displayName: "MouseWheelTrigger__Root",
                    componentId: "sc-i71xob-0"
                })(ge || (ge = ht([`
  outline: none;
  width: 100%;
`])));
            class Mt extends i.Component {
                constructor() {
                    super(...arguments), tt(this, "Lethargy", new(je())), tt(this, "accumulated", 0), tt(this, "timeout", null), tt(this, "disableTimeout", null), tt(this, "disabledSwipe", !1), tt(this, "handleWheelScroll", t => {
                        var {
                            upHandler: r,
                            downHandler: o
                        } = this.props, v = this.Lethargy.check(t), f = t.deltaY;
                        !this.disabledSwipe && v !== !1 && (this.accumulated += f, this.setTimeout(() => {
                            this.accumulated = 0
                        })), this.accumulated < -It && (r(), this.accumulated = 0, this.disableSwipe(Et)), this.accumulated > It && (o(), this.accumulated = 0, this.disableSwipe(Et))
                    })
                }
                setTimeout(t) {
                    this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(t, 500)
                }
                disableSwipe(t) {
                    this.disableTimeout && clearTimeout(this.disableTimeout), this.disabledSwipe = !0, this.disableTimeout = setTimeout(() => {
                        this.disabledSwipe = !1
                    }, t)
                }
                render() {
                    return i.createElement(zt, {
                        style: this.props.customStyle,
                        onWheel: this.handleWheelScroll
                    }, this.props.children)
                }
            }
            Mt.propTypes = {
                children: a().node,
                customStyle: a().object,
                downHandler: a().func,
                upHandler: a().func
            };
            const sr = Mt;
            var Mr;

            function br() {
                return br = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, br.apply(this, arguments)
            }

            function Er(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function _r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Er(Object(r), !0).forEach(function(o) {
                        Zr(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Er(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function Zr(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Dr(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var nn = b.ZP.div.withConfig({
                    displayName: "swipeable__Swipeable",
                    componentId: "sc-1ew37v3-0"
                })(Mr || (Mr = Dr([`
  `, `
`])), e => {
                    var {
                        fullHeight: t
                    } = e;
                    return t && "height: 100%;"
                }),
                an = e => {
                    var {
                        canSwipeNext: t,
                        canSwipePrevious: r,
                        goToNextBlock: o,
                        goToPreviousBlock: v,
                        fullHeight: f,
                        children: g
                    } = e, m = (0, i.useRef)(!1), p = (0, i.useRef)(!1), h = (0, i.useRef)(!1), P = () => {
                        if (m.current) return !1;
                        p.current = !t, h.current = !r, m.current = !0
                    }, T = z => {
                        m.current = !1;
                        var ee = 50;
                        if (!(Math.abs(z.deltaY) <= ee / z.velocity)) {
                            if (z.dir === "Up" && t && !p.current) {
                                o({
                                    navigationType: ie.j9
                                });
                                return
                            }
                            z.dir === "Down" && r && !h.current && v({
                                navigationType: ie.lr
                            })
                        }
                    }, x = {
                        delta: 10
                    }, V = (0, nr.QS)(_r({
                        onSwiped: T,
                        onSwiping: P
                    }, x)), ne = () => {
                        !r || v({
                            navigationType: ie.B2
                        })
                    }, U = () => {
                        !t || o({
                            navigationType: ie.gN
                        })
                    }, L = f ? {
                        height: "100%"
                    } : {};
                    return i.createElement(sr, {
                        customStyle: L,
                        downHandler: U,
                        upHandler: ne
                    }, i.createElement(nn, br({
                        fullHeight: f
                    }, V, x), g))
                };
            const Vr = an;

            function Gr() {
                return Gr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Gr.apply(this, arguments)
            }
            var $r = i.createContext(!1),
                Br = $r.Consumer,
                Qr = e => t => i.createElement(Br, null, r => i.createElement(e, Gr({}, t, {
                    isBlockChanging: r
                })));
            const $t = $r;
            var te = c(18);

            function Yr() {
                return Yr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Yr.apply(this, arguments)
            }
            var Ur = ["INPUT", "TEXTAREA", "LI", "SELECT", "BUTTON"],
                on = ["radio"],
                hn = "aria-haspopup",
                cr = i.createContext();
            cr.displayName = "GlobalEventListenerContext";
            var Hr = e => {
                var {
                    areGlobalListenersDisabled: t,
                    children: r,
                    commonHandleKeydown: o
                } = e, v = (0, i.useRef)(null), f = g => {
                    t || (v.current = {
                        onGlobalKeyDown: g
                    })
                };
                return (0, i.useEffect)(() => {
                    if (t) return te.Z;
                    var g = m => {
                        var p, {
                                nodeName: h
                            } = m.target,
                            P = ((p = m.target.attributes) === null || p === void 0 ? void 0 : p.getNamedItem("role")) && m.target.attributes.getNamedItem("role").value,
                            T = m.target.hasAttribute(hn),
                            x = Ur.includes(h) || on.includes(P) || T;
                        if (!x) {
                            var V, ne = (V = v.current) === null || V === void 0 ? void 0 : V.onGlobalKeyDown;
                            ne && ne(m)
                        }
                        o(m, x)
                    };
                    return window.addEventListener("keydown", g), () => {
                        window.removeEventListener("keydown", g)
                    }
                }, [t, o]), i.createElement(cr.Provider, {
                    value: f
                }, r)
            };
            Hr.propTypes = {
                areGlobalListenersDisabled: a().bool,
                children: a().node,
                commonHandleKeydown: a().func
            };
            var j = (e, t) => {
                    var r = (0, i.useContext)(cr);
                    (0, i.useEffect)(() => {
                        e && r(t)
                    }, [e, t])
                },
                Ae = cr.Consumer,
                Qe = e => function(r) {
                    var o = r.isLivePreview;
                    return o ? i.createElement(e, r) : i.createElement(Ae, null, v => i.createElement(e, Yr({}, r, {
                        updateGlobalEventListenerRef: v
                    })))
                },
                Ot = c(66234),
                le = c(19516),
                Dt = c(44376),
                kt = c(82462),
                qt = c(56890),
                Wt, Or, xr, Jr = (Wt = window) === null || Wt === void 0 || (Or = Wt.location) === null || Or === void 0 || (xr = Or.search) === null || xr === void 0 ? void 0 : xr.includes("typeform-render-all-blocks=true"),
                ln = (e, t, r, o) => {
                    var {
                        currentRef: v,
                        previousRef: f,
                        previousActiveRef: g,
                        nextRef: m
                    } = r, p = e.ref === v, h = e.ref === g, P = e.ref === f, T = e.ref === m, x = (0, qt.L6)(e.type), V = t == null ? void 0 : t.hasBeenInteractedWith, ne = o && (p || P || h);
                    return Jr || ne || p || P || T || x && V
                },
                E = c(72090),
                ke = c(8941),
                Ie = c(30999),
                we = c(86520),
                vt = c(86040);

            function Bt(e, t) {
                return {
                    type: vt.gu,
                    payload: {
                        blockRef: e,
                        show: t
                    }
                }
            }

            function Jt(e) {
                return {
                    type: vt.vR,
                    payload: {
                        isScrollNearTop: !e
                    }
                }
            }
            var jr = c(4567);

            function kr() {
                return e => {
                    setTimeout(() => {
                        e({
                            type: vt.OK,
                            payload: {
                                isInputFocused: !1
                            }
                        })
                    }, 50)
                }
            }

            function Ut() {
                return {
                    type: vt.OK,
                    payload: {
                        isInputFocused: !0
                    }
                }
            }
            var sn = "ABSTAIN",
                C = "LOCATION_ADDRESS",
                B = "USER_BIRTHDAY_DATE",
                se = "LOCATION_COUNTRY",
                de = "USER_EMAIL",
                pe = "USER_FIRST_NAME",
                Ve = "USER_LAST_NAME",
                Ye = "USER_NAME",
                rt = "COMPANY_NAME",
                Ge = "USER_INFO_JOB_ROLE",
                pt = "USER_PHONE",
                Yt = "LOCATION_ZIP_CODE",
                ar = "USER_GENDER",
                Cr = "USER_WEBSITE",
                cn = {
                    [sn]: "off",
                    [C]: "street-address",
                    [B]: "bday",
                    [se]: "country",
                    [de]: "email",
                    [pe]: "given-name",
                    [Ve]: "family-name",
                    [Ye]: "name",
                    [rt]: "organization",
                    [Ge]: "organization-title",
                    [pt]: "tel",
                    [Yt]: "postal-code",
                    [ar]: "sex",
                    [Cr]: "off"
                },
                yn = c(52734),
                nt = c(44179),
                Kr = c(83562),
                zr = c(68531),
                Ln = c(97949),
                bn = (e, t) => {
                    var r, o = (0, w.Fx)(e, t);
                    if (!!((r = o.application) !== null && r !== void 0 && r.iframeUrl)) {
                        var v = new URL(o.application.iframeUrl),
                            f = new URLSearchParams(v.search),
                            g = (0, nt.p0)(t)(e);
                        return g.forEach(m => {
                            m.value !== Ln.Yr && f.set(m.ref, m.value)
                        }), v.search = f, "".concat(v)
                    }
                },
                xt = c(92027),
                jt = c(64923),
                Sn = c(67026),
                yt = c(87676),
                Xn = c(11255),
                Pn = c(77923),
                wn = c(13836),
                Sr = c(84273),
                Fr = c(54889),
                Ft = c(34757),
                Je = c(2380),
                gr = c(13219),
                Ct = c(81006),
                qn = c(31424),
                Tn = c(97056);

            function In(e) {
                var {
                    boundingClientRect: t = {},
                    onlyTop: r = !1,
                    offsetTop: o = 0,
                    offsetBottom: v = 0
                } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!e || typeof e.getBoundingClientRect != "function") return !1;
                var f = e.getBoundingClientRect(),
                    g = {
                        height: (0, Tn.Z)() ? document.documentElement.clientHeight : t.height || window.innerHeight || document.documentElement.clientHeight,
                        top: t.top || 0
                    },
                    m = f.top >= g.top + o,
                    p = f.bottom <= g.height - v;
                return r ? m : m && p
            }
            var La = () => navigator.platform === "MacIntel",
                or = c(13796),
                Xr = c(44955),
                Gt = c(26633),
                Nn = c(62776),
                fa = ["label.retrySubmit.first", "label.retrySubmit.second", "label.retrySubmit.third", "label.retrySubmit.fourth"],
                jo = e => {
                    var t = fa.length;
                    return e > t ? fa[t - 1] : fa[e - Ct.YW]
                },
                u = e => {
                    var {
                        count: t,
                        timeout: r,
                        t: o
                    } = e;
                    return r === 0 ? i.createElement("div", null, o("label.retryLink.retrying")) : i.createElement(i.Fragment, null, i.createElement("div", {
                        "data-qa": "retry-count",
                        "aria-hidden": "true"
                    }, o(jo(t), {
                        timeout: r
                    })), r === 3 ? i.createElement(Nn.Z, {
                        "aria-live": "assertive"
                    }, o("label.retryLink.counter", {
                        timeout: r
                    })) : null)
                };
            u.propTypes = {
                count: a().number,
                timeout: a().number,
                t: a().func
            }, u.defaultProps = {
                t: e => e
            };
            const un = (0, Gt.Z)(u);
            var Rn = e => {
                var {
                    centered: t,
                    color: r,
                    count: o,
                    messageKey: v,
                    t: f,
                    timeout: g
                } = e;
                return i.createElement(Xr.ZP, {
                    role: "timer",
                    "aria-live": "assertive",
                    size: "sizeN1",
                    color: r,
                    useDefaultFont: !0,
                    align: t ? "center" : "left"
                }, (0, or.Z)(f(v)), i.createElement(un, {
                    count: o,
                    timeout: g
                }))
            };
            Rn.propTypes = {
                centered: a().bool,
                color: a().string,
                count: a().number,
                messageKey: a().string,
                t: a().func,
                timeout: a().number
            }, Rn.defaultProps = {
                messageKey: "label.warning.slowSubmission",
                t: e => e
            };
            const Na = (0, Gt.Z)(Rn);
            var pa = c(95798),
                Mn = c(8556);

            function _n() {
                return _n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, _n.apply(this, arguments)
            }
            var ea = e => {
                var {
                    ariaDescribedBy: t,
                    backgroundColor: r = I.Bb,
                    buttonColor: o = I.Bb,
                    buttonContentColor: v,
                    centered: f,
                    disabled: g,
                    helperColor: m = I.Bb,
                    helperText: p = "label.buttonHint.default",
                    hideIcon: h = !1,
                    label: P = "label.button.ok",
                    onClick: T,
                    isVisible: x = !1,
                    buttonRef: V,
                    t: ne = ee => ee,
                    hideHelperText: U = !1
                } = e, L = (0, Pe.Pg)(), z = x ? "-visible" : "";
                return i.createElement(pa.Z, _n({
                    ariaDescribedBy: t,
                    centered: f,
                    color: o,
                    contentColor: v,
                    content: (0, or.Z)(ne(P)),
                    contextBackgroundColor: r,
                    dataQa: "ok-button".concat(z, " deep-purple-ok-button").concat(z),
                    disabled: g,
                    helperColor: m,
                    helperText: L ? null : (0, or.Z)(ne(p))
                }, h ? {} : {
                    iconSvg: Mn.Z
                }, {
                    onClick: T,
                    size: "medium",
                    tabIndex: x ? 0 : -1,
                    buttonRef: V,
                    hideHelperText: U
                }))
            };
            const ma = ea;
            var Zn = e => {
                var {
                    ariaDescribedBy: t,
                    centered: r,
                    disabled: o,
                    fullWidth: v,
                    hasMarginBottom: f,
                    helperText: g,
                    isComplete: m,
                    isLivePreview: p,
                    isPaymentBlockAnswered: h,
                    isSubmitting: P,
                    isVisible: T,
                    onClick: x,
                    price: V,
                    size: ne,
                    t: U,
                    theme: L,
                    buttonRef: z,
                    hideHelperText: ee
                } = e, G = (0, Pe.Pg)(), ae = U("label.button.submit");
                h && (ae = U("label.button.submitAndPay", {
                    price: V
                }));
                var $ = L.colors.button,
                    Q = "submit-button deep-purple-submit-button";
                return i.createElement(pa.Z, {
                    ariaDescribedBy: t,
                    buttonRef: z,
                    centered: r,
                    color: $,
                    contentColor: L.colors.buttonContent,
                    content: ae,
                    contextBackgroundColor: L.colors.background,
                    dataQa: Q,
                    disabled: o || !p && (P || m),
                    fullWidth: v,
                    hasMarginBottom: f,
                    helperColor: L.colors.primary,
                    helperText: !G && !r ? (0, or.Z)(U(g)) : "",
                    isSpinning: !p && P,
                    isTransparent: L.hasTransparentButton,
                    onClick: x,
                    size: ne,
                    tabIndex: T ? 0 : -1,
                    hideHelperText: ee
                })
            };
            Zn.defaultProps = {
                centered: !1,
                helperText: "label.buttonHint.default",
                size: "large",
                theme: {
                    colors: {
                        backgroundColor: I.Bb,
                        button: I.Bb,
                        primary: I.Bb
                    },
                    hasTransparentButton: !1
                },
                t: e => e
            }, Zn.propTypes = {
                ariaDescribedBy: a().string,
                buttonRef: a().object,
                centered: a().bool,
                disabled: a().bool,
                fullWidth: a().bool,
                hasMarginBottom: a().bool,
                helperText: a().string,
                isComplete: a().bool,
                isLivePreview: a().bool,
                isPaymentBlockAnswered: a().bool,
                isSubmitting: a().bool,
                isVisible: a().bool,
                onClick: a().func,
                price: a().string,
                size: a().string,
                t: a().func,
                theme: a().object,
                hideHelperText: a().bool
            };
            const ko = (0, Gt.Z)(Zn);
            var Fo = c(1263),
                Rt;

            function ft(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var En = b.ZP.div.withConfig({
                    displayName: "error-message__ErrorMessageWrapper",
                    componentId: "sc-1qs1k8z-0"
                })(Rt || (Rt = ft([`
  `, `;
  `, `;
  `, `
`])), e => e.isFullWidth && "width: 100%;", e => e.centered && "text-align: center", e => e.isErrorIgnorable && `
    position: static;
    margin-bottom: `.concat(2 * Je.bf, `px;
  `)),
                Lo = e => {
                    var {
                        centered: t,
                        errorMessageRef: r,
                        id: o,
                        message: v,
                        visible: f = !1,
                        isErrorIgnorable: g,
                        isFullWidth: m = !0,
                        prefersReducedMotion: p = !1
                    } = e;
                    return f ? i.createElement(q.ZP, {
                        isVisible: !0,
                        shouldOverrideVisibility: !0,
                        type: p ? "fadeIn" : "slideUp"
                    }, i.createElement(En, {
                        centered: t,
                        isErrorIgnorable: g,
                        isFullWidth: m
                    }, i.createElement(Fo.Z, {
                        dataQa: "error-message-visible",
                        id: o,
                        message: v,
                        errorMessageRef: r,
                        role: "alert",
                        visible: !0
                    }))) : null
                };
            const hr = Lo;
            var ga = c(77124),
                dn = c(21203),
                ha = c(44487),
                No = c(47836),
                ll = "center",
                qr = "bottom",
                ta = c(65199),
                ya = c(69273),
                en = c(25432),
                Ma;

            function sl(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var _a = b.ZP.div.withConfig({
                    displayName: "footer-wrapperstyles__FooterWrapper",
                    componentId: "sc-12dpj1x-0"
                })(Ma || (Ma = sl([`
  position: absolute;
  opacity: inherit;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
`]))),
                Za, Va, Ya, Ua, ra;

            function Vn(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var na = (0, b.ZP)(_a).withConfig({
                    displayName: "mobile-footerstyles__MobileFooterWrapper",
                    componentId: "sc-12orp0-0"
                })(Za || (Za = Vn([`
  padding: `, `px;
  padding-bottom: `, `px;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  position: fixed;
`])), Je.bf * 2, Je.bf * 1.5),
                Ha = b.ZP.div.withConfig({
                    displayName: "mobile-footerstyles__ButtonWrapper",
                    componentId: "sc-12orp0-1"
                })(Va || (Va = Vn([`
  display: flex;
  justify-content: space-between;
  flex: 1;
`]))),
                ct = b.ZP.a.withConfig({
                    displayName: "mobile-footerstyles__BrandingWrapper",
                    componentId: "sc-12orp0-2"
                })(Ya || (Ya = Vn([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: `, `px;
  font-family: `, `;
  text-decoration: none;
`])), 1.5 * Je.bf, Je.Le),
                Mo = b.ZP.div.withConfig({
                    displayName: "mobile-footerstyles__BackButtonWrapper",
                    componentId: "sc-12orp0-3"
                })(Ua || (Ua = Vn([`
  margin-right: `, `px;
  border-radius: `, `px;
  `, `
`])), .5 * Je.bf, .5 * Je.bf, e => {
                    var {
                        bgColor: t
                    } = e;
                    return t && "background-color: ".concat(t)
                }),
                _o = b.ZP.div.withConfig({
                    displayName: "mobile-footerstyles__TypeformLogoWrapper",
                    componentId: "sc-12orp0-4"
                })(ra || (ra = Vn([`
  height: `, `px;
  width: `, `px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: `, `px;
  border-bottom: 1px solid `, `;
`])), 2.25 * Je.bf, 8 * Je.bf, .5 * Je.bf, e => {
                    var {
                        underlineColor: t
                    } = e;
                    return t
                }),
                Zo = 115,
                _t = "typeform-footer",
                aa = "https://www.typeform.com/explore/",
                ba = () => {
                    var e, t = (0, le.T)(),
                        r = (0, le.C)(wn.bQ),
                        o = (0, le.C)(ya.KM),
                        v = () => {
                            t((0, Me.JD)(_t))
                        },
                        f = (0, le.C)(Z.dF),
                        g = (0, le.C)(w.tK),
                        m = (0, le.C)(De => (0, w.Fx)(De, g)),
                        p = (0, le.C)(De => (0, O.qm)(De, g)),
                        h = (0, le.C)(O.Lh),
                        P = (0, le.C)(O.I6),
                        T = (0, le.C)(Kr.eH),
                        x = (0, le.C)(w.fG),
                        V = (0, I.T)() && h,
                        ne = !(0, le.C)(Y.oo),
                        U = !(0, w.lv)(m),
                        L = (0, le.C)(w.iN),
                        z = (0, le.C)(Z.gh),
                        ee = (0, le.C)(O.qC),
                        G = (0, le.C)(Pn.il),
                        {
                            t: ae
                        } = (0, he.I4)(),
                        $ = U && !p ? Mn.Z : null,
                        Q = De => {
                            t((0, ce.AB)(qr)), t((0, K.R2)(De))
                        },
                        N = De => {
                            t((0, we.UC)(g, De, {
                                source: ta.b,
                                isFromPrefilledAnswer: !1
                            }))
                        },
                        ve = De => {
                            t((0, ce.PQ)({
                                navigationType: (0, kt.G)(De)
                            }))
                        },
                        fe = P ? void 0 : G(aa, _t),
                        ye = (0, I.Vv)(f) ? "black" : "white";
                    return i.createElement(q.ZP, {
                        type: "fadeIn",
                        isVisible: ne,
                        duration: en.Z ? 0 : 500,
                        delay: en.Z ? 0 : 300
                    }, i.createElement(na, null, i.createElement(ga.Z, {
                        bgColor: f,
                        blur: 1.5
                    }), i.createElement(Ha, null, r && i.createElement(Mo, {
                        bgColor: z.colors.button
                    }, i.createElement(ha.ZP, {
                        color: z.colors.button,
                        contentColor: z.colors.buttonContent,
                        contextBackgroundColor: z.colors.background,
                        disabled: !o,
                        "data-tracking": "footer_arrow_left",
                        iconButton: !0,
                        iconSvg: No.Z,
                        onClick: ve,
                        isHoverable: !1,
                        size: "large",
                        transparent: !1,
                        dataQa: "mobile-footer-back-button"
                    })), p ? i.createElement(ko, {
                        centered: !0,
                        fullWidth: !0,
                        hasMargins: !1,
                        helperText: "",
                        isComplete: L.isComplete,
                        isLivePreview: P,
                        isPaymentBlockAnswered: T,
                        isSubmitting: L.isSubmitting,
                        onClick: Q,
                        price: x,
                        size: "large",
                        t: ae,
                        theme: z
                    }) : i.createElement(ha.ZP, {
                        isHoverable: !1,
                        fullWidth: !0,
                        onClick: N,
                        iconSvg: $,
                        size: "large",
                        color: z.colors.button,
                        contentColor: z.colors.buttonContent,
                        contextBackgroundColor: z.colors.background,
                        transparent: z.hasTransparentButton,
                        dataQa: "mobile-footer-next-button"
                    }, ae((e = m == null ? void 0 : m.buttonText) !== null && e !== void 0 ? e : "label.button.next"))), ee && !V && i.createElement(ct, {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: fe,
                        onClick: v
                    }, i.createElement("span", {
                        "data-qa": "mobile-footer-brand-button"
                    }, i.createElement(Xr.ZP, {
                        fontWeight: "regular",
                        htmlTag: "span",
                        responsive: !1,
                        size: "sizeN1",
                        color: ye
                    }, "Powered by")), i.createElement(Ft.Z, {
                        left: .5
                    }), i.createElement(_o, {
                        underlineColor: ye
                    }, i.createElement(dn.Z, {
                        color: ye
                    })))))
                };
            const Vo = ba;
            var Yo = e => {
                var {
                    color: t,
                    warningText: r,
                    actionText: o
                } = e;
                return i.createElement(Xr.ZP, {
                    color: t,
                    size: "sizeN1",
                    useDefaultFont: !0,
                    dimmed: !0
                }, r, " - ", i.createElement("a", {
                    href: "https://www.typeform.com/help/a/report-abuse-360034113252/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, o))
            };
            const On = Yo;
            var An, Yn;

            function Dn() {
                return Dn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Dn.apply(this, arguments)
            }

            function Ka(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function za(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Ka(Object(r), !0).forEach(function(o) {
                        Uo(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ka(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function Uo(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Wa(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Ga = b.ZP.div.withConfig({
                    displayName: "block-footer__Root",
                    componentId: "sc-1upe4h2-0"
                })(An || (An = Wa([`
  position: relative;
`]))),
                oa = b.ZP.div.withConfig({
                    displayName: "block-footer__SubmitButtonFooter",
                    componentId: "sc-1upe4h2-1"
                })(Yn || (Yn = Wa([`
  width: 100%;
`]))),
                Lr = La() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
                Ho = e => {
                    var t, r, o, v, f, g, m, {
                            answer: p,
                            application: h,
                            ariaDescribedBy: P,
                            blockError: T,
                            blockRef: x,
                            buttonText: V,
                            errorMessageId: ne = "",
                            errorMessageRef: U,
                            hasFormFooter: L,
                            hideHelperText: z,
                            hideIcon: ee,
                            isActive: G,
                            isAnimated: ae,
                            isButtonFullWidth: $,
                            isButtonTypeSubmit: Q,
                            isButtonVisible: N,
                            isErrorMessageVisible: ve,
                            isLivePreview: fe,
                            isPaymentBlockAnswered: ye,
                            isSubmitButtonVisibilityForced: De,
                            layout: Le,
                            layoutItemsSize: J,
                            onClick: re,
                            onFocusLost: M,
                            onRequireStickyFooter: k,
                            price: Re,
                            showPhishingMessage: Se,
                            submit: Ke,
                            submitErrorMessageId: _e,
                            submitErrorMessageKey: Te,
                            submitForm: D,
                            theme: oe,
                            trackInlineSubmit: st,
                            isErrorIgnorable: ot,
                            isFooterRedesignExperiment: mt,
                            isPulseSurveyActive: xe
                        } = e,
                        me = (0, i.useRef)(null),
                        Ce = (0, i.useContext)($t),
                        bt = (0, qn.RF)(x),
                        Lt = (0, dt.T)(),
                        [_, Ue] = (0, i.useState)(!1),
                        Ne = (0, Oe.Gc)(),
                        {
                            t: it
                        } = (0, he.I4)(),
                        Ht = (0, I.T)() && mt,
                        lr = (0, ue.qe)(oe == null || (t = oe.fields) === null || t === void 0 ? void 0 : t.alignment, Le == null ? void 0 : Le.type),
                        rr = lr === ue.aj.CENTER,
                        pr = $ || rr,
                        ut = (0, i.useCallback)(() => {
                            if (!!me.current) {
                                var Qt = In(me.current, za(za({}, J), {}, {
                                        offsetBottom: L ? 0 : -me.current.offsetHeight
                                    })),
                                    gn = !Ce && N && G && !Qt && (!h || Ne === "sm" && !!h && !!(p != null && p.length));
                                k && k(x, gn)
                            }
                        }, [p, h, Ne, Ce, N, G, x, me, J, k]);
                    (0, i.useEffect)(() => {
                        var Qt, gn = () => {
                            Qt = setTimeout(ut, 200)
                        };
                        return window.addEventListener("resize", gn), () => {
                            clearTimeout(Qt), window.removeEventListener("resize", gn)
                        }
                    }, [ut]), (0, gr.Z)(() => {
                        ut()
                    }, [ut, bt]), (0, i.useEffect)(() => {
                        var Qt = setTimeout(() => ut(), 1500);
                        return () => clearTimeout(Qt)
                    }, []), (0, i.useEffect)(() => {
                        var Qt;
                        return N ? Qt = setTimeout(() => {
                            Ue(Q)
                        }, 200) : Ue(!1), () => clearTimeout(Qt)
                    }, [Q, N]), (0, i.useEffect)(() => {
                        G && N && Q && (st == null || st(x))
                    }, [G, N, Q]);
                    var be = N && Q,
                        lt = N && !Q,
                        Nt = (0, i.useRef)(null),
                        Kt = (0, i.useRef)(null);
                    (0, i.useEffect)(() => {
                        var Qt = null;
                        return De && (0, I.T)() && be && (Qt = setTimeout(() => {
                            var gn;
                            return Kt == null || (gn = Kt.current) === null || gn === void 0 ? void 0 : gn.focus()
                        }, Ct.Ml + 100)), () => clearTimeout(Qt)
                    }, [De, be]); {
                        var Rr = (0, i.useRef)(be),
                            Ar = (0, i.useRef)(lt),
                            Jn = Kt.current === document.activeElement,
                            Fa = Nt.current === document.activeElement,
                            Xt = Rr.current && !be && Jn,
                            mr = Ar.current && !lt && Fa;
                        !Ce && (Xt || mr) && M && M(), Rr.current = be, Ar.current = lt
                    }
                    var Nr = (T == null ? void 0 : T.getPipingValues()) || {};
                    return i.createElement(Ga, null, i.createElement(Fr.Z, {
                        top: Je.M6.topBlockFooter
                    }, i.createElement(hr, {
                        centered: rr,
                        errorMessageRef: U,
                        id: ne,
                        isErrorIgnorable: ot,
                        isFullWidth: !Ht,
                        message: (0, or.Z)(it && it(T == null ? void 0 : T.label, Nr)),
                        prefersReducedMotion: Lt,
                        visible: ve
                    }), Ht ? i.createElement(Ft.Z, {
                        top: xe ? 0 : Zo / Je.bf
                    }) : i.createElement("div", {
                        ref: me,
                        "data-qa-button-visible": !!N
                    }, be && i.createElement(oa, null, i.createElement(q.ZP, {
                        type: "slideUp",
                        isVisible: be,
                        delay: N && !_ ? Ct.Ml : 0,
                        duration: ae ? Ct.Ml : 0
                    }, i.createElement(i.Fragment, null, i.createElement(Sr.ZP, {
                        position: pr ? "center" : "start"
                    }, i.createElement(Zn, {
                        ariaDescribedBy: P,
                        centered: pr,
                        fullWidth: $,
                        helperText: Lr,
                        isComplete: Ke == null ? void 0 : Ke.isComplete,
                        disabled: !be,
                        isLivePreview: fe,
                        isPaymentBlockAnswered: ye,
                        isSubmitting: Ke == null ? void 0 : Ke.isSubmitting,
                        isVisible: N,
                        onClick: D,
                        price: Re,
                        size: "medium",
                        t: it,
                        theme: oe,
                        buttonRef: Kt,
                        hideHelperText: z
                    })), i.createElement(Ft.Z, {
                        top: 2
                    }, _ && Se && !(Ke != null && Ke.retry.showMessage) && !Te && it && i.createElement(Sr.ZP, {
                        position: pr ? "center" : "start"
                    }, i.createElement(On, {
                        color: oe == null || (r = oe.colors) === null || r === void 0 ? void 0 : r.primary,
                        warningText: it("label.warning.phishing", Nr),
                        actionText: it("label.action.phishing", Nr)
                    })), (Ke == null ? void 0 : Ke.retry.showMessage) && i.createElement(Na, {
                        centered: rr,
                        color: oe == null || (o = oe.colors) === null || o === void 0 ? void 0 : o.primary,
                        count: (Ke == null ? void 0 : Ke.retry.count) - 1,
                        timeout: Ke == null ? void 0 : Ke.retry.timeout
                    }), !!Te && it && i.createElement(hr, {
                        centered: rr,
                        errorMessageRef: U,
                        id: _e,
                        prefersReducedMotion: Lt,
                        message: (0, or.Z)(it(Te, Nr)),
                        visible: !!Te
                    }))))), lt && i.createElement(q.ZP, {
                        type: "slideUp",
                        isVisible: lt,
                        delay: N && _ ? Ct.Ml : 0,
                        duration: ae ? Ct.Ml : 0
                    }, i.createElement(ma, {
                        ariaDescribedBy: P,
                        backgroundColor: oe == null || (v = oe.colors) === null || v === void 0 ? void 0 : v.background,
                        buttonColor: oe == null || (f = oe.colors) === null || f === void 0 ? void 0 : f.button,
                        buttonContentColor: oe == null || (g = oe.colors) === null || g === void 0 ? void 0 : g.buttonContent,
                        centered: rr,
                        helperColor: oe == null || (m = oe.colors) === null || m === void 0 ? void 0 : m.primary,
                        helperText: "label.buttonHint.default",
                        hideIcon: ee,
                        disabled: !lt,
                        isVisible: N,
                        label: V,
                        onClick: re,
                        t: it,
                        buttonRef: Nt,
                        hideHelperText: z
                    })))))
                },
                $a = e => i.createElement(Oe.d7, null, t => {
                    var {
                        width: r
                    } = t, o = r < Je.fl.md, v = o && !e.isLivePreview;
                    return i.createElement(Ho, Dn({
                        isButtonFullWidth: v
                    }, e))
                });
            const ia = $a;
            var Ko = (e, t) => {
                    var {
                        blockRef: r,
                        errorMessageId: o,
                        errorMessageRef: v,
                        hideHelperText: f,
                        isErrorMessageVisible: g,
                        isErrorIgnorable: m,
                        hideButton: p
                    } = t, h = (0, w.Fx)(e, r), P = (0, R.ZO)(e, r), T = (0, O.qs)(e), x = P || (0, O.Cf)(e, r);
                    return {
                        errorMessageId: o,
                        errorMessageRef: v,
                        hideHelperText: f != null ? f : (0, W.Ky)(h),
                        isActive: (0, w.$8)(e, r),
                        isButtonTypeSubmit: (0, O.qm)(e, r),
                        isErrorMessageVisible: g,
                        isLivePreview: (0, O.I6)(e),
                        isSubmitButtonVisibilityForced: (0, O.k$)(e),
                        isPaymentBlockAnswered: (0, Kr.eH)(e),
                        isFooterRedesignExperiment: (0, wn.fw)(e),
                        isButtonVisible: (!g || m) && !p && !T && x,
                        price: (0, w.fG)(e),
                        showPhishingMessage: (0, Pn.z_)(e),
                        submit: (0, w.iN)(e),
                        submitErrorMessageId: "".concat(r, "-submission-error-message"),
                        submitErrorMessageKey: (0, Xn.FN)(e),
                        theme: (0, Z.gh)(e),
                        isPulseSurveyActive: (0, ze.jO)(e)
                    }
                },
                zo = {
                    onRequireStickyFooter: Bt,
                    trackInlineSubmit: jr.zR
                };
            const er = (0, We.$j)(Ko, zo)(ia);
            var Qa = c(77557),
                Wo = c(63842),
                Ea = c(69103),
                Wr = c(96105),
                Ja = c(77516),
                Xa = c(11157),
                la = c(76396);

            function Go() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return o => {
                    t.forEach(v => {
                        if (!!v) {
                            if (typeof v == "function") {
                                v(o);
                                return
                            }
                            v.current = o
                        }
                    })
                }
            }
            var cl = null,
                ul = null,
                qa = {
                    language: "en",
                    hideNavigation: !1,
                    isPublic: !0,
                    isTrial: !1,
                    showProgressBar: !0,
                    showTypeformBranding: !0,
                    areUploadsPublic: !0,
                    showTimeToComplete: !0,
                    showNumberOfSubmissions: !1,
                    showCookieConsent: !1,
                    showQuestionNumber: !0,
                    proSubdomainEnabled: !0,
                    enabled: !0,
                    modifiable: !1
                },
                Oa = {
                    colors: {
                        primary: "#000000",
                        secondary: "#0445AF",
                        button: "#0445AF",
                        buttonContent: "#FFFFFF",
                        background: "#FFFFFF"
                    },
                    hasTransparentButton: !1,
                    font: "System font",
                    fontName: "System font",
                    fontStack: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                    fields: {
                        alignment: "left",
                        fontSize: "medium"
                    },
                    screens: {
                        alignment: "center",
                        fontSize: "medium"
                    }
                },
                dl = {
                    id: "defaultId",
                    fields: [],
                    theme: Oa,
                    settings: qa
                },
                vl = {
                    ref: "ws-ref",
                    title: "Welcome",
                    showButton: !0,
                    buttonLabel: "Start"
                },
                fl = {
                    ref: "default_tys",
                    title: `Thanks for completing this typeform
Now *create your own* \u2014 it's free, easy, & beautiful`,
                    type: "thankyou_screen",
                    showButton: !0,
                    buttonLabel: "Create a Typeform"
                },
                $o = c(38832),
                Cn = c(30202),
                Ca = c(29567),
                Qo = c(20534),
                Jo = ['area[href]:not([tabindex^="-"])', 'input:not([type="hidden"]):not([disabled]):not([tabindex^="-"])', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', 'a[href]:not([tabindex^="-"])', 'iframe:not([tabindex^="-"])', 'audio[controls]:not([tabindex^="-"])', 'video[controls]:not([tabindex^="-"])', '[contenteditable]:not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])'];

            function Xo(e) {
                return typeof window == "undefined" || typeof document == "undefined" || typeof e.contains != "function" ? !1 : e === document.activeElement || e.contains(document.activeElement)
            }
            var qo = (e, t) => {
                    var r = Jo.join(",");
                    if (e.matches(r)) return e;
                    if (t) {
                        var o = Array.from(e.querySelectorAll(r));
                        return o.find(v => !v.hasAttribute("href"))
                    }
                    return e.querySelector(r)
                },
                eo = (e, t) => {
                    var r = Xo(e);
                    if (!r) {
                        var o = qo(e, t);
                        return o != null ? o : document.body
                    }
                },
                to = function(t) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    if (!!t) {
                        var o = () => t == null ? void 0 : t.focus();
                        if (r === 0) {
                            o();
                            return
                        }
                        setTimeout(o, r)
                    }
                },
                ro = e => e ? !!e.querySelectorAll(":focus").length : !1,
                ei = function(t) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                    if (!!t) {
                        var v = () => {
                            var f = eo(t, o);
                            f == null || f.focus()
                        };
                        if (r === 0) {
                            v();
                            return
                        }
                        setTimeout(v, r)
                    }
                };
            const Pr = ei;
            var wr = c(53120),
                Sa = c(21874),
                ti = e => e.portal || Sa.E3,
                ri = (0, wr.P1)(ti, e => e.isActive),
                no, ao;

            function oo(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Pa = 200,
                ni = "easeOutCubic",
                ai = 30,
                sa = 30,
                io = 32,
                oi = b.ZP.div.withConfig({
                    displayName: "block-scroller__Root",
                    componentId: "sc-1nqcj0x-0"
                })(no || (no = oo([`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  &:focus {
    outline: none;
  }
`]))),
                ii = b.ZP.div.withConfig({
                    displayName: "block-scroller__Positioner",
                    componentId: "sc-1nqcj0x-1"
                })(ao || (ao = oo([`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`]))),
                lo = e => e ? e.scrollTop + sa >= e.scrollHeight - e.clientHeight : !1,
                wa = e => e ? e.scrollTop - ai <= 0 : !1,
                li = e => {
                    var t, {
                            blockRef: r,
                            blockRootRef: o,
                            blockHeightChanging: v,
                            children: f,
                            counterContent: g,
                            focusOnContainer: m,
                            isActive: p,
                            isFieldset: h,
                            onRequireStickyHeader: P,
                            isScrollNearTop: T,
                            scrolling: x,
                            isScrollTop: V,
                            endAutoScroll: ne = te.Z,
                            onKeyDown: U = te.Z,
                            onChangeCanSwipe: L = te.Z,
                            onScroll: z = te.Z,
                            titleText: ee,
                            required: G,
                            t: ae,
                            uniqueId: $,
                            blockContentRef: Q,
                            canAutoFocus: N,
                            delayFocus: ve,
                            autoFocusableElement: fe,
                            layoutType: ye,
                            additionalHeight: De = 0,
                            canScrollAndSwipe: Le = !0
                        } = e,
                        J = (0, Oe.Gc)(),
                        [re, M] = (0, i.useState)(void 0),
                        k = (0, i.useRef)(null),
                        Re = (0, i.useRef)(null),
                        Se = (0, le.C)(Qo.mR),
                        Ke = (0, i.useContext)($t),
                        _e = (0, qn.YO)(r),
                        Te = (0, le.C)(ri),
                        D = () => {
                            if (!(!k.current || !Le)) {
                                p && (L({
                                    next: lo(k.current),
                                    previous: wa(k.current)
                                }), z());
                                var {
                                    scrollTop: ot
                                } = k.current;
                                _e(ot), ot > io && T ? P(!0) : ot <= io && !T && P(!1)
                            }
                        },
                        oe = () => {
                            wa(k.current) || !k.current || (k.current.scrollTop = 0)
                        };
                    (0, i.useEffect)(() => {
                        V && oe()
                    }, [V]), (0, i.useEffect)(() => {
                        !p && !Ke && oe()
                    }, [Ke, p]), (0, i.useEffect)(() => {
                        !k.current || p && Le && L({
                            next: lo(k.current),
                            previous: wa(k.current)
                        })
                    }, [p]), (0, i.useEffect)(() => {
                        if (p && x && x.scrollType === "recenter" && x.anchor === "bottom" && k.current) {
                            var ot = en.Z ? 0 : Pa;
                            (0, Cn.ZP)(k.current, "scrollTop", k.current.scrollHeight - k.current.clientHeight, ot, ni, ne)
                        }
                    }, [x]);
                    var st = Q == null || (t = Q.current) === null || t === void 0 ? void 0 : t.clientHeight;
                    return (0, i.useEffect)(() => {
                        V && oe();
                        var ot = setTimeout(() => {
                            p && o !== null && o !== void 0 && o.current && v(o.current.clientHeight + De)
                        }, Pa / 2);
                        return () => {
                            clearInterval(ot)
                        }
                    }, [p, o]), (0, i.useEffect)(() => {
                        var ot, mt;
                        if (M(void 0), !(!k.current || !st || !p || Se || !N || Te)) {
                            var xe = (0, I.T)() && J === "sm",
                                me = ye ? (0, Ca.ci)(J, ye) * Je.bf : 0,
                                Ce = st + me > k.current.clientHeight,
                                bt = (fe == null || (ot = fe.getBoundingClientRect()) === null || ot === void 0 ? void 0 : ot.top) && (fe == null || (mt = fe.getBoundingClientRect()) === null || mt === void 0 ? void 0 : mt.top) > k.current.clientHeight,
                                Lt = fe ? bt : !!Ce,
                                _ = !ro(k.current) && (m || xe || Lt),
                                Ue = !Ke && !ro(k.current);
                            if (!(!_ && !Ue)) {
                                if (_) {
                                    M(0), to(k.current, ve);
                                    return
                                }
                                if (fe) {
                                    M(0), to(fe, ve);
                                    return
                                }
                                Pr(k.current, ve)
                            }
                        }
                    }, [fe, N, st, ve, p, Ke, Se, Te]), i.createElement(oi, {
                        key: "block-scroller",
                        "data-qa": "block-scroller",
                        onScroll: D,
                        onKeyDown: U,
                        ref: k,
                        tabIndex: re,
                        "aria-labelledby": h ? (0, yt._d)($) : void 0
                    }, h && i.createElement(Nn.Z, {
                        id: (0, yt._d)($)
                    }, g && ae("a11y.label.question", {
                        number: g
                    }), ee, G && ae("a11y.label.required")), i.createElement(ii, {
                        ref: Re
                    }, f))
                };
            const si = li;
            var Ta = e => {
                var {
                    children: t,
                    htmlFor: r,
                    id: o,
                    htmlTag: v,
                    required: f,
                    t: g,
                    announceTitle: m
                } = e, p = ["div", "span", "legend"].includes(v), h = f && i.createElement(Nn.Z, null, g("a11y.label.required"));
                return i.createElement(Wr.ZP, {
                    "aria-live": m ? "polite" : "off",
                    type: Je.jA.blockTitle,
                    htmlTag: v === "legend" ? "span" : v,
                    htmlFor: v === "label" ? r : null,
                    "data-qa": "block-title deep-purple-block-title",
                    role: p ? "heading" : null,
                    "aria-level": p ? 2 : null,
                    id: o
                }, t, h)
            };
            Ta.defaultProps = {
                htmlTag: "span",
                required: !1,
                ariaLive: "off"
            }, Ta.propTypes = {
                children: a().any,
                htmlFor: a().string,
                htmlTag: a().string,
                id: a().string,
                announceTitle: a().bool,
                required: a().bool,
                t: a().func.isRequired
            };
            const ci = Ta;

            function Un() {
                return Un = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Un.apply(this, arguments)
            }
            var so = i.forwardRef((e, t) => {
                var r, o, v, f, g, m, p, h, {
                        application: P,
                        attachment: T,
                        isBlockListVisible: x,
                        blockRef: V,
                        blockHeightChanging: ne = te.Z,
                        children: U,
                        description: L,
                        encryptable: z,
                        endAutoScroll: ee,
                        hasBranding: G,
                        hasNavigationArrows: ae,
                        hasProgress: $,
                        isActive: Q,
                        isAnswered: N,
                        isScrollNearTop: ve,
                        isScrollTop: fe,
                        isShaking: ye,
                        canAutoFocus: De,
                        delayFocus: Le = 0,
                        layout: J,
                        listIndexText: re,
                        onChangeCanSwipe: M,
                        onKeyDown: k,
                        onRequireStickyHeader: Re = te.Z,
                        onScroll: Se = te.Z,
                        scrolling: Ke,
                        t: _e = xo => xo,
                        theme: Te = Oa,
                        titleLabelId: D,
                        titleFor: oe,
                        titleTag: st,
                        titleText: ot,
                        titleCounterIcon: mt = Ea.u.ARROW,
                        type: xe,
                        uniqueId: me,
                        validations: Ce = {},
                        isVideoPlaying: bt,
                        onVideoClick: Lt,
                        focusOnContainer: _ = !1,
                        autoFocusableElement: Ue
                    } = e,
                    Ne = (0, i.useRef)(null),
                    it = (0, i.useRef)(null),
                    Ht = (0, i.useRef)(null),
                    [lr, rr] = (0, i.useState)(0),
                    pr = (0, Oe.Gc)(),
                    ut = (0, le.C)(Z.Tw),
                    be = (0, le.C)(w.rJ),
                    lt = (0, le.C)(O.BA),
                    Nt = (0, le.C)(Dt.Fe),
                    Kt = (0, le.C)(ze.jO),
                    Rr = st === "legend",
                    Ar = J == null ? void 0 : J.type,
                    Jn = J == null ? void 0 : J.placement;
                P && (Ar = ue.BB.SPLIT, Jn = ue.$y.RIGHT, pr === "sm" && (Ar = ue.BB.WALLPAPER));
                var Fa = Ar === ue.BB.STACK,
                    Xt = Fa ? T : J == null ? void 0 : J.attachment,
                    mr = (r = Xt == null || (o = Xt.properties) === null || o === void 0 ? void 0 : o.focalPoint) !== null && r !== void 0 ? r : ue.HY,
                    Nr = (0, ue.qe)((v = Te.fields) === null || v === void 0 ? void 0 : v.alignment, Ar),
                    Qt = (0, i.useMemo)(() => ut && Ar !== ue.BB.SPLIT, [Ar, ut]);
                (0, i.useEffect)(() => {
                    if (!!it.current) {
                        rr(it.current.clientHeight);
                        var xo = () => {
                            it.current && rr(it.current.clientHeight)
                        };
                        return window.addEventListener("resize", xo, !0), () => window.removeEventListener("resize", xo, !0)
                    }
                }, [(f = it.current) === null || f === void 0 ? void 0 : f.clientHeight]);
                var gn = "header-counter-".concat(V),
                    ld = x && (Q || !(0, I.T)()),
                    Is = (0, la.yF)(be, V) && !!re,
                    il = Is ? "".concat(re, ".") : re,
                    sd = {
                        counterId: gn,
                        counterIcon: Is ? null : mt,
                        counterColor: Te == null || (g = Te.colors) === null || g === void 0 ? void 0 : g.secondary,
                        counterContent: il
                    },
                    cd = !window.location.search.match(/typeform-embed-disable-scroll=true/i);
                return i.createElement(Wo.Z, {
                    layoutType: Ar,
                    breakpoint: pr,
                    dataQa: "blocktype-".concat(xe, " deep-purple-blocktype-").concat(xe),
                    hasTransition: !0,
                    id: V,
                    isActive: Q,
                    isAnswered: N,
                    isShaking: Q && ye,
                    isVisible: ld,
                    ref: Go(t, it),
                    layoutPlacement: Jn
                }, i.createElement(si, Un({
                    blockRef: V,
                    blockHeightChanging: ne,
                    endAutoScroll: ee,
                    isActive: Q,
                    onChangeCanSwipe: M,
                    onRequireStickyHeader: Re,
                    onScroll: Se,
                    onKeyDown: k,
                    isFieldset: Rr,
                    isScrollNearTop: ve,
                    isScrollTop: fe,
                    scrolling: Ke,
                    focusOnContainer: _,
                    required: Ce == null ? void 0 : Ce.required,
                    t: _e,
                    titleText: ot,
                    uniqueId: me
                }, lt ? {
                    counterContent: il
                } : {}, {
                    blockContentRef: Ne,
                    canAutoFocus: De,
                    delayFocus: Le,
                    autoFocusableElement: Ue,
                    layoutType: Ar,
                    blockRootRef: Ht,
                    additionalHeight: Qt ? 4.5 * 8 : 0,
                    canScrollAndSwipe: cd
                }), Qt && i.createElement(Ft.Z, {
                    top: 4.5
                }), i.createElement(Qa.Z, Un({
                    application: P,
                    attachmentFocalPoint: mr,
                    attachmentHref: Xt == null ? void 0 : Xt.href,
                    attachmentType: Xt == null ? void 0 : Xt.type,
                    attachmentScale: Xt == null ? void 0 : Xt.scale,
                    attachmentAlt: Xt == null || (m = Xt.properties) === null || m === void 0 ? void 0 : m.description,
                    hasAttachmentFixedHeight: (0, $o.F)(),
                    breakpoint: pr,
                    description: L && i.createElement(Wr.ZP, {
                        align: Nr,
                        type: Je.jA.blockDescription,
                        color: Te == null || (p = Te.colors) === null || p === void 0 ? void 0 : p.primary,
                        htmlTag: "p",
                        dataQa: "block-description"
                    }, L),
                    enableAnimation: Nt,
                    hasBranding: G,
                    hasNavigationArrows: ae,
                    hasProgress: $,
                    isActive: Q,
                    isFieldset: Rr,
                    layoutType: Ar,
                    pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                    outerHeight: lr,
                    removeTopBottonMargins: Kt,
                    required: Ce == null ? void 0 : Ce.required,
                    textAlign: Nr,
                    title: i.createElement(Ea.Z, Un({
                        title: i.createElement(ci, {
                            required: Ce == null ? void 0 : Ce.required,
                            t: _e,
                            id: D,
                            htmlFor: oe,
                            htmlTag: st
                        }, ot),
                        color: Te == null || (h = Te.colors) === null || h === void 0 ? void 0 : h.primary,
                        required: Ce == null ? void 0 : Ce.required,
                        textAlign: Nr
                    }, lt ? sd : {})),
                    isVideoPlaying: bt,
                    onVideoClick: Lt
                }, lt ? {
                    counterContent: il
                } : {}, {
                    blockContentRef: Ne,
                    rootRef: Ht
                }), z && i.createElement(Sr.ZP, {
                    align: "center",
                    space: 1
                }, i.createElement(Xa.Z, {
                    color: Te.colors.secondary,
                    svg: Ja.Z
                }), i.createElement(Xr.ZP, {
                    color: Te.colors.secondary
                }, _e("block.content.encrypted"))), U)))
            });
            so.displayName = "BlockWrapper";
            const Tr = so;
            var tn = c(21785),
                St = c(1513),
                vn = c(32327),
                ca = c(21176);

            function Ia() {
                return Ia = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Ia.apply(this, arguments)
            }

            function co(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function Hn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? co(Object(r), !0).forEach(function(o) {
                        ui(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : co(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function ui(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var Ra = e => {
                var {
                    abTests: t,
                    application: r,
                    applicationInfo: o,
                    blockIndex: v,
                    disableNavigation: f,
                    enableNavigation: g,
                    featureFlags: m,
                    field: p,
                    hasBranding: h,
                    hasDescription: P,
                    hasNavigationArrows: T,
                    hasProgress: x,
                    iframeUrl: V,
                    isActive: ne,
                    isCommitted: U,
                    isFirstBlock: L,
                    isValid: z,
                    language: ee,
                    layout: G,
                    layoutItemsSize: ae,
                    onCommitAnswer: $,
                    onInputBlur: Q,
                    onInputFocus: N,
                    onStageAnswer: ve,
                    recenter: fe,
                    submitForm: ye,
                    t: De,
                    theme: Le,
                    title: J,
                    uniqueId: re,
                    validationError: M,
                    value: k
                } = e, [Re, Se, Ke] = (0, vn.Z)(Ct.Sx), _e = (0, We.I0)(), [Te, D, oe] = (0, vn.Z)(Ct.RB), [st, ot] = (0, i.useState)(null), [mt, xe] = (0, i.useState)(() => (0, W.Ky)(p)), [me, Ce] = (0, i.useState)(!1), bt = (0, We.v9)(O.ti), Lt = (0, We.v9)(Kr.n2), _ = !!(Lt && Lt.code === null), Ue = (0, i.useRef)(null), Ne = Hn(Hn({}, m), t);
                (0, i.useEffect)(() => () => {
                    Ke(), oe()
                }, []), j(ne, (0, i.useCallback)(te.Z, []));

                function it(mr) {
                    xe(mr)
                }

                function Ht(mr) {
                    fe(qr), mr && (f(), _e((0, ca.QW)()))
                }

                function lr(mr) {
                    _e((0, ca.oj)()), mr && g()
                }

                function rr() {
                    N(), (0, I.T)() && fe(qr)
                }

                function pr(mr) {
                    $(p.ref, mr)
                }

                function ut(mr, Nr, Qt) {
                    _e((0, Me.MO)(p.ref, tn.U2, Qt == null ? void 0 : Qt.answerMethod)), ve(p.ref, mr)
                }

                function be(mr, Nr) {
                    var Qt = new St.FU(Nr);
                    Ce(Nr === "microphonePermissionDenied" || Nr === "recognitionError"), Se(mr), D(mr), ot(Qt)
                }
                var lt = (0, yt.$w)(re),
                    Nt = U && !z,
                    Kt = Nt || Te,
                    Rr = Hn(Hn({}, p.validations), {}, {
                        required: (0, qt.q9)(p)
                    }),
                    Ar = (0, yt.w7)({
                        uniqueId: re,
                        isErrorMessageVisible: Kt,
                        hasDescription: P
                    }),
                    Jn = (0, yt._d)(re),
                    Fa = h || T || x;
                (0, i.useEffect)(() => {
                    bt || !Kt || !(Ue != null && Ue.current) || me && Kt || Ue.current.focus()
                }, [Kt, bt]);
                var Xt = me && Kt || !Ue.current;
                return i.createElement(Tr, Ia({}, e, {
                    validations: Rr,
                    titleText: J,
                    titleLabelId: Jn,
                    titleTag: "label",
                    delayFocus: L ? Ct.r$ : 0,
                    isShaking: Re,
                    focusOnContainer: Xt,
                    autoFocusableElement: Ue == null ? void 0 : Ue.current
                }), i.createElement(Sn.TS, {
                    focusableRef: Ue,
                    isActive: ne,
                    answer: k,
                    ariaDescribedBy: Ar,
                    ariaLabelledBy: Jn,
                    validationResult: Kt ? M == null ? void 0 : M.validationResult : [],
                    blockIndex: v,
                    field: p,
                    getCustomMessage: De,
                    iframeUrl: V,
                    locale: ee,
                    onChange: ut,
                    onCommit: pr,
                    theme: Le,
                    applicationInfo: o,
                    featureFlags: Ne,
                    onError: be,
                    onFocus: rr,
                    onBlur: Q,
                    onOpen: Ht,
                    onClose: lr,
                    onHideHelperText: it
                }), i.createElement(er, {
                    answer: k,
                    application: r,
                    blockError: Te ? st : (0, St.lY)(M, p == null ? void 0 : p.type),
                    blockRef: p.ref,
                    errorMessageId: lt,
                    hasFormFooter: Fa,
                    hideHelperText: mt,
                    isErrorMessageVisible: !_ && Kt,
                    layout: G,
                    layoutItemsSize: ae,
                    onClick: pr,
                    submitForm: ye
                }))
            };
            Ra.defaultProps = {
                submitForm: te.Z,
                theme: {
                    colors: {
                        secondary: I.Bb
                    }
                }
            }, Ra.propTypes = {
                abTests: a().object,
                application: a().object,
                applicationInfo: a().object,
                blockIndex: a().number,
                validationResult: a().object,
                disableNavigation: a().func,
                enableNavigation: a().func,
                featureFlags: a().object,
                field: a().object,
                fields: a().array,
                hasHideHelperText: a().bool,
                hasBranding: a().bool,
                hasDescription: a().bool,
                hasNavigationArrows: a().bool,
                hasProgress: a().bool,
                iframeUrl: a().string,
                inlineSubmit: a().func,
                isActive: a().bool,
                isCommitted: a().bool,
                isFirstBlock: a().bool,
                isValid: a().bool,
                language: a().string,
                layout: a().object,
                layoutItemsSize: a().object,
                onCommitAnswer: a().func,
                onInputBlur: a().func,
                onInputFocus: a().func,
                onStageAnswer: a().func,
                recenter: a().func,
                submitForm: a().func,
                t: a().func,
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                uniqueId: a().string.isRequired,
                validationError: a().instanceOf(St.FU),
                value: a().array
            };
            const di = Ra;
            var uo = c(10054),
                vo = (e, t, r) => e === jt.Wu && !(0, E.e9)(r) && !(0, E.r$)(r) && !(0, E.fy)(r) ? (r.preventDefault(), {
                    blocked: !0,
                    error: new St.ZF
                }) : e === jt.Wu && t && t <= r.target.value.length && !(0, E.r$)(r) ? (r.preventDefault(), {
                    blocked: !0,
                    error: new St.FU("maxLength")
                }) : e === jt.mB && t && t <= r.target.value.length && !(0, E.r$)(r) ? (r.preventDefault(), {
                    blocked: !0,
                    error: new St.FU("maxLength")
                }) : e === jt.oP && t && t <= r.target.value.length && !(0, E.r$)(r) ? (r.preventDefault(), {
                    blocked: !0,
                    error: new St.FU("maxLength")
                }) : {
                    blocked: !1
                },
                Aa = (e, t) => {
                    var r = t.nativeEvent || t,
                        o = (0, E.zD)([E.X2, E.LQ, E.r$], r, t.target);
                    (0, E.NC)(r) && (o = !1), jt.Wu === e && (0, E.ho)(t) && t.preventDefault(), o && t.stopPropagation()
                },
                fo = (e, t) => {
                    var r, o = (r = t.clipboardData) === null || r === void 0 ? void 0 : r.types;
                    if (o && (o.contains && o.contains("text/plain") || o.includes("text/plain"))) {
                        var v = "";
                        if (t.clipboardData && (v = t.clipboardData.getData("text/plain")), e && e < v.length) return {
                            blocked: !0,
                            error: new St.FU("maxLength")
                        }
                    }
                    return {}
                },
                po = (e, t) => e.isActive || t.isActive || e.isCommitted !== t.isCommitted || e.layoutItemsSize !== t.layoutItemsSize,
                Bn = (e, t) => !po(e, t);

            function Da() {
                return Da = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Da.apply(this, arguments)
            }
            var Kn = 700,
                Ba = e => {
                    var {
                        blockRef: t,
                        validationError: r,
                        isActive: o,
                        isCommitted: v,
                        isValid: f,
                        layout: g,
                        layoutItemsSize: m,
                        onCommitAnswer: p,
                        onInputBlur: h,
                        onInputFocus: P,
                        onRequireStickyFooter: T,
                        onStageAnswer: x,
                        placeholder: V,
                        submitForm: ne,
                        t: U,
                        theme: L,
                        title: z,
                        type: ee,
                        uniqueId: G,
                        validations: ae,
                        hasDescription: $
                    } = e, Q = (0, Pe.Pg)(), [N, ve, fe] = (0, vn.Z)(Ct.Sx), [ye, De, Le] = (0, vn.Z)(Ct.RB), [J, re] = (0, i.useState)(""), M = (0, i.useRef)(), k = (0, i.useRef)(), Re = (0, i.useMemo)(() => e.value.length > 0 ? e.value[0] : "", [e.value]), [Se, Ke] = (0, i.useState)(Re);
                    (0, i.useEffect)(() => {
                        Re !== Se && Ke(Re)
                    }, [Re]);
                    var _e = M.current === document.activeElement,
                        Te = v && !f,
                        D = Te || ye,
                        oe = (0, yt.w7)({
                            uniqueId: G,
                            isErrorMessageVisible: D,
                            hasDescription: $,
                            hasInputInstructions: !0
                        });
                    (0, i.useEffect)(() => () => {
                        fe(), Le()
                    }, []), (0, i.useEffect)(() => {
                        M.current && (0, Tn.Z)() && (M.current.onclick = st)
                    }, [M]);

                    function st() {
                        Q && (P(), setTimeout(() => {
                            !(0, xt.gn)() && k.current && (k.current.scrollTop = k.current.scrollHeight), M.current && (0, Tn.Z)() && M.current.scrollIntoView({
                                block: "center"
                            })
                        }, Kn))
                    }

                    function ot(_) {
                        var Ue = _e && Q;
                        M.current && Ue && M.current.blur(), _.stopPropagation(), _.persist(), setTimeout(() => {
                            o && p(t, _)
                        }, Ue ? Kn : 0)
                    }

                    function mt(_) {
                        if (!!o) {
                            var Ue = _.target.value;
                            ae.maxLength && (Ue = Ue.slice(0, ae.maxLength)), Ke(Ue), x(t, Ue, _)
                        }
                    }

                    function xe(_) {
                        var {
                            blocked: Ue,
                            error: Ne
                        } = fo(ae.maxLength, _);
                        ve(Ue), De(Ue), re(Ne)
                    }

                    function me(_) {
                        var {
                            blocked: Ue,
                            error: Ne
                        } = vo(ee, ae.maxLength, _);
                        ve(Ue), De(Ue), re(Ne)
                    }
                    var Ce = (0, i.useCallback)(_ => {
                        Aa(ee, _), !Q && (0, E.r$)(_) && !(0, E.KL)(_) && !(0, E.tk)(_) && (_.preventDefault(), o && p(t, _))
                    }, [t, o, p, ee]);
                    j(o, Ce);

                    function bt(_) {
                        if (!!k.current) {
                            var Ue = _.target.value,
                                Ne = Ue.split(`
`).length,
                                it = Ue.substr(0, _.target.selectionStart).split(`
`).length,
                                Ht = Ne - it <= 3;
                            Ht && o && !(0, xt.gn)() && (k.current.scrollTop = k.current.scrollHeight)
                        }
                    }

                    function Lt() {
                        M && M.current && M.current.focus()
                    }
                    return i.createElement(Tr, Da({}, e, {
                        isShaking: N,
                        titleFor: G,
                        titleTag: "label",
                        titleText: z,
                        scrollerRef: k
                    }), i.createElement(uo.Z, {
                        ariaDescribedBy: oe,
                        placeholder: U(V),
                        maxLength: ae.maxLength,
                        onChange: mt,
                        onResize: bt,
                        onKeyDown: Ce,
                        onKeyPress: me,
                        onPaste: xe,
                        onFocus: st,
                        onBlur: h,
                        innerRef: M,
                        id: G,
                        value: Se,
                        color: L.colors.secondary
                    }), !Q && i.createElement(Fr.Z, {
                        top: Je.M6.topHint
                    }, i.createElement(Wr.ZP, {
                        color: L.colors.secondary,
                        fontWeight: "regular",
                        htmlTag: "p",
                        id: (0, yt.Pq)(G),
                        type: Je.jA.answerHint
                    }, (0, or.Z)(U("block.longText.hint")))), i.createElement(er, {
                        buttonColor: L.colors.button,
                        helperColor: L.colors.primary,
                        backgroundColor: L.colors.background,
                        errorMessageId: (0, yt.$w)(G),
                        blockError: ye ? J : r,
                        isErrorMessageVisible: D,
                        onRequireStickyFooter: T,
                        blockRef: t,
                        onClick: ot,
                        layout: g,
                        layoutItemsSize: m,
                        submitForm: ne,
                        onFocusLost: Lt
                    }))
                };
            Ba.defaultProps = {
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                t: te.Z,
                theme: {
                    colors: {
                        backgroundColor: I.Bb,
                        button: I.Bb,
                        primary: I.Bb,
                        secondary: I.Bb
                    }
                },
                validations: {
                    maxLength: null
                },
                value: []
            }, Ba.propTypes = {
                blockRef: a().string.isRequired,
                validationError: a().instanceOf(St.FU),
                index: a().number,
                isActive: a().bool,
                isCommitted: a().bool,
                canAutoFocus: a().bool,
                isValid: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                onCommitAnswer: a().func,
                onInputBlur: a().func,
                onInputFocus: a().func,
                onRequireStickyFooter: a().func,
                onStageAnswer: a().func,
                placeholder: a().string,
                submitForm: a().func,
                t: a().func,
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                type: a().string,
                validations: a().shape({
                    maxLength: a().number
                }),
                value: a().arrayOf(a().string),
                uniqueId: a().string.isRequired,
                hasDescription: a().bool
            };
            const mo = (0, i.memo)(Ba, Bn);
            var zn = c(35291),
                vi = c(32592),
                xn = e => {
                    e.preventDefault(), e.stopPropagation()
                },
                fi = 500,
                go = (e, t, r) => {
                    var {
                        nativeEvent: o
                    } = t;
                    if (o != null && o.inputType) return !1;
                    var v = new Date().getTime();
                    if (e && (e.key && e.key !== "Unidentified" || e.type === "paste") && v - e.timestamp < fi) return !1;
                    var f = t.target.value || "";
                    return !(f === "" || f.length + 1 <= r.length || f.replace(r, "").length < 2)
                },
                xa, ja, ho, yo, bo;

            function Wn(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var ir = "year",
                ur = "month",
                yr = "day",
                pi = {
                    [ir]: "bday-year",
                    [ur]: "bday-month",
                    [yr]: "bday-day"
                },
                mi = b.ZP.div.withConfig({
                    displayName: "date-input__Root",
                    componentId: "sc-ieqr10-0"
                })(xa || (xa = Wn([`
  display: flex;
  align-items: baseline;
  width: fit-content;
  `, `;
`])), e => {
                    var {
                        textAlign: t
                    } = e;
                    return t === ue.aj.CENTER ? "margin:auto" : ""
                }),
                gi = (0, b.ZP)(zn.Z).withConfig({
                    displayName: "date-input__DayInput",
                    componentId: "sc-ieqr10-1"
                })(ja || (ja = Wn([`
  // As ch does not take into account the different widths of different
  // letters, we apply a factor of 1.5 to make sure the placeholder fits in
  // all translations and fonts.
  // In theory there could be a font were some letter is much wider than 1ch
  // and not fitting inside the input, but testing with the most popular fonts
  // on google fonts I found the factor of 1.5 work well for all of them.
  width: calc(2ch * 1.5);
`]))),
                hi = (0, b.ZP)(zn.Z).withConfig({
                    displayName: "date-input__YearInput",
                    componentId: "sc-ieqr10-2"
                })(ho || (ho = Wn([`
  width: calc(4ch * 1.5);
`]))),
                yi = (0, b.ZP)(zn.Z).withConfig({
                    displayName: "date-input__MonthInput",
                    componentId: "sc-ieqr10-3"
                })(yo || (yo = Wn([`
  width: calc(2ch * 1.5);
`]))),
                n = (0, b.ZP)(Ft.Z).withConfig({
                    displayName: "date-input__Separator",
                    componentId: "sc-ieqr10-4"
                })(bo || (bo = Wn([`
  align-self: flex-end;
`]))),
                l = e => Math.floor(Math.log10(e)) + 1,
                s = e => e.match(/^\d+$/),
                d = {
                    [ir]: hi,
                    [ur]: yi,
                    [yr]: gi
                },
                y = {
                    [ir]: "block.date.label.year",
                    [ur]: "block.date.label.month",
                    [yr]: "block.date.label.day"
                },
                X = {
                    [ir]: "block.date.placeholder.year",
                    [ur]: "block.date.placeholder.month",
                    [yr]: "block.date.placeholder.day"
                },
                Ee = {
                    [ir]: 9999,
                    [ur]: 12,
                    [yr]: 31
                },
                at = {
                    [ir]: "0000",
                    [ur]: "00",
                    [yr]: "00"
                },
                H = (e, t) => Math.min(Ee[e], Math.max(0, t)),
                Fe = (e, t) => {
                    var r = parseInt(t, 10),
                        o = l(Ee[e]);
                    return (t == null ? void 0 : t.length) > o || t === at[e] ? !1 : r >= 0 && r <= Ee[e]
                },
                He = e => {
                    var {
                        autoComplete: t,
                        ariaDescribedBy: r,
                        color: o,
                        dayValue: v = "",
                        id: f,
                        isActive: g,
                        monthValue: m = "",
                        onDayChange: p = te.Z,
                        onEnterKey: h,
                        onInvalidInput: P,
                        onMonthChange: T = te.Z,
                        onYearChange: x = te.Z,
                        order: V = [yr, ur, ir],
                        readOnly: ne,
                        separator: U,
                        textAlign: L,
                        t: z = re => re,
                        yearValue: ee = ""
                    } = e, G = (0, i.useRef)(null), ae = (0, i.useRef)(null), $ = (0, i.useRef)(null), Q = {
                        [ir]: G,
                        [ur]: ae,
                        [yr]: $
                    }, N = {
                        [ir]: ee,
                        [ur]: m,
                        [yr]: v
                    }, ve = {
                        [ir]: x,
                        [ur]: T,
                        [yr]: p
                    }, fe = [V[0], "separator", V[1], "separator", V[2]], ye = re => M => {
                        var k = M.target.value,
                            Re = parseInt(k, 10);
                        if ((isNaN(Re) || !s(k)) && k !== "") {
                            P(new St.ZF);
                            return
                        }
                        k === "" || Fe(re, k) ? ve[re](k, M) : P(new St.E5)
                    }, De = re => M => {
                        var k = M.target.value;
                        if (re !== ir && k === "0") {
                            P(new St.E5);
                            return
                        }
                        re === ir && k.length < l(Ee[re]) && P(new St.iz)
                    }, Le = (0, i.useCallback)(re => M => {
                        if (re) {
                            var k = parseInt(N[re] || "0", 10);
                            if ((0, E.aZ)(M.nativeEvent)) {
                                xn(M), ve[re](H(re, k - 1).toString());
                                return
                            }
                            if ((0, E.si)(M.nativeEvent)) {
                                xn(M), ve[re](H(re, k + 1).toString());
                                return
                            }
                        }(0, E.r$)(M.nativeEvent) && !(0, E.tk)(M.nativeEvent) && (M.preventDefault(), h(M))
                    }, [ve, h]), J = re => {
                        if (t === "bday") return pi[re]
                    };
                    return j(g, Le(null)), i.createElement(mi, {
                        textAlign: L
                    }, fe.map((re, M) => {
                        if (re === "separator") return i.createElement(n, {
                            key: M,
                            bottom: 1,
                            left: U === "/" ? 2.5 : 1.5,
                            right: U === "/" ? 2 : 1.5
                        }, i.createElement(Wr.ZP, {
                            type: Je.jA.inputText,
                            color: o
                        }, U));
                        var k = d[re],
                            Re = J(re);
                        return i.createElement(i.Fragment, {
                            key: M
                        }, i.createElement(Sr.ZP, {
                            vertical: !0
                        }, i.createElement(Ft.Z, {
                            bottom: 1
                        }, i.createElement(Xr.ZP, {
                            color: o,
                            htmlFor: "".concat(f, "-").concat(re),
                            htmlTag: "label",
                            size: "sizeN1"
                        }, z(y[re]))), i.createElement(k, {
                            "aria-describedby": r,
                            autoComplete: Re,
                            color: o,
                            dataQa: "date-input-".concat(re.toLowerCase()),
                            getRef: Q[re],
                            inputId: "".concat(f, "-").concat(re),
                            type: "text",
                            isReadOnly: ne,
                            name: Re,
                            onChange: ye(re),
                            onBlur: De(re),
                            onKeyDown: Le(re),
                            placeholder: z(X[re]),
                            tabIndex: ne ? -1 : 0,
                            value: N[re]
                        })))
                    }))
                };
            const Xe = (0, vi.Z)(He);
            var et, At;

            function Vt(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var tr = b.ZP.div.withConfig({
                    displayName: "mobile-date-input__InputWrapper",
                    componentId: "sc-1kq5wwg-0"
                })(et || (et = Vt([`
  position: relative;
`]))),
                dr = b.ZP.input.withConfig({
                    displayName: "mobile-date-input__GhostInput",
                    componentId: "sc-1kq5wwg-1"
                })(At || (At = Vt([`
  position: absolute;
  width: 100%;
  height: 90%;
  bottom: 0;
  left: 0;
  opacity: 0;
  min-width: 100%; // iOS width bug

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`]))),
                vr = e => {
                    var {
                        ariaDescribedBy: t,
                        color: r,
                        dayValue: o,
                        id: v,
                        monthValue: f,
                        onDateChange: g,
                        order: m,
                        separator: p,
                        textAlign: h,
                        yearValue: P
                    } = e, T = x => {
                        var V = x.target.value;
                        g(V, x)
                    };
                    return i.createElement(tr, null, i.createElement("div", {
                        "aria-hidden": !0
                    }, i.createElement(Xe, {
                        color: r,
                        dayValue: o,
                        id: v,
                        monthValue: f,
                        order: m,
                        readOnly: !0,
                        separator: p,
                        textAlign: h,
                        yearValue: P
                    })), i.createElement(dr, {
                        "aria-describedby": t,
                        onChange: T,
                        type: "date"
                    }))
                };
            const jn = vr;

            function kn() {
                return kn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, kn.apply(this, arguments)
            }
            var ua = {
                    MMDDYYYY: [ur, yr, ir],
                    DDMMYYYY: [yr, ur, ir],
                    YYYYMMDD: [ir, ur, yr]
                },
                Fn = e => {
                    var {
                        autoComplete: t,
                        blockRef: r,
                        field: o,
                        isActive: v,
                        isCommitted: f,
                        isValid: g,
                        layout: m,
                        layoutItemsSize: p,
                        onCommitAnswer: h,
                        onStageAnswer: P,
                        separator: T,
                        structure: x,
                        submitForm: V,
                        textAlign: ne,
                        theme: U,
                        uniqueId: L,
                        validationError: z
                    } = e, [ee, G, ae] = (0, vn.Z)(Ct.Sx), [$, Q, N] = (0, vn.Z)(Ct.RB), [ve, fe] = (0, i.useState)(""), ye = e.value && e.value[0] || "", [De = "", Le = "", J = ""] = ye.split("-"), re = "".concat(L, "-error-message"), M = f && !g, k = M || $;
                    (0, i.useEffect)(() => () => {
                        ae(), N()
                    }, []);
                    var Re = (0, i.useCallback)(xe => {
                            xe.stopPropagation(), h(r, xe)
                        }, [r]),
                        Se = xe => {
                            G(!1), Q(!1), h(r, xe)
                        },
                        Ke = (xe, me) => {
                            P(r, xe, me)
                        },
                        _e = (xe, me, Ce, bt) => {
                            var Lt = "".concat(xe, "-").concat(me, "-").concat(Ce);
                            xe === "" && me === "" && Ce === "" && (Lt = null), P(r, Lt, bt)
                        },
                        Te = (xe, me) => {
                            _e(xe, Le, J, me)
                        },
                        D = (xe, me) => {
                            _e(De, xe, J, me)
                        },
                        oe = (xe, me) => {
                            _e(De, Le, xe, me)
                        },
                        st = xe => {
                            fe(xe), G(!0), Q(!0)
                        },
                        ot = k ? re : null,
                        mt = (0, I.T)();
                    return i.createElement(Tr, kn({}, e, {
                        titleTag: "legend",
                        titleText: e.title,
                        isShaking: ee,
                        focusOnContainer: mt
                    }), (0, I.T)() ? i.createElement(jn, {
                        ariaDescribedBy: ot,
                        id: L,
                        onDateChange: Ke,
                        order: ua[x],
                        dayValue: J,
                        monthValue: Le,
                        yearValue: De,
                        separator: T,
                        textAlign: ne,
                        color: U.colors.secondary
                    }) : i.createElement(Xe, {
                        autoComplete: t,
                        ariaDescribedBy: ot,
                        id: L,
                        onEnterKey: Se,
                        order: ua[x],
                        dayValue: J,
                        monthValue: Le,
                        yearValue: De,
                        separator: T,
                        textAlign: ne,
                        onDayChange: oe,
                        onMonthChange: D,
                        onYearChange: Te,
                        color: U.colors.secondary,
                        onInvalidInput: st,
                        isActive: v
                    }), i.createElement(er, {
                        blockRef: r,
                        errorMessageId: re,
                        blockError: $ ? ve : (0, St.lY)(z, o == null ? void 0 : o.type),
                        isErrorMessageVisible: k,
                        layout: m,
                        layoutItemsSize: p,
                        onClick: Re,
                        submitForm: V
                    }))
                };
            Fn.defaultProps = {
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                submitForm: te.Z,
                t: te.Z,
                theme: {
                    colors: {
                        secondary: I.Bb
                    }
                },
                value: []
            }, Fn.propTypes = {
                autoComplete: a().string,
                blockRef: a().string,
                canAutoFocus: a().bool,
                field: a().object,
                isActive: a().bool,
                isCommitted: a().bool,
                isValid: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                onCommitAnswer: a().func,
                onStageAnswer: a().func,
                separator: a().string,
                structure: a().string,
                submitForm: a().func,
                textAlign: a().oneOf(ue.EC),
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                uniqueId: a().string.isRequired,
                validationError: a().instanceOf(St.FU),
                value: a().array
            };
            const fn = Fn;
            var rn = c(89245),
                pn = c(34423),
                Gn = c(29253);

            function da(e) {
                return new Promise((t, r) => {
                    var o = new window.FileReader;
                    o.onload = v => t(v.target.result), o.onerror = r, o.readAsDataURL(e)
                })
            }
            var Rs = ["image/png", "image/gif", "image/jpeg", "image/svg+xml"],
                ud = e => e.replace(/(<([^>]+)>)/gi, ""),
                pl = e => Rs.some(t => e === t);

            function bi() {
                return bi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, bi.apply(this, arguments)
            }

            function ml(e, t, r, o, v, f, g) {
                try {
                    var m = e[f](g),
                        p = m.value
                } catch (h) {
                    r(h);
                    return
                }
                m.done ? t(p) : Promise.resolve(p).then(o, v)
            }

            function Ei(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(o, v) {
                        var f = e.apply(t, r);

                        function g(p) {
                            ml(f, o, v, g, m, "next", p)
                        }

                        function m(p) {
                            ml(f, o, v, g, m, "throw", p)
                        }
                        g(void 0)
                    })
                }
            }
            var Oi = e => {
                var {
                    blockRef: t,
                    field: r,
                    hasDescription: o,
                    isActive: v,
                    isCommitted: f,
                    isLivePreview: g,
                    isValid: m,
                    layout: p,
                    layoutItemsSize: h,
                    onCommitAnswer: P,
                    onStageAnswer: T,
                    submitForm: x,
                    theme: V,
                    title: ne,
                    uniqueId: U,
                    validationError: L,
                    value: z
                } = e, [ee, G] = (0, i.useState)(), [ae, $] = (0, i.useState)(!1), [Q, N] = (0, i.useState)(0), [ve, fe] = (0, i.useState)(!1), ye = z && z.length > 0 ? z[0] : void 0, De = !!ee || f && !m, Le = (0, yt.w7)({
                    uniqueId: U,
                    isErrorMessageVisible: De,
                    hasDescription: o
                }), J = () => ae ? pn.R.UPLOADING : ye ? pn.R.PREVIEW : pn.R.INPUT, re = J(), M = (0, i.useRef)(null), k = me => {
                    me.stopPropagation(), v && P(t, me)
                }, Re = () => {
                    T(t, []), M.current && (M.current.value = [], M.current.focus())
                }, Se = me => {
                    var {
                        files: Ce
                    } = me.target;
                    g ? xe(Ce[0]) : Ce.length && ot(Ce[0])
                }, Ke = me => {
                    var {
                        files: Ce
                    } = me.dataTransfer;
                    g ? xe(Ce[0]) : ot(Ce[0])
                }, _e = me => {
                    (0, E.r$)(me) && !(0, E.tk)(me) && me.stopPropagation()
                }, Te = (0, i.useCallback)(me => {
                    if (!ve) {
                        me.stopPropagation();
                        return
                    }(0, E.r$)(me) && !(0, E.tk)(me) && (me.stopPropagation(), k(me))
                }, [ve, k]);
                j(v, Te);
                var D = me => {
                        N(me)
                    },
                    oe = me => {
                        T(t, {
                            value: me,
                            label: me.name
                        }), $(!1)
                    },
                    st = me => {
                        $(!1);
                        var Ce = me && me.message,
                            bt = Ce === "file-size-exceeded" ? new St.yt : new St.DC;
                        G(bt)
                    },
                    ot = function() {
                        var me = Ei(function*(Ce) {
                            try {
                                yield mt(Ce)
                            } catch (bt) {
                                st(bt)
                            }
                        });
                        return function(bt) {
                            return me.apply(this, arguments)
                        }
                    }(),
                    mt = function() {
                        var me = Ei(function*(Ce) {
                            $(!0), N(0), G(null);
                            var {
                                formId: bt,
                                id: Lt
                            } = e, _ = yield(0, Gn.mK)(bt, Lt), Ue = _.max_size || _.maxSize;
                            if (Ce.size > Ue) throw new Error("file-size-exceeded");
                            var Ne = yield(0, Gn.p7)(Ce, _, D), it = pl(Ce.type) ? yield da(Ce): null;
                            oe({
                                name: Ce.name,
                                type: Ce.type,
                                s3Filename: Ne,
                                blob: it
                            })
                        });
                        return function(bt) {
                            return me.apply(this, arguments)
                        }
                    }(),
                    xe = function() {
                        var me = Ei(function*(Ce) {
                            $(!0), N(0), G(null);
                            var bt = pl(Ce.type) ? yield da(Ce): null;
                            oe({
                                name: Ce.name,
                                type: Ce.type,
                                s3Filename: "",
                                blob: bt
                            })
                        });
                        return function(bt) {
                            return me.apply(this, arguments)
                        }
                    }();
                return i.createElement(Tr, bi({}, e, {
                    titleFor: U,
                    titleTag: "label",
                    titleText: ne,
                    onKeyDown: Te
                }), i.createElement(rn.h, {
                    onEnter: () => fe(!0),
                    onLeave: () => fe(!1)
                }, i.createElement("div", null, i.createElement(pn.Z, {
                    ariaDescribedBy: Le,
                    fileBlob: ye && ye.blob,
                    handleCancel: Re,
                    handleChange: Se,
                    handleDrop: Ke,
                    handleKeyDown: _e,
                    inputId: U,
                    isActive: v,
                    originalFileName: ye && ye.name,
                    phase: re,
                    uploadProgress: Q,
                    value: ye,
                    theme: V,
                    ref: M,
                    primaryColor: V.colors.primary,
                    secondaryColor: V.colors.secondary
                }), i.createElement(er, {
                    blockRef: t,
                    blockError: ee || (0, St.lY)(L, r == null ? void 0 : r.type),
                    errorMessageId: (0, yt.$w)(U),
                    hideHelperText: !0,
                    isErrorMessageVisible: De,
                    isErrorIgnorable: !!ee,
                    layout: p,
                    layoutItemsSize: h,
                    onClick: k,
                    submitForm: x
                }))))
            };
            Oi.defaultProps = {
                file: {},
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                submitForm: te.Z,
                theme: {
                    colors: {
                        primary: "#FF00FF",
                        secondary: "#FF00FF"
                    }
                }
            }, Oi.propTypes = {
                blockRef: a().string,
                validationError: a().instanceOf(St.FU),
                formId: a().string,
                id: a().string,
                isActive: a().bool,
                field: {
                    type: a().string
                },
                isCommitted: a().bool,
                canAutoFocus: a().bool,
                isLivePreview: a().bool,
                isValid: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                onCommitAnswer: a().func,
                onStageAnswer: a().func,
                shouldClearInput: a().bool,
                submitForm: a().func,
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                uniqueId: a().string.isRequired,
                value: a().any,
                hasDescription: a().bool
            };
            const As = Oi;
            var Ds = c(40747),
                Bs = c(72056),
                dd = "number",
                Eo = "letter",
                gl = "firstCharacter",
                Ci = "custom";

            function Si(e) {
                return e >= "a" && e <= "z"
            }
            var Oo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                hl = e => {
                    var t = Math.floor(e % Oo.length);
                    return Oo[t]
                };

            function yl(e) {
                var t = e >= Oo.length;
                if (t) {
                    var r = Math.floor(e / Oo.length) - 1;
                    return yl(r) + hl(e)
                }
                return hl(e)
            }
            const xs = yl;
            var $n = c(51053),
                ka = c(67116),
                bl;

            function js(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var ks = b.ZP.div.withConfig({
                    displayName: "dummy-list__Hidden",
                    componentId: "sc-x301ko-0"
                })(bl || (bl = js([`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  height: 1px;
  overflow-y: scroll;
`]))),
                Fs = (0, Ie.b5p)(JSON.stringify, e => {
                    var {
                        choices: t,
                        t: r
                    } = e;
                    return t.map(o => ({
                        label: r(o.label),
                        ref: o.ref
                    }))
                }),
                El = e => {
                    var {
                        choices: t,
                        t: r,
                        allowOtherChoice: o,
                        otherValue: v,
                        vertical: f,
                        onLongestChoiceWidthChanged: g,
                        theme: m
                    } = e, p = (0, i.useRef)(), h = (0, i.useRef)();
                    return (0, i.useEffect)(() => {
                        if (!!p.current) {
                            var P = p.current.clientWidth;
                            h.current !== P && (h.current = P, g(P))
                        }
                    }, [t, r, m]), i.createElement(ks, {
                        tabIndex: -1,
                        ref: p
                    }, Fs({
                        choices: t,
                        t: r
                    }).map(P => i.createElement(ka.Z, {
                        tabIndex: -1,
                        key: P.ref,
                        keyHelperLetter: "MM"
                    }, i.createElement(Wr.ZP, {
                        type: Je.jA.multipleChoiceLabel
                    }, P.label))), o && f && i.createElement(ka.Z, {
                        tabIndex: -1,
                        title: v,
                        keyHelperLetter: "MM"
                    }))
                };
            El.propTypes = {
                choices: a().array,
                allowOtherChoice: a().bool,
                vertical: a().bool,
                otherValue: a().string,
                t: a().func,
                onLongestChoiceWidthChanged: a().func,
                theme: a().object
            };
            const Ls = (0, i.memo)(El);
            var Ol = c(48977),
                Pi = c(6662),
                Cl = c(73414),
                Sl = c(27207),
                Co = "other-choice-edit",
                Ns = c(56120),
                Ms = ["ariaDescribedBy", "ariaLabel", "ChoiceComponent", "disabled", "fontSizeType", "handleEscapeKey", "hovered", "inputId", "isEditing", "keyHelperLetter", "onChange", "onCommit", "onInputBlur", "onShouldFocusOtherChoice", "selected", "setIsEditing", "stagedOtherValue", "t", "theme", "value"];

            function So() {
                return So = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, So.apply(this, arguments)
            }

            function _s(e, t) {
                if (e == null) return {};
                var r = Zs(e, t),
                    o, v;
                if (Object.getOwnPropertySymbols) {
                    var f = Object.getOwnPropertySymbols(e);
                    for (v = 0; v < f.length; v++) o = f[v], !(t.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, o) || (r[o] = e[o]))
                }
                return r
            }

            function Zs(e, t) {
                if (e == null) return {};
                var r = {},
                    o = Object.keys(e),
                    v, f;
                for (f = 0; f < o.length; f++) v = o[f], !(t.indexOf(v) >= 0) && (r[v] = e[v]);
                return r
            }
            var Pl = e => {
                var {
                    ariaDescribedBy: t,
                    ariaLabel: r,
                    ChoiceComponent: o,
                    disabled: v,
                    fontSizeType: f,
                    handleEscapeKey: g,
                    hovered: m,
                    inputId: p,
                    isEditing: h,
                    keyHelperLetter: P,
                    onChange: T,
                    onCommit: x,
                    onInputBlur: V,
                    onShouldFocusOtherChoice: ne,
                    selected: U,
                    setIsEditing: L,
                    stagedOtherValue: z,
                    t: ee,
                    theme: G,
                    value: ae
                } = e, $ = _s(e, Ms), Q = (0, i.useRef)(), N = (0, i.useRef)(), ve = () => {
                    N.current && N.current.focus()
                };
                (0, i.useEffect)(() => {
                    h && ve()
                }, [h]), (0, gr.Z)(() => {
                    h || ne()
                }, [h]);
                var fe = J => {
                        var re, M, k, Re, Se;
                        !(J != null && (re = J.relatedTarget) !== null && re !== void 0 && (M = re.dataset) !== null && M !== void 0 && (k = M.qa) !== null && k !== void 0 && k.includes("ok-button-visible")) && ((Re = Q.current) !== null && Re !== void 0 && Re.contains(J == null ? void 0 : J.relatedTarget) || (Se = Q.current) !== null && Se !== void 0 && Se.contains(J == null ? void 0 : J.currentTarget)) || L(!1)
                    },
                    ye = J => {
                        J.stopPropagation(), (0, E.r$)(J) && x(J), (0, E.$o)(J) && (g(z), L(!1))
                    },
                    De = () => {
                        L(!0)
                    },
                    Le = J => {
                        J.stopPropagation(), T(J.target.value, J)
                    };
                return h ? i.createElement(o, So({}, $, {
                    tagName: "div",
                    role: void 0,
                    tabIndex: -1,
                    selectable: !1,
                    onBlur: fe,
                    ref: Q,
                    hovered: m,
                    ariaLabel: r,
                    ariaDescribedBy: t
                }), i.createElement(Ns.Z, {
                    value: ae,
                    dataQa: "other-choice-editor",
                    dataQaInput: "other-choice-editor/input",
                    dataQaButton: "other-choice-editor/button",
                    ref: N,
                    color: G.colors.secondary,
                    onBlur: V,
                    onChange: Le,
                    onKeyDown: ye,
                    fontSizeType: f,
                    disabled: v,
                    id: p
                })) : i.createElement(o, So({}, $, {
                    disabled: v,
                    selected: U,
                    keyHelperHint: ee("label.hint.key"),
                    keyHelperLetter: P,
                    onClick: De,
                    ref: Q,
                    tabIndex: 0,
                    ariaLabel: r,
                    ariaDescribedBy: t
                }), i.createElement(Wr.ZP, {
                    type: f
                }, ae || ee("block.multipleChoice.other")))
            };
            Pl.propTypes = {
                ariaDescribedBy: a().string,
                ariaLabel: a().string,
                ChoiceComponent: a().elementType,
                disabled: a().bool,
                fontSizeType: a().string,
                handleEscapeKey: a().func,
                hovered: a().bool,
                inputId: a().string,
                isEditing: a().bool,
                keyHelperLetter: a().string,
                onChange: a().func,
                onCommit: a().func,
                onInputBlur: a().func,
                onShouldFocusOtherChoice: a().func,
                selected: a().bool,
                setIsEditing: a().func,
                stagedOtherValue: a().string,
                t: a().func,
                theme: a().object,
                value: a().string
            };
            const wl = Pl;
            var Tl = (e, t, r) => {
                    var o, v;
                    return (o = e.attachment) !== null && o !== void 0 && (v = o.properties) !== null && v !== void 0 && v.description ? e.attachment.properties.description : r ? "" : t(e.label)
                },
                Il, Rl;

            function va() {
                return va = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, va.apply(this, arguments)
            }

            function Al(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Vs = b.ZP.div.withConfig({
                    displayName: "radio-list__Wrapper",
                    componentId: "sc-16rzvkh-0"
                })(Il || (Il = Al([`
  height: 100%;
`]))),
                Dl = b.ZP.div.withConfig({
                    displayName: "radio-list__Radio",
                    componentId: "sc-16rzvkh-1"
                })(Rl || (Rl = Al([`
  outline: none;
  `, `
`])), Sl.i8),
                Bl = e => {
                    var {
                        allowOtherChoice: t,
                        answer: r,
                        ariaDescribedBy: o,
                        choiceProps: v,
                        choices: f,
                        choicesLength: g,
                        createKeyShortcut: m,
                        handleColumnsChanged: p,
                        handleOtherChoiceChange: h,
                        handleOtherChoiceCommit: P,
                        handleOtherChoiceBlur: T,
                        handleSelect: x,
                        isOtherChoiceEditing: V,
                        longestChoiceWidth: ne,
                        otherChoiceProps: U,
                        otherChoiceRef: L,
                        otherLabelAndInputFontSize: z,
                        otherValue: ee,
                        setIsOtherChoiceEditing: G,
                        shouldDisableChoices: ae,
                        showLabels: $,
                        t: Q,
                        textAlign: N,
                        theme: ve,
                        verticalAlignment: fe,
                        withImage: ye
                    } = e, De = (0, i.useContext)($t), Le = (0, i.useRef)(), J = ye ? Cl.Z : ka.Z, re = f.map(Se => Se.ref);
                    t && re.push(L);
                    var M = r.length > 0 && r[0] && r[0] === ee,
                        k = ae && !ee,
                        Re = (0, I.T)();
                    return i.createElement(i.Fragment, null, i.createElement(Pi.E, {
                        items: re,
                        onChange: x,
                        selected: M ? L : r[0],
                        isBlockChanging: De
                    }, i.createElement(Ol.Z, {
                        onChangeColumns: p,
                        vertical: fe,
                        longestChoiceWidth: ne,
                        withImage: ye,
                        textAlign: N,
                        tagName: "div"
                    }, f.map((Se, Ke) => {
                        var _e = $ && (0, or.Z)(Q(Se.label)),
                            Te = m(Ke, Se.label, Se.keyboardShortcut),
                            D = _e || Q("block.multipleChoice.label.keyhelper", {
                                x: Te
                            }),
                            oe = r.includes(Se.ref),
                            st = ae && !oe;
                        return i.createElement(Pi.m, {
                            key: Se.ref,
                            value: Se.ref
                        }, ot => {
                            var mt, {
                                focusedValue: xe,
                                props: me
                            } = ot;
                            return i.createElement(Dl, va({}, me, {
                                "aria-disabled": st
                            }), i.createElement(Vs, null, i.createElement(J, va({}, v, {
                                choiceRef: Se.ref,
                                dataQa: "choice",
                                dataQaIndex: Ke,
                                disabled: st,
                                focused: xe === Se.ref,
                                imageAlt: Tl(Se, Q, $),
                                imageHref: (mt = Se.attachment) === null || mt === void 0 ? void 0 : mt.href,
                                isCropped: Se.isCropped,
                                keyHelperHint: Q("label.hint.key"),
                                keyHelperLetter: Te,
                                label: _e,
                                selected: oe,
                                withKeyHelperHint: !Re,
                                ariaLabel: D,
                                ariaDescribedBy: o
                            }))))
                        })
                    }), t && i.createElement(Pi.m, {
                        value: L
                    }, Se => {
                        var {
                            focusedValue: Ke,
                            props: _e
                        } = Se;
                        return i.createElement(Dl, va({}, _e, {
                            "aria-checked": !!ee,
                            "aria-disabled": k,
                            "aria-controls": Co,
                            ref: Le
                        }), i.createElement(wl, va({}, v, U, {
                            ChoiceComponent: J,
                            "aria-describedby": o,
                            disabled: k,
                            focused: Ke === L,
                            fontSizeType: z,
                            isEditing: V,
                            keyHelperLetter: m(g - 1, ee),
                            onChange: h,
                            onCommit: P,
                            onInputBlur: T,
                            onShouldFocusOtherChoice: () => {
                                var Te;
                                return (Te = Le.current) === null || Te === void 0 ? void 0 : Te.focus()
                            },
                            selected: M,
                            setIsEditing: G,
                            t: Q,
                            theme: ve,
                            value: ee,
                            withKeyHelperHint: !Re,
                            inputId: Co,
                            ariaLabel: Q("block.multipleChoice.otherChoice.placeholderA11y"),
                            ariaDescribedBy: o
                        })))
                    }))))
                };
            Bl.propTypes = {
                allowOtherChoice: a().bool,
                answer: a().array,
                ariaDescribedBy: a().string,
                choiceProps: a().object,
                choices: a().array,
                choicesLength: a().number,
                createKeyShortcut: a().func,
                handleColumnsChanged: a().func,
                handleOtherChoiceChange: a().func,
                handleOtherChoiceCommit: a().func,
                handleOtherChoiceBlur: a().func,
                handleSelect: a().func,
                isOtherChoiceEditing: a().bool,
                longestChoiceWidth: a().number,
                otherChoiceProps: a().object,
                otherChoiceRef: a().string,
                otherLabelAndInputFontSize: a().any,
                otherValue: a().string,
                setIsOtherChoiceEditing: a().func,
                shouldDisableChoices: a().bool,
                showLabels: a().bool,
                t: a().func,
                textAlign: a().any,
                theme: a().object,
                verticalAlignment: a().bool,
                withImage: a().bool
            };
            const Ys = Bl;
            var xl, jl;

            function Po() {
                return Po = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Po.apply(this, arguments)
            }

            function kl(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Us = b.ZP.div.withConfig({
                    displayName: "checkbox-list__Wrapper",
                    componentId: "sc-s0tnfi-0"
                })(xl || (xl = kl([`
  height: 100%;
`]))),
                Fl = b.ZP.div.withConfig({
                    displayName: "checkbox-list__Checkbox",
                    componentId: "sc-s0tnfi-1"
                })(jl || (jl = kl([`
  outline: none;

  `, `
`])), Sl.i8),
                Ll = e => {
                    var {
                        allowOtherChoice: t,
                        answer: r,
                        ariaDescribedBy: o,
                        choiceProps: v,
                        choices: f,
                        choicesLength: g,
                        createKeyShortcut: m,
                        handleColumnsChanged: p,
                        handleOtherChoiceBlur: h,
                        handleOtherChoiceChange: P,
                        handleOtherChoiceCommit: T,
                        handleSelect: x,
                        isOtherChoiceEditing: V,
                        longestChoiceWidth: ne,
                        otherChoiceProps: U,
                        otherChoiceRef: L,
                        otherLabelAndInputFontSize: z,
                        otherValue: ee,
                        selected: G,
                        setIsOtherChoiceEditing: ae,
                        shouldDisableChoices: $,
                        showLabels: Q,
                        t: N,
                        textAlign: ve,
                        theme: fe,
                        verticalAlignment: ye,
                        withImage: De
                    } = e, [Le, J] = (0, i.useState)(), re = (0, i.useRef)(), M = De ? Cl.Z : ka.Z, k = f.map(D => D.ref);
                    t && k.push(L);
                    var Re = G,
                        Se = !U.allowEditOtherChoice,
                        Ke = D => {
                            if (!Re) return N("block.multipleChoice.otherChoice.placeholderA11y");
                            if (Re && D) return D
                        },
                        _e = (D, oe) => {
                            (0, E.Xq)(oe) && x(D, oe)
                        },
                        Te = (0, I.T)();
                    return i.createElement("div", {
                        "data-qa": "checkboxlist"
                    }, i.createElement(Ol.Z, {
                        onChangeColumns: p,
                        vertical: ye,
                        longestChoiceWidth: ne,
                        withImage: De,
                        textAlign: ve,
                        tagName: "div"
                    }, f.map((D, oe) => {
                        var st, ot = Q && (0, or.Z)(N(D.label)),
                            mt = m(oe, D.label, D.keyboardShortcut),
                            xe = ot || N("block.multipleChoice.label.keyhelper", {
                                x: mt
                            }),
                            me = r.includes(D.ref),
                            Ce = $ && !me;
                        return i.createElement(Fl, {
                            "aria-disabled": Ce,
                            "data-qa": "other-checkbox",
                            key: D.ref,
                            "aria-checked": me,
                            onClick: bt => x(D.ref, bt),
                            onKeyDown: bt => _e(D.ref, bt),
                            onFocus: () => J(D.ref),
                            role: "checkbox",
                            tabIndex: 0
                        }, i.createElement(Us, null, i.createElement(M, Po({}, v, {
                            focusable: !1,
                            dataQa: "choice",
                            dataQaIndex: oe,
                            choiceRef: D.ref,
                            focused: Le === D.ref,
                            selected: me,
                            disabled: Ce,
                            keyHelperHint: N("label.hint.key"),
                            keyHelperLetter: mt,
                            isCropped: D.isCropped,
                            imageHref: (st = D.attachment) === null || st === void 0 ? void 0 : st.href,
                            imageAlt: Tl(D, N, Q),
                            label: ot,
                            withKeyHelperHint: !Te,
                            ariaLabel: xe,
                            ariaDescribedBy: o
                        }))))
                    }), t && i.createElement(Fl, {
                        "aria-checked": !!ee,
                        "aria-disabled": Se,
                        "aria-controls": Co,
                        onClick: D => x(L, D),
                        onKeyDown: D => _e(L, D),
                        onFocus: () => J(L),
                        ref: re,
                        role: "checkbox",
                        tabIndex: 0
                    }, i.createElement(wl, Po({}, v, U, {
                        ChoiceComponent: M,
                        keyHelperLetter: m(g - 1, ee),
                        t: N,
                        theme: fe,
                        focused: Le === L,
                        fontSizeType: z,
                        handleSelect: D => x(L, D),
                        isEditing: V,
                        setIsEditing: ae,
                        disabled: Se,
                        value: ee,
                        onInputBlur: h,
                        onChange: P,
                        onCommit: T,
                        onShouldFocusOtherChoice: () => {
                            var D;
                            return (D = re.current) === null || D === void 0 ? void 0 : D.focus()
                        },
                        withKeyHelperHint: !Te,
                        inputId: Co,
                        ariaLabel: Ke(ee),
                        ariaDescribedBy: o
                    })))))
                };
            Ll.propTypes = {
                allowOtherChoice: a().bool,
                answer: a().array,
                ariaDescribedBy: a().string,
                choiceProps: a().object,
                choices: a().array,
                choicesLength: a().number,
                createKeyShortcut: a().func,
                handleColumnsChanged: a().func,
                handleOtherChoiceBlur: a().func,
                handleOtherChoiceChange: a().func,
                handleOtherChoiceCommit: a().func,
                handleSelect: a().func,
                isOtherChoiceEditing: a().bool,
                longestChoiceWidth: a().number,
                otherChoiceProps: a().object,
                otherChoiceRef: a().string,
                otherLabelAndInputFontSize: a().any,
                otherValue: a().string,
                selected: a().bool,
                setIsOtherChoiceEditing: a().func,
                shouldDisableChoices: a().bool,
                showLabels: a().bool,
                t: a().func,
                textAlign: a().any,
                theme: a().object,
                verticalAlignment: a().bool,
                withImage: a().bool
            };
            const Hs = Ll;
            var Nl;

            function wi() {
                return wi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, wi.apply(this, arguments)
            }

            function Ml(e, t, r, o, v, f, g) {
                try {
                    var m = e[f](g),
                        p = m.value
                } catch (h) {
                    r(h);
                    return
                }
                m.done ? t(p) : Promise.resolve(p).then(o, v)
            }

            function Ks(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(o, v) {
                        var f = e.apply(t, r);

                        function g(p) {
                            Ml(f, o, v, g, m, "next", p)
                        }

                        function m(p) {
                            Ml(f, o, v, g, m, "throw", p)
                        }
                        g(void 0)
                    })
                }
            }

            function fr(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function zs(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Ws = 65,
                Gs = 26,
                $s = b.ZP.div.withConfig({
                    displayName: "multiple-choice__StyledBlockHintWrapper",
                    componentId: "sc-1161l39-0"
                })(Nl || (Nl = zs([`
  min-height: 30px;
`])));
            class Ti extends i.Component {
                constructor(t) {
                    super(t), fr(this, "errorMessageRef", i.createRef()), fr(this, "letterShortcutBuffer", i.createRef()), fr(this, "letterShortcutTimeout", i.createRef()), fr(this, "getBlockNode", r => this.blockNode = r), fr(this, "setIsOtherChoiceEditing", r => {
                        this.setState({
                            isOtherChoiceEditing: r
                        })
                    }), fr(this, "createKeyShortcut", (r, o, v) => {
                        var {
                            keyboardShortcutType: f
                        } = this.props;
                        if (f === Eo) return xs(r);
                        if (f === gl) {
                            var g = o.charAt(0).toUpperCase();
                            return this.firstCharacterShortcuts.push(g), g
                        }
                        if (f === Ci) return this.props.t(v)
                    }), fr(this, "handleOtherChoiceChange", (r, o) => {
                        if ((0, I.T)() && !(0, xt.gn)()) {
                            var {
                                recenter: v
                            } = this.props;
                            v(qr, qr)
                        }
                        this.setState({
                            otherValue: r
                        })
                    }), fr(this, "handleContentEntersViewport", () => {
                        this.setState({
                            contentInViewport: !0
                        })
                    }), fr(this, "handleContentLeavesViewport", () => {
                        this.setState({
                            contentInViewport: !1
                        })
                    }), fr(this, "handleKeyDown", r => {
                        var {
                            keyboardShortcutType: o
                        } = this.props;
                        if (!!this.state.contentInViewport && !(0, E.tk)(r)) {
                            if ((0, E.Xq)(r) && r.stopPropagation(), o === Eo && Si(r == null ? void 0 : r.key)) {
                                this.letterShortcutBuffer.current === null ? (this.letterShortcutBuffer.current = [r.key], r.persist && r.persist(), this.letterShortcutTimeout.current = setTimeout(() => this.handleLetterKeyboardShortcut(r), Ct.uU)) : this.letterShortcutBuffer.current = [...this.letterShortcutBuffer.current, r.key], r.preventDefault(), r.stopPropagation();
                                return
                            }
                            if (this.letterShortcutTimeout.current !== null && (clearTimeout(this.letterShortcutTimeout.current), this.letterShortcutTimeout.current = null), o === gl && Si(r == null ? void 0 : r.key)) {
                                this.handleFirstCharacterShortcut(r), r.preventDefault(), r.stopPropagation();
                                return
                            }
                            o === Ci && Si(r == null ? void 0 : r.key) && (this.handleCustomCharacterShortcut(r), r.preventDefault(), r.stopPropagation())
                        }
                    }), fr(this, "handleOtherChoiceBlur", r => {
                        this.handleOtherChoiceCommit(r), this.props.onInputBlur()
                    }), fr(this, "handleOtherChoiceCommit", r => {
                        var {
                            otherValue: o
                        } = this.state, {
                            onStageAnswer: v,
                            value: f,
                            allowMultipleSelection: g,
                            blockRef: m
                        } = this.props;
                        this.setState({
                            isOtherChoiceEditing: !1
                        });
                        var p = f || [],
                            h = (g ? [...this.removeStagedOtherChoice(p), o] : [o]).filter(Boolean);
                        this.setState({
                            stagedOtherValue: o
                        }), v(m, h, r), h.length && !g && (r.persist && r.persist(), this.commitAnswerTimeout = setTimeout(() => {
                            this.handleCommitAnswer(r)
                        }, Ct.YJ))
                    }), fr(this, "handleSelect", (r, o) => {
                        var {
                            onStageAnswer: v,
                            allowMultipleSelection: f,
                            value: g
                        } = this.props, m = g || [];
                        if (r === this.getOtherChoiceRef() && this.getAllowEditOtherChoice()) {
                            this.setIsOtherChoiceEditing(!0);
                            return
                        }
                        var p = m.includes(r);
                        if (!(!p && !this.canSelectMoreChoices())) {
                            var h;
                            f ? p ? h = m.filter(P => P !== r) : h = [...m, r] : p ? h = [] : h = [r], v(this.props.blockRef, h, o), !f && !p && (o.persist && o.persist(), setTimeout(() => {
                                this.handleCommitAnswer(o)
                            }, Ct.YJ))
                        }
                    }), fr(this, "handleLongestChoiceWidthChanged", r => {
                        this.setState({
                            longestChoiceWidth: r
                        })
                    }), fr(this, "handleColumnsChanged", r => {
                        this.renderedColumns = r
                    }), fr(this, "handleCommitAnswer", r => {
                        this.props.onCommitAnswer(this.props.blockRef, r)
                    }), this.state = {
                        isOtherChoiceEditing: !1,
                        longestChoiceWidth: null,
                        otherValue: this.getOtherValue(),
                        contentInViewport: !1,
                        stagedOtherValue: this.getOtherValue()
                    }, this.renderedColumns = 1, this.firstCharacterShortcuts = [], this.otherChoiceTimeout = null, this.commitAnswerTimeout = null
                }
                componentDidMount() {
                    this.props.isActive && this.props.updateGlobalEventListenerRef(this.handleKeyDown), this.prefillAnswer(), this.fillOtherValueWithPartial()
                }
                shouldComponentUpdate(t, r) {
                    return (0, I.T)() && t.isCommitted && !this.props.isCommitted && !t.isValid && setTimeout(() => {
                        var o = this.errorMessageRef.current;
                        o.focus()
                    }, 100), po(this.props, t) || this.state.longestChoiceWidth !== r.longestChoiceWidth || t.choices !== this.props.choices
                }
                componentDidUpdate(t) {
                    if (this.props.isActive && !t.isActive && (this.props.updateGlobalEventListenerRef(this.handleKeyDown), this.prefillAnswer()), !!this.props.isActive) {
                        var r = t.choices.length !== this.props.choices.length;
                        r && this.props.recenter()
                    }
                }
                componentWillUnmount() {
                    clearTimeout(this.otherChoiceTimeout), clearTimeout(this.commitAnswerTimeout), clearTimeout(this.letterShortcutTimeout)
                }
                getAllowEditOtherChoice() {
                    return this.getOtherValue() || this.canSelectMoreChoices()
                }
                getChoicesLength() {
                    var {
                        choices: t,
                        allowOtherChoice: r
                    } = this.props;
                    return r ? t.length + 1 : t.length
                }
                getOtherValue() {
                    var {
                        choices: t,
                        value: r
                    } = this.props, o = v => t.map(f => f.ref).includes(v);
                    return r && r.find(v => !o(v))
                }
                getOtherChoiceRef() {
                    return "".concat(this.props.blockRef, "-other")
                }
                getStagedOtherValue() {
                    return this.state.stagedOtherValue
                }
                getPositionRef(t) {
                    var r;
                    return this.props.allowOtherChoice && t === this.getChoicesLength() - 1 ? this.getOtherChoiceRef() : (r = this.props.choices[t]) === null || r === void 0 ? void 0 : r.ref
                }
                prefillAnswer() {
                    var t = this;
                    return Ks(function*() {
                        var {
                            allowMultipleSelection: r,
                            allowOtherChoice: o,
                            blockRef: v,
                            choices: f,
                            hasBeenInteractedWith: g,
                            isActive: m,
                            isFirstBlock: p,
                            onCommitAnswer: h,
                            onStageAnswer: P,
                            value: T
                        } = t.props, x = (0, $n.i4)(v), V = T && T.some(Boolean);
                        if (!!x) {
                            var ne = f.map($ => $.ref);
                            o && ne.push(t.getOtherChoiceRef());
                            var U = x.map($ => ["yes", "no", "other"].includes($) ? "".concat(v, "-").concat($) : $),
                                L = U.filter($ => ne.includes($)),
                                z = L.length > 0 ? L : null,
                                ee = L.includes(t.getOtherChoiceRef());
                            if (m && !V && !g && z) {
                                yield(0, $n.PB)();
                                var G = z.filter($ => $ !== t.getOtherChoiceRef()),
                                    ae = G;
                                !r && G[0] && (ae = [G[0]]), P(v, ae, null, {
                                    isFromPrefilledAnswer: !0
                                }), p && !r && !ee && (yield(0, $n.Be)(), h(v, null, {
                                    isFromPrefilledAnswer: !0
                                })), ee && (t.otherChoiceTimeout = setTimeout(() => t.setIsOtherChoiceEditing(!0), Ct.km))
                            }
                        }
                    })()
                }
                fillOtherValueWithPartial() {
                    var {
                        partialResponse: t,
                        choices: r,
                        allowOtherChoice: o
                    } = this.props;
                    if (!!t) {
                        var v = r.map(p => p.ref),
                            f = t.find(p => !v.includes(p));
                        if (!!f) {
                            var g = this.state.otherValue && this.state.otherValue[0],
                                m = f !== g;
                            o && m && this.setState({
                                otherValue: f
                            })
                        }
                    }
                }
                handleLetterKeyboardShortcut(t) {
                    var r = Ws,
                        o = this.letterShortcutBuffer.current.length,
                        v = this.letterShortcutBuffer.current.join("").toUpperCase(),
                        f = v.charCodeAt(o - 1) - r;
                    if (o === 2) {
                        var g = v.charCodeAt(0),
                            m = g - r + 1;
                        f = f + m * Gs
                    }
                    var p = this.getPositionRef(f);
                    this.handleKeyboardSelect(p, t), this.letterShortcutBuffer.current = null
                }
                handleFirstCharacterShortcut(t) {
                    var r = this.firstCharacterShortcuts.findIndex(v => (t == null ? void 0 : t.key.toUpperCase()) === v.toUpperCase()),
                        o = this.getPositionRef(r);
                    this.handleKeyboardSelect(o, t)
                }
                handleCustomCharacterShortcut(t) {
                    var {
                        choices: r,
                        t: o
                    } = this.props, v = r.find(f => {
                        var {
                            keyboardShortcut: g
                        } = f;
                        return o(g) === (t == null ? void 0 : t.key.toUpperCase())
                    });
                    this.handleKeyboardSelect(v == null ? void 0 : v.ref, t)
                }
                removeStagedOtherChoice(t) {
                    return t.filter(r => r !== this.getOtherValue())
                }
                unstageOtherChoice(t) {
                    var {
                        onStageAnswer: r,
                        value: o,
                        allowMultipleSelection: v,
                        blockRef: f
                    } = this.props, g = o || [], m = v ? this.removeStagedOtherChoice(g) : [];
                    r(f, m, t), this.setState({
                        otherValue: ""
                    })
                }
                handleKeyboardSelect(t, r) {
                    if (!t) {
                        this.handleCommitAnswer();
                        return
                    }
                    if (t === this.getOtherChoiceRef()) {
                        this.setIsOtherChoiceEditing(!0);
                        return
                    }
                    this.handleSelect(t, r)
                }
                canSelectMoreChoices() {
                    var {
                        value: t,
                        validations: r
                    } = this.props, {
                        maxSelection: o
                    } = r, v = t || [];
                    return !o || v.length < o
                }
                render() {
                    var {
                        allowMultipleSelection: t,
                        allowOtherChoice: r,
                        choices: o,
                        field: v,
                        isActive: f,
                        isCommitted: g,
                        isValid: m,
                        layout: p,
                        onInputBlur: h,
                        showLabels: P,
                        submitForm: T,
                        supersized: x,
                        t: V,
                        textAlign: ne,
                        theme: U,
                        title: L,
                        uniqueId: z,
                        validations: ee,
                        validationError: G,
                        value: ae,
                        verticalAlignment: $,
                        withImage: Q
                    } = this.props, {
                        otherValue: N,
                        isOtherChoiceEditing: ve
                    } = this.state, {
                        minSelection: fe,
                        maxSelection: ye
                    } = ee, De = this.getChoicesLength(), Le = ae || [], J = !this.canSelectMoreChoices(), re = !$ && !this.props.longestChoiceWidth, M = this.props.longestChoiceWidth || this.state.longestChoiceWidth, k = g && !m && !ve, Re = !!this.getOtherValue(), Se = (0, yt.w7)({
                        isErrorMessageVisible: k,
                        hasInputInstructions: Boolean(t && f),
                        uniqueId: z
                    }), Ke = {
                        superSizedImage: x,
                        choiceRef: this.getOtherChoiceRef(),
                        color: U.colors.secondary,
                        contextBackgroundColor: U.colors.background
                    }, _e = {
                        allowEditOtherChoice: !!this.getAllowEditOtherChoice(),
                        dataQa: "other-choice",
                        selected: Re,
                        stagedOtherValue: this.getStagedOtherValue(),
                        imageSvg: Bs.Z,
                        choiceRef: this.getOtherChoiceRef(),
                        handleEscapeKey: oe => {
                            this.setState({
                                otherValue: oe == null ? void 0 : oe.trim()
                            })
                        }
                    }, Te = Q ? Je.jA.pictureChoiceAndRatingLabel : Je.jA.multipleChoiceLabel, D = {
                        allowOtherChoice: r,
                        answer: Le,
                        ariaDescribedBy: Se,
                        choiceProps: Ke,
                        choices: o,
                        choicesLength: De,
                        createKeyShortcut: this.createKeyShortcut,
                        handleColumnsChanged: this.handleColumnsChanged,
                        handleOtherChoiceChange: this.handleOtherChoiceChange,
                        handleOtherChoiceCommit: this.handleOtherChoiceCommit,
                        handleOtherChoiceBlur: this.handleOtherChoiceBlur,
                        handleSelect: this.handleSelect,
                        isOtherChoiceEditing: ve,
                        longestChoiceWidth: M,
                        onInputBlur: h,
                        otherChoiceProps: _e,
                        otherChoiceRef: this.getOtherChoiceRef(),
                        otherLabelAndInputFontSize: Te,
                        otherValue: N,
                        setIsOtherChoiceEditing: this.setIsOtherChoiceEditing,
                        shouldDisableChoices: J,
                        showLabels: P,
                        t: V,
                        textAlign: ne,
                        theme: U,
                        verticalAlignment: $,
                        withImage: Q
                    };
                    return i.createElement(Tr, wi({}, this.props, {
                        titleFor: z,
                        titleTag: "legend",
                        titleText: L,
                        onKeyDown: this.handleKeyDown,
                        focusOnContainer: !0
                    }), o && i.createElement(rn.h, {
                        onEnter: this.handleContentEntersViewport,
                        onLeave: this.handleContentLeavesViewport
                    }, i.createElement(Fr.Z, {
                        top: Je.M6.topMultipleChoiceBlockContent,
                        ref: this.getBlockNode
                    }, t && f && i.createElement($s, null, i.createElement(Ds.Z, {
                        color: U.colors.secondary,
                        id: (0, yt.Pq)(z),
                        maxSelection: ye,
                        minSelection: fe,
                        selectionCount: Le.length
                    })), re && i.createElement(Ls, {
                        theme: U,
                        onLongestChoiceWidthChanged: this.handleLongestChoiceWidthChanged,
                        choices: o,
                        t: V,
                        allowOtherChoice: r,
                        otherValue: N,
                        vertical: $
                    }), t ? i.createElement(Hs, D) : i.createElement(Ys, D), i.createElement(er, {
                        blockError: (0, St.lY)(G, v == null ? void 0 : v.type),
                        blockRef: this.props.blockRef,
                        errorMessageId: (0, yt.$w)(z),
                        errorMessageRef: this.errorMessageRef,
                        isErrorMessageVisible: k,
                        layout: p,
                        layoutItemsSize: this.props.layoutItemsSize,
                        onClick: this.handleCommitAnswer,
                        submitForm: T
                    }))))
                }
            }
            Ti.defaultProps = {
                keyboardShortcutType: Eo,
                onCommitAnswer: te.Z,
                onInputBlur: te.Z,
                onStageAnswer: te.Z,
                recenter: te.Z,
                scrollToChoice: te.Z,
                showLabels: !0,
                submitForm: te.Z,
                t: e => e,
                theme: {
                    colors: {
                        secondary: I.Bb,
                        background: I.Bb
                    }
                },
                updateGlobalEventListenerRef: te.Z,
                validations: {},
                verticalAlignment: !0,
                withImage: !1
            }, Ti.propTypes = {
                allowMultipleSelection: a().bool,
                allowOtherChoice: a().bool,
                blockIndex: a().number,
                blockRef: a().string,
                choices: a().arrayOf(a().shape({
                    id: a().oneOfType([a().string, a().number]),
                    ref: a().string,
                    label: a().string,
                    attachment: a().shape({
                        resource: a().shape({
                            default: a().string
                        })
                    })
                })),
                description: a().oneOfType([a().array, a().string]),
                field: a().object,
                hasBeenInteractedWith: a().bool,
                isActive: a().bool,
                isCommitted: a().bool,
                isFirstBlock: a().bool,
                isValid: a().bool,
                keyboardShortcutType: a().string,
                layout: a().object,
                layoutItemsSize: a().object,
                longestChoiceWidth: a().number,
                onCommitAnswer: a().func,
                onInputBlur: a().func,
                onStageAnswer: a().func,
                partialResponse: a().array,
                recenter: a().func,
                scrollToChoice: a().func,
                shouldClearInput: a().bool,
                showLabels: a().bool,
                submitForm: a().func,
                supersized: a().bool,
                t: a().func,
                textAlign: a().oneOf(ue.EC),
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                uniqueId: a().string,
                updateGlobalEventListenerRef: a().func.isRequired,
                validations: a().shape({
                    minSelection: a().number,
                    maxSelection: a().number
                }),
                validationError: a().instanceOf(St.FU),
                value: a().array,
                verticalAlignment: a().bool,
                withImage: a().bool
            };
            const wo = Qe(Ti);

            function Ii() {
                return Ii = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Ii.apply(this, arguments)
            }

            function _l(e, t, r, o, v, f, g) {
                try {
                    var m = e[f](g),
                        p = m.value
                } catch (h) {
                    r(h);
                    return
                }
                m.done ? t(p) : Promise.resolve(p).then(o, v)
            }

            function Qs(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(o, v) {
                        var f = e.apply(t, r);

                        function g(p) {
                            _l(f, o, v, g, m, "next", p)
                        }

                        function m(p) {
                            _l(f, o, v, g, m, "throw", p)
                        }
                        g(void 0)
                    })
                }
            }

            function Zl(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function To(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Zl(Object(r), !0).forEach(function(o) {
                        Js(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zl(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function Js(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var Xs = {
                    sm: 110,
                    md: 140,
                    lg: 150,
                    xl: 150
                },
                qs = (0, Ie.b5p)(JSON.stringify, e => {
                    var {
                        choices: t,
                        croppedChoiceRefs: r
                    } = e;
                    return t.map(o => To(To({}, o), {}, {
                        isCropped: !!r[o.ref]
                    }))
                });
            class Vl extends i.Component {
                constructor(t) {
                    super(t), this.state = {
                        croppedChoiceRefs: {}
                    }
                }
                componentDidMount() {
                    this.updateCroppedChoiceRefs(this.props.supersized, this.props.choices, this.state.croppedChoiceRefs)
                }
                componentDidUpdate() {
                    this.updateCroppedChoiceRefs(this.props.supersized, this.props.choices, this.state.croppedChoiceRefs)
                }
                updateCroppedChoiceRefs(t, r, o) {
                    var v = this;
                    return Qs(function*() {
                        if (!!t) {
                            var f = {};
                            if (!v.updatingCroopedChoicesRefs) {
                                v.updatingCroopedChoicesRefs = !0;
                                for (var g in r) {
                                    var m = r[g],
                                        p = m.attachment && m.attachment.resource,
                                        h = p && p.src;
                                    if (h && o[m.ref] == null) try {
                                        var P = yield(0, Gn.uw)(h);
                                        f[m.ref] = P
                                    } catch (x) {}
                                }
                                var T = Object.keys(f).length;
                                T && v.setState({
                                    croppedChoiceRefs: To(To({}, o), f)
                                }), v.updatingCroopedChoicesRefs = !1
                            }
                        }
                    })()
                }
                render() {
                    var {
                        breakpoint: t,
                        supersized: r,
                        choices: o
                    } = this.props, v = Xs[t] * (r ? 1.5 : 1), f = r ? qs({
                        choices: o,
                        croppedChoiceRefs: this.state.croppedChoiceRefs
                    }) : o;
                    return i.createElement(wo, Ii({}, this.props, {
                        choices: f,
                        verticalAlignment: !1,
                        longestChoiceWidth: Math.round(v),
                        withImage: !0
                    }))
                }
            }
            a().defaultProps = {
                choices: []
            }, Vl.propTypes = {
                breakpoint: a().string,
                choices: a().array,
                supersized: a().bool
            };
            const ec = (0, Oe.Ng)(Vl);
            var tc = c(39325),
                rc = c(80550),
                Ri = c(31563),
                nc = c(79171),
                Yl, Ul, Hl, Kl;

            function Io() {
                return Io = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Io.apply(this, arguments)
            }

            function zl(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function Ro(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? zl(Object(r), !0).forEach(function(o) {
                        ac(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zl(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function ac(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Ao(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Wl = -1,
                oc = 800,
                ic = 400,
                lc = 52,
                Gl = 1,
                sc = b.ZP.div.withConfig({
                    displayName: "mobile-dropdown__ContentWrapper",
                    componentId: "sc-rvf6j-0"
                })(Yl || (Yl = Ao([`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 8px 0 8px 8px;
`]))),
                cc = b.ZP.div.withConfig({
                    displayName: "mobile-dropdown__SelectWrapper",
                    componentId: "sc-rvf6j-1"
                })(Ul || (Ul = Ao([`
  position: relative;
`]))),
                uc = (0, b.ZP)(Xa.Z).attrs({
                    svg: rc.Z
                }).withConfig({
                    displayName: "mobile-dropdown__DropdownIcon",
                    componentId: "sc-rvf6j-2"
                })(Hl || (Hl = Ao([`
  position: absolute;
  right: 5px;
  top: 14px;
  user-select: none;
`]))),
                dc = b.ZP.button.withConfig({
                    displayName: "mobile-dropdown__MobileTrigger",
                    componentId: "sc-rvf6j-3"
                })(Kl || (Kl = Ao([`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  padding-left: 0;
  padding-right: 26px;
  padding-bottom: 8px;
  border-radius: 0;
  border: none;
  transition: 0.2s;
  text-align: left;
  background-color: transparent;
  box-shadow: 0 1px `, `;
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 transparent;
  }
  outline: none;
  &:focus {
    outline: none;
  }
`])), e => (0, I.Yv)(e.color)),
                vc = e => {
                    var {
                        blockRef: t,
                        choices: r = [],
                        field: o,
                        isActive: v,
                        isCommitted: f,
                        isValid: g,
                        layout: m,
                        layoutItemsSize: p,
                        onCommitAnswer: h = te.Z,
                        onStageAnswer: P = te.Z,
                        partialResponse: T,
                        placeholder: x,
                        shouldClearInput: V,
                        submitForm: ne = te.Z,
                        t: U = _ => _,
                        theme: L = {
                            colors: {
                                secondary: I.Bb,
                                background: I.Bb
                            },
                            font: ""
                        },
                        title: z,
                        uniqueId: ee,
                        validationError: G,
                        value: ae
                    } = e, $ = (0, le.T)(), Q = (0, i.useRef)(null), [N, ve] = (0, i.useState)(""), [fe, ye] = (0, i.useState)(!1), [De, Le] = (0, i.useState)(Wl), J = fe, re = !!(f && !g && !J), M = (0, yt.w7)({
                        uniqueId: ee,
                        isErrorMessageVisible: re,
                        hasDescription: !1,
                        hasInputInstructions: !1,
                        additionalIds: ""
                    }), k = (0, Ie.b5p)((_, Ue) => Ue, (_, Ue) => (0, Ri.M)(_.map(Ne => Ro(Ro({}, Ne), {}, {
                        key: Ne.ref || Ne.label
                    })), Ue));
                    (0, gr.Z)(() => {
                        !v && fe && Ke(!1), V && ve("")
                    }, [v, V]), (0, i.useEffect)(() => {
                        $((0, Sa.XN)(fe))
                    }, [fe]);
                    var Re = () => k(r, N).map(_ => Ro(Ro({}, _), {}, {
                            label: (0, Ri.n)(_.label, N),
                            value: _.label,
                            key: _.key
                        })),
                        Se = Re(),
                        Ke = _ => {
                            _ !== fe && ye(_)
                        },
                        _e = _ => {
                            _.persist(), h(t, _)
                        },
                        Te = _ => {
                            ve(_ || "")
                        },
                        D = _ => {
                            _.stopPropagation()
                        },
                        oe = () => {
                            ye(!0)
                        },
                        st = () => {
                            var _;
                            ye(!1), Q == null || (_ = Q.current) === null || _ === void 0 || _.focus()
                        },
                        ot = (_, Ue) => {
                            if (!(!_ || !_.value)) {
                                var Ne = r.findIndex(Ht => Ht.label === _.value);
                                if (De === Ne) {
                                    Le(Wl), P(t, [], Ue);
                                    return
                                }
                                var it = _.value;
                                _.ref && (it = {
                                    id: _.id,
                                    label: _.value,
                                    ref: _.ref,
                                    value: _.value
                                }), Le(Ne), P(t, [it], Ue), Ue.persist(), setTimeout(() => {
                                    ye(!1), setTimeout(() => {
                                        h(t, Ue), ve("")
                                    }, ic)
                                }, oc)
                            }
                        },
                        mt = "",
                        xe = ae;
                    if ((!ae || !ae.length) && T && (xe = T.map(_ => _.ref || _.value || _)), xe && xe.length) {
                        var me, Ce = r.find(_ => _.ref === xe[0] || _.label === xe[0]);
                        mt = (me = Ce == null ? void 0 : Ce.label) !== null && me !== void 0 ? me : null
                    }
                    var bt = _ => _.value === mt,
                        Lt = function(Ue, Ne) {
                            var it = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                            return i.createElement(Ft.Z, {
                                bottom: .5,
                                key: Ue.key,
                                left: Gl,
                                right: Gl
                            }, i.createElement(ka.Z, {
                                role: "option",
                                color: L.colors.secondary,
                                selected: it
                            }, i.createElement(sc, null, i.createElement(Wr.ZP, {
                                color: L.colors.secondary,
                                ellipsis: Ne,
                                inline: !0,
                                type: Je.jA.multipleChoiceLabel
                            }, Ue.label))))
                        };
                    return i.createElement(Tr, Io({}, e, {
                        titleFor: ee,
                        titleLabelId: "".concat(ee, "-label"),
                        titleText: z,
                        titleTag: "label"
                    }), i.createElement(cc, {
                        onKeyDown: D
                    }, i.createElement(dc, {
                        "aria-controls": ee,
                        "aria-expanded": J,
                        ref: Q,
                        color: L.colors.secondary,
                        onClick: oe
                    }, i.createElement(Xr.ZP, {
                        size: "size2",
                        color: L.colors.secondary
                    }, mt || U("block.dropdown.placeholderTouch")), i.createElement(uc, {
                        "aria-hidden": !0,
                        color: L.colors.secondary
                    })), i.createElement(tc.Z, Io({}, M ? {
                        ariaDescribedBy: M
                    } : {}, {
                        backgroundColor: L.colors.background,
                        className: (0, nc.R)(L.font),
                        color: L.colors.secondary,
                        dataQa: "options-fullscreen-select",
                        disableAnimations: en.Z,
                        filterText: N,
                        filterTextPlaceholder: U(x || ""),
                        id: ee,
                        isVisible: J,
                        keyProp: "key",
                        noResultsMessage: U("block.dropdown.hint"),
                        onClose: st,
                        onFilterChange: Te,
                        onSelect: ot,
                        optionHeight: lc,
                        optionRender: function(Ue) {
                            var Ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                            return Lt(Ue, Ne, bt(Ue))
                        },
                        options: Se
                    }))), i.createElement(er, {
                        blockRef: t,
                        blockError: (0, St.lY)(G, o == null ? void 0 : o.type),
                        errorMessageId: (0, yt.$w)(ee),
                        isErrorMessageVisible: re,
                        layout: m,
                        layoutItemsSize: p,
                        onClick: _e,
                        submitForm: ne
                    }))
                };
            const fc = (0, Oe.Ng)(vc);
            var pc = c(81066),
                mc = c(610);

            function Ai() {
                return Ai = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Ai.apply(this, arguments)
            }
            var gc = 8,
                hc = 8,
                Qn = -1,
                yc = en.Z ? 0 : 400,
                bc = new St.Gt,
                Ec = (e, t) => {
                    var r = t.find((o, v) => v === e);
                    return r ? r.index : null
                },
                Oc = e => {
                    var {
                        blockRef: t,
                        choices: r = [],
                        field: o,
                        hasDescription: v,
                        isActive: f,
                        isCommitted: g,
                        isValid: m,
                        labelledBy: p,
                        layout: h,
                        layoutItemsSize: P,
                        onCommitAnswer: T = te.Z,
                        onStageAnswer: x = te.Z,
                        partialResponse: V,
                        placeholder: ne,
                        recenter: U = te.Z,
                        shouldClearInput: L,
                        submitForm: z = te.Z,
                        t: ee = be => be,
                        theme: G = {
                            colors: {
                                secondary: I.Bb,
                                background: I.Bb
                            }
                        },
                        title: ae,
                        uniqueId: $,
                        updateGlobalEventListenerRef: Q = te.Z,
                        validationError: N,
                        value: ve
                    } = e, fe = (0, i.useMemo)(() => {
                        var be = "",
                            lt = (!ve || !ve.length) && V ? V.map(Rr => Rr.ref || Rr.value || Rr) : ve;
                        if (lt && lt.length) {
                            var Nt, Kt = r.find(Rr => Rr.ref === lt[0] || Rr.label === lt[0]);
                            be = (Nt = Kt == null ? void 0 : Kt.label) !== null && Nt !== void 0 ? Nt : null
                        }
                        return be
                    }, [ve]), ye = (0, i.useRef)(null), [De, Le] = (0, i.useState)(fe), [J, re] = (0, i.useState)(!1), [M, k] = (0, i.useState)(Qn), [Re, Se] = (0, i.useState)(Qn), [Ke, _e] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => {
                        ve && ve.length && Le(fe)
                    }, [ve]);
                    var Te = (0, Ie.b5p)((be, lt) => lt, Ri.M);
                    (0, i.useEffect)(() => {
                        f && Q(Ne)
                    }, []), (0, gr.Z)(() => {
                        Q(Ne), !f && J && _(!1), L && Le("")
                    }, [f, L]);
                    var D = () => Te(r, De),
                        oe = () => {
                            if (!(0, mc.F)()) return 0;
                            var {
                                boundingClientRect: be
                            } = P, lt = (be == null ? void 0 : be.height) || window.innerHeight, Nt = lt / 2 - gc - hc;
                            return Nt
                        },
                        st = () => {
                            _e(!0)
                        },
                        ot = () => {
                            _e(!1)
                        },
                        mt = (be, lt) => {
                            x(t, [be], lt)
                        },
                        xe = () => {
                            Se(Qn), x(t, [])
                        },
                        me = (be, lt) => {
                            var Nt = r[be] || {},
                                Kt = Nt.label || "";
                            Nt.ref && (Kt = {
                                id: Nt.id,
                                label: Nt.label,
                                ref: Nt.ref,
                                value: Nt.label
                            }), k(Qn), Se(be), Kt && (setTimeout(() => {
                                _(!1), mt(Kt, lt), Le(Nt.label || "")
                            }, yc), lt.persist(), setTimeout(() => {
                                T(t, lt)
                            }, Ct.YJ))
                        },
                        Ce = be => {
                            be.persist(), T(t, be)
                        },
                        bt = be => {
                            var lt;
                            (lt = ye.current) !== null && lt !== void 0 && lt.contains(be.relatedTarget) || _(!1)
                        },
                        Lt = () => {
                            _(!0)
                        },
                        _ = be => {
                            be !== J && (be && setTimeout(() => U(qr), 200), re(be), k(Qn))
                        },
                        Ue = () => {
                            _(!J)
                        },
                        Ne = be => {
                            if (!!Ke) {
                                var lt = D().length;
                                if ((0, E.aZ)(be)) return lt > 0 && (J ? k(Math.min(lt - 1, M + 1)) : _(!0)), xn(be);
                                if ((0, E.si)(be) && J) return k(Math.max(0, M - 1)), xn(be);
                                if ((0, E.$o)(be)) return _(!1), xn(be);
                                if ((0, E.r$)(be) && !(0, E.tk)(be)) {
                                    if (J && lt > 0 && M !== Qn) {
                                        var Nt = Ec(M, Te(r, De));
                                        me(Nt, be)
                                    } else T(t, be);
                                    xn(be)
                                }
                            }
                        },
                        it = be => {
                            xe();
                            var lt = Te(r, be || ""),
                                Nt = be != null && lt.length > 0;
                            _(Nt), Le(be || ""), k(Qn)
                        },
                        Ht = D().length === 0,
                        lr = J === !0,
                        rr = (Ht || !!g && !m) && !lr,
                        pr = Ht ? bc : (0, St.lY)(N, o == null ? void 0 : o.type),
                        ut = (0, yt.w7)({
                            uniqueId: $,
                            isErrorMessageVisible: rr,
                            hasDescription: v,
                            hasInputInstructions: !1,
                            additionalIds: ""
                        });
                    return i.createElement(Tr, Ai({}, e, {
                        titleFor: $,
                        titleLabelId: "".concat($, "-label"),
                        titleText: ae,
                        titleTag: "label",
                        onKeyDown: Ne,
                        ref: ye
                    }), i.createElement(rn.h, {
                        onEnter: st,
                        onLeave: ot
                    }, i.createElement("div", null, i.createElement(pc.Z, {
                        ariaDescribedBy: ut,
                        id: $,
                        placeholder: ee(ne || ""),
                        options: r,
                        color: G.colors.secondary,
                        contextBackgroundColor: G.colors.background,
                        filterValue: De,
                        hoveredIndex: M,
                        labelId: p,
                        selectedIndex: Re,
                        onFilterChange: it,
                        onInputClick: Lt,
                        onArrowClick: Ue,
                        onOptionClick: me,
                        onInputBlur: bt,
                        optionsMaxHeight: "".concat(lr ? oe() : 0, "px"),
                        optionsOpen: lr
                    }))), i.createElement(er, {
                        blockRef: t,
                        hideButton: lr,
                        errorMessageId: (0, yt.$w)($),
                        blockError: pr,
                        isErrorMessageVisible: rr,
                        layout: h,
                        layoutItemsSize: P,
                        onClick: Ce,
                        submitForm: z
                    }))
                };
            const Cc = Qe((0, Oe.Ng)(Oc));

            function Di() {
                return Di = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Di.apply(this, arguments)
            }
            var Sc = e => {
                var {
                    isTouch: t = !1,
                    onCommitAnswer: r = te.Z,
                    onStageAnswer: o = te.Z,
                    recenter: v = te.Z,
                    t: f = m => m,
                    theme: g = {
                        colors: {
                            secondary: I.Bb,
                            background: I.Bb
                        },
                        font: "Comic Sans MS"
                    }
                } = e;
                return t ? i.createElement(fc, Di({
                    onCommitAnswer: r,
                    onStageAnswer: o,
                    recenter: v,
                    t: f,
                    theme: g
                }, e)) : i.createElement(Cc, e)
            };
            const Pc = (0, Pe.t9)(Sc);
            var $l;

            function Bi() {
                return Bi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Bi.apply(this, arguments)
            }

            function wc(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Ql = b.ZP.div.withConfig({
                displayName: "Group__ButtonWrapper",
                componentId: "sc-1un7g9u-0"
            })($l || ($l = wc([`
  `, `;
  width: 100%;
  outline: none;
  &:focus {
    outline: none;
  }
`])), e => e.isActive ? "" : "pointer-events: none;");
            Ql.displayName = "ButtonWrapper";
            var Jl = e => {
                var {
                    blockRef: t,
                    buttonText: r,
                    children: o,
                    description: v,
                    isActive: f,
                    layout: g,
                    layoutItemsSize: m,
                    submitForm: p,
                    t: h = ae => ae,
                    title: P,
                    uniqueId: T,
                    isScrollTop: x
                } = e, V = (0, i.useRef)(), [ne, U] = (0, i.useState)(!1), L = ae => {
                    f && e.onCommitAnswer(t, ae)
                }, z = (0, i.useCallback)(ae => {
                    ne || ae.stopPropagation()
                }, [ne]);
                j(f, z);
                var ee = "".concat(T, "-title"),
                    G = `
    `.concat(ee, " ").concat(v ? (0, yt.kY)(T) : "", `
  `);
                return i.createElement(Tr, Bi({}, e, {
                    titleLabelId: ee,
                    titleText: P,
                    onKeyDown: z,
                    isScrollTop: x,
                    focusOnContainer: !0
                }), i.createElement(rn.h, {
                    onEnter: () => U(!0),
                    onLeave: () => U(!1)
                }, o), i.createElement(Ql, {
                    ref: V,
                    isActive: f
                }, i.createElement(er, {
                    ariaDescribedBy: G,
                    blockRef: t,
                    buttonText: h(r),
                    layout: g,
                    layoutItemsSize: m,
                    onClick: L,
                    isVisible: f,
                    hideIcon: !0,
                    submitForm: p
                })))
            };
            Jl.propTypes = {
                blockRef: a().string,
                buttonText: a().string,
                children: a().node,
                description: a().oneOfType([a().string, a().array]),
                isActive: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                onCommitAnswer: a().func,
                submitForm: a().func,
                t: a().func,
                title: a().oneOfType([a().string, a().array]),
                uniqueId: a().string.isRequired,
                isScrollTop: a().bool
            };
            const Xl = (0, i.memo)(Jl, Bn);

            function xi() {
                return xi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, xi.apply(this, arguments)
            }
            var ql = e => i.createElement(Xl, xi({
                isScrollTop: !0
            }, e, {
                titleCounterIcon: e.hideMarks ? null : "quote"
            }));
            ql.propTypes = {
                hideMarks: a().bool
            };
            const Tc = ql;

            function ji() {
                return ji = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, ji.apply(this, arguments)
            }
            var ki = e => {
                var t = {
                        true: "".concat(e.blockRef, "-yes"),
                        false: "".concat(e.blockRef, "-no")
                    },
                    r = [{
                        ref: t[!0],
                        value: !0,
                        label: "label.yes.default",
                        keyboardShortcut: "label.yes.shortcut"
                    }, {
                        ref: t[!1],
                        value: !1,
                        label: "label.no.default",
                        keyboardShortcut: "label.no.shortcut"
                    }],
                    o = function(g, m, p) {
                        var [h] = m, {
                            isFromPrefilledAnswer: P = !1
                        } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, T = r.find(V => V.ref === h), x = [{
                            value: T && T.value,
                            label: T && e.t(T.label)
                        }];
                        e.onStageAnswer(e.blockRef, T ? x : [], p, {
                            isFromPrefilledAnswer: P
                        })
                    },
                    v = Array.isArray(e.value) ? e.value[0] : e.value;
                return i.createElement(wo, ji({
                    choices: r
                }, e, {
                    value: [t[v]],
                    onStageAnswer: o,
                    keyboardShortcutType: Ci,
                    verticalAlignment: !0
                }))
            };
            ki.defaultProps = {
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                t: e => e,
                theme: {
                    colors: {
                        secondary: I.Bb,
                        background: I.Bb
                    }
                }
            }, ki.propTypes = {
                title: a().oneOfType([a().array, a().string]),
                isActive: a().bool,
                canAutoFocus: a().bool,
                blockRef: a().string,
                onStageAnswer: a().func,
                onCommitAnswer: a().func,
                partialResponse: a().array,
                t: a().func,
                value: a().array,
                theme: a().object,
                layoutItemsSize: a().object
            };
            const Ic = ki;

            function Fi() {
                return Fi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Fi.apply(this, arguments)
            }
            var Li = e => {
                var t = {
                        true: "".concat(e.blockRef, "-accept"),
                        false: "".concat(e.blockRef, "-reject")
                    },
                    r = [{
                        ref: t[!0],
                        value: !0,
                        label: "block.legal.accept"
                    }, {
                        ref: t[!1],
                        value: !1,
                        label: "block.legal.reject"
                    }],
                    o = (f, g, m) => {
                        var [p] = g, h = r.find(T => T.ref === p), P = [{
                            value: h && h.value,
                            label: h && e.t(h.label)
                        }];
                        e.onStageAnswer(e.blockRef, h ? P : [], m)
                    },
                    v = Array.isArray(e.value) ? e.value[0] : e.value;
                return i.createElement(wo, Fi({
                    choices: r
                }, e, {
                    value: [t[v]],
                    onStageAnswer: o,
                    keyboardShortcutType: Eo,
                    verticalAlignment: !0
                }))
            };
            Li.defaultProps = {
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                t: e => e,
                theme: {
                    colors: {
                        secondary: "#FF00FF",
                        background: "#FFFFFF"
                    }
                }
            }, Li.propTypes = {
                title: a().oneOfType([a().array, a().string]),
                isActive: a().bool,
                canAutoFocus: a().bool,
                blockRef: a().string,
                onStageAnswer: a().func,
                onCommitAnswer: a().func,
                t: a().func,
                value: a().array,
                theme: a().object,
                layoutItemsSize: a().object
            };
            const Rc = Li;

            function Ni() {
                return Ni = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Ni.apply(this, arguments)
            }
            var Mi = (0, I.T)() && (0, Tn.Z)(),
                _i = Mi ? 700 : 0,
                Zi = e => {
                    var {
                        autoComplete: t,
                        blockRef: r,
                        field: o,
                        hasDescription: v,
                        inlineSubmit: f,
                        inputMode: g,
                        inputPattern: m,
                        inputType: p,
                        isActive: h,
                        isCommitted: P,
                        isFirstBlock: T,
                        isValid: x,
                        layout: V,
                        layoutItemsSize: ne,
                        maxLength: U,
                        onCommitAnswer: L,
                        onInputBlur: z,
                        onInputFocus: ee,
                        onStageAnswer: G,
                        placeholder: ae,
                        recenter: $,
                        setBlockTrackingData: Q,
                        submitForm: N,
                        t: ve,
                        theme: fe,
                        title: ye,
                        type: De,
                        uniqueId: Le,
                        validationError: J
                    } = e, [re, M, k] = (0, vn.Z)(Ct.Sx), [Re, Se, Ke] = (0, vn.Z)(Ct.RB), [_e, Te] = (0, i.useState)(null), D = (0, i.useRef)(null), oe = (0, i.useRef)(null), st = (0, i.useMemo)(() => e.value.length > 0 ? e.value[0] : "", [e.value]), [ot, mt] = (0, i.useState)(st);
                    (0, i.useEffect)(() => {
                        st !== ot && mt(st)
                    }, [st]);
                    var xe = D.current === document.activeElement;
                    (0, i.useEffect)(() => () => {
                        k(), Ke()
                    }, []);

                    function me(ut) {
                        var be = xe && (0, I.T)();
                        D && D.current && be && D.current.blur(), ut.persist(), ut.stopPropagation(), setTimeout(() => {
                            h && L(r, ut)
                        }, be ? _i : 0)
                    }

                    function Ce() {
                        D && D.current && D.current.focus()
                    }
                    var bt = () => {
                        (0, I.T)() && setTimeout(() => {
                            $(qr), Mi && D.current && D.current.scrollIntoView({
                                block: "center"
                            })
                        }, _i)
                    };

                    function Lt() {
                        ee(), bt()
                    }

                    function _() {
                        Mi && this.handleRecenter()
                    }
                    var Ue = ut => {
                            var {
                                blocked: be,
                                error: lt
                            } = vo(De, U, ut);
                            M(be), Se(be), Te(lt)
                        },
                        Ne = ut => {
                            oe.current = {
                                timestamp: new Date().getTime(),
                                type: ut.type
                            };
                            var {
                                blocked: be,
                                error: lt
                            } = fo(U, ut);
                            M(be), Se(be), Te(lt)
                        },
                        it = (0, i.useCallback)(ut => {
                            Aa(De, ut);
                            var be = ut.nativeEvent || ut;
                            (0, E.r$)(be) && !(0, E.tk)(be) ? ((0, I.T)() && D && D.current && D.current.blur(), ut.persist && ut.persist(), setTimeout(() => {
                                h && L(r, be)
                            }, (0, I.T)() ? _i : 0)) : oe.current = {
                                key: ut.key,
                                keyCode: ut.keyCode,
                                timestamp: new Date().getTime(),
                                type: ut.type
                            }, (0, E.NC)(be) && (ut.stopPropagation(), ut.persist && ut.persist(), f(r, be))
                        }, [r, h, f, L]);
                    j(h, it);
                    var Ht = ut => {
                            if (!!h) {
                                var be = e.value[0] || "",
                                    lt = go(oe.current, ut, be);
                                lt && Q(r, tn.Yy, tn.Hz.BROWSER_AUTO_COMPLETE);
                                var Nt = ut.target.value;
                                mt(Nt), G(r, Nt.slice(0, U), ut)
                            }
                        },
                        lr = P && !x,
                        rr = lr || Re,
                        pr = (0, yt.w7)({
                            uniqueId: Le,
                            isErrorMessageVisible: rr,
                            hasDescription: v
                        });
                    return i.createElement(Tr, Ni({}, e, {
                        isShaking: re,
                        titleFor: Le,
                        titleTag: "label",
                        titleText: ye,
                        delayFocus: T ? Ct.r$ : 0
                    }), i.createElement(zn.Z, {
                        autoComplete: t,
                        getRef: D,
                        placeholder: ve(ae),
                        onKeyDown: it,
                        onKeyPress: Ue,
                        onChange: Ht,
                        onPaste: Ne,
                        onFocus: Lt,
                        onClick: _,
                        onBlur: z,
                        maxLength: U,
                        name: t,
                        inputId: Le,
                        value: ot,
                        color: fe.colors.secondary,
                        type: p,
                        pattern: m,
                        inputMode: g,
                        "aria-describedby": pr,
                        tabIndex: 0
                    }), i.createElement(er, {
                        blockRef: r,
                        errorMessageId: (0, yt.$w)(Le),
                        blockError: Re ? _e : (0, St.lY)(J, o == null ? void 0 : o.type),
                        isErrorMessageVisible: rr,
                        layout: V,
                        layoutItemsSize: ne,
                        onClick: me,
                        onFocusLost: Ce,
                        submitForm: N
                    }))
                };
            Zi.defaultProps = {
                inlineSubmit: te.Z,
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                setBlockTrackingData: te.Z,
                submitForm: te.Z,
                t: te.Z,
                theme: {
                    colors: {
                        secondary: I.Bb
                    }
                },
                value: [],
                autoComplete: void 0
            }, Zi.propTypes = {
                autoComplete: a().string,
                blockRef: a().string,
                canAutoFocus: a().bool,
                field: {
                    type: a().string
                },
                hasDescription: a().bool,
                index: a().number,
                inlineSubmit: a().func,
                inputMode: a().string,
                inputPattern: a().string,
                inputType: a().string,
                isActive: a().bool,
                isCommitted: a().bool,
                isValid: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                maxLength: a().number,
                onCommitAnswer: a().func,
                onInputBlur: a().func,
                onInputFocus: a().func,
                onStageAnswer: a().func,
                placeholder: a().string,
                recenter: a().func,
                setBlockTrackingData: a().func,
                submitForm: a().func,
                t: a().func,
                theme: a().object,
                title: a().oneOfType([a().string, a().array]),
                type: a().string,
                uniqueId: a().string.isRequired,
                validationError: a().instanceOf(St.FU),
                value: a().arrayOf(a().oneOfType([a().string, a().number])),
                isFirstBlock: a().bool
            };
            const es = (0, i.memo)(Zi, Bn);

            function Vi() {
                return Vi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Vi.apply(this, arguments)
            }
            var Ac = 15,
                Dc = /\D+/g,
                Bc = e => {
                    var t = (r, o, v) => {
                        var f = parseInt(String(o).replace(Dc, ""), 10);
                        e.onStageAnswer(e.blockRef, f, v)
                    };
                    return i.createElement(es, Vi({}, e, {
                        inputMode: "numeric",
                        inputPattern: "[0-9]*",
                        autoComplete: "off",
                        maxLength: Ac,
                        onStageAnswer: t
                    }))
                };
            const xc = Bc;

            function Yi() {
                return Yi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Yi.apply(this, arguments)
            }

            function ts(e, t, r, o, v, f, g) {
                try {
                    var m = e[f](g),
                        p = m.value
                } catch (h) {
                    r(h);
                    return
                }
                m.done ? t(p) : Promise.resolve(p).then(o, v)
            }

            function Ui(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(o, v) {
                        var f = e.apply(t, r);

                        function g(p) {
                            ts(f, o, v, g, m, "next", p)
                        }

                        function m(p) {
                            ts(f, o, v, g, m, "throw", p)
                        }
                        g(void 0)
                    })
                }
            }
            var jc = "https://",
                kc = new RegExp(/(https?|ftp|app):\/\//),
                rs = e => {
                    var t = function() {
                            var f = Ui(function*(g) {
                                var {
                                    blockRef: m
                                } = e, p = Array.isArray(e.value) ? e.value[0] : e.value;
                                if (p) {
                                    var h = p.trim(),
                                        P = kc.test(h) ? h : "".concat(jc).concat(h);
                                    return e.onStageAnswer(m, P, g)
                                }
                            });
                            return function(m) {
                                return f.apply(this, arguments)
                            }
                        }(),
                        r = (f, g) => {
                            t(g), e.onCommitAnswer(f, g)
                        },
                        o = function() {
                            var f = Ui(function*(g) {
                                g.persist && g.persist();
                                var {
                                    submitForm: m
                                } = e;
                                yield t(g), m(g)
                            });
                            return function(m) {
                                return f.apply(this, arguments)
                            }
                        }(),
                        v = function() {
                            var f = Ui(function*(g, m) {
                                var {
                                    inlineSubmit: p
                                } = e;
                                yield t(m), p(g, m)
                            });
                            return function(m, p) {
                                return f.apply(this, arguments)
                            }
                        }();
                    return i.createElement(es, Yi({}, e, {
                        inlineSubmit: v,
                        inputType: "url",
                        onCommitAnswer: r,
                        submitForm: o
                    }))
                };
            rs.propTypes = {
                blockRef: a().string,
                inlineSubmit: a().func,
                onCommitAnswer: a().func,
                onStageAnswer: a().func,
                submitForm: a().func,
                value: a().array
            };
            const Fc = rs;
            var Lc = c(10619),
                Nc = c(85800),
                Mc = c(92354),
                _c = c(97140),
                Zc = c(8029),
                qe = c(61270),
                ns;

            function Vc(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function as(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function Do(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? as(Object(r), !0).forEach(function(o) {
                        Yc(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : as(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function Yc(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var Uc = {
                    [qe.Z.CardCvc]: "createCardCvcElement",
                    [qe.Z.CardExpiry]: "createCardExpiryElement",
                    [qe.Z.CardNumber]: "createCardNumberElement"
                },
                os = (e, t, r) => {
                    var o = {
                        color: "".concat(e),
                        fontFamily: t,
                        lineHeight: "".concat(Je.ik[r].lineHeight, "px"),
                        fontSize: "".concat(Je.ik[r].fontSize, "px"),
                        fontWeight: "".concat(Je.vC.regular),
                        fontSmoothing: "antialiased",
                        ":-webkit-autofill": {
                            color: "".concat(e)
                        }
                    };
                    return {
                        base: Do(Do({}, o), {}, {
                            "::placeholder": Do(Do({}, o), {}, {
                                color: "".concat((0, I.Yv)(e))
                            })
                        }),
                        invalid: {
                            color: "#BB3C50"
                        }
                    }
                },
                Hc = b.ZP.div.withConfig({
                    displayName: "stripe-element__Root",
                    componentId: "sc-rlnrpo-0"
                })(ns || (ns = Vc([`
  padding-bottom: `, `px;
  // needed to override safari autocomplete background color
  background-color: transparent !important;
`])), Je.bf),
                Hi = e => {
                    var {
                        type: t,
                        color: r,
                        fontStack: o,
                        onFocus: v,
                        onBlur: f,
                        onChange: g,
                        stripeService: m
                    } = e, p = (0, i.useRef)(), h = (0, i.useRef)(), P = (0, Oe.Gc)(), T = (0, b.Fg)(), x = (0, Wr.rN)(Je.jA.subfieldInputText, P, T.fields.fontSize), V = ne => {
                        var U = !!h.current._autofilled;
                        g(ne, U)
                    };
                    return (0, i.useEffect)(() => {
                        if (m) return h.current = m[Uc[t]]({
                            style: os(r, o, x)
                        }), h.current.on("change", V), h.current.on("focus", v), h.current.on("blur", f), h.current.mount(p.current), () => {
                            h.current && h.current.destroy()
                        }
                    }, [m]), (0, i.useEffect)(() => {
                        h.current && h.current.update({
                            style: os(r, o, x)
                        })
                    }, [r, P]), i.createElement(Hc, {
                        ref: p
                    })
                };
            Hi.propTypes = {
                type: a().string,
                color: a().string,
                fontStack: a().string,
                onFocus: a().func,
                onBlur: a().func,
                onChange: a().func,
                stripeService: a().object
            }, Hi.defaultProps = {
                color: I.Bb,
                onFocus: te.Z,
                onBlur: te.Z,
                onChange: te.Z
            };
            const Ki = Hi;

            function zi() {
                return zi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, zi.apply(this, arguments)
            }

            function is(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function Ir(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? is(Object(r), !0).forEach(function(o) {
                        mn(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : is(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function mn(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var Kc = "Jane Smith";
            class Wi extends i.PureComponent {
                constructor(t) {
                    super(t), mn(this, "shouldHideHelperText", () => {
                        var r = document.activeElement.tagName !== "BUTTON";
                        this.state.hideHelperText !== r && this.setState({
                            hideHelperText: r
                        })
                    }), mn(this, "getAnswerValue", () => {
                        var {
                            value: r
                        } = this.props;
                        return r && r.length && r[0] ? r[0] : {
                            [qe.Z.CardCvc]: {
                                empty: !0
                            },
                            [qe.Z.CardExpiry]: {
                                empty: !0
                            },
                            [qe.Z.CardNumber]: {
                                empty: !0
                            }
                        }
                    }), mn(this, "handleInputBlur", r => {
                        this.setState({
                            focusStates: Ir(Ir({}, this.state.focusStates), {}, {
                                [r]: !1
                            })
                        }), this.props.onInputBlur(), this.shouldHideHelperText()
                    }), mn(this, "handleInputFocus", r => {
                        this.setState({
                            focusStates: Ir(Ir({}, this.state.focusStates), {}, {
                                [r]: !0
                            })
                        }), this.props.onInputFocus(), this.shouldHideHelperText()
                    }), mn(this, "handleCommit", r => {
                        r.persist && r.persist(), setTimeout(() => {
                            this.props.isActive && this.props.onCommitAnswer(this.props.blockRef, r)
                        }, 0)
                    }), mn(this, "stage", (r, o) => {
                        if (r && !r.cardholdersName && r[qe.Z.CardCvc].empty && r[qe.Z.CardExpiry].empty && r[qe.Z.CardNumber].empty) {
                            this.props.onStageAnswer(this.props.blockRef, [], o);
                            return
                        }
                        this.props.onStageAnswer(this.props.blockRef, [r], o)
                    }), mn(this, "handleInputChange", (r, o, v) => {
                        var f = o.type ? o : Ir(Ir({}, o), {}, {
                                type: "change"
                            }),
                            g = v;
                        if (r === qe.Z.CardName) {
                            var m = this.state.valueStates[r] || "";
                            g = go(this.lastInputEventRef.current, o, m), this.setState(Ir(Ir({}, this.state), {}, {
                                valueStates: Ir(Ir({}, this.state.valueStates), {}, {
                                    [r]: o.target.value
                                })
                            }))
                        }
                        if (g) {
                            var {
                                blockRef: p,
                                setBlockTrackingData: h
                            } = this.props;
                            h(p, tn.Yy, tn.Hz.BROWSER_AUTO_COMPLETE)
                        }
                        if (r === qe.Z.CardName) {
                            this.stage(Ir(Ir({}, this.getAnswerValue()), {}, {
                                cardholdersName: o.target.value
                            }), f);
                            return
                        }
                        this.stage(Ir(Ir({}, this.getAnswerValue()), {}, {
                            [r]: {
                                error: o.error,
                                complete: o.complete,
                                empty: o.empty
                            }
                        }), f)
                    }), mn(this, "handleKeyDown", r => {
                        Aa(this.props.type, r), (0, E.r$)(r) ? (r.preventDefault(), this.handleCommit(r)) : this.lastInputEventRef.current = {
                            key: r.key,
                            keyCode: r.keyCode,
                            timestamp: new Date().getTime(),
                            type: r.type
                        }
                    }), mn(this, "handlePaste", r => {
                        this.lastInputEventRef.current = {
                            timestamp: new Date().getTime(),
                            type: r.type
                        }
                    }), this.lastInputEventRef = i.createRef(null), this.state = {
                        focusStates: {
                            [qe.Z.CardCvc]: !1,
                            [qe.Z.CardExpiry]: !1,
                            [qe.Z.CardName]: !1,
                            [qe.Z.CardNumber]: !1
                        },
                        valueStates: {
                            [qe.Z.CardName]: !1
                        },
                        hideHelperText: !0
                    }
                }
                componentDidMount() {
                    this.props.isActive && this.props.updateGlobalEventListenerRef(this.handleKeyDown)
                }
                componentDidUpdate(t) {
                    this.props.isActive && !t.isActive && this.props.updateGlobalEventListenerRef(this.handleKeyDown)
                }
                render() {
                    var t, r, o, v, f, g, m, p, h, P, T, x, {
                            blockRef: V,
                            buttonText: ne,
                            hasDescription: U,
                            isCommitted: L,
                            layout: z,
                            layoutItemsSize: ee,
                            price: G,
                            submitForm: ae,
                            stripeService: $,
                            textAlign: Q,
                            theme: N,
                            t: ve,
                            title: fe,
                            uniqueId: ye,
                            validationErrors: De
                        } = this.props,
                        Le = this.getAnswerValue(),
                        {
                            focusStates: J,
                            hideHelperText: re
                        } = this.state,
                        M = "".concat(ye, "-card-name"),
                        k = "".concat(ye, "-hint-charge"),
                        Re = "".concat(ye, "-hint-store"),
                        Se = "".concat(ye, "-supported-cards"),
                        Ke = (0, yt.w7)({
                            uniqueId: ye,
                            hasDescription: U,
                            additionalIds: "".concat(k, " ").concat(Re, " ").concat(Se)
                        }),
                        _e = {};
                    return Object.keys(qe.Z).forEach(Te => {
                        var D = qe.Z[Te],
                            oe = De.filter(st => st.type === D)[0];
                        _e[D] = {
                            validationError: !!oe && (0, or.Z)(ve(oe == null ? void 0 : oe.label)),
                            isVisible: !!oe && ((oe == null ? void 0 : oe.showImmediately) || L)
                        }
                    }), i.createElement(Tr, zi({}, this.props, {
                        titleFor: M,
                        titleTag: "label",
                        titleText: fe
                    }), i.createElement(Wr.ZP, {
                        type: Je.jA.blockDescription,
                        color: N.colors.primary,
                        htmlTag: "p",
                        id: k
                    }, ve("block.payment.hintCharge"), " ", i.createElement(Mc.Z, null, G)), i.createElement(Wr.ZP, {
                        type: Je.jA.blockDescription,
                        color: N.colors.primary,
                        htmlTag: "p",
                        id: Re
                    }, ve("block.payment.hintStore")), i.createElement(Nn.Z, {
                        id: Se
                    }, "".concat(ve("block.payment.supportedCards"), " ").concat(_c.e.join(", "))), i.createElement(Zc.Z, {
                        cardNameId: M,
                        cardNameElement: i.createElement("form", null, i.createElement(zn.Z, {
                            "aria-describedby": Ke,
                            autoComplete: "cc-name",
                            color: N.colors.secondary,
                            inputId: M,
                            onBlur: () => this.handleInputBlur(qe.Z.CardName),
                            onChange: Te => this.handleInputChange(qe.Z.CardName, Te),
                            onFocus: () => this.handleInputFocus(qe.Z.CardName),
                            onKeyDown: this.handleKeyDown,
                            onPaste: this.handlePaste,
                            placeholder: Kc,
                            fontSizeType: Je.jA.subfieldInputText,
                            value: Le.cardholdersName || ""
                        })),
                        cardNameErrorMessage: ((t = _e[qe.Z.CardName]) === null || t === void 0 ? void 0 : t.isVisible) && ((r = _e[qe.Z.CardName]) === null || r === void 0 ? void 0 : r.validationError),
                        cardNumberElement: i.createElement(Ki, {
                            color: N.colors.secondary,
                            fontStack: N.fontStack,
                            onBlur: () => this.handleInputBlur(qe.Z.CardNumber),
                            onChange: (Te, D) => this.handleInputChange(qe.Z.CardNumber, Te, D),
                            onFocus: () => this.handleInputFocus(qe.Z.CardNumber),
                            stripeService: $,
                            type: qe.Z.CardNumber
                        }),
                        cardNumberErrorMessage: ((o = _e[qe.Z.CardNumber]) === null || o === void 0 ? void 0 : o.isVisible) && ((v = _e[qe.Z.CardNumber]) === null || v === void 0 ? void 0 : v.validationError),
                        cardExpiryElement: i.createElement(Ki, {
                            color: N.colors.secondary,
                            fontStack: N.fontStack,
                            onBlur: () => this.handleInputBlur(qe.Z.CardExpiry),
                            onChange: (Te, D) => this.handleInputChange(qe.Z.CardExpiry, Te, D),
                            onFocus: () => this.handleInputFocus(qe.Z.CardExpiry),
                            stripeService: $,
                            type: qe.Z.CardExpiry
                        }),
                        cardExpiryErrorMessage: ((f = _e[qe.Z.CardExpiry]) === null || f === void 0 ? void 0 : f.isVisible) && ((g = _e[qe.Z.CardExpiry]) === null || g === void 0 ? void 0 : g.validationError),
                        cardCVCElement: i.createElement(Ki, {
                            color: N.colors.secondary,
                            fontStack: N.fontStack,
                            onBlur: () => this.handleInputBlur(qe.Z.CardCvc),
                            onChange: (Te, D) => this.handleInputChange(qe.Z.CardCvc, Te, D),
                            onFocus: () => this.handleInputFocus(qe.Z.CardCvc),
                            stripeService: $,
                            type: qe.Z.CardCvc
                        }),
                        cardCVCErrorMessage: ((m = _e[qe.Z.CardCvc]) === null || m === void 0 ? void 0 : m.isVisible) && ((p = _e[qe.Z.CardCvc]) === null || p === void 0 ? void 0 : p.validationError),
                        color: N.colors.secondary,
                        id: ye,
                        isCardNameErrorVisible: (h = _e[qe.Z.CardName]) === null || h === void 0 ? void 0 : h.isVisible,
                        isCardNameFocused: J[qe.Z.CardName],
                        isCardNumberErrorVisible: (P = _e[qe.Z.CardNumber]) === null || P === void 0 ? void 0 : P.isVisible,
                        isCardNumberFocused: J[qe.Z.CardNumber],
                        isCardCVCErrorVisible: (T = _e[qe.Z.CardCvc]) === null || T === void 0 ? void 0 : T.isVisible,
                        isCardCVCFocused: J[qe.Z.CardCvc],
                        isCardExpiryErrorVisible: (x = _e[qe.Z.CardExpiry]) === null || x === void 0 ? void 0 : x.isVisible,
                        isCardExpiryFocused: J[qe.Z.CardExpiry],
                        stripeLinkText: ve("block.payment.securedBy"),
                        textAlign: Q
                    }), i.createElement(er, {
                        blockRef: V,
                        buttonText: ne,
                        hideHelperText: re,
                        hideIcon: !0,
                        isErrorMessageVisible: !1,
                        layout: z,
                        layoutItemsSize: ee,
                        onClick: this.handleCommit,
                        submitForm: ae
                    }))
                }
            }
            Wi.propTypes = {
                blockRef: a().string,
                buttonText: a().string,
                hasDescription: a().bool,
                isActive: a().bool,
                isCommitted: a().bool,
                canAutoFocus: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                onCommitAnswer: a().func,
                onInputBlur: a().func,
                onInputFocus: a().func,
                onStageAnswer: a().func,
                price: a().string,
                setBlockTrackingData: a().func,
                submitForm: a().func,
                stripeErrorCodes: a().object,
                stripeService: a().object,
                t: a().func,
                textAlign: a().oneOf(ue.EC),
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                type: a().string,
                uniqueId: a().string.isRequired,
                updateGlobalEventListenerRef: a().func.isRequired,
                validationErrors: a().array,
                value: a().array
            }, Wi.defaultProps = {
                theme: {
                    colors: {
                        primary: I.Bb,
                        secondary: I.Bb
                    }
                },
                onInputFocus: te.Z,
                onInputBlur: te.Z,
                setBlockTrackingData: te.Z,
                t: Ie.yRu,
                validationErrors: [],
                submitForm: te.Z,
                value: [{
                    cardholdersName: "",
                    isCardEmpty: !0,
                    isCardValid: !1
                }],
                stripeErrorCodes: {},
                updateGlobalEventListenerRef: te.Z
            };
            const zc = Qe(Wi);
            var Wc = e => ({
                price: (0, w.fG)(e),
                stripeErrorCodes: Lc.Z,
                stripeService: (0, Nc.UL)(e)
            });
            const Gc = (0, We.$j)(Wc)(Qr((0, Oe.Ng)(zc)));
            var $c = c(19086);

            function Qc(e) {
                return e.reduce((t, r, o) => t + r * Math.pow(10, o), 0)
            }

            function Jc(e) {
                var t = (0, i.useRef)([]),
                    r = (0, i.useRef)(null);

                function o() {
                    clearTimeout(r.current), r.current = null
                }
                var v = f => {
                    (0, E.fy)(f) ? (r.current === null && (f.persist && f.persist(), t.current = [], r.current = setTimeout(() => {
                        e(Qc(t.current), f)
                    }, Ct.uU)), t.current.unshift(parseInt(f.key, 10))) : o()
                };
                return {
                    onKeyDown: v,
                    clearNumberTimeout: o
                }
            }
            const ls = Jc;

            function Gi() {
                return Gi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Gi.apply(this, arguments)
            }

            function ss(e, t, r, o, v, f, g) {
                try {
                    var m = e[f](g),
                        p = m.value
                } catch (h) {
                    r(h);
                    return
                }
                m.done ? t(p) : Promise.resolve(p).then(o, v)
            }

            function Xc(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(o, v) {
                        var f = e.apply(t, r);

                        function g(p) {
                            ss(f, o, v, g, m, "next", p)
                        }

                        function m(p) {
                            ss(f, o, v, g, m, "throw", p)
                        }
                        g(void 0)
                    })
                }
            }
            var $i = e => {
                var [t, r] = (0, i.useState)(!1), {
                    blockIndex: o,
                    blockRef: v,
                    field: f,
                    hasBeenInteractedWith: g,
                    isActive: m,
                    isCommitted: p,
                    isFirstBlock: h,
                    isValid: P,
                    labels: T,
                    layout: x,
                    layoutItemsSize: V,
                    onCommitAnswer: ne,
                    onStageAnswer: U,
                    startAtOne: L,
                    steps: z,
                    submitForm: ee,
                    theme: G,
                    title: ae,
                    uniqueId: $,
                    validationError: Q,
                    value: N
                } = e, ve = L ? 1 : 0, fe = ve + z - 1, ye = N && N.length > 0 ? N[0] : void 0, De = (0, yt.$w)($), Le = p && !P;
                (0, i.useEffect)(() => {
                    var D = function() {
                        var oe = Xc(function*() {
                            var st = o === 0 ? (0, $n.rJ)() : null,
                                ot = (0, $n.i4)(v) || st,
                                mt = ot && ot[0] >= ve && ot[0] <= fe,
                                xe = N && N.some(Boolean);
                            m && !xe && !g && mt && (yield(0, $n.PB)(), U(v, ot, null, {
                                isFromPrefilledAnswer: !0
                            }), h && (yield(0, $n.Be)(), ne(v, null, {
                                isFromPrefilledAnswer: !0
                            })))
                        });
                        return function() {
                            return oe.apply(this, arguments)
                        }
                    }();
                    D()
                }, [m]);
                var J = Object.keys(T).length > 0,
                    re = (0, yt.w7)({
                        isErrorMessageVisible: Le,
                        hasInputInstructions: J,
                        uniqueId: $
                    }),
                    {
                        onKeyDown: M,
                        clearNumberTimeout: k
                    } = ls(_e),
                    Re = (0, i.useCallback)(D => {
                        !(0, E.NC)(D) && !(0, E.id)(D) && D.stopPropagation(), t && M(D)
                    }, [t, M]);
                j(m, Re);

                function Se(D, oe) {
                    _e(D, oe)
                }

                function Ke(D) {
                    D.stopPropagation(), m && ne(v, D)
                }

                function _e(D, oe) {
                    if (k(), ye === D) {
                        U(v, [], oe);
                        return
                    }
                    D <= fe && D >= ve && (U(v, [D], oe), setTimeout(() => {
                        ne(v, oe)
                    }, Ct.YJ))
                }
                var Te = () => {
                    if (!J) return null;
                    var D = (0, yt.Pq)($);
                    return i.createElement(Nn.Z, {
                        id: D,
                        tabIndex: "-1"
                    }, T.left, ", ", ve, ", ", T.right, ", ", fe)
                };
                return i.createElement(Tr, Gi({}, e, {
                    titleText: ae,
                    titleTag: "legend",
                    onKeyDown: Re,
                    focusOnContainer: !0
                }), i.createElement(rn.h, {
                    onEnter: () => r(!0),
                    onLeave: () => r(!1)
                }, i.createElement("div", null, i.createElement($c.Z, {
                    ariaDescribedBy: re,
                    color: G.colors.secondary,
                    labelLeft: T.left,
                    labelCenter: T.center,
                    labelRight: T.right,
                    max: fe,
                    min: ve,
                    onChange: Se,
                    selectedAmount: ye
                }), Te())), i.createElement(er, {
                    blockRef: v,
                    blockError: (0, St.lY)(Q, f == null ? void 0 : f.type),
                    errorMessageId: De,
                    isErrorMessageVisible: Le,
                    layout: x,
                    layoutItemsSize: V,
                    onClick: Ke,
                    submitForm: ee
                }))
            };
            $i.defaultProps = {
                labels: {},
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                submitForm: te.Z,
                theme: {
                    colors: {
                        secondary: I.Bb
                    }
                }
            }, $i.propTypes = {
                blockIndex: a().number,
                blockRef: a().string,
                canAutoFocus: a().bool,
                field: a().object,
                hasBeenInteractedWith: a().bool,
                isActive: a().bool,
                isCommitted: a().bool,
                isFirstBlock: a().bool,
                isValid: a().bool,
                labels: a().shape({
                    left: a().string,
                    center: a().string,
                    right: a().string
                }),
                layout: a().object,
                layoutItemsSize: a().object,
                max: a().number,
                min: a().number,
                onCommitAnswer: a().func,
                onStageAnswer: a().func,
                startAtOne: a().bool,
                steps: a().number,
                submitForm: a().func,
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                type: a().string,
                uniqueId: a().string.isRequired,
                validationError: a().instanceOf(St.FU),
                value: a().array
            };
            const qc = $i;
            var eu = c(65534);

            function Qi() {
                return Qi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Qi.apply(this, arguments)
            }
            var Ji = e => {
                var {
                    blockRef: t,
                    field: r,
                    isActive: o,
                    isCommitted: v,
                    isValid: f,
                    layout: g,
                    layoutItemsSize: m,
                    onCommitAnswer: p,
                    onStageAnswer: h,
                    shape: P,
                    steps: T,
                    submitForm: x,
                    textAlign: V,
                    theme: ne,
                    title: U,
                    uniqueId: L,
                    validationError: z,
                    value: ee
                } = e, G = (0, i.useContext)($t), [ae, $] = (0, i.useState)(!1), Q = 1, N = T, ve = ee && ee.length > 0 ? ee[0] : void 0, fe = (0, yt.$w)(L), ye = v && !f, {
                    onKeyDown: De,
                    clearNumberTimeout: Le
                } = ls(k), J = (0, i.useCallback)(Re => {
                    var Se = Re.nativeEvent || Re;
                    !(0, E.NC)(Se) && !(0, E.id)(Se) && Re.stopPropagation(), ae && De(Re)
                }, [ae, De]);
                j(o, J);

                function re(Re, Se) {
                    k(Re, Se)
                }

                function M(Re) {
                    Re.stopPropagation(), o && p(t, Re)
                }

                function k(Re, Se) {
                    if (Le(), ve === Re) {
                        h(t, [], Se);
                        return
                    }
                    Re <= N && Re >= Q && (Se.persist && Se.persist(), h(t, [Re], Se), setTimeout(() => {
                        p(t, Se)
                    }, Ct.YJ))
                }
                return i.createElement(Tr, Qi({}, e, {
                    titleText: U,
                    titleTag: "legend",
                    onKeyDown: J,
                    focusOnContainer: !0
                }), i.createElement(rn.h, {
                    onEnter: () => $(!0),
                    onLeave: () => $(!1)
                }, i.createElement("div", null, i.createElement(eu.Z, {
                    ariaDescribedBy: ye ? fe : null,
                    color: ne.colors.secondary,
                    iconName: P,
                    max: N,
                    min: Q,
                    onChange: re,
                    selectedAmount: ve,
                    textAlign: V,
                    isBlockChanging: G
                }))), i.createElement(er, {
                    blockRef: t,
                    blockError: (0, St.lY)(z, r == null ? void 0 : r.type),
                    errorMessageId: fe,
                    isErrorMessageVisible: ye,
                    layout: g,
                    layoutItemsSize: m,
                    onClick: M,
                    submitForm: x
                }))
            };
            Ji.defaultProps = {
                onCommitAnswer: te.Z,
                onStageAnswer: te.Z,
                shape: "circle",
                submitForm: te.Z,
                theme: {
                    colors: {
                        secondary: I.Bb
                    }
                }
            }, Ji.propTypes = {
                blockRef: a().string,
                canAutoFocus: a().bool,
                field: a().object,
                isActive: a().bool,
                isCommitted: a().bool,
                isValid: a().bool,
                layout: a().object,
                layoutItemsSize: a().object,
                max: a().number,
                min: a().number,
                onCommitAnswer: a().func,
                onStageAnswer: a().func,
                shape: a().string,
                steps: a().number,
                submitForm: a().func,
                textAlign: a().oneOf(ue.EC),
                theme: a().object,
                title: a().oneOfType([a().array, a().string]),
                uniqueId: a().string.isRequired,
                validationError: a().instanceOf(St.FU),
                value: a().array
            };
            const tu = Ji;
            var ru = ["type", "featureFlags"];

            function nu(e, t) {
                if (e == null) return {};
                var r = au(e, t),
                    o, v;
                if (Object.getOwnPropertySymbols) {
                    var f = Object.getOwnPropertySymbols(e);
                    for (v = 0; v < f.length; v++) o = f[v], !(t.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, o) || (r[o] = e[o]))
                }
                return r
            }

            function au(e, t) {
                if (e == null) return {};
                var r = {},
                    o = Object.keys(e),
                    v, f;
                for (f = 0; f < o.length; f++) v = o[f], !(t.indexOf(v) >= 0) && (r[v] = e[v]);
                return r
            }
            var ou = {
                    [jt.Hu]: {
                        component: (0, Gt.Z)(fn)
                    },
                    [jt.yb]: {
                        component: (0, Gt.Z)(Pc)
                    },
                    [jt.ML]: {
                        component: (0, Gt.Z)(As)
                    },
                    [jt.wM]: {
                        component: (0, Gt.Z)(Xl)
                    },
                    [jt.l8]: {
                        component: (0, Gt.Z)(Rc)
                    },
                    [jt.oP]: {
                        component: (0, Gt.Z)(mo)
                    },
                    [jt.aR]: {
                        component: (0, Gt.Z)(wo)
                    },
                    [jt.Wu]: {
                        component: (0, Gt.Z)(xc)
                    },
                    [jt.Jx]: {
                        component: (0, Gt.Z)(ec)
                    },
                    [jt.mQ]: {
                        component: (0, Gt.Z)(Tc)
                    },
                    [jt.cy]: {
                        component: (0, Gt.Z)(Fc)
                    },
                    [jt.Xj]: {
                        component: (0, Gt.Z)(Ic)
                    },
                    [jt.xc]: {
                        component: (0, Gt.Z)(Gc)
                    },
                    [jt.xg]: {
                        component: (0, Gt.Z)(qc)
                    },
                    [jt.Si]: {
                        component: (0, Gt.Z)(tu)
                    }
                },
                iu = {
                    component: (0, Gt.Z)(di)
                },
                Xi = e => {
                    var {
                        type: t,
                        featureFlags: r
                    } = e, o = nu(e, ru);
                    (0, i.useEffect)(() => {
                        var {
                            blockRef: f,
                            isActive: g,
                            isLivePreview: m,
                            onStageAnswer: p,
                            partialResponse: h,
                            setBlockTrackingData: P,
                            value: T
                        } = o;
                        !m && g && h && (T == null || !T.length) && (P(f, tn.Yy, tn.Hz.PARTIAL_RESPONSE), p(f, h, null, {
                            isFromPrefilledAnswer: !0
                        }))
                    }, [o.isActive]);
                    var v = (0, Sn.cI)(t, r) ? iu : ou[t];
                    return v ? i.createElement(v.component, Object.assign({
                        type: t,
                        featureFlags: r
                    }, o, v.props)) : null
                };
            Xi.defaultProps = {
                setBlockTrackingData: te.Z
            }, Xi.propTypes = {
                featureFlags: a().object,
                setBlockTrackingData: a().func,
                type: a().string
            };
            const lu = Xi;

            function cs(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(e, v).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function qi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? cs(Object(r), !0).forEach(function(o) {
                        su(e, o, r[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cs(Object(r)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
                    })
                }
                return e
            }

            function su(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var cu = (0, Ie.b5p)(JSON.stringify, w.$z),
                uu = (e, t) => {
                    var r = null;
                    return (o, v) => {
                        var f, g = (0, w.Fx)(o, v),
                            m = (0, w.GD)(o, v),
                            p = (0, R.sf)(o, g),
                            h = m && (0, w.Wh)(m),
                            P = (0, Z.gh)(o),
                            T = !(0, w.z0)(o) && !(0, w.Us)(o);
                        if (r && !p && r.isActive === p && r.theme === P && r.isCommitted === h && r.isBlockListVisible === T) return r;
                        var x = (0, R.s5)((0, O.Bc)(o), g.type),
                            V = !(0, w.vQ)(g.type, m),
                            ne = m && (0, w.z5)(m),
                            U = m && (0, w.lJ)(m),
                            L = (0, Kr._S)(o, v),
                            z = (0, Kr.Kw)(o, v),
                            ee = (0, nt.xl)(o),
                            G = e(o),
                            ae = t(o),
                            $ = ee(G, {
                                allowHyperlinks: !0
                            }),
                            Q = ee(ae, {
                                allowHyperlinks: !0
                            }),
                            N = g.application ? bn(o, v) : void 0,
                            ve = (0, Y.oo)(o),
                            fe = (0, O.qC)(o),
                            ye = !ve && !(0, O.Yo)(o),
                            De = !ve && !(0, O.Hg)(o),
                            Le = (0, yn.O)(o, v),
                            J = cn[Le],
                            re = (0, ue.qe)((f = P.fields) === null || f === void 0 ? void 0 : f.alignment, g.layout.type),
                            M = qi(qi({}, g), {}, {
                                abTests: (0, Dt.UF)(o),
                                iframeUrl: N,
                                field: (0, w.pw)(o, v),
                                blockIndex: (0, w.mn)(o, v),
                                isFirstBlock: (0, R.pi)(o, v),
                                title: $,
                                description: Q,
                                hasBranding: fe,
                                hasNavigationArrows: ye,
                                hasProgress: De,
                                hasDescription: Boolean(ae && ae.length),
                                formId: (0, O.cY)(o),
                                uniqueId: (0, R.Kh)(o, v),
                                autoComplete: J,
                                encryptable: x,
                                featureFlags: (0, Dt.BZ)(o),
                                isAnswered: V,
                                isActive: p,
                                isValid: ne,
                                hasBeenInteractedWith: U,
                                validationError: L,
                                validationErrors: z,
                                theme: P,
                                isCommitted: h,
                                isBlockListVisible: T,
                                isReviewModeEnabled: (0, O.ti)(o),
                                isScrollNearTop: (0, O.F7)(o),
                                isVisibleGroupStickyHeader: (0, w.vi)(o),
                                isLivePreview: (0, O.I6)(o),
                                language: (0, O.G3)(o),
                                shouldClearInput: !V && (0, O.I6)(o),
                                partialResponse: (0, zr._1)(o, v),
                                value: cu(m),
                                scrolling: (0, O.ue)(o),
                                ref: void 0,
                                textAlign: re
                            });
                        return r = M, M
                    }
                },
                du = () => ((0, xt.gn)() && window.scrollBy(0, 0), kr()),
                vu = (e, t) => {
                    var {
                        blockRef: r
                    } = t, o = (0, nt.Ho)(r), v = (0, nt.dy)(r), f = uu(o, v);
                    return g => f(g, r)
                },
                fu = e => qi({}, (0, ke.DE)({
                    blockHeightChanging: ce.Gc,
                    onCommitAnswer: we.UC,
                    onStageAnswer: we.eQ,
                    goToBlock: ce.IS,
                    recenter: ce.AB,
                    scrollToChoice: ce.ki,
                    endAutoScroll: ce.pq,
                    onInputFocus: Ut,
                    onInputBlur: du,
                    onRequireStickyFooter: Bt,
                    onRequireStickyHeader: Jt,
                    onUnrecoverableError: jr.dl,
                    setBlockTrackingData: Me.MO,
                    submitForm: K.R2,
                    inlineSubmit: K.IC
                }, e));
            const us = (0, We.$j)(vu, fu)(lu);
            var pu = e => {
                var t = (0, le.C)(w.tK),
                    r = e === t,
                    o = (0, le.C)(w.S1),
                    v = (0, le.C)(w.Yp),
                    f = (0, le.C)(g => (0, R.pi)(g, e));
                return r ? !f || v ? !0 : o : !1
            };
            const mu = pu;
            var ds;

            function gu(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var hu = b.ZP.div.withConfig({
                    displayName: "BlockListItem__Wrapper",
                    componentId: "sc-veivgj-0"
                })(ds || (ds = gu([`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: `, `px;

  `, `;

  `, `;

  `, `

  `, `;
  `, `
`])), e => e.topOffset, e => !e.isVisible && `
    pointer-events: none;
  `, e => (e.shouldBeBefore || e.shouldBeAfter) && "pointer-events: none", e => {
                    var {
                        prefersReducedMotion: t = !1
                    } = e;
                    return !t && "transition: transform ".concat(Ct.YJ, `ms ease,
    opacity `).concat(Ct.YJ / 2, "ms ease;")
                }, e => (e.shouldBeBefore || e.shouldBeAfter) && "opacity: 0", e => {
                    var {
                        prefersReducedMotion: t = !1,
                        shouldBeAfter: r,
                        shouldBeBefore: o
                    } = e;
                    if (t) return "transition: opacity ".concat(Ct.YJ / 2, "ms ease;");
                    if (o) return "transform: translateY(-100vh);";
                    if (r) return "transform: translateY(100vh);"
                }),
                vs = e => {
                    var {
                        answer: t,
                        areBlocksVisible: r,
                        block: o,
                        blockIndex: v,
                        component: f,
                        currentBlockIndex: g,
                        currentRef: m,
                        disableNavigation: p,
                        enableNavigation: h,
                        goToBlock: P,
                        handleCanSwipeChange: T,
                        handleIsVideoPlayingChange: x,
                        isDisplayed: V,
                        isVideoPlaying: ne,
                        layoutItemsSize: U,
                        listIndexText: L,
                        nextRef: z,
                        prefersReducedMotion: ee,
                        previousActiveRef: G,
                        previousRef: ae,
                        topOffset: $
                    } = e, Q = o.ref === z, N = o.ref === m, ve = o.ref === G, fe = r && (N || ve), ye = mu(o.ref), De = {
                        currentRef: m,
                        previousRef: ae,
                        previousActiveRef: G,
                        nextRef: z
                    }, Le = !ln(o, t, De, r) || !Jr && Q && !r, J = (0, i.useCallback)(k => P(o.ref, {
                        navigationType: (0, kt.G)(k)
                    }), [P]);
                    if (Le || !V) return null;
                    var re = v > g || !r,
                        M = v < g;
                    return i.createElement(hu, {
                        isVisible: fe,
                        key: o.ref,
                        onFocus: J,
                        prefersReducedMotion: ee,
                        shouldBeAfter: re,
                        shouldBeBefore: M,
                        topOffset: $
                    }, i.createElement(f, {
                        blockRef: o.ref,
                        canAutoFocus: ye,
                        disableNavigation: p,
                        enableNavigation: h,
                        isVideoPlaying: ne,
                        layoutItemsSize: U,
                        listIndexText: L,
                        onChangeCanSwipe: T,
                        onVideoClick: x
                    }))
                };
            vs.propTypes = {
                answer: a().object,
                areBlocksVisible: a().bool,
                block: a().object,
                blockIndex: a().number,
                component: a().elementType,
                currentBlockIndex: a().number,
                currentRef: a().string,
                disableNavigation: a().func,
                enableNavigation: a().func,
                goToBlock: a().func,
                handleCanSwipeChange: a().func,
                handleIsVideoPlayingChange: a().func,
                isDisplayed: a().bool,
                isVideoPlaying: a().bool,
                layoutItemsSize: a().object,
                listIndexText: a().string,
                nextRef: a().string,
                previousActiveRef: a().string,
                previousRef: a().string,
                prefersReducedMotion: a().bool,
                topOffset: a().number
            };
            const yu = i.memo(vs);
            var fs, ps, ms, gs;

            function Bo(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var bu = b.ZP.div.withConfig({
                    displayName: "BlockList__Root",
                    componentId: "sc-1xrukay-0"
                })(fs || (fs = Bo([`
  height: 100%;
`]))),
                Eu = b.ZP.div.withConfig({
                    displayName: "BlockList__BlocksListWrapper",
                    componentId: "sc-1xrukay-1"
                })(ps || (ps = Bo([`
  width: 100%;
  height: `, `;
`])), e => {
                    var {
                        height: t
                    } = e;
                    return t
                }),
                Ou = b.ZP.div.withConfig({
                    displayName: "BlockList__BlocksListContainer",
                    componentId: "sc-1xrukay-2"
                })(ms || (ms = Bo([`
  height: 100%;
  `, `
`])), e => {
                    var {
                        isPulseSurveyActive: t
                    } = e;
                    return t && (0, b.iv)(gs || (gs = Bo([`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `])))
                }),
                Cu = (e, t, r, o, v, f, g, m, p) => {
                    var h, P, T, x, V, ne = t.layout || {
                            type: ue.BB.STACK
                        },
                        U = ne.type,
                        L = (0, ue.bK)(U, r),
                        {
                            currentRef: z
                        } = o,
                        ee = U === ue.BB.STACK,
                        G = ee ? t.attachment : (h = t.layout) === null || h === void 0 ? void 0 : h.attachment;
                    if (!Pt.Hm.includes(L) || !G || !ln(t, e, o, v)) return null;
                    var ae = G == null ? void 0 : G.href,
                        $ = G == null ? void 0 : G.type,
                        Q = (P = G == null || (T = G.properties) === null || T === void 0 ? void 0 : T.focalPoint) !== null && P !== void 0 ? P : ue.HY,
                        N = G == null || (x = G.properties) === null || x === void 0 ? void 0 : x.brightness,
                        ve = G == null || (V = G.properties) === null || V === void 0 ? void 0 : V.description,
                        fe = t.ref === z,
                        ye = m !== ae || !fe;
                    return i.createElement(Tt.Z, {
                        attachmentAlt: ve,
                        attachmentBrightness: N,
                        attachmentFocalPoint: Q,
                        attachmentHref: ae,
                        attachmentType: $,
                        breakpoint: r,
                        enableAnimation: p && ye,
                        isVideoPlaying: f && fe,
                        isVisible: fe,
                        key: t.ref,
                        layoutPlacement: ne.placement,
                        layoutType: U,
                        onVideoClick: g,
                        pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e"
                    })
                },
                el = e => {
                    var t, r, {
                            answers: o,
                            blockChanging: v,
                            blocks: f,
                            canShowSubmitButton: g,
                            component: m,
                            currentPath: p,
                            currentRef: h,
                            disableNavigation: P,
                            enableNavigation: T,
                            forceSubmitButtonVisible: x,
                            goToBlock: V,
                            goToNextBlock: ne,
                            goToNextBlockFollowingLogic: U,
                            goToPreviousBlock: L,
                            inlineSubmit: z,
                            isBlockChanging: ee,
                            isLivePreview: G,
                            isSubmitButtonVisible: ae,
                            isVisible: $,
                            layoutItemsSize: Q,
                            nextRef: N,
                            originalBlocks: ve,
                            previousActiveRef: fe,
                            previousRef: ye,
                            theme: De,
                            topOffset: Le
                        } = e,
                        J = (0, Ot.Z)(ve, p),
                        re = (0, W.ob)(f, h),
                        M = (0, dt.T)(),
                        k = (0, le.C)(ze.jO),
                        Re = (0, le.C)(Dt.Fe),
                        [Se, Ke] = (0, i.useState)(!1),
                        [_e, Te] = (0, i.useState)(!1),
                        [D, oe] = (0, i.useState)(!M),
                        [st, ot] = (0, i.useState)();
                    (0, i.useEffect)(() => {
                        !D && !M && oe(!0)
                    }, [h, $]), (0, i.useEffect)(() => {
                        M && oe(!1)
                    }, [M]), (0, i.useEffect)(() => {
                        $ && v()
                    }, [$]);
                    var mt = (0, Oe.Gc)(),
                        xe = (0, W.Fx)(f, h),
                        me = (xe == null || (t = xe.layout) === null || t === void 0 ? void 0 : t.type) || ue.BB.STACK,
                        Ce = (xe == null || (r = xe.layout) === null || r === void 0 ? void 0 : r.attachment) || (xe == null ? void 0 : xe.attachment),
                        bt = (0, i.useCallback)(Ne => {
                            var {
                                next: it,
                                previous: Ht
                            } = Ne;
                            it !== Se && Ke(it), Ht !== _e && Te(Ht)
                        }, [Se, _e]),
                        Lt = (0, i.useCallback)(() => {
                            !M && (Ce == null ? void 0 : Ce.type) === $e.k.video && oe(Ne => !Ne)
                        }, [M, Ce, oe]),
                        _ = (0, i.useCallback)((Ne, it) => {
                            if ((0, E.$o)(Ne) && Lt(), (0, E.id)(Ne) && !(0, E.KL)(Ne) && !ae && g && it) {
                                if (xe.type !== "payment" && !(0, W.wX)("block-".concat(xe.ref), Ne.srcElement)) return;
                                x(!0), Ne.preventDefault();
                                return
                            }
                            if ((0, E.NC)(Ne)) {
                                z(h, Ne), Ne.preventDefault();
                                return
                            }
                            if ((0, E.r$)(Ne) && !ae && !(0, E.KL)(Ne) && !it) {
                                var Ht = (0, kt.G)(Ne);
                                U(h, {
                                    navigationType: Ht
                                }), Ne.preventDefault()
                            }
                        }, [Lt, ae, g, x, z, U, kt.G, xe]),
                        Ue = {
                            currentRef: h,
                            previousRef: ye,
                            previousActiveRef: fe,
                            nextRef: N
                        };
                    return (0, i.useEffect)(() => {
                        var Ne = (0, W.Fx)(f, fe);
                        if (Ne) {
                            var it;
                            ot((it = Ne.attachment) === null || it === void 0 ? void 0 : it.href)
                        }
                    }, [xe]), i.createElement(bu, null, i.createElement($t.Provider, {
                        value: ee
                    }, i.createElement(Hr, {
                        commonHandleKeydown: _,
                        areGlobalListenersDisabled: G
                    }, i.createElement(Vr, {
                        goToPreviousBlock: L,
                        goToNextBlock: ne,
                        canSwipeNext: Se,
                        canSwipePrevious: _e,
                        fullHeight: !0
                    }, i.createElement(Ou, {
                        isPulseSurveyActive: k
                    }, k ? i.createElement(wt.Z, {
                        isVisible: !0,
                        href: gt.Hl
                    }) : null, i.createElement(Eu, {
                        height: k ? gt.Ye : "100%"
                    }, i.createElement(Pt.ZP, {
                        hasAttachment: !!Ce,
                        backgroundColor: De.colors.background,
                        blocksMedia: f.map(Ne => {
                            var it = (0, W.LA)(o, Ne.ref);
                            return Cu(it, Ne, mt, Ue, $, D, Lt, st, Re)
                        }),
                        breakpoint: mt,
                        isVisible: $,
                        layoutType: me
                    }, f.map((Ne, it, Ht) => {
                        var lr = Ne.ref,
                            rr = (0, W.LA)(o, lr),
                            pr = (0, W.Ic)(Ne, p),
                            ut = J[(0, W.ob)(p, lr)],
                            be = (0, W.ob)(Ht, lr);
                        return i.createElement(yu, {
                            answer: rr,
                            areBlocksVisible: $,
                            block: Ne,
                            blockIndex: be,
                            component: m,
                            currentBlockIndex: re,
                            currentRef: h,
                            disableNavigation: P,
                            enableNavigation: T,
                            goToBlock: V,
                            handleCanSwipeChange: bt,
                            handleIsVideoPlayingChange: Lt,
                            isDisplayed: pr,
                            isVideoPlaying: D,
                            key: lr,
                            layoutItemsSize: Q,
                            listIndexText: ut,
                            nextRef: N,
                            previousActiveRef: fe,
                            previousRef: ye,
                            topOffset: Le,
                            prefersReducedMotion: M || k
                        })
                    }))))))))
                };
            el.defaultProps = {
                blocks: [],
                blockChanging: te.Z,
                component: us,
                goToBlock: te.Z,
                theme: {
                    colors: {
                        background: I.Bb
                    }
                }
            }, el.propTypes = {
                answers: a().array,
                blockChanging: a().func,
                blocks: a().array.isRequired,
                canShowSubmitButton: a().bool,
                component: a().elementType,
                currentPath: a().array,
                currentRef: a().string,
                disableNavigation: a().func,
                enableNavigation: a().func,
                forceSubmitButtonVisible: a().func,
                goToBlock: a().func,
                goToNextBlock: a().func,
                goToNextBlockFollowingLogic: a().func,
                goToPreviousBlock: a().func,
                handleCanSwipeChange: a().func,
                inlineSubmit: a().func,
                isBlockChanging: a().bool,
                isLivePreview: a().bool,
                isSubmitButtonVisible: a().bool,
                isVisible: a().bool,
                layoutItemsSize: a().object,
                nextRef: a().string,
                onEndAutoScroll: a().func,
                originalBlocks: a().array,
                previousActiveRef: a().string,
                previousRef: a().string,
                scrolling: a().shape({
                    anchor: a().string,
                    scrollType: a().string
                }),
                theme: a().object,
                topOffset: a().number
            };
            const Su = el;
            var Pu = 60,
                wu = 88,
                Tu = e => {
                    var t = (0, w.tK)(e),
                        r = (0, I.T)() && (0, O.Lh)(e),
                        o = !(0, Y.oI)(e) && !r && (0, w.vi)(e),
                        v = o ? (0, O.Ow)(e) : null,
                        f = (0, W.uw)(v),
                        g = (0, Z.Tw)(e),
                        m = 0;
                    return o && !g && (m = f ? wu : Pu), {
                        answers: (0, w.X2)(e),
                        blocks: (0, w.Vl)(e),
                        canShowSubmitButton: (0, O.Is)(e, t),
                        currentPath: (0, w.Jz)(e),
                        currentRef: t,
                        isBlockChanging: (0, O.ge)(e),
                        isLivePreview: (0, O.I6)(e),
                        isSubmitButtonVisible: (0, O.Cf)(e, t),
                        nextRef: (0, w.iu)(e, t),
                        previousActiveRef: (0, O.eS)(e),
                        previousRef: (0, R.H0)(e),
                        scrolling: (0, O.ue)(e),
                        theme: (0, Z.gh)(e),
                        topOffset: m,
                        originalBlocks: (0, w.rJ)(e)
                    }
                },
                Iu = {
                    blockChanging: ce.yQ,
                    disableNavigation: ce.DT,
                    enableNavigation: ce.An,
                    forceSubmitButtonVisible: ce.hl,
                    goToBlock: ce.IS,
                    goToNextBlock: F.hA,
                    goToNextBlockFollowingLogic: F.MN,
                    goToPreviousBlock: ce.PQ,
                    inlineSubmit: K.IC,
                    onEndAutoScroll: ce.pq
                };
            const Ru = (0, We.$j)(Tu, Iu)(Su);
            var Au = c(28825),
                Du = function(t) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500,
                        [o, v] = (0, i.useState)(t),
                        [f, g] = (0, i.useState)(!0),
                        m = () => {
                            g(!1), v(t)
                        };
                    return (0, i.useEffect)(() => {
                        g(!0);
                        var p = setTimeout(m, r);
                        return () => {
                            g(!1), clearTimeout(p)
                        }
                    }, [t, r]), [o, {
                        isPending: f
                    }]
                };
            const vd = null;
            var Bu = (e, t) => {
                var r = e.displayName || e.name || "Component",
                    o = v => {
                        var [f] = Du(v, t);
                        return i.createElement(e, f)
                    };
                return o.displayName = "withDebounce(".concat(r, ")"), o
            };
            const xu = Bu;
            var ju = ["activeBlockRef", "groupHeaderVisible", "groupTitle", "isBlockChanging", "questionHeaderVisible", "questionTitle"],
                hs;

            function tl() {
                return tl = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, tl.apply(this, arguments)
            }

            function ku(e, t) {
                if (e == null) return {};
                var r = Fu(e, t),
                    o, v;
                if (Object.getOwnPropertySymbols) {
                    var f = Object.getOwnPropertySymbols(e);
                    for (v = 0; v < f.length; v++) o = f[v], !(t.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, o) || (r[o] = e[o]))
                }
                return r
            }

            function Fu(e, t) {
                if (e == null) return {};
                var r = {},
                    o = Object.keys(e),
                    v, f;
                for (f = 0; f < o.length; f++) v = o[f], !(t.indexOf(v) >= 0) && (r[v] = e[v]);
                return r
            }

            function Lu(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var ys = (e, t) => t ? (0, la.yF)(e, t.ref) && !!t.listIndexText ? null : t.titleCounterIcon || "arrow" : null,
                Nu = (e, t) => {
                    var r = (0, Y.oI)(e),
                        o = (0, O.Lh)(e),
                        v = (0, I.T)() && o,
                        f = (0, Z.Tw)(e),
                        g = (0, O.BA)(e),
                        m = !r && (0, O.m5)(e) && t.breakpoint !== "sm" && !v,
                        p = !r && !f && (0, w.vi)(e) && !v,
                        h = m ? (0, O.vR)(e) : null,
                        P = p ? (0, O.Ow)(e) : null,
                        T = (0, w.rJ)(e),
                        x = ys(T, P),
                        V = ys(T, h),
                        ne = (0, nt.xl)(e);
                    return {
                        groupHeaderVisible: p,
                        groupTitle: (P == null ? void 0 : P.title) && ne(P.title),
                        groupHeaderIcon: x,
                        groupHeaderCounter: g && P && P.listIndexText,
                        groupHeaderImage: (0, W.uw)(P),
                        questionHeaderVisible: m && !f,
                        questionTitle: (h == null ? void 0 : h.title) && ne(h.title),
                        questionHeaderIcon: V,
                        questionHeaderCounter: g && h && h.listIndexText,
                        contextBackgroundColor: (0, Z.dF)(e),
                        contentColor: (0, Z.vM)(e),
                        counterColor: (0, Z.pw)(e),
                        oldLayout: !0,
                        isBlockChanging: (0, O.ge)(e),
                        activeBlockRef: h ? h.ref : null,
                        groupBlock: P
                    }
                },
                Mu = b.ZP.div.withConfig({
                    displayName: "sticky-header-container__Wrapper",
                    componentId: "sc-ngowdl-0"
                })(hs || (hs = Lu([`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  `, `;
  `, `;
`])), e => e.isVisible ? "" : "pointer-events: none;", e => e.isSmallViewport ? "" : "z-index: ".concat(Je.Pi.level3)),
                bs = en.Z ? 0 : 300,
                _u = xu(Au.Z, bs),
                Es = e => {
                    var {
                        activeBlockRef: t,
                        groupHeaderVisible: r,
                        groupTitle: o,
                        isBlockChanging: v,
                        questionHeaderVisible: f,
                        questionTitle: g
                    } = e, m = ku(e, ju), [p, h] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => {
                        if (v) h(!0);
                        else {
                            var T = setTimeout(() => h(!1), bs);
                            return () => clearTimeout(T)
                        }
                    }, [v]);
                    var P = !p && !v && (r || f);
                    return i.createElement(Oe.d7, null, T => {
                        var {
                            width: x
                        } = T, V = x < Je.fl.md;
                        return i.createElement(Mu, {
                            "aria-hidden": !0,
                            "data-qa-stickyheader-visible": P,
                            "data-qa-stickyheader-blockref": t,
                            isVisible: P,
                            isSmallViewport: V
                        }, i.createElement(_u, tl({
                            questionHeaderVisible: f && !p && !v,
                            groupHeaderVisible: r,
                            questionHeaderContent: g,
                            groupHeaderContent: o
                        }, m)))
                    })
                };
            Es.propTypes = {
                activeBlockRef: a().string,
                groupHeaderVisible: a().bool,
                groupTitle: a().oneOfType([a().string, a().array]),
                isBlockChanging: a().bool,
                questionHeaderVisible: a().bool,
                questionTitle: a().oneOfType([a().string, a().array])
            };
            const Zu = (0, Oe.Ng)((0, We.$j)(Nu)(Es));
            var Vu = c(64918),
                Yu = c(12413),
                Os, Cs, Ss;

            function rl(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var Uu = 56,
                Hu = b.ZP.div.withConfig({
                    displayName: "StickyFooter__CommitButtonWrapper",
                    componentId: "sc-14m6tj2-0"
                })(Os || (Os = rl([`
  display: flex;
  align-items: center;
`]))),
                Ku = b.ZP.div.withConfig({
                    displayName: "StickyFooter__StickyFooterPlaceholder",
                    componentId: "sc-14m6tj2-1"
                })(Cs || (Cs = rl([`
  pointer-events: all;
  width: 100%;
  overflow: hidden;
  z-index: `, `;
  opacity: `, `;
  visibility: `, `;
`])), e => e.isActive ? Je.Pi.level3 : Je.Pi.level0, e => e.isActive ? "1" : "0", e => e.isActive ? "visible" : "hidden"),
                zu = b.ZP.div.withConfig({
                    displayName: "StickyFooter__StickyFooterWrapper",
                    componentId: "sc-14m6tj2-2"
                })(Ss || (Ss = rl([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  height: `, `px;
  background-color: `, `;
  border-color: `, `;
`])), e => e.$height, e => (0, I.Zn)((0, I.CD)(e.contextBackgroundColor, e.$color, .2)), e => (0, I.CD)(e.contextBackgroundColor, e.$color, .3)),
                nl = e => {
                    var {
                        blockRef: t,
                        show: r,
                        theme: o,
                        t: v,
                        breakpoint: f,
                        buttonText: g,
                        showButtonIcon: m,
                        hasFormFooter: p,
                        helperText: h,
                        isButtonTypeSubmit: P,
                        isEnabled: T,
                        isLivePreview: x,
                        isPaymentBlockAnswered: V,
                        onCommitAnswer: ne,
                        price: U,
                        recenter: L,
                        submit: z,
                        submitForm: ee
                    } = e, G = (0, Pe.Pg)(), ae = fe => {
                        ne(t, fe, {
                            source: ta.b
                        })
                    }, $ = fe => {
                        L(qr), ee(fe)
                    };
                    if (!T) return null;
                    var Q = f === "sm",
                        N = !Q && !G ? (0, or.Z)(v(h)) : "",
                        ve = m ? Mn.Z : null;
                    return i.createElement(Ku, {
                        "aria-hidden": !0,
                        "data-qa": "sticky-footer-placeholder",
                        isActive: r,
                        hasFormFooter: p
                    }, i.createElement(q.ZP, {
                        type: "slideUp",
                        isVisible: r
                    }, i.createElement(zu, {
                        $height: Uu,
                        contextBackgroundColor: o.colors.background,
                        $color: o.colors.secondary,
                        "data-qa": "sticky-footer",
                        "data-qa-visible": r
                    }, i.createElement(Ca.ZP, {
                        noPadding: !1
                    }, i.createElement(Hu, null, P ? i.createElement(Zn, {
                        centered: Q,
                        fullWidth: Q,
                        helperText: "",
                        isComplete: z.isComplete,
                        isLivePreview: x,
                        isPaymentBlockAnswered: V,
                        isSubmitting: z.isSubmitting,
                        onClick: $,
                        price: U,
                        size: "medium",
                        t: v,
                        theme: o
                    }) : i.createElement(ha.ZP, {
                        fullWidth: Q,
                        onClick: ae,
                        iconSvg: ve,
                        size: "medium",
                        color: o.colors.button,
                        contentColor: o.colors.buttonContent,
                        contextBackgroundColor: o.colors.background,
                        transparent: o.hasTransparentButton,
                        dataQa: "sticky-footer-button"
                    }, v(g)), N && i.createElement(Ft.Z, {
                        left: 2
                    }, i.createElement(Vu.Z, {
                        text: N,
                        color: o.colors.secondary
                    })))))), !p && i.createElement(Yu.R1, {
                        "data-qa": "safe-area-bottom"
                    }))
                };
            nl.defaultProps = {
                t: e => e,
                recenter: e => e,
                buttonText: "label.button.ok",
                showButtonIcon: !0,
                isEnabled: !0,
                theme: {
                    colors: {
                        background: I.Bb,
                        button: I.Bb,
                        secondary: I.Bb
                    }
                },
                submit: {
                    retry: {},
                    isComplete: !1,
                    isSubmitting: !1
                }
            }, nl.propTypes = {
                show: a().bool,
                theme: a().object,
                blockRef: a().string,
                breakpoint: a().string,
                buttonText: a().string,
                showButtonIcon: a().bool,
                recenter: a().func,
                onCommitAnswer: a().func,
                price: a().string,
                hasFormFooter: a().bool,
                helperText: a().string,
                isButtonTypeSubmit: a().bool,
                isEnabled: a().bool,
                isLivePreview: a().bool,
                isPaymentBlockAnswered: a().bool,
                submit: a().object,
                submitForm: a().func,
                t: a().func
            };
            const Wu = (0, Oe.Ng)((0, Gt.Z)(nl));
            var Gu = e => {
                    var t = (0, w.tK)(e),
                        r = (0, O.Yg)(e),
                        o = (0, w.Fx)(e, r);
                    if (!o || r !== t) return {
                        show: !1,
                        theme: (0, Z.gh)(e)
                    };
                    var v = (0, I.T)() && (0, O.Lh)(e),
                        f = (0, O.qm)(e, r),
                        g = La() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
                        m = (0, Y.oo)(e),
                        p = (0, O.qC)(e),
                        h = !m && !(0, O.Yo)(e),
                        P = !m && !(0, O.Hg)(e),
                        T = p || h || P;
                    return {
                        blockRef: r,
                        buttonText: o.buttonText,
                        hasFormFooter: T,
                        helperText: f ? g : "label.buttonHint.default",
                        isButtonTypeSubmit: f,
                        isEnabled: (0, I.T)(),
                        isLivePreview: (0, O.I6)(e),
                        isPaymentBlockAnswered: (0, Kr.eH)(e),
                        price: (0, w.fG)(e),
                        show: !(0, Y.oo)(e) && !v,
                        showButtonIcon: !(0, w.lv)(o),
                        submit: (0, w.iN)(e),
                        theme: (0, Z.gh)(e)
                    }
                },
                $u = {
                    onCommitAnswer: we.UC,
                    recenter: ce.AB,
                    submitForm: K.R2
                };
            const Qu = (0, We.$j)(Gu, $u)(Wu);
            var al = c(12209),
                Ju = c(67846),
                Ps = "typeform-footer",
                Xu = "https://www.typeform.com/explore/",
                qu = e => {
                    var {
                        isBlockListVisible: t
                    } = e, {
                        t: r
                    } = (0, he.I4)(), o = (0, le.T)(), v = (0, le.C)(Pn.il), f = (0, le.C)(O.I6), g = f ? void 0 : v(Xu, Ps), m = (0, le.C)(Y.oo), p = (0, le.C)(Z.pQ), h = (0, le.C)(Z.nH), P = (0, le.C)(Z.dF), T = (0, le.C)(ya.YJ), x = (0, le.C)(ya.KM), V = (0, le.C)(Z.vK), ne = (0, le.C)(O.Lh), U = (0, I.T)() ? !ne : !0, L = (0, le.C)(O.qC), z = (0, le.C)(O.Yo), ee = !m && !z, G = N => {
                        o((0, F.hA)({
                            navigationType: (0, kt.G)(N)
                        }))
                    }, ae = N => {
                        o((0, ce.PQ)({
                            navigationType: (0, kt.G)(N)
                        }))
                    }, $ = () => {
                        o((0, Me.JD)(Ps))
                    }, Q = {
                        brandButtonHref: g,
                        brandButtonText: (0, or.Z)(r("label.branding.poweredby")),
                        buttonsColor: p,
                        buttonsContentColor: h,
                        contextBackgroundColor: P,
                        dataQa: "fixed-footer",
                        nextButtonDisabled: !T,
                        nextButtonOnClick: G,
                        onClickBrandButton: $,
                        previousButtonDisabled: !x,
                        previousButtonOnClick: ae,
                        progressBackgroundColor: P,
                        transparentButtons: V,
                        visible: U,
                        withBranding: L,
                        withNavigationArrows: ee
                    };
                    return i.createElement(Ju.Z, Q)
                },
                ed = c(55895);
            const td = Vo;
            var ws;

            function ol() {
                return ol = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, ol.apply(this, arguments)
            }

            function rd(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var nd = b.ZP.div.withConfig({
                    displayName: "form__Root",
                    componentId: "sc-19pinwh-0"
                })(ws || (ws = rd([`
  height: 100%;
  overflow: hidden;
`]))),
                Ts = "stkv-form-root",
                ad = e => {
                    var t = e.target;
                    t.id === Ts && (t.scrollTop = 0)
                },
                od = e => {
                    var {
                        layoutItemsSize: t = {}
                    } = e, r = (0, le.C)(w.z0), o = (0, le.C)(w.Us), v = (0, le.C)(Y.TJ), f = (0, le.C)(wn.fw), g = (0, le.C)(wn._5), m = (0, Pe.Pg)(), p = !m || !f && !g, h = !r && !o, P = !!(0, le.C)(w.co), T = m && f && !P, [x, V] = (0, i.useState)((0, xt.gn)()), ne = (0, le.C)(ze.jO), {
                        t: U
                    } = (0, he.I4)(), L = (0, Oe.Gc)(), z = (0, le.C)(Z.gh), ee = (0, le.T)(), G = L === "sm", ae = m && G, $ = G, Q = $ || ae, N = (0, le.C)(ye => (0, al.getCustomRedirectUrl)(ye, al.UTM_CONTENT_THANKYOU_FOOTER)), ve = (0, i.useCallback)(() => {
                        ee((0, Me.JD)(al.UTM_CONTENT_THANKYOU_FOOTER))
                    }, [ee, Me.JD]);
                    if ((0, i.useEffect)(() => {
                            if (h && (0, xt.gn)()) {
                                var ye = setTimeout(() => V(!1), Ct.YJ + 200);
                                return () => clearTimeout(ye)
                            }
                            return te.Z
                        }, [h]), v && r) return null;
                    var fe = !T && !ne;
                    return i.createElement(nd, {
                        "aria-hidden": o || r,
                        id: Ts,
                        onScroll: ad
                    }, h && p && i.createElement(q.ZP, {
                        type: "fade",
                        duration: Ct.E0
                    }, i.createElement(ed.Z, null)), i.createElement(Zu, null), !o && i.createElement(Ru, {
                        component: us,
                        isVisible: h,
                        layoutItemsSize: t
                    }), fe ? i.createElement(q.ZP, {
                        isVisible: h,
                        type: "fadeIn",
                        duration: en.Z ? 0 : 500,
                        delay: en.Z ? 0 : 300
                    }, i.createElement(_a, null, i.createElement("div", {
                        "aria-hidden": x
                    }, !o && i.createElement(Qu, null)), i.createElement(qu, {
                        isBlockListVisible: h
                    }))) : i.createElement(i.Fragment, null, T && i.createElement(td, null), ne && i.createElement(Be.Z, ol({
                        breakpoint: L,
                        buttonColor: z.colors.button,
                        buttonContentColor: z.colors.buttonContent,
                        buttonText: (0, or.Z)(U("label.branding.create")),
                        color: z.colors.primary,
                        contextBackgroundColor: z.colors.background,
                        isTopPositioned: Q,
                        motto: (0, or.Z)(U("label.branding.motto")),
                        onBtnClick: ve,
                        layoutHasBrandLogo: !1
                    }, N ? {
                        url: N
                    } : {})), ")"))
                };
            const id = od
        }
    }
]);