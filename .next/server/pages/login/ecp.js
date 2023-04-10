"use strict";
(() => {
var exports = {};
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 6595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DownloadCircle = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "21",
        viewBox: "0 0 20 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.0003 18.6842C14.6027 18.6842 18.3337 14.9533 18.3337 10.3509C18.3337 5.74854 14.6027 2.01758 10.0003 2.01758C5.39795 2.01758 1.66699 5.74854 1.66699 10.3509C1.66699 14.9533 5.39795 18.6842 10.0003 18.6842Z",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.66699 10.3516L10.0003 13.6849L13.3337 10.3516",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10 7.01758V13.6842",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadCircle);


/***/ }),

/***/ 5400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2323);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_DownloadCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6595);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1996);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1125);
/* harmony import */ var _utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6117);
/* harmony import */ var _components_Form_FormErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4585);
/* harmony import */ var _hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8824);
/* harmony import */ var _icons_ArrowBlue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7094);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_AuthService__WEBPACK_IMPORTED_MODULE_7__, _utils_helpers__WEBPACK_IMPORTED_MODULE_8__]);
([_services_AuthService__WEBPACK_IMPORTED_MODULE_7__, _utils_helpers__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const LoginEcpPage = ()=>{
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { t , i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const [isPersonOpen, setPersonOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const personRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_10__/* .useOnClickOutside */ .t)(personRef, ()=>setPersonOpen(false));
    const refisterPki = ()=>{
        const websocket = new WebSocket("wss://127.0.0.1:13579/");
        let ready = null;
        let ecpData = {
            path: null,
            owner: null,
            data: null
        };
        websocket.onopen = ()=>{
            ready = true;
            handle();
        };
        websocket.onclose = (e)=>{
            if (e.wasClean) {
                console.log("connection closed");
            } else {
                alert(t("nca_layer_message"));
                console.log("error?");
                //setErrormodal(true);
                setTimeout(()=>{
                //setErrormodal(false);
                }, 5000);
            }
        };
        function handle() {
            if (!ready) {
                alert(t("nca_layer_message"));
            } else {
                const data = {
                    module: "kz.gov.pki.knca.commonUtils",
                    method: "signXml",
                    args: [
                        "PKCS12",
                        "AUTHENTICATION",
                        "<login><sessionid>caacda70-fd36-45ed-8d94-45a88890f83a</sessionid></login>",
                        "",
                        ""
                    ]
                };
                websocket.send(JSON.stringify(data));
            }
        }
        websocket.onmessage = (e)=>{
            const data1 = JSON.parse(e.data);
            ecpData.data = data1.responseObject;
            const ECP = {
                ecp: data1.responseObject
            };
            if (ECP.ecp) {
                _services_AuthService__WEBPACK_IMPORTED_MODULE_7__/* .AuthService.signInUserPki */ .e.signInUserPki(ECP).then((res)=>{
                    _utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_12__/* .LocalStorageHandler.setUserToken */ .g.setUserToken(res?.data?.token);
                    // Ветвление взависимости от роли
                    _services_AuthService__WEBPACK_IMPORTED_MODULE_7__/* .AuthService.getCurrentUser */ .e.getCurrentUser().then((res)=>{
                        if (res.data.data.role.slug === "admin") window.location.href = "/admin";
                        else window.location.href = "/profile";
                    });
                // router.push(`/`);
                }).catch((err)=>{
                    if (err.response.data.message === "Пользователь не найден") {
                        setErrorMessage(err.response.data.message);
                    } else {
                        setErrorMessage(`${t("wrong_data")}`);
                    }
                    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__/* .displayErrorMessage */ .Vw)(`${t("error_occured")}`);
                }).finally(setIsLoading(false));
            }
        };
    };
    const { isLoading , setIsLoading  } = (0,_context_loading__WEBPACK_IMPORTED_MODULE_3__/* .useLoadingContext */ .d$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { pathname , asPath , query , locale  } = router;
    const changeLocale = (lang, event)=>{
        event.preventDefault();
        router.push({
            pathname,
            query
        }, asPath, {
            locale: lang
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "login__wrapper--bg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "login__wrapper",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "login__wrapper_top",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "logo-img",
                            src: `/assets/images/new-logo${router.locale === "kk" ? "-kaz" : ""}.svg`,
                            alt: "logo"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sidemenu-user__dropdown",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `sidemenu-user__dropdown--main main__header--lang ${isPersonOpen ? "lang--open" : ""}`,
                                    onClick: ()=>setPersonOpen(true),
                                    children: [
                                        i18n.language === "ru" ? t("rus_lang") : t("kaz_lang"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ArrowBlue__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ref: personRef,
                                    className: `sidemenu-user__dropdown--hiden header--lang__items ${isPersonOpen ? "active" : ""}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: (event)=>{
                                                changeLocale("ru", event);
                                            },
                                            className: i18n.language === "ru" ? "active" : "",
                                            children: t("rus_lang")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: (event)=>{
                                                changeLocale("kk", event);
                                            },
                                            className: i18n.language === "kk" ? "active" : "",
                                            children: t("kaz_lang")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: t("autorization")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "login__registration",
                    style: {
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "c-btn c-btn-primary c-btn-rounded",
                            onClick: refisterPki,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_DownloadCircle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                " ",
                                t("upload_setrificat")
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_FormErrorMessage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            children: errorMessage && t(`${errorMessage}`)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/login",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "c-btn",
                                style: {
                                    color: "#f69f34"
                                },
                                children: t("sign_in_login")
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginEcpPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_pages_login_ECPLoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5400);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3479);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_pages_login_ECPLoginPage__WEBPACK_IMPORTED_MODULE_2__]);
_app_pages_login_ECPLoginPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const LoginEcp = ()=>{
    const [rendered, setRendered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { userInfo , updateUserInfo  } = (0,_app_context_auth__WEBPACK_IMPORTED_MODULE_7__/* .useAuthContext */ .E)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userInfo) {
            router.push("/profile");
        }
    }, [
        userInfo
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRendered(true);
    }, []);
    if (rendered) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_pages_login_ECPLoginPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
    }
    return null;
};
const getServerSideProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale, [
                "translate"
            ], (_next_i18next_config__WEBPACK_IMPORTED_MODULE_4___default()))
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginEcp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [63,791,996,824,793], () => (__webpack_exec__(1601)));
module.exports = __webpack_exports__;

})();