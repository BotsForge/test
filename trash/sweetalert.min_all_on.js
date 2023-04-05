!
function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t()
}(this, function () {
        "use strict";
        var e = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                type: null,
                toast: !0,
                customClass: "",
                target: "body",
                backdrop: !0,
                animation: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                showConfirmButton: !0,
                showCancelButton: !0,
                preConfirm: null,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: "#3085d6",
                confirmButtonClass: null,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: "#aaa",
                cancelButtonClass: null,
                buttonsStyling: !0,
                reverseButtons: !0,
                focusConfirm: !0,
                focusCancel: !0,
                showCloseButton: !0,
                closeButtonAriaLabel: "Close this dialog",
                showLoaderOnConfirm: !0,
                imageUrl: null,
                imageWidth: null,
                imageHeight: null,
                imageAlt: "",
                imageClass: null,
                timer: null,
                width: 500,
                padding: 20,
                background: "#fff",
                input: null,
                inputPlaceholder: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputClass: null,
                inputAttributes: {},
                inputValidator: null,
                grow: !0,
                position: "center",
                progressSteps: [],
                currentProgressStep: null,
                progressStepsDistance: "40px",
                onBeforeOpen: null,
                onOpen: null,
                onClose: null,
                useRejections: !0,
                expectRejections: !0
        },
                t = ["useRejections", "expectRejections"],
                n = function (e) {
                        var t = {};
                        for (var n in e) t[e[n]] = "swal2-" + e[n];
                        return t
                },
                o = n(["container", "shown", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "content", "contentwrapper", "buttonswrapper", "confirm", "cancel", "icon", "image", "input", "has-input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-left", "top-right", "center", "center-left", "center-right", "bottom", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]),
                r = n(["success", "warning", "info", "question", "error"]),
                i = function (e, t) {
                        (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                        t = t || 0;
                        for (var n = "#", o = 0; o < 3; o++) {
                                var r = parseInt(e.substr(2 * o, 2), 16);
                                n += ("00" + (r = Math.round(Math.min(Math.max(0, r + r * t), 255)).toString(16))).substr(r.length)
                        }
                        return n
                },
                a = function (e) {
                        return void 0 !== e
                },
                s = function (e) {
                        console.warn("SweetAlert2: " + e)
                },
                l = function (e) {
                        console.error("SweetAlert2: " + e)
                },
                u = [],
                c = function (e) {
                        -1 === u.indexOf(e) && (u.push(e), s(e))
                },
                d = {
                        previousActiveElement: null,
                        previousBodyPadding: null
                },
                p = function (e) {
                        var t = m();
                        t && (t.parentNode.removeChild(t), q(document.body, o["no-backdrop"]), q(document.body, o["has-input"]), q(document.body, o["toast-shown"])); {
                                if (a(document)) {
                                        var n = document.createElement("div");
                                        n.className = o.container,
                                        n.innerHTML = f;
                                        ("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n);
                                        var r = b(),
                                                i = O(r, o.input),
                                                s = O(r, o.file),
                                                u = r.querySelector("." + o.range + " input"),
                                                c = r.querySelector("." + o.range + " output"),
                                                d = O(r, o.select),
                                                p = r.querySelector("." + o.checkbox + " input"),
                                                h = O(r, o.textarea);
                                        r.setAttribute("aria-live", e.toast ? "polite" : "assertive");
                                        var g = function () {
                                                Y.isVisible() && Y.resetValidationError()
                                        };
                                        return i.oninput = g,
                                        s.onchange = g,
                                        d.onchange = g,
                                        p.onchange = g,
                                        h.oninput = g,
                                        u.oninput = function () {
                                                g(),
                                                c.value = u.value
                                        },
                                        u.onchange = function () {
                                                g(),
                                                u.previousSibling.value = u.value
                                        },
                                        r
                                }
                                l("SweetAlert2 requires document to initialize")
                        }
                },
                f = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + o.title + '" aria-describedby="' + o.content + '" class="' + o.popup + '" tabindex="-1">\n   <ul class="' + o.progresssteps + '"></ul>\n   <div class="' + o.icon + " " + r.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + o.icon + " " + r.question + '">?</div>\n   <div class="' + o.icon + " " + r.warning + '">!</div>\n   <div class="' + o.icon + " " + r.info + '">i</div>\n   <div class="' + o.icon + " " + r.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + o.image + '" />\n   <div class="' + o.contentwrapper + '">\n   <h2 class="' + o.title + '" id="' + o.title + '"></h2>\n   <div id="' + o.content + '" class="' + o.content + '"></div>\n   </div>\n   <input class="' + o.input + '" />\n   <input type="file" class="' + o.file + '" />\n   <div class="' + o.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + o.select + '"></select>\n   <div class="' + o.radio + '"></div>\n   <label for="' + o.checkbox + '" class="' + o.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + o.textarea + '"></textarea>\n   <div class="' + o.validationerror + '" id="' + o.validationerror + '"></div>\n   <div class="' + o.buttonswrapper + '">\n     <button type="button" class="' + o.confirm + '">OK</button>\n     <button type="button" class="' + o.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + o.close + '">Г—</button>\n </div>\n').replace(/(^|\n)\s*/g, ""),
                m = function () {
                        return document.body.querySelector("." + o.container)
                },
                b = function () {
                        return m() ? m().querySelector("." + o.popup) : null
                },
                h = function (e) {
                        return m() ? m().querySelector("." + e) : null
                },
                g = function () {
                        return h(o.title)
                },
                v = function () {
                        return h(o.content)
                },
                y = function () {
                        return h(o.image)
                },
                w = function () {
                        return h(o.progresssteps)
                },
                C = function () {
                        return h(o.validationerror)
                },
                x = function () {
                        return h(o.confirm)
                },
                k = function () {
                        return h(o.cancel)
                },
                S = function () {
                        return h(o.buttonswrapper)
                },
                A = function () {
                        return h(o.close)
                },
                B = function () {
                        var e = Array.from(b().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
                                return e = parseInt(e.getAttribute("tabindex")),
                                t = parseInt(t.getAttribute("tabindex")),
                                e > t ? 1 : e < t ? -1 : 0
                        }),
                                t = Array.prototype.slice.call(b().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));
                        return function (e) {
                                var t = [];
                                for (var n in e) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                                return t
                        }(e.concat(t))
                },
                P = function () {
                        return !document.body.classList.contains(o["toast-shown"])
                },
                E = function (e, t) {
                        return !!e.classList && e.classList.contains(t)
                },
                L = function (e) {
                        if (e.focus(), "file" !== e.type) {
                                var t = e.value;
                                e.value = "",
                                e.value = t
                        }
                },
                T = function (e, t) {
                        if (e && t) {
                                t.split(/\s+/).filter(Boolean).forEach(function (t) {
                                        e.classList.add(t)
                                })
                        }
                },
                q = function (e, t) {
                        if (e && t) {
                                t.split(/\s+/).filter(Boolean).forEach(function (t) {
                                        e.classList.remove(t)
                                })
                        }
                },
                O = function (e, t) {
                        for (var n = 0; n < e.childNodes.length; n++) if (E(e.childNodes[n], t)) return e.childNodes[n]
                },
                V = function (e, t) {
                        t || (t = e === b() || e === S() ? "flex" : "block"),
                        e.style.opacity = "",
                        e.style.display = t
                },
                N = function (e) {
                        e.style.opacity = "",
                        e.style.display = "none"
                },
                j = function (e) {
                        return e.offsetWidth || e.offsetHeight || e.getClientRects().length
                },
                M = function () {
                        if (!a(document)) return !1;
                        var e = document.createElement("div"),
                                t = {
                                        WebkitAnimation: "webkitAnimationEnd",
                                        OAnimation: "oAnimationEnd oanimationend",
                                        animation: "animationend"
                                };
                        for (var n in t) if (t.hasOwnProperty(n) && a(e.style[n])) return t[n];
                        return !1
                }(),
                H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                        return typeof e
                } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                R = Object.assign ||
                function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                        }
                        return e
                },
                I = R({}, e),
                D = [],
                U = void 0,
                W = void 0;
        a(Promise) || l("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
        var z = function (e) {
                for (var t in e) Y.isValidParameter(t) || s('Unknown parameter "' + t + '"'),
                Y.isDeprecatedParameter(t) && c('The parameter "' + t + '" is deprecated and will be removed in the next major release.')
        },
                K = function (t) {
                        ("string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (s('Target parameter is not valid, defaulting to "body"'), t.target = "body");
                        var n = void 0,
                                i = b(),
                                a = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
                        n = i && a && i.parentNode !== a.parentNode ? p(t) : i || p(t);
                        var u = t.width === e.width && t.toast ? "auto" : t.width;
                        n.style.width = "number" == typeof u ? u + "px" : u;
                        var c = t.padding === e.padding && t.toast ? "inherit" : t.padding;
                        n.style.padding = "number" == typeof c ? c + "px" : c,
                        n.style.background = t.background;
                        for (var d = n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), f = 0; f < d.length; f++) d[f].style.background = t.background;
                        var h = m(),
                                C = g(),
                                B = v(),
                                P = S(),
                                E = x(),
                                L = k(),
                                O = A();
                        if (t.titleText ? C.innerText = t.titleText : C.innerHTML = t.title.split("\n").join("<br />"), t.backdrop || T(document.body, o["no-backdrop"]), t.text || t.html) {
                                if ("object" === H(t.html)) if (B.innerHTML = "", 0 in t.html) for (var j = 0; j in t.html; j++) B.appendChild(t.html[j].cloneNode(!0));
                                else B.appendChild(t.html.cloneNode(!0));
                                else t.html ? B.innerHTML = t.html : t.text && (B.textContent = t.text);
                                V(B)
                        } else N(B);
                        if (t.position in o && T(h, o[t.position]), t.grow && "string" == typeof t.grow) {
                                var M = "grow-" + t.grow;
                                M in o && T(h, o[M])
                        }
                        t.showCloseButton ? (O.setAttribute("aria-label", t.closeButtonAriaLabel), V(O)) : N(O),
                        n.className = o.popup,
                        t.toast ? (T(document.body, o["toast-shown"]), T(n, o.toast)) : T(n, o.modal),
                        t.customClass && T(n, t.customClass);
                        var R = w(),
                                I = parseInt(null === t.currentProgressStep ? Y.getQueueStep() : t.currentProgressStep, 10);
                        t.progressSteps.length ? (V(R), function (e) {
                                for (; e.firstChild;) e.removeChild(e.firstChild)
                        }(R), I >= t.progressSteps.length && s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(function (e, n) {
                                var r = document.createElement("li");
                                if (T(r, o.progresscircle), r.innerHTML = e, n === I && T(r, o.activeprogressstep), R.appendChild(r), n !== t.progressSteps.length - 1) {
                                        var i = document.createElement("li");
                                        T(i, o.progressline),
                                        i.style.width = t.progressStepsDistance,
                                        R.appendChild(i)
                                }
                        })) : N(R);
                        for (var D = b().querySelectorAll("." + o.icon), U = 0; U < D.length; U++) N(D[U]);
                        if (t.type) {
                                var W = !1;
                                for (var z in r) if (t.type === z) {
                                        W = !0;
                                        break
                                }
                                if (!W) return l("Unknown alert type: " + t.type),
                                !1;
                                var K = n.querySelector("." + o.icon + "." + r[t.type]);
                                if (V(K), t.animation) switch (t.type) {
                                case "success":
                                        T(K, "swal2-animate-success-icon"),
                                        T(K.querySelector(".swal2-success-line-tip"), "swal2-animate-success-line-tip"),
                                        T(K.querySelector(".swal2-success-line-long"), "swal2-animate-success-line-long");
                                        break;
                                case "error":
                                        T(K, "swal2-animate-error-icon"),
                                        T(K.querySelector(".swal2-x-mark"), "swal2-animate-x-mark")
                                }
                        }
                        var Z = y();
                        t.imageUrl ? (Z.setAttribute("src", t.imageUrl), Z.setAttribute("alt", t.imageAlt), V(Z), t.imageWidth ? Z.setAttribute("width", t.imageWidth) : Z.removeAttribute("width"), t.imageHeight ? Z.setAttribute("height", t.imageHeight) : Z.removeAttribute("height"), Z.className = o.image, t.imageClass && T(Z, t.imageClass)) : N(Z),
                        t.showCancelButton ? L.style.display = "inline-block" : N(L),
                        t.showConfirmButton ?
                        function (e, t) {
                                e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
                        }(E, "display") : N(E),
                        t.showConfirmButton || t.showCancelButton ? V(P) : N(P),
                        E.innerHTML = t.confirmButtonText,
                        L.innerHTML = t.cancelButtonText,
                        E.setAttribute("aria-label", t.confirmButtonAriaLabel),
                        L.setAttribute("aria-label", t.cancelButtonAriaLabel),
                        t.buttonsStyling && (E.style.backgroundColor = t.confirmButtonColor, L.style.backgroundColor = t.cancelButtonColor),
                        E.className = o.confirm,
                        T(E, t.confirmButtonClass),
                        L.className = o.cancel,
                        T(L, t.cancelButtonClass),
                        t.buttonsStyling ? (T(E, o.styled), T(L, o.styled)) : (q(E, o.styled), q(L, o.styled), E.style.backgroundColor = E.style.borderLeftColor = E.style.borderRightColor = "", L.style.backgroundColor = L.style.borderLeftColor = L.style.borderRightColor = ""),
                        !0 === t.animation ? q(n, o.noanimation) : T(n, o.noanimation),
                        t.showLoaderOnConfirm && !t.preConfirm && s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request")
                },
                Z = function () {
                        null === d.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (d.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = function () {
                                if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
                                var e = document.createElement("div");
                                e.style.width = "50px",
                                e.style.height = "50px",
                                e.style.overflow = "scroll",
                                document.body.appendChild(e);
                                var t = e.offsetWidth - e.clientWidth;
                                return document.body.removeChild(e),
                                t
                        }() + "px")
                },
                Q = function () {
                        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !E(document.body, o.iosfix)) {
                                var e = document.body.scrollTop;
                                document.body.style.top = -1 * e + "px",
                                T(document.body, o.iosfix)
                        }
                },
                Y = function e() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        if (a(window)) {
                                if (!a(n[0])) return l("SweetAlert2 expects at least 1 attribute!"),
                                !1;
                                var s = R({}, I);
                                switch (H(n[0])) {
                                case "string":
                                        s.title = n[0],
                                        s.html = n[1],
                                        s.type = n[2];
                                        break;
                                case "object":
                                        if (z(n[0]), R(s, n[0]), s.extraParams = n[0].extraParams, "email" === s.input && null === s.inputValidator) {
                                                var u = function (e) {
                                                        return new Promise(function (t, n) {
                                                                /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? t() : n("Invalid email address")
                                                        })
                                                };
                                                s.inputValidator = s.expectRejections ? u : e.adaptInputValidator(u)
                                        }
                                        if ("url" === s.input && null === s.inputValidator) {
                                                var c = function (e) {
                                                        return new Promise(function (t, n) {
                                                                /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? t() : n("Invalid URL")
                                                        })
                                                };
                                                s.inputValidator = s.expectRejections ? c : e.adaptInputValidator(c)
                                        }
                                        break;
                                default:
                                        return l('Unexpected type of argument! Expected "string" or "object", got ' + H(n[0])),
                                        !1
                                }
                                K(s);
                                var p = m(),
                                        f = b();
                                return new Promise(function (t, n) {
                                        var r = function (n) {
                                                e.closePopup(s.onClose),
                                                t(s.useRejections ? n : {
                                                        value: n
                                                })
                                        },
                                                a = function (o) {
                                                        e.closePopup(s.onClose),
                                                        s.useRejections ? n(o) : t({
                                                                dismiss: o
                                                        })
                                                },
                                                u = function (t) {
                                                        e.closePopup(s.onClose),
                                                        n(t)
                                                };
                                        s.timer && (f.timeout = setTimeout(function () {
                                                return a("timer")
                                        }, s.timer));
                                        var c = function (e) {
                                                if (!(e = e || s.input)) return null;
                                                switch (e) {
                                                case "select":
                                                case "textarea":
                                                case "file":
                                                        return O(f, o[e]);
                                                case "checkbox":
                                                        return f.querySelector("." + o.checkbox + " input");
                                                case "radio":
                                                        return f.querySelector("." + o.radio + " input:checked") || f.querySelector("." + o.radio + " input:first-child");
                                                case "range":
                                                        return f.querySelector("." + o.range + " input");
                                                default:
                                                        return O(f, o.input)
                                                }
                                        };
                                        s.input && setTimeout(function () {
                                                var e = c();
                                                e && L(e)
                                        }, 0);
                                        for (var h = function (t) {
                                                if (s.showLoaderOnConfirm && e.showLoading(), s.preConfirm) {
                                                        var n = Promise.resolve().then(function () {
                                                                return s.preConfirm(t, s.extraParams)
                                                        });
                                                        s.expectRejections ? n.then(function (e) {
                                                                return r(e || t)
                                                        }, function (t) {
                                                                e.hideLoading(),
                                                                t && e.showValidationError(t)
                                                        }) : n.then(function (n) {
                                                                j(C()) ? e.hideLoading() : r(n || t)
                                                        }, function (e) {
                                                                return u(e)
                                                        })
                                                } else r(t)
                                        }, R = function (t) {
                                                var n = t || window.event,
                                                        o = n.target || n.srcElement,
                                                        r = x(),
                                                        l = k(),
                                                        d = r && (r === o || r.contains(o)),
                                                        p = l && (l === o || l.contains(o));
                                                switch (n.type) {
                                                case "mouseover":
                                                case "mouseup":
                                                        s.buttonsStyling && (d ? r.style.backgroundColor = i(s.confirmButtonColor, -.1) : p && (l.style.backgroundColor = i(s.cancelButtonColor, -.1)));
                                                        break;
                                                case "mouseout":
                                                        s.buttonsStyling && (d ? r.style.backgroundColor = s.confirmButtonColor : p && (l.style.backgroundColor = s.cancelButtonColor));
                                                        break;
                                                case "mousedown":
                                                        s.buttonsStyling && (d ? r.style.backgroundColor = i(s.confirmButtonColor, -.2) : p && (l.style.backgroundColor = i(s.cancelButtonColor, -.2)));
                                                        break;
                                                case "click":
                                                        if (d && e.isVisible()) if (e.disableButtons(), s.input) {
                                                                var f = function () {
                                                                        var e = c();
                                                                        if (!e) return null;
                                                                        switch (s.input) {
                                                                        case "checkbox":
                                                                                return e.checked ? 1 : 0;
                                                                        case "radio":
                                                                                return e.checked ? e.value : null;
                                                                        case "file":
                                                                                return e.files.length ? e.files[0] : null;
                                                                        default:
                                                                                return s.inputAutoTrim ? e.value.trim() : e.value
                                                                        }
                                                                }();
                                                                if (s.inputValidator) {
                                                                        e.disableInput();
                                                                        var m = Promise.resolve().then(function () {
                                                                                return s.inputValidator(f, s.extraParams)
                                                                        });
                                                                        s.expectRejections ? m.then(function () {
                                                                                e.enableButtons(),
                                                                                e.enableInput(),
                                                                                h(f)
                                                                        }, function (t) {
                                                                                e.enableButtons(),
                                                                                e.enableInput(),
                                                                                t && e.showValidationError(t)
                                                                        }) : m.then(function (t) {
                                                                                e.enableButtons(),
                                                                                e.enableInput(),
                                                                                t ? e.showValidationError(t) : h(f)
                                                                        }, function (e) {
                                                                                return u(e)
                                                                        })
                                                                } else h(f)
                                                        } else h(!0);
                                                        else p && e.isVisible() && (e.disableButtons(), a("cancel"))
                                                }
                                        }, I = f.querySelectorAll("button"), D = 0; D < I.length; D++) I[D].onclick = R,
                                        I[D].onmouseover = R,
                                        I[D].onmouseout = R,
                                        I[D].onmousedown = R;
                                        A().onclick = function () {
                                                a("close")
                                        },
                                        s.toast ? f.onclick = function (t) {
                                                t.target !== f || s.showConfirmButton || s.showCancelButton || s.allowOutsideClick && (e.closePopup(s.onClose), a("overlay"))
                                        } : p.onclick = function (e) {
                                                e.target === p && s.allowOutsideClick && a("overlay")
                                        };
                                        var z = S(),
                                                Y = x(),
                                                _ = k();
                                        s.reverseButtons ? Y.parentNode.insertBefore(_, Y) : Y.parentNode.insertBefore(Y, _);
                                        var $ = function (e, t) {
                                                for (var n = B(s.focusCancel), o = 0; o < n.length; o++) {
                                                        (e += t) === n.length ? e = 0 : -1 === e && (e = n.length - 1);
                                                        var r = n[e];
                                                        if (j(r)) return r.focus()
                                                }
                                        };
                                        W || (U = window.onkeydown, W = !0, window.onkeydown = function (t) {
                                                var n = t || window.event;
                                                if ("Enter" !== n.key || n.isComposing) if ("Tab" === n.key) {
                                                        for (var o = n.target || n.srcElement, r = B(s.focusCancel), i = -1, l = 0; l < r.length; l++) if (o === r[l]) {
                                                                i = l;
                                                                break
                                                        }
                                                        n.shiftKey ? $(i, -1) : $(i, 1),
                                                        n.stopPropagation(),
                                                        n.preventDefault()
                                                } else - 1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(n.key) ? document.activeElement === Y && j(_) ? _.focus() : document.activeElement === _ && j(Y) && Y.focus() : "Escape" !== n.key && "Esc" !== n.key || !0 !== s.allowEscapeKey || a("esc");
                                                else if (n.target === c()) {
                                                        if ("textarea" === n.target.tagName.toLowerCase()) return;
                                                        e.clickConfirm(),
                                                        n.preventDefault()
                                                }
                                        }),
                                        s.buttonsStyling && (Y.style.borderLeftColor = s.confirmButtonColor, Y.style.borderRightColor = s.confirmButtonColor),
                                        e.hideLoading = e.disableLoading = function () {
                                                s.showConfirmButton || (N(Y), s.showCancelButton || N(S())),
                                                q(z, o.loading),
                                                q(f, o.loading),
                                                f.removeAttribute("aria-busy"),
                                                Y.disabled = !1,
                                                _.disabled = !1
                                        },
                                        e.getTitle = function () {
                                                return g()
                                        },
                                        e.getContent = function () {
                                                return v()
                                        },
                                        e.getInput = function () {
                                                return c()
                                        },
                                        e.getImage = function () {
                                                return y()
                                        },
                                        e.getButtonsWrapper = function () {
                                                return S()
                                        },
                                        e.getConfirmButton = function () {
                                                return x()
                                        },
                                        e.getCancelButton = function () {
                                                return k()
                                        },
                                        e.enableButtons = function () {
                                                Y.disabled = !1,
                                                _.disabled = !1
                                        },
                                        e.disableButtons = function () {
                                                Y.disabled = !0,
                                                _.disabled = !0
                                        },
                                        e.enableConfirmButton = function () {
                                                Y.disabled = !1
                                        },
                                        e.disableConfirmButton = function () {
                                                Y.disabled = !0
                                        },
                                        e.enableInput = function () {
                                                var e = c();
                                                if (!e) return !1;
                                                if ("radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !1;
                                                else e.disabled = !1
                                        },
                                        e.disableInput = function () {
                                                var e = c();
                                                if (!e) return !1;
                                                if (e && "radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !0;
                                                else e.disabled = !0
                                        },
                                        e.showValidationError = function (e) {
                                                var t = C();
                                                t.innerHTML = e,
                                                V(t);
                                                var n = c();
                                                n && (n.setAttribute("aria-invalid", !0), n.setAttribute("aria-describedBy", o.validationerror), L(n), T(n, o.inputerror))
                                        },
                                        e.resetValidationError = function () {
                                                var e = C();
                                                N(e);
                                                var t = c();
                                                t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), q(t, o.inputerror))
                                        },
                                        e.getProgressSteps = function () {
                                                return s.progressSteps
                                        },
                                        e.setProgressSteps = function (e) {
                                                s.progressSteps = e,
                                                K(s)
                                        },
                                        e.showProgressSteps = function () {
                                                V(w())
                                        },
                                        e.hideProgressSteps = function () {
                                                N(w())
                                        },
                                        e.enableButtons(),
                                        e.hideLoading(),
                                        e.resetValidationError(),
                                        s.input && T(document.body, o["has-input"]);
                                        for (var J = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], X = void 0, F = 0; F < J.length; F++) {
                                                var G = o[J[F]],
                                                        ee = O(f, G);
                                                if (X = c(J[F])) {
                                                        for (var te in X.attributes) if (X.attributes.hasOwnProperty(te)) {
                                                                var ne = X.attributes[te].name;
                                                                "type" !== ne && "value" !== ne && X.removeAttribute(ne)
                                                        }
                                                        for (var oe in s.inputAttributes) X.setAttribute(oe, s.inputAttributes[oe])
                                                }
                                                ee.className = G,
                                                s.inputClass && T(ee, s.inputClass),
                                                N(ee)
                                        }
                                        var re = void 0;
                                        switch (s.input) {
                                        case "text":
                                        case "email":
                                        case "password":
                                        case "number":
                                        case "tel":
                                        case "url":
                                                (X = O(f, o.input)).value = s.inputValue,
                                                X.placeholder = s.inputPlaceholder,
                                                X.type = s.input,
                                                V(X);
                                                break;
                                        case "file":
                                                (X = O(f, o.file)).placeholder = s.inputPlaceholder,
                                                X.type = s.input,
                                                V(X);
                                                break;
                                        case "range":
                                                var ie = O(f, o.range),
                                                        ae = ie.querySelector("input"),
                                                        se = ie.querySelector("output");
                                                ae.value = s.inputValue,
                                                ae.type = s.input,
                                                se.value = s.inputValue,
                                                V(ie);
                                                break;
                                        case "select":
                                                var le = O(f, o.select);
                                                if (le.innerHTML = "", s.inputPlaceholder) {
                                                        var ue = document.createElement("option");
                                                        ue.innerHTML = s.inputPlaceholder,
                                                        ue.value = "",
                                                        ue.disabled = !0,
                                                        ue.selected = !0,
                                                        le.appendChild(ue)
                                                }
                                                re = function (e) {
                                                        for (var t in e) {
                                                                var n = document.createElement("option");
                                                                n.value = t,
                                                                n.innerHTML = e[t],
                                                                s.inputValue.toString() === t && (n.selected = !0),
                                                                le.appendChild(n)
                                                        }
                                                        V(le),
                                                        le.focus()
                                                };
                                                break;
                                        case "radio":
                                                var ce = O(f, o.radio);
                                                ce.innerHTML = "",
                                                re = function (e) {
                                                        for (var t in e) {
                                                                var n = document.createElement("input"),
                                                                        r = document.createElement("label"),
                                                                        i = document.createElement("span");
                                                                n.type = "radio",
                                                                n.name = o.radio,
                                                                n.value = t,
                                                                s.inputValue.toString() === t && (n.checked = !0),
                                                                i.innerHTML = e[t],
                                                                r.appendChild(n),
                                                                r.appendChild(i),
                                                                r.
                                                                for = n.id,
                                                                ce.appendChild(r)
                                                        }
                                                        V(ce);
                                                        var a = ce.querySelectorAll("input");
                                                        a.length && a[0].focus()
                                                };
                                                break;
                                        case "checkbox":
                                                var de = O(f, o.checkbox),
                                                        pe = c("checkbox");
                                                pe.type = "checkbox",
                                                pe.value = 1,
                                                pe.id = o.checkbox,
                                                pe.checked = Boolean(s.inputValue);
                                                var fe = de.getElementsByTagName("span");
                                                fe.length && de.removeChild(fe[0]),
                                                (fe = document.createElement("span")).innerHTML = s.inputPlaceholder,
                                                de.appendChild(fe),
                                                V(de);
                                                break;
                                        case "textarea":
                                                var me = O(f, o.textarea);
                                                me.value = s.inputValue,
                                                me.placeholder = s.inputPlaceholder,
                                                V(me);
                                                break;
                                        case null:
                                                break;
                                        default:
                                                l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + s.input + '"')
                                        }
                                        "select" !== s.input && "radio" !== s.input || (s.inputOptions instanceof Promise ? (e.showLoading(), s.inputOptions.then(function (t) {
                                                e.hideLoading(),
                                                re(t)
                                        })) : "object" === H(s.inputOptions) ? re(s.inputOptions) : l("Unexpected type of inputOptions! Expected object or Promise, got " + H(s.inputOptions))),


                                        function (e, t, n) {
                                                var r = m(),
                                                        i = b();
                                                null !== t && "function" == typeof t && t(i),
                                                e ? (T(i, o.show), T(r, o.fade), q(i, o.hide)) : q(i, o.fade),
                                                V(i),
                                                r.style.overflowY = "hidden",
                                                M && !E(i, o.noanimation) ? i.addEventListener(M, function e() {
                                                        i.removeEventListener(M, e),
                                                        r.style.overflowY = "auto"
                                                }) : r.style.overflowY = "auto",
                                                T(document.documentElement, o.shown),
                                                T(document.body, o.shown),
                                                T(r, o.shown),
                                                P() && (Z(), Q()),
                                                d.previousActiveElement = document.activeElement,
                                                null !== n && "function" == typeof n && setTimeout(function () {
                                                        n(i)
                                                })
                                        }(s.animation, s.onBeforeOpen, s.onOpen),
                                        s.toast || (s.allowEnterKey ? s.focusCancel && j(_) ? _.focus() : s.focusConfirm && j(Y) ? Y.focus() : $(-1, 1) : document.activeElement && document.activeElement.blur()),
                                        m().scrollTop = 0
                                })
                        }
                };
        return Y.isVisible = function () {
                return !!b()
        },
        Y.queue = function (e) {
                D = e;
                var t = function () {
                        D = [],
                        document.body.removeAttribute("data-swal2-queue-step")
                },
                        n = [];
                return new Promise(function (e, o) {
                        !
                        function o(r, i) {
                                r < D.length ? (document.body.setAttribute("data-swal2-queue-step", r), Y(D[r]).then(function (s) {
                                        a(s.value) ? (n.push(s.value), o(r + 1, i)) : (t(), e({
                                                dismiss: s.dismiss
                                        }))
                                })) : (t(), e({
                                        value: n
                                }))
                        }(0)
                })
        },
        Y.getQueueStep = function () {
                return document.body.getAttribute("data-swal2-queue-step")
        },
        Y.insertQueueStep = function (e, t) {
                return t && t < D.length ? D.splice(t, 0, e) : D.push(e)
        },
        Y.deleteQueueStep = function (e) {
                a(D[e]) && D.splice(e, 1)
        },
        Y.close = Y.closePopup = Y.closeModal = Y.closeToast = function (e) {
                var t = m(),
                        n = b();
                if (n) {
                        q(n, o.show),
                        T(n, o.hide),
                        clearTimeout(n.timeout),
                        document.body.classList.contains(o["toast-shown"]) || (!
                        function () {
                                if (d.previousActiveElement && d.previousActiveElement.focus) {
                                        var e = window.scrollX,
                                                t = window.scrollY;
                                        d.previousActiveElement.focus(),
                                        a(e) && a(t) && window.scrollTo(e, t)
                                }
                        }(), window.onkeydown = U, W = !1);
                        var r = function () {
                                t.parentNode && t.parentNode.removeChild(t),
                                q(document.documentElement, o.shown),
                                q(document.body, o.shown),
                                q(document.body, o["no-backdrop"]),
                                q(document.body, o["has-input"]),
                                q(document.body, o["toast-shown"]),
                                P() && (null !== d.previousBodyPadding && (document.body.style.paddingRight = d.previousBodyPadding, d.previousBodyPadding = null), function () {
                                        if (E(document.body, o.iosfix)) {
                                                var e = parseInt(document.body.style.top, 10);
                                                q(document.body, o.iosfix),
                                                document.body.style.top = "",
                                                document.body.scrollTop = -1 * e
                                        }
                                }())
                        };
                        M && !E(n, o.noanimation) ? n.addEventListener(M, function e() {
                                n.removeEventListener(M, e),
                                E(n, o.hide) && r()
                        }) : r(),
                        null !== e && "function" == typeof e && setTimeout(function () {
                                e(n)
                        })
                }
        },
        Y.clickConfirm = function () {
                return x().click()
        },
        Y.clickCancel = function () {
                return k().click()
        },
        Y.showLoading = Y.enableLoading = function () {
                var e = b();
                e || Y(""),
                e = b();
                var t = S(),
                        n = x(),
                        r = k();
                V(t),
                V(n, "inline-block"),
                T(t, o.loading),
                T(e, o.loading),
                n.disabled = !0,
                r.disabled = !0,
                e.setAttribute("aria-busy", !0),
                e.focus()
        },
        Y.isValidParameter = function (t) {
                return e.hasOwnProperty(t) || "extraParams" === t
        },
        Y.isDeprecatedParameter = function (e) {
                return -1 !== t.indexOf(e)
        },
        Y.setDefaults = function (e) {
                if (!e || "object" !== (void 0 === e ? "undefined" : H(e))) return l("the argument for setDefaults() is required and has to be a object");
                z(e);
                for (var t in e) Y.isValidParameter(t) && (I[t] = e[t])
        },
        Y.resetDefaults = function () {
                I = R({}, e)
        },
        Y.adaptInputValidator = function (e) {
                return function (t, n) {
                        return e.call(this, t, n).then(function () {}, function (e) {
                                return e
                        })
                }
        },
        Y.noop = function () {},
        Y.version = "7.0.6",
        Y.
default = Y,
        Y
}),
"undefined" != typeof window && window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);