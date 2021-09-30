/*! For license information please see bundle.js.LICENSE.txt */
!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.Alert = r())
    : (e.Alert = r());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        424: (e, r, t) => {
          t.d(r, { Z: () => c });
          var n = t(81),
            o = t.n(n),
            a = t(645),
            i = t.n(a)()(o());
          i.push([
            e.id,
            ".cdx-alert {\r\n    position: relative;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .cdx-alert__message {\r\n    outline: none;\r\n  }\r\n  \r\n  .cdx-alert [contentEditable='true'][data-placeholder]::before {\r\n    position: absolute;\r\n    content: attr(data-placeholder);\r\n    color: #707684;\r\n    font-weight: normal;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .cdx-alert [contentEditable='true'][data-placeholder]:empty::before {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .cdx-alert [contentEditable='true'][data-placeholder]:empty:focus::before {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .cdx-alert-primary {\r\n    background-color: #ebf8ff;\r\n    border: 1px solid #4299e1;\r\n    color: #2b6cb0;\r\n  }\r\n  \r\n  .cdx-alert-secondary {\r\n    background-color: #f7fafc;\r\n    border: 1px solid #cbd5e0;\r\n    color: #222731;\r\n  }\r\n  \r\n  .cdx-alert-info {\r\n    background-color: #e6fdff;\r\n    border: 1px solid #4cd4ce;\r\n    color: #00727c;\r\n  }\r\n  \r\n  .cdx-alert-success {\r\n    background-color: #f0fff4;\r\n    border: 1px solid #68d391;\r\n    color: #2f855a;\r\n  }\r\n  \r\n  .cdx-alert-warning {\r\n    background-color: #fffaf0;\r\n    border: 1px solid #ed8936;\r\n    color: #c05621;\r\n  }\r\n  \r\n  .cdx-alert-danger {\r\n    background-color: #fff5f5;\r\n    border: 1px solid #fc8181;\r\n    color: #c53030;\r\n  }\r\n  \r\n  .cdx-alert-light {\r\n    background-color: #fff;\r\n    border: 1px solid #edf2f7;\r\n    color: #1a202c;\r\n  }\r\n  \r\n  .cdx-alert-dark {\r\n    background-color: #2d3748;\r\n    border: 1px solid #1a202c;\r\n    color: #d3d3d3;\r\n  }\r\n  \r\n  .cdx-alert.cdx-settings-button {\r\n    margin: 3px;\r\n    width: 28px;\r\n    height: 28px;\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .cdx-alert.cdx-settings-button:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .cdx-alert.cdx-settings-button--active,\r\n  .cdx-alert.ce-settings__button--focused {\r\n    font-weight: bold;\r\n    opacity: 0.9;\r\n  }",
            "",
          ]);
          const c = i;
        },
        645: (e) => {
          e.exports = function (e) {
            var r = [];
            return (
              (r.toString = function () {
                return this.map(function (r) {
                  var t = "",
                    n = void 0 !== r[5];
                  return (
                    r[4] && (t += "@supports (".concat(r[4], ") {")),
                    r[2] && (t += "@media ".concat(r[2], " {")),
                    n &&
                      (t += "@layer".concat(
                        r[5].length > 0 ? " ".concat(r[5]) : "",
                        " {"
                      )),
                    (t += e(r)),
                    n && (t += "}"),
                    r[2] && (t += "}"),
                    r[4] && (t += "}"),
                    t
                  );
                }).join("");
              }),
              (r.i = function (e, t, n, o, a) {
                "string" == typeof e && (e = [[null, e, void 0]]);
                var i = {};
                if (n)
                  for (var c = 0; c < this.length; c++) {
                    var s = this[c][0];
                    null != s && (i[s] = !0);
                  }
                for (var l = 0; l < e.length; l++) {
                  var u = [].concat(e[l]);
                  (n && i[u[0]]) ||
                    (void 0 !== a &&
                      (void 0 === u[5] ||
                        (u[1] = "@layer"
                          .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                          .concat(u[1], "}")),
                      (u[5] = a)),
                    t &&
                      (u[2]
                        ? ((u[1] = "@media "
                            .concat(u[2], " {")
                            .concat(u[1], "}")),
                          (u[2] = t))
                        : (u[2] = t)),
                    o &&
                      (u[4]
                        ? ((u[1] = "@supports ("
                            .concat(u[4], ") {")
                            .concat(u[1], "}")),
                          (u[4] = o))
                        : (u[4] = "".concat(o))),
                    r.push(u));
                }
              }),
              r
            );
          };
        },
        81: (e) => {
          e.exports = function (e) {
            return e[1];
          };
        },
        548: (e, r, t) => {
          var n = t(379),
            o = t.n(n),
            a = t(795),
            i = t.n(a),
            c = t(569),
            s = t.n(c),
            l = t(565),
            u = t.n(l),
            d = t(216),
            p = t.n(d),
            f = t(589),
            y = t.n(f),
            v = t(424),
            h = {};
          (h.styleTagTransform = y()),
            (h.setAttributes = u()),
            (h.insert = s().bind(null, "head")),
            (h.domAPI = i()),
            (h.insertStyleElement = p()),
            o()(v.Z, h),
            v.Z && v.Z.locals && v.Z.locals;
        },
        379: (e) => {
          var r = [];
          function t(e) {
            for (var t = -1, n = 0; n < r.length; n++)
              if (r[n].identifier === e) {
                t = n;
                break;
              }
            return t;
          }
          function n(e, n) {
            for (var a = {}, i = [], c = 0; c < e.length; c++) {
              var s = e[c],
                l = n.base ? s[0] + n.base : s[0],
                u = a[l] || 0,
                d = "".concat(l, " ").concat(u);
              a[l] = u + 1;
              var p = t(d),
                f = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3],
                  supports: s[4],
                  layer: s[5],
                };
              if (-1 !== p) r[p].references++, r[p].updater(f);
              else {
                var y = o(f, n);
                (n.byIndex = c),
                  r.splice(c, 0, { identifier: d, updater: y, references: 1 });
              }
              i.push(d);
            }
            return i;
          }
          function o(e, r) {
            var t = r.domAPI(r);
            return (
              t.update(e),
              function (r) {
                if (r) {
                  if (
                    r.css === e.css &&
                    r.media === e.media &&
                    r.sourceMap === e.sourceMap &&
                    r.supports === e.supports &&
                    r.layer === e.layer
                  )
                    return;
                  t.update((e = r));
                } else t.remove();
              }
            );
          }
          e.exports = function (e, o) {
            var a = n((e = e || []), (o = o || {}));
            return function (e) {
              e = e || [];
              for (var i = 0; i < a.length; i++) {
                var c = t(a[i]);
                r[c].references--;
              }
              for (var s = n(e, o), l = 0; l < a.length; l++) {
                var u = t(a[l]);
                0 === r[u].references && (r[u].updater(), r.splice(u, 1));
              }
              a = s;
            };
          };
        },
        569: (e) => {
          var r = {};
          e.exports = function (e, t) {
            var n = (function (e) {
              if (void 0 === r[e]) {
                var t = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                r[e] = t;
              }
              return r[e];
            })(e);
            if (!n)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            n.appendChild(t);
          };
        },
        216: (e) => {
          e.exports = function (e) {
            var r = document.createElement("style");
            return e.setAttributes(r, e.attributes), e.insert(r, e.options), r;
          };
        },
        565: (e, r, t) => {
          e.exports = function (e) {
            var r = t.nc;
            r && e.setAttribute("nonce", r);
          };
        },
        795: (e) => {
          e.exports = function (e) {
            var r = e.insertStyleElement(e);
            return {
              update: function (t) {
                !(function (e, r, t) {
                  var n = "";
                  t.supports && (n += "@supports (".concat(t.supports, ") {")),
                    t.media && (n += "@media ".concat(t.media, " {"));
                  var o = void 0 !== t.layer;
                  o &&
                    (n += "@layer".concat(
                      t.layer.length > 0 ? " ".concat(t.layer) : "",
                      " {"
                    )),
                    (n += t.css),
                    o && (n += "}"),
                    t.media && (n += "}"),
                    t.supports && (n += "}");
                  var a = t.sourceMap;
                  a &&
                    "undefined" != typeof btoa &&
                    (n +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */"
                      )),
                    r.styleTagTransform(n, e, r.options);
                })(r, e, t);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(r);
              },
            };
          };
        },
        589: (e) => {
          e.exports = function (e, r) {
            if (r.styleSheet) r.styleSheet.cssText = e;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(e));
            }
          };
        },
        427: (e, r, t) => {
          e.exports = t.p + "3f34c55a6a2deeb40ff5.svg";
        },
      },
      r = {};
    function t(n) {
      var o = r[n];
      if (void 0 !== o) return o.exports;
      var a = (r[n] = { id: n, exports: {} });
      return e[n](a, a.exports, t), a.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var n in r)
          t.o(r, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.p = "/");
    var n = {};
    return (
      (() => {
        t.d(n, { default: () => l });
        var e = t(427);
        function r(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, r) {
              if (e) {
                if ("string" == typeof e) return o(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? o(e, r)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function o(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
          return n;
        }
        function a(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r &&
              (n = n.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
              })),
              t.push.apply(t, n);
          }
          return t;
        }
        function i(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? a(Object(t), !0).forEach(function (r) {
                  c(e, r, t[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : a(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
          }
          return e;
        }
        function c(e, r, t) {
          return (
            r in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = t),
            e
          );
        }
        function s(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        t(548).toString();
        var l = (function () {
          function t(e) {
            var r = e.data,
              n = e.config,
              o = e.api,
              a = e.readOnly;
            !(function (e, r) {
              if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.api = o),
              (this.defaultType = n.defaultType || t.DEFAULT_TYPE),
              (this.messagePlaceholder =
                n.messagePlaceholder || t.DEFAULT_MESSAGE_PLACEHOLDER),
              (this.data = {
                type: t.ALERT_TYPES.includes(r.type)
                  ? r.type
                  : this.defaultType,
                message: r.message || "",
              }),
              (this.container = void 0),
              (this.readOnly = a);
          }
          var n, o, a;
          return (
            (n = t),
            (o = [
              {
                key: "CSS",
                get: function () {
                  return {
                    settingsButton: this.api.styles.settingsButton,
                    settingsButtonActive: this.api.styles.settingsButtonActive,
                    wrapper: "cdx-alert",
                    wrapperForType: function (e) {
                      return "cdx-alert-".concat(e);
                    },
                    message: "cdx-alert__message",
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = [
                    this.CSS.wrapper,
                    this.CSS.wrapperForType(this.data.type),
                  ];
                  this.container = this._make("div", e);
                  var r = this._make("div", [this.CSS.message], {
                    contentEditable: !this.readOnly,
                    innerHTML: this.data.message,
                  });
                  return (
                    (r.dataset.placeholder = this.messagePlaceholder),
                    this.container.appendChild(r),
                    this.container
                  );
                },
              },
              {
                key: "renderSettings",
                value: function () {
                  var e = this,
                    r = this._make("div");
                  return (
                    t.ALERT_TYPES.forEach(function (t) {
                      var n = e._make(
                        "div",
                        [
                          e.CSS.settingsButton,
                          e.CSS.wrapper,
                          e.CSS.wrapperForType(t),
                        ],
                        { innerHTML: "A" }
                      );
                      e.data.type === t &&
                        n.classList.add(e.CSS.settingsButtonActive),
                        n.addEventListener("click", function () {
                          e._changeAlertType(t),
                            r
                              .querySelectorAll(
                                ".".concat(e.CSS.settingsButton)
                              )
                              .forEach(function (r) {
                                return r.classList.remove(
                                  e.CSS.settingsButtonActive
                                );
                              }),
                            n.classList.add(e.CSS.settingsButtonActive);
                        }),
                        r.appendChild(n);
                    }),
                    r
                  );
                },
              },
              {
                key: "_changeAlertType",
                value: function (e) {
                  var r = this;
                  (this.data.type = e),
                    t.ALERT_TYPES.forEach(function (t) {
                      var n = r.CSS.wrapperForType(t);
                      r.container.classList.remove(n),
                        e === t && r.container.classList.add(n);
                    });
                },
              },
              {
                key: "save",
                value: function (e) {
                  var r = e.querySelector(".".concat(this.CSS.message));
                  return i(i({}, this.data), {}, { message: r.innerHTML });
                },
              },
              {
                key: "_make",
                value: function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    a = document.createElement(e);
                  for (var i in (Array.isArray(n)
                    ? (t = a.classList).add.apply(t, r(n))
                    : n && a.classList.add(n),
                  o))
                    a[i] = o[i];
                  return a;
                },
              },
              {
                key: "onPaste",
                value: function (e) {
                  var r = e.detail.data;
                  this.data = {
                    type: this.defaultType,
                    message: r.innerHTML || "",
                  };
                },
              },
            ]),
            (a = [
              {
                key: "toolbox",
                get: function () {
                  return { icon: e, title: "Alert" };
                },
              },
              {
                key: "enableLineBreaks",
                get: function () {
                  return !0;
                },
              },
              {
                key: "DEFAULT_TYPE",
                get: function () {
                  return "info";
                },
              },
              {
                key: "DEFAULT_MESSAGE_PLACEHOLDER",
                get: function () {
                  return "Type here...";
                },
              },
              {
                key: "ALERT_TYPES",
                get: function () {
                  return [
                    "primary",
                    "secondary",
                    "info",
                    "success",
                    "warning",
                    "danger",
                    "light",
                    "dark",
                  ];
                },
              },
              {
                key: "isReadOnlySupported",
                get: function () {
                  return !0;
                },
              },
              {
                key: "conversionConfig",
                get: function () {
                  var e = this;
                  return {
                    export: function (e) {
                      return e.message;
                    },
                    import: function (r) {
                      return { message: r, type: e.DEFAULT_TYPE };
                    },
                  };
                },
              },
              {
                key: "sanitize",
                get: function () {
                  return { type: !1, message: !0 };
                },
              },
            ]),
            o && s(n.prototype, o),
            a && s(n, a),
            t
          );
        })();
      })(),
      n.default
    );
  })();
});