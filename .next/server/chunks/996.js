"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 1996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1210);
/* harmony import */ var _utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_http__WEBPACK_IMPORTED_MODULE_0__]);
_utils_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const signInUser = (data)=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("login", data);
};
const signInUserPki = (data)=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("login/pki", data);
};
const logOutUser = ()=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("logout", _utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageHandler.getUserToken */ .g.getUserToken(), {
        headers: {
            Authorization: `Bearer ${_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageHandler.getUserToken */ .g.getUserToken()}`
        }
    });
};
const signUpUser = (data)=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("registration", data);
};
const resetPassword = (data)=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("password-resets", data);
};
const changePassword = (data)=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch("users/change-password", data, {
        headers: {
            Authorization: `Bearer ${_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageHandler.getUserToken */ .g.getUserToken()}`
        }
    });
};
const getAllUsers = (filter = "")=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`users${filter}`, {
        headers: {
            Authorization: `Bearer ${_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageHandler.getUserToken */ .g.getUserToken()}`
        }
    });
};
const getCurrentUser = ()=>{
    return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("me", {
        headers: {
            Authorization: `Bearer ${_utils_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageHandler.getUserToken */ .g.getUserToken()}`
        }
    });
};
const AuthService = {
    signInUser,
    logOutUser,
    getCurrentUser,
    signUpUser,
    getAllUsers,
    resetPassword,
    signInUserPki,
    changePassword
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const BASE_URL = "https://api.ses.crocos.kz/";
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: `${BASE_URL}api/v1`,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ LocalStorageHandler)
/* harmony export */ });
class LocalStorageHandler {
    static getUserToken = ()=>{
        const token = localStorage.getItem(".AuthToken");
        return token ?? null;
    };
    static setUserToken = (token)=>{
        localStorage.setItem(".AuthToken", token);
    };
    static clearUserToken = ()=>{
        localStorage.removeItem(".AuthToken");
    };
    static getLisToken = ()=>{
        const token = localStorage.getItem(".LisToken");
        return token ?? null;
    };
    static setLisToken = (token)=>{
        localStorage.setItem(".LisToken", token);
    };
    static clearLisToken = ()=>{
        localStorage.removeItem(".LisToken");
    };
    static getUserRole = ()=>{
        const role = localStorage.getItem(".AuthRole");
        return role ?? null;
    };
    static setUserRole = (role)=>{
        localStorage.setItem(".AuthRole", role);
    };
    static clearUserRole = ()=>{
        localStorage.removeItem(".AuthRole");
    };
}


/***/ })

};
;