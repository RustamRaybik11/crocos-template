exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 2204:
/***/ ((module) => {

// Exports
module.exports = {
	"error": "styles_error__BdAxH"
};


/***/ }),

/***/ 4585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2204);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const FormErrorMessage = ({ children  })=>{
    return children ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error)),
        children: children
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormErrorMessage);


/***/ }),

/***/ 7094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ArrowBlue() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M4.5 6.75L9 11.25L13.5 6.75",
            stroke: "#0F85EE",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowBlue);


/***/ }),

/***/ 1125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SY": () => (/* binding */ displaySuccessMessage),
/* harmony export */   "Vw": () => (/* binding */ displayErrorMessage)
/* harmony export */ });
/* unused harmony exports setValidationErrors, convertObjectToFormData, displayInfoMessage, displayPromiseMessage, getTranslateNameText */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const setValidationErrors = (errorsFromBackend, errorFunction)=>{
    for(const error in errorsFromBackend){
        errorFunction(error, {
            type: "manual",
            message: errorsFromBackend[error][0]
        });
    }
};
const buildFormData = (formData, data, parentKey)=>{
    if (data && typeof data === "object" && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach((key)=>{
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data == null ? "" : data;
        formData.append(parentKey, value);
    }
};
const convertObjectToFormData = (data)=>{
    const formData = new FormData();
    buildFormData(formData, data, "");
    return formData;
};
const displayErrorMessage = (error)=>{
    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};
const displaySuccessMessage = (message)=>{
    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};
const displayInfoMessage = (message)=>{
    toast.info(message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};
const displayPromiseMessage = (message)=>{
    const resolveAfter3Sec = new Promise((resolve)=>setTimeout(resolve, 3000));
    toast.promise(resolveAfter3Sec, {
        pending: message.pending,
        success: message.success,
        error: message.error
    }, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};
// export const scrollToTop = (ref: RefObject<HTMLDivElement>) => {
//   ref.current?.scrollIntoView({behavior: "smooth"})
// }
const getTranslateNameText = (object, str, loc = "")=>{
    const newStr = str.substring(0, str.length - 2).toLocaleLowerCase();
    let routerLocale;
    if (loc !== "") {
        const { locale  } = useRouter();
        routerLocale = locale;
    }
    if (object) return object[`${newStr}${loc ?? routerLocale}`] || object[`${str}`];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3479:
/***/ ((module) => {

"use strict";

module.exports = {
    i18n: {
        defaultLocale: "ru",
        locales: [
            "ru",
            "kk"
        ]
    },
    defaultNS: "translate"
};


/***/ })

};
;