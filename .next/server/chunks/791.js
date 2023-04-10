"use strict";
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 8580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useAuthContext),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const useAuthContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);
};


/***/ }),

/***/ 2323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d$": () => (/* binding */ useLoadingContext),
/* harmony export */   "pV": () => (/* binding */ LoadingContext),
/* harmony export */   "r$": () => (/* binding */ useLoading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useLoading = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const start = ()=>setIsLoading(false);
        const end = ()=>setIsLoading(false);
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", end);
        router.events.on("routeChangeError", end);
        return ()=>{
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
            router.events.off("routeChangeError", end);
        };
    }, []);
    return {
        isLoading,
        setIsLoading
    };
};
const LoadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const useLoadingContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LoadingContext);
};


/***/ })

};
;