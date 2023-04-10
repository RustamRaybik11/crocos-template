(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6846);
/* harmony import */ var _app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_context_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2323);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6117);
/* harmony import */ var _app_services_AuthService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1996);
/* harmony import */ var _app_context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_services_AuthService__WEBPACK_IMPORTED_MODULE_6__]);
_app_services_AuthService__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function MyApp({ Component , pageProps  }) {
    const { isLoading , setIsLoading  } = (0,_app_context_loading__WEBPACK_IMPORTED_MODULE_2__/* .useLoading */ .r$)();
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [isAuth, setIsAuth] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (localStorage.getItem(".AuthToken")) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsLoading(false);
        const Token = _app_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_8__/* .LocalStorageHandler.getUserToken */ .g.getUserToken();
        if (Token) {
            _app_services_AuthService__WEBPACK_IMPORTED_MODULE_6__/* .AuthService.getCurrentUser */ .e.getCurrentUser().then((res)=>{}).catch((err)=>{
                _app_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_8__/* .LocalStorageHandler.clearUserToken */ .g.clearUserToken();
                next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/login");
            });
        }
        if ((next_router__WEBPACK_IMPORTED_MODULE_5___default().pathname) == "/login") {
            _app_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_8__/* .LocalStorageHandler.clearUserToken */ .g.clearUserToken();
            setIsAuth(false);
            next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/login");
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_context_loading__WEBPACK_IMPORTED_MODULE_2__/* .LoadingContext.Provider */ .pV.Provider, {
        value: {
            isLoading,
            setIsLoading
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_context_auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthContext.Provider */ .V.Provider, {
            value: {
                userInfo,
                isAuth,
                setIsAuth
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.appWithTranslation)(MyApp));
const getServerSideProps = async (context)=>{
    return {
        props: {
            cookies: context.req.cookies ?? ""
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6846:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [791,996], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();